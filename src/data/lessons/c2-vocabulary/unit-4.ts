import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit, LessonWord } from "@/data/lessons/types";

const voiceWords: LessonWord[] = [
  {
    term: "austere",
    meaning: "plain, restrained and severe in style",
    example: "The austere announcement stated only the essential facts.",
  },
  {
    term: "effervescent",
    meaning: "lively, enthusiastic and sparkling in manner or style",
    example: "Her effervescent introduction made a technical subject feel inviting.",
  },
  {
    term: "laconic",
    meaning: "using very few words, often with dry or pointed effect",
    example: "His laconic reply, 'We managed,' concealed the scale of the rescue.",
  },
  {
    term: "rhapsodic",
    meaning: "expressing intense, often extravagant enthusiasm or praise",
    example: "The review becomes rhapsodic whenever it describes the composer's final work.",
  },
  {
    term: "sardonic",
    meaning: "grimly or bitterly mocking",
    example: "The sardonic commentary treated every official reassurance as evidence of failure.",
  },
  {
    term: "understated",
    meaning: "presented with deliberate restraint so that its significance is implied",
    example: "The understated final scene conveys grief without naming the emotion.",
  },
];

const clicheWords: LessonWord[] = [
  {
    term: "platitude",
    meaning: "a trite remark presented as if it offers meaningful comfort or wisdom",
    example: "Telling the exhausted team that everything happens for a reason is a platitude.",
  },
  {
    term: "truism",
    meaning: "a statement so obviously true that it adds little unless the context makes it useful",
    example: "That funding affects outcomes is a truism; the report needed to explain how.",
  },
  {
    term: "cliché",
    meaning: "an expression or idea so overused that it has lost freshness and impact",
    example: "Calling the city a melting pot has become a cliché unless the image is examined critically.",
  },
  {
    term: "jargon",
    meaning: "specialised language that may facilitate expert communication or exclude non-specialists",
    example: "The memo's jargon made the decision impossible for most residents to evaluate.",
  },
  {
    term: "redundancy",
    meaning: "unnecessary repetition that adds no meaning or emphasis",
    example: "The phrase 'an unexpected surprise' is a redundancy.",
  },
  {
    term: "lexical variation",
    meaning: "the use of appropriate alternative words to avoid awkward or excessive repetition",
    example: "Lexical variation replaces the second repetition of report with analysis without changing the reference.",
  },
];

const knowledgeWords: LessonWord[] = [
  {
    term: "receptive knowledge",
    meaning: "the ability to understand a word when reading or hearing it",
    example: "Her receptive knowledge of legal terms is strong, but she rarely uses them herself.",
  },
  {
    term: "productive knowledge",
    meaning: "the ability to retrieve and use a word accurately in speech or writing",
    example: "The exercise builds productive knowledge by requiring a sentence from memory.",
  },
  {
    term: "interference",
    meaning: "the disruptive influence of one learned item or language on accurate recall of another",
    example: "Interference made her use result from where the sentence required result in.",
  },
  {
    term: "retention",
    meaning: "the preservation of knowledge over time",
    example: "Delayed testing showed better retention than an immediate review.",
  },
  {
    term: "transfer",
    meaning: "the ability to apply learned knowledge to a new task, topic or context",
    example: "Transfer became clear when she used the collocation accurately in an unseen meeting.",
  },
  {
    term: "calibration",
    meaning: "the accuracy of one's judgement about how well one knows something",
    example: "Poor calibration led him to predict success after only rereading the list.",
  },
];

