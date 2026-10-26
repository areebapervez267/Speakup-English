import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1ListeningUnit2: LessonUnit = {
  title: "Family and daily routines",
  description:
    "Follow information about people, times and everyday habits.",
  lessons: [
    {
      slug: "family-and-friends",
      title: "Family and friends",
      summary:
        "Listen to a description of a family photo and match people to facts.",
      objective:
        "Understand simple descriptions of family members, their jobs and their homes.",
      minutes: 25,
      blocks: [
        {
          type: "transcript",
          title: "Clara's family photo",
          context:
            "Clara shows a photo of her family to a friend.",
          lines: [
            { speaker: "Clara", text: "This is a photo of my family. My mother's name is Elena. She's a teacher at a primary school." },
            { speaker: "Clara", text: "My father is Paulo. He works in a bank in the city centre." },
            { speaker: "Clara", text: "This is my older brother, Marco. He's 27 and he lives in Lisbon. He works in a hotel there." },
            { speaker: "Clara", text: "And this is my younger sister, Sofia. She's 12. She loves music and she plays the guitar." },
            { speaker: "Clara", text: "My grandmother also lives with us. She's 78 and she cooks wonderful food." },
            { speaker: "Clara", text: "My best friend is Rui. He lives next door. We play football together on Sundays." },
          ],
        },
        {
          type: "table",
          title: "Who is who?",
          columns: ["Person", "Relationship", "Key detail"],
          rows: [
            ["Elena", "Mother", "Teacher"],
            ["Paulo", "Father", "Works in a bank"],
            ["Marco", "Older brother", "Lives in Lisbon"],
            ["Sofia", "Younger sister", "Plays the guitar"],
            ["Grandmother", "Lives with the family", "Cooks wonderful food"],
            ["Rui", "Best friend", "Lives next door"],
          ],
        },
        {
          type: "exercise",
          title: "Match the facts",
          instructions:
            "Read the transcript, cover it, then choose the best answer.",
          items: [
            c(
              "What is Elena's job?",
              ["She is a teacher", "She works in a bank", "She works in a hotel"],
              0,
              "Clara says: She's a teacher at a primary school.",
            ),
            c(
              "Where does Marco live?",
              ["Lisbon", "Next door", "In the city centre"],
              0,
              "Clara says: He's 27 and he lives in Lisbon.",
            ),
            c(
              "Who plays the guitar?",
              ["Sofia", "Clara", "Rui"],
              0,
              "Clara says Sofia is 12 and plays the guitar.",
            ),
            c(
              "How often do Clara and Rui play football?",
              ["On Sundays", "Every day", "On Saturdays"],
              0,
              "Clara says: We play football together on Sundays.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Talk about family",
          instructions:
            "Answer first, then reveal the model response. Try the final task with your own family or friends.",
          items: [
            p(
              "Who lives with Clara and her parents?",
              "Her grandmother and her younger sister, Sofia, live with the family.",
              "Clara mentions two people at home besides her parents.",
            ),
            p(
              "What do you learn about Rui?",
              "He is Clara's best friend, he lives next door and he plays football with Clara on Sundays.",
              "Listen for three facts in the final line.",
            ),
            p(
              "Describe one person in your family in two sentences.",
              "Model answer: My brother is 20. He is a student and he likes basketball.",
              "Use This is … / He is … / She is … and one activity.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Who is Paulo?",
          ["Clara's father", "Clara's brother", "Clara's friend"],
          0,
          "Clara says: My father is Paulo.",
        ),
        q(
          2,
          "How old is Marco?",
          ["27", "12", "78"],
          0,
          "Clara says: He's 27 and he lives in Lisbon.",
        ),
        q(
          3,
          "Where does Marco work?",
          ["In a hotel", "In a school", "In a bank"],
          0,
          "Clara says Marco works in a hotel in Lisbon. It is Paulo who works in a bank.",
        ),
        q(
          4,
          "How old is Clara's grandmother?",
          ["78", "72", "87"],
          0,
          "Clara says: She's 78 and she cooks wonderful food.",
        ),
      ],
    },
    {
      slug: "telling-the-time",
      title: "Telling the time",
      summary:
        "Catch clock times and work out how long an activity lasts.",
      objective:
        "Understand times, durations and simple arrangements in a short conversation.",
      minutes: 25,
      blocks: [
        {
          type: "transcript",
          title: "Before the speaking class",
          context:
            "Ben asks a member of staff about the next speaking class.",
          lines: [
            { speaker: "Ben", text: "Excuse me, what time is the next speaking class?" },
            { speaker: "Staff", text: "It's at 6.15. It's 5.50 now, so you have twenty-five minutes." },
            { speaker: "Ben", text: "Great. How long is the class?" },
            { speaker: "Staff", text: "One hour. It finishes at 7.15." },
            { speaker: "Ben", text: "Is there a break?" },
            { speaker: "Staff", text: "Yes, five minutes at 6.45." },
            { speaker: "Ben", text: "Thank you. I'll wait in the café." },
            { speaker: "Staff", text: "The café closes at 8, so you can get a drink after class too." },
          ],
        },
        {
          type: "tip",
          title: "Two ways to say the time",
          text: "You can say 6.15 as “six fifteen” or “a quarter past six”. 6.45 is “six forty-five” or “a quarter to seven”. In timetables and announcements, the number form is very common.",
        },
        {
          type: "exercise",
          title: "Check the times",
          instructions:
            "Read the transcript, cover it, then answer the questions.",
          items: [
            c(
              "What time is the speaking class?",
              ["6.15", "5.50", "6.45"],
              0,
              "The staff member says: It's at 6.15.",
            ),
            c(
              "How long is the class?",
              ["One hour", "Twenty-five minutes", "Five minutes"],
              0,
              "The staff member says: One hour. It finishes at 7.15.",
            ),
            c(
              "When is the break?",
              ["At 6.45", "At 7.15", "At 5.50"],
              0,
              "The staff member says: Yes, five minutes at 6.45.",
            ),
            c(
              "What time does the café close?",
              ["8 p.m.", "7.15 p.m.", "6.15 p.m."],
              0,
              "The staff member says: The café closes at 8.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise times",
          instructions:
            "Answer aloud, then reveal the model.",
          items: [
            p(
              "How many minutes are there between 5.50 and 6.15?",
              "Twenty-five minutes.",
              "Count from 5.50 to 6.00, then from 6.00 to 6.15.",
            ),
            p(
              "Say 6.45 in two different ways.",
              "Six forty-five and a quarter to seven.",
              "A quarter of an hour is 15 minutes.",
            ),
            p(
              "Make a simple arrangement: suggest a time to meet a friend.",
              "Model answer: Let's meet at 5.30 at the café.",
              "Use Let's meet at + time + place.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What time is it when Ben asks about the class?",
          ["5.50", "6.15", "6.45"],
          0,
          "The staff member says: It's 5.50 now.",
        ),
        q(
          2,
          "What time does the class finish?",
          ["7.15", "6.45", "8.00"],
          0,
          "The class starts at 6.15, lasts one hour and finishes at 7.15.",
        ),
        q(
          3,
          "How long is the break?",
          ["Five minutes", "Fifteen minutes", "One hour"],
          0,
          "The staff member says: five minutes at 6.45.",
        ),
        q(
          4,
          "Where does Ben plan to wait?",
          ["In the café", "In the classroom", "At the bus stop"],
          0,
          "Ben says: I'll wait in the café.",
        ),
      ],
    },
    {
      slug: "a-normal-day",
      title: "A normal day",
      summary:
        "Follow a baker's daily routine and put the events in order.",
      objective:
        "Understand simple present descriptions of a daily routine with times.",
      minutes: 25,
      blocks: [
        {
          type: "transcript",
          title: "Jonas's working day",
          context:
            "Jonas works in a bakery. He describes his normal day.",
          lines: [
            { speaker: "Jonas", text: "I work in a bakery, so my day starts very early." },
            { speaker: "Jonas", text: "My alarm rings at 4.30, and I get up at 4.45. I have a quick shower and a cup of tea." },
            { speaker: "Jonas", text: "I start work at 5.30. I make bread until about 10 o'clock." },
            { speaker: "Jonas", text: "At 10.30 I have a break and eat my breakfast. Then I clean the kitchen and help the customers." },
            { speaker: "Jonas", text: "I finish work at 1.30 in the afternoon. At home, I sleep for an hour." },
            { speaker: "Jonas", text: "In the evening, I go running and I cook dinner. I go to bed at 10 o'clock because I get up early again." },
          ],
        },
        {
          type: "table",
          title: "Jonas's timetable",
          columns: ["Time", "Activity"],
          rows: [
            ["4.30", "The alarm rings"],
            ["4.45", "Gets up"],
            ["5.30", "Starts work"],
            ["10.30", "Break and breakfast"],
            ["1.30 p.m.", "Finishes work"],
            ["10.00 p.m.", "Goes to bed"],
          ],
        },
        {
          type: "exercise",
          title: "Follow the routine",
          instructions:
            "Read the transcript, cover it, then choose the best answer.",
          items: [
            c(
              "What time does Jonas's alarm ring?",
              ["4.30", "4.45", "5.30"],
              0,
              "Jonas says: My alarm rings at 4.30.",
            ),
            c(
              "What time does he start work?",
              ["5.30", "4.45", "10.30"],
              0,
              "He says: I start work at 5.30.",
            ),
            c(
              "When does he eat breakfast?",
              ["At 10.30", "At 5.30", "At 1.30"],
              0,
              "He says: At 10.30 I have a break and eat my breakfast.",
            ),
            c(
              "What does he do after work?",
              ["He sleeps for an hour", "He goes running immediately", "He starts work again"],
              0,
              "Jonas says: At home, I sleep for an hour. He goes running later in the evening.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Describe a routine",
          instructions:
            "Answer from memory, then check the model. Use the last task for your own routine.",
          items: [
            p(
              "Why does Jonas go to bed at 10?",
              "Because he gets up early again the next day.",
              "Listen to the final sentence.",
            ),
            p(
              "Put these in order: start work, get up, alarm rings.",
              "The alarm rings, then he gets up, then he starts work.",
              "Times: 4.30, 4.45, 5.30.",
            ),
            p(
              "Describe two things you do on a normal morning, with times.",
              "Model answer: I get up at 7. I start work at 8.30.",
              "Use I + verb + at + time.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Where does Jonas work?",
          ["In a bakery", "In a bank", "In a school"],
          0,
          "Jonas says: I work in a bakery.",
        ),
        q(
          2,
          "What does he do at 10.30?",
          ["He has a break and eats breakfast", "He goes home", "He goes running"],
          0,
          "At 10.30 he has a break and eats breakfast.",
        ),
        q(
          3,
          "What time does he finish work?",
          ["1.30 p.m.", "10.30 a.m.", "4.30 p.m."],
          0,
          "Jonas says: I finish work at 1.30 in the afternoon.",
        ),
        q(
          4,
          "What does Jonas do in the evening?",
          ["He goes running and cooks dinner", "He works in the bakery", "He goes to bed at 7"],
          0,
          "In the evening he goes running and cooks dinner, then goes to bed at 10.",
        ),
      ],
    },
  ],
};
