import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit, LessonWord } from "@/data/lessons/types";

const nearSynonymWords: LessonWord[] = [
  {
    term: "plausible",
    meaning: "seeming reasonable or likely to be true, without being established as true",
    example: "The witness offered a plausible timeline, though the records contradict two details.",
  },
  {
    term: "specious",
    meaning: "apparently attractive or reasonable but actually misleading or false",
    example: "The article's specious argument equates correlation with causation.",
  },
  {
    term: "cogent",
    meaning: "clear, logical and convincing",
    example: "The report presents a cogent case for revising the procurement rules.",
  },
  {
    term: "trenchant",
    meaning: "incisive and forcefully effective in analysis or criticism",
    example: "Her trenchant critique exposed the weakness in the minister's reasoning.",
  },
  {
    term: "persuasive",
    meaning: "effective at convincing someone to believe or do something",
    example: "The proposal became more persuasive after the cost comparison was added.",
  },
  {
    term: "astute",
    meaning: "showing an accurate and shrewd understanding of people or situations",
    example: "The editor's astute question revealed an assumption nobody had examined.",
  },
];

const stanceWords: LessonWord[] = [
  {
    term: "sanguine",
    meaning: "optimistic, especially about a difficult or uncertain future",
    example: "The chair remained sanguine about the talks despite two cancelled sessions.",
  },
  {
    term: "circumspect",
    meaning: "careful to consider risks and avoid possible offence or error",
    example: "The committee was circumspect in its public response before the inquiry ended.",
  },
  {
    term: "equivocal",
    meaning: "ambiguous or deliberately unclear, allowing more than one interpretation",
    example: "The minister gave an equivocal answer about whether the tax would rise.",
  },
  {
    term: "qualified",
    meaning: "limited by stated conditions rather than complete or unrestricted",
    example: "The panel offered qualified support for the pilot, subject to independent review.",
  },
  {
    term: "dispassionate",
    meaning: "not influenced by strong emotion or personal feeling",
    example: "A dispassionate reading of the data suggests a slower recovery.",
  },
  {
    term: "partisan",
    meaning: "strongly committed to one side and insufficiently impartial",
    example: "The reviewer dismissed the evidence as partisan without addressing its findings.",
  },
];

const socialMeaningWords: LessonWord[] = [
  {
    term: "courteous",
    meaning: "polite and considerate in manner",
    example: "The courteous reply addressed every objection without conceding the argument.",
  },
  {
    term: "deferential",
    meaning: "showing respect for someone's authority, status or wishes",
    example: "His deferential tone made clear that he would not challenge the chair's ruling.",
  },
  {
    term: "presumptuous",
    meaning: "improperly confident in assuming that something is permitted or acceptable",
    example: "It would be presumptuous to announce the result before the votes are counted.",
  },
  {
    term: "ingratiating",
    meaning: "trying too deliberately to win another person's approval",
    example: "The candidate's ingratiating praise of the host felt calculated rather than sincere.",
  },
  {
    term: "obsequious",
    meaning: "excessively eager to obey or please someone important",
    example: "The obsequious waiter interrupted each guest to agree with the critic.",
  },
  {
    term: "unaffected",
    meaning: "natural and sincere rather than artificial or deliberately impressive",
    example: "Her unaffected account of the rescue avoided any hint of self-promotion.",
  },
];

const euphemismWords: LessonWord[] = [
  {
    term: "passed away",
    meaning: "a gentle expression used instead of died, often to acknowledge grief",
    example: "The notice informed colleagues that the founder's sister had passed away.",
  },
  {
    term: "let go",
    meaning: "an expression that can soften the impact of dismissing someone from employment",
    example: "The company let go of forty staff as part of the restructuring.",
  },
  {
    term: "collateral damage",
    meaning: "unintended civilian harm or destruction caused by a military operation",
    example: "The report examined whether the strike caused collateral damage.",
  },
  {
    term: "enhanced interrogation",
    meaning: "a euphemistic term used for coercive interrogation methods, often criticised as torture",
    example: "The hearing debated whether enhanced interrogation amounted to torture.",
  },
  {
    term: "between jobs",
    meaning: "a tactful expression for being unemployed at present",
    example: "He described himself as between jobs while he retrained for a new career.",
  },
  {
    term: "correctional facility",
    meaning: "an institutional expression for a prison",
    example: "The policy applies equally to every correctional facility in the state.",
  },
];

