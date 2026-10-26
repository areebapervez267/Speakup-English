-- Phase 9: course completion certificates.
-- Apply this file once, after the Phase 8 premium membership migration.
--
-- Certificates are issued only for the seven authored A1 courses that contain
-- real interactive lessons. Outline-only catalogue entries are deliberately
-- absent: a course cannot award a certificate until its lessons exist.
--
-- The requirement list lives in the database, not in the browser. A student
-- cannot choose which lessons count, supply a completion percentage, or insert
-- a certificate row directly. All access goes through the functions below.

-- Course policy ---------------------------------------------------------------

create table public.certificate_course_policies (
  course_slug text primary key,
  course_title text not null,
  level text not null default 'a1',
  premium boolean not null default false,
  minimum_quiz_percent smallint not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint certificate_course_policies_slug_check check (
    char_length(course_slug) between 1 and 120
    and course_slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  ),
  constraint certificate_course_policies_title_check check (
    char_length(btrim(course_title)) between 1 and 160
  ),
  constraint certificate_course_policies_level_check check (
    level in ('a1', 'a2', 'b1', 'b2', 'c1', 'c2')
  ),
  constraint certificate_course_policies_score_check check (
    minimum_quiz_percent between 0 and 100
  )
);

comment on table public.certificate_course_policies is
  'Certificate eligibility policy per authored course. Managed by migrations, never by application code.';

create table public.certificate_course_lessons (
  course_slug text not null
    references public.certificate_course_policies (course_slug) on delete cascade,
  lesson_slug text not null,
  requires_quiz boolean not null default false,
  primary key (course_slug, lesson_slug),
  constraint certificate_course_lessons_slug_check check (
    char_length(lesson_slug) between 1 and 120
    and lesson_slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  )
);

comment on table public.certificate_course_lessons is
  'Every lesson a student must complete before a certificate can be issued.';

-- Only the seven fully authored A1 courses are seeded. C1/C2 remain
-- outline-only and therefore cannot issue certificates yet.
insert into public.certificate_course_policies (
  course_slug,
  course_title,
  level,
  premium,
  minimum_quiz_percent
)
values
  ('grammar-foundations', 'Grammar Foundations', 'a1', false, 60),
  ('essential-500-words', 'Essential 500 Words', 'a1', false, 0),
  ('reading-from-day-one', 'Reading from Day One', 'a1', false, 60),
  ('write-your-first-sentences', 'Write Your First Sentences', 'a1', false, 60),
  ('everyday-listening', 'Everyday Listening', 'a1', false, 60),
  ('first-conversations', 'First Conversations', 'a1', false, 60),
  ('sounds-of-english', 'Sounds of English', 'a1', false, 60);

