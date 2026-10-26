import type {
  LessonBlock,
  LessonQuizQuestion,
} from "@/data/lessons/types";

import type { PublicQuizQuestion } from "@/lib/content/types";

export type FieldErrors = Record<string, string>;

export type ValidationResult<T> =
  | { ok: true; value: T; warnings: string[] }
  | { ok: false; errors: FieldErrors };

export type CourseDraftValues = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  skill:
    | "grammar"
    | "listening"
    | "speaking"
    | "pronunciation"
    | "vocabulary"
    | "reading"
    | "writing";
  outcomes: string[];
  metadata: Record<string, unknown>;
  premium: boolean;
  hours: number;
};

export type UnitDraftValues = {
  title: string;
  description: string;
  status: "draft" | "published";
};

export type LessonDraftValues = {
  slug: string;
  title: string;
  summary: string;
  objective: string;
  minutes: number;
  blocks: LessonBlock[];
  quiz: LessonQuizQuestion[];
  status: "draft" | "published";
};

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;
const SKILLS = [
  "grammar",
  "listening",
  "speaking",
  "pronunciation",
  "vocabulary",
  "reading",
  "writing",
] as const;
const BLOCK_TYPES = [
  "text",
  "rules",
  "examples",
  "table",
  "tip",
  "practice",
  "passage",
  "wordbank",
  "dialogue",
  "transcript",
  "sound",
  "exercise",
] as const;

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function normalizeSlug(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-")
    .slice(0, 120);
}

export function isValidSlug(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.length >= 1 &&
    value.length <= 120 &&
    SLUG_PATTERN.test(value)
  );
}

export function parseOutcomeLines(value: unknown): string[] {
  const raw = typeof value === "string" ? value : "";
  const seen = new Set<string>();
  const outcomes: string[] = [];

  for (const line of raw.split(/\r?\n/)) {
    const cleaned = line.replace(/\s+/g, " ").trim();
    if (!cleaned || seen.has(cleaned)) {
      continue;
    }

    seen.add(cleaned);
    outcomes.push(cleaned.slice(0, 300));
  }

  return outcomes.slice(0, 12);
}

export function parseMetadataJson(
  value: unknown,
): ValidationResult<Record<string, unknown>> {
  if (typeof value !== "string" || value.trim() === "") {
    return {
      ok: true,
      value: {},
      warnings: [],
    };
  }

  try {
    const parsed: unknown = JSON.parse(value);

    if (!isRecord(parsed)) {
      return {
        ok: false,
        errors: { metadata: "Metadata must be a JSON object." },
      };
    }

    if (JSON.stringify(parsed).length > 20000) {
      return {
        ok: false,
        errors: { metadata: "Metadata is too large. Keep it under 20 KB." },
      };
    }

    return { ok: true, value: parsed, warnings: [] };
  } catch {
    return {
      ok: false,
      errors: { metadata: "Metadata is not valid JSON." },
    };
  }
}

export function validateCourseFields(
  input: Record<string, unknown>,
): ValidationResult<CourseDraftValues> {
  const errors: FieldErrors = {};
  const slug = normalizeSlug(input.slug);
  const title = cleanText(input.title);
  const summary = cleanText(input.summary);
  const description = cleanText(input.description);
  const outcomes = Array.isArray(input.outcomes)
    ? input.outcomes
        .map((outcome) => cleanText(outcome))
        .filter((outcome) => outcome.length > 0)
    : [];
  const level = cleanText(input.level).toUpperCase();
  const skill = cleanText(input.skill).toLowerCase();
  const hours = Number(input.hours);
  const metadata = isRecord(input.metadata) ? input.metadata : null;

  if (!isValidSlug(slug)) {
    errors.slug = "Use lowercase letters, numbers and single hyphens.";
  }
  if (title.length < 1 || title.length > 160) {
    errors.title = "Add a course title of 160 characters or fewer.";
  }
  if (summary.length < 1 || summary.length > 500) {
    errors.summary = "Add a one or two sentence summary (500 characters max).";
  }
  if (description.length < 1 || description.length > 4000) {
    errors.description = "Add a course description (4000 characters max).";
  }
  if (!LEVELS.includes(level as (typeof LEVELS)[number])) {
    errors.level = "Choose a CEFR level from A1 to C2.";
  }
  if (!SKILLS.includes(skill as (typeof SKILLS)[number])) {
    errors.skill = "Choose one of the seven skills.";
  }
  if (outcomes.length < 1 || outcomes.length > 12) {
    errors.outcomes = "Add between 1 and 12 learning outcomes, one per line.";
  }
  if (!Number.isInteger(hours) || hours < 1 || hours > 200) {
    errors.hours = "Estimated hours must be a whole number from 1 to 200.";
  }
  if (!metadata) {
    errors.metadata = "Metadata must be a JSON object.";
  } else if (JSON.stringify(metadata).length > 20000) {
    errors.metadata = "Metadata is too large. Keep it under 20 KB.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      slug,
      title,
      summary,
      description,
      level: level as CourseDraftValues["level"],
      skill: skill as CourseDraftValues["skill"],
      outcomes,
      metadata: metadata as Record<string, unknown>,
      premium: input.premium === true,
      hours,
    },
    warnings: [],
  };
}

