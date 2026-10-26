import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1PronunciationUnit3: LessonUnit = {
  title: "Sentence rhythm",
  description:
    "Stress the words that carry meaning and use intonation to show the shape of a question.",
  lessons: [
    {
      slug: "stressed-words-in-sentences",
      title: "Stressed words in sentences",
      summary:
        "Give the strong beat to the words that carry the message.",
      objective:
        "Identify content words that carry stress and reduce small grammar words in a sentence.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "English has a beat",
          paragraphs: [
            "In English, not every word is equally strong. Content words — nouns, main verbs, adjectives and question words — usually carry the main beat. Small grammar words — articles, pronouns, prepositions and auxiliary verbs — are usually weaker and quicker.",
            "This is why English can sound fast to a beginner: the small words almost disappear between the strong ones. You do not need to say every word with the same strength.",
          ],
        },
        {
          type: "examples",
          title: "Listen for the strong words",
          intro: "CAPITALS show the words that usually carry the main beat.",
          items: [
            {
              text: "I WANT to GO to the MARKET.",
              note: "Want, go and market are strong. I, to and the are weak.",
            },
            {
              text: "She LIKES her NEW JACKET.",
              note: "Likes, new and jacket carry the message. Her is weak.",
            },
            {
              text: "Do you WANT some COFFEE?",
              note: "The question is mainly about want and coffee.",
            },
          ],
        },
        {
          type: "table",
          title: "Strong or weak?",
          columns: ["Usually strong", "Usually weak", "Examples"],
          rows: [
            ["Nouns", "Articles", "MARKET, COFFEE / the, a"],
            ["Main verbs", "Auxiliary verbs", "WANT, GO / do, is"],
            ["Adjectives", "Pronouns", "NEW, SMALL / her, it"],
            ["Question words", "Prepositions", "WHERE, WHEN / to, at"],
          ],
          caption: "A speaker can stress a small word for contrast, but the usual pattern follows meaning.",
        },
        {
          type: "exercise",
          title: "Find the strong words",
          instructions:
            "Choose the option that shows the natural main stress. Say the sentence aloud.",
          items: [
            c(
              "Which words usually carry the main stress in “I want to go to the market”?",
              ["want, go, market", "I, to, the", "every word equally"],
              0,
              "Want, go and market are content words. I, to and the are weak grammar words.",
            ),
            c(
              "Which word is usually weak in “She likes her new jacket”?",
              ["her", "likes", "new"],
              0,
              "Her is a possessive pronoun and is usually weak. Likes, new and jacket carry the message.",
            ),
            c(
              "Which sentence has a natural English rhythm?",
              ["I WANT to GO to the MARKET.", "I WANT to GO to THE MARKET.", "I want TO go TO the market."],
              0,
              "The content words want, go and market are strong; the grammar words stay weak.",
            ),
            c(
              "Which of these is a content word?",
              ["market", "the", "to"],
              0,
              "Market is a noun, so it is a content word. The and to are grammar words.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise sentence rhythm",
          instructions:
            "Say each sentence with a clear beat, then reveal the guidance.",
          items: [
            p(
              "Say “I need a new phone” with stress on the content words.",
              "Model: I NEED a NEW PHONE. The article a stays weak.",
              "Do not stress every word.",
            ),
            p(
              "Identify the weak words in “We live in a small house.”",
              "We, in and a are weak. Live, small and house are stronger.",
              "Grammar words are usually quick and light.",
            ),
            p(
              "Make a sentence about your day and mark the strong words.",
              "Model: I START work at NINE and FINISH at FIVE.",
              "Stress the verbs and the times, not at.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which type of word usually carries the main stress?",
          ["Content words such as nouns and verbs", "Articles such as the and a", "Prepositions such as to and at"],
          0,
          "Content words carry the main meaning and usually carry the beat.",
        ),
        q(
          2,
          "Which word is usually weak in “I need a new phone”?",
          ["a", "need", "new"],
          0,
          "The article a is usually weak. Need, new and phone carry the message.",
        ),
        q(
          3,
          "Which sentence has natural stress?",
          ["We LIVE in a SMALL HOUSE.", "WE LIVE IN A SMALL HOUSE.", "We live IN a small HOUSE."],
          0,
          "The content words live, small and house are strong; the grammar words stay weak.",
        ),
        q(
          4,
          "Which word is strongest in “Where do you WORK?”",
          ["work", "do", "you"],
          0,
          "Work is the main verb and carries the message. Do and you are weak grammar words.",
        ),
      ],
    },
    {
      slug: "intonation-in-questions",
      title: "Intonation in questions",
      summary:
        "Use a rising tune for yes/no questions and a falling tune for wh- questions.",
      objective:
        "Recognise and use two common question intonation patterns.",
      minutes: 25,
      blocks: [
        {
          type: "sound",
          title: "Two question tunes",
          sound: "Rising ↗ and falling ↘",
          guidance:
            "Your voice can move up or down at the end of a question. A yes/no question often rises: Are you ready? ↗ A wh- question often falls: Where are you from? ↘ Keep the movement gentle; you do not need a big jump.",
          words: [
            { word: "Are you ready? ↗", respelling: "rising", example: "The voice moves up at the end." },
            { word: "Do you like tea? ↗", respelling: "rising", example: "The answer will be yes or no." },
            { word: "Where are you from? ↘", respelling: "falling", example: "The question word asks for information." },
            { word: "What time is it? ↘", respelling: "falling", example: "The voice moves down at the end." },
          ],
        },
        {
          type: "table",
          title: "Question types and tunes",
          columns: ["Question type", "Example", "Usual movement"],
          rows: [
            ["Yes/no question", "Are you a student? ↗", "Rising"],
            ["Yes/no question", "Do you like coffee? ↗", "Rising"],
            ["Wh- question", "Where do you live? ↘", "Falling"],
            ["Wh- question", "What do you do? ↘", "Falling"],
          ],
          caption: "Intonation can change with feeling and accent. These are useful default patterns.",
        },
        {
          type: "tip",
          title: "The answer helps you choose",
          text: "If the answer is yes or no, the question usually rises. If the answer is a piece of information — a place, a time, a name — the question usually falls. Ask yourself what kind of answer you expect.",
        },
        {
          type: "exercise",
          title: "Choose the tune",
          instructions:
            "Choose the usual intonation pattern for each question. Say it aloud.",
          items: [
            c(
              "How does the voice usually move in “Do you like tea?”",
              ["Rising ↗", "Falling ↘", "No movement"],
              0,
              "Do you like tea? is a yes/no question, so the voice usually rises at the end.",
            ),
            c(
              "How does the voice usually move in “Where are you from?”",
              ["Falling ↘", "Rising ↗", "It stays flat"],
              0,
              "Where are you from? is a wh- question, so the voice usually falls.",
            ),
            c(
              "How does the voice usually move in “Are you ready?”",
              ["Rising ↗", "Falling ↘", "It rises, then falls"],
              0,
              "Are you ready? is a yes/no question, so it usually rises.",
            ),
            c(
              "How does the voice usually move in “What time is it?”",
              ["Falling ↘", "Rising ↗", "It stays flat"],
              0,
              "What time is it? is a wh- question, so it usually falls.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise question tunes",
          instructions:
            "Say each question aloud with the tune, then check the guidance.",
          items: [
            p(
              "Say “Do you have a pen?” with a rising tune.",
              "Model: Do you have a PEN? ↗ Let your voice rise gently at the end.",
              "The answer will be yes or no.",
            ),
            p(
              "Say “Where is the station?” with a falling tune.",
              "Model: Where is the STA-tion? ↘ Let your voice fall at the end.",
              "The answer is a place.",
            ),
            p(
              "Make one yes/no question and one wh- question, then say them with the tunes.",
              "Model: Are you a student? ↗ / What do you study? ↘",
              "Ask yourself what kind of answer you expect.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "How does “Is she a teacher?” usually end?",
          ["With a rising voice ↗", "With a falling voice ↘", "With no change"],
          0,
          "Is she a teacher? is a yes/no question, so it usually rises.",
        ),
        q(
          2,
          "How does “How old are you?” usually end?",
          ["With a falling voice ↘", "With a rising voice ↗", "It stays flat"],
          0,
          "How old are you? is a wh- question, so it usually falls.",
        ),
        q(
          3,
          "Which question usually rises?",
          ["Do you have a pen?", "What is your name?", "Where do you live?"],
          0,
          "Do you have a pen? is a yes/no question, so it usually rises.",
        ),
        q(
          4,
          "Which question usually falls?",
          ["When does it start?", "Are you free?", "Do you like it?"],
          0,
          "When does it start? is a wh- question, so it usually falls.",
        ),
      ],
    },
  ],
};
