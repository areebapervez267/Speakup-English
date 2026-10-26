import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

import {
  buildCourseProgressSummaries,
  buildRecentLearningActivity,
  formatBestQuizScore,
  formatCompletionDate,
  isBetterQuizScore,
  mapLessonProgressRow,
  parseQuizAnswers,
  scoreQuiz,
  toCompletionPercent,
} from "../src/lib/progress/calculate.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const migrationsDir = join(root, "supabase", "migrations");

const questions = [
  { id: "q1", options: ["a", "b", "c"], correctIndex: 1, explanation: "q1 reason" },
  { id: "q2", options: ["a", "b"], correctIndex: 0, explanation: "q2 reason" },
  { id: "q3", options: ["a", "b", "c"], correctIndex: 2, explanation: "q3 reason" },
  { id: "q4", options: ["a", "b"], correctIndex: 1, explanation: "q4 reason" },
];

const review = [
  { id: "q1", correctIndex: 1, explanation: "q1 reason" },
  { id: "q2", correctIndex: 0, explanation: "q2 reason" },
  { id: "q3", correctIndex: 2, explanation: "q3 reason" },
  { id: "q4", correctIndex: 1, explanation: "q4 reason" },
];

const validAnswers = { q1: 1, q2: 0, q3: 2, q4: 0 };

test("scoreQuiz calculates the score and returns a server review", () => {
  assert.deepEqual(scoreQuiz(questions, validAnswers), {
    ok: true,
    score: 3,
    total: 4,
    review,
  });

  assert.deepEqual(
    scoreQuiz(questions, { q1: 1, q2: 0, q3: 2, q4: 1 }),
    { ok: true, score: 4, total: 4, review },
  );

  assert.deepEqual(
    scoreQuiz(questions, { q1: 0, q2: 1, q3: 1, q4: 0 }),
    { ok: true, score: 0, total: 4, review },
  );
});

test("parseQuizAnswers accepts only complete, well-formed maps", () => {
  assert.deepEqual(parseQuizAnswers(questions, validAnswers), validAnswers);
  assert.equal(parseQuizAnswers([], {}), null);
  assert.equal(parseQuizAnswers(questions, { ...validAnswers, q5: 0 }), null);
  assert.equal(parseQuizAnswers(questions, { ...validAnswers, q1: 3 }), null);
  assert.equal(parseQuizAnswers(questions, { ...validAnswers, q1: "1" }), null);
  assert.equal(parseQuizAnswers(questions, { q1: 1, q2: 0, q3: 2 }), null);
});

test("scoreQuiz rejects incomplete or malformed answer maps", () => {
  for (const answers of [
    null,
    undefined,
    "answers",
    [],
    { q1: 1, q2: 0, q3: 2 },
    { ...validAnswers, q5: 0 },
    { ...validAnswers, q1: 3 },
    { ...validAnswers, q1: -1 },
    { ...validAnswers, q1: 1.5 },
    { ...validAnswers, q1: "1" },
  ]) {
    const result = scoreQuiz(questions, answers);
    assert.equal(result.ok, false, `expected rejection for ${JSON.stringify(answers)}`);
    assert.equal(typeof result.message, "string");
  }
});

test("scoreQuiz validates the canonical question bank", () => {
  assert.equal(scoreQuiz([], {}).ok, false);

  for (const broken of [
    [{ id: "", options: ["a"], correctIndex: 0 }],
    [{ id: "q1", options: [], correctIndex: 0 }],
    [{ id: "q1", options: ["a"], correctIndex: 1 }],
    [{ id: "q1", options: ["a"], correctIndex: -1 }],
    [{ id: "q1", options: ["a"], correctIndex: 0.5 }],
    [
      { id: "q1", options: ["a"], correctIndex: 0 },
      { id: "q1", options: ["b"], correctIndex: 0 },
    ],
  ]) {
    const result = scoreQuiz(broken, { q1: 0 });
    assert.equal(result.ok, false);
  }
});

