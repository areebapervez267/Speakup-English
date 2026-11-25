import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2GrammarUnit4: LessonUnit = {
  title: "Style and variation",
  description:
    "Exploit rhetorical syntax, analyse interactional spoken grammar and wordplay, describe global variation and produce an independent stylistic analysis.",
  lessons: [
    {
      slug: "formal-literary-and-rhetorical-grammar",
      title: "Formal, literary and rhetorical grammar",
      summary:
        "Use parallelism, antithesis, anaphora, epistrophe, asyndeton and periodic structure to shape emphasis and rhythm without sacrificing clarity.",
      objective:
        "Construct and analyse rhetorical sentence patterns, recognising how grammatical repetition and delayed completion guide an audience's attention.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Rhetoric is grammar organised for an audience",
          paragraphs: [
            "A speaker says, “We inherited the debt; we inherited the delay; we did not inherit the excuse.” The repeated subject–verb frame creates rhythm, while the final inversion of expectation supplies the punch. The effect depends on grammatical parallelism: each clause gives the audience a structure it can predict before the final variation arrives.",
            "Rhetorical grammar goes beyond ornament. Repetition can establish a collective voice, antithesis can define a boundary, asyndeton can accelerate a list and a periodic sentence can delay the main judgement until the audience has seen the reasons. At C2, the writer must be able to identify the syntactic pattern, reproduce it accurately and judge whether its intensity suits the occasion.",
          ],
        },
        {
          type: "rules",
          title: "Master the pattern and its purpose",
          items: [
            "Parallelism repeats a grammatical frame while changing lexical content: “The first draft was rushed; the second was careless; the final version was defensible.” Matching clause forms makes the comparison memorable.",
            "Antithesis places contrasted ideas in balanced structures: “The policy promises certainty but produces delay.” Chiasmus reverses the order of paired elements, often creating a compact paradox rather than merely repeating a frame.",
            "Anaphora repeats an opening element across clauses; epistrophe repeats a closing element. The repetition must be deliberate and the returning word should remain grammatically compatible with each new context.",
            "Asyndeton omits conjunctions from a list for speed or force; polysyndeton repeats them for solemnity or accumulation. A periodic sentence postpones its main clause until subordinate or parallel material has prepared it.",
          ],
        },
        {
          type: "examples",
          title: "Rhetorical patterns in original sentences",
          items: [
            {
              text: "We came to listen, we came to question, and we came to decide.",
              note: "Anaphoric we came establishes a collective rhythm, while the parallel infinitives create a three-part progression.",
            },
            {
              text: "The city needs bridges, not barriers; accountability, not assurances; evidence, not excuses.",
              note: "Antithesis and parallel noun phrases turn a policy contrast into a compact cadence.",
            },
            {
              text: "The commission promised openness, transparency and reform, and consultation, and accountability, and change.",
              note: "Polysyndeton accumulates promises, while the final shift from reform to more abstract nouns suggests repetition without substance.",
            },
            {
              text: "When the warnings had been ignored, when the safeguards had failed and when the public had been misled, the inquiry finally began.",
              note: "The periodic structure delays the main clause, giving the preceding failures cumulative weight.",
            },
          ],
        },
        {
          type: "table",
          title: "Pattern, syntax and effect",
          columns: ["Pattern", "Grammatical shape", "Rhetorical effect"],
          rows: [
            ["Anaphora", "Repeated opening + varied completion", "Collective emphasis and rhythm"],
            ["Antithesis", "Balanced contrasting clauses or phrases", "A sharply defined boundary"],
            ["Asyndeton", "List without repeated conjunctions", "Speed, force or intimacy"],
            ["Periodic sentence", "Main clause after dependent material", "Delay and controlled climax"],
          ],
        },
        {
          type: "exercise",
          title: "Identify the syntax behind the effect",
          instructions:
            "Choose the analysis or construction that accurately matches the rhetorical pattern.",
          items: [
            c(
              "Which sentence uses anaphora most clearly?",
              ["Every delay was avoidable, every warning was ignored and every safeguard failed.", "The delay was avoidable, but the warning was ignored.", "Although warnings were ignored, delay followed."],
              0,
              "The repeated opening Every establishes anaphora across three parallel clauses.",
            ),
            c(
              "Choose the clearest antithesis.",
              ["We need action, not another review.", "We need action and another review.", "We need another review of the action."],
              0,
              "The balanced contrast between action and another review is grammatically explicit through not.",
            ),
            c(
              "Which list uses polysyndeton?",
              ["Evidence, testimony and records", "Evidence and testimony and records", "Evidence, testimony, but records"],
              1,
              "The conjunction and is repeated before each item rather than appearing only before the last.",
            ),
            c(
              "Which revision creates a periodic sentence?",
              ["The vote failed after the amendments were rejected.", "After the amendments were rejected, the coalition divided and the vote failed.", "The coalition divided. The vote failed."],
              1,
              "Two dependent circumstances precede the main clause, delaying its resolution until the end.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Compose with controlled repetition",
          instructions:
            "Write each pattern and then create one neutral alternative to compare its effect.",
          items: [
            p(
              "Use anaphora with the repeated opening “The inquiry should” and three actions.",
              "Model answer: The inquiry should examine the warnings, test the safeguards and answer the public.",
              "Keep the subject–modal frame constant and use parallel verb phrases after it.",
            ),
            p(
              "Write an antithetical sentence about speed and accuracy in decision-making.",
              "Model answer: A sound decision requires evidence before speed, and candour before reassurance.",
              "The paired clauses balance before/after and candour/reassurance through parallel noun phrases.",
            ),
            p(
              "Write a two-sentence passage using asyndeton followed by polysyndeton, then explain the contrast.",
              "Model answer: The room held maps, letters, photographs, silence. The speaker offered apologies and explanations and assurances and promises, but no answer.",
              "The first list rushes through images; the repeated conjunctions in the second slow and inflate the excuses.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What makes anaphora rhetorically effective?",
          ["Repeated grammatical openings let the audience anticipate the pattern before each new completion", "It removes all content words", "It guarantees a logical conclusion"],
          0,
          "The predictable frame creates rhythm and collective emphasis, while the varied endings develop the message.",
        ),
        q(
          2,
          "Which feature most clearly defines antithesis?",
          ["A list without conjunctions", "A contrast expressed through balanced grammatical structures", "A question that requires an answer"],
          1,
          "Antithesis depends on both contrast and formal balance, not merely on the presence of but or not.",
        ),
        q(
          3,
          "Why might a public speaker choose polysyndeton over a standard list?",
          ["To slow the accumulation and give each item solemn or emphatic weight", "To make every item grammatically unrelated", "To remove the need for parallel structure"],
          0,
          "Repeated conjunctions alter pace and can magnify, saturate or solemnise a list.",
        ),
        q(
          4,
          "What is the main effect of a periodic sentence?",
          ["It makes the central proposition appear first", "It must always end with a question", "It postpones the central proposition until preparatory material has accumulated"],
          2,
          "The audience receives subordinate or parallel material before the main clause, creating delay and often climax.",
        ),
      ],
    },
    {
      slug: "spoken-grammar-and-discourse",
      title: "Spoken grammar and discourse",
      summary:
        "Analyse interactional syntax such as dislocation, increments, reformulation, follow-ups and emphatic echoes, distinguishing grammatical organisation from hesitation or error.",
      objective:
        "Transcribe and interpret spontaneous spoken structures, recognising how participants build turns, align with one another and repair emerging meaning.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "A turn is built collaboratively",
          paragraphs: [
            "Spoken syntax is shaped by turn-taking. A speaker begins before the whole proposition is fixed, another participant supplies a completion or a follow-up, and the first speaker then reformulates. What can look like repetition or incompleteness in a transcript is often doing interactional work: checking, elaborating, confirming or disagreeing.",
            "At C2, the task is not to correct a transcript into written prose immediately. It is to see how grammar responds to the developing exchange. Dislocation manages topic, increments extend a turn, echoes test or challenge a prior formulation and follow-ups align speakers. Punctuation in a transcript should help reveal this organisation without pretending that intonation and timing can be fully captured on the page.",
          ],
        },
        {
          type: "dialogue",
          title: "A design review in progress",
          intro:
            "This original exchange preserves extensions, echoes and a collaboratively completed reformulation.",
          lines: [
            { speaker: "Inez", text: "The problem with the blue cover is it shows every fingerprint." },
            { speaker: "Marco", text: "Every fingerprint, yes." },
            { speaker: "Inez", text: "And that's what the client will notice first, the surface." },
            { speaker: "Marco", text: "Not the content?" },
            { speaker: "Inez", text: "The content's fine. It's the presentation that lets it down." },
            { speaker: "Marco", text: "So a matte finish, that's what you're recommending." },
            { speaker: "Inez", text: "Exactly. Something that doesn't show every mark." },
          ],
        },
        {
          type: "rules",
          title: "Interactional grammar resources",
          items: [
            "Dislocation separates a topic or referent from the clause: “The blue cover, it shows every fingerprint” announces the topic first; “every fingerprint, yes” echoes and confirms a focused element.",
            "An increment extends an already complete turn, often adding an explanation or specification: “The content's fine” can stand alone, while the following clause supplies the contrasting reason.",
            "Reformulation restates an emerging position after another participant's intervention: “It's the presentation that lets it down” uses a cleft to recast the earlier point about the surface.",
            "Follow-ups such as “Exactly,” “So…” and a repeated clause display alignment or invite confirmation. Their force depends on timing, stress and the prior turn, not syntax alone.",
          ],
        },
        {
          type: "table",
          title: "From interaction to written planning",
          columns: ["Spoken resource", "Dialogue example", "Interactional job"],
          rows: [
            ["Topic head", "The blue cover, it shows…", "Announces the object under discussion"],
            ["Echo", "Every fingerprint, yes.", "Confirms the salient problem"],
            ["Challenge", "Not the content?", "Tests the direction of the claim"],
            ["Clefted reformulation", "It's the presentation that lets it down.", "Sharpens the revised diagnosis"],
          ],
        },
        {
          type: "exercise",
          title: "Read the exchange grammatically",
          instructions:
            "Choose the analysis that best accounts for the structure and its role in the conversation.",
          items: [
            c(
              "What does Marco's echo “Every fingerprint, yes” primarily do?",
              ["It confirms the feature Inez has made salient", "It introduces an unrelated subject", "It rejects the blue cover"],
              0,
              "The repeated fragment and yes align Marco with Inez's description and foreground the visibility of marks.",
            ),
            c(
              "What is the function of “Not the content?”",
              ["It asks for a past date", "It challenges the implied scope of the problem", "It completes a relative clause"],
              1,
              "The elliptical question tests whether the client's objection concerns content rather than surface.",
            ),
            c(
              "Why does Inez use “It's the presentation…” after Marco's question?",
              ["To report a past habit", "To ask permission to leave", "To reformulate the problem in a sharper, contrasted focus"],
              2,
              "The it-cleft separates presentation from content and makes the revised judgement explicit.",
            ),
            c(
              "Which turn best illustrates an increment?",
              ["Every fingerprint, yes.", "The content's fine. It's the presentation that lets it down.", "Not the content?"],
              1,
              "The second sentence extends the first complete turn by adding the contrasting explanation.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Analyse and recast a spoken exchange",
          instructions:
            "Answer from the dialogue, then convert the exchange into planned prose while preserving its negotiation.",
          items: [
            p(
              "Explain the interactional work done by Inez's second turn.",
              "She extends her first point by adding the client's likely reaction and specifying the surface as the relevant issue.",
              "Look for the increment and the right-dislocated tail.",
            ),
            p(
              "Summarise the disagreement and resolution in two written sentences.",
              "Model answer: Inez argued that the visible surface, rather than the content, would undermine the design. Marco reformulated her recommendation as a matte finish, and she agreed.",
              "Preserve the contrast and the confirmation, but remove spoken fragments.",
            ),
            p(
              "Write a four-line micro-dialogue containing a topic head, an echo and a clefted reformulation.",
              "Model answer: A: “The timing, it's too tight.” B: “Too tight, yes.” A: “What we need is another rehearsal.” B: “Exactly.”",
              "Use a head to announce the topic, an echo to align and a wh-cleft to sharpen the recommendation.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why can a right-dislocated element be useful in speech?",
          ["It makes the referent explicit after the clause has been produced", "It guarantees that the turn is formal", "It removes the need for any context"],
          0,
          "The tail helps the listener identify the referent while the speaker continues managing the turn.",
        ),
        q(
          2,
          "What distinguishes an increment from simple hesitation?",
          ["It always consists only of silence", "It adds a syntactically usable extension that develops the completed turn", "It has no relationship to the prior turn"],
          1,
          "An increment extends meaning or interaction in a structured way; hesitation marks planning or delay.",
        ),
        q(
          3,
          "Why is a cleft useful for reformulating a contested point?",
          ["It erases the earlier disagreement", "It converts the turn into a command", "It isolates the revised element and separates it from the rejected alternative"],
          2,
          "The focused constituent lets the speaker sharpen the position while the background clause acknowledges the broader issue.",
        ),
        q(
          4,
          "What should a discourse transcription avoid assuming from punctuation alone?",
          ["That commas and full stops fully capture intonation, timing and overlap", "That speakers take turns", "That words can be quoted"],
          0,
          "Written punctuation is only a partial representation of prosody and interaction, so interpretations should remain evidence-based.",
        ),
      ],
    },
    {
      slug: "grammar-in-humour-and-wordplay",
      title: "Grammar in humour and wordplay",
      summary:
        "Analyse jokes built from syntactic ambiguity, garden paths, zeugma, scope and parallelism violations, then create wordplay whose humour depends on grammatical design.",
      objective:
        "Identify the structural mechanism in a humorous sentence and produce original wordplay that depends on a controlled reinterpretation rather than unrelated punchlines.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Grammar can make the reader take the wrong turn",
          paragraphs: [
            "Consider: “The horse raced past the barn fell.” The first words invite the reading that raced is the main verb, but fell then forces a reinterpretation: the horse that was raced past the barn fell. The humour or surprise comes from a temporary syntactic commitment that the ending reverses.",
            "Wordplay also exploits one structure doing two jobs, a modifier attaching to an unexpected constituent or a familiar parallelism breaking late. At C2, analysing the mechanism requires more than naming a pun. You must identify the competing parses, the word that triggers the switch and the point at which the reader's expectation fails.",
          ],
        },
        {
          type: "rules",
          title: "Four grammatical routes to wordplay",
          items: [
            "Syntactic ambiguity allows more than one grammatical attachment. “I saw the man with the telescope” can mean either that the man had the telescope or that the observer used it.",
            "A garden-path sentence leads readers toward a plausible parse that later words make untenable: “The old man the boats.” Old is initially read as an adjective, but man is the verb and the old the subject noun phrase.",
            "Zeugma or syllepsis makes one word govern items that require different semantic or grammatical readings: “She lost her keys and her temper.” Lost is literal for keys and figurative for temper, while the verb–object frame remains compact.",
            "Scope and parallelism violations can create a punchline by violating an expected pairing: “He packed a shirt, a map and a sudden departure.” Packing a departure is semantically anomalous, but the parallel list makes it momentarily plausible.",
          ],
        },
        {
          type: "examples",
          title: "Original miniature wordplay",
          items: [
            {
              text: "The committee tabled the report and the motion.",
              note: "Tabled can mean ‘presented’ or ‘postponed’, depending on variety; the ambiguity is lexical as well as syntactic.",
            },
            {
              text: "She gave him a look that could stop a clock and ask it the time.",
              note: "The relative clause extends a conventional idiom into an absurd but grammatically controlled personification.",
            },
            {
              text: "He liked his coffee strong and his evidence weak.",
              note: "The adjective complements are parallel, but the values clash, producing humour through evaluative incongruity.",
            },
            {
              text: "The proof was in the pudding, but the pudding declined to comment.",
              note: "A literalised idiom creates a comic personification without changing the underlying clause structure.",
            },
          ],
        },
        {
          type: "table",
          title: "Mechanism and reader response",
          columns: ["Mechanism", "Structural cue", "Reader's task"],
          rows: [
            ["Attachment ambiguity", "A prepositional phrase with two possible hosts", "Choose or revise the constituent it modifies"],
            ["Garden path", "A familiar early parse contradicted by the ending", "Reanalyse the earlier words"],
            ["Zeugma", "One verb with literal and figurative objects", "Recognise the deliberate semantic split"],
            ["Scope play", "A modifier whose reach is unexpectedly wide", "Reconsider what it limits"],
          ],
        },
        {
          type: "exercise",
          title: "Explain the comic mechanism",
          instructions:
            "Choose the analysis that identifies the grammatical source of the effect.",
          items: [
            c(
              "What makes “The old man the boats” initially difficult?",
              ["Old is first read as an adjective before man is reanalysed as a verb", "Boats is plural", "The sentence contains a modal"],
              0,
              "The reader must abandon the noun-phrase parse and recognise the old as a nominal subject with man as the verb.",
            ),
            c(
              "Which example relies most clearly on zeugma?",
              ["The bell rang loudly.", "She lost her keys and her temper.", "The old man the boats."],
              1,
              "Lost applies literally to keys and figuratively to temper within the same coordinated verb–object structure.",
            ),
            c(
              "Why is “I saw the man with the telescope” ambiguous?",
              ["With the telescope can modify saw or the man", "Saw has no object", "The man must be holding something"],
              0,
              "The prepositional phrase can specify the instrument used for seeing or a property of the man.",
            ),
            c(
              "What produces the surprise in “He packed a shirt, a map and a sudden departure”?",
              ["The parallel list temporarily licenses an impossible literal object for packed", "The sentence has no verb", "A map cannot be packed"],
              0,
              "The coordinated noun phrases create a familiar list pattern that breaks when the abstract event departure arrives.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Write and annotate original wordplay",
          instructions:
            "Create each example and explain the reader's likely reanalysis in one sentence.",
          items: [
            p(
              "Write a zeugma sentence using one verb with one literal object and one figurative object.",
              "Model answer: The negotiation broke the impasse and three pencils.",
              "Broke is literal for pencils and figurative for the impasse, with one repeated syntactic frame.",
            ),
            p(
              "Write an attachment-ambiguous sentence about a photographer and a camera.",
              "Model answer: The photographer saw the bird with the camera. The phrase with the camera can indicate either the instrument used or a property of the bird.",
              "Do not use context that accidentally forces only one reading.",
            ),
            p(
              "Create a short garden-path sentence about a building or object and explain the initial and final parses.",
              "Model answer: The complex houses married soldiers. Initially, complex appears to modify houses; finally, houses is the verb and married its subject.",
              "Make the second parse grammatical and the surprise deliberate rather than accidental.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What must happen at the end of a successful garden-path sentence?",
          ["A later constituent forces the reader to abandon the initial parse", "Every verb becomes a modal", "The sentence must contain a relative pronoun"],
          0,
          "The comic or startling effect depends on a grammatically valid reanalysis after an initially plausible reading fails.",
        ),
        q(
          2,
          "Which mechanism is at work in “The storm sank the boat and the spirits of the crew”?",
          ["Inversion after a negative adverb", "Zeugma: sank is literal for the boat and figurative for spirits", "A future perfect passive"],
          1,
          "One verb controls two objects with different semantic relationships, producing a compact figurative extension.",
        ),
        q(
          3,
          "Why does “The horse raced past the barn fell” mislead many readers?",
          ["Fell is a noun", "The horse is plural", "Raced initially appears to be the main verb, but the ending requires a reduced relative parse"],
          2,
          "The final fell forces raced past the barn to be read as a participial modifier of the horse.",
        ),
        q(
          4,
          "What makes grammatical wordplay suitable for sophisticated comedy rather than mere error?",
          ["The alternative readings are controlled and become interpretable after the trigger", "The sentence must be ungrammatical", "The audience must already know every technical term"],
          0,
          "Effective wordplay exploits systematic ambiguity; once the trigger is recognised, the competing structure can be recovered.",
        ),
      ],
    },
    {
      slug: "regional-and-global-variation",
      title: "Regional and global variation",
      summary:
        "Describe systematic grammatical variation across English-speaking communities without treating difference as error, including agreement, negation, aspect, articles and interactional forms.",
      objective:
        "Recognise feature distributions, explain their grammatical systematicity and adapt transcription and analysis to the variety being studied.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Variation follows communities and contexts",
          paragraphs: [
            "“The committee has decided” and “The committee have decided” can both be standard, depending on variety and whether the committee is being treated as one body or a collection of people. This is not a simple contrast between correct and incorrect grammar. It reflects different agreement conventions and interpretive choices.",
            "Global English also includes systematic features that differ from international written norms: invariant negative tags, habitual be, negative concord, distinctive article use and different preferences for progressive or perfect aspect. A linguist describes the variety, speaker and context before judging a form. The analyst's task is to identify the rule operating in that community, not to impose an unrelated standard.",
          ],
        },
        {
          type: "rules",
          title: "Describe variation without hierarchy",
          items: [
            "Treat collective-noun agreement as variety-sensitive. British English often permits plural agreement with committee, government or team when members are foregrounded; American English more often favours singular agreement for the institution.",
            "Existential there's with a plural notional subject is widespread in speech: “There's two letters for you.” Formal edited writing often prefers there are, but the spoken form is systematic, not a random failure to count.",
            "Negative concord, as in “I didn't see nobody,” uses more than one negative element to express one negative proposition. It is systematic in some varieties and should be transcribed as used rather than silently corrected in a sociolinguistic record.",
            "Aspect, article and tag choices vary across communities. Habitual be in some varieties, invariant isn't it/innit in some South Asian Englishes and quotative be like across many varieties each carry regular discourse or grammatical functions.",
          ],
        },
        {
          type: "examples",
          title: "Feature sketches with context",
          items: [
            {
              text: "“The government have announced a review,” said the London commentator.",
              note: "Plural notional agreement foregrounds the people constituting the government; it is standard in many British contexts.",
            },
            {
              text: "“There's three folders on the desk,” the clerk told me.",
              note: "Existential there's has extended to a plural subject in informal speech; there are would be the edited formal alternative.",
            },
            {
              text: "“I didn't tell nobody about the meeting,” the participant explained.",
              note: "Negative concord is a regular feature in some communities and should be analysed within that variety.",
            },
            {
              text: "“She be revising the introduction every evening,” the student said, describing a routine.",
              note: "Habitual be marks recurring action in some varieties, including African American English; it is not an imperfect attempt at is revising.",
            },
          ],
        },
        {
          type: "table",
          title: "Variation dimensions and analytical cautions",
          columns: ["Feature", "Possible forms", "Caution"],
          rows: [
            ["Collective agreement", "committee has / committee have", "Consider variety and notional interpretation"],
            ["Existential subject", "there's + plural / there are + plural", "Distinguish speech from edited formal prose"],
            ["Negative concord", "didn't see nobody", "Do not double-count the negatives semantically"],
            ["Tag formation", "isn't it / innit / okay?", "Identify community-specific tag systems"],
          ],
        },
        {
          type: "exercise",
          title: "Apply descriptive analysis",
          instructions:
            "Choose the analysis that respects the feature's context and systematic grammar.",
          items: [
            c(
              "Which description best accounts for “There's two applicants waiting”?",
              ["It proves the speaker cannot count", "It is a widespread informal existential pattern with a plural notional subject", "It is the required formal written form in every variety"],
              1,
              "The form is a regular spoken pattern; edited formal prose may favour there are, but the difference is contextual rather than a counting error.",
            ),
            c(
              "How should a sociolinguistic transcript represent negative concord?",
              ["Transcribe the form as used and note the variety's system", "Automatically delete every extra negative", "Replace the speaker's grammar with the transcriber's"],
              0,
              "Descriptive transcription preserves the evidence needed to analyse systematic variation.",
            ),
            c(
              "Why can both “The team has” and “The team have” be acceptable?",
              ["Neither form has a subject", "Plural agreement is never standard", "Agreement depends on variety and whether members or the institution are foregrounded"],
              2,
              "Notional agreement permits a collective noun to take plural agreement when its members are salient, especially in British English.",
            ),
            c(
              "What is habitual be doing in “She be working late during examinations”?",
              ["Marking a recurring routine in a variety with habitual be", "Reporting a single past action", "Forming a present perfect passive"],
              0,
              "The invariant be has a habitual function distinct from is in this grammatical system.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Conduct a small variation analysis",
          instructions:
            "Describe each feature, then draft a neutral analytical statement without ranking varieties.",
          items: [
            p(
              "Compare “The company has” and “The company have” in terms of possible interpretation.",
              "Model answer: The first treats the company as a single institution; the second can foreground its members and is standard in varieties permitting notional plural agreement.",
              "Name both the agreement convention and the interpretation.",
            ),
            p(
              "Rewrite a descriptive note about “There's several messages” without calling it incorrect.",
              "Model answer: The speaker uses existential there's with a plural subject, a regular informal pattern. In edited formal prose, there are is often preferred.",
              "Contrast context and register rather than competence.",
            ),
            p(
              "Find or recall one tag form from a community you know and write a cautious analysis of its possible function.",
              "Model answer: The speaker uses innit as a general interactional tag rather than only as the negative of is it. In that variety, it can seek agreement across different propositions.",
              "Base the description on observed use and avoid assuming one global function.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the most appropriate principle for analysing a grammatical feature in an unfamiliar variety?",
          ["Describe its systematic use before comparing it with another norm", "Assume every difference is an error", "Replace it with the analyst's preferred form"],
          0,
          "Variation analysis starts with the community's grammar and context; comparison comes after accurate description.",
        ),
        q(
          2,
          "Why can collective nouns take plural agreement in some standard varieties?",
          ["The noun has become plural in spelling", "Notional agreement can foreground the members rather than the institution", "Plural agreement is limited to questions"],
          1,
          "Agreement may follow meaning and viewpoint as well as formal number, especially with government, team or committee.",
        ),
        q(
          3,
          "What is negative concord an example of?",
          ["An inability to use not", "A mandatory feature of formal academic prose", "A systematic pattern in which multiple negative elements realise one negative meaning"],
          2,
          "The negatives operate together within the variety's system rather than each creating a separate logical positive.",
        ),
        q(
          4,
          "Which statement best distinguishes habitual be from ordinary progressive be?",
          ["Habitual be marks recurring action in varieties that have that form, while is revising presents ongoing activity", "Habitual be always marks a completed past action", "The two forms are identical in every context"],
          0,
          "The forms differ in grammatical function and distribution; habitual be is not merely a missing -ing ending.",
        ),
      ],
    },
    {
      slug: "a-final-stylistic-analysis",
      title: "A final stylistic analysis",
      summary:
        "Produce an independent stylistic analysis of an original passage by tracing syntax, aspect, modality, cohesion and variation, then defend a purposeful revision.",
      objective:
        "Synthesise the course's analytical tools to explain how grammatical choices construct a voice and revise a passage with explicit stylistic evidence.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Move from labels to interpretation",
          paragraphs: [
            "A final analysis should not merely announce that a passage contains inversion, a cleft and a past perfect. It should show how those choices work together: which viewpoint they establish, what they assume, how they pace the reader's attention and whether they suit the intended audience.",
            "The passage below is original material written for this lesson. It blends public commentary with a retrospective narrative. Read it first as a reader, then as an analyst. Your evidence should come from exact phrases and grammatical relationships, not from a general impression that the writing is ‘advanced’.",
          ],
        },
        {
          type: "examples",
          title: "Passage: The measure of a city",
          intro:
            "The three paragraphs are designed for close grammatical analysis.",
          items: [
            {
              text: "For decades, the river had been treated as a boundary: something to cross, not something to belong to. What changed was not the water but the civic imagination. In 2019, the city was going to open the first continuous riverside path; by the following spring, it had.",
              note: "Perfect aspect establishes an earlier background; the wh-cleft isolates the change; future-in-the-past followed by ellipsis compresses expectation and fulfilment.",
            },
            {
              text: "Not everyone welcomed the path. That said, the objections were rarely to access itself; they concerned who would pay, who would benefit and whose version of the river would be made visible.",
              note: "A negative-focused follow-up and absolute marker manage concession, while the parallel wh-phrases structure a distributive critique.",
            },
            {
              text: "The strongest argument for the project is not that it solved every dispute. It is that it made disagreement public, concrete and difficult to ignore.",
              note: "The repeated frame creates antithesis, and the final parallel adjectives make the civic value emerge through rhythm rather than assertion alone.",
            },
          ],
        },
        {
          type: "table",
          title: "An evidence-led analysis plan",
          columns: ["Analytical question", "Evidence to collect", "Interpretive test"],
          rows: [
            ["How is time organised?", "Perfect forms, date phrases, would/ellipsis", "What is earlier, expected or completed from which viewpoint?"],
            ["Where is the argument focused?", "Clefts, fronting, end-position adjectives", "Which alternatives are assumed or rejected?"],
            ["How is dissent handled?", "Concession, absolute marker, parallel questions", "Does the syntax integrate or marginalise the objection?"],
            ["What voice is constructed?", "Institutional we, public nouns, evaluative rhythm", "Is the voice authoritative, inclusive or deliberately restrained?"],
          ],
        },
        {
          type: "tip",
          title: "Defend every edit",
          text:
            "A revision should have a stated audience and purpose. If you simplify a cleft, say whether the change improves transparency but loses a useful focus. If you remove an inversion, identify the rhetorical effect that disappears. Strong stylistic analysis weighs effects rather than assuming that the most complex version is the best.",
        },
        {
          type: "exercise",
          title: "Build an evidence-based reading",
          instructions:
            "Use exact wording from the passage to answer each analytical question.",
          items: [
            c(
              "What does “had been treated” establish in the opening sentence?",
              ["A state extending through the period before the later change", "A future treatment after the path opens", "A repeated present-tense duty"],
              0,
              "The past perfect passive places the treatment before the narrative reference point of change.",
            ),
            c(
              "What is focused after the wh-cleft “What changed was…”?",
              ["The river's physical composition", "The civic imagination rather than the water", "The date 2019"],
              1,
              "The complement explicitly contrasts civic imagination with the unchanged water.",
            ),
            c(
              "How does “That said” function in paragraph two?",
              ["It marks a concessive absolute while allowing the critique to continue", "It reports a direct quotation from a resident", "It establishes a future deadline"],
              0,
              "The fixed absolute acknowledges the preceding welcome before refining the nature of the objections.",
            ),
            c(
              "Which resource makes the final civic value most memorable?",
              ["A modal perfect", "Parallel adjectives after a repeated contrastive frame", "A negative interrogative tag"],
              1,
              "Public, concrete and difficult to ignore form a rhythmic series within the it-clefted contrast.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Complete the final analytical portfolio",
          instructions:
            "Answer in sequence and finish with a revision that can be defended through grammatical evidence.",
          items: [
            p(
              "Explain the temporal design of “was going to open…; by the following spring, it had.”",
              "Model answer: Was going to presents the opening as an intention or expectation from 2019; the later past perfect ellipsis confirms completion by the following spring.",
              "Track the shift from anticipated future to realised past without repeating opened.",
            ),
            p(
              "Analyse how the parallel wh-phrases organise the objections.",
              "Model answer: Who would pay, who would benefit and whose version… separates distributive questions about financing, access and representation, giving each a comparable grammatical weight.",
              "Consider both the repeated form and the movement from economic to cultural concerns.",
            ),
            p(
              "Rewrite paragraph three for a neutral planning report, then explain one effect your revision removes.",
              "Model answer: The project is valuable because it created a public forum for concrete disagreement. Neutral: The project created a public forum in which disagreements became visible and specific. The revision removes the antithetical rhythm and the emphatic cleft, reducing rhetorical force while increasing procedural directness.",
              "Retain the supported claim; do not add evidence that is absent from the passage.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the most defensible way to begin a stylistic analysis?",
          ["List every advanced form before reading", "Identify an exact grammatical feature and connect it to a reader-oriented effect", "Assume complexity guarantees literary quality"],
          1,
          "Analysis must move from textual evidence to interpretation rather than from a checklist of labels.",
        ),
        q(
          2,
          "How does the future-in-the-past plus past perfect sequence shape the account of the path?",
          ["It moves from an earlier expectation to confirmed later completion", "It denies that the path ever opened", "It makes all events simultaneous"],
          0,
          "Was going to places the expectation in 2019, while had confirms completion relative to the following spring.",
        ),
        q(
          3,
          "Why are the three wh-phrases in paragraph two analytically important?",
          ["They give financing, benefit and representation equal grammatical weight", "They establish three chronological dates", "They turn the passage into direct speech"],
          0,
          "Parallel who/whose questions organise different dimensions of the critique into a balanced distributive list.",
        ),
        q(
          4,
          "What should a strong revision justification acknowledge?",
          ["Only the number of subordinate clauses", "The assumption that simpler is always better", "Both the improvement gained and any rhetorical effect lost"],
          2,
          "Stylistic revision involves trade-offs; explaining both gains and losses demonstrates control rather than automatic simplification.",
        ),
      ],
    },
  ],
};
