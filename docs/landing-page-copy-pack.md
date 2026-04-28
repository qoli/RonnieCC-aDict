# aDict Landing Page 文字素材包

建立日期：2026-04-28
版本：v3，以目前 `index.html` 首屏內容為準
來源：目前 `index.html`、Notion aDict 產品材料、本機 `/Volumes/Data/Github/aDicts` 源碼目錄校驗。本文只整理可公開轉化的產品敘事，不包含原始聊天紀錄或私有 log。

## 0. 本版範圍

本版素材包只同步目前 HTML 裡已經出現，或直接支撐目前首屏的英文文案。

目前 HTML 是英文版首屏：

- Header：app icon brand、Support、Privacy。
- Hero：左側產品畫面與兩張資訊卡，右側英文文案與 App Store / TestFlight badge。
- 沒有 hero-proof。
- 沒有頂部 `Join beta` CTA。
- 沒有首屏以下的 feature sections、FAQ、proof strip 或額外 marketing blocks。
- 繁中版本暫不重建；等英文版確認後，再以本文件的英文定稿為基準重建。

## 1. 目前 HTML 文案總表

### SEO / Meta

Title:

```text
aDict · A quiet dictionary for reading
```

Meta description:

```text
aDict is an Apple-platform dictionary app for reading, personal MDict and StarDict files, Youdao lookup, iCloud documents, and durable lookup history.
```

Open Graph / Twitter description:

```text
An Apple-platform dictionary app for reading, personal MDict and StarDict files, Youdao lookup, iCloud documents, and durable lookup history.
```

Structured data description:

```text
aDict is an Apple-platform dictionary app for reading, personal MDict and StarDict files, Youdao lookup, iCloud documents, and durable lookup history.
```

### Header

Brand accessibility label:

```text
aDict home
```

Navigation:

```text
Support
Privacy
```

### Hero Preview

Hero preview accessibility label:

```text
aDict app preview
```

Image alt:

```text
aDict 3.0 showing a dictionary lookup interface on iPhone
```

Left info card accessibility label:

```text
aDict dictionary sources
```

Left info card:

```text
Dictionary Sources
Online and local references in one app
Youdao · MDict · StarDict
```

Right info card accessibility label:

```text
aDict local dictionary library
```

Right info card:

```text
Dictionary Files
Bring the files you already trust
MDX · MDD · CSS · StarDict
```

### Hero Copy

Eyebrow:

```text
aDict 3.0 · For the words between the lines
```

Headline:

```text
Your dictionaries belong on every page you read.
```

Hero text accessibility label:

```text
aDict reading support
```

Hero text list:

```text
Youdao from the cloud.
MDict and StarDict at hand.
Your own wordbooks beside you.
Every dictionary you trust, waiting in the margin, a glance away.
```

CTA group accessibility label:

```text
Download and beta actions
```

App Store CTA accessibility label:

```text
Download aDict on the App Store
```

App Store badge alt:

```text
Download on the App Store
```

TestFlight CTA accessibility label:

```text
View aDict beta in TestFlight
```

TestFlight badge alt:

```text
View in TestFlight
```

## 2. 當前首屏敘事

目前首屏的核心不是「功能很多」，而是「詞典應該回到閱讀現場」。

`Your dictionaries belong on every page you read.` 是主標題。它把 aDict 定位成閱讀時始終在場的詞典，而不是把使用者帶走的查詞網站。

`For the words between the lines` 是目前 eyebrow 的文學感來源。它把產品放在閱讀、頁面、行間和頁邊的語境裡。

四個 hero list item 負責把功能事實放進更輕的語氣：

- `Youdao from the cloud.` 對應線上有道查詞。
- `MDict and StarDict at hand.` 對應本地詞典 provider。
- `Your own wordbooks beside you.` 對應使用者自己的詞庫。
- `Every dictionary you trust, waiting in the margin, a glance away.` 對應頁邊、閱讀不中斷和可隨手查詢的感受。

## 3. 文案語氣規則

目前英文文案要保留文學 / 莎士比亞方向的感覺，但不能寫成仿古英文。

可以使用的意象：

- page
- line
- between the lines
- margin
- at hand
- beside you
- waiting
- glance
- reading

避免使用：

- `thou`、`thee`、`wherefore` 這類古英語 cosplay。
- function-call 式文案，例如 `lookup(...)`、`attach(...)`。
- 無根據數字，例如使用者數、速度、rating、查詞量。
- 頂部重複 CTA，例如右上角再放一次 `Join beta`。
- hero-proof、proof strip、額外 testimonial 或首屏以下 section，除非 HTML 重新加入。

## 4. 產品事實依據

這些事實可以支撐目前文案，但不應全部塞進首屏主標題：

- aDict 3.0 面向 Apple 平台。
- 支援 Youdao lookup。
- 支援本地 MDict / StarDict 工作流。
- MDict 相關文件包含 MDX、MDD 和 sidecar CSS。
- 使用者可以帶入自己信任的詞典文件。
- 產品方向是讓查詞貼近閱讀，而不是把閱讀帶離原頁面。
- iCloud documents、lookup history、favorites 是可延伸到 meta / future copy 的可信素材，但目前沒有出現在 hero 可見文案裡。

## 5. 當前 HTML 可用文案塊

首屏重建時，應以這組英文為基準：

```text
aDict 3.0 · For the words between the lines

Your dictionaries belong on every page you read.

Youdao from the cloud.
MDict and StarDict at hand.
Your own wordbooks beside you.
Every dictionary you trust, waiting in the margin, a glance away.
```

資訊卡重建時，應以這兩組為基準：

```text
Dictionary Sources
Online and local references in one app
Youdao · MDict · StarDict
```

```text
Dictionary Files
Bring the files you already trust
MDX · MDD · CSS · StarDict
```

CTA 重建時，應只保留目前兩個 badge：

```text
Download on the App Store
View in TestFlight
```

## 6. 不在當前 HTML 中的舊素材

以下舊素材不再作為目前 landing page 的文案來源：

- `A word should not break the spell of reading.`
- `Keep your dictionaries in the margin...`
- `A quiet prompter for the words that stop the line.`
- `Carry your dictionaries into every reading.`
- `Keep the word upon the page.`
- 首屏以下的 Section 文案。
- FAQ 文案。
- hero-proof 系列。
- function-card / code-card 系列。
- 頂部 `Join beta`。

如果後續要重建中文版，先不要沿用舊繁中文案；應先確認英文版，再從本文件第 1 節和第 5 節逐句重建。
