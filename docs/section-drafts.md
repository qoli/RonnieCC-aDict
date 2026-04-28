# aDict Landing Page 已實作區塊對照

> 建立日期：2026-04-28  
> 更新日期：2026-04-28  
> 依據：`index.html`  
> 用途：記錄目前首頁已實作的區塊、文案、資產與互動狀態；另收納正在設計、尚未寫入 `index.html` 的下一段草稿。

---

## 目前頁面結構

`index.html` 目前實作以下內容：

1. Header
2. Hero
3. Source title
4. Source feature interaction

頁面目前沒有實作獨立的 MDict / file ownership section、FAQ、footer CTA、testimonial 或 Pro 權益區塊。

---

## Header

### 已實作文案與連結

| 元素 | 內容 |
|------|------|
| Brand | `assets/adict-app-icon.png`，連回 `/` |
| Nav 1 | `Support` → `support.html` |
| Nav 2 | `Privacy` → `privacy.html` |

### 使用資產

| 資產 | 用途 |
|------|------|
| `assets/adict-app-icon.png` | Header brand icon |

---

## Hero

### Metadata

| 欄位 | 內容 |
|------|------|
| Page title | `aDict · Your dictionaries belong on every page you read` |
| Meta description | `Your dictionaries belong on every page you read. Youdao, MDict, StarDict, and your own wordbooks wait in the margin, a glance away.` |
| Canonical | `https://adict.ronniewong.cc/` |

### 視覺

Hero 由一張主手機圖和兩張浮動資訊卡組成。

| 元素 | 內容 |
|------|------|
| Main visual | `assets/main-hero-light.webp` / `assets/main-hero-light.png?v=trimmed-alpha` |
| Main visual alt | `aDict 3.0 showing a dictionary lookup interface on iPhone` |
| Left card label | `Dictionary Sources` |
| Left card title | `Online and local references in one app` |
| Left card pills | `Youdao` / `MDict` / `StarDict` |
| Right card label | `Dictionary Files` |
| Right card title | `Bring the files you already trust` |
| Right card pills | `MDX` / `MDD` / `CSS` / `StarDict` |

### 文案

| 層級 | 英文 |
|------|------|
| Eyebrow | `For the words between the lines` |
| H1 | `Your dictionaries belong on every page you read.` |
| Hero text 1 | `Youdao from the cloud.` |
| Hero text 2 | `MDict and StarDict at hand.` |
| Hero text 3 | `Your own wordbooks beside you.` |
| Hero text 4 | `Every dictionary you trust, waiting in the margin, a glance away.` |

### CTA

| CTA | 連結 |
|-----|------|
| App Store | `https://apps.apple.com/in/app/adict-dictionary-lookup/id1483402597` |
| TestFlight | `https://testflight.apple.com/join/dCGMvyw9` |

CTA 只在 Hero 實作；頁尾沒有重複 CTA。

---

## Source Title

Hero 後面接一個獨立文字標題區。

| 層級 | 英文 |
|------|------|
| H2 | `Every dictionary, another ear.` |
| Body | `Listen to the word as each source hears it.` |

---

## Source Feature Interaction

這是目前 Hero 後唯一已實作的產品功能展示區。它不是靜態「Section 1 文案 + 一張圖」，而是以同一張手機背景搭配兩個浮動選單狀態輪播。

### 背景手機圖

| 元素 | 內容 |
|------|------|
| Picture source | `assets/adict-3-no-menu.webp` |
| Fallback img | `assets/adict-3-no-menu.png` |
| Alt | 空字串，作為裝飾性背景圖 |

### 狀態 1：Favorites

| 元素 | 內容 |
|------|------|
| Initial state | 是，`data-source-feature="favorites"` |
| Floating menu source | `assets/favorites-menu-3x.webp` |
| Floating menu fallback | `assets/favorites-menu-3x.png` |
| Figcaption label | `Favorites` |
| Figcaption body | `Return to the words you marked without leaving the current lookup.` |
| Indicator aria-label | `Show Favorites highlight` |

### 狀態 2：Dictionarys

| 元素 | 內容 |
|------|------|
| Floating menu source | `assets/dictionary-menu-3x.webp` |
| Floating menu fallback | `assets/dictionary-menu-3x.png` |
| Figcaption label | `Dictionarys` |
| Figcaption body | `Move between Youdao, StarDict, and local MDict files without restarting the lookup.` |
| Indicator aria-label | `Show Dictionarys highlight` |

`Dictionarys` 是目前 `index.html` 中的實際字串；本文照實記錄，不在文檔層修改。

### 互動行為

互動由 `source-feature.js` 實作：

| 行為 | 目前實作 |
|------|----------|
| Feature order | `favorites` → `source` |
| Auto-rotate duration | `5600ms` |
| Manual controls | 兩個 `.dot-indicator` button |
| Active state | 更新 `data-source-feature`、`.is-active`、`aria-pressed` |
| Hidden state | 對非 active panel 設定 `aria-hidden="true"` |
| Reduced motion | `prefers-reduced-motion: reduce` 時停止自動輪播 |
| Visibility handling | 分頁隱藏時清除 timer，重新可見時恢復排程 |

