import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1PronunciationUnit3: LessonUnit = {
  title: "Prosody and presence",
  description:
    "Use prominence, pitch and pace deliberately so that listeners can follow your meaning and sense your intention.",
  lessons: [
    {
      slug: "stress-for-meaning-and-contrast",
      title: "Stress for meaning and contrast",
      summary:
        "Control broad sentence focus, narrow contrast and correction stress so that the same words communicate different information.",
      objective:
        "Identify the nucleus of a thought group and shift prominence to distinguish new information, contrast and emphatic commitment.",
      minutes: 30,
      blocks: [
        {
          type: "sound",
          title: "Make the focused vowel clear",
          sound: "Prominent /iː/ and /æ/ in content words",
          guidance:
            "Sentence prominence is not simply extra loudness. A focused syllable may become longer, clearer and higher in pitch while neighbouring syllables reduce. Preserve the vowel: /iː/ in team stays tense and /æ/ in plan stays open. Do not bite off the final consonant that follows.",
          words: [
            { word: "team", respelling: "/tiːm/", example: "Our team approved the revised plan." },
            { word: "plan", respelling: "/plæn/", example: "The plan covers the next six months." },
            { word: "critical", respelling: "/ˈkrɪtɪkəl/", example: "Timing is critical at this stage." },
            { word: "impact", respelling: "/ˈɪmpækt/", example: "We measured the impact on retention." },
            { word: "exact", respelling: "/ɪɡˈzækt/", example: "Please confirm the exact delivery date." },
            { word: "agreed", respelling: "/əˈɡriːd/", example: "The two sides agreed on the next step." },
          ],
        },
        {
          type: "table",
          title: "One sentence, several focus patterns",
          columns: ["Focus", "Example", "Likely interpretation"],
          rows: [
            ["Broad focus", "Mariam wrote the rePORT.", "New information arrives at the end"],
            ["Narrow contrast", "MAriam wrote the report, not Daniel.", "The agent is being contrasted"],
            ["Object contrast", "Mariam wrote the rePORT, not the proposal.", "The object is being contrasted"],
            ["Correction", "It was THURSDAY, not Tuesday.", "The previous day is being corrected"],
            ["Emphatic commitment", "We WILL meet the deadline.", "The auxiliary receives deliberate prominence"],
          ],
          caption:
            "Capital letters mark the main prominence in these examples. Stress depends on context; no single pattern is the default for every utterance.",
        },
        {
          type: "text",
          title: "Give new information a clear landing point",
          paragraphs: [
            "In English, broad focus commonly places the main prominence near the last important content word of a thought group. In We discussed the revised budget, budget is a natural nucleus. Earlier content words can still be stressed, but more lightly.",
            "Narrow focus overrides that pattern. If you are choosing between colleagues, stress the name: DANIEL approved it. If the decision is in doubt, stress the verb or auxiliary: Daniel APproved it, or Daniel DID approve it. Each choice narrows the range of information being asserted.",
            "Avoid stressing every content word equally. A stream of strong beats makes the listener hunt for the point. Use smaller beats for supporting detail and one clear nucleus per manageable thought group.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the focus",
          instructions: "Select the prominence pattern that best fits the context.",
          items: [
            c(
              "Context: Someone assumes Daniel approved the proposal. You correct the person.",
              ["DANiel approved it.", "Daniel apPROVED it.", "Daniel approved the proPOSAL."],
              0,
              "The correction concerns who approved the proposal, so Daniel receives narrow contrastive prominence.",
              "Contrast the person, not the already-known action.",
            ),
            c(
              "Which pattern gives broad focus to Daniel approved the proposal?",
              ["DANiel approved the proposal.", "Daniel apPROVED the proposal.", "Daniel approved the proPOSAL."],
              2,
              "Broad focus typically places the main prominence on the last new content word, proposal.",
              "Follow the flow of new information.",
            ),
            c(
              "Someone doubts your commitment. Which reply is most emphatic?",
              ["We can meet the deadline.", "We WILL meet the deadline.", "We can meet it."],
              1,
              "Strong will directly answers doubt about willingness or commitment.",
              "Auxiliaries can carry meaningful prominence.",
            ),
            c(
              "Why avoid equally strong stress on every content word?",
              ["It makes all syllables weak", "It obscures the relative importance of the information", "It eliminates vowel quality"],
              1,
              "Relative prominence creates hierarchy. Equal emphasis forces the listener to infer which point matters most.",
              "Reserve the strongest beat for the nucleus.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Shift the nucleus",
          instructions:
            "Keep the words unchanged and alter only the focus. Record each set so you can hear whether the intended interpretation is clear.",
          items: [
            p(
              "Say Daniel approved the proposal with broad focus, then contrast Daniel.",
              "Broad: Daniel approved the proPOSAL. Contrast: DANiel approved the proposal. The vowel in proposal remains clear in both versions.",
              "Change pitch, length and clarity together.",
            ),
            p(
              "Correct these assumptions: The meeting is on Tuesday; the client has approved the plan.",
              "Model: It’s WEDnesday, not Tuesday. The client HASn’t approved it, or The client has approved the PLAN. Match the stress to the actual error.",
              "Do not overstress words that are already agreed.",
            ),
            p(
              "Prepare a short update with one broad-focus sentence and one narrow-contrast sentence.",
              "Example: Costs fell by ten per cent. / TEN per cent, not five. Use a lower supporting beat on Costs fell by, then a clear nucleus on ten per cent.",
              "Ask a listener which word sounded most important.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Stress is relational",
          text: "Prominence works by contrast. If one syllable is clearly the nucleus, the others can be lighter without becoming indistinct. Record a sentence at normal volume before adding extra emphasis.",
        },
      ],
      quiz: [
        q(1, "Where does broad focus commonly fall?", ["On every function word", "Near the last new content word", "Always on the first syllable"], 1, "Broad focus usually places the main prominence towards the end of a thought group."),
        q(2, "How would you correct Daniel approved it when Maya actually did?", ["DANiel approved it.", "Daniel approved IT.", "MAYA approved it."], 2, "Maya receives contrastive prominence because the disputed information is the person."),
        q(3, "What does stressing WILL add in We will meet the deadline?", ["A change to past tense", "Emphatic commitment", "A question about the date"], 1, "Prominent will strengthens the speaker’s commitment or counters doubt."),
        q(4, "Which tools combine to create prominence?", ["Pitch, duration and clarity", "Only volume", "Only lip rounding"], 0, "Prominence is multidimensional; it is not a shout."),
      ],
    },
    {
      slug: "tone-and-emotional-colour",
      title: "Tone and emotional colour",
      summary:
        "Shape falling, rising and fall-rise contours to signal completion, openness or reservation while avoiding fixed emotion labels.",
      objective:
        "Vary tone-unit endings, pitch range and voice quality to convey nuanced attitudes without relying on exaggerated rises or falls.",
      minutes: 30,
      blocks: [
        {
          type: "sound",
          title: "A tune frames the word",
          sound: "Falling ↘, rising ↗ and fall-rise ↘↗",
          guidance:
            "Keep the word’s vowels and consonants stable while changing the pitch contour. A fall often signals completion; a rise can leave something open; a fall-rise can suggest reservation or shared knowledge. These are tendencies, not one-to-one emotion codes. Use a comfortable range and avoid pushing the voice higher to sound friendly.",
          words: [
            { word: "sorry", respelling: "/ˈsɒri/", example: "Sorry, could we start again?" },
            { word: "perhaps", respelling: "/pəˈhæps/", example: "Perhaps we should wait for the data." },
            { word: "really", respelling: "/ˈrɪəli/", example: "Really, that result was unexpected." },
            { word: "sure", respelling: "/ʃʊə/", example: "Sure, I can send it this afternoon." },
            { word: "exactly", respelling: "/ɪɡˈzæktli/", example: "Exactly, that was my concern." },
            { word: "absolutely", respelling: "/ˌæbsəˈluːtli/", example: "Absolutely, the proposal is ready." },
          ],
        },
        {
          type: "table",
          title: "Possible effects in context",
          columns: ["Contour", "Possible function", "Example", "Avoid assuming"],
          rows: [
            ["Fall ↘", "closure, certainty or a completed item", "The report is ready. ↘", "A fall always means anger"],
            ["Rise ↗", "genuine checking or an unfinished list", "You’re ready? ↗", "Every yes/no question must rise"],
            ["Fall-rise ↘↗", "reservation, softening or implicit contrast", "It’s possible. ↘↗", "The speaker is uncertain about everything"],
            ["Level →", "holding the floor or signalling continuation", "There are two points… →", "A level voice is neutral"],
            ["High fall ↘", "strong conclusion or warm finality", "That’s all for today. ↘", "Greater height means greater friendliness"],
          ],
          caption:
            "Pitch range, loudness, tempo, facial expression and context all contribute. A single contour cannot determine emotion reliably.",
        },
        {
          type: "text",
          title: "Colour the idea, not every syllable",
          paragraphs: [
            "Tone is heard across a tone unit: a sequence of words organised around a prominent syllable. In I THINK we should WAIT, the fall on wait closes the thought; a rise may keep the decision open. The same words can therefore perform different conversational actions.",
            "A fall-rise can soften a disagreement: The first option is CHEAP ↘↗ but it is less durable. It signals that more is coming or that an unspoken qualification matters. Use it sparingly so that it remains meaningful.",
            "Voice quality matters too. Breathy or creaky onset can result from habit or tension, not from a particular attitude. If a colouring strains your voice, choose clearer pitch and timing instead of forcing a vocal effect.",
          ],
        },
        {
          type: "exercise",
          title: "Match contour to interaction",
          instructions: "Choose the most suitable contour for the stated intention.",
          items: [
            c(
              "You are checking whether a colleague is genuinely ready.",
              ["Fall ↘", "Rise ↗", "Fall-rise ↘↗"],
              1,
              "A rise can make the check genuinely open rather than merely confirm expected agreement.",
              "The answer is still unknown.",
            ),
            c(
              "You agree but want to flag a reservation about cost.",
              ["It’s possible. ↘", "It’s possible. ↘↗", "It’s possible. ↗↘"],
              1,
              "A fall-rise can introduce a qualification while leaving room for the cost issue to follow.",
              "Signal that the discussion is not fully closed.",
            ),
            c(
              "You are closing a formal briefing.",
              ["That concludes the briefing. ↘", "That concludes the briefing. ↗", "That concludes the briefing. → → →"],
              0,
              "A clear fall commonly signals completion and closure.",
              "Finish on a comfortable pitch, not a forced low note.",
            ),
            c(
              "Why is it unreliable to label a fall as anger?",
              ["Falls have no communicative function", "Only pitch matters in emotional speech", "The same contour can serve several attitudes depending on context"],
              2,
              "Falls can communicate certainty, finality or many other stances. Context determines the interpretation.",
              "Consider wording, situation and other vocal cues.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Colour one complete thought",
          instructions:
            "Say each sentence with the three contours. Then choose the version that best fits the situation and explain your choice.",
          items: [
            p(
              "Try Perhaps we should wait with a fall, a rise and a fall-rise.",
              "A fall sounds conclusive; a rise can sound genuinely questioning; a fall-rise often leaves room for a reservation. Keep /pəˈhæps/ relaxed and clear.",
              "Do not change the words or add a question tag.",
            ),
            p(
              "Say The first option is cheaper, but it needs more maintenance with contrasting contours.",
              "Model: The first option is CHEAPer ↘↗ | but it needs more mainTEnance ↘. Let the fall-rise on cheaper lead into the reservation.",
              "Use a brief boundary before but.",
            ),
            p(
              "Deliver a 15-second update twice: once neutrally and once with deliberate warm finality.",
              "Close the second version with a gentle fall on the final key phrase. Keep the earlier tone units varied rather than ending every sentence identically.",
              "Avoid stretching the last word or lowering pitch below comfort.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Listen for interaction",
          text: "Compare how trusted speakers close, check and hedge statements. Transcribe the contour over the final content word, then imitate the function rather than copying a whole personality.",
        },
      ],
      quiz: [
        q(1, "Which contour most often signals a completed thought?", ["Rise ↗", "Fall ↘", "Fall-rise ↘↗"], 1, "A falling contour commonly signals closure or completion."),
        q(2, "What can a fall-rise suggest?", ["A reservation or implicit qualification", "A guaranteed yes", "The end of a list only"], 0, "Fall-rise often leaves a qualification or shared understanding in play."),
        q(3, "Why should a rise not always be interpreted as friendliness?", ["Rises never occur in speech", "Contours have context-dependent functions", "Rises only ask for repetition"], 1, "A rise may check, continue or express many other intentions; vocal and situational cues also matter."),
        q(4, "What is a safe way to widen emotional colour?", ["Push the voice into a strained register", "Stretch every vowel", "Vary pitch range, pace and clarity within a comfortable voice"], 2, "Controlled variation is effective without vocal strain or distorted articulation."),
      ],
    },
    {
      slug: "pace-and-projection",
      title: "Pace and projection",
      summary:
        "Adjust speaking rate for information density and project with supported breath and resonance rather than relying on volume.",
      objective:
        "Control articulation rate, use planned pauses and maintain an even supported voice across quiet and larger spaces.",
      minutes: 30,
      blocks: [
        {
          type: "sound",
          title: "Finish cleanly before the pause",
          sound: "Final /t/, /d/ and /k/ at a measured pace",
          guidance:
            "A clear ending can carry across a room without a forceful release. Form the stop fully, keep the preceding vowel accurate and move on promptly. Projection comes from steady breath and resonant voice, not from clipping vowels or pushing extra air at final consonants.",
          words: [
            { word: "update", respelling: "/ʌpˈdeɪt/", example: "Here is the update on progress." },
            { word: "risk", respelling: "/rɪsk/", example: "The main risk is delay." },
            { word: "checked", respelling: "/tʃekt/", example: "We checked every calculation." },
            { word: "planned", respelling: "/plænd/", example: "The next phase is already planned." },
            { word: "agreed", respelling: "/əˈɡriːd/", example: "The deadline was agreed last week." },
            { word: "report", respelling: "/rɪˈpɔːt/", example: "The final report will follow." },
          ],
        },
        {
          type: "table",
          title: "Match rate to the task",
          columns: ["Material", "Pace choice", "Supporting technique"],
          rows: [
            ["Routine summary", "brisk but stable", "short thought groups; clear nuclei"],
            ["Unfamiliar number or name", "slower", "pause before it; separate digits or name parts"],
            ["Complex explanation", "measured", "one idea per group; examples after key point"],
            ["Recovery after misunderstanding", "slower and fuller", "restore consonants; rephrase rather than repeat louder"],
            ["Transition or dramatic reveal", "hold a brief pause", "let anticipation do the work"],
          ],
          caption:
            "Articulation rate counts speech between pauses. Overall duration also includes pause time, so speaking faster does not always mean finishing sooner.",
        },
        {
          type: "text",
          title: "Support the voice",
          paragraphs: [
            "Projection is the ability to remain intelligible at a distance. Begin with comfortable posture and a steady breath. On a long phrase, allow the abdomen and lower ribs to continue supporting airflow instead of squeezing the throat or raising the shoulders.",
            "In a large room, reduce speed slightly, complete final consonants and articulate the stressed vowel clearly. Do not simply raise volume: a louder distorted vowel is still difficult to understand. Face the audience and test audibility from the back before increasing effort.",
            "In a small online meeting, a calm, moderate voice is enough. Keep a consistent microphone distance and avoid moving away while speaking. Stop and reset if you feel tension; persistent pain or hoarseness deserves advice from a qualified voice professional.",
          ],
        },
        {
          type: "exercise",
          title: "Choose an effective adjustment",
          instructions: "Select the response that improves pace, projection or vocal safety.",
          items: [
            c(
              "A listener misses a complex figure.",
              ["Repeat it much louder and faster", "Pause, group the digits and say it more slowly", "Delete the final consonants"],
              1,
              "Slower grouping and clear articulation target the problem more directly than volume alone.",
              "Give the listener time to process the number.",
            ),
            c(
              "Your voice disappears when you turn away from the microphone.",
              ["Keep a stable distance and direction, then check the recording", "Shout into the microphone", "Stretch every word to compensate"],
              0,
              "Microphone technique creates consistent input. Shouting adds distortion without fixing distance.",
              "Check position before changing vocal effort.",
            ),
            c(
              "What supports projection most effectively?",
              ["A tense throat and raised shoulders", "Very high pitch on every content word", "Steady supported breath and clear articulation"],
              2,
              "Efficient breath support and intelligible speech carry better than unnecessary tension.",
              "Comfort and consistency matter.",
            ),
            c(
              "Why can a faster articulation rate fail to save time?",
              ["It always adds more pauses", "Misunderstandings and repetitions can increase total duration", "It removes all stressed vowels"],
              1,
              "If speed damages understanding, repairs take longer than the time saved.",
              "Optimise listener processing, not just word count.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Distance and density",
          instructions:
            "Use a comfortable voice throughout. For projection, test audibility rather than strain; never force the voice into pain.",
          items: [
            p(
              "Read a 40-word update at a rushed pace, then at a measured pace. Compare duration and clarity.",
              "Model phrase: The team reviewed the findings on Monday | and agreed to test the revised process before Friday. Use a short boundary after Monday.",
              "Measure clarity first, elapsed time second.",
            ),
            p(
              "Say The revised figure is 15,280 kilograms, then deliver it to a listener across a room.",
              "Pause before 15,280, group it as fifteen thousand two hundred and eighty, and give kilograms a clear ending. Keep the voice supported rather than louder at every word.",
              "Breathe before the number, not in the middle of it.",
            ),
            p(
              "Deliver one sentence quietly, one at normal level and one with comfortable projection.",
              "Change breath support and clarity, not vowel identity or pitch range. Record all three and choose the version that remains effortless and intelligible.",
              "Stop if the throat feels tight or tired.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Project intelligibility",
          text: "A useful room check is whether a listener at the back can repeat a key name and number accurately. Successful projection is measured by understanding, not by how loudly you feel you are speaking.",
        },
      ],
      quiz: [
        q(1, "What should you do before saying a difficult number?", ["Pause and group the digits clearly", "Speed up", "Lower the voice unexpectedly"], 0, "Preparation and grouping help the listener process the number."),
        q(2, "What is projection primarily about?", ["Shouting", "Remaining intelligible at a distance through supported voice and articulation", "Using only high pitch"], 1, "Projection depends on efficient voice production and clear speech."),
        q(3, "Which habit can cause inconsistent online audio?", ["A steady microphone distance", "Brief thought-group pauses", "Turning away while speaking"], 2, "Changing distance and direction alters the signal reaching the microphone."),
        q(4, "Why might excessive speed increase total meeting time?", ["It creates longer words", "Repairs and repetitions can take extra time", "It prevents all pauses"], 1, "Miscommunication can cost more time than careful delivery saves."),
      ],
    },
  ],
};
