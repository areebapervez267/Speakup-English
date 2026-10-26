import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { scoreQuiz } from "../src/lib/progress/calculate.ts";
import { loadAuthoredQuizKeys } from "./lib/authored-quiz-keys.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function source(path) {
  return readFileSync(join(root, path), "utf8");
}

function slice(contents, start, end) {
  const startIndex = contents.indexOf(start);
  assert.notEqual(startIndex, -1, `missing marker: ${start}`);
  const endIndex = end ? contents.indexOf(end, startIndex + start.length) : -1;
  return endIndex === -1
    ? contents.slice(startIndex)
    : contents.slice(startIndex, endIndex);
}

const migration = source(
  "supabase/migrations/20261026150000_harden_progress_writes.sql",
);
const phaseFiveRls = source(
  "supabase/migrations/20261025150200_enable_progress_rls.sql",
);
const certificates = source(
  "supabase/migrations/20261026140000_create_certificates.sql",
);
const actions = source("src/lib/progress/actions.ts");

const keyBlock = slice(
  migration,
  "insert into public.static_quiz_answer_keys",
  "-- Completion",
);

const seededKeys = [...keyBlock.matchAll(
  /^ {2}\('([^']+)', '([^']+)', '(\[.*?\])'::jsonb\)[,;]$/gm,
)].map((match) => ({
  courseSlug: match[1],
  lessonSlug: match[2],
  questions: JSON.parse(match[3]),
}));

const authoredKeys = await loadAuthoredQuizKeys();

test("students hold no direct write grants or write policies on progress evidence", () => {
  assert.match(
    migration,
    /revoke insert, update, delete on table public\.lesson_progress\s+from public, anon, authenticated;/,
  );
  assert.match(
    migration,
    /revoke insert, update, delete on table public\.quiz_attempts\s+from public, anon, authenticated;/,
  );

  for (const policy of [
    "lesson_progress_insert_own",
    "lesson_progress_update_own",
    "lesson_progress_delete_own",
    "quiz_attempts_insert_own",
    "quiz_attempts_delete_own",
  ]) {
    assert.match(
      migration,
      new RegExp(`drop policy if exists "${policy}"`),
      `${policy} must be removed so a future grant cannot re-open writes`,
    );
  }

  assert.doesNotMatch(
    migration,
    /grant[^;]*(insert|update|delete)[^;]*on table public\.(lesson_progress|quiz_attempts)/i,
  );

  // Reads and the original own-row select policies stay intact.
  assert.match(phaseFiveRls, /lesson_progress_select_own/);
  assert.match(phaseFiveRls, /quiz_attempts_select_own/);
  assert.doesNotMatch(migration, /drop policy if exists "lesson_progress_select_own"/);
  assert.doesNotMatch(migration, /drop policy if exists "quiz_attempts_select_own"/);
});

test("completion is a validated definer RPC, not a client insert", () => {
  const completion = slice(
    migration,
    "create or replace function public.mark_lesson_complete",
    "comment on function public.mark_lesson_complete",
  );

  assert.match(completion, /security definer/);
  assert.match(completion, /student_id uuid := auth\.uid\(\)/);
  assert.match(completion, /from public\.published_lessons as lessons/);
  assert.match(completion, /from public\.certificate_course_lessons as lessons/);
  assert.match(completion, /This lesson is not available/);
  assert.match(completion, /errCode = 'P0002'|errcode = 'P0002'/);
  assert.match(completion, /current_user_has_active_membership\(\)/);
  assert.match(completion, /completed_at = coalesce\(progress\.completed_at, now\(\)\)/);

  // The caller can only name a lesson; identity and timestamp are derived.
  const signature = completion.slice(0, completion.indexOf("returns table"));
  assert.doesNotMatch(signature, /user_id|student_id|completed_at|p_score/i);

  assert.match(
    migration,
    /revoke all on function public\.mark_lesson_complete\(text, text\)\s+from public, anon, authenticated;/,
  );
  assert.match(
    migration,
    /grant execute on function public\.mark_lesson_complete\(text, text\)\s+to authenticated;/,
  );
});

test("static quiz recording accepts answers only and grades against a private key", () => {
  const recording = slice(
    migration,
    "create function public.record_static_quiz_attempt",
    "comment on function public.record_static_quiz_attempt",
  );
  const signature = recording.slice(0, recording.indexOf("returns jsonb"));

  assert.match(recording, /security definer/);
  assert.match(recording, /v_student uuid := auth\.uid\(\)/);
  assert.match(recording, /from public\.static_quiz_answer_keys as keys/);
  assert.match(recording, /v_score := v_score \+ 1/);
  assert.match(recording, /insert into public\.quiz_attempts/);
  assert.match(recording, /v_score,\s*\n\s*v_total/);
  assert.match(recording, /p_course_slug text/);
  assert.match(recording, /p_lesson_slug text/);
  assert.match(recording, /p_answers jsonb/);
  assert.doesNotMatch(signature, /p_score|p_total|score integer|total_questions integer/i);

  assert.match(
    migration,
    /revoke all on function public\.record_static_quiz_attempt\(text, text, jsonb\)\s+from public, anon, authenticated;/,
  );
  assert.match(
    migration,
    /grant execute on function public\.record_static_quiz_attempt\(text, text, jsonb\)\s+to authenticated;/,
  );
  assert.doesNotMatch(
    migration,
    /grant execute on function public\.record_static_quiz_attempt[^;]*to anon/,
  );
});

