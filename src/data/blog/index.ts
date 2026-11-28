import type { BlogPost } from "@/data/blog/types";
import { englishGrammarForUrduSpeakers } from "@/data/blog/posts/english-grammar-for-urdu-speakers";
import { englishWithoutGrammarFear } from "@/data/blog/posts/english-without-grammar-fear";
import { mistakesUrduSpeakersMake } from "@/data/blog/posts/mistakes-urdu-speakers-make";
import { shortVowelSoundsInEnglish } from "@/data/blog/posts/short-vowel-sounds-in-english";
import { speakEnglishAtHome } from "@/data/blog/posts/speak-english-at-home";
import { thereIsAndThereAre } from "@/data/blog/posts/there-is-and-there-are";
import { twentyMinuteRoutine } from "@/data/blog/posts/twenty-minute-routine";
import { useADictionary } from "@/data/blog/posts/use-a-dictionary";

export const blogPosts: BlogPost[] = [
  englishGrammarForUrduSpeakers,
  thereIsAndThereAre,
  shortVowelSoundsInEnglish,
  speakEnglishAtHome,
  englishWithoutGrammarFear,
  twentyMinuteRoutine,
  useADictionary,
  mistakesUrduSpeakersMake,
];

export function getBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
