import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";

import {
  getPaymentProvider,
  getWebhookSecret,
} from "@/lib/premium/config";
import {
  parseMembershipWebhook,
  verifyWebhookSignature,
} from "@/lib/premium/webhook";

const MAX_BODY_BYTES = 64_000;

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

/**
 * Receives normalized, signature-verified membership events from the payment
 * provider. A browser redirect is never treated as proof of payment: access is
 * granted only here, after HMAC verification, through the service-role RPC.
 */
export async function POST(request: Request) {
  const secret = getWebhookSecret();
  const provider = getPaymentProvider();

  if (!secret || provider !== "generic") {
    return jsonError("Webhook not configured.", 503);
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");

  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return jsonError("Payload too large.", 413);
  }

  const rawBody = await request.text().catch(() => null);

  if (!rawBody || rawBody.length === 0 || rawBody.length > MAX_BODY_BYTES) {
    return jsonError("Invalid request body.", 400);
  }

  const signature = request.headers.get("x-payments-signature");

  if (!verifyWebhookSignature(rawBody, signature, secret)) {
    return jsonError("Invalid signature.", 401);
  }

  const parsed = parseMembershipWebhook(rawBody, provider);

  if (!parsed.ok) {
    return jsonError("Invalid event payload.", 400);
  }

  const event = parsed.event;
  const admin = createSupabaseAdminClient();

  if (!admin) {
    return jsonError("Webhook storage is not configured.", 503);
  }

  const { data, error } = await admin.rpc("process_membership_event", {
    p_provider: event.provider,
    p_event_id: event.eventId,
    p_event_type: event.eventType,
    p_user_id: event.userId,
    p_status: event.status,
    p_tier: event.tier,
    p_customer_id: event.customerId,
    p_subscription_id: event.subscriptionId,
    p_period_end: event.periodEnd,
    p_cancelled_at: event.cancelledAt,
    p_detail: { eventType: event.eventType },
  });

  if (error) {
    console.error("membership webhook failed", error.code ?? "unknown");
    return jsonError("Event could not be stored.", 500);
  }

  return NextResponse.json({
    received: true,
    duplicate: data === false,
  });
}
