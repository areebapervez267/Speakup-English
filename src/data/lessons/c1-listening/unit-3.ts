import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1ListeningUnit3: LessonUnit = {
  title: "Media, culture and nuance",
  description:
    "Interpret irony, documentary framing, implicit interview answers, live debate and culturally layered references.",
  lessons: [
    {
      slug: "satire-irony-and-humour",
      title: "Satire, irony and humour",
      summary:
        "Decode a satirical news bulletin about a council rebranding neglected pavements as an award-winning public experiment.",
      objective:
        "Recognise ironic gaps between official language and observable reality without mistaking the programme's invented premise for fact.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "Before you listen: the surface and the target",
          paragraphs: [
            "This original comedy bulletin imitates the confident language of a local government success story. Its council has an unusual explanation for unrepaired pavements, and its officials are delighted with the resulting publicity.",
            "Listen for literal claims first, then compare them with what the situation appears to be. Irony often depends on a mismatch between an elevated label and a mundane or embarrassing reality; humour sharpens the mismatch but does not remove the underlying criticism.",
          ],
        },
        {
          type: "transcript",
          title: "The Evening Rant: a bold new approach to pavements",
          context:
            "A fictional satirical programme. Presenter Celia Price interviews councillor Martin Voss, then hears from a resident.",
          lines: [
            { speaker: "Celia", text: "Good evening. A town that cannot fill its potholes has decided to fill them with meaning. Westbridge Council is now describing its damaged pavements as a distributed public-art installation, complete with interpretation boards and an inauguration ceremony next month." },
            { speaker: "Celia", text: "The scheme has already won a £50,000 civic-innovation award, although the application appears to have been submitted by the council itself." },
            { speaker: "Martin", text: "Residents were tripping over unfinished repairs. We asked a different question: why should every hole be hidden? This is visible infrastructure, a daily reminder of civic resilience." },
            { speaker: "Celia", text: "Mrs Shah says she uses a walking frame. Is she enjoying the reminder?" },
            { speaker: "Martin", text: "Safety is our priority. That is why the walking frame has been rebranded as a mobile accessibility companion and will soon be included in the visitor trail." },
            { speaker: "Celia", text: "The visitor trail follows twenty-three marked potholes, each with a plaque containing a QR code and the words “You are here, unfortunately”." },
            { speaker: "Martin", text: "Footfall outside cafés has risen twelve percent. People are finally looking down and engaging with their streets, which is exactly the behavioural change the consultation promised, even if the promised repairs remain unfunded." },
            { speaker: "Celia", text: "Or inspecting where they might fall. What happens when someone is injured?" },
            { speaker: "Martin", text: "They become a stakeholder in the installation. We provide a complimentary tour and a form requesting consent to the experience." },
            { speaker: "Celia", text: "At times like these, one longs for a less innovative council. Back to you in the studio—mind the meaning." },
          ],
        },
        {
          type: "tip",
          title: "Test euphemism against evidence",
          text: "Satire often works by giving an undesirable thing a positive official name. Ask what action the euphemism conceals: here, “installation” conceals unrepaired damage. Distinguish the presenter's critical framing from the councillor's self-justification. Tone may be playful, but the evidence comes from specific details—cost, risk, footfall and paperwork—not from laughter alone.",
        },
        {
          type: "exercise",
          title: "Read beneath the official language",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "What does the council now call its damaged pavements?",
              ["A cycling network", "A distributed public-art installation", "An emergency repair programme"],
              1,
              "Celia reports the council's description of the damaged pavements as a public-art installation.",
            ),
            c(
              "Why is the £50,000 award ironic?",
              ["Residents voted for it", "The council appears to have applied to itself", "It was paid for by a walking-frame manufacturer"],
              1,
              "The bulletin notes that the council itself appears to have submitted the award application.",
            ),
            c(
              "What does Martin call the walking frame?",
              ["A mobile accessibility companion", "A visitor tour guide", "A portable plaque"],
              0,
              "Martin rebrands the walking frame as a “mobile accessibility companion” to deflect the safety question.",
            ),
            c(
              "How does Martin respond to the risk of injury?",
              ["He promises immediate repairs", "He denies that anyone has fallen", "He recasts an injured resident as a participant in the installation"],
              2,
              "He says an injured person becomes a “stakeholder” and is offered a tour and consent form, an absurd deflection of responsibility.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Decode the satirical frame",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "Give one example of elevated language and the reality it disguises.",
              "“Distributed public-art installation” disguises unrepaired, hazardous pavements.",
              "Name both the official phrase and the underlying problem.",
            ),
            p(
              "What evidence does Martin offer for success, and why is it insufficient?",
              "He cites a twelve-percent rise in café footfall, but increased attention to the streets does not show that repairs or safety improved.",
              "Separate a commercial side effect from the project's stated purpose.",
            ),
            p(
              "Rewrite Martin's final injury policy in plain, non-satirical language that reveals its absurdity.",
              "Model answer: If a resident falls, the council will treat the injury as participation in its art project rather than repair the pavement.",
              "Preserve the actual action without the euphemism.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the main target of the satire?",
          ["The quality of local cafés", "Tourists who photograph streets", "Official spin that disguises neglect as innovation"],
          2,
          "The joke repeatedly targets bureaucratic language used to present hazardous neglect as civic success.",
        ),
        q(
          2,
          "Why is rebranding a walking frame particularly cutting?",
          ["It replaces practical help with a marketing phrase", "It suggests residents should stop walking", "It shows that walking frames are works of art"],
          0,
          "The joke exposes the gap between an essential mobility aid and the council's superficial promotional response.",
        ),
        q(
          3,
          "What does Celia's final warning “mind the meaning” imply?",
          ["The studio floor is being repaired", "The programme is also slippery and deceptive", "Residents should read every plaque"],
          1,
          "Her closing pun extends the pavement joke while reminding listeners to look for the concealed meaning of official statements.",
        ),
        q(
          4,
          "Which strategy is most reliable for understanding this bulletin?",
          ["Assume every statement is literally true", "Compare official claims with concrete consequences and the presenter's framing", "Treat all humour as meaningless"],
          1,
          "The satire depends on the mismatch between claims and observable effects, not on taking either speaker's wording at face value.",
        ),
      ],
    },
    {
      slug: "documentary-storytelling",
      title: "Documentary storytelling",
      summary:
        "Follow a documentary about a tidal mill and distinguish scene-setting, personal memory and historical evidence as the story changes direction.",
      objective:
        "Track a documentary's narrative arc while identifying whose perspective each fact or memory represents.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Before you listen: three layers of a story",
          paragraphs: [
            "A documentary opens at a disused tidal mill and follows an attempt to turn it into a community heritage centre. It moves between atmospheric scenes, a former miller's memories and a historian's records.",
            "Listen for changes of voice and time. A vivid present-tense scene establishes place; it does not by itself prove a historical claim. Personal memory can carry emotional truth while differing from documentary evidence.",
          ],
        },
        {
          type: "transcript",
          title: "Documentary extract: when the tide turned",
          context:
            "An original documentary script. Narrator Eva, former miller Alfie Webb, historian Dr Saira Cole and architect Marcus Bell guide the story.",
          lines: [
            { speaker: "Narrator", text: "At low tide, the mill looks stranded. Green weed hangs from its wooden gates, and the channel beyond is a ribbon of mud. For centuries, this empty-looking basin was the engine of the town." },
            { speaker: "Alfie", text: "My father said you could hear the stones before you saw them. On winter mornings the whole kitchen rattled. We children thought it was thunder until we learned it was the tide doing its work." },
            { speaker: "Narrator", text: "The mill closed in 1968. Alfie's account captures the sound and family routine; the historian Saira Cole has been checking what the records say about output and employment." },
            { speaker: "Saira", text: "The ledgers show a serious decline after the 1932 flood, but closure was not inevitable. A newer mill opened upstream, and the workforce gradually moved there. Alfie's family stayed because they owned the cottage." },
            { speaker: "Alfie", text: "People say the tide beat us. It didn't feel like that. One by one, the jobs went upriver until there was nobody left but my father, locking up." },
            { speaker: "Marcus", text: "Our plan keeps the mill intact and uses glass bridges to show how the machinery once connected. The centre is due to open in 2031 if the heritage grant survives the spending review." },
            { speaker: "Narrator", text: "Inside, light now reaches rooms that were dark for decades. Yet the basin still fills and empties twice a day, indifferent to the plans on the drawing board." },
            { speaker: "Saira", text: "That is the point of preserving the site. Not every working building becomes a monument, but this one lets us see how energy, labour and landscape were connected." },
            { speaker: "Narrator", text: "Alfie will not be here to see the opening. His daughter has promised to bring his toolkit, so that the first demonstration begins with the objects he knew." },
          ],
        },
        {
          type: "tip",
          title: "Tag voice, time and function",
          text: "Label each passage as scene, memory, record or proposal. Then note its tense: a present-tense landscape may frame a past event, while a future plan remains conditional. When a documentary pairs two accounts, do not force agreement. Ask whether they concern different things—output versus family experience, or closure date versus its lived meaning.",
        },
        {
          type: "exercise",
          title: "Follow the documentary layers",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "Why does Alfie initially think the mill is making a thunderous sound?",
              ["He is recalling a winter storm", "As a child, he has not learned it is the mill machinery", "He is describing the 1932 flood"],
              1,
              "Alfie says the children believed the rattling was thunder until they understood it came from the tide-driven mill.",
            ),
            c(
              "When did the mill close?",
              ["1932", "1968", "2031"],
              1,
              "The narrator states that the mill closed in 1968.",
            ),
            c(
              "What additional cause of decline does Saira identify?",
              ["A newer mill opened upstream", "The town banned bread production", "The tidal channel disappeared"],
              0,
              "She says a newer mill opened upstream and workers gradually moved there.",
            ),
            c(
              "What remains uncertain about the heritage centre?",
              ["Whether the mill still fills with water", "Whether Alfie's toolkit survives", "Whether the heritage grant survives the spending review"],
              2,
              "Marcus gives a conditional 2031 opening dependent on the grant.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Respect different kinds of truth",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "Why does the narrator distinguish Alfie's account from Saira's records?",
              "Alfie conveys sound, routine and emotional experience, while Saira checks output, employment and historical causation.",
              "The accounts answer different questions rather than simply contradicting each other.",
            ),
            p(
              "How does the final image connect past and future?",
              "The tide still fills the basin while Alfie's daughter will bring his toolkit to the planned centre, linking continuity of place with family memory.",
              "Include both the natural cycle and the inherited object.",
            ),
            p(
              "Write a two-sentence documentary summary that separates observed fact, interpretation and future proposal.",
              "Model answer: The mill closed in 1968, and records connect its decline to flooding and competition upstream. The proposed centre would preserve its machinery and community history, but its 2031 opening depends on further funding.",
              "Avoid presenting the proposal as an accomplished event.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What function does the opening description of mud and weed serve?",
          ["It establishes an atmospheric present-day scene that contrasts with former activity", "It proves that the mill was unprofitable in 1968", "It explains the full history of the 1932 flood"],
          0,
          "The scene creates a sense of abandonment and loss that the following memories and records then contextualise.",
        ),
        q(
          2,
          "How should Alfie's “the tide beat us” be understood?",
          ["As a precise economic explanation disproved by every record", "As a literal account of the closure date", "As a personal interpretation of a more complex decline"],
          2,
          "His metaphor expresses how the loss felt; Saira's records add flood, competition and workforce factors.",
        ),
        q(
          3,
          "Why is Alfie's daughter's promise an effective closing detail?",
          ["It proves the centre will open on time", "It connects historical interpretation to an object and a living family relationship", "It shows that the mill machinery is still operating"],
          1,
          "The toolkit makes the planned interpretation tangible and personal, without guaranteeing the project's success.",
        ),
        q(
          4,
          "Which listening distinction is most important throughout the extract?",
          ["Assume the narrator's scene-setting is historical evidence", "Treat every memory as a verified statistic", "Identify the source and purpose of each contribution"],
          2,
          "Understanding depends on separating atmosphere, memory, documentary records and future proposals.",
        ),
      ],
    },
    {
      slug: "interviews-with-implicit-meaning",
      title: "Interviews with implicit meaning",
      summary:
        "Hear a former diplomat answer questions about a failed negotiation and infer where reassurance, concession and refusal are implied.",
      objective:
        "Interpret evasive or carefully qualified interview answers by combining wording, topic shift and the interviewer's follow-up.",
      minutes: 29,
      blocks: [
        {
          type: "text",
          title: "Before you listen: what is not being said",
          paragraphs: [
            "A former diplomat is promoting a memoir about negotiations that ended without agreement. The interviewer wants accountability; the guest wants to explain constraints without accepting sole blame.",
            "Watch for broad passive phrases, praise that limits criticism, and a shift from the guest's own actions to the other side. Implicit meaning is inferred from the whole answer, not from one suspicious word.",
          ],
        },
        {
          type: "transcript",
          title: "Interview: after the Geneva talks",
          context:
            "Presenter Lena Morris interviews former diplomat Sir Adrian Hale about a fictional trade negotiation that collapsed in 2019. His answers are measured and non-confrontational.",
          lines: [
            { speaker: "Lena", text: "Your memoir calls the Geneva outcome a missed opportunity. Yet you recommended rejecting the final draft. Why?" },
            { speaker: "Adrian", text: "Because it protected the principle of independent arbitration. A less ambitious agreement that survived would have served our exporters better than a sweeping text neither side could implement." },
            { speaker: "Lena", text: "Critics say you overestimated the other side's willingness to walk away." },
            { speaker: "Adrian", text: "It is always easy, with hindsight, to confuse a firm position with a bluff. The evidence available at the time suggested they had prepared a fallback, though I may have placed too much weight on it." },
            { speaker: "Lena", text: "Is that an apology for your assessment?" },
            { speaker: "Adrian", text: "It is an acknowledgement that judgement is imperfect. Both delegations made decisions they believed were justified; the process did not reward compromise." },
            { speaker: "Lena", text: "You could have requested one more recess. Your deputy says you thought it would look weak." },
            { speaker: "Adrian", text: "My deputy is entitled to his recollection. I was concerned about the signal a recess would send to our own parliament, not simply about appearances abroad." },
            { speaker: "Lena", text: "So you stand by the recommendation? And when you say both delegations shared responsibility, where does that leave your relationship with the deputy who remembers it differently?" },
            { speaker: "Adrian", text: "I stand by its purpose. Would I handle the timing differently now? I like to think so, but a memoir is not a time machine. As for my deputy, let us say the talks taught us both that loyalty can survive a difference of recollection. I would rather leave it there." },
          ],
        },
        {
          type: "tip",
          title: "Build a meaning-from-wording grid",
          text: "For each evasive answer, record the literal statement, the question it answers and the part it avoids. “Both delegations” distributes responsibility; “I stand by its purpose” separates intention from execution. A polite closing such as “I would rather leave it there” often signals a boundary rather than forgetting. Test your inference against later qualifications rather than treating it as certain.",
        },
        {
          type: "exercise",
          title: "Infer the unstated position",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "Why did Adrian recommend rejecting the draft?",
              ["It threatened the principle of independent arbitration", "It reduced all tariffs immediately", "His deputy refused to sign it"],
              0,
              "Adrian says the text threatened independent arbitration and was too ambitious to implement.",
            ),
            c(
              "What does Adrian concede about the fallback evidence?",
              ["He invented it", "He may have given it too much weight", "It never existed"],
              1,
              "He says he may have placed too much weight on evidence suggesting the other side had prepared a fallback.",
            ),
            c(
              "Why does he mention his own parliament when discussing another recess?",
              ["He wants to redirect attention to domestic political pressure", "He believes parliament controlled the talks", "He is promising to resign"],
              0,
              "He shifts from how delay would look abroad to the signal it would send to domestic political audiences.",
            ),
            c(
              "What does his final sentence about the deputy imply?",
              ["He has forgotten their disagreement", "He wants the interview to end immediately", "He is closing the topic while suggesting their relationship remains intact"],
              2,
              "He explicitly leaves the matter there after saying loyalty can survive a difference of recollection.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Infer with restraint",
          instructions:
            "Answer from memory, then check the model responses.",
          items: [
            p(
              "How does “both delegations” change the apparent meaning of Adrian's answer?",
              "It distributes responsibility instead of accepting that his assessment alone caused the failure.",
              "It is a move from personal to shared agency.",
            ),
            p(
              "Distinguish what Adrian defends from what he might now change.",
              "He defends the recommendation's purpose but implies he might handle the timing differently.",
              "His answer separates principle from execution.",
            ),
            p(
              "Write a cautious two-sentence interpretation of “a memoir is not a time machine”.",
              "Model answer: Adrian implies that hindsight may reveal a better decision, but reflection cannot undo the past. He is tentatively acknowledging a possible error while refusing a full apology.",
              "Use “suggests” or “may imply” and retain the qualification.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is Adrian's strongest defence of the recommendation?",
          ["The agreement was unnecessary", "A smaller workable agreement would have been preferable to an unenforceable ambitious one", "His deputy had already accepted the draft"],
          1,
          "He defends the practical aim of protecting a viable outcome and the arbitration principle.",
        ),
        q(
          2,
          "Why does Lena ask whether his acknowledgement is an apology?",
          ["She wants to expose the gap between admission and personal responsibility", "She is asking him to leave the interview", "She wants him to praise his deputy"],
          0,
          "The follow-up presses the difference between conceding imperfect judgement and apologising for his own role.",
        ),
        q(
          3,
          "What does “loyalty can survive a difference of recollection” most likely mean?",
          ["The deputy has left the diplomatic service", "Their disagreement is resolved and forgotten", "They remain personally connected despite conflicting accounts"],
          2,
          "The phrasing suggests enduring loyalty without declaring which account is correct.",
        ),
        q(
          4,
          "Which inference is best supported by the final answer?",
          ["Adrian is willing to discuss the deputy in detail", "Adrian wants to preserve a boundary around a personal disagreement", "Adrian believes the deputy is certainly dishonest"],
          1,
          "“I would rather leave it there” explicitly closes the topic and should not be inflated into an accusation of dishonesty.",
        ),
      ],
    },
    {
      slug: "radio-discussion-and-debate",
      title: "Radio discussion and debate",
      summary:
        "Follow a phone-in on a four-day working week and evaluate how each speaker uses a trial, an example and a prediction.",
      objective:
        "Compare competing arguments in live debate, paying attention to the scope of evidence and the difference between prediction and observation.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Before you listen: evidence under pressure",
          paragraphs: [
            "A radio host is discussing whether a four-day week should become normal. A union researcher cites a six-month trial; a café owner describes staffing pressure; an economist questions how broadly the result can be applied.",
            "Prepare to track three functions: evidence, value judgement and prediction. A speaker can cite accurate results from a narrow trial and still draw a conclusion those results do not support.",
          ],
        },
        {
          type: "transcript",
          title: "Phone-in: four days, same pay?",
          context:
            "Host Farah Khan chairs with union researcher Leonie Price, café owner Nikhil Shah and economist Professor Ben Ito.",
          lines: [
            { speaker: "Farah", text: "Sixty-one organisations completed a six-month four-day-week trial without reducing pay. Leonie, does that settle the argument?" },
            { speaker: "Leonie", text: "It settles the claim that fewer hours must mean lower output. Across those organisations, revenue was broadly stable and recruitment improved. That is a reason to test the model more widely." },
            { speaker: "Nikhil", text: "My café tried a three-week pilot. Customers still arrived on Friday, but I had one chef fewer. We paid overtime and nearly lost our Saturday team from exhaustion." },
            { speaker: "Ben", text: "Those experiences are compatible. The trial organisations volunteered, which means they may already have been unusually adaptable. The café illustrates a genuine coverage problem, not a universal impossibility." },
            { speaker: "Leonie", text: "But employers can reorganise shifts. The point is to stop treating hours as the only measure of commitment." },
            { speaker: "Nikhil", text: "Tell that to the solo manager who now covers the closed day. Not every workplace has ten people to rotate, and customers do not always value a quieter Monday more than an open Friday." },
            { speaker: "Farah", text: "Ben, would you support a public fund for larger trials?" },
            { speaker: "Ben", text: "Yes, if the trials include care homes, construction sites and small firms, and publish failures as well as successes. Otherwise we will simply fund organisations good at publicity." },
            { speaker: "Leonie", text: "With an independent evaluation, I'd accept that. A four-day week should be tested as a way of working, not sold as a guaranteed happiness project." },
            { speaker: "Nikhil", text: "And my vote is for four days where it works, with no penalty for saying it doesn't. Flexible beats ideological." },
          ],
        },
        {
          type: "tip",
          title: "Track evidence scope and argument function",
          text: "Mark each contribution E for evidence, V for value and P for prediction. Then add a scope note: how long, how many, which sector, self-selected or representative. Agreement may be about running better trials rather than adopting a universal policy. Listen for speakers who acknowledge a valid opposing point before stating a different practical priority.",
        },
        {
          type: "exercise",
          title: "Compare the arguments",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "How long did the larger trial last?",
              ["Three weeks", "Six months", "Six years"],
              1,
              "Farah describes a six-month trial involving 61 organisations.",
            ),
            c(
              "What problem did Nikhil's café experience?",
              ["Customers stopped paying", "A permanent fall in all sales", "Overtime costs and staff exhaustion from covering the closed day"],
              2,
              "Nikhil says the café paid overtime and nearly lost its Saturday team through exhaustion.",
            ),
            c(
              "Why does Ben warn about the trial's volunteers?",
              ["They may have been more adaptable than typical workplaces", "They were all public-sector organisations", "They were not allowed to report losses"],
              0,
              "He identifies self-selection as a reason not to generalise automatically from the results.",
            ),
            c(
              "What conditions does Ben attach to a public fund?",
              ["Only technology firms may apply", "Trials must cover varied sectors and publish failures", "The four-day week must be mandatory"],
              1,
              "He calls for care homes, construction and small firms to be included, with failures published alongside successes.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Find the real area of agreement",
          instructions:
            "Answer from memory, then check the model responses.",
          items: [
            p(
              "Why does Ben say the two experiences are compatible?",
              "A positive result in adaptable volunteer organisations can coexist with a coverage problem in a small café; neither proves a universal rule.",
              "Different contexts can produce different outcomes.",
            ),
            p(
              "What does Leonie concede in her final contribution?",
              "She accepts an independent evaluation and rejects presenting the four-day week as a guaranteed happiness project.",
              "Her concession concerns evaluation and marketing, not the value of testing.",
            ),
            p(
              "Write a two-sentence debate summary that identifies common ground and the remaining practical dispute.",
              "Model answer: All three accept that more rigorous testing is needed, including results from less adaptable workplaces. They still disagree about how easily shift-based businesses can maintain customer coverage without burdening staff.",
              "Do not reduce the debate to a simple pro- or anti-four-day-week split.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What does Leonie believe the larger trial disproves?",
          ["All small firms have staffing problems", "Shorter hours necessarily reduce output", "Every trial needs an independent evaluator"],
          1,
          "She says the results challenge the claim that fewer hours must mean lower output.",
        ),
        q(
          2,
          "Why is Nikhil's café useful to the discussion despite being one small example?",
          ["It represents every sector exactly", "It proves a four-day week can never work", "It identifies a coverage problem that a broad success average may hide"],
          0,
          "His experience adds a practical constraint without establishing that all workplaces would fail.",
        ),
        q(
          3,
          "What does Ben mean by funding organisations “good at publicity”?",
          ["He opposes media coverage of research", "He worries that showcase participants will produce an unrepresentative success story", "He thinks publicity causes staff exhaustion"],
          1,
          "His concern is selection bias if prominent, enthusiastic organisations dominate the evidence.",
        ),
        q(
          4,
          "What is the strongest point of convergence by the end?",
          ["A four-day week should be compulsory", "Further trials need broader participation, independent evaluation and honest reporting", "Customer service no longer matters"],
          2,
          "The speakers converge on better testing and transparency, not on a single universal policy.",
        ),
      ],
    },
    {
      slug: "understanding-cultural-reference",
      title: "Understanding cultural reference",
      summary:
        "Hear a literature scholar explain why Shakespeare's “green-eyed monster” and Orwell's “Big Brother” are often distorted in public speech.",
      objective:
        "Recognise cultural allusions and judge whether a speaker preserves, extends or reverses the original reference's meaning.",
      minutes: 28,
      blocks: [
        {
          type: "text",
          title: "Before you listen: references travel",
          paragraphs: [
            "Familiar phrases from literature often appear in news reports, political speeches and advertising without their original context. A media interviewer asks a Shakespeare scholar how those borrowed phrases change meaning.",
            "You do not need to know every source by heart. Listen for explanations of the original scene, then compare that explanation with the modern use being discussed.",
          ],
        },
        {
          type: "transcript",
          title: "Interview: borrowed words and lost contexts",
          context:
            "Media critic Joyce Adeyemi interviews Professor Colin Mercer about allusions in public language.",
          lines: [
            { speaker: "Joyce", text: "A minister accused the opposition of stirring the “green-eyed monster”. Professor Mercer, is that simply Shakespeare for jealousy?" },
            { speaker: "Colin", text: "Nearly. In Othello, Iago warns that jealousy can make people doubt what they can see. The monster is not just an emotion; it is a force that distorts judgement." },
            { speaker: "Joyce", text: "So when a newspaper applies it to commercial rivalry, is the reference being used accurately?" },
            { speaker: "Colin", text: "It is recognisable but thinner. Jealousy remains, while the idea of destroying clear perception often disappears. Borrowed language can keep the label and lose the warning." },
            { speaker: "Joyce", text: "“Big Brother” is even more familiar. People use it to describe any workplace app that watches them." },
            { speaker: "Colin", text: "Orwell's Big Brother combines surveillance with power over truth. The slogan “who controls the past controls the future” matters. An app monitoring time is not automatically the whole system of coercion Orwell imagined." },
            { speaker: "Joyce", text: "But surely the reference still usefully suggests intrusion?" },
            { speaker: "Colin", text: "Yes, if we treat it as an analogy, not an identity. The listener should ask which feature is being transferred: watching, manipulating records, demanding loyalty, or merely collecting data. The strength of the comparison depends on how much of that system is actually present." },
            { speaker: "Joyce", text: "You have argued that schools should teach allusions as arguments rather than lists of quotations." },
            { speaker: "Colin", text: "Exactly. A reference makes a claim by association. The learner's task is to retrieve the association and ask whether the comparison actually supports it." },
          ],
        },
        {
          type: "tip",
          title: "Unpack the association",
          text: "When you recognise an allusion, identify the feature it imports: an emotion, a warning, a character or a political system. Then check the modern comparison for both similarity and difference. If the reference is unclear, listen for a gloss from another speaker or reconstruct it from the situation. Avoid assuming that frequent use guarantees precise use.",
        },
        {
          type: "exercise",
          title: "Check what the reference carries",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "What does “green-eyed monster” add beyond the word jealousy?",
              ["The idea that jealousy distorts judgement", "The claim that green eyes are dangerous", "A description of Iago's appearance"],
              0,
              "Colin explains that the phrase evokes a force that makes people doubt what they can see.",
            ),
            c(
              "What is thinner about applying the phrase to commercial rivalry?",
              ["It removes the association with distorted perception", "It changes the source from drama to poetry", "It refers to a literal monster"],
              1,
              "The modern use retains jealousy but often loses Iago's warning about corrupted judgement.",
            ),
            c(
              "Which feature is central to Orwell's Big Brother?",
              ["A friendly workplace manager", "Surveillance combined with control over truth", "Any device that records a clock-in time"],
              1,
              "Colin emphasises both surveillance and power over truth, including the manipulation of the past.",
            ),
            c(
              "How should allusions be taught, according to Colin?",
              ["As lists to memorise without context", "As quotations whose meaning never changes", "As arguments whose associations must be examined"],
              2,
              "He says references make claims by association and learners should test whether the comparison supports them.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Use references critically",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "Why does Colin call a workplace-monitoring app an analogy rather than Big Brother itself?",
              "The app may share the feature of watching, but it does not necessarily reproduce Orwell's wider coercion and control of truth.",
              "Name the shared feature and the missing feature.",
            ),
            p(
              "What does “keep the label and lose the warning” mean?",
              "A familiar phrase can remain recognisable even when the moral or interpretive force of its original context has been removed.",
              "Focus on the difference between recognition and full meaning.",
            ),
            p(
              "Find one modern use of an allusion. Explain the imported association and one way the comparison may be limited.",
              "Model answer: Calling a persuasive salesperson “a real Svengali” imports the idea of mesmerising control. It is limited if the person merely gives advice and the customer makes an independent choice.",
              "You may choose a literary, mythological or political allusion you know.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is Colin's attitude towards familiar allusions in public speech?",
          ["He rejects all modern borrowing", "He insists every speaker cite the full source text", "He accepts their recognisability but questions loss of original force"],
          2,
          "He treats borrowed references as useful but often thinner than their originals.",
        ),
        q(
          2,
          "Why does the quotation about controlling the past matter to his explanation?",
          ["It identifies Big Brother's power over truth as well as surveillance", "It proves Orwell invented workplace software", "It describes the plot of Othello"],
          0,
          "The quotation extends the reference beyond watching people to controlling the record by which reality is understood.",
        ),
        q(
          3,
          "What does Joyce's question about intrusion achieve?",
          ["It tests whether Colin is rejecting every comparison", "It asks for the literal meaning of Big Brother", "It ends the interview because the answer is obvious"],
          0,
          "Colin concedes a useful analogy, showing that his criticism concerns precision rather than all application.",
        ),
        q(
          4,
          "Which question best tests whether a cultural allusion is doing argumentative work?",
          ["Is the phrase familiar to most people?", "Which original association is being transferred, and does it fit the comparison?", "How many syllables does the phrase have?"],
          1,
          "Colin's approach requires retrieving the association and checking its relevance to the modern claim.",
        ),
      ],
    },
  ],
};
