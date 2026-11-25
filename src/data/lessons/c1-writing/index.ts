import type { LessonUnit } from "@/data/lessons/types";

import { c1WritingUnit1 } from "./unit-1";
import { c1WritingUnit2 } from "./unit-2";
import { c1WritingUnit3 } from "./unit-3";
import { c1WritingUnit4 } from "./unit-4";

export { c1WritingUnit1, c1WritingUnit2, c1WritingUnit3, c1WritingUnit4 };

export const c1WritingUnits: LessonUnit[] = [
  c1WritingUnit1,
  c1WritingUnit2,
  c1WritingUnit3,
  c1WritingUnit4,
];

export const c1WritingMeta = {
  overview:
    "Academic & Professional Writing prepares you to persuade informed readers through sustained argument, critical synthesis and polished professional documents. You will plan essays, reports, proposals and correspondence, then edit for cohesion, register, accuracy and stylistic impact.",
  outcomes: [
    "Construct a sustained argument with a precise thesis, well-integrated evidence and effective rebuttal.",
    "Synthesise sources while preserving an independent, appropriately qualified critical voice.",
    "Produce analytical reports, proposals, formal correspondence and executive summaries for defined readers.",
    "Edit writing at argument, structural, sentence and proofreading levels for clarity and professional effect.",
  ],
};
