import type { SupabaseClient } from "@supabase/supabase-js";
import { connection } from "next/server";
import { cache } from "react";

import {
  isMissingSessionError,
  isNetworkError,
  isSchemaSetupError,
} from "@/lib/progress/errors";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

import {
  isMembershipSource,
  isMembershipStatus,
  type MembershipSnapshot,
  type PremiumAccess,
} from "./types";

export const PREMIUM_SCHEMA_MESSAGE =
  "Premium memberships are not installed in this Supabase project yet. Apply supabase/migrations/20261026130000_create_premium_memberships.sql, then reload this page.";

const SESSION_ERROR =
  "We couldn't verify your session right now. Refresh the page to try again.";

const MEMBERSHIP_ERROR =
  "We couldn't check your membership right now. Refresh the page to try again.";

const NETWORK_ERROR =
  "We couldn't reach the service. Check your connection and try again.";

type MembershipLookup =
  | { status: "ok"; membership: MembershipSnapshot | null }
  | { status: "schema-missing" }
  | { status: "error"; message: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function asTimestamp(value: unknown): string | null {
  if (
    typeof value === "string" &&
    value.length > 0 &&
    !Number.isNaN(Date.parse(value))
  ) {
    return value;
  }

  return null;
}

function parseMembershipRow(value: unknown): MembershipSnapshot | null {
  if (!isRecord(value)) {
    return null;
  }

  if (
    value.tier !== "premium" ||
    !isMembershipStatus(value.status) ||
    !isMembershipSource(value.source)
  ) {
    return null;
  }

  return {
    tier: "premium",
    status: value.status,
    source: value.source,
    activatedAt: asTimestamp(value.activated_at),
    currentPeriodEnd: asTimestamp(value.current_period_end),
    cancelledAt: asTimestamp(value.cancelled_at),
    isActive: value.is_active === true,
  };
}

function isMembershipSchemaError(error: { code?: string; message?: string }) {
  return (
    isSchemaSetupError(error) ||
    /get_my_membership|has_active_membership|memberships/i.test(
      error.message ?? "",
    )
  );
}

/**
 * Reads the signed-in student's safe membership view. The RPC is granted only
 * to authenticated users and returns no provider identifiers or admin notes.
 */
export async function fetchMembershipSnapshot(
  supabase: SupabaseClient,
): Promise<MembershipLookup> {
  try {
    const { data, error } = await supabase.rpc("get_my_membership");

    if (error) {
      if (isMembershipSchemaError(error)) {
        return { status: "schema-missing" };
      }

      return { status: "error", message: MEMBERSHIP_ERROR };
    }

    const row = Array.isArray(data) ? data[0] : data;

    if (row === null || row === undefined) {
      return { status: "ok", membership: null };
    }

    const membership = parseMembershipRow(row);

    if (!membership) {
      return { status: "error", message: MEMBERSHIP_ERROR };
    }

    return { status: "ok", membership };
  } catch {
    return { status: "error", message: NETWORK_ERROR };
  }
}

export const getPremiumAccess = cache(async (): Promise<PremiumAccess> => {
  // Membership must always be resolved for the current request, never cached
  // across visitors or computed during prerendering.
  await connection();

  if (!isSupabaseConfigured) {
    return {
      state: "unconfigured",
      signedIn: false,
      active: false,
      membership: null,
      schemaReady: false,
    };
  }

  const supabase = await createSupabaseServerClient().catch(() => null);

  if (!supabase) {
    return {
      state: "unconfigured",
      signedIn: false,
      active: false,
      membership: null,
      schemaReady: false,
    };
  }

  let authResult;

  try {
    authResult = await supabase.auth.getUser();
  } catch {
    return {
      state: "unavailable",
      signedIn: false,
      active: false,
      membership: null,
      schemaReady: false,
      message: NETWORK_ERROR,
    };
  }

  const { data, error } = authResult;

  if (error) {
    if (isMissingSessionError(error)) {
      return {
        state: "signed-out",
        signedIn: false,
        active: false,
        membership: null,
        schemaReady: false,
      };
    }

    return {
      state: "unavailable",
      signedIn: false,
      active: false,
      membership: null,
      schemaReady: false,
      message: isNetworkError(error) ? NETWORK_ERROR : SESSION_ERROR,
    };
  }

  if (!data.user) {
    return {
      state: "signed-out",
      signedIn: false,
      active: false,
      membership: null,
      schemaReady: false,
    };
  }

  const lookup = await fetchMembershipSnapshot(supabase);

  if (lookup.status === "schema-missing") {
    return {
      state: "unavailable",
      signedIn: true,
      active: false,
      membership: null,
      schemaReady: false,
      message: PREMIUM_SCHEMA_MESSAGE,
    };
  }

  if (lookup.status === "error") {
    return {
      state: "unavailable",
      signedIn: true,
      active: false,
      membership: null,
      schemaReady: false,
      message: lookup.message,
    };
  }

  return {
    state: "ready",
    signedIn: true,
    active: lookup.membership?.isActive ?? false,
    membership: lookup.membership,
    schemaReady: true,
  };
});
