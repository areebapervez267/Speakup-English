# Progress integrity audit (read-only)

Phase 9.1 closed direct student writes to `lesson_progress` and
`quiz_attempts`. It did **not** rewrite history. Any rows created while the old
insert/update/delete policies were active still exist, and some of them may
have been forged.

[`scripts/audit-progress-integrity.sql`](../scripts/audit-progress-integrity.sql)
is the first step for reviewing that history. It only reads data and reports
review leads. It does not delete, rewrite, revoke or "repair" student records.

> A finding is a reason to look closer, not proof of misconduct. A forged 4/4
> attempt on a four-question quiz is indistinguishable from a real perfect score
> if its timestamp and lesson are plausible. Treat the output as an evidence
> index for a human decision.

## 1. Prerequisites

- All ten migrations in the verified order in
  [migration-order.md](./migration-order.md) have been applied. The audit reads
  `static_quiz_answer_keys`, `published_lessons`, `published_courses`,
  `certificate_course_lessons` and `certificates`; without Phase 9.1 it cannot
  run.
- Use a read-only SQL session where possible. The script starts with
  `set default_transaction_read_only = on;` as a guard, but the SQL Editor role
  is still a database owner. The guarantee comes from the statements in the
  file, not from the role.
- The owner has approved running it. The output contains user IDs, quiz history
  and certificate student names. Do not paste it into public issues, chat rooms,
  screenshots or commits.

## 2. How to run it

In the Supabase SQL Editor:

1. Open a new query and run the guard line by itself:

   ```sql
   set default_transaction_read_only = on;
   ```

2. Run **one numbered query at a time** from the file, in the same editor tab.
   Most SQL Editor versions show only the last result set when several
   statements run together. If your client shows every result set, you may run
   the whole file once.
3. If the editor opens a fresh session for each run (the guard does not stick),
   put the guard line at the top of each run.
4. Leave the session open until you have exported what you need. The file ends
   without turning read-only off on purpose.

From `psql` against a test project, the whole file can be run normally:

```bash
psql "$TEST_DATABASE_URL" -f scripts/audit-progress-integrity.sql
```

`TEST_DATABASE_URL` is a secret connection string. Keep it in your shell or a
password manager, never in `.env.local`, source code, documentation or a
screenshot. Do not use the production connection string for the first run.

## 3. What each query reports

| # | Query | What a row means | Strength |
| --- | --- | --- | --- |
| 1 | Unknown lesson or question-total mismatch | The attempt points at a lesson that is not in the authored or published curriculum, or its `total_questions` does not match the current quiz. | Strong for unknown lessons. A published quiz edited after the attempt can cause a benign mismatch. |
| 2 | Attempt timestamp anomalies | `attempted_at` is before the account existed (allowing one minute) or more than five minutes in the future. The app cannot produce this through the recording RPC. | Strong lead for a direct write or clock manipulation. |
| 3 | Progress chronology anomalies | Progress, completion or update time predates the account or is in the future. | Strong lead, subject to the same clock caveat. |
| 4 | Completed lesson outside the curriculum | A completed row exists for a lesson that is not authored, published or required for a certificate. | Strong lead. A retired lesson can also leave a historical row. |
| 5 | Unexplained best score | `best_score` exists without a surviving attempt, or is better than every surviving attempt for that lesson. | Lead. Students could delete their own attempts before Phase 9.1, and the old update policy allowed direct score edits. |
| 6 | Attempt burst | Ten or more attempts for the same lesson inside 60 seconds. | Heuristic only. Fast legitimate retries can trigger it. |
| 7 | Certificates resting on flagged evidence | An issued certificate for a user/course that appears in queries 1–5. | Review list. It does not revoke anything and includes already-revoked certificates. |

The script's comments repeat these caveats next to each query. Read them before
drawing conclusions.

## 4. Known false positives

- **Perfect forgeries.** A direct insert with a plausible lesson, score and
  timestamp cannot be separated from a real attempt. No query can prove intent.
- **Edited published quizzes.** Published question counts can change when an
  admin republishes a course. Attempts made against an older version will show a
  question-total mismatch. Compare the attempt date with the course
  `updated_at` before treating it as fraud.
- **Stale authored seed.** `static_quiz_answer_keys` is generated from the
  authored lessons. If a quiz changes in source but the seed is not regenerated,
  legitimate attempts can look wrong. Run `npm run test:integrity` and
  `npm run generate:quiz-keys` before investigating mismatches. Any seed change
  must ship as a new forward migration.
- **Deleted attempts.** Before Phase 9.1, a student could delete their own
  attempts. A best score with no attempts (query 5) can therefore be historical
  rather than forged.
- **Retired lessons.** A lesson removed from the curriculum can leave a completed
  progress row (query 4). Check content history before acting.
- **Clock and timezone.** All columns are `timestamptz`. The one-minute and
  five-minute tolerances exist to avoid noise from clock skew. Do not tighten
  them ad hoc.

## 5. Handling confirmed or suspected fraud

Do not run `delete`, `update`, `truncate` or ad-hoc "cleanup" against historical
rows. There is no automatic remediation in this repository.

1. Preserve the output privately with the date, project reference and the
   migration state. Treat it as personal data.
2. Review the affected user and course manually. Compare with support records,
   the account creation date and the certificate issuance date.
3. If a certificate should no longer be valid, revoke it through the admin
   workflow (`public.admin_revoke_certificate` or `/admin/certificates`). That
   keeps the certificate row and writes a `certificate_revoked` audit entry with
   the reason. It is the intended non-destructive action. The public
   verification page will then show **Revoked** and will not show the reason.
4. Do not delete progress or attempts. They are evidence. If a policy requires
   removal under a data-deletion request, handle that as a separate,
   owner-approved process outside this audit.
5. Record the decision and the reason. Re-issuing a revoked certificate is
   blocked by the unique `(user_id, course_slug)` constraint; reversing a
   revocation is not implemented.

## 6. What Phase 9.1 does and does not change about old data

- It revokes direct `INSERT`, `UPDATE` and `DELETE` and drops the five write
  policies. New rows must go through validated security-definer functions.
- It adds `static_quiz_answer_keys`, so authored quizzes are graded in the
  database.
- It does not recalculate old best scores, re-grade old attempts, backfill
  missing attempts, delete suspicious rows or revoke certificates.
- It cannot certify that a completion was genuine; completion remains an
  explicit self-attested button press recorded with server time.

## 7. Expected result on a clean project

On a fresh project with no student activity, every query returns zero rows. If
the checklist in [prelaunch-verification.md](./prelaunch-verification.md) is run
and all writes go through the app or the official RPCs, queries 1–5 and 7 should
still return zero rows. Query 6 can return a row only if the test makes ten or
more attempts in one minute, which the checklist does not require.
