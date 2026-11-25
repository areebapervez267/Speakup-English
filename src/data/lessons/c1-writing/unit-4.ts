import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1WritingUnit4: LessonUnit = {
  title: "Revision and style",
  description:
    "Edit at the level of argument, structure, sentences and surface accuracy, then assemble a portfolio that demonstrates controlled professional choices.",
  lessons: [
    {
      slug: "self-editing-and-proofreading",
      title: "Self-editing and proofreading",
      summary:
        "Separate structural revision from sentence editing and proofreading so that important changes are not lost in a final search for typos.",
      objective:
        "Apply a layered editing protocol, diagnose recurring errors and produce a traceable revision of a short professional paragraph.",
      minutes: 36,
      blocks: [
        {
          type: "text",
          title: "Editing asks different questions at different scales",
          paragraphs: [
            "Trying to correct commas while deciding whether the argument is persuasive divides attention and usually produces cosmetic revision. Work in passes with a defined purpose: first test the thesis and order, then the development of paragraphs, then sentence clarity, finally accuracy and consistency. Change tools or conditions between passes where possible—print, read aloud, use a clean copy or check a different screen view.",
            "Proofreading is the last narrow pass, not the name for every kind of revision. It verifies that the intended text has been reproduced correctly: spelling, punctuation, agreement, dates, figures, references and names. A clean page can still contain a failed argument, so surface accuracy must follow substantive revision rather than substitute for it.",
          ],
        },
        {
          type: "table",
          title: "The four-pass editing protocol",
          columns: ["Pass", "Question", "Typical intervention", "Evidence of completion"],
          rows: [
            ["1. Argument", "Does the text answer the question and prove its thesis?", "Reframe claim; add missing reason; remove unsupported point.", "Thesis aligns with every section."],
            ["2. Structure", "Does each section perform a necessary job in a logical order?", "Move or split paragraphs; revise headings; strengthen links.", "Each paragraph can be labelled with its function."],
            ["3. Sentences", "Can an informed reader understand each sentence on one careful reading?", "Shorten, unpack, restore agency, repair reference.", "Main claims are easy to locate."],
            ["4. Surface", "Is the final text accurate and consistent?", "Correct grammar, spelling, punctuation and citation style.", "Names, numbers and references are checked."],
          ],
          caption: "Use a different marking code for each pass so the revision history reveals patterns.",
        },
        {
          type: "examples",
          title: "A revision that changes the argument before the prose",
          items: [
            {
              text: "Original: ‘Training is important. Staff often miss procedures. We recommend more training.’ Argument revision: ‘The review found that staff completed training but could not apply two revised procedures. We recommend supervised practice on those procedures rather than another generic module.’",
              note: "The revision corrects an unsupported diagnosis and makes the recommendation proportional to the finding.",
            },
            {
              text: "Sentence revision: ‘Due to the fact that the revised procedure was not implemented by team leaders, inconsistencies arose in practice.’ Improved: ‘Team leaders did not implement the revised procedure, so practice became inconsistent.’",
              note: "The improved sentence restores agents and replaces abstraction with a clear causal link.",
            },
            {
              text: "Proofreading revision: ‘The report covers 1,240 cases from January–Mars 2025 and was revised on 14/04/25.’ Corrected: ‘The report covers 1,240 cases from January–March 2025 and was revised on 14 April 2025.’",
              note: "Surface checks include language consistency, dates and transcription—not only isolated spelling.",
            },
          ],
        },
        {
          type: "rules",
          title: "Run a targeted final check",
          items: [
            "Verify the thesis against the conclusion: has the position changed without explanation?",
            "Check that every paragraph supports, complicates or tests the thesis.",
            "Search for repeated pronouns, it and this, then test each antecedent.",
            "Check subject–verb agreement across intervening phrases, especially with singular collective nouns.",
            "Compare all numbers, units, dates and names with the source or earlier mentions.",
            "Read the final paragraph and title aloud; they often reveal repetition or mismatched scope.",
            "Keep an error log: category, example, correction and a check that prevents recurrence.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the right editing pass",
          instructions: "Identify the primary editing problem and select the most effective intervention.",
          items: [
            c(
              "A report recommends a second training programme, but its findings show that the first programme was effective. Which pass comes first?",
              ["Proofreading", "Argument revision to reconnect the recommendation to the findings", "Capitalisation"],
              1,
              "The recommendation and evidence are misaligned, so sentence-level correction would preserve a substantive error.",
            ),
            c(
              "Two paragraphs discuss the same limitation before the evidence appears. What is the best structural intervention?",
              ["Add more explanation to both", "Move the limitation to the analysis section and retain one relevant signpost earlier", "Delete all qualifications"],
              1,
              "A structural edit removes duplication while preserving the limitation where readers need it.",
            ),
            c(
              "Which sentence needs a reference check?",
              ["The final sample included 120 participants.", "The committee changed the timetable after it reviewed the survey, and this surprised members.", "The report has three sections."],
              1,
              "This could refer to the review, the change or the timetable; a precise noun phrase should replace the ambiguous reference.",
            ),
            c(
              "What is the most useful error-log entry?",
              ["I make mistakes", "Proofread everything", "I omit the -s after singular subjects; before submission, search for each he, she, it and singular noun and check the following verb"],
              2,
              "A specific recurring pattern and preventive check is more useful than a general intention.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Edit a short recommendation",
          instructions: "Revise this fictional recommendation through all four passes: ‘Training is important because there was a problem. Staff didn't follow the new refund procedure properly and customers waited. We recommend training and communication and that leaders should monitor things.’",
          items: [
            p(
              "Pass 1: state the problem precisely and make the recommendation address it. Available finding: 7 of 30 audited refunds used the old form after the procedure changed.",
              "Model answer: Seven of 30 audited refunds used the old form after the procedure changed, causing avoidable rework. We recommend targeted practice on the revised form for the two teams responsible for those cases.",
              "Replace a general diagnosis with the observed problem and a proportional action.",
            ),
            p(
              "Pass 2: split content into a finding and a recommendation, and add an evaluation measure.",
              "Model answer: Finding: Seven of 30 audited refunds used the old form, delaying processing. Recommendation: Team leaders should run a 30-minute practice session within two weeks and re-audit 20 refunds, aiming for at least 90 per cent use of the revised form.",
              "Make the evidence, action, owner and outcome easy to scan.",
            ),
            p(
              "Pass 3–4: write the polished final version and list two proofreading checks specific to it.",
              "Model answer: Seven of 30 audited refunds used the old form after the procedure changed. Team leaders should run a targeted practice session within two weeks and re-audit 20 refunds; at least 90 per cent should use the revised form. Checks: confirm the ratio is written as ‘7 of 30’ and verify that the re-audit sample is 20, not the original 30.",
              "Finish with clean prose and checks tied to actual details in the text.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is the first editing priority when a conclusion does not follow from the evidence?", ["Correcting punctuation", "Repairing the argument", "Changing the font"], 1, "Substantive logic must be repaired before surface polish."),
        q(2, "What is proofreading primarily concerned with?", ["Final accuracy and consistency", "Choosing a research question", "Writing new recommendations"], 0, "Proofreading checks the final text for errors and inconsistencies."),
        q(3, "Why use separate editing passes?", ["To increase the word count", "Each scale of revision requires a different focus", "To avoid reading the conclusion"], 1, "Focused passes reduce omissions and prevent small corrections from displacing larger decisions."),
        q(4, "Which error-log entry is most actionable?", ["My English is weak", "I should be careful", "I confuse affect and effect; before submission, search for both and identify whether each is a verb or noun"], 2, "A precise pattern and search strategy enables a concrete correction."),
      ],
    },
    {
      slug: "cutting-for-clarity",
      title: "Cutting for clarity",
      summary:
        "Remove redundancy, throat-clearing and empty emphasis while protecting necessary qualifications, evidence and the reader's orientation.",
      objective:
        "Cut a professional paragraph by at least one quarter without losing its claim, reasoning, scope or tone.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Concision means maximum meaning per unit of attention",
          paragraphs: [
            "Short is not automatically clear. If a cut removes the condition that makes a recommendation safe, the sentence becomes shorter and worse. The aim is to remove friction: repeated ideas, generic preambles, inflated verbs, duplicated framing and phrases that announce importance rather than demonstrating it.",
            "Keep what changes interpretation: the actor, timeframe, comparison, exception and degree of certainty. Cut what merely occupies space: ‘it is important to note that’, ‘in order to’ where to is sufficient, and ‘at this point in time’ where now is accurate. Read for verbal weight, not only word count.",
          ],
        },
        {
          type: "table",
          title: "High-value cuts",
          columns: ["Pattern", "Inflated version", "Concise version", "What is preserved"],
          rows: [
            ["Throat-clearing", "It is important to note that the pilot failed.", "The pilot failed.", "The claim and its certainty."],
            ["Weak verb frame", "The committee made a decision to postpone.", "The committee decided to postpone.", "Agency and action."],
            ["Duplicated framing", "The reason for this is because demand fell.", "Demand fell, causing the delay.", "The causal link."],
            ["Empty intensifier", "The results clearly demonstrate a significant improvement.", "The results show a 12 per cent improvement.", "The measured change."],
            ["Noun stack", "A review of the process of recruitment was conducted.", "The team reviewed recruitment.", "The event and actor."],
            ["Repeated qualification", "The finding may possibly suggest that…", "The finding may suggest…", "The calibrated uncertainty."],
          ],
          caption: "Replace vague emphasis with a specific fact whenever possible.",
        },
        {
          type: "examples",
          title: "Cut by a quarter, not by meaning",
          items: [
            {
              text: "Original (78 words): ‘It is important to recognise that the implementation of remote interviewing, which was introduced by the organisation in the month of September, has had the effect of making the recruitment process considerably faster for hiring managers. This improvement is mainly due to the fact that candidates no longer need to travel to the office in order to attend an initial interview.’ Revised (43 words): ‘Remote interviewing, introduced in September, has made initial recruitment faster because candidates no longer travel to an office. Hiring managers now schedule first interviews with less delay, although the available data do not separate this effect from the additional interview slots introduced at the same time.’",
              note: "The revision cuts generic wording, adds a missing alternative explanation and retains a meaningful limitation.",
            },
            {
              text: "Original: ‘In spite of the fact that the service was expensive, it was, on balance, relatively successful.’ Revised: ‘Despite its cost, the service succeeded overall.’",
              note: "Three compressed phrases carry the same concession and judgement.",
            },
          ],
        },
        {
          type: "rules",
          title: "A safe cutting order",
          items: [
            "Delete statements that merely announce what the next sentence will say, unless the signpost is needed for a long document.",
            "Replace weak verb + noun combinations with direct verbs.",
            "Collapse repeated subjects and synonyms when the repetition is accidental rather than rhetorical.",
            "Remove general claims that the evidence already establishes more precisely.",
            "Combine tightly related sentences if doing so clarifies their relationship rather than lengthening the sentence.",
            "Restore anything removed by mistake: conditions, comparisons, caveats, actors and material numbers.",
          ],
        },
        {
          type: "exercise",
          title: "Cut with judgement",
          instructions: "Choose the revision that improves economy without distorting the original.",
          items: [
            c(
              "Which revision is safest for ‘The results may possibly indicate a modest improvement’?",
              ["The results show a great improvement.", "The results may indicate a modest improvement.", "Improvement."],
              1,
              "The second version removes duplicate hedging while preserving uncertainty and degree.",
            ),
            c(
              "Original: ‘The policy applies only to tenants who registered before 1 April.’ Which concise version preserves the limit?",
              ["The policy applies to tenants.", "The policy applies to earlier tenants.", "The policy applies only to tenants registered before 1 April."],
              2,
              "Only the third version retains both the restriction and its date.",
            ),
            c(
              "Which cut is most likely to weaken a professional recommendation?",
              ["Removing ‘in order to’ before a verb", "Removing the budget cap", "Removing ‘at this point in time’ before ‘now’"],
              1,
              "A budget cap limits authority and risk; unlike verbal padding, it is decision-critical information.",
            ),
            c(
              "Which revision improves clarity without adding length?",
              ["The launch was successful due to the fact that demand was high.", "High demand contributed to the launch's success.", "The launch achieved a successful outcome."],
              1,
              "The second sentence states the same relationship directly and preserves the degree of certainty.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Compress three paragraphs",
          instructions: "Reduce each passage by roughly one quarter and list what you deliberately retained.",
          items: [
            p(
              "Cut to about 55 words: ‘It is important to note that the consultation received 214 responses from residents, local businesses and community organisations. The majority of responses, 68 per cent, supported the proposal to introduce a late-night bus service. However, the consultation did not include a representative sample of shift workers, and this limitation should be taken into account when interpreting the level of support.’",
              "Model answer: The consultation received 214 responses, of which 68 per cent supported a late-night bus service. Support came from residents, businesses and community organisations, but the sample did not represent shift workers reliably; the result should therefore be read as indicative rather than conclusive.",
              "Retain the number, percentage, composition and sampling limit.",
            ),
            p(
              "Cut to about 35 words: ‘Due to the fact that the supplier was unable to provide delivery confirmation, the team made the decision to postpone installation. This decision was taken in order to avoid the risk of accepting equipment that had not undergone the required safety checks.’",
              "Model answer: Installation was postponed because the supplier could not confirm delivery, preventing the team from verifying that the equipment had completed the required safety checks.",
              "Preserve the reason and the safety rationale.",
            ),
            p(
              "Cut to about 30 words: ‘The pilot was, on the whole, relatively successful, and the results would appear to suggest that the approach has the potential to be expanded to other departments, subject to a further review of costs and implementation requirements.’",
              "Model answer: The pilot was broadly successful and supports further expansion, subject to reviewing costs and implementation requirements.",
              "Keep the positive judgement, conditional scope and two review criteria.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is the goal of cutting for clarity?", ["To remove friction while preserving meaning", "To remove all qualifications", "To reach a fixed sentence length"], 0, "Economy should improve comprehension, not weaken the claim."),
        q(2, "Which information is usually unsafe to cut?", ["A decision-changing condition or budget cap", "A repeated greeting", "An empty intensifier"], 0, "Conditions and limits may change whether a reader should act."),
        q(3, "Which revision is concise and accurate?", ["The data clearly prove everything.", "The data suggest a possible association.", "The data are data."], 1, "The second sentence preserves an appropriately cautious association without duplication."),
        q(4, "Why can a revision be shorter but not clearer?", ["Short sentences cannot contain evidence", "A cut may remove the relation or qualification needed to interpret the claim", "Readers prefer long sentences"], 1, "Clarity depends on preserved meaning, not word count alone."),
      ],
    },
    {
      slug: "developing-a-distinctive-professional-voice",
      title: "Developing a distinctive professional voice",
      summary:
        "Build a recognisable professional voice through controlled stance, lexical habits and sentence design while adapting to purpose and audience.",
      objective:
        "Identify and reproduce three voice features in your own writing, then revise a generic paragraph for a defined professional audience.",
      minutes: 35,
      blocks: [
        {
          type: "text",
          title: "Voice is a pattern of choices",
          paragraphs: [
            "A professional voice is not a costume of Latinate vocabulary and passive verbs. It is the impression created by recurring choices: how strongly you state claims, how directly you address readers, which kinds of evidence you foreground and how you handle qualification. A persuasive voice can be calm and exact; an authoritative voice need not be domineering.",
            "Audience awareness determines how much context to supply and how much directness to use. Specialists may tolerate compressed terms and value economy, while cross-functional decision-makers need definitions and a clear consequence. Voice remains recognisable when its underlying stance persists even as the surface register changes.",
          ],
        },
        {
          type: "table",
          title: "Voice levers",
          columns: ["Lever", "Available choices", "Effect"],
          rows: [
            ["Stance", "Measured assertion; explicit judgement; open inquiry", "Changes confidence and relationship to the reader."],
            ["Agency", "We recommend; the evidence supports; the review found", "Locates responsibility and source of authority."],
            ["Sentence design", "Short verdict followed by explanation; balanced qualification", "Controls pace and prominence."],
            ["Vocabulary", "Plain exact terms; established specialist terms; restrained figurative language", "Signals audience fit and precision."],
            ["Reader address", "Direct request; impersonal framing; rhetorical question", "Changes urgency and involvement."],
            ["Qualification", "Because, although, provided that, subject to", "Shows control of complexity rather than indecision."],
          ],
          caption: "Distinctiveness comes from a consistent configuration, not one unusual word.",
        },
        {
          type: "examples",
          title: "Same facts, controlled voices",
          items: [
            {
              text: "Generic: ‘The trial showed positive outcomes and further consideration is recommended.’ Analytical voice: ‘The trial met its primary target, but the absence of a control group limits causal claims. A controlled second phase would be the more informative next step.’",
              note: "The revised voice earns confidence through explicit interpretation rather than positive adjectives.",
            },
            {
              text: "Over-deferential: ‘It would perhaps be possible, if convenient, to consider whether the deadline might be reviewed.’ Direct professional voice: ‘Please confirm by Friday whether the deadline can be extended to 22 October.’",
              note: "Precision and courtesy coexist; unnecessary deference makes the request harder to answer.",
            },
            {
              text: "Over-dominant: ‘This is obviously the only viable solution.’ Controlled authority: ‘This is the strongest of the options assessed because it meets all three mandatory criteria at the lowest lifecycle cost.’",
              note: "The second version grounds authority in stated criteria and comparison.",
            },
          ],
        },
        {
          type: "rules",
          title: "Build a personal style guide",
          items: [
            "Record three sentences that sound like you when they are clear, confident and appropriate.",
            "Identify the features behind them: verb strength, sentence length, preferred hedging or direct reader address.",
            "Set deliberate defaults: first-person plural for recommendations, active verbs for responsibility and one qualification per contested claim.",
            "List words you overuse and replace them only when a more exact term improves meaning.",
            "Sample one text from your field and analyse its moves rather than copying its vocabulary.",
            "Test your voice with three audiences: specialist, cross-functional executive and affected client.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the controlled voice",
          instructions: "Select the version that projects credibility without becoming inflated, evasive or domineering.",
          items: [
            c(
              "Which sentence best combines confidence and qualification?",
              ["The results are amazing and undeniable.", "The results support a limited expansion, provided that the safety issue is resolved before launch.", "There may be some results, perhaps."],
              1,
              "The middle sentence states a clear judgement with a relevant condition.",
            ),
            c(
              "Which opening establishes a credible analytical voice?",
              ["Everyone knows this approach works.", "The approach addresses one bottleneck but relocates the cost to the final review stage.", "This essay will be about an approach."],
              1,
              "The second sentence makes a specific judgement that the rest of the text can defend.",
            ),
            c(
              "How should a specialist report adapt when its audience becomes cross-functional?",
              ["Use more jargon", "Remove all evidence", "Define essential specialist terms and make the decision consequence explicit"],
              2,
              "Audience adaptation changes the amount of explanation, not the underlying accuracy or stance.",
            ),
            c(
              "Which practice is most likely to create an artificial corporate voice?",
              ["Using precise actors and verbs", "Borrowing long stock phrases without checking their meaning", "Varying sentence length for emphasis"],
              1,
              "Unanalysed stock language obscures thought and prevents a recognisable authorial perspective.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Develop and apply your voice",
          instructions: "Use the fictional proposal to introduce flexible Friday working in a small design studio.",
          items: [
            p(
              "Write one generic sentence, then a controlled alternative. Name the voice feature you changed.",
              "Model answer: Generic: ‘Flexible working could potentially be advantageous in various ways.’ Controlled: ‘Flexible Fridays could reduce unnecessary commuting while preserving a shared team day on Thursdays.’ Changed feature: replaced vague evaluation with a specific mechanism and safeguard.",
              "Show the revision move, not only the polished sentence.",
            ),
            p(
              "Write a two-sentence recommendation for the studio director that is direct, courteous and conditional.",
              "Model answer: I recommend a three-month trial of flexible Fridays, with Thursday retained as the common team day. Expansion should depend on meeting the existing client-response target and a staff review after eight weeks.",
              "Use I recommend for ownership and a measurable condition for confidence.",
            ),
            p(
              "Adapt the recommendation for the studio's clients, preserving your stance but explaining the operational consequence.",
              "Model answer: We are trialling flexible Friday working while keeping Thursday as our shared team day. Your named project contact and our response deadlines will remain unchanged during the trial.",
              "Clients need reassurance about continuity, not the internal staffing rationale.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is professional voice primarily made of?", ["Recurring choices in stance, evidence and sentence design", "A fixed list of formal words", "Avoiding first-person pronouns"], 0, "Voice emerges from patterns of decisions rather than a uniform register."),
        q(2, "What should change when the audience changes?", ["The level of context and explanation", "The underlying facts", "The need for accuracy"], 0, "Adaptation reshapes presentation while preserving truthful content."),
        q(3, "Which sentence projects controlled authority?", ["Everyone must agree with me.", "This is the preferred option because it meets the mandatory safety and budget criteria.", "This option is arguably somewhat possibly better."], 1, "Authority is grounded in explicit criteria rather than force or vagueness."),
        q(4, "Why analyse professional texts you admire?", ["To copy their stock phrases", "To identify transferable moves and choices", "To avoid developing your own position"], 1, "Analysis reveals techniques that can be adapted without imitation."),
      ],
    },
    {
      slug: "a-final-writing-portfolio",
      title: "A final writing portfolio",
      summary:
        "Curate three complementary pieces, document substantive revisions and evaluate your control of argument, evidence, structure and professional register.",
      objective:
        "Assemble and annotate a portfolio using a C1 rubric, including before-and-after evidence and a focused plan for the next stage of writing.",
      minutes: 38,
      blocks: [
        {
          type: "text",
          title: "A portfolio demonstrates range, not volume",
          paragraphs: [
            "Three carefully revised texts reveal more than a folder of drafts. Choose work that demonstrates different pressures: an academic essay for sustained argument, a professional recommendation for decision-making and a formal message for register and precision. Each piece should show the final text and evidence of how you improved it.",
            "Select revisions that changed meaning or structure, not only spelling. An annotation should explain the problem you saw, the change you made and the principle you will reuse. A self-evaluation becomes useful when it identifies a repeatable strategy rather than assigning yourself a general grade.",
          ],
        },
        {
          type: "table",
          title: "Portfolio assessment grid",
          columns: ["Criterion", "Secure C1 evidence", "Portfolio artefact"],
          rows: [
            ["Argument", "A specific thesis is sustained and qualified where necessary.", "Essay thesis, section map and revised conclusion."],
            ["Evidence", "Sources are integrated, analysed and synthesised.", "One paragraph with source framing and a cross-source link."],
            ["Structure", "Paragraphs and sections follow a visible decision path.", "Report headings and one annotated paragraph move."],
            ["Register", "Language fits the audience without sacrificing clarity.", "A formal email and its audience analysis."],
            ["Style", "Sentences are controlled and free of avoidable density.", "A before-and-after line edit showing a cutting rationale."],
            ["Accuracy", "References, figures, names and surface details are verified.", "Final proofreading checklist and error-log pattern."],
          ],
          caption: "Use the grid diagnostically; do not count pages or vocabulary items as evidence of control.",
        },
        {
          type: "examples",
          title: "A useful revision annotation",
          items: [
            {
              text: "Before: ‘The sources agree that the policy is effective.’ After: ‘Both sources report shorter processing times, but only the longitudinal study examined delayed rework; the apparent agreement therefore supports speed more strongly than sustained effectiveness.’ Annotation: I replaced a source-counting claim with a comparison of outcome measures and used the mismatch to qualify the conclusion.",
              note: "The annotation names the reasoning error and the reusable synthesis strategy.",
            },
            {
              text: "Before: ‘Staff were reminded of the procedure.’ After: ‘Team leaders reviewed the revised procedure with staff on 4 May and retained attendance records.’ Annotation: I restored the actor, action and evidence trail so the report distinguishes a completed action from an unspecified reminder.",
              note: "A strong annotation connects a language change to accountability and evidential precision.",
            },
          ],
        },
        {
          type: "rules",
          title: "Assemble the portfolio in six steps",
          items: [
            "Select: choose one academic, one professional and one correspondence text written for a defined audience.",
            "Revise: apply argument, structure, sentence and surface passes in that order.",
            "Pair: retain one substantial earlier version for each text, ideally before structural revision.",
            "Annotate: explain two significant changes per text with references to the relevant section.",
            "Assess: complete the portfolio grid with precise evidence and one priority weakness per criterion.",
            "Transfer: choose one reusable rule and one timed writing task to test it in the next two weeks.",
          ],
        },
        {
          type: "exercise",
          title: "Evaluate portfolio evidence",
          instructions: "Choose the evidence that best demonstrates the stated C1 capability.",
          items: [
            c(
              "Which artefact best demonstrates synthesis rather than summary?",
              ["A list of six source titles", "A paragraph comparing two sources' measures, explaining why their conclusions differ and qualifying the writer's own claim", "A quotation from each source with no commentary"],
              1,
              "Synthesis requires a relationship between sources and an independent interpretive consequence.",
            ),
            c(
              "Which revision note is most useful for future writing?",
              ["I made it better", "I changed some words", "I split a paragraph because it moved from evidence to a new policy recommendation; I will check each paragraph for one argumentative job"],
              2,
              "The third note identifies a structural pattern and turns it into a reusable check.",
            ),
            c(
              "Which pair of texts best demonstrates professional range?",
              ["Two essays on the same topic with different titles", "An analytical recommendation for executives and a concise correspondence to an external supplier", "Two personal diary entries"],
              1,
              "The pair tests decision structure and external register rather than repeating one genre.",
            ),
            c(
              "What should a portfolio self-evaluation prioritise?",
              ["The number of hours spent", "A general claim that the writing is excellent", "Specific evidence of control and one actionable revision target"],
              2,
              "Evidence-based diagnosis turns reflection into a plan for improvement.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Curate your final portfolio",
          instructions: "Complete the three tasks with texts you have produced during the course. Use fictional substitutions if a real professional document cannot be shared.",
          items: [
            p(
              "Write a portfolio contents note naming three texts, their audiences and the capability each demonstrates.",
              "Model answer: 1. Academic essay for an interdisciplinary panel: thesis and source synthesis. 2. Report recommendation for an operations director: findings–implication–action chain. 3. Supplier email for an external contracts manager: precise request, deadline and firm professional register.",
              "Choose different audiences and argumentative pressures.",
            ),
            p(
              "Annotate one substantive revision in 60–80 words: identify the earlier problem, the change and the principle you will reuse.",
              "Model answer: My first draft placed three sources in separate paragraphs and concluded that they supported the proposal. I reorganised the section around shared criteria and added a sentence explaining that one source measured cost while the others measured satisfaction. The revised conclusion supported only the claim that the proposal improved efficiency. I will compare sources by construct before describing them as agreeing.",
              "Show reasoning development, not only surface correction.",
            ),
            p(
              "Complete a brief self-assessment: your strongest capability, your main limitation and a two-week practice plan with a measurable output.",
              "Model answer: Strongest capability: linking recommendations to numbered findings. Limitation: qualifications appear late and can make my conclusions sound hesitant. Plan: write three 250-word conclusions, placing the main judgement first and the central qualification second; check each against the rubric and have one reviewed by a peer.",
              "Make the plan observable and proportionate.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is the main purpose of a writing portfolio?", ["To demonstrate range and development with evidence", "To collect as many drafts as possible", "To avoid revision"], 0, "A curated portfolio shows control across tasks and explains how the writing improved."),
        q(2, "Which revision is most worth annotating?", ["A corrected spelling mistake only", "A structural change that improved the argument", "A new title chosen at random"], 1, "Substantive changes reveal the writer's reasoning and reusable editing principles."),
        q(3, "What should a useful self-evaluation include?", ["Specific evidence and an actionable next step", "Only praise", "A comparison with classmates' word counts"], 0, "Diagnosis becomes valuable when it guides the next writing task."),
        q(4, "Which combination best demonstrates C1 professional range?", ["Three personal narratives", "Three increasingly long versions of one email", "An academic essay, a decision report and formal correspondence"], 2, "Different genres test argument, decision structure and register."),
      ],
    },
  ],
};
