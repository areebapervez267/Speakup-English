# Progress database setup (Supabase)

Phase 5 adds optional student progress storage to SpeakUp English: lesson
completion, quiz attempts, best quiz scores and the data needed for the future
student dashboard.

This guide covers applying the migrations and verifying access control. It
uses the Supabase Free tier only. No payment details, paid add-ons, analytics
service or custom domain are required.

> **Current status in this workspace:** the migrations in
> `supabase/migrations/` are written and reviewed, but they have **not** been
> applied to a live Supabase project. No Supabase credentials are configured,
> so progress storage is not connected here. The lesson page says so instead of
> pretending progress is saved. Nothing in this repository contains real keys
> or student data.

---

## 1. What is stored

Course and lesson identifiers are the existing, stable **slugs** used by the
curriculum and URLs, for example `grammar-foundations` and
`subject-pronouns-and-be`. Titles can change without breaking saved progress.

| Table | Purpose |
| --- | --- |
| `public.profiles` | One minimal profile per auth user: UUID, display name, timestamps. Automatically created for new users and backfilled for existing users. |
| `public.lesson_progress` | One row per student, course and lesson: completion, first completion time, best quiz score and total, timestamps. |
| `public.quiz_attempts` | One row per quiz submission: course/lesson slugs, score, question total, attempt timestamp. No answers, email addresses, tokens or other personal data. |
| `public.static_quiz_answer_keys` | Private correct-answer metadata for the 84 authored A1 quizzes. It has no client grants; only the recording RPC reads it. |

Two read-only views support the Phase 6 dashboard:
`student_course_progress` and `student_course_quiz_stats`. They are
`security_invoker` views, so the caller's RLS policies apply.

Passwords, auth tokens and roles are **never** copied into these tables. They
stay in Supabase Auth.

### Completion and scoring rules

- Completion is an explicit action: the student presses **Mark lesson
  complete**. Opening a lesson never completes it, and submitting a quiz never
  completes it. A passing quiz is not required.
- Completing a lesson twice is idempotent: the first `completed_at` is kept and
  no duplicate row is created.
- Best score is a high-water mark based on the score ratio. A higher percentage
  replaces it; on an equal percentage, the higher raw score wins. The database
  trigger is the only writer of the best score.
- Attempts are immutable: there is no update policy or update grant.
- The browser sends **answers only**. Both authored and published quizzes are
  graded inside the database against a private answer key, and the browser
  never sends a score.
- Since Phase 9.1, students have **no direct INSERT, UPDATE or DELETE grant** on
  `lesson_progress` or `quiz_attempts`. Completion goes through
  `mark_lesson_complete`, which verifies the signed-in student, the lesson's
  existence and any Premium requirement. Quiz attempts go through
  `record_static_quiz_attempt` or `record_published_quiz_attempt`, which grade
  before inserting.

## 2. Apply the migrations with the SQL Editor

This is the no-extra-tools path and is enough for local development.

### 2.1 Create the project and environment file

Follow sections 1–4 of [authentication-setup.md](./authentication-setup.md):
create a free project, copy the **Project URL** and **publishable key**, create
`.env.local`, and configure the auth URLs. Never copy the secret or
`service_role` key into this app.

Progress needs **no additional environment variables**:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

Restart `npm run dev` after changing `.env.local`.

### 2.2 Run the SQL files in the verified order

In the Supabase dashboard open **SQL Editor → New query**. Copy one entire file,
run it, confirm **Success**, then open a new query for the next file. Do not skip
or reorder them. The exact order for a fresh project is:

1. [`supabase/migrations/20261025150000_create_student_profiles.sql`](../supabase/migrations/20261025150000_create_student_profiles.sql)
   — profile table, updated-at trigger, new-user trigger, backfill.
2. [`supabase/migrations/20261025150100_create_learning_progress.sql`](../supabase/migrations/20261025150100_create_learning_progress.sql)
   — lesson progress, quiz attempts, indexes, best-score trigger, completion
   function.
3. [`supabase/migrations/20261025150200_enable_progress_rls.sql`](../supabase/migrations/20261025150200_enable_progress_rls.sql)
   — row level security, policies and least-privilege grants.
4. [`supabase/migrations/20261025150300_create_progress_summary_views.sql`](../supabase/migrations/20261025150300_create_progress_summary_views.sql)
   — the two security-invoker summary views.
5. [`supabase/migrations/20261026120000_create_admin_roles_and_audit.sql`](../supabase/migrations/20261026120000_create_admin_roles_and_audit.sql)
   — administrator allow-list and audit log.
