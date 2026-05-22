#!/usr/bin/env node
import { access, copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteUrl = "https://adict.ronniewong.cc";
const canonicalHub = "https://ronniewong.cc";
const subsiteId = "adict";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const defaultRonnieccRoot = path.resolve(repoRoot, "..", "RonnieCC");
const ronnieccRoot = path.resolve(process.env.RONNIECC_REPO || defaultRonnieccRoot);
const sourceSeedPath = path.resolve(
  process.env.RONNIECC_BLOG_SEED || path.join(ronnieccRoot, "content", "blog.seed.json")
);

const outputSeedPath = path.join(repoRoot, "content", "blog.seed.json");
const outputBlogDir = path.join(repoRoot, "blog");
const outputAssetDir = path.join(repoRoot, "content", "blog-assets");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}

function cleanHtml(html) {
  return html.replaceAll(/[ \t]+$/gm, "");
}

function normalizeSiteId(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replaceAll(/[\s_-]+/g, "");
}

function hasTarget(post) {
  const subsites = Array.isArray(post.subsites) ? post.subsites : [];
  const publishTargets = Array.isArray(post.publishTargets) ? post.publishTargets : [];
  return [...subsites, ...publishTargets].some((target) => normalizeSiteId(target) === subsiteId);
}

function postCanonical(post) {
  return post.canonical?.url || `${canonicalHub}/blog/${encodeURIComponent(post.slug)}/`;
}

function postUrl(post) {
  return `${siteUrl}/blog/${encodeURIComponent(post.slug)}/`;
}

function postDate(post) {
  if (post.createdTime) return new Date(post.createdTime).toISOString().slice(0, 10);
  return post.year || "";
}

