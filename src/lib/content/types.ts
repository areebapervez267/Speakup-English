import type { CefrLevelId, SkillId } from "@/data/curriculum";
import type {
  LessonBlock,
  LessonQuizQuestion,
} from "@/data/lessons/types";

export type ContentCourseStatus = "draft" | "published" | "archived";
export type ContentLessonStatus = "draft" | "published";

export type PublicQuizQuestion = {
  id: string;
  question: string;
  options: string[];
};

export type AdminCourseRecord = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  level: CefrLevelId;
  skill: SkillId;
  outcomes: string[];
  metadata: Record<string, unknown>;
  premium: boolean;
  hours: number;
  status: ContentCourseStatus;
  sortOrder: number;
  lastPublishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type AdminUnitRecord = {
  id: string;
  courseId: string;
  title: string;
  description: string;
  status: ContentLessonStatus;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type AdminLessonRecord = {
  id: string;
  courseId: string;
  unitId: string;
  slug: string;
  title: string;
  summary: string;
  objective: string;
  minutes: number;
  blocks: LessonBlock[];
  quiz: LessonQuizQuestion[];
  status: ContentLessonStatus;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type AdminCourseTree = AdminCourseRecord & {
  units: Array<AdminUnitRecord & { lessons: AdminLessonRecord[] }>;
};

export type PublishedLessonOutline = {
  id: string;
  unitId: string;
  slug: string;
  title: string;
  summary: string;
  objective: string;
  minutes: number;
  sortOrder: number;
};

export type PublishedUnitOutline = {
  id: string;
  title: string;
  description: string;
  sortOrder: number;
  lessons: PublishedLessonOutline[];
};

export type PublishedCourseOutline = {
  courseId: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  level: CefrLevelId;
  skill: SkillId;
  outcomes: string[];
  metadata: Record<string, unknown>;
  premium: boolean;
  hours: number;
  lessonCount: number;
  publishedAt: string | null;
  units: PublishedUnitOutline[];
};

export type PublishedLessonBody = {
  blocks: LessonBlock[];
  questions: PublicQuizQuestion[];
};

export type ContentSlugState = {
  slug: string;
  status: ContentCourseStatus;
  lastPublishedAt: string | null;
};

export type AdminAuditEntry = {
  id: string;
  actorEmail: string | null;
  action: string;
  entityType: string;
  entityId: string | null;
  summary: string;
  createdAt: string;
};

export type AdminOverviewCounts = {
  totalCourses: number;
  publishedCourses: number;
  draftCourses: number;
  archivedCourses: number;
  totalLessons: number;
  publishedLessons: number;
  draftLessons: number;
  publishedSnapshots: number;
};

export type AdminOverviewData = {
  counts: AdminOverviewCounts;
  recentAudit: AdminAuditEntry[];
  managedSlugs: string[];
};
