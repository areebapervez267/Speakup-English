import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { register } from "node:module";

register("./alias-loader.mjs", import.meta.url);

const { courses } = await import("../src/data/courses.ts");
const {
  getAuthoredCourse,
  getAuthoredCourseSlugs,
  getLessonEntries,
} = await import("../src/data/lessons/index.ts");
const { courseOutlines } = await import("../src/data/outlines/index.ts");
const { toPublicQuizQuestions } = await import(
  "../src/lib/admin/validation.ts"
);
const {
  AUTHORED_COURSES,
  loadAuthoredQuizKeys,
} = await import("./lib/authored-quiz-keys.mjs");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const migrationPath = join(
  root,
  "supabase",
  "migrations",
  "20261125120000_add_c1_c2_static_learning.sql",
);
const migration = readFileSync(migrationPath, "utf8");
const advancedCourses = courses.filter(
  (course) => course.level === "c1" || course.level === "c2",
);
const advancedKeys = (await loadAuthoredQuizKeys()).filter(
  (row) => row.level === "c1" || row.level === "c2",
);

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function slice(contents, start, end) {
  const startIndex = contents.indexOf(start);
  assert.notEqual(startIndex, -1, `missing migration marker: ${start}`);
  const endIndex = end
    ? contents.indexOf(end, startIndex + start.length)
    : -1;
  return endIndex === -1
    ? contents.slice(startIndex)
    : contents.slice(startIndex, endIndex);
}

const policyBlock = slice(
  migration,
  "insert into public.certificate_course_policies",
  "insert into public.certificate_course_lessons",
);
const lessonBlock = slice(
  migration,
  "insert into public.certificate_course_lessons",
  "insert into public.static_quiz_answer_keys",
);
const keyBlock = slice(migration, "insert into public.static_quiz_answer_keys");

const policies = [...policyBlock.matchAll(
  /\('([^']+)', '([^']+)', '(c1|c2)', (true|false), (\d+)\)/g,
)].map((match) => ({
  courseSlug: match[1],
  title: match[2],
  level: match[3],
  premium: match[4] === "true",
  minimum: Number(match[5]),
}));

const certificateLessons = [...lessonBlock.matchAll(
  /\('([^']+)', '([^']+)', (true|false)\)/g,
)].map((match) => ({
  courseSlug: match[1],
  lessonSlug: match[2],
  requiresQuiz: match[3] === "true",
}));

const seededKeys = [...keyBlock.matchAll(
  /^ {2}\('([^']+)', '([^']+)', '(\[.*?\])'::jsonb\)(?: on conflict[^;]+)?[;,]?$/gm,
)].map((match) => ({
  courseSlug: match[1],
  lessonSlug: match[2],
  questions: JSON.parse(match[3]),
}));

test("all fourteen C1/C2 courses are registered as fully authored", () => {
  assert.equal(advancedCourses.length, 14);
  assert.deepEqual(
    getAuthoredCourseSlugs().sort(),
    Object.keys(AUTHORED_COURSES).sort(),
  );

  for (const course of advancedCourses) {
    const authored = getAuthoredCourse(course.slug);
    assert.ok(authored, `${course.slug} is missing from the registry`);
    assert.equal(course.premium, true);
    assert.ok(authored.overview.length > 80);
    assert.equal(authored.outcomes.length, 4);
    assert.equal(authored.units.length, 4);
  }
});

