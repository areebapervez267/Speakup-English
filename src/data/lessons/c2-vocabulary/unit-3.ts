import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit, LessonWord } from "@/data/lessons/types";

const conceptualMetaphorWords: LessonWord[] = [
  {
    term: "fortify a claim",
    meaning: "to strengthen a claim by adding support or protecting it from objection",
    example: "The authors use independent datasets to fortify a claim about long-term benefits.",
  },
  {
    term: "attack an assumption",
    meaning: "to challenge a belief treated as the basis of an argument",
    example: "A strong review may attack an assumption shared by most contributors to the debate.",
  },
  {
    term: "a straw man",
    meaning: "a deliberately weakened version of an opposing position that is easier to refute",
    example: "Calling every critic anti-technology creates a straw man rather than answering the objection.",
  },
  {
    term: "common ground",
    meaning: "shared beliefs or interests on which people can build agreement",
    example: "Both sides found common ground in their support for cleaner air.",
  },
  {
    term: "a wedge issue",
    meaning: "a controversial subject used to divide people or groups",
    example: "The campaign turned a technical planning rule into a wedge issue.",
  },
  {
    term: "a rift",
    meaning: "a serious split in a relationship, group or society",
    example: "The disputed nomination opened a rift within the party.",
  },
];

const ironyWords: LessonWord[] = [
  {
    term: "verbal irony",
    meaning: "saying something that deliberately contrasts with the intended meaning",
    example: "After three hours of delay, she said, 'What a perfectly efficient service.' The verbal irony was unmistakable.",
  },
  {
    term: "sarcasm",
    meaning: "a cutting or contemptuous remark, often using irony to mock",
    example: "'Brilliant planning,' he said with sarcasm after the second rehearsal was cancelled.",
  },
  {
    term: "satire",
    meaning: "humour or exaggeration used to criticise people, institutions or social behaviour",
    example: "The satire presents ministers as competing game-show contestants desperate for applause.",
  },
  {
    term: "understatement",
    meaning: "presenting something as less significant or intense than it is",
    example: "Describing the bankruptcy as a slight setback is an understatement.",
  },
  {
    term: "hyperbole",
    meaning: "deliberate exaggeration used for emphasis or comic effect",
    example: "The hyperbole in 'I have told you a million times' emphasises the speaker's frustration.",
  },
  {
    term: "pun",
    meaning: "a play on words that exploits multiple meanings or similar sounds",
    example: "The optician's sign uses a pun: 'We see eye to eye.'",
  },
];

const rhetoricWords: LessonWord[] = [
  {
    term: "anaphora",
    meaning: "the repetition of a word or phrase at the beginning of successive clauses",
    example: "The speech uses anaphora in 'We will listen, we will learn, we will act.'",
  },
  {
    term: "chiasmus",
    meaning: "a reversal of grammatical or conceptual order in parallel phrases",
    example: "'Ask not what your country can do for you; ask what you can do for your country' uses chiasmus by reversing country and you.",
  },
  {
    term: "asyndeton",
    meaning: "the omission of conjunctions between words, phrases or clauses for effect",
    example: "The sentence 'I came, I saw, I conquered' uses asyndeton by leaving out conjunctions.",
  },
  {
    term: "litotes",
    meaning: "a form of understatement that affirms something by denying its opposite",
    example: "Saying the performance was 'not unimpressive' uses litotes rather than straightforward praise.",
  },
  {
    term: "metonymy",
    meaning: "substituting a closely associated name or attribute for the thing meant",
    example: "Using 'the White House' to mean the US administration is metonymy.",
  },
  {
    term: "synecdoche",
    meaning: "referring to a whole through one part, or a part through the whole",
    example: "Using 'hands' to mean workers is synecdoche.",
  },
];

const intertextWords: LessonWord[] = [
  {
    term: "Babel",
    meaning: "a scene or system of confusing noise, languages or competing voices",
    example: "The unfiltered comment section became a Babel of mutually incomprehensible claims.",
  },
  {
    term: "Promethean",
    meaning: "boldly creative and knowledge-bringing, often with dangerous or costly consequences",
    example: "The Promethean project promised unlimited energy but raised profound safety questions.",
  },
  {
    term: "Kafkaesque",
    meaning: "characterised by surreal, illogical or oppressive bureaucracy",
    example: "Applicants described a Kafkaesque process in which every form required another unavailable form.",
  },
  {
    term: "Odyssean",
    meaning: "resembling a long, adventurous and difficult journey",
    example: "The refugees' Odyssean journey crossed three continents before ending in safety.",
  },
  {
    term: "Frankenstein",
    meaning: "a creation or system that turns against its creator or produces unforeseen harm",
    example: "The automated moderation tool became a Frankenstein, amplifying the abuse it was built to remove.",
  },
  {
    term: "the Gordian knot",
    meaning: "a complex problem suited to a bold, decisive solution rather than gradual negotiation",
    example: "The new administration promised to cut the Gordian knot of competing regional claims.",
  },
];

