import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

import { isMissingSessionError } from "./errors";
import { fetchLessonProgress } from "./queries";
import type { LessonProgressView } from "./types";

const UNAVAILABLE_MESSAGE =
  "We couldn't load your saved progress right now. You can keep learning and try again later.";

export async function getLessonProgressView(
  courseSlug: string,
  lessonSlug: string,
): Promise<LessonProgressView> {
  if (!isSupabaseConfigured) {
    return { state: "unconfigured" };
  }

  try {
    const supabase = await createSupabaseServerClient();

    if (!supabase) {
      return { state: "unconfigured" };
    }

    const { data, error } = await supabase.auth.getUser();

    if (error) {
      if (isMissingSessionError(error)) {
        return { state: "signed-out" };
      }

      return { state: "unavailable", message: UNAVAILABLE_MESSAGE };
    }

    if (!data.user) {
      return { state: "signed-out" };
    }

    const result = await fetchLessonProgress(
      supabase,
      data.user.id,
      courseSlug,
      lessonSlug,
    );

    if (result.status === "error") {
      return { state: "unavailable", message: result.message };
    }

    return { state: "ready", progress: result.data };
  } catch {
    return { state: "unavailable", message: UNAVAILABLE_MESSAGE };
  }
}
