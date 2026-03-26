import { PatentAccordionItem } from "components/patents/patent-accordion-item";
import { StudyAccordionItem } from "components/patents/study-accordion-item";
import { clinicalStudies } from "data/science/studiesData";
import { Patent } from "lib/types";

const usPatents: Patent[] = [
  {
    id: "us1",
    number: "US 10,442,784",
    title: "Compositions comprising an urolithin compound",
    filingDate: "OCT 15, 2019",
    status: "Issued",
    abstract:
      "A composition comprising urolithin A and a pharmaceutically acceptable carrier, formulated for oral administration to promote cellular health by stimulating mitophagy pathways.",
  },
  {
    id: "us2",
    number: "US 11,634,401",
    title: "Process-scale synthesis of urolithin A",
    filingDate: "APR 25, 2023",
    status: "Issued",
    abstract:
      "A robust industrial process for the large-scale production of high-purity Urolithin A, ensuring consistent quality for global clinical and consumer applications.",
  },
  {
    id: "us3",
    number: "US 12,109,190",
    title: "Urolithins as immune response enhancers",
    filingDate: "OCT 08, 2024",
    status: "Issued",
    abstract:
      "Methods and compositions utilizing urolithins to modulate and enhance the immune response through mitochondrial optimization in immune cell populations.",
  },
  {
    id: "us4",
    number: "US 11,925,616",
    title: "Compositions comprising urolithin compounds",
    filingDate: "MAR 12, 2024",
    status: "Issued",
    abstract:
      "Novel formulations of urolithin compounds designed for enhanced bioavailability and target tissue delivery, particularly in skeletal muscle and brain tissue.",
  },
  {
    id: "us5",
    number: "US 10,695,320",
    title: "Methods for enhancing mitochondrial function",
    filingDate: "JUN 30, 2020",
    status: "Issued",
    abstract:
      "Clinical methods for improving muscle endurance and physical performance in humans by administering a defined daily dose of Urolithin A to trigger mitophagy.",
  },
];

const europeanPatents: Patent[] = [
  {
    id: "ep1",
    number: "EP 3,278,800 B1",
    title: "Therapeutic uses of urolithins",
    filingDate: "FEB 07, 2018",
    status: "Issued",
    abstract:
      "A patent covering the medicinal use of urolithins in treating age-related muscle decline and supporting mitochondrial integrity in the European region.",
  },
  {
    id: "ep2",
    number: "EP 3,087,065 B1",
    title: "Optimization of cellular energy",
    filingDate: "MAY 01, 2019",
    status: "Issued",
    abstract:
      "Methods for optimizing cellular energy production and metabolic health through the regulation of mitochondrial quality control mechanisms.",
  },
  {
    id: "ep3",
    number: "EP 2,654,461 B1",
    title: "Urolithin compounds for increasing longevity",
    filingDate: "OCT 30, 2013",
    status: "Issued",
    abstract:
      "A foundational European patent protecting the use of urolithin compounds to enhance cellular longevity and maintain muscle function during aging.",
  },
];

const internationalPatents: Patent[] = [
  {
    id: "wo1",
    number: "WO 2019/168972",
    title: "Industrial synthesis of Urolithin A",
    filingDate: "SEP 06, 2019",
    status: "Published",
    abstract:
      "International patent application covering the proprietary synthesis route for creating high-purity Urolithin A on an industrial scale.",
  },
  {
    id: "wo2",
    number: "WO 2023/161453",
    title: "Mitochondrial health and longevity",
    filingDate: "AUG 31, 2023",
    status: "Published",
    abstract:
      "Global application focusing on the use of Urolithin A for extending healthy longevity by maintaining youthful mitochondrial levels.",
  },
];

export default function StudiesPage() {
  const urolithinStudies = clinicalStudies.filter(
    (s) => s.category === "Urolithin A",
  );
  const spermidineStudies = clinicalStudies.filter(
    (s) => s.category === "Spermidine",
  );
  const sacStudies = clinicalStudies.filter(
    (s) => s.category === "S-Allyl Cysteine",
  );
  const aminoStudies = clinicalStudies.filter(
    (s) => s.category === "Amino 9 / EAA + HMB",
  );

  return (
    <main className="min-h-screen bg-[#F7F8F2] pt-24 pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl md:mb-24">
          <h1 className="mb-6 text-5xl font-normal text-neutral-900 sm:text-6xl md:text-7xl">
            Our studies
          </h1>
          <p className="text-lg text-neutral-600 sm:text-xl md:text-2xl">
            More than 15 years of advanced research has explored the efficacy of
            our compounds, and their effects have been validated in numerous
            peer-reviewed pre-clinical and clinical trials.
          </p>
        </div>

        {/* Clinical Research Section */}
        <div className="space-y-32">
          {/* Urolithin A */}
          <div>
            <h4 className="mb-4 pb-4 heading-h3 text-neutral-900">Urolithin A</h4>
            <div>
              {urolithinStudies.map((study) => (
                <StudyAccordionItem key={study.id} study={study} />
              ))}
            </div>
          </div>

          {/* Spermidine */}
          <div>
            <h4 className="mb-4 pb-4 heading-h3 text-neutral-900">Spermidine</h4>
            <div>
              {spermidineStudies.map((study) => (
                <StudyAccordionItem key={study.id} study={study} />
              ))}
            </div>
          </div>

          {/* S-Allyl Cysteine */}
          <div>
            <h4 className="mb-4 pb-4 heading-h3 text-neutral-900">S-Allyl Cysteine</h4>
            <div>
              {sacStudies.map((study) => (
                <StudyAccordionItem key={study.id} study={study} />
              ))}
            </div>
          </div>

          {/* Amino 9 */}
          <div>
            <h4 className="mb-4 pb-4 heading-h3 text-neutral-900">Amino 9 / EAA + HMB</h4>
            <div>
              {aminoStudies.map((study) => (
                <StudyAccordionItem key={study.id} study={study} />
              ))}
            </div>
          </div>
        </div>

        {/* Intellectual Property Section */}
        {/* <div className="mt-32">
          <div className="mb-12 border-t border-neutral-200 pt-32">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#d85c41] mb-2">
              Intellectual Property
            </h2>
            <h3 className="text-3xl font-medium text-neutral-900">
              Global Patents
            </h3>
            <p className="mt-4 body-text text-neutral-600 max-w-3xl">
              Our proprietary formulations and processing techniques are protected under 50+ patents globally,
              ensuring the highest quality and exclusivity.
            </p>
          </div>

          <div className="space-y-20">
            <div>
              <h4 className="mb-8 border-b border-neutral-200 pb-4 heading-h3 text-neutral-900">
                US Patents
              </h4>
              <div>
                {usPatents.map((patent) => (
                  <PatentAccordionItem key={patent.id} patent={patent} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-8 border-b border-neutral-200 pb-4 heading-h3 text-neutral-900">
                European Patents
              </h4>
              <div>
                {europeanPatents.map((patent) => (
                  <PatentAccordionItem key={patent.id} patent={patent} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-8 border-b border-neutral-200 pb-4 heading-h3 text-neutral-900">
                International Patents (PCT)
              </h4>
              <div>
                {internationalPatents.map((patent) => (
                  <PatentAccordionItem key={patent.id} patent={patent} />
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
