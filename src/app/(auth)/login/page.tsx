import type { Metadata } from "next";
import { Suspense } from "react";

import { AuthCardSkeleton, AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Log in",
  description:
    "Log in to your SpeakUp English student account to manage your profile and sign-in security.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Student account"
      title={
        <>
          Welcome back to{" "}
          <span className="italic text-brand-teal-deep">SpeakUp</span>
        </>
      }
      description="Sign in with the email you used to create your account. Your session is stored in secure cookies and verified on the server."
      points={[
        "Use the email address linked to your account.",
        "Your session is verified on the server, not just in the browser.",
        "Forgot your password? Request a secure reset link any time.",
      ]}
    >
      <Suspense fallback={<AuthCardSkeleton label="Loading the sign-in form" />}>
        <LoginForm configured={isSupabaseConfigured} />
      </Suspense>
    </AuthShell>
  );
}
