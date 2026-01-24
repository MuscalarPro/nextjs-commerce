"use client";

import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { useState, useEffect } from "react";
import { VariantSelector } from "./variant-selector";

export function BenefitsHeading() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const event = new CustomEvent("openClinicalEvidence");
    window.dispatchEvent(event);
  };

  return (
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-3xl text-[#2E4B2D] md:text-4xl">
        Muscalar Pro M3™ difference: <br /> Benefits that build over time
      </h2>
      <p className="mb-4 text-base text-neutral-700 md:text-lg">
        Results you can feel in as little as 7 days.*
      </p>
      <button
        onClick={handleClick}
        className="inline-block text-base font-medium text-[#2E4B2D] underline transition-colors hover:text-[#1E2A1E] cursor-pointer"
      >
        See Clinical Evidence
      </button>
    </div>
  );
}

export function M3HistoryButton() {
  const handleClick = () => {
    const event = new CustomEvent("openM3History");
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 text-sm text-neutral-600 hover:text-[#2E4B2D] transition-colors"
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-400 text-neutral-600">
        <span className="text-xs">+</span>
      </div>
      <span>M3 History</span>
    </button>
  );
}

export function MusclespanButton() {
  const handleClick = () => {
    const event = new CustomEvent("openMusclespan");
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 text-sm text-[#2E4B2D] hover:text-[#1E2A1E] transition-colors"
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2E4B2D] text-[#2E4B2D]">
        <span className="text-xs">+</span>
      </div>
      <span>What is Musclespan?</span>
    </button>
  );
}

export function ClinicalResearchButton() {
  const handleClick = () => {
    const event = new CustomEvent("openClinicalResearch");
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 text-sm text-[#2E4B2D] hover:text-[#1E2A1E] transition-colors"
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2E4B2D] text-[#2E4B2D]">
        <span className="text-xs">+</span>
      </div>
      <span>Our Clinical Research</span>
    </button>
  );
}

export function ProductDescription({ product }: { product: Product }) {
  const [benefitsOpen, setBenefitsOpen] = useState(true);
  const [ingredientsOpen, setIngredientsOpen] = useState(false);
  const [clinicalTrialsOpen, setClinicalTrialsOpen] = useState(false);
  const [ingredientsPanelOpen, setIngredientsPanelOpen] = useState(false);
  const [clinicalEvidenceOpen, setClinicalEvidenceOpen] = useState(false);
  const [m3HistoryOpen, setM3HistoryOpen] = useState(false);
  const [musclespanOpen, setMusclespanOpen] = useState(false);
  const [clinicalResearchOpen, setClinicalResearchOpen] = useState(false);

  useEffect(() => {
    const handleOpenClinicalEvidence = () => {
      setClinicalEvidenceOpen(true);
    };
    const handleOpenM3History = () => {
      setM3HistoryOpen(true);
    };
    const handleOpenMusclespan = () => {
      setMusclespanOpen(true);
    };
    const handleOpenClinicalResearch = () => {
      setClinicalResearchOpen(true);
    };
    window.addEventListener("openClinicalEvidence", handleOpenClinicalEvidence);
    window.addEventListener("openM3History", handleOpenM3History);
    window.addEventListener("openMusclespan", handleOpenMusclespan);
    window.addEventListener("openClinicalResearch", handleOpenClinicalResearch);
    return () => {
      window.removeEventListener(
        "openClinicalEvidence",
        handleOpenClinicalEvidence,
      );
      window.removeEventListener("openM3History", handleOpenM3History);
      window.removeEventListener("openMusclespan", handleOpenMusclespan);
      window.removeEventListener(
        "openClinicalResearch",
        handleOpenClinicalResearch,
      );
    };
  }, []);

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
      <div className="mb-4 grid grid-cols-2 items-center">
        <div className="flex items-center gap-2 border-r border-neutral-300 pr-4">
          <span className="text-3xl font-bold text-[#2E4B2D]">#1</span>
          <span className="text-xs leading-tight text-[#2E4B2D]">
            Cellular Energy Muscle Strength Endurance and Brain Health
          </span>
        </div>
        <div className="flex flex-col gap-1 pl-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-4 w-4 fill-[#2E4B2D]"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-sm underline text-[#2E4B2D]">
            4.9 • 100+ Reviews
          </span>
        </div>
      </div>
      {/* Product Description */}
      {product.descriptionHtml ? (
        <div className="mb-2">
          <Prose
            className="text-sm leading-relaxed text-black"
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
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#a638b5] text-white">
          Save 10%
        </span>
      </div>

      <div className="mb-2">
        <div className="text-xl font-normal text-black">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      {/* Subscription Info */}
      <p className="mb-4 text-sm text-black">
        30-day supply delivered monthly. <br /> Pause or cancel anytime.
      </p>
      {/* Add to Cart Button */}
      <div className="mb-2">
        <AddToCart product={product} />
      </div>
      {/* Guarantee and Shipping */}
      <p className="mb-6 text-xs text-neutral-400 text-center">
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
          className={`grid transition-all duration-300 ease-in-out ${
            benefitsOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-3 pb-2">
              <ul className="space-y-2 text-sm text-black">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Peak Human Performance + Musclespan: Enhances overall
                    strength, mobility, and functional longevity by optimizing
                    muscle as the organ of health, aligning with muscle-centric
                    approaches.[library]
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Mitochondrial Health - Autophagy & Mitophagy: Urolithin A
                    activates mitophagy to recycle damaged mitochondria, while
                    Spermidine boosts autophagy for cellular renewal and energy
                    efficiency.[pubmed.ncbi.nlm.nih +2]
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Peak Endurance: Improves aerobic capacity and muscle
                    contractions to fatigue, as shown in randomized trials with
                    Urolithin A supplementation.[jamanetwork +1]
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Superhuman Muscle Strength & Hypertrophy: Boosts muscle
                    strength, endurance, and recovery via mitochondrial upgrades
                    and reduced oxidative stress from the M3 stack.[tandfonline
                    +1]
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Nootropic Intelligence: Supports brain health through
                    neuroprotection, reduced inflammation, and enhanced
                    mitochondrial function in neural tissues.[pmc.ncbi.nlm.nih
                    +1]
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Clinically Proven Ingredients: Patented formula with
                    Urolithin A (up to 1g doses in RCTs)
                  </span>
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
      </div>
      {/* Ingredients Accordion */}
      <div className="mb-8 border-b border-neutral-200 pb-6">
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
          className={`grid transition-all duration-300 ease-in-out ${
            ingredientsOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-3 pb-2">
              <ul className="mb-4 space-y-2 text-sm text-black">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Patented</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Double-Blind Placebo-controlled in Human Clinical Trial
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Urolithin-A 1g</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>S-Allyl Cysteine - 1mg</span>
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
      </div>
      {/* Bundle Offer Card */}
      <div className="rounded-lg bg-green-50 p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          {/* Product Images */}
          <div className="flex-shrink-0">
            <div className="relative flex items-end gap-2">
              {/* Larger jar (DS-01) - positioned behind and to the left */}
              <div className="relative h-56 w-20 md:h-20 md:w-24">
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
            <h3 className="mb-1 text-xs font-bold text-green-800">
              Bundle 12 week subscription + Save 25%
            </h3>
            <p className="mb-2 text-xs text-green-800">
              Muscle is the ultimate organ for longevity Your decode for peak
              human OS
            </p>
            {/* <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-green-800">$53.99</span>
                <span className="text-sm text-neutral-500 line-through">
                  $89.98
                </span>
              </div>
              <button className="rounded-lg border-2 border-green-800 px-4 py-2 text-sm font-medium text-green-800 transition-colors hover:bg-green-800 hover:text-white">
                Add
              </button>
            </div> */}
          </div>
        </div>
      </div>

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
              <div className="p-6">
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
              <div className="p-6">
                {/* Clinical Trials Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Clinical Trials
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Only a fraction of supplements undergo rigorous clinical
                    testing.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Muscalar Pro M3's key ingredient, Urolithin A, is backed by
                    multiple gold-standard, double-blind, placebo-controlled
                    trials (DBRCTs) demonstrating benefits for muscle endurance,
                    strength, and mitochondrial biomarkers.
                  </p>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Individual ingredients like Spermidine and S-Allyl Cysteine
                    show supportive evidence in human and preclinical studies
                    for autophagy and antioxidant effects.
                  </p>
                </div>

                {/* The Impact of Clinical Proof Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    The Impact of Clinical Proof
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Double-blind, randomized, placebo-controlled trials (DBRCTs)
                    eliminate bias, control for placebo effects, validate
                    efficacy, and ensure regulatory compliance.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-black md:text-base">
                    Testing ingredients like Urolithin A as formulated doses
                    inspects safety, tolerability, and real-world benefits for
                    mitochondrial health and performance.
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Peak Endurance Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Peak Endurance
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Muscalar Pro M3 supports enhanced muscle endurance and
                    aerobic capacity via Urolithin A-driven mitophagy.
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Clinical Trial Results
                    </h4>
                    <p className="mb-2 text-sm leading-relaxed text-black md:text-base">
                      In a 4-month DBRCT of 66 older adults (1000 mg Urolithin A
                      daily), participants showed significant increases in
                      muscle contractions until fatigue in hand (FDI: +95 vs +12
                      placebo) and leg (TA: +41 vs +6) at 2 months, with
                      sustained gains at 4 months; 6-min walk improved +61m vs
                      +43m placebo.
                    </p>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      A 4-month DBRCT in middle-aged adults (Urolithin A)
                      reported clinically meaningful gains in peak VO2 and 6-min
                      walk test.
                    </p>
                  </div>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Muscle Strength & Hypertrophy Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Muscle Strength & Hypertrophy
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    M3 promotes muscle strength, recovery, and hypertrophy
                    through mitochondrial efficiency and reduced oxidative
                    stress.
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Clinical Trial Results
                    </h4>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      Middle-aged adults in a 4-month DBRCT gained ~12% muscle
                      strength with Urolithin A; recent athlete trial (8 weeks,
                      resistance training) confirmed endurance, strength, and
                      lower inflammation/oxidative stress.
                    </p>
                  </div>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Mitochondrial Health Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Mitochondrial Health
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Targets autophagy/mitophagy for cellular energy renewal with
                    Urolithin A (mitophagy), Spermidine (autophagy), and S-Allyl
                    Cysteine (antioxidants).
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Clinical Trial Results
                    </h4>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      Urolithin A DBRCTs reduced plasma acylcarnitines/ceramides
                      (mito biomarkers) and CRP (inflammation); Spermidine
                      rescues mitophagy deficits in human cells.
                    </p>
                  </div>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Nootropic Intelligence Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Nootropic Intelligence
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Supports brain health via neuroprotection, lower
                    inflammation, and mito function.
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Clinical Trial Results
                    </h4>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      Spermidine preclinical/human data links autophagy to
                      cognitive resilience; S-Allyl Cysteine shows
                      antidepressant-like effects and anti-aging in neural
                      models.
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
              <div className="p-6">
                {/* Header with Close Button */}
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-black md:text-3xl">
                    Muscalar Pro M3™ Decode Peak Performance
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
              <div className="p-6">
                {/* Ingredients Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Ingredients
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Muscalar Pro M3 is formulated with a patented blend of
                    clinically studied actives for mitochondrial renewal,
                    autophagy, and performance: Urolithin A (500mg), Spermidine
                    (6mg), S-Allyl Cysteine (1mg).
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    60 vegan capsules. Single daily serving. No refrigeration
                    required.
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Patented Formula Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Patented Formula
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Proprietary M3 Stack™ (Urolithin A + Spermidine + S-Allyl
                    Cysteine) in precise doses, protected formulation for
                    synergistic cellular effects (mitophagy + autophagy + redox
                    defense).
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Clinical Trials Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Double-Blind Placebo-Controlled Human Clinical Trials
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Key ingredients validated in strain-specific, dose-matched
                    DBRCTs.
                  </p>
                  <div className="mb-4 space-y-3">
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      <strong>Urolithin A 1g</strong> (matches/exceeds M3 dose):
                      Multiple DBRCTs in adults show muscle endurance (+41-95%
                      contractions to fatigue), strength (~12%), VO2 peak, and
                      mito biomarkers.
                    </p>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      <strong>Spermidine ~6mg</strong>: Phase 1 DBRCT (6mg/day,
                      65+ adults) tests safety/immunity post-vaccine; high-dose
                      trials confirm tolerability.
                    </p>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      <strong>S-Allyl Cysteine 1mg</strong>: Animal DBRCT
                      equivalents (up to 120-250mg/kg) demonstrate
                      neuroprotection/antioxidant effects; human garlic extract
                      trials support bioavailability.
                    </p>
                  </div>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Cellular Energy & Mitophagy Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Cellular Energy & Mitophagy
                  </h3>
                  <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                    Urolithin A 500mg
                  </h4>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Postbiotic mitophagy inducer from ellagitannins, activates
                    mitochondrial recycling for energy/strength. Clinically
                    tested at 1g in middle-aged/older adults.
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Autophagy & Longevity Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Autophagy & Longevity
                  </h3>
                  <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                    Spermidine 6mg (Wheat Germ Extract)
                  </h4>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Caloric restriction mimetic, induces autophagy without
                    muscle loss. Validated in human trials for immune/cognitive
                    resilience.
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Antioxidant Defense & Recovery Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Antioxidant Defense & Recovery
                  </h3>
                  <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                    S-Allyl Cysteine 1mg (Aged Garlic Extract)
                  </h4>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Redox protector, reduces oxidative stress/inflammation.
                    Supports neural/performance recovery in dose-equivalent
                    studies.
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Other Ingredients Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Other Ingredients
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Veg Capsule (HPMC), No Allergens, FSSAI Compliant.
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Safety + Testing Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Safety + Testing
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    M3 undergoes 50+ checkpoints: HPLC/GC-MS potency, heavy
                    metals (ICP-MS), microbiology, label verification.
                  </p>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Vegan | GMP | No Preservatives | Gluten-Free | Non-GMO |
                    Prop. 65 Compliant.
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Supplement Facts Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Supplement Facts
                  </h3>
                  <p className="mb-2 text-sm leading-relaxed text-black md:text-base">
                    Serving Size: 1 Capsule | Servings: 60
                  </p>
                  <p className="mb-2 text-sm leading-relaxed text-black md:text-base">
                    Urolithin A: 500mg* | Spermidine: 6mg* | S-Allyl Cysteine:
                    1mg*
                  </p>
                  <p className="text-xs leading-relaxed text-black md:text-sm">
                    *Daily Value not established
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Clinical Evidence Side Panel */}
      {clinicalEvidenceOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity"
            onClick={() => setClinicalEvidenceOpen(false)}
          />
          {/* Side Panel */}
          <div className="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl transition-transform md:w-[500px] lg:w-[600px]">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-[#F7F8F2]">
              <div className="p-6">
                {/* Header with Close Button */}
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-black md:text-3xl">
                    Muscalar Pro M3™ Decode Peak Performance
                  </h2>
                  <button
                    onClick={() => setClinicalEvidenceOpen(false)}
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
                        strokeCap="round"
                        strokeJoin="round"
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
              <div className="p-6">
                {/* Clinical Trials Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Clinical Trials
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Only about 16% of supplements are clinically tested.
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Muscalar Pro M3™'s hero ingredient Urolithin A is proven in
                    4+ gold-standard, double-blind placebo-controlled trials
                    (DBRCTs) at 500-1000mg doses.
                  </p>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Ingredient actives (Spermidine, S-Allyl Cysteine) validated
                    in 10+ dose-matched human/preclinical DBRCTs for autophagy
                    and antioxidant defense.
                  </p>
                </div>

                {/* The Impact of Clinical Proof Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    The Impact of Clinical Proof
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Double-blind, randomized, placebo-controlled trials (DBRCTs)
                    eliminate bias, control placebo effects, validate efficacy,
                    and ensure regulatory compliance.
                  </p>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Ingredient-specific testing at M3 doses confirms safety,
                    tolerability, and mitochondrial/muscle performance benefits.
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Peak Endurance Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Peak Endurance
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    M3™ enhances muscle endurance and aerobic capacity via
                    Urolithin A-driven mitophagy.
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Clinical Trial Results
                    </h4>
                    <p className="mb-2 text-sm leading-relaxed text-black md:text-base">
                      In a 4-month DBRCT (66 older adults, 1000mg Urolithin A),
                      leg muscle contractions to fatigue improved +41 vs +6
                      placebo; 6-min walk +61m vs +43m.
                    </p>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      Middle-aged adults gained clinically meaningful VO2 peak
                      in 4-month DBRCT.
                    </p>
                  </div>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Muscle Strength Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Muscle Strength
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    M3™ supports strength, hypertrophy, and functional
                    performance through mitochondrial upgrades.
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Clinical Trial Results
                    </h4>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      4-month DBRCT showed ~12% muscle strength gains; 8-week
                      resistance training trial confirmed endurance/strength
                      with lower inflammation.
                    </p>
                  </div>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Mitochondrial Health Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Mitochondrial Health
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Activates mitophagy (Urolithin A), autophagy (Spermidine),
                    antioxidants (S-Allyl Cysteine) for cellular energy renewal.
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Clinical Trial Results
                    </h4>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      Urolithin A DBRCTs reduced acylcarnitines/ceramides (mito
                      dysfunction markers) and CRP inflammation.
                    </p>
                  </div>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Musclespan Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Musclespan
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    Optimizes muscle as longevity organ via cellular maintenance
                    pathways.
                  </p>
                  <div className="mb-4">
                    <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                      Clinical Trial Results
                    </h4>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      Urolithin A improved grip strength/walking speed
                      biomarkers; Spermidine supports cognitive resilience in
                      aging trials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* M3 History Side Panel */}
      {m3HistoryOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity"
            onClick={() => setM3HistoryOpen(false)}
          />
          {/* Side Panel */}
          <div className="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl transition-transform md:w-[500px] lg:w-[600px]">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-[#F7F8F2]">
              <div className="p-6">
                {/* Header with Close Button */}
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-black md:text-3xl">
                    MUSCALARPRO™ M3
                  </h2>
                  <button
                    onClick={() => setM3HistoryOpen(false)}
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
                        strokeCap="round"
                        strokeJoin="round"
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
              <div className="p-6">
                {/* Title Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-semibold text-black md:text-2xl">
                    A Victory for Musclespan + Longevity
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-black md:text-base">
                    Driven by unmet needs in performance and aging, Muscalar Pro
                    partnered with Dr. Ateeb Shaikh to translate clinical trials
                    on Urolithin A, Spermidine, and S‑Allyl Cysteine into
                    real-world MuscleSpan impact.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-black md:text-base">
                      Dr.Rajaram Samant, MD
                    </p>
                    <p className="text-xs text-neutral-600 md:text-sm">
                      Founder, Muscalar Pro | Longevity Researcher | Precision
                      Medicine Expert
                    </p>
                  </div>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Timeline Section */}
                <div className="mb-8">
                  <div className="mb-6 space-y-6">
                    {/* 2018 */}
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-black">
                        2018
                      </h4>
                      <p className="text-sm leading-relaxed text-black md:text-base">
                        Celagenex begins precision nutraceutical research on
                        mitochondrial pathways for Healthspan and Lifespan.
                      </p>
                    </div>

                    {/* 2023 */}
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-black">
                        2023
                      </h4>
                      <p className="text-sm leading-relaxed text-black md:text-base">
                        Launches MUSCALARPRO™ with M3 Stack, the first
                        mitochondria‑targeted formula for decoding peak human
                        performance.
                      </p>
                    </div>

                    {/* 2025 */}
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-black">
                        2025
                      </h4>
                      <p className="text-sm leading-relaxed text-black md:text-base">
                        Publishes protocols integrating M3's muscle‑centric
                        thesis for Musclespan.
                      </p>
                    </div>

                    {/* Today */}
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-black">
                        Today
                      </h4>
                      <p className="text-sm leading-relaxed text-black md:text-base">
                        M3™ sets the new standard for cellular performance—backed
                        by 4+ Urolithin A RCTs and longevity science.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Musclespan Side Panel */}
      {musclespanOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity"
            onClick={() => setMusclespanOpen(false)}
          />
          {/* Side Panel */}
          <div className="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl transition-transform md:w-[500px] lg:w-[600px]">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-[#F7F8F2]">
              <div className="p-6">
                {/* Header with Close Button */}
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-black md:text-3xl">
                    What is Musclespan?
                  </h2>
                  <button
                    onClick={() => setMusclespanOpen(false)}
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
                        strokeCap="round"
                        strokeJoin="round"
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
              <div className="p-6">
                {/* Introduction Section */}
                <div className="mb-8">
                  <p className="mb-6 text-sm leading-relaxed text-black md:text-base">
                    Musclespan is the length of time your skeletal muscle stays
                    strong, functional, and metabolically active throughout
                    life—your "biological reserve" for independence and
                    performance.
                  </p>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Composed of myofibrils, mitochondria, and satellite cells,
                    muscle functions as the body's largest endocrine organ,
                    secreting 600+ myokines that regulate metabolism,
                    inflammation, glucose disposal, and longevity.
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Muscle: Endocrine Organ of Longevity Data Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Muscle: Endocrine Organ of Longevity Data
                  </h3>
                  <ul className="mb-4 space-y-3 text-sm leading-relaxed text-black md:text-base">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Muscle strength (e.g., grip) predicts all-cause
                        mortality better than BMI; highest tertile midlife grip
                        linked to 50% lower 25-year disability/mortality risk.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Low muscle mass/strength raises death risk 31–69% (HR
                        1.31–2.0); sarcopenia accelerates post-60, but resistance
                        training reverses 15% decade loss.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Muscle myokines combat aging: IL-6 regulates fat/glucose,
                        BDNF supports brain health, irisin boosts mitochondrial
                        biogenesis.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Citations Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Citations
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-black md:text-base">
                    <li>
                      Lyon G. Forever Strong. Rodale Books, 2023. "Muscle is the
                      organ of longevity."
                    </li>
                    <li>JAMA. 1999;281(6):558-60. Midlife grip</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Clinical Research Side Panel */}
      {clinicalResearchOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity"
            onClick={() => setClinicalResearchOpen(false)}
          />
          {/* Side Panel */}
          <div className="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl transition-transform md:w-[500px] lg:w-[600px]">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-[#F7F8F2]">
              <div className="p-6">
                {/* Header with Close Button */}
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-black md:text-3xl">
                    Our Clinical Research
                  </h2>
                  <button
                    onClick={() => setClinicalResearchOpen(false)}
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
                        strokeCap="round"
                        strokeJoin="round"
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
              <div className="p-6">
                {/* Introduction Section */}
                <div className="mb-8">
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    In randomized, double-blind, placebo-controlled trials on
                    M3's key ingredient Urolithin A, 90% of participants
                    established optimal mitochondrial biomarkers within 21
                    days—superior to placebo.
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Figures Section */}
                <div className="mb-8">
                  <p className="mb-4 text-sm leading-relaxed text-black md:text-base">
                    <strong>Figure 1.</strong> Proportion of participants with
                    non-optimal baseline mito function who converted to stable
                    mitophagy.
                  </p>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    <strong>Figure 2.</strong> Change in average mitophagy markers
                    (acylcarnitine reduction) in participants with non-optimal
                    baseline.
                  </p>
                </div>

                {/* Dashed Divider */}
                <hr className="mb-8 border-t border-dashed border-black/20" />

                {/* Citations Section */}
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    Citations
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-black md:text-base">
                    <li>
                      JAMA Network Open. 2022;5(1):e2144270. Urolithin A muscle
                      endurance RCT (n=66).
                    </li>
                    <li>Cell Rep Med. 2022;3(5):100615. UA mitophagy biomarkers.</li>
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