function postTags(post) {
  return String(post.tag || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function richTextToPlain(segments = []) {
  return segments.map((segment) => segment.text || "").join("");
}

function blockPlainText(block) {
  return block?.plainText || richTextToPlain(block?.richText || []);
}

function collectBlockText(blocks = []) {
  const parts = [];
  const visit = (block) => {
    const text = blockPlainText(block).trim();
    if (text) parts.push(text);
    for (const child of block.children || []) visit(child);
  };
  for (const block of blocks) visit(block);
  return parts.join(" ");
}

function truncate(value, max = 165) {
  const text = String(value || "").replaceAll(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}...`;
}

function postDescription(post) {
  return truncate(collectBlockText(post.content?.blocks || []) || post.title);
}

function renderRichText(segments = []) {
  return segments
    .map((segment) => {
      let html = escapeHtml(segment.text || "").replaceAll("\n", "<br>");
      const annotations = segment.annotations || [];
      if (annotations.includes("c")) html = `<code>${html}</code>`;
      if (annotations.includes("b")) html = `<strong>${html}</strong>`;
      if (annotations.includes("i")) html = `<em>${html}</em>`;
      if (annotations.includes("s")) html = `<s>${html}</s>`;
      if (segment.href) html = `<a href="${escapeAttr(segment.href)}" target="_blank" rel="noreferrer">${html}</a>`;
      return html;
    })
    .join("");
}

function renderChildren(block, rootPath) {
  if (!block.children?.length) return "";
  return `<div class="blog-block-children">${renderBlocks(block.children, rootPath)}</div>`;
}

function assetUrl(assetPath, rootPath) {
  return `${rootPath}${assetPath}`;
}

function renderMedia(block, rootPath) {
  const caption = renderRichText(block.caption || []);
  if (block.assetPath) {
    const alt = blockPlainText(block) || richTextToPlain(block.caption || []) || "Blog image";
    return `
      <figure class="blog-media">
        <img src="${escapeAttr(assetUrl(block.assetPath, rootPath))}" alt="${escapeAttr(alt)}" loading="lazy">
        ${caption ? `<figcaption>${caption}</figcaption>` : ""}
      </figure>
    `;
  }

  return caption ? `<figure class="blog-media-fallback"><figcaption>${caption}</figcaption></figure>` : "";
}

function tableColumns(block) {
  if (Array.isArray(block.tableColumns) && block.tableColumns.length) return block.tableColumns;

  const columns = new Set();
  for (const row of block.children || []) {
    for (const column of Object.keys(row.tableCells || {})) columns.add(column);
  }
  return [...columns];
}

function renderTableRow(row, columns, cellTag, rowHeader = false) {
  const cells = columns
    .map((column, index) => {
      const tag = rowHeader && index === 0 ? "th" : cellTag;
      const scope = tag === "th" ? ` scope="${cellTag === "th" ? "col" : "row"}"` : "";
      return `<${tag}${scope}>${renderRichText(row.tableCells?.[column] || [])}</${tag}>`;
    })
    .join("");
  return `<tr>${cells}</tr>`;
}

function renderTable(block) {
  const rows = (block.children || []).filter((child) => child.type === "table_row");
  const columns = tableColumns(block);
  if (!rows.length || !columns.length) return "";

  const [firstRow, ...bodyRows] = rows;
  const hasHeader = block.tableHasColumnHeader === true;
  const header = hasHeader ? `<thead>${renderTableRow(firstRow, columns, "th")}</thead>` : "";
  const bodySource = hasHeader ? bodyRows : rows;
  const body = bodySource.map((row) => renderTableRow(row, columns, "td", block.tableHasRowHeader === true)).join("");

  return `
    <div class="blog-table-wrap">
      <table class="blog-table">
        ${header}
        <tbody>${body}</tbody>
      </table>
    </div>
  `;
}

function renderBlock(block, rootPath) {
  const text = renderRichText(block.richText || []);
  const children = renderChildren(block, rootPath);

  switch (block.type) {
    case "header":
      return text ? `<h2>${text}</h2>${children}` : children;
    case "sub_header":
      return text ? `<h3>${text}</h3>${children}` : children;
    case "sub_sub_header":
      return text ? `<h4>${text}</h4>${children}` : children;
    case "quote":
      return text ? `<blockquote>${text}</blockquote>${children}` : children;
    case "code":
      return `<pre><code>${escapeHtml(block.plainText || "")}</code></pre>${children}`;
    case "divider":
      return "<hr>";
    case "image":
    case "video":
    case "file":
    case "external_object_instance":
      return renderMedia(block, rootPath);
    case "table":
      return renderTable(block);
    case "table_row":
    case "page":
    case "collection_view_page":
      return "";
    case "text":
    default:
      return text ? `<p>${text}</p>${children}` : children;
  }
}

function renderListRun(blocks, tag, rootPath) {
  const items = blocks.map((block) => `<li>${renderRichText(block.richText || [])}${renderChildren(block, rootPath)}</li>`).join("");
  return `<${tag}>${items}</${tag}>`;
}

function renderBlocks(blocks = [], rootPath = "") {
  const rendered = [];

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];
    if (block.type === "bulleted_list" || block.type === "numbered_list") {
      const type = block.type;
      const run = [];
      while (blocks[index]?.type === type) {
        run.push(blocks[index]);
        index += 1;
      }
      index -= 1;
      rendered.push(renderListRun(run, type === "bulleted_list" ? "ul" : "ol", rootPath));
      continue;
    }

    rendered.push(renderBlock(block, rootPath));
  }

  return rendered.join("\n");
}

function nav(rootPath, current = "") {
  const links = [
    ["Home", rootPath],
    ["Blog", `${rootPath}blog/`],
    ["Changelog", `${rootPath}changelog.html`],
    ["Support", `${rootPath}support.html`],
    ["Privacy", `${rootPath}privacy.html`],
  ];

  return links
    .map(([label, href]) => `<a href="${escapeAttr(href)}"${current === label ? ' aria-current="page"' : ""}>${label}</a>`)
    .join("\n        ");
}

function footer(rootPath) {
  return `
    <footer class="footer">
      <p>aDict</p>
      <nav aria-label="Footer links">
        ${nav(rootPath)}
      </nav>
    </footer>
  `;
}

function pageShell({ title, description, canonical, rootPath, current, main, type = "website", ogUrl = canonical, jsonLd = [] }) {
  return `<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeAttr(description)}">
    <link rel="canonical" href="${escapeAttr(canonical)}">
    <link rel="icon" href="${escapeAttr(`${rootPath}favicon.svg`)}" type="image/svg+xml">
    <meta name="author" content="Ronnie Wong">
    <meta name="robots" content="index, follow">
    <meta property="og:site_name" content="aDict">
    <meta property="og:type" content="${escapeAttr(type)}">
    <meta property="og:locale" content="zh_TW">
    <meta property="og:title" content="${escapeAttr(title)}">
    <meta property="og:description" content="${escapeAttr(description)}">
    <meta property="og:url" content="${escapeAttr(ogUrl)}">
    <meta property="og:image" content="${siteUrl}/assets/og-image.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeAttr(title)}">
    <meta name="twitter:description" content="${escapeAttr(description)}">
    <meta name="twitter:image" content="${siteUrl}/assets/og-image.png">
    ${jsonLd
      .map(
        (entry) => `<script type="application/ld+json">
${JSON.stringify(entry, null, 2)}
    </script>`
      )
      .join("\n    ")}
    <link rel="stylesheet" href="${escapeAttr(`${rootPath}styles.css`)}">
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="${escapeAttr(rootPath)}" aria-label="aDict home">aDict</a>
      <nav class="nav" aria-label="Primary">
        ${nav(rootPath, current)}
      </nav>
    </header>
${main}
${footer(rootPath)}
  </body>
</html>
`;
}

function renderBlogIndex(posts) {
  const description =
    "寫給那些停在詞語邊上的時刻：關於 aDict、閱讀，以及工具如何安靜地陪伴理解。";
  const cards = posts.length
    ? posts
        .map((post) => {
          const tags = postTags(post).slice(0, 4);
          return `
          <article class="blog-card">
            <a href="${escapeAttr(`${encodeURIComponent(post.slug)}/`)}">
              <span class="blog-card-date">${escapeHtml(postDate(post) || "Writing")}</span>
              <h2>${escapeHtml(post.title)}</h2>
              <p>${escapeHtml(postDescription(post))}</p>
              ${tags.length ? `<span class="blog-card-tags">${tags.map(escapeHtml).join(" / ")}</span>` : ""}
            </a>
          </article>
        `;
        })
        .join("")
    : `
        <div class="blog-empty">
          <p>No aDict Blog posts are selected in RonnieCC yet. Choose <code>aDict</code> in the Notion <code>子站點</code> field, then run <code>node scripts/sync-blog.mjs</code>.</p>
        </div>
      `;

  return pageShell({
    title: "aDict Blog - Product and Dictionary Notes",
    description,
    canonical: `${siteUrl}/blog/`,
    rootPath: "../",
    current: "Blog",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "aDict Blog",
        url: `${siteUrl}/blog/`,
        description,
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          url: postUrl(post),
          isBasedOn: postCanonical(post),
        })),
      },
    ],
    main: `
    <main class="page blog-index-page">
      <header class="changelog-hero">
        <p class="eyebrow">Writing</p>
        <h1>aDict Blog</h1>
        <p>寫給那些停在詞語邊上的時刻：關於 aDict、閱讀，以及工具如何安靜地陪伴理解。</p>
      </header>
      <section class="blog-grid" aria-label="aDict Blog posts">
        ${cards}
      </section>
    </main>`,
  });
}

function renderBlogArticle(post) {
  const description = postDescription(post);
  const body = post.content?.blocks?.length
    ? renderBlocks(post.content.blocks, "../../")
    : "<p>This mirrored post does not include article blocks yet.</p>";
  const date = postDate(post);

  return pageShell({
    title: `${post.title} - aDict Blog`,
    description,
    canonical: postCanonical(post),
    ogUrl: postUrl(post),
    rootPath: "../../",
    current: "Blog",
    type: "article",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description,
        url: postUrl(post),
        mainEntityOfPage: postCanonical(post),
        datePublished: date || undefined,
        dateModified: post.lastEditedTime ? new Date(post.lastEditedTime).toISOString() : undefined,
        author: {
          "@type": "Person",
          name: "Ronnie Wong",
          url: canonicalHub,
        },
        isBasedOn: postCanonical(post),
        keywords: postTags(post),
      },
    ],
    main: `
    <main class="page blog-article-page">
      <article class="blog-article">
        <header class="changelog-hero blog-article-hero">
          <p class="eyebrow">Writing</p>
          <h1>${escapeHtml(post.title)}</h1>
          <p>${escapeHtml(post.tag || "aDict")}${date ? ` · ${escapeHtml(date)}` : ""}</p>
        </header>
        <div class="changelog-prose blog-prose">
${body}
        </div>
        <footer class="changelog-source blog-source">
          <a href="${escapeAttr(postCanonical(post))}">Canonical RonnieCC article</a>
          ${post.notionUrl ? `<a href="${escapeAttr(post.notionUrl)}" target="_blank" rel="noreferrer">Original Notion note</a>` : ""}
        </footer>
      </article>
    </main>`,
  });
}

function renderLegacyRedirect(post, legacySlug) {
  const target = postUrl(post);
  return `<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, follow">
    <meta http-equiv="refresh" content="0; url=${escapeAttr(target)}">
    <link rel="canonical" href="${escapeAttr(postCanonical(post))}">
    <title>${escapeHtml(post.title)} - aDict Blog</title>
    <script>location.replace(${JSON.stringify(target)});</script>
  </head>
  <body>
    <p><a href="${escapeAttr(target)}">${escapeHtml(post.title || legacySlug)}</a></p>
  </body>
</html>
`;
}

function renderRedirect() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=blog/">
    <link rel="canonical" href="${siteUrl}/blog/">
    <title>aDict Blog</title>
  </head>
  <body>
    <p><a href="blog/">aDict Blog</a></p>
  </body>
</html>
`;
}

function renderSitemap(posts) {
  const urls = [`${siteUrl}/`, `${siteUrl}/blog/`, `${siteUrl}/changelog.html`, `${siteUrl}/support.html`, `${siteUrl}/privacy.html`, ...posts.map(postUrl)];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeHtml(url)}</loc>
  </url>`
  )
  .join("\n")}
</urlset>
`;
}

