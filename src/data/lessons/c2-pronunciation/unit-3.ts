import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2PronunciationUnit3: LessonUnit = {
  title: "Delivery craft",
  description:
    "Refine dramatic timing, vocal presence and personal style so that advanced articulation serves a convincing, authentic performance.",
  lessons: [
    {
      slug: "pace-pause-and-dramatic-timing",
      title: "Pace, pause and dramatic timing",
      summary:
        "Shape anticipation and emphasis through controlled rate changes, timed silence and deliberate recovery rather than uniform speed.",
      objective:
        "Plan accelerations, processing pauses and pre-reveal silences that strengthen a narrative while preserving intelligibility.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Silence needs a clean ending",
          sound: "Final /t/, /d/ and /p/ before a dramatic pause",
          guidance:
            "A pause is framed by what comes before it. Complete the final consonant, let the pitch signal whether the thought continues, and stop. Do not stretch the preceding vowel or insert schwa to fill the silence. After the pause, restart with a clear onset and a deliberate pitch level.",
          words: [
            { word: "stopped", respelling: "/stɒpt/", example: "The old system stopped without warning." },
            { word: "decided", respelling: "/dɪˈsaɪdɪd/", example: "We decided to rebuild the process." },
            { word: "step", respelling: "/step/", example: "The next step required a new partner." },
            { word: "risk", respelling: "/rɪsk/", example: "The risk was greater than we expected." },
            { word: "result", respelling: "/rɪˈzʌlt/", example: "The result changed our assumptions." },
            { word: "but", respelling: "/bʌt/", example: "But the evidence told a different story." },
          ],
        },
        {
          type: "table",
          title: "Four timing tools",
          columns: ["Tool", "Function", "Marked example", "Execution"],
          rows: [
            ["Processing pause", "allow a number or name to be noted", "The total was | 15,280.", "brief and neutral"],
            ["Pre-reveal pause", "create anticipation", "We expected ten per cent. // It was twenty-four.", "hold pitch and eye contact"],
            ["Acceleration", "compress familiar background", "a quick sequence of routine steps", "keep key endings intact"],
            ["Deceleration", "give weight to the conclusion", "That is why we changed the design.", "slow at the key phrase, not every word"],
          ],
          caption:
            "Dramatic timing depends on contrast. A pause feels long only when the surrounding speech is controlled and the silence has a clear function.",
        },
        {
          type: "text",
          title: "Time the information, not the clock",
          paragraphs: [
            "A pause can create anticipation, but it can also expose weak preparation. Plan what comes before and after the silence. Finish the setup cleanly, decide the restart pitch and know the exact phrase you will land on.",
            "Use acceleration for material the audience can already follow and deceleration for the new or consequential point. Uniform speed makes a surprising result sound routine; uniform slowness makes every detail seem equally important.",
            "Silence is not failure. If you lose your place, pause, look at your notes and restart from the last completed idea. A calm recovery preserves credibility better than filling the gap with repeated apologies or rushing the next sentence.",
          ],
        },
        {
          type: "exercise",
          title: "Use timing purposefully",
          instructions: "Choose the timing decision that best serves the narrative.",
          items: [
            c(
              "A surprising figure is coming.",
              ["Pause after the setup, then deliver the figure slowly and clearly", "Speed up until the figure is over", "Fill the pause with an unrelated story"],
              0,
              "Anticipation and a measured delivery give the key result appropriate weight.",
              "Let silence prepare the listener.",
            ),
            c(
              "Where is acceleration most useful?",
              ["A new safety instruction", "Familiar background that leads to the main point", "A name the audience must record"],
              1,
              "Routine, already-understood material can be compressed so that the important point receives more time.",
              "Save time where processing demand is low.",
            ),
            c(
              "You lose your place during a pause.",
              ["Apologise repeatedly and rush", "Skip directly to the closing", "Restart from the last completed idea with a clear onset"],
              2,
              "A concise recovery rebuilds the thread without drawing excessive attention to the error.",
              "Return to structure, not self-criticism.",
            ),
            c(
              "Why can an unplanned pause weaken a reveal?",
              ["It always changes the words", "It removes the final consonants", "It may break the pitch and thought pattern that created anticipation"],
              2,
              "Timing works as part of the prosodic design. A random gap can interrupt that design.",
              "Plan the setup and the landing.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rehearse a timed story",
          instructions:
            "Mark one processing pause, one pre-reveal pause and one decelerated phrase. Record the story and time only after listening.",
          items: [
            p(
              "Deliver: We expected a ten per cent increase. // The result was twenty-four per cent.",
              "Use a closing setup on increase, a brief silence, then restart at a clear pitch and slow slightly around twenty-four per cent. Complete the final /t/ before the pause.",
              "Do not extend increase into a long drawl.",
            ),
            p(
              "Accelerate routine background, then decelerate the conclusion.",
              "Model: We checked the data, tested the prototype and reviewed the feedback — all routine work. // But the CENTRAL assumption was wrong. Compress the first clause and slow on central assumption.",
              "Keep the contrast between sections audible.",
            ),
            p(
              "Tell a 45-second work story that includes one planned recovery point.",
              "Insert a brief pause before the final recommendation, look at your notes and restart deliberately. Compare whether the pause helps the listener or merely delays the point.",
              "Ask a listener what the pause communicated.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Do not perform silence",
          text: "A useful pause has a job: processing, anticipation, emphasis or recovery. If you cannot name its job, shorten it and continue.",
        },
      ],
      quiz: [
        q(1, "What is a processing pause for?", ["Filling every gap", "Helping the audience note important information", "Making all words equally slow"], 1, "A processing pause gives listeners time to absorb a detail."),
        q(2, "What is the best recovery after losing your place?", ["Apologise repeatedly", "Abandon the structure", "Restart from the last completed idea"], 2, "A concise restart preserves the argument and credibility."),
        q(3, "Where is acceleration usually most effective?", ["In familiar background", "In a new safety instruction", "In a critical name"], 0, "Low-demand material can be compressed to protect time for important detail."),
        q(4, "Why frame a pause with clear final articulation?", ["It makes the vowel longer", "It creates a clean prosodic handoff into the next idea", "It removes the need for pitch"], 1, "Complete endings and pitch make the silence part of the message."),
      ],
    },
    {
      slug: "confidence-and-vocal-presence",
      title: "Confidence and vocal presence",
      summary:
        "Build a stable, supported voice and recover calmly from pressure so that authority comes from control rather than volume or speed.",
      objective:
        "Use comfortable posture, breath planning and deliberate onsets to maintain vocal steadiness through questions, interruptions and difficult passages.",
      minutes: 30,
      blocks: [
        {
          type: "sound",
          title: "Start cleanly after pressure",
          sound: "Clear vowel onsets and final stops under pressure",
          guidance:
            "Under pressure, onsets can become breathy or squeezed and final stops can disappear. Begin a new thought with a comfortable breath and an easy vowel onset; finish key words fully. Presence comes from stable timing and audible structure, not from forcing the voice lower or louder.",
          words: [
            { word: "answer", respelling: "/ˈɑːnsə/", example: "I will answer that question directly." },
            { word: "important", respelling: "/ɪmˈpɔːtnt/", example: "The important point is the timing." },
            { word: "commit", respelling: "/kəˈmɪt/", example: "We commit to the revised deadline." },
            { word: "next", respelling: "/nekst/", example: "Next, I will address the cost." },
            { word: "risk", respelling: "/rɪsk/", example: "The risk is manageable." },
            { word: "confirmed", respelling: "/kənˈfɜːmd/", example: "The arrangement is confirmed." },
          ],
        },
        {
          type: "table",
          title: "Presence under pressure",
          columns: ["Pressure point", "Physical cue", "Vocal response", "Language response"],
          rows: [
            ["Unexpected question", "release shoulders; feel feet supported", "brief pause, calm onset, measured pace", "answer the question before adding detail"],
            ["Interruption", "steady breath; avoid competing volume", "hold pitch until the interruption ends", "acknowledge and reclaim the floor"],
            ["Difficult passage", "unclench jaw; keep airflow easy", "slow the key phrase, not the whole talk", "use shorter clauses"],
            ["Disagreement", "keep posture open and voice unforced", "lower intensity without lowering clarity", "state the point, then acknowledge the other view"],
            ["Technical failure", "pause and check notes", "reset pitch after the gap", "summarise the last completed point"],
          ],
          caption:
            "These cues support comfortable performance. Persistent pain, hoarseness or voice loss should be assessed by a qualified voice or health professional.",
        },
        {
          type: "text",
          title: "Authority is not dominance",
          paragraphs: [
            "Vocal presence is the combination of steadiness, audibility and responsiveness. A quiet speaker can have presence if timing is controlled and key phrases are clear. A loud speaker may have little presence if every sentence is rushed or over-stressed.",
            "Prepare difficult passages aloud rather than only in your head. Notice where breath runs out, where the jaw tightens and where pitch rises under uncertainty. Build a breath plan around thought groups and rehearse the first sentence after a likely pause.",
            "After an interruption, reclaim the floor with a signpost: To return to the main point… Then restate the claim in one clear sentence. Calm structure communicates confidence more reliably than filling silence with extra words.",
          ],
        },
        {
          type: "exercise",
          title: "Choose a controlled response",
          instructions: "Select the response that best preserves vocal and professional control.",
          items: [
            c(
              "A question catches you by surprise.",
              ["Pause briefly, breathe comfortably and restate the question’s main point", "Answer immediately at double speed", "Raise volume throughout"],
              0,
              "A short pause and measured restatement create time to think without losing the room.",
              "Structure buys thinking time.",
            ),
            c(
              "Someone interrupts your presentation.",
              ["Compete by speaking louder", "Let the interruption finish, acknowledge it and return with a signpost", "Abandon your remaining points"],
              1,
              "Responsive turn-taking and a clear return preserve authority without aggression.",
              "Reclaim the floor politely.",
            ),
            c(
              "Your throat feels tight during a long sentence.",
              ["Force the voice lower", "Speed up to finish", "Stop, reset breath and split the sentence into shorter thought groups"],
              2,
              "Reduced tension and shorter units are safer than pushing through vocal strain.",
              "Do not perform through pain.",
            ),
            c(
              "Which behaviour most clearly supports presence?",
              ["Constant maximum volume", "A deep voice regardless of comfort", "Stable timing, clear onsets and responsive listening"],
              2,
              "Presence depends on controlled, responsive delivery, not a single vocal stereotype.",
              "Clarity and composure are observable.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Pressure rehearsal",
          instructions:
            "Stay within a comfortable vocal range. Stop if speaking hurts; the goal is efficient control, not endurance through strain.",
          items: [
            p(
              "Say the first sentence of a talk after a deliberate ten-second silence.",
              "Begin with an easy breath and a clear vowel onset. Avoid starting with a squeezed throat or an unnecessarily low pitch.",
              "Record the onset and listen for tension.",
            ),
            p(
              "Practise one planned interruption and one unexpected question.",
              "After interruption: To return to the main point, we need a longer trial. After question: The key issue is timing. // The sample needs more time.",
              "Use shorter thought groups than in your prepared talk.",
            ),
            p(
              "Deliver a two-minute explanation, deliberately pause at the hardest term and recover from notes.",
              "Mark the breath before the term and the exact restart phrase. Compare the take with a version in which you rush the difficult section.",
              "Ask a listener which version sounded more authoritative.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Confidence can be procedural",
          text: "You do not need to feel fearless before speaking. A prepared opening, a breath plan and a recovery phrase give you reliable actions to use when pressure arrives.",
        },
      ],
      quiz: [
        q(1, "What is a useful first response to an unexpected question?", ["Speak twice as fast", "Pause, breathe and restate the main point", "Raise volume immediately"], 1, "A short pause and clear restatement support thinking and comprehension."),
        q(2, "How should you reclaim the floor after an interruption?", ["Acknowledge it and return with a signpost", "Ignore the remaining structure", "Compete by shouting"], 0, "Responsive turn-taking preserves control and respect."),
        q(3, "What should you do if speaking becomes painful?", ["Push through to build strength", "Lower pitch forcefully", "Stop and seek qualified advice if it persists"], 2, "Pain is not a useful practice target and may need professional assessment."),
        q(4, "What creates vocal presence?", ["Maximum volume only", "Controlled timing, audibility and responsiveness", "An artificially deep voice"], 1, "Presence is multidimensional and does not require a vocal stereotype."),
      ],
    },
    {
      slug: "style-authenticity-and-final-review",
      title: "Style, authenticity and final review",
      summary:
        "Identify the prosodic features that form your natural style, remove unhelpful habits and plan a final review around authentic control.",
      objective:
        "Audit habitual stress, pitch and pace patterns, retain identity-bearing features and set evidence-based goals for a final speaking portfolio.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Keep your signature features clear",
          sound: "Stable vowel nuclei in personal speaking style",
          guidance:
            "A personal style may include a particular pitch range, tempo or vowel quality. Keep those features when they support identity and understanding. Refine only the moments where a habit obscures information: a nucleus that disappears, an ending that is swallowed or a contour that misreads as uncertainty.",
          words: [
            { word: "believe", respelling: "/bɪˈliːv/", example: "I believe the evidence supports the change." },
            { word: "clear", respelling: "/klɪə/", example: "The main conclusion is clear." },
            { word: "important", respelling: "/ɪmˈpɔːtnt/", example: "This point is important to our users." },
            { word: "decision", respelling: "/dɪˈsɪʒn/", example: "The decision rests on three findings." },
            { word: "together", respelling: "/təˈɡeðə/", example: "We developed the solution together." },
            { word: "future", respelling: "/ˈfjuːtʃə/", example: "The next phase shapes our future." },
          ],
        },
        {
          type: "table",
          title: "Style audit",
          columns: ["Feature", "Keep when", "Refine when", "Evidence"],
          rows: [
            ["Pitch range", "it is comfortable and expressive", "every sentence sounds doubtful or over-performed", "listener interpretation of stance"],
            ["Pace", "listeners can follow and respond", "details or endings are repeatedly lost", "transcription and repair frequency"],
            ["Prominence", "it reflects your information structure", "too many beats hide the main point", "listener summary of the key message"],
            ["Vowel and consonant quality", "it is consistent and intelligible", "specific substitutions block recognition", "minimal-pair or dictation results"],
            ["Pause style", "it gives thinking and processing time", "random gaps fragment the argument", "thought-group map"],
          ],
          caption:
            "Authenticity and refinement are compatible. The aim is greater intentional control, not a standard voice that sounds unlike you.",
        },
        {
          type: "text",
          title: "Build a portfolio, not a personality transplant",
          paragraphs: [
            "Record three speaking contexts: an explanation, a persuasive recommendation and a spontaneous response. Compare the features that remain stable across them. Some stability is your style; inconsistency may simply reflect the task or your energy level.",
            "Ask listeners what made the speech easy to follow and what required extra effort. Separate preferences about accent or charisma from evidence about intelligibility. A listener’s dislike of an unfamiliar style is not the same as a pronunciation fault.",
            "For the final review, select two portfolio pieces and one target. Show the before-and-after recordings alongside a short annotation of the changed feature. Success means that you can explain and reproduce the improvement, not merely sound different in one take.",
          ],
        },
        {
          type: "exercise",
          title: "Refine without erasing identity",
          instructions: "Choose the review decision that best balances authenticity and intelligibility.",
          items: [
            c(
              "A listener dislikes your accent but understands every word.",
              ["Ask for specific intelligibility evidence before changing the accent", "Rebuild the entire accent immediately", "Speak louder"],
              0,
              "Aesthetic preference is not enough evidence for wholesale change. Focus on actual comprehension or your own goals.",
              "Distinguish preference from function.",
            ),
            c(
              "Which feature is a good candidate for refinement?",
              ["Your comfortable pitch range", "A habitual missing final /t/ before pauses", "Your regional vowel quality when fully intelligible"],
              1,
              "The missing consonant can reduce word recognition and can be addressed specifically.",
              "Choose evidence of listener effort.",
            ),
            c(
              "What should a final speaking portfolio include?",
              ["Only your best unannotated recording", "Every lesson recording without selection", "Multiple contexts, one target and annotated before-and-after examples"],
              2,
              "A focused portfolio shows range, intentional change and the ability to analyse performance.",
              "Select evidence that tells a clear story.",
            ),
            c(
              "What does authenticity require?",
              ["Keeping identity-bearing features while improving functional control", "Never changing any habit", "Copying a famous speaker"],
              0,
              "Authentic refinement retains your voice while making intentional, useful adjustments.",
              "Change function, not identity.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Create your style review",
          instructions:
            "Use three short recordings made on your device. Keep the topics and setup broadly comparable.",
          items: [
            p(
              "Record an explanation, a recommendation and a spontaneous answer.",
              "Label each by purpose and note one stable feature plus one context-dependent feature. Do not score your personality or accent.",
              "Use the style audit table.",
            ),
            p(
              "Ask two listeners one common question: What helped you follow the message, and where did you need more effort?",
              "Translate feedback into observable features such as final /t/, pause placement or nucleus clarity. Separate concrete observations from general preference.",
              "Ask for a word or moment as evidence.",
            ),
            p(
              "Select one target and create an annotated before-and-after pair.",
              "Example: before, final /t/ was missing in next before three pauses; after, the ending is complete and the pause remains. Explain the change in one sentence.",
              "Choose clarity over dramatic transformation.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Own the final judgement",
          text: "A final review should help you decide what to keep, what to refine and when to stop. Your voice does not need to become maximally dramatic or maximally standard to be professional.",
        },
      ],
      quiz: [
        q(1, "What makes a feature worth refining?", ["A listener’s aesthetic preference alone", "Evidence that it reduces intelligibility or conflicts with your goal", "The fact that it is regional"], 1, "Functional evidence gives the change a clear purpose."),
        q(2, "What can remain stable in an authentic style?", ["Comfortable pitch range and intelligible vowel qualities", "Every technical error", "Random pauses"], 0, "Identity-bearing features can be retained while specific problems are addressed."),
        q(3, "What strengthens a final portfolio?", ["Only a single perfect take", "Volume as the only measure", "Annotated examples showing intentional change"], 2, "Annotation demonstrates understanding and transferable control."),
        q(4, "What is the goal of final review?", ["To replace your personality", "To decide what to keep, refine and stop practising", "To remove every accent feature"], 1, "Review supports purposeful ownership rather than endless correction."),
      ],
    },
  ],
};
