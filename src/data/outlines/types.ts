export type CourseOutlineSeed = {
  overview: string;
  outcomes: string[];
  units: Array<{
    title: string;
    lessons: string[];
  }>;
};