export function validateUnitFields(
  input: Record<string, unknown>,
): ValidationResult<UnitDraftValues> {
  const errors: FieldErrors = {};
  const title = cleanText(input.title);
  const description = cleanText(input.description);
  const status = cleanText(input.status);

  if (title.length < 1 || title.length > 200) {
    errors.title = "Add a unit title of 200 characters or fewer.";
  }
  if (description.length > 2000) {
    errors.description = "Keep the unit description under 2000 characters.";
  }
  if (status !== "draft" && status !== "published") {
    errors.status = "Choose draft or published.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      title,
      description,
      status: status as UnitDraftValues["status"],
    },
    warnings: [],
  };
}

export function validateLessonFields(
  input: Record<string, unknown>,
): ValidationResult<LessonDraftValues> {
  const errors: FieldErrors = {};
  const slug = normalizeSlug(input.slug);
  const title = cleanText(input.title);
  const summary = cleanText(input.summary);
  const objective = cleanText(input.objective);
  const minutes = Number(input.minutes);
  const status = cleanText(input.status);
  const warnings: string[] = [];

  if (!isValidSlug(slug)) {
    errors.slug = "Use lowercase letters, numbers and single hyphens.";
  }
  if (title.length < 1 || title.length > 200) {
    errors.title = "Add a lesson title of 200 characters or fewer.";
  }
  if (summary.length < 1 || summary.length > 1000) {
    errors.summary = "Add a short summary (1000 characters max).";
  }
  if (objective.length < 1 || objective.length > 1000) {
    errors.objective = "Add a learning objective (1000 characters max).";
  }
  if (!Number.isInteger(minutes) || minutes < 1 || minutes > 600) {
    errors.minutes = "Duration must be a whole number from 1 to 600.";
  }
  if (status !== "draft" && status !== "published") {
    errors.status = "Choose draft or published.";
  }

  const blocks = validateBlocks(input.blocks);
  if (!blocks.ok) {
    errors.blocks = blocks.errors.blocks;
  } else if (blocks.value.length === 0) {
    warnings.push("This lesson has no content blocks yet.");
  }

  const quiz = validateQuiz(input.quiz);
  if (!quiz.ok) {
    errors.quiz = quiz.errors.quiz;
  } else if (quiz.value.length === 0) {
    warnings.push("This lesson has no quiz questions yet.");
  }
  if (status === "published" && (blocks.ok ? blocks.value.length : 0) === 0) {
    errors.status = "Add lesson content before marking this lesson published.";
  }
  if (status === "published" && (quiz.ok ? quiz.value.length : 0) === 0) {
    errors.status = "Add a quiz before marking this lesson published.";
  }

  if (Object.keys(errors).length > 0 || !blocks.ok || !quiz.ok) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      slug,
      title,
      summary,
      objective,
      minutes,
      blocks: blocks.value,
      quiz: quiz.value,
      status: status as LessonDraftValues["status"],
    },
    warnings,
  };
}

