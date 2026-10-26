import { test } from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  getPaymentsConfig,
  getPaymentsDisplay,
  getWebhookSecret,
} from "../src/lib/premium/config.ts";
import {
  formatMembershipDate,
  membershipSummary,
} from "../src/lib/premium/display.ts";
import {
  courseHasAccess,
  isPremiumCourse,
} from "../src/lib/premium/policy.ts";
import {
  mapEventTypeToStatus,
  parseMembershipWebhook,
  verifyWebhookSignature,
} from "../src/lib/premium/webhook.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function source(path) {
  return readFileSync(join(root, path), "utf8");
}

const premiumMigration = source(
  "supabase/migrations/20261026130000_create_premium_memberships.sql",
);

const userId = "11111111-1111-4111-8111-111111111111";
const secret = "test-webhook-secret-0123456789";

function sign(body) {
  return createHmac("sha256", secret).update(body, "utf8").digest("hex");
}

function webhookPayload(overrides = {}) {
  return {
    id: "evt_test_1",
    type: "subscription.activated",
    provider: "generic",
    data: {
      userId,
      tier: "premium",
      status: "active",
      customerId: "cus_test",
      subscriptionId: "sub_test",
      currentPeriodEnd: "2026-12-01T00:00:00.000Z",
      cancelledAt: null,
      ...overrides,
    },
  };
}

test("premium policy locks C1/C2 even when the course label is cleared", () => {
  assert.equal(isPremiumCourse({ premium: false, level: "c1" }), true);
  assert.equal(isPremiumCourse({ premium: false, level: "c2" }), true);
  assert.equal(isPremiumCourse({ premium: true, level: "b2" }), true);
  assert.equal(isPremiumCourse({ premium: false, level: "b2" }), false);
  assert.equal(isPremiumCourse({ premium: false, level: "a1" }), false);

  assert.equal(courseHasAccess({ premium: false, level: "a1" }, false), true);
  assert.equal(courseHasAccess({ premium: true, level: "b2" }, false), false);
  assert.equal(courseHasAccess({ premium: false, level: "c1" }, false), false);
  assert.equal(courseHasAccess({ premium: false, level: "c1" }, true), true);
});

test("webhook signatures are HMAC-SHA256 over the exact body", () => {
  const body = JSON.stringify(webhookPayload());
  const digest = sign(body);

  assert.equal(verifyWebhookSignature(body, digest, secret), true);
  assert.equal(verifyWebhookSignature(body, `sha256=${digest}`, secret), true);
  assert.equal(verifyWebhookSignature(body, `SHA256=${digest}`, secret), false);
  assert.equal(verifyWebhookSignature(body, "0".repeat(64), secret), false);
  assert.equal(verifyWebhookSignature(`${body} `, digest, secret), false);
  assert.equal(verifyWebhookSignature(body, null, secret), false);
  assert.equal(verifyWebhookSignature(body, digest, "short"), false);
  assert.equal(verifyWebhookSignature("", digest, secret), false);
});

test("normalized webhook parsing rejects untrusted or malformed events", () => {
  const parsed = parseMembershipWebhook(
    JSON.stringify(webhookPayload()),
    "generic",
  );

  assert.equal(parsed.ok, true);
  assert.equal(parsed.event.provider, "generic");
  assert.equal(parsed.event.eventId, "evt_test_1");
  assert.equal(parsed.event.status, "active");
  assert.equal(parsed.event.tier, "premium");
  assert.equal(parsed.event.userId, userId);
  assert.equal(parsed.event.periodEnd, "2026-12-01T00:00:00.000Z");

  const wrongProvider = parseMembershipWebhook(
    JSON.stringify({ ...webhookPayload(), provider: "stripe" }),
    "generic",
  );
  assert.equal(wrongProvider.ok, false);
  assert.equal(wrongProvider.reason, "provider_mismatch");

  const badUser = parseMembershipWebhook(
    JSON.stringify(webhookPayload({ userId: "not-a-uuid" })),
    "generic",
  );
  assert.equal(badUser.ok, false);
  assert.equal(badUser.reason, "missing_user");

  const unknown = parseMembershipWebhook(
    JSON.stringify({
      ...webhookPayload({ status: undefined }),
      type: "invoice.created",
    }),
    "generic",
  );
  assert.equal(unknown.ok, false);
  assert.equal(unknown.reason, "unknown_event");

  const badDate = parseMembershipWebhook(
    JSON.stringify(webhookPayload({ currentPeriodEnd: "not-a-date" })),
    "generic",
  );
  assert.equal(badDate.ok, false);
  assert.equal(badDate.reason, "invalid_timestamp");

  assert.equal(parseMembershipWebhook("{not json", "generic").ok, false);
  assert.equal(
    parseMembershipWebhook(JSON.stringify({ id: "evt" }), "generic").reason,
    "missing_event_type",
  );
});

