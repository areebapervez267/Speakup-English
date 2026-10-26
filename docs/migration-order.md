# Verified migration order (Phases 5–9.1)

This page records the migration order that the SQL actually requires, not just
the order implied by filenames. The order is enforced by
`scripts/test-migrations.mjs` (`npm run test:migrations`), which parses the SQL
in `supabase/migrations/` and fails if a referenced `public` object is not
defined in the same or an earlier file.

> **Current status:** these migrations have **not** been applied to a live
> Supabase project in this workspace. The order below is verified against the
> SQL source and static tests only. Do not describe a database as configured,
> migrated or security-tested until the steps in
> [prelaunch-verification.md](./prelaunch-verification.md) have actually run on
> a disposable project.

## 1. Exact order

Apply all ten files, in this order, to a fresh project.

| # | Migration | Creates | Hard prerequisites |
| --- | --- | --- | --- |
| 1 | `20261025150000_create_student_profiles.sql` | `profiles`, `display_name_from_metadata`, `set_updated_at`, `handle_new_user`, new-user trigger, backfill | Supabase `auth.users` |
| 2 | `20261025150100_create_learning_progress.sql` | `lesson_progress`, `quiz_attempts`, best-score trigger, initial `mark_lesson_complete` | 1 (`set_updated_at`) |
| 3 | `20261025150200_enable_progress_rls.sql` | Row level security, progress/attempt policies, grants, completion grants | 1 (`profiles`), 2 (`lesson_progress`, `quiz_attempts`) |
| 4 | `20261025150300_create_progress_summary_views.sql` | `student_course_progress`, `student_course_quiz_stats` security-invoker views | 2 (both progress tables) |
| 5 | `20261026120000_create_admin_roles_and_audit.sql` | `admin_users`, `admin_audit_log`, `is_admin` | `auth.users` only |
| 6 | `20261026120100_create_content_tables.sql` | Content, published content and published-answer tables; admin RLS policies | 5 (`is_admin`) |
| 7 | `20261026120200_create_content_functions.sql` | Content validation, publish/unpublish/import RPCs, audit triggers, `grade_published_lesson_quiz` | 1 (`set_updated_at`), 5 (admin/audit), 6 (content tables) |
| 8 | `20261026130000_create_premium_memberships.sql` | `memberships`, `payment_events`, membership helpers, Premium RLS, **replacement** `mark_lesson_complete` and `grade_published_lesson_quiz` | 1 (`set_updated_at`), 2 (progress table), 5 (`is_admin`), 6 (published tables), 7 (grading functions) |
| 9 | `20261026140000_create_certificates.sql` | Certificate policies, required lessons, `certificates`, issuance/verification/admin RPCs | 1 (`set_updated_at`, `profiles`), 2 (progress evidence), 5 (`is_admin`, audit), 8 (`has_active_membership`) |
| 10 | `20261026150000_harden_progress_writes.sql` | Write revocations, `static_quiz_answer_keys`, **final** `mark_lesson_complete`, `record_static_quiz_attempt`, `record_published_quiz_attempt` | 2 (progress/attempts), 6 (published tables), 8 (membership helpers, grading RPC), 9 (certificate policy/lesson tables) |

Migration 5 has no dependency on Phase 5 progress. It is still listed after the
progress files because the verified order is fixed and the static test enforces
it. Do not use that as permission to reshuffle the other files.

## 2. Why timestamps alone are not the order

Two migrations redefine functions that earlier migrations created:

- Migration 8 uses `create or replace function public.mark_lesson_complete`
  (`supabase/migrations/20261026130000_create_premium_memberships.sql:280`) to
  add Premium gating. It replaces the version created in migration 2.
- Migration 8 also replaces `public.grade_published_lesson_quiz`
  (`20261026130000_create_premium_memberships.sql:379`), which migration 7
  created at `20261026120200_create_content_functions.sql:1457`.
- Migration 10 replaces `mark_lesson_complete` again
  (`20261026150000_harden_progress_writes.sql:157`) and adds the two recording
  RPCs at lines 280 and 415.

That creates hard edges:

1. Migration 8 must run after 7, or the replacement grading function has no
   helper functions and no published tables to read.
2. Migration 8 must run after 2, or it replaces a function that does not exist
   yet and references a progress table that is missing.
3. Migration 10 must run after 8, or migration 8 would overwrite the hardened
   completion function and the direct-write revocation would be incomplete.
4. Migration 10 must run after 9, because it checks certificate lesson and
   policy tables at lines 217–230 and 322–325.
5. Migration 10 must run after 6, because it checks `published_lessons` and
   `published_courses` before allowing completion or static quiz recording.

The static test checks every `public` reference against the definitions that
precede it, checks the two legitimate redefinitions, and checks that migration
10 is last.

## 3. Apply to a disposable development/test project first

Never start with production. Use a separate Supabase project that contains no
real student data, and a local `.env.local` that points at that project.

### 3.1 Before applying

