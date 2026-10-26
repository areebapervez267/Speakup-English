-- Phase 8: secure Premium memberships, payment events and premium content access.
-- Apply this file once, after the Phase 7 content migrations.
--
-- Membership rows are never writable by students. There are no table grants and
-- no RLS policies on public.memberships or public.payment_events: students read
-- their own safe status through public.get_my_membership(), administrators read
-- the allow-listed view through public.admin_list_memberships(), and only the
-- service role can apply provider webhook events. No card data is stored here.

-- Membership records ----------------------------------------------------------

create table public.memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  tier text not null default 'premium',
  status text not null default 'pending',
  source text not null default 'provider',
  provider text,
  provider_customer_id text,
  provider_subscription_id text,
  activated_at timestamptz,
  current_period_end timestamptz,
  cancelled_at timestamptz,
  ended_at timestamptz,
  granted_by uuid references auth.users (id) on delete set null,
  note text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint memberships_tier_check check (tier in ('premium')),
  constraint memberships_status_check check (
    status in (
      'pending',
      'active',
      'past_due',
      'cancelled',
      'expired',
      'refunded',
      'revoked'
    )
  ),
  constraint memberships_source_check check (source in ('provider', 'admin')),
  constraint memberships_provider_check check (
    provider is null
    or (
      char_length(provider) between 1 and 40
      and provider ~ '^[a-z0-9][a-z0-9_-]*$'
    )
  ),
  constraint memberships_provider_ids_check check (
    (provider_customer_id is null or char_length(provider_customer_id) <= 200)
    and (
      provider_subscription_id is null
      or char_length(provider_subscription_id) <= 200
    )
  ),
  constraint memberships_provider_source_check check (
    source <> 'provider' or provider is not null
  ),
  constraint memberships_note_check check (char_length(note) <= 500),
  constraint memberships_admin_source_check check (
    source <> 'admin' or granted_by is not null
  )
);

comment on table public.memberships is
  'Premium entitlement records. Never writable by students; granted by verified provider webhooks or an audited administrator action. No card details are stored.';

comment on column public.memberships.status is
  'active grants access until current_period_end (or indefinitely when null). cancelled, expired, past_due, refunded and revoked do not grant access.';
comment on column public.memberships.source is
  'provider for paid subscriptions, admin for audited complimentary access.';

create index memberships_user_idx
  on public.memberships (user_id, updated_at desc);

-- A student can hold at most one active membership at a time.
create unique index memberships_one_active_per_user
  on public.memberships (user_id)
  where status = 'active';

-- One row per provider subscription so repeated webhooks cannot fork records.
create unique index memberships_provider_subscription_key
  on public.memberships (provider, provider_subscription_id)
  where provider_subscription_id is not null;

create trigger memberships_set_updated_at
before update on public.memberships
for each row execute function public.set_updated_at();

alter table public.memberships enable row level security;

-- No policies and no grants on purpose. Students and administrators read through
-- the security-definer functions below, so provider IDs and administrator notes
-- are not exposed through direct PostgREST table access.
revoke all on table public.memberships from public, anon, authenticated;

-- Payment event log -----------------------------------------------------------

create table public.payment_events (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  provider_event_id text not null,
  event_type text not null,
  user_id uuid references auth.users (id) on delete set null,
  status text,
  detail jsonb not null default '{}'::jsonb,
  received_at timestamptz not null default now(),
  constraint payment_events_provider_check check (
    char_length(provider) between 1 and 40
    and provider ~ '^[a-z0-9][a-z0-9_-]*$'
  ),
  constraint payment_events_event_id_check check (
    char_length(provider_event_id) between 1 and 200
  ),
  constraint payment_events_event_type_check check (
    char_length(event_type) between 1 and 80
  ),
  constraint payment_events_status_check check (
    status is null
    or status in (
      'pending',
      'active',
      'past_due',
      'cancelled',
      'expired',
      'refunded',
      'revoked'
    )
  ),
  constraint payment_events_detail_check check (
    jsonb_typeof(detail) = 'object'
    and pg_column_size(detail) <= 8000
  ),
  constraint payment_events_provider_event_key
    unique (provider, provider_event_id)
);

comment on table public.payment_events is
  'Idempotency and audit trail for normalized provider webhook events. Detail contains sanitized identifiers only, never card data.';

create index payment_events_user_idx
  on public.payment_events (user_id, received_at desc);

