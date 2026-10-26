import type { EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

import { safeRedirectPath } from "@/lib/auth/validation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const NO_STORE_HEADERS = {
  "Cache-Control": "private, no-cache, no-store, must-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
};

const ALLOWED_TYPES: EmailOtpType[] = [
  "email",
  "recovery",
  "email_change",
  "invite",
];

function errorRedirect(request: NextRequest) {
  return NextResponse.redirect(
    new URL("/auth/auth-code-error", request.url),
    { headers: NO_STORE_HEADERS },
  );
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const tokenHash = searchParams.get("token_hash");
  const rawType = searchParams.get("type");
  const type = ALLOWED_TYPES.find((allowed) => allowed === rawType);

  if (!tokenHash || !type) {
    return errorRedirect(request);
  }

  const fallback = type === "recovery" ? "/reset-password" : "/account";
  const next = safeRedirectPath(searchParams.get("next"), fallback);

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return NextResponse.redirect(
      new URL("/login?error=not-configured", request.url),
      { headers: NO_STORE_HEADERS },
    );
  }

  const { error } = await supabase.auth.verifyOtp({
    type,
    token_hash: tokenHash,
  });

  if (error) {
    return errorRedirect(request);
  }

  return NextResponse.redirect(new URL(next, request.url), {
    headers: NO_STORE_HEADERS,
  });
}
