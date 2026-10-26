import { courses, type Course } from "@/data/courses";
import { getAuthoredCourse } from "@/data/lessons";
import type { LessonPracticeNote } from "@/data/lessons/types";
import { courseOutlines } from "@/data/outlines";

export type CourseLessonSummary = {
  title: string;
  number: number;
  minutes: number;
  slug?: string;
};

export type CourseUnitDetail = {
  title: string;
  description?: string;
  lessons: CourseLessonSummary[];
};

export type CourseDetail = {
  course: Course;
  overview: string;
  outcomes: string[];
  units: CourseUnitDetail[];
  lessonMinutes: number;
  hasFullContent: boolean;
  practiceNote?: LessonPracticeNote;
};

function buildCourseDetail(course: Course): CourseDetail {
  const lessonMinutes = Math.round((course.hours * 60) / course.lessons);
  const authored = getAuthoredCourse(course.slug);

  if (authored) {
    let number = 0;
    const units = authored.units.map((unit) => ({
      title: unit.title,
      description: unit.description,
      lessons: unit.lessons.map((lesson) => {
        number += 1;

        return {
          title: lesson.title,
          number,
          minutes: lesson.minutes,
          slug: lesson.slug,
        };
      }),
    }));

    return {
      course,
      overview: authored.overview,
      outcomes: authored.outcomes,
      units,
      lessonMinutes,
      hasFullContent: true,
      practiceNote: authored.practiceNote,
    };
  }

  const outline = courseOutlines[course.slug];

  if (!outline) {
    throw new Error(`Missing course outline for "${course.slug}"`);
  }

  let number = 0;
  const units = outline.units.map((unit) => ({
    title: unit.title,
    lessons: unit.lessons.map((title) => {
      number += 1;

      return { title, number, minutes: lessonMinutes };
    }),
  }));

  if (number !== course.lessons) {
    throw new Error(
      `Course "${course.slug}" expects ${course.lessons} lessons but its outline has ${number}`,
    );
  }

  return {
    course,
    overview: outline.overview,
    outcomes: outline.outcomes,
    units,
    lessonMinutes,
    hasFullContent: false,
  };
}

export const courseDetails: CourseDetail[] = courses.map(buildCourseDetail);

export function getCourseDetail(slug: string): CourseDetail | undefined {
  return courseDetails.find((detail) => detail.course.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map((course) => course.slug);
}

export function getRelatedCoursesFrom(
  catalog: readonly Course[],
  course: Course,
  limit = 3,
): Course[] {
  const sameSkill = catalog.filter(
    (item) => item.slug !== course.slug && item.skill === course.skill,
  );
  const sameLevel = catalog.filter(
    (item) =>
      item.slug !== course.slug &&
      item.level === course.level &&
      item.skill !== course.skill,
  );

  return [...sameSkill, ...sameLevel].slice(0, limit);
}
