import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1GrammarUnit3: LessonUnit = {
  title: "Cohesion and reference",
  description:
    "Connect sentences and compress repeated information through controlled reference, ellipsis, signposting and nominal grammar.",
  lessons: [
    {
      slug: "reference-across-sentences",
      title: "Reference across sentences",
      summary:
        "Track people, ideas and textual relationships with pronouns, demonstratives and comparative reference while avoiding ambiguous or shifting antecedents.",
      objective:
        "Use forward and backward reference accurately and diagnose unclear links created by distant antecedents, competing nouns or inconsistent terminology.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "A reference is a promise to the reader",
          paragraphs: [
            "A planning report says: “The panel reviewed the proposal and the funding model. It recommended significant changes.” Grammatically, it could refer to the panel or the proposal, though world knowledge probably suggests the panel. Good cohesion makes the intended link recoverable without relying on a guess.",
            "Reference words point outside their own immediate wording. Some point back to a previous expression, some forward to one that has not yet appeared, and others compare or locate items in the discourse. At C1, cohesion depends less on avoiding pronouns than on maintaining clear chains: the reader should know what is being picked up and why the wording has changed.",
          ],
        },
        {
          type: "rules",
          title: "Make every pointer recoverable",
          items: [
            "Anaphoric reference points back: “The council approved the plan. It will take effect in June.” Ensure that only one plausible antecedent matches the pronoun's number, gender and meaning.",
            "Cataphoric reference points forward and is most natural with restricted structures: “This is the key point: every participant must register.” A bare pronoun in “It was clear to her that…” may also point forward, but unrestricted forward reference can strain comprehension.",
            "Use this/these to refer to propositions or to items close in the discourse, and that/those for more distant or contrastive reference. “This raises a further question” can summarise a whole preceding argument.",
            "Comparative reference includes the former/the latter, the above/below, such and the same. It requires an explicit set of comparison; “the latter” is useless if the reader cannot identify exactly two prior items.",
          ],
        },
        {
          type: "examples",
          title: "Reference chains in context",
          items: [
            {
              text: "The museum acquired a portrait and a handwritten ledger. The former was restored locally; the latter is now on display.",
              note: "The former picks up the portrait and the latter the ledger; the pair is explicit.",
            },
            {
              text: "Two explanations have been proposed. The first attributes the delay to staffing; the second blames the software.",
              note: "Ordinal reference tracks two alternatives without repeating their full descriptions.",
            },
            {
              text: "The committee suggested extending the trial. This would allow researchers to measure longer-term effects.",
              note: "This refers to the entire proposal, not simply the nearest noun trial.",
            },
            {
              text: "The figures below compare response rates before and after the training.",
              note: "Below is a textual locator and points forward to material that follows.",
            },
          ],
        },
        {
          type: "table",
          title: "Reference type and likely risk",
          columns: ["Reference item", "Typical function", "Risk to check"],
          rows: [
            ["it, they, them", "Anaphoric personal reference", "Competing singular or plural antecedents"],
            ["this, these", "Near proposition or item reference", "An unclear summary of a long passage"],
            ["that, those", "Distant or contrastive reference", "Whether the contrast is intended"],
            ["the former, the latter", "Anaphoric pair selection", "More than two items or reversed grammatical order"],
            ["as noted above", "Textual back-reference", "A location that changes during editing"],
          ],
        },
        {
          type: "exercise",
          title: "Resolve the pointer",
          instructions:
            "Choose the reading or revision that makes the reference unambiguous in the given context.",
          items: [
            c(
              "“The engineer sent the contractor a revised schedule. He said it was incomplete.” Which revision best makes the engineer the speaker?",
              ["The engineer sent the contractor a revised schedule. The engineer said it was incomplete.", "The engineer sent the contractor a revised schedule. The contractor said he was incomplete.", "The engineer sent the contractor a revised schedule. It said he was incomplete."],
              0,
              "Repeating the noun engineer removes the ambiguous pronoun while retaining the unchanged reference to the schedule.",
            ),
            c(
              "In “The council rejected both proposals, the first on cost grounds and the second on safety grounds,” what does the second refer to?",
              ["The second proposal", "The council", "The second ground of rejection"],
              0,
              "The ordinal phrase refers back to the second member of the explicit pair of proposals.",
            ),
            c(
              "Which sentence uses cataphoric demonstrative reference naturally?",
              ["This is the difficulty: we lack a control group.", "This it was the difficulty.", "The difficulty this is we lack a control group."],
              0,
              "The demonstrative introduces the proposition after the colon, creating clear forward reference.",
            ),
            c(
              "Which revision repairs an unclear “latter” after three options?",
              ["Three routes were considered; the latter was cheapest.", "Three routes were considered; the northern route was cheapest.", "Three routes were considered; the latter routes were cheapest."],
              1,
              "The latter properly selects from a pair only; naming the northern route identifies one of the three options.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build and repair a reference chain",
          instructions:
            "Complete each task and name the type of reference you use.",
          items: [
            p(
              "Write two sentences about an archive and a catalogue, using the former and the latter correctly.",
              "Model answer: The archive holds original letters, while the catalogue describes them. The former is closed to visitors; the latter is available online.",
              "Keep the two nouns in the same order when using former and latter.",
            ),
            p(
              "Write a sentence in which this refers back to a whole preceding claim.",
              "Model answer: The pilot reduced waiting times only in the largest clinics. This limits the strength of the conclusion we can draw.",
              "This summarises the qualified finding rather than repeating the noun clinics.",
            ),
            p(
              "Repair the ambiguity: “The editor returned the draft to the author because she had missed the deadline.” Make the editor responsible for missing it.",
              "Model answer: The editor returned the draft to the author because the editor had missed the deadline.",
              "The original she could refer to either the editor or the author.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which sentence creates the clearest anaphoric chain?",
          ["The hospital opened a clinic, and it admitted its first patients.", "The hospital opened a clinic and admitted its first patients.", "It opened a clinic, and the hospital admitted patients."],
          0,
          "The first sentence makes the nearest singular antecedent clinic explicit through it and its, preserving the intended sequence.",
        ),
        q(
          2,
          "When is “the latter” most reliable?",
          ["After any list of three or more items", "After an explicitly identified pair, in the same order", "Only when no nouns have appeared before"],
          1,
          "The latter selects the second of two preceding items; longer lists make the selection unclear or undefined.",
        ),
        q(
          3,
          "What does this refer to in “The redesign increased costs. This was not anticipated by the client”?",
          ["The nearest word costs", "The fact that the redesign increased costs", "The client's identity"],
          1,
          "This can refer back to the whole proposition, not merely to the final noun phrase.",
        ),
        q(
          4,
          "Which editing choice best handles a reference that becomes unclear after a paragraph is moved?",
          ["Keep it because pronouns are always preferable", "Move “as noted above” without checking its new location", "Replace it with a precise noun phrase"],
          2,
          "A precise noun phrase restores the antecedent; textual locators and pronouns must be checked whenever structure changes.",
        ),
      ],
    },
    {
      slug: "ellipsis-and-substitution",
      title: "Ellipsis and substitution",
      summary:
        "Omit recoverable clause material and replace it with grammatical substitutes such as do so, so/not and one/ones without creating ambiguity or false equivalence.",
      objective:
        "Use auxiliary ellipsis, gapping, sluicing and appropriate substitutes to avoid repetition while preserving the understood structure.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Leave out only what the grammar can restore",
          paragraphs: [
            "In a meeting, one researcher says, “I’ll analyse the first dataset,” and another replies, “I’ll analyse the second.” The reply needs no repeated lexical verb because the first clause supplies it. Ellipsis is not casual omission; it is a structured gap whose content is recoverable from the surrounding syntax.",
            "Substitution uses a grammatical substitute instead of repeating material. “The manager approved the proposal, and the deputy did so” replaces approve the proposal with did so. Choosing between ellipsis, substitution and full repetition allows a writer to control emphasis and avoid two clauses being mistaken for identical actions.",
          ],
        },
        {
          type: "rules",
          title: "Four economical patterns",
          items: [
            "Auxiliary ellipsis omits the rest of a verb phrase after an auxiliary or operator: “Mara has submitted her report, and I have as well.” In informal replies, a bare auxiliary may stand alone: “I could.”",
            "Gapping leaves a gap in a later coordinated clause while retaining an auxiliary or repeated subject where needed: “The north wing needs repainting, and the south wing ___ new roofing.”",
            "Sluicing replaces an embedded wh-clause with a wh-word alone: “Someone has altered the figures, but we don’t yet know who.” It is common in informal English and dialogue.",
            "Use do so to substitute for a verb phrase when the action is intentionally generic; use do it/do that for a specific object or action. One/ones can substitute for a countable noun, but only when the referent is clear.",
          ],
        },
        {
          type: "examples",
          title: "Economy with grammatical control",
          items: [
            {
              text: "The northern team completed the audit on time, but the southern team didn’t.",
              note: "Didn’t supplies did not complete the audit on time through auxiliary ellipsis.",
            },
            {
              text: "One delegate proposed a vote, and another suggested that we postpone it.",
              note: "The full second verb phrase is retained because suggested and proposed have different complement patterns.",
            },
            {
              text: "The director promised to review the policy, but she has not yet done so.",
              note: "Done so substitutes for reviewed the policy and preserves its completion-oriented meaning.",
            },
            {
              text: "If a sample is contaminated, we should choose another; if the equipment is faulty, we should choose a different one.",
              note: "Another stands for another sample, while one substitutes for a different piece of equipment.",
            },
          ],
        },
        {
          type: "table",
          title: "Omission or replacement?",
          columns: ["Intended meaning", "Structure", "Example"],
          rows: [
            ["Repeat a subject–verb relation economically", "Auxiliary ellipsis", "Ana can attend, and Ben can too."],
            ["Omit repeated material across coordinates", "Gapping", "The first copy is signed; the second is not."],
            ["Leave the unknown wh-element as the answer sought", "Sluicing", "They have selected a venue, but not decided when."],
            ["Replace a specific action phrase", "do so/do it/do that", "The office has changed its hours, and the branch has done so too."],
          ],
        },
        {
          type: "exercise",
          title: "Choose a recoverable structure",
          instructions:
            "Select the grammatical option with the intended meaning and degree of specificity.",
          items: [
            c(
              "Complete with auxiliary ellipsis: “The first pump is working, but the second ___.”",
              ["isn’t", "doesn’t", "isn’t it"],
              0,
              "Isn’t supplies is not working through auxiliary ellipsis; the lexical verb need not be repeated.",
            ),
            c(
              "Which substitution most clearly refers to a specific previous action?",
              ["The chair cancelled the meeting and later apologised for doing it.", "The chair cancelled the meeting and later apologised for doing so.", "The chair cancelled the meeting and later apologised for doing."],
              1,
              "Doing so substitutes for cancelling the meeting; the specific action remains clear from the coordinated clause.",
            ),
            c(
              "Which sentence is a natural example of sluicing?",
              ["Someone removed the file, but we don’t know who.", "Someone removed the file, but we don’t know who removed.", "Someone removed the file, but we don’t know the who."],
              0,
              "The stranded wh-word who replaces the whole understood clause who removed the file.",
            ),
            c(
              "Complete with a noun substitute: “The original certificate is missing; do you have ___?”",
              ["it one", "a one", "one"],
              2,
              "One substitutes for a certificate, with the indefinite article supplied by the context of the question.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Compress without losing control",
          instructions:
            "Produce an economical version of each sentence and explain what the omitted or substituted material is.",
          items: [
            p(
              "Use auxiliary ellipsis: “Leo has checked the first page, but he has not checked the second.”",
              "Model answer: Leo has checked the first page, but he hasn’t the second.",
              "Hasn’t replaces has not checked; the object remains the second page.",
            ),
            p(
              "Use do so: “The council revised the consultation document, and the committee later revised it too.”",
              "Model answer: The council revised the consultation document, and the committee later did so too.",
              "Did so replaces revised the consultation document.",
            ),
            p(
              "Write a short exchange with one auxiliary-only response and one sluiced question.",
              "Model answer: A: “Could you finish the model today?” B: “I could.” A: “Good. Do you know when?”",
              "The auxiliary supplies finish the model today; when replaces when you can finish it.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "In “Nina has approved the budget, and Omar has too,” what is omitted?",
          ["The subject Omar", "The verb phrase approved the budget", "The auxiliary has"],
          1,
          "Has too retains the auxiliary and adds the new subject, while the lexical verb phrase is recoverable from the first clause.",
        ),
        q(
          2,
          "Why can “did so” be preferable to “did it” in “The ministry changed its guidance”?",
          ["It can substitute for the whole action phrase without choosing a specific object", "It always makes the statement past perfect", "It removes the need for a subject"],
          0,
          "Do so is useful for a general action substitute; do it identifies a particular object more directly.",
        ),
        q(
          3,
          "Which sentence contains a sluiced clause?",
          ["The technician left a message, but I cannot remember what it said.", "The technician left a message, but I cannot remember it.", "The technician left a message and checked the time."],
          0,
          "What replaces the embedded interrogative clause what it said, which is recoverable from the message context.",
        ),
        q(
          4,
          "Which sentence should usually retain the full verb phrase because ellipsis would obscure different complement patterns?",
          ["The editor agreed to revise the introduction and the author agreed too.", "The editor has read the draft, and the author has too.", "The editor agreed to revise the introduction and insisted that the author check the references."],
          2,
          "Agree takes a to-infinitive, while insisted takes a mandative that-clause; retaining both complement structures makes the distinct actions explicit.",
        ),
      ],
    },
    {
      slug: "discourse-markers-and-signposting",
      title: "Discourse markers and signposting",
      summary:
        "Signal addition, contrast, cause, concession and sequence through accurately punctuated grammatical connectors, choosing the marker that matches the relation rather than merely sounding academic.",
      objective:
        "Distinguish coordinating conjunctions, subordinating conjunctions, prepositional linkers and sentence adverbials, and use them to make argumentative relationships explicit.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "A connector states a relationship",
          paragraphs: [
            "A draft contains the sentence: “The intervention was inexpensive. However, it improved attendance.” The two clauses suggest contrast, but however may be too weak or abrupt if the first statement was meant to establish an advantage. “Moreover, the intervention was inexpensive, and it improved attendance” signals that the second advantage supports the first.",
            "Discourse markers do not simply decorate academic prose. They tell readers how to integrate the next proposition: as an addition, an example, a cause, a concession, a consequence or a return to the main point. Their grammatical class determines what can follow and how punctuation works. A fluent C1 writer chooses the relation first and the marker second.",
          ],
        },
        {
          type: "rules",
          title: "Match class to syntax",
          items: [
            "Coordinating conjunctions such as and, but, or and so join clauses of equal grammatical status. “The sample was small, so the result remains provisional” uses so to introduce a consequence.",
            "Subordinating conjunctions such as although, because, whereas and provided that create a dependent clause. An initial although-clause needs a comma before the main clause; a final one usually does not.",
            "Prepositional linkers such as despite, in spite of, owing to and in addition to take a noun phrase or -ing form, not a finite clause. “Despite the delay…” is correct; “despite the delay was serious” is not.",
            "Sentence adverbials such as however, nevertheless, consequently and furthermore usually stand apart with commas and connect whole propositions: “The test was inconclusive. Nevertheless, the team continued.”",
          ],
        },
        {
          type: "examples",
          title: "Signposting a layered argument",
          items: [
            {
              text: "The first survey was inexpensive; however, it reached too few respondents to support a general conclusion.",
              note: "The semicolon separates independent clauses, and however marks a qualified contrast.",
            },
            {
              text: "Although the treatment reduced symptoms, it did not alter the underlying condition.",
              note: "Although introduces a concession, not a simple cause or addition.",
            },
            {
              text: "Owing to a fault in the timer, the final trial was excluded from the analysis.",
              note: "Owing to correctly takes the noun phrase a fault in the timer.",
            },
            {
              text: "The report identifies three priorities. First, improve data collection; second, extend the pilot; finally, commission an independent review.",
              note: "Ordinal markers make a three-part sequence recoverable without repeating the noun priorities.",
            },
          ],
        },
        {
          type: "table",
          title: "The same idea needs different grammar",
          columns: ["Relation", "Finite-clause option", "Non-finite or adverbial option"],
          rows: [
            ["Concession", "Although demand fell, prices remained stable.", "Despite the fall in demand, prices remained stable."],
            ["Cause", "Because the sensor failed, readings stopped.", "Owing to sensor failure, readings stopped."],
            ["Addition", "The pilot succeeded, and costs were stable.", "Furthermore, the pilot succeeded at stable cost."],
            ["Consequence", "The evidence was weak, so the claim was revised.", "The evidence was weak; consequently, the claim was revised."],
          ],
        },
        {
          type: "exercise",
          title: "Choose syntax that follows the marker",
          instructions:
            "Select the sentence that is grammatical and expresses the intended relationship.",
          items: [
            c(
              "You need a prepositional linker followed by a noun phrase. Which sentence works?",
              ["Despite the delay to the project, the budget remained unchanged.", "Despite the project was delayed, the budget remained unchanged.", "Despite delayed the project, the budget remained unchanged."],
              0,
              "Despite takes the noun phrase the delay to the project; it cannot directly introduce a finite clause.",
            ),
            c(
              "Which marker signals a contrast with the whole preceding statement?",
              ["Similarly", "However", "For example"],
              1,
              "However marks contrast; similarly signals likeness and for example introduces an illustration.",
            ),
            c(
              "Complete with a causal subordinator: “___ the sample had been stored incorrectly, the results may be unreliable.”",
              ["Although", "Whereas", "Because"],
              2,
              "Because introduces the reason or cause for the possible unreliability.",
            ),
            c(
              "Which punctuation correctly joins an independent clause to however?",
              ["The evidence was limited, however the conclusion was cautious.", "The evidence was limited. However, the conclusion was cautious.", "The evidence was limited however, the conclusion was cautious."],
              1,
              "As a sentence adverbial, however is normally separated from the following clause by a comma and can begin a new sentence.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Make the logic visible",
          instructions:
            "Write each sentence with the required grammatical form, then explain the relationship signalled.",
          items: [
            p(
              "Join with but: “The device is compact. It requires frequent calibration.”",
              "Model answer: The device is compact, but it requires frequent calibration.",
              "But marks a contrast between an advantage and a drawback.",
            ),
            p(
              "Use despite + noun phrase to concede the same drawback.",
              "Model answer: Despite its compact size, the device requires frequent calibration.",
              "Despite takes the noun phrase its compact size, not a finite clause.",
            ),
            p(
              "Write a three-step signposted sequence for introducing evidence, evaluating it and drawing a conclusion.",
              "Model answer: First, the study reports a clear correlation. Nevertheless, correlation does not establish causation. Therefore, a controlled trial is required.",
              "Use sequence, concession and consequence markers for three distinct logical moves.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which revision is grammatically correct after despite?",
          ["Despite the committee rejected the proposal, it kept the evidence.", "Despite the committee's rejection of the proposal, it kept the evidence.", "Despite rejected the proposal, the committee kept the evidence."],
          1,
          "Despite is followed by a noun phrase; the possessive committee's rejection supplies one.",
        ),
        q(
          2,
          "What is the difference between “but” and “however” in these sentences?",
          ["But coordinates clauses within a sentence; however commonly connects propositions as a sentence adverbial", "They have identical punctuation rules", "However can only introduce questions"],
          0,
          "But is a coordinating conjunction, while however normally appears as a separate adverbial and may begin a new sentence.",
        ),
        q(
          3,
          "Which relation is signalled by “whereas” in “The northern group improved, whereas the southern group remained stable”?",
          ["Cause", "Contrast", "Sequence"],
          1,
          "Whereas contrasts two coordinated propositions rather than reporting a cause or chronological order.",
        ),
        q(
          4,
          "Why might “therefore” be a poor choice in “The costs are rising; therefore, further analysis may be needed”?",
          ["Therefore can only follow because", "The semicolon makes all adverbials impossible", "The conclusion may be a proposed response rather than a necessary consequence"],
          2,
          "Therefore asserts a consequence; if the second clause is only a suggestion, a weaker linker may represent the logic more accurately.",
        ),
      ],
    },
    {
      slug: "nominalisation-and-density",
      title: "Nominalisation and density",
      summary:
        "Turn actions and evaluations into compact noun-phrase structures for academic and professional writing, while managing agency, modification and readability.",
      objective:
        "Build accurate nominalisations and expand noun phrases, then decide when a verb-based clause is clearer than a dense abstract construction.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Nominal grammar packages a process",
          paragraphs: [
            "A research briefing moves from “The inspectors checked whether the equipment complied with the standard” to “The inspectors conducted a compliance check on the equipment.” The nominalised version makes the process a thing that can be described, classified and counted. It also removes a finite clause and may hide who performed the action.",
            "Nominalisation is not a rule that longer noun phrases are better. It supports abstraction and efficient reference, especially when a process becomes the topic of later sentences. Dense noun phrases, however, can postpone important verbs and stack responsibility inside nested of-phrases. Advanced control means knowing when to nominalise for precision and when to restore a clause for agency or clarity.",
          ],
        },
        {
          type: "rules",
          title: "Build and unpack the noun phrase",
          items: [
            "Form many nominalisations with suffixes such as -tion, -ment, -ance, -ity or -ing: decide → decision, achieve → achievement, resist → resistance, possible → possibility. Meaning and spelling must still be checked.",
            "A dense noun phrase often follows determiner + premodifiers + head noun + postmodifiers: “these two recent studies of bilingual classroom interaction”. Keep related modifiers close to the noun they describe.",
            "Use of-phrases and relative clauses for different jobs. “The rejection of the application by the panel” expresses both the object and agent, but a verb-based version may make responsibility more immediate.",
            "Watch article and number agreement with abstract heads. “A finding that…” is singular; “findings that…” is plural. Do not treat an of-phrase as automatically determining the head noun's number.",
          ],
        },
        {
          type: "examples",
          title: "Compression with consequences",
          items: [
            {
              text: "The authors investigated why some schools improved more rapidly than others. Their investigation of differences in improvement rates lasted two years.",
              note: "The nominalisation lets the process become a shared topic and a countable event.",
            },
            {
              text: "Participants expressed concern about the proposed reduction in local oversight.",
              note: "Concern is followed by a prepositional complement, while reduction is further specified by in local oversight.",
            },
            {
              text: "The panel's refusal to disclose the selection criteria undermined confidence in the process.",
              note: "The nominal head refusal preserves an agent through the possessive and controls the infinitive complement.",
            },
            {
              text: "Verbs make the sequence clearer: “The supplier changed the label, and the regulator then challenged the change.”",
              note: "Repeating change as a noun creates cohesion; retaining the first clause as a verb keeps the action visible.",
            },
          ],
        },
        {
          type: "table",
          title: "From clause to manageable noun phrase",
          columns: ["Clause version", "Nominalised version", "Editorial trade-off"],
          rows: [
            ["The city proposed a new route.", "The city's proposal for a new route…", "A full clause keeps the actor and action transparent."],
            ["The route was changed.", "The change to the route…", "A noun can become the topic of a longer sentence."],
            ["The data were incomplete.", "The incompleteness of the data…", "Abstract wording may be useful but sounds institutional."],
            ["The team monitored the patients closely.", "The team's close monitoring of the patients…", "The possessive retains agency; postmodifiers can become heavy."],
          ],
        },
        {
          type: "exercise",
          title: "Control nominal structure",
          instructions:
            "Choose the version with the correct head, complement and degree of readability.",
          items: [
            c(
              "Which noun phrase has the clearest head and modifiers?",
              ["A recent two independent audit reports of the process", "Two recent independent audit reports on the process", "Two reports recent independent on audit process"],
              1,
              "The noun head reports is followed by on the process, while two, recent and independent premodify it.",
            ),
            c(
              "Choose the accurate nominalisation of “The researchers recommended a repeat trial.”",
              ["The researchers made a recommendation for a repeat trial.", "The researchers made a recommend for a repeat trial.", "The researchers made a recommending of a repeat trial."],
              0,
              "Recommendation is the noun form, and for a repeat trial identifies its content.",
            ),
            c(
              "Which revision most clearly restores the responsible agent?",
              ["A revision of the procedure was implemented.", "Implementation of the revision of the procedure occurred.", "The safety officer revised the procedure and introduced the new version."],
              2,
              "The verb-based revision names the actor and separates two actions instead of nesting them inside abstract nouns.",
            ),
            c(
              "Choose the correct agreement after an of-phrase: “A series of interviews ___ conducted.”",
              ["were", "was", "are"],
              1,
              "The grammatical head is series, which is singular here; interviews is the object of the preposition of.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Nominalise, then edit for clarity",
          instructions:
            "Complete each task and compare the effect on agency and emphasis.",
          items: [
            p(
              "Nominalise the action as the subject: “The hospital introduced the new triage system in May.”",
              "Model answer: The introduction of the new triage system took place in May.",
              "Introduction becomes the topic, but the hospital's agency is omitted unless added explicitly.",
            ),
            p(
              "Expand “a result” into a noun phrase modified by “unexpected”, “preliminary” and “from the pilot”.",
              "Model answer: an unexpected preliminary result from the pilot",
              "Keep the adjectives before the head and the prepositional postmodifier after it.",
            ),
            p(
              "Rewrite more directly: “There was a reconsideration of the allocation criteria by the funding body.”",
              "Model answer: The funding body reconsidered the allocation criteria.",
              "A verb restores a clear subject–action–object sequence.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why is nominalisation particularly useful when a process becomes the topic of several sentences?",
          ["It provides a compact noun that later reference can pick up", "It removes the need for any evidence", "It always makes every sentence shorter"],
          0,
          "A noun such as evaluation or change can be referred to with this, the process or it, creating a stable lexical chain.",
        ),
        q(
          2,
          "Which phrase is the clearest example of a postmodified noun phrase?",
          ["a detailed report", "the report on regional air quality", "regional detailed"],
          1,
          "The head noun report is followed by the prepositional phrase on regional air quality, which postmodifies it.",
        ),
        q(
          3,
          "What is a likely drawback of “The implementation of the revision of the procedure by the department was delayed”?",
          ["It has no main verb", "Its nested of-phrases obscure the head and postpone the main predicate", "It necessarily describes a future event"],
          1,
          "Several abstract noun phrases intervene before was delayed, increasing processing load and making the exact process harder to identify.",
        ),
        q(
          4,
          "Which sentence best balances nominal cohesion with explicit agency?",
          ["The evaluation occurred by the agency.", "There was an evaluation finding two weaknesses.", "The agency's evaluation of the pilot found two weaknesses."],
          2,
          "The possessive identifies the agency, while the noun evaluation allows the later clause to state its findings directly.",
        ),
      ],
    },
    {
      slug: "cohesion-in-academic-writing",
      title: "Cohesion in academic writing",
      summary:
        "Combine reference, lexical chains, substitution and signposting in an original academic paragraph, then edit it for progression rather than simply adding more linking words.",
      objective:
        "Map the cohesive resources in a model paragraph and revise an over-linked draft so that each connection performs a distinct grammatical or rhetorical job.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Cohesion is a network, not a list of connectors",
          paragraphs: [
            "A paragraph can contain however, therefore and in addition and still feel fragmented if it changes its central noun every sentence or uses ambiguous pronouns. Cohesion comes from the interaction of grammatical reference, repeated or related vocabulary, logical relations and a stable progression of information.",
            "The model below argues that a small study can be useful without being decisive. It is written specifically for this lesson. Notice how the topic moves from the study to its evidence and then to the limit of the claim; the grammar helps readers follow that movement.",
          ],
        },
        {
          type: "examples",
          title: "Model paragraph: Useful but limited evidence",
          intro:
            "Read once for the argument, then again for the resources that hold it together.",
          items: [
            {
              text: "A small case study can reveal how a teaching practice operates in a particular setting. Its value lies in depth rather than breadth: detailed observation may expose mechanisms that a large survey would miss. This does not make the findings generalisable. The cases were selected from two schools, and neither represented the wider region. The study can therefore inform a hypothesis, but it cannot settle the question of effectiveness.",
              note: "Lexical chains link study, observation, findings and cases; demonstrative this refers to the preceding claim; therefore introduces a bounded conclusion.",
            },
            {
              text: "The first sentence introduces the genre; the second contrasts depth with breadth; the third rejects an inference; the fourth supplies the selection limitation; the final sentence distinguishes hypothesis generation from proof.",
              note: "Each sentence advances the argument instead of merely paraphrasing the previous one.",
            },
          ],
        },
        {
          type: "rules",
          title: "Audit four kinds of connection",
          items: [
            "Reference: check that its, this and the study have identifiable antecedents. Replace a pronoun if two nearby noun phrases could claim it.",
            "Lexical cohesion: repeat a key term exactly when precision matters, and use a related term or synonym when the concept remains stable but the wording needs variety.",
            "Logical relation: use addition for support, concession for limitation and consequence only when the conclusion actually follows. A paragraph about evidence needs concessions more often than decorative transitions.",
            "Information progression: identify the subject of each sentence. A sequence of different but related subjects can create a clear chain; a sequence of identical subjects may stall.",
          ],
        },
        {
          type: "table",
          title: "Cohesion map for the model",
          columns: ["Link", "Resource", "Function"],
          rows: [
            ["A small case study → Its value", "Possessive reference", "Keeps the study as the shared topic"],
            ["depth rather than breadth", "Contrastive coordination", "Explains the source of the study's value"],
            ["This does not make…", "Demonstrative proposition reference", "Rejects an overgeneralisation"],
            ["The cases → The study", "Related noun chain", "Moves from evidence to overall evidential status"],
            ["therefore → but", "Consequence plus contrast", "Separates what the study can and cannot support"],
          ],
        },
        {
          type: "exercise",
          title: "Diagnose cohesion, not just correctness",
          instructions:
            "Use the model paragraph to identify the function and effect of its connections.",
          items: [
            c(
              "What does its in the second sentence refer to?",
              ["Detailed observation", "The value of the case study", "The small case study"],
              2,
              "Its is possessive anaphoric reference to a small case study, the subject of the preceding sentence.",
            ),
            c(
              "What is the main job of “This does not make the findings generalisable”?",
              ["It adds a second example", "It limits the inference permitted by the preceding depth claim", "It introduces a new method"],
              1,
              "The demonstrative summarises the value just described and explicitly prevents it from being mistaken for broad generalisability.",
            ),
            c(
              "Why is therefore appropriate before the final conclusion?",
              ["The conclusion follows from the study's narrow selection", "It introduces an unrelated date", "It reports an unfulfilled past duty"],
              0,
              "The preceding sampling limitation supports the distinction between informing a hypothesis and settling effectiveness.",
            ),
            c(
              "Which revision would weaken the paragraph's lexical chain?",
              ["Keep study, cases and findings", "Use result for every concept without regard to meaning", "Refer to the study as the research when precision is maintained"],
              1,
              "Indiscriminate synonym substitution blurs distinctions among a study, its cases, observations and findings.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Edit an over-connected paragraph",
          instructions:
            "Answer the tasks, then produce a concise revised paragraph with one clear connection at each logical step.",
          items: [
            p(
              "Edit for an unclear antecedent: “The survey measured attitudes and access. It was completed online.” State the subject if the survey is intended.",
              "Model answer: The survey measured attitudes and access. The survey was completed online.",
              "Replacing it with the survey removes the competing singular antecedent access.",
            ),
            p(
              "Remove unnecessary repetition: “The pilot was small. The pilot was small, so the pilot could not prove effectiveness.”",
              "Model answer: The pilot was small, so it could not establish effectiveness on its own.",
              "Keep the key idea, use reference for the repeated subject and avoid repeating small.",
            ),
            p(
              "Write a four-sentence paragraph about one piece of evidence using a lexical chain, one concession and one bounded conclusion.",
              "Model answer: The interview data reveal how patients experience the new appointment system. The interviews provide depth, but they include only twelve volunteers. The sample is therefore useful for identifying problems, not for estimating their prevalence. Further survey work would be needed to test whether those problems are widespread.",
              "Connect evidence, evaluation and scope; do not add a marker to every sentence.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the most reliable first question when editing an unclear pronoun?",
          ["Is the sentence long enough?", "Which specific noun phrase or proposition is the intended antecedent?", "Can however be added?"],
          1,
          "Reference becomes clear only when the reader can identify the expression being picked up; length and connectors do not solve that problem.",
        ),
        q(
          2,
          "Why can exact repetition of a key term be preferable to a synonym?",
          ["It preserves a technical distinction that a near-synonym might blur", "It always makes prose more elegant", "It eliminates the need for evidence"],
          0,
          "In academic writing, apparently similar terms may denote different categories; exact repetition can protect that distinction.",
        ),
        q(
          3,
          "Which pairing best represents a coherent information progression?",
          ["Study → evidence → limitation → scope of conclusion", "Study → study → study → study", "Method → however → therefore → in addition"],
          0,
          "The sequence develops the evidential claim; the other options either stall or supply connectors without content progression.",
        ),
        q(
          4,
          "When should a writer prefer full repetition to ellipsis?",
          ["Whenever two clauses appear together", "Only in spoken English", "When the omitted material is ambiguous or the repeated action carries new emphasis"],
          2,
          "Economical omission is useful only when the grammar can recover the intended content without ambiguity.",
        ),
      ],
    },
  ],
};
