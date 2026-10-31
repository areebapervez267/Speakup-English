import test from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";

// These modules import each other with extensionless and "@/..." specifiers,
// which only the workspace loader understands outside of Next.
await register("./alias-loader.mjs", import.meta.url);

const {
  normaliseCampaign,
  normaliseSource,
  resolveAttribution,
  sourceFromHost,
  readTags,
  isTrafficEvent,
} = await import("../src/lib/traffic/normalise.ts");
const { normaliseIngest } = await import("../src/lib/traffic/ingest.ts");
const { checkRate, EVENT_LIMIT_PER_WINDOW } = await import(
  "../src/lib/traffic/rate.ts"
);
const {
  dayKey,
  summariseFunnel,
  toMarketingEventRecord,
} = await import("../src/lib/admin/traffic.ts");

test("?src= is read in every shape she is likely to paste", () => {
  assert.equal(normaliseSource("TikTok"), "tiktok");
  assert.equal(normaliseSource("tiktok.com"), "tiktok");
  assert.equal(
    normaliseSource("https://www.tiktok.com/@areeba.techmed"),
    "tiktok",
  );
  assert.equal(normaliseSource("Reel 2"), "reel-2");
  assert.equal(normaliseSource("level-test"), "level-test");
  assert.equal(normaliseSource("   "), null);
  assert.equal(normaliseSource("............."), null);
  assert.equal(normaliseSource(undefined), null);
  assert.equal(normaliseSource(42), null);
});

test("long tags are cut to what the database will accept", () => {
  const slug = normaliseSource(`src-${"a".repeat(80)}`);
  assert.ok(slug && slug.length <= 40, `got ${slug?.length}`);
  const campaign = normaliseCampaign("c".repeat(120));
  assert.ok(campaign && campaign.length <= 60, `got ${campaign?.length}`);
});

test("referring hosts become platform names", () => {
  assert.equal(sourceFromHost("www.tiktok.com"), "tiktok");
  assert.equal(sourceFromHost("m.facebook.com"), "facebook");
  assert.equal(sourceFromHost("web.whatsapp.com"), "whatsapp");
  assert.equal(sourceFromHost("wa.me"), "whatsapp");
  assert.equal(sourceFromHost("youtu.be"), "youtube");
  assert.equal(sourceFromHost("t.me"), "telegram");
  assert.equal(sourceFromHost("x.com"), "twitter");
  assert.equal(sourceFromHost("l.instagram.com"), "instagram");
  assert.equal(sourceFromHost("some-unknown-site.example"), null);
});

test("attribution prefers the tag, then the referrer, then direct", () => {
  assert.deepEqual(
    resolveAttribution({
      search: "?src=tiktok&utm_campaign=level-reel-1",
      referrer: "https://google.com/url?q=x",
      ownHost: "speakup-english-pwv7.vercel.app",
    }),
    { source: "tiktok", campaign: "level-reel-1" },
  );

  assert.deepEqual(
    resolveAttribution({
      search: "",
      referrer: "https://l.instagram.com/",
      ownHost: "speakup-english-pwv7.vercel.app",
    }),
    { source: "instagram", campaign: null },
  );

  assert.deepEqual(
    resolveAttribution({
      search: "",
      referrer: "https://blog.example.org/post",
      ownHost: "speakup-english-pwv7.vercel.app",
    }),
    { source: "referral", campaign: null },
  );

  assert.deepEqual(
    resolveAttribution({
      search: "",
      referrer: "https://speakup-english-pwv7.vercel.app/courses",
      ownHost: "speakup-english-pwv7.vercel.app",
    }),
    { source: "direct", campaign: null },
  );

  assert.deepEqual(resolveAttribution({}), {
    source: "direct",
    campaign: null,
  });
});

test("an untagged link is not a tag", () => {
  assert.deepEqual(readTags("?utm_medium=video"), {
    source: null,
    campaign: null,
  });
  assert.deepEqual(readTags("src=whatsapp"), {
    source: "whatsapp",
    campaign: null,
  });
});

test("the collector endpoint stores nothing it did not ask for", () => {
  assert.deepEqual(
    normaliseIngest({ event: "visit", source: "WhatsApp", campaign: null }),
    { source: "whatsapp", campaign: null, event: "visit" },
  );

  assert.deepEqual(normaliseIngest({ event: "complete", source: 12345 }), {
    source: "other",
    campaign: null,
    event: "complete",
  });

  assert.equal(normaliseIngest({ event: "drop_table", source: "tiktok" }), null);
  assert.equal(normaliseIngest(null), null);
  assert.equal(normaliseIngest("tiktok"), null);
  assert.equal(normaliseIngest([{ event: "visit" }]), null);
  assert.equal(isTrafficEvent("start"), true);
  assert.equal(isTrafficEvent("delete"), false);
});

