import {
  cefrLevels,
  getLevel,
  getSkill,
  type CefrLevelId,
  type SkillId,
} from "@/data/curriculum";

export type Course = {
  slug: string;
  title: string;
  summary: string;
  level: CefrLevelId;
  skill: SkillId;
  lessons: number;
  hours: number;
  premium: boolean;
};

type CourseSeed = [
  slug: string,
  skill: SkillId,
  title: string,
  summary: string,
  lessons: number,
  hours: number,
];

const courseSeeds: Record<CefrLevelId, CourseSeed[]> = {
  a1: [
    [
      "grammar-foundations",
      "grammar",
      "Grammar Foundations",
      "Build your first clear sentences with present tenses, articles, plurals and question forms.",
      14,
      7,
    ],
    [
      "everyday-listening",
      "listening",
      "Everyday Listening",
      "Train your ear with clear, slow audio about greetings, numbers, family and daily routines.",
      12,
      6,
    ],
    [
      "first-conversations",
      "speaking",
      "First Conversations",
      "Introduce yourself, ask simple questions and handle everyday exchanges with growing confidence.",
      12,
      6,
    ],
    [
      "sounds-of-english",
      "pronunciation",
      "Sounds of English",
      "Learn English vowel and consonant sounds, word stress and the rhythm of simple sentences.",
      10,
      5,
    ],
    [
      "essential-500-words",
      "vocabulary",
      "Essential 500 Words",
      "Learn the high-frequency words you need for home, food, travel and everyday life.",
      14,
      6,
    ],
    [
      "reading-from-day-one",
      "reading",
      "Reading from Day One",
      "Understand short messages, signs and simple stories with practical reading strategies.",
      12,
      6,
    ],
    [
      "write-your-first-sentences",
      "writing",
      "Write Your First Sentences",
      "Write short messages and personal details with clear, correctly punctuated sentences.",
      10,
      5,
    ],
  ],
  a2: [
    [
      "everyday-grammar",
      "grammar",
      "Everyday Grammar",
      "Use past, present and future forms to talk about routines, plans and recent experiences.",
      14,
      7,
    ],
    [
      "listening-for-daily-life",
      "listening",
      "Listening for Daily Life",
      "Follow everyday conversations, announcements and short stories at a natural, steady pace.",
      12,
      6,
    ],
    [
      "speak-with-ease",
      "speaking",
      "Speak with Ease",
      "Handle shopping, travel and social situations with longer, more natural answers.",
      12,
      6,
    ],
    [
      "clear-sounds-word-stress",
      "pronunciation",
      "Clear Sounds & Word Stress",
      "Strengthen tricky sounds and stress patterns so your meaning is always easy to follow.",
      10,
      5,
    ],
    [
      "vocabulary-for-daily-life",
      "vocabulary",
      "Vocabulary for Daily Life",
      "Expand your word bank for work, health, travel and social situations.",
      14,
      7,
    ],
    [
      "practical-reading",
      "reading",
      "Practical Reading",
      "Read emails, adverts and short articles, and find key information quickly.",
      12,
      6,
    ],
    [
      "messages-and-short-writing",
      "writing",
      "Messages & Short Writing",
      "Write friendly messages, simple emails and short descriptions with confidence.",
      10,
      5,
    ],
  ],
  b1: [
    [
      "confident-grammar",
      "grammar",
      "Confident Grammar",
      "Connect ideas with tenses, conditionals and relative clauses for more natural English.",
      16,
      8,
    ],
    [
      "real-world-listening",
      "listening",
      "Real-World Listening",
      "Understand podcasts, interviews and everyday speech at a more natural pace.",
      14,
      7,
    ],
    [
      "conversation-confidence",
      "speaking",
      "Conversation Confidence",
      "Share opinions, tell stories and keep conversations going with useful strategies.",
      14,
      7,
    ],
    [
      "connected-speech",
      "pronunciation",
      "Connected Speech",
      "Sound more natural with linking, contractions and sentence-level stress and intonation.",
      12,
      6,
    ],
    [
      "topics-that-matter",
      "vocabulary",
      "Topics That Matter",
      "Build flexible vocabulary for news, culture, relationships and the workplace.",
      14,
      7,
    ],
    [
      "read-for-meaning",
      "reading",
      "Read for Meaning",
      "Understand authentic texts, infer meaning and build a faster, more confident reading habit.",
      14,
      7,
    ],
    [
      "everyday-writing",
      "writing",
      "Everyday Writing",
      "Write clear emails, opinions and short reports with a process you can rely on.",
      12,
      6,
    ],
  ],
  b2: [
    [
      "precision-grammar",
      "grammar",
      "Precision Grammar",
      "Refine complex structures, verb patterns and register for accurate, natural expression.",
      16,
      8,
    ],
    [
      "complex-listening",
      "listening",
      "Complex Listening",
      "Follow detailed discussions, lectures and media with varied accents and speed.",
      16,
      8,
    ],
    [
      "fluent-discussions",
      "speaking",
      "Fluent Discussions",
      "Argue a point, negotiate and speak at length with greater fluency and control.",
      16,
      8,
    ],
    [
      "intonation-and-impact",
      "pronunciation",
      "Intonation & Impact",
      "Use rhythm, emphasis and intonation to convey meaning and hold attention.",
      12,
      6,
    ],
    [
      "academic-professional-words",
      "vocabulary",
      "Academic & Professional Words",
      "Master the vocabulary and collocations of study, work and public debate.",
      16,
      8,
    ],
    [
      "critical-reading",
      "reading",
      "Critical Reading",
      "Analyse longer texts, distinguish fact from opinion and respond to arguments.",
      14,
      7,
    ],
    [
      "structured-writing",
      "writing",
      "Structured Writing",
      "Plan and write persuasive essays, reports and professional emails with clarity.",
      14,
      7,
    ],
  ],
  c1: [
    [
      "advanced-grammar-in-context",
      "grammar",
      "Advanced Grammar in Context",
      "Use sophisticated structures with precision, cohesion and awareness of register.",
      18,
      9,
    ],
    [
      "advanced-listening",
      "listening",
      "Advanced Listening",
      "Understand rapid, nuanced speech across accents, contexts and disciplines.",
      18,
      9,
    ],
    [
      "articulate-speaking",
      "speaking",
      "Articulate Speaking",
      "Express complex ideas fluently, handle debate and adapt your language to any audience.",
      18,
      9,
    ],
    [
      "refine-your-accent",
      "pronunciation",
      "Refine Your Accent",
      "Fine-tune rhythm, vowels and prosody for clarity, confidence and professional presence.",
      14,
      7,
    ],
    [
      "nuance-and-collocation",
      "vocabulary",
      "Nuance & Collocation",
      "Choose words with precision, using idiom, collocation and subtle shades of meaning.",
      18,
      9,
    ],
    [
      "advanced-critical-reading",
      "reading",
      "Advanced Critical Reading",
      "Interpret dense texts, implied meaning and argument structure with confidence.",
      16,
      8,
    ],
    [
      "academic-professional-writing",
      "writing",
      "Academic & Professional Writing",
      "Produce well-argued, well-structured writing for academic and professional audiences.",
      16,
      8,
    ],
  ],
  c2: [
    [
      "mastery-grammar",
      "grammar",
      "Mastery Grammar",
      "Command the full grammar system, including rare forms, inversion and stylistic choice.",
      20,
      10,
    ],
    [
      "effortless-listening",
      "listening",
      "Effortless Listening",
      "Understand fast, idiomatic and specialised speech with complete composure.",
      18,
      9,
    ],
    [
      "command-the-conversation",
      "speaking",
      "Command the Conversation",
      "Speak with authority, nuance and impeccable timing across any situation.",
      18,
      9,
    ],
    [
      "polished-delivery",
      "pronunciation",
      "Polished Delivery",
      "Shape a clear, confident delivery with advanced stress, tone and pacing.",
      14,
      7,
    ],
    [
      "precision-and-style",
      "vocabulary",
      "Precision & Style",
      "Use exact, expressive vocabulary and idiomatic language with complete control.",
      18,
      9,
    ],
    [
      "mastering-complex-texts",
      "reading",
      "Mastering Complex Texts",
      "Read ambitious literature, research and commentary with subtle understanding.",
      18,
      9,
    ],
    [
      "writing-with-authority",
      "writing",
      "Writing with Authority",
      "Craft persuasive, elegant prose with a voice that is precise and assured.",
      16,
      8,
    ],
  ],
};

