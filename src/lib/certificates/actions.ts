"use server";

import { revalidatePath } from "next/cache";

import { isMissingSessionError, isSchemaSetupError } from "@/lib/progress/errors";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

import { isCertificateCourseSlug } from "./format";
import type { CertificateActionState } from "./types";

const SETUP_ERROR =
  "Supabase is not connected. Add your project URL and publishable key to .env.local, then restart the app.";
const SCHEMA_ERROR =
  "Certificates are not installed in this Supabase project yet. Apply supabase/migrations/20261026140000_create_certificates.sql, then try again.";
const SIGNED_OUT =
  "Sign in to your student account before issuing a certificate.";
const NETWORK_ERROR =
  "We couldn't verify your session right now. Refresh the page and try again.";
const INVALID_REQUEST =
  "That certificate request was incomplete. Refresh the page and try again.";
const INCOMPLETE =
  "Finish every required lesson and reach the quiz minimum before issuing this certificate.";
const NOT_ELIGIBLE =
  "That course is not available for a SpeakUp certificate.";
const DUPLICATE =
  "A certificate for this course has already been issued. Open it from your dashboard.";
const PREMIUM_REQUIRED =
  "Active Premium access is required before this certificate can be issued.";
const GENERIC_ERROR =
  "We couldn't issue that certificate. Refresh the page and try again.";

function errorState(message: string): CertificateActionState {
  return { status: "error", message };
}

export async function issueCertificateAction(
  _previous: CertificateActionState,
  formData: FormData,
): Promise<CertificateActionState> {
  const raw = formData.get("courseSlug");
  const courseSlug = typeof raw === "string" ? raw.trim() : "";

  if (!isCertificateCourseSlug(courseSlug)) {
    return errorState(INVALID_REQUEST);
  }

  if (!isSupabaseConfigured) {
    return errorState(SETUP_ERROR);
  }

  const supabase = await createSupabaseServerClient().catch(() => null);

  if (!supabase) {
    return errorState(SETUP_ERROR);
  }

  let authResult;

  try {
    authResult = await supabase.auth.getUser();
  } catch {
    return errorState(NETWORK_ERROR);
  }

  if (authResult.error) {
    if (isMissingSessionError(authResult.error)) {
      return { status: "forbidden", message: SIGNED_OUT };
    }

    return errorState(NETWORK_ERROR);
  }

  if (!authResult.data.user) {
    return { status: "forbidden", message: SIGNED_OUT };
  }

  try {
    const { data, error } = await supabase.rpc("issue_certificate", {
      p_course_slug: courseSlug,
    });

    if (error) {
      if (isSchemaSetupError(error)) {
        return errorState(SCHEMA_ERROR);
      }

      if (error.code === "42501") {
        return errorState(
          /premium/i.test(error.message ?? "") ? PREMIUM_REQUIRED : SIGNED_OUT,
        );
      }

      if (error.code === "P0002") {
        return errorState(NOT_ELIGIBLE);
      }

      if (error.code === "P0003") {
        return errorState(INCOMPLETE);
      }

      if (error.code === "23505") {
        return errorState(DUPLICATE);
      }

      if (error.code === "22023") {
        return errorState(
          /display name/i.test(error.message ?? "")
            ? "Add a display name to your student account before issuing a certificate."
            : INVALID_REQUEST,
        );
      }

      return errorState(GENERIC_ERROR);
    }

    const row = (
      Array.isArray(data) ? data[0] : data
    ) as { certificate_id?: unknown } | null | undefined;
    const certificateId =
      row && typeof row.certificate_id === "string"
        ? row.certificate_id
        : undefined;

    if (!certificateId) {
      return errorState(GENERIC_ERROR);
    }

    revalidatePath("/dashboard");
    revalidatePath("/admin/certificates");

    return {
      status: "success",
      message: "Your certificate is ready.",
      certificateId,
    };
  } catch {
    return errorState(GENERIC_ERROR);
  }
}
