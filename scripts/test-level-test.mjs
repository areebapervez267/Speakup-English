import test from "node:test";
import assert from "node:assert/strict";

import {
  QUESTIONS_PER_LEVEL,
  levelTestQuestions,
} from "../src/data/level-test/questions.ts";
import {
  BAND_PASS_MARK,
  LEVEL_ORDER,
  PREREQUISITE_MARK,
  gradeLevelTest,
  isLevelTestComplete,
} from "../src/lib/level-test/scoring.ts";

/**
 * Build an answer map that gets `correctCounts[level]` questions right inside
 * each band. Wrong answers are always a real distractor, never "unanswered".
 */
function buildAnswers(correctCounts) {
  const seen = {};
  const answers = {};

  for (const question of levelTestQuestions) {
    const wanted = correctCounts[question.level] ?? 0;
    const index = (seen[question.level] ?? 0) + 1;
    seen[question.level] = index;

    answers[question.id] =
      index <= wanted
        ? question.correctIndex
        : (question.correctIndex + 1) % question.options.length;
  }

  return answers;
}

function allCorrect() {
  const answers = {};

  for (const question of levelTestQuestions) {
    answers[question.id] = question.correctIndex;
  }

  return answers;
}

test("the test carries the same number of questions in every CEFR band", () => {
  assert.equal(levelTestQuestions.length, LEVEL_ORDER.length * QUESTIONS_PER_LEVEL);

  for (const level of LEVEL_ORDER) {
    const count = levelTestQuestions.filter((q) => q.level === level).length;
    assert.equal(count, QUESTIONS_PER_LEVEL, `${level} has ${count} questions`);
  }
});

test("every question is well formed", () => {
  const ids = new Set();

  for (const question of levelTestQuestions) {
    assert.ok(!ids.has(question.id), `duplicate id ${question.id}`);
    ids.add(question.id);

    assert.ok(question.prompt.includes("___"), `${question.id} has no blank`);
    assert.ok(question.options.length >= 2, `${question.id} needs options`);
    assert.equal(new Set(question.options).size, question.options.length);
    assert.ok(
      question.correctIndex >= 0 &&
        question.correctIndex < question.options.length,
      `${question.id} correctIndex out of range`,
    );
    assert.ok(question.explanation.length > 12, `${question.id} needs a reason`);
    assert.ok(LEVEL_ORDER.includes(question.level), `${question.id} bad level`);
  }
});

test("an empty attempt places the learner at A1", () => {
  const result = gradeLevelTest({}, levelTestQuestions);

  assert.equal(result.level, "a1");
  assert.equal(result.score, 0);
  assert.equal(result.percentage, 0);
  assert.equal(result.answered, 0);
  assert.equal(isLevelTestComplete({}, levelTestQuestions), false);
  assert.equal(result.bands.length, LEVEL_ORDER.length);
  assert.deepEqual(
    result.bands.map((band) => band.level),
    [...LEVEL_ORDER],
  );
});

test("a perfect attempt places the learner at C2 with no next level", () => {
  const result = gradeLevelTest(allCorrect(), levelTestQuestions);

  assert.equal(result.score, levelTestQuestions.length);
  assert.equal(result.percentage, 100);
  assert.equal(result.level, "c2");
  assert.equal(result.nextLevel, null);
  assert.equal(isLevelTestComplete(allCorrect(), levelTestQuestions), true);
});

test("placement stops at the highest band that passes", () => {
  const result = gradeLevelTest(
    buildAnswers({ a1: 4, a2: 4, b1: BAND_PASS_MARK, b2: 0, c1: 0, c2: 0 }),
    levelTestQuestions,
  );

  assert.equal(result.level, "b1");
  assert.equal(result.nextLevel, "b2");
});

test("weak basics hold you down even when harder bands look good", () => {
  const result = gradeLevelTest(
    buildAnswers({ a1: PREREQUISITE_MARK, a2: 4, b1: 4, b2: 4, c1: 4, c2: 4 }),
    levelTestQuestions,
  );

  assert.equal(result.level, "a1");
  assert.equal(result.nextLevel, "a2");
});

test("one short of the pass mark keeps you in the previous band", () => {
  const result = gradeLevelTest(
    buildAnswers({ a1: 4, a2: 4, b1: 4, b2: BAND_PASS_MARK - 1, c1: 0, c2: 0 }),
    levelTestQuestions,
  );

  assert.equal(result.level, "b1");
  assert.equal(result.nextLevel, "b2");
});

test("exactly the pass mark in every band reaches C2", () => {
  const counts = Object.fromEntries(
    LEVEL_ORDER.map((level) => [level, BAND_PASS_MARK]),
  );
  const result = gradeLevelTest(buildAnswers(counts), levelTestQuestions);

  assert.equal(result.level, "c2");
});

test("percentage is rounded from the raw score", () => {
  const counts = Object.fromEntries(
    LEVEL_ORDER.map((level) => [level, 2]),
  );
  const result = gradeLevelTest(buildAnswers(counts), levelTestQuestions);

  assert.equal(result.score, LEVEL_ORDER.length * 2);
  assert.equal(
    result.percentage,
    Math.round((result.score / levelTestQuestions.length) * 100),
  );
});

test("per-band totals add up to the whole test", () => {
  const result = gradeLevelTest(buildAnswers({ a1: 1 }), levelTestQuestions);

  assert.equal(
    result.bands.reduce((sum, band) => sum + band.total, 0),
    levelTestQuestions.length,
  );

  for (const band of result.bands) {
    assert.ok(band.correct <= band.total, `${band.level} over-counted`);
  }
});
