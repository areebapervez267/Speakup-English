import type { BlogPost } from "@/data/blog/types";

export const englishWithoutGrammarFear: BlogPost = {
  slug: "english-without-grammar-fear",
  title: "Learn English Without the Fear of Grammar",
  description:
    "Grammar rules should help you speak English, not stop you. Learn why fear of mistakes slows you down and how to build grammar naturally through patterns.",
  date: "2026-10-25",
  minutes: 5,
  relatedCourseSlug: "grammar-foundations",
  blocks: [
    {
      type: "text",
      paragraphs: [
        "Ask a hundred English learners what scares them most and most will say one word: grammar. Tenses, articles, prepositions — the list feels endless, and every mistake feels like failure. But here is the secret good speakers know: children do not study grammar rules, and they become fluent. You can use the same natural path.",
      ],
    },
    {
      type: "text",
      title: "Rules describe the language — they do not create it",
      paragraphs: [
        "A grammar rule is a description of what people actually say. Native speakers do not think \"subject plus verb plus object\" before they open their mouths. They speak in ready-made patterns they have heard thousands of times. You can learn English the same way: collect patterns first, understand rules later.",
      ],
    },
    {
      type: "examples",
      title: "Learn patterns, not rules",
      intro:
        "Instead of memorizing the rule for the present continuous, learn whole sentence patterns you can reuse immediately:",
      items: [
        { text: "I am + verb-ing → I am learning English.", note: "What are you doing right now?" },
        { text: "Do you + verb → Do you speak Urdu?", note: "Yes/No questions without worrying about tenses" },
        { text: "I have been + verb-ing → I have been waiting for an hour.", note: "Actions that started in the past and continue now" },
      ],
    },
    {
      type: "rules",
      title: "How to build grammar naturally",
      items: [
        "Learn one new sentence pattern each day and use it out loud in five of your own sentences.",
        "Read and listen more than you study rules — patterns enter your memory through repeated exposure.",
        "Make mistakes on purpose. Say the wrong version, hear why it feels wrong, and the correct form sticks.",
        "Study one small rule at a time only when a real sentence confuses you.",
      ],
    },
    {
      type: "tip",
      title: "Fluency first, accuracy second",
      text: "When you speak, your first job is to keep going. Stopping to build a perfect sentence kills your fluency. Speak, make mistakes, then notice and fix them later. Accuracy grows from fluency, not the other way around.",
    },
    {
      type: "text",
      title: "Where rules DO help",
      paragraphs: [
        "This does not mean grammar is useless. Rules become powerful after you already use the pattern. When you notice \"I am agree\" feels wrong and then learn that agree is a verb — that rule will stay with you forever, because it answers a real question you had.",
        "So keep grammar as your friendly reference, not your strict teacher. Use it to understand what you hear and to polish what you already say.",
      ],
    },
  ],
};
