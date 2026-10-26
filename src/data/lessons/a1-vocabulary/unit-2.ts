import {
  p,
  wordExercises,
  wordQuiz,
} from "@/data/lessons/authoring";
import type { LessonUnit, LessonWord } from "@/data/lessons/types";

const foodWords: LessonWord[] = [
  {
    term: "bread",
    meaning: "a baked food made from flour",
    example: "I eat bread for breakfast.",
  },
  {
    term: "rice",
    meaning: "small white or brown grains that you cook",
    example: "We eat rice with vegetables.",
  },
  {
    term: "egg",
    meaning: "an oval food that comes from a bird",
    example: "I have an egg for breakfast.",
  },
  {
    term: "milk",
    meaning: "a white drink that comes from cows",
    example: "She drinks milk every morning.",
  },
  {
    term: "water",
    meaning: "a clear drink with no colour",
    example: "Please give me a glass of water.",
  },
  {
    term: "coffee",
    meaning: "a hot brown drink made from beans",
    example: "He drinks coffee after lunch.",
  },
];

const produceWords: LessonWord[] = [
  {
    term: "apple",
    meaning: "a round fruit with red or green skin",
    example: "I take an apple to work.",
  },
  {
    term: "banana",
    meaning: "a long yellow fruit",
    example: "She eats a banana after lunch.",
  },
  {
    term: "orange",
    meaning: "a round orange fruit with sweet juice",
    example: "This orange is very sweet.",
  },
  {
    term: "tomato",
    meaning: "a soft red fruit used in salads and cooking",
    example: "Put one tomato in the salad.",
  },
  {
    term: "carrot",
    meaning: "a long orange vegetable",
    example: "A carrot is good in soup.",
  },
  {
    term: "potato",
    meaning: "a round vegetable that grows under the ground",
    example: "We cook a potato in the oven.",
  },
];

const clothesWords: LessonWord[] = [
  {
    term: "shirt",
    meaning: "clothing for the top of your body with a collar and buttons",
    example: "He is wearing a blue shirt.",
  },
  {
    term: "trousers",
    meaning: "clothing for your legs",
    example: "These trousers are black.",
  },
  {
    term: "dress",
    meaning: "clothing for a woman or girl that covers the body and legs",
    example: "She is wearing a red dress.",
  },
  {
    term: "shoes",
    meaning: "things you wear on your feet",
    example: "My shoes are white.",
  },
  {
    term: "jacket",
    meaning: "a short coat for the top of your body",
    example: "Take a jacket. It is cold.",
  },
  {
    term: "hat",
    meaning: "clothing you wear on your head",
    example: "He wears a hat in the sun.",
  },
];

const shoppingWords: LessonWord[] = [
  {
    term: "shop",
    meaning: "a place where you buy things",
    example: "The shop is open until six.",
  },
  {
    term: "market",
    meaning: "an outdoor place with many small stalls",
    example: "We buy fruit at the market.",
  },
  {
    term: "price",
    meaning: "the amount of money something costs",
    example: "The price is five euros.",
  },
  {
    term: "money",
    meaning: "coins and notes you use to buy things",
    example: "I have enough money for lunch.",
  },
  {
    term: "cheap",
    meaning: "costing little money",
    example: "This bag is cheap.",
  },
  {
    term: "expensive",
    meaning: "costing a lot of money",
    example: "That watch is expensive.",
  },
];

