import type { BlogPost } from "@/data/blog/types";

export const useADictionary: BlogPost = {
  slug: "use-a-dictionary-the-right-way",
  title: "How to Use an English Dictionary the Right Way",
  description:
    "Most learners use a dictionary only to translate. Learn the right way: meanings, example sentences, word family and pronunciation all in one minute.",
  date: "2026-10-21",
  minutes: 5,
  relatedCourseSlug: "essential-500-words",
  blocks: [
    {
      type: "text",
      paragraphs: [
        "When you meet a new English word, what do you do? Most learners search for the Urdu translation, read it, and move on. Two days later the word is gone. A dictionary can do much more than translate — used correctly, one minute with a dictionary can plant a word in your memory permanently.",
      ],
    },
    {
      type: "rules",
      title: "The one-minute dictionary habit",
      items: [
        "Read the meaning in simple English first — the translation second. Simple English definitions stick; translations fade.",
        "Always read the example sentence. A word lives in sentences, not alone.",
        "Notice the pronunciation and stress. Say the word out loud twice before closing the dictionary.",
        "Look at the word family: decide (verb), decision (noun), decisive (adjective). Learn three for the price of one.",
      ],
    },
    {
      type: "examples",
      title: "From one search to five words",
      intro:
        "Here is how the habit turns a single search into real vocabulary growth:",
      items: [
        { text: "comfort (noun) — a feeling of being relaxed and without pain.", note: "Example: These shoes give me comfort." },
        { text: "comfortable (adjective) — giving comfort.", note: "This chair is comfortable. (Stress: COMF-tuh-bul)" },
        { text: "uncomfortable (adjective) — not comfortable.", note: "The question made me uncomfortable." },
        { text: "comfort (verb) — to make someone feel better.", note: "She comforted her crying child." },
      ],
    },
    {
      type: "text",
      title: "Learner's dictionaries are your friend",
      paragraphs: [
        "Standard dictionaries are written for native speakers and use difficult words to explain words. Learner's dictionaries — like the Cambridge and Oxford learner's dictionaries — explain every word with the most common 2,000 English words. If you can read this article, you can read every definition in them.",
      ],
    },
    {
      type: "tip",
      title: "Use your own sentence",
      text: "After reading the example, write one sentence about your own life with the new word. \"My decision today: I will study twenty minutes.\" Your own sentence is the hook that keeps the word in memory.",
    },
    {
      type: "text",
      title: "Quality over quantity",
      paragraphs: [
        "Five words a day, learned this deeply, is thirty-five words a week and nearly two thousand words a year — enough to transform your English. Fifty translated words a day is a number that disappears by the weekend. Slow down, and every word becomes yours.",
      ],
    },
  ],
};
