import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit, LessonWord } from "@/data/lessons/types";

const shadeWords: LessonWord[] = [
  {
    term: "reluctant",
    meaning: "unwilling and therefore slow to agree or act",
    example: "She was reluctant to criticise a colleague in public.",
  },
  {
    term: "averse",
    meaning: "having a strong feeling against doing something",
    example: "He is averse to taking risks with other people's savings.",
  },
  {
    term: "hesitant",
    meaning: "uncertain and therefore slow to speak or act",
    example: "The hesitant applicant paused before answering the final question.",
  },
  {
    term: "ambivalent",
    meaning: "having mixed or contradictory feelings about something",
    example: "I feel ambivalent about moving abroad: excited, but also anxious.",
  },
  {
    term: "resolute",
    meaning: "firmly determined and unwilling to change course",
    example: "The resolute chair refused to extend the vote.",
  },
  {
    term: "steadfast",
    meaning: "loyal and dependable over a long period",
    example: "Her steadfast support helped the project survive several setbacks.",
  },
];

const connotationWords: LessonWord[] = [
  {
    term: "thrifty",
    meaning: "careful with money in a sensible, approving way",
    example: "Thrifty shoppers compare unit prices before filling their baskets.",
  },
  {
    term: "stingy",
    meaning: "unwilling to spend or share money, usually with disapproval",
    example: "Calling the manager stingy made the pay negotiation personal.",
  },
  {
    term: "assertive",
    meaning: "confident about expressing needs while respecting others",
    example: "An assertive negotiator can say no without closing the discussion.",
  },
  {
    term: "pushy",
    meaning: "too forceful in trying to get what one wants",
    example: "The pushy salesperson kept interrupting our questions.",
  },
  {
    term: "eccentric",
    meaning: "unusual in an interesting or appealing way",
    example: "The eccentric inventor stored every broken clock in his workshop.",
  },
  {
    term: "erratic",
    meaning: "unpredictable and therefore difficult to rely on",
    example: "Erratic deliveries made the shop's stock planning impossible.",
  },
];

const registerWords: LessonWord[] = [
  {
    term: "commence",
    meaning: "to begin, especially in a formal or official context",
    example: "The training course will commence at nine o'clock on Monday.",
  },
  {
    term: "endeavour",
    meaning: "to try hard to achieve something, often a demanding task",
    example: "We endeavour to answer every enquiry within two working days.",
  },
  {
    term: "ascertain",
    meaning: "to find out something with certainty",
    example: "The auditor will ascertain whether the figures were verified.",
  },
  {
    term: "reside",
    meaning: "to live in a place, especially as an official or formal fact",
    example: "Students who reside on campus must follow the night-time policy.",
  },
  {
    term: "purchase",
    meaning: "to buy, especially in a commercial or transactional context",
    example: "The library may purchase up to twelve new e-books each term.",
  },
  {
    term: "utilise",
    meaning: "to use something effectively or for a practical purpose",
    example: "The team will utilise the survey data to improve the booking form.",
  },
];

const derivationWords: LessonWord[] = [
  {
    term: "contend",
    meaning: "to argue a claim or struggle with a difficulty",
    example: "The lawyer will contend that the contract was never valid.",
  },
  {
    term: "contention",
    meaning: "a disputed claim or a strong belief presented as true",
    example: "Her contention that demand caused the shortage needs evidence.",
  },
  {
    term: "contentious",
    meaning: "likely to cause strong disagreement",
    example: "The contentious proposal divided the committee within minutes.",
  },
  {
    term: "contest",
    meaning: "to challenge a decision or compete in an event",
    example: "The losing candidate may contest the result in court.",
  },
  {
    term: "contestant",
    meaning: "a person taking part in a competition",
    example: "Each contestant must submit the design before the deadline.",
  },
  {
    term: "incontestable",
    meaning: "so strong or clear that it cannot reasonably be disputed",
    example: "The photographs provide incontestable evidence of the damage.",
  },
];

