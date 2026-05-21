#!/usr/bin/env python3
"""Prepare a Xiaohongshu image post without clicking publish.

The script validates an approved aDict Xiaohongshu post package, then can
optionally reuse the existing Arc CDP browser session to open the creator
composer, upload images, and fill title/body. It deliberately stops before the
final publish action.
"""

from __future__ import annotations

import argparse
import dataclasses
import json
import re
import struct
import sys
import urllib.error
import urllib.request
from pathlib import Path
from typing import Iterable, Sequence


DEFAULT_CDP = "http://localhost:9222"
DEFAULT_PUBLISH_URL = "https://creator.xiaohongshu.com/new/publish"
DEFAULT_MAX_TITLE_CHARS = 20
DEFAULT_MAX_BODY_CHARS = 1000
DEFAULT_EXPECTED_WIDTH = 2160
DEFAULT_EXPECTED_HEIGHT = 2880
DEFAULT_EXPECTED_COUNT = 6
RISK_TERMS = (
    "打开网址",
    "点击链接",
    "复制链接",
    "官网",
    "下载",
    "App Store",
    "应用商店",
    "微信",
    "VX",
    "私信",
    "加群",
)


class PublishError(Exception):
    """A validation or browser-preparation error."""


@dataclasses.dataclass(frozen=True)
class ImageInfo:
    path: Path
    width: int
    height: int
    format: str
    size_bytes: int


@dataclasses.dataclass(frozen=True)
class PostPackage:
    draft: Path
    image_dir: Path
    title: str
    body: str
    images: list[ImageInfo]
    warnings: list[str]


def main(argv: Sequence[str] | None = None) -> int:
    args = parse_args(argv)
    try:
        package = build_package(args)
        print_summary(package, args)

        if args.package_json:
            write_package_json(package, Path(args.package_json))

        if args.open_browser or args.fill_browser:
            prepare_browser(package, args)

        if package.warnings and not args.allow_warnings:
            print(
                "\nWarnings found. Review them before publishing, or rerun with "
                "--allow-warnings after review.",
                file=sys.stderr,
            )
            return 2

        return 0
    except PublishError as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1


