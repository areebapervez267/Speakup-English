import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1ListeningUnit1: LessonUnit = {
  title: "Rapid speech and accent",
  description:
    "Follow reduced speech, varied accents and unscripted exchanges while keeping track of meaning under pressure.",
  lessons: [
    {
      slug: "fast-connected-speech",
      title: "Fast connected speech",
      summary:
        "Analyse a community-radio feature made from rush-hour speech and learn to recover words hidden by linking and weak forms.",
      objective:
        "Understand rapid connected speech by using stress, familiar chunks and controlled replays rather than word-by-word decoding.",
      minutes: 30,
      blocks: [
        {
          type: "text",
          title: "Before you listen: the raw material",
          paragraphs: [
            "A radio producer has recorded eighteen seconds of a busy station concourse. Her engineer says the first play sounded almost unintelligible, although he knows every ordinary word in it. Their task is to make the clip engaging without disguising the speed of real speech.",
            "Listen for the overall message before individual sounds. Notice how small words weaken, how neighbouring words join, and which words the speakers stress when they want to be understood.",
          ],
        },
        {
          type: "transcript",
          title: "Editing a rush-hour radio feature",
          context:
            "Nia, a community-radio producer, and Tom, a sound engineer, are reviewing the clip in the studio. The transcript preserves natural reductions and contractions.",
          lines: [
            { speaker: "Presenter", text: "Nia, what did you capture at the station this morning? You said it sounded chaotic until you played it back." },
            { speaker: "Nia", text: "Just eighteen seconds, around half seven, when the eastbound crowd was changing platforms. There's a guard calling to commuters, someone swearing under their breath, and a bloke going, 'Didja get the earlier train, then?' You can barely see the platform through the crowd." },
            { speaker: "Tom", text: "I missed three words on the first listen, and I think that threw me. I started hunting for the bits I'd lost instead of following what the guard was doing. Once I caught her warning, the rest became background texture." },
            { speaker: "Nia", text: "Exactly. If you hear something like 'coulda', your brain can supply 'could have' from the rhythm. You don't need to wait for a crystal-clear vowel, especially when the situation already tells you what kind of question is coming." },
            { speaker: "Presenter", text: "So should we slow the recording down for the broadcast, or let listeners struggle a little?" },
            { speaker: "Tom", text: "At nought point eight five, once, just to get oriented. Then it goes at full speed. If we leave it slow, we're making commuters sound like they're talking underwater, and the whole point is to hear how urgent the concourse feels." },
            { speaker: "Nia", text: "And we've masked the two passenger names. What matters is the guard stressing 'earlier', not the passenger catching every syllable. The caption will explain the platform change without pretending we heard more than we did." },
            { speaker: "Tom", text: "I'll put the raw clip first, with a short caption afterwards. Give people a chance to form a gist, then let them check the detail. We can keep the uncertainty instead of tidying it away." },
          ],
        },
        {
          type: "tip",
          title: "Recover meaning, not every sound",
          text: "Treat reductions as normal routes to familiar words: didja can be “did you”, coulda can be “could have”, and gonna often signals “going to”. Use stressed syllables and the surrounding situation to test your reconstruction. A single slower replay can orient you; return to natural speed quickly so that you practise processing speech as listeners actually hear it.",
        },
        {
          type: "exercise",
          title: "Catch what survived the edit",
          instructions:
            "Read the transcript, cover it, and choose the best answer from memory.",
          items: [
            c(
              "How long is the original station clip?",
              ["Eight minutes", "Eighteen seconds", "Half an hour"],
              2,
              "Nia says she captured “just eighteen seconds” at the station.",
            ),
            c(
              "Why did Tom initially lose track of the clip?",
              ["The guard spoke too quietly", "He focused on the few words he had missed", "He did not know the location"],
              0,
              "Tom says missing three words made him hunt for those bits instead of following the guard's actions.",
            ),
            c(
              "What speed do they use for the orientation replay?",
              ["Full speed", "Nought point seven five", "Nought point eight five"],
              1,
              "Tom specifies nought point eight five for one replay, followed by full speed.",
            ),
            c(
              "Why are two passenger names masked?",
              ["The passengers requested an apology", "The names were difficult to pronounce", "The passengers' identities should not be broadcast"],
              2,
              "Nia says the names have been masked; the clip is intended to represent the concourse, not identify private passengers.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Process a fast chunk",
          instructions:
            "Answer from memory, then compare with the model. Record your final response if possible.",
          items: [
            p(
              "What does “Didja get the earlier train, then?” mean in standard English?",
              "It means “Did you get the earlier train, then?”",
              "Expand the linked ending -ja and retain the tag “then”.",
            ),
            p(
              "Explain why Tom rejects leaving the whole clip in slow motion.",
              "He wants the broadcast to preserve natural, rapid speech rather than make commuters sound unnatural.",
              "His comparison describes someone talking underwater.",
            ),
            p(
              "Describe a fast utterance you have misheard. Give a likely full form and a plausible context.",
              "Model answer: I heard “I'll get it” as “I'll catch it” on a crowded bus. The context and the stressed verb “get” help me reconstruct the phrase.",
              "Write the sound you heard, the likely phrase and one contextual clue.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why is rush-hour speech useful material for this feature?",
          ["It contains only technical vocabulary", "It shows how people communicate in a real, time-pressured setting", "It is easier to understand than prepared speech"],
          1,
          "The feature preserves the crowd, urgency and reductions of genuine station speech instead of using a polished performance.",
        ),
        q(
          2,
          "What is the most likely meaning of “coulda” in a rapid utterance?",
          ["Could have", "Could it", "Couldn't"],
          2,
          "The reduced ending -a commonly represents “have” after could, giving “could have”.",
        ),
        q(
          3,
          "What is Tom's attitude towards transcribing every sound before playing the clip?",
          ["He considers it essential preparation", "He thinks it would reveal hidden names", "He is impatient because it distracts from the larger message"],
          0,
          "He explains that looking for isolated lost words prevented him from following the guard's purpose.",
        ),
        q(
          4,
          "Which listening sequence best reflects their final approach?",
          ["Raw clip, slower replay, raw clip", "Caption first, then slower replay only", "One full-speed clip, then no review"],
          1,
          "They orient with one slower replay, return to full speed and provide a caption for checking afterwards.",
        ),
      ],
    },
    {
      slug: "regional-and-international-accents",
      title: "Regional and international accents",
      summary:
        "Hear a linguist explain how familiarity, rhythm and local expressions affect understanding across accents without relying on stereotypes.",
      objective:
        "Adapt to unfamiliar accents by separating pronunciation and prosody from accent-based assumptions about a speaker.",
      minutes: 32,
      blocks: [
        {
          type: "text",
          title: "Before you listen: hearing difference",
          paragraphs: [
            "Accent is not a single feature. Vowels, consonant endings, rhythm and intonation can all vary, while the speaker's grammar may remain widely shared. A sociolinguist is discussing a listening experiment with a radio host.",
            "You will hear examples from Glasgow, Singapore, Lagos and Melbourne. Focus on what each speaker is doing with the phrase, not on whether the accent matches an idea of how a person “should” sound.",
          ],
        },
        {
          type: "transcript",
          title: "An experiment in accent familiarity",
          context:
            "Dr Leila Rahman, a sociolinguist, joins host Jonah Bennett to discuss a study of 120 adults listening to short recordings from four places.",
          lines: [
            { speaker: "Jonah", text: "Dr Rahman, we asked listeners to transcribe voices from Glasgow, Singapore, Lagos and Melbourne. Did the unfamiliar accents prove harder to understand?" },
            { speaker: "Leila", text: "On the first attempt, usually. But that isn't a verdict on the accent. We gave half the group six minutes with each voice before the test, and their scores rose by about twenty percentage points. Exposure did most of the work." },
            { speaker: "Jonah", text: "So a listener can get better without changing how the speaker talks?" },
            { speaker: "Leila", text: "Precisely. One Glasgow participant said, 'I'll leave it there.' Our Singapore listeners often heard that as a plan to put something down. In the recording it meant 'I'll finish this topic'." },
            { speaker: "Jonah", text: "And what about a word like lah in Singapore English? People sometimes claim it has no meaning." },
            { speaker: "Leila", text: "That's too blunt. It can soften a suggestion or signal solidarity. Translate it as a mood or a relationship, not as an isolated dictionary word. The listener's job is to notice where the conversation is going." },
            { speaker: "Jonah", text: "Were there voices that everyone recognised immediately?" },
            { speaker: "Leila", text: "Recognised, perhaps, because of films or international colleagues. Recognition isn't the same as detailed comprehension. One Melbourne listener followed the stories easily but kept guessing at the technical terms." },
            { speaker: "Leila", text: "I'd also avoid treating an accent as a personality test. Our Nigerian speakers disagreed sharply with one another. What sounded like confidence to Jonah was timing and pitch, not evidence of certainty." },
            { speaker: "Jonah", text: "A useful reminder to listen to the claim, not the label attached to the voice." },
          ],
        },
        {
          type: "tip",
          title: "Build an ear map",
          text: "Before judging unfamiliar speech, note its rhythm, the sounds that seem shortened and the intonation at the ends of turns. Then listen for repeated phrases and discourse markers. A short period of repeated exposure often improves comprehension more than memorising accent stereotypes. Keep a separate note for vocabulary and local expressions: difficulty with a term is not automatically difficulty with the accent.",
        },
        {
          type: "exercise",
          title: "Separate evidence from assumption",
          instructions:
            "Read the transcript, cover it, then choose the best answer.",
          items: [
            c(
              "How many adults took part in the experiment?",
              ["60", "120", "240"],
              1,
              "Jonah introduces a study of 120 adults listening to recordings from four places.",
            ),
            c(
              "What changed for half the participants before the test?",
              ["They heard each voice for six minutes", "They moved to one of the four cities", "They studied grammar rules for six weeks"],
              0,
              "Leila says half the group received six minutes of exposure to each voice.",
            ),
            c(
              "In the Glasgow example, what does “I'll leave it there” mean?",
              ["I will put down an object", "I will finish discussing this topic", "I will leave the building"],
              1,
              "Leila explicitly explains that the speaker meant to finish the topic.",
            ),
            c(
              "What does Leila imply about listeners who recognised the Melbourne voices easily?",
              ["They probably shared the speaker's opinions", "They had necessarily mastered technical vocabulary", "Familiarity from media did not guarantee full understanding"],
              2,
              "She distinguishes recognising a voice from following it, noting that technical terms still caused difficulty.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Listen below the accent label",
          instructions:
            "Answer from memory, then check the models. Use your own listening experience in the final task.",
          items: [
            p(
              "What happened to comprehension scores after brief exposure?",
              "They rose by about twenty percentage points.",
              "Leila compares the first attempt with the scores after six minutes of exposure.",
            ),
            p(
              "Why is lah not adequately explained as a word with no meaning?",
              "It can soften a suggestion or signal solidarity, so it contributes pragmatic meaning.",
              "Leila describes it in terms of mood and relationship.",
            ),
            p(
              "Plan a two-stage response to an unfamiliar accent: what do you note first, and what do you listen for next?",
              "Model answer: First note rhythm, shortened sounds and end intonation. Then follow repeated chunks, discourse markers and the speaker's changing position.",
              "Avoid guessing identity or personality from the voice.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is Leila's main explanation for the improvement after exposure?",
          ["Listeners learned to imitate the accents", "Listeners became familiar with the voices", "Speakers began using simpler grammar"],
          0,
          "She attributes the rise mainly to exposure to the voices, not to changes in the speakers.",
        ),
        q(
          2,
          "Why did some Singapore listeners misinterpret “I'll leave it there”?",
          ["They applied the common literal meaning", "The speaker was discussing furniture", "They had never heard the word leave"],
          2,
          "They heard the literal idea of putting something down instead of the local discourse function of ending a topic.",
        ),
        q(
          3,
          "What does the lah example demonstrate?",
          ["Every regional form has a direct translation", "A small particle can convey attitude and social connection", "Singapore English lacks modal verbs"],
          1,
          "Leila explains that lah can soften a suggestion or signal solidarity, functions that a simple dictionary definition misses.",
        ),
        q(
          4,
          "What caution does she give about interpreting pitch and timing?",
          ["They are unreliable only in recordings", "They prove which speaker is most intelligent", "They should not be treated as direct evidence of confidence or certainty"],
          2,
          "She warns against reading certainty into prosody and notes that speakers from the same background can hold different positions.",
        ),
      ],
    },
    {
      slug: "unscripted-conversation",
      title: "Unscripted conversation",
      summary:
        "Follow three friends reorganising a repair café through false starts, changed plans and unfinished thoughts.",
      objective:
        "Track decisions in spontaneous conversation by recognising repairs, contrasts and confirmation rather than expecting tidy sentences.",
      minutes: 31,
      blocks: [
        {
          type: "text",
          title: "Before you listen: plans in motion",
          paragraphs: [
            "Three neighbours are arranging a repair café, where volunteers help people mend household objects. None of them has prepared a script, and their first venue falls through halfway through the conversation.",
            "Listen for the difference between a suggestion, a rejected option and a final agreement. Repetition and restarts often mark a decision being revised, not a failure to communicate.",
          ],
        },
        {
          type: "transcript",
          title: "Finding a venue for the repair café",
          context:
            "Ben, Nora and Priya are talking at a kitchen table after a neighbourhood meeting. Their speech includes hesitations, self-corrections and interruptions that are friendly rather than hostile.",
          lines: [
            { speaker: "Ben", text: "So, Saturday at ten for the repair café—no, hang on, I can't do Saturday. I've got my sister's thing, and I only remembered on the bus. Could we do Sunday instead?" },
            { speaker: "Nora", text: "Sunday's fine by me. The library's free then, isn't it? We'd have the big room, people already know where it is, and there's a bus stop outside for anyone carrying something heavy." },
            { speaker: "Priya", text: "Only till twelve, apparently. I checked after the meeting, and they've got a reading group coming in. So that's—well, that's not much use, really. Two hours would be gone before we'd unpacked the tools." },
            { speaker: "Ben", text: "What about the school hall? It's bigger, there's a kitchen nearby, and I think we could get in before noon. It might cost a fortune, though, which our budget can't take." },
            { speaker: "Nora", text: "My neighbour's a caretaker there. I could ask—actually, no, don't bother. I've already emailed him, and he says we can have it till four, free for community groups." },
            { speaker: "Priya", text: "Brilliant. Then let's say twelve to three, leaving an hour to clear up and put the tables back. Ben, can you make the poster? People need enough notice now." },
            { speaker: "Ben", text: "Yeah. “Bring one broken thing”—not a car, though. That was my brother's suggestion, and I think he was joking. We should also say repairs depend on the volunteer who's available." },
            { speaker: "Nora", text: "I'll sort the tools. But no kettles or anything electrical unless we've got someone who can check the safety side. We don't want a repair turning into a fire, however enthusiastic everyone is." },
            { speaker: "Priya", text: "Agreed. I'll put a note on the form so people aren't promised the impossible, and I'll ask the electrician at the community centre whether she can volunteer." },
            { speaker: "Ben", text: "Right: school hall, Sunday, twelve to three, and safety checks first. I'll get that in the poster, then, before we change our minds again." },
          ],
        },
        {
          type: "tip",
          title: "Mark changes with verbs and contrast",
          text: "In unscripted talk, decisions are often embedded in small moves: “no, hang on”, “instead”, “only till twelve”, “so that's not much use” and “agreed”. Keep a simple decision log with three columns—suggested, rejected, confirmed. Update it whenever a speaker corrects an earlier plan. This is more reliable than writing complete sentences while the conversation moves on.",
        },
        {
          type: "exercise",
          title: "Track the changing plan",
          instructions:
            "Read the transcript, cover it, then select the best answer.",
          items: [
            c(
              "Why does Ben change the proposed day?",
              ["The library is closed", "He is unavailable on Saturday", "The school has cancelled the booking"],
              1,
              "Ben stops himself and says he cannot do Saturday before suggesting Sunday.",
            ),
            c(
              "What makes the library unsuitable?",
              ["It is too small", "It is available only until twelve", "It charges a high fee"],
              2,
              "Priya says the library is free only until twelve because a reading group is arriving.",
            ),
            c(
              "Who had already arranged the school hall?",
              ["Ben", "Nora", "Priya"],
              0,
              "Nora reveals that she has already emailed her neighbour, the caretaker, and secured the hall until four.",
            ),
            c(
              "What condition applies to repairing electrical items?",
              ["They must be kettles", "They must be repaired off-site", "A competent person must check their safety"],
              2,
              "Nora refuses electrical repairs unless someone can check safety, and Priya arranges to ask an electrician.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a decision log",
          instructions:
            "Answer from memory, then check the model responses.",
          items: [
            p(
              "Give the final venue, day and public opening times.",
              "The school hall on Sunday, from twelve to three, with clearing-up time until four.",
              "Distinguish the public event from the room booking.",
            ),
            p(
              "Why does Nora initially offer to ask the caretaker and then withdraw the offer?",
              "She starts to offer but remembers that she has already emailed him and received an answer.",
              "Listen to “actually, no” and what follows it.",
            ),
            p(
              "Write a three-line log showing one rejected plan, one constraint and one confirmed decision.",
              "Model answer: Rejected: library, available only until noon. Constraint: electrical items need a safety check. Confirmed: school hall, Sunday 12–3.",
              "Use fragments rather than full transcripts.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Which detail shows that the conversation is genuinely unscripted?",
          ["The speakers all use identical vocabulary", "Ben abandons his own suggestion before anyone responds", "Priya reads from a prepared venue list"],
          1,
          "Ben begins with a Saturday plan and immediately interrupts himself because he is unavailable, a natural self-repair.",
        ),
        q(
          2,
          "What does Priya's “that's not much use” refer to?",
          ["The size of the school hall", "The caretaker's reply", "Having the library for only two hours"],
          0,
          "She is evaluating the library's noon cut-off, not rejecting the library building itself.",
        ),
        q(
          3,
          "How does Nora's tone change when discussing electrical repairs?",
          ["She becomes cautious and sets a safety boundary", "She becomes enthusiastic about repairing kettles", "She refuses to attend the event"],
          2,
          "Her joking opening gives way to a firm warning about fire, showing a shift from humour to safety.",
        ),
        q(
          4,
          "Which strategy would best help a listener follow the final arrangements?",
          ["Record every hesitation in full", "Wait until the end and remember only the first plan", "Track suggestions, rejections and confirmations separately"],
          2,
          "A decision log reflects the way the speakers revise and confirm their plans in real time.",
        ),
      ],
    },
    {
      slug: "interruptions-and-overlapping-speech",
      title: "Interruptions and overlapping speech",
      summary:
        "Follow a live radio discussion in which a councillor, caller and host compete for turns while revising a bus service.",
      objective:
        "Distinguish interruptions that challenge, clarify or yield the floor, and recover the completed proposal from overlapping speech.",
      minutes: 28,
      blocks: [
        {
          type: "text",
          title: "Before you listen: competing turns",
          paragraphs: [
            "A late-night bus route is being debated live on local radio. The host is trying to keep the exchange orderly, but the councillor and a shift worker both have strong reasons to intervene.",
            "Overlap does not always mean conflict. A speaker may finish another person's sentence, challenge a premise or simply rush to prevent the host moving on. Listen for whose idea survives each exchange.",
          ],
        },
        {
          type: "transcript",
          title: "A live debate about the night bus",
          context:
            "The recording includes brief overlap, shown by em dashes. Presenter Amara chairs the discussion with councillor Daniel Osei and caller Ruth Kelly, a hospital worker.",
          lines: [
            { speaker: "Amara", text: "The N-four currently leaves at ten past eleven, and tonight we're asking whether to restore the later service. Councillor Osei, your committee voted against it. Why?" },
            { speaker: "Daniel", text: "Because the trial cost considerably more than we expected, particularly when overtime and vehicle availability are included—" },
            { speaker: "Ruth", text: "Sorry, but cost isn't the only issue. I finish at the hospital at eleven twenty, and if I miss that bus, I'm walking forty minutes home. That cost falls on me every shift." },
            { speaker: "Amara", text: "Ruth, let him answer the cost point, then I'll come straight to you. Councillor, briefly." },
            { speaker: "Daniel", text: "Thank you. It cost more, yes, but almost half the subsidy went on one-off maintenance, which will not recur. We're proposing a two-week weekday trial at twenty to twelve, paid for by the business levy rather than the transport budget." },
            { speaker: "Ruth", text: "Weekdays only? Because Sunday is just as bad, and half the hospital's night staff work at weekends—" },
            { speaker: "Daniel", text: "—and that's all we can fund at present. Weekdays, for two weeks, then we review the passenger figures. I'm not pretending this answers the weekend problem." },
            { speaker: "Amara", text: "So the original ten-ten service isn't being promised permanently, and weekends remain unresolved. Daniel, what would count as success for this smaller trial?" },
            { speaker: "Daniel", text: "If we average forty new passengers a night without any drop in the early service. We publish the passenger figures and full cost on the thirtieth of June, including unsuccessful nights." },
            { speaker: "Ruth", text: "I'll take a trial over another forty-minute walk, although I wish it included Sundays. Just please don't call the late bus a luxury before you've tried getting home on it." },
          ],
        },
        {
          type: "tip",
          title: "Choose a voice and keep listening",
          text: "When speakers overlap, hold the floor you are following and let the other voice become background until the first speaker completes a thought. Watch for turn-yielding cues such as “thank you”, “go ahead” and falling intonation. If a sentence is cut off, look for the same idea restated by the host or another speaker before filling the gap yourself.",
        },
        {
          type: "exercise",
          title: "Recover the proposal",
          instructions:
            "Read the transcript, cover it, and choose the best answer.",
          items: [
            c(
              "Why does Ruth interrupt Daniel initially?",
              ["She wants the host to finish", "She objects to cost being treated as the only issue", "She is asking for a different route number"],
              1,
              "Ruth explicitly says cost is not the only issue and describes the danger and inconvenience of walking home.",
            ),
            c(
              "What is the proposed new departure time?",
              ["10.10", "11.10", "11.40"],
              2,
              "Daniel proposes twenty to twelve, which is 11.40.",
            ),
            c(
              "How will the proposed trial be funded?",
              ["Passenger fares", "The business levy", "The hospital"],
              0,
              "Daniel says the two-week weekday trial would be paid for by the business levy.",
            ),
            c(
              "What result will Daniel publish?",
              ["A permanent timetable", "The cost of every bus ticket", "The trial's passenger figures"],
              2,
              "He promises to publish the result after reviewing passenger figures on 30 June.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Separate overlap from agreement",
          instructions:
            "Answer from memory, then compare with the model.",
          items: [
            p(
              "How did Ruth complete Daniel's sentence about weekends?",
              "She completed it as “and that's all we can fund at present”, making clear that the trial would not include weekends.",
              "Daniel finishes his own qualification after Ruth's interruption.",
            ),
            p(
              "What is the target for success, and what must not decline?",
              "An average of forty new passengers a night, with no drop in the early service.",
              "Keep both parts of Daniel's condition.",
            ),
            p(
              "Describe one interruption that challenges a premise and one that supplies a qualification.",
              "Model answer: Ruth challenges the exclusive focus on cost. Daniel supplies a qualification when he stresses that the later service is weekdays only.",
              "Name the speaker, function and resulting meaning.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What is Amara's role in the overlapping exchange?",
          ["She supports Daniel's budget without question", "She regulates turns so both positions can be heard", "She agrees that Ruth should leave the programme"],
          1,
          "She asks Daniel to answer the cost point and promises to return immediately to Ruth, managing participation rather than taking a side.",
        ),
        q(
          2,
          "Why does Daniel mention one-off maintenance?",
          ["To imply that the trial's full cost overstated the continuing expense", "To show that passengers caused the maintenance", "To argue that buses are cheaper than walking"],
          2,
          "He concedes that the trial cost more while explaining that nearly half the subsidy was for maintenance that would not recur.",
        ),
        q(
          3,
          "What does Ruth's final comment suggest about her position?",
          ["She opposes all public spending on buses", "She wants a permanent service immediately", "She is willing to test the proposal but resists its negative framing"],
          0,
          "She welcomes a trial while challenging the description of a late bus as a luxury, a qualified rather than absolute stance.",
        ),
        q(
          4,
          "How can a listener safely fill a gap caused by an interruption?",
          ["Guess the loudest speaker's opinion", "Look for a restatement or summary by the host or another speaker", "Assume the interrupted speaker has abandoned the point"],
          1,
          "Participants often restate or summarise the lost material, providing a more reliable basis than guessing across overlap.",
        ),
      ],
    },
    {
      slug: "listening-through-background-noise",
      title: "Listening through background noise",
      summary:
        "Follow a station safety briefing during an alarm test and identify instructions that remain clear despite competing announcements.",
      objective:
        "Use signal words, repetition and spatial context to extract safety-critical information from a noisy environment.",
      minutes: 33,
      blocks: [
        {
          type: "text",
          title: "Before you listen: signal in noise",
          paragraphs: [
            "New seasonal stewards are receiving a safety briefing at a railway station. A scheduled alarm test, a public announcement and arriving trains repeatedly compete with the trainer's voice.",
            "The speakers do not simply repeat every sentence. Instead, they use direct commands, named locations and corrections. Those are the features to monitor when background sound obscures part of a message.",
          ],
        },
        {
          type: "transcript",
          title: "A safety briefing at Central Station",
          context:
            "Farah is the station supervisor, Ivo is the accessibility lead, and Dean is a new steward. A brief alarm sounds and stops during the first instruction.",
          lines: [
            { speaker: "Farah", text: "During an evacuation—[a test alarm sounds]—during an evacuation, take visitors to the east car park, not through the main ticket hall. Say it back to me, Dean; this is the part we cannot afford to guess." },
            { speaker: "Dean", text: "East car park, avoiding the ticket hall. Not the west one? I can hear two announcements, and they sound as though they're naming different places." },
            { speaker: "Farah", text: "Correct. The west car park stays clear for buses and emergency vehicles, and the ticket hall may be needed by the response team. Ivo, what's the accessible route? Please use place names rather than “over there”." },
            { speaker: "Ivo", text: "Use the amber side gate beside platform two. [A platform announcement begins.] The gate looks onto the same east car park, so there's no road crossing and no need to bring anyone through the crowd at the main entrance." },
            { speaker: "Dean", text: "And if someone can't manage the stairs? The ordinary lifts are just ahead, but the crowd is moving towards them." },
            { speaker: "Ivo", text: "Don't use the ordinary lifts during an alarm. Take them to the marked refuge point beside the gate and radio me with their exact location. The evacuation lift is operated only by trained staff, so wait with them until help arrives." },
            { speaker: "Farah", text: "One more time: east car park, amber side gate, refuge point if needed. Those three locations matter more than the rest of this briefing. If you lose a sentence in the noise, keep the person safe and ask for a repeat." },
            { speaker: "Dean", text: "Understood. East car park, amber side gate, and refuge point for anyone who cannot use the stairs. I'll repeat the locations back before I move anyone, especially if the announcements start again." },
            { speaker: "Farah", text: "Good. Noise is exactly when closed-loop communication matters: give the instruction, hear it repeated, correct it if necessary. A confident guess is more dangerous than an awkward request to say it again." },
          ],
        },
        {
          type: "tip",
          title: "Prioritise commands and place names",
          text: "In noisy speech, extract noun phrases attached to actions and prohibitions: take visitors to X, do not use Y, radio Z. Place names are often repeated because they carry consequences. Use the physical layout you already know to hold these anchors in memory, and ask for a repeat-back when an instruction affects safety. Do not treat a partially heard sentence as complete merely because the background sound is loud.",
        },
        {
          type: "exercise",
          title: "Keep the safety anchors",
          instructions:
            "Read the transcript, cover it, then select the best answer.",
          items: [
            c(
              "Where should ordinary visitors be taken?",
              ["The west car park", "The east car park", "Platform two"],
              1,
              "Farah repeats that visitors go to the east car park.",
            ),
            c(
              "Why must the west car park remain clear?",
              ["It is reserved for buses and emergency vehicles", "It has no lighting", "It is used for staff parking only"],
              0,
              "Farah explicitly says buses and emergency vehicles need the west car park.",
            ),
            c(
              "Where is the amber side gate?",
              ["Beside platform two", "Inside the west car park", "At the main ticket office"],
              1,
              "Ivo locates the amber side gate beside platform two and says it opens onto the east car park.",
            ),
            c(
              "Who may operate the evacuation lift?",
              ["Any visitor", "Only trained staff", "Only the station supervisor"],
              2,
              "Ivo says the evacuation lift is operated only by trained staff; it is not the ordinary lift.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Use closed-loop communication",
          instructions:
            "Answer from memory, then check the models. Practise the final response aloud.",
          items: [
            p(
              "What should Dean do for someone who cannot manage the stairs?",
              "Take them to the marked refuge point and radio Ivo; do not use the ordinary lifts.",
              "The instruction has two linked actions and one prohibition.",
            ),
            p(
              "List the three locations Farah says matter most.",
              "The east car park, the amber side gate and the refuge point.",
              "They are compressed into one repeated summary.",
            ),
            p(
              "Give a closed-loop response if you heard only “amber side gate” through a loud announcement.",
              "Model answer: “Confirming: I take visitors through the amber side gate beside platform two to the east car park—is that right?”",
              "State what you understood and explicitly ask for confirmation.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Why does Farah repeat the evacuation instruction after the alarm?",
          ["She has forgotten the destination", "She wants to ensure the key instruction survived the noise", "She is changing the destination"],
          1,
          "The repetition restores the beginning obscured by the test alarm and checks Dean's understanding.",
        ),
        q(
          2,
          "What makes the amber route suitable for wheelchair users?",
          ["It has no stairs", "It is the shortest route to the platform", "It opens into the assembly area without a road crossing"],
          0,
          "Ivo specifically mentions that the gate opens onto the east car park, avoiding a road crossing.",
        ),
        q(
          3,
          "What is Ivo's attitude towards using ordinary lifts in an alarm?",
          ["He rejects their use and specifies an alternative procedure", "He suggests them for anyone in a hurry", "He says their use depends on crowd size"],
          2,
          "He says not to use ordinary lifts, then explains the refuge point, radio call and trained operation of the evacuation lift.",
        ),
        q(
          4,
          "Why does Farah call repeat-back “closed-loop communication”?",
          ["It prevents speakers from interrupting", "It confirms that the receiver heard and understood the instruction", "It replaces the need for any written procedures"],
          1,
          "The loop closes when the receiver repeats the instruction and the sender confirms or corrects it.",
        ),
      ],
    },
  ],
};
