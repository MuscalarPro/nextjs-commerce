import Link from "next/link";

const GREEN = "#1F7A4D";

type Doctor = {
  name: string;
  role: string;
  bio: string;
  // Small label above the name — specialty for now (placeholder content).
  specialty: string;
  // Gradient placeholder for the portrait until real photos land.
  gradient: string;
};

// Placeholder / dummy cards — fictional names and copy until the real
// medical team details are supplied.
const DOCTORS: Doctor[] = [
  {
    name: "Dr Aarav Mehta, MD",
    role: "Chief Longevity Officer, MuscalarPro",
    bio: "Board-certified longevity physician focused on muscle as the organ of healthspan. Builds the protocols behind M3.",
    specialty: "Longevity Medicine",
    gradient: "linear-gradient(150deg, #1E3944 0%, #4B8FAA 130%)",
  },
  {
    name: "Dr Sarah Whitfield, MD",
    role: "Integrative & Longevity Medicine",
    bio: "Brings whole-body, data-led care to the M3 protocol, with a focus on metabolic and cellular health.",
    specialty: "Integrative Medicine",
    gradient: "linear-gradient(150deg, #14301F 0%, #2F7350 130%)",
  },
  {
    name: "Dr Rajiv Nair, PhD",
    role: "Chief Scientific Officer",
    bio: "Leads M3's research — standardising clinically-studied actives at the doses shown to work in human trials.",
    specialty: "Cellular & Molecular Biology",
    gradient: "linear-gradient(150deg, #15203A 0%, #3A4F7A 130%)",
  },
  {
    name: "Dr Maya Krishnan, MD",
    role: "Sports & Performance Medicine",
    bio: "Works with endurance athletes on recovery and musclespan, translating the data into daily training guidance.",
    specialty: "Sports & Performance",
    gradient: "linear-gradient(150deg, #0D2E2E 0%, #246B6B 130%)",
  },
];

export function UltraEnduranceDoctors() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-20 md:px-8 md:pt-28">
        <h2 className="max-w-2xl text-balance text-[34px] font-semibold leading-[1.08] tracking-tight text-[#1a1a1a] md:text-[48px]">
          Led by doctors with 40 years of health and longevity expertise
        </h2>
      </div>

      {/* Side-scroller — hidden scrollbar. Breaks past the max-width box so
          cards bleed toward the viewport edge; padding re-insets the first
          card to align with the heading. Keyboard-focusable + labelled. */}
      <div
        role="region"
        aria-label="Our medical and scientific team"
        tabIndex={0}
        className="mt-10 overflow-x-auto pb-20 [scrollbar-width:none] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A4D]/50 md:mt-14 md:pb-28 [&::-webkit-scrollbar]:hidden"
      >
        <ul className="flex snap-x snap-mandatory gap-5 pl-4 pr-4 md:gap-6 md:pl-8 md:pr-8 lg:pl-[max(2rem,calc((100vw-1152px)/2+2rem))] lg:pr-[max(2rem,calc((100vw-1152px)/2+2rem))]">
          {DOCTORS.map((doctor) => (
            <li
              key={doctor.name}
              className="flex w-[300px] shrink-0 snap-start flex-col sm:w-[340px]"
            >
              {/* Portrait placeholder gradient */}
              <div
                aria-hidden="true"
                className="aspect-[4/5] w-full rounded-2xl"
                style={{ background: doctor.gradient }}
              />

              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#1a1a1a]/45">
                {doctor.specialty}
              </p>
              <h3 className="mt-2 text-[18px] font-semibold text-[#1a1a1a] md:text-[20px]">
                {doctor.name}
              </h3>
              <p className="mt-1 text-[13px] text-[#1a1a1a]/55 md:text-[14px]">
                {doctor.role}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-[#1a1a1a]/65 md:text-[14px]">
                {doctor.bio}
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex w-fit text-[14px] font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
                style={{ color: GREEN }}
              >
                Learn more
              </Link>
            </li>
          ))}
          {/* Trailing spacer so the last card can scroll clear of the edge */}
          <li aria-hidden="true" className="w-1 shrink-0" />
        </ul>
      </div>
    </section>
  );
}