6. [`supabase/migrations/20261026120100_create_content_tables.sql`](../supabase/migrations/20261026120100_create_content_tables.sql)
   — content and published-content tables.
7. [`supabase/migrations/20261026120200_create_content_functions.sql`](../supabase/migrations/20261026120200_create_content_functions.sql)
   — content RPCs and published-quiz grading.
8. [`supabase/migrations/20261026130000_create_premium_memberships.sql`](../supabase/migrations/20261026130000_create_premium_memberships.sql)
   — memberships, payment events and the Premium replacements for completion
   and grading.
9. [`supabase/migrations/20261026140000_create_certificates.sql`](../supabase/migrations/20261026140000_create_certificates.sql)
   — certificate policies, requirements, issuance and revocation.
10. [`supabase/migrations/20261026150000_harden_progress_writes.sql`](../supabase/migrations/20261026150000_harden_progress_writes.sql)
    — Phase 9.1. Revokes all direct progress and attempt writes, drops the write
    policies, adds the private `static_quiz_answer_keys` table and replaces
    completion with the validated `mark_lesson_complete` plus the two
    server-grading recording functions.

**The hardening migration must run last.** It reads the published content,
membership helpers, grading RPC and certificate tables, and it replaces the
completion function created by Phase 8. If it runs before them, the migration
fails or the hardened function is overwritten. Applying only files 1–4 leaves
direct progress writes open.

The dependency evidence, hard versus soft edges, and dev/test-first procedure
are in [migration-order.md](./migration-order.md). The static test
`npm run test:migrations` enforces the same order.

Each file is a normal forward migration and is **not** written to be re-run. If
a statement fails, stop, read the error and fix the cause instead of pasting the
whole file again. The SQL Editor runs as the database owner and therefore
bypasses RLS; that is normal for setup, but it is **not** proof that student
isolation works. Use the live check in section 4 for that.

> If you applied the migrations with the Supabase CLI instead, they are already
> versioned in `supabase/migrations/`; do not paste them again in the SQL
> Editor. Do not mix the two workflows on the same project without recording
> the migration history.

### 2.3 CLI alternative (fresh project only)

The repository currently has `supabase/migrations/` but no
`supabase/config.toml`. The CLI needs that config file, so initialise it first
on a fresh test project:

```bash
npx supabase init
npx supabase login
npx supabase link --project-ref your-test-project-ref
npx supabase db push
```

`supabase init` may create or modify files; review them before committing. Use
this **instead of** the SQL Editor on a fresh project. Do not mix the two
workflows on the same project without recording the migration history. The app
itself does not need the CLI or Docker at runtime. See
[migration-order.md](./migration-order.md) for the full procedure.

## 3. Verify the database setup

Run these read-only queries in the SQL Editor. They inspect catalog state; they
do not test student isolation.

**Tables and RLS**

```sql
select tablename, rowsecurity
from pg_tables
where schemaname = 'public'
  and tablename in (
    'profiles',
    'lesson_progress',
    'quiz_attempts',
    'static_quiz_answer_keys'
  )
order by tablename;
```

Expect four rows, all with `rowsecurity = true`.

**Policies** (expect 5 after Phase 9.1: 3 profiles, 1 progress, 1 attempts)

```sql
select tablename, policyname, cmd, roles::text, qual, with_check
from pg_policies
where schemaname = 'public'
  and tablename in (
    'profiles',
    'lesson_progress',
    'quiz_attempts',
    'static_quiz_answer_keys'
  )
order by tablename, policyname;
```

The only progress and attempt policies that remain are the `select` policies.
`static_quiz_answer_keys` has RLS enabled, no policies and no client grants, so
it is reachable only from the security-definer recording function.

**Triggers** (expect `on_auth_user_created`, the two updated-at triggers and
the best-score trigger)

```sql
select tgname, tgrelid::regclass as table_name
from pg_trigger
where not tgisinternal
  and tgname in (
    'on_auth_user_created',
    'profiles_set_updated_at',
    'lesson_progress_set_updated_at',
    'quiz_attempts_record_best_score'
  )
order by table_name;
```

**Functions and security mode**

```sql
select p.proname, p.prosecdef as security_definer
from pg_proc p
join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public'
  and p.proname in (
    'handle_new_user',
    'record_quiz_attempt_best_score',
    'mark_lesson_complete',
    'record_static_quiz_attempt',
    'record_published_quiz_attempt',
    'set_updated_at'
  )
order by p.proname;
```

`handle_new_user`, `record_quiz_attempt_best_score`, `mark_lesson_complete`,
`record_static_quiz_attempt` and `record_published_quiz_attempt` are security
definers with a pinned empty `search_path`. `set_updated_at` is an invoker.
Direct execution of the trigger functions is revoked. The three write functions
are executable by `authenticated` only.

