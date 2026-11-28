import { brand } from "@/config/brand";
import { absoluteUrl } from "@/config/site";
import type { BlogPost } from "@/data/blog/types";

const xmlEntities: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

export function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => xmlEntities[character]);
}

function formatRssDate(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00Z`).toUTCString();
}

/** Builds a deterministic RSS 2.0 feed from the same articles shown on /blog. */
export function buildBlogRssFeed(posts: readonly BlogPost[]): string {
  const sortedPosts = [...posts].sort(
    (first, second) =>
      second.date.localeCompare(first.date) ||
      first.slug.localeCompare(second.slug),
  );
  const feedUrl = absoluteUrl("/rss.xml");
  const lastBuildDate = sortedPosts[0]
    ? formatRssDate(sortedPosts[0].date)
    : new Date(0).toUTCString();

  const items = sortedPosts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${formatRssDate(post.date)}</pubDate>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${brand.name} Blog`)}</title>
    <link>${escapeXml(absoluteUrl("/blog"))}</link>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(brand.description)}</description>
    <language>en</language>
    <category>English learning</category>
    <generator>${escapeXml(brand.name)}</generator>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`;
}
