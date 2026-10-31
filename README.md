# SpeakUp English

A CEFR-aligned English learning platform covering A1 to C2, built with Next.js
App Router, TypeScript, Tailwind CSS and Supabase. A1–B2 courses are free;
C1–C2 are labelled premium. Phase 8 adds a provider-independent Premium
membership and payment boundary, but no payment provider is configured in this
workspace.

## What is implemented

- Branded marketing site and responsive course catalog with level/skill/URL
  filters.
- 42 catalog courses, including seven fully authored A1 courses with 84
  interactive lessons, exercises and quizzes.
- Supabase Auth with protected student routes, password reset, email
  confirmation and sign-out.
- Optional student progress: lesson completion, quiz attempts and best scores,
  plus a protected dashboard.
- Secure admin workspace at `/admin`: course, unit, lesson and quiz management,
  previews, draft/publish workflow, audit log, and published snapshots that
  students read.
- Premium membership records, database-enforced lesson gating, admin
  complimentary access and a verified webhook boundary for a future provider.
- Course-completion certificates for the seven complete A1 courses, with
  server-checked eligibility, a printable certificate, public verification and
  audited administrator revocation.
- Quiz answers are graded in the database. Correct answers are returned only
  after a complete submission; both published and authored answer keys live in
  private tables. Students cannot write progress or quiz rows directly: lesson
  completion and attempt recording are validated database functions.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The built-in curriculum works without any environment variables. Authentication,
progress, the dashboard and `/admin` show an honest setup notice until Supabase
is configured.

To connect Supabase:

```bash
cp .env.example .env.local
# fill in NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
npm run dev
```

Use only the public/publishable key in the app. The service-role key is used
only by the server-only payment webhook boundary, and only when a provider is
configured.

## Supabase setup

Apply the eleven SQL migrations in `supabase/migrations/` in the exact order in
[migration-order.md](docs/migration-order.md): Phase 5 (progress), Phase 7
(admin and content), Phase 8 (premium), Phase 9 (certificates), Phase 9.1
(progress write hardening) and Phase 10 (anonymous marketing counts, which
depends only on `public.is_admin()` and runs last). Step-by-step guides:

- [Authentication setup](docs/authentication-setup.md)
- [Migration order and dependency evidence](docs/migration-order.md)
- [Progress database setup](docs/progress-database-setup.md)
- [Admin database and content setup](docs/admin-database-setup.md) — includes
  the exact first-administrator SQL. Administrator status comes only from
  `public.admin_users`; sign-up and user metadata never grant it.
- [Premium payments setup](docs/premium-payments-setup.md)
- [Certificates setup](docs/certificates-setup.md)
- [Marketing tracking setup](docs/marketing-tracking-setup.md) — what the
  anonymous level-test funnel stores, how the link tags work and why a student
  cannot read the counts back.
- [Progress integrity audit](docs/progress-integrity-audit.md) — read-only
  review of rows that may predate the Phase 9.1 write revocation.
- [Pre-launch live verification](docs/prelaunch-verification.md) — two-student
  checklist for writes, grading, isolation, certificates and revocation.

## Verification

```bash
npx tsc --noEmit
npm run lint
npm run build
npm run test:progress
npm run test:dashboard
npm run test:admin
npm run test:premium
npm run test:level-test
npm run test:speech
npm run test:traffic
npm run test:certificates
npm run test:integrity
npm run test:migrations
```

`test:admin`, `test:certificates`, `test:integrity` and `test:migrations` cover
input validation, slug rules, migration order and security assertions,
write-grant revocation, answer-key parity, certificate issuance independence and
server-authorization source checks. They are not live database tests.
`npm run test:rls` is the separate live check for a configured disposable
Supabase project; the certificate checks are in
[docs/prelaunch-verification.md](docs/prelaunch-verification.md).

## Current status

Phases 1–9 are implemented, followed by the Phase 9.1 certificate-integrity and
progress-security audit. That audit revoked all direct student writes to
progress and quiz evidence and moved completion and quiz recording into
validated database functions. The migrations have **not** been applied to a live
Supabase project in this workspace, so live auth, database, RLS, admin, premium,
certificate and tamper behavior has not been tested here. No payment provider is
configured, and no course certificate can be issued until the migrations are
applied and a student completes a course. Phase 10 deployment is not started.
See the setup guides and limitations in `docs/`.