insert into public.certificate_course_lessons (
  course_slug,
  lesson_slug,
  requires_quiz
)
values
  ('grammar-foundations', 'subject-pronouns-and-be', true),
  ('grammar-foundations', 'negatives-with-be', true),
  ('grammar-foundations', 'questions-with-be', true),
  ('grammar-foundations', 'a-an-and-plural-nouns', true),
  ('grammar-foundations', 'this-that-these-those', true),
  ('grammar-foundations', 'possessive-adjectives', true),
  ('grammar-foundations', 'have-and-has', true),
  ('grammar-foundations', 'there-is-and-there-are', true),
  ('grammar-foundations', 'present-simple-i-you-we-they', true),
  ('grammar-foundations', 'present-simple-he-she-it', true),
  ('grammar-foundations', 'do-and-does-questions-negatives', true),
  ('grammar-foundations', 'adjectives-and-word-order', true),
  ('grammar-foundations', 'in-on-at-time-and-place', true),
  ('grammar-foundations', 'putting-it-together', true),
  ('essential-500-words', 'family-and-relationships', false),
  ('essential-500-words', 'describing-appearance', false),
  ('essential-500-words', 'rooms-and-furniture', false),
  ('essential-500-words', 'everyday-objects', false),
  ('essential-500-words', 'food-and-drink', false),
  ('essential-500-words', 'fruit-and-vegetables', false),
  ('essential-500-words', 'clothes-and-colours', false),
  ('essential-500-words', 'shopping-and-money', false),
  ('essential-500-words', 'transport', false),
  ('essential-500-words', 'places-in-town', false),
  ('essential-500-words', 'health-and-the-body', false),
  ('essential-500-words', 'jobs-and-workplaces', false),
  ('essential-500-words', 'hobbies-and-interests', false),
  ('essential-500-words', 'weather-and-seasons', false),
  ('reading-from-day-one', 'signs-around-you', true),
  ('reading-from-day-one', 'labels-and-packaging', true),
  ('reading-from-day-one', 'numbers-dates-and-prices', true),
  ('reading-from-day-one', 'text-messages', true),
  ('reading-from-day-one', 'short-emails', true),
  ('reading-from-day-one', 'postcards', true),
  ('reading-from-day-one', 'a-personal-profile', true),
  ('reading-from-day-one', 'a-short-description', true),
  ('reading-from-day-one', 'a-simple-story', true),
  ('reading-from-day-one', 'menus', true),
  ('reading-from-day-one', 'timetables-and-schedules', true),
  ('reading-from-day-one', 'reading-every-day', true),
  ('write-your-first-sentences', 'word-order-in-a-sentence', true),
  ('write-your-first-sentences', 'capital-letters', true),
  ('write-your-first-sentences', 'full-stops-and-question-marks', true),
  ('write-your-first-sentences', 'about-me', true),
  ('write-your-first-sentences', 'completing-forms', true),
  ('write-your-first-sentences', 'short-messages', true),
  ('write-your-first-sentences', 'notes-and-reminders', true),
  ('write-your-first-sentences', 'postcards', true),
  ('write-your-first-sentences', 'a-simple-email', true),
  ('write-your-first-sentences', 'review-and-writing-check', true),
  ('everyday-listening', 'greetings-and-names', true),
  ('everyday-listening', 'countries-and-nationalities', true),
  ('everyday-listening', 'numbers-ages-and-phone-numbers', true),
  ('everyday-listening', 'family-and-friends', true),
  ('everyday-listening', 'telling-the-time', true),
  ('everyday-listening', 'a-normal-day', true),
  ('everyday-listening', 'at-the-cafe', true),
  ('everyday-listening', 'food-and-prices', true),
  ('everyday-listening', 'in-the-shop', true),
  ('everyday-listening', 'directions-in-town', true),
  ('everyday-listening', 'travel-and-transport', true),
  ('everyday-listening', 'short-announcements', true),
  ('first-conversations', 'hello-and-introductions', true),
  ('first-conversations', 'asking-where-someone-is-from', true),
  ('first-conversations', 'talking-about-jobs', true),
  ('first-conversations', 'family-and-friends', true),
  ('first-conversations', 'numbers-and-ages', true),
  ('first-conversations', 'spelling-names-and-places', true),
  ('first-conversations', 'talking-about-routines', true),
  ('first-conversations', 'likes-and-dislikes', true),
  ('first-conversations', 'making-simple-plans', true),
  ('first-conversations', 'shopping-basics', true),
  ('first-conversations', 'ordering-food-and-drink', true),
  ('first-conversations', 'asking-for-help', true),
  ('sounds-of-english', 'short-vowel-sounds', true),
  ('sounds-of-english', 'long-vowel-sounds', true),
  ('sounds-of-english', 'common-consonant-sounds', true),
  ('sounds-of-english', 'stress-in-names-and-places', true),
  ('sounds-of-english', 'stressed-and-weak-syllables', true),
  ('sounds-of-english', 'simple-stress-patterns', true),
  ('sounds-of-english', 'stressed-words-in-sentences', true),
  ('sounds-of-english', 'intonation-in-questions', true),
  ('sounds-of-english', 'sounds-to-watch', true),
  ('sounds-of-english', 'a-final-speaking-check', true);

create trigger certificate_course_policies_set_updated_at
before update on public.certificate_course_policies
for each row execute function public.set_updated_at();

-- Certificates ----------------------------------------------------------------

create table public.certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  course_slug text not null
    references public.certificate_course_policies (course_slug) on delete restrict,
  student_name text not null,
  course_title text not null,
  completed_at timestamptz not null,
  issued_at timestamptz not null default now(),
  revoked_at timestamptz,
  revoked_by uuid references auth.users (id) on delete set null,
  revocation_reason text,
  constraint certificates_student_name_check check (
    student_name = btrim(student_name)
    and char_length(student_name) between 1 and 80
  ),
  constraint certificates_course_title_check check (
    char_length(btrim(course_title)) between 1 and 160
  ),
  constraint certificates_revocation_check check (
    (revoked_at is null and revocation_reason is null)
    or (
      revoked_at is not null
      and revocation_reason is not null
      and char_length(btrim(revocation_reason)) between 5 and 500
    )
  ),
  constraint certificates_user_course_unique unique (user_id, course_slug)
);

comment on table public.certificates is
  'Issued course certificates. Student name and course title are snapshots so later profile or catalogue edits do not rewrite history.';
