import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit, LessonWord } from "@/data/lessons/types";

const verbPatternWords: LessonWord[] = [
  {
    term: "brook no",
    meaning: "to refuse to tolerate something, usually in a firm or formal statement",
    example: "The court will brook no interference with the independence of the jury.",
  },
  {
    term: "run counter to",
    meaning: "to contradict or oppose a principle, trend or expectation",
    example: "The proposed cuts run counter to the government's promise of investment.",
  },
  {
    term: "take issue with",
    meaning: "to disagree with a claim, method or decision",
    example: "I take issue with the assumption that price alone explains demand.",
  },
  {
    term: "bear out",
    meaning: "to support or confirm something that has been said",
    example: "The later testimony may bear out the witness's original account.",
  },
  {
    term: "give rise to",
    meaning: "to cause something to happen or exist",
    example: "The uncertainty may give rise to unnecessary speculation.",
  },
  {
    term: "predisposed to",
    meaning: "inclined by nature or prior experience to think or act in a certain way",
    example: "Years of covering crises left her predisposed to expect the worst.",
  },
];

const idiomaticCollocationWords: LessonWord[] = [
  {
    term: "make inroads into",
    meaning: "to gradually reduce the strength, extent or control of something",
    example: "Digital sales have begun to make inroads into a market once dominated by printed books.",
  },
  {
    term: "leave much to be desired",
    meaning: "to be far from satisfactory or adequate",
    example: "The consultation may leave much to be desired if most objections are ignored.",
  },
  {
    term: "come to the fore",
    meaning: "to become prominent or take a leading role",
    example: "Young researchers can come to the fore during an emergency response.",
  },
  {
    term: "go to great lengths",
    meaning: "to make exceptional efforts, often involving difficulty or inconvenience",
    example: "The archivist had to go to great lengths to verify the document's origin.",
  },
  {
    term: "pull strings",
    meaning: "to use personal influence to obtain an advantage or decision",
    example: "He was willing to pull strings to secure the contract for an inexperienced supplier.",
  },
  {
    term: "drive a hard bargain",
    meaning: "to negotiate firmly and seek highly favourable terms",
    example: "The union can drive a hard bargain while demand for skilled labour remains high.",
  },
];

const prepositionalPrecisionWords: LessonWord[] = [
  {
    term: "reconcile with",
    meaning: "to make two apparently conflicting facts or positions compatible",
    example: "It can be difficult to reconcile claimed savings with a rising total cost.",
  },
  {
    term: "replete with",
    meaning: "full of something, often in abundance",
    example: "The report is replete with examples but lacks a clear conclusion.",
  },
  {
    term: "devoid of",
    meaning: "completely lacking in a quality, feature or content",
    example: "The reply was courteous but devoid of any substantive answer.",
  },
  {
    term: "conducive to",
    meaning: "making a particular result or condition more likely",
    example: "Quiet spaces are conducive to concentrated study.",
  },
  {
    term: "impervious to",
    meaning: "not affected or influenced by something",
    example: "The claim appears impervious to contrary evidence.",
  },
  {
    term: "susceptible to",
    meaning: "easily influenced, harmed or affected by something",
    example: "Older buildings are especially susceptible to damage during flooding.",
  },
];

const chunkingWords: LessonWord[] = [
  {
    term: "the extent to which",
    meaning: "the degree or amount in which something is true or happens",
    example: "We need to examine the extent to which the policy reduced waiting times.",
  },
  {
    term: "not least because",
    meaning: "especially for the reason that follows",
    example: "The proposal is attractive, not least because it lowers the initial cost.",
  },
  {
    term: "insofar as",
    meaning: "to the degree that, used to limit the scope of a statement",
    example: "The model is useful insofar as it reflects how decisions are actually made.",
  },
  {
    term: "by the same token",
    meaning: "for the same reason, used to apply a comparable judgement",
    example: "If delay harms small firms, by the same token, uncertainty discourages investment.",
  },
  {
    term: "to the extent that",
    meaning: "so far as or to such a degree that, used to introduce a limit or consequence",
    example: "The explanation holds, to the extent that all respondents understood the question.",
  },
  {
    term: "what amounts to",
    meaning: "something that is effectively equivalent to a stated action or result",
    example: "Removing dissent from the minutes is what amounts to erasing part of the debate.",
  },
];

