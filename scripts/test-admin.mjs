import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  isValidSlug,
  normalizeSlug,
  parseMetadataJson,
  parseOutcomeLines,
  toPublicQuizQuestions,
  validateCourseFields,
  validateLessonFields,
  validateQuiz,
  validateUnitFields,
} from "../src/lib/admin/validation.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const migrationsDir = join(root, "supabase", "migrations");

function source(path) {
  return readFileSync(join(root, path), "utf8");
}

function migration(name) {
  return readFileSync(join(migrationsDir, name), "utf8");
}

const rolesMigration = migration("20261026120000_create_admin_roles_and_audit.sql");
const contentMigration = migration("20261026120100_create_content_tables.sql");
const functionsMigration = migration("20261026120200_create_content_functions.sql");

const validCourse = {
  slug: "A2 Travel English",
  title: "Travel English",
  summary: "Speak confidently at airports, hotels and train stations.",
  description: "A practical A2 course built around real travel situations.",
  level: "a2",
  skill: "speaking",
  outcomes: ["Ask for directions", "Book a hotel room"],
  metadata: { source: "admin" },
  premium: false,
  hours: 6,
};

const validQuestion = {
  id: "q1",
  question: "Which sentence is correct?",
  options: ["She go to work.", "She goes to work.", "She going to work."],
  correctIndex: 1,
  explanation: "Third-person singular verbs add -s or -es.",
};

const validLesson = {
  slug: "At the airport",
  title: "At the airport",
  summary: "Check in, find your gate and ask for help.",
  objective: "Use travel vocabulary to complete a check-in.",
  minutes: 20,
  status: "draft",
  blocks: [{ type: "text", paragraphs: ["Read the dialogue, then answer."] }],
  quiz: [validQuestion],
};

test("normalizeSlug produces stable public URLs", () => {
  assert.equal(normalizeSlug("  A1 Grammar: Basics!  "), "a1-grammar-basics");
  assert.equal(normalizeSlug("Don't Stop"), "dont-stop");
  assert.equal(normalizeSlug("hello---world"), "hello-world");
  assert.equal(normalizeSlug("--leading-and-trailing--"), "leading-and-trailing");
  assert.equal(normalizeSlug(42), "");
  assert.equal(normalizeSlug("x".repeat(200)).length, 120);
});

test("isValidSlug only accepts lowercase single-hyphen segments", () => {
  assert.equal(isValidSlug("a1-grammar-basics"), true);
  assert.equal(isValidSlug("a1"), true);
  assert.equal(isValidSlug("A1-grammar"), false);
  assert.equal(isValidSlug("a1--grammar"), false);
  assert.equal(isValidSlug("-grammar"), false);
  assert.equal(isValidSlug("grammar-"), false);
  assert.equal(isValidSlug(""), false);
  assert.equal(isValidSlug("x".repeat(121)), false);
  assert.equal(isValidSlug(null), false);
});

test("parseOutcomeLines trims, deduplicates and caps outcomes", () => {
  assert.deepEqual(
    parseOutcomeLines("  First outcome \nFirst outcome\n\nSecond   outcome "),
    ["First outcome", "Second outcome"],
  );
  assert.deepEqual(parseOutcomeLines("   \n \n"), []);
  assert.deepEqual(parseOutcomeLines(["not", "a", "string"]), []);

  const many = Array.from({ length: 15 }, (_, index) => `Outcome ${index + 1}`);
  assert.equal(parseOutcomeLines(many.join("\n")).length, 12);
  assert.equal(parseOutcomeLines("x".repeat(400))[0].length, 300);
});

test("parseMetadataJson accepts objects and rejects unsafe payloads", () => {
  assert.deepEqual(parseMetadataJson(""), { ok: true, value: {}, warnings: [] });
  assert.deepEqual(parseMetadataJson('{"source":"admin"}'), {
    ok: true,
    value: { source: "admin" },
    warnings: [],
  });
  assert.equal(parseMetadataJson("[]").ok, false);
  assert.equal(parseMetadataJson("{not json").ok, false);
  assert.equal(
    parseMetadataJson(JSON.stringify({ note: "x".repeat(21000) })).ok,
    false,
  );
});

