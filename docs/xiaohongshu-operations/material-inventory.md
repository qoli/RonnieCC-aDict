# Xiaohongshu Material Inventory

Use this file to track source assets and Xiaohongshu-specific derivatives.

## Existing Product Assets

| Source | Purpose | Notes |
| --- | --- | --- |
| `assets/main-hero-light.png` | Product identity / first image candidate | Use when the note needs immediate brand context. |
| `assets/adict-3-home.png` | Home screen / app overview | Good for introductory notes. |
| `assets/adict-3-settings.png` | Settings and configuration | Useful for setup notes. |
| `assets/adict-3-settings-pro.png` | Pro or advanced settings | Avoid overusing before user value is clear. |
| `assets/adict-3-mdict-lookup.png` | MDict lookup proof | Strong fit for dictionary workflow notes. |
| `assets/adict-3-dictionary-menu.png` | Dictionary source switching | Use for local dictionary ownership pillar. |
| `assets/adict-3-suggestions.png` | Suggestion / AI-assisted workflow | Use for AI-assisted lookup pillar. |
| `assets/adict-3-session-menu.png` | Session/context workflow | Use for reading workflow notes. |
| `assets/favorites-menu-3x.png` | Favorites workflow | Use for study and review notes. |

## Forum Publishing Assets

| Source | Purpose | Notes |
| --- | --- | --- |
| `docs/forum-publishing/assets/` | Forum-ready product screenshots and composites | Reuse only after checking dimensions and visual fit for Xiaohongshu's square or vertical layouts. |

## Xiaohongshu Asset Rules

- Use Figma MCP as the default path for Xiaohongshu static images.
- Keep HTML/CSS templates as fallback or historical references, not the primary production path.
- Prefer 3:4 or 1:1 static image sequences for product walkthrough posts.
- Keep each image focused on one claim or one step.
- Do not use tiny UI text as the only explanation; crop or annotate only when it improves readability.
- Preserve the real product UI; avoid decorative mockups that hide the actual workflow.
- Use visual inspection before choosing a screenshot. Do not choose by file name alone.
- Export final Figma frames at 2x when possible.
- Record every edited derivative under `docs/xiaohongshu-operations/assets/` with a short note explaining the source.

## Needed Assets

| Status | Asset | Purpose | Source |
| --- | --- | --- | --- |
| needed | 3:4 Figma cover frame | Consistent first image for note series | Figma MCP plus product screenshot. |
| needed | 3:4 Figma carousel frame | Repeatable explanation cards | Figma MCP plus text and screenshots. |
| needed | MDict import walkthrough sequence | First practical setup post | Product screen recording or screenshots. |
| needed | AI-assisted lookup sequence | Apple Intelligence / explanation post | Product screenshots from current build. |
| needed | Favorites workflow sequence | Study workflow post | Product screenshots from current build. |
