# Premium membership and payments setup (Phase 8)

Status: **not configured**. No payment provider account has been created or
approved, no provider credentials exist in this repository, and the checkout
boundary is disabled until every server-side value below is supplied. The
database migration has been written but **not applied** to a live Supabase
project. Free A1–B2 lessons work without any of this.

The implementation is deliberately **provider-independent**. It defines one
small, documented contract (hosted checkout + signed normalized webhook) so a
provider adapter can be added without changing entitlement, RLS, or lesson
access code.

---

## 1. Why no provider was selected

SpeakUp English's owner is based in **Pakistan**, so merchant eligibility is the
first constraint, before features or fees. This was checked against provider
documentation while implementing Phase 8; it is a summary, not legal or tax
advice. Provider policies and fees change, so confirm each statement against the
provider's current signup flow before committing.

| Provider | Finding at implementation time | Consequence |
| --- | --- | --- |
| Stripe | Does not list Pakistan among supported merchant countries. | Not usable for a Pakistani merchant account. |
| PayPal | Receiving payments requires a supported-country account; Pakistan is not a supported receiving market. | Not usable for collecting payments. |
| Paddle | Merchant of record with broad country coverage, but Pakistan eligibility and payout support were not confirmed. | Possible option only after written confirmation from Paddle. |
| Lemon Squeezy | Publishes Pakistan among payout countries, but merchant approval, product eligibility, and current fees were not confirmed. | Possible option; still requires an approved account and a signed webhook adapter. |
| Safepay / PayFast (Pakistan) | Local Pakistani gateways that support domestic cards and wallets. | Local option; merchant account, KYC, and recurring-billing support must be verified directly. |

No account has been approved, so the app must not claim that it accepts money.
That is why the Premium page shows "Checkout is not open yet" until the
configuration below is complete.

**Costs.** This repository adds no paid dependency. A provider will charge
transaction and possibly monthly fees on real sales; those are separate from
development cost and are not quoted here because they could not be verified
against an approved merchant account.

## 2. What is implemented

### Database

Migration: `supabase/migrations/20261026130000_create_premium_memberships.sql`
(apply after the Phase 7 migrations).

- `public.memberships` stores one entitlement per row:
  user, tier (`premium`), status, source (`provider` or `admin`), provider name,
  provider customer and subscription identifiers, activation time, current
  period end, cancellation time, end time, granting administrator, an
  administrator note, and created/updated timestamps.
  - Statuses: `pending`, `active`, `past_due`, `cancelled`, `expired`,
    `refunded`, `revoked`. Only `active` with a future (or null)
    `current_period_end` grants access.
  - Constraints prevent unknown tiers/statuses/sources, oversized notes or
    provider identifiers, and administrator-sourced rows without a granting
    administrator. A partial unique index allows at most one active membership
    per student; another unique index prevents duplicate provider subscriptions.
  - **No card numbers, CVVs, or other raw card data are stored anywhere.**
- `public.payment_events` is an idempotency and audit log keyed by
  `(provider, provider_event_id)`. Its detail column accepts a small JSON object
  of sanitized identifiers only.
- Students have **no grants and no RLS policies** on either table. They read
  their own safe status through `get_my_membership()`, which omits provider IDs
  and administrator notes. Administrators use `admin_list_memberships()`,
  `admin_lookup_student_email()`, `admin_grant_membership()`, and
  `admin_revoke_membership()`, all of which re-check `public.is_admin()`.
- `process_membership_event(...)` is executable only by `service_role` and is
  called after webhook signature verification. A duplicate event is a no-op.
- Premium lesson bodies: the previous public read policy on
  `published_lessons` is replaced by `published_lessons_free_or_entitled_select`,
  which allows free courses and returns premium rows only when
  `current_user_has_active_membership()` is true. The outline RPC
  `get_published_lesson_outline()` exposes metadata only, never blocks or quiz
  questions, so locked lessons can still be previewed.
- `grade_published_lesson_quiz` and `mark_lesson_complete` raise `42501` for
  premium content without an active membership, so a direct RPC call cannot
  bypass the UI.

### Application

- `src/lib/premium/policy.ts` treats a course as premium when its `premium` flag
  is set **or** its level is C1/C2. A label alone never grants access.
- `src/lib/premium/access.ts` reads the request-scoped membership snapshot.
- Course and lesson pages check access on the server; a locked lesson loads only
  outline metadata and renders a preview. Direct lesson URLs cannot bypass it.
- Progress and quiz server actions repeat the premium check before writing.
- `src/lib/premium/checkout.ts` is server-only. It posts to the configured
  hosted-checkout endpoint with a price taken **only** from server environment
  variables. No browser-supplied amount is accepted.
