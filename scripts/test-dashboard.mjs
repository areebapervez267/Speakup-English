import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  buildDashboardCourses,
  buildDashboardLearningSnapshot,
  buildDashboardMetrics,
  buildDashboardQuizPerformance,
  formatDashboardDate,
  normalizeDisplayName,
  toDashboardPercent,
  toQuizPercent,
} from "../src/lib/dashboard/calculate.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function source(path) {
  return readFileSync(join(root, path), "utf8");
}

function summary(overrides = {}) {
  return {
    courseSlug: "a1-grammar",
    courseTitle: "A1 Grammar",
    level: "a1",
    skill: "grammar",
    totalLessons: 3,
    trackable: true,
    lessonsCompleted: 0,
    completionPercent: 0,
    quizAttempts: 0,
    bestQuizScore: null,
    bestQuizTotal: null,
    lastActivityAt: null,
    ...overrides,
  };
}

function progressRow(overrides = {}) {
  return {
    course_slug: "a1-grammar",
    lesson_slug: "present-simple",
    is_completed: true,
    completed_at: "2026-10-20T10:00:00.000Z",
    best_score: 0,
    best_score_total: 0,
    updated_at: "2026-10-20T10:00:00.000Z",
    ...overrides,
  };
}

const canonicalLessons = {
  "a1-grammar": [
    { slug: "present-simple", title: "Present simple", number: 1 },
    { slug: "questions", title: "Questions", number: 2 },
    { slug: "negatives", title: "Negatives", number: 3 },
  ],
  "a1-vocabulary": [
    { slug: "travel-words", title: "Travel words", number: 1 },
    { slug: "hotel-words", title: "Hotel words", number: 2 },
  ],
  "a1-reading": [
    { slug: "short-messages", title: "Short messages", number: 1 },
    { slug: "notices", title: "Notices", number: 2 },
  ],
  "a1-listening": [
    { slug: "first-listening", title: "First listening", number: 1 },
  ],
};

const populatedSummaries = [
  summary({
    lessonsCompleted: 1,
    quizAttempts: 2,
    bestQuizScore: 4,
    bestQuizTotal: 5,
    lastActivityAt: "2026-10-20T10:00:00.000Z",
  }),
  summary({
    courseSlug: "a1-vocabulary",
    courseTitle: "A1 Vocabulary",
    skill: "vocabulary",
    totalLessons: 2,
    lessonsCompleted: 2,
    completionPercent: 100,
    quizAttempts: 1,
    bestQuizScore: 3,
    bestQuizTotal: 3,
    lastActivityAt: "2026-10-22T10:00:00.000Z",
  }),
  summary({
    courseSlug: "a1-reading",
    courseTitle: "A1 Reading",
    skill: "reading",
    totalLessons: 2,
  }),
  summary({
    courseSlug: "a1-listening",
    courseTitle: "A1 Listening",
    skill: "listening",
    totalLessons: 1,
    lastActivityAt: "2026-10-21T10:00:00.000Z",
  }),
  summary({
    courseSlug: "b1-grammar",
    courseTitle: "B1 Grammar",
    level: "b1",
    totalLessons: 0,
    trackable: false,
  }),
];

const populatedProgressRows = [
  progressRow(),
  progressRow({
    course_slug: "a1-vocabulary",
    lesson_slug: "travel-words",
    completed_at: "2026-10-22T09:00:00.000Z",
  }),
  progressRow({
    course_slug: "a1-vocabulary",
    lesson_slug: "hotel-words",
    completed_at: "2026-10-22T10:00:00.000Z",
  }),
  progressRow({
    lesson_slug: "stale-lesson",
    completed_at: "2026-10-19T10:00:00.000Z",
  }),
  progressRow({
    course_slug: "retired-course",
    lesson_slug: "old-lesson",
  }),
  progressRow({
    course_slug: "a1-listening",
    lesson_slug: "first-listening",
    is_completed: false,
    completed_at: null,
  }),
];

const quizCatalog = {
  "a1-grammar": {
    "present-simple": {
      courseTitle: "A1 Grammar",
      lessonTitle: "Present simple",
    },
    questions: { courseTitle: "A1 Grammar", lessonTitle: "Questions" },
  },
  "a1-vocabulary": {
    "travel-words": {
      courseTitle: "A1 Vocabulary",
      lessonTitle: "Travel words",
    },
  },
};