export function validateQuiz(value: unknown): ValidationResult<LessonQuizQuestion[]> {
  if (!Array.isArray(value)) {
    return {
      ok: false,
      errors: { quiz: "Quiz must be a JSON array of questions." },
    };
  }

  const ids = new Set<string>();
  const questions: LessonQuizQuestion[] = [];

  for (let index = 0; index < value.length; index += 1) {
    const item = value[index];

    if (!isRecord(item)) {
      return {
        ok: false,
        errors: { quiz: `Question ${index + 1} must be an object.` },
      };
    }

    const id = cleanText(item.id);
    const question = cleanText(item.question);
    const explanation = cleanText(item.explanation);
    const options = Array.isArray(item.options)
      ? item.options.map((option) => cleanText(option))
      : [];
    const rawCorrectIndex = item.correctIndex;
    const correctIndex =
      typeof rawCorrectIndex === "number" ||
      (typeof rawCorrectIndex === "string" && rawCorrectIndex.trim() !== "")
        ? Number(rawCorrectIndex)
        : Number.NaN;

    if (id.length < 1 || id.length > 80) {
      return {
        ok: false,
        errors: { quiz: `Question ${index + 1} needs an id (80 characters max).` },
      };
    }
    if (ids.has(id)) {
      return {
        ok: false,
        errors: { quiz: `Question id "${id}" is used more than once.` },
      };
    }
    ids.add(id);

    if (question.length < 1 || question.length > 1000) {
      return {
        ok: false,
        errors: { quiz: `Question ${index + 1} needs question text.` },
      };
    }
    if (options.length < 2 || options.length > 8) {
      return {
        ok: false,
        errors: {
          quiz: `Question ${index + 1} needs between 2 and 8 options.`,
        },
      };
    }
    if (options.some((option) => option.length < 1 || option.length > 500)) {
      return {
        ok: false,
        errors: {
          quiz: `Question ${index + 1} has an empty or overlong option.`,
        },
      };
    }
    if (
      !Number.isInteger(correctIndex) ||
      correctIndex < 0 ||
      correctIndex >= options.length
    ) {
      return {
        ok: false,
        errors: {
          quiz: `Question ${index + 1} must have exactly one correct option selected.`,
        },
      };
    }
    if (explanation.length < 1 || explanation.length > 2000) {
      return {
        ok: false,
        errors: {
          quiz: `Question ${index + 1} needs an explanation (2000 characters max).`,
        },
      };
    }

    questions.push({
      id,
      question,
      options,
      correctIndex,
      explanation,
    });
  }

  return { ok: true, value: questions, warnings: [] };
}

