import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1WritingUnit4: LessonUnit = {
  title: "Short texts",
  description:
    "Write a simple email and use a practical checklist to check your own work.",
  lessons: [
    {
      slug: "a-simple-email",
      title: "A simple email",
      summary:
        "Write a clear email with a subject, greeting, message and closing.",
      objective:
        "Write a short email asking for information with correct email structure.",
      minutes: 30,
      blocks: [
        {
          type: "passage",
          title: "Sofia asks about a course",
          paragraphs: [
            "Subject: English evening classes",
            "Dear Ms Green,",
            "I am writing to ask about English evening classes at your school. Do you have a class for beginners on Tuesdays? How much is the course?",
            "I would like to start next month. Please can you send me more information?",
            "Thank you.",
            "Best wishes,",
            "Sofia Martins",
          ],
        },
        {
          type: "rules",
          title: "Email structure",
          items: [
            "Subject: a short phrase that says what the email is about.",
            "Greeting: Dear Ms Green, for a formal email; Hi Sam, for a friend.",
            "Opening: say why you are writing: I am writing to ask about …",
            "Body: give details and ask clear questions.",
            "Closing: Thank you. / Best wishes, / Kind regards,",
            "Name: write your name at the end.",
          ],
        },
        {
          type: "table",
          title: "Formal and friendly language",
          columns: ["Formal email", "Friendly email"],
          rows: [
            ["Dear Ms Green,", "Hi Sam,"],
            ["I am writing to ask about …", "I want to ask you about …"],
            ["Please can you send me …?", "Can you send me …?"],
            ["Kind regards,", "See you soon,"],
          ],
          caption: "Use formal language for a school, company or official contact.",
        },
        {
          type: "exercise",
          title: "Choose the email language",
          instructions:
            "Select the best option for a formal email to a language school.",
          items: [
            c(
              "Which subject line is the clearest?",
              ["English evening classes", "Hello", "Important!!!!"],
              0,
              "A subject line should tell the reader what the email is about. English evening classes does this clearly.",
            ),
            c(
              "Which greeting is suitable for an email to Ms Green?",
              ["Dear Ms Green,", "Hi Green,", "Hey you,"],
              0,
              "Dear Ms Green, is polite and appropriate for a formal email.",
            ),
            c(
              "Which sentence is a polite request for information?",
              ["Please can you send me more information?", "Send me information now.", "Information!"],
              0,
              "Please can you …? is a polite request.",
            ),
            c(
              "Which closing is suitable for a formal email?",
              ["Kind regards,", "See you soon,", "Love,"],
              0,
              "Kind regards, is a standard formal closing.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a simple email",
          instructions:
            "Write each part of an email to a sports centre asking about swimming classes. Compare with the models.",
          items: [
            p(
              "Write a clear subject line for an email about swimming classes for beginners.",
              "Model answer: Swimming classes for beginners",
              "Keep it short and specific.",
            ),
            p(
              "Write a greeting and opening sentence for the manager, Mr Lee.",
              "Model answer: Dear Mr Lee, I am writing to ask about swimming classes for beginners.",
              "Use Dear + title and surname, then say why you are writing.",
            ),
            p(
              "Ask two questions: one about days and one about the price.",
              "Model answer: Are there classes on Saturdays? How much is a course?",
              "Use question marks and correct question order.",
            ),
            p(
              "Write a closing and your name.",
              "Model answer: Thank you. Best wishes, Ana Costa",
              "Use a formal closing and put your name on the next line.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the job of a subject line?",
          ["To say what the email is about", "To greet the reader", "To sign the email"],
          0,
          "The subject tells the reader the topic before they open the email.",
        ),
        q(
          2,
          "Which greeting is most suitable for a formal email to Ms Green?",
          ["Dear Ms Green,", "Hi Green,", "Hello friend,"],
          0,
          "Dear + title + surname is the standard formal greeting.",
        ),
        q(
          3,
          "Which sentence asks for information politely?",
          ["Please can you send me the class times?", "Tell me the class times.", "Class times!"],
          0,
          "Please can you …? makes the request polite.",
        ),
        q(
          4,
          "Where does the writer's name go?",
          ["At the end, after the closing", "Only in the subject line", "Before the greeting"],
          0,
          "The writer signs their name at the end, after the closing.",
        ),
      ],
    },
    {
      slug: "review-and-writing-check",
      title: "Review and writing check",
      summary:
        "Check your writing for the mistakes beginner writers make most often.",
      objective:
        "Use a five-point checklist to find and correct basic writing errors.",
      minutes: 30,
      blocks: [
        {
          type: "rules",
          title: "The five-point writing check",
          items: [
            "Capital letters: first word, I, names, places, days, months, languages.",
            "Full stops and question marks: every sentence needs an ending.",
            "Word order: subject + verb + the rest.",
            "Verb form: check am / is / are, do / does and simple present endings.",
            "Clear structure: greeting, message and closing in a message or email.",
          ],
        },
        {
          type: "table",
          title: "Common mistakes and fixes",
          columns: ["Incorrect", "Correct", "Check"],
          rows: [
            ["i live in london.", "I live in London.", "Capital I and place names"],
            ["She work in a shop.", "She works in a shop.", "Third-person -s"],
            ["Where you are from?", "Where are you from?", "Question word order"],
            ["I have 20 years.", "I am 20 years old.", "Age uses be"],
            ["my name is ana", "My name is Ana.", "First word, name capital, full stop"],
          ],
        },
        {
          type: "tip",
          title: "Read slowly, one line at a time",
          text: "When you check your writing, do not read it quickly like a message. Read one line at a time and ask: Is there a capital letter? Is there a full stop? Is the verb correct? A slow second read finds more mistakes than a fast first one.",
        },
        {
          type: "exercise",
          title: "Find the correct version",
          instructions:
            "Choose the sentence or text that is correct in every way.",
          items: [
            c(
              "Which sentence is correct?",
              ["My brother works in a hospital in Leeds.", "My brother work in a hospital in leeds.", "my brother works in a hospital in Leeds"],
              0,
              "The first sentence has the third-person -s, a capital for Leeds and a capital at the start.",
            ),
            c(
              "Which question is correct?",
              ["Does she live in Paris?", "She does live in Paris?", "Does she lives in Paris?"],
              0,
              "After does, use the base verb: Does she live in Paris?",
            ),
            c(
              "Which sentence is correct?",
              ["I am 30 years old and I live in Rome.", "I have 30 years and i live in rome.", "I am 30 years and I live in Rome."],
              0,
              "Age uses be + years old, I is capital and Rome is a place name.",
            ),
            c(
              "Which message is correctly structured?",
              ["Hi Ana, can we meet at 6? See you soon, Sam", "Hi Ana can we meet at 6 see you soon Sam", "Can we meet at 6? Hi Ana, Sam"],
              0,
              "The first message has a greeting, a clear question, a closing and the writer's name.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Edit and improve",
          instructions:
            "Find the mistakes and rewrite the text. Then compare with the model.",
          items: [
            p(
              "Fix the sentence: i live in manchester and i work in a shop",
              "I live in Manchester and I work in a shop.",
              "Check I and the place name, and add a full stop.",
            ),
            p(
              "Fix the question: where you work",
              "Where do you work?",
              "Add do and a question mark.",
            ),
            p(
              "Edit this message: hi sam i am at the station i arrive at 7 see you soon ana",
              "Hi Sam, I am at the station. I arrive at 7. See you soon, Ana.",
              "Add capitals, full stops and commas, and separate the closing.",
            ),
            p(
              "Write three sentences about your day. Then check them with the five-point checklist.",
              "Model answer: I start work at 9 a.m. I eat lunch in a small café near my office. In the evening, I study English at home.",
              "Check capitals, endings, word order, verb forms and structure.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which sentence has the correct third-person verb form?",
          ["She works in a bank.", "She work in a bank.", "She working in a bank."],
          0,
          "With she, the present simple verb takes -s: works.",
        ),
        q(
          2,
          "What is wrong with “Where you are from?”",
          ["The question word order is wrong", "It needs a full stop", "Nothing is wrong"],
          0,
          "The correct question is Where are you from? The verb comes before you.",
        ),
        q(
          3,
          "Which sentence uses the correct age phrase?",
          ["I am 25 years old.", "I have 25 years.", "I have 25 years old."],
          0,
          "English expresses age with be: I am 25 years old.",
        ),
        q(
          4,
          "Which check is NOT part of the five-point writing check?",
          ["The number of words in the message", "Capital letters", "Word order"],
          0,
          "Good writing can be short or long. The checklist focuses on accuracy and clear structure.",
        ),
      ],
    },
  ],
};
