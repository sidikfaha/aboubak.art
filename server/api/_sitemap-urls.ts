import { serverQueryContent } from "#content/server";
import { asSitemapUrl, defineSitemapEventHandler } from "#sitemap";

export default defineSitemapEventHandler(async () => {
  const articles = await serverQueryContent("blog")
    .where({ draft: { $ne: true } })
    .sort({ date: -1 })
    .find();

  return articles.map((article) => {
    const path = article.locale === "fr"
      ? `/blog/${article.slug}`
      : `/${article.locale}/blog/${article.slug}`;

    return asSitemapUrl({
      loc: path,
      lastmod: article.updatedAt || article.date,
      changefreq: "weekly",
      priority: 0.8,
      images: article.image ? [{ loc: article.image }] : undefined,
    });
  });
});
