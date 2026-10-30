import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";

import { BlogPostCard } from "@/components/blog/blog-post-card";
import { JsonLd } from "@/components/seo/json-ld";
import { LessonContent } from "@/components/lessons/lesson-blocks";
import { SectionHeading } from "@/components/section-heading";
import { getBlogPost, getBlogPostSlugs, getBlogPosts } from "@/data/blog";
import { resolveCourseDetail } from "@/lib/content/published";
import {
  blogPostingSchema,
  breadcrumbSchema,
  pageCanonical,
} from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
    },
    ...pageCanonical(`/blog/${post.slug}`),
  };
}

function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const related = post.relatedCourseSlug
    ? await resolveCourseDetail(post.relatedCourseSlug)
    : null;
  const morePosts = getBlogPosts().filter((item) => item.slug !== slug);

  return (
    <div className="site-container py-12 lg:py-16">
      <JsonLd
        data={[
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-brand-body transition-colors hover:bg-brand-mist hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All articles
        </Link>

        <header className="mt-8">
          <div className="flex items-center gap-3 text-sm font-medium text-brand-body">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span
              aria-hidden="true"
              className="size-1 rounded-full bg-brand-line"
            />
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-4" aria-hidden="true" />
              {post.minutes} min read
            </span>
          </div>
          <h1 className="mt-4 text-balance font-display text-4xl font-medium leading-tight tracking-[-0.02em] text-brand-navy sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-brand-body">
            {post.description}
          </p>
        </header>

        <div className="mt-12">
          <LessonContent blocks={post.blocks} />
        </div>

        {related ? (
          <aside className="mt-14 rounded-3xl border border-brand-line bg-brand-mist p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-teal-deep">
              Put it into practice
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-[-0.02em] text-brand-navy">
              {related.detail.course.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-brand-body">
              {related.detail.course.summary}
            </p>
            <Link
              href={`/courses/${related.detail.course.slug}`}
              className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-brand-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              Start this course
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </aside>
        ) : null}
      </div>

      <div className="mx-auto mt-20 max-w-5xl">
        <SectionHeading
          eyebrow="Keep reading"
          title="More articles"
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {morePosts.slice(0, 3).map((item) => (
            <BlogPostCard key={item.slug} post={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
