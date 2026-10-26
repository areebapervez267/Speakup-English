import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1PronunciationUnit2: LessonUnit = {
  title: "Word stress",
  description:
    "Find the strong syllable in names, places and everyday words.",
  lessons: [
    {
      slug: "stress-in-names-and-places",
      title: "Stress in names and places",
      summary:
        "Put the strongest beat on the right part of names and places.",
      objective:
        "Identify and produce the main stress in common names and place names.",
      minutes: 25,
      blocks: [
        {
          type: "sound",
          title: "Names with a strong first beat",
          sound: "Oo — strong first syllable",
          guidance:
            "In many English names and places, one syllable is stronger, longer and clearer. Say the strong syllable a little louder and let the other syllables relax: LUN-dən, MAN-ches-tuh. Do not make every syllable equally strong.",
          words: [
            { word: "London", respelling: "LUN-dən", example: "London is a large city." },
            { word: "Manchester", respelling: "MAN-ches-tuh", example: "She lives in Manchester." },
            { word: "Anna", respelling: "AN-uh", example: "Anna is my neighbour." },
            { word: "David", respelling: "DAY-vid", example: "David works in a bank." },
          ],
        },
        {
          type: "text",
          title: "Stress is not always first",
          paragraphs: [
            "Many names and places stress the first syllable, but not all of them. Brazil is bruh-ZIL, with the strong beat at the end. Japan is juh-PAN. When you learn a new place name, learn its beat with it.",
            "If you are not sure, listen to how local people say the name or ask: Where is the stress in that name? English speakers are used to this question.",
          ],
        },
        {
          type: "table",
          title: "Name stress guide",
          columns: ["Name", "Strong syllable", "Respelling"],
          rows: [
            ["London", "first", "LUN-dən"],
            ["Manchester", "first", "MAN-ches-tuh"],
            ["Anna", "first", "AN-uh"],
            ["David", "first", "DAY-vid"],
            ["Brazil", "second", "bruh-ZIL"],
            ["Japan", "second", "juh-PAN"],
          ],
          caption: "CAPITALS show the strongest syllable. Small letters show weaker syllables.",
        },
        {
          type: "exercise",
          title: "Mark the stress",
          instructions:
            "Choose the respelling with the usual English stress. Say it aloud.",
          items: [
            c(
              "Which respelling shows the usual stress for London?",
              ["LUN-dən", "lun-DƏN", "lun-dən"],
              0,
              "London has a strong first syllable: LUN-dən.",
            ),
            c(
              "Which respelling shows the usual stress for Brazil?",
              ["bruh-ZIL", "BRA-zil", "bra-zil"],
              0,
              "Brazil is stressed on the second syllable: bruh-ZIL.",
            ),
            c(
              "Which respelling shows the usual stress for Manchester?",
              ["MAN-ches-tuh", "man-CHES-tuh", "man-ches-TUH"],
              0,
              "Manchester has a strong first syllable: MAN-ches-tuh.",
            ),
            c(
              "Which name has stress on the second syllable?",
              ["Japan", "Anna", "London"],
              0,
              "Japan is juh-PAN. Anna and London both stress the first syllable.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Say names with stress",
          instructions:
            "Say each name aloud with the strong beat, then reveal the model guidance.",
          items: [
            p(
              "Say London and Manchester with a strong first syllable.",
              "Model: LUN-dən, MAN-ches-tuh. Make the first syllable louder and longer.",
              "Relax the other syllables.",
            ),
            p(
              "Say Brazil and Japan with a strong second syllable.",
              "Model: bruh-ZIL, juh-PAN. The second syllable is the beat.",
              "Do not stress the first syllable.",
            ),
            p(
              "Say your own name and identify the strong syllable.",
              "Model: Ha-NA — the second syllable is strong.",
              "Clap once on the strong beat.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which respelling shows the usual stress for Paris?",
          ["PAR-is", "pa-RIS", "par-is"],
          0,
          "The usual English pronunciation of Paris has a strong first syllable: PAR-is.",
        ),
        q(
          2,
          "Which syllable is strong in Japan?",
          ["The second", "The first", "Both equally"],
          0,
          "Japan is juh-PAN, with the strong beat on the second syllable.",
        ),
        q(
          3,
          "Which respelling shows the usual stress for David?",
          ["DAY-vid", "da-VID", "da-vid"],
          0,
          "David has a strong first syllable: DAY-vid.",
        ),
        q(
          4,
          "Which pair of place names both usually stress the first syllable?",
          ["London and Manchester", "Brazil and Japan", "Japan and London"],
          0,
          "London and Manchester both have a strong first syllable. Brazil and Japan stress the second.",
        ),
      ],
    },
    {
      slug: "stressed-and-weak-syllables",
      title: "Stressed and weak syllables",
      summary:
        "Make one syllable strong and let the others become weak and relaxed.",
      objective:
        "Identify the strong syllable in longer words and use the weak schwa sound.",
      minutes: 25,
      blocks: [
        {
          type: "sound",
          title: "The weak vowel /ə/",
          sound: "/ə/ — the schwa",
          guidance:
            "The schwa is the most common weak vowel in English. It is short and relaxed, like a small “uh”. Unstressed syllables often use it: buh-NAH-nuh, kum-PYOO-tuh. Do not pronounce every vowel with its full spelling sound.",
          words: [
            { word: "banana", respelling: "buh-NAH-nuh", example: "I eat a banana every morning." },
            { word: "computer", respelling: "kum-PYOO-tuh", example: "My computer is new." },
            { word: "today", respelling: "tuh-DAY", example: "The class is today." },
            { word: "family", respelling: "FAM-uh-lee", example: "My family lives here." },
          ],
        },
        {
          type: "table",
          title: "Find the strong syllable",
          columns: ["Word", "Syllables", "Strong beat"],
          rows: [
            ["banana", "buh-NAH-nuh", "second"],
            ["computer", "kum-PYOO-tuh", "second"],
            ["important", "im-POR-tuhnt", "second"],
            ["family", "FAM-uh-lee", "first"],
            ["hospital", "HOS-pi-tuhl", "first"],
          ],
          caption: "CAPITALS show the strong syllable. The other syllables are weaker.",
        },
        {
          type: "tip",
          title: "Clap the beat",
          text: "Clap once on the strong syllable and tap lightly on the weak syllables. Banana: tap, CLAP, tap. Family: CLAP, tap, tap. The clap helps your mouth find the rhythm before you say the word.",
        },
        {
          type: "exercise",
          title: "Which syllable is strong?",
          instructions:
            "Choose the correct strong syllable or word. Say the word aloud.",
          items: [
            c(
              "Which syllable is strong in computer?",
              ["The second (PYOO)", "The first (kum)", "The last (tuh)"],
              0,
              "Computer is kum-PYOO-tuh, with the strong beat on the second syllable.",
            ),
            c(
              "Which syllable is strong in banana?",
              ["The second (NAH)", "The first (buh)", "The last (nuh)"],
              0,
              "Banana is buh-NAH-nuh, with the strong beat in the middle.",
            ),
            c(
              "Which syllable is strongest in family?",
              ["The first (FAM)", "The second (uh)", "The last (lee)"],
              0,
              "Family is FAM-uh-lee, with the strong beat at the start.",
            ),
            c(
              "Which word begins with a weak schwa sound?",
              ["about", "happy", "stop"],
              0,
              "About is uh-BOWT, so the first syllable is schwa. Happy begins with /hæ/ and stop with /st/.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise the beat",
          instructions:
            "Clap and say each word, then reveal the model guidance.",
          items: [
            p(
              "Say banana with a strong second syllable.",
              "Model: buh-NAH-nuh. Keep the first and last syllables weak.",
              "Tap, CLAP, tap.",
            ),
            p(
              "Say important with a strong second syllable.",
              "Model: im-POR-tuhnt. The last syllable is very light.",
              "Do not stress im- or -tant.",
            ),
            p(
              "Say family and hospital with a strong first syllable.",
              "Model: FAM-uh-lee, HOS-pi-tuhl. The other syllables are weaker.",
              "Clap on the first syllable only.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which syllable is strong in important?",
          ["The second (POR)", "The first (im)", "The last (tuhnt)"],
          0,
          "Important is im-POR-tuhnt, with the strong beat on the second syllable.",
        ),
        q(
          2,
          "Which syllable is strong in hospital?",
          ["The first (HOS)", "The second (pi)", "The last (tuhl)"],
          0,
          "Hospital is HOS-pi-tuhl, with the strong beat at the start.",
        ),
        q(
          3,
          "Which word is stressed on the first syllable?",
          ["family", "computer", "banana"],
          0,
          "Family is FAM-uh-lee. Computer and banana both stress the second syllable.",
        ),
        q(
          4,
          "What is the schwa?",
          ["A short, weak vowel sound", "A long, strong vowel sound", "A silent letter"],
          0,
          "The schwa /ə/ is a short, relaxed vowel that often appears in unstressed syllables.",
        ),
      ],
    },
    {
      slug: "simple-stress-patterns",
      title: "Simple stress patterns",
      summary:
        "Use three stress patterns to say common words more naturally.",
      objective:
        "Apply common stress patterns for two-syllable nouns, verbs and compound nouns.",
      minutes: 25,
      blocks: [
        {
          type: "rules",
          title: "Three useful patterns",
          items: [
            "Many two-syllable nouns stress the first syllable: TA-ble, WIN-dow, DOC-tor.",
            "Many two-syllable verbs stress the second syllable: be-GIN, de-CIDE, a-RRIVE.",
            "Compound nouns often stress the first part: BATH-room, FOOT-ball, BREAK-fast.",
          ],
        },
        {
          type: "sound",
          title: "Hear the pattern",
          sound: "Oo and oO",
          guidance:
            "Oo means a strong first syllable and a weak second. oO means a weak first syllable and a strong second. Listen for the pattern, then copy it: TA-ble (Oo), be-GIN (oO).",
          words: [
            { word: "table", respelling: "TAY-buhl", example: "The book is on the table." },
            { word: "window", respelling: "WIN-doh", example: "Please open the window." },
            { word: "begin", respelling: "bih-GIN", example: "The class begins at nine." },
            { word: "decide", respelling: "dih-SIDE", example: "I need to decide today." },
          ],
        },
        {
          type: "table",
          title: "Stress pattern examples",
          columns: ["Pattern", "Word type", "Examples"],
          rows: [
            ["Oo", "Two-syllable noun", "TA-ble, WIN-dow, DOC-tor"],
            ["oO", "Two-syllable verb", "be-GIN, de-CIDE, a-RRIVE"],
            ["Oo", "Compound noun", "BATH-room, FOOT-ball, BREAK-fast"],
            ["oOo", "Word ending in -tion", "sta-TION, ques-TION"],
          ],
          caption: "Patterns are a guide, not a rule for every word. Learn the beat with each new word.",
        },
        {
          type: "exercise",
          title: "Choose the pattern",
          instructions:
            "Select the option with the usual stress pattern. Say the word aloud.",
          items: [
            c(
              "Which pattern is usual for the noun table?",
              ["TA-ble (Oo)", "ta-BLE (oO)", "ta-ble (oo)"],
              0,
              "Table is a two-syllable noun with stress on the first syllable: TA-ble.",
            ),
            c(
              "Which pattern is usual for the verb begin?",
              ["be-GIN (oO)", "BE-gin (Oo)", "be-gin (oo)"],
              0,
              "Begin is a two-syllable verb with stress on the second syllable: be-GIN.",
            ),
            c(
              "Which compound noun stresses the first part?",
              ["BATH-room", "bath-ROOM", "bath-room"],
              0,
              "Compound nouns like bathroom usually stress the first part: BATH-room.",
            ),
            c(
              "Which word is stressed on the second syllable?",
              ["decide", "doctor", "window"],
              0,
              "Decide is dih-SIDE. Doctor and window stress the first syllable.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise the patterns",
          instructions:
            "Say the words with the pattern, then check the model.",
          items: [
            p(
              "Say table and window with an Oo pattern.",
              "Model: TAY-buhl, WIN-doh. Strong first, weak second.",
              "Clap on the first syllable.",
            ),
            p(
              "Say begin and decide with an oO pattern.",
              "Model: bih-GIN, dih-SIDE. Weak first, strong second.",
              "Clap on the second syllable.",
            ),
            p(
              "Say football and breakfast with stress on the first part.",
              "Model: FOOT-bawl, BREK-fuhst.",
              "Keep the second part lighter.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which pattern is usual for the noun doctor?",
          ["DOC-tor (Oo)", "doc-TOR (oO)", "doc-tor (oo)"],
          0,
          "Doctor stresses the first syllable: DOC-tor.",
        ),
        q(
          2,
          "Which pattern is usual for the verb arrive?",
          ["a-RRIVE (oO)", "A-rrive (Oo)", "a-rrive (oo)"],
          0,
          "Arrive stresses the second syllable: a-RRIVE.",
        ),
        q(
          3,
          "Where is the stress in the compound noun football?",
          ["First part (FOOT)", "Second part (BALL)", "Both equally"],
          0,
          "Football stresses the first part: FOOT-ball.",
        ),
        q(
          4,
          "Where is the stress in station?",
          ["First syllable (STA)", "Second syllable (TION)", "No stress"],
          0,
          "Station is STA-tion, with the strong beat on the first syllable.",
        ),
      ],
    },
  ],
};
