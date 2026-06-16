import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Brand orange — matches the rest of the page.
const ORANGE = "#E05A30";

const BG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/hf_20260616_111742_43c99d1f-cc19-43d2-86ee-c10d21a9b338.png?v=1781637563";

const BENEFITS = [
  {
    title: "Mitophagy, on demand",
    body: "The renewal you'd otherwise chase through fasting or training stress.",
  },
  {
    title: "Autophagy support",
    body: "Cellular clean-up to blunt the damage of heavy training loads.",
  },
  {
    title: "Antioxidant defense",
    body: "Manage the oxidative stress that builds across long efforts.",
  },
  {
    title: "Stimulant-free & clean",
    body: "No caffeine, no crash, banned-substance free.",
  },
];

export function UltraEnduranceWhy() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* Full-bleed background photo + legibility overlay */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Image
          src={BG_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Darker on the left where the copy sits, lighter on the right. */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* LEFT — copy */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55 md:text-[12px]">
              Why M3
            </p>
            <h2 className="mt-5 text-balance text-[32px] font-semibold leading-[1.1] tracking-tight md:text-[44px]">
              The work of a sports-science lab — in two capsules.
            </h2>

            <p
              className="mt-10 text-[20px] font-semibold md:mt-14 md:text-[22px]"
              style={{ color: ORANGE }}
            >
              Now: 2 capsules a day.
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75 md:text-[16px]">
              Mitophagy — the cellular renewal that drives the gains — is
              otherwise only reliably triggered by sustained fasting or hard
              exercise, neither practical daily. M3 delivers the protocol around
              your training, not on top of it.
            </p>
          </div>

          {/* RIGHT — benefit list */}
          <ul className="border-t border-white/15">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit.title}
                className="flex gap-4 border-b border-white/15 py-5 md:py-6"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: ORANGE }}
                >
                  <CheckIcon className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-white md:text-[18px]">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-white/65 md:text-[14px]">
                    {benefit.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
