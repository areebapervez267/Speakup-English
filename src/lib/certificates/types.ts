export type CertificateActionStatus =
  | "idle"
  | "success"
  | "error"
  | "forbidden";

export type CertificateActionState = {
  status: CertificateActionStatus;
  message?: string;
  certificateId?: string;
};

export const initialCertificateActionState: CertificateActionState = {
  status: "idle",
};

export type CertificateSummary = {
  id: string;
  courseSlug: string;
  completedAt: string | null;
  issuedAt: string | null;
  revokedAt: string | null;
};

export type IssuedCertificate = CertificateSummary & {
  studentName: string;
  courseTitle: string;
};

export type CertificateOverviewRow = {
  courseSlug: string;
  courseTitle: string;
  premium: boolean;
  minimumQuizPercent: number;
  totalLessons: number;
  completedLessons: number;
  quizLessons: number;
  quizLessonsMet: number;
  eligible: boolean;
  certificate: CertificateSummary | null;
};

export type CertificateOverview =
  | { status: "ok"; rows: CertificateOverviewRow[] }
  | { status: "unavailable"; message: string }
  | { status: "error"; message: string };

export type CertificateQueryResult<T> =
  | { status: "ok"; data: T }
  | { status: "unavailable"; message: string }
  | { status: "error"; message: string };

export type PublicCertificateStatus = "valid" | "revoked" | "not_found";

export type PublicCertificate = {
  status: PublicCertificateStatus;
  studentName: string | null;
  courseTitle: string | null;
  completedAt: string | null;
  issuedAt: string | null;
  revokedAt: string | null;
};

export type AdminCertificateRow = {
  id: string;
  studentEmail: string | null;
  studentName: string;
  courseSlug: string;
  courseTitle: string;
  completedAt: string | null;
  issuedAt: string | null;
  revokedAt: string | null;
  revocationReason: string | null;
  revokedByEmail: string | null;
};
