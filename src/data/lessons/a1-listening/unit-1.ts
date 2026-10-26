import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1ListeningUnit1: LessonUnit = {
  title: "First words and introductions",
  description:
    "Practise catching names, places and numbers in short, clear exchanges.",
  lessons: [
    {
      slug: "greetings-and-names",
      title: "Greetings and names",
      summary:
        "Follow a first-day conversation and pick out names, greetings and key facts.",
      objective:
        "Understand simple greetings and personal introductions in a short conversation.",
      minutes: 25,
      blocks: [
        {
          type: "transcript",
          title: "First day at language school",
          context:
            "Ana arrives at a language school. She speaks to the receptionist and then meets another student, Ben.",
          lines: [
            { speaker: "Receptionist", text: "Good morning. What's your name, please?" },
            { speaker: "Ana", text: "Hello. My name is Ana Silva." },
            { speaker: "Receptionist", text: "Thank you, Ana. This is Ben. He is in your class." },
            { speaker: "Ben", text: "Hi, Ana. Nice to meet you." },
            { speaker: "Ana", text: "Nice to meet you too. Is this your first class?" },
            { speaker: "Ben", text: "Yes, it is. Are you a beginner?" },
            { speaker: "Ana", text: "Yes. I know a little English, but I want to practise more." },
            { speaker: "Ben", text: "Me too. The class starts at 9.30. Let's find a seat." },
          ],
        },
        {
          type: "tip",
          title: "Listen for names and greetings",
          text: "At the start of a conversation, listen for Hi, Hello, Good morning and Nice to meet you. Names often come directly after What's your name? or This is ….",
        },
        {
          type: "exercise",
          title: "Check the details",
          instructions:
            "Read the transcript once, cover it, then choose the best answer. You can uncover it to check.",
          items: [
            c(
              "What is the woman's full name?",
              ["Ana Silva", "Ana Ben", "Silva Green"],
              0,
              "Ana says: My name is Ana Silva. Ana is her first name and Silva is her surname.",
            ),
            c(
              "Where are Ana and Ben?",
              ["At a language school", "At a train station", "In a café"],
              0,
              "Ben says the class starts at 9.30, and they are meeting before class at a language school.",
            ),
            c(
              "What time does the class start?",
              ["9.30", "9.00", "10.30"],
              0,
              "Ben says: The class starts at 9.30.",
            ),
            c(
              "Is this Ben's first class?",
              ["Yes, it is", "No, it is not", "The transcript does not say"],
              0,
              "Ana asks Is this your first class? and Ben answers Yes, it is.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise the exchange",
          instructions:
            "Answer from memory, then check the model. Try saying the lines aloud with a partner.",
          items: [
            p(
              "What does Ana say when she meets Ben?",
              "She says: Nice to meet you too.",
              "Ben says Nice to meet you first.",
            ),
            p(
              "How much English does Ana know?",
              "She knows a little English, but she wants to practise more.",
              "Look at Ana's answer about being a beginner.",
            ),
            p(
              "Write a short greeting for a new classmate and introduce yourself.",
              "Model answer: Hi, I'm Hana. Nice to meet you.",
              "Use Hi or Hello, then I'm + your name.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Who does Ana meet first?",
          ["The receptionist", "Ben", "Her teacher"],
          0,
          "The conversation begins with the receptionist asking for Ana's name.",
        ),
        q(
          2,
          "What is Ana's surname?",
          ["Silva", "Ana", "Ben"],
          0,
          "Her full name is Ana Silva, so Silva is her surname.",
        ),
        q(
          3,
          "How does Ben greet Ana?",
          ["Hi, Ana. Nice to meet you.", "Goodbye, Ana.", "Sorry, Ana."],
          0,
          "Ben says: Hi, Ana. Nice to meet you.",
        ),
        q(
          4,
          "What do Ana and Ben have in common?",
          ["They are both beginners", "They are both teachers", "They are both from Spain"],
          0,
          "Ana says she is a beginner, and Ben says Me too.",
        ),
      ],
    },
    {
      slug: "countries-and-nationalities",
      title: "Countries and nationalities",
      summary:
        "Hear where people are from and connect countries with nationality words.",
      objective:
        "Understand simple questions and answers about countries and nationalities.",
      minutes: 25,
      blocks: [
        {
          type: "transcript",
          title: "In the hostel kitchen",
          context:
            "Mei and Luca meet in the kitchen of a hostel in London.",
          lines: [
            { speaker: "Mei", text: "Hi, I'm Mei. Where are you from?" },
            { speaker: "Luca", text: "I'm from Italy, from a city called Bologna. And you?" },
            { speaker: "Mei", text: "I'm from Singapore." },
            { speaker: "Luca", text: "Is that where you live now?" },
            { speaker: "Mei", text: "No, I live in London now. I'm a student here." },
            { speaker: "Luca", text: "My cousin lives in London too. He's British, but his parents are from Nigeria." },
            { speaker: "Mei", text: "Nice. Is he at university?" },
            { speaker: "Luca", text: "Yes, he studies engineering." },
          ],
        },
        {
          type: "table",
          title: "Country and nationality",
          columns: ["Country", "Nationality"],
          rows: [
            ["Italy", "Italian"],
            ["Singapore", "Singaporean"],
            ["Nigeria", "Nigerian"],
            ["Britain / the UK", "British"],
          ],
        },
        {
          type: "exercise",
          title: "Where are they from?",
          instructions:
            "Read the transcript, cover it, then answer the questions from memory.",
          items: [
            c(
              "Where is Luca from?",
              ["Italy", "Singapore", "Nigeria"],
              0,
              "Luca says: I'm from Italy, from a city called Bologna.",
            ),
            c(
              "Where does Mei live now?",
              ["London", "Singapore", "Bologna"],
              0,
              "Mei says: No, I live in London now.",
            ),
            c(
              "What is Luca's cousin's nationality?",
              ["British", "Nigerian", "Italian"],
              0,
              "Luca says his cousin is British, but his parents are from Nigeria.",
            ),
            c(
              "What does Luca's cousin study?",
              ["Engineering", "English", "Cooking"],
              0,
              "Luca says: Yes, he studies engineering.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise countries and nationalities",
          instructions:
            "Say your answers aloud, then reveal the model responses.",
          items: [
            p(
              "How does Mei ask Luca where he is from?",
              "She asks: Where are you from?",
              "It is the first line of the conversation.",
            ),
            p(
              "Complete the pattern: Italy → Italian. What is the nationality word for Nigeria?",
              "Nigerian.",
              "The ending is -ian.",
            ),
            p(
              "Answer this question about yourself: Where are you from?",
              "Model answer: I'm from South Korea. / I'm Korean.",
              "Give a country or a city, then a nationality if you like.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which city is Luca from?",
          ["Bologna", "London", "Singapore"],
          0,
          "Luca says he is from Italy, from a city called Bologna.",
        ),
        q(
          2,
          "What is Mei's job or role in London?",
          ["She is a student", "She is a teacher", "She is a nurse"],
          0,
          "Mei says: I'm a student here.",
        ),
        q(
          3,
          "Where are Luca's cousin's parents from?",
          ["Nigeria", "Britain", "Italy"],
          0,
          "Luca says his cousin is British, but his parents are from Nigeria.",
        ),
        q(
          4,
          "Which nationality word matches Italy?",
          ["Italian", "Italish", "Italyan"],
          0,
          "The nationality adjective for Italy is Italian.",
        ),
      ],
    },
    {
      slug: "numbers-ages-and-phone-numbers",
      title: "Numbers, ages and phone numbers",
      summary:
        "Catch digits, spelling and ages in a simple registration conversation.",
      objective:
        "Understand numbers, spelled names, ages and phone numbers in clear speech.",
      minutes: 25,
      blocks: [
        {
          type: "transcript",
          title: "Joining a sports club",
          context:
            "Omar gives his details to a member of staff at a sports club.",
          lines: [
            { speaker: "Staff", text: "Good morning. Can I have your name, please?" },
            { speaker: "Omar", text: "Yes. It's Omar Haddad." },
            { speaker: "Staff", text: "How do you spell your surname?" },
            { speaker: "Omar", text: "H-A-D-D-A-D." },
            { speaker: "Staff", text: "Thank you. And your phone number?" },
            { speaker: "Omar", text: "It's 07700 900 482." },
            { speaker: "Staff", text: "Great. And how old are you? Our classes are for adults 18 and over." },
            { speaker: "Omar", text: "I'm 24." },
            { speaker: "Staff", text: "Perfect. The next class is on Wednesday at 6.30 p.m." },
          ],
        },
        {
          type: "tip",
          title: "Numbers come in groups",
          text: "Phone numbers are easier to catch in small groups. In 07700 900 482, listen for three parts: oh-seven-seven-zero-zero, nine-zero-zero, four-eight-two. In British English, 0 in a phone number is often said “oh”.",
        },
        {
          type: "exercise",
          title: "Check the numbers",
          instructions:
            "Read the transcript, cover it, then choose the best answer.",
          items: [
            c(
              "How does Omar spell his surname?",
              ["H-A-D-D-A-D", "H-A-D-A-D", "H-A-D-D-A-T"],
              0,
              "Omar spells it H-A-D-D-A-D, with two Ds in the middle and a final D.",
            ),
            c(
              "What is Omar's phone number?",
              ["07700 900 482", "07700 990 482", "07700 900 428"],
              0,
              "Omar says: It's 07700 900 482.",
            ),
            c(
              "How old is Omar?",
              ["24", "18", "22"],
              0,
              "Omar says: I'm 24.",
            ),
            c(
              "What is the minimum age for the classes?",
              ["18", "16", "24"],
              0,
              "The staff member says the classes are for adults 18 and over.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Say and check numbers",
          instructions:
            "Answer aloud, then compare with the model.",
          items: [
            p(
              "Who spells a name in the conversation?",
              "Omar spells his surname for the staff member.",
              "Look at the line that starts H-A-D-D-A-D.",
            ),
            p(
              "What day and time is the next class?",
              "Wednesday at 6.30 p.m.",
              "It is the staff member's final line.",
            ),
            p(
              "Write your phone number in groups of three or four digits.",
              "Model answer: 07700 900 123.",
              "Say it aloud in groups, not as one long number.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is Omar's first name?",
          ["Omar", "Haddad", "Staff"],
          0,
          "He says: It's Omar Haddad. Omar is his first name.",
        ),
        q(
          2,
          "Why does the staff member ask about age?",
          ["The classes are for adults 18 and over", "The class is for children", "Omar looks old"],
          0,
          "The staff member explains the age rule before asking Omar's age.",
        ),
        q(
          3,
          "Which part of Omar's phone number is 900?",
          ["The middle group", "The first group", "The last group"],
          0,
          "The number is 07700 900 482, so 900 is the middle group.",
        ),
        q(
          4,
          "When is the next class?",
          ["Wednesday at 6.30 p.m.", "Monday at 8 p.m.", "Wednesday at 6 p.m."],
          0,
          "The staff member says: The next class is on Wednesday at 6.30 p.m.",
        ),
      ],
    },
  ],
};
