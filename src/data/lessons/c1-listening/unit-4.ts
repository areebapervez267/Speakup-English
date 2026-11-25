import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1ListeningUnit4: LessonUnit = {
  title: "Independent listening",
  description:
    "Synthesise notes, interrogate spoken sources, design a sustainable routine and demonstrate critical comprehension.",
  lessons: [
    {
      slug: "note-taking-for-synthesis",
      title: "Note-taking for synthesis",
      summary:
        "Hear a student compare a laboratory lecture and a teacher's account of spaced practice, then organise notes for synthesis.",
      objective:
        "Combine information from multiple spoken sources while preserving differences in method, scope and certainty.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Before you listen: notes that connect",
          paragraphs: [
            "A student has listened to two short talks: a cognitive scientist's explanation of retrieval practice and a teacher's description of using it with a class. The student is preparing a seminar summary.",
            "A list of separate facts will not be enough. You need labels for source, method and conclusion, plus a space for your own comparison. Notice where the teacher's experience confirms, qualifies or simply illustrates the scientific claim.",
          ],
        },
        {
          type: "transcript",
          title: "Seminar preparation: comparing two sources",
          context:
            "Student Emiko meets tutor Dr Patel to discuss notes from two talks on spaced retrieval practice. The tutor probes the limits of her summary.",
          lines: [
            { speaker: "Dr Patel", text: "You have written that testing improves memory. What exactly do your two sources support?" },
            { speaker: "Emiko", text: "The first speaker described a lab where 84 adults answered questions after either a short delay or a week. A week later, the delayed group recalled about eighteen percent more, although they felt less confident at first." },
            { speaker: "Dr Patel", text: "And what did the second source contribute? Keep her evidence type separate from the laboratory result." },
            { speaker: "Emiko", text: "A secondary-school teacher used five-minute quizzes at the start of lessons. She said pupils argued less about revising because they could see the gaps. She was reporting her experience, not a controlled trial." },
            { speaker: "Emiko", text: "I think we can safely join the idea that retrieval may strengthen later recall with the observation that short quizzes make gaps visible. The classroom example illustrates a mechanism, but it doesn't prove the same size of benefit." },
            { speaker: "Dr Patel", text: "Any caveat from the laboratory speaker?" },
            { speaker: "Emiko", text: "The delay worked for factual recall, but she did not show that it improved original analysis. Also, the adults knew they were in a study, so motivation may have differed from a busy classroom." },
            { speaker: "Dr Patel", text: "Then use a comparison column, not a blended claim. Put study design beside classroom observation, and separate measured outcomes from reported confidence or motivation." },
            { speaker: "Emiko", text: "So my synthesis can say both sources support testing after a delay, while only the lab quantifies the effect and only the teacher describes implementation problems?" },
            { speaker: "Dr Patel", text: "Precisely. End with the shared question neither source answers fully: whether the benefit persists across an entire school year." },
          ],
        },
        {
          type: "tip",
          title: "Use a source-comparison matrix",
          text: "Give each source a code and record method, participants, outcome and limitation in separate columns. Then write a linking sentence using “both”, “whereas”, “suggests” or “illustrates”. Preserve modal strength: “measured” is not “proved”, and an illustrative case is not a representative effect. Leave a final row for what neither source establishes.",
        },
        {
          type: "exercise",
          title: "Check the synthesis boundaries",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "How many adults participated in the laboratory study?",
              ["18", "84", "540"],
              1,
              "Emiko says the laboratory study involved 84 adults.",
            ),
            c(
              "What did delayed retrieval improve in the laboratory result?",
              ["Original analysis", "Factual recall", "Classroom motivation"],
              0,
              "The reported eighteen-percent difference concerned later recall, not analytical creativity.",
            ),
            c(
              "What benefit did the teacher report from short quizzes?",
              ["Pupils could see their revision gaps", "Every pupil achieved a higher grade", "The school shortened its timetable"],
              1,
              "The teacher said pupils argued less about revision because the quizzes made gaps visible.",
            ),
            c(
              "Why should the classroom example not be given the laboratory's numerical effect?",
              ["The teacher refused to report results", "The classroom example was qualitative experience, not a controlled comparison", "The school used a different subject"],
              2,
              "Emiko notes that the teacher's account illustrates implementation rather than measuring a controlled effect size.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build comparison notes",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "What feeling initially conflicted with better recall in the laboratory?",
              "Participants felt less confident at first despite recalling more later.",
              "Immediate confidence and later performance did not match.",
            ),
            p(
              "Why might the adult laboratory participants differ from busy pupils?",
              "They knew they were in a study, which may have affected motivation differently from a real classroom.",
              "Emiko identifies this as a limitation, not a proven defect.",
            ),
            p(
              "Write a three-part comparison note: shared claim, different evidence and unanswered question.",
              "Model answer: Shared claim: delayed retrieval can support later recall. Different evidence: the lab quantifies factual recall; the teacher illustrates visible revision gaps. Unanswered: whether benefits persist across a full school year.",
              "Keep each evidence type attached to its source.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What makes Emiko's summary better than “testing improves memory”?",
          ["It specifies source types and limits the measured outcome", "It replaces evidence with personal enthusiasm", "It treats confidence as the only measure of learning"],
          0,
          "She distinguishes controlled laboratory recall from a teacher's qualitative experience and identifies what was actually measured.",
        ),
        q(
          2,
          "What does “illustrates a mechanism” mean here?",
          ["The classroom proves the exact laboratory effect", "The quizzes provide a concrete example of making knowledge gaps visible", "The teacher conducted a laboratory experiment"],
          1,
          "The classroom account shows how retrieval might reveal gaps without establishing the same quantitative result.",
        ),
        q(
          3,
          "Why does Emiko mention participants knowing they were in a study?",
          ["To suggest that laboratory motivation may limit classroom transfer", "To prove that all adults ignored the task", "To show that delayed testing is unethical"],
          0,
          "She raises a possible contextual difference in motivation, appropriately treating it as a limitation rather than a certainty.",
        ),
        q(
          4,
          "Which final note would best preserve a critical synthesis?",
          ["The teacher's account is more detailed, so it is more reliable", "The laboratory proves every classroom benefit", "Neither source establishes how durable the effects are over a full school year"],
          2,
          "The tutor asks for a gap that remains after both accounts, avoiding a forced single conclusion.",
        ),
      ],
    },
    {
      slug: "listening-critically-to-sources",
      title: "Listening critically to sources",
      summary:
        "Interrogate a viral chart about remote workers' happiness and trace how sampling and wording distort its headline.",
      objective:
        "Evaluate a spoken source by checking provenance, sample selection, measure definitions and the gap between data and headline.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "Before you listen: a headline is not a finding",
          paragraphs: [
            "A viral chart claims that remote workers are “forty percent happier”. A data journalist is tracing the claim back to the original survey and its wording.",
            "Listen for chain-of-custody questions: who collected the data, who responded, what was measured, and who wrote the headline. A number can be accurately transcribed and still support a misleading conclusion.",
          ],
        },
        {
          type: "transcript",
          title: "Fact-check: the forty-percent-happier chart",
          context:
            "Data editor Soren Walsh appears on a media-review podcast with host Amira Bell. The chart he examines was shared widely on social media.",
          lines: [
            { speaker: "Amira", text: "This chart says remote workers are forty percent happier. It has been shared almost two million times. Where does the number come from?" },
            { speaker: "Soren", text: "A self-selected online survey of 2,300 people. Sixty-one percent of those who switched to remote work reported higher life satisfaction. That is a subgroup's answer to one question, not a forty-percent increase in happiness." },
            { speaker: "Amira", text: "But isn't higher life satisfaction essentially happiness?" },
            { speaker: "Soren", text: "It overlaps, but the measure is broader. People may report greater control over their schedule, then call that life satisfaction. The headline silently swaps the original construct for a stronger emotional claim." },
            { speaker: "Amira", text: "There is also a bar chart with no zero baseline. Is that a problem?" },
            { speaker: "Soren", text: "Here, yes. The scale starts at fifty, which makes a nine-point difference look enormous. A truncated axis is not automatically dishonest, but it demands a prominent warning and the actual values. A stronger study would use a representative sample, a before-and-after measure and a comparison group that did not switch; even then we would report an association until selection effects were addressed." },
            { speaker: "Amira", text: "And the platform that published the chart?" },
            { speaker: "Soren", text: "Sells remote-work software and sponsored the survey. That does not make every response false, but it is a reason to examine the question wording and whether unfavourable results were released." },
            { speaker: "Amira", text: "So the responsible conclusion is much narrower." },
            { speaker: "Soren", text: "Yes: many respondents in this self-selected survey said their life satisfaction improved. That is worth reporting, provided we do not turn it into a population law." },
          ],
        },
        {
          type: "tip",
          title: "Audit the evidence chain",
          text: "Check collector, sample, question, measure and claim in that order. Then compare the headline with the narrowest accurate statement the evidence permits. Treat sponsorship as context to investigate, not automatic proof of fabrication. Visual emphasis matters too: a truncated axis can exaggerate a difference even when the printed values are correct.",
        },
        {
          type: "exercise",
          title: "Audit the viral claim",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "How was the survey sample recruited?",
              ["Random household visits", "Self-selection through an online survey", "Every employee in one company"],
              1,
              "Soren describes a self-selected online survey, limiting its representativeness.",
            ),
            c(
              "What percentage of remote switchers reported higher life satisfaction?",
              ["Nine percent", "Forty percent", "Sixty-one percent"],
              2,
              "The original subgroup result was sixty-one percent reporting higher life satisfaction.",
            ),
            c(
              "Why is “life satisfaction” not simply “happiness”?",
              ["It is a broader measure that may include schedule control", "It measures only income", "It is impossible to ask people about it"],
              0,
              "Soren explains that the broader measure can reflect control over working arrangements rather than an emotional state alone.",
            ),
            c(
              "Where does the chart's axis begin?",
              ["Zero", "Fifty", "One hundred"],
              1,
              "The bar chart starts at fifty, visually exaggerating the nine-point difference.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a calibrated verdict",
          instructions:
            "Answer from memory, then check the model responses.",
          items: [
            p(
              "Why does the platform's sponsorship matter without proving the data false?",
              "It creates a potential interest in the question wording and release of results, so independent scrutiny is needed; it does not invalidate every answer by itself.",
              "Separate a reason for scrutiny from a claim of fabrication.",
            ),
            p(
              "What three features would make the evidence stronger?",
              "A representative sample, a before-and-after measure and a comparison group that did not switch to remote work.",
              "Soren lists all three before discussing selection effects.",
            ),
            p(
              "Rewrite “remote workers are forty percent happier” as a responsible headline.",
              "Model answer: “Many self-selected survey respondents reported higher life satisfaction after going remote.”",
              "Retain the source limitation and the original measure.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the clearest error in the transformation from survey to headline?",
          ["The sample size was hidden", "A percentage reporting improvement was converted into a percentage increase in a different construct", "The survey had no respondents"],
          1,
          "Sixty-one percent reporting higher satisfaction is not equivalent to a forty-percent rise in happiness.",
        ),
        q(
          2,
          "Why does Soren not automatically condemn the truncated axis?",
          ["He believes every chart should omit zero", "He thinks axes never affect interpretation", "He accepts that truncation can be legitimate when clearly disclosed and accompanied by actual values"],
          2,
          "His criticism concerns the misleading effect and missing warning, not a blanket rule against truncated axes.",
        ),
        q(
          3,
          "What is Soren's attitude towards the platform's sponsorship?",
          ["It proves deliberate fabrication", "It is irrelevant to all interpretation", "It justifies closer examination without deciding the issue in advance"],
          0,
          "He calls sponsorship a reason to inspect wording and publication choices while denying that it makes every response false.",
        ),
        q(
          4,
          "Which conclusion is proportionate to the evidence described?",
          ["Remote work causes everyone to be happier", "Some self-selected respondents reported greater life satisfaction, but broader causation remains unestablished", "The survey proves remote work has no value"],
          1,
          "The responsible statement keeps both the reported improvement and the limits of sample and design.",
        ),
      ],
    },
    {
      slug: "building-a-personal-listening-routine",
      title: "Building a personal listening routine",
      summary:
        "Hear a learner and coach design a four-week listening plan around an eighteen-minute commute and measurable weekly goals.",
      objective:
        "Build a realistic listening routine that balances challenge, replay, vocabulary capture and independent progress checks.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Before you listen: make practice sustainable",
          paragraphs: [
            "An advanced learner wants to improve further but has only an eighteen-minute commute and occasional evening sessions. A listening coach is helping her turn that uneven schedule into a repeatable plan.",
            "Notice how the plan changes when the learner describes her actual habits. Effective goals specify material, duration, difficulty and evidence of progress; they do not depend on finding a perfect silent hour.",
          ],
        },
        {
          type: "transcript",
          title: "Coaching session: a four-week listening plan",
          context:
            "Coach Rafael speaks with learner Mara. Their plan is specific enough to use on public transport and in a quiet room.",
          lines: [
            { speaker: "Rafael", text: "You said you want effortless listening, but your timetable sounds fairly crowded. What listening can you genuinely protect each week?" },
            { speaker: "Mara", text: "The commute is eighteen minutes, but the signal drops near the river. I usually put on a long interview and give up when I miss a section." },
            { speaker: "Rafael", text: "Then download the audio and choose a six-to-eight-minute segment, not the whole episode. Aim for material you understand at roughly eighty to ninety-five percent without a transcript." },
            { speaker: "Rafael", text: "If a clip falls below eighty percent, don't abandon it. Replay one difficult minute once, check a short transcript, then return to full speed. Abandoning every hard clip gives you no stretch; forcing every hard clip gives you exhaustion." },
            { speaker: "Mara", text: "How much should I write down?" },
            { speaker: "Rafael", text: "Capture three useful chunks and one missing connection. A word list alone will not show whether you followed the argument. Every Friday, record a four-minute gist without looking at your notes." },
            { speaker: "Rafael", text: "Use shadowing for two minutes after comprehension, not instead of it. Even with a strong accent, copy the rhythm of the last clear sentence, then say the gist in your own words." },
            { speaker: "Mara", text: "And if a podcast has three speakers?" },
            { speaker: "Rafael", text: "Alternate your attention: Monday follow the host's questions, Wednesday one guest, Friday the whole exchange. That trains flexibility without demanding perfect attention to every voice at once. For four weeks, do three twelve-minute sessions, a Friday gist and a weekly review of what blocked you. If the routine fails twice, shorten it before adding more material." },
            { speaker: "Mara", text: "So success is consistency plus slightly harder material, not finishing every episode." },
          ],
        },
        {
          type: "tip",
          title: "Plan a challenge band",
          text: "Choose audio you can mostly understand without support, then use brief, targeted help on the remaining gap. Keep three kinds of evidence: a comprehension estimate, captured language and an unaided gist. Review the blockage—accent, vocabulary, speed or missing context—before changing the material. A routine should adapt downward when life becomes crowded, not collapse completely.",
        },
        {
          type: "exercise",
          title: "Test the plan against the schedule",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "How long is Mara's commute?",
              ["Six minutes", "Eighteen minutes", "Four minutes"],
              1,
              "Mara says the commute is eighteen minutes, although the signal drops near the river.",
            ),
            c(
              "What comprehension range does Rafael initially recommend?",
              ["Fifty to sixty percent", "Exactly one hundred percent", "Eighty to ninety-five percent"],
              2,
              "He recommends a mostly comprehensible challenge band of roughly eighty to ninety-five percent.",
            ),
            c(
              "How many language chunks should Mara capture in a session?",
              ["Three", "Ten", "Thirty"],
              0,
              "Rafael specifies three useful chunks and one missing connection.",
            ),
            c(
              "What happens if the routine fails twice?",
              ["She adds a fourth weekly session", "She changes to a longer episode", "She shortens the routine before adding more material"],
              2,
              "The coach says to reduce the demand rather than increase it after repeated failure.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Design your own listening loop",
          instructions:
            "Answer from memory, then check the model responses.",
          items: [
            p(
              "How should Mara respond when a clip falls below eighty-percent comprehension?",
              "Replay one difficult minute once, consult a short transcript, then return to natural speed rather than abandoning it.",
              "The response is brief support followed by a return to the challenge.",
            ),
            p(
              "Why does Rafael place shadowing after comprehension?",
              "Shadowing should train rhythm after meaning is understood, not become a substitute for understanding.",
              "He limits it to the final two minutes.",
            ),
            p(
              "Write a three-session plan for your own week, including a progress check.",
              "Model answer: Monday, twelve minutes of an interview while following the host's questions. Wednesday, twelve minutes with one guest as the focus. Friday, a four-minute unaided gist plus review of one missing connection.",
              "Include material, duration, focus and evidence of progress.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does Rafael recommend downloading the audio?",
          ["To prevent signal problems from interrupting the planned segment", "To eliminate the need for listening", "To make every speaker sound slower"],
          0,
          "Downloading addresses Mara's unreliable commute signal and protects a short, repeatable session.",
        ),
        q(
          2,
          "What is the purpose of recording “one missing connection”?",
          ["To prove the learner understood nothing", "To record the audio equipment used", "To diagnose a breakdown in the argument rather than merely collect vocabulary"],
          2,
          "It directs attention to how ideas connect, not just to isolated unknown words.",
        ),
        q(
          3,
          "Why does Rafael assign different attention targets to different days?",
          ["He wants Mara to ignore the whole exchange", "He is training flexible attention across speakers without demanding total simultaneous focus", "He believes one speaker is always more important"],
          1,
          "Alternating a whole exchange, the host and one guest builds flexibility gradually.",
        ),
        q(
          4,
          "Which definition of success best fits the coach's approach?",
          ["Finishing every long episode", "Understanding at exactly one hundred percent on first hearing", "Maintaining a sustainable routine and increasing challenge with evidence of progress"],
          2,
          "The coach prioritises consistency, targeted stretch and review over episode completion or flawless comprehension.",
        ),
      ],
    },
    {
      slug: "advanced-listening-review",
      title: "Advanced listening review",
      summary:
        "Synthesise a journalist's three-source briefing on the night-time economy and distinguish reported findings, conflicting effects and missing evidence.",
      objective:
        "Demonstrate integrated listening by summarising sources, comparing their claims and proposing a precise follow-up question.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Before you listen: an editorial debrief",
          paragraphs: [
            "A journalist has interviewed an economist, a night-shift nurse and a market trader about extending city-centre opening hours. She now briefs her editor before a live segment.",
            "Your task is to retain the shape of the debate, not every quotation. Listen for shared facts, different effects on different groups, and the point where the journalist admits that the available data cannot answer the editor's question.",
          ],
        },
        {
          type: "transcript",
          title: "Editorial debrief: who benefits after dark?",
          context:
            "Reporter Talia gives editor Graham a concise briefing based on three interviews and a council dashboard. The exchange tests whether she can separate evidence from her own interpretation.",
          lines: [
            { speaker: "Talia", text: "Since the trial began, footfall after eight has risen sixteen percent on participating streets. Bus boardings rose too, although the dashboard does not separate visitors from ordinary late commuters." },
            { speaker: "Graham", text: "That sounds like an economic success story." },
            { speaker: "Talia", text: "The economist agrees revenue improved, but says we cannot attribute it all to later opening: two new residential buildings opened in the same period, and city spending was already rising. The nurse supports later transport, but her unit recorded more alcohol-related admissions on weekends, in a comparison of only three months against the same period last year." },
            { speaker: "Graham", text: "So residents are happier and hospitals are busier?" },
            { speaker: "Talia", text: "Not established. We have no representative resident survey. What we do have is a market trader who says quieter mornings now cost him trade, and six venue owners who say late staffing is unsustainable." },
            { speaker: "Graham", text: "Whose account should lead the broadcast?" },
            { speaker: "Talia", text: "I'd lead with the shared fact that the streets are busier, then show the distribution of costs. The nurse and trader are not a vote against the policy; they reveal groups the footfall figure leaves out." },
            { speaker: "Talia", text: "My unanswered question is whether the same streets gained more than comparable streets without extended hours. Without that control, I can report coincidence and local experience, not a clean causal effect." },
            { speaker: "Graham", text: "Then frame it as a promising trial with uneven evidence, not a victory. Keep the missing comparison explicit." },
            { speaker: "Talia", text: "Agreed. I'll show the rise, name the limitations and ask the council for street-level comparisons covering a full year." },
          ],
        },
        {
          type: "tip",
          title: "Synthesise in four moves",
          text: "Start with a shared observation, add the strongest competing interpretations, identify who bears different costs, and finish with missing evidence. Keep source status visible: dashboard, interview and comparison period. Do not average a nurse's experience and a trader's experience into public opinion; they are evidence of particular consequences, not a representative sample.",
        },
        {
          type: "exercise",
          title: "Test the editorial synthesis",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "By how much did footfall after eight rise?",
              ["Six percent", "Sixteen percent", "Sixty percent"],
              1,
              "Talia reports a sixteen-percent increase on participating streets.",
            ),
            c(
              "Why does the bus-boarding figure need caution?",
              ["It includes ordinary late commuters as well as possible visitors", "It covers only one resident", "It measures venue profits"],
              0,
              "The dashboard does not separate visitors from regular late commuters.",
            ),
            c(
              "What comparison period underlies the hospital finding?",
              ["One week against one year", "Three months against the same three months last year", "Three years against six months"],
              1,
              "Talia specifies the limited three-month, year-on-year comparison.",
            ),
            c(
              "What evidence does Talia say is missing entirely?",
              ["A count of venues", "A statement from the nurse", "A representative survey of residents"],
              2,
              "She explicitly says there is no representative resident survey.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Deliver a balanced synthesis",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "Give two reasons Talia cannot attribute all economic improvement to later opening.",
              "New residential buildings opened in the same period, and overall city spending was already rising before the trial.",
              "Both factors create plausible alternative explanations.",
            ),
            p(
              "Why does Talia reject simply averaging the nurse's and trader's accounts?",
              "They reveal specific impacts on different groups rather than representing the views of the whole public.",
              "Individual accounts identify consequences but cannot measure prevalence.",
            ),
            p(
              "Write a 60-second briefing outline with fact, interpretation, consequence and next evidence request.",
              "Model answer: Fact: footfall rose sixteen percent. Interpretation: some economic benefit is plausible but not attributable yet. Consequence: nurses and traders report costs hidden by the headline. Next: compare similar streets over a full year and survey residents.",
              "Use four labels and retain at least one limitation.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What does Graham's phrase “victory” risk doing?",
          ["Reporting a measured causal result", "Turning a promising but confounded trend into a settled policy success", "Ignoring the council dashboard"],
          1,
          "Talia's caveats show that the data do not isolate the trial's effect, so “victory” would overstate the evidence.",
        ),
        q(
          2,
          "Why does Talia resist choosing only the nurse's account to lead?",
          ["The nurse is not a credible witness", "Hospital data are always secret", "One affected group's experience cannot represent the whole distribution of effects"],
          2,
          "She wants the broadcast to show multiple costs without allowing one interview to determine public opinion.",
        ),
        q(
          3,
          "What is the strongest missing comparison?",
          ["A comparison with similar streets that did not extend hours", "A comparison of two individual bus journeys", "A count of all cafés in the country"],
          0,
          "A control group would help distinguish the policy's effect from wider changes in the city.",
        ),
        q(
          4,
          "Which listening behaviour does Talia model throughout the debrief?",
          ["Replacing complex evidence with a simple verdict", "Prioritising vivid quotations over data", "Correcting a tempting inference while retaining what the sources genuinely support"],
          2,
          "She accepts the observed rise but checks causation, representativeness and missing controls before recommending a frame.",
        ),
      ],
    },
  ],
};
