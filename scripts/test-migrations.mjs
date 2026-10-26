import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const migrationsDir = join(root, "supabase/migrations");
const auditPath = join(root, "scripts/audit-progress-integrity.sql");

// Verified by following object references, not by trusting the timestamps.
// Reasons for the non-obvious edges are asserted below.
const EXPECTED_ORDER = [
  "20261025150000_create_student_profiles.sql",
  "20261025150100_create_learning_progress.sql",
  "20261025150200_enable_progress_rls.sql",
  "20261025150300_create_progress_summary_views.sql",
  "20261026120000_create_admin_roles_and_audit.sql",
  "20261026120100_create_content_tables.sql",
  "20261026120200_create_content_functions.sql",
  "20261026130000_create_premium_memberships.sql",
  "20261026140000_create_certificates.sql",
  "20261026150000_harden_progress_writes.sql",
];

function stripSqlNoise(sql) {
  let result = "";
  let index = 0;

  while (index < sql.length) {
    const char = sql[index];
    const next = sql[index + 1];

    if (char === "-" && next === "-") {
      while (index < sql.length && sql[index] !== "\n") index += 1;
      result += "\n";
      continue;
    }

    if (char === "/" && next === "*") {
      index += 2;
      while (
        index < sql.length &&
        !(sql[index] === "*" && sql[index + 1] === "/")
      ) {
        index += 1;
      }
      index += 2;
      result += " ";
      continue;
    }

    if (char === "'") {
      index += 1;
      while (index < sql.length) {
        if (sql[index] === "'" && sql[index + 1] === "'") {
          index += 2;
          continue;
        }
        if (sql[index] === "'") {
          index += 1;
          break;
        }
        index += 1;
      }
      result += " '' ";
      continue;
    }

    result += char;
    index += 1;
  }

  return result;
}

const sources = new Map(
  EXPECTED_ORDER.map((file) => {
    const path = join(migrationsDir, file);
    return [file, stripSqlNoise(readFileSync(path, "utf8"))];
  }),
);

const definitionPattern =
  /\bcreate\s+(or\s+replace\s+)?(table|function|view|materialized\s+view|type)\s+(?:if\s+not\s+exists\s+)?public\.([a-z_][a-z0-9_]*)/gi;

const definitions = [];

for (const [order, file] of EXPECTED_ORDER.entries()) {
  for (const match of sources.get(file).matchAll(definitionPattern)) {
    definitions.push({
      order,
      file,
      object: match[3].toLowerCase(),
      replace: Boolean(match[1]),
      kind: match[2].toLowerCase().replace(/\s+/g, " "),
    });
  }
}

const firstDefinition = new Map();

for (const definition of definitions) {
  if (!firstDefinition.has(definition.object)) {
    firstDefinition.set(definition.object, definition);
  }
}

const referencePattern = /\bpublic\.([a-z_][a-z0-9_]*)/gi;

function references() {
  const found = [];

  for (const [order, file] of EXPECTED_ORDER.entries()) {
    for (const match of sources.get(file).matchAll(referencePattern)) {
      found.push({
        order,
        file,
        object: match[1].toLowerCase(),
      });
    }
  }

  return found;
}

function orderOf(file) {
  const index = EXPECTED_ORDER.indexOf(file);
  assert.notEqual(index, -1, `unknown migration ${file}`);
  return index;
}

test("migration files match the verified dependency order", () => {
  const actual = readdirSync(migrationsDir)
    .filter((file) => file.endsWith(".sql"))
    .sort();

  assert.deepEqual(actual, EXPECTED_ORDER);
  assert.equal(orderOf("20261026150000_harden_progress_writes.sql"), 9);
});

test("every referenced public object is defined in the same or an earlier migration", () => {
  const problems = [];

  for (const reference of references()) {
    const definition = firstDefinition.get(reference.object);

    if (!definition) {
      problems.push(
        `${reference.file}: references undefined public.${reference.object}`,
      );
      continue;
    }

    if (definition.order > reference.order) {
      problems.push(
        `${reference.file}: references public.${reference.object} before it is defined in ${definition.file}`,
      );
    }
  }

  assert.deepEqual(problems, []);
});

