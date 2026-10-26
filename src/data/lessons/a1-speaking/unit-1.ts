import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1SpeakingUnit1: LessonUnit = {
  title: "Meeting someone new",
  description:
    "Introduce yourself, ask where someone is from and talk about work.",
  lessons: [
    {
      slug: "hello-and-introductions",
      title: "Hello and introductions",
      summary:
        "Meet someone new with simple, friendly phrases.",
      objective:
        "Introduce yourself, greet another person and respond to an introduction.",
      minutes: 25,
      blocks: [
        {
          type: "dialogue",
          title: "At the first English class",
          intro:
            "Ana and Ben meet before their first lesson. Read the dialogue aloud, one person for each speaker.",
          lines: [
            { speaker: "Ana", text: "Hi, I'm Ana." },
            { speaker: "Ben", text: "Hi Ana, I'm Ben. Nice to meet you." },
            { speaker: "Ana", text: "Nice to meet you too. Are you a student here?" },
            { speaker: "Ben", text: "Yes, I am. I'm in the beginner class. And you?" },
            { speaker: "Ana", text: "Me too. I'm from Mexico." },
            { speaker: "Ben", text: "Great. Welcome to the class!" },
          ],
        },
        {
          type: "table",
          title: "Useful phrases for meeting someone",
          columns: ["You want to…", "Say…", "A possible reply"],
          rows: [
            ["Introduce yourself", "Hi, I'm Ana. / Hello, my name's Ben.", "Hi Ana, I'm Ben."],
            ["Respond to an introduction", "Nice to meet you.", "Nice to meet you too."],
            ["Ask about the other person", "Are you a student here?", "Yes, I am. / No, I'm not."],
            ["Return a question", "And you?", "I'm a student too."],
          ],
        },
        {
          type: "tip",
          title: "Keep it short and friendly",
          text: "In a first conversation, short answers are fine. Add one small detail, such as your class or your country, and then ask a question. This keeps the conversation moving.",
        },
        {
          type: "exercise",
          title: "Choose the best reply",
          instructions:
            "Read each situation and choose the most natural phrase. Say your choice aloud.",
          items: [
            c(
              "Someone says: “Hi, I'm Ben.” What do you say?",
              ["Hi Ben, I'm Ana. Nice to meet you.", "Goodbye, Ben.", "I am fine, thank you."],
              0,
              "Give your name and return the greeting: Hi Ben, I'm Ana. Nice to meet you.",
            ),
            c(
              "Someone says: “Nice to meet you.” What is a natural reply?",
              ["Nice to meet you too.", "Yes, please.", "I'm from Canada."],
              0,
              "Nice to meet you too returns the friendly phrase.",
            ),
            c(
              "You want to know if the other person is a student. What do you ask?",
              ["Are you a student here?", "You are student?", "Where student?"],
              0,
              "With be, put are before you: Are you a student here?",
            ),
            c(
              "Someone asks: “And you?” after saying they are a teacher. What does it mean?",
              ["They are asking about you", "They are saying goodbye", "They want your phone number"],
              0,
              "And you? invites you to answer the same question: What do you do?",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rehearse your introduction",
          instructions:
            "Say each answer aloud before you reveal the model. Then repeat the model with your own information.",
          items: [
            p(
              "Introduce yourself and say one more thing, for example your class or your city.",
              "Model answer: Hi, I'm Hana. I'm in the beginner class.",
              "Use I'm + name, then add one detail.",
            ),
            p(
              "Respond to “Nice to meet you.”",
              "Model answer: Nice to meet you too.",
              "Repeat the phrase and add too.",
            ),
            p(
              "Greet a new person and ask one simple question.",
              "Model answer: Hello, I'm Leo. Are you here for the English class?",
              "Use Are you …? for a yes/no question.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which phrase introduces you?",
          ["I'm Ana.", "Nice to meet you too.", "See you tomorrow."],
          0,
          "I'm Ana gives your name and introduces you.",
        ),
        q(
          2,
          "Which phrase is a friendly response to an introduction?",
          ["Nice to meet you.", "How much is it?", "Can I have the bill?"],
          0,
          "Nice to meet you is the standard friendly response when you meet someone.",
        ),
        q(
          3,
          "Which question asks if someone is a student?",
          ["Are you a student?", "You are a student?", "Student you are?"],
          0,
          "Are you a student? uses the correct question word order with be.",
        ),
        q(
          4,
          "What does “And you?” mean in a first conversation?",
          ["What about you?", "Who are you?", "Where are you going?"],
          0,
          "And you? returns the same question to the other person.",
        ),
      ],
    },
    {
      slug: "asking-where-someone-is-from",
      title: "Asking where someone is from",
      summary:
        "Ask and answer questions about countries and cities.",
      objective:
        "Ask where someone is from and give a simple answer about your country and home.",
      minutes: 25,
      blocks: [
        {
          type: "dialogue",
          title: "A conversation in the kitchen",
          intro:
            "Mei and Luca meet at a hostel. Read their conversation aloud.",
          lines: [
            { speaker: "Mei", text: "Where are you from, Luca?" },
            { speaker: "Luca", text: "I'm from Italy. I live in Bologna." },
            { speaker: "Mei", text: "Oh, nice. Is Bologna near the sea?" },
            { speaker: "Luca", text: "No, it's in the north. It's about an hour from the sea by train. Where are you from?" },
            { speaker: "Mei", text: "I'm from Singapore, but I live in London now." },
            { speaker: "Luca", text: "Is London very big?" },
            { speaker: "Mei", text: "Yes, it is! It's beautiful too." },
          ],
        },
        {
          type: "rules",
          title: "The pattern",
          items: [
            "Ask: Where are you from?",
            "Answer: I'm from + a country or city.",
            "Add where you live now: I live in + a city.",
            "Ask a follow-up: Is it big? Is it near the sea? Do you like it?",
          ],
        },
        {
          type: "exercise",
          title: "Choose the natural answer",
          instructions:
            "Read each prompt and choose the best response. Say it aloud.",
          items: [
            c(
              "Someone asks: “Where are you from?” What is a good answer?",
              ["I'm from Brazil.", "I'm fine, thank you.", "I'm a teacher."],
              0,
              "Where are you from? asks about your country or city. I'm from Brazil gives that information.",
            ),
            c(
              "Someone says: “I'm from Japan.” Which follow-up question is natural?",
              ["Do you live in Japan now?", "Are you from Japan?", "What is Japan?"],
              0,
              "Do you live in Japan now? asks for more information instead of repeating the same question.",
            ),
            c(
              "You were born in Spain but now live in Germany. What can you say?",
              ["I'm from Spain, but I live in Germany now.", "I'm from Germany, but I live in Spain.", "I'm Spanish but I'm from Germany."],
              0,
              "Use I'm from for your origin and I live in for your current home.",
            ),
            c(
              "Which question asks about a city or country?",
              ["Where are you from?", "What do you do?", "How are you?"],
              0,
              "Where are you from? asks about place.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise your answer",
          instructions:
            "Say your answer aloud, then compare it with the model. Try again with different places.",
          items: [
            p(
              "Answer the question: Where are you from?",
              "Model answer: I'm from South Korea. I live in Seoul.",
              "Use I'm from + place. Add I live in + place if you want.",
            ),
            p(
              "Ask your partner where they are from, then ask one follow-up question.",
              "Model answer: Where are you from? Is your city near the sea?",
              "Use Where are you from? and Is + city + …?",
            ),
            p(
              "Say which city you live in and one simple fact about it.",
              "Model answer: I live in Manchester. It's a big city in the north of England.",
              "Use It's + adjective.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which question asks about someone's origin?",
          ["Where are you from?", "What do you do?", "How old are you?"],
          0,
          "Where are you from? asks about the place a person comes from.",
        ),
        q(
          2,
          "Which answer gives both origin and current home?",
          ["I'm from Portugal, but I live in Paris now.", "I'm from Paris, but I live in Portugal now.", "I'm a student in Paris."],
          0,
          "The first answer correctly uses I'm from for origin and I live in for the current home.",
        ),
        q(
          3,
          "Which follow-up question is natural after someone says their country?",
          ["Is it near the sea?", "Is it a student?", "Do you have a phone number?"],
          0,
          "Is it near the sea? asks about the place and keeps the conversation going.",
        ),
        q(
          4,
          "Which sentence is correct?",
          ["I live in London.", "I live London.", "I am live in London."],
          0,
          "Use live in + place: I live in London.",
        ),
      ],
    },
    {
      slug: "talking-about-jobs",
      title: "Talking about jobs",
      summary:
        "Ask about work and describe your job in simple sentences.",
      objective:
        "Ask and answer simple questions about jobs and workplaces.",
      minutes: 25,
      blocks: [
        {
          type: "dialogue",
          title: "At a friend's party",
          intro:
            "Priya and Sam meet at a party. Read the conversation aloud.",
          lines: [
            { speaker: "Sam", text: "What do you do, Priya?" },
            { speaker: "Priya", text: "I'm a nurse. I work in a hospital. What about you?" },
            { speaker: "Sam", text: "I'm a student, but I work in a café at weekends." },
            { speaker: "Priya", text: "Oh, nice. Do you like it?" },
            { speaker: "Sam", text: "Yes, I do. The people are friendly." },
            { speaker: "Priya", text: "That's important. I like my job too." },
          ],
        },
        {
          type: "table",
          title: "Talking about jobs",
          columns: ["Question", "Answer pattern", "Example"],
          rows: [
            ["What do you do?", "I'm a/an + job.", "I'm a teacher."],
            ["Where do you work?", "I work in/at + place.", "I work in a school."],
            ["Do you like your job?", "Yes, I do. / No, I don't.", "Yes, I do. It's interesting."],
            ["What about you?", "I'm … / I work …", "I'm a student."],
          ],
          caption: "Use a before a consonant sound and an before a vowel sound: a nurse, an engineer.",
        },
        {
          type: "exercise",
          title: "Choose the best phrase",
          instructions:
            "Read each situation and choose the natural phrase. Say it aloud.",
          items: [
            c(
              "You want to ask someone about their job. What do you say?",
              ["What do you do?", "What are you doing?", "Where do you go?"],
              0,
              "What do you do? is the usual question about a person's job.",
            ),
            c(
              "Which sentence is correct?",
              ["I'm an engineer.", "I'm a engineer.", "I engineer."],
              0,
              "Use an before a vowel sound: an engineer. You can also say I work as an engineer.",
            ),
            c(
              "Someone asks: “Where do you work?” What is a good answer?",
              ["I work in a hotel.", "I work a hotel.", "I'm work in a hotel."],
              0,
              "Use work in or work at + place: I work in a hotel.",
            ),
            c(
              "Someone says: “I'm a teacher.” Which follow-up is natural?",
              ["Do you like your job?", "Do you have a job?", "What is a teacher?"],
              0,
              "Do you like your job? asks about their opinion and keeps the conversation friendly.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Talk about work",
          instructions:
            "Say your answer aloud, then reveal the model. Use real or invented information.",
          items: [
            p(
              "Answer the question: What do you do?",
              "Model answer: I'm a student. I study English and business.",
              "Use I'm a/an + job or student.",
            ),
            p(
              "Say where you work or study.",
              "Model answer: I work in a small office near the station.",
              "Use I work in/at + place, or I study at + place.",
            ),
            p(
              "Ask a partner about their job and whether they like it.",
              "Model answer: What do you do? Do you like your job?",
              "Use What do you do? and Do you like …?",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which question asks about a job?",
          ["What do you do?", "How do you do?", "Where are you from?"],
          0,
          "What do you do? asks about a person's job.",
        ),
        q(
          2,
          "Which sentence is correct?",
          ["I'm a nurse.", "I'm nurse.", "I am a nurse work hospital."],
          0,
          "Use a/an + job: I'm a nurse.",
        ),
        q(
          3,
          "Which sentence uses the correct article?",
          ["She's an artist.", "She's a artist.", "She's artist."],
          0,
          "Artist begins with a vowel sound, so use an.",
        ),
        q(
          4,
          "How do you ask if someone enjoys their job?",
          ["Do you like your job?", "Do you work your job?", "What is job?"],
          0,
          "Do you like your job? asks for an opinion about their work.",
        ),
      ],
    },
  ],
};
