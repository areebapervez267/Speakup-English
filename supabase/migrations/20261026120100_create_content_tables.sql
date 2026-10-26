-- Phase 7, migration 2: draft content, published snapshots and quiz answer keys.
-- Apply this file once, after the admin roles migration.
--
-- Draft tables are private to administrators. Published tables are readable by
-- everyone but can only be written by the security-definer publishing functions
-- in the next migration. Correct answers live in a separate table that has no
-- grants and no RLS policies, so they are never exposed with published lessons.

-- Draft content ---------------------------------------------------------------

create table public.content_courses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text not null,
  description text not null default '',
  level text not null,
  skill text not null,
  outcomes text[] not null default '{}',
  metadata jsonb not null default '{}'::jsonb,
  premium boolean not null default false,
  hours integer not null default 1,
  status text not null default 'draft',
  sort_order integer not null default 0,
  last_published_at timestamptz,
  created_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint content_courses_slug_check check (
    char_length(slug) between 1 and 120
    and slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  ),
  constraint content_courses_title_check check (
    char_length(title) between 1 and 160
  ),
  constraint content_courses_summary_check check (
    char_length(summary) between 1 and 500
  ),
  constraint content_courses_description_check check (
    char_length(description) <= 4000
  ),
  constraint content_courses_level_check check (
    level in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')
  ),
  constraint content_courses_skill_check check (
    skill in (
      'grammar',
      'listening',
      'speaking',
      'pronunciation',
      'vocabulary',
      'reading',
      'writing'
    )
  ),
  constraint content_courses_outcomes_check check (
    cardinality(outcomes) <= 12
    and array_position(outcomes, null) is null
  ),
  constraint content_courses_metadata_check check (
    jsonb_typeof(metadata) = 'object'
    and pg_column_size(metadata) <= 20000
  ),
  constraint content_courses_hours_check check (hours between 1 and 200),
  constraint content_courses_status_check check (
    status in ('draft', 'published', 'archived')
  )
);

comment on table public.content_courses is
  'Administrator-managed course drafts. Only published snapshots are visible to students.';

create index content_courses_status_level_skill_idx
  on public.content_courses (status, level, skill);

create table public.content_units (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.content_courses (id) on delete cascade,
  title text not null,
  description text not null default '',
  status text not null default 'draft',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint content_units_title_check check (
    char_length(title) between 1 and 200
  ),
  constraint content_units_description_check check (
    char_length(description) <= 2000
  ),
  constraint content_units_status_check check (
    status in ('draft', 'published')
  ),
  constraint content_units_id_course_key unique (id, course_id)
);

comment on table public.content_units is
  'Ordered course units in the administrator draft workspace.';

create index content_units_course_order_idx
  on public.content_units (course_id, sort_order, created_at);

create table public.content_lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.content_courses (id) on delete cascade,
  unit_id uuid not null,
  slug text not null,
  title text not null,
  summary text not null,
  objective text not null,
  minutes integer not null default 10,
  blocks jsonb not null default '[]'::jsonb,
  quiz jsonb not null default '[]'::jsonb,
  status text not null default 'draft',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint content_lessons_unit_course_fk
    foreign key (unit_id, course_id)
    references public.content_units (id, course_id)
    on delete cascade,
  constraint content_lessons_slug_check check (
    char_length(slug) between 1 and 120
    and slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  ),
  constraint content_lessons_title_check check (
    char_length(title) between 1 and 200
  ),
  constraint content_lessons_summary_check check (
    char_length(summary) between 1 and 1000
  ),
  constraint content_lessons_objective_check check (
    char_length(objective) between 1 and 1000
  ),
  constraint content_lessons_minutes_check check (minutes between 1 and 600),
  constraint content_lessons_blocks_check check (jsonb_typeof(blocks) = 'array'),
  constraint content_lessons_quiz_check check (jsonb_typeof(quiz) = 'array'),
  constraint content_lessons_status_check check (
    status in ('draft', 'published')
  ),
  constraint content_lessons_course_slug_key unique (course_id, slug)
);

comment on table public.content_lessons is
  'Lesson drafts including full quiz answer keys. Never granted to anonymous visitors or ordinary students.';

create index content_lessons_unit_order_idx
  on public.content_lessons (unit_id, sort_order, created_at);

create index content_lessons_course_status_idx
  on public.content_lessons (course_id, status);

-- Published snapshots ---------------------------------------------------------

create table public.published_courses (
  course_id uuid primary key
    references public.content_courses (id) on delete cascade,
  slug text not null unique,
  title text not null,
  summary text not null,
  description text not null,
  level text not null,
  skill text not null,
  outcomes text[] not null default '{}',
  metadata jsonb not null default '{}'::jsonb,
  premium boolean not null default false,
  hours integer not null,
  lesson_count integer not null,
  published_at timestamptz not null default now(),
  constraint published_courses_slug_check check (
    char_length(slug) between 1 and 120
    and slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  ),
  constraint published_courses_level_check check (
    level in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')
  ),
  constraint published_courses_skill_check check (
    skill in (
      'grammar',
      'listening',
      'speaking',
      'pronunciation',
      'vocabulary',
      'reading',
      'writing'
    )
  ),
  constraint published_courses_lesson_count_check check (lesson_count >= 1),
  constraint published_courses_hours_check check (hours between 1 and 200)
);

