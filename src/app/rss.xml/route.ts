import { getBlogPosts } from "@/data/blog";
import { buildBlogRssFeed } from "@/lib/rss";

export function GET() {
  return new Response(buildBlogRssFeed(getBlogPosts()), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