const evidenceWords: LessonWord[] = [
  {
    term: "anecdotal",
    meaning: "based on personal reports rather than systematic investigation",
    example: "The evidence is anecdotal: several staff described delays, but no logs were examined.",
  },
  {
    term: "empirical",
    meaning: "based on observation or experiment rather than theory alone",
    example: "The claim requires empirical evidence gathered under controlled conditions.",
  },
  {
    term: "circumstantial",
    meaning: "suggesting a conclusion through related facts rather than direct proof",
    example: "The fingerprints provide circumstantial evidence that the suspect entered the room.",
  },
  {
    term: "corroborated",
    meaning: "supported or confirmed by additional independent evidence",
    example: "Two weather stations corroborated the eyewitness's account of the storm.",
  },
  {
    term: "unsubstantiated",
    meaning: "not supported by enough evidence to be accepted as established",
    example: "The allegation remained unsubstantiated after a three-month inquiry.",
  },
  {
    term: "inconclusive",
    meaning: "not producing a definite result or decision",
    example: "The first trial was inconclusive because the sample was too small.",
  },
];

export const c2VocabularyUnit1: LessonUnit = {
  title: "Meaning and nuance",
  description:
    "Discriminate subtle lexical choices, calibrate stance and social meaning, and report evidence or sensitive facts without overstatement.",
  lessons: [
    {
      slug: "fine-distinctions-between-near-synonyms",
      title: "Fine distinctions between near-synonyms",
      summary:
        "Separate apparent reasonableness from genuine reasoning by distinguishing plausible, specious, cogent, trenchant, persuasive and astute.",
      objective:
        "Calibrate claims according to truth status, logical force, critical sharpness and audience response.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Appearance, structure, effect and judgement",
          paragraphs: [
            "At mastery level, near-synonyms require more than a single distinction such as formal versus informal. Plausible describes apparent credibility; specious reveals that the credibility is deceptive. Cogent names the quality of the reasoning; persuasive names its actual effect on an audience.",
            "Trenchant and astute locate intelligence elsewhere. A trenchant analysis is sharply expressed and forcefully effective. An astute observer notices what others miss. An argument can therefore be plausible but not cogent, persuasive but specious, or astute without being elegantly phrased.",
          ],
        },
        {
          type: "wordbank",
          title: "Six words for discriminating argument",
          intro:
            "Use the semantic dimension in each meaning to decide what the word evaluates.",
          words: nearSynonymWords,
        },
        {
          type: "table",
          title: "What exactly is being evaluated?",
          caption:
            "The same passage can be strong on one dimension and weak on another.",
          columns: ["Word", "Primary dimension", "Diagnostic question"],
          rows: [
            ["plausible", "apparent credibility", "Does it seem true on first inspection?"],
            ["specious", "deceptive credibility", "Does its apparent reasonableness conceal a flaw?"],
            ["cogent", "logical force", "Are the reasons clear, relevant and convincing?"],
            ["trenchant", "sharpness of expression", "Does the analysis cut directly to the issue?"],
            ["persuasive", "effect on an audience", "Does it successfully change belief or action?"],
            ["astute", "perceptiveness", "Does it detect an important underlying feature?"],
          ],
        },
        {
          type: "exercise",
          title: "Calibrate the critical judgement",
          instructions:
            "Choose the adjective that evaluates the intended dimension without importing an unsupported claim.",
          items: [
            c(
              "The explanation sounds reasonable, but it rests on an incorrect premise. The best description is ___.",
              ["cogent", "specious", "astute"],
              1,
              "Specious describes an apparently credible explanation whose reasoning is actually misleading.",
            ),
            c(
              "The argument proceeds from verified premises to a clearly relevant conclusion. Its reasoning is ___.",
              ["plausible", "persuasive", "cogent"],
              2,
              "Cogent evaluates logical clarity and force rather than first appearance or audience impact.",
            ),
            c(
              "The review moves past surface detail to expose the real financial pressure. It is ___.",
              ["trenchant", "anecdotal", "equivocal"],
              0,
              "Trenchant describes forcefully incisive criticism that gets directly to the important issue.",
            ),
            c(
              "The speaker's logical case was limited, yet her account changed the board's decision. The account was ___.",
              ["empirical", "specious", "persuasive"],
              2,
              "Persuasive concerns the effect achieved, which the sentence states explicitly.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a multidimensional appraisal",
          instructions:
            "Use complete sentences and make clear which dimension of the text you are evaluating.",
          items: [
            p(
              "Write a sentence in which an argument is plausible but not cogent.",
              "Model answer: The argument sounds plausible, but it is not cogent because it never addresses the strongest objection.",
            ),
            p(
              "Describe an astute question, then explain whether it is necessarily trenchant.",
              "Model answer: The astute question identified the hidden assumption. It was not trenchant because it was phrased gently rather than as cutting criticism.",
            ),
            p(
              "Explain why persuasive does not mean true.",
              "Persuasive reports an argument's effect on an audience; emotional appeal, repetition or flawed evidence can persuade without establishing truth.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which word would reveal that an apparently reasonable claim is actually misleading?",
          ["plausible", "specious", "persuasive"],
          1,
          "Specious combines apparent reasonableness with actual falsity or flawed reasoning.",
        ),
        q(
          2,
          "What does cogent primarily evaluate?",
          ["The speaker's social status", "The beauty of the prose", "The clarity and force of the reasoning"],
          2,
          "A cogent case is logically clear and convincing in its structure.",
        ),
        q(
          3,
          "Which pair places one word in appearance and the other in audience effect?",
          ["plausible / persuasive", "cogent / astute", "specious / trenchant"],
          0,
          "Plausible concerns how convincing something seems; persuasive concerns whether it succeeds in convincing.",
        ),
        q(
          4,
          "Why can an astute analysis still fail to persuade?",
          ["Astute means irrelevant.", "Perceptiveness does not guarantee rhetorical effectiveness or shared values.", "Only false analyses can be astute."],
          1,
          "Noticing an important feature and persuading a particular audience are separate achievements.",
        ),
      ],
    },
    {
      slug: "connotation-evaluation-and-stance",
      title: "Connotation, evaluation and stance",
      summary:
        "Use six stance-bearing adjectives to signal optimism, caution, ambiguity, limitation, impartiality and allegiance.",
      objective:
        "Distinguish a writer's evaluation from evidential strength and choose a stance word that matches the actual degree of commitment.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Stance is a position, not a mood label",
          paragraphs: [
            "Stance language tells the reader how the writer relates to a claim. Sanguine expresses optimism about an outcome; circumspect manages risk; qualified support limits endorsement. None of these, by itself, tells the reader how strong the evidence is.",
            "Equivocal can describe genuine ambiguity or deliberate evasion, depending on context. Dispassionate claims freedom from emotional distortion, while partisan acknowledges alignment with a side. When interpreting either, examine the surrounding evidence rather than inferring impartiality from tone alone.",
          ],
        },
        {
          type: "wordbank",
          title: "Six positions towards a claim or audience",
          intro:
            "Notice whether each word describes optimism, strategy, clarity of position or allegiance.",
          words: stanceWords,
        },
        {
          type: "table",
          title: "Position and degree of commitment",
          caption:
            "Use the contrast column to avoid overstating a stance in formal analysis.",
          columns: ["Word", "Stance taken", "Do not confuse with"],
          rows: [
            ["sanguine", "optimism despite uncertainty", "certainty"],
            ["circumspect", "prudence about risk and consequences", "opposition"],
            ["equivocal", "ambiguity or multiple possible readings", "balanced consideration"],
            ["qualified", "endorsement limited by conditions", "reluctant"],
            ["dispassionate", "freedom from emotional influence", "lack of interest"],
            ["partisan", "alignment that may compromise impartiality", "any firm conclusion"],
          ],
        },
        {
          type: "exercise",
          title: "Calibrate the writer's stance",
          instructions:
            "Select the adjective that accurately reports the commitment implied by the sentence.",
          items: [
            c(
              "The board welcomes the pilot but will reconsider it if costs exceed the cap. Its support is ___.",
              ["equivocal", "qualified", "partisan"],
              1,
              "Qualified support is endorsement subject to explicit conditions or limits.",
            ),
            c(
              "The spokesperson avoided saying whether the policy would change. The answer was ___.",
              ["dispassionate", "circumspect", "equivocal"],
              2,
              "Equivocal describes wording that fails to settle the issue and permits more than one interpretation.",
            ),
            c(
              "The diplomat expects the negotiations to succeed despite repeated delays. The diplomat is ___.",
              ["sanguine", "unsubstantiated", "partisan"],
              0,
              "Sanguine means optimistic about an uncertain future, not claiming that success is guaranteed.",
            ),
            c(
              "The analyst sets aside personal sympathy and compares both sides using the same criteria. The analysis is ___.",
              ["partisan", "circumspect", "dispassionate"],
              2,
              "Dispassionate means not driven by strong personal feeling, which matches the analyst's method.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Report stance without mind-reading",
          instructions:
            "Write each response, then compare with the model. Use textual evidence to justify your interpretation.",
          items: [
            p(
              "Write a sentence offering qualified approval of a proposal.",
              "Model answer: I offer qualified approval, provided that the results are published independently.",
            ),
            p(
              "Describe a genuinely ambiguous poem without accusing its author of deliberate evasion. Use equivocal.",
              "Model answer: The poem's final image is equivocal, allowing both reconciliation and loss.",
              "Equivocal can describe ambiguity without intention.",
            ),
            p(
              "Explain why sanguine and dispassionate are not opposites.",
              "Sanguine describes optimistic expectation; dispassionate describes freedom from emotional influence. One can be calmly optimistic.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the key feature of qualified support?",
          ["It is limited by stated conditions.", "It is hidden from readers.", "It comes only from opponents."],
          0,
          "Qualified marks an endorsement as restricted rather than wholehearted or unconditional.",
        ),
        q(
          2,
          "Which word signals optimism about an uncertain future?",
          ["circumspect", "sanguine", "partisan"],
          1,
          "Sanguine expresses hope or confidence despite difficulties and uncertainty.",
        ),
        q(
          3,
          "Why can equivocal be positive in one context and negative in another?",
          ["It has no dictionary meaning.", "It always means false.", "It can describe productive ambiguity or evasive wording."],
          2,
          "The evaluative force depends on whether ambiguity serves interpretation or avoids commitment.",
        ),
        q(
          4,
          "What does dispassionate analysis avoid?",
          ["Using any evidence", "Allowing strong personal feeling to distort judgement", "Reaching a conclusion"],
          1,
          "Dispassionate concerns impartiality of manner, not the absence of evidence or conclusions.",
        ),
      ],
    },
    {
      slug: "formality-and-social-meaning",
      title: "Formality and social meaning",
      summary:
        "Distinguish courtesy from deference, flattery from ingratiation and naturalness from deliberate polish in high-stakes interaction.",
      objective:
        "Read politeness strategies in relation to status and power, and avoid wording that misrepresents respect as submission or approval-seeking.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Politeness performs social work",
          paragraphs: [
            "Courteous language shows general consideration. Deferential language additionally acknowledges another person's authority or status. In a negotiation, the difference matters: deference can signal respect, but it can also position the speaker as subordinate.",
            "Presumption concerns a boundary violation, while ingratiation and obsequiousness concern the pursuit of approval. Unaffected language resists performance; it can build credibility precisely because it does not seem designed to impress. Social meaning therefore includes intention, power and likely interpretation, not formality alone.",
          ],
        },
        {
          type: "wordbank",
          title: "Six words for reading social positioning",
          intro:
            "Pay attention to the relationship between speaker and addressee.",
          words: socialMeaningWords,
        },
        {
          type: "table",
          title: "Respect, status and self-presentation",
          caption:
            "The same respectful act can carry different social meanings across relationships.",
          columns: ["Word", "Social function", "Possible risk"],
          rows: [
            ["courteous", "general consideration for another person", "may be read as conventional rather than warm"],
            ["deferential", "acknowledgement of status or authority", "may appear excessively subordinate"],
            ["presumptuous", "claims permission without sufficient grounds", "may damage trust by overstepping"],
            ["ingratiating", "seeks approval through calculated charm", "may appear insincere"],
            ["obsequious", "excessive eagerness to please a superior", "may erase the speaker's independence"],
            ["unaffected", "avoids artificial self-presentation", "may be less ceremonious than the setting expects"],
          ],
        },
        {
          type: "exercise",
          title: "Interpret the relationship",
          instructions:
            "Choose the word that captures the social strategy, not merely the surface politeness.",
          items: [
            c(
              "The assistant waits for the director to speak first and modifies every suggestion to match her views. The behaviour is ___.",
              ["unaffected", "obsequious", "presumptuous"],
              1,
              "Obsequious describes excessive eagerness to please someone with higher status.",
            ),
            c(
              "Although he disagreed, he thanked the chair for considering his objection and asked permission to continue. His manner was ___.",
              ["courteous", "ingratiating", "equivocal"],
              0,
              "Courtesy shows consideration while allowing disagreement; it does not require surrendering the objection.",
            ),
            c(
              "She praises the interviewer's hobbies before every answer in the hope of being liked. The praise is ___.",
              ["deferential", "dispassionate", "ingratiating"],
              2,
              "Ingratiating describes calculated behaviour intended to win another person's approval.",
            ),
            c(
              "He announces that the committee will adopt his plan before anyone has voted. The action is ___.",
              ["courteous", "presumptuous", "unaffected"],
              1,
              "Presumptuous means assuming permission or acceptance without adequate grounds.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rewrite for the intended relationship",
          instructions:
            "Write your response before revealing the model, preserving the substantive point while adjusting social meaning.",
          items: [
            p(
              "Rewrite 'I suppose we could consider your suggestion' so that it is courteous without sounding obsequious.",
              "Model answer: Thank you for the suggestion; I will bring it to the committee for consideration.",
              "Appreciation does not require self-diminishment.",
            ),
            p(
              "Describe a confident expert whose plain manner is unaffected.",
              "Model answer: The expert gave an unaffected account of the risks, admitting uncertainty without trying to sound impressive.",
            ),
            p(
              "Explain why deferential can be appropriate in one setting and problematic in another.",
              "It may fit a formal ceremony that recognises authority, but in a peer negotiation it can suggest unequal standing or inhibit candid challenge.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which word necessarily adds acknowledgement of status to politeness?",
          ["deferential", "courteous", "unaffected"],
          0,
          "Deference specifically recognises another person's authority, rank or wishes.",
        ),
        q(
          2,
          "What distinguishes ingratiating praise from courteous praise?",
          ["Courtesy is never sincere.", "Ingratiating praise is calculated to win approval.", "Courteous praise is always formal."],
          1,
          "The key is the perceived strategic attempt to secure favour.",
        ),
        q(
          3,
          "Why is obsequious more negative than deferential?",
          ["It is grammatically incorrect.", "It suggests excessive, self-abasing eagerness to please.", "It cannot describe speech."],
          1,
          "Obsequious carries a stronger sense of servility than the potentially respectful deferential.",
        ),
        q(
          4,
          "Which behaviour is presumptuous?",
          ["Asking whether a decision is final", "Thanking a colleague for feedback", "Announcing a promotion that has not been approved"],
          2,
          "The announcement assumes acceptance without the necessary authority or evidence.",
        ),
      ],
    },
    {
      slug: "euphemism-taboo-and-sensitive-language",
      title: "Euphemism, taboo and sensitive language",
      summary:
        "Analyse six euphemisms for how they soften grief, employment loss, military harm, coercion and imprisonment.",
      objective:
        "Evaluate when euphemism shows care and when it obscures responsibility, and select direct wording without becoming gratuitously blunt.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Softening can inform or conceal",
          paragraphs: [
            "Euphemism replaces an uncomfortable expression with a less direct one. Passed away may acknowledge grief respectfully; between jobs may protect someone from embarrassment. In these settings, indirection can be considerate rather than deceitful.",
            "Institutional euphemism can also shift attention away from agency. Let go may obscure that an employer dismissed workers, and collateral damage may distract from civilian deaths caused by a military action. Sensitivity requires judging the speaker's purpose, the audience's needs and the cost of obscuring facts.",
          ],
        },
        {
          type: "wordbank",
          title: "Six euphemisms and their communicative risks",
          intro:
            "The meanings include the social effect each expression can produce.",
          words: euphemismWords,
        },
        {
          type: "table",
          title: "Care, euphemism and accountability",
          caption:
            "A euphemism is not automatically wrong; its value depends on what the communication needs to accomplish.",
          columns: ["Expression", "Direct referent", "Critical question"],
          rows: [
            ["passed away", "died", "Does it comfort this audience without avoiding the fact?"],
            ["let go", "dismissed from employment", "Does it conceal who made the decision?"],
            ["collateral damage", "unintended civilian casualties or destruction", "Does it minimise human suffering?"],
            ["enhanced interrogation", "coercive interrogation, often torture", "Does the term sanitise the method?"],
            ["between jobs", "unemployed", "Is the tactful wording useful to this person?"],
            ["correctional facility", "prison", "Is institutional precision serving clarity or euphemism?"],
          ],
        },
        {
          type: "exercise",
          title: "Judge the communicative effect",
          instructions:
            "Choose the wording that best fits the ethical and rhetorical purpose described.",
          items: [
            c(
              "A family announcement needs gentleness while remaining clear about the death. The most appropriate phrase is ___.",
              ["passed away", "enhanced interrogation", "collateral damage"],
              0,
              "Passed away is a conventional expression of condolence that acknowledges death indirectly.",
            ),
            c(
              "An investigation must state plainly that the company dismissed workers. The clearer phrase is ___.",
              ["between jobs", "released forty colleagues into opportunity", "dismissed forty workers"],
              2,
              "Dismissed identifies the employment action directly and preserves the company's agency.",
            ),
            c(
              "A human-rights report avoids sanitising the treatment of detainees. It should ___.",
              ["call all coercion enhanced interrogation", "name the methods and explain why they may constitute torture", "refer only to correctional facilities"],
              1,
              "Accountability requires describing what happened rather than relying on a potentially sanitising label.",
            ),
            c(
              "A friend asks how your job search is going while you are unemployed. A natural, tactful response is:",
              ["I am in a correctional facility.", "I am currently between jobs.", "I have suffered collateral damage."],
              1,
              "Between jobs is a conventional, considerate expression for current unemployment in casual conversation.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Edit for care and candour",
          instructions:
            "Write or say each response before checking the model. Explain the effect of your word choice.",
          items: [
            p(
              "Write a sensitive sentence reporting a death in a professional notice.",
              "Model answer: We are sorry to announce that our colleague's father passed away on Tuesday.",
            ),
            p(
              "Rewrite 'The restructuring let go of staff' so that responsibility is clear.",
              "Model answer: The company dismissed forty employees as part of the restructuring.",
              "Name the actor and the action.",
            ),
            p(
              "Explain why direct language about a taboo subject is not necessarily insensitive.",
              "Directness can be respectful when it avoids ambiguity, serves the audience's understanding and is not framed to shame or sensationalise.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the main risk of institutional euphemism?",
          ["It can obscure agency, harm or responsibility.", "It is always grammatically informal.", "It can only appear in conversation."],
          0,
          "Softening an action may make its consequences or responsible actor harder to see.",
        ),
        q(
          2,
          "Why can passed away be appropriate?",
          ["It denies that a death occurred.", "It acknowledges death gently in a context of grief.", "It is the only acceptable term in medicine."],
          1,
          "Its indirectness can express care, although direct terms are appropriate in many clinical or factual contexts.",
        ),
        q(
          3,
          "Which wording best supports accountability after a strike harmed civilians?",
          ["There was some collateral damage.", "Enhanced conditions developed nearby.", "The strike killed civilians, and the report examines the circumstances."],
          2,
          "Direct description identifies the human consequence without avoiding the underlying fact.",
        ),
        q(
          4,
          "What should guide the choice between a euphemism and a direct term?",
          ["The desire to sound impressive", "Audience, purpose, accuracy and dignity", "A rule that direct words are always rude"],
          1,
          "Sensitive language balances care with the reader's right to understand the facts clearly.",
        ),
      ],
    },
    {
      slug: "lexical-precision-under-pressure",
      title: "Lexical precision under pressure",
      summary:
        "Classify six kinds of evidence and adjust claims instantly during questioning, briefings and live correction.",
      objective:
        "Distinguish evidence type from evidentiary strength and revise a claim without collapsing careful qualification into either certainty or doubt.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Say exactly what the evidence can bear",
          paragraphs: [
            "Under pressure, speakers often slide between evidence categories. Anecdotal reports are personal accounts; empirical findings come from observation or experiment. Circumstantial evidence supports inference rather than directly demonstrating a fact. None of these labels alone determines strength.",
            "Corroborated means supported by additional independent evidence, while unsubstantiated means insufficient support and inconclusive means the process produced no definite result. A careful revision states both the limitation and what remains supported instead of withdrawing the whole claim.",
          ],
        },
        {
          type: "wordbank",
          title: "Six evidence labels for exact reporting",
          intro:
            "Separate how evidence was gathered from what it currently establishes.",
          words: evidenceWords,
        },
        {
          type: "table",
          title: "Type, support and result are different axes",
          caption:
            "Avoid treating every uncertain label as a synonym for false.",
          columns: ["Label", "Axis", "Exact implication"],
          rows: [
            ["anecdotal", "source", "personal report rather than systematic study"],
            ["empirical", "basis", "observation or experiment"],
            ["circumstantial", "relation to conclusion", "supports inference rather than direct demonstration"],
            ["corroborated", "independent support", "confirmed by additional evidence"],
            ["unsubstantiated", "current support", "not established by sufficient evidence"],
            ["inconclusive", "outcome of a process", "no definite result was reached"],
          ],
        },
        {
          type: "exercise",
          title: "Correct the claim without overcorrecting",
          instructions:
            "Choose the revision that accurately identifies the evidential issue.",
          items: [
            c(
              "A journalist generalises from three personal stories and no survey. The report should label the material ___.",
              ["empirical", "anecdotal", "corroborated"],
              1,
              "The material consists of personal accounts rather than systematic observation.",
            ),
            c(
              "A suspect's fingerprint is found near the scene, but nobody saw the act. The fingerprint is ___ evidence.",
              ["circumstantial", "inconclusive", "unsubstantiated"],
              0,
              "It supports an inference about presence but is not direct proof of the act.",
            ),
            c(
              "Two independent laboratories reproduce the result. The finding is now ___.",
              ["anecdotal", "inconclusive", "corroborated"],
              2,
              "Independent reproduction supplies additional support, making corroborated precise.",
            ),
            c(
              "The inquiry ended without enough evidence either to confirm or reject the allegation. The allegation remains ___.",
              ["corroborated", "unsubstantiated", "empirical"],
              1,
              "Unsubstantiated means not adequately supported; it does not mean proved false.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Handle a challenge in one sentence",
          instructions:
            "Give a precise answer and, where requested, a concise correction of your original claim.",
          items: [
            p(
              "A colleague says, 'Three customers complained, so the whole system has failed.' Correct the inference.",
              "Model answer: The three complaints are anecdotal evidence of a problem, but they cannot establish that the whole system has failed.",
            ),
            p(
              "You first said the trial proved the treatment works. The sample was too small for a decision. Correct yourself.",
              "Model answer: The trial was inconclusive; it does not establish that the treatment works or that it fails.",
            ),
            p(
              "Write a one-sentence briefing that uses empirical and unsubstantiated accurately.",
              "Model answer: The empirical study reports a modest association, while the claim of a direct causal link remains unsubstantiated.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which pair distinguishes source from outcome?",
          ["circumspect / dispassionate", "cogent / plausible", "anecdotal / inconclusive"],
          2,
          "Anecdotal describes the source of evidence; inconclusive describes the result of an investigation or test.",
        ),
        q(
          2,
          "What does unsubstantiated not mean?",
          ["Supported by enough evidence", "Proved false", "Necessarily anecdotal"],
          1,
          "Lack of sufficient support is not itself proof that a claim is false.",
        ),
        q(
          3,
          "Why is circumstantial evidence not the same as weak evidence?",
          ["It can be highly reliable even though it supports inference rather than direct observation.", "It never supports a conclusion.", "It is always false."],
          0,
          "Circumstantial describes the relationship to a conclusion, not an automatic weakness.",
        ),
        q(
          4,
          "Which statement is most precise after a small pilot yields no clear result?",
          ["The pilot proved the policy ineffective.", "The pilot was inconclusive, so a larger test is needed.", "The pilot was entirely anecdotal."],
          1,
          "Inconclusive accurately reports the lack of a definite result without claiming failure or success.",
        ),
      ],
    },
  ],
};