comment on column public.certificates.revocation_reason is
  'Administrator justification. Never shown on the public verification page.';

create index certificates_user_idx
  on public.certificates (user_id, issued_at desc);

create index certificates_issued_at_idx
  on public.certificates (issued_at desc);

-- Certificate tables are reachable only through the security-definer
-- functions below. No direct table grants and no RLS policies are created.
alter table public.certificate_course_policies enable row level security;
alter table public.certificate_course_lessons enable row level security;
alter table public.certificates enable row level security;

revoke all on table public.certificate_course_policies
  from public, anon, authenticated;
revoke all on table public.certificate_course_lessons
  from public, anon, authenticated;
revoke all on table public.certificates
  from public, anon, authenticated;

-- Audit trail ----------------------------------------------------------------

alter table public.admin_audit_log
  drop constraint admin_audit_log_entity_type_check;

alter table public.admin_audit_log
  add constraint admin_audit_log_entity_type_check check (
    entity_type in (
      'course',
      'unit',
      'lesson',
      'membership',
      'certificate',
      'system'
    )
  );

-- Student eligibility overview ------------------------------------------------

create function public.get_my_certificate_overview()
returns table (
  course_slug text,
  course_title text,
  premium boolean,
  minimum_quiz_percent smallint,
  total_lessons integer,
  completed_lessons integer,
  quiz_lessons integer,
  quiz_lessons_met integer,
  eligible boolean,
  certificate_id uuid,
  certificate_issued_at timestamptz,
  certificate_completed_at timestamptz,
  certificate_revoked_at timestamptz
)
language sql
stable
security definer
set search_path = ''
as $$
  select
    policies.course_slug,
    policies.course_title,
    policies.premium,
    policies.minimum_quiz_percent,
    stats.total_lessons,
    stats.completed_lessons,
    stats.quiz_lessons,
    stats.quiz_lessons_met,
    (
      (policies.premium = false or public.has_active_membership(auth.uid()))
      and stats.total_lessons > 0
      and stats.completed_lessons = stats.total_lessons
      and stats.quiz_lessons_met = stats.quiz_lessons
    ) as eligible,
    certificates.id,
    certificates.issued_at,
    certificates.completed_at,
    certificates.revoked_at
  from public.certificate_course_policies as policies
  left join lateral (
    select
      count(requirements.lesson_slug)::integer as total_lessons,
      count(*) filter (where progress.is_completed)::integer
        as completed_lessons,
      count(*) filter (where requirements.requires_quiz)::integer
        as quiz_lessons,
      count(*) filter (
        where requirements.requires_quiz
          and progress.best_score_total > 0
          and progress.best_score * 100
            >= policies.minimum_quiz_percent * progress.best_score_total
      )::integer as quiz_lessons_met
    from public.certificate_course_lessons as requirements
    left join public.lesson_progress as progress
      on progress.user_id = auth.uid()
     and progress.course_slug = requirements.course_slug
     and progress.lesson_slug = requirements.lesson_slug
    where requirements.course_slug = policies.course_slug
  ) as stats on true
  left join public.certificates as certificates
    on certificates.user_id = auth.uid()
   and certificates.course_slug = policies.course_slug
  where policies.is_active
    and auth.uid() is not null
  order by policies.course_title;
$$;

comment on function public.get_my_certificate_overview() is
  'Eligibility and issued-certificate status for the signed-in student only.';

revoke all on function public.get_my_certificate_overview()
  from public, anon, authenticated;
grant execute on function public.get_my_certificate_overview()
  to authenticated;

-- Issuance --------------------------------------------------------------------

