import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1ListeningUnit3: LessonUnit = {
  title: "Food, shopping and money",
  description:
    "Follow orders, prices and simple requests in cafés, markets and shops.",
  lessons: [
    {
      slug: "at-the-cafe",
      title: "At the café",
      summary:
        "Listen to a café order and catch the food, drinks and total price.",
      objective:
        "Understand a simple café order and the final price.",
      minutes: 25,
      blocks: [
        {
          type: "transcript",
          title: "Ordering lunch",
          context:
            "A customer orders lunch at a small café.",
          lines: [
            { speaker: "Server", text: "Hello, what can I get you?" },
            { speaker: "Customer", text: "Can I have a cheese sandwich and a coffee, please?" },
            { speaker: "Server", text: "White or black coffee?" },
            { speaker: "Customer", text: "White, please. And a glass of water." },
            { speaker: "Server", text: "Of course. Anything else?" },
            { speaker: "Customer", text: "No, thank you. How much is that?" },
            { speaker: "Server", text: "That's seven pounds ten." },
            { speaker: "Customer", text: "Here you are." },
            { speaker: "Server", text: "Thank you. Take a seat and I'll bring it over." },
          ],
        },
        {
          type: "tip",
          title: "Listen for the order and the total",
          text: "In a café, listen for Can I have …? and Anything else? The total comes after How much is that? Prices are often said quickly, so listen for the pounds first: seven pounds ten.",
        },
        {
          type: "exercise",
          title: "Check the order",
          instructions:
            "Read the transcript, cover it, then choose the best answer.",
          items: [
            c(
              "What food does the customer order?",
              ["A cheese sandwich", "A chicken salad", "A bowl of soup"],
              0,
              "The customer says: Can I have a cheese sandwich and a coffee.",
            ),
            c(
              "What kind of coffee does the customer want?",
              ["White coffee", "Black coffee", "Coffee with no milk"],
              0,
              "The server asks White or black coffee? and the customer says White, please.",
            ),
            c(
              "How much is the order?",
              ["£7.10", "£7.00", "£17.10"],
              0,
              "The server says: That's seven pounds ten, which is £7.10.",
            ),
            c(
              "What should the customer do after paying?",
              ["Take a seat", "Collect the food at the counter", "Leave the café"],
              0,
              "The server says: Take a seat and I'll bring it over.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise café language",
          instructions:
            "Answer aloud, then reveal the model response.",
          items: [
            p(
              "What polite phrase does the customer use to order?",
              "Can I have … please?",
              "It is in the customer's first line.",
            ),
            p(
              "Does the customer order anything else?",
              "No. The customer says No, thank you when asked Anything else?",
              "Look at the line after the water.",
            ),
            p(
              "Order a tea and a sandwich politely.",
              "Model answer: Can I have a tea and a cheese sandwich, please?",
              "Use Can I have … please?",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What does the server ask first?",
          ["What can I get you?", "Where are you from?", "How old are you?"],
          0,
          "The server begins: Hello, what can I get you?",
        ),
        q(
          2,
          "What does the customer order to drink?",
          ["A white coffee and a glass of water", "A black coffee", "A glass of orange juice"],
          0,
          "The customer asks for a white coffee and a glass of water.",
        ),
        q(
          3,
          "How much does the customer pay?",
          ["£7.10", "£7.50", "£6.10"],
          0,
          "The server says: That's seven pounds ten.",
        ),
        q(
          4,
          "Who brings the food to the table?",
          ["The server", "The customer", "Another customer"],
          0,
          "The server says: Take a seat and I'll bring it over.",
        ),
      ],
    },
    {
      slug: "food-and-prices",
      title: "Food and prices",
      summary:
        "Follow a market conversation with quantities, prices and a simple total.",
      objective:
        "Understand prices and quantities when buying food at a market.",
      minutes: 25,
      blocks: [
        {
          type: "transcript",
          title: "At the fruit and vegetable stall",
          context:
            "A customer buys tomatoes and apples at a market stall.",
          lines: [
            { speaker: "Seller", text: "Morning! These tomatoes are very good today. Two pounds eighty a kilo." },
            { speaker: "Customer", text: "Great. Can I have one kilo, please? And how much are the apples?" },
            { speaker: "Seller", text: "Three pounds twenty a kilo. They're very sweet." },
            { speaker: "Customer", text: "I'll take two kilos. Do you have any bread?" },
            { speaker: "Seller", text: "Sorry, no bread today. The bakery is next to the station." },
            { speaker: "Customer", text: "OK. So that's nine pounds twenty?" },
            { speaker: "Seller", text: "Let's see: two eighty plus six forty is nine twenty. Yes." },
            { speaker: "Customer", text: "Here you are." },
          ],
        },
        {
          type: "table",
          title: "The customer's basket",
          columns: ["Item", "Quantity", "Price per kilo", "Total"],
          rows: [
            ["Tomatoes", "1 kilo", "£2.80", "£2.80"],
            ["Apples", "2 kilos", "£3.20", "£6.40"],
          ],
          caption: "Total: £2.80 + £6.40 = £9.20.",
        },
        {
          type: "exercise",
          title: "Check the shopping",
          instructions:
            "Read the transcript, cover it, then answer the questions.",
          items: [
            c(
              "How much are the tomatoes per kilo?",
              ["£2.80", "£3.20", "£6.40"],
              0,
              "The seller says: Two pounds eighty a kilo.",
            ),
            c(
              "How many kilos of apples does the customer buy?",
              ["Two", "One", "Three"],
              0,
              "The customer says: I'll take two kilos, after asking about the apples.",
            ),
            c(
              "What is the total price?",
              ["£9.20", "£8.20", "£6.40"],
              0,
              "The seller calculates: two eighty plus six forty is nine twenty.",
            ),
            c(
              "Why can the customer not buy bread at the stall?",
              ["The stall has no bread today", "The bread is too expensive", "The customer has no money"],
              0,
              "The seller says: Sorry, no bread today. The bakery is next to the station.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise shopping",
          instructions:
            "Calculate or recall each answer, then check the model.",
          items: [
            p(
              "How much do two kilos of apples cost?",
              "Two kilos at £3.20 each cost £6.40.",
              "Multiply the price per kilo by two.",
            ),
            p(
              "Where can the customer find bread?",
              "At the bakery next to the station.",
              "The seller gives a place in the final part of the conversation.",
            ),
            p(
              "Ask for one kilo of tomatoes politely.",
              "Model answer: Can I have one kilo of tomatoes, please?",
              "Use Can I have … please?",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "How much are the apples per kilo?",
          ["£3.20", "£2.80", "£9.20"],
          0,
          "The seller says: Three pounds twenty a kilo.",
        ),
        q(
          2,
          "How many kilos of tomatoes does the customer buy?",
          ["One", "Two", "Three"],
          0,
          "The customer asks for one kilo of tomatoes.",
        ),
        q(
          3,
          "How much does the customer pay in total?",
          ["£9.20", "£6.40", "£2.80"],
          0,
          "The total is £9.20: £2.80 for tomatoes and £6.40 for apples.",
        ),
        q(
          4,
          "What does the seller say about the apples?",
          ["They are very sweet", "They are expensive", "They are not fresh"],
          0,
          "The seller says: They're very sweet.",
        ),
      ],
    },
    {
      slug: "in-the-shop",
      title: "In the shop",
      summary:
        "Follow a clothes-shop conversation about size, colour and price.",
      objective:
        "Understand simple requests and answers when buying clothes.",
      minutes: 25,
      blocks: [
        {
          type: "transcript",
          title: "Buying a jacket",
          context:
            "A customer asks for help in a clothes shop.",
          lines: [
            { speaker: "Assistant", text: "Hi, can I help you?" },
            { speaker: "Customer", text: "Yes, I'm looking for a jacket. Do you have this one in blue?" },
            { speaker: "Assistant", text: "What size are you?" },
            { speaker: "Customer", text: "Medium, I think." },
            { speaker: "Assistant", text: "Here's a medium in blue. The fitting room is over there." },
            { speaker: "Customer", text: "Thank you. … It's a little small. Do you have a large?" },
            { speaker: "Assistant", text: "Yes, here you are. It's forty-five pounds." },
            { speaker: "Customer", text: "Great, I'll take it." },
          ],
        },
        {
          type: "tip",
          title: "Sizes, colours and prices",
          text: "In a clothes shop, listen for size words (small, medium, large), colours (blue, black, green) and the price. Phrases like I'm looking for …, Do you have …? and I'll take it are very useful.",
        },
        {
          type: "exercise",
          title: "Check the purchase",
          instructions:
            "Read the transcript, cover it, then choose the best answer.",
          items: [
            c(
              "What is the customer looking for?",
              ["A jacket", "A shirt", "A pair of shoes"],
              0,
              "The customer says: I'm looking for a jacket.",
            ),
            c(
              "What size does the customer try first?",
              ["Medium", "Large", "Small"],
              0,
              "The customer says Medium, I think, and the assistant brings a medium.",
            ),
            c(
              "Why does the customer ask for a large?",
              ["The medium is a little small", "The medium is the wrong colour", "The medium is too expensive"],
              0,
              "The customer says: It's a little small. Do you have a large?",
            ),
            c(
              "How much is the large jacket?",
              ["£45", "£35", "£54"],
              0,
              "The assistant says: It's forty-five pounds.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise shop language",
          instructions:
            "Say your answer aloud, then reveal the model.",
          items: [
            p(
              "Where can the customer try on the jacket?",
              "In the fitting room. The assistant says: The fitting room is over there.",
              "It is mentioned after the first medium jacket.",
            ),
            p(
              "Does the customer buy the jacket?",
              "Yes. The customer says: Great, I'll take it.",
              "Look at the final line.",
            ),
            p(
              "Ask for a blue jacket in medium.",
              "Model answer: Do you have this jacket in blue, in medium?",
              "Use Do you have …?",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What colour does the customer ask for?",
          ["Blue", "Black", "Brown"],
          0,
          "The customer asks: Do you have this one in blue?",
        ),
        q(
          2,
          "What does the assistant ask?",
          ["What size are you?", "How old are you?", "Where do you live?"],
          0,
          "The assistant asks: What size are you?",
        ),
        q(
          3,
          "Where is the fitting room?",
          ["Over there", "Next to the station", "Upstairs"],
          0,
          "The assistant says: The fitting room is over there.",
        ),
        q(
          4,
          "What does I'll take it mean?",
          ["I want to buy it", "I want to try it", "I do not like it"],
          0,
          "I'll take it tells the assistant that the customer wants to buy the item.",
        ),
      ],
    },
  ],
};
