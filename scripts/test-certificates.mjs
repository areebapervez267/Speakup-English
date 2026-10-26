import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  certificateEligibilityLabel,
  certificateProgressLabel,
  certificateVerificationPath,
  formatCertificateDate,
  isCertificateCourseSlug,
  isCertificateId,
} from "../src/lib/certificates/format.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function source(path) {
  return readFileSync(join(root, path), "utf8");
}

const migration = source(
  "supabase/migrations/20261026140000_create_certificates.sql",
);

function slice(contents, start, end) {
  const startIndex = contents.indexOf(start);
  assert.notEqual(startIndex, -1, `missing marker: ${start}`);
  const endIndex = end ? contents.indexOf(end, startIndex + start.length) : -1;
  return endIndex === -1
    ? contents.slice(startIndex)
    : contents.slice(startIndex, endIndex);
}

const authoredCourses = {
  "grammar-foundations": "a1-grammar",
  "essential-500-words": "a1-vocabulary",
  "reading-from-day-one": "a1-reading",
  "write-your-first-sentences": "a1-writing",
  "everyday-listening": "a1-listening",
  "first-conversations": "a1-speaking",
  "sounds-of-english": "a1-pronunciation",
};

function authoredLessons(courseSlug) {
  const dir = join(
    root,
    "src",
    "data",
    "lessons",
    authoredCourses[courseSlug],
  );
  const files = readdirSync(dir)
    .filter((file) => /^unit-\d+\.ts$/.test(file))
    .sort();

  const lessons = [];
  let quizCount = 0;

  for (const file of files) {
    const contents = readFileSync(join(dir, file), "utf8");
    for (const match of contents.matchAll(/^ {6}slug: "([^"]+)"/gm)) {
      lessons.push(match[1]);
    }
    quizCount += (contents.match(/^ {6}quiz: \[/gm) ?? []).length;
  }

  return { lessons, quizCount };
}

const policyBlock = slice(
  migration,
  "insert into public.certificate_course_policies",
  "insert into public.certificate_course_lessons",
);
const lessonBlock = slice(
  migration,
  "insert into public.certificate_course_lessons",
  "create trigger certificate_course_policies_set_updated_at",
);

const policies = [...policyBlock.matchAll(
  /\('([^']+)', '([^']+)', 'a1', (true|false), (\d+)\)/g,
)].map((match) => ({
  slug: match[1],
  title: match[2],
  premium: match[3] === "true",
  minimum: Number(match[4]),
}));

const seededLessons = [...lessonBlock.matchAll(
  /\('([^']+)', '([^']+)', (true|false)\)/g,
)].map((match) => ({
  courseSlug: match[1],
  lessonSlug: match[2],
  requiresQuiz: match[3] === "true",
}));

test("certificate IDs and course slugs are validated before any request", () => {
  assert.equal(
    isCertificateId("3b241101-e2bb-4255-8caf-4136c566a962"),
    true,
  );
  assert.equal(
    isCertificateId("3B241101-E2BB-4255-8CAF-4136C566A962"),
    true,
  );
  assert.equal(isCertificateId("not-a-certificate"), false);
  assert.equal(isCertificateId("3b241101-e2bb-9255-8caf-4136c566a962"), false);
  assert.equal(isCertificateId(""), false);
  assert.equal(isCertificateId(null), false);

  assert.equal(isCertificateCourseSlug("grammar-foundations"), true);
  assert.equal(isCertificateCourseSlug("a1"), true);
  assert.equal(isCertificateCourseSlug("Grammar-Foundations"), false);
  assert.equal(isCertificateCourseSlug("../admin"), false);
  assert.equal(isCertificateCourseSlug("a".repeat(121)), false);
});

