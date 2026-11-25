import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1PronunciationUnit2: LessonUnit = {
  title: "Rhythm and connected speech",
  description:
    "Reduce unstressed language, connect word boundaries and organise longer speech into meaningful thought groups.",
  lessons: [
    {
      slug: "weak-forms-and-schwa",
      title: "Weak forms and schwa",
      summary:
        "Lighten common function words, recognise schwa in unstressed syllables and restore strong forms when meaning requires them.",
      objective:
        "Use weak forms such as /tə/, /fə/ and /kən/ in natural phrases while preserving strong forms for contrast, citation and final emphasis.",
      minutes: 30,
      blocks: [
        {
          type: "sound",
          title: "Give the message more weight",
          sound: "/ə/ — the schwa in weak syllables",
          guidance:
            "Make /ə/ short and relaxed in the centre of your mouth. It should not replace a stressed vowel or become a separate beat. In connected speech, many function words choose a weak form: to can be /tə/, for can be /fə/ and can can be /kən/. Keep the consonant frame clear while the vowel reduces.",
          words: [
            { word: "to", respelling: "/tuː/ strong; /tə/ weak", example: "We need to review the proposal." },
            { word: "for", respelling: "/fɔː/ strong; /fə/ weak", example: "I applied for the role last April." },
            { word: "from", respelling: "/frɒm/ strong; /frəm/ weak", example: "The data comes from three sites." },
            { word: "can", respelling: "/kæn/ strong; /kən/ weak", example: "We can extend the deadline." },
            { word: "of", respelling: "/ɒv/ strong; /əv/ weak", example: "The first of the reports is ready." },
            { word: "about", respelling: "/əˈbaʊt/", example: "We talked about the next phase." },
          ],
        },
        {
          type: "table",
          title: "Choose strong or weak by function",
          columns: ["Word", "Typical weak form", "Strong-form context", "Example"],
          rows: [
            ["to", "/tə/", "contrast or stranded infinitive", "I wanted to /aɪ ˈwɒntɪd tuː/."],
            ["and", "/ən/ or /ənd/", "linking two contrasting options", "Research and /ˈriːsɜːtʃ ænd/ development."],
            ["was", "/wəz/", "correction of a tense", "It was /wɒz/, not is."],
            ["are", "/ə/", "emphasis or citation", "We are /ɑː/ ready."],
            ["has", "/həz/", "contrast with have", "She has /hæz/, not they have."],
            ["there", "/ðə/", "pointing to a location", "Put it there /ðeə/."],
          ],
          caption:
            "Weak forms are normal, not careless speech. Their availability and frequency vary across accents and speaking styles.",
        },
        {
          type: "text",
          title: "Reduce without deleting",
          paragraphs: [
            "English rhythm gains contrast when content words are prominent and grammar words are light. A sentence full of equally strong words sounds laborious; one with no clear anchors sounds vague. Let the verb, noun, number or key adjective carry the beat.",
            "Weak does not mean swallowed. In can you send it, /kən juː ˈsend ɪt/, the /k/ and /n/ still identify the words. Before a vowel, a linking consonant or glide may make the boundary clear: for example /fər‿ɪɡˈzɑːmpəl/.",
            "A function word becomes strong when you contrast it, repeat it, quote it or leave it at the end of a thought. Say I said TO, not FROM with a deliberate strong to. Return to weak form as soon as the contrast is complete.",
          ],
        },
        {
          type: "exercise",
          title: "Select the useful form",
          instructions: "Choose the best weak form or the context that requires a strong form.",
          items: [
            c(
              "Which pronunciation fits the unstressed to in We need to act?",
              ["/wiː niːd tə ˈækt/", "/wiː niːd tuː ækt/", "/wiː niːd təʊ ˈækt/"],
              0,
              "To is normally /tə/ before the infinitive verb. The content word act takes stronger prominence.",
              "Keep the /t/; reduce only the vowel.",
            ),
            c(
              "Which sentence is likely to use a strong form of was?",
              ["The report was ready.", "It was /wɒz/, not is, that I said.", "The window was open."],
              1,
              "The correction contrasts was with is, so was needs its full form and prominence.",
              "Look for deliberate correction.",
            ),
            c(
              "Where is schwa likely in the word about?",
              ["Second syllable", "There is no schwa", "First syllable"],
              2,
              "About is /əˈbaʊt/: the unstressed first syllable contains /ə/.",
              "Stress falls on -bout.",
            ),
            c(
              "What is the main risk of deleting function words completely?",
              ["The rhythm becomes too regular", "Grammatical relationships and boundaries may become unclear", "Every content word becomes too short"],
              1,
              "Complete loss can obscure relationships. Reduction preserves a consonant frame and often a weak vowel.",
              "Lighten the word rather than removing it.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Lighten the frame",
          instructions:
            "Read naturally, then listen specifically to the function words. Keep the strong content words stable while you adjust them.",
          items: [
            p(
              "Say: We need to review the proposal and send it to the client.",
              "Model: we NEED to reVIEW the proPOSAL and SEND it to the CLIENT. Use /tə/ in both instances of to, /ən/ or /ənd/ in and, and /tə/ in to the client.",
              "Tap only the five content-word beats.",
            ),
            p(
              "Repeat: The data comes from three sites, and the first report was ready.",
              "Use /frəm/ in from, /ən/ in and and /wəz/ in was. Keep three and ready prominent; do not stress every syllable of comes.",
              "Keep the /f/, /r/ and /m/ audible.",
            ),
            p(
              "Contrast strong and weak forms: I said TO, not FROM; then say We need to send it from the office.",
              "The first sentence deliberately stresses /tuː/ and /frɒm/. In the second, return to /tə/ and /frəm/ so the message words send and office receive the focus.",
              "Change prominence, not speaking volume alone.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Mark the music, not every word",
          text: "Underline content words and circle function words. Speak once with the content words slightly clearer, then remove the conscious tapping. The aim is an organised rhythm, not a mechanical beat.",
        },
      ],
      quiz: [
        q(1, "Which is the usual weak form of for?", ["/fə/", "/fɔː/", "/fɜː/"], 0, "For commonly reduces to /fə/ when unstressed."),
        q(2, "When might was use its strong form /wɒz/?", ["In every sentence", "When correcting or contrasting the word", "Only before a vowel"], 1, "Strong forms support deliberate contrast or correction."),
        q(3, "Which word has schwa in its first syllable?", ["open", "item", "about"], 2, "About is /əˈbaʊt/, with /ə/ in the first syllable."),
        q(4, "What characterises effective weak forms?", ["Every sound disappears", "The vowel reduces but a useful consonant frame remains", "The word becomes louder than its neighbours"], 1, "Weak forms retain enough information to identify the word while taking less rhythmic weight."),
      ],
    },
    {
      slug: "linking-and-elision",
      title: "Linking and elision",
      summary:
        "Join consonant–vowel boundaries smoothly, recognise common assimilations and use elision without sacrificing word identity.",
      objective:
        "Link phrases such as check it and far away, produce natural assimilation in fixed price, and apply appropriate t/d elision at speed.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Cross the word boundary",
          sound: "Linking /r/ and consonant–vowel linking",
          guidance:
            "In a non-rhotic accent, a written r is normally silent before a consonant or pause but may link when a vowel follows: far away /fɑːr‿əˈweɪ/. In check it /ˌtʃek‿ɪt/, the /k/ stays attached to the first word and releases directly into the vowel. Link by moving, not by adding a new vowel.",
          words: [
            { word: "far", respelling: "/fɑː/", example: "The station is far away." },
            { word: "more", respelling: "/mɔː/", example: "We need more information." },
            { word: "answer", respelling: "/ˈɑːnsə/", example: "Please answer it in writing." },
            { word: "better", respelling: "/ˈbetə/", example: "The second option is better overall." },
            { word: "later", respelling: "/ˈleɪtə/", example: "We can discuss it later on." },
            { word: "check", respelling: "/tʃek/", example: "Check it against the original." },
          ],
        },
        {
          type: "table",
          title: "Three boundary processes",
          columns: ["Process", "Written example", "Connected form", "What happens"],
          rows: [
            ["Consonant–vowel linking", "check it", "/ˌtʃek‿ɪt/", "The final consonant releases into the next vowel"],
            ["Non-rhotic linking /r/", "far away", "/fɑːr‿əˈweɪ/", "Written r is realised before a following vowel"],
            ["Place assimilation", "not quite", "/nɒk ˈkwaɪt/", "/t/ takes on /k/’s place before /k/"],
            ["Elision", "next day", "/neks ˈdeɪ/", "/t/ is omitted before /d/"],
            ["Weak-form coalescence", "used to", "/juːstə/", "The /d/ of used assimilates to /t/"],
          ],
          caption:
            "The symbol ‿ marks a close connection, not a pause. These are common patterns, not compulsory replacements for careful articulation.",
        },
        {
          type: "text",
          title: "Fast is organised, not careless",
          paragraphs: [
            "Connected speech reflects overlapping articulation. Your tongue may begin shaping the next sound before the previous word ends. This can make transitions efficient, but the listener still needs recognisable landmarks: the stressed vowel, major consonant closures and any grammatical ending.",
            "Assimilation often involves place rather than complete sound loss. In that person, final /t/ may become /p/ before /p/: /ðæp ˈpɜːsən/. In good morning, /d/ may become /m/ before /m/. The meaning remains clear because the phrase is familiar and the vowel is unchanged.",
            "Elision is most useful in dense consonant environments. Practise full forms first, especially when a listener is unfamiliar with your accent or the topic. At slower speeds and in formal dictation, retaining more consonants can be appropriate.",
          ],
        },
        {
          type: "exercise",
          title: "Analyse the boundary",
          instructions: "Choose the description that best matches the connected form.",
          items: [
            c(
              "What links far and away in a non-rhotic accent?",
              ["The written /r/ before the following vowel", "A new /ə/", "A pause after far"],
              0,
              "Far away commonly links as /fɑːr‿əˈweɪ/. No extra vowel is required.",
              "Look at the written r before away.",
            ),
            c(
              "Which connected form shows place assimilation in not quite?",
              ["/nɒt ˈkwaɪt/", "/nɒk ˈkwaɪt/", "/nɒɡ ˈkwaɪt/"],
              1,
              "The /t/ commonly assimilates to /k/ before /k/, while retaining the vowel /ɒ/.",
              "Both consonants close at the back of the mouth.",
            ),
            c(
              "Which phrase commonly allows t/d elision?",
              ["see me", "go now", "next day"],
              2,
              "Next day often becomes /neks ˈdeɪ/ in fluent speech. The /t/ is omitted before /d/.",
              "Find two alveolar stops together.",
            ),
            c(
              "Why is it useful to practise the full form before the reduced one?",
              ["Reduced forms are never allowed", "It establishes the sounds and grammar endings that reduction may hide", "It makes every word stressed"],
              1,
              "A reliable full form gives you control. You can then reduce selectively according to speed and context.",
              "Accuracy first, fluency second.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Smooth the joins",
          instructions:
            "Speak each phrase slowly, then twice at a conversational speed. Listen for an inserted vowel or an accidental pause.",
          items: [
            p(
              "Link: check it, answer it, far away, more information, later on.",
              "Model: check‿it /ˌtʃek‿ɪt/, answer‿it /ˈɑːnsər‿ɪt/, far‿away /fɑːr‿əˈweɪ/, more‿information /mɔːr‿ɪnfəˈmeɪʃn/, later‿on /ˈleɪtər‿ɒn/.",
              "Let the consonant release directly into the vowel.",
            ),
            p(
              "Assimilate: not quite, that person, good morning; then elide in next day and used to.",
              "Model: /nɒk ˈkwaɪt/, /ðæp ˈpɜːsən/, /ɡʊm ˈmɔːnɪŋ/, /neks ˈdeɪ/, /juːstə/. Keep each stressed vowel recognisable.",
              "Compare with the careful spellings aloud.",
            ),
            p(
              "Read: Please check it against the original and send me more information later on.",
              "Link check‿it, send‿me and more‿information. In a measured professional version, you may keep every consonant rather than eliding aggressively.",
              "Pause after original, not inside the linked phrase.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Do not chase speed",
          text: "Use linking to make speech flow, not to fit in as many words as possible. If a listener asks you to repeat a phrase, restore the full consonants and add a thought-group boundary.",
        },
      ],
      quiz: [
        q(1, "Which phrase best demonstrates consonant–vowel linking?", ["fixed price", "check it", "next day"], 1, "In check it, final /k/ releases directly into the following vowel."),
        q(2, "What is a common realisation of not quite?", ["/nɒk ˈkwaɪt/", "/nɒt ˈkwɒt/", "/nɒɡ ˈkaɪt/"], 0, "The /t/ assimilates to the following /k/."),
        q(3, "Which sound is commonly elided in next day?", ["/n/", "/e/", "/t/"], 2, "The /t/ in next may be omitted before /d/ in fluent speech."),
        q(4, "When should you favour fuller articulation?", ["When speaking very quickly", "When the listener or situation needs extra support", "Whenever a word ends in a consonant"], 1, "Careful, complete forms are useful in noisy settings, dictation and unfamiliar technical contexts."),
      ],
    },
    {
      slug: "pausing-and-thought-groups",
      title: "Pausing and thought groups",
      summary:
        "Divide complex sentences at meaningful boundaries, use brief pauses to aid processing and avoid breaking tightly connected phrases.",
      objective:
        "Mark thought groups around sense units, distinguish a holding pause from a closing pause and place boundaries that support rather than fragment meaning.",
      minutes: 30,
      blocks: [
        {
          type: "sound",
          title: "Let the boundary sound complete",
          sound: "Final stops /p/, /t/ and /k/ before a pause",
          guidance:
            "A thought-group boundary is often heard through a completed final consonant and a pitch movement, not only through silence. At a brief pause, you may release /p t k/ lightly. Do not insert schwa after the stop or drag the preceding vowel to fill the silence.",
          words: [
            { word: "update", respelling: "/ʌpˈdeɪt/", example: "Here is the update." },
            { word: "decided", respelling: "/dɪˈsaɪdɪd/", example: "We decided on Tuesday." },
            { word: "stopped", respelling: "/stɒpt/", example: "The service stopped at midnight." },
            { word: "complete", respelling: "/kəmˈpliːt/", example: "The first stage is complete." },
            { word: "group", respelling: "/ɡruːp/", example: "One group presented its findings." },
            { word: "next", respelling: "/nekst/", example: "Next, we will consider the budget." },
          ],
        },
        {
          type: "table",
          title: "Mark sense, not punctuation alone",
          columns: ["Mark", "Meaning", "Annotated example", "Delivery cue"],
          rows: [
            ["|", "short boundary within an unfinished thought", "After the consultation | the team reviewed the responses.", "Hold pitch slightly; do not imply completion"],
            ["//", "completed thought or major shift", "The first trial succeeded. // The second failed.", "Let pitch fall and take a brief breath"],
            ["No mark", "close grammatical connection", "the revised proposal for the autumn intake", "Keep the phrase together"],
            ["//", "new topic or speaker", "That covers the costs. // Now, what about timing?", "Reset pitch and slow slightly"],
          ],
          caption:
            "A comma does not always require a pause, and a long unpunctuated sentence may need more than one thought group.",
        },
        {
          type: "text",
          title: "Pause to help the listener think",
          paragraphs: [
            "A thought group is a chunk that expresses one manageable idea. Boundaries commonly occur before a new clause, after a fronted time expression or between a condition and its result. Avoid separating a verb from its object or a preposition from its complement unless you have a deliberate reason.",
            "Use | for a continuation and // for completion while planning. In speech, the distinction is carried mainly by pitch, duration and the final consonant; a literal stopwatch is unnecessary. A short boundary may last only a fraction of a second.",
            "Pauses are especially valuable before a number, a name or an unexpected conclusion. They create anticipation. Used randomly, however, they make each fragment sound equally important and force the listener to reconstruct the sentence.",
          ],
        },
        {
          type: "exercise",
          title: "Place the boundary",
          instructions: "Choose the version with the most useful thought-group organisation.",
          items: [
            c(
              "Where is the most natural boundary in Although the figures were incomplete the trend was clear?",
              ["Although // the figures were incomplete // the trend was clear.", "Although the figures // were incomplete the trend was clear.", "Although the figures were incomplete | the trend was clear."],
              2,
              "The subordinate clause can form a holding group, followed by the main clause. The subject and verb should remain together.",
              "Keep the dependent clause as one planning unit.",
            ),
            c(
              "What usually signals completion at a major boundary?",
              ["A rise on the final content word only", "A falling pitch movement plus a completed final consonant", "An added vowel after the last word"],
              1,
              "Pitch and final articulation work together. A pause alone does not communicate the same structure.",
              "Listen to the end of a confident full stop.",
            ),
            c(
              "Which phrase is least likely to need an internal pause?",
              ["the revised proposal for the autumn intake", "the three main findings | were as follows", "the report is ready // now we can begin"],
              0,
              "This noun phrase has a tight head and prepositional complement. The other examples contain meaningful clause or topic boundaries.",
              "Keep words belonging to one concept together.",
            ),
            c(
              "Why pause before an important figure?",
              ["It always makes the number slower to understand", "It prepares the listener and separates the setup from the key information", "It replaces the need for clear digit grouping"],
              1,
              "A brief anticipatory pause can focus attention. Digits and units still need precise articulation.",
              "Use silence for orientation, not decoration.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Chunk a demanding update",
          instructions:
            "Mark boundaries first, then record the update. Compare a version with a pause after every three or four words.",
          items: [
            p(
              "Chunk: Although the response rate was lower than expected, the comments gave us a clear direction for the next revision.",
              "One model: Although the response RATE was LOWER than exPECted | the COMMENTS gave us a clear diRECtion for the next reVIsion.",
              "Use a holding boundary after expected.",
            ),
            p(
              "Chunk: The revised budget will be circulated on Friday. After that, each team will have five working days to respond.",
              "Use // after Friday and a shorter boundary after After that. Keep have five working days together so the deadline is heard as one unit.",
              "Give Friday and five working days careful length.",
            ),
            p(
              "Prepare a 20-second update about your work with one | and two // marks.",
              "A useful structure is one main point | one supporting detail // one next step. Speak it without looking at the punctuation after your second attempt.",
              "Pause length may be short; the pitch intention must remain.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Breathe at ideas",
          text: "Plan breath points alongside thought groups. If you run out of air before the end of a group, shorten the wording or move the boundary rather than squeezing the final words into one breath.",
        },
      ],
      quiz: [
        q(1, "What does | represent in the lesson’s notation?", ["A completed thought", "A holding boundary within a thought", "A missing consonant"], 1, "The single bar marks a continuation rather than full completion."),
        q(2, "Which grouping keeps the syntax most intact?", ["the revised | proposal for autumn", "the revised proposal | for autumn", "the revised proposal for autumn"], 2, "The noun phrase and its complement are best kept as one unit."),
        q(3, "What commonly accompanies a major closing boundary?", ["Falling pitch and completed articulation", "A random rise in volume", "An inserted schwa"], 0, "A falling contour and clear completion help signal that the thought has ended."),
        q(4, "Why are random pauses unhelpful?", ["They make all fragments sound important and obscure the sentence’s hierarchy", "They eliminate word stress", "They always speed speech up"], 0, "Meaningful boundaries show structure; frequent arbitrary pauses flatten it."),
      ],
    },
  ],
};