test("every C1/C2 lesson matches its outline and has complete interactive work", () => {
  let lessonTotal = 0;
  let quizTotal = 0;
  let exerciseTotal = 0;
  let practiceTotal = 0;
  const summaries = new Set();
  const objectives = new Set();
  const quizItems = new Set();

  for (const course of advancedCourses) {
    const authored = getAuthoredCourse(course.slug);
    const outline = courseOutlines[course.slug];
    const entries = getLessonEntries(course.slug);
    const slugs = new Set();

    assert.equal(entries.length, course.lessons, `${course.slug} lesson count`);
    assert.equal(authored.units.length, outline.units.length);

    authored.units.forEach((unit, unitIndex) => {
      assert.equal(unit.title, outline.units[unitIndex].title);
      assert.ok(unit.description.length > 30);
      assert.equal(
        unit.lessons.length,
        outline.units[unitIndex].lessons.length,
        `${course.slug} unit ${unitIndex + 1} count`,
      );
    });

    entries.forEach((entry, index) => {
      const { lesson, unitIndex, lessonIndex, number } = entry;
      const expectedTitle = outline.units[unitIndex].lessons[lessonIndex];
      const key = `${course.slug}/${lesson.slug}`;

      assert.equal(number, index + 1);
      assert.equal(lesson.title, expectedTitle, `${key} title`);
      assert.equal(lesson.slug, slugify(expectedTitle), `${key} slug`);
      assert.equal(slugs.has(lesson.slug), false, `${key} duplicate slug`);
      slugs.add(lesson.slug);
      assert.ok(lesson.summary.length > 50, `${key} summary`);
      assert.ok(lesson.objective.length > 40, `${key} objective`);
      assert.equal(summaries.has(lesson.summary), false, `${key} duplicate summary`);
      assert.equal(objectives.has(lesson.objective), false, `${key} duplicate objective`);
      summaries.add(lesson.summary);
      objectives.add(lesson.objective);
      assert.ok(lesson.minutes >= 25 && lesson.minutes <= 38, `${key} minutes`);
      assert.ok(lesson.blocks.length >= 4, `${key} blocks`);

      const exercises = lesson.blocks.filter((block) => block.type === "exercise");
      const practices = lesson.blocks.filter((block) => block.type === "practice");
      assert.equal(exercises.length, 1, `${key} exercise block`);
      assert.equal(practices.length, 1, `${key} practice block`);
      assert.equal(exercises[0].items.length, 4, `${key} exercise items`);
      assert.equal(practices[0].items.length, 3, `${key} practice items`);

      for (const item of exercises[0].items) {
        assert.ok(item.prompt.length > 10, `${key} exercise prompt`);
        assert.equal(item.options.length, 3, `${key} exercise options`);
        assert.ok(
          Number.isInteger(item.correctIndex) &&
            item.correctIndex >= 0 &&
            item.correctIndex < item.options.length,
          `${key} exercise answer`,
        );
        assert.ok(item.explanation.length > 20, `${key} exercise explanation`);
      }

      for (const item of practices[0].items) {
        assert.ok(item.prompt.length > 10, `${key} practice prompt`);
        assert.ok(item.answer.length > 5, `${key} practice answer`);
      }

      assert.equal(lesson.quiz.length, 4, `${key} quiz questions`);
      assert.equal(
        new Set(lesson.quiz.map((question) => question.id)).size,
        4,
        `${key} duplicate quiz id`,
      );
      assert.ok(
        new Set(lesson.quiz.map((question) => question.correctIndex)).size >= 2,
        `${key} should vary the correct option positions`,
      );

      for (const question of lesson.quiz) {
        assert.ok(question.question.length > 10, `${key} quiz prompt`);
        const quizItem = `${question.question}\n${JSON.stringify(question.options)}`;
        assert.equal(quizItems.has(quizItem), false, `${key} duplicate quiz item`);
        quizItems.add(quizItem);
        assert.equal(question.options.length, 3, `${key} quiz options`);
        assert.ok(
          Number.isInteger(question.correctIndex) &&
            question.correctIndex >= 0 &&
            question.correctIndex < question.options.length,
          `${key} quiz answer`,
        );
        assert.ok(question.explanation.length > 20, `${key} quiz explanation`);
        const publicQuestion = toPublicQuizQuestions([question])[0];
        assert.deepEqual(Object.keys(publicQuestion).sort(), [
          "id",
          "options",
          "question",
        ]);
      }

      const serialized = JSON.stringify(lesson);
      assert.doesNotMatch(
        serialized,
        /TODO|TBD|lorem ipsum|coming soon|placeholder/i,
        `${key} contains unfinished copy`,
      );

      lessonTotal += 1;
      quizTotal += lesson.quiz.length;
      exerciseTotal += exercises[0].items.length;
      practiceTotal += practices[0].items.length;
    });
  }

  assert.equal(lessonTotal, 240);
  assert.equal(quizTotal, 960);
  assert.equal(exerciseTotal, 960);
  assert.equal(practiceTotal, 720);
});