test("spam is refused once an address exceeds its budget", () => {
  const start = Date.parse("2026-10-31T09:00:00Z");
  let bucket;

  for (let index = 0; index < EVENT_LIMIT_PER_WINDOW; index += 1) {
    const decision = checkRate(bucket, start);
    assert.equal(decision.allowed, true, `event ${index}`);
    bucket = decision.bucket;
  }

  assert.equal(checkRate(bucket, start).allowed, false);
  // The window rolls over after a minute.
  assert.equal(checkRate(bucket, start + 61_000).allowed, true);
});

test("days are counted in Pakistan time", () => {
  // 19:30 UTC is 00:30 the next day in Karachi.
  assert.equal(dayKey("2026-10-30T19:30:00Z"), "2026-10-31");
  assert.equal(dayKey("2026-10-30T18:30:00Z"), "2026-10-30");
  assert.equal(dayKey("not a date"), "");
});

test("a row without a usable shape is dropped, not guessed", () => {
  assert.deepEqual(
    toMarketingEventRecord({
      source: "tiktok",
      campaign: null,
      event: "visit",
      created_at: "2026-10-31T09:00:00Z",
    }),
    { source: "tiktok", campaign: null, event: "visit", createdAt: "2026-10-31T09:00:00Z" },
  );

  assert.equal(
    toMarketingEventRecord({ source: "", event: "visit", created_at: "2026-10-31T09:00:00Z" }),
    null,
  );
  assert.equal(
    toMarketingEventRecord({ source: "tiktok", event: "nope", created_at: "2026-10-31T09:00:00Z" }),
    null,
  );
  assert.equal(
    toMarketingEventRecord({ source: "tiktok", event: "visit", created_at: "yesterday" }),
    null,
  );
});

test("the funnel counts arrivals, starts and finishes per source", () => {
  const now = new Date("2026-10-31T10:00:00Z");
  const records = [
    { source: "tiktok", campaign: "reel-1", event: "visit", createdAt: "2026-10-31T06:00:00Z" },
    { source: "tiktok", campaign: "reel-1", event: "start", createdAt: "2026-10-31T06:01:00Z" },
    { source: "tiktok", campaign: "reel-1", event: "complete", createdAt: "2026-10-31T06:04:00Z" },
    { source: "whatsapp", campaign: null, event: "visit", createdAt: "2026-10-31T06:30:00Z" },
    { source: "whatsapp", campaign: null, event: "start", createdAt: "2026-10-31T06:31:00Z" },
    { source: "direct", campaign: null, event: "visit", createdAt: "2026-10-30T06:00:00Z" },
  ].map((row) => ({ ...row }));

  const funnel = summariseFunnel({ records, now, days: 3 });

  assert.equal(funnel.days, 3);
  assert.deepEqual(funnel.totals, {
    arrivals: 3,
    starts: 2,
    completions: 1,
  });
  assert.equal(funnel.daily.length, 3);

  const tiktok = funnel.sources.find((row) => row.source === "tiktok");
  assert.deepEqual(
    { arrivals: tiktok.arrivals, starts: tiktok.starts, completions: tiktok.completions },
    { arrivals: 1, starts: 1, completions: 1 },
  );
  assert.equal(tiktok.startRate, 100);
  assert.equal(tiktok.completionRate, 100);

  const whatsapp = funnel.sources.find((row) => row.source === "whatsapp");
  assert.equal(whatsapp.completionRate, 0);
  assert.equal(whatsapp.startRate, 100);

  // Busiest source first.
  assert.equal(funnel.sources[0].source, "tiktok");

  assert.deepEqual(funnel.campaigns, [
    { campaign: "reel-1", arrivals: 1, starts: 1, completions: 1 },
  ]);
});

test("rows outside the window and from the future are ignored", () => {
  const now = new Date("2026-10-31T10:00:00Z");
  const funnel = summariseFunnel({
    records: [
      { source: "tiktok", campaign: null, event: "visit", createdAt: "2026-01-01T00:00:00Z" },
      { source: "whatsapp", campaign: null, event: "visit", createdAt: "2027-01-01T00:00:00Z" },
    ],
    now,
    days: 7,
  });

  assert.deepEqual(funnel.totals, { arrivals: 0, starts: 0, completions: 0 });
  assert.deepEqual(funnel.sources, []);
  assert.equal(funnel.daily.length, 7);
  assert.equal(funnel.daily.at(-1).day, "2026-10-31");
});

test("a day that straddles midnight in Karachi lands on the right date", () => {
  const now = new Date("2026-10-31T10:00:00Z");
  const funnel = summariseFunnel({
    records: [
      // 2026-10-30T19:30Z is already 2026-10-31 00:30 in Pakistan.
      { source: "tiktok", campaign: null, event: "visit", createdAt: "2026-10-30T19:30:00Z" },
    ],
    now,
    days: 2,
  });

  const today = funnel.daily.find((row) => row.day === "2026-10-31");
  assert.equal(today.arrivals, 1);
});
