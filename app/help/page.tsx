import {
  ArrowRightIcon,
  CreditCardIcon,
  CubeIcon,
  EnvelopeIcon,
  LifebuoyIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | MuscalarPro",
  description:
    "Find answers to common questions about MuscalarPro orders, shipping, subscriptions, returns, and the M3 protocol. Browse topics or get in touch with our team.",
  openGraph: {
    title: "Help Center | MuscalarPro",
    description:
      "Browse help topics by category, or contact MuscalarPro support directly.",
    type: "website",
    url: "/help",
  },
};

type HelpTopic = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const topics: HelpTopic[] = [
  {
    title: "Orders & Tracking",
    description:
      "Order confirmation, dispatch timelines, tracking your shipment, and what to do if your order is delayed.",
    href: "/policies/shipping-policy",
    icon: <TruckIcon className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Returns & Refunds",
    description:
      "When you're eligible for a replacement or refund, how to raise a request, and how long the money takes to reach you.",
    href: "/policies/refund-policy",
    icon: <CreditCardIcon className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "The M3 Product",
    description:
      "What's inside the bottle, dosage, how to take it, who it's for, and what to expect over the first 12 weeks.",
    href: "/science",
    icon: <CubeIcon className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Account & Subscriptions",
    description:
      "Manage your account, view past orders, update your shipping address, and (when available) manage your subscription.",
    href: "https://muscalarpro.myshopify.com/account/",
    icon: <UserCircleIcon className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Safety & Medical Guidance",
    description:
      "Important safety information, who should consult a doctor before starting, and our medical consent terms.",
    href: "/policies/informed-medical-consent",
    icon: <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Frequently Asked Questions",
    description:
      "Browse the full FAQ — answers to the most common questions about the protocol, the science, and the company.",
    href: "/faqs",
    icon: <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />,
  },
];

const quickAnswers: Array<{ q: string; a: React.ReactNode }> = [
  {
    q: "How long does delivery take?",
    a: (
      <>
        Orders are dispatched from Mumbai within 24 hours of payment
        confirmation. Delivery typically takes 2–5 business days within
        India. Full details are in our{" "}
        <Link
          href="/policies/shipping-policy"
          className="underline underline-offset-2 hover:text-neutral-600"
        >
          Shipping Policy
        </Link>
        .
      </>
    ),
  },
  {
    q: "Can I return the product after opening it?",
    a: (
      <>
        For consumer safety and hygiene reasons, opened bottles cannot be
        returned. We do replace or refund orders that arrive damaged,
        incorrect, or short-shipped — see our{" "}
        <Link
          href="/policies/refund-policy"
          className="underline underline-offset-2 hover:text-neutral-600"
        >
          Return &amp; Refund Policy
        </Link>{" "}
        for the full eligibility criteria.
      </>
    ),
  },
  {
    q: "How do I know if M3 is right for me?",
    a: (
      <>
        Browse the{" "}
        <Link
          href="/science"
          className="underline underline-offset-2 hover:text-neutral-600"
        >
          science page
        </Link>{" "}
        for the clinical evidence behind each ingredient. If you have a
        medical condition or take prescription medication, please consult a
        qualified healthcare professional before starting.
      </>
    ),
  },
  {
    q: "When will subscription delivery be available?",
    a: (
      <>
        Subscriptions are coming soon. In the meantime, one-time purchases
        ship the same day. To be notified when subscriptions go live, sign
        up to our newsletter at the bottom of any page.
      </>
    ),
  },
  {
    q: "How do I cancel my order before it ships?",
    a: (
      <>
        Email{" "}
        <a
          href="mailto:support@muscalarpro.com"
          className="underline underline-offset-2 hover:text-neutral-600"
        >
          support@muscalarpro.com
        </a>{" "}
        with your order number as soon as possible. If we receive the
        request before the order enters our dispatch queue, we'll cancel and
        refund in full.
      </>
    ),
  },
  {
    q: "I'm having a technical issue with the website.",
    a: (
      <>
        Sorry about that. Please{" "}
        <Link
          href="/contact"
          className="underline underline-offset-2 hover:text-neutral-600"
        >
          contact us
        </Link>{" "}
        with a brief description of what happened, your device, and a
        screenshot if possible. We'll get to you within one business day.
      </>
    ),
  },
];

export default function HelpPage() {
  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <section className="border-b border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-[1440px] px-4 md:px-10 py-16 md:py-24">
          <div className="mt-10 flex flex-col gap-4">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-neutral-700 ring-1 ring-neutral-200">
              <LifebuoyIcon className="h-3.5 w-3.5" aria-hidden="true" />
              Help Center
            </div>
            <h1 className="text-[40px] md:text-[60px] font-medium leading-tight text-black">
              How can we help?
            </h1>
            <p className="max-w-2xl text-base md:text-lg text-neutral-600">
              Browse topics below, find quick answers to common questions, or
              get in touch with our team — we usually respond within one
              business day.
            </p>
          </div>
        </div>
      </section>

      {/* Topic grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 md:px-10 py-16 md:py-24">
          <h2 className="mb-8 text-2xl md:text-3xl font-medium text-black">
            Browse by topic
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {topics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-black hover:shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-black transition-colors group-hover:bg-black group-hover:text-white">
                  {topic.icon}
                </div>
                <h3 className="text-lg font-semibold text-black">
                  {topic.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-neutral-600">
                  {topic.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-black">
                  Learn more
                  <ArrowRightIcon
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick answers */}
      <section className="bg-neutral-50 border-t border-neutral-100">
        <div className="mx-auto max-w-[1440px] px-4 md:px-10 py-16 md:py-24">
          <h2 className="mb-8 text-2xl md:text-3xl font-medium text-black">
            Quick answers
          </h2>
          <div className="max-w-3xl">
            <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
              {quickAnswers.map((item) => (
                <div key={item.q} className="py-6">
                  <dt className="mb-2 text-base md:text-lg font-semibold text-black">
                    {item.q}
                  </dt>
                  <dd className="text-sm md:text-base leading-relaxed text-neutral-600">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Still need help */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 md:px-10 py-16 md:py-24">
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-black p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-xl">
              <h2 className="mb-2 text-2xl md:text-3xl font-medium">
                Still need help?
              </h2>
              <p className="text-sm md:text-base text-white/70">
                Email our team or send a message through the contact form. We
                read every message and reply within one business day, Monday to
                Saturday.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
                Contact support
              </Link>
              <a
                href="mailto:support@muscalarpro.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                support@muscalarpro.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
