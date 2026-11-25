import { a1GrammarMeta, a1GrammarUnits } from "@/data/lessons/a1-grammar";
import { a1ListeningMeta, a1ListeningUnits } from "@/data/lessons/a1-listening";
import {
  a1PronunciationMeta,
  a1PronunciationUnits,
} from "@/data/lessons/a1-pronunciation";
import { a1ReadingMeta, a1ReadingUnits } from "@/data/lessons/a1-reading";
import { a1SpeakingMeta, a1SpeakingUnits } from "@/data/lessons/a1-speaking";
import {
  a1VocabularyMeta,
  a1VocabularyUnits,
} from "@/data/lessons/a1-vocabulary";
import { a1WritingMeta, a1WritingUnits } from "@/data/lessons/a1-writing";
import { c1GrammarMeta, c1GrammarUnits } from "@/data/lessons/c1-grammar";
import { c1ListeningMeta, c1ListeningUnits } from "@/data/lessons/c1-listening";
import {
  c1PronunciationMeta,
  c1PronunciationUnits,
} from "@/data/lessons/c1-pronunciation";
import { c1ReadingMeta, c1ReadingUnits } from "@/data/lessons/c1-reading";
import { c1SpeakingMeta, c1SpeakingUnits } from "@/data/lessons/c1-speaking";
import {
  c1VocabularyMeta,
  c1VocabularyUnits,
} from "@/data/lessons/c1-vocabulary";
import { c1WritingMeta, c1WritingUnits } from "@/data/lessons/c1-writing";
import { c2GrammarMeta, c2GrammarUnits } from "@/data/lessons/c2-grammar";
import { c2ListeningMeta, c2ListeningUnits } from "@/data/lessons/c2-listening";
import {
  c2PronunciationMeta,
  c2PronunciationUnits,
} from "@/data/lessons/c2-pronunciation";
import { c2ReadingMeta, c2ReadingUnits } from "@/data/lessons/c2-reading";
import { c2SpeakingMeta, c2SpeakingUnits } from "@/data/lessons/c2-speaking";
import {
  c2VocabularyMeta,
  c2VocabularyUnits,
} from "@/data/lessons/c2-vocabulary";
import { c2WritingMeta, c2WritingUnits } from "@/data/lessons/c2-writing";
import type {
  Lesson,
  LessonPracticeNote,
  LessonUnit,
} from "@/data/lessons/types";

export type AuthoredCourse = {
  units: LessonUnit[];
  overview: string;
  outcomes: string[];
  practiceNote?: LessonPracticeNote;
};

export type LessonEntry = {
  lesson: Lesson;
  unit: LessonUnit;
  unitIndex: number;
  lessonIndex: number;
  number: number;
};

const authoredCourses: Record<string, AuthoredCourse> = {
  "grammar-foundations": {
    units: a1GrammarUnits,
    ...a1GrammarMeta,
  },
  "essential-500-words": {
    units: a1VocabularyUnits,
    ...a1VocabularyMeta,
  },
  "reading-from-day-one": {
    units: a1ReadingUnits,
    ...a1ReadingMeta,
  },
  "write-your-first-sentences": {
    units: a1WritingUnits,
    ...a1WritingMeta,
  },
  "everyday-listening": {
    units: a1ListeningUnits,
    ...a1ListeningMeta,
  },
  "first-conversations": {
    units: a1SpeakingUnits,
    ...a1SpeakingMeta,
  },
  "sounds-of-english": {
    units: a1PronunciationUnits,
    ...a1PronunciationMeta,
  },
  "advanced-grammar-in-context": {
    units: c1GrammarUnits,
    ...c1GrammarMeta,
  },
  "advanced-listening": {
    units: c1ListeningUnits,
    ...c1ListeningMeta,
  },
  "articulate-speaking": {
    units: c1SpeakingUnits,
    ...c1SpeakingMeta,
  },
  "refine-your-accent": {
    units: c1PronunciationUnits,
    ...c1PronunciationMeta,
  },
  "nuance-and-collocation": {
    units: c1VocabularyUnits,
    ...c1VocabularyMeta,
  },
  "advanced-critical-reading": {
    units: c1ReadingUnits,
    ...c1ReadingMeta,
  },
  "academic-professional-writing": {
    units: c1WritingUnits,
    ...c1WritingMeta,
  },
  "mastery-grammar": {
    units: c2GrammarUnits,
    ...c2GrammarMeta,
  },
  "effortless-listening": {
    units: c2ListeningUnits,
    ...c2ListeningMeta,
  },
  "command-the-conversation": {
    units: c2SpeakingUnits,
    ...c2SpeakingMeta,
  },
  "polished-delivery": {
    units: c2PronunciationUnits,
    ...c2PronunciationMeta,
  },
  "precision-and-style": {
    units: c2VocabularyUnits,
    ...c2VocabularyMeta,
  },
  "mastering-complex-texts": {
    units: c2ReadingUnits,
    ...c2ReadingMeta,
  },
  "writing-with-authority": {
    units: c2WritingUnits,
    ...c2WritingMeta,
  },
};

export function getAuthoredCourse(courseSlug: string): AuthoredCourse | undefined {
  return authoredCourses[courseSlug];
}

export function getLessonEntries(courseSlug: string): LessonEntry[] {
  const course = authoredCourses[courseSlug];

  if (!course) {
    return [];
  }

  let number = 0;

  return course.units.flatMap((unit, unitIndex) =>
    unit.lessons.map((lesson, lessonIndex) => {
      number += 1;
      return { lesson, unit, unitIndex, lessonIndex, number };
    }),
  );
}

export function getLessonEntry(
  courseSlug: string,
  lessonSlug: string,
): LessonEntry | undefined {
  return getLessonEntries(courseSlug).find(
    (entry) => entry.lesson.slug === lessonSlug,
  );
}

export function getAuthoredCourseSlugs(): string[] {
  return Object.keys(authoredCourses);
}
