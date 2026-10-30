import type { LessonBlock } from "@/data/lessons/types";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  minutes: number;
  relatedCourseSlug?: string;
  blocks: LessonBlock[];
};