def parse_args(argv: Sequence[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Validate and prepare a Xiaohongshu image post package.",
    )
    parser.add_argument("--draft", required=True, help="Markdown draft or published record.")
    parser.add_argument("--images", required=True, help="Directory containing card images.")
    parser.add_argument("--image-glob", default="card-*.png", help="Image glob inside --images.")
    parser.add_argument("--expected-count", type=int, default=DEFAULT_EXPECTED_COUNT)
    parser.add_argument("--expected-width", type=int, default=DEFAULT_EXPECTED_WIDTH)
    parser.add_argument("--expected-height", type=int, default=DEFAULT_EXPECTED_HEIGHT)
    parser.add_argument("--max-title-chars", type=int, default=DEFAULT_MAX_TITLE_CHARS)
    parser.add_argument("--max-body-chars", type=int, default=DEFAULT_MAX_BODY_CHARS)
    parser.add_argument("--title", help="Override title instead of reading from draft.")
    parser.add_argument("--body", help="Override body instead of reading from draft.")
    parser.add_argument("--body-file", help="Read body override from a text file.")
    parser.add_argument(
        "--no-append-tags",
        action="store_true",
        help="Do not append the draft's ## Tags block when the body has no hashtags.",
    )
    parser.add_argument(
        "--allow-warnings",
        action="store_true",
        help="Return success even when copy warnings are found.",
    )
    parser.add_argument(
        "--package-json",
        help="Optional output path for the validated title/body/image manifest.",
    )
    parser.add_argument(
        "--open-browser",
        action="store_true",
        help="Open the Xiaohongshu creator publish page in the existing Arc CDP session.",
    )
    parser.add_argument(
        "--fill-browser",
        action="store_true",
        help="Upload images and fill title/body in the existing Arc CDP session. Never publishes.",
    )
    parser.add_argument("--cdp-url", default=DEFAULT_CDP, help="Arc CDP endpoint.")
    parser.add_argument("--publish-url", default=DEFAULT_PUBLISH_URL)
    parser.add_argument(
        "--browser-timeout-ms",
        type=int,
        default=45000,
        help="Timeout for browser actions.",
    )
    parser.add_argument(
        "--skip-browser-health-check",
        action="store_true",
        help="Skip the /json/version health check before browser work.",
    )
    return parser.parse_args(argv)


def build_package(args: argparse.Namespace) -> PostPackage:
    draft = Path(args.draft).expanduser().resolve()
    image_dir = Path(args.images).expanduser().resolve()
    if not draft.is_file():
        raise PublishError(f"draft not found: {draft}")
    if not image_dir.is_dir():
        raise PublishError(f"image directory not found: {image_dir}")

    markdown = draft.read_text(encoding="utf-8")
    title = normalize_text(args.title) if args.title else extract_title(markdown)
    body = read_body(args, markdown)
    images = collect_images(
        image_dir=image_dir,
        image_glob=args.image_glob,
        expected_count=args.expected_count,
        expected_width=args.expected_width,
        expected_height=args.expected_height,
    )
    warnings = validate_copy(
        title=title,
        body=body,
        max_title_chars=args.max_title_chars,
        max_body_chars=args.max_body_chars,
    )
    return PostPackage(
        draft=draft,
        image_dir=image_dir,
        title=title,
        body=body,
        images=images,
        warnings=warnings,
    )


def read_body(args: argparse.Namespace, markdown: str) -> str:
    if args.body_file:
        body = Path(args.body_file).expanduser().read_text(encoding="utf-8")
    elif args.body:
        body = args.body
    else:
        body = extract_body(markdown)
        if not args.no_append_tags and "#" not in body:
            tags = extract_tags(markdown)
            if tags:
                body = f"{body.rstrip()}\n\n{tags}"
    return normalize_text(body)


def extract_title(markdown: str) -> str:
    candidates = [
        extract_fenced_after_heading(markdown, "Title"),
        extract_fenced_after_label(markdown, "Recommended title:"),
    ]
    for candidate in candidates:
        if candidate:
            return normalize_text(candidate)

    match = re.search(r"^1\.\s+(.+)$", markdown, re.MULTILINE)
    if match:
        return normalize_text(match.group(1))
    raise PublishError("could not extract title; pass --title")


def extract_body(markdown: str) -> str:
    for heading in ("Body", "Body Copy"):
        body = extract_fenced_after_heading(markdown, heading)
        if body:
            return normalize_text(body)
    raise PublishError("could not extract body; pass --body or --body-file")


def extract_tags(markdown: str) -> str:
    tags = extract_fenced_after_heading(markdown, "Tags")
    return normalize_text(tags) if tags else ""


def extract_fenced_after_heading(markdown: str, heading: str) -> str:
    pattern = rf"^##\s+{re.escape(heading)}\s*$([\s\S]*?)(?=^##\s+|\Z)"
    match = re.search(pattern, markdown, re.MULTILINE)
    if not match:
        return ""
    return first_fenced_block(match.group(1))


def extract_fenced_after_label(markdown: str, label: str) -> str:
    index = markdown.find(label)
    if index < 0:
        return ""
    return first_fenced_block(markdown[index + len(label) :])


def first_fenced_block(text: str) -> str:
    match = re.search(r"```(?:[a-zA-Z0-9_-]+)?\s*\n([\s\S]*?)\n```", text)
    return match.group(1) if match else ""


def normalize_text(text: str) -> str:
    lines = [line.rstrip() for line in text.replace("\r\n", "\n").replace("\r", "\n").split("\n")]
    return "\n".join(lines).strip()


def collect_images(
    image_dir: Path,
    image_glob: str,
    expected_count: int,
    expected_width: int,
    expected_height: int,
) -> list[ImageInfo]:
    paths = sorted(path for path in image_dir.glob(image_glob) if path.is_file())
    if len(paths) != expected_count:
        raise PublishError(
            f"expected {expected_count} images matching {image_glob}, found {len(paths)}"
        )
    expected_names = [f"card-{index:02d}.png" for index in range(1, expected_count + 1)]
    actual_names = [path.name for path in paths]
    if actual_names != expected_names:
        raise PublishError(
            "image order/names are not the expected card sequence: "
            f"expected {expected_names}, found {actual_names}"
        )

    images = []
    for path in paths:
        info = read_image_info(path)
        if info.width != expected_width or info.height != expected_height:
            raise PublishError(
                f"{path} is {info.width} x {info.height}, expected "
                f"{expected_width} x {expected_height}"
            )
        images.append(info)
    return images


def read_image_info(path: Path) -> ImageInfo:
    data = path.read_bytes()
    if len(data) >= 24 and data.startswith(b"\x89PNG\r\n\x1a\n"):
        width, height = struct.unpack(">II", data[16:24])
        return ImageInfo(path=path, width=width, height=height, format="PNG", size_bytes=len(data))
    raise PublishError(f"unsupported or invalid image file: {path}")


def validate_copy(
    title: str,
    body: str,
    max_title_chars: int,
    max_body_chars: int,
) -> list[str]:
    if not title:
        raise PublishError("title is empty")
    if not body:
        raise PublishError("body is empty")
    warnings = []
    title_chars = len(title)
    body_chars = len(body)
    if title_chars > max_title_chars:
        warnings.append(f"title has {title_chars} chars; configured limit is {max_title_chars}")
    if body_chars > max_body_chars:
        warnings.append(f"body has {body_chars} chars; configured limit is {max_body_chars}")

    hashtags = re.findall(r"#[\w\u4e00-\u9fff]+", body)
    if len(hashtags) > 12:
        warnings.append(f"body has {len(hashtags)} hashtags; consider keeping the set tighter")
    if not hashtags:
        warnings.append("body has no hashtags")

    url_like = re.findall(r"https?://\S+|[A-Za-z0-9.-]+\.[A-Za-z]{2,}", body)
    if url_like:
        warnings.append("body contains URL-like text; review Xiaohongshu traffic-risk wording")

    for term in RISK_TERMS:
        if term in body:
            warnings.append(f"body contains risk term: {term}")
    return warnings


def print_summary(package: PostPackage, args: argparse.Namespace) -> None:
    print("Xiaohongshu publish package")
    print(f"- draft: {package.draft}")
    print(f"- image dir: {package.image_dir}")
    print(f"- images: {len(package.images)}")
    for index, image in enumerate(package.images, start=1):
        mb = image.size_bytes / 1024 / 1024
        print(f"  {index:02d}. {image.path.name} {image.width}x{image.height} {mb:.2f} MB")
    print(f"- title ({len(package.title)} chars): {package.title}")
    print(f"- body chars: {len(package.body)} / {args.max_body_chars}")
    hashtags = re.findall(r"#[\w\u4e00-\u9fff]+", package.body)
    print(f"- hashtags ({len(hashtags)}): {' '.join(hashtags) if hashtags else '(none)'}")
    if package.warnings:
        print("- warnings:")
        for warning in package.warnings:
            print(f"  - {warning}")
    else:
        print("- warnings: none")
    print("- final publish click: disabled by this script")


def write_package_json(package: PostPackage, output_path: Path) -> None:
    output_path = output_path.expanduser().resolve()
    output_path.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "draft": str(package.draft),
        "image_dir": str(package.image_dir),
        "title": package.title,
        "body": package.body,
        "images": [
            {
                "path": str(image.path),
                "width": image.width,
                "height": image.height,
                "format": image.format,
                "size_bytes": image.size_bytes,
            }
            for image in package.images
        ],
        "warnings": package.warnings,
    }
    output_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"- package json: {output_path}")


