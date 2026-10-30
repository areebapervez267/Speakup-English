import type { CefrLevelId } from "@/data/curriculum";
import type { LevelTestQuestion } from "@/data/level-test/questions";

/**
 * Placement scoring for the free level test.
 *
 * Deliberately a pure module: it imports only types, so it can be unit-tested
 * with `node --test` and reused by any client without a server round-trip. No
 * answer ever leaves the browser.
 */

/**
 * CEFR bands in teaching order. Kept here (rather than imported from the
 * curriculum) so this module has no runtime dependencies.
 */
export const LEVEL_ORDER = [
  "a1",
  "a2",
  "b1",
  "b2",
  "c1",
  "c2",
] as const satisfies readonly CefrLevelId[];

/** Correct answers needed inside a band to be placed there. */
export const BAND_PASS_MARK = 3;

/**
 * Correct answers needed in every band *below* the one being considered.
 * A learner who misses the basics cannot be placed above them, even if they
 * guess their way through harder items — an over-levelled student quits.
 */
export const PREREQUISITE_MARK = 2;

export type LevelTestAnswers = Record<string, number>;

export type BandScore = {
  level: CefrLevelId;
  correct: number;
  total: number;
};

export type LevelTestResult = {
  /** Total correct answers across every band. */
  score: number;
  /** Number of questions in the test. */
  total: number;
  /** 0–100, rounded. */
  percentage: number;
  /** How many questions the learner actually answered. */
  answered: number;
  /** Per-band breakdown, always in LEVEL_ORDER. */
  bands: BandScore[];
  /** The band to enrol in. */
  level: CefrLevelId;
  /** The band to aim at next, or null at C2. */
  nextLevel: CefrLevelId | null;
};

function bandTotals(
  questions: readonly LevelTestQuestion[],
): Map<CefrLevelId, number> {
  const totals = new Map<CefrLevelId, number>();

  for (const level of LEVEL_ORDER) {
    totals.set(level, 0);
  }

  for (const question of questions) {
    totals.set(question.level, (totals.get(question.level) ?? 0) + 1);
  }

  return totals;
}

export function countAnswered(
  answers: LevelTestAnswers,
  questions: readonly LevelTestQuestion[],
): number {
  return questions.filter((question) => answers[question.id] !== undefined)
    .length;
}

export function isLevelTestComplete(
  answers: LevelTestAnswers,
  questions: readonly LevelTestQuestion[],
): boolean {
  return countAnswered(answers, questions) === questions.length;
}

export function gradeLevelTest(
  answers: LevelTestAnswers,
  questions: readonly LevelTestQuestion[],
): LevelTestResult {
  const totals = bandTotals(questions);
  const correctByBand = new Map<CefrLevelId, number>();

  for (const level of LEVEL_ORDER) {
    correctByBand.set(level, 0);
  }

  let score = 0;

  for (const question of questions) {
    const selected = answers[question.id];

    if (selected === question.correctIndex) {
      score += 1;
      correctByBand.set(
        question.level,
        (correctByBand.get(question.level) ?? 0) + 1,
      );
    }
  }

  const bands: BandScore[] = LEVEL_ORDER.map((level) => ({
    level,
    correct: correctByBand.get(level) ?? 0,
    total: totals.get(level) ?? 0,
  }));

  // Walk up the bands and stop at the first gap.
  let placedIndex = 0;

  for (let index = 0; index < bands.length; index += 1) {
    const band = bands[index];
    const passedBand = band.correct >= BAND_PASS_MARK;
    const solidBelow = bands
      .slice(0, index)
      .every((lower) => lower.correct >= PREREQUISITE_MARK);

    if (passedBand && solidBelow) {
      placedIndex = index;
      continue;
    }

    break;
  }

  const level = LEVEL_ORDER[placedIndex];
  const nextLevel =
    placedIndex < LEVEL_ORDER.length - 1
      ? LEVEL_ORDER[placedIndex + 1]
      : null;

  return {
    score,
    total: questions.length,
    percentage:
      questions.length === 0
        ? 0
        : Math.round((score / questions.length) * 100),
    answered: countAnswered(answers, questions),
    bands,
    level,
    nextLevel,
  };
}
