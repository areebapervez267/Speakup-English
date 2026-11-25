import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1SpeakingUnit3: LessonUnit = {
  title: "Presentation and storytelling",
  description:
    "Design memorable narratives, control your delivery, handle audience questions and reshape a true story without distorting its meaning.",
  lessons: [
    {
      slug: "designing-a-clear-narrative",
      title: "Designing a clear narrative",
      summary:
        "Turn a complicated project into a purposeful narrative with tension, choice, evidence and a transformation the audience can remember.",
      objective:
        "Structure a presentation story around a meaningful problem, consequential choice and supported resolution rather than a chronology of activity.",
      minutes: 32,
      blocks: [
        {
          type: "dialogue",
          title: "Launching the repaired-device service",
          intro:
            "A service designer is presenting to hospital procurement managers. Listen for the contrast between an activity list and a story about changed outcomes.",
          lines: [
            {
              speaker: "Priya",
              text: "Last year, our biomedical team spent 41 hours waiting for replacement pumps to arrive. One cancelled infusion had to be rescheduled because the only compatible spare was in another region. That was the moment the problem became personal rather than procedural.",
            },
            {
              speaker: "Procurement lead",
              text: "What option did you consider?",
            },
            {
              speaker: "Priya",
              text: "We could buy more spares, but each pump costs £18,000 and would sit unused most of the year. Instead, we built a shared repair and calibration service with two neighbouring trusts. Technicians now exchange certified devices before faults become emergencies.",
            },
            {
              speaker: "Procurement lead",
              text: "Has it made a measurable difference?",
            },
            {
              speaker: "Priya",
              text: "In the first six months, waiting time fell from 31 hours to 7, and only one infusion was rescheduled for equipment shortage. The service is not perfect: cross-border certification still adds delay. That is why the next phase focuses on a common inspection standard. Our story is not simply that we repaired devices; we changed who could access a working one, and when.",
            },
            {
              speaker: "Procurement lead",
              text: "What decision would you like the three trusts to make next?",
            },
            {
              speaker: "Priya",
              text: "Approve a shared inspection standard and a single emergency exchange route, so the next opening image is a compatible pump arriving before an infusion is delayed.",
            },
          ],
        },
        {
          type: "rules",
          title: "Narrative architecture for presentations",
          items: [
            "Open on a specific moment of tension, not a history of the organisation.",
            "Define the stakes: identify who is affected and what failure costs them.",
            "Make the choice visible: name the realistic alternatives and why one was rejected.",
            "Use evidence as the turning point: show what changed after the decision.",
            "Acknowledge the unfinished tension: a credible story includes the next obstacle.",
            "Return to the opening image with a changed meaning: the spare pump is now a shared service, not a warehouse object.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the narrative move",
          instructions:
            "Select the detail or structure that creates meaningful development rather than simply adding information.",
          items: [
            c(
              "Which opening best creates narrative tension for a presentation about an online appointment system?",
              [
                "Our organisation has five departments and a long history.",
                "At 8:55, a patient reached the clinic to find that her appointment had been booked in the wrong month.",
                "The system uses a modern technical architecture.",
              ],
              1,
              "The specific moment makes the abstract problem consequential and invites the audience to ask how it will be resolved.",
            ),
            c(
              "Why should a presenter explain the rejected alternative?",
              [
                "It makes the recommended choice appear considered and reveals the real trade-off.",
                "It allows the presenter to avoid evidence.",
                "It guarantees that every alternative was equally effective.",
              ],
              0,
              "Showing why another option was rejected demonstrates judgement and helps the audience understand what the recommendation sacrifices.",
            ),
            c(
              "Which ending most effectively completes the story?",
              [
                "We have done many activities and there is more to discuss.",
                "The pump that once waited in another region now arrives before the infusion begins.",
                "Thank you for your time; here are my contact details.",
              ],
              1,
              "Returning to the opening problem with a changed outcome gives the audience a concrete image of the transformation.",
            ),
            c(
              "How should an unresolved obstacle usually be presented?",
              [
                "As proof that the whole project was worthless.",
                "As a reason to hide the weakness from the audience.",
                "As the next source of tension that gives the story forward direction.",
              ],
              2,
              "An honest unresolved challenge extends the narrative and shows that the outcome is a stage in continuing improvement, not a fairy-tale finish.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Tell the story behind a change",
          instructions:
            "Plan five beats, then speak for two minutes without slides. Make the evidence part of the plot rather than a separate appendix.",
          items: [
            p(
              "Tell the story of introducing a quieter check-in area at a busy advice centre.",
              "Model answer: The turning point was a volunteer showing me a handwritten note from a visitor: ‘I cannot hear you, and everyone can hear me.’ We had focused on reducing queues, but our design exposed private conversations to the whole room. Moving two desks and adding acoustic screens cost less than a new extension. After eight weeks, complaints about overheard conversations fell sharply, although the entrance queue remains difficult at peak times. The room is not finished; the next decision is how to stagger arrivals without penalising people who need urgent help.",
              "Use a human moment, a decision, evidence and an unresolved next problem."),
            p(
              "Present a narrative about reducing food waste in a school kitchen.",
              "Model answer: A bin audit showed that the problem was not cooking but portion size: younger pupils discarded food they could not finish. The team considered smaller menus, but that would reduce choice. Instead, cooks introduced two portion sizes and a shared bowl for unfinished sides. Waste by weight fell by 22% over one term, while more pupils stayed for lunch. Staff still spend longer plating meals, so the next test is whether a simpler serving layout saves time without recreating waste.",
              "Explain the rejected option and treat the benefit as a measured change, not a slogan."),
            p(
              "Tell a ninety-second story about a failed public cycle map.",
              "Model answer: We launched the first map with pride, then watched a delivery rider take a route through a stairwell because our symbol looked like a shortcut. The map had been designed from planning data rather than street-level knowledge. We invited riders to walk the routes with us and discovered six unsafe junctions and two missing connections. The revised map is less elegant but more usable. Its success will be measured by whether people choose it without asking staff for directions.",
              "Use the failure as a turning point and let the changed behaviour define success."),
          ],
        },
        {
          type: "table",
          title: "Activity list versus narrative",
          columns: ["Activity account", "Narrative question", "Possible spoken line"],
          rows: [
            ["‘We ran four workshops.’", "What did the workshops reveal?", "The fourth workshop exposed a conflict we had missed."],
            ["‘We installed acoustic screens.’", "What problem did that choice solve?", "For the first time, visitors could discuss benefits without being overheard."],
            ["‘Waste fell by 22%.’", "What had changed to produce that result?", "Smaller portions gave younger pupils a finishable meal."],
            ["‘We will improve the service.’", "What tension remains?", "The next bottleneck moves from the desk to the entrance."],
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What gives Priya's opening its narrative force?",
          [
            "It begins with a concrete cancelled infusion caused by an inaccessible spare pump.",
            "It lists the hospital's departments and budget.",
            "It states the project's technical specification before any problem.",
          ],
          0,
          "The specific event creates stakes and emotional relevance, giving the audience a reason to care about the operational problem.",
        ),
        q(
          2,
          "Why is the alternative of buying more spares included?",
          [
            "To show that no decision was necessary",
            "To reveal the cost trade-off and make the shared-service choice intelligible",
            "To prove that spare pumps are never useful",
          ],
          1,
          "The £18,000 cost and likely underuse explain why procurement alone did not solve the access problem.",
        ),
        q(
          3,
          "What is the effect of mentioning cross-border certification at the end?",
          [
            "It invalidates all previous results.",
            "It hides a weakness from procurement managers.",
            "It introduces the next tension and makes the improvement story credible.",
          ],
          2,
          "Acknowledging a remaining obstacle extends the narrative and signals that the service is still developing.",
        ),
        q(
          4,
          "Which detail best completes the narrative arc?",
          [
            "The number of meetings held in 2023",
            "A list of everyone who contributed",
            "The spare pump now arrives before the infusion begins",
          ],
          2,
          "The image returns to the original problem and demonstrates transformation through a concrete changed outcome.",
        ),
      ],
    },
    {
      slug: "delivery-pacing-and-presence",
      title: "Delivery, pacing and presence",
      summary:
        "Use controlled pace, strategic pauses and physical stillness to make a demanding presentation clear, credible and memorable.",
      objective:
        "Deliver a structured presentation with deliberate variation in pace, clean emphasis and body language that supports rather than distracts.",
      minutes: 31,
      blocks: [
        {
          type: "dialogue",
          title: "Before the climate-finance keynote",
          intro:
            "A speaker coach is rehearsing the opening of a technical keynote. The delivery notes identify where pace changes and where stillness replaces movement.",
          lines: [
            {
              speaker: "Elena",
              text: "In 2019, this district recorded nine days above forty degrees. Last summer, the figure was twenty-three. [Pause. Let the comparison land.] The question is no longer whether the climate here is changing. It is whether our financial decisions are changing with it.",
            },
            {
              speaker: "Coach",
              text: "Good contrast. You rushed the figures. Give the audience time to hear both numbers.",
            },
            {
              speaker: "Elena",
              text: "Nine days. [Pause.] Twenty-three. [Stillness.] I will make three points: where the risk sits, which investment reduces it, and how we will know the money worked.",
            },
            {
              speaker: "Coach",
              text: "That map helps. Now slow the recommendation rather than the whole speech.",
            },
            {
              speaker: "Elena",
              text: "We should shift the first tranche from general maintenance to shaded public routes and reflective roofs. [Pause.] Those interventions protect people who cannot afford private cooling. I will show the cost model, the maintenance plan and the public reporting standard behind that recommendation.",
            },
            {
              speaker: "Coach",
              text: "Keep that pause before the request, look directly at the committee and let the final sentence land without adding volume.",
            },
          ],
        },
        {
          type: "table",
          title: "A delivery score",
          columns: ["Moment", "Pace", "Voice", "Body"],
          rows: [
            ["Opening contrast", "Slow enough for each number to register", "Level volume; stress the changed figure", "Face the audience; no pacing"],
            ["Road map", "Slightly quicker, with clean separation", "Stress ‘risk’, ‘investment’ and ‘evidence’", "Open hands for the three points"],
            ["Technical explanation", "Measured; pause after each causal link", "Lower pitch at the end of completed units", "Stay still while explaining complexity"],
            ["Recommendation", "Slowest section, not necessarily loudest", "Use weight rather than volume", "Step forward once, then stop"],
            ["Transition", "Brief reset before the next idea", "Let the final word decay naturally", "Change position only at a section boundary"],
          ],
          caption:
            "Presence comes from intentional attention, not constant movement. A speaker who looks at the audience while thinking appears more assured than one who performs confidence.",
        },
        {
          type: "exercise",
          title: "Diagnose the delivery choice",
          instructions:
            "Choose the delivery adjustment that improves comprehension and authority. Explain why the other choices would distract or mislead.",
          items: [
            c(
              "The audience has missed a crucial contrast between 9 and 23. What should the speaker do?",
              [
                "Repeat both figures with a pause between them and stress the larger figure.",
                "Speak faster so the contrast feels more energetic.",
                "Read the entire slide word for word.",
              ],
              0,
              "Separating and stressing the figures gives the audience time to process the comparison that carries the argument.",
            ),
            c(
              "Where is a change of physical position most effective?",
              [
                "Every few seconds to show energy",
                "At a major section transition",
                "Whenever the speaker forgets a word",
              ],
              1,
              "Movement at a section boundary can reinforce structure; constant movement competes with the content and obscures transitions.",
            ),
            c(
              "How should a speaker deliver a high-stakes recommendation?",
              [
                "Rapidly, to avoid appearing hesitant",
                "Very loudly on every word",
                "More slowly, with one clear pause before the requested action",
              ],
              2,
              "Slower delivery and selective pause give weight to the decision without turning emphasis into shouting.",
            ),
            c(
              "What should a speaker do after making a verbal slip?",
              [
                "Apologise for several sentences and restart the entire talk.",
                "Correct the slip briefly if it changes meaning, then continue.",
                "Pretend the original statement was never heard.",
              ],
              1,
              "A concise correction protects accuracy while preserving flow; excessive apology draws attention away from the argument.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Direct a three-minute presentation",
          instructions:
            "Record video or audio. On the second attempt, change only pace, pauses and stillness. Compare which version is easier to follow, not merely which sounds more polished.",
          items: [
            p(
              "Deliver an opening comparing two waiting-time figures at a clinic.",
              "Model answer: Last spring, the median wait for a routine appointment was nineteen days. [Pause.] This spring, it was eleven. [Pause.] That improvement matters, but it hides a difference between our two neighbourhood clinics: at Hill Road, the wait fell to eight; at East Market, it rose to fourteen. I will explain what changed, who benefited and where the service still fails.",
              "Slow the numbers, pause at the contrast and preview the argument rather than announcing your biography."),
            p(
              "Deliver a roadmap for a presentation on urban tree planting.",
              "Model answer: I will make three points. First, where canopy loss creates the greatest heat risk. [Pause.] Second, which planting and maintenance choices survive dry summers. [Pause.] Third, how residents should judge the programme after five years. By the end, I hope you will see tree cover not as a decorative promise but as infrastructure that must be funded and maintained.",
              "Use the same rhythm for each roadmap item, then slow the final reframing."),
            p(
              "Close with a recommendation to fund staff training before buying new software.",
              "Model answer: The software will not repair a process that staff cannot yet follow. [Pause.] My recommendation is therefore to fund training and a simpler workflow first, then select software against the process we have tested. [Stillness.] That sequence costs time now; it reduces the risk of automating confusion at scale.",
              "Let the final sentence stand without adding a verbal full stop such as ‘and so on’."),
          ],
        },
        {
          type: "tip",
          title: "Presence is recoverable",
          text: "If you lose your place, look at your roadmap, breathe and state the next heading: ‘The second point is cost.’ You do not need to recreate the missing sentence perfectly. If a slide fails, continue from the spoken structure. A calm visible reset usually reads as control, whereas frantic movement signals that the speaker has abandoned the argument.",
        },
      ],
      quiz: [
        q(
          1,
          "Why does the coach ask Elena to repeat the figures more slowly?",
          [
            "To make the opening last longer for no reason",
            "To ensure the audience processes the contrast on which the argument depends",
            "To remove all emphasis from the speech",
          ],
          1,
          "The figures carry the opening claim, so intelligibility and time to compare them matter more than pace.",
        ),
        q(
          2,
          "What does stillness contribute during a technical explanation?",
          [
            "It signals that the speaker has stopped thinking.",
            "It hides the audience from the speaker.",
            "It reduces visual competition and makes complex reasoning easier to follow.",
          ],
          2,
          "A stable posture lets listeners concentrate on the explanation instead of interpreting the speaker's movements.",
        ),
        q(
          3,
          "Which section of a presentation should usually be slowest?",
          [
            "The recommendation and requested action",
            "Every section equally, without variation",
            "Only the list of acknowledgements",
          ],
          0,
          "The decision needs time to land and should not be compressed into the same pace as background information.",
        ),
        q(
          4,
          "What is the best recovery after a minor verbal slip?",
          [
            "Restart from the beginning and apologise repeatedly.",
            "Correct it briefly if meaning is affected, then continue.",
            "Ignore it even if it reverses the claim.",
          ],
          1,
          "A brief correction protects accuracy and composure without turning a minor error into a larger interruption.",
        ),
      ],
    },
    {
      slug: "handling-questions-from-an-audience",
      title: "Handling questions from an audience",
      summary:
        "Manage audience questions with active listening, concise answers and disciplined bridging while remaining transparent about uncertainty.",
      objective:
        "Clarify complex questions, answer them in a structured way and maintain authority without bluffing or evading valid challenge.",
      minutes: 33,
      blocks: [
        {
          type: "dialogue",
          title: "The flood-defence question period",
          intro:
            "An engineer has presented a climate-adaptation plan. The first question is multi-part; the second challenges the reliability of the evidence.",
          lines: [
            {
              speaker: "Audience member",
              text: "Will the new defences protect our street, and what happens if the river rises above the design level?",
            },
            {
              speaker: "Engineer",
              text: "There are two questions there: routine protection and performance in an extreme event. The design protects Riverside against the modelled hundred-year flood. Above that level, water would enter through the low market access road; the upper homes would remain dry. We cannot promise zero flooding under every scenario.",
            },
            {
              speaker: "Audience member",
              text: "Your models have been wrong before. Why trust them now?",
            },
            {
              speaker: "Engineer",
              text: "The previous forecast underestimated last year's peak by nine centimetres. We have therefore added a higher safety allowance and tested the model against three independent rainfall records. Uncertainty remains, which is why the plan includes trigger levels for closing the market road and opening the school refuge. I can share the assumptions and the failure analysis after this session.",
            },
            {
              speaker: "Audience member",
              text: "Who pays for the refuge if it opens?",
            },
            {
              speaker: "Engineer",
              text: "The council funds operation through the emergency budget, with the school receiving a service fee. If you mean the longer-term maintenance cost, that sits in the capital plan and I will provide the line item rather than guess.",
            },
          ],
        },
        {
          type: "rules",
          title: "A question-handling protocol",
          items: [
            "Listen to the end; identify whether the question asks for a fact, a judgement, a commitment or reassurance.",
            "Restate a complex question in parts: ‘There are two issues here …’",
            "Answer the most decision-relevant part first and signal when you are doing so.",
            "Separate what is known, estimated and still being investigated.",
            "Use a bridge only after answering: ‘That limit is why we recommend …’",
            "If you do not know, say what you would need to check and how the answer will be provided.",
            "Keep the exchange respectful: challenge the assumption, not the person asking the question.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the controlled answer",
          instructions:
            "Select the response that best handles the audience's real need. Watch for vague reassurance and unnecessary technical detail.",
          items: [
            c(
              "A questioner asks three things at once. What is the best first move?",
              [
                "Answer whichever part is easiest and ignore the rest.",
                "Separate the question into its parts and state which you will answer first.",
                "Ask why the audience member has not read the report.",
              ],
              1,
              "Structuring the question shows that you listened and creates a clear route to a complete answer.",
            ),
            c(
              "You do not know the current contract value. What should you say?",
              [
                "It is probably around a million.",
                "That information is not important.",
                "I do not have the verified figure; I will send the signed total from procurement by tomorrow.",
              ],
              2,
              "This response avoids bluffing while taking ownership of a reliable follow-up.",
            ),
            c(
              "Which phrase most usefully bounds an estimate?",
              [
                "The estimate is between 14 and 18 months, depending on planning approval.",
                "It will take a while, more or less.",
                "The estimate is exact unless conditions change.",
              ],
              0,
              "The range and dependency make the uncertainty intelligible and decision-relevant.",
            ),
            c(
              "When is it appropriate to bridge back to your main recommendation?",
              [
                "Before hearing or answering the question",
                "After answering and linking the issue to the recommendation",
                "Instead of answering any difficult question",
              ],
              1,
              "A bridge is useful when it grows from a completed answer; using it too early feels like evasion.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Handle a demanding question period",
          instructions:
            "Have a partner ask each prompt, then interrupt once with a follow-up. Answer in no more than sixty seconds and name any follow-up you would need.",
          items: [
            p(
              "Answer: ‘Why should we trust your consultation when most young people did not take part?’",
              "Model answer: We should not describe the consultation as representative of young people: only 9% of respondents were under twenty-five. That is a limitation, not a detail to hide. We ran two additional sessions with youth services and changed the evening transport proposal as a result. Before the final decision, I would report participation by age alongside the comments so residents can judge whose views are missing.",
              "State the representativeness limit, the corrective work and the evidence still needed."),
            p(
              "Answer: ‘Is your new early-warning system accurate, and what happens when it fails?’",
              "Model answer: In validation, it correctly identified 91% of test events, with an average warning time of eleven minutes. That does not mean it will perform identically during every storm. If it fails, the backup siren network and manual phone tree remain active. We will publish both missed-event and false-alarm rates after the first winter rather than report accuracy alone.",
              "Pair performance with failure mode and avoid using one accuracy figure as a blanket guarantee."),
            p(
              "Respond to: ‘You say the project is on budget, but you have already changed the scope.’",
              "Model answer: The headline budget is unchanged because we removed the visitor centre and moved those funds to flood protection. That is a scope change, and I should have labelled it clearly. The revised plan delivers less visitor income but protects the core safety objective. I will provide a line-by-line comparison after the session so the trade-off is visible.",
              "Answer the implied concern about transparency, not only the arithmetic."),
          ],
        },
        {
          type: "tip",
          title: "Authority includes visible limits",
          text: "A precise ‘I do not know yet’ is stronger than an improvised answer, provided you state a route to the information. Avoid defensive humour after a serious question. Repeat the questioner's name only if it helps establish eye contact, and do not praise every question before answering it; selective acknowledgement sounds more genuine.",
        },
      ],
      quiz: [
        q(
          1,
          "Why does the engineer divide the first question into two parts?",
          [
            "To avoid answering either part",
            "To make the multi-part question manageable and ensure both issues are addressed",
            "To change the subject to emergency planning",
          ],
          1,
          "The division reveals the distinction between design protection and extreme-event behaviour, allowing a precise answer to each.",
        ),
        q(
          2,
          "What is the strongest response to a challenged forecast?",
          [
            "Insist that models are always correct.",
            "Admit the earlier error, explain the revised safeguards and identify the remaining uncertainty.",
            "Say that the audience should trust the experts.",
          ],
          1,
          "Owning the error and describing validation changes converts a credibility challenge into a transparent account of improvement.",
        ),
        q(
          3,
          "Why does the engineer distinguish operating cost from capital maintenance?",
          [
            "To demonstrate that there are two different cost categories with different owners",
            "To avoid mentioning any cost at all",
            "To suggest that maintenance is free",
          ],
          0,
          "The distinction prevents an answer about one budget from being mistaken for a complete account of the other.",
        ),
        q(
          4,
          "What should happen when a speaker does not know a figure?",
          [
            "Invent a plausible estimate to maintain momentum.",
            "Refuse to acknowledge the question.",
            "State the gap and commit to a reliable source or follow-up.",
          ],
          2,
          "A defined follow-up preserves honesty and accountability without abandoning the speaker's responsibility to the audience.",
        ),
      ],
    },
    {
      slug: "adapting-a-story-for-impact",
      title: "Adapting a story for impact",
      summary:
        "Reshape the same true experience for different audiences by changing emphasis, detail and framing while preserving its factual and ethical core.",
      objective:
        "Adapt a personal or professional narrative for two audiences, selecting details that serve their needs without exaggerating or concealing material facts.",
      minutes: 30,
      blocks: [
        {
          type: "dialogue",
          title: "One failure, two audiences",
          intro:
            "A founder is rehearsing how to describe a failed product. The facts remain fixed; the emphasis changes for investors and for early-career designers.",
          lines: [
            {
              speaker: "Investor",
              text: "You have already built one product that did not sell. Why should we back another?",
            },
            {
              speaker: "Noor",
              text: "We assumed small shops wanted scheduling software; they wanted simpler stock control. The first product lost £240,000 over eighteen months. That was a costly test of the wrong assumption, not proof that the customers do not need digital tools. This time, we have paid pilot agreements with eleven retailers before building the full platform.",
            },
            {
              speaker: "Student",
              text: "What did that failure teach you about design?",
            },
            {
              speaker: "Noor",
              text: "I learned to observe the queue at opening time before asking owners to imagine a better day. In our interviews, they politely praised our scheduling mock-up; on the shop floor, they repeatedly counted the same missing items. I had mistaken agreement for evidence. I now begin projects by following the work for a day, and I ask teams to write down what would prove their favourite idea wrong.",
            },
            {
              speaker: "Interviewer",
              text: "Are these two different stories?",
            },
            {
              speaker: "Noor",
              text: "They have different centres of gravity. Investors need the economics of the mistake and the evidence that we changed our method. Students need the moment my judgement failed and the practice that replaced it. The loss, the mistaken assumption and the sequence of events stay the same.",
            },
          ],
        },
        {
          type: "table",
          title: "What changes across audiences",
          columns: ["Element", "Investor version", "Student version", "Must remain true"],
          rows: [
            ["Opening", "The cost and current de-risking", "The moment the wrong assumption became visible", "The first product failed commercially"],
            ["Detail", "Burn, timeline and pilot commitments", "Observation, interview behaviour and design choice", "Owners wanted stock control, not scheduling"],
            ["Turning point", "Paid pilots before full build", "Observing work instead of relying on praise", "The team changed its discovery method"],
            ["Close", "Evidence that the next decision is better bounded", "A transferable habit for future projects", "No claim that the first product succeeded"],
          ],
          caption:
            "Adaptation is not embellishment. If a detail would materially change the audience's judgement, do not omit it merely to improve the story.",
        },
        {
          type: "exercise",
          title: "Adapt without distorting",
          instructions:
            "Choose the version that fits the audience while preserving the factual and ethical core of the experience.",
          items: [
            c(
              "For an investor, which detail should receive most emphasis after a failed pilot?",
              [
                "A vivid description of how frustrating the meetings felt.",
                "What the failure cost and what verified evidence now reduces the risk.",
                "A claim that the failure was entirely someone else's fault.",
              ],
              1,
              "Investors need to understand the economics, the lesson and the new risk controls, not merely the emotional experience.",
            ),
            c(
              "For new teachers, which detail best adapts a failed classroom technology lesson?",
              [
                "The moment students appeared busy but could not explain the task, and the redesign that followed.",
                "The procurement contract value only.",
                "An assertion that technology always damages learning.",
              ],
              0,
              "The observable learning problem and subsequent redesign make the experience transferable to teaching practice.",
            ),
            c(
              "Which adaptation crosses an ethical boundary?",
              [
                "Removing a minor technical term the audience does not need.",
                "Beginning with the outcome and then returning to the cause.",
                "Hiding a known safety failure because it weakens the success story.",
              ],
              2,
              "Omitting a material safety fact would manipulate the audience's judgement and make the adaptation deceptive.",
            ),
            c(
              "What should remain constant when a story is adapted?",
              [
                "The number of adjectives used in each version.",
                "The factual events, causal claims and material limitations.",
                "The emotional reaction of every audience member.",
              ],
              1,
                "Audience adaptation may change emphasis and language, but it cannot change what happened or conceal facts essential to a fair judgement.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Tell one story to two audiences",
          instructions:
            "Choose a real project, failure or decision. Prepare two sixty-second versions, then compare them sentence by sentence for factual consistency.",
          items: [
            p(
              "Adapt a failed community event for organisers and for a funder.",
              "Model answer for organisers: We planned the event around a stage programme, but residents used the central space as a meeting place and ignored the seats. Next time, we should design for conversation and place the formal talks at the edge. Model answer for the funder: Attendance was 180, below the target of 300, because the programme did not match local preferences. We have changed the format and will measure actual participation time, not only ticket registrations, in the next event.",
              "Keep the low attendance and design failure constant; change the lesson and the evidence needed."),
            p(
              "Adapt a workplace mistake for a senior manager and for a new employee.",
              "Model answer for the manager: A manual merge omitted 34 records and delayed reporting by one day. The root cause was a single-person approval step; we have introduced a second check and recovered all records. Model answer for the new employee: I misunderstood which file was the live source and merged an old copy. No data was lost, but the team spent a day reconstructing the report. I now confirm the source and owner before starting, and I ask rather than infer when two versions look plausible.",
              "Preserve the error, consequence and correction; emphasise systemic control or personal habit according to the listener."),
            p(
              "Adapt a successful neighbourhood campaign for residents and for a policy conference.",
              "Model answer for residents: The crossing moved because people marked where buses blocked their view and children crossed. We presented that evidence together, and the council changed the design. Model answer for the conference: The campaign combined kerbside observation, resident mapping and transport-department data to relocate a crossing. Its value was not the number of petitions but the way local observation was converted into a testable design change.",
              "Use a concrete local action for residents and a transferable method for specialists."),
          ],
        },
        {
          type: "tip",
          title: "Keep a factual spine",
          text: "Before adapting a story, write five facts you will not change: what happened, who was affected, what you decided, what it cost or changed, and what remains uncertain. Build each version around that spine. Changing the order is legitimate; changing the meaning of the event is not.",
        },
      ],
      quiz: [
        q(
          1,
          "Why does Noor open the investor version with the £240,000 loss?",
          [
            "To make the failure sound more dramatic than it was",
            "To demonstrate the financial significance of the mistaken assumption and establish candour",
            "To avoid discussing the product's market",
          ],
          1,
          "The loss is material to the investment decision, and acknowledging it directly supports credibility before she explains the new safeguards.",
        ),
        q(
          2,
          "Which observation is most useful in the student version?",
          [
            "Owners praised the mock-up but repeatedly counted missing stock on the shop floor.",
            "The product used a sophisticated database.",
            "The founder worked eighteen months.",
          ],
          0,
          "The contrast between polite interview feedback and observed behaviour reveals the design lesson in a concrete, memorable way.",
        ),
        q(
          3,
          "What may legitimately change between audience versions?",
          [
            "Whether the product actually failed",
            "The amount of money lost",
            "The emphasis, opening detail and concluding implication",
          ],
          2,
          "Rhetorical adaptation can select and foreground different relevant facts, but it cannot alter the underlying events or figures.",
        ),
        q(
          4,
          "Which omission would be unethical in a success story?",
          [
            "A minor technical acronym the audience does not need",
            "A known safety problem that materially changes how the outcome should be judged",
            "An anecdote unrelated to the project",
          ],
          1,
          "A material safety fact cannot be hidden merely because it weakens the narrative; doing so would manipulate the audience's assessment.",
        ),
      ],
    },
  ],
};
