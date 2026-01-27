"use client";

import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { useEffect, useState } from "react";
import { VariantSelector } from "./variant-selector";

export function BenefitsHeading() {
  return (
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-3xl text-[#2E4B2D] md:text-4xl">
        Benefits that build over time
      </h2>
      <p className="mb-4 text-base text-neutral-700 md:text-lg">
        Your cells adapt before your mirror does.​
      </p>
      <a
        href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2788244"
        target="_blank"
        className="inline-block text-base font-medium text-[#2E4B2D] underline transition-colors hover:text-[#1E2A1E] cursor-pointer"
      >
        See Clinical Evidence
      </a>
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
  const [m3HistoryOpen, setM3HistoryOpen] = useState(false);
  const [musclespanOpen, setMusclespanOpen] = useState(false);
  const [clinicalResearchOpen, setClinicalResearchOpen] = useState(false);
  const [m3DeliveryOpen, setM3DeliveryOpen] = useState(false);

  useEffect(() => {
    const handleOpenM3History = () => {
      setM3HistoryOpen(true);
    };
    const handleOpenMusclespan = () => {
      setMusclespanOpen(true);
    };
    const handleOpenClinicalResearch = () => {
      setClinicalResearchOpen(true);
    };
    const handleOpenM3Delivery = () => {
      setM3DeliveryOpen(true);
    };
    window.addEventListener("openM3History", handleOpenM3History);
    window.addEventListener("openMusclespan", handleOpenMusclespan);
    window.addEventListener("openClinicalResearch", handleOpenClinicalResearch);
    window.addEventListener("openM3Delivery", handleOpenM3Delivery);
    return () => {
      window.removeEventListener("openM3History", handleOpenM3History);
      window.removeEventListener("openMusclespan", handleOpenMusclespan);
      window.removeEventListener(
        "openClinicalResearch",
        handleOpenClinicalResearch,
      );
      window.removeEventListener("openM3Delivery", handleOpenM3Delivery);
    };
  }, []);

  return (
    <div className="flex flex-col mt-20">
      {/* Product Badge and Title */}
      <div className="mb-4 flex flex-col">
        <div className="mb-2 flex items-center gap-2">
          <h1 className="text-3xl font-semibold text-black md:text-4xl">
            {product.title}
          </h1>
        </div>
      </div>
      {/* Key Selling Point and Rating */}
      <div className="mb-4 grid grid-cols-2 items-center">
        <div className="flex items-center gap-2 border-r border-neutral-300 pr-4">
          <span className="text-3xl font-bold text-[#2E4B2D]">#1</span>
          <span className="text-xs leading-tight text-[#2E4B2D]">
            Muscle-span supplement
            <br />
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
      <p className="mb-4 text-sm text-black">30-day supply delivered monthly</p>
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
          <h2 className="text-lg font-semibold text-black">
            Clinically proven benefits
          </h2>
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
              <p className="text-base  text-black/50">
                After years of precision research, groundbreaking RCTs, and
                clinical validation, MUSCALAR PRO M3™ targets aging's root
                code: mitochondrial decay—delivering the first
                mitochondria-first MuscleSpan protocol clinically proven to
                sustain strength, endurance, and cognition decades beyond.
              </p>
              <button
                onClick={() => setClinicalTrialsOpen(true)}
                className="mt-2 inline-block text-sm text-black underline cursor-pointer"
              >
                Learn more about M3 Science
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
          <h2 className="text-lg font-semibold text-black">Key ingredients</h2>
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
                View superhuman muscle-span molecules →
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
                    {product.title}
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
              <div className="p-6 space-y-8">
                {/* Peak Human Performance + Musclespan */}
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Peak Human Performance + Musclespan
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Muscle strength ↑ 12% after 16 weeks. Grip, mobility,
                    longevity optimized—muscle is your endocrine powerhouse,
                    secreting 600+ myokines that orchestrate metabolism,
                    inflammation, and lifespan.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="https://jamanetwork.com/journals/jama/fullarticle/188748"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-[#2E4B2D]/30 bg-white/60 px-3 py-1 text-xs font-medium text-[#2E4B2D] hover:bg-[#2E4B2D] hover:text-white transition-colors"
                    >
                      <span>JAMA Grip Longevity</span>
                      <span
                        aria-hidden="true"
                        className="inline-block text-[10px] leading-none translate-y-[-1px] rotate-45"
                      >
                        ↑
                      </span>
                    </a>
                    <a
                      href="https://journals.sagepub.com/doi/10.1089/ict.2024.82391.gl"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-[#2E4B2D]/30 bg-white/60 px-3 py-1 text-xs font-medium text-[#2E4B2D] hover:bg-[#2E4B2D] hover:text-white transition-colors"
                    >
                      <span>Muscle-Centric Review</span>
                      <span
                        aria-hidden="true"
                        className="inline-block text-[10px] leading-none translate-y-[-1px] rotate-45"
                      >
                        ↑
                      </span>
                    </a>
                  </div>
                </div>

                {/* Mitochondrial Health - Autophagy & Mitophagy */}
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Mitochondrial Health - Autophagy &amp; Mitophagy
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Urolithin A ignites mitophagy to selectively recycle damaged
                    mitochondria, restoring youthful energy factories shown in
                    double-blind RCTs to reduce acylcarnitine dysfunction
                    markers by 40% within 21 days. Spermidine unleashes
                    macro-autophagy via LC3/Beclin-1 pathways for deep cellular
                    renewal and 25% lifespan extension in human-equivalent
                    models.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2788244"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-[#2E4B2D]/30 bg-white/60 px-3 py-1 text-xs font-medium text-[#2E4B2D] hover:bg-[#2E4B2D] hover:text-white transition-colors"
                    >
                      <span>JAMA Network Open RCT</span>
                      <span
                        aria-hidden="true"
                        className="inline-block text-[10px] leading-none translate-y-[-1px] rotate-45"
                      >
                        ↑
                      </span>
                    </a>
                    <a
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9133463/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#2E4B2D]/30 bg-white/60 px-3 py-1 text-xs font-medium text-[#2E4B2D] hover:bg-[#2E4B2D] hover:text-white transition-colors"
                    >
                      <span>Cell Rep Med Mitophagy</span>
                      <span
                        aria-hidden="true"
                        className="inline-block text-[10px] leading-none rotate-45 translate-y-[-1px]"
                      >
                        ↑
                      </span>
                    </a>
                  </div>
                </div>

                {/* Peak Endurance (HRV + VO2max) */}
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Peak Endurance (HRV + VO2max)
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Aerobic capacity ↑ with fatigue contractions to exhaustion
                    improved +41% legs/+95% hands vs placebo in older adults;
                    clinically meaningful VO2max gains and HRV recovery
                    potentiated through mitochondrial uncoupling for superior
                    training adaptation.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/35584623/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-[#2E4B2D]/30 bg-white/60 px-3 py-1 text-xs font-medium text-[#2E4B2D] hover:bg-[#2E4B2D] hover:text-white transition-colors"
                    >
                      <span>Urolithin A VO2 RCT</span>
                      <span
                        aria-hidden="true"
                        className="inline-block text-[10px] leading-none translate-y-[-1px] rotate-45"
                      >
                        ↑
                      </span>
                    </a>
                  </div>
                </div>

                {/* Superhuman Muscle Strength & Hypertrophy */}
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Superhuman Muscle Strength &amp; Hypertrophy
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Endurance +95%, recovery accelerated via mitochondrial
                    upgrades that drive ~12% peak strength gains after 16 weeks
                    in middle-aged adults; 8-week resistance training trial
                    confirms hypertrophy signaling through reduced oxidative
                    stress and enhanced ATP regeneration.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="https://www.tandfonline.com/doi/abs/10.1080/15502783.2024.2419388"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-[#2E4B2D]/30 bg-white/60 px-3 py-1 text-xs font-medium text-[#2E4B2D] hover:bg-[#2E4B2D] hover:text-white transition-colors"
                    >
                      <span>Athlete Strength Trial</span>
                      <span
                        aria-hidden="true"
                        className="inline-block text-[10px] leading-none translate-y-[-1px] rotate-45"
                      >
                        ↑
                      </span>
                    </a>
                  </div>
                </div>

                {/* Nootropic Intelligence */}
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Nootropic Intelligence
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Neuroprotection via Nrf2 antioxidant activation,
                    inflammation ↓29%, mito-enhanced cognition preserving
                    synaptic proteins BDNF/PSD-95 for spatial memory, deep
                    learning capacity, and executive function—delivering focus
                    that compounds over decades.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7185103/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-[#2E4B2D]/30 bg-white/60 px-3 py-1 text-xs font-medium text-[#2E4B2D] hover:bg-[#2E4B2D] hover:text-white transition-colors"
                    >
                      <span>Spermidine Brain Aging</span>
                      <span
                        aria-hidden="true"
                        className="inline-block text-[10px] leading-none translate-y-[-1px] rotate-45"
                      >
                        ↑
                      </span>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Clinically Proven Ingredients
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Patented M3 Stack™: Urolithin A (1g RCT doses proven in 4+
                    double-blind trials), Spermidine (6mg autophagy threshold),
                    S-Allyl Cysteine (1mg redox defense)—human-validated for
                    decades of cellular power, manufactured to FSSAI/cGMP with
                    third-party ICP-MS/HPLC verification.
                  </p>
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
                        M3™ sets the new standard for cellular
                        performance—backed by 4+ Urolithin A RCTs and longevity
                        science.
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
                        1.31–2.0); sarcopenia accelerates post-60, but
                        resistance training reverses 15% decade loss.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Muscle myokines combat aging: IL-6 regulates
                        fat/glucose, BDNF supports brain health, irisin boosts
                        mitochondrial biogenesis.
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

      {/* M3 Delivery Side Panel */}
      {m3DeliveryOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity"
            onClick={() => setM3DeliveryOpen(false)}
          />
          {/* Side Panel */}
          <div className="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl transition-transform md:w-[500px] lg:w-[600px]">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-[#F7F8F2]">
              <div className="p-6">
                {/* Header with Close Button */}
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-black md:text-3xl">
                    M3™ Delivery (Bioavailability)
                  </h2>
                  <button
                    onClick={() => setM3DeliveryOpen(false)}
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
              <div className="p-6 space-y-8">
                {/* Survivability */}
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Survivability
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Many “energy” supplements lose potency before they ever
                    reach your cells—broken down by stomach acid, digestive
                    enzymes, and oxidation.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    M3™ is designed to keep its precision molecules intact long
                    enough to do the real work: cellular renewal that compounds
                    into Musclespan.
                  </p>
                </section>

                {/* PrecisionCap delivery */}
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    PrecisionCap™ Delivery
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Our delivery system is engineered for targeted release
                    across digestion, protecting actives as they move through
                    the GI tract and helping drive more consistent day‑to‑day
                    uptake.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text.black md:text-base">
                    It uses a plant‑based capsule format (no candy coatings, no
                    gummies) and is built for daily compliance at clinically
                    studied dosing.
                  </p>
                </section>

                {/* Daily Serving */}
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    What It Delivers (Daily Serving)
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Two capsules daily deliver the full M3 Stack™—Urolithin A,
                    Spermidine, and S‑Allyl Cysteine—aligned to your intended
                    “cellular performance” pathways (mitophagy, autophagy
                    support, antioxidant defense).
                  </p>
                </section>

                {/* Verification */}
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Verification (What Matters)
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    M3™ is positioned as a full‑formula standard: identity and
                    potency checks, plus screening for common
                    contaminants—because what’s not in your supplement matters
                    too.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    Most brands talk performance; M3™ backs it with
                    full-formula screening for identity, purity, contaminants,
                    and real-world performance—because what’s not in your
                    supplement matters too.
                  </p>
                </section>

                {/* Quality Standards */}
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Quality Standards
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-black md:text-base">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Manufactured in facilities that follow FDA dietary
                        supplement cGMPs (21 CFR Part 111).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Core ingredients supported by independent mechanistic
                        research, with urolithin A evaluated in randomized,
                        double‑blind, placebo‑controlled human trials.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Third‑party testing program designed to verify label
                        claims and screen for contaminants and adulterants.
                      </span>
                    </li>
                  </ul>
                </section>

                {/* Third-party testing panels */}
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Third‑Party Testing Panels
                  </h3>
                  <ul className="space-y-3 text-sm leading-relaxed text-black md:text-base">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <strong>Purity &amp; contamination:</strong> Heavy
                        metals (lead, arsenic, cadmium, mercury) via ICP‑MS
                        aligned to USP elemental impurity approaches; pesticide
                        residues, residual solvents, and allergen screening.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <strong>Microbiological safety:</strong> Total aerobic
                        microbial count (TAMC), yeast &amp; mold, and pathogen
                        screening (e.g., Salmonella, E. coli, Staph) using
                        validated microbiology methods (often including
                        PCR-based assays depending on the lab).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <strong>Banned substances (sport-safe option):</strong>{" "}
                        Screening for prohibited stimulants/anabolic agents and
                        other banned classes using established certification
                        frameworks (e.g., NSF Certified for Sport tests for ~290
                        banned substances).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <strong>Stability &amp; shelf life:</strong> Accelerated
                        and real‑time stability studies under defined
                        temperature/humidity conditions to support shelf‑life
                        dating and label claim over time.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <strong>Potency / label claim verification:</strong>{" "}
                        Quantitative assays to confirm identity and potency of
                        actives/markers as part of finished‑product
                        specifications required under 21 CFR 111.
                      </span>
                    </li>
                  </ul>
                </section>
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
              <div className="p-6 space-y-8">
                {/* Our Clinical Research */}
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Our Clinical Research
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    In randomized, double-blind, placebo-controlled human trials,
                    Urolithin A (1 g/day) improved muscle performance and shifted
                    biomarkers linked to mitochondrial efficiency and inflammation.​
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    In older adults (n=66), Urolithin A significantly improved
                    contractions-to-fatigue at 2 months and reduced circulating
                    acylcarnitines, ceramides, and CRP versus placebo.​
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    In middle-aged adults, 4 months of Urolithin A improved leg
                    strength (~12%) and showed clinically meaningful improvements
                    in aerobic endurance (peak VO₂) and 6-minute walk, alongside
                    lower acylcarnitines and CRP and increased skeletal-muscle
                    proteins linked to mitophagy/mitochondrial metabolism.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
