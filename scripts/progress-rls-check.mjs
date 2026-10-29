#!/usr/bin/env node
/**
 * Live Supabase isolation and tamper check for the Phase 5 + 9.1 model.
 *
 * This script uses only the public URL/key and two ordinary student accounts.
 * It never reads or accepts a service-role key. Run it against a disposable
 * test project after applying all migrations in supabase/migrations.
 *
 * Required environment variables (never commit these values):
 *   NEXT_PUBLIC_SUPABASE_URL
 *   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY)
 *   SUPABASE_TEST_USER_A_EMAIL / SUPABASE_TEST_USER_A_PASSWORD
 *   SUPABASE_TEST_USER_B_EMAIL / SUPABASE_TEST_USER_B_PASSWORD
 *
 * Usage:
 *   node --env-file=.env.local scripts/progress-rls-check.mjs
 *   (set the four SUPABASE_TEST_* variables in the shell first)
 *
 * The check marks one real authored lesson complete and records quiz attempts
 * for both test accounts. Direct deletes are revoked by design, so those rows
 * remain. Use disposable accounts and a disposable project.
 */

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
const key = (
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  ""
).trim();

const accounts = {
  A: {
    email: process.env.SUPABASE_TEST_USER_A_EMAIL?.trim() ?? "",
    password: process.env.SUPABASE_TEST_USER_A_PASSWORD ?? "",
  },
  B: {
    email: process.env.SUPABASE_TEST_USER_B_EMAIL?.trim() ?? "",
    password: process.env.SUPABASE_TEST_USER_B_PASSWORD ?? "",
  },
};

const COURSE_SLUG = "grammar-foundations";
const LESSON_SLUG = "subject-pronouns-and-be";

function requireEnv() {
  const missing = [];
  if (!url) missing.push("NEXT_PUBLIC_SUPABASE_URL");
  if (!key) {
    missing.push(
      "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY)",
    );
  }
  for (const [label, account] of Object.entries(accounts)) {
    if (!account.email) missing.push(`SUPABASE_TEST_USER_${label}_EMAIL`);
    if (!account.password) missing.push(`SUPABASE_TEST_USER_${label}_PASSWORD`);
  }

  if (url) {
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
        missing.push("NEXT_PUBLIC_SUPABASE_URL (must use http:// or https://)");
      }
    } catch {
      missing.push("NEXT_PUBLIC_SUPABASE_URL (not a valid URL)");
    }
  }

  if (missing.length === 0) {
    return true;
  }

  console.error("Cannot run the live RLS check. Missing or invalid settings:");
  for (const name of missing) console.error(`  - ${name}`);
  console.error(
    "\nSet them in the shell or pass --env-file. Do not commit real test credentials.",
  );
  return false;
}

function readJwtRole(token) {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  try {
    const payload = JSON.parse(
      Buffer.from(parts[1], "base64url").toString("utf8"),
    );
    return typeof payload.role === "string" ? payload.role : null;
  } catch {
    return null;
  }
}

function refuseUnsafeKey() {
  if (key.startsWith("sb_secret_") || readJwtRole(key) === "service_role") {
    console.error(
      "Refusing to run: the supplied key looks like a secret or service-role key.",
    );
    console.error(
      "This check must use the public publishable/anon key, never a key that bypasses RLS.",
    );
    return false;
  }
  return true;
}

