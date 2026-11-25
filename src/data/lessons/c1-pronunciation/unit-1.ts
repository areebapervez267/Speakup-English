import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const c1PronunciationUnit1: LessonUnit = {
  title: "Sound inventory",
  description:
    "Audit the vowels, consonants and stress patterns that shape how clearly your English is understood.",
  lessons: [
    {
      slug: "vowel-length-and-quality",
      title: "Vowel length and quality",
      summary:
        "Separate tense and relaxed vowels, then control how English long vowels shorten before voiceless consonants.",
      objective:
        "Produce clear /iː/–/ɪ/ and /uː/–/ʊ/ contrasts and apply pre-fortis clipping without adding an extra vowel.",
      minutes: 30,
      blocks: [
        {
          type: "sound",
          title: "Quality carries the contrast",
          sound: "/iː/–/ɪ/ and /uː/–/ʊ/ — tense versus relaxed",
          guidance:
            "Make /iː/ with a tenser tongue and a slightly wider smile than /ɪ/. Make /uː/ with firmly rounded lips and a tenser tongue than /ʊ/. Duration helps, but changing the tongue and lip shape is what keeps the words distinct. Use a steady voice; do not stretch the weaker vowel.",
          words: [
            { word: "seen", respelling: "/siːn/", example: "I have seen the revised budget." },
            { word: "sit", respelling: "/sɪt/", example: "Please sit beside the project lead." },
            { word: "pool", respelling: "/puːl/", example: "The candidate pool is international." },
            { word: "pull", respelling: "/pʊl/", example: "Pull the lever before the test begins." },
            { word: "curve", respelling: "/kɜːv/", example: "The graph shows a steady upward curve." },
          ],
        },
        {
          type: "table",
          title: "Length is not the only cue",
          columns: ["Contrast", "What to notice", "Professional example"],
          rows: [
            ["/iː/ and /ɪ/", "Tense, longer quality versus relaxed, shorter quality", "seat /siːt/ versus sit /sɪt/"],
            ["/uː/ and /ʊ/", "Rounded, tense lips versus a more relaxed mouth", "fool /fuːl/ versus full /fʊl/"],
            ["Pre-fortis clipping", "A long vowel shortens before /p t k tʃ f θ s ʃ/", "keep /kiːp/ is shorter than key /kiː/"],
            ["/ɜː/ and /ə/", "A full stressed vowel versus a weak central vowel", "refer /rɪˈfɜː/ versus referral /rɪˈfɜːrəl/"],
          ],
          caption:
            "These examples use British English. Rhotic accents realise /ɜː/ differently; preserve your accent's r-colouring rather than forcing a non-rhotic model.",
        },
        {
          type: "text",
          title: "Why precise vowels matter",
          paragraphs: [
            "A listener can use context to recover a word, but repeated vowel mergers make that work harder, especially with names, figures and unfamiliar terms. Aim for a reliable contrast, not for exaggerated length.",
            "In beat and bead, the following consonant differs, and the preceding /iː/ is clipped before voiceless /t/. Compare key and keep, or choose and goose, to hear clipping while holding the rest of the word as steady as possible. Before a vowel-initial next word, the stop in keep may be released: keep it /ˌkiːp‿ɪt/.",
            "Record one sentence twice. First exaggerate the quality slightly; then speak naturally. The useful version is the one that remains intelligible when you discuss a demanding topic rather than reading isolated words.",
          ],
        },
        {
          type: "exercise",
          title: "Audit the vowel",
          instructions:
            "Choose the best answer. Say both words in each pair before deciding.",
          items: [
            c(
              "Which transcription has the relaxed vowel /ʊ/?",
              ["pull /pʊl/", "pool /puːl/", "pull /pʌl/"],
              0,
              "Pull uses /ʊ/. Pool uses tense /uː/, and /pʌl/ would produce a different vowel contrast.",
              "Compare the lip tension in fool and full.",
            ),
            c(
              "Why is the vowel in seat easier to distinguish from sit than length alone?",
              ["The final consonant disappears", "/iː/ is tense and /ɪ/ is relaxed", "Both vowels have identical quality"],
              1,
              "The vowel quality changes as well as duration. The final /t/ remains in both words.",
              "Think tongue tension, not just a stopwatch.",
            ),
            c(
              "Which word demonstrates pre-fortis clipping?",
              ["key /kiː/", "keep /kiːp/", "knee /niː/"],
              1,
              "The vowel in keep shortens before voiceless /p/. Key and knee have no following consonant in these forms.",
              "Look for a vowel before a voiceless final consonant.",
            ),
            c(
              "What is the best correction for a speaker who says pool and pull as the same vowel?",
              ["Add a vowel after the final /l/", "Make both words much louder", "Contrast tense rounded /uː/ with relaxed /ʊ/"],
              2,
              "A clear quality contrast is more effective than volume or an inserted vowel. Final /l/ should stay in place.",
              "Use your lips and tongue to make the contrast.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Shape and shorten",
          instructions:
            "Record each task in a quiet room. Listen back for a distinct quality before judging the length.",
          items: [
            p(
              "Say seen, sit, pool, pull, curve, then use two in complete sentences.",
              "Model: I have seen the pool, but I cannot pull the cover. Keep /iː/ and /uː/ tense; keep /ɪ/ and /ʊ/ relaxed.",
              "Do not insert a vowel between a consonant and a following consonant.",
            ),
            p(
              "Say key, key, key, then keep three times. What changes?",
              "In keep, /iː/ is clipped before /p/. The consonant is shorter than the vowel and may be unreleased in citation form.",
              "Compare with key keeper, where /p/ releases before a vowel.",
            ),
            p(
              "Read: The team reviewed the figures and agreed to keep the fee at fifteen pounds.",
              "Mark reviewed /rɪˈvjuːd/, figures /ˈfɪɡəz/, agreed /əˈɡriːd/, fifteen /ˌfɪfˈtiːn/ and pounds /paʊndz/. Preserve clipping before the final consonants.",
              "Prioritise figures, fifteen and pounds as message-bearing words.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Keep your accent",
          text: "A personal accent is not a pronunciation error. Work only on a contrast that obscures meaning for you or your listeners; stable, intelligible variation is acceptable.",
        },
      ],
      quiz: [
        q(1, "Which word contains tense /uː/?", ["full", "pool", "pull"], 1, "Pool is /puːl/. Full and pull use the shorter, more relaxed /ʊ/."),
        q(2, "What happens to a long vowel before /t/ in seat?", ["It always becomes /eɪ/", "It may shorten through pre-fortis clipping", "It moves to the end of the word"], 1, "Voiceless /t/ can shorten the preceding /iː/. The basic vowel quality remains recognisable."),
        q(3, "Which pair contrasts /iː/ with /ɪ/?", ["seen and sit", "pool and pull", "curve and serve"], 0, "Seen has /iː/ and sit has /ɪ/. The other pairs use different vowel contrasts."),
        q(4, "Which instruction produces the clearest improvement?", ["Stretch every vowel equally", "Replace the accent with a fixed model", "Practise tongue and lip quality in short sentences"], 2, "Short connected practice makes the contrast usable. Neither uniform stretching nor complete accent replacement is necessary."),
      ],
    },
    {
      slug: "consonant-clusters-and-endings",
      title: "Consonant clusters and endings",
      summary:
        "Keep dense final clusters intelligible without inserting vowels, and control the /s/ and /z/ endings that carry grammar.",
      objective:
        "Produce clusters such as /kts/ and /skt/ with accurate closure, then distinguish plural, possessive and past-tense endings in speech.",
      minutes: 30,
      blocks: [
        {
          type: "sound",
          title: "Hold the cluster together",
          sound: "Final clusters /kts/, /skt/ and /θs/",
          guidance:
            "Move directly from one consonant position to the next. Final stops may have no audible release, but their closure and the following consonant must remain recognisable. Avoid adding a vowel: texts should not become text-uh-s. For /θs/, keep the tongue tip light between the teeth and finish on /s/.",
          words: [
            { word: "asked", respelling: "/ɑːskt/", example: "I asked whether the deadline had changed." },
            { word: "texts", respelling: "/teksts/", example: "The customer sent two texts this morning." },
            { word: "widths", respelling: "/wɪdθs/", example: "Compare the widths of the two columns." },
            { word: "sixths", respelling: "/sɪksθs/", example: "Sixths are harder for some beginners." },
            { word: "risked", respelling: "/rɪskt/", example: "She risked her place on the shortlist." },
          ],
        },
        {
          type: "table",
          title: "The ending changes the message",
          columns: ["Ending", "Sound", "Example", "Meaning cue"],
          rows: [
            ["-s after a voiceless sound", "/s/", "reports /rɪˈpɔːts/", "plural or third-person singular"],
            ["-s after a voiced sound", "/z/", "reviews /rɪˈvjuːz/", "plural or third-person singular"],
            ["-es after /s z ʃ ʒ tʃ dʒ/", "/ɪz/", "services /ˈsɜːvɪsɪz/", "an extra syllable"],
            ["-ed after a voiceless sound", "/t/", "checked /tʃekt/", "past tense"],
            ["-ed after /t/ or /d/", "/ɪd/", "wanted /ˈwɒntɪd/", "an extra syllable"],
          ],
          caption:
            "Possessive ’s follows the same sound pattern: the team’s plan /ðə ˈtiːmz ˈplæn/ versus the client’s plan /ðə ˈklaɪənts ˈplæn/.",
        },
        {
          type: "text",
          title: "Clarity does not require explosion",
          paragraphs: [
            "In fast speech, an unreleased final stop is normal. Clarity comes from reaching the correct place of articulation and preserving the next sound, not from releasing every stop with a puff of air.",
            "Consonant sequences also cross word boundaries. In fixed price, the /t/ of fixed can be unreleased while the /p/ of price is clearly formed. In asked whether, /t/ may be omitted in very rapid speech, but practise the full cluster first.",
            "Grammar endings deserve special attention because a listener may need them to interpret number, agreement or tense. In careful professional speech, make the /z/ in reviews and the /ɪd/ in needed audible.",
          ],
        },
        {
          type: "exercise",
          title: "Choose the accurate ending",
          instructions: "Select the transcription or explanation that preserves both sound and meaning.",
          items: [
            c(
              "How is the -s in reports pronounced?",
              ["/rɪˈpɔːts/", "/rɪˈpɔːtz/", "/rɪˈpɔːtɪz/"],
              0,
              "The final sound of report is voiceless /t/, so plural -s is /s/.",
              "Check the sound immediately before the ending.",
            ),
            c(
              "Which word needs an extra syllable in its past form?",
              ["checked", "reviewed", "risked"],
              1,
              "Reviewed ends in /d/, so -ed is pronounced /ɪd/. Checked and risked take /t/ after voiceless sounds.",
              "Base form plus /t/ or /d/ creates /ɪd/.",
            ),
            c(
              "Which strategy is most useful for the cluster in texts?",
              ["Delete the /s/", "Add a vowel between /t/ and /s/", "Keep the stop closure and finish clearly on /s/"],
              2,
              "The cluster /teksts/ can remain intact without a loud release. Adding or deleting a sound changes the word.",
              "Silence the stop if necessary, but keep its closure.",
            ),
            c(
              "Why can dropping the -ed in needed obscure a professional update?",
              ["It changes the syllable pattern only", "It may remove a cue that the action happened in the past", "It always changes the word into a plural"],
              1,
              "Needed is past tense; need is not. The /ɪd/ ending supplies a useful grammatical cue.",
              "Compare I needed approval with I need approval.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Cluster-to-sentence practice",
          instructions:
            "Begin slowly enough to feel each closure, then increase speed without adding vowels.",
          items: [
            p(
              "Say asked, texts, widths, sixths and risked twice at a careful speed.",
              "Model: asked /ɑːskt/, texts /teksts/, widths /wɪdθs/, sixths /sɪksθs/, risked /rɪskt/. There is no extra vowel before a final cluster.",
              "Put a finger on your throat to notice voicing only where it belongs.",
            ),
            p(
              "Contrast the endings in reports, reviews and services.",
              "Reports ends /s/, reviews ends /z/, and services adds /ɪz/. The vowel before the ending stays stable.",
              "Do not make every plural ending a new stressed beat.",
            ),
            p(
              "Read: The client requested three texts and asked whether the risks were fixed.",
              "Mark requested /rɪˈkwestɪd/, three /θriː/, texts /teksts/, asked /ɑːskt/, risks /rɪsks/ and fixed /fɪkst/. Preserve the /ɪd/ in requested and the final clusters.",
              "Pause briefly after texts, then continue.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Use a listener check",
          text: "Ask a partner to write down plural and past forms from your sentences without seeing the script. If forms disappear, practise the endings in short sentences rather than isolating ever-longer clusters.",
        },
      ],
      quiz: [
        q(1, "Which plural has /ɪz/?", ["services", "reports", "risks"], 0, "Service ends in /s/, so services adds a syllable pronounced /ɪz/."),
        q(2, "What is a natural way to produce a final stop in a cluster?", ["Always release it strongly", "Replace it with a vowel", "Keep its closure and allow no audible release"], 2, "Final stops are often unreleased. The closure still distinguishes the word."),
        q(3, "Which transcription is correct?", ["widths /wɪdts/", "widths /wɪdθs/", "widths /wɪdɪs/"], 1, "Width has final /θ/, and the plural adds /s/."),
        q(4, "Which ending marks a past form after /t/?", ["/t/", "/z/", "/ɪd/"], 2, "After /t/ or /d/, -ed is an additional syllable /ɪd/, as in wanted."),
      ],
    },
    {
      slug: "problem-sounds-and-minimal-pairs",
      title: "Problem sounds and minimal pairs",
      summary:
        "Diagnose individual consonant confusions with minimal pairs and choose high-impact corrections instead of trying to change an entire accent.",
      objective:
        "Distinguish selected /θ/–/ð/, /v/–/w/, /l/–/r/ and /ŋ/–/n/ contrasts, then identify which ones affect understanding in your own speech.",
      minutes: 35,
      blocks: [
        {
          type: "sound",
          title: "Two th sounds, one position",
          sound: "/θ/ and /ð/ — voiceless versus voiced",
          guidance:
            "Place the tongue tip lightly between the teeth or against the upper teeth. Let air continue for /θ/ without vocal-fold vibration. Add voice for /ð/. Keep the contact light and transition promptly to the vowel; excessive friction or a prolonged tongue position makes words difficult to follow.",
          words: [
            { word: "thought", respelling: "/θɔːt/", example: "I thought the estimate was final." },
            { word: "though", respelling: "/ðəʊ/", example: "Though costly, the option is viable." },
            { word: "baths", respelling: "/bɑːθs/", example: "The hotel has two outdoor baths." },
            { word: "bathe", respelling: "/beɪð/", example: "Patients may bathe in the warm pool." },
            { word: "breath", respelling: "/breθ/", example: "Take a slow breath before presenting." },
            { word: "breathe", respelling: "/briːð/", example: "Breathe steadily rather than forcing the voice." },
          ],
        },
        {
          type: "table",
          title: "A focused diagnostic set",
          columns: ["Contrast", "Articulatory cue", "Minimal pair", "If confused, the listener may hear"],
          rows: [
            ["/v/–/w/", "teeth on lip for /v/; rounded lips for /w/", "vest /vest/–west /west/", "a different content word"],
            ["/l/–/r/", "tongue contact or curl; compare your own accent model", "light /laɪt/–right /raɪt/", "a different direction or amount"],
            ["/ŋ/–/n/", "back of tongue raised for /ŋ/", "thin /θɪn/–thing /θɪŋ/", "a different noun or grammatical form"],
            ["/θ/–/ð/", "same place, different voicing", "thigh /θaɪ/–thy /ðaɪ/", "a different lexical item"],
          ],
          caption:
            "Some accents distinguish /l/ and /r/ differently or use other realisations. Choose an intelligible target with a knowledgeable listener.",
        },
        {
          type: "text",
          title: "Prioritise by consequence",
          paragraphs: [
            "A minimal pair differs in only one sound, which makes it useful for diagnosis. However, an unfamiliar contrast is not automatically a disorder or a professional disadvantage. Record a short explanation and note which substitutions actually cause misunderstandings.",
            "Test each contrast in three positions: at the start of a word, in the middle and at the end. A sound may be accurate in one position but reduced in another. Use the same carrier sentence, such as I said the word was ___, so the surrounding rhythm does not change.",
            "For /l/ and /r/, copying lip labels alone can be misleading because tongue movement is largely internal. Work from audio, a trusted model or a speech teacher, and judge the result by listener recognition.",
          ],
        },
        {
          type: "exercise",
          title: "Find the high-impact difference",
          instructions: "Choose the most accurate analysis of the sound or practice decision.",
          items: [
            c(
              "What changes between breath and bathe?",
              ["/θ/ becomes /ð/ and the vowel changes", "Only the final consonant changes from /θ/ to /ð/", "The stress moves"],
              0,
              "Breath /breθ/ has /θ/, while bathe /beɪð/ has both /ð/ and a different vowel. For a strict single-sound contrast, compare thigh /θaɪ/ with thy /ðaɪ/.",
              "Notice both the vowel and the final consonant in this pair.",
            ),
            c(
              "Which exercise best isolates /v/ and /w/?",
              ["Say vest and west in the same carrier sentence", "Read a paragraph containing very", "Whisper both words as loudly as possible"],
              0,
              "Vest and west isolate the initial consonant. A shared carrier sentence reduces differences in rhythm and stress.",
              "Keep the vowel identical.",
            ),
            c(
              "Which final consonant distinguishes thin from thing?",
              ["/l/ versus /r/", "/m/ versus /n/", "/n/ versus /ŋ/"],
              2,
              "Thin ends in alveolar /n/; thing ends in velar /ŋ/.",
              "Feel the back of the tongue in thing.",
            ),
            c(
              "What should guide the choice of a sound to practise first?",
              ["The sound that looks most unusual in writing", "The contrast that most often obscures meaning for real listeners", "Every contrast, regardless of context"],
              1,
              "Prioritise intelligibility and your own goals. Not every accent difference needs correction.",
              "Use listener feedback as evidence.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Build a personal sound audit",
          instructions:
            "Use audio or a knowledgeable partner. If no model is available, focus on clear, consistent articulation rather than guessing.",
          items: [
            p(
              "Practise think and this, then vest and west, in a fixed carrier sentence.",
              "Model: I said think, not sink. I said this, not diss. I said vest, not west. Keep /θ/ voiceless, /ð/ voiced and /v/ in contact with the lip.",
              "Record one clean repetition of each pair.",
            ),
            p(
              "Practise thin and thing, then light and right. Identify which contrast needs attention.",
              "Thin /θɪn/ ends at the tongue tip; thing /θɪŋ/ closes at the back. Light /laɪt/ and right /raɪt/ need a contrast recognised by your listener.",
              "Do not exaggerate /r/ into a new syllable.",
            ),
            p(
              "Say: I thought the client would breathe easier once the risks were explained.",
              "Use /θ/ in thought and /ð/ in the, once /wʌns/ begins with /w/. Notice how easily a word such as risks can lose its final cluster under pressure.",
              "Ask a partner to identify any word they had to guess.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Correct one variable",
          text: "Change one sound or position at a time. A five-minute contrast drill repeated across several days usually transfers better than one long session that leaves you mentally exhausted.",
        },
      ],
      quiz: [
        q(1, "Which word begins with /ð/?", ["think", "this", "sink"], 1, "This begins with voiced /ð/. Think begins with voiceless /θ/."),
        q(2, "Which pair isolates /v/ and /w/?", ["vest and west", "thin and thing", "light and right"], 0, "Vest and west share the same vowel and final consonant but differ initially."),
        q(3, "Which sound is at the end of thing?", ["/n/", "/m/", "/ŋ/"], 2, "Thing ends with the velar nasal /ŋ/, as in sing."),
        q(4, "When is accent modification most useful?", ["Whenever an accent sounds unfamiliar", "When a specific contrast reduces intelligibility or conflicts with the speaker’s goal", "Only when every sound matches one model"], 1, "A focused, listener-informed goal is more appropriate than treating difference itself as a defect."),
      ],
    },
    {
      slug: "word-stress-in-complex-vocabulary",
      title: "Word stress in complex vocabulary",
      summary:
        "Track primary and secondary stress in derived academic and professional words, including the shifts caused by common suffixes.",
      objective:
        "Place stress accurately in long words, preserve strong secondary syllables and use compounds and abbreviations without flattening their rhythm.",
      minutes: 30,
      blocks: [
        {
          type: "sound",
          title: "Stress can move within a word family",
          sound: "Primary stress /ˈ/ and secondary stress /ˌ/",
          guidance:
            "The primary-stressed syllable is the strongest beat. A secondary-stressed syllable still has clearer vowel quality than an unstressed one, but it must not compete with the primary beat. Let unstressed syllables reduce, often to /ə/, and move directly into the stressed syllable without pausing between every syllable.",
          words: [
            { word: "photograph", respelling: "/ˈfəʊtəɡrɑːf/", example: "The photograph shows the original entrance." },
            { word: "photographer", respelling: "/fəˈtɒɡrəfə/", example: "The photographer waited for better light." },
            { word: "photography", respelling: "/fəˈtɒɡrəfi/", example: "Photography is central to the exhibition." },
            { word: "photographic", respelling: "/ˌfəʊtəˈɡræfɪk/", example: "The archive contains photographic records." },
            { word: "economic", respelling: "/ˌiːkəˈnɒmɪk/", example: "The economic forecast remains uncertain." },
            { word: "economist", respelling: "/ɪˈkɒnəmɪst/", example: "The economist explained the revised figures." },
          ],
        },
        {
          type: "table",
          title: "Patterns worth knowing",
          columns: ["Pattern", "Example", "Working rule"],
          rows: [
            ["Noun to -graphy / -grapher", "photograph → photography / photographer", "Stress commonly moves to the syllable before -graphy or immediately before -grapher"],
            ["-ic often attracts stress", "economy → economic", "Stress often falls immediately before -ic"],
            ["-ity", "reliable → reliability", "Primary stress often falls before -ity"],
            ["-ology", "biology → methodology", "The syllable before -ology is commonly stressed"],
            ["Compound noun", "research proposal /ˈriːsɜːtʃ prəˌpəʊzəl/", "The first word often carries the main phrase stress"],
            ["Initialism", "CEO /ˌsiː iː ˈəʊ/", "Letters have names; stress depends on context and variety"],
          ],
          caption:
            "Suffix patterns are tendencies, not universal laws. Check the pronunciation of high-frequency terms in your field rather than deriving every form mechanically.",
        },
        {
          type: "text",
          title: "Make the word easy to locate",
          paragraphs: [
            "An incorrectly placed stress can remain understandable in context, yet it slows recognition and can make a speaker sound uncertain. Learn a difficult word as a rhythm: phoTOGraphy, ecoNOmic, reliaBILity.",
            "Do not give every syllable equal weight. In methodology /ˌmeθəˈdɒlədʒi/, the first syllable has secondary stress, -dol- carries primary stress and the final syllable reduces. If you lengthen every vowel, the listener loses the word's shape.",
            "Check the whole phrase next. Word stress remains part of the word, but sentence focus can make a normally unstressed syllable more prominent for contrast or correction. Keep that deliberate prominence separate from your default lexical stress.",
          ],
        },
        {
          type: "exercise",
          title: "Locate the main beat",
          instructions: "Choose the word with the correctly marked primary stress.",
          items: [
            c(
              "Which stress pattern is correct for reliability?",
              ["/ˌrɪlaɪəˈbɪləti/", "/rɪˈlaɪəbɪləti/", "/ˈrɪlaɪəˌbɪləti/"],
              0,
              "Reliability commonly has primary stress on -bil-, with secondary stress on the first syllable.",
              "The syllable before -ity often takes primary stress.",
            ),
            c(
              "How does stress typically change from photograph to photography?",
              ["It moves to the final syllable", "It disappears", "It moves from the first syllable to the syllable before -graphy"],
              2,
              "Photograph is first-syllable stressed; photography is stressed on -tog-.",
              "Say PHOtograph and phoTOGraphy.",
            ),
            c(
              "Which syllable is primary in economist?",
              ["EC", "ON", "OMIST"],
              1,
              "Economist is /ɪˈkɒnəmɪst/, stressed on the second syllable.",
              "Compare economic, where stress falls later.",
            ),
            c(
              "Why check technical terms individually instead of applying one suffix rule?",
              ["All suffixes delete stress", "English has exceptions and specialist conventions", "Only the longest syllable can be stressed"],
              1,
              "Suffixes show strong tendencies, but individual words and professional communities can vary.",
              "Use a dictionary with audio or a trusted specialist model.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Stress families and field terms",
          instructions:
            "Tap one main beat per word, then speak the word in a sentence so that the rhythm transfers naturally.",
          items: [
            p(
              "Say the family: photograph, photographer, photography, photographic.",
              "Model: PHOtograph, phoTOGrapher, phoTOGraphy, photoGRAPHic. Keep the first syllable of photographic secondary, not equal to the main beat.",
              "Use a pencil to tap the primary-stressed syllable.",
            ),
            p(
              "Say economic, economist, methodology, implementation and reliability.",
              "Model: ecoNOmic, eCONomist, methoDOLogy, implemenTAtion, reliaBILity. Capital letters mark primary stress here.",
              "Reduce the remaining vowels instead of spelling each one aloud.",
            ),
            p(
              "Read: The methodology was economic, but the photographer’s implementation lacked reliability.",
              "Give methoDOLogy the main beat within that phrase, retain photoGRAPHer’s stress and let lack of reliability carry the sentence’s final focus.",
              "Do not pause between syllables inside a word.",
            ),
          ],
        },
        {
          type: "tip",
          title: "Build a stress lexicon",
          text: "Keep a short list of ten recurring terms from your work. Record each with its stress marks and one natural phrase, then review the rhythm before important meetings.",
        },
      ],
      quiz: [
        q(1, "Where is the primary stress in photographer?", ["Second syllable", "First syllable", "Final syllable"], 0, "Photographer is /fəˈtɒɡrəfə/, with primary stress on -tog-."),
        q(2, "What is the function of secondary stress?", ["It replaces primary stress", "It adds an unstressed syllable", "It gives a syllable more prominence than a fully reduced one"], 2, "Secondary stress is real but subordinate to the primary beat."),
        q(3, "Which word is stressed before -ity?", ["reliability", "capacity", "Both"], 2, "Both reliability /ˌrɪlaɪəˈbɪləti/ and capacity /kəˈpæsəti/ have primary stress immediately before -ity."),
        q(4, "What should you do with an unfamiliar technical term?", ["Stress every syllable to be safe", "Check a reliable audio model and note its rhythm", "Always stress the first syllable"], 1, "Reliable audio and stress notation help establish the word’s conventional rhythm."),
      ],
    },
  ],
};
