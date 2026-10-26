import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1ReadingUnit2: LessonUnit = {
  title: "Messages",
  description:
    "Read texts, emails and postcards for the main idea and the important details.",
  lessons: [
    {
      slug: "text-messages",
      title: "Text messages",
      summary:
        "Follow a short phone conversation and understand common abbreviations.",
      objective:
        "Understand short text messages and identify who, where and when.",
      minutes: 25,
      blocks: [
        {
          type: "passage",
          title: "Three messages",
          paragraphs: [
            "Message 1, from Leo, 6:45 p.m.: “Hi Sam, I'm outside the cinema now. Are you near?”",
            "Message 2, from Sam, 6:52 p.m.: “Hi Leo, sorry! The bus is late. I'm there at 7.15. OK?”",
            "Message 3, from Leo, 6:53 p.m.: “No problem. I have the tickets. See you soon!”",
          ],
        },
        {
          type: "rules",
          title: "A clear message answers three questions",
          items: [
            "Who is writing? The phone shows the name, so the message can start with Hi Leo.",
            "Where are they? Leo says outside the cinema.",
            "When will they meet? Sam gives a time: 7.15.",
          ],
        },
        {
          type: "table",
          title: "Useful short forms",
          caption: "These are common in friendly messages, not in formal writing.",
          columns: ["Short form", "Full form", "Example"],
          rows: [
            ["pls", "please", "Pls call me."],
            ["thx", "thanks", "Thx for the ticket!"],
            ["c u", "see you", "C u at 7."],
            ["l8r", "later", "C u l8r."],
            ["OK", "all right / understood", "OK, no problem."],
          ],
        },
        {
          type: "exercise",
          title: "Understand the conversation",
          instructions:
            "Read the three messages again. Choose the best answer.",
          items: [
            c(
              "Where are Leo and Sam meeting?",
              ["At the cinema", "At the bus stop", "At a café"],
              0,
              "Leo says he is outside the cinema, so that is where they are meeting.",
            ),
            c(
              "Why is Sam late?",
              ["The bus is late", "Sam has no ticket", "Sam is at work"],
              0,
              "Sam writes: The bus is late.",
            ),
            c(
              "What time does Sam expect to arrive?",
              ["7.15", "6.45", "6.52"],
              0,
              "Sam says: I'm there at 7.15.",
            ),
            c(
              "Who has the tickets?",
              ["Leo", "Sam", "The cinema staff"],
              0,
              "Leo writes: I have the tickets.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practice reading messages",
          instructions:
            "Answer in your own words or with a short phrase, then reveal the model.",
          items: [
            p(
              "What does “pls” mean?",
              "It means please.",
              "It is a short form of a polite word.",
            ),
            p(
              "Sam writes “Sorry!”. Why?",
              "Sam is late, so the message apologises to Leo.",
              "Look at the next sentence: the bus is late.",
            ),
            p(
              "Write a short reply to a friend who says: “I'm outside the cinema.”",
              "Possible answer: OK, I'm near. See you in five minutes!",
              "Say where you are and when you will arrive.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Where is Leo waiting?",
          ["Outside the cinema", "Inside the bus", "At home"],
          0,
          "Leo's first message says: I'm outside the cinema now.",
        ),
        q(
          2,
          "What abbreviation means “see you later”?",
          ["C u l8r", "Pls", "Thx"],
          0,
          "C u stands for see you, and l8r stands for later.",
        ),
        q(
          3,
          "How does Leo reply to Sam's apology?",
          ["No problem", "Goodbye", "I'm late too"],
          0,
          "Leo writes No problem, which shows he accepts the apology.",
        ),
        q(
          4,
          "Which message gives a time?",
          ["Sam's message at 6:52", "Leo's first message at 6:45", "None of the messages"],
          0,
          "Sam says I'm there at 7.15. That is the only time in the messages.",
        ),
      ],
    },
    {
      slug: "short-emails",
      title: "Short emails",
      summary:
        "Learn the parts of a friendly email and read one for key details.",
      objective:
        "Identify the subject, greeting, body and closing of a short email and understand its main idea.",
      minutes: 25,
      blocks: [
        {
          type: "passage",
          title: "An email from Clara",
          paragraphs: [
            "Subject: Hello from Lisbon",
            "Hi Nina,",
            "My name is Clara. I am from Lisbon, in Portugal. I am 19 years old and I study English at a language school. My class is on Tuesdays and Thursdays.",
            "In my free time, I like music and swimming. I also cook with my mother on Sundays. Her fish soup is very good!",
            "I want to practise English with a friend. Do you want to write to me?",
            "Write soon,",
            "Clara",
          ],
        },
        {
          type: "rules",
          title: "The parts of a friendly email",
          items: [
            "Subject: a short line that says what the email is about.",
            "Greeting: Hi Nina, or Hello Nina,",
            "Body: the message, usually in short paragraphs.",
            "Closing: Write soon, or Best wishes,",
            "Name: the writer's name at the end.",
          ],
        },
        {
          type: "exercise",
          title: "Read Clara's email",
          instructions:
            "Read the email and choose the best answer for each question.",
          items: [
            c(
              "Where is Clara from?",
              ["Lisbon, Portugal", "London, England", "Madrid, Spain"],
              0,
              "Clara writes: I am from Lisbon, in Portugal.",
            ),
            c(
              "When is her English class?",
              ["Tuesdays and Thursdays", "Mondays and Fridays", "Every Sunday"],
              0,
              "She says: My class is on Tuesdays and Thursdays.",
            ),
            c(
              "What does Clara want?",
              ["A friend to practise English with", "A new English school", "A recipe for fish soup"],
              0,
              "She asks: Do you want to write to me? She wants an English-speaking friend.",
            ),
            c(
              "What is the subject of the email?",
              ["Hello from Lisbon", "Fish soup", "English class times"],
              0,
              "The subject line at the top says: Hello from Lisbon.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practice email reading",
          instructions:
            "Answer each question, then reveal the model answer.",
          items: [
            p(
              "Which part of the email tells Nina what the message is about before she opens it?",
              "The subject line: Hello from Lisbon.",
              "It is the line after Subject:.",
            ),
            p(
              "What does Clara write about her free time?",
              "She likes music and swimming, and she cooks with her mother on Sundays.",
              "Look at the second paragraph of the body.",
            ),
            p(
              "Write a suitable subject for an email that says: “I am learning English and I want a pen friend.”",
              "Possible answer: Hello from a new English learner. Another answer: Looking for a pen friend.",
              "Keep it short and clear.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which line is the greeting?",
          ["Hi Nina,", "Subject: Hello from Lisbon", "Write soon,"],
          0,
          "The greeting comes at the start and names the person: Hi Nina,",
        ),
        q(
          2,
          "How old is Clara?",
          ["19", "9", "29"],
          0,
          "Clara writes: I am 19 years old.",
        ),
        q(
          3,
          "What does Clara do on Sundays?",
          ["She cooks with her mother", "She goes swimming", "She studies English"],
          0,
          "She says: I also cook with my mother on Sundays.",
        ),
        q(
          4,
          "Which closing is friendly and suitable for this email?",
          ["Write soon,", "Yours faithfully,", "To whom it may concern,"],
          0,
          "Write soon is friendly and natural for a message to a new friend.",
        ),
      ],
    },
    {
      slug: "postcards",
      title: "Postcards",
      summary:
        "Read a holiday postcard and find out where, when and what.",
      objective:
        "Understand a short postcard and identify its writer, place, weather and plans.",
      minutes: 25,
      blocks: [
        {
          type: "passage",
          title: "Greetings from the lake",
          paragraphs: [
            "Dear Ben,",
            "We are in a small town near Lake Bled. The weather is sunny and warm. In the morning we walk around the lake, and in the afternoon we swim.",
            "The food here is excellent. Last night I had bread, cheese and a big bowl of soup. Tomorrow we want to visit the castle on the hill.",
            "We come home on Sunday. I have a little present for you!",
            "Wish you were here,",
            "Ana",
          ],
        },
        {
          type: "tip",
          title: "Postcards are short, but they have a job",
          text: "A postcard usually tells the reader three things: where you are, what you are doing and when you are coming home. Friendly phrases like Wish you were here make it feel personal.",
        },
        {
          type: "exercise",
          title: "Read Ana's postcard",
          instructions:
            "Choose the correct answer using the postcard.",
          items: [
            c(
              "Who is the postcard for?",
              ["Ben", "Ana", "Ana's mother"],
              0,
              "The postcard starts Dear Ben, so it is for Ben.",
            ),
            c(
              "Where is Ana?",
              ["Near a lake", "At the beach", "In a big city"],
              0,
              "Ana writes: We are in a small town near Lake Bled.",
            ),
            c(
              "What is the weather like?",
              ["Sunny and warm", "Rainy and cold", "Windy and cloudy"],
              0,
              "Ana says: The weather is sunny and warm.",
            ),
            c(
              "What does Ana plan to do tomorrow?",
              ["Visit a castle", "Go home", "Cook dinner"],
              0,
              "She writes: Tomorrow we want to visit the castle on the hill.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practice reading postcards",
          instructions:
            "Give a short answer, then check the model response.",
          items: [
            p(
              "What does “Wish you were here” mean?",
              "It means “I would like you to be here with me.” It is a friendly thing to write on a postcard.",
              "Think about a friend who is far away.",
            ),
            p(
              "When does Ana come home?",
              "She comes home on Sunday.",
              "Look at the final full paragraph.",
            ),
            p(
              "Write one sentence for a postcard that tells the reader about the weather.",
              "Possible answer: It is hot and sunny here every day.",
              "Use It is + weather adjective.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Where is Ana staying?",
          ["In a small town near a lake", "In a hotel by the sea", "On a farm"],
          0,
          "The postcard says: We are in a small town near Lake Bled.",
        ),
        q(
          2,
          "What does Ana do in the afternoon?",
          ["She swims", "She visits a castle", "She walks to the station"],
          0,
          "Ana says: In the afternoon we swim.",
        ),
        q(
          3,
          "What did Ana eat last night?",
          ["Bread, cheese and soup", "Fish and chips", "Only a sandwich"],
          0,
          "She had bread, cheese and a big bowl of soup.",
        ),
        q(
          4,
          "What is Ana's closing phrase?",
          ["Wish you were here", "Best regards", "See you at work"],
          0,
          "She ends with Wish you were here, a common postcard phrase.",
        ),
      ],
    },
  ],
};