function resolveQuizLesson(courseSlug, lessonSlug) {
  return quizCatalog[courseSlug]?.[lessonSlug] ?? null;
}

test("percent helpers round, clamp and reject invalid values", () => {
  assert.equal(toDashboardPercent(1, 3), 33);
  assert.equal(toDashboardPercent(2, 3), 67);
  assert.equal(toDashboardPercent(3, 3), 100);
  assert.equal(toDashboardPercent(0, 3), 0);
  assert.equal(toDashboardPercent(5, 3), 100);
  assert.equal(toDashboardPercent(0, 0), 0);

  for (const [completed, total] of [
    [Number.NaN, 3],
    [1.5, 3],
    [-1, 3],
    [1, -3],
    [1, 0],
    ["1", 3],
    [null, undefined],
  ]) {
    assert.equal(
      toDashboardPercent(completed, total),
      0,
      `expected 0% for ${String(completed)}/${String(total)}`,
    );
  }

  assert.equal(toQuizPercent(4, 5), 80);
  assert.equal(toQuizPercent(2, 3), 67);
  assert.equal(toQuizPercent(6, 5), 100);
});

test("buildDashboardMetrics uses only interactive courses and canonical totals", () => {
  assert.deepEqual(buildDashboardMetrics(populatedSummaries), {
    lessonsCompleted: 3,
    startedCourses: 3,
    overallCompletionPercent: 38,
    totalQuizAttempts: 3,
    totalInteractiveLessons: 8,
    interactiveCourseCount: 4,
  });

  assert.deepEqual(buildDashboardMetrics([]), {
    lessonsCompleted: 0,
    startedCourses: 0,
    overallCompletionPercent: 0,
    totalQuizAttempts: 0,
    totalInteractiveLessons: 0,
    interactiveCourseCount: 0,
  });

  assert.deepEqual(
    buildDashboardMetrics([
      summary({ courseSlug: "b1-grammar", totalLessons: 0, trackable: false }),
    ]),
    {
      lessonsCompleted: 0,
      startedCourses: 0,
      overallCompletionPercent: 0,
      totalQuizAttempts: 0,
      totalInteractiveLessons: 0,
      interactiveCourseCount: 0,
    },
  );
});

test("buildDashboardMetrics clamps completions and ignores invalid counters", () => {
  const metrics = buildDashboardMetrics([
    summary({
      lessonsCompleted: 99,
      quizAttempts: 2,
      lastActivityAt: "2026-10-20T10:00:00.000Z",
    }),
    summary({
      courseSlug: "a1-reading",
      totalLessons: 2,
      lessonsCompleted: Number.NaN,
      quizAttempts: Number.NaN,
      lastActivityAt: "not-a-date",
    }),
    summary({
      courseSlug: "a1-listening",
      totalLessons: 1,
      lessonsCompleted: -1,
      quizAttempts: 1.5,
    }),
  ]);

  assert.equal(metrics.lessonsCompleted, 3);
  assert.equal(metrics.startedCourses, 1);
  assert.equal(metrics.totalQuizAttempts, 2);
  assert.equal(metrics.totalInteractiveLessons, 6);
  assert.equal(metrics.overallCompletionPercent, 50);
});

test("buildDashboardMetrics counts quiz-only and activity-only starts", () => {
  const metrics = buildDashboardMetrics([
    summary({
      lessonsCompleted: 0,
      quizAttempts: 1,
      lastActivityAt: null,
    }),
    summary({
      courseSlug: "a1-reading",
      totalLessons: 2,
      lessonsCompleted: 0,
      quizAttempts: 0,
      lastActivityAt: "2026-10-21T10:00:00.000Z",
    }),
    summary({
      courseSlug: "a1-listening",
      totalLessons: 1,
      lessonsCompleted: 0,
      quizAttempts: 0,
      lastActivityAt: "not-a-date",
    }),
  ]);

  assert.equal(metrics.startedCourses, 2);
});

