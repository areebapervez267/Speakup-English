import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

import {
  DashboardProblem,
  DashboardSkeleton,
} from "@/components/dashboard/dashboard-states";
import { DashboardView } from "@/components/dashboard/dashboard-view";
import { getDisplayName } from "@/lib/auth/user";
import { fetchCertificateOverview } from "@/lib/certificates/queries";
import { fetchDashboardData } from "@/lib/dashboard/queries";
import { getPremiumAccess } from "@/lib/premium/access";
import { isMissingSessionError } from "@/lib/progress/errors";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Student dashboard",
  description:
    "See your saved SpeakUp English lesson progress, course completion and recent quiz results.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardPage() {
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
            Student dashboard
          </p>
          <h1 className="mt-5 text-balance font-display text-[2.4rem] font-medium leading-[1.02] tracking-[-0.035em] text-brand-navy sm:text-5xl">
            Your learning, at a glance.
          </h1>
          <p className="mt-4 text-pretty text-base leading-7 text-brand-body sm:text-lg">
            See the lessons and quiz results saved to your student account, then
            continue exactly where you left off.
          </p>
        </header>

        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardContent />
        </Suspense>
      </div>
    </section>
  );
}

async function DashboardContent() {
  // Resolve at request time so a build cannot cache the authenticated view.
  await cookies();

  if (!isSupabaseConfigured) {
    redirect("/login?next=/dashboard");
  }

  const supabase = await createSupabaseServerClient().catch(() => null);
  if (!supabase) {
    redirect("/login?next=/dashboard");
  }

  const authResult = await supabase.auth.getUser().catch(() => null);

  if (!authResult) {
    return (
      <DashboardProblem
        title="We couldn't verify your session"
        message="The authentication service could not be reached. Check your connection and try again."
      />
    );
  }

  const {
    data: { user },
    error,
  } = authResult;

  if (error) {
    if (isMissingSessionError(error)) {
      redirect("/login?next=/dashboard&error=session");
    }

    return (
      <DashboardProblem
        title="We couldn't verify your session"
        message="Your session could not be checked right now. Refresh the page to try again."
      />
    );
  }

  if (!user) {
    redirect("/login?next=/dashboard&error=session");
  }

  const result = await fetchDashboardData(
    supabase,
    user.id,
    getDisplayName(user),
  );

  if (result.status === "error") {
    return (
      <DashboardProblem
        title="We couldn't load your dashboard"
        message={result.message}
      />
    );
  }

  const [access, certificates] = await Promise.all([
    getPremiumAccess(),
    fetchCertificateOverview(supabase),
  ]);

  return (
    <DashboardView
      data={result.data}
      access={access}
      certificates={certificates}
    />
  );
}
