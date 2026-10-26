import { createHmac, timingSafeEqual } from "node:crypto";

import { isMembershipStatus, type MembershipStatus } from "./types.ts";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const EVENT_STATUS_MAP: Readonly<Record<string, MembershipStatus>> = {
  "checkout.completed": "active",
  "subscription.activated": "active",
  "subscription.renewed": "active",
  "payment.succeeded": "active",
  "subscription.pending": "pending",
  "subscription.past_due": "past_due",
  "payment.failed": "past_due",
  "subscription.cancelled": "cancelled",
  "subscription.canceled": "cancelled",
  "subscription.expired": "expired",
  "payment.refunded": "refunded",
  "subscription.refunded": "refunded",
};

export type MembershipWebhookEvent = {
  provider: string;
  eventId: string;
  eventType: string;
  userId: string;
  status: MembershipStatus;
  tier: "premium";
  customerId: string | null;
  subscriptionId: string | null;
  periodEnd: string | null;
  cancelledAt: string | null;
};

export type WebhookParseResult =
  | { ok: true; event: MembershipWebhookEvent }
  | { ok: false; reason: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function readString(value: unknown, maxLength: number): string | null {
  return typeof value === "string" &&
    value.trim().length > 0 &&
    value.trim().length <= maxLength
    ? value.trim()
    : null;
}

function readTimestamp(value: unknown): string | null | undefined {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  if (typeof value !== "string" || Number.isNaN(Date.parse(value))) {
    return undefined;
  }

  return new Date(value).toISOString();
}

export function mapEventTypeToStatus(
  eventType: string,
): MembershipStatus | null {
  return EVENT_STATUS_MAP[eventType] ?? null;
}

/**
 * Verifies an HMAC-SHA256 signature over the exact request body. The header may
 * contain a bare hex digest or the common `sha256=<hex>` form.
 */
export function verifyWebhookSignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string,
): boolean {
  if (!rawBody || !signatureHeader || secret.length < 16) {
    return false;
  }

  const provided = signatureHeader.startsWith("sha256=")
    ? signatureHeader.slice("sha256=".length)
    : signatureHeader;

  if (!/^[0-9a-f]{64}$/i.test(provided)) {
    return false;
  }

  const expected = createHmac("sha256", secret).update(rawBody, "utf8").digest();
  const received = Buffer.from(provided, "hex");

  if (received.length !== expected.length) {
    return false;
  }

  return timingSafeEqual(received, expected);
}

/**
 * Parses the normalized hosted-checkout webhook contract documented in
 * docs/premium-payments-setup.md. Provider-specific adapters must translate
 * their payload into this shape; the application never trusts a browser
 * redirect as proof of payment.
 */
export function parseMembershipWebhook(
  rawBody: string,
  expectedProvider: string,
): WebhookParseResult {
  let payload: unknown;

  try {
    payload = JSON.parse(rawBody) as unknown;
  } catch {
    return { ok: false, reason: "invalid_json" };
  }

  if (!isRecord(payload)) {
    return { ok: false, reason: "invalid_payload" };
  }

  const eventId = readString(payload.id, 200);
  const eventType = readString(payload.type, 80);
  const providerValue = readString(payload.provider, 40);
  const provider = providerValue?.toLowerCase() ?? expectedProvider;

  if (!eventId) {
    return { ok: false, reason: "missing_event_id" };
  }

  if (!eventType) {
    return { ok: false, reason: "missing_event_type" };
  }

  if (provider !== expectedProvider) {
    return { ok: false, reason: "provider_mismatch" };
  }

  if (!isRecord(payload.data)) {
    return { ok: false, reason: "missing_data" };
  }

  const data = payload.data;
  const userId =
    typeof data.userId === "string" && UUID_PATTERN.test(data.userId)
      ? data.userId
      : null;

  if (!userId) {
    return { ok: false, reason: "missing_user" };
  }

  const rawStatus = data.status;
  const status = isMembershipStatus(rawStatus)
    ? rawStatus
    : mapEventTypeToStatus(eventType);

  if (!status) {
    return { ok: false, reason: "unknown_event" };
  }

  const tier = data.tier ?? "premium";

  if (tier !== "premium") {
    return { ok: false, reason: "unsupported_tier" };
  }

  const periodEnd = readTimestamp(data.currentPeriodEnd);
  const cancelledAt = readTimestamp(data.cancelledAt);

  if (periodEnd === undefined || cancelledAt === undefined) {
    return { ok: false, reason: "invalid_timestamp" };
  }

  return {
    ok: true,
    event: {
      provider,
      eventId,
      eventType,
      userId,
      status,
      tier: "premium",
      customerId: readString(data.customerId, 200),
      subscriptionId: readString(data.subscriptionId, 200),
      periodEnd,
      cancelledAt,
    },
  };
}
