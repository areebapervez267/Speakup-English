import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2ListeningUnit2: LessonUnit = {
  title: "Specialist listening",
  description:
    "Comprehend full-speed academic reasoning, technical incident briefings, legal argument and data-rich public-health presentations.",
  lessons: [
    {
      slug: "academic-lectures-at-full-speed",
      title: "Academic lectures at full speed",
      summary:
        "Follow a philosophy lecture distinguishing testimonial injustice from gaps in shared concepts, including questions about scope and remedy.",
      objective:
        "Comprehend dense conceptual lecture speech at full speed by tracking definitions, boundary cases and the lecturer's qualification of each claim.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Before you listen: concepts at the boundary",
          paragraphs: [
            "A philosopher is explaining two ways people can be wronged as knowers. The lecture moves quickly between abstract definitions and institutional examples, then tests the distinction against student questions.",
            "Do not separate the examples from the concepts. Each example clarifies a boundary: being ignored is not automatically prejudicial, and lacking a concept is not the same as lacking evidence.",
          ],
        },
        {
          type: "transcript",
          title: "Lecture: being wronged as a knower",
          context:
            "Professor Imani Vale delivers an original lecture excerpt at a rapid seminar pace. Two students challenge the scope of her account.",
          lines: [
            { speaker: "Professor Vale", text: "To be wronged as a knower is not merely to be contradicted. It is to suffer a systematic disadvantage in your capacity to give others knowledge, or to make sense of your experience with the resources a community provides." },
            { speaker: "Professor Vale", text: "The first form is testimonial injustice: an identity prejudice causes a credibility deficit. Imagine a flood-planning panel dismissing a resident's account of water levels because of her accent and class, before examining the measurements she brings." },
            { speaker: "Professor Vale", text: "Notice the boundary. If the panel rejects an unsupported claim after fair scrutiny, that is not testimonial injustice. The wrong is the prejudged credibility, not the final disagreement." },
            { speaker: "Professor Vale", text: "The second form is hermeneutical injustice. A significant social experience falls into a gap in collective interpretive resources. Workers may understand their exhaustion through a private language, yet no shared concept is available for the institution to recognise what they are describing." },
            { speaker: "Professor Vale", text: "Suppose an employer calls recurring post-shift confusion “poor discipline”, while workers call it “recovery time” and can name its pattern. The phrase exists locally, but the institution lacks a concept through which that pattern can be treated as a legitimate claim." },
            { speaker: "Professor Vale", text: "These forms interact. If the workers are disbelieved when they describe the pattern, hermeneutical marginalisation is reinforced by testimonial prejudice. One wrong can make the other harder to challenge." },
            { speaker: "Student", text: "Does that mean dominant groups can never experience hermeneutical injustice? Their concepts usually define the institution." },
            { speaker: "Professor Vale", text: "They can encounter conceptual gaps, but not every gap is injustice. Ask who helped shape the shared resources, who has power to revise them and whose experience is consequently hidden. Distribution matters as much as the existence of a gap." },
            { speaker: "Student", text: "So is the remedy simply better listening?" },
            { speaker: "Professor Vale", text: "Better listening can repair credibility, but it cannot supply a concept that nobody yet shares. Remedies must include institutional space for affected people to develop language, and procedures that allow that language to alter decisions. Inclusion is not merely being heard; it is being able to change the framework." },
          ],
        },
        {
          type: "tip",
          title: "Track definitions through negations",
          text: "At full speed, definitions often appear as “X is not simply Y; it is Z”. Record the rejected shortcut as well as the positive definition. Then attach each example to the feature that qualifies it: prejudged credibility for testimonial injustice, a structural concept gap for hermeneutical injustice. Boundary questions are not interruptions; they show what the lecturer is prepared to claim.",
        },
        {
          type: "exercise",
          title: "Distinguish the two forms",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "What produces testimonial injustice in the flood-panel example?",
              ["A rejected proposal", "Identity prejudice causing a credibility deficit", "A shortage of rainfall measurements"],
              1,
              "The panel prejudges the resident's credibility because of accent and class.",
            ),
            c(
              "Why is fair rejection of an unsupported claim different from testimonial injustice?",
              ["It follows scrutiny rather than prejudged credibility", "It always happens in writing", "It concerns only scientific facts"],
              0,
              "Vale says disagreement is not itself the wrong; the wrong is prejudged credibility.",
            ),
            c(
              "What characterises hermeneutical injustice?",
              ["A speaker forgets a technical word", "A listener has a different opinion", "A significant experience lacks shared interpretive resources"],
              2,
              "The problem is a structural gap in concepts available to the community, not an individual vocabulary lapse.",
            ),
            c(
              "Why is “recovery time” not a complete remedy in the workplace example?",
              ["Workers have not experienced exhaustion", "The institution does not recognise the local concept", "The phrase is too technical"],
              1,
              "The workers have a local phrase, but the institution cannot treat the pattern as a legitimate claim without a shared concept.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Synthesise a conceptual lecture",
          instructions:
            "Answer from memory, then check the model responses.",
          items: [
            p(
              "How can the two forms of injustice reinforce each other?",
              "Workers may be disbelieved because of prejudged credibility while the institution's conceptual gap prevents their description from being recognised in the first place.",
              "Connect the credibility problem to the shared-language problem.",
            ),
            p(
              "Why is “not every gap is injustice” an important qualification?",
              "A missing concept must be examined in relation to power, participation in shaping concepts and whose experience becomes hidden.",
              "The lecturer adds distribution and institutional power to the existence of a gap.",
            ),
            p(
              "Write a three-sentence lecture summary with definition, example and remedy.",
              "Model answer: Testimonial injustice occurs when prejudice undermines a speaker's credibility. Hermeneutical injustice occurs when shared interpretive resources leave significant experience unintelligible. Remedies must address both prejudgement and institutional space to create concepts that can change decisions.",
              "Keep the two definitions distinct before linking the remedies.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the lecture's central distinction?",
          ["Between true and false beliefs", "Between disagreement and systematic disadvantage in giving or making sense of knowledge", "Between technical and everyday vocabulary"],
          1,
          "Vale defines the wrong as systematic disadvantage for knowers, not ordinary error or contradiction.",
        ),
        q(
          2,
          "Why does the professor stress that the resident brings measurements?",
          ["To show that the injustice concerns how credibility is assigned before evidence is assessed", "To prove measurements always settle political disputes", "To argue that residents should not join planning panels"],
          0,
          "The measurements make clear that prejudgement, rather than the quality of evidence, is the focus of the example.",
        ),
        q(
          3,
          "What does the student's dominant-groups question test?",
          ["Whether conceptual gaps can affect any group but become injustice through unequal power", "Whether dominant groups have no concepts", "Whether hermeneutical injustice is identical to lying"],
          2,
          "Vale answers that gaps may be widespread, while injustice depends on power to shape resources and whose experience is hidden.",
        ),
        q(
          4,
          "Why is being heard not sufficient as a remedy?",
          ["Listening cannot alter credibility", "Institutions must also allow affected people to develop concepts that can change decision frameworks", "Conceptual work belongs only to philosophers"],
          1,
          "Vale distinguishes passive reception from the institutional capacity to revise shared language and decisions.",
        ),
      ],
    },
    {
      slug: "professional-and-technical-briefings",
      title: "Professional and technical briefings",
      summary:
        "Track a cybersecurity incident briefing as an analyst revises the suspected access path and officials distinguish confirmed facts from reassurance.",
      objective:
        "Understand a rapid technical briefing by retaining timelines, system boundaries and explicit levels of certainty while separating operational from communications decisions.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Before you listen: a moving incident picture",
          paragraphs: [
            "A technology company is briefing staff after suspicious activity in a supplier account. The first explanation is revised as analysts inspect access logs, and different teams need different levels of certainty before acting.",
            "Keep a timeline and mark each statement as confirmed, suspected or not yet known. Technical shorthand is usually explained in context: an access token, for example, functions like a digital key allowing software to act as an account.",
          ],
        },
        {
          type: "transcript",
          title: "Incident briefing: supplier-account access",
          context:
            "Incident lead Priya chairs with analyst Ken, legal counsel Marta and communications lead Sam. The fictional briefing is at 13:45.",
          lines: [
            { speaker: "Priya", text: "Current picture at thirteen forty-five: suspicious activity began in a supplier portal at nine twelve. We initially suspected a phishing email, but the login pattern now points to a stolen access token." },
            { speaker: "Ken", text: "A token is a digital key that lets an application act as a user. We revoked the affected keys at ten oh five and disabled two accounts. There is still no evidence that the finance server was accessed." },
            { speaker: "Priya", text: "When you say no evidence, is that a positive finding or a limit on our visibility?" },
            { speaker: "Ken", text: "A visibility limit. The finance server has been isolated since ten twenty, but complete network logs are retained for only ninety days. We are reconstructing the relevant hour from gateway and endpoint records." },
            { speaker: "Marta", text: "Please preserve those records before any routine deletion. We may also have a notification duty if personal data is confirmed as exposed; possibility alone should not be described as a confirmed breach." },
            { speaker: "Sam", text: "Staff are asking whether their own accounts are safe. What can I say without implying we know more than we do?" },
            { speaker: "Ken", text: "Say that two supplier accounts were disabled, the relevant tokens were revoked, and no evidence of finance-server access has been found so far. Avoid “nothing was taken” until the reconstruction is complete." },
            { speaker: "Priya", text: "Technical update at fifteen twenty. If the reconstruction supports the same scope, we restore non-finance services first and monitor for renewed use of any old token." },
            { speaker: "Sam", text: "And if a journalist asks who was behind it?" },
            { speaker: "Priya", text: "Attribution is unknown. We describe the access method and our response, not a suspect. Operational precision is more useful than a confident name we cannot yet support." },
          ],
        },
        {
          type: "tip",
          title: "Track facts, limits and decisions",
          text: "A phrase such as “no evidence” must be attached to its basis: here, incomplete visibility, not proof of absence. Use three columns—time, confirmed action, unresolved question. Keep technical containment decisions separate from legal notification and public messaging. Listen for conditional future actions such as “if the reconstruction supports the same scope”, because they are plans rather than guarantees.",
        },
        {
          type: "exercise",
          title: "Keep the incident picture accurate",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "What does the current evidence suggest was used?",
              ["A stolen access token", "A broken printer", "A physical master key"],
              0,
              "Ken says the login pattern now points to a stolen access token, revising the initial phishing hypothesis.",
            ),
            c(
              "How long are complete network logs retained?",
              ["Ninety days", "Nine hours", "One year"],
              2,
              "Ken states that complete network logs are retained for only ninety days.",
            ),
            c(
              "Why can't the team say “nothing was taken”?",
              ["The finance server is still online", "The reconstruction is incomplete and visibility is limited", "The supplier refused all cooperation"],
              1,
              "Sam is told to avoid absolute reassurance until the reconstruction is complete.",
            ),
            c(
              "What will be restored first if the scope remains confirmed?",
              ["All services at once", "Non-finance services", "The supplier portal without monitoring"],
              1,
              "Priya proposes restoring non-finance services first, with monitoring for reused tokens.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Brief without overclaiming",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "What is the difference between a phishing email and a stolen token as access methods?",
              "A phishing email tricks a person into revealing information or access; a stolen token directly supplies a digital key that can be reused until revoked.",
              "Keep the explanation functional and avoid treating the first hypothesis as confirmed.",
            ),
            p(
              "Why does Marta ask for records to be preserved before routine deletion?",
              "They may be needed to establish scope, assess notification duties and investigate exposure, and the ninety-day retention period creates a deadline.",
              "Her concern joins evidence preservation to possible legal obligations.",
            ),
            p(
              "Write a two-sentence staff update with one confirmed action and one explicit uncertainty.",
              "Model answer: Two supplier accounts were disabled and the relevant access tokens were revoked at 10:05. We have not found evidence of finance-server access, but the investigation remains incomplete and we will update staff after the reconstruction.",
              "Avoid absolute claims such as “nothing was taken”.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What change occurs in the investigation during the briefing?",
          ["The incident is declared harmless", "The initial phishing hypothesis is revised towards stolen-token access", "The finance server is confirmed to be the source"],
          1,
          "Ken explicitly contrasts the initial suspicion with what the current login pattern suggests.",
        ),
        q(
          2,
          "Why is “no evidence” not the same as “no access”?",
          ["The team's current visibility is incomplete", "Ken has already found proof of access", "The finance server cannot produce logs"],
          0,
          "Ken says the absence of evidence reflects limited visibility while records are reconstructed.",
        ),
        q(
          3,
          "What is Marta's principal concern?",
          ["Publicising an unconfirmed suspect", "Balancing evidence preservation with precise statements about possible notification duties", "Restoring every service immediately"],
          1,
          "She asks for preservation and cautions against describing possible exposure as a confirmed breach.",
        ),
        q(
          4,
          "Why does Priya refuse to name a suspected attacker?",
          ["Attribution is unknown and unsupported confidence would undermine the briefing", "The attacker is known to be the supplier", "Names are never useful in technical incidents"],
          2,
          "She prioritises supported operational facts over speculative attribution.",
        ),
      ],
    },
    {
      slug: "legal-and-policy-language",
      title: "Legal and policy language",
      summary:
        "Follow a fictional tribunal hearing on a library closure and distinguish statutory powers, consultation requirements and settlement language.",
      objective:
        "Interpret legal and policy argument by identifying obligations, discretion, jurisdiction and the evidential status of qualified statements.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Before you listen: legal words do specific work",
          paragraphs: [
            "A tribunal is hearing a challenge to a council's decision to close a mobile library. The dispute turns on what a statute requires, how long consultation must run and whether less restrictive options were considered.",
            "Terms such as “ultra vires” and “proportionality” are legal tests, not decorative emphasis. Listen for the speakers to define or apply them to a particular fact, and for “without prejudice” to mark a separate settlement discussion.",
          ],
        },
        {
          type: "transcript",
          title: "Tribunal: the Riverborough mobile library",
          context:
            "This is a fictional hearing. Chair Ms Osman hears council counsel Ms Reed and objector counsel Mr Adeyemi. The decision is reserved.",
          lines: [
            { speaker: "Ms Reed", text: "The statute says the council must review a mobile service when average boardings fall below fifty a day. Boardings were thirty-eight. We reviewed the service and concluded closure was the sustainable option." },
            { speaker: "Mr Adeyemi", text: "The clause requires review, not closure. My client argues the council treated a review threshold as a mandatory outcome, exceeding its legal power—acting ultra vires, or beyond the authority given by the statute." },
            { speaker: "Ms Reed", text: "Yes, that is the claim. We dispute it because closure remained a discretionary choice following a review, informed by cost and equality evidence." },
            { speaker: "Mr Adeyemi", text: "But the consultation ran for fourteen days when the statutory scheme requires twenty-eight. A report adopted after an unlawful process cannot be repaired by saying the decision itself was discretionary." },
            { speaker: "Ms Reed", text: "We accept the fourteen-day period. We rely on the additional public meetings, although I accept they are not identical to the full statutory consultation period." },
            { speaker: "Mr Adeyemi", text: "Proportionality also requires the council to explain why reduced stops or shared provision could not achieve its aim with less harm to rural readers." },
            { speaker: "Ms Reed", text: "That without-prejudice discussion concerned a possible extra stop as part of settlement negotiations. It is not an admission that closure was unlawful." },
            { speaker: "Ms Osman", text: "Understood. “Without prejudice” keeps settlement proposals from being treated as admissions in this hearing; I will consider the statutory issue separately." },
            { speaker: "Mr Adeyemi", text: "Then our request is a fresh twenty-eight-day consultation, during which reduced-stop and shared-service options are genuinely assessed." },
            { speaker: "Ms Osman", text: "The tribunal will reserve judgment. Nothing I have said today determines the outcome, and the council should not treat a settlement proposal as a ruling." },
          ],
        },
        {
          type: "tip",
          title: "Separate obligation, power and negotiation",
          text: "Build a legal grid with four headings: what the statute requires, what the council may choose, what procedure must be followed and what is only a settlement proposal. Listen for explicit concessions: “we accept” often identifies an established fact. Phrases such as “without prejudice” and “judgment reserved” limit how a statement may be used; they do not make the underlying dispute disappear.",
        },
        {
          type: "exercise",
          title: "Read the hearing precisely",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "What average boarding level triggers a statutory review?",
              ["Below fifty a day", "Below twenty-eight a day", "Below fourteen a day"],
              0,
              "Ms Reed states that review is required when average boardings fall below fifty a day.",
            ),
            c(
              "What is the council accused of exceeding?",
              ["Its legal power", "Its advertising budget", "The tribunal's authority"],
              0,
              "Mr Adeyemi claims the council exceeded its statutory authority by treating review as compulsory closure.",
            ),
            c(
              "How long was the consultation?",
              ["Fourteen days", "Twenty-eight days", "Thirty-eight days"],
              2,
              "Mr Adeyemi states that consultation ran for fourteen days, and Ms Reed accepts this.",
            ),
            c(
              "What does “without prejudice” mean in this hearing?",
              ["The settlement proposal cannot be treated as an admission of liability", "The council has already lost", "All evidence must be destroyed"],
              1,
              "Ms Osman explains that settlement proposals are kept separate from admissions considered in the hearing.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a legal issue map",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "What distinction is at the heart of the ultra vires argument?",
              "The statute requires a review below fifty boardings, while closure is claimed to be a discretionary decision after that review.",
              "The dispute concerns the move from threshold to power.",
            ),
            p(
              "Which fact does Ms Reed concede, and why does it matter?",
              "She concedes the fourteen-day consultation; it falls short of the twenty-eight-day requirement and may make the process unlawful.",
              "Additional meetings are not identical to the full statutory period.",
            ),
            p(
              "Write a three-line hearing summary with one legal issue, one conceded fact and one requested remedy.",
              "Model answer: Issue: did the council exceed its power by treating review as mandatory closure? Conceded fact: consultation lasted fourteen rather than twenty-eight days. Remedy: a fresh full consultation assessing reduced-stop and shared-service options.",
              "Do not report the reserved judgment as a decision.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why is the number thirty-eight important?",
          ["It is the length of consultation", "It is the average boarding figure below the review threshold", "It is the number of tribunal members"],
          1,
          "The figure places the service below fifty boardings a day and therefore triggers the statutory review duty.",
        ),
        q(
          2,
          "Why can an unlawful consultation process matter even if closure is discretionary?",
          ["It can invalidate the decision procedure even where the council had power to close", "It proves every statutory decision must close a service", "It removes the council's power to review any service"],
          0,
          "Mr Adeyemi separates the existence of discretionary power from the lawful procedure required to exercise it.",
        ),
        q(
          3,
          "What does the extra-stop settlement proposal not establish?",
          ["That a stop can physically be added", "That the council has admitted closure was unlawful", "That rural readers use the library"],
          1,
          "Ms Reed and the chair both stress that a without-prejudice settlement proposal is not an admission in the hearing.",
        ),
        q(
          4,
          "What can a listener conclude from “judgment reserved”?",
          ["The council must close immediately", "The tribunal has ruled for the objector", "The outcome remains undecided"],
          2,
          "Reserving judgment means the tribunal will decide later; no party has yet prevailed.",
        ),
      ],
    },
    {
      slug: "data-heavy-presentations",
      title: "Data-heavy presentations",
      summary:
        "Follow a wastewater-surveillance briefing containing coverage, baseline indices and measurement caveats before a public-health decision.",
      objective:
        "Interpret dense epidemiological data by distinguishing population trends, laboratory proxies and individual diagnosis.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "Before you listen: proxies need limits",
          paragraphs: [
            "A public-health team is using wastewater measurements to monitor a respiratory virus. The presenter reports trends across treatment plants, but the audience presses on coverage, timing and what the measurements can actually reveal.",
            "Prepare to separate three levels: a population signal, a laboratory proxy and an individual diagnosis. A trend may be useful for planning without measuring any one person's infection or infectiousness.",
          ],
        },
        {
          type: "transcript",
          title: "Briefing: what the wastewater signal shows",
          context:
            "Epidemiologist Dr Nia Peters presents to public-health director Grant and health journalist Leila. The figures are fictional but the measurement relationships are realistic.",
          lines: [
            { speaker: "Dr Peters", text: "The network now samples four treatment plants covering sixty-two percent of the population, every Tuesday and Friday, so this is a regional trend rather than a daily case count. Our positivity index has moved from a baseline of nought point eight to one point four over three weeks. The index standardises the laboratory result for sample flow; it is not the percentage of residents infected." },
            { speaker: "Leila", text: "Does that mean infections have nearly doubled?" },
            { speaker: "Dr Peters", text: "It suggests the regional wastewater signal has risen strongly, but the index also depends on shedding and collection conditions. We should not translate one point four directly into a doubling of infections." },
            { speaker: "Grant", text: "What about the cycle-threshold value in the laboratory report? Lower usually means more viral material, doesn't it?" },
            { speaker: "Dr Peters", text: "Within one consistently processed assay, generally. Across plants using different collection and extraction methods, the values are not directly comparable. We use the standardised index precisely to avoid that mistake." },
            { speaker: "Leila", text: "Could rain create a false signal?" },
            { speaker: "Dr Peters", text: "Heavy rain can dilute wastewater and lower the apparent concentration. We annotate rainfall and flow, but we cannot assume the correction is exact. That is one reason a single week should not trigger a major change." },
            { speaker: "Dr Peters", text: "This briefing supports increasing clinical testing capacity and comparing the trend with hospital admissions, which lag by roughly two days. The wastewater signal can give us earlier warning, but it cannot diagnose an individual." },
            { speaker: "Leila", text: "And the two-day lag is between the virus signal and hospital data, not a delay in testing?" },
            { speaker: "Dr Peters", text: "Correct. Wastewater can move first; admissions reflect a later stage of illness and care-seeking. Reading the timelines together is more informative than treating either series as definitive." },
          ],
        },
        {
          type: "tip",
          title: "Keep three levels of measurement",
          text: "Label every number as coverage, standardised signal, laboratory proxy or health outcome. Then note its time scale and comparison. A positivity index of 1.4 is not 140 percent infected, and cycle-threshold values cannot be freely compared across different methods. Use convergent sources to make a decision: wastewater may provide early warning, while clinical and hospital data add later but differently grounded evidence.",
        },
        {
          type: "exercise",
          title: "Interpret the surveillance data",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "What share of the population is covered by the four plants?",
              ["Four percent", "Sixty-two percent", "One hundred percent"],
              1,
              "Dr Peters says the four plants cover sixty-two percent of the population.",
            ),
            c(
              "What was the baseline positivity index?",
              ["Nought point eight", "One point four", "Two point zero"],
              2,
              "The stated baseline is nought point eight; one point four is the recent index.",
            ),
            c(
              "Why are cycle-threshold values not directly comparable across plants?",
              ["They measure rainfall", "Different collection and extraction methods affect them", "They count hospital admissions"],
              1,
              "Dr Peters explains that processing differences make cross-plant threshold comparisons unreliable.",
            ),
            c(
              "What action does the briefing support?",
              ["Diagnose individual residents from wastewater", "Increase testing capacity and compare with hospital admissions", "Ignore clinical data"],
              0,
              "She recommends expanded clinical testing and comparison with hospital trends rather than individual diagnosis.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Explain a proxy without overstating it",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "Why does standardising for sample flow help interpretation?",
              "It adjusts the laboratory signal for variation in the amount of wastewater processed, producing a more comparable trend.",
              "It does not turn the index into a percentage of infected people.",
            ),
            p(
              "How can rain produce a misleadingly low signal?",
              "Rain can dilute wastewater and reduce measured concentration, so the result may understate the underlying trend.",
              "Dr Peters says the correction is annotated rather than assumed exact.",
            ),
            p(
              "Write a two-sentence public update that explains the rise and preserves two caveats.",
              "Model answer: The regional wastewater signal has risen over three weeks across plants covering sixty-two percent of residents. We are comparing it with clinical and hospital data because weather, laboratory methods and differences in viral shedding affect interpretation.",
              "Avoid translating the index directly into a case count.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why is the wastewater network described as a regional trend?",
          ["It samples every individual daily", "It covers most, but not all, residents and samples only twice weekly", "It measures hospital admissions directly"],
          1,
          "Coverage and collection frequency limit the network's geographic and temporal resolution.",
        ),
        q(
          2,
          "What does the move from 0.8 to 1.4 most directly indicate?",
          ["A standardised wastewater signal has increased", "Sixty-two percent of residents are infected", "Hospital admissions have exactly doubled"],
          2,
          "The index rose strongly, but Dr Peters rejects a direct conversion into infection prevalence.",
        ),
        q(
          3,
          "Why does the presenter combine wastewater with hospital data?",
          ["The sources have different mechanisms and timelines, allowing earlier warning to be checked against later outcomes", "Hospital data make laboratory methods irrelevant", "Wastewater alone cannot ever be useful"],
          0,
          "She values triangulation: an early population signal alongside a later clinical outcome.",
        ),
        q(
          4,
          "Which statement would be an invalid inference?",
          ["Weather can affect measured concentration", "Coverage is incomplete", "The wastewater index diagnoses whether a particular person is infectious"],
          2,
          "The network measures population-level signals and does not identify individual infection status.",
        ),
      ],
    },
  ],
};
