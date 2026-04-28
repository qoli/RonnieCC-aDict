# aDict Landing Page 逐區塊文案討論稿

> 建立日期：2026-04-28  
> 用途：以這個文件為討論中心，逐區塊確定文案後再寫入 HTML。  
> 不參考 `landing-page-copy-pack.md`。文案從 Notion 產品資料和源碼事實重新建立。

---

## Hero（已定稿）

| 層級 | 英文 |
|------|------|
| Eyebrow | `aDict 3.0 · For the words between the lines` |
| H1 | `Your dictionaries belong on every page you read.` |
| Hero text (ul/li) | Youdao from the cloud. / MDict and StarDict at hand. / Your own wordbooks beside you. / Every dictionary you trust, waiting in the margin, a glance away. |

---

## 整體敘事節奏（二稿）

Hero 做完情緒後，剩下的螢幕不超過三個。每一屏都要有圖。

可用截圖資產：
- `adict-3-dictionary-menu.png` — 詞典切換選單（Youdao / MDict / StarDict）
- `adict-3-mdict-lookup.png` — MDict 本地詞庫查詞結果
- `adict-3-suggestions.png` — 候選詞建議
- `adict-3-settings-pro.png` — Pro 權益設定

### 節奏（圖文配對）

```
Hero            → 手機 mockup + 兩張資訊卡 + copy
                  （已定稿，圖文都到位）

Section 1       → 圖：詞典切換選單（dictionary-menu）
                  文：一句話講完 aDict 是什麼、接哪些來源
                  因為 Hero 的兩張資訊卡已經預告了來源，這裡用圖證明

Section 2       → 圖：MDict 查詞結果（mdict-lookup）
                  文：你的檔案、你的資料歸你
                  用圖展示「自己的 mdx 直接跑」，文字補信任感

Section 3 / FAQ → 可能不需要第三屏純文案區塊，直接 FAQ + CTA
                  或者用 settings-pro 截圖收在 Pro 權益說明
```

### 圖片分工

| 圖片 | 放在哪 | 說什麼 |
|------|--------|--------|
| `main-hero-light.png` | Hero | 產品外觀 |
| 左卡 + 右卡 | Hero | 來源 + 檔案格式（一句話預告） |
| `adict-3-dictionary-menu.png` | S1 | 三種來源真的在同一個 App 裡 |
| `adict-3-mdict-lookup.png` | S2 | 你自己的 mdx 檔案，原樣渲染 |
| `adict-3-settings-pro.png` | 可選 FAQ 區 | Pro 解鎖了什麼，透明 |
| `adict-3-suggestions.png` | 備用 | 如果需要展示查詞體驗細節

---

## Section 1：它是什麼 / 能接哪些來源（配圖：dictionary-menu）

Hero 的兩張資訊卡已經預告了 Youdao / MDict / StarDict 和 MDX / MDD / CSS。Section 1 用一張圖證明它們真的在同一個 App 裡。

### 英文草稿

**Title:**
```
Three dictionary worlds, one app.
```

**Body:**
```
Youdao from the cloud. MDict and StarDict from your own files.
Switch between them without leaving the sentence you were reading.
```

### 繁體中文草稿

**Title:**
```
三種詞典來源，一個 App
```

**Body:**
```
有道的雲端查詞，MDict 和 StarDict 的本地檔案。在它們之間切換，不必離開你正在讀的那一句。
```

### 寫法說明

- 不需要「aDict is not a search engine」——Hero 已經用語氣區隔了
- 不需要展開功能——圖（dictionary-menu）會證明
- 兩句話：一句列出來源，一句承諾體驗

---

## Section 2：你的檔案、你的資料（配圖：mdict-lookup）

用一張 MDict 查詞結果截圖證明：你自己的 mdx 檔案，原樣渲染，不是轉成 App 專有格式。

### 英文草稿

**Title:**
```
Your files. Your data. Not locked inside a service.
```

**Body:**
```
Drag in your MDX, MDD, and StarDict files. They render with their original
structure and sidecar CSS. Your lookup history, favorites, and enrichment
rules live in SQLite and CloudKit — exportable, syncable, yours.
```

### 繁體中文草稿

**Title:**
```
你的檔案，你的資料，不鎖在任何服務裡
```

**Body:**
```
把你的 MDX、MDD 和 StarDict 檔案放進來，它們保留原有結構與同名 CSS 渲染。
查詞歷史、收藏和 enrichment rules 放在 SQLite 和 CloudKit 裡——可匯出、可同步、是你的。
```

### 寫法說明

- 圖（mdict-lookup）展示檔案原樣渲染，文字只需要承諾兩件事：檔案不轉格式、資料歸你
- 「SQLite + CloudKit」具體點名技術，給進階使用者信心，但放 body 不當標題
- 這個 section 同時吃掉原本的「信任」和「長期」——檔案和資料是同一個信任問題
