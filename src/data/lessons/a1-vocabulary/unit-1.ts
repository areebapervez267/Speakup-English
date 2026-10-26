import {
  p,
  wordExercises,
  wordQuiz,
} from "@/data/lessons/authoring";
import type { LessonUnit, LessonWord } from "@/data/lessons/types";

const familyWords: LessonWord[] = [
  {
    term: "mother",
    meaning: "your female parent",
    example: "My mother is a teacher.",
  },
  {
    term: "father",
    meaning: "your male parent",
    example: "My father works in a bank.",
  },
  {
    term: "sister",
    meaning: "a girl or woman who has the same parents as you",
    example: "This is my sister, Lina.",
  },
  {
    term: "brother",
    meaning: "a boy or man who has the same parents as you",
    example: "My brother is ten years old.",
  },
  {
    term: "parents",
    meaning: "your mother and father",
    example: "My parents live in a small town.",
  },
  {
    term: "grandparents",
    meaning: "the parents of your mother or father",
    example: "My grandparents visit us on Sundays.",
  },
];

const appearanceWords: LessonWord[] = [
  {
    term: "tall",
    meaning: "having a long body from head to feet",
    example: "My brother is tall.",
  },
  {
    term: "short",
    meaning: "not tall",
    example: "I am short, but my sister is tall.",
  },
  {
    term: "young",
    meaning: "having lived for only a few years",
    example: "The baby is young.",
  },
  {
    term: "old",
    meaning: "having lived for many years",
    example: "My grandfather is old, but he is very active.",
  },
  {
    term: "curly",
    meaning: "having curves or circles, not straight",
    example: "She has curly hair.",
  },
  {
    term: "straight",
    meaning: "going in one direction without curves",
    example: "He has straight black hair.",
  },
];

const roomWords: LessonWord[] = [
  {
    term: "kitchen",
    meaning: "the room where you cook",
    example: "We cook in the kitchen.",
  },
  {
    term: "bedroom",
    meaning: "the room where you sleep",
    example: "My bedroom is small and quiet.",
  },
  {
    term: "bathroom",
    meaning: "the room with a bath, shower and toilet",
    example: "The bathroom is next to my bedroom.",
  },
  {
    term: "living room",
    meaning: "the room where a family sits together",
    example: "We watch TV in the living room.",
  },
  {
    term: "bed",
    meaning: "the furniture you sleep on",
    example: "The bed is under the window.",
  },
  {
    term: "table",
    meaning: "furniture with a flat top and legs",
    example: "Dinner is on the table.",
  },
];

const objectWords: LessonWord[] = [
  {
    term: "phone",
    meaning: "a small device for calls and messages",
    example: "My phone is in my bag.",
  },
  {
    term: "key",
    meaning: "a small metal object that opens a lock",
    example: "I have one key for my flat.",
  },
  {
    term: "bag",
    meaning: "a container for carrying things",
    example: "Her bag is next to the door.",
  },
  {
    term: "watch",
    meaning: "a small clock you wear on your wrist",
    example: "My watch is old, but it still works.",
  },
  {
    term: "glasses",
    meaning: "frames with glass that help you see",
    example: "My glasses are on the table.",
  },
  {
    term: "umbrella",
    meaning: "a round cover you hold to stay dry in the rain",
    example: "Take an umbrella. It is raining.",
  },
];

