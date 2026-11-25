import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1SpeakingUnit2: LessonUnit = {
  title: "Debate and persuasion",
  description:
    "Construct defensible positions, answer pressure without losing composure, concede what the evidence requires and close with a clear decision.",
  lessons: [
    {
      slug: "constructing-a-position",
      title: "Constructing a position",
      summary:
        "Define the terms of a debate, choose decision criteria and build a position that an informed opponent can genuinely engage with.",
      objective:
        "State a nuanced proposition, justify the criteria used to assess it and support the position with reasons and evidence.",
      minutes: 30,
      blocks: [
        {
          type: "dialogue",
          title: "A motion on congestion charging",
          intro:
            "The council is debating a charge for private cars entering the city centre. Notice how Inez defines the proposal before defending it.",
          lines: [
            {
              speaker: "Chair",
              text: "The motion is that the council should introduce a congestion charge. Inez, you have two minutes for the proposition.",
            },
            {
              speaker: "Inez",
              text: "I support the motion, with revenue ring-fenced for public transport. By congestion charge, I mean a weekday charge on private cars entering the defined central zone, with exemptions for disabled drivers and essential service vehicles. I will judge the policy on three criteria: reduced delay, fair access and measurable improvement in air quality.",
            },
            {
              speaker: "Owen",
              text: "That sounds like a tax on people who have no alternative.",
            },
            {
              speaker: "Inez",
              text: "Access is the strongest objection, so it must shape the scheme rather than be dismissed. Our transport data show that 61% of peak commuters into the zone already arrive by bus, rail, bicycle or on foot. For the remaining drivers, we should extend bus coverage before the charge begins and review exemptions monthly. On delay, the proposed charge addresses the central problem: too many vehicles compete for limited road space. On air quality, we should publish baseline readings and evaluate them after six months.",
            },
            {
              speaker: "Chair",
              text: "What would make you withdraw your support?",
            },
            {
              speaker: "Inez",
              text: "If reliable alternatives are not operating at the start date, I would delay implementation. A charge that raises money without changing travel conditions would not meet the motion's purpose.",
            },
          ],
        },
        {
          type: "rules",
          title: "Build a position that can survive scrutiny",
          items: [
            "Define the scope: identify who, where, when and what is included or exempt.",
            "Name the criteria: explain what would count as a good policy, not merely what you happen to prefer.",
            "State the position early: support, oppose or support with explicit conditions.",
            "Select two or three reasons that match the criteria and do not simply repeat them.",
            "Use evidence with a source and date when the figure is contested or consequential.",
            "Declare a boundary: say what evidence or event would cause you to revise the position.",
          ],
        },
        {
          type: "exercise",
          title: "Strengthen the proposition",
          instructions:
            "Choose the formulation that creates the strongest basis for debate. Read it as an opening statement, not as an essay introduction.",
          items: [
            c(
              "Which proposition is clearest for a debate about remote work?",
              [
                "Remote work is good and people have different views about it.",
                "Our organisation should permit two remote days a week after a six-month trial with service-level safeguards.",
                "Everything should be remote forever because offices are bad.",
              ],
              1,
              "The second proposition defines the policy, duration and safeguard, allowing opponents to challenge a specific proposal rather than a slogan.",
            ),
            c(
              "Why should a debater state criteria before giving reasons?",
              [
                "It makes the reasoning easier to follow and shows what counts as success.",
                "It allows the speaker to avoid evidence.",
                "It guarantees that the audience will agree.",
              ],
              0,
              "Criteria establish the standards by which the proposal will be judged, making the relationship between reasons and conclusion explicit.",
            ),
            c(
              "Which statement shows a defensible limit on a position?",
              [
                "My position cannot be wrong under any circumstances.",
                "I would change my mind only if my opponent is more confident.",
                "I would oppose the pilot if waiting times rise for two consecutive months.",
              ],
              2,
              "A measurable revision condition demonstrates that the position is evidence-led and open to revision rather than merely assertive.",
            ),
            c(
              "Which use of evidence is strongest in a debate about a new hospital site?",
              [
                "Experts say the site is probably better.",
                "Ambulance-response modelling puts the northern site within eight minutes of 92% of residents.",
                "The northern site has a very nice view.",
              ],
              1,
              "The modelling result is relevant to a clear decision criterion and can be questioned, tested or compared with the alternative site.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Construct a ninety-second opening",
          instructions:
            "Prepare a proposition on a contested local issue. Use one sentence each for scope, criteria, position, evidence and revision condition.",
          items: [
            p(
              "Open a debate on whether the city should make public transport free on weekends.",
              "Model answer: I support free weekend travel as a twelve-month pilot for residents, funded from the current parking surplus. I would judge it on additional journeys, congestion and access for low-income households. Surveys suggest that cost deters some weekend leisure trips, but we need usage data to test that. I would continue the pilot only if crowding remains manageable and car trips into the centre fall.",
              "Define the pilot and evaluation criteria before promising benefits."),
            p(
              "Construct a cautious position in favour of a later secondary-school start time.",
              "Model answer: I support moving the school day thirty minutes later for a one-year trial, while keeping the finishing time unchanged. My criteria are attendance, wellbeing and disruption to family routines. Sleep research supports the direction of the change, but local transport constraints matter. I would review the policy if attendance fails to improve or late buses cannot operate reliably.",
              "Show the distinction between evidence for the principle and evidence for the local implementation."),
            p(
              "State a position on allowing smartphones in classrooms, including an exemption.",
              "Model answer: I support a default ban on recreational smartphone use, with an exception for approved accessibility and translation tools. The policy should protect attention without blocking legitimate support. Early evidence suggests removing visible notifications reduces distraction, although enforcement must be proportionate. I would revise the ban if teachers document a significant learning benefit from a controlled classroom use.",
              "Avoid an absolute rule when a specific, defensible exception exists."),
          ],
        },
        {
          type: "table",
          title: "From preference to proposition",
          columns: ["Weak formulation", "Stronger formulation", "What improved"],
          rows: [
            ["“Buses are better.”", "“The council should prioritise bus lanes before charging cars.”", "A specific sequence links two policies."],
            ["“Remote work works.”", "“Two remote days should be tested against output and inclusion measures.”", "The claim becomes measurable."],
            ["“The school day is too early.”", "“A thirty-minute later start should be trialled for one academic year.”", "The proposal is bounded and reversible."],
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does Inez define exemptions before presenting benefits?",
          [
            "To avoid answering the motion",
            "To show that she has forgotten the policy details",
            "To make the policy concrete and address access concerns at the outset",
          ],
          2,
          "Defining exemptions reveals the actual proposal and anticipates the fairness objection, making the debate more substantive.",
        ),
        q(
          2,
          "What are Inez's main decision criteria?",
          [
            "Reduced delay, fair access and improved air quality.",
            "The lowest tax and the fastest vote.",
            "The colour of the buses and the size of the charge.",
          ],
          0,
          "She explicitly names delay, access and air quality as the standards against which the congestion-charge policy should be assessed.",
        ),
        q(
          3,
          "Which feature makes a proposition easiest to debate?",
          [
            "It contains as many abstract nouns as possible.",
            "It states a bounded action that can be supported or opposed.",
            "It avoids mentioning any evidence or conditions.",
          ],
          1,
          "A bounded action gives the opponent something specific to engage with and allows the audience to evaluate consequences.",
        ),
        q(
          4,
          "What does Inez's revision condition demonstrate?",
          [
            "That she opposes the policy in principle",
            "That she will change her view to win the debate",
            "That her support depends on a functioning transport alternative",
          ],
          2,
          "Making support conditional on reliable alternatives shows a principled link between the policy and its intended purpose.",
        ),
      ],
    },
    {
      slug: "responding-to-challenges",
      title: "Responding to challenges",
      summary:
        "Answer hostile or difficult questions directly, separate evidence challenges from value disagreements and recover control without sounding defensive.",
      objective:
        "Use a clear response sequence to address a challenge, correct a misleading premise and return to the decision under discussion.",
      minutes: 32,
      blocks: [
        {
          type: "dialogue",
          title: "Questions about the youth employment scheme",
          intro:
            "At a public meeting, a journalist challenges a programme that has missed its target. Listen for the direct answer, the precise correction and the return to action.",
          lines: [
            {
              speaker: "Journalist",
              text: "You promised 200 apprenticeships and delivered 137. Why should anyone trust this scheme?",
            },
            {
              speaker: "Ruth",
              text: "We missed the target, and employers should judge us by the 137 completed placements and the 29 participants who did not start. The shortfall came from two factors: three training partners withdrew, and several small employers could not meet the insurance requirement.",
            },
            {
              speaker: "Journalist",
              text: "So you are blaming everyone except yourself.",
            },
            {
              speaker: "Ruth",
              text: "No. I am responsible for not having backup partners in place. Let me separate what we know from what we are testing: completion is below target, while 71% of participants who finished gained sustained work. Both figures matter. The immediate change is a reserve provider and a shared insurance scheme for small firms.",
            },
            {
              speaker: "Resident",
              text: "Will the next round simply repeat the same failure?",
            },
            {
              speaker: "Ruth",
              text: "That is the right question. Before recruitment opens, we will publish provider capacity, the insurance arrangement and monthly progress against placements. If those safeguards are not ready, the start date moves.",
            },
          ],
        },
        {
          type: "table",
          title: "A response sequence for pressure",
          columns: ["Step", "Purpose", "Example"],
          rows: [
            ["Answer", "Give the listener a direct first sentence.", "We missed the target."],
            ["Distinguish", "Separate the issue being challenged from related claims.", "Placements are below target; completion-to-work outcomes are stronger."],
            ["Correct", "Address a factual or causal premise without scoring points.", "I am responsible for the lack of backup capacity."],
            ["Evidence", "Supply one relevant fact and its limit.", "71% of completers gained sustained work; that is not the same as 71% of all recruits."],
            ["Bridge", "Return to the remedy or decision.", "The reserve provider and insurance arrangement are the immediate changes."],
          ],
          caption:
            "Answer first, but do not rush into a rebuttal of tone. A calm correction is stronger than mirroring the challenge's aggression.",
        },
        {
          type: "exercise",
          title: "Choose the strongest response",
          instructions:
            "Select the reply that answers the actual challenge while preserving accuracy and professional composure.",
          items: [
            c(
              "A director says, ‘Your team caused the outage by ignoring warnings.’ You know one warning was missed. What is the strongest opening?",
              [
                "That is a ridiculous accusation and everyone knows it.",
                "We missed one warning, and that contributed to the delay; two other failures also played a role.",
                "The outage is a complex issue with many dimensions.",
              ],
              1,
              "This answer accepts the verified contribution without allowing one missed warning to erase the other established causes.",
            ),
            c(
              "Someone says, ‘So you admit the recycling policy has failed?’ Which response best separates the claims?",
              [
                "Participation is below target, but contamination has fallen; the collection redesign has not yet been tested.",
                "Yes, everything about the policy has failed.",
                "Recycling is important, and I reject the entire premise.",
              ],
              0,
              "The response distinguishes two measured outcomes from an untested component, replacing the blanket judgement with a more accurate assessment.",
            ),
            c(
              "Which correction handles an aggressive personal attack most effectively?",
              [
                "You are even more aggressive than I am.",
                "I will not answer because you are being unfair.",
                "I want to address the decision rather than our exchange; the question is whether the evidence justifies closure.",
              ],
              2,
              "The third response refuses to mirror hostility and redirects attention to the substantive issue without evading it.",
            ),
            c(
              "Which bridge returns effectively to action after a difficult answer?",
              [
                "Anyway, that is all I have to say.",
                "The remedy follows directly: we need a second supplier before the next production run.",
                "There are several complicated factors I could discuss for hours.",
              ],
              1,
              "The bridge connects the diagnosis to a concrete remedy, showing that answering the challenge has practical consequences.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Respond without becoming defensive",
          instructions:
            "Take each challenge as spoken, not written. Pause for one breath, answer in one sentence, then add evidence and a remedy.",
          items: [
            p(
              "Respond to: ‘Your accessibility improvements are just a cosmetic exercise, aren't they?’",
              "Model answer: The work is not complete, so criticism of the gaps is justified. The new step-free entrance has removed a physical barrier, but our latest audit still identifies unclear signs and delayed captioning. Those are functional failures, not cosmetic ones. We are funding both before the next public review.",
              "Accept the valid part, identify what remains and name the corrective action."),
            p(
              "Respond to a councillor who says your consultation ignored residents.",
              "Model answer: We did not reach enough residents before the first draft, and I apologise for that. The first survey had 84 responses, concentrated among existing community-group members. We have since held three sessions in different neighbourhoods and changed the proposed crossing location. I would not claim full consensus, but the second draft reflects the wider input.",
              "Do not answer ‘we consulted’ when the real objection is representativeness."),
            p(
              "Respond to an investor who says the product launch has been delayed too often.",
              "Model answer: The launch has moved twice, and the second delay damaged confidence. The first came from a safety defect; the second from incomplete documentation. Testing is now complete, but I will not offer another date until the release checklist is independently signed off. I propose sharing that checklist and the evidence weekly.",
              "Own the pattern and replace reassurance with a verifiable commitment."),
          ],
        },
        {
          type: "tip",
          title: "Do not confuse composure with passivity",
          text: "You may interrupt a false premise politely: ‘If I may correct one point …’ You may also ask for clarification: ‘Are you challenging the figure or the method?’ What you should avoid is answering a different, easier question. A concise admission often gives you more authority than a long defence because it shows you can distinguish responsibility from total blame.",
        },
      ],
      quiz: [
        q(
          1,
          "Why does Ruth begin with ‘We missed the target’?",
          [
            "To end the interview immediately",
            "To answer the central challenge before adding context",
            "To suggest that the other results are unimportant",
          ],
          1,
          "A direct answer establishes credibility; the explanation that follows can then be heard as context rather than evasion.",
        ),
        q(
          2,
          "What is the danger of saying ‘71% of participants gained work’?",
          [
            "It could mislead listeners into applying a completers-only figure to all recruits.",
            "It gives too much numerical detail for speech.",
            "It is unrelated to the programme's performance.",
          ],
          0,
          "The denominator matters: 71% of completers is not equivalent to 71% of everyone who entered the scheme.",
        ),
        q(
          3,
          "Which response is best when a question contains an inaccurate premise?",
          [
            "Mirror the aggression and attack the questioner.",
            "Ignore the whole question because one detail is wrong.",
            "Correct the premise briefly, answer the valid concern and continue.",
          ],
          2,
          "A selective correction preserves the substantive question while preventing a false assumption from structuring the answer.",
        ),
        q(
          4,
          "What is the purpose of a bridge in a pressured response?",
          [
            "To change the subject whenever the question is difficult",
            "To connect the answer to a remedy, decision or next action",
            "To add as many general statements as possible",
          ],
          1,
          "A useful bridge returns the conversation to shared purpose and shows how the information affects what happens next.",
        ),
      ],
    },
    {
      slug: "conceding-and-redirecting",
      title: "Conceding and redirecting",
      summary:
        "Make genuine, limited concessions under pressure, then redirect attention to the unresolved question without denying valid criticism.",
      objective:
        "Concede a specific point with precision and use a logical transition to refocus a disagreement on evidence, priorities or next steps.",
      minutes: 29,
      blocks: [
        {
          type: "dialogue",
          title: "A delayed recycling rollout",
          intro:
            "A resident has identified a real failure in the new recycling service. Watch how Aisha concedes the implementation problem without abandoning the policy's purpose.",
          lines: [
            {
              speaker: "Resident",
              text: "For six weeks, our recycling has gone out with the general waste. You call that progress?",
            },
            {
              speaker: "Aisha",
              text: "No. Missing six scheduled collections is a service failure, and the first letter we sent did not explain the delay clearly. I concede both points.",
            },
            {
              speaker: "Resident",
              text: "Then will you cancel the whole scheme?",
            },
            {
              speaker: "Aisha",
              text: "Cancelling would remove the separate food-waste collection that 70% of participating households now use correctly. That does not excuse the missed pickups; it means we should fix the collection failure without discarding the working part. The immediate test is whether the two replacement crews can clear the backlog by Friday.",
            },
            {
              speaker: "Resident",
              text: "And who is accountable for this mess?",
            },
            {
              speaker: "Aisha",
              text: "I am accountable for the timetable and for the inadequate notice. The contractor is accountable for the missed rounds under the service agreement. We will publish the recovery schedule tomorrow and compensate households for replacement bags.",
            },
          ],
        },
        {
          type: "examples",
          title: "Concede narrowly, then move the debate",
          intro:
            "A concession is strongest when its boundary is explicit. It should sound like a judgement, not a tactical surrender.",
          items: [
            {
              text: "Concede a fact: ‘The pilot did reduce waiting times by the promised amount.’",
              note: "Accept the verified outcome without implying that it settles the whole policy question.",
            },
            {
              text: "Concede a value: ‘Protecting privacy matters more than a small gain in convenience.’",
              note: "Acknowledge the priority while asking whether the current design truly requires that trade-off.",
            },
            {
              text: "Redirect to scope: ‘That evidence concerns the city centre; the question here is the rural route.’",
              note: "Challenge relevance rather than dismissing the evidence itself.",
            },
            {
              text: "Redirect to the remedy: ‘Given the failure, the practical question is how quickly we can restore service.’",
              note: "Move from blame to action only after acknowledging the legitimate grievance.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose a genuine concession",
          instructions:
            "Select the response that acknowledges the real point and redirects without evasion or false agreement.",
          items: [
            c(
              "An opponent says your cycle-lane trial made deliveries slower. Your data confirm a three-minute average delay. What should you concede?",
              [
                "The cycle lane has made all city traffic worse.",
                "The measured delivery delay is real and needs mitigation.",
                "Nothing, because three minutes is not important.",
              ],
              1,
              "The concession accepts the specific measured harm while leaving open its scale, distribution and possible mitigation.",
            ),
            c(
              "Which transition redirects from blame to evidence most naturally?",
              [
                "That may be true, but I would rather talk about something else.",
                "You have identified a real implementation failure; the next question is whether the policy itself caused it.",
                "I agree completely, so there is nothing left to discuss.",
              ],
              1,
              "The transition validates the implementation concern and distinguishes it from the separate question of policy effectiveness.",
            ),
            c(
              "A colleague accepts your proposal but says the budget is unrealistic. What is the best response?",
              [
                "Then the proposal must be abandoned entirely.",
                "Your concern is irrelevant if you support the principle.",
                "I accept that the first estimate was too low; let us examine the three largest cost lines.",
              ],
              2,
              "The response concedes the defect in the estimate and redirects to a focused analysis that can produce a viable alternative.",
            ),
            c(
              "Which phrase is an empty concession?",
              [
                "I hear your concern, although it has no bearing on my position.",
                "The waiting time did rise during the pilot, and we need to explain why.",
                "The consultation reached too few young people, so we will extend it.",
              ],
              0,
              "Dismissing a concern immediately after acknowledging it withdraws the concession and makes the speaker appear strategically evasive.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Concede, bound and redirect",
          instructions:
            "Use the pattern ‘You are right about X. That does not establish Y. The question we still need to resolve is Z.’ Change the pattern when it feels forced.",
          items: [
            p(
              "Respond to someone who says your community garden has excluded older residents.",
              "Model answer: You are right that the initial planning sessions were held online and at times that excluded some older residents. That does not mean the garden has no value for them; it means our engagement failed. We should now decide what physical changes would make the raised beds usable and run an in-person session before the next planting.",
              "Concede the process failure and redirect to an inclusive design decision."),
            p(
              "Concede a delay while defending the decision to complete safety testing.",
              "Model answer: The release is later than promised, and customers have absorbed real inconvenience. Completing the brake test does not erase that delay. It does mean we should judge the revised schedule by a signed test report, not by another optimistic forecast. I will publish the release gate tomorrow.",
              "Separate responsibility for the delay from the validity of the safety decision."),
            p(
              "Respond to a claim that your mentoring programme benefits only confident participants.",
              "Model answer: The first evaluation does show higher attendance among participants who volunteered. That is a warning about selection, not proof that quieter students gain nothing. We should compare opt-in and referral routes before drawing a conclusion. The next pilot will offer places through tutors as well as self-nomination.",
              "Acknowledge the selection effect without pretending the evidence settles effectiveness."),
          ],
        },
        {
          type: "tip",
          title: "Redirect is not a change of subject",
          text: "A redirect must grow out of the concession. If you accept that a consultation was unrepresentative, the logical next question is how to widen participation. If you accept that a forecast failed, the logical next question is how to replace it. Avoid ‘but’ immediately after a concession; ‘and’ or a short pause can acknowledge both truths without making the concession sound insincere.",
        },
      ],
      quiz: [
        q(
          1,
          "What exactly does Aisha concede?",
          [
            "That recycling is impossible to organise.",
            "That the entire policy should be cancelled.",
            "That six collections were missed and the notice was unclear.",
          ],
          2,
          "Her concession is specific and verifiable: the missed service and the poor communication, not every aspect of the policy.",
        ),
        q(
          2,
          "Why does Aisha mention the food-waste participation figure?",
          [
            "To suggest that residents have no reason to complain",
            "To show that one part of the scheme is working while she redirects to recovery",
            "To prove that every household supports the scheme",
          ],
          1,
          "The figure supports retaining the functioning element while the missed collections are addressed; it does not cancel the legitimate criticism.",
        ),
        q(
          3,
          "Which concession is appropriately bounded?",
          [
            "The measured delivery delay is real and needs mitigation.",
            "Everything about the cycle lane has been a disaster.",
            "Three minutes is too short to matter.",
          ],
          0,
          "It accepts the observed harm and opens a practical response without generalising beyond the evidence.",
        ),
        q(
          4,
          "What makes a redirect legitimate rather than evasive?",
          [
            "It introduces a completely unrelated topic.",
            "It follows logically from the point just conceded.",
            "It avoids naming the unresolved question.",
          ],
          1,
          "A legitimate redirect builds on the acknowledged issue and identifies the next question that still needs a decision.",
        ),
      ],
    },
    {
      slug: "closing-an-argument-persuasively",
      title: "Closing an argument persuasively",
      summary:
        "End a debate by gathering the strongest reasons, answering the decisive objection and making the requested decision unmistakable.",
      objective:
        "Deliver a persuasive close that synthesises rather than repeats, acknowledges the key trade-off and ends with a clear call to action.",
      minutes: 31,
      blocks: [
        {
          type: "dialogue",
          title: "Closing the school-start-time debate",
          intro:
            "Both sides have spoken. The proposition now has forty-five seconds to close. Notice that the speaker introduces no new statistic.",
          lines: [
            {
              speaker: "Opposition",
              text: "A later start will make after-school clubs and family routines harder to organise.",
            },
            {
              speaker: "Daniel",
              text: "That is a genuine implementation cost. It is why the motion proposes a trial with bus timetables and club schedules reviewed, rather than an overnight permanent change.",
            },
            {
              speaker: "Opposition",
              text: "A trial still costs money, and many clubs will need extra support before they can move their sessions.",
            },
            {
              speaker: "Daniel",
              text: "The choice tonight is not between an ideal school day and an imperfect one. It is between testing a change that addresses tiredness in the classroom and leaving the current timetable untouched. On the criteria we agreed, the proposition offers better conditions for learning, a measurable attendance benefit and a process that can be stopped if family disruption is unacceptable.",
            },
            {
              speaker: "Chair",
              text: "Your closing statement, please.",
            },
            {
              speaker: "Daniel",
              text: "I ask the council to support a one-year later-start trial, with transport and participation reviewed each term. Give the change a fair test, measure it openly and let evidence, not convenience alone, determine the permanent timetable.",
            },
          ],
        },
        {
          type: "table",
          title: "The anatomy of a persuasive close",
          columns: ["Move", "Question it answers", "Sample language"],
          rows: [
            ["Frame the choice", "What is really being decided?", "The choice is not X versus Y; it is whether to test Z."],
            ["Synthesise", "Why does the case hang together?", "These reasons point in the same direction: …"],
            ["Answer the strongest objection", "Why is the central cost acceptable?", "That concern is real, and the trial limits it by …"],
            ["State the standard", "What should the audience value?", "We should prefer a reversible test to an untested certainty."],
            ["Call for a decision", "What exactly should happen next?", "I ask you to approve the trial and termly review."],
          ],
          caption:
            "Synthesis compresses the logic into a relationship. Repetition merely says the same claims again with more emphasis.",
        },
        {
          type: "exercise",
          title: "Strengthen the final forty-five seconds",
          instructions:
            "Choose the closing move that best completes the argument. Speak each correct option with a slower final sentence.",
          items: [
            c(
              "Which sentence best reframes a debate about a new supermarket?",
              [
                "This supermarket will solve every problem in the town.",
                "The question is not whether we like supermarkets; it is whether this site can deliver local jobs without unacceptable traffic.",
                "There are many points on both sides of this difficult debate.",
              ],
              1,
              "The reframing identifies the actual trade-off and replaces a vague preference with a concrete decision standard.",
            ),
            c(
              "Which sentence synthesises rather than repeats?",
              [
                "The first reason is good, and the second reason is also good.",
                "The job benefit matters because the site is accessible, and the traffic cost can be reduced by the proposed delivery windows.",
                "As I said before, there are two reasons and I have mentioned both.",
              ],
              1,
              "The second sentence links the benefit, the location condition and the mitigation into a single evaluative relationship.",
            ),
            c(
              "Which call to action is strongest?",
              [
                "Please support the motion in some form.",
                "We should probably do something soon.",
                "Approve the six-month pilot and require a public evaluation before renewal.",
              ],
              2,
              "The final option specifies the decision, its duration and the accountability condition, leaving no ambiguity about the request.",
            ),
            c(
              "What should usually be avoided in the final seconds of a debate?",
              [
                "Restating the agreed decision criteria",
                "Introducing a new, untested statistic",
                "Acknowledging the strongest opposing concern",
              ],
              1,
              "A new statistic cannot receive proper context or scrutiny in the close and can make the argument appear improvised.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Close three different propositions",
          instructions:
            "Prepare each close in four sentences: frame, synthesis, objection, request. Record yourself and remove any phrase that does not serve one of those moves.",
          items: [
            p(
              "Close a debate in favour of a car-free city centre.",
              "Model answer: This is not a choice between convenience and no convenience; it is a choice between short-term parking access and a safer, more reliable centre. The motion pairs restrictions with better buses, freight windows and accessible exemptions. Residents are right to fear disruption, which is why implementation should be phased and reviewed. I ask you to approve the first six-month phase and the published evaluation plan.",
              "Link the mitigation to the objection and end with a bounded decision."),
            p(
              "Close an argument against a proposed facial-recognition system in public spaces.",
              "Model answer: The choice is not between perfect security and no security; it is whether an intrusive tool offers enough additional benefit to justify its risks. The claimed gain remains uncertain, while errors and misuse would affect people unequally. A limited trial would still collect sensitive data before necessity is established. I ask the committee to reject deployment and request a less intrusive options assessment.",
              "State the standard of necessity, then make the requested alternative clear."),
            p(
              "Close a debate supporting longer paid parental leave for all parents.",
              "Model answer: The question is not whether employers can absorb a cost; it is how that cost should be shared across families, workplaces and society. Equal leave improves predictability, protects carers' income and reduces the assumption that one parent is the default caregiver. Transition costs are real, so the proposal phases them in and supports small employers. I ask you to support the phased entitlement and the accompanying employer fund.",
              "Turn an objection about distribution into a reason to examine the policy design."),
          ],
        },
        {
          type: "tip",
          title: "Finish with stillness",
          text: "Slow down for the requested decision and stop. Do not trail into ‘so, yeah, that is what I think’ or immediately fill the silence. A short final pause lets the audience absorb the call to action. Your concluding sentence should be shorter and more concrete than the sentence before it.",
        },
      ],
      quiz: [
        q(
          1,
          "Why does Daniel acknowledge the concern about clubs and family routines?",
          [
            "To introduce a new objection at the last moment",
            "To show that the strongest cost has been considered and bounded by the trial",
            "To admit that no benefit exists",
          ],
          1,
          "Acknowledging the real cost and explaining how the trial limits it makes the closing argument more credible than ignoring the objection.",
        ),
        q(
          2,
          "Which phrase best synthesises several reasons?",
          [
            "The attendance gain, learning conditions and reversible design point towards a trial.",
            "Attendance matters, learning matters and design matters.",
            "I have already explained all of these points.",
          ],
          0,
          "The first phrase creates a relationship among the reasons and shows why they support the same conclusion.",
        ),
        q(
          3,
          "Why should a close usually contain no new statistic?",
          [
            "Numbers are never appropriate in debate.",
            "The audience has already decided and cannot change its mind.",
            "The speaker lacks time to explain its source, limits and relevance.",
          ],
          2,
          "Evidence introduced at the end cannot receive the context needed for fair evaluation and may distract from the synthesis.",
        ),
        q(
          4,
          "What makes Daniel's final request effective?",
          [
            "It uses increasingly abstract language.",
            "It specifies a trial, review schedule and decision basis.",
            "It avoids taking any position.",
          ],
          1,
          "The request is concrete and accountable: a one-year trial, termly review and evidence-based determination of the permanent timetable.",
        ),
      ],
    },
    {
      slug: "a-formal-debate-workshop",
      title: "A formal debate workshop",
      summary:
        "Run a complete formal debate, developing coordinated arguments, answering points of information and delivering a disciplined final rebuttal.",
      objective:
        "Participate in a structured debate using timed turns, precise rebuttal, team handovers and a close that protects your side's strongest case.",
      minutes: 34,
      blocks: [
        {
          type: "dialogue",
          title: "A point of information on AI proctoring",
          intro:
            "The motion is ‘Universities should use AI proctoring in high-stakes examinations.’ The proposition is interrupted after thirty seconds. Notice how the speaker answers briefly and resumes the argument.",
          lines: [
            {
              speaker: "Proposition",
              text: "AI proctoring offers a consistent second check in examinations where a single allegation can end a student's career. It can flag suspicious patterns for human review rather than making automatic findings of misconduct.",
            },
            {
              speaker: "Opposition",
              text: "Point of information: if the system is wrong, the student still suffers.",
            },
            {
              speaker: "Proposition",
              text: "That risk requires a right of appeal and a ban on automated sanctions. I accept the condition; it strengthens the case for human review.",
            },
            {
              speaker: "Proposition",
              text: "My second argument concerns access. Recorded sessions allow a trained panel to compare disputed evidence after the examination, when memories are less reliable. We would publish error rates by student group and suspend any tool whose false-positive rate is disproportionate.",
            },
            {
              speaker: "Opposition",
              text: "You are trading privacy for a system whose accuracy you cannot guarantee.",
            },
            {
              speaker: "Proposition",
              text: "Accuracy and privacy are both decision criteria. The opposition has shown a serious privacy cost but has not answered how disputed evidence should be reviewed consistently. Our proposal treats AI as one limited safeguard, with data minimisation, human judgement and an independent appeal route.",
            },
          ],
        },
        {
          type: "rules",
          title: "Formal debate discipline",
          items: [
            "Define the motion in your opening and identify the criteria on which it should be decided.",
            "Allocate arguments so each speaker develops a distinct case rather than repeating the team line.",
            "Take a point of information at the end of a sentence, answer it in one or two sentences, then resume.",
            "Attack the strongest opposing argument, not a minor wording error or an invented position.",
            "Label your rebuttal: ‘Their first argument assumes … The evidence actually shows …’",
            "Protect a team handover with a short recap: what your side has established and what your final speaker must answer.",
            "Use the final speech for comparison and decision, not for a second opening statement.",
          ],
        },
        {
          type: "exercise",
          title: "Make debate interventions count",
          instructions:
            "Choose the intervention that best advances the formal debate under time pressure.",
          items: [
            c(
              "You disagree with an opponent's definition of the motion. When should you address it?",
              [
                "In your opening, before accepting their first argument.",
                "Only in the final sentence of the debate.",
                "By silently arguing about a different definition throughout.",
              ],
              0,
              "Resolving a definitional disagreement early prevents the two sides from debating incompatible propositions.",
            ),
            c(
              "What is the best response to a point of information?",
              [
                "Refuse every interruption as bad manners.",
                "Answer the specific point briefly and return to your argument.",
                "Spend five minutes restating your whole case.",
              ],
              1,
              "Formal debate rewards concise answers to interventions because both the point and the ongoing argument must receive attention.",
            ),
            c(
              "Which rebuttal is strongest?",
              [
                "Their second argument fails because their first speaker looked nervous.",
                "Their second argument assumes all flagged students are guilty; our appeal evidence shows why that assumption is unsafe.",
                "Their argument is silly and everyone knows it.",
              ],
              1,
              "The second option identifies an internal assumption and answers it with relevant evidence, rather than attacking delivery or using insults.",
            ),
            c(
              "What should a final speaker prioritise?",
              [
                "A new collection of statistics",
                "Repeating every point in the same order",
                "Comparing the decisive clashes and showing why the motion should pass or fall",
              ],
              2,
              "The audience needs an evaluative comparison at the end: which arguments survived scrutiny and why they determine the vote.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rehearse the full debate cycle",
          instructions:
            "Work with a partner or group. Set a timer for each turn and allow brief points of information. Swap sides and argue the same motion to test flexibility.",
          items: [
            p(
              "Deliver a proposition opening for the motion on AI proctoring.",
              "Model answer: We support the motion only where AI output triggers human review, never an automatic sanction. The decision criteria are fairness, evidential reliability and student privacy. Recorded evidence can be examined consistently after an exam, while data minimisation and an independent appeal route can limit the intrusion. We ask the house to judge the complete safeguard, not the technology in isolation.",
              "State a conditional proposition, criteria and the relationship between benefits and safeguards."),
            p(
              "Give a forty-five-second rebuttal to the claim that human review eliminates bias.",
              "Model answer: Human review is necessary, but it does not eliminate bias. Reviewers still see system-generated flags, and that framing can influence attention. Our proposal therefore requires blind re-review for appealed cases and publication of outcomes by student group. The safeguard must test the human system as well as the algorithm.",
              "Accept the mechanism while identifying the residual risk and a concrete remedy."),
            p(
              "Deliver the opposition's final comparison on the same motion.",
              "Model answer: The proposition has shown that disputed evidence deserves consistent review; it has not shown that continuous AI surveillance is necessary to achieve it. The privacy cost arrives for every student, while the claimed benefit depends on uncertain accuracy. The house should reject this motion and require less intrusive evidential review with clear appeal rights.",
              "Concede the legitimate problem, compare the costs and make a specific alternative request."),
          ],
        },
        {
          type: "text",
          title: "A compact motion protocol",
          paragraphs: [
            "Before speaking, write three lines: ‘Our position is …’; ‘The decisive criteria are …’; ‘If the opposition proves X, we still win because Y.’ This preparation lets you respond to unexpected arguments without abandoning your structure.",
            "During rebuttal, name the opposing claim accurately before answering it. If you cannot summarise it in one sentence, you are probably attacking a weaker version of it. A strong debate makes the audience understand both sides more clearly, even when the vote is decisive.",
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why is ‘AI proctoring’ defined as a flag for human review?",
          [
            "To make the motion impossible to oppose",
            "To establish the actual policy being debated and prevent confusion about automated sanctions",
            "To avoid discussing accuracy and privacy",
          ],
          1,
          "The definition creates a precise proposition: AI generates a flag, while a human makes decisions and an appeal remains available.",
        ),
        q(
          2,
          "What is the best way to handle a point of information?",
          [
            "Ignore it without acknowledging the speaker.",
            "Use it to repeat the entire opening.",
            "Answer the specific question briefly and resume the argument.",
          ],
          2,
          "This preserves debate flow while demonstrating that the speaker can respond to scrutiny in real time.",
        ),
        q(
          3,
          "Which rebuttal attacks a substantive assumption?",
          [
            "The opposition assumes flagged students are guilty, but appeals show why that is unsafe.",
            "The opposition speaker has an annoying voice.",
            "The opposition used the wrong greeting.",
          ],
          0,
          "The first rebuttal identifies an assumption within the argument and challenges it with relevant reasoning.",
        ),
        q(
          4,
          "What is the final speaker's main job?",
          [
            "To introduce entirely new evidence without explanation",
            "To compare the decisive arguments and connect them to the vote",
            "To repeat every earlier speech word for word",
          ],
          1,
          "The final speech should provide synthesis and judgement, showing which clashes matter and why they favour one side.",
        ),
      ],
    },
  ],
};
