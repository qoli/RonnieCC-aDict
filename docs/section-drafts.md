# aDict Landing Page 已實作區塊對照

> 建立日期：2026-04-28  
> 更新日期：2026-04-28  
> 依據：`index.html`  
> 用途：記錄目前首頁已實作的區塊、文案、資產與互動狀態。

---

## 目前頁面結構

`index.html` 目前實作以下內容：

1. Header
2. Hero
3. Source title
4. Source feature interaction
5. Section 2: Local Dictionary Rendering
6. Footer

頁面目前沒有實作 FAQ、testimonial 或 Pro 權益區塊。

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

CTA 在 Hero 與 Footer 都有實作。

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

## Section 2：Local Dictionary Rendering

> 狀態：已寫入 `index.html`。
> 目標：接在 Source feature interaction 後面，用純 typography 的功能介紹說明：你帶進 aDict 的詞典仍然是你的詞典，aDict 只是把它放到日常閱讀裡。

### 角色

前一段已經證明 aDict 可以在 Favorites、Youdao、StarDict、MDict 之間切換。Section 2 要把焦點縮到使用者真正關心的本地詞典工作流：那些多年收集、整理、信任的詞典檔案，不需要被轉成 App 專用格式；它們可以作為檔案留下來，被查找、被呈現、被收藏與回到。

### 研究依據摘要

- Notion `aDict 3.0 重寫方案`：Dictionary Files 走 local documents / iCloud Documents；MDict 文件保持 RAW input，不預轉入 SQLite；MDictCLI 已覆蓋 lookup、suggest、resources、extract-resource。
- Notion `在 aDict 中使用 MDict 詞庫`：MDict 使用 `.mdx`，同名 CSS 以 `OxfordA.mdx.css` 這類形式放在一起；可從 folder 管理。
- Notion `aDict 3.0：從使用者角度看這次重寫`：使用者不應被要求把詞庫轉成 App 專用格式；MDict / StarDict 已進入 3.0 路線；收藏與歷史要更像真正的使用者資料。
- 源碼 `MDictProvider`：MDict 支援 lookup、suggest、offline、jump lookup、sidecar resources；lookup 會把 `.mdx.css` 放入 HTML render model。
- 源碼 `StarDictProvider`：StarDict 支援 lookup、suggest、offline、jump lookup、resource sidecar。
- 源碼 `DictionaryLibraryManagementView`：Dictionary Files 可在 Local / iCloud Documents 間切換，並提供 `Open folder` 管理入口。
- 源碼 `LookupHistoryStore` / `FavoriteWordsStore`：歷史與收藏以 term + dictionaryID 記錄，回到某一本詞典裡的某個詞，而不是把詞典內容複製成另一份資料。

### 版面方向

這一段不放手機截圖，也不使用浮動圖片卡。用 typography 本身呈現「詞典結構」：大標題像主詞條，副文像釋義，功能點像詞典條目中的用法、資源與來源說明。

建議使用寬版留白，讓文字成為主視覺。背景可以保持頁面原本的淺色系，或用一個很淡的 full-width band 區分段落，但不要做卡片式 section。

### Typography layout

| 區域 | 實作 |
|------|------|
| Top line | 小型紅字 anchor label：`# Local dictionaries, intact` |
| Main line | 大字 H2，佔 2-3 行，作為整段視覺中心 |
| Definition line | 一段短 body，控制在 2-3 行內 |
| Feature row | 三到四段使用者敘事，使用短標題 + 一句完整場景 |

### 功能敘事

功能點不寫成工程 capability list，而是寫成使用者在閱讀和查詞時會感受到的連續敘事。

| 敘事節點 | 英文 |
|------|----------|
| `Bring the dictionaries you already chose.` | `Drop in your MDX and MDD pairs, sidecar CSS, or StarDict dictionaries. aDict reads them as files, not as imports into a closed library.` |
| `Read them in their own shape.` | `Definitions can keep the hierarchy, links, sidecar styling, and resources that made the original dictionary worth keeping.` |
| `Miss the exact word, stay in the flow.` | `Suggestions and close-match lookup help you land on the right entry without turning every typo into a dead end.` |
| `Come back to the same source later.` | `History and favorites remember the word with its dictionary, so returning to a saved lookup means returning to the source you trusted.` |