export const a1VocabularyUnit2: LessonUnit = {
  title: "Food and shopping",
  description:
    "Build a practical word bank for eating, buying food and talking about clothes and prices.",
  lessons: [
    {
      slug: "food-and-drink",
      title: "Food and drink",
      summary:
        "Learn everyday food and drink words and talk about what you eat and drink.",
      objective:
        "Name six common foods and drinks and use some, a and an correctly.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "Food for every day",
          paragraphs: [
            "Food and drink words appear in every conversation about breakfast, shopping and meals. Start with the words you use most often.",
            "Some food words are countable, like egg: one egg, two eggs. Others are uncountable, like rice and milk. Use some with uncountable food: some rice.",
          ],
        },
        {
          type: "wordbank",
          title: "Food and drink words",
          intro:
            "These words are useful for breakfast, lunch and simple shopping.",
          words: foodWords,
        },
        {
          type: "examples",
          title: "At home and in a café",
          items: [
            {
              text: "I have bread and an egg for breakfast.",
              note: "Bread is uncountable, but egg is countable.",
            },
            {
              text: "We need some rice for dinner.",
              note: "Use some with rice.",
            },
            {
              text: "Can I have a glass of water, please?",
              note: "Use a glass of for water.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the food or drink",
          instructions:
            "Read each sentence and choose the word that fits. Then check your answer.",
          items: wordExercises(foodWords.slice(3)),
        },
        {
          type: "practice",
          title: "Talk about your meals",
          instructions:
            "Say each answer aloud or write it down before you reveal the model.",
          items: [
            p(
              "What do you drink in the morning?",
              "Model answer: I drink coffee in the morning.",
            ),
            p(
              "Complete: I would like ___ egg, please.",
              "I would like an egg, please.",
              "Use a or an before one countable thing.",
            ),
            p(
              "Name one food you eat with rice.",
              "Model answer: I eat rice with vegetables.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Some or a?",
          text: "Use some with uncountable food such as rice, bread and water. Use a or an with one countable thing: an egg, an apple, a banana.",
        },
      ],
      quiz: wordQuiz(foodWords.slice(0, 4)),
    },
    {
      slug: "fruit-and-vegetables",
      title: "Fruit and vegetables",
      summary:
        "Learn fruit and vegetable words and practise plural forms.",
      objective:
        "Name six fruits and vegetables and use plural forms such as tomatoes and potatoes.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "Colour on your plate",
          paragraphs: [
            "Fruit and vegetables are easy to describe because they have clear colours, shapes and tastes. A carrot is long and orange. An apple is round.",
            "Most plurals add -s: apple → apples. Words ending in -o often add -es: tomato → tomatoes, potato → potatoes.",
          ],
        },
        {
          type: "wordbank",
          title: "Fruit and vegetables",
          intro:
            "Practise these words at the supermarket or when you cook.",
          words: produceWords,
        },
        {
          type: "examples",
          title: "Buying fruit and vegetables",
          items: [
            {
              text: "I need two tomatoes and one onion.",
              note: "Tomato becomes tomatoes in the plural.",
            },
            {
              text: "We have three potatoes at home.",
              note: "Potato becomes potatoes in the plural.",
            },
            {
              text: "This banana is yellow.",
              note: "This + one thing.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the fruit or vegetable",
          instructions:
            "Pick the missing word in each food sentence, then check your answer.",
          items: wordExercises(produceWords.slice(3)),
        },
        {
          type: "practice",
          title: "Your favourite produce",
          instructions:
            "Answer aloud, then reveal the model answer to compare.",
          items: [
            p(
              "Which fruit do you like?",
              "Model answer: I like bananas and apples.",
            ),
            p(
              "Make tomato plural in this sentence: I need two ___.",
              "I need two tomatoes.",
              "Add -es.",
            ),
            p(
              "Name a long orange vegetable.",
              "A carrot is a long orange vegetable.",
              "It is good in soup.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Tomato or tomatoes?",
          text: "Use the singular after one: one tomato. Use the plural after two, three or many: two tomatoes, many potatoes.",
        },
      ],
      quiz: wordQuiz(produceWords.slice(0, 4)),
    },
    {
      slug: "clothes-and-colours",
      title: "Clothes and colours",
      summary:
        "Name common clothes and add colours to describe what people wear.",
      objective:
        "Describe clothes with colours and use singular or plural verbs correctly.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "What are you wearing?",
          paragraphs: [
            "Use clothes words with colours to describe people. The colour comes before the clothes word: a blue shirt, red shoes.",
            "Some clothes words are always plural: trousers and shoes. Use are with them: My shoes are black. Use is with a single item: My shirt is blue.",
          ],
        },
        {
          type: "wordbank",
          title: "Clothes words",
          intro:
            "These everyday clothes are useful in shops, at home and when you travel.",
          words: clothesWords,
        },
        {
          type: "examples",
          title: "Describing clothes",
          items: [
            {
              text: "He is wearing a blue shirt.",
              note: "Colour + clothes word.",
            },
            {
              text: "These trousers are black.",
              note: "Trousers is plural, so use are.",
            },
            {
              text: "She is wearing a red dress and white shoes.",
              note: "Use and to add another item.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the clothing word",
          instructions:
            "Complete each sentence with the best clothing word, then check your answer.",
          items: wordExercises(clothesWords.slice(3)),
        },
        {
          type: "practice",
          title: "Describe your clothes",
          instructions:
            "Say your sentences aloud or write them, then compare with the model.",
          items: [
            p(
              "What are you wearing today?",
              "Model answer: I am wearing a white shirt and blue trousers.",
            ),
            p(
              "Complete: She is wearing a red ___ to the party.",
              "She is wearing a red dress to the party.",
              "A woman or girl wears it.",
            ),
            p(
              "What do you wear on your head in the sun?",
              "I wear a hat on my head in the sun.",
            ),
          ],
        },
        {
          type: "tip",
          title: "A pair of...",
          text: "Trousers and shoes have no singular form in everyday English. Say a pair of trousers or a pair of shoes.",
        },
      ],
      quiz: wordQuiz(clothesWords.slice(0, 4)),
    },
    {
      slug: "shopping-and-money",
      title: "Shopping and money",
      summary:
        "Ask about prices and talk about things that are cheap or expensive.",
      objective:
        "Ask how much something costs and use six useful shopping words.",
      minutes: 25,
      blocks: [
        {
          type: "text",
          title: "At the shop",
          paragraphs: [
            "When you shop, you often ask one simple question: How much is it? The answer gives you the price.",
            "Use cheap for something that costs little money. Use expensive for something that costs a lot. You can also talk about the shop, the market and your money.",
          ],
        },
        {
          type: "wordbank",
          title: "Shopping words",
          intro:
            "Learn these words before your next visit to a shop or market.",
          words: shoppingWords,
        },
        {
          type: "examples",
          title: "Asking about price",
          items: [
            {
              text: "How much is this bag?",
              note: "Use is with one thing.",
            },
            {
              text: "The price is five euros.",
              note: "The price is + amount.",
            },
            {
              text: "That watch is expensive, but this one is cheap.",
              note: "Expensive and cheap describe price.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the shopping word",
          instructions:
            "Choose the best word for each sentence, then check your answer.",
          items: wordExercises(shoppingWords.slice(3)),
        },
        {
          type: "practice",
          title: "Go shopping",
          instructions:
            "Say the answers aloud, then reveal a model response.",
          items: [
            p(
              "Ask how much one T-shirt costs.",
              "How much is this T-shirt?",
              "Start with How much.",
            ),
            p(
              "A coffee costs one euro. Is it cheap or expensive?",
              "It is cheap.",
              "One euro is a low price.",
            ),
            p(
              "Write two sentences about something you bought.",
              "Model answer: I bought a bag. The price was twenty euros.",
            ),
          ],
        },
        {
          type: "tip",
          title: "How much...?",
          text: "For one thing, ask “How much is it?” For two or more things, ask “How much are they?”",
        },
      ],
      quiz: wordQuiz(shoppingWords.slice(0, 4)),
    },
  ],
};