1. Create a free Supabase project used only for this verification.
2. Put only the project URL and publishable/anon key in `.env.local`:
   `NEXT_PUBLIC_SUPABASE_URL` and
   `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Never add a secret or
   `service_role` key to the app or to documentation.
3. Configure the auth Site URL and redirect URLs as described in
   [authentication-setup.md](./authentication-setup.md).
4. Confirm the project is empty. If it already has objects from an earlier
   attempt, use a fresh project instead of dropping objects by hand.

### 3.2 Option A: SQL Editor (recommended for this repository)

The repository has `supabase/migrations/` but no `supabase/config.toml`, so the
SQL Editor is the simplest path.

1. Open **SQL Editor → New query**.
2. Paste **one entire file**, in the order in section 1. Run it and confirm
   **Success**.
3. Open a **new query** for the next file. Do not paste several files into one
   query and do not skip ahead.
4. Stop at the first error. Read the message; it usually names the missing
   table, function or extension. Fix the cause and continue from the file that
   failed, not from the beginning.
5. Record which files succeeded. The SQL Editor does not write
   `supabase_migrations.schema_migrations`; the table list in section 3.4 is
   your record.

The SQL Editor runs as the database owner and bypasses RLS. That is expected
for setup, but it is **not** evidence that student isolation works.

### 3.3 Option B: Supabase CLI

Use this **instead of** the SQL Editor, not in addition to it.

```bash
npx supabase init          # creates supabase/config.toml; this repo does not have one yet
npx supabase login
npx supabase link --project-ref your-test-project-ref
npx supabase db push
```

`supabase init` may create or modify files. Review them before committing. After
a CLI push, the applied versions are recorded in
`supabase_migrations.schema_migrations`. Do not then paste the same files into
the SQL Editor on that project; mixing workflows makes the recorded history
misleading.

### 3.4 Verify after applying all ten

Ask PostgREST to reload its schema cache:

```sql
notify pgrst, 'reload schema';
```

Then run these read-only checks:

```sql
-- Expect 18 public tables from these phases: profiles; lesson_progress and
-- quiz_attempts; admin_users and admin_audit_log; 7 content/published tables;
-- memberships and payment_events; 3 certificate tables; static_quiz_answer_keys.
select tablename
from pg_tables
where schemaname = 'public'
order by tablename;

-- Expect 84 authored quiz keys and 84 certificate lesson requirements.
select count(*) as static_quizzes from public.static_quiz_answer_keys;
select count(*) as certificate_lessons from public.certificate_course_lessons;

-- Expect 7 certifiable A1 courses.
select count(*) as certificate_policies
from public.certificate_course_policies
where is_active;

-- Expect the final hardening functions to be security definers with an empty
-- search_path.
select
  p.proname,
  p.prosecdef as security_definer,
  p.proconfig as function_settings
from pg_proc as p
join pg_namespace as n on n.oid = p.pronamespace
where n.nspname = 'public'
  and p.proname in (
    'mark_lesson_complete',
    'record_static_quiz_attempt',
    'record_published_quiz_attempt',
    'issue_certificate'
  )
order by p.proname;
```

All four functions should show `security_definer = true` and a
`search_path=""` entry in `function_settings`.

The detailed RLS, view and grant checks are in
[progress-database-setup.md](./progress-database-setup.md#3-verify-the-database-setup).

### 3.5 If a migration fails

- Do not drop tables, functions or the project schema to "start clean" on a
  shared database.
- Do not weaken RLS, revoke statements or grants to make a later file pass.
- A partially applied file is not a successful migration. Note the last
  successful statement and use a fresh disposable project for the next attempt.
- If the failure is `PGRST205` or "could not find the table/function" in the
  app, check that all ten files ran and run `notify pgrst, 'reload schema'`
  again.

## 4. Promoting to production later

This page does not authorize a production deployment. When the owner is ready:

1. Confirm the disposable project passed every item in
   [prelaunch-verification.md](./prelaunch-verification.md).
2. Take a restorable backup and record the current schema state.
3. Run [`scripts/audit-progress-integrity.sql`](../scripts/audit-progress-integrity.sql)
   **before** applying the hardening migration, so pre-fix rows are recorded.
4. Apply the same ten files in the same order. Do not reorder them for
   production.
5. Run the audit again after applying. The hardening migration does not delete
   or rewrite historical progress, attempts or certificates.
6. Re-run the live checks with disposable accounts on a staging project, not
   with a real student's account.

There are no down migrations. The rollback plan is a restore from the backup or
a reviewed forward fix; do not write ad-hoc `drop` statements against
production.

## 5. What is and is not verified here

- Verified in source and by `npm run test:migrations`: file set, order,
  definition-before-reference, the two intentional redefinitions, and the
  read-only shape of the audit SQL.
- Not verified here: SQL execution against PostgreSQL/Supabase, auth, RLS,
  function grants, certificate issuance or revocation. Those require a
  configured disposable project and the checklist in
  [prelaunch-verification.md](./prelaunch-verification.md).

## Related documentation

- [Progress database setup](./progress-database-setup.md)
- [Certificates setup](./certificates-setup.md)
- [Premium payments setup](./premium-payments-setup.md)
- [Progress integrity audit](./progress-integrity-audit.md)
- [Pre-launch verification](./prelaunch-verification.md)