const preciseWords: LessonWord[] = [
  {
    term: "acute",
    meaning: "severe and demanding immediate attention",
    example: "The region faces an acute shortage of affordable housing.",
  },
  {
    term: "compelling",
    meaning: "so interesting or convincing that it holds attention",
    example: "The witness gave a compelling account of the rescue.",
  },
  {
    term: "salient",
    meaning: "most noticeable or important in relation to the current topic",
    example: "The summary highlights the salient differences between the two plans.",
  },
  {
    term: "substantial",
    meaning: "large in amount, value or importance",
    example: "Repairs will require a substantial investment of both time and money.",
  },
  {
    term: "exemplary",
    meaning: "excellent enough to serve as a model for others",
    example: "Her exemplary handling of the complaint earned the team's trust.",
  },
  {
    term: "problematic",
    meaning: "causing a difficulty that needs to be addressed",
    example: "Collecting personal data without consent is legally problematic.",
  },
];

export const c1VocabularyUnit1: LessonUnit = {
  title: "Precision and meaning",
  description:
    "Separate near-synonyms by strength, certainty and feeling, then control formality, derivation and lexical variety.",
  lessons: [
    {
      slug: "shades-of-meaning-in-synonyms",
      title: "Shades of meaning in synonyms",
      summary:
        "Distinguish six advanced words that describe reluctance, uncertainty and determination without flattening their differences.",
      objective:
        "Choose synonyms according to strength, duration and the speaker's attitude, and justify the choice in context.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "A synonym is not an identical word",
          paragraphs: [
            "Near-synonyms often share a broad meaning but divide it differently. Reluctant suggests unwillingness; hesitant suggests uncertainty; averse suggests a stronger feeling against an action. Choosing between them changes the explanation you imply.",
            "Test a word on three dimensions: How strong is it? How long does the quality last? What attitude does it express? Resolute describes a firm decision, while steadfast usually suggests dependable loyalty sustained through difficulty.",
          ],
        },
        {
          type: "wordbank",
          title: "Reluctance, uncertainty and resolve",
          intro:
            "Read each definition with its example, paying attention to what the word implies rather than only what it denotes.",
          words: shadeWords,
        },
        {
          type: "table",
          title: "Same area, different explanation",
          caption:
            "Use the implied cause to decide which member of a pair fits.",
          columns: ["Word", "Implied cause or focus", "Typical pattern"],
          rows: [
            ["reluctant", "Unwillingness to agree or act", "reluctant to + verb"],
            ["hesitant", "Uncertainty about what to do", "hesitant about + noun/-ing"],
            ["ambivalent", "Two conflicting feelings at once", "ambivalent about + noun/-ing"],
            ["resolute", "A firm purpose that will not easily change", "resolute in + noun/-ing"],
            ["steadfast", "Loyalty maintained over time", "steadfast support / loyalty"],
          ],
        },
        {
          type: "exercise",
          title: "Select the exact shade",
          instructions:
            "Choose the word whose implied cause and strength fit the sentence. Read the explanation before trying another item.",
          items: [
            c(
              "Mara admired the offer but could not decide whether to accept it. She was ___ about the move.",
              ["reluctant", "ambivalent", "steadfast"],
              1,
              "Ambivalent captures two coexisting feelings: admiration and uncertainty. It does not mean simply unwilling.",
              "Are there mixed feelings, one clear refusal or lasting loyalty?",
            ),
            c(
              "The witness paused because he was unsure of the date. He gave a ___ answer.",
              ["resolute", "hesitant", "averse"],
              1,
              "Hesitant points to uncertainty affecting the answer; the sentence explicitly says the witness was unsure.",
            ),
            c(
              "Although three partners withdrew, Noor remained ___ in her support of the charity.",
              ["pushy", "ambivalent", "steadfast"],
              2,
              "Steadfast suggests loyal, continuing support despite pressure or setbacks.",
            ),
            c(
              "The director was ___ to postpone the launch, but accepted that safety checks took time.",
              ["reluctant", "erratic", "contentious"],
              0,
              "Reluctant means unwilling yet willing to act; it fits the contrast with accepting the delay.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Make the distinction audible",
          instructions:
            "Write or say a complete answer before revealing the model. Keep the implied cause in your explanation.",
          items: [
            p(
              "Explain the difference between reluctant and hesitant in one sentence.",
              "Reluctant implies unwillingness, while hesitant implies uncertainty about acting or speaking.",
              "Think about willingness versus confidence.",
            ),
            p(
              "Write two sentences about the same job offer: one with ambivalent and one with resolute.",
              "Model answer: I felt ambivalent about the salary but accepted the role. The hiring panel was resolute about the deadline.",
            ),
            p(
              "Describe a friend who supported you over several difficult years. Use steadfast.",
              "Model answer: My friend was steadfast in her support while I changed careers.",
              "Steadfast often partners with support, loyalty or commitment.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "A manager says, 'I am unsure whether the evidence supports the claim.' Which word best captures the manager's position?",
          ["averse", "hesitant", "steadfast"],
          1,
          "Hesitant describes uncertainty that slows a decision or response. Averse would imply opposition, not doubt.",
        ),
        q(
          2,
          "Why is ambivalent more precise than undecided in 'She loved the city but dreaded leaving her family'?",
          [
            "It means she has no opinion.",
            "It means she feels two conflicting emotions.",
            "It means she has decided to stay.",
          ],
          1,
          "The sentence presents attraction and fear together, so a word for mixed feelings is exact.",
        ),
        q(
          3,
          "Which use of resolute is most natural?",
          [
            "She was resolute in her refusal to compromise.",
            "She was resolute to having mixed feelings.",
            "She was resolute support during the crisis.",
          ],
          0,
          "Resolute can be followed by in + noun or -ing form, and it describes firm determination.",
        ),
        q(
          4,
          "A volunteer keeps helping after the project loses funding. Which quality is most clearly shown?",
          [
            "Reluctance",
            "Hesitation",
            "Steadfastness",
          ],
          2,
          "Continuing loyalty through difficulty is the defining idea of steadfastness.",
        ),
      ],
    },
    {
      slug: "connotation-and-evaluation",
      title: "Connotation and evaluation",
      summary:
        "Recognise approving, neutral and disapproving colour in adjectives used to describe money, behaviour and reliability.",
      objective:
        "Separate denotation from evaluation and replace loaded wording when a neutral account is required.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "The judgement inside the word",
          paragraphs: [
            "Denotation is the basic information a word carries; connotation is the attitude or association it adds. Thrifty and stingy can both concern limited spending, but the first normally approves of sensible economy and the second disapproves of selfish restraint.",
            "Connotation also depends on context. Eccentric may be affectionate in a profile and dismissive in an appraisal. When writing critically, ask whether the adjective reports a quality or quietly announces your verdict.",
          ],
        },
        {
          type: "wordbank",
          title: "Words that carry a verdict",
          intro:
            "Notice the evaluative wording in the meanings before using each term.",
          words: connotationWords,
        },
        {
          type: "table",
          title: "Approval, neutrality and disapproval",
          caption:
            "These are typical values, not absolute labels; audience and context can shift them.",
          columns: ["Area", "Approving or appealing", "Disapproving"],
          rows: [
            ["Money", "thrifty: sensible economy", "stingy: selfish unwillingness to spend"],
            ["Self-expression", "assertive: confident and respectful", "pushy: excessively forceful"],
            ["Unusual behaviour", "eccentric: intriguingly unconventional", "erratic: unreliably unpredictable"],
          ],
        },
        {
          type: "exercise",
          title: "Control the evaluative colour",
          instructions:
            "Select the adjective that supports the writer's intended stance without changing the facts.",
          items: [
            c(
              "The neutral report says the customer checked every receipt before paying. The writer wants approval: 'The customer was ___.'",
              ["stingy", "thrifty", "pushy"],
              1,
              "Thrifty frames careful checking as sensible economy. Stingy would add an unsupported negative judgement.",
            ),
            c(
              "During the meeting, Leon repeatedly talked over quieter colleagues. The critical adjective is ___.",
              ["assertive", "eccentric", "pushy"],
              2,
              "Pushy conveys excessive force; assertive does not imply ignoring other speakers.",
            ),
            c(
              "The buses arrived at unpredictable times, making journeys difficult to plan. The best word is ___.",
              ["erratic", "thrifty", "steadfast"],
              0,
              "Erratic means unpredictably inconsistent, which directly explains the planning problem.",
            ),
            c(
              "The inventor's unusual hats amused everyone. A friendly profile would call the hats ___.",
              ["contentious", "eccentric", "stingy"],
              1,
              "Eccentric has an appealing or amused connotation in this friendly context, unlike a neutral label such as unusual.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Edit the stance",
          instructions:
            "Answer in complete sentences, then compare with the model. Preserve facts while changing only the evaluation.",
          items: [
            p(
              "Rewrite 'The director is pushy about deadlines' neutrally.",
              "Model answer: The director insists that every deadline be met.",
              "Report the observable behaviour rather than judging the person.",
            ),
            p(
              "Write one approving and one disapproving sentence about someone who spends very little.",
              "Model answer: She is thrifty and plans every purchase. He is stingy and refuses to contribute to shared costs.",
            ),
            p(
              "Explain why assertive is not a synonym for aggressive.",
              "Assertive behaviour expresses a position while respecting others; aggressive behaviour threatens or overwhelms them.",
              "Include the difference in effect on other people.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which pair shares a broad topic but carries opposite evaluative colour?",
          [
            "thrifty / stingy",
            "reside / live",
            "contend / struggle",
          ],
          0,
          "Thrifty usually approves of careful spending; stingy usually criticises unwillingness to spend.",
        ),
        q(
          2,
          "In an impartial incident report, which sentence is most appropriate?",
          [
            "The eccentric employee behaved unpredictably again.",
            "The employee arrived at inconsistent times over three days.",
            "The pushy employee forced everyone to listen.",
          ],
          1,
          "The second sentence describes observable evidence without inserting the reporter's judgement.",
        ),
        q(
          3,
          "Which word best describes a negotiator who states limits clearly but still listens?",
          [
            "pushy",
            "stingy",
            "assertive",
          ],
          2,
          "Assertiveness combines clear self-expression with respect for the other party.",
        ),
        q(
          4,
          "Why can the connotation of eccentric change between two texts?",
          [
            "It has no dictionary meaning.",
            "It can signal either appealing originality or dismissive oddity.",
            "It always means mentally unwell.",
          ],
          1,
          "The same unconventional quality may be valued by one audience and judged negatively by another.",
        ),
      ],
    },
    {
      slug: "formal-and-informal-equivalents",
      title: "Formal and informal equivalents",
      summary:
        "Use six formal verbs accurately in official, academic and professional settings without making casual speech sound inflated.",
      objective:
        "Match lexical register to audience and purpose, and avoid choosing a formal synonym merely because it sounds impressive.",
      minutes: 29,
      blocks: [
        {
          type: "text",
          title: "Formal is a setting, not a quality badge",
          paragraphs: [
            "Formal vocabulary often appears in notices, reports, official correspondence and legal or institutional writing. Commence suits the start of a course or ceremony; begin is usually more natural in a quick message to a colleague.",
            "A formal word still needs the right meaning. Ascertain means establish something with certainty, not simply ask. Utilise implies effective practical use, so it is not automatically better than use in every sentence.",
          ],
        },
        {
          type: "wordbank",
          title: "Formal verbs with distinct uses",
          intro:
            "Learn the context and meaning together, not as ornamental replacements for shorter words.",
          words: registerWords,
        },
        {
          type: "table",
          title: "Shift the register without changing the fact",
          caption:
            "The right-hand column is suitable for a formal notice or report, not necessarily a conversation.",
          columns: ["Informal or neutral", "Formal", "Useful restriction"],
          rows: [
            ["start", "commence", "an event, process or course"],
            ["try hard", "endeavour", "an effortful or worthwhile task"],
            ["find out for certain", "ascertain", "information that requires verification"],
            ["live", "reside", "a place as an official residential fact"],
            ["buy", "purchase", "a commercial or administrative transaction"],
            ["use well", "utilise", "a resource with a practical purpose"],
          ],
        },
        {
          type: "exercise",
          title: "Choose the register and the meaning",
          instructions:
            "Pick the word that fits both the context and the intended meaning.",
          items: [
            c(
              "The university notice needs a formal verb: 'The semester will ___ on 14 September.'",
              ["reside", "commence", "ascertain"],
              1,
              "Commence is the formal equivalent of begin and commonly introduces an academic term or event.",
            ),
            c(
              "Before approving the claim, the investigator must ___ whether the signature is genuine.",
              ["purchase", "endeavour", "ascertain"],
              2,
              "Ascertain means establish the truth with certainty, which fits verification.",
            ),
            c(
              "'We ___ to provide clear guidance' is appropriate in a formal service statement because it means:",
              ["try hard", "live permanently", "buy in bulk"],
              0,
              "Endeavour means make a serious effort, especially towards a demanding or worthwhile aim.",
            ),
            c(
              "The grant will cover software that the research team can ___ to analyse the samples.",
              ["contend", "reside", "utilise"],
              2,
              "Utilise focuses on using a resource effectively for a practical purpose.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Translate for two audiences",
          instructions:
            "Write both versions in each response, then compare with the models.",
          items: [
            p(
              "Change 'We start work at nine' into a sentence suitable for an official staff notice.",
              "Formal: Work will commence at nine o'clock. Informal: We start work at nine.",
            ),
            p(
              "Write a neutral sentence and a formal sentence saying that a resident lives on campus.",
              "Model answer: She lives on campus. She resides in university accommodation.",
              "Reside presents living somewhere as a formal fact.",
            ),
            p(
              "Explain why 'Please utilise this form to purchase a ticket' may sound over-formal on a casual event page.",
              "It stacks transactional formal words where a simple invitation would be clearer: 'Use this form to buy a ticket.'",
              "Consider audience, purpose and transparency.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which sentence uses a formal verb most naturally?",
          [
            "I'll ascertain what time the café opens.",
            "The inquiry will ascertain the cause of the failure.",
            "She ascertained a sandwich for lunch.",
          ],
          1,
          "Ascertain is formal and concerns establishing a fact, especially through investigation.",
        ),
        q(
          2,
          "What is the main difference between commence and begin?",
          [
            "Commence is more formal and typical of official events.",
            "Begin is only written English.",
            "Commence means stop.",
          ],
          0,
          "They overlap in meaning, but commence belongs to a more formal register.",
        ),
        q(
          3,
          "Why is utilise unnecessary in 'Utilise a pen to write your name'?",
          [
            "It wrongly implies that pens cannot be used.",
            "The simple verb use is clearer for an ordinary instruction.",
            "Utilise can only describe people.",
          ],
          1,
          "Formal vocabulary should serve purpose, and a routine instruction rarely needs it.",
        ),
        q(
          4,
          "Which pair correctly matches verb and typical context?",
          [
            "reside — beginning a ceremony",
            "endeavour — establishing citizenship",
            "purchase — buying equipment",
          ],
          2,
          "Purchase is a formal verb for buying and fits a commercial or administrative transaction.",
        ),
      ],
    },
    {
      slug: "word-families-and-derivation",
      title: "Word families and derivation",
      summary:
        "Navigate the contend family and use suffixes to move accurately between verbs, nouns, adjectives and people.",
      objective:
        "Recognise word class and related meaning, and avoid treating all members of a word family as interchangeable.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Related roots, different jobs",
          paragraphs: [
            "Derivation changes a word's class and often refines its meaning. Contend can mean argue a position or struggle with a problem; contention names the claim or dispute; contentious describes what invites disagreement.",
            "A family resemblance does not guarantee the same grammar. A person entering a competition is a contestant, but that noun does not mean the person challenges a legal result. Check the word class and the local meaning before transferring a familiar root into a new sentence.",
          ],
        },
        {
          type: "wordbank",
          title: "The contend family and its neighbours",
          intro:
            "Some entries share spelling rather than an entirely separate history; focus on their present-day use.",
          words: derivationWords,
        },
        {
          type: "table",
          title: "Read the ending, then check the role",
          caption:
            "Suffixes signal a grammatical job, but the full dictionary sense still matters.",
          columns: ["Term", "Word class", "Common role"],
          rows: [
            ["contend", "verb", "argue a case or struggle with something"],
            ["contention", "noun", "a claim or state of disagreement"],
            ["contentious", "adjective", "describing an issue likely to provoke dispute"],
            ["contest", "verb or noun", "challenge a result; also a competition"],
            ["contestant", "noun for a person", "someone competing in an event"],
            ["incontestable", "adjective", "describing evidence that cannot reasonably be disputed"],
          ],
        },
        {
          type: "exercise",
          title: "Use the family member precisely",
          instructions:
            "Choose the term that fits the grammatical slot and the intended meaning.",
          items: [
            c(
              "The defence will ___ that the new evidence is unreliable.",
              ["contend", "contention", "contentious"],
              0,
              "A verb is needed after will. Contend means put forward an argument or claim.",
            ),
            c(
              "The ___ that automation creates more jobs than it removes remains hotly debated.",
              ["contestant", "contend", "contention"],
              2,
              "A noun names the disputed claim. The article the and the following that-clause identify a proposition.",
            ),
            c(
              "Abortion is a ___ political issue in many countries.",
              ["incontestable", "contentious", "contestant"],
              1,
              "Contentious describes an issue likely to generate strong disagreement.",
            ),
            c(
              "Each ___ in the final will answer questions from three judges.",
              ["contestant", "contend", "contention"],
              0,
              "Contestant names a person taking part in a competition.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build and test word families",
          instructions:
            "Produce a full sentence for each prompt, then check the model for word class and meaning.",
          items: [
            p(
              "Write one sentence with contend and one with contention about the same claim.",
              "Model answer: The researcher will contend that the sample was biased. Her contention rests on the uneven distribution of participants.",
            ),
            p(
              "Use incontestable to evaluate evidence in a complete sentence.",
              "Model answer: The timestamped footage provides incontestable evidence that the warning light failed.",
              "The word means beyond reasonable dispute, not merely useful.",
            ),
            p(
              "Explain why contestant cannot replace contender in 'She is a contender for the leadership role'.",
              "A contestant takes part in a competition; a contender is a person with a realistic chance of winning or succeeding.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which sentence uses contention correctly?",
          [
            "The team contention against the new rule.",
            "Her contention is that the costs were overstated.",
            "The contentiously answered the phone.",
          ],
          1,
          "Contention can be a countable noun meaning a claim that someone argues is true.",
        ),
        q(
          2,
          "What does contentious add to the noun it describes?",
          [
            "It is likely to cause disagreement.",
            "It has been proved correct.",
            "It belongs to a competition.",
          ],
          0,
          "Contentious evaluates an issue as provoking or likely to provoke dispute.",
        ),
        q(
          3,
          "Why is 'contestant for the job' less natural than 'candidate for the job'?",
          [
            "Contestant cannot be plural.",
            "Candidate is always more formal.",
            "Contestant specifically means someone taking part in a competition.",
          ],
          2,
          "The competition sense of contestant usually does not extend naturally to ordinary job selection.",
        ),
        q(
          4,
          "Which word best completes 'The committee reached a decision after considerable ___'?",
          [
            "contend",
            "contention",
            "contestant",
          ],
          1,
          "Considerable requires a noun here, and contention can refer to prolonged disagreement.",
        ),
      ],
    },
    {
      slug: "avoiding-overused-vocabulary",
      title: "Avoiding overused vocabulary",
      summary:
        "Replace vague praise, emphasis and size words with six precise adjectives that explain what makes something notable.",
      objective:
        "Select a specific adjective by meaning rather than novelty, and remove unnecessary intensifiers before revising prose.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Precision beats decoration",
          paragraphs: [
            "Words such as very, really and good often announce importance without specifying it. A substantial grant is large in amount; an acute shortage is severe and urgent; a compelling argument is convincing enough to hold attention. Each choice gives the reader different information.",
            "Do not replace a plain word simply because it is common. In a safety instruction, stop may be clearer than cease, and a complex adjective can hide the action readers need to take. Advanced range includes knowing when the ordinary word is exact.",
          ],
        },
        {
          type: "wordbank",
          title: "Six precise alternatives to vague labels",
          intro:
            "The examples show the particular kind of strength or importance each adjective conveys.",
          words: preciseWords,
        },
        {
          type: "table",
          title: "Upgrade the information, not just the syllable count",
          caption:
            "Only use the alternative if its specific meaning is supported by the sentence.",
          columns: ["Vague wording", "Precise option", "What becomes clear"],
          rows: [
            ["very serious", "acute", "severity and urgency"],
            ["very interesting", "compelling", "the power to hold attention or persuade"],
            ["very relevant", "salient", "prominence within the current topic"],
            ["very large", "substantial", "significant amount, value or importance"],
            ["very good", "exemplary", "good enough to serve as a model"],
            ["a big problem", "problematic", "something creates a difficulty requiring attention"],
          ],
        },
        {
          type: "exercise",
          title: "Choose information over intensification",
          instructions:
            "Select the adjective whose exact meaning is supported by the context.",
          items: [
            c(
              "The clinic warned of an ___ shortage of nurses before the winter season.",
              ["exemplary", "acute", "salient"],
              1,
              "Acute adds severity and urgency, which fits a warning about an approaching shortage.",
            ),
            c(
              "The documentary presents a ___ case for protecting the wetland, combining clear evidence with vivid testimony.",
              ["substantial", "problematic", "compelling"],
              2,
              "Compelling suggests an argument that persuades and holds attention.",
            ),
            c(
              "The report opens with the ___ findings and leaves minor procedural details for an appendix.",
              ["salient", "stingy", "hesitant"],
              0,
              "Salient identifies the most important findings for the reader's current purpose.",
            ),
            c(
              "The restoration will require a ___ investment because the roof and foundations both need repair.",
              ["exemplary", "substantial", "eccentric"],
              1,
              "Substantial describes the significant scale of the investment.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Revise a vague paragraph",
          instructions:
            "Answer aloud or in writing. Model responses show precise options, not the only possible revisions.",
          items: [
            p(
              "Rewrite 'The project was very successful' with exemplary.",
              "Model answer: The project was exemplary because other schools adopted its teaching model.",
              "Explain why it could serve as a model.",
            ),
            p(
              "Replace 'a very big and important issue' with two precise adjectives from the lesson.",
              "Model answer: a substantial and salient issue",
              "Substantial concerns scale; salient concerns importance to the topic.",
            ),
            p(
              "Explain why stop should not automatically be replaced by cease in a public warning.",
              "In an urgent warning, the familiar word stop is faster to understand; precision includes choosing language readers can act on.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which adjective specifically suggests that something could be copied as a model?",
          ["salient", "exemplary", "substantial"],
          1,
          "Exemplary means excellent enough to serve as an example to others.",
        ),
        q(
          2,
          "Why is acute better than large in 'an acute power shortage'?",
          [
            "It describes severity and urgency.",
            "It only describes physical size.",
            "It means the shortage is temporary.",
          ],
          0,
          "Acute characterises a problem as severe and demanding immediate attention.",
        ),
        q(
          3,
          "What does salient select from a body of information?",
          [
            "The least certain claims",
            "The longest available sentences",
            "The most prominent or relevant points",
          ],
          2,
          "Salient means standing out as most noticeable or important for the current purpose.",
        ),
        q(
          4,
          "Which revision is most precise?",
          [
            "The really compelling exhibit was very interesting.",
            "The compelling exhibit held visitors' attention for hours.",
            "The salient exhibit was extremely substantial.",
          ],
          1,
          "The second sentence uses compelling accurately and shows its effect without redundant intensifiers.",
        ),
      ],
    },
  ],
};
