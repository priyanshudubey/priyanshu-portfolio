// Renders the app to static HTML and injects it into dist/index.html, so
// crawlers, link previews and no-JS visitors get the full page content.
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const template = `${root}dist/index.html`;
const ssrEntry = pathToFileURL(`${root}dist-ssr/entry-server.js`).href;

const { render } = await import(ssrEntry);
const html = await readFile(template, "utf8");

if (!html.includes("<!--app-html-->")) {
  throw new Error("prerender: <!--app-html--> placeholder not found in dist/index.html");
}

await writeFile(template, html.replace("<!--app-html-->", render()));
await rm(`${root}dist-ssr`, { recursive: true, force: true });
console.log("✓ prerendered dist/index.html");
