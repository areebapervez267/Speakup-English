import type { MetadataRoute } from "next";

import { siteUrl as baseUrl } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/dashboard", "/account", "/auth"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
