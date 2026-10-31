/**
 * A visitor's counter is a write from the public internet, so the collection
 * endpoint keeps a small fixed-window budget per address. Anonymous visitors
 * share one address behind a mobile carrier or a home Wi-Fi router, so the
 * budget is deliberately generous — it exists to blunt spam, not to punish a
 * class of students opening the test at the same time.
 */

export const EVENT_WINDOW_MS = 60_000;
export const EVENT_LIMIT_PER_WINDOW = 120;

export type RateBucket = { windowStart: number; count: number };

export type RateDecision = {
  allowed: boolean;
  bucket: RateBucket;
};

export function checkRate(
  bucket: RateBucket | undefined,
  nowMs: number,
  limit = EVENT_LIMIT_PER_WINDOW,
  windowMs = EVENT_WINDOW_MS,
): RateDecision {
  const current =
    bucket && nowMs - bucket.windowStart < windowMs
      ? bucket
      : { windowStart: nowMs, count: 0 };

  if (current.count >= limit) {
    return { allowed: false, bucket: current };
  }

  return { allowed: true, bucket: { ...current, count: current.count + 1 } };
}

/** Coarse client address, used only as a rate-limit key. Never stored. */
export function rateLimitKey(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for") ?? "";
  const first = forwarded.split(",")[0]?.trim() ?? "";
  return first || headers.get("x-real-ip")?.trim() || "unknown";
}
