import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit, LessonWord } from "@/data/lessons/types";

const idiomWords: LessonWord[] = [
  {
    term: "break the ice",
    meaning: "to make people feel more relaxed when they first meet",
    example: "A short team quiz helped break the ice at the workshop.",
  },
  {
    term: "move the goalposts",
    meaning: "to change the rules or conditions in a way that makes success harder",
    example: "The buyer may move the goalposts by adding a requirement after the price is agreed.",
  },
  {
    term: "on the same page",
    meaning: "sharing the same understanding of a situation or plan",
    example: "Before we vote, let's make sure everyone is on the same page.",
  },
  {
    term: "a blessing in disguise",
    meaning: "something apparently unlucky that turns out to be beneficial",
    example: "Missing the train was a blessing in disguise because I met the client on the next one.",
  },
  {
    term: "the tip of the iceberg",
    meaning: "a small visible part of a much larger hidden problem",
    example: "These complaints are only the tip of the iceberg; many users cannot log in at all.",
  },
  {
    term: "miss the boat",
    meaning: "to be too late to take advantage of an opportunity",
    example: "Apply soon, or you may miss the boat on the reduced fees.",
  },
];

const metaphorWords: LessonWord[] = [
  {
    term: "bridge the gap",
    meaning: "to reduce a significant difference between groups, needs or stages",
    example: "The bridging course aims to bridge the gap between school and university study.",
  },
  {
    term: "a double-edged sword",
    meaning: "something that brings both advantages and disadvantages",
    example: "Instant messaging is a double-edged sword: it speeds replies but encourages interruption.",
  },
  {
    term: "a ray of hope",
    meaning: "a small sign that a difficult situation may improve",
    example: "The first successful transplant offered the family a ray of hope.",
  },
  {
    term: "weather the storm",
    meaning: "to survive a difficult period without collapsing",
    example: "Small firms may weather the storm by reducing fixed costs.",
  },
  {
    term: "a powder keg",
    meaning: "a situation filled with anger or tension that could erupt violently",
    example: "The inflammatory broadcast turned an uneasy protest into a powder keg.",
  },
  {
    term: "a watershed moment",
    meaning: "a turning point after which events develop in an important new direction",
    example: "The court ruling was a watershed moment for equal access to public services.",
  },
];

const chunkWords: LessonWord[] = [
  {
    term: "to some extent",
    meaning: "partly, without agreeing completely",
    example: "To some extent, the delay reflects staff shortages, but poor planning also contributed.",
  },
  {
    term: "in the event of",
    meaning: "if a particular event happens",
    example: "In the event of a fire, use the stairs rather than the lift.",
  },
  {
    term: "for the time being",
    meaning: "for the present period, until a change is made",
    example: "For the time being, the library will close at eight.",
  },
  {
    term: "by no means",
    meaning: "not at all, used for strong emphasis",
    example: "The new evidence is by no means conclusive.",
  },
  {
    term: "as a matter of fact",
    meaning: "used to introduce a fact that corrects or adds emphasis to what was said",
    example: "As a matter of fact, the second draft was clearer than the first.",
  },
  {
    term: "on the face of it",
    meaning: "judging from the information available at first",
    example: "On the face of it, the offer seems reasonable, but the hidden costs need checking.",
  },
];

const allusionWords: LessonWord[] = [
  {
    term: "Achilles' heel",
    meaning: "a single weakness that can endanger an otherwise strong person or system",
    example: "Reliance on one supplier is the company's Achilles' heel.",
  },
  {
    term: "a Pyrrhic victory",
    meaning: "a victory achieved at such a cost that it brings little real benefit",
    example: "Winning the contract after a destructive price war was a Pyrrhic victory.",
  },
  {
    term: "a Faustian bargain",
    meaning: "a deal in which someone sacrifices moral principles for power, knowledge or success",
    example: "Critics described the minister's pact with the oligarch as a Faustian bargain.",
  },
  {
    term: "Waterloo",
    meaning: "a final and decisive defeat, especially after earlier success",
    example: "The unexpected defeat in the final proved to be the team's Waterloo.",
  },
  {
    term: "Orwellian",
    meaning: "resembling oppressive state surveillance and control described by George Orwell",
    example: "Residents criticised the Orwellian scheme that recorded every public journey.",
  },
  {
    term: "a Catch-22",
    meaning: "an impossible situation created by rules whose conditions contradict each other",
    example: "The internship requires experience, but graduates cannot gain experience without an internship: a Catch-22.",
  },
];

