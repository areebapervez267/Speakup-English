import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1SpeakingUnit1: LessonUnit = {
  title: "Extending your voice",
  description:
    "Build coherent extended turns, develop them with evidence, guide the listener and remove language that weakens your point.",
  lessons: [
    {
      slug: "structuring-an-extended-turn",
      title: "Structuring an extended turn",
      summary:
        "Shape a two-minute answer into a clear position, supported reasoning and a consequence the listener can act on.",
      objective:
        "Deliver a sustained answer with an explicit thesis, two developed reasons and a concise closing implication.",
      minutes: 30,
      blocks: [
        {
          type: "dialogue",
          title: "The flood-resilience interview",
          intro:
            "A council leader has been asked a broad question about protecting the Riverside district. Read Maya's answer as one continuous turn, then notice how each sentence prepares the next.",
          lines: [
            {
              speaker: "Interviewer",
              text: "Why should Riverside receive money for flood defences when other districts need investment too?",
            },
            {
              speaker: "Maya",
              text: "I would prioritise Riverside for three reasons. First, it combines the highest concentration of older residents with the lowest elevation. During the last storm, forty-three households had to be evacuated, often by neighbours working in water above their knees. That is not simply an inconvenience; it is a foreseeable risk to people who may not be able to leave quickly.",
            },
            {
              speaker: "Interviewer",
              text: "And what makes your proposal different from rebuilding the wall?",
            },
            {
              speaker: "Maya",
              text: "Second, a higher wall would protect one street while pushing faster water towards the market. A raised pump station and restored wetland would protect both areas. Third, the work can be delivered in stages: strengthen the school as an emergency refuge now, then complete the drainage works over two years. My recommendation is therefore to fund Riverside first, while publishing the criteria so every district can see why the decision was made.",
            },
            {
              speaker: "Interviewer",
              text: "You have made the trade-off clear. Who would you involve before work starts?",
            },
            {
              speaker: "Maya",
              text: "Residents and market traders, especially those whose premises would be temporarily disrupted. Their practical knowledge should shape the access plan.",
            },
          ],
        },
        {
          type: "table",
          title: "An architecture for a sustained answer",
          columns: ["Move", "Function", "Reusable opening"],
          rows: [
            ["Position", "State the answer before the listener has to infer it.", "My view is that … / I would prioritise … because …"],
            ["Reason one", "Offer a claim, then explain the mechanism behind it.", "The primary reason is … This matters because …"],
            ["Evidence", "Make the reason concrete without burying the audience in data.", "In the last storm, for example, …"],
            ["Reason two", "Add a different consideration rather than repeating the first.", "There is also a practical case for …"],
            ["Implication", "Show what follows from the position.", "That leads me to recommend …"],
          ],
          caption:
            "Use the structure as a route map, not a rigid script. A signpost should sound like thought, not a template.",
        },
        {
          type: "exercise",
          title: "Repair the extended turns",
          instructions:
            "Choose the strongest speaking move for each purpose. Say the option aloud with confident, level pacing.",
          items: [
            c(
              "You have been asked whether your city should limit private cars in the centre. Which opening establishes a position most efficiently?",
              [
                "There are many opinions about cars and transport.",
                "I support a limited-traffic zone, provided reliable buses are in place first.",
                "Last Tuesday I was in a traffic jam.",
              ],
              1,
              "The second option gives the stance and its essential condition immediately, so the listener knows what the rest of the turn will prove.",
            ),
            c(
              "Which sentence best develops the claim that night buses would improve access to hospital shifts?",
              [
                "The night-bus route should run every twelve minutes between the hospital and the northern suburbs.",
                "There are some buses in the city and people use them.",
                "Many interesting points could be made about transport.",
              ],
              0,
              "The route and frequency turn an abstract benefit into a specific, testable example that supports the claim.",
            ),
            c(
              "Which closing gives a two-minute answer a clear destination?",
              [
                "So, as I was saying, there are arguments.",
                "That is all I wanted to mention.",
                "The evidence therefore points to a six-month bus pilot with fares held at daytime rates.",
              ],
              2,
              "A strong close converts the preceding reasons into a decision, pilot or recommendation that the listener can remember and discuss.",
            ),
            c(
              "During an answer about remote work, which transition adds a genuinely new reason?",
              [
                "Remote work is also important, and I want to discuss remote work.",
                "Alongside productivity, we should consider who is excluded by a fully remote model.",
                "Another thing is that work can happen in different ways.",
              ],
              1,
              "Moving from productivity to inclusion introduces a distinct criterion and keeps the argument developing instead of circling.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build and deliver a two-minute case",
          instructions:
            "Plan for no more than twenty seconds, then speak without stopping. Record yourself and check whether a listener could summarise your recommendation after one hearing.",
          items: [
            p(
              "Argue that your town should convert an unused car park into a shaded public square.",
              "Model answer: I would support the conversion, provided the displaced parking demand is addressed. The site sits between two bus routes and a clinic, yet currently contributes little beyond stored vehicles. A shaded square would give patients somewhere to wait and residents a cooler place to meet. My recommendation is a six-month trial, with parking counts reviewed before any permanent change.",
              "Use position → specific evidence → benefit → conditional recommendation.",
            ),
            p(
              "Give a one-minute answer explaining why your workplace should test a four-day week.",
              "Model answer: I favour a four-day trial rather than an immediate permanent change. The strongest case is operational: the current rota leaves two handover days with little substantive work. Compressing those hours could protect output while giving staff a genuine recovery day. We should compare turnaround times and absence rates over three months before deciding.",
              "Name the problem, explain the mechanism and propose a measurable trial.",
            ),
            p(
              "Answer: What is the most useful change your neighbourhood could make for older residents?",
              "Model answer: The most useful first step would be a reliable community minibus. Existing buses stop across a busy dual carriageway from the health centre, making the final part of the journey difficult for people with limited mobility. A pre-booked minibus could connect the sheltered housing to the clinic and market twice a day. I would begin with one vehicle and review use after six months.",
              "Choose one change and sustain a single line of reasoning rather than listing every possible improvement.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Keep the thread visible",
          text: "At the end of each major section, link the new point back to the question: ‘That is why I would begin with drainage rather than a higher wall.’ These small summary clauses prevent a long answer from becoming a sequence of disconnected facts. If you lose your place, return to your thesis rather than starting the answer again.",
        },
      ],
      quiz: [
        q(
          1,
          "What is the main purpose of an opening position in an extended turn?",
          [
            "To let the listener infer your answer gradually",
            "To list every example you remember",
            "To establish the claim the rest of the turn will support",
          ],
          2,
          "An explicit position gives the audience an interpretive frame and makes the following reasons easier to follow.",
        ),
        q(
          2,
          "Which sentence gives evidence rather than merely asserting a benefit?",
          [
            "The policy would be extremely successful.",
            "During the last storm, forty-three households were evacuated.",
            "Everyone agrees that action is necessary.",
          ],
          0,
          "The evacuation figure is verifiable evidence; the other options are unsupported claims or appeals to agreement.",
        ),
        q(
          3,
          "Why does Maya compare a higher wall with a pump station and wetland?",
          [
            "To change the subject away from Riverside",
            "To explain the practical trade-off behind her recommendation",
            "To show that every option has exactly the same effects",
          ],
          1,
          "The comparison reveals that rebuilding the wall would displace risk, whereas her preferred option protects both the street and the market.",
        ),
        q(
          4,
          "Which closing is most useful after a sustained answer?",
          [
            "I would therefore fund Riverside first and publish the selection criteria.",
            "There are several other things I could mention.",
            "As you can imagine, it is a complicated subject.",
          ],
          0,
          "This ending states the decision and an accountability measure, giving the listener a clear point to retain.",
        ),
      ],
    },
    {
      slug: "developing-ideas-with-examples",
      title: "Developing ideas with examples",
      summary:
        "Move beyond unsupported generalisation by using precise cases, comparisons and carefully limited evidence in professional speaking.",
      objective:
        "Develop each main idea with a relevant example, explain its significance and avoid drawing conclusions the evidence cannot support.",
      minutes: 32,
      blocks: [
        {
          type: "dialogue",
          title: "Designing a safer hospital handover",
          intro:
            "A patient-safety lead is defending a structured handover protocol. Listen for the way she tests a broad claim against a specific case, then states the limits of the evidence.",
          lines: [
            {
              speaker: "Dr Shah",
              text: "My concern is that a longer checklist may simply create another task for busy staff. What evidence do you have that this particular protocol helps?",
            },
            {
              speaker: "Leila",
              text: "The strongest example is our surgical ward. Nurses previously passed on information in whatever order the shift produced, and outstanding blood tests were sometimes mentioned only if someone remembered them. We introduced a ninety-second spoken sequence: patient identity, immediate risk, treatment given, then what remains to be done.",
            },
            {
              speaker: "Dr Shah",
              text: "Did the number of missed actions fall?",
            },
            {
              speaker: "Leila",
              text: "Over eight weeks, omitted follow-up actions recorded at morning handover fell from eleven to four. That is promising, but it is a small, single-ward sample, so I would not claim a hospital-wide effect. The mechanism is also clear: the action comes at the end, when attention is high, rather than being buried in narrative.",
            },
            {
              speaker: "Dr Shah",
              text: "And what about wards where patients need longer discussion?",
            },
            {
              speaker: "Leila",
              text: "They can use the same sequence without treating it as a ceiling. For example, an unstable patient may require several minutes on immediate risk. The protocol guarantees that the essentials are covered; it does not forbid clinical judgement. I suggest we test it on two more wards and record both missed actions and time spent.",
            },
          ],
        },
        {
          type: "rules",
          title: "The example-development chain",
          items: [
            "Make a bounded claim: ‘This may reduce omitted follow-up actions on surgical wards.’",
            "Locate the example: name the ward, the previous process and the exact change.",
            "Give a concrete detail: use a count, sequence, quotation or observed event rather than ‘it worked well’.",
            "Explain the relevance: show how the detail supports the claim or reveals its mechanism.",
            "State the limit: name the sample size, time period or conditions that restrict the conclusion.",
            "Return to the decision: say what should be tested, adopted or rejected next.",
          ],
        },
        {
          type: "exercise",
          title: "Choose evidence that earns its place",
          instructions:
            "Select the most useful development for each idea. Be ready to say why the other options weaken the argument.",
          items: [
            c(
              "Your claim is that flexible start times reduce lateness among warehouse workers. Which example best develops it?",
              [
                "Flexible hours are very modern and some famous companies use them.",
                "At our depot, a four-week trial with staggered starts reduced late arrivals from 8% to 3%.",
                "I once knew a manager who did not like fixed hours.",
              ],
              1,
              "The trial provides a defined setting, period and measurable outcome, making the claim specific and open to scrutiny.",
            ),
            c(
              "Which sentence correctly limits a conclusion drawn from one successful mentoring scheme?",
              [
                "This proves mentoring works for every disadvantaged teenager.",
                "Mentoring cannot help anyone outside our programme.",
                "The scheme's results justify expansion, but we should test whether the effect holds in a different age group.",
              ],
              2,
              "The third option preserves the practical lesson while recognising that one programme cannot establish a universal effect.",
            ),
            c(
              "A colleague says your example is irrelevant to a rural hospital. What is the strongest response?",
              [
                "You are wrong because examples always settle arguments.",
                "The example concerns missed test results, a problem both hospitals share; the local process may differ.",
                "Rural hospitals do not really have handovers.",
              ],
              1,
              "Acknowledging the different context and identifying the shared problem shows that the example is being used analytically, not mechanically.",
            ),
            c(
              "Which transition best explains why an example matters?",
              [
                "That illustrates nothing in particular.",
                "Another random fact is that sixty per cent is quite a lot.",
                "The point of that case is that the barrier was the timing of the request, not staff resistance.",
              ],
              2,
              "The third sentence interprets the case and connects its detail to the larger claim, which is the work an example must do.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Turn assertions into evidence-led speech",
          instructions:
            "Use real information where possible and invent clearly plausible details where it is not. Keep every claim proportionate to the example.",
          items: [
            p(
              "Develop the claim that a library's evening opening increased access for working adults.",
              "Model answer: At Northside Library, Saturday evening opening attracted 260 visits in six weeks; a short exit survey found that 58% of respondents worked during the day. The example suggests unmet demand among workers, although visitors who did not complete the survey may differ. I would repeat the opening for three months before making it permanent.",
              "Give setting, measure, interpretation and limitation.",
            ),
            p(
              "Support the claim that translation tools can improve inclusion in parent meetings.",
              "Model answer: At one primary school, live captions allowed three parents to follow the maths explanation and ask questions without relying on relatives to interpret. The tools did not capture every technical term correctly, so a bilingual adviser checked key vocabulary. The case supports assisted access, not replacing skilled interpreters in every setting.",
              "Show both the observed benefit and the condition that made it reliable.",
            ),
            p(
              "Argue against the claim that meetings are always a waste of time, using one specific counter-example.",
              "Model answer: That generalisation does not fit our incident review on 14 May. The twenty-minute meeting exposed that two teams were sending contradictory instructions to the same supplier, and we agreed a single owner before leaving. The value came from resolving an interface, not reviewing slides. I would keep only meetings with that kind of decision at their centre.",
              "Use a precise counter-example, then state the principle it supports.",
            ),
          ],
        },
        {
          type: "examples",
          title: "Scale your claim to your evidence",
          intro:
            "Advanced speakers make the strength of their language match the strength of their support.",
          items: [
            {
              text: "Observed once: ‘In one ward, the change coincided with fewer omissions.’",
              note: "Report the observation without pretending it establishes a general rule.",
            },
            {
              text: "Repeated under similar conditions: ‘Across three wards, we observed the same pattern.’",
              note: "Broaden the claim while retaining the shared conditions.",
            },
            {
              text: "Comparable trial: ‘The controlled trial supports a modest effect on attendance.’",
              note: "Use causal language only when the design and evidence justify it.",
            },
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What makes the surgical-ward example useful?",
          [
            "It changes the topic to a different hospital.",
            "It identifies a concrete process change and an eight-week result.",
            "It claims that a small sample proves a universal rule.",
          ],
          1,
          "The specific sequence and before-and-after count let the listener understand both the intervention and the observed outcome.",
        ),
        q(
          2,
          "Why does Leila mention that the sample came from one ward?",
          [
            "To demonstrate that the example is irrelevant",
            "To avoid giving any recommendation",
            "To keep the conclusion proportionate to the available evidence",
          ],
          2,
          "Naming the sample limitation prevents an encouraging local result from being presented as conclusive hospital-wide evidence.",
        ),
        q(
          3,
          "Which phrase is most appropriately cautious after a single local case?",
          [
            "This certainly works everywhere.",
            "The case suggests a benefit worth testing more widely.",
            "This proves the entire policy beyond doubt.",
          ],
          1,
          "‘Suggests’ and ‘worth testing’ communicate a plausible implication while leaving room for replication and further evidence.",
        ),
        q(
          4,
          "What is the strongest use of a counter-example?",
          [
            "To expose the limits of a broad claim and refine the position",
            "To reject every general principle",
            "To win by making the other person feel foolish",
          ],
          0,
          "A counter-example is analytically valuable when it narrows an overbroad assertion and leads to a more defensible formulation.",
        ),
      ],
    },
    {
      slug: "signposting-and-emphasis",
      title: "Signposting and emphasis",
      summary:
        "Guide a listener through complex reasoning with purposeful signposts, contrastive stress and pauses that clarify rather than decorate.",
      objective:
        "Mark major moves in a spoken argument and stress the words that carry its logic without sounding mechanically scripted.",
      minutes: 31,
      blocks: [
        {
          type: "dialogue",
          title: "The budget meeting",
          intro:
            "Nadia must separate two budget proposals that colleagues keep treating as equivalent. The bracketed notes show where to pause and which words to stress when you read the model aloud.",
          lines: [
            {
              speaker: "Chair",
              text: "Can you clarify the difference between the maintenance proposal and the replacement proposal?",
            },
            {
              speaker: "Nadia",
              text: "Yes. The distinction [pause] is not simply how much each option costs; it is what each option prevents. Routine maintenance keeps the existing lift serviceable [pause] and delays failure. It does not remove the ageing components.",
            },
            {
              speaker: "Jonas",
              text: "So you are saying maintenance is pointless?",
            },
            {
              speaker: "Nadia",
              text: "No. I am saying it buys time [stress: time]. Replacement removes the underlying risk [stress: risk], but requires six weeks of closure. That trade-off is why I am not presenting the cheaper quote as the cheaper decision.",
            },
            {
              speaker: "Chair",
              text: "What would you recommend?",
            },
            {
              speaker: "Nadia",
              text: "I recommend a staged replacement. We install the new unit behind the old one before switching over, so the building remains accessible. The sequence costs more upfront; the benefit is continuity [pause] rather than the lowest invoice.",
            },
          ],
        },
        {
          type: "table",
          title: "Signposts that do real work",
          columns: ["Listener need", "Signpost", "Effect"],
          rows: [
            ["Know that a contrast is coming", "The distinction is not X; it is Y.", "Prevents the audience from merging two positions."],
            ["Follow a sequence", "There are two stages. First … Once that is complete …", "Makes dependencies visible."],
            ["Hear the strongest evidence", "The decisive point is …", "Directs attention without adding a new claim."],
            ["Recognise a concession", "That concern is valid. However …", "Acknowledges the objection before narrowing the disagreement."],
            ["Retain the conclusion", "For those three reasons, I recommend …", "Links the decision back to the argument."],
          ],
          caption:
            "Read the model aloud twice: once for meaning, once for timing. A pause after ‘The distinction is …’ should create expectation, not hesitation.",
        },
        {
          type: "exercise",
          title: "Select the clearest route through the idea",
          instructions:
            "Choose the wording and emphasis pattern that best helps the listener follow the argument. Speak each answer with one deliberate pause.",
          items: [
            c(
              "You are contrasting immediate revenue with long-term resilience. Which signpost is most precise?",
              [
                "Anyway, revenue and resilience are different things.",
                "The real distinction is between revenue this quarter and resilience over five years.",
                "On a completely unrelated subject, let us discuss resilience.",
              ],
              1,
              "The precise contrast tells the listener exactly which dimensions must be kept separate and makes the subsequent comparison easier to process.",
            ),
            c(
              "Where should the strongest stress fall in ‘We are not proposing a ban; we are proposing a trial’?",
              [
                "We are not proposing a ban; we are proposing a trial.",
                "We are NOT proposing a ban; we are proposing a TRIAL.",
                "We are not proposing a BAN; we are proposing a trial.",
              ],
              2,
              "Stress on ‘ban’ and ‘trial’ foregrounds the policy alternatives, while stressing ‘not’ alone would over-emphasise negation.",
            ),
            c(
              "Which sentence best introduces the most important piece of evidence?",
              [
                "The decisive evidence is the failure log, which records three interruptions in two years.",
                "Here is a fact, and then there are other facts.",
                "I have a lot of statistics if anyone is interested.",
              ],
              0,
              "Calling the failure log decisive tells the audience how to weigh it, and the specific record immediately substantiates that claim.",
            ),
            c(
              "Which closing most clearly gathers two preceding reasons?",
              [
                "So that is basically everything I wanted to say.",
                "Because the pilot lowers risk and preserves access, I recommend a limited rollout.",
                "There are good and bad points, as usual.",
              ],
              1,
              "The closing explicitly connects the two reasons to the recommendation, giving the listener a compact summary of the logic.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rehearse signposts under breath control",
          instructions:
            "Mark no more than three pauses and three stressed words in each answer. Speak at a measured pace; avoid giving every sentence the same weight.",
          items: [
            p(
              "Explain the difference between saving money and cutting costs.",
              "Model answer: The distinction [pause] is between postponing expenditure and removing a recurring expense. Saving may protect next month's budget; it does not necessarily improve the service. A genuine cost reduction changes the underlying process. [Pause] That is why I would examine duplicate processing before delaying essential repairs.",
              "Contrast the definitions, then state the consequence for a decision."),
            p(
              "Present two reasons for introducing a mentoring programme for new graduates.",
              "Model answer: There are two reasons. First [pause], structured support shortens the period in which new staff are afraid to ask basic questions. Second, it gives experienced colleagues a recognised mentoring role rather than an invisible extra duty. Together, those points argue for a small pilot with protected time for both participants.",
              "Use ordinal signposts and gather the reasons in the final sentence."),
            p(
              "Summarise an argument for keeping the staff canteen open despite its operating loss.",
              "Model answer: The strongest case is not that the canteen makes a profit; it is that [pause] it removes a daily access problem for shift workers. Without it, staff on early and late shifts must leave the site for food. I would retain the service with simpler menus and review the subsidy annually.",
              "Stress the contrast between profit and access rather than announcing that everything is important."),
          ],
        },
        {
          type: "tip",
          title: "Emphasis is selective",
          text: "If every word is stressed, nothing is. Choose the word that changes the proposition: ‘We need a cheaper option’ differs from ‘We need a cheaper option now.’ Use silence around a key recommendation, but do not insert long pauses that make a routine answer feel theatrical. Your face and posture should support the emphasis, not compete with it.",
        },
      ],
      quiz: [
        q(
          1,
          "What is the best use of ‘The distinction is not X; it is Y’?",
          [
            "To introduce an unrelated story",
            "To fill time while thinking",
            "To correct a likely misunderstanding between two ideas",
          ],
          2,
          "This signpost is effective when the audience is likely to conflate two positions and needs the difference stated explicitly.",
        ),
        q(
          2,
          "Why does Nadia say maintenance ‘buys time’?",
          [
            "To argue that replacement and maintenance are identical",
            "To define the limited benefit of maintenance before explaining replacement",
            "To show that maintenance has no value",
          ],
          1,
          "The phrase captures maintenance's practical role while distinguishing it from replacement's removal of the underlying risk.",
        ),
        q(
          3,
          "Which delivery choice best supports the contrast ‘not a ban; a trial’?",
          [
            "Stress ‘ban’ and ‘trial’, with a short pause after the semicolon.",
            "Stress every word equally.",
            "Speed through the entire sentence to sound decisive.",
          ],
          0,
          "Selective stress and a brief pause expose the central contrast, making it easy for the listener to retain.",
        ),
        q(
          4,
          "What makes a spoken signpost sound natural?",
          [
            "It is followed by the point it announces, in the order promised.",
            "It always uses several abstract nouns.",
            "It replaces the need for any substantive reasoning.",
          ],
          0,
          "Signposting works when the promised contrast, sequence or conclusion immediately follows; a label without the promised content is empty.",
        ),
      ],
    },
    {
      slug: "speaking-with-precision-and-economy",
      title: "Speaking with precision and economy",
      summary:
        "Cut repetition and vague language from a spoken update while preserving qualifications, decisions and details the listener needs.",
      objective:
        "Edit a long or vague answer into concise speech that remains accurate, appropriately qualified and easy to act on.",
      minutes: 29,
      blocks: [
        {
          type: "dialogue",
          title: "Sixty seconds for the operations update",
          intro:
            "A project lead first hears an overlong update, then sees how the same facts can be made precise. Notice which uncertainties survive the edit.",
          lines: [
            {
              speaker: "Director",
              text: "In the end, my view is basically that there may be a problem with the software migration, and it could perhaps affect the timetable, but we are looking into it.",
            },
            {
              speaker: "Sam",
              text: "Which part is confirmed, and what decision do you need from us?",
            },
            {
              speaker: "Director",
              text: "Precisely. A migration test failed on Tuesday night because customer addresses in the old system lack postal codes. This does not yet affect live service, but it may delay Friday's release by one day.",
            },
            {
              speaker: "Director",
              text: "Engineering can supply a temporary mapping table by Thursday afternoon. If it passes validation, we release on Friday; if not, we postpone rather than risk incomplete records. I need approval for six additional engineering hours tonight.",
            },
            {
              speaker: "Sam",
              text: "And what remains uncertain?",
            },
            {
              speaker: "Director",
              text: "We do not yet know how many of the 80,000 records are affected. The sample suggests fewer than two per cent. I will report the validated figure at nine tomorrow.",
            },
          ],
        },
        {
          type: "rules",
          title: "An economical answer still carries precision",
          items: [
            "Lead with the verified event: ‘Tuesday's test failed because addresses lack postal codes.’",
            "Separate fact from possibility: ‘Live service is unaffected; Friday's release may slip by one day.’",
            "Replace vague quantifiers: say ‘fewer than two per cent of the sample’ instead of ‘a small number’.",
            "Keep consequential conditions: ‘If validation fails, we postpone.’",
            "Remove throat-clearing and mirrored phrasing: ‘Basically, in the end, my view is …’ adds no information.",
            "End with ownership or the decision required: ‘I need approval for six hours tonight.’",
          ],
        },
        {
          type: "exercise",
          title: "Cut words without cutting meaning",
          instructions:
            "Choose the most precise, economical wording in each situation. Do not sacrifice a caveat simply to sound concise.",
          items: [
            c(
              "You need to report that a supplier delay is possible but unconfirmed. Which sentence is best?",
              [
                "Something may possibly be happening with the delivery.",
                "The supplier delay is certain to ruin the launch.",
                "The supplier has warned of a possible two-day delay; confirmation is expected tomorrow.",
              ],
              2,
              "This version names the source, duration and status of the uncertainty, avoiding both vagueness and false certainty.",
            ),
            c(
              "Which edit removes repetition while retaining the essential distinction?",
              [
                "Remote work improves flexibility and also makes work more flexible.",
                "Remote work can improve flexibility, but it may weaken informal learning.",
                "Remote work is a very important subject that many people discuss.",
              ],
              1,
              "The second sentence states a benefit and a counter-consideration once each, preserving the argument without repeated abstractions.",
            ),
            c(
              "Which phrase most accurately describes an estimate?",
              [
                "Approximately 300 users, based on a sample of 40 accounts.",
                "Exactly 300 users, more or less.",
                "A huge number of users, probably.",
              ],
              0,
              "The first phrase gives both the estimate and its basis; ‘exactly’ and ‘more or less’ are contradictory, while the third is uninformative.",
            ),
            c(
              "What is the best final sentence of a concise project update?",
              [
                "That is all the information I can think of.",
                "I recommend a one-day delay and will confirm the decision by 15:00.",
                "There are many complexities involved in situations like this.",
              ],
              1,
              "A recommendation with an owner and deadline makes the update actionable and gives the listener a clear next step.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Edit for a senior listener",
          instructions:
            "Give a deliberately long version first, then stop and rebuild it in no more than four sentences. Compare what you removed with what you protected.",
          items: [
            p(
              "Report a website fault that affects some payments but not the whole checkout.",
              "Model answer: Card payments using one expired security certificate have failed since 10:20; other payment methods are unaffected. We have disabled that certificate and are monitoring retries. The number of affected transactions is not yet verified. Engineering will confirm recovery and the total by 14:00.",
              "State scope, action, uncertainty and next update without labelling the fault ‘minor’ or ‘serious’ prematurely."),
            p(
              "Explain why you recommend extending a recruitment deadline by one week.",
              "Model answer: The current shortlist has no candidate with the required safeguarding experience. Extending the deadline by one week would allow targeted outreach to two specialist networks. This delays the interview round but avoids appointing someone who would need immediate supervision. I recommend the extension.",
              "Give the gap, the remedy and the trade-off in four sentences."),
            p(
              "Clarify a disagreement between ‘on time’ and ‘within budget’ in a project review.",
              "Model answer: The build is on schedule, but the forecast is four per cent over budget because of additional accessibility testing. We can reduce the scope of reporting features or accept the overrun. My preference is to protect the testing and return with a costed scope reduction by Thursday.",
              "Separate the two status claims and make the trade-off explicit."),
          ],
        },
        {
          type: "text",
          title: "The compression test",
          paragraphs: [
            "After drafting an answer, remove any sentence that could be deleted without changing the listener's understanding or decision. Then restore one sentence if its absence hides an important qualification. Economy is not the shortest possible answer; it is the shortest answer that still carries the whole meaning.",
            "Before speaking, identify the one fact, one implication and one request. If time is cut unexpectedly, protect those three elements and leave out secondary background.",
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which phrase communicates uncertainty most precisely?",
          [
            "A possible two-day delay, with confirmation expected tomorrow.",
            "Something might happen, maybe.",
            "The delay is definitely happening.",
          ],
          0,
          "The first phrase gives a quantified possibility and a time for confirmation; the second is vague and the third overstates certainty.",
        ),
        q(
          2,
          "Why does the director mention that live service is unaffected?",
          [
            "To conceal the failed test",
            "To show that no decision is required",
            "To distinguish the current impact from the possible future delay",
          ],
          2,
          "Separating present impact from future risk prevents the listener from either panicking or dismissing the warning.",
        ),
        q(
          3,
          "Which detail should not be removed merely to make an update shorter?",
          [
            "The phrase ‘basically, in my view’",
            "The condition under which the team would postpone release",
            "A repeated description of the migration",
          ],
          1,
          "The postponement condition carries the decision logic, whereas the other elements are verbal padding or repetition.",
        ),
        q(
          4,
          "What is the strongest test of an economical spoken answer?",
          [
            "It uses fewer words than every other speaker.",
            "It contains as many technical terms as possible.",
            "It retains the facts, qualifications and action the listener needs.",
          ],
          2,
          "Economy is judged by useful information, not word count alone; a short answer that hides a key caveat is not precise.",
        ),
      ],
    },
  ],
};
