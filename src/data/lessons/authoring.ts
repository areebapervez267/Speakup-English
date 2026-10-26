import type {
  ExerciseItem,
  LessonQuizQuestion,
  LessonWord,
  PracticeItem,
} from "./types";

export function p(prompt: string, answer: string, hint?: string): PracticeItem {
  return { prompt, answer, hint };
}

export function c(
  prompt: string,
  options: string[],
  correctIndex: number,
  explanation: string,
  hint?: string,
): ExerciseItem {
  return { prompt, options, correctIndex, explanation, hint };
}

export function q(
  number: number,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): LessonQuizQuestion {
  return { id: `q${number}`, question, options, correctIndex, explanation };
}

function rotate<T>(items: T[], shift: number): T[] {
  const start = shift % items.length;
  return [...items.slice(start), ...items.slice(0, start)];
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function wordExercises(words: LessonWord[]): ExerciseItem[] {
  if (words.length < 3) {
    throw new Error("A word exercise needs at least three words.");
  }

  return words.map((word, index) => {
    if (!word.example) {
      throw new Error(`Word "${word.term}" needs an example sentence.`);
    }

    const pattern = new RegExp(
      `(?<![\\p{L}\\p{N}])${escapeRegExp(word.term)}(?![\\p{L}\\p{N}])`,
      "iu",
    );

    if (!pattern.test(word.example)) {
      throw new Error(
        `The example for "${word.term}" must contain the word itself.`,
      );
    }

    const sentence = word.example.replace(pattern, "___");
    const others = words.filter((item) => item.term !== word.term);
    const options = rotate(
      [word.term, others[0].term, others[1].term],
      index,
    );

    return {
      prompt: `Which word completes the sentence? “${sentence}”`,
      options,
      correctIndex: options.indexOf(word.term),
      explanation: `“${word.term}” means ${word.meaning.replace(/\.$/, "")}. The full sentence is: ${word.example}`,
      hint: word.meaning,
    };
  });
}

export function wordQuiz(words: LessonWord[], count = 4): LessonQuizQuestion[] {
  if (words.length < 3) {
    throw new Error("A word quiz needs at least three words.");
  }

  return words.slice(0, count).map((word, index) => {
    const others = words.filter((item) => item.term !== word.term);
    const options = rotate(
      [word.meaning, others[0].meaning, others[1].meaning],
      index,
    );

    return q(
      index + 1,
      `What does “${word.term}” mean?`,
      options,
      options.indexOf(word.meaning),
      `“${word.term}” means ${word.meaning.replace(/\.$/, "")}.${
        word.example ? ` Example: ${word.example}` : ""
      }`,
    );
  });
}
