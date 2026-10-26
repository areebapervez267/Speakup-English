import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1ReadingUnit1: LessonUnit = {
  title: "Signs and labels",
  description:
    "Read the short messages you meet in streets, shops and kitchens, and learn to find the important information fast.",
  lessons: [
    {
      slug: "signs-around-you",
      title: "Signs around you",
      summary:
        "Read everyday signs with confidence and know what they ask you to do.",
      objective:
        "Understand common public signs such as Push, Pull, No entry and Out of order.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "Short words, clear messages",
          paragraphs: [
            "Signs use few words because you often read them while you walk, drive or hold a shopping bag. Many signs are instructions: they tell you to do something or not to do something.",
            "You do not need to understand every letter. Look at the whole sign, its shape and its colour. Then read the key word. Words like push, pull, exit and entry appear again and again.",
          ],
        },
        {
          type: "table",
          title: "Six signs you will see",
          caption: "The setting can help you guess the meaning before you read.",
          columns: ["Sign", "Where you see it", "What it means"],
          rows: [
            ["Push", "On a door", "Open the door by pressing it away from you."],
            ["Pull", "On a door", "Open the door by moving it towards you."],
            ["No entry", "At a door or road", "Do not go in."],
            ["Out of order", "On a machine", "The machine is not working."],
            ["Queue here", "In a shop or bank", "Wait here in line."],
            ["Staff only", "On a door", "Only people who work here can go in."],
          ],
        },
        {
          type: "tip",
          title: "Look for the key word",
          text: "You do not have to read a sign word by word. Find the most important word first: OPEN, CLOSED, PUSH, PULL, EXIT or STOP. The other words usually explain it.",
        },
        {
          type: "exercise",
          title: "Read the sign",
          instructions:
            "Choose the best answer. Imagine you see each sign in the place described.",
          items: [
            c(
              "You see OUT OF ORDER on a coffee machine. What should you do?",
              ["Use a different machine", "Put more money in", "Wait for a member of staff to open it"],
              0,
              "OUT OF ORDER means the machine is not working, so you need another one.",
              "The machine cannot make coffee at the moment.",
            ),
            c(
              "A shop door says PULL. How do you open it?",
              ["Move the door towards you", "Press the door away from you", "Wait for someone else to open it"],
              0,
              "PULL means move the door towards you. PUSH means move it away from you.",
            ),
            c(
              "You want to pay in a bank. Which sign tells you where to wait?",
              ["Queue here", "Staff only", "No entry"],
              0,
              "A queue is a line of people waiting. QUEUE HERE shows where the line starts.",
            ),
            c(
              "A door says STAFF ONLY. Who can go through the door?",
              ["The people who work there", "All customers", "Only children"],
              0,
              "Staff means the people who work in a place. STAFF ONLY is not for customers.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practice reading signs",
          instructions:
            "Answer in a notebook or aloud, then reveal the model answer.",
          items: [
            p(
              "Where might you see the sign EXIT?",
              "You might see EXIT in a building, for example a cinema, a station or a shopping centre. It shows the way out.",
              "Think about leaving a building.",
            ),
            p(
              "What does NO ENTRY mean on a door?",
              "It means you must not go through that door or into that place.",
              "Entry means the act of going in.",
            ),
            p(
              "Write one suitable sign for a library.",
              "Possible answer: PLEASE KEEP QUIET. Another answer: NO FOOD OR DRINK.",
              "Think about what people should or should not do in a quiet place.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "A door says PUSH. What do you do?",
          ["Press the door away from you", "Move the door towards you", "Wait outside"],
          0,
          "PUSH tells you to press the door away from you. PULL is the opposite.",
        ),
        q(
          2,
          "Which sign tells you that something is not working?",
          ["Out of order", "No entry", "Staff only"],
          0,
          "OUT OF ORDER is used on machines that are broken or unavailable.",
        ),
        q(
          3,
          "QUEUE HERE is closest in meaning to…",
          ["Wait in line here", "Pay here", "Sit here"],
          0,
          "A queue is a line of people. The sign shows where to wait.",
        ),
        q(
          4,
          "A sign says NO ENTRY. What does it tell you?",
          ["Do not go in", "Come in quickly", "Entry costs money"],
          0,
          "NO ENTRY means entering is not allowed.",
        ),
      ],
    },
    {
      slug: "labels-and-packaging",
      title: "Labels and packaging",
      summary:
        "Find ingredients, dates and storage instructions on a food label.",
      objective:
        "Read a simple food label and understand ingredients, weight, dates and storage advice.",
      minutes: 25,
      blocks: [
        {
          type: "passage",
          title: "Mia reads a soup label",
          paragraphs: [
            "Mia is in the supermarket. She wants tomato soup for lunch. She picks up a tin and reads the label.",
            "The label says: Tomato and onion soup. Ingredients: tomatoes (60%), water, onions, salt. Net weight: 400 g. Serves 2. Best before: 12 June. Keep in a cool, dry place. After opening, keep in the fridge and eat within two days.",
            "Mia puts the tin in her basket. She is cooking for herself and her brother, so two servings is perfect. She writes “12 June” on her shopping list because she wants to use the soup before that date.",
          ],
          glossary: [
            { term: "ingredients", meaning: "The foods and other things used to make a product." },
            { term: "net weight", meaning: "The weight of the food without the packaging." },
            { term: "serves 2", meaning: "The food is enough for two people." },
            { term: "best before", meaning: "The date when the food is at its best quality." },
          ],
        },
        {
          type: "rules",
          title: "Labels answer four questions",
          items: [
            "What is in it? Look at the ingredients list.",
            "How much is there? Look at the net weight or the number of servings.",
            "When should I use it? Look for best before or use by.",
            "How do I keep it? Look for instructions about the fridge or a cool, dry place.",
          ],
        },
        {
          type: "exercise",
          title: "Read the soup label",
          instructions:
            "Use the passage above. Choose the correct answer for each question.",
          items: [
            c(
              "How many people is the soup enough for?",
              ["Two people", "Four people", "One person"],
              0,
              "The label says Serves 2, so it is enough for two people.",
            ),
            c(
              "What is the main ingredient?",
              ["Tomatoes", "Salt", "Water"],
              0,
              "Tomatoes are first in the list and make up 60% of the soup, so they are the main ingredient.",
            ),
            c(
              "By which date should Mia use the soup?",
              ["12 June", "2 June", "12 July"],
              0,
              "The label says Best before: 12 June.",
            ),
            c(
              "Where should Mia keep the tin before opening it?",
              ["In a cool, dry place", "In the fridge", "Next to the cooker"],
              0,
              "The label says: Keep in a cool, dry place. The fridge is only for after opening.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practice reading labels",
          instructions:
            "Answer with words from the label, then reveal the model answer.",
          items: [
            p(
              "Find a word on the label that means “the food used to make a dish”.",
              "Ingredients.",
              "It is a long word with the letter g in the middle.",
            ),
            p(
              "What does 400 g tell you?",
              "It tells you the net weight: the soup weighs 400 grams without the tin.",
              "Grams are a unit of weight.",
            ),
            p(
              "Write one instruction for keeping the soup fresh after opening.",
              "Keep it in the fridge and eat it within two days.",
              "Look at the final sentence of the label.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which part of a label tells you what is inside the food?",
          ["The ingredients list", "The net weight", "The best before date"],
          0,
          "The ingredients list names the foods and other things in the product.",
        ),
        q(
          2,
          "What does Serves 2 mean?",
          ["It is enough for two people", "It takes two hours to cook", "It contains two ingredients"],
          0,
          "Serves 2 describes the number of portions in the pack.",
        ),
        q(
          3,
          "The label says BEST BEFORE 12 JUNE. What does this tell Mia?",
          ["The soup is at its best quality before that date", "The supermarket opens on that date", "The soup costs £12"],
          0,
          "Best before is a quality date. It tells you when the food tastes best.",
        ),
        q(
          4,
          "Which of these is NOT an ingredient in the soup?",
          ["Chicken", "Onions", "Water"],
          0,
          "Chicken is not in the ingredients list. The soup contains tomatoes, water, onions and salt.",
        ),
      ],
    },
    {
      slug: "numbers-dates-and-prices",
      title: "Numbers, dates and prices",
      summary:
        "Practise scanning short notices for times, dates and prices.",
      objective:
        "Read times, dates and prices accurately in a short public notice.",
      minutes: 25,
      blocks: [
        {
          type: "passage",
          title: "The Saturday market",
          paragraphs: [
            "The Green Street market is open every Saturday from 8 a.m. to 2 p.m. This week it is also open on Sunday 11 May for a spring fair.",
            "Prices this week: apples £2.50 a kilo, oranges £3.00 a kilo, fresh bread £2.20, local cheese £5.50, tomato soup £3.75 a bowl. Tea and coffee are free with any hot food before 10 a.m.",
            "The market is in Green Street, behind the library. There is a bus stop opposite the main entrance. Please leave your car at home; the car park is small and fills quickly.",
          ],
        },
        {
          type: "table",
          title: "Reading the details",
          columns: ["Information", "Where to look", "Example"],
          rows: [
            ["Time", "Numbers with a.m. or p.m.", "8 a.m., 2 p.m."],
            ["Date", "A day and a month", "Sunday 11 May"],
            ["Price", "A currency symbol and a number", "£2.50"],
            ["Place", "Street names and prepositions", "in Green Street, behind the library"],
          ],
        },
        {
          type: "tip",
          title: "Say prices in two parts",
          text: "In British English, £3.75 is usually said “three pounds seventy-five”. £2.50 can be “two pounds fifty” or “two fifty”. You do not need to say pence in everyday speech unless you want to be very clear.",
        },
        {
          type: "exercise",
          title: "Find the information",
          instructions:
            "Scan the market notice for each answer. Choose the correct option.",
          items: [
            c(
              "What time does the market open on Saturday?",
              ["8 a.m.", "10 a.m.", "2 p.m."],
              0,
              "The notice says the market is open from 8 a.m. to 2 p.m.",
            ),
            c(
              "How much are the apples?",
              ["£2.50 a kilo", "£3.00 a kilo", "£5.50 a kilo"],
              0,
              "The price list says apples £2.50 a kilo.",
            ),
            c(
              "When is the spring fair?",
              ["Sunday 11 May", "Saturday 11 May", "Sunday 8 May"],
              0,
              "The notice says the market is open on Sunday 11 May for a spring fair.",
            ),
            c(
              "What free item is available with hot food before 10 a.m.?",
              ["Tea or coffee", "Bread", "Cheese"],
              0,
              "The notice says tea and coffee are free with any hot food before 10 a.m.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practice numbers and dates",
          instructions:
            "Write your answer or say it aloud, then check the model.",
          items: [
            p(
              "How do you usually say £5.50?",
              "Five pounds fifty. You can also say five fifty in a shop.",
              "Say the pounds first, then the pence.",
            ),
            p(
              "The market closes at 2 p.m. What time is that in the afternoon?",
              "Two o'clock in the afternoon.",
              "p.m. means after midday.",
            ),
            p(
              "Find the place: where exactly is the market?",
              "It is in Green Street, behind the library.",
              "Read the third paragraph.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "How do you usually say £3.75?",
          ["Three pounds seventy-five", "Three seventy-five pounds", "Three point seven five"],
          0,
          "Say the pounds first, then the pence: three pounds seventy-five.",
        ),
        q(
          2,
          "The market opens at 8 a.m. and closes at 2 p.m. How long is it open?",
          ["Six hours", "Four hours", "Eight hours"],
          0,
          "From 8 a.m. to 2 p.m. is six hours.",
        ),
        q(
          3,
          "Which date is written as a day and a month?",
          ["Sunday 11 May", "11 a.m.", "£2.50"],
          0,
          "Sunday 11 May gives the day of the week, the day number and the month.",
        ),
        q(
          4,
          "Why does the notice ask people to leave their cars at home?",
          ["The car park is small and fills quickly", "Cars are not allowed in the town", "Petrol is free on Saturdays"],
          0,
          "The final sentence gives the reason: the car park is small and fills quickly.",
        ),
      ],
    },
  ],
};