comment on table public.published_courses is
  'Immutable snapshots of published course metadata. Replaced only by publish_content_course().';

create table public.published_units (
  id uuid primary key,
  course_id uuid not null
    references public.published_courses (course_id) on delete cascade,
  title text not null,
  description text not null default '',
  sort_order integer not null default 0,
  constraint published_units_id_course_key unique (id, course_id)
);

create index published_units_course_order_idx
  on public.published_units (course_id, sort_order);

create table public.published_lessons (
  id uuid primary key,
  course_id uuid not null,
  unit_id uuid not null,
  slug text not null,
  title text not null,
  summary text not null,
  objective text not null,
  minutes integer not null,
  blocks jsonb not null,
  questions jsonb not null,
  sort_order integer not null default 0,
  constraint published_lessons_unit_course_fk
    foreign key (unit_id, course_id)
    references public.published_units (id, course_id)
    on delete cascade,
  constraint published_lessons_course_slug_key unique (course_id, slug),
  constraint published_lessons_questions_check check (
    jsonb_typeof(questions) = 'array'
  ),
  constraint published_lessons_blocks_check check (
    jsonb_typeof(blocks) = 'array'
  )
);

comment on table public.published_lessons is
  'Published lesson bodies with sanitized questions: id, question and options only. Correct answers are not stored here.';

create index published_lessons_unit_order_idx
  on public.published_lessons (unit_id, sort_order);

create table public.published_quiz_answers (
  lesson_id uuid primary key
    references public.published_lessons (id) on delete cascade,
  course_slug text not null,
  lesson_slug text not null,
  answers jsonb not null,
  constraint published_quiz_answers_answers_check check (
    jsonb_typeof(answers) = 'array'
  )
);

comment on table public.published_quiz_answers is
  'Private answer keys for published quizzes. Only grade_published_lesson_quiz() can read them.';

create index published_quiz_answers_identity_idx
  on public.published_quiz_answers (course_slug, lesson_slug);

-- Row level security and least-privilege grants --------------------------------

alter table public.content_courses enable row level security;
alter table public.content_units enable row level security;
alter table public.content_lessons enable row level security;
alter table public.published_courses enable row level security;
alter table public.published_units enable row level security;
alter table public.published_lessons enable row level security;
alter table public.published_quiz_answers enable row level security;

create policy "content_courses_admin_select"
on public.content_courses for select to authenticated
using (public.is_admin());
create policy "content_courses_admin_insert"
on public.content_courses for insert to authenticated
with check (public.is_admin());
create policy "content_courses_admin_update"
on public.content_courses for update to authenticated
using (public.is_admin())
with check (public.is_admin());
create policy "content_courses_admin_delete"
on public.content_courses for delete to authenticated
using (public.is_admin());

create policy "content_units_admin_select"
on public.content_units for select to authenticated
using (public.is_admin());
create policy "content_units_admin_insert"
on public.content_units for insert to authenticated
with check (public.is_admin());
create policy "content_units_admin_update"
on public.content_units for update to authenticated
using (public.is_admin())
with check (public.is_admin());
create policy "content_units_admin_delete"
on public.content_units for delete to authenticated
using (public.is_admin());

create policy "content_lessons_admin_select"
on public.content_lessons for select to authenticated
using (public.is_admin());
create policy "content_lessons_admin_insert"
on public.content_lessons for insert to authenticated
with check (public.is_admin());
create policy "content_lessons_admin_update"
on public.content_lessons for update to authenticated
using (public.is_admin())
with check (public.is_admin());
create policy "content_lessons_admin_delete"
on public.content_lessons for delete to authenticated
using (public.is_admin());

create policy "published_courses_public_select"
on public.published_courses for select to anon, authenticated
using (true);
create policy "published_units_public_select"
on public.published_units for select to anon, authenticated
using (true);
create policy "published_lessons_public_select"
on public.published_lessons for select to anon, authenticated
using (true);

-- No policy and no grants on published_quiz_answers.
-- No write policies on the published tables: only security-definer functions
-- (owned by the database owner) can replace a snapshot.

revoke all on table public.content_courses from public, anon, authenticated;
revoke all on table public.content_units from public, anon, authenticated;
revoke all on table public.content_lessons from public, anon, authenticated;
revoke all on table public.published_courses from public, anon, authenticated;
revoke all on table public.published_units from public, anon, authenticated;
revoke all on table public.published_lessons from public, anon, authenticated;
revoke all on table public.published_quiz_answers from public, anon, authenticated;

grant select, insert, update, delete on table public.content_courses to authenticated;
grant select, insert, update, delete on table public.content_units to authenticated;
grant select, insert, update, delete on table public.content_lessons to authenticated;

grant select on table public.published_courses to anon, authenticated;
grant select on table public.published_units to anon, authenticated;
grant select on table public.published_lessons to anon, authenticated;