alter table public.payment_events enable row level security;

-- Only the service role (server-only) may read or write this log. No policies
-- and no grants to anon or authenticated.
revoke all on table public.payment_events from public, anon, authenticated;
grant select, insert on table public.payment_events to service_role;

-- Access helpers --------------------------------------------------------------

create function public.has_active_membership(p_user uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select p_user is not null and exists (
    select 1
    from public.memberships as memberships
    where memberships.user_id = p_user
      and memberships.tier = 'premium'
      and memberships.status = 'active'
      and (
        memberships.current_period_end is null
        or memberships.current_period_end > now()
      )
  );
$$;

comment on function public.has_active_membership(uuid) is
  'True only for an active, unexpired Premium membership. Internal helper for RLS and security-definer functions.';

revoke all on function public.has_active_membership(uuid)
  from public, anon, authenticated;

-- The RLS policy below is evaluated as the requesting role, so it calls this
-- wrapper. It only reveals whether the caller themself has access.
create function public.current_user_has_active_membership()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select public.has_active_membership(auth.uid());
$$;

revoke all on function public.current_user_has_active_membership()
  from public, anon, authenticated;
grant execute on function public.current_user_has_active_membership()
  to anon, authenticated;

create function public.get_my_membership()
returns table (
  tier text,
  status text,
  source text,
  activated_at timestamptz,
  current_period_end timestamptz,
  cancelled_at timestamptz,
  is_active boolean
)
language sql
stable
security definer
set search_path = ''
as $$
  select
    memberships.tier,
    memberships.status,
    memberships.source,
    memberships.activated_at,
    memberships.current_period_end,
    memberships.cancelled_at,
    public.has_active_membership(memberships.user_id)
  from public.memberships as memberships
  where memberships.user_id = auth.uid()
  order by memberships.updated_at desc
  limit 1;
$$;

comment on function public.get_my_membership() is
  'Safe membership status for the signed-in student. Provider IDs and administrator notes are excluded.';

revoke all on function public.get_my_membership()
  from public, anon, authenticated;
grant execute on function public.get_my_membership() to authenticated;

-- Premium course bodies -------------------------------------------------------

-- Public visitors and free students can still read the metadata of every
-- published lesson. Full blocks and quiz questions for premium courses require
-- an active membership, enforced in the database as well as in the application.
create function public.get_published_lesson_outline(p_course_slug text)
returns table (
  id uuid,
  unit_id uuid,
  slug text,
  title text,
  summary text,
  objective text,
  minutes integer,
  sort_order integer
)
language sql
stable
security definer
set search_path = ''
as $$
  select
    lessons.id,
    lessons.unit_id,
    lessons.slug,
    lessons.title,
    lessons.summary,
    lessons.objective,
    lessons.minutes,
    lessons.sort_order
  from public.published_lessons as lessons
  join public.published_courses as courses
    on courses.course_id = lessons.course_id
  where courses.slug = p_course_slug
  order by lessons.sort_order;
$$;

comment on function public.get_published_lesson_outline(text) is
  'Public lesson metadata (no blocks or quiz questions) used to build course outlines and locked premium previews.';

revoke all on function public.get_published_lesson_outline(text)
  from public, anon, authenticated;
grant execute on function public.get_published_lesson_outline(text)
  to anon, authenticated;

-- Completion is progress metadata rather than lesson content, but a free
-- student should not be able to mark premium lessons complete through a direct
-- RPC call either. This mirrors the application-level access check.
create or replace function public.mark_lesson_complete(
  target_course_slug text,
  target_lesson_slug text
)
returns table (
  is_completed boolean,
  completed_at timestamptz,
  best_score smallint,
  best_score_total smallint,
  updated_at timestamptz
)
language plpgsql
security invoker
set search_path = ''
as $$
declare
  student_id uuid := auth.uid();
begin
  if student_id is null then
    raise exception 'You must be signed in to save progress.'
      using errcode = '42501';
  end if;

  if target_course_slug is null
     or target_lesson_slug is null
     or char_length(target_course_slug) not between 1 and 120
     or char_length(target_lesson_slug) not between 1 and 120
     or target_course_slug !~ '^[a-z0-9]+(-[a-z0-9]+)*$'
     or target_lesson_slug !~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  then
    raise exception 'Invalid course or lesson identifier.'
      using errcode = '22023';
  end if;

  if exists (
    select 1
    from public.published_courses as courses
    where courses.slug = target_course_slug
      and (courses.premium = true or courses.level in ('C1', 'C2'))
  ) and not public.current_user_has_active_membership()
  then
    raise exception 'An active Premium membership is required for this lesson.'
      using errcode = '42501';
  end if;

  insert into public.lesson_progress as progress (
    user_id,
    course_slug,
    lesson_slug,
    is_completed,
    completed_at
  )
  values (
    student_id,
    target_course_slug,
    target_lesson_slug,
    true,
    now()
  )
  on conflict on constraint lesson_progress_pkey do update
  set
    is_completed = true,
    completed_at = coalesce(progress.completed_at, now())
  where progress.is_completed = false;

  return query
  select
    progress.is_completed,
    progress.completed_at,
    progress.best_score,
    progress.best_score_total,
    progress.updated_at
  from public.lesson_progress as progress
  where progress.user_id = student_id
    and progress.course_slug = target_course_slug
    and progress.lesson_slug = target_lesson_slug;
end;
$$;

drop policy "published_lessons_public_select" on public.published_lessons;

create policy "published_lessons_free_or_entitled_select"
on public.published_lessons
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.published_courses as courses
    where courses.course_id = published_lessons.course_id
      and courses.premium = false
      and courses.level not in ('C1', 'C2')
  )
  or public.current_user_has_active_membership()
);

