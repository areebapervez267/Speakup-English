# Marketing tracking setup (Supabase)

Phase 10 adds an **anonymous** funnel counter to the free level test so a video,
a WhatsApp Status slide or a TikTok bio link can be judged by numbers instead of
by feel. It answers three questions per platform: how many people arrived, how
many pressed Start, how many saw a result.

No payment details, paid add-on, custom domain or service-role key are needed.
The Free tier is enough.

---

## 1. What is collected — and what is not

| Stored | Not stored |
| --- | --- |
| One of three events: `visit`, `start`, `complete` | Name, email, account |
| A source slug, e.g. `tiktok`, `whatsapp`, `direct` | IP address, user agent, device |
| An optional campaign slug from `?utm_campaign=` | Answers, score or CEFR result |
| A timestamp | Any identifier that links two visits of the same person |

Scoring still happens entirely inside the visitor's browser. `marketing_events`
is a counter, not a record of people, which is also why the row cannot be traced
back to an individual.

## 2. Apply the migration

File: `supabase/migrations/20261031120000_create_marketing_events.sql`

1. Open the Supabase dashboard for the SpeakUp project.
2. **SQL Editor → New query**.
3. Paste the whole file and **Run**. It is safe to run once; it uses plain
   `create table` / `create policy` and will report an error rather than
   duplicating anything if run twice.
4. It depends only on `public.is_admin()` from
   `20261026120000_create_admin_roles_and_audit.sql`, so the admin migrations
   must already be applied (they are, on the live project).

Verified order: this is migration **11** in
[migration-order.md](./migration-order.md), enforced by
`npm run test:migrations`.

## 3. How access is controlled

| Role | insert | select | update / delete |
| --- | --- | --- | --- |
| `anon` (a visitor) | allowed | denied | denied |
| `authenticated` (a student) | allowed | denied | denied |
| Administrator (`is_admin()`) | allowed | allowed | denied through the API |

`REVOKE ALL` is issued first, then only `INSERT` to `anon, authenticated` and
`SELECT` to `authenticated` are granted back. The `SELECT` policy is
`using (public.is_admin())`, so a signed-in student still reads zero rows.

Writes go through one door only: `POST /api/traffic`. The browser never touches
the table. That endpoint refuses any event that is not `visit`, `start` or
`complete`, coerces the source into `[a-z0-9][a-z0-9_-]{0,39}`, and keeps a
120-events-per-minute budget per address. The table itself repeats those limits
as `CHECK` constraints, so even a hand-written request cannot store free text.

## 4. Tagging the links

A plain link is counted as `direct`. To credit a platform, append `?src=`:

```text
https://<your-site>/level-test?src=tiktok
https://<your-site>/level-test?src=whatsapp
https://<your-site>/level-test?src=shorts
https://<your-site>/level-test?src=instagram&utm_campaign=level-reel-1
```

Accepted spellings — all of these become `tiktok`: `?src=TikTok`,
`?src=tiktok.com`, `?src=https://www.tiktok.com/@areeba.techmed`, `?utm_source=tiktok`,
`?ref=tiktok`.

Rules the code follows:

- An explicit tag always wins and is remembered on that device for 30 days, so a
  visitor who returns tomorrow without a tag is still credited to the video that
  brought them the first time.
- No tag at all falls back to the referring site (`google`, `facebook`,
  `wa.me` → `whatsapp`), then to `referral` for an unknown site, then `direct`.
- Navigating inside the site is never counted as new traffic.
- The result page's own WhatsApp share button tags its link `src=share`, so
  student-to-student sharing shows up as its own row.

The exact links to paste are listed with copy buttons on **/admin → Marketing
tracker**.

## 5. Reading the numbers

`/admin` shows a **Marketing tracker** panel: arrivals, started and finished for
the last 14 days, counted in **Pakistan time** (a visitor at 11 pm Karachi is not
filed under the next day just because UTC rolled over), broken down by source and
by campaign tag.

Before the migration is applied the panel says the tracker is not set up yet and
everything else on the page keeps working. If the table is missing, `POST
/api/traffic` still returns a success response so the level test is never
affected — the counts simply do not exist yet.

## 6. Honest limits

- **Counts are not unique people.** One person who opens the test three times on
  three days is three arrivals. `visit` is de-duplicated per browser tab, not per
  human.
- **Ad blockers and DuckDuckGo-style browsers block the request.** Real arrivals
  are therefore somewhat higher than what the panel shows.
- **Instagram and TikTok in-app browsers** usually strip `document.referrer`, so
  an untagged link pasted there reads as `direct`. Always use the tagged link.
- **Anyone can inflate the counter** — that is the price of counting anonymous
  visitors without a service-role key. It is insert-only, capped per address and
  constrained to three known values, but a determined person could still add
  noise. Treat a sudden spike from one source as suspicious, not as success.
- Nothing is deleted automatically. When the table grows, an administrator can
  `delete from public.marketing_events where created_at < now() - interval '180 days';`

## 7. Verification performed

- `npm run test:traffic` — 12 tests covering tag parsing, referrer mapping, the
  insert-only payload guard, the rate budget, Pakistan day boundaries and the
  funnel maths.
- `npm run test:migrations` — this migration is number 11 and every object it
  references is defined in an earlier file.
- `npm run lint` and `npm run build`.

Not verified here: the live insert against a real Supabase project, and the
`/admin` panel with real rows — both need the migration applied on the live
project first.
