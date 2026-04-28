# aDict Landing Page 文字素材包

建立日期：2026-04-28  
版本：v2，移除現有 HTML mockup 對文案的污染  
來源：Codex thread `019dce6c-8e82-7ae3-82c4-b264fd7070ff` 摘要、Notion aDict 產品材料、本機 `/Volumes/Data/Github/aDicts` 源碼目錄校驗。本文只整理可公開轉化的產品敘事，不包含原始聊天紀錄或私有 log。

## 0. 修正方向

這份素材包不以當前 HTML 內容為基準。當前 mockup 裡的 hero 口號、function-card 語氣、模板式 proof strip 都不能直接繼承。

新的文案方向應該從三個來源重新建立：

- Notion 裡的產品原點：簡單、美觀、查詞舒服。
- Notion 裡的演化線：從查詞工具走向本地詞典架構。
- 源碼裡的 3.0 事實：provider 分層、MDict / StarDict / Youdao、協議、WebView runtime、SQLite / CloudKit 資料層。

## 1. 核心敘事

### 產品主張

aDict 不是另一個讓人離開閱讀現場的查詞網站。它是一個安靜地待在閱讀旁邊的 Apple 平台詞典工具，讓使用者把線上查詞、個人 MDX / StarDict 詞庫、收藏與歷史放進同一個可長期維護的閱讀工作流。

### 一句話

查詞應該回到閱讀裡，而不是把你帶到另一個地方。

### 英文方向

Lookup should stay inside the reading flow.

### 產品氣質

- 安靜，不打擾。
- 直接，不繞路。
- 尊重使用者已有的詞庫。
- 把查詞歷史與收藏當作長期閱讀資料。
- 3.0 的價值是讓基礎更穩，不是把老使用者帶到陌生產品。

## 2. 禁用方向

不要再使用當前 HTML mockup 裡那種通用 SaaS 式 hero 口號。它沒有抓住 aDict 的核心：閱讀不中斷、詞庫可自帶、查詞結果要舒服。

也避免以下語氣：

- Demo code：`lookup(...)`、`attach(...)`、function call card。
- 無證據數字：rating、用戶數、速度、查詞量。
- 模板廣告：把參考站右下角廣告位改寫成 aDict 入口。
- 過度工程：把 `provider registry`、`JSON envelope` 放在首屏主標題。
- 過度 AI：把 enrichment 當作首屏主賣點。

## 3. 可信來源要點

### Notion 產品材料

- 早期定位是簡單美觀的詞典/字典查詢工具。
- 產品演化線是從「順眼的查詞工具」到「本地詞典架構」。
- 3.0 是一次重寫，目標是讓查詞、離線詞庫、收藏、歷史與跨平台體驗更可靠、更清楚。
- MDict `.mdx` 是核心使用場景，並支援同名 CSS sidecar。
- 早期詞典資料整理過中中、英英、mdict.cn 詞庫列表與簡明英漢增強版，說明 aDict 一直與使用者自己的詞庫資料相關。

### 源碼材料

- `aDictRewrite/` 是 3.0 新工作區，用來逐步替代舊版 `aDict/`，但不破壞舊工程。
- `MDictCLI/` 是獨立 Swift Package，負責 native MDict parser、lookup、suggest、resources、MDD 提取與 CLI 驗證。
- `StarDictCLI/` 提供 StarDict parser / provider 能力，支援 lookup、suggest、offline、resource sidecar。
- `YoudaoProvider/` 是獨立 provider package，負責有道查詞與 suggest。
- `aDictProtocol/` 固定 inspect / lookup / suggest / resources / extract-resource 的穩定資料形狀。
- `aDictRewrite` 的資料層使用 SQLite、GRDB、SQLiteData 與 CloudKit；lookup history、favorite word、enrichment rule 是可同步使用者資料，enrichment cache 是本地衍生資料。
- Pro 權益包含 dictionary files、local dictionaries、favorites、iCloud dictionary sync、intelligence enrichment。

## 4. Hero 文案候選

### 方案 A：閱讀不中斷

Eyebrow:

```text
aDict 3.0 · Local dictionaries for Apple platforms
```

Headline:

```text
Lookup should stay inside the reading flow.
```

Subheadline:

```text
aDict keeps dictionary lookup quiet and close: online lookup when you need it, local MDX and StarDict files when you bring your own references, and reading history that remains useful over time.
```

繁中：

```text
查詞應該回到閱讀裡。
```

```text
aDict 讓查詞保持安靜而貼近：需要時查線上詞典，也能使用自己的 MDX 與 StarDict 詞庫，並把歷史與收藏留成真正有用的閱讀資料。
```

### 方案 B：安靜可靠

Eyebrow:

```text
MDict · StarDict · Youdao · iCloud Documents
```

