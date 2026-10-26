-- Phase 5, migration 2: lesson progress, quiz attempts and best-score logic.
-- Apply this file once, after the student profiles migration.
--
-- Course and lesson identifiers are the stable slugs already used by the
-- curriculum and URLs. Titles may change without breaking saved progress.

create table public.lesson_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  course_slug text not null,
  lesson_slug text not null,
  is_completed boolean not null default false,
  completed_at timestamptz,
  best_score smallint not null default 0,
  best_score_total smallint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint lesson_progress_pkey primary key (user_id, course_slug, lesson_slug),
  constraint lesson_progress_course_slug_check check (
    char_length(course_slug) between 1 and 120
    and course_slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  ),
  constraint lesson_progress_lesson_slug_check check (
    char_length(lesson_slug) between 1 and 120
    and lesson_slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  ),
  constraint lesson_progress_score_check check (
    best_score >= 0
    and best_score_total >= 0
    and best_score <= best_score_total
  ),
  constraint lesson_progress_completion_check check (
    (is_completed and completed_at is not null)
    or (not is_completed and completed_at is null)
  )
);

comment on table public.lesson_progress is
  'One row per student, course and lesson. Completion and best quiz score only.';
comment on column public.lesson_progress.best_score is
  'Best score achieved, updated by the quiz attempt trigger.';

create index lesson_progress_recent_activity_idx
  on public.lesson_progress (user_id, updated_at desc);

create index lesson_progress_completed_course_idx
  on public.lesson_progress (user_id, course_slug)
  where is_completed;

create trigger lesson_progress_set_updated_at
before update on public.lesson_progress
for each row execute function public.set_updated_at();

create table public.quiz_attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  course_slug text not null,
  lesson_slug text not null,
  score smallint not null,
  total_questions smallint not null,
  attempted_at timestamptz not null default now(),
  constraint quiz_attempts_course_slug_check check (
    char_length(course_slug) between 1 and 120
    and course_slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  ),
  constraint quiz_attempts_lesson_slug_check check (
    char_length(lesson_slug) between 1 and 120
    and lesson_slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  ),
  constraint quiz_attempts_score_check check (
    score >= 0
    and total_questions > 0
    and score <= total_questions
  )
);

comment on table public.quiz_attempts is
  'Minimal quiz analytics: course and lesson slugs, score, total and timestamp. No answers or personal data.';

create index quiz_attempts_recent_activity_idx
  on public.quiz_attempts (user_id, attempted_at desc);

create index quiz_attempts_lesson_idx
  on public.quiz_attempts (user_id, course_slug, lesson_slug, attempted_at desc);

-- Recomputes the lesson high-water mark from the newly inserted attempt. The
-- database, not the browser, is the only writer of best_score.
create function public.record_quiz_attempt_best_score()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.user_id is distinct from auth.uid() then
    raise exception 'Quiz attempts can only update the submitting student''s progress.'
      using errcode = '42501';
  end if;

  insert into public.lesson_progress as progress (
    user_id,
    course_slug,
    lesson_slug,
    is_completed,
    completed_at,
    best_score,
    best_score_total
  )
  values (
    new.user_id,
    new.course_slug,
    new.lesson_slug,
    false,
    null,
    new.score,
    new.total_questions
  )
  on conflict on constraint lesson_progress_pkey do update
  set
    best_score = excluded.best_score,
    best_score_total = excluded.best_score_total
  where
    excluded.best_score_total > 0
    and (
      progress.best_score_total = 0
      or excluded.best_score * progress.best_score_total
         > progress.best_score * excluded.best_score_total
      or (
        excluded.best_score * progress.best_score_total
          = progress.best_score * excluded.best_score_total
        and excluded.best_score > progress.best_score
      )
    );

  return new;
end;
$$;

revoke all on function public.record_quiz_attempt_best_score()
  from public, anon, authenticated;

create trigger quiz_attempts_record_best_score
after insert on public.quiz_attempts
for each row execute function public.record_quiz_attempt_best_score();

-- Idempotent explicit completion. A repeated call leaves completed_at and
-- updated_at unchanged. Quiz attempts never call this function.
create function public.mark_lesson_complete(
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
