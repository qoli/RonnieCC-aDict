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
- `main-hero-light.png` — Hero 用裁切圖，帶 iPhone 外框與透視角度。畫面是 `Word` 的 Youdao 查詞結果，頂部有選單與收藏按鈕，底部有玻璃質感搜尋列與紅色 `Y` 來源按鈕。白底、字重清楚，適合作為第一屏主視覺。
- `main-hero-dark.png` — `main-hero-light.png` 的深色版本，同樣是 `Word` 的 Youdao 查詞結果與 iPhone 外框。適合做深色模式備案或視覺對比，不應和 light 版同屏重複使用。
- `adict-3-home.png` — 完整 iPhone 截圖，`Word` / Youdao 查詞首頁狀態。可看到音標、有道詞典段落、網絡解釋、底部搜尋列與 `Y` 來源按鈕。它證明「打開 App 就能查詞」，但內容和 Hero 重疊，適合備用或裁切局部。
- `adict-3-dictionary-menu.png` — 完整 iPhone 截圖，背景是 `Art` 的查詞結果，前景打開 Session / 詞典來源選單。選單內有 `Settings`、`StarDict 词典`（牛津現代英漢雙解詞典 / `oxford-big5.ifo`）、`MDict 词典`（`OxfordA.mdx`、朗文雙解 `.mdx`）和 `网络词典`（Youdao）。這張最能證明 Youdao、MDict、StarDict 都在同一個 App 裡，應作為 Section 1 主圖。
- `adict-3-mdict-lookup.png` — 完整 iPhone 截圖，`Art` / `OxfordA` 的本地 MDict 查詞結果。畫面保留詞庫原本的 HTML/CSS 表現，包括紅色詞性標籤、星號、底線連結、橘色中文釋義、藍色例句翻譯與條列排版。這張最能證明本地 MDX 不是被轉成單調文字，應作為 Section 2 主圖。
- `adict-3-session-menu.png` — 完整 iPhone 截圖，背景是 `language` / `OxfordA` 查詞結果，前景有半透明浮層列出近期或可切換的查詞項目（`art`、`language`，都標示 OxfordA）。適合講「查詞上下文 / session 可回到先前查過的詞」，但目前不是核心敘事，先作備用。
- `adict-3-settings.png` — 完整 iPhone 截圖，Settings 首頁。可見 `Membership` 狀態為 `Pro`、`Dictionary Files` 狀態為 `Local`、`Intelligence` 狀態為 `Disabled`，下方說明 settings 依功能區分組。它適合放 FAQ 或 Pro / 設定透明度段落，不適合拿來證明詞庫格式。
- `adict-3-settings-pro.png` — 完整 iPhone 截圖，實際內容是 `Dictionary Files` 管理頁，不是 Pro 權益頁。畫面包含 `Sync with iCloud` 開關、`No iCloud Documents container available.` 提示、`Open folder`、檔案放置說明，以及本地檔案清單：MDict 有 `朗文雙解.mdx`、`OxfordA.mdx`，StarDict 有 `牛津現代英漢雙解詞典` / `oxford-big5.ifo`。這張最適合支撐「你的檔案、你的資料、可本地保存 / 可同步」的說法，可與 Section 2 搭配或作 Section 3。
- `adict-3-suggestions.png` — 完整 iPhone 截圖，背景是 `Language` / `OxfordA` 的 MDict 查詞結果，底部搜尋框正在輸入 `Art`，上方彈出候選詞卡片（`art deco`、`artful`、`artery`、`art`），每個候選帶詞形、音標與摘要。適合展示查詞過程的速度與候選建議，作為互動細節備用。

非截圖輔助資產：
- `adict-app-icon.png` — 256×256 App icon，紅底白色書本圖形。目前用於 header brand。
- `proof-avatar-1.png`、`proof-avatar-2.png`、`proof-avatar-3.png` — 512×512 頭像圖，原本屬於 proof / testimonial 視覺。當前 landing page 沒有 testimonial 區塊，不進主要敘事。
- `assets/old/*` — 舊版截圖備份，不列入目前文案配圖決策。