test("isBetterQuizScore compares ratios and breaks ties by raw score", () => {
  assert.equal(isBetterQuizScore(3, 4, 2, 3), true);
  assert.equal(isBetterQuizScore(2, 3, 3, 4), false);
  assert.equal(isBetterQuizScore(2, 4, 1, 2), true);
  assert.equal(isBetterQuizScore(1, 2, 2, 4), false);
  assert.equal(isBetterQuizScore(2, 4, 2, 4), false);
  assert.equal(isBetterQuizScore(0, 4, 0, 0), true);
  assert.equal(isBetterQuizScore(1, 4, 0, 0), true);
});

test("isBetterQuizScore rejects impossible or malformed values", () => {
  assert.equal(isBetterQuizScore(5, 4, 1, 2), false);
  assert.equal(isBetterQuizScore(-1, 4, 1, 2), false);
  assert.equal(isBetterQuizScore(1, 0, 1, 2), false);
  assert.equal(isBetterQuizScore(1.5, 4, 1, 2), false);
  assert.equal(isBetterQuizScore("1", 4, 1, 2), false);

  // An unreadable existing best score is treated as no best score, so a valid
  // attempt can still repair the row.
  assert.equal(isBetterQuizScore(1, 4, "1", 2), true);
  assert.equal(isBetterQuizScore(1, 4, null, 2), true);
});

test("toCompletionPercent clamps and rounds", () => {
  assert.equal(toCompletionPercent(0, 0), 0);
  assert.equal(toCompletionPercent(5, 10), 50);
  assert.equal(toCompletionPercent(1, 3), 33);
  assert.equal(toCompletionPercent(2, 3), 67);
  assert.equal(toCompletionPercent(10, 5), 100);
  assert.equal(toCompletionPercent(99, 100), 99);
  assert.equal(toCompletionPercent(1, 200), 1);
  assert.equal(toCompletionPercent(-1, 10), 0);
  assert.equal(toCompletionPercent(3.5, 10), 0);
  assert.equal(toCompletionPercent("3", 10), 0);
});

test("mapLessonProgressRow normalizes database values", () => {
  assert.equal(mapLessonProgressRow(null), null);
  assert.equal(mapLessonProgressRow(undefined), null);

  assert.deepEqual(
    mapLessonProgressRow({
      is_completed: true,
      completed_at: "2026-10-01T10:00:00.000Z",
      best_score: 3,
      best_score_total: 4,
      updated_at: "2026-10-02T10:00:00.000Z",
    }),
    {
      isCompleted: true,
      completedAt: "2026-10-01T10:00:00.000Z",
      bestScore: 3,
      bestScoreTotal: 4,
      updatedAt: "2026-10-02T10:00:00.000Z",
    },
  );

  assert.deepEqual(
    mapLessonProgressRow({
      is_completed: "true",
      completed_at: "not-a-date",
      best_score: 9,
      best_score_total: 4,
      updated_at: null,
    }),
    {
      isCompleted: false,
      completedAt: null,
      bestScore: 4,
      bestScoreTotal: 4,
      updatedAt: null,
    },
  );

  assert.deepEqual(
    mapLessonProgressRow({
      is_completed: false,
      completed_at: null,
      best_score: -2,
      best_score_total: "4",
      updated_at: "2026-10-02T10:00:00.000Z",
    }),
    {
      isCompleted: false,
      completedAt: null,
      bestScore: 0,
      bestScoreTotal: 0,
      updatedAt: "2026-10-02T10:00:00.000Z",
    },
  );
});

const targets = [
  {
    courseSlug: "grammar-foundations",
    courseTitle: "Grammar Foundations",
    level: "A1",
    skill: "grammar",
    totalLessons: 4,
    trackable: true,
  },
  {
    courseSlug: "reading-basics",
    courseTitle: "Reading Basics",
    level: "A1",
    skill: "reading",
    totalLessons: 10,
    trackable: false,
  },
];