const personalStyleWords: LessonWord[] = [
  {
    term: "signature motif",
    meaning: "a recurring image, idea or pattern that becomes distinctive of a writer's work",
    example: "The image of thresholds becomes a signature motif across the collection.",
  },
  {
    term: "rhythmic patterning",
    meaning: "the deliberate arrangement of sentence lengths, stresses or repeated structures",
    example: "The rhythmic patterning builds from short clauses into a measured final sentence.",
  },
  {
    term: "semantic prosody",
    meaning: "the consistent attitudinal aura carried by a word's typical collocations",
    example: "Analysis of semantic prosody shows that cause often partners with problems or damage.",
  },
  {
    term: "lexical density",
    meaning: "the proportion of content-bearing words in a text",
    example: "The abstract has high lexical density because it compresses many concepts into few function words.",
  },
  {
    term: "connotative field",
    meaning: "a cluster of words that share related associations within a text or context",
    example: "Battle, siege and surrender form a connotative field of conflict.",
  },
  {
    term: "audience design",
    meaning: "the deliberate shaping of language for the needs and expectations of anticipated readers or listeners",
    example: "The writer's audience design explains why the technical term is glossed for general readers.",
  },
];

export const c2VocabularyUnit4: LessonUnit = {
  title: "Personal lexicon",
  description:
    "Develop a recognisable voice, eliminate stale and excessive wording, build calibrated productive knowledge and complete a final lexical style project.",
  lessons: [
    {
      slug: "style-voice-and-word-choice",
      title: "Style, voice and word choice",
      summary:
        "Distinguish six stylistic temperaments and make deliberate choices about restraint, energy, brevity and emotional distance.",
      objective:
        "Separate voice from topic and stance, and construct two contrasting versions of the same message through controlled diction.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Voice is a pattern of choices",
          paragraphs: [
            "Style describes the characteristic way language is handled; voice is the recognisable identity or presence created by those choices across a text. An austere voice favours restraint, while an effervescent voice uses energy and movement. Neither is inherently superior.",
            "Word choice interacts with syntax, rhythm and selection of detail. A laconic sentence gains force from what it withholds; an understated scene invites inference. Sardonic and rhapsodic language both intensify feeling, but one turns it into bitter mockery and the other into extravagant praise.",
          ],
        },
        {
          type: "wordbank",
          title: "Six words for locating stylistic temperament",
          intro:
            "Use these adjectives to describe patterns across a passage, not isolated words alone.",
          words: voiceWords,
        },
        {
          type: "table",
          title: "Diction, syntax and implied attitude",
          caption:
            "The effects overlap; voice emerges from repeated combinations.",
          columns: ["Style", "Typical lexical tendency", "Possible syntactic tendency"],
          rows: [
            ["austere", "plain, exact, restrained", "lean sentences; little ornament"],
            ["effervescent", "vivid, buoyant, energetic", "movement and varied pace"],
            ["laconic", "few words; pointed compression", "short utterances and omission"],
            ["rhapsodic", "elevated and abundant praise", "expansive clauses and exclamation"],
            ["sardonic", "bleak or cutting judgement", "dry reversals and sharp contrasts"],
            ["understated", "quiet, indirect significance", "subordination and implication"],
          ],
        },
        {
          type: "exercise",
          title: "Identify the stylistic temperament",
          instructions:
            "Choose the adjective that best describes the passage's characteristic manner.",
          items: [
            c(
              "The prose contains no metaphors, few adjectives and short, exact sentences. Its manner is ___.",
              ["effervescent", "austere", "rhapsodic"],
              1,
              "Austere describes plain, severe restraint in style.",
            ),
            c(
              "The narrator greets each new disaster with a bitter joke about official competence. The voice is ___.",
              ["sardonic", "understated", "laconic"],
              0,
              "Sardonic adds grim or bitter mockery to the narrator's response.",
            ),
            c(
              "The review calls the performance 'a celestial event that turns ordinary breath into eternal light'. Its style is ___.",
              ["austere", "rhapsodic", "laconic"],
              1,
              "Rhapsodic language expresses extravagant enthusiasm and elevated praise.",
            ),
            c(
              "Instead of announcing her grief, the writer describes an untouched coat on a chair. The effect is ___.",
              ["overstated", "effervescent", "understated"],
              2,
              "Understatement conveys significance indirectly and relies on implication.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Compose the same message twice",
          instructions:
            "Write both versions before checking the models. Preserve the facts while changing the stylistic temperament.",
          items: [
            p(
              "Announce a cancelled concert in an austere style and an effervescent style.",
              "Model answer: Austere: 'Tonight's concert is cancelled because of a technical fault.' Effervescent: 'What a disappointment: a technical hitch has stolen tonight's spotlight, but your enthusiasm for the music still shines brightly!'",
            ),
            p(
              "Write a laconic response to 'How were the negotiations?'",
              "Model answer: 'Long,' he said. 'But finished.'",
              "Brevity should still communicate the outcome.",
            ),
            p(
              "Explain why understated is not the same as vague.",
              "Understatement deliberately limits expression while preserving meaning; vagueness leaves the meaning unclear.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which style relies most on compression and withholding?",
          ["laconic", "rhapsodic", "effervescent"],
          0,
          "Laconic style uses very few words and often gains force through omission.",
        ),
        q(
          2,
          "What makes sardonic different from merely enthusiastic?",
          ["Sardonic is always grammatical.", "Sardonic turns feeling into bitter or cutting mockery.", "Sardonic avoids adjectives."],
          1,
          "Sardonic humour is grimly or bitterly mocking rather than celebratory.",
        ),
        q(
          3,
          "What is the relationship between style and voice?",
          ["They are identical terms.", "Voice is the recognisable presence created by recurring stylistic choices.", "Voice concerns only the topic."],
          1,
          "Style consists of characteristic language choices; voice emerges from their pattern across a text.",
        ),
        q(
          4,
          "Which sentence is best described as austere?",
          ["The dawn blushed upon the trembling sea.", "What a transcendent miracle!", "The meeting ended at 16:20."],
          2,
          "The plain factual sentence avoids ornament and emotional display.",
        ),
      ],
    },
    {
      slug: "avoiding-cliche-and-repetition",
      title: "Avoiding cliché and repetition",
      summary:
        "Distinguish platitude, truism, cliché, jargon and redundancy, then use lexical variation without distorting meaning or overloading prose.",
      objective:
        "Edit stale and repetitive language by testing informational value, audience access and referential accuracy.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Freshness and precision are not the same as novelty",
          paragraphs: [
            "A platitude offers trite comfort or wisdom; a truism states something obvious. Either can be legitimate when the context requires it, but both become evasive when evidence or action is needed. A cliché is stale through overuse, not through simplicity.",
            "Jargon can be efficient among specialists and exclusionary elsewhere. Redundancy repeats without adding meaning, while lexical variation can prevent awkward recurrence. Do not replace every repeated technical term: consistent terminology often supports cohesion better than decorative synonyms.",
          ],
        },
        {
          type: "wordbank",
          title: "Six concepts for editing stale language",
          intro:
            "The meanings separate lack of freshness, lack of information, exclusion and unnecessary repetition.",
          words: clicheWords,
        },
        {
          type: "examples",
          title: "Edit the function, not only the wording",
          intro:
            "Each revision states what the sentence needs to do for its reader.",
          items: [
            {
              text: "Before: At the end of the day, time will tell whether the plan is a success.",
              note: "A stack of clichés delays the point; name the uncertainty or evidence required instead.",
            },
            {
              text: "After: The pilot's success will depend on whether waiting times fall without reducing care quality.",
              note: "The revision identifies the actual criteria rather than offering generic wisdom.",
            },
            {
              text: "Before: We need to leverage our core competencies to action the deliverables.",
              note: "Jargon and vague abstractions hide the responsible people and actions.",
            },
            {
              text: "After: The design team must test the prototype and submit the results by Friday.",
              note: "Specific actors and verbs improve accountability and audience access.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Diagnose the editorial problem",
          instructions:
            "Choose the term that most accurately identifies the issue in each phrase.",
          items: [
            c(
              "'Every cloud has a silver lining' is offered instead of explaining how staff will be supported. The remark is a ___.",
              ["truism", "platitude", "redundancy"],
              1,
              "A platitude is trite advice or comfort that fails to address the practical need.",
            ),
            c(
              "'The budget depends on available funds' adds no specific information. It is a ___.",
              ["jargon", "cliché", "truism"],
              2,
              "A truism is obviously true and therefore low in informational value.",
            ),
            c(
              "'An unexpected surprise' repeats the same basic idea. It is a ___.",
              ["redundancy", "signature motif", "semantic prosody"],
              0,
              "Redundancy is unnecessary repetition that adds no new meaning.",
            ),
            c(
              "'We must operationalise the paradigm shift' is unclear to general readers. The main problem is ___.",
              ["lexical variation", "jargon", "understatement"],
              1,
              "Jargon uses specialised or inflated language that obscures meaning for non-specialists.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Revise for information and access",
          instructions:
            "Write a revised sentence and a brief reason, then compare with the models.",
          items: [
            p(
              "Replace 'It is a well-known fact that exercise benefits health' with an informative sentence.",
              "Model answer: In the trial, participants who walked three times a week reported better sleep than the control group.",
              "Replace the truism with specific evidence.",
            ),
            p(
              "Rewrite 'The report, the study and the document all reached a similar conclusion' with controlled lexical variation.",
              "Model answer: The report reached that conclusion, and the study supported it; the document summarised both.",
              "Keep the reference clear instead of inventing unnecessary synonyms.",
            ),
            p(
              "Explain why repeating a key technical term may be better than lexical variation.",
              "Consistent terminology prevents ambiguity and creates cohesion; variation is useful only when it preserves the exact reference.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What distinguishes a truism from a cliché?",
          ["A cliché is always technical.", "They are exact synonyms.", "A truism lacks informational value because it is obvious; a cliché lacks freshness through overuse."],
          2,
          "The problems differ: obviousness for a truism, staleness for a cliché.",
        ),
        q(
          2,
          "Why can jargon be appropriate?",
          ["It can communicate complex shared concepts efficiently among specialists.", "It excludes all readers.", "It always increases accuracy."],
          0,
          "Specialised vocabulary is efficient when the audience shares the relevant expertise.",
        ),
        q(
          3,
          "Which revision best removes redundancy?",
          ["At this moment in time, now we begin.", "We begin now.", "The beginning will commence at its start."],
          1,
          "The direct sentence preserves the meaning without unnecessary repetition.",
        ),
        q(
          4,
          "When can lexical variation weaken a text?",
          ["When it preserves a consistent reference", "When synonyms blur distinctions that the writer needs", "When it removes every repeated word"],
          1,
          "Variation should not conceal whether two terms refer to the same thing or to different things.",
        ),
      ],
    },
    {
      slug: "building-a-sustainable-review-system",
      title: "Building a sustainable review system",
      summary:
        "Design a review system that separates receptive from productive knowledge, manages interference and calibrates confidence through transfer tasks.",
      objective:
        "Audit your lexical knowledge honestly and build a repeatable routine that measures use rather than familiarity.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Sustainability comes from diagnostic feedback",
          paragraphs: [
            "A review system fails when it measures only how much material feels familiar. Receptive knowledge is understanding; productive knowledge is accurate retrieval and use. A large passive vocabulary does not automatically provide access under pressure.",
            "Interference occurs when one learned item disrupts another, as when similar prepositions compete. Calibration means judging mastery accurately. Transfer tests whether knowledge survives a change of task, topic or audience, making it a better indicator of usable control than another recognition quiz.",
          ],
        },
        {
          type: "wordbank",
          title: "Six concepts for auditing lexical control",
          intro:
            "Use each term to describe a specific part of the learning cycle.",
          words: knowledgeWords,
        },
        {
          type: "table",
          title: "A sustainable weekly cycle",
          caption:
            "The cycle uses varied evidence of knowledge rather than one repeated study activity.",
          columns: ["Stage", "Action", "Diagnostic evidence"],
          rows: [
            ["Audit", "sample old words without seeing their meanings", "calibration"],
            ["Produce", "write a new sentence and a collocation", "productive knowledge"],
            ["Contrast", "compare interfering near-synonyms or patterns", "interference control"],
            ["Transfer", "use the item in an unfamiliar scenario", "transfer"],
            ["Recheck", "repeat a sample after several days", "retention"],
          ],
        },
        {
          type: "exercise",
          title: "Choose the right diagnostic",
          instructions:
            "Select the concept that identifies the learner's actual knowledge or the problem in the system.",
          items: [
            c(
              "A learner understands every word in an article but cannot use any in discussion. The learner has strong receptive knowledge but weak ___.",
              ["retention", "productive knowledge", "calibration"],
              1,
              "Productive knowledge concerns retrieving and using language, not merely understanding it.",
            ),
            c(
              "A learner keeps choosing account on instead of account for in new sentences. The error shows ___.",
              ["interference", "transfer", "understatement"],
              0,
              "Interference is the disruptive influence of one learned pattern on another.",
            ),
            c(
              "A learner predicts 90% mastery after rereading, then recalls only 40%. The learner's ___ is poor.",
              ["receptive range", "calibration", "lexical variation"],
              1,
              "Calibration concerns how accurately a learner judges their own knowledge.",
            ),
            c(
              "A learner uses the expression accurately in a new professional email after studying it in a quiz. This demonstrates ___.",
              ["retention alone", "redundancy", "transfer"],
              2,
              "Transfer means applying knowledge to a new task or context.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a small, repeatable system",
          instructions:
            "Choose no more than twelve target items so that the routine is realistic to sustain.",
          items: [
            p(
              "Describe one receptive and one productive test for the same word.",
              "Model answer: Choose the correct meaning from three options for receptive knowledge; write an original sentence with the correct collocation for productive knowledge.",
            ),
            p(
              "Design a transfer task for three collocations from this course.",
              "Model answer: Draft a short meeting update that naturally uses draw a distinction, exercise caution and reach a consensus, then check the exact partners.",
            ),
            p(
              "Write a weekly routine that includes one interference check and one delayed sample.",
              "Model answer: On Monday, produce sentences for twelve items. On Thursday, contrast three near-synonyms and rewrite any errors. On Sunday, recall a random sample without notes and record the results.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the clearest evidence of productive knowledge?",
          ["Using it accurately in a new sentence", "Remembering seeing it last week", "Recognising a word in a list"],
          0,
          "Production requires retrieval and use, not simply familiarity.",
        ),
        q(
          2,
          "What does poor calibration cause?",
          ["Automatic transfer", "Better retention in every case", "Overconfidence or underestimation of mastery"],
          2,
          "Inaccurate self-judgement can lead a learner to stop practising too early or spend time unnecessarily.",
        ),
        q(
          3,
          "Why test transfer?",
          ["To prove memory is perfect", "To see whether knowledge works in a genuinely new context", "To avoid all review"],
          1,
          "Flexible application indicates control beyond the original learning task.",
        ),
        q(
          4,
          "Which practice best manages interference between near-synonyms?",
          ["Rereading them together without producing language", "Contrasting them in original sentences and correcting the contrast", "Learning a longer list at once"],
          1,
          "Discrimination and feedback help separate competing patterns.",
        ),
      ],
    },
    {
      slug: "a-final-lexical-style-project",
      title: "A final lexical style project",
      summary:
        "Create an original 180–220-word text with a signature motif, rhythmic patterning, deliberate semantic prosody and audience-aware lexical choices.",
      objective:
        "Build and annotate a personal style sample, then revise it for connotative consistency, lexical density and audience design.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "A personal lexicon leaves a trace",
          paragraphs: [
            "A mature style is recognisable without becoming predictable. A signature motif can unify a text, while rhythmic patterning controls how the reader moves through it. Semantic prosody asks whether word partnerships carry a consistent attitude, such as repeated associations of harm or care.",
            "Lexical density and audience design pull in different directions. Compressed expert prose may be dense but efficient for specialists; a general audience may need glossing and breathing space. The final project requires conscious choices, followed by an audit of what each choice contributes.",
          ],
        },
        {
          type: "wordbank",
          title: "Six concepts for annotating your style",
          intro:
            "Use these terms to explain your decisions after drafting, not to decorate the draft itself.",
          words: personalStyleWords,
        },
        {
          type: "passage",
          title: "A model passage with a threshold motif",
          paragraphs: [
            "Every institution has a threshold: the point at which a visitor becomes a participant, or a rule becomes a habit. Our library once guarded that threshold with silence and an intimidating desk. The redesign did not remove it. It widened the welcome.",
            "The new entrance pauses beneath a glass canopy, neither street nor room. Inside, the children's collection sits in view, and the old stone steps double as seating. These are modest changes, but their connotation is deliberate: the building now suggests possibility rather than permission.",
            "A personal style emerges through such repeated choices. Threshold, welcome, possibility: the same connotative field runs through the account, while the alternation of short and longer sentences gives the description a measured rhythm.",
          ],
        glossary: [
            {
              term: "signature motif",
              meaning: "a recurring image or idea that becomes distinctive",
              example: "The threshold becomes a signature motif that links the building to the argument.",
            },
            {
              term: "connotative field",
              meaning: "a cluster of words sharing related associations",
              example: "Welcome and possibility create a connotative field of openness.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Analyse the style choices",
          instructions:
            "Choose the option that accurately identifies the feature and its effect in the passage.",
          items: [
            c(
              "Why does threshold function as a signature motif?",
              ["It recurs to connect the physical entrance with institutional participation.", "It appears only as a technical architectural term.", "It is used to increase lexical density without purpose."],
              0,
              "The recurring threshold image links concrete design and the abstract argument about belonging.",
            ),
            c(
              "What does the alternation of short and longer sentences create?",
              ["A clash of incompatible metaphors", "Rhythmic patterning that controls pace", "A redundancy in the argument"],
              1,
              "Variation in sentence length and structure creates a deliberate rhythm.",
            ),
            c(
              "Why is audience design evident in the passage?",
              ["It defines every architectural term.", "It removes all evaluative language.", "It translates technical features into an accessible argument for general readers."],
              2,
              "The writer shapes technical observations for readers who need both clarity and interpretation.",
            ),
            c(
              "Which connotative field supports the passage's positive evaluation?",
              ["silence, intimidation, guarded", "welcome, possibility, belonging", "conflict, battle, attack"],
              1,
              "The shared associations of openness and participation support the writer's favourable stance.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Produce and annotate a personal sample",
          instructions:
            "Write 180–220 words on a subject you know well. Then annotate the six project features in brief notes.",
          items: [
            p(
              "Draft a text with one signature motif, varied sentence rhythms and at least four precise lexical choices from the course.",
              "Model structure: introduce the motif concretely; develop it through one central claim; vary short and longer sentences; end by returning to the motif with a changed significance.",
            ),
            p(
              "Audit the connotative field, semantic prosody and lexical density. Revise one sentence for each.",
              "Model answer: I grouped the conflict vocabulary around one image, replaced an unintended negative collocation and split an over-dense sentence so the argument remained clear to general readers.",
            ),
            p(
              "Write a final audience-design note and a three-sentence reflection on your emerging voice.",
              "Model answer: I assumed informed non-specialists and glossed one technical term. My voice favours measured images, concise contrasts and qualified judgements; I removed exaggerated praise because it weakened credibility.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What does semantic prosody analyse?",
          ["The attitudinal aura created by typical collocations", "The number of syllables in a sentence", "The font used in a text"],
          0,
          "Semantic prosody concerns the consistent positive or negative associations carried by word partnerships.",
        ),
        q(
          2,
          "Why might an editor reduce lexical density?",
          ["Dense prose is always inaccurate.", "Readers may need more explicit links and breathing space.", "Content words should never appear."],
          1,
          "Density is audience-dependent; excessive compression can impede comprehension.",
        ),
        q(
          3,
          "What makes a motif signature-like?",
          ["It occurs only once.", "It is impossible to interpret.", "Its recurrence becomes distinctive of the writer's work."],
          2,
          "A signature motif is a recurring pattern that contributes to recognisable authorship.",
        ),
        q(
          4,
          "What is the strongest test of a personal style choice?",
          ["Whether it is rare", "Whether it serves meaning, coherence and the intended audience", "Whether every sentence contains a metaphor"],
          1,
          "Distinctiveness matters only when the choice communicates effectively and remains controlled.",
        ),
      ],
    },
  ],
};
