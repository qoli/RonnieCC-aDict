# Xiaohongshu Operations Kit

This folder owns aDict's Xiaohongshu operations work: strategy, drafts, assets, publishing records, and agent workflow.

## Scope

- Content strategy for aDict on Xiaohongshu.
- Draft notes and post scripts for public Xiaohongshu posts.
- Screenshot and short-video asset planning.
- Manual or assisted publishing workflow.
- Post-publish records, comment triage, and performance notes.
- Evaluation notes for external Xiaohongshu automation projects.

## Folder Map

- [agent-runbook.md](agent-runbook.md): how Codex should inspect, draft, prepare, and verify Xiaohongshu work.
- [content-calendar.md](content-calendar.md): planned posts, status, hooks, assets, and publish records.
- [content-pillars.md](content-pillars.md): aDict-specific topic pillars and reusable content angles.
- [material-inventory.md](material-inventory.md): source assets, screenshots, recordings, and reuse rules.
- [html-image-workflow.md](html-image-workflow.md): HTML/CSS-based image generation workflow and template rules.
- [blog-to-xiaohongshu-workflow.md](blog-to-xiaohongshu-workflow.md): default workflow for turning a delivered Blog into a Xiaohongshu multi-image post.
- [operations-pipeline.md](operations-pipeline.md): upstream-to-publishing operating pipeline.
- [reference-projects.md](reference-projects.md): notes on the two external reference projects and adoption boundaries.
- [drafts/](drafts/): working drafts before publication.
- [published/](published/): published-note records and follow-up logs.
- [assets/](assets/): local copies or pointers for Xiaohongshu-specific assets.
- [html-templates/](html-templates/): reusable HTML templates for Xiaohongshu post images.

## Operating Principles

- The default input is a Blog handed over by the user.
- The default output before approval is a multi-image HTML-generated Xiaohongshu draft, not a published post.
- Keep a human in the loop for public publishing and account actions.
- Treat publishing automation as the terminal stage only; upstream work is strategy, draft, HTML image generation, review, and approval.
- Treat Xiaohongshu's live UI and account state as the source of truth before publishing.
- Keep claims bounded to current aDict behavior and publicly supportable roadmap.
- Prefer product usage stories, real screenshots, and concrete dictionary workflows over generic marketing copy.
- Record published notes and meaningful comment follow-ups after posting.
- Do not import third-party automation code into this repo without a separate review.

## First Operating Goals

1. Accept a user-delivered Blog as source material.
2. Convert it into a Xiaohongshu multi-image post with HTML-generated cards.
3. Wait for user confirmation, questions, and edits.
4. Only after confirmation, discuss and prepare publication.
