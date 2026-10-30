import type { Metadata } from "next";

import { brand } from "@/config/brand";
import { absoluteUrl, siteUrl } from "@/config/site";
import type { BlogPost } from "@/data/blog/types";

/**
 * Declares the single URL search engines should index for a page. Paths are
 * root-relative because `metadataBase` in the root layout makes them absolute.
 */
export function pageCanonical(path: string): Pick<Metadata, "alternates"> {
  return {
    alternates: {
      canonical: path,
    },
  };
}

type BlogPostingSchema = {
  "@context": "https://schema.org";
  "@type": "BlogPosting";
  "@id": string;
  mainEntityOfPage: { "@type": "WebPage"; "@id": string };
  headline: string;
  description: string;
  inLanguage: string;
  datePublished: string;
  dateModified: string;
  author: { "@type": "Organization"; name: string; url: string };
  publisher: {
    "@type": "Organization";
    name: string;
    url: string;
    logo: { "@type": "ImageObject"; url: string };
  };
};

export function blogPostingSchema(post: BlogPost): BlogPostingSchema {
  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.description,
    inLanguage: "en",
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: brand.name,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: siteUrl,
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") },
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
