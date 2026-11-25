import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2WritingUnit1: LessonUnit = {
  title: "Voice and argument",
  description:
    "Develop an authoritative authorial presence, build arguments that gain force through escalation and hold contested evidence without simplifying it.",
  lessons: [
    {
      slug: "finding-a-credible-voice",
      title: "Finding a credible voice",
      summary:
        "Cultivate an authoritative presence by locating your perspective, calibrating self-reference and grounding judgement in visible ethical and evidential choices.",
      objective:
        "Write in a credible first-person and impersonal voice, explaining how stance, experience and accountability shape authority in a given genre.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Authority is earned through accountable perspective",
          paragraphs: [
            "At C2, voice is not simply more confident prose. It is the discernible presence of a writer who knows why a question matters, what they can responsibly claim and how their position relates to the people affected. Credibility comes from congruence between the writer's judgement, evidence and tone.",
            "First person can strengthen authority when it marks responsibility: ‘I recommend’ identifies who owns a decision. It weakens authority when it substitutes personal reaction for analysis: ‘I feel the policy is wrong’. Impersonal constructions can create useful distance, but they should not conceal agency when power or harm is being discussed. The choice is rhetorical and ethical, not merely grammatical.",
          ],
        },
        {
          type: "table",
          title: "Position the self deliberately",
          columns: ["Writer's role", "Useful stance", "Example", "Risk to avoid"],
          rows: [
            ["Researcher", "Report method and limits of interpretation.", "The comparison supports, but does not establish, a causal reading.", "Personal certainty replacing evidence."],
            ["Adviser", "Own a recommendation and its conditions.", "I recommend a pilot, subject to independent safety review.", "Responsibility hidden behind passive voice."],
            ["Commentator", "Declare a judgement and its standard.", "Measured by access rather than revenue, the scheme has succeeded.", "Unsupported moral superiority."],
            ["Affected participant", "Name experience without universalising it.", "My experience illustrates one barrier; the survey indicates how widely it occurs.", "Treating one experience as representative."],
            ["Public intellectual", "Bridge evidence, values and consequence.", "The evidence is contested; the democratic stakes are not.", "False balance or borrowed prestige."],
          ],
          caption: "The right self-reference depends on the action the sentence performs.",
        },
        {
          type: "examples",
          title: "Three voices with credible control",
          items: [
            {
              text: "Academic: ‘My reading differs from earlier interpretations in one respect: the silence is not evidence of consent, but the condition that makes consent unreadable. The final scene returns to that problem rather than resolving it.’",
              note: "The writer locates a scholarly disagreement and states an interpretation without claiming finality.",
            },
            {
              text: "Professional: ‘We should not approve the rollout yet. I take responsibility for the earlier timetable, but the outstanding accessibility test must be completed before further public commitments.’",
              note: "Ownership and refusal coexist; authority comes from judgement rather than domination.",
            },
            {
              text: "Commentary: ‘The proposal is often praised for prudence. That description mistakes delay for neutrality: keeping fares unchanged while service declines transfers the cost to passengers with the least choice.’",
              note: "The writer contests a favourable label, names the distributional consequence and maintains a clear standard.",
            },
          ],
        },
        {
          type: "rules",
          title: "A credible voice has five anchors",
          items: [
            "Perspective: indicate what you know, how you know it and where your account begins.",
            "Judgement: use evaluative verbs and adjectives only with an explicit standard.",
            "Responsibility: identify who recommends, decides, acts or benefits.",
            "Proportion: let the strongest language fall on the strongest supported claim.",
            "Integrity: acknowledge inconvenient evidence and avoid implying access to motives you cannot observe.",
          ],
        },
        {
          type: "exercise",
          title: "Identify the credible stance",
          instructions: "Choose the version that establishes authority through accountable judgement rather than force or self-display.",
          items: [
            c(
              "Which sentence best positions an adviser making a contested recommendation?",
              ["As everyone knows, this is the only sensible choice.", "I recommend the second option because it meets the safety requirement at lower lifecycle cost, although its maintenance burden remains uncertain.", "I have many years of experience, so trust me."],
              1,
              "The second sentence owns the recommendation, states its comparative basis and preserves a material uncertainty.",
            ),
            c(
              "Which use of first person is most appropriate in a research essay?",
              ["I dislike this theory.", "I interviewed 24 practitioners and coded their accounts by role.", "I think the data prove my brilliance."],
              1,
              "First person is useful for transparent method and responsibility, not for replacing evidence with preference.",
            ),
            c(
              "Which sentence demonstrates ethical accountability?",
              ["The residents misunderstood the benefits.", "Although residents questioned the proposal, their objections were largely emotional.", "The objections raise a distributive issue the proposal has not answered: the highest fares fall on those without alternative routes."],
              2,
              "The third version identifies the substance of the objection and avoids imputing irrational motives.",
            ),
            c(
              "What is the strongest source of authority in public commentary?",
              ["The most forceful adjectives", "A visible connection between evidence, values and consequence", "Avoiding every qualification"],
              1,
              "Readers can assess authority when the writer exposes the reasoning behind a judgement.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write from an accountable position",
          instructions: "Draft three stances on a fictional proposal to use facial recognition at a university library entrance.",
          items: [
            p(
              "Write a research stance that states your evidence base and one limit without claiming neutrality.",
              "Model answer: In reviewing the pilot records and interviewing 18 library staff, I found a mismatch between the promised reduction in queues and the observed processing times; because the interviews did not include students, the account cannot represent their experience of surveillance.",
              "Name the method and the people missing from the evidence.",
            ),
            p(
              "Write an adviser stance that owns a recommendation and its condition.",
              "Model answer: I recommend suspending expansion until an independent accessibility and privacy review is complete; the present evidence does not justify extending a system whose effects on legitimate access remain unresolved.",
              "Use first person to assign responsibility, not to add personal emphasis.",
            ),
            p(
              "Write a commentary stance that evaluates the proposal against a named value and acknowledges a genuine benefit.",
              "Model answer: A university library should be legible as a public institution, not merely efficient as a controlled entrance. Faster entry is a real benefit, but it does not outweigh an opaque system of identification unless its necessity and safeguards can be demonstrated.",
              "State the standard, concede the benefit and explain the priority.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What makes a voice credible at C2?", ["Accountable perspective and proportionate judgement", "Absolute certainty", "Frequent personal anecdotes"], 0, "Credibility depends on transparency about knowledge, values and responsibility."),
        q(2, "When is first person particularly useful?", ["When reporting method or owning a recommendation", "When avoiding evidence", "In every academic sentence"], 0, "First person can clarify agency and responsibility."),
        q(3, "What is a risk of impersonal professional prose?", ["It can obscure who acted or decided", "It cannot contain evidence", "It is always too short"], 0, "Passive and nominalised structures may remove accountability when agents matter."),
        q(4, "Which move best demonstrates integrity?", ["Dismissing inconvenient evidence", "Acknowledging evidence that complicates the preferred position", "Using stronger adjectives"], 1, "Engaging adverse evidence shows that the judgement survives scrutiny."),
      ],
    },
    {
      slug: "the-architecture-of-a-compelling-argument",
      title: "The architecture of a compelling argument",
      summary:
        "Design an argument as an escalating sequence of claims, warrants and turning points rather than a list of reasons of equal weight.",
      objective:
        "Order and connect nested claims so that each section changes the reader's understanding and the final conclusion becomes newly inevitable.",
      minutes: 36,
      blocks: [
        {
          type: "text",
          title: "Compelling arguments create a trajectory",
          paragraphs: [
            "A list of valid points may still be unconvincing. Compelling arguments have an architecture: they establish a problem, alter the reader's framing, test the strongest alternative and arrive at a conclusion that feels earned rather than merely announced. Each stage depends on the one before it.",
            "The order matters. Evidence before the reader understands the relevant question is noise; a rebuttal before the objection exists can sound evasive. Build from the least contested premise to the most demanding inference, using turning points—however, the deeper issue, this distinction allows—to make the intellectual movement visible.",
          ],
        },
        {
          type: "table",
          title: "An escalating argument sequence",
          columns: ["Stage", "Claim", "Warrant or turn", "Effect on the reader"],
          rows: [
            ["1. Shared premise", "The city has a housing affordability problem.", "Agreed evidence establishes the scale.", "Accepts the relevance of the question."],
            ["2. Reframing", "The shortage is not only a supply issue.", "Ownership and finance shape what gets built.", "Sees the problem differently."],
            ["3. Evidence", "Approval speed does not predict affordable output.", "Fictional data compare timelines with tenure mix.", "Rejects a familiar explanation."],
            ["4. Objection", "Faster approval may still help at the margin.", "Concedes modest effects while questioning scale.", "Tests the proposed explanation."],
            ["5. Synthesis", "Land-value capture offers a stronger leverage point.", "Connects infrastructure value to long-term affordability.", "Accepts a more consequential target."],
            ["6. Resolution", "Reform must coordinate approval and value capture.", "Neither lever is sufficient alone.", "Arrives at a qualified action."],
          ],
          caption: "The architecture is recursive: a long essay can contain smaller versions of this sequence.",
        },
        {
          type: "passage",
          title: "Model argument spine: should a library charge for late returns?",
          paragraphs: [
            "The proposal to charge for late returns assumes that the main obstacle to timely return is weak incentive. Yet the library's own fictional survey records lateness at less than 4 per cent, while 19 per cent of respondents report that renewal windows are too short for shift workers. This does not prove that fines are ineffective, but it shifts the question from deterrence to access. Opponents may argue that even low fines encourage responsibility; the answer is that they also discourage return among users least able to pay on time. A better design separates responsibility from penalty: automatic renewal, proportionate reminders and a lost-item process tied to actual replacement cost. On this account, the library should replace routine late fees with renewal reform and targeted support, while retaining charges for unreturned items after repeated contact.",
          ],
        },
        {
          type: "rules",
          title: "Engineer the argument's turns",
          items: [
            "Give each section a proposition, not only a topic label; ‘the finance problem is also an ownership problem’ is stronger than ‘Finance’.",
            "Make the warrant explicit: why does this evidence support this claim?",
            "Use a turning point when your evidence changes the question or reverses an expectation.",
            "Place the strongest counter-argument after the reader understands what your position would explain.",
            "Let earlier sections constrain later ones; a conclusion cannot quietly assume a premise that has not been established.",
            "Finish by stating what the journey has made possible, not by adding a sixth unrelated reason.",
          ],
        },
        {
          type: "exercise",
          title: "Strengthen the architecture",
          instructions: "Choose the sequence or sentence that best advances an argument rather than adding another isolated point.",
          items: [
            c(
              "An essay argues that remote work improves retention. Which section should directly precede the counter-argument?",
              ["Evidence showing how reduced commuting affects the specific workers being discussed", "A general history of offices", "A conclusion recommending immediate implementation"],
              0,
              "The rebuttal should answer the strongest reading of the position after that position has been established.",
            ),
            c(
              "Which sentence is a turning point rather than another supporting detail?",
              ["Participants completed a questionnaire.", "The apparent efficiency gain becomes less persuasive once the cost of correcting failed cases is included.", "The programme ran for six weeks."],
              1,
              "The middle sentence reverses the expected interpretation and changes the direction of the argument.",
            ),
            c(
              "What is a warrant in an argument?",
              ["The reasoning that explains why evidence supports a claim", "A source title", "A decorative quotation"],
              0,
              "The warrant supplies the inferential link; evidence alone does not establish relevance.",
            ),
            c(
              "Why can ‘three reasons’ be a weak essay plan?",
              ["Reasons of equal weight may not form a logical progression", "Academic essays may not have reasons", "Evidence should follow the conclusion"],
              0,
              "Architecture depends on relationships and sequence, not merely the number of points.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build an argument that turns",
          instructions: "Design an argument on whether universities should guarantee internships to every student.",
          items: [
            p(
              "Write a shared premise and a reframing claim that changes what the debate is about.",
              "Model answer: Guaranteed internships would expand access to professional experience. But the central question is not simply who receives an internship; it is whether universities should promise access to labour-market outcomes they cannot fully control.",
              "Begin with common ground, then expose the deeper problem.",
            ),
            p(
              "Add a piece of evidence, a warrant and a turning point. Fictional note: a pilot increased placements by 18 per cent, but 41 per cent were unpaid.",
              "Model answer: In a fictional pilot, placements rose by 18 per cent, suggesting that coordination can widen access; however, 41 per cent were unpaid. The apparent gain therefore turns into a distributive question: an internship without pay may exclude the students the guarantee is meant to help.",
              "Interpret the statistic, then show how it changes the question.",
            ),
            p(
              "Write a synthesis that resolves the tension and a conditional conclusion.",
              "Model answer: Access and remuneration are not rival objectives; without pay, guaranteed access may reproduce exclusion. Universities should guarantee a transparent pathway to paid or credit-bearing placements, with wage support where necessary, rather than promise a placement regardless of its conditions.",
              "Join the two earlier claims instead of choosing one and discarding the other.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What distinguishes an argument from a list of points?", ["A visible inferential progression", "A larger number of quotations", "Longer paragraphs"], 0, "Architecture connects claims so that each stage changes the reader's understanding."),
        q(2, "What is the function of a turning point?", ["To introduce an unrelated topic", "To reverse, deepen or redirect the established line of reasoning", "To mark the end of the bibliography"], 1, "A turning point makes intellectual movement explicit."),
        q(3, "Where should a major rebuttal usually appear?", ["Before the position is explained", "After the reader understands the position it challenges", "Only in a footnote"], 1, "A rebuttal gains force when its objection is recognisable and serious."),
        q(4, "What makes a conclusion feel earned?", ["A new unsupported claim", "A synthesis made possible by the preceding stages", "Repetition of every example"], 1, "The conclusion should reveal the consequence of the argument's development."),
      ],
    },
    {
      slug: "authority-evidence-and-nuance",
      title: "Authority, evidence and nuance",
      summary:
        "Negotiate expert disagreement, combine unlike forms of evidence and express strong reservations without collapsing complexity into false balance.",
      objective:
        "Synthesise conflicting studies and experiential accounts, evaluate source authority and write a nuanced judgement with a clear point of view.",
      minutes: 37,
      blocks: [
        {
          type: "text",
          title: "Nuance is discrimination, not indecision",
          paragraphs: [
            "Nuanced writing shows which differences matter. It does not give every claim equal weight or hide behind ‘on the one hand’. When experts disagree, compare their questions, evidence, assumptions and incentives. A disagreement about average effect may coexist with agreement about severe effects in a subgroup.",
            "Authority is also purpose-specific. A large trial may carry more weight on average treatment effects; a qualitative study may reveal mechanisms that the trial could not observe. The skilled synthesis assigns each source the work it can do, then makes an independent judgement about the relationship between them.",
          ],
        },
        {
          type: "table",
          title: "Compare sources before combining them",
          columns: ["Dimension", "Source A: fictional controlled trial", "Source B: fictional staff interviews", "Synthesis consequence"],
          rows: [
            ["Question", "Does the tool reduce processing time?", "How does the tool change daily work?", "Answers different but complementary questions."],
            ["Evidence", "Timed tasks across 12 teams", "Accounts from 28 frontline staff", "Statistical and experiential authority differ."],
            ["Strength", "Comparable conditions and measurement", "Uncovers workarounds and informal costs.", "Neither should be asked to prove the other's claim."],
            ["Blind spot", "Excludes exceptional cases.", "Cannot estimate prevalence.", "Triangulation remains incomplete."],
            ["Judgement", "Supports average efficiency.", "Supports a possible mechanism of strain.", "Conclude conditionally about implementation."],
          ],
          caption: "Strong synthesis is not averaging incompatible findings; it explains their relationship.",
        },
        {
          type: "examples",
          title: "Nuance with an edge",
          items: [
            {
              text: "False balance: ‘Some experts support the policy and others oppose it, so the evidence is divided.’ Stronger: ‘The disagreement is narrower than the public debate suggests: both groups accept that the intervention reduces average waiting time, but they differ on whether those gains justify its cost for low-volume sites.’",
              note: "The revision locates the actual point of contention instead of counting camps.",
            },
            {
              text: "Weak concession: ‘There are some concerns, but the benefits outweigh them.’ Stronger: ‘The clearest benefits accrue to high-volume sites; low-volume sites face higher fixed costs, so a universal rollout would overstate the case. Targeted adoption is better supported than either universal adoption or rejection.’",
              note: "Nuance becomes useful when it changes the policy recommendation.",
            },
            {
              text: "Over-hedged: ‘The findings might possibly suggest some association.’ Controlled: ‘The evidence supports an association, but the direction of causation remains unresolved because exposure was measured only once.’",
              note: "The writer distinguishes what the design establishes from what it cannot establish.",
            },
          ],
        },
        {
          type: "rules",
          title: "Use a disciplined synthesis sequence",
          items: [
            "Name the common question and the narrower question each source actually answers.",
            "Rank evidence according to the claim: prevalence, mechanism, meaning and causation require different designs.",
            "Identify agreement before disagreement; it often reveals the real boundary of debate.",
            "Separate limitation from refutation: a weak design may lower confidence without reversing a finding.",
            "State your own judgement in a main clause; do not bury it among source summaries.",
            "Make the nuance consequential: identify the group, setting or condition to which the conclusion applies.",
          ],
        },
        {
          type: "exercise",
          title: "Synthesise without flattening",
          instructions: "Choose the response that best evaluates the relationship between sources and maintains a clear judgement.",
          items: [
            c(
              "A large fictional trial finds no average benefit; a subgroup analysis suggests benefit among older participants. What is the best initial judgement?",
              ["The treatment works for older people", "The treatment has no effect", "The subgroup finding is promising but exploratory and needs confirmation before changing practice"],
              2,
              "The result warrants a specific, provisional judgement rather than generalising from a subgroup or ignoring it.",
            ),
            c(
              "Which sentence best combines quantitative and qualitative evidence?",
              ["The trial proves success, while interviews add colour.", "The trial records faster completion, and the interviews suggest that staff achieved this partly by deferring complex cases; together they support efficiency with a caution about case mix.", "People have different opinions about the data."],
              1,
              "The second sentence assigns each source a role and derives a combined interpretation.",
            ),
            c(
              "What distinguishes a limitation from a refutation?",
              ["A limitation lowers confidence in what a source can establish; a refutation supplies grounds for rejecting its claim", "They are identical", "A limitation always proves the opposite"],
              0,
              "Recognising the difference prevents cautious language from becoming evasive.",
            ),
            c(
              "Which statement is the clearest nuanced conclusion?",
              ["Everything is complicated.", "The evidence is mixed and no conclusion is possible.", "The policy is justified for high-volume sites, but its value at low-volume sites is unproven and should be tested before expansion."],
              2,
              "The third version preserves a clear position while identifying the unresolved boundary.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Adjudicate a disagreement",
          instructions: "Use fictional evidence on a four-day school week: test scores were unchanged in one study; attendance and wellbeing improved in another.",
          items: [
            p(
              "Write a synthesis that states agreement, disagreement and the likely reason the studies are not directly comparable.",
              "Model answer: Both fictional studies suggest that a four-day week need not damage attainment, but they operationalise outcomes differently: one measures standardised test scores, while the other combines attendance with wellbeing surveys. Their apparently positive results cannot be treated as equivalent evidence of academic improvement.",
              "Compare constructs before interpreting the findings as conflict or confirmation.",
            ),
            p(
              "Evaluate which source has greater authority for each question: attendance, wellbeing and exam performance.",
              "Model answer: Administrative attendance records carry more weight for attendance; the wellbeing survey is stronger for reported wellbeing if its response rate and wording are sound; neither source can establish long-term exam performance beyond the measured period.",
              "Match source type to claim rather than ranking sources once for all purposes.",
            ),
            p(
              "Write a strong but qualified recommendation of no more than three sentences.",
              "Model answer: Schools may trial a four-day week where attendance and wellbeing are priorities, but they should not present the change as a proven route to higher attainment. Trials should predefine attendance, wellbeing and learning measures and compare them with similar schools. Expansion should depend on results across at least two academic years.",
              "Let the nuance determine the scope, evidence requirement and timeframe of action.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is the first step in synthesising conflicting sources?", ["Average their conclusions", "Compare their questions, methods and constructs", "Choose the newest source"], 1, "Apparent conflict may reflect different questions or measures."),
        q(2, "What makes nuance useful rather than evasive?", ["It identifies the precise boundary and consequence of uncertainty", "It avoids every judgement", "It lists every possible opinion"], 0, "Nuance should refine a position, not dissolve it."),
        q(3, "What is triangulation?", ["Combining different evidence types to examine a claim from complementary angles", "Using three quotations from one author", "Repeating a result until it seems certain"], 0, "Triangulation uses differences in method to strengthen or qualify inference."),
        q(4, "Why is false balance a problem?", ["It gives unsupported claims weight equal to well-supported ones", "It uses too many tables", "It always produces short prose"], 0, "Balance should reflect evidential weight, not symmetry of presentation."),
      ],
    },
    {
      slug: "writing-about-complexity-without-clutter",
      title: "Writing about complexity without clutter",
      summary:
        "Preserve nested relationships and unresolved tensions by controlling subordination, definition and information hierarchy rather than adding endless qualifications.",
      objective:
        "Break a complex proposition into a clear sentence sequence and integrate qualifications without weakening the central claim or losing exceptions.",
      minutes: 35,
      blocks: [
        {
          type: "text",
          title: "Complexity belongs in the thinking, not all in one sentence",
          paragraphs: [
            "A complex idea often contains several relationships: a condition, an exception, a cause and a competing interpretation. The sentence does not have to contain all of them. Use a main clause for the central judgement, then distribute causes, conditions and exceptions across a short sequence whose relationships are visible.",
            "Clutter often comes from equal grammatical status. If every qualification is attached with which, although or in order that, the reader cannot tell what governs what. Subordinate the material that limits the claim and make the decisive contrast carry the main clause. Definition should remove ambiguity, not add another layer of abstraction.",
          ],
        },
        {
          type: "table",
          title: "Distribute a complex proposition",
          columns: ["Layer", "Question", "Example"],
          rows: [
            ["Judgement", "What is the central claim?", "The scheme should be extended selectively."],
            ["Reason", "Why?", "It improves continuity of care for patients with complex needs."],
            ["Condition", "Under what circumstances?", "Extension depends on protected consultation time."],
            ["Exception", "For whom or where does it fail?", "Patients with rare conditions still need specialist transfer."],
            ["Implication", "What follows?", "Expansion should begin in general practice, not replace specialist pathways."],
          ],
          caption: "One layer per sentence is a useful default, though two short layers can share a sentence.",
        },
        {
          type: "examples",
          title: "Unpack, then rebuild",
          items: [
            {
              text: "Cluttered: ‘Although the intervention, which was introduced in response to concerns about inconsistent recording, appears to have improved continuity in most participating sites, its effect in sites with high staff turnover remains uncertain, particularly where consultation time was reduced.’ Clear sequence: ‘The intervention was introduced to address inconsistent recording. Continuity improved at most participating sites, but the result is less secure where staff turnover was high. Reduced consultation time may partly explain the difference. Expansion should therefore include a minimum staffing and consultation standard.’",
              note: "The revision separates purpose, finding, uncertainty, possible mechanism and implication.",
            },
            {
              text: "Cluttered: ‘The claim that the data support both the effectiveness of the programme and its cost-effectiveness, while methodologically limited by the reliance on self-report, should be treated cautiously.’ Clear: ‘The data support effectiveness and cost-effectiveness, but both estimates rely on self-reported outcomes. They should therefore be treated as provisional rather than rejected outright.’",
              note: "A contrast between what is supported and what is uncertain is clearer than a qualification buried before the claim.",
            },
          ],
        },
        {
          type: "rules",
          title: "Control syntactic hierarchy",
          items: [
            "Write the central judgement first and ask which other material qualifies, explains or contradicts it.",
            "Use because for a reason, if for a condition, although for a concession and unless for an exception that would block the claim.",
            "Do not attach more than one major relative clause to a noun phrase; recast the second as a new sentence.",
            "Define a contested term once, close to its first analytical use, and use that definition consistently.",
            "Place the most important qualification in a main clause or short independent sentence when it could reverse the conclusion.",
            "End a sequence with the consequence, not another embedded restatement of the premise.",
          ],
        },
        {
          type: "exercise",
          title: "Simplify the syntax, not the thought",
          instructions: "Choose the version that preserves all material relationships with a clearer hierarchy.",
          items: [
            c(
              "Which version best clarifies a conditional recommendation?",
              ["The scheme should expand if staffing is stable and outcomes are reviewed, except that rare cases still require specialist transfer.", "Expand the scheme, which should work if staffing is stable, although outcomes should be reviewed, while rare cases need transfer.", "The scheme should expand only if staffing remains stable and outcomes are reviewed; rare cases would still require specialist transfer."],
              2,
              "The second version separates the approval condition from the persistent exception.",
            ),
            c(
              "Which sentence best defines a key term without interrupting the argument?",
              ["The term is complicated and difficult.", "Here, ‘continuity’ means that patients retain a named clinician who can access their full history.", "Continuity, which is often discussed in relation to the concept of continuity, matters."],
              1,
              "A precise operational definition gives later claims a stable referent.",
            ),
            c(
              "Which revision reduces clutter while preserving causation and uncertainty?",
              ["It may be that the fall could perhaps be because of the change.", "The fall may reflect the change, although concurrent recruitment makes attribution uncertain.", "The change caused things to fall."],
              1,
              "The middle sentence expresses both a plausible explanation and a specific rival explanation.",
            ),
            c(
              "When should a qualification receive its own sentence?",
              ["Never", "Only at the end of the essay", "When it could reverse the recommendation or change who is covered"],
              2,
              "Decision-changing qualifications deserve prominence rather than syntactic burial.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write complexity in layers",
          instructions: "Develop a paragraph about a fictional flexible-consultation scheme for rural clinics.",
          items: [
            p(
              "Write a one-sentence judgement with a condition. Notes: flexible hours improve attendance; success depends on enough staff to cover the additional sessions.",
              "Model answer: Flexible consultation hours should expand only where clinics can staff the additional sessions without reducing emergency coverage.",
              "Put the recommendation and its blocking condition in a clear hierarchy.",
            ),
            p(
              "Add two sentences that present evidence and a competing explanation without using however more than once. Notes: missed appointments fell 16 per cent; a seasonal transport improvement occurred at the same time.",
              "Model answer: Missed appointments fell by 16 per cent during the pilot, which is consistent with improved access outside standard hours. A seasonal transport improvement offers a competing explanation, so the reduction cannot be attributed to the scheme alone.",
              "State what the evidence supports before naming the uncertainty.",
            ),
            p(
              "Finish with an exception and an implication in two sentences.",
              "Model answer: Patients requiring diagnostic equipment would still need referral to the regional centre. Expansion should therefore improve appointment flexibility without being presented as a substitute for specialist infrastructure.",
              "Use the exception to define the proper scope of the recommendation.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is the clearest default for a complex proposition?", ["Place every relationship in one sentence", "State the central judgement, then distribute reasons and qualifications across linked sentences", "Remove all conditions"], 1, "A sequence with syntactic hierarchy is easier to process than an overloaded sentence."),
        q(2, "Why define a contested term near its first use?", ["To increase vocabulary", "To give later claims a stable meaning", "To avoid reaching a conclusion"], 1, "Definition prevents different interpretations from producing apparent disagreement."),
        q(3, "When should a qualification become prominent?", ["When it could reverse the decision or alter the population covered", "Whenever it is short", "Only in footnotes"], 0, "Material limits should be visible in the main argument."),
        q(4, "What should cutting complexity preserve?", ["Every subordinate clause", "The central claim, material relationships and exceptions", "Only the writer's opinion"], 1, "Clarity comes from restructuring relationships, not deleting them."),
      ],
    },
  ],
};
