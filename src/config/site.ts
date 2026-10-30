const fallbackSiteUrl = "https://speakup-english-pwv7.vercel.app";

/**
 * Public origin used for canonical URLs, sitemaps, robots and structured data.
 * Set NEXT_PUBLIC_SITE_URL in the hosting environment once a custom domain is
 * connected so every signal follows it automatically.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl
).replace(/\/+$/, "");

/** Turns a root-relative path into the absolute URL search engines should treat as canonical. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) {
    return path.replace(/\/+$/, "");
  }

  const suffix = path.startsWith("/") ? path : `/${path}`;
  const joined = `${siteUrl}${suffix}`;

  return (joined.replace(/\/+$/, "") || siteUrl) as string;
}
