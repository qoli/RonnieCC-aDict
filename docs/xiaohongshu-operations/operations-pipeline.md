# Xiaohongshu Operations Pipeline

This is the default order of work for aDict Xiaohongshu operations.

## Stage 1: Source and Positioning

Inputs:

- user-delivered Blog, usually the primary source;
- aDict landing page copy;
- aDict Blog posts;
- forum publishing notes;
- product screenshots and current app behavior;
- user-provided positioning direction.

Output:

- one selected content pillar;
- one user scenario;
- one bounded product claim.

## Stage 2: Note Draft

Create a draft under [drafts/](drafts/) with:

- title options;
- opening hook;
- body copy;
- image-card outline;
- tags;
- target publish timing;
- approval status.

## Stage 3: HTML Image Generation

Use [html-image-workflow.md](html-image-workflow.md) as the image production path.

Output:

- HTML source cards;
- exported PNG cards;
- asset record in the draft or [material-inventory.md](material-inventory.md).

Reference boundary:

- Auto-Redbook-Skills is only a best-size and HTML-card reference for this stage.

## Stage 4: Review and Approval

Review:

- whether the claim matches current product behavior;
- whether the copy sounds native to Xiaohongshu;
- whether the HTML-generated cards are readable in mobile feed context;
- whether image order and body copy support the same message.

No public account action happens in this stage.

The normal stopping point is here. Wait for the user's confirmation, questions, and revisions before discussing publication.

## Stage 5: Terminal Publishing Flow

This is the only stage where a publishing workflow such as white0dew/XiaohongshuSkills is relevant.

Enter this stage only after the user confirms the draft and asks to discuss or proceed with publication.

Use it only as a reference for:

- connecting to a browser through CDP;
- filling title/body/images;
- previewing the composer;
- stopping before final publish when approval is missing.

Do not use terminal publishing tools for upstream strategy, copywriting, image generation, or engagement automation.

## Stage 6: Post-Publish Record and Follow-Up

After publishing:

- record URL, time, title, assets, and tags;
- note any comments that need a reply;
- draft replies for approval unless the user explicitly asks to post;
- collect performance notes when available.
