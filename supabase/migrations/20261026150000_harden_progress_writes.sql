-- Phase 9.1: close direct student writes to progress and quiz evidence.
-- Apply this file once, after the Phase 9 certificates migration.
--
-- Before this migration, authenticated students held INSERT/UPDATE/DELETE on
-- lesson_progress and INSERT/DELETE on quiz_attempts. A student could therefore
-- mark any lesson complete with an arbitrary timestamp, or insert a perfect
-- quiz score, and then satisfy certificate eligibility. Completion timestamps
-- and best scores were also editable.
--
-- After this migration:
--   * all direct table writes are revoked and the write policies are dropped;
--   * mark_lesson_complete() is the only completion writer and checks that the
--     lesson exists (published or authored), is accessible, and belongs to the
--     caller;
--   * quiz attempts are only written by record_static_quiz_attempt() or
--     record_published_quiz_attempt(), which grade the submitted answers
--     against a private answer key before inserting anything;
--   * students can still read their own rows, and the best-score trigger still
--     maintains lesson_progress.best_score as the database owner.
--
-- Static answer keys are generated from the authored A1 lessons:
--   node scripts/generate-static-quiz-keys.mjs
-- Re-run it after changing an authored quiz and replace the seed block below.

-- Direct writes ---------------------------------------------------------------

revoke insert, update, delete on table public.lesson_progress
  from public, anon, authenticated;
revoke insert, update, delete on table public.quiz_attempts
  from public, anon, authenticated;

drop policy if exists "lesson_progress_insert_own" on public.lesson_progress;
drop policy if exists "lesson_progress_update_own" on public.lesson_progress;
drop policy if exists "lesson_progress_delete_own" on public.lesson_progress;
drop policy if exists "quiz_attempts_insert_own" on public.quiz_attempts;
drop policy if exists "quiz_attempts_delete_own" on public.quiz_attempts;

-- Private static answer keys --------------------------------------------------

create table public.static_quiz_answer_keys (
  course_slug text not null,
  lesson_slug text not null,
  questions jsonb not null,
  constraint static_quiz_answer_keys_pkey primary key (course_slug, lesson_slug),
  constraint static_quiz_answer_keys_slug_check check (
    char_length(course_slug) between 1 and 120
    and course_slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
    and char_length(lesson_slug) between 1 and 120
    and lesson_slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  ),
  constraint static_quiz_answer_keys_questions_check check (
    jsonb_typeof(questions) = 'array'
    and jsonb_array_length(questions) > 0
  )
);

comment on table public.static_quiz_answer_keys is
  'Private correct-answer metadata for authored quizzes. Never granted to clients; only the recording RPC reads it.';

alter table public.static_quiz_answer_keys enable row level security;
revoke all on table public.static_quiz_answer_keys
  from public, anon, authenticated;

