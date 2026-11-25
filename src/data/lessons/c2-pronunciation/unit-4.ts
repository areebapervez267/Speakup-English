import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2PronunciationUnit4: LessonUnit = {
  title: "Refinement",
  description:
    "Use systematic recording, specific feedback and staged rehearsal to produce a polished, repeatable final performance.",
  lessons: [
    {
      slug: "self-recording-and-analysis",
      title: "Self-recording and analysis",
      summary:
        "Use controlled recordings and objective annotations to isolate pronunciation, prosody and content issues without vague self-judgement.",
      objective:
        "Produce comparable recordings, annotate exact moments with evidence and select a measurable target for the next performance.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Capture the endings accurately",
          sound: "Final /s/, /z/, /t/ and /d/ in recorded speech",
          guidance:
            "Before analysing your accent, make sure the recording captures the relevant sounds. Keep microphone distance consistent and avoid clipping or room echo. Final /s z t d/ can be quiet, but they should remain visible in your annotation even when the recording does not reveal whether the mouth produced them.",
          words: [
            { word: "results", respelling: "/rɪˈzʌlts/", example: "The results support the recommendation." },
            { word: "reviews", respelling: "/rɪˈvjuːz/", example: "The reviews identified two recurring issues." },
            { word: "tested", respelling: "/ˈtestɪd/", example: "We tested the revised process twice." },
            { word: "agreed", respelling: "/əˈɡriːd/", example: "The deadline was agreed on Monday." },
            { word: "confirmed", respelling: "/kənˈfɜːmd/", example: "The supplier confirmed the order." },
            { word: "next", respelling: "/nekst/", example: "Next, I will describe the implementation." },
          ],
        },
        {
          type: "table",
          title: "A repeatable recording protocol",
          columns: ["Stage", "Action", "Annotation"],
          rows: [
            ["Prepare", "choose one 60-second text and one target", "write the target in observable terms"],
            ["Capture", "same room, device, distance and input level", "label date, take and conditions"],
            ["Meaning pass", "summarise the message without the transcript", "mark any point of confusion"],
            ["Detail pass", "listen with transcript at half speed if useful", "word, sound, boundary or contour"],
            ["Comparison pass", "compare with the previous take", "improved, unchanged or new issue"],
          ],
          caption:
            "Playback speed can reveal detail but does not represent natural delivery. Always finish by listening at normal speed for overall effect.",
        },
        {
          type: "text",
          title: "Replace judgement with evidence",
          paragraphs: [
            "Vague conclusions such as I sound nervous are difficult to act on. Convert them into observations: pitch rose on the final word of three statements; the pace increased before the figure; the final /t/ in next was absent before a pause. Each observation points to a testable adjustment.",
            "Separate content problems from delivery problems. If the listener cannot identify the recommendation, the issue may be ordering or signposting rather than pronunciation. If the message is clear but a word is repeatedly misheard, target the segment or stress pattern.",
            "Keep recordings comparable. Do not compare a close-mic studio take with a noisy phone memo and conclude that your voice has deteriorated. Use the same conditions for before-and-after evidence, then test the skill in a new setting later.",
          ],
        },
        {
          type: "exercise",
          title: "Turn notes into targets",
          instructions: "Choose the most objective and useful analysis.",
          items: [
            c(
              "Which note is most useful?",
              ["The pace increased and the final /t/ disappeared in next before a pause", "I sounded terrible", "My voice is weird"],
              0,
              "The first note identifies two observable features in a specific context.",
              "Name the moment and the feature.",
            ),
            c(
              "The listener cannot find your recommendation. What should you check first?",
              ["The colour of the microphone", "The IPA for every vowel", "Message order and spoken signposting"],
              2,
              "A missing recommendation may be an information-structure issue rather than a pronunciation fault.",
              "Check meaning before segments.",
            ),
            c(
              "Why finish analysis at normal playback speed?",
              ["Slow motion eliminates all errors", "Natural rate reveals the combined effect of articulation and prosody", "Only slow recordings contain stress"],
              1,
              "Slow playback supports diagnosis, but listeners experience the performance at natural speed.",
              "Diagnose slowly, judge naturally.",
            ),
            c(
              "What makes a target measurable?",
              ["Keep final /t/ before pauses in three marked sentences", "Improve my accent", "Sound more professional"],
              0,
              "A specific sound, context and set of sentences allow comparison across takes.",
              "Define the observable change.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Run an analysis cycle",
          instructions:
            "Use your own recorder and keep all files private unless you choose to share them.",
          items: [
            p(
              "Record a 60-second explanation under controlled conditions.",
              "Choose either thought-group boundaries or final consonant accuracy as the initial focus. Label the file with date and take number.",
              "Do not mix multiple targets in the first take.",
            ),
            p(
              "Complete meaning, detail and comparison passes.",
              "Write at least three annotations with timestamps or transcript locations. For each, state whether it affects message structure, word recognition or stance.",
              "Finish with one normal-speed listen.",
            ),
            p(
              "Choose one target and record a second take after one focused rehearsal.",
              "Example: preserve final /t/ in next and update before marked pauses. Compare only those moments first, then assess the whole message.",
              "Note one improvement and one unchanged feature.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Limit the evidence",
          text: "Three precise annotations are more useful than thirty vague impressions. Stop the analysis when you have one high-impact target that can be rehearsed and checked.",
        },
      ],
      quiz: [
        q(1, "Which annotation is most actionable?", ["I was bad", "Final /t/ disappeared in next before a pause", "My voice felt strange"], 1, "It identifies a sound, word and context."),
        q(2, "What should be checked if the listener cannot find the main recommendation?", ["Message order and signposting", "Only vowel length", "Microphone colour"], 0, "The problem may be information structure rather than articulation."),
        q(3, "Why listen again at normal speed?", ["It removes the need for a transcript", "It guarantees a better score", "It shows the integrated performance listeners actually experience"], 2, "Natural-speed listening tests the combined effect of all delivery features."),
        q(4, "What is a measurable target?", ["Sound better", "Preserve final /t/ before pauses in three sentences", "Improve everything"], 1, "Specific contexts make change observable."),
      ],
    },
    {
      slug: "feedback-and-targeted-practice",
      title: "Feedback and targeted practice",
      summary:
        "Request listener feedback that isolates real comprehension problems, then design short practice loops that transfer gains into spontaneous speech.",
      objective:
        "Elicit specific feedback, distinguish intelligibility from preference and run a targeted rehearsal–retest cycle with a new sentence.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Practise the reported word",
          sound: "Targeted vowel and final-consonant repair",
          guidance:
            "When a listener reports a specific word, repeat that word with its correct stress and ending in a carrier phrase. Keep the vowel quality clear and complete final /t d s z/ before a pause. Then replace the surrounding words so that the repair transfers beyond a memorised sentence.",
          words: [
            { word: "specific", respelling: "/spəˈsɪfɪk/", example: "Please give one specific example." },
            { word: "district", respelling: "/ˈdɪstrɪkt/", example: "The district covers three sites." },
            { word: "requested", respelling: "/rɪˈkwestɪd/", example: "The client requested a revised schedule." },
            { word: "results", respelling: "/rɪˈzʌlts/", example: "The results were discussed on Friday." },
            { word: "next", respelling: "/nekst/", example: "Next, we will review the budget." },
            { word: "decided", respelling: "/dɪˈsaɪdɪd/", example: "We decided to continue the trial." },
          ],
        },
        {
          type: "table",
          title: "Ask for useful feedback",
          columns: ["Question", "What it reveals", "Practice response"],
          rows: [
            ["Which word did you have to guess?", "segment or stress problem", "repair the word in a carrier phrase"],
            ["Where did the main point become unclear?", "focus or structure problem", "move a boundary or nucleus"],
            ["Did any phrase sound more certain or uncertain than intended?", "tone or stance problem", "adjust contour and pitch range"],
            ["Could you note the number accurately?", "pace, grouping or digit problem", "pause and group the quantity"],
            ["What was especially easy to follow?", "a feature worth preserving", "retain it during revision"],
          ],
          caption:
            "Give listeners the recording once without interruption. A second pass can focus on a specific word or moment; constant interruption changes the speaking task.",
        },
        {
          type: "text",
          title: "Feedback is data, not a verdict",
          paragraphs: [
            "Ask for comprehension evidence before aesthetic comments. A listener who says the speech was too fast may mean that the key number was unclear, the pauses were misplaced or the sentence lacked signposting. Locate the moment before choosing a solution.",
            "A useful practice loop has four stages: hear or read a reliable model, reproduce the target in a short phrase, use it in a new sentence, and retest with a listener. The new sentence prevents improvement from depending on one memorised line.",
            "Change one variable at a time. If you alter stress, pace and vowel quality simultaneously, you will not know which change helped. Keep the rest of the sentence stable and record a short comparison after each adjustment.",
          ],
        },
        {
          type: "exercise",
          title: "Interpret listener feedback",
          instructions: "Choose the response that best turns feedback into targeted practice.",
          items: [
            c(
              "A listener says You spoke too fast.",
              ["Assume the whole accent is the problem", "Ask which moment became unclear and identify the delivery feature", "Read every future talk at half speed"],
              1,
              "Specific timing reveals whether the issue is rate, pausing, density or articulation.",
              "Locate the problem before prescribing a solution.",
            ),
            c(
              "A listener mishears district.",
              ["Practise only the word in isolation forever", "Delete the initial consonant", "Check its /str/ onset and stress, then use it in new phrases"],
              2,
              "Repairing the word and transferring it to varied phrases builds usable accuracy.",
              "Accuracy plus transfer.",
            ),
            c(
              "Which feedback is functional evidence?",
              ["I dislike regional accents", "You should sound like a newsreader", "I had to guess the final number twice"],
              2,
              "Difficulty recovering a number directly concerns intelligibility and processing.",
              "Separate preference from comprehension.",
            ),
            c(
              "Why change one variable at a time?",
              ["It shows which adjustment produced the improvement", "It makes practice longer by default", "It eliminates the need for recording"],
              0,
              "Controlled changes create interpretable evidence and prevent conflicting corrections.",
              "Keep the comparison fair.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Run a feedback loop",
          instructions:
            "Work with a trusted listener or use dictation and self-transcription if no partner is available.",
          items: [
            p(
              "Record a short explanation and ask which word or moment required the most effort.",
              "Record the exact response and timestamp. Also ask what was easy to follow so that you preserve an effective feature.",
              "Request one example, not a list of general faults.",
            ),
            p(
              "Choose one reported word, boundary or contour and run the four-stage loop.",
              "Example target: district. Hear or check /ˈdɪstrɪkt/, say it in three carrier phrases, create a new sentence, then ask the listener to write it down.",
              "Change only the selected feature.",
            ),
            p(
              "Record a fresh paragraph containing the target and compare it with the original.",
              "Check both the target and the surrounding speech. If the target improved but the message became less natural, simplify the adjustment.",
              "Transfer matters more than isolated perfection.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Ask a narrow question",
          text: "Could you write down the three delivery dates? produces more useful feedback than How was my pronunciation? It gives you a concrete comprehension task and observable evidence.",
        },
      ],
      quiz: [
        q(1, "What should follow a vague comment such as too fast?", ["A complete accent restart", "A question locating the unclear moment", "A much louder recording"], 1, "A specific moment reveals the actual cause."),
        q(2, "What completes a targeted practice loop?", ["Using the repaired feature in a new sentence and retesting it", "Repeating one memorised line indefinitely", "Changing several features together"], 0, "Varied use and retesting support transfer."),
        q(3, "Which comment is functional evidence?", ["I had to guess the final number", "I dislike your accent", "Sound like a newsreader"], 0, "It reports an observable comprehension difficulty."),
        q(4, "Why change one variable at a time?", ["To avoid all recording", "To make every sentence identical", "To identify which adjustment helps"], 2, "Controlled comparison makes feedback interpretable."),
      ],
    },
    {
      slug: "preparing-a-polished-performance",
      title: "Preparing a polished performance",
      summary:
        "Integrate articulation, prosody and content in a staged rehearsal plan that builds from marked phrases to a resilient final performance.",
      objective:
        "Prepare a three-to-five-minute performance, annotate key delivery choices and rehearse recovery paths before a final recorded take.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Land the final key phrase",
          sound: "Clear stressed vowels and final consonants in a closing",
          guidance:
            "A final line needs both accurate sound and a decisive prosodic landing. Keep /iː/ in key and /eɪ/ in day stable, complete final /t d s z/, and place the main nucleus on the message rather than the last word by default. Let pitch settle without forcing the voice below comfort.",
          words: [
            { word: "key", respelling: "/kiː/", example: "The key decision is before us today." },
            { word: "day", respelling: "/deɪ/", example: "We can begin that work today." },
            { word: "next", respelling: "/nekst/", example: "Next, we will put the plan into action." },
            { word: "decided", respelling: "/dɪˈsaɪdɪd/", example: "We decided to move forward." },
            { word: "results", respelling: "/rɪˈzʌlts/", example: "The results justify the next phase." },
            { word: "together", respelling: "/təˈɡeðə/", example: "We will take that step together." },
          ],
        },
        {
          type: "table",
          title: "A four-stage performance rehearsal",
          columns: ["Stage", "Focus", "What to produce", "Stop when"],
          rows: [
            ["1. Marked rehearsal", "stress, boundaries, contour and breathing", "annotated script or notes", "every key choice has a reason"],
            ["2. Section practice", "difficult words, figures and transitions", "short repair recordings", "each repair works at natural pace"],
            ["3. Full run", "structure, listener effort and endurance", "one uninterrupted take", "the message is clear without constant checking"],
            ["4. Performance", "responsiveness and recovery", "final take with contingency notes", "the delivery feels controlled, not mechanical"],
          ],
          caption:
            "Rehearse from notes after the marked stage. The final performance should sound like a person communicating, not a script being decoded.",
        },
        {
          type: "text",
          title: "Prepare for the real conditions",
          paragraphs: [
            "Match rehearsal to the event. Practise standing if you will stand, with the same microphone or room when possible. Test the opening, the first key figure and the closing from memory; those moments establish credibility and are most vulnerable to pressure.",
            "Create recovery phrases for common problems: Let me restate that more simply; The key point is this; To return to the recommendation. Each phrase buys time without abandoning the argument. Rehearse it after a deliberate interruption.",
            "On the final day, prioritise sleep, comfortable hydration and a brief vocal warm-up within your normal range. Avoid forcing the voice into an unusually low pitch. A polished performance is a repeatable skill, not a last-minute transformation.",
          ],
        },
        {
          type: "exercise",
          title: "Plan the final run",
          instructions: "Choose the rehearsal decision that best prepares a resilient performance.",
          items: [
            c(
              "What belongs in the marked rehearsal?",
              ["Every word’s dictionary definition", "Only slide colours", "Stress, boundaries, contours and breath points"],
              2,
              "Delivery choices should be planned and annotated before full runs.",
              "Mark what the listener should hear.",
            ),
            c(
              "When should you move from a script to notes?",
              ["After difficult sections work at natural pace", "Before any preparation", "Only after the public event"],
              0,
              "Notes support flexibility once the key phrases and structure are familiar.",
              "Prepared is not the same as memorised.",
            ),
            c(
              "Why rehearse after an interruption?",
              ["It makes recovery automatic and protects the argument", "It guarantees nobody will interrupt", "It removes the need for thought groups"],
              0,
              "Practised recovery reduces cognitive load when the unexpected happens.",
              "Prepare the return phrase.",
            ),
            c(
              "What is the best final-day vocal strategy?",
              ["Force a much lower voice", "Use a comfortable warm-up and familiar pitch range", "Shout the opening to test the room"],
              1,
              "Comfortable, familiar production supports steadiness and avoids unnecessary strain.",
              "Do not change your voice at the last minute.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build the final performance",
          instructions:
            "Use a real presentation, interview answer or keynote segment. Record all stages on your device.",
          items: [
            p(
              "Prepare a three-to-five-minute performance with an opening, three points, one caveat and a closing.",
              "Mark one nucleus per thought group, the key figure, the transition into the caveat and the final landing. Add breath points before long or demanding phrases.",
              "Give every mark a communicative reason.",
            ),
            p(
              "Run section practice and one uninterrupted full rehearsal.",
              "Repair only the words, boundaries and transitions that failed. Then record the full run and ask a listener to summarise the recommendation.",
              "Avoid restarting after every minor slip.",
            ),
            p(
              "Rehearse one interruption and deliver a final recorded take from notes.",
              "Use a recovery phrase such as To return to the main point, then restate the claim. Compare the final take with the full rehearsal for clarity, naturalness and target accuracy.",
              "Choose one next goal after the performance is complete.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Define success before the event",
          text: "Success may mean that listeners understand the recommendation, can record the key figure and hear your intended stance. It does not require a flawless accent or a performance identical to your rehearsal.",
        },
      ],
      quiz: [
        q(1, "What should a marked rehearsal identify?", ["Only the slide order", "Every possible mistake", "Stress, boundaries, contours and breath points"], 2, "Delivery annotations turn intention into repeatable choices."),
        q(2, "Why move from script to notes?", ["To avoid preparation", "To increase flexibility and sound communicative", "To forget the structure"], 1, "Notes support a responsive performance once the structure is secure."),
        q(3, "What is a useful recovery phrase?", ["To return to the main point…", "I have completely failed.", "This is impossible."], 0, "A neutral signpost buys time and restores the argument."),
        q(4, "What best defines a polished final performance?", ["A flawless imitation of another accent", "Maximum volume throughout", "Clear, intentional and resilient communication"], 2, "Polish combines clarity, control and responsiveness."),
      ],
    },
  ],
};
