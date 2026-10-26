-- Phase 5, migration 4: per-course progress and quiz aggregates.
-- Apply this file once, after the RLS migration.
--
-- Views use security_invoker so the caller's RLS policies and grants apply.
-- They return only the signed-in student's rows; no aggregate leaks across users.

create view public.student_course_progress
with (security_invoker = true)
as
select
  user_id,
  course_slug,
  count(*) filter (where is_completed)::integer as lessons_completed,
  count(*)::integer as lessons_tracked,
  max(updated_at) as last_activity_at
from public.lesson_progress
group by user_id, course_slug;

comment on view public.student_course_progress is
  'Per-student completion totals for each course, filtered by row level security.';

create view public.student_course_quiz_stats
with (security_invoker = true)
as
select
  user_id,
  course_slug,
  count(*)::integer as attempt_count,
  max(attempted_at) as last_attempt_at,
  (
    array_agg(
      score
      order by
        (score::numeric / total_questions) desc,
        score desc,
        attempted_at asc
    )
  )[1] as best_score,
  (
    array_agg(
      total_questions
      order by
        (score::numeric / total_questions) desc,
        score desc,
        attempted_at asc
    )
  )[1] as best_score_total
from public.quiz_attempts
group by user_id, course_slug;

comment on view public.student_course_quiz_stats is
  'Per-student quiz attempt count and best score for each course, filtered by row level security.';

revoke all on table public.student_course_progress
  from public, anon, authenticated;
revoke all on table public.student_course_quiz_stats
  from public, anon, authenticated;

grant select on table public.student_course_progress to authenticated;
grant select on table public.student_course_quiz_stats to authenticated;
