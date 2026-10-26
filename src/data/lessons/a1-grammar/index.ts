import type { LessonUnit } from "@/data/lessons/types";

import { a1GrammarUnit1 } from "./unit-1";
import { a1GrammarUnit2 } from "./unit-2";
import { a1GrammarUnit3 } from "./unit-3";
import { a1GrammarUnit4 } from "./unit-4";

export const a1GrammarUnits: LessonUnit[] = [
  a1GrammarUnit1,
  a1GrammarUnit2,
  a1GrammarUnit3,
  a1GrammarUnit4,
];

export const a1GrammarMeta = {
  overview:
    "Grammar Foundations is a complete beginner course for learners who can recognise some English words but want to build clear sentences of their own. It starts with the verb be, then adds articles, possession and the present simple, so each lesson gives you something you can use immediately.",
  outcomes: [
    "Introduce yourself and describe people, places and things with the verb be.",
    "Form accurate questions, negatives and short answers in the present.",
    "Talk about routines, family, work and free time with the present simple.",
    "Write a short personal introduction with correct word order and punctuation.",
  ],
};
