import { Patent } from "lib/types";

const indiaPatents = [
  { id: "in1", number: "IN 562761", status: "GRANTED" },
  { id: "in2", number: "IN 544991", status: "GRANTED" },
];

export default function PatentsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-5xl md:mb-24">
          <h1 className="mb-8 heading-h2 text-neutral-900 leading-tight">Our Patents</h1>
          
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-4">
            <span className="inline-flex items-center rounded bg-[#d85c41] px-2 py-0.5 text-[12px] font-bold uppercase tracking-wider text-white">
              muscalarpro
            </span>
            <p className="body-text text-neutral-600 leading-relaxed">
              is the culmination of over five years of rigorous scientific
              research and dedicated investment. We have employed the highest
              scientific standards and gone to great lengths to ensure that our
              products are safe, effective, and proprietary. Our intellectual
              property protection is strong, and when you choose Muscalarpro,
              you can trust that you are buying from the inventors — and that
              the safety and quality of our products are unmatched in the
              industry.
            </p>
          </div>
        </div>

        {/* India Patents Section */}
        <div className="mb-20 border-t border-neutral-100 pt-12">
          <h2 className="mb-8 heading-h3 text-neutral-900 border-b border-neutral-900 inline-block pb-1">
            India
          </h2>
          <div className="divide-y divide-neutral-100 border-b border-neutral-100">
            {indiaPatents.map((patent) => (
              <div
                key={patent.id}
                className="flex items-center justify-between py-6 md:py-8"
              >
                <span className="body-text font-medium text-neutral-900">
                  {patent.number}
                </span>
                <span className="text-[12px] font-bold tracking-widest text-[#2d6a4f] uppercase">
                  {patent.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stats Section */}
        <div className="mt-24 grid grid-cols-1 gap-12 border-t border-neutral-100 pt-16 md:grid-cols-12 md:items-start">
          <div className="md:col-span-3">
             <div className="flex items-start text-neutral-900">
               <span className="text-[64px] font-medium leading-none md:text-[80px]">5</span>
               <span className="mt-1 text-[32px] font-medium leading-none md:text-[40px]">+</span>
             </div>
          </div>
          <div className="md:col-span-9 pt-4">
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Years of Research
            </h3>
            <p className="body-text text-neutral-600 max-w-2xl leading-relaxed">
              Backed by half a decade of focused research and development, our
              patented formulations are built on a foundation of science-backed
              innovation — delivering products you can trust.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
