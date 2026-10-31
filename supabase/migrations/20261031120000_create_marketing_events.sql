-- Phase 10: anonymous marketing counts for the free level test.
--
-- These rows answer one question: is a video, a WhatsApp status or a TikTok bio
-- link actually bringing people to /level-test? Each row is a single anonymous
-- event ("someone arrived from tiktok", "someone started the test", "someone
-- finished the test").
--
-- There is deliberately no user id, no email, no IP address, no answer data and
-- no test result stored here. The level test keeps scoring entirely in the
-- visitor's browser; this table only counts. Anonymity is also why no row can
-- ever be linked back to a person.
--
-- Write access is insert-only and open to everyone (a visitor is not signed in),
-- which is safe because there is nothing to read back and nothing to corrupt:
-- RLS gives no SELECT, UPDATE or DELETE to anon or authenticated roles, and the
-- CHECK constraints refuse anything that is not one of the three known events or
-- a short lowercase slug. Only an administrator can read the counts.

-- Event log -------------------------------------------------------------------

create table public.marketing_events (
  id bigint generated always as identity primary key,
  source text not null,
  campaign text,
  event text not null,
  created_at timestamptz not null default now(),
  constraint marketing_events_event_check check (
    event in ('visit', 'start', 'complete')
  ),
  constraint marketing_events_source_check check (
    source ~ '^[a-z0-9][a-z0-9_-]{0,39}$'
  ),
  constraint marketing_events_campaign_check check (
    campaign is null
    or (
      campaign ~ '^[a-z0-9][a-z0-9_.:-]{0,59}$'
    )
  )
);

comment on table public.marketing_events is
  'Anonymous funnel counts for the free level test: arrival, start, completion. No personal data, no test answers, no result levels.';
comment on column public.marketing_events.source is
  'Lowercase slug of where the visitor came from: tiktok, whatsapp, youtube, google, direct, referral or a campaign slug from ?src= / ?utm_source=.';
comment on column public.marketing_events.campaign is
  'Optional campaign slug from ?utm_campaign=, used to tell one video apart from another. Never free text.';
comment on column public.marketing_events.event is
  'visit = the level test page was opened, start = Start was pressed, complete = a result was shown.';

create index marketing_events_created_idx
  on public.marketing_events (created_at desc);

create index marketing_events_funnel_idx
  on public.marketing_events (source, event, created_at desc);

-- Access ----------------------------------------------------------------------

alter table public.marketing_events enable row level security;

-- Anyone may add a count. This is the only statement a visitor can make.
create policy "marketing_events_insert_public"
  on public.marketing_events
  for insert
  to anon, authenticated
  with check (true);

-- Only an administrator may read the counts.
create policy "marketing_events_select_admins"
  on public.marketing_events
  for select
  to authenticated
  using (public.is_admin());

revoke all on table public.marketing_events from public, anon, authenticated;

grant insert on table public.marketing_events to anon, authenticated;
grant select on table public.marketing_events to authenticated;
