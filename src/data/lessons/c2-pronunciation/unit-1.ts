import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2PronunciationUnit1: LessonUnit = {
  title: "Articulation",
  description:
    "Maintain precise vowels, dense clusters, syllable structure and technical vocabulary when speech becomes faster and more demanding.",
  lessons: [
    {
      slug: "precision-in-vowel-contrasts",
      title: "Precision in vowel contrasts",
      summary:
        "Stabilise easily merged vowels in reduced speech, distinguish lexical contrast from accent variation and recover precision after distractions.",
      objective:
        "Control selected /e/–/æ/ and /ɒ/–/ɔː/ contrasts in professional vocabulary while respecting legitimate accent mergers.",
      minutes: 30,
      blocks: [
        {
          type: "sound",
          title: "Keep a narrow contrast narrow",
          sound: "/e/–/æ/ and /ɒ/–/ɔː/",
          guidance:
            "For /e/–/æ/, change tongue height and jaw opening without adding a glide. In this British-English model, /ɒ/ is shorter and more open-rounded than /ɔː/, which is longer. Do not force a contrast that your accent does not use; the goal is consistent, intelligible distinction where it matters.",
          words: [
            { word: "said", respelling: "/sed/", example: "The analyst said the trend would continue." },
            { word: "sad", respelling: "/sæd/", example: "The end of the trial was sad for the team." },
            { word: "cot", respelling: "/kɒt/", example: "The cot must be folded before storage." },
            { word: "caught", respelling: "/kɔːt/", example: "The error was caught before publication." },
            { word: "lot", respelling: "/lɒt/", example: "A lot of the feedback concerned timing." },
            { word: "law", respelling: "/lɔː/", example: "The new law takes effect in June." },
          ],
        },
        {
          type: "table",
          title: "Separate variation from loss of control",
          columns: ["Case", "Example", "Appropriate response"],
          rows: [
            ["Contrast used in your accent", "said /sed/ and sad /sæd/", "maintain the established distinction"],
            ["Merged in your accent", "cot and caught may share a vowel", "do not invent a contrast solely to imitate another accent"],
            ["Contrast lost under pressure", "head becomes /hæd/ only in rapid speech", "restore it in a carrier phrase"],
            ["Context-dependent reduction", "to /tə/ in connected speech", "allow reduction when it serves rhythm"],
            ["Mispronounced specialist term", "parameter with the wrong main stress", "check the lexical form and stress pattern"],
          ],
          caption:
            "Many accents merge /ɒ/ and /ɔː/, and North American varieties use different vowel systems. Judge precision against the variety you intend to use.",
        },
        {
          type: "text",
          title: "Precision survives cognitive load",
          paragraphs: [
            "At advanced level, vowel accuracy often declines while you formulate a complex idea. The solution is not to exaggerate every vowel permanently. Build automaticity through short, meaningful repetitions until the contrast remains available without conscious monitoring.",
            "Record yourself explaining a familiar topic at a demanding pace. Mark words whose vowels shift toward a neighbouring sound. Then test those words in a new sentence, because isolated accuracy may not transfer to spontaneous speech.",
            "Use listener recognition as the final measure. If a contrast is not part of your accent but a particular word remains consistently recognised, the sound may be perfectly serviceable. Precision means control appropriate to your speech community, not uniform pronunciation.",
          ],
        },
        {
          type: "exercise",
          title: "Diagnose the vowel",
          instructions: "Choose the best analysis of the sound, accent or practice issue.",
          items: [
            c(
              "Which feature differs between said and sad?",
              ["The vowel /e/ versus /æ/", "The initial consonant", "The final consonant"],
              0,
              "Both words have /s/ and /d/. The contrast is in the vowel.",
              "Compare tongue height.",
            ),
            c(
              "Your accent merges cot and caught. What is the best response?",
              ["Assume all technical speech is unintelligible", "Force a British split in every context", "Keep a consistent, intelligible vowel and focus on higher-impact issues"],
              2,
              "A stable merger can be fully intelligible. Precision should be relevant to the speaker’s variety and listeners.",
              "Accent variation is not automatically an error.",
            ),
            c(
              "Why practise a difficult vowel in a sentence rather than only in isolation?",
              ["Sentences remove all stress", "Connected rhythm and attention demands affect production", "Isolated words have no vowels"],
              1,
              "Transfer requires the word to remain accurate while you manage surrounding sounds and meaning.",
              "Train the condition in which you need the skill.",
            ),
            c(
              "Which observation best indicates an accuracy problem?",
              ["My /e/ differs slightly from a recording", "Head becomes had repeatedly when I speak quickly", "My accent has a consistent cot–caught merger"],
              1,
              "A context-dependent shift in an established contrast can reduce recognition. Accent difference alone does not.",
              "Look for inconsistency and listener impact.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Recover vowel precision",
          instructions:
            "Use your own accent as the baseline and record both a careful and a demanding version.",
          items: [
            p(
              "Contrast said and sad, then head and had, in the frame I said the word was ___.",
              "Maintain /e/ in said and head if that contrast belongs to your accent. Keep the final /d/ stable and avoid turning /e/ into a diphthong.",
              "Use a listener to check word recognition.",
            ),
            p(
              "Read: The analyst said the bed had a broken frame and the plan looked sad.",
              "Mark said /sed/, bed /bed/, frame /freɪm/, plan /plæn/ and sad /sæd/. Keep the vowel contrast while allowing frame and plan to carry phrase prominence.",
              "Do not stress said and sad equally without context.",
            ),
            p(
              "Explain a familiar topic for 45 seconds, then repeat five target words in new sentences.",
              "Choose only words that shifted during the first take. Compare the second take for consistency, not for resemblance to a different accent.",
              "Keep one high-impact target.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Aim for stable, not exotic",
          text: "The most advanced vowel control is knowing which contrasts your speech needs, which variations are harmless and which features deserve practice before a high-stakes event.",
        },
      ],
      quiz: [
        q(1, "Which pair differs in vowel quality?", ["said and sad", "sit and bit", "team and seem"], 0, "Said /sed/ and sad /sæd/ have different vowels; the other pairs differ initially."),
        q(2, "How should a consistent accent merger be treated?", ["As automatic evidence of poor speech", "As potentially fully intelligible", "As a reason to avoid technical vocabulary"], 1, "Consistent mergers can be normal and intelligible within an accent."),
        q(3, "Why use sentence practice?", ["It removes the need for clear consonants", "It makes every vowel stressed", "It tests contrast in connected rhythm and under attention demands"], 2, "Transfer depends on producing the contrast in realistic speech."),
        q(4, "What is the strongest evidence of precision?", ["Matching one recording exactly", "Consistent contrast and listener recognition in context", "Making every vowel longer"], 1, "Precision is functional control, not exact imitation."),
      ],
    },
    {
      slug: "consonant-clusters-at-speed",
      title: "Consonant clusters at speed",
      summary:
        "Maintain consonant landmarks in complex onset and coda clusters while using coarticulation and unreleased stops efficiently.",
      objective:
        "Produce clusters such as /spl/, /str/ and /ksts/ at increasing rates without inserting vowels, losing endings or over-releasing stops.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Build the onset without a vowel",
          sound: "/s/ + stop and /l/, /r/ or /w/ clusters",
          guidance:
            "In speak, the /s/ flows directly into /p/ and then the vowel. In structure, /s/, /t/ and /r/ form a compact sequence; in square, /sk/ moves directly into /w/. Do not insert schwa between the consonants. Keep the cluster lighter than the stressed vowel and avoid a forceful release of the stop.",
          words: [
            { word: "speak", respelling: "/spiːk/", example: "Please speak a little more slowly." },
            { word: "stay", respelling: "/steɪ/", example: "Stay with the first option for now." },
            { word: "school", respelling: "/skuːl/", example: "The school runs evening sessions." },
            { word: "square", respelling: "/skweə/", example: "Measure the square area first." },
            { word: "structure", respelling: "/ˈstrʌktʃə/", example: "The structure of the report is clear." },
            { word: "strategy", respelling: "/ˈstrætədʒi/", example: "Our strategy focuses on repeat users." },
          ],
        },
        {
          type: "table",
          title: "Landmarks at speed",
          columns: ["Cluster type", "Examples", "Priority", "Common failure"],
          rows: [
            ["Initial /s/ + stop", "speak, stay, school", "continuous airflow and accurate vowel onset", "adding a vowel after /s/"],
            ["Initial /s/ + stop + approximant", "splash, spring, square", "smooth transition into /l/, /r/ or /w/", "breaking the cluster into separate beats"],
            ["Final stop + fricative", "asks, risks, texts", "stop closure plus final fricative", "deleting the final consonant"],
            ["Dense final cluster", "sixths, texts, contexts /ˈkɒnteksts/", "reach each closure without a pause", "inserting schwa or simplifying away /t/"],
            ["Across a word boundary", "fixed price, last chance", "coordinate both closures", "pausing between every consonant"],
          ],
          caption:
            "Final stops are often unreleased at speed. The listener needs the closure and following sound, not an audible explosion for every stop.",
        },
        {
          type: "text",
          title: "Increase rate without losing grammar",
          paragraphs: [
            "Cluster accuracy depends on timing, not just articulation. Move from one closure to the next efficiently and allow consonants to overlap with the following vowel. If you release every stop strongly, speech becomes slow and effortful even when the individual sounds are correct.",
            "Build speed in small steps. Read a cluster list slowly, then use the words in phrases, then increase rate while a listener writes down the words. Return to full forms whenever accuracy falls below a reliable level.",
            "Pay particular attention to endings that carry grammar. In contexts, final /s/ marks the plural; in asked, /t/ marks the past after a voiceless sound. A fast delivery can reduce release, but should not routinely remove the information-bearing ending.",
          ],
        },
        {
          type: "exercise",
          title: "Protect the cluster",
          instructions: "Choose the strategy that preserves clarity at speed.",
          items: [
            c(
              "How should the /p/ in speak be produced?",
              ["With a compact closure followed by the vowel", "With a vowel between /s/ and /p/", "With a long pause before /p/"],
              0,
              "Speak is a direct /sp/ onset. The stressed vowel remains the main rhythmic event.",
              "Build the onset, then release into /iː/.",
            ),
            c(
              "Which feature may naturally weaken in a final stop cluster?",
              ["The vowel identity", "The final plural /s/", "The audible release of the stop"],
              2,
              "Final stops often remain unreleased. The closure and final fricative still carry information.",
              "Closure does not require a puff of air.",
            ),
            c(
              "What is the safest way to build cluster speed?",
              ["Read the longest technical paragraph immediately", "Progress from words to phrases to faster connected speech", "Add schwa between all consonants"],
              1,
              "A staged progression preserves accuracy while timing becomes more automatic.",
              "Increase one demand at a time.",
            ),
            c(
              "Why might deleting the /s/ in contexts damage meaning?",
              ["It changes the word into a different tense", "It removes a plural ending and may alter recognition", "It makes the initial consonant voiced"],
              1,
              "Contexts needs final /s/ for the plural. Grammar endings remain important at speed.",
              "Release may reduce; the ending should remain.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Speed ladder",
          instructions:
            "Use three speeds and ask a listener to transcribe the final set. Do not continue increasing rate if word identity drops.",
          items: [
            p(
              "Say speak, stay, school, square, structure, strategy, then repeat them at a moderate conversational rate.",
              "Keep /s/ connected to the stop and let the stressed vowel carry the beat. There is no schwa between the initial consonants.",
              "Record the slow version as a reference.",
            ),
            p(
              "Practise asks, risks, texts, sixths and contexts with light final releases.",
              "Preserve final /s/ and all essential closures. In contexts /ˈkɒnteksts/, do not split the word after text.",
              "Feel each closure, but do not tap between them.",
            ),
            p(
              "Read: The specialist spoke about the structural risks in complex contexts.",
              "Mark specialist /ˈspeʃəlɪst/, spoke /spəʊk/, structural /ˈstrʌktʃərəl/, risks /rɪsks/ and contexts /ˈkɒnteksts/. Increase pace only while all five remain identifiable.",
              "Have a listener write the five target words.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Measure the ceiling",
          text: "Your useful maximum speed is the fastest rate at which listeners still recover key words and endings. Beyond that point, more speed adds repairs rather than efficiency.",
        },
      ],
      quiz: [
        q(1, "Which word begins with /str/?", ["speak", "structure", "school"], 1, "Structure begins with the cluster /str/."),
        q(2, "What may be reduced in a final stop cluster?", ["The vowel", "The final /s/", "The audible stop release"], 2, "Final stops are commonly unreleased while their closure remains."),
        q(3, "What is an effective speed progression?", ["Words to phrases to connected speech", "Immediate fast paragraphs", "Add a vowel after every consonant"], 0, "Staged practice builds timing without losing accuracy."),
        q(4, "What should set your maximum practice speed?", ["How fast you can open your mouth", "The rate at which listeners still recover key information", "The speed of a recording regardless of clarity"], 1, "Intelligibility, not raw speed, defines the useful ceiling."),
      ],
    },
    {
      slug: "syllable-structure-and-word-endings",
      title: "Syllable structure and word endings",
      summary:
        "Control onset–nucleus–coda patterns, syllabic consonants and grammatical endings so that complex words remain complete under pressure.",
      objective:
        "Analyse syllable structure, produce syllabic /l/ and /n/ without an extra vowel, and preserve plural and past endings in connected speech.",
      minutes: 30,
      blocks: [
        {
          type: "sound",
          title: "Let the consonant carry the syllable",
          sound: "Syllabic /l/ and /n/",
          guidance:
            "In words such as bottle and button, the final syllable can be carried by /l/ or /n/ without a separate vowel. The small vertical mark /l̩ n̩/ shows syllabicity. Keep the preceding consonant closure and avoid adding schwa: bottle is not bottle-uh. Some speakers use a short vowel instead; both can be intelligible if consistent.",
          words: [
            { word: "bottle", respelling: "/ˈbɒtl̩/", example: "Fill the bottle before the demonstration." },
            { word: "button", respelling: "/ˈbʌtn̩/", example: "Press the button once to begin." },
            { word: "middle", respelling: "/ˈmɪdl̩/", example: "The middle column contains the totals." },
            { word: "sudden", respelling: "/ˈsʌdn̩/", example: "A sudden change appeared in the data." },
            { word: "little", respelling: "/ˈlɪtl̩/", example: "Only a little of the budget remains." },
            { word: "garden", respelling: "/ˈɡɑːdn̩/", example: "The garden is open during the tour." },
          ],
        },
        {
          type: "table",
          title: "Map the word before speaking it",
          columns: ["Word", "Onset", "Nucleus", "Coda", "Practice note"],
          rows: [
            ["spread", "/spr/", "/e/", "/d/", "dense onset, simple ending"],
            ["texts", "/t/", "/e/", "/ksts/", "dense coda, no added vowel"],
            ["bottle", "/b/", "/ɒ/", "/tl̩/", "second syllable is syllabic /l/"],
            ["button", "/b/", "/ʌ/", "/tn̩/", "second syllable is syllabic /n/"],
            ["asked", "empty", "/ɑː/", "/skt/", "vowel-initial with dense coda"],
            ["idea", "empty", "/aɪ/", "—", "/d/ begins the second syllable; /ɪə/ is its nucleus"],
          ],
          caption:
            "Onset and coda are optional. A syllable needs a nucleus; the examples show how consonants organise around it.",
        },
        {
          type: "text",
          title: "Endings carry structure",
          paragraphs: [
            "A syllable-structure error often sounds like an extra vowel or a missing consonant. When a dense coda becomes difficult, avoid solving the problem by deleting its final sound. Keep the closure and final consonant, then allow the stop to remain unreleased.",
            "Morphology adds clusters across syllables. In checked, the base ends in /tʃ/ and -ed adds /t/. In boxes, /s/ follows /ks/ and needs an additional syllable /ɪz/. Learning the whole word rhythm prevents a last-minute search for the ending.",
            "In rapid speech, reductions vary, but high-stakes grammar often benefits from fuller endings. If you are reporting results, deciding tense or giving a quantity, rehearse the endings in the exact sentence you will use.",
          ],
        },
        {
          type: "exercise",
          title: "Analyse the syllable",
          instructions: "Choose the correct structural or grammatical analysis.",
          items: [
            c(
              "Which part of button forms the second syllable?",
              ["A clear /ə/", "Syllabic /n̩/", "A separate /l/"],
              1,
              "Button is commonly /ˈbʌtn̩/, with /n̩/ carrying the final syllable.",
              "No extra vowel is required.",
            ),
            c(
              "Which word has an empty onset?",
              ["spread", "asked", "texts"],
              1,
              "Asked begins directly with the vowel /ɑː/, so its first syllable has no onset.",
              "Look at the first sound, not the spelling.",
            ),
            c(
              "Why does boxes add a syllable?",
              ["Every plural adds /ɪz/", "The vowel changes", "It ends in /s/ and needs /ɪz/"],
              2,
              "After /s z ʃ ʒ tʃ dʒ/, plural -es is pronounced /ɪz/.",
              "Check the final sound of box.",
            ),
            c(
              "What is a better response to difficulty with texts than deleting /s/?",
              ["Keep the closures and final /s/ with light releases", "Insert schwa after every consonant", "Stress each consonant equally"],
              0,
              "Compact closures preserve the cluster. Adding or deleting sounds changes the word.",
              "Accurate timing beats extra force.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Map and maintain",
          instructions:
            "Clap once per syllable, not once per consonant. Record the word list and then use each word in a short phrase.",
          items: [
            p(
              "Map bottle, button, middle, sudden, little and garden; then say them without an added vowel.",
              "Each word has two syllables. The second may be carried by syllabic /l/ or /n/: bottle /ˈbɒtl̩/, garden /ˈɡɑːdn̩/.",
              "Keep the first syllable’s stress clear.",
            ),
            p(
              "Practise boxes, watches, checked, wanted and texts with their endings.",
              "Boxes /ˈbɒksɪz/ and watches /ˈwɒtʃɪz/ add /ɪz/. Checked /tʃekt/ adds /t/, wanted /ˈwɒntɪd/ adds /ɪd/, and texts retains /s/ after /t/.",
              "Let the extra syllable be light, not absent.",
            ),
            p(
              "Read: The specialist checked the boxes and pressed the button beside the middle shelf.",
              "Maintain checked /tʃekt/, boxes /ˈbɒksɪz/, button /ˈbʌtn̩/ and middle /ˈmɪdl̩/. Keep the phrase beside the middle shelf connected.",
              "Do not add a vowel to button or middle.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Store the rhythm with the spelling",
          text: "For difficult technical words, note syllables and stress alongside meaning. A word learned as a complete sound pattern is easier to retrieve than one assembled letter by letter during speech.",
        },
      ],
      quiz: [
        q(1, "What makes a syllable a syllable?", ["It has a nucleus", "It always begins with a consonant", "It contains at least two vowels"], 0, "A nucleus, usually a vowel, is essential; onsets and codas are optional."),
        q(2, "Which transcription represents syllabic /n/?", ["/ˈbʌtən/", "/ˈbʌtl̩/", "/ˈbʌtn̩/"], 2, "The mark under /n/ shows that it carries the second syllable."),
        q(3, "Which plural adds /ɪz/?", ["boxes", "reports", "teams"], 0, "Box ends in /s/, so boxes adds a syllable /ɪz/."),
        q(4, "What should be preserved in a dense final cluster?", ["Every audible stop release", "All information-bearing closures and endings", "A pause between consonants"], 1, "Closures and endings support recognition; full releases are not always necessary."),
      ],
    },
    {
      slug: "clarity-in-technical-vocabulary",
      title: "Clarity in technical vocabulary",
      summary:
        "Control stress in long specialist words, pronounce abbreviations intentionally and explain unfamiliar terminology without diluting precision.",
      objective:
        "Deliver technical terms and letter-based abbreviations with stable stress, accurate endings and concise audience support.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Stress the technical landmark",
          sound: "Primary stress in -tion, -ity and technical words",
          guidance:
            "Long technical words become easier to recognise when unstressed syllables reduce and the main stress is stable. In implementation, stress falls on -ta-; in configuration, it falls on -ra-. Do not give every syllable equal length, and do not turn final -tion into a separate strong beat.",
          words: [
            { word: "implementation", respelling: "/ˌɪmplɪmenˈteɪʃn/", example: "The implementation begins in June." },
            { word: "capacity", respelling: "/kəˈpæsəti/", example: "The system has reached maximum capacity." },
            { word: "algorithm", respelling: "/ˈælɡərɪðəm/", example: "The algorithm ranks results by relevance." },
            { word: "parameter", respelling: "/pəˈræmɪtə/", example: "Each parameter has a defined range." },
            { word: "interface", respelling: "/ˈɪntəfeɪs/", example: "The interface is designed for quick access." },
            { word: "configuration", respelling: "/kənˌfɪɡəˈreɪʃn/", example: "Save the configuration before updating." },
          ],
        },
        {
          type: "table",
          title: "Plan the term before the meeting",
          columns: ["Term type", "Example", "Delivery approach"],
          rows: [
            ["Initialism", "API /ˌeɪ piː ˈaɪ/", "use letter names; check your community’s habitual stress"],
            ["Acronym pronounced as a word", "laser /ˈleɪzə/", "treat it as an ordinary word, not letter by letter"],
            ["Mixed form", "JPEG /ˈdʒeɪpeɡ/", "learn the community’s conventional pronunciation"],
            ["Latin abbreviation", "e.g. /ˌiː ˈdʒiː/", "say the letter names, or substitute for example"],
            ["Version or code", "HTTP/2", "explain the form and stress the meaningful part"],
            ["Unfamiliar term", "idempotent /ˌaɪdɪmˈpəʊtənt/", "give the term, pause and add a plain paraphrase"],
          ],
          caption:
            "Abbreviation pronunciation can vary by organisation. Ask colleagues or consult a field-specific model rather than assuming one universal form.",
        },
        {
          type: "text",
          title: "Precision and accessibility work together",
          paragraphs: [
            "A specialist audience may recognise a term from its stressed syllable and surrounding context, but a public audience needs a short explanation. Give the accurate term first when it matters, then paraphrase: idempotent means repeating the operation has no additional effect.",
            "Prepare a pronunciation list before a presentation. Mark primary stress, syllabic consonants and any difficult cluster. Record the list in sentence frames, because a correct isolated word can still be swallowed when surrounded by other demanding terms.",
            "Do not over-explain familiar terms merely because they are technical. Offer the amount of support the audience needs, and watch whether people use the term accurately afterwards. Repetition with clear stress builds shared vocabulary.",
          ],
        },
        {
          type: "exercise",
          title: "Make the term usable",
          instructions: "Choose the most precise and accessible technical delivery.",
          items: [
            c(
              "Where is primary stress in implementation?",
              ["-ment-", "First syllable", "-ta-"],
              2,
              "Implementation is /ˌɪmplɪmenˈteɪʃn/, with primary stress on -ta-.",
              "The suffix -tion often attracts stress.",
            ),
            c(
              "How should API usually be introduced?",
              ["With its letter names, followed by a brief explanation if needed", "As the invented word appy", "Without any vowel sounds"],
              0,
              "API is an initialism, commonly /ˌeɪ piː ˈaɪ/. A short explanation helps non-specialists.",
              "Check local usage, then be consistent.",
            ),
            c(
              "What follows an unfamiliar technical term most effectively?",
              ["A long unrelated technical history", "A pause and a concise plain-language paraphrase", "A much faster reading pace"],
              1,
              "The pause supports processing and the paraphrase offers another route to meaning.",
              "Explain briefly without changing the concept.",
            ),
            c(
              "Why rehearse a term in a sentence?",
              ["Connected rhythm and neighbouring clusters affect production", "Isolated terms have no stress", "Sentences eliminate the need for a model"],
              0,
              "Sentence practice tests retrieval and articulation in the condition where the term will be used.",
              "Train transfer, not only recognition.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Prepare a technical mini-brief",
          instructions:
            "Choose three recurring terms from your field. Check their pronunciation and prepare one sentence explaining each.",
          items: [
            p(
              "Say implementation, capacity, algorithm, parameter, interface and configuration in carrier phrases.",
              "Model: The implemenTAtion is delayed; the caPAcity is limited; the ALgorithm is stable; each paRAmeter is checked; the INterface is clear; the configuRAtion is saved.",
              "Tap only the primary-stressed syllable.",
            ),
            p(
              "Introduce API and JPEG, then explain the abbreviation HTTP.",
              "Model: API stands for application programming interface. JPEG is usually pronounced JAY-peg. HTTP is said with letter names and refers to the protocol used to transfer web information.",
              "Avoid spelling every term as letters if it is normally a word.",
            ),
            p(
              "Deliver a 40-second technical explanation using one term, one paraphrase and one precise figure.",
              "Example: The algorithm ranks the results. // In other words, it orders them by relevance. // The current accuracy is eighty-four per cent. Keep algorithm’s stress and group the figure.",
              "Ask a non-specialist to summarise the explanation.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Keep a field lexicon",
          text: "Maintain a compact audio list of the terms you use most. Include stress, a natural phrase and a plain-language definition so that accuracy and accessibility improve together.",
        },
      ],
      quiz: [
        q(1, "Where is the main stress in configuration?", ["First syllable", "Second syllable", "-ra-"], 2, "Configuration is /kənˌfɪɡəˈreɪʃn/, stressed on -ra-."),
        q(2, "What is a useful follow-up to an unfamiliar technical term?", ["A concise paraphrase", "A faster delivery", "An unexplained second abbreviation"], 0, "A plain explanation helps listeners connect the term with meaning."),
        q(3, "How is API commonly pronounced?", ["As laser", "With letter names", "As the single word ap"], 1, "API is normally an initialism spoken with its letter names."),
        q(4, "What should a pre-presentation term list include?", ["Stress, a natural phrase and a brief definition", "Only spelling", "Every possible accent"], 0, "This combination supports pronunciation, retrieval and audience understanding."),
      ],
    },
  ],
};
