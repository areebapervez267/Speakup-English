import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1WritingUnit2: LessonUnit = {
  title: "Structure and cohesion",
  description:
    "Develop paragraphs that advance a single argument, connect ideas without mechanical signposting and control academic sentence density.",
  lessons: [
    {
      slug: "paragraph-development-and-flow",
      title: "Paragraph development and flow",
      summary:
        "Turn a topic sentence into a purposeful paragraph that moves from claim to evidence, explanation and a qualified link to the next stage.",
      objective:
        "Plan and draft a coherent body paragraph using a controlling idea, selective evidence and explicit analytical links.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "One paragraph, one argumentative job",
          paragraphs: [
            "A body paragraph is not a container for everything you know about a topic. It performs one job within the essay: it advances one reason, answers one objection or resolves one complication. If you cannot summarise that job in a phrase such as ‘explains why defaults shape choice’, the paragraph probably needs dividing.",
            "Flow comes from a visible relationship between sentences, not from adding however or furthermore at every turn. Common information can become the subject of the next sentence; the previous sentence's judgement can become the premise of the next. This creates a chain of reasoning that readers can follow without reconstructing your notes.",
          ],
        },
        {
          type: "table",
          title: "A flexible paragraph architecture",
          columns: ["Move", "Purpose", "Possible sentence form"],
          rows: [
            ["Claim", "State the paragraph's contribution to the thesis.", "The more serious obstacle is not cost but public trust."],
            ["Context", "Define only the information needed to understand the claim.", "Trust here means confidence that decisions can be challenged."],
            ["Evidence", "Provide a precise example, finding or textual feature.", "In the fictional consultation, reviewers published reasons for refusal in 82 per cent of cases."],
            ["Reasoning", "Explain how the evidence supports the claim.", "Giving reasons allowed applicants to identify procedural misunderstandings and correct them."],
            ["Qualification", "Acknowledge a limit, exception or alternative reading.", "Publication alone could not show whether applicants understood those reasons."],
            ["Link", "Connect the result to the essay's wider direction.", "The next question is therefore whether this transparency survives under higher demand."],
          ],
          caption: "Not every paragraph needs six separate sentences; complex moves may share one.",
        },
        {
          type: "passage",
          title: "Model paragraph: defaults and public choices",
          paragraphs: [
            "The objection that defaults merely preserve existing preferences underestimates their role in making a choice before reflection begins. In a fictional trial of an enrolment form, 71 per cent of participants kept the preselected green energy tariff when it appeared first, compared with 34 per cent when the two tariffs appeared in neutral order. This contrast does not show that participants opposed renewable energy; it shows that the presentation of alternatives affected the decision under time pressure. Because the default was labelled clearly, the result is better understood as a shift in cognitive effort than as deception. Its policy significance is limited, however, by the short decision window: people planning a long-term contract may investigate more carefully. The distinction matters because a default can support a desirable outcome without being the most transparent way to secure it.",
          ],
          glossary: [
            { term: "default", meaning: "The option selected unless the user actively chooses another." },
            { term: "cognitive effort", meaning: "The mental work required to make a decision." },
          ],
        },
        {
          type: "rules",
          title: "Diagnose a broken flow",
          items: [
            "If a paragraph changes subject at its midpoint, split it at the change or add a sentence explaining the relationship.",
            "If it begins with evidence, add a claim that tells the reader what the evidence is meant to establish.",
            "If it lists facts without explanation, ask ‘So what?’ after each fact and write the answer.",
            "If sentences are the same length, vary the syntax so the central judgement receives the main clause and qualifications can be subordinated.",
            "If the final sentence merely repeats the opening, replace repetition with a consequence, limitation or link.",
          ],
        },
        {
          type: "exercise",
          title: "Repair the paragraph logic",
          instructions: "Choose the sentence or plan that gives the paragraph a clear argumentative function.",
          items: [
            c(
              "A paragraph contains three statistics about library opening hours but no interpretation. What should be added first?",
              ["A controlling claim that explains what the statistics are being used to argue", "A fourth statistic", "A long quotation about libraries in general"],
              0,
              "Evidence needs an argumentative purpose; a controlling claim tells the reader how to interpret the data.",
            ),
            c(
              "Which revision best connects the evidence to the claim that online feedback supports revision?",
              ["Online feedback supports revision. Many students use it. It is available.", "Online feedback is therefore good, and another point is that libraries are useful.", "Online feedback supports revision because immediate comments allow students to correct a draft while their reasoning is still accessible."],
              2,
              "The final version supplies a mechanism linking the claim to its evidence and avoids an unrelated shift.",
            ),
            c(
              "A paragraph starts with a concession and ends with a new objection. What is its likely problem?",
              ["It has no clear movement from concession to your own judgement", "It has too much evidence", "It needs more connectors"],
              0,
              "A concession must be resolved or qualified; otherwise the paragraph changes direction without answering either issue.",
            ),
            c(
              "Which final sentence is an effective link rather than repetition?",
              ["This effect of immediacy raises a second question: whether the quality of automated feedback can match its speed.", "In conclusion, feedback is important.", "I have discussed feedback."],
              0,
              "The sentence extends the argument by identifying the next unresolved issue while preserving continuity.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Draft with a purpose",
          instructions: "Use the fictional case of a university replacing printed course packs with searchable digital readers.",
          items: [
            p(
              "Write a topic sentence that answers one question: does searchability necessarily improve student learning?",
              "Model answer: Searchability can improve retrieval without necessarily improving comprehension, because finding a phrase and understanding its role in an argument are different operations.",
              "Make the central distinction clear rather than announcing the paragraph's topic.",
            ),
            p(
              "Add one evidence sentence and one reasoning sentence using this note: in a fictional classroom task, students found relevant passages faster on screen but scored no higher on unseen analytical questions.",
              "Model answer: In a fictional classroom task, students using digital readers located relevant passages faster but gained no measurable advantage on unseen analytical questions. The contrast suggests that retrieval efficiency did not transfer to independent interpretation within the task.",
              "Interpret both halves of the result, not only the positive finding.",
            ),
            p(
              "Complete the paragraph with a qualification and a forward link in no more than two sentences.",
              "Model answer: The task tested one-off searching rather than sustained study, so repeated use may produce different learning patterns. The stronger question is therefore how searchable texts change the way students annotate and revisit arguments.",
              "Name the study limit and let it generate the next question.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is the main purpose of a topic sentence?", ["To state the paragraph's controlling claim", "To list every source", "To end the paragraph with a quotation"], 0, "The topic sentence should make an argumentative point, not merely name a subject."),
        q(2, "What usually follows a piece of evidence in an analytical paragraph?", ["An explanation of its relevance and limits", "An unrelated anecdote", "The same evidence in different words"], 0, "Reasoning makes the inferential link between evidence and claim explicit."),
        q(3, "Why can too many discourse markers weaken flow?", ["They can conceal the absence of a genuine relationship between ideas", "They are grammatically incorrect", "Academic writing never uses them"], 0, "Connectors should clarify reasoning, not substitute for it."),
        q(4, "Which sentence is the best candidate for splitting a paragraph?", ["One that defines a key term", "One that introduces a necessary concession", "One that changes from benefits to implementation costs without explaining the connection"], 2, "An unexplained change of argumentative job is a sign that the paragraph may need restructuring."),
      ],
    },
    {
      slug: "cohesive-devices-and-reference",
      title: "Cohesive devices and reference",
      summary:
        "Create continuity through information patterns, precise reference and deliberate lexical links rather than a string of generic connectors.",
      objective:
        "Revise a paragraph for given–new flow, unambiguous reference and a controlled combination of lexical and logical cohesion.",
      minutes: 35,
      blocks: [
        {
          type: "text",
          title: "Cohesion is a network, not a checklist",
          paragraphs: [
            "Readers usually understand a new sentence by connecting something familiar in it to what came before. English often places familiar information first and new information later: ‘The consultation closed in March. Its findings were published in June.’ The pronoun Its is useful only if March is the only possible antecedent.",
            "Cohesion also operates across larger distances. A key term may reappear in a more precise form, an example may instantiate a category and a contrast may reverse the direction of an expectation. Skilled writers combine these links so that grammar, vocabulary and logic reinforce one another.",
          ],
        },
        {
          type: "table",
          title: "Five ways to join ideas",
          columns: ["Device", "Function", "Controlled example"],
          rows: [
            ["Reference", "Point back without repetition.", "The panel rejected the first design; its concerns focused on maintenance costs."],
            ["Substitution", "Replace a clause or noun phrase.", "The pilot assumed stable demand. This proved too optimistic."],
            ["Lexical chain", "Repeat or reframe a key concept.", "An audit produced findings; those findings prompted a review of expenditure."],
            ["Logical connector", "Mark addition, contrast, cause or result.", "The route was shorter; however, journey times increased during peak hours."],
            ["Information bridge", "Carry the previous sentence's new point into the next.", "The revised route reduced distance. This saving was offset by longer waiting times."],
          ],
          caption: "Choose the lightest device that makes the relationship clear.",
        },
        {
          type: "examples",
          title: "From mechanical to coherent",
          items: [
            {
              text: "Mechanical: ‘Firstly, cities need green spaces. However, green spaces cost money. Therefore, funding is needed.’ Coherent: ‘Cities need green spaces, but the cost of maintaining them creates a persistent funding problem. Long-term maintenance commitments, rather than one-off planting grants, would address that problem more directly.’",
              note: "The revision replaces a list of assertions with an explicit causal relationship and a focused implication.",
            },
            {
              text: "Ambiguous: ‘The committee rejected the report after it questioned the budget. This angered the director.’ Clear: ‘The committee rejected the report after it questioned the budget. The report's challenge to spending angered the director.’",
              note: "Replacing This with a precise noun phrase identifies which event caused the reaction.",
            },
            {
              text: "Repetitive: ‘The policy improved access. The policy improved access for rural users. Rural users benefited from the policy.’ Cohesive: ‘The policy improved access, particularly for rural users who previously relied on infrequent bus services.’",
              note: "The final version compresses a lexical chain into one proposition and adds relevant detail.",
            },
          ],
        },
        {
          type: "rules",
          title: "Reference and signposting checks",
          items: [
            "After writing it, this, these, they or such, ask whether exactly one antecedent is available.",
            "Use this + noun when several possible antecedents compete: this reduction, this assumption, this objection.",
            "Keep terminology stable enough to be traceable; use a definition or synonym when you deliberately change categories.",
            "Reserve however for genuine contrast and therefore for a conclusion that actually follows.",
            "Avoid starting every paragraph with moreover or another additive marker; let the subject carry the link.",
            "Read the text without connectors once. If the reasoning still works, retain only the connectors that help navigation.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the clearest link",
          instructions: "Select the version that creates an unambiguous, purposeful connection.",
          items: [
            c(
              "Choose the clearest antecedent: ‘The fund refused the first application because it exceeded the cap. ___ also contained an inaccurate estimate.’",
              ["It", "The application", "This"],
              1,
              "The application names the document precisely and avoids ambiguity about whether the fund or the limit is meant.",
            ),
            c(
              "Which sentence creates the strongest given–new flow after ‘The archive digitised 4,000 letters’?",
              ["Letters were also catalogued.", "This larger catalogue allowed researchers to search correspondents' names across several collections.", "Another activity took place at the archive."],
              1,
              "This larger catalogue refers back to the digitised letters while adding the new consequence of the change.",
            ),
            c(
              "Which transition accurately signals a causal consequence?",
              ["Moreover, the sample excluded night-shift staff, so the findings may not apply to them.", "However, the sample excluded night-shift staff, although this is irrelevant.", "For example, the sample excluded night-shift staff, which caused the study."],
              0,
              "So introduces the inference that follows from the sampling limitation; the other transitions misrepresent the relationship.",
            ),
            c(
              "When is a lexical chain preferable to repeating the same noun?",
              ["Never; exact repetition is always best", "When a deliberate shift in category or precision should be visible", "When the writer wants to avoid stating a clear claim"],
              1,
              "Reformulation can show development, such as moving from a symptom to a diagnosis, provided the relationship remains traceable.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Edit for cohesion",
          instructions: "Revise the fictional policy paragraph, focusing on references, information order and logical links.",
          items: [
            p(
              "Fix the ambiguous reference: ‘Managers introduced mentoring, but it failed because they lacked time. They later abandoned it.’",
              "Model answer: Managers introduced mentoring, but the scheme failed because mentors lacked protected time. Managers later abandoned the scheme when no additional hours were allocated.",
              "Name the scheme and the people at each point where ambiguity could arise.",
            ),
            p(
              "Replace the mechanical sequence with one causal sentence: ‘Costs rose. Demand fell. Income was lower.’",
              "Model answer: Rising unit costs coincided with falling demand, reducing income even though prices were increased.",
              "Use a main clause for the outcome and subordinate the contributing conditions.",
            ),
            p(
              "Add this + noun to make the summary precise: ‘The pilot excluded agency workers. This ___ weakened the claim.’",
              "Model answer: The pilot excluded agency workers. This sampling restriction weakened the claim that the results represented the whole workforce.",
              "Name what is wrong with the evidence, not merely that something is wrong.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What does given–new information flow help a reader do?", ["Connect familiar information to the sentence's main new point", "Count paragraph topics", "Avoid defining technical terms"], 0, "The pattern makes the progression of information easier to process."),
        q(2, "Why can the pronoun this be problematic?", ["It is informal in all contexts", "It may have several possible antecedents", "It cannot refer to an idea"], 1, "When the reference is unclear, this + a precise noun phrase restores meaning."),
        q(3, "Which device best preserves continuity without repeating a long noun phrase?", ["A decorative quotation", "Precise reference or a lexical chain", "Changing the subject abruptly"], 1, "Reference and related vocabulary create a traceable link across sentences."),
        q(4, "What is the best test of a discourse marker?", ["Whether it sounds academic", "Whether it appears once per paragraph", "Whether it represents the actual relationship between ideas"], 2, "A marker is effective only when its logical meaning is accurate."),
      ],
    },
    {
      slug: "introductions-and-conclusions-that-work",
      title: "Introductions and conclusions that work",
      summary:
        "Frame a problem without padding, place a precise thesis where readers can use it and end by consolidating significance rather than repeating the essay.",
      objective:
        "Draft a focused introduction and a proportionate conclusion that establish scope, position and final implication.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Introductions earn the reader's attention",
          paragraphs: [
            "An introduction is not a warming-up exercise. It defines the problem, explains why the usual account is insufficient and gives the reader a route through the essay. Context should be selective: include only what is needed to understand the thesis, not a chronological tour of the subject.",
            "The thesis may appear early or after a brief orientation, but its language should match the essay's actual argument. Avoid promises such as ‘This essay will discuss many factors’ when the essay defends one position. A research question, definition or contested quotation can provide a sharper opening than a universal claim about the modern world.",
          ],
        },
        {
          type: "table",
          title: "Conclusion moves",
          columns: ["Move", "Job", "Example"],
          rows: [
            ["Reassess", "Answer the question now that the argument has been developed.", "The evidence therefore supports conditional, not unrestricted, expansion."],
            ["Synthesise", "Combine the main reasons into a new relationship.", "Speed matters because transparency makes faster decisions more credible, not because delay has no cost."],
            ["Qualify", "State what remains unresolved or outside the scope.", "Long-term effects on trust were not measured."],
            ["Project", "Offer a proportionate implication or next question.", "A second cycle should test whether the model works under heavier demand."],
          ],
          caption: "A strong conclusion adds perspective; it does not introduce an unsupported new argument.",
        },
        {
          type: "passage",
          title: "Model opening and closing: public data",
          paragraphs: [
            "Opening: Public dashboards promise to make institutional decisions visible, yet visibility is often treated as equivalent to accountability. A dashboard may display performance data while leaving the criteria, revisions and unresolved errors that produced those data concealed. This essay argues that public dashboards improve accountability only when they expose the process behind the indicator as well as the indicator itself. It examines three features—version histories, published assumptions and channels for correction—to show why transparency must be designed as a relationship rather than a display.",
            "Closing: The three features examined above matter because they allow users to challenge an institution's account of its own performance. Publishing an indicator without its assumptions invites passive observation; preserving revisions and enabling correction makes scrutiny possible. The case therefore supports a conditional conclusion: dashboards can advance accountability when they reveal how knowledge is produced, not merely what has been counted. Their effect on public trust remains an empirical question, particularly for audiences who already distrust the publishing institution.",
          ],
        },
        {
          type: "examples",
          title: "Openings and endings to avoid",
          items: [
            {
              text: "Weak opening: ‘Since the dawn of time, humans have debated technology.’ Revision: ‘The speed of a public service is usually measured by waiting time; the proposal instead measures the time between an application and a correct final decision.’",
              note: "The revision defines a specific conceptual problem instead of relying on historical generality.",
            },
            {
              text: "Weak ending: ‘In conclusion, remote work has advantages and disadvantages, and people have different opinions.’ Revision: ‘The comparison shows that flexibility is valuable only when teams preserve deliberate contact; without it, autonomy can become isolation.’",
              note: "The revision resolves the argument's central relationship instead of retreating to neutrality.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Evaluate framing and closure",
          instructions: "Choose the version that performs the stated rhetorical job most effectively.",
          items: [
            c(
              "Which opening best frames an essay on university AI-detection software?",
              ["AI is a very important topic today.", "Universities have adopted AI-detection software to protect assessment, but its apparent objectivity conceals inconsistent error rates and an unresolved distinction between detection and proof.", "This essay will discuss AI software and then reach a conclusion."],
              1,
              "The middle opening identifies the institutional purpose and immediately complicates it with two specific problems.",
            ),
            c(
              "Where should a long background history be placed if it is not essential to the thesis?",
              ["Before the thesis, regardless of relevance", "In a later section or omitted, with only essential context in the introduction", "In the conclusion as a surprise"],
              1,
              "An introduction should supply the minimum context needed to understand the position.",
            ),
            c(
              "Which conclusion best develops rather than repeats the argument?",
              ["As I have said, the three points are important.", "Therefore the policy is good and bad in equal measure.", "The three points converge on a design principle: accountability requires both visibility and a usable means of challenge."],
              2,
              "The third sentence synthesises the reasons into a principle that was not simply listed in the introduction.",
            ),
            c(
              "What makes a projected implication proportionate?",
              ["It promises a complete solution", "It follows from the evidence while marking uncertainty and scope", "It introduces a major new source not discussed in the essay"],
              1,
              "A projection should extend the established argument cautiously, not overclaim or change the subject.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Frame a complete essay",
          instructions: "Draft the opening and closing for a 1,200-word essay on whether local newspapers should receive public funding.",
          items: [
            p(
              "Write a two-sentence opening that identifies a tension between commercial decline and civic information without giving a history of the press.",
              "Model answer: Local newspapers have lost advertising revenue as classified listings moved online, yet the communities they cover still depend on verified reporting about schools, courts and councils. The funding debate is therefore not simply about rescuing a business model; it concerns whether civic information should be treated as a public good.",
              "Move quickly from the economic change to the conceptual problem.",
            ),
            p(
              "Add a bounded thesis and a selective preview of two reasons.",
              "Model answer: Targeted public funding can protect civic reporting when it supports investigative coverage and is insulated from editorial control, although blanket subsidies would entrench declining models. The argument considers both the democratic value of local scrutiny and the institutional risks of state support.",
              "State the conditions under which your recommendation holds.",
            ),
            p(
              "Write a conclusion that synthesises the value and the safeguard, then names one unresolved question.",
              "Model answer: Local reporting has civic value, but that value justifies support only where editorial independence is protected. Funding should therefore strengthen scrutiny rather than secure existing ownership. Whether readers will trust publicly supported outlets remains unresolved and should be tested through the design of any pilot.",
              "Answer the question, combine the reasons and end with a measured implication.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What should most background in an introduction do?", ["Support understanding of the thesis", "Demonstrate everything the writer has read", "Delay the position until the conclusion"], 0, "Background is functional when it supplies the context needed to understand the argument."),
        q(2, "Which is the clearest thesis sentence?", ["There are several opinions.", "I will now discuss the topic in detail.", "The policy should be revised because its exemptions undermine the fairness it claims to protect."], 2, "The third sentence states a position and the central reason supporting it."),
        q(3, "What should a conclusion avoid?", ["A restatement of the central implication", "An unsupported new argument", "A statement of remaining uncertainty"], 1, "New evidence or claims introduced only at the end cannot be properly developed."),
        q(4, "What makes a conclusion more than repetition?", ["It synthesises reasons into a broader relationship", "It repeats the thesis in longer words", "It adds a dramatic quotation unrelated to the essay"], 0, "Synthesis shows what the established reasons mean together."),
      ],
    },
    {
      slug: "nominalisation-and-academic-style",
      title: "Nominalisation and academic style",
      summary:
        "Use noun forms to package complex ideas and create abstract progression without hiding agency, weakening verbs or overloading sentences.",
      objective:
        "Convert selected processes into nominalisations and revise dense noun chains for meaning, responsibility and readability.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Nominalisation turns an event into a concept",
          paragraphs: [
            "In ‘The committee postponed the decision’, the verb postponed names an action performed by an identifiable agent. In ‘The postponement of the decision by the committee’, the noun postponement packages that action so it can become the subject or object of another proposition. Academic writing uses this resource to generalise, define and connect abstract ideas.",
            "The cost is density. A sequence such as ‘the implementation of the review of the assessment of…’ forces readers to unpack several hidden processes. Nominalisation is most effective when the concept matters more than the actor, but ethical and professional writing must still reveal who acted when responsibility is at stake.",
          ],
        },
        {
          type: "table",
          title: "Choose clause or nominalisation",
          columns: ["Purpose", "Clause", "Nominalisation"],
          rows: [
            ["Report an event", "The regulator delayed the approval.", "The delay in approval affected the launch date."],
            ["Define a process", "Patients can appeal when treatment is refused.", "Access to appeal protects patients when treatment is refused."],
            ["Develop a prior concept", "The error was serious. It exposed weak oversight.", "The seriousness of the error exposed weak oversight."],
            ["Assign responsibility", "Managers failed to test the model.", "The failure to test the model was attributable to managers."],
            ["Reduce repetition", "The team acted quickly, and this speed saved time.", "The team's speed of response reduced downtime."],
          ],
          caption: "Nominalisations often make strong topic sentences when a concrete verb would make them clumsy.",
        },
        {
          type: "examples",
          title: "Package, then unpack",
          items: [
            {
              text: "Overloaded: ‘The improvement of the efficiency of the processing of applications reduced the length of waiting.’ Revised: ‘Processing applications more efficiently reduced waiting times.’",
              note: "The revision keeps a concrete verb because the process is easy to state directly.",
            },
            {
              text: "Useful abstraction: ‘Repeated complaints led to an independent review. The review revealed a gap between policy and practice.’ Revised: ‘Repeated complaints prompted an independent review, whose findings exposed a gap between policy and practice.’",
              note: "Findings packages the result of reviewing so that it can become the subject of the explanation.",
            },
            {
              text: "Hidden agency: ‘Mistakes were made in the approval process.’ Revised: ‘Reviewers failed to reconcile two versions of the budget before approval.’",
              note: "The revision names the responsible action rather than using a nominalisation to obscure it.",
            },
          ],
        },
        {
          type: "rules",
          title: "Control nominal density",
          items: [
            "Use a nominalisation when it carries a concept forward: define it, evaluate it or make it the subject of a new claim.",
            "Prefer a concrete verb for a sequence of physical or administrative actions.",
            "Break up noun chains by identifying the main relation: which noun acts on which other noun?",
            "Restore agency with by phrases or agents as subjects when accountability matters.",
            "Check that a strong verb has not been weakened to support, conduct or make a statement when a more exact action is available.",
            "Alternate abstract topic sentences with concrete evidence so that the reader can see what the concept means in practice.",
          ],
        },
        {
          type: "exercise",
          title: "Edit academic style",
          instructions: "Choose the sentence that uses abstraction purposefully and preserves a clear relationship between ideas.",
          items: [
            c(
              "Which sentence is the clearest account of a process?",
              ["The facilitation of the submission of applications occurred online.", "The team moved the application process online.", "An online application process facilitation was implemented."],
              1,
              "The concrete verb moved communicates the change directly without unnecessary abstraction.",
            ),
            c(
              "Which sentence best develops an abstract concept?",
              ["Flexibility is useful. People can change plans.", "Flexibility matters because it allows a plan to adapt without losing its central purpose.", "The flexibility of plans is a thing."],
              1,
              "The second sentence defines the value of the concept and uses it to explain a consequence.",
            ),
            c(
              "Which revision restores responsibility?",
              ["There was a failure to communicate the risk.", "Risk communication failure was noted.", "The project director did not communicate the risk to the safety team."],
              2,
              "Naming the actor and action replaces a vague nominalisation with an accountable statement.",
            ),
            c(
              "Which sentence is the best topic sentence using nominalisation?",
              ["The thing about inequality was discussed.", "Growing inequality in access to digital services has weakened the claim that remote provision is universally convenient.", "Remote provision is convenient for some people, but inequality grows and access is unequal."],
              1,
              "The abstract noun phrase creates a precise topic while the main clause preserves a clear claim.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Transform with control",
          instructions: "Revise each sentence according to its rhetorical purpose rather than nominalising automatically.",
          items: [
            p(
              "Turn this into a useful abstract topic sentence: ‘Officials revised the forecasts twice. This made investors less confident.’",
              "Model answer: Repeated revision of the forecasts reduced investor confidence because it suggested that the underlying estimates were unstable.",
              "Package the revisions as a concept, then state their consequence and mechanism.",
            ),
            p(
              "Unpack this sentence and restore the agents: ‘The non-completion of the required verification by contractors resulted in commissioning delays.’",
              "Model answer: Contractors did not complete the required verification, so commissioning was delayed.",
              "Use concrete actors and verbs when reporting who failed to act.",
            ),
            p(
              "Use a nominalisation to connect these clauses without repeating ‘decision’: ‘The board approved the proposal. This surprised observers because it rejected a rival bid.’",
              "Model answer: The board's approval of the proposal surprised observers because the decision ruled out a rival bid.",
              "Let the second decision refer clearly to the first action.",
            ),
          ],
        },
      ],
      quiz: [
        q(1, "What is the main benefit of nominalisation?", ["It can turn a process into a concept that can be discussed and linked", "It always makes prose shorter", "It removes the need for evidence"], 0, "Nominal forms allow writers to generalise and develop abstract relationships."),
        q(2, "When should a writer prefer a concrete verb?", ["When reporting a clear action or process", "Only in dialogue", "Never in academic writing"], 0, "Concrete verbs make events and responsibilities easier to understand."),
        q(3, "What can excessive nominalisation obscure?", ["The definition of a term", "Who acted and how the process occurred", "The source's publication date"], 1, "Long noun phrases can hide agency and force readers to reconstruct actions."),
        q(4, "Which is the most controlled use of abstraction?", ["The implementation was actioned.", "Repeated revisions of the forecasts suggested instability and weakened investor confidence.", "There was a decision about the proposal."], 1, "The second sentence uses an abstract process to support a specific interpretive claim."),
      ],
    },
  ],
};