const figurativeControlWords: LessonWord[] = [
  {
    term: "conceptual metaphor",
    meaning: "an underlying way of understanding one domain through another",
    example: "ARGUMENT IS CONFLICT is a conceptual metaphor expressed by phrases such as attack a claim.",
  },
  {
    term: "decorative metaphor",
    meaning: "a figurative comparison used mainly for style rather than to structure an explanation",
    example: "The decorative metaphor 'a tapestry of voices' adds colour but little explanatory precision.",
  },
  {
    term: "extended metaphor",
    meaning: "a metaphor sustained across several linked expressions or sentences",
    example: "The extended metaphor of a bridge continues through gap, crossing and connection.",
  },
  {
    term: "mixed metaphor",
    meaning: "an awkward combination of incompatible images that obscures meaning",
    example: "The mixed metaphor 'we will burn that bridge when we come to it' fuses two conflicting expressions.",
  },
  {
    term: "dead metaphor",
    meaning: "a once-figurative expression so familiar that its literal origin is rarely noticed",
    example: "The foot of the table is a dead metaphor in ordinary English.",
  },
  {
    term: "overextension",
    meaning: "carrying a figurative pattern beyond the point where it remains coherent or illuminating",
    example: "Describing every paragraph as a soldier creates overextension instead of a useful military metaphor.",
  },
];

