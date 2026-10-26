import { NextResponse, type NextRequest } from "next/server";

import { safeRedirectPath } from "@/lib/auth/validation";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const NO_STORE_HEADERS = {
  "Cache-Control": "private, no-cache, no-store, must-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
};

function errorRedirect(request: NextRequest) {
  return NextResponse.redirect(
    new URL("/auth/auth-code-error", request.url),
    { headers: NO_STORE_HEADERS },
  );
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const errorCode = searchParams.get("error_code");
  const next = safeRedirectPath(searchParams.get("next"), "/account");

  if (errorCode || !code) {
    return errorRedirect(request);
  }

  if (!isSupabaseConfigured) {
    return NextResponse.redirect(
      new URL("/login?error=not-configured", request.url),
      { headers: NO_STORE_HEADERS },
    );
  }

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return NextResponse.redirect(
      new URL("/login?error=not-configured", request.url),
      { headers: NO_STORE_HEADERS },
    );
  }

  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    return errorRedirect(request);
  }

  return NextResponse.redirect(new URL(next, request.url), {
    headers: NO_STORE_HEADERS,
  });
}