### 節奏（圖文配對）

```
Hero            → 手機 mockup + 兩張資訊卡 + copy
                  （已定稿，圖文都到位）

Section 1       → 圖：詞典切換選單（dictionary-menu）
                  文：一句話講完 aDict 是什麼、接哪些來源

Section 2       → 圖：MDict 查詞結果（mdict-lookup）
                  文：你的檔案、你的資料歸你

Section 3？     → 暫不決定。如果兩屏已夠，直接進 FAQ + CTA。
                  如果需要第三屏，優先方向是檔案管理 / 同步透明度。
                  免費 / Pro 只能用 settings 首頁輔助說明；跨裝置目前缺圖。

FAQ + CTA       → 五題 FAQ + App Store / TestFlight
```

### 資產關係表

| 資產 | 正確內容 | 建議位置 | 承擔的訊息 | 使用狀態 |
|------|----------|----------|------------|----------|
| `main-hero-light.png` | 帶 iPhone 外框的 `Word` / Youdao 查詞畫面，白底 | Hero 主視覺 | aDict 是一個查詞 App，查詞結果可停在閱讀邊上 | 已用 |
| `main-hero-dark.png` | 同一個 Hero 查詞畫面的深色版本 | Hero 深色模式備案 | 同一體驗支援深色視覺 | 備用 |
| Hero 左資訊卡 | `Dictionary Sources`，列 Youdao / MDict / StarDict | Hero | 先讓讀者知道支援雲端與本地詞典來源 | 已用 |
| Hero 右資訊卡 | `Dictionary Files`，列 MDX / MDD / CSS / StarDict | Hero | 先讓讀者知道可帶入自己的詞庫檔案 | 已用 |
| `adict-3-dictionary-menu.png` | Session / 詞典來源選單，列 Settings、StarDict、MDict、Youdao | Section 1 | 三種詞典世界真的在同一個 App 內切換 | 主圖 |
| `adict-3-mdict-lookup.png` | `Art` / `OxfordA` 的 MDict HTML/CSS 查詞結果 | Section 2 | 本地 MDX 以原始結構與樣式渲染，不只是純文字 | 主圖 |
| `adict-3-settings-pro.png` | `Dictionary Files` 管理頁，含 iCloud、Open folder、MDict / StarDict 檔案清單 | Section 2 輔圖或 Section 3 | 檔案是使用者自己的，可本地管理，也可談同步 | 候選主圖 |
| `adict-3-settings.png` | Settings 首頁，Membership / Dictionary Files / Intelligence 分組 | FAQ 或 Pro 說明 | Pro、檔案來源與智慧功能的設定入口透明可見 | 備用 |
| `adict-3-suggestions.png` | 搜尋輸入 `Art` 時的候選詞建議列表 | Section 3 或互動細節 | 查詞不是只有結果頁，也有即時候選與回查流程 | 備用 |
| `adict-3-session-menu.png` | 半透明 session / 近期查詞浮層，列 `art`、`language` | Section 3 或備用 | 可回到先前查過的詞，保留查詞上下文 | 備用 |
| `adict-3-home.png` | 完整 `Word` / Youdao 首頁查詞結果 | 備用 | 有道查詞的完整畫面；和 Hero 重疊，不優先放正文 | 備用 |
| `adict-app-icon.png` | App icon | Header / metadata | 品牌識別 | 已用 |
| `proof-avatar-*.png` | 三張 testimonial 頭像 | 若未來新增 proof 區 | 使用者評價視覺，不承擔產品功能說明 | 暫不使用 |

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
- 檔案管理 / 同步透明度（`adict-3-settings-pro.png`，實際是 Dictionary Files 管理頁）
- 免費 / Pro 的透明分界（`adict-3-settings.png` 只能證明 Membership 狀態，不是權益表）
- 跨裝置（需要另外的 iPhone + iPad + Mac 視覺，目前截圖資產不足）
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
