import type { AuthError } from "@supabase/supabase-js";

type ErrorWithCode = {
  code?: string;
  name?: string;
  status?: number;
};

export function isMissingSessionError(
  error: AuthError | ErrorWithCode | null | undefined,
): boolean {
  if (!error) {
    return false;
  }

  const code = "code" in error ? error.code : undefined;

  return (
    error.name === "AuthSessionMissingError" ||
    code === "session_not_found" ||
    code === "refresh_token_not_found" ||
    code === "refresh_token_already_used" ||
    code === "user_not_found" ||
    code === "bad_jwt"
  );
}

export function isNetworkError(
  error: AuthError | ErrorWithCode | null | undefined,
): boolean {
  if (!error) {
    return false;
  }

  return error.status === 0 || error.name === "AuthRetryableFetchError";
}

export function isSchemaSetupError(
  error: { code?: string } | null | undefined,
): boolean {
  if (!error?.code) {
    return false;
  }

  return [
    "42P01",
    "42703",
    "42883",
    "PGRST202",
    "PGRST204",
    "PGRST205",
  ].includes(error.code);
}
