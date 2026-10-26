import {
  p,
  wordExercises,
  wordQuiz,
} from "@/data/lessons/authoring";
import type { LessonUnit, LessonWord } from "@/data/lessons/types";

const jobWords: LessonWord[] = [
  {
    term: "teacher",
    meaning: "a person who helps students learn",
    example: "My teacher works at a school.",
  },
  {
    term: "doctor",
    meaning: "a person who treats people who are ill",
    example: "The doctor works in a hospital.",
  },
  {
    term: "cook",
    meaning: "a person who prepares food",
    example: "The cook makes lunch in the café.",
  },
  {
    term: "driver",
    meaning: "a person who drives a bus, car or train",
    example: "The driver stops the bus here.",
  },
  {
    term: "nurse",
    meaning: "a person who cares for patients",
    example: "The nurse helps people in the hospital.",
  },
  {
    term: "waiter",
    meaning: "a person who brings food and drinks in a restaurant",
    example: "The waiter brings our coffee.",
  },
];

const hobbyWords: LessonWord[] = [
  {
    term: "reading",
    meaning: "looking at and understanding books or texts",
    example: "My favourite hobby is reading.",
  },
  {
    term: "cooking",
    meaning: "making food",
    example: "I enjoy cooking at the weekend.",
  },
  {
    term: "football",
    meaning: "a game played by two teams with a ball",
    example: "My friends play football in the park.",
  },
  {
    term: "music",
    meaning: "sounds made by voices or instruments",
    example: "I listen to music on the bus.",
  },
  {
    term: "painting",
    meaning: "making pictures with paint",
    example: "She likes painting flowers.",
  },
  {
    term: "swimming",
    meaning: "moving through water using your body",
    example: "We go swimming at the pool.",
  },
];

const weatherWords: LessonWord[] = [
  {
    term: "sunny",
    meaning: "with a lot of light from the sun",
    example: "It is sunny today.",
  },
  {
    term: "rainy",
    meaning: "with a lot of rain",
    example: "It is rainy in April.",
  },
  {
    term: "cloudy",
    meaning: "with many clouds in the sky",
    example: "The sky is cloudy this morning.",
  },
  {
    term: "hot",
    meaning: "having a high temperature",
    example: "It is hot in summer.",
  },
  {
    term: "cold",
    meaning: "having a low temperature",
    example: "It is cold in winter.",
  },
  {
    term: "winter",
    meaning: "the coldest season of the year",
    example: "Winter is long in my country.",
  },
];

