"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { isMissingSessionError, isNetworkError } from "@/lib/progress/errors";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

import { fetchMembershipSnapshot } from "./access";
import { createMembershipCheckout } from "./checkout";
import { getPaymentsDisplay } from "./config";
import type { CheckoutActionState } from "./types";

const UNAVAILABLE =
  "Premium checkout is not available in this environment yet. Free A1–B2 courses remain open.";

const SESSION_ENDED =
  "Your session has ended. Log in again to continue to checkout.";

const ALREADY_ACTIVE =
  "Your Premium membership is already active. You can open any C1 or C2 lesson.";

function isHttpOrigin(value: string): string | null {
  try {
    const url = new URL(value);

    if (url.protocol === "https:" || url.protocol === "http:") {
      return url.origin;
    }
  } catch {
    return null;
  }

  return null;
}

async function resolveOrigin(): Promise<string | null> {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configured) {
    const origin = isHttpOrigin(configured);

    if (origin) {
      return origin;
    }
  }

  const headerStore = await headers();
  const origin = headerStore.get("origin");

  return origin ? isHttpOrigin(origin) : null;
}

export async function startCheckoutAction(): Promise<CheckoutActionState> {
  if (!isSupabaseConfigured) {
    return { status: "unconfigured", message: UNAVAILABLE };
  }

  if (!getPaymentsDisplay().checkoutReady) {
    return { status: "unconfigured", message: UNAVAILABLE };
  }

  const supabase = await createSupabaseServerClient().catch(() => null);

  if (!supabase) {
    return { status: "unconfigured", message: UNAVAILABLE };
  }

  const authResult = await supabase.auth.getUser().catch(() => null);

  if (!authResult) {
    return {
      status: "error",
      message:
        "We couldn't reach the authentication service. Check your connection and try again.",
    };
  }

  const { data, error } = authResult;

  if (error) {
    if (isMissingSessionError(error)) {
      return { status: "signed-out", message: SESSION_ENDED };
    }

    return {
      status: "error",
      message: isNetworkError(error)
        ? "We couldn't reach the authentication service. Check your connection and try again."
        : "Your session could not be checked right now. Refresh the page and try again.",
    };
  }

  const user = data.user;

  if (!user) {
    return { status: "signed-out", message: SESSION_ENDED };
  }

  if (!user.email) {
    return {
      status: "error",
      message:
        "Your account does not have an email address for the payment receipt. Contact support.",
    };
  }

  const membership = await fetchMembershipSnapshot(supabase);

  if (membership.status === "schema-missing") {
    return { status: "unconfigured", message: UNAVAILABLE };
  }

  if (membership.status === "error") {
    return { status: "error", message: membership.message };
  }

  if (membership.membership?.isActive) {
    return { status: "error", message: ALREADY_ACTIVE };
  }

  const origin = await resolveOrigin();

  if (!origin) {
    return {
      status: "error",
      message:
        "Checkout is temporarily unavailable because the site address could not be verified.",
    };
  }

  const result = await createMembershipCheckout({
    userId: user.id,
    email: user.email,
    origin,
  });

  if (result.status === "unconfigured") {
    return { status: "unconfigured", message: UNAVAILABLE };
  }

  if (result.status === "error") {
    return { status: "error", message: result.message };
  }

  redirect(result.url);
}
