import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2GrammarUnit3: LessonUnit = {
  title: "Modality and stance",
  description:
    "Master modal meaning and scope, semi-modal idioms, evaluative distancing, non-canonical conditionals and the grammar of academic and public stance.",
  lessons: [
    {
      slug: "epistemic-and-deontic-modality",
      title: "Epistemic and deontic modality",
      summary:
        "Distinguish claims about knowledge and obligation from claims about possibility and necessity, then analyse modal ambiguity and the scope of negation.",
      objective:
        "Identify and control epistemic, deontic and dynamic readings, including mustn't versus needn't and negation that falls inside or outside a modal proposition.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "One modal can carry several logics",
          paragraphs: [
            "In “The director may approve the request,” may can grant permission, so the sentence is deontic: it concerns what is allowed. In “The director may already have approved it,” may is epistemic: it concerns what the speaker thinks might be true. The same word shifts because the proposition and context shift.",
            "Epistemic modality evaluates knowledge or evidence; deontic modality imposes obligation or permission; dynamic modality concerns ability, willingness or inherent potential. Negation adds another layer. “You mustn't enter” prohibits entry, while “You needn't enter” removes any obligation to enter. Treating both as simple negatives of must produces the wrong advice.",
          ],
        },
        {
          type: "rules",
          title: "Analyse modal meaning and scope",
          items: [
            "Identify the modal's target: a proposition for epistemic readings, an action for deontic readings, or a participant's capacity or disposition for dynamic readings. “She can drive” is dynamic ability; “She can borrow the car” is permission.",
            "Use must for strong necessity or inference, should for weaker obligation or expectation, may/might/can for possibility, and will for prediction or volition. No modal has one meaning in every context.",
            "Distinguish external negation from internal modal negation. “I don't think the claim is sound” negates the speaker's assent, while “I think the claim isn't sound” places not inside the proposition about the claim.",
            "Use mustn't for prohibition and needn't for absence of necessity. Don't have to also removes obligation. Cannot/can't can reject an inference, forbid an action or deny ability, depending on syntax and context.",
          ],
        },
        {
          type: "examples",
          title: "Modal readings in institutional language",
          items: [
            {
              text: "The seal may be broken only by the safety officer.",
              note: "May is deontic permission, restricted by only by the safety officer.",
            },
            {
              text: "The seal may have been broken during transit.",
              note: "The perfect form supports an epistemic possibility about a past event.",
            },
            {
              text: "You needn't attend the briefing if you have already completed the module.",
              note: "Needn't removes an obligation; it does not forbid attendance.",
            },
            {
              text: "I don't think the evidence establishes causation.",
              note: "The negative falls on the speaker's judgement rather than directly on establishes.",
            },
          ],
        },
        {
          type: "table",
          title: "Disambiguate the modal",
          columns: ["Sentence", "Likely reading", "Contextual clue"],
          rows: [
            ["The panel may reject the appeal.", "Deontic permission", "A rule about who may decide"],
            ["The panel may reject the appeal.", "Epistemic possibility", "A prediction about the decision"],
            ["The pump can operate without power.", "Dynamic capacity", "A property of the machine"],
            ["You mustn't override the alarm.", "Deontic prohibition", "A safety instruction"],
          ],
        },
        {
          type: "exercise",
          title: "Resolve reading and negative scope",
          instructions:
            "Choose the sentence that expresses the stated modal logic accurately.",
          items: [
            c(
              "You want to say attendance is permitted. Which sentence is deontic?",
              ["Attendees may leave at any time.", "Attendees may have left at any time.", "Attendees might leave eventually."],
              0,
              "May + base verb grants permission here; the perfect and might versions express possibility instead.",
            ),
            c(
              "Which sentence removes an obligation rather than prohibiting the action?",
              ["You mustn't submit the form online.", "You needn't submit the form online.", "You cannot submit the form online."],
              1,
              "Needn't says the action is unnecessary; mustn't forbids it and cannot may deny permission or ability.",
            ),
            c(
              "Which sentence expresses a strong deduction rather than an obligation?",
              ["The results must be checked by noon.", "The results must have been checked by noon.", "The results should be checked by noon."],
              1,
              "Must have + participle infers a completed past action; the non-perfect forms express obligation or advice.",
            ),
            c(
              "Choose the structure in which not most clearly negates the speaker's judgement.",
              ["I think the model isn't valid.", "I don't think the model is valid.", "The model isn't thought valid."],
              1,
              "I don't think places the negative on the act of thinking or assenting, a common stance construction.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Specify modal scope",
          instructions:
            "Write each sentence and label the modal reading and any relevant negative scope.",
          items: [
            p(
              "Use may twice, once for permission and once for a possible past event, about a technician accessing the control room.",
              "Model answer: Technicians may access the control room only when accompanied. The technician may have entered after the alarm.",
              "The first may is deontic; the second is epistemic with a perfect passive.",
            ),
            p(
              "Contrast mustn't and needn't in two sentences about using the emergency lift.",
              "Model answer: You mustn't use the emergency lift during the test. You needn't use the stairs unless you prefer them.",
              "Mustn't prohibits; needn't removes necessity.",
            ),
            p(
              "Write one sentence negating an inference and another negating the proposition inside a belief.",
              "Model answer: The report can't be final because the signature page is missing. The editor believes the conclusion isn't supported by the data.",
              "Can't rejects the inference; isn't belongs to the embedded proposition.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which use of may is epistemic?",
          ["“You may use the laboratory after training.”", "“The sample may have been stored incorrectly.”", "“You may leave the room now.”"],
          1,
          "May have + participle presents a possible past state; the other sentences grant permission.",
        ),
        q(
          2,
          "What is the key difference between mustn't and needn't?",
          ["Mustn't removes obligation; needn't expresses prohibition", "Mustn't expresses prohibition; needn't removes obligation", "They are always interchangeable"],
          1,
          "The negative scope differs: mustn't negates permission, while needn't negates necessity.",
        ),
        q(
          3,
          "Why is can often ambiguous in “The machine can operate at night”?",
          ["It may express ability, permission or possibility depending on context", "It has no grammatical meaning", "It can only express a past event"],
          0,
          "The modal's reading depends on whether the context concerns capacity, a rule allowing operation or an epistemic possibility.",
        ),
        q(
          4,
          "In “I don't suppose the figures are complete,” where does the main negative attitude fall?",
          ["On the arithmetic result alone", "On the tense of are", "On the speaker's supposition or assent"],
          2,
          "The negated matrix verb marks the speaker's stance toward the embedded proposition rather than necessarily denying completeness outright.",
        ),
      ],
    },
    {
      slug: "modal-idioms-and-semi-modals",
      title: "Modal idioms and semi-modals",
      summary:
        "Master nuanced patterns such as had better, be to, be supposed to, be bound to and would rather, distinguishing their grammar, obligation, expectation and interpersonal force.",
      objective:
        "Use common modal idioms and semi-modals accurately, including their complement patterns and the contrast between objective likelihood and social expectation.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Modal meaning is distributed across structures",
          paragraphs: [
            "“The service is supposed to be reliable” describes an expectation attached to the service, not necessarily a duty imposed on it. “The supplier is bound to notice the discrepancy” predicts an outcome with near-certainty. Neither meaning can be captured by replacing the whole expression with must.",
            "Semi-modals and modal idioms combine a verb phrase with modal meaning. Some express schedules, others advice, likelihood, preference or tendency. Their syntax matters: had better takes a base verb, be supposed to takes an infinitive, and would rather can take a past-form subject to express a present preference. C2 control means learning both the nuance and the complement frame.",
          ],
        },
        {
          type: "rules",
          title: "Learn the pattern with its meaning",
          items: [
            "Had better + base verb gives strong advice or warns of a consequence: “We had better leave now.” The negative is had better not + base verb; it normally refers to the subject's own action.",
            "Be to + base verb can express a formal arrangement, instruction, obligation or destined outcome. Be supposed to expresses social expectation or reported belief, often allowing that reality may differ.",
            "Be bound to predicts a confident outcome; be liable to expresses a tendency or risk. Be unlikely to weakens a prediction. These forms evaluate likelihood rather than imposing duty.",
            "Would rather/sooner + base verb expresses preference. When the preferred subject differs, use would rather + subject + past form: “I'd rather she told me now.” Would rather not is the standard short negative.",
          ],
        },
        {
          type: "examples",
          title: "Idioms in delicate situations",
          items: [
            {
              text: "The clinic had better confirm the appointment in writing.",
              note: "Had better gives pointed advice and implies a practical reason for following it.",
            },
            {
              text: "The witness is supposed to have arrived before nine.",
              note: "Be supposed to + perfect infinitive reports an expectation about a past event.",
            },
            {
              text: "Without another sample, the team is bound to encounter the same problem again.",
              note: "Be bound to expresses a strong prediction, not an instruction.",
            },
            {
              text: "I'd rather the committee reconsidered the wording before publication.",
              note: "The past-form subject clause expresses a present preference, not a past-time reference.",
            },
          ],
        },
        {
          type: "table",
          title: "Pattern, force and complement",
          columns: ["Structure", "Typical force", "Example"],
          rows: [
            ["had better + base", "Strong advice or warning", "You had better check the seal."],
            ["be supposed to + base", "Expectation or reported belief", "The pilot is supposed to start at noon."],
            ["be bound to + base", "Confident prediction", "The delay is bound to affect demand."],
            ["be liable to + base", "Tendency or exposure to risk", "Thin cables are liable to overheat."],
            ["would rather + subject + past", "Present preference about another subject", "I'd rather she waited."],
          ],
        },
        {
          type: "exercise",
          title: "Choose the idiom and its grammar",
          instructions:
            "Select the sentence that combines the intended modal force with the correct complement pattern.",
          items: [
            c(
              "You want to give strong advice about checking the result. Which sentence works?",
              ["You had better check the result before signing.", "You had better checking the result before signing.", "You had better to check the result before signing."],
              0,
              "Had better is followed directly by the base verb check.",
            ),
            c(
              "Choose the confident prediction rather than an instruction.",
              ["The supplier is bound to notice the shortage.", "The supplier is supposed to noticing the shortage.", "The supplier is liable to noticing the shortage."],
              0,
              "Be bound to + base verb expresses strong likelihood; supposed to carries expectation and the other patterns are ungrammatical.",
            ),
            c(
              "Which sentence correctly expresses a present preference about someone else's action?",
              ["I'd rather she tells me tomorrow.", "I'd rather she told me tomorrow.", "I'd rather she telling me tomorrow."],
              1,
              "A different subject after would rather takes the past form told to express a present or future preference.",
            ),
            c(
              "Choose the form that reports an expected past arrival.",
              ["The guests are supposed to arrive yesterday.", "The guests are supposed to have arrived yesterday.", "The guests are supposed to arrived yesterday."],
              1,
              "Be supposed to + have + past participle reports an unfulfilled or relevant expectation about a past event.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Calibrate advice, expectation and likelihood",
          instructions:
            "Write each pattern and explain its force in one short phrase.",
          items: [
            p(
              "Use had better not to warn someone against opening a pressurised valve.",
              "Model answer: You had better not open the valve while it is pressurised.",
              "Had better not expresses strong negative advice.",
            ),
            p(
              "Use be liable to to describe a risk associated with prolonged storage.",
              "Model answer: Paper kept in damp conditions is liable to develop mould.",
              "Be liable to expresses a tendency or risk, not certainty.",
            ),
            p(
              "Write a present preference sentence with would rather and a different subject.",
              "Model answer: I'd rather the panel reviewed the figures before voting.",
              "Reviewed is a past-form subjunctive-like verb after the different subject, not a report of a completed review.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What does be supposed to most often signal in “The system is supposed to encrypt every transfer”?",
          ["An expected property or stated design that may not match performance", "A completed past encryption", "A prohibition on encryption"],
          0,
          "The expression reports expectation or belief and can invite a contrast with what actually happens.",
        ),
        q(
          2,
          "Why is “I'd rather she waited” not simply a report of a past preference?",
          ["Waited is always past tense in this construction", "The past form after a different subject expresses a present or future preference", "The sentence is a past perfect"],
          1,
          "Would rather uses a past form for modal distancing when the preferred subject differs from the speaker.",
        ),
        q(
          3,
          "Which pair correctly contrasts prediction and tendency?",
          ["“Is bound to fail” is near-certain; “is liable to fail” indicates a risk or tendency.", "Both mean ‘is required to fail’.", "‘Is liable to’ expresses permission."],
          0,
          "Bound to is strongly predictive, while liable to signals susceptibility without guaranteeing the outcome.",
        ),
        q(
          4,
          "Which form is the standard negative of had better?",
          ["Had better don't", "Hadn't better to", "Had better not + base verb"],
          2,
          "The negator follows had better and precedes the base verb: had better not open.",
        ),
      ],
    },
    {
      slug: "distancing-hedging-and-evaluation",
      title: "Distancing, hedging and evaluation",
      summary:
        "Use extraposed, impersonal, parenthetical and degree structures to calibrate commitment, attribute judgement and evaluate evidence without hiding the writer's position.",
      objective:
        "Distinguish useful caution from evasive hedging and construct grammatical stance markers that identify the source and strength of an evaluation.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Distance can clarify the basis of a claim",
          paragraphs: [
            "“It seems unlikely that the sample is representative” separates the appearance of unlikelyhood from the speaker's direct assertion. “The sample is unrepresentative” is more categorical. The first can be appropriate when the evidence is incomplete, but repeated distancing may leave readers unsure what the writer actually concludes.",
            "Hedging and evaluation are related but distinct. A hedge calibrates certainty: perhaps, to some extent, may have. An evaluative structure expresses judgement: significant, disappointing, surprisingly robust. Distancing may attribute a claim to evidence or another source. At mastery level, these resources work together so that readers can see both the strength of the claim and the basis on which it rests.",
          ],
        },
        {
          type: "rules",
          title: "Make stance grammatically visible",
          items: [
            "Use extraposed structures to frame a proposition: “It is possible that…”, “It is important to distinguish…” and “It would be premature to conclude…”. The adjective or noun carries the writer's evaluation before the proposition arrives.",
            "Use parenthetical stance phrases to comment on the clause without breaking its core structure: “The result, admittedly preliminary, is encouraging”; “This is, in my view, a workable compromise.”",
            "Attribute evaluation through reporting grammar: “The audit suggests that…”, “Critics describe the policy as…”, “The authors are inclined to interpret…”. Choose a reporting verb whose strength matches the source's evidence.",
            "Degree structures sharpen or soften evaluation: highly significant, only partly consistent, remarkably resilient. Avoid stacking boosters such as highly, extremely and undeniably, which can make a claim sound inflated rather than authoritative.",
          ],
        },
        {
          type: "examples",
          title: "Commitment with accountability",
          items: [
            {
              text: "It would be premature to infer a long-term benefit from a follow-up period of six weeks.",
              note: "The extraposed infinitive identifies the limit directly and explains why the inference should be withheld.",
            },
            {
              text: "The findings are encouraging, though not yet sufficient to justify a change in policy.",
              note: "A positive evaluation is followed by a grammatically explicit boundary on its consequences.",
            },
            {
              text: "Several respondents described the process as burdensome; whether that perception was typical remains unclear.",
              note: "The reporting clause attributes the evaluation, while the second clause limits its generalisability.",
            },
            {
              text: "The mechanism is, in principle, compatible with the model, but the available data do not test it directly.",
              note: "The parenthetical phrase narrows the compatibility claim before the evidential limitation is stated.",
            },
          ],
        },
        {
          type: "table",
          title: "Stance resource and rhetorical job",
          columns: ["Resource", "Example", "Job"],
          rows: [
            ["Extraposed adjective", "It is doubtful that the model applies here.", "Frames uncertainty before the proposition"],
            ["Parenthetical phrase", "The result is, arguably, significant.", "Attributes or qualifies the writer's judgement"],
            ["Reporting clause", "The panel interprets the change as modest.", "Locates an evaluation in a source"],
            ["Degree modifier", "The effect is only partly consistent.", "Restricts the scope of an evaluative adjective"],
          ],
        },
        {
          type: "exercise",
          title: "Choose accountable stance",
          instructions:
            "Select the version that best calibrates certainty, attribution and evaluation for the stated purpose.",
          items: [
            c(
              "You need a formal limit on drawing a conclusion from early results. Which structure is most precise?",
              ["It would be premature to draw a firm conclusion.", "Maybe it is a conclusion somehow.", "The conclusion has definitely been premature."],
              0,
              "The extraposed adjective directly identifies the inference that should be delayed.",
            ),
            c(
              "Choose the sentence that attributes a negative judgement to respondents rather than stating it as fact.",
              ["The process is burdensome.", "Respondents described the process as burdensome.", "The process was described."],
              1,
              "The reporting verb and as-phrase identify both the source and the content of the evaluation.",
            ),
            c(
              "Which parenthetical placement is grammatical?",
              ["The findings are significant, in my view, though provisional.", "The findings are significant in my view though, provisional.", "The findings are significant, in my provisional view though."],
              0,
              "The parenthetical in my view is enclosed by commas and leaves the main clause and following concession intact.",
            ),
            c(
              "Which sentence avoids inflated evaluation while retaining a clear position?",
              ["The findings are extremely, highly and undeniably conclusive.", "The findings are highly suggestive, though they do not establish causation.", "The findings may perhaps possibly suggest something."],
              1,
              "Highly suggestive expresses a positive evaluation, and the concession states the limit without stacking boosters.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Position the claim and its limits",
          instructions:
            "Write each structure, then identify whether it hedges, evaluates, attributes or all three.",
          items: [
            p(
              "Use an extraposed structure to say that comparing the studies would be useful.",
              "Model answer: It would be useful to compare the studies before drawing a general conclusion.",
              "The evaluative adjective frames the usefulness before the specific action is stated.",
            ),
            p(
              "Add a parenthetical qualification to “The effect is substantial” without denying it.",
              "Model answer: The effect is, on the available evidence, substantial, though it may not persist.",
              "The parenthetical limits the evidential basis, while the final clause qualifies duration.",
            ),
            p(
              "Write a two-sentence stance statement that attributes a positive interpretation and then states your own limit.",
              "Model answer: The authors interpret the decline as evidence of improved efficiency. I would treat that interpretation cautiously because the measurement method also changed.",
              "Separate the source's evaluation from your own modalised caution and its stated reason.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the main advantage of “It is doubtful that…” over an unqualified negative?",
          ["It makes the uncertainty itself the grammatical topic", "It removes the need to state the proposition", "It converts the claim into a question"],
          0,
          "Extraposition foregrounds the writer's evaluative stance and postpones the proposition being evaluated.",
        ),
        q(
          2,
          "Why is a parenthetical such as “in my view” useful in public argument?",
          ["It makes the evaluation explicitly the writer's rather than an impersonal fact", "It eliminates all need for evidence", "It changes the sentence into reported speech"],
          0,
          "The phrase identifies the stance-holder while leaving the main proposition grammatically intact.",
        ),
        q(
          3,
          "Which sentence is most over-hedged?",
          ["The evidence supports a cautious hypothesis.", "It may perhaps be possible that some evidence exists.", "The evidence suggests, but does not prove, the hypothesis."],
          1,
          "May, perhaps, possible and some stack uncertainty until the claim and its evidential basis become difficult to identify.",
        ),
        q(
          4,
          "What distinguishes a reporting evaluation from a factual report?",
          ["A factual report can never name a source", "Evaluation requires the past perfect", "A reporting verb such as describe or interpret assigns a judgement to a source"],
          2,
          "The reporting grammar makes attribution visible, preventing a source's interpretation from being presented as the writer's neutral fact.",
        ),
      ],
    },
    {
      slug: "conditionality-beyond-the-textbook",
      title: "Conditionality beyond the textbook",
      summary:
        "Interpret and produce pragmatic, metalinguistic, concessive and hypothetical conditionals whose force cannot be captured by the standard first, second and third conditional labels.",
      objective:
        "Control if-clauses that negotiate meaning, soften speech, express concession or alter viewpoint, including compact fragments and as if/though constructions.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Some conditionals do not predict consequences",
          paragraphs: [
            "“If you like, we can meet on Thursday” does not invite a prediction about the listener's preferences. It offers a tentative option and leaves the decision open. “If anything, the delay strengthened the case for reform” does not mean that if anything at all existed, reform would follow; it corrects an implied direction of effect.",
            "Non-canonical conditionals serve discourse as well as logic. They can mark politeness, correct wording, express a counterfactual comparison, concede an extreme possibility or ask the listener to imagine a scenario. Their verb forms may be reduced or non-finite, and some fragments such as if so depend entirely on the preceding proposition for their condition.",
          ],
        },
        {
          type: "rules",
          title: "Read the discourse function",
          items: [
            "Metalinguistic or corrective conditionals restate a concept: “If by ‘independent’ you mean financially separate, the organisations qualify.” If anything introduces a corrective judgement, while if you like can signal a tentative suggestion.",
            "Concessive conditionals use even if/even though to say that the result would remain despite the condition: “Even if the forecast improves, the backlog will take months to clear.” Only if makes the condition strictly necessary rather than sufficient.",
            "As if/as though can introduce a hypothetical comparison. Use past forms for a counterfactual present comparison and past perfect for a counterfactual past: “He acts as if he owned the place”; “She looked as though she had not slept.”",
            "Compact fragments include if so, if not, if necessary and if possible. They are understood from the preceding clause, so the antecedent must be explicit enough for the reader to reconstruct the negative or condition.",
          ],
        },
        {
          type: "examples",
          title: "Conditional force in negotiation and argument",
          items: [
            {
              text: "If by “efficient” we mean cheaper to operate, then the new model clearly qualifies.",
              note: "The if-clause defines the evaluative term rather than reporting a future condition.",
            },
            {
              text: "If anything, the revised guidance made the procedure less clear.",
              note: "If anything corrects an assumed direction of change and supports the opposite judgement.",
            },
            {
              text: "Even were the costs to fall, the safety case would still require independent review.",
              note: "Formal inversion combines with a concessive conditional, maintaining the restriction despite a hypothetical improvement.",
            },
            {
              text: "The data are incomplete; if so, the apparent improvement cannot yet be treated as conclusive.",
              note: "If so compresses the condition ‘if the data are incomplete’, which must be recoverable from the preceding statement.",
            },
          ],
        },
        {
          type: "table",
          title: "Beyond prediction",
          columns: ["Function", "Form", "Example"],
          rows: [
            ["Tentative suggestion", "If you like + modal", "If you like, we could defer the decision."],
            ["Corrective emphasis", "If anything", "If anything, demand is weakening."],
            ["Strict necessity", "Only if", "The grant is available only if the work begins this year."],
            ["Hypothetical comparison", "as if/though + past", "He speaks as though he had witnessed the event."],
          ],
        },
        {
          type: "exercise",
          title: "Interpret the conditional function",
          instructions:
            "Choose the option that accurately identifies or supplies the non-predictive conditional meaning.",
          items: [
            c(
              "In “If by ‘voluntary’ you mean unpaid, then the scheme is problematic,” what is the if-clause doing?",
              ["Defining a term", "Predicting an unpaid salary", "Reporting a completed payment"],
              0,
              "The clause establishes the speaker's interpretation of voluntary before evaluating the scheme under that definition.",
            ),
            c(
              "Choose the sentence that concedes a possible improvement while preserving the conclusion.",
              ["If the costs fall, the scheme will certainly be approved.", "Even if the costs fall, the safety review remains necessary.", "Only if the costs fall does the safety review remain necessary."],
              1,
              "Even if marks the cost reduction as insufficient to remove the independent requirement.",
            ),
            c(
              "Which sentence correctly uses as though for a counterfactual past comparison?",
              ["She looked as though she had not slept.", "She looked as though she has not slept.", "She looked as though she not had slept."],
              0,
              "The past perfect expresses a past state that appears contrary to the evidence.",
            ),
            c(
              "Complete the compact fragment: “The committee may reject the proposal; if ___, we will revise the application.”",
              ["so", "not", "only"],
              0,
              "If so means ‘if the committee rejects it’; the positive anaphoric fragment points back to that event.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Use conditionals for discourse control",
          instructions:
            "Write each sentence and name its function rather than assigning it a numbered conditional label.",
          items: [
            p(
              "Use if you like to make a tentative suggestion about postponing the interview.",
              "Model answer: If you like, we could postpone the interview until Thursday.",
              "The clause marks optionality and softens the proposal.",
            ),
            p(
              "Use if anything to argue that the criticism increased support rather than reducing it.",
              "Model answer: If anything, the criticism strengthened support for the proposal.",
              "The expression corrects a possible expectation in the opposite direction.",
            ),
            p(
              "Write an even if sentence that concedes a favourable forecast but retains a warning about delivery capacity.",
              "Model answer: Even if the forecast improves, our delivery capacity will remain constrained until the new depot opens.",
              "Even if presents the forecast as insufficient to alter the warning.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is “if you like” doing in “If you like, we can take the later train”?",
          ["Offering a tentative option", "Predicting the listener's exact preference", "Reporting a past decision"],
          0,
          "The phrase softens a suggestion and leaves acceptance open rather than claiming knowledge of preference.",
        ),
        q(
          2,
          "What distinguishes only if from even if in “Only if X will Y” and “Even if X, Y”?",
          ["They are always interchangeable", "Only if makes X necessary for Y; even if concedes X without removing Y", "Even if prohibits X"],
          1,
          "Only if sets a necessary condition; even if marks a concessive condition whose satisfaction does not negate the result.",
        ),
        q(
          3,
          "Why is a past form natural in “He talks as if he knew the answer”?",
          ["It places the entire sentence in the past", "It makes knew an auxiliary", "It marks a hypothetical or doubtful comparison with the present"],
          2,
          "The past form expresses modal distance: the speaker suggests that he does not actually know.",
        ),
        q(
          4,
          "When is the fragment if not potentially ambiguous?",
          ["When it is unclear whether it means ‘if that is not so’ or ‘if X does not happen’", "When it appears in every sentence", "Only when the main verb is passive"],
          0,
          "The fragment depends on an antecedent, and the listener must know which proposition or action the negative condition excludes.",
        ),
      ],
    },
    {
      slug: "stance-in-academic-and-public-discourse",
      title: "Stance in academic and public discourse",
      summary:
        "Combine evaluation, attribution, concession and commitment in academic and public prose, using grammatical structures to make the writer's position both audible and defensible.",
      objective:
        "Build a sustained stance through clause framing, reporting structures, degree modifiers and concessive syntax while keeping evidence and judgement distinct.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "A position is more than a series of opinions",
          paragraphs: [
            "Public commentary often states a judgement first: “The proposal is short-sighted.” Academic prose may require the judgement to emerge through defined criteria, attributed evidence and explicit limits. In both, stance becomes credible when the grammar shows how claims relate to evidence and to other voices.",
            "Stance can be encoded in adjectives, reporting clauses, extraposed structures, modal verbs, concessive links and even pronoun choice. “The data show” assigns evidential authority; “we argue” announces a writer's position; “this suggests” marks inference. The goal is not neutral-sounding prose with no viewpoint, but a viewpoint whose basis and scope the reader can inspect.",
          ],
        },
        {
          type: "rules",
          title: "Build a stance architecture",
          items: [
            "Name the criterion for evaluation: “The policy is efficient on administrative costs” limits efficiency to one dimension. Without a criterion, evaluative adjectives can sound like unsupported verdicts.",
            "Separate report from interpretation with reporting grammar: “The authors report a decline” states their finding; “the decline indicates a structural change” advances the writer's interpretation and therefore needs support.",
            "Use extraposition to foreground evaluation: “It is significant that…”, “It is reasonable to conclude…”. Follow it with the proposition and, where needed, a concessive limit.",
            "Use concession to anticipate objections without surrendering the position: “Although the sample is limited, it offers a clear test of the mechanism.” Keep the main claim in the final clause when the concession is secondary.",
          ],
        },
        {
          type: "examples",
          title: "Stance in an original commentary paragraph",
          items: [
            {
              text: "The city's proposal is attractive in principle: it would shorten journeys for many residents. That advantage should not obscure the distributional cost, however. The transport model predicts wider access, but it assumes that every new connection will be served at peak times. We therefore regard the proposal as promising but not yet ready for approval.",
              note: "A criterion-based evaluation is followed by contrast, an attributed assumption and a modalised conclusion with a clear boundary.",
            },
            {
              text: "Notice the movement: a qualified benefit, a warning about scope, a specific evidential limitation and then a recommendation. The grammar does not erase disagreement; it makes each judgement answerable to a reason.",
              note: "The meta-comment identifies how stance is constructed rather than treating evaluation as mere tone.",
            },
          ],
        },
        {
          type: "table",
          title: "Stance moves and grammatical resources",
          columns: ["Move", "Resource", "Example"],
          rows: [
            ["Declare a position", "Evaluative clause with criterion", "The plan is effective on cost but weak on access."],
            ["Attribute evidence", "Reporting verb + that/to", "The model predicts that congestion will fall."],
            ["Concede a limitation", "Although/while + finite clause", "While the sample is small, the pattern is consistent."],
            ["Bound a conclusion", "Modal + but/not yet", "The evidence supports further testing, not immediate rollout."],
          ],
        },
        {
          type: "exercise",
          title: "Distinguish evidence from judgement",
          instructions:
            "Choose the analysis or revision that makes the stance and its basis most transparent.",
          items: [
            c(
              "Which clause reports another source's finding rather than the writer's interpretation?",
              ["The authors report a decline in attendance.", "The decline proves the policy failed.", "The decline is clearly disastrous."],
              0,
              "The reporting verb attributes the finding; the other options present stronger interpretations without an explicit source.",
            ),
            c(
              "Which revision most clearly supplies an evaluative criterion?",
              ["The scheme is successful.", "The scheme is successful in reducing waiting times.", "The scheme is successful and successful."],
              1,
              "The prepositional phrase defines the dimension on which success is being claimed.",
            ),
            c(
              "Which concession best preserves a qualified endorsement?",
              ["Although the trial is small, its design supports a cautious endorsement.", "The trial is small. Nevertheless, it is perfect.", "Although the trial is small, therefore it has no value."],
              0,
              "The subordinate concession leads to a proportionate endorsement in the main clause.",
            ),
            c(
              "Choose the conclusion whose modal force matches limited evidence.",
              ["The evidence proves that the policy must be adopted everywhere.", "The evidence supports further trials but does not yet justify universal adoption.", "The evidence may perhaps possibly support something."],
              1,
              "The sentence distinguishes the supported next step from the unsupported broader conclusion.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Construct a defensible public position",
          instructions:
            "Complete each task and identify the grammatical resource that makes your stance accountable.",
          items: [
            p(
              "Write an evaluative sentence with an explicit criterion about a new cycle lane.",
              "Model answer: The cycle lane is effective in separating cyclists from traffic, but its value at junctions remains uncertain.",
              "The criterion is separation from traffic; the contrast limits the evaluation.",
            ),
            p(
              "Combine an attributed finding with your own interpretation using two clauses.",
              "Model answer: The council's model predicts a 12 per cent reduction in journey time. We interpret that as a reason to extend the pilot rather than approve the full scheme.",
              "The reporting clause identifies the source; we interpret marks the writer's inference.",
            ),
            p(
              "Write a four-sentence paragraph stating a position, acknowledging one objection, supplying evidence and ending with a bounded recommendation.",
              "Model answer: The proposed archive fee deserves support because it would fund conservation. Critics reasonably object that it may deter casual visitors. The pilot, however, found no measurable fall in attendance among local residents. The fee should therefore be extended for another year, with free entry retained for school groups.",
              "Use evaluation, attributed concession, evidence and a modal recommendation whose scope is clear.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why is an explicit criterion important in an evaluative sentence?",
          ["It defines the dimension on which the judgement is being made", "It guarantees that everyone will agree", "It removes the need to cite evidence"],
          0,
          "A criterion makes an evaluation interpretable and contestable rather than a bare statement of preference.",
        ),
        q(
          2,
          "Which clause most clearly distinguishes report from inference?",
          ["The decline proves everything.", "The authors report a decline; we infer that demand is changing.", "The decline is self-evidently important."],
          1,
          "Report attributes the observation, while we infer explicitly marks the writer's interpretive move.",
        ),
        q(
          3,
          "What does a concessive structure contribute to an argument?",
          ["It acknowledges a countervailing consideration while preserving a qualified position", "It automatically disproves the main claim", "It eliminates the need for evidence"],
          0,
          "Concession manages disagreement by placing the objection inside the argument rather than ignoring it or letting it dominate.",
        ),
        q(
          4,
          "Which conclusion best matches evidence that supports a pilot but not universal implementation?",
          ["The evidence demands immediate universal implementation.", "The evidence proves the pilot is irrelevant.", "The evidence supports extending the pilot, not yet adopting the policy everywhere."],
          2,
          "The conclusion preserves the distinction between the supported action and the broader unsupported claim.",
        ),
      ],
    },
  ],
};
