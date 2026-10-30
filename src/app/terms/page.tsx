import type { Metadata } from "next";
import Link from "next/link";

import { ProsePage, ProseSection } from "@/components/site/prose-page";
import { brand } from "@/config/brand";
import { manualPayments } from "@/config/manual-payments";
import { pageCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Use — how to use SpeakUp English",
  description:
    "The rules for free and premium accounts on SpeakUp English: your account, what you may and may not do with the lessons, refunds and contact.",
  ...pageCanonical("/terms"),
};

export default function TermsPage() {
  return (
    <ProsePage
      path="/terms"
      navName="Terms of use"
      eyebrow="Terms of use"
      title="The agreement in plain words"
      updated="30 October 2026"
      intro={
        <p>
          Using {brand.name} means you accept these terms. They are written to be
          readable rather than legalistic; where something matters, it is stated
          plainly.
        </p>
      }
    >
      <ProseSection id="your-account" title="Your account">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>One person per account. Do not share logins.</li>
          <li>
            You are responsible for anything done under your sign-in, so keep the
            password private.
          </li>
          <li>
            You may close your account at any time by emailing{" "}
            <Link href={`mailto:${manualPayments.supportEmail}`}>
              {manualPayments.supportEmail}
            </Link>
            .
          </li>
        </ul>
      </ProseSection>

      <ProseSection id="free-and-premium" title="Free and premium access">
        <p>
          Levels A1 to B2 are free and open to anyone with an account. Premium
          unlocks the higher-level courses, certificates and the additional
          practice, and it is billed monthly. Premium access is granted manually
          once a bank transfer is confirmed, so it may open a few hours after you
          pay rather than instantly.
        </p>
      </ProseSection>

      <ProseSection id="refunds" title="Refunds">
        <p>
          There is no automatic subscription to cancel — each month you choose
          whether to renew. If we cannot grant the access you paid for, or a
          transfer goes wrong, we refund it in full to the account it came from.
          Ask within 7 days of payment. Because the premium library is unlocked
          immediately, refunds after that window are handled case by case.
        </p>
      </ProseSection>

      <ProseSection id="acceptable-use" title="What you may not do">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            Copy, resell, or republish the lessons, question banks or
            certificates as your own course material.
          </li>
          <li>
            Use scrapers or automation to download the library in bulk.
          </li>
          <li>
            Post abusive content in any discussion field, or misuse the contact
            form.
          </li>
          <li>
            Try to break into other accounts, or access premium content without a
            paid membership.
          </li>
        </ul>
        <p>
          Personal study notes, screenshots for your own revision and quoting a
          line in class are all fine.
        </p>
      </ProseSection>

      <ProseSection id="learning-outcome" title="What we promise, and what we do not">
        <p>
          We promise accurate, level-appropriate English content and a site that
          keeps your progress. We cannot promise a specific exam score, job or
          interview result — language progress depends on your practice. Lessons
          may be corrected or improved without notice, and the ▶ Play audio is a
          browser voice, not a human model, and does not assess your
          pronunciation.
        </p>
      </ProseSection>

      <ProseSection id="law" title="Governing law">
        <p>
          These terms are governed by the laws of Pakistan. If a dispute cannot be
          settled by email, it is heard in the competent courts of Pakistan.
        </p>
      </ProseSection>

      <ProseSection id="contact" title="Questions">
        <p>
          Write to{" "}
          <Link href={`mailto:${manualPayments.supportEmail}`}>
            {manualPayments.supportEmail}
          </Link>{" "}
          — see the <Link href="/contact">contact page</Link> for what to include.
          Your data handling is described in the{" "}
          <Link href="/privacy-policy">privacy policy</Link>.
        </p>
      </ProseSection>
    </ProsePage>
  );
}
