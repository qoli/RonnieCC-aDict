#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const NOTION_API = "https://www.notion.so/api/v3";
const pageId = "98075976818745c9bc3657e1088fdf7b";
const sourceUrl = "https://www.notion.so/qoli/aDict-98075976818745c9bc3657e1088fdf7b?source=copy_link";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const contentPath = path.join(repoRoot, "content", "changelog.seed.json");
const htmlPath = path.join(repoRoot, "changelog.html");

function compactId(id) {
  return String(id || "").replaceAll("-", "").slice(-32);
}

function idToUuid(id) {
  const raw = compactId(id);
  if (raw.length !== 32) return "";
  return `${raw.slice(0, 8)}-${raw.slice(8, 12)}-${raw.slice(12, 16)}-${raw.slice(16, 20)}-${raw.slice(20)}`;
}

function recordValue(record) {
  return record?.value?.value || record?.value || {};
}

async function fetchNotionData(resource, body, notionToken) {
  const response = await fetch(`${NOTION_API}/${resource}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(notionToken ? { cookie: `token_v2=${notionToken}` } : {}),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Notion ${resource} failed with ${response.status}`);
  }

  return response.json();
}

async function fetchPageById(id, notionToken) {
  return fetchNotionData(
    "loadPageChunk",
    {
      pageId: idToUuid(id),
      limit: 100,
      cursor: { stack: [] },
      chunkNumber: 0,
      verticalColumns: false,
    },
    notionToken
  );
}

async function fetchBlocksById(ids, notionToken) {
  if (!ids.length) return {};
  const payload = await fetchNotionData(
    "syncRecordValues",
    {
      requests: ids.map((id) => ({
        table: "block",
        id: idToUuid(id),
        version: -1,
      })),
    },
    notionToken
  );
  return payload.recordMap?.block || {};
}

function mergeBlocks(target, source) {
  for (const [id, record] of Object.entries(source || {})) {
    const value = recordValue(record);
    if (value.id) target[idToUuid(value.id)] = record;
  }
}

function childIdsFor(record) {
  const value = recordValue(record);
  return Array.isArray(value.content) ? value.content : [];
}

async function fetchPageWithChildren(id, notionToken) {
  const page = await fetchPageById(id, notionToken);
  const blockMap = {};
  mergeBlocks(blockMap, page.recordMap?.block || {});

  const seen = new Set(Object.keys(blockMap).map(compactId));
  const queue = [];
  for (const record of Object.values(blockMap)) {
    queue.push(...childIdsFor(record));
  }

  while (queue.length) {
    const batch = [];
    while (queue.length && batch.length < 50) {
      const childId = queue.shift();
      const compact = compactId(childId);
      if (!compact || seen.has(compact)) continue;
      seen.add(compact);
      batch.push(childId);
    }

    const fetched = await fetchBlocksById(batch, notionToken);
    mergeBlocks(blockMap, fetched);
    for (const record of Object.values(fetched)) {
      queue.push(...childIdsFor(record));
    }
  }

  return blockMap;
}

function richTextSegments(value) {
  if (!Array.isArray(value)) return [];

  return value
    .map((part) => {
      const annotations = Array.isArray(part?.[1]) ? part[1] : [];
      const linkMention = annotations.find((annotation) => annotation?.[0] === "lm")?.[1] || {};
      const link = annotations.find((annotation) => annotation?.[0] === "a")?.[1] || linkMention.href || "";
      const text = String(part?.[0] || "");
      return {
        text: text === "‣" && linkMention.title ? String(linkMention.title) : text,
        annotations: annotations.map((annotation) => annotation?.[0]).filter(Boolean),
        href: link,
      };
    })
    .filter((segment) => segment.text);
}

function blockRichText(block, property = "title") {
  return richTextSegments(block.properties?.[property]);
}

function plainText(segments) {
  return segments.map((segment) => segment.text).join("");
}

function hasContent(block) {
  return block.plainText || block.richText.length || block.children.length || ["divider"].includes(block.type);
}

function normalizeBlock(id, blockMap) {
  const value = recordValue(blockMap[idToUuid(id)] || blockMap[id] || {});
  const type = value.type || "unsupported";
  const richText = blockRichText(value);
  const block = {
    id: compactId(value.id || id),
    type,
    richText,
    plainText: plainText(richText),
    children: [],
  };

  if (Array.isArray(value.content)) {
    block.children = value.content
      .map((childId) => normalizeBlock(childId, blockMap))
      .filter(hasContent);
  }

  return block;
}

