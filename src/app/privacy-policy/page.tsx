import type { Metadata } from "next";
import Link from "next/link";

import { ProsePage, ProseSection } from "@/components/site/prose-page";
import { brand } from "@/config/brand";
import { manualPayments } from "@/config/manual-payments";
import { pageCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy — what SpeakUp English stores and why",
  description:
    "How SpeakUp English collects, stores and protects your email, lesson progress and membership details. No advertising trackers, no microphone access, no audio recordings.",
  ...pageCanonical("/privacy-policy"),
};

export default function PrivacyPolicyPage() {
  return (
    <ProsePage
      path="/privacy-policy"
      navName="Privacy policy"
      eyebrow="Privacy policy"
      title="What we store, and what we never touch"
      updated="30 October 2026"
      intro={
        <p>
          {brand.name} is a small, independent learning site. This policy says
          exactly which data we keep, who hosts it, and how to get it removed.
          There are no advertising trackers and no third-party analytics on this
          site.
        </p>
      }
    >
      <ProseSection id="we-collect" title="What we collect">
        <p>Only what a learning account needs to work:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Your email address</strong> and a hashed password — we never
            store the password itself.
          </li>
          <li>
            <strong>Your name or nickname</strong>, if you add one, so courses
            and certificates can be personalised.
          </li>
          <li>
            <strong>Your CEFR level and progress</strong>: which lessons you
            opened, quiz answers and completion dates.
          </li>
          <li>
            <strong>Membership records</strong>: whether an account has premium
            access and the date it ends.
          </li>
          <li>
            <strong>Payment evidence</strong>, only if you buy premium: the
            receipt you email us, kept so we can confirm a transfer.
          </li>
        </ul>
      </ProseSection>

      <ProseSection id="we-do-not" title="What we do not collect">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>No card numbers, bank logins or payment gateway credentials.</li>
          <li>
            No microphone recording and no audio of your voice. The ▶ Play
            buttons use your own browser&apos;s built-in speech engine — the
            text is read aloud on your device and nothing is uploaded.
          </li>
          <li>No advertising cookies, remarketing pixels or analytics SDKs.</li>
          <li>No sale or resale of personal data, ever.</li>
        </ul>
      </ProseSection>

      <ProseSection id="cookies" title="Cookies and session storage">
        <p>
          Signed-in learners get a small number of first-party session cookies.
          They keep you logged in and remember your own interface choices. If you
          browse courses or the level test without an account, no personal cookie
          is set.
        </p>
      </ProseSection>

      <ProseSection id="hosting" title="Who hosts the data">
        <p>
          The site is served from Vercel, and account and progress data is stored
          in a Supabase project. Both are named data processors with their own
          security and uptime commitments. Lesson content itself is static. We do
          not run servers in Pakistan, so your bank details are never entered on
          this website — premium payment happens by direct bank transfer and
          email, outside the site.
        </p>
      </ProseSection>

      <ProseSection id="retention" title="How long we keep it">
        <p>
          Account and progress data stays while your account is open. Payment
          receipts are kept for accounting. Delete your account and the linked
          progress and membership rows go with it; a receipt may remain in email
          until we purge it.
        </p>
      </ProseSection>

      <ProseSection id="rights" title="Your rights">
        <p>
          You can ask us to show you what we hold about your email, correct it,
          export it, or delete it. Email{" "}
          <Link href={`mailto:${manualPayments.supportEmail}`}>
            {manualPayments.supportEmail}
          </Link>{" "}
          from the address on your account and we will act within 14 days.
        </p>
      </ProseSection>

      <ProseSection id="children" title="Children">
        <p>
          The courses are written for adult and secondary-school learners. Someone
          under 13 should use the site only with a parent or teacher, and we do
          not knowingly collect data from children without that involvement.
        </p>
      </ProseSection>

      <ProseSection id="changes" title="Changes to this policy">
        <p>
          If this policy changes, the date at the top changes with it. Continued
          use of the site after an update means you accept the new version. Read
          the{" "}
          <Link href="/terms">terms of use</Link> alongside this policy.
        </p>
      </ProseSection>
    </ProsePage>
  );
}
