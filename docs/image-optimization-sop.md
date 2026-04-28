# Image Optimization SOP

Use this SOP whenever PNG assets are added, replaced, or exported again.

## Goal

- Keep WebP as the primary browser format for the landing page.
- Keep PNG files as optimized fallbacks for unsupported browsers and direct asset URLs.
- Make the process repeatable without hand-editing generated image files.

## Tools

Required local tools:

```sh
brew install webp oxipng
```

The repo script checks for:

- `cwebp`, from the `webp` Homebrew formula.
- `oxipng`, for lossless PNG compression.

## When to Run

Run the image optimization script after any of these changes:

- Replacing screenshots in `assets/`.
- Adding new PNG images under `assets/`.
- Updating files under `assets/old/`.
- Adjusting WebP quality policy.

## Standard Procedure

1. Check the worktree before changing generated assets:

   ```sh
   git status --short --branch
   ```

2. Optional: record the current PNG and WebP totals:

   ```sh
   zsh -lc 'du -ch assets/*.png assets/old/*.png | tail -1'
   zsh -lc 'du -ch assets/*.webp | tail -1'
   ```

3. Run the optimizer:

   ```sh
   scripts/optimize-images.sh
   ```

   This script:

   - Runs `oxipng -o 4 --strip safe --recursive assets` to losslessly optimize PNG files.
   - Generates WebP files from top-level `assets/*.png`.
   - Uses WebP quality `90` by default.

4. For a higher WebP quality pass, override the quality:

   ```sh
   WEBP_QUALITY=92 scripts/optimize-images.sh
   ```

5. Review the size changes:

   ```sh
   git diff --stat
   ```

6. Verify generated files are readable:

   ```sh
   zsh -lc 'file assets/*.png assets/old/*.png assets/*.webp'
   zsh -lc 'for f in assets/*.png assets/old/*.png assets/*.webp; do magick identify -quiet "$f" >/dev/null; done'
   ```

7. Confirm text diffs are clean:

   ```sh
   git diff --check
   ```

8. If HTML or CSS references changed, preview locally:

   ```sh
   python3 -m http.server 4190 --bind 127.0.0.1
   ```

   Open:

   ```text
   http://127.0.0.1:4190/
   ```

9. In the browser DevTools console, confirm the displayed images use WebP:

   ```js
   Array.from(document.images).map((img) => img.currentSrc || img.src)
   ```

10. Commit the intended changes:

    ```sh
    git add README.md docs/image-optimization-sop.md scripts/optimize-images.sh assets/*.png assets/old/*.png assets/*.webp
    git commit -m "Optimize image assets"
    ```

## GitHub Pages Verification

After pushing to `main`, wait for the GitHub Pages deployment to finish:

```sh
gh run list --limit 3
gh run watch <run-id> --exit-status
```

Verify the public page references WebP:

```sh
curl -fsSL -H 'Cache-Control: no-cache' 'http://adict.ronniewong.cc/?verify-images=1' | rg '\.webp'
```

Verify selected WebP assets are served correctly:

```sh
curl -sSI 'http://adict.ronniewong.cc/assets/main-hero-light.webp?verify=1'
curl -sSI 'http://adict.ronniewong.cc/assets/dictionary-menu-3x.webp?verify=1'
```

Expected headers:

- `HTTP/1.1 200 OK`
- `Content-Type: image/webp`

Verify selected PNG fallbacks are also optimized and available:

```sh
curl -sSI 'http://adict.ronniewong.cc/assets/main-hero-light.png?verify=1'
curl -sSI 'http://adict.ronniewong.cc/assets/dictionary-menu-3x.png?verify=1'
```

Expected headers:

- `HTTP/1.1 200 OK`
- `Content-Type: image/png`
- `Content-Length` close to the optimized local file size.

## Notes

- `assets/old/*.png` are optimized as PNG fallback/archive files, but the script only generates WebP for top-level `assets/*.png`.
- Keep PNG files committed. They are fallback assets and useful for direct links.
- Keep WebP files committed. GitHub Pages serves static files exactly as committed.
- The current custom domain has had HTTPS certificate hostname mismatch during verification. Use `http://adict.ronniewong.cc/` or the GitHub Pages URL when validating image deployment until HTTPS is fixed.
