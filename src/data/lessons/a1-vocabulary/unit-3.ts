import {
  p,
  wordExercises,
  wordQuiz,
} from "@/data/lessons/authoring";
import type { LessonUnit, LessonWord } from "@/data/lessons/types";

const transportWords: LessonWord[] = [
  {
    term: "bus",
    meaning: "a large vehicle that carries many people on the road",
    example: "I take the bus to school.",
  },
  {
    term: "train",
    meaning: "a long vehicle that travels on rails",
    example: "The train leaves at nine.",
  },
  {
    term: "car",
    meaning: "a small vehicle with four wheels for a few people",
    example: "My father drives a car.",
  },
  {
    term: "bike",
    meaning: "a vehicle with two wheels that you ride",
    example: "I ride my bike to work.",
  },
  {
    term: "plane",
    meaning: "a vehicle that flies in the sky",
    example: "The plane is very fast.",
  },
  {
    term: "ticket",
    meaning: "a small piece of paper that lets you travel",
    example: "Please show your ticket.",
  },
];

const placeWords: LessonWord[] = [
  {
    term: "park",
    meaning: "an open public area with grass and trees",
    example: "We walk in the park on Sundays.",
  },
  {
    term: "bank",
    meaning: "a place that keeps and manages money",
    example: "The bank opens at nine.",
  },
  {
    term: "hospital",
    meaning: "a place where sick people get help",
    example: "The hospital is near the station.",
  },
  {
    term: "library",
    meaning: "a place with books you can borrow",
    example: "I study at the library.",
  },
  {
    term: "supermarket",
    meaning: "a large shop that sells food and household things",
    example: "We buy food at the supermarket.",
  },
  {
    term: "café",
    meaning: "a small place where you buy drinks and snacks",
    example: "We meet at the café after work.",
  },
];

const bodyWords: LessonWord[] = [
  {
    term: "head",
    meaning: "the top part of your body",
    example: "My head hurts after a long day.",
  },
  {
    term: "arm",
    meaning: "the part of your body between your shoulder and hand",
    example: "She carries the bag in her arm.",
  },
  {
    term: "hand",
    meaning: "the part at the end of your arm with fingers",
    example: "Wash your hand before you eat.",
  },
  {
    term: "leg",
    meaning: "the part of your body you use to walk",
    example: "My leg hurts after the run.",
  },
  {
    term: "back",
    meaning: "the part of your body behind your chest",
    example: "My back hurts when I sit all day.",
  },
  {
    term: "stomach",
    meaning: "the part of your body where food goes",
    example: "My stomach hurts after lunch.",
  },
];

