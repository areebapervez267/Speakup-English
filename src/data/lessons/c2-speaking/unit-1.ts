import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2SpeakingUnit1: LessonUnit = {
  title: "Authority and presence",
  description:
    "Project credible authority through precision, restraint and timing, then handle silence and pressure without slipping into dominance or bluffing.",
  lessons: [
    {
      slug: "speaking-with-confidence-and-credibility",
      title: "Speaking with confidence and credibility",
      summary:
        "Build credibility under scrutiny by distinguishing verified facts from inference, acknowledging limits and speaking with calm accountability.",
      objective:
        "Communicate a difficult position with confident restraint, transparent uncertainty and language that matches the speaker's responsibility.",
      minutes: 31,
      blocks: [
        {
          type: "dialogue",
          title: "A medication-safety disclosure",
          intro:
            "A hospital director addresses families and journalists after an incorrect dose. Credibility comes from verified detail and ownership, not from sounding omniscient.",
          lines: [
            {
              speaker: "Journalist",
              text: "How can patients trust a hospital that gave a child the wrong dose?",
            },
            {
              speaker: "Director",
              text: "They should judge us by what happened, what we have done and what remains uncertain. At 06:40 on Tuesday, a packaging similarity contributed to an incorrect dose. The child was assessed immediately and is now stable. We have isolated the affected product and opened an independent review.",
            },
            {
              speaker: "Journalist",
              text: "Was this negligence?",
            },
            {
              speaker: "Director",
              text: "I will not pre-empt the investigation. The dose should not have been administered, and our checking process failed to catch it. That is sufficient for us to act without waiting for a legal label.",
            },
            {
              speaker: "Journalist",
              text: "Can you guarantee this will not happen again?",
            },
            {
              speaker: "Director",
              text: "No. I can guarantee that the implicated stock is withdrawn, that every affected patient is being contacted and that we will publish the review's findings. The next safeguard is separate storage and barcode verification at the point of administration. We will report whether those changes are working.",
            },
          ],
        },
        {
          type: "table",
          title: "Confidence calibrated to responsibility",
          columns: ["Speaker move", "Credible language", "Uncredible substitute"],
          rows: [
            ["State verified facts", "“At 06:40, the dose was administered.”", "“There may have been some sort of incident.”"],
            ["Accept operational responsibility", "“Our checking process failed to catch it.”", "“The individual must have made a mistake.”"],
            ["Reserve legal judgement", "“I will not pre-empt the investigation.”", "“It was definitely negligence.”"],
            ["Reject impossible guarantees", "“I can commit to these safeguards and this review.”", "“This can never happen again.”"],
            ["Make follow-up observable", "“We will publish the findings and completion rates.”", "“Trust us; we are handling it.”"],
          ],
          caption:
            "Credibility is not emotional detachment. Acknowledge harm plainly, then give the audience evidence they can use to judge your response.",
        },
        {
          type: "exercise",
          title: "Choose the credible formulation",
          instructions:
            "Select the statement that projects authority without overstating knowledge, responsibility or certainty.",
          items: [
            c(
              "A review has confirmed a control failure but not its full cause. What is the strongest statement?",
              [
                "The control failed, and we are investigating why it did not stop the error.",
                "It was probably a one-off, so no further action is needed.",
                "The cause is definitely the new employee's carelessness.",
              ],
              0,
              "The first statement accepts the verified failure while reserving judgement about causes that the review has not established.",
            ),
            c(
              "Which phrase demonstrates accountability without scapegoating?",
              [
                "The system is complicated and these things happen.",
                "Our process allowed this error to pass undetected, and changing that process is our responsibility.",
                "The nurse involved will be the only person who suffers for this.",
              ],
              1,
              "The second formulation identifies an organisational responsibility and focuses on correction rather than transferring blame to an individual.",
            ),
            c(
              "What is the most credible response to ‘Will you publish the full report?’",
              [
                "Yes, we will release the findings that can lawfully be disclosed, with any redactions explained.",
                "Only if journalists stop asking questions.",
                "The report contains nothing important.",
              ],
              0,
              "The conditional commitment is transparent about legal limits while offering a clear accountability measure.",
            ),
            c(
              "Which closing best combines empathy with action?",
              [
                "We are sorry for any inconvenience caused.",
                "The family has been failed, and we owe them direct answers as well as safer care for every patient.",
                "This is a difficult time for everyone involved.",
              ],
              1,
              "The second statement names the harm and the obligation without hiding behind a general expression of inconvenience.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Speak with accountable confidence",
          instructions:
            "Answer each prompt in five sentences or fewer. Use one verified fact, one admission, one action and one visible follow-up.",
          items: [
            p(
              "Address staff after an audit finds that fire drills have not been recorded for three months.",
              "Model answer: The records show that three scheduled drills were not documented; we cannot yet confirm whether every drill occurred. That uncertainty is itself a control failure. I am accountable for restoring a reliable schedule and checking participation today. We will publish the completed record monthly rather than treating paperwork as a substitute for practice.",
              "Distinguish missing evidence from a proven event and name the control response."),
            p(
              "Respond to a customer who says your data breach apology sounds rehearsed.",
              "Model answer: I understand why another statement would not be enough. Accounts in the affected group were accessed between 3 and 7 March; passwords were not exposed, but email addresses were. We have reset the relevant sessions and will notify every affected customer directly. I will remain accountable for that notification and for publishing the security changes by Friday.",
              "Replace reassurance with scope, completed safeguards and a dated commitment."),
            p(
              "Explain why you are pausing a programme even though early results are positive.",
              "Model answer: The early results are encouraging, but they come from participants who volunteered and may not represent those with the greatest need. Continuing unchanged would expose us to a predictable fairness risk. I am pausing expansion while we test a targeted referral route. We will publish the access profile and the criteria for restarting.",
              "Let the limit of the evidence justify the decision rather than undermining confidence."),
          ],
        },
        {
          type: "tip",
          title: "Authority does not require certainty",
          text: "Confident speech makes clear what is known, what is being done and who owns the next step. It does not require the speaker to predict every outcome. When asked for a guarantee, offer the strongest verifiable commitment you can keep; audiences often trust a precise boundary more than an expansive promise.",
        },
      ],
      quiz: [
        q(
          1,
          "Why does the director avoid deciding whether the incident was negligence?",
          [
            "To conceal the confirmed control failure",
            "To avoid all responsibility for the response",
            "To reserve a legal judgement for the investigation while accepting operational responsibility",
          ],
          2,
          "The distinction preserves investigative integrity without allowing uncertainty about the legal label to delay corrective action.",
        ),
        q(
          2,
          "Which statement is most credible after a serious error?",
          [
            "We will guarantee this can never happen again.",
            "We have isolated the stock, contacted patients and opened an independent review.",
            "These things happen in every hospital.",
          ],
          1,
          "Concrete actions and independent review provide evidence of response, unlike an impossible guarantee or a normalising excuse.",
        ),
        q(
          3,
          "What makes a follow-up commitment auditable?",
          [
            "A promise to keep people informed somehow.",
            "A confident tone without details.",
            "A named report, publication date and measure of completion.",
          ],
          2,
          "Specific outputs and dates allow the audience to verify whether the commitment has been met.",
        ),
        q(
          4,
          "How can a speaker acknowledge harm without sounding uncertain?",
          [
            "By naming the harm directly and immediately describing the corrective responsibility.",
            "By replacing direct language with ‘any inconvenience’.",
            "By refusing to discuss the outcome until every question is answered.",
          ],
          0,
          "Plain acknowledgement establishes moral seriousness, while clear ownership demonstrates that empathy is connected to action.",
        ),
      ],
    },
    {
      slug: "controlling-pace-pause-and-emphasis",
      title: "Controlling pace, pause and emphasis",
      summary:
        "Use rhythm, silence and contrastive stress to shape meaning in high-stakes speech without turning every important sentence into the same climax.",
      objective:
        "Score a demanding speech for pace, pause and emphasis so that its moral, factual and rhetorical priorities are audible to the listener.",
      minutes: 32,
      blocks: [
        {
          type: "dialogue",
          title: "The memorial address",
          intro:
            "A union leader is remembering a worker who died after raising a safety concern. The bracketed direction shows how the speech uses tempo and silence rather than volume alone.",
          lines: [
            {
              speaker: "Mara",
              text: "We remember Daniel for his humour, his patience with apprentices and his refusal to walk past a hazard. [Short pause.] Those are not three separate qualities. They describe a person who believed that other people's safety was part of his own responsibility.",
            },
            {
              speaker: "Mara",
              text: "He noticed the new worker who hesitated beside the machinery, and he made time to explain the guard again. [Pause.] Safety was not a form to him; it was a conversation he chose to have.",
            },
            {
              speaker: "Mara",
              text: "Eleven weeks ago, Daniel reported that the loading-bay guard was loose. [Pause.] The repair was logged. [Pause.] The guard was not replaced. [Longer pause; no added volume.] I will not turn this address into a technical account, but I will not allow the word ‘accident’ to do the work of an explanation.",
            },
            {
              speaker: "Mara",
              text: "A record can show that a concern passed through a system. It cannot show that anyone took responsibility for the person who raised it. [Stillness.] That distinction matters tonight.",
            },
            {
              speaker: "Mara",
              text: "A warning was given. A warning was recorded. A warning was not acted on. [Pause between each sentence.] The most meaningful tribute we can offer is not a plaque. It is a workplace in which the next warning produces action.",
            },
            {
              speaker: "Mara",
              text: "We owe Daniel more than remembrance. We owe one another a clear answer when the next hazard is named. [Long pause.] Let the silence be followed by action.",
            },
          ],
        },
        {
          type: "rules",
          title: "Score the speech before delivering it",
          items: [
            "Mark the information focus: the word or phrase that changes the proposition, not every important noun.",
            "Use shorter thought groups around contrast, evidence and moral judgement.",
            "Let a pause follow a consequential fact before interpreting it.",
            "Reserve the slowest tempo for the request or commitment, not for every emotional sentence.",
            "Use anaphora with parallel rhythm, but do not stack devices until the speech sounds ceremonial.",
            "Allow silence after the final line; the audience needs time to recognise what has been asked of them.",
          ],
        },
        {
          type: "exercise",
          title: "Hear the intended emphasis",
          instructions:
            "Choose the delivery that makes the meaning precise. Read the selected line with the indicated contrast or pause.",
          items: [
            c(
              "In ‘A warning was given. A warning was recorded. A warning was not acted on’, where should the strongest stress fall?",
              [
                "Equally on ‘warning’ each time, with no variation.",
                "On ‘not acted on’ in the final sentence.",
                "Only on the first word of the speech.",
              ],
              1,
              "The final phrase carries the moral contrast; the repeated structure builds towards it, so the strongest emphasis belongs there.",
            ),
            c(
              "Where is a pause most effective in ‘The repair was logged. The guard was not replaced’?",
              [
                "Between the two sentences, after ‘logged’.",
                "In the middle of every word.",
                "Nowhere, because rapid delivery sounds more authoritative.",
              ],
              0,
              "The pause exposes the gap between recording a problem and fixing it, allowing the audience to perceive the contrast.",
            ),
            c(
              "Which use of repetition is purposeful?",
              [
                "Repeating the same vague claim with increasingly complicated adjectives.",
                "Repeating a parallel clause to accumulate evidence or moral weight.",
                "Repeating a sentence because the speaker has forgotten the next one.",
              ],
              1,
              "Parallel repetition can build a controlled cumulative effect, especially when each clause advances the argument.",
            ),
            c(
              "How should the final request in a serious speech be delivered?",
              [
                "Very loudly and as quickly as possible.",
                "With a slow, clear thought group followed by stillness.",
                "With an apologetic trailing phrase that weakens the request.",
              ],
              1,
              "Measured delivery and a clean stop give the request weight without making it sound aggressive or uncertain.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Score and perform a short address",
          instructions:
            "Mark at most four pauses and four stresses. Perform once for meaning and once for rhythm, then remove any effect that feels performed rather than necessary.",
          items: [
            p(
              "Deliver a memorial line for a teacher who made difficult students feel capable.",
              "Model answer: Ms Alvarez did not tell us that we were brilliant. [Pause.] She showed us what we could do with sustained effort. [Pause.] The confidence she gave us was not a comfort; it was a demand to keep going. [Stillness.] The best way to honour her is to create that demand for someone else.",
              "Use contrast between praise and demonstrated capability; slow the final commitment."),
            p(
              "Speak about a regulator's decision to publish inspection failures.",
              "Model answer: Transparency is not punishment. [Pause.] It is the condition under which the public can judge whether a warning has been heard. We will publish the failures, the corrective deadlines and the evidence of repair. [Pause.] We will not publish names merely because they are easy to headline.",
              "Contrast transparency with punishment, then distinguish the public interest from spectacle."),
            p(
              "Close a speech asking colleagues to report near misses without fear.",
              "Model answer: A near miss is not proof that someone is careless. It is evidence that a system came close to harm. [Pause.] Reporting one should begin learning, not a search for blame. [Slow.] I ask every team to make that promise explicit today.",
              "Stress ‘system’ and ‘learning’, then slow the actionable request."),
          ],
        },
        {
          type: "text",
          title: "Rhythm is an ethical choice",
          paragraphs: [
            "A speaker can use rhythm to clarify which facts deserve scrutiny and which values deserve weight. The same sentence can honour a person or turn them into a prop merely through timing and emphasis. Perform the words as if the people affected may hear them.",
            "When rehearsal becomes overly theatrical, return to a plain conversational reading. The aim is controlled meaning, not vocal display. A single well-placed silence is usually stronger than a sequence of dramatic pauses.",
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does Mara stress ‘not acted on’ most strongly?",
          [
            "To make every word equally prominent",
            "To foreground the failure that links the recorded warning to the harm",
            "To avoid mentioning the loading bay",
          ],
          1,
          "The final clause carries the decisive contrast between documentation and action, so emphasis should reveal that meaning.",
        ),
        q(
          2,
          "What is the purpose of the pause after ‘The repair was logged’?",
          [
            "To allow the audience to feel the gap between logging and replacement.",
            "To suggest the speaker has forgotten the line.",
            "To make the technical detail harder to hear.",
          ],
          0,
          "The silence creates a rhetorical contrast and gives the listener time to register the significance of the missing action.",
        ),
        q(
          3,
          "Why does Mara object to the word ‘accident’?",
          [
            "Because technical language can never be used in a memorial.",
            "Because she wants to replace evidence with emotion.",
            "Because it could conceal the unaddressed warning and imply that nothing was preventable.",
          ],
          2,
          "The concern is that a familiar label may close inquiry into the known warning rather than illuminate what happened.",
        ),
        q(
          4,
          "What distinguishes controlled repetition from filler?",
          [
            "It is always louder.",
            "It has a parallel structure and advances a cumulative point.",
            "It repeats vague language until the time limit ends.",
          ],
          1,
          "Purposeful repetition adds emphasis or evidence at each recurrence; filler merely occupies time without development.",
        ),
      ],
    },
    {
      slug: "commanding-a-room",
      title: "Commanding a room",
      summary:
        "Establish control of a challenging public room through spatial attention, concise framing and firm management of the exchange.",
      objective:
        "Take command of a skeptical audience by setting the frame, holding attention and responding to intervention without rushing or dominating.",
      minutes: 30,
      blocks: [
        {
          type: "dialogue",
          title: "The investor-day challenge",
          intro:
            "A chief executive enters a room where analysts have already circulated a critical report. Her first minute establishes the frame without dismissing the concern.",
          lines: [
            {
              speaker: "Chair",
              text: "The first question concerns the 14% fall in new subscriptions.",
            },
            {
              speaker: "Chief executive",
              text: "The decline is real, and I will address its causes before taking questions. There are three issues in the room today: what changed in acquisition, what remains structurally healthy, and what we are doing that can be measured by the next results.",
            },
            {
              speaker: "Analyst",
              text: "With respect, that sounds like an attempt to manage the narrative.",
            },
            {
              speaker: "Chief executive",
              text: "The figures are the figures; I am not asking you to reinterpret them. New subscriptions fell because we stopped buying low-retention traffic. Revenue from those customers had masked weaker organic growth. That correction reveals a problem, and it also removes a cost we should never have accepted.",
            },
            {
              speaker: "Chief executive",
              text: "I will take questions on the assumptions, but I will not pretend that one answer removes the decline. By the end of this session, you should know the retention data, the acquisition-cost saving and the milestones for the revised plan.",
            },
            {
              speaker: "Chair",
              text: "Please begin with the retention data.",
            },
          ],
        },
        {
          type: "table",
          title: "Command without volume",
          columns: ["Room-management move", "What it controls", "Example"],
          rows: [
            ["Pause before the first word", "Attention and tempo", "Look across the room, then begin."],
            ["Name the uncomfortable fact", "The frame of the discussion", "The decline is real."],
            ["Publish the agenda", "Predictability and scope", "Causes, remaining strengths, measurable action."],
            ["Answer the meta-challenge", "Credibility without defensiveness", "The figures are the figures."],
            ["State the terms of questions", "Time and depth", "I will test assumptions, not relitigate the reported number."],
            ["Land before the next question", "Closure and recall", "Here is what you should know before we leave."],
          ],
          caption:
            "Commanding a room is not the same as preventing challenge. It means ensuring that challenge occurs on a clear frame, with fair turns and substantive answers.",
        },
        {
          type: "exercise",
          title: "Choose the room-controlling move",
          instructions:
            "Select the intervention that holds authority while preserving scrutiny and attention.",
          items: [
            c(
              "Several audience members call out questions at once. What is the strongest response?",
              [
                "Answer the loudest person immediately.",
                "I will take one question at a time; please raise your hand and state your name.",
                "Ignore all questions and finish the prepared script.",
              ],
              1,
              "A brief procedural instruction restores turn-taking without surrendering the floor or silencing legitimate questions.",
            ),
            c(
              "An analyst accuses you of ‘managing the narrative’. What is the strongest reply?",
              [
                "I am not managing anything; your report is hostile.",
                "The figures are the figures; I am explaining causes and commitments so you can test them.",
                "You would not understand the complexity.",
              ],
              1,
              "The response defends neither ego nor ambiguity; it returns to verifiable evidence and the purpose of the explanation.",
            ),
            c(
              "Where should eye contact be directed during a difficult opening?",
              [
                "Only to the most senior person in the front row.",
                "At the screen for the entire opening.",
                "Across the room, briefly holding different listeners rather than scanning constantly.",
              ],
              2,
              "Distributed attention includes the whole audience and avoids suggesting that only one powerful listener matters.",
            ),
            c(
              "Which sentence best sets terms for a hostile Q&A?",
              [
                "I will answer whatever comes into my head.",
                "Questions must be easy and supportive.",
                "I will answer the assumptions behind the result and publish what cannot be settled today.",
              ],
              2,
              "The boundary is specific and fair, and the commitment to publish unresolved points preserves accountability.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Take command of a skeptical room",
          instructions:
            "Stand if possible and rehearse with two listeners who interrupt once. Focus on the first sentence, the frame and the quality of your pause before responding.",
          items: [
            p(
              "Open a public meeting after a report criticises your charity's administrative costs.",
              "Model answer: The report puts administrative spending at 18%, and I will not dispute that figure. The question it raises is whether the spending produces reliable services. I will show the cost categories, the outcomes purchased and the comparison with similar charities, then take questions. Where the comparison is weak, I will say so.",
              "Name the criticism, define the evaluative question and promise evidence rather than reassurance."),
            p(
              "Respond when an audience member says your presentation is propaganda.",
              "Model answer: I am making a recommendation, so you should test its assumptions rather than accept it. The evidence I will use is public, the estimates are labelled and the weakest case is included. If those conditions do not distinguish an argument from propaganda, tell me which claim fails the test.",
              "Do not deny advocacy; define the standards by which it can be scrutinised."),
            p(
              "Close a difficult meeting with clear next steps.",
              "Model answer: We have not resolved the disagreement about the future of the service. We have resolved what evidence will be reviewed, who will obtain it and when the decision returns. Operations will provide the cost model, the user panel will document access needs, and I will publish both by 18 June. We leave today with a process, not a pretence of agreement.",
              "Distinguish procedural progress from substantive consensus and assign the next actions."),
          ],
        },
        {
          type: "tip",
          title: "Stillness creates space",
          text: "Before answering an interruption, stop moving and take one breath. This small physical reset prevents your response from matching the challenger's tempo. Do not pace while stating a difficult fact; a stable position gives the words weight and gives you time to choose the next sentence.",
        },
      ],
      quiz: [
        q(
          1,
          "Why does the chief executive state that the decline is real?",
          [
            "To concede that the entire strategy has failed.",
            "To establish a shared factual starting point and prevent debate about whether the number exists.",
            "To discourage analysts from asking any questions.",
          ],
          1,
          "Accepting the reported figure separates the argument about meaning and response from an unproductive dispute over the fact itself.",
        ),
        q(
          2,
          "What is the strongest response to the charge of managing the narrative?",
          [
            "Attack the analyst's motives.",
            "Return to public figures, labelled assumptions and testable commitments.",
            "Refuse to explain the causes of the decline.",
          ],
          1,
          "The second response treats the meta-challenge as a request for transparency and makes the explanation open to scrutiny.",
        ),
        q(
          3,
          "How does publishing an agenda help a speaker command a room?",
          [
            "It allows the speaker to avoid all spontaneous questions.",
            "It guarantees agreement with the recommendation.",
            "It gives the audience a predictable structure and limits attempts to seize the frame.",
          ],
          2,
          "A clear agenda makes the discussion more orderly without preventing challenge within its stated scope.",
        ),
        q(
          4,
          "What is the difference between command and dominance?",
          [
            "Command structures attention and turns; dominance suppresses legitimate challenge.",
            "Command always requires a louder voice.",
            "There is no meaningful difference in public speaking.",
          ],
          0,
          "Command concerns purposeful process and clarity, whereas dominance depends on controlling or excluding other participants.",
        ),
      ],
    },
    {
      slug: "handling-silence-and-pressure",
      title: "Handling silence and pressure",
      summary:
        "Remain composed when a room goes quiet, resist filling uncertainty with rhetoric and turn prolonged pressure into a precise decision point.",
      objective:
        "Manage silence, hostile follow-ups and visible pressure without bluffing, over-explaining or abandoning a defensible position.",
      minutes: 29,
      blocks: [
        {
          type: "dialogue",
          title: "The silent board",
          intro:
            "A chief risk officer has recommended pausing a product. The board's silence is not necessarily agreement; it may be disagreement that no one wants to voice.",
          lines: [
            {
              speaker: "Chair",
              text: "We have heard your recommendation to suspend sales. There will be a short pause for reflection.",
            },
            {
              speaker: "Risk officer",
              text: "[Wait. Do not fill the silence.] Take the time you need.",
            },
            {
              speaker: "Director",
              text: "Are you saying the product is unsafe?",
            },
            {
              speaker: "Risk officer",
              text: "I am saying we have received two reports of overheating, and the third batch has not passed the independent thermal test. I cannot establish the full risk without that result. The suspension is a precaution, not a final finding.",
            },
            {
              speaker: "Chair",
              text: "And if the test passes next week?",
            },
            {
              speaker: "Risk officer",
              text: "We can review the evidence and decide whether to resume under the existing controls. I would not restart on the calendar alone.",
            },
            {
              speaker: "Risk officer",
              text: "[After another silence.] What evidence would you need to support the suspension, or what assumption is preventing a decision?",
            },
          ],
        },
        {
          type: "table",
          title: "What silence may mean",
          columns: ["Possible meaning", "Useful response", "Response to avoid"],
          rows: [
            ["People are thinking", "Wait, then ask a narrow question.", "Repeating the proposal louder"],
            ["People disagree but fear consequences", "Invite the strongest objection explicitly.", "Treat quiet as consent"],
            ["The information is shocking", "Acknowledge impact, then restate the verified facts.", "Filling the gap with reassurance"],
            ["The decision lacks authority", "Identify who can approve and what they require.", "Pushing for a vote without the owner"],
            ["You have lost the thread", "Summarise the decision and next question.", "Starting the entire presentation again"],
          ],
          caption:
            "A pause can last five to seven seconds without damaging authority. The discomfort is often yours, not the room's; let the silence do some work.",
        },
        {
          type: "exercise",
          title: "Choose the pressure-tested response",
          instructions:
            "Select the response that preserves precision and decision quality when the room becomes quiet or hostile.",
          items: [
            c(
              "The board remains silent after your recommendation. What should you do?",
              [
                "Assume unanimous agreement and move on.",
                "Weaken the recommendation to fill the discomfort.",
                "Wait, then ask what evidence or assumption is preventing a decision.",
              ],
              2,
              "The question converts silence into explicit deliberation and reveals the real obstacle without treating quiet as consent.",
            ),
            c(
              "A director asks, ‘So you are saying the product is unsafe?’ What is the best answer?",
              [
                "Yes, absolutely; there can be no doubt.",
                "Two overheating reports and an incomplete thermal test justify a precautionary pause, not a final safety finding.",
                "No risk exists, so the question is absurd.",
              ],
              1,
              "The second answer distinguishes the evidence and the precaution from a conclusion that the available information cannot support.",
            ),
            c(
              "Someone demands an immediate answer you cannot verify. What should you say?",
              [
                "I do not have a verified answer; I will obtain it from the test authority before we resume.",
                "I think it is probably fine.",
                "We can assume the best possible outcome.",
              ],
              0,
              "A clear limit plus a defined source and decision condition is more authoritative than an improvised estimate.",
            ),
            c(
              "Which question best surfaces hidden resistance?",
              [
                "Does everyone feel good about this?",
                "What is the strongest argument against the recommendation?",
                "Can we finish quickly?",
              ],
              1,
              "The direct invitation to state the strongest objection is more likely to reveal substantive concerns than a vague request for positive feelings.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise the disciplined pause",
          instructions:
            "Have a partner remain silent for seven seconds after each answer. Your task is to wait, breathe and ask one useful question instead of adding another paragraph.",
          items: [
            p(
              "Hold your position after recommending a pause to a public launch.",
              "Model answer: I recommend pausing the launch until the accessibility audit is complete. [Wait.] I recognise the commercial cost. What evidence would you need to lift the pause, and which outstanding barrier do you believe can be resolved before then?",
              "Do not reduce the recommendation merely to escape the silence."),
            p(
              "Respond when a senior colleague demands, ‘Are you certain?’",
              "Model answer: I am certain that the current control is inadequate: it has failed twice and the replacement has not been validated. I am not yet certain about the full exposure. That distinction is why I recommend containment today and a risk review when the validation report arrives.",
              "Separate confidence in the observed control failure from uncertainty about the wider outcome."),
            p(
              "Close a silent negotiation when the other side will not respond to your final offer.",
              "Model answer: That is our final package: the same price with the revised delivery guarantee. [Wait.] If it is not acceptable, please tell me which term prevents agreement. We can then decide whether there is a further trade to explore or whether to close the discussion today.",
              "Use a narrow choice to test deadlock without bargaining against yourself."),
          ],
        },
        {
          type: "tip",
          title: "Do not negotiate with your own silence",
          text: "Pressure often tempts a speaker to add concessions, qualifications or promises that were not part of the considered position. Let the pause remain. If the other side will not speak, state the available options and the consequence of no decision. Composure is the ability to tolerate uncertainty without immediately changing the argument.",
        },
      ],
      quiz: [
        q(
          1,
          "Why should silence not be treated as agreement?",
          [
            "Because silence always means hostility",
            "Because it may reflect thought, fear or unresolved disagreement rather than consent",
            "Because meetings should never contain pauses",
          ],
          1,
          "Quiet has several possible causes, so a decision-maker should test it rather than infer consent.",
        ),
        q(
          2,
          "What justifies the risk officer's precautionary recommendation?",
          [
            "A completed finding that the product is unsafe",
            "Two overheating reports and an incomplete independent thermal test",
            "A desire to avoid all commercial pressure",
          ],
          1,
          "The evidence and the missing test support a precaution while leaving the final safety judgement open.",
        ),
        q(
          3,
          "Which question is most useful after a prolonged silence?",
          [
            "What is the strongest argument against the recommendation?",
            "Why is everyone being so difficult?",
            "Can we pretend this is settled?",
          ],
          0,
          "The invitation to state the strongest objection surfaces substantive resistance that general reassurance might conceal.",
        ),
        q(
          4,
          "What is the central discipline under pressure?",
          [
            "Speak continuously so the room cannot interrupt.",
            "Make increasingly ambitious promises.",
            "Preserve the distinction between known facts, uncertainty and the decision they support.",
          ],
          2,
          "Precision under pressure depends on maintaining those distinctions rather than filling silence with false certainty.",
        ),
      ],
    },
    {
      slug: "establishing-authority-without-dominance",
      title: "Establishing authority without dominance",
      summary:
        "Lead through expertise, fair process and decisive judgement while making it safe for others to challenge evidence and contribute authority of their own.",
      objective:
        "Assert a clear position without status theatre, invite substantive dissent and use distributed expertise to strengthen the final decision.",
      minutes: 30,
      blocks: [
        {
          type: "dialogue",
          title: "The research review",
          intro:
            "A senior scientist's preferred interpretation is challenged by a junior researcher. Her response determines whether expertise protects inquiry or closes it.",
          lines: [
            {
              speaker: "Professor",
              text: "The sample shows a clear cognitive benefit, and I recommend immediate clinical use.",
            },
            {
              speaker: "Junior researcher",
              text: "The benefit appears only in participants who already had high baseline performance. I think the conclusion is too broad.",
            },
            {
              speaker: "Professor",
              text: "That is a material challenge. Show us the subgroup analysis and explain whether the interaction was specified before the study began.",
            },
            {
              speaker: "Junior researcher",
              text: "It was exploratory. The sample is also small, so the pattern may be noise.",
            },
            {
              speaker: "Professor",
              text: "Then we should not use the subgroup to narrow or broaden clinical claims until it is replicated. My recommendation changes accordingly: report the main result, label the subgroup as exploratory and withhold clinical adoption. Thank you for identifying the limit.",
            },
            {
              speaker: "Chair",
              text: "Does anyone else see evidence that could change that decision?",
            },
            {
              speaker: "Professor",
              text: "I would like to hear from the statistician before we finalise the wording, even if it complicates the recommendation.",
            },
          ],
        },
        {
          type: "examples",
          title: "Authority that distributes attention",
          intro:
            "A senior speaker can be decisive without making every contribution subordinate to status.",
          items: [
            {
              text: "Ask for the basis: ‘Show us the analysis and tell us whether the test was pre-specified.’",
              note: "Authority is exercised through methodological standards, not through rank.",
            },
            {
              text: "Change the recommendation: ‘The exploratory result cannot support clinical adoption.’",
              note: "A visible reversal when evidence requires it increases rather than decreases credibility.",
            },
            {
              text: "Invite the next expert: ‘I want the statistician's assessment before we fix the wording.’",
              note: "The leader makes room for expertise that may complicate the preferred outcome.",
            },
            {
              text: "State the decision and its reason: ‘We will report the main result and withhold adoption pending replication.’",
              note: "Inclusion does not remove the need for a clear accountable judgement.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose authoritative inclusion",
          instructions:
            "Select the response that protects high standards while allowing genuine challenge and distributed expertise.",
          items: [
            c(
              "A junior colleague identifies a flaw in your analysis. What is the strongest response?",
              [
                "Ask for the evidence and assess it against the agreed methodological standard.",
                "Remind the room that you have published more papers.",
                "End the discussion because the challenge is disrespectful.",
              ],
              0,
              "The first response demonstrates authority through inquiry and standards rather than through professional status.",
            ),
            c(
              "Which phrase makes dissent safer without guaranteeing agreement?",
              [
                "Agree with me or the project will fail.",
                "I want the strongest objection to this interpretation before we record the finding.",
                "Junior staff should not challenge senior conclusions.",
              ],
              1,
              "The invitation asks for substantive scrutiny and signals that objections will be heard, not that they will automatically prevail.",
            ),
            c(
              "Why does the professor change the recommendation?",
              [
                "To avoid making any decision.",
                "To show that evidence can legitimately alter a senior speaker's judgement.",
                "To punish the junior researcher for speaking.",
              ],
              1,
              "The revision demonstrates that the recommendation was governed by evidential standards rather than personal attachment to the original interpretation.",
            ),
            c(
              "What is the best way to close after inviting dissent?",
              [
                "Ask whether everyone feels positive.",
                "State the decision, its evidential basis and the condition for review.",
                "Leave the outcome deliberately ambiguous.",
              ],
              1,
              "A clear conclusion with review conditions preserves accountability after a genuinely open discussion.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Lead without closing down inquiry",
          instructions:
            "Practise each response with a partner who disagrees substantively. Your goal is to make the disagreement more precise, not to make it disappear.",
          items: [
            p(
              "Respond when a colleague challenges your preferred supplier recommendation.",
              "Model answer: The current recommendation rests on delivery reliability and total cost, not on our previous relationship with the supplier. Which evidence contradicts those criteria? I will ask Procurement to compare the complaint data and the exit terms before we decide.",
              "Name the criteria and invite a testable challenge rather than defending the relationship."),
            p(
              "Invite a quieter specialist into a meeting dominated by senior voices.",
              "Model answer: Before we close, I want to hear from Clinical Safety because this decision affects their operating procedure. Please identify the strongest implementation risk you see, and then we will hear any response from Operations.",
              "Intervene in the process explicitly and request a bounded, relevant contribution."),
            p(
              "Acknowledge a valid objection and retain a clear decision.",
              "Model answer: Your objection is correct: the pilot does not establish long-term retention. That limits the claim we can make, but it does not remove the evidence for short-term usability. We will proceed with a limited pilot, describe only the short-term outcome and require a twelve-month review before scaling.",
              "Concede the precise limit and distinguish it from the decision the evidence can still support."),
          ],
        },
        {
          type: "tip",
          title: "Use status to protect the standard",
          text: "A senior speaker can interrupt status games, require evidence and ensure that quieter expertise is heard. That is a constructive use of authority. The test is simple: after the discussion, can participants state what was decided, why, and which objection still matters? If not, dominance may have replaced leadership.",
        },
      ],
      quiz: [
        q(
          1,
          "How does the professor demonstrate authority in the research review?",
          [
            "By asking for the subgroup analysis and applying the pre-specification standard.",
            "By refusing to let a junior researcher speak.",
            "By treating seniority as proof of the interpretation.",
          ],
          0,
          "Her authority is exercised through methodological scrutiny and a reasoned decision, not through rank.",
        ),
        q(
          2,
          "Why is the exploratory subgroup not enough for clinical adoption?",
          [
            "Because all subgroup analyses are inherently dishonest.",
            "Because it was identified after the fact in a small sample and requires replication.",
            "Because junior researchers cannot contribute to clinical research.",
          ],
          1,
          "The post-hoc nature and small sample make the result uncertain, so it cannot bear a clinical claim without further testing.",
        ),
        q(
          3,
          "What is the effect of changing the recommendation in public?",
          [
            "It proves the professor had no original judgement.",
            "It confuses the decision process.",
            "It shows that evidence, not status, governs the conclusion.",
          ],
          2,
          "A reasoned revision makes the evidential standard visible and encourages others to report limitations honestly.",
        ),
        q(
          4,
          "Which behaviour is dominance rather than leadership?",
          [
            "Inviting the strongest objection.",
            "Requiring a clear decision and review condition.",
            "Ending inquiry because a junior participant challenged a senior conclusion.",
          ],
          2,
          "Closing down a substantive challenge to protect status suppresses inquiry; leadership protects the standard even when it complicates the preferred result.",
        ),
      ],
    },
  ],
};
