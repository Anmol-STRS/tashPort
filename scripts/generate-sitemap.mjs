import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const baseUrl =
  process.env.SITEMAP_BASE_URL ?? "https://tashneet.example.com";

const pages = [""];
const today = new Date().toISOString().split("T")[0];

const urlset = pages
  .map(
    (path) => `<url>
  <loc>${`${baseUrl}${path}`}</loc>
  <lastmod>${today}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>
`;

const outputPath = resolve("public", "sitemap.xml");

writeFileSync(outputPath, xml);

console.log(`Sitemap generated at ${outputPath}`);
