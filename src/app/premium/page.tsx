import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CreditCard,
  Info,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

import { PremiumCheckoutButton } from "@/components/premium/premium-checkout-button";
import { buttonVariants } from "@/components/ui/button";
import { freeCourseCount, premiumCourseCount } from "@/data/courses";
import { getPremiumAccess } from "@/lib/premium/access";
import { getPaymentsDisplay } from "@/lib/premium/config";
import {
  formatMembershipDate,
  membershipSummary,
  type MembershipTone,
} from "@/lib/premium/display";
import type { PremiumAccess } from "@/lib/premium/types";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Premium membership",
  description:
    "Premium opens the complete C1 and C2 English library. A1–B2 courses stay free. Check your membership status or see how C1/C2 access works.",
};

// Membership status and checkout availability depend on the current visitor.
export const instant = false;

type PremiumPageProps = {
  searchParams: Promise<{ checkout?: string | string[] }>;
};

const toneStyles: Record<MembershipTone, string> = {
  active: "bg-brand-teal-soft text-brand-teal-deep",
  pending: "bg-amber-50 text-amber-800",
  inactive: "bg-brand-mist text-brand-navy",
  unavailable: "bg-amber-50 text-amber-800",
  guest: "bg-brand-mist text-brand-navy",
  unconfigured: "bg-brand-mist text-brand-body",
};

function checkoutNotice(value: string | undefined, access: PremiumAccess) {
  if (value === "success") {
    return access.active
      ? {
          tone: "success" as const,
          title: "Your Premium membership is confirmed",
          text: "The payment provider confirmed your subscription. Every C1 and C2 lesson is now open on your account.",
        }
      : {
          tone: "pending" as const,
          title: "Checkout finished — waiting for confirmation",
          text: "Access is granted only after the payment provider confirms the subscription with our server. This can take a moment; refresh this page later. A success page alone never unlocks lessons.",
        };
  }

  if (value === "cancelled") {
    return {
      tone: "neutral" as const,
      title: "Checkout was cancelled",
      text: "No payment was taken. You can restart checkout whenever you are ready.",
    };
  }

  return null;
}