export function validateBlocks(value: unknown): ValidationResult<LessonBlock[]> {
  if (!Array.isArray(value)) {
    return {
      ok: false,
      errors: { blocks: "Lesson content must be a JSON array of blocks." },
    };
  }

  const blocks: LessonBlock[] = [];

  for (let index = 0; index < value.length; index += 1) {
    const item = value[index];

    if (!isRecord(item) || typeof item.type !== "string") {
      return {
        ok: false,
        errors: { blocks: `Block ${index + 1} must be an object with a type.` },
      };
    }

    if (!BLOCK_TYPES.includes(item.type as (typeof BLOCK_TYPES)[number])) {
      return {
        ok: false,
        errors: {
          blocks: `Block ${index + 1} has an unsupported type "${item.type}".`,
        },
      };
    }

    const fail = (message: string): ValidationResult<LessonBlock[]> => ({
      ok: false,
      errors: { blocks: `Block ${index + 1}: ${message}` },
    });
    const title = optionalText(item.title, 200);
    const requiredTitle = textWithin(item.title, 1, 200);
    const intro = optionalText(item.intro, 1000);
    const caption = optionalText(item.caption, 500);

    if (title === null) {
      return fail("title must be 200 characters or fewer.");
    }
    if (intro === null) {
      return fail("intro must be 1000 characters or fewer.");
    }
    if (caption === null) {
      return fail("caption must be 500 characters or fewer.");
    }

    switch (item.type as (typeof BLOCK_TYPES)[number]) {
      case "text": {
        const paragraphs = stringArray(item.paragraphs, 1, 50, 5000);
        if (!paragraphs) {
          return fail("add at least one paragraph.");
        }
        blocks.push({ type: "text", title, paragraphs });
        break;
      }
      case "rules": {
        if (!requiredTitle) {
          return fail("add a title.");
        }
        const items = stringArray(item.items, 1, 100, 1000);
        if (!items) {
          return fail("add at least one rule.");
        }
        blocks.push({ type: "rules", title: requiredTitle, items });
        break;
      }
      case "examples": {
        const examples = objectArray(item.items, 1, 100);
        if (!examples) {
          return fail("add at least one example.");
        }
        const items = [];
        for (const example of examples) {
          const text = textWithin(example.text, 1, 2000);
          const note = optionalText(example.note, 1000);
          if (!text || note === null) {
            return fail("every example needs text and a short optional note.");
          }
          items.push(note ? { text, note } : { text });
        }
        blocks.push({ type: "examples", title, intro, items });
        break;
      }
      case "table": {
        const columns = stringArray(item.columns, 1, 8, 200);
        if (!columns) {
          return fail("add between 1 and 8 columns.");
        }
        if (!Array.isArray(item.rows) || item.rows.length < 1) {
          return fail("add at least one table row.");
        }
        const rows: string[][] = [];
        for (const row of item.rows) {
          if (!Array.isArray(row) || row.length !== columns.length) {
            return fail("each row needs one cell per column.");
          }
          const cells = row.map((cell) => cleanText(cell));
          if (cells.some((cell) => cell.length > 1000)) {
            return fail("table cells must be 1000 characters or fewer.");
          }
          rows.push(cells);
        }
        blocks.push({ type: "table", title, caption, columns, rows });
        break;
      }
      case "tip": {
        const text = textWithin(item.text, 1, 2000);
        if (!text) {
          return fail("add tip text.");
        }
        blocks.push({ type: "tip", title, text });
        break;
      }
      case "practice": {
        if (!requiredTitle) {
          return fail("add a title.");
        }
        const instructions = textWithin(item.instructions, 1, 2000);
        const practiceItems = objectArray(item.items, 1, 100);
        if (!instructions || !practiceItems) {
          return fail("add instructions and practice items.");
        }
        const items = [];
        for (const practiceItem of practiceItems) {
          const prompt = textWithin(practiceItem.prompt, 1, 1000);
          const answer = textWithin(practiceItem.answer, 1, 1000);
          const hint = optionalText(practiceItem.hint, 500);
          if (!prompt || !answer || hint === null) {
            return fail("every practice item needs a prompt and answer.");
          }
          items.push(hint ? { prompt, answer, hint } : { prompt, answer });
        }
        blocks.push({
          type: "practice",
          title: requiredTitle,
          instructions,
          items,
        });
        break;
      }
      case "passage": {
        if (!requiredTitle) {
          return fail("add a title.");
        }
        const paragraphs = stringArray(item.paragraphs, 1, 50, 5000);
        if (!paragraphs) {
          return fail("add at least one paragraph.");
        }
        const glossary = optionalWords(item.glossary);
        if (glossary === null) {
          return fail("glossary words need a term and meaning.");
        }
        blocks.push({
          type: "passage",
          title: requiredTitle,
          paragraphs,
          ...(glossary ? { glossary } : {}),
        });
        break;
      }
      case "wordbank": {
        if (!requiredTitle) {
          return fail("add a title.");
        }
        const words = optionalWords(item.words);
        if (!words || words.length === 0) {
          return fail("add at least one word.");
        }
        blocks.push({
          type: "wordbank",
          title: requiredTitle,
          intro,
          words,
        });
        break;
      }
      case "dialogue": {
        if (!requiredTitle) {
          return fail("add a title.");
        }
        const lines = dialogueLines(item.lines);
        if (!lines) {
          return fail("add at least one dialogue line.");
        }
        blocks.push({
          type: "dialogue",
          title: requiredTitle,
          intro,
          lines,
        });
        break;
      }
      case "transcript": {
        if (!requiredTitle) {
          return fail("add a title.");
        }
        const context = optionalText(item.context, 1000);
        if (context === null) {
          return fail("context must be 1000 characters or fewer.");
        }
        const lines = dialogueLines(item.lines);
        if (!lines) {
          return fail("add at least one transcript line.");
        }
        blocks.push({
          type: "transcript",
          title: requiredTitle,
          context,
          lines,
        });
        break;
      }
      case "sound": {
        if (!requiredTitle) {
          return fail("add a title.");
        }
        const sound = textWithin(item.sound, 1, 200);
        const guidance = textWithin(item.guidance, 1, 2000);
        const words = soundWords(item.words);
        if (!sound || !guidance || !words) {
          return fail("add a sound, guidance and at least one example word.");
        }
        blocks.push({
          type: "sound",
          title: requiredTitle,
          sound,
          guidance,
          words,
        });
        break;
      }
      case "exercise": {
        if (!requiredTitle) {
          return fail("add a title.");
        }
        const instructions = textWithin(item.instructions, 1, 2000);
        const exerciseItems = objectArray(item.items, 1, 100);
        if (!instructions || !exerciseItems) {
          return fail("add instructions and exercise items.");
        }
        const items = [];
        for (const exercise of exerciseItems) {
          const prompt = textWithin(exercise.prompt, 1, 1000);
          const options = stringArray(exercise.options, 2, 8, 500);
          const explanation = textWithin(exercise.explanation, 1, 2000);
          const correctIndex = Number(exercise.correctIndex);
          const hint = optionalText(exercise.hint, 500);
          if (
            !prompt ||
            !options ||
            !explanation ||
            hint === null ||
            !Number.isInteger(correctIndex) ||
            correctIndex < 0 ||
            correctIndex >= options.length
          ) {
            return fail("every exercise item needs options and one correct answer.");
          }
          items.push({
            prompt,
            options,
            correctIndex,
            explanation,
            ...(hint ? { hint } : {}),
          });
        }
        blocks.push({
          type: "exercise",
          title: requiredTitle,
          instructions,
          items,
        });
        break;
      }
    }
  }

  return { ok: true, value: blocks, warnings: [] };
}

