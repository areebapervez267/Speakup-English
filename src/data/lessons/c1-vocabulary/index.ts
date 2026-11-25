import type { LessonUnit } from "@/data/lessons/types";

import { c1VocabularyUnit1 } from "./unit-1";
import { c1VocabularyUnit2 } from "./unit-2";
import { c1VocabularyUnit3 } from "./unit-3";
import { c1VocabularyUnit4 } from "./unit-4";

export {
  c1VocabularyUnit1,
  c1VocabularyUnit2,
  c1VocabularyUnit3,
  c1VocabularyUnit4,
};

export const c1VocabularyUnits: LessonUnit[] = [
  c1VocabularyUnit1,
  c1VocabularyUnit2,
  c1VocabularyUnit3,
  c1VocabularyUnit4,
];

export const c1VocabularyMeta = {
  overview:
    "Nuance & Collocation builds the word knowledge that makes advanced English sound precise and natural. You will study shades of meaning, fixed expressions, idiom and register, and learn to choose words that fit context and intent.",
  outcomes: [
    "Distinguish near-synonyms by connotation, strength and register.",
    "Use high-frequency collocations and idiomatic phrases naturally.",
    "Choose vocabulary that fits formal, neutral and informal contexts.",
    "Develop a personal system for recording and reviewing advanced lexis.",
  ],
};
