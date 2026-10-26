import type { LessonUnit } from "@/data/lessons/types";

import { a1VocabularyUnit1 } from "./unit-1";
import { a1VocabularyUnit2 } from "./unit-2";
import { a1VocabularyUnit3 } from "./unit-3";
import { a1VocabularyUnit4 } from "./unit-4";

export const a1VocabularyUnits: LessonUnit[] = [
  a1VocabularyUnit1,
  a1VocabularyUnit2,
  a1VocabularyUnit3,
  a1VocabularyUnit4,
];

export const a1VocabularyMeta = {
  overview:
    "Essential 500 Words organises beginner vocabulary around the situations that matter most. You will learn words in useful groups, see them in short examples and practise choosing the right word for the right context.",
  outcomes: [
    "Use high-frequency words for people, home, food, travel and work.",
    "Understand common word partnerships such as make breakfast and take the bus.",
    "Group new vocabulary so it is easier to remember and review.",
    "Describe everyday objects, places and routines with a practical word bank.",
  ],
};
