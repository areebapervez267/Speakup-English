import type {
  MembershipStatus,
  PremiumAccess,
} from "./types";

export const MEMBERSHIP_STATUS_LABELS: Record<MembershipStatus, string> = {
  pending: "Payment pending",
  active: "Active",
  past_due: "Payment past due",
  cancelled: "Cancelled",
  expired: "Expired",
  refunded: "Refunded",
  revoked: "Revoked",
};

export type MembershipTone =
  | "active"
  | "pending"
  | "inactive"
  | "unavailable"
  | "guest"
  | "unconfigured";

export type MembershipSummary = {
  tone: MembershipTone;
  label: string;
  description: string;
};

export function formatMembershipDate(value: string | null): string | null {
  if (!value) {
    return null;
  }

  try {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeZone: "UTC",
    }).format(new Date(value));
  } catch {
    return null;
  }
}

export function membershipSummary(access: PremiumAccess): MembershipSummary {
  if (access.state === "unconfigured") {
    return {
      tone: "unconfigured",
      label: "Payments not configured",
      description:
        "Premium payments are not enabled in this environment yet. Free A1–B2 courses remain available.",
    };
  }

  if (access.state === "signed-out") {
    return {
      tone: "guest",
      label: "Not signed in",
      description:
        "Sign in to check whether your account has an active Premium membership.",
    };
  }

  if (access.state === "unavailable") {
    return {
      tone: "unavailable",
      label: "Membership unavailable",
      description:
        access.message ??
        "We couldn't check your membership right now. Refresh the page to try again.",
    };
  }

  const membership = access.membership;

  if (!membership) {
    return {
      tone: "inactive",
      label: "No membership",
      description:
        "No Premium membership is linked to this account. A1–B2 courses are always free.",
    };
  }

  const label = MEMBERSHIP_STATUS_LABELS[membership.status];

  switch (membership.status) {
    case "active":
      return {
        tone: "active",
        label,
        description:
          membership.source === "admin"
            ? "Complimentary Premium access granted by an administrator."
            : "Your Premium membership is active and includes the C1 and C2 library.",
      };
    case "pending":
      return {
        tone: "pending",
        label,
        description:
          "Your payment has not been confirmed yet. Premium lessons open after the payment provider confirms the subscription.",
      };
    case "past_due":
      return {
        tone: "pending",
        label,
        description:
          "Your last payment could not be completed. Update your payment method with the provider to restore access.",
      };
    case "cancelled":
      return {
        tone: "inactive",
        label,
        description:
          "This membership was cancelled and no longer includes Premium lessons.",
      };
    case "expired":
      return {
        tone: "inactive",
        label,
        description:
          "This membership has expired. Renew it to reopen the C1 and C2 courses.",
      };
    case "refunded":
      return {
        tone: "inactive",
        label,
        description:
          "This membership was refunded and no longer grants Premium access.",
      };
    case "revoked":
      return {
        tone: "inactive",
        label,
        description:
          "An administrator revoked this membership. Contact support if this was unexpected.",
      };
  }
}
