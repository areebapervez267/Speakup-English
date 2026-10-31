import {
  isTrafficEvent,
  type TrafficEvent,
} from "@/lib/traffic/normalise";

/**
 * Turning anonymous event rows into the numbers she actually reads: how many
 * people arrived from each post, how many started the test, how many finished.
 *
 * Everything here is pure so it can be tested without a database. Days are
 * counted in Pakistan time, because that is the day she lives in — a visitor at
 * 11 pm in Karachi is not a "next day" visitor just because UTC rolled over.
 */

export const KARACHI_TIME_ZONE = "Asia/Karachi";

export type MarketingEventRecord = {
  source: string;
  campaign: string | null;
  event: TrafficEvent;
  createdAt: string;
};

export type FunnelCounts = {
  arrivals: number;
  starts: number;
  completions: number;
};

export type FunnelSourceRow = FunnelCounts & {
  source: string;
  /** Share of arrivals that pressed Start. */
  startRate: number;
  /** Share of arrivals that saw a result. */
  completionRate: number;
};

export type FunnelDayRow = FunnelCounts & {
  /** YYYY-MM-DD in Pakistan time. */
  day: string;
};

export type FunnelCampaignRow = FunnelCounts & {
  campaign: string;
};

export type MarketingFunnel = {
  days: number;
  totals: FunnelCounts;
  sources: FunnelSourceRow[];
  daily: FunnelDayRow[];
  campaigns: FunnelCampaignRow[];
  /** True when the stored window held more rows than we were willing to read. */
  capped: boolean;
};

const EVENT_TO_KEY: Record<TrafficEvent, keyof FunnelCounts> = {
  visit: "arrivals",
  start: "starts",
  complete: "completions",
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function asIsoTimestamp(value: unknown): string | null {
  if (typeof value !== "string" || value.trim().length === 0) return null;
  return Number.isNaN(Date.parse(value)) ? null : value;
}

export function toMarketingEventRecord(value: unknown): MarketingEventRecord | null {
  if (!isRecord(value)) return null;
  if (!isTrafficEvent(value.event)) return null;

  const createdAt = asIsoTimestamp(value.created_at);
  if (!createdAt) return null;

  const source = typeof value.source === "string" ? value.source : "";
  if (source.length === 0 || source.length > 40) return null;

  const campaign =
    typeof value.campaign === "string" && value.campaign.length > 0
      ? value.campaign.slice(0, 60)
      : null;

  return { source, campaign, event: value.event, createdAt };
}

const dayFormatters = new Map<string, Intl.DateTimeFormat>();

function dayFormatter(timeZone: string): Intl.DateTimeFormat {
  const existing = dayFormatters.get(timeZone);
  if (existing) return existing;

  const created = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  dayFormatters.set(timeZone, created);
  return created;
}

/** "2026-10-31" for this instant, in the given time zone. */
export function dayKey(
  instant: string | number | Date,
  timeZone: string = KARACHI_TIME_ZONE,
): string {
  const date = instant instanceof Date ? instant : new Date(instant);

  if (Number.isNaN(date.getTime())) return "";

  try {
    return dayFormatter(timeZone).format(date);
  } catch {
    return date.toISOString().slice(0, 10);
  }
}

function percent(part: number, whole: number): number {
  if (whole <= 0) return 0;
  return Math.round((part / whole) * 1000) / 10;
}

function add(counts: FunnelCounts, event: TrafficEvent) {
  counts[EVENT_TO_KEY[event]] += 1;
}

function emptyCounts(): FunnelCounts {
  return { arrivals: 0, starts: 0, completions: 0 };
}

export type SummariseOptions = {
  /** Rows to include, newest first or any order. */
  records: MarketingEventRecord[];
  /** "Now" for the window; injectable so tests are stable. */
  now: Date;
  /** How many Pakistan days to cover. */
  days: number;
  timeZone?: string;
};

export function summariseFunnel({
  records,
  now,
  days,
  timeZone = KARACHI_TIME_ZONE,
}: SummariseOptions): MarketingFunnel {
  const windowDays = Math.max(1, Math.floor(days));
  const todayKey = dayKey(now, timeZone);

  // Ordered list of day labels for the window, oldest first, ending today.
  const orderedDays: string[] = [];
  {
    const anchor = new Date(`${todayKey}T12:00:00Z`);

    for (let offset = windowDays - 1; offset >= 0; offset -= 1) {
      const shifted = new Date(anchor);
      shifted.setUTCDate(shifted.getUTCDate() - offset);
      orderedDays.push(
        new Intl.DateTimeFormat("en-CA", {
          timeZone: "UTC",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(shifted),
      );
    }
  }

  const firstDay = orderedDays[0] ?? todayKey;

  const byDay = new Map<string, FunnelCounts>();
  for (const day of orderedDays) byDay.set(day, emptyCounts());

  const bySource = new Map<string, FunnelCounts>();
  const byCampaign = new Map<string, FunnelCounts>();
  const totals = emptyCounts();

  for (const record of records) {
    const key = dayKey(record.createdAt, timeZone);
    if (!key || key < firstDay || key > todayKey) continue;

    add(totals, record.event);

    const sourceCounts = bySource.get(record.source) ?? emptyCounts();
    add(sourceCounts, record.event);
    bySource.set(record.source, sourceCounts);

    if (record.campaign) {
      const campaignCounts = byCampaign.get(record.campaign) ?? emptyCounts();
      add(campaignCounts, record.event);
      byCampaign.set(record.campaign, campaignCounts);
    }

    const dayCounts = byDay.get(key);
    if (dayCounts) add(dayCounts, record.event);
  }

  const sources: FunnelSourceRow[] = [...bySource.entries()]
    .map(([source, counts]) => ({
      source,
      ...counts,
      startRate: percent(counts.starts, counts.arrivals),
      completionRate: percent(counts.completions, counts.arrivals),
    }))
    .sort(
      (left, right) =>
        right.arrivals - left.arrivals ||
        right.completions - left.completions ||
        left.source.localeCompare(right.source),
    );

  const campaigns: FunnelCampaignRow[] = [...byCampaign.entries()]
    .map(([campaign, counts]) => ({ campaign, ...counts }))
    .sort(
      (left, right) =>
        right.arrivals - left.arrivals || left.campaign.localeCompare(right.campaign),
    );

  const daily: FunnelDayRow[] = orderedDays.map((day) => ({
    day,
    ...(byDay.get(day) ?? emptyCounts()),
  }));

  return {
    days: windowDays,
    totals,
    sources,
    daily,
    campaigns,
    capped: false,
  };
}
