import type { LessonUnit } from "@/data/lessons/types";

import { a1PronunciationUnit1 } from "./unit-1";
import { a1PronunciationUnit2 } from "./unit-2";
import { a1PronunciationUnit3 } from "./unit-3";
import { a1PronunciationUnit4 } from "./unit-4";

export const a1PronunciationUnits: LessonUnit[] = [
  a1PronunciationUnit1,
  a1PronunciationUnit2,
  a1PronunciationUnit3,
  a1PronunciationUnit4,
];

export const a1PronunciationMeta = {
  overview:
    "Sounds of English introduces the building blocks of clear pronunciation. You will practise individual sounds, notice where stress falls in words and begin to shape the rhythm of short sentences.",
  outcomes: [
    "Recognise and produce the most common English vowel and consonant sounds.",
    "Place stress correctly in familiar words and names.",
    "Use sentence stress and basic intonation to make meaning clear.",
    "Identify the sounds that need extra practice in your own speech.",
  ],
  practiceNote: {
    title: "Written pronunciation guide only",
    text: "This version does not play audio or analyse your pronunciation. Each lesson uses written descriptions, IPA symbols and respellings so you can practise at your own pace. Speak aloud, use a mirror to check mouth position, and ask a teacher or partner for feedback if you can.",
  },
};