-- Grading keeps working for free lessons and for members. Premium quizzes are
-- rejected for guests and free students so the answer key cannot be used as an
-- oracle through a direct RPC call.
create or replace function public.grade_published_lesson_quiz(
  p_course_slug text,
  p_lesson_slug text,
  p_answers jsonb
)
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  v_lesson_id uuid;
  v_questions jsonb;
  v_premium boolean;
  v_level text;
  v_answer_key jsonb;
  v_question jsonb;
  v_answer jsonb;
  v_question_id text;
  v_selected integer;
  v_correct integer;
  v_total integer;
  v_score integer := 0;
  v_review jsonb := '[]'::jsonb;
begin
  if p_course_slug is null or p_lesson_slug is null
     or char_length(p_course_slug) not between 1 and 120
     or char_length(p_lesson_slug) not between 1 and 120
  then
    raise exception 'Invalid lesson identifier.' using errcode = '22023';
  end if;

  if p_answers is null or jsonb_typeof(p_answers) is distinct from 'object' then
    raise exception 'Invalid quiz answers.' using errcode = '22023';
  end if;

  select lessons.id, lessons.questions, courses.premium, courses.level
  into v_lesson_id, v_questions, v_premium, v_level
  from public.published_lessons as lessons
  join public.published_courses as courses
    on courses.course_id = lessons.course_id
  where courses.slug = p_course_slug
    and lessons.slug = p_lesson_slug;

  if v_lesson_id is null then
    raise exception 'This lesson is not published.' using errcode = 'P0002';
  end if;

  if (v_premium or v_level in ('C1', 'C2'))
     and not public.has_active_membership(auth.uid())
  then
    raise exception 'An active Premium membership is required for this quiz.'
      using errcode = '42501';
  end if;

  select answers into v_answer_key
  from public.published_quiz_answers
  where lesson_id = v_lesson_id;

  if v_answer_key is null then
    raise exception 'This quiz does not have an answer key.' using errcode = 'P0002';
  end if;

  v_total := jsonb_array_length(v_questions);

  if v_total = 0 then
    raise exception 'This lesson does not have a quiz.' using errcode = '22023';
  end if;

  if (
    select count(*)::integer
    from jsonb_object_keys(p_answers) as keys(key)
  ) <> v_total then
    raise exception 'Submit an answer for every question.' using errcode = '22023';
  end if;

  for v_question in select value from jsonb_array_elements(v_questions)
  loop
    v_question_id := v_question ->> 'id';
    v_answer := null;

    if not (p_answers ? v_question_id) then
      raise exception 'Submit an answer for every question.' using errcode = '22023';
    end if;

    if jsonb_typeof(p_answers -> v_question_id) is distinct from 'number'
       or (p_answers ->> v_question_id) !~ '^(0|[1-9][0-9]{0,2})$'
    then
      raise exception 'Invalid quiz answers.' using errcode = '22023';
    end if;

    v_selected := (p_answers ->> v_question_id)::integer;
    if v_selected < 0
       or v_selected >= jsonb_array_length(v_question -> 'options')
    then
      raise exception 'Invalid quiz answers.' using errcode = '22023';
    end if;

    select value into v_answer
    from jsonb_array_elements(v_answer_key)
    where value ->> 'id' = v_question_id;

    if v_answer is null then
      raise exception 'This quiz does not have an answer key.' using errcode = 'P0002';
    end if;

    v_correct := (v_answer ->> 'correctIndex')::integer;

    if v_selected = v_correct then
      v_score := v_score + 1;
    end if;

    v_review := v_review || jsonb_build_array(
      jsonb_build_object(
        'id', v_question_id,
        'correctIndex', v_correct,
        'explanation', v_answer ->> 'explanation'
      )
    );
  end loop;

  return jsonb_build_object(
    'score', v_score,
    'total', v_total,
    'review', v_review
  );
