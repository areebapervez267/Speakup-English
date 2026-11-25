import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1WritingUnit1: LessonUnit = {
  title: "Argument and evidence",
  description:
    "Turn a research question into a defensible position, support it with well-chosen evidence and answer serious objections.",
  lessons: [
    {
      slug: "thesis-and-argument-mapping",
      title: "Thesis and argument mapping",
      summary:
        "Build a contestable thesis for a timed academic essay and map the reasons, evidence and limits that will make it persuasive.",
      objective:
        "Write a specific thesis and a five-part argument map that distinguishes a claim from a topic, an assumption and a conclusion.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "A thesis makes a promise the essay must keep",
          paragraphs: [
            "A topic names an area: remote work. A position takes a side: hybrid work can improve retention. A thesis adds the reasoning and boundary: hybrid work can improve retention in established technical teams when managers protect focused time, although its benefits depend on role and tenure. The last clause prevents a broad promise that the evidence cannot support.",
            "At C1, a thesis need not announce itself with ‘This essay will argue’. Its job is to orient an informed reader: what is your answer, why is it reasonable, and how far does it extend? Test each proposed thesis by asking whether a careful reader could disagree and whether the essay could prove it within the word limit.",
          ],
        },
        {
          type: "table",
          title: "From subject to defensible thesis",
          columns: ["Element", "Weak version", "Defensible version"],
          rows: [
            ["Topic", "University attendance", "University attendance among first-year students"],
            ["Question", "Is attendance useful?", "Does mandatory attendance improve learning in large first-year lectures?"],
            ["Position", "It is useful.", "Mandatory attendance alone is an unreliable measure of learning."],
            ["Reason", "Students learn more.", "It rewards presence without demonstrating engagement or comprehension."],
            ["Boundary", "All courses.", "In large lectures with low student–teacher contact."],
            ["Implication", "Ban it.", "Use attendance as one diagnostic signal, not as a proxy for learning."],
          ],
          caption: "The strong version becomes narrower and more arguable, not less ambitious.",
        },
        {
          type: "examples",
          title: "Thesis workshop",
          intro: "Each revision replaces a declaration with a reason and a limit.",
          items: [
            {
              text: "Topic: Public libraries matter. Thesis: Although libraries cannot replace schools or internet provision, their combined access to study space, local information and staff assistance makes them essential civic infrastructure.",
              note: "The concession anticipates an objection; the three coordinated nouns preview the argument.",
            },
            {
              text: "Topic: AI in hospitals. Thesis: AI triage tools should support, rather than replace, clinicians because their errors are context-dependent and their recommendations require accountable human judgement.",
              note: "The recommendation follows from two stated reasons instead of resting on enthusiasm or fear.",
            },
            {
              text: "Topic: A novel's ending. Thesis: The ending is optimistic not because the conflict is resolved, but because the narrator finally distinguishes dependence on approval from the capacity to act.",
              note: "The not X but Y structure makes the interpretation precise and contestable.",
            },
          ],
        },
        {
          type: "rules",
          title: "Map before drafting",
          items: [
            "Question: write the exact problem the essay will answer, including any key population, period or text.",
            "Position: state one answer in a sentence; avoid listing several unrelated points.",
            "Because: identify two or three reasons that connect the position to the evidence.",
            "Evidence: note the source, date and specific observation or passage supporting each reason.",
            "Yet: record the strongest objection and decide whether you will concede, qualify or rebut it.",
            "Therefore: state the limited implication; do not claim more than the argument has established.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the strongest thesis",
          instructions: "Select the thesis that is arguable, supported by a clear reason and appropriately bounded.",
          items: [
            c(
              "For an essay on a city's low-traffic zone, which thesis is strongest?",
              ["Traffic is bad.", "The low-traffic zone should be retained because deliveries became more reliable, even though disabled drivers need a workable exemption.", "I will discuss the low-traffic zone and say what I think."],
              1,
              "This thesis takes a position, gives a testable reason and acknowledges a material limitation.",
              "Look for a claim, a because and a qualified scope.",
            ),
            c(
              "Which sentence is an argument reason rather than a topic or evidence?",
              ["A library extension", "Borrowing rose by 18 per cent", "The extension improved access because evening opening removed a barrier for shift workers"],
              2,
              "The third sentence explains why a change mattered; the first is a topic and the second is a datum requiring interpretation.",
            ),
            c(
              "Which revision best fixes the thesis ‘Social media is harmful’?",
              ["Social media is very harmful.", "Social media can weaken adolescents' sleep when late-night use displaces rest, but its effects vary with content and moderation.", "Social media has advantages and disadvantages."],
              1,
              "The middle thesis specifies a mechanism, a group and a qualification, making the claim researchable and disputable.",
            ),
            c(
              "What is the best final test of an argument map?",
              ["Does every box contain at least ten words?", "Can a reader predict the essay from the position alone?", "Can each reason lead logically to the thesis and be paired with evidence that could challenge it?"],
              2,
              "A map is useful when its inferential links are visible and its evidence is capable of testing the reasons, not merely decorating them.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Map your own argument",
          instructions: "Use the same case for all three tasks so that your thesis, reasons and objection remain aligned.",
          items: [
            p(
              "Turn the topic ‘remote work and productivity’ into a bounded thesis with one reason and one limitation.",
              "Model answer: Remote work can raise productivity among experienced software developers by reducing commuting, although it may hinder new staff who need frequent informal feedback.",
              "Use can, name a group and acknowledge a counter-condition.",
            ),
            p(
              "Add two reasons to your thesis and note one kind of evidence for each.",
              "Model answer: Reasons: fewer interruptions during focused tasks; access to a wider labour pool. Evidence: task-completion records and vacancy time-to-fill data, compared with equivalent office periods.",
              "For each reason, name a source and the exact fact you would extract.",
            ),
            p(
              "Write a one-line map in this form: Because X and Y, therefore Z; however W, so the claim applies to ___.",
              "Model answer: Because hybrid schedules reduce commuting and protect focused time, they can improve retention in established technical teams; however new hires need more contact, so the claim applies to staff after their first six months.",
              "Make the causal links explicit and keep the boundary consistent with your thesis.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What distinguishes a thesis from a topic?", ["It names a contestable answer", "It contains more technical vocabulary", "It lists several sources"], 0, "A topic identifies a subject; a thesis states the position the essay will defend."),
        q(2, "Which thesis has the clearest boundary?", ["Technology affects education.", "Schools should use tablets.", "Tablet lending may improve homework completion in rural secondary schools where home internet access is limited."], 2, "The third thesis identifies a setting, a likely effect and the condition under which the claim applies."),
        q(3, "In an argument map, what belongs immediately after the thesis?", ["A bibliography", "Reasons that explain why the thesis is credible", "A decorative quotation"], 1, "Reasons establish the inferential bridge between evidence and the thesis."),
        q(4, "Why include an objection in the planning stage?", ["To prove that no evidence is reliable", "To make the essay longer", "To test whether the position needs qualification before drafting"], 2, "Anticipating objections exposes weak links and prevents an inflated or brittle claim."),
      ],
    },
    {
      slug: "integrating-evidence",
      title: "Integrating evidence",
      summary:
        "Move beyond dropped-in quotations by selecting authoritative material, introducing its provenance and analysing what it proves.",
      objective:
        "Integrate a quotation, a data point and a paraphrase using a claim–evidence–reasoning pattern and source-aware verbs.",
      minutes: 36,
      blocks: [
        {
          type: "text",
          title: "Evidence earns its place by answering a question",
          paragraphs: [
            "A source is not strong merely because it is recent or published by a university. Ask who produced it, what they could observe, how the evidence was gathered and whether their method fits your claim. A patient survey can reveal reported experience; it cannot by itself establish clinical effectiveness. A laboratory trial may test efficacy under controlled conditions; it may not predict routine practice.",
            "The sentence before evidence sets its role. The sentence after evidence interprets it. Without these frames, readers must guess whether you agree with the source, what the number measures or why the passage matters. This claim–evidence–reasoning sequence is especially important when several sources appear to conflict.",
          ],
        },
        {
          type: "table",
          title: "Match the source to the job",
          columns: ["Evidence", "Can support", "Cannot establish alone", "Useful reporting verb"],
          rows: [
            ["Randomised trial", "A causal effect under the trial conditions", "Effectiveness for every real-world group", "found; estimated; reported"],
            ["Longitudinal survey", "Patterns of change within the sampled population", "Why the change occurred", "observed; tracked; recorded"],
            ["Expert interview", "Professional reasoning and perceived priorities", "How common a practice is", "argued; suggested; described"],
            ["Literary passage", "A reading of language, structure and viewpoint", "The intentions of all readers", "foregrounds; juxtaposes; implies"],
            ["Financial statement", "Reported performance for a defined period", "The causes of performance without further evidence", "disclosed; showed; attributed"],
          ],
          caption: "Choose a verb that represents the source's method and degree of certainty accurately.",
        },
        {
          type: "examples",
          title: "Build an analytical paragraph",
          intro: "The examples use fictional material to demonstrate reporting moves, not factual findings.",
          items: [
            {
              text: "Claim: A shorter onboarding programme may suit experienced hires. Evidence: In a fictional pilot, 42 experienced recruits completed the four-day route, while the standard route took nine days. Reasoning: The 50 per cent reduction suggests that prior experience can make repeated induction unnecessary; however, the pilot excluded first-time managers, so the result should not be generalised to them.",
              note: "The writer interprets the comparison, identifies the relevant comparison group and limits the inference.",
            },
            {
              text: "Weak: ‘“Memory is not an archive” (Vale, 2024, p. 18). This is important.’ Strong: Vale's description of memory as ‘not an archive’ rejects a passive container model; the later image of ‘continual revision’ instead presents recollection as an active process of reconstruction.",
              note: "The revision explains how two phrases work together rather than allowing the quotation to stand alone.",
            },
            {
              text: "Weak: ‘A study shows a 12 per cent increase.’ Strong: The cohort study recorded a 12 per cent rise in self-reported sleep duration over six months; because the measure came from diaries rather than sensors, the figure may partly reflect changes in reporting behaviour.",
              note: "The writer names the measure, period and methodological limitation before drawing an implication.",
            },
          ],
        },
        {
          type: "rules",
          title: "The integration sequence",
          items: [
            "Lead with your claim, not the source: tell the reader what the evidence is doing.",
            "Introduce the source when provenance affects authority: name the author, institution or study design.",
            "Quote exactly and keep the extract short; use square brackets for a necessary change and an ellipsis only for an omission that does not distort meaning.",
            "Paraphrase when the idea matters more than the wording; change structure as well as vocabulary and still acknowledge the source.",
            "Follow with reasoning: explain the mechanism, comparison, interpretation or limitation.",
            "Synthesise when another source bears on the same point; do not place two quotations side by side and leave the relationship implicit.",
          ],
        },
        {
          type: "exercise",
          title: "Select the best integration",
          instructions: "Choose the version that represents the evidence accurately and analyses its significance.",
          items: [
            c(
              "A fictional survey reports that 60 of 200 respondents used the service twice. Which sentence integrates the result responsibly?",
              ["Everyone loves the service.", "Sixty respondents reported using the service twice, indicating repeat use among 30 per cent of this sample, though the survey did not establish why they returned.", "The service is successful, according to a study."],
              1,
              "The middle version gives the denominator, interprets the percentage as sample behaviour and avoids claiming representativeness or causation.",
            ),
            c(
              "Which reporting verb is most accurate for an observational study that found an association?",
              ["proved", "caused", "was associated with"],
              2,
              "Observational association does not by itself prove causation; was associated with preserves that distinction.",
            ),
            c(
              "Which sentence best follows a quotation about ‘flexible’ curricula?",
              ["This quote is very interesting.", "Here, ‘flexible’ refers to students choosing optional modules, not to changing assessment deadlines; the distinction limits the author's claim about autonomy.", "The author uses the word flexible."],
              1,
              "The strongest follow-up defines the term in context and explains how the definition qualifies the claim.",
            ),
            c(
              "Two studies disagree about an intervention. What should the writer do first?",
              ["Discard the older study automatically", "Average their results without checking methods", "Compare populations, outcome measures and study designs before explaining the disagreement"],
              2,
              "An apparent conflict may result from different samples or definitions; synthesis begins with methodological comparison.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Integrate three kinds of evidence",
          instructions: "Use the fictional notes supplied in each task. Invent citations only for classroom drafting and label them as fictional.",
          items: [
            p(
              "Write a claim–evidence–reasoning sentence using this fictional data: waiting times fell from 14 to 9 minutes after a booking change; the study lasted eight weeks.",
              "Model answer: The booking change may have reduced waiting times because the fictional eight-week study recorded a fall from 14 to 9 minutes; the short period, however, leaves longer-term effects uncertain.",
              "Interpret the change without claiming that the design proves causation.",
            ),
            p(
              "Introduce and analyse this fictional quotation: ‘Efficiency is not speed; it is the avoidance of repeated work.’ Attribute it to operations scholar Lena Ortiz.",
              "Model answer: Lena Ortiz's distinction that ‘efficiency is not speed; it is the avoidance of repeated work’ reframes performance around error prevention rather than velocity alone, suggesting that faster processes can still be inefficient if they require correction.",
              "Name the source and explain the conceptual consequence of the distinction.",
            ),
            p(
              "Paraphrase this fictional source sentence and add a limitation: The author compared 300 customers and found that those offered reminders were more likely to renew.",
              "Model answer: In a comparison of 300 customers, the fictional study found higher renewal among those offered reminders; because the allocation method was not reported, the difference may also reflect characteristics of the two groups.",
              "Retain the sample size and finding while changing the wording and structure.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is the main purpose of the sentence after a quotation?", ["To repeat the quotation", "To explain how it supports or complicates the claim", "To introduce a new unrelated topic"], 1, "Analysis turns source material into evidence by making its relevance explicit."),
        q(2, "Which phrase is safest after reporting an observational association?", ["This proves that X causes Y", "X caused Y", "X was associated with Y"], 2, "Association language matches the inferential limits of an observational design."),
        q(3, "What makes a paraphrase academically acceptable?", ["Changing only two adjectives", "Copying the structure without citation", "Restating the idea in new language while acknowledging the source"], 2, "A paraphrase requires genuine reformulation and attribution even when no quotation marks are used."),
        q(4, "When studies conflict, what is the most useful first response?", ["Choose the result you prefer", "Compare their methods, samples and measures", "Report neither study"], 1, "Methodological comparison can explain disagreement and determine which evidence fits the claim."),
      ],
    },
    {
      slug: "counter-argument-and-rebuttal",
      title: "Counter-argument and rebuttal",
      summary:
        "Strengthen an essay by representing opposing views fairly, locating the real disagreement and answering it with evidence or principle.",
      objective:
        "Write a concession and a rebuttal that distinguish factual disagreement from disagreement about values or priorities.",
      minutes: 35,
      blocks: [
        {
          type: "text",
          title: "The strongest objection is the one you would respect",
          paragraphs: [
            "A weak essay attacks a caricature: opponents supposedly ‘hate progress’ or ‘do not care about children’. A credible counter-argument states the opposing position in terms its defenders would accept. Steelmanning is not surrender; it shows that your conclusion survives a serious alternative.",
            "Then locate the disagreement. Do the parties use different facts, interpret the same facts differently, value different outcomes or disagree about who bears the costs? Your response must address that level. If an opponent accepts your evidence but rejects its weighting, another statistic alone will not settle the matter.",
          ],
        },
        {
          type: "table",
          title: "Four kinds of productive disagreement",
          columns: ["Type", "Question to diagnose it", "Response strategy", "Example"],
          rows: [
            ["Factual", "Do we disagree about what happened?", "Check source quality and comparability.", "Did completion rates rise?"],
            ["Causal", "Do we disagree about why it happened?", "Test the mechanism and alternatives.", "Did mentoring cause the rise?"],
            ["Definitional", "Are we using the term differently?", "Define the disputed concept.", "What counts as ‘successful’?"],
            ["Evaluative", "Do we rank outcomes differently?", "State the value and justify its priority.", "Should equity outweigh speed?"],
          ],
          caption: "Matching the response to the disagreement prevents a rebuttal from talking past its opponent.",
        },
        {
          type: "examples",
          title: "Concede, distinguish, answer",
          intro: "The case is a fictional proposal to extend a hospital's teleconsultation hours.",
          items: [
            {
              text: "Concession: Extending teleconsultation hours would certainly improve access for patients who live far from the hospital, and it would reduce some unnecessary journeys. Rebuttal: That access gain does not justify the proposed service model by itself: patients without reliable video access would be excluded. A telephone alternative and scheduled in-person escalation should therefore be conditions of implementation.",
              note: "The writer accepts the benefit, then challenges whether the model distributes that benefit fairly.",
            },
            {
              text: "Concession: Critics are right that a four-day timetable can compress learning if contact hours are simply removed. Rebuttal: The objection assumes that reduction is inevitable. The proposal protects contact time and removes duplicated administrative periods, so the relevant comparison is the redesigned timetable, not a shorter version of the existing one.",
              note: "The rebuttal corrects a hidden premise rather than denying the objection's concern about learning loss.",
            },
            {
              text: "Concession: A faster approval process could increase the risk of overlooking low-frequency harms. Rebuttal: Absolute delay is not the only risk: requiring identical scrutiny for every product also postpones benefits. Staged review with post-market monitoring offers a more defensible balance than either universal acceleration or universal delay.",
              note: "The response acknowledges trade-offs and proposes a third option instead of claiming one value always wins.",
            },
          ],
        },
        {
          type: "rules",
          title: "Build a rebuttal without weakening your voice",
          items: [
            "Signal the alternative honestly: ‘The strongest objection is…’, ‘Critics reasonably point out…’ or ‘This account appears to conflict with…’.",
            "State its best reason before responding; concession that misrepresents the opposition damages credibility.",
            "Separate acceptance from rejection: ‘Although X is true, it does not follow that Y.’",
            "Expose a hidden premise: ‘This argument assumes that…’.",
            "Narrow your claim when the objection succeeds: replace always with typically, or limit the affected group.",
            "Return to the thesis explicitly after a long objection so the main line of argument remains visible.",
          ],
        },
        {
          type: "exercise",
          title: "Diagnose and answer objections",
          instructions: "Choose the response that engages with the actual disagreement.",
          items: [
            c(
              "You argue that open-access publishing lowers barriers to reading. An opponent replies that author fees exclude underfunded researchers. What kind of disagreement is this?",
              ["Purely factual: whether papers are free to read", "Evaluative and distributive: whether lower reader fees justify unequal author costs", "Definitional: whether publishing is academic"],
              1,
              "Both parties may accept that readers pay less; the disagreement concerns acceptable costs and who bears them.",
            ),
            c(
              "Which sentence is the fairest counter-argument to a claim that homework improves attainment?",
              ["Homework advocates want children to suffer.", "Homework may improve attainment for older, self-regulating students, but repetitive tasks can impose time costs without adding feedback.", "Homework is bad because it exists after school."],
              1,
              "The middle version identifies a plausible benefit and a specific cost rather than attacking the people who hold the view.",
            ),
            c(
              "Which rebuttal best answers ‘A later opening time will inconvenience parents who leave early for work’?",
              ["Parents should change their jobs.", "Later opening is popular with students, so parents are wrong.", "The objection is valid; provision should include supervised early study for families who cannot adjust their schedules."],
              2,
              "The response accepts the practical constraint and proposes a mitigation instead of dismissing affected families.",
            ),
            c(
              "When should an essay narrow its original thesis?",
              ["Whenever a source disagrees", "Only when an objection reveals a genuine exception that the evidence cannot exclude", "Never; narrowing signals weakness"],
              1,
              "A justified qualification increases accuracy; merely encountering disagreement does not require retreat.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a fair counter-argument",
          instructions: "Develop a counter-argument to the thesis that museums should make a permanent collection available online.",
          items: [
            p(
              "State the objection in its strongest two-sentence form, including one benefit that the proposal might overlook.",
              "Model answer: Digitising a permanent collection can create false expectations of access if fragile or contested objects cannot be reproduced meaningfully. A careful opponent might also argue that online surrogates encourage superficial looking and divert funds from interpretation on site.",
              "Avoid motives and ridicule; focus on consequences and assumptions.",
            ),
            p(
              "Diagnose the disagreement as factual, causal, definitional or evaluative, then explain why.",
              "Model answer: The central disagreement is evaluative: both sides value access, but they rank broad remote reach against depth of engagement and the opportunity cost of curatorial time.",
              "Name the values or assumptions in conflict, not just the policy details.",
            ),
            p(
              "Write a concession followed by a qualified rebuttal that returns to your position.",
              "Model answer: Although full digitisation cannot reproduce material scale or guarantee sustained attention, those limitations do not justify withholding reliable catalogues and contextual essays. Museums should publish a curated digital collection with clear limitations, while retaining targeted funding for on-site interpretation.",
              "Accept the true part of the objection and show what still follows for your thesis.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What does steelmanning mean?", ["Attacking the weakest available claim", "Representing the opposing argument in its strongest reasonable form", "Using quotations instead of analysis"], 1, "A fair representation tests whether your position answers a serious alternative."),
        q(2, "A disagreement about whether equity should outweigh speed is primarily what?", ["Factual", "Definitional", "Evaluative"], 2, "The parties may agree on the facts but rank competing values differently."),
        q(3, "Which move is most effective when an objection exposes a real exception?", ["Ignore the exception", "Qualify the thesis and define its scope", "Repeat the thesis more loudly"], 1, "A warranted limitation makes the claim more precise and defensible."),
        q(4, "Why return to the thesis after a long counter-argument?", ["To repeat every preceding sentence", "To restore the main argument's direction for the reader", "To avoid citing the opponent"], 1, "A brief synthesis reminds the reader how the objection changed, or did not change, the position."),
      ],
    },
    {
      slug: "writing-with-precision-and-caution",
      title: "Writing with precision and caution",
      summary:
        "Calibrate claims, distinguish correlation from causation and express uncertainty without sounding evasive or overstating the evidence.",
      objective:
        "Revise categorical statements using accurate reporting verbs, proportionate modal language and explicit limits on the evidence.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Caution is a form of accuracy",
          paragraphs: [
            "Academic and professional credibility often depends on matching the strength of a verb to the strength of the evidence. Proves belongs to a much narrower category than suggests; demonstrates must be earned by the design and result, not by the writer's confidence. Precision is not timidity. A carefully bounded claim can be more forceful than an extravagant one because readers know exactly what would count against it.",
            "Uncertainty has sources: sampling error, measurement limits, confounding variables, contested interpretation and incomplete knowledge. Name the relevant source when possible. ‘May’ without an explanation can become a verbal habit; ‘may overestimate retention because respondents who left the company could not be contacted’ tells the reader what the uncertainty concerns.",
          ],
        },
        {
          type: "rules",
          title: "A scale of claim strength",
          items: [
            "Established within a specified domain: ‘The policy increased…’ only when the evidence supports that causal statement.",
            "Well supported but bounded: ‘The evidence indicates…’ or ‘The findings are consistent with…’.",
            "Plausible interpretation: ‘This suggests…’, ‘This may reflect…’ or ‘One possible explanation is…’.",
            "Exploratory: ‘The data raise the possibility…’ or ‘Further research is needed to determine…’.",
            "Normative: distinguish ‘the evidence supports’ from ‘the policy should’; a factual finding does not settle a value judgement by itself.",
          ],
        },
        {
          type: "table",
          title: "Revise the claim, not just the adjective",
          columns: ["Overstatement", "Why it fails", "Calibrated revision"],
          rows: [
            ["This proves that remote work is better.", "‘Better’ is undefined and the design may not support causation.", "The controlled comparison suggests higher task completion under remote conditions; it does not compare job satisfaction."],
            ["The survey clearly shows public support.", "The sample and question wording may limit the inference.", "The survey recorded support among respondents in two cities; national opinion cannot be inferred from this sample."],
            ["The novel obviously criticises consumerism.", "‘Obviously’ replaces interpretation with insistence.", "The recurring imagery of packaging and ownership supports a reading of the novel as a critique of consumerism."],
            ["There is no alternative.", "It suppresses plausible choices.", "Of the options assessed, this arrangement has the strongest cost–benefit profile under the stated assumptions."],
          ],
          caption: "A calibrated revision usually becomes more informative as it becomes less absolute.",
        },
        {
          type: "examples",
          title: "Precision in context",
          items: [
            {
              text: "Vague: ‘Many people were affected.’ Precise: ‘The authority identified 1,240 households within the evacuation zone; 86 requested temporary accommodation, but the figure does not include unregistered households.’",
              note: "The revision defines the population, quantifies the effect and identifies a coverage limit.",
            },
            {
              text: "Vague: ‘The two groups were similar.’ Precise: ‘The groups had comparable median ages and baseline test scores, but women made up 61 per cent of the intervention group and 44 per cent of the control group.’",
              note: "Specific comparison reveals a possible confound that the vague sentence hides.",
            },
            {
              text: "Vague: ‘The ending is sad.’ Precise: ‘The ending is elegiac rather than tragic: it mourns a lost future while leaving the narrator able to continue.’",
              note: "A distinction between close concepts states an interpretation instead of attaching a label.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Calibrate the language",
          instructions: "Choose the sentence whose wording best matches the evidence and scope.",
          items: [
            c(
              "A fictional before-and-after study found fewer errors after a training session, with no control group. Which claim is justified?",
              ["The training caused a 30 per cent reduction.", "The training is the only way to reduce errors.", "Errors fell by 30 per cent after training, although the design cannot exclude other changes over the same period."],
              2,
              "The before-and-after result is real, but without a comparison group the causal attribution remains uncertain.",
            ),
            c(
              "Which verb is most proportionate for one analyst's interpretation of an ambiguous poem?",
              ["proves", "suggests", "establishes conclusively"],
              1,
              "An interpretive reading invites engagement; suggests signals that other defensible readings may exist.",
            ),
            c(
              "Which sentence states a methodological limitation most clearly?",
              ["The study may be wrong.", "The survey sampled volunteers and therefore may overrepresent people with strong views about the service.", "There are some issues with the study."],
              1,
              "The second sentence identifies both the sampling issue and the likely direction of its effect.",
            ),
            c(
              "Which conclusion properly separates evidence from recommendation?",
              ["The option costs less, so it must be ethically superior.", "The option costs less, but choosing it also requires judging whether the reduction in support is acceptable.", "Costs are subjective, so no comparison is possible."],
              1,
              "The middle sentence reports the finding and acknowledges the separate value judgement required for a decision.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Make three claims exact",
          instructions: "Revise each sentence by adding the missing scope, mechanism or limitation rather than merely inserting ‘may’.",
          items: [
            p(
              "Revise: ‘The new curriculum improved engagement.’ Facts available: attendance rose in two pilot schools; engagement was measured only by attendance; no comparison schools were used.",
              "Model answer: Attendance rose in two pilot schools after the curriculum was introduced; because attendance was the only engagement measure and no comparison schools were included, broader engagement effects remain uncertain.",
              "Define the proxy, population and design limit.",
            ),
            p(
              "Revise: ‘Customers prefer self-service.’ Facts available: 58 per cent of 150 surveyed customers selected self-service when it was the default; call-centre usage fell.",
              "Model answer: In a survey of 150 customers, 58 per cent selected self-service under a default setting; the result is consistent with a convenience effect, although default design may itself have influenced the choice.",
              "Distinguish observed choice from a general preference and flag the default effect.",
            ),
            p(
              "Revise: ‘The author believes that the city is corrupt.’ Evidence: the passage repeatedly links municipal rebuilding with private contracts and ends by refusing the narrator's offer of promotion.",
              "Model answer: By repeatedly juxtaposing public rebuilding with private contracts, the passage implicates the city's institutions in corrupt exchange; the narrator's refusal of promotion can be read as an attempt to distance himself from that system.",
              "Anchor the interpretation in textual features and use can be read for the ending.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "Why is ‘proves’ often inappropriate in an interpretive essay?", ["Interpretations remain open to textual challenge", "Essays may not contain evidence", "Only quotations can prove anything"], 0, "Literary interpretation builds a defensible reading rather than closing off all alternatives."),
        q(2, "What does a before-and-after study fail to rule out by itself?", ["The dates of measurement", "Other changes occurring during the same period", "The number of participants"], 1, "Without a comparison group, external changes may explain part of the observed difference."),
        q(3, "Which statement is the most precise?", ["The results were significant.", "The sample was reasonably large.", "The fictional study found a 9 per cent difference among 240 participants, with a 95 per cent confidence interval of 3 to 15 per cent."], 2, "The third version specifies effect size, sample and uncertainty, allowing the reader to assess practical meaning."),
        q(4, "What is the best way to avoid evasive writing?", ["Use may in every paragraph", "Remove all limitations", "Name the specific source and consequence of uncertainty"], 2, "Targeted explanation is more informative than scattered hedging."),
      ],
    },
  ],
};