test("provider event types map to the expected membership states", () => {
  assert.equal(mapEventTypeToStatus("checkout.completed"), "active");
  assert.equal(mapEventTypeToStatus("payment.failed"), "past_due");
  assert.equal(mapEventTypeToStatus("subscription.cancelled"), "cancelled");
  assert.equal(mapEventTypeToStatus("subscription.expired"), "expired");
  assert.equal(mapEventTypeToStatus("payment.refunded"), "refunded");
  assert.equal(mapEventTypeToStatus("invoice.created"), null);
});

test("payment configuration stays disabled until every server value exists", () => {
  const envKeys = [
    "PAYMENTS_PROVIDER",
    "PAYMENTS_CHECKOUT_URL",
    "PAYMENTS_API_KEY",
    "PAYMENTS_PRICE_LABEL",
    "PAYMENTS_PRICE_CURRENCY",
    "PAYMENTS_PRICE_AMOUNT",
    "PAYMENTS_PRODUCT_ID",
    "PAYMENTS_INTERVAL",
    "PAYMENTS_SUCCESS_URL",
    "PAYMENTS_CANCEL_URL",
    "PAYMENTS_WEBHOOK_SECRET",
    "SUPABASE_SERVICE_ROLE_KEY",
  ];
  const saved = Object.fromEntries(
    envKeys.map((key) => [key, process.env[key]]),
  );

  try {
    for (const key of envKeys) {
      delete process.env[key];
    }

    assert.equal(getPaymentsConfig(), null);
    const missing = getPaymentsDisplay();
    assert.equal(missing.provider, null);
    assert.equal(missing.checkoutReady, false);
    assert.equal(missing.checkoutReason, "provider-not-supported");

    process.env.PAYMENTS_PROVIDER = "generic";
    assert.equal(getPaymentsDisplay().checkoutReason, "checkout-missing");

    Object.assign(process.env, {
      PAYMENTS_CHECKOUT_URL: "https://payments.example.test/checkout",
      PAYMENTS_API_KEY: "test-api-key",
      PAYMENTS_PRICE_LABEL: "Test membership",
      PAYMENTS_PRICE_CURRENCY: "usd",
      PAYMENTS_PRICE_AMOUNT: "900",
      PAYMENTS_PRODUCT_ID: "premium-c1-c2",
      PAYMENTS_INTERVAL: "month",
    });

    assert.equal(getPaymentsConfig().priceCurrency, "USD");
    assert.equal(getPaymentsDisplay().checkoutReason, "webhook-missing");

    process.env.PAYMENTS_WEBHOOK_SECRET = "short";
    assert.equal(getWebhookSecret(), null);
    process.env.PAYMENTS_WEBHOOK_SECRET = secret;
    assert.equal(getPaymentsDisplay().checkoutReason, "service-role-missing");

    process.env.SUPABASE_SERVICE_ROLE_KEY = "test-service-role-placeholder";
    assert.equal(getPaymentsDisplay().checkoutReady, true);

    process.env.PAYMENTS_PROVIDER = "safepay";
    assert.equal(getPaymentsDisplay().checkoutReady, false);
    assert.equal(getPaymentsDisplay().checkoutReason, "provider-not-supported");

    process.env.PAYMENTS_PRICE_AMOUNT = "0";
    assert.equal(getPaymentsConfig(), null);
  } finally {
    for (const key of envKeys) {
      if (saved[key] === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = saved[key];
      }
    }
  }
});

test("membership display states are explicit and honest", () => {
  assert.equal(
    membershipSummary({
      state: "unconfigured",
      signedIn: false,
      active: false,
      membership: null,
      schemaReady: false,
    }).tone,
    "unconfigured",
  );

  assert.equal(
    membershipSummary({
      state: "signed-out",
      signedIn: false,
      active: false,
      membership: null,
      schemaReady: false,
    }).tone,
    "guest",
  );

  const active = membershipSummary({
    state: "ready",
    signedIn: true,
    active: true,
    schemaReady: true,
    membership: {
      tier: "premium",
      status: "active",
      source: "admin",
      activatedAt: "2026-10-01T00:00:00.000Z",
      currentPeriodEnd: null,
      cancelledAt: null,
      isActive: true,
    },
  });
  assert.equal(active.tone, "active");
  assert.match(active.description, /Complimentary/);

  for (const status of [
    "pending",
    "past_due",
    "cancelled",
    "expired",
    "refunded",
    "revoked",
  ]) {
    const summary = membershipSummary({
      state: "ready",
      signedIn: true,
      active: false,
      schemaReady: true,
      membership: {
        tier: "premium",
        status,
        source: "provider",
        activatedAt: null,
        currentPeriodEnd: null,
        cancelledAt: null,
        isActive: false,
      },
    });
    assert.ok(summary.label.length > 0, `${status} needs a label`);
    assert.ok(summary.description.length > 0, `${status} needs a description`);
  }

  assert.equal(
    formatMembershipDate("2026-12-01T12:00:00.000Z"),
    "1 Dec 2026",
  );
  assert.equal(formatMembershipDate(null), null);
  assert.equal(formatMembershipDate("not-a-date"), null);
});