export const a1VocabularyUnit4: LessonUnit = {
  title: "Work and free time",
  description:
    "Talk about jobs, hobbies and the weather with a useful everyday word bank.",
  lessons: [
    {
      slug: "jobs-and-workplaces",
      title: "Jobs and workplaces",
      summary:
        "Learn six job words and say where people work.",
      objective:
        "Name six jobs and use a or an with job titles.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "What do people do?",
          paragraphs: [
            "Job words answer the question: What do you do? You can answer: I am a teacher. Use a or an before most job titles.",
            "You can also say where a person works: A doctor works in a hospital. A waiter works in a restaurant.",
          ],
        },
        {
          type: "wordbank",
          title: "Jobs",
          intro:
            "Connect each job with a simple workplace.",
          words: jobWords,
        },
        {
          type: "examples",
          title: "Jobs and workplaces",
          items: [
            {
              text: "My mother is a teacher.",
              note: "Use a before a job that starts with a consonant sound.",
            },
            {
              text: "My uncle is an engineer.",
              note: "Use an before a vowel sound.",
            },
            {
              text: "The doctor works in a hospital.",
              note: "Use works in + workplace.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the job",
          instructions:
            "Read each workplace clue, choose the job, then check your answer.",
          items: wordExercises(jobWords.slice(3)),
        },
        {
          type: "practice",
          title: "Talk about work",
          instructions:
            "Answer aloud, then reveal the model answer to check your sentence.",
          items: [
            p(
              "What do you do?",
              "Model answer: I am a student.",
            ),
            p(
              "Where does a nurse work?",
              "A nurse works in a hospital.",
              "Use the same pattern as the examples.",
            ),
            p(
              "Complete: He makes food in a restaurant. He is a ___.",
              "He is a cook.",
            ),
          ],
        },
        {
          type: "tip",
          title: "A or an?",
          text: "Use a before most jobs: a teacher, a doctor. Use an before a vowel sound: an artist, an engineer.",
        },
      ],
      quiz: wordQuiz(jobWords.slice(0, 4)),
    },
    {
      slug: "hobbies-and-interests",
      title: "Hobbies and interests",
      summary:
        "Talk about what you enjoy doing in your free time.",
      objective:
        "Use six hobby words with like, enjoy, play and go.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "What do you do for fun?",
          paragraphs: [
            "Hobbies are activities you enjoy in your free time. Use like or enjoy before an -ing word: I like reading. I enjoy cooking.",
            "For sports and games, use play: I play football. For activities such as swimming, use go: I go swimming.",
          ],
        },
        {
          type: "wordbank",
          title: "Hobbies",
          intro:
            "These six activities are easy to talk about with new friends.",
          words: hobbyWords,
        },
        {
          type: "examples",
          title: "Free-time sentences",
          items: [
            {
              text: "I like reading before bed.",
              note: "Like + -ing word.",
            },
            {
              text: "My friends play football in the park.",
              note: "Play + ball game.",
            },
            {
              text: "We go swimming every Saturday.",
              note: "Go + -ing activity.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the hobby",
          instructions:
            "Pick the activity that fits each sentence, then check your answer.",
          items: wordExercises(hobbyWords.slice(3)),
        },
        {
          type: "practice",
          title: "Talk about your free time",
          instructions:
            "Say your answers aloud, then reveal a model answer to compare.",
          items: [
            p(
              "What do you like doing at the weekend?",
              "Model answer: I like cooking and listening to music.",
            ),
            p(
              "Complete: We go ___ in the sea in summer.",
              "We go swimming in the sea in summer.",
              "You move through water.",
            ),
            p(
              "Write two sentences about a friend's hobby.",
              "Model answer: My friend likes painting. She paints at home.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Like + -ing",
          text: "After like, love or enjoy, use an -ing word: I like dancing. I enjoy reading. Do not say “I like read.”",
        },
      ],
      quiz: wordQuiz(hobbyWords.slice(0, 4)),
    },
    {
      slug: "weather-and-seasons",
      title: "Weather and seasons",
      summary:
        "Describe the weather and talk about the seasons.",
      objective:
        "Use six weather words to make simple sentences with It is.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "What is the weather like?",
          paragraphs: [
            "The weather changes every day. Use It is + weather word: It is sunny. It is cold. You can add today: It is cloudy today.",
            "The four seasons are spring, summer, autumn and winter. Winter is usually cold and summer is usually hot.",
          ],
        },
        {
          type: "wordbank",
          title: "Weather and seasons",
          intro:
            "These words help you talk about the sky, temperature and time of year.",
          words: weatherWords,
        },
        {
          type: "examples",
          title: "Weather in everyday life",
          items: [
            {
              text: "It is sunny today.",
              note: "Use It is + weather adjective.",
            },
            {
              text: "It is rainy, so take an umbrella.",
              note: "Use so to show a result.",
            },
            {
              text: "In winter, it is cold here.",
              note: "In + season.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the weather word",
          instructions:
            "Complete each weather sentence, then check your answer.",
          items: wordExercises(weatherWords.slice(3)),
        },
        {
          type: "practice",
          title: "Describe today's weather",
          instructions:
            "Look outside and answer aloud, then compare with the model.",
          items: [
            p(
              "What is the weather like today?",
              "Model answer: It is cloudy today.",
              "Start with It is.",
            ),
            p(
              "Complete: In ___, we wear warm clothes and it is often cold.",
              "In winter, we wear warm clothes and it is often cold.",
              "It is the coldest season.",
            ),
            p(
              "Write two sentences about your favourite season.",
              "Model answer: My favourite season is summer. It is hot and sunny.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Weather or season?",
          text: "Sunny, rainy, cloudy, hot and cold describe the weather. Winter is a season. Say “It is cold in winter.”",
        },
      ],
      quiz: wordQuiz(weatherWords.slice(0, 4)),
    },
  ],
};
