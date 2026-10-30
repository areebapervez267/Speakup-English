import type { BlogPost } from "@/data/blog/types";
import { englishWithoutGrammarFear } from "@/data/blog/posts/english-without-grammar-fear";
import { mistakesUrduSpeakersMake } from "@/data/blog/posts/mistakes-urdu-speakers-make";
import { speakEnglishAtHome } from "@/data/blog/posts/speak-english-at-home";
import { twentyMinuteRoutine } from "@/data/blog/posts/twenty-minute-routine";
import { useADictionary } from "@/data/blog/posts/use-a-dictionary";

export const blogPosts: BlogPost[] = [
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
