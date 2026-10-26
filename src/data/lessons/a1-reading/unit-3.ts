import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1ReadingUnit3: LessonUnit = {
  title: "Simple texts",
  description:
    "Move from short messages to complete texts: a profile, a description and a story.",
  lessons: [
    {
      slug: "a-personal-profile",
      title: "A personal profile",
      summary:
        "Read a short profile and learn how information about a person is organised.",
      objective:
        "Find personal details such as age, home, work and free-time activities in a profile.",
      minutes: 25,
      blocks: [
        {
          type: "passage",
          title: "Meet Priya",
          paragraphs: [
            "Priya Sharma is 24 years old. She is from Pune, a large city in India. She now lives in Bristol, in the UK, with her sister and her sister's family.",
            "Priya works in a hospital. She is a nurse. She starts work at 7.30 a.m. and finishes at 3 p.m. On Wednesdays she has an English class after work.",
            "In her free time, Priya likes cooking, cycling and watching films. She wants to visit Scotland next summer.",
          ],
          glossary: [
            { term: "nurse", meaning: "A person who cares for people who are ill." },
            { term: "free time", meaning: "Time when you are not working or studying." },
            { term: "next summer", meaning: "The summer after this one." },
          ],
        },
        {
          type: "text",
          title: "How a profile is organised",
          paragraphs: [
            "A profile often begins with basic information: name, age and home. Then it moves to work or study. The final part is often about free time, interests or plans.",
            "You do not need to read every sentence at the same speed. If you want to know where someone lives, move your eyes down the text until you find a place name or the word lives.",
          ],
        },
        {
          type: "exercise",
          title: "Find Priya's details",
          instructions:
            "Read the profile and choose the correct answer to each question.",
          items: [
            c(
              "What is Priya's job?",
              ["She is a nurse", "She is a teacher", "She is a cook"],
              0,
              "Priya works in a hospital and she is a nurse.",
            ),
            c(
              "Where does she live now?",
              ["Bristol", "Pune", "Scotland"],
              0,
              "She is from Pune, but she now lives in Bristol.",
            ),
            c(
              "What time does she start work?",
              ["7.30 a.m.", "3 p.m.", "8 a.m."],
              0,
              "Priya starts work at 7.30 a.m. and finishes at 3 p.m.",
            ),
            c(
              "Which activity is NOT in her free time list?",
              ["Running", "Cooking", "Cycling"],
              0,
              "She likes cooking, cycling and watching films. Running is not mentioned.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practice reading profiles",
          instructions:
            "Answer in a short phrase or sentence, then reveal the model answer.",
          items: [
            p(
              "What is the first information a profile usually gives?",
              "Basic information such as the person's name, age and home.",
              "Look at the first paragraph of the profile.",
            ),
            p(
              "When does Priya have her English class?",
              "On Wednesdays, after work.",
              "Look for the word English in the second paragraph.",
            ),
            p(
              "Write one sentence about Priya's future plan.",
              "She wants to visit Scotland next summer.",
              "Use the final sentence of the profile.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "How old is Priya?",
          ["24", "34", "42"],
          0,
          "The first sentence says: Priya Sharma is 24 years old.",
        ),
        q(
          2,
          "Where is Priya from?",
          ["Pune", "Bristol", "Scotland"],
          0,
          "Priya is from Pune. Bristol is where she lives now.",
        ),
        q(
          3,
          "Who does Priya live with in Bristol?",
          ["Her sister and her sister's family", "Her parents", "She lives alone"],
          0,
          "The profile says she lives with her sister and her sister's family.",
        ),
        q(
          4,
          "What is Priya's future plan?",
          ["To visit Scotland", "To move to Pune", "To work in a school"],
          0,
          "Final sentence: She wants to visit Scotland next summer.",
        ),
      ],
    },
    {
      slug: "a-short-description",
      title: "A short description",
      summary:
        "Read about a street and build a picture in your mind from the details.",
      objective:
        "Understand a short description of a place and find details about what is there.",
      minutes: 25,
      blocks: [
        {
          type: "passage",
          title: "My street, by Omar",
          paragraphs: [
            "I live on Park Road in a small town. It is not a long street, but there are many useful places.",
            "On the corner there is a bakery. It opens at 6.30 a.m., so the street smells of fresh bread very early. Next to the bakery is a small shop. At the end of the street there is a park with tall trees.",
            "In the morning, Park Road is noisy because people drive to work. In the evening it is quiet. My favourite place is the Blue Chair café. I often read there on Sunday afternoons.",
          ],
          glossary: [
            { term: "on the corner", meaning: "At the place where two streets meet." },
            { term: "at the end of", meaning: "After everything else along a street." },
            { term: "noisy", meaning: "Full of loud sounds." },
          ],
        },
        {
          type: "text",
          title: "Details make the picture",
          paragraphs: [
            "A good description does not only say what a place has. It also tells you when it is busy or quiet, how it smells and where the writer likes to go.",
            "As you read, try to picture the street. Picture the bakery on the corner, then the shop next to it, then the park at the end. This helps you remember the order of the places.",
          ],
        },
        {
          type: "exercise",
          title: "Read Omar's description",
          instructions:
            "Use the passage to answer each question. Choose one option.",
          items: [
            c(
              "What is on the corner of Park Road?",
              ["A bakery", "A park", "A school"],
              0,
              "Omar says: On the corner there is a bakery.",
            ),
            c(
              "What is at the end of the street?",
              ["A park with tall trees", "A bakery", "A train station"],
              0,
              "At the end of the street there is a park with tall trees.",
            ),
            c(
              "Why is the street noisy in the morning?",
              ["People drive to work", "The park is busy", "The café plays music"],
              0,
              "Omar explains that the morning is noisy because people drive to work.",
            ),
            c(
              "What does Omar often do on Sunday afternoons?",
              ["Read at the Blue Chair café", "Buy bread", "Walk in the park"],
              0,
              "He says: I often read there on Sunday afternoons.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practice reading descriptions",
          instructions:
            "Write a short answer, then check the model response.",
          items: [
            p(
              "What does the street smell of very early in the morning?",
              "It smells of fresh bread because of the bakery.",
              "Find the sentence about the bakery opening time.",
            ),
            p(
              "When is Park Road quiet?",
              "In the evening.",
              "Omar compares the morning and the evening.",
            ),
            p(
              "Write one sentence to describe a place you know.",
              "Possible answer: There is a small café next to my flat, and it is quiet in the morning.",
              "Use There is or There are + a place.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "How long is Park Road?",
          ["It is not very long", "It is the longest street in town", "It is ten kilometres long"],
          0,
          "Omar says: It is not a long street.",
        ),
        q(
          2,
          "What time does the bakery open?",
          ["6.30 a.m.", "8.00 a.m.", "6.30 p.m."],
          0,
          "The bakery opens at 6.30 a.m., which is why the street smells of bread early.",
        ),
        q(
          3,
          "What is next to the bakery?",
          ["A small shop", "A park", "A café"],
          0,
          "Omar writes: Next to the bakery is a small shop.",
        ),
        q(
          4,
          "Why does Omar like the Blue Chair café?",
          ["He often reads there on Sunday afternoons", "It is the cheapest café", "It has tall trees"],
          0,
          "The final sentence says he often reads there on Sunday afternoons.",
        ),
      ],
    },
    {
      slug: "a-simple-story",
      title: "A simple story",
      summary:
        "Follow the order of events in a very short story about a lost umbrella.",
      objective:
        "Read a short story and understand what happened first, next and last.",
      minutes: 30,
      blocks: [
        {
          type: "passage",
          title: "The lost umbrella",
          paragraphs: [
            "On Tuesday morning, Nina took the bus to work. It was raining, so she carried her blue umbrella.",
            "When she got off the bus, she left the umbrella on the seat. At lunchtime the rain stopped and Nina did not think about it. But at five o'clock it started to rain again, and her umbrella was not in her bag.",
            "Nina went to the bus office near the station. A man there asked, “What colour is it?” “Blue,” she said. He looked in a box and found it under a seat. Nina thanked him and walked home with a smile.",
          ],
          glossary: [
            { term: "got off", meaning: "Left a bus, train or plane." },
            { term: "bus office", meaning: "A place where staff can help with lost things and travel questions." },
            { term: "under a seat", meaning: "Below a seat." },
          ],
        },
        {
          type: "rules",
          title: "Follow the order",
          items: [
            "First, Nina travelled to work in the rain.",
            "Next, she left her umbrella on the bus.",
            "Then, at five o'clock, she needed the umbrella again.",
            "After that, she went to the bus office.",
            "Finally, a man found the umbrella and Nina thanked him.",
          ],
        },
        {
          type: "exercise",
          title: "What happened?",
          instructions:
            "Read the story and choose the best answer.",
          items: [
            c(
              "Why did Nina take her umbrella?",
              ["It was raining", "It was sunny", "She wanted to give it away"],
              0,
              "The first paragraph says it was raining, so she carried her blue umbrella.",
            ),
            c(
              "Where did she leave the umbrella?",
              ["On the bus", "At work", "In the bus office"],
              0,
              "The second paragraph says she left it on the seat when she got off the bus.",
            ),
            c(
              "When did she go to the bus office?",
              ["After it started raining again at five", "Before work", "At lunchtime"],
              0,
              "At five it started to rain again, and then she went to the bus office.",
            ),
            c(
              "How did the story end?",
              ["Nina found her umbrella and walked home", "Nina bought a new umbrella", "The bus office closed"],
              0,
              "The man found the umbrella, Nina thanked him and walked home.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Retell the story",
          instructions:
            "Use the model answers to check your retelling, then say the story aloud.",
          items: [
            p(
              "What happened first?",
              "First, Nina took the bus to work in the rain.",
              "Start with On Tuesday morning.",
            ),
            p(
              "What happened after she arrived at work?",
              "She left her blue umbrella on the bus seat.",
              "Think about the moment she got off the bus.",
            ),
            p(
              "Write the last event in one sentence.",
              "A man at the bus office found her umbrella, and she thanked him.",
              "Use Finally, …",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "On which day did the story happen?",
          ["Tuesday", "Monday", "Sunday"],
          0,
          "The story begins: On Tuesday morning.",
        ),
        q(
          2,
          "What colour was Nina's umbrella?",
          ["Blue", "Black", "Green"],
          0,
          "Nina says her umbrella is blue, and the story describes it as a blue umbrella.",
        ),
        q(
          3,
          "Who found the umbrella?",
          ["A man at the bus office", "Nina's friend", "The bus driver"],
          0,
          "A man at the bus office looked in a box and found it.",
        ),
        q(
          4,
          "How did Nina feel at the end?",
          ["Happy", "Angry", "Tired and sad"],
          0,
          "She thanked the man and walked home with a smile, so she felt happy.",
        ),
      ],
    },
  ],
};
