import type { SupabaseClient } from "@supabase/supabase-js";

import { isSchemaSetupError } from "@/lib/progress/errors";

import type {
  AdminCertificateRow,
  CertificateOverview,
  CertificateOverviewRow,
  CertificateQueryResult,
  CertificateSummary,
  IssuedCertificate,
  PublicCertificate,
  PublicCertificateStatus,
} from "./types";

const CERTIFICATE_SETUP_MESSAGE =
  "The certificate tables are not installed in this Supabase project yet. Apply supabase/migrations/20261026140000_create_certificates.sql, then reload this page.";

const OVERVIEW_ERROR =
  "We couldn't load your certificate status right now. Refresh the page to try again.";
const CERTIFICATE_ERROR =
  "We couldn't load that certificate right now. Refresh the page to try again.";
const VERIFY_ERROR =
  "We couldn't check that certificate right now. Try again in a moment.";
const ADMIN_LIST_ERROR =
  "We couldn't load the certificate records. Refresh the page to try again.";

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function asNullableString(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function asTimestamp(value: unknown): string | null {
  return typeof value === "string" &&
    value.length > 0 &&
    !Number.isNaN(Date.parse(value))
    ? value
    : null;
}

function asNonNegativeInteger(value: unknown): number {
  return typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 0
    ? value
    : 0;
}

function isCertificateSchemaError(error: { code?: string; message?: string }) {
  return (
    isSchemaSetupError(error) ||
    /certificate(s)?|get_my_certificate|verify_certificate|issue_certificate/i.test(
      error.message ?? "",
    )
  );
}

function mapCertificateSummary(
  row: Record<string, unknown>,
): CertificateSummary | null {
  const id = asString(row.certificate_id);

  if (!id) {
    return null;
  }

  return {
    id,
    courseSlug: asString(row.course_slug),
    completedAt: asTimestamp(row.certificate_completed_at),
    issuedAt: asTimestamp(row.certificate_issued_at),
    revokedAt: asTimestamp(row.certificate_revoked_at),
  };
}

function mapOverviewRow(row: unknown): CertificateOverviewRow | null {
  if (!isRecord(row)) {
    return null;
  }

  const courseSlug = asString(row.course_slug);
  const courseTitle = asString(row.course_title);

  if (!courseSlug || !courseTitle) {
    return null;
  }

  return {
    courseSlug,
    courseTitle,
    premium: row.premium === true,
    minimumQuizPercent: asNonNegativeInteger(row.minimum_quiz_percent),
    totalLessons: asNonNegativeInteger(row.total_lessons),
    completedLessons: asNonNegativeInteger(row.completed_lessons),
    quizLessons: asNonNegativeInteger(row.quiz_lessons),
    quizLessonsMet: asNonNegativeInteger(row.quiz_lessons_met),
    eligible: row.eligible === true,
    certificate: mapCertificateSummary(row),
  };
}

export async function fetchCertificateOverview(
  supabase: SupabaseClient,
): Promise<CertificateOverview> {
  try {
    const { data, error } = await supabase.rpc(
      "get_my_certificate_overview",
    );

    if (error) {
      return {
        status: isCertificateSchemaError(error) ? "unavailable" : "error",
        message: isCertificateSchemaError(error)
          ? CERTIFICATE_SETUP_MESSAGE
          : OVERVIEW_ERROR,
      };
    }

    if (!Array.isArray(data)) {
      return { status: "ok", rows: [] };
    }

    return {
      status: "ok",
      rows: data
        .map(mapOverviewRow)
        .filter((row): row is CertificateOverviewRow => row !== null),
    };
  } catch {
    return { status: "error", message: OVERVIEW_ERROR };
  }
}

export async function fetchOwnCertificate(
  supabase: SupabaseClient,
  certificateId: string,
): Promise<CertificateQueryResult<IssuedCertificate | null>> {
  try {
    const { data, error } = await supabase.rpc("get_my_certificate", {
      p_certificate_id: certificateId,
    });

    if (error) {
      return {
        status: isCertificateSchemaError(error) ? "unavailable" : "error",
        message: isCertificateSchemaError(error)
          ? CERTIFICATE_SETUP_MESSAGE
          : CERTIFICATE_ERROR,
      };
    }

    const row = Array.isArray(data) ? data[0] : data;

    if (!isRecord(row)) {
      return { status: "ok", data: null };
    }

    return {
      status: "ok",
      data: {
        id: asString(row.certificate_id),
        courseSlug: asString(row.course_slug),
        studentName: asString(row.student_name),
        courseTitle: asString(row.course_title),
        completedAt: asTimestamp(row.completed_at),
        issuedAt: asTimestamp(row.issued_at),
        revokedAt: asTimestamp(row.revoked_at),
      },
    };
  } catch {
    return { status: "error", message: CERTIFICATE_ERROR };
  }
}

function isPublicStatus(value: unknown): value is PublicCertificateStatus {
  return value === "valid" || value === "revoked" || value === "not_found";
}

export async function verifyPublicCertificate(
  supabase: SupabaseClient,
  certificateId: string,
): Promise<CertificateQueryResult<PublicCertificate>> {
  try {
    const { data, error } = await supabase.rpc("verify_certificate", {
      p_certificate_id: certificateId,
    });

    if (error) {
      return {
        status: isCertificateSchemaError(error) ? "unavailable" : "error",
        message: isCertificateSchemaError(error)
          ? CERTIFICATE_SETUP_MESSAGE
          : VERIFY_ERROR,
      };
    }

    const row = Array.isArray(data) ? data[0] : data;

    if (!isRecord(row) || !isPublicStatus(row.status)) {
      return {
        status: "ok",
        data: {
          status: "not_found",
          studentName: null,
          courseTitle: null,
          completedAt: null,
          issuedAt: null,
          revokedAt: null,
        },
      };
    }

    return {
      status: "ok",
      data: {
        status: row.status,
        studentName: asNullableString(row.student_name),
        courseTitle: asNullableString(row.course_title),
        completedAt: asTimestamp(row.completed_at),
        issuedAt: asTimestamp(row.issued_at),
        revokedAt: asTimestamp(row.revoked_at),
      },
    };
  } catch {
    return { status: "error", message: VERIFY_ERROR };
  }
}

function mapAdminCertificateRow(row: unknown): AdminCertificateRow | null {
  if (!isRecord(row)) {
    return null;
  }

  const id = asString(row.id);
  const studentName = asString(row.student_name);
  const courseSlug = asString(row.course_slug);
  const courseTitle = asString(row.course_title);

  if (!id || !studentName || !courseSlug || !courseTitle) {
    return null;
  }

  return {
    id,
    studentEmail: asNullableString(row.student_email),
    studentName,
    courseSlug,
    courseTitle,
    completedAt: asTimestamp(row.completed_at),
    issuedAt: asTimestamp(row.issued_at),
    revokedAt: asTimestamp(row.revoked_at),
    revocationReason: asNullableString(row.revocation_reason),
    revokedByEmail: asNullableString(row.revoked_by_email),
  };
}

export async function fetchAdminCertificates(
  supabase: SupabaseClient,
): Promise<CertificateQueryResult<AdminCertificateRow[]>> {
  try {
    const { data, error } = await supabase.rpc("admin_list_certificates");

    if (error) {
      return {
        status: isCertificateSchemaError(error) ? "unavailable" : "error",
        message: isCertificateSchemaError(error)
          ? CERTIFICATE_SETUP_MESSAGE
          : ADMIN_LIST_ERROR,
      };
    }

    if (!Array.isArray(data)) {
      return { status: "ok", data: [] };
    }

    return {
      status: "ok",
      data: data
        .map(mapAdminCertificateRow)
        .filter((row): row is AdminCertificateRow => row !== null),
    };
  } catch {
    return { status: "error", message: ADMIN_LIST_ERROR };
  }
}
