import {
  FALLBACK_SOURCE,
  isTrafficEvent,
  normaliseCampaign,
  normaliseSource,
  type TrafficEvent,
} from "./normalise";

export type MarketingEventRow = {
  source: string;
  campaign: string | null;
  event: TrafficEvent;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

/**
 * The only shape the collection endpoint is willing to store. Anything the
 * browser sends that is not one of the three events, or not a short lowercase
 * slug, is refused here rather than reaching the database.
 */
export function normaliseIngest(payload: unknown): MarketingEventRow | null {
  if (!isRecord(payload)) return null;
  if (!isTrafficEvent(payload.event)) return null;

  return {
    source: normaliseSource(payload.source) ?? FALLBACK_SOURCE,
    campaign: normaliseCampaign(payload.campaign),
    event: payload.event,
  };
}
