import {
  GiftIcon,
  HeartIcon,
  SparklesIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import type { Metadata } from "next";

import { GiftInterestForm } from "components/gift/GiftInterestForm";

export const metadata: Metadata = {
  title: "Gift Health | MuscalarPro",
  description:
    "Gift the MuscalarPro M3 protocol to someone you love. Register your interest — we'll let you know the moment gifting goes live.",
  openGraph: {
    title: "Gift Health | MuscalarPro",
    description:
      "Coming soon — gift the M3 cellular renewal protocol to a friend or family member.",
    type: "website",
    url: "/gift",
  },
};

const reasons = [
  {
    icon: <HeartIcon className="h-6 w-6" aria-hidden="true" />,
    title: "For someone you care about",
    body: "A thoughtful, science-backed gift for parents, partners, or friends focused on aging well and staying strong.",
  },
  {
    icon: <SparklesIcon className="h-6 w-6" aria-hidden="true" />,
    title: "Beautifully packaged",
    body: "Gifted orders arrive in dedicated gift packaging with a personal note from you. No prices on the receipt.",
  },
  {
    icon: <TruckIcon className="h-6 w-6" aria-hidden="true" />,
    title: "Delivered direct",
    body: "Ship the gift straight to them. Free shipping across India, tracked end-to-end.",
  },
];

export default function GiftPage() {
  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <section className="border-b border-neutral-100 bg-neutral-50">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 md:px-10 py-16 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-neutral-700 ring-1 ring-neutral-200">
              <GiftIcon className="h-3.5 w-3.5" aria-hidden="true" />
              Coming Soon
            </div>
            <h1 className="mt-2 text-[40px] md:text-[60px] font-medium leading-tight text-black">
              Gift the
              <br />
              gift of strength.
            </h1>
            <p className="max-w-xl text-base md:text-lg text-neutral-600">
              MuscalarPro M3 is built for the long game — cellular energy,
              muscle strength, and endurance backed by clinical evidence.
              Soon, you'll be able to gift a 30-day, 60-day, or 120-day
              protocol to anyone you love.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-700">
                Get notified at launch
              </p>
              <GiftInterestForm />
            </div>
            <p className="max-w-md text-xs text-neutral-500">
              We'll send one email when gifting goes live. No spam, no marketing
              blasts — promise.
            </p>
          </div>

          {/* Visual placeholder card */}
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-[#a638b5] via-[#693979] to-[#2a1040] p-10 text-white shadow-2xl">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                    The gift of
                  </p>
                  <h2 className="text-4xl font-medium leading-tight">
                    Cellular
                    <br />
                    Renewal
                  </h2>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-white/80">From</p>
                  <p className="text-lg font-medium">A thoughtful you</p>
                  <p className="pt-4 text-sm text-white/60">to</p>
                  <p className="text-lg font-medium">Someone you love</p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-[10px] uppercase tracking-widest text-white/60">
                    MuscalarPro M3
                  </p>
                  <p className="text-sm text-white/80">Decode Peak Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 md:px-10 py-16 md:py-24">
          <h2 className="mb-8 text-2xl md:text-3xl font-medium text-black">
            What gifting will include
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-black">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold text-black">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In the meantime */}
      <section className="bg-neutral-50 border-t border-neutral-100">
        <div className="mx-auto max-w-[1440px] px-4 md:px-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-2xl md:text-3xl font-medium text-black">
              In the meantime
            </h2>
            <p className="mb-6 text-base md:text-lg leading-relaxed text-neutral-600">
              The full M3 protocol is available now as a one-time purchase.
              If you'd like to give it informally — order it to your own
              address, then hand it over wrapped — that works too.
            </p>
            <Link
              href="/product/decode-peak-performance-m3"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Shop M3 now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
