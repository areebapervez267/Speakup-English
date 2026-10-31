import test from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";

import {
  classifyVoice,
  pickVoice,
  rankVoices,
} from "../src/lib/speech-voices.ts";
import {
  genderForSpeaker,
  gendersForLines,
} from "../src/lib/speaker-gender.ts";

const CHROME_VOICES = [
  { name: "Microsoft David Desktop - English (United States)", lang: "en-US" },
  { name: "Microsoft Zira Desktop - English (United States)", lang: "en-US" },
  { name: "Google UK English Female", lang: "en-GB" },
  { name: "Google UK English Male", lang: "en-GB" },
  { name: "Google US English", lang: "en-US" },
];

const EDGE_VOICES = [
  { name: "Microsoft George Online (Natural) - English (United Kingdom)", lang: "en-GB" },
  { name: "Microsoft Sheena Online (Natural) - English (United Kingdom)", lang: "en-GB" },
  { name: "Microsoft Ryan Online (Natural) - English (United States)", lang: "en-US" },
  { name: "Microsoft Aria Online (Natural) - English (United States)", lang: "en-US" },
];

test("known dialogue names decide the voice", () => {
  assert.equal(genderForSpeaker("Ben"), "male");
  assert.equal(genderForSpeaker("Ana"), "female");
  assert.equal(genderForSpeaker("Anna"), "female");
  assert.equal(genderForSpeaker("Omar"), "male");
  assert.equal(genderForSpeaker("Priya"), "female");
  assert.equal(genderForSpeaker("Mei"), "female");
  assert.equal(genderForSpeaker("Customer"), null);
});

test("a conversation with two speakers always gets two voices", () => {
  const lines = [
    { speaker: "Customer", text: "How much is this?" },
    { speaker: "Seller", text: "It is five hundred rupees." },
    { speaker: "Customer", text: "I will take it." },
  ];
  const voices = gendersForLines(lines);
  assert.deepEqual(voices, ["male", "female", "male"]);
  assert.notEqual(voices[0], voices[1]);
});

test("unnamed speakers take the voice that is still missing", () => {
  const voices = gendersForLines([
    { speaker: "Anna", text: "Hello." },
    { speaker: "Shopkeeper", text: "Welcome." },
  ]);
  assert.deepEqual(voices, ["female", "male"]);
});

test("one speaker keeps one voice for every line", () => {
  const voices = gendersForLines([
    { speaker: "Ben", text: "One." },
    { speaker: "Ana", text: "Two." },
    { speaker: "Ben", text: "Three." },
  ]);
  assert.deepEqual(voices, ["male", "female", "male"]);
});

test("Google UK English Male and Female are used for their own lines", () => {
  assert.equal(classifyVoice(CHROME_VOICES[3]), "male");
  assert.equal(classifyVoice(CHROME_VOICES[2]), "female");
  assert.equal(
    pickVoice(CHROME_VOICES, "male").voice?.name,
    "Google UK English Male",
  );
  assert.equal(
    pickVoice(CHROME_VOICES, "female").voice?.name,
    "Google UK English Female",
  );
  assert.equal(pickVoice(CHROME_VOICES, "male").pitch, 1);
  assert.equal(pickVoice(CHROME_VOICES, "female").pitch, 1);
});

test("Edge natural voices are classified by name", () => {
  assert.equal(
    pickVoice(EDGE_VOICES, "male").voice?.name,
    "Microsoft George Online (Natural) - English (United Kingdom)",
  );
  assert.equal(
    pickVoice(EDGE_VOICES, "female").voice?.name,
    "Microsoft Sheena Online (Natural) - English (United Kingdom)",
  );
});

test("a machine with one usable voice still sounds like two people", () => {
  const onlyOne = [{ name: "Google US English", lang: "en-US" }];
  const man = pickVoice(onlyOne, "male");
  const woman = pickVoice(onlyOne, "female");
  assert.equal(man.voice?.name, "Google US English");
  assert.ok(man.pitch < 1, "male line is pitched lower");
  assert.ok(woman.pitch > 1, "female line is pitched higher");
});

test("no empty voice list and no crash", () => {
  assert.deepEqual(pickVoice([], "male"), { voice: null, pitch: 1 });
  assert.deepEqual(pickVoice([], "female"), { voice: null, pitch: 1 });
});

test("plain sentences keep the voice the site already used", () => {
  const chosen = pickVoice(CHROME_VOICES);
  assert.equal(chosen.voice?.name, "Google UK English Female");
  assert.equal(chosen.pitch, 1);
  const ranked = rankVoices(CHROME_VOICES);
  assert.equal(ranked[0].lang, "en-GB");
});

test("name markers do not misread female names as male", () => {
  for (const name of [
    "Samantha",
    "Amanda",
    "Paula",
    "Josephine",
    "Danielle",
    "Alexandra",
    "Roberta",
  ]) {
    assert.equal(
      classifyVoice({ name: `Microsoft ${name}`, lang: "en-US" }),
      "female",
      name,
    );
  }
  for (const name of ["David", "George", "Ryan", "Mark", "Oliver"]) {
    assert.equal(
      classifyVoice({ name: `Microsoft ${name}`, lang: "en-US" }),
      "male",
      name,
    );
  }
});

test("every real dialogue in the A1 course offers two voices", async () => {
  await register("./alias-loader.mjs", import.meta.url);
  const { a1ListeningUnits } = await import(
    "../src/data/lessons/a1-listening/index.ts"
  );
  const { a1SpeakingUnits } = await import(
    "../src/data/lessons/a1-speaking/index.ts"
  );

  const conversations = [];
  for (const units of [a1ListeningUnits, a1SpeakingUnits]) {
    for (const unit of units) {
      for (const lesson of unit.lessons) {
        for (const block of lesson.blocks) {
          if (block.type === "dialogue" || block.type === "transcript") {
            conversations.push({ lesson: lesson.slug, lines: block.lines });
          }
        }
      }
    }
  }

  assert.ok(conversations.length > 0, "found authored conversations");

  for (const { lesson, lines } of conversations) {
    const voices = gendersForLines(lines);
    const speakers = new Set(lines.map((line) => line.speaker));
    if (speakers.size < 2) continue;
    assert.ok(
      new Set(voices).size > 1,
      `${lesson} uses one voice for ${[...speakers].join(" / ")}`,
    );

    const voicePerSpeaker = new Map();
    for (let index = 0; index < lines.length; index += 1) {
      const speaker = lines[index].speaker;
      const previous = voicePerSpeaker.get(speaker);
      assert.ok(
        previous === undefined || previous === voices[index],
        `${lesson}: ${speaker} changes voice mid-conversation`,
      );
      voicePerSpeaker.set(speaker, voices[index]);
    }
  }
});