export function toPublicQuizQuestions(
  quiz: readonly LessonQuizQuestion[],
): PublicQuizQuestion[] {
  return quiz.map(({ id, question, options }) => ({
    id,
    question,
    options: [...options],
  }));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function textWithin(value: unknown, min: number, max: number): string | null {
  const cleaned = cleanText(value);
  return cleaned.length >= min && cleaned.length <= max ? cleaned : null;
}

function optionalText(value: unknown, max: number): string | undefined | null {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  const cleaned = cleanText(value);
  return cleaned.length <= max ? cleaned || undefined : null;
}

function stringArray(
  value: unknown,
  min: number,
  max: number,
  maxLength: number,
): string[] | null {
  if (!Array.isArray(value) || value.length < min || value.length > max) {
    return null;
  }

  const items: string[] = [];
  for (const entry of value) {
    const cleaned = textWithin(entry, 1, maxLength);
    if (!cleaned) {
      return null;
    }
    items.push(cleaned);
  }

  return items;
}

function objectArray(
  value: unknown,
  min: number,
  max: number,
): Array<Record<string, unknown>> | null {
  if (!Array.isArray(value) || value.length < min || value.length > max) {
    return null;
  }

  const items: Array<Record<string, unknown>> = [];
  for (const entry of value) {
    if (!isRecord(entry)) {
      return null;
    }
    items.push(entry);
  }

  return items;
}

function optionalWords(
  value: unknown,
): LessonWordLike[] | undefined | null {
  if (value === undefined) {
    return undefined;
  }
  if (!Array.isArray(value)) {
    return null;
  }

  const words: LessonWordLike[] = [];
  for (const entry of value) {
    if (!isRecord(entry)) {
      return null;
    }
    const term = textWithin(entry.term, 1, 200);
    const meaning = textWithin(entry.meaning, 1, 500);
    const example = optionalText(entry.example, 1000);
    if (!term || !meaning || example === null) {
      return null;
    }
    words.push({ term, meaning, ...(example ? { example } : {}) });
  }

  return words;
}

type LessonWordLike = {
  term: string;
  meaning: string;
  example?: string;
};

function soundWords(
  value: unknown,
): Array<{ word: string; respelling: string; example?: string }> | null {
  if (!Array.isArray(value) || value.length === 0) {
    return null;
  }

  const words = [];
  for (const entry of value) {
    if (!isRecord(entry)) {
      return null;
    }
    const word = textWithin(entry.word, 1, 200);
    const respelling = textWithin(entry.respelling, 1, 200);
    const example = optionalText(entry.example, 1000);
    if (!word || !respelling || example === null) {
      return null;
    }
    words.push({ word, respelling, ...(example ? { example } : {}) });
  }

  return words;
}

function dialogueLines(
  value: unknown,
): Array<{ speaker: string; text: string }> | null {
  const entries = objectArray(value, 1, 200);
  if (!entries) {
    return null;
  }

  const lines = [];
  for (const entry of entries) {
    const speaker = textWithin(entry.speaker, 1, 100);
    const text = textWithin(entry.text, 1, 5000);
    if (!speaker || !text) {
      return null;
    }
    lines.push({ speaker, text });
  }

  return lines;
}
