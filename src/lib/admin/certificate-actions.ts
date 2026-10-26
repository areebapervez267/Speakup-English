"use server";

import { revalidatePath } from "next/cache";

import { getAdminContext } from "./auth";
import type { AdminActionState } from "./types";

const INVALID_REQUEST =
  "That certificate request was incomplete. Refresh the page and try again.";
const REASON_REQUIRED =
  "Enter a revocation reason between 5 and 500 characters.";
const GENERIC_ERROR =
  "We couldn't revoke that certificate. Refresh the page and try again.";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function errorState(message: string): AdminActionState {
  return { status: "error", message };
}

export async function revokeCertificateAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const idValue = formData.get("certificateId");
  const reasonValue = formData.get("reason");
  const certificateId = typeof idValue === "string" ? idValue.trim() : "";
  const reason = typeof reasonValue === "string" ? reasonValue.trim() : "";

  if (!UUID_PATTERN.test(certificateId)) {
    return errorState(INVALID_REQUEST);
  }

  if (reason.length < 5 || reason.length > 500) {
    return errorState(REASON_REQUIRED);
  }

  try {
    const { error } = await context.supabase.rpc("admin_revoke_certificate", {
      p_certificate_id: certificateId,
      p_reason: reason,
    });

    if (error) {
      if (error.code === "42501") {
        return {
          status: "forbidden",
          message: "Only administrators can revoke certificates.",
        };
      }

      if (error.code === "P0002") {
        return errorState(
          "That certificate is missing or has already been revoked.",
        );
      }

      if (error.code === "22023") {
        return errorState(REASON_REQUIRED);
      }

      return errorState(GENERIC_ERROR);
    }
  } catch {
    return errorState(GENERIC_ERROR);
  }

  revalidatePath("/admin/certificates");
  revalidatePath("/admin");
  revalidatePath("/dashboard");
  revalidatePath(`/certificates/${certificateId}`);

  return {
    status: "success",
    message: "Certificate revoked. The reason was saved to the audit log.",
  };
}
