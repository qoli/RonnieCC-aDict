# Xiaohongshu Publishing Scripts

## `xhs_prepare_publish.py`

Validate and prepare a Xiaohongshu image post package. The script can reuse the existing Arc CDP browser session to open the creator composer, upload images, and fill title/body, but it never clicks publish.

Validation only:

```sh
rtk python docs/xiaohongshu-operations/scripts/xhs_prepare_publish.py \
  --draft docs/xiaohongshu-operations/published/2026-05-21-appinn-draft-reading-workflow.md \
  --images docs/xiaohongshu-operations/exports/2026-05-20-appinn-draft
```

Open the creator publish page:

```sh
rtk python docs/xiaohongshu-operations/scripts/xhs_prepare_publish.py \
  --draft docs/xiaohongshu-operations/published/2026-05-21-appinn-draft-reading-workflow.md \
  --images docs/xiaohongshu-operations/exports/2026-05-20-appinn-draft \
  --open-browser
```

Fill the composer after approval:

```sh
rtk python docs/xiaohongshu-operations/scripts/xhs_prepare_publish.py \
  --draft docs/xiaohongshu-operations/published/2026-05-21-appinn-draft-reading-workflow.md \
  --images docs/xiaohongshu-operations/exports/2026-05-20-appinn-draft \
  --fill-browser
```

The expected image package is `card-01.png` through `card-06.png`, each `2160 x 2880`.
