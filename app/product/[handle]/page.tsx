import { GridTileImage } from "components/grid/tile";
import CTASection from "components/layout/cta-section";
import Footer from "components/layout/footer";
import { FAQSection } from "components/product/faq-section";
import { Gallery } from "components/product/gallery";
import { MusclespanLearnMoreButton } from "components/product/musclespan-learn-more-button";
import { NutrientCards } from "components/product/nutrient-cards";
import {
  BenefitsHeading,
  ClinicalResearchButton,
  M3HistoryButton,
  MusclespanButton,
  ProductDescription,
} from "components/product/product-description";
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
          <div className="relative h-[700px] w-full md:h-[650px]">
            <Image
              src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/VO2max-2-e1695986084451-1.webp?v=1768046267"
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
              <h2 className="max-w-8xl text-white text-[34px] leading-[1.08] md:text-[44px] lg:text-[56px] font-medium tracking-tight">
                Feel superhuman with bio‑cellular precision molecules to
                decipher MuscleSpan.​
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
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Container1_4695602653911408.png?v=1768285030"
                alt="Background pattern"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 100vw"
              />
            </div>

            {/* Product Image */}
            <div className="relative flex h-full min-h-[500px] items-center justify-center p-6 md:p-8 lg:p-10">
              <div className="relative z-10">
                <div className="relative h-92 w-72 md:h-[480px] md:w-100">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/DS-01_Transparent_ProductRender_Video1_12223634333271582.png?v=1768285032"
                    alt="DS-01 Daily Synbiotic"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, 288px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Technology Information */}
          <div className="rounded-4xl bg-[#1F3A1F] p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1.1fr] items-center">
              {/* Left: Text Content */}
              <div className="space-y-6 text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                  Unlike many muscle‑centric pseudoscience supplements, M3™ is
                  built for Musclespan the cellular capacity to produce energy,
                  recover, and keep output high as you age.
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-white/90 max-w-md">
                  It targets mitochondrial performance (not a stimulant spike)
                  and supports the biology that links muscle function to
                  long-term resilience.
                </p>

                <MusclespanLearnMoreButton />
              </div>

              {/* Right: Explainer Video */}
              <div className="relative h-[260px] w-full max-w-xs justify-self-center md:h-[500px]">
                <div className="absolute inset-0  overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source
                      src="https://cdn.shopify.com/videos/c/o/v/38d767ba3a7c48bf9ce11104f0016e49.webm"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full bg-[#F7F8F2] py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 ">
          {/* Heading Section */}
          <BenefitsHeading />
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1.35fr] lg:items-center">
            {/* LEFT: Timeline + bullets */}
            <div className="relative">
              {/* Mobile Video - Above the timeline */}
              <div className="mb-8 md:hidden">
                <div className="relative overflow-hidden rounded-xl bg-[#E6E9DF]">
                  <div className="relative w-full aspect-video">
                    <video
                      className="h-full w-full object-cover"
                      src="https://cdn.shopify.com/videos/c/o/v/d17dd37285eb4c01aa3638dc0cbe0647.mp4"
                      playsInline
                      muted
                      loop
                      autoPlay
                      controls
                    />
                  </div>
                </div>
              </div>

              {/* Vertical line */}
              <div className="absolute left-[10px] top-2 hidden h-[calc(100%-8px)] w-px bg-[#2E4B2D]/25 sm:block" />

              <div className="space-y-10">
                {/* Item 1 - Hour 08 */}
                <div className="relative pl-0 sm:pl-8">
                  {/* Dot */}
                  <div className="absolute left-[6px] top-2 hidden h-2.5 w-2.5 rounded-full bg-[#2E4B2D] sm:block" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#2E4B2D] px-3 py-1 text-sm font-semibold tracking-wide text-white">
                      Hour 08
                    </span>
                    <h3 className="text-lg font-semibold text-black">
                      Absorption begins
                    </h3>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed text-neutral-800">
                    <li>
                      Urolithin A enters circulation within hours, starting the
                      cellular program before you feel a “performance” change.​
                    </li>
                    <li>
                      High-energy tissues like skeletal muscle are the first
                      priority for mitochondrial remodeling signals.​
                    </li>
                    <li>
                      You’re not chasing stimulation—you’re initiating biology
                      (mitochondrial quality control).​
                    </li>
                  </ul>
                </div>

                {/* Item 2 - Day 07 */}
                <div className="relative pl-0 sm:pl-8">
                  <div className="absolute left-[6px] top-2 hidden h-2.5 w-2.5 rounded-full bg-[#2E4B2D] sm:block" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#2E4B2D] px-3 py-1 text-sm font-semibold tracking-wide text-white">
                      Day 07
                    </span>
                    <h3 className="text-lg font-semibold text-black">
                      Recovery feels cleaner
                    </h3>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed text-neutral-800">
                    <li>
                      Early shift: less “cellular noise” after training as
                      cleanup pathways turn on.​
                    </li>
                    <li>
                      Mitophagy/autophagy support is the first domino—remove
                      damaged parts so adaptation can compound.​
                    </li>
                    <li>
                      Recovery starts to feel more consistent day-to-day (not
                      spiky, not crash-dependent).​
                    </li>
                  </ul>
                </div>

                {/* Item 3 - Day 30 */}
                <div className="relative pl-0 sm:pl-8">
                  <div className="absolute left-[6px] top-2 hidden h-2.5 w-2.5 rounded-full bg-[#2E4B2D] sm:block" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#2E4B2D] px-3 py-1 text-sm font-semibold tracking-wide text-white">
                      Day 30
                    </span>
                    <h3 className="text-lg font-semibold text-black">
                      Cellular upgrade underway
                    </h3>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed text-neutral-800">
                    <li>
                      Mitochondrial efficiency signals begin to shift, reflected
                      in biomarker patterns linked to mitochondrial stress.
                    </li>
                    <li>
                      The stack supports “clean + rebuild”: mitophagy focus plus
                      autophagy-supportive biology.
                    </li>
                    <li>
                      This is where compliance matters—cells respond to
                      consistency more than intensity.​
                    </li>
                  </ul>
                </div>

                {/* Item 4 - Day 60 */}
                <div className="relative pl-0 sm:pl-8">
                  <div className="absolute left-[6px] top-2 hidden h-2.5 w-2.5 rounded-full bg-[#2E4B2D] sm:block" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#2E4B2D] px-3 py-1 text-sm font-semibold tracking-wide text-white">
                      Day 60
                    </span>
                    <h3 className="text-lg font-semibold text-black">
                      Performance capacity shifts
                    </h3>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed text-neutral-800">
                    <li>
                      In a double-blind, placebo-controlled RCT (n=66, older
                      adults), 1 g/day Urolithin A improved
                      contractions-to-fatigue versus placebo at ~2 months.
                    </li>
                    <li>
                      Translation: more usable endurance in muscle when it
                      counts—at the edge of fatigue.
                    </li>
                    <li>
                      You’re building Musclespan capacity: the ability to output
                      repeatedly, not just once.
                    </li>
                  </ul>
                </div>

                {/* Item 5 - Day 120 */}
                <div className="relative pl-0 sm:pl-8">
                  <div className="absolute left-[6px] top-2 hidden h-2.5 w-2.5 rounded-full bg-[#2E4B2D] sm:block" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#2E4B2D] px-3 py-1 text-sm font-semibold tracking-wide text-white">
                      Day 120
                    </span>
                    <h3 className="text-lg font-semibold text-black">
                      The “engine” effect
                    </h3>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed text-neutral-800">
                    <li>
                      At 4 months in the same RCT, Urolithin A was associated
                      with improvements in mitochondrial stress biomarkers
                      (including acylcarnitines/ceramides) and inflammation
                      (CRP) compared with placebo.
                    </li>
                    <li>
                      This is the deeper win: improving the system that produces
                      energy, not just the feeling of energy.
                    </li>
                    <li>
                      Your stack’s support system stays online: autophagy
                      biology (spermidine) and antioxidant defense (S‑allyl
                      cysteine/Nrf2).​
                    </li>
                  </ul>
                </div>

                {/* Item 6 - Day 365 */}
                <div className="relative pl-0 sm:pl-8">
                  <div className="absolute left-[6px] top-2 hidden h-2.5 w-2.5 rounded-full bg-[#2E4B2D] sm:block" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#2E4B2D] px-3 py-1 text-sm font-semibold tracking-wide text-white">
                      Day 365
                    </span>
                    <h3 className="text-lg font-semibold text-black">
                      The longevity play
                    </h3>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed text-neutral-800">
                    <li>
                      A year is where the thesis shows up: protect muscle
                      quality because muscle protects everything else.
                    </li>
                    <li>
                      Clinical endpoints are measured over months, but
                      Musclespan is a long-game strategy that compounds with
                      training, sleep, and protein.
                    </li>
                    <li>
                      You’re not “getting younger”—you’re preserving performance
                      capacity across decades.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT: Video + supporting images */}
            <div className="w-full">
              <div className="space-y-8">
                {/* Top: Video card - Hidden on mobile */}
                <div className="hidden md:block relative overflow-hidden rounded-xl bg-[#E6E9DF]">
                  <div className="relative w-full">
                    <video
                      className="h-full w-full object-cover"
                      src="https://cdn.shopify.com/videos/c/o/v/d17dd37285eb4c01aa3638dc0cbe0647.mp4"
                      playsInline
                      muted
                      loop
                      autoPlay
                      controls
                    />
                  </div>
                </div>

                {/* Bottom: two images */}
                <div className="grid  items-center grid-cols-[3fr_1fr] gap-4">
                  {/* Left: rectangle */}
                  <div className="relative overflow-hidden rounded-xl bg-[#E6E9DF]">
                    <div className="relative aspect-[4/3] w-full h-[200px]">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Lifestyle_image_1.jpg?v=1768920799"
                        alt="DS-01 benefits visual"
                        fill
                        className="object-cover h-[100%] w-[100%]"
                        sizes="100%"
                      />
                    </div>
                  </div>

                  {/* Right: circle */}
                  <div className="flex justify-start sm:justify-end">
                    <div className="relative aspect-square w-[200px] overflow-hidden rounded-full ">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Lifestyle_image_2.jpg?v=1768920799"
                        alt="DS-01 capsule detail"
                        fill
                        className="object-cover"
                        sizes="100%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vaginal Microbiome Disruption Section */}
      <div className="w-full bg-white py-4 md:py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-4">
          <p className="mb-8 text-[2rem] md:text-[3rem] leading-tight text-[#2E4B2D]">
            Day-to-day life can disrupt the balance of your muscle mitochondria,
            depleting your critical super defender—
            <em>mitochondrial quality control</em>.
          </p>

          {/* Tag rows */}
          <div className="flex-col gap-3 hidden md:flex">
            {/* First row of tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "Training",
                "Diet",
                "Stress",
                "Aging",
                "Toxins",
                "Poor Sleep",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-[#2E4B2D] bg.white px-3 py-1 text-xs font-medium text-[#2E4B2D]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Second row of tags */}
            <div className="flex flex-wrap gap-3">
              {["Medications", "Overreaching", "Sedentar"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-[#2E4B2D] bg.white px-3 py-1 text-xs font-medium text-[#2E4B2D]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden bg-white py-4 md:py-2">
        {/* Mobile: cross-fade slider (one image at a time) with overlay tags */}
        <div className="relative w-full overflow-hidden aspect-[3/4] md:hidden">
          {/* Tags overlay */}
          <div className="relative z-10 flex flex-wrap gap-2 px-4 pt-4">
            {[
              "Training",
              "Diet",
              "Stress",
              "Aging",
              "Toxins",
              "Poor Sleep",
              "Medications",
              "Overreaching",
              "Sedentar",
            ].map((tag) => (
              <span
                key={`mobile-${tag}`}
                className="inline-flex items-center rounded-full border border-white  px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Cross-fade images */}
          {[
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-11.jpg?v=1768293272",
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-3.jpg?v=1768293272",
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-10.jpg?v=1768293272",
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-14.jpg?v=1768293272",
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-6.jpg?v=1768293272",
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-1.jpg?v=1768293272",
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-2.jpg?v=1768293272",
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-4.jpg?v=1768293272",
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-15.jpg?v=1768293271",
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-8.jpg?v=1768293271",
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-5.jpg?v=1768293271",
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-12.jpg?v=1768293271",
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-13.jpg?v=1768293271",
            "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-9.jpg?v=1768293272",
          ].map((src, index) => (
            <div
              key={`fade-${index}`}
              className="fade-slide absolute inset-0 z-0"
              style={{ animationDelay: `${index * 4}s` }}
            >
              <Image
                src={src}
                alt={`Disruptor ${index + 1}`}
                fill
                className="h-full w-full object-cover"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Desktop: horizontal marquee */}
        <div className="hidden md:block">
          <div className="marquee relative">
            <div className="marquee__track flex w-max items.end">
              {/* Set 1 */}
              <div className="flex">
                {[
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-11.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-3.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-10.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-14.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-6.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-1.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-2.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-4.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-15.jpg?v=1768293271",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-8.jpg?v=1768293271",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-5.jpg?v=1768293271",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-12.jpg?v=1768293271",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-13.jpg?v=1768293271",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-9.jpg?v=1768293272",
                ].map((src, index) => (
                  <div
                    key={`set1-${index}`}
                    className="relative w-[200px] flex-shrink-0 overflow-hidden md:w-[300px]"
                  >
                    <Image
                      src={src}
                      alt={`Disruptor ${index + 1}`}
                      width={1200}
                      height={1600}
                      className="h-auto w-full object-cover"
                      sizes="(min-width: 1024px) 450px, (min-width: 768px) 300px, 200px"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Set 2 (duplicate) */}
              <div className="flex" aria-hidden="true">
                {[
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-11.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-3.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-10.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-14.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-6.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-1.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-2.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-4.jpg?v=1768293272",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-15.jpg?v=1768293271",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-8.jpg?v=1768293271",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-5.jpg?v=1768293271",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-12.jpg?v=1768293271",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-13.jpg?v=1768293271",
                  "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Disruptor-9.jpg?v=1768293272",
                ].map((src, index) => (
                  <div
                    key={`set2-${index}`}
                    className="relative w-[200px] flex-shrink-0 overflow-hidden md:w-[300px]"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={1200}
                      height={1600}
                      className="h-auto w.full object-cover"
                      sizes="(min-width: 1024px) 450px, (min-width: 768px) 300px, 200px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Musclespan Button */}
        <div className="mx-auto max-w-7xl px-4 md:px-4 pt-6">
          <MusclespanButton />
        </div>
      </div>

      {/* VS-01 L. crispatus Section */}
      <div className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-4">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] items-center justify-center">
            {/* Left: Copy */}
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-wider text-neutral-500">
                Built on Celagenex’s Research
              </p>
              <h2 className="mb-6 text-[1.5rem] leading-tight text-[#2E4B2D] md:text-[2.5rem]">
                MP M3™ emerged from mitochondrial health discoveries of
                Urolithin A, Spermidine, and S‑Allyl Cysteine strains that
                defend the muscle-span biome from aging, stress, and metabolic
                imbalances.
              </h2>
              {/* M3 History Button */}
              <M3HistoryButton />
            </div>

            {/* Right: Image */}
            <div className="flex flex-col justify-center items-center">
              <div className="relative aspect-square w-full max-w-[420px] md:max-w-[640px] lg:max-w-[720px]">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/pill-finger-extra-close-up-white-pill-extra-macro-view.png?v=1768920817"
                  alt="L. crispatus culture in petri dish"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 500px, (min-width: 768px) 400px, 324px"
                />
              </div>
              <p className="mt-4 text-xs text-neutral-500 text-center">
                (Fig 1. Our proprietary MP M3 ™) (+ Muscle Mitochondria
                Discoveries)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* VS-01 vaginal synbiotic validation section */}
      <div className="w-full bg-[#E4EFE8] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            {/* Left: Large copy */}
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#2E4B2D]">
                Patented MP M3™ Delivery
              </p>
              <h2 className="text-[1.7rem] leading-tight text-[#2E4B2D] md:text-[2.6rem] lg:text-[3rem]">
                M3™ delivers patented, bioavailable actives with 95%+ cellular
                uptake, ensuring mitochondrial, muscle, and brain targets
                receive full clinical doses intact—unlike standard capsules that
                lose 70–90% in digestion.
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
            <h2 className="text-3xl  leading-tight text-[#2E4B2D] md:text-4xl lg:text-5xl">
              Why M3 is Superior to NMN
            </h2>
            <p className="text-base leading-relaxed text-[#2E4B2D] md:text-lg">
              M3 prioritizes mitochondrial quality (mitophagy biology) with
              human RCT signals in muscle endurance + mitochondrial biomarkers,
              while NMN primarily boosts blood NAD+ with mixed/limited
              functional signals and no meaningful body-composition change.​
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
          <h2 className="mt-5 max-w-3xl text-sm font-medium leading-tight text-[#1E2A1E] md:text-md">
            Results from randomized, double-blind, placebo-controlled trials on
            M3 key ingredient Urolithin A:
          </h2>

          {/* Stats row */}
          <div className="mt-12">
            <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center md:gap-0">
              {/* Stat 1 */}
              <div className="flex items-start gap-2">
                <div className="text-[64px]  text-[#1E2A1E] md:text-[80px]">
                  90%
                </div>
                <p className="max-w-xs text-[15px] leading-relaxed text-[#2F3B2F] md:text-[16px]">
                  Of participants established stable mitochondrial function
                  (reduced acylcarnitines/ceramides)
                </p>
              </div>

              {/* Divider 1 */}
              <div className="hidden h-16 w-px bg-[#1E2A1E]/15 md:mx-10 md:block" />

              {/* Stat 2 */}
              <div className="flex items-center gap-2">
                <div className="text-[64px]  text-[#1E2A1E] md:text-[80px]">
                  10x
                </div>
                <p className="max-w-xs text-[15px] leading-relaxed text-[#2F3B2F] md:text-[16px]">
                  Increase in mitophagy markers within 21 days use
                </p>
              </div>

              {/* Divider 2 */}
              <div className="hidden h-16 w-px bg-[#1E2A1E]/15 md:mx-10 md:block" />

              {/* Stat 3 */}
              <div className="flex items-start gap-6">
                <div className="text-[64px]  leading-none text-[#1E2A1E] md:text-[80px]">
                  100%
                </div>
                <p className="max-w-xs text-[15px] leading-relaxed text-[#2F3B2F] md:text-[16px]">
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

      {/* Rigorous Testing Section */}
      <div className="w-full bg-[#F7F8F2] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-4">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1.5fr_2.5fr] md:items-center">
            {/* Left: Title and Description */}
            <div>
              <h2 className="mb-4 text-[1.5rem]  leading-tight text-[#2E4B2D] md:text-[2.5rem]">
                Rigorous testing that sets a higher standard.{" "}
              </h2>
              <p className="text-base leading-relaxed text-[#2E4B2D] md:text-lg">
                MUSCULAR PRO is screened as a full formula for identity, purity,
                contaminants, and performance—because what’s not in your
                supplement matters too.​
              </p>
            </div>

            {/* Right: Three Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3">
              {/* Card 1: Clinically Tested */}
              <div className="rounded-xl bg-white p-6 flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/ClinicallyTested_9127921444987761.png?v=1768303365"
                    alt="Clinically Tested"
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-[#2E4B2D]">
                  Quality standards{" "}
                </p>
              </div>

              {/* Card 2: Science Backed */}
              <div className="rounded-xl bg-white p-6 flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/ScienceBacked_5257260533781933.png?v=1768303362"
                    alt="Science Backed"
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-[#2E4B2D]">
                  Purity & contamination{" "}
                </p>
              </div>

              {/* Card 3: Well Tolerated */}
              <div className="rounded-xl bg-white p-6 flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Well-Tolerated_07587342185462598.png?v=1768303359"
                    alt="Well Tolerated"
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-[#2E4B2D]">
                  Microbiological safety{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQSection />

      <CTASection />
      <Footer />
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
