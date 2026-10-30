"use client";

import { useEffect, useId, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { Pause, Play, Turtle } from "lucide-react";

import { cn } from "@/lib/utils";

const NORMAL_RATE = 1;
const SLOW_RATE = 0.55;
const KEEP_ALIVE_MS = 9000;

type ActiveSpeech = { token: string };

let active: ActiveSpeech | null = null;
let rate = NORMAL_RATE;
let supported = true;
let voicesWarmed = false;
let cachedVoice: SpeechSynthesisVoice | null = null;
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

const PREFERRED_LANGS = ["en-GB", "en-US", "en-AU", "en-IE", "en-IN"];

function resolveVoice(synth: SpeechSynthesis): SpeechSynthesisVoice | null {
  if (cachedVoice) return cachedVoice;
  const voices = synth.getVoices();
  if (voices.length === 0) return null;
  const english = voices.filter((voice) =>
    voice.lang?.toLowerCase().startsWith("en"),
  );
  const pool = english.length > 0 ? english : voices;
  for (const wanted of PREFERRED_LANGS) {
    const match = pool.find(
      (voice) =>
        voice.lang?.replace("_", "-").toLowerCase() === wanted.toLowerCase(),
    );
    if (match) {
      cachedVoice = match;
      return match;
    }
  }
  cachedVoice = pool[0] ?? null;
  return cachedVoice;
}

function warmVoices() {
  if (voicesWarmed) return;
  const synth = getSynth();
  if (!synth) return;
  voicesWarmed = true;
  if (synth.getVoices().length > 0) {
    resolveVoice(synth);
    return;
  }
  const change = () => {
    if (resolveVoice(synth)) synth.removeEventListener("voiceschanged", change);
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

function startKeepAlive(synth: SpeechSynthesis) {
  if (keepAlive) return;
  keepAlive = setInterval(() => {
    if (synth.speaking && !synth.paused) {
      // Chrome silently drops long utterances; nudging keeps them playing.
      synth.pause();
      synth.resume();
    } else if (!synth.speaking) {
      if (keepAlive) clearInterval(keepAlive);
      keepAlive = null;
      active = null;
      publish();
    }
  }, KEEP_ALIVE_MS);
}

function stopAll() {
  const synth = getSynth();
  if (synth) synth.cancel();
  if (keepAlive) clearInterval(keepAlive);
  keepAlive = null;
  active = null;
  publish();
}

function speak(token: string, text: string): boolean {
  const synth = getSynth();
  if (!synth) return false;

  if (active?.token === token) {
    stopAll();
    return true;
  }

  synth.cancel();
  warmVoices();

  const utterance = new SpeechSynthesisUtterance(text);
  const voice = resolveVoice(synth);
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
  } else {
    utterance.lang = "en-GB";
  }
  utterance.rate = rate;
  utterance.pitch = 1;

  const finish = () => {
    if (active?.token === token) {
      active = null;
      publish();
    }
  };
  utterance.onend = finish;
  utterance.onerror = finish;

  active = { token };
  publish();
  synth.speak(utterance);
  startKeepAlive(synth);
  return true;
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
  label,
  className,
}: {
  text: string;
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
      onClick={() => speak(token, text)}
      aria-label={label ?? (isPlaying ? "Stop audio" : "Listen in English")}
      aria-pressed={isPlaying}
      title={isPlaying ? "Stop" : "Listen"}
      className={cn(
        "inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-brand-line bg-white text-brand-teal-deep shadow-sm transition-colors hover:bg-brand-teal-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
        isPlaying && "border-brand-teal-deep bg-brand-teal-deep text-white hover:bg-brand-teal-deep",
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
  label,
  children,
  className,
}: {
  text: string;
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
      onClick={() => speak(token, text)}
      aria-label={label}
      aria-pressed={isPlaying}
      className={cn(
        "inline-flex min-w-[7.5rem] shrink-0 items-center justify-center gap-1.5 rounded-full border border-brand-line bg-white px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-brand-teal-deep shadow-sm transition-colors hover:bg-brand-teal-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
        isPlaying && "border-brand-teal-deep bg-brand-teal-deep text-white hover:bg-brand-teal-deep",
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
