import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1SpeakingUnit4: LessonUnit = {
  title: "Out and about",
  description:
    "Handle shops, cafés and everyday problems with simple, polite English.",
  lessons: [
    {
      slug: "shopping-basics",
      title: "Shopping basics",
      summary:
        "Ask for help, find your size and ask about the price.",
      objective:
        "Use simple phrases to ask for an item, a size and a price in a shop.",
      minutes: 25,
      blocks: [
        {
          type: "dialogue",
          title: "Looking for a T-shirt",
          intro:
            "A customer asks an assistant for help. Read the dialogue aloud.",
          lines: [
            { speaker: "Assistant", text: "Hi, can I help you?" },
            { speaker: "Customer", text: "Yes, I'm looking for a T-shirt." },
            { speaker: "Assistant", text: "What size are you?" },
            { speaker: "Customer", text: "Medium, please. How much is this one?" },
            { speaker: "Assistant", text: "It's twelve pounds fifty." },
            { speaker: "Customer", text: "Can I try it on?" },
            { speaker: "Assistant", text: "Yes, of course. The fitting room is over there." },
            { speaker: "Customer", text: "Thank you. I'll take it." },
          ],
        },
        {
          type: "table",
          title: "Shopping phrases",
          columns: ["Purpose", "Phrase"],
          rows: [
            ["Ask for help", "Can I help you? / I'm looking for …"],
            ["Ask about size", "What size are you? / Do you have this in medium?"],
            ["Ask the price", "How much is this one?"],
            ["Try clothes", "Can I try it on?"],
            ["Decide to buy", "I'll take it."],
            ["Pay", "Can I pay by card?"],
          ],
        },
        {
          type: "tip",
          title: "One question at a time",
          text: "In a shop, you can ask short, separate questions: Do you have this in blue? What size is it? How much is it? Short questions are easy to understand and easy to answer.",
        },
        {
          type: "exercise",
          title: "Choose the best phrase",
          instructions:
            "Read each situation and choose the natural phrase. Say it aloud.",
          items: [
            c(
              "An assistant says: “Can I help you?” What can you say?",
              ["Yes, I'm looking for a jacket.", "Yes, I help you.", "No, I am looking."],
              0,
              "I'm looking for + item tells the assistant what you want.",
            ),
            c(
              "You want to know the price of a shirt. What do you ask?",
              ["How much is this shirt?", "How many is this shirt?", "What price you have?"],
              0,
              "Use How much is …? to ask about price.",
            ),
            c(
              "You want to put on a jacket before buying it. What do you ask?",
              ["Can I try it on?", "Can I take it on?", "Can I wear it here?"],
              0,
              "Can I try it on? asks to wear the item briefly to check the size.",
            ),
            c(
              "You decide to buy the item. What do you say?",
              ["I'll take it.", "I'll give it.", "I'll look it."],
              0,
              "I'll take it tells the assistant you want to buy it.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rehearse a shop conversation",
          instructions:
            "Say each line aloud, then check the model. Practise both the customer and assistant parts.",
          items: [
            p(
              "Ask an assistant for a blue T-shirt in medium.",
              "Model answer: Do you have this T-shirt in blue, in medium?",
              "Use Do you have … in + colour, in + size?",
            ),
            p(
              "Ask how much an item costs.",
              "Model answer: How much is this one?",
              "Use How much is …?",
            ),
            p(
              "Say you want to try the item on, then say you will buy it.",
              "Model answer: Can I try it on? … Great, I'll take it.",
              "Use Can I try it on? and I'll take it.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which phrase asks for an item?",
          ["I'm looking for a T-shirt.", "I'm looking at a T-shirt.", "I look a T-shirt."],
          0,
          "I'm looking for + item is the standard shopping phrase.",
        ),
        q(
          2,
          "Which question asks about price?",
          ["How much is this?", "How many is this?", "What much is this?"],
          0,
          "How much is this? asks for the price.",
        ),
        q(
          3,
          "What does “Can I try it on?” mean?",
          ["Can I wear it to check the size?", "Can I buy it?", "Can I wash it?"],
          0,
          "Try on means put on clothes briefly to see if they fit.",
        ),
        q(
          4,
          "Which phrase shows you want to buy the item?",
          ["I'll take it.", "I'll try it.", "I'll find it."],
          0,
          "I'll take it means I will buy it.",
        ),
      ],
    },
    {
      slug: "ordering-food-and-drink",
      title: "Ordering food and drink",
      summary:
        "Order politely, ask for the price and request a receipt.",
      objective:
        "Order food and drink politely and ask simple follow-up questions.",
      minutes: 25,
      blocks: [
        {
          type: "dialogue",
          title: "At the counter",
          intro:
            "A customer orders lunch. Read the dialogue aloud with a partner.",
          lines: [
            { speaker: "Server", text: "Hi, what would you like?" },
            { speaker: "Customer", text: "I'd like a chicken sandwich and an orange juice, please." },
            { speaker: "Server", text: "Anything else?" },
            { speaker: "Customer", text: "No, thanks. How much is that?" },
            { speaker: "Server", text: "That's eight pounds forty." },
            { speaker: "Customer", text: "Here you are. Can I have the receipt, please?" },
            { speaker: "Server", text: "Of course. Here you are." },
            { speaker: "Customer", text: "Thank you." },
          ],
        },
        {
          type: "table",
          title: "Ordering phrases",
          columns: ["Purpose", "Phrase"],
          rows: [
            ["Order", "I'd like …, please. / Can I have …, please?"],
            ["Ask about extras", "Anything else?"],
            ["Ask the price", "How much is that?"],
            ["Ask for the bill", "Can I have the bill, please?"],
            ["Ask for a receipt", "Can I have the receipt, please?"],
          ],
        },
        {
          type: "tip",
          title: "Please makes the order polite",
          text: "I'd like … is a little more polite than I want … . Adding please makes it friendlier: I'd like a coffee, please. You can also say Can I have …? for an informal café or shop.",
        },
        {
          type: "exercise",
          title: "Choose the best order",
          instructions:
            "Read each situation and choose the correct phrase. Say it aloud.",
          items: [
            c(
              "You want to order a tea politely. What do you say?",
              ["I'd like a tea, please.", "I want tea.", "Give me a tea."],
              0,
              "I'd like … please is polite and natural.",
            ),
            c(
              "The server asks: “Anything else?” You do not want more. What do you say?",
              ["No, thanks.", "Yes, please, more.", "Anything."],
              0,
              "No, thanks politely refuses more food or drink.",
            ),
            c(
              "You want to know the total. What do you ask?",
              ["How much is that?", "How many is that?", "What is that much?"],
              0,
              "How much is that? asks for the total price.",
            ),
            c(
              "You need a document showing what you paid. What do you ask for?",
              ["The receipt", "The menu", "The table"],
              0,
              "A receipt shows what you bought and paid.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Order a meal",
          instructions:
            "Say each line aloud, then compare with the model. Use a different food or drink for the final task.",
          items: [
            p(
              "Order a sandwich and a drink politely.",
              "Model answer: I'd like a cheese sandwich and a coffee, please.",
              "Use I'd like + items + please.",
            ),
            p(
              "Ask for the total and the receipt.",
              "Model answer: How much is that? Can I have the receipt, please?",
              "Use How much …? and Can I have …?",
            ),
            p(
              "Role-play the customer: order a meal and respond to “Anything else?”",
              "Model answer: I'd like a soup and a water, please. … No, thanks.",
              "Use I'd like … and No, thanks.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which phrase orders food politely?",
          ["I'd like a sandwich, please.", "I want sandwich.", "Give me a sandwich."],
          0,
          "I'd like … please is polite and complete.",
        ),
        q(
          2,
          "What does “Anything else?” mean?",
          ["Would you like something more?", "Is your food good?", "Where are you going?"],
          0,
          "The server asks whether you want another item.",
        ),
        q(
          3,
          "How much is the order in the dialogue?",
          ["£8.40", "£8.14", "£4.80"],
          0,
          "The server says: That's eight pounds forty.",
        ),
        q(
          4,
          "Which phrase asks for the bill?",
          ["Can I have the bill, please?", "Can I have the menu, please?", "Can I have a table, please?"],
          0,
          "The bill shows how much you need to pay at the end of a meal.",
        ),
      ],
    },
    {
      slug: "asking-for-help",
      title: "Asking for help",
      summary:
        "Ask for help, explain a problem and ask someone to repeat.",
      objective:
        "Ask for help politely, say what you do not understand and check instructions.",
      minutes: 25,
      blocks: [
        {
          type: "dialogue",
          title: "Finding the station",
          intro:
            "A visitor is lost and asks a local person for help. Read the dialogue aloud.",
          lines: [
            { speaker: "Visitor", text: "Excuse me, can you help me?" },
            { speaker: "Local", text: "Of course. What's the problem?" },
            { speaker: "Visitor", text: "I don't understand this map. Where is the station?" },
            { speaker: "Local", text: "Go straight and turn left at the lights. It's next to the post office." },
            { speaker: "Visitor", text: "Sorry, can you repeat that, please?" },
            { speaker: "Local", text: "Of course. Go straight, then turn left at the lights." },
            { speaker: "Visitor", text: "Thank you so much." },
            { speaker: "Local", text: "You're welcome. Have a nice day!" },
          ],
        },
        {
          type: "table",
          title: "Helpful phrases when you are stuck",
          columns: ["Situation", "Phrase"],
          rows: [
            ["Start politely", "Excuse me, can you help me?"],
            ["You do not understand", "Sorry, I don't understand."],
            ["You need repetition", "Can you repeat that, please?"],
            ["Too fast", "Can you speak more slowly, please?"],
            ["Check understanding", "So, I go straight and turn left?"],
            ["Say thank you", "Thank you so much. / You're welcome."],
          ],
        },
        {
          type: "tip",
          title: "Repeat the instruction back",
          text: "When someone gives you directions or information, repeat the key part back as a question: So, I go straight and turn left at the lights? This checks that you understood and gives the other person a chance to correct you.",
        },
        {
          type: "exercise",
          title: "Choose the best phrase",
          instructions:
            "Read each situation and choose the natural phrase. Say it aloud.",
          items: [
            c(
              "You stop a stranger in the street. What do you say first?",
              ["Excuse me, can you help me?", "Help me now.", "You, help me."],
              0,
              "Excuse me, can you help me? is polite and gets attention.",
            ),
            c(
              "You do not understand a fast explanation. What can you say?",
              ["Sorry, I don't understand. Can you speak more slowly, please?", "Speak slowly.", "I don't understand you are speaking."],
              0,
              "The first option explains the problem and asks politely for slower speech.",
            ),
            c(
              "You want someone to say the directions again. What do you ask?",
              ["Can you repeat that, please?", "Can you repeat me?", "Repeat the words."],
              0,
              "Can you repeat that, please? asks for the information again.",
            ),
            c(
              "Someone helps you. What do you say?",
              ["Thank you so much.", "I'm sorry.", "Nice to meet you."],
              0,
              "Thank you so much is a natural way to thank someone for help.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Ask for help",
          instructions:
            "Say each answer aloud, then check the model. Imagine a real place you do not know.",
          items: [
            p(
              "Ask a stranger for directions to the nearest bank.",
              "Model answer: Excuse me, can you help me? Where is the nearest bank?",
              "Start with Excuse me and use Where is …?",
            ),
            p(
              "Ask someone to repeat and slow down.",
              "Model answer: Sorry, I don't understand. Can you repeat that more slowly, please?",
              "Use I don't understand and Can you repeat …?",
            ),
            p(
              "Check the directions by repeating them back.",
              "Model answer: So, I go straight, then turn right at the station?",
              "Start with So, … and repeat the key actions.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which phrase politely gets a stranger's attention?",
          ["Excuse me, can you help me?", "Hey, you!", "Help!"],
          0,
          "Excuse me is the standard polite way to begin.",
        ),
        q(
          2,
          "How can you say that you do not understand?",
          ["Sorry, I don't understand.", "Sorry, I no understand.", "Sorry, I am not understand."],
          0,
          "Use don't + base verb: I don't understand.",
        ),
        q(
          3,
          "Which phrase asks someone to repeat?",
          ["Can you repeat that, please?", "Can you say that?", "Can you repeat me?"],
          0,
          "Can you repeat that, please? is the correct polite request.",
        ),
        q(
          4,
          "What does the local person say about the station's location?",
          ["It is next to the post office", "It is inside the post office", "It is next to the bank"],
          0,
          "The local says: It's next to the post office.",
        ),
      ],
    },
  ],
};
