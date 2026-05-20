# Reference Projects

This file records external Xiaohongshu automation references. It is not an approval to import, install, or run them.

## comeonzhj/Auto-Redbook-Skills

Repository: <https://github.com/comeonzhj/Auto-Redbook-Skills>

Observed from README on 2026-05-20:

- Includes HTML/CSS card templates and rendering references for Xiaohongshu image output.
- Its parameter reference uses `1080 x 1440` as the default image size and DPR `2`.
- Useful here only as a reference for best card dimensions, template structure, and render-output expectations.

Adoption boundary:

- Do not install directly into this repo.
- Do not treat it as the aDict Xiaohongshu operation workflow.
- Do not use it as a publishing or account automation candidate for this repo.
- Extract only sizing and HTML-card lessons into [html-image-workflow.md](html-image-workflow.md) and [html-templates/](html-templates/).

## white0dew/XiaohongshuSkills

Repository: <https://github.com/white0dew/XiaohongshuSkills>

Observed from README on 2026-05-20:

- Provides a command-line Xiaohongshu automation tool using Chrome DevTools Protocol.
- Describes publishing, multi-account support, login checks, search/detail reading, comments, replies, likes, collects, user-page snapshots, notifications, and data-dashboard export.
- Supports remote CDP through host and port options.

Adoption boundary:

- This is a terminal publishing-flow reference only.
- It starts after strategy, copy, HTML-generated images, and user approval are already complete.
- Do not use engagement automation such as likes, collects, comments, or replies without an explicit review and approval.
- Do not store credentials, cookies, QR codes, or account caches in this repo.
- If evaluated later, prefer preview/draft-fill behavior and stop before final publish unless explicit approval is present.
- Since this repo already prefers the user's Arc CDP endpoint, any browser integration must be checked against the existing Arc workflow first.

## Evaluation Checklist

- What files does the tool write locally?
- Where does it store cookies, browser profiles, or account state?
- Which commands are read-only, draft-only, or public-write actions?
- Can publishing be stopped before final submit?
- Can the tool connect to the existing Arc CDP endpoint without creating a separate account state?
- Does it provide enough preview verification before a public action?
- Does it expose logs that can be kept outside this public repository?
