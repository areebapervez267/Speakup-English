import type { SupabaseClient, User } from "@supabase/supabase-js";
import { connection } from "next/server";
import { cache } from "react";

import { getDisplayName } from "@/lib/auth/user";
import {
  isMissingSessionError,
  isNetworkError,
  isSchemaSetupError,
} from "@/lib/progress/errors";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

import type {
  AdminAccess,
  AdminActionState,
  AdminSetupIssue,
} from "./types";

const SUPABASE_SETUP_MESSAGE =
  "Supabase is not connected. Add your project URL and publishable key to .env.local, then restart the app.";

const ADMIN_SCHEMA_MESSAGE =
  "The admin database tables are not installed in this Supabase project yet. Apply the Phase 7 migrations described in docs/admin-database-setup.md, then reload this page.";

const SESSION_ERROR =
  "We couldn't verify your session right now. Refresh the page to try again.";

const ADMIN_CHECK_ERROR =
  "We couldn't check administrator access right now. Refresh the page to try again.";

const NETWORK_ERROR =
  "We couldn't reach the authentication service. Check your connection and try again.";

const UNCONFIGURED_MESSAGES: Record<AdminSetupIssue, string> = {
  supabase: SUPABASE_SETUP_MESSAGE,
  "admin-schema": ADMIN_SCHEMA_MESSAGE,
};

type Assessment = {
  access: AdminAccess;
  user: User | null;
};

function isAdminSchemaError(error: { code?: string; message?: string }) {
  return (
    isSchemaSetupError(error) ||
    /public\.is_admin|is_admin\(\)/i.test(error.message ?? "")
  );
}

async function assessAdmin(
  supabase: SupabaseClient,
): Promise<Assessment> {
  let authResult;

  try {
    authResult = await supabase.auth.getUser();
  } catch {
    return {
      access: { status: "error", message: NETWORK_ERROR },
      user: null,
    };
  }

  const { data, error } = authResult;

  if (error) {
    if (isMissingSessionError(error)) {
      return { access: { status: "signed-out" }, user: null };
    }

    return {
      access: {
        status: "error",
        message: isNetworkError(error) ? NETWORK_ERROR : SESSION_ERROR,
      },
      user: null,
    };
  }

  if (!data.user) {
    return { access: { status: "signed-out" }, user: null };
  }

  let adminCheck;

  try {
    adminCheck = await supabase.rpc("is_admin");
  } catch {
    return {
      access: { status: "error", message: NETWORK_ERROR },
      user: data.user,
    };
  }

  if (adminCheck.error) {
    if (isAdminSchemaError(adminCheck.error)) {
      return {
        access: {
          status: "unconfigured",
          issue: "admin-schema",
          message: ADMIN_SCHEMA_MESSAGE,
        },
        user: data.user,
      };
    }

    return {
      access: { status: "error", message: ADMIN_CHECK_ERROR },
      user: data.user,
    };
  }

  if (adminCheck.data !== true) {
    return {
      access: {
        status: "denied",
        email: data.user.email ?? null,
      },
      user: data.user,
    };
  }

  return {
    access: {
      status: "granted",
      userId: data.user.id,
      email: data.user.email ?? null,
      displayName: getDisplayName(data.user),
    },
    user: data.user,
  };
}

export const getAdminAccess = cache(async (): Promise<AdminAccess> => {
  // Admin access must never be decided during prerendering, even when Supabase
  // is not configured yet. Waiting for a real request keeps every admin response
  // tied to the caller's session.
  await connection();

  if (!isSupabaseConfigured) {
    return {
      status: "unconfigured",
      issue: "supabase",
      message: SUPABASE_SETUP_MESSAGE,
    };
  }

  const supabase = await createSupabaseServerClient().catch(() => null);

  if (!supabase) {
    return {
      status: "unconfigured",
      issue: "supabase",
      message: SUPABASE_SETUP_MESSAGE,
    };
  }

  const assessment = await assessAdmin(supabase);
  return assessment.access;
});

export function setupIssueMessage(issue: AdminSetupIssue) {
  return UNCONFIGURED_MESSAGES[issue];
}

export function adminAccessToActionState(
  access: AdminAccess,
): AdminActionState {
  switch (access.status) {
    case "granted":
      return { status: "success" };
    case "denied":
    case "signed-out":
      return {
        status: "forbidden",
        message:
          "You do not have administrator access. Ask an existing administrator to add your account to the admin allow-list.",
      };
    case "unconfigured":
      return { status: "error", message: access.message };
    case "error":
      return { status: "error", message: access.message };
  }
}

export type AdminContextResult =
  | {
      ok: true;
      supabase: SupabaseClient;
      userId: string;
      email: string | null;
      displayName: string;
    }
  | { ok: false; state: AdminActionState };

export async function getAdminContext(): Promise<AdminContextResult> {
  if (!isSupabaseConfigured) {
    return {
      ok: false,
      state: {
        status: "error",
        message: SUPABASE_SETUP_MESSAGE,
      },
    };
  }

  const supabase = await createSupabaseServerClient().catch(() => null);

  if (!supabase) {
    return {
      ok: false,
      state: {
        status: "error",
        message: SUPABASE_SETUP_MESSAGE,
      },
    };
  }

  const assessment = await assessAdmin(supabase);

  if (assessment.access.status !== "granted") {
    return {
      ok: false,
      state: adminAccessToActionState(assessment.access),
    };
  }

  return {
    ok: true,
    supabase,
    userId: assessment.access.userId,
    email: assessment.access.email,
    displayName: assessment.access.displayName,
  };
}