def prepare_browser(package: PostPackage, args: argparse.Namespace) -> None:
    if not args.skip_browser_health_check:
        check_cdp(args.cdp_url)
    try:
        from playwright.sync_api import sync_playwright
    except Exception as exc:  # pragma: no cover - depends on local runtime
        raise PublishError(f"Playwright is required for browser mode: {exc}") from exc

    timeout = args.browser_timeout_ms
    with sync_playwright() as playwright:
        browser = playwright.chromium.connect_over_cdp(args.cdp_url, timeout=timeout)
        if not browser.contexts:
            raise PublishError("Arc CDP has no reusable browser context")
        context = browser.contexts[0]
        page = choose_page(context, args.publish_url)
        page.set_default_timeout(timeout)
        if not page.url.startswith(args.publish_url):
            page.goto(args.publish_url, wait_until="domcontentloaded")
        page.wait_for_load_state("domcontentloaded")
        print(f"- browser page: {page.url}")
        if not args.fill_browser:
            print("- browser opened only; not filling composer")
            return
        upload_images(page, package.images)
        fill_composer(page, package.title, package.body)
        try:
            page.wait_for_timeout(1000)
            publish_disabled = page.evaluate(
                """() => {
                    const candidates = Array.from(document.querySelectorAll('button, xhs-publish-btn'));
                    return candidates
                      .filter((el) => /发布|Publish/i.test(el.innerText || el.textContent || el.getAttribute('text') || ''))
                      .map((el) => ({
                        tag: el.tagName,
                        text: (el.innerText || el.textContent || '').trim(),
                        disabled: Boolean(el.disabled) || el.getAttribute('submit-disabled') === 'true' || el.getAttribute('disabled') !== null
                      }));
                }"""
            )
            print(f"- publish controls detected: {json.dumps(publish_disabled, ensure_ascii=False)}")
        except Exception:
            pass
        print("- composer prepared; review manually and click publish yourself")
        # Do not call browser.close(): this connection is the user's live Arc.