test("buildDashboardCourses returns started courses with canonical next lessons", () => {
  const courses = buildDashboardCourses({
    summaries: populatedSummaries,
    progressRows: populatedProgressRows,
    canonicalLessons,
  });

  assert.deepEqual(
    courses.map((course) => course.courseSlug),
    ["a1-vocabulary", "a1-listening", "a1-grammar"],
  );

  const vocabulary = courses.find(
    (course) => course.courseSlug === "a1-vocabulary",
  );
  assert.deepEqual(
    {
      lessonsCompleted: vocabulary.lessonsCompleted,
      totalLessons: vocabulary.totalLessons,
      completionPercent: vocabulary.completionPercent,
      isComplete: vocabulary.isComplete,
      nextLesson: vocabulary.nextLesson,
      quizAttempts: vocabulary.quizAttempts,
      bestQuizScore: vocabulary.bestQuizScore,
      bestQuizTotal: vocabulary.bestQuizTotal,
    },
    {
      lessonsCompleted: 2,
      totalLessons: 2,
      completionPercent: 100,
      isComplete: true,
      nextLesson: null,
      quizAttempts: 1,
      bestQuizScore: 3,
      bestQuizTotal: 3,
    },
  );

  const listening = courses.find(
    (course) => course.courseSlug === "a1-listening",
  );
  assert.equal(listening.lessonsCompleted, 0);
  assert.equal(listening.completionPercent, 0);
  assert.equal(listening.isComplete, false);
  assert.deepEqual(listening.nextLesson, {
    lessonSlug: "first-listening",
    lessonTitle: "First listening",
    lessonNumber: 1,
  });

  const grammar = courses.find((course) => course.courseSlug === "a1-grammar");
  assert.equal(grammar.lessonsCompleted, 1);
  assert.equal(grammar.totalLessons, 3);
  assert.equal(grammar.completionPercent, 33);
  assert.equal(grammar.isComplete, false);
  assert.deepEqual(grammar.nextLesson, {
    lessonSlug: "questions",
    lessonTitle: "Questions",
    lessonNumber: 2,
  });
  assert.equal(grammar.lastActivityAt, "2026-10-20T10:00:00.000Z");

  assert.equal(
    courses.some((course) => course.courseSlug === "a1-reading"),
    false,
  );
  assert.equal(
    courses.some((course) => course.courseSlug === "b1-grammar"),
    false,
  );
});

test("buildDashboardCourses clips stored completions to the curriculum", () => {
  const courses = buildDashboardCourses({
    summaries: [
      summary({
        lessonsCompleted: 99,
        lastActivityAt: "2026-10-20T10:00:00.000Z",
      }),
    ],
    progressRows: [progressRow()],
    canonicalLessons,
  });

  assert.equal(courses[0].lessonsCompleted, 3);
  assert.equal(courses[0].totalLessons, 3);
  assert.equal(courses[0].completionPercent, 100);
  assert.equal(courses[0].isComplete, true);
  assert.equal(courses[0].nextLesson, null);
});

test("buildDashboardCourses ignores stale progress slugs when choosing the next lesson", () => {
  const courses = buildDashboardCourses({
    summaries: [
      summary({
        lessonsCompleted: 1,
        lastActivityAt: "2026-10-20T10:00:00.000Z",
      }),
    ],
    progressRows: [progressRow({ lesson_slug: "removed-lesson" })],
    canonicalLessons,
  });

  assert.equal(courses[0].lessonsCompleted, 1);
  assert.deepEqual(courses[0].nextLesson, {
    lessonSlug: "present-simple",
    lessonTitle: "Present simple",
    lessonNumber: 1,
  });
});

