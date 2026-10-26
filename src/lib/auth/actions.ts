"use server";

import type { AuthError } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import type {
  AuthFieldErrors,
  AuthFormState,
  SignOutState,
} from "@/lib/auth/types";
import {
  normalizeEmail,
  normalizeFullName,
  readFormValue,
  safeRedirectPath,
  validateEmail,
  validateLoginFields,
  validateResetFields,
  validateSignUpFields,
} from "@/lib/auth/validation";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const SETUP_ERROR =
  "Authentication is not configured yet. Add your Supabase project URL and publishable key to .env.local, then restart the app.";
const NETWORK_ERROR =
  "We couldn't reach the authentication service. Check your connection and try again.";

function getOriginFromEnv() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    return null;
  }

  try {
    const url = new URL(raw);
    if (url.protocol === "https:" || url.protocol === "http:") {
      return url.origin;
    }
  } catch {
    return null;
  }

  return null;
}

async function getSiteOrigin() {
  const configuredOrigin = getOriginFromEnv();
  if (configuredOrigin) {
    return configuredOrigin;
  }

  const headerStore = await headers();
  const origin = headerStore.get("origin");

  if (origin) {
    try {
      const url = new URL(origin);
      if (url.protocol === "https:" || url.protocol === "http:") {
        return url.origin;
      }
    } catch {
      // Fall through to forwarded host details.
    }
  }

  const host =
    headerStore.get("x-forwarded-host") ?? headerStore.get("host") ?? "";
  const forwardedProtocol = headerStore.get("x-forwarded-proto");
  const protocol =
    forwardedProtocol === "https" || forwardedProtocol === "http"
      ? forwardedProtocol
      : process.env.NODE_ENV === "production"
        ? "https"
        : "http";

  if (host && /^[a-z0-9.\-:\[\]]+$/i.test(host)) {
    return `${protocol}://${host}`;
  }

  return "http://localhost:3000";
}

async function buildCallbackUrl(nextPath: string) {
  const origin = await getSiteOrigin();
  const callbackUrl = new URL("/auth/callback", origin);
  callbackUrl.searchParams.set("next", nextPath);
  return callbackUrl.toString();
}

function errorMessage(error: AuthError, fallback: string) {
  if (error.status === 0 || error.name === "AuthRetryableFetchError") {
    return NETWORK_ERROR;
  }

  switch (error.code) {
    case "invalid_credentials":
      return "Email or password is incorrect.";
    case "email_not_confirmed":
      return "Confirm your email address before signing in. Check your inbox for the confirmation link.";
    case "email_exists":
    case "user_already_exists":
      return "An account with this email already exists. Try logging in instead.";
    case "email_address_invalid":
      return "Enter a valid email address.";
    case "weak_password":
      return error.message.length <= 220
        ? error.message
        : "Choose a stronger password and try again.";
    case "same_password":
      return "Choose a password that is different from your current one.";
    case "over_email_send_rate_limit":
    case "over_request_rate_limit":
    case "rate_limit_exceeded":
      return "Too many attempts. Wait a few minutes and try again.";
    case "signup_disabled":
      return "New account signups are currently disabled for this project.";
    case "email_provider_disabled":
      return "Email sign-in is currently disabled for this project.";
    case "session_not_found":
    case "refresh_token_not_found":
    case "refresh_token_already_used":
      return "Your session has expired. Please sign in again.";
    case "otp_expired":
      return "That link has expired. Request a new email and try again.";
    default:
      return fallback;
  }
}

function fieldErrorForCode(code: string | undefined): AuthFieldErrors {
  switch (code) {
    case "email_address_invalid":
    case "email_exists":
    case "user_already_exists":
      return { email: "Check this email address and try another one." };
    case "weak_password":
      return { password: "Choose a stronger password." };
    case "same_password":
      return { password: "Choose a different password." };
    default:
      return {};
  }
}

export async function signUpAction(
  _previousState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const fullName = normalizeFullName(readFormValue(formData, "fullName"));
  const email = normalizeEmail(readFormValue(formData, "email"));
  const password = readFormValue(formData, "password");
  const confirmPassword = readFormValue(formData, "confirmPassword");
  const values = { fullName, email };

  if (!isSupabaseConfigured) {
    return { status: "error", message: SETUP_ERROR, values };
  }

  const fieldErrors = validateSignUpFields({
    fullName,
    email,
    password,
    confirmPassword,
  });

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      fieldErrors,
      values,
    };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return { status: "error", message: SETUP_ERROR, values };
  }

  const emailRedirectTo = await buildCallbackUrl("/account");
  let sessionCreated = false;
  let actionError: AuthError | null = null;

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo,
      },
    });

    if (error) {
      actionError = error;
    } else {
      sessionCreated = Boolean(data.session);
    }
  } catch {
    return { status: "error", message: NETWORK_ERROR, values };
  }

  if (actionError) {
    return {
      status: "error",
      message: errorMessage(
        actionError,
        "We couldn't create your account. Please try again.",
      ),
      fieldErrors: fieldErrorForCode(actionError.code),
      values,
    };
  }

  if (sessionCreated) {
    revalidatePath("/", "layout");
    redirect("/account");
  }

  return {
    status: "success",
    message:
      "If this email is new, a confirmation link is on its way. Open it to finish setting up your account. If you already have an account, sign in instead.",
    values,
  };
}