export const c2VocabularyUnit3: LessonUnit = {
  title: "Figurative language",
  description:
    "Analyse conceptual imagery, irony and wordplay, identify rhetorical and literary devices, and control allusion and figurative extension.",
  lessons: [
    {
      slug: "metaphor-and-conceptual-imagery",
      title: "Metaphor and conceptual imagery",
      summary:
        "Recognise the ARGUMENT IS CONFLICT metaphor system and use six related expressions without distorting the positions they describe.",
      objective:
        "Identify the conceptual image behind everyday analytical vocabulary and distinguish legitimate extension from mixed or distorted imagery.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Metaphor can organise an entire discourse",
          paragraphs: [
            "A conceptual metaphor shapes more than a single phrase. If ARGUMENT IS CONFLICT, speakers naturally fortify claims, attack assumptions and find common ground. The vocabulary reveals a model through which the activity is understood, even when no literal combat occurs.",
            "That model also has limits. Calling a weakened opposing position a straw man critiques misrepresentation, while calling a divisive topic a wedge issue invokes splitting rather than combat. Analyse the image precisely so that it does not smuggle in an unsupported judgement.",
          ],
        },
        {
          type: "wordbank",
          title: "Expressions within a conceptual image",
          intro:
            "Some entries belong primarily to conflict; common ground and rift introduce a related landscape of division.",
          words: conceptualMetaphorWords,
        },
        {
          type: "table",
          title: "Image and argumentative effect",
          caption:
            "The same broad metaphor can support, challenge, divide or create false opposition.",
          columns: ["Expression", "Image activated", "Effect in discourse"],
          rows: [
            ["fortify a claim", "defence or strengthening", "adds evidential support"],
            ["attack an assumption", "assault", "challenges a foundational belief"],
            ["straw man", "an artificially weak opponent", "accuses an arguer of misrepresentation"],
            ["common ground", "shared terrain", "creates space for agreement"],
            ["wedge issue", "an instrument that splits", "frames a topic as deliberately divisive"],
            ["rift", "a fracture in terrain", "describes a serious relational or social split"],
          ],
        },
        {
          type: "exercise",
          title: "Read the conceptual model",
          instructions:
            "Choose the expression whose image and argumentative implication fit the context.",
          items: [
            c(
              "The critic replaces the government's gradual proposal with an extreme plan, then refutes that extreme version. This creates ___.",
              ["common ground", "a straw man", "a rift"],
              1,
              "A straw man is a deliberately weakened or distorted version of an opposing position.",
            ),
            c(
              "The researchers add three datasets to protect their conclusion from objections. They ___.",
              ["attack a wedge", "fortify their claim", "create a straw man"],
              1,
              "Fortify a claim uses the image of strengthening a position against challenge.",
            ),
            c(
              "The campaign uses immigration to split two groups that otherwise cooperate. Immigration becomes ___.",
              ["a wedge issue", "common ground", "a dead metaphor"],
              0,
              "A wedge issue is a controversial topic used to divide people or groups.",
            ),
            c(
              "After months of disagreement, the parties identified shared interests. They found ___.",
              ["a rift", "a straw man", "common ground"],
              2,
              "Common ground denotes shared beliefs or interests on which agreement can be built.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Extend and interrogate the image",
          instructions:
            "Answer aloud or in writing, then compare with the model. Note where the image clarifies and where it distorts.",
          items: [
            p(
              "Extend the fortification metaphor in two sentences without introducing incompatible images.",
              "Model answer: The authors fortified their claim with independent surveys. Those findings formed a defensive wall against the most obvious objection.",
            ),
            p(
              "Use common ground and rift in one balanced account of a negotiation.",
              "Model answer: The parties remained divided by the ownership clause, but they found common ground on worker safety, preventing a wider rift.",
            ),
            p(
              "Explain why describing all disagreement as a battle can distort a collaborative discussion.",
              "The battle frame encourages winners, enemies and attacks where shared problem-solving and partial agreement may be more accurate.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What does the prevalence of attack in argument reveal?",
          ["Arguments always involve physical violence.", "Attack has only a military meaning.", "English often conceptualises argument through conflict."],
          2,
          "The expression reveals a conventional conceptual metaphor, not a literal event.",
        ),
        q(
          2,
          "Which phrase accuses someone of misrepresenting an opponent?",
          ["common ground", "straw man", "wedge issue"],
          1,
          "A straw man substitutes a weaker position for the actual opposing argument.",
        ),
        q(
          3,
          "What does common ground contribute that attack language lacks?",
          ["It identifies shared interests that can support agreement.", "It proves one side has won.", "It removes every disagreement."],
          0,
          "Common ground creates a basis for cooperation without eliminating all differences.",
        ),
        q(
          4,
          "Why should a writer examine the limits of a conceptual metaphor?",
          ["Metaphors have no meaning.", "A powerful image can hide relevant features or impose an inappropriate model.", "Only literal language is precise."],
          1,
          "Figurative framing selects some features and suppresses others, so its implications require scrutiny.",
        ),
      ],
    },
    {
      slug: "irony-sarcasm-and-wordplay",
      title: "Irony, sarcasm and wordplay",
      summary:
        "Distinguish verbal irony, sarcasm, satire, understatement, hyperbole and pun by intention, target and audience response.",
      objective:
        "Identify the gap between wording and meaning, and judge when humour clarifies criticism or risks confusing or offending readers.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Humour depends on a recognised gap",
          paragraphs: [
            "Verbal irony arises when the spoken wording contrasts with the intended meaning. Sarcasm adds a cutting or contemptuous edge, often aimed at a person. Satire is broader: it uses humour, exaggeration or imitation to criticise a social practice or institution.",
            "Understatement diminishes; hyperbole exaggerates; pun exploits lexical or phonological ambiguity. Situational irony differs from all three because the contradiction lies in events rather than in the speaker's wording. Identifying the target and the gap prevents every ironic remark from being mislabelled sarcasm.",
          ],
        },
        {
          type: "wordbank",
          title: "Six devices for ironic and playful language",
          intro:
            "Each example names the device while demonstrating its effect.",
          words: ironyWords,
        },
        {
          type: "table",
          title: "Target and mechanism",
          caption:
            "The same sentence can use more than one device, but the dominant purpose determines the best label.",
          columns: ["Device", "Mechanism", "Usual target"],
          rows: [
            ["verbal irony", "wording contrasts with intended meaning", "a situation or claim"],
            ["sarcasm", "cutting irony or contempt", "a person or behaviour"],
            ["satire", "humorous critique through imitation or exaggeration", "social or institutional practice"],
            ["understatement", "intensity is represented as lower", "the scale of an event"],
            ["hyperbole", "intensity is deliberately exaggerated", "emphasis or comic effect"],
            ["pun", "two meanings or similar sounds are activated", "language itself"],
          ],
        },
        {
          type: "exercise",
          title: "Identify the dominant device",
          instructions:
            "Choose the term that best explains the wording and its likely effect.",
          items: [
            c(
              "A fire alarm sounds during a lecture on stress management, and the slide reads 'A Calm Environment'. The contradiction is primarily ___.",
              ["situational irony", "a pun", "synecdoche"],
              0,
              "The irony lies in the contrast between the event and the planned setting, not in a deliberate spoken contradiction.",
            ),
            c(
              "After a colleague deletes the shared file, someone says, 'That was a masterstroke.' The phrase uses ___.",
              ["understatement", "satire", "sarcasm"],
              2,
              "Sarcasm uses cutting irony to mock a harmful action.",
            ),
            c(
              "A comedy imagines ministers competing for popularity while ignoring every public duty. The programme uses ___.",
              ["hyperbole alone", "satire", "metonymy"],
              1,
              "Satire uses humorous exaggeration to criticise institutional behaviour.",
            ),
            c(
              "'This is a minor inconvenience,' says the traveller after losing a passport, money and luggage. The phrase is ___.",
              ["an understatement", "a pun", "an extended metaphor"],
              0,
              "Understatement deliberately represents a serious loss as slight or trivial.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Create and analyse humour",
          instructions:
            "Write each answer, then compare with the model. Consider how a reader from another culture might interpret it.",
          items: [
            p(
              "Write one sentence using verbal irony about a delayed service.",
              "Model answer: 'Wonderful,' she said as the train departed without her, 'the timetable is impressively flexible.'",
            ),
            p(
              "Turn the same situation into an understatement and a hyperbole.",
              "Model answer: Understatement: 'There has been a slight timetable adjustment.' Hyperbole: 'The train vanished with the speed of a fired cannon.'",
            ),
            p(
              "Explain why sarcasm can be risky in intercultural communication.",
              "Its contemptuous tone may not be recognised across cultural or linguistic boundaries and may be interpreted as literal or hostile.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What separates situational irony from verbal irony?",
          ["Verbal irony cannot be critical.", "Situational irony is always funny.", "Situational irony occurs in events; verbal irony occurs in wording."],
          2,
          "The site of the contradiction differs: circumstances for situational irony, words for verbal irony.",
        ),
        q(
          2,
          "Which term best describes cutting, contemptuous irony?",
          ["sarcasm", "satire", "litotes"],
          0,
          "Sarcasm adds a mocking or wounding edge that is not necessary to all irony.",
        ),
        q(
          3,
          "What is the mechanism of hyperbole?",
          ["Deliberate understatement", "Deliberate exaggeration", "Substitution of an associated name"],
          1,
          "Hyperbole magnifies for emphasis or effect rather than reporting literal scale.",
        ),
        q(
          4,
          "Why can a pun be difficult to translate?",
          ["Puns never use real words.", "It may depend on language-specific sounds or multiple meanings.", "It can only occur in poetry."],
          1,
          "Wordplay often exploits features that do not transfer directly between languages.",
        ),
      ],
    },
    {
      slug: "literary-and-rhetorical-vocabulary",
      title: "Literary and rhetorical vocabulary",
      summary:
        "Identify anaphora, chiasmus, asyndeton, litotes, metonymy and synecdoche and explain their distinct rhetorical effects.",
      objective:
        "Distinguish repetition, reversal, omission and substitution, and use the correct term when analysing prose or speech.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Name the mechanism before praising the effect",
          paragraphs: [
            "Rhetorical analysis requires precision. Anaphora repeats wording at the opening of successive clauses; chiasmus reverses parallel order; asyndeton removes conjunctions. These devices can occur together, but they are not interchangeable.",
            "Litotes affirms through a negative, often creating ironic restraint. Metonymy substitutes an associated attribute, while synecdoche uses a part for a whole or a whole for a part. Identifying the exact relation prevents a loose claim that every substitution is 'a symbol'.",
          ],
        },
        {
          type: "wordbank",
          title: "Six terms for close stylistic analysis",
          intro:
            "Each example contains the term and illustrates the device it names.",
          words: rhetoricWords,
        },
        {
          type: "table",
          title: "Mechanism and effect",
          caption:
            "Effects are typical rather than automatic; context determines the final impact.",
          columns: ["Term", "Mechanism", "Possible effect"],
          rows: [
            ["anaphora", "repeat the opening of successive units", "rhythm, insistence, accumulation"],
            ["chiasmus", "reverse parallel elements", "balance, memorability, wit"],
            ["asyndeton", "omit conjunctions", "speed, urgency, fragmentation"],
            ["litotes", "affirm by denying the opposite", "restraint, irony, understatement"],
            ["metonymy", "substitute an associated attribute", "compression, institutional shorthand"],
            ["synecdoche", "use a part for whole or whole for part", "concrete representation of an abstraction"],
          ],
        },
        {
          type: "exercise",
          title: "Name the device accurately",
          instructions:
            "Choose the term that matches the actual mechanism in each example.",
          items: [
            c(
              "'We came, we saw, we conquered' omits conjunctions between the clauses. This is ___.",
              ["anaphora", "asyndeton", "litotes"],
              1,
              "Asyndeton is the omission of conjunctions between words, phrases or clauses.",
            ),
            c(
              "'The crown approved the measure' uses an associated symbol of monarchy for the monarch or government. This is ___.",
              ["synecdoche", "metonymy", "hyperbole"],
              1,
              "Metonymy substitutes a closely associated attribute for the entity meant.",
            ),
            c(
              "'Not unimpressive' affirms a positive judgement through a negative form. This is ___.",
              ["chiasmus", "satire", "litotes"],
              2,
              "Litotes affirms something by negating its opposite, often with restrained or ironic effect.",
            ),
            c(
              "'I will return, I will rebuild, I will rejoice' repeats the opening phrase. This is ___.",
              ["anaphora", "asyndeton", "metonymy"],
              0,
              "Anaphora repeats words at the beginning of successive clauses.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Analyse and compose",
          instructions:
            "Write or say each answer before revealing the model. Describe mechanism before effect.",
          items: [
            p(
              "Create a one-sentence example of chiasmus and name its reversed elements.",
              "Model answer: 'The issue is not what consumers owe designers, but what designers owe consumers.' The second clause reverses consumers and designers.",
            ),
            p(
              "Use synecdoche to refer to a workforce in one sentence.",
              "Model answer: The factory hired fifty new hands.",
              "Hands stands for workers.",
            ),
            p(
              "Explain the difference between metonymy and synecdoche.",
              "Metonymy relies on association; synecdoche relies on a part-whole relationship.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which device reverses parallel structures?",
          ["chiasmus", "anaphora", "asyndeton"],
          0,
          "Chiasmus reverses the order of corresponding elements for balance or emphasis.",
        ),
        q(
          2,
          "Why is 'the White House announced' metonymy rather than synecdoche?",
          ["The building is literally speaking.", "The name is associated with the administration but is not a part of it.", "It is an exaggerated statement."],
          1,
          "Metonymy works through association; the building stands for the institution housed there.",
        ),
        q(
          3,
          "What is the likely effect of repeated asyndeton in a narrative?",
          ["It always creates calm.", "It defines a technical term.", "It can accelerate rhythm and heighten urgency."],
          2,
          "Omitting conjunctions can make events feel rapid, compressed or breathless.",
        ),
        q(
          4,
          "Which example uses litotes?",
          ["The crowd roared its approval.", "The outcome was not insignificant.", "The crown issued a decree."],
          1,
          "The negative form not insignificant indirectly affirms significance.",
        ),
      ],
    },
    {
      slug: "cultural-allusion-and-intertextuality",
      title: "Cultural allusion and intertextuality",
      summary:
        "Interpret six advanced allusions and analyse how a new text deliberately echoes, adapts or contests an earlier work or story.",
      objective:
        "Distinguish a simple reference from intertextual reworking and explain the effect of an allusion without relying on cultural familiarity alone.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Texts speak through other texts",
          paragraphs: [
            "Allusion evokes a prior story, text or tradition. Intertextuality describes a broader relationship in which one text echoes, adapts, quotes, parodies or contests another. A modern novel may retell an Odyssean journey to question whether return and homecoming remain possible.",
            "The effect depends on what is transferred. Kafkaesque imports an experience of illogical bureaucratic power; Promethean imports creative ambition together with the risk of dangerous consequences. A precise analysis names the inherited structure rather than treating the reference as decorative prestige.",
          ],
        },
        {
          type: "wordbank",
          title: "Six allusions for layered interpretation",
          intro:
            "The meanings include the inherited narrative or conceptual structure.",
          words: intertextWords,
        },
        {
          type: "table",
          title: "Inherited structure and present use",
          caption:
            "The final column shows how an allusion can be adapted rather than merely repeated.",
          columns: ["Allusion", "Inherited structure", "Present-day adaptation"],
          rows: [
            ["Babel", "failed shared language and confusion", "incomprehensible public voices"],
            ["Promethean", "knowledge or creation with severe consequences", "ambitious technology with hidden costs"],
            ["Kafkaesque", "opaque systems and powerless individuals", "bureaucratic loops that defeat purpose"],
            ["Odyssean", "long wandering and difficult return", "displacement, endurance and homecoming"],
            ["Frankenstein", "creation escapes its maker's control", "systems that harm their designers"],
            ["Gordian knot", "a problem resolved by decisive bold action", "calling for rupture rather than compromise"],
          ],
        },
        {
          type: "exercise",
          title: "Analyse the inherited structure",
          instructions:
            "Choose the allusion that imports the precise structure described.",
          items: [
            c(
              "The application sends users between departments, each of which denies responsibility. The process is ___.",
              ["Odyssean", "Kafkaesque", "Promethean"],
              1,
              "Kafkaesque captures illogical, oppressive bureaucracy that frustrates the people trapped inside it.",
            ),
            c(
              "The inventors' machine reduced energy costs but also created an environmental disaster. It became ___.",
              ["Babel", "a Frankenstein", "the Gordian knot"],
              1,
              "Frankenstein describes a creation that turns against its maker or produces unforeseen harm.",
            ),
            c(
              "The refugee crossed seas, changed identities and waited years before returning home. The journey was ___.",
              ["Odyssean", "Kafkaesque", "Promethean"],
              0,
              "Odyssean imports the pattern of prolonged, dangerous wandering and a difficult return.",
            ),
            c(
              "The platform's users produce thousands of conflicting claims with no shared vocabulary. The comment section resembles ___.",
              ["a Gordian knot", "a Frankenstein", "Babel"],
              2,
              "Babel evokes confusion caused by incompatible languages or voices.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Move from reference to interpretation",
          instructions:
            "Write or say each answer, then compare with the model. Explain the effect without assuming the reader knows the source.",
          items: [
            p(
              "Use Promethean to describe a scientific project, then name the inherited warning.",
              "Model answer: The Promethean fusion programme promised boundless knowledge and power; the allusion also warns of consequences its creators may not control.",
            ),
            p(
              "Describe a text that adapts rather than merely alludes to an Odyssean journey.",
              "Model answer: The novel adapts the Odyssean journey by replacing the hero's return home with a migrant's inability to return, thereby contesting the original promise of homecoming.",
            ),
            p(
              "Explain why the Gordian knot does not simply mean any difficult problem.",
              "The inherited story emphasises a bold, decisive cut through complexity rather than patient negotiation or gradual solution.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What makes a relationship intertextual rather than a bare reference?",
          ["The new text actively echoes, adapts, quotes or contests the earlier text.", "The earlier text is mentioned once.", "Both texts use metaphor."],
          0,
          "Intertextuality involves a meaningful textual relationship, not merely the appearance of a name.",
        ),
        q(
          2,
          "What does Kafkaesque add to inefficient?",
          ["It describes a pleasant rural scene.", "It evokes illogical or oppressive bureaucratic power.", "It means technologically advanced."],
          1,
          "The allusion imports a particular experience of opaque systems and individual powerlessness.",
        ),
        q(
          3,
          "Why is Promethean often ambivalent?",
          ["It cannot describe knowledge.", "It only refers to physical strength.", "It joins creative achievement with dangerous or costly consequences."],
          2,
          "The inherited story combines the gift of knowledge or power with severe repercussions.",
        ),
        q(
          4,
          "Which action is implied by cutting the Gordian knot?",
          ["Negotiating every strand separately", "Solving a complex problem by a bold decisive action", "Pretending the problem does not exist"],
          1,
          "The allusion invokes a dramatic solution through decisive action rather than gradual untangling.",
        ),
      ],
    },
    {
      slug: "using-figurative-language-with-control",
      title: "Using figurative language with control",
      summary:
        "Distinguish conceptual, decorative, extended, mixed and dead metaphor, and revise overextended imagery for precision.",
      objective:
        "Select a figurative frame that serves explanation, sustain its logic and remove mixed or decorative language that weakens the argument.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Control begins with purpose",
          paragraphs: [
            "A conceptual metaphor organises thought, while a decorative metaphor mainly adds colour. An extended metaphor sustains one frame across linked details. A mixed metaphor combines incompatible frames, and overextension carries a useful image beyond the point where it remains coherent.",
            "A dead metaphor is not an error; it is a familiar expression whose figurative origin is no longer felt. The editorial question is whether the image still creates understanding. In technical writing, replacing a tired image with direct language may improve precision rather than reduce style.",
          ],
        },
        {
          type: "wordbank",
          title: "Six terms for controlling figurative language",
          intro:
            "Each example names the term while demonstrating the relevant feature.",
          words: figurativeControlWords,
        },
        {
          type: "examples",
          title: "Control the frame during revision",
          intro:
            "The notes distinguish coherent extension from mixed or exhausted imagery.",
          items: [
            {
              text: "The inquiry will examine the problem, tracing its roots and exposing the branches where responsibility was avoided.",
              note: "A coherent plant frame: roots and branches develop the same image of institutional growth.",
            },
            {
              text: "We will navigate the forest of competing claims and burn every bridge that stands in our way.",
              note: "The journey and bridge images need a clear interpretive purpose; without one, the combination reads as a mixed metaphor.",
            },
            {
              text: "The economy is on life support, so we must bite the bullet before the chickens come home to roost.",
              note: "Medical, military and agricultural images collide without a shared logic: mixed metaphor.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Diagnose the figurative choice",
          instructions:
            "Choose the term that best describes the image or the revision problem.",
          items: [
            c(
              "A writer uses 'the foot of the mountain' without noticing any figurative origin. The phrase contains a ___.",
              ["dead metaphor", "mixed metaphor", "pun"],
              0,
              "Foot is a conventional extension whose original figurative force is usually dormant.",
            ),
            c(
              "An essay begins with a garden and describes every department, employee and policy as a plant until no literal institution remains visible. The dominant problem is ___.",
              ["anaphora", "overextension", "understatement"],
              1,
              "A single garden image is carried beyond useful coherence, making overextension the precise diagnosis.",
            ),
            c(
              "'We will cross that bridge when we burn it' fuses two incompatible versions of the bridge expression. It is a ___.",
              ["conceptual metaphor", "mixed metaphor", "dead metaphor"],
              1,
              "Mixed metaphor combines incompatible images, here crossing a bridge and burning it.",
            ),
            c(
              "ARGUMENT IS CONFLICT underlies several expressions in a passage. This is a ___.",
              ["decorative metaphor", "pun", "conceptual metaphor"],
              2,
              "A conceptual metaphor systematically organises how an abstract activity is understood.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Edit for figurative economy",
          instructions:
            "Write each response before revealing the model. Prefer one coherent frame or direct wording.",
          items: [
            p(
              "Rewrite 'We must navigate the turbulent sea of data and plant seeds of change' with one coherent image.",
              "Model answer: We must navigate the turbulent sea of data by setting a clear course.",
            ),
            p(
              "Sustain a garden metaphor across two sentences about institutional reform.",
              "Model answer: Lasting reform grows from institutions whose roots reach into local trust. Without that foundation, even ambitious policies remain fragile shoots.",
            ),
            p(
              "Explain when replacing a metaphor with direct language is the stronger stylistic choice.",
              "Direct language is stronger when the image is stale, mixed, unexplained or less exact than the factual relation it represents.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What distinguishes an extended metaphor?",
          ["Its frame is sustained across linked expressions or sentences.", "It appears only once.", "It is always impossible to understand."],
          0,
          "Extension develops a single image systematically rather than treating it as an isolated ornament.",
        ),
        q(
          2,
          "Why is a dead metaphor not necessarily bad writing?",
          ["It is usually the most original option.", "Its conventionality can support quick, shared understanding.", "It never has a literal counterpart."],
          1,
          "A familiar image can be efficient and comprehensible even when its origin is no longer noticed.",
        ),
        q(
          3,
          "What is the main weakness of a mixed metaphor?",
          ["It always contains a pun.", "It cannot be spoken aloud.", "Its incompatible images compete and obscure the intended relationship."],
          2,
          "The collision of frames distracts from the meaning unless deliberately exploited for a clear effect.",
        ),
        q(
          4,
          "Which revision best controls a decorative metaphor?",
          ["Add three unrelated images.", "Retain it only if it clarifies the central relationship.", "Replace every literal term with figurative language."],
          1,
          "Figurative language should serve the argument, not accumulate for display.",
        ),
      ],
    },
  ],
};
