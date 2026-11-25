import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2GrammarUnit1: LessonUnit = {
  title: "Syntactic range",
  description:
    "Control layered subordination, marked inversion, advanced focusing, detached supplements and highly elliptical syntax for expressive precision.",
  lessons: [
    {
      slug: "complex-subordination",
      title: "Complex subordination",
      summary:
        "Build and unpick deeply embedded clauses by distinguishing complements from adjuncts, finite from non-finite forms and the scope of each subordinator.",
      objective:
        "Analyse nested clause structure and choose finite, infinitival or participial subordination that preserves logical scope and readable argument.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Long sentences are hierarchical, not merely long",
          paragraphs: [
            "A legal reviewer must decide whether “The panel noted that the analyst claimed the figures had been checked” reports a check, a claim about a check, or only the panel's observation of that claim. Each embedded clause depends on a different verb. Losing the hierarchy turns several layers of attribution into one unsupported fact.",
            "Advanced subordination is the ability to control those layers. A complement completes the meaning of a verb, noun or adjective; an adjunct adds circumstances such as time, reason or concession. Finite clauses make their subject and tense explicit, while non-finite clauses depend more heavily on context for the understood subject. The best structure is the one that makes the intended dependencies and scope easiest to recover.",
          ],
        },
        {
          type: "rules",
          title: "Control the dependency chain",
          items: [
            "Distinguish a that-complement from a relative clause. “The claim that the data were incomplete” completes the noun claim; “the data that were incomplete” selects which data. A comma before the complement is normally unnecessary.",
            "Use anticipatory it when the subject of a clause would be heavy: “It was unclear whether the funding would continue.” The delayed subject clause retains its own internal structure.",
            "Non-finite clauses still have subjects, but often implicit ones. “After reviewing the evidence, the committee…” implies that the committee reviewed it; changing the main subject may create an unintended attachment.",
            "Match the complement pattern to the governing word: decide to act, insist on acting, require an applicant to act, and require that an applicant act. Similar meanings do not guarantee identical grammar.",
          ],
        },
        {
          type: "examples",
          title: "Embedding without losing the argument",
          items: [
            {
              text: "The editor doubted that the researcher had seen the revised methods, a doubt the reply did nothing to dispel.",
              note: "The first that-clause is the complement of doubted; a doubt refers back to the whole proposition.",
            },
            {
              text: "It remains uncertain whether the delay reflects a shortage of parts or a failure to reorder them.",
              note: "Anticipatory it delays a whether-clause containing two coordinated possible explanations.",
            },
            {
              text: "The officer, having been told that the route was unsafe, ordered the convoy to turn back.",
              note: "A perfect passive participial clause supplies a preceding circumstance and an implied human agent.",
            },
            {
              text: "The claim on which the recommendation rested assumed that productivity could be measured by output alone.",
              note: "A relative clause modifies claim, while a that-clause completes assumed; the two dependencies must not be collapsed.",
            },
          ],
        },
        {
          type: "table",
          title: "Choose the subordinating form",
          columns: ["Function", "Finite option", "Non-finite option"],
          rows: [
            ["Express a reported proposition", "She said that the phase was complete.", "She reported the phase as complete."],
            ["Give a prior circumstance", "After the panel had adjourned, we left.", "The panel having adjourned, we left."],
            ["State a purpose", "We repeated the test so that others could verify it.", "We repeated the test for others to verify."],
            ["Identify a reason", "Because the signal was weak, we stopped.", "The signal being weak, we stopped."],
          ],
        },
        {
          type: "exercise",
          title: "Recover the clause hierarchy",
          instructions:
            "Choose the analysis or structure that preserves the intended dependency and complement pattern.",
          items: [
            c(
              "Which sentence most clearly reports that the panel accepted a claim rather than accepting the disputed fact itself?",
              ["The panel accepted that the figures were accurate.", "The panel accepted the claim that the figures were accurate.", "The figures were accurate that the panel accepted."],
              1,
              "The that-clause completes claim; accepted takes the noun phrase the claim as its object, preserving attribution.",
            ),
            c(
              "Choose the correct complement pattern after require.",
              ["The safety officer required that every visitor sign the register.", "The safety officer required every visitor signing the register.", "The safety officer required every visitor to signing the register."],
              0,
              "Require can take a mandative that-clause with base-form sign; the other options use non-standard patterns here.",
            ),
            c(
              "Which opening has a clear implicit subject for the participial clause?",
              ["Having reviewed the evidence, the report was rejected.", "Having reviewed the evidence, the reviewers rejected the report.", "Having reviewed the evidence, rejecting the report was decided."],
              1,
              "The reviewers are plausibly both the people who reviewed and the people who rejected, so the attachment is coherent.",
            ),
            c(
              "Which clause is a complement of the noun rather than a relative clause?",
              ["the evidence that supported the claim", "the evidence that the claim was exaggerated", "the evidence that arrived late"],
              1,
              "That the claim was exaggerated states the content of evidence; the other that-clauses restrict which evidence is meant.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Construct and dismantle embedded syntax",
          instructions:
            "Complete each task, then identify the main clause and every dependent clause.",
          items: [
            p(
              "Use anticipatory it with whether: “Whether the system will recover is still not known.”",
              "Model answer: It is still not known whether the system will recover.",
              "It occupies the subject position; the whether-clause supplies the delayed proposition.",
            ),
            p(
              "Embed a claim inside a report inside a statement: use “said”, “claimed” and “the pilot had succeeded”.",
              "Model answer: The spokesperson said that the lead researcher claimed that the pilot had succeeded.",
              "The spokesperson said [the researcher claimed [the pilot had succeeded]].",
            ),
            p(
              "Rewrite “Because the sample was too small, the researchers did not generalise” with an absolute construction.",
              "Model answer: The sample being too small, the researchers did not generalise.",
              "Noun phrase + being + adjective forms a detached absolute clause expressing cause.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "In “The chair accepted the recommendation that the study be repeated,” what does the that-clause modify?",
          ["The chair", "The noun recommendation", "The verb accepted as a relative clause"],
          1,
          "The clause states the content of the recommendation; it is a complement to the noun, not a clause restricting the chair.",
        ),
        q(
          2,
          "What is the main advantage of anticipatory it in a heavily embedded sentence?",
          ["It gives the main clause an early subject and postpones a heavy complement", "It removes all subordinate clauses", "It makes every embedded verb past tense"],
          0,
          "It preserves the information but improves processing by placing the complex clause after the main predicate.",
        ),
        q(
          3,
          "Which revision best avoids an ambiguous participial attachment?",
          ["Leaving the chamber, the vote was counted.", "Leaving the chamber, the clerk counted the vote.", "The vote leaving the chamber was counted."],
          1,
          "The clerk is a plausible subject for leaving and counting; the original implies that the vote was leaving.",
        ),
        q(
          4,
          "Why can “insist on acting” not be changed to “insist to act” without altering standard grammar?",
          ["Both forms always have identical meaning", "Act cannot follow any verb", "Insist licenses the preposition on before a gerund, not a to-infinitive"],
          2,
          "Complementation is lexically determined: insist on + -ing is the standard pattern in this construction.",
        ),
      ],
    },
    {
      slug: "inversion-and-negative-fronting",
      title: "Inversion and negative fronting",
      summary:
        "Command the full range of negative and limiting fronting, including lexical-verb inversion, correlative sequences and cases where a negative subject does not trigger inversion.",
      objective:
        "Use subject–operator inversion after fronted negatives with complete accuracy and distinguish it from ordinary fronting and subject-first negative constructions.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Negative fronting is a marked commitment",
          paragraphs: [
            "“At no time did the ministry publish the model” does more than negate the statement. It places the extent of the denial at the opening and makes the denial rhetorically emphatic. Such inversion is common in formal argument, legal drafting and narrative suspense, but repeated use can make neutral information sound accusatory.",
            "The trigger is the fronted expression and its scope, not merely the presence of a negative word somewhere in the sentence. “Not a single document was missing” begins with a negative subject but does not invert the subject and verb. “Not a single document did we find” begins with a fronted negative object, so inversion is required. Careful parsing prevents overgeneralisation.",
          ],
        },
        {
          type: "rules",
          title: "Apply the inversion test",
          items: [
            "Fronted negatives such as never, nowhere, rarely, seldom, little and not since normally require an auxiliary or modal before the subject: “Seldom has the committee published its dissenting minutes.”",
            "Negative prepositional phrases including at no time, under no circumstances, in no way and on no account also trigger inversion when they modify the clause: “In no way can this be treated as a neutral sample.”",
            "If no auxiliary exists, use do-support in main clauses: “Not once did she explain the discrepancy.” In a subordinate clause, do-support is generally not used: “Only then did we realise…” versus “we realised that only then had the fault been diagnosed.”",
            "With a lexical verb and no auxiliary, inversion is possible in formal or literary style with a nominal subject: “Down came the shutters.” With a pronoun subject, ordinary subject–verb order remains: “Down they came.”",
          ],
        },
        {
          type: "examples",
          title: "The range and the restraint",
          items: [
            {
              text: "Not only did the pilot reduce errors, but it also shortened the average wait.",
              note: "Not only triggers inversion in the first coordinated clause; the second clause returns to ordinary order.",
            },
            {
              text: "No sooner had the auditors left than the servers were taken offline.",
              note: "The correlative frame requires inversion after no sooner and normally pairs it with than.",
            },
            {
              text: "Under no circumstances is the emergency supply to be used for routine testing.",
              note: "A negative PP is fronted; is supplies the operator before the subject the emergency supply.",
            },
            {
              text: "Not a single participant was excluded from the final analysis.",
              note: "The negative noun phrase is the grammatical subject, so no inversion follows.",
            },
          ],
        },
        {
          type: "table",
          title: "Invert or retain subject-first order?",
          columns: ["Opening", "Example", "Reason"],
          rows: [
            ["Never / rarely / seldom", "Never had the issue been documented.", "Fronted negative adverb triggers inversion"],
            ["Only + time expression", "Only after the hearing did the full record emerge.", "Limiting focus triggers inversion"],
            ["Not only + clause", "Not only was the sample small, but it was biased.", "Inversion affects the first main clause"],
            ["Negative noun-phrase subject", "Not one case was confirmed.", "The negative phrase is already the subject"],
          ],
        },
        {
          type: "exercise",
          title: "Parse the opening before choosing the verb",
          instructions:
            "Select the grammatical sentence and identify whether the opening is an adverbial or the subject.",
          items: [
            c(
              "Which sentence correctly fronts a negative prepositional phrase?",
              ["On no account should the valve be opened.", "On no account the valve should be opened.", "On no account the valve opened should."],
              0,
              "The fronted negative phrase requires should before the subject the valve.",
            ),
            c(
              "Which sentence is already subject-first and therefore needs no inversion?",
              ["Not one of the warnings had acknowledged it.", "Not one of the warnings had been acknowledged.", "Not one of the warnings did it acknowledge."],
              1,
              "Not one of the warnings is the grammatical subject, so had precedes been acknowledged in the ordinary verb phrase.",
            ),
            c(
              "Choose the correct correlative sequence.",
              ["Hardly the rain had stopped when the temperature rose.", "Hardly had the rain stopped than the temperature rose.", "Hardly had the rain stopped when the temperature rose."],
              2,
              "Hardly…when is the conventional immediate-sequence pairing, with had inverted before the subject.",
            ),
            c(
              "Which version is the natural literary inversion with a nominal subject?",
              ["Out came the drawers.", "Out they came the drawers.", "Out did came the drawers."],
              0,
              "A fronted directional adverb can precede a lexical verb and nominal subject in literary syntax.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Produce marked syntax without overuse",
          instructions:
            "Write each transformation, then state whether the result suits a legal warning, narrative or neutral report.",
          items: [
            p(
              "Front the negative phrase: “The evidence must not be altered under any circumstances.”",
              "Under no circumstances must the evidence be altered.",
              "The negative PP triggers inversion of must and the subject.",
            ),
            p(
              "Use not only: “The redesign reduced waste. It also lowered maintenance costs.”",
              "Model answer: Not only did the redesign reduce waste, but it also lowered maintenance costs.",
              "Invert did in the first clause only and use but also to coordinate the addition.",
            ),
            p(
              "Write two formal sentences with “Little” and “Only after”, one about a narrator's knowledge and one about a review.",
              "Model answer: Little did the narrator know that the letter had already arrived. Only after the second review did the committee discover the missing appendix.",
              "Little means ‘not much’ here; only after a time clause triggers inversion.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does “At no point was the alarm disabled” invert was?",
          ["Because the object is plural", "Because a fronted negative adverbial requires subject–operator inversion", "Because passive verbs always invert"],
          1,
          "At no point is the fronted negative trigger; the passive construction itself does not require inversion.",
        ),
        q(
          2,
          "Which sentence demonstrates the subject-first exception?",
          ["Never before had she seen such a crowd.", "Not one witness remembered the signal.", "Under no circumstances should the door be locked."],
          1,
          "Not one witness is the grammatical subject, so the sentence retains ordinary subject–verb order.",
        ),
        q(
          3,
          "What is the most natural explanation for “Out came the drawers” versus “Out they came”?",
          ["The first uses literary lexical-verb inversion with a nominal subject; the second keeps subject–verb order with a pronoun", "The first is present and the second is past", "The second needs do-support but omits it"],
          0,
          "Lexical-verb inversion after a fronted adverb is most natural with nominal subjects; pronominal subjects normally stay before the verb.",
        ),
        q(
          4,
          "Which revision would reduce an accusatory tone while preserving the denial?",
          ["At no time did the department consult residents.", "Never did residents consult the department.", "The department did not consult residents at any point."],
          2,
          "The neutral subject-first version retains the scope of the denial without the rhetorical fronting; the third changes who consulted whom.",
        ),
      ],
    },
    {
      slug: "clefts-pseudo-clefts-and-focus",
      title: "Clefts, pseudo-clefts and focus",
      summary:
        "Exploit it-clefts, wh-clefts, reversed pseudo-clefts and demonstrative focusing to control presupposition, end-focus and the scope of an emphasised element.",
      objective:
        "Construct advanced cleft variants and explain how their information packaging changes the listener's assumptions and the sentence's stress pattern.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Focus is an assertion about the alternatives",
          paragraphs: [
            "A political interview contains the sentence: “What the government offered was a loan, not a grant.” The construction does more than identify an offer. It treats the existence of an offer as shared, then specifies its kind and excludes a plausible alternative. A reversed pseudo-cleft, “A loan was what the government offered,” postpones the same specification but gives it a different rhythm.",
            "At mastery level, the grammar of focus includes presupposition: the cleft assumes part of the proposition so that another part can bear the main informational load. This can sharpen an argument, expose a false alternative or make a concession more precise. It can also become manipulative if the assumed background is itself disputed.",
          ],
        },
        {
          type: "rules",
          title: "Four focusing designs",
          items: [
            "It-cleft: “It was the revised model that resolved the fault.” The focused constituent follows be; that or a wh-relative form introduces the background clause. Spoken stress normally falls within the focus.",
            "Wh-cleft: “What resolved the fault was the revised model.” The initial wh-clause contains the known background and the complement after was supplies the new focus.",
            "Reversed pseudo-cleft: “The revised model was what resolved the fault.” The focused noun phrase becomes the subject, while the free relative clause follows be.",
            "Demonstrative focusing: “This was what the government offered: a loan.” The demonstrative points to an antecedent or upcoming specification, and the colon can make the appositive focus explicit.",
          ],
        },
        {
          type: "examples",
          title: "Focusing with precision and pressure",
          items: [
            {
              text: "It was not the conclusion but the method that the reviewers challenged.",
              note: "The full coordinated contrast is inside the focused constituent, so that must not be inserted between its parts.",
            },
            {
              text: "What changed was not the budget itself but the assumptions on which it rested.",
              note: "The wh-cleft supports a balanced contrast while placing the explanation at the end.",
            },
            {
              text: "A second trial was what the panel requested, and a second trial it received.",
              note: "The first clause is a reversed pseudo-cleft; the second uses fronting and an emphatic auxiliary for confirmation.",
            },
            {
              text: "That was what surprised us: the apparent ease with which the system failed.",
              note: "Demonstrative that summarises a prior event, and the colon specifies the source of surprise.",
            },
          ],
        },
        {
          type: "table",
          title: "Choose the focus architecture",
          columns: ["Structure", "Given background", "New focus"],
          rows: [
            ["It was the author who withdrew the paper.", "Someone withdrew the paper.", "the author"],
            ["What the author withdrew was the paper.", "The author withdrew something.", "the paper"],
            ["The paper was what the author withdrew.", "The author withdrew something.", "the paper"],
            ["This is what happened: the author withdrew.", "A preceding context is being summarised.", "The complete event specified after the colon"],
          ],
        },
        {
          type: "exercise",
          title: "Construct the intended presupposition",
          instructions:
            "Choose the version whose assumed background matches the context and whose focused element is complete.",
          items: [
            c(
              "The amount is known, but the source of the funding is disputed. Which cleft foregrounds the source?",
              ["It was the funding that came from the trust.", "It was from the trust that the funding came.", "What came from the trust was it the funding."],
              1,
              "The prepositional phrase from the trust is the focused constituent; the background clause states that funding came from somewhere.",
            ),
            c(
              "Which reversed pseudo-cleft is grammatical?",
              ["A loan was what the government offered.", "A loan was what offered the government.", "What the government offered a loan was."],
              0,
              "The subject is a loan, and the free relative what the government offered supplies the focused complement.",
            ),
            c(
              "Choose the sentence that places a coordinated contrast entirely within the focus.",
              ["It was not the result but the reasoning that convinced us.", "It was not the result that but the reasoning convinced us.", "It was not the result but that the reasoning convinced us."],
              0,
              "The contrastive noun phrases stay together after was, followed by one background clause.",
            ),
            c(
              "Which version is an appropriate demonstrative focusing sentence?",
              ["This was what they agreed: a staged withdrawal.", "This was agreed what they a staged withdrawal.", "What they agreed this was a staged withdrawal."],
              0,
              "This summarises the antecedent agreement, and the colon introduces the precise content as focus.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Vary focus without varying the facts",
          instructions:
            "Write three focusing versions of the proposition and identify the background each one assumes.",
          items: [
            p(
              "Use an it-cleft to focus the time: “The warning reached the station at 03:12.”",
              "Model answer: It was at 03:12 that the warning reached the station.",
              "The warning's arrival is assumed; its time is the focus.",
            ),
            p(
              "Use a reversed pseudo-cleft to focus the object: “The regulator requested an independent audit.”",
              "Model answer: An independent audit was what the regulator requested.",
              "The requested item becomes the subject and the free relative clause identifies it.",
            ),
            p(
              "Write a demonstrative focusing sentence followed by a contrast, using the idea that the policy changed eligibility.",
              "Model answer: This was what the policy changed: eligibility, not the level of the benefit.",
              "The colon makes the specification explicit, and the contrast limits the scope of change.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "In “It was after midnight that the decision was taken,” what does the cleft assume?",
          ["The decision had never been taken", "The decision was taken at some time", "The decision concerned midnight"],
          1,
          "The background clause assumes the decision was taken; the focused time expression specifies when.",
        ),
        q(
          2,
          "What distinguishes a reversed pseudo-cleft from an ordinary wh-cleft?",
          ["The focused noun phrase becomes the subject instead of following be", "The reversed form has no verb", "The ordinary form can only focus people"],
          0,
          "“A loan was what…” places the focus in subject position, while “What…was” places it after be.",
        ),
        q(
          3,
          "Why can a cleft be rhetorically powerful in a debate?",
          ["It can treat a disputed background as given and isolate a strategically chosen alternative", "It makes every proposition logically true", "It removes the need to answer an opponent"],
          0,
          "The construction's presupposition can frame the discussion, but the assumed background still needs support.",
        ),
        q(
          4,
          "Which sentence correctly focuses a full because-clause?",
          ["It was the supply because failed that rationing began.", "Because it was the supply failed that rationing began.", "It was because the supply failed that rationing began."],
          2,
          "The finite because-clause forms the focused constituent after was, and that introduces the background clause.",
        ),
      ],
    },
    {
      slug: "absolute-constructions-and-participial-phrases",
      title: "Absolute constructions and participial phrases",
      summary:
        "Distinguish nominative absolutes, detached participial clauses and participial phrases, then use them to add circumstances without obscuring the main clause's logical subject.",
      objective:
        "Construct and punctuate absolute and participial supplements accurately, including non-finite perfect forms and fixed discourse absolutes.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Supplements create a second, dependent world",
          paragraphs: [
            "“The match having been abandoned, the players returned to the pavilion” contains two propositions: the match was abandoned, and the players returned. The supplement has its own explicit subject, the match, so it is not a participial clause whose omitted subject is controlled by players. That independent subject is the hallmark of an absolute construction.",
            "Absolute and participial structures are economical because they avoid a full subordinate clause. Their brevity can also create attachment errors. The writer must signal whether the supplement shares the main subject, has its own subject, or is a fixed phrase such as weather permitting. At C2, punctuation and clause type work together to preserve the intended relationship.",
          ],
        },
        {
          type: "rules",
          title: "Classify the supplement",
          items: [
            "A nominative absolute consists of a noun phrase plus a non-finite verb phrase, adjective, noun or prepositional phrase: “The gates being locked, visitors waited outside”; “Their faces flushed, the runners slowed.”",
            "A detached participial clause usually shares the main clause's subject, whether expressed or implied: “Feeling the strain, the cable snapped” wrongly assigns feeling to the cable; “The hikers stopped, their faces glowing” uses an absolute with a separate subject.",
            "Use having + past participle for a perfect active relation and having been + past participle for a perfect passive relation: “Having checked the readings, she signed the form”; “The findings having been questioned, the panel reopened the inquiry.”",
            "Set a supplement off with a comma when it precedes or follows the main clause. Fixed absolutes such as all things considered, weather permitting and that said can function as discourse stance markers.",
          ],
        },
        {
          type: "examples",
          title: "Different dependencies, different punctuation",
          items: [
            {
              text: "The bridge closed for repairs, the residents were forced to use the northern crossing.",
              note: "The supplement has its own noun subject and a past participle; a full because-clause would make the relation explicit.",
            },
            {
              text: "Having consulted the miners' representatives, the inspector revised the evacuation plan.",
              note: "The implied subject of having consulted is the inspector, matching the main clause.",
            },
            {
              text: "No further objections having been raised, the motion was carried.",
              note: "A perfect passive absolute supplies a preceding circumstance with an explicit, passive subject.",
            },
            {
              text: "That said, the revised figures still warrant scrutiny.",
              note: "That said is a fixed absolute functioning as a concessive discourse marker, not a claim that the previous speaker physically said something.",
            },
          ],
        },
        {
          type: "table",
          title: "Identify the logical subject",
          columns: ["Construction", "Example", "Subject relation"],
          rows: [
            ["Detached active participle", "Hearing the alarm, the guard ran outside.", "The guard both hears and runs."],
            ["Detached perfect participle", "Having checked the seals, the diver descended.", "The diver checked before descending."],
            ["Absolute with own subject", "Their supplies exhausted, the climbers turned back.", "Supplies are exhausted; climbers turn back."],
            ["Absolute with adjective", "The sky now dark, the search continued.", "The sky is dark; the search continues."],
          ],
        },
        {
          type: "exercise",
          title: "Distinguish attachment from absolute independence",
          instructions:
            "Choose the sentence that matches the stated logical relationship and uses the correct form.",
          items: [
            c(
              "You need an absolute with its own subject to mean that the witnesses had left. Which sentence works?",
              ["The witnesses having left, the court recessed.", "Having left the court, the witnesses recessed.", "The court having left, the witnesses recessed."],
              0,
              "The witnesses is the explicit subject of the perfect active absolute; the court recesses in the main clause.",
            ),
            c(
              "Which sentence contains a dangling participial clause?",
              ["Walking towards the shelter, the rain began to fall.", "Walking towards the shelter, we heard the rain.", "The rain falling, we walked towards the shelter."],
              0,
              "The opening implies that the rain was walking; the final option is an absolute with a separate subject.",
            ),
            c(
              "Choose the correct perfect passive absolute.",
              ["The documents having checked, the archivist signed the receipt.", "The documents having been checked, the archivist signed the receipt.", "The documents having been checking, the archivist signed the receipt."],
              1,
              "Having been + past participle expresses that the documents underwent a completed checking before the signing.",
            ),
            c(
              "What is the function of “all things considered” in “All things considered, the risk is acceptable”?",
              ["It is the main subject", "It is an absolute discourse marker summarising the assessment", "It makes risk a past-tense verb"],
              1,
              "The fixed phrase comments on the whole judgement without controlling the grammatical subject risk.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build concise circumstantial supplements",
          instructions:
            "Write each structure and explain whether the supplement shares or supplies its own subject.",
          items: [
            p(
              "Use having + past participle: “After the analyst had calibrated the sensor, she published the result.”",
              "Model answer: Having calibrated the sensor, the analyst published the result.",
              "The implied subject of having calibrated is the analyst.",
            ),
            p(
              "Use an absolute to mean that the roads were impassable: “Because the roads were impassable, the convoy stopped.”",
              "Model answer: The roads being impassable, the convoy stopped.",
              "The roads is the independent subject of the absolute; being impassable supplies its predicate.",
            ),
            p(
              "Write two coordinated main propositions as one absolute supplement and one main clause, using “the final vote” and “the members dispersed”.",
              "Model answer: The final vote having been taken, the members dispersed.",
              "The absolute places the vote before the dispersal and makes the passive relation explicit.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What distinguishes “Their work completed, the team left” from a detached participial clause?",
          ["The supplement has its own explicit subject, their work", "The main clause has no subject", "Completed is a finite past-tense verb"],
          0,
          "Their work is not the subject of left; it controls completed inside the absolute construction.",
        ),
        q(
          2,
          "Which revision repairs “Leaving the platform, the train gathered speed”?",
          ["The train leaving the platform gathered speed.", "Leaving the platform, the passengers watched as the train gathered speed.", "Leaving the platform, gathered speed the train."],
          1,
          "The passengers can plausibly leave the platform and watch, whereas the original assigns leaving to the train.",
        ),
        q(
          3,
          "Why is having been + past participle appropriate in “The proposal having been rejected…”?",
          ["It turns the main clause into a question", "It means the proposal will be rejected later", "It gives the absolute an explicit perfect passive predicate"],
          2,
          "The proposal undergoes rejection before the main-clause event, so a perfect passive non-finite form is required.",
        ),
        q(
          4,
          "What does that said most commonly contribute to a formal discussion?",
          ["A concessive marker acknowledging the preceding point", "A direct quotation requiring quotation marks", "A future-time absolute"],
          0,
          "As a fixed expression, that said means ‘despite what has just been said’ and introduces a qualification.",
        ),
      ],
    },
    {
      slug: "ellipsis-and-economy-of-expression",
      title: "Ellipsis and economy of expression",
      summary:
        "Command gapping, sluicing, auxiliary ellipsis, right-node raising and contrastive fragments, recognising their licensing conditions and potential ambiguities.",
      objective:
        "Produce highly elliptical sentences that remain recoverable, and expand them when coordination scope or contrasting information would otherwise be unclear.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Economy depends on shared syntactic material",
          paragraphs: [
            "“The first report was cautious, the second less so” omits much more than a repeated noun. The adjective cautious is recovered through comparative substitution with so, while the copula and subject structure are supplied from the first clause. The result is compact because the coordination licenses a gap.",
            "At C2, ellipsis becomes a tool for rhetorical alignment. It can pair ideas in balanced patterns, postpone shared material to the end, or expose the missing element in a question. It is safe only when the reader can reconstruct the same grammatical path. When two coordinate clauses could take different scopes, full repetition may be more precise than maximum compression.",
          ],
        },
        {
          type: "rules",
          title: "Recognise what licenses the gap",
          items: [
            "Auxiliary ellipsis occurs after an auxiliary or operator: “The north team can attend, and the south team can too.” A full lexical verb generally requires do-support in this pattern: “The north team attended, and the south team did too.”",
            "Gapping removes repeated verbal material in a later coordinated clause: “One reviewer praised the method, another ___ the results.” The gap does not include the new subject and object.",
            "Sluicing replaces an embedded wh-clause with the wh-word alone: “The panel will publish a decision, but it has not said when.” Contrastive sluicing can leave more than one missing element: “I know where, but not why, the fault occurred.”",
            "Right-node raising postpones a shared constituent to the end of coordinated clauses: “The authors revised, and the editor approved, the final chapter.” The comma marks the interruption; without clear parallelism, the sentence is harder to parse.",
          ],
        },
        {
          type: "examples",
          title: "Compact syntax with rhetorical alignment",
          items: [
            {
              text: "The first edition contained three maps; the second, five.",
              note: "Gapping recovers contained while the new numeral supplies the contrast.",
            },
            {
              text: "She promised to review the proposal, and he did too.",
              note: "Did substitutes for promised to review the proposal, retaining the lexical verb through do-support.",
            },
            {
              text: "Someone has altered the wording, but the committee has not yet established who or why.",
              note: "Who and why introduce contrasted sluices; or shares the understood ‘has altered the wording’.",
            },
            {
              text: "The museum acquired, and the university catalogued, the entire collection.",
              note: "Right-node raising gives both verbs a single shared object at the end.",
            },
          ],
        },
        {
          type: "table",
          title: "Economical structures and their risks",
          columns: ["Structure", "Example", "Recovery task for the reader"],
          rows: [
            ["Auxiliary ellipsis", "Asha has signed, and Ravi has too.", "Supply signed from the first clause."],
            ["Gapping", "One sample was sterile, the other contaminated.", "Supply was from the first clause."],
            ["Sluicing", "They moved the deadline, but did not explain why.", "Supply they moved the deadline after why."],
            ["Contrastive fragment", "The second draft, not the first, was approved.", "Interpret the noun phrase against the rejected alternative."],
          ],
        },
        {
          type: "exercise",
          title: "Choose the licensed gap",
          instructions:
            "Select the grammatical sentence with the intended elliptical structure.",
          items: [
            c(
              "Complete with do-support: “The old software recognised the command, and the new version ___ too.”",
              ["did", "does", "was"],
              0,
              "Did substitutes for recognised the command after a past-tense lexical verb; no existing auxiliary licenses a bare lexical gap.",
            ),
            c(
              "Which sentence uses gapping correctly?",
              ["The first volume covered theory, the second practice.", "The first volume covered theory, the second covered practice.", "The first volume covered theory, the second it practice."],
              0,
              "The gap after the second supplies covered from the first clause while preserving the contrasting objects.",
            ),
            c(
              "Choose the correct contrastive sluicing sentence.",
              ["I know where, but not why, the system failed.", "I know where, but not why, failed the system.", "I know where but not why the system failed it."],
              0,
              "The wh-phrases replace embedded clauses, leaving the finite main clause the system failed intact.",
            ),
            c(
              "Which sentence uses right-node raising?",
              ["The final chapter was revised and approved.", "The authors revised, and the editor approved, the final chapter.", "The authors revised the final chapter and approved."],
              1,
              "Both verbs are interrupted before their shared object, which is postponed to the end of the coordination.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Compress, then test recovery",
          instructions:
            "Produce each elliptical version, then expand it to show exactly what the reader must supply.",
          items: [
            p(
              "Use gapping to contrast the findings: “The northern study found a benefit, and the southern study found no benefit.”",
              "Model answer: The northern study found a benefit, the southern none.",
              "The gap recovers found, while none substitutes for no benefit.",
            ),
            p(
              "Use contrastive sluicing: “I know when the sample was taken, but I do not know where it was taken.”",
              "Model answer: I know when, but not where, the sample was taken.",
              "When and where replace the two embedded interrogative clauses sharing the sample was taken.",
            ),
            p(
              "Write a sentence with right-node raising using “the board approved” and “the auditors endorsed” and the shared object “the revised accounts”.",
              "Model answer: The board approved, and the auditors endorsed, the revised accounts.",
              "The shared object is postponed; commas clarify the interrupted coordination.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why is “The first model worked, and the second did too” grammatical?",
          ["Did supplies the missing lexical verb after a past-tense verb phrase", "Worked has been converted into an auxiliary", "The subject second requires did"],
          0,
          "Do-support carries tense and substitutes for the repeated verb phrase worked in the elliptical clause.",
        ),
        q(
          2,
          "What is omitted in “One candidate cited experience; the other, availability”?",
          ["Only the subject", "The repeated verb cited", "The entire second clause"],
          1,
          "The semicolon separates the clauses, and gapping restores cited before the new object availability.",
        ),
        q(
          3,
          "Which sentence most clearly demonstrates contrastive sluicing?",
          ["They explained how the fault occurred, not why.", "They explained how the fault occurred and why it occurred.", "The fault occurred, so they explained it."],
          0,
          "Not why leaves an embedded wh-clause unexpressed, contrasted with the fully expressed how-clause.",
        ),
        q(
          4,
          "When should right-node raising be avoided?",
          ["Whenever a sentence contains two verbs", "Only when the shared object is plural", "When the shared final constituent makes the coordination difficult to parse"],
          2,
          "Postponing shared material is elegant only when the parallel structures are easy to identify; otherwise full repetition is safer.",
        ),
      ],
    },
  ],
};