test("published quiz recording reuses the private grading function", () => {
  const recording = slice(
    migration,
    "create function public.record_published_quiz_attempt",
    "comment on function public.record_published_quiz_attempt",
  );
  const signature = recording.slice(0, recording.indexOf("returns jsonb"));

  assert.match(recording, /security definer/);
  assert.match(recording, /v_student uuid := auth\.uid\(\)/);
  assert.match(recording, /public\.grade_published_lesson_quiz\(/);
  assert.match(recording, /insert into public\.quiz_attempts/);
  assert.doesNotMatch(signature, /p_score|p_total|score integer|total_questions integer/i);

  assert.match(
    migration,
    /revoke all on function public\.record_published_quiz_attempt\(text, text, jsonb\)\s+from public, anon, authenticated;/,
  );
  assert.match(
    migration,
    /grant execute on function public\.record_published_quiz_attempt\(text, text, jsonb\)\s+to authenticated;/,
  );
});

test("private static answer keys are never readable by clients", () => {
  const table = slice(
    migration,
    "create table public.static_quiz_answer_keys",
    "insert into public.static_quiz_answer_keys",
  );

  assert.match(table, /alter table public\.static_quiz_answer_keys enable row level security/);
  assert.match(
    table,
    /revoke all on table public\.static_quiz_answer_keys\s+from public, anon, authenticated;/,
  );
  assert.doesNotMatch(
    migration,
    /grant[^;]*on table public\.static_quiz_answer_keys/i,
  );
  assert.doesNotMatch(
    migration,
    /grant[^;]*on function public\.record_(static|published)_quiz_attempt[^;]*to anon/i,
  );
});

test("seeded answer keys match every authored quiz exactly", () => {
  assert.equal(seededKeys.length, authoredKeys.length);
  assert.equal(seededKeys.length, 84);
  assert.equal(
    seededKeys.reduce((total, row) => total + row.questions.length, 0),
    336,
  );

  const expected = new Map(
    authoredKeys.map((row) => [
      `${row.courseSlug}/${row.lessonSlug}`,
      row.questions,
    ]),
  );

  for (const row of seededKeys) {
    const key = `${row.courseSlug}/${row.lessonSlug}`;
    assert.ok(expected.has(key), `unexpected seeded quiz: ${key}`);
    assert.deepEqual(
      row.questions,
      expected.get(key),
      `answer key drift for ${key}; re-run scripts/generate-static-quiz-keys.mjs`,
    );
  }
});

test("correct answers score full marks and wrong answers score zero", () => {
  for (const row of authoredKeys) {
    const questions = row.questions.map((question) => ({
      id: question.id,
      options: Array.from({ length: question.optionCount }, (_, index) => `o${index}`),
      correctIndex: question.correctIndex,
      explanation: "",
    }));

    const correct = Object.fromEntries(
      row.questions.map((question) => [question.id, question.correctIndex]),
    );
    const wrong = Object.fromEntries(
      row.questions.map((question) => [
        question.id,
        (question.correctIndex + 1) % question.optionCount,
      ]),
    );

    const full = scoreQuiz(questions, correct);
    assert.equal(full.ok, true);
    assert.equal(full.score, row.questions.length);
    assert.equal(full.total, row.questions.length);

    const none = scoreQuiz(questions, wrong);
    assert.equal(none.ok, true);
    assert.equal(none.score, 0);
    assert.equal(none.total, row.questions.length);
  }
});

test("server actions persist only through grading RPCs", () => {
  assert.match(actions, /supabase\.rpc\(\s*"record_static_quiz_attempt"/);
  assert.match(actions, /supabase\.rpc\(\s*"record_published_quiz_attempt"/);
  assert.doesNotMatch(actions, /\.from\("quiz_attempts"\)\s*\.insert/);
  assert.doesNotMatch(actions, /\.from\("quiz_attempts"\)\s*\.(update|delete|upsert)/);
  assert.doesNotMatch(actions, /\.from\("lesson_progress"\)\s*\.(insert|update|delete|upsert)/);
  assert.match(actions, /recorded\.outcome\.score !== outcome\.score/);
  assert.match(actions, /score !== outcome\.score/);
});

test("certificate issuance takes no user or score input and re-checks evidence", () => {
  const issuance = slice(
    certificates,
    "create function public.issue_certificate",
    "comment on function public.issue_certificate",
  );
  const signature = issuance.slice(0, issuance.indexOf("returns table"));

  assert.match(signature, /p_course_slug text/);
  assert.doesNotMatch(signature, /p_user|user_id|p_score|p_total|percent/i);

  assert.match(issuance, /v_student uuid := auth\.uid\(\)/);
  assert.match(issuance, /certificate_course_policies/);
  assert.match(issuance, /certificate_course_lessons/);
  assert.match(issuance, /progress\.is_completed/);
  assert.match(issuance, /progress\.best_score_total > 0/);
  assert.match(issuance, /minimum_quiz_percent/);
  assert.match(issuance, /has_active_membership\(v_student\)/);
  assert.match(issuance, /on conflict on constraint certificates_user_course_unique do nothing/);
  assert.match(issuance, /errCode = '23505'|errcode = '23505'/);
  assert.match(issuance, /user_id,\s*\n\s*course_slug,\s*\n\s*student_name/);
});

test("students keep ownership-scoped reads but cannot write evidence directly", () => {
  assert.match(phaseFiveRls, /using \(\(select auth\.uid\(\)\) = user_id\)/);
  assert.match(phaseFiveRls, /with check \(\(select auth\.uid\(\)\) = user_id\)/);

  assert.match(
    certificates,
    /create function public\.get_my_certificate\(p_certificate_id uuid\)/,
  );
  assert.match(certificates, /from public\.certificates as certificates\s+where certificates\.id = p_certificate_id\s+and certificates\.user_id = auth\.uid\(\)/);
});
