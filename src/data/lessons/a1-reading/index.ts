import type { LessonUnit } from "@/data/lessons/types";

import { a1ReadingUnit1 } from "./unit-1";
import { a1ReadingUnit2 } from "./unit-2";
import { a1ReadingUnit3 } from "./unit-3";
import { a1ReadingUnit4 } from "./unit-4";

export const a1ReadingUnits: LessonUnit[] = [
  a1ReadingUnit1,
  a1ReadingUnit2,
  a1ReadingUnit3,
  a1ReadingUnit4,
];

export const a1ReadingMeta = {
  overview:
    "Reading from Day One helps you read real-world English without translating every word. You will start with signs and messages, then move to short descriptions and simple stories using a clear, practical reading routine.",
  outcomes: [
    "Understand common signs, labels and personal information.",
    "Read short messages and emails for their main idea.",
    "Find specific details in menus, timetables and short texts.",
    "Use prediction and context to handle unfamiliar words.",
  ],
};
