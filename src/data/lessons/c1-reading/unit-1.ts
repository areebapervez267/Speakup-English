import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1ReadingUnit1: LessonUnit = {
  title: "Dense argument",
  description:
    "Trace claims through qualification and counter-argument, test the assumptions that hold an inference together, and recover the architecture of demanding academic sentences.",
  lessons: [
    {
      slug: "mapping-complex-arguments",
      title: "Mapping complex arguments",
      summary:
        "Map a policy essay whose recommendation depends on nested claims, a limited pilot and a serious objection about unequal access.",
      objective:
        "Distinguish a thesis, supporting reasons, evidence, counter-argument and qualified conclusion, then show how each part contributes to the whole.",
      minutes: 34,
      blocks: [
        {
          type: "passage",
          title: "Repair by algorithm: a fictional policy essay",
          paragraphs: [
            "A city does not need a more impressive dashboard; it needs a defensible way to decide which broken pavements should be repaired first. Our proposed scheduling system would rank reports by predicted harm rather than by the order in which complaints arrive. This is not an argument for handing public judgment to a machine. It is an argument that an explicit, reviewable model can make decisions more consistent than a queue in which persistent callers are rewarded.",
            "The case for the model rests on two claims. First, visible damage is an imperfect guide to risk: a barely perceptible change of level may matter more to a wheelchair user than a conspicuous crack. Second, response times currently vary between districts even when engineers record comparable hazards. In a twelve-month fictional pilot across four districts, ranking reports by a harm score reduced the gap between the slowest and fastest response from nineteen days to seven.",
            "Advocates for residents with limited digital access object that the system privileges those able to submit photographs through an app. The objection is decisive against an app-only design. Telephone reports, inspection on request and an audit of neighbourhoods with low submission rates must therefore be built into the policy, and district-level outcomes must remain public.",
            "These safeguards do not remove every risk; a harm score necessarily simplifies what residents value. They do, however, permit a limited conclusion. The city should adopt transparent prioritisation, not automated final authority, because consistency improves when criteria are visible and because public scrutiny gives affected people a practical means of challenging the ranking.",
          ],
          glossary: [
            { term: "defensible", meaning: "Capable of being supported against serious criticism." },
            { term: "provisional", meaning: "Temporary and subject to later revision." },
            { term: "audit", meaning: "A systematic check that a process is working fairly." },
          ],
        },
        {
          type: "table",
          title: "The essay's argument map",
          caption: "Read vertically to see the inference; read horizontally to test each link.",
          columns: ["Function", "Textual move", "Role in the argument"],
          rows: [
            ["Problem", "Complaint order rewards persistent callers", "Explains why the present system is not neutral"],
            ["Thesis", "Adopt transparent prioritisation, not automated final authority", "States the policy and its boundary"],
            ["Reason 1", "Visible damage is an imperfect proxy for harm", "Challenges the basis of existing decisions"],
            ["Reason 2", "Response times vary despite comparable hazards", "Shows that inconsistency is a systemic problem"],
            ["Evidence", "Pilot response gap falls from 19 to 7 days", "Supports feasibility, not universal effectiveness"],
            ["Counter-argument", "App-only reporting excludes some residents", "Forces the recommendation to be redesigned"],
            ["Qualified conclusion", "Safeguards plus public scrutiny permit limited adoption", "Explains why the revised policy is justified"],
          ],
        },
        {
          type: "exercise",
          title: "Trace the reasoning",
          instructions: "Choose the option that identifies the argumentative function accurately.",
          items: [
            c(
              "What is the essay's central recommendation?",
              ["Replace engineers with an app", "Use transparent prioritisation while retaining human authority and access safeguards", "Repair every pavement in the order reported"],
              1,
              "The thesis endorses a reviewable ranking system but explicitly rejects automated final authority and an app-only design.",
            ),
            c(
              "Why does the writer mention persistent callers?",
              ["To show that the current queue may reward access and persistence rather than need", "To prove that all complaints are dishonest", "To argue that residents should stop reporting damage"],
              0,
              "The opening uses persistent callers to expose a distributional flaw in a first-come, first-served queue.",
            ),
            c(
              "What does the pilot result establish most directly?",
              ["That every city will obtain the same reduction", "That engineers are unnecessary", "That a harm-based ranking is feasible and reduced one measured inconsistency"],
              2,
              "The four-district pilot supports feasibility and reports a specific change; it cannot establish universal results or remove human judgment.",
            ),
            c(
              "How does the access objection change the thesis?",
              ["It is dismissed because the pilot succeeded", "It converts an app-centred proposal into a multi-channel policy with public audits", "It proves that prioritisation is impossible"],
              1,
              "The writer calls the objection decisive against app-only design and incorporates its implications as conditions of adoption.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build your own argument map",
          instructions: "Use the fictional essay for all three tasks. Write concise notes before checking the model answers.",
          items: [
            p(
              "Write the essay's thesis as a claim plus one boundary.",
              "Model answer: The city should adopt transparent prioritisation, but engineers and accessible reporting channels must retain decision-making authority.",
              "Include both the recommendation and the limit.",
            ),
            p(
              "Complete this chain: current queue → problem → proposed mechanism → predicted benefit.",
              "Model answer: Complaint order rewards persistent callers → allocation reflects access rather than need → visible harm criteria rank reports → decisions become more consistent across districts.",
              "Make each arrow an explanatory link, not merely a chronological step.",
            ),
            p(
              "Explain why the pilot figure cannot carry the conclusion by itself.",
              "Model answer: It covers only four districts and one measured outcome, while the conclusion also relies on a moral case for consistent criteria and safeguards against digital exclusion.",
              "Distinguish empirical feasibility from normative justification.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Map moves, not just topics",
          text: "A paragraph may contain several claims. Label what each sentence does—concedes, defines, challenges, exemplifies or concludes—before deciding which claim it supports. Counter-arguments often strengthen a thesis by changing its conditions rather than defeating it.",
        },
      ],
      quiz: [
        q(1, "Which sentence best states the essay's thesis?", ["The city should adopt transparent prioritisation with human authority and accessible channels.", "Digital reports are the most accurate source of evidence.", "Response times matter more than resident safety."], 0, "The conclusion combines the policy recommendation with its essential limits."),
        q(2, "What assumption of the current system does the opening expose?", ["Engineers dislike consistent procedures.", "The order of complaints is a neutral measure of need.", "All districts have equal populations."], 1, "The writer argues that complaint order can reward persistence and access rather than severity."),
        q(3, "What is the strongest objection, and how is it answered?", ["Residents will use the app too often, so reporting should be restricted.", "Prioritisation is imperfect, so no criteria should be visible.", "App-only access is exclusionary, so reporting and auditing must remain multi-channel and public."], 2, "The essay accepts the distributive objection and makes safeguards part of the recommendation."),
        q(4, "Why is the conclusion described as limited?", ["The pilot tested one mechanism in four districts and the model simplifies resident values.", "The author has no evidence.", "The city cannot evaluate public services."], 0, "The writer limits the claim to transparent prioritisation rather than universal automated decision-making."),
      ],
    },
    {
      slug: "assumptions-and-logical-gaps",
      title: "Assumptions and logical gaps",
      summary:
        "Test a persuasive case for a four-day school week by separating its evidence from the hidden premises needed to reach its recommendation.",
      objective:
        "Identify unstated assumptions, distinguish correlation from causation and repair an inference without rejecting a reasonable claim wholesale.",
      minutes: 36,
      blocks: [
        {
          type: "passage",
          title: "The shorter week: a fictional board paper",
          paragraphs: [
            "The Northern Schools Board should extend its four-day-week pilot because the scheme improved both attainment and teacher retention. In the eighteen participating schools, examination pass rates rose by six percentage points over two years, while the proportion of teachers leaving the profession fell from twelve to eight per cent. Schools elsewhere, the paper notes, recorded no comparable rise. The conclusion appears straightforward: less time in class produced better results and made teaching a more sustainable career.",
            "Yet the comparison omits a relevant difference. Participating schools received additional planning funding and were selected after demonstrating strong leadership. Their examination profiles also differed from those of other schools. These facts do not invalidate the pilot, but they prevent its results from being attributed to the shorter week alone. A plausible rival explanation is that funding and selection identified schools already able to improve.",
            "The retention figure is similarly suggestive rather than conclusive. Teachers may have remained because their workload changed, because pay was protected or because the local labour market offered few alternatives. Without interviews and comparable payroll records, the board cannot know which mechanism mattered. Still, uncertainty about causation does not erase the observed improvement; it tells the board what evidence it must collect before expansion.",
            "A defensible next step is therefore a matched, three-year trial that protects planning support, records workload and compares similar schools. Expansion should follow only if benefits persist without widening gaps between student groups. The case for experimentation is strong; the case for immediate universal adoption is not.",
          ],
          glossary: [
            { term: "attainment", meaning: "Measured educational achievement." },
            { term: "rival explanation", meaning: "An alternative cause that could account for the same result." },
            { term: "matched", meaning: "Compared using participants or settings with relevant similarities." },
          ],
        },
        {
          type: "rules",
          title: "Make the invisible inference visible",
          items: [
            "Conclusion: what does the writer want the board to do? Underline the recommendation and its scope.",
            "Premises: which stated facts must be true for that recommendation to follow? Do not treat every detail as essential.",
            "Assumptions: what bridge is unstated—for example, that the compared schools were equivalent or that retention has one cause?",
            "Gaps: identify missing alternatives, ambiguous measures or evidence that points in another direction.",
            "Repair: narrow the conclusion, add the missing premise cautiously or request evidence that could test it.",
          ],
        },
        {
          type: "exercise",
          title: "Audit the inference",
          instructions: "Choose the answer that best identifies the assumption or logical repair.",
          items: [
            c(
              "Which unstated premise is needed for ‘the scheme improved attainment’?",
              ["Pilot schools were comparable enough to other schools for the comparison to be informative", "All teachers prefer four-day weeks", "Examinations measure every kind of learning"],
              0,
              "Without relevant comparability, differences between the groups could explain the different outcomes.",
            ),
            c(
              "Why does additional planning funding complicate the causal claim?",
              ["It is an alternative explanation that changed alongside the four-day schedule", "It proves funding has no educational effect", "It applies only to teachers who left"],
              0,
              "Two interventions occurred together, so the design cannot isolate the effect of the timetable.",
            ),
            c(
              "What is the strongest interpretation of the retention result?",
              ["The shorter week was the sole cause of retention", "Teacher retention improved in the pilot, but the mechanism remains uncertain", "Teacher retention worsened"],
              1,
              "The observed change is supported; the causal explanation is not isolated.",
            ),
            c(
              "Which revision best repairs the argument?",
              ["Adopt the policy everywhere because six points is a large increase", "Reject the pilot because no study is perfect", "Test the policy in matched schools while tracking funding, workload and subgroup outcomes"],
              2,
              "The repair preserves the value of experimentation while addressing confounding variables and distributional effects.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Stress-test the board paper",
          instructions: "Answer in analytical sentences. The models show one defensible route, not the only possible wording.",
          items: [
            p(
              "State one factual premise, one causal assumption and one value judgment in the paper.",
              "Model answer: Factual premise: pilot pass rates rose by six points. Causal assumption: the shorter week contributed materially to that rise. Value judgment: sustained improvement without wider inequality justifies expansion.",
              "Ask respectively what happened, what caused it and what ought to follow.",
            ),
            p(
              "Write the rival explanation for attainment in one sentence, then name evidence that would distinguish it from the timetable explanation.",
              "Model answer: Selection and extra planning support may have driven improvement rather than reduced classroom time; a matched comparison with equivalent funding and baseline profiles would help distinguish the explanations.",
              "Specify a comparison that changes one relevant factor at a time.",
            ),
            p(
              "Repair this claim: ‘The pilot proves that shorter weeks produce better schools.’",
              "Model answer: The pilot is consistent with the possibility that a shorter week can improve outcomes in well-supported schools, but its design does not establish causation or justify immediate expansion.",
              "Retain the finding while reducing causal certainty and scope.",
            ),
          ],
        },
        {
          type: "tip",
          title: "An assumption is not automatically a flaw",
          text: "Arguments must leave some premises implicit. Your task is to decide whether the omitted bridge is reasonable, supported elsewhere or strong enough to carry the conclusion. A useful repair usually names the assumption and adjusts the claim, rather than accusing the writer of failing to think.",
        },
      ],
      quiz: [
        q(1, "Why is ‘selected after demonstrating strong leadership’ important?", ["It may confound the comparison because leadership quality could contribute to improvement.", "It shows that the schools had weak teachers.", "It proves the shorter week caused success."], 0, "Selection can create a non-equivalent comparison group."),
        q(2, "What is a rival explanation?", ["A deliberately misleading statistic", "An alternative cause consistent with the observed evidence", "A conclusion that rejects all data"], 1, "A rival explanation competes with the writer's causal account."),
        q(3, "Does uncertainty about causation invalidate the reported changes?", ["Yes, every uncertain claim is worthless.", "No, the changes can be reported while their causes remain open.", "Only if the figures are percentages."], 1, "Description and causal attribution are separate inferential tasks."),
        q(4, "Why track subgroup outcomes during a new trial?", ["To make the report longer", "To discover whether average gains conceal unequal effects", "To replace all achievement measures"], 1, "An overall improvement may distribute benefits or costs unevenly."),
      ],
    },
    {
      slug: "unpacking-long-sentences",
      title: "Unpacking long sentences",
      summary:
        "Decode nested clauses and interrupted syntax in an essay about digitising private archives without confusing qualification for weakness.",
      objective:
        "Identify main clauses, subordinate relationships, scope of modification and parenthetical interruption, then paraphrase a dense sentence accurately.",
      minutes: 33,
      blocks: [
        {
          type: "passage",
          title: "The letter that could not be scanned: a fictional essay",
          paragraphs: [
            "When a family lends a collection of letters to a public library, it does not surrender the privacy of the people described in them; yet a promise of open access, unless carefully limited, can expose information that the donors never imagined would circulate. The collection at issue includes correspondence about adoption, illness and unpaid debts, and one bundle carries dates rather than names, as if anonymity could be secured by removing signatures while leaving distinctive circumstances intact.",
            "Digitisation, which the library defends as a means of widening participation, creates two different kinds of exposure: the original document becomes easier to preserve, but its contents become easier to search, copy and reconnect with other records. Those who welcome the second change often assume that increased visibility is inherently democratic, although visibility can empower researchers while also depriving the subjects of correspondence of any meaningful control over interpretation.",
            "A policy that treats consent as a single signature collected at deposit therefore mistakes a momentary transaction for a continuing relationship. Because later researchers may ask new questions, and because relatives may discover material whose existence was concealed from them, permission should be revisited when the proposed use materially changes. What matters is not whether every letter must be cleared individually, but whether the library has established a credible process for hearing objections.",
            "The library should digitise selectively and describe restrictions plainly. Open scholarship and responsible stewardship are not opposites; the first loses legitimacy when it ignores the people whose lives supply its evidence, while the second becomes evasive when it invokes privacy to avoid accountable decisions.",
          ],
          glossary: [
            { term: "parenthetical", meaning: "An inserted phrase that comments on, or interrupts, the main clause." },
            { term: "scope", meaning: "The part of a sentence or argument to which a qualification applies." },
            { term: "stewardship", meaning: "Responsible care of material held in trust." },
          ],
        },
        {
          type: "examples",
          title: "Three ways into a difficult sentence",
          intro: "Bracket the skeleton, label the attachments, then paraphrase the logical relationship.",
          items: [
            {
              text: "Digitisation, which the library defends as a means of widening participation, creates two different kinds of exposure: the original document becomes easier to preserve, but its contents become easier to search, copy and reconnect with other records.",
              note: "Skeleton: Digitisation creates two kinds of exposure. The relative clause reports the library's defence; the colon defines both kinds.",
            },
            {
              text: "Those who welcome the second change often assume that increased visibility is inherently democratic, although visibility can empower researchers while also depriving the subjects of correspondence of any meaningful control over interpretation.",
              note: "Skeleton: Some people assume visibility is democratic. The although-clause grants a benefit and then limits the assumption with a corresponding cost.",
            },
            {
              text: "What matters is not whether every letter must be cleared individually, but whether the library has established a credible process for hearing objections.",
              note: "The not X but Y frame rejects an impractical test and substitutes a procedural one; the whole sentence defines what matters.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Recover the syntax",
          instructions: "Choose the option that preserves both the proposition and its qualification.",
          items: [
            c(
              "What is the main clause of the first sentence?",
              ["It does not surrender privacy", "The donors never imagined circulation", "One bundle carries dates"],
              0,
              "The first independent clause states the governing proposition; the rest contrasts it with the risk created by open access.",
            ),
            c(
              "Which structure defines the two effects of digitisation?",
              ["A colon followed by two balanced clauses", "A question followed by an answer", "A list of dates"],
              0,
              "The colon introduces preservation benefits and searchability risks as parallel consequences.",
            ),
            c(
              "In the final paragraph, what does ‘the first’ refer to?",
              ["Responsible stewardship", "Open scholarship", "Public accountability"],
              1,
              "The sentence first discusses open scholarship and then responsible stewardship in the same order.",
            ),
            c(
              "Which paraphrase best captures the third paragraph?",
              ["Consent is useless once given", "A process for revisiting permission and hearing objections is more important than clearing every item separately", "Relatives should control the archive"],
              1,
              "The not X but Y construction prioritises a credible, responsive procedure over universal individual clearance.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Parse and paraphrase",
          instructions: "Write a skeleton clause first. Your paraphrase should retain contrast, condition and degree of certainty.",
          items: [
            p(
              "Find the main clause in ‘When a family lends a collection of letters to a public library, it does not surrender the privacy of the people described in them; yet a promise of open access, unless carefully limited, can expose information that the donors never imagined would circulate.’",
              "Model answer: Main clauses: lending does not surrender privacy; open access can expose information. The opening when-clause sets a condition and the unless-clause limits the second claim.",
              "Ignore parenthetical detail until the two main propositions are secure.",
            ),
            p(
              "Paraphrase the digitisation sentence without using the words creates or exposure.",
              "Model answer: Scanning protects fragile originals, but it also makes private contents easier to locate, reproduce and connect with other information.",
              "Keep both the preservation benefit and the informational risk.",
            ),
            p(
              "Rewrite the final sentence as two simpler sentences that preserve its evaluation.",
              "Model answer: Open scholarship loses legitimacy if it disregards the people represented in its evidence. Responsible stewardship becomes evasive if it uses privacy to avoid explaining decisions.",
              "Separate the two subjects but retain their conditional criticisms.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Read to the next full stop—then back",
          text: "When syntax becomes dense, finish the sentence before interpreting a difficult phrase. Next locate the finite verb of each main clause. Only then attach relative clauses, parenthetical comments and trailing qualifications. Meaning often lies in the attachment, not in the unfamiliar word.",
        },
      ],
      quiz: [
        q(1, "Why does the writer say anonymity cannot be secured by removing signatures?", ["Names are the only identifying information.", "Distinctive circumstances can still identify people.", "Dates are always inaccurate."], 1, "The sentence distinguishes nominal anonymity from contextual identifiability."),
        q(2, "What does the phrase ‘mistakes a momentary transaction for a continuing relationship’ imply?", ["Consent should sometimes be revisited as uses and circumstances change.", "A signature has no legal significance.", "Every letter requires separate permission."], 0, "The metaphor critiques a one-off model of consent and supports a continuing process."),
        q(3, "Which word signals that a countervailing point follows?", ["although", "because", "therefore"], 0, "Although introduces the limitation or contrast to the preceding assumption."),
        q(4, "What is the safest way to handle an unfamiliar long sentence?", ["Guess from its first five words", "Translate every clause separately without a skeleton", "Locate main clauses, then attach conditions and qualifications"], 2, "A structural reading prevents local detail from distorting the global relationship."),
      ],
    },
    {
      slug: "academic-abstracts-and-introductions",
      title: "Academic abstracts and introductions",
      summary:
        "Read a compact abstract and a deliberately paced introduction to identify the research gap, contribution, scope and conceptual turn.",
      objective:
        "Extract the research problem, method, finding and limitation from an abstract, then explain how an introduction earns its research question.",
      minutes: 35,
      blocks: [
        {
          type: "passage",
          title: "A fictional article on urban flood memory",
          paragraphs: [
            "Abstract — Urban flood maps commonly present inundation as a static layer, obscuring how official records record some events while silencing others. Drawing on municipal minutes, insurance files and oral histories from three river towns, this study compares the period 1948–1986 and asks whose experience becomes publicly credible. It finds that repeated flooding did not simply produce shared memory: institutional language gradually converted residents' accounts into either preventable household error or evidence for infrastructural investment. The comparison suggests that remembrance is organised by administrative categories rather than reflecting a uniform civic experience. Because the towns differ in size and flood exposure, the findings illuminate mechanisms of selection rather than estimate a general prevalence.",
            "Introductions often begin with a familiar object before making it strange. A flood map appears to answer a simple question: where did the water go? Yet the clean boundary of a shaded area conceals decisions about which datum was trusted, whose measurements counted and whether an unmapped street was forgotten or considered safe. To read the map as neutral information is to mistake the product for the process that made it legible.",
            "Existing research has examined engineering standards and household adaptation, but less attention has been paid to the classification work through which experience becomes an official record. The distinction matters because categories do not merely describe events after they occur; they distribute responsibility. A household coded as unprepared is addressed differently from a neighbourhood designated as structurally vulnerable.",
            "This article follows those categories across archives and interviews. Its contribution is not another inventory of floods, but an account of how administrative language turns contested recollection into apparently settled knowledge. The argument proceeds in three stages: first, the production of municipal records; second, their encounter with oral testimony; and third, the consequences for present-day planning.",
          ],
          glossary: [
            { term: "inundation", meaning: "The covering of land by floodwater." },
            { term: "prevalence", meaning: "How common a phenomenon is within a defined population." },
            { term: "datum", meaning: "A single measured or observed item of information." },
          ],
        },
        {
          type: "table",
          title: "Abstract versus introduction",
          caption: "The abstract compresses the completed argument; the introduction creates the need for one.",
          columns: ["Question", "Abstract signal", "Introduction signal"],
          rows: [
            ["Problem", "Maps obscure selective recording", "The shaded area looks neutral"],
            ["Gap", "Mechanisms of remembrance are under-examined", "Research favours engineering and adaptation"],
            ["Contribution", "Compare three kinds of source", "Track categories across archives and interviews"],
            ["Finding", "Administrative categories organise memory", "Categories distribute responsibility"],
            ["Limit", "Towns differ, so no general prevalence is estimated", "The study follows a defined historical period"],
          ],
        },
        {
          type: "exercise",
          title: "Read for scholarly moves",
          instructions: "Choose the best answer using the abstract and introduction.",
          items: [
            c(
              "What is the article's principal research problem?",
              ["Whether floods have become more frequent", "How official records select and classify remembered experience", "How to design a more attractive map"],
              1,
              "The study concerns the production of credible public memory, not flood frequency or visual design.",
            ),
            c(
              "Which set of sources does the abstract identify?",
              ["Satellite images, newspapers and school textbooks", "Municipal minutes, insurance files and oral histories", "Planning interviews only"],
              1,
              "The abstract explicitly lists all three source types and defines the comparison period.",
            ),
            c(
              "What limitation does the abstract acknowledge?",
              ["The researchers could not read the archives", "No residents were interviewed", "Differences between towns prevent a general prevalence estimate"],
              2,
              "The author limits the findings to mechanisms of selection because the towns vary in size and exposure.",
            ),
            c(
              "What is the introduction's conceptual turn?",
              ["From seeing a map as a product to examining the processes and categories that produced it", "From historical research to engineering design", "From oral testimony to insurance pricing alone"],
              0,
              "The opening defamiliarises the map and reveals it as the outcome of classificatory decisions.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Extract and evaluate the framing",
          instructions: "Use no more than two sentences per task. Compare your version with the model after writing.",
          items: [
            p(
              "Write a four-part abstract note: problem, method, finding, limitation.",
              "Model answer: Problem: flood maps hide selective memory. Method: compare municipal, insurance and oral sources in three towns, 1948–1986. Finding: administrative categories organise remembrance. Limitation: town differences preclude estimating general prevalence.",
              "Keep the method's sources and period distinct from the finding.",
            ),
            p(
              "Explain in one sentence how the introduction establishes a research gap.",
              "Model answer: After showing that maps conceal classificatory choices, the introduction notes that research has focused on engineering and adaptation but neglected how experience becomes an official record.",
              "Name both the established focus and the neglected question.",
            ),
            p(
              "Why is ‘categories distribute responsibility’ a stronger contribution claim than ‘the article studies flood maps’?",
              "Model answer: It states the consequence the article will explain and connects classification to institutional action, whereas the narrower phrase merely names an object.",
              "A contribution should answer what the reader will understand differently.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Read the abstract twice",
          text: "On the first pass, extract background, purpose, method, result and limitation. On the second, inspect hedges such as suggests and may, plus scope words such as three, during and rather than. These small words often determine what the research actually claims.",
        },
      ],
      quiz: [
        q(1, "Which feature belongs to an introduction rather than necessarily to an abstract?", ["A detailed account of why the research question matters", "The final word count", "A complete list of every data item"], 0, "An introduction motivates and contextualises the question; an abstract compresses the whole study."),
        q(2, "What does ‘rather than estimate a general prevalence’ exclude?", ["Any comparison between sources", "A population-wide frequency claim", "Discussion of institutional language"], 1, "The study offers an explanatory mechanism, not a representative rate."),
        q(3, "Why does the writer call the map's shaded area a product?", ["Because it is manufactured paper", "Because it results from decisions about data and classification", "Because it is always inaccurate"], 1, "The product/process distinction concerns how knowledge is produced."),
        q(4, "Which sentence best identifies the contribution?", ["The article will describe every flood after 1948.", "The article shows how administrative categories turn contested recollection into apparently settled knowledge.", "The article argues that oral testimony is always superior."], 1, "This statement names the explanatory claim that distinguishes the article from existing work."),
      ],
    },
  ],
};
