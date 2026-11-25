import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2ReadingUnit1: LessonUnit = {
  title: "Literary reading",
  description:
    "Read voice, syntax, imagery, ambiguity and poetic form as interpretive evidence, holding competing readings without forcing a text into a single explanation.",
  lessons: [
    {
      slug: "voice-point-of-view-and-narration",
      title: "Voice, point of view and narration",
      summary:
        "Analyse a story in which a third-person narrator, an unreliable remembered voice and an embedded letter expose different versions of the same marriage.",
      objective:
        "Distinguish narrator, focaliser and quoted voice, then evaluate how shifts in narrative authority position the reader.",
      minutes: 36,
      blocks: [
        {
          type: "passage",
          title: "The second signature",
          paragraphs: [
            "After the funeral, Elian found four letters in the drawer where his wife kept guarantees. He recognised his own name on three envelopes. The fourth bore only a date, written in the cramped hand of a woman he had known before she became his wife, before her signature learned to occupy the whole page.",
            "He remembered that hand from the kitchen of a house with no clock. ‘You mistake silence for permission,’ it had written once, and he had framed the sentence as a joke because framing made it less true. Now, opening the letter, he discovered that the sentence had continued: ‘If you will not answer, I shall have to answer for both of us.’",
            "The letter described a meeting that had never occurred. It described a room with green curtains, a decision made at noon, a departure delayed until evening. Elian read it standing up because the chair seemed to belong to another version of the room. Nothing in the account was impossible, which was precisely what made it intolerable.",
            "Years later he would say that he burned the letter to protect her reputation. What he actually did was place it beneath the guarantee for the funeral account, where its handwriting slowly transferred a faint grey shadow onto the form. When the clerk asked him to sign, he noticed that his name had acquired the cramped pressure of hers.",
          ],
          glossary: [
            { term: "focaliser", meaning: "The character or viewpoint through whose perception events are filtered." },
            { term: "unreliable", meaning: "A narrative voice whose account is limited, self-serving or in tension with other evidence." },
            { term: "intolerable", meaning: "Impossible to accept or endure." },
          ],
        },
        {
          type: "table",
          title: "Layers of voice",
          caption: "Each layer controls a different kind of knowledge and authority.",
          columns: ["Layer", "Example", "What it can know", "Pressure on authority"],
          rows: [
            ["Third-person narration", "Elian found four letters", "Access to a limited sequence of Elian's actions", "Frames the story through his perception"],
            ["Remembered phrase", "You mistake silence for permission", "A past accusation retained by Elian", "Challenges his retrospective account"],
            ["Embedded letter", "It described a meeting that had never occurred", "An alternative account not fully quoted", "Introduces a rival version without settling it"],
            ["Future summary", "Years later he would say", "How Elian constructs his public memory", "Contradicted immediately by what he actually did"],
          ],
        },
        {
          type: "exercise",
          title: "Locate narrative authority",
          instructions: "Choose the answer that accounts for voice and perspective.",
          items: [
            c(
              "What is the effect of beginning with Elian's discovery?",
              ["It invites the reader to occupy his limited perspective before the letter destabilises it", "It gives direct access to his wife's thoughts", "It establishes an omniscient account of every event"],
              0,
              "The narration is third person but closely aligned with Elian's discovery and memory.",
            ),
            c(
              "Why does the phrase ‘before her signature learned to occupy the whole page’ matter?",
              ["It describes a change in handwriting lessons only", "It suggests a loss or expansion of autonomous identity within the marriage", "It proves the wife signed every document"],
              1,
              "The signature becomes a metaphor for the space available to a person within an institutional relationship.",
            ),
            c(
              "What is unsettling about ‘Nothing in the account was impossible’?",
              ["It shows Elian has forgotten how to read", "It proves the letter is fraudulent", "It makes the alternative version plausible without confirming its truth"],
              2,
              "Plausibility, rather than verified fact, creates the narrative pressure.",
            ),
            c(
              "How does the final sentence revise our understanding of Elian?",
              ["It reveals that his account has absorbed the very pressure he attributes to his wife, complicating his self-image", "It confirms his complete innocence", "It proves the clerk forged the guarantee"],
              0,
              "The handwriting transfer unsettles the boundary between his identity and hers and exposes the instability of his narrative.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Read the narration against itself",
          instructions: "Separate what is observed, what is remembered and what is inferred.",
          items: [
            p(
              "Write a brief voice map using one feature from each narrative layer.",
              "Model answer: Limited third-person narration follows Elian's discovery; remembered quotation restores the wife's earlier accusation; the letter offers a withheld counter-version; the future summary exposes Elian's later self-justification.",
              "Name the layer and its effect on credibility.",
            ),
            p(
              "Evaluate the claim that Elian is an unreliable narrator.",
              "Model answer: Elian is not a first-person narrator, but his focalised perspective and demonstrably altered memory make his retrospective account unreliable; the story preserves that instability by contradicting his public explanation with his actual action.",
              "Distinguish an unreliable focaliser from an explicitly lying narrator.",
            ),
            p(
              "Interpret the final transfer of handwriting without asserting a supernatural event.",
              "Model answer: The shadow can be read as a material figure for how Elian's account has been shaped by the wife's suppressed voice, while his adopted pressure suggests the instability of his supposedly independent identity.",
              "Treat the image as figurative and acknowledge its ambiguity.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Third person is not neutral",
          text: "Ask whose perceptions organise the sentence, whose vocabulary colours events and whose version is contradicted by later information. Narrative distance describes a relation to knowledge, not merely the use of he, she or they.",
        },
      ],
      quiz: [
        q(1, "What does ‘Nothing in the account was impossible’ withhold?", ["The letter's complete wording", "A decisive verification of its truth", "The date of the funeral"], 1, "The wording sustains plausible alternatives without resolving them."),
        q(2, "Why is the phrase ‘he would say’ important?", ["It marks future narration and distinguishes public memory from the action immediately described.", "It introduces the wife's voice.", "It proves the letter was burned."], 0, "The construction sets up a gap between retrospective self-presentation and evidence."),
        q(3, "What does the unopened guarantee for the funeral account symbolically do?", ["It places the private letter within a public record of death and obligation.", "It settles every financial question.", "It shows Elian cannot write."], 0, "The juxtaposition binds intimate memory to institutional administration."),
        q(4, "Which reading best respects the story's ambiguity?", ["The wife was certainly innocent.", "Elian certainly invented the letter.", "The story makes competing versions of agency and identity available without a final verdict."], 2, "The narrative's layered voices resist a single factual resolution."),
      ],
    },
    {
      slug: "style-syntax-and-literary-effect",
      title: "Style, syntax and literary effect",
      summary:
        "Analyse how suspended syntax, abrupt brevity and repeated prepositions create hesitation and force in an original ferry-crossing scene.",
      objective:
        "Explain the interpretive effects of sentence length, postponement, parallelism, punctuation and rhythm with close textual evidence.",
      minutes: 34,
      blocks: [
        {
          type: "passage",
          title: "Low water",
          paragraphs: [
            "The ferry had not crossed for nine days, and the river had rearranged itself around the absence: shallows shone where the channel had been, a drowned fence emerged near the willows, and each morning the water left another black line on the steps as if marking how far it intended to retreat.",
            "Nera waited where the ticket office, locked since Thursday, cast a narrow shade. She had brought the boat key although nobody had asked for it, and its teeth pressed into her palm through the lining of her coat. When the old man came down the road she straightened, ready to return what he had left, to explain that she had kept it safe, that the delay was not hers.",
            "But he passed without looking at her, carrying two buckets and a length of rope over one shoulder. ‘There's a crossing if you want it,’ he said, meaning not the ferry, meaning the place where the river narrowed and a boy on the far bank was already taking off his shoes.",
            "Nera thought of the timetable curling in her pocket, of the exact hour at which waiting became a decision. The river moved between them. The man lowered one bucket. The boy stepped in. And Nera, who had spent nine days refusing to move, felt the key loosen in her hand.",
          ],
          glossary: [
            { term: "shallows", meaning: "Areas of water that are not deep." },
            { term: "channel", meaning: "The main route or deeper part of a river." },
            { term: "lining", meaning: "The inner layer of fabric inside clothing or an object." },
            { term: "postponement", meaning: "The delay of syntactic completion or important information." },
          ],
        },
        {
          type: "examples",
          title: "Syntax as experience",
          intro: "Describe the formal choice before naming its effect; rhythm makes an argument about attention.",
          items: [
            {
              text: "The ferry had not crossed for nine days, and the river had rearranged itself around the absence: shallows shone where the channel had been, a drowned fence emerged near the willows, and each morning the water left another black line on the steps as if marking how far it intended to retreat.",
              note: "The long periodic sentence delays closure, then accumulates parallel visual clauses; the final as if gives the river an unsettling intention.",
            },
            {
              text: "But he passed without looking at her, carrying two buckets and a length of rope over one shoulder.",
              note: "The initial But cuts across Nera's prepared explanation, while the dense participial phrase makes the man's body carry practical purpose she does not yet understand.",
            },
            {
              text: "The river moved between them. The man lowered one bucket. The boy stepped in.",
              note: "Short independent clauses slow the moment and distribute agency among river, adult and child without explanatory glue.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Analyse stylistic effects",
          instructions: "Choose the analysis most closely tied to syntax and context.",
          items: [
            c(
              "Why does the first sentence delay its main syntactic completion?",
              ["To conceal that the ferry has stopped", "To make the reader experience the slow accumulation of signs that the river has changed", "To demonstrate that Nera cannot speak"],
              1,
              "The long clause and colon distribute attention across details, enacting a gradual recognition.",
            ),
            c(
              "What does the repeated ‘where’ produce?",
              ["A series of unrelated timestamps", "A denial that the river has changed", "A precise spatial remapping in which former features exchange positions"],
              2,
              "Shallows occupy the former channel and a fence emerges, establishing transformed geography.",
            ),
            c(
              "Why are the final short sentences effective?",
              ["They convert accumulated hesitation into discrete actions and force attention onto possible movement", "They provide a full explanation of the man's plan", "They remove the river from the scene"],
              0,
              "The shift from flowing syntax to separated clauses makes each action immediate and consequential.",
            ),
            c(
              "What is the effect of ‘meaning not the ferry, meaning’?",
              ["It exposes a gap between conventional expectation and the man's practical alternative", "It shows that he cannot speak clearly", "It confirms that the ferry will reopen"],
              0,
              "The repeated gloss interrupts indirect speech and redirects the reader's understanding.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a stylistic analysis",
          instructions: "Use a formal term only when you can point to its exact location and explain its effect.",
          items: [
            p(
              "Analyse one long sentence using postponement and parallelism.",
              "Model answer: The opening sentence withholds a final full stop while the colon launches three coordinated images; this syntactic accumulation delays orientation and allows the reader to feel the river's change as a sequence rather than an announcement.",
              "Quote a short structural cue and describe the reading experience.",
            ),
            p(
              "Compare the second paragraph's sentence architecture with the final paragraph.",
              "Model answer: The second paragraph uses subordinated purpose clauses to hold Nera inside a prepared explanation, whereas the final paragraph breaks into short main clauses that enact movement; syntax changes when readiness becomes action.",
              "Relate sentence form to the character's changing state.",
            ),
            p(
              "Write a 60–80-word analysis of the key image.",
              "Model answer: The key first presses its ‘teeth’ into Nera's palm, a tactile image that makes an object of return feel almost bodily. At the end it ‘loosen[s]’ as she considers moving, so the same object registers contraction and release. Because the key is never turned or returned, its changing pressure leaves agency suspended between the official route and the improvised crossing.",
              "Track the image across the passage rather than interpreting it once.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Avoid the sentence-length shortcut",
          text: "Long sentences do not automatically create excitement and short ones do not automatically create drama. Examine where information arrives, what is delayed and how the sentence sits beside its neighbours. Effect comes from patterned contrast, not from a formula.",
        },
      ],
      quiz: [
        q(1, "What does ‘as if marking how far it intended to retreat’ add?", ["A human-like intention to the river that unsettles simple description", "A precise flood measurement", "A statement about the ticket price"], 0, "The simile makes natural change appear deliberate."),
        q(2, "Why does Nera bring a key that nobody requested?", ["To prove she owns the ferry", "To reveal her attachment to a role and routine that may no longer exist", "To unlock the ticket office"], 1, "The unnecessary object embodies her investment in waiting."),
        q(3, "What changes grammatically in the final paragraph?", ["It moves from longer reflective syntax to short independent actions.", "It becomes a single question.", "It removes all verbs."], 0, "The compression makes movement perceptible."),
        q(4, "What does the story withhold at the end?", ["Whether Nera crosses", "Whether the boy removes his shoes", "Whether the ferry has stopped"], 0, "The loosening key suggests readiness, not a completed decision."),
      ],
    },
    {
      slug: "symbolism-and-imagery",
      title: "Symbolism and imagery",
      summary:
        "Interpret a conservatory story in which glass, salt and a persistent moth accumulate meanings without functioning as a fixed symbolic code.",
      objective:
        "Trace recurring images through change and context, distinguish symbolic pattern from allegory and test a reading against counter-evidence.",
      minutes: 35,
      blocks: [
        {
          type: "passage",
          title: "The house of weather",
          paragraphs: [
            "The conservatory was designed to keep weather out and light in, an ambition its cracked panes made almost comic. Rain entered along the roof, travelled the glass ribs and gathered in the corners where salt had bloomed through the stone. My grandmother called this second weather ‘the house's opinion’.",
            "Each winter she placed a dish of salt beneath the orchid bench. She claimed it drew the damp, though the pale crystals only spread across the slate and stung if you knelt without a cloth. When I asked why she continued, she said that some work consisted not in changing a room but in refusing to let it change unnoticed.",
            "The conservatory was therefore full of small witnesses: the moth that returned to the same broken pane, the fern uncurling beside a bucket, the imprint of a hand on glass wiped clean from one side but visible from the other. After she died, the room cooled quickly. The first frost silvered the orchid leaves before anyone thought to close the inner door.",
            "I cleared the salt in spring and found a green shoot pushing through the gap where two panes met. It had no soil beyond the dust collected in the frame. I left it there, not because I believed the house was healing, but because my grandmother would have recognised a refusal to leave a room undescribed.",
          ],
          glossary: [
            { term: "conservatory", meaning: "A glazed building or room used for growing plants." },
            { term: "allegory", meaning: "A narrative whose elements consistently stand for a separate fixed system of meaning." },
            { term: "desiccated", meaning: "Dried out or deprived of moisture." },
            { term: "witness", meaning: "Something that records or testifies to an event or condition." },
          ],
        },
        {
          type: "rules",
          title: "Read images relationally",
          items: [
            "Inventory: collect sensory details, but do not label each as a symbol immediately.",
            "Trajectory: note where an image first appears, what changes and whether it returns in altered form.",
            "Relation: examine contrast and sequence—glass excludes weather while admitting it; salt is meant to remove damp but becomes another residue.",
            "Interpretive pressure: decide what problem the pattern makes visible, such as maintenance, inheritance or attention.",
            "Resistance: retain details that do not fit the proposed meaning and qualify the claim accordingly.",
          ],
        },
        {
          type: "exercise",
          title: "Interpret the image pattern",
          instructions: "Choose the reading that best accounts for multiple details and their limits.",
          items: [
            c(
              "Why is the conservatory's original ambition ‘almost comic’?",
              ["The building has no windows", "Its purpose is visibly defeated by the conditions it was built to control", "The grandmother never uses it"],
              1,
              "The design's attempt to separate inside from weather is undermined by cracks and rain.",
            ),
            c(
              "What does the salt most strongly suggest?",
              ["A permanent solution to damp", "Proof that the grandmother misunderstands chemistry", "A ritual of attention whose practical failure does not erase its meaning"],
              2,
              "Her continued action defines work as noticing rather than guaranteed transformation.",
            ),
            c(
              "How does the frost after her death alter the image pattern?",
              ["It shows that the room's ‘second weather’ continues when the person who interprets it is absent", "It proves all the plants die", "It confirms that salt removed the damp"],
              0,
              "The formerly managed environment now exposes its vulnerability and the loss of attentive labour.",
            ),
            c(
              "Why does the narrator resist saying the house is healing?",
              ["To avoid converting an ambiguous shoot into a reassuring allegory of recovery", "To deny that the shoot is green", "To show that the grandmother hated plants"],
              0,
              "The qualification preserves the possibility of new life without asserting symbolic closure.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Construct a symbolic reading",
          instructions: "Use at least two images and one detail that resists your interpretation.",
          items: [
            p(
              "Write a thesis about maintenance rather than about ‘the house as a person’.",
              "Model answer: The passage presents maintenance as an ethics of attention that persists despite imperfect control, with weather, salt and the final shoot making continued care more significant than restoration.",
              "Avoid personifying the house until the human practice is clear.",
            ),
            p(
              "Explain how glass functions in at least two different ways.",
              "Model answer: Glass embodies the failed separation of protected interior and damaging weather, but the handprint visible from only one side also shows that attention depends on position: the same act of cleaning leaves evidence for another viewer.",
              "Use contrast rather than assigning glass one fixed meaning.",
            ),
            p(
              "Qualify a reading in which the shoot symbolises renewal.",
              "Model answer: The shoot may suggest renewal because it grows through an unplanned gap, but its lack of soil and the narrator's explicit resistance to ‘healing’ make the image provisional, closer to stubborn continuation than assured recovery.",
              "Name evidence for and against the symbolic reading.",
            ),
          ],
        },
        {
          type: "tip",
          title: "A symbol need not mean one thing",
          text: "Literary symbols often gain force from changing across a text or supporting several related meanings. Allegory requires a more stable one-to-one correspondence. Ask how much contextual variation the image can bear before you force it into a code.",
        },
      ],
      quiz: [
        q(1, "What does ‘the house's opinion’ suggest?", ["The grandmother interprets material traces as a form of speech from the building", "The house literally expresses political views", "Salt is the only source of damp"], 0, "The metaphor frames close attention as a response to an environment."),
        q(2, "Why include the moth that returns to the broken pane?", ["To establish a precise species migration", "To suggest repetitive, perhaps futile attention and a search for passage", "To prove glass is transparent"], 1, "Its repetition joins the pattern of return and obstruction."),
        q(3, "What makes the final image resistant to closure?", ["Its growth occurs in dust and a crack, while the narrator refuses a confident healing narrative.", "The narrator cannot see it.", "It is made of salt."], 0, "Promising growth remains materially fragile and interpretively open."),
        q(4, "Which is the strongest distinction between imagery and symbolism?", ["Imagery is always visual; symbolism uses only objects", "Imagery creates sensory experience; symbolism develops when an image participates in a pattern of meaning", "Symbolism is limited to poetry"], 1, "Symbolic force emerges through relation and recurrence, not a single sensory detail."),
      ],
    },
    {
      slug: "ambiguity-and-interpretation",
      title: "Ambiguity and interpretation",
      summary:
        "Compare defensible readings of a story whose central ambiguity concerns whether a room has been abandoned, protected or transformed by grief.",
      objective:
        "Identify syntactic, referential and motivational ambiguity, rank interpretations by explanatory power and state what evidence would favour one.",
      minutes: 36,
      blocks: [
        {
          type: "passage",
          title: "After the inventory",
          paragraphs: [
            "The inventory listed one chair, two lamps and a key that no longer fitted anything. The clerk marked the room vacant. Marta, who had signed the form without reading the final column, returned at dusk to find that someone had left the chair facing the window.",
            "There had never been a window. Or rather, there had been a window until the council bricked it up after the fire, and the brickwork remained beneath the paint, a shallow rectangle she had learned not to see. Now the chair faced it with the confidence of furniture placed by someone who knew the wall was only waiting.",
            "She sat in the chair because it seemed easier than moving it. From this position the room appeared less empty: a pale square of evening rested where glass should have been, and the key in her pocket grew warm against her thigh. She remembered the fire alarm as a kind of music, remembered her brother telling her to count the stairs, remembered arriving outside with his shoe in her hand.",
            "In the morning the clerk found the chair facing the door. Marta had gone, but she had wiped the shallow rectangle clean of dust. He added ‘window repaired’ to the inventory, though no glazier had visited and the wall remained brick beneath the paint. Whether he meant the opening or the habit of looking through it is not recorded.",
          ],
          glossary: [
            { term: "inventory", meaning: "A formal list of items in a place." },
            { term: "referential", meaning: "Concerning what a word or phrase points to." },
            { term: "glazier", meaning: "A person who installs or repairs glass." },
            { term: "ambivalent", meaning: "Holding two conflicting feelings or meanings at once." },
          ],
        },
        {
          type: "examples",
          title: "Three kinds of ambiguity",
          intro: "Name what remains open before deciding whether the openness is productive.",
          items: [
            {
              text: "Referential ambiguity: ‘someone had left the chair facing the window’ makes the window both absent and, by convention, imaginatively present. The following sentence withholds which meaning the clerk intended.",
              note: "Ambiguity arises from the collision between ordinary expectation and blocked architecture.",
            },
            {
              text: "Motivational ambiguity: Marta may sit in the chair to mourn, to test an impossible opening or simply because she does not want to move furniture. The text gives no direct access to her decision.",
              note: "Interpretations must explain behaviour without pretending to read her mind.",
            },
            {
              text: "Structural ambiguity: ‘window repaired’ may describe the cleaned outline, Marta's new way of seeing or the clerk's bureaucratic fiction. The passive construction withholds who performed and what was repaired.",
              note: "Grammar preserves institutional self-deception and personal transformation in one phrase.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Rank competing readings",
          instructions: "Choose the interpretation that accounts for the most textual evidence without claiming certainty.",
          items: [
            c(
              "What makes the first paragraph's ‘window’ ambiguous?",
              ["The clerk does not know the word window", "The wall is bricked over, yet ordinary spatial language and expectation keep the opening available", "A real window is definitely installed"],
              1,
              "The passage holds literal absence and remembered possibility together.",
            ),
            c(
              "Which detail most strongly links Marta's sitting to the fire?",
              ["The key grows warm", "She remembers her brother's shoe in her hand", "The clerk signs a form"],
              1,
              "The concrete traumatic fragment supplies a context for her orientation toward an absent opening.",
            ),
            c(
              "What does turning the chair towards the door suggest?",
              ["A possible return to practical use or departure, without fully resolving grief", "Proof that Marta rejects her brother", "A confirmed decision to live in the room"],
              0,
              "The changed direction marks action but leaves its motive open.",
            ),
            c(
              "Which reading is strongest?",
              ["The clerk is a supernatural figure", "The room is literally rebuilt overnight", "Marta's wiping and the clerk's phrase turn an absent opening into a fragile practice of attention, though the text never confirms healing"],
              2,
              "The reading integrates material trace, memory and bureaucratic language while preserving uncertainty.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Argue from ambiguity",
          instructions: "Each interpretation must name both supporting evidence and the detail that keeps it open.",
          items: [
            p(
              "Offer a reading in which the chair's movement is protective rather than mournful.",
              "Model answer: The chair may orient Marta toward the one place where light remains imaginatively available, creating a protected space for memory rather than merely marking loss; the story withholds who moved it, so the care remains unattributed.",
              "Use the window's ‘waiting’ and the evening light.",
            ),
            p(
              "Compare ‘window repaired’ with ‘wiped … clean of dust’.",
              "Model answer: Marta's action is concrete but modest, while the clerk's phrase converts it into an official completion; the contrast allows the ending to be read as recovery, bureaucratic distortion or both.",
              "Attend to the difference between physical and verbal action.",
            ),
            p(
              "Write a thesis that makes ambiguity central rather than apologising for it.",
              "Model answer: The story makes institutional records and personal memory compete to name the same space, suggesting that an opening can be repaired as a habit of attention even when its physical absence remains unchanged.",
              "Explain why two meanings must remain in play.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Ambiguity is not an absence of meaning",
          text: "A text may be indeterminate about facts while highly determinate about experience or structure. Distinguish ‘we cannot know exactly who moved the chair’ from ‘the movement has no significance’. Precision about the kind of uncertainty is a mark of advanced reading.",
        },
      ],
      quiz: [
        q(1, "What is the function of ‘Or rather’?", ["It revises an absolute statement and restores a suppressed history of the window", "It introduces an unrelated clerk", "It confirms Marta is lying"], 0, "The self-correction makes blocked memory briefly visible."),
        q(2, "Why does the key grow warm?", ["It is a bodily image that may suggest recognition or unresolved attachment, without a literal explanation.", "It proves the key opens the window.", "It measures the room temperature accurately."], 0, "Sensory impossibility encourages a psychological reading."),
        q(3, "What does the passive ‘was repaired’ conceal?", ["The agent and the nature of the repair", "The existence of brick", "Marta's signature"], 0, "The passive allows the clerk's category to float free of actual work."),
        q(4, "Which interpretation would overclaim?", ["The phrase window repaired can function as bureaucratic fiction.", "The story may explore how attention persists after trauma.", "Marta certainly believes her brother has returned."], 2, "No textual evidence establishes that belief."),
      ],
    },
    {
      slug: "reading-poetry-closely",
      title: "Reading poetry closely",
      summary:
        "Read an original poem through lineation, refrain, enjambment and a turn from public instruction to private doubt.",
      objective:
        "Explain how poetic form constructs meaning, trace a shift in voice and interpret a repeated word as it changes across stanzas.",
      minutes: 37,
      blocks: [
        {
          type: "passage",
          title: "Instructions for a crossing",
          paragraphs: [
            "Leave the map where the road divides.\nFold it once, then once again,\nuntil the river narrows to a crease\nand every village has a name\nthat fits inside your mouth.",
            "When the bell begins, do not count\nthe strokes. Count instead the feet\nthat carry you: one wet, one dry,\none certain, one rehearsed.",
            "At the far bank, someone will ask\nwhat the water took. Say nothing.\nLet the empty pocket answer,\nlet the coat describe the weight.",
            "If you return, bring no proof.\nThe bridge will have moved in the telling,\nthe road will have forgotten\nhow it learned to bear a load.",
            "Leave the map where the road divides.\nSome things are kept by losing:\nthe shape of what was carried,\nthe hand that does not close.",
          ],
          glossary: [
            { term: "enjambment", meaning: "The continuation of a sentence or phrase across a line break without a completing pause." },
            { term: "volta", meaning: "A turn or change in argument, tone or perspective within a poem." },
            { term: "refrain", meaning: "A repeated line or phrase, often with altered significance on return." },
            { term: "caesura", meaning: "A pause or break within a line of verse." },
          ],
        },
        {
          type: "examples",
          title: "Read the poem twice",
          intro: "First track the speaking situation; then examine how line breaks and sounds shape judgment.",
          items: [
            {
              text: "Stanza 1 turns a map into something small enough to ‘fit inside your mouth’. Enjambment from crease to name slows the reduction, while the final image makes geography intimate and controllable.",
              note: "Form does not merely decorate the instruction; it stages the act of compressing experience.",
            },
            {
              text: "‘one wet, one dry, / one certain, one rehearsed’ uses parallelism to replace numerical counting with divided embodiment. The neat opposition is already unstable because the walker carries all four qualities.",
              note: "A regular structure can contain contradiction rather than resolve it.",
            },
            {
              text: "The final refrain changes ‘Fold it once, then once again’ into ‘Some things are kept by losing’. Repetition preserves the opening command while transforming its meaning from control to relinquishment.",
              note: "The last line's unclosed hand revises the earlier closed mouth and the empty pocket.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Read form and voice",
          instructions: "Choose the interpretation most firmly grounded in poetic technique.",
          items: [
            c(
              "What is the relationship between stanzas 1 and 5?",
              ["The poem ends where it began with no alteration", "The refrain returns after the speaker's confidence has been qualified, creating a change within repetition", "The fifth stanza denies that crossing is possible"],
              1,
              "The repeated opening line acquires a different conceptual weight through ‘kept by losing’.",
            ),
            c(
              "How does ‘one certain, one rehearsed’ complicate the instruction to count?",
              ["It describes a dance lesson", "It provides an exact number of feet", "It substitutes internal contradiction for an objective total and makes the self a divided measure"],
              2,
              "Parallel rhythm organises uncertainty rather than eliminating it.",
            ),
            c(
              "What is the effect of ‘Let the empty pocket answer’?",
              ["It gives absence an active voice and makes loss visible without a literal explanation", "It proves the traveller lost a map only", "It introduces a new character"],
              0,
              "Personification allows objects to testify while withholding the precise nature of loss.",
            ),
            c(
              "Where is the clearest volta?",
              ["At the far bank, when movement becomes retrospective questioning", "In the word river", "At the first line break"],
              0,
              "Stanza 3 shifts from instructions for crossing to the problem of accounting for what happened.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a close reading",
          instructions: "Quote only short phrases, describe their formal position and connect them to a larger pattern.",
          items: [
            p(
              "Analyse the shift from ‘fits inside your mouth’ to ‘the hand that does not close’.",
              "Model answer: The first image compresses the world into speech and apparent control, while the final image keeps the hand open around absence; movement across the poem replaces possession with receptive loss.",
              "Use the first and last stanzas as a structural pair.",
            ),
            p(
              "Explain one effect of enjambment using a precise line boundary.",
              "Model answer: Breaking ‘crease / and every village’ separates the physical fold from its human names, briefly suspending the claim that cartographic compression can contain lived place.",
              "Identify the phrase carried across the break and its effect.",
            ),
            p(
              "Write a three-sentence interpretation that treats the poem as ambiguous about whether the crossing is literal.",
              "Model answer: The bell, wet feet and far bank establish a material crossing, but the bridge moving ‘in the telling’ makes geography dependent on retrospective narration. The poem therefore joins physical passage to the difficulty of representing experience after loss. Its final openness suggests that meaning may reside less in arrival than in altered ways of carrying what cannot be recovered.",
              "Include literal evidence before extending the interpretive claim.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Line breaks are meaningful, not decorative",
          text: "Read a poem once for the sentence and once for the line. A break can delay a key word, isolate an image or expose a pun; a stanza break can change audience or scale. Quote the boundary itself when your argument depends on enjambment or a volta.",
        },
      ],
      quiz: [
        q(1, "What does ‘the coat describe the weight’ imply?", ["Clothing carries evidence of loss that speech avoids naming", "The coat is overloaded with maps", "The traveller cannot feel anything"], 0, "The coat becomes an indirect witness to experience."),
        q(2, "Why is ‘Some things are kept by losing’ not simply paradoxical decoration?", ["It articulates the poem's central transformation of possession into memory and openness", "It denies the earlier journey", "It gives an exact measurement of loss"], 0, "The formulation synthesises the poem's movement."),
        q(3, "What happens to the command in the final stanza?", ["It returns as a possible instruction for future readers, but with loss rather than control as its context", "It is replaced by a legal warning", "It disappears entirely"], 0, "The repeated line preserves direct address while changing its implications."),
        q(4, "Which close-reading question is most productive?", ["How many stanzas are there?", "How does the final open hand revise earlier images of compression and counting?", "Is the river wet?"], 1, "The question links form, imagery and thematic development."),
      ],
    },
  ],
};