**Table grants** (expect no INSERT, UPDATE or DELETE for `authenticated`)

```sql
select table_name, grantee, privilege_type
from information_schema.role_table_grants
where table_schema = 'public'
  and table_name in (
    'profiles',
    'lesson_progress',
    'quiz_attempts',
    'static_quiz_answer_keys'
  )
  and grantee in ('anon', 'authenticated')
order by table_name, grantee, privilege_type;
```

`authenticated` should see only `SELECT` on `profiles`, `lesson_progress` and
`quiz_attempts`. This query lists table-level grants; the profile column grants
(`insert (id, display_name)`, `update (display_name)`) are column-level and do
not appear. `authenticated` must not appear for `static_quiz_answer_keys`, and
`anon` must not appear at all.

**Views**

```sql
select table_name
from information_schema.views
where table_schema = 'public'
  and table_name in ('student_course_progress', 'student_course_quiz_stats');

select relname, reloptions
from pg_class
where relnamespace = 'public'::regnamespace
  and relname in ('student_course_progress', 'student_course_quiz_stats');
```

Both views should show `security_invoker=true`.

## 4. Live isolation check

[`scripts/progress-rls-check.mjs`](../scripts/progress-rls-check.mjs) signs in
as **two ordinary student accounts** using only the public URL and
publishable/anon key. It refuses to run with a secret or service-role key. It
uses the real authored lesson `grammar-foundations` /
`subject-pronouns-and-be`, attempts direct tampering, completes the lesson and
submits a quiz through the recording functions. Direct deletes are revoked by
design, so the rows it creates remain; use disposable accounts.

### 4.1 Prepare two disposable accounts

Create two accounts through `/signup` and confirm their email addresses. Use
disposable addresses and passwords you do not reuse. Do not use a real
student's account.

### 4.2 Run the check

The app URL/key come from `.env.local`. Set the four test-account shell
variables first. PowerShell (Windows):

```powershell
$env:SUPABASE_TEST_USER_A_EMAIL = "student-a@example.com"
$env:SUPABASE_TEST_USER_A_PASSWORD = "disposable-password-a"
$env:SUPABASE_TEST_USER_B_EMAIL = "student-b@example.com"
$env:SUPABASE_TEST_USER_B_PASSWORD = "disposable-password-b"

npm run test:rls
```

Bash (macOS/Linux/Git Bash):

```bash
export SUPABASE_TEST_USER_A_EMAIL="student-a@example.com"
export SUPABASE_TEST_USER_A_PASSWORD="disposable-password-a"
export SUPABASE_TEST_USER_B_EMAIL="student-b@example.com"
export SUPABASE_TEST_USER_B_PASSWORD="disposable-password-b"

npm run test:rls
```

Never put real credentials in source control, screenshots, issues or
documentation. The variables are deliberately not committed.

### 4.3 What it checks

- Both accounts received a profile automatically.
- A student cannot read or update another student's profile.
- Direct `INSERT` of completed progress is rejected with `42501`, including a
  row for another user.
- Direct `UPDATE` of completion or best-score fields and direct `DELETE` of
  progress or attempts are rejected with `42501`.
- Direct `INSERT` of a quiz score is rejected with `42501`, including a row for
  another user.
- `mark_lesson_complete` rejects unknown lessons (`P0002`) and malformed
  identifiers (`22023`).
- `mark_lesson_complete` completes a real authored lesson, is idempotent and
  preserves the first `completed_at`.
- `record_static_quiz_attempt` grades the submitted answers in the database,
  and the stored attempt matches the returned score. A student cannot update it
  afterwards.
- Progress and attempts are invisible across users.
- Anonymous requests cannot read progress or attempts and cannot call either
  write function.
- The script exits with a non-zero code if any check fails. A failure is useful:
  do not weaken RLS or grants to make it pass. Diagnose missing migrations,
  grants or schema-cache problems instead.

This script covers direct-write denial, legitimate completion, server-side
grading, user isolation and guest behavior. It does not issue or revoke
certificates. Continue with
[prelaunch-verification.md](./prelaunch-verification.md) for the certificate
eligibility, duplicate and revocation checks.

Because direct deletes are intentionally revoked, the script leaves the test
account's completion and attempts in place. It prints a reminder at the end. Use
disposable accounts and a disposable project. To remove the rows, delete the
test users in Supabase Auth; the `on delete cascade` foreign keys remove their
profile, progress and attempts.

## 5. Manual end-to-end UX check

With `.env.local` configured and migrations applied:

