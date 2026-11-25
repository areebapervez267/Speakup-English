import type { LessonUnit } from "@/data/lessons/types";

import { c2WritingUnit1 } from "./unit-1";
import { c2WritingUnit2 } from "./unit-2";
import { c2WritingUnit3 } from "./unit-3";
import { c2WritingUnit4 } from "./unit-4";

export { c2WritingUnit1, c2WritingUnit2, c2WritingUnit3, c2WritingUnit4 };

export const c2WritingUnits: LessonUnit[] = [
  c2WritingUnit1,
  c2WritingUnit2,
  c2WritingUnit3,
  c2WritingUnit4,
];

export const c2WritingMeta = {
  overview:
    "Writing with Authority develops persuasive, elegant prose for demanding readers. You will cultivate a credible voice, shape arguments and sentences for effect, adapt complex ideas across genres and edit with the discrimination of a skilled critic.",
  outcomes: [
    "Write persuasive prose with a distinctive voice and accountable ethical judgement.",
    "Control argument architecture, sentence rhythm, emphasis, concision and figurative precision.",
    "Adapt sustained professional and public writing without flattening evidence or losing authorial integrity.",
    "Edit structurally and at line level, justify stylistic risks and curate an advanced portfolio with critical reflection.",
  ],
};
