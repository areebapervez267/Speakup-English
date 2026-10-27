import type { Metadata } from "next";

import { AuthShell } from "@/components/auth/auth-shell";
import { SignupForm } from "@/components/auth/signup-form";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Create your free account",
  description:
    "Create a free SpeakUp English student account and keep your sign-in details in one place. A1–B2 courses are free and no card is required.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupPage() {
  return (
    <AuthShell
      eyebrow="Free student account"
      title={
        <>
          Create your{" "}
          <span className="italic text-brand-teal-deep">SpeakUp</span> account
        </>
      }
      description="One student account for every course and CEFR level. A1–B2 courses stay free, and we never ask for card details."
      points={[
        "Your progress, quiz results and certificates stay in one place.",
        "We only ask for your name and email address.",
        "Email confirmation keeps your account secure.",
      ]}
    >
      <SignupForm configured={isSupabaseConfigured} />
    </AuthShell>
  );
}
