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
