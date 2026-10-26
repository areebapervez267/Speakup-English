# Certificates setup

Phase 9 adds course-completion certificates for the seven fully authored A1
courses. Certificates are issued by a database function after it re-checks the
student's saved progress. The browser never supplies a completion percentage,
a lesson list or a quiz score.

## Prerequisites

Apply every migration in the verified order in
[migration-order.md](./migration-order.md). The ten files, in short:

1. Phase 5 progress migrations (`2026102515…`), files 1–4.
2. Phase 7 admin and content migrations (`2026102612…`), files 5–7.
3. Phase 8 premium migration
   (`20261026130000_create_premium_memberships.sql`), file 8.
4. Phase 9 certificates
   (`20261026140000_create_certificates.sql`), file 9.
5. Phase 9.1 progress write hardening
   (`20261026150000_harden_progress_writes.sql`), file 10.

The certificate functions call `public.has_active_membership()` and
`public.is_admin()`, so applying Phase 9 without Phase 7 and Phase 8 will fail.
Phase 9 also replaces the audit `entity_type` constraint to allow
`certificate`. The Phase 9.1 migration verifies lesson existence against the
content, premium and certificate tables, so it must run last.

The full two-student issuance and revocation test is in
[prelaunch-verification.md](./prelaunch-verification.md). It has not been run in
this workspace.

No new environment variables are required. `NEXT_PUBLIC_SITE_URL` (already
documented in `.env.example`) is used to print a full verification URL. If it is
not set, the certificate page derives the origin from the incoming request.

## What the migration creates

| Object | Purpose |
| --- | --- |
| `certificate_course_policies` | One active policy per certifiable course: title, premium flag, minimum quiz percent. |
| `certificate_course_lessons` | Every lesson a student must complete, plus whether that lesson has a required quiz. |
| `certificates` | Issued records with a snapshot of student name, course title, completion date and revocation data. |
| `get_my_certificate_overview()` | Student-only eligibility and issued-certificate status. |
| `issue_certificate(course_slug)` | Validates every requirement in SQL, then inserts at most one certificate. |
| `get_my_certificate(certificate_id)` | Returns a certificate only when `user_id = auth.uid()`. |
| `verify_certificate(certificate_id)` | Anonymous public status check: valid, revoked or not found. |
| `admin_list_certificates()` | Administrator-only record list. |
| `admin_revoke_certificate(id, reason)` | Administrator-only revocation with a required reason and audit entry. |

### Seeded policies

| Course | Lessons | Quiz minimum |
| --- | --- | --- |
| Grammar Foundations | 14 | 60% |
| Essential 500 Words | 14 | no quizzes |
| Reading from Day One | 12 | 60% |
| Write Your First Sentences | 10 | 60% |
| Everyday Listening | 12 | 60% |
| First Conversations | 12 | 60% |
| Sounds of English | 10 | 60% |

All 84 authored A1 lessons are listed. All seven A1 courses are free, so their
`premium` policy flag is `false`; the issuance function still checks Phase 8
entitlement whenever a policy is marked premium.

Outline-only courses are deliberately absent. They cannot issue certificates
until interactive lessons are authored and added to both content and policy.

## Eligibility rules

`issue_certificate()` fails unless all of these are true:

1. The caller is signed in (`auth.uid()` is not null).
2. An active policy exists for the course slug.
3. Premium policies require an active Phase 8 membership.
4. The course has at least one required lesson.
5. Every required lesson has `lesson_progress.is_completed = true` for the
   caller.
6. Every lesson marked `requires_quiz` has a stored best score meeting the
   policy minimum. A missing attempt (`best_score_total = 0`) never passes.
7. A completion date can be derived from `max(lesson_progress.completed_at)`.
8. The student has a non-empty profile display name.
9. No certificate already exists for this `(user_id, course_slug)` pair.

The unique constraint `certificates_user_course_unique` enforces rule 9 even if
two requests race. Revoked certificates keep the row, so they cannot be
reissued. An administrator cannot issue a certificate directly.

## Security model

- RLS is enabled on all three certificate tables.
- `authenticated` and `anon` have **no** table privileges. There are no table
  grants for select, insert, update or delete.
- Students can only call `get_my_certificate_overview`, `get_my_certificate`
  and `issue_certificate`. Ownership is re-checked with `auth.uid()`.
- Public verification can be called by `anon`, but returns only the name printed
  on the certificate, course title, completion/issue dates and a revocation
  flag. It never returns an email address, user ID or administrator reason.
- Administrator functions re-check `public.is_admin()` inside the function,
  regardless of what the UI shows.
- Revocation requires a reason between 5 and 500 characters, stores the
  administrator ID and timestamp, and appends a `certificate_revoked` entry to
  `admin_audit_log`.
- Certificate tables are reachable only through security-definer functions.
  No service-role key is used by the application.
- Progress evidence is not client-writable. Since Phase 9.1, students have no
  direct `INSERT`, `UPDATE` or `DELETE` on `lesson_progress` or
  `quiz_attempts`. Completion goes through `mark_lesson_complete`, which checks
  the caller, the lesson and Premium access. Quiz attempts go through functions
  that grade answers against a private key before inserting. `issue_certificate`
  still re-reads the stored evidence, so tampering with the request cannot skip
  eligibility.
