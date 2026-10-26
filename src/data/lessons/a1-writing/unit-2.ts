import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1WritingUnit2: LessonUnit = {
  title: "Personal information",
  description:
    "Write about yourself, complete simple forms and send clear personal messages.",
  lessons: [
    {
      slug: "about-me",
      title: "About me",
      summary:
        "Write a short introduction with your basic information, home, work and interests.",
      objective:
        "Write five connected sentences about yourself with correct basic grammar.",
      minutes: 30,
      blocks: [
        {
          type: "passage",
          title: "Tomás introduces himself",
          paragraphs: [
            "Hello! My name is Tomás Ribeiro. I am 22 years old and I am from Valencia, Spain. I live in a small flat with my parents and my younger sister.",
            "I work in a restaurant near the beach. I am a waiter, and I like meeting people from different countries. In my free time, I play football and listen to music.",
            "I am learning English because I want to travel and work in other countries.",
          ],
          glossary: [
            { term: "flat", meaning: "A home on one floor of a building." },
            { term: "waiter", meaning: "A person who brings food and drinks to tables." },
            { term: "because", meaning: "A word that gives a reason." },
          ],
        },
        {
          type: "rules",
          title: "A simple introduction has five parts",
          items: [
            "Your name: My name is … / I'm …",
            "Your age and home: I am 22 years old. I am from … I live in …",
            "Your work or studies: I work in … / I am a student.",
            "Your free time: In my free time, I like …",
            "A reason: I am learning English because …",
          ],
        },
        {
          type: "table",
          title: "Useful sentence starters",
          columns: ["Topic", "Sentence starter", "Example"],
          rows: [
            ["Name", "My name is …", "My name is Tomás Ribeiro."],
            ["Home", "I live in …", "I live in a small flat."],
            ["Work", "I work in …", "I work in a restaurant."],
            ["Free time", "In my free time, I …", "In my free time, I play football."],
            ["Reason", "I am learning English because …", "I am learning English because I want to travel."],
          ],
        },
        {
          type: "exercise",
          title: "Choose the best sentence",
          instructions:
            "Imagine you are writing a short introduction. Choose the best sentence for each situation.",
          items: [
            c(
              "Which sentence is the best way to give your age?",
              ["I am 21 years old.", "I have 21 years.", "My age is 21 years have."],
              0,
              "In English, use be + age: I am 21 years old. You can also say I'm 21.",
            ),
            c(
              "Which sentence is the best way to say where you live?",
              ["I live in a small town near the sea.", "I live a small town near the sea in.", "In a small town I living near the sea."],
              0,
              "Use live in + place: I live in a small town near the sea.",
            ),
            c(
              "Which sentence gives a reason correctly?",
              ["I am learning English because I want a better job.", "I am learning English because want a better job.", "I am learning English why I want a better job."],
              0,
              "Because introduces the reason, and a full clause follows: because I want a better job.",
            ),
            c(
              "Which sentence is the best closing for a short introduction?",
              ["I am learning English because I want to travel.", "My name is Ana.", "I live in Rome."],
              0,
              "A reason for learning English is a natural final sentence in this kind of introduction.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write about yourself",
          instructions:
            "Complete each sentence with your own information, then compare it with the model. Invent details if you prefer.",
          items: [
            p(
              "My name is ___ and I am from ___.",
              "Model answer: My name is Hana and I am from Osaka, Japan.",
              "Use a name and a country or city.",
            ),
            p(
              "I live in ___. I live with ___.",
              "Model answer: I live in a small flat. I live with my mother and brother.",
              "Use a place and the people in your home.",
            ),
            p(
              "In my free time, I like ___ and ___.",
              "Model answer: In my free time, I like reading and swimming.",
              "Use two verbs ending in -ing after like.",
            ),
            p(
              "Write five sentences about yourself using the five parts of an introduction.",
              "Model answer: My name is Daniel. I am 19 years old and I am from Toronto, Canada. I live with my parents. I am a student at a local college. I am learning English because I want to study abroad.",
              "Check capital letters, full stops and verb forms.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which sentence gives an age correctly?",
          ["I am 18 years old.", "I have 18 years old.", "I am have 18 years."],
          0,
          "English uses be for age: I am 18 years old.",
        ),
        q(
          2,
          "Which word completes the sentence? “I live ___ a small town.”",
          ["in", "on", "at"],
          0,
          "Use live in + a town or city: I live in a small town.",
        ),
        q(
          3,
          "Which sentence gives a reason?",
          ["I study English because I need it for work.", "I study English I need it for work.", "Because I study English need it for work."],
          0,
          "Because connects the action to the reason: I study English because I need it for work.",
        ),
        q(
          4,
          "Which detail is NOT usually in a short personal introduction?",
          ["Your favourite football team's full history", "Your name", "Your free-time interests"],
          0,
          "A short introduction gives key personal information, not a long history of a football team.",
        ),
      ],
    },
    {
      slug: "completing-forms",
      title: "Completing forms",
      summary:
        "Understand common form fields and write the right information in the right place.",
      objective:
        "Complete a simple personal information form with correct words, dates and capital letters.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "Forms ask for facts in a fixed order",
          paragraphs: [
            "You meet forms at language schools, hotels, libraries and doctors' surgeries. Most forms ask the same basic questions, so the words become familiar quickly.",
            "Many forms ask you to write in BLOCK CAPITALS or print clearly. This makes your writing easy to read. If the form shows a format, follow it. For example, a date box may say DD/MM/YYYY.",
          ],
        },
        {
          type: "table",
          title: "Common form fields",
          columns: ["Field", "What it asks for", "Example"],
          rows: [
            ["First name", "Your given name", "Mei"],
            ["Surname", "Your family name", "Chen"],
            ["Date of birth", "The day you were born", "14/03/2001"],
            ["Place of birth", "The town or city where you were born", "Shanghai"],
            ["Nationality", "Your nationality adjective", "Chinese"],
            ["Address", "Where you live", "12 Park Road, Bristol"],
            ["Postcode", "The postal code for your address", "BS1 4QA"],
            ["Phone number", "A number where people can call you", "07700 900123"],
            ["Signature", "Your name, written in your own hand", "Mei Chen"],
          ],
        },
        {
          type: "tip",
          title: "Country or nationality?",
          text: "Country names are nouns: Japan, Brazil, Italy. Nationality words are adjectives: Japanese, Brazilian, Italian. A form that asks for NATIONALITY needs the adjective, not the country.",
        },
        {
          type: "exercise",
          title: "Choose the right field",
          instructions:
            "Read the information and choose the field where it belongs on a form.",
          items: [
            c(
              "Where do you write the family name “Silva” on a form?",
              ["Surname", "First name", "Place of birth"],
              0,
              "Surname means family name or last name. Silva is a family name here.",
            ),
            c(
              "Which answer correctly completes NATIONALITY for a person from Egypt?",
              ["Egyptian", "Egypt", "Egyptian nationality"],
              0,
              "The nationality adjective is Egyptian. Egypt is the country.",
            ),
            c(
              "Which information belongs in DATE OF BIRTH?",
              ["3 May 1999", "Bristol", "07700 900123"],
              0,
              "Date of birth needs a date, not a place or a phone number.",
            ),
            c(
              "A form says WRITE IN BLOCK CAPITALS. What should you do?",
              ["Write all letters as capitals", "Write in small letters", "Write only your first name"],
              0,
              "BLOCK CAPITALS means write every letter as a capital letter.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Complete the form",
          instructions:
            "Use invented details to complete each field, then compare with the model.",
          items: [
            p(
              "Complete FIRST NAME and SURNAME for a student called Luca Moretti.",
              "First name: LUCA. Surname: MORETTI.",
              "In BLOCK CAPITALS, write each name in its field.",
            ),
            p(
              "Complete NATIONALITY for a student from South Korea.",
              "Korean.",
              "Use the nationality adjective, not the country name.",
            ),
            p(
              "Complete DATE OF BIRTH in DD/MM/YYYY format for 9 August 2002.",
              "09/08/2002.",
              "The day comes first, then the month, then the year.",
            ),
            p(
              "Write one complete form line for an address in your town.",
              "Model answer: ADDRESS: 24 Green Street, Manchester.",
              "Include a street name and number, and a town or city.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What does SURNAME mean?",
          ["Family name", "First name", "Home town"],
          0,
          "Surname is your family name, also called your last name.",
        ),
        q(
          2,
          "Which word correctly completes NATIONALITY for a person from Brazil?",
          ["Brazilian", "Brazil", "Brazily"],
          0,
          "The country is Brazil; the nationality adjective is Brazilian.",
        ),
        q(
          3,
          "What does BLOCK CAPITALS mean?",
          ["Write in capital letters", "Write in a block shape", "Write only numbers"],
          0,
          "Block capitals are capital letters, one by one: A, B, C.",
        ),
        q(
          4,
          "Which field asks where a person was born?",
          ["Place of birth", "Address", "Date of birth"],
          0,
          "Place of birth asks for the town or city where the person was born.",
        ),
      ],
    },
    {
      slug: "short-messages",
      title: "Short messages",
      summary:
        "Write friendly messages to invite, thank, apologise or change a plan.",
      objective:
        "Write a short, clear message with a greeting, a reason, the key details and a closing.",
      minutes: 30,
      blocks: [
        {
          type: "examples",
          title: "Three useful messages",
          intro:
            "Each message below is short, but it gives the reader everything they need.",
          items: [
            {
              text: "Hi Ana, would you like to come to dinner on Friday at 7? Let me know. Sam",
              note: "Invitation: what, when and a request for a reply.",
            },
            {
              text: "Hi Sam, thank you for the invitation. I'm sorry, I can't come on Friday because I have to work. Can we meet on Saturday? Ana",
              note: "Apology and new plan: a reason, then a suggestion.",
            },
            {
              text: "Hi Ana, Saturday is perfect. See you at 7! Sam",
              note: "Confirmation: a clear answer and a friendly closing.",
            },
          ],
        },
        {
          type: "rules",
          title: "A good short message has four parts",
          items: [
            "Greeting: Hi Ana, or Hello Sam,",
            "Reason: why you are writing (an invitation, a thank-you, an apology).",
            "Key details: the day, time, place or change.",
            "Closing: See you soon, Thanks, or Let me know.",
          ],
        },
        {
          type: "table",
          title: "Useful phrases",
          columns: ["Purpose", "Phrase"],
          rows: [
            ["Inviting", "Would you like to …?"],
            ["Accepting", "I'd love to. / That sounds good."],
            ["Refusing politely", "I'm sorry, I can't …"],
            ["Giving a reason", "… because I have to work."],
            ["Suggesting", "Can we meet on …?"],
            ["Closing", "See you soon! / Let me know."],
          ],
        },
        {
          type: "exercise",
          title: "Choose the best message",
          instructions:
            "Read the situation and choose the message that is clear, friendly and correct.",
          items: [
            c(
              "You want to invite a friend to lunch on Sunday. Which message is best?",
              ["Hi Jo, would you like to have lunch on Sunday at 1? Let me know. Alex", "Hi Jo, lunch Sunday. Alex", "Lunch. Do you want? Goodbye."],
              0,
              "The first message has a greeting, a clear invitation with a time, and a closing.",
            ),
            c(
              "You cannot go to a friend's party. Which message is best?",
              ["Hi Mia, I'm sorry, I can't come to your party because I have to work. Have a good time! Ben", "Hi Mia, no party for me.", "Party? I am busy."],
              0,
              "The first message apologises, gives a reason and ends kindly.",
            ),
            c(
              "A friend helped you move house. Which message is best?",
              ["Hi Sam, thank you so much for your help yesterday. I really appreciate it. Leo", "Hi Sam, you helped. Bye.", "Hi Sam, where were you yesterday?"],
              0,
              "A thank-you message names the help and shows appreciation.",
            ),
            c(
              "Which closing is suitable for a friendly message to a friend?",
              ["See you soon!", "Yours faithfully,", "To whom it may concern,"],
              0,
              "See you soon is friendly and natural. The other closings are formal.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write short messages",
          instructions:
            "Plan each message, write it, then compare it with the model answer.",
          items: [
            p(
              "Invite a friend to a film on Saturday at 6 p.m.",
              "Model answer: Hi Maya, would you like to see a film on Saturday at 6? Let me know. Ana",
              "Include the activity, day, time and a request for a reply.",
            ),
            p(
              "Say no politely to an invitation because you are studying for an exam.",
              "Model answer: Hi Leo, thank you for the invitation. I'm sorry, I can't come because I'm studying for an exam. Can we meet next week?",
              "Apologise, give a reason and suggest another time.",
            ),
            p(
              "Thank a friend for a birthday present.",
              "Model answer: Hi Nina, thank you for the beautiful book! I love it. See you soon, Sam",
              "Name the present and say why you like it.",
            ),
            p(
              "Write a message to change the time of a meeting from 4 p.m. to 5 p.m.",
              "Model answer: Hi Ben, can we meet at 5 p.m. instead of 4? I have a class until 4.30. Sorry for the change! Ana",
              "Give the new time, the reason and a short apology.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which phrase is a polite way to refuse an invitation?",
          ["I'm sorry, I can't come.", "No.", "I don't want to."],
          0,
          "I'm sorry, I can't come is polite and clear.",
        ),
        q(
          2,
          "Which detail should an invitation include?",
          ["The day and time", "Your whole life story", "The price of your shoes"],
          0,
          "An invitation needs the key details: what, when and where.",
        ),
        q(
          3,
          "Which closing is friendly?",
          ["See you soon!", "Yours faithfully,", "Dear Sir or Madam,"],
          0,
          "See you soon is a friendly closing for someone you know.",
        ),
        q(
          4,
          "Why does a message need a greeting?",
          ["It names the person and sounds friendly", "It makes the message longer", "It replaces the time"],
          0,
          "A greeting such as Hi Ana, makes the message personal and clearly addressed.",
        ),
      ],
    },
  ],
};