create function public.issue_certificate(p_course_slug text)
returns table (
  certificate_id uuid,
  course_slug text,
  course_title text,
  student_name text,
  completed_at timestamptz,
  issued_at timestamptz
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_student uuid := auth.uid();
  v_policy public.certificate_course_policies%rowtype;
  v_total integer;
  v_completed integer;
  v_quiz_required integer;
  v_quiz_met integer;
  v_completed_at timestamptz;
  v_student_name text;
  v_certificate_id uuid;
begin
  if v_student is null then
    raise exception 'You must be signed in to issue a certificate.'
      using errcode = '42501';
  end if;

  if p_course_slug is null
     or char_length(p_course_slug) not between 1 and 120
     or p_course_slug !~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  then
    raise exception 'Invalid course identifier.' using errcode = '22023';
  end if;

  select policies.* into v_policy
  from public.certificate_course_policies as policies
  where policies.course_slug = p_course_slug
    and policies.is_active;

  if not found then
    raise exception 'This course is not available for a SpeakUp certificate.'
      using errcode = 'P0002';
  end if;

  if v_policy.premium
     and not public.has_active_membership(v_student)
  then
    raise exception 'Active Premium access is required for this certificate.'
      using errcode = '42501';
  end if;

  select count(*)::integer into v_total
  from public.certificate_course_lessons as requirements
  where requirements.course_slug = p_course_slug;

  if v_total = 0 then
    raise exception 'This course does not have certificate requirements yet.'
      using errcode = 'P0002';
  end if;

  select count(*)::integer into v_completed
  from public.certificate_course_lessons as requirements
  join public.lesson_progress as progress
    on progress.user_id = v_student
   and progress.course_slug = requirements.course_slug
   and progress.lesson_slug = requirements.lesson_slug
  where requirements.course_slug = p_course_slug
    and progress.is_completed;

  if v_completed < v_total then
    raise exception 'Complete every required lesson before issuing this certificate.'
      using errcode = 'P0003';
  end if;

  select count(*)::integer into v_quiz_required
  from public.certificate_course_lessons as requirements
  where requirements.course_slug = p_course_slug
    and requirements.requires_quiz;

  select count(*)::integer into v_quiz_met
  from public.certificate_course_lessons as requirements
  join public.lesson_progress as progress
    on progress.user_id = v_student
   and progress.course_slug = requirements.course_slug
   and progress.lesson_slug = requirements.lesson_slug
  where requirements.course_slug = p_course_slug
    and requirements.requires_quiz
    and progress.best_score_total > 0
    and progress.best_score * 100
      >= v_policy.minimum_quiz_percent * progress.best_score_total;

  if v_quiz_met < v_quiz_required then
    raise exception 'Reach the required quiz score on every quiz lesson first.'
      using errcode = 'P0003';
  end if;

  select max(progress.completed_at) into v_completed_at
  from public.certificate_course_lessons as requirements
  join public.lesson_progress as progress
    on progress.user_id = v_student
   and progress.course_slug = requirements.course_slug
   and progress.lesson_slug = requirements.lesson_slug
  where requirements.course_slug = p_course_slug
    and progress.is_completed;

  if v_completed_at is null then
    raise exception 'A completion date could not be verified.'
      using errcode = 'P0003';
  end if;

  select nullif(btrim(profiles.display_name), '') into v_student_name
  from public.profiles as profiles
  where profiles.id = v_student;

  if v_student_name is null then
    raise exception 'Add your display name to your account before issuing a certificate.'
      using errcode = '22023';
  end if;

  insert into public.certificates (
    user_id,
    course_slug,
    student_name,
    course_title,
    completed_at
  )
  values (
    v_student,
    p_course_slug,
    v_student_name,
    v_policy.course_title,
    v_completed_at
  )
  on conflict on constraint certificates_user_course_unique do nothing
  returning id into v_certificate_id;

  if v_certificate_id is null then
    raise exception 'A certificate for this course has already been issued.'
      using errcode = '23505';
  end if;

  return query
  select
    certificates.id,
    certificates.course_slug,
    certificates.course_title,
    certificates.student_name,
    certificates.completed_at,
    certificates.issued_at
  from public.certificates as certificates
  where certificates.id = v_certificate_id;
end;
$$;

comment on function public.issue_certificate(text) is
  'Issues one certificate for the signed-in student after re-checking every requirement in the database.';

revoke all on function public.issue_certificate(text)
  from public, anon, authenticated;
grant execute on function public.issue_certificate(text) to authenticated;

-- Student-owned certificate ---------------------------------------------------

create function public.get_my_certificate(p_certificate_id uuid)
returns table (
  certificate_id uuid,
  course_slug text,
  student_name text,
  course_title text,
  completed_at timestamptz,
  issued_at timestamptz,
  revoked_at timestamptz
)
language sql
stable
security definer
set search_path = ''
as $$
  select
    certificates.id,
    certificates.course_slug,
    certificates.student_name,
    certificates.course_title,
    certificates.completed_at,
    certificates.issued_at,
    certificates.revoked_at
  from public.certificates as certificates
  where certificates.id = p_certificate_id
    and certificates.user_id = auth.uid();
$$;

comment on function public.get_my_certificate(uuid) is
  'Returns a certificate only when it belongs to the signed-in student.';

revoke all on function public.get_my_certificate(uuid)
  from public, anon, authenticated;
grant execute on function public.get_my_certificate(uuid) to authenticated;

-- Public verification ---------------------------------------------------------
-- The UUID itself acts as the unguessable verification key. The response never
-- includes an email address, user ID or administrator note.

create function public.verify_certificate(p_certificate_id uuid)
returns table (
  status text,
  student_name text,
  course_title text,
  completed_at timestamptz,
  issued_at timestamptz,
  revoked_at timestamptz
)
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  v_certificate public.certificates%rowtype;
begin
  if p_certificate_id is null then
    return query
    select
      'not_found'::text,
      null::text,
      null::text,
      null::timestamptz,
      null::timestamptz,
      null::timestamptz;
    return;
  end if;

  select certificates.* into v_certificate
  from public.certificates as certificates
  where certificates.id = p_certificate_id;

  if not found then
    return query
    select
      'not_found'::text,
      null::text,
      null::text,
      null::timestamptz,
      null::timestamptz,
      null::timestamptz;
    return;
  end if;

  return query
  select
    case
      when v_certificate.revoked_at is null then 'valid'
      else 'revoked'
    end,
    v_certificate.student_name,
    v_certificate.course_title,
    v_certificate.completed_at,
    v_certificate.issued_at,
    v_certificate.revoked_at;
end;
$$;

comment on function public.verify_certificate(uuid) is
  'Public certificate status. Exposes only the name printed on the certificate, course, dates and revocation flag.';

revoke all on function public.verify_certificate(uuid)
  from public, anon, authenticated;
grant execute on function public.verify_certificate(uuid)
  to anon, authenticated;

-- Administrator review --------------------------------------------------------

create function public.admin_list_certificates()
returns table (
  id uuid,
  student_email text,
  student_name text,
  course_slug text,
  course_title text,
  completed_at timestamptz,
  issued_at timestamptz,
  revoked_at timestamptz,
  revocation_reason text,
  revoked_by_email text
)
language sql
stable
security definer
set search_path = ''
as $$
  select
    certificates.id,
    students.email::text,
    certificates.student_name,
    certificates.course_slug,
    certificates.course_title,
    certificates.completed_at,
    certificates.issued_at,
    certificates.revoked_at,
    certificates.revocation_reason,
    revokers.email::text
  from public.certificates as certificates
  join auth.users as students on students.id = certificates.user_id
  left join auth.users as revokers on revokers.id = certificates.revoked_by
  where public.is_admin()
  order by certificates.issued_at desc
  limit 500;
$$;

comment on function public.admin_list_certificates() is
  'Administrator-only certificate list. Returns no rows for non-administrators.';

revoke all on function public.admin_list_certificates()
  from public, anon, authenticated;
grant execute on function public.admin_list_certificates() to authenticated;

create function public.admin_revoke_certificate(
  p_certificate_id uuid,
  p_reason text
)
returns table (
  certificate_id uuid,
  revoked_at timestamptz
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_actor uuid := auth.uid();
  v_actor_email text;
  v_reason text := btrim(coalesce(p_reason, ''));
  v_certificate public.certificates%rowtype;
begin
  if not public.is_admin() then
    raise exception 'Only administrators can revoke certificates.'
      using errcode = '42501';
  end if;

  if p_certificate_id is null then
    raise exception 'Choose a certificate to revoke.' using errcode = '22023';
  end if;

  if char_length(v_reason) < 5 or char_length(v_reason) > 500 then
    raise exception 'Enter a revocation reason between 5 and 500 characters.'
      using errcode = '22023';
  end if;

  select certificates.* into v_certificate
  from public.certificates as certificates
  where certificates.id = p_certificate_id
    and certificates.revoked_at is null
  for update;

  if not found then
    raise exception 'That certificate is missing or already revoked.'
      using errcode = 'P0002';
  end if;

  select admins.email into v_actor_email
  from public.admin_users as admins
  where admins.user_id = v_actor;

  update public.certificates
  set
    revoked_at = now(),
    revoked_by = v_actor,
    revocation_reason = v_reason
  where certificates.id = v_certificate.id;

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
    'certificate_revoked',
    'certificate',
    v_certificate.id,
    left(
      'Revoked certificate for ' || v_certificate.student_name
        || ' — ' || v_certificate.course_title,
      300
    ),
    jsonb_build_object(
      'course_slug', v_certificate.course_slug,
      'course_title', v_certificate.course_title,
      'reason', v_reason
    )
  );

  return query
  select certificates.id, certificates.revoked_at
  from public.certificates as certificates
  where certificates.id = v_certificate.id;
end;
$$;

comment on function public.admin_revoke_certificate(uuid, text) is
  'Revokes one certificate with a required justification and writes an audit entry.';

revoke all on function public.admin_revoke_certificate(uuid, text)
  from public, anon, authenticated;
grant execute on function public.admin_revoke_certificate(uuid, text)
  to authenticated;
