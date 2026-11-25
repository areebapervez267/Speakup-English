import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1ListeningUnit2: LessonUnit = {
  title: "Academic and professional listening",
  description:
    "Follow sustained arguments, panel reasoning, numerical presentations and decisions in multi-agenda meetings.",
  lessons: [
    {
      slug: "lectures-with-complex-argument",
      title: "Lectures with complex argument",
      summary:
        "Follow a geography lecture weighing flood defences against managed retreat and distinguish evidence from the lecturer's recommendation.",
      objective:
        "Track a multi-stage academic argument, including caveats, counter-evidence and the point at which evidence becomes policy advice.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Before you listen: an argument with two directions",
          paragraphs: [
            "A geographer is discussing how a coastal town should respond to recurrent flooding. The lecture compares engineering protection with moving people and assets away from danger, but neither option is presented as universally effective.",
            "As you listen, separate four moves: the problem, the evidence for one response, the objection to it, and the lecturer's conditional conclusion. Notice how qualification words such as “only”, “provided that” and “in this case” narrow a claim.",
          ],
        },
        {
          type: "transcript",
          title: "Lecture: living with water",
          context:
            "Professor Helena Ward is giving an extract from a university lecture on coastal adaptation. Two students ask questions at the end. The delivery is brisk but carefully signposted.",
          lines: [
            { speaker: "Professor Ward", text: "We often frame adaptation as a contest between building higher walls and beating a retreat. That framing is neat, but misleading. The same town may protect its hospital, relocate its housing and restore wetlands upstream." },
            { speaker: "Professor Ward", text: "Consider Bellhaven, where the sea wall reduced losses from major storms by roughly two thirds. Impressive—until we ask what happens when water overtops it. A defence can lower the probability of damage while increasing the severity of the eventual failure." },
            { speaker: "Professor Ward", text: "Managed retreat addresses that risk by creating space for water. Yet relocation is not simply an engineering decision. If insurers withdraw first, the town loses the tax base needed to fund any adaptation at all." },
            { speaker: "Professor Ward", text: "The evidence therefore does not support choosing one instrument for every coastline. It supports sequencing. Protect irreplaceable services, buy time where possible, and begin relocation negotiations before a disaster removes the community's options." },
            { speaker: "Student", text: "You say the wall reduced losses by two thirds. Is that over all floods, or only the largest events?" },
            { speaker: "Professor Ward", text: "A fair challenge. The estimate comes from the six major storms in our model, not the frequent nuisance floods that close roads and shops. Do not let a dramatic number answer a question it was never designed to answer." },
            { speaker: "Student", text: "But residents may see relocation as abandonment. What makes your recommendation fair?" },
            { speaker: "Professor Ward", text: "Fairness requires their participation before land is compulsorily purchased, and compensation that lets them rebuild a livelihood, not merely a house. Without that, we are transferring risk onto the people with the least political weight." },
            { speaker: "Professor Ward", text: "So my recommendation is conditional, not a blueprint: protect, restore and relocate in combination, and judge each choice by who bears the remaining risk. Efficiency alone is an incomplete test." },
          ],
        },
        {
          type: "tip",
          title: "Map the argument, not the order of sentences",
          text: "Give each major move a compact label: problem, benefit, limitation, recommendation. When the lecturer changes example, keep the labels active so you can tell whether the new material supports or challenges the current claim. Attach numbers to their scope: “two thirds” belongs only to major storms in the model, not every kind of flood.",
        },
        {
          type: "exercise",
          title: "Identify the lecturer's reasoning",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "What is misleading about the opening either-or framing?",
              ["It ignores that combined measures can serve different parts of one town", "It assumes all floods are equally deep", "It suggests that wetlands cannot store water"],
              0,
              "Ward says a town may protect its hospital, relocate housing and restore wetlands at the same time.",
            ),
            c(
              "What risk may a sea wall increase?",
              ["The frequency of storms", "The severity of damage when it is overtopped", "The number of people who buy insurance"],
              1,
              "A wall lowers damage probability but can make eventual overtopping more destructive.",
            ),
            c(
              "Why might insurer withdrawal damage managed-retreat plans?",
              ["It would force every resident to move immediately", "It would make sea walls physically weaker", "It would reduce the tax base available for adaptation"],
              2,
              "Ward argues that losing property insurance can erode the town's capacity to finance any response.",
            ),
            c(
              "What does Ward require for relocation to be fair?",
              ["Resident participation before purchase and support for rebuilding livelihoods", "Immediate purchase before public discussion", "Compensation limited to the value of each house"],
              2,
              "She calls for participation and compensation that restores livelihoods, not just buildings.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Summarise with conditions",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "How many storms informed the two-thirds estimate?",
              "Six major storms in the model.",
              "The figure does not include frequent nuisance flooding.",
            ),
            p(
              "What sequence of action does Ward recommend?",
              "Protect irreplaceable services, buy time where possible, and begin relocation negotiations before a disaster removes options.",
              "The conclusion combines protection and relocation rather than choosing one alone.",
            ),
            p(
              "Write a two-sentence summary that preserves both her recommendation and its main condition.",
              "Model answer: Ward recommends combining protection, wetland restoration and relocation. She argues that the sequence is fair only if residents participate early and compensation enables them to rebuild their livelihoods.",
              "Use a clear recommendation followed by a condition beginning “provided that” or “only if”.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the lecture's main criticism of treating adaptation as a contest between walls and retreat?",
          ["Walls never reduce flood losses", "Retreat is always cheaper than protection", "Different measures can be combined according to local need"],
          2,
          "Ward rejects a single universal choice and argues for a mix of measures across the town.",
        ),
        q(
          2,
          "Why does Ward ask for a scope check on the two-thirds figure?",
          ["She wants students to repeat every number", "She wants the estimate applied only to major storms", "She believes the model omitted the hospital"],
          0,
          "She explicitly says the estimate covers six major storms and should not be extended to frequent nuisance floods.",
        ),
        q(
          3,
          "What does the insurance example reveal about adaptation policy?",
          ["Financial and social systems can shape physical choices", "Insurance is the only cause of coastal flooding", "A larger tax base always prevents relocation"],
          1,
          "Insurer withdrawal affects the town's finances and therefore its freedom to choose an adaptation strategy.",
        ),
        q(
          4,
          "Which listening approach would best capture Ward's final position?",
          ["Record isolated statistics and choose the largest", "Retain every example but ignore her evaluation", "Link her evidence to the recommendation and its fairness condition"],
          2,
          "Her position emerges from how she weighs evidence and adds a moral condition about participation and compensation.",
        ),
      ],
    },
    {
      slug: "panel-discussions-and-q-a",
      title: "Panel discussions and Q&A",
      summary:
        "Follow a school-governance panel on classroom AI and separate research findings, professional experience and unanswered concerns.",
      objective:
        "Track each panelist's stance and evidence type, then evaluate questions that expose assumptions rather than simply requesting facts.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Before you listen: three kinds of authority",
          paragraphs: [
            "A teacher, an education researcher and a parent are discussing whether schools should permit classroom AI tools. Their contributions have different evidential weight: a classroom observation, a comparative study and a concern about transparency.",
            "Listen for agreement that is narrower than it first appears. A panelist may accept a finding while rejecting the policy built on it. During questions, note which claims are challenged and which are left standing.",
          ],
        },
        {
          type: "transcript",
          title: "Panel: should classrooms use generative AI?",
          context:
            "Chair Mina Patel hosts teacher David Chen, researcher Dr Rosa Alvarez and parent Grace Owusu. The final section is audience Q&A.",
          lines: [
            { speaker: "Mina", text: "Our first question is narrow: should schools permit AI tools, not require them? David, you've used one with a year-ten class." },
            { speaker: "David", text: "For drafting feedback, yes, with safeguards. Students revised more because the comments arrived instantly. But I checked every suggestion, and that took time away from other pupils." },
            { speaker: "Rosa", text: "Our study of six schools found similar enthusiasm and no gain in independent writing. When the tool was removed, frequent users struggled to begin without it. That is a dependency signal, not proof of permanent harm." },
            { speaker: "Grace", text: "Parents need to know when AI has shaped a marked assignment. If we cannot see that boundary, we're assessing the product while remaining ignorant of the process. Permission should therefore name the task: “use AI for ideas, not for generated prose” is clearer than a blanket ban or a blank cheque." },
            { speaker: "David", text: "I agree on disclosure, though a declaration alone doesn't demonstrate learning. I still ask pupils to explain their choices aloud." },
            { speaker: "Rosa", text: "And that oral defence is more informative than a generic AI detector score. The tool is permitted for planning in two of our schools; written work remains supervised." },
            { speaker: "Mina", text: "Question from the floor: if independent writing did not improve, why permit any use?" },
            { speaker: "Rosa", text: "Because absence of measured gain is not the same as evidence of no value. We found a small benefit for brainstorming, but our study was not designed to measure every possible use." },
            { speaker: "David", text: "I could work with that, provided teachers get planning time. Otherwise the safeguard becomes one more unpaid job at eleven at night." },
            { speaker: "Mina", text: "So we have conditional support, a transparency requirement and an unresolved staffing question. We'll publish those distinctions rather than announce consensus." },
          ],
        },
        {
          type: "tip",
          title: "Tag the kind of claim",
          text: "Use simple labels beside each contribution: study, experience, value, concern, condition. This prevents a memorable classroom anecdote from outweighing comparative evidence, or a statistical result from settling an ethical question. In Q&A, listen for scope words—“for planning”, “in two schools”, “not designed to”—because they identify what the speaker is actually prepared to endorse.",
        },
        {
          type: "exercise",
          title: "Read the panel precisely",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "What benefit did David observe?",
              ["More revision because feedback was immediate", "Higher examination scores", "Fewer disciplinary problems"],
              0,
              "David says students revised more when comments arrived instantly.",
            ),
            c(
              "How many schools were in Rosa's comparative study?",
              ["Two", "Six", "Ten"],
              1,
              "Rosa introduces a study of six schools.",
            ),
            c(
              "What did Rosa conclude from users struggling without the tool?",
              ["AI had permanently damaged their writing", "The study proved every classroom should ban AI", "It signalled possible dependency but not permanent harm"],
              2,
              "She explicitly calls it a dependency signal while denying that it proves permanent harm.",
            ),
            c(
              "What condition does David attach to supporting the narrower permission?",
              ["Parents must mark the work", "Teachers need planning time", "AI detectors must set all grades"],
              1,
              "David agrees only if teachers receive planning time to manage the safeguards.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Compare positions without flattening them",
          instructions:
            "Answer from memory, then check the model responses.",
          items: [
            p(
              "What does Grace mean by “assessing the product while remaining ignorant of the process”?",
              "Teachers may judge the finished assignment without knowing how much was generated by AI.",
              "Her concern is transparency about authorship, not simply the final mark.",
            ),
            p(
              "Why does Rosa prefer an oral defence to an AI detector score?",
              "Because asking students to explain their choices gives direct evidence of learning, while detector scores are generic and less informative.",
              "Contrast evidence of understanding with a probability score.",
            ),
            p(
              "Write a panel summary with one point of agreement and two unresolved issues.",
              "Model answer: All three accept some form of task-specific permission with disclosure. Whether AI use improves learning and how teachers will find time to supervise it remain unresolved.",
              "Do not report conditional support as unanimous approval.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What makes David's evidence different from Rosa's?",
          ["It comes from a controlled experiment", "It comes from his experience with one class", "It describes the views of six school governors"],
          1,
          "David offers a practitioner's observation from a year-ten class, while Rosa discusses a comparative study.",
        ),
        q(
          2,
          "Why is “no measured gain” not equivalent to “no value” in Rosa's argument?",
          ["She thinks all measurements are invalid", "She considers independent writing unimportant", "The study's design did not cover every possible benefit or use"],
          0,
          "She notes a small brainstorming benefit and explains that the study was not designed to measure every use.",
        ),
        q(
          3,
          "What is Grace's central concern?",
          ["Students should never brainstorm", "Schools need visibility into AI's role in assessed work", "Teachers should use detectors for every assignment"],
          1,
          "She wants schools to know when AI has shaped marked work so the learning process remains visible.",
        ),
        q(
          4,
          "How does the chair represent the outcome?",
          ["The panel voted to ban AI", "Everyone endorsed unrestricted classroom use", "She preserves disagreement and conditional support instead of claiming consensus"],
          2,
          "Mina explicitly lists conditional support, transparency and an unresolved staffing issue rather than a single agreed policy.",
        ),
      ],
    },
    {
      slug: "presentations-with-dense-data",
      title: "Presentations with dense data",
      summary:
        "Follow a transit briefing containing percentages, denominators and a revised forecast, and identify which comparisons are valid.",
      objective:
        "Interpret dense spoken data by tracking units, baselines, denominators and corrections rather than extracting isolated numbers.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Before you listen: numbers need a frame",
          paragraphs: [
            "A transport analyst is presenting early results from a bus-priority programme. The briefing includes changes in ridership, punctuality and cost per journey, and one figure is corrected during the question period.",
            "Prepare four labels before listening: measure, period, comparison group and unit. A percentage without a baseline can sound precise while concealing a very different scale of change.",
          ],
        },
        {
          type: "transcript",
          title: "Briefing: the first year of bus priority",
          context:
            "Analyst Malik Khan presents to a city transport committee. His slides contain twelve charts, but only the most decision-relevant figures are discussed aloud.",
          lines: [
            { speaker: "Malik", text: "Across the twelve pilot corridors, weekday boardings rose from 41,000 to 45,000 a day. That is roughly ten percent, but boardings are counts; punctuality is measured separately as the proportion arriving within three minutes of schedule. It moved from 62 to 71 percent, although on the four busiest corridors alone the gain was only three points." },
            { speaker: "Councillor", text: "So is the network saving five million car journeys a year, or is that a projection?" },
            { speaker: "Malik", text: "A projection. We asked a sample of 1,600 passengers how their previous journey was made. We cannot simply add every boarding to the car figure because some people would have walked or cycled." },
            { speaker: "Malik", text: "The operating cost per completed journey fell from £2.80 to £2.55. Before anyone reads that as a saving, two corridors now use extra vehicles at peak time, so the subsidy per journey actually rose slightly." },
            { speaker: "Councillor", text: "And your original cost estimate was eighteen million, wasn't it?" },
            { speaker: "Malik", text: "Corrected figure: twenty-two million, including the signalling work we had previously classified as maintenance. The eighteen-million slide was an error in the handout, not a lower final outturn." },
            { speaker: "Councillor", text: "Which result would persuade you to extend the scheme?" },
            { speaker: "Malik", text: "Sustained punctuality without worsening the peak-time subsidy, plus evidence of accessibility gains for disabled passengers. We do not yet have a full baseline for the latter." },
            { speaker: "Councillor", text: "Then a year-two extension with a stronger accessibility audit?" },
            { speaker: "Malik", text: "Yes, on those corridors showing a punctuality gain above five points. I would not extend all twelve merely because the average looks good." },
          ],
        },
        {
          type: "tip",
          title: "Keep a numerical frame",
          text: "For every figure, write its unit and comparison: boardings per weekday, buses within three minutes, pounds per completed journey. Then note whether it is observed, sampled or projected. When a speaker corrects a figure, mark the old value as superseded and record the reason. Averages across twelve corridors can hide weak performance on the busiest routes.",
        },
        {
          type: "exercise",
          title: "Reconstruct the data frame",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "What was the approximate percentage increase in weekday boardings?",
              ["Four percent", "Ten percent", "Seventy-one percent"],
              1,
              "Boardings rose from 41,000 to 45,000, an increase of about ten percent.",
            ),
            c(
              "How is punctuality defined?",
              ["Buses leaving the depot early", "Buses arriving within three minutes of schedule", "Passengers boarding within three minutes"],
              1,
              "Malik explicitly defines the measure as arrival within three minutes of schedule.",
            ),
            c(
              "Why can't all new boardings be counted as replaced car journeys?",
              ["The survey sampled only 1,600 passengers", "Some passengers previously walked or cycled", "The buses run on only four corridors"],
              0,
              "Malik explains that previous modes include walking and cycling, so boardings are not a direct car-trip count.",
            ),
            c(
              "Why did the corrected project cost rise to £22 million?",
              ["Higher passenger fares", "Extra passengers", "Signalling work was reclassified and included"],
              2,
              "The earlier £18 million excluded signalling work that had been classified as maintenance.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Report data with its limits",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "What is the difference between operating cost per journey and subsidy per journey in the briefing?",
              "Operating cost per journey fell, but peak-time vehicle use meant subsidy per journey rose slightly.",
              "A falling unit cost does not guarantee a falling public subsidy.",
            ),
            p(
              "Why are the four busiest corridors important to the interpretation?",
              "Their punctuality gain was only three points, much lower than the combined average, so the headline masks uneven performance.",
              "Compare three points with the overall nine-point increase.",
            ),
            p(
              "Write a one-sentence recommendation that includes a threshold and an evidence gap.",
              "Model answer: Extend year two only on corridors gaining more than five punctuality points and collect a proper accessibility baseline before final approval.",
              "Retain Malik's numerical condition and missing evidence.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does Malik distinguish counts from percentages?",
          ["Counts are always projections", "Boardings and punctuality use different measures and units", "Percentage changes are impossible to interpret"],
          1,
          "He wants listeners to keep the number of boardings separate from the proportion of buses arriving on time.",
        ),
        q(
          2,
          "What is uncertain about the five-million-car-journey figure?",
          ["It measures all bus journeys", "It is an observed annual count", "It is a projection based on a passenger sample"],
          0,
            "Malik describes it as a projection and explains that the sample does not justify counting every boarding as a former car trip.",
        ),
        q(
          3,
          "What does Malik's correction of the cost figure demonstrate?",
          ["He is presenting a lower final outturn", "He is transparently replacing an erroneous handout figure", "He forgot to include passenger revenue"],
          1,
            "He identifies £22 million as the corrected total and explains why £18 million appeared in the handout.",
        ),
        q(
          4,
          "Why does Malik resist extending all twelve corridors?",
          ["He believes averages can conceal weak results on key routes", "He wants to cancel every bus-priority scheme", "He thinks punctuality cannot be measured"],
          2,
            "He proposes a corridor-level threshold because the combined average hides limited gains on the busiest routes.",
        ),
      ],
    },
    {
      slug: "meetings-with-multiple-agendas",
      title: "Meetings with multiple agendas",
      summary:
        "Follow a museum project meeting where budget, sponsorship and accessibility decisions overlap and some items remain unresolved.",
      objective:
        "Track ownership, decisions and deferrals across competing agendas without mistaking discussion for agreement.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Before you listen: a meeting is not a transcript",
          paragraphs: [
            "A museum team is preparing a temporary exhibition. The opening date is fixed, but the budget, sponsor conditions and accessibility plan pull the discussion in different directions.",
            "Listen for decision verbs—approve, postpone, assign, reserve—and for phrases that postpone action. A suggestion repeated by several people may still lack an owner or a final agreement.",
          ],
        },
        {
          type: "transcript",
          title: "Project meeting: the River Memory exhibition",
          context:
            "Project lead Sana chairs. Leo handles finance, Aisha handles access, and Chris represents the sponsor. The meeting covers three agenda items and ends with a read-back.",
          lines: [
            { speaker: "Sana", text: "Two decisions today: whether we accept the sponsor's branding terms, and whether the audio guide stays in scope. Opening on the fourteenth is fixed." },
            { speaker: "Chris", text: "We can increase the grant from eighty to ninety thousand if our logo appears on the entrance banner and the opening press release." },
            { speaker: "Leo", text: "That closes most of the gap, but not the contingency. I'd accept only if no display object is obscured. The banner position can be negotiated." },
            { speaker: "Aisha", text: "Before branding, the audio guide is essential for blind and low-vision visitors. I need transcripts, tactile markers and headsets, not a QR code as the only alternative." },
            { speaker: "Sana", text: "I'll separate those. Chris, are entrance branding and press branding both conditions?" },
            { speaker: "Chris", text: "Both. The larger grant is conditional, not a donation with optional thanks." },
            { speaker: "Leo", text: "Then I'll cost the revised access package by Thursday. Keep the audio guide; if it breaks the budget, we reduce the reception flowers before we cut access." },
            { speaker: "Aisha", text: "Agreed in principle. I also need a second accessible entrance for the evening opening, but facilities haven't confirmed staffing yet." },
            { speaker: "Sana", text: "That is not approved today. Aisha, raise it with facilities tomorrow; we decide once we know the cost and staffing. Chris, please send the branding clause in writing. Read-back: audio guide retained, revised costs due Thursday, branding conditional on an acceptable position, second entrance unresolved. Have I missed anything?" },
            { speaker: "Leo", text: "Only that accepting the grant still needs formal approval. Today's agreement is a recommendation to the director." },
          ],
        },
        {
          type: "tip",
          title: "Maintain a decisions-and-owners grid",
          text: "For each agenda item, record status, owner and deadline. Distinguish “agreed”, “agreed in principle”, “recommended” and “deferred”. Listen for a final read-back, then check whether anyone qualifies it. This prevents a productive discussion from being remembered as an approval that was never granted.",
        },
        {
          type: "exercise",
          title: "Identify what was actually decided",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "What is fixed before the meeting begins?",
              ["The opening date", "The final grant", "The banner design"],
              0,
              "Sana says the opening on the fourteenth is fixed.",
            ),
            c(
              "What does Chris require for the higher grant?",
              ["A donation without publicity", "Logo placement on the entrance banner and opening press release", "Removal of the audio guide"],
              1,
              "Chris makes both forms of branding conditions of the £90,000 grant.",
            ),
            c(
              "Why does Aisha reject a QR code as the only alternative?",
              ["Visitors cannot afford phones", "It would take too long to print", "It would not provide equivalent access for blind and low-vision visitors"],
              2,
              "She requests transcripts, tactile markers and headsets to serve visitors with visual impairments.",
            ),
            c(
              "What is Leo's final clarification?",
              ["The grant has already been formally approved", "The audio guide is cancelled", "The meeting's agreement is only a recommendation to the director"],
              2,
              "Leo says formal approval is still required and the current agreement is a recommendation.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Produce an action log",
          instructions:
            "Answer from memory, then check the model responses.",
          items: [
            p(
              "Which access request remains unresolved, and who follows it up?",
              "A second accessible entrance for the evening opening; Aisha will contact facilities and establish cost and staffing.",
              "Sana explicitly defers the decision.",
            ),
            p(
              "What priority does Leo set if the audio guide exceeds the budget?",
              "He proposes cutting reception flowers before reducing access provision.",
              "He treats the guide as retained rather than optional.",
            ),
            p(
              "Create an action log with two owners, two deadlines and one deferred decision.",
              "Model answer: Leo—cost revised access package by Thursday. Aisha—contact facilities tomorrow; decision deferred on second entrance. Chris—send written branding clause.",
              "Use status labels and keep the formal-approval qualification.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does Sana ask whether both branding placements are conditions?",
          ["She wants to know the negotiable scope of Chris's offer", "She has already rejected the grant", "She is asking Chris to design the banner"],
          0,
          "The distinction determines whether the extra grant can be accepted without both obligations.",
        ),
        q(
          2,
          "What does Aisha mean by “not a QR code as the only alternative”?",
          ["She opposes every digital tool", "She requires access options that do not depend on visual scanning", "She wants visitors to buy their own headsets"],
          1,
          "Her request for tactile, audio and text alternatives addresses equivalent access for people with visual impairments.",
        ),
        q(
          3,
          "How does Leo balance the budget and access requirement?",
          ["He treats access as a priority and proposes cutting a less essential item first", "He suggests dropping the guide if costs rise", "He refuses to cost the revised package"],
          2,
          "He retains the audio guide and names reception flowers as an item to cut before access.",
        ),
        q(
          4,
          "Which statement best reflects the meeting's legal and administrative status?",
          ["Every decision is final", "Only the date has any practical effect", "Several recommendations were made, but final approval remains elsewhere"],
          2,
          "Leo's read-back qualification makes clear that accepting the grant still requires the director's formal approval.",
        ),
      ],
    },
  ],
};