test("buildDashboardCourses falls back safely for malformed summaries", () => {
  const courses = buildDashboardCourses({
    summaries: [
      summary({
        lastActivityAt: "2026-10-20T10:00:00.000Z",
        bestQuizScore: 5,
        bestQuizTotal: 4,
      }),
      summary({
        courseSlug: "a1-vocabulary",
        totalLessons: 2,
        lessonsCompleted: 1,
        lastActivityAt: "not-a-date",
        bestQuizScore: 0,
        bestQuizTotal: 0,
      }),
    ],
    progressRows: [],
    canonicalLessons: {
      "a1-grammar": [],
      "a1-vocabulary": [],
    },
  });

  assert.equal(courses.length, 2);
  assert.equal(courses[0].courseSlug, "a1-grammar");
  assert.equal(courses[0].totalLessons, 3);
  assert.equal(courses[0].nextLesson, null);
  assert.equal(courses[0].isComplete, false);
  assert.equal(courses[0].bestQuizScore, null);
  assert.equal(courses[0].bestQuizTotal, null);
  assert.equal(courses[1].lastActivityAt, null);
  assert.equal(courses[1].bestQuizScore, null);
  assert.equal(courses[1].bestQuizTotal, null);
});

test("buildDashboardLearningSnapshot picks the latest incomplete course", () => {
  const snapshot = buildDashboardLearningSnapshot({
    summaries: populatedSummaries,
    progressRows: populatedProgressRows,
    canonicalLessons,
  });

  assert.equal(snapshot.metrics.lessonsCompleted, 3);
  assert.deepEqual(snapshot.continueTarget, {
    kind: "continue",
    courseSlug: "a1-listening",
    courseTitle: "A1 Listening",
    lessonSlug: "first-listening",
    lessonTitle: "First listening",
    lessonNumber: 1,
  });
});

test("buildDashboardLearningSnapshot falls back to an unstarted course", () => {
  const snapshot = buildDashboardLearningSnapshot({
    summaries: [
      summary({
        lessonsCompleted: 3,
        lastActivityAt: "2026-10-20T10:00:00.000Z",
      }),
      summary({
        courseSlug: "a1-reading",
        courseTitle: "A1 Reading",
        skill: "reading",
        totalLessons: 2,
      }),
    ],
    progressRows: [
      progressRow({ lesson_slug: "present-simple" }),
      progressRow({ lesson_slug: "questions" }),
      progressRow({ lesson_slug: "negatives" }),
    ],
    canonicalLessons,
  });

  assert.equal(snapshot.courses.length, 1);
  assert.deepEqual(snapshot.continueTarget, {
    kind: "start",
    courseSlug: "a1-reading",
    courseTitle: "A1 Reading",
    lessonSlug: "short-messages",
    lessonTitle: "Short messages",
    lessonNumber: 1,
  });
});

test("buildDashboardLearningSnapshot handles empty and outline-only data", () => {
  assert.deepEqual(
    buildDashboardLearningSnapshot({
      summaries: [],
      progressRows: [],
      canonicalLessons: {},
    }),
    {
      metrics: {
        lessonsCompleted: 0,
        startedCourses: 0,
        overallCompletionPercent: 0,
        totalQuizAttempts: 0,
        totalInteractiveLessons: 0,
        interactiveCourseCount: 0,
      },
      courses: [],
      continueTarget: null,
    },
  );

  const outlineOnly = buildDashboardLearningSnapshot({
    summaries: [
      summary({
        courseSlug: "b1-grammar",
        courseTitle: "B1 Grammar",
        totalLessons: 0,
        trackable: false,
        lastActivityAt: "2026-10-20T10:00:00.000Z",
      }),
    ],
    progressRows: [progressRow({ course_slug: "b1-grammar" })],
    canonicalLessons: {},
  });

  assert.equal(outlineOnly.courses.length, 0);
  assert.equal(outlineOnly.continueTarget, null);
  assert.equal(outlineOnly.metrics.interactiveCourseCount, 0);
});

test("buildDashboardLearningSnapshot skips courses without an openable lesson", () => {
  const snapshot = buildDashboardLearningSnapshot({
    summaries: [
      summary({
        totalLessons: 2,
        lessonsCompleted: 0,
        lastActivityAt: "2026-10-20T10:00:00.000Z",
      }),
    ],
    progressRows: [],
    canonicalLessons: { "a1-grammar": [] },
  });

  assert.equal(snapshot.courses.length, 1);
  assert.equal(snapshot.courses[0].nextLesson, null);
  assert.equal(snapshot.continueTarget, null);
});

