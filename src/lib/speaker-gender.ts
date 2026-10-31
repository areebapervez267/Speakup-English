/**
 * Dialogue lines are read aloud with a male voice or a female voice, so the
 * conversation sounds like two people instead of one person doing impressions.
 *
 * The mapping is pure and data-driven: names we recognise decide the voice,
 * everything else (Customer, Server, Announcement 2…) is assigned the opposite
 * of whoever already has a voice in that same conversation, so the two sides
 * always differ.
 */

export type SpeakerGender = "male" | "female";

const MALE_NAMES = new Set([
  "ben",
  "omar",
  "leo",
  "sam",
  "luca",
  "jonas",
  "ali",
  "bilal",
  "usman",
  "hassan",
  "hamza",
  "tariq",
  "faisal",
  "ahmed",
  "michael",
  "james",
  "john",
  "david",
  "peter",
  "tom",
  "daniel",
  "ryan",
  "mark",
  "chris",
  "matthew",
  "andrew",
  "william",
  "robert",
  "joseph",
  "carlos",
  "diego",
  "marco",
  "pablo",
  "rahul",
  "amit",
  "vikram",
  "arjun",
  "rohit",
]);

const FEMALE_NAMES = new Set([
  "ana",
  "anna",
  "mei",
  "clara",
  "nina",
  "priya",
  "mia",
  "sara",
  "aisha",
  "fatima",
  "zara",
  "hira",
  "ayesha",
  "maryam",
  "sana",
  "amna",
  "emma",
  "olivia",
  "ava",
  "sophia",
  "isabella",
  "laura",
  "sarah",
  "julia",
  "maria",
  "elena",
  "nadia",
  "lina",
  "maya",
  "leah",
  "hannah",
  "rachel",
  "reema",
  "sunita",
  "kavita",
  "deepa",
]);

function normalise(speaker: string): string {
  return speaker
    .trim()
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .replace(/\s+\d+$/, "")
    .trim();
}

export function genderForSpeaker(speaker: string): SpeakerGender | null {
  const key = normalise(speaker);
  if (MALE_NAMES.has(key)) return "male";
  if (FEMALE_NAMES.has(key)) return "female";
  return null;
}

/**
 * One gender per speaker, stable for the whole conversation.
 */
export function gendersForLines(
  lines: ReadonlyArray<{ speaker: string }>,
): SpeakerGender[] {
  const chosen = new Map<string, SpeakerGender>();
  const used = new Set<SpeakerGender>();

  for (const line of lines) {
    const gender = genderForSpeaker(line.speaker);
    if (gender && !chosen.has(line.speaker)) {
      chosen.set(line.speaker, gender);
      used.add(gender);
    }
  }

  // Unknown speakers take turns, starting with whichever voice is still missing,
  // so "Customer / Server" ends up as one man and one woman.
  let next: SpeakerGender =
    used.has("male") && !used.has("female") ? "female" : "male";

  for (const line of lines) {
    if (chosen.has(line.speaker)) continue;
    chosen.set(line.speaker, next);
    next = next === "male" ? "female" : "male";
  }

  return lines.map((line) => chosen.get(line.speaker) ?? "male");
}
