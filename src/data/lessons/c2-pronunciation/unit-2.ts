import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2PronunciationUnit2: LessonUnit = {
  title: "Prosodic control",
  description:
    "Shape extended speech through precise thought groups, tone-unit architecture, strategic emphasis and public-facing intonation.",
  lessons: [
    {
      slug: "thought-groups-and-information-focus",
      title: "Thought groups and information focus",
      summary:
        "Design extended utterances around given and new information, placing boundaries and nuclei so that complex reasoning stays easy to follow.",
      objective:
        "Segment a multi-clause explanation, distinguish broad from narrow focus and use pitch reset and pause to signal hierarchy.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Let the final consonant frame the group",
          sound: "Final /t/, /d/ and /s/ at thought-group boundaries",
          guidance:
            "At a thought-group boundary, complete the final consonant before moving into the next idea. A slight pitch continuation can hold the floor; a fall can close the unit. Do not insert a full pause at every boundary, and do not let the final /s/ disappear when it marks a plural.",
          words: [
            { word: "first", respelling: "/fɜːst/", example: "First, the trial measured completion." },
            { word: "results", respelling: "/rɪˈzʌlts/", example: "The results showed a clear difference." },
            { word: "second", respelling: "/ˈsekənd/", example: "Second, we tested the revised process." },
            { word: "decided", respelling: "/dɪˈsaɪdɪd/", example: "We decided to extend the trial." },
            { word: "risks", respelling: "/rɪsks/", example: "The risks were manageable but not absent." },
            { word: "next", respelling: "/nekst/", example: "Next, I will explain the recommendation." },
          ],
        },
        {
          type: "table",
          title: "Build an information arc",
          columns: ["Function", "Example", "Focus choice", "Boundary"],
          rows: [
            ["Given information", "The pilot involved eighty users.", "lighter reference to pilot", "short holding boundary"],
            ["New information", "Completion rose to seventy-two per cent.", "main nucleus on seventy-two per cent", "brief processing pause"],
            ["Contrast", "The original process reached only fifty-eight per cent.", "nucleus on fifty-eight", "rise over the comparison"],
            ["Qualification", "The sample was small, however.", "nucleus on small", "holding fall-rise"],
            ["Implication", "We need a longer trial.", "nucleus on longer trial", "closing fall"],
          ],
          caption:
            "Information structure is not fixed by word order. Context determines what the listener already knows and what is newly asserted.",
        },
        {
          type: "text",
          title: "Connect reasoning through sound",
          paragraphs: [
            "Extended speech becomes difficult when every clause is delivered as an isolated sentence. Use pitch reset at the start of a new unit, a clear nucleus near the new information and a boundary that signals whether the argument continues or closes.",
            "A fronted expression such as After the first trial often forms its own thought group: After the first trial | completion improved. This separation highlights the time frame. Keep tightly bound structures, such as a noun plus its prepositional complement, together unless you intend a special effect.",
            "Contrast needs explicit sound support. In the revised process, not the original, stress the contrasting adjectives and use parallel rhythm on the two options. Without that pattern, listeners may hear two facts rather than a comparison.",
          ],
        },
        {
          type: "exercise",
          title: "Design the information flow",
          instructions: "Choose the focus and boundary pattern that best supports the reasoning.",
          items: [
            c(
              "The listener already knows the pilot used eighty users. What is new?",
              ["The pilot existed.", "Completion rose to seventy-two per cent.", "Users were people."],
              1,
              "The new information is the completion figure. Earlier given material should receive lighter prominence.",
              "Contrast given context with the new claim.",
            ),
            c(
              "Which grouping best highlights the time frame in After the first trial completion improved?",
              ["After the first trial | completion improved.", "After the first | trial completion improved.", "After | the | first | trial | completion improved."],
              0,
              "The fronted time expression can form a holding group, followed by the main clause.",
              "Keep the main subject and verb together.",
            ),
            c(
              "How should the revised process, not the original be contrasted?",
              ["Stress every syllable equally", "Whisper both adjectives", "Stress revised and original with parallel rhythm"],
              2,
              "Contrastive prominence on the competing adjectives makes the comparison explicit.",
              "Make the alternatives easy to compare.",
            ),
            c(
              "What does pitch reset help signal?",
              ["A new thought group or section", "A missing consonant", "A change in word spelling"],
              0,
              "A reset in the pitch starting point helps listeners perceive a new prosodic unit.",
              "Use it with a meaningful boundary.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a three-unit explanation",
          instructions:
            "Mark given information in grey or brackets, new information with capitals and boundaries with | or //.",
          items: [
            p(
              "Organise: The pilot involved eighty users. Completion rose to seventy-two per cent. The original process reached fifty-eight per cent.",
              "Model: The pilot involved eighty USERS | completion rose to seventy-two per CENT. // The original process reached only fifty-eight per cent. Keep a lighter beat on pilot and a clear contrast on the two figures.",
              "Pause briefly before the original comparison.",
            ),
            p(
              "Organise a qualification after a positive result.",
              "Model: The result is encouraging | although the SAMPLE was small. // We need a longer trial. Let the fall-rise on encouraging or small lead into the limitation.",
              "Do not bury the caveat in a fast final phrase.",
            ),
            p(
              "Explain a process from your work in three thought groups: context, finding and implication.",
              "Use one main nucleus per group, a holding boundary after context and a closing fall after implication. Ask a listener to identify the three stages without seeing your notes.",
              "Keep each group to one manageable idea.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Make the hierarchy audible",
          text: "Listeners should be able to tell which information supports the main point and which information changes the conclusion. Thought-group design makes that hierarchy audible before the words are fully processed.",
        },
      ],
      quiz: [
        q(1, "What usually receives broad main prominence?", ["Every function word", "New information near the end of a thought group", "Only the first syllable"], 1, "Broad focus commonly lands on the last important new item."),
        q(2, "Which grouping best presents a fronted time expression?", ["After the trial | completion improved.", "After | the | trial | completion improved.", "After the trial completion | improved."], 0, "The time expression can stand as a holding unit before the main clause."),
        q(3, "What makes a contrast explicit?", ["Equal stress on all words", "A pause after every word", "Prominence and parallel rhythm on the alternatives"], 2, "The alternatives need an audible comparative pattern."),
        q(4, "What can pitch reset signal?", ["A new prosodic unit", "A new spelling", "A missing plural"], 0, "Resetting pitch helps mark the beginning of a new thought group or section."),
      ],
    },
    {
      slug: "tone-units-in-extended-speech",
      title: "Tone units in extended speech",
      summary:
        "Control the onset, head, nucleus and tail of tone units across long presentations, linking local contours into a coherent prosodic architecture.",
      objective:
        "Identify tone-unit components and coordinate continuation, contrast and completion contours over multi-sentence speech.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Hear the nucleus within the unit",
          sound: "Nucleus pitch movement on /iː/ and /eɪ/",
          guidance:
            "A tone unit can be described by its starting pitch and an optional pre-head, head and tail around a nucleus. The nucleus is the syllable where the pitch movement becomes salient. Keep the vowel stable through the contour: team /tiːm/ and date /deɪt/ must not turn into glides because the pitch moves.",
          words: [
            { word: "team", respelling: "/tiːm/", example: "Our team will lead the second phase." },
            { word: "date", respelling: "/deɪt/", example: "The date remains provisional." },
            { word: "change", respelling: "/tʃeɪndʒ/", example: "The change affects two services." },
            { word: "main", respelling: "/meɪn/", example: "The main finding concerns retention." },
            { word: "key", respelling: "/kiː/", example: "The key issue is timing." },
            { word: "three", respelling: "/θriː/", example: "Three sites joined the second trial." },
          ],
        },
        {
          type: "table",
          title: "Anatomy of a tone unit",
          columns: ["Part", "Function", "Example in the KEY FINDing was CLEAR"],
          rows: [
            ["Starting pitch", "the pitch level at which the unit begins", "the pitch on the initial the"],
            ["Pre-head", "unstressed syllables before the first prominent beat", "the"],
            ["Head", "sequence from the first stressed syllable up to the nucleus", "KEY FINDing was"],
            ["Nucleus", "main pitch movement and information focus", "CLEAR"],
            ["Tail", "syllables after the nucleus", "none in this example"],
          ],
          caption:
            "Not every tone unit contains every component. The framework describes a hierarchy of prominence, not a fixed number of syllables.",
        },
        {
          type: "text",
          title: "Think beyond the sentence",
          paragraphs: [
            "A sentence boundary and a tone-unit boundary do not always coincide. A long sentence may contain several tone units, while a short response may carry one contour across its entire wording. Plan units around information and interaction rather than punctuation alone.",
            "Continuation contours can keep a list or argument open. For the final item, shift to a closing contour so that listeners hear the structure end. In multi-step explanations, a slight pitch reset after each unit creates orientation without making the delivery choppy.",
            "The tail deserves attention. Once the nucleus has moved, the remaining syllables still need accurate vowels, stress and endings. Avoid letting the pitch movement pull the final consonants upward, downward or into an unintended extra syllable.",
          ],
        },
        {
          type: "exercise",
          title: "Analyse the tone unit",
          instructions: "Choose the correct component or prosodic plan.",
          items: [
            c(
              "In the KEY FINDing was CLEAR, which syllable is the nucleus?",
              ["KEY", "FIND", "CLEAR"],
              2,
              "Clear carries the main pitch movement and broad focus in this context.",
              "Look for the final information-bearing prominence.",
            ),
            c(
              "What is the head of the tone unit?",
              ["Only the unstressed first word", "The sequence of stressed syllables leading to the nucleus", "Every syllable after the nucleus"],
              1,
              "The head runs from the first stressed syllable to the syllable before the nucleus.",
              "It is a span, not a single syllable.",
            ),
            c(
              "How should the last item in a spoken list usually differ?",
              ["It receives a closing contour rather than a continuation", "It becomes whispered", "It loses all stress"],
              0,
              "A closing contour signals completion; earlier items often use continuation.",
              "Make the list ending audible.",
            ),
            c(
              "Why plan tone units inside long sentences?",
              ["Every sentence can contain only one unit", "Listeners need manageable units of information", "Punctuation forbids internal boundaries"],
              1,
              "Complex sentences often require several prosodic units to remain easy to process.",
              "Organise by meaning, not sentence length.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Map an extended explanation",
          instructions:
            "Use vertical bars for tone-unit boundaries, capital letters for the nucleus and arrows for the intended contour.",
          items: [
            p(
              "Map: The key finding was clear: the revised process reduced onboarding time.",
              "Model: the KEY FINDing was CLEAR → | the reVISED process reduced onboarding TIME ↘. The first unit holds the setup; the second closes the claim.",
              "Keep the vowel in time stable through the fall.",
            ),
            p(
              "Map a three-item list: shorter queues, clearer guidance and fewer errors.",
              "Model: SHORTer QUEUES → | CLEARer GUIDance → | FEWer ERRors ↘. Use a continuation contour on the first two nuclei and a closing fall on the last.",
              "Reset the pitch slightly at each item.",
            ),
            p(
              "Deliver a two-sentence explanation with three tone units and identify each component.",
              "One possible plan is a short pre-head, a head leading to the main nucleus and a tail before the boundary. Speak the whole explanation without tapping after marking it.",
              "Record and check whether the list or sequence ending is clear.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Keep the tail intact",
          text: "A beautiful nucleus will not rescue a mumbled ending. After marking the pitch movement, rehearse the tail separately and then restore it to the whole tone unit.",
        },
      ],
      quiz: [
        q(1, "Where is the nucleus in the KEY FINDing was CLEAR?", ["KEY", "FIND", "CLEAR"], 2, "Clear is the main information focus and carries the pitch movement."),
        q(2, "What does the head contain?", ["Syllables after the nucleus", "Stressed syllables leading to the nucleus", "Only pauses"], 1, "The head extends from the first stressed syllable to just before the nucleus."),
        q(3, "How can the end of a list be signalled?", ["With a closing contour", "By whispering", "By deleting stress"], 0, "A closing contour distinguishes the final item from continuing items."),
        q(4, "What must remain clear after the nucleus?", ["Only the onset", "The tail’s vowels, stress and endings", "Nothing"], 1, "The tail still contributes words and grammatical information."),
      ],
    },
    {
      slug: "emphasis-contrast-and-implication",
      title: "Emphasis, contrast and implication",
      summary:
        "Use emphatic auxiliaries, corrective stress and fall-rise implication to negotiate fine differences in stance without sounding combative.",
      objective:
        "Distinguish emphatic, contrastive and corrective prominence, then use fall-rise contours to imply reservations or shared assumptions.",
      minutes: 30,
      blocks: [
        {
          type: "sound",
          title: "Give the auxiliary its strong form",
          sound: "Strong auxiliary vowels and fall-rise implication",
          guidance:
            "For emphatic do in I DO agree, use a clear strong form rather than the weak /də/. Keep the vowel stable and let the following verb receive a lighter beat. For implication, move from a fall to a rise on the nucleus without breaking the word or adding a pause inside it.",
          words: [
            { word: "do", respelling: "/duː/ strong; /də/ weak", example: "I do agree with the main conclusion." },
            { word: "does", respelling: "/dʌz/ strong; /dəz/ weak", example: "It does depend on the final figures." },
            { word: "can", respelling: "/kæn/ strong; /kən/ weak", example: "We can meet the revised deadline." },
            { word: "will", respelling: "/wɪl/ strong; /l/ weak", example: "We will review the decision tomorrow." },
            { word: "possible", respelling: "/ˈpɒsəbl/", example: "That is possible, but not yet confirmed." },
            { word: "enough", respelling: "/ɪˈnʌf/", example: "We have enough evidence to continue." },
          ],
        },
        {
          type: "table",
          title: "Three kinds of deliberate prominence",
          columns: ["Type", "Example", "Communicative job", "Risk if overused"],
          rows: [
            ["Emphatic", "We DO support the proposal.", "counter doubt or assert commitment", "sounds confrontational"],
            ["Contrastive", "I said TUESday, not Wednesday.", "separate alternatives", "makes every exchange feel corrective"],
            ["Corrective", "The total is FIFteen, not fifty.", "repair a factual error", "may embarrass if delivered aggressively"],
            ["Fall-rise implication", "The RESULT is promising. ↘↗", "signal an unstated qualification", "can sound evasive if habitual"],
            ["Echo stress", "MONDAY? I thought it was Tuesday.", "check or question what was heard", "can sound incredulous"],
          ],
          caption:
            "Use lexical precision and a calm pitch range alongside stress. The same prominent word can signal confidence or challenge depending on delivery and context.",
        },
        {
          type: "text",
          title: "Implication is a shared tool",
          paragraphs: [
            "A fall-rise often implies a contrast that is not fully stated. The result is promising ↘↗ can suggest that the cost or the sample is less promising. Because the qualification remains implicit, the listener must infer it from context.",
            "Use implication when the relationship with the listener supports inference. In a high-stakes legal, medical or technical clarification, it is usually safer to state the limitation directly. Polished speech includes knowing when not to make the listener work.",
            "Echo stress repeats or highlights material from another speaker. It can check understanding, express surprise or challenge an assumption. Keep it brief and follow with a specific question if you genuinely need clarification.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the stance",
          instructions: "Select the prominence or contour that best fits the interaction.",
          items: [
            c(
              "A colleague doubts your support for the proposal.",
              ["We support it.", "We DO support the proposal.", "We possibly support something."],
              1,
              "Emphatic do directly counters doubt while keeping the statement concise.",
              "Use the strong auxiliary form.",
            ),
            c(
              "Someone misheard the total as fifty.",
              ["The total is FIFteen, not fifty.", "The total is probably later.", "The total is fifty."],
              0,
              "Corrective stress on fifteen identifies and repairs the factual error.",
              "Keep the two numbers clearly contrasted.",
            ),
            c(
              "You want to imply a concern without interrupting the discussion.",
              ["The result is promising. ↘", "The result is promising. ↗↘", "The result is promising. ↘↗"],
              2,
              "A fall-rise can signal a reservation that can be developed if the listener responds.",
              "Let the contour invite continuation.",
            ),
            c(
              "When is stating a limitation directly preferable to implication?",
              ["When precision is essential and misunderstanding would be costly", "Whenever you want to sound mysterious", "Only when speaking quietly"],
              0,
              "High-stakes clarification benefits from explicit language rather than inference.",
              "Choose directness when the stakes are high.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise stance without heat",
          instructions:
            "Use a calm pitch range and clear vowels. Ask a listener whether the intended stance was recognisable.",
          items: [
            p(
              "Say We do agree, but we cannot approve the current timetable.",
              "Stress DO lightly and use a boundary before but. Keep agree clear, then give cannot or timetable the main focus according to the most important point.",
              "Do not turn emphatic do into a challenge.",
            ),
            p(
              "Correct: I said the meeting was on Thursday, not Tuesday.",
              "Give THURSday narrow prominence and a lighter, shorter Tuesday. Preserve the final /z/ in was and the initial /θ/ in Thursday.",
              "Use a specific, neutral correction.",
            ),
            p(
              "Say The sample is large enough, then repeat with a fall-rise on enough to imply a reservation.",
              "The fall-rise suggests that another feature, such as representativeness, may be less satisfactory. Follow with the actual concern if your listener does not infer it.",
              "Record both versions and compare the stance.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Implication needs a listener",
          text: "A fall-rise works only when the listener has enough context to infer the qualification. If two reasonable listeners understand different things, make the point explicit.",
        },
      ],
      quiz: [
        q(1, "What does emphatic DO add in We do agree?", ["A past-tense meaning", "Commitment that counters doubt", "A request for more time"], 1, "Prominent do asserts the proposition more forcefully."),
        q(2, "Which stress best corrects a misheard day?", ["THURSday, not Tuesday", "The MEETing was on Thursday", "I said something"], 0, "The disputed word Thursday receives corrective prominence."),
        q(3, "What can a fall-rise imply?", ["A reservation or unstated contrast", "A guaranteed conclusion", "A change of topic only"], 0, "Fall-rise often leaves a qualification in play."),
        q(4, "When should you state a limitation explicitly?", ["Only in informal chat", "Whenever you want more pauses", "When misunderstanding would be costly"], 2, "High-stakes communication prioritises precision over suggestive indirectness."),
      ],
    },
    {
      slug: "intonation-in-public-speaking",
      title: "Intonation in public speaking",
      summary:
        "Build a persuasive intonation plan for openings, rhetorical questions, lists, pivots and closes while maintaining a natural vocal identity.",
      objective:
        "Use public-facing contours and pitch range to guide attention, frame rhetorical questions and land a memorable closing without over-performance.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Let the final key word carry the contour",
          sound: "Falling ↘, holding → and rhetorical-question contours",
          guidance:
            "A public closing often benefits from a clear fall on the final key phrase, not a forced drop to the bottom of your range. A rhetorical question may fall as if supplying the answer, while a genuine question may rise or use another contour. Keep the stressed vowel stable and complete the final consonant.",
          words: [
            { word: "question", respelling: "/ˈkwestʃən/", example: "The question is not whether, but when." },
            { word: "choice", respelling: "/tʃɔɪs/", example: "We have a choice about what happens next." },
            { word: "change", respelling: "/tʃeɪndʒ/", example: "Change begins with one clear decision." },
            { word: "today", respelling: "/təˈdeɪ/", example: "Today, we can take the first step." },
            { word: "together", respelling: "/təˈɡeðə/", example: "We can move forward together." },
            { word: "thank", respelling: "/θæŋk/", example: "Thank you for your attention." },
          ],
        },
        {
          type: "table",
          title: "An intonation plan for a talk",
          columns: ["Stage", "Prosodic choice", "Model", "Purpose"],
          rows: [
            ["Opening", "steady pace; clear first nucleus", "TODAY I’ll propose one change.", "establish the topic and direction"],
            ["Rhetorical question", "often falling or fall-rise, depending on stance", "What would success LOOK like? ↘", "frame an answer the speaker will supply"],
            ["List", "continuation, then closing fall", "FIRST → | SECOND → | THIRD ↘", "make the structure audible"],
            ["Pivot", "brief pause and pitch reset", "But there is a RISK. //", "signal a change in argument"],
            ["Closing", "slower, clear nucleus, comfortable fall", "Let’s take that STEP. ↘", "land the main message"],
          ],
          caption:
            "These are options, not scripts. Adjust to the room, your language variety and the relationship with the audience.",
        },
        {
          type: "text",
          title: "Persuasion without vocal theatre",
          paragraphs: [
            "Public intonation should make the argument easier to follow. Use a slightly wider pitch range than in casual conversation if it feels comfortable, but do not stretch every sentence into a dramatic arc. Contrast is meaningful only if some units are calmer.",
            "Rhetorical questions can unite an audience around an implied answer. A fall can sound confident that the answer is obvious; a rise can invite genuine reflection; a fall-rise can suggest a troubling possibility. Choose the attitude intentionally rather than applying one tune automatically.",
            "End with a short, memorable phrase and let the final pitch settle. Avoid adding several trailing sentences that weaken the close. Pause, make eye contact and allow the audience to respond before moving on.",
          ],
        },
        {
          type: "exercise",
          title: "Plan the public contour",
          instructions: "Choose the prosodic option that best serves the speech function.",
          items: [
            c(
              "You ask What would success look like? and immediately supply your answer.",
              ["A large rise that waits indefinitely", "A controlled fall or fall-rise that frames your own answer", "A whisper"],
              1,
              "The contour can signal that the speaker is supplying or developing the answer rather than waiting for the room.",
              "Match the question to the interaction.",
            ),
            c(
              "How should a three-item public list normally end?",
              ["With a closing contour on the last item", "With the same continuation as every previous item", "With no prominence"],
              0,
              "The final item needs audible completion, while earlier items can continue.",
              "Make the end of the list unmistakable.",
            ),
            c(
              "What is a useful pivot into a risk section?",
              ["A brief pause and pitch reset", "A faster rush through the whole section", "A random scream"],
              0,
              "The boundary and reset prepare listeners for a change in the argument.",
              "Signal the change before the detail.",
            ),
            c(
              "Which closing is likely to be most memorable?",
              ["Several unrelated afterthoughts", "A very long list of names", "A short key phrase with a clear nucleus and comfortable fall"],
              2,
              "Economy and a clear prosodic landing point help the message stay in memory.",
              "End on the point, not on trailing detail.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rehearse a public arc",
          instructions:
            "Mark the five stages of a short talk. Rehearse once seated and once standing if comfortable and safe.",
          items: [
            p(
              "Open with: Today, I’ll propose one change. Then ask What would success look like?",
              "Give TODAY or CHANGE a clear but restrained nucleus. Let the rhetorical question frame the answer you will supply; do not wait for audience input unless you intend a real exchange.",
              "Start steadily rather than at maximum energy.",
            ),
            p(
              "Deliver a list and a pivot: Faster access, clearer guidance and fewer errors. But there is a risk.",
              "Use continuations on access and guidance, close the list on errors, then pause and reset before risk. Keep the risk sentence slower than the list.",
              "Record whether the pivot is audible without looking at the page.",
            ),
            p(
              "Close with: The next step is simple. Let’s take it together.",
              "Give SIMple a clear nucleus, pause briefly, then land together with a comfortable fall. Avoid adding another summary unless the audience needs one.",
              "Finish the final consonant and allow silence.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Borrow structure, not personality",
          text: "Study how effective speakers organise attention and close a talk, then express that structure through your own pitch range and rhythm. Imitating someone else’s vocal identity is unnecessary.",
        },
      ],
      quiz: [
        q(1, "What can a rhetorical-question contour signal?", ["That the speaker will supply the answer", "That the recording has stopped", "That the word is misspelled"], 0, "The contour can frame the speaker’s own forthcoming answer."),
        q(2, "How should the last item of a public list be delivered?", ["With no stress", "With audible completion", "With a random pause inside the word"], 1, "A closing contour distinguishes the final item from continuations."),
        q(3, "What supports a clear pivot?", ["Rushing", "A brief boundary and pitch reset", "Deleting final consonants"], 1, "Listeners need an audible signal that the argument is changing."),
        q(4, "What makes a strong closing?", ["Many unrelated afterthoughts", "The widest possible pitch jump", "A concise key phrase with a clear landing point"], 2, "Focus and controlled finality make the message memorable."),
      ],
    },
  ],
};
