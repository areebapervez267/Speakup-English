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
const { brand, footerNav } = await import("../src/config/brand.ts");
const { absoluteUrl, siteUrl } = await import("../src/config/site.ts");
const { blogPosts, getBlogPost } = await import("../src/data/blog/index.ts");
const {
  courseSchema,
  faqPageSchema,
  getPublicLessonSitemapEntries,
  itemListSchema,
  learningResourceSchema,
  normaliseSeoDescription,
  organizationSchema,
  pageMetadata,
  websiteSchema,
} = await import("../src/lib/seo.ts");
const { buildBlogRssFeed, escapeXml } = await import("../src/lib/rss.ts");
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
  assert.match(
    source,
    /const lessonRoutes = getPublicLessonSitemapEntries\(catalog, lessonParams\)/,
  );
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

test("resolved public lesson params include free database lessons and exclude Premium", () => {
  const entries = getPublicLessonSitemapEntries(courses, [
    { slug: "grammar-foundations", lessonSlug: "database-only-lesson" },
    { slug: "grammar-foundations", lessonSlug: "database-only-lesson" },
    { slug: "mastery-grammar", lessonSlug: "gated-lesson" },
    { slug: "not-a-course", lessonSlug: "missing-course" },
  ]);

  assert.deepEqual(entries, [
    {
      url: `${siteUrl}/courses/grammar-foundations/lessons/database-only-lesson`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]);
});

test("SEO descriptions are normalised and kept within snippet length", () => {
  assert.equal(
    normaliseSeoDescription("  Learn\n English   quickly.  "),
    "Learn English quickly.",
  );
  assert.equal(normaliseSeoDescription("   "), brand.description);

  const shortened = normaliseSeoDescription(
    `A useful English lesson for Urdu and Hindi speakers ${"with clear examples ".repeat(20)}`,
  );
  assert.ok(shortened.length <= 170);
  assert.ok(shortened.endsWith("…"));
  assert.equal(shortened.includes("  "), false);
});

test("page metadata supplies a canonical and matching social preview metadata", () => {
  const metadata = pageMetadata({
    title: "English grammar for Urdu speakers",
    description: `A practical A1 guide ${"with useful examples ".repeat(20)}`,
    path: "/blog/english-grammar-for-urdu-speakers",
    type: "article",
    publishedTime: "2026-11-27",
    feedPath: "/rss.xml",
  });

  assert.equal(
    metadata.title,
    "English grammar for Urdu speakers",
  );
  assert.equal(
    metadata.description,
    normaliseSeoDescription(`A practical A1 guide ${"with useful examples ".repeat(20)}`),
  );
  assert.deepEqual(metadata.alternates, {
    canonical: "/blog/english-grammar-for-urdu-speakers",
    types: { "application/rss+xml": absoluteUrl("/rss.xml") },
  });
  assert.equal(
    metadata.openGraph.url,
    absoluteUrl("/blog/english-grammar-for-urdu-speakers"),
  );
  assert.equal(metadata.openGraph.type, "article");
  assert.equal(metadata.openGraph.publishedTime, "2026-11-27");
  assert.equal(metadata.openGraph.description, metadata.description);
  assert.deepEqual(metadata.openGraph.images, [
    {
      url: absoluteUrl("/opengraph-image"),
      width: 1200,
      height: 630,
      alt: `${brand.name} — CEFR English courses A1–C2`,
    },
  ]);
  assert.equal(metadata.twitter.card, "summary_large_image");
  assert.equal(metadata.twitter.description, metadata.description);
  assert.deepEqual(metadata.twitter.images, [absoluteUrl("/opengraph-image")]);

  const websiteMetadata = pageMetadata({
    title: "Courses",
    description: "Browse free English courses.",
    path: "/courses",
  });
  assert.equal(websiteMetadata.openGraph.type, "website");
});

test("structured data describes the organisation, site, catalogue and FAQs", () => {
  assert.equal(organizationSchema()["@id"], `${siteUrl}/#organization`);
  assert.equal(organizationSchema().name, brand.name);
  assert.equal(websiteSchema().publisher["@id"], `${siteUrl}/#organization`);

  const catalog = itemListSchema(courses);
  assert.equal(catalog["@type"], "ItemList");
  assert.equal(catalog.itemListElement.length, courses.length);
  assert.equal(
    catalog.itemListElement[0].url,
    absoluteUrl(`/courses/${courses[0].slug}`),
  );

  const faq = faqPageSchema([
    { question: "Is A1 free?", answer: "Yes, A1 is free." },
  ]);
  assert.equal(faq["@type"], "FAQPage");
  assert.equal(faq.mainEntity[0].acceptedAnswer.text, "Yes, A1 is free.");
});

test("course and lesson schema accurately describes access and level", () => {
  const freeCourse = courses.find((course) => course.slug === "grammar-foundations");
  const premiumCourse = courses.find((course) => course.slug === "mastery-grammar");
  assert.ok(freeCourse);
  assert.ok(premiumCourse);

  const course = courseSchema(freeCourse);
  assert.equal(course["@type"], "Course");
  assert.equal(course.educationalLevel, "A1");
  assert.equal(course.isAccessibleForFree, true);
  assert.equal(course.provider["@id"], `${siteUrl}/#organization`);
  assert.equal(courseSchema(premiumCourse).isAccessibleForFree, false);

  const lesson = learningResourceSchema({
    title: "A practical lesson",
    description: "Learn with clear examples and practice.",
    courseTitle: freeCourse.title,
    courseSlug: freeCourse.slug,
    lessonSlug: "example-lesson",
    level: freeCourse.level,
    minutes: 12,
    premium: true,
  });
  assert.equal(lesson["@type"], "LearningResource");
  assert.equal(lesson.timeRequired, "PT12M");
  assert.equal(lesson.isAccessibleForFree, false);
  assert.equal(lesson.isPartOf.url, absoluteUrl(`/courses/${freeCourse.slug}`));
});

test("public headings, JSON-LD escaping and social image conventions are present", () => {
  const sectionHeading = readFileSync(
    join(root, "src/components/section-heading.tsx"),
    "utf8",
  );
  assert.match(sectionHeading, /as: Heading = "h2"/);

  for (const path of ["src/app/blog/page.tsx", "src/app/level-test/page.tsx"]) {
    const source = readFileSync(join(root, path), "utf8");
    assert.match(source, /<SectionHeading\s+as="h1"/);
  }

  const jsonLd = readFileSync(
    join(root, "src/components/seo/json-ld.tsx"),
    "utf8",
  );
  assert.match(jsonLd, /JSON\.stringify\(data\)\.replace\(\/<\/g, "\\\\u003c"\)/);

  const ogImage = readFileSync(
    join(root, "src/app/opengraph-image.tsx"),
    "utf8",
  );
  assert.match(ogImage, /from "next\/og"/);
  assert.match(ogImage, /width: 1200, height: 630/);
  assert.match(ogImage, /contentType = "image\/png"/);

  const adminActions = readFileSync(
    join(root, "src/lib/admin/actions.ts"),
    "utf8",
  );
  assert.match(adminActions, /revalidatePath\("\/sitemap\.xml"\)/);
});

test("course cards distinguish complete lessons from syllabus previews", () => {
  const complete = courses.filter((course) => course.contentStatus === "complete");
  const previews = courses.filter((course) => course.contentStatus === "preview");
  assert.equal(complete.length, 21);
  assert.equal(previews.length, 21);
  assert.equal(
    courses.filter((course) => course.level === "a1" && course.contentStatus === "complete").length,
    7,
  );
  assert.equal(
    courses.filter((course) => course.premium && course.contentStatus === "complete").length,
    14,
  );
  assert.equal(previews.every((course) => !course.premium), true);

  const card = readFileSync(join(root, "src/components/course-card.tsx"), "utf8");
  assert.match(card, /Free preview/);
  assert.match(card, /planned lessons/);
});

test("three new long-tail articles are registered with valid course links", () => {
  const expected = [
    ["short-vowel-sounds-in-english", "sounds-of-english"],
    ["there-is-and-there-are-rules", "grammar-foundations"],
    ["english-grammar-for-urdu-speakers", "grammar-foundations"],
  ];

  assert.equal(blogPosts.length, 8);
  assert.equal(new Set(blogPosts.map((post) => post.slug)).size, blogPosts.length);

  for (const [slug, relatedCourseSlug] of expected) {
    const post = getBlogPost(slug);
    assert.ok(post, `${slug} must be registered`);
    assert.equal(post.date, "2026-11-27");
    assert.equal(post.relatedCourseSlug, relatedCourseSlug);
    assert.ok(post.blocks.length >= 6);
    assert.ok(normaliseSeoDescription(post.description).length <= 170);
    assert.equal(courses.some((course) => course.slug === relatedCourseSlug), true);
  }
});

test("RSS publishes every article in date order with valid escaped XML", () => {
  const specialPost = {
    ...blogPosts[0],
    slug: "rss-escaping-check",
    title: `Practice <grammar> & "confidence"`,
    description: "SpeakUp's guide & practice notes.",
    date: "2026-11-28",
  };
  const feed = buildBlogRssFeed([...blogPosts, specialPost]);

  assert.equal(
    escapeXml(`Practice <grammar> & "confidence"`),
    "Practice &lt;grammar&gt; &amp; &quot;confidence&quot;",
  );
  assert.equal(escapeXml("SpeakUp's"), "SpeakUp&apos;s");
  assert.ok(feed.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
  assert.ok(feed.includes('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">'));
  assert.ok(feed.includes(`<atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml" />`));
  assert.equal((feed.match(/<item>/g) ?? []).length, blogPosts.length + 1);
  assert.ok(
    feed.indexOf(escapeXml(specialPost.title)) <
      feed.indexOf(escapeXml(blogPosts[0].title)),
  );
  assert.ok(feed.includes("<pubDate>Sat, 28 Nov 2026 12:00:00 GMT</pubDate>"));
  assert.equal(feed.includes(specialPost.title), false);

  for (const post of blogPosts) {
    assert.ok(feed.includes(`<link>${absoluteUrl(`/blog/${post.slug}`)}</link>`));
  }

  const route = readFileSync(join(root, "src/app/rss.xml/route.ts"), "utf8");
  assert.match(route, /"Content-Type": "application\/rss\+xml; charset=utf-8"/);
  assert.match(route, /new Response\(buildBlogRssFeed\(getBlogPosts\(\)\)/);

  const blogPage = readFileSync(join(root, "src/app/blog/page.tsx"), "utf8");
  assert.match(blogPage, /feedPath: "\/rss\.xml"/);
  assert.match(blogPage, /href="\/rss\.xml"/);
  assert.equal(
    footerNav.explore.some((link) => link.href === "/rss.xml"),
    true,
  );
});

test("public course copy distinguishes interactive lessons from previews", () => {
  const levelPath = readFileSync(
    join(root, "src/components/home/level-path.tsx"),
    "utf8",
  );
  assert.equal(levelPath.includes("Four complete CEFR levels"), false);
  assert.match(levelPath, /A1 has complete interactive lessons/);
  assert.match(levelPath, /A2–B2 have free\s+syllabus previews/);

  const outline = readFileSync(
    join(root, "src/components/courses/course-outline.tsx"),
    "utf8",
  );
  assert.equal(outline.includes("At other levels, lessons become interactive"), false);
  assert.match(outline, /Interactive A1 lessons are available now/);
  assert.match(outline, /lessons for this level\s+become interactive/);
});