test("certificate dates and progress copy are deterministic", () => {
  assert.equal(
    formatCertificateDate("2026-10-05T23:30:00.000Z"),
    "October 5, 2026",
  );
  assert.equal(formatCertificateDate("not-a-date"), null);
  assert.equal(formatCertificateDate(null), null);
  assert.equal(
    certificateVerificationPath("3b241101-e2bb-4255-8caf-4136c566a962"),
    "/certificates/verify/3b241101-e2bb-4255-8caf-4136c566a962",
  );

  assert.equal(
    certificateProgressLabel({
      completedLessons: 8,
      totalLessons: 14,
      quizLessons: 14,
      quizLessonsMet: 6,
      minimumQuizPercent: 60,
    }),
    "8 of 14 lessons complete · 6 of 14 quizzes at 60% or higher",
  );

  assert.equal(
    certificateProgressLabel({
      completedLessons: 14,
      totalLessons: 14,
      quizLessons: 0,
      quizLessonsMet: 0,
      minimumQuizPercent: 0,
    }),
    "14 of 14 lessons complete",
  );
});

test("certificate status labels cover issued, revoked and in-progress states", () => {
  const base = {
    eligible: false,
    certificate: null,
    completedLessons: 3,
    totalLessons: 14,
    premium: false,
  };

  assert.equal(
    certificateEligibilityLabel({ ...base, eligible: true }),
    "Ready to issue",
  );
  assert.equal(
    certificateEligibilityLabel({
      ...base,
      certificate: { revokedAt: null },
    }),
    "Issued",
  );
  assert.equal(
    certificateEligibilityLabel({
      ...base,
      certificate: { revokedAt: "2026-10-06T00:00:00.000Z" },
    }),
    "Revoked",
  );
  assert.equal(
    certificateEligibilityLabel({
      ...base,
      completedLessons: 14,
      premium: true,
    }),
    "Premium required",
  );
  assert.equal(certificateEligibilityLabel(base), "In progress");
});

test("only the seven fully authored A1 courses have certificate policies", () => {
  assert.equal(policies.length, 7);
  assert.deepEqual(
    policies.map((policy) => policy.slug).sort(),
    Object.keys(authoredCourses).sort(),
  );

  const titles = new Map(policies.map((policy) => [policy.slug, policy.title]));
  assert.equal(titles.get("grammar-foundations"), "Grammar Foundations");
  assert.equal(titles.get("essential-500-words"), "Essential 500 Words");
  assert.equal(titles.get("reading-from-day-one"), "Reading from Day One");
  assert.equal(
    titles.get("write-your-first-sentences"),
    "Write Your First Sentences",
  );
  assert.equal(titles.get("everyday-listening"), "Everyday Listening");
  assert.equal(titles.get("first-conversations"), "First Conversations");
  assert.equal(titles.get("sounds-of-english"), "Sounds of English");

  for (const outlineOnly of [
    "everyday-grammar",
    "confident-grammar",
    "conversation-confidence",
    "exam-preparation",
  ]) {
    assert.equal(titles.has(outlineOnly), false);
  }

  for (const policy of policies) {
    assert.equal(policy.premium, false, "A1 courses are free");
  }

  assert.equal(
    policies.find((policy) => policy.slug === "essential-500-words").minimum,
    0,
  );

  for (const policy of policies) {
    if (policy.slug !== "essential-500-words") {
      assert.equal(policy.minimum, 60);
    }
  }
});

test("seeded certificate lessons match all 84 authored lessons exactly", () => {
  assert.equal(seededLessons.length, 84);

  const key = (courseSlug, lessonSlug) => `${courseSlug}/${lessonSlug}`;
  const seededKeys = seededLessons.map((row) =>
    key(row.courseSlug, row.lessonSlug),
  );
  assert.equal(new Set(seededKeys).size, seededKeys.length, "no duplicates");

  let expectedTotal = 0;

  for (const courseSlug of Object.keys(authoredCourses)) {
    const { lessons, quizCount } = authoredLessons(courseSlug);
    expectedTotal += lessons.length;

    assert.ok(
      quizCount === 0 || quizCount === lessons.length,
      `${courseSlug} quiz coverage should be all or none`,
    );

    const rows = seededLessons.filter((row) => row.courseSlug === courseSlug);
    assert.deepEqual(
      rows.map((row) => row.lessonSlug).sort(),
      [...lessons].sort(),
      `${courseSlug} lesson list must match the authored content`,
    );

    for (const row of rows) {
      assert.equal(
        row.requiresQuiz,
        quizCount > 0,
        `${courseSlug}/${row.lessonSlug} quiz flag`,
      );
    }
  }

  assert.equal(expectedTotal, 84);
  assert.equal(
    seededLessons.filter((row) => row.requiresQuiz).length,
    70,
    "six quiz-bearing courses cover 70 lessons",
  );
});