test("each advanced skill lesson includes its intended rich content", () => {
  for (const course of advancedCourses) {
    for (const { lesson } of getLessonEntries(course.slug)) {
      const key = `${course.slug}/${lesson.slug}`;
      const blocks = lesson.blocks;

      if (course.skill === "grammar") {
        assert.ok(
          blocks.some((block) => block.type === "rules" || block.type === "examples"),
          `${key} needs a grammar explanation block`,
        );
      }

      if (course.skill === "listening") {
        const transcript = blocks.find((block) => block.type === "transcript");
        assert.ok(transcript && transcript.lines.length >= 6, `${key} transcript`);
      }

      if (course.skill === "speaking") {
        const dialogue = blocks.find((block) => block.type === "dialogue");
        assert.ok(dialogue && dialogue.lines.length >= 6, `${key} dialogue`);
      }

      if (course.skill === "pronunciation") {
        const sound = blocks.find((block) => block.type === "sound");
        assert.ok(sound && sound.words.length >= 4, `${key} sound practice`);
      }

      if (course.skill === "vocabulary") {
        const wordbank = blocks.find((block) => block.type === "wordbank");
        assert.ok(wordbank && wordbank.words.length >= 6, `${key} wordbank`);
      }

      if (course.skill === "reading") {
        const passage = blocks.find((block) => block.type === "passage");
        assert.ok(passage && passage.paragraphs.length >= 3, `${key} passage`);
      }

      if (course.skill === "writing") {
        assert.ok(
          blocks.some((block) =>
            ["examples", "table", "text"].includes(block.type),
          ),
          `${key} needs a model writing block`,
        );
      }
    }
  }
});

test("the additive migration seeds every advanced quiz key exactly", () => {
  assert.equal(advancedKeys.length, 240);
  assert.equal(
    advancedKeys.reduce((total, row) => total + row.questions.length, 0),
    960,
  );
  assert.equal(seededKeys.length, advancedKeys.length);

  const expected = new Map(
    advancedKeys.map((row) => [
      `${row.courseSlug}/${row.lessonSlug}`,
      row.questions,
    ]),
  );

  for (const row of seededKeys) {
    const key = `${row.courseSlug}/${row.lessonSlug}`;
    assert.ok(expected.has(key), `unexpected advanced quiz key: ${key}`);
    assert.deepEqual(row.questions, expected.get(key), `answer-key drift: ${key}`);
  }
});

test("the additive migration enables completion and certificates for all advanced lessons", () => {
  assert.equal(policies.length, 14);
  assert.equal(certificateLessons.length, 240);
  assert.deepEqual(
    policies.map((policy) => policy.courseSlug).sort(),
    advancedCourses.map((course) => course.slug).sort(),
  );

  for (const course of advancedCourses) {
    const policy = policies.find((item) => item.courseSlug === course.slug);
    assert.equal(policy.title, course.title);
    assert.equal(policy.level, course.level);
    assert.equal(policy.premium, true);
    assert.equal(policy.minimum, 60);

    const rows = certificateLessons.filter(
      (item) => item.courseSlug === course.slug,
    );
    assert.deepEqual(
      rows.map((row) => row.lessonSlug).sort(),
      getLessonEntries(course.slug)
        .map((entry) => entry.lesson.slug)
        .sort(),
      `${course.slug} certificate lesson list`,
    );
    assert.ok(rows.every((row) => row.requiresQuiz));
  }
});

test("the advanced migration is additive and grants no new client access", () => {
  assert.doesNotMatch(migration, /\b(create|alter|drop|truncate)\b/i);
  assert.doesNotMatch(migration, /\b(grant|revoke)\b/i);
  assert.doesNotMatch(migration, /service_role|SUPABASE_SERVICE_ROLE/i);
  assert.match(migration, /on conflict \(course_slug, lesson_slug\) do update/i);
  assert.match(migration, /on conflict \(course_slug\) do update/i);
});

test("authored answer keys stay out of Client Components", () => {
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

  for (const file of files) {
    const contents = readFileSync(file, "utf8");
    const isClientComponent = /^\s*["']use client["'];?/m.test(
      contents.slice(0, 300),
    );

    if (!isClientComponent) continue;

    assert.doesNotMatch(
      contents,
      /from\s+["']@\/data\/lessons["']/,
      `${file} must not import the authored lesson registry into the browser`,
    );
    assert.doesNotMatch(
      contents,
      /from\s+["']@\/data\/lessons\/(?:a1|c1|c2)-/,
      `${file} must not import authored answer keys into the browser`,
    );
  }
});