Headline:

```text
A quiet dictionary for people who read with their own references.
```

Subheadline:

```text
aDict is built for long reading sessions, personal dictionary files, and fast word checks that do not turn into a separate research trip.
```

繁中：

```text
一個安靜、可靠、可帶著自己詞庫的詞典。
```

```text
aDict 面向長時間閱讀、個人詞庫與快速查詞而設計，讓確認一個詞不必變成另一趟搜尋旅程。
```

### 方案 C：本地詞庫架構

Eyebrow:

```text
The next foundation for aDict
```

Headline:

```text
Personal dictionary files, rebuilt for a cleaner lookup system.
```

Subheadline:

```text
aDict 3.0 rebuilds the lookup path around separate providers, native MDict parsing, StarDict support, WebView rendering, and durable reading data.
```

繁中：

```text
把個人詞庫，重新整理成更清楚的查詞系統。
```

```text
aDict 3.0 重新整理查詞路徑：provider 分層、原生 MDict 解析、StarDict 支援、WebView 渲染，以及可長期保存的閱讀資料。
```

## 5. CTA 文案

Primary CTA 候選：

```text
Download aDict
```

```text
Try aDict 3.0
```

```text
Join the 3.0 beta
```

繁中：

```text
下載 aDict
```

```text
試用 aDict 3.0
```

```text
加入 3.0 beta
```

Secondary CTA 候選：

```text
Read the MDict guide
```

```text
See what changed in 3.0
```

```text
View dictionary file support
```

繁中：

```text
閱讀 MDict 指南
```

```text
了解 3.0 重寫
```

```text
查看詞典文件支援
```

## 6. 首屏浮動卡片素材

參考 Atoks 的左右浮動節奏，但內容必須是 aDict 的產品資訊卡，不是 function call，也不是模板廣告。

### 左卡：詞典來源

```text
Dictionary Sources
Online and local references in one app
Youdao · MDict · StarDict
```

繁中：

```text
詞典來源
線上查詞與本地詞庫放在同一個 App
有道 · MDict · StarDict
```

### 右卡：本地文件

```text
Dictionary Files
Bring the files you already trust
MDX · MDD · CSS · StarDict
```

繁中：

```text
本地詞典文件
使用你已經信任的詞庫
MDX · MDD · CSS · StarDict
```

### 可替換卡片：閱讀資料

```text
Reading Data
History and favorites that remain useful
SQLite · CloudKit · iCloud
```

繁中：

```text
閱讀資料
讓歷史與收藏長期有用
SQLite · CloudKit · iCloud
```

## 7. Section 文案

### Section：閱讀不中斷

Title:

```text
Check a word, then keep reading.
```

Body:

```text
aDict is designed for the small interruption that happens while reading: confirm a word, compare an entry, save it if needed, and return to the sentence.
```

繁中：

```text
查一個詞，然後繼續讀下去。
```

```text
aDict 面向閱讀中那個很小的中斷而設計：確認一個詞、比較一個條目、必要時收藏，然後回到原本的句子。
```

### Section：自己的詞庫

Title:

```text
Use the dictionary files you already keep.
```

Body:

```text
MDX dictionaries, MDD resources, sidecar CSS, and StarDict bundles can live in a local or iCloud document workflow, instead of being hidden behind a single remote service.
```

繁中：

```text
使用你原本就在保存的詞典文件。
```

```text
MDX 詞庫、MDD 資源、同名 CSS 與 StarDict bundle 可以放進本地或 iCloud 文件工作流，而不是被單一遠端服務取代。
```

### Section：清楚的 3.0 基礎

Title:

```text
3.0 is a foundation rewrite, not a new habit to learn.
```

Body:

```text
The rewrite separates lookup, providers, WebView rendering, files, persistence, StoreKit entitlement, and user data so the app can become more reliable without becoming unfamiliar.
```

繁中：

```text
3.0 是基礎重寫，不是要你重新學一個 App。
```

```text
這次重寫拆開查詞、provider、WebView 渲染、文件、持久化、StoreKit 權益與使用者資料，讓 App 更可靠，但不變得陌生。
```

### Section：多 provider，同一體驗

Title:

```text
Different dictionary sources, one predictable lookup path.
```

Body:

```text
Youdao, MDict, and StarDict are implemented as separated provider packages, but the host app receives stable lookup and suggestion results through the same protocol.
```

繁中：

```text
不同詞典來源，同一條可預期的查詞路徑。
```

```text
有道、MDict 與 StarDict 由不同 provider package 負責，但 Host app 透過同一套協議接收穩定的查詞與候選結果。
```

### Section：收藏與歷史

Title:

```text
Saved words should outlive the current screen.
```

Body:

