import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1GrammarUnit2: LessonUnit = {
  title: "Complex modality",
  description:
    "Express deduction, obligation, hypothetical meaning and diplomatic stance with precise combinations of modals, perfect aspect and subjunctive forms.",
  lessons: [
    {
      slug: "modal-perfects-and-speculation",
      title: "Modal perfects and speculation",
      summary:
        "Distinguish deductions about the past from unmet expectations, unnecessary actions and imagined outcomes by controlling modal + perfect constructions in evidentiary contexts.",
      objective:
        "Choose modal perfect forms according to the speaker's degree of certainty, the time of the event and whether the focus is inference, criticism or hypothetical result.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "The form alone does not tell you the meaning",
          paragraphs: [
            "A laboratory coordinator finds a freezer running at the wrong temperature. She may say that a door “must have been left open” if the evidence strongly supports that explanation. She could also say that the technician “should have reset the alarm” if an expected action was missed. Both sentences use a modal and a perfect form, but one draws a conclusion and the other evaluates a past obligation.",
            "Modal perfects combine a modal with have + past participle. The modal establishes the stance; the perfect looks back to an earlier event or state. The same surface pattern can therefore function as a deduction, a criticism, an expression of possibility or a hypothetical result. Begin by deciding which of those jobs the context requires.",
          ],
        },
        {
          type: "rules",
          title: "Four jobs for modal perfects",
          items: [
            "Speculate about a past event with may, might or could have + participle. “The sample could have been contaminated” presents a possibility, not an established cause.",
            "Draw a confident deduction with must have + participle, or reject a possibility with cannot/can't have + participle. “The signal must have weakened” means the evidence makes that conclusion very likely.",
            "Evaluate a missed expectation with should/ought to have + participle. “The team should have repeated the test” normally implies that it did not, although context can make the expectation merely relevant.",
            "Contrast unnecessary past action using needn't have + participle and action that was not necessary and probably did not happen using didn't need to + base verb. The first entails that the action happened; the second does not.",
          ],
        },
        {
          type: "examples",
          title: "Inference and evaluation in use",
          items: [
            {
              text: "Nobody answered the landline, although the lights were on; they might have been asleep already.",
              note: "Might have proposes an explanation for the silence without claiming certainty.",
            },
            {
              text: "The pressure could not have risen sharply if the calibration had been correct.",
              note: "Could not have expresses a strong deduction under a stated hypothetical condition.",
            },
            {
              text: "You needn't have printed the appendix; the chair sent a digital copy.",
              note: "Printing happened, but it was unnecessary.",
            },
            {
              text: "We didn't need to book the meeting room because the conference had been moved online.",
              note: "The sentence leaves open whether anyone booked it; it simply says booking was unnecessary.",
            },
          ],
        },
        {
          type: "table",
          title: "Choose the inference that fits the evidence",
          columns: ["Form", "Typical meaning", "Contextual example"],
          rows: [
            ["must have missed", "Strong deduction from evidence", "The bus isn't here; they must have missed it."],
            ["may have rejected", "Tentative possible explanation", "The proposal may have been rejected before it was read."],
            ["should have checked", "Expected action, often unfulfilled", "The editor should have checked the date."],
            ["needn't have waited", "Action happened but was unnecessary", "They needn't have waited in the rain."],
          ],
        },
        {
          type: "exercise",
          title: "Match stance to structure",
          instructions:
            "Choose the sentence that best expresses the stated evidence or judgement.",
          items: [
            c(
              "The laboratory log shows every calibration was correct, but the reading is impossible under that assumption. Which deduction is strongest?",
              ["The sensor may have been accurate.", "The reading cannot have come from that sensor.", "The reading should have come from that sensor."],
              1,
              "Cannot have expresses the conclusion that the stated source is incompatible with the evidence.",
            ),
            c(
              "Which sentence criticises an action that did happen but was unnecessary?",
              ["You didn't need to buy milk; we already had some.", "You needn't buy milk; we already have some.", "You needn't have bought milk; we already had some."],
              2,
              "Needn't have bought entails that the purchase occurred and judges it unnecessary in retrospect.",
            ),
            c(
              "Choose the tentative explanation for a past delay.",
              ["The parcel may have been returned to the sender.", "The parcel should have been return to the sender.", "The parcel must not have been return to the sender."],
              0,
              "May have been returned combines a tentative modal with a passive perfect form.",
            ),
            c(
              "Which sentence says that booking was unnecessary without stating whether anyone booked?",
              ["We didn't need to book a taxi.", "We needn't have booked a taxi.", "We shouldn't have booked a taxi."],
              0,
              "Didn't need to removes the necessity but does not entail that the action occurred; needn't have and shouldn't have both do.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Reason from evidence to grammar",
          instructions:
            "Complete each transformation and briefly state the difference in stance it creates.",
          items: [
            p(
              "Express a confident deduction: “The warning light proves that the brake fluid leaked.” Use must have.",
              "The brake fluid must have leaked.",
              "Treat must have as an inference, not as a past obligation.",
            ),
            p(
              "Express an unrealised past expectation: “It was the archivist's duty to label the box, but she did not.” Use should have.",
              "The archivist should have labelled the box.",
              "Should have + participle evaluates the missed action.",
            ),
            p(
              "Write two sentences about a colleague who did attend a meeting unnecessarily: one with needn't have and one with didn't need to.",
              "Model answer: She needn't have attended the meeting. She didn't need to attend it, but she wanted to hear the discussion.",
              "The first entails attendance; the second alone does not.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "The archive is silent, and the computer has gone into sleep mode. Which statement makes the most cautious deduction?",
          ["The archivist must have forgotten to sign out.", "The archivist might have forgotten to sign out.", "The archivist should have sign out."],
          1,
          "Might have offers a possible past explanation; must have would claim a much stronger inference and the third option is ungrammatical.",
        ),
        q(
          2,
          "Which interpretation best fits “The delivery should have arrived yesterday”?",
          ["It was expected yesterday but apparently did not arrive.", "It certainly arrived yesterday.", "It is forbidden to arrive before today."],
          0,
          "Should have plus a past-time expression commonly evaluates an expectation that was not fulfilled.",
        ),
        q(
          3,
          "Why can “must have been delayed” not be used simply to mean “was obliged to be delayed”?",
          ["Must have is reserved for future events", "In this form must normally expresses a deduction, not past obligation", "Been cannot follow must"],
          1,
          "Past obligation would be expressed with had to; must have + participle normally infers a past state or event from present evidence.",
        ),
        q(
          4,
          "Which pair correctly distinguishes two kinds of unnecessary past action?",
          ["Both forms entail that the action did not happen.", "“Needn't have gone” is future; “didn't need to go” is present.", "“Needn't have gone” entails going; “didn't need to go” does not necessarily do so."],
          2,
          "The perfect form needn't have reports an actual action judged unnecessary; the non-perfect did not need to only removes the necessity.",
        ),
      ],
    },
    {
      slug: "subjunctive-and-formal-structures",
      title: "Subjunctive and formal structures",
      summary:
        "Use the mandative subjunctive and hypothetical were in formal recommendations, demands and conditions, distinguishing them from ordinary indicative verb forms.",
      objective:
        "Form and recognise base-form mandative subjunctives, passive subjunctives and hypothetical were, including formal inverted alternatives.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "Formal grammar marks the nature of a proposition",
          paragraphs: [
            "A university committee drafts two different statements. “The laboratory manager checks the equipment every Friday” reports an established routine. “The committee recommends that the laboratory manager check the equipment every Friday” presents a desired course of action. The second sentence uses the mandative subjunctive: check remains in its base form despite the singular subject.",
            "English has only limited inflection for the subjunctive, so advanced control depends on recognising contexts. Formal proposals, demands and evaluations often trigger the base form. Hypothetical were, especially in if-clauses and after as if, signals unreality for all subjects. These structures are optional in many varieties, where alternatives such as should check or the indicative may be preferred.",
          ],
        },
        {
          type: "rules",
          title: "Recognise the subjunctive environments",
          items: [
            "Use the base form after mandative verbs such as demand, insist, recommend, require and suggest when they introduce a proposed action: “The chair insisted that the minutes be circulated before the vote.”",
            "The base form is also common after formal adjectives and nouns expressing necessity or judgement: “It is essential that each participant sign the declaration”; “The requirement that applicants submit references surprised several candidates.”",
            "For a passive mandative subjunctive, use be + past participle: “It was proposed that the building be evacuated.” The form remains be, not is or was.",
            "Use were for all persons in formal hypothetical contexts: “If the director were available…” and “The researcher spoke as if the result were conclusive.” In less formal English, was may occur, but were maintains the hypothetical distinction.",
          ],
        },
        {
          type: "examples",
          title: "Subjunctives under institutional pressure",
          items: [
            {
              text: "The trustees requested that the treasurer provide a full reconciliation by Friday.",
              note: "Provide is the base-form mandative subjunctive; no to appears after requested that.",
            },
            {
              text: "It is imperative that no visitor be admitted until the pressure has stabilised.",
              note: "The passive subjunctive be admitted conveys a formal requirement rather than a reported fact.",
            },
            {
              text: "Were the methodology sound, the conclusion might be defensible.",
              note: "Inverted hypothetical were replaces if the methodology were sound.",
            },
            {
              text: "He behaved as though his appointment conferred unlimited authority.",
              note: "Though the indicative form confers is possible, were can heighten the sense that the authority is only imagined.",
            },
          ],
        },
        {
          type: "table",
          title: "Indicative or subjunctive?",
          columns: ["Meaning", "Formal structure", "Common alternative"],
          rows: [
            ["Reports a fact", "The manager approves the budget.", "No mandative alternative is needed."],
            ["Recommends an action", "They recommended that she reapply.", "They recommended that she should reapply."],
            ["Expresses necessity", "It is vital that the valve be closed.", "It is vital for the valve to be closed."],
            ["Imagines a different present", "If I were the chair, I would adjourn.", "If I was the chair, I would adjourn (informal)."],
          ],
        },
        {
          type: "exercise",
          title: "Select the formal form",
          instructions:
            "Choose the form that matches the stated meaning and maintains grammatical accuracy.",
          items: [
            c(
              "Complete the recommendation: “The panel recommended that the pilot ___ extended for six months.”",
              ["is", "be", "being"],
              1,
              "The passive mandative subjunctive uses be + past participle: be extended.",
            ),
            c(
              "Which sentence reports an actual past routine rather than recommending one?",
              ["The curator insisted that the register be updated.", "The curator updated the register every evening.", "It was essential that the register be updated."],
              1,
              "The indicative updated describes what the curator did; the other two sentences prescribe or evaluate an action.",
            ),
            c(
              "Choose the formal hypothetical form: “If the witness ___ willing to testify, the inquiry could continue.”",
              ["were", "will be", "would have been"],
              0,
              "Were presents the imagined present state formally for all subjects.",
            ),
            c(
              "Which sentence uses the mandative subjunctive after a formal noun?",
              ["The proposal that we meet again was approved.", "The proposal that we met again was approved.", "The proposal that we are meeting again was approved."],
              0,
              "The noun proposal triggers a proposed action, expressed with base-form meet in formal subjunctive use.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Draft formal recommendations",
          instructions:
            "Transform each prompt into a formal sentence, then identify the trigger and the verb form.",
          items: [
            p(
              "Use insist and the base form: “The chair said firmly that the minutes must be read aloud.”",
              "The chair insisted that the minutes be read aloud.",
              "Insist is the mandative trigger; be read is the passive subjunctive.",
            ),
            p(
              "Use a hypothetical conditional with were: “If I were responsible for the budget, I would reduce the contingency.”",
              "Were I responsible for the budget, I would reduce the contingency.",
              "Inversion places were before the subject and removes if.",
            ),
            p(
              "Write a formal sentence with “It is crucial that” and the idea that every volunteer receive a briefing.",
              "Model answer: It is crucial that every volunteer receive a safety briefing before entering the site.",
              "After crucial that, use the base form receive in formal mandative syntax.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "In “The regulator demanded that the warning be retained,” why is be used?",
          ["The warning is plural", "A demanded action takes the base-form passive subjunctive in formal English", "The demand concerns a future automatic event"],
          1,
          "Demand can introduce a mandative that-clause, whose passive verb is be + past participle.",
        ),
        q(
          2,
          "Which sentence clearly distinguishes a reported routine from a recommendation?",
          ["“The nurse checks the labels” reports practice; “the nurse check the labels” could be a subjunctive form.", "Both sentences report an identical routine.", "The base form always describes a past habit."],
          0,
          "The -s form is indicative; the base form after a suitable trigger can express a mandated or recommended action.",
        ),
        q(
          3,
          "What is the principal rhetorical effect of “Were the evidence conclusive” at the start of a sentence?",
          ["It makes the evidence certainly conclusive", "It compresses a formal hypothetical condition into an elegant opening", "It changes the clause into a past-perfect report"],
          1,
          "Inverted were introduces an unreal or tentative condition without using if; the evidence itself is not asserted to be conclusive.",
        ),
        q(
          4,
          "Which alternative is appropriate in formal prose after “It is essential that…”?",
          ["The valve closes", "The valve to close", "The valve be closed"],
          2,
          "Formal mandative syntax takes that + subject + base form be + past participle for a passive requirement.",
        ),
      ],
    },
    {
      slug: "conditionals-in-advanced-argument",
      title: "Conditionals in advanced argument",
      summary:
        "Build logically precise conditionals for argument, including mixed time references, negative unless-clauses, restrictive provisos and compact conditional implications.",
      objective:
        "Match verb forms to the real or imagined time relationship and express conditions with unless, provided that, but for and otherwise without changing the argument.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "A conditional is a relationship between propositions",
          paragraphs: [
            "In a policy debate, a speaker might argue: “If the current subsidy had been redesigned last year, small producers would be in a stronger position now.” The condition refers to a past opportunity that cannot be recovered; the result concerns the present. A single ‘second conditional’ label cannot explain the form because the two halves occupy different time perspectives.",
            "Advanced conditionals are chosen for logical clarity as much as for hypothetical meaning. A concession may be real, a proviso may restrict an agreement, and a counterfactual may challenge an assumed cause. Before selecting the verb forms, identify whether the condition is open, remote or impossible and where its result sits in time.",
          ],
        },
        {
          type: "rules",
          title: "Control time, truth and restriction",
          items: [
            "Use a past perfect if-clause for a counterfactual past condition and would have + participle for its past result: “If the warning had arrived, the evacuation would have begun earlier.”",
            "In a mixed conditional, choose each half independently: past perfect for an unreal past condition, would + base verb for a present result, or would have + participle for an unreal past result of a present condition.",
            "Use unless only when it can mean ‘if not’. “Unless the data are verified, we cannot publish” is not equivalent to “We cannot publish only unless the data are verified,” which asserts the exception too strongly.",
            "Provided that and so long as introduce restrictive conditions; but for means ‘without’ or ‘if it were not for’. Otherwise can compactly carry the negative alternative when the preceding proposition is clear.",
          ],
        },
        {
          type: "examples",
          title: "Conditionals as instruments of argument",
          items: [
            {
              text: "If the company had retained its engineering division, it would not depend so heavily on external consultants now.",
              note: "The condition is counterfactual and past; the result is a present consequence.",
            },
            {
              text: "Were the reserve adequate, the scheme might proceed; were it to run out, work would stop within weeks.",
              note: "Formal inversion creates two parallel hypothetical cases and makes their consequences easy to compare.",
            },
            {
              text: "The agreement can proceed, provided that both parties disclose their financial interests.",
              note: "The proviso restricts the permission rather than describing a cause of the agreement.",
            },
            {
              text: "But for the intervention of the harbour master, two vessels would have collided.",
              note: "But for supplies an unreal past condition: without the harbour master's intervention.",
            },
          ],
        },
        {
          type: "table",
          title: "Map the time logic",
          columns: ["Condition", "Result", "Meaning"],
          rows: [
            ["If the sensor is working", "the display will update", "Open future condition"],
            ["If the sensor were working", "the display would update", "Imagined present condition"],
            ["If the sensor had worked", "the display would have updated", "Unreal past condition and result"],
            ["If the sensor had worked", "the display would update now", "Mixed past condition, present result"],
          ],
        },
        {
          type: "exercise",
          title: "Test the conditional logic",
          instructions:
            "Choose the option that expresses the intended time relationship and restriction accurately.",
          items: [
            c(
              "Express an unreal past condition with a present result: “If the council had rejected the plan last year, the site ___ empty now.”",
              ["would be", "would have been", "will be"],
              0,
              "The condition looks to an unreal past decision, while the result concerns the site's present state.",
            ),
            c(
              "Which clause means ‘if the visitors do not sign in’?",
              ["Unless the visitors sign in", "Provided the visitors sign in", "But for the visitors signing in"],
              0,
              "Unless introduces the negative alternative to signing in; provided introduces a positive requirement.",
            ),
            c(
              "Complete the formal inversion: “___ the deadline been extended, we could have tested the system more thoroughly.”",
              ["Had", "Were", "Should"],
              0,
              "Had is inverted from if the deadline had been extended and introduces a past perfect passive condition.",
            ),
            c(
              "Choose the accurate paraphrase of “But for the volunteer team, the event would not have taken place.”",
              ["The team made the event happen.", "If the team had not helped, the event would not have happened.", "The event took place unless the team helped."],
              1,
              "But for introduces the counterfactual absence of the team's contribution; it does not merely report that they helped.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Construct a defensible conditional",
          instructions:
            "Write each conditional and explain the temporal or logical relationship in a short phrase.",
          items: [
            p(
              "Form a mixed conditional: “If the design had been simpler” + “we could maintain it more easily now.”",
              "If the design had been simpler, we could maintain it more easily now.",
              "Past perfect condition; present modal result.",
            ),
            p(
              "Use provided that to restrict an agreement about sharing the preliminary data.",
              "Model answer: We can share the preliminary data, provided that the journal agrees to keep the participants anonymous.",
              "The clause after provided that states the condition on which permission depends.",
            ),
            p(
              "Use otherwise in two sentences to state an open decision and its negative consequence.",
              "Model answer: The samples can be released once the quality check is complete. Otherwise, they must remain in quarantine.",
              "Otherwise means ‘if that does not happen’ and avoids repeating the whole condition.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which sentence correctly combines an unreal past condition with a present result?",
          ["If the bridge had been repaired, it would be safe now.", "If the bridge was repaired, it would have been safe now.", "If the bridge had repaired, it will be safe now."],
          0,
          "Had been repaired describes the unreal past passive condition; would be safe concerns the present consequence.",
        ),
        q(
          2,
          "Why is unless potentially inaccurate in “The grant is available unless the applicant is over eighteen”?",
          ["Unless cannot introduce a condition", "The sentence may unintentionally exclude adults rather than limit the grant to them", "The verb is must always follow unless"],
          1,
          "Unless means ‘if not’, so the literal logic is ‘if the applicant is not over eighteen’; the writer may have intended ‘if the applicant is over eighteen’.",
        ),
        q(
          3,
          "What relationship does provided that add to “The board will approve the experiment”?",
          ["A cause that has already occurred", "A restrictive condition that must be met", "A contrast with an earlier decision"],
          1,
          "Provided that sets a condition on approval rather than explaining why the board has already made a decision.",
        ),
        q(
          4,
          "Which sentence uses an open condition rather than a counterfactual one?",
          ["If the committee were unbiased, it might approve the appeal.", "Had the committee seen the evidence, it would have approved the appeal.", "If the committee sees the evidence, it may approve the appeal."],
          2,
          "The present simple plus may leaves the future outcome genuinely open; the other versions describe unreal situations.",
        ),
      ],
    },
    {
      slug: "modality-certainty-and-politeness",
      title: "Modality, certainty and politeness",
      summary:
        "Calibrate epistemic commitment and interpersonal distance through modal choice, tentative clause patterns and impersonal framing without making the underlying claim vague.",
      objective:
        "Adjust certainty and politeness in professional contexts while distinguishing genuine uncertainty from strategic softening and avoiding over-hedged recommendations.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Certainty and courtesy are separate dimensions",
          paragraphs: [
            "A project lead must tell a client that the current schedule is unrealistic. “The deadline is impossible” is clear but may sound dismissive. “I’m afraid the current schedule may not be feasible” softens the delivery, yet may also weaken the judgement too much. Stronger control allows a precise claim with courteous framing: “I’m afraid I don’t think the current schedule is realistic.”",
            "Modality can report how confident the speaker is, impose an obligation, grant permission or express willingness. In advanced writing and speaking, listeners also interpret social meaning. Past forms in requests, impersonal subjects and interrogative frames can create distance. The aim is not to hedge every sentence but to signal exactly where uncertainty remains and where action is required.",
          ],
        },
        {
          type: "rules",
          title: "Separate evidence from face",
          items: [
            "Use epistemic modals and adverbs to show confidence: must for a strong deduction, should for a reasonable expectation, may/might for possibility, and can't for a strongly rejected inference. Do not treat these as interchangeable politeness markers.",
            "Distancing past forms such as could, would and did are common in requests: “Could you confirm the figures?” They are not reports of past time but more tentative present acts.",
            "Negative or wh-interrogatives can frame a suggestion less directly: “Wouldn’t it be safer to run another trial?” The proposition remains clear even though it is presented as a question.",
            "Impersonal structures such as “It seems that…” and “The data suggest that…” locate the claim in evidence rather than personality. Add a direct recommendation when readers need an action; too many hedges can obscure responsibility.",
          ],
        },
        {
          type: "examples",
          title: "Calibrated language under professional pressure",
          items: [
            {
              text: "The early figures should indicate whether demand is stable, although they will not settle the question on their own.",
              note: "Should expresses a qualified expectation; the concession identifies the limit of the evidence.",
            },
            {
              text: "Would you be able to circulate the revised contract before tomorrow’s call?",
              note: "Would and the interrogative frame make the request tentative without turning it into a past-tense statement.",
            },
            {
              text: "There may be a case for extending the pilot, but the available data do not yet justify a permanent commitment.",
              note: "The possibility is acknowledged before a direct boundary is placed on the conclusion.",
            },
            {
              text: "I wonder whether the panel has considered the effect on smaller suppliers.",
              note: "The clause indirectly raises a concern while leaving room for the answer no.",
            },
          ],
        },
        {
          type: "table",
          title: "Same message, different commitment",
          columns: ["Function", "Tentative version", "More direct version"],
          rows: [
            ["Request information", "Could you confirm the delivery date?", "Please confirm the delivery date."],
            ["Question an inference", "I wonder whether the sample is representative.", "The sample is not representative."],
            ["Offer an action", "We might consider adding a second trial.", "We should add a second trial."],
            ["Express an expectation", "The costs should level off.", "The costs will probably level off."],
          ],
        },
        {
          type: "exercise",
          title: "Choose the intended interpersonal effect",
          instructions:
            "Select the version that best balances the stated certainty and relationship.",
          items: [
            c(
              "You have conclusive evidence that a claim is false. Which version communicates that certainty most clearly?",
              ["The claim might possibly be inaccurate.", "The claim cannot be correct.", "I wonder if the claim is correct."],
              1,
              "Cannot expresses a strongly rejected possibility; the other choices signal openness or uncertainty.",
            ),
            c(
              "Which sentence is a polite present request rather than a report of past ability?",
              ["Could you send the minutes today?", "You could send the minutes yesterday.", "Could you have sent the minutes yesterday?"],
              0,
              "In this interrogative context, could softens a present request; the other versions refer to past ability or action.",
            ),
            c(
              "Choose the qualified expectation appropriate when evidence is promising but incomplete.",
              ["The intervention will certainly succeed.", "The intervention should reduce the delay.", "The intervention can't reduce the delay."],
              1,
              "Should expresses a reasonable expectation without claiming certainty; it is stronger than may but weaker than will certainly.",
            ),
            c(
              "Which sentence most clearly combines a courteous frame with a firm limit?",
              ["I’m afraid we are unable to approve the change without further evidence.", "I’m afraid we might not perhaps approve anything.", "It may possibly be that approval is difficult."],
              0,
              "The courteous introductory phrase is followed by a direct statement of the present restriction.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Calibrate a professional message",
          instructions:
            "Rewrite each prompt for the specified level of commitment and distance, then explain the key grammatical choice.",
          items: [
            p(
              "Make a direct recommendation more tentative without changing its content: “We need to revise the risk assessment.”",
              "Model answer: I think we may need to revise the risk assessment.",
              "I think and may locate uncertainty in the speaker's judgement rather than in the need itself.",
            ),
            p(
              "Turn “Send me the raw data” into a courteous request using could or would.",
              "Model answer: Could you send me the raw data, please?",
              "The past modal form functions as a tentative present request.",
            ),
            p(
              "Write one sentence expressing strong doubt about a past explanation without accusing anyone.",
              "Model answer: The available records make it unlikely that the delay was caused by the supplier alone.",
              "Make it unlikely attributes the doubt to evidence and avoids a personal accusation.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which statement makes the weakest factual commitment?",
          ["The pilot must have failed.", "The pilot may have failed.", "The pilot cannot have failed."],
          1,
          "May have presents failure as possible; must have and cannot have both express strong deductions in opposite directions.",
        ),
        q(
          2,
          "Why does “Would you mind checking the appendix?” work as a polite request?",
          ["The interrogative and distancing modal frame leave the listener room to decline", "Would reports an obligation", "Mind means the appendix must be checked"],
          0,
          "The grammatical form indirectness matters more than any literal past-time meaning of would.",
        ),
        q(
          3,
          "Which sentence over-hedges a recommendation to the point of obscuring the action?",
          ["We recommend extending the pilot, subject to review.", "The panel should review the pilot in June.", "It may be worth considering whether a review could perhaps be useful."],
          2,
          "Stacking may, considering, perhaps and could makes both the recommendation and the responsible action difficult to identify.",
        ),
        q(
          4,
          "In “The results should be treated cautiously,” what is the main function of should?",
          ["It reports a past duty", "It expresses a qualified recommendation or expectation", "It grants permission to ignore the results"],
          1,
          "Here should advises caution based on the evidence; it does not describe an unfulfilled past obligation.",
        ),
      ],
    },
  ],
};
