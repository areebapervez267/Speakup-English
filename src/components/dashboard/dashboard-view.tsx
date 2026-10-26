import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Info,
  Layers3,
  LockKeyhole,
  Target,
  Trophy,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { SignOutForm } from "@/components/auth/sign-out-form";
import { CertificatesPanel } from "@/components/dashboard/certificates-panel";
import { SkillIcon } from "@/components/skill-icon";
import { getLevel, getSkill } from "@/data/curriculum";
import { getInitials } from "@/lib/auth/user";
import type { CertificateOverview } from "@/lib/certificates/types";
import {
  formatDashboardDate,
  toQuizPercent,
} from "@/lib/dashboard/calculate";
import type {
  DashboardCourse,
  DashboardData,
  DashboardQuizAttempt,
} from "@/lib/dashboard/types";
import {
  formatMembershipDate,
  membershipSummary,
} from "@/lib/premium/display";
import type { PremiumAccess } from "@/lib/premium/types";
import type { RecentLearningActivity } from "@/lib/progress/types";
import { cn } from "@/lib/utils";

function lessonHref(courseSlug: string, lessonSlug: string) {
  return `/courses/${courseSlug}/lessons/${lessonSlug}`;
}

function continueLabel(data: DashboardData) {
  if (!data.continueTarget) {
    return "Browse courses";
  }

  if (data.continueTarget.kind === "continue") {
    return "Continue learning";
  }

  return data.metrics.startedCourses === 0
    ? "Start learning"
    : "Start a new course";
}

function continueHref(data: DashboardData) {
  if (!data.continueTarget) {
    return "/courses";
  }

  return lessonHref(
    data.continueTarget.courseSlug,
    data.continueTarget.lessonSlug,
  );
}

