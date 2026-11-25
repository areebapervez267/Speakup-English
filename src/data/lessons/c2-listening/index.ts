import type { LessonUnit } from "@/data/lessons/types";

import { c2ListeningUnit1 } from "./unit-1";
import { c2ListeningUnit2 } from "./unit-2";
import { c2ListeningUnit3 } from "./unit-3";
import { c2ListeningUnit4 } from "./unit-4";

export { c2ListeningUnit1, c2ListeningUnit2, c2ListeningUnit3, c2ListeningUnit4 };

export const c2ListeningUnits: LessonUnit[] = [
  c2ListeningUnit1,
  c2ListeningUnit2,
  c2ListeningUnit3,
  c2ListeningUnit4,
];

export const c2ListeningMeta = {
  overview:
    "Effortless Listening is designed for complete comprehension of demanding, idiomatic and specialised speech. You will work with unscripted media, lectures, comedy and debate, developing the confidence to follow meaning even when the language is fast, allusive or incomplete.",
  outcomes: [
    "Comprehend rapid, idiomatic speech with minimal effort.",
    "Follow specialised lectures and discussions across unfamiliar topics.",
    "Interpret humour, allusion and cultural reference in real time.",
    "Evaluate spoken sources critically and retain detailed information.",
  ],
  practiceNote: {
    title: "From supported to effortless listening",
    text: "Begin with a full-speed gist listen. Replay only the phrases that block meaning, checking a short transcript or strategy before returning to natural speed. Keep a source map for interviews and lectures, noting who is speaking, what kind of evidence they offer and what remains uncertain. Finish each lesson with an unaided summary, then use the quiz to check that you retained both detail and interpretation.",
  },
};
