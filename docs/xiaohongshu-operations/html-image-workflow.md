# HTML Image Workflow

Use HTML/CSS as the default production path for Xiaohongshu static images.

## Output Targets

- Default carousel card: `1080 x 1440` pixels.
- Optional square card: `1080 x 1080` pixels.
- Export format: PNG unless a specific platform test shows WebP is acceptable.
- Keep source HTML, CSS, and exported images together by post or template version.

The default `1080 x 1440` target follows the Auto-Redbook-Skills rendering reference. In this repo, that project is treated only as a size and HTML-card reference, not as an operating or publishing workflow.

## Template Principles

- One image communicates one idea.
- Use real product screenshots as visual proof whenever possible.
- Keep text large enough for mobile feed reading.
- Avoid decorative compositions that hide the product UI.
- Keep the cover recognizable as aDict content without relying only on tiny logo text.
- Design for a carousel sequence: cover, problem, workflow, product proof, takeaway.

## Recommended Template Types

- `cover`: title, short subtitle, one strong product screenshot.
- `problem`: one user pain point with minimal supporting text.
- `workflow`: numbered steps with screenshot crops.
- `comparison`: before and after, or dictionary entry versus AI explanation.
- `faq`: one common question and a bounded answer.
- `closing`: summary, supported formats, or next action.

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
6. Record the exported asset in [material-inventory.md](material-inventory.md) or the related draft.

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