test("buildCourseProgressSummaries combines curriculum totals with saved rows", () => {
  const summaries = buildCourseProgressSummaries(
    targets,
    [
      {
        course_slug: "grammar-foundations",
        lessons_completed: 6,
        lessons_tracked: 4,
        last_activity_at: "2026-10-01T10:00:00.000Z",
      },
      {
        course_slug: "reading-basics",
        lessons_completed: 5,
        lessons_tracked: 10,
        last_activity_at: "2026-10-01T12:00:00.000Z",
      },
      {
        course_slug: "unknown-course",
        lessons_completed: 3,
        lessons_tracked: 3,
        last_activity_at: "2026-10-05T12:00:00.000Z",
      },
    ],
    [
      {
        course_slug: "grammar-foundations",
        attempt_count: 2,
        last_attempt_at: "2026-10-02T09:00:00.000Z",
        best_score: 3,
        best_score_total: 4,
      },
      {
        course_slug: "reading-basics",
        attempt_count: 9,
        last_attempt_at: "2026-10-06T09:00:00.000Z",
        best_score: 4,
        best_score_total: 4,
      },
    ],
  );

  assert.equal(summaries.length, 2);

  assert.deepEqual(summaries[0], {
    ...targets[0],
    lessonsCompleted: 4,
    completionPercent: 100,
    quizAttempts: 2,
    bestQuizScore: 3,
    bestQuizTotal: 4,
    lastActivityAt: "2026-10-02T09:00:00.000Z",
  });

  assert.deepEqual(summaries[1], {
    ...targets[1],
    lessonsCompleted: 0,
    completionPercent: 0,
    quizAttempts: 0,
    bestQuizScore: null,
    bestQuizTotal: null,
    lastActivityAt: null,
  });

  assert.equal(summaries[0].totalLessons, 4);
  assert.equal(summaries[1].totalLessons, 10);
});

test("buildCourseProgressSummaries handles invalid rows and empty data", () => {
  const [summary] = buildCourseProgressSummaries(
    targets.slice(0, 1),
    [
      {
        course_slug: "grammar-foundations",
        lessons_completed: -4,
        lessons_tracked: 4,
        last_activity_at: "not-a-date",
      },
    ],
    [
      {
        course_slug: "grammar-foundations",
        attempt_count: -3,
        last_attempt_at: "not-a-date",
        best_score: 5,
        best_score_total: 4,
      },
    ],
  );

  assert.equal(summary.lessonsCompleted, 0);
  assert.equal(summary.completionPercent, 0);
  assert.equal(summary.quizAttempts, 0);
  assert.equal(summary.bestQuizScore, null);
  assert.equal(summary.bestQuizTotal, null);
  assert.equal(summary.lastActivityAt, null);

  const empty = buildCourseProgressSummaries([], [], []);
  assert.deepEqual(empty, []);
});

