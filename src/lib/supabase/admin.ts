import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { getSupabaseConfig } from "./config";

/**
 * Service-role client for the payment webhook only. It bypasses RLS, so it must
 * never be imported into a Client Component or returned to the browser. The key
 * is read from a server-only environment variable and is never logged.
 */
export function createSupabaseAdminClient(): SupabaseClient | null {
  const config = getSupabaseConfig();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() ?? "";

  if (!config || serviceRoleKey.length === 0) {
    return null;
  }

  return createClient(config.url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
