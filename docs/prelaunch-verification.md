# Pre-launch live verification checklist

This checklist is the only accepted evidence that auth, RLS, grading,
certificate issuance and revocation work against a real Supabase project. It
has **not** been run in this workspace. Do not mark the launch ready, and do not
tell a student or reviewer that security was verified, until every required box
has actually passed on a disposable project.

## 1. Rules

- Use a **separate disposable Supabase project** with no real student data.
- Use **two disposable student accounts** (A and B) and one disposable
  administrator account (C). Do not use a real person's account.
- Keep credentials in the shell or a password manager. Never put passwords,
  tokens, secret keys or `service_role` keys in source code, `.env.local`
  committed to git, screenshots, logs or documentation.
- The app uses only `NEXT_PUBLIC_SUPABASE_URL` and the publishable/anon key.
- Do not run this against production. This checklist creates progress,
  attempts, certificates and audit rows. Direct deletes are revoked by design,
  so the clean-up step is to delete the whole disposable project or its test
  auth users, not to hand-edit evidence rows.
- A failed check is useful. Do not weaken RLS, grants or function checks to make
  a check pass.

## 2. Prerequisites

1. All ten migrations applied in the exact order in
   [migration-order.md](./migration-order.md).
2. `.env.local` points at the disposable project and `npm run dev` starts
   without configuration errors.
3. Email/password auth is enabled and redirect URLs are configured as described
   in [authentication-setup.md](./authentication-setup.md).
4. Create accounts through `/signup`:
   - **Student A** with a display name, for example `Test Student A`.
   - **Student B** with a different display name, for example `Test Student B`.
   - **Admin C** with a display name. Promote C only with the SQL in
     [admin-database-setup.md](./admin-database-setup.md). Sign-up, profile
     edits and metadata must never grant admin.
5. Record the three UUIDs for the SQL checks:

   ```sql
   select id, email, created_at
   from auth.users
   where email in (
     'student-a@example.com',
     'student-b@example.com',
     'admin-c@example.com'
   )
   order by email;
   ```

6. Confirm the catalog is complete using section 3.4 of
   [migration-order.md](./migration-order.md): 84 static quizzes, 84 certificate
   lesson requirements, 7 active certificate policies, and security-definer
   recording functions with `search_path=""`.

## 3. Automated two-student check

With A and B credentials in the shell (PowerShell shown; use `export` in Bash):

```powershell
$env:SUPABASE_TEST_USER_A_EMAIL = "student-a@example.com"
$env:SUPABASE_TEST_USER_A_PASSWORD = "disposable-password-a"
$env:SUPABASE_TEST_USER_B_EMAIL = "student-b@example.com"
$env:SUPABASE_TEST_USER_B_PASSWORD = "disposable-password-b"

npm run test:rls
```

The script uses only the public URL/key and the two ordinary accounts. It must
exit `0`. A non-zero exit is a launch blocker; read the failing check instead of
retrying blindly.

- [ ] **Direct-write denial.** The script reports that direct `INSERT`,
      `UPDATE` and `DELETE` on `lesson_progress` and `quiz_attempts` are rejected
      with `42501`, including rows aimed at the other user. Anonymous calls to
      the write functions are also rejected.
- [ ] **Legitimate completion.** The script completes
      `grammar-foundations` / `subject-pronouns-and-be`, confirms the row, and
      confirms a second call keeps the first `completed_at`.
- [ ] **Server-side grading.** The script submits answers to
      `record_static_quiz_attempt`, and the returned score matches the stored
      attempt total and score. The attempt cannot be updated afterwards, and the
      browser never sends a score.
- [ ] **User isolation.** A cannot read B's progress, attempts or profile, and B
      cannot read A's. A cannot write a row for B.
- [ ] **Guest behavior.** Anonymous visitors cannot read progress/attempts and
      cannot execute the recording functions.