test("buildRecentLearningActivity merges, sorts and filters activities", () => {
  const lessons = {
    "grammar-foundations:subject-pronouns": {
      courseTitle: "Grammar Foundations",
      lessonTitle: "Subject pronouns",
    },
    "grammar-foundations:to-be": {
      courseTitle: "Grammar Foundations",
      lessonTitle: "The verb to be",
    },
  };
  const resolveLesson = (courseSlug, lessonSlug) =>
    lessons[`${courseSlug}:${lessonSlug}`] ?? null;

  const activities = buildRecentLearningActivity(
    [
      {
        course_slug: "grammar-foundations",
        lesson_slug: "subject-pronouns",
        is_completed: true,
        completed_at: "2026-10-01T10:00:00.000Z",
        best_score: 3,
        best_score_total: 4,
        updated_at: "2026-10-01T10:00:00.000Z",
      },
      {
        course_slug: "grammar-foundations",
        lesson_slug: "to-be",
        is_completed: false,
        completed_at: null,
        best_score: 0,
        best_score_total: 0,
        updated_at: "2026-10-02T10:00:00.000Z",
      },
      {
        course_slug: "grammar-foundations",
        lesson_slug: "unknown",
        is_completed: true,
        completed_at: "2026-10-03T10:00:00.000Z",
        best_score: 0,
        best_score_total: 0,
        updated_at: "2026-10-03T10:00:00.000Z",
      },
    ],
    [
      {
        course_slug: "grammar-foundations",
        lesson_slug: "to-be",
        score: 4,
        total_questions: 4,
        attempted_at: "2026-10-04T10:00:00.000Z",
      },
      {
        course_slug: "grammar-foundations",
        lesson_slug: "unknown",
        score: 4,
        total_questions: 4,
        attempted_at: "2026-10-05T10:00:00.000Z",
      },
      {
        course_slug: "grammar-foundations",
        lesson_slug: "to-be",
        score: 5,
        total_questions: 4,
        attempted_at: "2026-10-06T10:00:00.000Z",
      },
      {
        course_slug: "grammar-foundations",
        lesson_slug: "to-be",
        score: 0,
        total_questions: 0,
        attempted_at: "2026-10-07T10:00:00.000Z",
      },
    ],
    resolveLesson,
  );

  assert.deepEqual(activities, [
    {
      kind: "quiz",
      courseSlug: "grammar-foundations",
      courseTitle: "Grammar Foundations",
      lessonSlug: "to-be",
      lessonTitle: "The verb to be",
      score: 4,
      total: 4,
      occurredAt: "2026-10-04T10:00:00.000Z",
    },
    {
      kind: "completion",
      courseSlug: "grammar-foundations",
      courseTitle: "Grammar Foundations",
      lessonSlug: "subject-pronouns",
      lessonTitle: "Subject pronouns",
      occurredAt: "2026-10-01T10:00:00.000Z",
    },
  ]);
});

test("buildRecentLearningActivity respects limits and empty input", () => {
  const resolveLesson = () => ({ courseTitle: "C", lessonTitle: "L" });
  const attempts = Array.from({ length: 10 }, (_, index) => ({
    course_slug: "course",
    lesson_slug: `lesson-${index}`,
    score: index,
    total_questions: 10,
    attempted_at: `2026-10-${String(index + 1).padStart(2, "0")}T00:00:00.000Z`,
  }));

  assert.equal(buildRecentLearningActivity([], attempts, resolveLesson).length, 6);
  assert.equal(buildRecentLearningActivity([], attempts, resolveLesson, 2).length, 2);
  assert.equal(buildRecentLearningActivity([], attempts, resolveLesson, 0).length, 0);
  assert.equal(
    buildRecentLearningActivity([], attempts, resolveLesson, -5).length,
    0,
  );
  assert.equal(
    buildRecentLearningActivity([], attempts, resolveLesson, Number.NaN).length,
    6,
  );
  assert.deepEqual(buildRecentLearningActivity([], [], resolveLesson), []);

  const onlyInvalid = buildRecentLearningActivity(
    [],
    [{ ...attempts[0], attempted_at: "not-a-date" }],
    resolveLesson,
  );
  assert.deepEqual(onlyInvalid, []);
});

test("formatting helpers handle valid and missing values", () => {
  assert.equal(formatBestQuizScore(3, 4), "3 / 4");
  assert.equal(formatBestQuizScore(5, 4), "4 / 4");
  assert.equal(formatBestQuizScore(0, 0), "No quiz attempts yet");
  assert.equal(formatBestQuizScore(null, 4), "No quiz attempts yet");
  assert.equal(formatBestQuizScore(1, 4), "1 / 4");

  assert.equal(
    formatCompletionDate("2026-10-25T23:30:00.000Z"),
    "October 25, 2026",
  );
  assert.equal(formatCompletionDate(null), null);
  assert.equal(formatCompletionDate("not-a-date"), null);
});

