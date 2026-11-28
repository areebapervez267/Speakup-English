import type { Metadata, MetadataRoute } from "next";

import { brand } from "@/config/brand";
import { absoluteUrl, siteUrl } from "@/config/site";
import type { BlogPost } from "@/data/blog/types";
import type { Course } from "@/data/courses";
import { getLevel, getSkill } from "@/data/curriculum";
import { getLessonEntries } from "@/data/lessons";

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

/** Keeps administrator-authored descriptions useful in search snippets. */
export function normaliseSeoDescription(description: string): string {
  const clean = description.replace(/\s+/g, " ").trim() || brand.description;
  const maxLength = 170;

  if (clean.length <= maxLength) {
    return clean;
  }

  const shortened = clean.slice(0, maxLength - 1);
  const lastSpace = shortened.lastIndexOf(" ");
  const withoutTrailingPunctuation = (
    lastSpace > 100 ? shortened.slice(0, lastSpace) : shortened
  ).replace(/[\s,;:.!?-]+$/, "");

  return `${withoutTrailingPunctuation}…`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  feedPath?: string;
};

const socialImageUrl = absoluteUrl("/opengraph-image");
const socialImageAlt = `${brand.name} — CEFR English courses A1–C2`;

/** One consistent canonical, Open Graph and Twitter card for public pages. */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  feedPath,
}: PageMetadataOptions): Metadata {
  const metaDescription = normaliseSeoDescription(description);

  return {
    title,
    description: metaDescription,
    alternates: {
      canonical: path,
      ...(feedPath
        ? { types: { "application/rss+xml": absoluteUrl(feedPath) } }
        : {}),
    },
    openGraph: {
      title,
      description: metaDescription,
      siteName: brand.name,
      locale: "en_US",
      url: absoluteUrl(path),
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          alt: socialImageAlt,
        },
      ],
      ...(type === "article"
        ? { type: "article" as const, publishedTime }
        : { type: "website" as const }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: [socialImageUrl],
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

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: brand.name,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.svg"),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: brand.name,
    url: siteUrl,
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function itemListSchema(catalog: readonly Course[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "English courses A1–C2",
    itemListElement: catalog.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: course.title,
      url: absoluteUrl(`/courses/${course.slug}`),
    })),
  };
}

export function courseSchema(course: Course) {
  const level = getLevel(course.level);
  const skill = getSkill(course.skill);

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": absoluteUrl(`/courses/${course.slug}/#course`),
    name: course.title,
    description: normaliseSeoDescription(course.summary),
    url: absoluteUrl(`/courses/${course.slug}`),
    inLanguage: "en",
    educationalLevel: level.label,
    teaches: skill.label,
    isAccessibleForFree: !course.premium,
    provider: { "@id": `${siteUrl}/#organization` },
  };
}

export function learningResourceSchema({
  title,
  description,
  courseTitle,
  courseSlug,
  lessonSlug,
  level,
  minutes,
  premium,
}: {
  title: string;
  description: string;
  courseTitle: string;
  courseSlug: string;
  lessonSlug: string;
  level: Course["level"];
  minutes: number;
  premium: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "@id": absoluteUrl(
      `/courses/${courseSlug}/lessons/${lessonSlug}/#lesson`,
    ),
    name: title,
    description: normaliseSeoDescription(description),
    url: absoluteUrl(`/courses/${courseSlug}/lessons/${lessonSlug}`),
    learningResourceType: "Lesson",
    educationalLevel: getLevel(level).label,
    isPartOf: {
      "@type": "Course",
      name: courseTitle,
      url: absoluteUrl(`/courses/${courseSlug}`),
    },
    timeRequired: `PT${minutes}M`,
    inLanguage: "en",
    isAccessibleForFree: !premium,
    provider: { "@id": `${siteUrl}/#organization` },
  };
}

export function faqPageSchema(
  faqs: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type PublicLessonParam = { slug: string; lessonSlug: string };

export function getPublicLessonSitemapEntries(
  catalog: readonly Course[],
  lessonParams?: readonly PublicLessonParam[],
): MetadataRoute.Sitemap {
  // Premium lesson bodies are access-gated, so only free-course lessons are
  // submitted. Pass resolved public params to include database-published free
  // lessons as well as the authored fallback lessons.
  const publicSlugs = new Set(
    catalog.filter((course) => !course.premium).map((course) => course.slug),
  );
  const params =
    lessonParams ??
    catalog.flatMap((course) =>
      getLessonEntries(course.slug).map(({ lesson }) => ({
        slug: course.slug,
        lessonSlug: lesson.slug,
      })),
    );
  const uniqueParams = new Map(
    params.map((param) => [
      `${param.slug}/${param.lessonSlug}`,
      param,
    ]),
  );

  return [...uniqueParams.values()]
    .filter((param) => publicSlugs.has(param.slug))
    .map((param) => ({
      url: absoluteUrl(
        `/courses/${param.slug}/lessons/${param.lessonSlug}`,
      ),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
}
