# V2EX Sharing Draft

Live topic: <https://www.v2ex.com/t/1212555?p=1#reply2>

Target board: 分享创造

Goal: introduce aDict as a low-pressure independent project, not an aggressive app advertisement.

## Positioning

- aDict is not a V2EX official client.
- There is no official V2EX collaboration.
- V2EX Dict should be described as an online dictionary source, not as aDict-owned content.
- The post should ask for feedback on local dictionary and online source workflows.

## Suggested Title

```text
做了一个支持本地 MDict / StarDict 的词典 app，也尝试接入了 V2EX Dict
```

Alternatives:

- 做了一个 iPhone / iPad / Mac 词典 app，最近把 V2EX Dict 接进来了
- 分享一个本地词典 app：支持 MDX/MDD、StarDict，也可以查 V2EX Dict
- aDict：一个本地词典阅读工具，顺手接入了 V2EX Dict

## Main Draft

最近把我维护的词典 app aDict 整理了一下，也做了一个新的介绍页：

https://adict.ronniewong.cc/

aDict 最早是给自己用的查词工具，现在主要定位是 iPhone / iPad / Mac 上的本地词典阅读 app。它支持：

- MDict / MDX / MDD
- StarDict
- 本地词典资源和 CSS
- 查询历史
- 收藏
- 多个词典来源之间切换

我自己一直有一个需求：读东西时不想只依赖一个在线词典，也不想把以前收集的本地词典文件丢掉。所以 aDict 的核心其实是「把本地词典留在手边」。

最近看到 V2EX Dict 之后，我觉得它很适合作为一个在线来源接进来。它的内容不是传统词典那种只给几个释义，而是会包含定义、音标、例句、词源、相关词，有些词还会补文学或语境信息。对于日常阅读时遇到一些表达，挺有帮助。

我现在在 aDict 里尝试把 V2EX Dict 作为一个查询来源。我的理解是，V2EX Dict 目前的开放程度对这种轻量使用是友好的，而且站长之前也公开提过可以尝试相关接口。但我也想说清楚：

- aDict 不是 V2EX 官方客户端。
- 这不是官方合作。
- 我不会把 V2EX Dict 包装成自己的词典内容。
- 如果站方或社区觉得这种接入方式不合适，我会调整或移除。

我发这个帖主要是想听听大家的意见：

1. 这种「本地词典 + V2EX Dict」的组合，对你们有没有实际使用场景？
2. 在手机或 Mac 上查 V2EX Dict，大家更希望它是一个独立词典来源，还是和本地词典结果一起显示？
3. 如果你们也用 MDX / MDD / StarDict，有没有特别在意的导入、显示或切换体验？
4. 对 V2EX Dict 的接入方式，有没有什么边界是我应该特别注意的？

目前我会先保持小范围测试，不做过度请求，也不缓存或再分发不属于 aDict 的在线词典内容。aDict 自己的重点仍然是本地词典文件管理和阅读时查词。

欢迎拍砖，也欢迎给一些真实的词典使用场景。

## Conservative Version

最近整理了一下我维护的词典 app aDict：

https://adict.ronniewong.cc/

它主要是一个 iPhone / iPad / Mac 上的本地词典工具，支持 MDict / MDX / MDD、StarDict、历史、收藏，以及多个词典来源切换。

我自己一直希望有一个工具，可以在阅读时把本地词典文件和一些在线来源放在同一个查词流程里。最近 V2EX Dict 做得很有意思，内容里有释义、音标、例句、词源和相关词，所以我尝试把它作为一个在线来源接入 aDict。

先说明一下边界：aDict 不是 V2EX 官方客户端，也不是官方合作。如果站方或社区觉得这种使用方式不合适，我会调整。这个帖子主要是想听听大家对「本地词典 + V2EX Dict」这个场景的看法。

如果你也在用 MDX / MDD / StarDict，或者平时会在手机 / Mac 上查英文表达，想问问这种工具有没有实际价值，以及结果展示方式应该怎么做比较舒服。

## Publishing Guardrails

- Do not say "V2EX official", "official collaboration", or "V2EX client".
- Avoid a title that sounds like "I turned V2EX Dict into an app".
- Keep screenshots limited; one or two images are enough.
- If someone challenges API authorization, answer around light usage, respect for boundaries, and willingness to adjust.
