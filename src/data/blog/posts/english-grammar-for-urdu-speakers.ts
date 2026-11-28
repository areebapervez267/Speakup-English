import type { BlogPost } from "@/data/blog/types";

export const englishGrammarForUrduSpeakers: BlogPost = {
  slug: "english-grammar-for-urdu-speakers",
  title: "English Grammar for Urdu Speakers: A Practical A1 Guide",
  description:
    "A practical A1 guide to English grammar for Urdu and Hindi speakers, with sentence order, be verbs, articles, plurals, present simple, pronouns and practice.",
  date: "2026-11-27",
  minutes: 8,
  relatedCourseSlug: "grammar-foundations",
  blocks: [
    {
      type: "text",
      paragraphs: [
        "Urdu and Hindi give you useful habits of expression, but some do not transfer directly to English. This A1 guide covers patterns for daily routines and simple conversations. Learn a pattern, use it in your own sentences and build accuracy through practice.",
      ],
    },
    {
      type: "text",
      title: "1. English usually follows subject-verb-object order",
      paragraphs: [
        "English statements usually follow subject-verb-object order: S-V-O. Urdu and Hindi often place the verb near the end, so word-for-word transfer can produce difficult English. Both languages allow some flexibility, but S-V-O is the reliable starting point.",
        "Compare main kitaab parhta hoon, literally 'I book read', with I read a book. I is the subject, read the verb and a book the object. Other examples are She likes tea and We study English. A standard question needs inverted or auxiliary order: Do you like tea? not You like tea?",
      ],
    },
    {
      type: "rules",
      title: "2. Choose am, is or are",
      items: [
        "Use am with I: I am a student (I'm).",
        "Use is with he, she, it and a singular noun: She is ready. The bus is late.",
        "Use are with you, we, they and a plural noun: They are friends. The books are new.",
        "Add not for a negative: I am not tired. He isn't here. They aren't ready.",
        "For a question, put the verb before the subject: Is she ready? Are they friends?",
      ],
    },
    {
      type: "text",
      title: "3. A, an and the mark what the listener knows",
      paragraphs: [
        "Use a or an for one person or thing not yet identified: I have a pen. Choose by first sound: a book, an apple. A university begins with /j/, so it takes a; an hour begins with a vowel because h is silent.",
        "Use the when context or shared knowledge identifies something: Please close the door. The sun is bright. Introduce with a, then use the: I saw a dog. The dog was black. General plurals and uncountables often take no article: Books are useful. Water is essential. Since Urdu and Hindi use articles differently, check the whole situation, not one word.",
      ],
    },
    {
      type: "examples",
      title: "4. Build plurals in small steps",
      intro:
        "Most plurals are regular; learn common irregular forms separately.",
      items: [
        {
          text: "Add -s: book → books, pen → pens, chair → chairs",
          note: "One chair; two chairs.",
        },
        {
          text: "Add -es after -s, -sh, -ch or -x: bus → buses, watch → watches",
          note: "Two buses; three watches. Some -o words take -es (potato → potatoes), but others take -s (photo → photos).",
        },
        {
          text: "Change consonant + y to -ies: city → cities, baby → babies",
          note: "But day → days, boy → boys.",
        },
        {
          text: "Learn irregular plurals: man → men, woman → women, child → children",
          note: "Also person → people, tooth → teeth.",
        },
        {
          text: "Keep uncountable nouns singular: information, advice, furniture, hair",
          note: "Some information; a piece of advice; my hair is black.",
        },
      ],
    },
    {
      type: "rules",
      title: "5. Present simple for routines and facts",
      items: [
        "Use base verbs with I, you, we and they; add -s with he, she and it: I work. He works.",
        "Use do not or does not plus the base verb for negatives: I don't work. She doesn't play cricket.",
        "Use Do or Does plus subject and base verb for questions: Do you work? Does she play?",
        "Put usually, often, every day and never before the main verb: I usually get up at seven.",
      ],
    },
    {
      type: "table",
      title: "6. Pronouns do different jobs",
      caption:
        "Subjects act; objects receive the action or follow prepositions; possessive adjectives come before nouns.",
      columns: ["Subject", "Object", "Possessive adjective", "Example"],
      rows: [
        ["I", "me", "my", "She helps me with my English."],
        ["you", "you", "your", "Can I borrow your pen?"],
        ["he", "him", "his", "I know him. His name is Ali."],
        ["she", "her", "her", "We called her. Her bag is blue."],
        ["it", "it", "its", "Its bowl is empty."],
        ["we", "us", "our", "The teacher visited us."],
        ["they", "them", "their", "I spoke to them about their project."],
      ],
    },
    {
      type: "table",
      title: "Common Urdu-to-English transfer mistakes",
      columns: ["Transferred pattern", "Natural English correction"],
      rows: [
        ["I English every day study.", "I study English every day."],
        ["I am agree.", "I agree."],
        ["I am student.", "I am a student."],
        ["He don't like tea.", "He doesn't like tea."],
        ["Where you live?", "Where do you live?"],
        ["My hairs are black.", "My hair is black."],
        ["Yesterday I did not went.", "Yesterday I did not go."],
      ],
    },
    {
      type: "text",
      title: "Why these corrections work",
      paragraphs: [
        "Agree is already a verb, so it needs no am. With he, she and it, use does plus the base verb. Did marks past time, so use go, not went.",
      ],
    },
    {
      type: "practice",
      title: "Use the patterns in new sentences",
      instructions:
        "Try each item, check the answer, then say the sentence aloud and make one like it.",
      items: [
        {
          prompt: "Rearrange: books / I / read / every night.",
          answer: "I read books every night.",
          hint: "Use S-V-O order and put time last.",
        },
        {
          prompt: "Choose: She ___ tired. (am / is / are)",
          answer: "She is tired.",
          hint: "She takes is.",
        },
        {
          prompt: "Choose: I saw ___ owl. (a / an / the)",
          answer: "I saw an owl.",
          hint: "Choose the article by the first sound.",
        },
        {
          prompt: "Choose: ___ sun is bright today. (A / An / The)",
          answer: "The sun is bright today.",
          hint: "This shared context identifies the sun.",
        },
        {
          prompt: "Give the plural of child.",
          answer: "Children.",
          hint: "This is an irregular plural.",
        },
        {
          prompt: "Complete: ___ your brother play cricket?",
          answer: "Does your brother play cricket?",
          hint: "Does + subject + base verb.",
        },
      ],
    },
    {
      type: "tip",
      title: "Practise for accuracy, not perfection",
      text:
        "Choose one pattern daily, write three true sentences and read them aloud. Check the subject, verb and article. Practice and feedback bring progress, not instant fluency; mistakes guide your next step.",
    },
  ],
};
