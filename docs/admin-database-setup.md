# Admin database and content setup (Supabase)

Phase 7 adds a protected admin workspace and database-backed course content to
SpeakUp English. Administrators can create courses, units, lessons and quizzes,
preview them, and publish validated snapshots for students.

This guide covers the migration order, the exact first-administrator SQL, how
authorization works, and how to verify the setup. It uses the Supabase Free tier
only. No payment details, paid add-ons, custom domain or service-role key are
required.

> **Current status in this workspace:** the Phase 7 migrations are written and
> reviewed, but they have **not** been applied to any Supabase project. No
> Supabase credentials are configured and no test account exists here. `/admin`
> therefore shows a setup notice, and no live admin, database, RLS or
> cross-role tests have been run. Nothing in this repository contains real keys,
> passwords or student data.

---

## 1. What Phase 7 adds

### Administrator identity

| Object | Purpose |
| --- | --- |
| `public.admin_users` | The only source of administrator status. Managed manually with SQL in the Supabase SQL editor. It has row level security enabled, **no policies**, and no table grants to `anon` or `authenticated`. |
| `public.is_admin()` | `security definer` function that returns true only when `auth.uid()` has a row in `admin_users`. Execute is granted to `authenticated` only. |
| `public.admin_audit_log` | Append-only record of content changes. Administrators can select it; nobody can insert, update or delete through the API. |

Administrator status is **never** derived from sign-up, a display name, an email
domain, `user_metadata` or `app_metadata`. There is no application path that
inserts into `admin_users`, so a student cannot promote themselves.

### Content

| Table | Purpose |
| --- | --- |
| `public.content_courses` | Draft/published course records, unique slug, metadata and publish marker. |
| `public.content_units` | Ordered units inside a course. |
| `public.content_lessons` | Ordered lessons with typed content blocks and quiz questions. |
| `public.published_courses` | Read-only public snapshot of a published course. |
| `public.published_units` | Read-only public snapshot of its published units. |
| `public.published_lessons` | Read-only public snapshot of its published lessons and public quiz questions (no answers). |
| `public.published_quiz_answers` | Private answer keys used only by the grading function. No grants, no policies. |

Draft tables are readable and writable only by administrators through RLS.
Published tables are readable by `anon` and `authenticated` and have **no write
grants**; only security-definer functions owned by the database owner can
replace a snapshot. Students therefore see published content only and never
receive correct answers before submitting a quiz.

The SQL also adds:

- an audit trigger for direct content edits;
- validation functions for blocks and quizzes;
- ordered unit/lesson moves and reorders;
- deletion guards that refuse to delete lessons or units referenced by
  `lesson_progress` or `quiz_attempts`;
- slug protection: a course slug is locked after the first publish, and lesson
  slugs are permanent so saved progress and links keep working;
- `public.grade_published_lesson_quiz(text, text, jsonb)`, which compares answers
  against the private key and returns the score plus review only after a
  complete submission.

## 2. Before you start

1. Complete [authentication-setup.md](./authentication-setup.md) sections 1–5:
   create a free Supabase project, create `.env.local` with the project URL and
   publishable key, and configure the auth redirect URLs.
2. Apply all four Phase 5 migrations in
   [progress-database-setup.md](./progress-database-setup.md). Phase 7 functions
   refer to `lesson_progress` and `quiz_attempts`.
3. Do **not** copy a `service_role` or secret key into this app. The admin
   workspace uses the signed-in user's cookie session and the publishable key.

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

No additional environment variables are needed. Restart `npm run dev` after
changing `.env.local`.

## 3. Apply the Phase 7 migrations

In the Supabase dashboard open **SQL Editor → New query**. Copy one entire file,
run it, confirm **Success**, then open a new query for the next file. Apply them
in filename order:

1. [`supabase/migrations/20261026120000_create_admin_roles_and_audit.sql`](../supabase/migrations/20261026120000_create_admin_roles_and_audit.sql)
   — administrator allow-list, `is_admin()`, audit log.
2. [`supabase/migrations/20261026120100_create_content_tables.sql`](../supabase/migrations/20261026120100_create_content_tables.sql)
   — content, published snapshot and private answer-key tables, RLS and grants.
3. [`supabase/migrations/20261026120200_create_content_functions.sql`](../supabase/migrations/20261026120200_create_content_functions.sql)
   — validation, publishing, reorder/delete/import functions, slug triggers and
   secure quiz grading.

These are normal forward migrations and are **not** written to be re-run. If a
statement fails, stop and fix the cause instead of pasting the file again.

