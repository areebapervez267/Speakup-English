import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1WritingUnit3: LessonUnit = {
  title: "Professional documents",
  description:
    "Produce decision-ready reports, proposals, correspondence and executive summaries with a clear purpose, evidence trail and professional register.",
  lessons: [
    {
      slug: "analytical-reports",
      title: "Analytical reports",
      summary:
        "Structure a report around a decision problem, distinguish findings from interpretation and connect recommendations to stated evidence.",
      objective:
        "Design an analytical report outline and write a findings–implication–recommendation chain with transparent scope and limitations.",
      minutes: 36,
      blocks: [
        {
          type: "text",
          title: "A report supports a decision, not a narrative tour",
          paragraphs: [
            "An analytical report usually answers a question for someone who must act: what is happening, why does it matter and what should be done? Its sections therefore follow the reader's decision path. Terms of reference establish the commission and scope; method explains how evidence was gathered; findings state what was observed; analysis interprets causes and significance; recommendations propose a response.",
            "Keep the layers separate. A fall in error rates is a finding. A claim that new scanning equipment caused the fall is analysis. A proposal to expand scanning is a recommendation. Blending them makes the document sound decisive while concealing uncertainty about cause.",
          ],
        },
        {
          type: "table",
          title: "A decision-ready report structure",
          columns: ["Section", "Reader's question", "Essential content"],
          rows: [
            ["Terms of reference", "Why was this report commissioned?", "Commissioner, question, scope, date and constraints."],
            ["Method", "How do you know?", "Data sources, sample, period, definitions and comparison."],
            ["Findings", "What happened?", "Quantified observations separated by theme."],
            ["Analysis", "Why does it matter?", "Causes, competing explanations, risks and implications."],
            ["Recommendations", "What should change?", "Specific actions linked to findings, with owners and timing."],
            ["Limitations", "What remains uncertain?", "Missing data, bias, exclusions and confidence."],
          ],
          caption: "Use headings that help scanning; the table of contents should mirror the decision path.",
        },
        {
          type: "passage",
          title: "Model report extract: fictional warehouse review",
          paragraphs: [
            "Finding: Picking errors fell from 4.8 to 3.1 per 1,000 order lines during the eight-week scanner trial, a reduction of 35 per cent. The fall occurred in all three product categories, but was largest for bulky items. Analysis: The pattern is consistent with improved item identification, since label scanning was most relevant where packaging sizes were similar. It does not establish that scanners were the only cause: staffing increased by 6 per cent during the same period, and the trial excluded overnight shifts. Recommendation: Extend scanning to daytime bulky-item picking for a further twelve weeks, retain a non-scanned comparison area and report error rates by shift. This controlled extension would test the likely mechanism while addressing the current sample limitation.",
          ],
          glossary: [
            { term: "order line", meaning: "One product entry within a customer's order." },
            { term: "comparison area", meaning: "A group or location observed without the intervention for contrast." },
          ],
        },
        {
          type: "rules",
          title: "Make recommendations auditable",
          items: [
            "Begin each recommendation with an action verb: retain, revise, pilot, commission, publish.",
            "Name the responsible role and a realistic deadline when these fall within the report's scope.",
            "Link the action to a numbered finding or analysis point so that the rationale can be checked.",
            "State the resource implication and the risk of not acting when relevant.",
            "Do not hide a recommendation inside a passive description of the problem.",
            "Separate immediate safeguards from longer-term strategic options when their time horizons differ.",
          ],
        },
        {
          type: "exercise",
          title: "Separate the layers",
          instructions: "Choose the statement that performs the stated report function and respects the evidence.",
          items: [
            c(
              "The dataset shows that 28 per cent of respondents missed the deadline. Which statement is a finding rather than analysis?",
              ["Deadlines are too strict.", "Twenty-eight per cent of surveyed respondents missed the deadline.", "The organisation should extend deadlines."],
              1,
              "The middle sentence reports an observation; the others interpret or recommend.",
            ),
            c(
              "Which recommendation is most actionable?",
              ["Communication should be improved.", "The training manager should pilot two 45-minute induction sessions by 30 June and compare completion rates with the previous cohort.", "More money should be spent on staff."],
              1,
              "The middle recommendation names an action, owner, timing and a way to evaluate the result.",
            ),
            c(
              "A report's sample includes only customers who completed onboarding. Which limitation should be stated?",
              ["The sample may overrepresent successful or persistent users", "The sample proves that all customers are satisfied", "No limitation is needed because completion is relevant"],
              0,
              "Excluding incomplete cases can bias experience measures and limit generalisation.",
            ),
            c(
              "What is the clearest way to link a recommendation to its evidence?",
              ["Mention the source in a general appendix only", "Place the recommendation beside the relevant finding and refer to its number", "Repeat every data point in the conclusion"],
              1,
              "A local reference allows decision-makers to inspect the reasoning without searching the whole report.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a report spine",
          instructions: "Plan a fictional report on delayed refunds in a subscription service.",
          items: [
            p(
              "Write terms of reference containing the commissioner, question, period and two exclusions.",
              "Model answer: Commissioned by the operations director to determine why refunds at Northstar Subscription exceeded the seven-working-day target during January–March. The review excludes goodwill payments and cases paused by the bank; it covers completed customer contacts only.",
              "Specify both what the report investigates and what it deliberately leaves out.",
            ),
            p(
              "Write one finding and one competing explanation using these notes: median processing time rose from four to eight days; payment-system outages increased; one new approval rule was introduced.",
              "Model answer: Finding: Median processing time rose from four to eight working days. Analysis: Payment-system outages and a new approval rule are both plausible contributors; their relative effects cannot be separated from the aggregate data.",
              "Report the observation first, then distinguish alternatives before selecting a cause.",
            ),
            p(
              "Write a recommendation with an owner, deadline, evaluation measure and link to the limitation.",
              "Model answer: R1: Because the aggregate data cannot separate system delay from approval delay, the operations analyst should produce separate time logs for both stages by 30 April and review them weekly against the seven-day target.",
              "Recommend more precise evidence when the current analysis cannot identify a cause.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is the primary purpose of the method section?", ["To repeat the recommendation", "To explain how the evidence was produced and assessed", "To present every finding in detail"], 1, "Method allows readers to judge reliability and the limits of inference."),
        q(2, "Which sentence is analysis rather than a finding?", ["Returns rose by 9 per cent", "The rise may reflect clearer instructions", "The sample included 220 returns"], 1, "The causal interpretation is analysis; the other sentences report observed quantities."),
        q(3, "What makes a recommendation auditable?", ["It is phrased as broadly as possible", "It includes an action, owner and link to evidence", "It appears only in the introduction"], 1, "Specific actions and traceable rationales let a reader assess feasibility and justification."),
        q(4, "Why report limitations explicitly?", ["To discourage any action", "To show that the writer is uncertain about everything", "To prevent findings from being applied beyond their support"], 2, "Limits protect decision-makers from overgeneralising or treating provisional evidence as conclusive."),
      ],
    },
    {
      slug: "proposals-and-recommendations",
      title: "Proposals and recommendations",
      summary:
        "Make a persuasive case for change by defining outcomes, comparing options against explicit criteria and presenting implementation risks honestly.",
      objective:
        "Write a proposal recommendation that connects a defined problem to objectives, option criteria, costs, safeguards and success measures.",
      minutes: 36,
      blocks: [
        {
          type: "text",
          title: "A proposal is an argument for action",
          paragraphs: [
            "Unlike a retrospective report, a proposal asks a reader to authorise, purchase or adopt something. It must therefore move from problem to desired outcome, compare feasible routes and justify the preferred option. Enthusiasm is not enough: a strong proposal makes its assumptions visible and explains why the recommended route is preferable under the stated criteria.",
            "Recommendations should be conditional where necessary. ‘Approve a six-month pilot subject to a privacy review’ is often more persuasive than ‘Approve immediately’ because it gives the decision-maker a manageable risk boundary and a clear basis for evaluation.",
          ],
        },
        {
          type: "table",
          title: "Compare options against criteria",
          columns: ["Criterion", "Weight", "A: Extend current system", "B: Pilot modular platform"],
          rows: [
            ["Time to benefit", "30%", "Three months", "Five months"],
            ["Total first-year cost", "25%", "$180,000", "$140,000"],
            ["Fit with existing workflow", "20%", "High", "Moderate"],
            ["Data portability", "15%", "Low", "High"],
            ["Reversibility", "10%", "Low", "High"],
          ],
          caption: "Fictional figures. Publish the criteria before declaring the winner so that the comparison can be challenged.",
        },
        {
          type: "passage",
          title: "Model recommendation: fictional staff scheduling pilot",
          paragraphs: [
            "Recommendation: Approve a six-month pilot of modular scheduling in two customer-support teams, capped at $48,000 and subject to an information-governance review. The pilot addresses the stated objective—reducing last-minute shift changes without increasing unpaid overtime—while preserving an exit point. Option A, upgrading the current system, would deliver sooner but would retain low data portability. Option B offers greater flexibility at a lower first-year cost, although its five-month implementation period delays benefits. Success should be measured by last-minute changes per 100 shifts, overtime hours and staff-reported schedule predictability, compared with the previous six months. If overtime rises by more than 5 per cent or data portability cannot be demonstrated, expansion should not proceed. Privacy safeguards and consultation with staff representatives are conditions of launch, not later enhancements.",
          ],
        },
        {
          type: "rules",
          title: "A persuasive proposal has a testable chain",
          items: [
            "Problem: describe the current cost, risk or unmet need with evidence, not adjectives.",
            "Objectives: define what success would look like and by when.",
            "Options: include the status quo where feasible and explain exclusions.",
            "Criteria: state how value will be judged, including cost, risk and time.",
            "Safeguards: specify dependencies, mitigation and stop conditions.",
            "Measures: define baselines and data sources before implementation so evaluation is possible.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the stronger proposal move",
          instructions: "Select the sentence or decision that best supports a credible recommendation.",
          items: [
            c(
              "Which objective is most measurable?",
              ["Improve service significantly", "Reduce average response time from 36 to 24 hours within four months without increasing reopened cases", "Make customers happier"],
              1,
              "The second objective names a baseline, target, period and balancing measure.",
            ),
            c(
              "Why include the status quo as an option?",
              ["To make the proposal look fair", "To show what happens if no change is authorised", "To avoid comparing costs"],
              1,
              "The status quo reveals the cost of inaction and provides a baseline against which alternatives can be judged.",
            ),
            c(
              "Which is the strongest treatment of risk?",
              ["There are no risks.", "Risks exist but can probably be managed.", "If migration exceeds the $60,000 cap, the project pauses for steering-group review before further spend."],
              2,
              "A trigger and decision owner convert a vague assurance into an actionable safeguard.",
            ),
            c(
              "When a lower-cost option has a longer payback period, what should the proposal do?",
              ["Choose it automatically", "Ignore the time value of money", "Show the trade-off against strategic urgency and other criteria"],
              2,
              "A decision-ready proposal explains the trade-off rather than reducing the choice to one number.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a conditional recommendation",
          instructions: "Prepare a recommendation to replace an organisation's paper expenses process with a mobile workflow.",
          items: [
            p(
              "State the problem and one measurable objective using this fictional note: processing takes 11 working days and 14 per cent of claims require correction.",
              "Model answer: Paper expense claims take a median of 11 working days, and 14 per cent require correction for missing evidence. The objective is to reduce median processing to six days and correction rates below 5 per cent within three months of rollout.",
              "Use the baseline to make the desired change concrete.",
            ),
            p(
              "Compare the status quo with a mobile workflow using time, cost and accessibility.",
              "Model answer: Retaining paper avoids implementation cost but preserves manual checks and delay. A mobile workflow requires an estimated $30,000 setup and staff training, yet it can validate fields on submission; it must retain an assisted route for staff without compatible devices.",
              "Include distributional effects, not only financial and timing criteria.",
            ),
            p(
              "Write a conditional recommendation with a safeguard and one success measure.",
              "Model answer: Approve a three-month mobile-workflow pilot in two departments if an assisted submission route is available and the security review is completed before launch; expansion should depend on reducing median processing to six days without increasing rejected claims.",
              "State the conditions for approval and the evidence required to expand.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What distinguishes a proposal from a report?", ["It may contain tables", "It argues for a future action or decision", "It must always be longer"], 1, "A proposal seeks authorisation or adoption; a report primarily informs analysis of a question."),
        q(2, "Why publish option criteria in advance?", ["To prevent any comparison", "To make the evaluation transparent and open to challenge", "To increase the number of options"], 1, "Stated criteria reveal how the recommendation was reached and prevent arbitrary weighting."),
        q(3, "What is a stop condition?", ["A date when the proposal is written", "A threshold that triggers review or withdrawal", "A promise that risks will disappear"], 1, "A stop condition limits exposure and specifies when continuation is no longer justified."),
        q(4, "Which recommendation is most decision-ready?", ["Modernise the process soon", "Consider some improvements", "Pilot the workflow for 90 days with a $30,000 cap and compare processing time against the 11-day baseline"], 2, "The third option specifies action, duration, budget and evaluation."),
      ],
    },
    {
      slug: "formal-correspondence",
      title: "Formal correspondence",
      summary:
        "Handle requests, complaints and sensitive negotiations in a professional voice that is direct, courteous and precise about outcomes.",
      objective:
        "Write a formal email or letter with a specific subject, clear purpose, well-organised details and a proportionate request or response.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Professional courtesy is strategic, not ornamental",
          paragraphs: [
            "Formal correspondence succeeds when the reader can identify the issue and the requested action quickly. Polite language should not obscure the point. ‘I am writing to request a revised delivery date’ is more useful than a page of courteous preamble; ‘Please confirm by Thursday whether the revised date is feasible’ creates a clear decision point.",
            "Match the strength of language to the situation. A routine request can use Could you… or Please send…; a failed commitment may justify We are concerned that…; a serious breach may require We must request immediate clarification. Avoid emotional intensifiers, sarcasm and unexplained threats, all of which reduce the writer's authority.",
          ],
        },
        {
          type: "table",
          title: "Formal moves and precise language",
          columns: ["Purpose", "Useful formulation", "Avoid"],
          rows: [
            ["Identify context", "With reference to our agreement of 12 May…", "You know what this is about."],
            ["State a problem", "The second shipment arrived without the agreed temperature record.", "Everything was a complete disaster."],
            ["Explain impact", "This prevents us from releasing the batch for distribution.", "This is very inconvenient."],
            ["Request action", "Please provide the record and confirm the corrective action by 17 June.", "Sort this out ASAP."],
            ["Acknowledge delay", "Thank you for your response of 8 June; I apologise for the delayed reply.", "Sorry we forgot."],
            ["Reserve position", "We reserve our contractual rights pending clarification.", "We will destroy your company."],
            ["Close", "I look forward to your confirmation. / Yours sincerely,", "Cheers."],
          ],
          caption: "Use Yours sincerely when the recipient is named; Yours faithfully when the addressee is not known.",
        },
        {
          type: "passage",
          title: "Model formal email: delayed service credits",
          paragraphs: [
            "Subject: Request for reconciliation of service credits — June invoice INV-204",
            "Dear Ms Alvarez,",
            "Thank you for sending the June invoice on 8 July. We are writing to request a reconciliation of the service credits recorded under clause 7.3 of our agreement. The invoice shows a full monthly charge, whereas our service log records two interruptions totalling 4 hours 20 minutes.",
            "As the interruptions prevented access to the reporting platform during business hours, the credits are material to the amount payable. Please send a revised invoice, or an explanation of the calculation if you consider the credits inapplicable, by 16 July. We have attached the relevant service-log extract and would welcome a short call if that would help resolve the discrepancy.",
            "We value the working relationship and expect this to be a routine correction. In the meantime, we will withhold the disputed amount while arranging payment of the undisputed balance.",
            "Yours sincerely,",
            "Daniel Okafor\nOperations Manager, Meridian Analytics",
          ],
        },
        {
          type: "rules",
          title: "A correspondence checklist",
          items: [
            "Use a subject line that identifies the document, period or decision, not merely ‘Request’ or ‘Problem’.",
            "Open with a specific reference or acknowledgement; avoid generic gratitude that sounds copied.",
            "Put the requested action in its own sentence and give a reasonable deadline.",
            "Number multiple attachments, questions or disputed items so the recipient can answer each one.",
            "Distinguish firmness from aggression: state consequences and contractual position without personal criticism.",
            "Check names, dates, invoice numbers, attachments, titles and the name following the closing.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the professional formulation",
          instructions: "Select the version that is clear, appropriately firm and suitable for the recipient.",
          items: [
            c(
              "Which subject line is most useful for a complaint about a missing invoice?",
              ["URGENT!!!", "Missing invoice for April consulting services", "Hello"],
              1,
              "The second line identifies the exact issue and period, allowing the recipient to route and resolve it.",
            ),
            c(
              "Which sentence combines firmness with a clear action?",
              ["You must fix this immediately or else.", "Please send the missing calibration certificate by 18 September so that we can complete our safety review.", "Kindly be advised that this matter requires attention."],
              1,
              "The middle sentence specifies the document, deadline and reason without empty urgency or vague formality.",
            ),
            c(
              "You do not know the recipient's name. Which closing is conventional?",
              ["Yours faithfully,", "Yours sincerely,", "Best mates,"],
              0,
              "Yours faithfully is used when the letter is addressed to an unknown recipient, such as Dear Sir or Madam.",
            ),
            c(
              "Which response best preserves a relationship while declining a request?",
              ["No, that is impossible.", "We are unable to extend the deadline because the board meets on 30 June; however, we can accept a shorter interim report by 20 June.", "We will think about it sometime."],
              1,
              "The second response gives a clear reason and an alternative that could meet part of the need.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a complete formal message",
          instructions: "Write to a supplier whose training session was cancelled with less than 24 hours' notice.",
          items: [
            p(
              "Write a subject line, named greeting and opening that identifies the cancellation precisely.",
              "Model answer: Subject: Cancelled 14 October training session — request for revised arrangements\nDear Mr Patel,\nI am writing about the data-security training session booked for 14 October, which your team cancelled at 5 p.m. on 13 October.",
              "Include the service, date and reference point for the notice period.",
            ),
            p(
              "Explain the operational impact and make one specific request with a deadline.",
              "Model answer: Twelve staff had already adjusted their schedules, and the cancellation leaves new starters without the required briefing. Please confirm by 16 October whether the session can be delivered on 22 or 23 October, and whether the original fee will be retained.",
              "Use factual consequences and two answerable questions rather than a general complaint.",
            ),
            p(
              "Close the email with a relationship-aware but firm sentence and the correct sign-off.",
              "Model answer: We hope to retain the planned training date without further disruption; if neither option is available, please propose an alternative by the same deadline.\nYours sincerely,\nAmira Chen\nLearning and Development Manager",
              "Use Yours sincerely because Mr Patel is named.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What makes a formal subject line effective?", ["It is written in capitals", "It identifies the issue and relevant reference", "It uses a polite greeting"], 1, "Specific subjects help recipients understand and route the message quickly."),
        q(2, "Which request is clearest?", ["Please deal with this soon", "Please send the signed agreement by 12 September", "Your attention is drawn to the above"], 1, "The second request names the document and deadline."),
        q(3, "When is Yours sincerely appropriate?", ["When the recipient is named", "When writing to any unknown person", "Only in internal messages"], 0, "The named-recipient convention pairs Dear Mr/Ms/Dr Surname with Yours sincerely."),
        q(4, "Why avoid ASAP in sensitive correspondence?", ["It is grammatically incorrect", "It can create urgency without a usable deadline or clear action", "Formal writing never discusses time"], 1, "A specific date allows the recipient to plan and creates an accountable timescale."),
      ],
    },
    {
      slug: "executive-summaries",
      title: "Executive summaries",
      summary:
        "Compress a longer document into a standalone decision brief that preserves its logic, uncertainty, risks and required action.",
      objective:
        "Write an executive summary that foregrounds the decision, summarises proportionate evidence and states conditions without copying the report's structure.",
      minutes: 35,
      blocks: [
        {
          type: "text",
          title: "The summary is a document within the document",
          paragraphs: [
            "Some senior readers will read only the executive summary. It must therefore stand alone: what was the question, what did the analysis find, what is uncertain and what decision is required? A summary is not a miniature table of contents. It reorganises the source around the reader's decision rather than following every section in sequence.",
            "Compression is selective, not vague. Keep the numbers that change the decision, the limitation that changes confidence and the condition that changes risk. Remove background already familiar to the audience, repeated examples and methodological detail unless the method itself is contested.",
          ],
        },
        {
          type: "table",
          title: "What to keep and what to cut",
          columns: ["Element", "Keep when…", "Cut or compress when…"],
          rows: [
            ["Purpose", "It defines the decision or scope.", "It repeats a generic organisational mission."],
            ["Headline finding", "It changes the recommended action.", "It is one of many supporting observations."],
            ["Evidence", "Its size, comparison or quality matters.", "It duplicates another statistic with the same implication."],
            ["Risk", "It could reverse or delay the decision.", "It has already been fully mitigated and has low residual impact."],
            ["Recommendation", "It identifies action, owner or timing.", "It merely says that stakeholders should be engaged."],
            ["Limitation", "It bounds confidence or generalisation.", "It concerns minor missing detail with little inferential effect."],
          ],
          caption: "A summary should preserve the reasoning that supports the decision, not every detail that produced it.",
        },
        {
          type: "passage",
          title: "Model executive summary: fictional pilot evaluation",
          paragraphs: [
            "Decision required: Approve a twelve-month expansion of the neighbourhood advice service to two additional sites. Context: The six-month pilot aimed to reduce unresolved housing enquiries while maintaining advice quality. Findings: Median resolution time fell from 18 to 12 working days, and 61 per cent of sampled cases received a documented follow-up. The target of 55 per cent was exceeded. These figures indicate improved continuity, although the pilot had no comparison service and staffing rose by 10 per cent during the period. Recommendation: Expand in stages, beginning with one additional site after the information-governance lead confirms the case-recording protocol. Evaluation: Compare resolution time, follow-up and reopening rates with the original pilot baseline, and report after six months. Conditions: Expansion should pause if average adviser caseload exceeds the agreed threshold or if reopened cases rise for two consecutive months.",
          ],
          glossary: [
            { term: "resolution time", meaning: "The time taken for an enquiry to receive a completed response." },
            { term: "caseload", meaning: "The number of active cases assigned to an adviser." },
          ],
        },
        {
          type: "rules",
          title: "Draft in decision order",
          items: [
            "Decision or purpose: tell the reader what the document asks them to do or understand.",
            "Headline findings: give the two or three results that carry the argument.",
            "Interpretation: state what those results mean and why they matter.",
            "Limits: name the uncertainty that affects the decision.",
            "Recommendation and conditions: specify action, timing, ownership and stop criteria where relevant.",
            "Write after the full document; then test whether the summary makes sense without opening it.",
          ],
        },
        {
          type: "exercise",
          title: "Compress without distorting",
          instructions: "Choose the summary statement that preserves the decision-relevant meaning of the source material.",
          items: [
            c(
              "The report finds a 15 per cent cost reduction in one department but no reliable data from two others. Which summary is accurate?",
              ["Costs fell across the organisation.", "One department recorded a 15 per cent cost reduction; evidence from two other departments was insufficient for comparison.", "The report discusses costs."],
              1,
              "The middle version retains the result, its scope and the evidence gap.",
            ),
            c(
              "Which sentence is the strongest opening for a decision summary?",
              ["This report contains background information.", "The committee is asked to approve a $90,000 pilot subject to a legal review.", "Many issues were considered during the review."],
              1,
              "The second sentence gives the action, amount and condition immediately.",
            ),
            c(
              "Which detail should usually remain in an executive summary?",
              ["A limitation that could reverse the recommendation", "Every interview quotation", "A full chronological history of the project"],
              0,
              "Decision-changing uncertainty belongs in the summary even when other detail is removed.",
            ),
            c(
              "What is the best final test of an executive summary?",
              ["Whether it is exactly 10 per cent of the original", "Whether it contains the same section headings", "Whether a reader can understand the decision, rationale, risk and action without opening the report"],
              2,
              "Standalone usefulness matters more than a fixed length or mirrored structure.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a decision brief",
          instructions: "Compress a fictional 20-page evaluation of a returns-policy change into three essential moves.",
          items: [
            p(
              "Write the decision sentence. Notes: the retailer may extend free returns from 30 to 60 days; projected annual cost is $210,000; legal review is required.",
              "Model answer: The retailer must decide whether to extend free returns from 30 to 60 days at a projected annual cost of $210,000, subject to legal review.",
              "Put the choice, material cost and condition in one sentence.",
            ),
            p(
              "Write the findings and limitation. Notes: the six-month pilot increased returns by 11 per cent; repeat purchases rose 4 per cent among pilot customers; no control group was used.",
              "Model answer: The six-month pilot was associated with an 11 per cent increase in returns and a 4 per cent rise in repeat purchases among pilot customers; because no control group was used, the purchase increase cannot be attributed to the policy alone.",
              "Retain both the positive and negative results and the causal limit.",
            ),
            p(
              "Write the recommendation and a measurable review condition.",
              "Model answer: Do not expand immediately; run a controlled six-month trial in comparable stores and review gross margin, repeat purchases and fraud flags against baseline before seeking approval for a national rollout.",
              "Use the evidence gap to justify a better test rather than either approval or rejection.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "Who is the typical primary reader of an executive summary?", ["A reader who needs the decision and rationale quickly", "Only the author", "A reader who has already memorised the report"], 0, "The summary serves decision-makers who may not read the full document."),
        q(2, "What should be foregrounded?", ["The longest background section", "The decision, main finding and recommended action", "A complete list of acknowledgements"], 1, "Decision-relevant information should appear before supporting detail."),
        q(3, "Why include a material limitation?", ["To make the summary longer", "Because it can affect confidence in the recommendation", "To avoid stating any conclusion"], 1, "A summary that hides decision-changing uncertainty is misleading."),
        q(4, "Which summary sentence is most faithful?", ["The pilot solved the problem.", "The pilot reduced delay in one site, with results elsewhere still untested.", "The pilot is discussed extensively in chapter four."], 1, "The second sentence preserves the observed scope and the remaining uncertainty."),
      ],
    },
  ],
};
