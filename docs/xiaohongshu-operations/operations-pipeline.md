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

## Stage 2: Multi-Image Markdown Draft

Create a draft under [drafts/](drafts/) with:

- source Blog link;
- extracted Xiaohongshu angle;
- title options;
- opening hook;
- post body copy;
- card-by-card markdown content;
- screenshot or asset intent for each card;
- tags;
- open questions;
- markdown review status.

This stage exists to reduce HTML rewrite cost. Review the content structure, card sequence, and copy at markdown level before building HTML cards.

## Stage 3: Markdown Review

Stop here when the user needs to confirm the angle, copy, or card order.

Review:

- whether the Blog was represented accurately;
- whether the first card has the right feed-facing hook;
- whether each card has one clear job;
- whether the body copy and tags match the card sequence;
- which screenshots or assets are needed for HTML.

Do not generate HTML cards yet if the markdown structure is still under discussion.

## Stage 4: HTML Image Generation

After markdown-level direction is accepted, use [html-image-workflow.md](html-image-workflow.md) as the image production path.

Output:

- HTML source cards;
- exported PNG cards;
- asset record in the draft or [material-inventory.md](material-inventory.md).

Reference boundary:

- Auto-Redbook-Skills is only a best-size and HTML-card reference for this stage.

## Stage 5: HTML Visual Review and Approval

Review:

- whether the claim matches current product behavior;
- whether the copy sounds native to Xiaohongshu;
- whether the HTML-generated cards are readable in mobile feed context;
- whether image order and body copy support the same message.

No public account action happens in this stage.

The normal stopping point is here. Wait for the user's confirmation, questions, and revisions before discussing publication.

## Stage 6: Terminal Publishing Flow

This is the only stage where a publishing workflow such as white0dew/XiaohongshuSkills is relevant.

Enter this stage only after the user confirms the draft and asks to discuss or proceed with publication.

Use it only as a reference for:

- connecting to a browser through CDP;
- filling title/body/images;
- previewing the composer;
- stopping before final publish when approval is missing.

Do not use terminal publishing tools for upstream strategy, copywriting, image generation, or engagement automation.

## Stage 7: Post-Publish Record and Follow-Up

After publishing:

- record URL when available, time, title, assets, and tags;
- if the public URL is not available yet, record creator-manager status and recover the URL later;
- note any comments that need a reply;
- draft replies for approval unless the user explicitly asks to post;
- collect performance notes when available.
