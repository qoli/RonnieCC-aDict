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
5. Draft the note in [drafts/](drafts/) with:
   - title options;
   - opening hook;
   - body copy;
   - image or video sequence;
   - tags;
   - publish checklist.
6. Generate static image cards through the HTML workflow in [html-image-workflow.md](html-image-workflow.md).
7. Visually inspect the generated cards before claiming they are ready for review.
8. Ask for user confirmation and handle discussion or revision.
9. Treat any XiaohongshuSkills-style publishing command as the final delivery step only, after content and assets are approved.
10. After publishing, add a record under [published/](published/) or update [content-calendar.md](content-calendar.md).
11. Monitor comments only through live inspection and draft replies for approval unless the user has clearly asked to post the reply.

## Draft Quality Rules

- Use simplified Chinese for Xiaohongshu-facing public copy unless the user requests otherwise.
- Keep the tone practical and personal: explain the real lookup problem, the workflow, and what aDict changes.
- Prefer one clear use case per note.
- Avoid overclaiming support for every dictionary format or every AI scenario.
- Avoid making the post read like an App Store listing.
- Use visible product proof: screenshots, screen recordings, or concrete before-and-after examples.

## Publishing Checklist

- Confirm the user has approved the Blog-derived draft and HTML-generated images.
- Confirm the target account and login state.
- Confirm exact title, body, tags, and image/video order.
- Confirm the approved HTML-generated image exports are the files being uploaded.
- Confirm whether this is immediate publishing or scheduled publishing.
- Verify the final composer preview before clicking publish.
- Do not click final publish/save without approval.
- After publishing, record URL, publish time, assets used, and follow-up actions.
