import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1PronunciationUnit1: LessonUnit = {
  title: "Vowels and consonants",
  description:
    "Notice the vowel and consonant sounds that change the meaning of a word.",
  lessons: [
    {
      slug: "short-vowel-sounds",
      title: "Short vowel sounds",
      summary:
        "Hear and say the short vowels in cat, bed and sit.",
      objective:
        "Recognise and produce three common short vowel sounds: /æ/, /e/ and /ɪ/.",
      minutes: 25,
      blocks: [
        {
          type: "sound",
          title: "The vowel in cat: /æ/",
          sound: "/æ/ as in cat",
          guidance:
            "Open your mouth a little wider than for /e/. The tongue is low and at the front. Keep the sound short: cat, not caaat. This is the vowel in many common words such as cat, map and hand.",
          words: [
            { word: "cat", respelling: "/kæt/", example: "My cat sleeps on the chair." },
            { word: "map", respelling: "/mæp/", example: "Look at the map." },
            { word: "hand", respelling: "/hænd/", example: "Raise your hand." },
            { word: "black", respelling: "/blæk/", example: "I have a black bag." },
          ],
        },
        {
          type: "sound",
          title: "The vowel in bed: /e/",
          sound: "/e/ as in bed",
          guidance:
            "Open your mouth less than for /æ/. The tongue is in the middle-front of your mouth. Keep it short and relaxed: bed, ten, help.",
          words: [
            { word: "bed", respelling: "/bed/", example: "The bed is next to the window." },
            { word: "ten", respelling: "/ten/", example: "I have ten books." },
            { word: "help", respelling: "/help/", example: "Can you help me?" },
            { word: "red", respelling: "/red/", example: "Her coat is red." },
          ],
        },
        {
          type: "sound",
          title: "The vowel in sit: /ɪ/",
          sound: "/ɪ/ as in sit",
          guidance:
            "This is a short, relaxed vowel. Do not make it long like the vowel in see. The tongue is high but not tense: sit, fish, big.",
          words: [
            { word: "sit", respelling: "/sɪt/", example: "Please sit here." },
            { word: "fish", respelling: "/fɪʃ/", example: "We eat fish on Fridays." },
            { word: "big", respelling: "/bɪɡ/", example: "They live in a big house." },
            { word: "six", respelling: "/sɪks/", example: "The class starts at six." },
          ],
        },
        {
          type: "table",
          title: "Three short vowels side by side",
          columns: ["Sound", "Word", "IPA", "Contrast"],
          rows: [
            ["/æ/", "cat", "/kæt/", "wide mouth, low tongue"],
            ["/e/", "bed", "/bed/", "middle-front tongue"],
            ["/ɪ/", "sit", "/sɪt/", "short and relaxed"],
          ],
          caption: "The spelling does not always tell you the sound. Compare the words aloud.",
        },
        {
          type: "exercise",
          title: "Which sound do you hear?",
          instructions:
            "Choose the word with the target sound. Read each option aloud before you decide.",
          items: [
            c(
              "Which word has /æ/ as in cat?",
              ["hat", "hate", "heart"],
              0,
              "Hat is /hæt/ with /æ/. Hate is /heɪt/ and heart is /hɑːt/ in British English.",
              "Look at the letter a in a closed syllable.",
            ),
            c(
              "Which word has /e/ as in bed?",
              ["pen", "pain", "pin"],
              0,
              "Pen is /pen/. Pain is /peɪn/ and pin is /pɪn/.",
            ),
            c(
              "Which word has /ɪ/ as in sit?",
              ["six", "see", "seat"],
              0,
              "Six is /sɪks/. See and seat have the long vowel /iː/.",
            ),
            c(
              "Which pair has the same vowel sound?",
              ["big /bɪɡ/ and fish /fɪʃ/", "cat /kæt/ and Kate /keɪt/", "bed /bed/ and bad /bæd/"],
              0,
              "Big and fish both have /ɪ/. The other pairs contrast two different vowels.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Say the short vowels",
          instructions:
            "Say each item aloud, then reveal the model guidance. The site cannot hear you, so check your own mouth position in a mirror if you can.",
          items: [
            p(
              "Say the three key words: cat, bed, sit.",
              "Model: cat /kæt/, bed /bed/, sit /sɪt/. Keep each vowel short.",
              "Do not stretch the vowel.",
            ),
            p(
              "Which words in this list have /æ/: hand, hat, name?",
              "Hand /hænd/ and hat /hæt/. Name is /neɪm/.",
              "Say the words and compare the mouth shape.",
            ),
            p(
              "Find three words with /ɪ/: fish, five, six, big.",
              "Fish, six and big have /ɪ/. Five has /aɪ/.",
              "The long vowel in five is different.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which word has /æ/ as in cat?",
          ["map", "mane", "mine"],
          0,
          "Map is /mæp/. Mane is /meɪn/ and mine is /maɪn/.",
        ),
        q(
          2,
          "Which word has /e/ as in bed?",
          ["ten", "teen", "tan"],
          0,
          "Ten is /ten/. Teen is /tiːn/ and tan is /tæn/.",
        ),
        q(
          3,
          "Which word has /ɪ/ as in sit?",
          ["fish", "fine", "fan"],
          0,
          "Fish is /fɪʃ/. Fine is /faɪn/ and fan is /fæn/.",
        ),
        q(
          4,
          "Which word does NOT have /æ/?",
          ["cake", "black", "hand"],
          0,
          "Cake is /keɪk/, with the long vowel /eɪ/. Black and hand both have /æ/.",
        ),
      ],
    },
    {
      slug: "long-vowel-sounds",
      title: "Long vowel sounds",
      summary:
        "Contrast long vowels in see, car and food with shorter sounds.",
      objective:
        "Recognise and produce the long vowels /iː/, /ɑː/ and /uː/.",
      minutes: 25,
      blocks: [
        {
          type: "sound",
          title: "The vowel in see: /iː/",
          sound: "/iː/ as in see",
          guidance:
            "This vowel is long and tense. Smile slightly and hold the sound: see, tea. Do not make it as short as the vowel in sit.",
          words: [
            { word: "see", respelling: "/siː/", example: "I can see the sea." },
            { word: "tea", respelling: "/tiː/", example: "Would you like tea?" },
            { word: "green", respelling: "/ɡriːn/", example: "The door is green." },
            { word: "me", respelling: "/miː/", example: "Please listen to me." },
          ],
        },
        {
          type: "sound",
          title: "The vowel in car: /ɑː/",
          sound: "/ɑː/ as in car",
          guidance:
            "Open your mouth wide and keep the tongue low and back. The sound is long: car, park. In British English the r at the end is not pronounced unless a vowel follows.",
          words: [
            { word: "car", respelling: "/kɑː/", example: "My car is outside." },
            { word: "park", respelling: "/pɑːk/", example: "We walk in the park." },
            { word: "far", respelling: "/fɑː/", example: "Is the station far?" },
            { word: "hard", respelling: "/hɑːd/", example: "The test is hard." },
          ],
        },
        {
          type: "sound",
          title: "The vowel in food: /uː/",
          sound: "/uː/ as in food",
          guidance:
            "Make your lips round and hold the sound: food, blue. Keep it long. The vowel in foot /fʊt/ is shorter and made with a more relaxed mouth.",
          words: [
            { word: "food", respelling: "/fuːd/", example: "The food is very good." },
            { word: "blue", respelling: "/bluː/", example: "She has a blue bag." },
            { word: "school", respelling: "/skuːl/", example: "The school is near here." },
            { word: "two", respelling: "/tuː/", example: "I have two sisters." },
          ],
        },
        {
          type: "table",
          title: "Short and long contrasts",
          columns: ["Short", "Long", "What changes"],
          rows: [
            ["sit /sɪt/", "seat /siːt/", "The vowel becomes longer and tenser."],
            ["full /fʊl/", "fool /fuːl/", "The lips become rounder and the sound longer."],
            ["cat /kæt/", "cart /kɑːt/", "The mouth opens wider and the sound is longer."],
          ],
          caption: "Accents vary. Focus on the contrast in your own speech, not on sounding exactly like one model.",
        },
        {
          type: "exercise",
          title: "Find the long vowel",
          instructions:
            "Choose the word with the target sound. Say the pair aloud.",
          items: [
            c(
              "Which word has /iː/ as in see?",
              ["green", "grin", "great"],
              0,
              "Green is /ɡriːn/. Grin is /ɡrɪn/ and great is /ɡreɪt/.",
            ),
            c(
              "Which word has /ɑː/ as in car?",
              ["park", "pack", "peak"],
              0,
              "Park is /pɑːk/. Pack is /pæk/ and peak is /piːk/.",
            ),
            c(
              "Which word has /uː/ as in food?",
              ["food", "foot", "fold"],
              0,
              "Food is /fuːd/. Foot is /fʊt/ and fold is /fəʊld/.",
            ),
            c(
              "Which pair contains two long vowels?",
              ["see /siː/ and tea /tiː/", "sit /sɪt/ and seat /siːt/", "cat /kæt/ and cart /kɑːt/"],
              0,
              "See and tea both have /iː/. The other pairs contrast a short and a long vowel.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise long vowels",
          instructions:
            "Say each word slowly, then reveal the guidance.",
          items: [
            p(
              "Say see and sit. What is different?",
              "See /siː/ is longer and tenser; sit /sɪt/ is short and relaxed.",
              "Feel the tense smile in see.",
            ),
            p(
              "Say car and park. Where is your tongue?",
              "Your tongue is low and back, and your mouth is open wide. The vowel is /ɑː/.",
              "The r is not pronounced at the end in British English.",
            ),
            p(
              "Say food and foot. Which has rounder lips?",
              "Food /fuːd/ has rounder lips and a longer sound. Foot /fʊt/ is shorter.",
              "Look at your lips in a mirror.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which word has /iː/ as in see?",
          ["tea", "tin", "ten"],
          0,
          "Tea is /tiː/. Tin is /tɪn/ and ten is /ten/.",
        ),
        q(
          2,
          "Which word has /ɑː/ as in car?",
          ["far", "fan", "fun"],
          0,
          "Far is /fɑː/. Fan is /fæn/ and fun is /fʌn/.",
        ),
        q(
          3,
          "Which word has /uː/ as in food?",
          ["blue", "book", "bed"],
          0,
          "Blue is /bluː/. Book is /bʊk/ and bed is /bed/.",
        ),
        q(
          4,
          "Which pair contrasts a short vowel with a long vowel?",
          ["sit /sɪt/ and seat /siːt/", "see /siː/ and tea /tiː/", "car /kɑː/ and park /pɑːk/"],
          0,
          "Sit has short /ɪ/ and seat has long /iː/. The other pairs contain two long vowels.",
        ),
      ],
    },
    {
      slug: "common-consonant-sounds",
      title: "Common consonant sounds",
      summary:
        "Practise the consonant sounds that are easy to confuse: /θ/, /ð/, /ʃ/ and /tʃ/.",
      objective:
        "Distinguish and produce four common consonant sounds.",
      minutes: 25,
      blocks: [
        {
          type: "sound",
          title: "The two th sounds",
          sound: "/θ/ and /ð/ — think and this",
          guidance:
            "For both sounds, put the tip of your tongue lightly between your teeth and blow air. For /θ/ there is no voice: think, three. For /ð/ your voice is on: this, mother. Do not change /θ/ to /s/ or /t/.",
          words: [
            { word: "think", respelling: "/θɪŋk/", example: "I think it is cold." },
            { word: "three", respelling: "/θriː/", example: "I have three brothers." },
            { word: "this", respelling: "/ðɪs/", example: "This is my bag." },
            { word: "mother", respelling: "/ˈmʌðə/", example: "My mother is a teacher." },
          ],
        },
        {
          type: "sound",
          title: "The sounds in she and chair",
          sound: "/ʃ/ and /tʃ/ — she and chair",
          guidance:
            "For /ʃ/, round your lips a little and let air pass over the middle of your tongue: she, shop. For /tʃ/, start with a blocked sound and release it: chair, cheese. /tʃ/ is like /ʃ/ with a short t at the start.",
          words: [
            { word: "she", respelling: "/ʃiː/", example: "She lives in London." },
            { word: "shop", respelling: "/ʃɒp/", example: "The shop opens at nine." },
            { word: "chair", respelling: "/tʃeə/", example: "Please sit on this chair." },
            { word: "cheese", respelling: "/tʃiːz/", example: "I like cheese sandwiches." },
          ],
        },
        {
          type: "table",
          title: "Minimal pairs",
          columns: ["Sound 1", "Sound 2", "Tip"],
          rows: [
            ["think /θɪŋk/", "sink /sɪŋk/", "Tongue between teeth for /θ/; inside the mouth for /s/."],
            ["three /θriː/", "tree /triː/", "Do not turn /θ/ into /t/."],
            ["she /ʃiː/", "see /siː/", "Round the lips for /ʃ/."],
            ["chair /tʃeə/", "share /ʃeə/", "Add the short t release for /tʃ/."],
          ],
        },
        {
          type: "exercise",
          title: "Listen for the consonant",
          instructions:
            "Choose the word with the target sound. Say each pair aloud.",
          items: [
            c(
              "Which word begins with /θ/ as in think?",
              ["three", "this", "sink"],
              0,
              "Three begins with /θ/. This begins with /ð/, and sink begins with /s/.",
            ),
            c(
              "Which word has /ð/ as in this?",
              ["mother", "month", "three"],
              0,
              "Mother has /ð/. Month ends with /θ/ and three begins with /θ/.",
            ),
            c(
              "Which word has /ʃ/ as in she?",
              ["shop", "chop", "stop"],
              0,
              "Shop begins with /ʃ/. Chop begins with /tʃ/ and stop begins with /s/.",
            ),
            c(
              "Which word has /tʃ/ as in chair?",
              ["cheese", "share", "car"],
              0,
              "Cheese begins with /tʃ/. Share begins with /ʃ/ and car begins with /k/.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise the consonants",
          instructions:
            "Say each pair aloud and check the feedback. A mirror can help you see your tongue and lips.",
          items: [
            p(
              "Say think and sink. What changes?",
              "For think /θɪŋk/, the tongue touches the teeth. For sink /sɪŋk/, it stays behind the teeth.",
              "Keep the tongue visible for /θ/.",
            ),
            p(
              "Say she and see. Which one has round lips?",
              "She /ʃiː/ has rounder lips. See /siː/ has a wider smile.",
              "Look at your lips in a mirror.",
            ),
            p(
              "Say chair and share. Which one starts with a t-like release?",
              "Chair /tʃeə/ starts with /tʃ/, which has a short blocked release. Share starts with /ʃ/.",
              "Put your hand in front of your mouth and feel the puff of air.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which word begins with /θ/?",
          ["thanks", "they", "day"],
          0,
          "Thanks begins with /θ/. They begins with /ð/ and day begins with /d/.",
        ),
        q(
          2,
          "Which word contains /ð/?",
          ["they", "three", "mouth"],
          0,
          "They begins with /ð/. Three and mouth contain /θ/.",
        ),
        q(
          3,
          "Which word begins with /ʃ/?",
          ["shoe", "cheese", "zoo"],
          0,
          "Shoe begins with /ʃ/. Cheese begins with /tʃ/ and zoo begins with /z/.",
        ),
        q(
          4,
          "Which word begins with /tʃ/?",
          ["chair", "share", "there"],
          0,
          "Chair begins with /tʃ/. Share begins with /ʃ/ and there begins with /ð/.",
        ),
      ],
    },
  ],
};
