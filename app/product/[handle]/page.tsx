import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GridTileImage } from "components/grid/tile";
import Footer from "components/layout/footer";
import { Gallery } from "components/product/gallery";
import { ProductDescription } from "components/product/product-description";
import { HIDDEN_PRODUCT_TAG } from "lib/constants";
import { getProduct, getProductRecommendations } from "lib/shopify";
import { Image as ShopifyImage } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

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
      <div className="mx-auto max-w-8xl px-4 py-8 md:px-6 lg:px-8">
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

      <div className="relative mx-auto max-w-8xl px-4 md:px-6 lg:px-8">
        {/* Rounded Image Container */}
        <div className="relative overflow-hidden rounded-[32px]">
          {/* Background Image */}
          <div className="relative h-[500px] w-full md:h-[480px] lg:h-[500px]">
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
                Feel the difference of a truly healthy gut.
              </h2>
            </div>

            {/* Bottom glass panel  moved slightly up */}
            <div className="absolute inset-x-4 bottom-3 md:inset-x-6 md:bottom-4 lg:inset-x-8 lg:bottom-5">
              {/* Mobile: Horizontal scrollable slider */}
              <div className="flex gap-4 overflow-x-auto pb-2 md:hidden snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {/* Item 1 */}
                <div className="flex min-w-[85%] flex-col gap-3 rounded-2xl bg-white/22 backdrop-blur-md ring-1 ring-white/15 p-6 snap-center">
                  <div className="h-12 w-12">
                    <img
                      src="https://assets.embeddables.com/GutImmuneHealth_40941000741621136.png"
                      alt="Diverse Probiotic Strains"
                      className="h-full w-full object-contain opacity-95"
                    />
                  </div>
                  <h3 className="text-white text-xl font-semibold leading-snug">
                    Diverse Probiotic Strains
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    24 strains support microbial diversity, the foundation of a
                    healthy gut.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex min-w-[85%] flex-col gap-3 rounded-2xl bg-white/22 backdrop-blur-md ring-1 ring-white/15 p-6 snap-center">
                  <div className="h-12 w-12">
                    <img
                      src="https://assets.embeddables.com/ViaCap_6220418137893818.png"
                      alt="Engineered to Survive"
                      className="h-full w-full object-contain opacity-95"
                    />
                  </div>
                  <h3 className="text-white text-xl font-semibold leading-snug">
                    Engineered to Survive
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    ViaCap® delivery system safeguards probiotics all the way
                    to the colon.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex min-w-[85%] flex-col gap-3 rounded-2xl bg-white/22 backdrop-blur-md ring-1 ring-white/15 p-6 snap-center">
                  <div className="h-12 w-12">
                    <img
                      src="https://assets.embeddables.com/BeneficialBacteria_5107727413304503.png"
                      alt="Feeds Good Gut Microbes"
                      className="h-full w-full object-contain opacity-95"
                    />
                  </div>
                  <h3 className="text-white text-xl font-semibold leading-snug">
                    Feeds Good Gut Microbes
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    Antioxidant-promoting prebiotic feeds beneficial gut
                    microbes.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex min-w-[85%] flex-col gap-3 rounded-2xl bg-white/22 backdrop-blur-md ring-1 ring-white/15 p-6 snap-center">
                  <div className="h-12 w-12">
                    <img
                      src="https://assets.embeddables.com/ClinicallyTested_11926256560900439.png"
                      alt="Proven in 4 Clinical Trials"
                      className="h-full w-full object-contain opacity-95"
                    />
                  </div>
                  <h3 className="text-white text-xl font-semibold leading-snug">
                    Proven in 4 Clinical Trials
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    Scientifically validated in four, gold-standard clinical
                    trials.
                  </p>
                </div>
              </div>

              {/* Desktop: Grid layout */}
              <div className="hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
                {/* Item 1 */}
                <div className="flex flex-col gap-3 rounded-2xl bg-white/22 backdrop-blur-md ring-1 ring-white/15 p-6 md:p-8">
                  <div className="h-12 w-12">
                    <img
                      src="https://assets.embeddables.com/GutImmuneHealth_40941000741621136.png"
                      alt="Diverse Probiotic Strains"
                      className="h-full w-full object-contain opacity-95"
                    />
                  </div>
                  <h3 className="text-white text-xl font-semibold leading-snug">
                    Diverse Probiotic Strains
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    24 strains support microbial diversity, the foundation of a
                    healthy gut.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col gap-3 rounded-2xl bg-white/22 backdrop-blur-md ring-1 ring-white/15 p-6 md:p-8">
                  <div className="h-12 w-12">
                    <img
                      src="https://assets.embeddables.com/ViaCap_6220418137893818.png"
                      alt="Engineered to Survive"
                      className="h-full w-full object-contain opacity-95"
                    />
                  </div>
                  <h3 className="text-white text-xl font-semibold leading-snug">
                    Engineered to Survive
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    ViaCap® delivery system safeguards probiotics all the way
                    to the colon.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col gap-3 rounded-2xl bg-white/22 backdrop-blur-md ring-1 ring-white/15 p-6 md:p-8">
                  <div className="h-12 w-12">
                    <img
                      src="https://assets.embeddables.com/BeneficialBacteria_5107727413304503.png"
                      alt="Feeds Good Gut Microbes"
                      className="h-full w-full object-contain opacity-95"
                    />
                  </div>
                  <h3 className="text-white text-xl font-semibold leading-snug">
                    Feeds Good Gut Microbes
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    Antioxidant-promoting prebiotic feeds beneficial gut
                    microbes.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col gap-3 rounded-2xl bg-white/22 backdrop-blur-md ring-1 ring-white/15 p-6 md:p-8">
                  <div className="h-12 w-12">
                    <img
                      src="https://assets.embeddables.com/ClinicallyTested_11926256560900439.png"
                      alt="Proven in 4 Clinical Trials"
                      className="h-full w-full object-contain opacity-95"
                    />
                  </div>
                  <h3 className="text-white text-xl font-semibold leading-snug">
                    Proven in 4 Clinical Trials
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    Scientifically validated in four, gold-standard clinical
                    trials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ViaCap Technology Section */}
      <div className="relative mx-auto max-w-8xl px-4 pt-6 pb-8 md:px-8 md:pt-4 md:pb-4 ">
        <div className="grid grid-cols-1 gap-4 overflow-hidden rounded-[32px] lg:grid-cols-[1fr_3fr]">
          {/* Left Section: Product Display */}
          <div className="relative overflow-hidden rounded-[32px]">
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
          <div className="flex flex-col justify-center rounded-[32px] bg-[#1F3A1F] p-6 md:p-8 lg:p-10">
            {/* Main Headline */}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F7F8F2] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1.35fr] lg:items-center">
            {/* LEFT: Timeline + bullets */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[10px] top-2 hidden h-[calc(100%-8px)] w-px bg-[#2E4B2D]/25 sm:block" />

              <div className="space-y-10">
                {/* Item 1 */}
                <div className="relative pl-0 sm:pl-8">
                  {/* Dot */}
                  <div className="absolute left-[6px] top-2 hidden h-2.5 w-2.5 rounded-full bg-[#2E4B2D] sm:block" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#2E4B2D] px-3 py-1 text-sm font-semibold tracking-wide text-white">
                      7 Days
                    </span>
                    <h3 className="text-lg font-semibold text-black">
                      Reduces Bloating and Gas*
                    </h3>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed text-neutral-800">
                    <li>Clinically proven to reduce bloating</li>
                    <li>Alleviates excess gas</li>
                    <li>Eases digestive discomfort</li>
                  </ul>
                </div>

                {/* Item 2 */}
                <div className="relative pl-0 sm:pl-8">
                  <div className="absolute left-[6px] top-2 hidden h-2.5 w-2.5 rounded-full bg-[#2E4B2D] sm:block" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#2E4B2D] px-3 py-1 text-sm font-semibold tracking-wide text-white">
                      2 Weeks
                    </span>
                    <h3 className="text-lg font-semibold text-black">
                      Supports Healthy Regularity*
                    </h3>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed text-neutral-800">
                    <li>Promotes daily poops</li>
                    <li>Reduces occasional constipation</li>
                    <li>Makes pooping easier</li>
                  </ul>
                </div>

                {/* Item 3 */}
                <div className="relative pl-0 sm:pl-8">
                  <div className="absolute left-[6px] top-2 hidden h-2.5 w-2.5 rounded-full bg-[#2E4B2D] sm:block" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#2E4B2D] px-3 py-1 text-sm font-semibold tracking-wide text-white">
                      4 Weeks
                    </span>
                    <h3 className="text-lg font-semibold text-black">
                      Smooths + Clears Skin*
                    </h3>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed text-neutral-800">
                    <li>Supports clear, healthy skin</li>
                    <li>Reduces wrinkles and signs of aging</li>
                    <li>Enhances the skin barrier</li>
                  </ul>
                </div>

                {/* Item 4 */}
                <div className="relative pl-0 sm:pl-8">
                  <div className="absolute left-[6px] top-2 hidden h-2.5 w-2.5 rounded-full bg-[#2E4B2D] sm:block" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#2E4B2D] px-3 py-1 text-sm font-semibold tracking-wide text-white">
                      3 Months
                    </span>
                    <h3 className="text-lg font-semibold text-black">
                      Immune + Heart Support*
                    </h3>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed text-neutral-800">
                    <li>Promotes immune system resilience</li>
                    <li>Balances healthy cholesterol</li>
                    <li>Supports healthy aging</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT: Video + supporting images */}
            <div className="w-full">
              <div className="space-y-8">
                {/* Top: Video card */}
                <div className="relative overflow-hidden rounded-xl bg-[#E6E9DF]">
                  <div className="relative  w-full">
                    <video
                      className="h-full w-full object-cover"
                      src="https://cdn.shopify.com/videos/c/o/v/cf3b06fbdba84af6848cf9a6b8f8e9fa.mp4"
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
                        src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/SecondaryImage2_24881398601081273.png?v=1768288728"
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
                        src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/SecondaryImage3_3148052585373011.png?v=1768288725"
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
      <div className="w-full bg-white">
        <div className="max-w-6xl px-4 md:px-6">
          <p className="mb-8 text-[2rem] md:text-[3rem] leading-tight text-[#2E4B2D]">
            Day-to-day life can disrupt the balance of your vaginal microbiome,
            depleting its critical super defender—
            <em>Lactobacillus crispatus</em>.
          </p>

          {/* Tag rows */}
          <div className="flex-col gap-3 hidden md:flex">
            {/* First row of tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "Menstruation",
                "Diet",
                "Stress",
                "Past Pregnancy",
                "Exercise",
                "Swimming",
                "Sex",
                "Sex Toys",
                "Condom Use",
                "Oral Sex",
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
              {[
                "Gels and Lubricants",
                "Certain Contraceptives",
                "Certain Prescriptions",
                "Certain Cleansers",
                "Feminine Hygiene Products",
              ].map((tag) => (
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

      <div className="w-full overflow-hidden bg-white py-8 md:py-12">
        {/* Mobile: cross-fade slider (one image at a time) with overlay tags */}
        <div className="relative w-full overflow-hidden aspect-[3/4] md:hidden">
          {/* Tags overlay */}
          <div className="relative z-10 flex flex-wrap gap-2 px-4 pt-4">
            {[
              "Menstruation",
              "Diet",
              "Stress",
              "Past Pregnancy",
              "Exercise",
              "Swimming",
              "Sex",
              "Sex Toys",
              "Condom Use",
              "Oral Sex",
              "Gels and Lubricants",
              "Certain Contraceptives",
              "Certain Prescriptions",
              "Certain Cleansers",
              "Feminine Hygiene Products",
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
      </div>

      {/* VS-01 L. crispatus Section */}
      <div className="w-full bg-white py-8 md:py-10">
        <div className="mx-auto max-w-8xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
            {/* Left: Copy */}
            <div>
              <p className="mb-6 text-xs font.medium uppercase tracking-wider text-neutral-500">
                BUILT ON DR. JACQUES RAVEL&apos;S RESEARCH
              </p>
              <h2 className="text-[1.5rem] leading-tight text-[#2E4B2D] md:text-[2.5rem]">
                VS-01™ emerged from the discovery that specific strains of{" "}
                <em className="italic">L. crispatus</em> defend the vaginal
                microbiome from pH disruptions and imbalances.
              </h2>
            </div>

            {/* Right: Petri dish image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative aspect-square w.full max-w-[324px] md:max-w-[500px] lg:max-w-[600px]">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/lcrispatuspdp.webp?v=1768298495"
                  alt="L. crispatus culture in petri dish"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 500px, (min-width: 768px) 400px, 324px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VS-01 vaginal synbiotic validation section */}
      <div className="w-full bg-[#E4EFE8] py-12 md:py-16">
        <div className="mx-auto max-w-8xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            {/* Left: Large copy */}
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[#2E4B2D]">
                An evolution in vaginal health
              </p>
              <h2 className="text-[1.7rem] leading-tight text-[#2E4B2D] md:text-[2.6rem] lg:text-[3rem]">
                VS-01™ is the first and only vaginal synbiotic clinically
                validated to optimize your vaginal microbiome with three
                proprietary <em className="italic">L. crispatus</em> probiotic
                strains.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg.white">
        <div className="mx-auto max-w-8xl px-4 py-8 md:py-10">
          {/* Top label */}
          <p className="text-xs font-semibold tracking-[0.18em] text-[#7B8B7A]">
            CLINICALLY VALIDATED EFFICACY
          </p>

          {/* Heading */}
          <h2 className="mt-5 max-w-3xl text-sm font-medium leading-tight text-[#1E2A1E] md:text-md">
            Results from a randomized, double-
            <br className="hidden md:block" />
            blind, placebo-controlled clinical trial:
          </h2>

          {/* Stats row */}
          <div className="mt-12">
            <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center md:gap-0">
              {/* Stat 1 */}
              <div className="flex items-start gap-6">
                <div className="text-[64px]  leading-none text-[#1E2A1E] md:text-[80px]">
                  90%
                </div>
                <p className="max-w-xs text-[15px] leading-relaxed text-[#2F3B2F] md:text-[16px]">
                  Of participants established an optimal vaginal microbiome
                  dominated by{" "}
                  <em className="font-medium italic">L. crispatus</em>
                </p>
              </div>

              {/* Divider 1 */}
              <div className="hidden h-16 w-px bg-[#1E2A1E]/15 md:mx-10 md:block" />

              {/* Stat 2 */}
              <div className="flex items-start gap-6">
                <div className="text-[64px]  leading-none text-[#1E2A1E] md:text-[80px]">
                  10x
                </div>
                <p className="max-w-xs text-[15px] leading-relaxed text-[#2F3B2F] md:text-[16px]">
                  Increase of{" "}
                  <em className="font-medium italic">L. crispatus</em> abundance
                  in participants within 21 days of use
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
                  Of participants maintained an optimal vaginal pH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rigorous Testing Section */}
      <div className="w-full bg-[#F7F8F2] py-8 md:py-10">
        <div className="mx-auto max-w-8xl px-4 md:px-6 ">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1.5fr_2.5fr] md:items-center">
            {/* Left: Title and Description */}
            <div>
              <h2 className="mb-4 text-[1.5rem]  leading-tight text-[#2E4B2D] md:text-[2.5rem]">
                Rigorous testing that sets a higher standard.
              </h2>
              <p className="text-base leading-relaxed text-[#2E4B2D] md:text-lg">
                DM-02™ is screened as a full formula for allergens,
                contaminants, and pesticides—because what&apos;s not in your
                supplement matters, too.
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
                  Formulated without gluten, soy, dairy and corn
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
                  Tested for heavy metals and free of glyphosate and AMPA
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
                  Formulated to comply with Prop. 65
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
