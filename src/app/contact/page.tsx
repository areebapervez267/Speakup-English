import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, Timer } from "lucide-react";

import { ProsePage, ProseSection } from "@/components/site/prose-page";
import { brand } from "@/config/brand";
import { manualPayments } from "@/config/manual-payments";
import { pageCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact SpeakUp English — support, payments and corrections",
  description:
    "Reach the SpeakUp English team by email for premium payment confirmations, account problems, certificate checks or lesson corrections. Replies within two working days.",
  ...pageCanonical("/contact"),
};

const channels = [
  {
    icon: Mail,
    title: "Email — the fastest way",
    body: (
      <>
        Write to{" "}
        <Link href={`mailto:${manualPayments.supportEmail}`}>
          {manualPayments.supportEmail}
        </Link>
        . One person reads every message, so you get a real answer rather than a
        ticket number.
      </>
    ),
  },
  {
    icon: Timer,
    title: "Response time",
    body: (
      <>
        Within two working days. Payment confirmations are usually opened the same
        day the receipt arrives.
      </>
    ),
  },
  {
    icon: MessageSquare,
    title: "Content corrections",
    body: (
      <>
        Spotted a wrong answer or an awkward sentence in a lesson? Quote the
        course, the lesson title and the line. Corrections go out with the next
        update.
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <ProsePage
      path="/contact"
      navName="Contact"
      eyebrow="Contact"
      title={`Talk to a human at ${brand.shortName}`}
      intro={
        <p>
          Questions about a lesson, your account, a certificate, or a premium
          payment that has not opened yet — this is where they land.
        </p>
      }
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {channels.map((channel) => (
          <div
            key={channel.title}
            className="rounded-2xl border border-brand-line bg-white p-5"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-brand-teal-soft text-brand-teal-deep">
              <channel.icon className="size-4" aria-hidden="true" />
            </span>
            <h2 className="mt-3.5 text-sm font-bold text-brand-navy">
              {channel.title}
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-brand-body">
              {channel.body}
            </p>
          </div>
        ))}
      </div>

      <ProseSection id="payment" title="Premium payment enquiries">
        <p>
          Premium access is opened manually after a bank transfer reaches{" "}
          <strong>{manualPayments.bankName}</strong> (account title{" "}
          <strong>{manualPayments.accountTitle}</strong>). When you email the
          receipt, please include:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>The email address your SpeakUp account is signed up with.</li>
          <li>
            The transaction date and the last 4 digits of the reference or
            TRN — not a full statement.
          </li>
          <li>Which level you are enrolling for.</li>
        </ul>
        <p>
          Never send a password, PIN, OTP or card image. Full IBAN and price are
          on the <Link href="/premium">premium page</Link>.
        </p>
      </ProseSection>

      <ProseSection id="account" title="Cannot sign in">
        <p>
          Use the <Link href="/forgot-password">reset-password link</Link> first —
          the email arrives within a minute. If it never comes, tell us the exact
          address you registered and we will check the account by hand.
        </p>
      </ProseSection>

      <ProseSection id="privacy" title="Data requests">
        <p>
          Requests to see, correct or delete your personal data are handled the
          same way — email us from the address on your account. See the{" "}
          <Link href="/privacy-policy">privacy policy</Link>.
        </p>
      </ProseSection>
    </ProsePage>
  );
}