end;
$$;

revoke all on function public.grade_published_lesson_quiz(text, text, jsonb)
  from public, anon, authenticated;
grant execute on function public.grade_published_lesson_quiz(text, text, jsonb)
  to anon, authenticated;

-- Administrator membership management -----------------------------------------

alter table public.admin_audit_log
  drop constraint admin_audit_log_entity_type_check;

alter table public.admin_audit_log
  add constraint admin_audit_log_entity_type_check check (
    entity_type in ('course', 'unit', 'lesson', 'membership', 'system')
  );

create function public.admin_list_memberships()
returns table (
  id uuid,
  user_id uuid,
  email text,
  tier text,
  status text,
  source text,
  provider text,
  activated_at timestamptz,
  current_period_end timestamptz,
  cancelled_at timestamptz,
  granted_by_email text,
  note text,
  is_active boolean,
  created_at timestamptz,
  updated_at timestamptz
)
language sql
stable
security definer
set search_path = ''
as $$
  select
    memberships.id,
    memberships.user_id,
    users.email::text,
    memberships.tier,
    memberships.status,
    memberships.source,
    memberships.provider,
    memberships.activated_at,
    memberships.current_period_end,
    memberships.cancelled_at,
    grantors.email::text,
    memberships.note,
    public.has_active_membership(memberships.user_id),
    memberships.created_at,
    memberships.updated_at
  from public.memberships as memberships
  join auth.users as users on users.id = memberships.user_id
  left join public.admin_users as grantors on grantors.user_id = memberships.granted_by
  where public.is_admin()
  order by memberships.updated_at desc
  limit 500;
$$;

comment on function public.admin_list_memberships() is
  'Administrator-only membership list with student email. Returns nothing for non-administrators.';

revoke all on function public.admin_list_memberships()
  from public, anon, authenticated;
grant execute on function public.admin_list_memberships() to authenticated;

create function public.admin_lookup_student_email(p_email text)
returns table (user_id uuid, email text)
language sql
stable
security definer
set search_path = ''
as $$
  select users.id, users.email::text
  from auth.users as users
  where public.is_admin()
    and btrim(coalesce(p_email, '')) <> ''
    and lower(users.email) = lower(btrim(p_email))
  limit 1;
$$;

comment on function public.admin_lookup_student_email(text) is
  'Resolves a student email to an account ID for an audited administrator grant. Returns nothing for non-administrators.';

revoke all on function public.admin_lookup_student_email(text)
  from public, anon, authenticated;
grant execute on function public.admin_lookup_student_email(text)
  to authenticated;

