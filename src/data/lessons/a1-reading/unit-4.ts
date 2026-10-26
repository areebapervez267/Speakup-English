import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1ReadingUnit4: LessonUnit = {
  title: "Practical reading",
  description:
    "Use English for real decisions: choose from a menu, follow a timetable and build a daily reading habit.",
  lessons: [
    {
      slug: "menus",
      title: "Menus",
      summary:
        "Scan a café menu to find dishes, prices and useful food labels.",
      objective:
        "Read a simple menu, find prices and choose food that matches your needs.",
      minutes: 25,
      blocks: [
        {
          type: "passage",
          title: "The Blue Spoon café",
          paragraphs: [
            "The Blue Spoon is a small café near the station. It serves breakfast and lunch all day. You order at the counter, and the staff bring your food to the table.",
            "The menu has three parts: Breakfast, Lunch and Drinks. Some dishes have a V next to them. V means vegetarian: the dish has no meat or fish. A VE next to a dish means vegan: it has no meat, fish, eggs or milk.",
            "Hot food is served until 4 p.m. Cold drinks are available all day.",
          ],
        },
        {
          type: "table",
          title: "The Blue Spoon menu",
          columns: ["Dish", "Price", "Notes"],
          rows: [
            ["Toast and butter", "£2.20", "V"],
            ["Eggs on toast", "£4.50", "V"],
            ["Full breakfast", "£7.80", "Contains meat"],
            ["Porridge", "£3.50", "V; vegan option available"],
            ["Tomato soup", "£4.20", "VE"],
            ["Cheese sandwich", "£5.10", "V"],
            ["Jacket potato with beans", "£5.60", "VE"],
            ["Chicken salad", "£6.40", "Contains meat"],
            ["Tea", "£1.80", "—"],
            ["Coffee", "£2.30", "—"],
            ["Orange juice", "£2.60", "—"],
            ["Water", "£1.20", "—"],
          ],
          caption: "V = vegetarian. VE = vegan. Hot food is served until 4 p.m.",
        },
        {
          type: "tip",
          title: "Scan, do not read every word",
          text: "When you read a menu, look for the section first, then the price. You do not need to read all the descriptions. If you have a special diet, look for V, VE or the list of ingredients.",
        },
        {
          type: "exercise",
          title: "Read the menu",
          instructions:
            "Use the menu above to choose the correct answer.",
          items: [
            c(
              "What is the cheapest drink?",
              ["Water", "Tea", "Orange juice"],
              0,
              "Water costs £1.20. Tea is £1.80 and orange juice is £2.60.",
            ),
            c(
              "Which breakfast dish is vegan?",
              ["Porridge with the vegan option", "Eggs on toast", "A full breakfast"],
              0,
              "Porridge has a vegan option. Eggs and the full breakfast are not vegan.",
            ),
            c(
              "How much do tomato soup and a tea cost together?",
              ["£6.00", "£5.60", "£7.20"],
              0,
              "£4.20 + £1.80 = £6.00.",
            ),
            c(
              "You want a hot lunch with no meat, fish, eggs or milk, and you have £6. Which dish can you choose?",
              ["Jacket potato with beans", "Cheese sandwich", "Chicken salad"],
              0,
              "The jacket potato with beans is vegan (VE) and costs £5.60. The other two are not vegan.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practice ordering from a menu",
          instructions:
            "Answer each question, then reveal the model answer.",
          items: [
            p(
              "Which two symbols tell you about the food in a dish?",
              "V means vegetarian and VE means vegan.",
              "Look at the second paragraph and the menu caption.",
            ),
            p(
              "What time does hot food stop?",
              "Hot food is served until 4 p.m.",
              "Look at the final line of the introduction or the menu caption.",
            ),
            p(
              "Write a polite sentence to order tea and a cheese sandwich.",
              "Possible answer: Can I have a tea and a cheese sandwich, please?",
              "Start with Can I have … and finish with please.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What does V next to a dish mean?",
          ["The dish is vegetarian", "The dish is very large", "The dish is on offer"],
          0,
          "V means vegetarian: the dish contains no meat or fish.",
        ),
        q(
          2,
          "Which dish contains meat?",
          ["Chicken salad", "Tomato soup", "Toast and butter"],
          0,
          "The chicken salad contains meat. The other two are marked V or VE.",
        ),
        q(
          3,
          "How much is a coffee?",
          ["£2.30", "£1.80", "£2.60"],
          0,
          "The drinks list says coffee £2.30.",
        ),
        q(
          4,
          "When can you order hot food?",
          ["Until 4 p.m.", "Only in the morning", "All night"],
          0,
          "The menu says hot food is served until 4 p.m.",
        ),
      ],
    },
    {
      slug: "timetables-and-schedules",
      title: "Timetables and schedules",
      summary:
        "Read a weekly class timetable and find the right day, time and room.",
      objective:
        "Read a simple timetable and identify days, times, rooms and class lengths.",
      minutes: 25,
      blocks: [
        {
          type: "passage",
          title: "English classes at Westfield Centre",
          paragraphs: [
            "Westfield English Centre offers evening classes for beginners. All classes are in Room 2 on the first floor. Please bring a notebook and a pen. Course books are in the classroom.",
            "The centre is closed on Sundays and public holidays. On Mondays, the office is open from 10 a.m. to 6 p.m. If you have a question, speak to the teacher before or after class, or email the office.",
          ],
        },
        {
          type: "table",
          title: "This week's timetable",
          columns: ["Day", "Time", "Class"],
          rows: [
            ["Monday", "6.00–7.30 p.m.", "Grammar"],
            ["Tuesday", "6.00–7.00 p.m.", "Speaking"],
            ["Wednesday", "No class", "—"],
            ["Thursday", "6.00–7.30 p.m.", "Reading and writing"],
            ["Friday", "6.00–7.00 p.m.", "Listening"],
            ["Saturday", "10.00–11.30 a.m.", "Conversation club"],
            ["Sunday", "Closed", "—"],
          ],
          caption: "All classes are in Room 2. The office is open on Monday from 10 a.m. to 6 p.m.",
        },
        {
          type: "exercise",
          title: "Find the class",
          instructions:
            "Use the timetable and the notice to answer each question.",
          items: [
            c(
              "When is the speaking class?",
              ["Tuesday from 6.00 to 7.00 p.m.", "Monday from 6.00 to 7.30 p.m.", "Saturday from 10.00 to 11.30 a.m."],
              0,
              "The Tuesday row shows Speaking from 6.00 to 7.00 p.m.",
            ),
            c(
              "Which day has no class?",
              ["Wednesday", "Friday", "Saturday"],
              0,
              "The Wednesday row says No class.",
            ),
            c(
              "How long is the reading and writing class?",
              ["One and a half hours", "One hour", "Two hours"],
              0,
              "Thursday's class runs from 6.00 to 7.30 p.m., which is 90 minutes.",
            ),
            c(
              "Where is every class?",
              ["Room 2", "Room 12", "The office"],
              0,
              "The notice and the table caption both say all classes are in Room 2.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practice reading a timetable",
          instructions:
            "Answer in a short phrase, then reveal the model answer.",
          items: [
            p(
              "What should you bring to class?",
              "A notebook and a pen.",
              "Read the first paragraph of the notice.",
            ),
            p(
              "What can you do if you have a question on Monday?",
              "You can visit the office from 10 a.m. to 6 p.m., or speak to the teacher before or after class.",
              "Look at the second paragraph.",
            ),
            p(
              "Which class is on Saturday morning?",
              "Conversation club, from 10.00 to 11.30 a.m.",
              "Scan the Saturday row.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "When is the grammar class?",
          ["Monday from 6.00 to 7.30 p.m.", "Tuesday from 6.00 to 7.00 p.m.", "Thursday from 6.00 to 7.30 p.m."],
          0,
          "The Monday row lists Grammar from 6.00 to 7.30 p.m.",
        ),
        q(
          2,
          "How long is the listening class?",
          ["One hour", "Ninety minutes", "Thirty minutes"],
          0,
          "Friday's listening class runs from 6.00 to 7.00 p.m., which is one hour.",
        ),
        q(
          3,
          "When is the centre closed?",
          ["Sundays and public holidays", "Every evening", "Only on Wednesdays"],
          0,
          "The notice says the centre is closed on Sundays and public holidays.",
        ),
        q(
          4,
          "Where are the course books?",
          ["In the classroom", "At the office", "You must buy them at a shop"],
          0,
          "The notice says course books are in the classroom.",
        ),
      ],
    },
    {
      slug: "reading-every-day",
      title: "Reading every day",
      summary:
        "Build a five-minute reading habit using signs, messages and notices.",
      objective:
        "Use a simple reading routine with three short everyday texts.",
      minutes: 25,
      blocks: [
        {
          type: "passage",
          title: "Three texts in one day",
          paragraphs: [
            "Text 1 — A notice at the park gate: “The park closes at 7 p.m. in winter. Dogs must be on a lead. Please put your rubbish in the bin.”",
            "Text 2 — A message from Mei: “Hi! The study group meets in Room 4 at 5.30 today. Don't forget your book. See you there!”",
            "Text 3 — A shop window: “Winter coats: 50% off. Offer ends Sunday. Open 9 a.m.–6 p.m., Monday to Saturday.”",
          ],
        },
        {
          type: "rules",
          title: "A five-minute reading routine",
          items: [
            "Look at the text before you read: What kind of text is it? A notice, a message or a shop sign?",
            "Ask one question: What do I need to know? For example, what time, where or how much?",
            "Read and find the answer. You do not need every word.",
            "Write down one useful phrase or new word in a notebook.",
          ],
        },
        {
          type: "text",
          title: "Why small texts work",
          paragraphs: [
            "Reading a little every day is better than reading a lot once a month. Short texts are everywhere: on a bus, on a food packet, in a message from a friend. Each one gives you a small success.",
            "You can read the same text again the next day. The second time, you will notice words and patterns that you missed before. Repetition helps new language stay in your memory.",
          ],
        },
        {
          type: "exercise",
          title: "Read three everyday texts",
          instructions:
            "Use the three texts above. Choose the best answer for each question.",
          items: [
            c(
              "What time does the park close in winter?",
              ["7 p.m.", "5.30 p.m.", "9 a.m."],
              0,
              "The park notice says: The park closes at 7 p.m. in winter.",
            ),
            c(
              "Where does the study group meet?",
              ["Room 4", "Room 5.30", "The park"],
              0,
              "Mei's message says the group meets in Room 4 at 5.30.",
            ),
            c(
              "When does the coat offer end?",
              ["Sunday", "Monday", "Saturday"],
              0,
              "The shop window says: Offer ends Sunday.",
            ),
            c(
              "Which text tells you what to do with your rubbish?",
              ["Text 1, the park notice", "Text 2, Mei's message", "Text 3, the shop window"],
              0,
              "The park notice says: Please put your rubbish in the bin.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build your reading habit",
          instructions:
            "Think about your own day, then reveal a model answer.",
          items: [
            p(
              "Which text would you read to find a price?",
              "Text 3, the shop window, because it advertises coats and an offer. In a shop, you read signs and labels for prices.",
              "Prices appear in shops.",
            ),
            p(
              "What does “50% off” mean?",
              "It means the price is half the normal price.",
              "Fifty per cent is one half.",
            ),
            p(
              "Write one sentence about a short text you can read every day.",
              "Possible answer: I can read the signs at my bus stop every morning.",
              "Use a real place near you, or invent one.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "How long should a daily reading habit take at first?",
          ["About five minutes", "At least two hours", "A whole afternoon"],
          0,
          "The lesson suggests a five-minute routine with one short text.",
        ),
        q(
          2,
          "What must dogs do in the park?",
          ["Stay on a lead", "Stay outside the gate", "Wear a coat"],
          0,
          "The park notice says: Dogs must be on a lead.",
        ),
        q(
          3,
          "What time does the study group meet?",
          ["5.30", "4.00", "6.00"],
          0,
          "Mei writes: The study group meets in Room 4 at 5.30 today.",
        ),
        q(
          4,
          "Why is it useful to read the same short text twice?",
          ["You notice more words and patterns the second time", "It makes the text longer", "You can change the price"],
          0,
          "The lesson explains that repetition helps you notice language and remember it.",
        ),
      ],
    },
  ],
};