test("buildDashboardQuizPerformance sorts, validates and limits attempts", () => {
  const attempts = [
    {
      course_slug: "a1-grammar",
      lesson_slug: "present-simple",
      score: 4,
      total_questions: 5,
      attempted_at: "2026-10-21T10:00:00.000Z",
    },
    {
      course_slug: "a1-grammar",
      lesson_slug: "questions",
      score: 2,
      total_questions: 3,
      attempted_at: "2026-10-22T10:00:00.000Z",
    },
    {
      course_slug: "a1-grammar",
      lesson_slug: "questions",
      score: 9,
      total_questions: 3,
      attempted_at: "2026-10-23T10:00:00.000Z",
    },
    {
      course_slug: "a1-grammar",
      lesson_slug: "questions",
      score: 0,
      total_questions: 0,
      attempted_at: "2026-10-24T10:00:00.000Z",
    },
    {
      course_slug: "a1-grammar",
      lesson_slug: "questions",
      score: 1,
      total_questions: 3,
      attempted_at: "not-a-date",
    },
    {
      course_slug: "a1-grammar",
      lesson_slug: "removed-lesson",
      score: 1,
      total_questions: 3,
      attempted_at: "2026-10-25T10:00:00.000Z",
    },
    {
      course_slug: "",
      lesson_slug: "questions",
      score: 1,
      total_questions: 3,
      attempted_at: "2026-10-26T10:00:00.000Z",
    },
  ];

  const results = buildDashboardQuizPerformance({
    attempts,
    resolveLesson: resolveQuizLesson,
  });

  assert.deepEqual(results, [
    {
      courseSlug: "a1-grammar",
      courseTitle: "A1 Grammar",
      lessonSlug: "questions",
      lessonTitle: "Questions",
      score: 2,
      total: 3,
      percent: 67,
      attemptedAt: "2026-10-22T10:00:00.000Z",
    },
    {
      courseSlug: "a1-grammar",
      courseTitle: "A1 Grammar",
      lessonSlug: "present-simple",
      lessonTitle: "Present simple",
      score: 4,
      total: 5,
      percent: 80,
      attemptedAt: "2026-10-21T10:00:00.000Z",
    },
  ]);
});

test("buildDashboardQuizPerformance respects its limit", () => {
  const attempts = Array.from({ length: 8 }, (_, index) => ({
    course_slug: "a1-grammar",
    lesson_slug: "present-simple",
    score: index,
    total_questions: 10,
    attempted_at: new Date(Date.UTC(2026, 9, index + 1)).toISOString(),
  }));

  assert.equal(
    buildDashboardQuizPerformance({ attempts, resolveLesson: resolveQuizLesson })
      .length,
    6,
  );

  const two = buildDashboardQuizPerformance(
    { attempts, resolveLesson: resolveQuizLesson },
    2,
  );
  assert.equal(two.length, 2);
  assert.equal(two[0].attemptedAt, "2026-10-08T00:00:00.000Z");
  assert.equal(two[0].percent, 70);
  assert.equal(
    buildDashboardQuizPerformance(
      { attempts, resolveLesson: resolveQuizLesson },
      0,
    ).length,
    0,
  );
  assert.equal(
    buildDashboardQuizPerformance(
      { attempts, resolveLesson: resolveQuizLesson },
      Number.NaN,
    ).length,
    6,
  );
});

test("normalizeDisplayName trims, collapses and caps names", () => {
  assert.equal(normalizeDisplayName("  Ana   María  "), "Ana María");
  assert.equal(normalizeDisplayName("\n\tLiam \r\n Chen\t"), "Liam Chen");
  assert.equal(normalizeDisplayName(""), null);
  assert.equal(normalizeDisplayName("   "), null);
  assert.equal(normalizeDisplayName(null), null);
  assert.equal(normalizeDisplayName(42), null);

  const longName = "a".repeat(100);
  assert.equal(normalizeDisplayName(longName).length, 80);
  assert.equal(Array.from(normalizeDisplayName("😀".repeat(90))).length, 80);
});

test("formatDashboardDate formats saved UTC dates and rejects invalid input", () => {
  assert.equal(formatDashboardDate("2026-10-05T23:30:00.000Z"), "Oct 5, 2026");
  assert.equal(formatDashboardDate("2026-01-01T00:00:00.000Z"), "Jan 1, 2026");
  assert.equal(formatDashboardDate(""), null);
  assert.equal(formatDashboardDate("not-a-date"), null);
  assert.equal(formatDashboardDate(null), null);
  assert.equal(formatDashboardDate(undefined), null);
});

