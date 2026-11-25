import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit, LessonWord } from "@/data/lessons/types";

const toneWords: LessonWord[] = [
  {
    term: "measured",
    meaning: "carefully controlled and balanced rather than emotional",
    example: "The chair offered a measured response to the criticism.",
  },
  {
    term: "candid",
    meaning: "honest and direct, sometimes about an uncomfortable truth",
    example: "Her candid account of the failure helped the team address the real problem.",
  },
  {
    term: "diplomatic",
    meaning: "tactful and careful not to cause unnecessary offence",
    example: "He gave a diplomatic answer that acknowledged the concern without assigning blame.",
  },
  {
    term: "earnest",
    meaning: "serious and sincere, sometimes excessively so",
    example: "The earnest appeal for volunteers was sincere but rather solemn.",
  },
  {
    term: "wry",
    meaning: "dryly humorous, often finding amusement in an ironic situation",
    example: "She offered a wry smile when the printer failed for the third time.",
  },
  {
    term: "emollient",
    meaning: "soothing and conciliatory, especially when reducing tension",
    example: "The emollient statement did not settle the dispute, but it lowered the temperature.",
  },
];

const notebookWords: LessonWord[] = [
  {
    term: "denotation",
    meaning: "the basic literal meaning of a word or expression",
    example: "The denotation of candid is honest and direct.",
  },
  {
    term: "connotation",
    meaning: "the attitudes and associations a word suggests beyond its basic meaning",
    example: "Candid can carry a positive connotation of refreshing honesty.",
  },
  {
    term: "collocation",
    meaning: "a conventional combination of words used together by proficient speakers",
    example: "'Candid account' is a useful collocation to record.",
  },
  {
    term: "register",
    meaning: "the level of formality and social setting appropriate to language",
    example: "Candid belongs to a fairly neutral register, whereas blunt may sound more forceful.",
  },
  {
    term: "retrieval cue",
    meaning: "a prompt that helps you recall a word without first seeing the answer",
    example: "The situation of admitting a mistake can serve as a retrieval cue for candid.",
  },
  {
    term: "counterexample",
    meaning: "an example showing that a proposed rule or claim does not always hold",
    example: "'The meeting was candid' is a counterexample to the claim that candid must always modify account.",
  },
];

const revisionWords: LessonWord[] = [
  {
    term: "retrieval practice",
    meaning: "trying to recall information from memory rather than simply rereading it",
    example: "Retrieval practice means writing the missing collocation before checking the answer.",
  },
  {
    term: "spaced repetition",
    meaning: "reviewing material at increasing intervals across several sessions",
    example: "Spaced repetition brought the new phrases back after one day, one week and one month.",
  },
  {
    term: "interleaving",
    meaning: "mixing related topics or skills instead of studying only one at a time",
    example: "Interleaving synonyms with collocations makes you choose the right pattern each time.",
  },
  {
    term: "desirable difficulty",
    meaning: "a learning challenge that improves long-term recall even when it feels harder",
    example: "Recalling a word from a blank cue can be a desirable difficulty compared with rereading it.",
  },
  {
    term: "recognition",
    meaning: "identifying something familiar when it is presented again",
    example: "Recognition of a word's meaning does not guarantee that you can retrieve it in speech.",
  },
  {
    term: "elaboration",
    meaning: "connecting new information with existing knowledge in a meaningful way",
    example: "Elaboration links candid to a personal situation and contrasts it with diplomatic.",
  },
];

