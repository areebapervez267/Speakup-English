import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2WritingUnit4: LessonUnit = {
  title: "The editorial eye",
  description:
    "Evaluate and reshape writing at structural and line level, give evidence-based criticism and curate a portfolio that demonstrates controlled stylistic authority.",
  lessons: [
    {
      slug: "structural-editing",
      title: "Structural editing",
      summary:
        "Re-engineer a draft's argument through reverse outlining, section contracts, causal sequencing and the courageous removal of misplaced material.",
      objective:
        "Create a reverse outline, identify structural dysfunction and redesign a section order while preserving necessary evidence and complications.",
      minutes: 37,
      blocks: [
        {
          type: "text",
          title: "Structure is the argument made spatial",
          paragraphs: [
            "Structural editing asks what the draft is doing before asking how it sounds. A reverse outline labels each paragraph by its claim, evidence and function, revealing repetition, missing steps and sections that arrive before the reader has a reason for them. The outline often makes a fatal gap more visible than another read of the prose.",
            "The editor must be willing to remove material that is accurate, elegant or hard-won but belongs elsewhere. A ‘darling’ is not defined by quality; it is a passage whose current position serves the writer's attachment rather than the reader's understanding. Relocation, compression and deletion are all legitimate structural acts.",
          ],
        },
        {
          type: "table",
          title: "Reverse-outline diagnosis",
          columns: ["Draft unit", "Claim or job", "Problem", "Structural action"],
          rows: [
            ["Opening", "Defines the topic for six paragraphs.", "Delays the contested question.", "Compress to one sentence and move the thesis forward."],
            ["Section 1", "Presents three sources sequentially.", "Summarises without synthesis.", "Reorder around a shared criterion and add a comparison claim."],
            ["Section 2", "Introduces an objection already answered.", "Repeats the rebuttal.", "Merge the objection with its strongest evidence and answer once."],
            ["Section 3", "Contains an elegant historical analogy.", "Adds atmosphere but no inferential step.", "Cut or move to a brief opening image."],
            ["Conclusion", "Introduces a new implementation model.", "Unsolved claim arrives too late.", "Move the model before the final synthesis or remove the unsupported recommendation."],
          ],
          caption: "A structural action should explain the reader problem it solves, not merely the movement of text.",
        },
        {
          type: "passage",
          title: "Model structural memorandum: fictional policy essay",
          paragraphs: [
            "Current sequence: background, case study, literature review, recommendation, objection, conclusion. Diagnosis: the recommendation precedes the evidence that would justify it, and the objection is delayed until after the reader has been asked to agree. Proposed sequence: problem and decision; strongest competing explanation; comparative evidence; objection and qualified response; implementation model; synthesis. The historical case study should move into the opening as a 60-word illustration, while the literature review should be reorganised around three disputed assumptions rather than authors. The implementation model belongs after the objection because it demonstrates how the qualification changes the recommendation. No evidence needs to be removed; its order and framing must change.",
          ],
        },
        {
          type: "rules",
          title: "Rebuild with section contracts",
          items: [
            "Write a contract for each section: claim, reader question, evidence and exit consequence.",
            "Order sections by dependency: a claim cannot rely on an explanation that appears later without a deliberate flashback or signpost.",
            "Merge units that perform the same job; split units that change claim without acknowledging the turn.",
            "Move limitations beside the claims they qualify, except where a consolidated limitations section aids scanning.",
            "After restructuring, rewrite transitions before line editing; old connectors may now assert the wrong relationship.",
            "Compare the new outline with the thesis and delete sections that no longer serve it.",
          ],
        },
        {
          type: "exercise",
          title: "Make the structural decision",
          instructions: "Choose the edit that best restores the argument's logic and the reader's understanding.",
          items: [
            c(
              "A draft defines four terms before stating its question. A reverse outline shows that only one term is contested. What should the editor do?",
              ["Define all four at greater length", "Move the three uncontested definitions to an appendix or cut them, and define the contested term beside its use", "Move the question into a footnote"],
              1,
              "Only necessary orientation belongs in the main path; the disputed concept needs contextual definition.",
            ),
            c(
              "An evidence section follows the recommendation it is meant to justify. What is the strongest intervention?",
              ["Add a stronger adjective to the recommendation", "Move the recommendation after the evidence or reframe the opening explicitly as a proposal to be tested", "Delete the evidence"],
              1,
              "The recommendation should follow its warrant unless the document deliberately announces a hypothesis to test.",
            ),
            c(
              "Two sections both discuss public trust. What is the best first question?",
              ["Which section has better sentences", "Whether they make the same claim, answer different objections or represent distinct stages", "Which section is longer"],
              1,
              "Diagnosis should precede merging or deletion; similar topics can serve different argumentative jobs.",
            ),
            c(
              "A vivid anecdote is accurate but has no inferential role. What is the strongest editorial choice?",
              ["Keep it because it was difficult to report", "Expand it until its relevance becomes obvious", "Cut it or relocate it as a brief illustration that serves a stated claim"],
              2,
              "Structural value, not effort or beauty alone, determines whether material belongs in the argument.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Reverse-outline a draft",
          instructions: "Use this fictional essay plan on whether universities should guarantee free public transport for students.",
          items: [
            p(
              "Create a reverse outline of five units. Plan: definitions; city bus statistics; student interviews; funding objection; conclusion recommending free transport.",
              "Model answer: 1. Definitions—establishes ‘free’ and eligibility. 2. Bus statistics—describes city use. 3. Interviews—reports student experience. 4. Funding objection—raises cost. 5. Conclusion—recommends universal free travel. Diagnostic: the recommendation lacks a causal case and the objection has no response.",
              "Label each unit's job before deciding what to move.",
            ),
            p(
              "Write a redesigned six-section order with a proposition for each section.",
              "Model answer: 1. Access costs divide students by income. 2. Existing concessions are difficult to use. 3. Interviews reveal administrative and route barriers. 4. Universal passes may reduce stigma but increase cost. 5. Targeted support costs less but can exclude eligible students. 6. A universal basic pass with paid upgrades is the fairest testable option.",
              "Build from problem to mechanisms, trade-offs and recommendation.",
            ),
            p(
              "Identify one darling to cut or relocate and one transition to rewrite after restructuring.",
              "Model answer: Relocate the long history of the city bus company to a brief opening image or appendix; it does not establish student need. New transition: ‘If existing concessions already reduce fares, the issue is not simply price but whether students can claim and use the support.’",
              "Let the reordered evidence determine the relationship between sections.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is a reverse outline?", ["A bibliography in reverse order", "A map of each draft unit's claim, evidence and function", "A list of deleted sentences"], 1, "Reverse outlining exposes the draft's actual architecture."),
        q(2, "What should determine section order?", ["The length of each section", "The dependencies of the argument", "The order in which material was written"], 1, "Claims should appear when the reader has the premises needed to understand them."),
        q(3, "Why can an excellent passage be a structural problem?", ["It always contradicts the thesis", "Excellent prose should never be edited", "It may occupy a position where it delays or distracts from the argument"], 2, "Local quality does not guarantee global usefulness."),
        q(4, "What should be rewritten after major restructuring?", ["Transitions and section framing", "Only the title", "Nothing; word-level edits are sufficient"], 0, "Old connectors may no longer represent the relationships between sections."),
      ],
    },
    {
      slug: "line-editing-and-polish",
      title: "Line editing and polish",
      summary:
        "Polish a structurally sound draft sentence by sentence, tuning syntax, diction, punctuation and cadence while protecting voice and meaning.",
      objective:
        "Perform a line edit that improves precision and rhythm, records the rationale for material changes and preserves deliberate stylistic features.",
      minutes: 35,
      blocks: [
        {
          type: "text",
          title: "Line editing is interpretation made audible",
          paragraphs: [
            "A line edit does more than correct grammar. It tests whether each sentence expresses the intended relationship, gives the right information prominence and sounds like the same controlling mind as the rest of the piece. Punctuation, verb choice and clause order all participate in that work.",
            "Polish must be discriminating. Smoothing every rough edge can erase a writer's force; leaving every irregularity can turn voice into carelessness. Edit for an effect, not for uniformity. A fragment may be deliberate, a repeated construction may carry insistence and a long sentence may reproduce a complex experience. The question is whether the effect is controlled and legible.",
          ],
        },
        {
          type: "table",
          title: "Line-edit lenses",
          columns: ["Lens", "Diagnostic question", "Typical correction"],
          rows: [
            ["Proposition", "Does the sentence say exactly what I mean?", "Replace vague reference and imprecise nouns."],
            ["Hierarchy", "Is the main judgement grammatically prominent?", "Promote a buried main clause; subordinate support."],
            ["Agency", "Is responsibility visible where it matters?", "Restore actors and active verbs."],
            ["Cadence", "Does the syntax support the rhetorical movement?", "Vary length, split breathless clauses, tune the ending."],
            ["Diction", "Is the word exact in sense and register?", "Choose the precise verb, remove euphemism."],
            ["Punctuation", "Does punctuation clarify structure and emphasis?", "Repair commas, dashes, semicolons and sentence boundaries."],
            ["Voice", "Does the edit preserve a deliberate stylistic pattern?", "Retain purposeful repetition, fragments or figurative language."],
          ],
          caption: "Make one category of pass at a time when the draft contains many sentence-level issues.",
        },
        {
          type: "examples",
          title: "A line edit with reasons",
          items: [
            {
              text: "Original: ‘It is important to note that the review, which was undertaken by the committee, found that there were a number of issues in relation to the process.’ Edit: ‘The committee's review identified several procedural weaknesses.’ Reason: restored agency, replaced vague issues with a precise category and removed announcement padding.",
              note: "A strong line edit changes the sentence's informational hierarchy, not only its length.",
            },
            {
              text: "Original: ‘The proposal was controversial, with some supporting it and others opposing it.’ Edit: ‘The proposal divided the committee: five members supported it; four opposed it.’ Reason: replaced an empty evaluation with the actual distribution, although the specific numbers must come from the source.",
              note: "Precision often means adding a verifiable fact rather than cutting another phrase.",
            },
            {
              text: "Original: ‘She looked at him, and he looked at her, and neither of them spoke.’ Retained or lightly revised: ‘She looked at him. He looked at her. Neither spoke.’ Reason: shortened the repeated construction while preserving its deliberate cadence.",
              note: "Polish should not eliminate a rhythm that carries the scene's tension.",
            },
          ],
        },
        {
          type: "rules",
          title: "A controlled line-editing routine",
          items: [
            "Read the paragraph once for meaning and mark only sentences whose proposition is uncertain.",
            "Check hierarchy: identify the main clause and the word or phrase receiving end-focus.",
            "Check agency, reference and lexical precision before polishing sound.",
            "Read aloud and adjust cadence without forcing every sentence into a preferred length.",
            "Use punctuation to clarify relationships, not to compensate for an unclear sentence.",
            "Record the rationale for substantive edits so that later polishing does not accidentally reverse them.",
            "Finish with a clean read that tests coherence across sentences rather than inspecting them in isolation.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the controlled edit",
          instructions: "Select the revision that best improves the sentence for its stated purpose.",
          items: [
            c(
              "Which edit best clarifies agency in a safety report?",
              ["Mistakes were made during inspection.", "The inspectors failed to record the temperature before accepting the batch.", "An inspection-related mistake occurred."],
              1,
              "The second version identifies the responsible actors and the exact procedural failure.",
            ),
            c(
              "Which edit best strengthens end-focus?",
              ["The finding matters for accountability, broadly speaking.", "The finding matters, and there are implications.", "The finding shifts accountability from the project team to the approving authority."],
              2,
              "The third version ends with the precise analytical consequence.",
            ),
            c(
              "Which punctuation best clarifies the contrast?",
              ["The first option is cheaper, the second is faster, however neither meets the safety standard.", "The first option is cheaper; the second is faster. Neither meets the safety standard.", "The first option is cheaper the second is faster however."],
              1,
              "The second version separates the comparison from the shared verdict and avoids a comma splice.",
            ),
            c(
              "Which feature should usually survive a line edit?",
              ["A purposeful repetition that creates cadence", "An accidental ambiguous pronoun", "A repeated empty phrase"],
              0,
              "Controlled stylistic effects deserve protection; accidental obstruction does not.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Edit for effect",
          instructions: "Line-edit the fictional paragraph in three passes and explain your choices.",
          items: [
            p(
              "Proposition pass: clarify ‘It was felt by management that there were concerns about the fact that the timetable might not be achievable in the available timeframe.’",
              "Model answer: Management doubted that the timetable could be met within the available time. Rationale: identified the source of the judgement and removed nested nominalisations.",
              "Make the actor and degree of certainty explicit.",
            ),
            p(
              "Hierarchy and diction pass: sharpen ‘The decision to proceed, which was taken despite reservations, had the effect of creating additional pressure on staff.’",
              "Model answer: Despite reservations, management proceeded, transferring additional pressure to staff. Rationale: restored agency and placed the cost in a strong final position.",
              "Do not let passive syntax conceal who proceeded and who bore the cost.",
            ),
            p(
              "Cadence pass: combine your edits into two sentences with a short final verdict, and name one feature you deliberately retained.",
              "Model answer: Management doubted that the timetable could be met, yet proceeded despite reservations, transferring additional pressure to staff. The plan survived; its conditions did not. Retained feature: a short verdict after a longer sentence to make the structural failure land.",
              "Use rhythm to reinforce the judgement, not to decorate it.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What distinguishes line editing from proofreading?", ["It improves sentence-level meaning, emphasis and style as well as accuracy", "It only changes spelling", "It reorganises entire sections"], 0, "Line editing is a stylistic and rhetorical pass within an established structure."),
        q(2, "Why read aloud during line editing?", ["To hear cadence, stress and unclear syntax", "To avoid checking punctuation", "To make every sentence shorter"], 0, "Sound reveals how the prose actually moves."),
        q(3, "When should a stylistic irregularity be retained?", ["Whenever the writer is attached to it", "Only when it is grammatical", "When it creates a controlled, legible effect"], 2, "Deliberate fragments, repetition and long sentences can serve meaning."),
        q(4, "What makes a line edit substantively strong?", ["It replaces every verb with a noun", "It clarifies the proposition, hierarchy or voice rather than merely shortening", "It removes all qualifiers"], 1, "Effective editing changes how the reader understands and experiences the sentence."),
      ],
    },
    {
      slug: "reading-like-a-critic",
      title: "Reading like a critic",
      summary:
        "Evaluate prose through explicit criteria, connect stylistic effects to argumentative consequences and offer criticism that is precise, fair and usable.",
      objective:
        "Analyse a model passage's voice, syntax and evidence, then write an evidence-based critique with a ranked revision recommendation.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Criticism names the effect before prescribing the fix",
          paragraphs: [
            "A critic distinguishes observation from preference. ‘I dislike the opening’ offers little; ‘the opening defines the problem before the reader knows why it matters, so the thesis arrives without urgency’ identifies a relationship between structure and effect. The next step is to recommend an intervention proportional to the diagnosis.",
            "Fair criticism also recognises achievement. A paragraph may be dense but logically controlled, plain but rhetorically exact. The critic's task is not to make every text sound the same, but to assess whether its choices serve its purpose, audience and genre.",
          ],
        },
        {
          type: "table",
          title: "A critical reading protocol",
          columns: ["Stage", "Question", "Evidence to record", "Output"],
          rows: [
            ["Purpose", "What is the text trying to make happen?", "Genre, audience, thesis, call.", "One-sentence reader contract."],
            ["Architecture", "How does the argument develop?", "Section claims, turning points, missing links.", "Reverse outline and gap list."],
            ["Style", "What effects do recurring choices create?", "Sentence rhythm, agency, imagery, reference.", "Two or three pattern examples."],
            ["Evidence", "Does the support fit each claim?", "Source role, comparison, limitation.", "Claim–warrant assessment."],
            ["Judgement", "What most helps or hinders the purpose?", "Ranked effects, not isolated errors.", "Two priority revisions."],
          ],
          caption: "The protocol moves from description to evaluation to actionable advice.",
        },
        {
          type: "passage",
          title: "Model critique: a polished but evasive paragraph",
          paragraphs: [
            "The paragraph's measured tone and balanced sentences establish a credible institutional voice. Its central weakness, however, is that ‘stakeholders expressed concerns’ assigns no position, scale or reason to the objection, leaving the subsequent reassurance unearned. The repeated nominalisations—‘implementation of the consultation process’ and ‘resolution of outstanding issues’—further conceal who acted. The recommendation should follow the quantified findings directly and identify the owner of the next step. The existing cadence can largely remain: its restraint suits a public update, provided the abstractions are replaced with concrete responsibilities.",
          ],
        },
        {
          type: "rules",
          title: "Give criticism that can be used",
          items: [
            "State the text's purpose and audience before evaluating its style.",
            "Quote or describe a precise feature, then explain its effect on meaning, trust or pace.",
            "Separate a structural problem from a sentence problem so the writer knows where to intervene.",
            "Acknowledge a successful choice that should be protected during revision.",
            "Rank recommendations by consequence; do not present a comma correction as equal to a missing counter-argument.",
            "Distinguish your alternative preference from a defensible standard of improvement.",
          ],
        },
        {
          type: "exercise",
          title: "Read critically",
          instructions: "Choose the critical observation that best connects a textual feature to its effect.",
          items: [
            c(
              "A paragraph contains accurate evidence but no explanation of its relevance. Which critique is strongest?",
              ["The evidence is accurate, but without a warrant the reader cannot see how it supports the claim; add a sentence explaining the mechanism.", "The paragraph feels wrong.", "Add more sources."],
              0,
              "The first observation identifies the missing inferential link and proposes a proportionate structural addition.",
            ),
            c(
              "A report uses passive voice throughout, including where responsibility matters. What is the most useful critique?",
              ["Passive voice is always bad.", "The report needs more adjectives.", "The passive constructions obscure who approved and who corrected the process, weakening accountability; restore agents in those two sentences."],
              2,
              "The final critique is local, functional and tied to the document's professional purpose.",
            ),
            c(
              "A writer's opening is effective but unlike your preferred style. What should a critic do?",
              ["Recognise the effect and avoid treating difference as error", "Rewrite it in the critic's voice", "Delete it because it is unfamiliar"],
              0,
              "Criticism should assess purpose and effect rather than enforce the critic's stylistic identity.",
            ),
            c(
              "Which revision recommendation should receive highest priority?",
              ["A comma in a footnote", "A missing reason supporting the central recommendation", "A minor inconsistency in heading capitals"],
              1,
              "A missing warrant threatens the argument's validity; the others are local presentation issues.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Critique without flattening voice",
          instructions: "Critique this fictional opening: ‘In today's fast-paced world, innovation is more important than ever. Companies must leverage new technologies in order to remain competitive. This essay will explore the various benefits of digital transformation.’",
          items: [
            p(
              "Name one successful feature, or state that the extract establishes none yet, and explain its effect.",
              "Model answer: The plain declarative sentences are easy to process, but the extract establishes no distinctive voice or analytical tension; clarity currently serves only a general announcement.",
              "Acknowledge real local qualities without inflating their value.",
            ),
            p(
              "Identify two higher-order problems with textual evidence and rank them.",
              "Model answer: 1. The opening contains no contestable position: ‘various benefits’ names a topic rather than an argument. 2. The claims about pace and necessity are unsupported generalisations that could apply to any organisation. These are structural problems, not matters of word choice alone.",
              "Rank problems by their effect on the argument.",
            ),
            p(
              "Write two revision instructions: one structural and one line-level, including a feature to protect.",
              "Model answer: Structural: replace the general preamble with a specific tension and a bounded thesis about which companies benefit from digital transformation. Line-level: replace ‘must leverage’ with a precise action and remove ‘in today's fast-paced world’. Protect the concise declarative style if it is used to state the new claim directly.",
              "Give an actionable diagnosis and avoid prescribing a new voice wholesale.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What makes criticism evidence-based?", ["It states personal dislike", "It lists every grammatical rule", "It connects precise textual features to their effects"], 2, "Specific observation and analysis allow the writer to understand and test the judgement."),
        q(2, "Why distinguish structural and line-level problems?", ["Structure concerns spelling only", "They require different interventions and have different consequences", "Line editing is always more important"], 1, "Diagnosis determines where the writer should begin."),
        q(3, "How should a critic treat a style different from their own?", ["Evaluate whether it serves the text's purpose", "Assume it is inferior", "Rewrite it immediately"], 0, "Effective criticism is not a demand for stylistic conformity."),
        q(4, "Which recommendation should come first?", ["The smallest visible correction", "The change with the greatest consequence for the argument's success", "The change that adds the most words"], 1, "Priority should follow impact on meaning and persuasiveness."),
      ],
    },
    {
      slug: "a-final-portfolio-and-reflection",
      title: "A final portfolio and reflection",
      summary:
        "Curate a C2 portfolio that demonstrates controlled stylistic risk, sustained authorial judgement and an informed account of your editorial decisions.",
      objective:
        "Select and annotate three advanced texts, defend one deliberate stylistic choice and set an evidence-based plan for continued development.",
      minutes: 38,
      blocks: [
        {
          type: "text",
          title: "The C2 portfolio is a case for authorship",
          paragraphs: [
            "A mastery portfolio should not merely contain correct prose. It should demonstrate decisions: why an argument takes the form it does, why a metaphor is sustained, why a qualification is placed in a main clause and why a passage was cut. The portfolio makes those decisions visible so that style can be assessed as control rather than taste.",
            "Reflection should be as rigorous as the writing. Identify a recurring strength, a constraint that remains and an experiment with evidence. Authority at this level includes knowing when a stylistic risk paid off and when restraint would have served the reader better.",
          ],
        },
        {
          type: "table",
          title: "C2 portfolio evidence",
          columns: ["Dimension", "Mastery evidence", "Reflective question"],
          rows: [
            ["Intellectual authority", "A distinctive thesis changes the reader's framing.", "What did your argument make newly visible?"],
            ["Synthesis", "Sources are adjudicated, not merely accumulated.", "Which disagreement did you resolve or precisely preserve?"],
            ["Style", "Rhythm, emphasis and imagery serve meaning.", "Which choice is unmistakably yours, and why does it work?"],
            ["Risk control", "A demanding structure remains navigable.", "Where did you simplify the syntax without simplifying the thought?"],
            ["Editorial judgement", "Material was relocated or removed for a reason.", "What did you cut, and what improved because it was gone?"],
            ["Integrity", "Limits and affected perspectives remain visible.", "What inconvenient evidence or perspective changed your position?"],
          ],
          caption: "Each claim about your writing should point to an exact sentence, section or revision record.",
        },
        {
          type: "examples",
          title: "Model reflection and authorial note",
          items: [
            {
              text: "Authorial note: ‘I use short verdict sentences after longer analytical sequences to make the cost of a policy visible without announcing it as moral fact. In the transport essay, the sentence “The service survived; the setting did not” converts the preceding evidence into a judgement while preserving the difference between institutional continuity and public value.’",
              note: "The note names a repeatable feature, locates it and explains its rhetorical and ethical work.",
            },
            {
              text: "Editorial reflection: ‘I removed a 300-word history of the programme because it satisfied my interest in context rather than the reader's need to understand the decision. The section became shorter, but its argument became stronger when the remaining history was tied directly to the funding mechanism.’",
              note: "The reflection demonstrates judgement about the writer's own attachment and the reader's needs.",
            },
          ],
        },
        {
          type: "rules",
          title: "Assemble a portfolio with a clear case",
          items: [
            "Choose three texts that demonstrate argument, public voice and professional judgement, or an equally demanding range in your field.",
            "Submit final versions with a limited number of earlier states that show substantial revision.",
            "Write a 150–200 word authorial note naming two recurring choices and one boundary you deliberately observe.",
            "Annotate one structural decision, one line-level decision and one evidence decision with before-and-after material.",
            "Evaluate your work against the C2 grid and cite exact textual evidence.",
            "Set one six-month experiment with a measurable output and a planned review point.",
          ],
        },
        {
          type: "exercise",
          title: "Evaluate mastery evidence",
          instructions: "Choose the portfolio evidence that best demonstrates controlled authorship at C2.",
          items: [
            c(
              "Which item most convincingly demonstrates stylistic control?",
              ["An annotated passage showing how rhythm, emphasis and qualification work together for a stated effect", "A list of uncommon words", "A claim that the writer never revises"],
              0,
              "Mastery is visible in purposeful choices and the ability to explain and reproduce them.",
            ),
            c(
              "Which reflection is most intellectually honest?",
              ["Readers did not understand my central distinction, so I moved its definition forward and tested the revision with three non-specialists.", "My writing is now flawless.", "Feedback made me sad."],
              0,
              "The first version identifies an audience effect, makes a targeted change and seeks evidence of improvement.",
            ),
            c(
              "Which portfolio set offers the strongest range?",
              ["Three untitled drafts with no revisions", "A public commentary, a long-form argument and a formal decision paper with contrasting audiences", "Three variants of the same email"],
              1,
              "Different genres and audiences reveal the ability to sustain voice under different constraints.",
            ),
            c(
              "What is the best measure of a successful editorial experiment?",
              ["Whether every sentence becomes shorter", "Whether a defined reader response or writing measure improves", "Whether it makes the writer sound unusual"],
              1,
              "An experiment should test an effect, not simply introduce novelty.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Curate and defend your portfolio",
          instructions: "Complete the three tasks using your strongest course work or publishable substitutes.",
          items: [
            p(
              "Write a contents statement naming three texts, their audiences and the specific C2 capability each demonstrates.",
              "Model answer: 1. Public commentary for a regional readership: reframing and civic judgement. 2. Long-form policy paper for specialist and board readers: evidence adjudication and layered architecture. 3. Decision memorandum for senior managers: controlled emphasis, risk and accountable recommendation.",
              "Match each text to a capability rather than listing titles only.",
            ),
            p(
              "Write a 100–150 word authorial note identifying two recurring stylistic choices and one ethical boundary.",
              "Model answer: My prose tends to move from concrete observation to a short analytical verdict, using cadence to make distributional consequences visible. I also favour qualified main clauses over strings of hedges, so that uncertainty remains precise rather than diffuse. One boundary is deliberate: I do not use military or hunting metaphors for affected communities, because those frames can naturalise domination. These choices are most effective in commentary and less suitable for neutral technical summaries, where I reduce the cadence and foreground definitions.",
              "Name features, explain their function and acknowledge where they do not travel.",
            ),
            p(
              "Write a six-month development plan with one measurable output, one reader-feedback method and one success criterion.",
              "Model answer: Over six months, I will write four 800-word public arguments and have two reviewed by a policy specialist and two non-specialist readers. Each review will ask whether the thesis, main qualification and call to action can be identified after one reading. Success means at least three of the four texts meet all three criteria without reducing the evidence to slogans.",
              "Make the plan test both specialist accuracy and public accessibility.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What should a C2 portfolio make visible?", ["Purposeful stylistic and editorial decisions", "Only flawless final sentences", "The number of hours spent writing"], 0, "Authorship is demonstrated through controlled, explainable choices."),
        q(2, "What belongs in an authorial note?", ["A list of favourite words only", "A claim that style requires no explanation", "Recurring voice features, their function and boundaries"], 2, "A strong note connects technique to meaning and audience."),
        q(3, "Why annotate material that was cut?", ["To demonstrate editorial judgement and learning", "To prove every draft was bad", "To increase the portfolio length"], 0, "Deletion can reveal a sophisticated understanding of reader needs."),
        q(4, "What is the strongest sign of continued development?", ["Avoiding unfamiliar genres", "Repeating the same stylistic choices without testing them", "A measurable experiment reviewed with relevant readers"], 2, "Development requires purposeful variation and evidence of effect."),
      ],
    },
  ],
};