test("migrations define the required tables, keys, RLS and least-privilege grants", () => {
  const files = readdirSync(migrationsDir).filter((name) =>
    name.endsWith(".sql"),
  );
  assert.ok(files.length >= 4, "expected the four Phase 5 migrations");

  const sql = files
    .sort()
    .map((name) => readFileSync(join(migrationsDir, name), "utf8"))
    .join("\n");
  const phaseFiveSql = files
    .filter((name) => name.startsWith("20261025"))
    .sort()
    .map((name) => readFileSync(join(migrationsDir, name), "utf8"))
    .join("\n");

  assert.match(sql, /create table public\.profiles/);
  assert.match(sql, /create table public\.lesson_progress/);
  assert.match(sql, /create table public\.quiz_attempts/);
  assert.match(sql, /references auth\.users \(id\) on delete cascade/);

  assert.match(
    sql,
    /primary key \(user_id, course_slug, lesson_slug\)/,
  );
  assert.match(sql, /constraint lesson_progress_score_check/);
  assert.match(sql, /constraint quiz_attempts_score_check/);
  assert.match(sql, /score <= total_questions/);

  for (const table of ["profiles", "lesson_progress", "quiz_attempts"]) {
    assert.match(
      sql,
      new RegExp(`alter table public\\.${table} enable row level security`),
    );
  }

  assert.match(sql, /profiles_select_own/);
  assert.match(sql, /profiles_insert_own/);
  assert.match(sql, /profiles_update_own/);
  assert.match(sql, /lesson_progress_select_own/);
  assert.match(sql, /lesson_progress_insert_own/);
  assert.match(sql, /lesson_progress_update_own/);
  assert.match(sql, /quiz_attempts_select_own/);
  assert.match(sql, /quiz_attempts_insert_own/);
  assert.match(sql, /\(select auth\.uid\(\)\) = user_id/);
  assert.match(sql, /\(select auth\.uid\(\)\) = id/);
  assert.doesNotMatch(sql, /quiz_attempts_update_own/);

  assert.match(sql, /grant insert \(id, display_name\)/);
  assert.match(sql, /grant update \(display_name\)/);
  assert.match(sql, /grant update \(is_completed, completed_at\)/);
  assert.doesNotMatch(sql, /grant[^;]*best_score[^;]* to authenticated/);
  assert.doesNotMatch(
    sql,
    /^\s*grant[^;\n]*(user_id[^;\n]*update|update[^;\n]*user_id)/im,
  );

  assert.match(sql, /security_invoker = true/);
  assert.match(sql, /revoke all on function public\.mark_lesson_complete/);
  assert.match(sql, /grant execute on function public\.mark_lesson_complete\(text, text\)\s+to authenticated/);
  assert.doesNotMatch(phaseFiveSql, /service_role/i);
});

test("service-role access stays in server-only modules", () => {
  const sourceDir = join(root, "src");
  const files = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(path);
      } else if (/\.(ts|tsx|js|mjs)$/.test(entry.name)) {
        files.push(path);
      }
    }
  };
  walk(sourceDir);

  const referencing = [];
  for (const file of files) {
    const contents = readFileSync(file, "utf8");
    const relativePath = relative(root, file).replaceAll("\\", "/");
    const isClientComponent = /^\s*["']use client["'];?/m.test(
      contents.slice(0, 200),
    );

    if (isClientComponent) {
      assert.doesNotMatch(
        contents,
        /SUPABASE_SERVICE_ROLE_KEY|service_role/,
        `${relativePath} is a Client Component and must not reference the service role`,
      );
    }

    if (/SUPABASE_SERVICE_ROLE_KEY|service_role/.test(contents)) {
      referencing.push(relativePath);
    }
  }

  assert.deepEqual(referencing.sort(), [
    "src/lib/premium/config.ts",
    "src/lib/supabase/admin.ts",
  ]);
});

test("environment example contains placeholders only", () => {
  const example = readFileSync(join(root, ".env.example"), "utf8");
  assert.match(example, /NEXT_PUBLIC_SUPABASE_URL=https:\/\/your-project-ref\.supabase\.co/);
  assert.match(example, /NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key/);
  assert.doesNotMatch(example, /eyJ[a-zA-Z0-9_-]{20,}/);
  assert.doesNotMatch(example, /sb_secret_|service_role_key\s*=\s*[^\s#]/);
});
