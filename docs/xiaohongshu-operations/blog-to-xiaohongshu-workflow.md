# Blog to Xiaohongshu Workflow

This is the default workflow when the user hands over a Blog for aDict Xiaohongshu operations.

## 1. Receive Blog

The user provides a Blog URL or local Blog artifact.

Examples:

- Notion Blog page;
- generated `blog/<slug>/index.html`;
- RonnieCC/aDict Blog source content.

Do not start from a generic Xiaohongshu idea if a Blog has been provided. Treat the Blog as the source of truth for the first draft.

## 2. Extract Xiaohongshu Angle

Read the Blog and extract:

- target reader;
- one practical problem;
- one product insight;
- claims that need current-product verification;
- screenshots or UI flows implied by the article.

Output a compact post plan before generating final cards when the angle is ambiguous.

## 3. Create Multi-Image Markdown Draft

Before creating HTML, write a markdown draft that represents the full Xiaohongshu post.

The markdown draft is the pre-review artifact. It should make the card sequence, copy, screenshot intent, and open questions easy to discuss without paying HTML rewrite cost.

Typical markdown draft structure:

```markdown
# Draft: <working title>

Source Blog: <path or URL>

## Xiaohongshu Angle

- Target reader:
- Practical problem:
- Product insight:
- Claim boundary:

## Title Options

1. ...
2. ...
3. ...

## Body Copy

...

## Cards

### Card 1 - Cover

- Purpose:
- Text:
- Visual:

### Card 2 - Context

- Purpose:
- Text:
- Visual:

## Tags

#...

## Open Questions

- ...
```

The exact card count should follow the Blog content. Do not force every Blog into the same number of cards.

## 4. Review Markdown Before HTML

Stop at the markdown draft when the structure, hook, wording, or screenshot choices need discussion.

Ask the user to confirm or adjust:

- first-card hook;
- card order;
- per-card copy;
- body copy;
- screenshots or assets;
- risky or overbroad claims.

Do not create HTML cards until markdown-level direction is clear, unless the user explicitly asks to skip the markdown review.

## 5. Convert to HTML Multi-Image Post

Use HTML-generated cards as the default static image format.

Typical carousel structure:

1. cover card: one clear promise or problem;
2. context card: why this matters to existing or potential users;
3. workflow card: concrete aDict behavior;
4. proof card: screenshot-backed product detail;
5. takeaway card: what the reader can try or remember.

## 6. Create Draft Package

Create a draft under [drafts/](drafts/) containing:

- source Blog link;
- extracted angle;
- title options;
- Xiaohongshu body copy;
- card-by-card markdown content;
- HTML template files or references;
- exported image paths when generated;
- tags;
- open questions for the user.

## 7. Visual Inspection

Before asking the user to review, inspect the generated images visually.

Check:

- no text or UI overlap;
- no clipped title, bullet, footer, or screenshot;
- screenshots are readable enough for mobile feed context;
- the first card can stand alone in the feed;
- cards form a coherent sequence.

## 8. Wait for Confirmation

Stop after presenting the draft and visual findings.

Wait for the user to confirm, ask questions, or request edits. Do not move to publishing preparation during this stage.

## 9. Discuss Publishing After Confirmation

Only after the user confirms the draft:

- discuss target account and timing;
- verify final title/body/tags/image order;
- use Arc CDP to inspect the live composer if needed;
- use white0dew/XiaohongshuSkills only as terminal publishing-flow reference, not as the content workflow.
