import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1SpeakingUnit2: LessonUnit = {
  title: "Personal details",
  description:
    "Talk about family, ages and how to spell names and places.",
  lessons: [
    {
      slug: "family-and-friends",
      title: "Family and friends",
      summary:
        "Talk about people in a photo using this, who's this and have got.",
      objective:
        "Introduce family members and friends and ask simple questions about them.",
      minutes: 25,
      blocks: [
        {
          type: "dialogue",
          title: "A photo on the phone",
          intro:
            "Nina shows Leo a family photo. Read the dialogue aloud.",
          lines: [
            { speaker: "Leo", text: "Is this a photo of your family?" },
            { speaker: "Nina", text: "Yes. This is my sister, Mia. She's 16." },
            { speaker: "Leo", text: "And who's this?" },
            { speaker: "Nina", text: "That's my cousin, Daniel. He lives in Canada." },
            { speaker: "Leo", text: "Do you have any brothers or sisters?" },
            { speaker: "Nina", text: "Yes, one brother. He's older than me." },
            { speaker: "Leo", text: "It's a lovely photo." },
            { speaker: "Nina", text: "Thank you!" },
          ],
        },
        {
          type: "table",
          title: "Talking about people",
          columns: ["Purpose", "Phrase", "Example"],
          rows: [
            ["Point to someone", "This is … / That's …", "This is my sister."],
            ["Ask who someone is", "Who's this?", "Who's this in the photo?"],
            ["Ask about siblings", "Do you have any brothers or sisters?", "Yes, one brother."],
            ["Family words", "mother, father, sister, brother, cousin, aunt, uncle", "My aunt lives in Rome."],
            ["Describe age", "He's / She's + age", "She's 16."],
          ],
        },
        {
          type: "exercise",
          title: "Choose the natural phrase",
          instructions:
            "Read each situation and choose the best reply. Say your answer aloud.",
          items: [
            c(
              "You show a photo of your sister. What do you say?",
              ["This is my sister, Ana.", "This my sister Ana.", "My sister is this Ana."],
              0,
              "Use This is + person: This is my sister, Ana.",
            ),
            c(
              "You want to know who a person in a photo is. What do you ask?",
              ["Who's this?", "What's this?", "Where are you?"],
              0,
              "Who's this? asks about a person.",
            ),
            c(
              "How do you ask if someone has siblings?",
              ["Do you have any brothers or sisters?", "You have brothers or sisters?", "Are you brothers or sisters?"],
              0,
              "Use Do you have …? for possession: Do you have any brothers or sisters?",
            ),
            c(
              "Your cousin is 20. How do you say this?",
              ["She's 20.", "She has 20.", "She is have 20."],
              0,
              "Use be for age: She's 20.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Talk about your people",
          instructions:
            "Say your answer aloud, then compare with the model. Use real or invented people.",
          items: [
            p(
              "Introduce one person in your family.",
              "Model answer: This is my brother, Omar. He's 24.",
              "Use This is + name, then age.",
            ),
            p(
              "Ask a partner about their family.",
              "Model answer: Do you have any brothers or sisters?",
              "Use Do you have …?",
            ),
            p(
              "Describe a friend in two sentences.",
              "Model answer: This is my friend Mei. She lives in London and she's a student.",
              "Use This is … and She's / He's …",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which sentence introduces a person?",
          ["This is my cousin, Daniel.", "This my cousin Daniel.", "My cousin this is Daniel."],
          0,
          "This is + person is the natural way to introduce someone.",
        ),
        q(
          2,
          "Which question asks about siblings?",
          ["Do you have any brothers or sisters?", "Who is your brother?", "Are you a brother?"],
          0,
          "Do you have any brothers or sisters? asks whether someone has siblings.",
        ),
        q(
          3,
          "Nina says her sister is 16. Which sentence says this?",
          ["She's 16.", "She has 16.", "She is 16 years."],
          0,
          "Age uses be: She's 16. You can also say She's 16 years old.",
        ),
        q(
          4,
          "Which word means the child of your aunt or uncle?",
          ["Cousin", "Brother", "Grandmother"],
          0,
          "A cousin is the child of your aunt or uncle.",
        ),
      ],
    },
    {
      slug: "numbers-and-ages",
      title: "Numbers and ages",
      summary:
        "Ask and answer about ages and repeat phone numbers clearly.",
      objective:
        "Ask for and give ages and phone numbers, and ask someone to repeat information.",
      minutes: 25,
      blocks: [
        {
          type: "dialogue",
          title: "At the sports centre",
          intro:
            "A parent registers a child at a sports centre. Read the dialogue aloud.",
          lines: [
            { speaker: "Receptionist", text: "Good morning. How old is your son?" },
            { speaker: "Parent", text: "He's eight." },
            { speaker: "Receptionist", text: "Thank you. And what's your phone number?" },
            { speaker: "Parent", text: "It's 07700 900 314." },
            { speaker: "Receptionist", text: "Sorry, can you repeat that, please?" },
            { speaker: "Parent", text: "Yes, of course. 07700 900 314." },
            { speaker: "Receptionist", text: "Thank you. The class starts on Saturday at 10." },
          ],
        },
        {
          type: "rules",
          title: "Numbers in conversation",
          items: [
            "Ask an age: How old is he / she? How old are you?",
            "Answer: He's eight. / She's twelve. / I'm twenty-four.",
            "Ask for a phone number: What's your phone number?",
            "Ask someone to repeat: Can you repeat that, please? / Sorry, could you say that again?",
            "Say phone numbers in small groups, for example 07700 / 900 / 314.",
          ],
        },
        {
          type: "table",
          title: "Ages and numbers",
          columns: ["Number", "Word", "Example sentence"],
          rows: [
            ["8", "eight", "He's eight."],
            ["12", "twelve", "She's twelve."],
            ["18", "eighteen", "I'm eighteen."],
            ["24", "twenty-four", "My brother is twenty-four."],
            ["30", "thirty", "My mother is thirty."],
          ],
        },
        {
          type: "exercise",
          title: "Choose the best question or answer",
          instructions:
            "Read each situation and choose the correct option. Say it aloud.",
          items: [
            c(
              "You want to know a child's age. What do you ask the parent?",
              ["How old is he?", "How much is he?", "What old is he?"],
              0,
              "Use How old is + he/she? to ask about age.",
            ),
            c(
              "A boy is 10. What is a natural answer?",
              ["He's ten.", "He has ten.", "He is ten years."],
              0,
              "Use He's + age. He is ten years old is also correct.",
            ),
            c(
              "You did not catch a phone number. What can you say?",
              ["Can you repeat that, please?", "Can you repeat me?", "What is repeat?"],
              0,
              "Can you repeat that, please? politely asks someone to say it again.",
            ),
            c(
              "Which way of saying a phone number is clearest?",
              ["07700, 900, 314", "oh seven seven zero zero nine zero zero three one four", "digits"],
              0,
              "Small groups are easier to catch and repeat.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise numbers",
          instructions:
            "Say each answer aloud, then check the model. Use your own numbers or invented ones.",
          items: [
            p(
              "Ask a partner how old their brother is.",
              "Model answer: How old is your brother?",
              "Use How old is + person?",
            ),
            p(
              "Say your age in a full sentence.",
              "Model answer: I'm twenty-two years old.",
              "Use I'm + number + years old.",
            ),
            p(
              "Ask someone for their phone number, then ask them to repeat it.",
              "Model answer: What's your phone number? … Sorry, can you repeat that, please?",
              "Use What's your …? and Can you repeat …?",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which question asks about age?",
          ["How old are you?", "How are you?", "How much are you?"],
          0,
          "How old are you? asks for an age.",
        ),
        q(
          2,
          "How old is the parent's son?",
          ["Eight", "Ten", "Eighteen"],
          0,
          "The parent says: He's eight.",
        ),
        q(
          3,
          "Which phrase politely asks for repetition?",
          ["Can you repeat that, please?", "Say it.", "What?"],
          0,
          "Can you repeat that, please? is polite and clear.",
        ),
        q(
          4,
          "Which sentence is correct?",
          ["My sister is twelve.", "My sister has twelve.", "My sister is twelve years."],
          0,
          "Use be + age: My sister is twelve. Add years old if you want to be explicit.",
        ),
      ],
    },
    {
      slug: "spelling-names-and-places",
      title: "Spelling names and places",
      summary:
        "Ask how to spell a word and spell your own name clearly.",
      objective:
        "Ask for and give the spelling of names and places using the English alphabet.",
      minutes: 25,
      blocks: [
        {
          type: "dialogue",
          title: "At the library desk",
          intro:
            "Omar joins a library. Read the conversation with the librarian aloud.",
          lines: [
            { speaker: "Librarian", text: "What's your surname?" },
            { speaker: "Omar", text: "Haddad." },
            { speaker: "Librarian", text: "How do you spell that?" },
            { speaker: "Omar", text: "H-A-D-D-A-D." },
            { speaker: "Librarian", text: "Thank you. And where are you from?" },
            { speaker: "Omar", text: "I'm from Beirut." },
            { speaker: "Librarian", text: "How do you spell Beirut?" },
            { speaker: "Omar", text: "B-E-I-R-U-T." },
            { speaker: "Librarian", text: "Perfect. Thank you." },
          ],
        },
        {
          type: "table",
          title: "Useful spelling phrases",
          columns: ["Purpose", "Phrase"],
          rows: [
            ["Ask for spelling", "How do you spell that?"],
            ["Repeat a letter", "Sorry, was that B or V?"],
            ["Ask for repetition", "Can you repeat that, please?"],
            ["Start spelling", "It's H-A-D-D-A-D."],
            ["Say a letter clearly", "A as in Anna, M as in Maria"],
          ],
          caption: "Letter names can be hard to hear. Asking “B or V?” or “M or N?” is normal and useful.",
        },
        {
          type: "tip",
          title: "Slow down for spelling",
          text: "When you spell aloud, say one letter at a time and pause between groups. If the other person looks unsure, repeat the whole word first, then the letters: Haddad — H-A-D-D-A-D.",
        },
        {
          type: "exercise",
          title: "Choose the best phrase",
          instructions:
            "Read each situation and choose the best option. Say the spelling aloud.",
          items: [
            c(
              "You did not hear a name clearly. What do you ask?",
              ["How do you spell that?", "How old are you?", "Where do you live?"],
              0,
              "How do you spell that? asks for the letters of a name.",
            ),
            c(
              "Which spelling matches the surname in the dialogue?",
              ["H-A-D-D-A-D", "H-A-D-A-D", "H-A-D-D-A-T"],
              0,
              "Omar spells his surname H-A-D-D-A-D.",
            ),
            c(
              "Which spelling matches the city in the dialogue?",
              ["B-E-I-R-U-T", "B-E-R-I-U-T", "B-E-I-R-T-U"],
              0,
              "Omar spells Beirut as B-E-I-R-U-T.",
            ),
            c(
              "Which question politely asks someone to repeat a word?",
              ["Can you repeat that, please?", "Repeat!", "What word?"],
              0,
              "Can you repeat that, please? is polite and natural.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Spell it aloud",
          instructions:
            "Say your answer aloud, then check the model. Spell slowly and clearly.",
          items: [
            p(
              "Spell your first name aloud.",
              "Model answer: It's H-A-N-A.",
              "Use It's + letters. Pause between letters.",
            ),
            p(
              "Ask a partner how to spell their surname.",
              "Model answer: How do you spell your surname?",
              "Use How do you spell …?",
            ),
            p(
              "Spell a town or city you know.",
              "Model answer: It's L-E-E-D-S — Leeds.",
              "Repeat the word after the letters.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which question asks for spelling?",
          ["How do you spell that?", "How do you say that?", "How old is that?"],
          0,
          "How do you spell that? asks for the letters of a word.",
        ),
        q(
          2,
          "How does Omar spell his surname?",
          ["H-A-D-D-A-D", "H-A-D-A-D", "H-A-D-D-A-T"],
          0,
          "He spells it with two Ds in the middle: H-A-D-D-A-D.",
        ),
        q(
          3,
          "Which city does Omar come from?",
          ["Beirut", "Berlin", "Bristol"],
          0,
          "Omar says: I'm from Beirut.",
        ),
        q(
          4,
          "What can you say if you are not sure whether you heard B or V?",
          ["Sorry, was that B or V?", "B or V are letters.", "Can you spell the alphabet?"],
          0,
          "Sorry, was that B or V? checks a letter that is easy to confuse.",
        ),
      ],
    },
  ],
};
