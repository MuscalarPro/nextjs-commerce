import { researchStats } from "data/homePageData";

export function ResearchStatsSection() {
  return (
    <section className="w-full bg-neutral-50 py-4 md:py-8">
      <div className="mx-auto max-w-8xl px-4 md:px-6 lg:px-8">
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