```text
Lookup history, favorites, and enrichment rules are modeled as durable reading data. Derived enrichment cache stays local because it can be regenerated.
```

繁中：

```text
收藏的詞，不應只存在於當前畫面。
```

```text
查詞歷史、收藏與 enrichment rules 被建模成可長期使用的閱讀資料；衍生 cache 保留在本地，因為它可以重新生成。
```

## 8. 產品畫面文案

### Hero 主圖

Alt:

```text
aDict 3.0 showing a dictionary lookup interface on iPhone
```

Caption:

```text
The lookup view stays focused on the word and the entry, with dictionary switching close at hand.
```

繁中 Caption:

```text
查詞畫面聚焦在單詞與條目本身，詞典切換保持在手邊。
```

### MDict 查詞截圖

Caption:

```text
Local MDict entries render with their original structure, resources, and sidecar styling.
```

繁中：

```text
本地 MDict 條目保留原有結構、資源與同名樣式。
```

### 詞典選單截圖

Caption:

```text
Switch between online lookup and local dictionary files without treating them as separate apps.
```

繁中：

```text
在線上查詞與本地詞庫之間切換，不需要把它們當成不同 App。
```

### Suggest 截圖

Caption:

```text
Suggestions help you reach the right headword before opening the full entry.
```

繁中：

```text
候選詞讓你在打開完整條目前先找到正確詞頭。
```

## 9. FAQ

### Can I use existing MDict files?

Yes. aDict is built around personal dictionary files, including MDX entries, MDD resources, and sidecar CSS.

繁中：

可以。aDict 圍繞個人詞典文件設計，包含 MDX 詞條、MDD 資源與同名 CSS。

### Is Youdao the only dictionary source?

No. Youdao is one provider. aDict also supports local dictionary workflows around MDict and StarDict.

繁中：

不是。有道只是其中一個 provider。aDict 也支援圍繞 MDict 與 StarDict 的本地詞典工作流。

### What changed in 3.0?

3.0 rebuilds the foundation: provider boundaries, local file discovery, lookup and suggestion protocol, WebView rendering, persistence, entitlements, and enrichment rules.

繁中：

3.0 重建的是基礎：provider 邊界、本地文件掃描、lookup / suggest 協議、WebView 渲染、持久化、權益狀態與 enrichment rules。

### Does lookup require an account?

The local dictionary workflow does not need to start from an account. The product direction is document- and device-friendly, with iCloud used where it fits the Apple platform workflow.

繁中：

本地詞典工作流不應從帳號開始。aDict 的方向是尊重文件與裝置工作流，並在適合 Apple 平台的地方使用 iCloud。

### What should not be promised yet?

Do not promise full corpus compatibility, universal large-dictionary performance, final macOS parity, or unverified App Store ratings unless those are confirmed for the current release.

繁中：

除非當前 release 已驗證，否則不要承諾完整詞庫相容、超大型詞庫效能、最終 macOS 對等或未確認的 App Store 評分。

## 10. SEO 與 Meta

Title:

```text
aDict · A quiet dictionary for reading
```

Description:

```text
aDict is an Apple-platform dictionary app for reading, personal MDict and StarDict files, Youdao lookup, iCloud documents, and durable lookup history.
```

繁中 Title:

```text
aDict · 為閱讀而設計的安靜詞典
```

繁中 Description:

```text
aDict 是面向 Apple 平台閱讀者的詞典 App，支援個人 MDict 與 StarDict 詞庫、有道查詞、iCloud 文件與可長期保存的查詞歷史。
```

## 11. 首頁內容骨架

```text
Hero
Lookup should stay inside the reading flow.
aDict keeps dictionary lookup quiet and close: online lookup when you need it, local MDX and StarDict files when you bring your own references, and reading history that remains useful over time.

Section 1
Check a word, then keep reading.

Section 2
Use the dictionary files you already keep.

Section 3
Different dictionary sources, one predictable lookup path.

Section 4
3.0 is a foundation rewrite, not a new habit to learn.

Section 5
Saved words should outlive the current screen.

FAQ
MDict files.
Youdao and local providers.
What changed in 3.0.
Account and iCloud expectations.
Compatibility limits.
```

繁中骨架：

```text
Hero
查詞應該回到閱讀裡。
aDict 讓查詞保持安靜而貼近：需要時查線上詞典，也能使用自己的 MDX 與 StarDict 詞庫，並把歷史與收藏留成真正有用的閱讀資料。

Section 1
查一個詞，然後繼續讀下去。

Section 2
使用你原本就在保存的詞典文件。

Section 3
不同詞典來源，同一條可預期的查詞路徑。

Section 4
3.0 是基礎重寫，不是要你重新學一個 App。

Section 5
收藏的詞，不應只存在於當前畫面。
```
