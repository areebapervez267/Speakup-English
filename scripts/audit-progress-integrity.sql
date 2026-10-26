-- Read-only audit for progress and quiz evidence created before Phase 9.1.
--
-- Run this in the Supabase SQL Editor on a project where every migration in
-- supabase/migrations has been applied. Applying the migrations is safe for
-- historical rows: the hardening migration revokes writes and adds functions,
-- but it does not delete or rewrite lesson_progress, quiz_attempts or
-- certificates.
--
-- This file contains SELECT statements only. It sets the session default to
-- read-only as a guard, then reports review leads. A finding is not proof of
-- tampering: for example, a forged 4/4 attempt on a four-question quiz looks
-- exactly like a legitimate perfect score. Use the findings to decide what to
-- inspect manually. Do not delete or rewrite student records from this file.
--
-- Do not run this against production without the owner's approval. It returns
-- user IDs and quiz history to whoever runs it.

set default_transaction_read_only = on;

-- 1. Attempts for unknown lessons, or with a question total that does not match
--    the current quiz. Published question counts can change after a course is
--    republished, so treat a published mismatch as "review", not proof.

with expected as (
  select
    keys.course_slug,
    keys.lesson_slug,
    jsonb_array_length(keys.questions) as expected_total,
    'static'::text as source
  from public.static_quiz_answer_keys as keys
  where not exists (
    select 1
    from public.published_lessons as lessons
    join public.published_courses as courses
      on courses.course_id = lessons.course_id
    where courses.slug = keys.course_slug
      and lessons.slug = keys.lesson_slug
  )

  union all

  select
    courses.slug,
    lessons.slug,
    case
      when jsonb_typeof(lessons.questions) = 'array'
        then jsonb_array_length(lessons.questions)
      else 0
    end as expected_total,
    'published'::text as source
  from public.published_lessons as lessons
  join public.published_courses as courses
    on courses.course_id = lessons.course_id
  where jsonb_typeof(lessons.questions) = 'array'
    and jsonb_array_length(lessons.questions) > 0
)
select
  attempts.id,
  attempts.user_id,
  attempts.course_slug,
  attempts.lesson_slug,
  attempts.score,
  attempts.total_questions,
  attempts.attempted_at,
  expected.expected_total,
  expected.source,
  case
    when expected.expected_total is null then 'unknown_lesson'
    else 'question_total_mismatch'
  end as finding
from public.quiz_attempts as attempts
left join expected
  on expected.course_slug = attempts.course_slug
 and expected.lesson_slug = attempts.lesson_slug
where expected.expected_total is null
   or attempts.total_questions <> expected.expected_total
order by attempts.attempted_at, attempts.id;

-- 2. Attempts with a timestamp that the application could not have produced.
--    attempted_at defaults to now() at insert time, so a timestamp before the
--    account existed, or in the future, indicates a direct write or clock
--    manipulation.

select
  attempts.id,
  attempts.user_id,
  attempts.course_slug,
  attempts.lesson_slug,
  attempts.score,
  attempts.total_questions,
  attempts.attempted_at,
  users.created_at as account_created_at,
  case
    when attempts.attempted_at < users.created_at - interval '1 minute'
      then 'before_account_creation'
    else 'future_timestamp'
  end as finding
from public.quiz_attempts as attempts
join auth.users as users
  on users.id = attempts.user_id
where attempts.attempted_at < users.created_at - interval '1 minute'
   or attempts.attempted_at > now() + interval '5 minutes'
order by attempts.attempted_at, attempts.id;

-- 3. Progress rows with impossible chronology.

select
  progress.user_id,
  progress.course_slug,
  progress.lesson_slug,
  progress.is_completed,
  progress.completed_at,
  progress.created_at,
  progress.updated_at,
  users.created_at as account_created_at,
  case
    when progress.created_at < users.created_at - interval '1 minute'
      then 'progress_before_account_creation'
    when progress.completed_at is not null
      and progress.completed_at < users.created_at - interval '1 minute'
      then 'completion_before_account_creation'
    else 'future_timestamp'
  end as finding
from public.lesson_progress as progress
join auth.users as users
  on users.id = progress.user_id