Keep the script output with the date and project reference. It contains test
account identifiers only, not real student data.

## 4. Manual app checks

### 4.1 Correct and incorrect quiz grading

Sign in as **A** and open
`/courses/grammar-foundations/lessons/subject-pronouns-and-be`.

- [ ] The saved-progress card shows the lesson already complete from the script,
      and the first completion date did not change.
- [ ] Submit the quiz with the correct sequence **2, 1, 3, 1** (option
      positions). Expect **4/4** and a saved best score of 4/4.
- [ ] Submit again with a deliberately wrong sequence, for example **3, 2, 1,
      2**. Expect **0/4**, the attempt to be recorded, and the best score to
      stay 4/4.
- [ ] Refresh both the lesson and `/dashboard`; the best score and completion
      persist.

The UI must never display a score before submission and must not accept a
client-supplied score. If the score differs from the DB attempt, stop and
inspect the server action before continuing.

### 4.2 Guest check

- [ ] Sign out, open the same lesson and take the quiz. The quiz works for
      practice, the page says the result is not saved permanently, and no
      progress row is created for the guest.
- [ ] DevTools shows no authenticated session and no request carrying a user
      access token.

## 5. Certificate eligibility

`grammar-foundations` requires **all 14 lessons** and a **60% minimum** on every
required quiz. With four questions per quiz, 60% means at least **3/4** on each
lesson.

### 5.1 Complete A's course

Use the app UI for at least one full lesson to prove the student flow, then
finish the remaining lessons through the same UI. If you need a faster set-up,
this SQL runs **only as a test fixture** in the SQL Editor owner session. It
calls the official completion and recording RPCs, not direct table writes. It
does not test function grants; `npm run test:rls` already did that with a real
student JWT.

```sql
-- Test fixture. Replace the UUID with Student A's id. Run only on the
-- disposable project.
begin;
select set_config(
  'request.jwt.claims',
  jsonb_build_object('sub', '<STUDENT_A_UUID>', 'role', 'authenticated')::text,
  true
);

do $$
declare
  lesson record;
  answer_key jsonb;
begin
  for lesson in
    select course_slug, lesson_slug, questions
    from public.static_quiz_answer_keys
    where course_slug = 'grammar-foundations'
  loop
    select jsonb_object_agg(
      question ->> 'id',
      (question ->> 'correctIndex')::integer
    )
    into answer_key
    from jsonb_array_elements(lesson.questions) as question;

    perform public.mark_lesson_complete(lesson.course_slug, lesson.lesson_slug);
    perform public.record_static_quiz_attempt(
      lesson.course_slug,
      lesson.lesson_slug,
      answer_key
    );
  end loop;
end
$$;

select count(*) filter (where is_completed) as completed_lessons,
       count(*) as tracked_lessons,
       min(best_score) as lowest_best_score,
       min(best_score_total) as quiz_total
from public.lesson_progress
where user_id = '<STUDENT_A_UUID>'
  and course_slug = 'grammar-foundations';
commit;
```

- [ ] The last query shows **14 completed**, **14 tracked**, `lowest_best_score`
      **4**, `quiz_total` **4**.
- [ ] `/dashboard` shows Grammar Foundations as eligible.
- [ ] If the count is short, do not issue and do not edit progress rows. Find
      the lesson that failed and use the app or RPC again.

### 5.2 Issue and verify

- [ ] As A, press **Issue certificate** on `/dashboard`. Exactly one row is
      created:

      ```sql
      select id, user_id, course_slug, student_name, completed_at, issued_at,
             revoked_at
      from public.certificates
      where user_id = '<STUDENT_A_UUID>';
      ```

- [ ] `student_name` matches A's profile display name, `course_title` is
      `Grammar Foundations`, and `completed_at` equals A's latest required
      completion.
- [ ] Open `/certificates/<certificate-id>` as A. The page loads and prints on
      A4 without clipping.
