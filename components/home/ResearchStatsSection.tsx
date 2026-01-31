import Link from "next/link";
import { researchStats, researchStatsIntro } from "data/homePageData";

export function ResearchStatsSection() {
  return (
    <section className="w-full bg-neutral-50 py-4 md:py-8">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="mb-10 md:mb-12 max-w-2xl">
          <p className="text-[1rem] md:text-[1.125rem] text-neutral-800 leading-relaxed">
            {researchStatsIntro.headline.split("mitopure®").map((part, i) => (
              <span key={i}>
                {part}
                {i === 0 && (
                  <span className="bg-red-600 rounded-full text-white px-1">mitopure®</span>
                )}
              </span>
            ))}
          </p>
          <Link
            href={researchStatsIntro.ctaHref}
            className="mt-6 inline-flex items-center gap-2 border-2 border-neutral-900 py-2.5 px-4 text-neutral-800 text-sm font-medium uppercase tracking-wide hover:bg-neutral-900 hover:text-white transition-colors"
          >
            {researchStatsIntro.ctaLabel}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
          {researchStats.map((stat) => (
            <div key={stat.title} className="space-y-2">
              <div className="text-[2rem] md:text-[3rem]">{stat.value}</div>
              <div className="border-t-2 border-dotted border-neutral-400" />
              <h3 className="text-[1rem] md:text-[1.25rem]">{stat.title}</h3>
              <p className="text-[0.875rem] md:text-[1rem] text-neutral-500 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
