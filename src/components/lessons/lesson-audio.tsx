"use client";

import { useEffect, useId, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { Pause, Play, Turtle } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SpeakerGender } from "@/lib/speaker-gender";
import {
  NORMAL_RATE,
  SLOW_RATE,
  pickVoice,
} from "@/lib/speech-voices";

const KEEP_ALIVE_MS = 9000;

type ActiveSpeech = { token: string };
export type SpeechPart = { text: string; gender?: SpeakerGender };

let active: ActiveSpeech | null = null;
let rate = NORMAL_RATE;
let supported = true;
let voicesWarmed = false;
let generation = 0;
let pending: SpeechSynthesisUtterance[] = [];
let keepAlive: ReturnType<typeof setInterval> | null = null;

const listeners = new Set<() => void>();

let snapshot: {
  activeToken: string | null;
  rate: number;
  supported: boolean;
} = { activeToken: null, rate: NORMAL_RATE, supported: true };

function publish() {
  snapshot = {
    activeToken: active?.token ?? null,
    rate,
    supported,
  };
  for (const listener of [...listeners]) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function readSnapshot() {
  return snapshot;
}

function getSynth(): SpeechSynthesis | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return null;
  }
  return window.speechSynthesis;
}

function availableVoices(): SpeechSynthesisVoice[] {
  const synth = getSynth();
  if (!synth) return [];
  try {
    return synth.getVoices();
  } catch {
    return [];
  }
}

/**
 * Pick the voice for one line. Some engines only expose the voice list after a
 * speech request is made, so the first call may still see an empty array — the
 * browser then picks a default from `lang`.
 */
function voiceFor(gender?: SpeakerGender) {
  return pickVoice(availableVoices(), gender);
}

function warmVoices() {
  if (voicesWarmed) return;
  const synth = getSynth();
  if (!synth) return;
  voicesWarmed = true;
  if (synth.getVoices().length > 0) return;
  const change = () => {
    if (synth.getVoices().length > 0) {
      synth.removeEventListener("voiceschanged", change);
    }
  };
  synth.addEventListener("voiceschanged", change);
  // Some engines only fill the list after an utterance is queued.
  synth.getVoices();
}

function detectSupport() {
  const next = getSynth() !== null;
  if (next !== supported) {
    supported = next;
    publish();
  }
  warmVoices();
}

function buildUtterance(part: SpeechPart, token: string, gen: number) {
  const utterance = new SpeechSynthesisUtterance(part.text);
  const { voice, pitch } = voiceFor(part.gender);
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
  } else {
    utterance.lang = "en-GB";
  }
  utterance.rate = rate;
  utterance.pitch = pitch;

  const isStale = () => gen !== generation;

  utterance.onend = () => {
    if (isStale()) return;
    pump();
  };
  utterance.onerror = () => {
    if (isStale()) return;
    pending = [];
    if (active?.token === token) {
      active = null;
      publish();
    }
  };
  return utterance;
}

/** Speak the next queued line, or finish the group when the queue is empty. */
function pump(): boolean {
  const synth = getSynth();
  if (!synth || !active) {
    pending = [];
    return false;
  }
  const next = pending.shift();
  if (!next) {
    active = null;
    publish();
    return false;
  }
  synth.speak(next);
  return true;
}

function startKeepAlive(synth: SpeechSynthesis) {
  if (keepAlive) return;
  keepAlive = setInterval(() => {
    if (!active) {
      if (keepAlive) clearInterval(keepAlive);
      keepAlive = null;
      return;
    }
    if (synth.speaking && !synth.paused) {
      // Chrome silently drops long utterances; nudging keeps them playing.
      synth.pause();
      synth.resume();
    } else if (!synth.speaking && !synth.pending) {
      // A queued line whose onend event never fired — keep the dialogue moving.
      pump();
    }
  }, KEEP_ALIVE_MS);
}

function stopAll() {
  generation += 1;
  pending = [];
  const synth = getSynth();
  if (synth) synth.cancel();
  if (keepAlive) clearInterval(keepAlive);
  keepAlive = null;
  active = null;
  publish();
}