- `src/app/api/premium/webhook/route.ts` is the only code that uses the service
  role. It verifies the HMAC signature over the exact body before parsing or
  writing, enforces a 64 KB body limit, and never logs payloads or secrets.
- `/premium` renders membership state and opens checkout only when
  `getPaymentsDisplay().checkoutReady` is true and the visitor is signed in.
  `?checkout=success` is a message, not proof of payment; access is granted only
  by a verified webhook.
- `/dashboard` shows active, pending, past-due, cancelled, expired, refunded,
  revoked, and unconfigured states.
- `/admin/memberships` lists entitlements and provides audited complimentary
  grants and revocations. Administrators cannot grant or revoke their own
  membership through the UI, and the database re-checks authorization.

## 3. Checkout contract (provider adapter)

A provider adapter is a server endpoint that accepts a request and returns a
hosted checkout URL. `src/lib/premium/checkout.ts` sends:

```json
{
  "provider": "generic",
  "productId": "premium-c1-c2",
  "price": { "amount": 900, "currency": "USD", "interval": "month" },
  "customer": { "userId": "<uuid>", "email": "<student email>" },
  "metadata": { "userId": "<uuid>", "tier": "premium" },
  "successUrl": "https://your-domain.com/premium?checkout=success",
  "cancelUrl": "https://your-domain.com/premium?checkout=cancelled"
}
```

Request requirements:

- `POST`, JSON, `Authorization: Bearer <PAYMENTS_API_KEY>`.
- The adapter must echo the student's `userId` in its webhook events.
- `amount` is in the currency's minor unit and is always derived from
  `PAYMENTS_PRICE_AMOUNT` on the server.
- The response must be JSON with a hosted URL under `url`, `checkoutUrl`, or the
  same key inside `data`. Only HTTPS (or localhost in development) is accepted.

## 4. Webhook contract

The endpoint is `POST /api/premium/webhook`. It requires
`x-payments-signature: sha256=<hex HMAC-SHA256 of the raw request body>` using
`PAYMENTS_WEBHOOK_SECRET` (minimum 16 characters). A bare hex digest is also
accepted. The signature is checked before the body is parsed or stored.

Normalized event body:

```json
{
  "id": "evt_unique_provider_event_id",
  "type": "subscription.activated",
  "provider": "generic",
  "data": {
    "userId": "11111111-1111-4111-8111-111111111111",
    "tier": "premium",
    "status": "active",
    "customerId": "cus_provider_id",
    "subscriptionId": "sub_provider_id",
    "currentPeriodEnd": "2026-12-01T00:00:00.000Z",
    "cancelledAt": null
  }
}
```

Event types are mapped to statuses as follows:

| Event type | Membership status |
| --- | --- |
| `checkout.completed`, `subscription.activated`, `subscription.renewed`, `payment.succeeded` | `active` |
| `subscription.pending` | `pending` |
| `payment.failed`, `subscription.past_due` | `past_due` |
| `subscription.cancelled`, `subscription.canceled` | `cancelled` |
| `subscription.expired` | `expired` |
| `payment.refunded`, `subscription.refunded` | `refunded` |

`data.status` may also contain a recognized status directly. Unknown event
types, a provider mismatch, a missing or malformed student ID, an unsupported
tier, and invalid timestamps are rejected without writing anything.

Delivery rules:

- The route returns HTTP 200 with `{ received: true }` after a successful write.
  A duplicate delivery returns `{ received: true, duplicate: true }`.
- Invalid signatures return 401; malformed payloads return 400; a database
  failure returns 500 so the provider retries.
- The provider should retry failures and must tolerate duplicates. The
  `(provider, provider_event_id)` unique constraint makes retries safe.
- A provider must translate its own payloads into this shape in its adapter.
  Do not point a provider's raw webhook directly at this route.

## 5. Environment variables

Only the server reads these. Never prefix them with `NEXT_PUBLIC_`. See
`.env.example` for placeholders.

| Name | Purpose |
| --- | --- |
| `PAYMENTS_PROVIDER` | `generic` until a provider adapter is written. |
| `PAYMENTS_CHECKOUT_URL` | Server endpoint that creates a hosted checkout session. |
| `PAYMENTS_API_KEY` | Provider API key, server-only. |
| `PAYMENTS_PRODUCT_ID` | Provider product/plan identifier. |
| `PAYMENTS_INTERVAL` | Billing interval label, default `month`. |
| `PAYMENTS_PRICE_LABEL` | Human-readable price text shown on `/premium`. |
| `PAYMENTS_PRICE_CURRENCY` | ISO 4217 currency, e.g. `USD`. |
| `PAYMENTS_PRICE_AMOUNT` | Positive integer in the currency's minor unit. |
| `PAYMENTS_SUCCESS_URL`, `PAYMENTS_CANCEL_URL` | Optional redirect targets; defaults are built from the site origin. |
| `PAYMENTS_WEBHOOK_SECRET` | HMAC signing secret, at least 16 characters. |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only key used by the webhook route only. |

