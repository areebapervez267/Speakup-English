import type { LessonUnit } from "@/data/lessons/types";

import { c1SpeakingUnit1 } from "./unit-1";
import { c1SpeakingUnit2 } from "./unit-2";
import { c1SpeakingUnit3 } from "./unit-3";
import { c1SpeakingUnit4 } from "./unit-4";

export const c1SpeakingUnits: LessonUnit[] = [
  c1SpeakingUnit1,
  c1SpeakingUnit2,
  c1SpeakingUnit3,
  c1SpeakingUnit4,
];

export const c1SpeakingMeta = {
  overview:
    "Articulate Speaking trains you to express complex ideas with fluency, flexibility and control. You will practise extended turns, formal debate, storytelling, presentations and high-stakes conversations, refining both what you say and how you say it.",
  outcomes: [
    "Speak at length on complex topics with clear structure.",
    "Adapt vocabulary, tone and pace to different audiences.",
    "Handle challenging questions and maintain your position under pressure.",
    "Use rhetorical devices and discourse markers to guide listeners.",
  ],
  practiceNote: {
    title: "Rehearse for a real listener",
    text: "These lessons do not record or score your voice. Read each model aloud, then change its facts and arguments rather than memorising it. Record a timed turn if you can, ask a listener to summarise your position, and repeat the weakest section with one deliberate change to structure, precision or delivery.",
  },
};