async function pathExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function collectAssetPaths(blocks = [], assets = new Set()) {
  for (const block of blocks) {
    if (block.assetPath) assets.add(block.assetPath);
    collectAssetPaths(block.children || [], assets);
  }
  return assets;
}

async function copyPostAssets(posts) {
  const assets = new Set();
  for (const post of posts) collectAssetPaths(post.content?.blocks || [], assets);

  for (const assetPath of assets) {
    const source = path.join(ronnieccRoot, assetPath);
    const destination = path.join(repoRoot, assetPath);
    if (!(await pathExists(source))) {
      console.warn(`Missing source asset: ${path.relative(ronnieccRoot, source)}`);
      continue;
    }

    await mkdir(path.dirname(destination), { recursive: true });
    await copyFile(source, destination);
  }

  return assets.size;
}

async function main() {
  const raw = await readFile(sourceSeedPath, "utf8");
  const sourceData = JSON.parse(raw);
  const sourcePosts = Array.isArray(sourceData.posts) ? sourceData.posts : [];
  const posts = sourcePosts
    .filter((post) => post.public !== false && hasTarget(post))
    .sort((a, b) => String(b.createdTime || b.year || "").localeCompare(String(a.createdTime || a.year || "")));

  await rm(outputBlogDir, { recursive: true, force: true });
  await rm(outputAssetDir, { recursive: true, force: true });
  await mkdir(outputBlogDir, { recursive: true });
  await mkdir(path.dirname(outputSeedPath), { recursive: true });
  await mkdir(path.join(repoRoot, "sitemap"), { recursive: true });

  const copiedAssets = await copyPostAssets(posts);
  const syncedAt = new Date().toISOString();
  const output = {
    source: {
      repo: "RonnieCC",
      path: path.relative(ronnieccRoot, sourceSeedPath),
      syncedAt,
      subsite: subsiteId,
    },
    posts,
  };

  await writeFile(outputSeedPath, `${JSON.stringify(output, null, 2)}\n`);
  await writeFile(path.join(outputBlogDir, "index.html"), cleanHtml(renderBlogIndex(posts)));
  await writeFile(path.join(repoRoot, "blog.html"), cleanHtml(renderRedirect()));
  await writeFile(path.join(repoRoot, "sitemap", "adict.xml"), renderSitemap(posts));

  for (const post of posts) {
    const postDir = path.join(outputBlogDir, post.slug);
    await mkdir(postDir, { recursive: true });
    await writeFile(path.join(postDir, "index.html"), cleanHtml(renderBlogArticle(post)));

    const legacySlugs = Array.isArray(post.legacySlugs) ? post.legacySlugs : [];
    for (const legacySlug of legacySlugs) {
      if (!legacySlug || legacySlug === post.slug) continue;
      const legacyDir = path.join(outputBlogDir, legacySlug);
      await mkdir(legacyDir, { recursive: true });
      await writeFile(path.join(legacyDir, "index.html"), cleanHtml(renderLegacyRedirect(post, legacySlug)));
    }
  }

  console.log(`Read ${sourcePosts.length} RonnieCC posts from ${path.relative(repoRoot, sourceSeedPath)}`);
  console.log(`Selected ${posts.length} posts for ${subsiteId}`);
  console.log(`Copied ${copiedAssets} blog assets`);
  console.log(`Updated ${path.relative(repoRoot, outputSeedPath)}`);
  console.log(`Updated blog/ and sitemap/adict.xml`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
