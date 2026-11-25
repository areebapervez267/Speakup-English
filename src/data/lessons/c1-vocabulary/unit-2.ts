import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit, LessonWord } from "@/data/lessons/types";

const verbNounWords: LessonWord[] = [
  {
    term: "shoulder responsibility",
    meaning: "to accept a duty, especially one that is burdensome",
    example: "The project lead must shoulder responsibility for the final checks.",
  },
  {
    term: "broach a subject",
    meaning: "to introduce a sensitive topic for discussion",
    example: "Choose a private setting to broach a subject that may cause offence.",
  },
  {
    term: "table a proposal",
    meaning: "to present a proposal for formal discussion",
    example: "The committee will table a proposal for a shorter consultation period.",
  },
  {
    term: "mitigate risk",
    meaning: "to make a risk less severe or less likely to cause harm",
    example: "Backing up files can mitigate risk, although it cannot eliminate every cause of data loss.",
  },
  {
    term: "alleviate concerns",
    meaning: "to make worries less intense without necessarily removing them",
    example: "A clear timetable can alleviate concerns about the rollout and its timing.",
  },
  {
    term: "garner support",
    meaning: "to gather support, especially over time or from many people",
    example: "A transparent budget can garner support from otherwise cautious councils.",
  },
];

const adjectiveNounWords: LessonWord[] = [
  {
    term: "compelling evidence",
    meaning: "evidence strong enough to persuade or demand attention",
    example: "The audit found compelling evidence that the figures had been altered.",
  },
  {
    term: "recurring problem",
    meaning: "a difficulty that happens repeatedly",
    example: "Poor signage remains a recurring problem at the station.",
  },
  {
    term: "viable solution",
    meaning: "a solution capable of working successfully in practice",
    example: "The engineers tested whether the new filter was a viable solution.",
  },
  {
    term: "untenable position",
    meaning: "a stance that cannot reasonably be defended or maintained",
    example: "The contradiction left the spokesperson in an untenable position.",
  },
  {
    term: "contentious issue",
    meaning: "a matter likely to produce strong disagreement",
    example: "Parking charges became a contentious issue during the election.",
  },
  {
    term: "preliminary findings",
    meaning: "early results that may change after fuller investigation",
    example: "The preliminary findings suggest a link, but more data is needed.",
  },
];

const prepositionWords: LessonWord[] = [
  {
    term: "conform to",
    meaning: "to comply with a rule, standard or accepted way of behaving",
    example: "Every product must conform to the same safety standard.",
  },
  {
    term: "account for",
    meaning: "to explain something or make up a particular amount or proportion",
    example: "Online sales account for nearly half of the company's revenue.",
  },
  {
    term: "result in",
    meaning: "to cause something to happen",
    example: "Repeated delays can result in frustration among commuters.",
  },
  {
    term: "deter from",
    meaning: "to discourage someone from doing something",
    example: "Steep fines can deter drivers from entering the city centre.",
  },
  {
    term: "insist on",
    meaning: "to demand something firmly and refuse to give way about it",
    example: "Tenants should insist on receiving essential repairs in writing.",
  },
  {
    term: "depend on",
    meaning: "to rely on someone or something for support or a result",
    example: "Crop yields depend on steady rainfall throughout the spring.",
  },
];

const professionalWords: LessonWord[] = [
  {
    term: "conduct research",
    meaning: "to organise and carry out a systematic investigation",
    example: "The department will conduct research into sleep and memory.",
  },
  {
    term: "draw a distinction",
    meaning: "to explain an important difference between two things",
    example: "Researchers should draw a distinction between correlation and causation.",
  },
  {
    term: "lend weight to",
    meaning: "to make an argument or claim seem more convincing or important",
    example: "Independent observations lend weight to the new explanation.",
  },
  {
    term: "exercise caution",
    meaning: "to behave carefully in order to avoid danger or mistakes",
    example: "Investors should exercise caution when comparing projected returns.",
  },
  {
    term: "meet a deadline",
    meaning: "to finish the required work by the stated time",
    example: "The second team may struggle to meet a deadline set by the regulator.",
  },
  {
    term: "reach a consensus",
    meaning: "to arrive at an agreement accepted by a group",
    example: "After two hours, the panel may reach a consensus on the recommendation.",
  },
];