test("students have no direct access to membership or payment tables", () => {
  for (const table of ["memberships", "payment_events"]) {
    assert.match(
      premiumMigration,
      new RegExp(`alter table public\\.${table} enable row level security`),
    );
    assert.match(
      premiumMigration,
      new RegExp(
        `revoke all on table public\\.${table} from public, anon, authenticated`,
      ),
    );
    assert.doesNotMatch(
      premiumMigration,
      new RegExp(
        `grant (insert|update|delete|select)[^;]*on table public\\.${table} to (anon|authenticated)`,
        "i",
      ),
    );
    assert.doesNotMatch(
      premiumMigration,
      new RegExp(`create policy[\\s\\S]{0,160}?on public\\.${table}`, "i"),
    );
  }

  assert.match(
    premiumMigration,
    /grant select, insert on table public\.payment_events to service_role/,
  );
});

test("membership RPCs expose only safe caller data and check administrators", () => {
  const start = premiumMigration.indexOf("create function public.get_my_membership()");
  const end = premiumMigration.indexOf(
    "create function public.get_published_lesson_outline(",
  );
  const getMine = premiumMigration.slice(start, end);

  assert.match(getMine, /security definer/);
  assert.match(getMine, /where memberships\.user_id = auth\.uid\(\)/);
  assert.doesNotMatch(
    getMine,
    /memberships\.(provider_customer_id|provider_subscription_id|granted_by|note)/,
  );
  assert.match(
    premiumMigration,
    /grant execute on function public\.get_my_membership\(\) to authenticated/,
  );
  assert.doesNotMatch(
    premiumMigration,
    /grant execute on function public\.get_my_membership\(\)[^;]*anon/,
  );

  for (const fn of [
    "admin_list_memberships",
    "admin_lookup_student_email",
    "admin_grant_membership",
    "admin_revoke_membership",
  ]) {
    const fnStart = premiumMigration.indexOf(`create function public.${fn}(`);
    assert.notEqual(fnStart, -1, `missing ${fn}`);
    const next = premiumMigration.indexOf("\ncreate function ", fnStart + 1);
    const body = premiumMigration.slice(fnStart, next === -1 ? undefined : next);

    assert.match(body, /security definer/, `${fn} must be security definer`);
    assert.match(body, /public\.is_admin\(\)/, `${fn} must check is_admin`);
    assert.doesNotMatch(
      premiumMigration,
      new RegExp(
        `grant execute on function public\\.${fn}\\([^)]*\\)[^;]*to anon`,
      ),
      `${fn} must not be callable by anon`,
    );
  }

  const grant = premiumMigration.slice(
    premiumMigration.indexOf("create function public.admin_grant_membership("),
    premiumMigration.indexOf("create function public.admin_revoke_membership("),
  );
  assert.match(grant, /membership_granted/);
  assert.match(grant, /granted_by/);
  assert.match(grant, /current_period_end/);
  assert.match(grant, /errcode = '42501'/);

  const revoke = premiumMigration.slice(
    premiumMigration.indexOf("create function public.admin_revoke_membership("),
    premiumMigration.indexOf("-- Provider webhook application"),
  );
  assert.match(revoke, /membership_revoked/);
  assert.match(revoke, /status = 'revoked'/);
  assert.match(revoke, /admin_audit_log/);
});

test("premium lesson bodies are protected by RLS and grading guards", () => {
  assert.match(
    premiumMigration,
    /drop policy "published_lessons_public_select" on public\.published_lessons/,
  );
  assert.match(
    premiumMigration,
    /create policy "published_lessons_free_or_entitled_select"[\s\S]{0,400}?courses\.premium = false[\s\S]{0,120}?courses\.level not in \('C1', 'C2'\)/,
  );
  assert.match(
    premiumMigration,
    /create policy "published_lessons_free_or_entitled_select"[\s\S]{0,500}?public\.current_user_has_active_membership\(\)/,
  );

  const grading = premiumMigration.slice(
    premiumMigration.indexOf(
      "create or replace function public.grade_published_lesson_quiz(",
    ),
    premiumMigration.indexOf("-- Administrator membership management"),
  );
  assert.match(grading, /security definer/);
  assert.match(grading, /has_active_membership\(auth\.uid\(\)\)/);
  assert.match(grading, /errcode = '42501'/);

  const completion = premiumMigration.slice(
    premiumMigration.indexOf("create or replace function public.mark_lesson_complete("),
    premiumMigration.indexOf('drop policy "published_lessons_public_select"'),
  );
  assert.match(completion, /current_user_has_active_membership\(\)/);
  assert.match(completion, /errcode = '42501'/);
});

