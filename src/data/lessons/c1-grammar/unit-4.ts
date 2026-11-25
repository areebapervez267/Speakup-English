import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1GrammarUnit4: LessonUnit = {
  title: "Style and register",
  description:
    "Adapt grammatical choices to literary, spoken and edited prose, and refine sentences for precision, rhythm and rhetorical control.",
  lessons: [
    {
      slug: "formal-and-literary-grammar",
      title: "Formal and literary grammar",
      summary:
        "Recognise and produce compact literary and formal structures, including result inversion, immediate-sequence inversion, hypothetical subjunctives and restrained subjunctive recommendation.",
      objective:
        "Use formal inversions and subjunctive patterns purposefully while avoiding archaic constructions that obscure meaning or exceed the intended register.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Literary grammar compresses and delays",
          paragraphs: [
            "A novelist writes: “No sooner had the bell sounded than the passengers rose.” Compared with “As soon as the bell sounded, the passengers rose,” the literary version puts the immediate sequence into a tight correlative frame. It is not simply more formal; it changes rhythm and draws attention to the speed of the response.",
            "Formal and literary structures often invert, omit or delay material that ordinary prose supplies early. Their effect depends on control. In an instruction manual, a striking inversion may be distracting; in narrative or ceremony, a restrained subjunctive may be apt. At C1, learn the conventional frame and its register before experimenting with it.",
          ],
        },
        {
          type: "rules",
          title: "Conventional frames and their limits",
          items: [
            "Use no sooner…than and hardly/scarcely…when for an action completed immediately before another. Put no sooner, hardly or scarcely first and invert the auxiliary: “Hardly had she sat down when the phone rang.”",
            "After a fronted so + adjective or such + noun phrase, invert when the phrase expresses degree or result: “So convincing was the evidence that the panel reversed its decision.”",
            "Use little with a negative sense of small amount followed by inversion: “Little did we realise that the route was closed.” Here little does not mean a small physical object.",
            "Use were for formal hypothetical meaning and the base subjunctive after mandative triggers. In purpose clauses, lest + should is a formal alternative to so that…not, but it is rare in everyday modern English.",
          ],
        },
        {
          type: "examples",
          title: "Register in the sentence",
          items: [
            {
              text: "Such was the force of the storm that the roof of the old boathouse collapsed.",
              note: "Such a noun phrase is fronted, so was precedes the subject the force.",
            },
            {
              text: "Scarcely had the gallery opened when a fire alarm forced everyone outside.",
              note: "The inversion marks the first event as immediately preceding the second.",
            },
            {
              text: "The witness requested that her statement be read in full.",
              note: "The passive mandative subjunctive suits a formal procedural request.",
            },
            {
              text: "The guard locked the door lest anyone should enter the restricted room.",
              note: "Lest should expresses prevention formally; in most everyday contexts, ‘to prevent anyone from entering’ is clearer.",
            },
          ],
        },
        {
          type: "table",
          title: "Choose the register, not just the structure",
          columns: ["Literary or formal", "Neutral alternative", "Likely context"],
          rows: [
            ["No sooner had we arrived than it began to rain.", "It began to rain as soon as we arrived.", "Narrative emphasis versus plain sequence"],
            ["Were the minister available, she could respond.", "If the minister were available, she could respond.", "Ceremonial hypothetical versus ordinary discussion"],
            ["Little did they know what would follow.", "They did not know what would follow.", "Narrative suspense versus direct reporting"],
            ["It was suggested that the matter be investigated.", "It was suggested that the matter should be investigated.", "Formal recommendation with or without should"],
          ],
        },
        {
          type: "exercise",
          title: "Control the conventional inversion",
          instructions:
            "Choose the grammatical version that also matches the intended literary or formal effect.",
          items: [
            c(
              "Complete the result inversion: “___ convincing was the explanation that the committee accepted it.”",
              ["So", "Such", "Very"],
              0,
              "So modifies the adjective convincing and triggers inversion when fronted in this result pattern.",
            ),
            c(
              "Which sentence correctly uses immediate-sequence inversion?",
              ["Hardly the doors had opened when the crowd entered.", "Hardly had the doors opened when the crowd entered.", "Hardly the doors opened had when the crowd entered."],
              1,
              "The auxiliary had precedes the subject after fronted hardly; the correlating when-clause follows.",
            ),
            c(
              "Choose the formal purpose structure closest in meaning to “We hid the notes so that nobody would find them.”",
              ["We hid the notes lest nobody should find them.", "We hid the notes lest anyone should find them.", "We hid the notes unless anyone should find them."],
              1,
              "Lest carries a negative precautionary meaning, so anyone should find them expresses what is to be prevented.",
            ),
            c(
              "Which sentence uses were for a formal hypothetical state?",
              ["Were the clock accurate, the reading would be reliable.", "Was the clock accurate, the reading would be reliable.", "Had the clock accurate, the reading would be reliable."],
              0,
              "Were is the conventional formal subjunctive form for an unreal condition with a nominal subject.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write for effect, then test the register",
          instructions:
            "Complete each transformation and name the context in which it would sound natural.",
          items: [
            p(
              "Rewrite using no sooner…than: “The applause started immediately after the curtain fell.”",
              "Model answer: No sooner had the curtain fallen than the applause started.",
              "Use past perfect inversion followed by than and a past simple clause.",
            ),
            p(
              "Rewrite with fronted such: “The disruption was so serious that all flights were cancelled.”",
              "Model answer: Such was the disruption that all flights were cancelled.",
              "Such is followed by a noun phrase and the verb is inverted.",
            ),
            p(
              "Write a formal hypothetical sentence beginning “Were I” and then provide a neutral alternative with if.",
              "Model answer: Were I responsible for the appeal, I would request an independent review. Neutral: If I were responsible for the appeal, I would request an independent review.",
              "The inversion changes formality, not the unreal meaning.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which structure most directly dramatises two events occurring one after the other?",
          ["No sooner had the doors opened than the cameras flashed.", "The doors opened and then the cameras flashed.", "Although the doors opened, the cameras flashed."],
          0,
          "The no sooner…than correlative frame with inversion explicitly foregrounds immediate sequence.",
        ),
        q(
          2,
          "What does little mean in “Little did the organisers expect such demand”?",
          ["A small object", "Not much", "A few organisers"],
          1,
          "Little has a negative quantity meaning here: the organisers did not expect such demand.",
        ),
        q(
          3,
          "Why might a writer replace “lest anyone should touch…” with “to prevent anyone from touching…”?",
          ["To make the purpose clearer in an everyday operational notice", "To turn the sentence into a past perfect", "To remove the need for a verb"],
          0,
          "Lest should is grammatical but formally restricted; the infinitive purpose phrase is more transparent for many readers.",
        ),
        q(
          4,
          "Which sentence correctly distinguishes hypothetical were from a past report?",
          ["Were always reports a completed past action.", "The system was stable always describes a hypothetical future.", "“Were the system stable” imagines a condition; “the system was stable” reports a past state."],
          2,
          "Hypothetical were does not assert that the state actually existed, whereas the indicative was reports it.",
        ),
      ],
    },
    {
      slug: "grammar-in-spoken-vs-written-english",
      title: "Grammar in spoken vs written English",
      summary:
        "Compare clause chaining, heads, tails, fronting and ellipsis in an original conversation with the denser subordination and explicit reference typical of prepared writing.",
      objective:
        "Recognise systematic spoken grammar and convert between speech and writing without labelling natural speech as incorrect or importing speech habits into formal prose.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Speech builds meaning in the moment",
          paragraphs: [
            "In a corridor conversation, people rarely plan a whole paragraph before speaking. They announce a topic, add clauses, interrupt themselves and point back with gestures or familiar words. The grammar develops as the exchange unfolds. Writing has more opportunity to revise, so it often carries explicit reference and carefully nested subordination.",
            "Spoken and written English are overlapping varieties, not a binary split between correct and incorrect forms. A lecture may contain dense planned sentences; a text message may use fragments. The useful comparison is between communicative conditions: how much planning, shared context and opportunity for repair the participants have.",
          ],
        },
        {
          type: "dialogue",
          title: "A planning conversation",
          intro:
            "This original exchange shows a topic announced before the subject, a right-dislocated tail and elliptical follow-ups.",
          lines: [
            { speaker: "Ruth", text: "The new assessment form, have you seen it?" },
            { speaker: "Dan", text: "The green one? No, I haven't. What about it?" },
            { speaker: "Ruth", text: "It's much clearer, that form. But the guidance, it's still confusing." },
            { speaker: "Dan", text: "I know. And if we launch it on Monday, we'll get complaints, won't we?" },
            { speaker: "Ruth", text: "Probably. So we delay it?" },
            { speaker: "Dan", text: "I'd rather give people another week, yes." },
          ],
        },
        {
          type: "rules",
          title: "Features with different discourse jobs",
          items: [
            "A left-dislocated head announces the topic before the full clause: “The new assessment form, have you seen it?” The noun phrase is not the grammatical subject of the following question.",
            "A right-dislocated tail repeats or specifies a pronoun after the clause: “It's much clearer, that form.” The tail helps the listener identify the referent in shared context.",
            "Clause chaining and final tags manage the developing exchange: “And if we launch it on Monday…” adds a reason, while “won't we?” seeks confirmation. Tags are not automatic after every clause.",
            "Ellipsis is high in short responses because context supplies missing material: “So we delay it?” and “I'd rather…, yes.” In formal writing, expand the referent and relation where omission could cause ambiguity.",
          ],
        },
        {
          type: "table",
          title: "Translate the same message",
          columns: ["Spoken pattern", "Example", "More explicit written version"],
          rows: [
            ["Left dislocation", "The guidance, it's confusing.", "The guidance is still confusing."],
            ["Right dislocation", "It's clearer, that form.", "That form is much clearer."],
            ["Clause chaining", "And if we launch, we'll get complaints.", "Launching on Monday may generate complaints."],
            ["Elliptical follow-up", "Probably. So we delay it?", "It is likely that complaints will follow, so should we postpone the launch?"],
          ],
        },
        {
          type: "exercise",
          title: "Analyse natural speech",
          instructions:
            "Choose the analysis that matches the structure and function in the dialogue.",
          items: [
            c(
              "What is “The new assessment form” in Ruth's first turn?",
              ["A right-dislocated tail", "A left-dislocated topic head", "The subject of have you seen it"],
              1,
              "The noun phrase is announced first, before the separate question whose subject is you.",
            ),
            c(
              "What is the function of “that form” at the end of Ruth's third turn?",
              ["It introduces a new topic", "It specifies the referent of it after the clause", "It reports a past event"],
              1,
              "The final noun phrase is a tail that makes the pronoun referent explicit in the shared conversation.",
            ),
            c(
              "Which feature most clearly seeks agreement in Dan's turn?",
              ["The green one?", "What about it?", "Won't we?"],
              2,
              "Won't we is a negative interrogative tag inviting Ruth to confirm his expectation.",
            ),
            c(
              "Which written revision best expands Ruth's elliptical follow-up?",
              ["So we delay it?", "Should we therefore postpone the launch?", "So it delays?"],
              1,
              "The revision makes the proposed action and the implicit conclusion explicit in a planned question.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Move between speech and writing",
          instructions:
            "Produce a written version, then test how each spoken feature contributes to the exchange.",
          items: [
            p(
              "Write “The timetable, it’s ready” as a planned written sentence.",
              "Model answer: The timetable is ready.",
              "Remove the left-dislocated head and retain the pronoun it as the grammatical subject.",
            ),
            p(
              "Turn “It's clearer, that form” into a formal sentence with a specific subject.",
              "Model answer: That assessment form is considerably clearer than the previous version.",
              "The noun phrase becomes the subject rather than a clarifying tail.",
            ),
            p(
              "Expand “Probably. So we delay it?” into two complete written sentences without adding facts.",
              "Model answer: Complaints are likely if the form is launched on Monday. We should therefore consider postponing the launch.",
              "State the condition and consequence, then make the proposed response explicit.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why is a left-dislocated head useful in live conversation?",
          ["It lets speakers announce a topic before formulating the full clause", "It always makes the message more formal", "It eliminates the need for shared context"],
          0,
          "The head secures the topic early and buys planning time while the rest of the clause is produced.",
        ),
        q(
          2,
          "Which sentence contains a right-dislocated tail?",
          ["The form, have you seen it?", "It's clearer, that form.", "The form is clearer than the old one."],
          1,
          "The noun phrase that form follows the clause and specifies the referent of it.",
        ),
        q(
          3,
          "Why might a formal report expand an elliptical spoken response?",
          ["Ellipsis is grammatically forbidden in writing", "Readers may lack the immediate context needed to recover omitted material", "A report must always contain longer sentences"],
          1,
          "Writing has less shared situational context, so explicit subjects and relations often improve recovery.",
        ),
        q(
          4,
          "Which statement best describes the difference between the media?",
          ["Spoken grammar is unplanned and written grammar is always complex", "Only written English uses ellipsis", "Speech often relies on immediate context and repair, while writing can foreground explicit structure"],
          2,
          "The difference is functional and overlapping: planning and shared context influence grammar in both speech and writing.",
        ),
      ],
    },
    {
      slug: "editing-for-precision-and-rhythm",
      title: "Editing for precision and rhythm",
      summary:
        "Diagnose misplaced modifiers, faulty attachment, weak parallelism and monotonous sentence patterns, then edit for both semantic precision and controlled rhythm.",
      objective:
        "Apply structural edits that clarify who does what, align parallel ideas and vary sentence length without sacrificing accuracy.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "Rhythm cannot repair unclear grammar",
          paragraphs: [
            "A sentence can sound impressive while leaving the reader uncertain. “The report was presented by the researcher who had studied the samples in a soundproof room” may modify either the study or the presentation. Moving the phrase beside the verb it belongs to resolves the ambiguity before any stylistic polishing begins.",
            "Editing for rhythm means controlling the distribution of weight: where clauses begin, where new information arrives and where the reader is allowed to pause. A series of short sentences can feel urgent or fragmented; a long periodic sentence can create suspense or unnecessary delay. Precision determines the meaning, and rhythm determines how effectively that meaning reaches the reader.",
          ],
        },
        {
          type: "rules",
          title: "Five structural checks",
          items: [
            "Place only, even, almost and nearly beside the word or phrase they modify. “Only the second trial succeeded” differs from “The second trial only succeeded” in scope and natural interpretation.",
            "Attach introductory participial phrases to an appropriate subject. “Walking through the archive, the dates on the letters surprised me” wrongly implies that the dates were walking.",
            "Make coordinated elements parallel. “The aims are to reduce waste, improve safety and for costs to fall” should use the same infinitive pattern for all three aims.",
            "Check whether a long subject delays the main verb. Use anticipatory it, split the sentence or turn an abstract noun phrase back into a clause when clarity improves.",
            "Vary sentence openings and lengths for a purpose. After a heavy analytical sentence, a short declarative may crystallise the judgement; repeated inversion for its own sake will instead sound contrived.",
          ],
        },
        {
          type: "examples",
          title: "Edits that change control, not facts",
          items: [
            {
              text: "Before: The committee nearly approved all of the recommendations. After: The committee approved nearly all of the recommendations.",
              note: "The edit changes scope: nearly now modifies all, making clear that most but not all were approved. Changing meaning requires the writer's decision.",
            },
            {
              text: "Before: Having reviewed the evidence, the report still contained several errors. After: Having reviewed the evidence, we still found several errors in the report.",
              note: "The revised subject we is the plausible reviewer, removing the dangling participial phrase.",
            },
            {
              text: "Before: The plan requires staff training, clearer signage and that access be improved. After: The plan requires staff training, clearer signage and improved access.",
              note: "All three complements are now noun phrases with parallel grammatical form.",
            },
            {
              text: "Before: It was clear to the inspectors, after a delay of several hours, that the mechanism had seized. After: The mechanism had seized. That became clear only after a delay of several hours.",
              note: "Two controlled sentences separate the fact from the delayed recognition and give the second sentence a clear focus.",
            },
          ],
        },
        {
          type: "table",
          title: "Common edit and its purpose",
          columns: ["Diagnosis", "Structural edit", "Result"],
          rows: [
            ["Ambiguous modifier placement", "Move the modifier beside its target", "Narrower, more precise meaning"],
            ["Dangling participle", "Change the subject or recast the clause", "A plausible logical attachment"],
            ["Mixed coordination", "Match the forms of coordinated items", "Cleaner rhythm and easier comparison"],
            ["Heavy abstract subject", "Restore a clause or split the sentence", "Earlier access to the main action"],
            ["Repeated inversion", "Keep one marked opening and neutralise the rest", "Emphasis becomes intentional rather than decorative"],
          ],
        },
        {
          type: "exercise",
          title: "Diagnose before rewriting",
          instructions:
            "Choose the edit that resolves the stated problem while preserving the intended facts.",
          items: [
            c(
              "You intend to say that not all of the budget was spent. Which sentence is most precise?",
              ["The department spent nearly all of the budget.", "The department nearly spent all of the budget.", "Nearly the department spent all of the budget."],
              0,
              "Nearly directly modifies all of the budget, making clear that a small part remained unspent.",
            ),
            c(
              "Which revision repairs a dangling participle in “Reading the guidance, the procedure seemed simple”?",
              ["Reading the guidance, the procedure seemed simple to us.", "Reading the guidance, we found the procedure simple.", "The procedure reading the guidance seemed simple."],
              1,
              "We supplies the human subject understood as reading the guidance.",
            ),
            c(
              "Which list has the cleanest parallel structure?",
              ["The course develops accuracy, confidence and how to listen critically", "The course develops accuracy, confidence and critical listening", "The course developing accuracy, confidence and critical listening"],
              1,
              "Accuracy, confidence and critical listening are all noun phrases governed by develops.",
            ),
            c(
              "Which edit best reduces a heavy subject while preserving the claim?",
              ["That the method had concealed systematic bias became clear only later.", "It became clear only later that the method had concealed systematic bias.", "Clear only later became that the method had concealed systematic bias."],
              1,
              "Anticipatory it allows the new that-clause to appear at the end after a compact main clause.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Run a two-pass edit",
          instructions:
            "First repair precision, then improve rhythm. Compare your versions with the models without treating them as the only solutions.",
          items: [
            p(
              "Repair the attachment: “Crossing the square at dawn, the shutters looked unusually dark.” Make the observer the subject.",
              "Model answer: Crossing the square at dawn, I noticed how unusually dark the shutters looked.",
              "The observer I is the subject of crossing.",
            ),
            p(
              "Make the coordination parallel: “The response requires a clearer policy, consultation with residents and that complaints be logged.”",
              "Model answer: The response requires a clearer policy, consultation with residents and the logging of complaints.",
              "All three objects are now noun phrases; an infinitive revision would also be possible if the subject is shared.",
            ),
            p(
              "Edit this three-clause sentence for rhythm without changing its facts: “The findings were promising, although the sample was small, and the team proposed a larger trial as a result.”",
              "Model answer: The findings were promising, although the sample was small. The team therefore proposed a larger trial.",
              "The short second sentence isolates the proposed response and gives therefore a precise logical job.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why should only be moved carefully during editing?",
          ["Its position can change which part of the sentence it limits", "It can only modify plural nouns", "It always creates inversion"],
          0,
          "Only has scope: “Only Ana objected” excludes other objectors, while “Ana objected only reluctantly” limits the manner of objection.",
        ),
        q(
          2,
          "What makes a participial opening dangle?",
          ["It is too short", "Its implied subject does not match the main clause's subject", "It contains a past participle"],
          1,
          "The reader expects the main subject to perform or undergo the participle, so a mismatch creates an illogical attachment.",
        ),
        q(
          3,
          "Which coordination is most clearly parallel?",
          ["to collect, analyse and report the data", "to collect, analysis and reporting the data", "collecting, to analyse and reported the data"],
          0,
          "Each item is an infinitive sharing to and controlling the same object, the data.",
        ),
        q(
          4,
          "What is the strongest reason to use a short sentence after a long analytical one?",
          ["To hide an unsupported claim", "To increase the number of advanced structures", "To crystallise the judgement and give the reader a controlled pause"],
          2,
          "A short declarative can provide end-focus and emphasis, but it cannot substitute for missing reasoning.",
        ),
      ],
    },
    {
      slug: "advanced-grammar-review",
      title: "Advanced grammar review",
      summary:
        "Audit an original argumentative paragraph for emphasis, modality, cohesion and register, then revise it with a justified hierarchy of grammatical choices.",
      objective:
        "Independently diagnose grammatical problems, prioritise edits and explain how structural choices alter focus, certainty and coherence.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Review means choosing, not counting",
          paragraphs: [
            "A draft paragraph contains enough advanced grammar but not enough control. It opens with two inversions, shifts from a confident deduction to an unexplained passive and uses however where the logic requires a concession. The task is not to remove every difficult structure. It is to decide which structures serve the argument and which merely compete for attention.",
            "Work in three passes. First repair meaning and grammar. Next organise given and new information so that each sentence advances the claim. Finally adjust register and rhythm. This order prevents stylistic polish from concealing an unresolved ambiguity or an unsupported conclusion.",
          ],
        },
        {
          type: "examples",
          title: "Draft and diagnostic lens",
          intro:
            "The paragraph is original material written for this lesson.",
          items: [
            {
              text: "Never had a pilot divided reviewers so sharply. What the pilot demonstrated was improved retention among frequent users. However, it may have been successful. The data were collected by the research team, and it was small. Therefore, all institutions should adopt the model.",
              note: "The first inversion is defensible for emphasis. The cleft isolates the finding. However interrupts the logic; it is not a synonym for although. The passive and ambiguous it obscure sample size, and the final recommendation overreaches.",
            },
            {
              text: "Revised: Rarely had a pilot divided reviewers so sharply. What it demonstrated was improved retention among frequent users. Although the result is promising, the sample was too small to justify general adoption. The research team collected the data from only two departments. A larger multi-site trial should precede any institution-wide decision.",
              note: "The revision reduces decorative inversion, uses the pronoun clearly, makes the concession explicit, restores agency and limits the recommendation to the evidence.",
            },
          ],
        },
        {
          type: "table",
          title: "Prioritise the review",
          columns: ["Priority", "Question", "Revision strategy"],
          rows: [
            ["1. Meaning and accuracy", "Can the reader recover who did what?", "Repair ambiguous reference, modifier scope and faulty parallelism."],
            ["2. Information flow", "Does each sentence move from known to new?", "Adjust subjects, fronting and end-weight."],
            ["3. Epistemic control", "Does the claim match the evidence?", "Calibrate may, should and must; state limitations."],
            ["4. Register and rhythm", "Are marked structures concentrated and purposeful?", "Keep one rhetorical device; neutralise decorative repetition."],
          ],
        },
        {
          type: "tip",
          title: "Use a justification test",
          text:
            "For every retained inversion, cleft or passive, complete this sentence: “I kept this structure because…” If the answer is only “it sounds advanced,” reconsider it. A strong explanation names a reader-oriented effect, such as linking to the previous sentence, isolating a contrast, foregrounding the affected process or attributing a claim to a source.",
        },
        {
          type: "exercise",
          title: "Make an editorial judgement",
          instructions:
            "Choose the strongest diagnosis or revision for each feature of the draft.",
          items: [
            c(
              "Which word in the original needs a contrastive conjunction that introduces a dependent clause?",
              ["However", "Although", "Therefore"],
              1,
              "Although the result is promising directly subordinates the concession and sets up the following limitation.",
            ),
            c(
              "What is the clearest repair for “The data were collected by the research team, and it was small”?",
              ["The research team collected the data, and the sample was small.", "The data were collected, and it was small.", "It collected the data by the research team, and it was small."],
              0,
              "The revision restores the active agent and gives the size problem its own unambiguous subject, the sample.",
            ),
            c(
              "Why is “all institutions should adopt the model” an editorial problem?",
              ["Should cannot make recommendations", "The universal recommendation exceeds the limited evidence described", "A pilot can never produce useful evidence"],
              1,
              "The stated sample does not support an unrestricted conclusion; the modal should does not supply missing evidence.",
            ),
            c(
              "Which retention of advanced grammar has the clearest reader-oriented justification?",
              ["Keep two consecutive inversions for drama", "Keep the cleft to isolate what the pilot actually demonstrated", "Keep an agentless passive to conceal the data source"],
              1,
              "The wh-cleft distinguishes the finding from interpretations or expectations, so it performs a specific focus function.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Complete a three-pass review",
          instructions:
            "Work from meaning to style. Keep a note of one retained advanced structure and one removed one.",
          items: [
            p(
              "Rewrite the sentence “However, the intervention was effective” as a concession followed by a new limitation.",
              "Model answer: Although the intervention appeared effective, the follow-up period was too short to establish lasting benefit.",
              "Although subordinates the positive finding and makes room for the limitation.",
            ),
            p(
              "Repair the reference and agency: “The reviewers tested the revised guide, and it was distributed by the publisher.”",
              "Model answer: The reviewers tested the revised guide, and the publisher then distributed it.",
              "The active by-phrase becomes the subject of the coordinated clause, while it clearly refers to the guide.",
            ),
            p(
              "Produce a three-sentence revision of the original paragraph that retains one cleft and limits the recommendation, then justify both choices.",
              "Model answer: Rarely had a pilot divided reviewers so sharply. What it demonstrated was improved retention among frequent users, although the sample came from only two departments. A larger multi-site trial should precede any decision about wider adoption. The cleft isolates the finding; should expresses a recommendation while the limitation prevents an unsupported universal claim.",
              "Prioritise evidence and scope before adding further rhetorical effects.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which issue should be corrected first in the original paragraph?",
          ["The number of inversions", "The unclear referent in the sentence about the data and sample", "The length of the word demonstrate"],
          1,
          "Ambiguity prevents the reader from understanding the evidence; stylistic features can be reviewed only after meaning is secure.",
        ),
        q(
          2,
          "Why does the revised paragraph use although instead of however?",
          ["Although directly subordinates the concession within a single controlled sentence", "However cannot appear in formal prose", "Although removes the need to mention the sample"],
          0,
          "The subordinator makes the dependency explicit and avoids an abrupt transition that leaves the logical relation vague.",
        ),
        q(
          3,
          "Which claim is best supported by the evidence as revised?",
          ["Every institution should adopt the model immediately.", "The finding justifies a larger multi-site trial.", "The pilot proves that retention cannot improve."],
          1,
          "A promising but limited finding supports further testing, not universal adoption or a categorical rejection.",
        ),
        q(
          4,
          "What is the most defensible reason to retain “What it demonstrated was…”?",
          ["It makes the sentence longer", "It removes the need to identify the pilot", "It separates the observed finding from claims the pilot did not establish"],
          2,
          "The cleft gives the specific finding a focused slot and helps the writer control the scope of the claim.",
        ),
      ],
    },
  ],
};