If you use the Supabase CLI instead, `npx supabase db push` applies the files in
filename order. Do not mix the SQL Editor and CLI workflows on the same project
without recording migration history.

The SQL Editor runs as the database owner and bypasses RLS. Success there is
**not** proof that student isolation works; use section 6 for that.

## 4. Create the first administrator

There is intentionally no "make me admin" button, sign-up flag or API endpoint.
The first administrator is added once, deliberately, in the SQL editor.

### 4.1 Create the account

Sign up in the app with an email address you control and confirm the email, or
create the user in **Authentication → Users → Add user** and confirm it. Use a
real address that belongs to you. This guide does not provide credentials.

### 4.2 Add that account to the allow-list

In **SQL Editor**, replace `you@example.com` with the exact address you created:

```sql
-- Optional: confirm the account and copy its user id.
select id, email, email_confirmed_at
from auth.users
where email = 'you@example.com';

-- Add that account to the administrator allow-list.
insert into public.admin_users (user_id, email, note)
select id, email, 'Initial administrator'
from auth.users
where email = 'you@example.com'
on conflict (user_id) do nothing;

-- Expect exactly one row.
select user_id, email, note, created_at
from public.admin_users;
```

If the insert affects zero rows, the email did not match an existing auth user;
create the account first. Never insert a random or invented UUID.

Sign in to the app with that account and open `/admin`. Access is re-checked on
the server for every admin request. To remove administrator access later:

```sql
delete from public.admin_users
where user_id = (select id from auth.users where email = 'you@example.com');
```

Removing the row takes effect on the next request. It does not delete authored
content or audit history. Add additional administrators with the same `insert`
pattern, using their own confirmed account.

> `public.is_admin()` returns false in the SQL Editor because the editor has no
> end-user session (`auth.uid()` is null). That is expected. Check administrator
> status by signing in to the app or by querying `admin_users` directly.

## 5. Content workflow

### Import the built-in A1 courses

The admin overview lists the seven authored A1 courses. **Import as draft**
copies their units, lessons, blocks and quizzes into the content tables. Nothing
public changes until you publish. While the imported draft has never been
published, the original TypeScript content remains the public page for those
slugs.

### Create a course from scratch

1. `/admin/courses/new` — enter title, URL slug, summary, description, CEFR
   level, skill, outcomes, estimated hours, free/premium label and metadata.
   The slug is normalized to lowercase single-hyphen form. Duplicate managed
   slugs and built-in course slugs are rejected.
2. Add units, then add lessons inside each unit. Lessons accept typed content
   blocks as JSON with a live preview and a structured quiz builder.
3. Mark units and lessons published when they are ready. A published lesson
   needs at least one content block and one quiz question; every question needs
   between two and eight options, exactly one correct option, and an
   explanation.
4. Preview the course and lesson. Admin previews show answer keys; student pages
   never do.
5. Publish the course. Publishing validates the snapshot atomically and makes
   the course visible at `/courses/<slug>`.

### URL rules

- A course slug can be changed while it is a draft.
- After the first publish the slug is locked in the database; create a new
  course instead of renaming a live URL.
- Lesson slugs are permanent from creation. This keeps saved progress and quiz
  attempts attached to the same lesson.
- Unpublishing removes the public snapshot. A course that has been published
  before is then hidden from students (404) rather than reverting to older
  static content, including an original built-in A1 course after its first
  managed publish. A built-in course whose managed draft has never been
  published keeps its TypeScript page. Archiving also hides the course.

### Deleting content

Deleting a lesson or unit is refused when any student progress or quiz attempt
references it. Set the lesson to draft and republish to hide it, or archive the
course. This prevents silent loss of student history.

## 6. Verify the setup

Run these read-only catalog queries in the SQL Editor.

**RLS is enabled on every Phase 7 table:**

```sql
select c.relname as table_name, c.relrowsecurity as rls_enabled
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and c.relname in (
    'admin_users', 'admin_audit_log',
    'content_courses', 'content_units', 'content_lessons',
    'published_courses', 'published_units', 'published_lessons',
    'published_quiz_answers'
  )
order by c.relname;
```

Every row must show `rls_enabled = true`.

**Policies are admin-only for drafts and public-read-only for snapshots:**

```sql
select tablename, policyname, roles, cmd
from pg_policies
where schemaname = 'public'
  and tablename in (
    'admin_audit_log', 'content_courses', 'content_units',
    'content_lessons', 'published_courses', 'published_units',
    'published_lessons', 'published_quiz_answers'
  )
order by tablename, policyname;
```

Expect `public.is_admin()` on draft/audit policies, `{anon,authenticated}` select
policies on the three published tables, and **no policy at all** on
`admin_users` or `published_quiz_answers`.