const informalIdiomWords: LessonWord[] = [
  {
    term: "throw someone under the bus",
    meaning: "to sacrifice or betray someone to protect oneself or avoid blame",
    example: "A fair manager will not throw someone under the bus when a forecast fails.",
  },
  {
    term: "cut to the chase",
    meaning: "to stop discussing details and get to the main point",
    example: "We are short of time, so let's cut to the chase.",
  },
  {
    term: "a ballpark figure",
    meaning: "an approximate number rather than an exact amount",
    example: "Could you give me a ballpark figure for the renovation costs?",
  },
  {
    term: "touch base",
    meaning: "to make brief contact with someone to exchange information",
    example: "I'll touch base with the supplier before the meeting.",
  },
  {
    term: "back to square one",
    meaning: "returned to the beginning because an attempt has failed",
    example: "When the permit was rejected, the planners were back to square one.",
  },
  {
    term: "think outside the box",
    meaning: "to consider ideas beyond the usual or accepted approaches",
    example: "The design challenge asks students to think outside the box.",
  },
];

export const c1VocabularyUnit3: LessonUnit = {
  title: "Idiom and figurative language",
  description:
    "Interpret common idioms and metaphors, recognise fixed chunks and cultural allusions, and judge when figurative language is appropriate.",
  lessons: [
    {
      slug: "common-idioms-in-context",
      title: "Common idioms in context",
      summary:
        "Interpret six common idioms through situation and surrounding language rather than through their literal images.",
      objective:
        "Infer idiomatic meaning from context, distinguish idiom from literal description and use each phrase with a suitable object or complement.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Read the situation, not just the image",
          paragraphs: [
            "An idiom's meaning belongs to the whole expression. Move the goalposts does not describe sport: it means change the agreed conditions so that an aim becomes harder to achieve. The noun goalposts is usually plural in this idiom.",
            "Context supplies both meaning and tone. The tip of the iceberg suggests that a visible symptom understates a much larger hidden problem, while a blessing in disguise requires a contrast between an initial misfortune and a later benefit.",
          ],
        },
        {
          type: "wordbank",
          title: "Six idioms for everyday and professional situations",
          intro:
            "Pay attention to the scenario each idiom frames, not only the words it contains.",
          words: idiomWords,
        },
        {
          type: "table",
          title: "From image to intended meaning",
          caption:
            "The literal image is a memory aid; the right-hand column defines the communicative job.",
          columns: ["Idiom", "Situation it frames", "Important detail"],
          rows: [
            ["break the ice", "first meeting or awkward silence", "concerns social relaxation"],
            ["move the goalposts", "conditions change during an activity", "implies unfair disadvantage"],
            ["on the same page", "people need shared understanding", "usually refers to two or more people"],
            ["a blessing in disguise", "apparent bad luck brings good", "needs an actual or implied benefit"],
            ["the tip of the iceberg", "visible signs of a larger issue", "emphasises hidden scale"],
            ["miss the boat", "an opportunity passes", "means be too late, not travel badly"],
          ],
        },
        {
          type: "exercise",
          title: "Identify the intended situation",
          instructions:
            "Choose the idiom whose meaning fits the whole scenario.",
          items: [
            c(
              "At first, the cancelled booking seemed frustrating, but it led to a better hotel. It was ___.",
              ["a blessing in disguise", "the tip of the iceberg", "a Catch-22"],
              0,
              "A blessing in disguise describes an apparent misfortune that produces an unexpected benefit.",
            ),
            c(
              "The deadline was moved forward after the team had already completed half the work. The organisers ___.",
              ["broke the ice", "missed the boat", "moved the goalposts"],
              2,
              "Changing the agreed conditions after work began fits move the goalposts.",
            ),
            c(
              "Five customers complained about delays, but internal messages show hundreds are affected. The complaints are ___.",
              ["the tip of the iceberg", "a ballpark figure", "a watershed moment"],
              0,
              "The visible complaints represent only a small part of the larger hidden problem.",
            ),
            c(
              "The trainer tells a funny story so that strangers will relax. The story helps ___.",
              ["weather the storm", "break the ice", "touch base"],
              1,
              "Break the ice means reduce initial social tension and help people feel at ease.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Use the idiom to frame a situation",
          instructions:
            "Write or say your answer before revealing the model. Add enough context to make the figurative meaning clear.",
          items: [
            p(
              "Use on the same page in a sentence about two colleagues planning a presentation.",
              "Model answer: Priya and I are finally on the same page about the presentation's main argument.",
            ),
            p(
              "Describe an opportunity you nearly lost by being too late. Use miss the boat.",
              "Model answer: I nearly missed the boat on the discounted tickets because I waited too long to book.",
            ),
            p(
              "Explain why 'We moved the goalposts to make the game fairer' would need extra explanation.",
              "The idiom normally implies that someone changed the rules to another party's disadvantage, so a genuinely fair change requires context.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which context best supports miss the boat?",
          ["A ferry leaves without you.", "A discount ends before you apply.", "A goalpost is moved during a match."],
          1,
          "Idiomatically, missing the boat means losing an opportunity by acting too late.",
        ),
        q(
          2,
          "What does on the same page require?",
          ["Shared understanding", "A written contract", "The same opinion on every issue"],
          0,
          "It means aligned understanding, not necessarily identical beliefs on every detail.",
        ),
        q(
          3,
          "Why is the tip of the iceberg suitable for 'a few errors in one chapter' when many errors appear elsewhere?",
          ["It means the first sign is the largest.", "It means a small visible part hides a larger problem.", "It means the problem is impossible to solve."],
          1,
          "The idiom emphasises the much larger portion that remains unseen.",
        ),
        q(
          4,
          "Which sentence uses break the ice naturally?",
          ["The repair will break the ice in the pipe.", "The price rise broke the ice in the budget.", "A friendly introduction broke the ice between the two teams."],
          2,
          "Break the ice concerns relieving social awkwardness, especially at a first meeting.",
        ),
      ],
    },
    {
      slug: "metaphor-and-imagery",
      title: "Metaphor and imagery",
      summary:
        "Interpret six metaphorical expressions and extend one controlling image without mixing incompatible images or exaggerating claims.",
      objective:
        "Identify the source image and transferred meaning, then use metaphor to clarify a relationship rather than decorate a sentence.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "A metaphor transfers a relationship",
          paragraphs: [
            "Metaphor understands one thing through another. Bridge the gap transfers the physical idea of crossing distance to reducing a social or conceptual difference. A double-edged sword transfers an object with two cutting edges to an advantage that also causes harm.",
            "An effective metaphor has a consistent logic. Once a scheme is framed as a bridge, the surrounding language can refer to gaps, crossing and connection. Mixing it with unrelated images, such as claiming the bridge is a powder keg, usually obscures rather than intensifies the point.",
          ],
        },
        {
          type: "wordbank",
          title: "Six metaphors and their source images",
          intro:
            "Identify the concrete source before reading across to the abstract target.",
          words: metaphorWords,
        },
        {
          type: "examples",
          title: "Extend one image carefully",
          intro:
            "Each pair keeps a single source image active across two sentences.",
          items: [
            {
              text: "The city aims to bridge the gap between trainees and employers. Apprenticeships provide the crossing point by bringing both groups into the same workspace.",
              note: "The first sentence names the abstract divide; the second sustains the image of connection.",
            },
            {
              text: "Remote access is a double-edged sword. It gives patients flexibility, but the same convenience can expose confidential records if security is weak.",
              note: "Both edges of the sword appear as benefit and harm.",
            },
            {
              text: "The charity faces a powder keg of resentment. Any further funding cut could provide the spark that turns quiet anger into protest.",
              note: "Powder keg and spark belong to the same explosive image.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Read across the metaphor",
          instructions:
            "Choose the expression whose transferred meaning fits the context and preserves the image's logic.",
          items: [
            c(
              "The treatment did not cure the disease, but it gave relatives a small reason to expect improvement. It offered ___.",
              ["a powder keg", "a watershed moment", "a ray of hope"],
              2,
              "A ray of hope is a small positive sign in a difficult situation, not necessarily a cure or a decisive turning point.",
            ),
            c(
              "The software saves time but also makes employees easier to monitor. It is ___.",
              ["a double-edged sword", "a blessing in disguise", "a ballpark figure"],
              0,
              "The sentence presents a benefit and a harm from the same feature, matching the two edges of a sword.",
            ),
            c(
              "The scholarship reduces the difference between students who can afford university and those who cannot. It aims to ___.",
              ["weather the storm", "bridge the gap", "move the goalposts"],
              1,
              "Bridge the gap transfers physical distance to a significant difference between groups.",
            ),
            c(
              "After decades of tension, the agreement changed the direction of peace negotiations. It was ___.",
              ["a watershed moment", "a ray of hope", "the tip of the iceberg"],
              0,
              "A watershed moment marks a decisive turning point after which developments change direction.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a controlled image",
          instructions:
            "Answer with at least two sentences where requested, then compare with the model.",
          items: [
            p(
              "Use weather the storm for a small business surviving a period of falling sales.",
              "Model answer: The owners will weather the storm by reducing overheads and retaining their most loyal customers.",
            ),
            p(
              "Extend the bridge-the-gap metaphor in a second sentence about an educational divide.",
              "Model answer: Online mentoring can bridge the gap between rural learners and specialist teachers. Shared projects then give learners a practical crossing point into those communities.",
            ),
            p(
              "Explain why 'a double-edged sword of hope' is a weaker phrase than 'a double-edged sword' in a balanced analysis.",
              "The added image of hope has no clear relationship to the two edges, so it dilutes the controlled benefit-and-harm metaphor.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is transferred in bridge the gap?",
          ["The idea of crossing a physical space", "The cost of building a bridge", "The legal ownership of a path"],
          0,
          "The physical relationship of crossing a divide is applied to an abstract difference.",
        ),
        q(
          2,
          "Which phrase describes a small positive sign rather than a decisive change?",
          ["a powder keg", "a watershed moment", "a ray of hope"],
          2,
          "A ray of hope is slight and encouraging; a watershed moment is a major turning point.",
        ),
        q(
          3,
          "What makes weather the storm appropriate for a financial crisis?",
          ["It guarantees a quick profit.", "It suggests surviving danger without collapsing.", "It means changing the weather forecast."],
          1,
          "The transferred meaning is endurance through a difficult period.",
        ),
        q(
          4,
          "Which continuation best sustains the powder-keg image?",
          ["The promise opened a new door.", "The rumour became the spark that ignited the tension.", "The bridge connected the final pieces."],
          1,
          "Spark and ignition belong to the same explosive image as powder keg.",
        ),
      ],
    },
    {
      slug: "fixed-expressions-and-chunks",
      title: "Fixed expressions and chunks",
      summary:
        "Use six fixed expressions to qualify claims, state conditions and signal emphasis without changing their grammatical form.",
      objective:
        "Recognise the discourse function of each chunk and preserve patterns such as in the event of + noun and by no means + adjective.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Store the whole expression",
          paragraphs: [
            "Fixed expressions behave as prefabricated units. In the event of is followed by the event being considered, while for the time being marks a temporary present arrangement. Changing either into a newly assembled phrase usually makes the sentence awkward.",
            "Chunks also organise argument. To some extent partially concedes a point; on the face of it marks an initial judgement that may be revised; by no means gives strong negative emphasis. Their value lies as much in discourse control as in vocabulary display.",
          ],
        },
        {
          type: "wordbank",
          title: "Expressions that organise qualified meaning",
          intro:
            "Read the introduction around each example to identify what the chunk is doing.",
          words: chunkWords,
        },
        {
          type: "table",
          title: "Function and pattern",
          caption:
            "The pattern column prevents common errors in the words that follow the chunk.",
          columns: ["Chunk", "Function", "Pattern to preserve"],
          rows: [
            ["to some extent", "partial agreement or qualification", "to some extent, + clause"],
            ["in the event of", "formal condition", "in the event of + noun/-ing"],
            ["for the time being", "temporary present state", "for the time being, + clause"],
            ["by no means", "strong negative emphasis", "by no means + adjective/noun"],
            ["as a matter of fact", "correction or emphatic addition", "as a matter of fact, + clause"],
            ["on the face of it", "provisional first impression", "on the face of it, + clause"],
          ],
        },
        {
          type: "exercise",
          title: "Choose the fixed expression",
          instructions:
            "Select the chunk whose discourse function and grammar fit the sentence.",
          items: [
            c(
              "The first proposal is not final; it is acceptable ___ until the review next month.",
              ["on the face of it", "for the time being", "as a matter of fact"],
              1,
              "For the time being marks a temporary arrangement for the present period.",
            ),
            c(
              "___ a power failure, the emergency generator will start automatically.",
              ["To some extent", "On the face of it", "In the event of"],
              2,
              "In the event of + noun introduces a formal condition and is conventional in procedures.",
            ),
            c(
              "The results are ___ conclusive; another study is still needed.",
              ["by no means", "as a matter of", "in the event of"],
              0,
              "By no means gives strong negative emphasis before the adjective conclusive.",
            ),
            c(
              "The opening is attractive, ___ , but the ending is weak.",
              ["to some extent", "on the face of it", "for the time being"],
              1,
              "On the face of it introduces a first impression that the contrast with the ending qualifies.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write with discourse control",
          instructions:
            "Write complete sentences, then compare with the models. Keep the fixed wording intact.",
          items: [
            p(
              "Use as a matter of fact to correct someone who thinks the museum is closed on Mondays.",
              "Model answer: As a matter of fact, the museum is open on Mondays.",
              "The chunk introduces the corrective fact.",
            ),
            p(
              "Write a formal instruction with in the event of.",
              "Model answer: In the event of a medical emergency, notify the duty officer immediately.",
            ),
            p(
              "Use to some extent and on the face of it to evaluate the same proposal in one sentence.",
              "Model answer: On the face of it, the proposal is affordable; to some extent, however, the costs are hidden in maintenance.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which chunk marks a temporary present arrangement?",
          ["as a matter of fact", "by no means", "for the time being"],
          2,
          "For the time being means for now, until a later change occurs.",
        ),
        q(
          2,
          "Why is 'in the event the fire' incorrect?",
          ["The expression requires of before the noun.", "Fire cannot be an event.", "In the event is always followed by a verb."],
          0,
          "The fixed pattern is in the event of + noun or -ing form.",
        ),
        q(
          3,
          "What does by no means add to 'The data is conclusive'?",
          ["It makes the claim tentative.", "It strongly denies that the data is conclusive.", "It says the data is moderately conclusive."],
          1,
          "By no means expresses emphatic negation: not conclusive at all.",
        ),
        q(
          4,
          "Which sentence uses on the face of it appropriately?",
          ["On the face of it, we have checked every receipt.", "On the face of it, the bag is cheap, but its lining is already tearing.", "The bag is on the face of it."],
          1,
          "The phrase introduces an initial impression that later evidence can qualify or challenge.",
        ),
      ],
    },
    {
      slug: "cultural-references-and-allusions",
      title: "Cultural references and allusions",
      summary:
        "Interpret six allusions to Greek myth, literature and history while checking whether a particular audience shares the reference.",
      objective:
        "Explain the transferred idea in an allusion, use capitalisation accurately and gloss cultural knowledge when readers may not share it.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "An allusion borrows a whole story",
          paragraphs: [
            "An allusion evokes a person, text, event or story so that some of its meaning transfers to the present subject. A Pyrrhic victory does more than describe a costly win: it recalls King Pyrrhus's victory whose losses made the triumph scarcely worthwhile.",
            "Cultural knowledge is unevenly distributed. Orwellian may be immediately clear to readers familiar with surveillance in Orwell's fiction, but an international audience may need a gloss such as 'characterised by pervasive state surveillance and control'. Allusion should sharpen meaning, not gatekeep it.",
          ],
        },
        {
          type: "wordbank",
          title: "Six allusions with usable modern meanings",
          intro:
            "Learn both the source and the present-day effect; do not assume the source alone guarantees understanding.",
          words: allusionWords,
        },
        {
          type: "table",
          title: "Source and transferred meaning",
          caption:
            "These references are not interchangeable descriptions of any failure or difficulty.",
          columns: ["Allusion", "Source", "Transferred idea"],
          rows: [
            ["Achilles' heel", "Greek myth: Achilles' vulnerable heel", "one crucial weakness"],
            ["Pyrrhic victory", "Pyrrhus's costly defeat of the Romans", "a win whose cost nullifies its value"],
            ["Faustian bargain", "the legend of Faust", "moral compromise for gain"],
            ["Waterloo", "Napoleon's final defeat in 1815", "a decisive final downfall"],
            ["Orwellian", "George Orwell's fiction", "oppressive surveillance and control"],
            ["Catch-22", "Joseph Heller's novel", "a self-defeating rule or no-win situation"],
          ],
        },
        {
          type: "exercise",
          title: "Identify the borrowed idea",
          instructions:
            "Choose the allusion that fits the precise relationship described.",
          items: [
            c(
              "The general had won every battle, but his army was destroyed and could not continue the campaign. It was ___.",
              ["a watershed moment", "a Catch-22", "a Pyrrhic victory"],
              2,
              "A Pyrrhic victory is a success achieved at so devastating a cost that little benefit remains.",
            ),
            c(
              "The software engineer sold users' private data in exchange for funding. The arrangement was ___.",
              ["a Faustian bargain", "Achilles' heel", "Waterloo"],
              0,
              "A Faustian bargain involves sacrificing moral integrity for knowledge, power or success.",
            ),
            c(
              "The company's speed was impressive, but dependence on one encryption expert became ___.",
              ["a Catch-22", "Achilles' heel", "a blessing in disguise"],
              1,
              "Achilles' heel names a single vulnerable point in an otherwise strong position.",
            ),
            c(
              "To apply for the entry-level role, candidates need two years of experience that no entry-level role will give them. This is ___.",
              ["Waterloo", "Orwellian", "a Catch-22"],
              2,
              "A Catch-22 describes contradictory conditions that make the desired outcome impossible.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Allude and gloss",
          instructions:
            "Write or say your answer before revealing the model. In the gloss task, make the meaning self-contained.",
          items: [
            p(
              "Use Waterloo in a sentence about an experienced leader's final election defeat.",
              "Model answer: After years of electoral success, the unexpected leadership challenge became the minister's Waterloo.",
            ),
            p(
              "Use Orwellian with a brief gloss for a reader unfamiliar with Orwell.",
              "Model answer: The Orwellian system, with cameras on every street and files on every resident, made privacy almost impossible.",
            ),
            p(
              "Explain why Pyrrhic victory is more precise than expensive victory.",
              "Pyrrhic victory implies that the cost was so great that the win lost its value, not merely that it required money.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which situation is an Achilles' heel?",
          ["A team's second-choice kit", "A team's routine practice session", "A team's only vulnerable goalkeeper"],
          2,
          "Achilles' heel isolates a crucial weakness that can threaten the whole.",
        ),
        q(
          2,
          "What is essential to a Faustian bargain?",
          ["Moral compromise in exchange for gain", "A military defeat", "An accidental misunderstanding"],
          0,
          "The reference centres on a pact that trades ethical principles for power, knowledge or success.",
        ),
        q(
          3,
          "Why might a writer gloss Orwellian?",
          ["The word has no English meaning.", "Not every reader may know the fictional source.", "It can only describe novels."],
          1,
          "A brief explanation makes an allusion accessible without assuming shared cultural knowledge.",
        ),
        q(
          4,
          "Which sentence uses Waterloo correctly?",
          ["The new bridge is their Waterloo.", "The final legal defeat became the corporation's Waterloo.", "Waterloo describes any difficult Tuesday."],
          1,
          "As an allusion, Waterloo means a decisive final defeat after earlier success or power.",
        ),
      ],
    },
    {
      slug: "using-idiom-appropriately",
      title: "Using idiom appropriately",
      summary:
        "Judge the register and tone of six informal idioms and replace them with direct language when professionalism or clarity requires it.",
      objective:
        "Match idiom to audience and purpose, avoid stacking figurative expressions and choose a neutral alternative in sensitive contexts.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Fluency includes restraint",
          paragraphs: [
            "Idioms can create ease and shared understanding, but their effect depends on setting. Cut to the chase is natural among colleagues in a hurry; get to the main point is clearer in an official notice and more accessible to readers with limited idiomatic knowledge.",
            "Tone matters as much as formality. Throw someone under the bus is vivid and accusatory, so using it in a diplomatic message may intensify blame. In sensitive situations, name the behaviour directly rather than adding an emotive metaphor.",
          ],
        },
        {
          type: "wordbank",
          title: "Six informal idioms and their limits",
          intro:
            "Notice the conversational tone carried by each expression.",
          words: informalIdiomWords,
        },
        {
          type: "table",
          title: "Adjust the register without losing the point",
          caption:
            "The alternatives are not always identical in tone; choose the one that fits the intended relationship.",
          columns: ["Informal idiom", "Direct alternative", "Why switch?"],
          rows: [
            ["throw someone under the bus", "shift blame onto someone", "reduces accusation and metaphor"],
            ["cut to the chase", "get to the main point", "clearer for an unfamiliar audience"],
            ["a ballpark figure", "an approximate figure", "more precise in financial reporting"],
            ["touch base", "make brief contact", "less conversational"],
            ["back to square one", "return to the starting point", "neutral in progress reports"],
            ["think outside the box", "consider unconventional approaches", "more specific and less clichéd"],
          ],
        },
        {
          type: "exercise",
          title: "Choose the right tone",
          instructions:
            "Select the wording that best fits the audience and purpose described.",
          items: [
            c(
              "A formal report needs a neutral phrase for a rough estimate. It gives ___.",
              ["a ballpark figure", "an approximate figure", "a blessing in disguise"],
              1,
              "An approximate figure states uncertainty directly without a conversational idiom.",
            ),
            c(
              "A chair wants to redirect a rambling discussion politely but formally. The best wording is:",
              ["Cut to the chase.", "Let's think outside the box.", "Let's return to the main issue."],
              2,
              "Returning to the main issue is direct, polite and appropriate for formal facilitation.",
            ),
            c(
              "A mediator avoids language that intensifies blame. Which phrase is most suitable?",
              ["throw the analyst under the bus", "shift responsibility to the analyst", "leave the analyst at square one"],
              1,
              "Shift responsibility to describes the action without the accusatory metaphor.",
            ),
            c(
              "The rejected design means the team must begin again. In a progress update, write ___.",
              ["back to square one", "on the same page", "the tip of the iceberg"],
              0,
              "Back to square one naturally means returning to the beginning after an unsuccessful attempt.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Translate idiom for real audiences",
          instructions:
            "Produce both an informal and a professional version where requested, then compare with the models.",
          items: [
            p(
              "Rewrite 'Let's touch base next week' for a client email.",
              "Model answer: I will contact you next week to discuss the next steps.",
              "Keep the purpose and add clarity if needed.",
            ),
            p(
              "Write one informal sentence with cut to the chase and one formal alternative.",
              "Informal: Let's cut to the chase and discuss the budget. Formal: Let us turn to the central issue of cost.",
            ),
            p(
              "Explain why using several idioms in one sentence can weaken a serious explanation.",
              "Stacked idioms compete for attention and may sound glib, making the factual relationship harder to understand.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which phrase is most suitable for a formal budget report?",
          ["a ballpark figure", "back to square one", "an approximate figure"],
          2,
          "The direct phrase communicates estimation without an informal metaphor.",
        ),
        q(
          2,
          "Why might throw someone under the bus be risky in mediation?",
          ["It is grammatically incorrect.", "It is vivid language that can intensify blame.", "It means agree with everyone."],
          1,
          "The metaphor of sacrifice makes the wording emotionally and interpersonally charged.",
        ),
        q(
          3,
          "What is the clearest neutral alternative to think outside the box?",
          ["Move the goalposts.", "Consider unconventional approaches.", "Miss the boat."],
          1,
          "It preserves the intended meaning while specifying what kind of thinking is needed.",
        ),
        q(
          4,
          "Which use of touch base is natural?",
          ["I'll touch base with the editor on Friday.", "I'll touch base the editor on Friday.", "I'll touch base to the editor on Friday."],
          0,
          "Touch base takes with + person and means make brief contact.",
        ),
      ],
    },
  ],
};
