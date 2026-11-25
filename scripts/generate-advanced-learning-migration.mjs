#!/usr/bin/env node
/**
 * Regenerates the additive C1/C2 learning seed from authored lesson data.
 * This script only writes a local migration file; it never contacts Supabase.
 */

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { register } from "node:module";

register("./alias-loader.mjs", import.meta.url);

const { courses } = await import("../src/data/courses.ts");
const {
  getAuthoredCourse,
  getLessonEntries,
} = await import("../src/data/lessons/index.ts");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = join(
  root,
  "supabase",
  "migrations",
  "20261125120000_add_c1_c2_static_learning.sql",
);
const advancedCourses = courses.filter(
  (course) => course.level === "c1" || course.level === "c2",
);

if (advancedCourses.length !== 14) {
  throw new Error("Expected exactly fourteen C1/C2 courses.");
}

function sql(value) {
  return `'${value.replaceAll("'", "''")}'`;
}

function values(rows, conflict) {
  return rows
    .map((row, index) => {
      const suffix = index === rows.length - 1 ? ` ${conflict};` : ",";
      return `  ${row}${suffix}`;
    })
    .join("\n");
}

const policies = [];
const lessons = [];
const keys = [];
let lessonCount = 0;
let questionCount = 0;

for (const course of advancedCourses) {
  const authored = getAuthoredCourse(course.slug);
  const entries = getLessonEntries(course.slug);

  if (!authored || entries.length !== course.lessons) {
    throw new Error(`Incomplete authored course: ${course.slug}`);
  }

  policies.push(
    `(${sql(course.slug)}, ${sql(course.title)}, ${sql(course.level)}, true, 60)`,
  );

  for (const { lesson } of entries) {
    if (lesson.quiz.length !== 4) {
      throw new Error(`Expected four quiz questions: ${course.slug}/${lesson.slug}`);
    }

    const questions = lesson.quiz.map((question) => {
      if (
        !Number.isInteger(question.correctIndex) ||
        question.correctIndex < 0 ||
        question.correctIndex >= question.options.length
      ) {
        throw new Error(`Invalid quiz answer: ${course.slug}/${lesson.slug}`);
      }

      return {
        id: question.id,
        optionCount: question.options.length,
        correctIndex: question.correctIndex,
      };
    });

    lessons.push(
      `(${sql(course.slug)}, ${sql(lesson.slug)}, true)`,
    );
    keys.push(
      `(${sql(course.slug)}, ${sql(lesson.slug)}, ${sql(JSON.stringify(questions))}::jsonb)`,
    );
    lessonCount += 1;
    questionCount += questions.length;
  }
}

if (lessonCount !== 240 || questionCount !== 960) {
  throw new Error(
    `Expected 240 lessons and 960 questions; found ${lessonCount} and ${questionCount}.`,
  );
}

const migration = `-- Add C1/C2 authored lessons to secure progress and certificate tracking.
-- Run after 20261026150000_harden_progress_writes.sql.
-- This seed is additive and safe to re-run; it grants no client table access.

insert into public.certificate_course_policies (
  course_slug,
  course_title,
  level,
  premium,
  minimum_quiz_percent
)
values
${values(
  policies,
  `on conflict (course_slug) do update set
  course_title = excluded.course_title,
  level = excluded.level,
  premium = excluded.premium,
  minimum_quiz_percent = excluded.minimum_quiz_percent`,
)}

insert into public.certificate_course_lessons (
  course_slug,
  lesson_slug,
  requires_quiz
)
values
${values(
  lessons,
  `on conflict (course_slug, lesson_slug) do update set
  requires_quiz = excluded.requires_quiz`,
)}

insert into public.static_quiz_answer_keys (
  course_slug,
  lesson_slug,
  questions
)
values
${values(
  keys,
  `on conflict (course_slug, lesson_slug) do update set
  questions = excluded.questions`,
)}
`;

writeFileSync(outputPath, migration, "utf8");
console.log(
  `Wrote ${outputPath}: ${policies.length} policies, ${lessonCount} lessons, ${questionCount} questions.`,
);
