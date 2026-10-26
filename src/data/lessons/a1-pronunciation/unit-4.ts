import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1PronunciationUnit4: LessonUnit = {
  title: "Speak clearly",
  description:
    "Fix the sounds that cause misunderstandings and put everything together in a final speaking check.",
  lessons: [
    {
      slug: "sounds-to-watch",
      title: "Sounds to watch",
      summary:
        "Practise /v/ and /w/, keep final consonants and separate /θ/ from /s/.",
      objective:
        "Identify and practise four common sound contrasts that affect understanding.",
      minutes: 25,
      blocks: [
        {
          type: "sound",
          title: "Very and west: /v/ and /w/",
          sound: "/v/ and /w/",
          guidance:
            "For /v/, put your top teeth lightly on your bottom lip and use your voice: very. For /w/, round your lips and do not touch your teeth: west. If you use /w/ for /v/, very can sound like wery, which is harder to understand.",
          words: [
            { word: "very", respelling: "/ˈveri/", example: "The soup is very hot." },
            { word: "video", respelling: "/ˈvɪdiəʊ/", example: "I watched a short video." },
            { word: "west", respelling: "/west/", example: "The sun sets in the west." },
            { word: "water", respelling: "/ˈwɔːtə/", example: "Can I have some water?" },
          ],
        },
        {
          type: "sound",
          title: "Keep the final sound",
          sound: "Final /t/, /d/ and /m/",
          guidance:
            "English speakers hear the end of a word, even when it is quiet. Do not drop it. Say hat with a light /t/ at the end, had with /d/, and name with /m/. Small final sounds can change the word completely.",
          words: [
            { word: "hat", respelling: "/hæt/", example: "This is my hat." },
            { word: "had", respelling: "/hæd/", example: "I had a good day." },
            { word: "name", respelling: "/neɪm/", example: "My name is Ana." },
            { word: "big", respelling: "/bɪɡ/", example: "It is a big city." },
          ],
        },
        {
          type: "table",
          title: "Contrasts to watch",
          columns: ["Contrast", "Sound 1", "Sound 2"],
          rows: [
            ["Teeth on lip vs round lips", "very /ˈveri/", "west /west/"],
            ["Tongue between teeth vs behind teeth", "think /θɪŋk/", "sink /sɪŋk/"],
            ["Final /t/ vs final /d/", "hat /hæt/", "had /hæd/"],
            ["Tongue between teeth vs /t/", "three /θriː/", "tree /triː/"],
          ],
          caption: "Slow down on these pairs. Clear contrasts matter more than speed.",
        },
        {
          type: "exercise",
          title: "Choose the sound",
          instructions:
            "Choose the word with the target sound. Say the contrast aloud.",
          items: [
            c(
              "Which word begins with /v/?",
              ["very", "west", "ferry"],
              0,
              "Very begins with /v/. West begins with /w/ and ferry begins with /f/.",
            ),
            c(
              "Which word begins with /w/?",
              ["water", "vote", "four"],
              0,
              "Water begins with /w/. Vote begins with /v/ and four begins with /f/.",
            ),
            c(
              "Which word ends with /t/?",
              ["hat", "had", "has"],
              0,
              "Hat ends with /t/. Had ends with /d/ and has ends with /z/.",
            ),
            c(
              "Which word begins with /θ/?",
              ["three", "tree", "free"],
              0,
              "Three begins with /θ/. Tree begins with /t/ and free begins with /f/.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise the contrasts",
          instructions:
            "Say each pair aloud, then reveal the guidance. Use a mirror for the lip and tongue positions.",
          items: [
            p(
              "Say very and west. What is different at the start?",
              "Very starts with /v/ (teeth on lip). West starts with /w/ (round lips, no teeth).",
              "Look at your lips in a mirror.",
            ),
            p(
              "Say hat, had and has. What is different at the end?",
              "Hat ends with /t/, had with /d/ and has with /z/.",
              "Keep the final sound light but clear.",
            ),
            p(
              "Say think and sink. Which one has the tongue between the teeth?",
              "Think /θɪŋk/ has the tongue between the teeth. Sink /sɪŋk/ keeps it behind the teeth.",
              "Do not let /θ/ become /s/.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which word contains /v/?",
          ["seven", "west", "water"],
          0,
          "Seven contains /v/. West and water begin with /w/.",
        ),
        q(
          2,
          "Which word begins with /w/?",
          ["welcome", "very", "video"],
          0,
          "Welcome begins with /w/. Very and video begin with /v/.",
        ),
        q(
          3,
          "Which pair differs only by its final sound?",
          ["hat /hæt/ and had /hæd/", "cat /kæt/ and dog /dɒɡ/", "think /θɪŋk/ and sink /sɪŋk/"],
          0,
          "Hat and had differ at the end: /t/ and /d/. The other pairs differ at the start and in more than one sound.",
        ),
        q(
          4,
          "Which final sound is missing if you say “ha” instead of “hat”?",
          ["/t/", "/m/", "/d/"],
          0,
          "Hat ends with /t/, so leaving it off changes the word.",
        ),
      ],
    },
    {
      slug: "a-final-speaking-check",
      title: "A final speaking check",
      summary:
        "Put sounds, stress and intonation together in a short introduction.",
      objective:
        "Use a checklist to rehearse and self-check a short spoken introduction.",
      minutes: 30,
      blocks: [
        {
          type: "passage",
          title: "A model introduction",
          paragraphs: [
            "Hello. My name is Ana Silva. I'm from Mexico, but I live in London now. I'm a student, and I'm learning English because I want to travel.",
            "In my free time, I like music and swimming. Nice to meet you.",
          ],
        },
        {
          type: "rules",
          title: "The speaking check",
          items: [
            "Clear sounds: watch /v/ and /w/, /θ/ and /s/, and final consonants.",
            "Word stress: make the strong syllable in a word easy to hear.",
            "Sentence rhythm: stress content words and keep grammar words light.",
            "Question intonation: yes/no questions often rise; wh- questions often fall.",
            "Pace: slow down a little. Clear is better than fast.",
          ],
        },
        {
          type: "table",
          title: "Self-check examples",
          columns: ["Focus", "Example", "What to notice"],
          rows: [
            ["Word stress", "My NAME is A-na.", "NAME and A carry the beat."],
            ["Sentence rhythm", "I'm a STU-dent.", "STU is strong; I'm a is light."],
            ["Rising question", "Are you from LO-ndon? ↗", "Voice rises at the end."],
            ["Falling question", "WHERE are you FROM? ↘", "Voice falls at the end."],
            ["Final sound", "I'm from Mexi-CO.", "Keep the final sound clear."],
          ],
        },
        {
          type: "exercise",
          title: "Apply the checklist",
          instructions:
            "Choose the best answer according to the speaking check. Say the examples aloud.",
          items: [
            c(
              "Which word is strongest in “My name is Ana”?",
              ["name", "my", "is"],
              0,
              "Name is the key content word. My and is are weaker grammar words. Ana is also strong.",
            ),
            c(
              "Which question usually rises at the end?",
              ["Are you a student?", "Where are you from?", "What do you do?"],
              0,
              "Are you a student? is a yes/no question, so it usually rises.",
            ),
            c(
              "Which word is usually weak in “I live in London”?",
              ["in", "live", "London"],
              0,
              "In is a preposition and is usually weak. Live and London carry the message.",
            ),
            c(
              "Which final sound is at the end of “name”?",
              ["/m/", "/n/", "/t/"],
              0,
              "Name ends with /m/. Keep the lips closed for the final sound.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rehearse your introduction",
          instructions:
            "Read the model aloud, then replace the details with your own. Use the checklist to self-check. The site does not record or score your voice.",
          items: [
            p(
              "Read the model introduction aloud slowly.",
              "Focus on clear final sounds and the beat in student, English and travel.",
              "Pause between the short sentences.",
            ),
            p(
              "Mark the strong words in “I'm learning English because I want to travel.”",
              "Model: I'm LEARNING ENGLISH because I WANT to TRAVEL. The grammar words are weaker.",
              "Do not stress because or to.",
            ),
            p(
              "Say your own 30-second introduction using the model.",
              "Model: Hello. My name is Hana. I'm from South Korea, but I live in Seoul. I'm a student, and I'm learning English because I want to work abroad. Nice to meet you.",
              "Use the five-point check: sounds, word stress, rhythm, intonation and pace.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which word is usually weak in “I'm learning English”?",
          ["I'm", "learning", "English"],
          0,
          "I'm is an auxiliary verb and is usually weak. Learning and English carry the message.",
        ),
        q(
          2,
          "How does “Where are you from?” usually end?",
          ["With a falling voice ↘", "With a rising voice ↗", "With no change"],
          0,
          "It is a wh- question, so the voice usually falls at the end.",
        ),
        q(
          3,
          "How does “Do you like music?” usually end?",
          ["With a rising voice ↗", "With a falling voice ↘", "With a flat voice"],
          0,
          "It is a yes/no question, so the voice usually rises.",
        ),
        q(
          4,
          "Which final sound is at the end of “student”?",
          ["/t/", "/d/", "/n/"],
          0,
          "Student ends with /t/.",
        ),
      ],
    },
  ],
};
