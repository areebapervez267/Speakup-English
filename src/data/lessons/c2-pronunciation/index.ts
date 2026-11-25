import type { LessonUnit } from "@/data/lessons/types";

import { c2PronunciationUnit1 } from "./unit-1";
import { c2PronunciationUnit2 } from "./unit-2";
import { c2PronunciationUnit3 } from "./unit-3";
import { c2PronunciationUnit4 } from "./unit-4";

export {
  c2PronunciationUnit1,
  c2PronunciationUnit2,
  c2PronunciationUnit3,
  c2PronunciationUnit4,
};

export const c2PronunciationUnits: LessonUnit[] = [
  c2PronunciationUnit1,
  c2PronunciationUnit2,
  c2PronunciationUnit3,
  c2PronunciationUnit4,
];

export const c2PronunciationMeta = {
  overview:
    "Polished Delivery fine-tunes the final layer of spoken English: the precise control of stress, tone, pace and articulation that makes advanced speech sound clear, intentional and memorable.",
  outcomes: [
    "Articulate complex words and phrases with consistent clarity.",
    "Use advanced prosodic patterns to organise extended speech.",
    "Shape tone and pace to convey confidence and emotion.",
    "Evaluate and refine delivery through focused self-recording.",
  ],
  practiceNote: {
    title: "Rehearse for control, then for communication",
    text: "Use the written IPA and browser-speech models to establish a careful form, then practise the same feature in a new sentence at natural speed. Record full performances on your own device and compare controlled before-and-after takes. Ask listeners which words or moments required effort, and keep one concrete target per cycle. Browser voices vary and the site does not record or score your voice; the goal is repeatable, intelligible delivery that still sounds like you.",
  },
};
