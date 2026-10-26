import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { getSupabaseConfig } from "./config";

const CACHE_HEADERS = ["cache-control", "expires", "pragma"] as const;

export async function updateSession(request: NextRequest) {
  const config = getSupabaseConfig();
  if (!config) {
    return NextResponse.next({ request });
  }

  let response = NextResponse.next({ request });
  const supabase = createServerClient(config.url, config.publishableKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headers) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
        Object.entries(headers).forEach(([key, value]) => {
          response.headers.set(key, value);
        });
      },
    },
  });

  let hasVerifiedSession = false;
  try {
    const { data, error } = await supabase.auth.getClaims();
    hasVerifiedSession = Boolean(data?.claims) && !error;
  } catch {
    hasVerifiedSession = false;
  }

  const { pathname } = request.nextUrl;

  if (!hasVerifiedSession) {
    const isProtectedStudentRoute =
      pathname === "/account" ||
      pathname.startsWith("/account/") ||
      pathname === "/dashboard" ||
      pathname.startsWith("/dashboard/") ||
      pathname === "/admin" ||
      pathname.startsWith("/admin/");
    const isResetRoute = pathname === "/reset-password";

    if (isProtectedStudentRoute || isResetRoute) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/login";
      redirectUrl.search = "";
      if (isProtectedStudentRoute) {
        redirectUrl.searchParams.set("next", pathname);
      } else {
        redirectUrl.searchParams.set("error", "reset-session");
      }

      const redirectResponse = NextResponse.redirect(redirectUrl);
      response.cookies.getAll().forEach((cookie) => {
        redirectResponse.cookies.set(cookie);
      });
      CACHE_HEADERS.forEach((header) => {
        const value = response.headers.get(header);
        if (value) {
          redirectResponse.headers.set(header, value);
        }
      });
      return redirectResponse;
    }
  }

  return response;
}
