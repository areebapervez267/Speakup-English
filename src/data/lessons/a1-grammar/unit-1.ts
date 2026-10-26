import type { LessonUnit } from "@/data/lessons/types";

export const a1GrammarUnit1: LessonUnit = {
  title: "Starting with be",
  description:
    "Build your first complete sentences with subject pronouns and the verb be.",
  lessons: [
    {
      slug: "subject-pronouns-and-be",
      title: "Subject pronouns and am, is, are",
      summary:
        "Learn how to name the person or thing you are talking about and connect it to the correct form of be.",
      objective:
        "Use I, you, he, she, it, we and they with am, is and are to make simple sentences.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Why the verb be matters",
          paragraphs: [
            "The verb be is the most common verb in English. We use it to say who someone is, how they feel, where something is and how old someone is.",
            "English verbs change form depending on the subject. With be, you choose am, is or are. The subject is the person or thing you are talking about.",
          ],
        },
        {
          type: "table",
          title: "The forms of be",
          caption: "Contractions are common in speaking and informal writing.",
          columns: ["Subject", "Full form", "Contraction", "Example"],
          rows: [
            ["I", "am", "I'm", "I am a student."],
            ["You", "are", "you're", "You are welcome."],
            ["He", "is", "he's", "He is my brother."],
            ["She", "is", "she's", "She is at work."],
            ["It", "is", "it's", "It is cold today."],
            ["We", "are", "we're", "We are ready."],
            ["They", "are", "they're", "They are at home."],
          ],
        },
        {
          type: "rules",
          title: "Three simple rules",
          items: [
            "Use am only with I: I am tired.",
            "Use is with he, she and it: She is a teacher.",
            "Use are with you, we and they: They are from Spain.",
          ],
        },
        {
          type: "examples",
          title: "Be in everyday sentences",
          items: [
            {
              text: "I'm Ana. I'm from Mexico.",
              note: "Use be to give your name and origin.",
            },
            {
              text: "My parents are at home.",
              note: "\"My parents\" means two people, so we use are.",
            },
            {
              text: "It's Monday today.",
              note: "Use it for days, times, weather and simple facts.",
            },
          ],
        },
        {
          type: "tip",
          title: "One subject is enough",
          text: "Say \"I am a student\" or \"Ana is a student\", not \"I Ana am a student\". English sentences normally need a subject before the verb.",
        },
        {
          type: "practice",
          title: "Practice: choose the right form",
          instructions:
            "Complete each sentence in your head or in a notebook, then reveal the answer.",
          items: [
            {
              prompt: "I ___ a student.",
              answer: "I am a student. (I'm a student.)",
              hint: "The subject is I.",
            },
            {
              prompt: "My brother ___ twelve years old.",
              answer: "My brother is twelve years old.",
              hint: "My brother can be replaced by he.",
            },
            {
              prompt: "We ___ ready to start.",
              answer: "We are ready to start. (We're ready to start.)",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l1-q1",
          question: "My sister ___ a doctor.",
          options: ["am", "is", "are"],
          correctIndex: 1,
          explanation:
            "\"My sister\" is one person, so we use is: My sister is a doctor.",
        },
        {
          id: "l1-q2",
          question: "Which question is correct?",
          options: ["Are you from Brazil?", "You are from Brazil?", "Is you from Brazil?"],
          correctIndex: 0,
          explanation:
            "With you, use are. In a question, are comes before you: Are you from Brazil?",
        },
        {
          id: "l1-q3",
          question: "They ___ at home.",
          options: ["am", "is", "are"],
          correctIndex: 2,
          explanation:
            "They is a plural subject, so it takes are: They are at home.",
        },
        {
          id: "l1-q4",
          question: "Choose the correct contraction of \"She is\".",
          options: ["She's", "Shes", "She are"],
          correctIndex: 0,
          explanation:
            "The contraction of she is is she's. The apostrophe replaces the missing i.",
        },
      ],
    },
    {
      slug: "negatives-with-be",
      title: "Negative sentences with be",
      summary:
        "Say what is not true by adding not after am, is or are.",
      objective:
        "Form clear negative sentences with am not, is not and are not, including contractions.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Put not after the verb",
          paragraphs: [
            "To make a negative sentence with be, add not after am, is or are. The rest of the sentence stays the same.",
            "In everyday English, we usually use contractions: isn't and aren't. With I, the negative contraction is I'm not.",
          ],
        },
        {
          type: "table",
          title: "Affirmative and negative",
          columns: ["Affirmative", "Negative", "Usual contraction"],
          rows: [
            ["I am ready.", "I am not ready.", "I'm not ready."],
            ["You are late.", "You are not late.", "You aren't late."],
            ["He is here.", "He is not here.", "He isn't here."],
            ["It is open.", "It is not open.", "It isn't open."],
            ["We are lost.", "We are not lost.", "We aren't lost."],
            ["They are busy.", "They are not busy.", "They aren't busy."],
          ],
        },
        {
          type: "examples",
          title: "Negative sentences in context",
          items: [
            {
              text: "I'm not hungry, thank you.",
              note: "Do not use amn't. I'm not is the natural form.",
            },
            {
              text: "The café isn't open on Sundays.",
              note: "The café can be replaced by it.",
            },
            {
              text: "We aren't late. The class starts at nine.",
            },
          ],
        },
        {
          type: "tip",
          title: "Word order matters",
          text: "The word not comes directly after be: She is not tired. Do not put not before the verb: \"She not is tired\" is incorrect.",
        },
        {
          type: "practice",
          title: "Practice: make it negative",
          instructions:
            "Rewrite each sentence as a negative sentence. Use contractions where they sound natural.",
          items: [
            {
              prompt: "I am ready.",
              answer: "I am not ready. (I'm not ready.)",
            },
            {
              prompt: "She is at work.",
              answer: "She is not at work. (She isn't at work.)",
            },
            {
              prompt: "They are from Canada.",
              answer: "They are not from Canada. (They aren't from Canada.)",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l2-q1",
          question: "The shop ___ open today.",
          options: ["isn't", "aren't", "amn't"],
          correctIndex: 0,
          explanation:
            "The shop is singular, so use is + not: The shop isn't open today.",
        },
        {
          id: "l2-q2",
          question: "Which sentence is correct?",
          options: [
            "They not are at school.",
            "They aren't at school.",
            "They isn't at school.",
          ],
          correctIndex: 1,
          explanation:
            "They takes are, and not follows the verb: They aren't at school.",
        },
        {
          id: "l2-q3",
          question: "Complete: I ___ tired.",
          options: ["am not", "amn't", "not am"],
          correctIndex: 0,
          explanation:
            "The correct negative form with I is am not, usually contracted to I'm not.",
        },
        {
          id: "l2-q4",
          question: "What is the contraction of \"We are not\"?",
          options: ["We'ren't", "We aren't", "We not are"],
          correctIndex: 1,
          explanation:
            "Replace the o in not with an apostrophe: we are not becomes we aren't.",
        },
      ],
    },
    {
      slug: "questions-with-be",
      title: "Questions and short answers with be",
      summary:
        "Put am, is or are before the subject to ask simple questions and give short answers.",
      objective:
        "Ask yes/no and wh- questions with be, and answer them naturally.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Move be to the front",
          paragraphs: [
            "To make a yes/no question with be, move am, is or are before the subject. The word order changes, but the words stay the same.",
            "For short answers, repeat the subject pronoun. In affirmative short answers, do not use a contraction.",
          ],
        },
        {
          type: "table",
          title: "From statement to question",
          columns: ["Statement", "Question", "Short answer"],
          rows: [
            ["You are a student.", "Are you a student?", "Yes, I am. / No, I'm not."],
            ["She is at home.", "Is she at home?", "Yes, she is. / No, she isn't."],
            ["They are ready.", "Are they ready?", "Yes, they are. / No, they aren't."],
          ],
        },
        {
          type: "rules",
          title: "Wh- questions",
          items: [
            "Use What to ask about a thing: What is this?",
            "Use Where to ask about a place: Where is your brother?",
            "Use Who to ask about a person: Who is she?",
            "The question word comes first, then be, then the subject.",
          ],
        },
        {
          type: "examples",
          title: "Questions you can use today",
          items: [
            {
              text: "Are you from here?",
              note: "A friendly question for meeting someone new.",
            },
            {
              text: "Where is the station?",
              note: "Use this when you need directions.",
            },
            {
              text: "Is the lesson online?",
              note: "The answer can be: Yes, it is. or No, it isn't.",
            },
          ],
        },
        {
          type: "tip",
          title: "Don't contract a positive short answer",
          text: "Say \"Yes, I am\", not \"Yes, I'm\". A contraction needs another word after it, as in \"I'm ready\".",
        },
        {
          type: "practice",
          title: "Practice: ask the question",
          instructions:
            "Change each statement into a question. Then practise a short answer out loud.",
          items: [
            {
              prompt: "She is a teacher.",
              answer: "Is she a teacher? — Yes, she is. / No, she isn't.",
            },
            {
              prompt: "They are at the airport.",
              answer: "Are they at the airport? — Yes, they are. / No, they aren't.",
            },
            {
              prompt: "Where / your brother / is",
              answer: "Where is your brother?",
              hint: "Put the question word first, then be, then the subject.",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l3-q1",
          question: "Which is the correct question?",
          options: [
            "Is your sister at home?",
            "Your sister is at home?",
            "At home is your sister?",
          ],
          correctIndex: 0,
          explanation:
            "In a yes/no question, is comes before the subject: Is your sister at home?",
        },
        {
          id: "l3-q2",
          question: "Answer: Are you a teacher?",
          options: ["Yes, I'm.", "No, I not.", "No, I'm not."],
          correctIndex: 2,
          explanation:
            "A positive short answer is \"Yes, I am\". The negative answer can be \"No, I'm not\" or \"No, I am not\".",
        },
        {
          id: "l3-q3",
          question: "___ is your favourite colour?",
          options: ["Where", "What", "Who"],
          correctIndex: 1,
          explanation:
            "We ask about a thing (a colour) with what: What is your favourite colour?",
        },
        {
          id: "l3-q4",
          question: "Complete the short answer: Is it cold? — Yes, ___.",
          options: ["it is", "it's", "is it"],
          correctIndex: 0,
          explanation:
            "Short answers follow the order yes + pronoun + be: Yes, it is.",
        },
      ],
    },
    {
      slug: "a-an-and-plural-nouns",
      title: "A, an and plural nouns",
      summary:
        "Use a and an with singular nouns, and form regular plurals with -s and -es.",
      objective:
        "Choose a or an correctly and write the plural of common singular nouns.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "One thing, or more than one?",
          paragraphs: [
            "Use a or an before a singular noun when you are talking about one of many things. Use an before a vowel sound and a before a consonant sound.",
            "To talk about more than one thing, use a plural noun. Most regular plurals end in -s. Some add -es.",
          ],
        },
        {
          type: "table",
          title: "A or an?",
          columns: ["Article", "Use it before", "Examples"],
          rows: [
            ["a", "a consonant sound", "a book, a pen, a car, a teacher"],
            ["an", "a vowel sound", "an apple, an email, an orange, an idea"],
          ],
        },
        {
          type: "rules",
          title: "Regular plural spelling",
          items: [
            "Add -s to most nouns: book → books, chair → chairs.",
            "Add -es after s, sh, ch and x: bus → buses, box → boxes, watch → watches.",
            "For a consonant + y, change y to i and add -es: city → cities, baby → babies.",
            "Use a or an with singular nouns only, not with plurals.",
          ],
        },
        {
          type: "examples",
          title: "Singular and plural in context",
          items: [
            {
              text: "There is an orange on the table.",
              note: "One orange, beginning with a vowel sound.",
            },
            {
              text: "I have two brothers and one sister.",
              note: "\"Brothers\" is plural because there are two.",
            },
            {
              text: "She works in a hospital with three doctors.",
              note: "Use a for one hospital and no article before the plural doctors.",
            },
          ],
        },
        {
          type: "tip",
          title: "Listen to the sound",
          text: "The article depends on the first sound, not just the first letter. Most words are regular, so start with the sound you hear: an email, a message.",
        },
        {
          type: "practice",
          title: "Practice: one or many",
          instructions:
            "Choose the correct article or plural form. Say your answer aloud before revealing it.",
          items: [
            {
              prompt: "I need ___ umbrella.",
              answer: "I need an umbrella.",
              hint: "\"Umbrella\" starts with a vowel sound.",
            },
            {
              prompt: "She has two ___ (cat).",
              answer: "She has two cats.",
            },
            {
              prompt: "These are ___ (box).",
              answer: "These are boxes.",
              hint: "Add -es after x.",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l4-q1",
          question: "I would like ___ apple.",
          options: ["a", "an", "the two"],
          correctIndex: 1,
          explanation:
            "Apple starts with a vowel sound, so use an: an apple.",
        },
        {
          id: "l4-q2",
          question: "What is the plural of \"glass\"?",
          options: ["glasss", "glasses", "glassies"],
          correctIndex: 1,
          explanation:
            "Add -es after -ss: glass becomes glasses.",
        },
        {
          id: "l4-q3",
          question: "Which sentence is correct?",
          options: [
            "She has three childs.",
            "She has three children.",
            "She has three a children.",
          ],
          correctIndex: 1,
          explanation:
            "Child is an irregular noun; its plural is children. We do not use a before plurals.",
        },
        {
          id: "l4-q4",
          question: "What is the plural of \"city\"?",
          options: ["citys", "cities", "cityes"],
          correctIndex: 1,
          explanation:
            "For consonant + y, change y to i and add -es: city → cities.",
        },
      ],
    },
  ],
};
