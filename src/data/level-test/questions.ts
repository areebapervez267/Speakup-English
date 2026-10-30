import type { CefrLevelId, SkillId } from "@/data/curriculum";

/**
 * One placement-test item.
 *
 * `level` is the CEFR band the structure is normally taught at, and is what the
 * scoring algorithm uses to place a learner. Four items per band keeps every
 * band equally weighted, so a learner cannot be pushed up a level by answering
 * easy questions well.
 */
export type LevelTestQuestion = {
  id: string;
  level: CefrLevelId;
  skill: SkillId;
  prompt: string;
  options: readonly string[];
  correctIndex: number;
  explanation: string;
};

export const QUESTIONS_PER_LEVEL = 4;

export const levelTestQuestions: readonly LevelTestQuestion[] = [
  {
    id: "a1-1",
    level: "a1",
    skill: "grammar",
    prompt: "My brother ___ a doctor.",
    options: ["am", "is", "are", "be"],
    correctIndex: 1,
    explanation:
      "'My brother' = he, and he/she/it always takes 'is'.",
  },
  {
    id: "a1-2",
    level: "a1",
    skill: "vocabulary",
    prompt: "There are two ___ in my room.",
    options: ["box", "boxs", "boxes", "boxies"],
    correctIndex: 2,
    explanation:
      "Nouns ending in -x take -es in the plural: box → boxes, watch → watches.",
  },
  {
    id: "a1-3",
    level: "a1",
    skill: "grammar",
    prompt: "She ___ to school every day.",
    options: ["go", "going", "goes", "gone"],
    correctIndex: 2,
    explanation:
      "Present simple with he/she/it adds -s or -es: she goes, he watches.",
  },
  {
    id: "a1-4",
    level: "a1",
    skill: "grammar",
    prompt: "I want to buy ___ umbrella.",
    options: ["a", "an", "the", "no article"],
    correctIndex: 1,
    explanation:
      "'An' before a vowel sound: an umbrella, an hour, a university (you-sound).",
  },

  {
    id: "a2-1",
    level: "a2",
    skill: "grammar",
    prompt: "We ___ to Lahore last week.",
    options: ["go", "are going", "went", "gone"],
    correctIndex: 2,
    explanation:
      "Finished time ('last week') needs Past Simple: went. 'Gone' needs has/have.",
  },
  {
    id: "a2-2",
    level: "a2",
    skill: "vocabulary",
    prompt: "How ___ water do you drink every day?",
    options: ["many", "much", "long", "often"],
    correctIndex: 1,
    explanation:
      "Water cannot be counted, so uncountable 'much'. Use 'many' with plural nouns.",
  },
  {
    id: "a2-3",
    level: "a2",
    skill: "grammar",
    prompt: "This exam is ___ than the last one.",
    options: ["easier", "more easier", "easiest", "more easy"],
    correctIndex: 0,
    explanation:
      "Two-syllable adjectives ending in -y change y → ier: easy → easier.",
  },
  {
    id: "a2-4",
    level: "a2",
    skill: "grammar",
    prompt: "I ___ my keys, so I can't open the door now.",
    options: ["lost", "have lost", "lose", "was losing"],
    correctIndex: 1,
    explanation:
      "A past action with a result you can see now takes Present Perfect: have lost.",
  },

  {
    id: "b1-1",
    level: "b1",
    skill: "grammar",
    prompt: "If I ___ more time, I would learn Spanish.",
    options: ["have", "had", "will have", "having"],
    correctIndex: 1,
    explanation:
      "Second conditional: If + past simple, would + verb. 'If I had more time, I would...'",
  },
  {
    id: "b1-2",
    level: "b1",
    skill: "grammar",
    prompt: "This bridge ___ in 2019.",
    options: ["built", "was built", "is built", "has built"],
    correctIndex: 1,
    explanation:
      "The bridge did not build itself — passive past: was built + finished time.",
  },
  {
    id: "b1-3",
    level: "b1",
    skill: "grammar",
    prompt: "She said that she ___ very tired.",
    options: ["is", "was", "had", "be"],
    correctIndex: 1,
    explanation:
      "Reported speech shifts the tense back: 'I am tired' → she said she was tired.",
  },
  {
    id: "b1-4",
    level: "b1",
    skill: "vocabulary",
    prompt: "I'm really good ___ solving problems.",
    options: ["in", "at", "of", "for"],
    correctIndex: 1,
    explanation:
      "Fixed collocation: good at + noun/gerund. Bad at, interested in, afraid of.",
  },

  {
    id: "b2-1",
    level: "b2",
    skill: "grammar",
    prompt: "If they had left earlier, they ___ the flight.",
    options: [
      "would catch",
      "would have caught",
      "had caught",
      "will have caught",
    ],
    correctIndex: 1,
    explanation:
      "Third conditional: If + past perfect, would have + past participle.",
  },
  {
    id: "b2-2",
    level: "b2",
    skill: "grammar",
    prompt: "I wish I ___ more confident when speaking English.",
    options: ["can be", "were", "will be", "had"],
    correctIndex: 1,
    explanation:
      "After 'wish' we use the past subjunctive: I wish I were / he were.",
  },
  {
    id: "b2-3",
    level: "b2",
    skill: "grammar",
    prompt: "___ the email, she waited for a reply.",
    options: ["Having sent", "Sent having", "Having send", "To send"],
    correctIndex: 0,
    explanation:
      "A perfect participle shows which action finished first: Having sent..., then...",
  },
  {
    id: "b2-4",
    level: "b2",
    skill: "vocabulary",
    prompt: "The plan met with ___ opposition from the board.",
    options: ["strong", "heavy", "powerful", "hard"],
    correctIndex: 0,
    explanation:
      "Opposition collocates with 'strong', not 'heavy' or 'hard'. Collocations are what make you sound advanced.",
  },

  {
    id: "c1-1",
    level: "c1",
    skill: "grammar",
    prompt: "Not only ___ the exam, but she also topped the class.",
    options: ["she passed", "did she pass", "passed she", "has she passed"],
    correctIndex: 1,
    explanation:
      "Negative fronting ('Not only...') forces inversion: did she pass, like 'Never have I seen'.",
  },
  {
    id: "c1-2",
    level: "c1",
    skill: "grammar",
    prompt: "The board insisted that the report ___ submitted by Friday.",
    options: ["is", "be", "will be", "was"],
    correctIndex: 1,
    explanation:
      "Mandative subjunctive after insist / demand / recommend: that the report be submitted.",
  },
  {
    id: "c1-3",
    level: "c1",
    skill: "grammar",
    prompt: "She isn't answering her phone. She ___ it on silent.",
    options: [
      "must have put",
      "should put",
      "had to put",
      "might put",
    ],
    correctIndex: 0,
    explanation:
      "A logical deduction about a past action: must have + past participle.",
  },
  {
    id: "c1-4",
    level: "c1",
    skill: "grammar",
    prompt: "It's high time you ___ seriously about your exams.",
    options: ["start", "started", "have started", "will start"],
    correctIndex: 1,
    explanation:
      "'It's (high) time' takes the past form to say something is overdue: it's time you started.",
  },

  {
    id: "c2-1",
    level: "c2",
    skill: "grammar",
    prompt: "___ it not for your advice, I would have declined the offer.",
    options: ["Had", "Were", "If", "Should"],
    correctIndex: 1,
    explanation:
      "'Were it not for' = if it were not for. 'Had' would need 'been': Had it not been for...",
  },
  {
    id: "c2-2",
    level: "c2",
    skill: "grammar",
    prompt: "___ he have known the true cost, he would have reconsidered.",
    options: ["Should", "Would", "Unless", "Provided"],
    correctIndex: 0,
    explanation:
      "Inverted formal conditional: 'Should he have known' = 'If he should have known'.",
  },
  {
    id: "c2-3",
    level: "c2",
    skill: "vocabulary",
    prompt: "His remarks were ___ with contempt.",
    options: ["mixed", "laced", "filled", "joined"],
    correctIndex: 1,
    explanation:
      "'Laced with' is the idiom for something with a strong, usually unpleasant, flavour added: laced with sarcasm / contempt.",
  },
  {
    id: "c2-4",
    level: "c2",
    skill: "vocabulary",
    prompt: "The committee issued a ___ ruling that left no room for appeal.",
    options: ["definite", "decisive", "definitive", "determinate"],
    correctIndex: 2,
    explanation:
      "'Definitive' = final and authoritative. 'Decisive' means settling an outcome, 'definite' means clear — near-synonyms at exactly this level.",
  },
];

export const levelTestQuestionCount = levelTestQuestions.length;
