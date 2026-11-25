import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2SpeakingUnit3: LessonUnit = {
  title: "High-stakes dialogue",
  description:
    "Communicate through crisis, negotiate across entrenched interests, withstand public questioning, bridge cultural differences and repair relationships damaged by misconduct.",
  lessons: [
    {
      slug: "crisis-communication",
      title: "Crisis communication",
      summary:
        "Speak during an unfolding crisis with humane clarity, separating confirmed facts, protective action and unresolved risk without speculating.",
      objective:
        "Deliver a crisis update that protects the audience, expresses accountability and establishes a credible rhythm for further information.",
      minutes: 34,
      blocks: [
        {
          type: "dialogue",
          title: "The spice recall",
          intro:
            "A food company has found possible contamination in one batch of chilli powder. The spokesperson must communicate before the investigation is complete.",
          lines: [
            {
              speaker: "Spokesperson",
              text: "At 07:15, our supplier notified us of possible contamination in chilli powder from batch C17. We have stopped distribution of every product containing that batch and asked retailers to remove them from sale. No illness has been confirmed at this time.",
            },
            {
              speaker: "Reporter",
              text: "Is the food safe or not?",
            },
            {
              speaker: "Spokesperson",
              text: "The affected products should not be consumed. Products outside batch C17 are not part of this recall, and we will publish the full batch list within thirty minutes. ‘No confirmed illness’ does not mean ‘no risk’; it means the evidence has not yet established illness.",
            },
            {
              speaker: "Reporter",
              text: "Why did customers only hear about this today?",
            },
            {
              speaker: "Spokesperson",
              text: "The notification reached our duty team at 07:15; the first public notice followed at 07:42. That interval was too long, and we are reviewing how the alert was escalated. Our priority now is to reach people who bought the affected products, including those who may not follow company accounts.",
            },
            {
              speaker: "Spokesperson",
              text: "Customers should check the printed batch code, stop using the product and contact their retailer for a refund. Anyone who feels unwell should seek medical advice and mention possible exposure. We will update at 11:00, even if the investigation is still open.",
            },
          ],
        },
        {
          type: "table",
          title: "The crisis update sequence",
          columns: ["Move", "Purpose", "Example"],
          rows: [
            ["Verified event", "Establish what is known and when.", "The supplier notified us at 07:15."],
            ["Protective action", "Tell people what to do now.", "Stop using the affected products."],
            ["Scope and limit", "Separate affected from unaffected without false reassurance.", "No confirmed illness; the investigation remains open."],
            ["Accountability", "Name a failure that is already established.", "The escalation interval was too long."],
            ["Next update", "Create a predictable information rhythm.", "We will update at 11:00, even without a final result."],
            ["Access", "Reach people beyond the usual channels.", "Retail notices, SMS and community organisations."],
          ],
          caption:
            "In a crisis, the audience needs orientation before explanation. Lead with safety action, then provide the evidence and limits behind it.",
        },
        {
          type: "exercise",
          title: "Choose the crisis-safe formulation",
          instructions:
            "Select the statement that protects the public and preserves credibility while the facts are still developing.",
          items: [
            c(
              "No illness has been confirmed, but testing is incomplete. What should the spokesperson say?",
              [
                "There is absolutely no risk to consumers.",
                "No illness has been confirmed; testing is incomplete, so the affected products should not be consumed.",
                "We do not want to speculate about health.",
              ],
              1,
              "The second statement reports the current status, names its limit and gives a clear protective action.",
            ),
            c(
              "A reporter asks for the cause before testing is complete. What is the best answer?",
              [
                "The cause is definitely the supplier's poor hygiene.",
                "There is no possible cause worth investigating.",
                "The cause is not yet established; we are tracing the batch and will publish verified findings.",
              ],
              2,
              "The response avoids blame and speculation while committing to a defined investigative output.",
            ),
            c(
              "Which statement best acknowledges an established delay?",
              [
                "The notice followed forty minutes after the alert; that interval was too long, and we are reviewing escalation.",
                "There may have been some communication challenges.",
                "Customers should not expect immediate information.",
              ],
              0,
              "The precise interval and ownership make the acknowledgement verifiable rather than a vague apology.",
            ),
            c(
              "Why promise an update even if there is no final result?",
              [
                "To guarantee that the crisis will end by that time.",
                "To maintain a predictable information rhythm and avoid an anxious vacuum.",
                "To avoid answering difficult questions.",
              ],
              1,
              "A scheduled update creates accountability and lets the audience know when to expect confirmed information, even if uncertainty remains.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Deliver a ninety-second crisis update",
          instructions:
            "Use five short units: event, action, scope, accountability, next update. Rehearse aloud and remove every adjective that is not supported by a fact.",
          items: [
            p(
              "Address residents after a chemical smell closes a school.",
              "Model answer: At 09:10, a strong chemical odour was reported near the school. The building has been evacuated, classes are suspended today and emergency services are on site. The source has not been identified, so we cannot yet give an all-clear or a health conclusion. The first notice reached families twelve minutes after evacuation; we are reviewing why the alert list did not activate sooner. Parents will receive the next update by 14:00 through text, the school site and the community centre.",
              "Give immediate protective action before discussing the source or blame."),
            p(
              "Speak after a payment outage affects part of a bank's mobile service.",
              "Model answer: Since 11:25, some customers have been unable to make card payments in the mobile app. The outage does not affect ATM withdrawals or online transfers. We have restored the service for a test group and are monitoring errors before reopening it widely. We do not yet know the full number of affected attempts. We will publish the confirmed total and recovery status by 16:00.",
              "Separate affected functions from unaffected ones and avoid calling partial restoration a full recovery."),
            p(
              "Correct an earlier statement that underestimated the number of affected customers.",
              "Model answer: Our 12:00 notice referred to approximately 4,000 affected accounts. Verified records now put the figure at 11,300. The earlier figure was incomplete and should not have been presented as an estimate without saying so. Every affected account is being contacted directly, and the revised total will remain on the public update page.",
              "Correct the record explicitly rather than quietly replacing the figure."),
          ],
        },
        {
          type: "tip",
          title: "Crisis cadence is a form of care",
          text: "People under threat often remember very little of a long explanation. Use short sentences, concrete verbs and a stable update schedule. Do not say ‘there is no cause for concern’ when concern is justified. Acknowledge fear without predicting its outcome: ‘I know this uncertainty is disruptive; here is what we are doing and when you will hear from us again.’",
        },
      ],
      quiz: [
        q(
          1,
          "Why does the spokesperson distinguish ‘no confirmed illness’ from ‘no risk’?",
          [
            "To reassure listeners that testing is complete.",
            "To report the current evidence without denying the possibility of harm.",
            "To avoid giving protective instructions.",
          ],
          1,
          "The distinction keeps the statement accurate while making clear that the affected products still should not be consumed.",
        ),
        q(
          2,
          "What is the purpose of naming the 27-minute interval between alert and notice?",
          [
            "To accept an established delay and make the subsequent review accountable.",
            "To speculate that the supplier caused the communication failure.",
            "To suggest that speed is unimportant in a crisis.",
          ],
          0,
          "The precise acknowledgement demonstrates ownership and gives the audience a concrete process to scrutinise.",
        ),
        q(
          3,
          "What should a crisis update contain if testing is incomplete?",
          [
            "Only optimistic predictions.",
            "A final cause before evidence is available.",
            "Verified facts, protective action, the limit of knowledge and the next update time.",
          ],
          2,
          "These elements provide orientation and accountability without pretending that uncertainty has been resolved.",
        ),
        q(
          4,
          "Why are short sentences useful in crisis communication?",
          [
            "They make it impossible to explain evidence.",
            "They help a distressed audience retain actions and essential distinctions quickly.",
            "They remove the need to acknowledge uncertainty.",
          ],
          1,
          "Crisis listeners may have limited attention and high anxiety, so concise units improve comprehension of what to do and what is known.",
        ),
      ],
    },
    {
      slug: "tough-negotiations",
      title: "Tough negotiations",
      summary:
        "Negotiate a multi-party dispute where security, employment and automation interests collide, using contingent packages rather than coercive deadlines.",
      objective:
        "Build a conditional multi-party agreement that addresses core interests, distributes transition costs and remains viable under implementation pressure.",
      minutes: 34,
      blocks: [
        {
          type: "dialogue",
          title: "The port automation dispute",
          intro:
            "Management wants automated cranes; workers fear redundancy and unsafe pace; the port authority fears losing freight. The mediator uses a package rather than a single winner-takes-all concession.",
          lines: [
            {
              speaker: "Management",
              text: "Without automation, the port will lose the new shipping contract. We need a decision this month.",
            },
            {
              speaker: "Mediator",
              text: "The deadline is real. Before we discuss the technology, can each side state the outcome it must protect? Management, you have named the contract. Workers, what must not be traded away?",
            },
            {
              speaker: "Workers",
              text: "No forced redundancies and no unmanaged increase in workload. If the machines are safe, we will work with them.",
            },
            {
              speaker: "Management",
              text: "We can offer retraining, but not a blanket guarantee of employment.",
            },
            {
              speaker: "Mediator",
              text: "Then let us separate guaranteed transition support from uncertain job numbers. If the authority funds a redeployment pool and management guarantees paid retraining plus priority placement for affected workers, would you accept phased automation after an independent safety review?",
            },
            {
              speaker: "Port authority",
              text: "We can fund the pool if the shipping contract is secured and productivity milestones are public.",
            },
            {
              speaker: "Workers",
              text: "With the safety review before deployment and a joint committee able to stop unsafe work, we could recommend that package.",
            },
            {
              speaker: "Mediator",
              text: "We have conditional alignment, not a signed settlement. The remaining items are funding, enforcement of the stop-work clause and the worker vote. Let us assign owners and a deadline to each rather than treating pressure as consent.",
            },
          ],
        },
        {
          type: "table",
          title: "A multi-party package map",
          columns: ["Party", "Core interest", "Possible trade", "Protection required"],
          rows: [
            ["Management", "Competitive contract and predictable productivity", "Phased deployment", "Clear milestone and cost framework"],
            ["Workers", "Dignity, safety and transition opportunity", "Accept technology after review", "No forced redundancy during transition; stop-work authority"],
            ["Port authority", "Freight volume and public value", "Fund redeployment pool", "Transparent productivity and employment data"],
            ["Mediator", "A durable, legitimate process", "Sequence conditional commitments", "Named owners and ratification route"],
          ],
          caption:
            "A package works only if the trades are linked and the protections are enforceable. Do not let one party's deadline silently become everyone else's consent.",
        },
        {
          type: "exercise",
          title: "Choose the toughest effective negotiation move",
          instructions:
            "Select the move that advances a durable agreement while protecting interests and the legitimacy of the process.",
          items: [
            c(
              "Management imposes a deadline. What is the mediator's best response?",
              [
                "Acknowledge the deadline and identify the core interests that must be protected before a package can be assessed.",
                "Pretend the deadline does not exist.",
                "Let management decide because deadlines always determine fairness.",
              ],
              0,
              "Recognising the constraint keeps the negotiation realistic while preventing speed from replacing substantive agreement.",
            ),
            c(
              "Which proposal best separates guarantees from uncertainty?",
              [
                "Guarantee every existing job permanently or automation cannot proceed.",
                "Guarantee paid retraining, priority placement and a funded redeployment pool while acknowledging that future job numbers depend on demand.",
                "Offer reassurance without defining what happens to affected workers.",
              ],
              1,
              "The second proposal creates concrete transition protections without making an unsupported promise about long-term employment.",
            ),
            c(
              "Why include stop-work authority in the package?",
              [
                "To allow any participant to end the negotiation at will.",
                "To make the safety protection enforceable during implementation rather than merely aspirational.",
                "To remove the need for an independent review.",
              ],
              1,
              "A stop-work clause gives workers a practical safeguard if the deployment fails the agreed safety conditions.",
            ),
            c(
              "What does ‘conditional alignment’ mean in this negotiation?",
              [
                "The settlement has already been signed and funded.",
                "No progress has been made.",
                "Broad support exists, but specific terms, funding and ratification remain outstanding.",
              ],
              2,
              "The phrase records genuine progress while preserving the distinction between negotiation and a binding, authorised agreement.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a conditional multi-party package",
          instructions:
            "Assign three roles and a mediator. State each interest before proposing terms. Record every condition, owner and approval step before closing.",
          items: [
            p(
              "Negotiate between a hospital, nurses and a technology supplier over new scheduling software.",
              "Model answer: The hospital needs predictable staffing; nurses need reliable rest periods and transparent allocation; the supplier needs a clear workflow specification. If the supplier supports a six-week shadow run, the hospital funds protected training time, and nurses help validate the allocation rules before live use. No automated rota should replace professional judgement, and the pilot stops if agreed rest safeguards are breached.",
              "Link implementation stages to reciprocal contributions and an explicit safety stop."),
            p(
              "Mediate between residents, a festival organiser and a council over noise and local trade.",
              "Model answer: Residents want sleep and advance notice; the organiser needs a viable programme and predictable permission; the council must enforce consistent standards. A two-stage closing time, earlier sound checks and a published complaint line could reduce disruption while protecting the event. If noise limits are exceeded twice, the licence conditions are reviewed before renewal. We need the organiser's costed plan and residents' preferred quiet hours before calling this agreed.",
              "Package operational concessions with enforceable review conditions and name missing information."),
            p(
              "Close a negotiation with outstanding ratification requirements.",
              "Model answer: We have alignment on the transition fund, phased implementation and independent safety review. The parties have not yet authorised a final settlement: the board must approve funding and the union must seek member approval. We will circulate the same text to both groups, publish the voting timetable and reconvene on 22 May. Until those steps are complete, this remains a conditional package.",
              "Summarise alignment without implying that ratification has already occurred."),
          ],
        },
        {
          type: "tip",
          title: "Firmness is not coercion",
          text: "A tough negotiation may require clear limits, deadlines and consequences. It becomes coercive when one party uses urgency, misinformation or unequal access to manufacture consent. Protect the process by sharing the same proposal, naming the authority needed for approval and allowing affected participants to test the package independently.",
        },
      ],
      quiz: [
        q(
          1,
          "Why does the mediator ask each side to name its core interest?",
          [
            "To discover what must be protected before trades can be designed.",
            "To avoid discussing automation altogether.",
            "To declare one side the winner immediately.",
          ],
          0,
          "Interests reveal the purpose beneath positions and make it possible to construct a package that addresses more than one demand.",
        ),
        q(
          2,
          "What is the key feature of the proposed redeployment package?",
          [
            "It guarantees an unchanged workforce indefinitely.",
            "It combines concrete transition guarantees with an honest acknowledgement of demand uncertainty.",
            "It offers retraining only after redundancies occur.",
          ],
          1,
          "The package protects workers through funded, enforceable support without making an unsupported promise about future job numbers.",
        ),
        q(
          3,
          "Why is stop-work authority important?",
          [
            "It gives any party an unrestricted veto over the entire port.",
            "It creates a practical safeguard against unsafe implementation.",
            "It replaces independent safety assessment.",
          ],
          1,
          "The clause makes the agreed safety standard enforceable at the point where workers experience the risk.",
        ),
        q(
          4,
          "What must happen after conditional alignment?",
          [
            "Nothing; verbal support is binding.",
            "The mediator should declare unilateral success.",
            "Specific terms, funding, ownership and ratification must be completed.",
          ],
          2,
          "Conditional alignment is progress, but durable agreement requires settled terms and authorisation by the relevant parties.",
        ),
      ],
    },
    {
      slug: "public-interviews-and-questioning",
      title: "Public interviews and questioning",
      summary:
        "Hold a clear line in rapid public interviews by answering loaded premises, correcting the record and creating memorable but accurate formulations.",
      objective:
        "Manage a sequence of hostile media questions with concise answers, explicit corrections and a consistent message that survives editing.",
      minutes: 32,
      blocks: [
        {
          type: "dialogue",
          title: "The live exam-reform interview",
          intro:
            "An education minister is defending a new examination model. The interviewer moves quickly between cost, fairness and the minister's credibility.",
          lines: [
            {
              speaker: "Interviewer",
              text: "You promised no child would be disadvantaged. Isn't that exactly what these exams will do?",
            },
            {
              speaker: "Minister",
              text: "No policy can promise that without evidence. I promised that no group would be introduced without additional support and monitoring. That is the commitment I am accountable for.",
            },
            {
              speaker: "Interviewer",
              text: "So you are already rewriting your promise?",
            },
            {
              speaker: "Minister",
              text: "I am stating it precisely. The support fund, free practice materials and additional testing time are part of the reform. The question is whether those measures reduce the gap; we will publish results by school and income band each year.",
            },
            {
              speaker: "Interviewer",
              text: "And when the gap does not close?",
            },
            {
              speaker: "Minister",
              text: "Then the policy will not have met its purpose, and the next phase should not proceed unchanged. A deadline for review must be real, or the promise is only rhetoric.",
            },
            {
              speaker: "Interviewer",
              text: "Critics say you do not believe your own figures.",
            },
            {
              speaker: "Minister",
              text: "I believe the pilot figures, and I have published their limits: 42 schools, one year and voluntary participation. I do not believe they prove a national outcome. The accurate message is simple: test the reform, publish the gaps and stop if the safeguards do not work.",
            },
          ],
        },
        {
          type: "rules",
          title: "Live-interview discipline",
          items: [
            "Answer before bridging: give the direct fact or judgement, then explain only what is needed.",
            "Correct a false promise or premise explicitly: ‘No policy can promise that without evidence.’",
            "Use one repeatable formulation: ‘Test the reform, publish the gaps, stop if safeguards fail.’",
            "Do not accept an interviewer's characterisation merely because it makes a cleaner headline.",
            "Name evidential limits without sounding as if nothing is known.",
            "Stay consistent across follow-ups; changing the reason for the same policy under pressure damages credibility.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the broadcast-strong answer",
          instructions:
            "Select the answer that remains accurate when excerpted into a short clip and still addresses the real question.",
          items: [
            c(
              "An interviewer says, ‘You have broken your promise.’ What is the strongest response?",
              [
                "That is not a fair question at all.",
                "I promised additional support and monitoring before expansion; here is what has been funded and what will be published.",
                "Everyone breaks promises in public life.",
              ],
              1,
              "The response states the actual commitment and supplies evidence, rather than merely objecting to the question or normalising failure.",
            ),
            c(
              "Which formulation is most memorable and accurate?",
              [
                "Everything will be wonderful.",
                "Test the reform, publish the gaps, stop if safeguards fail.",
                "We are working tirelessly on all aspects of this important issue.",
              ],
              1,
              "The three concrete actions are easy to retain and create clear standards by which the policy can be judged.",
            ),
            c(
              "Why should a minister name the pilot's limits?",
              [
                "To avoid answering the question.",
                "To show that the evidence is worthless.",
                "To prevent a limited pilot from being presented as proof of a national outcome.",
              ],
              2,
              "A transparent account of scope strengthens credibility and keeps the policy claim proportionate to the study.",
            ),
            c(
              "What is the best response to a demand for a simple yes or no?",
              [
                "Give a simple answer that conceals a necessary condition.",
                "Say the question is too complex for the audience.",
                "State the direct answer, then name the condition that makes it accurate.",
              ],
              2,
              "The third approach respects the format while preserving the qualification needed for a truthful answer.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Survive a rapid interview sequence",
          instructions:
            "Have a partner ask each follow-up immediately. Keep answers under forty seconds and use one consistent formulation across the sequence.",
          items: [
            p(
              "Defend a local transport app after an accessibility audit finds omissions.",
              "Model answer: The app is not accessible enough at present. Step-free routing data is missing from 14 stations, and the audit found two screen-reader faults. We have stopped promoting the accessibility label until those faults are fixed and the missing data is supplied. The test is not whether most journeys work; it is whether the journeys advertised as accessible can be relied on.",
              "Accept the specific failure, give the corrective action and define the standard for restoring the claim."),
            p(
              "Answer a loaded question about your appointment of a former colleague.",
              "Model answer: I know Dr Sen professionally, and that relationship creates a perception issue we must address. The appointment followed a published process, and the panel included two independent reviewers. I will publish the declared interests and the selection scores. If the process reveals a conflict I have missed, I will ask for an independent review rather than defend the appointment on trust.",
              "Acknowledge the relationship, publish the process and commit to a concrete remedy."),
            p(
              "Respond to: ‘Why should anyone believe your forecast after you missed the last one?’",
              "Model answer: The last forecast underestimated construction inflation by seven percentage points, and that error affected the budget. This forecast uses contracted prices for the first phase and a published sensitivity range for the second. I am not asking you to rely on my confidence; I am asking you to examine the assumptions and the trigger for returning to the committee.",
              "Own the previous error and replace personal credibility with inspectable assumptions."),
          ],
        },
        {
          type: "tip",
          title: "Prepare for the excerpt",
          text: "A live answer may be reduced to one sentence. Put the direct answer and the essential qualification in the first fifteen seconds. Avoid starting with background, attacking the interviewer or promising more information than you can deliver. Consistency across repeated questions is more valuable than a clever variation each time.",
        },
      ],
      quiz: [
        q(
          1,
          "Why does the minister correct the interviewer's description of the promise?",
          [
            "To avoid accountability for the reform.",
            "To replace an impossible universal guarantee with the actual commitment to support and monitoring.",
            "To suggest that evidence is irrelevant.",
          ],
          1,
          "The correction establishes the precise promise against which the policy should be judged and avoids accepting a misleading absolute.",
        ),
        q(
          2,
          "What makes the minister's three-part formulation effective?",
          [
            "It is easy to repeat, concrete and establishes observable conditions for continuation.",
            "It contains enough technical language to confuse critics.",
            "It promises a national outcome before evidence is available.",
          ],
          0,
          "The formulation works as a memorable policy test: trial, transparent reporting and a consequence if safeguards fail.",
        ),
        q(
          3,
          "Why name the pilot's 42 schools and one-year duration?",
          [
            "To make the evidence sound larger.",
            "To show that the pilot cannot by itself establish a universal national effect.",
            "To avoid publishing any results.",
          ],
          1,
          "The scope details make the evidential limit explicit and prevent overgeneralisation.",
        ),
        q(
          4,
          "What is the best approach when a question demands a yes/no answer?",
          [
            "Refuse to answer because all nuance is forbidden.",
            "Choose the answer that will produce the most dramatic headline.",
            "Give the direct answer and then state the condition needed for accuracy.",
          ],
          2,
          "A direct opening respects the interview format, while the necessary condition preserves truthfulness and clarity.",
        ),
      ],
    },
    {
      slug: "intercultural-diplomacy",
      title: "Intercultural diplomacy",
      summary:
        "Bridge high-context and direct negotiating styles by clarifying indirect commitments, protecting face and distinguishing respectful ambiguity from genuine agreement.",
      objective:
        "Adapt diplomatic style across cultures while checking meaning, preserving sovereignty concerns and converting tentative language into precise next steps.",
      minutes: 33,
      blocks: [
        {
          type: "dialogue",
          title: "The shared-river negotiation",
          intro:
            "Two governments are discussing dry-season water releases. One side uses indirect language to protect domestic standing; the other seeks a clear operational commitment.",
          lines: [
            {
              speaker: "Minister A",
              text: "We recognise the seriousness of the downstream concern and will study the proposed release schedule in a spirit of cooperation.",
            },
            {
              speaker: "Minister B",
              text: "When you say ‘study’, does that mean the schedule is acceptable in principle, or that further approval is required?",
            },
            {
              speaker: "Minister A",
              text: "It means the proposal has a constructive reception. The release level still requires technical and domestic approval. I do not wish my wording here to be mistaken for an authorisation.",
            },
            {
              speaker: "Minister B",
              text: "Then let us record the distinction. We can describe the reception as positive while naming the outstanding approvals.",
            },
            {
              speaker: "Minister A",
              text: "That would be helpful. Publicly, we also need to acknowledge that upstream communities depend on the same river.",
            },
            {
              speaker: "Minister B",
              text: "The joint statement can recognise both needs. Operationally, could technical teams agree a provisional schedule with trigger levels for drought and flood?",
            },
            {
              speaker: "Minister A",
              text: "Yes, technical teams can explore that schedule. Any political commitment would follow review by the responsible authorities on both sides.",
            },
          ],
        },
        {
          type: "table",
          title: "Intercultural clarification moves",
          columns: ["Risk", "Clarifying language", "Purpose"],
          rows: [
            ["Indirect assent", "Does that mean constructive reception or approval in principle?", "Distinguish warmth from commitment"],
            ["Face-saving condition", "What approval must occur before this can be announced as agreed?", "Make the authority chain visible"],
            ["Different time expectations", "Which action can occur before the next ministerial meeting?", "Convert general cooperation into a step"],
            ["Domestic audience concern", "Which concern must the joint statement acknowledge?", "Protect legitimacy without distorting the record"],
            ["Face-threatening refusal", "We are not in a position to authorise that today; we can explore …", "State a limit while preserving a route"],
            ["Translation drift", "Let us confirm the operative wording in both languages.", "Prevent different texts from carrying different commitments"],
          ],
          caption:
            "Do not stereotype a negotiating partner as indirect or direct. Treat these as possible communication risks and verify meaning with respectful, specific questions.",
        },
        {
          type: "exercise",
          title: "Clarify without causing offence",
          instructions:
            "Choose the question or formulation that reduces cross-cultural misunderstanding while preserving respect and precision.",
          items: [
            c(
              "A counterpart says your proposal is ‘under active consideration’. What should you ask?",
              [
                "Are you secretly rejecting it?",
                "What further information or approval is required, and when can we expect it?",
                "Does active consideration mean you have already approved it?",
              ],
              1,
              "The question seeks the next procedural requirement without treating indirect language as either consent or hostility.",
            ),
            c(
              "Which formulation states a limit while preserving face?",
              [
                "Your request is impossible and we do not care about your problem.",
                "We are not in a position to authorise that today; we can explore a smaller technical arrangement.",
                "Perhaps something could happen somehow.",
              ],
              1,
              "The statement is clear about the limit, acknowledges a cooperative alternative and avoids vague false hope.",
            ),
            c(
              "Why should operative wording be checked in both languages?",
              [
                "Because one text must always have legal priority regardless of agreement.",
                "Because translation is never useful in diplomacy.",
                "Because small shifts in modality or scope can create different commitments.",
              ],
              2,
              "Words such as ‘may’, ‘will consider’ and ‘will implement’ can carry materially different obligations across versions.",
            ),
            c(
              "What is a legitimate use of public ambiguity?",
              [
                "Concealing an agreement that has already been reached.",
                "Allowing each side to describe a limited technical step while both accept the same operational record.",
                "Avoiding any written record of commitments.",
              ],
              1,
              "Diplomatic framing can reflect domestic constraints, but it must not create different factual accounts of what has actually been agreed.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Bridge styles without stereotyping",
          instructions:
            "Practise each exchange with a partner who uses deliberately indirect language. Ask one clarifying question at a time and summarise the answer before moving on.",
          items: [
            p(
              "Respond when a minister says, ‘We will do our utmost to accommodate the request.’",
              "Model answer: We appreciate the effort you are describing. So that our teams prepare accurately, could you clarify whether this refers to a review, a provisional schedule or an authorised release? If approval remains outstanding, who needs to take the next step and by when?",
              "Translate the courteous phrase into an operational status without accusing the speaker of evasion."),
            p(
              "Protect face while declining a proposed public announcement.",
              "Model answer: A joint announcement today would create expectations that the technical groups are not yet authorised to meet. We suggest announcing the exploratory process instead and reserving any substantive commitment for the signed schedule. That allows both governments to show progress without overstating the outcome.",
              "Explain the reason for the limit and offer a publicly defensible alternative."),
            p(
              "Close a meeting where language and timing expectations differ.",
              "Model answer: Let us read back the record in both languages: technical teams will exchange data by Friday; ministers have not approved a release level; the next political discussion is scheduled for 18 September. If either side understands a different commitment, please identify it now so the communiqué does not conceal a disagreement.",
              "Close with a bilingual read-back of actions, non-actions and dates."),
          ],
        },
        {
          type: "tip",
          title: "Courtesy needs operational clarity",
          text: "Diplomatic respect does not require pretending that ambiguous language is clear. Ask about the action, the authority and the date. Equally, directness should not become impatience with another side's domestic constraints. The strongest cross-cultural speaker can preserve dignity while refusing to let courtesy manufacture false agreement.",
        },
      ],
      quiz: [
        q(
          1,
          "Why does Minister B ask what ‘study’ means?",
          [
            "To embarrass Minister A for using formal language.",
            "To distinguish constructive reception from approval and identify the outstanding authority.",
            "To insist that all negotiation use one cultural style.",
          ],
          1,
          "The clarification prevents a courteous phrase from being mistaken for an operational commitment.",
        ),
        q(
          2,
          "Why does Minister A mention upstream communities?",
          [
            "To avoid recording any cooperation.",
            "To show that domestic audiences need the agreement to acknowledge competing legitimate needs.",
            "To imply that downstream concerns are unimportant.",
          ],
          1,
          "The statement protects domestic legitimacy by ensuring the public framing does not erase the upstream side's dependence on the river.",
        ),
        q(
          3,
          "What is the legitimate outcome of the meeting?",
          [
            "An authorised water release.",
            "A complete collapse of the relationship.",
            "Technical exploration of a schedule, with political approval explicitly outstanding.",
          ],
          2,
          "The parties achieve a concrete next step without misrepresenting it as a final political commitment.",
        ),
        q(
          4,
          "What distinguishes diplomatic ambiguity from deception?",
          [
            "It protects different public framings while maintaining one accurate shared record of actual commitments.",
            "It uses longer sentences.",
            "It allows each side to believe something different about what has been authorised.",
          ],
          0,
          "Ethical diplomacy may vary public emphasis, but it must not create contradictory factual accounts of agreement.",
        ),
      ],
    },
    {
      slug: "repairing-a-damaged-conversation",
      title: "Repairing a damaged conversation",
      summary:
        "Restore a working relationship after a damaging statement or leaked message by acknowledging impact, correcting the record and agreeing observable changes.",
      objective:
        "Repair a high-stakes conversation through a specific apology, accurate account, listening and mutually verifiable commitments without making excuses.",
      minutes: 31,
      blocks: [
        {
          type: "dialogue",
          title: "After the leaked memo",
          intro:
            "A joint-venture partner has been described in an internal memo as ‘unreliable’. The memo is now public. The leader must repair trust without making a legal conclusion the investigation has not reached.",
          lines: [
            {
              speaker: "Partner",
              text: "Your memo says we cannot be trusted. Why should we continue discussing a shared project?",
            },
            {
              speaker: "Leader",
              text: "The phrase was damaging and inappropriate, and I am sorry it was written and circulated. It does not describe our assessment of your organisation. The underlying concern was a missed delivery date, which should have been raised directly with you.",
            },
            {
              speaker: "Partner",
              text: "An apology does not fix the fact that your team now believes it.",
            },
            {
              speaker: "Leader",
              text: "The test is what changes, not what I ask you to accept. I have asked the author to preserve the records and stopped further distribution. I will bring you the verified delivery timeline and a written account of the corrective steps. Before I propose a reset, I want to hear what you believe has been damaged operationally.",
            },
            {
              speaker: "Partner",
              text: "We paused two workstreams because we no longer trust the information flow.",
            },
            {
              speaker: "Leader",
              text: "That pause is a real consequence. Let us agree a single shared issue log, a weekly factual review and a named escalation contact for both organisations. I will also disclose any future material concern through that channel before it reaches an internal memo. We can review whether those steps restore enough confidence after four weeks.",
            },
          ],
        },
        {
          type: "table",
          title: "The repair sequence",
          columns: ["Stage", "Spoken move", "Evidence of repair"],
          rows: [
            ["Acknowledge", "Name the harmful act without minimising it.", "The phrase was damaging and inappropriate."],
            ["Correct", "State what was inaccurate or mishandled.", "A missed date should have been raised directly."],
            ["Own", "Identify what the speaker controls now.", "Stop distribution and preserve records."],
            ["Listen", "Ask what operational damage has occurred.", "The partner identifies paused workstreams."],
            ["Agree changes", "Specify behaviours and review dates.", "Shared issue log, weekly review, four-week checkpoint."],
            ["Verify", "Do not declare trust restored by declaration.", "Review conduct and consequences after the agreed period."],
          ],
          caption:
            "An apology is a beginning, not an instrument for demanding immediate forgiveness. The damaged party should be able to assess the repair through changed behaviour.",
        },
        {
          type: "exercise",
          title: "Choose the repair move",
          instructions:
            "Select the response that acknowledges the harm and advances repair without excuses, over-admission or a demand for immediate trust.",
          items: [
            c(
              "A damaging memo has leaked. What is the strongest opening?",
              [
                "The wording was taken out of context, so no apology is needed.",
                "The phrase was damaging and inappropriate, and I am sorry it was written and circulated.",
                "You know how internal documents are.",
              ],
              1,
              "The direct acknowledgement names the harm and responsibility without hiding behind context or institutional habits.",
            ),
            c(
              "What is the strongest response to ‘An apology does not fix it’?",
              [
                "Then I will keep apologising until you agree.",
                "You are making this impossible.",
                "The test is what changes; here are the actions I control and I want to hear the operational damage.",
              ],
              2,
              "The response accepts that words alone are insufficient and moves to concrete change while inviting the affected party's account.",
            ),
            c(
              "Which commitment is most verifiable?",
              [
                "I will always communicate better from now on.",
                "We will use one shared issue log and review it every Friday for four weeks.",
                "Trust will be completely restored by tomorrow.",
              ],
              1,
              "The second commitment names an observable practice, schedule and review period rather than an emotional outcome.",
            ),
            c(
              "Why should the leader avoid declaring the relationship repaired immediately?",
              [
                "Because an apology has no possible value.",
                "Because the damaged party needs evidence of changed behaviour before trust can be reassessed.",
                "Because no further conversation should ever occur.",
              ],
              1,
              "Repair is demonstrated through conduct over time, and the leader cannot unilaterally declare the other party's trust restored.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Repair a conversation with observable change",
          instructions:
            "Rehearse a two-minute repair statement, then listen to the response without defending yourself. End by agreeing actions and a review point, not by demanding closure.",
          items: [
            p(
              "Repair a relationship after interrupting a colleague repeatedly in a senior meeting.",
              "Model answer: I interrupted you three times and left you unable to finish the risk assessment. That was inappropriate, especially given your responsibility for the issue. I have reviewed the transcript rather than asking you to accept my recollection. I will invite you to complete the assessment today and use a formal turn-taking process at the next meeting. After that meeting, I would like us to review whether the process worked.",
              "Name the observable behaviour, its impact and a specific process change."),
            p(
              "Repair a negotiation after describing the other side's price as ‘a joke’.",
              "Model answer: The description was dismissive and damaged a discussion that required serious treatment of your cost position. I withdraw it without qualification. The price question should be examined through the underlying cost lines, not through ridicule. I propose that we exchange the relevant breakdowns and record disputed assumptions before discussing a revised offer.",
              "Withdraw the language clearly and replace it with a fair process for the substantive issue."),
            p(
              "Repair trust after promising a date that you knew was uncertain.",
              "Model answer: I gave you a firm date when I knew the approval was unresolved. That made planning harder and transferred avoidable uncertainty to your team. I should have named the approval condition. I will now provide a dated decision schedule with the responsible approver and a fallback date for each step. I understand if you need to keep contingency arrangements until the record shows those commitments are reliable.",
              "Own the avoidable uncertainty and allow the other party to maintain proportionate protection."),
          ],
        },
        {
          type: "text",
          title: "Repair is a sequence, not a speech",
          paragraphs: [
            "The first conversation should establish accountability and hear the impact. Later conversations should demonstrate the agreed changes and examine whether they have worked. Repeating the original apology without discussing changed behaviour can make the damaged party feel managed rather than heard.",
            "Do not confuse repair with the removal of consequences. A partner may keep contingency plans, require oversight or decide not to continue. Respectful repair makes the relationship safer and more honest; it cannot guarantee that the other party will choose the same future.",
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does the leader correct the operational issue behind the leaked memo?",
          [
            "To justify the damaging phrase.",
            "To show that the missed delivery should have been addressed directly rather than through reputational language.",
            "To deny that the memo exists.",
          ],
          1,
          "The correction identifies the mishandled process and offers a more legitimate way to address the underlying concern.",
        ),
        q(
          2,
          "What is the strongest response to ‘An apology does not fix it’?",
          [
            "Demand immediate forgiveness.",
            "Make a longer apology without changing conduct.",
            "Accept the limit of words, identify controlled actions and listen to the operational damage.",
          ],
          2,
          "Repair requires both accountability and observable change; the affected party's experience must also be heard.",
        ),
        q(
          3,
          "Which commitment is most useful for rebuilding trust?",
          [
            "A shared issue log, weekly factual review and named escalation contacts.",
            "A general promise to be more careful.",
            "An assurance that no disagreement will ever occur again.",
          ],
          0,
          "Specific, observable practices give both parties evidence to assess over an agreed period.",
        ),
        q(
          4,
          "Who determines whether trust has been sufficiently restored?",
          [
            "The apologising leader alone.",
            "The damaged party, informed by subsequent conduct and consequences.",
            "A public statement declaring the matter closed.",
          ],
          1,
          "Trust cannot be declared on someone else's behalf; it depends on the affected party's assessment of changed behaviour.",
        ),
      ],
    },
  ],
};