function normalizeChangelog(blockMap) {
  const page = recordValue(blockMap[idToUuid(pageId)]);
  const blocks = (page.content || [])
    .map((id) => normalizeBlock(id, blockMap))
    .filter(hasContent)
    .filter((block) => !["page", "column", "column_list", "button"].includes(block.type));

  return {
    source: {
      id: pageId,
      url: sourceUrl,
      title: plainText(blockRichText(page)) || "aDict multi-platform changelog",
      syncedAt: new Date().toISOString(),
    },
    blocks,
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}

function renderRichText(segments = []) {
  return segments
    .map((segment) => {
      let html = escapeHtml(segment.text);
      if (segment.annotations?.includes("b")) html = `<strong>${html}</strong>`;
      if (segment.annotations?.includes("i")) html = `<em>${html}</em>`;
      if (segment.annotations?.includes("c")) html = `<code>${html}</code>`;
      if (segment.href) html = `<a href="${escapeAttr(segment.href)}">${html}</a>`;
      return html;
    })
    .join("");
}

function isReleaseHeading(block) {
  const text = block.plainText.trim();
  return /^Build\s+\d+/i.test(text) || /^\d+(?:\.\d+){0,2}(?:\s+Build\b|\s*$)/.test(text);
}

function renderChildren(block) {
  return block.children?.length ? renderBlocks(block.children) : "";
}

function renderListRun(blocks, tag) {
  const items = blocks
    .map((block) => `<li>${renderRichText(block.richText)}${renderChildren(block)}</li>`)
    .join("");
  return `<${tag}>${items}</${tag}>`;
}

function renderBlock(block) {
  const text = renderRichText(block.richText);
  const children = renderChildren(block);

  switch (block.type) {
    case "header":
      return text ? `<h2>${text}</h2>${children}` : children;
    case "sub_header":
      return text ? `<h3>${text}</h3>${children}` : children;
    case "sub_sub_header":
      return text ? `${isReleaseHeading(block) ? `<h3>${text}</h3>` : `<h4>${text}</h4>`}${children}` : children;
    case "quote":
      return text ? `<blockquote>${text}</blockquote>${children}` : children;
    case "divider":
      return "<hr>";
    case "text":
      return text ? `${isReleaseHeading(block) ? `<h3>${text}</h3>` : `<p>${text}</p>`}${children}` : children;
    default:
      return text ? `<p>${text}</p>${children}` : children;
  }
}

function renderBlocks(blocks = []) {
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
      rendered.push(renderListRun(run, type === "numbered_list" ? "ol" : "ul"));
      continue;
    }

    rendered.push(renderBlock(block));
  }

  return rendered.join("\n");
}

function renderPage(data) {
  const body = renderBlocks(data.blocks);

  return `<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>aDict 更新日誌 - Release Notes and TestFlight Updates</title>
    <meta name="description" content="Read the aDict multi-platform changelog on the aDict landing page, including App Store releases, TestFlight builds, and recent dictionary app fixes.">
    <link rel="canonical" href="https://adict.ronniewong.cc/changelog.html">
    <link rel="icon" href="favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="/">aDict</a>
      <nav class="nav" aria-label="Primary">
        <a href="/">Home</a>
        <a href="blog/">Blog</a>
        <a href="support.html">Support</a>
        <a href="privacy.html">Privacy</a>
      </nav>
    </header>
    <main class="page changelog-page">
      <article class="changelog-article">
        <header class="changelog-hero">
          <p class="eyebrow">Release notes</p>
          <h1>${escapeHtml(data.source.title)}</h1>
        </header>
        <div class="changelog-prose">
${body}
        </div>
        <footer class="changelog-source">
          <a href="${escapeAttr(data.source.url)}">Original Notion changelog</a>
        </footer>
      </article>
    </main>
    <footer class="footer">
      <p>aDict</p>
      <nav aria-label="Footer links">
        <a href="/">Home</a>
        <a href="blog/">Blog</a>
        <a href="support.html">Support</a>
        <a href="privacy.html">Privacy</a>
      </nav>
    </footer>
  </body>
</html>
`;
}

async function main() {
  const notionToken = process.env.NOTION_TOKEN || process.env.NOTION_TOKEN_V2;
  const blockMap = await fetchPageWithChildren(pageId, notionToken);
  const data = normalizeChangelog(blockMap);

  await mkdir(path.dirname(contentPath), { recursive: true });
  await writeFile(contentPath, `${JSON.stringify(data, null, 2)}\n`);
  await writeFile(htmlPath, renderPage(data));

  console.log(`Synced ${data.blocks.length} top-level blocks from Notion.`);
  console.log(`Updated ${path.relative(repoRoot, contentPath)}`);
  console.log(`Updated ${path.relative(repoRoot, htmlPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
