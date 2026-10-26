import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1SpeakingUnit3: LessonUnit = {
  title: "Daily life",
  description:
    "Talk about routines, say what you like and make simple plans with friends.",
  lessons: [
    {
      slug: "talking-about-routines",
      title: "Talking about routines",
      summary:
        "Ask about daily habits and use frequency words to sound natural.",
      objective:
        "Ask and answer simple present questions about daily routines and times.",
      minutes: 25,
      blocks: [
        {
          type: "dialogue",
          title: "Before class",
          intro:
            "Ben and Ana talk about their normal days. Read the dialogue aloud.",
          lines: [
            { speaker: "Ben", text: "What time do you get up?" },
            { speaker: "Ana", text: "I get up at 6.30." },
            { speaker: "Ben", text: "That's early! Do you work in the morning?" },
            { speaker: "Ana", text: "Yes, I start work at 8 and I finish at 4." },
            { speaker: "Ben", text: "What do you do after work?" },
            { speaker: "Ana", text: "I usually go to the gym. Sometimes I meet a friend for coffee." },
            { speaker: "Ben", text: "Nice. I never go to the gym in the evening!" },
          ],
        },
        {
          type: "rules",
          title: "Present simple for routines",
          items: [
            "Questions with you: What time do you get up? Do you work in the morning?",
            "Answers with I: I get up at 6.30. I start work at 8.",
            "Questions with he/she: What time does she start? Does he work on Saturdays?",
            "Answers with he/she: She starts at 9. He works at home.",
            "Frequency words go before the main verb: I usually go to the gym. I never work on Sundays.",
          ],
        },
        {
          type: "table",
          title: "Frequency words",
          columns: ["Word", "How often", "Example"],
          rows: [
            ["always", "100%", "I always have breakfast."],
            ["usually", "most days", "I usually walk to work."],
            ["often", "many times", "We often eat at home."],
            ["sometimes", "now and then", "I sometimes meet friends."],
            ["never", "0%", "I never drink coffee at night."],
          ],
        },
        {
          type: "exercise",
          title: "Choose the natural sentence",
          instructions:
            "Read each situation and choose the correct option. Say the sentence aloud.",
          items: [
            c(
              "Which question about a routine is correct?",
              ["What time do you get up?", "What time you get up?", "What time do get up you?"],
              0,
              "Use What time do you + verb? for a routine question.",
            ),
            c(
              "Which sentence is correct?",
              ["She starts work at 9.", "She start work at 9.", "She starts work in 9."],
              0,
              "With she, add -s to the verb, and use at + time: She starts work at 9.",
            ),
            c(
              "Which sentence puts the frequency word in the natural place?",
              ["I usually go to the gym.", "I go usually to the gym.", "Usually I go the gym."],
              0,
              "Frequency words like usually go before the main verb: I usually go to the gym.",
            ),
            c(
              "How do you ask a friend if they work in the morning?",
              ["Do you work in the morning?", "You work in the morning?", "Does you work in the morning?"],
              0,
              "With you, use do: Do you work in the morning?",
            ),
          ],
        },
        {
          type: "practice",
          title: "Describe your routine",
          instructions:
            "Say your answer aloud, then compare with the model. Repeat with different times.",
          items: [
            p(
              "Answer the question: What time do you get up?",
              "Model answer: I get up at 7.15.",
              "Use I get up at + time.",
            ),
            p(
              "Say two things you usually do after work or study.",
              "Model answer: I usually go home and cook dinner. Sometimes I watch a film.",
              "Use usually and sometimes before the main verb.",
            ),
            p(
              "Ask a partner about their evening routine.",
              "Model answer: What do you do in the evening? Do you usually stay at home?",
              "Use What do you …? and Do you usually …?",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which question asks about a morning routine?",
          ["What time do you get up?", "What time are you get up?", "What time you get up?"],
          0,
          "With a routine verb, use do: What time do you get up?",
        ),
        q(
          2,
          "Which sentence is correct?",
          ["He works at home.", "He work at home.", "He works in home."],
          0,
          "With he, add -s: He works at home.",
        ),
        q(
          3,
          "Where does “usually” go in a sentence?",
          ["Before the main verb", "After every noun", "At the end only"],
          0,
          "I usually go to the gym. Usually goes before the main verb go.",
        ),
        q(
          4,
          "How often does “never” mean?",
          ["Not at any time", "Every day", "Sometimes"],
          0,
          "Never means zero times, or not at any time.",
        ),
      ],
    },
    {
      slug: "likes-and-dislikes",
      title: "Likes and dislikes",
      summary:
        "Say what you love, like, do not like or hate, and ask others.",
      objective:
        "Ask and answer simple questions about likes and dislikes using verb + -ing.",
      minutes: 25,
      blocks: [
        {
          type: "dialogue",
          title: "A conversation about sport",
          intro:
            "Mia and Sam talk about sport. Read the dialogue aloud.",
          lines: [
            { speaker: "Sam", text: "Do you like sport?" },
            { speaker: "Mia", text: "Yes, I do. I love football. I play every Saturday." },
            { speaker: "Sam", text: "Nice. Do you like running?" },
            { speaker: "Mia", text: "Not really. I don't like running, but I like swimming." },
            { speaker: "Sam", text: "I like swimming too. I don't mind running, but I prefer swimming." },
            { speaker: "Mia", text: "Do you want to go swimming on Sunday?" },
            { speaker: "Sam", text: "Yes, I'd love to!" },
          ],
        },
        {
          type: "table",
          title: "Likes and dislikes",
          columns: ["Strength", "Phrase", "Example"],
          rows: [
            ["Strong like", "I love …", "I love music."],
            ["Like", "I like …", "I like cooking."],
            ["Neutral", "I don't mind …", "I don't mind running."],
            ["Dislike", "I don't like …", "I don't like cold weather."],
            ["Strong dislike", "I hate …", "I hate waiting in long lines."],
          ],
          caption: "After love, like, don't mind and hate, use a noun or verb + -ing: I like swimming.",
        },
        {
          type: "rules",
          title: "Short answers",
          items: [
            "Do you like coffee? Yes, I do. / No, I don't.",
            "Does she like sport? Yes, she does. / No, she doesn't.",
            "Do not repeat the whole question in a short answer.",
            "Add a reason or example to keep the conversation going: Yes, I do. I drink it every morning.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the natural answer",
          instructions:
            "Read the question and choose the best reply. Say it aloud.",
          items: [
            c(
              "Someone asks: “Do you like music?” What is a natural short answer?",
              ["Yes, I do.", "Yes, I like.", "Yes, I am."],
              0,
              "The question uses do, so the short answer is Yes, I do.",
            ),
            c(
              "Which sentence is correct?",
              ["I like swimming.", "I like swim.", "I like to swimming."],
              0,
              "After like, use verb + -ing: I like swimming. (I like to swim is also correct, but not to swimming.)",
            ),
            c(
              "Which phrase shows a strong dislike?",
              ["I hate waiting in long lines.", "I don't mind waiting.", "I love waiting."],
              0,
              "I hate shows a strong dislike.",
            ),
            c(
              "How do you ask a friend about their opinion of cooking?",
              ["Do you like cooking?", "Are you like cooking?", "Do you cooking?"],
              0,
              "Use Do you like + noun or -ing form?",
            ),
          ],
        },
        {
          type: "practice",
          title: "Say what you like",
          instructions:
            "Answer aloud, then compare with the model. Use real opinions.",
          items: [
            p(
              "Answer: Do you like sport?",
              "Model answer: Yes, I do. I like football, but I don't like running.",
              "Start with a short answer, then add an example.",
            ),
            p(
              "Say one thing you love and one thing you don't like.",
              "Model answer: I love cooking, but I don't like washing the dishes.",
              "Use I love … and I don't like … + noun or -ing.",
            ),
            p(
              "Ask a partner two questions about their free-time interests.",
              "Model answer: Do you like music? Do you like going to concerts?",
              "Use Do you like …? twice with different activities.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which answer matches “Do you like tea?”",
          ["Yes, I do.", "Yes, I like.", "Yes, I am."],
          0,
          "Use do in the short answer: Yes, I do.",
        ),
        q(
          2,
          "Which sentence is correct?",
          ["I love reading.", "I love read.", "I love to reading."],
          0,
          "After love, use verb + -ing: I love reading.",
        ),
        q(
          3,
          "Which phrase is the strongest positive?",
          ["I love it.", "I don't mind it.", "I don't like it."],
          0,
          "Love is stronger than like and much stronger than don't mind.",
        ),
        q(
          4,
          "How do you ask about someone's opinion of a film?",
          ["Do you like the film?", "Are you like the film?", "Do you the film like?"],
          0,
          "Use Do you like + noun? with the correct word order.",
        ),
      ],
    },
    {
      slug: "making-simple-plans",
      title: "Making simple plans",
      summary:
        "Invite a friend, accept or refuse politely and agree on a time.",
      objective:
        "Make a simple invitation, respond to it and arrange a time and place.",
      minutes: 25,
      blocks: [
        {
          type: "dialogue",
          title: "A cinema invitation",
          intro:
            "Leo invites Ana to the cinema. Read the dialogue aloud.",
          lines: [
            { speaker: "Leo", text: "Are you free on Saturday?" },
            { speaker: "Ana", text: "Yes, I am. Why?" },
            { speaker: "Leo", text: "Would you like to go to the cinema?" },
            { speaker: "Ana", text: "I'd love to. What time?" },
            { speaker: "Leo", text: "The film starts at 7.30. Let's meet at 7." },
            { speaker: "Ana", text: "Perfect. Where shall we meet?" },
            { speaker: "Leo", text: "At the café next to the cinema." },
            { speaker: "Ana", text: "Great. See you on Saturday!" },
          ],
        },
        {
          type: "table",
          title: "Making plans",
          columns: ["Purpose", "Phrase", "Reply"],
          rows: [
            ["Check availability", "Are you free on …?", "Yes, I am. / Sorry, I'm busy."],
            ["Invite", "Would you like to …?", "I'd love to. / Sorry, I can't."],
            ["Suggest a time", "Let's meet at … / How about …?", "Perfect. / That's fine."],
            ["Suggest a place", "Let's meet at the café.", "Great. See you there."],
            ["Close", "See you on Saturday!", "See you then!"],
          ],
        },
        {
          type: "tip",
          title: "Say no kindly",
          text: "If you cannot come, give a short reason and suggest another time: Sorry, I can't on Saturday. I'm working. Can we meet on Sunday? This keeps the plan friendly.",
        },
        {
          type: "exercise",
          title: "Choose the best reply",
          instructions:
            "Read each situation and choose the natural response. Say it aloud.",
          items: [
            c(
              "A friend asks: “Would you like to go to the cinema?” What can you say to accept?",
              ["I'd love to.", "I'd love.", "Yes, I like cinema."],
              0,
              "I'd love to is the natural accepting phrase.",
            ),
            c(
              "A friend asks: “Are you free on Friday?” You are busy. What do you say?",
              ["Sorry, I'm busy on Friday.", "Yes, I'm free.", "No, I don't."],
              0,
              "Sorry, I'm busy on Friday is polite and answers the question.",
            ),
            c(
              "You want to suggest 7 p.m. What do you say?",
              ["Let's meet at 7.", "Let's meet in 7.", "We meet 7?"],
              0,
              "Use Let's meet at + time.",
            ),
            c(
              "A friend says: “See you on Saturday!” What is a natural reply?",
              ["See you then!", "Thank you very much.", "I'm sorry."],
              0,
              "See you then! responds naturally to a plan you have agreed.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Make a plan",
          instructions:
            "Say each part aloud, then check the model. Change the details for your own plan.",
          items: [
            p(
              "Invite a friend to do something this weekend.",
              "Model answer: Are you free on Sunday? Would you like to go for a coffee?",
              "Check availability, then invite.",
            ),
            p(
              "Suggest a time and place.",
              "Model answer: Let's meet at 3 at the café near the station.",
              "Use Let's meet at + time + place.",
            ),
            p(
              "Refuse an invitation politely and suggest another day.",
              "Model answer: Sorry, I can't on Saturday. I'm working. Can we meet on Sunday?",
              "Apologise, give a reason and suggest a new time.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which phrase invites someone to do something?",
          ["Would you like to go to the cinema?", "Are you the cinema?", "Do you cinema?"],
          0,
          "Would you like to + verb? is a polite invitation.",
        ),
        q(
          2,
          "Which reply accepts an invitation?",
          ["I'd love to.", "I'm busy.", "Sorry, I can't."],
          0,
          "I'd love to accepts happily.",
        ),
        q(
          3,
          "Which question checks if someone is available?",
          ["Are you free on Saturday?", "Are you Saturday?", "Do you free on Saturday?"],
          0,
          "Are you free on + day? asks about availability.",
        ),
        q(
          4,
          "Which sentence suggests a meeting time?",
          ["Let's meet at 7.", "Let's meet in 7.", "Let's meeting at 7."],
          0,
          "Use Let's meet at + clock time.",
        ),
      ],
    },
  ],
};
