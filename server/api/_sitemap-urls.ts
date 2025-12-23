import { asSitemapUrl, defineSitemapEventHandler } from "#imports";
import { promises as fs } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

export default defineSitemapEventHandler(async () => {
  const contentDir = join(process.cwd(), "content", "blog");
  const urls = [];

  try {
    // Read French articles
    const frDir = join(contentDir, "fr");
    const frFiles = await fs.readdir(frDir).catch(() => []);
    for (const file of frFiles) {
      if (file.endsWith(".md")) {
        const content = await fs.readFile(join(frDir, file), "utf-8");
        const { data } = matter(content);
        if (!data.draft) {
          urls.push(
            asSitemapUrl({
              loc: `/blog/${data.slug}`,
              lastmod: data.updatedAt || data.date,
              changefreq: "weekly",
              priority: 0.8,
              images: data.image ? [{ loc: data.image }] : undefined,
            })
          );
        }
      }
    }

    // Read English articles
    const enDir = join(contentDir, "en");
    const enFiles = await fs.readdir(enDir).catch(() => []);
    for (const file of enFiles) {
      if (file.endsWith(".md")) {
        const content = await fs.readFile(join(enDir, file), "utf-8");
        const { data } = matter(content);
        if (!data.draft) {
          urls.push(
            asSitemapUrl({
              loc: `/en/blog/${data.slug}`,
              lastmod: data.updatedAt || data.date,
              changefreq: "weekly",
              priority: 0.8,
              images: data.image ? [{ loc: data.image }] : undefined,
            })
          );
        }
      }
    }
  } catch (error) {
    console.error("Error reading blog articles for sitemap:", error);
  }

  return urls;
});