const styleWords: LessonWord[] = [
  {
    term: "lexical range",
    meaning: "the breadth and flexibility of vocabulary available for different meanings and situations",
    example: "The essay shows lexical range by moving between technical terms and plain explanation.",
  },
  {
    term: "precision",
    meaning: "the quality of expressing an exact meaning without unnecessary ambiguity",
    example: "Precision leads the writer to choose preliminary findings rather than early results.",
  },
  {
    term: "idiomaticity",
    meaning: "the quality of sounding natural to proficient speakers of the language",
    example: "Using garner support rather than gather support improves the idiomaticity of the sentence.",
  },
  {
    term: "cohesion",
    meaning: "the way vocabulary and other links make a text hold together clearly",
    example: "Repeating a key term creates cohesion between the opening claim and the conclusion.",
  },
  {
    term: "voice",
    meaning: "the distinctive personality and attitude recognisable in a writer's language choices",
    example: "A dry aside gives the commentary a wry voice without undermining its evidence.",
  },
  {
    term: "rhetorical effect",
    meaning: "the intended influence a language choice has on an audience",
    example: "The rhetorical effect of the final question is to make readers reconsider their assumptions.",
  },
];

export const c1VocabularyUnit4: LessonUnit = {
  title: "Style and ownership",
  description:
    "Adapt vocabulary to audience and stance, build an evidence-based word record, retrieve lexis over time and apply it in a final style project.",
  lessons: [
    {
      slug: "register-tone-and-audience",
      title: "Register, tone and audience",
      summary:
        "Distinguish formality from attitude and select six tone words that make messages calm, direct, tactful or humorous.",
      objective:
        "Adjust diction and tone to audience without losing factual accuracy, and separate register from emotional colour.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "Three choices shape the message",
          paragraphs: [
            "Register concerns the social setting: a legal notice, a seminar discussion and a chat between friends require different levels of formality. Tone concerns attitude: the same formally worded message may be measured, candid or accusatory.",
            "Audience determines how much context readers need and how much directness they expect. A diplomatic response acknowledges the other person's concern while managing disagreement. A candid response prioritises truthful directness, but candour without tact may damage trust.",
          ],
        },
        {
          type: "wordbank",
          title: "Six precise tone descriptors",
          intro:
            "Each term describes the manner of an utterance rather than its factual content.",
          words: toneWords,
        },
        {
          type: "examples",
          title: "One problem, three tones",
          intro:
            "All three replies communicate the delay, but they position the reader differently.",
          items: [
            {
              text: "The delivery has been delayed because the safety inspection is incomplete. We expect to confirm a new date tomorrow.",
              note: "Measured: balanced and controlled, suitable for a public update.",
            },
            {
              text: "We promised Friday, and we have missed that date. I am sorry; the inspection is not yet complete.",
              note: "Candid: direct admission rather than vague reassurance.",
            },
            {
              text: "We appreciate your patience while the final safety checks are completed, and we will update you as soon as the revised date is confirmed.",
              note: "Diplomatic and emollient: designed to acknowledge the reader and soften frustration.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Match tone to audience",
          instructions:
            "Choose the descriptor that best captures the language strategy in each situation.",
          items: [
            c(
              "After hostile questioning, the spokesperson pauses, avoids emotive terms and acknowledges both sides of the evidence. The response is ___.",
              ["wry", "measured", "earnest"],
              1,
              "Measured describes a carefully controlled and balanced response under pressure.",
            ),
            c(
              "In a private review, the analyst openly admits that her method was flawed. Her account is ___.",
              ["diplomatic", "emollient", "candid"],
              2,
              "Candid means honest and direct, including about uncomfortable facts.",
            ),
            c(
              "The mediator uses soft, conciliatory wording to reduce anger before discussing the complaint. The wording is ___.",
              ["emollient", "earnest", "wry"],
              0,
              "Emollient language soothes or lowers tension; it does not necessarily resolve the issue.",
            ),
            c(
              "When the revised budget is announced, she gives a dry smile and says, 'So much for our ambitious savings plan.' The smile is ___.",
              ["candid", "wry", "measured"],
              1,
              "Wry describes dry amusement, often in an ironic or disappointing situation.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rewrite the same fact",
          instructions:
            "Write your version before revealing the model. Keep the factual content stable while changing tone.",
          items: [
            p(
              "Rewrite 'Your application was rejected' in a candid but respectful sentence.",
              "Model answer: Your application was not successful, and I want to explain the main reason clearly.",
              "Candour does not require abruptness.",
            ),
            p(
              "Write a diplomatic response to a customer who says the team ignored an email.",
              "Model answer: Thank you for raising this. I am sorry our response did not meet your expectations; I will investigate what happened to the message.",
            ),
            p(
              "Explain why earnest is not always approving.",
              "Earnest means sincere and serious, but it can suggest excessive solemnity or humourlessness in some contexts.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the difference between register and tone?",
          ["Register is grammar; tone is spelling.", "Register concerns social formality; tone concerns attitude.", "They are exact synonyms."],
          1,
          "A text can use a formal register while sounding defensive, measured or warm.",
        ),
        q(
          2,
          "Which word best describes tactful wording that reduces tension?",
          ["emollient", "earnest", "wry"],
          0,
          "Emollient means soothing or conciliatory, especially in a tense situation.",
        ),
        q(
          3,
          "Why is candid not always the same as diplomatic?",
          ["Candid always offends.", "Candid prioritises direct honesty; diplomatic wording also manages offence.", "Diplomatic language is always dishonest."],
          1,
          "The two strategies can overlap, but directness and tact are separate priorities.",
        ),
        q(
          4,
          "Which sentence has a wry tone?",
          ["We must submit the form immediately.", "Thank you for your continued patience and cooperation.", "Wonderful: the meeting to decide our meeting schedule has been rescheduled."],
          2,
          "The dry amusement at the paradoxical delay creates a wry tone.",
        ),
      ],
    },
    {
      slug: "building-a-vocabulary-notebook",
      title: "Building a vocabulary notebook",
      summary:
        "Create useful word records with denotation, connotation, collocation, register, retrieval cues and counterexamples.",
      objective:
        "Design a compact entry that records usable evidence rather than a translation alone, and test its claims with counterexamples.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "A word record should predict use",
          paragraphs: [
            "A notebook entry that contains only a translation helps you recognise a word but may not help you produce it. Add a typical partner, a realistic example, the register and one situation that should trigger recall.",
            "Counterexamples keep rules honest. If you claim that candid always pairs with account, notice the meeting was candid and record the exception. The aim is not a rigid rule but a pattern with a known boundary.",
          ],
        },
        {
          type: "wordbank",
          title: "The language of a useful word record",
          intro:
            "Use these six terms to describe what each entry contains.",
          words: notebookWords,
        },
        {
          type: "table",
          title: "A model entry for candid",
          caption:
            "A good entry records enough evidence to support both comprehension and production.",
          columns: ["Field", "Entry"],
          rows: [
            ["Denotation", "honest and direct"],
            ["Connotation", "often positive: refreshing openness; can imply uncomfortable directness"],
            ["Collocations", "candid account / answer / discussion / admission"],
            ["Register", "neutral to semi-formal"],
            ["Example", "She gave a candid account of why the launch failed."],
            ["Retrieval cue", "admitting an uncomfortable truth"],
            ["Counterexample", "The discussion was candid and constructive."],
          ],
        },
        {
          type: "exercise",
          title: "Improve the word record",
          instructions:
            "Choose the note that makes the entry most useful for future use.",
          items: [
            c(
              "An entry says only 'ambivalent = having mixed feelings'. What should be added first for production?",
              ["A personal example and a familiar partner", "A longer translation", "A list of unrelated antonyms"],
              0,
              "A realistic example and a partner such as ambivalent about make the word easier to retrieve and use.",
            ),
            c(
              "You want to record that assertive can be positive and pushy negative. Which field captures this difference?",
              ["Denotation", "Word length", "Connotation"],
              2,
              "Connotation records the approving or disapproving associations carried by each word.",
            ),
            c(
              "You write 'viable always describes a solution'. Which addition tests the rule?",
              ["A second translation", "A counterexample such as a viable plan", "A colour-coded border"],
              1,
              "A counterexample reveals that viable can modify other nouns, preventing overgeneralisation.",
            ),
            c(
              "You can recognise garner support in a text but cannot produce it. Which field gives you the best future recall cue?",
              ["Register", "Retrieval cue", "Syllable count"],
              1,
              "A situation or prompt linked to gathering backing provides a route to retrieval without showing the answer first.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build one complete entry",
          instructions:
            "Use paper, a spreadsheet or your own notes. Do not copy the model word; choose one from this course.",
          items: [
            p(
              "Choose one advanced word and record its denotation, connotation and register.",
              "Model answer for resilient: basic meaning = able to recover quickly; connotation = often positive; register = neutral to semi-formal.",
            ),
            p(
              "Add one collocation, one original example and one retrieval cue for the same word.",
              "Model answer for resilient: resilient economy; The resilient economy recovered faster than expected; cue = recovering after a setback.",
            ),
            p(
              "Add a counterexample or boundary note that prevents overuse.",
              "Model answer for resilient: It usually describes recovery from difficulty; 'resilient blue' is not an established colour collocation.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which field answers 'How formal is this word here?'",
          ["Counterexample", "Retrieval cue", "Register"],
          2,
          "Register describes the social and formality setting in which wording is appropriate.",
        ),
        q(
          2,
          "What does a retrieval cue do?",
          ["Prompts you to recall the target word", "Shows the translation before recall", "Replaces every example sentence"],
          0,
          "A cue creates a route to recall; hiding the answer makes the practice more effective.",
        ),
        q(
          3,
          "Why record a counterexample?",
          ["It proves every pattern wrong.", "It reveals the limits of a generalisation.", "It makes the notebook longer automatically."],
          1,
          "Counterexamples help you avoid turning a common pattern into an absolute rule.",
        ),
        q(
          4,
          "Which entry is most likely to support active use of broach?",
          ["broach = introduce", "broach a subject: raise a sensitive topic; 'She broached the subject of pay.'", "broach: six letters"],
          1,
          "The second entry combines meaning, collocation and a realistic sentence.",
        ),
      ],
    },
    {
      slug: "revision-through-retrieval",
      title: "Revision through retrieval",
      summary:
        "Design vocabulary review around recall, spacing, mixed practice and elaboration instead of repeated rereading.",
      objective:
        "Build a short retrieval sequence, distinguish recognition from recall and explain why a manageable challenge aids retention.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Make remembering the task",
          paragraphs: [
            "Rereading a familiar word list can create a feeling of fluency without strong recall. Retrieval practice asks you to produce the meaning, partner or context before you see the answer. That effort is part of what strengthens later access.",
            "Spacing returns to the word across increasing intervals, while interleaving mixes related choices so that you must select rather than merely repeat. The work may feel harder than rereading, but a desirable difficulty can improve durable learning.",
          ],
        },
        {
          type: "wordbank",
          title: "Six concepts for durable lexical learning",
          intro:
            "Use the terms to describe the design of your own review sessions.",
          words: revisionWords,
        },
        {
          type: "table",
          title: "A ten-minute retrieval cycle",
          caption:
            "The sequence moves from recognition to production and then to meaningful contrast.",
          columns: ["Step", "Task", "Reason"],
          rows: [
            ["1", "Read a short situation without the target word", "creates a genuine need for recall"],
            ["2", "Write the word and one collocation", "requires retrieval practice"],
            ["3", "Check and correct the answer", "provides feedback"],
            ["4", "Contrast it with a near-synonym", "uses elaboration to refine meaning"],
            ["5", "Revisit after one day, one week and one month", "uses spaced repetition"],
          ],
        },
        {
          type: "exercise",
          title: "Diagnose the study method",
          instructions:
            "Choose the concept that best explains the learning design or problem.",
          items: [
            c(
              "A learner highlights a page for the fourth time but still cannot use the phrases in speech. The method relies mainly on ___.",
              ["counterexamples", "interleaving", "recognition"],
              2,
              "Recognition identifies familiar material when it is visible, but it does not guarantee active recall.",
            ),
            c(
              "A student reviews words after one day, three days and two weeks. This is ___.",
              ["spaced repetition", "elaboration", "register shift"],
              0,
              "Spaced repetition distributes review across increasing intervals.",
            ),
            c(
              "A quiz mixes hesitant, reluctant and ambivalent in random order. It uses ___.",
              ["interleaving", "recognition", "monotony"],
              0,
              "Interleaving mixes related categories so that each item requires a fresh choice.",
            ),
            c(
              "A learner links candid to a time when a colleague admitted a mistake. This deepens the memory through ___.",
              ["desirable difficulty", "elaboration", "fixed form"],
              1,
              "Elaboration connects new vocabulary with meaningful existing knowledge or experience.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Run a retrieval session",
          instructions:
            "Complete the sequence without looking at your notebook until the checking step.",
          items: [
            p(
              "Write the word for strong, persistent support through difficulty, then check it.",
              "steadfast",
              "The cue describes a quality maintained over time.",
            ),
            p(
              "Without looking, give the conventional phrase meaning 'make a risk less severe'.",
              "mitigate risk",
              "It is a verb-object collocation.",
            ),
            p(
              "Plan three review times and include one near-synonym contrast in each review.",
              "Model answer: Review tomorrow with candid/diplomatic, in three days with reluctant/hesitant, and next week with viable/tenable. At each review, write a sentence before checking.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which activity most clearly requires retrieval?",
          ["Reading a completed word list", "Underlining a familiar phrase", "Writing a collocation from a situation cue"],
          2,
          "The target language must be produced from memory rather than recognised on the page.",
        ),
        q(
          2,
          "What is the key feature of spaced repetition?",
          ["Studying only before an exam", "Reviewing at distributed intervals", "Reading each word twice in one sitting"],
          1,
          "Spacing separates encounters so that each return depends more on memory.",
        ),
        q(
          3,
          "Why can interleaving feel harder than blocked practice?",
          ["It requires choosing among related options on each item.", "It prevents feedback.", "It removes all examples."],
          0,
          "The extra discrimination can be a desirable difficulty that strengthens flexible recall.",
        ),
        q(
          4,
          "Which statement about recognition and recall is accurate?",
          ["They are identical.", "Recognition never occurs in learning.", "Recognising a word does not ensure you can produce it."],
          2,
          "Understanding a visible word and retrieving it independently are different performances.",
        ),
      ],
    },
    {
      slug: "a-final-vocabulary-in-context-project",
      title: "A final vocabulary in context project",
      summary:
        "Revise an original commentary for lexical range, precision, idiomaticity, cohesion, voice and rhetorical effect.",
      objective:
        "Produce and evaluate a short text that integrates advanced vocabulary purposefully rather than displaying isolated difficult words.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "A lexicon becomes style in use",
          paragraphs: [
            "The final project tests whether vocabulary works inside a complete message. Lexical range means flexibility, not sheer difficulty. Precision means exactness; idiomaticity means natural combination; cohesion means the chosen words connect the argument.",
            "Voice and rhetorical effect should be deliberate. A restrained commentary might use measured language and a single extended metaphor, while a lively review may admit a wry aside. Revise every conspicuous word by asking what it contributes to the reader's understanding.",
          ],
        },
        {
          type: "wordbank",
          title: "Six criteria for evaluating the project",
          intro:
            "Use the criteria as an editing checklist rather than as synonyms for 'good writing'.",
          words: styleWords,
        },
        {
          type: "passage",
          title: "Before: accurate but flat",
          paragraphs: [
            "The new cycle route is a very big change for the town. It makes travel better, but some shops are worried about losing customers. At first, the plan seemed bad to business owners. However, the first month showed that more people walked past the shops, and the problem was less serious than people thought.",
          ],
          glossary: [
            {
              term: "a watershed moment",
              meaning: "a decisive turning point",
              example: "The first month proved to be a watershed moment for the high street.",
            },
            {
              term: "alleviate concerns",
              meaning: "make worries less intense",
              example: "The footfall data alleviated concerns about lost custom.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Evaluate possible revisions",
          instructions:
            "Choose the version that improves the stated feature without adding an unsupported claim.",
          items: [
            c(
              "You want more precision than 'a very big change'. Which revision is best supported by the passage?",
              ["a gargantuan miracle", "a watershed moment for the town", "an incontestable revolution"],
              1,
              "A watershed moment identifies a possible turning point without inflating the evidence into a miracle or revolution.",
            ),
            c(
              "You want an idiomatic verb-object partnership for 'the problem was less serious'. Which is best?",
              ["garnered support", "weather the storm", "alleviated concerns"],
              2,
              "The passage says shop owners were worried and then became less worried, so alleviated concerns fits exactly.",
            ),
            c(
              "You want a clear bridge between the first impression and the later evidence. Which connector is most useful?",
              ["On the face of it", "By no means", "In the event of"],
              0,
              "On the face of it marks the initial appearance that later evidence qualifies.",
            ),
            c(
              "You want a distinctive but controlled voice. Which sentence best adds a wry note without weakening the argument?",
              ["Apparently, our town has discovered pedestrians.", "Words are very interesting things.", "The sidewalks have achieved incontestable greatness."],
              0,
              "The dry aside gently recognises the surprising change in behaviour while preserving the commentary's focus.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write and assess a 150-word commentary",
          instructions:
            "Choose a local change, a new policy or a media trend. Draft, revise and evaluate using the six criteria.",
          items: [
            p(
              "Write 120–150 words that use at least four course expressions, one deliberate metaphor or idiom and one near-synonym contrast.",
              "Model structure: open with a specific observation; distinguish an initial impression from evidence; use one figurative image; end with a qualified judgement.",
              "Use expressions only where they make the meaning more exact.",
            ),
            p(
              "Revise two sentences: one for precision or collocation and one for cohesion or voice. Explain each change in a note.",
              "Model answer: Replace 'a big problem' with 'a recurring problem' if the issue is repetition; add 'On the face of it' before the first impression so the later contrast has a clear link.",
            ),
            p(
              "Evaluate your draft against lexical range, precision, idiomaticity, cohesion, voice and rhetorical effect.",
              "Model answer: I used four expressions in context, replaced vague evaluation with specific wording, sustained one metaphor and linked the conclusion to the opening claim. I removed one idiom because it sounded too conversational.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which revision increases lexical range without merely making a sentence longer?",
          ["Replace good with a more unusual synonym in every paragraph.", "Add as many idioms as possible.", "Use precise technical, formal and conversational choices where each fits."],
          2,
          "Range concerns flexible choice across contexts, not uniform difficulty.",
        ),
        q(
          2,
          "What should an editor ask about a conspicuous idiom?",
          ["Is it the longest expression available?", "Does it clarify meaning and suit the audience?", "Can it replace every concrete detail?"],
          1,
          "Figurative language earns its place through communicative purpose and appropriateness.",
        ),
        q(
          3,
          "Which feature connects the conclusion to the opening claim?",
          ["Cohesion", "Syllable length", "A list of synonyms"],
          0,
          "Cohesion concerns the linguistic links that make the parts of a text hold together.",
        ),
        q(
          4,
          "Why might a writer remove a technically correct but overly formal word?",
          ["Accuracy is irrelevant.", "A shorter familiar word may create the intended rhetorical effect.", "Formal words are never useful."],
          1,
          "Style depends on effect and audience; the plain word may be clearer and more credible.",
        ),
      ],
    },
  ],
};
