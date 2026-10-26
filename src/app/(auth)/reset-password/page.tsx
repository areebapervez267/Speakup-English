import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

import { AuthCardSkeleton, AuthShell } from "@/components/auth/auth-shell";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import { SetupNotice } from "@/components/auth/setup-notice";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Choose a new password",
  description:
    "Choose a new password for your SpeakUp English student account.",
  robots: {
    index: false,
    follow: false,
  },
};

async function ResetPasswordContent() {
  // Always resolve at request time so an unconfigured build cannot cache the response.
  await cookies();

  if (!isSupabaseConfigured) {
    return <SetupNotice />;
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return <SetupNotice />;
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login?error=reset-session");
  }

  return <ResetPasswordForm email={user.email ?? "your account"} />;
}

export default function ResetPasswordPage() {
  return (
    <AuthShell
      eyebrow="Account recovery"
      title="Choose a new password"
      description="Your reset link opened a protected session. Set a new password below, then use it the next time you sign in."
      points={[
        "Reset sessions are temporary and verified on the server.",
        "Your other signed-in devices are signed out after the change.",
        "Your new password is handled by Supabase Auth and never stored by SpeakUp.",
      ]}
    >
      <Suspense
        fallback={<AuthCardSkeleton label="Checking your reset link" />}
      >
        <ResetPasswordContent />
      </Suspense>
    </AuthShell>
  );
}
