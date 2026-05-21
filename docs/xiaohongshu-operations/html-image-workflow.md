# HTML Image Workflow

Use HTML/CSS as the default production path for Xiaohongshu static images.

## Output Targets

- Default carousel card: `1080 x 1440` pixels.
- Preferred final export for publishing: `2160 x 2880` pixels, produced from the `1080 x 1440` layout at 2x scale.
- Optional square card: `1080 x 1080` pixels.
- Export format: PNG unless a specific platform test shows WebP is acceptable.
- Keep source HTML, CSS, and exported images together by post or template version.

The default `1080 x 1440` target follows the Auto-Redbook-Skills rendering reference. In this repo, that project is treated only as a size and HTML-card reference, not as an operating or publishing workflow.

Do not accept browser, Figma, or plugin screenshots that were exported at 1x or downsampled sizes as final image-card materials. Re-export at 2x, or ask for a manual export when the source tool is blocked.

## Template Principles

- One image communicates one idea.
- Treat the default visual concept as App Store screenshot style: one short product benefit plus a real UI screenshot.
- Use real product screenshots as visual proof whenever possible.
- Keep text large enough for mobile feed reading.
- Avoid decorative compositions that hide the product UI.
- Keep the cover recognizable as aDict content without relying only on tiny logo text.
- Design for a carousel sequence where each card can stand alone as a product screenshot.
- Avoid paragraph-style cards; most cards should use one headline and one optional subline.

## Recommended Template Types

- `app-store-cover`: title, short subtitle, one strong product screenshot.
- `app-store-feature`: one product benefit headline, one subline, one UI screenshot.
- `app-store-comparison`: before and after, or dictionary entry versus AI explanation.
- `app-store-platform`: platform labels plus Mac/iPhone/iPad screenshot composition.
- `closing`: minimal next action or feedback question.

## Generation Workflow

1. Create or update a template under [html-templates/](html-templates/).
2. Place source screenshots in [assets/](assets/) or reference existing repo assets.
3. Render locally with a browser at the exact output size.
4. Take a screenshot export of the target element or viewport.
5. Review exported PNG for:
   - text fit;
   - screenshot clarity;
   - no overlap;
   - enough contrast;
   - consistent margins across the carousel.
6. If a user-designed card is supplied as a final PNG, copy it into the export set and keep it outside the HTML preview unless the user asks to rebuild it.
7. Record the exported asset in [material-inventory.md](material-inventory.md) or the related draft.

## Browser Verification

Prefer the existing Arc CDP endpoint for visual checks when possible. If using Playwright only for local rendering, use it as a screenshot renderer and do not let it create a separate Xiaohongshu account browser state.

## File Naming

Use stable, sortable names:

```text
YYYY-MM-DD-post-slug-card-01.html
YYYY-MM-DD-post-slug-card-01.png
```

For reusable templates:

```text
template-cover-v1.html
template-carousel-v1.html
```

## Initial Template Backlog

| Status | Template | Purpose |
| --- | --- | --- |
| needed | `template-cover-v1.html` | Reusable first image for aDict Xiaohongshu notes. |
| needed | `template-workflow-v1.html` | Step-by-step product workflow card. |
| needed | `template-comparison-v1.html` | Dictionary result versus AI explanation or old versus new workflow. |