`getPaymentsDisplay().checkoutReady` is true only when the provider is
`generic`, checkout values are valid, the webhook secret is long enough, and a
service-role key exists. Anything missing keeps checkout closed.

## 6. Applying the database migration

1. Open the Supabase SQL editor for the project (or run the CLI migration).
2. Confirm the Phase 5 and Phase 7 migrations are already applied.
3. Run `supabase/migrations/20261026130000_create_premium_memberships.sql`
   once. It is additive: it creates new tables/functions, replaces two lesson
   policies, and replaces `mark_lesson_complete` and
   `grade_published_lesson_quiz`.
4. Verify:
   - `memberships` and `payment_events` exist with RLS enabled.
   - `get_my_membership`, `get_published_lesson_outline`,
     `current_user_has_active_membership`, and the `admin_*` functions exist.
   - `process_membership_event` is executable by `service_role` only.
5. Grant complimentary access to a test student from `/admin/memberships` and
   confirm the dashboard shows the active state.

Do not run the migration against production until it has been tested on a
staging project.

## 7. Testing without collecting money

Use this order. None of it requires a live provider account.

1. **Free behaviour:** sign in, open A1–B2 lessons, complete one, submit a quiz.
2. **Premium preview:** open a C1 lesson. The outline should render with a lock
   message and no lesson body or quiz questions.
3. **Denial:** request the premium lesson's data and grading RPCs directly; both
   should reject with authorization errors.
4. **Complimentary access:** grant access as an administrator, then confirm the
   same C1 lesson, dashboard panel, and `/premium` show active access.
5. **Expiry and revocation:** revoke access (or set an end date in the past via
   an audited grant) and confirm access returns to locked.
6. **Admin checks:** sign in as a normal student and call each `admin_*` RPC
   directly; every one should fail. Confirm an administrator cannot grant or
   revoke their own membership.
7. **Checkout disabled:** with no `PAYMENTS_*` values set, `/premium` must show
   that checkout is not open and must not render a pay button.
8. **Signed webhook (sandbox only):** with a disposable secret and a test
   student, send a signed event:
   ```bash
   BODY='{"id":"evt_test_1","type":"subscription.activated","provider":"generic","data":{"userId":"<uuid>","tier":"premium","status":"active","subscriptionId":"sub_test","currentPeriodEnd":"2099-01-01T00:00:00.000Z"}}'
   SIG=$(printf '%s' "$BODY" | openssl dgst -sha256 -hmac "your-test-secret" -hex | sed 's/^.* //')
   curl -i -X POST http://localhost:3000/api/premium/webhook \
     -H "content-type: application/json" \
     -H "x-payments-signature: sha256=$SIG" \
     --data "$BODY"
   ```
   Expect `{ "received": true, "duplicate": false }`. Repeat the exact request:
   expect `duplicate: true` and no second membership or event row.
9. **Forged requests:** change one byte of the body, omit the signature, or use
   a wrong secret; each must return 401. Visit
   `/premium?checkout=success` while signed out or without entitlement; it must
   not unlock anything.
10. **Regression:** signup, login, logout, dashboard, lessons, quizzes, admin
    course editing, and the 84 A1 lessons must still work.

`npm run test:premium` covers the pure policy, webhook, configuration, and
migration assertions. It does not prove a live Supabase project or a live
provider works.

## 8. Production checklist

- [ ] A merchant account is approved for a Pakistani business and recurring
      billing is enabled.
- [ ] The provider's hosted checkout supports the configured currency and price.
- [ ] A provider adapter translates events into the contract above.
- [ ] The webhook URL is public HTTPS and the signing secret is stored in the
      hosting provider's secret manager, not in git.
- [ ] `SUPABASE_SERVICE_ROLE_KEY` is set only in the server environment.
- [ ] The migration is applied and RLS is verified on staging.
- [ ] Refund, cancellation, failed-payment, and chargeback flows have been
      tested with provider sandbox tools.
- [ ] The business has documented refund terms, tax handling, and support
      contact information required by the provider.
- [ ] `/premium` shows the real price only after it matches the provider's
      configured price.

No PCI attestation is needed for the card data itself because the browser is
redirected to the provider's hosted page; the app never receives card numbers.
The provider will still require the business to meet its own KYC, refund, and
security requirements.
