#!/usr/bin/env node
/**
 * Prints private static-quiz answer-key rows for authored lessons.
 *
 * Re-run after changing a quiz. Use the output in a new additive migration;
 * never rewrite a migration that has already been applied.
 *
 *   node scripts/generate-static-quiz-keys.mjs
 *   node scripts/generate-static-quiz-keys.mjs --level c1,c2 --upsert
 */

import { loadAuthoredQuizKeys } from "./lib/authored-quiz-keys.mjs";

const levelArgument = process.argv.find((argument) =>
  argument.startsWith("--level="),
);
const requestedLevels = levelArgument
  ?.slice("--level=".length)
  .split(",")
  .map((level) => level.trim())
  .filter(Boolean);
const validLevels = new Set(["a1", "c1", "c2"]);

if (requestedLevels?.some((level) => !validLevels.has(level))) {
  throw new Error("Use --level with a comma-separated list of a1, c1 or c2.");
}

const upsert = process.argv.includes("--upsert");
const rows = (await loadAuthoredQuizKeys()).filter(
  (row) => !requestedLevels?.length || requestedLevels.includes(row.level),
);

if (rows.length === 0) {
  throw new Error("No authored quiz keys matched the requested level.");
}

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
  const isLast = index === rows.length - 1;
  const suffix = isLast
    ? upsert
      ? " on conflict (course_slug, lesson_slug) do update set questions = excluded.questions;"
      : ";"
    : ",";
  console.log(
    `  (${sql(row.courseSlug)}, ${sql(row.lessonSlug)}, ${questions}::jsonb)${suffix}`,
  );
});

console.error(
  `${rows.length} quizzes, ${rows.reduce((total, row) => total + row.questions.length, 0)} questions.`,
);
