import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

// Brand orange — matches the rest of the page.
const ORANGE = "#E05A30";

const BG_IMAGE =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/780106e5cb65eafab067da2af48137ad.jpg?v=1781637559";

const APP_SCREENSHOT =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/image_56.png?v=1781637562";

const BENEFITS = [
  "M3 supplement, delivered every cycle (60 caps)",
  "The M3 app — your cellular readiness score",
  "Sync Whoop, Garmin, Oura & Apple Health",
  "Daily protocol — dose timing & recovery nudges",
  "Retest reminders & trend tracking",
  "Athlete community access",
];

export function UltraEnduranceMembership() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* LEFT — phone on the photo */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-3xl bg-neutral-900 lg:mx-0 lg:max-w-none">
            <Image
              src={BG_IMAGE}
              alt=""
              fill
              sizes="(max-width: 1024px) 420px, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center py-6">
              <div
                className="relative h-full"
                style={{ aspectRatio: "1106 / 2308" }}
              >
                <Image
                  src={APP_SCREENSHOT}
                  alt="The MuscalarPro M3 app home screen showing biological age, biomarkers and key findings"
                  fill
                  sizes="(max-width: 1024px) 220px, 300px"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — membership offer */}
          <div>
            <h2 className="text-[32px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] md:text-[40px]">
              Your <span style={{ color: ORANGE }}>M3 membership</span> starts
              here.
            </h2>
            <p className="mt-3 text-[14px] text-[#1a1a1a]/60 md:text-[15px]">
              The supplement, the app, and the protocol — one membership.
            </p>

            {/* Benefits */}
            <ul className="mt-8 border-t border-black/10">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 border-b border-black/10 py-3.5"
                >
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0"
                    style={{ color: ORANGE }}
                  />
                  <span className="text-[14px] text-[#1a1a1a] md:text-[15px]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-[34px] font-semibold tracking-tight text-[#1a1a1a] md:text-[40px]">
                ₹5,999
              </span>
              <span className="text-[14px] text-[#1a1a1a]/55">/ month*</span>
            </div>
            <p className="mt-1 text-[13px] text-[#1a1a1a]/45">
              Add your price · cancel anytime
            </p>

            {/* CTA */}
            <Link
              href="/product/decode-peak-performance-m3"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Become a Member <span aria-hidden="true">→</span>
            </Link>

            <p className="mt-4 text-[13px] text-[#1a1a1a]/50">
              Banned-substance free · Cancel anytime · Free first cycle
            </p>
          </div>
        </div>
      </div>

      {/* Closing divider */}
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <hr className="border-black/10" />
      </div>
    </section>
  );
}