export const c1VocabularyUnit2: LessonUnit = {
  title: "Collocation",
  description:
    "Learn the word partnerships that make advanced English natural, from productive verb-object pairs to exact prepositions and professional chunks.",
  lessons: [
    {
      slug: "verb-and-noun-collocations",
      title: "Verb and noun collocations",
      summary:
        "Use six established verb-object partnerships to discuss responsibility, sensitive topics, risk and support.",
      objective:
        "Choose verbs that naturally govern their objects and explain the semantic restriction behind each partnership.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "Some verbs prefer particular company",
          paragraphs: [
            "A collocation is a combination that proficient speakers recognise as natural. Shoulder responsibility, broach a subject and table a proposal are not simply lists of related words: each verb selects a familiar object and creates a conventional meaning.",
            "Direct translation can produce grammatically correct but unnatural English. Do not open a subject when you mean broach one, and do not mitigate a problem when you mean mitigate the risk that the problem creates.",
          ],
        },
        {
          type: "wordbank",
          title: "Productive verb-object partnerships",
          intro:
            "Store the verb and its object together so that recall produces the whole chunk.",
          words: verbNounWords,
        },
        {
          type: "table",
          title: "The object controls the effect",
          caption:
            "Compare the partners to see why a single dictionary translation is not enough.",
          columns: ["Verb", "Typical object", "Effect or register"],
          rows: [
            ["shoulder", "responsibility / cost / burden", "accept something difficult or onerous"],
            ["broach", "subject / topic / question", "raise something sensitive carefully"],
            ["table", "proposal / motion / amendment", "present for formal discussion"],
            ["mitigate", "risk / damage / effects", "reduce severity or likelihood"],
            ["alleviate", "concerns / pain / suffering", "make something less intense"],
            ["garner", "support / praise / publicity", "gather something gradually"],
          ],
        },
        {
          type: "exercise",
          title: "Complete the natural partnership",
          instructions:
            "Choose the verb that forms the conventional collocation and fits the sentence meaning.",
          items: [
            c(
              "The deputy agreed to ___ responsibility for the weekend rota.",
              ["garner", "broach", "shoulder"],
              2,
              "Shoulder responsibility means accept the duty, especially when it involves a burden.",
            ),
            c(
              "Could we ___ the subject of pay during a private meeting?",
              ["table", "broach", "alleviate"],
              1,
              "Broach a subject means introduce a potentially sensitive topic for discussion.",
            ),
            c(
              "The safety measures ___ the risk of injury but could not eliminate it.",
              ["resulted in", "broached", "mitigated"],
              2,
              "Mitigate risk means reduce its severity or likelihood; the sentence explicitly says elimination was impossible.",
            ),
            c(
              "A clear explanation of the delays will help ___ concerns among passengers.",
              ["alleviate", "garner", "conduct"],
              0,
              "Alleviate concerns is the conventional partnership for making worries less intense.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Retrieve whole chunks",
          instructions:
            "Say or write each answer before revealing the model. Keep the verb and object together.",
          items: [
            p(
              "Complete the chunk: garner ___.",
              "garner support",
              "It means gather backing, often from many people.",
            ),
            p(
              "Write two sentences: one about introducing a sensitive topic and one about presenting a formal proposal.",
              "Model answer: I will broach the subject of overtime with my manager. The committee tabled a proposal to extend the trial.",
            ),
            p(
              "Explain the difference between alleviate a problem and mitigate a risk.",
              "Alleviate a problem reduces its intensity; mitigate a risk reduces the chance or impact of harm.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which pairing is the established collocation?",
          ["broach a topic", "open a topic", "raisely a topic"],
          0,
          "English speakers broach a topic or subject, especially when it is sensitive.",
        ),
        q(
          2,
          "What does shoulder responsibility imply that accept responsibility may not?",
          [
            "The duty belongs to nobody.",
            "The duty has already been completed.",
            "The duty is likely to be burdensome.",
          ],
          2,
          "Shoulder adds the sense of carrying or bearing a weight, often an unwelcome duty.",
        ),
        q(
          3,
          "Which sentence uses table correctly in a meeting?",
          [
            "The chair tabled the disagreement away.",
            "The chair tabled a motion for debate.",
            "The chair tabled support for the opposition.",
          ],
          1,
          "In formal meeting English, table a motion or proposal means present it for discussion.",
        ),
        q(
          4,
          "Why does 'garner support' sound more natural than 'collect support' in this sentence: 'The appeal garnered support across the region'?",
          [
            "Support cannot be collected in any context.",
            "Garner is the conventional verb for gradually gathering support.",
            "Collect is not an English word.",
          ],
          1,
          "Garner naturally combines with support, praise and similar abstract responses.",
        ),
      ],
    },
    {
      slug: "adjective-and-noun-partnerships",
      title: "Adjective and noun partnerships",
      summary:
        "Combine six advanced adjectives with their familiar nouns and distinguish evidence, findings, problems and solutions accurately.",
      objective:
        "Use adjective-noun collocations to signal evidential strength, frequency, practicality and the status of a claim.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Adjectives fine-tune the noun",
          paragraphs: [
            "An adjective-noun partnership can tell the reader how to evaluate the noun. Compelling evidence is not merely interesting evidence; it has persuasive force. Preliminary findings are early results, so they should not be presented as settled conclusions.",
            "The partnership also constrains meaning. Viable describes something capable of working, while untenable usually describes a position that cannot be defended. Learning both words in isolation leaves the harder collocational work undone.",
          ],
        },
        {
          type: "wordbank",
          title: "Six high-value adjective-noun pairs",
          intro:
            "Focus on the status or quality that each adjective gives its partner noun.",
          words: adjectiveNounWords,
        },
        {
          type: "table",
          title: "What kind of quality is added?",
          caption:
            "Use this grid to distinguish similar-sounding academic vocabulary.",
          columns: ["Partnership", "Dimension", "Writer's caution"],
          rows: [
            ["compelling evidence", "persuasive strength", "claim more than the evidence supports"],
            ["preliminary findings", "stage of investigation", "treat early results as final"],
            ["recurring problem", "frequency", "confuse repetition with severity"],
            ["viable solution", "practical feasibility", "assume viability without testing"],
            ["untenable position", "defensibility", "use it simply to mean unpopular"],
            ["contentious issue", "potential for disagreement", "confuse controversy with error"],
          ],
        },
        {
          type: "exercise",
          title: "Choose the precise partnership",
          instructions:
            "Select the adjective-noun pair that matches the evidence or status described.",
          items: [
            c(
              "The first survey produced early results that may be revised. The report labels them ___.",
              ["preliminary findings", "compelling evidence", "recurring problems"],
              0,
              "Preliminary findings are early results whose status may change after further investigation.",
            ),
            c(
              "The plan looked attractive but could not work with the available staff. It was not a ___.",
              ["contentious issue", "viable solution", "compelling argument"],
              1,
              "Viable solution means a solution capable of succeeding in practice, which the sentence denies.",
            ),
            c(
              "Several witnesses independently confirmed the same detail, creating ___.",
              ["an untenable position", "a recurring problem", "compelling evidence"],
              2,
              "Independent confirmation increases persuasive strength, making compelling evidence the apt partnership.",
            ),
            c(
              "The spokesperson's claim contradicted the published figures, leaving him in an ___.",
              ["untenable position", "preliminary finding", "viable solution"],
              0,
              "A position undermined by contradiction is difficult to defend, hence untenable.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Describe status, not just importance",
          instructions:
            "Write complete sentences, then compare with the models. Preserve the distinction between each pair.",
          items: [
            p(
              "Write a sentence using preliminary findings without presenting them as a final conclusion.",
              "Model answer: The preliminary findings suggest that the treatment helps, although a larger trial is required.",
            ),
            p(
              "Describe a recurring problem in your workplace or studies using the exact partnership.",
              "Model answer: Unclear file names are a recurring problem when teams share documents.",
            ),
            p(
              "Explain why a proposal can be contentious but still viable.",
              "Contentious concerns the disagreement it provokes; viable concerns its capacity to work.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which pairing best describes early research that may later change?",
          ["contentious issue", "preliminary findings", "untenable position"],
          1,
          "Preliminary marks the findings as early and provisional rather than settled.",
        ),
        q(
          2,
          "Why is compelling evidence stronger than interesting evidence?",
          [
            "It necessarily proves every detail.",
            "It has persuasive force and holds attention.",
            "It is always free from bias.",
          ],
          1,
          "Compelling suggests persuasive power, though it does not guarantee absolute proof.",
        ),
        q(
          3,
          "Which word focuses on whether an idea can be defended?",
          ["untenable", "contentious", "viable"],
          0,
          "An untenable position is one that cannot reasonably be maintained or defended.",
        ),
        q(
          4,
          "Which sentence uses the partnership accurately?",
          [
            "The viable evidence contradicted the report.",
            "The recurring solution failed every January.",
            "The plan offers a viable solution to the storage problem.",
          ],
          2,
          "Viable naturally modifies solution and means capable of working successfully.",
        ),
      ],
    },
    {
      slug: "preposition-patterns",
      title: "Preposition patterns",
      summary:
        "Control six verb-preposition patterns that frequently cause errors in advanced academic and professional writing.",
      objective:
        "Distinguish result in from result from, account for from account to, and use each pattern with the correct complement.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "The preposition is part of the lexical choice",
          paragraphs: [
            "In depend on, account for and conform to, the preposition is conventionally tied to the verb. Changing it may sound unnatural even when the general meaning seems obvious. Learn the pattern as one unit rather than attaching a preposition by intuition.",
            "Meaning also changes across patterns. Result in introduces the consequence: the delay resulted in cancellations. Result from introduces the cause: the cancellations resulted from the delay. The direction of the relationship determines the preposition.",
          ],
        },
        {
          type: "wordbank",
          title: "Six verb-preposition units",
          intro:
            "Say the whole phrase aloud and notice what kind of word or phrase follows the preposition.",
          words: prepositionWords,
        },
        {
          type: "rules",
          title: "Three patterns to keep separate",
          items: [
            "account for + a proportion means constitute it; account for + a discrepancy means explain it.",
            "result in + an effect introduces what happened; result from + a cause explains why it happened.",
            "deter someone from + noun/-ing discourages the action; prevent someone from + noun/-ing stops it.",
          ],
        },
        {
          type: "exercise",
          title: "Fix the pattern and the relationship",
          instructions:
            "Choose the complete phrase that is grammatical and preserves the direction of cause and effect.",
          items: [
            c(
              "Heavy rain caused the match to be cancelled. Choose the accurate sentence.",
              ["The match resulted in heavy rain.", "The match depended in heavy rain.", "The match resulted from heavy rain."],
              2,
              "The cancellation is the effect, so result from introduces heavy rain as its cause.",
            ),
            c(
              "Retired people make up 30% of the residents. Which completion is correct?",
              ["account for 30%", "account of 30%", "deter from 30%"],
              0,
              "Account for can mean constitute a specified amount or proportion.",
            ),
            c(
              "The new crossings discourage children from cycling to school. They ___ children ___ cycling to school.",
              ["prevent / from", "deter / from", "insist / on"],
              1,
              "Deter from means discourage rather than make impossible, which matches the intended meaning.",
            ),
            c(
              "All applicants must comply with the code. The formal phrasing is 'Applicants must ___ the code.'",
              ["depend on", "account for", "conform to"],
              2,
              "Conform to means comply with a rule or standard.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Control the complement",
          instructions:
            "Write the full sentence and then check that the noun or -ing form follows the preposition.",
          items: [
            p(
              "Use result in to say that the new policy caused shorter queues.",
              "The new policy resulted in shorter queues.",
              "The effect follows result in.",
            ),
            p(
              "Use account for to explain a missing payment.",
              "Model answer: The bank accounted for the missing payment by correcting a processing error.",
              "Use the explanatory sense, not the proportional sense.",
            ),
            p(
              "Write two contrasting sentences with depend on and insist on.",
              "Model answer: Our conclusion depends on reliable measurements. The editor insisted on checking every source.",
              "Depend on expresses reliance; insist on expresses firm demand.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which sentence correctly explains a cause?",
          ["The fault resulted in a power cut.", "The power cut resulted from a fault.", "The power cut depended from a fault."],
          1,
          "Result from introduces the cause; the power cut is the effect.",
        ),
        q(
          2,
          "What does 'commuting accounts for 40% of emissions' mean?",
          ["Commuting explains 40% of emissions.", "Commuting prevents 40% of emissions.", "Commuting constitutes 40% of emissions."],
          2,
          "With a proportion, account for means make up or constitute.",
        ),
        q(
          3,
          "Why is 'deter on' incorrect in 'deter on entering the site'?",
          ["The verb takes from before a noun or -ing form.", "The verb never takes a complement.", "Deter can only be followed by an adjective."],
          0,
          "The established pattern is deter someone from doing something.",
        ),
        q(
          4,
          "Which completion expresses firm demand?",
          ["conform to a receipt", "insist on a receipt", "result in a receipt"],
          1,
          "Insist on introduces the thing someone firmly requires.",
        ),
      ],
    },
    {
      slug: "academic-and-professional-collocations",
      title: "Academic and professional collocations",
      summary:
        "Use six collocations that make research claims, advice, deadlines and group decisions sound precise and idiomatic.",
      objective:
        "Select professional chunks according to their exact function and avoid overstating consensus or evidence.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Chunks organise expert work",
          paragraphs: [
            "Academic and professional English relies on reusable combinations: conduct research, draw a distinction, exercise caution. These chunks help writers signal what they are doing, whether investigating, differentiating, qualifying or agreeing.",
            "They also encode stance. Lend weight to a claim supports it without proving it; reach a consensus describes group agreement, not the absence of all disagreement. A strong writer uses the chunk that accurately reports the communicative act.",
          ],
        },
        {
          type: "wordbank",
          title: "Collocations for research and professional decisions",
          intro:
            "Notice the function each chunk performs in the example sentence.",
          words: professionalWords,
        },
        {
          type: "dialogue",
          title: "Preparing a research briefing",
          intro:
            "The speakers use collocations to distinguish tasks, evidence and the status of a recommendation.",
          lines: [
            {
              speaker: "Research lead",
              text: "We'll conduct research in two stages so the team can meet a deadline without weakening the design.",
            },
            {
              speaker: "Analyst",
              text: "We should draw a distinction between the survey's preliminary findings and the interviews.",
            },
            {
              speaker: "Research lead",
              text: "Agreed, and independent observations will lend weight to the interpretation.",
            },
            {
              speaker: "Policy adviser",
              text: "Until then, exercise caution; the panel has not reached a consensus on the recommendation.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Choose the professional function",
          instructions:
            "Select the chunk that accurately describes what the writer or group is doing.",
          items: [
            c(
              "The author separates correlation from causation. In formal terms, the author ___.",
              ["conducts research", "draws a distinction", "reaches a consensus"],
              1,
              "Draw a distinction means explain an important difference between two things.",
            ),
            c(
              "Several independent studies support the interpretation. They ___ the argument.",
              ["lend weight to", "exercise caution with", "meet a deadline for"],
              0,
              "Lend weight to means make a claim more convincing or important.",
            ),
            c(
              "The committee finally agreed on one recommendation. It ___.",
              ["reached a consensus", "drew a distinction", "conducted research"],
              0,
              "Reach a consensus means arrive at an agreement accepted by the group.",
            ),
            c(
              "Because returns are uncertain, investors should ___ before transferring their savings.",
              ["meet a deadline", "garner publicity", "exercise caution"],
              2,
              "Exercise caution means act carefully to avoid possible loss or error.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a concise professional update",
          instructions:
            "Answer each prompt aloud or in writing, then compare with the model responses.",
          items: [
            p(
              "Use two collocations from the lesson to describe a research task and its deadline.",
              "Model answer: We will conduct research into customer feedback and meet a deadline by publishing the summary on Friday.",
            ),
            p(
              "Write a sentence that supports a claim without claiming proof. Use lend weight to.",
              "Model answer: The consistent testimony of three witnesses lends weight to the proposed explanation.",
            ),
            p(
              "Explain why 'the team reached a consensus' should not be used when one member merely stopped objecting.",
              "Consensus implies a shared agreement; silence or withdrawal of an objection does not necessarily establish it.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which chunk reports an argumentative move rather than a research activity?",
          ["draw a distinction", "conduct research", "meet a deadline"],
          0,
          "Drawing a distinction explains a difference and shapes how a claim is understood.",
        ),
        q(
          2,
          "What does lend weight to avoid implying?",
          ["That evidence can be relevant", "That a claim is absolutely proved", "That a study has a clear purpose"],
          1,
          "The phrase adds support or credibility without asserting conclusive proof.",
        ),
        q(
          3,
          "Which sentence uses exercise caution naturally?",
          ["The team exercised caution on the football pitch.", "She exercised caution when interpreting incomplete data.", "He exercised caution that the bus was late."],
          1,
          "Exercise caution naturally introduces careful behaviour in a risky or uncertain situation.",
        ),
        q(
          4,
          "What is the key feature of reach a consensus?",
          ["One expert makes the decision.", "Everyone reads the same report.", "The group arrives at an accepted agreement."],
          2,
          "Consensus concerns agreement within a group, even if it takes time to achieve.",
        ),
      ],
    },
  ],
};
