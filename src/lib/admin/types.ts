import type { CefrLevelId, SkillId } from "@/data/curriculum";
import type {
  AdminAuditEntry,
  AdminCourseRecord,
  ContentCourseStatus,
} from "@/lib/content/types";
import type {
  MembershipSource,
  MembershipStatus,
} from "@/lib/premium/types";

export type AdminActionStatus = "idle" | "success" | "error" | "forbidden";

export type AdminActionState = {
  status: AdminActionStatus;
  message?: string;
  fieldErrors?: Record<string, string>;
  warnings?: string[];
};

export const initialAdminActionState: AdminActionState = { status: "idle" };

export type AdminCourseListRow = AdminCourseRecord & {
  unitCount: number;
  publishedUnitCount: number;
  lessonCount: number;
  publishedLessonCount: number;
  hasPublishedSnapshot: boolean;
  publishedAt: string | null;
};

export type AdminCourseFilters = {
  query: string;
  level: CefrLevelId | "all";
  skill: SkillId | "all";
  status: ContentCourseStatus | "all";
};

export type AdminPublishedState = {
  publishedAt: string | null;
  lessonCount: number;
} | null;

export type AdminQueryResult<T> =
  | { status: "ok"; data: T }
  | { status: "error"; message: string };

export type AdminSetupIssue = "supabase" | "admin-schema";

export type AdminAccess =
  | {
      status: "unconfigured";
      issue: AdminSetupIssue;
      message: string;
    }
  | { status: "signed-out" }
  | { status: "denied"; email: string | null }
  | { status: "error"; message: string }
  | {
      status: "granted";
      userId: string;
      email: string | null;
      displayName: string;
    };

export type AdminOverviewExtras = {
  recentAudit: AdminAuditEntry[];
  builtInCourseCount: number;
  importedBuiltInCount: number;
};

export type AdminMembershipRow = {
  id: string;
  userId: string;
  email: string | null;
  tier: "premium";
  status: MembershipStatus;
  source: MembershipSource;
  provider: string | null;
  activatedAt: string | null;
  currentPeriodEnd: string | null;
  cancelledAt: string | null;
  grantedByEmail: string | null;
  note: string;
  isActive: boolean;
  createdAt: string | null;
  updatedAt: string | null;
};

export type AdminMembershipStudent = {
  userId: string;
  email: string;
};