test("payment events are idempotent and only the service role can apply them", () => {
  assert.match(
    premiumMigration,
    /constraint payment_events_provider_event_key[\s\S]{0,80}?unique \(provider, provider_event_id\)/,
  );
  assert.match(
    premiumMigration,
    /on conflict \(provider, provider_event_id\) do nothing/,
  );
  assert.match(premiumMigration, /if v_event_id is null then\s+return false;/);
  assert.match(
    premiumMigration,
    /grant execute on function public\.process_membership_event\([\s\S]{0,400}?\) to service_role/,
  );
  assert.doesNotMatch(
    premiumMigration,
    /grant execute on function public\.process_membership_event\([\s\S]{0,400}?to (anon|authenticated)/,
  );
  assert.match(premiumMigration, /constraint payment_events_detail_check/);
});

test("lesson rendering and server actions enforce access before loading content", () => {
  const page = source(
    "src/app/courses/[slug]/lessons/[lessonSlug]/page.tsx",
  );
  assert.match(page, /getPremiumAccess/);
  assert.match(page, /const allowed = courseHasAccess\(course, access\.active\)/);
  assert.match(page, /if \(allowed\) \{/);
  assert.match(page, /locked \? \(\s*<LessonLocked/);

  const actions = source("src/lib/progress/actions.ts");
  assert.match(actions, /async function checkLessonAccess/);
  assert.match(actions, /status: "premium-required"/);
  assert.match(actions, /if \(!isPremiumCourse\(course\)\) \{\s*return \{ ok: true \}/);
  assert.match(actions, /await checkLessonAccess\(/);

  const quiz = source("src/components/lessons/lesson-quiz.tsx");
  assert.match(quiz, /"premium-required"/);
  const completion = source("src/components/lessons/lesson-completion-button.tsx");
  assert.match(completion, /"premium-required"/);
});

test("checkout uses only server configuration and no client amount", () => {
  const checkout = source("src/lib/premium/checkout.ts");
  assert.match(checkout, /getPaymentsConfig\(\)/);
  assert.match(checkout, /amount: config\.priceAmount/);
  assert.match(checkout, /currency: config\.priceCurrency/);
  assert.doesNotMatch(checkout, /formData|request\.body/);

  const action = source("src/lib/premium/actions.ts");
  assert.match(action, /export async function startCheckoutAction\(\)/);
  assert.match(action, /getPaymentsDisplay\(\)\.checkoutReady/);
  assert.match(action, /fetchMembershipSnapshot\(supabase\)/);
  assert.match(action, /redirect\(result\.url\)/);
  assert.doesNotMatch(action, /formData\.get/);

  const page = source("src/app/premium/page.tsx");
  assert.match(page, /display\.checkoutReady && access\.signedIn/);
  assert.match(page, /PremiumCheckoutButton/);
  assert.match(page, /A success page alone never unlocks lessons/);
});

test("webhook route verifies the signature before using the service role", () => {
  const route = source("src/app/api/premium/webhook/route.ts");
  const verifyIndex = route.indexOf("verifyWebhookSignature(");
  const rpcIndex = route.indexOf("process_membership_event");

  assert.ok(verifyIndex !== -1, "webhook must verify signatures");
  assert.ok(rpcIndex > verifyIndex, "verification must precede the RPC");
  assert.match(route, /x-payments-signature/);
  assert.match(route, /MAX_BODY_BYTES/);
  assert.match(route, /duplicate: data === false/);
  assert.doesNotMatch(route, /console\.log|rawBody.*console/);

  const admin = source("src/lib/supabase/admin.ts");
  assert.match(admin, /SUPABASE_SERVICE_ROLE_KEY/);
  assert.match(admin, /persistSession: false/);

  const clientFiles = [
    "src/components/premium/premium-checkout-button.tsx",
    "src/app/premium/page.tsx",
  ];
  for (const path of clientFiles) {
    assert.doesNotMatch(source(path), /SERVICE_ROLE|serviceRoleKey/);
  }
});

test("premium setup is documented without inventing a live provider", () => {
  const docs = source("docs/premium-payments-setup.md");
  assert.match(docs, /provider-independent/i);
  assert.match(docs, /Pakistani/i);
  assert.match(docs, /not configured/i);
  assert.match(docs, /x-payments-signature/i);
  assert.match(docs, /process_membership_event/);

  const env = source(".env.example");
  assert.match(env, /PAYMENTS_PROVIDER=generic/);
  assert.match(env, /PAYMENTS_PRICE_AMOUNT=900/);
  assert.doesNotMatch(env, /sk_live_|sk_test_|eyJhbGciOi/);
});
