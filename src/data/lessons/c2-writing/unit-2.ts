import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2WritingUnit2: LessonUnit = {
  title: "Sentence craft",
  description:
    "Shape syntax, rhythm, emphasis and figurative language so that complex prose lands with control, energy and precision.",
  lessons: [
    {
      slug: "rhythm-and-sentence-variety",
      title: "Rhythm and sentence variety",
      summary:
        "Compose prose with a deliberate cadence by varying sentence length, syntactic movement and the placement of resolution.",
      objective:
        "Analyse and imitate three rhythmic patterns, then revise a metronomic paragraph for pace, emphasis and reader orientation.",
      minutes: 35,
      blocks: [
        {
          type: "text",
          title: "Rhythm is meaning distributed over time",
          paragraphs: [
            "Sentence rhythm comes from length, stress, clause order and punctuation. A long cumulative sentence can gather evidence before delivering its judgement; a short sentence after it can make that judgement land. A periodic sentence delays completion until the end, while a loose sentence releases its main point early and then develops it.",
            "Variety is not randomness. Each change in cadence should correspond to a change in thought: acceleration for accumulation, suspension for uncertainty, a short stop for judgement. Reading aloud exposes monotony, breathless clauses and emphatic endings that fail to contain the important words.",
          ],
        },
        {
          type: "table",
          title: "Three usable rhythmic patterns",
          columns: ["Pattern", "Shape", "Best use", "Model"],
          rows: [
            ["Cumulative", "Main clause, then clarifying development.", "Concrete observation followed by detail.", "The queue moved slowly, held back by one payment terminal, two confused travellers and a child asleep against the glass."],
            ["Periodic", "Subordinate preparation, main judgement at the end.", "Build suspense or complex qualification.", "When the figures are adjusted for age, region and case severity, the apparent advantage disappears."],
            ["Fractured cadence", "Long accumulation, then a short verdict.", "Expose a contrast or decisive failure.", "The report lists consultations, pilot sites, partner organisations and revised forecasts; it omits the patients."],
          ],
          caption: "Punctuation should guide the cadence, not merely mark grammatical boundaries.",
        },
        {
          type: "passage",
          title: "Model paragraph: read the cadence aloud",
          paragraphs: [
            "The consultation was described as a conversation, which made it sound reciprocal, almost intimate. There were information displays in the foyer, a facilitator at each table and coloured cards on which residents could record what they hoped the riverfront would become. There was no card on which to record what they feared losing. Not the footpath used by dog walkers before work, nor the shade under the willow, nor the unofficial mooring that kept a small boating club alive through winter. By late afternoon, the facilitators had collected hundreds of aspirations. The losses had nowhere to go.",
          ],
        },
        {
          type: "rules",
          title: "Edit for cadence",
          items: [
            "Mark the main stress in each sentence; the most important word should not routinely arrive too early or disappear mid-clause.",
            "Calculate the average sentence length, then inspect clusters rather than forcing a numerical target.",
            "Use a short sentence to answer or overturn the long sentence before it.",
            "Vary openings: avoid a paragraph in which every subject is The report, The study or This.",
            "Use repetition deliberately when it creates incantation or escalation; interrupt it when it becomes accidental.",
            "Read the paragraph aloud without correcting it on the first pass; note where you run out of breath or lose the grammatical thread.",
          ],
        },
        {
          type: "exercise",
          title: "Hear the rhythm",
          instructions: "Choose the version whose cadence best supports the stated rhetorical effect.",
          items: [
            c(
              "Which sequence best creates a decisive turn?",
              ["The pilot was effective. It reduced waiting. It saved time.", "The pilot reduced waiting, improved staff morale, lowered costs and simplified booking; none of these gains reached the patients who still waited outside.", "There were gains and there were losses."],
              1,
              "The long accumulation creates expectation that the final short clause pointedly withholds.",
            ),
            c(
              "Which sentence is periodic?",
              ["The advantage vanished when the sample was corrected.", "When the sample was corrected for age and severity, the advantage vanished.", "Age and severity mattered. The sample was corrected. The advantage vanished."],
              1,
              "The main judgement arrives only after the introductory subordinate clause.",
            ),
            c(
              "What is the best rhythmic reason to place a short sentence after a long one?",
              ["To make every paragraph the same length", "To let a judgement or contrast land with full weight", "To avoid using commas"],
              1,
              "The change in pace makes the short proposition perceptually prominent.",
            ),
            c(
              "Which opening best varies a paragraph after several sentences beginning with The proposal?",
              ["The proposal once again", "It is the case that the proposal", "What the proposal assumes, however, is that demand remains stable."],
              2,
              "The fronted clause varies syntax and introduces a genuine qualification.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Compose three cadences",
          instructions: "Use the fictional case of a town market relocated from its historic square to a peripheral site.",
          items: [
            p(
              "Write a cumulative sentence that begins with a clear judgement and adds two concrete details.",
              "Model answer: The relocation displaced more than stalls: it separated traders from the morning footfall on the high street and moved the market beyond the bus route used by older customers.",
              "Let the additions reveal the scale or mechanism of the judgement.",
            ),
            p(
              "Write a periodic sentence that delays the conclusion until the end.",
              "Model answer: When visitor numbers are considered alongside trader revenue, transport access and the loss of the historic setting, the claim that the relocation improved the market becomes difficult to sustain.",
              "Withhold the main clause until the qualifications have accumulated.",
            ),
            p(
              "Write a three-sentence paragraph using long–long–short rhythm to end on an unsentimental judgement.",
              "Model answer: The new site offers shelter, wider aisles and easier loading for vehicles. It offers none of the passing trade that once compensated traders for uncertain weather. The market survived; its setting did not.",
              "Make the final short sentence change the meaning of the preceding details.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is a cumulative sentence?", ["One that postpones its main point until the end", "One that states its main point and then develops or qualifies it", "One that contains no main clause"], 1, "Cumulative syntax moves from a firm statement into elaboration."),
        q(2, "Why read prose aloud during rhythm editing?", ["To identify monotony, unclear stress and breathless syntax", "To count sources", "To remove every long sentence"], 0, "Sound reveals cadence problems that silent proofreading may miss."),
        q(3, "What gives a short sentence emphasis?", ["Its position after a contrasting or accumulated longer sequence", "Its lack of punctuation", "Its use of technical vocabulary"], 0, "Emphasis is relational: a change in pace makes the short unit prominent."),
        q(4, "When is repetition rhetorically effective?", ["When its pattern creates a deliberate accumulating or incantatory effect", "Whenever the writer cannot find a synonym", "Only in lists of references"], 0, "Rhetorical repetition is patterned and purposeful rather than accidental."),
      ],
    },
    {
      slug: "emphasis-and-end-focus",
      title: "Emphasis and end-focus",
      summary:
        "Direct attention through syntactic focus, controlled fronting and strong sentence endings without making every sentence sound artificially dramatic.",
      objective:
        "Revise flat sentences using end-focus, clefting and selective inversion while preserving information order and grammatical accuracy.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "The end of a sentence is a position of prominence",
          paragraphs: [
            "English commonly places new or contrasting information near the end. If the most consequential words arrive too early and the sentence trails into a weak detail, the reader registers the wrong emphasis. End-focus is not a demand for suspense in every sentence; it is a way to make the informational destination visible.",
            "Clefts isolate one element for special attention: ‘What the policy lacks is accountability’ or ‘It is accountability that the policy lacks’. Fronting moves a circumstance or complement into first position for contrast or continuity. Inversion is more marked and should be used only when its rhetorical force matches the context.",
          ],
        },
        {
          type: "table",
          title: "Techniques of emphasis",
          columns: ["Technique", "Function", "Example", "Caution"],
          rows: [
            ["End-focus", "Place new information last.", "The report attributes the delay to staffing, not software.", "Avoid trailing with an unimportant tag."],
            ["Cleft", "Single out one element.", "What changed was the approval process.", "Frequent clefts sound contrived."],
            ["Fronting", "Create contrast or a clear link.", "To this objection there is a simple answer.", "Keep the main clause easy to process."],
            ["Inversion", "Give strong rhetorical prominence.", "Never has the gap between policy and practice been so visible.", "Overuse becomes grandiose."],
            ["Short verdict", "Make a judgement land.", "The distinction matters.", "Do not use as a substitute for reasoning."],
            ["Balanced contrast", "Give competing terms parallel weight.", "The question is not whether to act, but who bears the cost.", "Ensure the contrast is genuinely symmetrical."],
          ],
          caption: "Use marked syntax sparingly so that its appearance carries meaning.",
        },
        {
          type: "examples",
          title: "Move the spotlight",
          items: [
            {
              text: "Flat: ‘The city rejected the proposal because of costs, although residents supported it.’ End-focus: ‘Residents supported the proposal, but costs defeated it.’ Cleft: ‘What defeated the proposal was not public opposition; it was cost.’",
              note: "The three versions preserve the conflict while placing different information in the focal position.",
            },
            {
              text: "Weak ending: ‘The findings are significant in relation to the question of trust, broadly speaking.’ Strong ending: ‘The findings locate the decline of trust not in transparency itself, but in transparency without response.’",
              note: "The revision ends on the analytical distinction rather than a vague qualifier.",
            },
            {
              text: "Over-marked: ‘Rarely has such an utterly momentous decision been made.’ Controlled inversion: ‘Rarely has a consultation carried such clear consequences for local control.’",
              note: "The second version removes empty intensifiers while retaining a justified fronted negative.",
            },
          ],
        },
        {
          type: "rules",
          title: "Audit emphasis",
          items: [
            "Underline the three words the reader must remember from each sentence; check whether syntax gives them sufficient weight.",
            "Replace vague endings such as and so on, in this regard and more or less with a precise consequence or cut them.",
            "Use it is + noun phrase only when the focus genuinely contrasts with an alternative.",
            "Reserve inversion for negation, restrictive adverbs or deliberate rhetorical symmetry; do not invert after ordinary adverbials as a display of variety.",
            "Keep parallel elements grammatically and rhythmically balanced.",
            "Read the final word of each paragraph; it often sets the expectation for what follows.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the strongest focus",
          instructions: "Select the version that places the intended information in the most effective position.",
          items: [
            c(
              "You want to contrast the method of consultation, not its length. Which sentence focuses the distinction?",
              ["The consultation took months, and its method mattered.", "It was the method of consultation, not its duration, that undermined trust.", "The consultation was long and problematic."],
              1,
              "The cleft isolates the contrast between method and duration.",
            ),
            c(
              "Which ending gives the new analytical point the strongest position?",
              ["The finding matters, broadly speaking.", "The finding matters for accountability.", "The finding shifts responsibility from the reviewer to the approving officer."],
              2,
              "The final sentence ends with the specific redistribution of responsibility.",
            ),
            c(
              "Which inversion is appropriate in a formal analytical paragraph?",
              ["Never I have seen such a report.", "Only after the second review did the discrepancy become clear.", "Only after the second review did the discrepancy became clear."],
              1,
              "Only + adverbial at the beginning licenses inversion, and the past simple auxiliary did is required.",
            ),
            c(
              "Why should cleft sentences be used sparingly?",
              ["They are grammatically informal", "Frequent focal structures draw attention to the syntax and can sound contrived", "They cannot express contrast"],
              1,
              "A marked structure loses force when it becomes the default pattern.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rewrite for focus",
          instructions: "Use the fictional context of a research fund changing its peer-review rules.",
          items: [
            p(
              "Revise for end-focus: ‘The fund introduced a rebuttal stage, broadly speaking as a response to complaints about inconsistent decisions.’",
              "Model answer: The fund introduced a rebuttal stage to address inconsistent decisions exposed by applicants' complaints.",
              "End on the mechanism or purpose, not a vague tag.",
            ),
            p(
              "Use a cleft to emphasise that transparency, not speed, changed: ‘The stage made review slower, and applicants could see how objections had been answered.’",
              "Model answer: What changed for applicants was not the speed of review but their ability to see how objections had been answered.",
              "Make the contrast explicit in the focused structure.",
            ),
            p(
              "Use one controlled inversion to emphasise a rare failure: the fund published its criteria only after the first review round.",
              "Model answer: Only after the first review round did the fund publish its criteria, leaving applicants unable to judge whether the assessment matched its stated standards.",
              "Use inversion only when the temporal restriction carries rhetorical weight.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "Why is the sentence end often a position of emphasis?", ["It commonly carries new or focal information", "Readers always stop reading there", "It must contain the longest word"], 0, "End-focus allows writers to control where new information arrives."),
        q(2, "What does a cleft sentence do?", ["Isolates a particular element for attention", "Combines every clause into one", "Removes all contrast"], 0, "Cleft grammar spotlights one part of the proposition."),
        q(3, "Which word most clearly signals a justified inversion?", ["Usually", "Never", "Yesterday"], 1, "Never at the beginning commonly triggers subject–auxiliary inversion in formal prose."),
        q(4, "What is the risk of excessive marked syntax?", ["It can make the writer's technique more prominent than the argument", "It always causes grammatical errors", "It removes the need for evidence"], 0, "Rhetorical structures work best when used selectively."),
      ],
    },
    {
      slug: "concision-and-economy",
      title: "Concision and economy",
      summary:
        "Compress prose through strong verbs, syntactic fusion and controlled ellipsis while retaining ambiguity, evidential limits and rhetorical force.",
      objective:
        "Reduce redundant prose by at least 30 per cent and justify which phrases were removed, compressed or deliberately retained.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Economy is the removal of consequences that add nothing",
          paragraphs: [
            "Every clause has a consequence for pace, emphasis and trust. At C2, concision is not simply shorter sentences; it is the elimination of duplicated work. A paragraph may repeat its claim in the topic sentence, evidence frame, analysis and conclusion without adding a new relationship each time.",
            "Compression can be elegant when syntax carries shared meaning. Parallel verbs, ellipsis and a precise subject can remove repetition without removing thought. But economy must not erase productive ambiguity. If a literary text sustains two incompatible meanings, the prose should preserve that tension rather than resolve it for convenience.",
          ],
        },
        {
          type: "table",
          title: "Four ways to compress",
          columns: ["Method", "Before", "After", "Gain"],
          rows: [
            ["Strong verb", "Conduct an analysis of", "Analyse", "Removes an empty action frame."],
            ["Shared subject", "The committee met. It reviewed the figures. It postponed the vote.", "The committee reviewed the figures and postponed the vote.", "Removes repeated agency and sequence padding."],
            ["Controlled ellipsis", "Some staff wanted the change, and other staff opposed the change.", "Some staff wanted the change; others opposed it.", "Preserves parallelism and contrast."],
            ["Analytical fusion", "The policy was costly. It was also slow. These facts weakened it.", "Its cost and delay weakened the policy.", "Packages related reasons into one proposition."],
          ],
          caption: "Compression should simplify the reader's work, not merely the writer's sentence count.",
        },
        {
          type: "examples",
          title: "Cut, fuse and preserve",
          items: [
            {
              text: "Original: ‘It should be noted that the review was conducted in order to assess the extent to which the revised policy had been implemented in practice, and the findings indicated that implementation was partial rather than complete.’ Revised: ‘The review found partial implementation of the revised policy.’",
              note: "The revision removes framing and indirect reporting while retaining the degree of implementation.",
            },
            {
              text: "Original: ‘The novel does not simply reject the city, nor does it entirely affirm the countryside. Instead, it holds both possibilities in tension.’ Revised: ‘The novel holds city and countryside in tension, resisting the comfort of either.’",
              note: "The shorter version preserves the refusal of binary resolution and adds interpretive force.",
            },
            {
              text: "Over-compressed: ‘The programme succeeded.’ Restored: ‘The programme met its attendance target but did not demonstrate an effect on retention.’",
              note: "Economy must restore the outcome distinction when a short claim becomes misleading.",
            },
          ],
        },
        {
          type: "rules",
          title: "A disciplined economy check",
          items: [
            "Delete a sentence if its removal changes neither claim, evidence, qualification nor transition.",
            "Replace make a decision, provide an explanation and conduct a review with their direct verbs where formality is not required.",
            "Fuse clauses only when their logical relationship remains visible.",
            "Use ellipsis in parallel structures, not where omission creates ambiguity about the verb or reference.",
            "Retain strategic repetition when it creates contrast, moral pressure or a refrain.",
            "After cutting, check that the strongest claim is still supported and the exception is still visible.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the most economical accurate version",
          instructions: "Select the revision that removes redundancy without deleting meaning.",
          items: [
            c(
              "Which version is both concise and faithful to ‘The evidence suggests a possible association, although causation is uncertain’?",
              ["The evidence suggests association, not causation.", "The evidence proves causation.", "Association."],
              0,
              "The first version preserves both the positive inference and its limit.",
            ),
            c(
              "Which sentence uses ellipsis effectively?",
              ["Some participants preferred the morning, while other participants preferred the afternoon.", "Some preferred; others the.", "Some participants preferred the morning; others preferred the afternoon."],
              2,
              "The final sentence omits repeated participants and preferred while retaining a clear parallel structure.",
            ),
            c(
              "Which cut would be rhetorically damaging in an argument for urgent reform?",
              ["Removing the repeated phrase ‘not next year, but now’", "Removing ‘it is important to note that’", "Removing ‘in order to’ before ‘act’"],
              0,
              "The repetition creates urgency and cadence; removing it would change the rhetorical effect.",
            ),
            c(
              "What is the best final test of a compressed sentence?",
              ["Whether it contains no qualifiers", "Whether it preserves the proposition, material limits and intended emphasis", "Whether it contains fewer than eight words"],
              1,
              "Economy is measured by retained meaning and force, not by a fixed length.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Compress with a rationale",
          instructions: "Reduce each passage by about one third and identify the compression method you used.",
          items: [
            p(
              "Compress: ‘The review was carried out in order to determine whether the new procedure had been introduced, and it found that the procedure had been introduced in some departments but had not yet been introduced in others.’",
              "Model answer: The review found uneven adoption of the new procedure. Method: combined repeated passive constructions and replaced the detailed restatement with a precise summary of partial adoption.",
              "Keep the fact that adoption varied across departments.",
            ),
            p(
              "Compress: ‘The proposal is not only expensive but also slow to implement, and these two characteristics together make it difficult to justify when faster and less costly alternatives appear to be available.’",
              "Model answer: The proposal's cost and delay weaken it against faster, cheaper alternatives. Method: nominalised the two reasons and fused them into the main judgement.",
              "Preserve the comparative assessment rather than stating only that the proposal is difficult.",
            ),
            p(
              "Compress while preserving ambiguity: ‘The ending can be interpreted as an acceptance of loss, but it can also be interpreted as a refusal of reconciliation, and the text does not resolve the tension between these two readings.’",
              "Model answer: The ending holds acceptance of loss and refusal of reconciliation in unresolved tension. Method: replaced repeated interpretive frames with a parallel noun structure while retaining both readings.",
              "Do not choose one interpretation; the unresolved tension is the point.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is the goal of syntactic economy?", ["To remove redundant verbal work without losing meaning or force", "To remove all qualifications", "To make every sentence identical"], 0, "Economy reduces reader effort while preserving the proposition and rhetoric."),
        q(2, "When is ellipsis useful?", ["In clear parallel structures where omitted elements are recoverable", "Whenever a verb seems difficult", "Only in references"], 0, "Controlled omission avoids repetition without obscuring grammar."),
        q(3, "What must a writer preserve when interpreting an ambiguous text?", ["The productive tension between defensible readings", "Only the writer's preferred meaning", "Every possible interpretation equally"], 0, "Fidelity to ambiguity may require resisting a single resolution."),
        q(4, "Which revision is the strongest?", ["The policy should be implemented in order to be put into effect.", "The policy should take effect.", "Effect should be effected."], 1, "The direct verb removes an empty frame without changing the proposition."),
      ],
    },
    {
      slug: "metaphor-and-figurative-precision",
      title: "Metaphor and figurative precision",
      summary:
        "Create coherent figurative systems that clarify abstract relationships, reveal values and carry argument without drifting into mixed or decorative imagery.",
      objective:
        "Extend and revise a controlling metaphor, diagnose mixed vehicles and distinguish productive ambiguity from imprecision.",
      minutes: 35,
      blocks: [
        {
          type: "text",
          title: "A metaphor is an argument about relation",
          paragraphs: [
            "Metaphor does more than decorate. Calling a budget a ‘ceiling’ implies a limit that should not be crossed; calling it a ‘container’ invites questions about capacity and what may be added. The figurative frame selects features and suppresses others, so it carries a model of the subject.",
            "Precision depends on coherence and inference. An extended metaphor develops implications that remain compatible with its vehicle. A mixed metaphor forces incompatible physical scenes together and interrupts conceptual understanding. Freshness is less important than necessity: the image should reveal a relationship that literal language would state less economically.",
          ],
        },
        {
          type: "table",
          title: "Test the figurative frame",
          columns: ["Metaphor", "What it foregrounds", "What it suppresses", "Argumentative implication"],
          rows: [
            ["The market is an ecosystem", "Interdependence, adaptation and niches", "Designed rules and unequal power", "Change may have unintended cascading effects."],
            ["The market is a machine", "Inputs, outputs and controllable mechanisms", "Culture, trust and emergence", "Failures can be repaired through targeted adjustment."],
            ["Debate is a contest", "Opposition, strategy and winning", "Shared inquiry and revision", "The aim may become defeat rather than understanding."],
            ["Knowledge is a network", "Connections, routes and distributed access", "Authority, provenance and quality", "Connectivity may be valued over verification."],
          ],
          caption: "Choose the vehicle for the inference it enables, not for its surface attractiveness.",
        },
        {
          type: "examples",
          title: "Extend, refine or replace",
          items: [
            {
              text: "Decorative: ‘The organisation is a ship sailing through stormy seas.’ Analytical: ‘The new department was treated as a deckhand: expected to obey established routines before it had learned the ship's purpose. Its later independence mattered because adaptation required understanding, not merely compliance.’",
              note: "The revision extends the vehicle into a specific institutional relationship rather than collecting nautical images.",
            },
            {
              text: "Mixed: ‘We must navigate the minefield of bottlenecks to break the deadlock.’ Revised: ‘We must clear the procedural bottlenecks that have stalled decisions.’",
              note: "The original combines navigation, explosives and blockage; the revision either uses a literal phrase or sustains one frame.",
            },
            {
              text: "Cliché: ‘The policy opened a can of worms.’ Revised: ‘The policy exposed a conflict between local autonomy and central accountability.’",
              note: "The literal statement names the actual conceptual problem without relying on a stock image.",
            },
          ],
        },
        {
          type: "rules",
          title: "Figurative control",
          items: [
            "State the conceptual work the image performs: explanation, evaluation, emphasis or memory.",
            "List the features of the vehicle, then check that each extension is compatible with them.",
            "Do not mix vehicles within a sentence unless the friction is intentional and interpretable.",
            "Test the political and ethical implications: who hunts, who is trapped, who controls the machine?",
            "Revise dead metaphors into literal language when precision matters more than recognisability.",
            "Keep the image subordinate to the claim; the reader should not need to solve the metaphor before understanding the argument.",
          ],
        },
        {
          type: "exercise",
          title: "Judge figurative precision",
          instructions: "Choose the image or revision that best supports the intended analytical meaning.",
          items: [
            c(
              "Which extension is most coherent with ‘The institution has an immune system’?",
              ["It treats unfamiliar proposals as threats and expels them through informal gatekeeping.", "Its audit committee produces antibodies of transparency.", "Its roof leaks and its engine overheats."],
              0,
              "Gatekeeping as expulsion extends the immune-system frame; the other options mix unrelated vehicles.",
            ),
            c(
              "Which metaphor best captures distributed but uneven access to information?",
              ["A flat mirror", "A network with congested nodes", "A locked vault"],
              1,
              "A network foregrounds connection, while congested nodes preserve the inequality of access.",
            ),
            c(
              "What is the main problem with a mixed metaphor?",
              ["It forces incompatible frames together and can obscure the intended relation", "It always contains a technical word", "It cannot appear in academic prose"],
              0,
              "Conceptual incompatibility distracts from the proposition and can create unintended meanings.",
            ),
            c(
              "When should a figurative phrase be replaced by literal language?",
              ["Whenever it is memorable", "Only in introductions", "When the image is dead, decorative or politically misleading"],
              2,
              "Literal language is preferable when the figure adds no necessary inference or distorts the subject.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a controlling metaphor",
          instructions: "Develop a short figurative passage about public consultation, then test its implications.",
          items: [
            p(
              "Choose one vehicle—stage, archive, filter or watershed—and write a sentence that explains what consultation does, not merely how it looks.",
              "Model answer: A public consultation is a filter: it lets some concerns pass into the decision while others are screened out by timing, language and access.",
              "Make the selection mechanism part of the conceptual meaning.",
            ),
            p(
              "Extend the same metaphor with one further implication and one limitation.",
              "Model answer: The filter is not neutral, because its mesh determines which objections remain visible. Yet a filter also removes debris, so exclusion may be legitimate when it protects the decision from irrelevant repetition.",
              "Stay within the vehicle's features and acknowledge a function as well as a risk.",
            ),
            p(
              "Write a final literal sentence that returns the reader to the argument without repeating the metaphor.",
              "Model answer: Consultation design therefore determines not only how much comment is collected but whose concerns acquire institutional visibility.",
              "Translate the figurative insight into a precise analytical claim.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What does a metaphor contribute to an argument?", ["It always makes prose more formal", "It models a relationship by foregrounding some features and suppressing others", "It replaces evidence"], 1, "Figurative framing can shape interpretation and implication."),
        q(2, "What makes an extended metaphor coherent?", ["Compatible implications developed from one vehicle", "A new vehicle in every sentence", "Increasing numbers of adjectives"], 0, "Coherence depends on maintaining the logic of the figurative frame."),
        q(3, "Why can a familiar metaphor be risky?", ["It is grammatically incorrect", "Readers cannot understand images", "It may conceal assumptions through dead or stereotyped framing"], 2, "A stock image may carry unexamined values or add no analytical precision."),
        q(4, "What is the best test of figurative usefulness?", ["Whether it is the most original phrase", "Whether it reveals a necessary relationship and can survive scrutiny", "Whether it contains at least two similes"], 1, "Figurative precision is functional and defensible, not merely novel."),
      ],
    },
  ],
};