1. Sign in as student A and open an authored A1 lesson, for example
   `/courses/grammar-foundations/lessons/subject-pronouns-and-be`.
2. The saved-progress card appears. The lesson is **not** completed
   automatically.
3. Press **Mark lesson complete**. The card updates and survives a refresh.
   Repeating the action through the API/test script keeps the original
   completion date.
4. Submit the quiz. The score is saved on submission, the success message
   appears, and a refresh keeps the best score.
5. Retry with a lower and a higher score. The best score should not go down.
6. Sign out, open the same lesson, and take the quiz as a guest. The quiz still
   works, the page says the result is not saved permanently, and no login is
   required to browse.
7. Repeat the attempt while signed in as student B. B must not see A's
   completion or score. This is the manual isolation check; the script in
   section 4 is the automated one.
8. Simulate a network failure (offline devtools) while saving. The lesson page
   must stay usable, show an error, and offer a retry; the network must not
   crash the page.

## 6. Schema, security and grants at a glance

### Tables and keys

| Table | Primary key | Foreign key | Important constraints/indexes |
| --- | --- | --- | --- |
| `profiles` | `id uuid` | `id → auth.users(id)` on delete cascade | Display name trimmed, 1–80 chars |
| `lesson_progress` | `(user_id, course_slug, lesson_slug)` | `user_id → auth.users(id)` on delete cascade | Slug format checks; `0 ≤ best_score ≤ best_score_total`; completion requires a timestamp and vice versa; recent-activity and completed-course partial indexes |
| `quiz_attempts` | `id bigint` identity | `user_id → auth.users(id)` on delete cascade | Slug format checks; `score ≥ 0`, `total_questions > 0`, `score ≤ total_questions`; recent-activity and lesson-history indexes |
| `static_quiz_answer_keys` | `(course_slug, lesson_slug)` | none | Slug format checks; non-empty JSON array; RLS on with no client grants |

The slug checks allow lowercase letters, digits and single hyphens, matching the
actual curriculum identifiers.

### Row Level Security and grants

RLS is enabled on all four tables. Every row policy compares the row's
`user_id` (or profile `id`) with `(select auth.uid())`.

| Table | Select | Insert | Update | Delete |
| --- | --- | --- | --- | --- |
| `profiles` | own | own ID | own display name | not granted |
| `lesson_progress` | own | **not granted** — `mark_lesson_complete` only | **not granted** | **not granted** |
| `quiz_attempts` | own | **not granted** — recording functions only | **not granted** (immutable) | **not granted** |
| `static_quiz_answer_keys` | **not granted** | **not granted** | **not granted** | **not granted** |

Anonymous visitors (`anon`) have no table or function privileges. Signed-in
students can read only their own progress and attempts. All writes go through
three security-definer functions:

- `mark_lesson_complete(course, lesson)` — verifies the caller, slug syntax,
  that the lesson exists and is accessible, and any Premium requirement, then
  upserts completion without changing an existing `completed_at`.
- `record_static_quiz_attempt(course, lesson, answers)` — reads the private
  answer key, validates that every question has a numeric in-range answer,
  computes the score, and inserts the attempt.
- `record_published_quiz_attempt(course, lesson, answers)` — reuses the Phase 7
  `grade_published_lesson_quiz` grading function, validates the result and
  inserts the attempt.

All three are executable by `authenticated` only, run with a pinned empty
`search_path`, and take no user ID, score or timestamp from the caller. The
best-score trigger still maintains `lesson_progress.best_score` as the function
owner. There is deliberately no role, admin, plan or entitlement column in any
progress table, so a student cannot assign themselves privileges.

The application uses the authenticated user's SSR session for all writes and
reads. It does **not** use a service-role key, and no such key belongs in this
project. Queries also filter explicitly by the verified user ID as
defense-in-depth.

### Residual risks

- **Completion is self-attested.** The database proves that the signed-in
  student pressed **Mark lesson complete** for an existing, accessible lesson
  and records the server time. It cannot prove that the lesson was read. Do not
  describe certificates based on this data as proctored assessment.
- **Quiz scores are graded, not proctored.** Answers are validated against the
  private key inside the database, so a student cannot insert a score without
  answering the questions. A student can still retry a practice quiz, and the
  attempt history records each retry; there is no time limit or anti-cheat.
- **The static seed must track authored content.** The 84 authored quizzes are
  stored in the application source, so their answer keys are seeded into
  `static_quiz_answer_keys`. After changing an authored quiz, regenerate the
  seed and apply it as a forward migration:

  ```bash
  npm run generate:quiz-keys
  ```

  `test:integrity` compares the seeded keys with the authored quizzes and fails
  on drift. The server action also refuses to report success if the database
  score differs from the locally computed score.
