# aDict Landing Page SEO Roadmap

This document records the SEO guidance source and the concrete follow-up work for
`https://adict.ronniewong.cc/`, so the next pass does not depend on chat history.

## Reference Guide

Use the local SEO guide at:

```text
/Volumes/Data/Github/claude-seo-1.9.6
```

Primary files used for this roadmap:

- `/Volumes/Data/Github/claude-seo-1.9.6/skills/seo/SKILL.md`
- `/Volumes/Data/Github/claude-seo-1.9.6/skills/seo-schema/SKILL.md`
- `/Volumes/Data/Github/claude-seo-1.9.6/skills/seo-sxo/SKILL.md`
- `/Volumes/Data/Github/claude-seo-1.9.6/skills/seo-cluster/SKILL.md`
- `/Volumes/Data/Github/claude-seo-1.9.6/skills/seo/references/quality-gates.md`
- `/Volumes/Data/Github/claude-seo-1.9.6/skills/seo/references/schema-types.md`
- `/Volumes/Data/Github/claude-seo-1.9.6/skills/seo/references/eeat-framework.md`
- `/Volumes/Data/Github/claude-seo-1.9.6/skills/seo/references/cwv-thresholds.md`

## Current Baseline

Completed or already in good shape:

- Homepage has a unique title and meta description.
- Homepage has canonical, `hreflang="x-default"`, robots meta, Open Graph, and
  Twitter card tags.
- Homepage has `SoftwareApplication` JSON-LD.
- `robots.txt` points to the working Cloudflare Worker sitemap:
  `https://ronniewong-sitemaps.ronnie.workers.dev/adict.xml`
- The worker sitemap has been validated in Google Search Console and discovered
  three submitted URLs.
- Hero image is already served as WebP and is small enough for the current page.
- The primary OG image has been regenerated and is acceptable for social previews.

Known caveats:

- GitHub Pages-hosted sitemap submissions under `.cc` previously stayed stuck in
  Search Console. Keep the worker sitemap as the canonical submission path unless
  a new verified fix is found.
- Do not submit `https://sitemaps.ronniewong.cc/...` as the primary GSC sitemap
  path until the `.cc` custom-domain behavior is proven reliable.

## Priority 1: Search Result Quality

The homepage title and description are within the guide's target range, but
support and privacy pages are still too thin for search-result presentation.

Recommended changes:

- Rewrite `support.html` title to describe the support intent, not just
  `Support · aDict`.
- Rewrite `support.html` description to 120-160 characters and mention App Store,
  TestFlight, local dictionary files, or contact path.
- Rewrite `privacy.html` title to describe the privacy promise.
- Rewrite `privacy.html` description to 120-160 characters and mention local
  dictionary files, website analytics, and user data handling.

Success check:

- Each page has a unique title between roughly 30 and 60 characters.
- Each page has a unique description between roughly 120 and 160 characters.
- The snippets read like Google search results, not internal page labels.

## Priority 2: Structured Data

The homepage has `SoftwareApplication` schema, but it can be more complete.

Recommended homepage schema additions:

- `image`: absolute URL for the app or OG image.
- `offers`: truthful App Store availability or free download metadata.
- `applicationSubCategory`: dictionary, reading, or reference utility wording.
- `dateModified`: update when the landing page content changes materially.
- `softwareVersion`: only if the current public version is known and maintained.

Recommended page-level schema:

- Add `WebSite` or `WebPage` JSON-LD for the homepage.
- Add `ContactPage` JSON-LD to `support.html`.
- Add `WebPage` JSON-LD to `privacy.html`.

Rules:

- Use JSON-LD only.
- Use absolute URLs.
- Do not add fake reviews, fake ratings, or placeholder values.
- Do not add new FAQ schema for Google rich-result purposes; the guide treats FAQ
  schema as restricted to government and healthcare authority sites.

## Priority 3: Product Detail Content

The current landing page is visually strong but still under-explains important
search intent. Add direct product-detail copy without turning the homepage into a
long article.

Questions the homepage should answer explicitly:

