# Agent Runbook for Forum Posts

Use this workflow when asked to maintain aDict forum posts or replies.

## Browser Tooling

1. Prefer the existing Arc CDP endpoint.

```sh
"$HOME/.codex/skills/arc-cdp-browser/scripts/arc-cdp.sh" doctor
```

2. Use `chrome-devtools` against the Arc tab after CDP is healthy:

- `take_snapshot` to read the live thread.
- `evaluate_script` for precise DOM reads, composer text insertion, and final verification.
- `click` only when a stable accessibility node is available.

3. Use `computer-use` only when the browser DOM path is insufficient, for example a native app prompt or UI state unavailable through CDP.

4. Do not install or launch a separate Playwright/WebKit browser just because Playwright says WebKit is missing. Arc CDP is the preferred browser surface for this repo.

## Reply Workflow

1. Inspect the live topic first.
2. Identify new posts since the last known reply.
3. If the question is about current app behavior, verify against repo code or existing docs before answering.
4. Draft the reply in chat first unless the user has already explicitly approved publishing.
5. For public posting, require explicit approval unless the latest user message clearly says to publish, such as "同意，發佈" or "建立回應".
6. After publishing, verify by reading a fresh page snapshot and checking:

- topic post count changed as expected;
- the reply text appears in the thread;
- the reply is attached to the intended post when possible.

## Tone

- Be transparent and product-focused.
- Avoid framing every clarification as "我没说清楚"; when the issue is a real user scenario gap, say it was a product consideration gap.
- Prefer concise answers that explain:
  - what works now;
  - what does not work now;
  - what will be improved later.

## Common Response Boundaries

- TestFlight: aDict 3.0 is a TestFlight build until the App Store update is released; TestFlight may show existing App Store metadata.
- Dictionary files: aDict reads user-provided local dictionary files. It does not provide dictionary content packs.
- Dictionary file location: use the in-app Dictionary Files page and Open folder action as the source of truth. With iCloud sync enabled, dictionaries resolve from iCloud Documents; with it disabled, they resolve from Local Documents.
- MDict folder support: current beta supports both same-stem files in `MDict/` and one-dictionary-per-folder layouts such as `MDict/OxfordA/OxfordA.mdx`.
- StarDict folder support: StarDict supports direct file groups in `StarDict/` and per-dictionary folders.

## Publishing Checklist

- Confirm the target post number and username.
- Confirm the exact text that will be posted.
- Do not click final publish/save for public communication unless approved.
- After posting, update [freemdict-topic-44065.md](freemdict-topic-44065.md) or the relevant forum file.