test("dashboard route verifies the session on the server", () => {
  const page = source("src/app/dashboard/page.tsx");

  assert.match(page, /await cookies\(\)/);
  assert.match(page, /isSupabaseConfigured/);
  assert.match(page, /redirect\("\/login\?next=\/dashboard"\)/);
  assert.match(page, /supabase\.auth\.getUser\(\)/);
  assert.doesNotMatch(page, /\.auth\.getSession\(/);
  assert.match(page, /redirect\("\/login\?next=\/dashboard&error=session"\)/);
  assert.match(page, /fetchDashboardData\(\s*supabase,\s*user\.id,/);
  assert.match(page, /DashboardProblem/);
  assert.match(page, /Suspense/);
});

test("dashboard queries are scoped to the authenticated student", () => {
  const queries = source("src/lib/dashboard/queries.ts");

  assert.match(
    queries,
    /from\("lesson_progress"\)[\s\S]*?\.eq\("user_id", userId\)/,
  );
  assert.match(
    queries,
    /from\("quiz_attempts"\)[\s\S]*?\.eq\("user_id", userId\)/,
  );
  assert.match(
    queries,
    /from\("profiles"\)[\s\S]*?\.eq\("id", userId\)/,
  );
  assert.match(queries, /fetchCourseProgressSummaries\(supabase, userId\)/);
  assert.match(queries, /buildRecentLearningActivity\(/);
  assert.doesNotMatch(queries, /\.select\("\*"\)/);
  assert.doesNotMatch(queries, /service[_-]?role/i);
});

test("proxy protects dashboard routes and preserves the next path", () => {
  const proxy = source("src/lib/supabase/proxy.ts");

  assert.match(proxy, /pathname === "\/dashboard"/);
  assert.match(proxy, /pathname\.startsWith\("\/dashboard\/"\)/);
  assert.match(proxy, /redirectUrl\.pathname = "\/login"/);
  assert.match(proxy, /redirectUrl\.searchParams\.set\("next", pathname\)/);
  assert.match(proxy, /pathname === "\/account"/);
  assert.match(proxy, /pathname === "\/reset-password"/);
});

test("dashboard page and data layer do not reference privileged keys", () => {
  for (const path of [
    "src/app/dashboard/page.tsx",
    "src/lib/dashboard/queries.ts",
    "src/lib/supabase/proxy.ts",
    "src/components/dashboard/dashboard-view.tsx",
  ]) {
    const contents = source(path);
    assert.doesNotMatch(contents, /service[_-]?role/i, path);
    assert.doesNotMatch(contents, /SUPABASE_SERVICE/i, path);
    assert.doesNotMatch(contents, /SUPABASE_SECRET/i, path);
  }
});

test("dashboard navigation is available in desktop and mobile menus", () => {
  assert.match(source("src/components/auth/auth-nav.tsx"), /href="\/dashboard"/);
  assert.match(
    source("src/components/auth/mobile-auth-menu.tsx"),
    /href="\/dashboard"/,
  );
  assert.match(
    source("src/components/auth/sign-out-form.tsx"),
    /variant === "dashboard"/,
  );
});

test("dashboard UI includes metrics, courses, quiz, activity and empty states", () => {
  const view = source("src/components/dashboard/dashboard-view.tsx");

  for (const label of [
    "Learning overview",
    "My courses",
    "Quiz performance",
    "Recent activity",
    "Lessons completed",
    "Courses started",
    "Overall completion",
    "Quiz attempts",
    "No started courses yet",
    "No quiz attempts yet",
    "No saved activity yet",
    "Outline-only",
    "Continue learning",
    "Review course",
  ]) {
    assert.match(view, new RegExp(label), label);
  }

  assert.match(view, /role="progressbar"/);
  assert.match(view, /aria-valuenow=/);
  assert.match(view, /aria-valuetext=/);
  assert.match(view, /focus-visible:ring-2/);
});
