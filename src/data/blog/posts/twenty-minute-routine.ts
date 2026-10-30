import type { BlogPost } from "@/data/blog/types";

export const twentyMinuteRoutine: BlogPost = {
  slug: "20-minute-english-routine",
  title: "A Simple 20-Minute Daily Routine to Learn English",
  description:
    "Busy schedule? Twenty focused minutes a day beats three lazy hours on Sunday. A practical daily routine covering listening, vocabulary and speaking.",
  date: "2026-10-23",
  minutes: 5,
  relatedCourseSlug: "everyday-listening",
  blocks: [
    {
      type: "text",
      paragraphs: [
        "\"I don't have time to learn English\" is the most common excuse — and the least true one. You do not need two free hours a day. You need twenty focused minutes, every day, without exception. Twenty minutes daily is over 120 hours a year, which is more than enough to move from one CEFR level to the next.",
      ],
    },
    {
      type: "text",
      title: "Why daily beats weekend marathons",
      paragraphs: [
        "Memory works through repetition, not through long sessions. Studying three hours on Sunday and nothing for six days means most of Sunday is forgotten by Tuesday. Twenty minutes daily keeps English fresh in your mind every single day, and your brain keeps processing it even after the session ends.",
      ],
    },
    {
      type: "rules",
      title: "The 20-minute routine",
      items: [
        "Minutes 1–5 — Listen: play a short, clear English audio. Do not pause. Just absorb the sounds and the rhythm.",
        "Minutes 6–10 — Repeat: play the same audio again, pausing to repeat each sentence out loud, copying the speaker.",
        "Minutes 11–15 — Learn words: pick three new words. Write one sentence of your own with each, and say the sentences aloud.",
        "Minutes 16–20 — Speak freely: talk about your day in English, out loud, without notes. Simple sentences are perfect.",
      ],
    },
    {
      type: "table",
      title: "Make it stick",
      columns: ["Problem", "Simple fix"],
      rows: [
        ["I forget to do it", "Same time every day — attach it to chai, lunch, or Fajr"],
        ["I miss a day", "Never miss twice. One missed day is an accident; two is a new habit"],
        ["I feel lazy", "Just start the audio. Starting is the only hard part"],
        ["I get bored", "Change the audio topic weekly; keep the routine the same"],
      ],
    },
    {
      type: "tip",
      title: "Track it visibly",
      text: "Put a calendar near your study place and mark a cross on every day you finish your twenty minutes. After two weeks, the chain of crosses becomes its own motivation — you will protect it.",
    },
    {
      type: "text",
      title: "Small promise, big result",
      paragraphs: [
        "The routine only works if the promise stays small. Do not add extra minutes in excitement, and do not skip on busy days. Twenty minutes, every day, for six months — that is how quiet learners become confident speakers.",
      ],
    },
  ],
};
