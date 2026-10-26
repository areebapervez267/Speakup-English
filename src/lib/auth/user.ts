import { NAME_MAX_LENGTH } from "./validation";

type DisplayUser = {
  email?: string | null;
  user_metadata?: Record<string, unknown> | null;
};

export function getDisplayName(user: DisplayUser) {
  const metadata = user.user_metadata;
  const candidate =
    typeof metadata?.full_name === "string"
      ? metadata.full_name
      : typeof metadata?.name === "string"
        ? metadata.name
        : "";

  const cleaned = candidate.replace(/\s+/g, " ").trim();
  if (cleaned) {
    return cleaned.slice(0, NAME_MAX_LENGTH);
  }

  const emailPrefix = user.email?.split("@")[0]?.trim();
  return emailPrefix ? emailPrefix.slice(0, NAME_MAX_LENGTH) : "Student";
}

export function getInitials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 0) {
    return "S";
  }

  const initials = parts.slice(0, 2).map((part) => Array.from(part)[0] ?? "");
  return initials.join("").toUpperCase();
}

export function formatMemberSince(createdAt?: string) {
  if (!createdAt) {
    return "Not available";
  }

  const date = new Date(createdAt);
  if (Number.isNaN(date.getTime())) {
    return "Not available";
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(date);
}
