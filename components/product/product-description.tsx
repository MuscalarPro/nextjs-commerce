"use client";

import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { useState } from "react";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  const [benefitsOpen, setBenefitsOpen] = useState(true);
  const [ingredientsOpen, setIngredientsOpen] = useState(false);
  const [clinicalTrialsOpen, setClinicalTrialsOpen] = useState(false);
  const [ingredientsPanelOpen, setIngredientsPanelOpen] = useState(false);

  // Extract product code from title if it exists (e.g., "DS-01" from "DS-01 Daily Synbiotic")
  const titleParts = product.title.split(" ");
  const productCode = titleParts[0]?.match(/^[A-Z0-9-]+®?$/)
    ? titleParts[0]
    : null;
  const productName = productCode
    ? titleParts.slice(1).join(" ")
    : product.title;

  return (
    <div className="flex flex-col mt-20">
      {/* Product Badge and Title */}
      <div className="mb-4 flex flex-col">
        <div className="mb-2 flex items-center gap-2">
          {productCode && (
            <span className="rounded-md border-2 border-black px-2 py-1 text-sm font-medium text-black">
              {productCode}
            </span>
          )}
          <h1 className="text-3xl font-semibold text-black md:text-4xl">
            {productName}
          </h1>
        </div>
      </div>
      {/* Key Selling Point and Rating */}
      <div className="mb-4 flex items-center gap-4">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold text-black">#1</span>
          <span className="text-sm text-black">Digestive Health Probiotic</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-4 w-4 fill-black" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-black">4.8 • 11,419 Reviews</span>
        </div>
      </div>
      {/* Product Description */}
      {product.descriptionHtml ? (
        <div className="mb-6">
          <Prose
            className="text-base leading-relaxed text-black"
            html={product.descriptionHtml}
          />
        </div>
      ) : null}
      {/* Variant Selector */}
      <div className="mb-2">
        <VariantSelector
          options={product.options}
          variants={product.variants}
        />
      </div>
      {/* Price */}
      <div className="mb-2">
        <div className="text-xl font-normal text-black">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      {/* Subscription Info */}
      <p className="mb-6 text-sm text-black">
        30-day supply delivered monthly. Pause or cancel anytime.
      </p>
      {/* Add to Cart Button */}
      <div className="mb-4">
        <AddToCart product={product} />
      </div>
      {/* Guarantee and Shipping */}
      <p className="mb-6 text-xs text-neutral-500 text-center">
        30-day risk-free guarantee. Free US shipping.
      </p>
      {/* Divider */}
      <hr className="mb-6 border-neutral-200" />
      {/* Benefits Accordion */}
      <div className="mb-4 border-b border-neutral-200 pb-4">
        <button
          onClick={() => setBenefitsOpen(!benefitsOpen)}
          className="flex w-full items-center justify-between text-left transition-colors"
        >
          <h2 className="text-lg font-semibold text-black">Benefits*</h2>
          <span className="text-lg font-light text-black transition-transform duration-300">
            {benefitsOpen ? "−" : "+"}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            benefitsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3">
            <ul className="space-y-2 text-sm text-black">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Reduces bloating and gas within 1 week</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Improves regularity and relief from GI distress</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Supports immune, skin, and heart health</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Proven in 4 double-blind clinical trials</span>
              </li>
            </ul>
            <button
              onClick={() => setClinicalTrialsOpen(true)}
              className="mt-2 inline-block text-sm text-black underline cursor-pointer"
            >
              View Clinical Trials →
            </button>
          </div>
        </div>
      </div>
      {/* Ingredients Accordion */}
      <div className="mb-6 border-b border-neutral-200 pb-4">
        <button
          onClick={() => setIngredientsOpen(!ingredientsOpen)}
          className="flex w-full items-center justify-between text-left transition-colors"
        >
          <h2 className="text-lg font-semibold text-black">Ingredients</h2>
          <span className="text-lg font-light text-black transition-transform duration-300">
            {ingredientsOpen ? "−" : "+"}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            ingredientsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3">
            <ul className="mb-4 space-y-2 text-sm text-black">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>24 strains, 53.6 billion AFU</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Third-party tested for quality, pesticides, and allergens
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Vegan and low FODMAP diet compatible</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>No refrigeration required</span>
              </li>
            </ul>
            <button
              onClick={() => setIngredientsPanelOpen(true)}
              className="mt-2 inline-block text-sm text-black underline cursor-pointer"
            >
              View Strains + Ingredients →
            </button>
          </div>
        </div>
      </div>
      {/* Bundle Offer Card */}
      <div className="rounded-lg bg-green-50 p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          {/* Product Images */}
          <div className="flex-shrink-0">
            <div className="relative flex items-end gap-2">
              {/* Larger jar (DS-01) - positioned behind and to the left */}
              <div className="relative h-40 w-14 md:h-24 md:w-16">
                <img
                  src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Bundle.png?v=1768920360"
                  alt="DS-01 Daily Synbiotic and DM-02 Daily Multivitamin bundle"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="mb-1 text-base font-bold text-green-800">
              Save 40% When You Bundle
            </h3>
            <p className="mb-2 text-sm text-green-800">
              Add DM-02™ Daily Multivitamin and save 40% on your entire order.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-green-800">$53.99</span>
                <span className="text-sm text-neutral-500 line-through">
                  $89.98
                </span>
              </div>
              <button className="rounded-lg border-2 border-green-800 px-4 py-2 text-sm font-medium text-green-800 transition-colors hover:bg-green-800 hover:text-white">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-neutral-500">
        ‡Source: SPINS, Combined Amazon + Target Sales data, Last 12 weeks
        ending in November 2025.
      </p>

      {/* Clinical Trials Side Panel */}
      {clinicalTrialsOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity"
            onClick={() => setClinicalTrialsOpen(false)}
          />
          {/* Side Panel */}
          <div className="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl transition-transform md:w-[500px] lg:w-[600px]">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-[#F7F8F2]">
              <div className="p-6 md:p-8 lg:p-10 pb-4">
                {/* Header with Close Button */}
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-black md:text-3xl">
                    {productCode || product.title}
                  </h2>
                  <button
                    onClick={() => setClinicalTrialsOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-black/10"
                    aria-label="Close"
                  >
                    <svg
                      className="h-6 w-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Header Divider */}
                <hr className="border-t border-black/20" />
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 md:p-8 lg:p-10 pt-4">
                {/* Clinical Trials Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Clinical Trials
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Only about 16% of supplements are clinically tested.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    {productCode || product.title} has been clinically proven in
                    4 gold-standard, double-blind placebo controlled clinical
                    trials.
                  </p>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    In addition, {productCode || product.title}'s probiotic
                    strains have been validated in 10, dose-matched
                    gold-standard clinical trials.
                  </p>
                </div>

                {/* The Impact of Clinical Proof Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    The Impact of Clinical Proof
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Double-blind, randomized, placebo-controlled trials (DBRCTs)
                    are the gold standard in scientific research for various
                    reasons, including:
                  </p>
                  <ul className="mb-4 space-y-2 pl-6 text-sm leading-relaxed text-black md:text-base">
                    <li className="list-disc">Bias elimination</li>
                    <li className="list-disc">Control for placebo-effect</li>
                    <li className="list-disc">Validated efficacy</li>
                    <li className="list-disc">Regulatory compliance</li>
                  </ul>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    By testing {productCode || product.title} as a full
                    formulation, the entire product is meticulously inspected
                    and validated for safety, tolerability, and efficacy.
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Digestive Health Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Digestive Health
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    {productCode || product.title} is formulated to improve the
                    frequency of your bowel movements, as well as increase stool
                    consistency and comfort during evacuation.
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Clinical Trial Results
                    </h4>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      In a 30-day study on select {productCode || product.title}{" "}
                      strains, adults experiencing gastrointestinal troubles saw
                      significant improvement in bowel movement frequency,
                      consistency, and ease of defecation, compared to placebo.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-black md:text-base">
                      {productCode || product.title}'s strains also demonstrated
                      improvements in burning, discomfort, sense of complete
                      emptying, and abdominal bloating.
                    </p>
                  </div>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Immune Health Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Immune Health
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    {productCode || product.title} promotes a strong, resilient
                    immune system. Dedicated strains support the gut-immune
                    axis, which allows these systems to communicate effectively
                    and strengthen overall immune function.
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Clinical Trial Results
                    </h4>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      In a 12-week study using select{" "}
                      {productCode || product.title} strains, participants
                      showed a reduction in microbial translocation across the
                      intestinal epithelial barrier and favorable circulating
                      Th17:Treg and Th1:Th2 ratios. These findings indicate an
                      appropriately responsive immunologic profile.
                    </p>
                  </div>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Skin Health Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Skin Health
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    {productCode || product.title} is formulated with dedicated
                    strains that support the gut-skin axis, which plays a key
                    role in regulating inflammatory pathways between the gut and
                    skin.
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Clinical Trial Results
                    </h4>
                    <p className="mb-2 text-sm leading-relaxed text-black md:text-base">
                      A 4-week study found {productCode || product.title}'s
                      prebiotic significantly reduced wrinkle severity and
                      demonstrated an overall shift in the skin microbiome,
                      indicating a beneficial effect on the gut-skin axis.
                    </p>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      A 12-week study of adults with functionally and
                      aesthetically bothersome skin showed{" "}
                      {productCode || product.title} strains not only improved
                      skin appearance, but also raised quality of life scores.
                    </p>
                  </div>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Heart Health Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Heart Health
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    {productCode || product.title} is formulated to help
                    maintain healthy, in-range cholesterol and blood pressure
                    levels. Select strains promote the production of beneficial
                    metabolites in the gut, which supports healthy liver
                    function and cholesterol balance.
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Clinical Trial Results
                    </h4>
                    <p className="mb-2 text-sm leading-relaxed text-black md:text-base">
                      In a 12-week study, {productCode || product.title} strains
                      helped probiotic group participants maintain healthy,
                      baseline LDL-C levels, compared to a placebo group that
                      experienced LDL-C increases.
                    </p>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      Additionally, the probiotic group demonstrated
                      reinforcement of HDL-cholesterol and evidence of healthy
                      triglyceride management within the 6-12 week timeframe.
                    </p>
                  </div>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Gut Barrier Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Gut Barrier
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    {productCode || product.title} is formulated to strengthen
                    and support a resilient gut barrier. Select strains
                    replenish microflora in the gut in order to help rebuild a
                    weakened microbiome.
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Clinical Trial Results
                    </h4>
                    <p className="mb-2 text-sm leading-relaxed text-black md:text-base">
                      In a 12-week study using select{" "}
                      {productCode || product.title} strains, adults
                      experiencing increased gut permeability showed significant
                      reductions in circulating lipopolysaccharide (LPS), a
                      marker of increased epithelial permeability, the cells
                      which comprise the gut barrier.
                    </p>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      {productCode || product.title} significantly reduced
                      urinary lactulose excretion starting at 7 days and after 3
                      months of ongoing {productCode || product.title} use,
                      compared to the placebo group— indicating both immediate
                      and continued support for gut barrier integrity and
                      function.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Ingredients Side Panel */}
      {ingredientsPanelOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity"
            onClick={() => setIngredientsPanelOpen(false)}
          />
          {/* Side Panel */}
          <div className="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl transition-transform md:w-[500px] lg:w-[600px]">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-[#F7F8F2]">
              <div className="p-6 md:p-8 lg:p-10 pb-4">
                {/* Header with Close Button */}
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-black md:text-3xl">
                    Strains + Ingredients
                  </h2>
                  <button
                    onClick={() => setIngredientsPanelOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-black/10"
                    aria-label="Close"
                  >
                    <svg
                      className="h-6 w-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Header Divider */}
                <hr className="border-t border-black/20" />
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 md:p-8 lg:p-10 pt-4">
                {/* Overview Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Overview
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    {productCode || product.title} contains 24 carefully
                    selected probiotic strains with 53.6 billion AFU (Active
                    Fluorescent Units) per serving.
                  </p>
                  <ul className="mb-4 space-y-2 pl-6 text-sm leading-relaxed text-black md:text-base">
                    <li className="list-disc">
                      Third-party tested for quality, pesticides, and allergens
                    </li>
                    <li className="list-disc">
                      Vegan and low FODMAP diet compatible
                    </li>
                    <li className="list-disc">No refrigeration required</li>
                  </ul>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Probiotic Strains Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Probiotic Strains
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Our 24-strain probiotic blend includes a diverse range of
                    beneficial bacteria that work synergistically to support gut
                    health, immune function, and overall wellness.
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Lactobacillus Strains
                    </h4>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      Includes various Lactobacillus species such as L.
                      plantarum, L. reuteri, and L. acidophilus, which support
                      digestive health and nutrient absorption.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Bifidobacterium Strains
                    </h4>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      Contains multiple Bifidobacterium species including B.
                      breve, B. longum, and B. bifidum, which help maintain a
                      healthy gut microbiome balance.
                    </p>
                  </div>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Prebiotic Blend Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Prebiotic Blend
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    {productCode || product.title} includes a proprietary
                    prebiotic blend that feeds beneficial gut bacteria and
                    supports their growth and activity.
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Quality & Testing Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Quality & Testing
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    All ingredients undergo rigorous third-party testing to
                    ensure purity, potency, and safety.
                  </p>
                  <ul className="mb-4 space-y-2 pl-6 text-sm leading-relaxed text-black md:text-base">
                    <li className="list-disc">
                      Tested for pesticides and heavy metals
                    </li>
                    <li className="list-disc">
                      Allergen testing (gluten, soy, dairy, nuts)
                    </li>
                    <li className="list-disc">
                      Potency verification (AFU count)
                    </li>
                    <li className="list-disc">Microbial safety testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