### 功能敘事繁中對照

| 敘事節點 | 中文 |
|------|----------|
| `帶進你已經選好的詞典` | `把你原本就在保存的 MDX / MDD 組合、同名 CSS，或 StarDict 詞典放進來。aDict 讀的是檔案本身，不是把它們匯入一個封閉詞庫。` |
| `用它原本的樣子閱讀` | `詞條可以保留原本的層級、連結、同名樣式與資源；那本詞典之所以值得留下的閱讀感，不必被壓平成純文字。` |
| `拼得不準，也不中斷` | `候選詞和近似匹配會把你帶向更接近的詞條，不讓每一次拼字偏差都變成死路。` |
| `之後回到同一本來源` | `歷史與收藏記住的不只是某個單詞，也包含它來自哪一本詞典；回到收藏，就是回到你當時信任的來源。` |

### 英文文案

| 層級 | 英文 |
|------|------|
| Eyebrow | `Local dictionaries, intact` |
| H2 | `The dictionaries you collected still have a place to live.` |
| Body | `Bring the files you already trust into aDict, then read them in the flow of your day. Their structure, resources, and familiar rhythm stay close, while history and favorites remember where each word came from.` |

### 繁體中文對照

| 層級 | 中文 |
|------|------|
| Eyebrow | `本地詞典，保持原貌` |
| H2 | `你收集的詞典，仍然有地方好好放著。` |
| Body | `把你已經信任的檔案帶進 aDict，然後在每天閱讀的節奏裡使用它們。結構、資源與熟悉的閱讀感留在身邊；歷史與收藏也記得每個詞來自哪一本來源。` |

### 視覺語法備註

- 不使用手機截圖、產品 mockup 或圖片卡。
- H2 應該是這段的主視覺，不要被功能點搶走。
- Eyebrow 使用小尺寸紅色 anchor label，不作為正文段落處理。
- 功能點用連續敘事排列，不做一般 card grid，也不要寫成規格表。
- 每個功能點都要從使用者語境出發，再自然帶出功能；避免用 provider、protocol、SQLite、render model 這類工程詞做可見文案。

### 可替換標題

| 方向 | 英文 |
|------|------|
| 更短 | `Keep the dictionary, not just the lookup.` |
| 更產品化 | `Your local dictionaries, ready for daily reading.` |
| 更情緒化 | `The dictionaries you collected can come with you.` |

### 不放進這段的內容

- 不承諾歷史與收藏的跨裝置同步；可說歷史與收藏記住詞與來源，但不要說已跨設備同步。
- 不展開 Pro 權益；若要提 Pro，應另做 FAQ 或 pricing-adjacent 區塊。
- 不把 `adict-3-settings-pro` 當成 Pro 權益頁使用；它目前應被視為 Dictionary Files 管理頁。
- 不放 `adict-3-mdict-lookup` 或 `adict-3-settings-pro` 圖片；Section 2 走純 typography 方向。
- 不把 `CLI`、`provider`、`SQLite`、`CloudKit` 等工程細節放進使用者可見文案；它們只作為內部依據。

---

## Footer

首頁 Footer 使用 `landing-footer`，比 support / privacy 頁的簡版 footer 更完整。

| 元素 | 內容 |
|------|------|
| Logo | `assets/adict-app-icon.png` + `aDict` |
| Tagline | `Your dictionaries belong on every page you read.` |
| CTA 1 | `App Store` → `https://apps.apple.com/in/app/adict-dictionary-lookup/id1483402597` |
| CTA 2 | `TestFlight` → `https://testflight.apple.com/join/dCGMvyw9` |
| Nav 1 | `Support` → `support.html` |
| Nav 2 | `Privacy` → `privacy.html` |

設計語法：頂線分隔、大字品牌、低彩度 tagline 使用 400 字重；四個 footer 連結使用同一個 grid 保持等距；`Support` / `Privacy` 作為次要連結使用更高透明度；不使用卡片或大型 CTA 區塊。

---

## 文檔維護原則

- 本文件以 `index.html` 為準。
- 新增或刪除頁面區塊時，才同步更新本文。
- 尚未寫入 `index.html` 的內容必須明確標示為設計中。
- 已實作區塊仍以 `index.html`、`source-feature.js` 和頁面實際引用資產為準。
