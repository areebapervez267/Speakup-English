import type { Metadata } from "next";

import { AuthShell } from "@/components/auth/auth-shell";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Reset your password",
  description:
    "Request a secure password reset link for your SpeakUp English student account.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      eyebrow="Account recovery"
      title="Reset your password"
      description="Enter your account email and we will send a secure link to choose a new password. Reset links are single-use and time-limited."
      points={[
        "The reset link is sent only to the address on your account.",
        "The link opens a protected page for choosing a new password.",
        "After the change, your other signed-in devices are signed out.",
      ]}
    >
      <ForgotPasswordForm configured={isSupabaseConfigured} />
    </AuthShell>
  );
}
