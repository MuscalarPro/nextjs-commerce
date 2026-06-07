import Image from "next/image";

const APP_SCREENSHOT =
  "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/ask_before_you_start_app_screen_mockup.png?v=1780867248";

export function AskBeforeStart() {
  return (
    <section className="bg-gradient-to-b from-[#F3F4F6] via-[#E5E7EA] to-[#D2D4D8]">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center md:px-8 md:py-28">
        {/* Eyebrow */}
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a1a1a]/55">
          M3 Concierge
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-balance text-[2.25rem] font-semibold leading-tight text-[#1a1a1a] md:text-[3rem] lg:text-[3.5rem]">
          Ask before you start
        </h2>

        {/* Phone mockup — bezel + screen + screenshot */}
        <PhoneMockup />

        {/* Disclaimer */}
        <p className="mx-auto mt-12 max-w-3xl text-balance text-xs leading-relaxed text-[#1a1a1a]/60 md:mt-14 md:text-[13px]">
          Educational information, not medical advice. M3 is a supplement, not
          a treatment for any medication or its side effects. Consult your
          clinician.
        </p>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="mx-auto mt-12 w-full max-w-[260px] md:mt-16 md:max-w-[300px]">
      {/* Outer phone body — dark bezel with depth shadow */}
      <div className="relative rounded-[44px] bg-[#0f0f10] p-[8px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.05)_inset] md:p-[10px]">
        {/* Inner screen — aspect matches the source PNG (1179×2556 = iPhone
            15 Pro proportions) so the screenshot fills edge-to-edge without
            cropping the status bar at top or the input row at bottom. */}
        <div className="relative aspect-[1179/2556] w-full overflow-hidden rounded-[36px] bg-white">
          <Image
            src={APP_SCREENSHOT}
            alt="M3 Concierge — example chat with the in-app coach"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 260px, 300px"
            priority={false}
          />
          {/* Note: the source PNG already includes the dynamic island,
              status bar and home indicator, so no overlay is needed. */}
        </div>
      </div>
    </div>
  );
}