function createStudentClient() {
  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

async function signIn(label, account) {
  const client = createStudentClient();
  const { data, error } = await client.auth.signInWithPassword({
    email: account.email,
    password: account.password,
  });

  if (error || !data.user) {
    throw new Error(
      `Test account ${label} could not sign in: ${
        error?.message ?? "no user returned"
      } (the account must exist and be email-confirmed)`,
    );
  }

  return { client, userId: data.user.id };
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function expectError(result, expectedCode, label) {
  assert(
    result.error,
    `${label}: expected the database to reject the request, but it succeeded.`,
  );
  assert(
    result.error?.code === expectedCode,
    `${label}: expected error code ${expectedCode}, received ${
      result.error?.code ?? "none"
    } (${result.error?.message}). This can also mean the migrations are out of date.`,
  );
}

function expectEmpty(result, label) {
  assert(
    !result.error,
    `${label}: expected an isolated empty result, received error ${
      result.error?.code ?? "unknown"
    } (${result.error?.message}).`,
  );
  assert(
    Array.isArray(result.data) && result.data.length === 0,
    `${label}: another student's rows were visible or changeable (expected 0 rows).`,
  );
}

function expectRows(result, label) {
  assert(
    !result.error,
    `${label}: request failed with ${result.error?.code ?? "unknown"} (${
      result.error?.message
    }). Check the migrations and grants.`,
  );
  assert(
    Array.isArray(result.data),
    `${label}: expected a row list from PostgREST.`,
  );
  return result.data;
}

const results = [];
let currentSuite = "Setup";

function suite(name) {
  currentSuite = name;
  console.log(`\n${name}`);
}

async function check(name, fn) {
  try {
    await fn();
    results.push({ suite: currentSuite, name, ok: true });
    console.log(`  PASS  ${name}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    results.push({ suite: currentSuite, name, ok: false, message });
    console.log(`  FAIL  ${name}`);
    console.log(`        ${message}`);
  }
}

async function latestAttempt(client, userId) {
  const result = await client
    .from("quiz_attempts")
    .select("id, score, total_questions")
    .eq("user_id", userId)
    .eq("course_slug", COURSE_SLUG)
    .eq("lesson_slug", LESSON_SLUG)
    .order("attempted_at", { ascending: false })
    .limit(1);

  const rows = expectRows(result, "Latest attempt read");
  return rows[0] ?? null;
}

async function main() {
  if (!requireEnv() || !refuseUnsafeKey()) {
    process.exitCode = 1;
    return;
  }

  let studentA;
  let studentB;

  try {
    [studentA, studentB] = await Promise.all([
      signIn("A", accounts.A),
      signIn("B", accounts.B),
    ]);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
    return;
  }

  const a = studentA;
  const b = studentB;

  assert(
    a.userId !== b.userId,
    "The two test accounts resolved to the same user. Use two different accounts.",
  );

  console.log(`Live RLS check against ${new URL(url).host}`);
  console.log(`Student A: ${a.userId.slice(0, 8)}…`);
  console.log(`Student B: ${b.userId.slice(0, 8)}…`);

  try {
    suite("Schema and profiles");

    await check("profiles, progress and attempts are reachable", async () => {
      const [profiles, progress, attempts] = await Promise.all([
        a.client.from("profiles").select("id").limit(1),
        a.client.from("lesson_progress").select("user_id").limit(1),
        a.client.from("quiz_attempts").select("user_id").limit(1),
      ]);
      assert(!profiles.error, "profiles is not readable; apply the migrations.");
      assert(
        !progress.error,
        `lesson_progress is not readable: ${progress.error?.code ?? "unknown"}.`,
      );
      assert(
        !attempts.error,
        `quiz_attempts is not readable: ${attempts.error?.code ?? "unknown"}.`,
      );
    });

    await check("a student cannot read or update another profile", async () => {
      const read = await a.client
        .from("profiles")
        .select("id, display_name")
        .eq("id", b.userId);
      expectEmpty(read, "Cross-profile read");

      const update = await a.client
        .from("profiles")
        .update({ display_name: "Not allowed" })
        .eq("id", b.userId)
        .select("id");
      expectEmpty(update, "Cross-profile update");
    });

    suite("Direct tamper attempts");

    await check("a student cannot insert their own completed progress", async () => {
      const result = await a.client.from("lesson_progress").insert({
        user_id: a.userId,
        course_slug: COURSE_SLUG,
        lesson_slug: LESSON_SLUG,
        is_completed: true,
        completed_at: new Date().toISOString(),
      });
      expectError(result, "42501", "Direct completion insert");
    });

    await check("a student cannot insert progress for another user", async () => {
      const result = await a.client.from("lesson_progress").insert({
        user_id: b.userId,
        course_slug: COURSE_SLUG,
        lesson_slug: LESSON_SLUG,
        is_completed: true,
        completed_at: new Date().toISOString(),
      });
      expectError(result, "42501", "Forged progress insert");
    });

    await check("a student cannot update completion or best scores", async () => {
      const update = await a.client
        .from("lesson_progress")
        .update({
          is_completed: true,
          completed_at: new Date().toISOString(),
          best_score: 4,
          best_score_total: 4,
        })
        .eq("user_id", a.userId)
        .eq("course_slug", COURSE_SLUG)
        .eq("lesson_slug", LESSON_SLUG)
        .select("user_id");
      expectError(update, "42501", "Direct progress update");
    });

    await check("a student cannot delete progress or attempts", async () => {
      const progress = await a.client
        .from("lesson_progress")
        .delete()
        .eq("user_id", a.userId)
        .eq("course_slug", COURSE_SLUG)
        .eq("lesson_slug", LESSON_SLUG)
        .select("user_id");
      expectError(progress, "42501", "Direct progress delete");

      const attempts = await a.client
        .from("quiz_attempts")
        .delete()
        .eq("user_id", a.userId)
        .eq("course_slug", COURSE_SLUG)
        .select("id");
      expectError(attempts, "42501", "Direct attempt delete");
    });

    await check("a student cannot insert an arbitrary quiz score", async () => {
      const result = await a.client.from("quiz_attempts").insert({
        user_id: a.userId,
        course_slug: COURSE_SLUG,
        lesson_slug: LESSON_SLUG,
        score: 4,
        total_questions: 4,
      });
      expectError(result, "42501", "Forged score insert");
    });

    await check("a student cannot insert an attempt for another user", async () => {
      const result = await a.client.from("quiz_attempts").insert({
        user_id: b.userId,
        course_slug: COURSE_SLUG,
        lesson_slug: LESSON_SLUG,
        score: 4,
        total_questions: 4,
      });
      expectError(result, "42501", "Cross-user score insert");
    });

    suite("Validated completion");

    await check("completion rejects unknown lessons", async () => {
      const result = await a.client.rpc("mark_lesson_complete", {
        target_course_slug: COURSE_SLUG,
        target_lesson_slug: "not-a-real-lesson",
      });
      expectError(result, "P0002", "Unknown lesson completion");
    });

    await check("completion rejects malformed identifiers", async () => {
      const result = await a.client.rpc("mark_lesson_complete", {
        target_course_slug: "Not A Slug!",
        target_lesson_slug: LESSON_SLUG,
      });
      expectError(result, "22023", "Invalid completion identifier");
    });

    let firstCompletedAt = null;

    await check("completion works for a real authored lesson", async () => {
      const result = await a.client.rpc("mark_lesson_complete", {
        target_course_slug: COURSE_SLUG,
        target_lesson_slug: LESSON_SLUG,
      });
      const rows = expectRows(result, "mark_lesson_complete");
      assert(rows.length === 1, "Expected exactly one completion row.");
      assert(rows[0].is_completed === true, "Lesson was not marked complete.");
      assert(
        typeof rows[0].completed_at === "string" &&
          !Number.isNaN(Date.parse(rows[0].completed_at)),
        "Completion did not return a valid completed_at timestamp.",
      );
      firstCompletedAt = rows[0].completed_at;
    });

    await check("completion is idempotent and preserves the timestamp", async () => {
      const result = await a.client.rpc("mark_lesson_complete", {
        target_course_slug: COURSE_SLUG,
        target_lesson_slug: LESSON_SLUG,
      });
      const rows = expectRows(result, "Second mark_lesson_complete");
      assert(
        rows.length === 1 && rows[0].completed_at === firstCompletedAt,
        "A repeated completion changed completed_at.",
      );
    });

    suite("Server-graded quiz attempts");

    await check("an answer submission is graded by the database", async () => {
      const submitted = await a.client.rpc("record_static_quiz_attempt", {
        p_course_slug: COURSE_SLUG,
        p_lesson_slug: LESSON_SLUG,
        p_answers: { "l1-q1": 0, "l1-q2": 0, "l1-q3": 0, "l1-q4": 0 },
      });
      assert(
        !submitted.error,
        `record_static_quiz_attempt failed: ${
          submitted.error?.code ?? "unknown"
        } (${submitted.error?.message}). Apply migration 20261026150000.`,
      );
      assert(
        submitted.data &&
          Number.isInteger(submitted.data.score) &&
          Number.isInteger(submitted.data.total) &&
          submitted.data.total === 4 &&
          submitted.data.score >= 0 &&
          submitted.data.score <= 4,
        `Unexpected graded result: ${JSON.stringify(submitted.data)}.`,
      );

      const stored = await latestAttempt(a.client, a.userId);
      assert(
        stored &&
          stored.score === submitted.data.score &&
          stored.total_questions === submitted.data.total,
        "The stored attempt does not match the database-graded score.",
      );
    });

    await check("attempts are immutable", async () => {
      const stored = await latestAttempt(a.client, a.userId);
      assert(stored, "No attempt was stored.");
      const update = await a.client
        .from("quiz_attempts")
        .update({ score: 4 })
        .eq("id", stored.id)
        .select("id");
      expectError(update, "42501", "Attempt update");
    });

    await check("a student cannot read another student's attempts", async () => {
      const result = await a.client
        .from("quiz_attempts")
        .select("id, user_id, score")
        .eq("user_id", b.userId);
      expectEmpty(result, "Cross-attempt read");
    });

    await check("a student cannot read another student's progress", async () => {
      const result = await a.client
        .from("lesson_progress")
        .select("user_id, course_slug, lesson_slug")
        .eq("user_id", b.userId);
      expectEmpty(result, "Cross-progress read");
    });

    suite("Anonymous access");

    const anon = createStudentClient();

    await check("an anonymous visitor cannot read progress or attempts", async () => {
      const [progress, attempts] = await Promise.all([
        anon.from("lesson_progress").select("user_id").limit(1),
        anon.from("quiz_attempts").select("user_id").limit(1),
      ]);
      expectError(progress, "42501", "Anonymous progress read");
      expectError(attempts, "42501", "Anonymous attempt read");
    });

    await check("an anonymous visitor cannot call write RPCs", async () => {
      const [completion, quiz] = await Promise.all([
        anon.rpc("mark_lesson_complete", {
          target_course_slug: COURSE_SLUG,
          target_lesson_slug: LESSON_SLUG,
        }),
        anon.rpc("record_static_quiz_attempt", {
          p_course_slug: COURSE_SLUG,
          p_lesson_slug: LESSON_SLUG,
          p_answers: { "l1-q1": 0, "l1-q2": 0, "l1-q3": 0, "l1-q4": 0 },
        }),
      ]);
      expectError(completion, "42501", "Anonymous completion");
      expectError(quiz, "42501", "Anonymous quiz recording");
    });
  } finally {
    console.log(
      "\nTest rows are not removed: direct deletes are intentionally revoked. Use disposable test accounts.",
    );
  }

  const failures = results.filter((result) => !result.ok);
  console.log(
    `\n${results.length - failures.length}/${results.length} checks passed.`,
  );

  if (failures.length > 0) {
    console.log("Failed checks:");
    for (const failure of failures) {
      console.log(`  - ${failure.suite}: ${failure.name}`);
    }
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(
    "The live isolation check stopped unexpectedly:",
    error instanceof Error ? error.message : String(error),
  );
  process.exitCode = 1;
});
