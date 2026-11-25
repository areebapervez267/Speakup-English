import type { LessonUnit } from "@/data/lessons/types";

import { c1ReadingUnit1 } from "./unit-1";
import { c1ReadingUnit2 } from "./unit-2";
import { c1ReadingUnit3 } from "./unit-3";
import { c1ReadingUnit4 } from "./unit-4";

export { c1ReadingUnit1, c1ReadingUnit2, c1ReadingUnit3, c1ReadingUnit4 };

export const c1ReadingUnits: LessonUnit[] = [
  c1ReadingUnit1,
  c1ReadingUnit2,
  c1ReadingUnit3,
  c1ReadingUnit4,
];

export const c1ReadingMeta = {
  overview:
    "Advanced Critical Reading develops the interpretive skill required for demanding academic and literary texts. You will work with dense arguments, implied positions and complex structures, learning to build independent, evidence-based interpretations.",
  outcomes: [
    "Analyse dense texts for argument, structure and rhetorical strategy.",
    "Infer meaning from implication, tone and what is left unsaid.",
    "Situate texts in their wider context and identify underlying assumptions.",
    "Synthesise multiple sources into a coherent critical position.",
  ],
};
