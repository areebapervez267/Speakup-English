import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2GrammarUnit2: LessonUnit = {
  title: "Aspect and time",
  description:
    "Control perfect and progressive aspect, repeated action, narrative viewpoint and future-in-the-past forms to create precise temporal and stylistic meaning.",
  lessons: [
    {
      slug: "perfect-aspect-in-advanced-discourse",
      title: "Perfect aspect in advanced discourse",
      summary:
        "Use perfect forms to relate events to a reference point, mark experience and change, and maintain temporal relations inside infinitives, gerunds and reported argument.",
      objective:
        "Select perfect simple or continuous forms by meaning, including perfect non-finite structures and carefully bounded future-perfect claims.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "The perfect looks from one point to another",
          paragraphs: [
            "An editor writes, “I have sent the manuscript,” meaning it is now in the recipient's hands and the sending is relevant to the present situation. “I sent it last Tuesday” simply locates the sending in past time. The difference is not accuracy versus inaccuracy; it is whether the event is viewed as connected to a current reference point.",
            "Perfect aspect is relational. The present perfect connects a past event or state to now, the past perfect connects it to an earlier past viewpoint, and the future perfect connects completion to a future reference point. The continuous perfect adds duration and often incompletion or recent evidence. Advanced control also requires placing the perfect correctly inside a larger non-finite or reported structure.",
          ],
        },
        {
          type: "rules",
          title: "Choose the relation, not merely the tense name",
          items: [
            "Use present perfect simple for a completed event with present relevance, a state continuing to now, or experience up to now: “The council has revised the policy”; “She has lived here for years”; “Have you used this system?”",
            "Use present perfect continuous for an activity continuing to now or recently stopped with visible results: “The team has been testing the prototype all morning.” A finished quantity such as three tests normally favours the simple.",
            "Use past perfect to establish an event or state before another past reference point: “By the time the hearing began, the report had already been circulated.” The comparison point may be implicit but must be recoverable.",
            "Use perfect non-finite forms when their own time precedes the governing viewpoint: “She seems to have misunderstood”; “He regrets having missed the deadline.” Keep the perfect rather than repeating the main clause's past tense.",
          ],
        },
        {
          type: "examples",
          title: "Perfect forms under pressure",
          items: [
            {
              text: "The results have improved since the calibration, although the cause has not been established.",
              note: "The first perfect opens a period continuing to now; the second distinguishes observed change from an unresolved explanation.",
            },
            {
              text: "By the end of June, the archive will have digitised all records created before 1950.",
              note: "Will have digitised sets completion before a future reference point, not a prediction extending indefinitely.",
            },
            {
              text: "The witness recalled that the lights had been out for several hours before the alarm sounded.",
              note: "The past perfect passive establishes a preceding state inside recalled, preserving the witness's past viewpoint.",
            },
            {
              text: "Having reviewed the revised chapter, the editor realised that several citations had been removed.",
              note: "The perfect participial clause precedes the main past event; the past perfect clause establishes an even earlier removal.",
            },
          ],
        },
        {
          type: "table",
          title: "Reference points and aspect",
          columns: ["Form", "Reference point", "Typical meaning"],
          rows: [
            ["has completed", "Now", "Completion with present relevance"],
            ["has been completing", "Now", "Ongoing or recently ongoing activity"],
            ["had completed", "An earlier past point", "Completion before another past event"],
            ["will have completed", "A future point", "Completion before a stated or understood future deadline"],
          ],
        },
        {
          type: "exercise",
          title: "Place the event on the reference timeline",
          instructions:
            "Choose the form that expresses the intended temporal relation and aspectual meaning.",
          items: [
            c(
              "The activity started this morning and continues now. Which form is most natural?",
              ["The technicians have repaired the pump.", "The technicians have been repairing the pump.", "The technicians had repaired the pump."],
              1,
              "The present perfect continuous foregrounds the ongoing activity from its start in the past up to now.",
            ),
            c(
              "Choose the form for a completed quantity: three reports were finished.",
              ["We have been writing three reports.", "We have written three reports.", "We had been writing three reports."],
              1,
              "A completed count favours the present perfect simple; the continuous form would suggest an activity whose completion is less relevant.",
            ),
            c(
              "Complete the reported relation: “The curator explained that the manuscript ___ transferred to the vault two years earlier.”",
              ["had been", "has been", "will have been"],
              0,
              "Past perfect passive places the transfer before the curator's past explanation.",
            ),
            c(
              "Choose the accurate perfect infinitive: “The sample appears ___ during transport.”",
              ["to have damaged", "to have been damaged", "to have damaging"],
              1,
              "The sample undergoes damage before the present inference, so the perfect passive infinitive is required.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Construct layered temporal relations",
          instructions:
            "Write each sentence and identify the reference point that licenses the perfect form.",
          items: [
            p(
              "Use present perfect continuous for an investigation that began last week and is still running.",
              "Model answer: The investigators have been examining the accounts since last week.",
              "Since last week defines a period extending to now.",
            ),
            p(
              "Use past perfect passive: “The notice was withdrawn before the inquiry opened.”",
              "Model answer: The notice had been withdrawn before the inquiry opened.",
              "The withdrawal precedes the past opening of the inquiry.",
            ),
            p(
              "Write a future perfect sentence with a clear deadline, then explain why the simple future would change the meaning.",
              "Model answer: The laboratory will have processed all samples by Friday noon. The simple future would place processing at or after that point without guaranteeing completion before it.",
              "Will have processed sets completion relative to the deadline.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which sentence places an event before another past event?",
          ["The committee had approved the budget before it published the report.", "The committee has approved the budget before it publishes the report.", "The committee will have approved the budget before it published the report."],
          0,
          "The past perfect had approved establishes the earlier event relative to the past simple published.",
        ),
        q(
          2,
          "Why is “I have written three chapters” more natural than “I have been writing three chapters” for a finished count?",
          ["The continuous form cannot follow I", "The simple perfect presents a completed quantity, while the continuous focuses on the activity itself", "Three chapters requires the past perfect"],
          1,
          "Aspectual choice depends on whether the speaker presents completion or ongoing activity, not only on the number.",
        ),
        q(
          3,
          "What does “will have completed” require for clear meaning?",
          ["A past-tense reporting verb", "A repeated habitual action", "A future reference point before which completion is situated"],
          2,
          "The future perfect relates completion to a future deadline or viewpoint, whether stated explicitly or recoverable from context.",
        ),
        q(
          4,
          "Which sentence correctly uses a perfect gerund after a past-tense verb?",
          ["He denied having altered the record.", "He denied having alter the record.", "He denied to having altered the record."],
          0,
          "Having + past participle locates the alteration before the denial while remaining a gerund complement of denied.",
        ),
      ],
    },
    {
      slug: "continuous-and-repeated-aspect",
      title: "Continuous and repeated aspect",
      summary:
        "Distinguish unfolding activity, temporary behaviour, repeated events and changing states, using progressive and iterative structures to control aspect beyond textbook examples.",
      objective:
        "Use continuous and repeated-aspect forms accurately with dynamic, stative and achievement verbs, including marked habitual progressives and iterative would/used to.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Grammar can change how a verb is understood",
          paragraphs: [
            "“I think the proposal is risky” normally describes a mental state. “I am thinking about the proposal” treats thought as an activity unfolding over time. “I have been thinking about the proposal for days” adds duration and current relevance. Some stative verbs therefore have a dynamic use in the progressive, although not every stative verb can be used this way naturally.",
            "Repeated meaning is not always marked by the continuous. “The alarm rings twice a day” uses the simple present for a schedule; “The alarm is always ringing during maintenance” uses a marked progressive to express irritation or unexpected frequency; “We used to test it monthly” locates a past routine. At C2, aspect combines verb meaning, context and viewpoint rather than following a single formal rule.",
          ],
        },
        {
          type: "rules",
          title: "Activity, repetition and change",
          items: [
            "Use the progressive to view an event as unfolding around a reference point: “At 09:00 the engineers were calibrating the sensor.” The activity may have begun earlier and continued later.",
            "Achievement verbs normally resist the progressive when they denote a single instantaneous result: “The light flashed” is more natural than “The light was flashing” unless repeated flashes are intended. “Be finding” can be natural for an emerging discovery.",
            "Always/constantly/forever + progressive can mark a repeated habit, often with annoyance or surprise: “The printer is constantly jamming.” The simple form does not carry that evaluative implication.",
            "Use used to for past states and habits that no longer hold. Would can mark repeated past actions but not past states: “We would walk there every summer” is possible; “The path would be muddy” is not the standard habitual equivalent.",
          ],
        },
        {
          type: "examples",
          title: "Aspect shifts that alter viewpoint",
          items: [
            {
              text: "The old pump knocks at start-up; during the winter it is always knocking, even when the pressure is low.",
              note: "The simple presents a general pattern; the marked progressive adds frequency and evaluative colour.",
            },
            {
              text: "She is being unusually cautious about the release, which is why the review is taking longer.",
              note: "Being + adjective describes deliberate temporary behaviour rather than a permanent character trait.",
            },
            {
              text: "We used to print every receipt, but the new system keeps a digital record instead.",
              note: "Used to marks the discontinued past routine; keeps + -ing describes an ongoing repeated process.",
            },
            {
              text: "Each winter we would carry supplies across the frozen lake.",
              note: "Would expresses repeated past action, not a single future event or a past state.",
            },
          ],
        },
        {
          type: "table",
          title: "Select the aspectual frame",
          columns: ["Intended view", "Form", "Example"],
          rows: [
            ["Activity in progress at a past moment", "Past continuous", "At noon, the team was testing the valve."],
            ["Repeated action with evaluative colour", "Always + continuous", "The software is always losing unsaved changes."],
            ["Discontinued past state", "used to + base verb", "The archive used to be open on Sundays."],
            ["Repeated past action in narrative", "would + base verb", "Every evening she would check the locks."],
          ],
        },
        {
          type: "exercise",
          title: "Control aspect and lexical meaning",
          instructions:
            "Choose the sentence that best expresses the intended viewpoint and remains idiomatic.",
          items: [
            c(
              "You want to describe a single completed flash, not repeated flashing. Which form fits?",
              ["The beacon was flashing once.", "The beacon flashed.", "The beacon used to flash."],
              1,
              "The simple past presents the flash as a completed achievement; the other forms suggest repetition or a past pattern.",
            ),
            c(
              "Which sentence describes temporary deliberate behaviour?",
              ["He is being especially careful with the evidence.", "He is careful with the evidence.", "He was being careful with the evidence forever."],
              0,
              "The progressive with be allows a temporary behavioural reading of careful.",
            ),
            c(
              "Which sentence correctly uses would for a repeated past action?",
              ["The room would be silent.", "We would check the seals every morning.", "We would to check the seals every morning."],
              1,
              "Would + base verb can express repeated past action; it is not the standard habitual form for the past state in the first option.",
            ),
            c(
              "Choose the marked habitual progressive expressing irritation.",
              ["The connection drops.", "The connection is always dropping.", "The connection has dropped."],
              1,
              "Always with the progressive conveys repeated annoyance or unexpected frequency rather than a neutral schedule.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Change the viewpoint, not the facts",
          instructions:
            "Write each version and identify the aspectual contrast it creates.",
          items: [
            p(
              "Turn “The team tested the system for two hours yesterday” into an activity in progress at a past moment.",
              "Model answer: At 15:00 yesterday, the team was testing the system.",
              "The past continuous opens a viewpoint inside the ongoing activity.",
            ),
            p(
              "Use always + progressive to express frustration: “The sensor resets at the worst possible moment.”",
              "Model answer: The sensor is always resetting at the worst possible moment.",
              "The marked progressive adds evaluative habitual meaning.",
            ),
            p(
              "Write a used to sentence about a past state and a would sentence about a repeated past action.",
              "Model answer: The laboratory used to be in the basement. Each Friday, we would review the samples there.",
              "Used to can take a state; habitual would takes an action verb.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What does “is constantly interrupting” usually add to “interrupts”?",
          ["A future obligation", "Repeated frequency with an often evaluative tone", "A single completed past event"],
          1,
          "Constantly with the progressive marks recurring interruption and often conveys irritation or surprise.",
        ),
        q(
          2,
          "Why is “The house would be near the coast” not a standard habitual past sentence?",
          ["Habitual would requires an action verb rather than a stative state", "Would cannot follow house", "The sentence is present perfect"],
          0,
          "Used to is the usual habitual form for discontinued past states; habitual would is restricted to repeated dynamic actions.",
        ),
        q(
          3,
          "Which interpretation is most natural for “We are finding that demand is increasing”?",
          ["A single discovery is completed instantly with no relevance to now", "A conclusion is emerging over repeated current experience", "Demand existed only in the distant past"],
          1,
          "The progressive turns find into an unfolding process of discovery supported by ongoing experience.",
        ),
        q(
          4,
          "Which sentence contrasts a past routine with its present replacement most clearly?",
          ["We will test manually and now monitored automatically.", "We would be testing manually, but now monitoring automatically.", "We used to test manually, but now we monitor automatically."],
          2,
          "Used to marks the discontinued routine, while the time adverbial now and present simple identify the current practice.",
        ),
      ],
    },
    {
      slug: "narrative-time-and-viewpoint",
      title: "Narrative time and viewpoint",
      summary:
        "Control temporal sequencing and deictic shifts in narrative, including past-perfect anchoring, historic present and free indirect style that preserves a character's viewpoint.",
      objective:
        "Analyse and produce narrative passages in which tense, aspect and time expressions establish chronology and align the reader with a narrator or character.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Tense locates the narrator as well as the event",
          paragraphs: [
            "“Mara entered the station. She had missed the last connection” places both events in the past, but the past perfect makes the missed connection earlier from the viewpoint of her entrance. Add “now” in a thought—“Now what?”—and the narrative briefly adopts Mara's temporal position rather than the narrator's later one.",
            "Narrative viewpoint is built through small grammatical choices. Past simple advances the main story, past perfect establishes prior circumstances, and past continuous can supply an unfolding background. The historic present can renew immediacy, while free indirect style combines third-person reference with a character's perceptions, questions and evaluative language. These effects must be controlled rather than mixed accidentally.",
          ],
        },
        {
          type: "rules",
          title: "Anchor time and consciousness",
          items: [
            "Use past perfect for events anterior to the main narrative line, but avoid repeating it when chronology is already clear. A sequence such as had seen, had turned and had left can obscure rather than clarify the order.",
            "The historic present uses present-tense forms to narrate past events: “She opens the door and stops.” It can intensify immediacy, but an unintentional shift into the present may confuse the timeline.",
            "In free indirect style, third-person pronouns and past tense coexist with character-like deixis and questions: “Tomorrow she would have to explain it. Why had no one warned her?” The future-in-the-past and internal question reflect her consciousness.",
            "Backshift in reported thought or speech normally moves present to past and will to would, but deictic words such as now and tomorrow must be interpreted from the character's viewpoint, not mechanically replaced.",
          ],
        },
        {
          type: "examples",
          title: "Viewpoint inside three sentences",
          items: [
            {
              text: "Jon had expected an empty platform. Instead, every bench was occupied, and the departure board was flickering above him.",
              note: "Past perfect anchors the expectation; the past continuous board supplies a changing background to his perception.",
            },
            {
              text: "Tomorrow she would tell him the truth. The thought steadied her more than she had expected.",
              note: "Would presents the future from her past viewpoint; the comparison remains within the narrative past.",
            },
            {
              text: "The door opens. Nobody is there. Priya steps inside anyway.",
              note: "The historic present puts the reader inside the action; consistency is needed if the surrounding passage remains in past tense.",
            },
            {
              text: "Surely they had not changed the code again. He entered the old sequence and waited.",
              note: "The character-like question and past perfect create free indirect access to his thought without quotation marks.",
            },
          ],
        },
        {
          type: "table",
          title: "Temporal resources and narrative jobs",
          columns: ["Resource", "Example", "Narrative function"],
          rows: [
            ["Past simple main line", "She reached the harbour.", "Advances the story"],
            ["Past perfect anteriority", "She had missed the ferry.", "Supplies earlier background"],
            ["Past continuous unfolding", "Rain was sweeping the quay.", "Creates a simultaneous scene"],
            ["Free indirect deixis", "Tomorrow everything would change.", "Aligns time with a character's thought"],
          ],
        },
        {
          type: "exercise",
          title: "Read from the narrative viewpoint",
          instructions:
            "Choose the analysis or continuation that preserves the stated time and point of view.",
          items: [
            c(
              "In “She reached the office. The meeting had begun twenty minutes earlier,” what does the past perfect establish?",
              ["A meeting after her arrival", "A meeting before the reference point of her arrival", "A habitual meeting"],
              1,
              "Had begun places the meeting's start earlier than the past moment when she reached the office.",
            ),
            c(
              "Which continuation best preserves free indirect access to the character's future thought?",
              ["Tomorrow he would resign.", "Tomorrow he will have resigned.", "Tomorrow he had been resigning."],
              0,
              "Would expresses the anticipated future from the character's past viewpoint without quotation or direct thought.",
            ),
            c(
              "Which sentence uses the historic present consistently?",
              ["She opens the door and sees the empty room.", "She opened the door and sees the empty room.", "She opens the door and saw the empty room."],
              0,
              "Both verbs use present tense, creating a deliberate immediate narrative rather than an accidental shift.",
            ),
            c(
              "Which sentence combines third-person reference with an internal question?",
              ["“Why had no one warned her?” Leila asked.", "Leila asked why no one had warned her.", "Why had no one warned her?"],
              1,
              "The reported question retains the internal perspective while using third-person reference; the other options frame the thought differently.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a controlled viewpoint shift",
          instructions:
            "Complete each task and identify the reference point from which time is interpreted.",
          items: [
            p(
              "Write two past-tense narrative sentences in which the second uses past perfect to establish an earlier event.",
              "Model answer: Amir reached the archive. He had left the key at home.",
              "Reached sets the narrative reference point; had left precedes it.",
            ),
            p(
              "Write a free indirect sentence containing tomorrow and would from a character's past viewpoint.",
              "Model answer: Tomorrow she would have to face the committee, and the thought made her pause.",
              "Tomorrow is anchored to the character's present, while would places the anticipated action in her future.",
            ),
            p(
              "Rewrite a three-event past narrative in the historic present without changing the order: arrived, paused, entered.",
              "Model answer: He arrives, pauses at the threshold and enters.",
              "Keep all three event verbs in the present tense to maintain the historic-present frame.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the main function of the past perfect in narrative?",
          ["To create a habitual future action", "To establish an event or state before another past reference point", "To guarantee chronological order without any context"],
          1,
          "The past perfect marks anteriority relative to a past viewpoint; excessive use can actually make chronology harder to follow.",
        ),
        q(
          2,
          "In “Tomorrow she would leave,” what anchors tomorrow?",
          ["The character's past viewpoint", "The author's date of publication", "A future narrator unrelated to the scene"],
          0,
          "The deictic tomorrow is interpreted from the character's past present, while would expresses her anticipated future.",
        ),
        q(
          3,
          "Which sentence most clearly demonstrates free indirect style?",
          ["She thought, ‘I must go.’", "The narrator explained that she had to go.", "She must go."],
          2,
          "The third-person pronoun and past tense combine with a character-like judgement, giving indirect access to her thought.",
        ),
        q(
          4,
          "Why can an unintentional tense shift to the historic present be disruptive?",
          ["The present tense is ungrammatical in fiction", "It may make readers lose track of which events belong to the narrative past", "It eliminates all earlier events"],
          1,
          "Historic present is effective when controlled; an unexplained switch can blur the timeline and narrative frame.",
        ),
      ],
    },
    {
      slug: "future-in-the-past",
      title: "Future in the past",
      summary:
        "Distinguish intentions, expectations, arrangements, destined outcomes and unfulfilled plans viewed from a past perspective using would, was going to, was to and related forms.",
      objective:
        "Select future-in-the-past structures according to the past viewpoint and the speaker's judgement of what was planned, expected or actually fulfilled.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "The future changes when the viewpoint moves",
          paragraphs: [
            "A biographer writes, “In March, the expedition was to leave in June.” The departure was future relative to March, but it may already have happened before the biography was written. “The expedition would leave in June” makes the event an expectation from the earlier viewpoint; “was going to leave” can suggest an intention that was later frustrated.",
            "Future-in-the-past forms do not all mean the same thing. Some report arrangements, some expectations, some destinies and some plans that did not take place. The historian must choose whether to present what was foreseeable at the time, what was scheduled, or what ultimately failed. Context and completion often determine which reading is available.",
          ],
        },
        {
          type: "rules",
          title: "Separate plan, expectation and outcome",
          items: [
            "Use was/were going to + base verb for an intention or prediction viewed from the past. “The council was going to approve the plan” may imply that it later did not, especially when a reversal follows.",
            "Use would + base verb for a future event viewed from a past viewpoint, often inside narration or reported thought: “She knew that the journey would take three days.” Would can also describe a past habit, so context must disambiguate.",
            "Use was/were to + base verb for an arranged, destined or subsequently known future: “The two were to meet only once more.” It can carry a sense of fate or historical outcome rather than intention alone.",
            "Use was/were about to for an imminent event and was/were on the point of for an event almost beginning. Was/were to have + participle can report a plan or obligation that was not fulfilled: “The train was to have left at noon.”",
          ],
        },
        {
          type: "examples",
          title: "Future viewed from an earlier moment",
          items: [
            {
              text: "The negotiators believed that an agreement would be reached before the end of the week.",
              note: "Would reports their expectation from the past viewpoint; the sentence does not itself confirm that it happened.",
            },
            {
              text: "The expedition was going to sail on Friday, but a damaged rudder kept it in harbour.",
              note: "The later reversal supports the intention-not-fulfilled reading of was going to.",
            },
            {
              text: "The building was to survive two sieges before finally becoming a museum.",
              note: "Was to presents the later historical sequence from an earlier narrative position.",
            },
            {
              text: "The ceremony was about to begin when the power failed.",
              note: "Was about to marks an event on the verge of happening at the past moment of interruption.",
            },
          ],
        },
        {
          type: "table",
          title: "Forms and likely readings",
          columns: ["Form", "Primary reading", "Completion clue"],
          rows: [
            ["was going to leave", "Intention or expected event", "Later context may show reversal"],
            ["would leave", "Future from a past viewpoint, or repeated habit", "A time expression and main narrative context"],
            ["was to leave", "Arrangement, destiny or known later outcome", "Historical consequence often follows"],
            ["was to have left", "Plan or obligation not fulfilled", "The perfect form strongly suggests non-completion"],
          ],
        },
        {
          type: "exercise",
          title: "Choose the past perspective",
          instructions:
            "Select the form that best conveys the stated intention, expectation or outcome.",
          items: [
            c(
              "A planned departure was cancelled. Which form most strongly suggests the unfulfilled intention?",
              ["The ship would depart on Friday.", "The ship was going to depart on Friday.", "The ship was departing on Friday."],
              1,
              "Was going to naturally supports an intention reading, which the later cancellation can frustrate.",
            ),
            c(
              "Choose the form for a historical outcome viewed from an earlier narrative point: the treaty eventually ended the dispute.",
              ["The treaty would to end the dispute.", "The treaty was going to ending the dispute.", "The treaty was to end the dispute."],
              2,
              "Was to + base verb can present a later known outcome from an earlier historical viewpoint.",
            ),
            c(
              "Which sentence most clearly reports an unfulfilled scheduled action?",
              ["The train was to have departed at noon.", "The train was about to departing at noon.", "The train would to depart at noon."],
              0,
              "Was to have + past participle expresses a plan or arrangement that was not realised.",
            ),
            c(
              "Complete the imminent-event interruption: “The witness ___ answer when the chair interrupted her.”",
              ["was about to", "was to have", "would have"],
              0,
              "Was about to places the answer immediately after the past moment of interruption.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Narrate from the past moment",
          instructions:
            "Write each sentence and state what later information, if any, the form implies.",
          items: [
            p(
              "Use would to report an expectation held in 2019 about a 2021 opening.",
              "Model answer: In 2019, the director said that the centre would open in 2021.",
              "Would places the opening after the 2019 viewpoint; the sentence does not confirm the actual opening.",
            ),
            p(
              "Use was to have to report a cancelled launch.",
              "Model answer: The satellite was to have been launched in April, but the defect was discovered during testing.",
              "The perfect passive form plus the later reversal signals non-completion.",
            ),
            p(
              "Write two future-in-the-past sentences, one about an imminent interruption and one about a destined later role.",
              "Model answer: The chair was about to announce the result when the fire alarm sounded. The assistant was later to become the organisation's first female director.",
              "The was later to form presents a future role from an earlier narrative viewpoint.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What does “would” add in “In 1998, she predicted that the system would transform banking”?",
          ["It places the transformation in the future relative to the past prediction", "It guarantees that the prediction was correct", "It reports a repeated past action only"],
          0,
          "Would backshifts the future from the 1998 viewpoint; the actual outcome requires further context.",
        ),
        q(
          2,
          "Which form most strongly implies that a scheduled launch did not happen?",
          ["was to launch", "was going to launch", "was to have launched"],
          2,
          "Was to have + past participle conventionally reports an unrealised plan or obligation.",
        ),
        q(
          3,
          "Why can would be ambiguous in historical narrative?",
          ["It can express either a future viewed from the past or a repeated past habit", "It has no grammatical meaning", "It is restricted to questions"],
          0,
          "The surrounding time frame and lexical context determine whether would is future-in-the-past or habitual.",
        ),
        q(
          4,
          "Which sentence marks an event as immediately impending at a past moment?",
          ["The verdict was to have been announced.", "The verdict was about to be announced.", "The verdict would have announced."],
          1,
          "Was about to be announces an imminent passive event at the past reference point.",
        ),
      ],
    },
    {
      slug: "time-tense-and-literary-effect",
      title: "Time, tense and literary effect",
      summary:
        "Compare alternative tense-aspect designs in an original literary passage to control summary, scene, repetition, delay and emphasis without losing chronological clarity.",
      objective:
        "Analyse how tense and aspect shape narrative pace and focus, then revise a passage by choosing forms for literary effect rather than applying a mechanical chronology.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Form selects the reader's attention",
          paragraphs: [
            "“For years, Elena repaired clocks” compresses a long routine into a single summary sentence. “Elena was repairing the clock when the bell rang” slows the narrative into a scene with an unfolding action and an interruption. Neither is more vivid by definition; one establishes duration, the other places the reader at a precise moment.",
            "Literary time is selective. Writers stretch important actions, summarise uneventful periods, return to earlier events and sometimes deny the reader a secure chronology. Perfect forms can reveal what a character knows; simple forms can suppress duration; present tense can create commentary or immediacy. The effect depends on the surrounding passage and the reader's expectations.",
          ],
        },
        {
          type: "rules",
          title: "Design pace through aspect",
          items: [
            "Use simple forms for summary and completed events: “For a decade she ran the workshop.” Use continuous forms to open a scene around an unfolding process: “She was closing the workshop when the letter arrived.”",
            "Iterative simple forms can present repeated behaviour efficiently: “Each morning he checked the tide.” A marked progressive such as was always checking may add emotional colour rather than mere repetition.",
            "Perfect forms can delay causal or chronological explanation: “The shop was empty when I arrived. It had closed three days earlier.” The second sentence supplies hidden history after the immediate scene.",
            "A present-tense shift can move from narration into general commentary or the historic present. Keep the boundary clear: “This is what the archive cannot tell us” comments on the evidence, while “He enters the archive” resumes dramatised action.",
          ],
        },
        {
          type: "examples",
          title: "Three designs for the same events",
          items: [
            {
              text: "Summary: For seven winters, Noor kept the lighthouse lamp burning through the worst of the storms.",
              note: "The simple past and duration phrase compress repeated maintenance into a compact background statement.",
            },
            {
              text: "Scene: Noor was trimming the wick when the lamp went dark. She had cleaned the glass only an hour before.",
              note: "The continuous slows the interruption, while the past perfect reveals an immediately preceding action.",
            },
            {
              text: "Commentary and scene: The lamp is more than an object here; it is a promise. He strikes a match and reaches for the wick.",
              note: "The first present sentence is interpretive commentary; the second shifts into historic-present action.",
            },
          ],
        },
        {
          type: "table",
          title: "Choose the narrative lens",
          columns: ["Desired effect", "Tense-aspect design", "Example"],
          rows: [
            ["Compress a period", "Past simple + duration", "She maintained the garden for twenty years."],
            ["Slow an interruption", "Past continuous + when-clause", "She was locking the gate when the storm began."],
            ["Reveal prior history", "Past perfect", "The path had been closed for months."],
            ["Generalise beyond the scene", "Present simple commentary", "Routine conceals as much as it reveals."],
          ],
        },
        {
          type: "exercise",
          title: "Compare literary effects",
          instructions:
            "Choose the version whose temporal design best creates the stated effect.",
          items: [
            c(
              "You want to summarise ten years of repeated work in one background sentence. Which is most suitable?",
              ["She was repairing the instrument when the visitors arrived.", "For ten years, she repaired the instrument every spring.", "She has been repairing the instrument since tomorrow."],
              1,
              "The simple past with a duration and time adverbial compresses the repeated work into a background summary.",
            ),
            c(
              "Which sentence slows the action around an interruption?",
              ["The lights failed.", "The lights had failed.", "The audience was applauding when the lights failed."],
              2,
              "The past continuous places the reader inside ongoing applause, while the past simple supplies the interruption.",
            ),
            c(
              "Which sentence reveals hidden history after the immediate scene?",
              ["The shop was closed when I arrived. It had shut three days earlier.", "The shop is closed. It shuts at six.", "The shop had closed, had locked, had gone."],
              0,
              "The past perfect explains an earlier closure after the reader has encountered the present state of the scene.",
            ),
            c(
              "Which sentence functions primarily as present-tense commentary?",
              ["He opens the drawer.", "He opened the drawer.", "The drawer symbolises the life he has postponed."],
              2,
              "The symbolic interpretation is a general comment in the present, not an event in the historic-present sequence.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Revise for pace and reveal",
          instructions:
            "Write each alternative and explain what the reader is invited to notice at each point.",
          items: [
            p(
              "Compress into a summary: “Every winter for twelve years, Leila walked to the ridge and checked the beacon.”",
              "Model answer: For twelve winters, Leila walked to the ridge to check the beacon.",
              "The simple past and duration phrase remove the repeated step-by-step rhythm.",
            ),
            p(
              "Slow the same material into a scene with a past continuous action and a sudden past simple event.",
              "Model answer: Leila was climbing to the ridge when the beacon went dark.",
              "The continuous creates duration; went dark supplies the event that interrupts it.",
            ),
            p(
              "Write a three-sentence passage that begins in past simple, reveals prior history with past perfect and ends with a present-tense interpretive comment.",
              "Model answer: The watchmaker opened the wooden case. The mechanism had been still for forty years. Such silence makes a small sound feel enormous.",
              "Move from event, to hidden history, to the narrator's general observation.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why is the simple past often effective for a narrative summary?",
          ["It eliminates all duration from the story", "It presents repeated or extended events as a compressed completed whole", "It always produces immediate scene"],
          1,
          "A simple past clause with a duration or frequency expression can efficiently summarise a long period.",
        ),
        q(
          2,
          "What does a past perfect clause reveal in “The workshop was silent. It had closed the previous winter”?",
          ["An event earlier than the past scene", "A future opening", "A repeated present habit"],
          0,
          "Had closed supplies history before the narrator's encounter with the silent workshop.",
        ),
        q(
          3,
          "What is the key difference between a present-tense symbolic comment and the historic present?",
          ["A symbolic comment interprets the scene, while the historic present narrates past events as if occurring now", "The historic present is always ungrammatical", "The symbolic comment can only use past tense"],
          0,
          "The same tense form can serve different discourse functions; the surrounding content distinguishes interpretation from action.",
        ),
        q(
          4,
          "Which revision creates the greatest sense of delay around a decision?",
          ["She decided immediately.", "She has decided.", "For several minutes she was weighing the options, turning each one over in silence."],
          2,
          "The continuous phrase and repeated internal image stretch the decision into a process rather than presenting it as an instant.",
        ),
      ],
    },
  ],
};