where progress.created_at < users.created_at - interval '1 minute'
   or (
     progress.completed_at is not null
     and progress.completed_at < users.created_at - interval '1 minute'
   )
   or progress.completed_at > now() + interval '5 minutes'
   or progress.updated_at > now() + interval '5 minutes'
order by progress.completed_at, progress.user_id;

-- 4. Completion rows for lessons that are not in the current authored,
--    published or certificate curriculum. Historical rows can remain after a
--    lesson is retired, so review names and dates rather than assuming fraud.

select
  progress.user_id,
  progress.course_slug,
  progress.lesson_slug,
  progress.completed_at,
  progress.updated_at
from public.lesson_progress as progress
where progress.is_completed
  and not exists (
    select 1
    from public.static_quiz_answer_keys as keys
    where keys.course_slug = progress.course_slug
      and keys.lesson_slug = progress.lesson_slug
  )
  and not exists (
    select 1
    from public.published_lessons as lessons
    join public.published_courses as courses
      on courses.course_id = lessons.course_id
    where courses.slug = progress.course_slug
      and lessons.slug = progress.lesson_slug
  )
  and not exists (
    select 1
    from public.certificate_course_lessons as requirements
    where requirements.course_slug = progress.course_slug
      and requirements.lesson_slug = progress.lesson_slug
  )
order by progress.completed_at, progress.user_id;

-- 5. Best scores that no surviving attempt can explain. The best score is a
--    high-water mark written by the attempt trigger, so it should never exceed
--    the best stored attempt. A missing attempt can also mean a student deleted
--    their attempts before Phase 9.1 (that is expected under the old model).

with best_attempt as (
  select distinct on (user_id, course_slug, lesson_slug)
    user_id,
    course_slug,
    lesson_slug,
    score,
    total_questions,
    attempted_at
  from public.quiz_attempts
  order by
    user_id,
    course_slug,
    lesson_slug,
    (score::numeric / total_questions) desc,
    score desc,
    attempted_at asc
)
select
  progress.user_id,
  progress.course_slug,
  progress.lesson_slug,
  progress.best_score,
  progress.best_score_total,
  best_attempt.score as best_attempt_score,
  best_attempt.total_questions as best_attempt_total,
  case
    when best_attempt.user_id is null then 'best_score_without_attempts'
    else 'best_score_above_attempts'
  end as finding
from public.lesson_progress as progress
left join best_attempt
  on best_attempt.user_id = progress.user_id
 and best_attempt.course_slug = progress.course_slug
 and best_attempt.lesson_slug = progress.lesson_slug
where progress.best_score_total > 0
  and (
    best_attempt.user_id is null
    or progress.best_score::numeric * best_attempt.total_questions
       > best_attempt.score::numeric * progress.best_score_total
  )
order by progress.user_id, progress.course_slug, progress.lesson_slug;

-- 6. High-frequency attempt bursts. This is a heuristic, not proof: a student
--    can legitimately retry a few times. Investigate accounts with many
--    attempts in a very short window, especially when paired with findings 1-5.

select
  attempts.user_id,
  attempts.course_slug,
  attempts.lesson_slug,
  count(*) as attempt_count,
  min(attempts.attempted_at) as first_attempt_at,
  max(attempts.attempted_at) as last_attempt_at
from public.quiz_attempts as attempts
group by
  attempts.user_id,
  attempts.course_slug,
  attempts.lesson_slug
having count(*) >= 10
   and max(attempts.attempted_at) - min(attempts.attempted_at)
       <= interval '60 seconds'
order by count(*) desc, attempts.user_id;

-- 7. Issued certificates whose course has at least one flagged progress or
--    attempt row. This does not revoke anything. It lists certificates that may
--    rest on questionable evidence so the owner can review them manually.

