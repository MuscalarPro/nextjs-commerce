import Link from "next/link";

export function CostBand() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8 md:py-28">
        {/* Eyebrow */}
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white md:text-[13px]">
          The cost of keeping your muscle
        </p>

        {/* Big stat — < ₹199 with /day floating to the upper-right */}
        <div className="mt-8 flex items-start justify-center md:mt-12">
          <span className="font-sans text-[4.25rem] font-semibold leading-none tracking-tight text-white md:text-[7rem] lg:text-[8.25rem]">
            &lt;&thinsp;₹199
          </span>
          <span className="ml-1 mt-2 text-xl font-medium text-white md:ml-2 md:mt-3 md:text-3xl lg:mt-4 lg:text-[2.5rem]">
            /day
          </span>
        </div>

        {/* Citation */}
        <p className="mx-auto mt-8 max-w-md text-balance text-sm leading-relaxed text-white/55 md:mt-10 md:max-w-xl md:text-[15px]">
          JAMA New Open 2022 (Urolithin A, 8-week endurance). Dose 1000 mg; M3
          provides 500 mg/serving.
        </p>

        {/* CTA */}
        <div className="mt-10 md:mt-12">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[#d2f392] px-10 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#c3e882] md:px-14 md:py-4 md:text-base"
          >
            See your plan
          </Link>
        </div>
      </div>
    </section>
  );
}
