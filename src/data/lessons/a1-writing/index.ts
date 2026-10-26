import type { LessonUnit } from "@/data/lessons/types";

import { a1WritingUnit1 } from "./unit-1";
import { a1WritingUnit2 } from "./unit-2";
import { a1WritingUnit3 } from "./unit-3";
import { a1WritingUnit4 } from "./unit-4";

export const a1WritingUnits: LessonUnit[] = [
  a1WritingUnit1,
  a1WritingUnit2,
  a1WritingUnit3,
  a1WritingUnit4,
];

export const a1WritingMeta = {
  overview:
    "Write Your First Sentences turns the grammar you know into short, correct texts. Each lesson focuses on one writing habit, from capital letters and word order to friendly messages you can send today.",
  outcomes: [
    "Write complete sentences with correct basic word order.",
    "Use capital letters, full stops and question marks accurately.",
    "Complete simple forms and write short personal messages.",
    "Produce a short email or postcard with a clear beginning and ending.",
  ],
};