def check_cdp(cdp_url: str) -> None:
    version_url = cdp_url.rstrip("/") + "/json/version"
    try:
        with urllib.request.urlopen(version_url, timeout=5) as response:
            if response.status != 200:
                raise PublishError(f"CDP health check failed: HTTP {response.status}")
            data = json.loads(response.read().decode("utf-8"))
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as exc:
        raise PublishError(f"CDP health check failed for {version_url}: {exc}") from exc
    print(f"- CDP: {data.get('Browser', 'ok')}")


def choose_page(context, publish_url: str):
    for page in context.pages:
        if "creator.xiaohongshu.com" in page.url:
            return page
    if context.pages:
        return context.pages[-1]
    return context.new_page()


def upload_images(page, images: Iterable[ImageInfo]) -> None:
    image_paths = [str(image.path) for image in images]
    input_locator = page.locator("input[type=file]").first
    if callable(input_locator):
        input_locator = input_locator()
    try:
        input_locator.set_input_files(image_paths)
    except Exception as exc:
        raise PublishError(
            "could not set image files. Make sure the Xiaohongshu upload panel is visible "
            "or upload images manually, then rerun with --open-browser only."
        ) from exc
    print(f"- uploaded image files: {len(image_paths)}")


def fill_composer(page, title: str, body: str) -> None:
    title_selectors = [
        'input[placeholder*="标题"]',
        'textarea[placeholder*="标题"]',
        '[contenteditable="true"][data-placeholder*="标题"]',
        '[contenteditable="true"][placeholder*="标题"]',
    ]
    body_selectors = [
        'textarea[placeholder*="正文"]',
        'textarea[placeholder*="描述"]',
        'textarea[placeholder*="添加"]',
        '[contenteditable="true"][data-placeholder*="正文"]',
        '[contenteditable="true"][data-placeholder*="描述"]',
        '[contenteditable="true"][placeholder*="正文"]',
        ".ql-editor",
    ]
    fill_first(page, title_selectors, title, "title")
    fill_first(page, body_selectors, body, "body")


def fill_first(page, selectors: Sequence[str], text: str, label: str) -> None:
    errors = []
    for selector in selectors:
        locator = page.locator(selector).first
        if callable(locator):
            locator = locator()
        try:
            if locator.count() < 1 or not locator.is_visible():
                continue
            locator.click()
            try:
                locator.fill(text)
            except Exception:
                page.keyboard.press("Meta+A")
                page.keyboard.type(text, delay=1)
            print(f"- filled {label}: {selector}")
            return
        except Exception as exc:
            errors.append(f"{selector}: {exc}")
    raise PublishError(f"could not find visible {label} field. Tried: {', '.join(selectors)}")


if __name__ == "__main__":
    raise SystemExit(main())
