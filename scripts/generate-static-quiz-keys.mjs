#!/usr/bin/env node
/**
 * Prints the private static-quiz answer-key seed used by
 * supabase/migrations/20261026150000_harden_progress_writes.sql.
 *
 * Re-run after changing an authored A1 quiz and replace the
 * `insert into public.static_quiz_answer_keys` block in that migration.
 *
 *   node scripts/generate-static-quiz-keys.mjs
 */

import { loadAuthoredQuizKeys } from "./lib/authored-quiz-keys.mjs";

const rows = await loadAuthoredQuizKeys();

function sql(value) {
  return `'${value.replaceAll("'", "''")}'`;
}

console.log("insert into public.static_quiz_answer_keys (");
console.log("  course_slug,");
console.log("  lesson_slug,");
console.log("  questions");
console.log(")");
console.log("values");

rows.forEach((row, index) => {
  const questions = sql(JSON.stringify(row.questions));
  const suffix = index === rows.length - 1 ? ";" : ",";
  console.log(
    `  (${sql(row.courseSlug)}, ${sql(row.lessonSlug)}, ${questions}::jsonb)${suffix}`,
  );
});

console.error(
  `${rows.length} quizzes, ${rows.reduce((total, row) => total + row.questions.length, 0)} questions.`,
);
