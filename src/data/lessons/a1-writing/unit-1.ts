import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1WritingUnit1: LessonUnit = {
  title: "Sentence basics",
  description:
    "Build clear English sentences with the right word order, capital letters and punctuation.",
  lessons: [
    {
      slug: "word-order-in-a-sentence",
      title: "Word order in a sentence",
      summary:
        "Put the subject, verb and the rest of the sentence in a natural English order.",
      objective:
        "Write simple sentences using subject + verb + object, with place and time in a clear order.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "Start with who or what",
          paragraphs: [
            "Most simple English sentences follow the same pattern: subject + verb + the rest. The subject is the person or thing that does the action. The verb tells you what happens.",
            "When a sentence has a place and a time, the usual order is verb + place + time: I play football in the park on Saturdays. If you put the time first, use a comma: On Saturdays, I play football in the park.",
          ],
        },
        {
          type: "table",
          title: "Building a sentence",
          columns: ["Subject", "Verb", "Object / place", "Time"],
          rows: [
            ["I", "drink", "coffee", "in the morning."],
            ["She", "studies", "English", "every Tuesday."],
            ["We", "visit", "our family", "at the weekend."],
            ["My brother", "works", "in a hotel", "on Fridays."],
          ],
          caption: "English does not usually put the verb at the end of the sentence.",
        },
        {
          type: "examples",
          title: "Natural English word order",
          items: [
            {
              text: "I read a book every evening.",
              note: "Subject (I) + verb (read) + object (a book) + time (every evening).",
            },
            {
              text: "Ana lives in Madrid.",
              note: "Place comes after the verb: lives + in Madrid.",
            },
            {
              text: "We eat dinner at seven o'clock.",
              note: "Time comes after the place or at the end of the sentence.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the correct order",
          instructions:
            "Read the options and choose the sentence with natural English word order.",
          items: [
            c(
              "Which sentence is correct?",
              ["I drink tea in the morning.", "I in the morning drink tea.", "I drink in the morning tea."],
              0,
              "The order is subject + verb + object + time: I drink tea in the morning.",
            ),
            c(
              "Which sentence is correct?",
              ["My sister works in a hospital.", "My sister in a hospital works.", "Works my sister in a hospital."],
              0,
              "English puts the subject before the verb, and the place after the verb.",
            ),
            c(
              "Which sentence is correct?",
              ["We watch films on Sundays.", "We on Sundays watch films.", "On Sundays we films watch."],
              0,
              "The natural order is We watch films on Sundays. On Sundays, we watch films is also correct with a comma.",
            ),
            c(
              "Which sentence is correct?",
              ["He has breakfast at 8 a.m.", "He at 8 a.m. has breakfast.", "Has he breakfast at 8 a.m."],
              0,
              "Subject + verb + object + time: He has breakfast at 8 a.m.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build and write",
          instructions:
            "Put the words in order, then check the model. Finish by writing two sentences of your own.",
          items: [
            p(
              "Put the words in order: coffee / every morning / drinks / she",
              "She drinks coffee every morning.",
              "Start with the subject, she.",
            ),
            p(
              "Put the words in order: in a shop / works / my father",
              "My father works in a shop.",
              "The place comes after the verb.",
            ),
            p(
              "Put the words in order: on Fridays / we / dinner / have / at home",
              "We have dinner at home on Fridays.",
              "Verb + object + place + time.",
            ),
            p(
              "Write two sentences about your morning. Say what you do and when.",
              "Model answer: I wake up at 7 a.m. I have breakfast in the kitchen at 7.30.",
              "Use subject + verb + the rest. Add a time to at least one sentence.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which is the usual order for a simple English sentence?",
          ["Subject + verb + the rest", "Verb + subject + object", "Time + subject + verb"],
          0,
          "English usually begins with the subject, then the verb.",
        ),
        q(
          2,
          "Which sentence has correct word order?",
          ["We go to the park on Saturdays.", "We on Saturdays go to the park.", "On Saturdays go we to the park."],
          0,
          "We go to the park on Saturdays follows subject + verb + place + time.",
        ),
        q(
          3,
          "Where does the place usually go?",
          ["After the verb", "Before the subject", "At the start of every sentence"],
          0,
          "In a simple sentence, the place usually comes after the verb: She works in a school.",
        ),
        q(
          4,
          "Which sentence begins with a time expression and uses correct punctuation?",
          ["On Mondays, I study English.", "On Mondays I, study English.", "I study, on Mondays English."],
          0,
          "When a time expression comes first, use a comma before the subject.",
        ),
      ],
    },
    {
      slug: "capital-letters",
      title: "Capital letters",
      summary:
        "Learn when English needs a capital letter and when it does not.",
      objective:
        "Use capital letters correctly for sentence starts, I, names, places, days and months.",
      minutes: 25,
      blocks: [
        {
          type: "rules",
          title: "Use a capital letter for…",
          items: [
            "The first word of a sentence: My name is Alex.",
            "The pronoun I: I am from Canada.",
            "Names of people: Maria, Ben, Mr Patel.",
            "Names of places: London, Brazil, Green Street.",
            "Days, months and languages: Monday, July, English.",
            "Nationalities: Italian, Japanese, Nigerian.",
          ],
        },
        {
          type: "text",
          title: "Do not capitalise every noun",
          paragraphs: [
            "Some languages use capital letters for more words than English does. In English, common nouns stay lowercase unless they start a sentence: I like tea. I like tea on Monday.",
            "Words like school, doctor, city and breakfast are common nouns, so they do not need capitals in the middle of a sentence: I work in a hospital in a big city.",
          ],
        },
        {
          type: "table",
          title: "Correct and incorrect",
          columns: ["Correct", "Why", "Incorrect"],
          rows: [
            ["I am a student.", "I is always capital.", "i am a student."],
            ["We live in Bristol.", "Bristol is a place name.", "We live in bristol."],
            ["My English class is on Tuesday.", "English and Tuesday are names.", "My english class is on tuesday."],
            ["She has a new phone.", "No special capital needed.", "She has a New Phone."],
          ],
        },
        {
          type: "exercise",
          title: "Choose the correct capitals",
          instructions:
            "Select the sentence or phrase with the correct capital letters.",
          items: [
            c(
              "Which sentence is correct?",
              ["I am from Italy.", "i am from italy.", "I am from italy."],
              0,
              "I is always capital, and Italy is a place name.",
            ),
            c(
              "Which phrase is correct?",
              ["on Monday", "on monday", "on MONDAY"],
              0,
              "Days of the week take a capital letter: Monday.",
            ),
            c(
              "Which sentence is correct?",
              ["My sister speaks English and French.", "My sister speaks english and french.", "My Sister speaks English and French."],
              0,
              "Languages take capitals, but the common noun sister does not.",
            ),
            c(
              "Which sentence is correct?",
              ["Carlos works in a bank in Madrid.", "Carlos works in a Bank in madrid.", "carlos works in a bank in Madrid."],
              0,
              "Carlos and Madrid are names. Bank is a common noun and stays lowercase.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Fix and write",
          instructions:
            "Rewrite each phrase correctly, then check the model. Use the final task to write two sentences.",
          items: [
            p(
              "Rewrite with capitals: i live in canada",
              "I live in Canada.",
              "I and Canada both need a capital.",
            ),
            p(
              "Rewrite with capitals: my english class is on thursday",
              "My English class is on Thursday.",
              "The first word, English and Thursday need capitals.",
            ),
            p(
              "Rewrite with capitals: mr and mrs lee are from japan",
              "Mr and Mrs Lee are from Japan.",
              "Titles, names and countries take capitals.",
            ),
            p(
              "Write two sentences about yourself. Include a day, a month or a language.",
              "Model answer: My name is Hana. I study English on Mondays in October.",
              "Check I, the first word, and all names of days, months and languages.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which word always needs a capital letter in English?",
          ["I", "she", "student"],
          0,
          "The pronoun I is always written with a capital letter.",
        ),
        q(
          2,
          "Which sentence is correctly capitalised?",
          ["We visit Rome in May.", "We visit rome in may.", "We Visit Rome In May."],
          0,
          "Rome is a place and May is a month, so both need capitals. Visit and in do not.",
        ),
        q(
          3,
          "Which word in this sentence needs a capital letter? “my brother studies french on fridays.”",
          ["my, french and fridays", "brother and studies", "only french"],
          0,
          "The sentence should be: My brother studies French on Fridays. The first word, the language and the day need capitals.",
        ),
        q(
          4,
          "Which word does NOT need a capital letter in the middle of a sentence?",
          ["school", "Spain", "Anna"],
          0,
          "School is a common noun. Spain and Anna are names, so they take capitals.",
        ),
      ],
    },
    {
      slug: "full-stops-and-question-marks",
      title: "Full stops and question marks",
      summary:
        "End sentences correctly and recognise the two main sentence types.",
      objective:
        "Use full stops for statements and question marks for questions, with correct question word order.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "Two endings, two jobs",
          paragraphs: [
            "A full stop (.) ends a statement. A statement gives information: I live in London. She likes coffee.",
            "A question mark (?) ends a question. A question asks for information: Where do you live? Do you like coffee?",
          ],
        },
        {
          type: "rules",
          title: "Making questions",
          items: [
            "With be, put the verb before the subject: Are you a student?",
            "With do, use do or does + subject + verb: Do you like tea? Does she work here?",
            "Question words go first: Where are you from? What do you do?",
            "A statement does not need a question mark: You are from Spain.",
          ],
        },
        {
          type: "table",
          title: "Statement or question?",
          columns: ["Sentence", "Type", "Ending"],
          rows: [
            ["My name is Leo", "Statement", "."],
            ["Where are you from", "Question", "?"],
            ["She works in a café", "Statement", "."],
            ["Do you have a pen", "Question", "?"],
            ["I do not know", "Statement", "."],
          ],
        },
        {
          type: "exercise",
          title: "Choose the correct ending",
          instructions:
            "Select the correctly written sentence for each prompt.",
          items: [
            c(
              "Which sentence is correctly written?",
              ["Where do you live?", "Where do you live.", "Where do you live!"],
              0,
              "Where do you live? is a question, so it needs a question mark.",
            ),
            c(
              "Which sentence is correctly written?",
              ["I work in a school.", "I work in a school?", "I work in a school!"],
              0,
              "I work in a school gives information, so it ends with a full stop.",
            ),
            c(
              "Which question is correct?",
              ["Are you a teacher?", "You are a teacher?", "Are you a teacher."],
              0,
              "With be, the verb comes before the subject in a question: Are you a teacher?",
            ),
            c(
              "Which sentence is correct?",
              ["Does she like music?", "Does she like music.", "She does like music?"],
              0,
              "This is a question with does, so it ends with a question mark.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Punctuate and write",
          instructions:
            "Rewrite each sentence with the correct punctuation. Then write your own question.",
          items: [
            p(
              "Add the correct ending: My sister lives in Mexico",
              "My sister lives in Mexico.",
              "This sentence gives information.",
            ),
            p(
              "Add the correct ending: Where is the station",
              "Where is the station?",
              "This sentence asks for information.",
            ),
            p(
              "Fix the question: You do like coffee",
              "Do you like coffee?",
              "Start with Do, then the subject, then the verb.",
            ),
            p(
              "Write a question to ask a new friend their name.",
              "Model answer: What is your name?",
              "Use a question word and a question mark.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which sentence is a statement?",
          ["She is from Portugal.", "Is she from Portugal?", "Where is she from?"],
          0,
          "She is from Portugal gives information, so it is a statement.",
        ),
        q(
          2,
          "What punctuation goes at the end of a question?",
          ["A question mark", "A full stop", "A comma"],
          0,
          "Questions end with a question mark: Do you speak English?",
        ),
        q(
          3,
          "Which question is correctly written?",
          ["Do you have a brother?", "You have a brother?", "Do you have a brother."],
          0,
          "With do, the verb comes first: Do you have a brother?",
        ),
        q(
          4,
          "Which sentence needs a full stop?",
          ["My father works in a hotel", "Where is my father", "Is your father at home"],
          0,
          "My father works in a hotel is a statement, so it needs a full stop.",
        ),
      ],
    },
  ],
};
