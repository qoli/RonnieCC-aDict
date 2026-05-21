# Agent Runbook for Xiaohongshu Operations

Use this workflow when asked to maintain aDict Xiaohongshu content, account tasks, replies, or reporting.

## Browser Tooling

1. Prefer the existing Arc CDP endpoint when browser inspection is needed.

```sh
"$HOME/.codex/skills/arc-cdp-browser/scripts/arc-cdp.sh" doctor
```

2. Use CDP-connected tooling against the existing Arc session before launching a separate browser.

3. Do not install Playwright WebKit or launch a separate browser only because a Playwright-managed browser is unavailable.

4. If the Xiaohongshu UI blocks DOM automation or requires native confirmation, switch to manual confirmation or `computer-use` only after describing the required action.

## Safety Boundary

- Do not run unattended account operation, mass posting, mass commenting, mass liking, or mass collecting.
- Do not publish, comment, follow, like, collect, or change account settings without explicit user approval.
- Do not use automation to impersonate organic engagement or hide AI involvement.
- Do not store account cookies, QR codes, private tokens, or session exports in this repository.
- If using a reference tool, run it only after a separate review of its write actions and local credential storage.

## Content Workflow

1. If the user hands over a Blog, follow [blog-to-xiaohongshu-workflow.md](blog-to-xiaohongshu-workflow.md) first.
2. Start from the upstream pipeline in [operations-pipeline.md](operations-pipeline.md).
3. Inspect current source material:
   - the delivered Blog;
   - landing page copy;
   - existing related Blog posts;
   - forum publishing drafts;
   - available screenshots under `assets/` and `docs/forum-publishing/assets/`.
4. Pick a content pillar from [content-pillars.md](content-pillars.md).
5. Create a multi-image markdown draft in [drafts/](drafts/) with:
   - title options;
   - opening hook;
   - body copy;
   - card-by-card markdown content;
   - image or screenshot intent for each card;
   - tags;
   - open questions for pre-review.
6. Ask for markdown-level confirmation before creating HTML cards when the structure, angle, or copy may change.
7. Generate static image cards through the HTML workflow in [html-image-workflow.md](html-image-workflow.md).
8. Visually inspect the generated cards before claiming they are ready for review.
9. Ask for user confirmation and handle discussion or revision.
10. Treat any XiaohongshuSkills-style publishing command as the final delivery step only, after content and assets are approved.
11. After publishing, add a record under [published/](published/) or update [content-calendar.md](content-calendar.md).
12. Monitor comments only through live inspection and draft replies for approval unless the user has clearly asked to post the reply.

## Asset Production Rules

- Keep the markdown draft as the pre-review contract. Do not move into HTML until the card sequence, card text, and screenshot intent are stable.
- Design the carousel like App Store screenshots: one benefit per card, short text, and real product UI as the proof.
- Default design canvas is `1080 x 1440`; final publish exports should be `2160 x 2880` when possible, so Xiaohongshu receives a high-quality 2x asset.
- Do not use a 1x, `768 x 1024`, or otherwise downsampled Figma/plugin preview as final material. If Figma export is blocked, ask the user for a manual 2x export.
- If a card is supplied as a final Figma export, treat it as an external final asset. Do not rebuild or merge it back into the HTML preview unless the user explicitly asks.
- Before upload, inspect the actual PNGs visually, not only by file name. Check text fit, screenshot crop, white borders, focus, and whether every card has a clear job.

## Hashtag Rules

- Pick tags from the actual reader scenario and product category, not only from the app name.
- Use a small mixed set: reading or learning scene, dictionary workflow, platform, and productivity/app discovery.
- Avoid link-heavy, App Store-heavy, or TestFlight-heavy tags when the note itself needs to stay platform-compliant.
- For the first aDict 3.0 reading workflow note, the approved tag direction was:

```text
#英语阅读 #英语学习 #查单词 #词典App #本地词典 #MDict #效率工具 #宝藏APP #iPhone软件 #Mac软件
```

## Publishing Handoff

Use browser automation only to prepare and verify the composer. The final publish click remains a user-confirmed action unless the user has clearly delegated it in the same live publishing step.

1. Upload the approved `card-01.png` through `card-06.png` assets in order.
2. Confirm Xiaohongshu reports the expected dimensions for each image.
3. Fill the approved title, body, and hashtags exactly.
4. Compare the composer preview against the approved draft and asset sequence.
5. Stop and ask for confirmation before the final publish click when approval is missing.
6. After the click, open note manager and verify the note appears outside the review queue.

## Draft Quality Rules

- Use simplified Chinese for Xiaohongshu-facing public copy unless the user requests otherwise.
- Keep the tone practical and personal: explain the real lookup problem, the workflow, and what aDict changes.
- Prefer one clear use case per note.
- Avoid overclaiming support for every dictionary format or every AI scenario.
- Avoid making the post read like an App Store listing.
- Use visible product proof: screenshots, screen recordings, or concrete before-and-after examples.

## Publishing Checklist

- Confirm the user has approved the Blog-derived markdown draft and HTML-generated images.
- Confirm the target account and login state.
- Confirm exact title, body, tags, and image/video order.
- Confirm the approved HTML-generated image exports are the files being uploaded.
- Confirm whether this is immediate publishing or scheduled publishing.
- Verify the final composer preview before clicking publish.
- Do not click final publish/save without approval.
- After publishing, record URL if available, publish time, assets used, visible manager status, and follow-up actions.
- If the public URL is not available immediately from the creator manager, record the creator-manager evidence first and recover the public URL later.
