import type { LessonUnit } from "@/data/lessons/types";

import { c1ListeningUnit1 } from "./unit-1";
import { c1ListeningUnit2 } from "./unit-2";
import { c1ListeningUnit3 } from "./unit-3";
import { c1ListeningUnit4 } from "./unit-4";

export { c1ListeningUnit1, c1ListeningUnit2, c1ListeningUnit3, c1ListeningUnit4 };

export const c1ListeningUnits: LessonUnit[] = [
  c1ListeningUnit1,
  c1ListeningUnit2,
  c1ListeningUnit3,
  c1ListeningUnit4,
];

export const c1ListeningMeta = {
  overview:
    "Advanced Listening develops the stamina and flexibility to understand demanding speech in real time. You will work with rapid discussions, lectures, debates and media across accents, learning to extract nuance and keep pace with complex ideas.",
  outcomes: [
    "Understand rapid, natural speech across a range of accents.",
    "Follow complex arguments, lectures and panel discussions in detail.",
    "Interpret nuance, irony, hesitation and implied meaning.",
    "Apply advanced note-taking and listening strategies independently.",
  ],
  practiceNote: {
    title: "Listening at natural speed",
    text: "Play the whole transcript once for gist before reading closely. On a second listen, use Slow only for a difficult phrase, then return to full speed. After each replay, note the clue that unlocked the meaning: stress, contrast, a discourse marker or context. Use the exercises to check detail, and finish with the practice tasks and quiz without displaying the transcript.",
  },
};