- **No live database has been tested here.** The migrations, functions, RLS and
  grants are verified by source-level tests only. Run the live check in section
  4 against a disposable project before relying on these claims.

Before launch, also complete the two-student certificate workflow in
[prelaunch-verification.md](./prelaunch-verification.md). For rows created before
Phase 9.1, run the read-only
[progress integrity audit](./progress-integrity-audit.md) first; do not delete or
rewrite historical student records.

## 7. Dashboard data access (Phase 6)

The following server-only functions serve the student dashboard:

- `fetchLessonProgress` — one lesson's saved state.
- `fetchCourseProgressSummaries` — completions, curriculum totals, percentage,
  attempt count, best score and last activity per course.
- `fetchRecentLearningActivity` — merged completions and quiz attempts resolved
  to real lesson titles.
- `fetchStudentLearningOverview` — both of the above.

Totals come from the existing curriculum: authored lesson entries for the seven
trackable A1 courses, and catalog lesson counts for outline-only courses. No
progress or statistics are fabricated. Outline-only courses are not marked
trackable because they have no lesson pages yet.

Completing a lesson is intentionally separate from submitting its quiz. The
rule is documented in the lesson progress card and in this guide.

## 8. Troubleshooting

| Symptom | Likely cause |
| --- | --- |
| The lesson says "Progress saving isn't connected" | `.env.local` missing/invalid, or the server was not restarted after setting it |
| The card says "Saved progress is unavailable" | Project paused, network failure, missing migrations, or missing grants |
| PostgREST returns `PGRST205` / "could not find the table" | Not all ten migrations are applied, or the schema cache needs a reload |
| `permission denied for table ...` from a direct client write | Expected after Phase 9.1; use the recording RPCs instead of table writes |
| The recording function is missing (`PGRST202`) | The Phase 9.1 migration (file 10) is not applied, or the schema cache is stale |
| `mark_lesson_complete` returns `P0002` | The lesson is not in published content and not in `certificate_course_lessons` |
| `record_static_quiz_attempt` returns `P0002` | The lesson has no seeded static quiz, or it is a published lesson (use the published RPC) |
| `record_static_quiz_attempt` returns `22023` | The request omitted a question, sent a non-numeric answer or used an out-of-range index |
| A new account has no profile row | The `on_auth_user_created` trigger is missing; re-run migration 1 (it backfills) |
| Test script cannot sign in | The test account is unconfirmed, has a different password, or email rate limiting is active |
| A lower quiz score did not change the best score | Expected: best score is a high-water mark |
| Deleting attempts does not lower the best score | Expected: the best score is stored on `lesson_progress` as a high-water mark |
| Direct writes fail with code `42501` | Expected after Phase 9.1; completion and quiz recording are RPC-only |
| A quiz answer is marked wrong that used to be right | The private static seed is out of date; run `npm run generate:quiz-keys` and apply a forward migration |
| Anonymous checks fail with code `42501` | Expected: anonymous visitors must not read or write these tables |

After schema changes, reload PostgREST's cache in the SQL Editor if needed:

```sql
notify pgrst, 'reload schema';
```

Do not fix RLS problems by disabling RLS, granting the table to `anon`, adding
a service-role key, or accepting scores from the browser.

## 9. Manual setup checklist

- [ ] Free Supabase project created.
- [ ] `.env.local` contains the project URL and publishable key (never a secret
      key).
- [ ] Auth URLs and email templates configured per
      [authentication-setup.md](./authentication-setup.md).
- [ ] All ten migrations applied in the exact order in
      [migration-order.md](./migration-order.md), ending with
      `20261026150000_harden_progress_writes.sql`; verification queries look
      correct.
- [ ] `npm run generate:quiz-keys` reports `84 quizzes, 336 questions` and its
      output matches the seed in the hardening migration.
- [ ] Dev server restarted.
- [ ] Two disposable student accounts and one disposable administrator created
      and confirmed for the live checks.
- [ ] `npm run test:progress`, `npm run test:integrity` and
      `npm run test:migrations` pass (no database needed).
- [ ] `npm run test:rls` passes against the configured test project.
- [ ] The full [pre-launch checklist](./prelaunch-verification.md) passes,
      including completion, correct/incorrect grading, isolation, certificate
      eligibility, duplicate refusal and revocation.
- [ ] The read-only [integrity audit](./progress-integrity-audit.md) was run if
      the project has pre-Phase 9.1 rows.
- [ ] Test accounts removed when no longer needed, which cascades their test
      progress and attempts.
