import { headers } from "next/headers";

import { certificateVerificationPath } from "./format";

export function normalizeSiteOrigin(value: string | null | undefined) {
  const raw = value?.trim();

  if (!raw) {
    return null;
  }

  try {
    const url = new URL(raw);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.origin
      : null;
  } catch {
    return null;
  }
}

export async function getSiteOrigin() {
  const configured = normalizeSiteOrigin(process.env.NEXT_PUBLIC_SITE_URL);

  if (configured) {
    return configured;
  }

  const headerStore = await headers();
  const origin = normalizeSiteOrigin(headerStore.get("origin"));

  if (origin) {
    return origin;
  }

  const host =
    headerStore.get("x-forwarded-host") ?? headerStore.get("host") ?? "";

  if (!host) {
    return "";
  }

  const protocol =
    headerStore.get("x-forwarded-proto") === "https" ? "https" : "http";

  return normalizeSiteOrigin(`${protocol}://${host}`) ?? "";
}

export async function getCertificateVerificationUrl(certificateId: string) {
  const origin = await getSiteOrigin();
  return `${origin}${certificateVerificationPath(certificateId)}`;
}
