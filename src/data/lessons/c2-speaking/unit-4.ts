import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2SpeakingUnit4: LessonUnit = {
  title: "Voice and identity",
  description:
    "Develop an authentic public voice, move across registers without losing your principles, speak credibly on ethical complexity and deliver a final keynote under pressure.",
  lessons: [
    {
      slug: "developing-a-distinctive-speaking-style",
      title: "Developing a distinctive speaking style",
      summary:
        "Identify and refine an authentic speaking identity through sentence rhythm, lexical preference, stance and recurring metaphors without imitating another speaker.",
      objective:
        "Analyse your natural speaking patterns and develop a distinctive style that remains adaptable, accurate and appropriate to the audience.",
      minutes: 30,
      blocks: [
        {
          type: "dialogue",
          title: "Finding the architect's voice",
          intro:
            "A public lecturer has been told to sound ‘more inspiring’. Her coach helps her identify what is already distinctive instead of adding decorative language.",
          lines: [
            {
              speaker: "Coach",
              text: "The audience remembered your comparison between repairing a building and repairing trust. Where did that come from?",
            },
            {
              speaker: "Architect",
              text: "I keep seeing the same mistake: we treat the visible crack as the whole problem. In buildings, that means replacing the surface. In institutions, it means announcing a new value without changing how decisions are made.",
            },
            {
              speaker: "Coach",
              text: "That is a recurring way of seeing. You move from a concrete object to a hidden system, then to a decision.",
            },
            {
              speaker: "Architect",
              text: "I do. My father repaired furniture, and he always made me look at the joint before choosing a tool. I suppose that is still how I speak.",
            },
            {
              speaker: "Coach",
              text: "Use it selectively. Your short sentences and dry humour make the idea land, but the metaphor will become tiresome if every answer uses it. In a technical planning hearing, you may need to lead with the regulation rather than the joint.",
            },
            {
              speaker: "Architect",
              text: "So the style is not a fixed performance. It is a recognisable way of paying attention: look beneath the surface, name the mechanism, then say what must change.",
            },
          ],
        },
        {
          type: "table",
          title: "The raw material of a speaking identity",
          columns: ["Feature", "Question to ask", "Possible signature"],
          rows: [
            ["Sentence rhythm", "Do you naturally use short judgements after longer explanations?", "A long causal sentence, then a brief practical conclusion."],
            ["Lexical preference", "Which words do you choose when excited or serious?", "Concrete verbs and precise nouns rather than inflated adjectives."],
            ["Stance", "How do you position yourself relative to the audience?", "Inquiry first, then a clearly owned judgement."],
            ["Figurative pattern", "What images recur in your spontaneous speech?", "Repair, joints, foundations and load-bearing structures."],
            ["Humour", "What kind of observation makes you smile?", "Dry recognition of institutional habits."],
            ["Silence", "Where do you naturally pause before a consequential point?", "Before naming the decision or the cost."],
          ],
          caption:
            "A distinctive style is a pattern of attention, not a collection of catchphrases. Borrow structures from others, but let your own experience supply the images.",
        },
        {
          type: "exercise",
          title: "Choose authentic style development",
          instructions:
            "Select the revision that strengthens the speaker's identity rather than adding generic polish or imitation.",
          items: [
            c(
              "A speaker naturally uses concrete physical metaphors. What is the best development strategy?",
              [
                "Use the same metaphor in every paragraph to create a brand.",
                "Identify the underlying way of seeing and deploy it when it clarifies the subject.",
                "Remove all figurative language to sound serious.",
              ],
              1,
              "A distinctive style grows from a consistent way of interpreting experience, used selectively rather than as a verbal trademark.",
            ),
            c(
              "Which revision preserves a naturally precise speaker's identity?",
              [
                "Replace plain verbs with grand abstractions to sound important.",
                "Keep the concrete verbs and cut the inflated adjectives.",
                "Imitate a famous orator's cadence word for word.",
              ],
              1,
              "Economy and precision are part of the speaker's identity; generic grandeur would weaken rather than develop it.",
            ),
            c(
              "When should a speaker suspend a favourite rhetorical pattern?",
              [
                "Whenever an audience dislikes metaphors.",
                "When the subject requires direct technical, legal or procedural language.",
                "Only after becoming famous.",
              ],
              1,
              "Style remains subordinate to the audience's need for accurate, appropriate information.",
            ),
            c(
              "What is the strongest source of original figurative language?",
              [
                "The speaker's own lived and professional experience.",
                "A list of fashionable quotations.",
                "Copying another speaker's most successful line.",
              ],
              0,
              "Personal experience provides specific images and relationships that cannot be manufactured by generic rhetorical decoration.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a voice profile",
          instructions:
            "Record two minutes on a subject you know well. Transcribe it and mark rhythm, verbs, images, stance and humour. Then rewrite one paragraph to strengthen what is already yours.",
          items: [
            p(
              "Develop a distinctive explanation of why public systems become slow.",
              "Model answer: Public systems rarely slow because nobody cares. They slow when the person who sees the problem cannot authorise the repair. A teacher notices the broken timetable, a driver sees the missing connection, a nurse discovers the duplicated form; each waits for someone else to own the fix. I do not think the answer is less accountability. I think it is clearer authority at the point where the evidence appears.",
              "Use concrete roles, a repeated causal pattern and a brief owned conclusion."),
            p(
              "Speak in a naturally restrained style about the value of old buildings.",
              "Model answer: I would not preserve every old building merely because it is old. I would preserve what cannot be replaced cheaply: skilled work, collective memory and materials that already carry centuries of carbon. A façade can be fashionable; a street's accumulated character is much harder to manufacture. The test should be what would be lost, not simply what looks picturesque.",
              "Let qualification, concrete distinctions and dry judgement create authority."),
            p(
              "Adapt your signature style to a technical safety briefing.",
              "Model answer: The inspection found corrosion at two load-bearing connections. The repair method has been tested on a comparable structure, but this building's access constraints require a revised lifting plan. Until that plan is approved, the affected section remains closed. The image of a hidden weakness is useful for explanation; the operational decision rests on the inspection evidence and the approved method.",
              "Retain clarity and concrete attention while leading with technical facts rather than metaphor."),
          ],
        },
        {
          type: "tip",
          title: "Distinctive is not inflexible",
          text: "Your voice should be recognisable across contexts without remaining identical in every context. Keep the underlying habits — how you attend, qualify and conclude — while changing register, detail and rhythm. A speaker who can sound like themselves in a technical hearing and a public lecture has more range than one who relies on a single performance.",
        },
      ],
      quiz: [
        q(
          1,
          "What does the architect's recurring image reveal?",
          [
            "That she is interested only in buildings.",
            "That she naturally moves from visible surfaces to hidden systems and decisions.",
            "That every topic requires a construction metaphor.",
          ],
          1,
          "The pattern reflects a recognisable way of interpreting problems, which can become a distinctive speaking identity when used selectively.",
        ),
        q(
          2,
          "Why does the coach advise selective use of the metaphor?",
          [
            "Because figurative language has no legitimate place in public speech.",
            "Because repetition would make the style mechanical and reduce its explanatory power.",
            "Because the audience already knows the technical regulations.",
          ],
          1,
          "A signature pattern is effective when it clarifies new material, not when it replaces new thought with a predictable formula.",
        ),
        q(
          3,
          "What should change when the architect enters a technical hearing?",
          [
            "Her factual accuracy.",
            "Her commitment to clear decisions.",
            "The order and density of language, leading with regulation and evidence.",
          ],
          2,
          "Register and information order should adapt to the audience while the core habits of precision and accountability remain.",
        ),
        q(
          4,
          "Which source best supports an original speaking style?",
          [
            "Personal and professional experience interpreted in the speaker's own way.",
            "Exact imitation of a celebrated orator.",
            "A fixed collection of fashionable quotations.",
          ],
          0,
          "An authentic voice grows from the speaker's own patterns of attention and expression rather than borrowed performance.",
        ),
      ],
    },
    {
      slug: "adapting-register-without-losing-yourself",
      title: "Adapting register without losing yourself",
      summary:
        "Shift vocabulary, tone and detail across demanding audiences while preserving the same ethical commitments, factual core and recognisable voice.",
      objective:
        "Adapt one message for two professional audiences without changing its values, concealing material facts or losing your authentic speaking identity.",
      minutes: 32,
      blocks: [
        {
          type: "dialogue",
          title: "One leader, two audiences",
          intro:
            "A hospital chief executive must address staff about a payroll error and appear before a regulator the same afternoon. Her adviser warns against two incompatible stories.",
          lines: [
            {
              speaker: "Chief executive",
              text: "To staff, I would say: some salaries were paid incorrectly on Friday. I am sorry for the worry and practical difficulty this has caused. Every affected colleague will receive a correction schedule today, and no one will lose pay because of our error.",
            },
            {
              speaker: "Adviser",
              text: "And to the regulator?",
            },
            {
              speaker: "Chief executive",
              text: "The payroll interface omitted overtime adjustments for 214 staff in the 28 March cycle. We have isolated the cause, funded immediate correction and commissioned an independent control review. No net pay loss will occur, but the error exposed a reconciliation failure requiring formal remediation.",
            },
            {
              speaker: "Adviser",
              text: "Those are different registers, not different truths. Keep the same number and the same commitment.",
            },
            {
              speaker: "Chief executive",
              text: "Exactly. Staff need the immediate action and a plain apology. The regulator needs the mechanism, scope and assurance. I will not use technical language to avoid responsibility with staff, or warm language to avoid precision with the regulator.",
            },
            {
              speaker: "Adviser",
              text: "What remains recognisably yours?",
            },
            {
              speaker: "Chief executive",
              text: "I lead with what happened, name who is affected and state the action I own. That does not change when the room changes.",
            },
          ],
        },
        {
          type: "table",
          title: "Adapt register, preserve the core",
          columns: ["Element", "Staff briefing", "Regulatory submission", "Must stay constant"],
          rows: [
            ["Opening", "Name the inconvenience and apology.", "Name the control failure and scope.", "The payroll error occurred."],
            ["Detail", "Correction schedule and support route.", "214 staff, interface mechanism and remediation plan.", "The number and affected group."],
            ["Tone", "Direct, humane and practical.", "Precise, evidential and accountable.", "No minimisation or blame-shifting."],
            ["Commitment", "No net pay loss from the employer's error.", "Funded correction and independent review.", "The same financial guarantee."],
            ["Close", "Where staff can get help today.", "Dates, owners and assurance milestones.", "Named accountability."],
          ],
          caption:
            "Register changes what the listener needs to understand and do. It does not change the moral stance or the facts that matter to a fair judgement.",
        },
        {
          type: "exercise",
          title: "Choose the appropriate register",
          instructions:
            "Select the version that fits the audience while preserving the factual and ethical core of the message.",
          items: [
            c(
              "Which staff version of the payroll message is most appropriate?",
              [
                "A reconciliation-control failure occurred in cycle 28 March, necessitating remediation.",
                "Some salaries were paid incorrectly; every affected colleague will receive a correction schedule today.",
                "There may have been a minor technical inconvenience, probably.",
              ],
              1,
              "The staff version leads with human impact and immediate action in plain language without concealing the error.",
            ),
            c(
              "Which regulatory version is most appropriate?",
              [
                "Do not worry; everyone will be fine.",
                "The interface omitted overtime for 214 staff; correction is funded and an independent review is commissioned.",
                "Some people were a bit annoyed by the computer.",
              ],
              1,
              "The regulatory version provides scope, mechanism and assurance in precise language without hiding the failure.",
            ),
            c(
              "What should remain unchanged across registers?",
              [
                "The sentence length in every version.",
                "The number of technical terms used.",
                "The material facts, values and accountability commitments.",
              ],
              2,
              "Audience adaptation changes expression and emphasis, not truth, ethical stance or responsibility.",
            ),
            c(
              "Which behaviour indicates register adaptation has become evasion?",
              [
                "Giving staff practical correction dates.",
                "Using technical vocabulary with the regulator.",
                "Avoiding the word ‘error’ with staff while naming it fully for the regulator.",
              ],
              2,
              "If plain-language audiences are shielded from a material fact that others receive, the register change is functioning as concealment.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Translate one message without changing its truth",
          instructions:
            "Prepare each pair with the same five facts highlighted. Change the order, detail and tone, then compare the versions for any missing commitment.",
          items: [
            p(
              "Address employees and customers about a data-access error affecting stored addresses.",
              "Model answer for employees: Some stored addresses were visible to another customer account for two hours. We have closed the route and are contacting affected customers. Do not speculate about the cause until the review is complete. Model answer for customers: Between 10:12 and 12:06, a technical fault allowed limited access to some stored addresses. We have disabled the fault, preserved the logs and begun direct notification. We do not yet know the exact number of records and will publish a verified figure by Friday.",
              "Keep the duration, fault status, notification and uncertainty consistent in both versions."),
            p(
              "Explain a delayed building project to residents and to the funding board.",
              "Model answer for residents: The roof works are delayed because the original material failed testing. The building remains safe to use, but the west corridor is closed. We will confirm a revised timetable after the replacement sample passes. Model answer for the board: The specified roofing material failed the scheduled fire-performance test, triggering a design substitution. Occupancy is safe under the current mitigation plan, with one corridor closed. The capital forecast is under review pending supplier pricing for the compliant alternative.",
              "Preserve the cause, safety status, mitigation and unresolved timetable across different levels of detail."),
            p(
              "Adapt a refusal to extend a grant without becoming either harsh or evasive.",
              "Model answer for the applicant: We cannot fund another year from this grant. The work has value, but this programme is ending and the available funds are committed. We will offer a feedback session and consider a future application under the successor scheme. Model answer for the board: The extension request falls outside the current grant's approved duration and funding envelope. No reallocation is recommended because existing awards have already consumed the available provision. The applicant will receive feedback and may apply to the successor programme.",
              "Keep the refusal, reason and alternative route explicit in both registers."),
          ],
        },
        {
          type: "tip",
          title: "Your voice is the invariant",
          text: "Before adapting a message, write the sentence you would never say differently because the audience changed: ‘We made an error’, ‘We do not yet know’, or ‘We will publish the evidence’. Build the register around that anchor. If one version depends on concealing what another version states plainly, you are not adapting; you are segmenting the truth.",
        },
      ],
      quiz: [
        q(
          1,
          "Why do the staff and regulator versions use different opening details?",
          [
            "They describe two different incidents.",
            "Each audience needs different immediately actionable information, while the underlying facts remain the same.",
            "The regulator should be shielded from the human impact.",
          ],
          1,
          "Register adaptation changes information priority and detail to serve the listener, not the factual account.",
        ),
        q(
          2,
          "Which element must remain constant?",
          [
            "The exact metaphor used in both speeches.",
            "The material facts, values and accountability commitments.",
            "The number of sentences in each version.",
          ],
          1,
          "Ethical consistency requires the same substantive truth and responsibility despite changes in tone or technical density.",
        ),
        q(
          3,
          "What makes the staff version effective?",
          [
            "It uses technical terminology to demonstrate expertise.",
            "It avoids mentioning the error to prevent worry.",
            "It states the impact plainly, apologises and gives the immediate correction route.",
          ],
          2,
          "Staff need direct acknowledgement and practical action, not abstract control language or minimisation.",
        ),
        q(
          4,
          "When does register adaptation cross into evasion?",
          [
            "When it changes the facts or conceals a material issue from one audience.",
            "When it replaces jargon with plain language.",
            "When it gives the regulator a precise scope figure.",
          ],
          0,
          "Adaptation is legitimate only when expression changes; hiding a material fact creates incompatible truths for different audiences.",
        ),
      ],
    },
    {
      slug: "speaking-on-complex-ethical-issues",
      title: "Speaking on complex ethical issues",
      summary:
        "Address morally contested questions without false balance or binary simplification, making principles, uncertainty and decision conditions explicit.",
      objective:
        "Speak credibly on a complex ethical issue by articulating competing values, distinguishing moral judgement from scientific uncertainty and defending a bounded position.",
      minutes: 34,
      blocks: [
        {
          type: "dialogue",
          title: "The heritable-genome hearing",
          intro:
            "A bioethicist is asked whether heritable genome editing should ever be permitted. The answer must engage scientific, moral and governance questions without collapsing them into one slogan.",
          lines: [
            {
              speaker: "Chair",
              text: "Should society permit heritable genome editing to prevent serious inherited disease?",
            },
            {
              speaker: "Bioethicist",
              text: "I would not support clinical use now. I would also reject the claim that the question is permanently closed. Three issues must be separated: technical safety, consent across generations and distributive justice.",
            },
            {
              speaker: "Parent advocate",
              text: "Parents already take risks to protect their children. Why should this be different?",
            },
            {
              speaker: "Bioethicist",
              text: "The difference is that an editing error could be inherited by people who cannot consent, including descendants not yet born. That does not make the desire to prevent disease trivial; it raises the burden of proof. We should ask whether a less heritable intervention, such as embryo testing, can achieve the same reproductive goal.",
            },
            {
              speaker: "Chair",
              text: "And who decides which diseases are serious enough?",
            },
            {
              speaker: "Bioethicist",
              text: "That is a justice question, not merely a medical one. A definition controlled by wealthy patients or a narrow professional group could turn treatment into enhancement by degrees. Any future framework would need public deliberation, disability representation and enforceable limits, alongside evidence that the intervention is the least harmful effective option.",
            },
          ],
        },
        {
          type: "rules",
          title: "Speak in layers, not camps",
          items: [
            "Separate empirical uncertainty from moral disagreement: ‘We do not know the risk’ is different from ‘We accept the risk’.",
            "Name the values in conflict without pretending one is the only legitimate value.",
            "Identify who bears the consequences, including people without a voice in the decision.",
            "Compare alternatives, including less intrusive ways to pursue the same legitimate goal.",
            "State the conditions under which your position would change and who must participate in that judgement.",
            "Avoid false balance: not every claim deserves equal evidential weight, even when every affected interest deserves hearing.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the ethically precise response",
          instructions:
            "Select the response that engages complexity honestly without relativism, evasion or a false appeal to certainty.",
          items: [
            c(
              "How should a speaker distinguish safety evidence from consent?",
              [
                "Treat successful trials as proof that future generations consent.",
                "Say that animal studies prove safety.",
                "State that even strong safety evidence would not resolve consent for descendants.",
              ],
              2,
              "Safety and consent are different ethical dimensions; evidence about one cannot automatically answer the other.",
            ),
            c(
              "Which comparison best honours the parent's goal while testing the means?",
              [
                "Compare heritable editing with embryo testing and other less heritable routes to the same reproductive goal.",
                "Dismiss the desire to prevent disease as selfish.",
                "Assume that every alternative is equivalent.",
              ],
              0,
              "The comparison takes the goal seriously while asking whether a less morally consequential method could achieve it.",
            ),
            c(
              "What makes a decision about ‘serious disease’ ethically complex?",
              [
                "The definition can encode clinical, social and distributive judgements requiring public participation.",
                "Only scientists have any legitimate view.",
                "The term has a single meaning that never changes.",
              ],
              0,
              "Thresholds can reflect values as well as medical severity and may distribute access or stigma unevenly.",
            ),
            c(
              "Which statement avoids false balance?",
              [
                "Every claim deserves equal weight, regardless of evidence.",
                "All affected interests deserve hearing, but claims should be weighted by evidence and argument.",
                "Only the most confident speaker should determine the outcome.",
              ],
              1,
              "Fair participation does not require treating unsupported claims as equally credible; ethical hearing and evidential judgement can coexist.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Take a bounded ethical position",
          instructions:
            "Use four moves: values at stake, uncertainty, affected voices and decision condition. Avoid declaring a permanent answer when governance and evidence may change.",
          items: [
            p(
              "Speak on whether facial recognition should be permitted for locating missing children.",
              "Model answer: The wish to find a missing child is an urgent moral good, and privacy is also a real protection, especially for bystanders. We do not yet have reliable evidence about false matches across different communities in this setting. Children, parents, civil-liberties advocates and technical evaluators should all shape the decision. I would permit a narrowly bounded trial only if there is judicial oversight, no automatic arrest and published accuracy by demographic group.",
              "Acknowledge both values, name the evidence gap and specify conditions that make a limited position defensible."),
            p(
              "Address the ethics of using AI to allocate scarce organ transplants.",
              "Model answer: Efficiency matters because delay can cost a life, but fairness cannot be reduced to a single score. The system's predictions, historical data and treatment of disability may reproduce disadvantage. Patients, clinicians, ethicists and affected communities need to examine the actual allocation rule. I would not permit opaque automated prioritisation; any model should support accountable human decisions, explain its criteria and be audited for unequal outcomes.",
              "Distinguish decision support from delegation and make the governance conditions central."),
            p(
              "Respond to a demand for a simple answer on animal testing for new medicines.",
              "Model answer: A simple yes or no would conceal real distinctions between species, purposes, harms and available alternatives. My position is that animal use requires demonstrable necessity, the least harmful valid design and independent oversight. Where non-animal methods can answer the question, they should replace it. Where essential evidence remains unavailable, the decision should be explicit, limited and reviewed rather than hidden inside a blanket policy.",
              "Take a clear conditional position while preserving morally relevant distinctions."),
          ],
        },
        {
          type: "text",
          title: "Moral seriousness is not moral theatre",
          paragraphs: [
            "Speakers sometimes perform certainty on ethical questions because ambiguity feels uncomfortable. Yet certainty about values does not produce certainty about consequences, and uncertainty about consequences does not make values arbitrary. Name both kinds of judgement.",
            "A credible position identifies the strongest opposing value, the people who bear its costs and the conditions that would justify acting despite disagreement. That is more demanding than announcing which side you belong to.",
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does the bioethicist separate safety, consent and justice?",
          [
            "To avoid taking any position.",
            "Because evidence about one dimension cannot settle the others.",
            "To suggest that only technical safety matters.",
          ],
          1,
          "Each dimension raises a different question; a safe procedure may still be unjust, and a fair process does not prove technical safety.",
        ),
        q(
          2,
          "Why mention descendants who cannot consent?",
          [
            "To claim that descendants can be consulted directly.",
            "To identify a distinctive moral consequence that raises the burden of proof.",
            "To show that consent is irrelevant in medicine.",
          ],
          1,
          "Heritable effects extend beyond the patient and future decision-makers, making the consent problem structurally different.",
        ),
        q(
          3,
          "What is the purpose of comparing heritable editing with embryo testing?",
          [
            "To prove the alternatives are always effective.",
            "To dismiss parents' reproductive goals.",
            "To test whether the same legitimate goal can be achieved through a less heritable means.",
          ],
          2,
          "The comparison assesses proportionality: whether a more morally consequential intervention is necessary to pursue the desired outcome.",
        ),
        q(
          4,
          "Which approach best handles disagreement on a complex ethical issue?",
          [
            "Hear affected interests while weighting claims according to evidence and argument.",
            "Declare all values equally supported by evidence.",
            "Let the loudest value determine the policy.",
          ],
          0,
          "Inclusive deliberation and evidential scrutiny are complementary; fairness does not require equal credibility for every claim.",
        ),
      ],
    },
    {
      slug: "a-final-keynote-challenge",
      title: "A final keynote challenge",
      summary:
        "Design and deliver a six-minute keynote that integrates narrative, argument, ethical nuance and audience connection, then defend it under questioning.",
      objective:
        "Perform a memorable keynote with a disciplined arc, controlled rhetoric and precise responses to challenge, using feedback to make one final revision.",
      minutes: 34,
      blocks: [
        {
          type: "dialogue",
          title: "Rehearsing the centenary keynote",
          intro:
            "A university president is preparing a keynote on technology and democracy. The adviser tests the central claim, the narrative arc and the final request.",
          lines: [
            {
              speaker: "President",
              text: "A century ago, this university expanded access because knowledge was concentrated in too few hands. Today, the means of producing and distributing knowledge are changing again, and concentration is returning in a different form.",
            },
            {
              speaker: "Adviser",
              text: "That is a strong historical parallel. What is the argument, beyond the comparison?",
            },
            {
              speaker: "President",
              text: "Democratic institutions depend on a public able to question evidence, not merely consume answers. If learning systems become opaque and commercial, we risk improving access while weakening that capacity. Our responsibility is therefore not simply to teach people how to use powerful tools; it is to teach them when to withhold trust.",
            },
            {
              speaker: "Adviser",
              text: "And the counter-argument?",
            },
            {
              speaker: "President",
              text: "Technology can widen participation, translate knowledge and give isolated learners a voice. I am not arguing for suspicion, but for informed judgement. The distinction is between dependence and capability.",
            },
            {
              speaker: "President",
              text: "I will end by asking every graduate to make one public claim they can test, one institution they can question and one community whose knowledge they have helped to make visible.",
            },
          ],
        },
        {
          type: "table",
          title: "The six-minute keynote architecture",
          columns: ["Time", "Purpose", "Content"],
          rows: [
            ["0:00–0:40", "Create a live question", "Connect a present anxiety to a concrete opening image."],
            ["0:40–1:30", "Locate the historical stake", "Use one precise parallel, not a sweeping history lesson."],
            ["1:30–3:00", "Build the argument", "Mechanism, evidence and the strongest counter-consideration."],
            ["3:00–4:15", "Make the ethical distinction", "Name the value at risk and the capability required."],
            ["4:15–5:20", "Translate into action", "Give the audience a specific, feasible responsibility."],
            ["5:20–6:00", "Close with recall", "Return to the opening image and make one bounded request."],
          ],
          caption:
            "The times are guides. Do not sacrifice the final request to fit extra background; remove material before compressing the close into a rush.",
        },
        {
          type: "exercise",
          title: "Diagnose the keynote",
          instructions:
            "Choose the revision that most improves audience understanding, memory or credibility at the identified point.",
          items: [
            c(
              "The opening contains four historical dates and no present-day problem. What should change?",
              [
                "Add more dates to establish authority.",
                "Begin with a concrete present tension and keep only the historical detail that explains it.",
                "Remove the audience entirely from the opening.",
              ],
              1,
              "A keynote opening should establish why the audience needs to listen now; history earns its place by illuminating that question.",
            ),
            c(
              "The argument ignores the benefits of the technology being criticised. What is the best repair?",
              [
                "State the strongest benefit, then explain why it does not settle the distributional or governance question.",
                "Claim that technology has only harmful effects.",
                "Remove the distinction between dependence and capability.",
              ],
              0,
              "Engaging the strongest benefit makes the critique more credible and reveals the actual conditions of disagreement.",
            ),
            c(
              "The audience remembers the stories but not the recommendation. What should change?",
              [
                "Add a second humorous anecdote.",
                "Insert a longer technical appendix into the spoken keynote.",
                "State the argument and requested action explicitly at each major transition.",
              ],
              2,
              "Narrative needs argumentative signposting so listeners know not only what happened but what they are being asked to understand or do.",
            ),
            c(
              "A questioner asks for certainty the evidence cannot provide. What is the strongest response?",
              [
                "Offer a precise condition for action and a public measure that would justify revision.",
                "Replace the evidence with a more confident prediction.",
                "Say the question is impossible to answer.",
              ],
              0,
              "A bounded response turns uncertainty into an accountable decision framework rather than evasion or bluffing.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Deliver the final keynote",
          instructions:
            "Write a six-minute outline, not a full script. Record the keynote, obtain one listener summary, answer two unscripted questions and revise only the weakest section.",
          items: [
            p(
              "Open the keynote on technology and democratic attention.",
              "Model answer: Last month, a student showed me an answer generated in seconds and asked how she could know whether to believe it. That is not a failure of curiosity. It is the central learning problem of our time: access to answers is expanding faster than our ability to judge them. A century ago, this university widened access to knowledge. Today, we must widen access to judgement as well.",
              "Begin with a specific human moment, name the present problem and establish the historical stake."),
            p(
              "Develop the argument and acknowledge the strongest benefit of technology.",
              "Model answer: Digital tools can bring a seminar to someone who cannot travel, translate a difficult text and give a quiet student another way to contribute. Those are real gains, and I would not trade them away. The danger begins when access is mistaken for understanding. A tool that supplies an answer instantly may reduce the struggle through which judgement is formed. We should therefore ask not only who can use the tool, but who can inspect it, challenge it and refuse it when necessary.",
              "State the benefit at full strength, then explain the distinct risk rather than replacing one absolute with another."),
            p(
              "Close the keynote with a concrete challenge to graduates.",
              "Model answer: A century ago, our founders believed that knowledge should not remain the property of a fortunate few. That obligation has not ended; it has changed form. Before you leave, choose one public claim you will test, one institution you will question with evidence and one community whose knowledge you will help make visible. Do not inherit the future as an audience. Help author it.",
              "Return to the historical opening, make the obligation contemporary and finish on a direct action."),
          ],
        },
        {
          type: "text",
          title: "The final test is transfer",
          paragraphs: [
            "After the keynote, ask a listener three questions without showing your notes: What was the central claim? What was the strongest objection you addressed? What did the speaker ask the audience to do? If any answer is missing, revise the structure before polishing the sentences.",
            "Then rehearse the questions you hope not to receive. The final measure of command is not whether you can preserve a script, but whether you can remain accurate, responsive and recognisably yourself when the script is no longer enough.",
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the keynote's central claim?",
          [
            "All technology threatens democratic life and should be rejected.",
            "Expanded access to answers must be matched by expanded capacity for judgement.",
            "Universities should teach only technical skills.",
          ],
          1,
          "The argument links changing access to knowledge with the democratic need to inspect, question and sometimes refuse powerful systems.",
        ),
        q(
          2,
          "Why does the president acknowledge technology's benefits?",
          [
            "To abandon the argument for informed judgement.",
            "To strengthen the critique by engaging the strongest reason to welcome technology.",
            "To suggest that access and understanding are the same.",
          ],
          1,
          "Acknowledging translation, participation and remote access makes the distinction between access and judgement more credible.",
        ),
        q(
          3,
          "What is the most effective final request?",
          [
            "Remember that technology is complicated.",
            "Trust the university to solve every future problem.",
            "Test a public claim, question an institution with evidence and make community knowledge visible.",
          ],
          2,
          "The request converts the keynote's values into specific, feasible actions that graduates can carry into public life.",
        ),
        q(
          4,
          "What best demonstrates command after the keynote ends?",
          [
            "Remaining accurate, responsive and authentic while answering unscripted challenge.",
            "Repeating the script word for word during questions.",
            "Avoiding every question that touches on uncertainty.",
          ],
          0,
          "The final challenge tests whether structure, judgement and voice survive beyond a prepared performance.",
        ),
      ],
    },
  ],
};
