import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2SpeakingUnit2: LessonUnit = {
  title: "Rhetoric and influence",
  description:
    "Frame public choices with integrity, shape memorable rhetoric, use humour with judgement and sustain persuasion when powerful audiences scrutinise every move.",
  lessons: [
    {
      slug: "framing-and-narrative",
      title: "Framing and narrative",
      summary:
        "Shape how a public decision is understood without distorting evidence, making legitimate values visible and reframing false dichotomies precisely.",
      objective:
        "Reframe a contested issue by exposing its underlying choices, connecting values to criteria and preserving facts that weaken your preferred frame.",
      minutes: 33,
      blocks: [
        {
          type: "dialogue",
          title: "Reframing the basic-services debate",
          intro:
            "A policy adviser is challenged for describing emergency support as ‘public infrastructure’. The reframe must clarify what the programme does, not disguise its costs.",
          lines: [
            {
              speaker: "Councillor",
              text: "Calling income support ‘infrastructure’ does not make it any less of a handout.",
            },
            {
              speaker: "Adviser",
              text: "The word matters only if it clarifies the function. I mean a predictable service people can rely on before a crisis, like waste collection or emergency response. The programme guarantees rent support for six months after job loss; it is not a permanent transfer.",
            },
            {
              speaker: "Councillor",
              text: "So the debate is still about who pays.",
            },
            {
              speaker: "Adviser",
              text: "It is about who pays and what instability costs. A short-term guarantee is financed by general taxation and has an estimated annual cost of £86 million. The relevant comparison is not with doing nothing; it is with emergency accommodation, debt enforcement and lost employment, which also carry public costs.",
            },
            {
              speaker: "Councillor",
              text: "You are assuming every recipient would otherwise become homeless.",
            },
            {
              speaker: "Adviser",
              text: "No. The evaluation estimates that 18% would have avoided homelessness without the programme, while 31% entered temporary accommodation. I would not claim a universal effect. The case rests on a targeted benefit with an honest estimate, not on saving everyone.",
            },
          ],
        },
        {
          type: "rules",
          title: "Ethical framing tests",
          items: [
            "Name the frame openly: ‘I am describing this as a stability guarantee rather than permanent welfare.’",
            "Preserve the contested fact: a frame may foreground a function, but it cannot conceal cost or eligibility.",
            "Replace a false binary with the real alternatives and their trade-offs.",
            "Connect a value to a criterion: security matters only if it is translated into a testable policy objective.",
            "Include disconfirming evidence inside the frame rather than relegating it to a footnote.",
            "Invite the audience to reject the language while still assessing the underlying proposal.",
          ],
        },
        {
          type: "exercise",
          title: "Distinguish clarification from spin",
          instructions:
            "Choose the framing move that improves public understanding without concealing a material fact or manipulating the decision.",
          items: [
            c(
              "Which frame is most transparent for a proposal to extend library opening hours?",
              [
                "A world-class cultural destination, with no mention of the staffing cost.",
                "A measured extension of evening access, costing £410,000 and requiring weekend overtime.",
                "A gift to the community that critics apparently oppose.",
              ],
              1,
              "The second frame states both the public purpose and the concrete resource implication, allowing informed evaluation.",
            ),
            c(
              "How should a speaker respond when the audience dislikes the word ‘infrastructure’?",
              [
                "Insist that language determines whether the policy is true.",
                "Offer a functional description and invite assessment of the programme without the label.",
                "Replace it with a more flattering but less accurate euphemism.",
              ],
              1,
              "Separating the label from the substance lets the audience evaluate the policy without making vocabulary a test of loyalty.",
            ),
            c(
              "Which statement exposes a false binary?",
              [
                "You either support unrestricted growth or hate the economy.",
                "There are several options, including limiting floor area while allowing greater height.",
                "The choice is between my plan and catastrophe.",
              ],
              1,
              "Naming a concrete third option breaks an artificial either/or and expands the genuine decision space.",
            ),
            c(
              "Which use of evidence strengthens an ethical frame?",
              [
                "Including the 18% of recipients who would have avoided homelessness without the programme.",
                "Presenting only the strongest 31% outcome.",
                "Describing all recipients as people who would otherwise be destitute.",
              ],
              0,
              "Disconfirming evidence shows that the frame is bounded by the evaluation rather than constructed to exclude inconvenient results.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Reframe without rewriting the facts",
          instructions:
            "For each prompt, state the existing frame, the hidden trade-off and a more accurate alternative. Keep the cost or limitation audible.",
          items: [
            p(
              "Reframe a proposal to charge for medical appointments at the point of use.",
              "Model answer: The proposal is being described as a charge for unnecessary demand. I would frame it as a change in when and by whom care is paid for. The estimated £120 million saving may reduce some low-value visits, but it may also delay treatment for people with chronic conditions. We should judge it on health outcomes and distribution, not only on fewer appointments.",
              "Name the claimed function, the savings and the risk that the same mechanism creates."),
            p(
              "Reframe opposition to a new airport terminal as ‘anti-growth’.",
              "Model answer: That label does not describe the actual objection. The concern is whether the terminal's projected jobs justify its emissions and the loss of nearby homes. There are growth options with different carbon and housing costs. The decision should compare them rather than ask whether anyone opposes growth in principle.",
              "Reject the identity label and restore the specific trade-offs to the debate."),
            p(
              "Present a positive frame for a smaller, means-tested childcare subsidy.",
              "Model answer: I would describe this as targeted continuity of care during parental training, not universal free childcare. The scheme would support 8,000 families for two years and cost £34 million annually. Its narrower reach is a deliberate limit, and the evaluation should show whether participants sustain employment after support ends.",
              "Connect the design to its function while keeping coverage and duration explicit."),
          ],
        },
        {
          type: "text",
          title: "A frame is a lens, not a filter",
          paragraphs: [
            "Every public account selects details. The ethical question is whether the selection helps listeners understand the decision or merely makes one conclusion feel inevitable. A useful frame makes the criteria visible and leaves room for a reasoned objection.",
            "When challenged, do not defend the metaphor as if it were evidence. Translate the frame into observable consequences: who is protected, who pays, what changes and how success will be measured. If the translation fails, revise the frame.",
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does the adviser explain what ‘infrastructure’ means?",
          [
            "To conceal the programme's annual cost.",
            "To clarify the claim that the service provides predictable pre-crisis support.",
            "To suggest that criticism is unpatriotic.",
          ],
          1,
          "The adviser ties the metaphor to a specific function so the audience can evaluate it rather than react to a flattering label.",
        ),
        q(
          2,
          "Why is the comparison with emergency accommodation relevant?",
          [
            "It shows that doing nothing has no public cost.",
            "It replaces the programme's £86 million estimate with a larger claim.",
            "It exposes the real alternative costs instead of framing the decision as spending versus no spending.",
          ],
          2,
          "Including the costs of instability broadens the comparison to the actual alternatives and their consequences.",
        ),
        q(
          3,
          "What makes the 18% finding important to the frame?",
          [
            "It limits the claim that all recipients would otherwise become homeless.",
            "It proves the programme has no benefit.",
            "It allows the audience to ignore the 31% outcome.",
          ],
          0,
          "The disconfirming subgroup keeps the causal claim proportionate and demonstrates that the frame is evidence-led.",
        ),
        q(
          4,
          "Which approach is most ethical when an audience rejects your label?",
          [
            "Describe the policy in functional terms and invite evaluation without the label.",
            "Replace it with a more persuasive euphemism.",
            "Treat rejection of the label as rejection of the facts.",
          ],
          0,
          "A functional description separates rhetoric from substance and lets the audience judge the actual policy.",
        ),
      ],
    },
    {
      slug: "rhetorical-devices-in-speech",
      title: "Rhetorical devices in speech",
      summary:
        "Deploy parallelism, antithesis, tricolon and rhetorical questions with control so each device clarifies a public argument rather than merely ornamenting it.",
      objective:
        "Construct a memorable speech passage in which rhetorical devices reveal relationships, build momentum and culminate in a precise request.",
      minutes: 32,
      blocks: [
        {
          type: "dialogue",
          title: "The speech to save the night library",
          intro:
            "A librarian addresses a funding committee. The devices are labelled in the analysis below the dialogue; read the speech first without announcing them.",
          lines: [
            {
              speaker: "Librarian",
              text: "A library is not only a building with books. It is a warm room after a failed interview. It is the only quiet place a shift worker has before midnight. [Pause.] When we say we are closing a library, we are not merely moving a service; we are removing an address where people can still be welcomed.",
            },
            {
              speaker: "Committee chair",
              text: "Sentiment cannot balance the budget.",
            },
            {
              speaker: "Librarian",
              text: "Nor should it. The night branch costs £310,000 a year, and I will not pretend otherwise. But it supports 1,400 weekly visits, including 260 by people studying outside standard hours. The choice is not romance versus arithmetic. It is whether the arithmetic includes what a quiet, safe room prevents as well as what it costs.",
            },
            {
              speaker: "Committee chair",
              text: "What would another year of funding allow you to demonstrate?",
            },
            {
              speaker: "Librarian",
              text: "We would publish attendance, study outcomes, referrals to local services and the cost per supported visit. If the value is not there, the evidence should be allowed to say so.",
            },
            {
              speaker: "Librarian",
              text: "We can move the books. We cannot move the trust built over thirty years. We cannot replace the room simply by pointing to a website. Fund the service for one more year, publish its outcomes and make the next decision on evidence rather than nostalgia.",
            },
          ],
        },
        {
          type: "table",
          title: "Devices with distinct jobs",
          columns: ["Device", "Function", "Example"],
          rows: [
            ["Anaphora", "Accumulates meaning through repeated openings.", "We cannot move the books. We cannot move the trust …"],
            ["Antithesis", "Exposes a contrast that organises the argument.", "Not romance versus arithmetic, but a fuller account of cost."],
            ["Tricolon", "Creates a memorable, complete set.", "A warm room, a quiet place, a trusted address."],
            ["Rhetorical question", "Invites the audience to supply the obvious answer.", "What is a safe room worth if only the comfortable can use it?"],
            ["Callback", "Returns to an earlier image with changed meaning.", "The library as an address, not merely a building."],
          ],
          caption:
            "Use one dominant device in a short passage. A cluster can become incantatory, but it can also hide the absence of evidence if the rhythm is doing all the work.",
        },
        {
          type: "exercise",
          title: "Choose the device that earns its place",
          instructions:
            "Select the rhetorical choice that most clearly serves the argument. Then identify the proposition the device makes easier to understand.",
          items: [
            c(
              "Which anaphora best develops an argument about emergency planning?",
              [
                "A plan, a plan, a very important plan.",
                "A warning must be heard, understood and acted on.",
                "Some people disagree, while others may not agree.",
              ],
              1,
              "The parallel verbs form a causal sequence, so the repetition advances the argument rather than merely decorating it.",
            ),
            c(
              "Which antithesis exposes a genuine choice?",
              [
                "The choice is not between perfect evidence and reckless guesswork, but between a bounded pilot and no learning at all.",
                "This is both completely different and exactly the same.",
                "Either my plan is flawless or everything is doomed.",
              ],
              0,
              "The first contrast distinguishes responsible experimentation from a false demand for certainty or inaction.",
            ),
            c(
              "Which rhetorical question is most useful?",
              [
                "Why are my opponents so terrible?",
                "Could anyone possibly deny my brilliance?",
                "What public value disappears if the only remaining service is digital?",
              ],
              2,
              "The third question directs attention to a substantive consequence that the speech can then answer with evidence.",
            ),
            c(
              "When should a speaker avoid a tricolon?",
              [
                "Whenever three ideas naturally form a meaningful set.",
                "When three items would flatten an important distinction or pad a weak point.",
                "Whenever the audience values clarity.",
              ],
              1,
              "A tricolon can oversimplify when the third item is false, redundant or less important; form must not dictate meaning.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Compose a rhetorical passage with substance",
          instructions:
            "Write a sixty-second passage using two devices at most. Underline the factual support and check that removing the devices would not destroy the argument.",
          items: [
            p(
              "Persuade a council to fund youth outreach at night.",
              "Model answer: Outreach is not a reward for bad behaviour; it is contact before harm becomes emergency. Workers can only reach a young person who knows where to find them, trust them enough to speak and believes help will arrive. The pilot reached 180 young people and referred 46 to sustained support. Fund the service for twelve months, publish the referral outcomes and judge it by what changes, not by how uncomfortable the conversation feels.",
              "Use antithesis, a three-part condition and a concrete evidence-based request."),
            p(
              "Argue for preserving public rehearsal space for amateur musicians.",
              "Model answer: A rehearsal room is not a luxury for people who have already succeeded. It is where a first ensemble learns to listen, where an instrument can be played without disturbing neighbours and where a teenager discovers that practice is collective. The proposed closure saves £90,000 while removing 1,100 booked hours. Before deciding, compare that saving with the cost of losing access that no commercial venue currently replaces.",
              "Use anaphora and a callback to access, then return to the measurable trade-off."),
            p(
              "Speak in favour of slower planning decisions in a fast-moving city.",
              "Model answer: Speed matters. So does the cost of reversing a mistake. [Pause.] A hurried decision can consume a decade of consultation, litigation and repair. I propose fixed deadlines with earlier evidence, not indefinite delay. Let us move quickly at the beginning, when options are open, rather than discovering the objections after the concrete is poured.",
              "Use antithesis to distinguish purposeful tempo from delay, then make a practical proposal."),
          ],
        },
        {
          type: "tip",
          title: "Never let rhythm outrun evidence",
          text: "Rhetorical devices reveal relationships already present in the argument; they do not create evidence. After composing a memorable line, ask what fact or principle supports it. If the answer is only ‘it sounds strong’, revise the line. The most persuasive speech makes the audience feel the shape of a defensible case, not merely the skill of its author.",
        },
      ],
      quiz: [
        q(
          1,
          "What is the main function of the repeated ‘It is …’ openings?",
          [
            "To accumulate concrete meanings of the library as a social place.",
            "To conceal the branch's operating cost.",
            "To make every sentence sound equally important.",
          ],
          0,
          "The anaphora builds a set of specific social functions that supports the claim that closure removes more than book storage.",
        ),
        q(
          2,
          "Why does the librarian acknowledge the £310,000 cost?",
          [
            "To abandon the case for funding.",
            "To show that the argument will include the financial objection rather than evade it.",
            "To suggest that cost is irrelevant.",
          ],
          1,
          "Acknowledging the real cost establishes credibility and allows the speech to argue about what a complete account of value should include.",
        ),
        q(
          3,
          "What does the antithesis ‘not romance versus arithmetic’ accomplish?",
          [
            "It claims that financial evidence is unnecessary.",
            "It rejects a false choice between emotion and finance and proposes a fuller calculation.",
            "It proves that every library must remain open.",
          ],
          1,
          "The contrast broadens the definition of cost and benefit without dismissing the need for arithmetic.",
        ),
        q(
          4,
          "When does a rhetorical device become manipulative?",
          [
            "Whenever it is memorable.",
            "Whenever it repeats a phrase.",
            "When its form conceals a false claim, suppresses a material distinction or substitutes for evidence.",
          ],
          2,
          "The ethical issue is not the device itself but whether it clarifies the case or makes a weak or misleading conclusion feel inevitable.",
        ),
      ],
    },
    {
      slug: "humour-and-timing",
      title: "Humour and timing",
      summary:
        "Use observation, affectionate exaggeration and well-timed callbacks to build connection without humiliating others or obscuring a serious message.",
      objective:
        "Deliver humour that suits the relationship and occasion, recover from a failed joke and return cleanly to the substantive point.",
      minutes: 30,
      blocks: [
        {
          type: "dialogue",
          title: "The retirement tribute",
          intro:
            "A former student is roasting a retiring headteacher at a staff dinner. The humour targets shared habits and the speaker's own history, not the guest's vulnerabilities.",
          lines: [
            {
              speaker: "Speaker",
              text: "When I asked Mrs Okafor how to make a difficult decision, she said, ‘First, remove the word difficult.’ At seventeen, I found that irritating. At forty-two, with a budget spreadsheet open, I have decided it is the most practical advice I have ever ignored.",
            },
            {
              speaker: "Guest",
              text: "I remember your first report. It was beautifully formatted and entirely blank.",
            },
            {
              speaker: "Speaker",
              text: "That is generous. It was blank, but the margins were exceptionally disciplined. [Pause for laughter.] Mrs Okafor taught me that clarity is a form of respect. She could make a timetable, a budget and an anxious teenager feel that all three were solvable.",
            },
            {
              speaker: "Guest",
              text: "And the margins?",
            },
            {
              speaker: "Speaker",
              text: "Still exemplary. The report may have been empty, but it was never visually careless. [Brief pause.] She taught us to respect the reader before we had learned to respect the subject.",
            },
            {
              speaker: "Speaker",
              text: "The other lesson came from her refusal to let us use ‘the students’ as if we were discussing the weather. Every difficult decision had a name, a family and a future attached. So thank you for the discipline, the margins and the reminder that administration is never only administration.",
            },
          ],
        },
        {
          type: "table",
          title: "Humour choices and consequences",
          columns: ["Choice", "Why it can work", "Boundary"],
          rows: [
            ["Self-deprecation", "Reduces status distance without inviting contempt", "Do not make the audience responsible for your dignity."],
            ["Shared observation", "Signals belonging and recognisable experience", "Avoid mocking a person's accent, body or private history."],
            ["Affectionate exaggeration", "Makes a harmless habit memorable", "Do not exaggerate a contested professional failure."],
            ["Callback", "Creates payoff and rewards attention", "Keep it brief; a callback should not restart the whole joke."],
            ["Dry understatement", "Allows the audience to infer the absurdity", "Do not use irony where direct reassurance is required."],
            ["Recovery", "Shows composure when timing misses", "Do not blame the audience or repeat the failed joke louder."],
          ],
          caption:
            "Test the humour against the person being honoured and the least powerful listener in the room. If it needs a victim to work, choose a different target.",
        },
        {
          type: "exercise",
          title: "Choose the better-timed joke",
          instructions:
            "Select the line that builds connection at the appropriate moment and leaves the serious message intact.",
          items: [
            c(
              "A colleague has accidentally muted himself during an important call. Which response is warmest?",
              [
                "We have received your silence with great interest; when you are ready, we would welcome the dissent.",
                "You clearly have nothing useful to add.",
                "Technology has finally solved the problem of long meetings.",
              ],
              0,
              "The first line gently interprets the situation and gives the colleague an easy way back into the conversation without humiliation.",
            ),
            c(
              "A joke fails during a serious tribute. What should the speaker do?",
              [
                "Explain why the audience should have laughed.",
                "Pause briefly, acknowledge the mismatch and return to the sincere point.",
                "Tell a second, riskier joke immediately.",
              ],
              1,
              "A calm reset protects both the speaker and the occasion; over-explaining or escalating would magnify the failure.",
            ),
            c(
              "Which target is appropriate for self-deprecating humour at a professional dinner?",
              [
                "Your own early habit of over-preparing trivial decisions.",
                "A junior colleague's disability.",
                "A sensitive family event known only to the guest.",
              ],
              0,
              "The speaker's own harmless habit creates connection without exposing or diminishing someone with less power.",
            ),
            c(
              "Where is the best place for a callback in a tribute?",
              [
                "Before the audience has heard the original reference.",
                "After a substantive point, as a brief bridge into the final thanks.",
                "At the exact moment of a painful confession.",
              ],
              1,
              "A callback works when it recalls a shared reference and moves the speech forward rather than interrupting emotional weight.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a humane humorous turn",
          instructions:
            "Prepare one observation, one mild exaggeration and one callback. Deliver with a pause before the payoff, and practise a recovery line if no one laughs.",
          items: [
            p(
              "Roast a project manager affectionately at a team dinner.",
              "Model answer: I admired Sam's calendars so much that I once asked whether he scheduled spontaneity. He replied that spontaneity was on Tuesday, subject to confirmation. [Pause.] In fairness, that discipline kept a difficult launch calm. When the rest of us had six versions of the plan, Sam had one, and it was usually current. So here is to the man who made order feel like support rather than control.",
              "Target the shared calendar habit, acknowledge the professional benefit and end with sincere appreciation."),
            p(
              "Use humour to open a budget meeting without minimising the cuts.",
              "Model answer: I have been given two envelopes: one contains the budget, and the other contains the remaining goodwill. [Pause.] We will need both, so I propose spending the goodwill carefully. The reductions are serious; the meeting will be shorter because we have already agreed the criteria, not because the decisions are easy.",
              "Let the joke release tension, then explicitly protect the seriousness of the decision."),
            p(
              "Recover when an affectionate joke about a guest falls flat.",
              "Model answer: That one landed with the precision of a missed penalty. [Brief smile.] Let me put the point more plainly: Asha's attention to detail has saved this team more often than any of our dashboards. The story I should have told is the time she noticed a date error that would have cancelled the entire training cohort.",
              "Do not demand laughter; acknowledge lightly and replace the failed joke with a true, concrete tribute."),
          ],
        },
        {
          type: "tip",
          title: "Timing protects the relationship",
          text: "A pause before the key word lets the audience reach the joke with you. Do not rush through a payoff or explain it twice. When the room includes people who may feel exposed, favour shared situations over personal characteristics. The most durable humour makes everyone feel more included when it ends.",
        },
      ],
      quiz: [
        q(
          1,
          "Why is the joke about the blank report appropriate?",
          [
            "It humiliates the guest in front of colleagues.",
            "It draws on a shared, harmless history and reveals the speaker's own early inexperience.",
            "It avoids mentioning the guest's professional contribution.",
          ],
          1,
          "The joke uses an affectionate shared memory and self-deprecation, preserving dignity while creating connection.",
        ),
        q(
          2,
          "What should happen after a joke fails?",
          [
            "Blame the audience for lacking sophistication.",
            "Repeat it more loudly until someone laughs.",
            "Acknowledge the mismatch briefly and return to the substantive or sincere point.",
          ],
          2,
          "A calm recovery prevents a minor timing failure from becoming a larger disruption or humiliation.",
        ),
        q(
          3,
          "What makes the callback to the blank report effective?",
          [
            "It recalls a shared reference and supports the tribute to clarity and discipline.",
            "It introduces a new sensitive fact about the guest.",
            "It makes the audience forget the financial context.",
          ],
          0,
          "The callback connects the humour to the speech's theme and demonstrates that the joke serves the tribute.",
        ),
        q(
          4,
          "Which is the safest humour target in a high-stakes professional setting?",
          [
            "A junior employee's accent.",
            "A sensitive family matter.",
            "The speaker's own harmless habit or a shared situation.",
          ],
          2,
          "Self-directed or situational humour reduces status distance without exposing someone with less power to ridicule.",
        ),
      ],
    },
    {
      slug: "persuasion-under-scrutiny",
      title: "Persuasion under scrutiny",
      summary:
        "Sustain a contested policy case through hostile questions by separating values, evidence and implementation while refusing false certainty and easy slogans.",
      objective:
        "Defend a high-cost public policy under scrutiny using calibrated claims, substantive concessions and a final comparison the audience can evaluate.",
      minutes: 34,
      blocks: [
        {
          type: "dialogue",
          title: "The carbon-tax hearing",
          intro:
            "An economist proposes a carbon tax while households face rising living costs. The exchange tests whether persuasion survives distributional, evidential and political objections.",
          lines: [
            {
              speaker: "Economist",
              text: "I support a carbon tax because the price of emissions is currently absent from most purchasing decisions. I propose returning the revenue as targeted household rebates and protecting exposed industries through a transitional adjustment.",
            },
            {
              speaker: "Questioner",
              text: "You want to make poor people pay more before they get anything back.",
            },
            {
              speaker: "Economist",
              text: "That is a real distributional risk, especially if the rebate arrives after the price rise. The design should prepay the first three months of support and exempt essential heating use for the lowest-income group. Without those measures, I would not recommend the tax.",
            },
            {
              speaker: "Questioner",
              text: "And the evidence that it reduces emissions?",
            },
            {
              speaker: "Economist",
              text: "The strongest evaluations show reductions in covered sectors, but the effect varies with alternatives and price level. I cannot promise a precise national outcome. We should publish annual sectoral emissions, household impacts and the rebate delivery rate so the policy can be corrected openly.",
            },
            {
              speaker: "Questioner",
              text: "Why not simply regulate instead?",
            },
            {
              speaker: "Economist",
              text: "Regulation is better where a specific harmful practice must stop. A tax can reward multiple ways of reducing emissions, including innovations a regulator cannot specify in advance. The strongest package combines both: clear standards and a price signal. I ask the committee to assess that package against the cost of unmanaged climate risk, not against a cost-free alternative.",
            },
          ],
        },
        {
          type: "rules",
          title: "Persuasion when every move is tested",
          items: [
            "State the policy mechanism before defending its values: what behaviour does the instrument change, and how?",
            "Name the strongest cost at full strength; a weakened version of the objection is easy to answer and persuasive to no one.",
            "Make the concession design-specific: ‘prepay rebates’ rather than ‘we care about fairness’.",
            "Calibrate the evidence claim to the evaluation design and the relevant context.",
            "Compare real alternatives, including their costs, rather than a perfect policy and an unchanged status quo.",
            "End with the decision criteria and a bounded request, not an appeal to trust the expert.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the scrutiny-resistant response",
          instructions:
            "Select the response that advances the policy case while keeping the objection, evidence and uncertainty visible.",
          items: [
            c(
              "A questioner says the policy will hurt the poorest households first. Which response is strongest?",
              [
                "That is not true because most people care about the environment.",
                "The timing risk is real, so the design should prepay support and exempt essential heating for the lowest-income group.",
                "The poorest will benefit eventually, so the transition does not matter.",
              ],
              1,
              "The response accepts the distributional timing problem and offers concrete design changes rather than dismissing the objection.",
            ),
            c(
              "Which evidence claim is appropriately calibrated?",
              [
                "Every carbon tax in every country has produced exactly the same reduction.",
                "The evidence is mixed, so the policy can have no effect.",
                "Evaluations show reductions in covered sectors, though the effect varies with design and available alternatives.",
              ],
              2,
              "The third statement preserves the directional finding while acknowledging the conditions that limit prediction.",
            ),
            c(
              "Which comparison is most honest?",
              [
                "Compare the policy with doing nothing at no cost.",
                "Compare a tax-and-regulation package with the status quo's unmanaged emissions and with regulation alone.",
                "Compare the policy only with the speaker's ideal version.",
              ],
              1,
              "The second comparison includes the actual alternatives and their costs, making the choice more realistic and transparent.",
            ),
            c(
              "What is the strongest final request under scrutiny?",
              [
                "Trust us and approve the whole policy permanently today.",
                "Reject the policy because no uncertainty exists in the evidence.",
                "Approve a bounded design with published household and emissions measures, and review it annually.",
              ],
              2,
              "The bounded request combines action with observable evaluation and preserves the possibility of correction.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Defend a costly policy under pressure",
          instructions:
            "Prepare a mechanism, a distributional safeguard, an evidential limit and a real alternative. Deliver each answer in under ninety seconds.",
          items: [
            p(
              "Defend congestion charging when a shopkeeper predicts economic collapse.",
              "Model answer: The charge could reduce passing trade, and that cost must be measured rather than dismissed. We propose exempting disabled-access journeys, providing delivery windows and publishing monthly footfall before the charge begins. If retail turnover falls materially and does not recover after the transition period, the scheme should be revised. The alternative also has costs: congestion already delays deliveries and reduces access to the centre.",
              "Concede the business risk, specify safeguards and compare with the status quo."),
            p(
              "Defend a higher minimum wage against a warning about job losses.",
              "Model answer: The employment effect depends on market power, productivity and the size of the increase. The most relevant local evidence suggests limited losses in concentrated sectors, but it does not settle effects in low-margin services. I support a staged increase with small-employer support and regional monitoring. If unemployment rises disproportionately in affected sectors, the next stage should be reviewed.",
              "State the mechanism and evidence limits, then tie the pace to observable consequences."),
            p(
              "Defend a means-tested school-meal policy against charges of stigma.",
              "Model answer: Stigma is a genuine design failure, not a reason to pretend universal provision has no cost. Automatic enrolment, discreet payment and universal free meals for the youngest years can reduce visible targeting while preserving support. The budget still requires a clear eligibility rule. I would judge the system by uptake among eligible children and by reported embarrassment, not only by the number of meals served.",
              "Turn the objection into measurable design criteria while retaining the resource constraint."),
          ],
        },
        {
          type: "text",
          title: "Persuasion is not the elimination of doubt",
          paragraphs: [
            "Under sustained scrutiny, the aim is to make a decision despite uncertainty, not to eliminate every uncertainty before speaking. A persuasive speaker shows why the chosen action is better than the available alternatives under known risks.",
            "Avoid converting every challenge into a defence of your original wording. If a questioner identifies a genuine implementation weakness, revise the recommendation. Visible integrity under pressure is more persuasive than perfect consistency with an indefensible first position.",
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does the economist make support conditional on prepaid rebates?",
          [
            "To remove the need to discuss distribution.",
            "To ensure the transition does not impose the largest immediate burden on low-income households.",
            "To claim that the tax has no cost.",
          ],
          1,
          "The design condition directly addresses the timing of costs and support, which is the substance of the distributional objection.",
        ),
        q(
          2,
          "Which claim best reflects the evidence in the dialogue?",
          [
            "Carbon taxes reduce emissions only where regulation is absent.",
            "Every country can expect precisely the same result.",
            "Covered-sector reductions are observed, but the size varies with design and alternatives.",
          ],
          2,
          "The statement keeps the directional finding while avoiding an unsupported universal prediction.",
        ),
        q(
          3,
          "Why combine standards with a price signal?",
          [
            "Because standards can stop specific harms while a price can reward multiple reduction methods.",
            "Because no regulation has ever been effective.",
            "Because the combination removes the need for monitoring.",
          ],
          0,
          "The instruments address different mechanisms: direct prohibition or requirements and incentives across many choices.",
        ),
        q(
          4,
          "What is the strongest evidence of persuasion under scrutiny?",
          [
            "The audience stops asking difficult questions.",
            "The speaker never changes a sentence of the original proposal.",
            "The case survives substantive objections through evidence, concessions and an evaluable request.",
          ],
          2,
          "Persuasion is demonstrated when the reasoning remains credible after challenge, not when challenge is suppressed.",
        ),
      ],
    },
  ],
};
