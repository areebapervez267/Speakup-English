import Link from "next/link";
import { CircleAlert, RefreshCw, UserRound } from "lucide-react";

import { SignOutForm } from "@/components/auth/sign-out-form";

export function DashboardSkeleton() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading your dashboard"
      className="mt-8 space-y-8"
    >
      <div aria-hidden="true" className="space-y-8">
        <div className="h-64 animate-pulse rounded-[1.75rem] bg-brand-navy/10 motion-reduce:animate-none" />

        <div>
          <div className="h-5 w-48 animate-pulse rounded-full bg-brand-line motion-reduce:animate-none" />
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-32 animate-pulse rounded-2xl border border-brand-line bg-white/70 motion-reduce:animate-none"
              />
            ))}
          </div>
        </div>

        <div>
          <div className="h-5 w-36 animate-pulse rounded-full bg-brand-line motion-reduce:animate-none" />
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-72 animate-pulse rounded-3xl border border-brand-line bg-white/70 motion-reduce:animate-none"
              />
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="h-80 animate-pulse rounded-3xl border border-brand-line bg-white/70 motion-reduce:animate-none" />
          <div className="h-80 animate-pulse rounded-3xl border border-brand-line bg-white/70 motion-reduce:animate-none" />
        </div>
      </div>
      <span className="sr-only">Loading your saved learning data</span>
    </div>
  );
}

export function DashboardProblem({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <section
      role="alert"
      className="mt-8 rounded-3xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6"
    >
      <div className="flex gap-3">
        <CircleAlert
          className="mt-0.5 size-5 shrink-0 text-amber-700"
          aria-hidden="true"
        />
        <div className="min-w-0">
          <h2 className="text-lg font-bold text-brand-navy">{title}</h2>
          <p className="mt-1.5 text-sm leading-6 text-amber-950">{message}</p>
          <p className="mt-1 text-sm leading-6 text-amber-900">
            Your account is not affected. You can retry, review your account
            settings, or sign out safely.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <a
              href="/dashboard"
              className="inline-flex min-h-10 items-center gap-2 rounded-full bg-brand-navy px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              <RefreshCw className="size-4" aria-hidden="true" />
              Try again
            </a>
            <Link
              href="/account"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-brand-line bg-white px-4 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              <UserRound
                className="size-4 text-brand-teal-deep"
                aria-hidden="true"
              />
              Your account
            </Link>
            <SignOutForm variant="button" />
          </div>
        </div>
      </div>
    </section>
  );
}
