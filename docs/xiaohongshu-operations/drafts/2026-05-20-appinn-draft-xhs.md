# Draft: aDict 3.0 小红书多图预交流稿

Source Blog: `docs/forum-publishing/appinn-draft.md`

Status: published on 2026-05-21

Reference note checked: `http://xhslink.com/o/7BeuxiqusCv`

Published record: [../published/2026-05-21-appinn-draft-reading-workflow.md](../published/2026-05-21-appinn-draft-reading-workflow.md)

## Reference / Design Takeaway

The reference note is not article-like. Its design concept is close to App Store screenshots:

- one strong benefit per image;
- real product UI as the main visual proof;
- very short headline and optional subline;
- caption for context, not full explanation;
- no paragraph-style image cards.

So this draft should behave like a Xiaohongshu carousel made from App Store-style product screenshots. The longer product details stay in the source Blog and body copy, not on the images.

## Xiaohongshu Angle

- Target reader: 经常在 iPhone、iPad、Mac 上读英文或外文内容的人。
- Practical problem: 查词这件小事，经常打断阅读。
- Product insight: aDict 3.0 把在线来源、本地词典、历史、收藏放进一个轻量查词入口。
- Claim boundary: 目前是 TestFlight；Apple 智能补充是实验功能；本地词典需要用户自己的 MDX / MDD / StarDict 文件。

## Title Options

1. 读英文时，查词别再打断阅读了
2. 有了它，查词不用来回换工具
3. 我把老词典 App 重写了一遍
4. 一个更轻的 Apple 平台查词入口
5. 本地词典，也能放进同一个查词流程

Recommended title:

```text
读英文时，查词别再打断阅读了
```

## Body Copy

```text
我把以前做的词典 App 重新整理成了 aDict 3.0。

它不是一个很重的词典资料库，而是一个更轻的查词入口：在线来源先能用，本地词典也能接进来。

如果你经常在 iPhone、iPad、Mac 上读英文/外文内容，可以试试看。

目前还在 TestFlight，Apple 智能补充也是实验功能。更想听到的是：它离「打开就能查，长期用也不碍事」还有多远。
```

## Cards

### Card 1 - Cover

Purpose: feed hook plus product identity.

Text:

```text
读英文时
查词别再打断阅读了

aDict 3.0
```

Visual: large product UI screenshot crop. Prefer `docs/forum-publishing/assets/freemdict-dictionary-menu-suggestions.png` over a marketing hero.

HTML preview uses `assets/main-hero-light.png` after visual review because the landing-page asset is closer to App Store screenshot style.

### Card 2 - Quick Lookup

Purpose: first App Store-style benefit.

Text:

```text
打开就能查

输入单词，直接进入查词结果
```

Visual: product screenshot showing lookup input or result.

HTML preview uses `assets/adict-3-home.png`.

### Card 3 - Source Switching

Purpose: show it is not a single fixed source.

Text:

```text
多个来源
随时切换

在线词典先能用
```

Visual: `docs/forum-publishing/assets/freemdict-dictionary-menu-suggestions.png`

HTML preview uses `assets/adict-3-dictionary-menu.png` only. The settings page was removed from this card after visual review because it made the composition noisier.

Note: Do not say or imply that aDict provides dictionary content.

### Card 4 - AI Supplement

Purpose: experimental feature, bounded.

Text:

```text
AI 只做补充

例句、用法、语境说明
```

Visual: `docs/xiaohongshu-operations/assets/apple-intelligence-enrichment-gloom.png`.

HTML preview uses the new Apple Intelligence enrichment screenshot after visual review, because it shows the actual result instead of only the settings entry.

Note: Keep the experimental tone. Do not present this as a final shipped promise.

### Card 5 - Apple Platforms

Purpose: platform proof and closing.

Text:

```text
iPhone / iPad / Mac

同一套查词流程
```

Visual: `docs/forum-publishing/assets/freemdict-macos.png`.

HTML preview uses the macOS screenshot after visual review, because it is clearer proof for the multi-platform card than another pair of iPhone screens.

Note: TestFlight should probably stay in body copy, not as large card text.

### Card 6 - Landing Page Screenshot

Purpose: show the correct landing page entry through a real mobile browser screenshot without adding new promotional copy to the Xiaohongshu card.

Text:

```text
No added HTML text.
```

Visual: `docs/xiaohongshu-operations/assets/figma-image-card-06.png`.

Final export uses the user-provided Figma export at `/Users/ronnie/Downloads/image-card-06.png`, copied into the export set as `card-06.png`. Do not rebuild this card in the HTML preview.

## Card Text Budget

Use this as the HTML stage constraint:

- design like App Store screenshots, not article cards;
- every card should have real product UI as the main visual;
- cover: max 3 short lines plus product name;
- normal card: max 1 headline + 1 short subline;
- no paragraph cards;
- no full feature checklist;
- use screenshots to explain, not long text.

## Tags

```text
#英语阅读 #词典App #效率工具 #iPhone软件 #Mac软件 #本地词典 #MDict
```

## Review Questions

1. 封面标题是否改成更结果感的「查词不用来回换工具」？
2. 是否接受 App Store 截图式结构：每张图都是「短卖点 + 产品 UI」？
3. Apple 智能是否保留独立卡？如果担心信息太多，可以合并到正文。
4. 最后一张是否保留纯 landing page 截图，不再添加任何额外说明文字？
5. 小红书第一篇是否需要弱化 MDX / StarDict，只说「本地词典」？

## HTML Generation Status

Preview started:

- [2026-05-20-appinn-draft-html-preview.html](2026-05-20-appinn-draft-html-preview.html)

This is an HTML preview, not final exported image output.