export default async function PremiumPage({ searchParams }: PremiumPageProps) {
  const [access, params] = await Promise.all([
    getPremiumAccess(),
    searchParams,
  ]);
  const display = getPaymentsDisplay();
  const summary = membershipSummary(access);
  const membership = access.membership;
  const active = access.active;

  const checkoutParam = Array.isArray(params.checkout)
    ? params.checkout[0]
    : params.checkout;
  const notice = checkoutNotice(checkoutParam, access);

  const activated = formatMembershipDate(membership?.activatedAt ?? null);
  const periodEnd = formatMembershipDate(membership?.currentPeriodEnd ?? null);
  const cancelled = formatMembershipDate(membership?.cancelledAt ?? null);

  const loginHref = "/login?next=/premium";

  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-line/70 bg-brand-mist">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid-faint opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
        />
        <div className="site-container relative py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-3 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.17em] text-brand-navy shadow-sm">
              <LockKeyhole className="size-3 text-brand-teal-deep" aria-hidden="true" />
              Premium membership
            </p>
            <h1 className="mt-5 text-balance font-display text-[2.4rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-navy sm:text-5xl lg:text-[3.4rem]">
              Go further with{" "}
              <span className="italic text-brand-teal-deep">C1 and C2.</span>
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-brand-body sm:text-lg sm:leading-8">
              A1–B2 courses stay free forever. An active Premium membership adds
              the complete advanced library — {premiumCourseCount} C1 and C2
              courses across all seven skills.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-brand-body">
              <span className="rounded-full border border-brand-line bg-white px-3 py-1.5 shadow-sm">
                {freeCourseCount} free A1–B2 courses
              </span>
              <span className="rounded-full border border-brand-line bg-white px-3 py-1.5 shadow-sm">
                {premiumCourseCount} Premium C1–C2 courses
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="site-container py-12 lg:py-16">
          {notice ? (
            <div
              role="status"
              className={cn(
                "mb-8 flex gap-3 rounded-2xl border p-4 text-sm leading-6 sm:p-5",
                notice.tone === "success"
                  ? "border-brand-teal/30 bg-brand-teal-soft/50 text-brand-teal-deep"
                  : notice.tone === "pending"
                    ? "border-amber-200 bg-amber-50/70 text-amber-950"
                    : "border-brand-line bg-brand-mist/60 text-brand-ink",
              )}
            >
              {notice.tone === "success" ? (
                <BadgeCheck className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              ) : (
                <Info className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              )}
              <div>
                <p className="font-bold">{notice.title}</p>
                <p className="mt-1">{notice.text}</p>
              </div>
            </div>
          ) : null}

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
            <article className="relative overflow-hidden rounded-[1.75rem] bg-brand-navy p-6 text-white shadow-lift sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-dot-light opacity-25"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-brand-teal/10 blur-3xl"
              />

              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.17em] text-brand-teal">
                      One membership
                    </p>
                    <h2 className="mt-2 font-display text-3xl leading-tight text-white sm:text-4xl">
                      Premium
                    </h2>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-brand-teal">
                    <LockKeyhole className="size-2.5" aria-hidden="true" />
                    C1 · C2
                  </span>
                </div>

                <p className="mt-5 font-display text-[2.6rem] leading-none text-white sm:text-5xl">
                  {display.priceLabel ?? "Price to be announced"}
                </p>
                <p className="mt-2 text-sm text-white/55">
                  {display.priceLabel
                    ? "Charged through the payment provider's hosted checkout."
                    : "The price will be published here before checkout opens. Nothing is charged today."}
                </p>

                <div className="my-6 border-t border-white/10" />

                <ul className="space-y-3">
                  {[
                    `Every C1 and C2 course (${premiumCourseCount} in total)`,
                    "Advanced tracks across all seven skills",
                    "Full lessons, practice and end-of-lesson quizzes",
                    "Saved progress and quiz history on your account",
                    "Everything in the free A1–B2 library",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-6 text-white/85"
                    >
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-white/10 text-brand-teal">
                        <Check className="size-2.5" aria-hidden="true" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  {active ? (
                    <div className="rounded-2xl border border-brand-teal/30 bg-white/5 p-4">
                      <p className="flex items-center gap-2 text-sm font-semibold text-brand-teal">
                        <BadgeCheck className="size-4" aria-hidden="true" />
                        Included with your active membership
                      </p>
                      <Link
                        href="/courses?level=c1"
                        className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-teal px-5 text-sm font-semibold text-brand-navy transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                      >
                        Browse C1 and C2 courses
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  ) : display.checkoutReady && access.signedIn ? (
                    <PremiumCheckoutButton />
                  ) : display.checkoutReady && !access.signedIn ? (
                    <div>
                      <Link
                        href={loginHref}
                        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-teal px-5 text-sm font-semibold text-brand-navy transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                      >
                        Log in to continue
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                      <p className="mt-3 text-xs leading-5 text-white/45">
                        Checkout is linked to your student account so access can
                        be granted securely.
                      </p>
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                      <p className="flex items-center gap-2 text-sm font-semibold text-white">
                        <CreditCard className="size-4 text-brand-teal" aria-hidden="true" />
                        Checkout is not open yet
                      </p>
                      <p className="mt-2 text-xs leading-5 text-white/55">
                        Online payments are not enabled in this deployment.
                        Nothing can be charged here, and all{" "}
                        {freeCourseCount} A1–B2 courses remain available without
                        an account payment.
                      </p>
                    </div>
                  )}
                </div>

                <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-white/40">
                  <ShieldCheck className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                  SpeakUp never receives or stores card numbers, CVVs or bank
                  credentials.
                </p>
              </div>
            </article>

            <aside
              aria-labelledby="membership-status-heading"
              className="rounded-[1.75rem] border border-brand-line bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <h2
                  id="membership-status-heading"
                  className="text-lg font-bold tracking-[-0.01em] text-brand-navy"
                >
                  Your membership
                </h2>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em]",
                    toneStyles[summary.tone],
                  )}
                >
                  {summary.label}
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-brand-body">
                {summary.description}
              </p>

              {membership ? (
                <dl className="mt-4 divide-y divide-brand-line border-y border-brand-line text-sm">
                  <div className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="text-brand-body">Plan</dt>
                    <dd className="font-semibold text-brand-navy">
                      Premium · C1–C2
                    </dd>
                  </div>
                  {activated ? (
                    <div className="flex items-center justify-between gap-4 py-2.5">
                      <dt className="text-brand-body">Activated</dt>
                      <dd className="font-semibold text-brand-navy">{activated}</dd>
                    </div>
                  ) : null}
                  {periodEnd ? (
                    <div className="flex items-center justify-between gap-4 py-2.5">
                      <dt className="text-brand-body">
                        {active ? "Access until" : "Period ended"}
                      </dt>
                      <dd className="font-semibold text-brand-navy">{periodEnd}</dd>
                    </div>
                  ) : null}
                  {cancelled ? (
                    <div className="flex items-center justify-between gap-4 py-2.5">
                      <dt className="text-brand-body">Cancelled</dt>
                      <dd className="font-semibold text-brand-navy">{cancelled}</dd>
                    </div>
                  ) : null}
                  <div className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="text-brand-body">Access</dt>
                    <dd className="font-semibold text-brand-navy">
                      {active ? "C1–C2 open" : "A1–B2 only"}
                    </dd>
                  </div>
                </dl>
              ) : null}

              <div className="mt-5 space-y-2">
                {access.state === "signed-out" ? (
                  <Link
                    href={loginHref}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "h-10 w-full rounded-full bg-brand-navy px-4 text-sm font-semibold text-white hover:bg-brand-teal-deep",
                    )}
                  >
                    Log in
                  </Link>
                ) : null}

                {access.state === "unavailable" ? (
                  <Link
                    href="/premium"
                    className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border border-brand-line bg-white px-4 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                  >
                    <RefreshCw className="size-4" aria-hidden="true" />
                    Check again
                  </Link>
                ) : null}

                <Link
                  href="/courses"
                  className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border border-brand-line bg-white px-4 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                >
                  Browse all courses
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              {!isSupabaseConfigured ? (
                <p className="mt-4 text-xs leading-5 text-brand-body">
                  Accounts and memberships are not connected in this
                  environment, so status cannot be checked.
                </p>
              ) : null}
            </aside>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: LockKeyhole,
                title: "1 · Sign in",
                text: "Membership is tied to your student account, never to a browser session or a link.",
              },
              {
                icon: CreditCard,
                title: "2 · Pay on the provider's page",
                text: "If checkout is open, you are sent to the payment provider. The server fixes the price before checkout starts.",
              },
              {
                icon: ShieldCheck,
                title: "3 · Verified confirmation",
                text: "Access changes only after a signed provider webhook is verified by the server. Success redirects alone grant nothing.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-brand-line bg-brand-mist/50 p-5"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-white text-brand-teal-deep shadow-sm">
                  <step.icon className="size-4" aria-hidden="true" />
                </span>
                <p className="mt-3 text-sm font-bold text-brand-navy">
                  {step.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-brand-body">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-brand-body">
            <Info className="mt-0.5 size-3.5 shrink-0 text-brand-teal-deep" aria-hidden="true" />
            A Premium label on a course is never proof of access. Every C1/C2
            lesson, quiz submission and completion is checked against your
            active membership on the server.
          </p>
        </div>
      </section>
    </>
  );
}
