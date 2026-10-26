import type { CourseOutlineSeed } from "@/data/outlines/types";

import { a1Outlines } from "./a1";
import { a2Outlines } from "./a2";
import { b1Outlines } from "./b1";
import { b2Outlines } from "./b2";
import { c1Outlines } from "./c1";
import { c2Outlines } from "./c2";

export const courseOutlines: Record<string, CourseOutlineSeed> = {
  ...a1Outlines,
  ...a2Outlines,
  ...b1Outlines,
  ...b2Outlines,
  ...c1Outlines,
  ...c2Outlines,
};