export const a1VocabularyUnit3: LessonUnit = {
  title: "Travel and health",
  description:
    "Find your way around town and describe common everyday health problems.",
  lessons: [
    {
      slug: "transport",
      title: "Transport",
      summary:
        "Learn words for common vehicles and talk about how you travel.",
      objective:
        "Name six types of transport and use by, take and ride in simple sentences.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "How do you travel?",
          paragraphs: [
            "Transport words help you talk about your journey. You can say how you travel: by bus, by train or by car.",
            "For public transport, use take: I take the bus. For a bike, use ride: I ride my bike. For a car, use drive or go by car.",
          ],
        },
        {
          type: "wordbank",
          title: "Transport words",
          intro:
            "These are the vehicles and travel words you will see most often.",
          words: transportWords,
        },
        {
          type: "examples",
          title: "Travelling every day",
          items: [
            {
              text: "I take the bus to work every day.",
              note: "Take + the + bus or train.",
            },
            {
              text: "We go to the airport by car.",
              note: "By + car, taxi or train.",
            },
            {
              text: "She rides her bike to the park.",
              note: "Ride a bike, not drive a bike.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the transport word",
          instructions:
            "Complete each travel sentence, then check your answer.",
          items: wordExercises(transportWords.slice(3)),
        },
        {
          type: "practice",
          title: "Talk about your journey",
          instructions:
            "Say your answers aloud, then reveal the model responses.",
          items: [
            p(
              "How do you go to work or school?",
              "Model answer: I take the bus to school.",
            ),
            p(
              "Complete: I need a ___ to travel by train.",
              "I need a ticket to travel by train.",
              "You show it to the ticket inspector.",
            ),
            p(
              "Which vehicle flies in the sky?",
              "A plane flies in the sky.",
            ),
          ],
        },
        {
          type: "tip",
          title: "By or take?",
          text: "Use by to describe the type of transport: by bus, by train, by car. Use take with a and the: take a bus, take the train.",
        },
      ],
      quiz: wordQuiz(transportWords.slice(0, 4)),
    },
    {
      slug: "places-in-town",
      title: "Places in town",
      summary:
        "Name places in a town and say why you go there.",
      objective:
        "Use six place words to talk about common activities in town.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "Your town on a map",
          paragraphs: [
            "A town has many useful places. You can buy food at the supermarket, borrow books at the library and meet friends at a café.",
            "Use go to + the place: I go to the bank. Use at + the place when you are there: I am at the library.",
          ],
        },
        {
          type: "wordbank",
          title: "Places in town",
          intro:
            "Match each place with something you can do there.",
          words: placeWords,
        },
        {
          type: "examples",
          title: "Out in town",
          items: [
            {
              text: "I go to the bank on Monday.",
              note: "Go to + place.",
            },
            {
              text: "We buy food at the supermarket.",
              note: "At + place for an activity.",
            },
            {
              text: "The library is next to the park.",
              note: "Use next to for position.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Match the place",
          instructions:
            "Choose the place that fits each activity, then check your answer.",
          items: wordExercises(placeWords.slice(3)),
        },
        {
          type: "practice",
          title: "Places you use",
          instructions:
            "Answer aloud or in your notebook, then reveal the model answer.",
          items: [
            p(
              "Where can you borrow a book?",
              "You can borrow a book at the library.",
              "A quiet place with many books.",
            ),
            p(
              "Complete: I buy food at the ___.",
              "I buy food at the supermarket.",
            ),
            p(
              "Write two sentences about places in your town.",
              "Model answer: There is a park near my home. I go to the café on Saturdays.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Go to or go?",
          text: "Use go to with a place: go to the bank, go to the park. Do not use go to with home: go home.",
        },
      ],
      quiz: wordQuiz(placeWords.slice(0, 4)),
    },
    {
      slug: "health-and-the-body",
      title: "Health and the body",
      summary:
        "Name parts of the body and say what hurts.",
      objective:
        "Use six body words with hurt to describe simple health problems.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "Talking about how you feel",
          paragraphs: [
            "When something is wrong with your body, you can point to the part and say: My head hurts. This pattern works with many body words.",
            "Use my before the body part. Use hurts with one part: My leg hurts. Use a headache or a stomachache for common problems.",
          ],
        },
        {
          type: "wordbank",
          title: "Parts of the body",
          intro:
            "These words are useful at the doctor's or when you feel unwell.",
          words: bodyWords,
        },
        {
          type: "examples",
          title: "What hurts?",
          items: [
            {
              text: "My head hurts.",
              note: "One body part + hurts.",
            },
            {
              text: "My back hurts after a long day.",
              note: "Use after to explain when it hurts.",
            },
            {
              text: "I have a stomachache.",
              note: "A stomachache is a pain in your stomach.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the body part",
          instructions:
            "Complete each health sentence with the right body word, then check your answer.",
          items: wordExercises(bodyWords.slice(3)),
        },
        {
          type: "practice",
          title: "Say what hurts",
          instructions:
            "Say each answer aloud, then compare it with the model.",
          items: [
            p(
              "You use it to hold a cup. What is it?",
              "It is your hand.",
            ),
            p(
              "Complete: My ___ hurts when I walk home.",
              "My leg hurts when I walk home.",
              "You use your legs to walk.",
            ),
            p(
              "Say that you have pain in your back.",
              "My back hurts.",
              "Use My + body part + hurts.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Headache or stomachache?",
          text: "A headache is pain in your head. A stomachache is pain in your stomach. Use have a: I have a headache.",
        },
      ],
      quiz: wordQuiz(bodyWords.slice(0, 4)),
    },
  ],
};
