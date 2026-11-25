import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1ReadingUnit4: LessonUnit = {
  title: "Critical synthesis",
  description:
    "Weigh conflicting evidence, build interpretations that survive counter-reading and combine sources into a coherent position with an identifiable critical voice.",
  lessons: [
    {
      slug: "evaluating-conflicting-evidence",
      title: "Evaluating conflicting evidence",
      summary:
        "Resolve an apparent conflict between urban-tree studies by comparing what each measured, where it measured it and what kind of claim the design permits.",
      objective:
        "Evaluate evidence for relevance, reliability and comparability, then explain a qualified position rather than simply choosing a preferred result.",
      minutes: 36,
      blocks: [
        {
          type: "passage",
          title: "Do trees cool a city? Two fictional studies",
          paragraphs: [
            "A municipal report claims that street trees reduce summer temperatures by up to five degrees. Researchers attached sensors to thirty trees and thirty nearby open sites during six heatwaves, measuring air temperature at pedestrian height. The tree sites were cooler at midday, but the report gives no figure for whole-street averages and does not explain how sites were selected.",
            "A university study reaches a more modest conclusion. Across forty residential blocks, it combines satellite measurements of surface temperature with fixed air sensors and resident interviews. It finds that canopy cover is associated with lower surface temperatures and with less reported heat discomfort, while average daytime air-temperature differences are below one degree.",
            "The studies need not contradict one another. Shade can produce a local five-degree sensation at one sensor while changing a block's average air temperature by much less. Surface temperature also differs from the temperature a person experiences in moving air. The first study measures a tightly bounded microenvironment; the second estimates broader patterns using different instruments and outcomes.",
            "Neither study establishes that planting any tree will deliver the same benefit everywhere. Species, water availability, building geometry and maintenance affect performance, and the university sample included blocks with established canopy rather than newly planted trees. A policy case for planting is strongest when it combines immediate pedestrian comfort, long-term survival and equitable distribution, rather than treating a single headline number as a universal effect.",
          ],
          glossary: [
            { term: "canopy", meaning: "The upper layer of branches and leaves formed by trees." },
            { term: "microenvironment", meaning: "A small, local physical environment." },
            { term: "equitable", meaning: "Distributed fairly in relation to need or disadvantage." },
          ],
        },
        {
          type: "table",
          title: "Compare before you reconcile",
          caption: "Apparent disagreement often dissolves when units, scales and designs become visible.",
          columns: ["Criterion", "Municipal report", "University study"],
          rows: [
            ["Scale", "Thirty tree sites and nearby open sites", "Forty residential blocks"],
            ["Measure", "Air temperature at pedestrian height", "Satellite surface temperature, fixed air sensors, interviews"],
            ["Time", "Six heatwaves at midday", "Block-level observations across the study period"],
            ["Finding", "Up to 5 degrees locally", "Below 1 degree average air difference; lower surface heat"],
            ["Key limitation", "Site selection and whole-street averages unclear", "Established canopy may not predict new planting"],
            ["Best use", "Estimate immediate local comfort", "Estimate broader patterns and reported experience"],
          ],
        },
        {
          type: "exercise",
          title: "Weigh the evidence",
          instructions: "Choose the answer that best evaluates the strength and limits of each study.",
          items: [
            c(
              "What is the strongest reason not to treat the two headline figures as direct contradictions?",
              ["They measure different scales and outcomes using different instruments", "Both figures are rounded", "The larger number must be wrong"],
              0,
              "Local pedestrian-level air temperature and block-average air or surface temperature are not interchangeable measures.",
            ),
            c(
              "What would most improve confidence in the municipal report?",
              ["A more dramatic photograph of a tree", "Transparent site selection and representative street-level averages", "Removing the comparison sites"],
              1,
              "Selection bias and limited spatial representation are the central threats to its generalisability.",
            ),
            c(
              "Why is the university finding relevant to policy despite its smaller temperature difference?",
              ["It links canopy to broader surface conditions and resident experience across many blocks", "It proves trees have no local value", "It uses satellites, which cannot be questioned"],
              0,
              "Its multiple measures provide evidence about lived and spatial outcomes, not only one sensor reading.",
            ),
            c(
              "What is the most justified synthesis?",
              ["Planting will cool every street by five degrees", "The studies are useless", "Trees may deliver substantial local comfort and broader benefits, but outcomes depend on context, survival and distribution"],
              2,
              "The synthesis retains the value of both studies while avoiding a universal effect size.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write an evidence judgment",
          instructions: "Use criteria such as construct validity, sample, measurement and relevance to the proposed decision.",
          items: [
            p(
              "Explain why ‘up to five degrees’ is not the same claim as ‘average cooling of five degrees’.",
              "Model answer: Up to identifies a maximum observed under particular local conditions, whereas an average would summarise a defined distribution across sites and time; the report supports the former, not the latter.",
              "Distinguish maximum, average and generalised effect.",
            ),
            p(
              "Write one sentence comparing the reliability of the studies for a citywide investment decision.",
              "Model answer: The university study is more relevant to citywide planning because it samples many blocks and combines outcomes, although neither study directly evaluates the long-term performance of newly planted trees.",
              "Match the design to the decision rather than ranking studies abstractly.",
            ),
            p(
              "Identify one missing piece of evidence and explain which claim it would test.",
              "Model answer: Survival rates for newly planted trees in hotter, less affluent districts would test whether the expected benefits are likely to reach the neighbourhoods most in need over time.",
              "Name both the evidence and the inferential job it performs.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Reconcile by explanation, not averaging",
          text: "When studies disagree, first test whether they define the outcome and population in the same way. Do not average incompatible effect sizes or select the result that fits your values. A synthesis should explain which evidence answers which question and why the remaining uncertainty matters.",
        },
      ],
      quiz: [
        q(1, "What is a construct-validity problem in the municipal report?", ["The temperature sensor cannot measure air", "It is unclear whether a local pedestrian reading represents the broader outcome claimed", "Thirty is always too small"], 1, "The issue concerns whether the measure represents the intended concept and scale."),
        q(2, "Why include resident interviews in the university study?", ["To replace all physical measurements", "To capture reported comfort that sensor temperature may not fully represent", "To establish causation by itself"], 1, "Interviews add experiential evidence but do not alone prove causal effects."),
        q(3, "Why does established canopy limit the policy inference?", ["Existing mature trees may perform differently from newly planted trees facing establishment stress.", "Residential blocks never contain trees.", "Satellites cannot distinguish species."], 0, "Long-term survival and performance are separate from shade observed in mature canopy."),
        q(4, "Which is the fairest overall judgment?", ["The larger study settles every question.", "The smaller study should be ignored.", "Each design supports a bounded claim, and policy requires evidence about durability and distribution."], 2, "Quality and relevance depend on the question, not size or preferred result alone."),
      ],
    },
    {
      slug: "building-an-interpretation",
      title: "Building an interpretation",
      summary:
        "Interpret a fictional story about a station clock removed during rebuilding by testing a thesis against motif, structure and counter-evidence.",
      objective:
        "Build an original interpretive claim from converging details, address a plausible counter-reading and qualify the claim where necessary.",
      minutes: 35,
      blocks: [
        {
          type: "passage",
          title: "The missing minute",
          paragraphs: [
            "On the morning the station clock was taken down, the clerk set his watch by the station clock, as he had for thirty-one years. The workmen carried it past his window in a wooden box. One of them tapped the glass and said, ‘You'll have to manage without us now.’ The clerk replied that he had never depended on them, which was not quite true.",
            "During the rebuilding, passengers gathered beneath the blank wall and consulted their phones. The clerk continued to arrive at 6:42, ten minutes before the first train. He polished the old bracket until the brass showed through the paint. When the new clock arrived, larger and lit from within, he discovered that it ran three minutes fast.",
            "He reported the fault, but the contractor said the error would correct itself after adjustment. Every morning the clerk watched passengers hurry beneath a time that had not yet happened. He began announcing the correct hour above the platform noise, quietly at first, then with a card held beside the departure board. Some passengers thanked him; others accused him of making them late.",
            "When the clock was finally corrected, the clerk put away his card. He did not polish the bracket again, and on his last day he left his watch at home. The station opened on time. Years later, a local historian asked him why he had resisted the new clock, expecting a story about mechanical loyalty. ‘I wasn't defending the old one,’ he said. ‘People were trusting a mistake.’",
          ],
          glossary: [
            { term: "motif", meaning: "A recurring image, object or idea that contributes to meaning." },
            { term: "bracket", meaning: "A support fixed to a wall for an object." },
            { term: "loyalty", meaning: "Faithfulness to a person, object or institution." },
          ],
        },
        {
          type: "rules",
          title: "An interpretation is a case, not a label",
          items: [
            "Observation: select exact words, objects, actions and structural changes rather than a theme word such as tradition.",
            "Pattern: show where a detail recurs, changes or contrasts with another detail.",
            "Claim: explain what the pattern reveals about authority, identity, memory or another interpretive problem.",
            "Warrant: make the logical connection between detail and claim explicit.",
            "Counter-reading: state the strongest alternative explanation and show why your claim still fits better or needs narrowing.",
          ],
        },
        {
          type: "exercise",
          title: "Test an interpretive claim",
          instructions: "Choose the reading best supported by the story's development.",
          items: [
            c(
              "Why does the clerk say he never depended on the workmen?",
              ["To deny the old clock's role in organising his routine and conceal the disruption he feels", "To prove that watches are more accurate than clocks", "To show that he installed the new clock"],
              0,
              "His daily act of setting his watch contradicts the denial and reveals an attachment he cannot acknowledge directly.",
            ),
            c(
              "What is the significance of the new clock running fast?",
              ["It proves passengers dislike technology", "It introduces a conflict between institutional authority and verifiable accuracy", "It establishes that all public clocks are unreliable"],
              1,
              "The officially sanctioned time causes practical harm, while the clerk's correction is treated as obstruction.",
            ),
            c(
              "How does the final exchange revise the story's apparent conflict?",
              ["It proves the contractor never made a mistake", "It confirms that the clerk loved the old clock above all else", "It replaces a simple tradition-versus-progress reading with a distinction between loyalty and truthful service"],
              2,
              "The clerk names public trust rather than attachment to the old mechanism as his concern.",
            ),
            c(
              "Which counter-reading is most plausible?",
              ["The clerk simply enjoys public attention", "The story concerns only the difficulty of telling time", "The clerk is conservative and opposes all rebuilding"],
              0,
              "His correction card may satisfy a need to be useful or heard, a possibility that complicates but does not erase the evidence about accuracy.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Defend and complicate a reading",
          instructions: "Use the story's structural movement from attachment, through public correction, to release.",
          items: [
            p(
              "Write a one-sentence thesis using the clock and the clerk's routine.",
              "Model answer: The story uses the replacement of an accurate personal routine by a trusted public error to argue that integrity may require resisting authority in the name of service rather than preserving the familiar past.",
              "Connect object, conflict and interpretive claim.",
            ),
            p(
              "Support the thesis with two details from different parts of the story.",
              "Model answer: The clerk sets his watch by the old clock for thirty-one years, establishing embodied reliability; later passengers hurry under a clock running fast, showing how authority can organise people around a demonstrable mistake.",
              "Choose details that establish both the norm and its disruption.",
            ),
            p(
              "Write a counter-reading and then qualify your original thesis.",
              "Model answer: The polished bracket may suggest nostalgia rather than public duty; however, the final explanation reframes his action as resistance to false authority, so the stronger claim is that apparent loyalty becomes ethical service when it is redirected toward truth.",
              "Do not dismiss the counter-reading; explain how the ending changes its weight.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Let the ending test the beginning",
          text: "A retrospective ending can revise an interpretation established earlier. In this story, polishing the bracket appears nostalgic until the final explanation changes its meaning. Revisit early details after reading the conclusion, and ask whether the change feels earned, ironic or deliberately unresolved.",
        },
      ],
      quiz: [
        q(1, "What does leaving his watch at home most likely signify?", ["Release from a private routine after public time becomes trustworthy", "Forgetfulness caused by age", "A decision to abandon work"], 0, "The action concludes his earlier dependence and correction of institutional time."),
        q(2, "Why is ‘time that had not yet happened’ effective?", ["It describes time travel literally", "It makes the clock's fast setting concrete as a small everyday distortion", "It proves all passengers arrived late"], 1, "The phrase translates a technical error into lived consequence."),
        q(3, "Which phrase most clearly marks the clerk's initial self-deception?", ["as he had for thirty-one years", "which was not quite true", "larger and lit from within"], 1, "The narrator directly qualifies his denial of dependence."),
        q(4, "What makes the final interpretation more than an authorial explanation?", ["It gives the word loyalty a precise role", "It introduces a new character who was absent throughout", "It removes all earlier ambiguity"], 0, "The historian's expected category is rejected and replaced by the clerk's distinction between attachment and truth."),
      ],
    },
    {
      slug: "writing-a-critical-synthesis",
      title: "Writing a critical synthesis",
      summary:
        "Synthesise teacher, student and evaluator accounts of a school phone restriction into a position that integrates evidence without erasing disagreement.",
      objective:
        "Organise sources by relationship rather than by summary, distinguish normative from empirical claims and write a concise synthesis with an explicit critical judgment.",
      minutes: 37,
      blocks: [
        {
          type: "passage",
          title: "Four perspectives on phones at school",
          paragraphs: [
            "Source A — A teacher's account: Since phones were locked away during the school day, corridors are calmer and students stay for lunch rather than leaving to meet friends. I have not noticed a clear change in written work. The policy works best when students help devise the storage routine, because confiscation creates a different conflict from collective agreement.",
            "Source B — A student council response: The rule reduces pressure to compare social lives, and I concentrate better without checking messages. But some students use phones to organise caring responsibilities or travel, and the exceptions are unclear. A ban that appears equal may burden those with least family support.",
            "Source C — An evaluator's report: In twelve fictional schools, reported classroom interruptions fell by 22 per cent after implementation. Attainment measures did not change significantly over one term. Schools with published exception procedures recorded fewer disputes than schools that relied on individual teacher discretion.",
            "Source D — A family organisation's statement: Families support reduced distraction but want prompt access during emergencies. We oppose a rule that shifts emergency communication entirely to an understaffed school office. Any policy should specify response times and protect students from penalty when a genuine care obligation requires contact.",
          ],
          glossary: [
            { term: "discretion", meaning: "Individual freedom to decide how to act.", },
            { term: "attainment", meaning: "Measured academic achievement." },
            { term: "dispute", meaning: "A serious disagreement or conflict." },
            { term: "understaffed", meaning: "Having too few staff to operate effectively." },
          ],
        },
        {
          type: "examples",
          title: "Synthesis moves",
          intro: "A synthesis paragraph explains a relationship among sources and then makes your own judgment.",
          items: [
            {
              text: "Convergence: Although the teacher and student disagree about surveillance, both connect the policy's legitimacy to participation; the evaluator's lower dispute rate in schools with published exceptions supports the practical importance of clear, shared procedures.",
              note: "The writer links a value claim to a measured outcome without treating every disagreement as resolved.",
            },
            {
              text: "Qualification: The evaluator's 22-per-cent fall supports reduced interruption, but the absence of a significant attainment change prevents the stronger claim that the policy improves academic performance.",
              note: "The sentence preserves the positive finding and limits the inference.",
            },
            {
              text: "Critical judgment: The evidence favours a restrictive default with transparent, quickly administered exceptions, because that arrangement addresses distraction while recognising unequal care responsibilities.",
              note: "The recommendation follows from both empirical and distributive considerations.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the synthesis",
          instructions: "Choose the option that integrates sources most accurately and visibly.",
          items: [
            c(
              "Which statement correctly combines Sources A and C?",
              ["Both prove that attainment improved", "The teacher reports calmer corridors while the evaluator measures a 22-per-cent fall in interruptions, offering complementary forms of evidence", "They disagree about whether phones exist"],
              1,
              "Observation and quantitative measurement support the same limited outcome through different methods.",
            ),
            c(
              "How should Sources B and D be related?",
              ["As unrelated complaints", "As converging evidence that equal rules can create unequal burdens and need clear exceptions", "As proof that every student has caring responsibilities"],
              1,
              "Both identify distributional effects, while the family source adds emergency-response capacity.",
            ),
            c(
              "What claim about attainment is justified?",
              ["It improved by 22 per cent", "It did not change significantly over one term in the fictional evaluation", "It fell because interruptions fell"],
              1,
              "The 22-per-cent figure concerns interruptions, and the attainment measure showed no significant change.",
            ),
            c(
              "Which synthesis sentence has the strongest critical voice?",
              ["There are different views about phones.", "Source A says this and Source B says that.", "The evidence supports reducing distraction, but fairness depends on published, workable exceptions rather than a nominally uniform ban."],
              2,
              "The sentence weighs the benefit, identifies a condition and derives a qualified judgment.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Compose a critical synthesis",
          instructions: "Use all four sources across the three tasks, but avoid a source-by-source list.",
          items: [
            p(
              "Write an opening sentence that names convergence, disagreement and your emerging position.",
              "Model answer: The four sources converge on reducing distraction but disagree over participation and exceptions, suggesting that a restrictive default is defensible only if its procedures are transparent and responsive to unequal needs.",
              "Signal relationships in one sentence rather than announcing each source.",
            ),
            p(
              "Integrate Source C with Sources B and D in a 60–80-word paragraph.",
              "Model answer: The evaluator's lower dispute rate in schools with published exception procedures gives empirical weight to the students' and families' concern that unclear rules create unfair burdens. Yet the finding is correlational: clearer procedures may also indicate stronger school organisation. The evidence therefore supports transparent exceptions as a practical condition, not proof that procedure alone resolves conflict.",
              "Connect finding, interpretation and methodological limitation.",
            ),
            p(
              "Write a concluding recommendation that includes one metric and one ethical condition.",
              "Model answer: Schools should retain a phone-free default, monitor interruptions and dispute rates, and guarantee rapid, clearly defined exceptions for care and emergencies so that reduced distraction does not depend on treating all students as identically situated.",
              "Make the metric serve the policy rather than replacing ethical judgment.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Synthesis is not consensus",
          text: "You can synthesise sources that disagree. Show whether they address different outcomes, use different evidence or rank values differently. Your paragraph should contain an explanatory relationship and a judgment; a sequence of summaries leaves the synthesis to the reader.",
        },
      ],
      quiz: [
        q(1, "What is the central limitation of Source C?", ["It contains no data", "One term and observational implementation limit causal and long-term conclusions", "It surveyed only teachers"], 1, "The duration and design permit a measured association, not a durable causal effect."),
        q(2, "Which source most directly raises distributive justice?", ["The evaluator", "The student council and family organisation", "The teacher alone"], 1, "They identify unequal care responsibilities and emergency access."),
        q(3, "What is the difference between synthesis and summary?", ["Synthesis explains relationships and makes a judgment; summary reports content.", "Synthesis must be longer than every summary.", "Summary always contains errors."], 0, "The added work is analytical integration."),
        q(4, "Which recommendation best follows the combined evidence?", ["Retain the ban without any exceptions", "End all restrictions because attainment did not change", "Use a restrictive default with monitored outcomes and transparent exceptions"], 2, "It balances the measured interruption benefit with procedural fairness and unresolved attainment questions."),
      ],
    },
    {
      slug: "advanced-reading-review",
      title: "Advanced reading review",
      summary:
        "Integrate argument mapping, inference, contextual reading and synthesis in a mixed dossier about workplace automation.",
      objective:
        "Independently identify claims and silences, interpret a literary fragment, compare evidence and defend a bounded synthesis using all three texts.",
      minutes: 38,
      blocks: [
        {
          type: "passage",
          title: "The measured shift: a three-part dossier",
          paragraphs: [
            "Text 1 — Fictional labour report: Across sixteen warehouses, automated scheduling reduced average order-processing time by fourteen per cent. Managers also reported fewer urgent staffing calls. Workers described less predictable breaks and greater difficulty arranging childcare. The study did not collect injury rates, and temporary workers were excluded from interviews.",
            "Text 2 — Worker monologue: ‘The screen no longer asks whether I am tired. It asks where I would like to be tired. At five minutes to the hour, the shelf in front of me changes colour, and the building decides that my legs have a preference. Last winter I dreamed in barcodes. When I woke, I could not remember whether I had scanned the dream or merely stood inside it.’",
            "Text 3 — Technology editorial: Efficiency is not merely speed; it is the elimination of uncertainty from a system. Workers who resist algorithmic schedules mistake a transparent process for an arbitrary one. If a worker's needs cannot be expressed as data, the solution is better measurement, not a return to informal favouritism.",
            "The three texts share the language of choice, but they do not share its meaning. The report measures processing time; the monologue exposes the experience of having choices framed by a system; the editorial treats formal measurement as a guarantee of fairness. Read together, they pose a question none answers alone: when does making labour legible increase autonomy, and when does it merely make control more precise?",
          ],
          glossary: [
            { term: "dossier", meaning: "A collection of documents concerning one subject." },
            { term: "legible", meaning: "Capable of being read, understood or systematically represented." },
            { term: "arbitrary", meaning: "Based on personal whim rather than consistent or reasonable principles." },
            { term: "autonomy", meaning: "The capacity to make meaningful choices about one's actions." },
          ],
        },
        {
          type: "table",
          title: "One dossier, four reading operations",
          columns: ["Operation", "Question", "Evidence to note"],
          rows: [
            ["Argument mapping", "What does each text claim and what supports it?", "14% time reduction; transparency claim; missing injury data"],
            ["Inference", "What is implied but not stated?", "Choice offered within constrained options"],
            ["Context and ideology", "Which people and outcomes define the problem?", "Temporary workers omitted; breaks and childcare marginalised"],
            ["Synthesis", "How do the texts converge or conflict?", "Measurement improves efficiency but does not settle fairness"],
          ],
        },
        {
          type: "exercise",
          title: "Review the dossier",
          instructions: "Choose the answer that demonstrates integrated critical reading.",
          items: [
            c(
              "Which inference from the monologue is strongest?",
              ["The worker literally cannot distinguish dreams from work", "The system offers formally limited choices while organising the worker's experience beyond working hours", "The worker supports informal management"],
              1,
              "The colour-changing shelf and dream imagery imply that optimisation penetrates consciousness, not only task completion.",
            ),
            c(
              "What is the most serious evidential gap in the labour report?",
              ["It does not prove every warehouse in the world is identical", "It excludes injury rates and temporary-worker interviews, limiting conclusions about harm and distribution", "It reports a percentage"],
              1,
              "The omissions bear directly on worker wellbeing and unequal impact.",
            ),
            c(
              "What assumption does the editorial make about transparency?",
              ["That a formally measurable process is necessarily fair and responsive to human needs", "That all data should remain secret", "That informal favouritism never exists"],
              0,
              "The editorial moves from formal visibility to a normative claim of fairness without addressing whose needs the data capture.",
            ),
            c(
              "Which thesis best synthesises the dossier?",
              ["Automation is either wholly liberating or wholly oppressive", "Processing gains should be ignored", "Automation's legitimacy depends not only on efficiency but on whose needs become measurable and who can contest the resulting decisions"],
              2,
              "The thesis integrates quantitative benefit, lived experience and the contested meaning of choice.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Produce a critical reading note",
          instructions: "Write three connected notes rather than three isolated summaries.",
          items: [
            p(
              "Compare the report's ‘urgent staffing calls’ with the monologue's ‘where I would like to be tired’.",
              "Model answer: For managers, reduced staffing uncertainty is an efficiency gain; for the worker, the same optimisation removes meaningful discretion over bodily rhythm. The phrases reveal that efficiency is a value-laden distribution of certainty, not a neutral property.",
              "Ask who gains certainty and who bears its cost.",
            ),
            p(
              "Evaluate the editorial's claim that better measurement solves the problem, using two pieces of evidence.",
              "Model answer: The monologue shows that some experiences resist capture, while the report's omitted injury and temporary-worker data show that measurement itself may be selective; better measurement helps only if affected people influence what counts and can challenge decisions.",
              "Treat both the content and the governance of data as relevant.",
            ),
            p(
              "Write a 100–120-word synthesis with a claim, two kinds of evidence, one counter-point and a bounded conclusion.",
              "Model answer: The warehouse dossier suggests that automation can improve operational reliability while narrowing the autonomy it claims to support. The report's fourteen-per-cent processing gain is meaningful evidence of efficiency, but its omissions prevent a balanced judgment about worker harm. The monologue does not quantify experience; it nevertheless shows how formally optional choices can feel totalising. A defender might reply that informal scheduling was also arbitrary, yet the editorial offers no evidence that transparent rules distribute discretion fairly. The strongest conclusion is therefore conditional: automated scheduling warrants use only with safety data, representation for temporary workers and a genuine mechanism for contesting assignments.",
              "Use report, literary voice and counter-argument for distinct jobs.",
            ),
          ],
        },
        {
          type: "text",
          title: "A repeatable independent-reading routine",
          paragraphs: [
            "Begin with a provisional question rather than a final verdict. For each text, record the claim, evidence, assumption and silence. Then compare relationships: corroboration, tension, difference in scale or conflict of value. Revisit literary language as evidence of experience, not as decoration around the ‘real’ data.",
            "End by stating what your synthesis can and cannot establish. A sophisticated reading is not the longest list of techniques; it is a clear account of how evidence, language and context combine to support a judgment that another reader could test.",
          ],
        },
        {
          type: "tip",
          title: "Keep your conclusion revisable",
          text: "A bounded conclusion says which evidence would change your mind. This is a mark of critical independence: you are neither refusing judgment nor pretending that no further evidence could matter.",
        },
      ],
      quiz: [
        q(1, "What does the editorial mean by informal favouritism?", ["Unrecorded personal influence in scheduling", "A published statistical model", "A worker's legal right to rest"], 0, "It invokes unequal personal discretion as the alternative to formal rules."),
        q(2, "Why is the monologue not merely an illustration of the report?", ["It tests what the report's categories exclude and reveals a different conception of efficiency and choice.", "It contains no figurative language.", "It proves the fourteen-per-cent figure false."], 0, "The literary text supplies experiential and conceptual evidence rather than confirming the metric."),
        q(3, "Which omission most affects a judgment about unequal impact?", ["The warehouses' names", "Temporary workers' exclusion from interviews", "The report's page number"], 1, "A group often differently situated is missing from the evidence."),
        q(4, "What makes the recommended mechanism for contesting assignments important?", ["It gives affected workers agency over how formal measurement is governed, not merely more data about them.", "It guarantees that every decision will be popular.", "It removes the need to measure efficiency."], 0, "Contestability connects transparency with accountability and autonomy."),
      ],
    },
  ],
};
