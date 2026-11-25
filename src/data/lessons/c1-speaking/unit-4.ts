import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1SpeakingUnit4: LessonUnit = {
  title: "High-stakes interaction",
  description:
    "Negotiate multi-issue outcomes, de-escalate genuine disagreement, use diplomatic language precisely, chair difficult discussions and assemble a final speaking portfolio.",
  lessons: [
    {
      slug: "negotiating-complex-outcomes",
      title: "Negotiating complex outcomes",
      summary:
        "Move beyond positional bargaining by identifying interests, trading across issues and using conditional proposals to create workable agreements.",
      objective:
        "Negotiate a multi-issue outcome with clear interests, explicit trade-offs, contingencies and a recorded agreement.",
      minutes: 34,
      blocks: [
        {
          type: "dialogue",
          title: "Renewing the hospital supply contract",
          intro:
            "A hospital wants stable supply and lower cost; the supplier wants forecast certainty and a longer commitment. Listen for interests beneath positions and for conditional trades.",
          lines: [
            {
              speaker: "Hospital",
              text: "We need a 12% reduction across the contract. Your current prices are no longer affordable.",
            },
            {
              speaker: "Supplier",
              text: "A uniform cut would force us to reduce the safety-stock reserve. We could consider a longer term if demand becomes more predictable.",
            },
            {
              speaker: "Hospital",
              text: "Then let us separate price from risk. You need forecast certainty; we need protected stock and a transparent indexation formula. If we provide a rolling twelve-month forecast and a two-year minimum volume, would you hold the safety stock and cap annual indexation at 3%?",
            },
            {
              speaker: "Supplier",
              text: "That could work for core products, but the minimum volume must allow for changes in clinical practice.",
            },
            {
              speaker: "Hospital",
              text: "We can offer 90% of the current volume, reviewed if treatment pathways materially change. In return, we need a 48-hour delivery guarantee and credits for missed windows. We would also sign a two-year term once those protections are in the schedule.",
            },
            {
              speaker: "Supplier",
              text: "With 90% volume and the indexation cap, we can agree subject to our board's approval.",
            },
            {
              speaker: "Hospital",
              text: "Let us record that as conditional agreement, list the unresolved credit level and set Friday for final sign-off rather than treating the handshake as a completed contract.",
            },
          ],
        },
        {
          type: "table",
          title: "Negotiation moves and their functions",
          columns: ["Move", "What it reveals or creates", "Example"],
          rows: [
            ["Probe interests", "The reason beneath a stated demand", "Is the priority lower unit cost or predictable working capital?"],
            ["Summarise both sides", "A shared problem definition", "You need commitment; we need supply resilience."],
            ["Package a trade", "Value across different issues", "Longer term in exchange for safety stock and indexation limits."],
            ["Use conditional language", "Prevents a concession becoming unilateral", "If you provide the forecast, then we can discuss volume."],
            ["Test agreement", "Distinguishes principle from implementation", "What remains subject to approval?"],
            ["Record contingencies", "Protects against later ambiguity", "The review clause applies only to documented pathway changes."],
          ],
          caption:
            "Do not give away a concession to obtain agreement in principle. Link it to a reciprocal action and make the condition explicit.",
        },
        {
          type: "exercise",
          title: "Choose the effective negotiating move",
          instructions:
            "Select the response that creates the best route to a durable agreement rather than the most forceful immediate answer.",
          items: [
            c(
              "A supplier says, ‘We cannot lower our price.’ What is the best next question?",
              [
                "Why are you deliberately ruining our project?",
                "Which cost or risk makes the current price necessary?",
                "Will you lower it if I repeat the request more firmly?",
              ],
              1,
              "The question explores the constraint behind the position and may reveal non-price terms that can resolve it.",
            ),
            c(
              "Which proposal creates a genuine trade?",
              [
                "We will pay more, and you will decide everything else.",
                "We accept your price only if delivery windows and service credits are guaranteed.",
                "Everyone should compromise and meet halfway on every issue.",
              ],
              1,
              "The conditional proposal exchanges a price concession for specific performance protections rather than splitting every difference.",
            ),
            c(
              "Why should a negotiator summarise the other side's interests?",
              [
                "To demonstrate understanding and check that the proposed package addresses the real problem.",
                "To indicate that agreement has already been reached.",
                "To avoid making any proposal of their own.",
              ],
              0,
              "An accurate summary invites correction and shows whether the package solves both sides' underlying concerns.",
            ),
            c(
              "What is the best response to ‘We agree in principle’?",
              [
                "Treat the negotiation as finished immediately.",
                "Ask what remains conditional, who must approve it and when it will be confirmed.",
                "Demand an unconditional commitment without discussing details.",
              ],
              1,
              "Agreement in principle may conceal unresolved price, legal or approval issues that must be identified before commitment.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Negotiate a conditional package",
          instructions:
            "Work with a partner. Before speaking, list your three interests and the concessions you can trade. Do not reveal your minimum acceptable outcome.",
          items: [
            p(
              "Negotiate a shorter office lease with a landlord who wants a longer term.",
              "Model answer: We can offer a two-year extension if the landlord funds the ventilation upgrade and holds the rent fixed for the first year. In exchange, we will give six months' notice of any non-renewal and leave the partitions in place. That gives you occupancy certainty while solving the condition that makes the space unsuitable for our team.",
              "Trade duration for a physical improvement and a rent condition."),
            p(
              "Negotiate additional freelance design support without increasing the total budget.",
              "Model answer: If we reduce the number of full-page layouts from twelve to eight, we can redirect that time to two rounds of accessibility review. This protects the launch date and keeps the budget unchanged, but it reduces visual variation. Which matters more for this campaign, and would that trade be acceptable?",
              "Offer a scope trade, expose its cost and invite the other side to test the priority."),
            p(
              "Close a supplier negotiation while preserving a condition.",
              "Model answer: We have agreement on price, delivery windows and the two-year term. The service-credit level remains subject to legal review, so this is not yet a signed contract. If legal accepts the proposed schedule by Friday, we can proceed; otherwise we will reconvene rather than assume consent.",
              "Summarise the settled terms and name the remaining condition explicitly."),
          ],
        },
        {
          type: "tip",
          title: "Separate people, problem and process",
          text: "Challenge the cost model, not the supplier's integrity. Summarise the shared problem before proposing terms. When the conversation becomes tense, return to the agenda and define the next issue. A negotiator who controls the process does not need to dominate every exchange to control the outcome.",
        },
      ],
      quiz: [
        q(
          1,
          "What interest is beneath the supplier's request for a longer term?",
          [
            "A desire to avoid all negotiation",
            "Greater demand predictability and security of committed volume",
            "The removal of every safety obligation",
          ],
          1,
          "The longer commitment is presented as a way to make demand predictable and justify operational concessions.",
        ),
        q(
          2,
          "Why is ‘If we provide a forecast, would you hold the safety stock?’ effective?",
          [
            "It uses conditional language to link a reciprocal concession to a specific benefit.",
            "It hides the hospital's real need for stock.",
            "It promises the forecast before any supplier commitment.",
          ],
          0,
          "The ‘if’ clause protects the hospital from making a unilateral concession and makes the proposed exchange clear.",
        ),
        q(
          3,
          "Why does the hospital call the outcome conditional agreement?",
          [
            "To avoid recording any progress",
            "To indicate that legal, credit and approval details remain unresolved",
            "To suggest the supplier has already signed",
          ],
          1,
          "The label distinguishes broad alignment from a completed contract and prevents the remaining terms from being overlooked.",
        ),
        q(
          4,
          "Which question best uncovers an interest beneath a position?",
          [
            "Why are you being so difficult?",
            "Will you simply accept our demand?",
            "Which cost or risk makes the current term necessary?",
          ],
          2,
          "The third question seeks the constraint behind the position and opens possibilities for an exchange across issues.",
        ),
      ],
    },
    {
      slug: "managing-tension-and-disagreement",
      title: "Managing tension and disagreement",
      summary:
        "De-escalate charged exchanges by acknowledging impact, separating facts from interpretations and setting a fair process for continuing disagreement.",
      objective:
        "Respond to anger and distrust without surrendering the substantive issue, and establish conditions for a productive conversation.",
      minutes: 32,
      blocks: [
        {
          type: "dialogue",
          title: "The rezoning meeting",
          intro:
            "Residents believe a proposed development will worsen traffic and exclude them. The facilitator must acknowledge the harm without accepting every interpretation.",
          lines: [
            {
              speaker: "Resident",
              text: "You have already decided. This meeting is just a performance so you can say we were consulted.",
            },
            {
              speaker: "Facilitator",
              text: "I hear that you do not trust the process, and the first notice did arrive after the design workshop. That is a fair criticism. No final planning decision has been made; the committee will decide after this consultation, but I cannot promise it will accept every objection.",
            },
            {
              speaker: "Resident",
              text: "And now you will tell us the traffic is fine because your consultant says so.",
            },
            {
              speaker: "Facilitator",
              text: "The consultant's model predicts a manageable increase at peak times, but it uses school-holiday counts. Residents have supplied term-time observations that challenge that assumption. Let us keep both on the record and commission a check rather than pretend the disagreement is settled.",
            },
            {
              speaker: "Facilitator",
              text: "For the next ten minutes, I propose one speaker at a time, no personal accusations and a written list of the evidence each side wants tested. We will pause the vote until that evidence is reviewed.",
            },
            {
              speaker: "Resident",
              text: "And if the check confirms the congestion?",
            },
            {
              speaker: "Facilitator",
              text: "Then the committee must consider redesign or refusal on that evidence. I am asking for a fair test, not a guaranteed outcome.",
            },
          ],
        },
        {
          type: "rules",
          title: "De-escalation without appeasement",
          items: [
            "Name the emotion as a concern about the process, not as evidence that the speaker is irrational.",
            "Acknowledge a verified procedural failure before asking others to trust the next step.",
            "Separate facts, interpretations and values: ‘The model used holiday counts’ is a fact; ‘the model is useless’ is a judgement.",
            "State the limits of your authority: you may change the process without promising the final decision.",
            "Set conversational rules briefly and apply them to everyone, including officials.",
            "Offer a concrete next test with a decision consequence, not merely another meeting.",
          ],
        },
        {
          type: "exercise",
          title: "Respond to the tension beneath the words",
          instructions:
            "Choose the response that lowers the temperature while preserving honesty and forward movement.",
          items: [
            c(
              "A colleague says, ‘You never listen.’ What is the strongest first response?",
              [
                "I listen more than you do.",
                "It sounds as though my last response missed the point you were making; please tell me which decision you feel was ignored.",
                "You are being emotional again.",
              ],
              1,
              "The response acknowledges the reported experience and asks for a specific referent without accepting an unsupported universal claim.",
            ),
            c(
              "Which statement best separates fact from interpretation?",
              [
                "The model is obviously biased.",
                "The model used holiday traffic counts, so we need to test whether term-time conditions change the result.",
                "Residents will never accept evidence.",
              ],
              1,
              "The second statement identifies a verifiable methodological feature and connects it to a proportionate next step.",
            ),
            c(
              "Which process rule is fairest for a heated meeting?",
              [
                "Officials may interrupt residents whenever necessary.",
                "Only the loudest participants may speak.",
                "One speaker at a time, equal time and a written record of disputed evidence.",
              ],
              2,
              "A symmetrical process with a record gives participants confidence that the disagreement will be handled consistently.",
            ),
            c(
              "What is an inappropriate promise when de-escalating?",
              [
                "To review the disputed evidence before voting.",
                "To publish the evidence considered by the committee.",
                "To guarantee that every participant will receive the outcome they want.",
              ],
              2,
              "A facilitator can promise a fair process and transparent evidence, but cannot honestly guarantee a substantive result.",
            ),
          ],
        },
        {
          type: "practice",
          title: "De-escalate and define the next step",
          instructions:
            "Read each charged prompt with genuine frustration, then answer in four moves: acknowledge, clarify, bound and propose. Keep your pace lower than the challenger's.",
          items: [
            p(
              "Respond to an employee who says, ‘Management only cares about the deadline, not our safety.’",
              "Model answer: I hear that recent messages have made the deadline sound more important than safe operation. I need to correct that impression without dismissing your concern. No production target overrides a stop-work decision. Let us identify the hazard you are reporting now, record it and decide what evidence is needed before restarting.",
              "Acknowledge the communication failure, state a non-negotiable boundary and move to the specific hazard."),
            p(
              "Respond to a customer who says your apology is scripted and meaningless.",
              "Model answer: You are right that repeating an apology would not repair the lost photographs. What I can commit to is the recovery attempt and compensation decision by Thursday. If the files cannot be retrieved, you will receive the full fee back and a written explanation of what failed. I will stay responsible for that follow-up.",
              "Replace verbal reassurance with a verifiable commitment and accept the limit of your control."),
            p(
              "Respond to two departments accusing each other of causing a failed launch.",
              "Model answer: Both teams have evidence that points to a handover failure, and each is defending work it was asked to deliver. Let us stop assigning total blame and reconstruct the sequence: what each team received, what it sent and which requirement was unclear. We can then assign corrective actions to the process without erasing individual responsibility.",
              "Acknowledge legitimate work while redirecting to a shared factual reconstruction."),
          ],
        },
        {
          type: "tip",
          title: "Calm is not agreement",
          text: "A steady voice and clear boundaries can lower the emotional temperature without resolving the disagreement. Do not use de-escalation language to make someone withdraw a legitimate objection. The aim is not a pleasant room at any cost; it is a room in which the objection can be stated, tested and decided fairly.",
        },
      ],
      quiz: [
        q(
          1,
          "Why does the facilitator acknowledge that notice arrived after the workshop?",
          [
            "To admit that the procedural criticism is valid and begin rebuilding trust honestly",
            "To agree that no further consultation is useful",
            "To guarantee that the development will be rejected",
          ],
          0,
          "Acknowledging a concrete process failure is more credible than denying the residents' experience or making an unsupported promise.",
        ),
        q(
          2,
          "What does the facilitator do with the disputed traffic model?",
          [
            "Discards it without explanation.",
            "Accepts it as conclusive because it was produced by a consultant.",
            "Keeps it on the record alongside local observations and proposes a check.",
          ],
          2,
          "The facilitator treats the conflict as an evidential question and creates a process for examining both sources.",
        ),
        q(
          3,
          "Which statement sets an honest boundary?",
          [
            "I will ensure everyone gets what they want.",
            "I can guarantee a fair process, but not the committee's final decision.",
            "If you remain angry, the meeting will end without any decision.",
          ],
          1,
          "The facilitator controls process commitments but cannot honestly guarantee the substantive outcome of an independent decision.",
        ),
        q(
          4,
          "What is the goal of de-escalation in a high-stakes discussion?",
          [
            "To make disagreement disappear through emotional pressure",
            "To let the most powerful speaker control the outcome",
            "To keep the legitimate objection available for fair examination and decision",
          ],
          2,
          "Effective de-escalation changes how disagreement is expressed and processed, not whether the objection may exist.",
        ),
      ],
    },
    {
      slug: "speaking-with-diplomatic-precision",
      title: "Speaking with diplomatic precision",
      summary:
        "Use modality, careful attribution and face-saving language to communicate firm positions across sensitive negotiations without creating avoidable ambiguity.",
      objective:
        "Deliver a sensitive diplomatic message that is clear about red lines, careful about commitments and respectful of the other party's position.",
      minutes: 33,
      blocks: [
        {
          type: "dialogue",
          title: "The cross-border data negotiation",
          intro:
            "Two regulators are discussing access to transaction records. The wording must protect citizens without implying consent that has not been given.",
          lines: [
            {
              speaker: "Regulator A",
              text: "We require direct access to the transaction database for our anti-fraud investigation.",
            },
            {
              speaker: "Regulator B",
              text: "We recognise the urgency of the investigation. Direct access would raise concerns under our data-protection framework and would require safeguards that are not currently in place.",
            },
            {
              speaker: "Regulator A",
              text: "So you are refusing to cooperate?",
            },
            {
              speaker: "Regulator B",
              text: "We are not refusing cooperation. We are proposing a time-limited, case-specific transfer with an audit log and independent oversight. Our authorities could review that arrangement within ten working days, subject to legal clearance.",
            },
            {
              speaker: "Regulator A",
              text: "Ten days may be too slow.",
            },
            {
              speaker: "Regulator B",
              text: "We understand the timing concern. An expedited review may be possible if the request identifies the relevant accounts and legal basis. We would need to confirm that internally; I do not wish to promise a timetable before the responsible authority has assessed it.",
            },
            {
              speaker: "Regulator A",
              text: "Can we say the two sides have agreed in principle?",
            },
            {
              speaker: "Regulator B",
              text: "We can say both sides have agreed to explore a safeguarded transfer. That records progress without suggesting that access has been authorised.",
            },
          ],
        },
        {
          type: "table",
          title: "Diplomatic precision by function",
          columns: ["Function", "Careful wording", "What it avoids"],
          rows: [
            ["Acknowledge concern", "We recognise the urgency of the investigation.", "Dismissing the other party's objective"],
            ["State a constraint", "Direct access would require safeguards not currently in place.", "A flat refusal with no reason"],
            ["Distinguish refusal from alternative", "We are not refusing cooperation; we are proposing …", "Turning a limit into hostility"],
            ["Mark internal approval", "Subject to legal clearance / We would need to confirm internally.", "Accidentally creating a binding commitment"],
            ["Record limited progress", "Both sides have agreed to explore …", "Overstating tentative alignment as consent"],
            ["Protect face", "There appears to be a difference in how the clause is being interpreted.", "Accusing the other side of bad faith"],
          ],
          caption:
            "Diplomatic language is not evasive when its limits are explicit. Pair every softened form with the condition, owner or next step that makes it meaningful.",
        },
        {
          type: "exercise",
          title: "Calibrate the strength of the message",
          instructions:
            "Choose the wording that communicates the intended level of commitment, objection or uncertainty most accurately.",
          items: [
            c(
              "You can consider a proposal but have no authority to approve it. What should you say?",
              [
                "We approve the proposal and will implement it immediately.",
                "We are prepared to consider the proposal, subject to approval by the responsible authority.",
                "The proposal is completely unacceptable.",
              ],
              1,
              "The second statement communicates willingness without creating a commitment the speaker lacks authority to make.",
            ),
            c(
              "Which wording states a firm boundary while preserving cooperation?",
              [
                "We cannot accept direct access, but we can examine a safeguarded transfer.",
                "Your request is unreasonable and we will ignore it.",
                "Anything is possible if you insist long enough.",
              ],
              0,
              "The clear boundary is followed by a constructive alternative, avoiding both hostility and false flexibility.",
            ),
            c(
              "How should tentative progress be recorded?",
              [
                "As final agreement, even if legal review remains.",
                "As failure, because nothing has been signed.",
                "As agreement to explore an option, with outstanding conditions named.",
              ],
              2,
              "This formulation accurately records movement while preserving the distinction between discussion and authorisation.",
            ),
            c(
              "Which phrase communicates a possible timing constraint most diplomatically?",
              [
                "You always ask for impossible deadlines.",
                "The proposed timetable may be difficult; we will confirm what is feasible.",
                "We will definitely finish tomorrow.",
              ],
              1,
              "The statement identifies a constraint without attributing blame or making an unverified promise.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Deliver a sensitive message",
          instructions:
            "Practise each message aloud with a neutral expression. Then underline every commitment word — ‘will’, ‘agree’, ‘approve’ — and check that your authority supports it.",
          items: [
            p(
              "Reject a request for unrestricted access while offering a safer alternative.",
              "Model answer: We cannot support unrestricted access to personnel records. We recognise the need to investigate the allegations and propose sharing the relevant documents under a confidentiality protocol, with personal data minimised where lawful. Our legal team can review that protocol within five working days.",
              "State the boundary, acknowledge the objective and offer a bounded route forward."),
            p(
              "Respond when another minister publicly attributes a proposal you dislike to your government.",
              "Model answer: We note the statement attributed to our government. For accuracy, the option currently under consideration is a voluntary consultation, not a mandatory quota. We would welcome clarification through diplomatic channels so that public discussion reflects the actual proposal.",
              "Correct the attribution without escalating the disagreement into a public quarrel."),
            p(
              "Communicate that your committee has not reached a decision.",
              "Model answer: The committee has completed its first review and identified several points requiring further evidence. No decision has been taken. We expect to consider the revised analysis at the next scheduled meeting, subject to receiving the requested data.",
              "Distinguish procedural progress from a substantive outcome."),
          ],
        },
        {
          type: "tip",
          title: "Be exact about what has not happened",
          text: "Softened language becomes misleading when listeners can reasonably mistake it for consent. Make the outstanding condition audible: ‘subject to legal clearance’, ‘no decision has been taken’, ‘we would need to confirm’. The most diplomatic speaker is not the one who sounds vaguest; it is the one who reduces avoidable misunderstanding while keeping the relationship workable.",
        },
      ],
      quiz: [
        q(
          1,
          "Why does Regulator B avoid simply saying ‘No’?",
          [
            "To conceal all legal concerns",
            "To explain the constraint and keep a cooperative alternative available",
            "To imply that direct access has already been approved",
          ],
          1,
          "The response preserves a firm limit while showing willingness to pursue a safeguarded transfer, which keeps negotiation possible.",
        ),
        q(
          2,
          "What does ‘subject to legal clearance’ accomplish?",
          [
            "It creates an immediate binding authorisation.",
            "It removes the need for further review.",
            "It prevents tentative language from being mistaken for final approval.",
          ],
          2,
          "The condition identifies an outstanding approval and keeps the statement proportionate to the speaker's current authority.",
        ),
        q(
          3,
          "Why change ‘agreed in principle’ to ‘agreed to explore’?",
          [
            "To make the message unnecessarily complicated",
            "To record progress without implying that access has been authorised",
            "To suggest that both sides have rejected the proposal",
          ],
          1,
          "The revised wording accurately distinguishes procedural alignment from substantive consent.",
        ),
        q(
          4,
          "Which wording best protects another party's face?",
          [
            "There appears to be a difference in how the clause is being interpreted.",
            "Your interpretation is obviously dishonest.",
            "You have misunderstood something simple.",
          ],
          0,
          "The neutral framing identifies a difference without attributing bad faith or incompetence, leaving room for clarification.",
        ),
      ],
    },
    {
      slug: "chairing-a-discussion",
      title: "Chairing a discussion",
      summary:
        "Lead a complex meeting by setting purpose, balancing participation, interrupting constructively and converting discussion into explicit decisions.",
      objective:
        "Chair a multi-party discussion with clear interventions, fair airtime, conflict management and a recorded decision with owners.",
      minutes: 31,
      blocks: [
        {
          type: "dialogue",
          title: "The stalled product committee",
          intro:
            "Three departments have been talking past one another. The chair intervenes at specific moments rather than allowing the loudest voice to control the agenda.",
          lines: [
            {
              speaker: "Chair",
              text: "Our decision today is whether to delay the launch or proceed without the offline mode. We will hear the release risk, the customer impact and the support workload in that order, each for three minutes.",
            },
            {
              speaker: "Engineering lead",
              text: "Offline sync fails whenever two users edit the same record, and we have not isolated the cause.",
            },
            {
              speaker: "Marketing lead",
              text: "But we have already announced the date.",
            },
            {
              speaker: "Chair",
              text: "I will come to the commitment issue. First, what would make a launch without offline mode unsafe?",
            },
            {
              speaker: "Engineering lead",
              text: "Only that field teams could lose work. We could disable editing in those accounts.",
            },
            {
              speaker: "Support lead",
              text: "That still leaves customers discovering the limitation after purchase.",
            },
            {
              speaker: "Chair",
              text: "Let me summarise: the technical risk is containable by disabling editing, but the expectation risk remains. I propose a delayed launch with transparent release notes and a demonstration of the limited mode. Does anyone have evidence that changes that recommendation?",
            },
            {
              speaker: "Marketing lead",
              text: "A delay would cost the campaign, but undisclosed limits would cost trust.",
            },
            {
              speaker: "Chair",
              text: "Then we will record a two-week delay, a named owner for the sync fix and a revised customer message by Thursday. We are deciding launch conditions, not debating who caused the problem.",
            },
          ],
        },
        {
          type: "rules",
          title: "Chairing interventions",
          items: [
            "Open with the decision, agenda and time available; distinguish information from decision items.",
            "Invite expertise rather than seniority: ‘Engineering first, then support, then marketing.’",
            "Interrupt repetition neutrally: ‘I am going to pause there so we can hear the customer-impact view.’",
            "Summarise before asking for another opinion: state agreements, disagreements and missing evidence.",
            "Use a parking list for important issues that do not serve today's decision.",
            "Test the decision aloud: state the outcome, owner, deadline and condition for review.",
            "Close by confirming dissent where it matters, rather than manufacturing unanimity.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the chair's intervention",
          instructions:
            "Select the intervention that best restores structure, participation or decision clarity without dominating the discussion.",
          items: [
            c(
              "One executive has spoken for five minutes. What should the chair say?",
              [
                "Please continue; seniority always takes priority.",
                "I am going to pause there so we can hear whether support has identified a different customer risk.",
                "Everyone else is wrong unless this speaker agrees.",
              ],
              1,
              "The intervention is courteous but firm, and it redirects airtime toward missing expertise rather than attacking the individual.",
            ),
            c(
              "The group keeps repeating the same arguments. What is the best reset?",
              [
                "Summarise the points of agreement and the exact issue still unresolved.",
                "Ask everyone to start the entire discussion again.",
                "Let the loudest participant decide.",
              ],
              0,
              "A precise summary stops circular debate and shows the group what evidence or choice is actually needed.",
            ),
            c(
              "When should an issue be parked?",
              [
                "Whenever it is difficult or unpopular.",
                "When it is important but cannot affect today's stated decision and needs separate time.",
                "Only when the chair wants to silence a participant.",
              ],
              1,
              "Parking is legitimate when the issue deserves attention but would prevent the current decision from being completed.",
            ),
            c(
              "Which close best records a decision?",
              [
                "We sort of agreed to try something.",
                "The chair has made the final decision and everyone supports it.",
                "We will delay two weeks; Engineering owns the fix, Marketing owns the notice by Thursday.",
              ],
              2,
              "The close names the outcome, ownership, deadline and observable next actions, creating accountability.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Chair a ten-minute decision",
          instructions:
            "Use the scenario or invent one with three stakeholders. Your task is not to supply every answer; it is to make the group's reasoning and decision visible.",
          items: [
            p(
              "Open a meeting to decide whether to close a loss-making neighbourhood branch.",
              "Model answer: We need to decide today whether to close, reduce hours or retain the branch for one year. We will first hear the financial position, then access needs for older customers, then the cost of each option. Please keep evidence to two minutes per section. By the end, we will record a recommendation, its owner and the review date.",
              "Define the options, decision criteria, speaking order and required output."),
            p(
              "Interrupt constructively when two participants repeat their positions.",
              "Model answer: I am going to stop the loop for a moment. You agree that the service is valued, and you agree that the current cost is unsustainable. The unresolved question is whether reduced hours meet access needs without the full loss. Let us hear the option analysis on that point.",
              "Summarise common ground and name the narrow remaining decision."),
            p(
              "Close a discussion in which the group chooses a smaller pilot.",
              "Model answer: We have chosen a six-week pilot in two branches, not a full rollout. Operations will prepare the staffing plan by Monday, and Customer Insight will report usage and complaints weekly. We will review on 12 July. I also note Finance's concern about measurement cost; that concern remains recorded and will be part of the review.",
              "Confirm the decision, owners, dates and any material dissent without pretending unanimity."),
          ],
        },
        {
          type: "text",
          title: "Chair for the decision, not for the performance",
          paragraphs: [
            "A strong chair makes fewer speeches than an active participant but intervenes at turning points. Before the meeting, write the decision in one sentence and identify the minimum evidence required. During the discussion, keep returning to that sentence.",
            "Do not confuse neutrality with silence. The chair may challenge unsupported claims, protect quieter participants and insist that conditions be recorded. The discipline is to exercise those powers transparently and in service of the stated purpose.",
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does the chair specify the order of speakers?",
          [
            "To prevent marketing from speaking at all",
            "To ensure the meeting examines risk, impact and workload in a structured sequence",
            "To let the chair leave the room",
          ],
          1,
          "The order creates a fair agenda and prevents the public commitment to a date from crowding out technical and customer evidence.",
        ),
        q(
          2,
          "What is the purpose of the chair's summary before proposing a delay?",
          [
            "To test whether the shared understanding is accurate and expose the remaining risk",
            "To declare the discussion complete without a decision",
            "To repeat every contribution word for word",
          ],
          0,
          "The summary distinguishes the containable technical problem from the unresolved expectation problem and gives the group a basis for a proposal.",
        ),
        q(
          3,
          "When is a parking list useful?",
          [
            "For any issue that makes the chair uncomfortable",
            "For important topics outside the current decision that require separate attention",
            "For silencing dissenting views permanently",
          ],
          1,
          "A visible parking list protects the agenda while ensuring deferred issues are not forgotten or quietly dismissed.",
        ),
        q(
          4,
          "Which feature makes a meeting decision auditable?",
          [
            "A vague statement that everyone felt positive",
            "The longest participant's summary",
            "A recorded outcome with owners, deadlines and review conditions",
          ],
          2,
          "Named actions and review conditions allow the organisation to verify implementation and revisit the decision when evidence changes.",
        ),
      ],
    },
    {
      slug: "final-speaking-portfolio",
      title: "Final speaking portfolio",
      summary:
        "Demonstrate integrated C1 speaking through a structured position, a pressured exchange and a persuasive close, then diagnose specific delivery improvements.",
      objective:
        "Assemble and perform three connected speaking samples that show structured argument, responsive interaction and controlled final delivery.",
      minutes: 34,
      blocks: [
        {
          type: "dialogue",
          title: "The remote-work policy defence",
          intro:
            "In a final portfolio sample, a department head opens, answers a challenge and closes. Listen for integration of structure, evidence, concession and pace.",
          lines: [
            {
              speaker: "Director",
              text: "I recommend a hybrid policy with two remote days for roles whose work permits it. I will assess the proposal on output, inclusion and team learning. Our six-month trial showed a 4% rise in completed work, but graduates reported fewer informal learning opportunities. Both findings matter.",
            },
            {
              speaker: "Staff representative",
              text: "So you are ignoring the people who feel isolated.",
            },
            {
              speaker: "Director",
              text: "No. Isolation is the strongest cost, and it is why the proposal includes a protected office day for each team, not simply a personal entitlement to stay home. We should measure belonging and mentoring access alongside output rather than infer wellbeing from productivity.",
            },
            {
              speaker: "Staff representative",
              text: "Will managers be allowed to refuse the policy selectively?",
            },
            {
              speaker: "Director",
              text: "Exceptions must be tied to service coverage and reviewed by HR, not left to preference. That makes the policy fairer while acknowledging that some roles cannot be remote.",
            },
            {
              speaker: "Director",
              text: "The choice is not remote work versus office work; it is whether we can secure flexibility without allowing informal learning to disappear. I ask the committee to approve the hybrid framework, publish the exception criteria and review the full evidence after one academic year.",
            },
          ],
        },
        {
          type: "table",
          title: "Portfolio performance rubric",
          columns: ["Dimension", "Strong performance", "Evidence to record"],
          rows: [
            ["Structure", "A clear position, developed reasons and a logical close", "Listener can paraphrase the recommendation"],
            ["Development", "Examples explain claims and limitations are stated", "Each reason contains a relevant detail"],
            ["Interaction", "Challenges are answered before any bridge", "Answer, correction, evidence, next step"],
            ["Language", "Precise vocabulary and economical phrasing", "No avoidable repetition or vague intensifiers"],
            ["Delivery", "Selective stress, controlled pauses and stable presence", "No rushed transitions or filler-heavy endings"],
            ["Judgement", "Concessions are genuine and commitments are bounded", "Claims match the evidence and authority"],
          ],
          caption:
            "Choose one strength to preserve and two changes to test. A long list of vague self-criticisms is less useful than a specific next rehearsal target.",
        },
        {
          type: "exercise",
          title: "Evaluate portfolio evidence",
          instructions:
            "Choose the response or diagnosis that shows the strongest understanding of advanced speaking performance.",
          items: [
            c(
              "A listener cannot remember your recommendation after a fluent two-minute answer. What should you change first?",
              [
                "Add more vocabulary and speak faster.",
                "State the position earlier and gather it explicitly in the close.",
                "Remove all examples and qualifications.",
              ],
              1,
              "If the conclusion is not retained, the most direct repair is clearer positioning and synthesis, not greater linguistic complexity.",
            ),
            c(
              "Which self-assessment note is most actionable?",
              [
                "My speaking was bad.",
                "I need to be more confident somehow.",
                "I rushed the two key figures; next time I will pause between them and stress the larger figure.",
              ],
              2,
              "The note identifies an observable behaviour, its location in the speech and a precise rehearsal change.",
            ),
            c(
              "Your evidence comes from one small pilot. Which spoken claim is most defensible?",
              [
                "The policy will definitely succeed organisation-wide.",
                "The pilot suggests a modest output gain and an inclusion cost worth testing more widely.",
                "The pilot proves that every conclusion about hybrid work is false.",
              ],
              1,
              "The middle claim keeps both findings and scales the inference to the strength of the pilot evidence.",
            ),
            c(
              "What should a portfolio include alongside the recording?",
              [
                "Only a claim that the performance was excellent.",
                "A transcript, listener summary and one specific revision plan.",
                "As many unrelated vocabulary lists as possible.",
              ],
              1,
              "A transcript enables language review, a listener summary tests clarity and a revision plan turns assessment into improvement.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Record the three-part portfolio",
          instructions:
            "Record without stopping each segment. Then transcribe one minute, ask a listener to summarise your position and re-record the weakest section with only one targeted change.",
          items: [
            p(
              "Sample one: deliver a two-minute structured position on a contested workplace policy.",
              "Model answer: I support a four-day-week pilot in the service team, with response coverage protected on Fridays. My criteria are output, staff recovery and customer access. Over eight weeks, completed tickets rose slightly while reported exhaustion fell; the sample is small, so I would not promise a permanent change. I recommend a twelve-week pilot, weekly service checks and a review before any extension.",
              "Position → criteria → evidence with limits → bounded recommendation."),
            p(
              "Sample two: answer the challenge ‘Why should customers bear the risk of your experiment?’",
              "Model answer: They should not bear unmanaged risk. The pilot keeps the existing response guarantee, and any missed target triggers the old rota the same day. That protection costs more than a standard four-day pattern, which is why I propose limiting the trial to one team. Customers gain a service test without becoming unwitting subjects.",
              "Answer directly, name the protection and state the cost or limit honestly."),
            p(
              "Sample three: close the portfolio with a persuasive synthesis.",
              "Model answer: This is not a choice between staff wellbeing and customer reliability. The proposed coverage rule links them, while the old rota remains an immediate fallback. I ask the committee to approve the twelve-week pilot, require weekly public service figures and decide the permanent policy only after reviewing the full results.",
              "Synthesise the relationship, acknowledge the safeguard and make the decision request."),
          ],
        },
        {
          type: "tip",
          title: "Revise one variable at a time",
          text: "If you change structure, vocabulary and pace simultaneously, you will not know which change helped. Re-record one section after adjusting only the clearest weakness. Keep an earlier version so you can compare listener recall, response directness and finishing control. Mastery is visible when improvement is repeatable, not accidental.",
        },
      ],
      quiz: [
        q(
          1,
          "Why does the department head include both the output gain and the graduate-learning concern?",
          [
            "To avoid making any judgement about the trial.",
            "To show that inclusion is a separate criterion that productivity cannot answer.",
            "To suggest that graduates should not receive support.",
          ],
          1,
          "The two findings respond to different criteria and prevent a single positive metric from concealing a real organisational cost.",
        ),
        q(
          2,
          "Which portfolio assessment is most useful?",
          [
            "A specific observation linked to a rehearsal change.",
            "A general claim that the speaker needs confidence.",
            "A rating with no reference to the recording.",
          ],
          0,
          "Specific evidence and a targeted change make revision measurable and repeatable.",
        ),
        q(
          3,
          "Why should the hybrid policy require HR review of exceptions?",
          [
            "To allow managers to apply personal preferences consistently.",
            "To remove the need for service coverage.",
            "To tie exceptions to stated criteria and reduce arbitrary treatment.",
          ],
          2,
          "Independent review makes the exception process transparent and limits inconsistent decisions by individual managers.",
        ),
        q(
          4,
          "What best demonstrates integrated speaking mastery?",
          [
            "Using rare vocabulary even when it obscures meaning.",
            "Speaking continuously without listening to questions.",
            "Combining structure, evidence, responsive interaction and controlled delivery across connected samples.",
          ],
          2,
          "The portfolio demonstrates control of the whole speaking process rather than isolated vocabulary or confidence in a single prepared speech.",
        ),
      ],
    },
  ],
};
