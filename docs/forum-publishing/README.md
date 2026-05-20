# Forum Publishing Kit

This folder maintains aDict forum launch copy, reply drafts, image assets, and the agent workflow for operating live forum threads.

## Scope

- FreeMdict topic: <https://forum.freemdict.com/t/topic/44065>
- V2EX topic: <https://www.v2ex.com/t/1212555?p=1#reply2>
- 小众软件 account: <https://meta.appinn.net/u/qoli/activity/topics>
- 小众软件论坛 draft: see [appinn-draft.md](appinn-draft.md)
- 小众软件论坛 submission: submitted to `讨论分享` on 2026-05-20 and currently pending review as pending post id `32469`.
- V2EX sharing draft: see [v2ex-sharing-draft.md](v2ex-sharing-draft.md)
- Reddit r/BetaTests draft: see [reddit-betatests-draft.md](reddit-betatests-draft.md)
- Forum image assets: see [assets/README.md](assets/README.md)
- Agent workflow: see [agent-runbook.md](agent-runbook.md)

## Files

- [freemdict-topic-44065.md](freemdict-topic-44065.md): the FreeMdict launch post, published notes, and reply log.
- [appinn-draft.md](appinn-draft.md): 小众软件论坛 draft and publishing notes.
- [v2ex-sharing-draft.md](v2ex-sharing-draft.md): V2EX-facing sharing draft and guardrails.
- [reddit-betatests-draft.md](reddit-betatests-draft.md): Reddit r/BetaTests beta feedback draft and guardrails.
- [agent-runbook.md](agent-runbook.md): how Codex should inspect, draft, confirm, and publish forum replies.
- [assets/](assets/): local copies of the images used for forum posts.

## Maintenance Rules

- Treat live forum state as the source of truth before drafting replies.
- Keep public copy in simplified Chinese unless the target forum context clearly uses another style.
- Do not overclaim support for all MDX/MDD/StarDict variants; use bounded wording such as "currently supports" or "being improved".
- When a user reports a real product gap, answer from the user scenario first, then describe the current implementation and planned fix.
- Record each published reply here after posting, including the target post number and the reason for the response.