export const courses: Course[] = cefrLevels.flatMap((level) =>
  courseSeeds[level.id].map(
    ([slug, skill, title, summary, lessons, hours]) => ({
      slug,
      title,
      summary,
      level: level.id,
      skill,
      lessons,
      hours,
      premium: level.premium,
    }),
  ),
);

const featuredSlugs = [
  "grammar-foundations",
  "conversation-confidence",
  "complex-listening",
  "academic-professional-writing",
];

export const featuredCourses: Course[] = featuredSlugs
  .map((slug) => courses.find((course) => course.slug === slug))
  .filter((course): course is Course => Boolean(course));

export const totalCourses = courses.length;
export const freeCourseCount = courses.filter((course) => !course.premium).length;
export const premiumCourseCount = courses.length - freeCourseCount;

export function filterCourseList(
  catalog: readonly Course[],
  {
    level,
    skill,
    query,
  }: {
    level?: CefrLevelId | "all";
    skill?: SkillId | "all";
    query?: string;
  },
): Course[] {
  const normalizedQuery = query?.trim().toLowerCase() ?? "";

  return catalog.filter((course) => {
    if (level && level !== "all" && course.level !== level) {
      return false;
    }

    if (skill && skill !== "all" && course.skill !== skill) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const courseLevel = getLevel(course.level);
    const courseSkill = getSkill(course.skill);
    const searchableText = [
      course.title,
      course.summary,
      courseSkill.label,
      courseLevel.label,
      courseLevel.name,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}
