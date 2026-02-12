import { PatentAccordionItem } from "components/patents/patent-accordion-item";
import { Patent } from "lib/types";

const globalPatents: Patent[] = [
  {
    id: "p1",
    number: "US 11,234,567",
    title: "Methods for enhancing mitochondrial function using Urolithin A",
    filingDate: "MAR 10, 2018",
    status: "Issued",
    abstract:
      "A method of improving mitochondrial function in a subject in need thereof, comprising administering to the subject a composition comprising a therapeutically effective amount of Urolithin A. The method results in increased ATP production and improved muscle endurance.",
  },
  {
    id: "p2",
    number: "EP 3,456,789",
    title: "Synergistic compositions for muscle recovery and strength",
    filingDate: "NOV 15, 2019",
    status: "Issued",
    abstract:
      "Compositions comprising Urolithin A and one or more additional active agents, wherein the combination provides a synergistic effect on muscle recovery following strenuous exercise. The patent covers various formulations and dosage forms.",
  },
  {
    id: "p3",
    number: "US 10,987,654",
    title: "Process for the synthesis of high-purity Urolithin A",
    filingDate: "JUN 22, 2017",
    status: "Issued",
    abstract:
      "A scalable industrial process for the synthesis of Urolithin A with purity exceeding 99%. The process eliminates the use of toxic solvents and results in a highly stable crystal form suitable for pharmaceutical and nutraceutical applications.",
  },
  {
    id: "p4",
    number: "WO 2021/054321",
    title: "Topical formulations of Urolithin A for skin rejuvenation",
    filingDate: "FEB 01, 2021",
    status: "Pending",
    abstract:
      "Topical compositions containing Urolithin A that promote collagen synthesis and reduce oxidative stress in skin cells. The formulations are effective for reducing the appearance of wrinkles and improving skin elasticity.",
  },
];

export default function PatentsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl md:mb-24">
          <h1 className="mb-6 text-5xl font-normal text-neutral-900 sm:text-6xl md:text-7xl">
            Our patents
          </h1>
          <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl md:text-2xl">
            Our proprietary ingredient is protected under 50+ patents globally,
            ensuring the highest quality and exclusivity. We stand apart through
            vigorous research and intellectual property.
          </p>
        </div>

        {/* Global Patents */}
        <div className="mb-20">
          <h2 className="mb-8 border-b border-neutral-200 pb-4 text-sm font-bold uppercase tracking-widest text-neutral-900">
            Global Patents
          </h2>
          <div>
            {globalPatents.map((patent) => (
              <PatentAccordionItem key={patent.id} patent={patent} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
