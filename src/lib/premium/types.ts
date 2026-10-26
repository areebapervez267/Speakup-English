export const MEMBERSHIP_STATUSES = [
  "pending",
  "active",
  "past_due",
  "cancelled",
  "expired",
  "refunded",
  "revoked",
] as const;

export type MembershipStatus = (typeof MEMBERSHIP_STATUSES)[number];

export type MembershipSource = "provider" | "admin";

export type MembershipSnapshot = {
  tier: "premium";
  status: MembershipStatus;
  source: MembershipSource;
  activatedAt: string | null;
  currentPeriodEnd: string | null;
  cancelledAt: string | null;
  isActive: boolean;
};

export type PremiumAccess = {
  state: "unconfigured" | "signed-out" | "ready" | "unavailable";
  signedIn: boolean;
  active: boolean;
  membership: MembershipSnapshot | null;
  schemaReady: boolean;
  message?: string;
};

export type CheckoutActionState =
  | { status: "idle" }
  | { status: "signed-out"; message: string }
  | { status: "unconfigured"; message: string }
  | { status: "error"; message: string };

export const initialCheckoutActionState: CheckoutActionState = {
  status: "idle",
};

export function isMembershipStatus(value: unknown): value is MembershipStatus {
  return (
    typeof value === "string" &&
    (MEMBERSHIP_STATUSES as readonly string[]).includes(value)
  );
}

export function isMembershipSource(value: unknown): value is MembershipSource {
  return value === "provider" || value === "admin";
}