---

## 已實作資產清單

| 資產 | 目前位置 |
|------|----------|
| `assets/adict-app-icon.png` | Header |
| `assets/main-hero-light.webp` | Hero 主圖 source |
| `assets/main-hero-light.png` | Hero 主圖 fallback |
| `assets/adict-3-no-menu.webp` | Source feature 背景 source |
| `assets/adict-3-no-menu.png` | Source feature 背景 fallback |
| `assets/favorites-menu-3x.webp` | Favorites 浮動選單 source |
| `assets/favorites-menu-3x.png` | Favorites 浮動選單 fallback |
| `assets/dictionary-menu-3x.webp` | Dictionarys 浮動選單 source |
| `assets/dictionary-menu-3x.png` | Dictionarys 浮動選單 fallback |

---

## Section 2 初稿：Local Dictionary Rendering

> 狀態：設計中，尚未寫入 `index.html`。  
> 目標：接在 Source feature interaction 後面，說明本地詞典不是被壓平成搜尋結果，而是以原有結構與樣式被閱讀。

### 角色

前一段已經證明 aDict 可以在 Favorites、Youdao、StarDict、MDict 之間切換。Section 2 要把焦點縮到本地詞典：使用者帶進來的詞庫檔案，應該仍然像原本那本詞典。

### 建議主視覺

| 資產 | 用途 | 說明 |
|------|------|------|
| `assets/adict-3-mdict-lookup.webp` / `assets/adict-3-mdict-lookup.png` | 主手機圖 | 展示 `Art` / `OxfordA` 的 MDict 查詞結果，保留詞庫原本的 HTML/CSS 層級、顏色與排版 |
| `assets/adict-3-settings-pro.webp` / `assets/adict-3-settings-pro.png` | 可選輔助圖或浮動資訊卡 | 實際內容是 Dictionary Files 管理頁，可支撐 MDX、StarDict 檔案管理與 iCloud 同步開關 |

### 版面初稿

建議使用一個深色或低彩度背景段落，讓 MDict 查詞畫面的紅、橘、藍色內容自己成為視覺重點。

| 區域 | 初稿 |
|------|------|
| Left / visual | iPhone 截圖：`adict-3-mdict-lookup` |
| Right / copy | Eyebrow + H2 + body + 三個短 bullet |
| Optional floating card | `Dictionary Files`，列 `MDX` / `MDD` / `CSS` / `StarDict` |

### 英文文案初稿

| 層級 | 英文 |
|------|------|
| Eyebrow | `Local dictionaries, intact` |
| H2 | `Your dictionary should still look like your dictionary.` |
| Body | `Bring in the MDict and StarDict files you already trust. aDict keeps their structure, sidecar styling, and familiar reading rhythm, so a lookup feels like opening the source you chose, not a flattened copy of it.` |
| Bullet 1 | `MDX and MDD resources stay together.` |
| Bullet 2 | `CSS and dictionary layout are preserved where the source provides them.` |
| Bullet 3 | `Local files can be managed from the Dictionary Files screen.` |

### 繁體中文對照

| 層級 | 中文 |
|------|------|
| Eyebrow | `本地詞典，保持原貌` |
| H2 | `你的詞典，應該仍然像你的詞典。` |
| Body | `把你已經信任的 MDict 和 StarDict 檔案帶進來。aDict 保留它們的結構、同名樣式與熟悉的閱讀節奏，讓每一次查詞像打開你選的那本來源，而不是一份被壓平的文字副本。` |
| Bullet 1 | `MDX 與 MDD 資源放在一起使用。` |
| Bullet 2 | `來源提供 CSS 與版面時，盡量保留原本呈現。` |
| Bullet 3 | `本地檔案可從 Dictionary Files 畫面管理。` |

### 可替換標題

| 方向 | 英文 |
|------|------|
| 更短 | `Keep the dictionary, not just the text.` |
| 更產品化 | `Local dictionary files, rendered with care.` |
| 更情緒化 | `The dictionaries you collected can come with you.` |

### 不放進這段的內容

- 不在這段承諾查詞歷史、收藏或跨裝置同步；目前 Section 2 先專注於本地詞典呈現。
- 不展開 Pro 權益；若要提 Pro，應另做 FAQ 或 pricing-adjacent 區塊。
- 不把 `adict-3-settings-pro` 當成 Pro 權益頁使用；它目前應被視為 Dictionary Files 管理頁。

---

## 文檔維護原則

- 本文件以 `index.html` 為準。
- 新增或刪除頁面區塊時，才同步更新本文。
- 尚未寫入 `index.html` 的內容必須明確標示為設計中。
- 已實作區塊仍以 `index.html`、`source-feature.js` 和頁面實際引用資產為準。
