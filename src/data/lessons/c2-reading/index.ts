import type { LessonUnit } from "@/data/lessons/types";

import { c2ReadingUnit1 } from "./unit-1";
import { c2ReadingUnit2 } from "./unit-2";
import { c2ReadingUnit3 } from "./unit-3";
import { c2ReadingUnit4 } from "./unit-4";

export { c2ReadingUnit1, c2ReadingUnit2, c2ReadingUnit3, c2ReadingUnit4 };

export const c2ReadingUnits: LessonUnit[] = [
  c2ReadingUnit1,
  c2ReadingUnit2,
  c2ReadingUnit3,
  c2ReadingUnit4,
];

export const c2ReadingMeta = {
  overview:
    "Mastering Complex Texts is an advanced reading course built around ambitious literature, research and commentary. You will develop subtle interpretation, intertextual awareness and the ability to hold complexity without simplifying it.",
  outcomes: [
    "Interpret literary and academic texts with subtlety and independence.",
    "Recognise intertextual reference, allusion and stylistic choice.",
    "Evaluate argument, evidence and ideology across genres.",
    "Build and defend a sophisticated interpretation from textual evidence.",
  ],
};
