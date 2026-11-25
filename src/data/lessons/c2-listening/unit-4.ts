import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2ListeningUnit4: LessonUnit = {
  title: "Critical comprehension",
  description:
    "Evaluate evidence, detect spin, triangulate spoken sources and complete an independent critical listening project.",
  lessons: [
    {
      slug: "evaluating-spoken-evidence",
      title: "Evaluating spoken evidence",
      summary:
        "Cross-examine a headline about screen time and sleep as a researcher explains sampling, attrition, confounding and statistical significance.",
      objective:
        "Evaluate spoken research claims by separating association from causation and interpreting design limitations and p-values accurately.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Before you listen: a confident result can still be limited",
          paragraphs: [
            "A radio interviewer is questioning a researcher about a two-year study of adolescents, screen use and sleep. The headline uses the language of cause, while the researcher describes an observational design.",
            "Listen for how participants were recruited, how many were lost to follow-up, what was self-reported and what alternative explanations remain. Statistical significance is one part of the evidence; it is not a certificate of causation.",
          ],
        },
        {
          type: "transcript",
          title: "Evidence check: does screen time cause lost sleep?",
          context:
            "Host Maya questions Dr Noor Finch about a fictional study of 6,000 fourteen-year-olds. The exchange is brisk and technically precise.",
          lines: [
            { speaker: "Maya", text: "Your headline says screen time causes young people to lose eleven minutes of sleep a night. That is a strong causal claim for a two-year study." },
            { speaker: "Dr Finch", text: "It is an observational study, so the accurate claim is an association. We followed 6,000 fourteen-year-olds and found that heavier reported recreational screen use coincided with shorter sleep." },
            { speaker: "Maya", text: "Were the 6,000 representative?" },
            { speaker: "Dr Finch", text: "They were recruited through forty schools, but 38 percent of the original sample was lost to follow-up. Weighting helps for known differences; it cannot guarantee that those who left were similar in sleep or screen habits. Screen use was mainly self-reported at roughly four hours a day. A subsample of 400 wore devices for one week, supporting the broad ranking of use but not validating two years of daily estimates." },
            { speaker: "Maya", text: "Could anxiety drive both heavier use and poorer sleep? Could poor sleep also lead to more use?" },
            { speaker: "Dr Finch", text: "Yes to both possibilities. We adjusted for measured anxiety and parental rules, but unmeasured factors may remain, and reverse causation is plausible." },
            { speaker: "Maya", text: "Your p-value was nought point nought three. Doesn't that mean there is a 97-percent chance the effect is real?" },
            { speaker: "Dr Finch", text: "No. Under the null model and its assumptions, a result at least this extreme would occur about three percent of the time. It does not give the probability that the hypothesis is true, nor remove bias." },
            { speaker: "Maya", text: "So why publish the finding at all?" },
            { speaker: "Dr Finch", text: "Because a sizeable, consistent association matters and supports testing interventions. The responsible conclusion is that reducing late recreational use may help some adolescents, but a trial is needed to establish causation." },
          ],
        },
        {
          type: "tip",
          title: "Audit design before statistics",
          text: "Ask five questions in order: design, sample, measurement, alternative explanations and uncertainty. Keep “associated with” distinct from “caused”. Attrition can bias results even in a large final sample, and a p-value does not measure effect size or repair bias. A strong critical summary reports both the reason the finding matters and the reason causal language remains too strong.",
        },
        {
          type: "exercise",
          title: "Interrogate the study",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "How many participants were lost to follow-up?",
              ["Three percent", "Thirty-eight percent", "Forty percent of the final sample"],
              1,
              "Dr Finch says 38 percent of the original sample was lost.",
            ),
            c(
              "What did the 400-device subsample establish?",
              ["Exact screen use for two years", "That self-report was completely unnecessary", "Broad consistency in ranking heavier and lighter users"],
              2,
              "The one-week device sample supported broad ranking but could not validate two years of daily estimates.",
            ),
            c(
              "Which alternative direction does Dr Finch explicitly allow?",
              ["Poor sleep may lead to greater screen use", "Schools may cause all sleep problems", "Devices may measure rainfall"],
              0,
              "She identifies reverse causation: poorer sleep could encourage more screen use.",
            ),
            c(
              "What does a p-value of 0.03 not establish?",
              ["The result was observed", "The probability that the hypothesis is true is 97 percent", "The statistical model includes assumptions"],
              1,
              "A p-value is not the posterior probability that a hypothesis is true and does not remove design bias.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a calibrated research verdict",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "Why does a final sample of 6,000 not settle representativeness?",
              "Large size cannot correct selective loss to follow-up if those who left differed in relevant habits.",
              "Weighting addresses known differences, not unknown differences between stayers and leavers.",
            ),
            p(
              "How can adjusting for anxiety still leave confounding?",
              "Only measured aspects of anxiety are adjusted for, and other unmeasured factors or reverse causation may explain part of the association.",
              "Statistical adjustment is not the same as experimental control.",
            ),
            p(
              "Write a two-sentence verdict that retains the finding but rejects the causal headline.",
              "Model answer: The study found a sizeable association between heavier reported screen use and shorter sleep, but attrition, self-report and possible reverse causation limit causal interpretation. It justifies further intervention trials rather than the claim that screen time definitely causes the measured sleep loss.",
              "Include one strength, one limitation and the appropriate next step.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the main design limitation behind the headline problem?",
          ["The study is a randomised trial", "The study is observational and cannot by itself establish causation", "The study measured no sleep outcomes"],
          1,
          "Dr Finch repeatedly distinguishes observed association from a causal effect.",
        ),
        q(
          2,
          "Why is attrition a concern despite weighting?",
          ["Weighting can address known differences but not unmeasured differences between those who stayed and left", "Attrition always makes every estimate false", "The final sample is too small to describe"],
          0,
          "Selective loss may relate to the very behaviours being studied, leaving residual bias.",
        ),
        q(
          3,
          "What is the correct interpretation of p = 0.03?",
          ["There is a 3-percent probability the hypothesis is true", "The effect is practically important", "Assuming the null model, results at least this extreme would occur about 3 percent of the time"],
          2,
          "The explanation describes a conditional long-run frequency under the null, not the probability of the hypothesis or the size of the effect.",
        ),
        q(
          4,
          "Why does the researcher still support testing interventions?",
          ["A meaningful association can justify action research even when it does not prove cause", "Intervention trials are unnecessary for large samples", "The causal headline has already been verified"],
          0,
          "She separates the practical importance of the signal from the evidential standard needed for causation.",
        ),
      ],
    },
    {
      slug: "detecting-manipulation-and-spin",
      title: "Detecting manipulation and spin",
      summary:
        "Analyse a fictional institutional apology with a former communications adviser, exposing passive agency, unsupported commitments and strategic omissions.",
      objective:
        "Detect manipulation in spoken statements by identifying agency, evasiveness, misleading framing and the difference between promise and evidence.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "Before you listen: an apology can avoid responsibility",
          paragraphs: [
            "A public body has released a statement after processing delays affected thousands of applicants. A communications adviser is reviewing its language with a journalist.",
            "Listen for who performs each action, which tense is used and what evidence accompanies each promise. Spin often works through a technically true sentence that directs attention away from responsibility, harm or a concrete remedy.",
          ],
        },
        {
          type: "transcript",
          title: "Statement analysis: the art of the non-apology",
          context:
            "Journalist Priya quotes from a fictional press release. Former communications adviser Malcolm analyses its wording.",
          lines: [
            { speaker: "Priya", text: "The statement opens: “Mistakes were made and lessons are being learned.” That is the whole apology, apparently." },
            { speaker: "Malcolm", text: "The passive “were made” removes the actor. “Lessons are being learned” supplies activity without naming who must act, what changes or by when. It sounds progressive because the sentence faces forward." },
            { speaker: "Priya", text: "It also calls this “an isolated incident”, although the review lists thirty-seven delayed cases across three offices. Next comes “We remain fully committed to transparency”, with no names and no release date." },
            { speaker: "Malcolm", text: "The singular label does factual work the numbers contradict, compressing a repeated pattern into an exception. And a commitment is not evidence of disclosure: “fully” makes the promise maximal, while the missing date prevents anyone from testing whether it has been kept." },
            { speaker: "Priya", text: "Applicants are told, “If students choose to download the new form, processing will be expedited.” As if delay is their choice." },
            { speaker: "Malcolm", text: "That “if” shifts the burden. The institution should process applications under its own obligations; the wording presents a workaround as a favour and implies non-compliance explains the queue." },
            { speaker: "Priya", text: "The final paragraph warns that “those who reject reasonable reforms invite unnecessary disruption.”" },
            { speaker: "Malcolm", text: "That is a false choice: accept the unnamed reforms or cause chaos. It reframes criticism as a threat and prevents a debate about whether the reforms are actually reasonable." },
            { speaker: "Priya", text: "What would a credible apology need?" },
            { speaker: "Malcolm", text: "Name the act, the responsible office, the harm and the remedy, then give a verifiable date. Not more adjectives—more commitments that listeners can check." },
          ],
        },
        {
          type: "tip",
          title: "Audit agency, tense and evidence",
          text: "Underline the verb in each quoted statement and ask who is the agent. Passive voice can hide responsibility; future-oriented activity can avoid describing a remedy; absolute words can make promises hard to test. Compare labels with quantities, and promises with dates or mechanisms. Spin is easier to detect when you separate what the statement literally says from what it invites the audience to believe.",
        },
        {
          type: "exercise",
          title: "Expose the statement's strategies",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "What does “mistakes were made” conceal?",
              ["The identity of the person or office responsible", "The number of affected applicants", "The existence of the press release"],
              0,
              "The passive construction removes the actor from the sentence.",
            ),
            c(
              "Why is “isolated incident” inconsistent with the review?",
              ["The review found no delays", "The statement has no title", "Thirty-seven cases across three offices indicate a repeated pattern"],
              2,
              "The singular framing conflicts with the documented spread of cases.",
            ),
            c(
              "Why is “fully committed to transparency” difficult to test?",
              ["It provides no named action or release date", "It contains no adjectives", "It admits that documents will never be published"],
              0,
              "A maximal promise without a deadline or disclosure mechanism cannot be checked.",
            ),
            c(
              "How does “if students choose to download” shift responsibility?",
              ["It suggests applicants cause their own delay by declining a workaround", "It guarantees faster processing for everyone", "It identifies the office that caused the backlog"],
              1,
              "The conditional wording presents institutional processing as dependent on applicant behaviour.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rewrite for accountability",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "Why does Malcolm call “lessons are being learned” forward-looking but empty?",
              "It promises future improvement without naming a responsible person, a concrete change or a deadline.",
              "Activity in the present tense can substitute for an actionable remedy.",
            ),
            p(
              "How does the final warning create a false choice?",
              "It labels opposition as disruption, implying that accepting unspecified reforms is the only reasonable alternative.",
              "The statement does not present a testable policy disagreement.",
            ),
            p(
              "Rewrite one sentence from the statement as an accountable commitment.",
              "Model answer: “The processing office will publish the names of the thirty-seven delayed cases and a revised timetable by 30 June, and will report weekly until the backlog is cleared.”",
              "Name the actor, action, evidence and deadline without adding unsupported facts to the original.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does passive voice matter in the opening sentence?",
          ["It removes the actor and therefore weakens accountability", "It identifies every responsible employee", "It gives the exact cause of delay"],
          0,
          "“Mistakes were made” can be literally true while avoiding the question of who made them.",
        ),
        q(
          2,
          "What is the effect of calling thirty-seven cases an “isolated incident”?",
          ["It accurately quantifies the pattern", "It frames repeated failures as an exception", "It offers a clear remedy"],
          1,
            "The singular label minimises a pattern documented across three offices.",
        ),
        q(
          3,
          "Why is an absolute commitment such as “fully” potentially manipulative?",
          ["It provides a precise timetable", "It makes the promise easy to disprove with a date", "It sounds maximally reassuring without supplying verifiable evidence"],
          2,
            "The adjective intensifies the claim, but the absence of action and date makes accountability elusive.",
        ),
        q(
          4,
          "What is Malcolm's standard for a credible apology?",
          ["More emotional language", "A denial followed by optimism", "Specific responsibility, harm, remedy and a checkable date"],
          2,
            "He replaces general adjectives with commitments that an audience can verify.",
        ),
      ],
    },
    {
      slug: "synthesising-from-multiple-sources",
      title: "Synthesising from multiple sources",
      summary:
        "Triangulate a flood report using a hydrologist, a resident, an insurer and council records while resisting a premature climate explanation.",
      objective:
        "Synthesise multiple spoken sources by comparing what each can establish, identifying conflicts and specifying the missing evidence.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Before you listen: sources illuminate different slices",
          paragraphs: [
            "A reporter is preparing a flood story after a severe rainstorm. The available sources range from engineering measurements to a resident's experience and an insurer's incomplete claims count.",
            "Triangulation does not mean treating every account as equal evidence of everything. It means asking what each source is positioned to know, where accounts conflict and which gap needs a further document or comparison.",
          ],
        },
        {
          type: "transcript",
          title: "News conference: building the flood story",
          context:
            "Reporter Talia briefs editor Graham using interviews with hydrologist Dr Moss, resident Mrs Khan and insurer representative Ian Cole, plus council maintenance records.",
          lines: [
            { speaker: "Talia", text: "Forty-six millimetres of rain fell in six hours, and 120 homes reported flooding. Dr Moss says the culvert performed within its design capacity of thirty-five millimetres over that period. Hydraulically, then, it worked as designed; protectively, it did not work for those homes. A system can meet its engineering specification and still be inadequate for present exposure." },
            { speaker: "Talia", text: "Mrs Khan says the flood map at the library still marked her street as low risk. Water reached her knee in twenty minutes, and the phone warning arrived after the road was already closed." },
            { speaker: "Graham", text: "Does her account prove the warning system failed?" },
            { speaker: "Talia", text: "It proves one warning arrived too late for her. We need the alert logs and interviews with other streets before describing a system-wide failure. The map was last updated in 2017." },
            { speaker: "Talia", text: "The insurer confirms 43 claims, but only 28 properties have completed valuations. They cannot yet give a reliable average loss, and a claim is not the same as confirmed structural damage." },
            { speaker: "Graham", text: "And the culvert maintenance?" },
            { speaker: "Talia", text: "Council records show it was cleared three weeks earlier. That weakens a simple neglect explanation, although we are checking whether nearby drains were also cleared." },
            { speaker: "Graham", text: "Can we call this a direct result of climate change?" },
            { speaker: "Talia", text: "Not from one event. The hydrologist says a single storm does not establish an attribution, though it is consistent with a wider regional increase in intense rainfall that requires a longer series." },
            { speaker: "Talia", text: "My synthesis is narrower: the storm exceeded the culvert's design, some warning and mapping information appears inadequate, and the human cost is still being measured. Next evidence: alert logs, comparable streets and completed valuations." },
          ],
        },
        {
          type: "tip",
          title: "Triangulate by evidential role",
          text: "Assign each source a role: physical measurement, lived experience, administrative record or financial count. Then record what it cannot establish alone. A resident can demonstrate one late warning but not system-wide performance; an insurer can count claims but not yet total damage. Use conflicts to generate the next reporting question rather than forcing a single seamless account.",
        },
        {
          type: "exercise",
          title: "Check each source's reach",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "How much rain fell in six hours?",
              ["Thirty-five millimetres", "Forty-six millimetres", "One hundred twenty millimetres"],
              1,
              "Talia reports forty-six millimetres in six hours.",
            ),
            c(
              "What was the culvert designed for?",
              ["Thirty-five millimetres over six hours", "Forty-six millimetres over three hours", "Any rainfall without flooding"],
              0,
              "Dr Moss gives a design threshold of thirty-five millimetres over the same period.",
            ),
            c(
              "When was the flood map last updated?",
              ["Three weeks ago", "Last year", "2017"],
              2,
              "Talia states that the map was last updated in 2017.",
            ),
            c(
              "How many insurer claims have completed valuations?",
              ["Twenty-eight", "Forty-three", "One hundred twenty"],
              0,
              "There are 43 claims, but only 28 completed valuations.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a source-aware synthesis",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "Why can the culvert both work as designed and fail to protect residents?",
              "Its hydraulic performance matched a design threshold below the actual storm, so engineering success and protective adequacy are different judgements.",
              "The distinction separates function from policy adequacy.",
            ),
            p(
              "What can and cannot be concluded from Mrs Khan's late warning?",
              "It establishes that one resident received the warning too late, but system-wide performance requires alert logs and evidence from other streets.",
              "Keep the individual finding without generalising prematurely.",
            ),
            p(
              "Write a three-sentence synthesis naming confirmed facts, a qualified inference and the next evidence needed.",
              "Model answer: The storm exceeded the culvert's design threshold, the map dated from 2017 and 43 claims were filed. These facts suggest gaps in infrastructure capacity, information and measured damage, but they do not establish one cause for the flooding. Alert logs, nearby-drain records and completed valuations are needed next.",
              "Avoid attributing the whole event to neglect or climate from a single case.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does Talia reject “the defences worked” as a complete conclusion?",
          ["The culvert was not maintained", "Engineering performance within design does not mean homes were adequately protected", "The storm was below design capacity"],
          1,
          "A design threshold below actual rainfall can function as specified while leaving severe impacts.",
        ),
        q(
          2,
          "What does the recent culvert clearance weaken?",
          ["The possibility that any claims were filed", "A simple explanation based solely on neglected maintenance", "The need to inspect nearby drains"],
          1,
          "The record makes immediate neglect of that culvert less plausible, while other drains still require checking.",
        ),
        q(
          3,
          "Why is the insurer's 43-claim count not a complete damage total?",
          ["Only 28 valuations are complete, and claims do not all confirm the same kind of damage", "No residents have contacted the insurer", "Claims measure rainfall directly"],
          0,
          "The financial evidence is partial and its categories have not yet been fully assessed.",
        ),
        q(
          4,
          "What is Talia's approach to climate attribution?",
          ["She dismisses climate trends because one storm is insufficient to decide them", "She claims the single storm proves climate causation", "She separates event attribution from longer-term regional evidence"],
          2,
          "She says one event cannot establish attribution while acknowledging a regional trend that needs a longer series.",
        ),
      ],
    },
    {
      slug: "independent-listening-project",
      title: "Independent listening project",
      summary:
        "Complete a guided review of a seven-minute podcast on cultivated meat, checking projections, energy assumptions and the programme's framing.",
      objective:
        "Independently evaluate a demanding spoken source, separate evidence from advocacy and present a concise, source-aware critical response.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Before you listen: the final independent task",
          paragraphs: [
            "A learner has chosen a seven-minute podcast arguing that cultivated meat will transform food production. She is reviewing it with a tutor before recording her own response.",
            "The programme combines an entrepreneur, a food scientist and a chef. Your synthesis must identify what each guest is qualified to establish, which numbers are observed or projected, and where the host's framing outruns the evidence.",
          ],
        },
        {
          type: "transcript",
          title: "Project review: listening beyond the headline",
          context:
            "Learner Inez discusses a fictional 7:30 podcast with tutor Sam. She has already listened twice and created a source map.",
          lines: [
            { speaker: "Inez", text: "The host opens with “the inevitable end of the cattle industry”. I noted that as framing, not evidence: the entrepreneur welcomes it, but the scientist says adoption depends on price, regulation and acceptance. The strongest number is the entrepreneur's projection of five dollars a kilogram by 2030. It comes from a pilot facility, is not an observed wholesale price, and does not clearly include energy and growth medium." },
            { speaker: "Sam", text: "How did the scientist handle the environmental comparison?" },
            { speaker: "Inez", text: "She says cultivated meat can use less land, but energy demand varies sharply with the electricity grid and the efficiency of production. The host compresses that into “always greener”, which goes beyond her answer." },
            { speaker: "Sam", text: "And what did the chef contribute? Which part of that contribution is evidence rather than enthusiasm?" },
            { speaker: "Inez", text: "The chef offers a sensory comparison and says customers may accept the texture. That is useful design feedback, not evidence of environmental benefit or market adoption." },
            { speaker: "Sam", text: "What issue did the programme leave genuinely open?" },
            { speaker: "Inez", text: "Scaling sterile production without costly contamination. The scientist mentions the problem, but there is no independent evidence about failure rates at commercial scale." },
            { speaker: "Sam", text: "Build your project around that gap. Give a hundred-word summary, three claims tagged by source, two caveats and one unanswered question." },
            { speaker: "Inez", text: "For the ninety-second response, I'll play one short clip of the host's inevitability claim, then answer with the scientist's conditions rather than the chef's enthusiasm." },
            { speaker: "Sam", text: "Exactly. End with what further evidence would change your judgement—not simply with agreement or disagreement." },
          ],
        },
        {
          type: "tip",
          title: "Finish with an evidence-aware response",
          text: "For an independent project, move from gist to source map, then to calibrated judgement. Separate observed results from projections and expert domain from advocacy. Choose a short audio extract that exposes the central tension, and answer it with the strongest qualified evidence. A complete project names its uncertainty and specifies what new information would change the conclusion.",
        },
        {
          type: "exercise",
          title: "Check the project analysis",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "How long is the podcast?",
              ["Five minutes", "Seven minutes thirty seconds", "Ninety seconds"],
              1,
              "Inez identifies the source as a 7:30 podcast; ninety seconds is her planned response length.",
            ),
            c(
              "What is the status of the five-dollar-per-kilogram figure?",
              ["An observed wholesale price", "The cost of cattle farming today", "A projection from a pilot facility"],
              2,
              "Inez notes that the entrepreneur projects the figure for 2030 rather than reporting an observed price.",
            ),
            c(
              "Why does the scientist qualify the environmental benefit?",
              ["Cultivated meat always uses more land", "Energy demand depends on the grid and production efficiency", "Consumers refuse every new food"],
              1,
              "She identifies energy and efficiency as variables that determine the environmental comparison.",
            ),
            c(
              "What remains unresolved at commercial scale?",
              ["How to maintain sterile production without costly contamination", "Whether meat has a texture", "Whether the podcast has a host"],
              0,
              "Inez highlights contamination risk and the absence of independent commercial-scale evidence.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Produce the final response",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "Why does Inez prefer the scientist's conditions to the chef's enthusiasm for her response?",
              "The scientist addresses evidence relevant to adoption and environmental claims, while the chef's sensory enthusiasm cannot establish cost, scale or sustainability.",
              "Match evidence to the claim being evaluated.",
            ),
            p(
              "What three source tags should appear in the hundred-word summary?",
              "Entrepreneur—projection and advocacy; food scientist—conditional technical evidence; chef—sensory and consumer-design experience.",
              "Tag each contribution by evidential role, not just by name.",
            ),
            p(
              "Write a 60–80-word critical response and end with evidence that would change your judgement.",
              "Model answer: The podcast makes a plausible case that cultivated meat could reduce land use, but “inevitable” outruns the evidence. The projected $5 price excludes a clear account of energy and growth-medium costs, and commercial-scale contamination remains unresolved. I would revise my view if independent, full-cost data from several operating plants showed competitive prices and lower life-cycle impacts across different electricity grids.",
              "Include a qualified judgement, one projection caveat and a concrete evidence request.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does Inez label the host's opening as framing?",
          ["It presents a contested future outcome as settled", "It quotes an observed production price", "It reports a completed commercial trial"],
          0,
          "“Inevitable” is an interpretation of possible adoption, not a result established by the guests' evidence.",
        ),
        q(
          2,
          "What is missing from the projected cost figure as presented?",
          ["Any mention of cultivated meat", "Clarity about whether energy and growth medium are included", "The entrepreneur's name"],
          1,
          "Inez flags the boundary of the projection, which limits comparison with other foods.",
        ),
        q(
          3,
          "Why is the chef's contribution still useful?",
          ["It proves environmental benefits", "It supplies sensory and acceptance-design evidence without settling larger claims", "It establishes commercial production costs"],
          1,
          "A domain-specific observation can be valuable while remaining insufficient for environmental or economic conclusions.",
        ),
        q(
          4,
          "What makes Inez's planned response critical rather than merely oppositional?",
          ["She rejects every source", "She repeats the host's certainty", "She weighs source-specific evidence and states what new findings would change her judgement"],
          2,
          "Her method is conditional and evidence-aware, allowing revision rather than relying on a fixed verdict.",
        ),
      ],
    },
  ],
};
