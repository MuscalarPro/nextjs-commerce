import { GridTileImage } from "components/grid/tile";
import CTASection from "components/layout/cta-section";
import Footer from "components/layout/footer";
import { ComparisonTable } from "components/product/comparison-table";
import { FAQSection } from "components/product/faq-section";
import { Gallery } from "components/product/gallery";
import { LabsCtaSection } from "components/product/labs-cta-section";
import { M3CareSection } from "components/product/M3Care-section";
import { MitochondriaDisruptionSection } from "components/product/mitochondria-disruption-section";
import { MusclespanLearnMoreButton } from "components/product/musclespan-learn-more-button";
import { NutrientCards } from "components/product/nutrient-cards";
import {
  ClinicalResearchButton,
  ClinicalTrialsProvider,
  M3HistoryButton,
  ProductDescription,
  RigorousTestingButton,
} from "components/product/product-description";
import { Timeline } from "components/product/timeline";
import { VS01Tabs } from "components/product/vs01-tabs";
import { HIDDEN_PRODUCT_TAG } from "lib/constants";
import { getProduct, getProductRecommendations } from "lib/shopify";
import { Image as ShopifyImage } from "lib/shopify/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// data import
import { herocarddata } from "data/herocarddata";
import { rigorousTestingData } from "data/rigorousTestingData";

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <ClinicalTrialsProvider>
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-4 md:pb-18">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <div className="h-full w-full basis-full lg:basis-[70%] lg:sticky lg:top-8 lg:self-start">
              <Suspense
                fallback={
                  <div className="relative aspect-video h-full w-full overflow-hidden rounded-lg bg-neutral-100" />
                }
              >
                <Gallery
                  images={product.images.map((image: ShopifyImage) => ({
                    src: image.url,
                    altText: image.altText,
                  }))}
                />
              </Suspense>
            </div>

            <div className="basis-full lg:basis-[30%]">
              <Suspense fallback={null}>
                <ProductDescription product={product} />
              </Suspense>
            </div>
          </div>
          <RelatedProducts id={product.id} />
        </div>

        <div className="relative mx-auto max-w-full px-4 ">
          {/* Rounded Image Container */}
          <div className="relative overflow-hidden rounded-4xl">
            {/* Background Image */}
            <div className="relative h-[600px] w-full md:h-[550px]">
              <Image
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Landscape.jpg?v=1769576689"
                alt="Product benefits"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 1200px, 100vw"
              />

              {/* Subtle dark gradient so headline stays readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

              {/* Headline (top-left)  closer to blur panel */}
              <div className="absolute left-6 top-6 md:left-10 md:top-8 lg:left-14 lg:top-10">
                <h2 className="max-w-8xl text-white text-[34px] leading-[1.08] md:text-[48px] font-medium tracking-tight">
                  Decode peak performance with bio-cellular precision.
                </h2>
              </div>

              {/* Bottom glass panel  moved slightly up */}
              <div className="absolute inset-x-4 bottom-3 md:inset-x-6 md:bottom-4 lg:inset-x-8 lg:bottom-5">
                {/* Mobile: Horizontal scrollable slider */}
                <div className="flex gap-4 overflow-x-auto pb-2 md:hidden snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {herocarddata.map((item) => (
                    <div
                      key={item.id}
                      className="flex min-w-[85%] flex-col gap-3 rounded-2xl bg-white/22 backdrop-blur-md ring-1 ring-white/15 p-6 snap-center"
                    >
                      <div className="h-12 w-12">
                        <img
                          src={item.icon}
                          alt={item.iconAlt}
                          className="h-full w-full object-contain opacity-95"
                          loading="lazy"
                        />
                      </div>

                      <h3 className="text-white text-xl font-semibold leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-white/90 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Desktop: Grid layout */}
                <div className="hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
                  {herocarddata.map((item: any) => (
                    <div
                      key={item.id}
                      className={`flex flex-col gap-3 ${item.roundedClass} bg-white/22 backdrop-blur-md ring-1 ring-white/15 p-6 md:p-8`}
                    >
                      <div className="h-12 w-12">
                        <img
                          src={item.icon}
                          alt={item.iconAlt}
                          className="h-full w-full object-contain opacity-95"
                          loading="lazy"
                        />
                      </div>

                      <h3 className="text-white text-xl font-semibold leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-white/90 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ViaCap Technology Section */}
        <div className="relative mx-auto max-w-full px-4 py-2">
          <div className="grid grid-cols-1 gap-2 overflow-hidden  lg:grid-cols-[1fr_3fr]">
            {/* Left Section: Product Display */}
            <div className="hidden md:block relative overflow-hidden rounded-4xl">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Lifestyle_image_6f304e25-ca01-4b32-b8da-a4a610ae6eb8.png?v=1769543214"
                  alt="Background pattern"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 100vw"
                />
              </div>
            </div>

            {/* Right Section: Technology Information */}
            <div
              className="rounded-4xl bg-cover bg-center bg-no-repeat p-6 md:p-8"
              style={{
                backgroundImage: `url('https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Gradients.png?v=1769684370')`,
              }}
            >
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1.1fr] ">
                {/* Left: Text Content */}
                <div className="space-y-6 text-white">
                  <h2 className="text-2xl md:text-4xl font tracking-tight">
                    Unlike many muscle‑centric pseudoscience supplements, M3™
                    is built for Musclespan the cellular capacity to produce
                    energy, recover, and keep output high as you age.
                  </h2>

                  <MusclespanLearnMoreButton />
                </div>

                {/* Right: Explainer Video + copy */}
                <div className="flex flex-col items-center justify-center text-center md:flex-row md:items-center md:gap-10 md:text-left">
                  {/* Left: Video */}
                  <div className="relative h-[260px] w-full max-w-xs md:h-[400px] md:max-w-none md:w-1/2">
                    <div className="h-full w-full overflow-hidden">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover scale-150"
                      >
                        <source
                          src="https://cdn.shopify.com/videos/c/o/v/38d767ba3a7c48bf9ce11104f0016e49.webm"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>

                  {/* Right: Text */}
                  <div className="mt-6 md:mt-0 md:w-1/2">
                    {/* Headline */}
                    <h2 className="text-lg leading-tight text-white md:text-xl">
                      These cellular batteries start wearing out in your 30s.
                    </h2>

                    {/* Three outcomes */}
                    <div className="mt-4 grid gap-8 grid-cols-3 md:grid-cols-1">
                      {[
                        "Cellular Energy",
                        "Muscle Strength",
                        "Peak Endurance",
                      ].map((label) => (
                        <div
                          key={label}
                          className="flex flex-col md:flex-row items-center gap-2 text-center md:items-start md:text-left"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white ">
                            <span className="text-base -rotate-[135deg] leading-none text-white">
                              ↓
                            </span>
                          </div>
                          <p className="text-sm leading-snug text-white md:text-base">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <Timeline />

        <MitochondriaDisruptionSection />

        {/* VS-01 L. crispatus Section */}
        <div className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-4">
            <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] items-center justify-center">
              {/* Left: Copy */}
              <div>
                <p className="mb-6 text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Built on Celagenex’s Research
                </p>
                <h2 className="mb-6 text-[1.5rem] leading-tight text-black md:text-[2.5rem]">
                  MP M3™ emerged from mitochondrial health discoveries of
                  Urolithin A, Spermidine, and S‑Allyl Cysteine strains that
                  defend the muscle-span biome from aging, stress, and metabolic
                  imbalances.
                </h2>
                {/* M3 History Button */}
                <div className="hidden md:block">
                  <M3HistoryButton />
                </div>
              </div>

              {/* Right: Image */}
              <div className="flex flex-col justify-center items-center">
                <div className="relative aspect-square w-full max-w-[420px] md:max-w-[640px] lg:max-w-[720px]">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Mitochondria_1_1.jpg?v=1769691339"
                    alt="L. crispatus culture in petri dish"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 500px, (min-width: 768px) 400px, 324px"
                  />
                </div>
              </div>
              <div className="block md:hidden">
                <M3HistoryButton />
              </div>
            </div>
          </div>
        </div>

        {/* VS-01 vaginal synbiotic validation section */}
        <div className="w-full bg-[#D3B7E7]/20 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
              {/* Left: Large copy */}
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-black">
                  Patented MP M3™ Delivery
                </p>
                <h2 className="text-[1.7rem] leading-tight text-black md:text-[2.6rem] lg:text-[3rem]">
                  M3™ delivers patented, bioavailable actives with 95%+
                  cellular uptake, ensuring mitochondrial, muscle, and brain
                  targets receive full clinical doses intact—unlike standard
                  capsules that lose 70–90% in digestion.
                </h2>
              </div>

              {/* Right: Tabs + description */}
              <VS01Tabs />
            </div>
          </div>
        </div>

        {/* Bioavailable Nutrients Section */}
        <div className="w-full bg-[#F7F8F2] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-4">
            {/* Top Section: Heading + Intro */}
            <div className="mb-12 grid gap-8 md:grid-cols-[1.2fr_1fr]">
              <h2 className="text-3xl  leading-tight text-black md:text-4xl lg:text-5xl">
                Why M3 is Superior to NMN
              </h2>
              <p className="text-base leading-relaxed text-black md:text-lg">
                M3 prioritizes mitochondrial quality (mitophagy biology) with
                human RCT signals in muscle endurance + mitochondrial
                biomarkers, while NMN primarily boosts blood NAD+ with
                mixed/limited functional signals and no meaningful
                body-composition change.​
              </p>
            </div>

            {/* Four Nutrient Cards */}
            <NutrientCards />
          </div>
        </div>

        <div className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-4">
            {/* Top label */}
            <p className="text-xs font-semibold tracking-[0.18em] text-[#7B8B7A]">
              Clinically Validated Efficacy
            </p>

            {/* Heading */}
            <h2 className="mt-5 max-w-sm text-base font-medium leading-tight text-[#1E2A1E] md:text-md">
              Results from randomized, double-blind, placebo-controlled trials
              on M3 key ingredient Urolithin A:
            </h2>

            {/* Stats row */}
            <div className="mt-12">
              <div className="flex flex-col gap-0 md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                {/* Stat 1 */}
                <div className="grid grid-cols-[40%_60%] gap-4 items-center pb-6 md:pb-0">
                  <div className="text-[48px] text-[#1E2A1E] md:text-[64px] min-w-0">
                    90%
                  </div>
                  <p className="min-w-0 text-[14px] leading-relaxed text-[#2F3B2F] md:text-[15px]">
                    Of participants established stable mitochondrial function
                    (reduced acylcarnitines/ceramides)
                  </p>
                </div>

                {/* Horizontal Divider 1 - Mobile */}
                <div className="mb-6 h-px w-full bg-[#1E2A1E]/15 md:hidden" />

                {/* Vertical Divider 1 - Desktop */}
                <div className="hidden h-16 w-px bg-[#1E2A1E]/15 md:mx-10 md:block" />

                {/* Stat 2 */}
                <div className="grid grid-cols-[40%_60%] gap-4 items-center pb-6 md:pb-0">
                  <div className="text-[48px] text-[#1E2A1E] md:text-[64px] min-w-0">
                    10x
                  </div>
                  <p className="min-w-0 text-[14px] leading-relaxed text-[#2F3B2F] md:text-[15px]">
                    Increase in mitophagy markers within 21 days use
                  </p>
                </div>

                {/* Horizontal Divider 2 - Mobile */}
                <div className="mb-6 h-px w-full bg-[#1E2A1E]/15 md:hidden" />

                {/* Vertical Divider 2 - Desktop */}
                <div className="hidden h-16 w-px bg-[#1E2A1E]/15 md:mx-10 md:block" />

                {/* Stat 3 */}
                <div className="grid grid-cols-[40%_60%] gap-4 items-center pb-6 md:pb-0">
                  <div className="text-[48px] leading-none text-[#1E2A1E] md:text-[64px] min-w-0">
                    100%
                  </div>
                  <p className="min-w-0 text-[14px] leading-relaxed text-[#2F3B2F] md:text-[15px]">
                    Of participants maintained optimal muscle endurance gains
                  </p>
                </div>
              </div>
            </div>

            {/* Clinical Research Button */}
            <div className="mt-8">
              <ClinicalResearchButton />
            </div>
          </div>
        </div>

        <ComparisonTable />

        {/* Rigorous Testing Section */}
        <div className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-4">
            <div className="mb-12 grid gap-8 lg:grid-cols-[1.5fr_2.5fr] md:items-center">
              {/* Left: Title and Description */}
              <div>
                <h2 className="mb-4 text-[1.5rem]  leading-tight text-black md:text-[2.5rem]">
                  Rigorous testing that sets a higher standard.{" "}
                </h2>
                <p className="text-base leading-relaxed text-black md:text-lg">
                  MUSCULAR PRO is screened as a full formula for identity,
                  purity, contaminants, and performance—because what’s not in
                  your supplement matters too.​
                </p>
              </div>

              {/* Right: Three Cards */}
              <div className="grid grid-cols-3 gap-4 ">
                {rigorousTestingData.map((card) => (
                  <div
                    key={card.id}
                    className="rounded-xl bg-[#F7F8F2] p-2 md:p-6 flex items-center flex-col md:justify-center text-left md:text-center"
                  >
                    <div className="mb-0 mr-4 flex h-16 w-16 shrink-0 items-center justify-center md:mr-0 md:mb-4">
                      <Image
                        src={card.imageSrc}
                        alt={card.alt}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-center text-black">
                      {card.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <RigorousTestingButton />
            </div>
          </div>

          {/* add new side bar simiar to other  side bar*/}
        </div>

        <M3CareSection />
        <LabsCtaSection />
        <FAQSection />

        <CTASection />
        <Footer />
      </ClinicalTrialsProvider>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="mt-12 py-8">
      <h2 className="mb-6 text-2xl font-bold text-black md:text-3xl">
        Related Products
      </h2>
      <ul className="flex w.full gap-4 overflow-x-auto pb-4 pt-1">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-square w.full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link
              className="relative h-full w.full transition-transform hover:scale-105"
              href={`/product/${product.handle}`}
              prefetch={true}
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
