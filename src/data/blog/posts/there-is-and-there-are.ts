import type { BlogPost } from "@/data/blog/types";

export const thereIsAndThereAre: BlogPost = {
  slug: "there-is-and-there-are-rules",
  title: "There Is and There Are: Rules, Examples and Practice",
  description:
    "Learn when to use there is and there are, with clear rules for singular, plural and uncountable nouns, plus negatives, questions, lists and quick practice.",
  date: "2026-11-27",
  minutes: 6,
  relatedCourseSlug: "grammar-foundations",
  blocks: [
    {
      type: "text",
      paragraphs: [
        "Use there is and there are to say that something exists or is available in a place: There is a bakery on Main Street. There are two parks near my house. The sentence begins with there, followed by a form of be and then the thing you are describing.",
        "This grammatical there differs from the place word in Your keys are over there. In a there is sentence, the noun after be controls the usual agreement: a book takes is; two books take are.",
      ],
    },
    {
      type: "rules",
      title: "The basic rule",
      items: [
        "Use there is with one singular countable noun: There is a chair in the room.",
        "Use there are with two or more countable nouns: There are three chairs in the room.",
        "Use there is with an uncountable noun, even when the quantity is large: There is a lot of water.",
        "Use some in positive statements when the exact number is not needed: There is some rice. There are some apples.",
        "Use any in most negative sentences and questions: There isn't any rice. Are there any apples?",
      ],
    },
    {
      type: "text",
      title: "Countable and uncountable nouns",
      paragraphs: [
        "Countable nouns have singular and plural forms: one idea, two ideas. Uncountable nouns normally have no plural: information, advice, furniture, luggage and bread. Say there is some information, not there are informations. To count an uncountable noun, use a unit phrase: a piece of advice, two items of furniture, three loaves of bread.",
        "Some nouns can be countable or uncountable. There is a coffee on the table can mean one cup. There is coffee in the jar refers to the substance. Let the meaning decide.",
      ],
    },
    {
      type: "table",
      title: "Positive, negative and question forms",
      columns: ["Type of noun", "Positive", "Negative", "Question"],
      rows: [
        [
          "Singular countable",
          "There is a hotel.",
          "There isn't a hotel.",
          "Is there a hotel?",
        ],
        [
          "Plural countable",
          "There are two hotels.",
          "There aren't any hotels.",
          "Are there any hotels?",
        ],
        [
          "Uncountable",
          "There is some milk.",
          "There isn't any milk.",
          "Is there any milk?",
        ],
      ],
    },
    {
      type: "examples",
      title: "Negatives, questions and short answers",
      intro:
        "Add not for negatives. For questions, invert is or are and there; do not add do.",
      items: [
        {
          text: "There is no problem.",
          note: "Also: There isn't a problem. Both mean that a problem does not exist.",
        },
        {
          text: "There aren't any eggs in the fridge.",
          note: "Also: There are no eggs in the fridge.",
        },
        {
          text: "Is there a bank near here?",
          note: "Short answer: Yes, there is. / No, there isn't.",
        },
        {
          text: "Are there any questions?",
          note: "Short answer: Yes, there are. / No, there aren't.",
        },
        {
          text: "Isn't there another bus later?",
          note: "This negative question can express surprise or ask for confirmation.",
        },
      ],
    },
    {
      type: "text",
      title: "Contractions in everyday English",
      paragraphs: [
        "There's is the contraction of there is; there isn't means there is not. There are contracts to there aren't. Use contractions naturally in conversation and informal writing: There's a café downstairs. There isn't any sugar. There aren't any clean cups. There're exists but is uncommon and often sounds awkward; there aren't is the practical choice. Uncontracted forms are suitable for formal writing.",
      ],
    },
    {
      type: "text",
      title: "There is and there's with lists",
      paragraphs: [
        "With a list beginning with a singular item, there is is standard: There is a pen, two notebooks and an eraser on the desk. With a plural first item, use there are in careful writing: There are two notebooks, a pen and an eraser on the desk. Agree with the first item while the whole list describes several things.",
        "Informal speech commonly uses there's before plurals: There's two notebooks on the desk. This is widespread, not simply a beginner error. In formal writing, prefer there are with a clearly plural subject. With mixed lists, usage varies; agreeing with the first item is a consistent approach.",
      ],
    },
    {
      type: "table",
      title: "Common mistakes and quick fixes",
      columns: ["Avoid", "Use instead"],
      rows: [
        ["There have a problem.", "There is a problem. / I have a problem."],
        ["There are a book.", "There is a book."],
        ["There is three chairs.", "There are three chairs."],
        ["There are many informations.", "There is a lot of information."],
        ["Where there is the station?", "Where is the station?"],
      ],
    },
    {
      type: "practice",
      title: "Check the noun, then choose the form",
      instructions:
        "Complete each sentence or correct it, then check your answer.",
      items: [
        {
          prompt: "___ a hospital in this town?",
          answer: "Is there a hospital in this town?",
          hint: "A hospital is singular and countable.",
        },
        {
          prompt: "There ___ two books on the desk.",
          answer: "There are two books on the desk.",
          hint: "Two books is plural.",
        },
        {
          prompt: "There isn't ___ milk in the fridge.",
          answer: "There isn't any milk in the fridge.",
          hint: "Use this word in most negatives and questions.",
        },
        {
          prompt: "Make a negative: There are some shops near here.",
          answer: "There aren't any shops near here. / There are no shops near here.",
          hint: "Add not to are, or use no before the noun.",
        },
        {
          prompt: "Correct for formal writing: There is two students outside.",
          answer: "There are two students outside.",
          hint: "The subject is plural.",
        },
        {
          prompt: "Choose for formal writing: ___ a pen and two pencils on the table. (There is / There are)",
          answer: "There is a pen and two pencils on the table.",
          hint: "Agree with the first item in this mixed list.",
        },
      ],
    },
    {
      type: "tip",
      title: "Do not confuse existence with possession",
      text:
        "Use there is or there are for what exists somewhere. Use have or has for possession: I have a car. There is a car outside. If you mean that a problem or opportunity exists, say There is a problem or There is an opportunity, not There has a problem.",
    },
  ],
};