test("certificate ownership and duplicate issuance are enforced in the database", () => {
  assert.match(
    migration,
    /create table public\.certificates \([\s\S]*?user_id uuid not null[\s\S]*?constraint certificates_user_course_unique unique \(user_id, course_slug\)/,
  );
  assert.match(
    migration,
    /on conflict on constraint certificates_user_course_unique do nothing/,
  );
  assert.match(migration, /using errcode = '23505'/);

  const own = slice(
    migration,
    "create function public.get_my_certificate(",
    "create function public.verify_certificate(",
  );
  assert.match(own, /security definer/);
  assert.match(own, /certificates\.user_id = auth\.uid\(\)/);
  assert.match(own, /where certificates\.id = p_certificate_id/);
  assert.doesNotMatch(own, /p_user_id|p_email/);
});

test("issuance re-checks completion, quiz scores and Premium entitlement in SQL", () => {
  const issue = slice(
    migration,
    "create function public.issue_certificate(",
    "create function public.get_my_certificate(",
  );

  assert.match(issue, /security definer/);
  assert.match(issue, /set search_path = ''/);
  assert.match(issue, /v_student uuid := auth\.uid\(\)/);
  assert.match(issue, /if v_student is null then/);
  assert.match(issue, /policies\.is_active/);
  assert.match(issue, /v_policy\.premium[\s\S]*?has_active_membership\(v_student\)/);
  assert.match(issue, /progress\.is_completed/);
  assert.match(issue, /progress\.best_score_total > 0/);
  assert.match(issue, /progress\.best_score \* 100/);
  assert.match(issue, /v_policy\.minimum_quiz_percent/);
  assert.match(issue, /max\(progress\.completed_at\)/);
  assert.match(issue, /certificates_user_course_unique/);
  assert.doesNotMatch(issue, /p_completed|p_score|p_percent|percent_complete/);

  assert.match(
    migration,
    /grant execute on function public\.issue_certificate\(text\) to authenticated/,
  );
  assert.doesNotMatch(
    migration,
    /grant execute on function public\.issue_certificate[^;]*to anon/,
  );
});

test("public verification exposes status and dates but no private account data", () => {
  const verify = slice(
    migration,
    "create function public.verify_certificate(",
    "-- Administrator review",
  );

  assert.match(verify, /security definer/);
  assert.match(verify, /'not_found'::text/);
  assert.match(verify, /when v_certificate\.revoked_at is null then 'valid'/);
  assert.match(verify, /else 'revoked'/);
  assert.doesNotMatch(verify, /email|user_id|revocation_reason/);
  assert.match(
    migration,
    /grant execute on function public\.verify_certificate\(uuid\)\s+to anon, authenticated/,
  );
});

test("certificate tables have RLS enabled and no direct client grants", () => {
  for (const table of [
    "certificate_course_policies",
    "certificate_course_lessons",
    "certificates",
  ]) {
    assert.match(
      migration,
      new RegExp(`alter table public\\.${table} enable row level security`),
    );
    assert.match(
      migration,
      new RegExp(
        `revoke all on table public\\.${table}\\s+from public, anon, authenticated`,
      ),
    );
    assert.doesNotMatch(
      migration,
      new RegExp(
        `grant (select|insert|update|delete)[^;]*on table public\\.${table}`,
      ),
    );
  }

  assert.doesNotMatch(migration, /service_role|SERVICE_ROLE/);
});

test("administrator revocation requires justification and writes an audit entry", () => {
  assert.match(
    migration,
    /entity_type in \([\s\S]*'membership',[\s\S]*'certificate',[\s\S]*'system'[\s\S]*\)/,
  );

  const adminList = slice(
    migration,
    "create function public.admin_list_certificates()",
    "create function public.admin_revoke_certificate(",
  );
  assert.match(adminList, /security definer/);
  assert.match(adminList, /where public\.is_admin\(\)/);

  const revoke = slice(
    migration,
    "create function public.admin_revoke_certificate(",
  );
  assert.match(revoke, /security definer/);
  assert.match(revoke, /if not public\.is_admin\(\) then/);
  assert.match(revoke, /char_length\(v_reason\) < 5/);
  assert.match(revoke, /revocation_reason = v_reason/);
  assert.match(revoke, /'certificate_revoked'/);
  assert.match(revoke, /'certificate',/);
  assert.match(revoke, /insert into public\.admin_audit_log/);
  assert.match(
    migration,
    /grant execute on function public\.admin_revoke_certificate\(uuid, text\)\s+to authenticated/,
  );
});

test("student dashboard renders certificate eligibility and issue actions", () => {
  const page = source("src/app/dashboard/page.tsx");
  assert.match(page, /fetchCertificateOverview\(supabase\)/);
  assert.match(page, /certificates=\{certificates\}/);

  const view = source("src/components/dashboard/dashboard-view.tsx");
  assert.match(view, /<CertificatesPanel overview=\{certificates\} \/>/);

  const panel = source("src/components/dashboard/certificates-panel.tsx");
  assert.match(panel, /Issue certificate|CertificateIssueForm/);
  assert.match(panel, /View and print/);
  assert.match(panel, /not certificate-eligible/);
  assert.match(panel, /getAuthoredCourseSlugs/);

  const form = source(
    "src/components/certificates/certificate-issue-form.tsx",
  );
  assert.match(form, /issueCertificateAction/);
  assert.match(form, /name="courseSlug"/);
});

test("owner certificate page verifies the session and renders print content", () => {
  const page = source("src/app/certificates/[certificateId]/page.tsx");

  assert.match(page, /await cookies\(\)/);
  assert.match(page, /supabase\.auth\.getUser\(\)/);
  assert.doesNotMatch(page, /\.auth\.getSession\(/);
  assert.match(page, /redirect\([\s\S]*?\/login\?next=/);
  assert.match(page, /fetchOwnCertificate\(supabase, certificateId\)/);
  assert.match(page, /notFound\(\)/);
  assert.match(page, /brand\.tagline/);
  assert.match(page, /certificate-print/);
  assert.match(page, /verificationUrl/);
  assert.match(page, /not an accredited qualification/);

  const printButton = source(
    "src/components/certificates/certificate-print-button.tsx",
  );
  assert.match(printButton, /window\.print\(\)/);
  assert.match(printButton, /Print or save as PDF/);
});

test("public verification route covers valid, revoked, not-found and setup states", () => {
  const page = source(
    "src/app/certificates/verify/[certificateId]/page.tsx",
  );

  assert.match(page, /isCertificateId\(certificateId\)/);
  assert.match(page, /verifyPublicCertificate\(supabase, certificateId\)/);
  assert.match(page, /certificate\.status === "not_found"/);
  assert.match(page, /Revoked certificate/);
  assert.match(page, /Valid certificate/);
  assert.match(page, /isSupabaseConfigured/);
  assert.doesNotMatch(page, /studentEmail|student_email|auth\.getUser/);
});

test("admin certificate route uses the trusted admin guard and revocation action", () => {
  const page = source("src/app/admin/certificates/page.tsx");
  assert.match(page, /await requireAdminPage\("\/admin\/certificates"\)/);
  assert.match(page, /fetchAdminCertificates\(supabase\)/);
  assert.match(page, /revokeCertificateAction/);
  assert.match(page, /Revocation reason/);

  const action = source("src/lib/admin/certificate-actions.ts");
  assert.match(action, /getAdminContext\(\)/);
  assert.match(action, /admin_revoke_certificate/);
  assert.match(action, /reason\.length < 5/);
  assert.match(action, /revalidatePath\("\/admin\/certificates"\)/);

  const nav = source("src/components/admin/admin-nav.tsx");
  assert.match(nav, /href: "\/admin\/certificates"/);
});

test("certificate code never references privileged server keys", () => {
  for (const path of [
    "src/app/certificates/[certificateId]/page.tsx",
    "src/app/certificates/verify/[certificateId]/page.tsx",
    "src/app/admin/certificates/page.tsx",
    "src/lib/certificates/actions.ts",
    "src/lib/certificates/queries.ts",
    "src/lib/admin/certificate-actions.ts",
  ]) {
    const contents = source(path);
    assert.doesNotMatch(contents, /SERVICE_ROLE|service_role|SUPABASE_SECRET/);
  }
});
