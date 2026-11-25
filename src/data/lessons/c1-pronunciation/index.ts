import type { LessonUnit } from "@/data/lessons/types";

import { c1PronunciationUnit1 } from "./unit-1";
import { c1PronunciationUnit2 } from "./unit-2";
import { c1PronunciationUnit3 } from "./unit-3";
import { c1PronunciationUnit4 } from "./unit-4";

export {
  c1PronunciationUnit1,
  c1PronunciationUnit2,
  c1PronunciationUnit3,
  c1PronunciationUnit4,
};

export const c1PronunciationUnits: LessonUnit[] = [
  c1PronunciationUnit1,
  c1PronunciationUnit2,
  c1PronunciationUnit3,
  c1PronunciationUnit4,
];

export const c1PronunciationMeta = {
  overview:
    "Refine Your Accent helps you shape a clear, confident and professional spoken identity. You will analyse your own speech, refine vowels and consonants, and polish prosody, rhythm and delivery without losing your natural voice.",
  outcomes: [
    "Identify and improve the sounds that most affect clarity.",
    "Use rhythm, linking and weak forms with natural control.",
    "Apply advanced stress and intonation patterns in speech.",
    "Assess and refine your own delivery through recording and feedback.",
  ],
  practiceNote: {
    title: "Use your voice, not just the page",
    text: "IPA, respellings and written guidance show what to aim for, and the lesson audio gives you a browser-speech model. Record your own attempts on your device, compare them with the model, and ask a trusted listener for feedback. Browser voices and accents vary, so treat them as references rather than strict scoring. The site does not record or assess your voice; progress comes from short, focused repetitions in real phrases.",
  },
};
