import type { MetadataRoute } from "next";

import { getBlogPosts } from "@/data/blog";
import { getPublicCourseSlugs } from "@/lib/content/published";
import { siteUrl as baseUrl } from "@/config/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getPublicCourseSlugs();

  // /login and /signup carry `noindex`, so listing them here would send
  // Google mixed signals.
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/courses`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/premium`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/courses/${slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...blogRoutes];
}
