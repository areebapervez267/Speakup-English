import type { LessonUnit } from "@/data/lessons/types";

import { c2SpeakingUnit1 } from "./unit-1";
import { c2SpeakingUnit2 } from "./unit-2";
import { c2SpeakingUnit3 } from "./unit-3";
import { c2SpeakingUnit4 } from "./unit-4";

export const c2SpeakingUnits: LessonUnit[] = [
  c2SpeakingUnit1,
  c2SpeakingUnit2,
  c2SpeakingUnit3,
  c2SpeakingUnit4,
];

export const c2SpeakingMeta = {
  overview:
    "Command the Conversation is an advanced speaking course for people who need to perform at the highest level. You will refine authority, timing, diplomacy and rhetorical control across negotiation, leadership, media and public discussion.",
  outcomes: [
    "Lead complex conversations with authority and sensitivity.",
    "Use rhetoric, humour and timing to shape how a message lands.",
    "Navigate disagreement, crisis and high-pressure questioning.",
    "Adapt your voice across professional, public and intercultural settings.",
  ],
  practiceNote: {
    title: "Rehearse for pressure, not perfection",
    text: "This course does not record or score your speaking. Rehearse aloud, record timed performances and invite another person to challenge your position. Keep an earlier version, note one observable weakness and repeat the passage with a single targeted change so that improvement becomes repeatable under pressure.",
  },
};