export const c2VocabularyUnit2: LessonUnit = {
  title: "Collocation and chunking",
  description:
    "Control complex verb complements, idiomatic partnerships, exact prepositional relations and multi-word chunks that sustain fluent argument.",
  lessons: [
    {
      slug: "advanced-verb-patterns",
      title: "Advanced verb patterns",
      summary:
        "Use six advanced verb patterns with the correct complements to disagree, contradict, confirm, cause and describe inclination.",
      objective:
        "Retain the complement structure of each pattern and distinguish logical force from tone.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "The pattern carries the stance",
          paragraphs: [
            "Advanced verb patterns are reusable argumentative moves. Take issue with identifies disagreement with a specific claim; run counter to highlights contradiction with a principle or trend. Both can be firm, but they position the object of disagreement differently.",
            "Bear out confirms an existing claim rather than proving it for the first time. Give rise to introduces an effect, often with a formal or analytical tone. Be predisposed to describes inclination shaped by nature or experience, not an inevitable outcome.",
          ],
        },
        {
          type: "wordbank",
          title: "Six patterns with controlled complements",
          intro:
            "Learn the words after each verb as part of the pattern.",
          words: verbPatternWords,
        },
        {
          type: "table",
          title: "Complement and argumentative function",
          caption:
            "The final column shows what kind of object typically follows the expression.",
          columns: ["Pattern", "Function", "Typical complement"],
          rows: [
            ["brook no", "refuse tolerance", "interference / compromise / dissent"],
            ["run counter to", "contradict", "a principle / trend / expectation"],
            ["take issue with", "disagree", "a claim / method / decision"],
            ["bear out", "confirm", "a claim / account / prediction"],
            ["give rise to", "cause", "a problem / question / emotion"],
            ["be predisposed to", "incline", "a belief / behaviour / condition"],
          ],
        },
        {
          type: "exercise",
          title: "Preserve the pattern",
          instructions:
            "Choose the complete expression that is grammatical and communicates the intended logical relationship.",
          items: [
            c(
              "The later records supported the original prediction. In other words, they ___ the prediction.",
              ["took issue with", "bore out", "gave rise to"],
              1,
              "Bear out means support or confirm something previously stated.",
            ),
            c(
              "The proposed cuts contradict the party's repeated promise to invest. They ___ that promise.",
              ["brook no", "are predisposed to", "run counter to"],
              2,
              "Run counter to means oppose or contradict a principle, trend or stated position.",
            ),
            c(
              "The chair will not accept any challenge to the jury's independence. The formal completion is 'The chair will ___'.",
              ["brook no such interference", "bear out such interference", "give rise to such interference"],
              0,
              "Brook no means refuse to tolerate and conventionally precedes a noun such as interference.",
            ),
            c(
              "Repeated exposure to emergency coverage may incline her to expect disaster. She may ___ catastrophe.",
              ["be predisposed to", "take issue with", "run counter to"],
              0,
              "Be predisposed to describes an inclination produced by prior experience.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Deploy a pattern under questioning",
          instructions:
            "Write or say the complete pattern, then compare with the model. Keep the complement explicit.",
          items: [
            p(
              "Disagree with a specific assumption without challenging the entire study.",
              "Model answer: I take issue with the assumption that all respondents interpreted the scale consistently.",
            ),
            p(
              "Write a sentence saying that the uncertainty created rumours.",
              "The uncertainty gave rise to rumours about a merger.",
              "Use give rise to + noun.",
            ),
            p(
              "Explain why predisposed is weaker than destined.",
              "Predisposed means inclined by prior factors; destined implies a future outcome regarded as fixed.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which pattern means confirm something previously stated?",
          ["give rise to", "brook no", "bear out"],
          2,
          "Bear out adds support that confirms a claim, account or prediction.",
        ),
        q(
          2,
          "Why is 'run counter with' incorrect in 'the evidence runs counter with our expectation'?",
          ["The verb takes no complement.", "The established preposition is to.", "Counter can never follow run."],
          1,
          "The fixed pattern is run counter to + noun.",
        ),
        q(
          3,
          "What is the most precise complement after brook no?",
          ["a noun such as interference", "an -ing form in every case", "the preposition about"],
          0,
          "Brook no is commonly followed directly by a noun naming what will not be tolerated.",
        ),
        q(
          4,
          "Which sentence uses be predisposed to accurately?",
          ["The error was predisposed to correction.", "His background predisposed him to distrust abrupt changes.", "The background be predisposed to distrust."],
          1,
          "The subject is the person who is inclined, and to introduces the behaviour or attitude.",
        ),
      ],
    },
    {
      slug: "idiomatic-collocations",
      title: "Idiomatic collocations",
      summary:
        "Use six idiomatic partnerships that describe gradual change, insufficiency, prominence, exceptional effort, influence and firm negotiation.",
      objective:
        "Distinguish idiomatic meaning from literal components and control the evaluative force of each expression.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "The whole partnership sets the meaning",
          paragraphs: [
            "Make inroads into describes gradual reduction in the strength or extent of something, not simply physical entry. Leave much to be desired is a strongly negative evaluation of inadequacy, while drive a hard bargain recognises firmness in negotiation and can be admiring or critical.",
            "Pull strings implies influence used to secure an advantage and often carries a suggestion of unfair access. Go to great lengths, by contrast, evaluates exceptional effort. The same verb in another partnership would not carry either implication.",
          ],
        },
        {
          type: "wordbank",
          title: "Six idiomatic partnerships for analysis",
          intro:
            "Notice the direction of change and the evaluation in each expression.",
          words: idiomaticCollocationWords,
        },
        {
          type: "table",
          title: "Meaning beyond the literal image",
          caption:
            "Use the evaluation column to judge whether the phrase suits the writer's stance.",
          columns: ["Expression", "Core meaning", "Typical evaluation"],
          rows: [
            ["make inroads into", "gradually reduce extent or control", "descriptive"],
            ["leave much to be desired", "be seriously inadequate", "strongly negative"],
            ["come to the fore", "become prominent", "often positive"],
            ["go to great lengths", "make exceptional efforts", "often approving"],
            ["pull strings", "use influence for advantage", "often implies unfairness"],
            ["drive a hard bargain", "negotiate for favourable terms", "admiring or critical"],
          ],
        },
        {
          type: "exercise",
          title: "Choose the idiomatic partnership",
          instructions:
            "Select the expression whose meaning and evaluative force fit the sentence.",
          items: [
            c(
              "Online retailers are gradually reducing the market share once held by department stores. They are ___.",
              ["coming to the fore", "driving a hard bargain", "making inroads into that market"],
              2,
              "Make inroads into describes a gradual reduction in established control or extent.",
            ),
            c(
              "The design is elegant, but the sound insulation is seriously inadequate. The insulation ___.",
              ["comes to the fore", "leaves much to be desired", "runs counter to"],
              1,
              "Leave much to be desired means be far from satisfactory.",
            ),
            c(
              "The researchers made exceptional efforts to recover the damaged recordings. They ___.",
              ["pulled strings", "went to great lengths", "left much to be desired"],
              1,
              "Go to great lengths evaluates substantial effort, especially when it involves difficulty.",
            ),
            c(
              "The supplier negotiated firmly and secured a price near the lower limit. The supplier ___.",
              ["drove a hard bargain", "made inroads into the bargain", "came to the bargain"],
              0,
              "Drive a hard bargain means negotiate firmly for highly favourable terms.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Use and evaluate the idiom",
          instructions:
            "Answer in complete sentences, then compare with the model. Add context where the evaluation is double-edged.",
          items: [
            p(
              "Use pull strings in a critical sentence about a public appointment.",
              "Model answer: Critics alleged that senior officials pulled strings to secure the contract for a connected company.",
            ),
            p(
              "Write one positive and one cautious interpretation of drive a hard bargain.",
              "Model answer: She drove a hard bargain and protected the funding. He drove a hard bargain so aggressively that the partnership collapsed.",
            ),
            p(
              "Explain why make inroads into is more precise than make progress in when describing a declining market share.",
              "Inroads into specifies gradual erosion of established extent or control, which directly describes the market-share relationship.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which expression most strongly signals inadequacy?",
          ["come to the fore", "bear out", "leave much to be desired"],
          2,
          "Leaving much to be desired is a forceful negative evaluation of quality.",
        ),
        q(
          2,
          "What does pull strings suggest beyond ordinary persuasion?",
          ["The use of personal influence to secure an advantage", "A gradual decline in control", "Exceptional physical effort"],
          0,
          "The expression implies access to influence and often suggests unfair or hidden intervention.",
        ),
        q(
          3,
          "Why can drive a hard bargain be either positive or negative?",
          ["It has no meaning.", "Firm negotiation can protect interests or damage a relationship.", "It always involves dishonesty."],
          1,
          "The evaluative force depends on the outcome and the speaker's attitude.",
        ),
        q(
          4,
          "Which sentence uses come to the fore naturally?",
          ["A new generation of leaders came to the fore during the crisis.", "The price came to the fore on the receipt.", "The road came to the fore at dawn."],
          0,
          "Come to the fore means become prominent or take a leading role.",
        ),
      ],
    },
    {
      slug: "prepositional-precision",
      title: "Prepositional precision",
      summary:
        "Control six advanced adjective-verb preposition patterns that express compatibility, abundance, absence, enabling conditions and susceptibility.",
      objective:
        "Select prepositions by the relation intended and distinguish susceptibility from imperviousness and repletion from deficiency.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Prepositions encode the relationship",
          paragraphs: [
            "At this level, a preposition is not decorative. Devoid of expresses complete absence; replete with expresses abundance; conducive to expresses a condition that makes an outcome more likely. Reversing the preposition changes both idiomacy and meaning.",
            "Susceptible to and impervious to form a controlled contrast: one indicates vulnerability to influence or harm, the other resistance to it. Reconcile with asks whether apparently conflicting facts can be made compatible; it does not necessarily claim that reconciliation has succeeded.",
          ],
        },
        {
          type: "wordbank",
          title: "Six patterns of relation and condition",
          intro:
            "Attend to whether the preposition introduces a conflicting claim, content, condition or influence.",
          words: prepositionalPrecisionWords,
        },
        {
          type: "table",
          title: "Keep opposite relations distinct",
          caption:
            "The pairs prevent common shifts from absence to abundance and vulnerability to resistance.",
          columns: ["Pattern", "Relation", "Contrast or warning"],
          rows: [
            ["replete with", "full of", "opposite: devoid of"],
            ["devoid of", "completely lacking", "not merely: short of"],
            ["conducive to", "helps make possible or likely", "does not guarantee the result"],
            ["impervious to", "unaffected by", "opposite: susceptible to"],
            ["susceptible to", "vulnerable to", "may imply harm, influence or change"],
            ["reconcile with", "make compatible", "often used in questions or negatives"],
          ],
        },
        {
          type: "exercise",
          title: "Choose the exact relation",
          instructions:
            "Select the complete phrase that expresses the intended relationship.",
          items: [
            c(
              "The reply contains no substantive answer. It is ___.",
              ["replete with substance", "devoid of substance", "conducive to substance"],
              1,
              "Devoid of means completely lacking, which matches the absence of a substantive answer.",
            ),
            c(
              "The explanation contradicts the published figures and cannot be made compatible with them. It cannot ___ the figures.",
              ["reconcile with", "be replete with", "be susceptible to"],
              0,
              "Reconcile with means make apparently conflicting facts or positions compatible.",
            ),
            c(
              "A calm environment helps deep work become more likely. It is ___ deep work.",
              ["impervious to", "conducive to", "devoid of"],
              1,
              "Conducive to describes a condition that makes an outcome more likely without guaranteeing it.",
            ),
            c(
              "The theory remains unchanged even when evidence contradicts it. It appears ___ criticism.",
              ["susceptible to", "replete with", "impervious to"],
              2,
              "Impervious to means unaffected or uninfluenced by something, including contrary evidence or criticism.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write the relation explicitly",
          instructions:
            "Write full sentences, then compare with the models. Do not replace a precise pattern with a vague adjective.",
          items: [
            p(
              "Use susceptible to in a sentence about a material that is easily damaged by frost.",
              "Model answer: The cheap sealant is susceptible to damage from frost.",
            ),
            p(
              "Use replete with and devoid of in two contrasting sentences about an article.",
              "Model answer: The article is replete with anecdotes. It is devoid of reliable evidence.",
            ),
            p(
              "Explain why conducive to does not mean caused by.",
              "A conducive condition makes an outcome more likely, but it does not establish that it directly caused the outcome.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which pair expresses abundance and complete absence?",
          ["reconcile with / conducive to", "susceptible to / impervious to", "replete with / devoid of"],
          2,
          "Replete with and devoid of form a direct contrast in content or quality.",
        ),
        q(
          2,
          "What does impervious to criticism mean?",
          ["Criticism has no effect on the person or idea.", "Criticism causes immediate change.", "Criticism is deserved."],
          0,
          "Impervious describes resistance to influence or effect.",
        ),
        q(
          3,
          "Why is 'conducive for' incorrect in 'conditions conducive for learning'?",
          ["Learning cannot be a condition.", "The established preposition is to.", "Conducive never takes a complement."],
          1,
          "Conducive to + noun or -ing form is the conventional pattern.",
        ),
        q(
          4,
          "What does 'It is hard to reconcile the figures with the report' imply?",
          ["The figures have been destroyed.", "The two accounts appear incompatible.", "The report contains too much data."],
          1,
          "Reconcile with concerns compatibility between conflicting facts or accounts.",
        ),
      ],
    },
    {
      slug: "lexical-chunks-in-fluent-speech",
      title: "Lexical chunks in fluent speech",
      summary:
        "Use six complex chunks to limit claims, introduce reasons, transfer judgements and characterise effective equivalence in speech.",
      objective:
        "Distinguish overlapping chunks by discourse function and preserve their clause structure under pressure.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Chunks buy time while shaping thought",
          paragraphs: [
            "Complex chunks let a speaker frame a proposition before completing it. The extent to which introduces the degree of something; to the extent that often introduces either a limitation or a consequence. Their structures overlap, but the clause that follows determines the precise function.",
            "By the same token transfers reasoning from one case to a comparable one. What amounts to characterises an action as effectively equivalent to something else. Not least because foregrounds a particularly important reason without suggesting it is the only reason.",
          ],
        },
        {
          type: "wordbank",
          title: "Six chunks for fluent qualification",
          intro:
            "Read the examples aloud and notice how each chunk controls the clause that follows.",
          words: chunkingWords,
        },
        {
          type: "dialogue",
          title: "A policy discussion at pace",
          intro:
            "The speakers use chunks to qualify evidence, transfer reasoning and foreground a reason without losing fluency.",
          lines: [
            {
              speaker: "Analyst",
              text: "We need evidence about the extent to which the pilot changed attendance.",
            },
            {
              speaker: "Director",
              text: "It is promising, not least because the lowest-attendance schools improved most.",
            },
            {
              speaker: "Critic",
              text: "The model is persuasive, insofar as it reflects how schools actually make decisions.",
            },
            {
              speaker: "Analyst",
              text: "If the absence of a control group weakens the inference, by the same token, it weakens claims about long-term impact.",
            },
            {
              speaker: "Director",
              text: "To the extent that schools reported consistently, the comparison remains useful.",
            },
            {
              speaker: "Critic",
              text: "But presenting correlation as causation amounts to overstating the evidence.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the discourse function",
          instructions:
            "Select the chunk whose structure and meaning fit the sentence.",
          items: [
            c(
              "The measure succeeded ___ the questions were understood consistently. The sentence introduces a limit.",
              ["not least because", "to the extent that", "what amounts to"],
              1,
              "To the extent that introduces the condition or degree within which the claim holds.",
            ),
            c(
              "The plan is attractive, ___ it reduces the initial cost. The phrase foregrounds an important reason.",
              ["by the same token", "the extent to which", "not least because"],
              2,
              "Not least because introduces a reason of special importance without making it exclusive.",
            ),
            c(
              "If the sample skews older, ___ the recommendations may not fit younger users. The reasoning transfers to a comparable conclusion.",
              ["by the same token", "what amounts to", "insofar as"],
              0,
              "By the same token applies comparable reasoning from one proposition to another.",
            ),
            c(
              "Calling every criticism disloyalty ___ suppressing legitimate debate. The chunk means effectively equivalent to.",
              ["the extent to which", "amounts to", "not least because"],
              1,
              "What amounts to (or amounts to after the gerund) characterises an action as effectively equivalent to another.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Speak in qualified units",
          instructions:
            "Say each answer aloud in one breath, then compare with the model. Aim for controlled pace rather than speed alone.",
          items: [
            p(
              "Use the extent to which to ask about the degree of a policy's influence.",
              "Model answer: We should examine the extent to which the policy influenced public behaviour.",
            ),
            p(
              "Use insofar as to limit the value of a model.",
              "Model answer: The model is reliable insofar as its assumptions reflect the real market.",
            ),
            p(
              "Use by the same token and what amounts to in one two-sentence response.",
              "Model answer: If the figures exclude temporary staff, by the same token, they understate total costs. Omitting that category amounts to presenting an incomplete budget.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which chunk foregrounds a particularly important reason?",
          ["what amounts to", "insofar as", "not least because"],
          2,
          "Not least because signals that the following reason is especially significant.",
        ),
        q(
          2,
          "What is the main function of by the same token?",
          ["To transfer comparable reasoning", "To introduce a definition", "To state a numerical total"],
          0,
          "It applies the same principle to a related case or conclusion.",
        ),
        q(
          3,
          "Why can to the extent that introduce different kinds of clause?",
          ["It has no fixed meaning.", "It can mark either a limit on a claim or a degree producing a consequence.", "It is only used in questions."],
          1,
          "The relationship in the following clause determines whether the chunk marks limitation or consequence.",
        ),
        q(
          4,
          "Which sentence uses what amounts to accurately?",
          [
            "What amounts to the cost remains unknown.",
            "The delay, what amounts to a vote of no confidence, damaged the talks.",
            "What amounts to because the evidence was clear.",
          ],
          1,
          "The phrase characterises the delay as effectively equivalent to a vote of no confidence.",
        ),
      ],
    },
  ],
};
