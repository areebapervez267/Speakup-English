import type { LessonUnit } from "@/data/lessons/types";

export const a1GrammarUnit4: LessonUnit = {
  title: "Describing your world",
  description:
    "Add detail to your sentences and put everything together in a personal introduction.",
  lessons: [
    {
      slug: "adjectives-and-word-order",
      title: "Adjectives and word order",
      summary:
        "Describe people, places and things with adjectives in the right position.",
      objective:
        "Place adjectives before nouns or after be, and avoid common adjective mistakes.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "What is it like?",
          paragraphs: [
            "Adjectives describe nouns. They can tell us about size, colour, age, opinion or feeling: a small house, a red car, an interesting book.",
            "In English, an adjective can go before a noun or after the verb be. The adjective does not change for singular or plural nouns.",
          ],
        },
        {
          type: "table",
          title: "Two positions for adjectives",
          columns: ["Position", "Pattern", "Example"],
          rows: [
            ["Before a noun", "adjective + noun", "a quiet street"],
            ["After be", "subject + be + adjective", "The street is quiet."],
            ["With a plural noun", "adjective + plural noun", "quiet streets"],
            ["After be, plural", "subject + are + adjective", "The streets are quiet."],
          ],
        },
        {
          type: "rules",
          title: "Three useful rules",
          items: [
            "Do not add -s to an adjective: two big houses, not two bigs houses.",
            "Put the adjective before the noun in English: a blue jacket, not a jacket blue.",
            "When you use be, the adjective comes after it: The jacket is blue.",
            "With more than one adjective, use a natural order. For A1, keep it simple: opinion + size/colour + noun, as in a lovely small town.",
          ],
        },
        {
          type: "examples",
          title: "Everyday descriptions",
          items: [
            {
              text: "We live in a quiet neighbourhood.",
              note: "Quiet describes the neighbourhood before the noun.",
            },
            {
              text: "The soup is hot.",
              note: "After be, the adjective describes the soup.",
            },
            {
              text: "My new shoes are comfortable.",
              note: "New comes before shoes. Comfortable comes after are.",
            },
          ],
        },
        {
          type: "tip",
          title: "Adjectives are friendly",
          text: "Adjectives do not change with he, she or they. Say \"She is happy\" and \"They are happy\". Only the verb be changes.",
        },
        {
          type: "practice",
          title: "Practice: put the words in order",
          instructions:
            "Arrange the words into a correct sentence, then reveal the answer.",
          items: [
            {
              prompt: "a / red / car / I have",
              answer: "I have a red car.",
            },
            {
              prompt: "is / the / room / small",
              answer: "The room is small.",
            },
            {
              prompt: "are / shoes / my / new",
              answer: "My shoes are new.",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l12-q1",
          question: "Choose the correct phrase.",
          options: ["a beautiful garden", "a garden beautiful", "a beautifuls garden"],
          correctIndex: 0,
          explanation:
            "In English, the adjective comes before the noun: a beautiful garden.",
        },
        {
          id: "l12-q2",
          question: "The coffee ___ very hot.",
          options: ["are", "is", "be"],
          correctIndex: 1,
          explanation:
            "Coffee is singular, so use is: The coffee is very hot.",
        },
        {
          id: "l12-q3",
          question: "Which sentence is correct?",
          options: [
            "I have two new books.",
            "I have two news books.",
            "I have two books new.",
          ],
          correctIndex: 0,
          explanation:
            "Adjectives do not take -s, and they come before the noun: two new books.",
        },
        {
          id: "l12-q4",
          question: "They are ___.",
          options: ["tired", "tireds", "a tired"],
          correctIndex: 0,
          explanation:
            "Use the adjective without an article after be: They are tired.",
        },
      ],
    },
    {
      slug: "in-on-at-time-and-place",
      title: "In, on and at for time and place",
      summary:
        "Choose the right preposition for clocks, days, months, surfaces and places.",
      objective:
        "Use in, on and at accurately in common time and place expressions.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Three small words, many uses",
          paragraphs: [
            "In, on and at are prepositions. We use them to talk about time and place. Each one has a general pattern, but some expressions simply need to be learned as phrases.",
            "Start with the common patterns and build your collection of phrases one by one.",
          ],
        },
        {
          type: "table",
          title: "At, on and in for time",
          columns: ["Preposition", "Use", "Examples"],
          rows: [
            ["at", "a clock time or a precise point", "at seven o'clock, at noon, at night"],
            ["on", "days and dates", "on Monday, on 12 May, on my birthday"],
            ["in", "months, years, seasons and parts of the day", "in July, in 2026, in winter, in the morning"],
          ],
        },
        {
          type: "table",
          title: "At, on and in for place",
          columns: ["Preposition", "Use", "Examples"],
          rows: [
            ["at", "a point or particular place", "at the bus stop, at home, at work"],
            ["on", "a surface", "on the table, on the wall, on the floor"],
            ["in", "inside something or within an area", "in the box, in London, in the car"],
          ],
        },
        {
          type: "examples",
          title: "Prepositions in everyday sentences",
          items: [
            {
              text: "The meeting starts at nine o'clock on Monday.",
              note: "At a clock time, on a day.",
            },
            {
              text: "My birthday is in June.",
              note: "In a month.",
            },
            {
              text: "Your keys are on the table.",
              note: "On a surface.",
            },
            {
              text: "We are at the station now.",
              note: "At a particular place.",
            },
          ],
        },
        {
          type: "tip",
          title: "Learn the whole phrase",
          text: "Prepositions can be tricky because languages group them differently. Learn useful phrases as a unit: at home, on Monday, in the morning.",
        },
        {
          type: "practice",
          title: "Practice: choose in, on or at",
          instructions:
            "Complete each sentence with the correct preposition.",
          items: [
            {
              prompt: "The film starts ___ eight o'clock.",
              answer: "The film starts at eight o'clock.",
            },
            {
              prompt: "We have lunch ___ Sunday.",
              answer: "We have lunch on Sunday.",
            },
            {
              prompt: "The cat is ___ the sofa.",
              answer: "The cat is on the sofa.",
              hint: "The sofa is a surface.",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l13-q1",
          question: "My English class is ___ Monday.",
          options: ["at", "on", "in"],
          correctIndex: 1,
          explanation:
            "Use on with days: on Monday.",
        },
        {
          id: "l13-q2",
          question: "The meeting begins ___ 10:30.",
          options: ["at", "on", "in"],
          correctIndex: 0,
          explanation:
            "Use at with a clock time: at 10:30.",
        },
        {
          id: "l13-q3",
          question: "The books are ___ the shelf.",
          options: ["at", "on", "in"],
          correctIndex: 1,
          explanation:
            "A shelf is a surface, so use on: on the shelf.",
        },
        {
          id: "l13-q4",
          question: "We often visit family ___ July.",
          options: ["at", "on", "in"],
          correctIndex: 2,
          explanation:
            "Use in with months: in July.",
        },
      ],
    },
    {
      slug: "putting-it-together",
      title: "Putting it together: your introduction",
      summary:
        "Combine be, have, the present simple, adjectives and prepositions in a short personal introduction.",
      objective:
        "Write and say a clear introduction using the grammar from this course.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Your first complete text",
          paragraphs: [
            "A personal introduction is a useful way to practise the grammar you have learned. You can give your name, where you are from, information about your family and work or studies, your routines and your interests.",
            "You do not need long sentences. Five clear sentences can introduce you very well.",
          ],
        },
        {
          type: "examples",
          title: "A model introduction",
          intro:
            "Read this original example and notice how the different grammar points work together.",
          items: [
            {
              text: "Hello. My name is Maya, and I'm from a small city in Canada.",
              note: "Be: name and origin. My is a possessive adjective.",
            },
            {
              text: "I live with my husband and our two children.",
              note: "Present simple: live. Our is a possessive adjective.",
            },
            {
              text: "I work in a library, and my husband works at a hospital.",
              note: "Work works and works show the third-person -s.",
            },
            {
              text: "We don't have a car, so we take the bus every day.",
              note: "A negative with don't and a routine with every day.",
            },
            {
              text: "Our neighbourhood is quiet and friendly, and there is a park near our home.",
              note: "Adjectives after be, and there is for a place.",
            },
          ],
        },
        {
          type: "rules",
          title: "A simple structure you can reuse",
          items: [
            "Sentence 1: Say your name and where you are from. Use be.",
            "Sentence 2: Talk about the people you live with or your family. Use have or live with.",
            "Sentence 3: Talk about work or study. Use the present simple.",
            "Sentence 4: Talk about a routine or a like. Use the present simple and a time phrase.",
            "Sentence 5: Describe your home, town or an important place. Use an adjective and there is or there are.",
          ],
        },
        {
          type: "tip",
          title: "Check your work slowly",
          text: "Check the subject and verb in every sentence. Look for am, is or are after be, -s with he, she and it, and the base form after do, don't and doesn't.",
        },
        {
          type: "practice",
          title: "Practice: write your introduction",
          instructions:
            "Write five sentences about yourself. Use the model above as a guide, but change the details. Reveal the checklist to review your writing.",
          items: [
            {
              prompt:
                "Write 4–5 sentences: your name, where you are from, your family, your routine and your home or town.",
              answer:
                "A good answer uses: My name is... / I'm from... / I have... or I live with... / I ... every day. / My town is... and there is/are... . Check that each sentence has a subject and a verb.",
              hint: "Start each sentence with I, We, My or There.",
            },
            {
              prompt: "Read your text again. Find one sentence with be and one with the present simple.",
              answer:
                "Example: \"My name is Ana\" uses be. \"I work in a shop\" uses the present simple.",
            },
            {
              prompt: "Check whether any third-person verb needs -s. Ask: is the subject he, she or it?",
              answer:
                "For example, \"My brother lives in Madrid\" needs lives because my brother = he. \"My parents live in Madrid\" does not need -s because my parents = they.",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l14-q1",
          question: "Hi, I ___ Maya and I'm from Canada.",
          options: ["am", "is", "are"],
          correctIndex: 0,
          explanation:
            "Use am with I: I am Maya.",
        },
        {
          id: "l14-q2",
          question: "My sister ___ at a school.",
          options: ["work", "works", "are work"],
          correctIndex: 1,
          explanation:
            "My sister = she, so the present simple verb takes -s: She works at a school.",
        },
        {
          id: "l14-q3",
          question: "We ___ have a car.",
          options: ["doesn't", "don't", "isn't"],
          correctIndex: 1,
          explanation:
            "With we, use don't + base verb: We don't have a car.",
        },
        {
          id: "l14-q4",
          question: "Choose the best final sentence for a short introduction.",
          options: [
            "Our town is quiet and there is a park near our home.",
            "Our town quiet and there a park near our home.",
            "Our town is quiet and there are a park near our home.",
          ],
          correctIndex: 0,
          explanation:
            "The sentence needs is with the adjective and there is with a singular park.",
        },
      ],
    },
  ],
};
