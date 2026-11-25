import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2ReadingUnit2: LessonUnit = {
  title: "Advanced argument",
  description:
    "Follow recursive argument, expose the premises that naturalise social arrangements, analyze public rhetoric and translate between disciplinary habits of evidence.",
  lessons: [
    {
      slug: "the-structure-of-complex-arguments",
      title: "The structure of complex arguments",
      summary:
        "Reconstruct a philosophical essay that defends inconvenience by challenging several different meanings of friction, then reconsiders its own position.",
      objective:
        "Map recursive levels of argument, distinguish instrumental and intrinsic objections and evaluate a dialectical concession.",
      minutes: 38,
      blocks: [
        {
          type: "passage",
          title: "In praise of the awkward",
          paragraphs: [
            "The frictionless city is usually described as a moral achievement. Doors anticipate us, queues dissolve into reservations, and administrative systems remember our preferences so that we need not repeat ourselves. Against this vision I argue that some friction is not a defect to be engineered away but a condition of shared agency. This is not a defence of needless delay; it is a challenge to the assumption that every reduction in effort produces an equivalent increase in freedom.",
            "The argument requires a distinction. Friction may obstruct action, as when an inaccessible transport system prevents a person from reaching work. Or it may make action answerable to others, as when a permit process requires neighbours to hear and contest a development. The first kind narrows agency; the second can constitute it. Any policy of friction reduction must therefore identify whose movement is eased, which relations are weakened and whether the affected parties retain a voice.",
            "One might object that deliberative procedures simply transfer delay to those with the least time. This is a serious objection, not a misunderstanding. A community meeting can reproduce the convenience of the already articulate; a cumbersome appeal may protect property while exhausting a tenant. If my argument rests on idealised participation, it deserves the accusation of privilege. Convenience for the powerful cannot be disguised as civic friction for all.",
            "Yet the objection establishes a need for distributive design, not for the disappearance of answerability. A process can be made accessible without becoming automatic: interpreters, paid time, open records and binding reasons may reduce exclusion while preserving contestation. The strongest position is therefore neither frictionless administration nor deliberative purity. It is selective friction—retained where it sustains accountability and redesigned where it merely reproduces advantage.",
            "This conclusion does not end the inquiry. It relocates it to institutions and to the empirical question of which designs actually share power. Until that question is answered, the demand for convenience remains as incomplete as the demand for participation. The task is not to choose a side in a simple opposition, but to specify the social relation that each friction serves.",
          ],
          glossary: [
            { term: "agency", meaning: "The capacity to act meaningfully and influence outcomes." },
            { term: "dialectical", meaning: "Developing an argument through contradiction, response and revision." },
            { term: "answerability", meaning: "The obligation to explain and justify actions to others." },
            { term: "distributive", meaning: "Concerned with how burdens and benefits are allocated across people." },
          ],
        },
        {
          type: "table",
          title: "The argument's recursive structure",
          caption: "Each level narrows the thesis rather than merely repeating it.",
          columns: ["Level", "Move", "Function"],
          rows: [
            ["Initial thesis", "Some friction is a condition of shared agency", "Rejects a simple equation of ease with freedom"],
            ["Conceptual distinction", "Obstruction versus answerability", "Prevents one term from doing incompatible work"],
            ["Policy implication", "Identify whose movement and whose voice", "Turns definition into an evaluative test"],
            ["Strong objection", "Deliberation burdens those with least time", "Challenges the social distribution of the proposal"],
            ["Concession", "Idealised participation may reproduce privilege", "Accepts that the argument requires distributional correction"],
            ["Reconstructed thesis", "Selective, accessibly designed friction", "Retains accountability while rejecting deliberative purity"],
            ["New inquiry", "Which institutional designs share power?", "Marks the empirical question left open"],
          ],
        },
        {
          type: "exercise",
          title: "Reconstruct the reasoning",
          instructions: "Choose the option that identifies the logical level and its consequence.",
          items: [
            c(
              "Why does the essay distinguish obstruction from answerability?",
              ["Because frictionless and friction-producing arrangements can have opposite effects on agency", "Because all delays have the same moral value", "Because permits always work efficiently"],
              0,
              "The distinction prevents inconvenience from being treated as a single uniform good or bad.",
            ),
            c(
              "What is the strongest objection's target?",
              ["The value of shared agency itself", "The assumption that participation is equally accessible and therefore fairly distributes delay", "The existence of community meetings"],
              1,
              "The objection challenges who bears the cost of procedures defended in the name of collective agency.",
            ),
            c(
              "Why does the essay call for ‘distributive design’?",
              ["To eliminate every form of friction", "To retain answerability while reducing the unequal burden of participation", "To prove that procedures are always neutral"],
              1,
              "The concession transforms the original claim into a question of fair institutional design.",
            ),
            c(
              "What is the function of the final paragraph?",
              ["It abandons the thesis", "It relocates the unresolved problem from definition to empirical institutional analysis", "It proves all convenience is harmful"],
              1,
              "The ending preserves the revised position while specifying the inquiry still required.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Argue dialectically",
          instructions: "Preserve each level of the essay's reasoning in your response.",
          items: [
            p(
              "State the thesis, its key distinction and its strongest objection in three sentences.",
              "Model answer: Some friction sustains shared agency, but obstruction differs from answerability because one restricts action and the other makes it contestable. The strongest objection is that procedures framed as collective can transfer delay onto people with the least time. The essay must therefore justify not only the value of participation but its distribution.",
              "Do not collapse objection and rebuttal into one sentence.",
            ),
            p(
              "Explain how interpreters and paid time answer the objection without abandoning friction.",
              "Model answer: They reduce the unequal cost of participation while retaining occasions on which people can question and influence decisions; this separates accessible contestation from friction as mere burden.",
              "Name the retained good and the removed disadvantage.",
            ),
            p(
              "Write a two-sentence counter-objection to ‘selective friction’ and a qualified reply.",
              "Model answer: A critic might argue that any designer who decides which friction counts as accountable can encode existing power under a neutral label. The reply is that the decision itself must be contestable and supported by evidence about voice, outcomes and burden, rather than entrusted to an unaccountable expert.",
              "Address governance as well as institutional performance.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Do not mistake the first thesis for the final one",
          text: "Complex arguments often define their terms, encounter an objection and then reconstruct the claim. Track the object of each objection: is it a definition, an empirical assumption, a value or a distribution of cost? Your map should show how the reply changes the original position.",
        },
      ],
      quiz: [
        q(1, "What does ‘recursive’ mean in this argument?", ["Each objection sends the claim back to a deeper definition, distribution or evidence question", "The essay repeats itself without change", "Every sentence is a question"], 0, "The argument revises its own premises as it develops."),
        q(2, "Why is deliberative purity rejected?", ["Because it assumes accessible participation without confronting unequal time, resources and voice", "Because deliberation has no possible value", "Because meetings are always illegal"], 0, "The essay rejects an idealised practice, not collective accountability."),
        q(3, "What kind of claim is ‘whose movement is eased’?", ["A syntactic observation", "A distributive evaluative question", "A measurement of friction"], 1, "It asks how an arrangement allocates convenience and burden."),
        q(4, "What remains unresolved at the end?", ["Whether friction exists", "Whether shared agency matters at all", "Which institutional designs actually distribute power fairly"], 2, "The final paragraph identifies an empirical and institutional inquiry rather than closing the issue."),
      ],
    },
    {
      slug: "ideology-and-hidden-assumptions",
      title: "Ideology and hidden assumptions",
      summary:
        "Expose how a fictional apprenticeship manifesto naturalises unequal access, separates ambition from material support and presents unpaid exposure as neutral opportunity.",
      objective:
        "Identify naturalised categories, missing alternatives and a chain of assumptions that converts structural advantage into apparently individual merit.",
      minutes: 36,
      blocks: [
        {
          type: "passage",
          title: "The open door: a fictional apprenticeship manifesto",
          paragraphs: [
            "The creative industries suffer from too many gatekeepers and too little hunger. Our fellowship removes the gate entirely: twelve weeks, no tuition, no prior credential, access to the people who make decisions. Applicants need only commitment, curiosity and the willingness to begin. In a society quick to excuse hesitation, the open door is a test of who is prepared to walk through it.",
            "Of course, an unpaid fellowship is not for everyone. That is precisely why selection matters. We look beyond polished applications to identify raw promise in candidates whose circumstances have not allowed them to acquire the usual signals. Mentors donate their time because they remember the uncertainty of beginning; hosts accept fellows because ambition, unlike inherited advantage, renews an industry.",
            "Critics complain that participants must cover living costs. They mistake the purpose of the programme for a salary. The fellowship offers something more durable: exposure, relationships and the chance to prove that talent does not require permission. Those who cannot manage the financial commitment may apply again when their circumstances are more secure, provided that the age limit has not passed.",
            "The programme is a ladder, not a lift. Every rung must be climbed, and no one should confuse the availability of the ladder with a promise to carry them. Our responsibility is to make the first step visible; the fellow's responsibility is to make the most of it. In this division, opportunity remains genuine because it demands something of the person who receives it.",
          ],
          glossary: [
            { term: "credential", meaning: "A qualification or record used to demonstrate ability." },
            { term: "naturalise", meaning: "Present a contingent social arrangement as inevitable or normal." },
            { term: "inherited advantage", meaning: "Benefits transmitted through family wealth, networks or status." },
            { term: "age limit", meaning: "A restriction on the age of eligible participants." },
          ],
        },
        {
          type: "rules",
          title: "Follow the assumption chain",
          items: [
            "Category: what does the text count as hunger, commitment, polish or raw promise, and who defines those terms?",
            "Comparison: which groups become the norm against which others appear deficient?",
            "Conversion: how does a material condition become a judgment about character?",
            "Causality: what outcome is attributed to individual attitude rather than access or resources?",
            "Legitimation: which metaphor—open door, ladder, test—makes the arrangement appear natural or fair?",
          ],
        },
        {
          type: "exercise",
          title: "Uncover the hidden premises",
          instructions: "Choose the analysis that identifies the ideological operation rather than merely objecting to the policy.",
          items: [
            c(
              "What does ‘a society quick to excuse hesitation’ assume?",
              ["All creative work requires hesitation", "Non-participation reflects weak character rather than constrained circumstances", "The fellowship has no selection process"],
              1,
              "The sentence attributes inability to enter the programme to personal disposition before examining material barriers.",
            ),
            c(
              "How does ‘raw promise’ function?",
              ["It refers to a standardised test score", "It guarantees objective selection", "It gives selectors power to recognise worth while claiming to bypass established signals"],
              2,
              "The term suggests intuitive fairness while concealing discretion and the criteria of recognition.",
            ),
            c(
              "What contradiction does the age limit introduce?",
              ["The advice to apply later when financially secure may be impossible for older excluded candidates", "Fellows must be children", "The programme lasts twelve years"],
              0,
              "The condition combines waiting for resources with a deadline that waiting may make them miss.",
            ),
            c(
              "What does the ladder metaphor accomplish?",
              ["It represents access as individual effort while obscuring who controls the rungs and who can afford the climb", "It proves the programme is free", "It eliminates competition"],
              0,
              "The metaphor allocates responsibility to the climber and institutional responsibility to visibility alone.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Rewrite the premise",
          instructions: "Your alternative should address access and selection rather than merely reversing the manifesto's values.",
          items: [
            p(
              "Write the hidden causal chain from unpaid participation to supposed merit.",
              "Model answer: The manifesto assumes that unpaid participation signals commitment, that commitment predicts future contribution and that those unable to participate lack commitment; each step conflates available resources with personal qualities.",
              "Separate the observation from the causal and character judgments.",
            ),
            p(
              "Reframe ‘exposure’ without denying its potential value.",
              "Model answer: Exposure may help candidates understand professional networks, but its value depends on whether those networks recognise them as future colleagues rather than as temporary sources of labour.",
              "Preserve a possible benefit while specifying unequal recognition.",
            ),
            p(
              "Write a two-sentence alternative statement of programme responsibility.",
              "Model answer: If the programme treats financial independence as an entrance condition, it selects for existing resources rather than commitment alone. A credible commitment to raw promise requires funded participation, transparent selection and an age policy that does not penalise the time needed to become financially secure.",
              "Turn the critique into testable design conditions.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Look for the bridge from fact to value",
          text: "Ideological arguments often begin with a real fact—unpaid opportunities exist, ambition matters—and then add an unexamined bridge from fact to desert. Identify the exact sentence where access becomes character or where responsibility shifts from institution to individual.",
        },
      ],
      quiz: [
        q(1, "Why is ‘open door’ ideologically charged?", ["It equates formal availability with equal access while leaving material barriers intact", "Doors cannot be opened", "The programme charges tuition"], 0, "The metaphor highlights formal entry while obscuring conditions of passage."),
        q(2, "What does ‘no prior credential’ genuinely challenge?", ["The requirement for a formal qualification", "All forms of existing advantage", "The need for any selection"], 0, "It removes one gate but does not eliminate wealth, networks or time."),
        q(3, "Which assumption is most important to test?", ["Whether hosts own doors", "That financial capacity reliably indicates commitment", "Whether fellows can read"], 1, "This is the hidden bridge between resources and merit."),
        q(4, "What makes the alternative analysis persuasive?", ["It rejects every opportunity", "It accepts possible value while specifying conditions needed for fair access", "It treats selectors as infallible"], 1, "A strong critique distinguishes the mechanism from the stated ideal."),
      ],
    },
    {
      slug: "rhetorical-analysis-of-prose",
      title: "Rhetorical analysis of prose",
      summary:
        "Analyse a ceremonial eulogy for a demolished bypass, where public grief, civic boosterism and private irritation compete within elaborate prose.",
      objective:
        "Identify ethos, pathos and logos, explain anaphora and antithesis, and assess how audience and occasion shape a speaker's strategic self-presentation.",
      minutes: 35,
      blocks: [
        {
          type: "passage",
          title: "Eulogy for the East Bypass",
          paragraphs: [
            "We gather not to mourn a road, but to honour the journeys that a road makes possible. We gather because the East Bypass carried our children to examinations, our produce to market and our complaints to distant offices. We gather because a structure of concrete, however unprepossessing, can become a vessel of collective memory.",
            "For forty-three years it divided the town, and for forty-three years it joined us to the world. It shortened distances and lengthened debates. It taught the impatient motorist patience and the impatient councillor that public consultation is not a formality. If progress has a grammar, the bypass taught us the comma: pause, consider, then proceed.",
            "Some will say that a bypass is merely infrastructure, that attachment is sentimentality and that nostalgia has no place in a forward-looking budget. To them I reply: name one public building that has carried more of our impatience at less cost. The new bridge will be quieter, cleaner and entirely admirable. It will also lack the singular distinction of having been despised by every generation that used it.",
            "So let us lower the first cone with ceremony. Let the engineers keep the plans, the archaeologists keep the soil and the rest of us keep the memory of horns beneath our windows. We did not love the bypass wisely, perhaps, but we loved it usefully. And in an age devoted to improvement, there is something to be said for remembering what improvement displaced.",
          ],
          glossary: [
            { term: "ethos", meaning: "The speaker's constructed character or credibility." },
            { term: "pathos", meaning: "An appeal to the audience's emotions or shared experience." },
            { term: "anaphora", meaning: "Repetition of a word or phrase at the beginnings of successive clauses." },
            { term: "antithesis", meaning: "A contrast of ideas or phrases in a balanced structure." },
          ],
        },
        {
          type: "table",
          title: "Rhetoric in the eulogy",
          caption: "The speaker's public role shapes which claims can be made directly and which must be softened or indirection.",
          columns: ["Strategy", "Textual example", "Audience effect", "Tension"],
          rows: [
            ["Anaphora", "We gather because…", "Builds collective identity through rhythmic inclusion", "Excludes those who did not experience the same journeys"],
            ["Antithesis", "divided … and … joined us", "Holds irritation and attachment together", "Turns contradiction into civic wisdom"],
            ["Metaphor", "vessel of collective memory", "Elevates infrastructure into shared heritage", "May conceal unequal experience of traffic"],
            ["Logos", "carried more … at less cost", "Defends significance through comparative utility", "The comparison remains undefined"],
            ["Pathos", "horns beneath our windows", "Invokes intimate irritation as belonging", "Makes noise sound nostalgic after removal"],
            ["Irony", "loved it usefully", "Qualifies attachment while preserving it", "Undermines the ceremony it also performs"],
          ],
        },
        {
          type: "exercise",
          title: "Analyze the public voice",
          instructions: "Choose the answer that accounts for rhetorical purpose and irony.",
          items: [
            c(
              "What is the immediate effect of repeating ‘We gather’?",
              ["It constructs a unified civic audience and gives the speech a ceremonial rhythm", "It proves every resident agrees", "It provides technical traffic data"],
              0,
              "Anaphora produces solidarity rhetorically; it does not establish literal consensus.",
            ),
            c(
              "Why does the comma metaphor matter?",
              ["It reframes delay as a productive part of civic judgment and flatters the audience's deliberative self-image", "It explains road construction in technical detail", "It announces a new grammar rule"],
              0,
              "The metaphor elevates inconvenience caused by the bypass into a civic virtue.",
            ),
            c(
              "How does the speaker address those who reject nostalgia?",
              ["By accepting their definition of infrastructure and abandoning the ceremony", "By conceding the new bridge's merits while asserting the old road's distinctive use", "By insulting their budget"],
              1,
              "The reply uses concession and comparative praise rather than simply denying progress.",
            ),
            c(
              "What is the final irony?",
              ["The eulogy celebrates a road associated with impatience and noise, values supposedly opposite to improvement", "The engineers have no plans", "The town never used the bypass"],
              0,
              "The closing revalues the very inconveniences a modernising budget would remove.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Read the ceremony against itself",
          instructions: "Consider both the speaker's persuasive skill and the interests the speech leaves unrepresented.",
          items: [
            p(
              "Write a three-part appeal map: ethos, pathos and logos.",
              "Model answer: Ethos: the speaker appears as a measured civic witness who can acknowledge disgust and attachment. Pathos: examinations, market journeys and window-side horns evoke shared memory. Logos: the claim that the bypass served public utility at low cost competes with the new bridge's technical advantages.",
              "Identify how each appeal is constructed, not merely named.",
            ),
            p(
              "Analyse one antithesis as an argument rather than as decoration.",
              "Model answer: ‘divided the town … joined us to the world’ acknowledges the bypass's local cost while asserting its regional benefit, making a compromised structure appear as the embodiment of balanced civic trade-offs.",
              "Explain what the contrast permits the speaker to claim.",
            ),
            p(
              "Write a counter-rhetorical sentence from the perspective of residents who experienced the road primarily as exclusion.",
              "Model answer: What the speaker calls ‘a vessel of collective memory’ was for some neighbours a barrier that divided daily life, and ceremonial grief risks turning their exclusion into the town's picturesque inheritance.",
              "Challenge the universal ‘we’ without rejecting all shared memory.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Rhetoric is situated persuasion",
          text: "A eulogy permits a speaker to praise and qualify at once. Ask what the occasion, audience and public role make credible. Then inspect whether an appeal unifies by genuine shared interest or by temporarily making one experience stand for everyone.",
        },
      ],
      quiz: [
        q(1, "What does ‘if progress has a grammar’ do?", ["It connects infrastructure to a model of civic judgment through extended metaphor", "It provides a technical engineering definition", "It proves progress requires errors"], 0, "The analogy casts consultation and delay as the syntax of improvement."),
        q(2, "Why call the new bridge ‘entirely admirable’?", ["To concede its genuine advantages and protect the speaker from seeming merely reactionary", "To show that it will be demolished", "To reject all new infrastructure"], 0, "Concession makes the defence of the old road more credible."),
        q(3, "Whose experience may be marginalised by ‘we’?", ["Residents for whom the bypass mainly created noise, danger or separation", "The engineers who designed it", "The archaeologists who study soil"], 0, "Ceremonial inclusion can naturalise a selective version of local history."),
        q(4, "What is the relationship between logos and pathos in the final paragraph?", ["Logos disappears completely", "Pathos makes the practical case for memory feel like a public good rather than private nostalgia", "The two appeal to incompatible audiences"], 1, "The emotional scene supports the evaluative claim about remembering displacement."),
      ],
    },
    {
      slug: "reading-across-disciplines",
      title: "Reading across disciplines",
      summary:
        "Translate between neuroscience, labour history, public policy and literary criticism to understand why sleep becomes a different object in each discipline.",
      objective:
        "Compare disciplinary questions, units of analysis and standards of evidence, then formulate a question that genuinely requires more than one framework.",
      minutes: 37,
      blocks: [
        {
          type: "passage",
          title: "Four disciplines on sleep",
          paragraphs: [
            "Neuroscience — A fictional review describes sleep as a regulated state involving memory consolidation, metabolic control and synaptic maintenance. It reports associations between disrupted sleep and poorer task performance, while noting that laboratory protocols standardise light, timing and prior wakefulness in ways ordinary life does not.",
            "Labour history — A historical study examines how the eight-hour movement treated sleep as time outside wage labour. Factory shifts, domestic work and communal sleeping arrangements made ‘free time’ unevenly available; the demand for sufficient rest therefore challenged both employers and the assumption that private life began after work.",
            "Public policy — A policy memo defines sleep deprivation through self-reported short duration and asks whether school start times should move later. It prioritises adolescent outcomes, cost and transport logistics, treating sleep partly as a scheduling problem that institutions can modify.",
            "Literary criticism — An essay on insomnia reads sleeplessness not only as a condition to be measured but as a figure for vigilance, guilt and unavailable rest. A narrator who cannot sleep may be denied privacy, unable to stop working or deliberately refusing the surrender associated with unconsciousness.",
            "These accounts conflict only if sleep is assumed to be a single object with one explanation. The neuroscientist studies mechanisms, the historian distribution, the policy-maker intervention and the critic representation. Synthesis becomes possible when their different questions are connected without reducing one discipline to an illustration of another.",
          ],
          glossary: [
            { term: "synaptic", meaning: "Relating to connections through which nerve cells communicate." },
            { term: "protocol", meaning: "A defined procedure for conducting research." },
            { term: "wage labour", meaning: "Work performed in exchange for payment." },
            { term: "unit of analysis", meaning: "The entity or scale a study primarily examines." },
          ],
        },
        {
          type: "table",
          title: "Translate the object of study",
          caption: "Cross-disciplinary reading begins by resisting the illusion of a shared vocabulary.",
          columns: ["Discipline", "Sleep becomes…", "Primary unit", "Evidence", "Characteristic limit"],
          rows: [
            ["Neuroscience", "A regulated biological state", "Brain, body, participant", "Protocols and measures", "Laboratory control limits everyday generality"],
            ["Labour history", "Contested time and resource", "Worker, household, shift", "Archives and testimony", "Past arrangements may not map neatly onto present ones"],
            ["Public policy", "A modifiable scheduling outcome", "Population and institution", "Self-report and cost models", "Short duration does not explain every cause"],
            ["Literary criticism", "A figure and experience", "Text, narrator, trope", "Language and form", "Representation is not a representative sample"],
          ],
        },
        {
          type: "exercise",
          title: "Compare disciplinary habits",
          instructions: "Choose the answer that preserves the differences between frameworks.",
          items: [
            c(
              "Why does the neuroscience passage mention standardised laboratory conditions?",
              ["To limit the applicability of findings to uncontrolled everyday environments", "To show that sleep cannot be studied", "To prove that participants always sleep well"],
              0,
              "Experimental control strengthens internal inference but may reduce external validity.",
            ),
            c(
              "How does labour history transform the meaning of ‘free time’?",
              ["It shows that time outside wages was shaped by shifts, domestic obligations and unequal access", "It denies that rest matters", "It reduces sleep to a chemical process"],
              0,
              "Sleep becomes a distributive question rather than merely an individual state.",
            ),
            c(
              "What kind of claim can literary criticism make from insomnia?", ["That all insomniacs share one motive", "That a text organises vigilance, guilt or refusal into meaningful form", "That a character is statistically typical"], 1, "Interpretation concerns representation, not population prevalence."),
            c(
              "Which question requires genuine synthesis?", ["What does a laboratory measure?", "How might later school times redistribute rest across households while interacting with biological timing and students' narrated experience?", "How many hours are in a day?"], 1, "The question joins mechanism, distribution, intervention and experience."),
          ],
        },
        {
          type: "practice",
          title: "Translate without flattening",
          instructions: "Keep each discipline's central question visible as you connect the accounts.",
          items: [
            p(
              "Write two sentences comparing the policy memo with labour history.",
              "Model answer: The policy memo treats sleep mainly as an institutional scheduling outcome, whereas labour history asks who has historically been able to claim rest as free time. Connecting them suggests that changing start times may alter access to sleep unevenly across households.",
              "Name both the convergence and the difference in scale.",
            ),
            p(
              "Explain why literary insomnia should not be cited as evidence of prevalence.",
              "Model answer: A literary figure is selected and shaped for interpretive purposes, not sampled to estimate how common an experience is; its value lies in revealing meanings and contradictions that a prevalence measure cannot capture.",
              "Distinguish representational significance from statistical inference.",
            ),
            p(
              "Design a three-part research question using one concept from each of three disciplines.",
              "Model answer: How do adolescents' biological timing and household work obligations interact with school schedules to shape opportunities for rest, and how do students narrate the resulting loss of autonomy?",
              "Include a mechanism, a distributional condition and an interpretive dimension.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Shared topic does not mean shared object",
          text: "Two disciplines may both discuss sleep while studying mechanisms, resources or representations. Before synthesising, translate each account into its unit of analysis, evidence standard and characteristic limit. The connection should add explanatory power rather than merely placing sources side by side.",
        },
      ],
      quiz: [
        q(1, "What is the main risk of cross-disciplinary reading?", ["Using one discipline as a decorative example for another without respecting its question and method", "Encountering more than one source", "Discovering that vocabulary changes"], 0, "Flattening occurs when frameworks are merged before their differences are understood."),
        q(2, "Which phrase best identifies the labour historian's contribution?", ["Sleep is only a laboratory state", "Sleep is contested time rather than uniformly available private rest", "Sleep has no social history"], 1, "The historical account foregrounds access and distribution."),
        q(3, "Why can policy and literary criticism complement each other?", ["Neither uses evidence", "Both estimate population rates", "Policy can examine institutional intervention while criticism reveals how affected people experience and interpret it"], 2, "Their different scales can be connected without becoming interchangeable."),
        q(4, "What makes the proposed three-part question sophisticated?", ["It avoids all empirical content", "It links biological mechanism, household distribution and narrated autonomy rather than asking for a single universal cause", "It uses the longest vocabulary"], 1, "The question requires translation among frameworks and preserves their distinct contributions."),
      ],
    },
  ],
};