test("validateCourseFields normalizes and validates course drafts", () => {
  const result = validateCourseFields(validCourse);

  assert.equal(result.ok, true);
  assert.equal(result.value.slug, "a2-travel-english");
  assert.equal(result.value.level, "A2");
  assert.equal(result.value.skill, "speaking");
  assert.equal(result.value.premium, false);
  assert.deepEqual(result.value.outcomes, [
    "Ask for directions",
    "Book a hotel room",
  ]);

  const invalid = validateCourseFields({
    slug: "!!!",
    title: "",
    summary: "",
    description: "",
    level: "Z9",
    skill: "cooking",
    outcomes: [],
    metadata: [],
    premium: "yes",
    hours: 0,
  });

  assert.equal(invalid.ok, false);
  for (const field of [
    "slug",
    "title",
    "summary",
    "description",
    "level",
    "skill",
    "outcomes",
    "hours",
    "metadata",
  ]) {
    assert.ok(invalid.errors[field], `expected an error for ${field}`);
  }

  const premium = validateCourseFields({ ...validCourse, premium: true });
  assert.equal(premium.ok, true);
  assert.equal(premium.value.premium, true);
});

test("validateUnitFields enforces draft or published status", () => {
  const result = validateUnitFields({
    title: "Arrivals",
    description: "Airport and hotel situations.",
    status: "draft",
  });

  assert.equal(result.ok, true);
  assert.equal(result.value.title, "Arrivals");

  const invalid = validateUnitFields({ title: "", status: "live" });
  assert.equal(invalid.ok, false);
  assert.ok(invalid.errors.title);
  assert.ok(invalid.errors.status);
});

test("validateQuiz requires exactly one valid correct option per question", () => {
  assert.equal(validateQuiz([validQuestion]).ok, true);

  for (const correctIndex of [-1, 3, 1.5, null, "", "abc"]) {
    const result = validateQuiz([{ ...validQuestion, correctIndex }]);
    assert.equal(result.ok, false, `correctIndex ${String(correctIndex)} must fail`);
  }

  const stringIndex = validateQuiz([{ ...validQuestion, correctIndex: "1" }]);
  assert.equal(stringIndex.ok, true);
  assert.equal(stringIndex.value[0].correctIndex, 1);

  assert.equal(
    validateQuiz([
      validQuestion,
      { ...validQuestion, question: "A duplicate id." },
    ]).ok,
    false,
  );
  assert.equal(
    validateQuiz([{ ...validQuestion, options: ["only one"] }]).ok,
    false,
  );
  assert.equal(
    validateQuiz([
      {
        ...validQuestion,
        options: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
      },
    ]).ok,
    false,
  );
  assert.equal(validateQuiz([{ ...validQuestion, explanation: "" }]).ok, false);
  assert.equal(validateQuiz("not an array").ok, false);
});

test("toPublicQuizQuestions never includes the answer key", () => {
  const publicQuestions = toPublicQuizQuestions([validQuestion]);

  assert.deepEqual(publicQuestions, [
    {
      id: "q1",
      question: "Which sentence is correct?",
      options: ["She go to work.", "She goes to work.", "She going to work."],
    },
  ]);
  assert.equal("correctIndex" in publicQuestions[0], false);
  assert.equal("explanation" in publicQuestions[0], false);

  const serialized = JSON.stringify(publicQuestions);
  assert.doesNotMatch(serialized, /correctIndex|explanation/);
});

test("validateLessonFields warns on empty drafts and blocks incomplete publishing", () => {
  const draft = validateLessonFields({
    ...validLesson,
    blocks: [],
    quiz: [],
  });

  assert.equal(draft.ok, true);
  assert.equal(draft.warnings.length, 2);

  const publishEmpty = validateLessonFields({
    ...validLesson,
    status: "published",
    blocks: [],
    quiz: [],
  });

  assert.equal(publishEmpty.ok, false);
  assert.ok(publishEmpty.errors.status);

  const publishReady = validateLessonFields({
    ...validLesson,
    status: "published",
  });

  assert.equal(publishReady.ok, true);
  assert.equal(publishReady.value.quiz.length, 1);
});

