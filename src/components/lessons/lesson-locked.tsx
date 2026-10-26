import Link from "next/link";
import { ArrowRight, LockKeyhole, ShieldCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  formatMembershipDate,
  membershipSummary,
} from "@/lib/premium/display";
import type { PremiumAccess } from "@/lib/premium/types";
import { cn } from "@/lib/utils";

export function LessonLocked({
  access,
  courseSlug,
  lessonSlug,
  levelLabel,
}: {
  access: PremiumAccess;
  courseSlug: string;
  lessonSlug: string;
  levelLabel: string;
}) {
  const summary = membershipSummary(access);
  const returnPath = `/courses/${courseSlug}/lessons/${lessonSlug}`;
  const loginHref = `/login?next=${encodeURIComponent(returnPath)}`;
  const periodEnd = formatMembershipDate(
    access.membership?.currentPeriodEnd ?? null,
  );

  return (
    <section
      aria-labelledby="premium-locked-heading"
      className="overflow-hidden rounded-3xl border border-brand-line bg-white shadow-sm"
    >
      <div className="border-b border-brand-line bg-brand-mist/70 px-5 py-4 sm:px-7">
        <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brand-teal-deep">
          <LockKeyhole className="size-3.5" aria-hidden="true" />
          {levelLabel} Premium lesson
        </p>
      </div>

      <div className="px-5 py-8 sm:px-7 sm:py-10">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-navy text-white">
          <ShieldCheck className="size-5" aria-hidden="true" />
        </span>
        <h2
          id="premium-locked-heading"
          className="mt-5 text-balance font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-brand-navy sm:text-[2rem]"
        >
          This lesson is part of Premium.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-brand-body sm:text-[0.95rem]">
          A1–B2 lessons stay free. C1 and C2 lesson content opens only for
          signed-in students with an active Premium membership. Previewing the
          title and summary here does not grant access.
        </p>

        <div className="mt-6 rounded-2xl border border-brand-line bg-brand-mist/50 p-4 sm:p-5">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-brand-body">
            Your membership
          </p>
          <p className="mt-1.5 text-sm font-bold text-brand-navy">
            {summary.label}
          </p>
          <p className="mt-1 text-sm leading-6 text-brand-body">
            {summary.description}
          </p>
          {periodEnd ? (
            <p className="mt-2 text-xs leading-5 text-brand-body">
              Access runs until {periodEnd} (UTC).
            </p>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          <Link
            href="/premium"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 rounded-full bg-brand-navy px-5 text-sm font-semibold text-white hover:bg-brand-teal-deep",
            )}
          >
            View Premium plans
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>

          {access.signedIn ? null : (
            <Link
              href={loginHref}
              className="inline-flex h-11 items-center justify-center rounded-full border border-brand-line bg-white px-5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal/40 hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              Log in with a Premium account
            </Link>
          )}

          <Link
            href={`/courses/${courseSlug}`}
            className="inline-flex h-11 items-center justify-center rounded-full border border-brand-line bg-white px-5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal/40 hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            Back to course outline
          </Link>
        </div>

        <p className="mt-5 text-xs leading-5 text-brand-body">
          If you recently completed a payment, access begins only after the
          payment provider confirms it on the server.
        </p>
      </div>
    </section>
  );
}
