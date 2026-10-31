import type { SpeakerGender } from "@/lib/speaker-gender";

/**
 * Browser text-to-speech gives us a list of voices with names like
 * "Microsoft David" or "Google UK English Female". Nothing in the API says
 * which voice is a man and which is a woman, so we read the names — and when a
 * machine only offers one usable English voice, we shift its pitch instead, so
 * a dialogue still sounds like two people rather than one.
 */

export const NORMAL_RATE = 1;
export const SLOW_RATE = 0.55;

/** Pitch used when no voice matches the gender we wanted. */
export const GENDER_PITCH: Record<SpeakerGender, number> = {
  male: 0.78,
  female: 1.22,
};

export const PREFERRED_LANGS = ["en-GB", "en-US", "en-AU", "en-IE", "en-IN"];

/**
 * Female names checked before male names, because "female" itself contains
 * "male". Longer, unambiguous names come first so "Samantha" is never read as
 * containing "man".
 */
const FEMALE_MARKERS = [
  "female",
  "woman",
  "girl",
  "zira",
  "aria",
  "jenny",
  "michelle",
  "suzan",
  "susan",
  "hazel",
  "lisa",
  "nadia",
  "veena",
  "heera",
  "kalpana",
  "samantha",
  "victoria",
  "catherine",
  "claire",
  "mary",
  "kate",
  "fiona",
  "tessa",
  "libby",
  "sonia",
  "sonya",
  "seren",
  "sheena",
  "celia",
  "emma",
  "ava",
  "allison",
  "anjali",
  "ann",
  "anna",
  "amy",
  "arabella",
  "joanna",
  "kendra",
  "salli",
  "nicole",
  "monica",
  "camila",
  "lucia",
  "esperanza",
  "conchita",
  "rachel",
  "cynthia",
  "yelda",
  "filiz",
  "sara",
  "sarita",
  "swara",
  "lekha",
  "shruti",
  "priya",
  "melinda",
  "amara",
  "kiki",
  "salma",
  "aditi",
  "ilona",
  "amanda",
  "paula",
  "josephine",
  "danielle",
  "georgina",
  "alexandra",
  "alexa",
  "roberta",
  "saskia",
  "martha",
  "penelope",
];

const MALE_MARKERS = [
  "male",
  "man",
  "boy",
  "david",
  "mark",
  "guy",
  "ryan",
  "james",
  "richard",
  "george",
  "fred",
  "alex",
  "daniel",
  "arthur",
  "orson",
  "oliver",
  "roger",
  "eric",
  "paul",
  "jack",
  "noah",
  "liam",
  "ethan",
  "matthew",
  "andrew",
  "william",
  "robert",
  "joseph",
  "carlos",
  "diego",
  "miguel",
  "jorge",
  "ravi",
  "prabhu",
  "madhur",
  "hemant",
  "imran",
  "asif",
  "billy",
  "giles",
  "stefan",
  "yuri",
];

export type VoiceLike = { name: string; lang?: string };

export function classifyVoice(voice: VoiceLike): SpeakerGender | null {
  const name = (voice.name ?? "").toLowerCase();
  for (const marker of FEMALE_MARKERS) {
    if (name.includes(marker)) return "female";
  }
  for (const marker of MALE_MARKERS) {
    if (name.includes(marker)) return "male";
  }
  return null;
}

export function normaliseLang(lang: string | undefined): string {
  return (lang ?? "").replace("_", "-").toLowerCase();
}

/** English voices first, in our preferred-accent order; everything else last. */
export function rankVoices<T extends VoiceLike>(voices: T[]): T[] {
  if (voices.length === 0) return [];
  const english = voices.filter((voice) =>
    normaliseLang(voice.lang).startsWith("en"),
  );
  const pool = english.length > 0 ? english : voices;
  for (const wanted of PREFERRED_LANGS) {
    const exact = pool.filter(
      (voice) => normaliseLang(voice.lang) === wanted.toLowerCase(),
    );
    if (exact.length > 0) {
      const rest = pool.filter(
        (voice) => normaliseLang(voice.lang) !== wanted.toLowerCase(),
      );
      return [...exact, ...rest];
    }
  }
  return pool;
}

/**
 * Choose the voice and pitch for one line.
 *
 * No gender requested → the best natural English voice, exactly as before.
 * Gender requested → a voice we can identify as that gender if the browser has
 * one, otherwise the default voice pushed up or down in pitch.
 */
export function pickVoice<T extends VoiceLike>(
  voices: T[],
  gender?: SpeakerGender,
): { voice: T | null; pitch: number } {
  const ranked = rankVoices(voices);
  if (ranked.length === 0) return { voice: null, pitch: 1 };
  if (!gender) return { voice: ranked[0] ?? null, pitch: 1 };

  const match = ranked.find((voice) => classifyVoice(voice) === gender);
  if (match) return { voice: match, pitch: 1 };

  const fallback = ranked[0] ?? null;
  if (fallback && classifyVoice(fallback) === gender) {
    return { voice: fallback, pitch: 1 };
  }
  return { voice: fallback, pitch: GENDER_PITCH[gender] };
}
