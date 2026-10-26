-- Phase 5, migration 3: row level security and least-privilege grants.
-- Apply this file once, after the learning progress migration.
--
-- Students can only touch rows whose user_id matches their verified auth.uid().
-- Anonymous visitors receive no table or function privileges. The service-role
-- key is never used by this application.

alter table public.profiles enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.quiz_attempts enable row level security;

-- Profiles ------------------------------------------------------------------

create policy "profiles_select_own"
on public.profiles
for select
to authenticated
using ((select auth.uid()) = id);

create policy "profiles_insert_own"
on public.profiles
for insert
to authenticated
with check ((select auth.uid()) = id);

create policy "profiles_update_own"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

-- Lesson progress -----------------------------------------------------------

create policy "lesson_progress_select_own"
on public.lesson_progress
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "lesson_progress_insert_own"
on public.lesson_progress
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "lesson_progress_update_own"
on public.lesson_progress
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create policy "lesson_progress_delete_own"
on public.lesson_progress
for delete
to authenticated
using ((select auth.uid()) = user_id);

-- Quiz attempts -------------------------------------------------------------

create policy "quiz_attempts_select_own"
on public.quiz_attempts
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "quiz_attempts_insert_own"
on public.quiz_attempts
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "quiz_attempts_delete_own"
on public.quiz_attempts
for delete
to authenticated
using ((select auth.uid()) = user_id);

-- Attempts are intentionally immutable: there is no UPDATE policy or grant.

-- Grants --------------------------------------------------------------------
-- Supabase default privileges can grant broad access to new public tables, so
-- remove everything first and grant only the operations the student UI needs.

revoke all on table public.profiles from public, anon, authenticated;
revoke all on table public.lesson_progress from public, anon, authenticated;
revoke all on table public.quiz_attempts from public, anon, authenticated;

grant select on table public.profiles to authenticated;
grant insert (id, display_name) on table public.profiles to authenticated;
grant update (display_name) on table public.profiles to authenticated;

grant select on table public.lesson_progress to authenticated;
grant insert (
  user_id,
  course_slug,
  lesson_slug,
  is_completed,
  completed_at
) on table public.lesson_progress to authenticated;
grant update (is_completed, completed_at)
  on table public.lesson_progress to authenticated;
grant delete on table public.lesson_progress to authenticated;

grant select on table public.quiz_attempts to authenticated;
grant insert (
  user_id,
  course_slug,
  lesson_slug,
  score,
  total_questions
) on table public.quiz_attempts to authenticated;
grant delete on table public.quiz_attempts to authenticated;

-- The completion function runs with the caller's privileges, so the RLS
-- policies and column grants above still apply inside it.
revoke all on function public.mark_lesson_complete(text, text)
  from public, anon, authenticated;
grant execute on function public.mark_lesson_complete(text, text)
  to authenticated;

-- No profile column can assign roles or permissions. There is deliberately no
-- role, admin, plan or entitlement column in any of these tables.
