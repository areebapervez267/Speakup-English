import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1WritingUnit3: LessonUnit = {
  title: "Everyday writing",
  description:
    "Leave useful notes and send a postcard that sounds natural and friendly.",
  lessons: [
    {
      slug: "notes-and-reminders",
      title: "Notes and reminders",
      summary:
        "Write short notes that tell someone what to do, where and when.",
      objective:
        "Write a clear note or reminder with a name, an action and a time.",
      minutes: 25,
      blocks: [
        {
          type: "examples",
          title: "Three notes that work",
          intro:
            "Notes are short because the reader knows the situation. Even so, they need the key facts.",
          items: [
            {
              text: "Mum — I'm at the library. I'm home at 6. Can you save me some dinner? Thanks, Ella",
              note: "The note says where Ella is, when she is home and what she needs.",
            },
            {
              text: "TOM: Please take the blue bin out on Tuesday morning. Thanks!",
              note: "A reminder: name + action + time.",
            },
            {
              text: "Doctor appointment: Friday 10.30, Room 3. Bring the letter.",
              note: "A personal reminder: what, when, where and what to take.",
            },
          ],
        },
        {
          type: "rules",
          title: "A useful note answers three questions",
          items: [
            "Who is the note for? Write a name at the top if needed.",
            "What should they know or do? Use a clear verb: take, call, buy, meet.",
            "When? Add a day, date or time.",
          ],
        },
        {
          type: "table",
          title: "Useful note language",
          columns: ["Purpose", "Phrase"],
          rows: [
            ["Asking", "Can you …? / Please …"],
            ["Saying where", "I'm at … / I'm in …"],
            ["Giving a time", "… at 6. / … on Tuesday morning."],
            ["Finishing", "Thanks! / See you later."],
          ],
        },
        {
          type: "exercise",
          title: "Choose the clearest note",
          instructions:
            "Read each situation and select the note that gives the reader the information they need.",
          items: [
            c(
              "You are at work and will be home late. You want your family to know. Which note is best?",
              ["I'm working late today. I'm home at 9 p.m. Please save me some dinner. — Ali", "Late. Dinner. Ali", "Hello, I am at work and I have many things to do."],
              0,
              "The first note explains the situation, gives a time and asks for dinner clearly.",
            ),
            c(
              "You need your flatmate to buy milk and bread. Which note is best?",
              ["Sam — can you buy milk and bread today, please? Thanks, Jo", "Sam, milk bread. Jo", "I like milk and bread."],
              0,
              "The first note names Sam, asks clearly and names both items.",
            ),
            c(
              "Which note is a reminder for the writer, not for another person?",
              ["Dentist: Wednesday 4.15. Take my insurance card.", "Hi Ben, see you at 4.15.", "Mum, can you call me at 4.15?"],
              0,
              "The first note lists an appointment and what to bring; it does not address another person.",
            ),
            c(
              "Which phrase makes a polite request?",
              ["Can you call me after work, please?", "Call me after work now.", "You call me."],
              0,
              "Can you … please? is a polite request.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write your own notes",
          instructions:
            "Write each note, then compare it with the model answer. Keep it short but complete.",
          items: [
            p(
              "Write a note to your flatmate: you are out, and you will be back at 8 p.m.",
              "Model answer: Jo — I'm at the gym. I'm back at 8. — Sam",
              "Include where you are and your return time.",
            ),
            p(
              "Write a reminder to take your passport to the airport on Friday.",
              "Model answer: Airport on Friday: take my passport and ticket.",
              "Use a name/action/time list format.",
            ),
            p(
              "Write a note asking your brother to feed the cat this evening.",
              "Model answer: Tom, can you feed the cat this evening, please? Thanks!",
              "Use a name, a polite request and a time.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which detail is essential in a note that asks someone to do something?",
          ["The action and the time", "The writer's favourite colour", "A long goodbye"],
          0,
          "The reader needs to know what to do and when to do it.",
        ),
        q(
          2,
          "Which request is the most polite?",
          ["Can you call me this evening, please?", "Call me this evening.", "You must call me."],
          0,
          "Can you … please? is a polite way to ask.",
        ),
        q(
          3,
          "A note begins “Sam —”. Who is the note for?",
          ["Sam", "The writer", "Sam's teacher"],
          0,
          "The name at the start tells you who should read the note.",
        ),
        q(
          4,
          "Which note is clear and complete?",
          ["Bin day tomorrow: put the green bin outside. — Mia", "Bin tomorrow. Mia", "Tomorrow is a day."],
          0,
          "The first note gives the action (put the green bin outside) and the time (tomorrow).",
        ),
      ],
    },
    {
      slug: "postcards",
      title: "Postcards",
      summary:
        "Send a short holiday message with a place, an activity and a friendly closing.",
      objective:
        "Write a short postcard message with a greeting, information about the trip and a closing.",
      minutes: 25,
      blocks: [
        {
          type: "passage",
          title: "Marco's postcard",
          paragraphs: [
            "Dear Zoe,",
            "I'm in Rome for three days with my family. The weather is hot and sunny. Yesterday we walked around the old streets and ate pizza near a small square.",
            "Tomorrow we want to visit the museum. I bought you a little present!",
            "We fly home on Thursday. Wish you were here,",
            "Marco",
          ],
        },
        {
          type: "rules",
          title: "What to put on a postcard",
          items: [
            "Start with Dear + the person's name.",
            "Say where you are: I'm in … / We are in …",
            "Say what you are doing or what the place is like.",
            "Mention your plans or your return: Tomorrow we want to … / We come home on …",
            "End with a friendly phrase and your name.",
          ],
        },
        {
          type: "table",
          title: "Useful postcard phrases",
          columns: ["Job", "Phrase"],
          rows: [
            ["Opening", "Dear …"],
            ["Weather", "The weather is sunny and warm."],
            ["Activity", "We are visiting … / We went to …"],
            ["Food", "The food here is excellent."],
            ["Closing", "Wish you were here. / See you soon. / Love, …"],
          ],
        },
        {
          type: "exercise",
          title: "Writing choices",
          instructions:
            "Choose the best postcard sentence for each situation.",
          items: [
            c(
              "Which opening is correct for a postcard to your friend Ana?",
              ["Dear Ana,", "To whom it may concern,", "Hi Ana, I am writing to apply for the job."],
              0,
              "Dear Ana is the usual friendly opening on a postcard.",
            ),
            c(
              "You are in a sunny city. Which sentence is best?",
              ["The weather is sunny and warm.", "The weather are sunny and warm.", "Sunny and warm is weather."],
              0,
              "Use The weather is + adjectives.",
            ),
            c(
              "Which sentence tells the reader about a future plan?",
              ["Tomorrow we want to visit the market.", "Yesterday we visited the market.", "The market is far."],
              0,
              "Tomorrow we want to visit the market describes a plan.",
            ),
            c(
              "Which closing is suitable for a postcard to a friend?",
              ["Wish you were here, Mia", "Yours faithfully, Mia", "Dear Mia,"],
              0,
              "Wish you were here is a friendly postcard closing. Dear Mia would be an opening.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a postcard",
          instructions:
            "Use invented details and write each part. Compare your text with the model.",
          items: [
            p(
              "Write an opening for a postcard to your friend Leo.",
              "Model answer: Dear Leo,",
              "Use Dear + name + comma.",
            ),
            p(
              "Write two sentences about the place, weather, food or your activities.",
              "Model answer: I'm in a small town near the mountains. The weather is cool, but the food is excellent.",
              "Use the present simple for current facts.",
            ),
            p(
              "Write a closing and your name.",
              "Model answer: See you soon! Love, Nina",
              "The closing is friendly and followed by your name.",
            ),
            p(
              "Write a complete postcard of 3–4 sentences using the parts above.",
              "Model answer: Dear Leo, I'm in a small town near the mountains. The weather is cool, but the food is excellent. Tomorrow we want to walk to the lake. See you soon! Love, Nina",
              "Include a greeting, information about the trip and a closing.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is a postcard usually about?",
          ["A trip, a place or news from a holiday", "A formal job application", "A maths exam"],
          0,
          "Postcards are short, friendly messages, often sent while travelling.",
        ),
        q(
          2,
          "Which sentence is correct?",
          ["The weather is sunny.", "The weather are sunny.", "The weather sunny is."],
          0,
          "Weather is singular, so use is: The weather is sunny.",
        ),
        q(
          3,
          "Which opening is friendly and correct?",
          ["Dear Leo,", "Dear Sir or Madam,", "To Leo, From Nina"],
          0,
          "Dear Leo is the natural friendly opening for a postcard.",
        ),
        q(
          4,
          "Which phrase can close a postcard?",
          ["Wish you were here", "Subject: Holiday news", "Please find attached my CV"],
          0,
          "Wish you were here is a common friendly postcard closing.",
        ),
      ],
    },
  ],
};
