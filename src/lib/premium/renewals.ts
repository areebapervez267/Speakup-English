import type { AdminMembershipRow } from "@/lib/admin/types";

/**
 * Renewal watch-list.
 *
 * Premium is billed month by month and opened by hand, so the only thing that
 * loses a paying student is a lapse nobody noticed. This module turns the raw
 * membership rows into two lists an administrator can act on: members whose
 * period ends inside the reminder window, and members whose access has already
 * run out while their record still says they are paying.
 */

export const RENEWAL_WINDOW_DAYS = 14;

export type RenewalItem = {
  id: string;
  userId: string;
  email: string;
  currentPeriodEnd: string;
  daysLeft: number;
};

export type RenewalReport = {
  windowDays: number;
  dueSoon: RenewalItem[];
  overdue: RenewalItem[];
  healthyCount: number;
  untrackedCount: number;
};

/** Statuses that mean "this person is, or should be, paying us". */
const RENEWABLE_STATUSES: readonly string[] = ["active", "past_due"];

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Whole days left before `iso`, rounded up so a period ending in five hours is
 * reported as "1 day left" rather than a confusing "0". Returns null when the
 * value is missing or unreadable.
 */
export function daysUntil(iso: string | null, now: Date): number | null {
  if (!iso) return null;
  const end = new Date(iso);
  if (Number.isNaN(end.getTime())) return null;
  return Math.ceil((end.getTime() - now.getTime()) / DAY_MS);
}

export function buildRenewalReport(
  rows: readonly AdminMembershipRow[],
  now: Date = new Date(),
  windowDays: number = RENEWAL_WINDOW_DAYS,
): RenewalReport {
  const dueSoon: RenewalItem[] = [];
  const overdue: RenewalItem[] = [];
  let healthyCount = 0;
  let untrackedCount = 0;

  for (const row of rows) {
    if (!RENEWABLE_STATUSES.includes(row.status)) {
      untrackedCount += 1;
      continue;
    }

    const daysLeft = daysUntil(row.currentPeriodEnd, now);
    if (daysLeft === null || !row.email) {
      // Paying status with no end date or no address is a data problem, not a
      // renewal, so it is counted but never listed as a reminder.
      untrackedCount += 1;
      continue;
    }

    const item: RenewalItem = {
      id: row.id,
      userId: row.userId,
      email: row.email,
      currentPeriodEnd: row.currentPeriodEnd as string,
      daysLeft,
    };

    if (daysLeft < 0) {
      overdue.push(item);
    } else if (daysLeft <= windowDays) {
      dueSoon.push(item);
    } else {
      healthyCount += 1;
    }
  }

  // Both lists come out ascending by daysLeft: `dueSoon` starts with the
  // renewal that is closest, `overdue` with the lapse that has run longest.
  const bySoonest = (a: RenewalItem, b: RenewalItem) => a.daysLeft - b.daysLeft;

  return {
    windowDays,
    dueSoon: dueSoon.sort(bySoonest),
    overdue: overdue.sort(bySoonest),
    healthyCount,
    untrackedCount,
  };
}

/** "Renews in 3 days" / "Expired 2 days ago" — one label for both lists. */
export function describeRenewal(item: RenewalItem): string {
  if (item.daysLeft < 0) {
    const gone = Math.abs(item.daysLeft);
    return `Expired ${gone} day${gone === 1 ? "" : "s"} ago`;
  }
  if (item.daysLeft === 0) return "Ends today";
  return `Renews in ${item.daysLeft} day${item.daysLeft === 1 ? "" : "s"}`;
}