test("administrator status comes only from the protected allow-list", () => {
  assert.match(rolesMigration, /create table public\.admin_users/);
  assert.match(rolesMigration, /alter table public\.admin_users enable row level security/);
  assert.match(
    rolesMigration,
    /revoke all on table public\.admin_users from public, anon, authenticated/,
  );
  assert.doesNotMatch(
    rolesMigration,
    /grant[^;]*on table public\.admin_users/i,
  );
  assert.doesNotMatch(
    rolesMigration,
    /create policy[\s\S]{0,160}?on public\.admin_users/i,
  );

  assert.match(rolesMigration, /create function public\.is_admin\(\)/);
  assert.match(
    rolesMigration,
    /select exists \(\s*select 1\s*from public\.admin_users\s*where user_id = auth\.uid\(\)/s,
  );
  assert.match(rolesMigration, /security definer/);
  assert.match(rolesMigration, /revoke all on function public\.is_admin\(\) from public, anon, authenticated/);
  assert.match(rolesMigration, /grant execute on function public\.is_admin\(\) to authenticated/);
  assert.doesNotMatch(rolesMigration, /grant execute on function public\.is_admin\(\)[^;]*anon/i);
  assert.doesNotMatch(rolesMigration, /raw_user_meta_data|user_metadata|app_metadata/);
});

test("audit log is readable only by administrators and append-only", () => {
  assert.match(rolesMigration, /create policy "admin_audit_log_select_admins"/);
  assert.match(rolesMigration, /using \(public\.is_admin\(\)\)/);
  assert.match(rolesMigration, /grant select on table public\.admin_audit_log to authenticated/);
  assert.doesNotMatch(
    rolesMigration,
    /grant (insert|update|delete)[^;]*on table public\.admin_audit_log/i,
  );
});

test("draft content is admin-only and published snapshots are read-only", () => {
  for (const table of ["content_courses", "content_units", "content_lessons"]) {
    assert.match(
      contentMigration,
      new RegExp(`alter table public\\.${table} enable row level security`),
    );
    assert.match(
      contentMigration,
      new RegExp(`grant select, insert, update, delete on table public\\.${table} to authenticated`),
    );
  }

  for (const operation of ["select", "insert", "update", "delete"]) {
    assert.match(
      contentMigration,
      new RegExp(
        `create policy "content_(courses|units|lessons)_admin_${operation}"[\\s\\S]{0,160}?public\\.is_admin\\(\\)`,
      ),
    );
  }

  for (const table of [
    "published_courses",
    "published_units",
    "published_lessons",
  ]) {
    assert.match(
      contentMigration,
      new RegExp(
        `create policy "${table}_public_select"[\\s\\S]{0,120}?for select to anon, authenticated[\\s\\S]{0,40}?using \\(true\\)`,
      ),
    );
    assert.match(
      contentMigration,
      new RegExp(`grant select on table public\\.${table} to anon, authenticated`),
    );
  }

  assert.doesNotMatch(
    contentMigration,
    /grant (insert|update|delete)[^;]*on table public\.published_/i,
  );

  assert.match(
    contentMigration,
    /revoke all on table public\.published_quiz_answers from public, anon, authenticated/,
  );
  assert.doesNotMatch(
    contentMigration,
    /grant[^;]*on table public\.published_quiz_answers/i,
  );
  assert.doesNotMatch(
    contentMigration,
    /create policy[\s\S]{0,160}?on public\.published_quiz_answers/i,
  );
});

test("every privileged content function verifies administrator status", () => {
  const privilegedFunctions = [
    "publish_content_course",
    "unpublish_content_course",
    "archive_content_course",
    "restore_content_course",
    "reorder_content_units",
    "reorder_content_lessons",
    "mark_content_course_ready",
    "delete_content_lesson",
    "delete_content_unit",
    "import_content_course",
  ];

  for (const name of privilegedFunctions) {
    const start = functionsMigration.indexOf(`create function public.${name}(`);
    assert.notEqual(start, -1, `missing function ${name}`);
    const next = functionsMigration.indexOf("\ncreate function ", start + 1);
    const body = functionsMigration.slice(start, next === -1 ? undefined : next);

    assert.match(body, /if not public\.is_admin\(\) then/, `${name} must check is_admin`);
    assert.match(body, /errcode = '42501'/, `${name} must reject with 42501`);
  }
});

test("publishing keeps answer keys out of the public snapshot", () => {
  assert.match(
    functionsMigration,
    /public\.content_quiz_questions\(v_lesson\.quiz\)/,
  );
  assert.match(
    functionsMigration,
    /insert into public\.published_quiz_answers/,
  );
  assert.match(
    functionsMigration,
    /public\.content_quiz_answers\(v_lesson\.quiz\)/,
  );
  assert.match(functionsMigration, /delete from public\.published_courses/);
});

test("deleting units and lessons is blocked by saved student data", () => {
  const lessonDelete = functionsMigration.slice(
    functionsMigration.indexOf("create function public.delete_content_lesson"),
    functionsMigration.indexOf("create function public.delete_content_unit"),
  );
  assert.match(lessonDelete, /from public\.lesson_progress/);
  assert.match(lessonDelete, /from public\.quiz_attempts/);
  assert.match(lessonDelete, /errcode = '23503'/);

  const unitDelete = functionsMigration.slice(
    functionsMigration.indexOf("create function public.delete_content_unit"),
    functionsMigration.indexOf("create function public.import_content_course"),
  );
  assert.match(unitDelete, /from public\.lesson_progress/);
  assert.match(unitDelete, /from public\.quiz_attempts/);
  assert.match(unitDelete, /errcode = '23503'/);
});

test("published slugs are locked after the first publish", () => {
  assert.match(
    functionsMigration,
    /if old\.last_published_at is not null and new\.slug is distinct from old\.slug then/,
  );
  assert.match(functionsMigration, /create trigger content_courses_protect_slug/);
  assert.match(functionsMigration, /create trigger content_lessons_protect_slug/);
});

test("published quiz grading runs on the server with a private key", () => {
  const start = functionsMigration.indexOf(
    "create function public.grade_published_lesson_quiz(",
  );
  const body = functionsMigration.slice(start);

  assert.match(body, /security definer/);
  assert.match(body, /from public\.published_quiz_answers/);
  assert.match(body, /'correctIndex', v_correct/);
  assert.match(body, /'review', v_review/);
  assert.match(
    functionsMigration,
    /grant execute on function public\.grade_published_lesson_quiz\(text, text, jsonb\)\s+to anon, authenticated/,
  );
});

test("every admin server action re-checks authorization", () => {
  const actions = source("src/lib/admin/actions.ts");
  const chunks = actions.split(/export async function /).slice(1);

  assert.ok(chunks.length >= 16, "expected all admin actions in one module");

  for (const chunk of chunks) {
    const name = chunk.slice(0, chunk.indexOf("(")).trim();
    assert.match(
      chunk,
      /const context = await getAdminContext\(\);/,
      `${name} must call getAdminContext`,
    );
    assert.match(
      chunk,
      /if \(!context\.ok\) \{\s*return context\.state;/,
      `${name} must return the denied state`,
    );
  }
});

test("admin session checks are server-side and ignore editable metadata", () => {
  const auth = source("src/lib/admin/auth.ts");

  assert.match(auth, /await connection\(\)/);
  assert.match(auth, /supabase\.auth\.getUser\(\)/);
  assert.match(auth, /supabase\.rpc\("is_admin"\)/);
  assert.match(auth, /status: "denied"/);
  assert.doesNotMatch(auth, /raw_user_meta_data|user_metadata|app_metadata/);
  assert.doesNotMatch(auth, /service_role|SERVICE_ROLE/);
  assert.doesNotMatch(auth, /\.from\("admin_users"\)/);

  const guard = source("src/lib/admin/guard.ts");
  assert.match(guard, /redirect\(`\/login\?next=/);
});

test("admin routes and quiz payloads stay protected", () => {
  const layout = source("src/app/admin/layout.tsx");
  assert.match(layout, /export const instant = false/);

  for (const path of [
    "src/app/admin/page.tsx",
    "src/app/admin/courses/page.tsx",
    "src/app/admin/courses/new/page.tsx",
    "src/app/admin/courses/[courseId]/page.tsx",
    "src/app/admin/courses/[courseId]/preview/page.tsx",
    "src/app/admin/courses/[courseId]/lessons/new/page.tsx",
    "src/app/admin/courses/[courseId]/lessons/[lessonId]/edit/page.tsx",
    "src/app/admin/courses/[courseId]/lessons/[lessonId]/preview/page.tsx",
    "src/app/admin/memberships/page.tsx",
    "src/app/admin/certificates/page.tsx",
  ]) {
    const page = source(path);
    assert.match(page, /await requireAdminPage\(/, `${path} must verify admin access`);
    assert.doesNotMatch(page, /AdminPageSkeleton/, `${path} must not hide access checks behind a shell`);
  }

  const lessonPage = source(
    "src/app/courses/[slug]/lessons/[lessonSlug]/page.tsx",
  );
  assert.match(lessonPage, /resolveLessonOutline/);
  assert.match(lessonPage, /getPremiumAccess/);
  assert.match(lessonPage, /questions=\{body\.questions\}/);

  const published = source("src/lib/content/published.ts");
  assert.match(published, /toPublicQuizQuestions\(entry\.lesson\.quiz\)/);
  assert.match(published, /function asPublicQuestions/);

  const quiz = source("src/components/lessons/lesson-quiz.tsx");
  assert.match(quiz, /questions: PublicQuizQuestion\[\]/);
  assert.doesNotMatch(quiz, /questions: LessonQuizQuestion/);
});
