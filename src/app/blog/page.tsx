import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlogPostCard } from "@/components/blog/blog-post-card";
import { SectionHeading } from "@/components/section-heading";
import { getBlogPosts } from "@/data/blog";
import { pageCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog — English learning tips and guides",
  description:
    "Practical, honest advice for learning English: speaking practice at home, daily routines, vocabulary habits and common mistakes to avoid.",
  ...pageCanonical("/blog"),
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="site-container py-16 lg:py-24">
      <SectionHeading
        eyebrow="Blog"
        title="Learn how to learn English"
        description="Short, practical guides for Urdu-speaking learners — how to practise speaking alone, build vocabulary that stays, and fix the mistakes that make you sound unnatural."
      />

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
