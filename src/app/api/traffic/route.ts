import { NextResponse } from "next/server";

import { normaliseIngest } from "@/lib/traffic/ingest";
import { checkRate, rateLimitKey, type RateBucket } from "@/lib/traffic/rate";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const MAX_BODY_BYTES = 4096;

/** In-memory, per server instance. A coarse brake on spam, not a firewall. */
const buckets = new Map<string, RateBucket>();

/**
 * Collects one anonymous funnel count for the free level test: someone arrived,
 * started or finished. The browser never talks to the database directly — this
 * endpoint is the only door in, it accepts nothing but the three known events,
 * and it writes insert-only rows that no visitor can read back.
 */
export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") ?? "0");

  if (Number.isFinite(length) && length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false }, { status: 413 });
  }

  const raw = await request.text().catch(() => null);

  if (!raw) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  let payload: unknown;

  try {
    payload = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const row = normaliseIngest(payload);

  if (!row) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const key = rateLimitKey(request.headers);
  const decision = checkRate(buckets.get(key), Date.now());
  buckets.set(key, decision.bucket);

  if (buckets.size > 5000) {
    buckets.clear();
  }

  if (!decision.allowed) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    // No database configured: counting is optional, the test is not.
    return NextResponse.json({ ok: true });
  }

  const { error } = await supabase.from("marketing_events").insert(row);

  if (error) {
    // Never expose the reason: the page does not need to know, and the
    // dashboard already tells an administrator the table is missing.
    return NextResponse.json({ ok: false }, { status: 200 });
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ ok: false }, { status: 405 });
}
