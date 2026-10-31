import { Megaphone } from "lucide-react";

import { MarketingLinkBoard } from "@/components/admin/marketing-link-board";
import type { MarketingFunnel } from "@/lib/admin/traffic";
import { cn } from "@/lib/utils";

const SOURCE_LABELS: Record<string, string> = {
  direct: "Typed in or bookmarked",
  referral: "Link from another website",
  share: "Shared by a student",
  tiktok: "TikTok",
  whatsapp: "WhatsApp",
  status: "WhatsApp Status",
  youtube: "YouTube",
  shorts: "YouTube Shorts",
  instagram: "Instagram",
  facebook: "Facebook",
  telegram: "Telegram",
  snapchat: "Snapchat",
  google: "Google search",
  other: "Unlabelled link",
};

function sourceLabel(source: string): string {
  return SOURCE_LABELS[source] ?? source;
}

function formatDay(day: string): string {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      timeZone: "UTC",
    }).format(new Date(`${day}T12:00:00Z`));
  } catch {
    return day;
  }
}

function Tile({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-brand-line bg-white p-4 shadow-sm">
      <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-brand-body">
        {label}
      </p>
      <p className="mt-2 font-display text-3xl font-medium text-brand-navy tabular-nums">
        {value}
      </p>
      <p className="mt-1 text-xs leading-5 text-brand-body">{hint}</p>
    </div>
  );
}

export function MarketingTracker({
  funnel,
  error,
  links,
}: {
  funnel: MarketingFunnel | null;
  error: string | null;
  links: { label: string; href: string; note: string }[];
}) {
  const totals = funnel?.totals ?? {
    arrivals: 0,
    starts: 0,
    completions: 0,
  };
  const finishedShare =
    totals.arrivals > 0
      ? Math.round((totals.completions / totals.arrivals) * 100)
      : 0;
  const window = funnel?.days ?? 14;

  return (
    <section
      aria-labelledby="marketing-tracker-heading"
      className="rounded-2xl border border-brand-line bg-white shadow-sm"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-brand-line px-5 py-4">
        <div>
          <h2
            id="marketing-tracker-heading"
            className="text-lg font-bold text-brand-navy"
          >
            Marketing tracker
          </h2>
          <p className="mt-0.5 text-xs leading-5 text-brand-body">
            Last {window} days, counted in Pakistan time. Anonymous totals only —
            no names, no answers and no result levels are stored.
          </p>
        </div>
        <span className="grid size-9 place-items-center rounded-xl bg-brand-teal-soft text-brand-teal-deep">
          <Megaphone className="size-4" aria-hidden="true" />
        </span>
      </div>

      {error ? (
        <div className="px-5 py-5">
          <p className="text-sm font-semibold text-brand-navy">
            Tracker not reading yet
          </p>
          <p className="mt-1 text-sm leading-6 text-brand-body">{error}</p>
        </div>
      ) : (
        <>
          <div className="grid gap-3 px-5 py-5 sm:grid-cols-3">
            <Tile
              label="Arrivals"
              value={totals.arrivals}
              hint="People who opened the level test"
            />
            <Tile
              label="Started"
              value={totals.starts}
              hint={
                totals.arrivals > 0
                  ? `${Math.round((totals.starts / totals.arrivals) * 100)}% of arrivals pressed Start`
                  : "Nobody has pressed Start yet"
              }
            />
            <Tile
              label="Finished"
              value={totals.completions}
              hint={`${finishedShare}% of arrivals saw a result`}
            />
          </div>

          {totals.arrivals === 0 ? (
            <div className="mx-5 mb-5 rounded-2xl border border-brand-line bg-brand-mist/50 px-4 py-4">
              <p className="text-sm font-semibold text-brand-navy">
                Nothing counted yet — this is the honest starting line
              </p>
              <p className="mt-1 text-sm leading-6 text-brand-body">
                Copy the tagged links below into your bio, Status and captions
                today. Any number that appears here after that came from a post
                you made, which is how you will know which video is working.
              </p>
            </div>
          ) : (
            <div className="px-5 pb-5">
              <h3 className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-body">
                Where visitors came from
              </h3>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full min-w-[34rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-brand-line text-left text-[0.66rem] font-bold uppercase tracking-[0.08em] text-brand-body">
                      <th scope="col" className="py-2 pr-3">
                        Source
                      </th>
                      <th scope="col" className="py-2 pr-3 text-right">
                        Arrivals
                      </th>
                      <th scope="col" className="py-2 pr-3 text-right">
                        Started
                      </th>
                      <th scope="col" className="py-2 pr-3 text-right">
                        Finished
                      </th>
                      <th scope="col" className="py-2 text-right">
                        Finished rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-line">
                    {funnel?.sources.map((row) => (
                      <tr key={row.source}>
                        <th
                          scope="row"
                          className="py-2 pr-3 text-left font-semibold text-brand-navy"
                        >
                          {sourceLabel(row.source)}
                        </th>
                        <td className="py-2 pr-3 text-right tabular-nums text-brand-body">
                          {row.arrivals}
                        </td>
                        <td className="py-2 pr-3 text-right tabular-nums text-brand-body">
                          {row.starts}
                        </td>
                        <td className="py-2 pr-3 text-right tabular-nums text-brand-body">
                          {row.completions}
                        </td>
                        <td
                          className={cn(
                            "py-2 text-right tabular-nums font-semibold",
                            row.completionRate >= 40
                              ? "text-brand-teal-deep"
                              : "text-brand-body",
                          )}
                        >
                          {row.completionRate}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {funnel && funnel.campaigns.length > 0 ? (
                <div className="mt-5">
                  <h3 className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-body">
                    Campaign tags
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {funnel.campaigns.map((campaign) => (
                      <li
                        key={campaign.campaign}
                        className="rounded-full border border-brand-line bg-brand-mist px-3 py-1.5 text-xs text-brand-navy"
                      >
                        <span className="font-semibold">{campaign.campaign}</span>{" "}
                        · {campaign.arrivals} arrived · {campaign.completions}{" "}
                        finished
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-5">
                <h3 className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-body">
                  Day by day
                </h3>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {funnel?.daily
                    .slice()
                    .reverse()
                    .map((day) => (
                      <li
                        key={day.day}
                        className="flex items-center justify-between gap-3 rounded-xl border border-brand-line bg-brand-mist/40 px-3 py-2 text-xs"
                      >
                        <span className="font-semibold text-brand-navy">
                          {formatDay(day.day)}
                        </span>
                        <span className="tabular-nums text-brand-body">
                          {day.arrivals} arrived · {day.starts} started ·{" "}
                          {day.completions} finished
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          )}
        </>
      )}

      <div className="border-t border-brand-line">
        <div className="px-5 py-4">
          <h3 className="text-sm font-bold text-brand-navy">
            Links to paste into each platform
          </h3>
          <p className="mt-1 text-xs leading-5 text-brand-body">
            Use these exact links. The <code className="font-mono">?src=</code>{" "}
            part is what tells the counts apart — a plain link all lands under
            “Typed in or bookmarked”.
          </p>
        </div>
        <MarketingLinkBoard links={links} />
      </div>
    </section>
  );
}
