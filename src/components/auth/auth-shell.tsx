import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";

import type { ReactNode } from "react";

type AuthShellProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  points: string[];
  children: ReactNode;
};

export function AuthShell({
  eyebrow,
  title,
  description,
  points,
  children,
}: AuthShellProps) {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70 bg-brand-mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 size-[26rem] rounded-full bg-brand-teal/[0.06] blur-3xl"
      />

      <div className="site-container relative py-10 sm:py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,29rem)] lg:gap-16">
          <div className="max-w-xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-brand-body transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-4 focus-visible:ring-offset-brand-mist"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to home
            </Link>

            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-3 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.17em] text-brand-navy shadow-sm">
              <span className="size-1.5 rounded-full bg-brand-teal" />
              {eyebrow}
            </p>

            <h1 className="mt-5 text-balance font-display text-[2.4rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-navy sm:text-5xl">
              {title}
            </h1>

            <p className="mt-5 text-pretty text-base leading-7 text-brand-body sm:text-lg sm:leading-8">
              {description}
            </p>

            <ul className="mt-7 space-y-3">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm leading-6 text-brand-body"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-teal-soft text-brand-teal-deep">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-brand-line bg-white/75 p-4">
              <ShieldCheck
                className="mt-0.5 size-5 shrink-0 text-brand-teal-deep"
                aria-hidden="true"
              />
              <p className="text-sm leading-6 text-brand-body">
                <span className="font-semibold text-brand-navy">
                  Your sign-in stays secure.
                </span>{" "}
                Passwords are handled by Supabase Auth and are never stored by
                SpeakUp.
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-brand-line bg-white p-5 shadow-card sm:p-7">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AuthCardSkeleton({ label }: { label: string }) {
  return (
    <div aria-busy="true" className="space-y-4">
      <div className="h-6 w-40 animate-pulse rounded-full bg-brand-mist" />
      <div className="h-4 w-64 max-w-full animate-pulse rounded-full bg-brand-mist" />
      <div className="h-11 animate-pulse rounded-xl bg-brand-mist" />
      <div className="h-11 animate-pulse rounded-xl bg-brand-mist" />
      <div className="h-11 animate-pulse rounded-full bg-brand-mist" />
      <p className="sr-only">{label}</p>
    </div>
  );
}
