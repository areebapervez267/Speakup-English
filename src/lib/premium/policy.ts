import type { CefrLevelId } from "@/data/curriculum";

const PREMIUM_LEVELS: readonly CefrLevelId[] = ["c1", "c2"];

/**
 * Premium is decided by level as well as the administrator label, so a C1/C2
 * course can never become free by clearing a checkbox.
 */
export function isPremiumCourse(course: {
  premium: boolean;
  level: CefrLevelId;
}): boolean {
  return course.premium || PREMIUM_LEVELS.includes(course.level);
}

export function courseHasAccess(
  course: { premium: boolean; level: CefrLevelId },
  hasActiveMembership: boolean,
): boolean {
  return !isPremiumCourse(course) || hasActiveMembership;
}
