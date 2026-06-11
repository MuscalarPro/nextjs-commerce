import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

type Member = {
  name: string;
  image: string;
  imageAlt: string;
  quote: string;
  cta: string;
  ctaPrimary?: boolean;
  // CSS object-position for the photo inside the card. Per-member because
  // the source images have different aspect ratios — Ateeb's hero is
  // landscape with him standing in the right portion of the frame, so he
  // needs a horizontal bias to land in the centre of the visible crop.
  objectPosition: string;
};

const members: Member[] = [
  {
    name: "Ateeb",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/ateeb_-_what_members_say.png?v=1780865241",
    imageAlt: "Ateeb on a teal-blue backdrop",
    quote:
      "On a GLP-1, the scale isn't the right scoreboard. Protect muscle to sustain metabolism and results.",
    cta: "On M3 protocol",
    ctaPrimary: true,
    // Landscape 2160×1218 image; Ateeb stands centred just right of the
    // image's horizontal midpoint (~60% from left).
    objectPosition: "62% center",
  },
  {
    name: "Heer",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/ChatGPT_Image_Jun_8_2026_05_20_54_PM_8b0389f9-e476-4690-87ed-195503477d3c.png?v=1781204522",
    imageAlt: "Heer on a lavender backdrop",
    quote:
      "The month-2 fatigue lifted once I added M3 and dialed in protein.",
    cta: "See Heer's journey",
    objectPosition: "center top",
  },
  {
    name: "Gaurav",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/ChatGPT_Image_Jun_8_2026_05_40_15_PM_e46e1985-41be-48b3-a38a-793da224fd80.png?v=1781204523",
    imageAlt: "Gaurav in profile against a tan backdrop",
    quote:
      "At 57 I cared about staying strong, not just smaller. Grip held.",
    cta: "See Gaurav's journey",
    objectPosition: "center top",
  },
  {
    name: "Tanvi",
    image:
      "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/ChatGPT_Image_Jun_8_2026_05_37_40_PM_518a2eee-f999-4166-8b4f-b8d92140ff92.png?v=1781204523",
    imageAlt: "Tanvi with a lime halo on a slate backdrop",
    quote:
      "Lost 14 kg and my lifts didn't crater. First time that's happened.",
    cta: "See Tanvi's journey",
    objectPosition: "center top",
  },
];

export function MemberPhotoCards() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#E2E3E5] to-[#CFD0D2]">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        {/* Heading — left aligned, 2 lines on desktop */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-[2rem] font-semibold leading-[1.1] text-[#1a1a1a] md:text-[3rem]">
            Why members
            <br />
            stay on M3
          </h2>
        </div>

        {/* Card row.
            Mobile: horizontal-scroll snap carousel so 4 cards remain reachable
            without their CTAs being wired up yet.
            Desktop (lg+): true 4-col grid, no scroll. */}
        <div className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-4 md:grid md:snap-none md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-8">
            {members.map((m) => (
              <article
                key={m.name}
                className="flex w-[78vw] max-w-[320px] shrink-0 snap-start flex-col md:w-full md:max-w-none md:shrink md:snap-none"
              >
                {/* Card with photo + quote overlay.
                    aspect-[2/3] matches the mockup proportions so portrait
                    cutouts (Ateeb) and full-body studio shots (the others)
                    both have room to show head-to-mid-thigh without cropping
                    at the waist. */}
                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl bg-neutral-200 lg:w-auto">
                  <Image
                    src={m.image}
                    alt={m.imageAlt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: m.objectPosition }}
                    sizes="(max-width: 768px) 78vw, (max-width: 1024px) 50vw, 320px"
                  />
                  {/* Quote — frosted glass strip near the bottom of the card */}
                  <div className="pointer-events-none absolute inset-x-3 bottom-3">
                    <div className="rounded-2xl border border-white/15 bg-black/35 px-4 py-3 text-[12px] italic leading-snug text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)] backdrop-blur-md md:text-[13px]">
                      &ldquo;{m.quote}&rdquo;
                    </div>
                  </div>
                </div>

                {/* CTA pill below the card */}
                <div className="mt-4">
                  {m.ctaPrimary ? (
                    <span className="inline-flex items-center rounded-full bg-[#d2f392] px-4 py-2 text-[12px] font-semibold text-black md:text-[13px]">
                      {m.cta}
                    </span>
                  ) : (
                    <button
                      type="button"
                      aria-label={m.cta}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#3a3a3a]/85 px-4 py-2 text-[12px] font-medium text-white backdrop-blur-sm md:text-[13px]"
                    >
                      <span>{m.cta}</span>
                      <ArrowRightIcon
                        className="h-3 w-3"
                        strokeWidth={2.5}
                      />
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Carousel controls — hidden per client request (we don't need
            the toggle pill or the chevron buttons anymore). Wrapped in
            `{false && ...}` so the JSX is preserved and easy to restore. */}
        {false && (
          <div className="mt-8 flex items-center justify-end gap-2 md:mt-10">
            <div
              aria-hidden="true"
              className="flex h-9 w-16 items-center rounded-full bg-black/85 px-1.5"
            >
              <div className="h-6 w-7 rounded-full bg-white" />
            </div>
            <button
              type="button"
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a1a]/35 text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a]/45"
            >
              <ChevronLeftIcon className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a1a]/35 text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a]/45"
            >
              <ChevronRightIcon className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
