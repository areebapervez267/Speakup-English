import type { LessonUnit } from "@/data/lessons/types";

import { a1ListeningUnit1 } from "./unit-1";
import { a1ListeningUnit2 } from "./unit-2";
import { a1ListeningUnit3 } from "./unit-3";
import { a1ListeningUnit4 } from "./unit-4";

export const a1ListeningUnits: LessonUnit[] = [
  a1ListeningUnit1,
  a1ListeningUnit2,
  a1ListeningUnit3,
  a1ListeningUnit4,
];

export const a1ListeningMeta = {
  overview:
    "Everyday Listening trains your ear with short, clear situations you meet in daily life. You will hear one idea at a time, learn what to listen for, and build the habit of checking your understanding before moving on.",
  outcomes: [
    "Understand simple greetings, names and personal information in clear speech.",
    "Recognise numbers, times, prices and everyday vocabulary when you hear them.",
    "Follow short conversations about family, routines, food and travel.",
    "Use a simple listening strategy to catch the information you need.",
  ],
  practiceNote: {
    title: "Listening practice with audio",
    text: "Press the ▶ button on any transcript line to hear it spoken, or use Play transcript to hear the whole conversation. Tap Slow for a slower voice. Listen first, then cover the text and answer the questions from memory. Repeat each line aloud, or ask a partner to read one speaker's lines.",
  },
};