- The certificate page checks the session on the server and returns 404 for a
  certificate that belongs to another student.

## Student experience

1. Complete every required lesson in a certifiable course.
2. Meet the quiz minimum where the course has quizzes.
3. Open `/dashboard` and find the Certificates section.
4. Select **Issue certificate**. The server action calls `issue_certificate()`
   again, so a forged form cannot skip checks.
5. Open the certificate and select **Print or save as PDF**.

The certificate page is owner-only. It shows the student name, course title,
completion date, issue date, certificate UUID, full verification URL and the
issuer text. Revoked certificates display a revoked banner and cannot be
printed as valid.

## PDF generation

There is no server-side PDF dependency. The certificate uses a dedicated print
stylesheet with `@page { size: A4 }`, hides site navigation and the footer, and
uses `window.print()`. In the browser print dialog the student can choose
**Save as PDF**. This is a real browser-generated PDF, not an image or a
placeholder.

This approach is intentional: it avoids a headless browser or paid PDF service,
works on desktop and mobile print dialogs, and keeps the certificate visually
identical to the web page.

## Public verification

Share `/certificates/verify/<certificate-uuid>` or scan the URL printed on the
certificate. The page reports:

- **Valid** — issued and not revoked.
- **Revoked** — issued, then revoked; the revocation date is shown.
- **Not found** — the UUID is malformed or no record exists.

The verification page is `noindex` and shows no email address or account ID.
The UUID is random (`gen_random_uuid()`), so it is not enumerable by sequence.

## Administrator workflow

1. Sign in with an account in `public.admin_users`.
2. Open `/admin/certificates`.
3. Review student email, certificate name, course and dates.
4. Enter a written reason and select **Revoke**.

The reason, administrator and timestamp are stored on the certificate and in
the audit log. Revocation is permanent; the student can view the record but
cannot print it as valid and cannot reissue it.

## Changing policies or adding courses

Policies are managed in SQL, not from the browser. For a new fully authored
course:

```sql
insert into public.certificate_course_policies (
  course_slug, course_title, level, premium, minimum_quiz_percent
) values (
  'new-course-slug', 'New Course Title', 'a2', false, 60
);

insert into public.certificate_course_lessons (
  course_slug, lesson_slug, requires_quiz
) values
  ('new-course-slug', 'first-lesson', true),
  ('new-course-slug', 'second-lesson', true);
```

If authored lessons change, update `certificate_course_lessons` in the same
change. The test suite compares the seeded list with the authored A1 content and
fails when they drift.

## Testing

Run:

```bash
npx tsc --noEmit
npm run lint
npm run build
npm run test:progress
npm run test:dashboard
npm run test:admin
npm run test:premium
npm run test:certificates
npm run test:integrity
```

`test:certificates` checks the policy seed against the authored lesson files,
the 84-lesson coverage, the SQL security invariants, duplicate issuance,
ownership scoping, public verification fields, route authorization and helper
formatting. `test:integrity` checks that progress and attempt writes are
revoked, that the recording functions validate and grade, that the static
answer-key seed matches the authored quizzes, and that certificate issuance
takes no user or score input. Both are static and unit suites; they do **not**
execute the SQL against a live Supabase project.

Live verification steps after applying the migrations:

1. Create a student account and note the display name.
2. Complete every lesson in one A1 course and meet the quiz minimum.
3. Issue from `/dashboard`; confirm one row in `certificates`.
4. Try issuing again; confirm the duplicate is refused.
5. Open `/certificates/<id>` as the owner; confirm print preview fits A4.
6. Open the verification URL in a private window; confirm **Valid** with no
   email shown.
7. Sign in as a second student and open the first student's certificate URL;
   confirm 404.
8. As an administrator, revoke with a reason; confirm the certificate page and
   public verification show **Revoked**, and the audit log contains
   `certificate_revoked`.

## Limitations

- The migration has not been applied to a live Supabase project in this
  workspace. Issuance, RLS and revocation have therefore not been executed
  against a real database here.
- Only the seven complete A1 courses are certifiable. A2–C2 courses publish
  outlines only and cannot award certificates.
- No Premium course is certifiable yet, because the complete courses are all A1
  and free. The entitlement branch is implemented and seeded but not exercised
  by a current course.
- Certificates are not accredited qualifications, CEFR certificates or
  professional certifications. The issuer text says this explicitly.
- There is no QR code; the full verification URL is printed on the certificate.
- Student name and course title are snapshots. Renaming a profile later does not
  rewrite an issued certificate.
- Certificate evidence comes from `lesson_progress` and `quiz_attempts`. Since
  Phase 9.1 those rows cannot be written directly by students, and quiz scores
  are graded in the database against a private answer key. Completion is still
  self-attested: the student presses **Mark lesson complete**, and the database
  records the server time for an existing, accessible lesson. There is no
  proctoring, no proof of reading and no time limit. Do not describe these
  certificates as proof of independent assessment.
- Certificates issued before Phase 9.1 may rest on forged evidence. Run the
  read-only [progress integrity audit](./progress-integrity-audit.md) to list
  review leads. Revoke through the admin workflow with a reason; do not delete
  the certificate, progress or attempts.
