import type { LessonUnit } from "@/data/lessons/types";

export const a1GrammarUnit3: LessonUnit = {
  title: "Everyday actions",
  description:
    "Talk about routines, habits and facts with the present simple.",
  lessons: [
    {
      slug: "present-simple-i-you-we-they",
      title: "Present simple: I, you, we and they",
      summary:
        "Use the base form of the verb to talk about routines, habits and facts with I, you, we and they.",
      objective:
        "Make affirmative present simple sentences with plural subjects and I.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "When do you do it?",
          paragraphs: [
            "The present simple describes things that happen regularly: routines, habits and facts. It can also describe things that are always or generally true.",
            "With I, you, we and they, use the base form of the verb. The base form is the verb without to: work, live, study, like.",
          ],
        },
        {
          type: "table",
          title: "Base form after I, you, we and they",
          columns: ["Subject", "Verb", "Complete sentence"],
          rows: [
            ["I", "work", "I work in an office."],
            ["You", "live", "You live near the park."],
            ["We", "study", "We study English every evening."],
            ["They", "like", "They like coffee."],
          ],
        },
        {
          type: "examples",
          title: "Routines and facts",
          items: [
            {
              text: "I drink water with breakfast.",
              note: "A daily habit.",
            },
            {
              text: "We visit our grandparents on Sundays.",
              note: "A regular routine. On Sundays tells us how often.",
            },
            {
              text: "They speak Spanish at home.",
              note: "A general fact about them.",
            },
          ],
        },
        {
          type: "rules",
          title: "Useful time expressions",
          items: [
            "every day, every morning, every week",
            "on Mondays, on weekdays, at the weekend",
            "in the morning, in the afternoon, in the evening",
            "once a week, twice a month",
          ],
        },
        {
          type: "tip",
          title: "No am, is or are here",
          text: "Do not use be with an action verb: say \"I work\", not \"I am work\". Use be only when you describe or identify something: I am tired.",
        },
        {
          type: "practice",
          title: "Practice: talk about routines",
          instructions:
            "Complete each sentence with the base form of the verb in brackets.",
          items: [
            {
              prompt: "I ___ (work) from Monday to Friday.",
              answer: "I work from Monday to Friday.",
            },
            {
              prompt: "They ___ (live) in a small town.",
              answer: "They live in a small town.",
            },
            {
              prompt: "We ___ (study) English after dinner.",
              answer: "We study English after dinner.",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l9-q1",
          question: "I ___ coffee every morning.",
          options: ["drinks", "drink", "am drink"],
          correctIndex: 1,
          explanation:
            "With I, use the base form: I drink coffee every morning.",
        },
        {
          id: "l9-q2",
          question: "They ___ near the station.",
          options: ["live", "lives", "are live"],
          correctIndex: 0,
          explanation:
            "They takes the base form: They live near the station.",
        },
        {
          id: "l9-q3",
          question: "Which sentence describes a routine?",
          options: [
            "We are at home now.",
            "We go to the gym every Tuesday.",
            "We are going to the gym tomorrow.",
          ],
          correctIndex: 1,
          explanation:
            "Every Tuesday shows a regular routine, so the present simple is natural here.",
        },
        {
          id: "l9-q4",
          question: "Complete: You ___ English very well.",
          options: ["speaks", "speak", "are speak"],
          correctIndex: 1,
          explanation:
            "With you, use the base form: You speak English very well.",
        },
      ],
    },
    {
      slug: "present-simple-he-she-it",
      title: "Present simple: he, she and it",
      summary:
        "Add -s or -es to the verb when the subject is he, she or it.",
      objective:
        "Use the third-person singular form correctly, including common spelling changes.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "One person, one small change",
          paragraphs: [
            "With he, she and it, the present simple verb usually ends in -s. This is called the third-person singular form.",
            "The meaning is the same as the other present simple forms. Only the verb changes: I work, but she works.",
          ],
        },
        {
          type: "table",
          title: "Spelling the third-person form",
          columns: ["Rule", "Base verb", "Third-person form"],
          rows: [
            ["Most verbs: add -s", "work", "works"],
            ["Verbs ending in -s, -sh, -ch or -x: add -es", "watch", "watches"],
            ["Verbs ending in consonant + y: change y to i and add -es", "study", "studies"],
            ["Common irregular spelling", "go", "goes"],
            ["Common irregular spelling", "have", "has"],
          ],
        },
        {
          type: "examples",
          title: "Third-person routines",
          items: [
            {
              text: "My sister works in a hospital.",
              note: "My sister = she, so work becomes works.",
            },
            {
              text: "He watches films on Friday evenings.",
              note: "Watch ends in -ch, so we add -es.",
            },
            {
              text: "The bus goes to the city centre.",
              note: "Go becomes goes.",
            },
            {
              text: "She has a dog and two cats.",
              note: "Have becomes has.",
            },
          ],
        },
        {
          type: "tip",
          title: "One -s is enough",
          text: "Put -s on the verb, not on the other words: \"She works here\", not \"She works heres\" or \"She work here\".",
        },
        {
          type: "practice",
          title: "Practice: choose the correct form",
          instructions:
            "Complete each sentence. Pay attention to the subject.",
          items: [
            {
              prompt: "My father ___ (start) work at eight.",
              answer: "My father starts work at eight.",
              hint: "My father = he.",
            },
            {
              prompt: "Elena ___ (study) at the library.",
              answer: "Elena studies at the library.",
              hint: "Study ends in consonant + y.",
            },
            {
              prompt: "He ___ (go) to the gym after work.",
              answer: "He goes to the gym after work.",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l10-q1",
          question: "My mother ___ dinner every evening.",
          options: ["cook", "cooks", "cooking"],
          correctIndex: 1,
          explanation:
            "My mother = she, so add -s: My mother cooks dinner every evening.",
        },
        {
          id: "l10-q2",
          question: "He ___ TV after dinner.",
          options: ["watchs", "watches", "watch"],
          correctIndex: 1,
          explanation:
            "Watch ends in -ch, so add -es: He watches TV after dinner.",
        },
        {
          id: "l10-q3",
          question: "Which sentence is correct?",
          options: [
            "She study English every day.",
            "She studies English every day.",
            "She studys English every day.",
          ],
          correctIndex: 1,
          explanation:
            "With she, study changes to studies: change y to i and add -es.",
        },
        {
          id: "l10-q4",
          question: "The café ___ at seven o'clock.",
          options: ["open", "opens", "opening"],
          correctIndex: 1,
          explanation:
            "The café = it, so the verb takes -s: The café opens at seven o'clock.",
        },
      ],
    },
    {
      slug: "do-and-does-questions-negatives",
      title: "Questions and negatives with do and does",
      summary:
        "Use do and does to ask questions and make negative present simple sentences.",
      objective:
        "Form present simple questions, negatives and short answers with do, does, don't and doesn't.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "The helper verbs",
          paragraphs: [
            "To make a present simple question or negative, use do or does as a helper verb. The main verb stays in its base form.",
            "Use do with I, you, we and they. Use does with he, she and it.",
          ],
        },
        {
          type: "table",
          title: "Questions and negatives",
          columns: ["Subject", "Question", "Negative"],
          rows: [
            ["I / you / we / they", "Do you work here?", "I don't work here."],
            ["he / she / it", "Does she work here?", "She doesn't work here."],
            ["I / you / we / they", "Do they like tea?", "They don't like tea."],
            ["he / she / it", "Does he like tea?", "He doesn't like tea."],
          ],
        },
        {
          type: "rules",
          title: "The base form stays the same",
          items: [
            "After do and does, use the base verb: Does she like...? not Does she likes...?",
            "In negatives, don't and doesn't come before the base verb: He doesn't live here.",
            "Short answers repeat the helper: Yes, she does. / No, they don't.",
            "Use do/does for questions, not for affirmative present simple sentences.",
          ],
        },
        {
          type: "examples",
          title: "Everyday questions",
          items: [
            {
              text: "Do you speak French?",
              note: "A simple yes/no question about ability or habit.",
            },
            {
              text: "Does your brother live in London?",
              note: "Your brother = he, so use does.",
            },
            {
              text: "We don't eat meat.",
              note: "Don't + base verb.",
            },
            {
              text: "She doesn't work on Sundays.",
              note: "Doesn't + base verb.",
            },
          ],
        },
        {
          type: "tip",
          title: "Two -s forms do not meet",
          text: "Do not use -s on the main verb after does: \"Does she works\" is incorrect. Say \"Does she work?\"",
        },
        {
          type: "practice",
          title: "Practice: ask and answer",
          instructions:
            "Complete the questions and negative sentences, then reveal the answer.",
          items: [
            {
              prompt: "___ you live near here?",
              answer: "Do you live near here?",
            },
            {
              prompt: "___ he play football?",
              answer: "Does he play football?",
              hint: "He uses does.",
            },
            {
              prompt: "They ___ (not / watch) TV in the morning.",
              answer: "They don't watch TV in the morning.",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l11-q1",
          question: "___ she like coffee?",
          options: ["Do", "Does", "Is"],
          correctIndex: 1,
          explanation:
            "With she, use does + base verb: Does she like coffee?",
        },
        {
          id: "l11-q2",
          question: "They ___ to school on Sundays.",
          options: ["don't go", "doesn't go", "don't goes"],
          correctIndex: 0,
          explanation:
            "With they, use don't + base verb: They don't go to school on Sundays.",
        },
        {
          id: "l11-q3",
          question: "Which question is correct?",
          options: [
            "Does he works in a bank?",
            "Do he work in a bank?",
            "Does he work in a bank?",
          ],
          correctIndex: 2,
          explanation:
            "Use does with he and keep work in the base form: Does he work in a bank?",
        },
        {
          id: "l11-q4",
          question: "Answer: Do you like tea? — Yes, ___.",
          options: ["I like", "I do", "I am"],
          correctIndex: 1,
          explanation:
            "Short answers use the helper verb: Yes, I do. / No, I don't.",
        },
      ],
    },
  ],
};
