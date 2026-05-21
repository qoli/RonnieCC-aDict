# Published: 读英文时，查词别再打断阅读了

Source draft: [../drafts/2026-05-20-appinn-draft-xhs.md](../drafts/2026-05-20-appinn-draft-xhs.md)

Source blog: `docs/forum-publishing/appinn-draft.md`

## Publish Snapshot

- Platform: Xiaohongshu
- Account: `momoR`
- Publish time: `2026-05-21 11:36` China time
- Public URL: TBD
- Creator manager status: visible in note manager, not in the review queue
- Immediate visible stats: `7 / 1 / 1 / 1 / 2`
- Stat labels: not recorded; verify labels before using these numbers in reporting

## Title

```text
读英文时，查词别再打断阅读了
```

## Body

```text
我把以前做的词典 App 重新整理成了 aDict 3.0。

它不是一个很重的词典资料库，而是一个更轻的查词入口：在线来源先能用，本地词典也能接进来。

如果你经常在 iPhone、iPad、Mac 上读英文/外文内容，可以试试看。

目前还在 TestFlight，Apple 智能补充也是实验功能。更想听到的是：它离「打开就能查，长期用也不碍事」还有多远。

#英语阅读 #英语学习 #查单词 #词典App #本地词典 #MDict #效率工具 #宝藏APP #iPhone软件 #Mac软件
```

## Assets

Export set: [../exports/2026-05-20-appinn-draft/](../exports/2026-05-20-appinn-draft/)

| Order | File | Source | Dimensions |
| --- | --- | --- | --- |
| 1 | `card-01.png` | HTML preview | `2160 x 2880` |
| 2 | `card-02.png` | HTML preview | `2160 x 2880` |
| 3 | `card-03.png` | HTML preview | `2160 x 2880` |
| 4 | `card-04.png` | HTML preview | `2160 x 2880` |
| 5 | `card-05.png` | HTML preview | `2160 x 2880` |
| 6 | `card-06.png` | user-provided Figma export | `2160 x 2880` |

## Retrospective

What worked:

- The markdown pre-review step reduced HTML churn once the card sequence was stable.
- The App Store screenshot mental model was the right direction for Xiaohongshu: short benefit text plus product UI proof.
- `2160 x 2880` exports uploaded cleanly and avoided the visible quality loss from 1x output.
- Card 06 worked best as a user-designed final asset, not as a reconstructed HTML card.

What failed or cost time:

- Early drafts carried too much article-style text for Xiaohongshu reading behavior.
- The HTML card 06 experiments kept introducing weak focus and poor layout; the correct fix was to stop rebuilding it.
- A Figma/plugin screenshot at 1x or downsampled size is not acceptable as final image material.
- Asset choice must be visually checked, not inferred from file names.

Runbook changes made after this publish:

- Require 2x final exports for publishable card assets.
- Keep user-supplied final Figma cards outside the HTML preview unless explicitly requested.
- Add hashtag rules that avoid TestFlight/App Store/link-heavy signaling.
- Record creator-manager evidence when the public URL is not immediately available.

## Follow-Up

- Recover the public note URL when available.
- Recheck stat labels before reporting performance.
- Watch for comments that indicate confusion about TestFlight, old App Store versions, local dictionary files, or Apple Intelligence support.
- Draft replies for approval before posting unless the user explicitly delegates live replies.
