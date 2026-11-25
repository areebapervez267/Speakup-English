import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1GrammarUnit1: LessonUnit = {
  title: "Emphasis and information order",
  description:
    "Shape emphasis deliberately through fronting, inversion, clefts and carefully controlled voice and word order.",
  lessons: [
    {
      slug: "fronting-and-inversion",
      title: "Fronting and inversion",
      summary:
        "Move a scene, reason or negative idea to the opening of a sentence, then decide whether emphasis calls for fronting alone or full subject–auxiliary inversion.",
      objective:
        "Use fronting and inversion to create cohesion and emphasis while preserving natural word order and accurate agreement.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Two ways to put information first",
          paragraphs: [
            "An editor reviewing a museum brochure has written: “A bronze bowl stood at the far end of the hall.” The sentence is correct, but it reveals the object before the space the visitor is moving through. Moving the locative phrase forward creates a more vivid entrance: “At the far end of the hall stood a bronze bowl.”",
            "Fronting changes the order of constituents without necessarily changing the order of subject and verb. Inversion goes further: an auxiliary or operator comes before the subject. Both can signal a connection with what has just been said, but inversion is especially common when a negative or limiting expression is fronted. The choice is rhetorical, not an automatic rule for dramatic prose.",
          ],
        },
        {
          type: "rules",
          title: "The grammatical machinery",
          items: [
            "Front an adverbial, complement or object to create a bridge from the previous sentence: “Behind the shed, we found a second path.” The subject still precedes the lexical verb.",
            "After a fronted negative or limiting adverb such as never, rarely, little, only then or not until, use subject–auxiliary inversion: “Not until the second reading did we notice the discrepancy.”",
            "If there is no existing auxiliary, add do, does or did for inversion in main clauses: “Rarely does the committee publish the raw data.” Do not add do when an auxiliary or modal is already present.",
            "With a pronominal subject, keep subject–verb order after a fronted locative phrase: “Away ran the deer” is possible, but “Away they ran” is the natural form. Full lexical-verb inversion without do is largely literary.",
          ],
        },
        {
          type: "examples",
          title: "Emphasis in different registers",
          intro:
            "Read each sentence for its opening gesture as well as its literal meaning.",
          items: [
            {
              text: "The evidence was thin. More worrying still was the absence of any independent witness.",
              note: "A fronted comparative adjective keeps the reader's attention on the second problem without repeating “the evidence” as the subject.",
            },
            {
              text: "Only after the invoices had been reconciled could the trustees approve the grant.",
              note: "The focused time expression triggers inversion; had already supplies the auxiliary.",
            },
            {
              text: "Had the reviewers seen the revised methods, they might have reached a different conclusion.",
              note: "This is conditional inversion without if: Had they seen… would express the same condition.",
            },
            {
              text: "At no point in the interview did she claim that the figures had been verified.",
              note: "The negative prepositional phrase comes first, so did precedes she. The main verb remains claim.",
            },
          ],
        },
        {
          type: "table",
          title: "Fronting, inversion or neither?",
          caption:
            "These are tendencies, not a ban on other orders in an appropriate context.",
          columns: ["Purpose", "Natural pattern", "Contextual effect"],
          rows: [
            ["Continue a location", "Into the clearing stepped a fox.", "Cinematic, often literary movement"],
            ["Link to a prior idea", "That problem we can resolve.", "Treats the problem as given information"],
            ["Focus a negative extent", "Under no circumstances should the valve be opened.", "Formal warning with strong restriction"],
            ["Express a formal condition", "Were the forecast accurate, demand would rise.", "Concise alternative to if the forecast were…"],
          ],
        },
        {
          type: "exercise",
          title: "Choose the controlled opening",
          instructions:
            "Select the sentence that best fits the stated purpose and remains grammatical.",
          items: [
            c(
              "You want to state a formal prohibition. Which opening is most suitable?",
              ["Under no circumstances the valve should be opened.", "Under no circumstances should the valve be opened.", "Under no circumstances the valve opened."],
              1,
              "A fronted negative expression requires subject–auxiliary inversion: should comes before the subject.",
            ),
            c(
              "Which sentence uses inversion after a fronted negative adverb?",
              ["Never I had seen such a crowded platform.", "Never had I seen such a crowded platform.", "Such a crowded platform never I had seen."],
              1,
              "The sentence uses full inversion; never is fronted and auxiliary had precedes the subject I.",
            ),
            c(
              "Complete the conditional inversion: “___ the proposal unacceptable, the chair asked for revisions.”",
              ["Were", "Was", "Had"],
              0,
              "Were is the formal subjunctive form used before a nominal subject in this inverted conditional.",
            ),
            c(
              "Which version avoids an awkward literary inversion with a pronoun subject?",
              ["Away they ran towards the river.", "Away ran they towards the river.", "Away did they ran towards the river."],
              0,
              "With the pronoun subject they, ordinary subject–verb order is natural after the fronted adverb.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rewrite for information flow",
          instructions:
            "Produce one controlled version of each sentence, then explain what your opening makes prominent.",
          items: [
            p(
              "Rewrite with a fronted negative: “The treasurer did not disclose the deficit until the audit was complete.”",
              "Not until the audit was complete did the treasurer disclose the deficit.",
              "Move the whole time phrase to the opening and invert did with the subject.",
            ),
            p(
              "Rewrite without if in formal style: “If the pilot had received the warning, she would have delayed take-off.”",
              "Had the pilot received the warning, she would have delayed take-off.",
              "Use were, had or should before the subject for conditional inversion.",
            ),
            p(
              "Create a scene-setting sentence beginning with “Beyond the harbour wall” and retain the phrase “a line of fishing boats”.",
              "Model answer: Beyond the harbour wall stretched a line of fishing boats, their lights trembling in the swell.",
              "The locative phrase is fronted; a literary lexical-verb inversion can follow.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "In “Not until dawn did the rescuers see the path,” what triggers inversion?",
          ["The plural subject", "The fronted negative time expression", "The absence of an object"],
          1,
          "Not until dawn is a negative or limiting expression placed at the front, so did must precede the rescuers.",
        ),
        q(
          2,
          "Which revision creates the clearest link from a discussion of the deadline?",
          ["The budget was another issue.", "Another issue was the budget.", "The budget, moreover, was an issue."],
          2,
          "The fronted object “The budget” followed by moreover explicitly connects the issue to the preceding point about the deadline.",
        ),
        q(
          3,
          "Why is “Were the findings confirmed” a possible opening to a formal sentence?",
          ["Were replaces a conditional phrase such as if the findings were", "Were is required after every singular subject", "The sentence must describe a habitual past action"],
          0,
          "Inverted were introduces a hypothetical condition without the word if; this is not a statement that the findings were confirmed.",
        ),
        q(
          4,
          "Which sentence is grammatical but deliberately literary?",
          ["On the ridge towered a ruined watchtower.", "On the ridge towered it a ruined watchtower.", "On the ridge did towered a ruined watchtower."],
          0,
          "Locative fronting with full lexical-verb inversion and a nominal subject is grammatical, especially in descriptive or literary prose.",
        ),
      ],
    },
    {
      slug: "cleft-sentences-and-focus",
      title: "Cleft sentences and focus",
      summary:
        "Split a proposition into background and focus, using it-clefts and wh-clefts to identify exactly which person, thing, time or circumstance is at issue.",
      objective:
        "Build accurate clefts and choose their focus to correct a misunderstanding, contrast alternatives or organise a formal explanation.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "One message, different centres of attention",
          paragraphs: [
            "During a design review, three people offer the same basic fact: the north entrance failed because of a faulty sensor. “A faulty sensor caused the north entrance to fail” is neutral. “It was a faulty sensor that caused the north entrance to fail” directs attention to the cause. “What caused the north entrance to fail was a faulty sensor” builds the answer into the final slot.",
            "A cleft presents the rest of the sentence as assumed or taken for granted, then isolates a focused constituent. That assumed background matters. If your reader does not yet know that something went wrong, an it-cleft may sound oddly defensive. Clefts are most useful when you are comparing explanations, correcting an expectation or returning to a question already raised.",
          ],
        },
        {
          type: "rules",
          title: "Build the two common patterns",
          items: [
            "It-cleft: it + form of be + focused constituent + that/who/which clause. Use that for a thing or clause, who for a person in subject focus, and which where a definite antecedent makes it natural.",
            "Wh-cleft: wh-clause + form of be + focused complement. The wh-clause supplies the known background: “What we need is a clearer brief.”",
            "The focused element can be a noun phrase, adverb phrase or full clause: “It was in March that the defect appeared.” A finite subordinate clause in an it-cleft normally takes that.",
            "Do not use a comma merely because the sentence contains that. The identifying relative-like clause belongs closely to the focused element, and spoken stress identifies the intended focus.",
          ],
        },
        {
          type: "examples",
          title: "Focus as an argumentative tool",
          items: [
            {
              text: "The prototype did not fail at random; it was under sustained load that the cracks first appeared.",
              note: "The second clause isolates the testing condition rather than repeating the whole first proposition.",
            },
            {
              text: "What matters to the residents is not the height of the building but the loss of afternoon light.",
              note: "A wh-cleft allows a balanced contrast between two complement noun phrases.",
            },
            {
              text: "It was the deputy who challenged the assumption, not the project director.",
              note: "The focus is the person who challenged; the background clause states what she did.",
            },
            {
              text: "What the first report omitted was any account of how the sample had been selected.",
              note: "The omitted content is placed at the end for end-focus, while the report's omission is treated as known.",
            },
          ],
        },
        {
          type: "table",
          title: "Neutral statement to controlled focus",
          columns: ["Neutral wording", "Cleft version", "Presupposed background"],
          rows: [
            ["The pilot noticed the warning first.", "It was the pilot who noticed the warning first.", "Someone noticed the warning first."],
            ["The warning appeared at 06:40.", "It was at 06:40 that the warning appeared.", "The warning appeared at a particular time."],
            ["We need a second trial.", "What we need is a second trial.", "We need something."],
            ["The team changed the deadline.", "What the team changed was the deadline.", "The team changed something."],
          ],
        },
        {
          type: "exercise",
          title: "Identify and repair the focus",
          instructions:
            "Choose the cleft that makes the requested element prominent and keeps the grammar intact.",
          items: [
            c(
              "Which it-cleft focuses the cause rather than the result?",
              ["It was the cause that we had misunderstood.", "It was a power failure that caused the shutdown.", "It was caused that a power failure the shutdown."],
              1,
              "The focused noun phrase is “a power failure”; the background clause supplies the result, the shutdown.",
            ),
            c(
              "Which wh-cleft correctly focuses what the editors rejected?",
              ["What the editors rejected were three unsupported claims.", "What rejected the editors were three unsupported claims.", "What the editors were rejected three unsupported claims."],
              0,
              "The wh-clause has its own subject and verb, and the plural complement takes were.",
            ),
            c(
              "Choose the sentence that isolates the time of the discovery.",
              ["It was the researchers who discovered the leak.", "It was in August that the researchers discovered the leak.", "What the researchers discovered it was in August."],
              1,
              "The prepositional phrase in August is the focused constituent between was and that.",
            ),
            c(
              "Which option is the grammatical wh-cleft?",
              ["What surprised us the scale of the losses was.", "What surprised us was the scale of the losses.", "What was surprised us was the scale of the losses."],
              1,
              "The subject wh-clause is followed directly by was and its focused complement.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Create and test a cleft",
          instructions:
            "Write a cleft for each purpose. Underline the focused words and state what background the sentence assumes.",
          items: [
            p(
              "Focus the person in: “Mira proposed the alternative route.”",
              "It was Mira who proposed the alternative route.",
              "Pattern: it + was + person + who + background clause.",
            ),
            p(
              "Focus the missing information in: “The summary did not include the costs of maintenance.”",
              "What the summary did not include was the cost of maintenance. / What the summary omitted was the cost of maintenance.",
              "Keep the known omission in the wh-clause and place the missing information after was.",
            ),
            p(
              "Write a wh-cleft in which the focused complement contains a contrast, using “a diagnosis” and “a treatment”.",
              "Model answer: What the panel offered was a diagnosis, not a treatment.",
              "After was, coordinate two parallel noun phrases and place the corrective alternative second.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "A colleague says, “The delay was technical.” You want to contrast the actual reason. Which version best focuses cost rather than technical problems?",
          ["It was the cost that caused the delay.", "It was delayed that the cost caused.", "What caused that the delay was the cost."],
          0,
          "The focused constituent after was is “the cost”; the clause treats the delay as an established result.",
        ),
        q(
          2,
          "In “What the survey measured was usage, not need,” what is treated as given?",
          ["Usage is more important than need", "The survey measured something", "The survey was inaccurate"],
          1,
          "The wh-clause assumes that the survey measured something; the cleft identifies that something as usage.",
        ),
        q(
          3,
          "Which sentence has the most natural it-cleft structure?",
          ["It was because the signal weakened that the recording stopped.", "It was the signal weakened because that the recording stopped.", "It was weakened the signal that because the recording stopped."],
          0,
          "A focused because-clause may form the complement of it was, with that introducing the background clause.",
        ),
        q(
          4,
          "Why might “What we need is more evidence” be preferable to a neutral statement in a seminar?",
          ["It removes the need for evidence", "It changes the statement into a question", "It makes the existing need explicit and places the proposed remedy at the end"],
          2,
          "The opening clause acknowledges a shared need; the final position gives end-focus to the specific proposal, more evidence.",
        ),
      ],
    },
    {
      slug: "passive-constructions-for-emphasis",
      title: "Passive constructions for emphasis",
      summary:
        "Control simple, perfect, modal and complex passive structures so that the affected process takes prominence while agency is retained, obscured or deliberately recovered.",
      objective:
        "Select and form passive constructions that manage information flow, including accurate agent phrases and passives following modal or reporting structures.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "The passive is a viewpoint, not a disappearance",
          paragraphs: [
            "A safety notice reads: “Every alarm must be tested before the tank is refilled.” The writer has no need to name the person testing it; the procedure and the object affected by it matter more. In an incident report, however, a passive may require expansion: “The alarm was disabled by a contractor working after hours.”",
            "Using the passive does not make writing objective by itself. It can responsibly suppress an unknown or irrelevant agent, but it can also conceal responsibility. At C1, the skill is not merely converting active sentences. It is deciding which participant belongs at the opening, whether the agent should appear, and how the passive interacts with tense, aspect and modality.",
          ],
        },
        {
          type: "rules",
          title: "Form and function",
          items: [
            "Form a finite passive with be in the appropriate tense plus a past participle: is repaired, was being repaired, has been repaired, will have been repaired. The participle does not change to agree with the agent.",
            "Use by with the doer or cause: “The gate was opened by the duty engineer.” Use with for an instrument or material where appropriate: “The opening was sealed with resin.” Do not confuse the two.",
            "A modal before be expresses possibility, necessity or permission: “The data may have been altered.” For a negative inference about the past, use cannot/can't have been + participle.",
            "Complex passive patterns include be thought to have been damaged and be reported to be under investigation. Check who is understood as the subject of the infinitive before changing voice.",
          ],
        },
        {
          type: "examples",
          title: "Choosing the angle of attention",
          items: [
            {
              text: "Before the inspection, three samples had been selected without replacement.",
              note: "The samples occupy the topic position; the past perfect passive establishes a process completed before the inspection.",
            },
            {
              text: "The revised protocol is expected to reduce errors, although it has not yet been evaluated independently.",
              note: "Two passive structures distinguish expectation from completed evaluation.",
            },
            {
              text: "The window was found open at 06:15; it had been forced with a narrow metal tool.",
              note: "The second passive implies an unspecified agent while still identifying the likely instrument with with.",
            },
            {
              text: "Visitors are asked not to touch the manuscripts, which are kept under controlled light.",
              note: "The first passive politely directs behaviour; the second foregrounds the manuscripts and their conditions.",
            },
          ],
        },
        {
          type: "table",
          title: "Voice choices in a report",
          columns: ["Active", "Passive alternative", "Reason for the change"],
          rows: [
            ["The council rejected the application.", "The application was rejected by the council.", "Keeps the application as the continuing topic."],
            ["Someone cancelled the ferry at short notice.", "The ferry was cancelled at short notice.", "Leaves an unknown agent unstated."],
            ["The lab is testing the samples.", "The samples are being tested.", "Foregrounds an ongoing process."],
            ["We will finish the review by Friday.", "The review will have been completed by Friday.", "Frames completion relative to a future deadline."],
          ],
        },
        {
          type: "exercise",
          title: "Control voice, agency and aspect",
          instructions:
            "Choose the version that is grammatical and best fits the stated focus.",
          items: [
            c(
              "The affected system must remain the topic, and the testing is ongoing. Which form fits?",
              ["The samples are testing.", "The samples are being tested.", "The samples have been testing."],
              1,
              "The present continuous passive uses are being + past participle to describe an ongoing process affecting the samples.",
            ),
            c(
              "Which sentence identifies the instrument rather than the human agent?",
              ["The lock was damaged by a crowbar.", "The lock was damaged with a crowbar.", "The lock was damaged a crowbar."],
              1,
              "With introduces the instrument used; by would identify the responsible person or agent.",
            ),
            c(
              "Which modal passive expresses a strong deduction about a past event?",
              ["The message must be encrypted yesterday.", "The message must have been encrypted yesterday.", "The message must had been encrypted yesterday."],
              1,
              "A perfect modal passive is must have been + past participle; here it expresses a deduction from present evidence.",
            ),
            c(
              "Which complex passive is correctly formed?",
              ["The vessel is believed to have been abandoned.", "The vessel is believed to have abandoned.", "The vessel is believing to have been abandoned."],
              0,
              "Believed is part of the passive reporting structure, and to have been abandoned supplies the earlier passive event.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Revise the reporting angle",
          instructions:
            "Rewrite each sentence with the requested passive or active choice, preserving all time and modality information.",
          items: [
            p(
              "Make the documents the topic and keep the uncertainty: “Analysts may have altered the documents.”",
              "The documents may have been altered. (Add by analysts only if the possible agent is important.)",
              "Modal + have + been + past participle.",
            ),
            p(
              "Convert to the passive with an instrument: “A technician cut the cable with insulated pliers.”",
              "The cable was cut with insulated pliers (by a technician).",
              "With names the tool; the human agent is optional after by.",
            ),
            p(
              "Write a past perfect passive sentence saying that the route had been closed before the convoy arrived.",
              "Model answer: The route had been closed before the convoy arrived.",
              "Use had + been + past participle for a completed passive process before another past point.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "In an investigation, why might the writer choose “The records were removed” rather than an active clause?",
          ["The construction proves that no one was responsible", "It keeps the records central while avoiding an unverified identification of the agent", "It changes the event into a future action"],
          1,
          "The passive can suppress an unknown agent without denying responsibility; naming a person would require evidence.",
        ),
        q(
          2,
          "Which sentence expresses that the repairs will be complete before a future arrival?",
          ["The repairs will complete before the team arrives.", "The repairs will have been completed before the team arrives.", "The repairs will have completing before the team arrives."],
          1,
          "The future perfect passive combines will have been with the past participle completed.",
        ),
        q(
          3,
          "What is the difference between “damaged by debris” and “damaged with debris” in these examples?",
          ["The first treats debris as the agent or cause; the second presents it as the means used", "The first is past and the second is present", "The first is active and the second is passive"],
          0,
          "By introduces an agent or cause, while with commonly introduces the instrument or material involved.",
        ),
        q(
          4,
          "Which revision most transparently assigns responsibility without assuming guilt?",
          ["Mistakes were made.", "Someone made mistakes.", "The senior pharmacist was responsible for the labelling errors, according to the audit."],
          2,
          "The final version names the responsible party and attributes the conclusion to a source, making the basis of the claim explicit.",
        ),
      ],
    },
    {
      slug: "word-order-and-information-structure",
      title: "Word order and information structure",
      summary:
        "Arrange clauses around what the reader already knows, what is new and what is long, using end-focus, end-weight and topical fronting to prevent avoidable processing strain.",
      objective:
        "Reorder clauses and noun phrases so that given information leads, new information receives emphasis and heavy constituents do not obscure the sentence's structure.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Syntax serves the reader's working memory",
          paragraphs: [
            "Consider a report opening with “That the supplier had ignored three separate warnings became clear only during cross-examination.” It is grammatical, but the reader must hold a long subject clause before reaching the main predicate. “It became clear only during cross-examination that the supplier had ignored three separate warnings” places the long new information at the end.",
            "Information structure helps explain why grammatically interchangeable orders can feel very different. Given information normally comes early, familiar connections are made through subjects and determiners, and genuinely new or heavy material is often saved for the end. A good sentence does not mechanically follow one pattern; it makes the next idea easier to recover.",
          ],
        },
        {
          type: "rules",
          title: "Three pressures on word order",
          items: [
            "Given–new order: begin with a known topic and move towards new information. “The northern route was blocked; the southern route remained open” flows more naturally than reversing that sequence without a reason.",
            "End-focus: the final content word often carries the main news. Compare “We discussed the proposal briefly” with “Briefly, we discussed the proposal”; the former makes the proposal, the latter the discussion itself, more prominent.",
            "End-weight: a long phrase or clause is easier near the end. Use anticipatory it or there where natural: “It is vital that every participant receive the instructions” is clearer than a long subject clause before is vital.",
          ],
        },
        {
          type: "examples",
          title: "Natural order is a reasoning tool",
          items: [
            {
              text: "The first trial was too small. Harder to assess were the long-term effects on sleep.",
              note: "Subject–complement inversion moves the heavy, new complement to the end while linking back to the evaluation problem.",
            },
            {
              text: "We found the map in an attic drawer, together with two letters that neither of us had seen before.",
              note: "The heavy coordinated phrase follows the lighter verb phrase and remains attached to the discovery.",
            },
            {
              text: "There remains a real possibility that the policy will increase demand for private tutoring.",
              note: "Existential there postpones the heavy new subject clause and allows end-focus on demand.",
            },
            {
              text: "This much is certain: the revised timetable has not solved the problem.",
              note: "The demonstrative object is fronted for cohesion; the colon introduces the proposition that completes it.",
            },
          ],
        },
        {
          type: "table",
          title: "Reordering without changing the facts",
          columns: ["Less effective order", "Reader-oriented order", "Structural reason"],
          rows: [
            ["To understand the failure requires several kinds of evidence.", "Understanding the failure requires several kinds of evidence.", "A compact noun phrase avoids a heavy subject clause."],
            ["The team published the findings in full after months of verification.", "After months of verification, the team published the findings in full.", "The time frame becomes an explicit bridge to prior context."],
            ["A list of the unresolved objections is attached.", "Attached is a list of the unresolved objections.", "Literary inversion postpones a heavy subject."],
            ["That consumers understood the label seemed unlikely.", "It seemed unlikely that consumers understood the label.", "Anticipatory it allows the new clause to appear at the end."],
          ],
        },
        {
          type: "exercise",
          title: "Choose the stronger information flow",
          instructions:
            "Select the revision that best follows the described context. Several sentences may be grammatical.",
          items: [
            c(
              "The previous sentence discusses the initial survey. You now introduce a more serious problem. Which opening connects most clearly?",
              ["A second problem concerns the sampling method.", "The sampling method concerns a second problem.", "That a second problem concerns the sampling method."],
              0,
              "A second problem provides a clean discourse link, while the new detail comes later in the clause.",
            ),
            c(
              "Which version best manages a long new subject?",
              ["That the two accounts contradicted each other was immediately obvious.", "It was immediately obvious that the two accounts contradicted each other.", "Immediately obvious that the two accounts contradicted each other it was."],
              1,
              "Anticipatory it carries the initial position, leaving the long subject clause in the easier final position.",
            ),
            c(
              "Which sentence uses inversion to place a heavy subject at the end?",
              ["A compromise is still possible.", "Still possible is a compromise that both sides could accept.", "A compromise that both sides could accept is still possible."],
              1,
              "Adjective complement fronting is followed by subject–verb inversion, placing the long subject phrase last.",
            ),
            c(
              "The topic is already the final paragraph. Which ending gives the new proposal end-focus?",
              ["A pilot scheme is what we propose.", "What we propose is a pilot scheme.", "We propose what a pilot scheme is."],
              1,
              "The wh-cleft treats the act of proposing as background and places a pilot scheme in the final focus slot.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Edit for processing ease",
          instructions:
            "Reorder each sentence for the stated reader, keeping its meaning. Then name the principle you used.",
          items: [
            p(
              "Rewrite with anticipatory it: “That the witness had changed her account emerged during the appeal.”",
              "It emerged during the appeal that the witness had changed her account.",
              "The new clause moves to the end; during the appeal supplies the time frame.",
            ),
            p(
              "Use subject–complement inversion: “A solution acceptable to both departments is still possible.”",
              "Still possible is a solution acceptable to both departments.",
              "Front the adjective complement and invert with is.",
            ),
            p(
              "Write two sentences about a delayed train: begin the first with given information and reserve the new departure time for the second ending.",
              "Model answer: The delayed train remained at platform four. Its revised departure time is 18:42.",
              "Keep the train as the topic and make the time the final new information.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why is “It emerged later that…” often easier to process than beginning with a that-clause?",
          ["It removes the need for a main verb", "It postpones the heavy new clause until after the reader has the main structure", "It always makes the sentence more formal"],
          1,
          "Anticipatory it gives the reader an early subject; the long clause then arrives in the end-weighted position.",
        ),
        q(
          2,
          "Which arrangement best follows a paragraph about rising operating costs?",
          ["This rise is accounted for by the new pricing model.", "The new pricing model accounts for this rise.", "A new pricing model."],
          0,
          "This rise refers back to the known cost increase, while the passive by-phrase introduces the new explanation.",
        ),
        q(
          3,
          "In “Harder to assess were the long-term effects,” why is the order effective?",
          ["It makes the adjective the main verb", "It converts the statement into a question", "It links the evaluation to earlier problems and saves the long subject for the end"],
          2,
          "The fronted adjective echoes the previous assessment; inversion places the heavier new subject phrase last.",
        ),
        q(
          4,
          "Which sentence relies on existential there rather than inversion after a fronted locative phrase?",
          ["Beyond the library lay an archive.", "There lay an archive beyond the library.", "An archive lay there beyond the library."],
          1,
          "Existential there is a grammatical subject introducing the new noun phrase; it is not a fronted place adverb.",
        ),
      ],
    },
    {
      slug: "emphasis-review-in-authentic-texts",
      title: "Emphasis review in authentic texts",
      summary:
        "Analyse an original editorial paragraph to see how fronting, inversion, clefts and passives cooperate across sentences rather than operating as isolated ornaments.",
      objective:
        "Annotate the grammatical choices in a short authentic-style text and revise it for a different reader while preserving the argument.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Read the paragraph as a sequence",
          paragraphs: [
            "A newspaper architecture critic is reviewing the conversion of a railway shed into a public library. The paragraph below is written for this lesson in the register of a reasoned editorial; it is not a quotation from a published article.",
            "Do not begin by labelling every unusual structure. First ask what each sentence assumes, where its main news falls and how it joins the previous one. The same feature can connect, emphasise or conceal responsibility depending on its position in the sequence.",
          ],
        },
        {
          type: "examples",
          title: "Editorial text: The shed that became a library",
          intro:
            "Read the three sentences as one movement from scene to judgement to explanation.",
          items: [
            {
              text: "Behind the original brick façade stood a reading room that its designers had chosen not to make monumental.",
              note: "Locative fronting gives the reader a physical entrance; the relative clause then states the design intention.",
            },
            {
              text: "What matters here is not the cost of the conversion but the decision to keep the old structure visible.",
              note: "The wh-cleft sets up an explicit contrast and makes the value judgement arrive at the end.",
            },
            {
              text: "That decision has been defended by the project team as an act of preservation, although the most damaged parts were replaced with deliberately modern brickwork.",
              note: "The passive attributes the defence to the team, while the concessive clause prevents the claim of preservation from going unqualified.",
            },
          ],
        },
        {
          type: "table",
          title: "Map the paragraph's information flow",
          columns: ["Sentence part", "Given or new?", "Grammatical resource", "Effect"],
          rows: [
            ["Behind the original brick façade", "New scene-setting", "Adverbial fronting", "Guides the reader into the building"],
            ["stood a reading room", "New participant", "Literary inversion", "Gives end-focus to the room"],
            ["What matters here", "Shared question", "Wh-cleft subject", "Prepares a contrast"],
            ["has been defended by the project team", "New claim and source", "Agentive passive", "Makes the team's defence accountable"],
          ],
        },
        {
          type: "tip",
          title: "Audit rather than decorate",
          text:
            "After a first draft, underline the opening words of each sentence and circle its final content phrase. If every sentence starts with the same noun or every ending repeats it, the sequence may be too flat. Remove one rhetorical device at a time and read aloud: if the sentence becomes easier to follow without losing the intended focus, the device may have been decorative rather than useful.",
        },
        {
          type: "exercise",
          title: "Read for grammatical purpose",
          instructions:
            "Use the editorial text to answer these questions about structure and effect.",
          items: [
            c(
              "Which phrase is fronted to establish the scene?",
              ["That its designers had chosen", "Behind the original brick façade", "As an act of preservation"],
              1,
              "The locative phrase opens the sentence and provides the spatial setting for the inversion that follows.",
            ),
            c(
              "What does the wh-cleft in the second sentence contrast?",
              ["Two materials", "The building's cost and the decision to preserve visibility", "Two project teams"],
              1,
              "The complements after the contrast are the cost of conversion and the decision to keep the old structure visible.",
            ),
            c(
              "Why is the first passive in the third sentence useful?",
              ["It conceals every participant", "It foregrounds the decision and identifies the team responsible for the defence", "It places the defence in the future"],
              1,
              "The subject is the decision, and the by-phrase explicitly attributes the defence to the project team.",
            ),
            c(
              "Which clause qualifies the project team's claim?",
              ["That its designers had chosen", "Behind the original brick façade", "Although the most damaged parts were replaced"],
              2,
              "The although-clause introduces a limitation that complicates the claim that the project was an act of preservation.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rebuild the review for another audience",
          instructions:
            "Answer the tasks in order, then produce a compact revised version of the paragraph.",
          items: [
            p(
              "Replace the literary inversion in sentence one with ordinary subject–verb order.",
              "A reading room that its designers had chosen not to make monumental stood behind the original brick façade.",
              "Keep the relative clause attached to the reading room.",
            ),
            p(
              "Rewrite sentence two as one direct declarative sentence with two parallel objects.",
              "Model answer: The decision to keep the old structure visible matters more here than the cost of the conversion.",
              "Make the two compared elements grammatically parallel.",
            ),
            p(
              "Combine your revisions into a two- or three-sentence paragraph for a general news audience and justify one remaining choice.",
              "Model answer: Behind the library's brick façade is a reading room that its designers chose not to make monumental. Preserving the visible old structure matters more than the conversion cost, although the project team used modern brickwork to replace the most damaged sections.",
              "Aim for transparent information flow, not as many advanced structures as possible.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the main structural movement across the three sentences?",
          ["Scene-setting, explicit contrast, then a qualified claim", "A question, a command and a timetable", "A chronological list of construction dates"],
          0,
          "The reader enters the space, encounters a contrast in values and then hears the project team's defence with a concession.",
        ),
        q(
          2,
          "Why does the second sentence use “not…but…”?",
          ["To show that the building had two entrances", "To separate a less important consideration from the critic's main criterion", "To deny that any money was spent"],
          1,
          "The correlative contrast distinguishes cost from the critic's more important test: whether the old structure remains visible.",
        ),
        q(
          3,
          "Which revision would make the agent of the replacement less transparent?",
          ["The project team replaced the most damaged parts with modern brickwork.", "The most damaged parts were replaced with modern brickwork.", "According to the project team, modern brickwork replaced the most damaged parts."],
          1,
          "The agentless passive suppresses who carried out the replacement, even though it retains a by-phrase-free description of the process.",
        ),
        q(
          4,
          "If the critic wanted to foreground the reading room immediately, which opening would be most direct?",
          ["Behind the original brick façade", "What matters here", "The reading room"],
          2,
          "A simple noun-phrase subject makes the room the initial topic; the other openings delay it for scene-setting or contrast.",
        ),
      ],
    },
  ],
};
