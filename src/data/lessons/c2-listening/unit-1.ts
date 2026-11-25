import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c2ListeningUnit1: LessonUnit = {
  title: "Unscripted English",
  description:
    "Process spontaneous talk, severe reductions, conversational repair and idiomatic language across unfamiliar voices.",
  lessons: [
    {
      slug: "natural-spontaneous-speech",
      title: "Natural spontaneous speech",
      summary:
        "Follow two experienced cooks improvising a menu after a failed delivery, including tangents, self-corrections and unfinished collaborative sentences.",
      objective:
        "Follow spontaneous speech by tracking the practical goal through digressions rather than expecting complete, pre-planned sentences.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Before you listen: purpose survives the tangents",
          paragraphs: [
            "After a delivery fails, two cooks are redesigning a wedding menu while service is still finishing around them. Their conversation moves from memory to complaint to improvisation without returning neatly to the problem.",
            "Keep one anchor question in mind: what must be decided, and what has changed since the last plan? Spontaneous speech often circles a goal before reaching it. Fillers and unfinished sentences can give another speaker time to continue the thought.",
          ],
        },
        {
          type: "transcript",
          title: "Backstage: improvising the wedding menu",
          context:
            "Rhea is the head chef and Mick is her sous chef. They are speaking quickly after a kitchen service, with occasional interruptions from the room rather than from each other.",
          lines: [
            { speaker: "Rhea", text: "Right, the salmon's cancelled, obviously. Forty covers, and the veg box hasn't come—well, it's come, but it's all stuff we used on lunch. What've we actually got?" },
            { speaker: "Mick", text: "Potatoes, leeks, mushrooms, enough cream to—hang on, don't look at me like that, I haven't touched it. It was like that when I opened the fridge." },
            { speaker: "Rhea", text: "I'm not looking. I'm listening. Go on." },
            { speaker: "Mick", text: "So we could do a leek and mushroom thing, then chicken—no, chicken's for tomorrow. The pork's here, though. Slow-cooked pork, and the sauce can be—" },
            { speaker: "Rhea", text: "—mustard, because the couple loved that one at the tasting. Sorry, you go. That's your bit." },
            { speaker: "Mick", text: "I was going to say cream, but mustard's better. My gran did it like that. Not that we're doing wedding food in a hotel like my gran's pub, obviously—different scale, same principle." },
            { speaker: "Rhea", text: "Same principle, yes. Forty plates. Have we got enough mustard, though? And don't say “probably”; I've had a day of probably." },
            { speaker: "Mick", text: "Two unopened tubs behind the eggs. So: leek and mushroom starter, pork with mustard sauce, potatoes three ways. Dessert's still the panna cotta?" },
            { speaker: "Rhea", text: "Panna cotta, yes. Tell the front of house before they ring the couple. And Mick? Next time the supplier says “should be fine”, write down what they've actually promised." },
            { speaker: "Mick", text: "Too late for this wedding, but noted for the next one. I'll get the leeks on before the memory becomes a story." },
          ],
        },
        {
          type: "tip",
          title: "Hold the goal through the detail",
          text: "In spontaneous talk, return repeatedly to the central constraint: forty covers, missing ingredients and a menu already promised to the client. Let tangents pass without forcing them into the decision. When one speaker completes another's phrase, test whether the completion is accepted; here, Rhea replaces Mick's proposed cream sauce with mustard and he accepts the improvement. Track accepted corrections, not merely the last words spoken.",
        },
        {
          type: "exercise",
          title: "Recover the working menu",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "How many people is the wedding meal for?",
              ["Twenty", "Forty", "Fourteen"],
              1,
              "Rhea specifies forty covers at the start and refers to forty plates later.",
            ),
            c(
              "Why does Mick mention the cream before the sauce is settled?",
              ["He wants to replace the pork", "He is explaining the missing delivery", "He is tentatively suggesting a sauce ingredient"],
              2,
              "He begins “the sauce can be” and offers cream before Rhea suggests mustard.",
            ),
            c(
              "Who proposes mustard for the pork?",
              ["The couple at the tasting", "Rhea", "Mick's grandmother"],
              0,
              "Rhea remembers that the couple loved the mustard version at the tasting and proposes it again.",
            ),
            c(
              "Where are the unopened mustard tubs?",
              ["Behind the eggs", "In the freezer", "At the supplier's depot"],
              1,
              "Mick says there are two unopened tubs behind the eggs.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Track improvisation, not every word",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "How does Mick respond when Rhea replaces his cream idea with mustard?",
              "He accepts it as better and links it to a memory of his grandmother's cooking.",
              "Acceptance is shown by “mustard's better”, not by silence.",
            ),
            p(
              "Why does Rhea say “don't say probably”?",
              "She needs confirmed quantities for a fixed booking and is tired of uncertain supply information.",
              "Her frustration is about reliability, not about mustard itself.",
            ),
            p(
              "Write a three-line decision log that records the constraint, the accepted change and the remaining dessert.",
              "Model answer: Constraint: forty covers and no salmon or leek-quality vegetable delivery. Change: replace salmon with slow-cooked pork and mustard sauce. Remaining dessert: panna cotta.",
              "Use fragments and distinguish proposed from confirmed choices.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is the function of Rhea's “I'm not looking. I'm listening”?",
          ["She is ending the conversation", "She rejects Mick's reading of her expression while keeping him on task", "She admits that she touched the cream"],
          1,
          "She redirects attention from his defensive interpretation of her look to the information she needs.",
        ),
        q(
          2,
          "Why is the grandmother anecdote not a complete digression?",
          ["It provides a practical precedent for the sauce Mick then accepts", "It explains why the salmon was cancelled", "It proves the restaurant has forty covers"],
          0,
          "The anecdote briefly interrupts planning but ends with “same principle”, reconnecting memory to the menu decision.",
        ),
        q(
          3,
          "What does Mick's “before the memory becomes a story” imply?",
          ["He wants to cook before he starts telling stories", "He intends to leave the kitchen", "He thinks the wedding will be cancelled"],
          2,
          "It is a playful acceptance of his own tangents: he will begin work rather than keep narrating.",
        ),
        q(
          4,
          "Which listening strategy best fits this exchange?",
          ["Translate every filler before continuing", "Track the goal, accepted corrections and final confirmations", "Wait for a prepared summary at the end"],
          1,
          "The menu emerges through interaction and correction, so decision tracking is more effective than linear transcription.",
        ),
      ],
    },
    {
      slug: "fast-reductions-and-elision",
      title: "Fast reductions and elision",
      summary:
        "Analyse rapid spoken reductions with two audio producers and reconstruct intended forms without slowing every word.",
      objective:
        "Interpret elided and reduced speech using grammatical completion, stress and context, including reductions of negative auxiliaries.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Before you listen: compressed grammar",
          paragraphs: [
            "Two audio producers are deciding how to represent a fast interview in its transcript. One wants a near-phonetic record; the other wants a readable version that preserves meaning rather than every omitted sound.",
            "Listen for forms that carry several grammatical pieces at once. The missing sounds are often predictable from the auxiliary and the next verb. Stress and the proposition being discussed can confirm your reconstruction.",
          ],
        },
        {
          type: "transcript",
          title: "Transcribing the sounds we actually say",
          context:
            "Podcast producers Aisha and Ben are reviewing an interview with a retired engineer. They read several reduced forms aloud. Apostrophes show deliberate written reductions, not dialect spelling.",
          lines: [
            { speaker: "Aisha", text: "He says, “I was gonna ask you about that,” and the automatic transcript gives “going to”. The timing's clear, but the tense has vanished." },
            { speaker: "Ben", text: "Because gonna carries going to, not the whole frame. You need was before it. And if he'd said “I'd've checked”, that's I would have, with both the subject and auxiliary compressed." },
            { speaker: "Aisha", text: "There's another bit: “D'you ever fix one?” That one's easy—did you—but at this speed it's almost one syllable." },
            { speaker: "Ben", text: "So write did you in a clean transcript. For a pronunciation study, mark d'you separately. We're not trying to make the speaker look careless." },
            { speaker: "Aisha", text: "Then there's “shoulda known better”. Should have known, obviously, but the emotional stress lands on known, not on the missing have." },
            { speaker: "Ben", text: "Exactly. “Shouldn't've done it” is harder: should not have done it. If you only catch shouldn't, you can still rebuild the rest from the verb and the criticism." },
            { speaker: "Aisha", text: "The one I keep mishearing is “we weren't arf bothered”. Is arf a local word here, or am I inventing one?" },
            { speaker: "Ben", text: "It's a reduced half, and bothered does the semantic work. The engineer means they weren't particularly bothered. Context tells you it's an evaluative comment, not an instruction." },
            { speaker: "Aisha", text: "So the rule is recover the grammar, then check the stance. Don't get stuck demanding a full vowel for every auxiliary." },
            { speaker: "Ben", text: "And keep the original recording beside the transcript. A tidy version helps meaning; only the audio can show the actual rhythm." },
          ],
        },
        {
          type: "tip",
          title: "Rebuild the missing frame",
          text: "Expand the reduction into a complete grammatical frame, then ask whether that frame fits the tense, polarity and following verb. “Wouldn't've” requires a negative past modal plus have; “shoulda” usually restores should have. Finally, locate the stressed content word, because it often carries the real evaluation. Use standard forms in meaning-focused notes and reserve phonetic notation for sound study.",
        },
        {
          type: "exercise",
          title: "Restore the reduced forms",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "What does “I was gonna ask” expand to?",
              ["I was going to ask", "I will go and ask", "I had gone to ask"],
              0,
              "Was supplies the past tense and gonna represents going to.",
            ),
            c(
              "What does “I'd've checked” mean?",
              ["I did check it", "I would have checked it", "I had been checking it"],
              1,
              "The contracted form combines I would have before checked.",
            ),
            c(
              "What is the full form of “D'you”?",
              ["Do you", "Did you", "Would you"],
              0,
              "In the quoted question, d'you represents did you.",
            ),
            c(
              "What does “we weren't arf bothered” mean?",
              ["They were extremely angry", "They had been asked to help", "They were not particularly bothered"],
              2,
              "Arf is a reduced half, and the speaker's overall meaning is a lack of strong concern.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Recover grammar and stance",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "Which word carries the emotional emphasis in “shoulda known better”?",
              "Known carries the main stress; have is grammatically necessary but weakly realised.",
              "Listen for the evaluative content rather than counting only full syllables.",
            ),
            p(
              "Why can the rest of “shouldn't've done it” be reconstructed even if have is not heard clearly?",
              "Shouldn't establishes a negative past modal judgement, and done it supplies a completed action that fits should not have + past participle.",
              "Use both grammar and context to complete the frame.",
            ),
            p(
              "Choose a reduced form from your own speech. Give its full form and explain how stress changes its meaning.",
              "Model answer: “Coulda told me” becomes “could have told me”. Stress on told conveys reproach about the missing information, while could have remains reduced.",
              "Include the full grammatical frame and the stressed content word.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why is the automatic expansion “going to” inadequate for “I was gonna ask”?",
          ["It changes the verb ask", "It loses the past-tense frame was", "It changes the speaker's identity"],
          1,
          "Gonna supplies going to but not the preceding auxiliary and tense.",
        ),
        q(
          2,
          "Why does Ben distinguish a clean transcript from a pronunciation study?",
          ["A clean transcript serves comprehension; phonetic detail serves sound analysis", "Reduced speech should never be written down", "Only the automatic transcript is accurate"],
          0,
          "He wants readable grammatical forms without pretending they reproduce the audio's exact sound.",
        ),
        q(
          3,
          "What does “shouldn't have done it” communicate beyond a factual past action?",
          ["A neutral description of completion", "A plan to repeat the action", "A negative judgement about the completed action"],
          2,
          "The negative modal plus perfect structure evaluates an action the speaker thinks was wrong.",
        ),
        q(
          4,
          "Which reconstruction order is most reliable?",
          ["Expand every sound, then ignore context", "Guess from the first consonant, then stop", "Recover the grammatical frame, check the following verb and confirm the stance from stress"],
          2,
          "Grammar narrows the possibilities, the verb constrains them further and stress confirms the speaker's evaluation.",
        ),
      ],
    },
    {
      slug: "overlapping-talk-and-repair",
      title: "Overlapping talk and repair",
      summary:
        "Follow a clinical simulation team correct a medication instruction through interruption, explicit repair and closed-loop read-back.",
      objective:
        "Track high-stakes meaning through overlapping talk by recognising who initiates a repair and how confirmation closes it.",
      minutes: 34,
      blocks: [
        {
          type: "text",
          title: "Before you listen: repair is a team skill",
          paragraphs: [
            "A hospital team is rehearsing a handover with a simulation mannequin. During the exercise, two instructions overlap and a dose is almost misheard. The observer later analyses how the team recovers.",
            "In high-stakes talk, politeness cannot be allowed to obscure correction. Listen for interruption used to protect meaning, explicit markers such as “no” and “I mean”, and the final read-back that verifies the repaired instruction.",
          ],
        },
        {
          type: "transcript",
          title: "Simulation: repairing a handover",
          context:
            "This is a fictional training scenario with a mannequin, not patient advice. Dr Bell leads; nurse Asha, pharmacist Ren and observer Jo participate. Em dashes mark overlap.",
          lines: [
            { speaker: "Dr Bell", text: "The simulated patient needs the next dose now. Asha, give five—Ren, can you check the concentration while I finish this?" },
            { speaker: "Asha", text: "Five milligrams? Because the previous line says—" },
            { speaker: "Ren", text: "—stop, the concentration is ten milligrams in two millilitres. The dose should be five milligrams, not fifty." },
            { speaker: "Dr Bell", text: "No, you're right. I said five, but the last digit ran into my next phrase, and nobody should have to rescue that kind of ambiguity from context. Let me restart cleanly: five milligrams, two point five millilitres of the simulated medication." },
            { speaker: "Asha", text: "I have five milligrams, two point five millilitres. I'll read the label and the calculation back before giving anything to the mannequin." },
            { speaker: "Ren", text: "Confirmed. The calculation is two point five millilitres at ten milligrams per two millilitres. I'll document the independent check." },
            { speaker: "Jo", text: "During the debrief, notice that Asha did not simply assume her first interpretation was right. She marked the uncertainty and requested confirmation." },
            { speaker: "Dr Bell", text: "And Ren interrupted with the exact correction, not a vague warning. I then restarted the whole instruction so the repaired number could be heard clearly." },
            { speaker: "Asha", text: "The read-back matters most. Without it, we'd each leave with a private version of the same instruction." },
            { speaker: "Jo", text: "Precisely. Repair is not complete when someone says “no”; it is complete when the corrected meaning is repeated, checked and accepted. That final exchange is what turns an interrupted handover into shared understanding." },
          ],
        },
        {
          type: "tip",
          title: "Follow the repair cycle",
          text: "Label the stages: problem signal, correction source, restatement, read-back, acceptance. A useful correction names the disputed element and supplies the replacement; a vague objection does not. In overlapping talk, resist finishing a cut-off sentence from expectation. Wait for the explicit restatement, especially when the team member who initiated the repair has not yet confirmed it.",
        },
        {
          type: "exercise",
          title: "Map the repair cycle",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "What concentration does Ren identify?",
              ["Five milligrams per litre", "Ten milligrams in two millilitres", "Fifty milligrams in five millilitres"],
              1,
              "Ren states that the simulated concentration is ten milligrams in two millilitres.",
            ),
            c(
              "What is the corrected volume for the five-milligram dose?",
              ["One millilitre", "Two millilitres", "Two point five millilitres"],
              2,
              "Dr Bell restates the volume as two point five millilitres, and Ren confirms the calculation.",
            ),
            c(
              "Why does Dr Bell restart the instruction?",
              ["He wants to cancel the simulation", "He needs Asha to repeat the whole procedure", "He wants the corrected number spoken without overlap or ambiguity"],
              2,
              "He explains that the last digit ran into his next phrase and gives a clean complete instruction.",
            ),
            c(
              "What action completes the repair according to Jo?",
              ["The corrected meaning is repeated, checked and accepted", "Someone says “no”", "The observer writes a longer report"],
              0,
              "Jo distinguishes initiating a correction from closing the loop through read-back and acceptance.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Reconstruct a closed loop",
          instructions:
            "Answer from memory, then check the model responses.",
          items: [
            p(
              "How does Asha show that she has not mistaken uncertainty for knowledge?",
              "She marks the discrepancy with a dash and asks for confirmation of the dose rather than proceeding silently.",
              "Her question exposes the possible conflict before administration.",
            ),
            p(
              "Why is Ren's interruption more effective than saying “Are you sure?”",
              "It identifies the concentration and explicitly replaces the possible fifty-milligram error with a five-milligram dose.",
              "A specific correction gives the team an actionable replacement.",
            ),
            p(
              "Write a five-stage repair cycle using the simulation, without adding clinical advice.",
              "Model answer: Problem signal: overlapping dose. Correction: Ren states five, not fifty. Restatement: Bell gives five milligrams and the volume. Read-back: Asha repeats both. Acceptance: Ren confirms and documents the check.",
              "Keep the stages separate and use the simulated context.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does Asha's question end with a dash?",
          ["She has already finished the instruction", "She is interrupted before completing her concern", "She is refusing to participate"],
          1,
          "Ren's interruption cuts off her attempt to point out a conflict in the previous instruction.",
        ),
        q(
          2,
          "What does Dr Bell's “the last digit ran into my next phrase” reveal?",
          ["He deliberately gave the wrong dose", "The problem arose from acoustic overlap rather than a written number", "The mannequin misheard the instruction"],
          1,
          "He identifies how connected speech obscured the intended dose and then restates it cleanly.",
        ),
        q(
          3,
          "What is the function of the independent calculation in the exchange?",
          ["It verifies the repaired dose-volume relationship before the simulation proceeds", "It replaces the need to read the label", "It decides whether the patient needs medication"],
          0,
          "Ren confirms the arithmetic and Asha still plans to read the label and calculation back.",
        ),
        q(
          4,
          "Which behaviour best shows shared situational awareness?",
          ["Everyone assumes the first number was correct", "Only the most senior speaker checks the instruction", "Team members surface uncertainty, specify corrections and verify the repaired meaning"],
          2,
          "The simulation distributes attention and confirmation across the team rather than relying on rank or guesswork.",
        ),
      ],
    },
    {
      slug: "idiomatic-conversation",
      title: "Idiomatic conversation",
      summary:
        "Follow two reporters improvising a council-grants story through idioms about stalled plans, risky sources and last-minute changes.",
      objective:
        "Interpret idioms and fixed expressions from their function in a fast exchange, including when their meaning is playful or strategic.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "Before you listen: idiom carries action",
          paragraphs: [
            "Two local reporters are trying to rescue a story about council grants. A source has cancelled, the invoice deadline is close and a new document may expose inconsistencies in the published figures.",
            "Listen for what each idiom does in the conversation: labels a problem, assigns responsibility, changes the plan or softens a threat. Idioms rarely stand alone; the surrounding verbs and reactions reveal their intended force.",
          ],
        },
        {
          type: "transcript",
          title: "Newsroom: rescuing the grants story",
          context:
            "Reporter Imani speaks with her editor, Cal. The exchange is informal, quick and full of newsroom shorthand.",
          lines: [
            { speaker: "Imani", text: "The source has bottled it. Says the council made her feel like she'd be thrown under the bus if her name appeared. So our neat little exposé is dead in the water." },
            { speaker: "Cal", text: "Not dead, just on the back foot. We've got the invoices and the grant letters. Let's not make her courage the only way into the story." },
            { speaker: "Imani", text: "But the finance officer was the usual suspect, and now everyone looks guilty until proved creative with their accounts." },
            { speaker: "Cal", text: "Careful. “Usual suspect” is a shortcut, not evidence. If we go down that rabbit hole, we'll lose the thread and miss the deadline." },
            { speaker: "Imani", text: "The new spreadsheet cuts through the fog, though. Look: two organisations received the same amount, but one declared four venues and the other declared seven." },
            { speaker: "Cal", text: "That could be a moving feast—venues joining and leaving—or it could be double counting. We ask before we accuse." },
            { speaker: "Imani", text: "And if the council says the figures were preliminary?" },
            { speaker: "Cal", text: "Then we ask why they published them as final. Don't let a disclaimer do the work of an answer." },
            { speaker: "Imani", text: "I can have the comparison checked by four. The print invoice is due at five, so the ball's in your court if we need another half hour." },
            { speaker: "Cal", text: "I'll move the invoice, not the deadline for accuracy. Write the story around the discrepancy, give the council until two, and keep the source out of the firing line." },
          ],
        },
        {
          type: "tip",
          title: "Translate idiom into communicative action",
          text: "For each idiom, write its practical force: “dead in the water” means stalled; “on the back foot” means weakened or reacting; “cuts through the fog” means clarifies. Then check speaker intent. Cal's correction of “usual suspect” shows that an idiom can also create unfair framing, so comprehension includes recognising the risk carried by a phrase.",
        },
        {
          type: "exercise",
          title: "Interpret the newsroom shorthand",
          instructions:
            "Read the transcript, cover it, and select the best answer.",
          items: [
            c(
              "Why does Imani say the source has “bottled it”?",
              ["She has found a stronger source", "She has lost the courage to participate", "She has published the story herself"],
              1,
              "The source cancels because she fears being blamed, so “bottled it” means lost the nerve.",
            ),
            c(
              "What does “on the back foot” suggest about the story?",
              ["It is ready to print without checking", "It is weakened but can still be recovered", "It must be abandoned immediately"],
              1,
              "Cal rejects “dead” and proposes using documents already available.",
            ),
            c(
              "What possible innocent explanation does Cal give for the venue figures?",
              ["The organisations have closed permanently", "The spreadsheet was fabricated", "Venues may have joined or left during the reporting period"],
              2,
              "He calls the figures a “moving feast” because participation may change over time.",
            ),
            c(
              "What decision does Cal make about the invoice deadline?",
              ["He moves it to allow more checking time", "He refuses to extend it", "He cancels the print run"],
              0,
              "He says he will move the invoice while preserving the deadline for journalistic accuracy.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Turn idiom into precise meaning",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "What is the difference between “dead in the water” and “on the back foot” here?",
              "The first means completely stalled; the second means weakened and reacting but still recoverable.",
              "Cal deliberately offers the second as a corrective to the first.",
            ),
            p(
              "Why does Cal warn against the “usual suspect”?",
              "It invites guilt by association and can replace evidence with stereotype.",
              "His concern is fairness as well as accuracy.",
            ),
            p(
              "Write a three-idiom summary using the original phrases, then replace each with a literal equivalent.",
              "Model answer: “Bottled it” = lost her nerve; “cuts through the fog” = clarifies the discrepancy; “ball's in your court” = responsibility for the deadline decision has passed to Cal.",
              "Keep each idiom attached to the action it performs.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What does Imani's “thrown under the bus” reveal about the source?",
          ["She fears being made the scapegoat", "She expects transport problems", "She is angry about council buses"],
          0,
          "The idiom describes sacrificing an individual to protect others or institutions.",
        ),
        q(
          2,
          "Why does Cal object to treating the finance officer as the “usual suspect”?",
          ["He knows the officer personally", "He thinks idioms should be banned", "He wants suspicion grounded in documentary evidence rather than habit"],
          2,
          "He explicitly distinguishes a convenient label from evidence and proposes following the invoices and grant letters.",
        ),
        q(
          3,
          "What does “a moving feast” imply about the reported venue counts?",
          ["The organisations are opening restaurants", "The underlying participation may change, making simple comparison misleading", "All seven venues are definitely fictitious"],
          1,
          "Cal uses the idiom to describe a changing set of venues, not a literal feast.",
        ),
        q(
          4,
          "How does Cal respond when the council calls its figures “preliminary”?",
          ["He accepts the label and drops the story", "He asks why preliminary figures were presented as final", "He threatens the source with exposure"],
          1,
          "His follow-up targets the gap between the disclaimer and the original publication.",
        ),
      ],
    },
    {
      slug: "listening-to-unfamiliar-accents",
      title: "Listening to unfamiliar accents",
      summary:
        "Follow a retrofit-design workshop with Glaswegian, Nigerian, Singaporean and Australian voices, including local pragmatics and technical terms.",
      objective:
        "Maintain comprehension across unfamiliar accents by focusing on turn-taking cues, reformulation and shared practical constraints.",
      minutes: 29,
      blocks: [
        {
          type: "text",
          title: "Before you listen: accent plus expertise",
          paragraphs: [
            "Four specialists are reviewing a retrofit plan for a block of flats. The architect speaks with a Glasgow influence, the engineer with a Lagos influence, the facilitator with a Singapore influence and the tenant representative with an Australian influence.",
            "Some difficulty will come from accent, but some will come from technical vocabulary or local pragmatic habits. Notice how speakers check meaning when a term such as “stuffy” is too vague for a building-performance decision.",
          ],
        },
        {
          type: "transcript",
          title: "Workshop: keeping the block cool",
          context:
            "The speakers use their natural rhythms and vocabulary. Technical terms are explained within the meeting rather than supplied by an outside narrator.",
          lines: [
            { speaker: "Aisha", text: "The top floor is the problem, ken? By four o'clock the bedrooms are roasting, even with the windows open. I don't want another scheme that looks lovely on paper and leaves people buying fans." },
            { speaker: "Chidi", text: "The fans are not the only option. Cross-ventilation means cooler air enters one side and warmer air leaves the other. We need to check the pressure difference between the stairwell and the bedrooms." },
            { speaker: "Mei", text: "Can you explain “pressure difference” in everyday terms? I understand the principle, lah, but the design team keeps using it as if everyone knows which window is the problem." },
            { speaker: "Aisha", text: "Aye, say it plainly. Is the stairwell pulling the warm air out, or trapping it? That's what we need to know before we spend the budget." },
            { speaker: "Chidi", text: "At present the stairwell can trap warm air, especially when the corridor doors are shut. We will model that first, then test whether external shutters reduce solar heat before it enters." },
            { speaker: "Tom", text: "Fair enough, but shutters need to be easy to use. Our tenants tried something similar at my last building, and half of them jammed after a year. Maintenance is part of the design, not an afterthought." },
            { speaker: "Mei", text: "Then let's trial one floor before changing all twenty-four flats. Record temperature and what residents actually do with the windows. If the model and the lived result disagree, we learn something useful." },
            { speaker: "Aisha", text: "I'm with you on that, as long as the trial includes the top-floor corner flat. That's the worst one, and it would be easy to leave it out." },
            { speaker: "Chidi", text: "Agreed. We can also compare humidity, because a flat can feel stuffy without the temperature being especially high." },
            { speaker: "Tom", text: "Good. Send the plan in plain language first. If the tenants understand the choice, they're more likely to help us test it properly." },
          ],
        },
        {
          type: "tip",
          title: "Listen for checking and reformulation",
          text: "Use markers such as “ken?”, “can you explain?”, “say it plainly” and “in everyday terms” to locate moments where shared understanding is being negotiated. Do not let an unfamiliar tag or rhythm distract you from the technical question. If a term is vague, listen for its operational reformulation: “stuffy” becomes a combination of temperature, humidity and resident behaviour rather than a single sensation.",
        },
        {
          type: "exercise",
          title: "Follow the multilingual workshop",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "What does Aisha's “ken?” do in her opening?",
              ["It asks whether the others already know", "It checks shared understanding of her point", "It changes the subject to fans"],
              1,
              "The tag invites the group to follow her description of the overheating top floor.",
            ),
            c(
              "What does cross-ventilation involve?",
              ["Cooler air entering one side and warmer air leaving the other", "Keeping every door permanently closed", "Using fans as the only cooling method"],
              0,
              "Chidi defines it directly as air entering one side and leaving through another.",
            ),
            c(
              "Why does Tom mention jammed shutters?",
              ["He rejects cross-ventilation completely", "He wants residents to buy fans", "He argues that usability and maintenance belong in the design"],
              2,
              "His example shows that a technically sound measure may fail if residents cannot operate it.",
            ),
            c(
              "Which flat must be included in the trial?",
              ["The ground-floor entrance flat", "The top-floor corner flat", "Any flat chosen by the contractor"],
              1,
              "Aisha insists on the worst-performing corner flat so the trial does not exclude the hardest case.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Negotiate meaning across accents",
          instructions:
            "Answer from memory, then compare with the model responses.",
          items: [
            p(
              "How does Aisha reformulate Chidi's technical question?",
              "She asks whether the stairwell is pulling warm air out or trapping it, turning pressure language into a practical choice.",
              "This checks understanding without dismissing expertise.",
            ),
            p(
              "Why does Mei propose a one-floor trial?",
              "It allows the model to be compared with actual temperatures and resident window behaviour before changing all twenty-four flats.",
              "Her proposal links technical prediction with lived use.",
            ),
            p(
              "Write a polite clarification request for an unfamiliar accent and explain what contextual clues you would use to answer it.",
              "Model answer: “Could you put that another way so I can check I've understood?” Clues would include the speaker's examples, repeated location words, agreement from other participants and the decision being proposed.",
              "Focus on the disputed meaning, not on judging the accent.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why is Chidi's first definition useful to a listener with limited building vocabulary?",
          ["It removes all technical detail", "It translates cross-ventilation into the direction of air movement", "It promises that fans will never be necessary"],
          1,
          "The definition supplies a concrete physical process that listeners can connect to the plan.",
        ),
        q(
          2,
          "What does Mei mean by saying the team uses a term “as if everyone knows” the problem?",
          ["She thinks technical language is always wrong", "She is asking for the shared term to be linked to a specific location and effect", "She wants to cancel the retrofit"],
          1,
          "Her request is for operational clarity about which window and what physical consequence the term describes.",
        ),
        q(
          3,
          "Why does Chidi introduce humidity late in the meeting?",
          ["To show that perceived stuffiness cannot be explained by temperature alone", "To avoid discussing shutters", "To prove that the flat is cold"],
          0,
          "Humidity adds another variable that may explain discomfort even when temperature is not extremely high.",
        ),
        q(
          4,
          "Which response best demonstrates comprehension across the unfamiliar voices?",
          ["Guess each speaker's position from accent stereotypes", "Ignore local tags and assume every technical word has one fixed meaning", "Track requests for clarification and how later answers change the design proposal"],
          2,
          "The group negotiates meaning and revises the proposal, so following those moves matters more than accent labels.",
        ),
      ],
    },
  ],
};