with best_attempt as (
  select distinct on (user_id, course_slug, lesson_slug)
    user_id,
    course_slug,
    lesson_slug,
    score,
    total_questions,
    attempted_at
  from public.quiz_attempts
  order by
    user_id,
    course_slug,
    lesson_slug,
    (score::numeric / total_questions) desc,
    score desc,
    attempted_at asc
),
flagged as (
  select
    attempts.user_id,
    attempts.course_slug,
    'attempt_shape_or_unknown_lesson'::text as reason
  from public.quiz_attempts as attempts
  where (
    not exists (
      select 1
      from public.static_quiz_answer_keys as keys
      where keys.course_slug = attempts.course_slug
        and keys.lesson_slug = attempts.lesson_slug
    )
    and not exists (
      select 1
      from public.published_lessons as lessons
      join public.published_courses as courses
        on courses.course_id = lessons.course_id
      where courses.slug = attempts.course_slug
        and lessons.slug = attempts.lesson_slug
    )
  )
  or exists (
    select 1
    from public.static_quiz_answer_keys as keys
    where keys.course_slug = attempts.course_slug
      and keys.lesson_slug = attempts.lesson_slug
      and attempts.total_questions <> jsonb_array_length(keys.questions)
      and not exists (
        select 1
        from public.published_lessons as lessons
        join public.published_courses as courses
          on courses.course_id = lessons.course_id
        where courses.slug = attempts.course_slug
          and lessons.slug = attempts.lesson_slug
      )
  )
  or exists (
    select 1
    from public.published_lessons as lessons
    join public.published_courses as courses
      on courses.course_id = lessons.course_id
    where courses.slug = attempts.course_slug
      and lessons.slug = attempts.lesson_slug
      and jsonb_typeof(lessons.questions) = 'array'
      and attempts.total_questions <> jsonb_array_length(lessons.questions)
  )

  union

  select
    attempts.user_id,
    attempts.course_slug,
    'attempt_chronology'::text
  from public.quiz_attempts as attempts
  join auth.users as users
    on users.id = attempts.user_id
  where attempts.attempted_at < users.created_at - interval '1 minute'
     or attempts.attempted_at > now() + interval '5 minutes'

  union

  select
    progress.user_id,
    progress.course_slug,
    'completion_chronology'::text
  from public.lesson_progress as progress
  join auth.users as users
    on users.id = progress.user_id
  where progress.created_at < users.created_at - interval '1 minute'
     or (
       progress.completed_at is not null
       and progress.completed_at < users.created_at - interval '1 minute'
     )
     or progress.completed_at > now() + interval '5 minutes'
     or progress.updated_at > now() + interval '5 minutes'

  union

  select
    progress.user_id,
    progress.course_slug,
    'unknown_completed_lesson'::text
  from public.lesson_progress as progress
  where progress.is_completed
    and not exists (
      select 1
      from public.static_quiz_answer_keys as keys
      where keys.course_slug = progress.course_slug
        and keys.lesson_slug = progress.lesson_slug
    )
    and not exists (
      select 1
      from public.published_lessons as lessons
      join public.published_courses as courses
        on courses.course_id = lessons.course_id
      where courses.slug = progress.course_slug
        and lessons.slug = progress.lesson_slug
    )
    and not exists (
      select 1
      from public.certificate_course_lessons as requirements
      where requirements.course_slug = progress.course_slug
        and requirements.lesson_slug = progress.lesson_slug
    )

  union

  select
    progress.user_id,
    progress.course_slug,
    'unexplained_best_score'::text
  from public.lesson_progress as progress
  left join best_attempt
    on best_attempt.user_id = progress.user_id
   and best_attempt.course_slug = progress.course_slug
   and best_attempt.lesson_slug = progress.lesson_slug
  where progress.best_score_total > 0
    and (
      best_attempt.user_id is null
      or progress.best_score::numeric * best_attempt.total_questions
         > best_attempt.score::numeric * progress.best_score_total
    )
)
select
  certificates.id,
  certificates.user_id,
  certificates.course_slug,
  certificates.student_name,
  certificates.issued_at,
  certificates.revoked_at,
  array_agg(distinct flagged.reason order by flagged.reason) as reasons
from public.certificates as certificates
join flagged
  on flagged.user_id = certificates.user_id
 and flagged.course_slug = certificates.course_slug
group by
  certificates.id,
  certificates.user_id,
  certificates.course_slug,
  certificates.student_name,
  certificates.issued_at,
  certificates.revoked_at
order by certificates.issued_at desc;

-- End of read-only audit. The session remains read-only so an accidental
-- follow-up statement cannot modify data in this tab.