function speakParts(token: string, parts: SpeechPart[]): boolean {
  const synth = getSynth();
  const usable = parts.filter((part) => part.text.trim().length > 0);
  if (!synth || usable.length === 0) return false;

  if (active?.token === token) {
    stopAll();
    return true;
  }

  synth.cancel();
  warmVoices();
  generation += 1;
  const gen = generation;

  const utterances = usable.map((part) => buildUtterance(part, token, gen));
  pending = utterances.slice(1);

  active = { token };
  publish();
  synth.speak(utterances[0]);
  startKeepAlive(synth);
  return true;
}

function speak(
  token: string,
  text: string,
  gender?: SpeakerGender,
): boolean {
  return speakParts(token, [{ text, gender }]);
}

function useSpeech() {
  return useSyncExternalStore(subscribe, readSnapshot, readSnapshot);
}

function useSpeechSupport() {
  useEffect(() => {
    detectSupport();
  }, []);
  const { supported: ready } = useSpeech();
  return ready;
}

function useStopOnUnmount(token: string) {
  useEffect(
    () => () => {
      if (active?.token === token) stopAll();
    },
    [token],
  );
}

export function SpeakButton({
  text,
  gender,
  label,
  className,
}: {
  text: string;
  gender?: SpeakerGender;
  label?: string;
  className?: string;
}) {
  const token = useId();
  const { activeToken } = useSpeech();
  const supported = useSpeechSupport();
  useStopOnUnmount(token);
  const isPlaying = activeToken === token;

  if (!supported) return null;

  return (
    <button
      type="button"
      onClick={() => speak(token, text, gender)}
      aria-label={label ?? (isPlaying ? "Stop audio" : "Listen in English")}
      aria-pressed={isPlaying}
      title={
        gender
          ? `${isPlaying ? "Stop" : "Listen"} — ${gender} voice`
          : isPlaying
            ? "Stop"
            : "Listen"
      }
      className={cn(
        "inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-brand-line bg-white text-brand-teal-deep shadow-sm transition-colors hover:bg-brand-teal-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
        isPlaying &&
          "border-brand-teal-deep bg-brand-teal-deep text-white hover:bg-brand-teal-deep",
        className,
      )}
    >
      {isPlaying ? (
        <Pause className="size-3.5" aria-hidden="true" />
      ) : (
        <Play className="size-3.5" aria-hidden="true" />
      )}
    </button>
  );
}

export function SpeakPill({
  text,
  parts,
  label,
  children,
  className,
}: {
  text?: string;
  parts?: SpeechPart[];
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  const token = useId();
  const { activeToken } = useSpeech();
  const supported = useSpeechSupport();
  useStopOnUnmount(token);
  const isPlaying = activeToken === token;

  if (!supported) return null;

  return (
    <button
      type="button"
      onClick={() => {
        if (parts && parts.length > 0) {
          speakParts(token, parts);
        } else if (text) {
          speak(token, text);
        }
      }}
      aria-label={label}
      aria-pressed={isPlaying}
      className={cn(
        "inline-flex min-w-[7.5rem] shrink-0 items-center justify-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-brand-teal-deep shadow-sm transition-colors hover:bg-brand-teal-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
        isPlaying &&
          "border-brand-teal-deep bg-brand-teal-deep text-white hover:bg-brand-teal-deep",
        className,
      )}
    >
      {isPlaying ? (
        <Pause className="size-3" aria-hidden="true" />
      ) : (
        <Play className="size-3" aria-hidden="true" />
      )}
      {isPlaying ? "Stop" : children}
    </button>
  );
}

export function AudioRateToggle() {
  const { rate: currentRate } = useSpeech();
  const supported = useSpeechSupport();
  if (!supported) return null;

  const isSlow = currentRate !== NORMAL_RATE;

  return (
    <button
      type="button"
      onClick={() => {
        stopAll();
        rate = isSlow ? NORMAL_RATE : SLOW_RATE;
        publish();
      }}
      aria-pressed={isSlow}
      title="Play everything at a slower speed"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
        isSlow
          ? "border-brand-teal-deep bg-brand-teal-deep text-white"
          : "border-brand-line bg-white text-brand-body hover:bg-brand-mist",
      )}
    >
      <Turtle className="size-3" aria-hidden="true" />
      {isSlow ? "Slow: on" : "Slow"}
    </button>
  );
}
