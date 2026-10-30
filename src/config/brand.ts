export const brand = {
  name: "SpeakUp English",
  shortName: "SpeakUp",
  wordmarkTail: "English",
  tagline: "Learn English. Build confidence.",
  description:
    "Structured, CEFR-aligned English courses from A1 to C2. Master grammar, listening, speaking, pronunciation, vocabulary, reading and writing at your level.",
} as const;

export const primaryNav = [
  { label: "Courses", href: "/courses" },
  { label: "Level test", href: "/level-test" },
  { label: "Blog", href: "/blog" },
  { label: "Premium", href: "/premium" },
  { label: "Levels", href: "/#levels" },
] as const;

export const footerNav = {
  explore: [
    { label: "All courses", href: "/courses" },
    { label: "Free English level test", href: "/level-test" },
    { label: "Blog", href: "/blog" },
    { label: "Premium membership", href: "/premium" },
    { label: "CEFR levels", href: "/#levels" },
    { label: "Our method", href: "/#method" },
    { label: "Free & premium", href: "/#pricing" },
  ],
  skills: [
    { label: "Grammar", href: "/courses?skill=grammar" },
    { label: "Listening", href: "/courses?skill=listening" },
    { label: "Speaking", href: "/courses?skill=speaking" },
    { label: "Pronunciation", href: "/courses?skill=pronunciation" },
    { label: "Vocabulary", href: "/courses?skill=vocabulary" },
    { label: "Reading", href: "/courses?skill=reading" },
    { label: "Writing", href: "/courses?skill=writing" },
  ],
} as const;
