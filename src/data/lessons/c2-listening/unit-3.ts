import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2ListeningUnit3: LessonUnit = {
  title: "Culture and allusion",
  description:
    "Interpret layered comedy, literary adaptation, shared cultural references, political rhetoric and fast-moving public debate.",
  lessons: [
    {
      slug: "comedy-irony-and-satire",
      title: "Comedy, irony and satire",
      summary:
        "Decode an original stand-up routine about a “smart” fridge and subscription culture, where several jokes target the same technological promise.",
      objective:
        "Follow fast comic timing and multi-layered satire, separating literal absurdity from the underlying criticism of commercial design.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Before you listen: jokes have a second target",
          paragraphs: [
            "A comedian is testing a new refrigerator that advertises itself as intelligent. The routine moves through product features, subscription terms and a literary quotation, with pauses that change the timing of each punchline.",
            "Listen to the literal scenario, but keep asking what familiar practice it exaggerates. A comic reversal can reveal a design choice or marketing claim that seems unreasonable only because it has been followed to its logical end.",
          ],
        },
        {
          type: "transcript",
          title: "Stand-up: my fridge has joined a book club",
          context:
            "Comedian Ellis Vale performs an original routine, followed by a short interview with host Priya. Ellipses mark comic pauses.",
          lines: [
            { speaker: "Ellis", text: "I bought a smart fridge. Smart, apparently, because it now knows more about my diet than I do—and it has opinions. It told me to do yoga. A fridge. You don't see kettles running mindfulness retreats. The yoghurt expired on Tuesday, so it suggested a seven-day reset. I said, “I could throw the yoghurt away.” It updated its firmware. We had a moment." },
            { speaker: "Ellis", text: "Everything is a subscription now. Even the salad drawer. If I stop paying, it becomes crisper—emotionally. It just sits there, disappointed in my choices." },
            { speaker: "Ellis", text: "The warranty says it's void if I open the appliance. Which is a bold position for a fridge. You've made a box that preserves food and forbids investigation." },
            { speaker: "Ellis", text: "The manual asks, “To be or not to be?” Then: “That'll be £4.99 a month.” Shakespeare gave us tragedy. They gave me a freemium model." },
            { speaker: "Ellis", text: "And the error message is pure Kafka: “Your request could not be processed for reasons that remain your responsibility.” I haven't even put anything in it yet." },
            { speaker: "Ellis", text: "The final insult? It delivered my shopping three hours late and apologised because the algorithm had optimised my life. I wanted milk, not continuous improvement." },
            { speaker: "Priya", text: "So the joke isn't really that your fridge is stupid?" },
            { speaker: "Ellis", text: "No, it's that “smart” means connected, expensive and incapable of minding its own business. We keep calling surveillance a feature because “spy fridge” tested badly." },
            { speaker: "Priya", text: "And what happens when you cancel the subscription?" },
            { speaker: "Ellis", text: "It becomes a fridge. Honestly... best feature in the manual." },
          ],
        },
        {
          type: "tip",
          title: "Follow the recurring satirical pattern",
          text: "Notice the repeated pattern: a product promises intelligence or convenience, then adds control, cost or surveillance. Punchlines may pause before the final word, so do not stop processing when the setup seems complete. Allusions such as Hamlet and Kafka supply extra layers, but the practical joke remains accessible without identifying every source: the routine criticises features sold as benefits while reducing the user's control.",
        },
        {
          type: "exercise",
          title: "Identify the satirical layers",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "What does the fridge suggest when the yoghurt expires?",
              ["A seven-day reset", "A lower electricity tariff", "A new kitchen extension"],
              2,
              "Ellis says the fridge suggested a seven-day reset for the expired yoghurt.",
            ),
            c(
              "Why does the salad-drawer subscription joke work?",
              ["Cancelling makes the drawer “crisper” in an emotional personified sense", "The drawer literally becomes warmer", "The fridge buys a new salad every day"],
              0,
              "The joke applies the human quality of being emotionally “crisp” to an appliance after cancellation.",
            ),
            c(
              "What contradiction is exposed by the warranty?",
              ["The fridge preserves food but forbids the owner from opening it", "The fridge is cheap but has many features", "The manual is available only online"],
              1,
              "A container for food that voids its warranty when opened combines utility with absurd control.",
            ),
            c(
              "What does “optimised my life” mean in the routine?",
              ["The algorithm improved every daily decision", "A sales phrase disguises late, unhelpful service", "The fridge reduced all subscriptions"],
              1,
              "The milk arrives late while the company describes the failure as optimisation, exposing empty marketing language.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Explain the joke beneath the joke",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "How does the Hamlet quotation sharpen the subscription joke?",
              "A profound question about existence is turned into a monthly paywall, contrasting cultural depth with trivial commercial extraction.",
              "The joke depends on the collision between the two registers.",
            ),
            p(
              "Why is the Kafka error message funny?",
              "It mimics opaque, circular bureaucracy by making an unprocessed request simultaneously the user's fault.",
              "The absurdity lies in responsibility without a meaningful action or explanation.",
            ),
            p(
              "Explain the final joke in two sentences, including what “best feature” means.",
              "Model answer: Cancelling the service leaves an ordinary refrigerator that simply keeps food cold. “Best feature” means the absence of software, surveillance and recurring fees rather than any additional intelligence.",
              "Keep the literal appliance function separate from the satirical point.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What recurring pattern connects most of the routine?",
          ["Food becoming more nutritious", "A promise of convenience becoming a mechanism of control or cost", "Fridges learning to cook better meals"],
          1,
          "The product repeatedly adds subscriptions, restrictions, surveillance and blame to ordinary household functions.",
        ),
        q(
          2,
          "Why does Ellis say “we've had a moment” after the firmware update?",
          ["The fridge has switched itself off", "He believes the appliance has responded emotionally to his suggestion", "He has installed a new salad drawer"],
          1,
          "The line personifies the update as a reaction in a tense relationship, deepening the joke about supposedly intelligent products.",
        ),
        q(
          3,
          "What does the final exchange reveal about Ellis's attitude to “smart” technology?",
          ["He rejects the marketing category more than the basic appliance", "He wants every fridge to become more intelligent", "He believes subscriptions always improve reliability"],
          0,
          "An ordinary fridge is his preferred outcome, showing that the criticism targets commercial “smartness”, not refrigeration.",
        ),
        q(
          4,
          "How should a listener handle the literary references if they are unfamiliar?",
          ["Ignore the entire routine", "Treat every quotation as a literal product feature", "Use the surrounding product claims and reversals to grasp the satirical pattern"],
          2,
          "The routine's practical pattern is explicit even when the allusive layers add further meaning.",
        ),
      ],
    },
    {
      slug: "literature-and-film-discussion",
      title: "Literature and film discussion",
      summary:
        "Hear two critics compare a single-take adaptation of Mrs Dalloway with the novel's movement between public streets and private consciousness.",
      objective:
        "Follow close literary and film analysis by tracking how a medium translates narrative technique, temporal cues and character relationships.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Before you listen: adaptation is interpretation",
          paragraphs: [
            "Two critics are discussing a fictional single-take film adaptation of Virginia Woolf's Mrs Dalloway. One values the film's spatial unity; the other misses the novel's ability to move directly into thought.",
            "Listen for pairs of terms: inside and outside, memory and present, continuity and rupture. A visual technique may reproduce a structural effect without preserving the exact narrative method.",
          ],
        },
        {
          type: "transcript",
          title: "Critics' table: Mrs Dalloway in one take",
          context:
            "Critic Elena Park and film scholar Theo Mensah discuss director Nina Rao's fictional 94-minute adaptation.",
          lines: [
            { speaker: "Elena", text: "What struck me is how Rao makes the London streets feel continuous. Clarissa moves from florist to party, and the camera refuses the novel's cuts into other minds. The city becomes one shared present." },
            { speaker: "Theo", text: "Until the sound bridges do that work. Big Ben begins before we see the clock, then a character's memory interrupts the street noise. The film is not as externally continuous as the marketing claims." },
            { speaker: "Elena", text: "But that is precisely the adaptation's argument. Woolf's characters share time without sharing consciousness. Rao puts them in the same physical rhythm and lets sound reveal separation." },
            { speaker: "Theo", text: "I admire that, yet Clarissa's preparation for the party becomes almost entirely visible gesture. The novel's suspense is also syntactic: a sentence can hold desire, embarrassment and memory at once." },
            { speaker: "Elena", text: "The mirror scene does some of that. She hesitates before opening the letter, and the camera stays close enough that we cannot read her expression immediately. We experience uncertainty without voice-over." },
            { speaker: "Theo", text: "Yes, though hesitation is not the same as verbal ambiguity. Septimus is where I feel the loss most. His shell shock is rendered through startling sound, but Woolf gives us the texture of his perception and his effort to interpret it." },
            { speaker: "Elena", text: "The final gathering changes that. Peter's remark reaches Clarissa across the room, and for a few seconds the party falls quiet around her. The adaptation links interior recognition to a social circle rather than isolating it." },
            { speaker: "Theo", text: "That may be Rao's strongest choice. In the novel, Clarissa's recognition is private; here, others almost witness it. The ending is more publicly emotional, perhaps less radical." },
            { speaker: "Elena", text: "Or simply less private. A single take does not guarantee one consciousness. It gives every performance the same temporal pressure as everyone else's." },
            { speaker: "Theo", text: "Then our disagreement is not about whether it is faithful. It is about which Woolf the film chooses to make visible—and whether visibility is what we wanted from this page." },
          ],
        },
        {
          type: "tip",
          title: "Track technique-to-effect claims",
          text: "When critics analyse a medium, link each formal choice to an effect: a sound bridge creates temporal connection, a close shot produces uncertainty, a quiet party makes private recognition socially visible. Do not merely collect terms. Also notice how their disagreement changes: both move from “inside versus outside” towards a shared question about what visibility gains and loses.",
        },
        {
          type: "exercise",
          title: "Compare the adaptations",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "How long is Rao's fictional adaptation?",
              ["94 minutes", "74 minutes", "104 minutes"],
              0,
              "Theo introduces it as a 94-minute adaptation.",
            ),
            c(
              "How does the film partly interrupt its apparent visual continuity?",
              ["A character reads the whole novel aloud", "Sound bridges move between present sound and memory", "The projection stops midway"],
              1,
              "Theo explains that sound and memory interrupt the street sequence before the clock appears.",
            ),
            c(
              "What does the mirror scene replace?",
              ["All party scenes", "The novel's direct access to Clarissa's thoughts", "Septimus's entire role"],
              1,
              "Elena says visible hesitation and withheld expression create uncertainty without voice-over.",
            ),
            c(
              "What changes in the final gathering?",
              ["Clarissa leaves before the party ends", "Peter's remark is removed", "Clarissa's recognition becomes almost visible to the social circle"],
              2,
              "The party briefly falls quiet around her, making private recognition socially perceptible.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a medium-aware comparison",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "Why does Elena reject the claim that one take means one consciousness?",
              "The camera can include many characters under the same temporal pressure without merging their inner lives.",
              "She separates formal continuity from mental unity.",
            ),
            p(
              "Why does Theo feel Septimus's portrayal is the greatest loss?",
              "Sound conveys shock but does not fully reproduce the novel's detailed access to his perceptions and struggle to interpret them.",
              "His objection concerns interiority, not the character's importance.",
            ),
            p(
              "Write a two-sentence evaluation naming one gain and one loss in the adaptation.",
              "Model answer: The film gains a shared temporal and social immediacy by staging recognition within the party. It loses some of the novel's verbal ambiguity and direct access to private thought, especially for Septimus.",
              "Attach each judgement to a specific technique.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the main difference between Elena's and Theo's starting positions?",
          ["Elena values spatial unity; Theo values direct access to interior thought", "Elena rejects the novel; Theo rejects cinema", "They disagree about the runtime"],
          0,
          "Their initial contrast concerns what each medium makes perceptible: shared streets versus private consciousness.",
        ),
        q(
          2,
          "Why is the sound bridge important to Theo's argument?",
          ["It proves the film has no editing", "It introduces memory and therefore qualifies the appearance of one continuous present", "It removes Clarissa from the story"],
          1,
          "The sound anticipates Big Ben and shifts into memory, complicating the claim of purely visual continuity.",
        ),
        q(
          3,
          "What does Elena mean by “not as externally continuous as the marketing claims”?",
          ["The film is poorly projected", "The single-take image is interrupted by temporal and mental movement", "The characters never appear together"],
          1,
          "Theo accepts the camera's spatial continuity while showing that sound and memory resist a single unbroken present.",
        ),
        q(
          4,
          "Where do the critics ultimately converge?",
          ["They agree that adaptation should reproduce every sentence", "They agree that the film is entirely unfaithful", "They agree that the film reveals a particular selection from Woolf rather than a neutral copy"],
          2,
          "Their final exchange shifts from verdict to the interpretive question of which aspects of the novel the film makes visible.",
        ),
      ],
    },
    {
      slug: "cultural-references-and-shared-knowledge",
      title: "Cultural references and shared knowledge",
      summary:
        "Unpack four borrowed references in an advertising campaign and distinguish useful analogy from distortion of the original association.",
      objective:
        "Interpret culturally loaded language in real time by reconstructing shared knowledge and checking the fit between source and modern claim.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "Before you listen: references assume an audience",
          paragraphs: [
            "A cultural historian is reviewing an advertising campaign built from philosophy, literature and political history. Each slogan borrows a familiar association, but the campaign uses them to sell very ordinary services.",
            "Listen for the original association, the modern comparison and the historian's judgement of fit. Shared cultural knowledge is not just recognising a name; it is understanding what that name lets the advertisement imply.",
          ],
        },
        {
          type: "transcript",
          title: "Review: the campaign that borrowed everything",
          context:
            "Host Naomi interviews cultural historian Dr Jae Kim about four fictional advertisements.",
          lines: [
            { speaker: "Naomi", text: "The first advert promises “Kafkaesque simplicity” from a tax app. That sounds less like a benefit than a threat." },
            { speaker: "Jae", text: "Exactly. Kafka evokes bewildering systems, opaque rules and individuals trapped inside them. The campaign probably wants “European sophistication”, but simplicity and Kafka pull in opposite directions." },
            { speaker: "Naomi", text: "The second shows an unopened email and calls the inbox “Schrödinger's cat”. The message is simultaneously read and unread until someone looks." },
            { speaker: "Jae", text: "A memorable image, but the physics is loose. Schrödinger's cat is a thought experiment about quantum superposition and measurement, not ordinary indecision or a message sitting unseen." },
            { speaker: "Naomi", text: "Then there's a furniture shop advertising a “Potemkin village” of showrooms. I assumed that meant impressively cheap." },
            { speaker: "Jae", text: "It means a deceptive façade, something constructed mainly to impress visitors. The historical details are disputed, but the modern association is unmistakably about superficial display rather than value." },
            { speaker: "Naomi", text: "Finally, a weather service accuses a rival of “gaslighting” users by showing sunshine icons under grey skies." },
            { speaker: "Jae", text: "That is a smaller distortion. Gaslighting comes from the play and film Gas Light, where a character is manipulated into doubting her own perception. It is stronger than simply displaying inaccurate information." },
            { speaker: "Naomi", text: "So familiarity can survive even when the borrowed meaning changes?" },
            { speaker: "Jae", text: "Yes, and that is the risk. A recognisable name lends authority while the underlying claim may become almost its opposite. Ask what the audience is expected to recognise before accepting the slogan." },
          ],
        },
        {
          type: "tip",
          title: "Reconstruct source, transfer and fit",
          text: "For each allusion, write three short fields: original association, feature transferred and difference introduced by the new use. Do not stop at the name. If you lack the source knowledge, listen for the historian's definition and compare it with the advertised product. The more technical the original reference, the easier it is for a slogan to borrow prestige while losing precision.",
        },
        {
          type: "exercise",
          title: "Check the borrowed associations",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "What associations does Kafka bring to the tax-app slogan?",
              ["Cheap travel and speed", "Bewildering systems and opaque rules", "Efficient form-filling"],
              1,
              "Jae connects Kafka to bewildering systems and individuals trapped within them.",
            ),
            c(
              "What is Schrödinger's cat originally a thought experiment about?",
              ["Quantum superposition and measurement", "Managing unread email", "Choosing inexpensive furniture"],
              0,
              "Jae explicitly identifies quantum superposition and measurement as the original context.",
            ),
            c(
              "What does “Potemkin village” imply about the showrooms?",
              ["They are built to create an impressive but potentially deceptive façade", "They are the cheapest in the country", "They contain literal villages"],
              1,
              "The modern association concerns superficial display rather than low prices.",
            ),
            c(
              "Why is “gaslighting” stronger than “showing inaccurate information”?",
              ["It always involves a court case", "It is a technical weather term", "It implies manipulating someone into doubting their perception"],
              2,
              "Jae explains the play and film's focus on manipulation of another person's trust in reality.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Decode allusion as argument",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "Why is “Kafkaesque simplicity” internally awkward?",
              "Kafka suggests opaque, trapping complexity, while simplicity promises clarity and ease.",
              "The borrowed association conflicts with the advertised benefit.",
            ),
            p(
              "Why does the unopened-email comparison weaken Schrödinger's original meaning?",
              "An unseen message is an ordinary information-management problem, not quantum uncertainty about physical state under measurement.",
              "The advert retains the image of uncertainty but removes the scientific structure.",
            ),
            p(
              "Choose one campaign reference and write a precise explanation of what the advertiser hopes listeners will associate with it.",
              "Model answer: “Potemkin village” asks shoppers to associate the showrooms with impressive, storybook abundance, while the phrase also warns that the display may conceal a less substantial reality.",
              "Include both the intended positive association and the phrase's critical edge.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What does Jae think the Kafka campaign probably intended?",
          ["A warning about totalitarian states", "An association with European sophistication", "A literal promise of bureaucratic confusion"],
          1,
          "She infers a branding intention that clashes with Kafka's recognisable associations.",
        ),
        q(
          2,
          "Why can a technically loose allusion still persuade?",
          ["Listeners ignore all borrowed references", "A familiar name can lend authority before its original meaning is examined", "Scientific references are always literally accurate in advertising"],
          1,
          "Recognition transfers emotional or intellectual prestige even when the underlying comparison is distorted.",
        ),
        q(
          3,
          "Why does Jae mention that the Potemkin historical details are disputed?",
          ["To show that modern associations can be clear even when origin stories are uncertain", "To prove the phrase has no modern meaning", "To endorse the furniture shop"],
          0,
          "He separates uncertainty about historical origin from the established modern idea of deceptive display.",
        ),
        q(
          4,
          "Which listening question best handles culturally loaded language?",
          ["Have I heard the name before?", "Does the phrase sound impressive?", "What shared association is invoked, and does it support the present claim?"],
          2,
          "Jae's method requires reconstructing the association and testing its relevance to the advertisement.",
        ),
      ],
    },
    {
      slug: "political-and-public-rhetoric",
      title: "Political and public rhetoric",
      summary:
        "Analyse a mayor's bridge speech with a rhetoric specialist, identifying repetition, moral contrast and policy details left outside the appeal.",
      objective:
        "Evaluate public rhetoric by tracking devices, implied commitments and the relationship between persuasive form and policy substance.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Before you listen: rhetoric makes a claim move",
          paragraphs: [
            "A fictional mayor is announcing funding for a bridge. A short speech extract is followed by an analyst's explanation of how repetition, lists and oppositional language make the proposal sound larger than its stated budget.",
            "Listen for the exact wording of repeated phrases and for the people implicitly included in “we” and “they”. A rhetorical effect can be clear even when the evidence for the policy remains incomplete.",
          ],
        },
        {
          type: "transcript",
          title: "Speech analysis: a bridge for everyone",
          context:
            "Host Leila plays two short excerpts from Mayor Isabel Costa, then interviews rhetoric analyst Dr Marcus Reed.",
          lines: [
            { speaker: "Mayor Costa", text: "We will build a bridge that is safer, fairer and stronger. We will build it on time, and we will build it without leaving the next generation the bill." },
            { speaker: "Mayor Costa", text: "Some will tell you that caution means waiting. I tell you that waiting means turning our backs on the future. This is not merely concrete and steel; it is a promise that this city moves together." },
            { speaker: "Leila", text: "Dr Reed, how much of the speech is policy detail, and how much is framing?" },
            { speaker: "Marcus", text: "The repetition of “we will” creates agency and certainty before the audience has heard a financing plan. The three adjectives form a tricolon: safer, fairer, stronger. It is memorable because the structure is balanced, not because each term is defined." },
            { speaker: "Leila", text: "And the contrast between caution and waiting?" },
            { speaker: "Marcus", text: "That is a moral framing device. It presents opposition as a character flaw rather than a policy disagreement. “Some will tell you” also creates a vague opponent who cannot answer in the room." },
            { speaker: "Leila", text: "The phrase “not merely concrete and steel” is doing something similar?" },
            { speaker: "Marcus", text: "It elevates the project from an engineering purchase to a symbol of shared future. That can inspire, but it also makes practical objections sound like opposition to the future itself." },
            { speaker: "Leila", text: "Yet the announced budget covers only the eastern connection. Does the rhetoric mention that?" },
            { speaker: "Marcus", text: "No. “This city” and “everyone” are broader than the funded scope. That gap is a substantive omission the rhetoric encourages listeners not to notice. The fairest reading is that the speech succeeds as mobilising language, but whether the policy deserves the promise depends on cost, timetable and distribution of benefit—not on the applause pattern. Keep those policy tests separate from the emotional force of the performance." },
          ],
        },
        {
          type: "tip",
          title: "Analyse both device and scope",
          text: "Mark repetition, balanced lists, contrast, metaphor and pronouns. Then ask what each device asks the audience to assume. Rhetorical analysis is not merely spotting techniques; it connects them to agency, evidence and omission. Keep a separate line for substance: budget, timetable and geographic scope. A persuasive performance can be effective while its policy claim remains unsupported.",
        },
        {
          type: "exercise",
          title: "Analyse the speech precisely",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "Which three adjectives form the balanced list?",
              ["Faster, cheaper, greener", "Safer, fairer, stronger", "Longer, wider, taller"],
              1,
              "The mayor says “safer, fairer and stronger”, forming a three-part tricolon.",
            ),
            c(
              "What does repeating “we will” primarily establish?",
              ["A detailed cost estimate", "Agency and certainty before financing is explained", "The bridge's exact location"],
              1,
              "Marcus says the repetition creates agency and certainty before the audience hears a financing plan.",
            ),
            c(
              "How does the speech portray those who favour waiting?",
              ["As partners in planning", "As neutral observers", "As people turning their backs on the future"],
              2,
              "The mayor equates waiting with rejecting the future, turning a policy difference into moral failure.",
            ),
            c(
              "What omission does Leila identify?",
              ["The fact that the announced budget covers only the eastern connection", "The project's name", "The mayor's title"],
              0,
              "She contrasts the broad language of the whole city with the narrower funded scope.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Separate persuasive effect from evidence",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "Why is “some will tell you” rhetorically convenient?",
              "It introduces an unspecified opponent who cannot defend a nuanced position in the room, making disagreement easier to dismiss.",
              "Marcus notes the absence of a direct, answerable interlocutor.",
            ),
            p(
              "What does “not merely concrete and steel” invite the audience to believe?",
              "That the bridge symbolises a shared future and that practical objections may represent opposition to progress.",
              "The metaphor raises the project above a limited engineering purchase.",
            ),
            p(
              "Write a two-sentence evaluation that recognises the speech's persuasive skill and its substantive limitation.",
              "Model answer: The mayor uses repetition, balanced lists and moral contrast to present the bridge as an inevitable collective future. The speech's inclusivity exceeds the announced budget's eastern-only scope, so the financing and distribution of benefits remain open questions.",
              "Include one device and one policy limitation.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the effect of “we will” repeated across the speech?",
          ["It weakens the mayor's agency", "It creates a confident collective commitment before details are supplied", "It quotes the opposition accurately"],
          1,
          "Marcus links the repetition to certainty and agency, showing how form can precede financing evidence.",
        ),
        q(
          2,
          "Why does Marcus call the caution-versus-waiting contrast moral framing?",
          ["It defines both sides by their ethical character rather than their evidence", "It provides a precise construction timetable", "It explains the engineering risks"],
          0,
          "Waiting is portrayed as turning away from the future, so disagreement becomes a supposed failure of character.",
        ),
        q(
          3,
          "What is the gap between “this city” and the announced scope?",
          ["The city has no residents", "The bridge has no engineering component", "The language implies universal benefit while funding names only one connection"],
          2,
          "The inclusive rhetoric is wider than the specific funded geography.",
        ),
        q(
          4,
          "What is Marcus's final judgement?",
          ["The speech proves the policy is effective", "The speech is effective mobilising language, but policy merit depends on separate evidence", "Rhetoric has no relationship to public understanding"],
          1,
          "He separates the speech's persuasive success from the unanswered questions of cost, timing and benefit distribution.",
        ),
      ],
    },
    {
      slug: "debate-at-pace",
      title: "Debate at pace",
      summary:
        "Follow a fast parliamentary-style debate on funding arts as infrastructure, where speakers shift between economic evidence, public value and concession.",
      objective:
        "Track a rapid proposition-opposition debate, distinguishing direct rebuttal, supporting evidence and tactical concessions.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Before you listen: positions change within a turn",
          paragraphs: [
            "A studio is staging a debate on whether government should classify arts funding as infrastructure. The proposer wants a larger protected settlement; the opposition accepts cultural value but challenges the category and its effect on essential capital budgets.",
            "At this pace, one speaker may concede a point while rejecting the conclusion. Listen for pivot phrases such as “granted”, “but” and “even if”, and retain the condition attached to each proposed compromise.",
        ],
        },
        {
          type: "transcript",
          title: "Studio debate: is art infrastructure?",
          context:
            "Chair Farah moderates a fictional fast debate with proposer Lena, opposition speaker Idris and arts-worker representative Bea.",
          lines: [
            { speaker: "Lena", text: "The motion is simple: if a railway carries people, a theatre carries a shared culture. Creative activity contributes five point two percent of regional value added, yet culture receives nought point four percent of the capital budget." },
            { speaker: "Idris", text: "A striking comparison, but value added is not the same as capital need. The arts have wage budgets; calling rehearsal rooms “bridges” does not repair either a bridge or a roof." },
            { speaker: "Lena", text: "It protects the arts from being the first cut every downturn. Granted, not every venue deserves blank-cheque support; I propose an independent fund for spaces that meet access and employment standards." },
            { speaker: "Idris", text: "Protection is the problem. If infrastructure means things we cannot postpone, a touring orchestra competes with flood defences on a false scale of urgency." },
            { speaker: "Bea", text: "May I distinguish the venue from the worker? Musicians already face insecure contracts. A capital fund for public rehearsal space would lower costs without pretending every performance is essential infrastructure." },
            { speaker: "Idris", text: "That is a reasonable limited case, and I would consider targeted building grants. I still oppose moving the whole culture budget into a ring-fenced infrastructure settlement." },
            { speaker: "Lena", text: "Even if the settlement had an annual sunset review and excluded commercial venues?" },
            { speaker: "Idris", text: "Then I would examine the detail, yes. My objection is to an unlimited label, not to public investment in cultural space." },
            { speaker: "Bea", text: "And can both sides support paying artists properly? A beautiful building with insecure labour is not sustainable infrastructure." },
            { speaker: "Farah", text: "We have convergence on targeted investment and labour standards, and disagreement on whether the wider budget should be protected by classification." },
          ],
        },
        {
          type: "tip",
          title: "Track rebuttal, concession and condition",
          text: "Use four labels: claim, rebuttal, concession, condition. When a speaker says “granted” or “reasonable”, note exactly what is granted—here, selected building support—not the whole motion. A sunset review or exclusion changes the proposal and may change the opponent's response. The chair's final summary often reveals the debate's true structure better than either opening statement.",
        },
        {
          type: "exercise",
          title: "Track positions at debate speed",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "What share of regional value added does Lena attribute to creative activity?",
              ["Nought point four percent", "Four point five percent", "Five point two percent"],
              2,
              "Lena states that creative activity contributes 5.2 percent of regional value added.",
            ),
            c(
              "Why does Idris challenge the comparison?",
              ["He denies that theatres have cultural value", "Economic value added is not the same as capital requirement", "He believes culture receives no public funding"],
              1,
              "He distinguishes economic contribution from the need for capital investment.",
            ),
            c(
              "What does Lena concede in her first response?",
              ["Not every venue deserves unconditional support", "All capital spending should go to the arts", "Culture needs no independent scrutiny"],
              0,
              "She says “granted, not every venue” and proposes standards for an independent fund.",
            ),
            c(
              "What narrows Idris's opposition by the end?",
              ["He rejects all cultural grants", "He accepts targeted building support and wants details of any protected settlement", "He supports moving the whole budget into infrastructure"],
              1,
              "He says he would consider targeted grants and examine a sunset-reviewed, narrower settlement.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Map the debate's real structure",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "How does Bea shift the discussion away from venue classification?",
              "She separates buildings from working conditions and argues that public space, fair labour and access must be considered together.",
              "Her contribution adds a criterion neither opening fully addresses.",
            ),
            p(
              "Why is Idris's response to the sunset-review proposal a concession rather than full agreement?",
              "He agrees to examine a more limited, reviewable scheme but does not endorse a permanent protected classification for the whole culture budget.",
              "Retain the difference between considering detail and accepting the motion.",
            ),
            p(
              "Write a three-sentence debate map with the original split, narrowing concession and shared principle.",
              "Model answer: The opening split concerns whether the entire culture budget should be protected as infrastructure. Idris narrows his opposition to targeted building grants and a reviewable settlement, while Lena accepts standards and exclusions. Both support cultural space linked with decent artist pay and public access.",
              "Do not describe the convergence as agreement on the original motion.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does Idris call the comparison a “false scale of urgency”?",
          ["He argues that cultural facilities and flood defences cannot simply be ranked as equivalent postponable needs", "He thinks cultural activity has no value", "He wants to reduce all public spending"],
          0,
          "His objection concerns the category and urgency attached to infrastructure, not the worth of art.",
        ),
        q(
          2,
          "What function does Lena's “granted” serve?",
          ["It withdraws the whole motion", "It concedes that universal venue support is unjustified and strengthens a narrower fund", "It asks Idris to leave the debate"],
          1,
          "The concession allows her to reframe support as conditional rather than unlimited.",
        ),
        q(
          3,
          "What does Bea mean by “a beautiful building with insecure labour” is not sustainable?",
          ["Architecture has no social function", "Artists should never use public venues", "Cultural infrastructure must include fair working conditions, not only physical capital"],
          2,
          "She expands sustainability from property to the people whose work gives the space purpose.",
        ),
        q(
          4,
          "Which summary best captures the ending?",
          ["Both sides adopted the original motion", "The opposition defeated every funding proposal", "They found common ground on targeted investment and labour while retaining disagreement on blanket protection"],
          2,
          "The chair explicitly distinguishes convergence on narrower measures from the unresolved classification dispute.",
        ),
      ],
    },
  ],
};
