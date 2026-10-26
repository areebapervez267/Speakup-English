import type { LessonUnit } from "@/data/lessons/types";

import { a1SpeakingUnit1 } from "./unit-1";
import { a1SpeakingUnit2 } from "./unit-2";
import { a1SpeakingUnit3 } from "./unit-3";
import { a1SpeakingUnit4 } from "./unit-4";

export const a1SpeakingUnits: LessonUnit[] = [
  a1SpeakingUnit1,
  a1SpeakingUnit2,
  a1SpeakingUnit3,
  a1SpeakingUnit4,
];

export const a1SpeakingMeta = {
  overview:
    "First Conversations gives you the sentences and confidence to take part in short, friendly exchanges. Each lesson models a real situation, gives you useful phrases and ends with a chance to rehearse your own answer.",
  outcomes: [
    "Introduce yourself and ask simple questions about another person.",
    "Share basic information about your family, home and daily life.",
    "Handle common situations in shops, cafés and public places.",
    "Keep a short conversation going with clear questions and answers.",
  ],
  practiceNote: {
    title: "Speaking practice without voice recording",
    text: "This version does not record your voice or assess your speaking. The dialogues and model answers are here for rehearsal: read them aloud, change the details to your own, and practise with a partner if you can. Use the model answers as a guide, not as the only correct response.",
  },
};
