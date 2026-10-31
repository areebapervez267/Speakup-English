import type { SupabaseClient } from "@supabase/supabase-js";

import {
  summariseFunnel,
  toMarketingEventRecord,
  type MarketingFunnel,
} from "@/lib/admin/traffic";
import { isSchemaSetupError } from "@/lib/progress/errors";

/**
 * Reads the anonymous marketing counts for the administrator dashboard.
 *
 * Only three columns are ever requested, and only inside a bounded window, so
 * the panel stays cheap even after a video takes off.
 */

export const MARKETING_WINDOW_DAYS = 14;
const ROW_LIMIT = 20000;

const SCHEMA_MESSAGE =
  "The marketing tracker table is not in Supabase yet. Run supabase/migrations/20261031120000_create_marketing_events.sql in the SQL editor to switch the tracker on.";

const READ_MESSAGE =
  "We couldn't read the marketing counts just now. Refresh the page to try again.";

export type MarketingFunnelResult =
  | { status: "ok"; funnel: MarketingFunnel }
  | { status: "error"; message: string };

export async function fetchMarketingFunnel(
  supabase: SupabaseClient,
  options: { days?: number; now?: Date } = {},
): Promise<MarketingFunnelResult> {
  const days = Math.max(1, Math.floor(options.days ?? MARKETING_WINDOW_DAYS));
  const now = options.now ?? new Date();

  // One extra day of margin: the window is counted in Pakistan time, and rows
  // are filtered in UTC.
  const since = new Date(now.getTime() - (days + 1) * 86_400_000).toISOString();

  try {
    const { data, error } = await supabase
      .from("marketing_events")
      .select("source, campaign, event, created_at")
      .gte("created_at", since)
      .order("created_at", { ascending: false })
      .limit(ROW_LIMIT);

    if (error) {
      return {
        status: "error",
        message: isSchemaSetupError(error) ? SCHEMA_MESSAGE : READ_MESSAGE,
      };
    }

    const records = (Array.isArray(data) ? data : [])
      .map(toMarketingEventRecord)
      .filter((row): row is NonNullable<ReturnType<typeof toMarketingEventRecord>> =>
        row !== null,
      );

    return {
      status: "ok",
      funnel: summariseFunnel({ records, now, days }),
    };
  } catch {
    return { status: "error", message: READ_MESSAGE };
  }
}