export function DashboardView({
  data,
  access,
  certificates,
}: {
  data: DashboardData;
  access: PremiumAccess;
  certificates: CertificateOverview;
}) {
  const ctaLabel = continueLabel(data);
  const ctaHref = continueHref(data);

  return (
    <div className="mt-8 space-y-8">
      <section
        aria-labelledby="dashboard-welcome-heading"
        className="relative overflow-hidden rounded-[1.75rem] bg-brand-navy px-5 py-6 text-white shadow-lift sm:px-8 sm:py-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dot-light opacity-25"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-brand-teal/10 blur-3xl"
        />

        <div className="relative flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/10 text-sm font-bold tracking-[0.08em] text-white">
                {getInitials(data.displayName)}
              </span>
              <div className="min-w-0">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.17em] text-brand-teal">
                  Welcome back
                </p>
                <h2
                  id="dashboard-welcome-heading"
                  className="mt-1 break-words font-display text-[1.9rem] font-medium leading-tight tracking-[-0.02em] sm:text-4xl"
                >
                  {data.displayName}
                </h2>
              </div>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              Your lesson completion and quiz attempts are saved to your student
              account. Pick up where you left off, or review how you are doing.
            </p>

            <div className="mt-5 border-t border-white/10 pt-4">
              {data.continueTarget ? (
                <>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/45">
                    Next up
                  </p>
                  <p className="mt-1.5 text-sm font-semibold leading-6 text-white">
                    {data.continueTarget.courseTitle}
                    <span className="font-normal text-white/50">
                      {" "}
                      · Lesson {data.continueTarget.lessonNumber}
                    </span>
                  </p>
                  <p className="mt-0.5 text-sm leading-6 text-white/70">
                    {data.continueTarget.lessonTitle}
                  </p>
                </>
              ) : (
                <p className="text-sm leading-6 text-white/70">
                  You have completed every interactive lesson available. Explore
                  the catalogue to plan your next course.
                </p>
              )}
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-2 lg:max-w-xs lg:justify-end">
            <Link
              href={ctaHref}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-teal px-5 text-sm font-semibold text-brand-navy transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy sm:w-auto"
            >
              {ctaLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/account"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
            >
              <UserRound className="size-4 text-brand-teal" aria-hidden="true" />
              Your account
            </Link>
            <SignOutForm variant="dashboard" />
          </div>
        </div>
      </section>

      <MembershipPanel access={access} />

      <CertificatesPanel overview={certificates} />

      <section aria-labelledby="learning-overview-heading">
        <div className="max-w-3xl">
          <h2
            id="learning-overview-heading"
            className="text-[1.35rem] font-bold tracking-[-0.02em] text-brand-navy"
          >
            Learning overview
          </h2>
          <p className="mt-1.5 text-sm leading-6 text-brand-body">
            These figures come from your saved records. Completion is calculated
            only from courses that currently include interactive lessons.
          </p>
        </div>

        <dl className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            icon={BookOpenCheck}
            label="Lessons completed"
            value={data.metrics.lessonsCompleted}
            detail="Saved lesson completions across your courses."
          />
          <MetricCard
            icon={Layers3}
            label="Courses started"
            value={data.metrics.startedCourses}
            detail={`${data.metrics.interactiveCourseCount} courses with interactive lessons available.`}
          />
          <MetricCard
            icon={Target}
            label="Overall completion"
            value={`${data.metrics.overallCompletionPercent}%`}
            detail={
              data.metrics.totalInteractiveLessons > 0
                ? `${data.metrics.lessonsCompleted} of ${data.metrics.totalInteractiveLessons} interactive lessons.`
                : "No interactive lessons are available yet."
            }
          />
          <MetricCard
            icon={Trophy}
            label="Quiz attempts"
            value={data.metrics.totalQuizAttempts}
            detail="Saved quiz submissions, including retries."
          />
        </dl>
      </section>

      <section aria-labelledby="my-courses-heading">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl">
            <h2
              id="my-courses-heading"
              className="text-[1.35rem] font-bold tracking-[-0.02em] text-brand-navy"
            >
              My courses
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-brand-body">
              Courses with saved activity. Continue with the next incomplete
              lesson or review a completed course.
            </p>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 rounded-full text-xs font-semibold text-brand-body transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Browse catalogue
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        {data.courses.length > 0 ? (
          <ul className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.courses.map((course) => (
              <li key={course.courseSlug} className="min-w-0">
                <CourseProgressCard course={course} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyPanel
            icon={BookOpen}
            title="No started courses yet"
            description="Open any A1 course and start its first lesson. Your progress will appear here after you mark a lesson complete or submit a quiz."
            href="/courses"
            linkLabel="Browse courses"
          />
        )}

        <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-brand-body">
          <Info
            className="mt-0.5 size-3.5 shrink-0 text-brand-teal-deep"
            aria-hidden="true"
          />
          Progress is tracked for courses with interactive lessons. Outline-only
          courses can still be browsed, but they do not contribute to lesson
          totals or saved progress yet.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <section
          aria-labelledby="quiz-performance-heading"
          className="rounded-3xl border border-brand-line bg-white p-5 shadow-sm sm:p-6"
        >
          <div className="flex items-start gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-teal-soft text-brand-teal-deep">
              <Trophy className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="quiz-performance-heading"
                className="text-lg font-bold tracking-[-0.01em] text-brand-navy"
              >
                Quiz performance
              </h2>
              <p className="mt-1 text-sm leading-6 text-brand-body">
                Your most recent saved quiz attempts.
              </p>
            </div>
          </div>

          {data.quizAttempts.length > 0 ? (
            <ol className="mt-5 divide-y divide-brand-line border-t border-brand-line">
              {data.quizAttempts.map((attempt, index) => (
                <QuizAttemptRow
                  key={`${attempt.courseSlug}-${attempt.lessonSlug}-${attempt.attemptedAt}-${index}`}
                  attempt={attempt}
                />
              ))}
            </ol>
          ) : (
            <div className="mt-5">
              <EmptyPanel
                icon={Trophy}
                title="No quiz attempts yet"
                description="Submit a lesson quiz while signed in and your score will appear here."
                href="/courses"
                linkLabel="Find a lesson"
                compact
              />
            </div>
          )}
        </section>

        <section
          aria-labelledby="recent-activity-heading"
          className="rounded-3xl border border-brand-line bg-white p-5 shadow-sm sm:p-6"
        >
          <div className="flex items-start gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-mist text-brand-navy">
              <Clock3 className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="recent-activity-heading"
                className="text-lg font-bold tracking-[-0.01em] text-brand-navy"
              >
                Recent activity
              </h2>
              <p className="mt-1 text-sm leading-6 text-brand-body">
                Completed lessons and quiz attempts in one timeline.
              </p>
            </div>
          </div>

          {data.recentActivity.length > 0 ? (
            <ol className="mt-5 divide-y divide-brand-line border-t border-brand-line">
              {data.recentActivity.map((activity, index) => (
                <ActivityRow
                  key={`${activity.kind}-${activity.courseSlug}-${activity.lessonSlug}-${activity.occurredAt}-${index}`}
                  activity={activity}
                />
              ))}
            </ol>
          ) : (
            <div className="mt-5">
              <EmptyPanel
                icon={Clock3}
                title="No saved activity yet"
                description="Completed lessons and submitted quizzes will appear here as you learn."
                href="/courses"
                linkLabel="Start learning"
                compact
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function MembershipPanel({ access }: { access: PremiumAccess }) {
  const summary = membershipSummary(access);
  const periodEnd = formatMembershipDate(
    access.membership?.currentPeriodEnd ?? null,
  );
  const active = access.active;

  return (
    <section
      aria-labelledby="membership-heading"
      className="rounded-3xl border border-brand-line bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-navy text-white">
            <LockKeyhole className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2
                id="membership-heading"
                className="text-lg font-bold tracking-[-0.01em] text-brand-navy"
              >
                Premium membership
              </h2>
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.12em]",
                  summary.tone === "active"
                    ? "bg-brand-teal-soft text-brand-teal-deep"
                    : summary.tone === "pending" ||
                        summary.tone === "unavailable"
                      ? "bg-amber-50 text-amber-800"
                      : "bg-brand-mist text-brand-navy",
                )}
              >
                {summary.label}
              </span>
            </div>
            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-brand-body">
              {summary.description}
            </p>
            {periodEnd ? (
              <p className="mt-1.5 text-xs text-brand-body">
                {active ? "Access until" : "Period ended"}{" "}
                <span className="font-semibold text-brand-navy">
                  {periodEnd}
                </span>
              </p>
            ) : null}
          </div>
        </div>

        <Link
          href={active ? "/courses?level=c1" : "/premium"}
          className="inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-full border border-brand-line bg-white px-4 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal/40 hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
        >
          {active ? "Browse C1 and C2" : "View Premium plans"}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: LucideIcon;
  label: string;
  value: number | string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-brand-line bg-white p-5 shadow-sm">
      <dt className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-body">
        <span className="grid size-7 place-items-center rounded-lg bg-brand-teal-soft text-brand-teal-deep">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        {label}
      </dt>
      <dd className="mt-3">
        <p className="font-display text-[2rem] font-medium leading-none tracking-[-0.03em] text-brand-navy">
          {value}
        </p>
        <p className="mt-2 text-xs leading-5 text-brand-body">{detail}</p>
      </dd>
    </div>
  );
}

function CourseProgressCard({ course }: { course: DashboardCourse }) {
  const level = getLevel(course.level);
  const skill = getSkill(course.skill);
  const titleId = `dashboard-course-${course.courseSlug}`;

  return (
    <article
      aria-labelledby={titleId}
      className="flex h-full flex-col rounded-3xl border border-brand-line bg-white p-5 shadow-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-11 place-items-center rounded-xl border border-brand-line bg-brand-mist text-brand-navy">
          <SkillIcon skill={course.skill} />
        </span>
        {course.isComplete ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-teal-soft px-3 py-1.5 text-[0.65rem] font-bold text-brand-teal-deep">
            <CheckCircle2 className="size-3.5" aria-hidden="true" />
            Completed
          </span>
        ) : (
          <span className="rounded-full border border-brand-line bg-white px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-brand-body">
            {level.label} · {skill.label}
          </span>
        )}
      </div>

      <p className="mt-4 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-teal-deep">
        {level.label} {level.name} · {skill.label}
      </p>
      <h3
        id={titleId}
        className="mt-1.5 text-lg font-bold leading-snug tracking-[-0.015em] text-brand-navy"
      >
        <Link
          href={`/courses/${course.courseSlug}`}
          className="transition-colors hover:text-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
        >
          {course.courseTitle}
        </Link>
      </h3>

      <div className="mt-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-brand-body">
          <span>
            {course.lessonsCompleted} of {course.totalLessons} lessons complete
          </span>
          <span className="text-brand-navy">{course.completionPercent}%</span>
        </div>
        <div
          role="progressbar"
          aria-label={`${course.courseTitle} completion`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={course.completionPercent}
          aria-valuetext={`${course.lessonsCompleted} of ${course.totalLessons} lessons complete`}
          className="mt-2 h-2 overflow-hidden rounded-full bg-brand-line"
        >
          <div
            aria-hidden="true"
            className="h-full rounded-full bg-brand-teal"
            style={{ width: `${course.completionPercent}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex-1">
        {course.nextLesson ? (
          <p className="text-xs leading-5 text-brand-body">
            <span className="font-semibold text-brand-navy">Next:</span> Lesson{" "}
            {course.nextLesson.lessonNumber} · {course.nextLesson.lessonTitle}
          </p>
        ) : course.isComplete ? (
          <p className="text-xs leading-5 text-brand-body">
            You have completed every lesson in this course.
          </p>
        ) : (
          <p className="text-xs leading-5 text-brand-body">
            This course does not have an unfinished interactive lesson to open.
          </p>
        )}
      </div>

      <div className="mt-5 border-t border-brand-line pt-4">
        {course.nextLesson ? (
          <Link
            href={lessonHref(
              course.courseSlug,
              course.nextLesson.lessonSlug,
            )}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-brand-navy px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Continue learning
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        ) : (
          <Link
            href={`/courses/${course.courseSlug}`}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-brand-line bg-white px-4 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Review course
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}

function QuizAttemptRow({ attempt }: { attempt: DashboardQuizAttempt }) {
  const date = formatDashboardDate(attempt.attemptedAt);

  return (
    <li className="py-3.5 first:pt-4 last:pb-0">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[0.58rem] font-bold uppercase tracking-[0.13em] text-brand-body">
            {attempt.courseTitle}
          </p>
          <Link
            href={lessonHref(attempt.courseSlug, attempt.lessonSlug)}
            className="mt-0.5 block text-sm font-semibold leading-6 text-brand-navy transition-colors hover:text-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            {attempt.lessonTitle}
          </Link>
          {date ? (
            <time
              dateTime={attempt.attemptedAt}
              className="mt-0.5 flex items-center gap-1.5 text-xs text-brand-body"
            >
              <CalendarDays className="size-3.5" aria-hidden="true" />
              {date}
            </time>
          ) : null}
        </div>
        <div className="shrink-0 rounded-xl bg-brand-teal-soft px-3 py-2 text-right">
          <p className="text-sm font-bold text-brand-teal-deep">
            {attempt.score} / {attempt.total}
          </p>
          <p className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-brand-teal-deep/80">
            {attempt.percent}%
          </p>
        </div>
      </div>
    </li>
  );
}

function ActivityRow({ activity }: { activity: RecentLearningActivity }) {
  const date = formatDashboardDate(activity.occurredAt);
  const quizPercent =
    activity.kind === "quiz"
      ? toQuizPercent(activity.score, activity.total)
      : null;

  return (
    <li className="py-3.5 first:pt-4 last:pb-0">
      <div className="flex gap-3">
        <span
          className={cn(
            "mt-0.5 grid size-8 shrink-0 place-items-center rounded-full",
            activity.kind === "completion"
              ? "bg-brand-teal-soft text-brand-teal-deep"
              : "bg-brand-mist text-brand-navy",
          )}
        >
          {activity.kind === "completion" ? (
            <CheckCircle2 className="size-4" aria-hidden="true" />
          ) : (
            <Trophy className="size-4" aria-hidden="true" />
          )}
        </span>
        <div className="min-w-0">
          <p className="text-sm leading-6 text-brand-navy">
            {activity.kind === "completion" ? (
              <>
                Completed{" "}
                <Link
                  href={lessonHref(activity.courseSlug, activity.lessonSlug)}
                  className="font-semibold underline decoration-brand-teal/40 underline-offset-4 transition-colors hover:text-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                >
                  {activity.lessonTitle}
                </Link>
              </>
            ) : (
              <>
                Scored{" "}
                <span className="font-semibold">
                  {activity.score} / {activity.total}
                </span>{" "}
                on{" "}
                <Link
                  href={lessonHref(activity.courseSlug, activity.lessonSlug)}
                  className="font-semibold underline decoration-brand-teal/40 underline-offset-4 transition-colors hover:text-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                >
                  {activity.lessonTitle}
                </Link>
              </>
            )}
          </p>
          <p className="mt-0.5 text-xs leading-5 text-brand-body">
            {activity.courseTitle}
            {quizPercent !== null ? ` · ${quizPercent}%` : ""}
          </p>
          {date ? (
            <time
              dateTime={activity.occurredAt}
              className="mt-1 flex items-center gap-1.5 text-xs text-brand-body/80"
            >
              <CalendarDays className="size-3.5" aria-hidden="true" />
              {date}
            </time>
          ) : null}
        </div>
      </div>
    </li>
  );
}

function EmptyPanel({
  icon: Icon,
  title,
  description,
  href,
  linkLabel,
  compact = false,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-dashed border-brand-line bg-brand-mist/45 px-5 text-center",
        compact ? "py-8" : "py-12",
      )}
    >
      <span className="mx-auto grid size-11 place-items-center rounded-full bg-white text-brand-teal-deep shadow-sm">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-bold text-brand-navy">{title}</h3>
      <p className="mx-auto mt-1.5 max-w-md text-sm leading-6 text-brand-body">
        {description}
      </p>
      <Link
        href={href}
        className="mt-4 inline-flex min-h-10 items-center gap-1.5 rounded-full border border-brand-line bg-white px-4 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal/40 hover:bg-brand-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
      >
        {linkLabel}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
