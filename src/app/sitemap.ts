import type { MetadataRoute } from "next";

import { siteUrl as baseUrl } from "@/config/site";
import { getBlogPosts } from "@/data/blog";
import { courses } from "@/data/courses";
import { getPublicCourseSlugs } from "@/lib/content/published";
import { getPublicLessonSitemapEntries } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getPublicCourseSlugs();
  const lessonRoutes = getPublicLessonSitemapEntries(courses);

  // /login and /signup carry `noindex`, so listing them here would send
  // Google mixed signals.
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/courses`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/level-test`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/premium`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/courses/${slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Trust pages: required for an AdSense application and useful for a
  // site-quality review, so they are listed at low priority.
  const legalRoutes: MetadataRoute.Sitemap = [
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...legalRoutes,
    ...courseRoutes,
    ...lessonRoutes,
    ...blogRoutes,
  ];
}
