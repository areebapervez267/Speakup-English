import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2ReadingUnit3: LessonUnit = {
  title: "Intertextuality and context",
  description:
    "Trace allusion, echo and revision across invented traditions, read texts against historical conditions, compare translations and construct relationships between genres and periods.",
  lessons: [
    {
      slug: "allusion-and-reference",
      title: "Allusion and reference",
      summary:
        "Interpret a lighthouse keeper's letter whose fictional myth and poem transform a technical argument about closure into a dispute over truthful attention.",
      objective:
        "Identify the source, function and transformation of allusions, distinguishing shared reference from irony and structural parody.",
      minutes: 36,
      blocks: [
        {
          type: "passage",
          title: "The light that admitted the dark",
          paragraphs: [
            "In the fictional city of Orra, every child learns the story of Taren, who held back the sea with a cracked bowl until the harbour walls were built. The bowl survives in the civic museum, although historians now doubt whether it ever contained water. Children also learn Mara Vell's poem The Unmoored Lamp, whose final lines declare: ‘A light is honest only when it admits the dark.’",
            "When the harbour authority announced that the North Light would be automated, keeper Sera Ilen wrote a letter that was later read aloud in the council chamber. ‘You praise the new lamp for never sleeping,’ she began, ‘but Taren's bowl was honoured not because it was whole. It was honoured because the crack was allowed to show. If we replace the keeper with a mechanism that cannot be questioned, we do not perfect the light; we hide the crack in our confidence.’",
            "She continued by reversing Vell's poem. ‘The engineers say an honest lamp must admit no darkness. I say otherwise. A light is dishonest when it claims that nothing lies beyond its beam.’ Sera then listed three unanswered questions: who would inspect the lens after a storm, who would notice that the fog signal had failed, and who would answer a child asking why the old keeper's room was locked. The authority called these sentimental objections to efficiency.",
            "The council's final response described the lamp as ‘a modern Taren, holding back uncertainty without human frailty’. Sera did not reply. Her silence entered the local papers as agreement, though readers familiar with Vell's poem recognised a darker possibility: in a tradition where light tells the truth by acknowledging darkness, a lamp that admits none may be the most deceptive structure on the coast.",
          ],
          glossary: [
            { term: "allusion", meaning: "An indirect reference to another text, story, image or cultural object." },
            { term: "fog signal", meaning: "A sound or radio warning used to guide vessels in poor visibility." },
            { term: "frailty", meaning: "Physical or moral weakness." },
            { term: "parody", meaning: "An imitation that exaggerates or transforms a style for critical effect." },
          ],
        },
        {
          type: "table",
          title: "Trace the references",
          caption: "An allusion becomes argumentative when a source's values are transferred, reversed or contested.",
          columns: ["Reference", "Original meaning in Orra", "Sera's use", "Authority's use", "Transformation"],
          rows: [
            ["Taren's cracked bowl", "Honoured protection despite visible damage", "Visible vulnerability makes care accountable", "Automation is perfect protection", "Crack becomes critique rather than flaw"],
            ["The Unmoored Lamp", "Honest light acknowledges darkness", "Technical confidence must admit limits", "Not directly cited", "Vell is reversed"],
            ["Modern Taren", "No authority source; council coinage", "Not used by Sera", "Automation replaces human frailty", "Mythic prestige legitimises technology"],
            ["Silence as agreement", "No established tradition", "Sera withholds reply", "Council interprets consent", "Ambiguous silence is ideologically claimed"],
          ],
        },
        {
          type: "exercise",
          title: "Read the allusions",
          instructions: "Choose the answer that explains the reference's argumentative work.",
          items: [
            c(
              "Why does Sera emphasise the crack in Taren's bowl?",
              ["Because the tradition honours protection whose limits remain visible rather than perfection", "Because historians proved the bowl was broken", "Because cracks improve navigation"],
              0,
              "She revalues visible vulnerability as a condition of accountable care.",
            ),
            c(
              "What is the effect of reversing Vell's declaration?",
              ["It shows Sera dislikes all poetry", "It converts a poem about truthful light into a critique of technological certainty", "It proves Vell supported automation"],
              1,
              "The reversal retains the poem's structure while changing its evaluative direction.",
            ),
            c(
              "How does the council's phrase ‘a modern Taren’ differ from Sera's use?", ["It borrows mythic authority to erase the crack and present automation as superior protection", "It accurately reports Sera's view", "It refers to the price of the lamp"], 0, "The council selectively adapts the myth to legitimise its preferred outcome."),
            c(
              "Why is Sera's silence significant?", ["It contains a direct quotation from Vell", "It proves she accepted the decision", "It can be read as exhaustion, refusal or strategic ambiguity, while the council claims it as consent"], 2, "Intertextual awareness reveals that silence is an unstable sign claimed by different readers."),
          ],
        },
        {
          type: "practice",
          title: "Interpret intertextual pressure",
          instructions: "Explain both what the allusion borrows and what the new context changes.",
          items: [
            p(
              "Write a two-sentence account of the Taren allusion's transformation.",
              "Model answer: Sera borrows Orra's association of Taren with protective public service, but she revalues the crack as evidence that protection requires visible limits and human responsibility. The council then detaches the name from the crack and uses it to celebrate supposedly infallible technology.",
              "Track who controls the reinterpretation.",
            ),
            p(
              "Compare Sera's reversal of Vell with the council's adaptation of Taren.",
              "Model answer: Both transform inherited material, but Sera reverses a claim to expose its consequences while the council appropriates prestige to naturalise its policy. Intertextuality can therefore serve critique or legitimation depending on who controls the relation.",
              "Do not assume allusion is always subversive.",
            ),
            p(
              "Write an interpretive thesis that connects the final reading of darkness to institutional voice.",
              "Model answer: The letter stages a struggle over who may define the meaning of inherited stories: Sera reads darkness as the necessary limit of honest knowledge, whereas the council converts silence and mythic language into evidence of consent and technological authority.",
              "Connect form of reference to distribution of interpretive power.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Allusion is a relationship, not a decoration",
          text: "Ask what source material is invoked, which features are retained and what new context makes them mean differently. A reference may confirm, reverse, satirise or commodify an earlier story. Your reading should explain the work the relationship performs.",
        },
      ],
      quiz: [
        q(1, "What does the museum's historical doubt about the bowl add?", ["It separates a story's cultural force from its factual verification", "It proves Taren never existed", "It makes the allusion meaningless"], 0, "The story remains intertextually powerful even when its factual basis is uncertain."),
        q(2, "Why does Vell's poem matter to the ending?", ["Its equation of honesty with admitting darkness supplies a standard by which the new lamp appears deceptive", "It describes the lamp's engineering", "It is Sera's private diary"], 0, "The poem provides an inherited evaluative framework for reading institutional certainty."),
        q(3, "What does ‘silence entered the local papers as agreement’ show?", ["Interpretation can convert an ambiguous absence into institutional consent", "Sera published a second letter", "The newspapers rejected the council"], 0, "The phrase exposes the political work of assigning meaning to silence."),
        q(4, "Which is the strongest definition of intertextual analysis?", ["Listing every proper name", "Explaining how one text's meanings are produced through relation to another", "Assuming all references are accidental"], 1, "Intertextuality concerns active relation and transformation."),
      ],
    },
    {
      slug: "texts-in-conversation",
      title: "Texts in conversation",
      summary:
        "Read three invented texts on improvement that echo, challenge and materially revise one another across two centuries.",
      objective:
        "Distinguish quotation, thematic echo, structural revision and polemical inversion, then explain what is gained by reading the texts relationally.",
      minutes: 37,
      blocks: [
        {
          type: "passage",
          title: "Improvement, in three documents",
          paragraphs: [
            "Text A — Landowner's essay, 1811: ‘Improvement begins when waste is made useful. The common meadow yields rough grass and disorder; enclosed, divided and assigned, it will yield grain, rent and a visible future. Those who resist enclosure mistake habit for liberty. A people that prefers the untidy path to the measured road remains poor by choice.’",
            "Text B — Workers' broadside, 1926: ‘They told us improvement began when waste was made useful, and then they called our commons waste. They measured the field but not the hunger of those who gathered there. The road they built was straight because it carried the crop away. We prefer the untidy path: at least it still leads somewhere we choose.’",
            "Text C — Digital archive description, 2025: ‘The Meadowlands Collection preserves maps, tenancy records and oral histories of enclosure. Rather than treating improvement as a neutral synonym for progress, the archive allows conflicting descriptions to remain visible. Its interface refuses a single chronology: a landowner's survey may sit beside a worker's remembered path without being ranked as more reliable data.’",
            "Text C never quotes Text B, but its ‘untidy path’ and ‘prefers’ echo the broadside's closing syntax. Text B, in turn, repeats Text A's key terms while reversing their evaluation. The conversation is therefore not a simple movement from false belief to enlightened scholarship; each text appropriates the language of choice, liberty and usefulness for a different account of who may define improvement.",
          ],
          glossary: [
            { term: "broadside", meaning: "A polemical public sheet or publication." },
            { term: "enclosure", meaning: "The legal conversion of common land into privately controlled property." },
            { term: "chronology", meaning: "An ordered arrangement of events or materials in time." },
            { term: "appropriation", meaning: "The taking up and redeployment of language, forms or cultural material." },
          ],
        },
        {
          type: "table",
          title: "Map the conversation",
          caption: "Relations can be intentional, inferred or structural; identify the evidence for each.",
          columns: ["Relation", "Texts", "Shared feature", "Change of meaning"],
          rows: [
            ["Direct thematic echo", "A and B", "Waste made useful", "Landowner's category becomes workers' accusation"],
            ["Syntactic inversion", "A and B", "Prefers … to …", "Choice is relocated from productivity to collective access"],
            ["Imagery revision", "A and B", "Untidy path versus measured road", "Disorder becomes agency; order becomes extraction"],
            ["Probable allusion", "B and C", "Untidy path; prefers", "A polemical phrase becomes archival method"],
            ["Structural challenge", "A and C", "Single authoritative order", "C refuses to rank incompatible perspectives"],
          ],
        },
        {
          type: "exercise",
          title: "Trace textual relations",
          instructions: "Choose the relation best supported by wording and structure.",
          items: [
            c(
              "What does Text B do with Text A's phrase ‘waste was made useful’?",
              ["Quotes it neutrally", "Repeats it as an accusation that turns the landowner's category against enclosure", "Rejects all use of the word useful"],
              1,
              "The shared wording exposes whose classification of value is being contested.",
            ),
            c(
              "Why is the straight road significant?",
              ["In A it signifies rational progress; in B its straightness serves extraction because it carries the crop away", "In both texts it is merely scenic", "It proves B was written by A"],
              0,
              "The image persists while its social function and evaluation reverse."),
            c(
              "What is the strongest evidence that C alludes to B?",
              ["The unusual combination ‘untidy path’ with ‘prefers’ in the closing sentence", "Both mention land", "Both use punctuation"], 0, "The lexical and syntactic combination supports a probable intentional echo."),
            c(
              "How does C complicate the A–B opposition?", ["It refuses to declare one voice authoritative and makes conflict part of the archive's form", "It supports A without qualification", "It erases B"], 0, "The non-linear interface institutionalises plurality rather than resolving it."),
          ],
        },
        {
          type: "practice",
          title: "Read the dialogue",
          instructions: "Your interpretation should account for what changes across the conversation and what remains unresolved.",
          items: [
            p(
              "Compare the two uses of liberty in A and B.",
              "Model answer: A treats resistance to enclosure as a disordered attachment to habit, whereas B locates liberty in access to a path chosen collectively; the term persists, but its bearer and conditions shift.",
              "Name who is imagined as free in each text.",
            ),
            p(
              "Explain how C translates a polemical opposition into an archival practice.",
              "Model answer: C retains the conflict over usefulness and order but refuses to encode it as a simple progression from error to truth; juxtaposition without hierarchy lets the historical dispute remain available to users.",
              "Connect textual form to epistemic practice.",
            ),
            p(
              "Write a comparative thesis about the recurring road or path.",
              "Model answer: Across the three texts, the path becomes a contested figure for agency: A's measured road embodies productive order, B's untidy route preserves collective choice, and C's interface prevents either figure from closing the archive's account of improvement.",
              "Use one image to connect form, politics and historiography.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Do not assume a straight line of progress",
          text: "Later texts may appropriate, fragment or strategically forget earlier ones. Read both for explicit quotation and for structural resemblance. A conversation among texts can continue a dispute, change its vocabulary or make the dispute itself the subject.",
        },
      ],
      quiz: [
        q(1, "Why does B call the common meadow ‘our commons’?", ["To assert collective relation and challenge the landowner's category of waste", "To prove the landowner's survey was inaccurate", "To reject agriculture"], 0, "Possessive language reallocates belonging and value."),
        q(2, "What does C's refusal of a single chronology achieve?", ["It rejects all historical dates", "It prevents institutional sequencing from silently ranking competing accounts", "It makes sources impossible to compare"], 1, "The design preserves temporal context while resisting a single authoritative narrative."),
        q(3, "Which relationship is inferred rather than explicitly documented?", ["B repeats phrases from A", "C preserves oral histories", "C's echo of B"], 2, "The probable allusion requires interpretation of wording, not a stated declaration."),
        q(4, "What is the central shared problem in all three texts?", ["Who has authority to define improvement and legitimate access to land", "How to build a road", "Whether archives should use paper"], 0, "Each text positions itself within a struggle over value and authority."),
      ],
    },
    {
      slug: "historical-and-cultural-framing",
      title: "Historical and cultural framing",
      summary:
        "Read a fictional 1936 radio debate to distinguish period assumptions, strategic performances of authority and the later archive's own framing.",
      objective:
        "Analyse how medium, institution and historical vocabulary organise a debate while avoiding both presentism and uncritical historical sympathy.",
      minutes: 35,
      blocks: [
        {
          type: "passage",
          title: "The voice of the nation: a fictional broadcast, 1936",
          paragraphs: [
            "Announcer: ‘Tonight, listeners in the capital and the provinces join a conversation on the future of regional broadcasting. In the studio are Dr. Halden of the National Institute, who will speak first, and Mrs. Arlen of the Rural Teachers' Association, who will reply. The microphone will be turned so that each voice may be heard in turn.’",
            "Dr. Halden: ‘A common language is not an imposition; it is a gift of national coherence. Local dialects preserve colour, certainly, but colour must not become confusion. We broadcast to citizens, not to villages. A child who hears standard speech in the evening will enter the modern economy without leaving the community she loves.’",
            "Mrs. Arlen: ‘You call our speech colour because you hear it from a chair in the capital. We call it information. Yesterday a storm warning read in the capital voice reached the hill farms after the storm. I do not ask for a separate nation. I ask you to stop mistaking distance from your own room for distance from the nation.’",
            "Archivist's note, 1998: The surviving recording ends before the announcer closes the discussion. A later programme guide praises Mrs. Arlen's ‘pleasantly provincial humour’ and gives Dr. Halden's address twice the space. The term humour does not appear in the transcript. Read historically, the broadcast reveals a struggle over whose voice could represent expertise; read as an archive, it also reveals how later cataloguing could domesticate the challenge Arlen made.",
          ],
          glossary: [
            { term: "dialect", meaning: "A regional or social variety of a language." },
            { term: "presentism", meaning: "Judging the past solely by present values without historical understanding." },
            { term: "provincial", meaning: "Relating to regions outside the centre, sometimes with a dismissive connotation." },
            { term: "cataloguing", meaning: "The organisation and description of archival material." },
          ],
        },
        {
          type: "rules",
          title: "Frame the text before judging its claims",
          items: [
            "Medium: live radio creates imagined simultaneity and gives the announcer control over turn-taking and audibility.",
            "Institution: the named institute and teachers' association carry unequal cultural authority even before an argument begins.",
            "Period vocabulary: words such as citizen, province and modern economy reveal assumed hierarchies and developmental narratives.",
            "Strategic voice: distinguish a speaker's claim from the announcer's framing and from the later archivist's description.",
            "Double context: ask how the text participated in its moment and how its survival, selection and catalogue shape our reading now.",
          ],
        },
        {
          type: "exercise",
          title: "Read within and beyond the moment",
          instructions: "Choose the answer that combines historical understanding with critical distance.",
          items: [
            c(
              "Why does the announcer specify that the microphone will be turned?",
              ["To present equal audibility as a procedural achievement while the turn-taking framework still controls whose speech begins and ends", "To prove both speakers spoke simultaneously", "To announce a technical failure"],
              0,
              "The formal promise of access coexists with institutional sequencing and control.",
            ),
            c(
              "What does Halden's phrase ‘citizens, not villages’ assume?",
              ["That national identity and economic modernity are defined from the centre", "That villages contain no citizens", "That broadcasting should use more microphones"],
              0,
              "The opposition elevates a universal civic category while devaluing local scale and belonging.",
            ),
            c(
              "How does Arlen turn spatial language against Halden?",
              ["She accepts his opposition", "She argues that his distance from rural life is mistaken for distance from the nation", "She rejects national broadcasting entirely"],
              1,
              "Her reply contests who occupies the legitimate centre of national experience.",
            ),
            c(
              "Why is the archivist's mention of ‘pleasantly provincial humour’ important?",
              ["It shows a later catalogue potentially softening Arlen's structural critique into charm", "It proves the recording contains a joke", "It establishes that Halden wrote the transcript"],
              0,
              "The absent label reveals how archival description can reproduce gendered and regional dismissal.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write a doubly contextual reading",
          instructions: "Make one claim about the 1936 situation and one about the 1998 archival frame.",
          items: [
            p(
              "Compare Halden's ‘gift’ with Arlen's ‘information’.",
              "Model answer: Halden presents standard speech as benevolent national integration, while Arlen treats local speech as practically necessary knowledge; the debate concerns not only accent but which form of communication counts as useful to citizens.",
              "Connect metaphors of giving and utility to authority.",
            ),
            p(
              "Explain why a historically informed reader should neither endorse nor simply dismiss Halden.",
              "Model answer: His universalist language belongs to a real project of national communication and may address genuine practical fragmentation, but the broadcast also shows how that project could cast regional experience as colourful backwardness rather than expertise.",
              "Understand the appeal without accepting its hierarchy.",
            ),
            p(
              "Write a two-sentence archive critique using the doubled space given to Halden.",
              "Model answer: The catalogue's unequal space allocation makes Halden appear more central even though the transcript preserves Arlen's direct challenge. The archive therefore participates in the same struggle over representational authority that the broadcast staged.",
              "Connect archival form to the historical issue.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Every act of reading has a context",
          text: "Historical understanding does not require suspending judgment. It requires specifying the conditions under which a claim made sense before explaining what it enabled or excluded. Then ask how the text's later survival has altered the balance of voices.",
        },
      ],
      quiz: [
        q(1, "What does live radio add to the debate?", ["A shared imagined audience and a controlled sequence of audible voices", "Proof that listeners agreed", "A complete written constitution"], 0, "The medium creates presence while mediating turn-taking."),
        q(2, "Why might ‘humour’ be a domestication?", ["It can convert a challenge to authority into an endearing regional trait", "It always indicates agreement", "It is a technical audio term"], 0, "The label reduces political force to personality."),
        q(3, "What does Arlen's storm-warning example establish?", ["Local linguistic and practical knowledge can have consequences the centre fails to recognise", "Halden never listens to radio", "Dialects have no economic value"], 0, "She grounds her critique in institutional delay and situated knowledge."),
        q(4, "What is the best balance between context and critique?", ["Ignore historical conditions and judge by present language only", "Accept every period assumption to avoid bias", "Explain why a claim was plausible, then examine its effects and whose voice the record preserves"], 2, "Historical explanation and critical evaluation can reinforce each other."),
      ],
    },
    {
      slug: "translation-and-interpretation",
      title: "Translation and interpretation",
      summary:
        "Compare two translations of an invented Vela monologue whose evidential particles and unfinished aspect resist an apparently simple English rendering.",
      objective:
        "Analyse how translation choices encode evidentiality, aspect and social stance, then justify a rendering without treating any version as transparent.",
      minutes: 38,
      blocks: [
        {
          type: "passage",
          title: "What the shoes suggest",
          paragraphs: [
            "Translator's introduction — Vela, an invented language, marks how a speaker knows a claim. Mora indicates direct perception, suri inference from visible traces and neri information reported by another. The unfinished particle vi marks an event or state expected to be complete but not yet complete at the reference time. Varu is an honorific used for an older woman to whom the speaker owes respect.",
            "Original monologue — ‘Nai suri el varu na, vi. Neri vela tu su, ina.’ Interlinear gloss: I / infer / house / grandmother-HON / not / unfinished. Reported / lamp / still burn / emphasis. A contextual note says the speaker has seen a woman's shoes beside the door but has not seen the grandmother herself; the lamp is visible through the window.",
            "Translation A — ‘I can see your grandmother isn't home yet. Apparently the lamp is still burning.’ Translation B — ‘Your grandmother hasn't come home yet, I gather. And the light is still on, they say.’ A's suri becomes direct sight and neri becomes a vague adverb; B preserves inference in the first sentence but assigns the visible lamp to reported knowledge.",
            "The differences are not merely stylistic. A turns evidence into visual certainty and weakens the honorific relation; B preserves the distinction between inference and source but misstates the lamp's evidential status. A third rendering might read: ‘From the shoes, I take it your grandmother hasn't come home yet. And I can see the lamp is still burning.’ Even this version adds a causal phrase that the Vela sentence leaves implicit and cannot fully reproduce the social distance marked by varu.",
          ],
          glossary: [
            { term: "evidentiality", meaning: "The grammatical marking of how a speaker knows or obtained information." },
            { term: "aspect", meaning: "The grammatical representation of an event's internal timing or completion." },
            { term: "honorific", meaning: "A linguistic form that expresses respect or social status." },
            { term: "interlinear", meaning: "Placed between lines, as in a word-by-word gloss beneath a source text." },
          ],
        },
        {
          type: "table",
          title: "Compare the translations",
          caption: "A fluent translation may conceal systematic losses; awkwardness can reveal interpretive choices.",
          columns: ["Feature", "Vela", "Translation A", "Translation B", "Possible rendering"],
          rows: [
            ["Evidence: grandmother", "suri: inference", "can see: direct perception", "I gather: inference", "From the shoes, I take it…"],
            ["Evidence: lamp", "neri: reported", "Apparently: vague", "they say: reported", "Requires a choice about whose report"],
            ["Completion", "na, vi: not yet complete", "isn't home yet", "hasn't come home yet", "hasn't come home yet"],
            ["Social relation", "varu: honorific", "your grandmother", "your grandmother", "Respect must be carried lexically or pragmatically"],
            ["Added information", "No explicit cause", "None", "None", "‘From the shoes’ makes context explicit"],
          ],
        },
        {
          type: "exercise",
          title: "Evaluate translation choices",
          instructions: "Choose the answer that identifies the interpretive consequence accurately.",
          items: [
            c(
              "Why is ‘I can see’ a significant error in Translation A?",
              ["It changes inferred knowledge into direct perception and contradicts the stated context", "It makes the sentence too polite", "It removes the word lamp"],
              0,
              "The speaker has seen shoes, not the grandmother; evidential meaning is part of the proposition's force.",
            ),
            c(
              "What does the unfinished particle vi add beyond ‘not’?",
              ["An expectation that the state may soon be complete, producing the English ‘yet’", "A report from another person", "A future intention"],
              0,
              "Aspect marks incompletion at the reference time and makes the grandmother's return expected.",
            ),
            c(
              "Why can ‘apparently’ not replace neri securely?",
              ["It may indicate inference or uncertainty rather than a specific reported source", "It is too formal", "It always means direct observation"],
              0,
              "English apparently does not encode the same source-of-knowledge distinction as neri.",
            ),
            c(
              "Which rendering best preserves the supplied evidence?",
              ["I watched your grandmother stay away, and someone told me the lamp was on", "Your grandmother is definitely elsewhere, and the lamp seems visible", "From the shoes, I take it your grandmother hasn't come home yet; the lamp is reported to be still burning"],
              2,
              "The final version retains inference, incompletion and reported lamp information, while still needing contextual support for the shoes.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Translate as interpretation",
          instructions: "Justify each choice by naming what is preserved, adapted or lost.",
          items: [
            p(
              "Render the first Vela sentence in two defensible ways and compare their evidential force.",
              "Model answer: ‘I take it your grandmother hasn't come home yet’ preserves inference without specifying the trace; ‘From what I saw by the door, I gather she hasn't returned yet’ makes the inference more explicit but adds an observation not stated in the sentence itself.",
              "Compare implicit and explicit evidential cues.",
            ),
            p(
              "Explain why translating varu simply as grandmother can flatten the relationship.",
              "Model answer: English grandmother names kinship but does not automatically mark the respect owed to an older woman; a translator may need a respectful title, a courteous syntax or an explanatory note to approximate the social stance.",
              "Separate referential meaning from social indexicality.",
            ),
            p(
              "Write a translator's note defending the rendering ‘the lamp is said to be still burning’ and identify its remaining problem.",
              "Model answer: The passive preserves neri's reported source while avoiding an invented speaker; however, it is more formal than the Vela monologue and leaves the reporter's identity and attitude unexpressed.",
              "Acknowledge the register shift as well as the evidential gain.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Translation is not a window onto a fixed meaning",
          text: "Source grammars can encode distinctions that English distributes across lexicon, syntax and context. A good translation note explains the loss rather than hiding it. Fluency is one value among several; accuracy includes evidence, aspect, stance and relation to the speaker.",
        },
      ],
      quiz: [
        q(1, "What is the main difference between mora and suri?", ["Mora marks direct perception; suri marks inference from traces", "Mora marks future; suri marks past", "Mora is polite; suri is rude"], 0, "The distinction concerns source of knowledge."),
        q(2, "Why can the visible lamp not automatically justify direct perception in Translation A?", ["Because the source marks the lamp claim as neri, reported, even though the contextual note says it is visible", "Because lamps cannot be seen", "Because the grandmother owns it"], 0, "The grammar and contextual note create an interpretive tension that a translator must address."),
        q(3, "What is lost when varu becomes plain grandmother?", ["The honorific stance toward the older woman", "The fact that the house exists", "All temporal information"], 0, "Kinship and respect are related but distinct dimensions."),
        q(4, "Which translation principle is most defensible?", ["Always choose the shortest version", "Preserve the source's distinctions even when English requires explanation or marked syntax", "Replace every evidential with apparently"], 1, "Interpretive accuracy may require visible compromise rather than seamless substitution."),
      ],
    },
    {
      slug: "comparative-reading",
      title: "Comparative reading",
      summary:
        "Compare an 1840 civic progress narrative with a 1990 urban fragment to connect their opposed forms to shared exclusions and unresolved questions of belonging.",
      objective:
        "Build a comparative thesis from differences in narrative stance, spatial organisation and metaphor, then account for a silence shared by both texts.",
      minutes: 37,
      blocks: [
        {
          type: "passage",
          title: "Two cities, one river",
          paragraphs: [
            "Text A — Civic history, 1840: ‘Where there was marsh, we have raised a quay; where there was darkness, gas; where there was silence, the measured enterprise of bells. The river, once a boundary, has become an artery of commerce. Every improvement gathers the city into a single intention, and every citizen may read in the rising warehouse the promise of a future shared by all.’",
            "Text A, continued: ‘It is true that the new quay displaces the dwellings of boatmen. Their temporary removal has been managed with humanity, and the nation's prosperity cannot be arrested for the convenience of a few whose occupation belongs to an earlier age. What appears local loss will appear, in the longer view, as necessary motion.’",
            "Text B — Urban fragment, 1990: ‘The quay is being polished for the anniversary. Under the glass where the old mooring rings are displayed, a boy has drawn a boat with one oar. His aunt tells him not to touch. She remembers her father saying the river was an artery, and she remembers him coughing into the same handkerchief every morning. The warehouse opposite now sells tickets to a view of water nobody works on.’",
            "Text B, continued: ‘At sunset the bells begin their measured enterprise. The guide names three uses for the quay: heritage, leisure and regeneration. He does not name mooring. The boy asks who brought the boats, and his aunt looks towards the glass as if the rings might answer. They are behind her reflection, and the reflection is behind the water, and none of these things can be reached without moving the display.’",
          ],
          glossary: [
            { term: "quay", meaning: "A solid bank or platform built along a waterfront for boats." },
            { term: "artery", meaning: "A major route carrying traffic or flow, by analogy with a blood vessel." },
            { term: "regeneration", meaning: "The renewal or redevelopment of an area." },
            { term: "comparative", meaning: "Examining texts through both difference and relationship." },
          ],
        },
        {
          type: "table",
          title: "A comparative grid",
          caption: "Comparison becomes argument when a difference is shown to have interpretive consequences.",
          columns: ["Dimension", "Text A", "Text B", "Comparative pressure"],
          rows: [
            ["Narrative stance", "Collective civic ‘we’", "Intimate guide, aunt and boy", "Who speaks for the city and from where?"],
            ["Time", "Teleological progress", "Anniversary and layered memory", "Does the future absorb the past or display it?"],
            ["River", "Artery of commerce", "View and inaccessible trace", "Productive route becomes consumable spectacle"],
            ["Bells", "Proof of rising enterprise", "Repetition of the same civic claim", "Continuity of form, change of meaning"],
            ["Mooring rings", "Absent", "Visible but protected behind glass", "Material evidence preserved as untouchable"],
          ],
        },
        {
          type: "exercise",
          title: "Construct a comparison",
          instructions: "Choose the option that moves beyond listing similarities and differences.",
          items: [
            c(
              "What is the strongest contrast in narrative voice?",
              ["A speaks as a unified civic agent, while B distributes knowledge among a guide, adult and child whose perspectives do not fully align", "A is written in verse and B in legal language", "B has no narrator"],
              0,
              "The contrast concerns authority and the distribution of knowledge, not merely topic."),
            c(
              "Why is the artery metaphor important across the texts?",
              ["A uses flow to naturalise commerce, while B remembers bodily labour and illness behind the same abstraction", "Both texts discuss medicine", "B invents the metaphor independently"],
              0,
              "The inherited figure acquires different material associations."),
            c(
              "What does placing the mooring rings behind glass suggest?",
              ["Heritage is made visible while the practical relation to the river is removed from touch and use", "The rings have become more useful", "The boy can take them"], 0, "Preservation and exclusion coexist."),
            c(
              "Which comparative thesis is most defensible?",
              ["B simply proves A was dishonest", "Both texts are about bells", "B exposes how A's language of shared progress survives as heritage while the labour and belonging it displaced become objects of display rather than participants in civic voice"], 2, "The thesis connects linguistic continuity, changed form and unresolved exclusion."),
          ],
        },
        {
          type: "practice",
          title: "Write a comparative argument",
          instructions: "Use difference to reveal a relationship, then account for what neither text resolves.",
          items: [
            p(
              "Compare ‘a future shared by all’ with ‘a view of water nobody works on’.",
              "Model answer: A makes futurity a promise of universal inclusion, whereas B turns the river into a purchasable prospect detached from labour; the second phrase exposes a gap between civic belonging and the ownership of urban experience.",
              "Connect claim and counter-image rather than paraphrasing each.",
            ),
            p(
              "Analyse the changing function of ‘measured enterprise’.",
              "Model answer: In A, measured enterprise signifies rational collective progress; in B, the phrase returns through memory and bells after the productive activity it celebrated has become heritage, revealing the persistence of civic rhetoric after its social basis changes.",
              "Treat repetition as intertextual evidence.",
            ),
            p(
              "Write a three-sentence comparative thesis including one shared silence.",
              "Model answer: The 1840 history legitimises redevelopment by absorbing displacement into a universal future, while the 1990 fragment preserves the traces of that displacement as untouchable heritage. Their shared silence concerns the boatmen's own account: A dismisses them and B, despite intimacy, still observes rather than speaks for them. The texts therefore stage a continuity of exclusion across changing languages of progress and memory.",
              "A shared silence is evidence only when you explain how each text produces it.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Comparison needs a third term",
          text: "‘Text A says X and Text B says Y’ is not yet an argument. Add a term that connects the difference—agency, ownership, time, voice or exclusion. The strongest comparison explains why the relationship matters rather than merely proving that the texts differ.",
        },
      ],
      quiz: [
        q(1, "What does ‘the convenience of a few’ do in A?", ["It minimises displaced boatmen and subordinates their lives to national prosperity", "It reports their exact number", "It supports their right to remain"], 0, "The phrase reduces structural displacement to individual inconvenience."),
        q(2, "Why is the boy's one-oared boat significant?", ["It may suggest fragmented memory or incomplete agency, but the text leaves its meaning open", "It proves a real boat is hidden", "It gives an exact date"], 0, "The image invites interpretation without a fixed explanation."),
        q(3, "What is common to display and progress narrative in both texts?", ["Each arranges the past for a present audience, although A dismisses loss while B preserves traces behind barriers", "Both erase all memory", "Both are written by boatmen"], 0, "The comparison connects selection, display and authority."),
        q(4, "What would strengthen a comparative reading materially?", ["Counting the number of times river appears", "Seeking boatmen's testimonies and examining who controlled redevelopment and later heritage design", "Assuming B is factually wrong"], 1, "Additional situated evidence could test the interpretation of exclusion."),
      ],
    },
  ],
};
