# aDict Landing Page 逐區塊文案討論稿

> 建立日期：2026-04-28  
> 用途：以這個文件為討論中心，逐區塊確定文案後再寫入 HTML。  
> 不參考 `landing-page-copy-pack.md`。文案從 Notion 產品資料重新建立，只寫使用者在乎的事。

---

## Hero（已定稿）

| 層級 | 英文 |
|------|------|
| Eyebrow | `aDict 3.0 · For the words between the lines` |
| H1 | `Your dictionaries belong on every page you read.` |
| Hero text (ul/li) | Youdao from the cloud. / MDict and StarDict at hand. / Your own wordbooks beside you. / Every dictionary you trust, waiting in the margin, a glance away. |

---

## 整體敘事節奏

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

Section 2       → 圖：MDict 查詞結果（mdict-lookup）
                  文：你的檔案、你的資料歸你

Section 3？     → 暫不決定。如果兩屏已夠，直接進 FAQ + CTA。
                  如果需要第三屏，方向是使用者命題（免費/Pro、跨裝置等）

FAQ + CTA       → 五題 FAQ + App Store / TestFlight
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
structure and sidecar styling. Your lookup history and favorites sync across
your devices — exportable, portable, yours.
```

### 繁體中文草稿

**Title:**
```
你的檔案，你的資料，不鎖在任何服務裡
```

**Body:**
```
把你的 MDX、MDD 和 StarDict 檔案放進來，它們保留原有結構與同名樣式。
查詞歷史與收藏跨裝置同步——可匯出、可帶著走、是你的。
```

### 寫法說明

- 圖（mdict-lookup）展示檔案原樣渲染，文字只需要承諾兩件事：檔案不轉格式、資料歸你
- 這個 section 同時吃掉原本的「信任」和「長期」——檔案和資料是同一個信任問題

---

## Section 3（待定：是否需要第三屏？）

如果兩屏（S1 來源 + S2 檔案與資料）已經講完核心，可以不走第三屏，直接進 FAQ + CTA。

如果需要第三屏，方向應該是使用者在乎的事，例如：
- 免費 / Pro 的透明分界（settings-pro 截圖）
- 跨裝置（iPhone + iPad + Mac）
- 深色模式與閱讀舒適

暫不展開，等 S1、S2 定稿後再判斷需不需要第三屏。

---

## FAQ + CTA（待展開）

- 可以用自己的 MDict 檔案嗎？→ 可以，MDX/MDD/CSS 直接讀
- 只有有道嗎？→ 有道是其中一個來源，也支援 MDict、StarDict
- 需要帳號嗎？→ 本地詞典不需要，跨裝置同步可選
- 免費版和 Pro 差在哪？→ 免費版包含有道查詞。Pro 解鎖本地詞典、收藏與跨裝置同步
- 支援哪些平台？→ iPhone、iPad、Mac

CTA：App Store badge + TestFlight badge（已在 hero 有，footer 可重複）
