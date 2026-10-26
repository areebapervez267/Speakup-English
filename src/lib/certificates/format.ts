const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const COURSE_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isCertificateId(value: unknown): value is string {
  return typeof value === "string" && UUID_PATTERN.test(value);
}

export function isCertificateCourseSlug(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.length >= 1 &&
    value.length <= 120 &&
    COURSE_SLUG_PATTERN.test(value)
  );
}

export function formatCertificateDate(value: string | null | undefined) {
  if (typeof value !== "string" || !value) {
    return null;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function certificateVerificationPath(certificateId: string) {
  return `/certificates/verify/${certificateId}`;
}

export function certificateProgressLabel({
  completedLessons,
  totalLessons,
  quizLessons,
  quizLessonsMet,
  minimumQuizPercent,
}: {
  completedLessons: number;
  totalLessons: number;
  quizLessons: number;
  quizLessonsMet: number;
  minimumQuizPercent: number;
}) {
  const parts = [`${completedLessons} of ${totalLessons} lessons complete`];

  if (quizLessons > 0 && minimumQuizPercent > 0) {
    parts.push(
      `${quizLessonsMet} of ${quizLessons} quizzes at ${minimumQuizPercent}% or higher`,
    );
  }

  return parts.join(" · ");
}

export function certificateEligibilityLabel(row: {
  eligible: boolean;
  certificate: { revokedAt: string | null } | null;
  completedLessons: number;
  totalLessons: number;
  premium: boolean;
}) {
  if (row.certificate?.revokedAt) {
    return "Revoked";
  }

  if (row.certificate) {
    return "Issued";
  }

  if (row.eligible) {
    return "Ready to issue";
  }

  if (row.totalLessons === 0) {
    return "Not available";
  }

  if (row.completedLessons >= row.totalLessons && row.premium) {
    return "Premium required";
  }

  return "In progress";
}