- Who is aDict for?
- Which platforms are supported: iPhone, iPad, Mac?
- Which dictionary formats are supported: MDX, MDD, StarDict, sidecar CSS?
- What does Youdao provide compared with local dictionaries?
- How are history and favorites tied to the selected dictionary source?
- What happens to user-owned local dictionary files?

Recommended section:

- Add a compact product details section after the current local dictionary section
  or before the footer.
- Use concrete headings and bullets that include real terms people search for:
  `MDict`, `MDX`, `MDD`, `StarDict`, `Youdao`, `iPhone`, `iPad`, `Mac`.
- Keep the page product-focused. Avoid generic dictionary-app marketing copy.

## Priority 4: E-E-A-T and Trust Signals

The site already has support and privacy pages, but trust signals can be clearer.

Recommended changes:

- Add a small maker/about signal that links Ronnie Wong to `https://ronniewong.cc/`.
- Make the support contact path more explicit.
- On the privacy page, state clearly that local dictionary files are user-owned
  local files and are not read by the website.
- Add a visible "last updated" date to support/privacy if those pages become more
  policy-like.
- Keep public references to the App Store, TestFlight, product notes, and RonnieCC.

## Priority 5: Topic Cluster Expansion

Do this after the worker sitemap path remains stable.

Potential spoke pages:

- `/mdict.html`: MDict, MDX, and MDD dictionary app for iPhone, iPad, and Mac.
- `/stardict.html`: StarDict dictionary support in aDict.
- `/local-dictionaries.html`: How local dictionary files work in aDict.
- `/youdao.html`: Youdao lookup alongside local dictionaries.

Internal linking rules:

- Homepage links to every spoke page with descriptive anchors.
- Every spoke links back to the homepage.
- Spokes link to each other only when the reader intent is adjacent.
- Add each new page to the worker-managed sitemap.

## Priority 6: SXO Research Before Larger Copy Changes

Before creating new pages or rewriting the homepage around a single keyword, run
SERP backwards analysis for:

- `MDict iPhone app`
- `MDX MDD dictionary app`
- `StarDict iOS app`
- `dictionary app for local dictionary files`

What to record:

- Dominant page type in results: App Store page, product page, listicle, guide,
  GitHub/project page, or forum thread.
- Whether Google rewards short product pages or longer instructional pages.
- Common wording used in top-ranking snippets.
- Whether image/video/app-store features appear.

Use the result to decide whether the next asset should be a product page, a
feature page, or a guide-style spoke.

## Priority 7: Performance and Image Hygiene

Current observations:

- `assets/main-hero-light.webp` is about 80 KB and should not be the first target.
- `assets/og-image.png` is larger, but social preview quality matters more than
  squeezing it aggressively.
- External App Store and TestFlight badge images may affect layout stability or
  availability.

Recommended changes:

- Give external badge images stable width and height if not already constrained.
- Consider local copies of badges if third-party loading becomes unstable.
- Keep WebP generation in sync by using `scripts/optimize-images.sh`.
- If doing a performance pass, measure INP, LCP, and CLS. Do not use FID as a
  success metric.

## Do Not Do Yet

- Do not replace the worker sitemap with GitHub Pages sitemap submissions unless
  Search Console proves the `.cc` path is reliable.
- Do not add broad blog-like content just to increase word count.
- Do not add fake aggregate ratings or reviews.
- Do not add FAQ schema for commercial rich-result expectations.
- Do not create multiple new SEO pages without updating the worker sitemap.

## Suggested Next Implementation Batch

Small, safe batch:

1. Rewrite support/privacy title and meta description.
2. Add `ContactPage` schema to support.
3. Add `WebPage` schema to privacy.
4. Enrich homepage `SoftwareApplication` schema with truthful image/offers fields.
5. Add one compact homepage product-detail section.

Larger follow-up batch:

1. Run SERP backwards analysis for the target keywords.
2. Decide the first spoke page from SERP evidence.
3. Create the first spoke page.
4. Add it to the worker sitemap and deploy via the sitemap repo workflow once that
   workflow exists.
