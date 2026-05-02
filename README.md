# RonnieCC-aDict

Static landing page for `adict.ronniewong.cc`.

This site is the product-facing home for aDict. RonnieCC remains the portfolio and project index at `ronniewong.cc`; this repository keeps the aDict landing page, support page, privacy page, and GitHub Pages custom-domain configuration separate.

The landing page currently publishes the English static URL while the Chinese version is being rebuilt:

- English: `https://adict.ronniewong.cc/`

## Pages

- `index.html` is the product landing page.
- `support.html` collects public support links.
- `privacy.html` is the first privacy policy draft.
- `CNAME` binds the site to `adict.ronniewong.cc`.
- `sitemap.xml` and `robots.txt` are static SEO entry points.

## Public References

- App Store: <https://apps.apple.com/in/app/adict-dictionary-lookup/id1483402597>
- Product notes: <https://qoli.notion.site/aDict-app-a647f1ed9f604892895b8e71a65f1d70>
- RonnieCC project page: <https://ronniewong.cc/projects/adict/>

## Local Preview

```sh
python3 -m http.server 4190 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4190/
```

## Image Optimization

The landing page serves WebP images with optimized PNG fallbacks. After replacing or adding PNG files in `assets/`, optimize PNG files and regenerate top-level WebP files with:

```sh
scripts/optimize-images.sh
```

The script uses `oxipng` for lossless PNG compression and `cwebp` at quality 90 by default. Override with `WEBP_QUALITY=92 scripts/optimize-images.sh` when a specific image needs a higher WebP quality setting.

See `docs/image-optimization-sop.md` for the full repeatable workflow and GitHub Pages verification steps.

## SEO Roadmap

SEO follow-up work is tracked in `docs/seo-roadmap.md`. It records the local
`claude-seo-1.9.6` guide paths, current Search Console sitemap decision, and the
next landing-page SEO priorities.

## Deployment

The repository is prepared for GitHub Pages with a GitHub Actions workflow. Configure the repository Pages source as GitHub Actions, then point DNS for `adict.ronniewong.cc` at GitHub Pages.