insert into public.static_quiz_answer_keys (
  course_slug,
  lesson_slug,
  questions
)
values
  ('grammar-foundations', 'subject-pronouns-and-be', '[{"id":"l1-q1","optionCount":3,"correctIndex":1},{"id":"l1-q2","optionCount":3,"correctIndex":0},{"id":"l1-q3","optionCount":3,"correctIndex":2},{"id":"l1-q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('grammar-foundations', 'negatives-with-be', '[{"id":"l2-q1","optionCount":3,"correctIndex":0},{"id":"l2-q2","optionCount":3,"correctIndex":1},{"id":"l2-q3","optionCount":3,"correctIndex":0},{"id":"l2-q4","optionCount":3,"correctIndex":1}]'::jsonb),
  ('grammar-foundations', 'questions-with-be', '[{"id":"l3-q1","optionCount":3,"correctIndex":0},{"id":"l3-q2","optionCount":3,"correctIndex":2},{"id":"l3-q3","optionCount":3,"correctIndex":1},{"id":"l3-q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('grammar-foundations', 'a-an-and-plural-nouns', '[{"id":"l4-q1","optionCount":3,"correctIndex":1},{"id":"l4-q2","optionCount":3,"correctIndex":1},{"id":"l4-q3","optionCount":3,"correctIndex":1},{"id":"l4-q4","optionCount":3,"correctIndex":1}]'::jsonb),
  ('grammar-foundations', 'this-that-these-those', '[{"id":"l5-q1","optionCount":3,"correctIndex":0},{"id":"l5-q2","optionCount":3,"correctIndex":2},{"id":"l5-q3","optionCount":3,"correctIndex":2},{"id":"l5-q4","optionCount":3,"correctIndex":1}]'::jsonb),
  ('grammar-foundations', 'possessive-adjectives', '[{"id":"l6-q1","optionCount":3,"correctIndex":1},{"id":"l6-q2","optionCount":3,"correctIndex":0},{"id":"l6-q3","optionCount":3,"correctIndex":1},{"id":"l6-q4","optionCount":3,"correctIndex":2}]'::jsonb),
  ('grammar-foundations', 'have-and-has', '[{"id":"l7-q1","optionCount":3,"correctIndex":1},{"id":"l7-q2","optionCount":3,"correctIndex":1},{"id":"l7-q3","optionCount":3,"correctIndex":0},{"id":"l7-q4","optionCount":3,"correctIndex":1}]'::jsonb),
  ('grammar-foundations', 'there-is-and-there-are', '[{"id":"l8-q1","optionCount":3,"correctIndex":0},{"id":"l8-q2","optionCount":3,"correctIndex":1},{"id":"l8-q3","optionCount":3,"correctIndex":0},{"id":"l8-q4","optionCount":3,"correctIndex":1}]'::jsonb),
  ('grammar-foundations', 'present-simple-i-you-we-they', '[{"id":"l9-q1","optionCount":3,"correctIndex":1},{"id":"l9-q2","optionCount":3,"correctIndex":0},{"id":"l9-q3","optionCount":3,"correctIndex":1},{"id":"l9-q4","optionCount":3,"correctIndex":1}]'::jsonb),
  ('grammar-foundations', 'present-simple-he-she-it', '[{"id":"l10-q1","optionCount":3,"correctIndex":1},{"id":"l10-q2","optionCount":3,"correctIndex":1},{"id":"l10-q3","optionCount":3,"correctIndex":1},{"id":"l10-q4","optionCount":3,"correctIndex":1}]'::jsonb),
  ('grammar-foundations', 'do-and-does-questions-negatives', '[{"id":"l11-q1","optionCount":3,"correctIndex":1},{"id":"l11-q2","optionCount":3,"correctIndex":0},{"id":"l11-q3","optionCount":3,"correctIndex":2},{"id":"l11-q4","optionCount":3,"correctIndex":1}]'::jsonb),
  ('grammar-foundations', 'adjectives-and-word-order', '[{"id":"l12-q1","optionCount":3,"correctIndex":0},{"id":"l12-q2","optionCount":3,"correctIndex":1},{"id":"l12-q3","optionCount":3,"correctIndex":0},{"id":"l12-q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('grammar-foundations', 'in-on-at-time-and-place', '[{"id":"l13-q1","optionCount":3,"correctIndex":1},{"id":"l13-q2","optionCount":3,"correctIndex":0},{"id":"l13-q3","optionCount":3,"correctIndex":1},{"id":"l13-q4","optionCount":3,"correctIndex":2}]'::jsonb),
  ('grammar-foundations', 'putting-it-together', '[{"id":"l14-q1","optionCount":3,"correctIndex":0},{"id":"l14-q2","optionCount":3,"correctIndex":1},{"id":"l14-q3","optionCount":3,"correctIndex":1},{"id":"l14-q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'family-and-relationships', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'describing-appearance', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'rooms-and-furniture', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'everyday-objects', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'food-and-drink', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'fruit-and-vegetables', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'clothes-and-colours', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'shopping-and-money', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'transport', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'places-in-town', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'health-and-the-body', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'jobs-and-workplaces', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'hobbies-and-interests', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('essential-500-words', 'weather-and-seasons', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":2},{"id":"q3","optionCount":3,"correctIndex":1},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('reading-from-day-one', 'signs-around-you', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('reading-from-day-one', 'labels-and-packaging', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('reading-from-day-one', 'numbers-dates-and-prices', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('reading-from-day-one', 'text-messages', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('reading-from-day-one', 'short-emails', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('reading-from-day-one', 'postcards', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('reading-from-day-one', 'a-personal-profile', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('reading-from-day-one', 'a-short-description', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('reading-from-day-one', 'a-simple-story', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('reading-from-day-one', 'menus', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('reading-from-day-one', 'timetables-and-schedules', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('reading-from-day-one', 'reading-every-day', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('write-your-first-sentences', 'word-order-in-a-sentence', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('write-your-first-sentences', 'capital-letters', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('write-your-first-sentences', 'full-stops-and-question-marks', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('write-your-first-sentences', 'about-me', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('write-your-first-sentences', 'completing-forms', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('write-your-first-sentences', 'short-messages', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('write-your-first-sentences', 'notes-and-reminders', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('write-your-first-sentences', 'postcards', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('write-your-first-sentences', 'a-simple-email', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('write-your-first-sentences', 'review-and-writing-check', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('everyday-listening', 'greetings-and-names', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('everyday-listening', 'countries-and-nationalities', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('everyday-listening', 'numbers-ages-and-phone-numbers', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('everyday-listening', 'family-and-friends', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('everyday-listening', 'telling-the-time', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('everyday-listening', 'a-normal-day', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('everyday-listening', 'at-the-cafe', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('everyday-listening', 'food-and-prices', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('everyday-listening', 'in-the-shop', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('everyday-listening', 'directions-in-town', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('everyday-listening', 'travel-and-transport', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('everyday-listening', 'short-announcements', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('first-conversations', 'hello-and-introductions', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('first-conversations', 'asking-where-someone-is-from', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('first-conversations', 'talking-about-jobs', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('first-conversations', 'family-and-friends', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('first-conversations', 'numbers-and-ages', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('first-conversations', 'spelling-names-and-places', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('first-conversations', 'talking-about-routines', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('first-conversations', 'likes-and-dislikes', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('first-conversations', 'making-simple-plans', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('first-conversations', 'shopping-basics', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('first-conversations', 'ordering-food-and-drink', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('first-conversations', 'asking-for-help', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('sounds-of-english', 'short-vowel-sounds', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('sounds-of-english', 'long-vowel-sounds', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('sounds-of-english', 'common-consonant-sounds', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('sounds-of-english', 'stress-in-names-and-places', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('sounds-of-english', 'stressed-and-weak-syllables', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('sounds-of-english', 'simple-stress-patterns', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('sounds-of-english', 'stressed-words-in-sentences', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('sounds-of-english', 'intonation-in-questions', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('sounds-of-english', 'sounds-to-watch', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb),
  ('sounds-of-english', 'a-final-speaking-check', '[{"id":"q1","optionCount":3,"correctIndex":0},{"id":"q2","optionCount":3,"correctIndex":0},{"id":"q3","optionCount":3,"correctIndex":0},{"id":"q4","optionCount":3,"correctIndex":0}]'::jsonb);

-- Completion ------------------------------------------------------------------

create or replace function public.mark_lesson_complete(
  target_course_slug text,
  target_lesson_slug text
)
returns table (
  is_completed boolean,
  completed_at timestamptz,
  best_score smallint,
  best_score_total smallint,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  student_id uuid := auth.uid();
  v_is_published boolean := false;
begin
  if student_id is null then
    raise exception 'You must be signed in to save progress.'
      using errcode = '42501';
  end if;

  if target_course_slug is null
     or target_lesson_slug is null
     or char_length(target_course_slug) not between 1 and 120
     or char_length(target_lesson_slug) not between 1 and 120
     or target_course_slug !~ '^[a-z0-9]+(-[a-z0-9]+)*$'
     or target_lesson_slug !~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  then
    raise exception 'Invalid course or lesson identifier.'
      using errcode = '22023';
  end if;

  select exists (
    select 1
    from public.published_lessons as lessons
    join public.published_courses as courses
      on courses.course_id = lessons.course_id
    where courses.slug = target_course_slug
      and lessons.slug = target_lesson_slug
  ) into v_is_published;

  if v_is_published then
    if exists (
      select 1
      from public.published_lessons as lessons
      join public.published_courses as courses
        on courses.course_id = lessons.course_id
      where courses.slug = target_course_slug
        and lessons.slug = target_lesson_slug
        and (courses.premium = true or courses.level in ('C1', 'C2'))
    ) and not public.current_user_has_active_membership()
    then
      raise exception 'An active Premium membership is required for this lesson.'
        using errcode = '42501';
    end if;
  elsif exists (
    select 1
    from public.certificate_course_lessons as lessons
    where lessons.course_slug = target_course_slug
      and lessons.lesson_slug = target_lesson_slug
  ) then
    if exists (
      select 1
      from public.certificate_course_policies as policies
      where policies.course_slug = target_course_slug
        and policies.premium
    ) and not public.current_user_has_active_membership()
    then
      raise exception 'An active Premium membership is required for this lesson.'
        using errcode = '42501';
    end if;
  else
    raise exception 'This lesson is not available.'
      using errcode = 'P0002';
  end if;

  insert into public.lesson_progress as progress (
    user_id,
    course_slug,
    lesson_slug,
    is_completed,
    completed_at
  )
  values (
    student_id,
    target_course_slug,
    target_lesson_slug,
    true,
    now()
  )
  on conflict on constraint lesson_progress_pkey do update
  set
    is_completed = true,
    completed_at = coalesce(progress.completed_at, now())
  where progress.is_completed = false;

  return query
  select
    progress.is_completed,
    progress.completed_at,
    progress.best_score,
    progress.best_score_total,
    progress.updated_at
  from public.lesson_progress as progress
  where progress.user_id = student_id
    and progress.course_slug = target_course_slug
    and progress.lesson_slug = target_lesson_slug;
end;
$$;

comment on function public.mark_lesson_complete(text, text) is
  'Marks an existing, accessible lesson complete for the signed-in student. Direct table writes are revoked.';

revoke all on function public.mark_lesson_complete(text, text)
  from public, anon, authenticated;
grant execute on function public.mark_lesson_complete(text, text)
  to authenticated;

-- Quiz recording ---------------------------------------------------------------

create function public.record_static_quiz_attempt(
  p_course_slug text,
  p_lesson_slug text,
  p_answers jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_student uuid := auth.uid();
  v_questions jsonb;
  v_question jsonb;
  v_question_id text;
  v_selected integer;
  v_correct integer;
  v_option_count integer;
  v_total integer;
  v_score integer := 0;
begin
  if v_student is null then
    raise exception 'You must be signed in to save a quiz attempt.'
      using errcode = '42501';
  end if;

  if p_course_slug is null
     or p_lesson_slug is null
     or char_length(p_course_slug) not between 1 and 120
     or char_length(p_lesson_slug) not between 1 and 120
     or p_course_slug !~ '^[a-z0-9]+(-[a-z0-9]+)*$'
     or p_lesson_slug !~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  then
    raise exception 'Invalid lesson identifier.' using errcode = '22023';
  end if;

  if p_answers is null or jsonb_typeof(p_answers) is distinct from 'object' then
    raise exception 'Invalid quiz answers.' using errcode = '22023';
  end if;

  if exists (
    select 1
    from public.certificate_course_policies as policies
    where policies.course_slug = p_course_slug
      and policies.premium
  ) and not public.has_active_membership(v_student) then
    raise exception 'An active Premium membership is required for this quiz.'
      using errcode = '42501';
  end if;

  if exists (
    select 1
    from public.published_lessons as lessons
    join public.published_courses as courses
      on courses.course_id = lessons.course_id
    where courses.slug = p_course_slug
      and lessons.slug = p_lesson_slug
  ) then
    raise exception 'This quiz is served from published content.'
      using errcode = 'P0002';
  end if;

  select keys.questions into v_questions
  from public.static_quiz_answer_keys as keys
  where keys.course_slug = p_course_slug
    and keys.lesson_slug = p_lesson_slug;

  if v_questions is null then
    raise exception 'This lesson does not have a quiz.' using errcode = 'P0002';
  end if;

  v_total := jsonb_array_length(v_questions);

  if (
    select count(*)::integer
    from jsonb_object_keys(p_answers) as keys(key)
  ) <> v_total then
    raise exception 'Submit an answer for every question.' using errcode = '22023';
  end if;

  for v_question in select value from jsonb_array_elements(v_questions)
  loop
    v_question_id := v_question ->> 'id';

    if not (p_answers ? v_question_id) then
      raise exception 'Submit an answer for every question.' using errcode = '22023';
    end if;

    if jsonb_typeof(p_answers -> v_question_id) is distinct from 'number'
       or (p_answers ->> v_question_id) !~ '^(0|[1-9][0-9]{0,2})$'
    then
      raise exception 'Invalid quiz answers.' using errcode = '22023';
    end if;

    v_selected := (p_answers ->> v_question_id)::integer;
    v_option_count := (v_question ->> 'optionCount')::integer;

    if v_selected < 0 or v_selected >= v_option_count then
      raise exception 'Invalid quiz answers.' using errcode = '22023';
    end if;

    v_correct := (v_question ->> 'correctIndex')::integer;

    if v_selected = v_correct then
      v_score := v_score + 1;
    end if;
  end loop;

  insert into public.quiz_attempts (
    user_id,
    course_slug,
    lesson_slug,
    score,
    total_questions
  )
  values (
    v_student,
    p_course_slug,
    p_lesson_slug,
    v_score,
    v_total
  );

  return jsonb_build_object('score', v_score, 'total', v_total);
end;
$$;

comment on function public.record_static_quiz_attempt(text, text, jsonb) is
  'Grades an authored quiz against the private key and records the resulting attempt for the signed-in student.';

revoke all on function public.record_static_quiz_attempt(text, text, jsonb)
  from public, anon, authenticated;
grant execute on function public.record_static_quiz_attempt(text, text, jsonb)
  to authenticated;

create function public.record_published_quiz_attempt(
  p_course_slug text,
  p_lesson_slug text,
  p_answers jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_student uuid := auth.uid();
  v_result jsonb;
  v_score integer;
  v_total integer;
begin
  if v_student is null then
    raise exception 'You must be signed in to save a quiz attempt.'
      using errcode = '42501';
  end if;

  v_result := public.grade_published_lesson_quiz(
    p_course_slug,
    p_lesson_slug,
    p_answers
  );

  v_score := (v_result ->> 'score')::integer;
  v_total := (v_result ->> 'total')::integer;

  if v_score is null or v_total is null or v_total <= 0 or v_score > v_total then
    raise exception 'The quiz result could not be verified.' using errcode = 'P0002';
  end if;

  insert into public.quiz_attempts (
    user_id,
    course_slug,
    lesson_slug,
    score,
    total_questions
  )
  values (
    v_student,
    p_course_slug,
    p_lesson_slug,
    v_score,
    v_total
  );

  return v_result;
end;
$$;

comment on function public.record_published_quiz_attempt(text, text, jsonb) is
  'Grades a published quiz with the existing private key and records the attempt for the signed-in student.';

revoke all on function public.record_published_quiz_attempt(text, text, jsonb)
  from public, anon, authenticated;
grant execute on function public.record_published_quiz_attempt(text, text, jsonb)
  to authenticated;
