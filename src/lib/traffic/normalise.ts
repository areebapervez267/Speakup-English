/**
 * Turning a URL into a countable marketing source.
 *
 * She posts the same level test link on TikTok, WhatsApp Status and YouTube
 * Shorts. A tagged link (`?src=tiktok`) is what tells those audiences apart, so
 * this module is the single place that decides what a visitor's source is — and
 * it is deliberately forgiving about how the tag is written.
 */

export const TRAFFIC_EVENTS = ["visit", "start", "complete"] as const;

export type TrafficEvent = (typeof TRAFFIC_EVENTS)[number];

export type TrafficAttribution = {
  source: string;
  campaign: string | null;
};

export const DIRECT_SOURCE = "direct";
export const REFERRAL_SOURCE = "referral";
export const FALLBACK_SOURCE = "other";

const SOURCE_MAX_LENGTH = 40;
const CAMPAIGN_MAX_LENGTH = 60;

/** Second-level domain → the slug shown on the admin dashboard. */
const KNOWN_HOSTS: Record<string, string> = {
  tiktok: "tiktok",
  instagram: "instagram",
  youtube: "youtube",
  google: "google",
  bing: "bing",
  duckduckgo: "duckduckgo",
  facebook: "facebook",
  messenger: "messenger",
  whatsapp: "whatsapp",
  twitter: "twitter",
  x: "twitter",
  t: "telegram",
  telegram: "telegram",
  snap: "snapchat",
  snapchat: "snapchat",
  linkedin: "linkedin",
  pinterest: "pinterest",
  reddit: "reddit",
  quora: "quora",
  wa: "whatsapp",
  threads: "instagram",
};

/** Hosts whose real domain is not the second level (youtu.be, t.me, wa.me). */
const EXACT_HOSTS: Record<string, string> = {
  "youtu.be": "youtube",
  "t.me": "telegram",
  "wa.me": "whatsapp",
  "threads.net": "instagram",
  "threads.com": "instagram",
};

export function isTrafficEvent(value: unknown): value is TrafficEvent {
  return (
    typeof value === "string" &&
    (TRAFFIC_EVENTS as readonly string[]).includes(value)
  );
}

function hostnameOf(value: string): string | null {
  const candidate = /^[a-z][a-z0-9+.-]*:\/\//i.test(value)
    ? value
    : `https://${value}`;

  try {
    const url = new URL(candidate);
    const host = url.hostname.toLowerCase();
    return /^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(host) ? host : null;
  } catch {
    return null;
  }
}

export function sourceFromHost(host: string): string | null {
  const lower = host.toLowerCase().replace(/^www\./, "");

  if (EXACT_HOSTS[lower]) return EXACT_HOSTS[lower];

  for (const suffix of Object.keys(EXACT_HOSTS)) {
    if (lower.endsWith(`.${suffix}`)) return EXACT_HOSTS[suffix];
  }

  const parts = lower.split(".");
  const second = parts.length >= 2 ? parts[parts.length - 2] : lower;
  const mapped = KNOWN_HOSTS[second] ?? KNOWN_HOSTS[second.toLowerCase()];

  return typeof mapped === "string" ? mapped : null;
}

/**
 * Accepts "TikTok", "tiktok.com", "https://www.tiktok.com/@areeba",
 * "Reel 2" and turns them into tiktok / tiktok / tiktok / reel-2.
 */
export function normaliseSource(raw: unknown): string | null {
  if (typeof raw !== "string") return null;

  let value = raw.trim().toLowerCase();
  if (value.length === 0) return null;

  const host = hostnameOf(value);
  if (host) {
    const mapped = sourceFromHost(host);
    if (mapped) return mapped;
    value = host.replace(/^www\./, "");
  }

  value = value.replace(/^[/@]+/, "");

  const slug = value
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, SOURCE_MAX_LENGTH)
    .replace(/-+$/g, "");

  return slug.length > 0 ? slug : null;
}

export function normaliseCampaign(raw: unknown): string | null {
  if (typeof raw !== "string") return null;

  const slug = raw
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_.:-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, CAMPAIGN_MAX_LENGTH)
    .replace(/-+$/g, "");

  return slug.length > 0 ? slug : null;
}

export type AttributionInput = {
  /** The page's query string, with or without the leading "?". */
  search?: string | null;
  /** document.referrer */
  referrer?: string | null;
  /** location.host of this site, so internal moves are not counted as traffic. */
  ownHost?: string | null;
};

/**
 * The tags written into a marketing link: ?src=tiktok, ?utm_source=... or the
 * short ?ref= form. Returns null when the link carries no tag at all, which is
 * how first-touch attribution knows not to overwrite itself.
 */
export function readTags(
  search?: string | null,
): { source: string | null; campaign: string | null } {
  const params = new URLSearchParams(
    typeof search === "string" ? search.replace(/^\?/, "") : "",
  );

  return {
    source:
      normaliseSource(params.get("src")) ??
      normaliseSource(params.get("utm_source")) ??
      normaliseSource(params.get("ref")),
    campaign:
      normaliseCampaign(params.get("utm_campaign") ?? params.get("cmp")),
  };
}

/**
 * First choice is an explicit tag on the link, then the referring site, then
 * "direct". Anything we cannot place becomes "referral".
 */
export function resolveAttribution({
  search,
  referrer,
  ownHost,
}: AttributionInput): TrafficAttribution {
  const tags = readTags(search);

  if (tags.source) return { source: tags.source, campaign: tags.campaign };

  const campaign = tags.campaign;

  if (typeof referrer === "string" && referrer.trim().length > 0) {
    const host = hostnameOf(referrer);

    if (host) {
      const own = (ownHost ?? "").toLowerCase().replace(/^www\./, "");
      const normalised = host.replace(/^www\./, "");
      if (own.length > 0 && (normalised === own || normalised.endsWith(`.${own}`))) {
        return { source: DIRECT_SOURCE, campaign };
      }
      return { source: sourceFromHost(host) ?? REFERRAL_SOURCE, campaign };
    }
  }

  return { source: DIRECT_SOURCE, campaign };
}

/** Sources that are never worth showing as their own row. */
export function isCountableSource(source: string): boolean {
  return (
    typeof source === "string" &&
    /^[a-z0-9][a-z0-9_-]{0,39}$/.test(source) &&
    source !== "undefined" &&
    source !== "null"
  );
}
