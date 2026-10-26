import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  KeyRound,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { SignOutForm } from "@/components/auth/sign-out-form";
import {
  formatMemberSince,
  getDisplayName,
  getInitials,
} from "@/lib/auth/user";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Your account",
  description:
    "View your SpeakUp English student profile and manage your sign-in security.",
  robots: {
    index: false,
    follow: false,
  },
};

type AccountSearchParams = Promise<{ password?: string | string[] }>;

export default function AccountPage({
  searchParams,
}: {
  searchParams: AccountSearchParams;
}) {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70 bg-brand-mist">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
      />
      <div className="site-container relative py-10 sm:py-14 lg:py-16">
        <header className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-3 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.17em] text-brand-navy shadow-sm">
            <span className="size-1.5 rounded-full bg-brand-teal" />
            Student account
          </p>
          <h1 className="mt-5 text-balance font-display text-[2.4rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-navy sm:text-5xl">
            Your account
          </h1>
          <p className="mt-4 text-pretty text-base leading-7 text-brand-body sm:text-lg">
            View your profile details and manage the security of your sign-in.
          </p>
        </header>

        <Suspense fallback={<AccountSkeleton />}>
          <AccountContent searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}

async function AccountContent({
  searchParams,
}: {
  searchParams: AccountSearchParams;
}) {
  // Always resolve at request time so an unconfigured build cannot cache the redirect.
  await cookies();

  if (!isSupabaseConfigured) {
    redirect("/login?next=/account");
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    redirect("/login?next=/account");
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login?next=/account");
  }

  const { password } = await searchParams;
  const passwordUpdated = password === "updated";
  const displayName = getDisplayName(user);
  const emailVerified = Boolean(user.email_confirmed_at);

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-start">
      <aside className="rounded-[1.75rem] bg-brand-navy p-6 text-white shadow-lift">
        <div className="flex items-center gap-3">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-sm font-bold tracking-[0.08em] text-white">
            {getInitials(displayName)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-lg font-semibold">{displayName}</p>
            <p className="mt-0.5 truncate text-sm text-white/60">
              {user.email}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white/75">
            <BadgeCheck className="size-3.5 text-brand-teal" aria-hidden="true" />
            {emailVerified ? "Email verified" : "Email pending"}
          </span>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white/45">
            Member since
          </p>
          <p className="mt-1.5 inline-flex items-center gap-2 text-sm font-semibold text-white">
            <CalendarDays className="size-4 text-brand-teal" aria-hidden="true" />
            {formatMemberSince(user.created_at)}
          </p>
        </div>

        <Link
          href="/courses"
          className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
        >
          Browse courses
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </aside>

      <div className="space-y-5">
        {passwordUpdated ? (
          <div
            role="status"
            className="flex items-start gap-3 rounded-2xl border border-brand-teal/30 bg-brand-teal-soft px-4 py-3 text-sm leading-6 text-brand-teal-deep"
          >
            <BadgeCheck className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <p>
              <span className="font-semibold">Your password was updated.</span>{" "}
              Your other signed-in devices have been signed out.
            </p>
          </div>
        ) : null}

        <section className="rounded-3xl border border-brand-line bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2">
            <UserRound className="size-5 text-brand-teal-deep" aria-hidden="true" />
            <h2 className="text-lg font-bold text-brand-navy">Profile details</h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-brand-body">
            These details come from your Supabase account. SpeakUp keeps your
            display name in your authentication metadata.
          </p>

          <dl className="mt-4 divide-y divide-brand-line border-t border-brand-line">
            <div className="grid gap-1 py-3.5 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="text-sm font-semibold text-brand-body">Full name</dt>
              <dd className="text-sm font-semibold text-brand-navy">
                {displayName}
              </dd>
            </div>
            <div className="grid gap-1 py-3.5 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="text-sm font-semibold text-brand-body">Email</dt>
              <dd className="break-all text-sm font-semibold text-brand-navy">
                {user.email}
              </dd>
            </div>
            <div className="grid gap-1 py-3.5 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="text-sm font-semibold text-brand-body">
                Email status
              </dt>
              <dd className="text-sm font-semibold text-brand-navy">
                {emailVerified ? "Verified" : "Awaiting confirmation"}
              </dd>
            </div>
            <div className="grid gap-1 py-3.5 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="text-sm font-semibold text-brand-body">
                Member since
              </dt>
              <dd className="text-sm font-semibold text-brand-navy">
                {formatMemberSince(user.created_at)}
              </dd>
            </div>
          </dl>
        </section>

        <section className="rounded-3xl border border-brand-line bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-brand-teal-deep" aria-hidden="true" />
            <h2 className="text-lg font-bold text-brand-navy">
              Account security
            </h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-brand-body">
            Reset your password by email. After a password change, your other
            signed-in devices are signed out.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/forgot-password"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-brand-line bg-white px-4 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              <KeyRound className="size-4 text-brand-teal-deep" aria-hidden="true" />
              Reset password
            </Link>
            <SignOutForm variant="button" />
          </div>
        </section>

        <section className="rounded-3xl border border-brand-line bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2">
            <BookOpen className="size-5 text-brand-teal-deep" aria-hidden="true" />
            <h2 className="text-lg font-bold text-brand-navy">Keep learning</h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-brand-body">
            Explore all seven skills from A1 to C2. The A1–B2 courses are free,
            and every course page explains its outcomes before you begin.
          </p>
          <Link
            href="/courses"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-deep underline decoration-brand-teal/40 underline-offset-4 transition-colors hover:text-brand-navy"
          >
            Explore the catalogue
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </div>
  );
}

function AccountSkeleton() {
  return (
    <div
      aria-busy="true"
      className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-start"
    >
      <div className="h-72 animate-pulse rounded-[1.75rem] bg-white/70" />
      <div className="space-y-5">
        <div className="h-64 animate-pulse rounded-3xl bg-white/70" />
        <div className="h-44 animate-pulse rounded-3xl bg-white/70" />
      </div>
      <span className="sr-only">Loading your account</span>
    </div>
  );
}
