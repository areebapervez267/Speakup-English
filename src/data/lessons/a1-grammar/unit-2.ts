import type { LessonUnit } from "@/data/lessons/types";

export const a1GrammarUnit2: LessonUnit = {
  title: "People and things",
  description:
    "Point to things, talk about possession and describe what exists around you.",
  lessons: [
    {
      slug: "this-that-these-those",
      title: "This, that, these and those",
      summary:
        "Point to things near and far, and choose the right form for one thing or many.",
      objective:
        "Use this, that, these and those accurately when speaking about objects around you.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Which thing do you mean?",
          paragraphs: [
            "We use this, that, these and those to point to things. The choice depends on two things: distance and number.",
            "Use this and these for things near you. Use that and those for things farther away.",
          ],
        },
        {
          type: "table",
          title: "Four pointing words",
          columns: ["", "One thing", "More than one"],
          rows: [
            ["Near you", "this", "these"],
            ["Farther away", "that", "those"],
          ],
        },
        {
          type: "examples",
          title: "Pointing in real situations",
          items: [
            {
              text: "This is my phone.",
              note: "The phone is in your hand or very close.",
            },
            {
              text: "That is the bus stop.",
              note: "The bus stop is across the street.",
            },
            {
              text: "These shoes are new.",
              note: "Several shoes, close to you.",
            },
            {
              text: "Those houses are old.",
              note: "Several houses, farther away.",
            },
          ],
        },
        {
          type: "rules",
          title: "Keep the number consistent",
          items: [
            "Use this and that with singular nouns: this book, that car.",
            "Use these and those with plural nouns: these books, those cars.",
            "Ask What is this? for one near thing and What are these? for several.",
          ],
        },
        {
          type: "tip",
          title: "Distance can be personal",
          text: "Near and far can describe physical distance or how connected something feels. In a photo, you can say \"This is my sister\" even if she is not beside you.",
        },
        {
          type: "practice",
          title: "Practice: choose the pointing word",
          instructions:
            "Complete each sentence with this, that, these or those.",
          items: [
            {
              prompt: "___ is my cup. (It is in my hand.)",
              answer: "This is my cup.",
            },
            {
              prompt: "___ are my keys. (They are here on the table.)",
              answer: "These are my keys.",
            },
            {
              prompt: "___ buildings are far away.",
              answer: "Those buildings are far away.",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l5-q1",
          question: "Look at ___ photo here in my hand.",
          options: ["this", "these", "those"],
          correctIndex: 0,
          explanation:
            "Photo is singular and near the speaker, so use this: this photo.",
        },
        {
          id: "l5-q2",
          question: "___ are my friends over there.",
          options: ["This", "That", "Those"],
          correctIndex: 2,
          explanation:
            "Friends is plural and farther away, so use those: Those are my friends.",
        },
        {
          id: "l5-q3",
          question: "Which phrase is incorrect?",
          options: ["this bag", "these bags", "these bag"],
          correctIndex: 2,
          explanation:
            "These must be followed by a plural noun: these bags.",
        },
        {
          id: "l5-q4",
          question: "What is the correct question about one thing close to you?",
          options: ["What are this?", "What is this?", "What is these?"],
          correctIndex: 1,
          explanation:
            "Use is with singular this: What is this?",
        },
      ],
    },
    {
      slug: "possessive-adjectives",
      title: "My, your, his, her, our and their",
      summary:
        "Show who owns or is connected to something with possessive adjectives.",
      objective:
        "Use the seven possessive adjectives correctly according to the person they describe.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Who does it belong to?",
          paragraphs: [
            "Possessive adjectives show that something belongs to a person or is connected to them. They come before a noun: my bag, her sister, our classroom.",
            "The possessive adjective changes to match the owner, not the thing. We say her books, not \"hers books\".",
          ],
        },
        {
          type: "table",
          title: "Possessive adjectives",
          columns: ["Subject pronoun", "Possessive adjective", "Example"],
          rows: [
            ["I", "my", "my name"],
            ["you", "your", "your phone"],
            ["he", "his", "his car"],
            ["she", "her", "her family"],
            ["it", "its", "its colour"],
            ["we", "our", "our teacher"],
            ["they", "their", "their house"],
          ],
        },
        {
          type: "examples",
          title: "Possession in context",
          items: [
            {
              text: "This is my sister, and these are her children.",
              note: "My sister owns the relationship; her points back to her.",
            },
            {
              text: "We love our neighbourhood.",
              note: "Our connects the neighbourhood to we.",
            },
            {
              text: "The company changed its logo.",
              note: "Use its for a thing or organization, not it's. It's means it is.",
            },
          ],
        },
        {
          type: "rules",
          title: "Three things to remember",
          items: [
            "A possessive adjective always comes before a noun: his jacket.",
            "Do not add an apostrophe: my, your, his, her, our, their.",
            "The adjective matches the owner: Tom is with his brother; Maria is with her brother.",
          ],
        },
        {
          type: "tip",
          title: "His or her?",
          text: "Use his for a male owner and her for a female owner. If you do not know or do not want to specify, you can often rephrase: \"Their phone is on the table.\"",
        },
        {
          type: "practice",
          title: "Practice: choose the owner word",
          instructions:
            "Complete each sentence with the correct possessive adjective.",
          items: [
            {
              prompt: "I have a new notebook. ___ cover is blue.",
              answer: "Its cover is blue.",
              hint: "The notebook is a thing.",
            },
            {
              prompt: "Sara is with ___ mother.",
              answer: "Sara is with her mother.",
            },
            {
              prompt: "We do our homework in ___ room.",
              answer: "We do our homework in our room.",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l6-q1",
          question: "Tom is here with ___ brother.",
          options: ["her", "his", "their"],
          correctIndex: 1,
          explanation:
            "Tom is a male owner, so use his: his brother.",
        },
        {
          id: "l6-q2",
          question: "We clean ___ kitchen every evening.",
          options: ["our", "your", "its"],
          correctIndex: 0,
          explanation:
            "The owners are we, so use our: our kitchen.",
        },
        {
          id: "l6-q3",
          question: "Which sentence is correct?",
          options: [
            "The dog is playing with it's ball.",
            "The dog is playing with its ball.",
            "The dog is playing with it ball.",
          ],
          correctIndex: 1,
          explanation:
            "Its shows possession. It's is a contraction of it is.",
        },
        {
          id: "l6-q4",
          question: "Lisa and Ben are travelling with ___ parents.",
          options: ["her", "his", "their"],
          correctIndex: 2,
          explanation:
            "Lisa and Ben together are they, so the possessive adjective is their.",
        },
      ],
    },
    {
      slug: "have-and-has",
      title: "Have and has",
      summary:
        "Talk about things you own and people you know with have and has.",
      objective:
        "Use have and has correctly, including simple negatives and questions.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Possession and relationships",
          paragraphs: [
            "We use have and has to talk about things we own, people in our family and features of things.",
            "Use have with I, you, we and they. Use has with he, she and it.",
          ],
        },
        {
          type: "table",
          title: "Have and has",
          columns: ["Subject", "Verb", "Example"],
          rows: [
            ["I / you / we / they", "have", "I have a bike."],
            ["he / she / it", "has", "She has a bike."],
            ["I / you / we / they", "don't have", "We don't have a car."],
            ["he / she / it", "doesn't have", "He doesn't have a car."],
          ],
        },
        {
          type: "examples",
          title: "Have in everyday life",
          items: [
            {
              text: "I have two brothers.",
              note: "Use have for family connections.",
            },
            {
              text: "Our apartment has a small balcony.",
              note: "The apartment is singular, so use has.",
            },
            {
              text: "Do you have a pen?",
              note: "Use do for a question with I, you, we or they.",
            },
            {
              text: "Does she have a car?",
              note: "Use does for he, she and it. The main verb stays have.",
            },
          ],
        },
        {
          type: "rules",
          title: "Questions and negatives",
          items: [
            "Negative: I don't have a car. / She doesn't have a car.",
            "Question: Do you have a moment? / Does he have a phone?",
            "After do and does, use the base form have, not has.",
            "Short answer: Yes, I do. / No, she doesn't.",
          ],
        },
        {
          type: "tip",
          title: "No double -s",
          text: "Say \"She has a car\" or \"Does she have a car?\", not \"Does she has a car?\" The -s moves to does in the question.",
        },
        {
          type: "practice",
          title: "Practice: have or has?",
          instructions:
            "Complete each sentence or question, then reveal the answer.",
          items: [
            {
              prompt: "My father ___ a new phone.",
              answer: "My father has a new phone.",
              hint: "My father = he.",
            },
            {
              prompt: "They ___ a garden.",
              answer: "They have a garden.",
            },
            {
              prompt: "___ your sister have a bike?",
              answer: "Does your sister have a bike?",
              hint: "Your sister = she.",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l7-q1",
          question: "My parents ___ a small shop.",
          options: ["has", "have", "does"],
          correctIndex: 1,
          explanation:
            "My parents is plural, so use have: My parents have a small shop.",
        },
        {
          id: "l7-q2",
          question: "___ she have a laptop?",
          options: ["Do", "Does", "Has"],
          correctIndex: 1,
          explanation:
            "For a question with she, use does + base verb: Does she have a laptop?",
        },
        {
          id: "l7-q3",
          question: "Choose the correct negative sentence.",
          options: [
            "He doesn't have a car.",
            "He don't has a car.",
            "He doesn't has a car.",
          ],
          correctIndex: 0,
          explanation:
            "With he, use doesn't + have: He doesn't have a car.",
        },
        {
          id: "l7-q4",
          question: "Complete: We ___ a big family.",
          options: ["has", "have", "are have"],
          correctIndex: 1,
          explanation:
            "We takes have: We have a big family.",
        },
      ],
    },
    {
      slug: "there-is-and-there-are",
      title: "There is and there are",
      summary:
        "Say that something exists or is present with there is and there are.",
      objective:
        "Describe places with there is and there are, including negatives and questions.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Introducing what is in a place",
          paragraphs: [
            "Use there is and there are to say that something exists or is in a place. You are not pointing to a specific thing that you already know; you are introducing it.",
            "Use there is with a singular noun and there are with a plural noun.",
          ],
        },
        {
          type: "table",
          title: "Singular and plural",
          columns: ["Form", "Example", "Conversation"],
          rows: [
            ["There is + singular", "There is a park near my house.", "There's a park near my house."],
            ["There are + plural", "There are two parks near my house.", "—"],
            ["There isn't + singular", "There isn't a bank on this street.", "—"],
            ["There aren't + plural", "There aren't any shops here.", "—"],
            ["Is there...? / Are there...?", "Is there a café? / Are there any buses?", "Yes, there is. / No, there aren't."],
          ],
        },
        {
          type: "examples",
          title: "Describing your home and town",
          items: [
            {
              text: "There is a desk in my bedroom.",
              note: "One desk: singular.",
            },
            {
              text: "There are three chairs in the kitchen.",
              note: "Three chairs: plural.",
            },
            {
              text: "There isn't a supermarket in my village.",
              note: "Use any with plural negatives and questions.",
            },
            {
              text: "Are there any good restaurants near here?",
              note: "Any is common in questions.",
            },
          ],
        },
        {
          type: "rules",
          title: "Keep the noun after the verb",
          items: [
            "Use there + be, then the noun: There is a shop.",
            "The noun after the verb controls the form: There is a book. There are two books.",
            "Do not say \"There have a shop\". Use there is or there are.",
            "Use some in affirmative plurals and any in negatives and questions: There are some shops. There aren't any shops.",
          ],
        },
        {
          type: "tip",
          title: "A quick test",
          text: "If the next noun is singular, use there is. If it is plural, use there are. In conversation, \"There's\" is common for singular sentences.",
        },
        {
          type: "practice",
          title: "Practice: describe the room",
          instructions:
            "Complete each sentence with there is, there are, isn't or aren't.",
          items: [
            {
              prompt: "___ a big window in the living room.",
              answer: "There is a big window in the living room.",
              hint: "A window is singular.",
            },
            {
              prompt: "___ four chairs around the table.",
              answer: "There are four chairs around the table.",
            },
            {
              prompt: "___ any milk in the fridge.",
              answer: "There isn't any milk in the fridge.",
              hint: "Milk is an uncountable noun, so use the singular form.",
            },
          ],
        },
      ],
      quiz: [
        {
          id: "l8-q1",
          question: "___ a library near my house.",
          options: ["There is", "There are", "It is"],
          correctIndex: 0,
          explanation:
            "Library is singular, so use there is: There is a library near my house.",
        },
        {
          id: "l8-q2",
          question: "___ two cafés on this street.",
          options: ["There is", "There are", "There be"],
          correctIndex: 1,
          explanation:
            "Two cafés is plural, so use there are.",
        },
        {
          id: "l8-q3",
          question: "Which sentence correctly asks about a singular thing?",
          options: [
            "Is there a bank near here?",
            "Are there a bank near here?",
            "There is a bank near here?",
          ],
          correctIndex: 0,
          explanation:
            "For a singular noun in a question, invert there is: Is there a bank near here?",
        },
        {
          id: "l8-q4",
          question: "There ___ any chairs in the room.",
          options: ["isn't", "aren't", "not"],
          correctIndex: 1,
          explanation:
            "Chairs is plural, so use aren't: There aren't any chairs in the room.",
        },
      ],
    },
  ],
};
