import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-brand-mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="site-container relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-xl rounded-3xl border border-brand-line bg-white p-7 text-center shadow-card sm:p-10">
          <span className="mx-auto grid size-12 place-items-center rounded-full bg-brand-teal-soft text-brand-teal-deep">
            <Compass className="size-5" aria-hidden="true" />
          </span>
          <p className="mt-6 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-brand-teal-deep">
            404 · Page not found
          </p>
          <h1 className="mt-3 text-balance font-display text-3xl font-medium leading-tight tracking-[-0.02em] text-brand-navy sm:text-4xl">
            This page isn’t in the course library.
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-brand-body">
            The link may be out of date, or the course or lesson may not exist
            yet. Everything that is available is listed in the course library.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/courses"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-full bg-brand-navy px-5 text-sm font-semibold text-white hover:bg-brand-teal-deep",
              )}
            >
              Browse all courses
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-brand-line bg-white px-5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal/40 hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
