import { asSitemapUrl, defineSitemapEventHandler } from "#imports";

export default defineSitemapEventHandler(async (event) => {
  const urls = [];

  try {
    // Query the content database using the server API
    const baseUrl = getRequestURL(event).origin;
    
    // Fetch all blog posts from the content API
    const response = await $fetch<{ result: Array<{
      locale: string;
      slug: string;
      date: string;
      updatedAt?: string;
      image?: string;
      draft?: boolean;
    }> }>(`${baseUrl}/api/query`, {
      method: "POST",
      body: {
        collection: "blog",
        where: [{ field: "draft", operator: "!=", value: true }],
      },
    }).catch(() => null);

    if (response?.result) {
      for (const article of response.result) {
        const path = article.locale === "fr"
          ? `/blog/${article.slug}`
          : `/${article.locale}/blog/${article.slug}`;

        urls.push(
          asSitemapUrl({
            loc: path,
            lastmod: article.updatedAt || article.date,
            changefreq: "weekly",
            priority: 0.8,
            images: article.image ? [{ loc: article.image }] : undefined,
          })
        );
      }
    }
  } catch (error) {
    console.error("Error fetching blog articles for sitemap:", error);
  }

  return urls;
});
