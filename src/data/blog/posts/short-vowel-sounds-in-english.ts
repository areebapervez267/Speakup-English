import type { BlogPost } from "@/data/blog/types";

export const shortVowelSoundsInEnglish: BlogPost = {
  slug: "short-vowel-sounds-in-english",
  title: "Short Vowel Sounds in English: IPA, Examples and Practice",
  description:
    "Learn English short vowels /ɪ/, /e/ and /æ/ with IPA, practical mouth tips and minimal-pair practice, including common confusions for Urdu and Hindi speakers.",
  date: "2026-11-27",
  minutes: 7,
  relatedCourseSlug: "sounds-of-english",
  blocks: [
    {
      type: "text",
      paragraphs: [
        "Three small vowel sounds make a big difference in English: /ɪ/, /e/ and /æ/. They appear in everyday words such as sit, bed and bad, but many Urdu and Hindi speakers merge two of them or replace one with a sound from their first language. The result is not always misunderstanding, yet it can make listening harder for other people.",
        "IPA, the International Phonetic Alphabet, provides standardized symbols for representing speech sounds. Learning /ɪ/, /e/ and /æ/ helps you check pronunciation without guessing from spelling. Here, / / mark sounds, not letters. First, practise hearing and producing the contrast; clarity matters more than speed.",
      ],
    },
    {
      type: "text",
      title: "1. /ɪ/: a short, relaxed front vowel",
      paragraphs: [
        "For /ɪ/ in ship, sit, fish, big and this, keep your tongue near the front of your mouth but lower and slightly further back than for /iː/ in sheep or seat. Your jaw is only slightly open and your lips relaxed. Keep the sound brief without squeezing it.",
        "A common difficulty is /ɪ/ versus /iː/. Both are front vowels, but /iː/ uses a higher tongue and is usually longer. If ship and sheep sound identical, practise the movement: lower and relax for /ɪ/, then raise for /iː/. Length is a clue, not a stopwatch rule, because consonants also affect vowel duration.",
      ],
    },
    {
      type: "text",
      title: "2. /e/ and /æ/: do not merge bad and bed",
      paragraphs: [
        "For /e/ in bed, pen, ten and red, place your tongue in the front-middle of your mouth. Keep your lips relaxed and open your jaw a little more than for /ɪ/. Keep the sound steady and short, not like the name of the letter A.",
        "For /æ/ in bad, cat, bag and hand, open your mouth wider and lower your front tongue. Many Urdu and Hindi speakers use /e/ or a vowel closer to /a/ because they do not have a separate /æ/. Exaggerate the open jaw at first: bad should feel more open than bed.",
      ],
    },
    {
      type: "table",
      title: "Minimal pairs: one sound changes the word",
      caption:
        "Say each pair slowly, then use it in the example sentence. A minimal pair differs in only one sound.",
      columns: ["Pair", "Contrast", "Example contrast"],
      rows: [
        [
          "ship /ʃɪp/ — sheep /ʃiːp/",
          "/ɪ/ versus /iː/",
          "The ship is near the harbour. / The sheep is in the field.",
        ],
        [
          "sit /sɪt/ — seat /siːt/",
          "/ɪ/ versus /iː/",
          "Please sit here. / This seat is free.",
        ],
        [
          "bad /bæd/ — bed /bed/",
          "/æ/ versus /e/",
          "The food is bad. / The bed is comfortable.",
        ],
      ],
    },
    {
      type: "examples",
      title: "More words for controlled practice",
      intro:
        "Accents vary, so check a learner's dictionary for the variety you are learning.",
      items: [
        {
          text: "/ɪ/: bit, bin, lip, rich, thin, quick",
          note: "Keep the tongue relaxed: 'I picked a ripe peach.'",
        },
        {
          text: "/e/: egg, desk, friend, left, step, well",
          note: "Open the jaw slightly: 'My friend left the desk.'",
        },
        {
          text: "/æ/: apple, black, cat, family, map, plan",
          note: "Use an open jaw: 'The cat sat on the black mat.'",
        },
      ],
    },
    {
      type: "rules",
      title: "A five-minute listening and speaking routine",
      items: [
        "Choose one pair, such as bad and bed. Say each word three times, keeping the jaw movement different.",
        "Cover the meanings and have someone point to or read one word. Identify it before looking.",
        "Say two natural sentences, one with each word. Do not practise only isolated sounds.",
        "Record yourself once, listen for the contrast, and repeat the sentence that was less clear.",
      ],
    },
    {
      type: "text",
      title: "Spelling is not a reliable pronunciation guide",
      paragraphs: [
        "English spelling preserves history, but it does not tell you exactly which vowel to say. The letter i is /aɪ/ in like but /ɪ/ in sit. The u in busy is /ɪ/, while the i in machine is /iː/. Bread and said contain /e/ despite their different letters. These are reasons to learn word pronunciations alongside spelling, not reasons to fear spelling.",
        "When you meet a new word, check its IPA, say the word aloud and use it in a sentence. Spelling can suggest pronunciation, but it cannot overrule the sound recorded for that word.",
      ],
    },
    {
      type: "tip",
      title: "Correct gently and consistently",
      text:
        "If bed comes out as bad, record one sentence containing the word. Compare it with a dictionary pronunciation, adjust your jaw and try again. A few attentive attempts with feedback are more useful than long repetitions that strengthen the same habit.",
    },
    {
      type: "practice",
      title: "Choose the word that fits",
      instructions:
        "Read each sentence and choose between the words given. Then say the completed sentence aloud with attention to its vowel.",
      items: [
        {
          prompt: "The ___ crossed the ocean. (ship / sheep)",
          answer: "The ship crossed the ocean.",
          hint: "A ship carries people or goods across water.",
        },
        {
          prompt: "Please ___ on this chair. (sit / seat)",
          answer: "Please sit on this chair.",
          hint: "This word is the verb.",
        },
        {
          prompt: "I need a ___ near the window. (sit / seat)",
          answer: "I need a seat near the window.",
          hint: "This word is the noun for a place to sit.",
        },
        {
          prompt: "The soup tastes ___. (bad / bed)",
          answer: "The soup tastes bad.",
          hint: "The opposite of good is needed.",
        },
        {
          prompt: "I went to ___ early last night. (bad / bed)",
          answer: "I went to bed early last night.",
          hint: "The sentence is about sleeping.",
        },
      ],
    },
  ],
};
