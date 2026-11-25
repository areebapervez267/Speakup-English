import { readdirSync } from "node:fs";
import { join } from "node:path";
import { register } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

register("../alias-loader.mjs", import.meta.url);

export const AUTHORED_COURSES = {
  "grammar-foundations": "a1-grammar",
  "essential-500-words": "a1-vocabulary",
  "reading-from-day-one": "a1-reading",
  "write-your-first-sentences": "a1-writing",
  "everyday-listening": "a1-listening",
  "first-conversations": "a1-speaking",
  "sounds-of-english": "a1-pronunciation",
  "advanced-grammar-in-context": "c1-grammar",
  "advanced-listening": "c1-listening",
  "articulate-speaking": "c1-speaking",
  "refine-your-accent": "c1-pronunciation",
  "nuance-and-collocation": "c1-vocabulary",
  "advanced-critical-reading": "c1-reading",
  "academic-professional-writing": "c1-writing",
  "mastery-grammar": "c2-grammar",
  "effortless-listening": "c2-listening",
  "command-the-conversation": "c2-speaking",
  "polished-delivery": "c2-pronunciation",
  "precision-and-style": "c2-vocabulary",
  "mastering-complex-texts": "c2-reading",
  "writing-with-authority": "c2-writing",
};

const contentRoot = new URL("../../src/data/lessons/", import.meta.url);

export async function loadAuthoredQuizKeys() {
  const rows = [];

  for (const [courseSlug, directory] of Object.entries(AUTHORED_COURSES)) {
    const dir = new URL(`${directory}/`, contentRoot);
    const dirPath = fileURLToPath(dir);
    const files = readdirSync(dirPath)
      .filter((file) => /^unit-\d+\.ts$/.test(file))
      .sort();

    for (const file of files) {
      const unitModule = await import(
        pathToFileURL(join(dirPath, file)).href
      );

      for (const value of Object.values(unitModule)) {
        if (!value || typeof value !== "object" || !Array.isArray(value.lessons)) {
          continue;
        }

        for (const lesson of value.lessons) {
          if (!Array.isArray(lesson.quiz) || lesson.quiz.length === 0) {
            continue;
          }

          const questions = lesson.quiz.map((question) => {
            if (
              typeof question.id !== "string" ||
              !Array.isArray(question.options) ||
              !Number.isInteger(question.correctIndex) ||
              question.correctIndex < 0 ||
              question.correctIndex >= question.options.length
            ) {
              throw new Error(
                `Invalid quiz question in ${courseSlug}/${lesson.slug}.`,
              );
            }

            return {
              id: question.id,
              optionCount: question.options.length,
              correctIndex: question.correctIndex,
            };
          });

          rows.push({
            courseSlug,
            lessonSlug: lesson.slug,
            level: directory.split("-")[0],
            questions,
          });
        }
      }
    }
  }

  return rows;
}
