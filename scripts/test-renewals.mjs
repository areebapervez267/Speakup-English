import test from "node:test";
import assert from "node:assert/strict";

import {
  RENEWAL_WINDOW_DAYS,
  buildRenewalReport,
  describeRenewal,
  daysUntil,
} from "../src/lib/premium/renewals.ts";

const NOW = new Date("2026-10-30T09:00:00.000Z");

function iso(daysFromNow, hours = 0) {
  return new Date(NOW.getTime() + (daysFromNow * 24 + hours) * 60 * 60 * 1000).toISOString();
}

function row(overrides = {}) {
  return {
    id: "m-1",
    userId: "u-1",
    email: "student@example.com",
    tier: "premium",
    status: "active",
    source: "admin",
    provider: null,
    activatedAt: iso(-20),
    currentPeriodEnd: iso(10),
    cancelledAt: null,
    grantedByEmail: "admin@example.com",
    note: "",
    isActive: true,
    createdAt: iso(-20),
    updatedAt: iso(-20),
    ...overrides,
  };
}

test("an empty membership list produces an empty report", () => {
  const report = buildRenewalReport([], NOW);
  assert.deepEqual(report.dueSoon, []);
  assert.deepEqual(report.overdue, []);
  assert.equal(report.healthyCount, 0);
  assert.equal(report.untrackedCount, 0);
  assert.equal(report.windowDays, RENEWAL_WINDOW_DAYS);
});

test("daysUntil rounds a partial day up and rejects junk", () => {
  assert.equal(daysUntil(iso(5), NOW), 5);
  assert.equal(daysUntil(iso(0, 5), NOW), 1);
  assert.equal(daysUntil(iso(-2, -5), NOW), -2);
  assert.equal(daysUntil(null, NOW), null);
  assert.equal(daysUntil("not a date", NOW), null);
});

test("members inside the window land in dueSoon, outside stay healthy", () => {
  const report = buildRenewalReport(
    [
      row({ id: "edge", currentPeriodEnd: iso(RENEWAL_WINDOW_DAYS) }),
      row({ id: "past", currentPeriodEnd: iso(RENEWAL_WINDOW_DAYS + 1) }),
    ],
    NOW,
  );

  assert.deepEqual(
    report.dueSoon.map((item) => item.id),
    ["edge"],
  );
  assert.equal(report.healthyCount, 1);
  assert.equal(report.dueSoon[0].daysLeft, RENEWAL_WINDOW_DAYS);
});

test("a period ending in a few hours still counts as one day left", () => {
  const report = buildRenewalReport(
    [row({ currentPeriodEnd: iso(0, 5) })],
    NOW,
  );

  assert.equal(report.dueSoon.length, 1);
  assert.equal(report.dueSoon[0].daysLeft, 1);
  assert.equal(describeRenewal(report.dueSoon[0]), "Renews in 1 day");
});

test("past_due members are tracked, cancelled and revoked ones are not", () => {
  const report = buildRenewalReport(
    [
      row({ id: "due", status: "past_due", currentPeriodEnd: iso(3) }),
      row({ id: "cancelled", status: "cancelled", currentPeriodEnd: iso(3) }),
      row({ id: "revoked", status: "revoked", currentPeriodEnd: iso(-1) }),
      row({ id: "expired", status: "expired", currentPeriodEnd: iso(-4) }),
    ],
    NOW,
  );

  assert.deepEqual(
    report.dueSoon.map((item) => item.id),
    ["due"],
  );
  assert.deepEqual(report.overdue, []);
  assert.equal(report.untrackedCount, 3);
});

test("lapsed access is reported as overdue with a plain-language label", () => {
  const report = buildRenewalReport(
    [
      row({ id: "late", currentPeriodEnd: iso(-1), isActive: false }),
      row({ id: "later", currentPeriodEnd: iso(-6), isActive: false }),
    ],
    NOW,
  );

  assert.deepEqual(
    report.overdue.map((item) => item.id),
    ["later", "late"],
  );
  assert.equal(describeRenewal(report.overdue[0]), "Expired 6 days ago");
  assert.equal(describeRenewal(report.overdue[1]), "Expired 1 day ago");
});

test("unpayable rows are counted but never listed for reminders", () => {
  const report = buildRenewalReport(
    [
      row({ id: "no-end", currentPeriodEnd: null }),
      row({ id: "no-email", email: null, currentPeriodEnd: iso(2) }),
      row({ id: "bad-date", currentPeriodEnd: "someday" }),
    ],
    NOW,
  );

  assert.deepEqual(report.dueSoon, []);
  assert.deepEqual(report.overdue, []);
  assert.equal(report.untrackedCount, 3);
});

test("due soon is nearest-date first and overdue is longest-lapsed first", () => {
  const report = buildRenewalReport(
    [
      row({ id: "c", currentPeriodEnd: iso(9) }),
      row({ id: "a", currentPeriodEnd: iso(2) }),
      row({ id: "b", currentPeriodEnd: iso(6) }),
      row({ id: "z", currentPeriodEnd: iso(-8) }),
      row({ id: "y", currentPeriodEnd: iso(-1) }),
    ],
    NOW,
  );

  assert.deepEqual(
    report.dueSoon.map((item) => item.id),
    ["a", "b", "c"],
  );
  assert.deepEqual(
    report.overdue.map((item) => item.id),
    ["z", "y"],
  );
});

test("the reminder window can be shortened for a tighter review", () => {
  const report = buildRenewalReport(
    [
      row({ id: "near", currentPeriodEnd: iso(4) }),
      row({ id: "far", currentPeriodEnd: iso(11) }),
    ],
    NOW,
    7,
  );

  assert.equal(report.windowDays, 7);
  assert.deepEqual(
    report.dueSoon.map((item) => item.id),
    ["near"],
  );
  assert.equal(report.healthyCount, 1);
});

test("describeRenewal covers the zero-day case", () => {
  assert.equal(
    describeRenewal({
      id: "x",
      userId: "u",
      email: "e@example.com",
      currentPeriodEnd: iso(0),
      daysLeft: 0,
    }),
    "Ends today",
  );
  assert.equal(
    describeRenewal({
      id: "x",
      userId: "u",
      email: "e@example.com",
      currentPeriodEnd: iso(3),
      daysLeft: 3,
    }),
    "Renews in 3 days",
  );
});
