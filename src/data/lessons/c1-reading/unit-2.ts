import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1ReadingUnit2: LessonUnit = {
  title: "Implied meaning",
  description:
    "Read beyond explicit propositions by calibrating inference, tracking stance, recognising ironic distance and interpreting the patterns of literary prose.",
  lessons: [
    {
      slug: "inference-and-between-the-lines-reading",
      title: "Inference and between-the-lines reading",
      summary:
        "Build, rank and revise inferences from a friend's evasive farewell letter without treating suggestive detail as proof of a hidden fact.",
      objective:
        "Combine textual clues to infer a relationship change, distinguish strong inference from speculation and state uncertainty precisely.",
      minutes: 34,
      blocks: [
        {
          type: "passage",
          title: "The room kept ready",
          paragraphs: [
            "When I returned the key, Mara had already replaced the blue cup on the shelf with two plain glasses. She said the cupboard was easier to clean that way, and I agreed, although neither of us had mentioned cups in any message for months. Her kitchen looked wider without the clutter we had collected on Saturday mornings.",
            "She asked whether I had found another flat near the hospital. I told her the search was ‘progressing’, a word that made her smile without quite reaching her eyes. From the hallway I could see that the old wooden chair had been moved to the end of the table, where it now served as a shelf for unopened post.",
            "At the door she said, ‘You know where the spare key is, if anything comes up.’ There was no spare key now; I had returned it ten minutes earlier. We both looked towards the hook, empty beneath the faded hook-mark, and she laughed as if I had made a joke I did not remember telling.",
            "Outside, I walked past the bakery instead of crossing towards the tram. For the first time in years I did not have a reason to buy the bread she liked. By the time I reached the corner, I could still see the two glasses through her window, aligned precisely in the middle of the shelf.",
          ],
          glossary: [
            { term: "evasive", meaning: "Avoiding a direct answer or emotional acknowledgement." },
            { term: "clutter", meaning: "A collection of objects that occupies or disorganises a space." },
            { term: "spare key", meaning: "An additional key kept for future use." },
          ],
        },
        {
          type: "rules",
          title: "An inference has a confidence level",
          items: [
            "Observation: begin with what the text directly gives—objects, actions, words and sequence.",
            "Pattern: notice repetition, contrast, incongruity or a change from an established routine.",
            "Inference: connect the pattern to a plausible unstated meaning; ask what the clue is doing in context.",
            "Alternative: generate another explanation that fits at least some of the same evidence.",
            "Calibration: use likely, suggests or may when the evidence supports an interpretation without establishing a fact.",
          ],
        },
        {
          type: "exercise",
          title: "Read between the lines",
          instructions: "Choose the inference best supported by the whole passage.",
          items: [
            c(
              "What do the two plain glasses most likely signify?",
              ["Mara has stopped preserving the shared routines of the relationship", "Mara cannot afford coloured cups", "The narrator dislikes all glassware"],
              0,
              "The replacement follows the end of shared Saturday routines and accompanies a deliberately cleared kitchen, suggesting emotional as well as physical removal.",
            ),
            c(
              "Why is ‘progressing’ placed in quotation marks?",
              ["It is a technical property term", "It marks a polite evasion that conceals how little the flat search has advanced", "It is Mara's exact description of the flat"],
              1,
              "The generic word, Mara's restrained smile and the narrator's unchanged circumstances suggest deliberate vagueness.",
            ),
            c(
              "What is the effect of referring to a spare key that no longer exists?",
              ["It creates an incongruity through which both characters acknowledge the changed relationship while avoiding direct speech", "It proves Mara has lost her memory", "It shows the narrator still lives in the flat"],
              0,
              "The empty hook and nervous laughter make the obsolete invitation a shared recognition of the ending.",
            ),
            c(
              "What does bypassing the bakery suggest?",
              ["The narrator's habits were organised around Mara and now require reconsideration", "The bakery has permanently closed", "The narrator has suddenly stopped liking bread"],
              0,
              "The narrator explicitly connects buying the bread with no longer having a reason to maintain that routine.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Calibrate three inferences",
          instructions: "For each task, name the clue and add one alternative or limitation.",
          items: [
            p(
              "Infer Mara's attitude to the narrator's departure using two details.",
              "Model answer: The removed cup and repositioned chair suggest that Mara has begun dismantling shared space, although the cleared kitchen might also reflect a practical wish for simplicity.",
              "Use more than one clue and avoid claiming direct access to her thoughts.",
            ),
            p(
              "What is implied by ‘a joke I did not remember telling’?",
              "Model answer: The narrator is estranged from the shared humour that once made communication easy; the phrase may also suggest that Mara is covering her own discomfort.",
              "Distinguish loss of familiarity from certainty about motive.",
            ),
            p(
              "Write a two-sentence interpretation of the final image and justify its confidence level.",
              "Model answer: The glasses aligned in the centre suggest an attempt to impose order on a space emptied of shared history. The image strongly supports emotional distance, but it does not establish whether Mara feels relief, grief or both.",
              "Connect form to meaning, then acknowledge interpretive openness.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Do not turn implication into omniscience",
          text: "Literary clues justify interpretations of behaviour, not privileged access to a character's private thoughts. Prefer ‘the detail suggests’ to ‘this proves she felt’. Strong inference is specific about evidence and honest about the remaining space for another reading.",
        },
      ],
      quiz: [
        q(1, "Which detail most directly establishes that shared routines have ended?", ["Neither of them had mentioned cups for months", "The narrator uses the tram", "The kitchen is wider"], 0, "The absence of conversation about a recurring ritual supports a change in the relationship."),
        q(2, "What does the narrator's use of ‘progressing’ most likely communicate?", ["A confirmed moving date", "A deliberately non-committal account of the search", "A complaint about hospital transport"], 1, "The quotation marks and Mara's response signal that the word avoids substantive information."),
        q(3, "Why does the passage mention the faded mark beneath the hook?", ["To date the wall decoration", "To emphasise that the key's former place remains visible after the routine is gone", "To prove the landlord is careless"], 1, "The trace of an absent object reinforces continuity disrupted by departure."),
        q(4, "Which inference is weakest?", ["The narrator's walking route has changed.", "The narrator no longer buys Mara's preferred bread.", "Mara wants the narrator to move to another country."], 2, "The international move has no supporting evidence in the passage."),
      ],
    },
    {
      slug: "tone-modality-and-stance",
      title: "Tone, modality and stance",
      summary:
        "Track an agricultural commentator's movement from scepticism to qualified endorsement by reading modal verbs, evaluative lexis and concession.",
      objective:
        "Identify degrees of commitment and changes of stance, then explain how apparently cautious wording can still direct a reader's judgment.",
      minutes: 36,
      blocks: [
        {
          type: "passage",
          title: "Precision without promises: a fictional commentary",
          paragraphs: [
            "The new sensor network is being sold as a technological rescue for farming. Its promoters speak of water ‘optimised to the last drop’, as if uncertainty could be engineered out of agriculture. I remain unconvinced that more measurement necessarily produces wiser decisions. A field can be densely instrumented and still be managed by someone who mistakes a costly input for a reliable cure.",
            "That scepticism should not become an excuse for dismissing the evidence. In the twelve cooperatives that piloted the system, water use fell by roughly eleven per cent, while yields varied too little to attribute the change confidently to the technology. The finding appears promising, but it does not establish that sensors caused the reduction: participating farms had also received agronomic advice and faced unusually dry weather.",
            "We should therefore resist both promotional certainty and reflexive rejection. The system may be useful where farmers can interpret its readings against soil conditions, local forecasts and crop history. It is unlikely to compensate for insecure land tenure or a credit system that makes long-term experimentation unaffordable. Nor should a percentage reduction in water use be treated as an environmental triumph without asking which crops, yields and waterways were affected.",
            "My position is thus narrower than the marketing and broader than a blanket rejection. Public subsidy should support supervised trials and open comparison of results, not unconditional purchase. Precision agriculture deserves investigation as a possible instrument of conservation, provided that farmers retain interpretive authority and that claims remain answerable to outcomes beyond the dashboard.",
          ],
          glossary: [
            { term: "instrumented", meaning: "Equipped with devices that collect measurements." },
            { term: "tenure", meaning: "The terms on which land is held or controlled." },
            { term: "answerable", meaning: "Required to explain or justify results." },
          ],
        },
        {
          type: "table",
          title: "A stance scale in the commentary",
          caption: "Commitment is shaped by grammar, evaluation and the relationship between sentences.",
          columns: ["Feature", "Example", "Effect"],
          rows: [
            ["Emphatic rejection", "I remain unconvinced", "Creates a clear initial critical stance"],
            ["Cautious causality", "does not establish that sensors caused", "Separates observed association from explanation"],
            ["Epistemic modality", "may be useful; unlikely to compensate", "Makes usefulness conditional on context"],
            ["Normative modality", "should support; should not", "Moves from description to recommendation"],
            ["Concessive framing", "That scepticism should not become an excuse", "Rejects the excess of the writer's own position"],
            ["Defining metaphor", "outcomes beyond the dashboard", "Limits what counts as success"],
          ],
        },
        {
          type: "exercise",
          title: "Locate commitment",
          instructions: "Choose the option that best explains the writer's stance.",
          items: [
            c(
              "What is the function of ‘as if uncertainty could be engineered out of agriculture’?",
              ["To endorse the marketers' scientific claims", "To criticise promotional overconfidence through an ironic hypothetical", "To explain how sensors are manufactured"],
              1,
              "The phrase exposes the unrealistic promise without reporting it as the writer's own belief.",
            ),
            c(
              "Why does the writer use ‘does not establish’ rather than ‘disproves’?",
              ["To reject the pilot entirely", "To preserve the evidence while denying that it proves causation", "To express ignorance of the reported reduction"],
              1,
              "The distinction acknowledges a promising result but identifies the limits of its design.",
            ),
            c(
              "How does ‘should’ function in the final paragraph?",
              ["It predicts what every government will do", "It recommends a policy while leaving room for justification", "It reports an existing legal requirement"],
              1,
              "The normative modal expresses the author's qualified position on subsidy.",
            ),
            c(
              "Which phrase best captures the final stance?",
              ["Unconditional technological enthusiasm", "Total opposition to measurement", "Conditional support for accountable experimentation"],
              2,
              "The conclusion endorses investigation but attaches conditions concerning authority, evidence and outcomes.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a stance map",
          instructions: "Trace the movement of the argument, then revise one sentence to change its degree of commitment.",
          items: [
            p(
              "Summarise the stance in three stages.",
              "Model answer: The writer begins sceptical of marketing certainty, acknowledges promising but confounded evidence, and ends with conditional support for supervised trials rather than universal adoption.",
              "Use a change-of-direction word between stages.",
            ),
            p(
              "Explain how ‘may’ and ‘unlikely’ differ in strength and function.",
              "Model answer: May marks genuine contextual possibility; unlikely assigns a lower probability while still allowing exceptions. Both resist the absolute certainty of the promotional language.",
              "Compare possibility with probability rather than treating both as vague.",
            ),
            p(
              "Revise ‘Precision farming saves water’ so that it matches the passage's evidence and stance.",
              "Model answer: Precision farming may reduce water use where readings can be interpreted alongside local knowledge, but the pilot evidence does not isolate the technology's effect from advice and weather.",
              "Add the condition and the causal limitation.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Hedging can still persuade",
          text: "Modals do not make a stance neutral. A chain of may, provided and should can construct a careful route from evidence to policy. Read each qualifier together with evaluative words such as promising or triumph to see where the writer wants the reader to place confidence.",
        },
      ],
      quiz: [
        q(1, "Which sentence expresses the weakest commitment to a causal explanation?", ["Sensors caused the reduction.", "Sensors prove that farmers waste water.", "The finding is consistent with a sensor effect, although other factors changed."], 2, "The wording acknowledges compatibility with the explanation without claiming isolation of cause."),
        q(2, "What is the main difference between epistemic and deontic modality here?", ["Epistemic modality judges likelihood; deontic modality directs what ought to be done.", "Epistemic modality reports data; deontic modality reports weather.", "They are interchangeable stylistic decorations."], 0, "May and unlikely concern probability; should expresses recommendation or obligation."),
        q(3, "Why is ‘beyond the dashboard’ rhetorically effective?", ["It implies the dashboard is physically small.", "It challenges a narrow technological definition of success without specifying only one alternative.", "It shows that all data are false."], 1, "The metaphor broadens accountability while preserving a concise critical stance."),
        q(4, "Which feature most clearly signals a concession?", ["to the last drop", "That scepticism should not become an excuse", "public subsidy"], 1, "The sentence accepts part of the opposing position before limiting its use."),
      ],
    },
    {
      slug: "irony-and-rhetorical-distance",
      title: "Irony and rhetorical distance",
      summary:
        "Read an overenthusiastic municipal announcement whose official optimism clashes with the policy it describes.",
      objective:
        "Distinguish the speaker's stated position from the implied criticism, identify ironic gaps and explain how rhetorical distance is created.",
      minutes: 35,
      blocks: [
        {
          type: "passage",
          title: "A brighter view of the closed market",
          paragraphs: [
            "The Department of Civic Visibility welcomed the successful transformation of East Market today, after contractors boarded its remaining open arches. ‘Residents will no longer be troubled by unsightly displays of informal trade,’ said Director Bell, describing the measure as a bold commitment to a cleaner and more legible streetscape.",
            "The department emphasised that the new hoardings were produced from fully recyclable material. Their printed illustrations show fruit, bread and smiling traders beneath the slogan A Market for Everyone. Accessibility entrances will remain clearly marked, although the marked doors have been sealed since Monday as a precaution against unauthorised congregation.",
            "Officials rejected suggestions that covering the market concealed its closure. The market remains open in spirit, they explained, and visitors may consult the digital directory from any public pavement. A helpline is available for residents who require assistance understanding the directory, provided that their query does not concern the former stallholders.",
            "In response to concerns about livelihoods, the department announced that affected traders could apply for one of forty places on a future enterprise course. The course will prepare participants for opportunities in the modern economy, including digital merchandising and the respectful presentation of public space. Director Bell concluded that the project demonstrated what could be achieved when a community stopped dwelling on the past and looked towards a brighter view.",
          ],
          glossary: [
            { term: "hoarding", meaning: "A large temporary board or screen around a site." },
            { term: "legible", meaning: "Clear and easy to understand or read." },
            { term: "congregation", meaning: "A gathering of people, often in a public place." },
          ],
        },
        {
          type: "rules",
          title: "Irony depends on a gap",
          items: [
            "Literal proposition: record what the speaker officially says, without correcting it yet.",
            "Contextual evidence: compare the statement with actions, exclusions, numbers or alternatives in the passage.",
            "Evaluative mismatch: identify where the official vocabulary—cleaner, accessible, everyone—conflicts with consequences.",
            "Audience alignment: infer the viewpoint the passage invites its reader to occupy.",
            "Distance: explain how exaggerated praise, euphemism or implausible justification separates the narrator from the official position.",
          ],
        },
        {
          type: "exercise",
          title: "Read against the announcement",
          instructions: "Choose the interpretation that accounts for the ironic structure.",
          items: [
            c(
              "Why is ‘A Market for Everyone’ ironic?",
              ["The market has been closed and access is restricted, contradicting the inclusive slogan", "The slogan is printed in a small font", "Everyone is required to shop online"],
              0,
              "The universal claim is undercut by sealed entrances and displaced traders.",
            ),
            c(
              "What does the recycling claim primarily accomplish?",
              ["It proves the project is environmentally responsible in every respect", "It offers a trivial virtue while deflecting from the closure", "It explains why traders were removed"],
              1,
              "The focus on hoardings rather than people's livelihoods creates a bathetic substitution of environmental detail for social consequence.",
            ),
            c(
              "What is the effect of ‘open in spirit’?",
              ["It reports a measurable legal status", "It uses a euphemism to present closure as continuity", "It confirms that stallholders may return"],
              1,
              "The phrase acknowledges physical closure while preserving the official language of access.",
            ),
            c(
              "Who is the implied target of the final criticism about dwelling on the past?",
              ["Former stallholders whose losses are being dismissed", "Contractors who installed the boards", "Residents who support the directory"],
              0,
              "The exhortation recasts affected people as psychologically resistant instead of materially harmed.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Construct the ironic reading",
          instructions: "Base every answer on a specific contradiction between official language and described practice.",
          items: [
            p(
              "Identify two euphemisms and translate each into plainer language.",
              "Model answer: ‘Transformation’ means closure; ‘informal trade’ means street selling. The softer terms recast economic activity as a visual problem.",
              "Keep the contrast between official and plain wording explicit.",
            ),
            p(
              "Explain how the number forty contributes to the irony.",
              "Model answer: A small, future training offer is presented as a remedy for an unspecified larger group whose current livelihoods have already been removed.",
              "Consider timing, scale and whether the offer replaces what was lost.",
            ),
            p(
              "Write a two-sentence interpretation of the passage's rhetoric without using the word satire.",
              "Model answer: Exaggerated official optimism and precise bureaucratic constraints create a gap between the department's self-image and the exclusion it produces. The reader is invited to see ‘progress’ language as a mechanism for avoiding responsibility.",
              "Name a technique and its social or political effect.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Do not mistake tone for topic",
          text: "A satirical passage may discuss cleanliness while evaluating power, or discuss training while evaluating displacement. Track the mismatch between what is praised and what happens. The ironist need not state a direct alternative; the distance between the two often carries the criticism.",
        },
      ],
      quiz: [
        q(1, "What is the passage's implied attitude to the department?", ["It regards the closure as a justified improvement.", "It views official optimism as evasive and exclusionary.", "It supports sealing every public market."], 1, "The repeated gap between inclusive claims and restrictive actions produces implicit criticism."),
        q(2, "Why are accessibility entrances mentioned?", ["To contrast formal accessibility language with sealed access", "To advertise the contractors", "To show that the market is easy to enter"], 0, "The qualifier about sealing undermines the apparent commitment to access."),
        q(3, "Which phrase most clearly creates rhetorical distance?", ["after contractors boarded", "as a precaution", "a bold commitment to a cleaner and more legible streetscape"], 2, "Grand official language is placed against a closure, encouraging the reader to question the department's self-praise."),
        q(4, "What does the helpline exclusion reveal?", ["Only technical queries are allowed.", "The official process is designed to avoid accountability to former stallholders.", "The directory cannot be used on foot."], 1, "The restriction separates administrative help from those directly affected by the policy."),
      ],
    },
    {
      slug: "reading-literary-prose",
      title: "Reading literary prose",
      summary:
        "Interpret an original story in which a narrator's account of waiting is complicated by domestic detail, repetition and an unresolved final action.",
      objective:
        "Analyse narrative perspective, imagery and pattern to build a defensible interpretation while acknowledging ambiguity.",
      minutes: 34,
      blocks: [
        {
          type: "passage",
          title: "The blue kettle",
          paragraphs: [
            "My mother believed that a house could tell you who was expected. Before my father came home, she polished the taps; before visitors, she moved the vase from the mantel to the table. On the evening the letter arrived, she cleaned nothing. Instead she filled the blue kettle and left it on the cold ring, as though heat might arrive independently of fire.",
            "I was fourteen and understood only that letters changed the weather indoors. My father read his at the window while the garden emptied of colour. When he folded it along an existing crease, I saw that he had expected something, though not this. My mother asked whether he wanted tea. He said he would tell her when he was ready, and readiness became the name of everything we were waiting for.",
            "After supper I carried the kettle back to its place. A little water remained, and beneath it the ring had left a pale circle on the enamel. I remember thinking that the mark was cleaner than the rest of the stove. This seems an odd thing to recall, but I have never been able to remember what my father said next without remembering that circle too.",
            "Years later, when someone described my childhood as happy, I did not correct them. I had no single event to offer against the word. I had only a kettle kept warm without fire, a father at a window and my own careful attention to a stain. Perhaps happiness had been present in the house; perhaps I had simply learned to wait for someone to name it.",
          ],
          glossary: [
            { term: "mantel", meaning: "The shelf above a fireplace." },
            { term: "enamel", meaning: "A hard, usually glossy surface on metal or other material." },
            { term: "recall", meaning: "Remember or bring something back to mind." },
          ],
        },
        {
          type: "examples",
          title: "From detail to interpretation",
          intro: "A literary reading moves through observation, pattern, possible meaning and counter-reading.",
          items: [
            {
              text: "Observation: the kettle is filled but placed on a cold ring. Pattern: preparation without heat recurs in the mother's stillness and the father's deferred readiness. Interpretation: the household performs the forms of care while unable to act on the unknown news.",
              note: "The interpretation is earned by a relationship between objects and actions, not by assigning a fixed symbolic meaning to the kettle.",
            },
            {
              text: "Observation: the narrator foregrounds an unimportant stain. Interpretation: adult memory selects the manageable mark because the content of the father's news remains unavailable or too painful to retrieve.",
              note: "The word seems acknowledges that the narrator is revising an earlier understanding.",
            },
            {
              text: "Counter-reading: the kettle may also represent continuity and maternal provision rather than paralysis alone. Its warmth, even unused, preserves the possibility that care continues within uncertainty.",
              note: "A plausible alternative prevents the symbol from becoming a mechanical code.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Interpret the prose",
          instructions: "Choose the reading most securely grounded in the passage.",
          items: [
            c(
              "What does the mother's cleaning routine establish?",
              ["She uses domestic order to manage anticipation and communicate who is welcome", "She is unaware of the letter", "She dislikes all visitors"],
              0,
              "The opening links household preparation to expectation before the letter disrupts the pattern.",
            ),
            c(
              "Why is the kettle on a cold ring significant?",
              ["It proves the stove is broken", "It confuses preparation with action and embodies suspended energy", "It shows the father dislikes tea"],
              1,
              "The object contains water but produces no heat, paralleling the household's inability to respond to unknown news.",
            ),
            c(
              "How does the final paragraph complicate the story?",
              ["It proves the childhood was entirely unhappy", "It confirms that the father lost his job", "It shifts from a remembered scene to the adult narrator's uncertainty about how the past should be classified"],
              2,
              "The retrospective narrator questions a total label such as happy without supplying a definitive alternative.",
            ),
            c(
              "Which interpretation of the pale circle is most defensible?",
              ["It may stand for the mind's preference for a stable detail when the central memory is unresolved", "It symbolises the father's exact age", "It proves the mother was neglectful"],
              0,
              "The narrator explicitly connects inability to remember the father's words with attention to the mark.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a literary interpretation",
          instructions: "Use claim–evidence–qualification in each response. Avoid explaining the letter's contents, which the passage withholds.",
          items: [
            p(
              "Write an interpretive claim about waiting using one domestic detail.",
              "Model answer: The blue kettle suggests that waiting in this household has become a performed ritual: care is visible in preparation, but action remains suspended on the cold ring.",
              "Name the detail and the general pattern it supports.",
            ),
            p(
              "Explain how the narrator's age of fourteen affects our understanding of the scene.",
              "Model answer: The younger narrator notices behaviour without grasping its cause, while the adult voice retrospectively recognises uncertainty; this gap makes domestic signs more legible to the reader than to the child.",
              "Distinguish past experience from present interpretation.",
            ),
            p(
              "Defend or qualify the claim that the story is about silence, using two pieces of evidence.",
              "Model answer: The father's ‘when he was ready’ and the withheld content of the letter support a reading centred on withheld speech; however, the mother's question and the narrator's eventual account show that care and narration continue around the silence.",
              "Include evidence that complicates as well as supports the claim.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Let patterns accumulate",
          text: "One image rarely proves an interpretation. Look for recurrence, variation and structural position: what appears at the beginning, what changes in the middle and what is reconsidered at the end. Strong literary analysis explains how several details work together.",
        },
      ],
      quiz: [
        q(1, "What does the opening analogy between the house and expectation imply?", ["Domestic objects carry social meaning", "Houses can literally predict visitors", "The mother never cleans"], 0, "The mother's arrangements encode anticipation before visitors arrive."),
        q(2, "Why is the content of the letter withheld?", ["To keep the reader focused on atmosphere, memory and the family's response rather than a single external event", "Because letters contain no information", "To prove the father cannot read"], 0, "Narrative omission sustains interpretive uncertainty."),
        q(3, "What is the function of ‘This seems an odd thing to recall’?", ["It reports a factual judgment about stains", "It marks the adult narrator's self-questioning about memory's selection", "It introduces a new speaker"], 1, "The sentence foregrounds the gap between what matters and what memory retains."),
        q(4, "Which reading best preserves the ending's ambiguity?", ["The narrator rejects happiness outright.", "The narrator cannot reduce the past to a single label and may have learned to postpone naming it.", "The mother reveals the letter's contents."], 1, "The ending holds happiness and delayed recognition together without deciding between them."),
      ],
    },
  ],
};