export async function signInAction(
  _previousState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const email = normalizeEmail(readFormValue(formData, "email"));
  const password = readFormValue(formData, "password");
  const next = safeRedirectPath(readFormValue(formData, "next"), "/account");
  const values = { email };

  if (!isSupabaseConfigured) {
    return { status: "error", message: SETUP_ERROR, values };
  }

  const fieldErrors = validateLoginFields({ email, password });
  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      fieldErrors,
      values,
    };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return { status: "error", message: SETUP_ERROR, values };
  }

  let actionError: AuthError | null = null;
  let signedIn = false;

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      actionError = error;
    } else {
      signedIn = true;
    }
  } catch {
    return { status: "error", message: NETWORK_ERROR, values };
  }

  if (actionError) {
    return {
      status: "error",
      message: errorMessage(
        actionError,
        "We couldn't sign you in. Please try again.",
      ),
      values,
    };
  }

  if (!signedIn) {
    return {
      status: "error",
      message: "We couldn't sign you in. Please try again.",
      values,
    };
  }

  revalidatePath("/", "layout");
  redirect(next);
}

export async function requestPasswordResetAction(
  _previousState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const email = normalizeEmail(readFormValue(formData, "email"));
  const values = { email };

  if (!isSupabaseConfigured) {
    return { status: "error", message: SETUP_ERROR, values };
  }

  const emailError = validateEmail(email);
  if (emailError) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      fieldErrors: { email: emailError },
      values,
    };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return { status: "error", message: SETUP_ERROR, values };
  }

  const redirectTo = await buildCallbackUrl("/reset-password");
  let actionError: AuthError | null = null;

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });
    actionError = error;
  } catch {
    return { status: "error", message: NETWORK_ERROR, values };
  }

  if (actionError) {
    return {
      status: "error",
      message: errorMessage(
        actionError,
        "We couldn't send the reset email right now. Please try again.",
      ),
      fieldErrors: fieldErrorForCode(actionError.code),
      values,
    };
  }

  return {
    status: "success",
    message:
      "If an account exists for this email, a time-limited reset link is on its way. Check your inbox and spam folder.",
    values,
  };
}

export async function updatePasswordAction(
  _previousState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const password = readFormValue(formData, "password");
  const confirmPassword = readFormValue(formData, "confirmPassword");

  if (!isSupabaseConfigured) {
    return { status: "error", message: SETUP_ERROR };
  }

  const fieldErrors = validateResetFields({ password, confirmPassword });
  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return { status: "error", message: SETUP_ERROR };
  }

  let actionError: AuthError | null = null;
  let sessionExpired = false;

  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      sessionExpired = true;
    } else {
      const { error } = await supabase.auth.updateUser({ password });
      actionError = error;
    }
  } catch {
    return { status: "error", message: NETWORK_ERROR };
  }

  if (sessionExpired) {
    return {
      status: "error",
      message:
        "Your reset session has expired. Request a new reset link and try again.",
    };
  }

  if (actionError) {
    return {
      status: "error",
      message: errorMessage(
        actionError,
        "We couldn't update your password. Please try again.",
      ),
      fieldErrors: fieldErrorForCode(actionError.code),
    };
  }

  try {
    await supabase.auth.signOut({ scope: "others" });
  } catch {
    // The password is already updated; other sessions can be revoked next time.
  }

  revalidatePath("/", "layout");
  redirect("/account?password=updated");
}

export async function signOutAction(
  _previousState: SignOutState,
  _formData: FormData,
): Promise<SignOutState> {
  void _previousState;
  void _formData;

  if (isSupabaseConfigured) {
    try {
      const supabase = await createSupabaseServerClient();
      if (supabase) {
        await supabase.auth.signOut({ scope: "local" });
      }
    } catch {
      // The client still reloads into a signed-out state.
    }
  }

  revalidatePath("/", "layout");
  return "success";
}
