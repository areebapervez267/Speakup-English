import type { LessonUnit } from "@/data/lessons/types";

import { c2VocabularyUnit1 } from "./unit-1";
import { c2VocabularyUnit2 } from "./unit-2";
import { c2VocabularyUnit3 } from "./unit-3";
import { c2VocabularyUnit4 } from "./unit-4";

export {
  c2VocabularyUnit1,
  c2VocabularyUnit2,
  c2VocabularyUnit3,
  c2VocabularyUnit4,
};

export const c2VocabularyUnits: LessonUnit[] = [
  c2VocabularyUnit1,
  c2VocabularyUnit2,
  c2VocabularyUnit3,
  c2VocabularyUnit4,
];

export const c2VocabularyMeta = {
  overview:
    "Precision & Style is a vocabulary course for advanced users who want exact, expressive and idiomatic language. You will explore connotation, register, figurative language and personal style, building a lexicon you can control under pressure.",
  outcomes: [
    "Select vocabulary with exact meaning, connotation and register.",
    "Use metaphor, irony and figurative language with confidence.",
    "Deploy advanced collocations and idiomatic expressions naturally.",
    "Develop a personal style that is precise, varied and authentic.",
  ],
};
