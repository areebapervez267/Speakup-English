"use server";

import { revalidatePath } from "next/cache";

import { getAdminContext } from "./auth";
import { lookupAdminStudentEmail } from "./queries";
import type { AdminActionState } from "./types";

const GENERIC_ERROR =
  "We couldn't save that membership change. Refresh the page and try again.";
const INVALID_REQUEST =
  "That request was incomplete. Refresh the page and try again.";
const SELF_CHANGE =
  "Ask another administrator to change your own membership. Self-granting Premium is blocked.";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function readText(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

function errorState(
  message: string,
  fieldErrors?: Record<string, string>,
): AdminActionState {
  return {
    status: "error",
    message,
    ...(fieldErrors ? { fieldErrors } : {}),
  };
}

function successState(message: string): AdminActionState {
  return { status: "success", message };
}

function dbMessage(error: { code?: string; message?: string }): string {
  if (error.code === "42501") {
    return "Only administrators can change Premium access.";
  }

  if (error.code === "P0002") {
    return "That student account or active membership could not be found.";
  }

  if (error.code === "22023") {
    return "Check the membership details and try again.";
  }

  return GENERIC_ERROR;
}

function revalidateMembershipViews() {
  revalidatePath("/admin/memberships");
  revalidatePath("/dashboard");
  revalidatePath("/premium");
}

function parseExpiry(
  raw: string,
): { ok: true; value: string | null } | { ok: false; message: string } {
  const value = raw.trim();

  if (!value) {
    return { ok: true, value: null };
  }

  if (!DATE_PATTERN.test(value)) {
    return {
      ok: false,
      message: "Use a date in the YYYY-MM-DD format, or leave it empty for no end date.",
    };
  }

  const date = new Date(`${value}T23:59:59.000Z`);

  if (Number.isNaN(date.getTime())) {
    return { ok: false, message: "That date is not valid." };
  }

  if (date.getTime() <= Date.now()) {
    return { ok: false, message: "The access end date must be in the future." };
  }

  return { ok: true, value: date.toISOString() };
}

export async function grantMembershipAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const email = readText(formData, "email").trim().slice(0, 254);
  const note = readText(formData, "note").trim();
  const expiry = parseExpiry(readText(formData, "expiresAt"));

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return errorState("Enter the student's account email address.", {
      email: "Enter a valid email address.",
    });
  }

  if (note.length > 500) {
    return errorState("Keep the administrator note to 500 characters or fewer.", {
      note: "500 characters maximum.",
    });
  }

  if (!expiry.ok) {
    return errorState(expiry.message, { expiresAt: expiry.message });
  }

  const student = await lookupAdminStudentEmail(context.supabase, email);

  if (student.status === "error") {
    return errorState(student.message);
  }

  if (!student.data) {
    return errorState("No student account uses that email address.", {
      email: "No student account uses that email address.",
    });
  }

  if (student.data.userId === context.userId) {
    return errorState(SELF_CHANGE);
  }

  try {
    const { error } = await context.supabase.rpc("admin_grant_membership", {
      p_user_id: student.data.userId,
      p_expires_at: expiry.value,
      p_note: note,
    });

    if (error) {
      return errorState(dbMessage(error));
    }
  } catch {
    return errorState(GENERIC_ERROR);
  }

  revalidateMembershipViews();

  return successState(
    expiry.value
      ? `Granted Premium access to ${student.data.email} until ${expiry.value.slice(0, 10)}.`
      : `Granted Premium access to ${student.data.email} with no end date.`,
  );
}

export async function revokeMembershipAction(
  _previous: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  const context = await getAdminContext();

  if (!context.ok) {
    return context.state;
  }

  const userId = readText(formData, "userId").trim();
  const note = readText(formData, "note").trim();

  if (!UUID_PATTERN.test(userId)) {
    return errorState(INVALID_REQUEST);
  }

  if (userId === context.userId) {
    return errorState(SELF_CHANGE);
  }

  if (note.length > 500) {
    return errorState("Keep the administrator note to 500 characters or fewer.", {
      note: "500 characters maximum.",
    });
  }

  try {
    const { error } = await context.supabase.rpc("admin_revoke_membership", {
      p_user_id: userId,
      p_note: note,
    });

    if (error) {
      return errorState(dbMessage(error));
    }
  } catch {
    return errorState(GENERIC_ERROR);
  }

  revalidateMembershipViews();

  return successState("Premium access revoked. The change is recorded in the audit log.");
}
