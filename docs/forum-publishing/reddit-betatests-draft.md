# Reddit r/BetaTests Draft

Target: r/BetaTests

Goal: recruit practical beta feedback for aDict 3.0 TestFlight, not publish a launch announcement.

## Positioning

- Write as the developer of the app.
- Keep the tone direct and modest: this is a beta looking for feedback.
- Lead with the personal product history: a small dictionary tool that should stay out of the way and be reliable when needed.
- Avoid opening with a question hook or a numbered feedback survey; it reads like generic AI-written growth copy.
- Ask for real-world rough edges through natural prose.
- Mention local MDict / StarDict files as an advanced workflow, not the main hook.
- Mention Apple Intelligence enrichment as newly built and experimental; the current UI/output is not final.
- Do not imply that the current TestFlight build is the App Store release.

## Suggested Title

```text
[iOS/macOS] aDict 3.0 beta - a lightweight dictionary app that tries to stay out of the way
```

Alternatives:

- Rebuilt my old dictionary app for iPhone, iPad, and Mac, now in TestFlight
- aDict 3.0 beta: quick online lookup with optional local MDX/StarDict support
- Testing a quiet dictionary app for Apple devices

## Draft

Hi everyone, I’m the developer of aDict.

aDict started as a small personal tool in 2019. I wanted a dictionary app that could sit next to reading and coding on my Mac, iPhone, and iPad: quick to open, comfortable in dark mode, and reliable when I need it, without turning lookup into a whole separate task.

I recently rebuilt it as a 3.0 TestFlight version. The rewrite is not only a UI refresh. The main goal was to make the lookup flow easier to maintain: online sources, local dictionary files, history, favorites, and the rendering layer now have clearer boundaries.

In everyday use, the app is meant to be boring in a good way: open it, type a word, and get a readable result from a selected source.

The current beta supports:

- iPhone, iPad, and Mac
- Online dictionary sources, including Youdao and V2EX Dict
- Source switching
- Search suggestions while typing
- Lookup history and favorites
- Optional local dictionary files for advanced users
- MDict / MDX / MDD
- StarDict

The app is not only for people who already collect local dictionary files. If you just want something that works out of the box, you can start with the online sources. If you already have local dictionary files, you can import them later and use them in the same lookup flow.

![Dictionary source switching and search suggestions](assets/freemdict-dictionary-menu-suggestions.png)

I also added an early Apple Intelligence related feature in 3.0. It can add configurable enrichment blocks to lookup results, such as example sentences, usage notes, and related context. This part is very new, and I’m still trying to understand whether it is actually useful in real reading and lookup scenarios. The current UI and output should not be treated as the final design.

![Experimental Apple Intelligence enrichment rules and lookup result](assets/appinn-apple-intelligence-enrichment.png)

I’m not trying to turn this into a big dictionary platform. I’m trying to make a small lookup tool that stays useful over time. The most helpful feedback would be the kind of rough edge that only shows up in real use: a lookup that feels slower than expected, a screen that makes the source switch unclear, an online result that is not useful enough, an import flow that surprises you, or an enrichment block that feels more like noise than help.

Short notes are enough. I’m mainly trying to see where the app still gets in the way of the actual reading.

TestFlight:

https://testflight.apple.com/join/dCGMvyw9

Product page:

https://adict.ronniewong.cc/

App Store page:

https://apps.apple.com/in/app/adict-dictionary-lookup/id1483402597

One note: the TestFlight page may show the existing App Store metadata, but the installed beta build is the 3.0 version.

Thanks for trying it if this fits your workflow. Specific feedback about confusing screens, bad lookup results, slow interactions, or import problems would be the most useful.

## Source Notes From Notion

The Reddit phrasing is based on these Notion product notes:

- `aDict 的演化歷史：從順眼的查詞工具到本地詞典架構`: aDict started from a small recurring personal need, not a platform ambition.
- `aDict 3.0 一個老詞典 App 的重寫`: 3.0 is a rewrite of an old app that the developer still personally uses.
- `aDict 更新日誌`: 3.0 is still a TestFlight build; Build 9 adds customizable Apple Intelligence rules and subfolder scanning.

## Optional Image Attachments

Images are already integrated into the draft body:

1. `assets/freemdict-dictionary-menu-suggestions.png`
2. `assets/appinn-apple-intelligence-enrichment.png`

Avoid posting all screenshots in the beta thread; the goal is to ask for testing, not reproduce a product landing page.

## Publishing Notes

- Do not use a question hook in the title or opening paragraph.
- Do not use a numbered "I want feedback on..." list in the final Reddit post.
- Keep the TestFlight link above the App Store link.
- Do not post as if 3.0 is already the public App Store version.
- Do not claim bundled dictionary resources.
- If someone challenges self-promotion, answer plainly that this is the developer asking for beta feedback and avoid arguing.
