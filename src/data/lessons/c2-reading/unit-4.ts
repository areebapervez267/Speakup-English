import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2ReadingUnit4: LessonUnit = {
  title: "Critical independence",
  description:
    "Develop original and defensible interpretations, test them against rival readings and synthesise heterogeneous evidence into a final critical position.",
  lessons: [
    {
      slug: "developing-an-original-thesis",
      title: "Developing an original thesis",
      summary:
        "Move beyond catalogue praise of Ivo Sen's blue rooms by using formal repetition, institutional framing and the artist's marginal note to form an original thesis.",
      objective:
        "Generate a contestable thesis from a tension rather than a topic, test its explanatory reach and refine it through counter-evidence.",
      minutes: 36,
      blocks: [
        {
          type: "passage",
          title: "Ivo Sen's blue rooms: a fictional catalogue dossier",
          paragraphs: [
            "Catalogue essay — Between 2011 and 2014, fictional artist Ivo Sen painted ten adjoining rooms in the same saturated blue. Visitors described the work as meditative, although the sequence required them to pass through narrow doorways and prevented any view of the whole installation. The catalogue praised Sen's ‘refusal of spectacle’ and compared the blue to silence after speech.",
            "Review — One critic argued that the rooms release colour from representation, allowing perception without the burden of objects. Another objected that the uniformity produces institutional calm at the cost of sensory difficulty. Both reviews treated the visitor as a contemplative subject, but neither asked why the rooms were commissioned for the renovated headquarters of a financial technology company.",
            "Artist's note — In the margin of a planning application, Sen wrote: ‘Blue is what remains when the screen goes dark. I wanted staff to enter a room in which nothing could be optimized. The doors are narrow because comfort should not know in advance what it is avoiding.’ The gallery edition of the note omitted the final sentence.",
            "Observation — In the tenth room, a maintenance door remained visible, its grey frame interrupting the blue. Staff sometimes crossed it carrying cables, briefly revealing that the installation's apparent closure depended on labour occurring just beyond view. The catalogue photographed this door only after visitors had left.",
          ],
          glossary: [
            { term: "saturated", meaning: "Intense and full in colour or concentration." },
            { term: "contemplative", meaning: "Directed toward quiet thought or observation." },
            { term: "optimized", meaning: "Adjusted or organised for maximum efficiency or effectiveness." },
            { term: "thesis", meaning: "A contestable claim that an interpretation will explain and defend." },
          ],
        },
        {
          type: "rules",
          title: "Find the pressure that produces a thesis",
          items: [
            "Tension: locate a gap between praise and structure, stated purpose and institutional setting, or visible surface and hidden labour.",
            "Mechanism: identify what produces the gap—doorways, omission, commissioning, framing or a repeated colour.",
            "Stake: explain why the gap matters to questions of perception, labour, authority or freedom.",
            "Warrant: state how the evidence supports the claim rather than attaching a theme label.",
            "Revision: include the strongest complication and narrow the thesis so it can survive it.",
          ],
        },
        {
          type: "exercise",
          title: "Choose a thesis with explanatory power",
          instructions: "Choose the claim that accounts for the most evidence without exceeding it.",
          items: [
            c(
              "Why is the headquarters context important?",
              ["It complicates the claim that the rooms simply oppose optimisation, since the installation may itself improve workplace experience", "It proves Sen accepted corporate money", "It explains the chemical composition of blue"],
              0,
              "The setting creates a tension between declared anti-optimisation and possible institutional appropriation.",
            ),
            c(
              "What does the omitted final sentence change?",
              ["It removes an explicit reference to comfort and avoidance, allowing the gallery to present the work as purely contemplative", "It proves the planning application was fake", "It changes the colour of the rooms"],
              0,
              "Editorial omission narrows the artist's stated purpose and strengthens a reading of institutional framing.",
            ),
            c(
              "How does the maintenance door complicate the thesis?",
              ["It reveals concealed labour and a route through the installation's apparent closure", "It proves the rooms were unfinished", "It shows visitors preferred grey"],
              0,
              "The interruption makes maintenance visible and challenges the fantasy of seamless, frictionless space.",
            ),
            c(
              "Which thesis is most original and defensible?",
              ["Blue is a calming colour", "Sen's rooms turn resistance to optimisation into a controlled corporate amenity, while the maintenance door exposes the labour that makes this apparent escape possible", "The artist disliked doorways"],
              1,
              "The claim connects intention, institution, form and hidden labour without reducing the work to a simple message.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Develop an original thesis",
          instructions: "Generate a claim, test it and revise it rather than settling for the first plausible idea.",
          items: [
            p(
              "Write a thesis using a because clause and a although clause.",
              "Model answer: Sen's blue rooms should be read as a critique of optimisation because their uniformity withholds information and resists instrumental attention, although their corporate setting may convert that resistance into a restorative employee benefit.",
              "Use the institutional context as a qualification, not a verdict.",
            ),
            p(
              "Identify one feature that supports the thesis and one that most seriously complicates it.",
              "Model answer: The narrow doorways and withheld total view frustrate efficient navigation, while the grey maintenance door introduces purpose, labour and passage that the contemplative reading prefers to exclude.",
              "Explain how each feature changes the claim.",
            ),
            p(
              "Revise your thesis after considering the maintenance workers' perspective.",
              "Model answer: The installation offers visitors an apparently non-instrumental space whose calm depends on workers crossing it with tools; it may briefly suspend optimisation for some while continuing to organise labour for others.",
              "Shift from artist intention to distribution of experience.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Originality is a relationship, not a novelty claim",
          text: "You do not need an interpretation no one has ever imagined. You need to explain a relationship that existing summaries leave implicit. A precise connection among form, institution and omission can be more original than an unsupported claim that the work ‘means everything’.",
        },
      ],
      quiz: [
        q(1, "Why are narrow doorways evidence rather than decoration?", ["They prevent a total view and make navigation physically constrained", "They prove Sen was an architect", "They identify the headquarters' owner"], 0, "Form shapes the visitor's access and attention."),
        q(2, "What does ‘nothing could be optimized’ claim?", ["The rooms were intended to resist instrumental use", "The rooms contain no objects", "The artist rejected all planning"], 0, "The note states a purpose that the installation's institutional context complicates."),
        q(3, "Why is the photograph timing significant?", ["It removes evidence of staff labour from the public representation of the work", "It improves the lighting", "It proves visitors never entered"], 0, "The catalogue controls when the maintenance interruption becomes visible."),
        q(4, "Which revision best protects a thesis from overclaiming?", ["The rooms are entirely anti-capitalist.", "The rooms may reproduce corporate utility while also creating limited experiences of non-instrumental attention.", "The colour has no significance."], 1, "The revision holds institutional appropriation and perceptual possibility together."),
      ],
    },
    {
      slug: "defending-an-interpretation",
      title: "Defending an interpretation",
      summary:
        "Defend a reading of The Last Orchard that centres inheritance rather than decline by answering rival nostalgic and progress-based interpretations.",
      objective:
        "Represent rival readings fairly, identify their assumptions and use close evidence to defend a qualified interpretation.",
      minutes: 35,
      blocks: [
        {
          type: "passage",
          title: "The last orchard",
          paragraphs: [
            "When the surveyors came, my father was pruning trees he had not planted. He worked along the row as if the measuring wheels behind him were a kind of weather that might pass. ‘They can measure the land,’ he said, ‘but they'll have to ask it where the roots are.’ I was sixteen and thought this was wisdom. Now I think it was also a way of not looking at the van.",
            "The offer described the orchard as underperforming. The trees were old, the access road inadequate and the layout resistant to mechanised harvesting. My father's reply listed yields for eleven years, though no one had asked for them. Each number stood for a season he could still see: the late frost, the summer of wasps, the branch he broke carrying his own father home.",
            "After he died, we found the offer unsigned beneath a calendar in the barn. My sister wanted to sell quickly, before debt made the decision for us. I wanted to keep the orchard because I had mistaken continuity for a form of justice. We argued in the language of roots while standing beside a machine whose engine could not be repaired.",
            "In the end we sold. The developer left two trees beside the road as a condition of planning permission. Years later I drove past and saw that one had been fitted with a plaque describing ‘community heritage’. The other leaned over the new drainage ditch. Neither bore fruit, but people stopped there to take photographs, and I understood that my father's roots had become a view.",
          ],
          glossary: [
            { term: "underperforming", meaning: "Producing less than expected or desired." },
            { term: "continuity", meaning: "The unbroken preservation of a practice, place or relationship." },
            { term: "mechanised", meaning: "Organised around machines rather than manual labour." },
            { term: "heritage", meaning: "A place, practice or object valued as part of inherited culture." },
          ],
        },
        {
          type: "table",
          title: "Three rival readings",
          caption: "A defence becomes stronger when it explains why an attractive alternative reading is incomplete.",
          columns: ["Reading", "Supporting evidence", "Hidden assumption", "Limit"],
          rows: [
            ["Nostalgic loss", "Pruning, unsigned offer, barren trees", "Continuity would have been economically and ethically possible", "Narrator rejects his earlier equation of continuity and justice"],
            ["Necessary progress", "Underperforming trees, broken machine, debt", "Sale is neutral or inevitable rather than shaped by options", "Planning reduces history to two photogenic remnants"],
            ["Inheritance as constraint", "Argument in language of roots", "Inherited identity can trap heirs in an unsustainable story", "Sale does not free the narrator from memory or representation"],
          ],
        },
        {
          type: "exercise",
          title: "Defend a qualified reading",
          instructions: "Choose the answer that engages with competing interpretations.",
          items: [
            c(
              "Why does the narrator revise his judgement of ‘roots’?",
              ["He recognises that his father's statement mixed practical attachment with avoidance", "He decides all metaphors are false", "He never believed the surveyors were present"],
              0,
              "The phrase ‘not looking at the van’ complicates the earlier appearance of wisdom.",
            ),
            c(
              "What does the list of eleven yields achieve?",
              ["It turns memory into evidence of productive labour while each number also carries an emotional history", "It proves the orchard was highly profitable", "It persuades the developer immediately"],
              0,
              "The reply joins measurable performance and recollection, resisting the offer's narrow definition of value.",
            ),
            c(
              "What is the strongest objection to an inheritance-as-constraint reading?",
              ["The orchard also embodied skilled labour, family continuity and a father's identity, not merely burden", "The narrator clearly hates his father", "The developer preserves every tree"],
              0,
              "A defensible reading must account for genuine attachment as well as entrapment.",
            ),
            c(
              "Which thesis best survives the rival readings?",
              ["The story simply mourns a lost paradise", "Selling was obviously the only rational choice", "The story presents inheritance as neither recoverable paradise nor simple escape: its meanings are converted into financial categories and heritage display while remaining active in the narrator's judgment"],
              2,
              "The thesis integrates memory, material constraint and the afterlife of inherited identity.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Defend and revise",
          instructions: "Use steelmanning: state the rival view in terms its advocate could accept before answering it.",
          items: [
            p(
              "Write a fair nostalgic reading and one reason it is incomplete.",
              "Model answer: A nostalgic reading sees the orchard as a repository of skilled labour and paternal continuity destroyed by redevelopment; however, the unsigned offer and unrepairable machine show that preservation was not a viable option simply waiting for loyal heirs.",
              "Do not caricature nostalgia as sentimentality.",
            ),
            p(
              "Answer the claim that the sale proves the narrator's liberation.",
              "Model answer: The sale ends one material obligation, but the conversion of roots into ‘community heritage’ and a view shows that inherited meaning continues to be managed by others rather than disappearing.",
              "Distinguish legal transfer from interpretive release.",
            ),
            p(
              "Write a defence paragraph of 80–100 words with claim, two details, counter-reading and qualification.",
              "Model answer: The orchard is best read as an inheritance whose value cannot be contained by either financial performance or nostalgic continuity. The eleven yield figures assert skilled labour, while the unrepairable machine exposes the limits of preserving that labour unchanged. A nostalgic reader might argue that the sale simply surrenders an irreplaceable good, but the narrator's own rejection of continuity-as-justice makes that reading too simple. The final heritage plaque shows inheritance surviving after the economic relation has changed, now as curated image rather than working practice.",
              "Make the rival reading alter the precision of your claim.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Defend by explaining, not by repeating",
          text: "Reasserting a thesis does not answer an objection. Show which assumption the rival reading relies on and how your account explains more of the text. A qualified defence often becomes stronger because it incorporates the truth inside the objection.",
        },
      ],
      quiz: [
        q(1, "What does the unsigned offer reveal?", ["The developer never made an offer", "The father's decision remained unresolved until circumstance forced the heirs to decide", "The orchard had no owner"], 1, "The document preserves indecision rather than a final position."),
        q(2, "Why does the narrator mention standing beside an unrepairable machine?", ["To explain how to repair an engine", "To praise mechanisation", "To introduce the material limits behind the family's language of roots"], 2, "The machine embodies practical constraints on continuity."),
        q(3, "What does ‘roots had become a view’ suggest?", ["The narrator forgot the orchard", "Inherited labour and attachment have been transformed into passive heritage for consumption", "The roots became literally visible from the road"], 1, "The phrase connects economic and representational transformation."),
        q(4, "What makes a rival reading useful?", ["It reveals evidence or assumptions that can sharpen and test the main interpretation", "It must be destroyed", "It automatically invalidates the text"], 0, "Counter-reading strengthens interpretive accountability."),
      ],
    },
    {
      slug: "synthesis-across-multiple-texts",
      title: "Synthesis across multiple texts",
      summary:
        "Synthesise a map, sanitary report, oral history and redevelopment memo to explain how a fictional common changes from shared resource to managed heritage.",
      objective:
        "Construct an argument across genres and periods by relating evidence, tracing category changes and distinguishing convergence from gaps.",
      minutes: 38,
      blocks: [
        {
          type: "passage",
          title: "Mere Green through four records",
          paragraphs: [
            "Map, 1760 — Mere Green is marked as common grazing land crossed by a footpath from the chapel to the river. The map records no owners, no boundary fences and three watering places. Its legend distinguishes ‘waste’ from ‘arable’ but makes no judgment about the people who use the green.",
            "Sanitary report, 1892 — A council report calls the green ‘an unmanaged accumulation of damp ground and informal habitation’. It recommends drainage, fencing and the removal of temporary dwellings, citing mortality near the river. The report contains mortality figures for the district but none specifically for Mere Green.",
            "Oral history, 1974 — Former resident Ada Bell recalls: ‘We had no lease, but we knew whose child had been born in which room. The council called it a camp because camp sounded temporary. When the fence came, my neighbour carried her door to the new estate so she would not have to buy one.’ The interviewer's transcript notes that Bell pauses before the word temporary.",
            "Redevelopment memo, 2024 — The restored green will be branded ‘a shared place for everyone’, with a heritage trail marking the former path of temporary housing. The memo commits to universal access but proposes removing a memorial stone because its wording ‘foregrounds displacement rather than community continuity’.",
          ],
          glossary: [
            { term: "arable", meaning: "Land suitable or used for growing crops." },
            { term: "informal habitation", meaning: "Settlement without formal tenure or official housing status." },
            { term: "tenure", meaning: "The legal or customary basis on which land is occupied." },
            { term: "category", meaning: "A classificatory label that shapes how something is understood and governed." },
          ],
        },
        {
          type: "table",
          title: "Track the category changes",
          caption: "Synthesis follows transformations rather than accumulating summaries.",
          columns: ["Record", "Name for the place", "Primary evidence", "Effect of the name"],
          rows: [
            ["1760 map", "Common grazing land", "Spatial and productive use", "Makes shared use legible without ownership"],
            ["1892 report", "Unmanaged damp ground and informal habitation", "District mortality and sanitary judgment", "Converts residents into a problem of environment and temporariness"],
            ["1974 testimony", "No lease, but known rooms and births", "Lived kinship and material memory", "Challenges official categories with relations not recorded in property"],
            ["2024 memo", "Shared place for everyone", "Branding and access commitment", "Universalises the present while editing displacement from heritage"],
          ],
        },
        {
          type: "exercise",
          title: "Synthesise the records",
          instructions: "Choose the answer that connects evidence and evaluates its limits.",
          items: [
            c(
              "What is the most important link between the map and the sanitary report?",
              ["Shared land use is reclassified as unmanaged space through a new institutional vocabulary", "Both records use identical categories", "The map proves the mortality rate"],
              0,
              "The contrast reveals how classification, not only physical change, enables intervention.",
            ),
            c(
              "Why is the mortality evidence limited?",
              ["The figures concern the district rather than Mere Green, so they cannot establish a local causal case directly", "No numbers appear in the report", "Mortality is irrelevant to every public policy"],
              0,
              "Scale mismatch prevents direct attribution to the settlement.",
            ),
            c(
              "What does Bell's carried door add to the synthesis?",
              ["Material testimony of making a home without tenure, complicating the official label temporary", "Proof that every resident owned a door", "A precise date for fencing"],
              0,
              "The object joins kinship, practical agency and the instability of official belonging.",
            ),
            c(
              "Which synthesis thesis is strongest?",
              ["All four documents agree that the green was shared", "The green's history shows how shifting categories turn lived commonality into sanitary risk and then curated universality, while testimony preserves relations those categories cannot contain", "The 2024 memo proves the green is now equal"],
              1,
              "The thesis connects institutional renaming across periods with the persistence of excluded experience.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Compose across records",
          instructions: "Use sources for distinct jobs: map for baseline, report for governance, testimony for experience and memo for present framing.",
          items: [
            p(
              "Write a synthesis paragraph linking the map, report and Bell without giving a chronological list.",
              "Model answer: The 1760 map records use without ownership, whereas the 1892 report makes absence of formal tenure appear as sanitary danger; Bell's account of known rooms, births and a carried door shows the relations that the report's categories of dampness and informal habitation could not represent.",
              "Use category change as the connecting mechanism.",
            ),
            p(
              "Evaluate the memo's ‘shared place for everyone’ using two earlier records.",
              "Model answer: The phrase promises present universality but inherits a history in which shared use was first pathologised and later curated; the map and Bell's testimony suggest that commonality depended on relations and access, not merely a branding of space.",
              "Distinguish formal access from substantive belonging.",
            ),
            p(
              "Write a bounded research claim and identify one missing source.",
              "Model answer: The records suggest that redevelopment converts displacement into heritage by selecting continuity over memory, but resident participation in the 2024 consultation is not documented; consultation minutes and responses from former residents would test whose ‘everyone’ the memo represents.",
              "State the evidence needed to move from inference to stronger judgment.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Synthesis needs a transforming concept",
          text: "A sequence of dates is chronology, not synthesis. Follow a concept—commonality, tenure, temporariness, heritage—as records rename and reorganise it. Then show where one source corroborates, qualifies or exposes the limits of another.",
        },
      ],
      quiz: [
        q(1, "What does ‘camp sounded temporary” reveal?", ["Official naming can make unsettled belonging seem natural and inevitable", "Bell preferred official terminology", "The settlement was literally a holiday camp"], 0, "The pause and quotation foreground the affective work of classification."),
        q(2, "Why is the map's absence of owners significant?", ["It makes collective use visible without subordinating it to a property category", "It proves the land had no users", "It is an inaccurate survey"], 0, "The map's representational limits can preserve a different understanding of commonality."),
        q(3, "What does removing the memorial stone reveal?", ["A tension between inclusive branding and the management of uncomfortable historical memory", "The memo rejects heritage entirely", "The stone blocks universal access physically"], 0, "The stated reason links selection to a preferred civic narrative."),
        q(4, "What is the strongest source relationship?", ["The report and memo use universality in identical ways", "The report's sanitary categories and the memo's heritage categories both organise who belongs, though through different moral languages", "Bell's testimony validates every claim in the report"], 1, "Synthesis connects different periods through a recurring problem of classification and power."),
      ],
    },
    {
      slug: "a-final-critical-reading-project",
      title: "A final critical reading project",
      summary:
        "Complete a mini critical project on a mixed portfolio about public space, moving from close reading and contextual comparison to an original, defended synthesis.",
      objective:
        "Independently formulate a researchable interpretation, integrate legal, poetic, statistical and memoir evidence and defend a bounded conclusion.",
      minutes: 38,
      blocks: [
        {
          type: "passage",
          title: "Portfolio: who owns the square?",
          paragraphs: [
            "Document A — Planning clause, 2023: ‘The square shall remain available for public use, subject to reasonable management requirements. Temporary cultural programming may occupy up to forty per cent of accessible floor area on no more than twelve days per month. Management requirements shall preserve visibility, safety and commercial vitality.’",
            "Document B — Poem fragment: ‘They called it public when the gates were wider. / At noon the square was full of almost: / almost sitting, almost speech, / a cup placed carefully out of sight. / By evening the chairs had learned the wall.’",
            "Document C — Observation memo, 2024: Across four sample weeks, observers recorded 18,400 square entries. Seated activity averaged 11 per cent of visits, with higher proportions when no programmed event occupied the central area. The memo defines vitality as entry volume plus spending and does not measure conversation or duration of stay.",
            "Document D — Vendor's account: ‘My grandmother sold flowers here before a permit. When they made the square public, they gave her a number. Now the number is valid only outside the programming days. She says the chairs are not forbidden; they have simply become very good at leaving.’",
          ],
          glossary: [
            { term: "accessible", meaning: "Available for use or able to be reached by people." },
            { term: "programming", meaning: "Organised events or activities scheduled for a space." },
            { term: "memo", meaning: "A concise record or analytical document." },
            { term: "portfolio", meaning: "A collection of documents assembled for a common critical purpose." },
          ],
        },
        {
          type: "table",
          title: "Project stages",
          caption: "Complete the stages in order, but allow later evidence to revise the question and thesis.",
          columns: ["Stage", "Task", "Product"],
          rows: [
            ["1. Question", "Identify the contested term and the relevant groups", "Does formal public availability equal meaningful public use?"],
            ["2. Close reading", "Analyse one passage from each document", "Claim–evidence notes for clause, poem and memoir"],
            ["3. Context", "Compare governance, experience and measurement", "Relationship matrix"],
            ["4. Thesis", "State an original, bounded interpretation", "One sentence with reason and qualification"],
            ["5. Defence", "Address the strongest rival account", "Counter-reading paragraph"],
            ["6. Synthesis", "Write 250–350 words with a source trail", "Final critical project"],
          ],
        },
        {
          type: "exercise",
          title: "Prepare the project",
          instructions: "Choose the move that demonstrates critical independence rather than summary.",
          items: [
            c(
              "Which phrase in Document A most needs unpacking?",
              ["Planning clause", "Reasonable management requirements", "Public use"],
              1,
              "Reasonable embeds discretion and power while presenting limits as neutral administration.",
            ),
            c(
              "What is the poem's central interpretive tension?",
              ["The space is formally open yet bodies and speech are constrained by ‘almost’", "The square has no chairs", "The poem describes a private garden"],
              0,
              "The repeated almost distinguishes nominal access from embodied use.",
            ),
            c(
              "Why can Document C not settle the question of public value?",
              ["Its metric selects entry and spending while excluding conversation, duration and the experience of exclusion", "It contains no observations", "Four weeks is always sufficient for every claim"],
              0,
              "The measure defines vitality in advance and therefore cannot test alternative values.",
            ),
            c(
              "Which project question has the best synthesis potential?",
              ["How many documents are in the portfolio?", "How do legal availability, metric vitality and lived ‘almost’ produce different definitions of public space?", "What colour are the chairs?"],
              1,
              "The question requires legal, poetic, statistical and testimonial reading in relation.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Complete the critical project",
          instructions: "Produce connected notes that can be revised into a final 250–350-word project.",
          items: [
            p(
              "Write a question and an original thesis with one qualification.",
              "Model answer: Question: How does the square's formal public status relate to the possibilities of gathering? Thesis: The portfolio presents public space as governed availability rather than guaranteed common use, because management, metrics and cultural programming define acceptable presence; however, the vendor's inherited permit shows that formal access can also sustain precarious livelihoods.",
              "Let the thesis emerge from a contested relation, not a broad theme.",
            ),
            p(
              "Write a 100–120-word synthesis using Documents A, B and C, including one methodological caution.",
              "Model answer: The planning clause promises public use while defining its limits through management requirements, scheduled programming and commercial vitality. The poem translates those limits into bodily experience: the square is full of ‘almost’ sitting and speech, and chairs ‘learn the wall’. The observation memo appears to test the space objectively, yet its definition of vitality combines entries and spending while omitting conversation and duration. Together the documents suggest that quantitative visibility can coexist with restricted use. The comparison is bounded, however, because a four-week sample and a literary fragment cannot establish how all visitors experience the square.",
              "Give each genre a distinct evidentiary role.",
            ),
            p(
              "Write a defence paragraph that answers ‘the square is open, so exclusion is a matter of individual choice’.",
              "Model answer: Formal openness does not establish equal capacity to remain, gather or earn. The clause permits management requirements to shape access, the metric treats entry as vitality without examining why people leave, and the vendor's permit excludes precisely the programming days that bring crowds. Individual choice operates within these arrangements. The strongest conclusion is therefore not that no one can use the square, but that public availability and meaningful common use must be evaluated separately.",
              "Answer the strongest objection on its own terms, then qualify the conclusion.",
            ),
          ],
        },
        {
          type: "text",
          title: "The final project standard",
          paragraphs: [
            "A successful project contains one question, one contestable thesis, close evidence from at least three documents, a contextual comparison and a counter-reading. It identifies the limits of each source and does not ask a poem to establish prevalence or a planning clause to reveal lived experience.",
            "Your conclusion should state what the portfolio supports, what remains unresolved and which additional evidence would change the judgment. Critical independence is demonstrated by the relationships you construct, not by the number of techniques you name.",
          ],
        },
        {
          type: "tip",
          title: "Leave the conclusion open to evidence",
          text: "End with a bounded judgment and a testable next question. If your conclusion could not be challenged by any possible source, it is probably too absolute for the portfolio you have read.",
        },
      ],
      quiz: [
        q(1, "Why is ‘public use’ not self-explanatory in Document A?", ["Its meaning is qualified by management requirements, programming and commercial vitality", "The square is privately owned", "Public has only one legal meaning"], 0, "The clause produces a governed rather than unlimited version of access."),
        q(2, "What does ‘chairs had learned the wall’ suggest?", ["Furniture and bodies adapt to constraints that may be implicit rather than physically enforced", "The chairs are alive", "No furniture is allowed"], 0, "Personification makes patterned avoidance visible."),
        q(3, "What additional evidence would most improve the project?", ["Visitor interviews, duration studies and records of permit enforcement across programming and non-programming days", "A longer poem with the same images", "More definitions of entry"], 0, "The evidence would test experience, duration and the distribution of access."),
        q(4, "What is the strongest final conclusion?", ["The square is either entirely public or entirely private", "Formal availability, administrative permission and measured vitality produce a stratified form of publicness whose value must be assessed through both outcomes and experience", "Documents B and D are unreliable because they are not statistics"], 1, "The conclusion integrates genres and preserves a qualified, evidence-led judgment."),
      ],
    },
  ],
};