**The allow-list and answer keys have no table grants:**

```sql
select grantee, table_name, privilege_type
from information_schema.role_table_grants
where table_schema = 'public'
  and table_name in ('admin_users', 'published_quiz_answers')
order by table_name, grantee;
```

Expect zero rows.

**No answer keys leaked into the public snapshot:**

```sql
select count(*) as leaked_answer_keys
from public.published_lessons
where questions::text ilike '%correctIndex%';
```

Expect `0`. Review explanations are returned only after quiz submission.

**Security-definer functions:**

```sql
select p.proname, p.prosecdef as security_definer
from pg_proc p
join pg_namespace n on n.oid = p.pronamespace
where n.nspname = 'public'
  and p.proname in (
    'is_admin', 'publish_content_course', 'unpublish_content_course',
    'grade_published_lesson_quiz'
  )
order by p.proname;
```

### Live authorization checks (not performed here)

These require two disposable accounts in a configured project. They have **not**
been run in this workspace.

1. **Student denied in the UI.** Sign in as a non-admin student and open
   `/admin`. Expect "Administrator access required"; no counts, audit entries or
   course data are rendered. The server redirects signed-out visitors to
   `/login?next=/admin`.
2. **Student denied on a direct API call.** With the student's session, call the
   publish RPC directly:
   `POST /rest/v1/rpc/publish_content_course` with
   `{ "p_course_id": "<any uuid>" }`. Expect HTTP 403 / SQLSTATE `42501`
   ("Only administrators can publish courses") before any course lookup.
3. **Student cannot read drafts.** Query `content_courses` with the student's
   session. Expect an empty result or permission error, never course rows.
   Querying `published_courses` and `published_lessons` should succeed.
4. **Student cannot read answer keys.** Query `published_quiz_answers`. Expect a
   permission error; the table has no grants or policies.
5. **Student cannot escalate.** Try updating `admin_users` or changing
   `user_metadata`; neither grants administrator status.
6. **Admin can manage content.** Sign in as the administrator, create a draft,
   add a unit and lesson, preview it, publish it, then verify it appears at
   `/courses/<slug>` in a private browsing window.
7. **Deletion guard.** Complete a lesson as the student, then attempt to delete
   that lesson as the admin. Expect the "saved student progress" refusal.
8. **Quiz confidentiality.** Open a published lesson as a student and search the
   page source for `correctIndex`. Expect none before submission; after
   submitting, the score and explanations come from the server action.

## 7. Troubleshooting

| Message | Meaning | Fix |
| --- | --- | --- |
| "Supabase is not connected yet" | `.env.local` is missing or invalid. | Add the project URL and publishable key, then restart the app. |
| "Admin database tables are not installed yet" | The Phase 7 migrations are not applied. | Apply section 3 in order. |
| "Administrator access required" | The signed-in account is not in `admin_users`. | Add its exact `auth.users.id` with the SQL in section 4.2. |
| "Only administrators can …" | A privileged RPC rejected a non-admin session (`42501`). | Expected. Sign in with an administrator account. |
| "The course URL cannot change after the first publish." | A published course slug was edited. | Keep the live URL; create a new course for a new URL. |
| "Lesson URLs are permanent…" | A lesson slug was edited. | Create a new lesson instead; saved progress stays attached to the old slug. |
| "A lesson … has saved student progress or quiz attempts." | Deletion would orphan student data. | Set the lesson to draft and republish, or archive the course. |
| "This lesson is not published" during a quiz submission | The snapshot was removed or the slug is wrong. | Reload the page; republish if needed. |

## 8. Known limitations in this workspace

- The migrations have **not** been applied. There is no Supabase project, no
  `.env.local`, no test account and no live data here. All admin pages show the
  setup notice.
- No live authentication, admin authorization, RLS, cross-role, publishing or
  content-save tests have been run. Static source, validation and migration
  checks are in `scripts/test-admin.mjs`.
- The Phase 6 dashboard still builds its course cards and activity list from the
  built-in TypeScript curriculum. Admin-created courses can be browsed and
  studied after publishing, but do not yet appear in the dashboard's "My
  courses" cards, course metrics or recent activity. Extending the dashboard
  queries is separate follow-up work.
- The admin lesson editor uses a validated JSON textarea for content blocks (with
  live preview) rather than a visual block editor. Quizzes use a structured
  builder.
- Importing a built-in course copies its current authored content. Later edits
  to the TypeScript files do not update an already imported draft, and importing
  again does not overwrite an existing managed course with units.
- The admin audit log records content mutations, not page views or sign-ins.
