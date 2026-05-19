import { ContactForm } from "components/contact/ContactForm";
import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MuscalarPro",
  description:
    "Get in touch with MuscalarPro. Questions about M3, orders, subscriptions, or anything else — our team responds within one business day.",
  openGraph: {
    title: "Contact Us | MuscalarPro",
    description:
      "Reach the MuscalarPro team. Email, support hours, and a contact form.",
    type: "website",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-4 md:px-10 py-16 md:py-24">
        <div className="mb-12 md:mb-16">
          <h1 className="text-[40px] md:text-[60px] font-medium leading-tight text-black mt-10">
            Contact us
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-neutral-600">
            Questions about the M3 protocol, an existing order, or anything
            else — drop us a line. We aim to reply within one business day.
          </p>
          <div className="mt-8 w-full border-b border-dotted border-gray-300" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Left: form */}
          <div>
            <h2 className="mb-6 text-2xl font-medium text-black">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          {/* Right: contact info cards */}
          <aside className="flex flex-col gap-4">
            <InfoCard
              icon={
                <EnvelopeIcon className="h-5 w-5 text-black" aria-hidden="true" />
              }
              title="Email"
              body={
                <a
                  href="mailto:support@muscalarpro.com"
                  className="underline underline-offset-2 hover:text-neutral-600"
                >
                  support@muscalarpro.com
                </a>
              }
            />
            <InfoCard
              icon={<ClockIcon className="h-5 w-5 text-black" aria-hidden="true" />}
              title="Support hours"
              body={
                <span>
                  Monday — Saturday
                  <br />
                  10:00 AM — 7:00 PM IST
                  <br />
                  (excluding public holidays)
                </span>
              }
            />
            <InfoCard
              icon={
                <ChatBubbleLeftRightIcon
                  className="h-5 w-5 text-black"
                  aria-hidden="true"
                />
              }
              title="Other ways to reach us"
              body={
                <span>
                  Browse the{" "}
                  <a
                    href="/help"
                    className="underline underline-offset-2 hover:text-neutral-600"
                  >
                    Help Center
                  </a>{" "}
                  or read our{" "}
                  <a
                    href="/faqs"
                    className="underline underline-offset-2 hover:text-neutral-600"
                  >
                    FAQs
                  </a>{" "}
                  — most common questions are answered there.
                </span>
              }
            />

            <div className="mt-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-xs text-neutral-500">
              <p className="mb-2 font-semibold uppercase tracking-wider text-neutral-700">
                Operated by
              </p>
              <p className="leading-relaxed">
                CELAGENEX RESEARCH (INDIA) PRIVATE LIMITED
                <br />
                Owner and operator of muscalarpro.com
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100">
        {icon}
      </div>
      <h3 className="mb-1.5 text-sm font-semibold text-black">{title}</h3>
      <div className="text-sm leading-relaxed text-neutral-600">{body}</div>
    </div>
  );
}
