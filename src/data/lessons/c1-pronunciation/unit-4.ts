import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1PronunciationUnit4: LessonUnit = {
  title: "Your accent in action",
  description:
    "Use recording, listener feedback and purposeful rehearsal to make your pronunciation dependable in professional settings.",
  lessons: [
    {
      slug: "recording-and-self-assessment",
      title: "Recording and self-assessment",
      summary:
        "Capture a comparable baseline, separate listening passes for sound and meaning, and turn observations into one measurable practice goal.",
      objective:
        "Record and analyse a 60–90 second sample using a repeatable setup and produce an evidence-based action plan for your next rehearsal.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Check the recording signal",
          sound: "Final /s/, /z/, /t/ and /d/ in a baseline sample",
          guidance:
            "A microphone cannot recover consonants that are too weak or clipped by distortion. Keep a stable distance, speak slightly off-axis if plosives pop, and finish /s z t d/ clearly. Distinguish an actual speech habit from a recording fault by comparing a second take under the same conditions.",
          words: [
            { word: "results", respelling: "/rɪˈzʌlts/", example: "The results were published on Tuesday." },
            { word: "requests", respelling: "/rɪˈkwests/", example: "We received three requests for copies." },
            { word: "decided", respelling: "/dɪˈsaɪdɪd/", example: "The panel decided after a long discussion." },
            { word: "confirmed", respelling: "/kənˈfɜːmd/", example: "The supplier confirmed the delivery date." },
            { word: "next", respelling: "/nekst/", example: "Next, I will outline the recommendations." },
            { word: "projects", respelling: "/ˈprɒdʒekts/", example: "Two projects are entering the final stage." },
          ],
        },
        {
          type: "table",
          title: "Use separate listening passes",
          columns: ["Pass", "Listen for", "Evidence to note"],
          rows: [
            ["1. Meaning", "main point, logic and listener effort", "one-sentence summary; any point of confusion"],
            ["2. Segments", "vowels, consonants and word endings", "word plus position; not a general judgement"],
            ["3. Stress and rhythm", "word stress, weak forms and prominence", "where the expected beat was lost"],
            ["4. Tone and pace", "thought groups, contours and rate", "pause location; rushed or incomplete phrase"],
            ["5. Comparison", "what changed between takes", "one improvement and one remaining issue"],
          ],
          caption:
            "The site provides playback models but does not record or score your voice. Use your device’s recorder or an agreed external tool.",
        },
        {
          type: "text",
          title: "Create a fair baseline",
          paragraphs: [
            "Choose a 60–90 second professional update that you would genuinely say. Use the same device, position and room for each recording, and label files by date and target. A transcript makes comparison more objective because you can mark exactly which words and boundaries were affected.",
            "Do not play the whole recording repeatedly looking for faults. Make one pass for overall meaning, then targeted passes. Write observations such as final /t/ missing in next or pause inside revised proposal, rather than labels such as bad accent.",
            "Select one high-impact target. For example: In the next two rehearsals, I will keep final /t/ and /s/ audible before a pause in 80 per cent of marked words. Then compare a fresh recording, not an old memory of your voice.",
          ],
        },
        {
          type: "exercise",
          title: "Interpret the evidence",
          instructions: "Choose the most useful response to each recording observation.",
          items: [
            c(
              "Every plosive pops in the recording.",
              ["Assume your consonants are wrong", "Reduce distortion with a stable off-axis mic position and retest", "Delete the plosives from your speech"],
              1,
              "Popping is often a recording problem. Fix the setup before drawing conclusions about articulation.",
              "Change one recording variable first.",
            ),
            c(
              "Which note is most actionable?",
              ["My accent sounds strange", "Final /t/ disappeared in next and update before pauses", "I need better English"],
              1,
              "The second note identifies the sound, word position and boundary, making focused practice possible.",
              "Name the word and context.",
            ),
            c(
              "What is the purpose of the meaning-first pass?",
              ["To assess whether the listener can recover the message", "To transcribe every sound", "To count syllables"],
              0,
              "Overall intelligibility and structure should be assessed before individual sound detail.",
              "Can another person summarise your point?",
            ),
            c(
              "Which is the best practice target?",
              ["Improve everything at once", "Speak faster tomorrow", "Preserve final /s/ before pauses in three marked sentences"],
              2,
              "A specific, observable target can be practised and compared across takes.",
              "Limit the number of variables.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Record a useful baseline",
          instructions:
            "Use your own recording device. Allow time for setup and two takes; the site cannot store or assess the audio.",
          items: [
            p(
              "Record the same 45-second update twice with one minute between takes.",
              "Keep the wording, microphone position and pace similar. Note one difference caused by technique and one caused by speech.",
              "Label takes A and B.",
            ),
            p(
              "Complete the five listening passes and mark three exact moments.",
              "Example marks: next /nekst/ lost /t/ before a pause; requests /rɪˈkwests/ was clear; pause divided research proposal. Record evidence, not a global score.",
              "Use the transcript to locate each mark.",
            ),
            p(
              "Choose one target and plan two short rehearsals before recording take C.",
              "Example plan: keep final /s/ and /t/ in next, results and requests; rehearse each in a carrier phrase, then read the update once without tapping.",
              "Compare take C only with take B.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Protect your confidence",
          text: "Self-recording amplifies small differences that listeners may never notice. Use evidence to choose a goal, not to rank your worth as a speaker. Acknowledge one successful feature in every review.",
        },
      ],
      quiz: [
        q(1, "What should you do first if every plosive distorts?", ["Practise different vowels", "Correct the recording setup and retest", "Speak much louder"], 1, "Technical distortion must be separated from speech habits."),
        q(2, "Which is the most useful observation?", ["My voice is bad", "Final /t/ was missing in update before a pause", "I should lose my accent"], 1, "Specific evidence supports targeted change."),
        q(3, "Why use the same setup for comparison recordings?", ["To make differences easier to attribute to speech", "To make every recording sound identical", "To eliminate the need for listening"], 0, "Controlled conditions improve the fairness of the comparison."),
        q(4, "What does the lesson site provide?", ["Automatic voice scoring", "Private audio storage", "Playback models and written practice guidance"], 2, "The lesson can model words, but recording and assessment happen on your own device or with a listener."),
      ],
    },
    {
      slug: "clarity-in-professional-speech",
      title: "Clarity in professional speech",
      summary:
        "Deliver names, numbers, technical terms and recommendations with precise boundaries and enough redundancy for listeners to act.",
      objective:
        "Apply chunking, digit grouping, term stressing and confirmation phrases to make high-stakes professional information unambiguous.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Make the actionable detail land",
          sound: "Clear /iː/, /eɪ/ and final /t/ in key details",
          guidance:
            "Names, dates and quantities often carry the action. Keep /iː/ tense in team and /eɪ/ stable in date, then complete final /t/ before a pause. Slow the quantity, not the entire sentence, and give the listener a brief boundary to process the detail.",
          words: [
            { word: "team", respelling: "/tiːm/", example: "The team will own the next stage." },
            { word: "date", respelling: "/deɪt/", example: "The delivery date is still provisional." },
            { word: "eight", respelling: "/eɪt/", example: "Eight sites have already responded." },
            { word: "fifteen", respelling: "/ˌfɪfˈtiːn/", example: "Fifteen per cent of the sample changed." },
            { word: "deadline", respelling: "/ˈdedlaɪn/", example: "The deadline falls on Friday." },
            { word: "next", respelling: "/nekst/", example: "Next, I will confirm who is responsible." },
          ],
        },
        {
          type: "table",
          title: "Build in listener support",
          columns: ["Information", "Delivery strategy", "Model"],
          rows: [
            ["Name", "give the name, pause, spell or segment if needed", "Amira Khan. // A-M-I-R-A K-H-A-N."],
            ["Large number", "group digits and say the unit", "15,280 kilograms: fifteen thousand two hundred and eighty kilograms"],
            ["Date", "separate day, month and year", "the third of May, twenty twenty-six"],
            ["Technical term", "stress the word, then paraphrase", "redundancy: a backup, in other words"],
            ["Recommendation", "state action, owner and time", "Maya will send the revised figures by Thursday."],
          ],
          caption:
            "Redundancy helps listeners when audio is poor or English is an additional language. It is a professional strength when it is concise and purposeful.",
        },
        {
          type: "text",
          title: "Clarity is more than pronunciation",
          paragraphs: [
            "Professional clarity combines accurate sound with information design. Put the decision first, explain the essential reason and finish with the next action. A beautifully articulated sentence can still be unclear if it buries the request.",
            "Use signposts such as first, the key issue and to summarise with a slight pitch change and a short pause. Keep related names and numbers in one thought group, then stop long enough for the listener to note them.",
            "Check understanding without transferring all responsibility to the listener. Ask a specific question such as Does Thursday work for your team? rather than Do you understand? In international settings, avoid unexplained idioms and rapid slang.",
          ],
        },
        {
          type: "exercise",
          title: "Improve the professional message",
          instructions: "Choose the delivery that best combines precision and listener support.",
          items: [
            c(
              "How should you introduce an unfamiliar name?",
              ["Pause after it and offer spelling or segmentation if useful", "Say it very quickly once", "Spell every name even when familiar"],
              0,
              "A pause and optional spelling give the listener time and a second route to recognition.",
              "Offer support without assuming it is needed.",
            ),
            c(
              "Which delivery is easiest to note accurately?",
              ["fifteenthousandtwohundredeighty", "15,280 kilograms — fifteen thousand two hundred and eighty kilograms", "a lot of kilograms"],
              1,
              "The figure is grouped and repeated in words with its unit, reducing memory load.",
              "Quantity and unit belong together.",
            ),
            c(
              "What follows a concise recommendation most usefully?",
              ["A completely unrelated story", "A faster reading of the whole report", "The owner and deadline for the action"],
              2,
              "Action, owner and timing make the recommendation usable.",
              "Who will do what, and by when?",
            ),
            c(
              "Why paraphrase a technical term?",
              ["It proves the speaker is uncertain", "It gives listeners another route to meaning", "It removes the need for accurate stress"],
              1,
              "A brief explanation supports comprehension while the term itself still needs accurate pronunciation.",
              "Explain once, briefly and plainly.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Deliver an actionable update",
          instructions:
            "Prepare the content before rehearsing the voice. Keep the update under one minute and check whether a listener can repeat the action.",
          items: [
            p(
              "Introduce Amira Khan and the figure 15,280 kilograms in one short update.",
              "Model: Amira Khan will lead the review. // The sample weighs 15,280 kilograms — fifteen thousand two hundred and eighty kilograms. Offer the spelling only if needed.",
              "Pause after the name and after the figure.",
            ),
            p(
              "Explain redundancy and give one concise paraphrase.",
              "Model: redUNdancy means a backup system, so the service can continue if one part fails. Stress the term’s main syllable, then slow for the explanation.",
              "Avoid a long technical detour.",
            ),
            p(
              "Give a recommendation with an action, owner and deadline.",
              "Model: I recommend that Maya send the revised figures to the client by Thursday. // Does that timing work for your team? Keep Thursday clear and check the response genuinely.",
              "Finish with a specific confirmation question.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Design for repetition",
          text: "Repeat a key name, number or action once in a different form. Avoid repeating whole paragraphs; focused redundancy makes the message easier to act on and easier to remember.",
        },
      ],
      quiz: [
        q(1, "Which name delivery offers the most support?", ["Say it rapidly once", "Pause after it and offer spelling if useful", "Replace it with a pronoun immediately"], 1, "A pause plus optional spelling supports recognition."),
        q(2, "What should accompany a large quantity?", ["Digit grouping and the unit", "An unrelated anecdote", "A much louder voice"], 0, "Grouped digits and a clear unit make the figure easier to process and record."),
        q(3, "Which recommendation is most actionable?", ["We should probably do something", "Maya will send the figures by Thursday", "Everyone knows the plan"], 1, "It specifies an action, an owner and a deadline."),
        q(4, "What is a specific understanding check?", ["Do you understand?", "Is that clear enough?", "Does Thursday work for your team?"], 2, "A targeted question invites useful confirmation or correction."),
      ],
    },
    {
      slug: "adapting-delivery-to-an-audience",
      title: "Adapting delivery to an audience",
      summary:
        "Adjust explanation, pacing, formality and vocal energy for different listeners while retaining your own accent and core speaking identity.",
      objective:
        "Plan audience-specific versions of the same message and adapt stress, pace and interaction without exaggerating or stereotyping.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Keep key words recognisable",
          sound: "Stressed /ɜː/ and /ə/ in audience-aware speech",
          guidance:
            "When you simplify an explanation, do not distort the key term. Words such as service and purpose retain a clear stressed vowel, while function words can reduce. A non-rhotic model uses /ɜː/ without r-colouring before a pause; a rhotic accent keeps its own natural r quality.",
          words: [
            { word: "service", respelling: "/ˈsɜːvɪs/", example: "The service is designed for first-time users." },
            { word: "purpose", respelling: "/ˈpɜːpəs/", example: "The purpose of this change is simpler access." },
            { word: "learners", respelling: "/ˈlɜːnəz/", example: "Most learners prefer shorter practice sessions." },
            { word: "work", respelling: "/wɜːk/", example: "The system should work across devices." },
            { word: "confirm", respelling: "/kənˈfɜːm/", example: "Please confirm which option you prefer." },
            { word: "about", respelling: "/əˈbaʊt/", example: "We will talk about the next step." },
          ],
        },
        {
          type: "table",
          title: "Adapt the support, not the facts",
          columns: ["Audience", "Likely adjustment", "What remains constant"],
          rows: [
            ["Specialist colleagues", "denser terms; faster shared references", "accurate stress, key figures and clear conclusions"],
            ["General public", "plain vocabulary; one idea per group", "honest caveats and a visible next step"],
            ["Cross-cultural audience", "less idiom; deliberate checks; slightly measured pace", "respectful tone and precise facts"],
            ["Senior decision-makers", "recommendation first; shorter evidence", "clear owner, deadline and risk"],
            ["Large room or poor audio", "slower rate; fuller consonants; repeated key detail", "same core message and evidence"],
          ],
          caption:
            "Audience categories are starting points, not fixed personalities. Respond to the actual listeners and their feedback.",
        },
        {
          type: "text",
          title: "Flexibility without impersonation",
          paragraphs: [
            "Adaptation means changing how you package information: vocabulary, density, interaction and vocal energy. It does not require copying another person’s accent or pretending to have a different personality. Keep the sound system and prosodic features that make your speech intelligible and authentic.",
            "For a public audience, replace opaque abbreviations with a short explanation. For specialists, you can use the established term first and add only the qualification they need. In both cases, the main claim should be easy to locate.",
            "Watch the listener. If people lean in, nod or take notes, your pace may be working. If they stop writing, ask for repetition or respond to the wrong point, pause and check. Avoid assuming that silence means understanding or that an unfamiliar accent means low competence.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the adaptation",
          instructions: "Select the adjustment that best serves the audience and message.",
          items: [
            c(
              "You are explaining an API change to non-specialists.",
              ["Use the abbreviation without explanation", "Explain it as a way for systems to exchange information", "Add more technical acronyms"],
              1,
              "A brief plain-language explanation makes the concept accessible without changing the facts.",
              "Define the term once.",
            ),
            c(
              "Senior leaders have two minutes for your update.",
              ["Read every background detail", "Begin with the recommendation, main risk and requested decision", "Lower your voice so it sounds serious"],
              1,
              "Decision-focused ordering respects the time limit while preserving the essential evidence.",
              "Lead with what they need to decide.",
            ),
            c(
              "A listener from another language background looks confused by an idiom.",
              ["Replace it with a direct phrase and check the meaning", "Repeat the idiom louder", "Ask why they do not understand"],
              0,
              "A direct rephrase supports comprehension without blaming the listener.",
              "Adjust your language, not their competence.",
            ),
            c(
              "What should audience adaptation not require?",
              ["Changing information density", "Checking understanding", "Imitating a different accent"], 2,
              "Adapt delivery and explanation while retaining your identity. Accent impersonation is unnecessary.",
              "Flexibility is not performance of another person.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Create two audience versions",
          instructions:
            "Use the same factual core. Change only the explanation, pace, interaction and amount of detail.",
          items: [
            p(
              "Prepare one sentence about service reliability for specialists and one for the public.",
              "Specialist: We improved service reliability through redundant data pathways. Public: The service now has a backup connection, so it can keep running if one link fails.",
              "Keep the claim accurate in both versions.",
            ),
            p(
              "Adapt: The revised service is designed to reduce onboarding time by approximately fifteen per cent.",
              "For a public audience: The new service should reduce the time people need to get started by about fifteen per cent. Retain the qualifier should and the approximate figure.",
              "Do not turn an estimate into a guarantee.",
            ),
            p(
              "Give the same recommendation to a small team and a large room.",
              "Small team: invite a specific response after the recommendation. Large room: use a slightly slower rate, fuller final consonants and a repeated deadline. Keep the recommendation unchanged.",
              "Ask one listener in each setting to repeat the action.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Adapt from evidence",
          text: "After a talk, record one thing listeners understood easily and one thing they needed explained again. Use those observations to plan your next version instead of guessing what an audience wants.",
        },
      ],
      quiz: [
        q(1, "What should you change first for a non-specialist audience?", ["Your identity", "The explanation and vocabulary density", "Every vowel in your accent"], 1, "Plain explanation and manageable information density support comprehension."),
        q(2, "What belongs at the start of a short executive update?", ["The recommendation and decision needed", "A long personal introduction", "Every historical detail"], 0, "Decision-makers need the conclusion and request early."),
        q(3, "What is a useful response to confusion about an idiom?", ["Repeat it louder", "Continue without checking", "Rephrase directly and check meaning"], 2, "Direct language makes the intended meaning easier to recover."),
        q(4, "Which fact should remain constant across audience versions?", ["The exact evidence and honest caveats", "The speaking speed", "The number of technical terms"], 0, "Adaptation can change packaging, not factual accuracy."),
      ],
    },
    {
      slug: "a-polished-final-delivery",
      title: "A polished final delivery",
      summary:
        "Combine precise articulation, thought groups, focus and tone in a rehearsed three-minute professional presentation with a clear closing.",
      objective:
        "Plan, record and revise an integrated presentation using a delivery scorecard and a targeted final rehearsal.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Anchor the three-part message",
          sound: "Clear /iː/ and final /t/ in delivery landmarks",
          guidance:
            "Let the listener hear the structure through precise signposts and one main stress per thought group. Keep /iː/ in key and team stable and final /t/ in next complete before a pause. Do not colour every signpost equally; reserve your strongest contrast for the key recommendation.",
          words: [
            { word: "key", respelling: "/kiː/", example: "The key finding is a rise in retention." },
            { word: "team", respelling: "/tiːm/", example: "The team tested two versions." },
            { word: "next", respelling: "/nekst/", example: "Next, I will explain the recommendation." },
            { word: "result", respelling: "/rɪˈzʌlt/", example: "The result exceeded our target." },
            { word: "recommend", respelling: "/ˌrekəˈmend/", example: "I recommend extending the trial." },
            { word: "today", respelling: "/təˈdeɪ/", example: "Today, I will outline the next phase." },
          ],
        },
        {
          type: "passage",
          title: "A short presentation blueprint",
          paragraphs: [
            "Today, I’ll explain what our pilot achieved | and what I recommend next. // The team tested a shorter onboarding process with eighty new users. // The KEY finding was completion: seventy-two per cent finished the new process, compared with fifty-eight per cent in the original. // There is one important CAVEAT. The sample was small, and the trial ran for only two weeks. // I therefore recommend a longer trial with two additional sites. // By Friday, each site can confirm whether it is ready to take part. // That is the proposal. // Thank you. I welcome your questions.",
          ],
          glossary: [
            { term: "pilot", meaning: "a small initial test of an idea", example: "The pilot gave us early evidence." },
            { term: "onboarding", meaning: "the process of helping new users begin", example: "Shorter onboarding may improve completion." },
            { term: "caveat", meaning: "a warning or qualification", example: "The small sample is an important caveat." },
          ],
        },
        {
          type: "table",
          title: "Delivery scorecard",
          columns: ["Criterion", "What to mark", "Revision action"],
          rows: [
            ["Articulation", "unclear vowels; missing endings; distorted clusters", "repair the exact word in a carrier phrase"],
            ["Thought groups", "boundary inside a tight phrase; rushed long group", "move | or // and plan the breath"],
            ["Focus", "too many strong beats; key number not prominent", "mark one nucleus per group"],
            ["Tone", "uncertain ending; monotonous contour; forced enthusiasm", "choose a functional contour and comfortable range"],
            ["Pace and recovery", "rushed figures; abrupt restart", "pause before details; rephrase calmly"],
          ],
          caption:
            "Score each criterion as secure, developing or priority. Choose one priority for the final revision rather than rewriting the whole presentation.",
        },
        {
          type: "exercise",
          title: "Make final revisions",
          instructions: "Choose the most effective revision for each presentation problem.",
          items: [
            c(
              "The final rehearsal rushes the percentage.",
              ["Speak the whole opening faster", "Raise volume on every word", "Add a pause before the figure and group it clearly"],
              2,
              "A local pause and clear grouping protect the high-value detail without disrupting the rest of the talk.",
              "Change pace where the information requires it.",
            ),
            c(
              "Every sentence ends with the same fall.",
              ["Vary contours by function and use holding boundaries", "Remove all pitch movement", "Make every ending a large rise"],
              0,
              "Functional variation distinguishes lists, continuation, qualification and closure.",
              "Match contour to purpose.",
            ),
            c(
              "A technical term is unclear in the recording.",
              ["Ignore it if the slide contains the word", "Repair its stress and add a brief explanation", "Delete the whole section"],
              1,
              "The spoken term needs accuracy; a concise paraphrase gives listeners another route to meaning.",
              "Repair the word, then support it.",
            ),
            c(
              "What should guide the final rehearsal plan?",
              ["The longest possible practice session", "One priority criterion and a fresh comparison take", "Memorising every pause mechanically"],
              1,
              "A focused target and new recording provide evidence of improvement.",
              "Rehearse deliberately, then perform naturally.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rehearse and perform",
          instructions:
            "Use your own presentation material or the blueprint. Record the rehearsal and final version on separate devices or files.",
          items: [
            p(
              "Prepare a three-minute talk with an opening, three points, a caveat, a recommendation and a closing.",
              "Mark one nucleus per thought group, at least one holding boundary and a clear final fall. Keep the recommendation brief enough to remember.",
              "Prepare notes, not a word-for-word script.",
            ),
            p(
              "Record a rehearsal and complete the five-part scorecard.",
              "Identify one secure feature and one priority. Repair the exact word or boundary, then read only the affected section before another full take.",
              "Listen once for meaning before marking details.",
            ),
            p(
              "Deliver a final take without stopping, then compare it with the rehearsal.",
              "Check whether the target improved while the message stayed natural. Afterward, note the next single goal rather than reopening the whole scorecard.",
              "Success includes clarity, credibility and listener understanding.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Polish, do not freeze",
          text: "A polished delivery is prepared but responsive. Learn the structure and key phrases so that you can look up, respond to the room and recover naturally if a word does not come out as planned.",
        },
      ],
      quiz: [
        q(1, "What should each thought group usually have?", ["One main prominence", "Equal stress on every word", "A pause after every syllable"], 0, "A clear nucleus organises the information within the group."),
        q(2, "How should a key percentage be delivered?", ["As quickly as possible", "With a brief preparation, clear grouping and a stable unit", "Without the unit"], 1, "Focused pacing and a clear unit make the figure usable."),
        q(3, "What is the best final revision strategy?", ["Change every feature at once", "Choose one priority, rehearse it and compare a new take", "Avoid recording again"], 1, "Focused comparison shows what improved and protects the rest of the delivery."),
        q(4, "What makes a delivery polished rather than mechanical?", ["Identical pitch on every sentence", "Perfect memorisation with no eye contact", "Prepared structure combined with responsiveness and natural variation"], 2, "Preparation supports flexible, audience-aware performance."),
      ],
    },
  ],
};
