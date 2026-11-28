import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";

import { BlogPostCard } from "@/components/blog/blog-post-card";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { getBlogPosts } from "@/data/blog";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "English learning blog — practical guides for Urdu speakers",
  description:
    "Practical English guides for Urdu and Hindi speakers: grammar rules, short vowel sounds, speaking practice, vocabulary habits and common mistakes.",
  path: "/blog",
  feedPath: "/rss.xml",
});

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="site-container py-16 lg:py-24">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          as="h1"
          eyebrow="Blog"
          title="Learn how to learn English"
          description="Short, practical guides for Urdu-speaking learners — how to practise speaking alone, build vocabulary that stays, and fix the mistakes that make you sound unnatural."
        />
        <Link
          href="/rss.xml"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal/50 hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
        >
          <Rss className="size-4 text-brand-teal-deep" aria-hidden="true" />
          RSS feed
        </Link>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-brand-line bg-brand-mist px-6 py-10 text-center sm:px-10">
        <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-brand-navy sm:text-3xl">
          Ready to put it into practice?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-brand-body">
          Reading tips helps, but progress comes from lessons. Start a free A1
          course and practise every skill from day one.
        </p>
        <Link
          href="/courses"
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-brand-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
        >
          Browse free courses
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
