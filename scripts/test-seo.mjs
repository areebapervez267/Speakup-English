import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { register } from "node:module";

await register("./alias-loader.mjs", import.meta.url);

const { courses } = await import("../src/data/courses.ts");
const { getAuthoredCourse, getLessonEntries } = await import(
  "../src/data/lessons/index.ts"
);
const { siteUrl } = await import("../src/config/site.ts");
const { getPublicLessonSitemapEntries } = await import("../src/lib/seo.ts");
const { default: nextConfig } = await import("../next.config.ts");
const { default: robots } = await import("../src/app/robots.ts");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("sitemap includes every authored lesson from free courses exactly once", () => {
  const entries = getPublicLessonSitemapEntries(courses);
  const expectedUrls = courses
    .filter((course) => !course.premium && getAuthoredCourse(course.slug))
    .flatMap((course) =>
      getLessonEntries(course.slug).map(
        ({ lesson }) =>
          `${siteUrl}/courses/${course.slug}/lessons/${lesson.slug}`,
      ),
    );

  assert.equal(entries.length, 84);
  assert.equal(expectedUrls.length, 84);
  assert.deepEqual(
    entries.map((entry) => entry.url).sort(),
    expectedUrls.sort(),
  );
  assert.equal(new Set(entries.map((entry) => entry.url)).size, 84);
  assert.equal(
    entries.some((entry) => entry.url.includes("/mastery-grammar/")),
    false,
  );
  assert.equal(
    entries.some((entry) => entry.url.includes("/advanced-grammar-in-context/")),
    false,
  );
});

test("lesson sitemap URLs are clean canonical URLs on the public origin", () => {
  const entries = getPublicLessonSitemapEntries(courses);

  for (const entry of entries) {
    const url = new URL(entry.url);
    assert.equal(url.origin, siteUrl);
    assert.equal(url.search, "");
    assert.equal(url.hash, "");
    assert.match(url.pathname, /^\/courses\/[a-z0-9-]+\/lessons\/[a-z0-9-]+$/);
    assert.equal(entry.changeFrequency, "monthly");
    assert.equal(entry.priority, 0.7);
  }

  const source = readFileSync(join(root, "src/app/sitemap.ts"), "utf8");
  assert.match(source, /const lessonRoutes = getPublicLessonSitemapEntries\(courses\)/);
  assert.match(source, /\.\.\.lessonRoutes/);
});

test("legacy paths reported by Google redirect permanently to useful pages", async () => {
  const redirects = await nextConfig.redirects?.();
  assert.ok(redirects);

  assert.deepEqual(redirects, [
    {
      source: "/help",
      destination: "/contact",
      permanent: true,
    },
    {
      source: "/f%C4%B1%CA%B6",
      destination: "/courses/sounds-of-english/lessons/short-vowel-sounds",
      permanent: true,
    },
  ]);
});

test("robots allows public learning pages and points to the sitemap", () => {
  const result = robots();
  assert.equal(result.sitemap, `${siteUrl}/sitemap.xml`);
  assert.equal(result.rules.userAgent, "*");
  assert.equal(result.rules.allow, "/");
  assert.deepEqual(result.rules.disallow, [
    "/admin",
    "/dashboard",
    "/account",
    "/auth",
  ]);
});