export const a1VocabularyUnit1: LessonUnit = {
  title: "People and home",
  description:
    "Talk about family, describe people and name the rooms and objects you use every day.",
  lessons: [
    {
      slug: "family-and-relationships",
      title: "Family and relationships",
      summary:
        "Learn six common family words and use them to introduce the people in your life.",
      objective:
        "Name close family members and use singular and plural family words in simple sentences.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "The people closest to you",
          paragraphs: [
            "Family words help you answer a simple question: Who is this? You can introduce one person, or talk about several people together.",
            "Most family words are easy to use. Add my before the person: my mother, my brother. Use a plural word when you talk about two or more people: my parents, my grandparents.",
          ],
        },
        {
          type: "wordbank",
          title: "Family words",
          intro:
            "These six words cover the people beginners talk about most often.",
          words: familyWords,
        },
        {
          type: "examples",
          title: "Talking about your family",
          items: [
            {
              text: "This is my sister, Lina.",
              note: "Use this is to introduce one person.",
            },
            {
              text: "My parents live in a small town.",
              note: "Parents means two people, so the verb has no -s.",
            },
            {
              text: "My grandparents visit us on Sundays.",
              note: "Grandparents is also plural.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the family word",
          instructions:
            "Read each sentence, choose the missing word, then check your answer. You can try each question again.",
          items: wordExercises(familyWords.slice(3)),
        },
        {
          type: "practice",
          title: "Talk about your own family",
          instructions:
            "Say each answer aloud or write it in your notebook, then reveal the model answer.",
          items: [
            p(
              "Complete the sentence: My ___ is my mother's mother.",
              "My grandmother is my mother's mother.",
              "Grand + mother.",
            ),
            p(
              "How do you say that your mother and father live in London?",
              "My parents live in London.",
              "Use the plural word for mother and father.",
            ),
            p(
              "Introduce one person in your family in a full sentence.",
              "Model answer: This is my brother. He is eighteen.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Parents or parent?",
          text: "Parent means one mother or father. Parents means both of them. Say “My parents are here”, not “My parents is here”.",
        },
      ],
      quiz: wordQuiz(familyWords.slice(0, 4)),
    },
    {
      slug: "describing-appearance",
      title: "Describing appearance",
      summary:
        "Use simple adjectives to describe height, age and hair.",
      objective:
        "Describe a person with tall, short, young, old, curly and straight, using be and have correctly.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "What does someone look like?",
          paragraphs: [
            "To describe a person, start with the verb be and an adjective: He is tall. She is young. These words do not change for men or women.",
            "For hair, use have or has: I have short hair. She has curly hair. In English, we usually describe hair before the colour: long black hair.",
          ],
        },
        {
          type: "wordbank",
          title: "Useful describing words",
          intro:
            "Some words describe the whole person. Others describe hair.",
          words: appearanceWords,
        },
        {
          type: "examples",
          title: "Describing people you know",
          items: [
            {
              text: "My brother is tall, and I am short.",
              note: "Use be with tall and short.",
            },
            {
              text: "My grandfather is old, but he is very active.",
              note: "Old describes age. It is polite to add a positive detail.",
            },
            {
              text: "She has curly hair and brown eyes.",
              note: "Use has with one person and hair or eyes.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the best description",
          instructions:
            "Choose the missing describing word in each sentence, then check your answer.",
          items: wordExercises(appearanceWords.slice(3)),
        },
        {
          type: "practice",
          title: "Describe someone",
          instructions:
            "Say the sentences aloud, then reveal a model answer to compare.",
          items: [
            p(
              "Complete: My little sister is five. She is very ___.",
              "She is very young.",
              "The opposite of old.",
            ),
            p(
              "Describe a person with hair that is not curly.",
              "Model answer: My friend has straight hair.",
              "Use straight before hair.",
            ),
            p(
              "Write two sentences about a friend: one with be and one with have.",
              "Model answer: My friend is tall. She has long straight hair.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Be or have?",
          text: "Use be + tall, short, young or old: He is tall. Use have + hair or eyes: He has short hair. Do not say “He has tall.”",
        },
      ],
      quiz: wordQuiz(appearanceWords.slice(0, 4)),
    },
    {
      slug: "rooms-and-furniture",
      title: "Rooms and furniture",
      summary:
        "Name the rooms in a home and talk about where furniture is.",
      objective:
        "Use six home words with in, on and under to describe where things are.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "A simple tour of a home",
          paragraphs: [
            "A home has different rooms for different activities. You cook in the kitchen, sleep in the bedroom and wash in the bathroom.",
            "Use in the + room to say where something happens: We eat in the kitchen. Use on or under to show where furniture is: The keys are on the table.",
          ],
        },
        {
          type: "wordbank",
          title: "Rooms and furniture",
          intro:
            "Rooms are places inside a home. Furniture is the things you use in them.",
          words: roomWords,
        },
        {
          type: "examples",
          title: "Where is it?",
          items: [
            {
              text: "There is a table in the kitchen.",
              note: "There is introduces one thing.",
            },
            {
              text: "The bed is in the bedroom.",
              note: "Use in with rooms.",
            },
            {
              text: "We watch TV in the living room.",
              note: "We do activities in a room.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Which room or object?",
          instructions:
            "Choose the word that completes each sentence, then check your answer.",
          items: wordExercises(roomWords.slice(3)),
        },
        {
          type: "practice",
          title: "Describe your home",
          instructions:
            "Answer aloud or in writing, then reveal the model answer.",
          items: [
            p(
              "Where do you cook?",
              "I cook in the kitchen.",
              "Use in + the room.",
            ),
            p(
              "Complete: My bed is in my ___.",
              "My bed is in my bedroom.",
            ),
            p(
              "Write one sentence about an object in your living room.",
              "Model answer: There is a table in my living room.",
              "Start with There is or The table is...",
            ),
          ],
        },
        {
          type: "tip",
          title: "One thing or two?",
          text: "Use there is for one thing: There is a bed. Use there are for two or more: There are two tables.",
        },
      ],
      quiz: wordQuiz(roomWords.slice(0, 4)),
    },
    {
      slug: "everyday-objects",
      title: "Everyday objects",
      summary:
        "Learn the names of six objects you use or carry every day.",
      objective:
        "Name common everyday objects and say where they are with simple prepositions.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "Things you use every day",
          paragraphs: [
            "Everyday objects are the small things you pick up, carry and look for. Knowing their names helps you ask simple questions: Where is my phone?",
            "Use in, on, under or next to to say where an object is. In English, plural objects use are: My keys are on the table.",
          ],
        },
        {
          type: "wordbank",
          title: "Everyday objects",
          intro:
            "These six objects are useful at home and when you travel.",
          words: objectWords,
        },
        {
          type: "examples",
          title: "Looking for things",
          items: [
            {
              text: "Where is my phone? It is in my bag.",
              note: "Use it for one object.",
            },
            {
              text: "My glasses are on the table.",
              note: "Glasses is plural, so use are.",
            },
            {
              text: "Take an umbrella. It is raining.",
              note: "Use an before a vowel sound.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the object",
          instructions:
            "Pick the object that fits each sentence, then check your answer.",
          items: wordExercises(objectWords.slice(3)),
        },
        {
          type: "practice",
          title: "Name and locate",
          instructions:
            "Say your answer aloud, then reveal the model answer to compare.",
          items: [
            p(
              "You wear it on your wrist. What is it?",
              "It is a watch.",
              "It tells the time.",
            ),
            p(
              "Complete: My ___ are on my face. I need them to read.",
              "My glasses are on my face.",
            ),
            p(
              "Write a question asking where your bag is.",
              "Where is my bag?",
              "Start with Where.",
            ),
          ],
        },
        {
          type: "tip",
          title: "A pair of...",
          text: "Glasses and shoes are plural. You can say a pair of glasses or a pair of shoes for one set.",
        },
      ],
      quiz: wordQuiz(objectWords.slice(0, 4)),
    },
  ],
};
