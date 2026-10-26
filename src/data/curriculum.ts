export type CefrLevelId = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

export type SkillId =
  | "grammar"
  | "listening"
  | "speaking"
  | "pronunciation"
  | "vocabulary"
  | "reading"
  | "writing";

export type CefrLevel = {
  id: CefrLevelId;
  label: string;
  name: string;
  summary: string;
  premium: boolean;
};

export type Skill = {
  id: SkillId;
  label: string;
  summary: string;
};

export const cefrLevels: CefrLevel[] = [
  {
    id: "a1",
    label: "A1",
    name: "Beginner",
    summary:
      "Introduce yourself, ask simple questions and understand everyday words and phrases.",
    premium: false,
  },
  {
    id: "a2",
    label: "A2",
    name: "Elementary",
    summary:
      "Handle routine conversations, travel with confidence and write simple messages.",
    premium: false,
  },
  {
    id: "b1",
    label: "B1",
    name: "Intermediate",
    summary:
      "Discuss experiences, give opinions and follow clear audio and written texts.",
    premium: false,
  },
  {
    id: "b2",
    label: "B2",
    name: "Upper intermediate",
    summary:
      "Debate complex topics, read demanding texts and write with clear structure.",
    premium: false,
  },
  {
    id: "c1",
    label: "C1",
    name: "Advanced",
    summary:
      "Express ideas fluently and adapt your English to academic and professional life.",
    premium: true,
  },
  {
    id: "c2",
    label: "C2",
    name: "Proficient",
    summary:
      "Understand nuance and register, and use English with near-native precision.",
    premium: true,
  },
];

export const skills: Skill[] = [
  {
    id: "grammar",
    label: "Grammar",
    summary:
      "Build accurate sentences with clear rules, examples and meaningful practice.",
  },
  {
    id: "listening",
    label: "Listening",
    summary:
      "Train your ear for real English, from clear everyday audio to natural speech.",
  },
  {
    id: "speaking",
    label: "Speaking",
    summary:
      "Find the words and the confidence to take part in real conversations.",
  },
  {
    id: "pronunciation",
    label: "Pronunciation",
    summary:
      "Shape clearer sounds, rhythm and intonation so you are easy to understand.",
  },
  {
    id: "vocabulary",
    label: "Vocabulary",
    summary:
      "Learn the words that matter, with the collocations and context to use them well.",
  },
  {
    id: "reading",
    label: "Reading",
    summary:
      "Read with purpose and confidence, from short messages to demanding texts.",
  },
  {
    id: "writing",
    label: "Writing",
    summary:
      "Write clearly and naturally for everyday, academic and professional situations.",
  },
];

export function getLevel(id: CefrLevelId): CefrLevel {
  const level = cefrLevels.find((item) => item.id === id);

  if (!level) {
    throw new Error(`Unknown CEFR level: ${id}`);
  }

  return level;
}

export function getSkill(id: SkillId): Skill {
  const skill = skills.find((item) => item.id === id);

  if (!skill) {
    throw new Error(`Unknown skill: ${id}`);
  }

  return skill;
}

export function isCefrLevelId(value: string | undefined): value is CefrLevelId {
  return cefrLevels.some((level) => level.id === value);
}

export function isSkillId(value: string | undefined): value is SkillId {
  return skills.some((skill) => skill.id === value);
}