- [ ] Press **Issue certificate** again. Expect a duplicate refusal
      (`23505` / "already been issued"); no second row appears.
- [ ] Open the public `/certificates/verify/<certificate-id>` URL in a private
      window. It shows **Valid**, the name printed on the certificate, the
      course and the dates. It shows no email, account ID or revocation reason.

### 5.3 Student B is not eligible

- [ ] As B, with zero or 13 completed lessons, try to issue Grammar Foundations.
      Expect a refusal (`P0003`) and **no** certificate row for B.
- [ ] B cannot open A's `/certificates/<certificate-id>` owner page; expect
      **404** or a redirect, not A's data.
- [ ] B's `/dashboard` shows B's own eligibility only. A's completion counts do
      not appear in B's overview.
- [ ] Public verification remains public by design: B (or a guest) may open A's
      verification URL and see only the printed name, course, dates and status.

## 6. Certificate revocation

Sign in as **Admin C**, open `/admin/certificates`, and revoke A's certificate
with a reason of at least 5 characters, for example
`Pre-launch verification test`.

- [ ] The admin list shows the certificate as revoked with the reason.
- [ ] The SQL row now has `revoked_at`, `revoked_by = C`, and the reason:

      ```sql
      select id, revoked_at, revoked_by, revocation_reason
      from public.certificates
      where id = '<CERTIFICATE_ID>';
      ```

- [ ] The audit log contains one `certificate_revoked` entry with the
      certificate ID and reason:

      ```sql
      select action, entity_type, entity_id, summary, detail, created_at
      from public.admin_audit_log
      where action = 'certificate_revoked'
      order by created_at desc
      limit 5;
      ```

- [ ] A's `/certificates/<id>` page shows **Revoked** and no print button. It
      does not show the revocation reason; only the admin list does. The public
      page must never show the reason.
- [ ] The public verification URL returns status `revoked`:

      ```sql
      select * from public.verify_certificate('<CERTIFICATE_ID>');
      ```

- [ ] A still has the same progress and attempts. Revocation changes the
      certificate only; it does not delete evidence.
- [ ] A cannot re-issue the same course: the unique
      `(user_id, course_slug)` constraint still blocks it (`23505`). Reversing a
      revocation is not implemented.
- [ ] A non-admin account cannot call `admin_revoke_certificate`; expect
      `42501`. The `/admin/certificates` route must reject a non-admin before
      rendering data.

## 7. Optional integrity review after the tests

Run [`scripts/audit-progress-integrity.sql`](../scripts/audit-progress-integrity.sql)
after the checks. All writes above went through the app or official RPCs, so
queries 1–5 and 7 should return zero rows. Query 6 can return a row only if the
tests made ten or more attempts for one lesson inside one minute; the checklist
does not do that. See [progress-integrity-audit.md](./progress-integrity-audit.md)
for interpretation.

## 8. Clean-up

- [ ] Delete the disposable Supabase project, or delete the three test auth
      users. Cascading foreign keys remove their profiles, progress, attempts
      and certificates.
- [ ] Remove the test credentials from the shell and from any local scratch
      file.
- [ ] Do not copy test rows, tokens or screenshots into the repository.
- [ ] Record the result: date, project reference, migration state, `test:rls`
      exit code, each box above, and anything that failed. A partial pass is not
      a launch approval.

## 9. What this checklist cannot prove

- Completion is self-attested: the student presses **Mark lesson complete**.
  The database verifies the lesson, access and server time, not reading or
  understanding.
- A perfect forged row from before Phase 9.1 cannot be distinguished from a
  genuine one after the fact. The audit reports leads only.
- No course currently exercises Premium certificate gating: all seven
  certifiable courses are free A1. The Premium branch is implemented and seeded
  but cannot be live-tested with current content.
- No payment provider is configured, so checkout and webhook behavior are
  outside this checklist.
- Passing this checklist does not authorize a production deployment. That is a
  separate owner decision.
