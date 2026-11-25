import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2WritingUnit3: LessonUnit = {
  title: "Genre and audience",
  description:
    "Move between commentary, long-form professional argument and public intellectual prose while preserving a distinctive voice across audiences.",
  lessons: [
    {
      slug: "persuasive-essays-and-commentary",
      title: "Persuasive essays and commentary",
      summary:
        "Write public argument that establishes urgency, reframes a familiar debate and converts evidence and values into a proportionate call to action.",
      objective:
        "Compose a concise commentary with an exigency, contestable thesis, strategic concession and ending that specifies a meaningful next step.",
      minutes: 36,
      blocks: [
        {
          type: "text",
          title: "Public persuasion begins with a live tension",
          paragraphs: [
            "Commentary differs from a neutral briefing because it asks readers to see a situation differently and perhaps act. Its opening must establish exigency: why this question matters now, to whom and at what cost. A timely statistic can supply urgency, but a contradiction between public promise and lived experience is often more compelling than novelty alone.",
            "The thesis should be strong enough to organise the piece and precise enough to survive scrutiny. Public argument also needs a reader: it should anticipate the strongest reasonable objection, concede what is true and explain why the preferred response still follows. A call to action is most persuasive when it names an actor, decision and timeframe.",
          ],
        },
        {
          type: "table",
          title: "A commentary architecture",
          columns: ["Move", "Purpose", "Example"],
          rows: [
            ["Exigency", "Make the issue immediate and consequential.", "The council has promised affordability while making car ownership more expensive."],
            ["Reframing", "Challenge the question as usually posed.", "The issue is not drivers versus pedestrians; it is street space versus private storage."],
            ["Thesis", "State a clear public judgement.", "Minimum parking requirements should be removed."],
            ["Evidence", "Show a mechanism or concrete consequence.", "Fictional planning data link the requirements to higher housing costs."],
            ["Concession", "Represent the strongest objection fairly.", "Some disabled residents and traders depend on nearby access."],
            ["Resolution", "Specify a workable and proportionate action.", "Replace the requirement with access standards and targeted provision."],
          ],
          caption: "A short piece needs compression and selection, not the absence of argument.",
        },
        {
          type: "passage",
          title: "Model commentary: the cost of required parking",
          paragraphs: [
            "A city that promises affordable housing while requiring every new development to provide parking has made a choice, even if the choice appears in a technical appendix. The requirement converts a public street into a private storage entitlement, and the cost is embedded in rents and purchase prices. The familiar defence is that removing parking requirements will make homes less desirable. That concern deserves an answer, but it assumes that every resident values a space equally and can afford one equally. In a fictional consultation, households without cars reported more interest in smaller homes near services than in units with dedicated bays. The policy should therefore remove blanket minimums and replace them with accessible parking standards, loading provision and a limited number of reserved spaces where need is demonstrated. Councils need not choose between affordability and access. They need only stop treating one form of access as universal, and price the others invisibly.",
          ],
        },
        {
          type: "rules",
          title: "Give the commentary an edge without becoming closed",
          items: [
            "Begin with a contradiction, decision or consequence rather than a dictionary definition.",
            "Name who benefits, who pays and who has least choice; distribution sharpens a public argument.",
            "Use a memorable phrase only when it captures an actual analytical relationship.",
            "Answer the strongest objection in substance, not with a token ‘some may disagree’.",
            "End with a specific decision, design principle or question that preserves the reader's agency.",
            "Check that every evocative scene returns to evidence and does not substitute anecdote for prevalence.",
          ],
        },
        {
          type: "exercise",
          title: "Strengthen the public argument",
          instructions: "Choose the move that makes the commentary timely, fair and actionable.",
          items: [
            c(
              "Which opening creates the clearest exigency?",
              ["Parking has existed for many years.", "The council votes on parking reform next month while rents continue to rise; its technical requirements still make car storage a condition of new housing.", "This essay will discuss parking."],
              1,
              "The second opening connects an approaching decision to a live affordability consequence.",
            ),
            c(
              "Which sentence most effectively reframes the debate?",
              ["Cars are bad and cyclists are good.", "The question is not whether to support cars but whether every new household should subsidise private storage.", "People have different views about transport."],
              1,
              "The reframing exposes the distributive assumption inside a seemingly technical policy.",
            ),
            c(
              "Which concession is strongest?",
              ["Critics dislike the proposal.", "Nearby accessible parking is essential for some disabled residents and traders, so reform must preserve targeted provision even as blanket minimums are removed.", "There are no serious objections."],
              1,
              "The middle version identifies a legitimate need and incorporates it into the recommendation.",
            ),
            c(
              "Which ending is most actionable?",
              ["Something must be done.", "In conclusion, parking is important.", "The planning committee should remove blanket minimums in the next code revision and publish an access-impact assessment alongside the change."],
              2,
              "The final version names the actor, action, timeframe and evidence of responsibility.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a public intervention",
          instructions: "Draft a short commentary on whether a city should keep a monument to a contested historical figure.",
          items: [
            p(
              "Write an opening that presents a live tension without announcing a final verdict.",
              "Model answer: The council can leave the statue, remove it or reinterpret it, but it cannot leave the meaning of its silence unexamined. Each option makes a claim about whose memory the public square is designed to preserve.",
              "Establish the decision and its symbolic consequences rather than starting with a biography.",
            ),
            p(
              "Write a bounded thesis and a fair two-sentence concession.",
              "Model answer: The monument should remain only as part of a prominently interpreted record of the figure's contested legacy. Preserving an object can aid historical inquiry, and sudden removal can appear to erase a difficult past; however, interpretation must not reproduce the original glorification that the objection rightly challenges.",
              "Make the condition part of the position and concede a genuine historical value.",
            ),
            p(
              "Write a final paragraph of three sentences with one specific public process and one limit on what it can settle.",
              "Model answer: The council should convene a public history review that includes descendants of those affected by the figure's policies and commissions an account of the monument's original funding. Its recommendations should be published before the next budget decision. Such a process can improve legitimacy, but it cannot turn a contested historical judgement into a neutral fact.",
              "Specify participation and timing while resisting false closure.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is exigency in commentary?", ["The reason a public question is urgent and consequential now", "The number of sources cited", "The author's credentials"], 0, "Exigency establishes why the reader should attend to the argument at this moment."),
        q(2, "What does reframing do?", ["Repeats the conventional debate", "Changes the question or assumptions so a different response becomes visible", "Removes all evidence"], 1, "Reframing reveals how the usual formulation may constrain the available choices."),
        q(3, "Why include distribution in a public argument?", ["It reveals who benefits, pays or bears constraints", "It always increases word count", "It replaces the thesis"], 0, "Distribution makes abstract policy consequences concrete and ethically visible."),
        q(4, "What makes a call to action effective?", ["It names an actor, decision and timeframe", "It uses the strongest possible adjectives", "It appears only in the title"], 0, "Specific action gives the reader a usable route from agreement to response."),
      ],
    },
    {
      slug: "long-form-professional-writing",
      title: "Long-form professional writing",
      summary:
        "Sustain authority across a substantial document by designing a reader contract, a narrative spine and an evidence architecture that remains navigable.",
      objective:
        "Plan a long-form professional argument with layered summaries, purposeful section progression and explicit transitions between evidence, interpretation and decision.",
      minutes: 37,
      blocks: [
        {
          type: "text",
          title: "Length magnifies architectural failure",
          paragraphs: [
            "In a long document, small ambiguities compound. Readers forget which question a section answers, encounter the same limitation in three places or reach a recommendation that depends on evidence hidden in an appendix. Length therefore demands a stronger reader contract: what the document will establish, for whom and with what boundaries.",
            "A narrative spine gives the document momentum without turning analysis into story. It might move from symptom to mechanism, from present risk to future scenario or from competing explanations to a preferred intervention. Each section should change the reader's state of knowledge; otherwise it is accumulating pages rather than building an argument.",
          ],
        },
        {
          type: "table",
          title: "Design at three reading depths",
          columns: ["Depth", "Reader need", "Design response", "Content"],
          rows: [
            ["Executive", "Decision, rationale and risk in minutes.", "Decision box and one-page synthesis.", "Recommendation, headline evidence, conditions."],
            ["Managerial", "How the case is structured and where to intervene.", "Section-level findings and clear recommendations.", "Options, trade-offs, owners and measures."],
            ["Specialist", "Methods, assumptions and detailed evidence.", "Technical sections and auditable appendices.", "Definitions, data tables, sensitivity analysis."],
          ],
          caption: "Layering is not duplication: each depth performs a different task and points to the next.",
        },
        {
          type: "examples",
          title: "Section propositions and transitions",
          intro: "The plan is for a fictional long-form paper on retaining experienced nurses.",
          items: [
            {
              text: "Section proposition: ‘Retention cannot be explained by pay alone: scheduling instability appears to be a stronger predictor of exit among experienced staff.’ Transition: ‘If predictability matters more than headline salary, the conventional response of across-the-board pay rises becomes less well targeted.’",
              note: "The next section can then test the resource implication rather than repeating the retention evidence.",
            },
            {
              text: "Section proposition: ‘The cost of replacing a nurse exceeds the cost of the proposed pilot, but only if vacancy duration is measured honestly.’ Transition: ‘The financial case is therefore contingent on a metric the current workforce dashboard does not retain; the implementation section must create that baseline first.’",
              note: "The transition exposes a dependency and gives the next section a necessary job.",
            },
            {
              text: "Weak transition: ‘The next section discusses scheduling.’ Strong transition: ‘Scheduling is not simply another retention factor; it is the mechanism through which the proposed intervention would act.’",
              note: "A propositional transition tells the reader why the next section matters to the developing argument.",
            },
          ],
        },
        {
          type: "rules",
          title: "Long-form integrity checks",
          items: [
            "State the document's question, intended decision and exclusions in the opening pages.",
            "Write each heading as a proposition or decision question where house style permits.",
            "Give every major section one primary claim and no more than two secondary jobs.",
            "Link recommendations to evidence IDs, findings or numbered sections.",
            "Place technical detail at the depth where it belongs while summarising its consequence above.",
            "Use transitions to state dependencies, not merely chronological sequence.",
            "Reconcile terminology, baselines and numbers across executive, main and technical layers before release.",
          ],
        },
        {
          type: "exercise",
          title: "Diagnose long-form failure",
          instructions: "Choose the architectural intervention that best restores the document's argument and usability.",
          items: [
            c(
              "Senior readers request a shorter report, but specialists need the method. What is the best response?",
              ["Layer the document: a decision-led summary, a managerial argument and auditable technical sections", "Delete the method", "Send the same 90-page text with a shorter title"],
              0,
              "Layering serves different reading depths without sacrificing evidential detail.",
            ),
            c(
              "A recommendation refers to an appendix but gives no reason for its choice. What should be added?",
              ["A second recommendation with the same wording", "A longer appendix", "A local summary of the decisive evidence and a precise appendix reference"],
              2,
              "The reader needs to understand the rationale before deciding whether to inspect the detail.",
            ),
            c(
              "Which transition best creates a narrative spine?",
              ["There are other factors to discuss.", "Because the problem lies in scheduling rather than recruitment volume, the following section tests a targeted redesign.", "Section 3 is next."],
              1,
              "The middle transition explains how one finding determines the next question.",
            ),
            c(
              "What is the most serious risk of inconsistent baselines across sections?",
              ["Tables become shorter", "Readers may reach incompatible conclusions from the same evidence", "The prose sounds repetitive"],
              1,
              "A long document loses authority when its numbers and definitions cannot be reconciled.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Design a long-form spine",
          instructions: "Plan a 6,000-word fictional paper on whether a regional health system should centralise specialist diagnostics.",
          items: [
            p(
              "Write a reader contract with the decision, audience, scope and one exclusion.",
              "Model answer: This paper asks the regional board whether to centralise specialist diagnostics, weighing waiting time, travel burden, clinical quality and cost over five years. It addresses board and clinical leaders; emergency diagnostics are outside scope.",
              "Define the decision and boundaries before listing sections.",
            ),
            p(
              "Write five section propositions and one transition between the second and third.",
              "Model answer: 1. Current waiting times conceal unequal travel burdens. 2. Centralisation can improve quality but may reduce access. 3. Cost depends on transport support and service volume. 4. Phased hubs offer greater reversibility than a single centre. 5. A two-hub pilot best balances quality and access. Transition: If centralisation redistributes access rather than simply improving it, the financial comparison must include patients' travel costs.",
              "Let each proposition change the reader's understanding and constrain the next.",
            ),
            p(
              "Specify what appears in the executive layer, main argument and technical appendix, including one reconciliation check.",
              "Model answer: Executive layer: decision, two decisive trade-offs and conditions. Main argument: five propositions with evidence and options. Appendix: travel model, cost assumptions and sensitivity tests. Reconciliation check: every quoted waiting-time and cost figure must match the model version and date stated in the appendix.",
              "Layer by reader task and ensure numerical consistency.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is a reader contract in long-form writing?", ["An explicit statement of purpose, audience, scope and boundaries", "A legal agreement", "A promise to cite every source"], 0, "The contract helps readers understand what the document will and will not establish."),
        q(2, "Why layer a long professional document?", ["To avoid making recommendations", "To serve executive, managerial and specialist reading needs", "To repeat the same paragraph three times"], 1, "Different readers need different depth, not identical duplication."),
        q(3, "What makes a transition substantive?", ["It contains a quotation", "It explains how one finding determines the next question", "It names the next section number"], 1, "Substantive transitions make the argument's dependencies visible."),
        q(4, "What must remain consistent across a layered document?", ["Terminology, baselines, figures and recommendation logic", "Only the font", "Every example"], 0, "Consistency allows readers to trust that all layers describe the same analysis."),
      ],
    },
    {
      slug: "public-intellectual-writing",
      title: "Public intellectual writing",
      summary:
        "Carry demanding ideas into public debate through purposeful translation, narrative entry points and a voice that connects evidence, values and civic consequence.",
      objective:
        "Translate a specialist concept without distortion and build a public intellectual passage that moves from concrete scene to general question and qualified insight.",
      minutes: 36,
      blocks: [
        {
          type: "text",
          title: "Translation is an intellectual act",
          paragraphs: [
            "Public intellectual writing does not simplify until nothing remains. It identifies the concept's essential structure, finds an accessible entry point and preserves the complication that changes its meaning. A technical term may be necessary, but it should arrive with a function rather than a definition alone.",
            "The public intellectual voice joins three kinds of authority: evidential care, conceptual imagination and civic judgement. It can use narrative and reflection, but it must return to analysis. The aim is not to sound universally knowledgeable; it is to make a demanding question thinkable for readers outside the originating discipline.",
          ],
        },
        {
          type: "table",
          title: "Translate without distortion",
          columns: ["Specialist idea", "Public entry point", "Essential complication", "Possible phrasing"],
          rows: [
            ["Externalities", "A benefit received by someone who did not pay for it.", "The cost may be distant or unequally distributed.", "The price is low because part of it is paid elsewhere."],
            ["Selection effects", "A programme attracts people already likely to succeed.", "Selection can coexist with real benefit.", "The participants improved; the programme may not have caused all of it."],
            ["Path dependence", "Early choices narrow later options.", "Lock-in can be efficient as well as constraining.", "The present arrangement survives partly because alternatives have become costly."],
            ["Epistemic injustice", "A person's testimony is discounted because of identity prejudice.", "Not every disagreement is prejudice; evidence of pattern matters.", "The speaker is not rejected for what they say, but for who the listener assumes them to be."],
          ],
          caption: "A good translation preserves the mechanism and the limit, not merely a synonym.",
        },
        {
          type: "passage",
          title: "Model public intellectual passage: measurement",
          paragraphs: [
            "At the entrance to the fictional clinic, a screen reports the average wait. The number is reassuring because it appears to describe everyone's experience, yet it conceals the distribution that patients actually inhabit. An average of twenty minutes can include many brief consultations and a small group who wait for hours; the screen remains accurate while becoming socially misleading. This is the quiet power of measurement: it does not merely describe an institution, but decides which part of the institution becomes visible. The answer is not to abandon indicators. A measure is indispensable when it makes neglect contestable. The task is to publish the spread as well as the average, and to ask who is absent from the denominator. A public institution becomes more accountable not when it offers a single reassuring number, but when it makes disagreement about that number possible.",
          ],
        },
        {
          type: "rules",
          title: "Move from scene to civic insight",
          items: [
            "Open with a concrete scene, object or decision that embodies the abstract problem.",
            "Name the concept only when it helps the reader see a pattern beyond the example.",
            "Use one precise analogy and state where it stops working.",
            "Connect the evidence to a public value without pretending that the value follows from data alone.",
            "Acknowledge your disciplinary position and avoid speaking for people whose experience you cannot represent.",
            "End with a question or design principle that enables public judgement rather than delivering a verdict from above.",
          ],
        },
        {
          type: "exercise",
          title: "Translate with integrity",
          instructions: "Choose the public formulation that preserves the specialist idea and its limits.",
          items: [
            c(
              "Which best translates ‘survivorship bias’?",
              ["People who survive are always happier.", "We hear from the projects that remain and may therefore misjudge what happened to those that disappeared.", "Survival is a statistical error."],
              1,
              "The second version names the missing cases and the inferential consequence.",
            ),
            c(
              "Which sentence best joins evidence and public value?",
              ["The data prove that justice is efficiency.", "The evidence shows unequal waiting times; whether that inequality is acceptable is a civic judgement, not a statistical result.", "Values have no place in public analysis."],
              1,
              "The second sentence distinguishes empirical finding from normative judgement while connecting them.",
            ),
            c(
              "What makes a scene intellectually useful?",
              ["It is emotionally dramatic", "It embodies a general mechanism and leads back to evidence and analysis", "It replaces all data"],
              1,
              "Narrative should illuminate a structure, not serve as decoration or proof of prevalence.",
            ),
            c(
              "Which is the strongest public-intellectual closing?",
              ["Experts should decide everything.", "The issue is complicated and cannot be discussed.", "The number matters less than the public's ability to challenge how it was made."],
              2,
              "The final sentence offers a civic design principle without claiming that evidence is irrelevant.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write for a public readership",
          instructions: "Develop a short public intellectual passage on algorithmic ranking in job applications.",
          items: [
            p(
              "Open with a concrete scene or object that embodies the issue without inventing a representative personal story.",
              "Model answer: A rejected applicant sees only a line of text: ‘Your application did not meet the threshold for this stage.’ The phrase records an outcome while concealing the comparison that produced it.",
              "Use an observable detail, not an invented composite presented as fact.",
            ),
            p(
              "Translate the concept of proxy variables in two sentences and name one limit of the analogy.",
              "Model answer: A proxy is a measurable stand-in for a quality that cannot be observed directly. Previous experience may serve as a proxy for job readiness, but the analogy has a limit: unlike a thermometer reading, experience is shaped by access to opportunity and cannot be treated as a neutral substitute.",
              "Explain the mechanism and where the public analogy breaks down.",
            ),
            p(
              "Finish with a qualified civic insight and a question readers can use to interrogate the system.",
              "Model answer: Ranking can make selection more consistent, but consistency does not guarantee fairness. The public question is not only whether the tool predicts performance, but whether the qualities it rewards are the qualities the institution has chosen to value. Applicants should be able to ask which factors count and how disputed cases are reviewed.",
              "Separate technical performance from institutional values and make scrutiny actionable.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is the central challenge of translating a specialist concept?", ["Removing every technical term", "Replacing evidence with a story", "Preserving its mechanism and complication while making it accessible"], 2, "Good translation changes the entry point without distorting the idea."),
        q(2, "What distinguishes public intellectual writing from a technical abstract?", ["It avoids qualifications", "It connects specialist insight to civic questions and a broader readership", "It contains no evidence"], 1, "The genre bridges disciplinary analysis and public consequence."),
        q(3, "Why name the limit of an analogy?", ["To prevent the comparison from implying more than it supports", "To make the analogy longer", "To avoid stating the concept"], 0, "Analogical limits protect precision."),
        q(4, "What is a strong civic conclusion?", ["A decorative quotation", "A usable principle or question for public judgement", "A claim that experts alone should decide"], 1, "The conclusion should enable scrutiny rather than close discussion through authority."),
      ],
    },
    {
      slug: "adapting-voice-to-audience",
      title: "Adapting voice to audience",
      summary:
        "Recalibrate vocabulary, evidence, pacing and reader address for different publics while preserving the writer's core judgement and ethical commitments.",
      objective:
        "Adapt one argument for three audiences and explain which voice features changed, which stayed stable and why each version remains truthful.",
      minutes: 35,
      blocks: [
        {
          type: "text",
          title: "Audience adaptation is not personality switching",
          paragraphs: [
            "A writer's core commitments should survive a change of audience, but the route to them may change. A board needs the decision and risk; specialists need assumptions and method; affected residents need consequences, options and a clear account of what they can influence. The argument remains stable while context, vocabulary and pace shift.",
            "Adaptation also has ethical limits. Do not exaggerate certainty for a board, strip affected people of complexity for a public audience or use technical opacity to avoid accountability. The strongest voice remains recognisable because its judgements and standards persist even when its sentences become more concrete, compact or direct.",
          ],
        },
        {
          type: "table",
          title: "The same claim across audiences",
          columns: ["Audience", "Lead with", "Evidence level", "Voice choice", "Call"],
          rows: [
            ["Board", "Decision, risk and option value.", "Headline effect, cost and sensitivity.", "Compact, conditional, owner-led.", "Approve a bounded pilot."],
            ["Specialists", "Mechanism and assumptions.", "Methods, effect sizes and limitations.", "Precise, qualified, term-conscious.", "Test the unresolved parameter."],
            ["Affected residents", "Lived consequence and available choices.", "Concrete comparisons and distribution.", "Plain, direct, non-paternalistic.", "Comment on the access plan."],
          ],
          caption: "Change the entry point and explanation, not the facts or degree of certainty.",
        },
        {
          type: "examples",
          title: "One argument, three registers",
          items: [
            {
              text: "Board: ‘Approve a six-month pilot with a $120,000 cap; the option preserves reversibility while testing whether the intervention reduces rework by 15 per cent.’ Specialist: ‘The pilot should test a 15 per cent reduction in rework using matched case categories and pre-registered outcome definitions.’ Residents: ‘The council will test the new service for six months and compare how often cases need to be handled again; the trial can stop if access worsens.’",
              note: "Each version names the same test and safeguard but supplies the context its readers need.",
            },
            {
              text: "Artificial adaptation: ‘We leverage synergistic stakeholder engagement to operationalise co-creation.’ Clearer: ‘Staff and residents will design the service together, then test it with a small group before wider use.’",
              note: "Audience fit does not require corporate abstraction; plain language can be more authoritative.",
            },
          ],
        },
        {
          type: "rules",
          title: "Adapt in a controlled sequence",
          items: [
            "Write an audience-independent core: claim, decisive evidence, material limit and intended action.",
            "Choose the reader's first question and make its answer the opening.",
            "Define only the terms needed for the decision or challenge available to that audience.",
            "Adjust sentence length and abstraction without changing the strength of a finding.",
            "Preserve the core value judgement across versions; if it changes, explain the new ethical premise.",
            "Check each version for distortions: omission, exaggeration, euphemism and false reassurance.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the ethical adaptation",
          instructions: "Select the version that meets the audience's needs without changing the argument's meaning or integrity.",
          items: [
            c(
              "Which opening best serves a board considering a service closure?",
              ["The history of the centre is long and complex.", "The centre runs at a deficit, but closure would leave 340 users without an alternative within five kilometres; a targeted subsidy is the lower-risk option.", "Everyone loves the centre."],
              1,
              "The second version puts the decision, distributional risk and preferred option first.",
            ),
            c(
              "Which adaptation is most appropriate for affected residents?",
              ["The variance in access is materially non-trivial.", "Some residents may be somewhat inconvenienced.", "The proposed change would add a 25-minute journey for 180 residents who use the service."],
              2,
              "Concrete numbers and consequences enable informed participation without jargon or euphemism.",
            ),
            c(
              "What should remain stable across audience versions?",
              ["The core claim, evidential strength and ethical commitment", "The exact sentence length", "The number of headings"],
              0,
              "Presentation may change, but truthful meaning and judgement should remain consistent.",
            ),
            c(
              "Which practice is an ethical failure of adaptation?",
              ["Defining an essential term", "Omitting a material risk because the audience is senior", "Using a concrete example to explain an abstract point"],
              1,
              "Audience needs do not justify withholding decision-changing information.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Adapt one argument three ways",
          instructions: "Use the fictional finding that a night-bus subsidy improves shift-worker access but costs $240,000 annually.",
          items: [
            p(
              "Write the audience-independent core in one sentence: claim, evidence, limit and action.",
              "Model answer: A $240,000 night-bus subsidy appears to improve shift-worker access, although its effect on retention is unmeasured, so a one-year pilot with an access and cost review is justified.",
              "Keep the finding, uncertainty and action visible before changing register.",
            ),
            p(
              "Adapt the core for a finance committee in no more than 45 words.",
              "Model answer: Approve a one-year, $240,000 night-bus pilot to test improved access for shift workers. Retention benefits remain unmeasured; the review should report ridership, cost per additional journey and late-shift coverage before renewal.",
              "Lead with approval, cost and evaluation criteria.",
            ),
            p(
              "Adapt the core for shift workers in no more than 50 words, preserving the limit and inviting participation.",
              "Model answer: The council proposes a one-year night-bus trial costing $240,000 to improve travel for late shifts. It may help you get home, but the council has not yet measured effects on job retention. A review will examine routes, cost and coverage; shift workers can submit route priorities before the timetable is set.",
              "State the consequence, uncertainty and genuine opportunity to influence design.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What should change first when adapting to a new audience?", ["The underlying facts", "The reader's first question and required context", "The strength of every claim"], 1, "Adaptation begins with the reader's decision, concern and knowledge needs."),
        q(2, "What should remain stable across adaptations?", ["The paragraph order", "The core judgement, evidence and ethical commitment", "The exact vocabulary"], 1, "A recognisable voice depends on consistent meaning and values."),
        q(3, "Why avoid euphemism when writing for affected people?", ["It always makes prose longer", "It is grammatically incorrect", "It can obscure consequences and reduce their ability to respond"], 2, "Plain, concrete language supports informed participation."),
        q(4, "What is a key integrity check after adaptation?", ["Whether material risks and limits have been preserved", "Whether the text sounds more impressive", "Whether every audience receives identical prose"], 0, "Different presentation must not become selective disclosure or exaggeration."),
      ],
    },
  ],
};