create function public.admin_grant_membership(
  p_user_id uuid,
  p_expires_at timestamptz default null,
  p_note text default ''
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_actor uuid := auth.uid();
  v_actor_email text;
  v_student_email text;
  v_note text := coalesce(btrim(p_note), '');
  v_membership_id uuid;
begin
  if not public.is_admin() then
    raise exception 'Only administrators can grant Premium access.'
      using errcode = '42501';
  end if;

  if p_user_id is null then
    raise exception 'Choose a student account.' using errcode = '22023';
  end if;

  if char_length(v_note) > 500 then
    raise exception 'Keep the administrator note to 500 characters or fewer.'
      using errcode = '22023';
  end if;

  if p_expires_at is not null and p_expires_at <= now() then
    raise exception 'The access end date must be in the future.'
      using errcode = '22023';
  end if;

  select users.email::text into v_student_email
  from auth.users as users
  where users.id = p_user_id;

  if v_student_email is null then
    raise exception 'Student account not found.' using errcode = 'P0002';
  end if;

  select admins.email into v_actor_email
  from public.admin_users as admins
  where admins.user_id = v_actor;

  -- Expire any earlier active row before inserting the new one; the partial
  -- unique index allows only one active membership per student.
  update public.memberships
  set status = 'expired', ended_at = now()
  where user_id = p_user_id
    and status = 'active';

  insert into public.memberships (
    user_id,
    tier,
    status,
    source,
    activated_at,
    current_period_end,
    granted_by,
    note
  )
  values (
    p_user_id,
    'premium',
    'active',
    'admin',
    now(),
    p_expires_at,
    v_actor,
    v_note
  )
  returning id into v_membership_id;

  insert into public.admin_audit_log (
    actor_id,
    actor_email,
    action,
    entity_type,
    entity_id,
    summary,
    detail
  )
  values (
    v_actor,
    v_actor_email,
    'membership_granted',
    'membership',
    v_membership_id,
    left('Granted Premium access to ' || v_student_email, 300),
    jsonb_build_object(
      'expires_at', p_expires_at,
      'note', v_note
    )
  );

  return v_membership_id;
end;
$$;

revoke all on function public.admin_grant_membership(uuid, timestamptz, text)
  from public, anon, authenticated;
grant execute on function public.admin_grant_membership(uuid, timestamptz, text)
  to authenticated;

create function public.admin_revoke_membership(
  p_user_id uuid,
  p_note text default ''
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_actor uuid := auth.uid();
  v_actor_email text;
  v_student_email text;
  v_note text := coalesce(btrim(p_note), '');
  v_membership public.memberships%rowtype;
begin
  if not public.is_admin() then
    raise exception 'Only administrators can revoke Premium access.'
      using errcode = '42501';
  end if;

  if p_user_id is null then
    raise exception 'Choose a student account.' using errcode = '22023';
  end if;

  if char_length(v_note) > 500 then
    raise exception 'Keep the administrator note to 500 characters or fewer.'
      using errcode = '22023';
  end if;

  select users.email::text into v_student_email
  from auth.users as users
  where users.id = p_user_id;

  select memberships.* into v_membership
  from public.memberships as memberships
  where memberships.user_id = p_user_id
    and memberships.status = 'active'
  order by memberships.updated_at desc
  limit 1
  for update;

  if not found then
    raise exception 'This student does not have an active membership.'
      using errcode = 'P0002';
  end if;

  select admins.email into v_actor_email
  from public.admin_users as admins
  where admins.user_id = v_actor;

  update public.memberships
  set
    status = 'revoked',
    cancelled_at = coalesce(cancelled_at, now()),
    ended_at = now(),
    note = case
      when v_note = '' then note
      when note = '' then v_note
      else left(note || ' ' || v_note, 500)
    end
  where id = v_membership.id;

  insert into public.admin_audit_log (
    actor_id,
    actor_email,
    action,
    entity_type,
    entity_id,
    summary,
    detail
  )
  values (
    v_actor,
    v_actor_email,
    'membership_revoked',
    'membership',
    v_membership.id,
    left('Revoked Premium access for ' || v_student_email, 300),
    jsonb_build_object('note', v_note)
  );

  return v_membership.id;
end;
$$;

revoke all on function public.admin_revoke_membership(uuid, text)
  from public, anon, authenticated;
grant execute on function public.admin_revoke_membership(uuid, text)
  to authenticated;

-- Provider webhook application -------------------------------------------------

-- Called only by the server route with a service-role client after the webhook
-- signature has been verified. The unique (provider, provider_event_id) key
-- makes duplicate delivery a no-op. The route passes normalized statuses; no
-- raw provider payloads or card data are stored.
create function public.process_membership_event(
  p_provider text,
  p_event_id text,
  p_event_type text,
  p_user_id uuid,
  p_status text,
  p_tier text,
  p_customer_id text,
  p_subscription_id text,
  p_period_end timestamptz,
  p_cancelled_at timestamptz,
  p_detail jsonb
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_event_id uuid;
  v_membership_id uuid;
begin
  if p_provider is null
     or p_provider !~ '^[a-z0-9][a-z0-9_-]*$'
     or char_length(p_provider) not between 1 and 40
  then
    raise exception 'Invalid payment provider.' using errcode = '22023';
  end if;

  if p_event_id is null
     or char_length(p_event_id) not between 1 and 200
  then
    raise exception 'Invalid payment event identifier.' using errcode = '22023';
  end if;

  if p_event_type is null
     or char_length(p_event_type) not between 1 and 80
  then
    raise exception 'Invalid payment event type.' using errcode = '22023';
  end if;

  if p_status is null
     or p_status not in (
       'pending',
       'active',
       'past_due',
       'cancelled',
       'expired',
       'refunded',
       'revoked'
     )
  then
    raise exception 'Invalid membership status.' using errcode = '22023';
  end if;

  if p_tier is null or p_tier <> 'premium' then
    raise exception 'Invalid membership tier.' using errcode = '22023';
  end if;

  if p_detail is null
     or jsonb_typeof(p_detail) is distinct from 'object'
     or pg_column_size(p_detail) > 8000
  then
    raise exception 'Invalid payment event detail.' using errcode = '22023';
  end if;

  if p_user_id is not null and not exists (
    select 1 from auth.users as users where users.id = p_user_id
  ) then
    raise exception 'Referenced student account not found.' using errcode = 'P0002';
  end if;

  insert into public.payment_events (
    provider,
    provider_event_id,
    event_type,
    user_id,
    status,
    detail
  )
  values (
    p_provider,
    p_event_id,
    p_event_type,
    p_user_id,
    p_status,
    p_detail
  )
  on conflict (provider, provider_event_id) do nothing
  returning id into v_event_id;

  if v_event_id is null then
    return false;
  end if;

  if p_user_id is null then
    return true;
  end if;

  if p_subscription_id is not null then
    select memberships.id into v_membership_id
    from public.memberships as memberships
    where memberships.provider = p_provider
      and memberships.provider_subscription_id = p_subscription_id
    for update;
  else
    select memberships.id into v_membership_id
    from public.memberships as memberships
    where memberships.user_id = p_user_id
      and memberships.source = 'provider'
    order by memberships.updated_at desc
    limit 1
    for update;
  end if;

  if p_status = 'active' then
    -- A verified paid subscription supersedes any active complimentary grant.
    update public.memberships
    set status = 'expired', ended_at = now()
    where user_id = p_user_id
      and status = 'active'
      and (v_membership_id is null or id <> v_membership_id);
  end if;

  if v_membership_id is not null then
    update public.memberships
    set
      tier = p_tier,
      status = p_status,
      source = 'provider',
      provider = p_provider,
      provider_customer_id = coalesce(p_customer_id, provider_customer_id),
      provider_subscription_id = coalesce(
        p_subscription_id,
        provider_subscription_id
      ),
      activated_at = case
        when p_status = 'active' then coalesce(activated_at, now())
        else activated_at
      end,
      current_period_end = coalesce(p_period_end, current_period_end),
      cancelled_at = case
        when p_status = 'active' then p_cancelled_at
        else coalesce(p_cancelled_at, cancelled_at)
      end,
      ended_at = case
        when p_status in ('cancelled', 'expired', 'refunded', 'revoked')
          then now()
        else null
      end
    where id = v_membership_id;
  else
    insert into public.memberships (
      user_id,
      tier,
      status,
      source,
      provider,
      provider_customer_id,
      provider_subscription_id,
      activated_at,
      current_period_end,
      cancelled_at,
      ended_at
    )
    values (
      p_user_id,
      p_tier,
      p_status,
      'provider',
      p_provider,
      p_customer_id,
      p_subscription_id,
      case when p_status = 'active' then now() else null end,
      p_period_end,
      p_cancelled_at,
      case
        when p_status in ('cancelled', 'expired', 'refunded', 'revoked')
          then now()
        else null
      end
    );
  end if;

  return true;
end;
$$;

comment on function public.process_membership_event(
  text, text, text, uuid, text, text, text, text, timestamptz, timestamptz, jsonb
) is
  'Applies a signature-verified, normalized provider event to a membership exactly once. Executable only by the service role.';

revoke all on function public.process_membership_event(
  text, text, text, uuid, text, text, text, text, timestamptz, timestamptz, jsonb
) from public, anon, authenticated;
grant execute on function public.process_membership_event(
  text, text, text, uuid, text, text, text, text, timestamptz, timestamptz, jsonb
) to service_role;