test("redefinitions happen only after the original and use create or replace", () => {
  const byObject = new Map();

  for (const definition of definitions) {
    const list = byObject.get(definition.object) ?? [];
    list.push(definition);
    byObject.set(definition.object, list);
  }

  const redefined = [...byObject.entries()]
    .filter(([, list]) => list.length > 1)
    .map(([object]) => object)
    .sort();

  assert.deepEqual(redefined, [
    "grade_published_lesson_quiz",
    "mark_lesson_complete",
  ]);

  for (const object of redefined) {
    const list = byObject.get(object);
    assert.equal(list[0].replace, false, `${object} should not start with replace`);

    for (const definition of list.slice(1)) {
      assert.equal(
        definition.replace,
        true,
        `${definition.file}: public.${object} redefines an existing function without create or replace`,
      );
      assert.ok(
        definition.order > list[0].order,
        `${definition.file}: public.${object} is defined before the original`,
      );
    }
  }
});

test("the premium migration precedes the certificate and hardening migrations", () => {
  // Phase 8 replaces mark_lesson_complete and grade_published_lesson_quiz with
  // premium-aware versions. Phase 9.1 must run after it or the hardening would
  // be overwritten by the older invoker-based completion function.
  assert.ok(
    orderOf("20261026130000_create_premium_memberships.sql") >
      orderOf("20261026120200_create_content_functions.sql"),
  );
  assert.ok(
    orderOf("20261026130000_create_premium_memberships.sql") >
      orderOf("20261025150100_create_learning_progress.sql"),
  );

  assert.ok(
    orderOf("20261026140000_create_certificates.sql") >
      orderOf("20261026130000_create_premium_memberships.sql"),
  );
  assert.ok(
    orderOf("20261026140000_create_certificates.sql") >
      orderOf("20261026120000_create_admin_roles_and_audit.sql"),
  );

  assert.ok(
    orderOf("20261026150000_harden_progress_writes.sql") >
      orderOf("20261026140000_create_certificates.sql"),
  );
  assert.ok(
    orderOf("20261026150000_harden_progress_writes.sql") >
      orderOf("20261026130000_create_premium_memberships.sql"),
  );
});

test("the hardening migration references only objects available by its position", () => {
  const hardening = sources.get("20261026150000_harden_progress_writes.sql");

  for (const object of [
    "published_lessons",
    "published_courses",
    "certificate_course_lessons",
    "certificate_course_policies",
    "current_user_has_active_membership",
    "has_active_membership",
    "grade_published_lesson_quiz",
    "lesson_progress",
    "quiz_attempts",
  ]) {
    assert.match(
      hardening,
      new RegExp(`\\bpublic\\.${object}\\b`),
      `hardening migration should reference public.${object}`,
    );
  }
});

test("the progress integrity audit is read-only", () => {
  const audit = stripSqlNoise(readFileSync(auditPath, "utf8"));

  assert.match(audit, /set\s+default_transaction_read_only\s*=\s*on\s*;/i);

  const forbidden = [
    "insert",
    "update",
    "delete",
    "merge",
    "truncate",
    "alter",
    "drop",
    "create",
    "grant",
    "revoke",
  ];

  for (const keyword of forbidden) {
    assert.doesNotMatch(
      audit,
      new RegExp(`\\b${keyword}\\b`, "i"),
      `audit SQL must not contain ${keyword}`,
    );
  }

  const statements = audit
    .split(";")
    .map((statement) => statement.trim())
    .filter(Boolean);

  for (const statement of statements) {
    assert.match(
      statement,
      /^(set|reset|select|with)\b/i,
      `audit SQL contains a non-read-only statement: ${statement.slice(0, 60)}`,
    );
  }
});
