import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1ReadingUnit3: LessonUnit = {
  title: "Context and perspective",
  description:
    "Situate arguments in history and culture, expose framing choices, compare competing accounts and interrogate the rhetoric of data and visual display.",
  lessons: [
    {
      slug: "historical-and-cultural-context",
      title: "Historical and cultural context",
      summary:
        "Interpret a fictional Victorian bath-house debate by connecting language about cleanliness, respectability and expenditure to the institutions of its moment.",
      objective:
        "Use historical context to explain a text's categories and assumptions without treating context as a substitute for close reading.",
      minutes: 35,
      blocks: [
        {
          type: "passage",
          title: "The baths at Bellweather: a fictional council debate, 1888",
          paragraphs: [
            "Councillor Pike opposed the proposed public baths on the grounds that the council was being asked to ‘subsidise idleness’. Working men, he observed, already possessed sufficient opportunities to wash at home. If the borough spent four thousand pounds on marble and hot water, ratepayers would be supporting pleasure under the respectable name of sanitation.",
            "Dr. Vale replied that cleanliness was not an endowment but a public condition. ‘The artisan who shares one room with six others cannot purchase privacy by paying a higher rate,’ she argued. She proposed a smaller building with plentiful wash-basins, separate hours for women and no ornamental fountain. Her amendment carried after two hours of debate, though the final budget still assumed that women would attend only in the afternoon.",
            "The local Gazette supported the baths but warned against ‘encouraging the labouring classes to expect amusement from their betters'. Its editorial praised the medical benefits of washing while objecting to a reading room beside the pools. In the Gazette's vocabulary, sanitation named a duty imposed on residents; amusement named a pleasure they might be tempted to demand.",
            "Read only as a dispute about hygiene, the debate appears to concern cost and disease. Read within a town where working men had recently gained the vote but most working women had not, its language of respectability and separate provision becomes evidence of a struggle over who could appear in public, whose bodies required supervision and what municipal generosity was permitted to mean.",
          ],
          glossary: [
            { term: "ratepayer", meaning: "A person who pays a local property tax." },
            { term: "artisan", meaning: "A skilled manual worker." },
            { term: "ornamental", meaning: "Decorative rather than functional." },
            { term: "provision", meaning: "The supply or arrangement of a service." },
          ],
        },
        {
          type: "rules",
          title: "Context should sharpen the reading",
          items: [
            "Date and institution: identify who can speak, who decides and what body the writer addresses.",
            "Social categories: notice which groups are named as problems, citizens, dependants or moral risks.",
            "Material conditions: connect abstract claims to housing, work, cost and access described or implied by the period.",
            "Historical vocabulary: ask what a term such as sanitation, respectability or leisure would exclude in this setting.",
            "Textual limit: use context to explain tensions, then return to the exact wording that carries them.",
          ],
        },
        {
          type: "exercise",
          title: "Situate the debate",
          instructions: "Choose the reading that integrates context with textual evidence.",
          items: [
            c(
              "Why does Dr. Vale mention sharing one room with six others?",
              ["To argue that all large families are unhealthy", "To show that private washing was not equally available and that sanitation depended on housing conditions", "To request higher water rates for artisans"],
              1,
              "Her reply turns apparently private cleanliness into a question of material access and public responsibility.",
            ),
            c(
              "What does Pike's phrase ‘subsidise idleness’ assume?",
              ["Women should manage the baths", "Public baths are too expensive to build", "Working people use leisure instead of productive work"],
              2,
              "The phrase reframes hygiene provision as support for unproductive pleasure.",
            ),
            c(
              "How does the Gazette distinguish sanitation from amusement?",
              ["By praising one as necessary and fearing the other as a claim on municipal generosity", "By rejecting sanitation and endorsing amusement", "By treating both as engineering terms"],
              0,
              "Its editorial language assigns duty to the working population while resisting their access to pleasure.",
            ),
            c(
              "Why is the unequal voting context relevant?",
              ["It explains why women's access could be discussed and scheduled without their having equal political power", "It proves the baths were free", "It shows that working men controlled every council decision"],
              0,
              "The context clarifies the asymmetry between being targeted by policy and being able to shape it.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Read historically without reducing the text",
          instructions: "Use one contextual fact and one textual feature in every response.",
          items: [
            p(
              "Explain how ‘wash at home’ functions differently for Pike and Vale.",
              "Model answer: For Pike it assumes a private space already available to working households; for Vale, overcrowded housing makes that assumption untenable. The same phrase marks unequal material conditions.",
              "Identify the assumption embedded in each speaker's use of home.",
            ),
            p(
              "What is gained by comparing Dr. Vale's no-ornamental-fountain amendment with the Gazette's reading-room objection?",
              "Model answer: Vale uses functional restraint to defend public hygiene, whereas the Gazette resists intellectual leisure; both debates distinguish legitimate provision from pleasures deemed inappropriate for working residents.",
              "Compare two different boundaries around acceptable public benefit.",
            ),
            p(
              "Write a cautious contextual interpretation of the afternoon-only schedule for women.",
              "Model answer: The schedule may reflect assumptions about women's domestic duties and public visibility, although the excerpt alone cannot establish whether residents requested it or how it was enforced.",
              "State a plausible context and a limit on what the evidence proves.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Avoid the context shortcut",
          text: "‘Because it was written in 1888’ is not an interpretation. Explain which historical condition makes a particular word, contrast or omission significant. Then show how the text uses that condition to persuade, exclude or organise experience.",
        },
      ],
      quiz: [
        q(1, "Which detail most clearly shows the debate was not only about disease?", ["Competing definitions of legitimate municipal spending and leisure", "The price of marble", "The chemistry of hot water"], 0, "Speakers argue about public purpose and social entitlement as well as hygiene."),
        q(2, "What does Dr. Vale's amendment sacrifice?", ["Ornamental display in favour of functional capacity", "All access to hot water", "Separate provision for women"], 0, "She rejects the fountain while retaining basins and separate hours."),
        q(3, "Why might the term ratepayer be ideologically significant?", ["It defines membership in the public partly through tax contribution, potentially marginalising those with little property.", "It refers only to medical doctors.", "It means anyone who uses a bath."], 0, "The category shapes whose interests count in a funding decision."),
        q(4, "What is the strongest contextual question to ask next?", ["Whether the council used modern typography", "Which residents could vote, organise and challenge the schedule", "How many words the Gazette printed"], 1, "Political access helps explain whose preferences were represented in policy."),
      ],
    },
    {
      slug: "ideology-and-framing",
      title: "Ideology and framing",
      summary:
        "Analyse how a disaster-recovery editorial turns structural inequality into a story of individual resilience and community spirit.",
      objective:
        "Identify framing devices, naturalised assumptions and excluded questions, then construct an alternative frame without denying the evidence.",
      minutes: 36,
      blocks: [
        {
          type: "passage",
          title: "The resilient neighbourhood: a fictional editorial",
          paragraphs: [
            "When floodwater receded from the Rows, neighbours did what neighbours have always done: they carried, cleaned, cooked and comforted. Their response confounded those who predicted panic. What outsiders mistook for a broken community was in fact a community discovering its strength. The Rows should be remembered not as a place of loss but as a demonstration of what ordinary people can achieve together.",
            "The recovery plan builds on this asset. Rather than waiting for outside intervention, residents will be offered workshops on budgeting, insurance and ‘adaptive living'. These practical programmes recognise that hardship can become an opportunity to develop useful habits. The council's role is to unlock local capacity, not to create a culture in which support begins with an expectation of assistance.",
            "Of course, insurance does not replace possessions, and a workshop cannot raise a floor that has subsided. Yet resilience is more than a financial category. It is the willingness to begin again, the network of familiar faces at a temporary centre and the knowledge that no one must face the morning alone. Residents who report continuing distress should therefore be encouraged to draw on these community strengths.",
            "Critics who demand comprehensive compensation risk prolonging the very dependency the flood has challenged us to overcome. A fair settlement must recognise hardship, certainly, but it must also look forward. The Rows do not need to be preserved as a monument to damage; they need to be rebuilt as a confident, enterprising district.",
          ],
          glossary: [
            { term: "resilience", meaning: "The capacity to recover or adapt after difficulty." },
            { term: "naturalise", meaning: "Present a historically contingent arrangement as normal or inevitable." },
            { term: "subsided", meaning: "Sunk or settled to a lower level." },
            { term: "compensation", meaning: "Payment or remedy for loss or harm." },
          ],
        },
        {
          type: "table",
          title: "What the frame makes visible and invisible",
          caption: "Frames do not simply select topics; they assign causes, agency and moral status.",
          columns: ["Editorial frame", "Visible", "Obscured", "Assumption"],
          rows: [
            ["Neighbours as heroes", "Mutual aid", "Unequal access to transport and savings", "Community action can replace institutional duty"],
            ["Hardship as opportunity", "Workshops and habits", "Damaged homes and interrupted work", "Adaptation is primarily an individual skill"],
            ["Outside intervention as dependency", "Local agency", "Residents' entitlement to public remedy", "Accepting support weakens character"],
            ["Looking forward", "Rebuilding and enterprise", "Accountability for loss", "A better future requires leaving claims behind"],
          ],
        },
        {
          type: "exercise",
          title: "Expose the frame",
          instructions: "Choose the option that best identifies the ideological work of the passage.",
          items: [
            c(
              "What does ‘a community discovering its strength’ imply?",
              ["The community lacked agency before the flood", "Mutual aid is the only evidence that residents suffered", "The flood improved residents' character"],
              0,
              "The discovery narrative implies that capacity was previously hidden or absent, shifting attention from structural exposure.",
            ),
            c(
              "How are budgeting workshops framed?",
              ["As evidence that recovery fails without expert engineers", "As a way to convert institutional obligations into individual responsibility", "As a replacement for emergency shelters"],
              1,
              "The recommendation locates adaptive capacity in residents' habits rather than in housing or compensation policy.",
            ),
            c(
              "Which sentence acknowledges evidence that challenges the dominant frame?",
              ["The Rows should be remembered not as a place of loss", "Critics risk prolonging dependency", "A workshop cannot raise a floor that has subsided"],
              2,
              "The concession names a material problem, but the next move subordinates it to psychological resilience.",
            ),
            c(
              "What is the most fundamental hidden assumption?",
              ["Floods are caused by individual behaviour", "Residents should pay for every public service", "Community solidarity can legitimately substitute for structural remedy and compensation"],
              2,
              "The conclusion treats social bonds as grounds for refusing a fuller institutional response.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Reframe without denying experience",
          instructions: "A responsible alternative should retain evidence of mutual aid while changing the distribution of agency and responsibility.",
          items: [
            p(
              "Identify one binary opposition and explain what it excludes.",
              "Model answer: The opposition between dependency and resilience excludes forms of justified reliance on public institutions and treats residents' need for compensation as a character defect.",
              "Name both poles and the missing middle category.",
            ),
            p(
              "Write an alternative opening that retains the evidence of neighbours helping one another.",
              "Model answer: Neighbours carried, cleaned and comforted one another, revealing both strong community ties and the scale of work left to households after institutional protection failed.",
              "Keep mutual aid, but stop using it to cancel material loss.",
            ),
            p(
              "Formulate two questions the editorial avoids and one limitation of your alternative frame.",
              "Model answer: Avoided questions: Why were these homes exposed to subsidence, and what compensation is owed? Limitation: a structural frame should not minimise residents' agency or assume every intervention will work equally well.",
              "Ask about causes and duties, then test your own frame.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Frames allocate responsibility",
          text: "When a text praises resilience, ask what happened immediately before the praise and what remedy is being refused. Ideological analysis is strongest when it identifies the distribution of agency and burden, rather than merely attaching a political label to an article.",
        },
      ],
      quiz: [
        q(1, "What does ‘look forward’ rhetorically achieve?", ["It establishes a legal deadline", "It presents compensation and accountability as obstacles to progress", "It proves rebuilding has begun"], 1, "The phrase makes backward-looking claims for remedy appear psychologically or socially unhelpful."),
        q(2, "Why can praising mutual aid obscure inequality?", ["It can celebrate collective survival while diverting attention from unequal resources and public obligations.", "Mutual aid never exists in unequal communities.", "It proves everyone lost the same amount."], 0, "Solidarity and structural disadvantage can coexist."),
        q(3, "Which question most directly tests the resilience frame?", ["How many workshops will be available?", "What institutional failures or exposures made household adaptation necessary?", "Will the workshops include lunch?"], 1, "The question shifts from individual adaptation to the conditions producing harm."),
        q(4, "What is a sound first step in analysing ideology?", ["Reject every text with a value judgment", "Identify how language assigns causes, agency and legitimate claims", "Count the number of technical terms"], 1, "Ideology becomes visible through the categories and relationships a frame normalises."),
      ],
    },
    {
      slug: "comparing-perspectives-across-sources",
      title: "Comparing perspectives across sources",
      summary:
        "Compare three original accounts of a contested museum acquisition, separating agreement on events from disagreement about meaning and legitimacy.",
      objective:
        "Construct a comparison matrix of claim, evidence, interest and silence, then explain why sources may disagree without one being simply false.",
      minutes: 34,
      blocks: [
        {
          type: "passage",
          title: "The Harrow collection: three fictional voices",
          paragraphs: [
            "Source A — Founder's letter, 1912: ‘I give these carvings to the city so that working people may encounter beauty formerly reserved for the wealthy collector. The glass roof will make the gallery a public palace, and schoolchildren will learn that civilisation belongs to everyone. I ask only that my name remain above the door.’",
            "Source B — Council minutes, 1913: ‘The donor requires perpetual display and free public entry. Although the upper room is damp and the roof requires immediate repair, the committee judges that the collection's educational value outweighs the cost. The name plaque will be installed at a cost of £180, while the school-visit programme is deferred until funds permit.’",
            "Source C — Local newspaper editorial, 1914: ‘The new gallery has given the city a splendid façade and a generous benefactor. Whether the carvings teach children or merely impress passing adults remains to be seen. Still, a town that can display such treasures plainly believes in its own future.’",
            "Later archival note, 1986: The glass roof was replaced in 1934; free entry was suspended between 1951 and 1962; school visits became regular in 1978. The founder's name remains above the door. No record consulted for this note explains how the objects were acquired before 1912.",
          ],
          glossary: [
            { term: "benefactor", meaning: "A person who gives money or property for a public benefit." },
            { term: "perpetual", meaning: "Continuing indefinitely." },
            { term: "facade", meaning: "The front or outward appearance of a building or institution." },
            { term: "archival", meaning: "Relating to records kept for historical research." },
          ],
        },
        {
          type: "table",
          title: "Compare positions, not just facts",
          caption: "Sources can agree that a gallery exists while evaluating its purpose differently.",
          columns: ["Source", "Primary purpose", "Value emphasised", "Possible interest", "Significant silence"],
          rows: [
            ["Founder", "Democratic access to beauty", "Education and public ownership", "Legacy and name above the door", "Provenance of the carvings"],
            ["Council", "Secure and display the gift", "Educational value despite repair costs", "Budget and donor conditions", "Deferred access for schoolchildren"],
            ["Newspaper", "Celebrate civic improvement", "Prestige and confidence", "Local boosterism", "Condition, access and acquisition"],
            ["Later note", "Record changes over time", "Continuity interrupted by practical limits", "Institutional administration", "Pre-1912 ownership history"],
          ],
        },
        {
          type: "exercise",
          title: "Compare the accounts",
          instructions: "Choose the answer that distinguishes overlap, perspective and evidential limitation.",
          items: [
            c(
              "What do all three contemporary sources broadly accept?",
              ["The gallery has public and civic value", "School visits began immediately", "The objects were acquired ethically"],
              0,
              "Each source recognises some public value, though they emphasise education, administration or prestige differently.",
            ),
            c(
              "Where does the founder's claim of access meet a complication?",
              ["The council defers school visits and later entry is temporarily suspended", "The gallery is immediately demolished", "The newspaper refuses to mention it"],
              0,
              "The institutional and later records qualify the promise by showing restrictions in practice.",
            ),
            c(
              "Why does the £180 plaque figure matter?",
              ["It reveals a hierarchy of spending: commemoration is funded while educational access is deferred", "It proves the carvings were free", "It is the total cost of the gallery"],
              0,
              "The juxtaposition makes a claim about priorities rather than merely reporting expense.",
            ),
            c(
              "What is the most responsible conclusion about provenance?",
              ["The founder stole the carvings", "The sources prove the objects were public before 1912", "The collection's earlier ownership remains unestablished in the material supplied"],
              2,
              "The archival note explicitly identifies a gap; absence of evidence does not prove misconduct.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a comparative reading",
          instructions: "Use at least two sources in each response and distinguish what each source can establish.",
          items: [
            p(
              "Compare the founder's educational claim with the council's spending decision.",
              "Model answer: The founder presents education as the gift's purpose, but the council funds a commemorative plaque while deferring school visits, revealing a tension between declared mission and institutional priority.",
              "Put a claim and a practice in direct relation.",
            ),
            p(
              "Explain why the newspaper's ‘local boosterism’ is a perspective rather than proof of factual error.",
              "Model answer: The editorial foregrounds civic pride and remains cautious about educational outcomes; it may accurately describe the façade while selectively valuing prestige over access and condition.",
              "Separate selection and evaluation from demonstrable inaccuracy.",
            ),
            p(
              "Write a two-sentence synthesis that accounts for the 1986 note without overstating provenance.",
              "Model answer: The later record shows that the ideal of free public education was realised unevenly through suspension, delayed investment and eventual regular visits. It also leaves pre-1912 ownership unresolved, so the gallery's democratic self-description cannot settle the collection's earlier history.",
              "Use change over time as evidence and preserve the gap.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Compare at the same level",
          text: "Do not ask only whether sources agree. Ask what each is trying to do, which audience it addresses, what evidence it selects and whose interests or silences its form reveals. Provenance, purpose and practical access are different questions and may require different sources.",
        },
      ],
      quiz: [
        q(1, "Which source provides the clearest evidence of a spending priority?", ["The founder's letter", "The council minutes", "The later archival note"], 1, "The minutes place plaque expenditure and deferred school visits in the same administrative record."),
        q(2, "What does the newspaper's phrase ‘whether … remains to be seen’ do?", ["It introduces uncertainty about educational impact while supporting civic pride.", "It proves the gallery failed.", "It rejects the founder's gift entirely."], 0, "The editorial combines qualified evaluation with boosterism."),
        q(3, "What can the later note establish about access?", ["Free entry was continuous from 1912.", "Public entry was suspended for a period and school visits became regular later.", "All visitors paid from the beginning."], 1, "The note records specific changes over time."),
        q(4, "How should a reader use the provenance gap?", ["Infer theft without evidence", "Ignore acquisition entirely", "State a research question and seek evidence appropriate to answering it"], 2, "A documented absence of records identifies a limit and a next investigative step."),
      ],
    },
    {
      slug: "reading-data-and-visual-argument",
      title: "Reading data and visual argument",
      summary:
        "Interrogate a library report whose truncated chart and selective metric present a modest in-person change as institutional collapse.",
      objective:
        "Check denominators, baselines and definitions, calculate relative change and explain how visual design can magnify or minimise an argument.",
      minutes: 37,
      blocks: [
        {
          type: "passage",
          title: "The library in free fall? A fictional annual report",
          paragraphs: [
            "The city's flagship library faces a crisis of confidence. New figures show that in-person visits increased by only four per cent last year, a rate the trustees describe as ‘barely distinguishable from stagnation'. The accompanying chart makes the sluggish performance painfully clear: the second bar rises only slightly above the first, despite an already alarming vertical scale.",
            "Digital borrowing, the report concedes, rose from thirty thousand to sixty thousand loans. Yet the trustees caution that online activity is not equivalent to the ‘authentic library experience'. They therefore base the headline judgement on physical entry, arguing that a building cannot be judged by services that take place beyond its walls.",
            "A fuller reading complicates the picture. In-person visits rose from 120,000 to 124,800, while total recorded use, including digital loans, increased from 150,000 to 184,800. The definition of use is imperfect: a digital loan and a visit are not identical units. Nevertheless, excluding the fastest-growing service from the headline measure is a choice that requires justification.",
            "The chart compounds the problem. Its vertical axis begins at 100,000 rather than zero, so the four-per-cent increase occupies a large share of the visible height. This does not make the numbers false, but it makes small differences look dramatic. Readers should ask not only whether a graph is accurate, but what comparison it invites and which conclusion its design makes easiest to draw.",
          ],
          glossary: [
            { term: "denominator", meaning: "The total or baseline used in calculating a proportion or rate." },
            { term: "truncated", meaning: "Cut short, as when a chart axis starts above zero." },
            { term: "baseline", meaning: "The initial value or reference point for comparison." },
            { term: "metric", meaning: "A measure chosen to represent performance or change." },
          ],
        },
        {
          type: "table",
          title: "Reported library use",
          caption: "The totals combine different kinds of activity; they indicate reach, not a single uniform experience.",
          columns: ["Measure", "2024", "2025", "Absolute change", "Relative change"],
          rows: [
            ["In-person visits", "120,000", "124,800", "+4,800", "+4%"],
            ["Digital loans", "30,000", "60,000", "+30,000", "+100%"],
            ["Total recorded use", "150,000", "184,800", "+34,800", "+23.2%"],
          ],
        },
        {
          type: "exercise",
          title: "Audit the visual argument",
          instructions: "Use the passage and table. Choose the answer that checks the calculation and the rhetoric.",
          items: [
            c(
              "How is the four-per-cent figure calculated?",
              ["4,800 divided by the 2024 baseline of 120,000", "4,800 divided by the 2025 total", "124,800 divided by 30,000"],
              0,
              "Percentage change uses the original value as the baseline: 4,800 / 120,000 = 4%.",
            ),
            c(
              "What is the main effect of beginning the chart axis at 100,000?",
              ["It makes the modest in-person increase appear visually dramatic", "It changes the underlying figures", "It demonstrates that digital borrowing fell"],
              0,
              "Truncating the baseline magnifies the visible bar-height difference without altering the values.",
            ),
            c(
              "Why is ‘authentic library experience’ contestable?",
              ["It defines success in a way that excludes digital users and requires normative justification", "It is a precise statistical category", "It proves online loans are not recorded"],
              0,
              "The term embeds a value judgment about legitimate use rather than merely naming a measurable unit.",
            ),
            c(
              "What is the most cautious synthesis of the data?",
              ["The library is dying", "The in-person figure rose slowly while digital borrowing doubled; overall recorded use grew, though the combined metric has limits", "Digital loans equal visits exactly"],
              1,
              "The synthesis retains the distinct trends and acknowledges that unlike activities cannot be treated as identical.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Interrogate the evidence",
          instructions: "Show calculations where requested and distinguish mathematical validity from rhetorical framing.",
          items: [
            p(
              "Calculate the absolute and percentage growth in total recorded use.",
              "Model answer: The increase is 34,800; 34,800 / 150,000 × 100 = 23.2 per cent. This is growth in combined recorded activity, not in one homogeneous form of use.",
              "Use the original total as the denominator.",
            ),
            p(
              "Rewrite the report's opening without changing the underlying figures.",
              "Model answer: In-person visits rose by four per cent to 124,800, while digital loans doubled to 60,000; total recorded use increased by 23.2 per cent, although the categories measure different activities.",
              "Replace evaluation with transparent description before offering interpretation.",
            ),
            p(
              "Name two further questions needed before declaring success or failure.",
              "Model answer: What were the service costs, and how did reach vary across neighbourhoods and user groups? Outcomes such as learning, access and waiting times would also be needed; activity alone does not establish institutional value.",
              "Consider efficiency, distribution and outcomes beyond volume.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Read the axis before the headline",
          text: "A chart can be numerically correct and rhetorically misleading. Check the baseline, units, denominator, time period and selection of comparison. Then distinguish a visual exaggeration from an actual error: the first changes emphasis, while the second changes the information.",
        },
      ],
      quiz: [
        q(1, "Which change is largest in relative terms?", ["In-person visits: 4%", "Digital loans: 100%", "Total recorded use: 23.2%"], 1, "Digital loans doubled, giving the largest percentage increase."),
        q(2, "Why can total recorded use not be treated as a single uniform outcome?", ["It combines visits and loans, which are different activities and may serve different needs.", "It includes two years.", "The values are too large."], 0, "Aggregation increases interpretability only when the limits of the combined units are acknowledged."),
        q(3, "What would be the fairest way to display the in-person change?", ["Remove the axis entirely", "Use a clearly labelled zero baseline and annotate the exact 4% increase", "Change the figures to create a larger difference"], 1, "Transparent scaling preserves the modest scale of the change."),
        q(4, "Which statement best distinguishes data from argument?", ["The data show that digital services should replace buildings.", "The figures report activity; the claim that physical entry is the only authentic measure adds a value judgment.", "A percentage has no rhetorical effects."], 1, "Measurement and interpretation are connected but not identical."),
      ],
    },
  ],
};
