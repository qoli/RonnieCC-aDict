import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { renderPage } from "./sync-changelog.mjs";
import socialImages from "../content/social-images.json" with { type: "json" };

test("regenerating changelog content preserves its own landscape social cover", () => {
  const html = renderPage({ source: { title: "aDict 更新日誌", url: "https://www.notion.so/example" }, blocks: [] });
  const image = socialImages["/changelog.html"];
  assert.ok(html.includes(`property="og:image" content="${image.url}"`));
  assert.ok(html.includes(`name="twitter:image" content="${image.url}"`));
  assert.match(html, /property="og:image:width" content="1200"/);
  assert.match(html, /property="og:image:height" content="630"/);
});

test("fixed pages declare distinct covers and Blog articles preserve the canonical image", async () => {
  const urls = new Set();
  for (const [route, image] of Object.entries(socialImages)) {
    const file = new URL(`..${route}${route.endsWith("/") ? "index.html" : ""}`, import.meta.url);
    const html = await readFile(file, "utf8");
    assert.ok(html.includes(`property="og:image" content="${image.url}"`), route);
    assert.ok(html.includes(`name="twitter:image" content="${image.url}"`), route);
    urls.add(image.url);
  }
  assert.equal(urls.size, 5);
  const seed = JSON.parse(await readFile(new URL("../content/blog.seed.json", import.meta.url), "utf8"));
  for (const post of seed.posts) {
    const html = await readFile(new URL(`../blog/${post.slug}/index.html`, import.meta.url), "utf8");
    assert.ok(html.includes(`property="og:image" content="${post.socialImage.url}"`), post.slug);
  }
});
