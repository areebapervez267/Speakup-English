import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

import type { BlogPost } from "@/data/blog/types";

function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white transition-[border-color,box-shadow] duration-300 hover:border-brand-teal/45 hover:shadow-card">
      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-teal"
      >
        <span className="sr-only">Read {post.title}</span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs font-medium text-brand-body">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true" className="size-1 rounded-full bg-brand-line" />
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="size-3.5" aria-hidden="true" />
            {post.minutes} min read
          </span>
        </div>

        <h2 className="mt-3 font-display text-xl font-medium leading-snug tracking-[-0.02em] text-brand-navy">
          {post.title}
        </h2>
        <p className="mt-2.5 line-clamp-3 text-sm leading-6 text-brand-body">
          {post.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-brand-teal-deep">
          Read article
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </article>
  );
}
