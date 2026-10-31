import {
  isTrafficEvent,
  readTags,
  resolveAttribution,
  type TrafficAttribution,
  type TrafficEvent,
} from "./normalise";

/**
 * Browser side of the marketing counter.
 *
 * The source a visitor arrived with is remembered on their device for 30 days,
 * so someone who taps a TikTok link, closes the tab and comes back tomorrow is
 * still credited to TikTok. Only three anonymous numbers ever leave the device:
 * arrived, started, finished. No answer, no result and no identity is sent.
 */

const STORAGE_KEY = "speakup:traffic";
const SESSION_KEY = "speakup:traffic:sent";
const STICKY_MS = 30 * 24 * 60 * 60 * 1000;
const MAX_COMPLETIONS_PER_SESSION = 2;

type StoredAttribution = TrafficAttribution & { savedAt: number };

function readJson<T>(storage: Storage | null, key: string): T | null {
  if (!storage) return null;
  try {
    const raw = storage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function writeJson(storage: Storage | null, key: string, value: unknown) {
  try {
    storage?.setItem(key, JSON.stringify(value));
  } catch {
    // Private mode or a full quota — counting is never worth breaking the page.
  }
}

function localStorageSafe(): Storage | null {
  try {
    return typeof window === "undefined" ? null : window.localStorage;
  } catch {
    return null;
  }
}

function sessionStorageSafe(): Storage | null {
  try {
    return typeof window === "undefined" ? null : window.sessionStorage;
  } catch {
    return null;
  }
}

/**
 * Which marketing source should be attached to events on this page right now.
 *
 * A tagged link always wins and is remembered. Without a tag, the remembered
 * source is reused; only a first-ever visit falls back to the referrer.
 */
export function captureAttribution(): TrafficAttribution {
  if (typeof window === "undefined") {
    return { source: "direct", campaign: null };
  }

  const storage = localStorageSafe();
  const tags = readTags(window.location.search);

  if (tags.source) {
    const attribution = { source: tags.source, campaign: tags.campaign };
    writeJson(storage, STORAGE_KEY, {
      ...attribution,
      savedAt: Date.now(),
    });
    return attribution;
  }

  const saved = readJson<StoredAttribution>(storage, STORAGE_KEY);

  if (
    saved &&
    typeof saved.source === "string" &&
    typeof saved.savedAt === "number" &&
    Date.now() - saved.savedAt < STICKY_MS
  ) {
    return { source: saved.source, campaign: saved.campaign ?? null };
  }

  const fallback = resolveAttribution({
    referrer: typeof document === "undefined" ? null : document.referrer,
    ownHost: window.location.host,
  });

  writeJson(storage, STORAGE_KEY, { ...fallback, savedAt: Date.now() });
  return fallback;
}

function countsSent(): Record<string, number> {
  return (
    readJson<Record<string, number>>(sessionStorageSafe(), SESSION_KEY) ?? {}
  );
}

function markSent(event: TrafficEvent, current: Record<string, number>) {
  writeJson(sessionStorageSafe(), SESSION_KEY, {
    ...current,
    [event]: (current[event] ?? 0) + 1,
  });
}

/**
 * Send one anonymous count. Never throws and never blocks the page: if the
 * request fails, the level test carries on exactly as before.
 */
export function trackTraffic(event: TrafficEvent): void {
  if (typeof window === "undefined" || !isTrafficEvent(event)) return;

  const sent = countsSent();
  const already = sent[event] ?? 0;

  if (event !== "complete" && already >= 1) return;
  if (event === "complete" && already >= MAX_COMPLETIONS_PER_SESSION) return;

  const attribution = captureAttribution();
  markSent(event, sent);

  let body: string;
  try {
    body = JSON.stringify({
      event,
      source: attribution.source,
      campaign: attribution.campaign,
    });
  } catch {
    return;
  }

  try {
    if (
      typeof navigator === "object" &&
      typeof navigator.sendBeacon === "function"
    ) {
      const delivered = navigator.sendBeacon(
        "/api/traffic",
        new Blob([body], { type: "application/json" }),
      );
      if (delivered) return;
    }

    void fetch("/api/traffic", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
      credentials: "omit",
      keepalive: true,
    }).catch(() => undefined);
  } catch {
    // ignore
  }
}
