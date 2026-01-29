"use client";

import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";
import { ClinicalEvidenceButton } from "./clinical-evidence-button";
import { SubscriptionOptions } from "./subscription-options";
import { VariantSelector } from "./variant-selector";

type ClinicalTrialsContextValue = {
  clinicalTrialsOpen: boolean;
  setClinicalTrialsOpen: (open: boolean) => void;
};

const ClinicalTrialsContext = createContext<ClinicalTrialsContextValue | null>(
  null,
);

export function ClinicalTrialsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [clinicalTrialsOpen, setClinicalTrialsOpen] = useState(false);
  return (
    <ClinicalTrialsContext.Provider
      value={{ clinicalTrialsOpen, setClinicalTrialsOpen }}
    >
      {children}
    </ClinicalTrialsContext.Provider>
  );
}

type ExternalLinkPillProps = {
  text: string;
  href: string;
};

function ExternalLinkPill({ text, href }: ExternalLinkPillProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-[#693979]/30 bg-white/60 px-3 py-1 text-xs font-medium text-[#693979] hover:bg-[#693979] hover:text-white transition-colors"
    >
      <span>{text}</span>
      <span
        aria-hidden="true"
        className="inline-block text-[10px] leading-none translate-y-[-1px] rotate-45"
      >
        ↑
      </span>
    </a>
  );
}

export function BenefitsHeading() {
  const clinicalTrialsContext = useContext(ClinicalTrialsContext);
  const openClinicalTrialsCallback = clinicalTrialsContext
    ? () => clinicalTrialsContext.setClinicalTrialsOpen(true)
    : undefined;
  return (
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-3xl text-black md:text-4xl">
        Benefits that build over time
      </h2>
      <p className="mb-4 text-base text-black md:text-lg">
        Your cells adapt before your mirror does.​
      </p>
      <ClinicalEvidenceButton
        openClinicalTrialsCallback={openClinicalTrialsCallback}
      />
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
      className="flex items-center gap-2 text-sm text-neutral-600 hover:text-black transition-colors"
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
      className="flex items-center gap-2 text-sm text-black hover:text-neutral-800 transition-colors"
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-black text-black">
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
      className="flex items-center gap-2 text-sm text-black hover:text-neutral-800 transition-colors"
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-black text-black">
        <span className="text-xs">+</span>
      </div>
      <span>Our Clinical Research</span>
    </button>
  );
}

export function RigorousTestingButton() {
  const handleClick = () => {
    const event = new CustomEvent("openRigorousTesting");
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 text-sm text-black hover:text-neutral-800 transition-colors"
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-black text-black">
        <span className="text-xs">+</span>
      </div>
      <span>Rigorous Testing</span>
    </button>
  );
}

export function ProductDescription({ product }: { product: Product }) {
  const [benefitsOpen, setBenefitsOpen] = useState(true);
  const [ingredientsOpen, setIngredientsOpen] = useState(false);
  const [clinicalTrialsOpenLocal, setClinicalTrialsOpenLocal] = useState(false);
  const [ingredientsPanelOpen, setIngredientsPanelOpen] = useState(false);
  const [howToUseOpen, setHowToUseOpen] = useState(false);
  const [m3HistoryOpen, setM3HistoryOpen] = useState(false);
  const [musclespanOpen, setMusclespanOpen] = useState(false);
  const [clinicalResearchOpen, setClinicalResearchOpen] = useState(false);
  const [rigorousTestingOpen, setRigorousTestingOpen] = useState(false);
  const [m3DeliveryOpen, setM3DeliveryOpen] = useState(false);

  const clinicalTrialsContext = useContext(ClinicalTrialsContext);
  const clinicalTrialsOpen = clinicalTrialsContext
    ? clinicalTrialsContext.clinicalTrialsOpen
    : clinicalTrialsOpenLocal;
  const setClinicalTrialsOpen = clinicalTrialsContext
    ? clinicalTrialsContext.setClinicalTrialsOpen
    : setClinicalTrialsOpenLocal;

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
    const handleOpenRigorousTesting = () => {
      setRigorousTestingOpen(true);
    };
    const handleOpenM3Delivery = () => {
      setM3DeliveryOpen(true);
    };
    const handleOpenClinicalTrials = () => {
      setClinicalTrialsOpen(true);
    };
    window.addEventListener("openM3History", handleOpenM3History);
    window.addEventListener("openMusclespan", handleOpenMusclespan);
    window.addEventListener("openClinicalResearch", handleOpenClinicalResearch);
    window.addEventListener("openRigorousTesting", handleOpenRigorousTesting);
    window.addEventListener("openM3Delivery", handleOpenM3Delivery);
    window.addEventListener("openClinicalTrials", handleOpenClinicalTrials);
    return () => {
      window.removeEventListener("openM3History", handleOpenM3History);
      window.removeEventListener("openMusclespan", handleOpenMusclespan);
      window.removeEventListener(
        "openClinicalResearch",
        handleOpenClinicalResearch,
      );
      window.removeEventListener(
        "openRigorousTesting",
        handleOpenRigorousTesting,
      );
      window.removeEventListener("openM3Delivery", handleOpenM3Delivery);
      window.removeEventListener(
        "openClinicalTrials",
        handleOpenClinicalTrials,
      );
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
          <span className="text-3xl font-bold text-[#7b2a8a]">#1</span>
          <span className="text-xs leading-tight text-[#7b2a8a]">
            Muscle-span supplement
            <br />
          </span>
        </div>
        <div className="flex flex-col gap-1 pl-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-4 w-4 fill-[#7b2a8a]"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-sm underline text-[#7b2a8a]">
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

      {/* <div className="mb-2">
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
      </div> */}
      {/* Subscription Info */}
      {/* <p className="mb-3 text-sm text-black">30-day supply delivered monthly</p> */}

      {/* Subscription mode */}
      <SubscriptionOptions />

      {/* Add to Cart Button */}
      <div className="mb-2">
        <AddToCart product={product} />
      </div>
      {/* Guarantee and Shipping */}
      <p className="mb-6 text-xs text-neutral-400 text-center">
        30-day risk-free guarantee. Free shipping.
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
            <div className="mt-3 pb-3">
              <p className="text-sm leading-relaxed text-black">
                After years of precision research, groundbreaking RCTs, and
                clinical validation, MUSCALAR PRO M3 targets aging's root code:
                mitochondrial decay—delivering the first mitochondria-first
                MuscleSpan protocol clinically proven to sustain strength,
                endurance, and cognition decades beyond.
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
      <div className="mb-4 border-b border-neutral-200 pb-4">
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
            <div className="mt-3 pb-3">
              <p className="mb-3 text-sm leading-relaxed text-black">
                M3 Stack™ <b>(Urolithin A + Spermidine + S‑Allyl Cysteine)</b>—
                a clinically studied cellular‑performance trio designed to
                support mitochondrial renewal (mitophagy), cellular cleanup
                (autophagy), and antioxidant defense.
              </p>
              <p className="mb-2 text-sm font-semibold text-black">
                Clean formulation:
              </p>
              <ul className="mb-4 space-y-1 text-sm text-black">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Veg</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Non‑GMO</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gluten free</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Free of big 8 food allergens</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Lactose free</span>
                </li>
              </ul>
              <p className="mb-2 text-sm font-semibold text-black">
                Ingredients (daily serving)
              </p>
              <ul className="mb-4 space-y-1 text-sm text-black">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Patented</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Double‑blind placebo‑controlled in human clinical trial
                    (Urolithin A)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Urolithin‑A 1 g</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Spermidine 6 mg</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>S‑Allyl Cysteine 1 mg</span>
                </li>
              </ul>
              <button
                onClick={() => setIngredientsPanelOpen(true)}
                className="mt-2 inline-block text-sm text-black underline cursor-pointer"
              >
                View superhuman muscle-span molecules
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* How to use M3 Accordion */}
      <div className="mb-4 border-b border-neutral-200 pb-4">
        <button
          onClick={() => setHowToUseOpen(!howToUseOpen)}
          className="flex w-full items-center justify-between text-left transition-colors"
        >
          <h2 className="text-lg font-semibold text-black">How to use M3</h2>
          <span className="text-lg font-light text-black transition-transform duration-300">
            {howToUseOpen ? "−" : "+"}
          </span>
        </button>
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            howToUseOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-3 pb-3">
              <p className="mb-4 text-sm leading-relaxed text-black">
                Take two veg caps daily to reach the clinically studied dose of
                Urolithin A used in double‑blind, placebo‑controlled human
                trials (1 g/day).
              </p>
              <h3 className="mb-2 text-sm font-semibold text-black">
                What you’re getting (recommended daily serving)
              </h3>
              <ul className="space-y-1 text-sm text-black">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Urolithin A — 1 g (clinically studied dose; double‑blind,
                    placebo‑controlled RCT evidence in older adults)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Spermidine — 6 mg</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>S‑Allyl Cysteine — 1 mg</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bundle Offer Card */}
      {/* <BundleProduct /> */}

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
                {/* M3 Decipher Musclespan – Clinical Trials */}
                <section>
                  <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                    Clinical Trials
                  </h4>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Most dietary supplements are never evaluated in
                    gold-standard randomized, double-blind, placebo-controlled
                    clinical trials (DBRCTs).
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    Muscalar Pro M3’s hero ingredient, Urolithin A, is supported
                    by multiple DBRCTs in older and middle‑aged adults
                    demonstrating improvements in muscle endurance and
                    biomarkers of mitochondrial health.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <ExternalLinkPill
                      href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2788244"
                      text="JAMA Network Open RCT"
                    />
                    <ExternalLinkPill
                      href="https://pubmed.ncbi.nlm.nih.gov/35584623/"
                      text="Cell Reports Medicine RCT"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    Spermidine and S‑Allyl Cysteine have supportive evidence
                    across human and preclinical literature for autophagy
                    signaling and antioxidant neuroprotection, respectively.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <ExternalLinkPill
                      href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2792725"
                      text="Spermidine cognition RCT (JAMA Netw Open)"
                    />
                    <ExternalLinkPill
                      href="https://pubmed.ncbi.nlm.nih.gov/25393425/"
                      text="S‑allyl cysteine Nrf2 neuroprotection"
                    />
                  </div>
                </section>

                {/* The Impact of Clinical Proof */}
                <section>
                  <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                    The Impact of Clinical Proof
                  </h4>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    DBRCTs are the gold standard because they reduce bias
                    (randomization + blinding), control for placebo effects, and
                    test real‑world outcomes with predefined endpoints.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    Urolithin A DBRCTs also report safety and tolerability
                    alongside performance and biomarker readouts.
                  </p>
                </section>

                {/* Peak Endurance */}
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Peak Endurance
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    M3 supports endurance capacity by targeting mitochondrial
                    quality control (mitophagy), which is mechanistically linked
                    to fatigue resistance in aging muscle.
                  </p>
                  <h4 className="mt-3 mb-2 text-base font-semibold text-black md:text-lg">
                    Clinical trial results
                  </h4>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    In a 4‑month DBRCT of 66 older adults taking 1000 mg/day
                    Urolithin A, muscle endurance (contractions until fatigue)
                    improved at 2 months in both hand muscle (FDI: 95.3 vs 11.6
                    placebo) and leg muscle (TA: 41.4 vs 5.7 placebo).
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <ExternalLinkPill
                      href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2788244"
                      text="JAMA Network Open RCT"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    In the same trial, 6‑minute walk distance increased from
                    baseline in both groups (mean +60.8 m Urolithin A vs +42.5 m
                    placebo), with the between‑group difference not
                    statistically significant.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <ExternalLinkPill
                      href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2788244"
                      text="JAMA Network Open RCT"
                    />
                  </div>
                </section>

                {/* Muscle Strength & Hypertrophy */}
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Muscle Strength &amp; Hypertrophy
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    M3 is designed to translate mitochondrial upgrades into
                    measurable performance (strength output and endurance under
                    load).
                  </p>
                  <h4 className="mt-3 mb-2 text-base font-semibold text-black md:text-lg">
                    Clinical trial results
                  </h4>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    In a 4‑month randomized, placebo‑controlled trial in
                    middle‑aged adults, Urolithin A supplementation produced
                    significant improvements in muscle strength (~12%).
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <ExternalLinkPill
                      href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2788244"
                      text="JAMA Network Open RCT"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    In an 8‑week randomized, double‑blind, placebo‑controlled
                    study in resistance‑trained male athletes (1 g/day Urolithin
                    A), the authors report improvements in muscle strength and
                    endurance, alongside changes in inflammation and oxidative
                    stress measures.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <ExternalLinkPill
                      href="https://www.tandfonline.com/doi/full/10.1080/15502783.2024.2419388"
                      text="Athlete DBRCT"
                    />
                    <ExternalLinkPill
                      href="https://pubmed.ncbi.nlm.nih.gov/39487653/"
                      text="PubMed record"
                    />
                  </div>
                </section>

                {/* Mitochondrial Health (Autophagy + Mitophagy) */}
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Mitochondrial Health (Autophagy + Mitophagy)
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Urolithin A is a mitophagy activator, while Spermidine is
                    classically studied as an autophagy‑supportive polyamine;
                    together they map to “clean → rebuild” cellular maintenance
                    biology.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    In older adults, Urolithin A supplementation decreased
                    circulating biomarkers associated with mitochondrial and
                    metabolic stress (acylcarnitines, ceramides) and reduced CRP
                    relative to placebo.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <ExternalLinkPill
                      href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2788244"
                      text="JAMA Network Open RCT"
                    />
                  </div>
                  <h4 className="mt-3 mb-2 text-base font-semibold text-black md:text-lg">
                    Mechanistic support
                  </h4>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Spermidine has evidence in human‑cell models for rescuing
                    bioenergetic and mitophagy deficits,
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <ExternalLinkPill
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10049002/"
                      text="PMC review/experimental paper"
                    />
                  </div>
                </section>

                {/* Nootropic Intelligence (Brain Health) */}
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Nootropic Intelligence (Brain Health)
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    M3’s “mind” pillar is built around cellular housekeeping
                    (autophagy signaling) plus antioxidant neuroprotection to
                    support resilience under stress.
                  </p>
                  <h4 className="mt-3 mb-2 text-base font-semibold text-black md:text-lg">
                    Clinical / translational evidence
                  </h4>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    In a 12‑month randomized clinical trial in older adults with
                    subjective cognitive decline, spermidine supplementation did
                    not significantly improve the primary memory outcome vs
                    placebo, though exploratory analyses suggested possible
                    effects on inflammation and verbal memory that require
                    validation.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <ExternalLinkPill
                      href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2792725"
                      text="Spermidine cognition RCT"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    ​ S‑allyl cysteine shows preclinical neuroprotective
                    activity via Nrf2‑dependent antioxidant response and
                    protection in experimental ischemic injury models.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <ExternalLinkPill
                      href="https://pubmed.ncbi.nlm.nih.gov/25393425/"
                      text="S‑allyl cysteine Nrf2 neuroprotection
"
                    />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    ​ S‑allyl cysteine also demonstrates antidepressant‑like
                    effects in mouse models with reductions in oxidative stress
                    markers in the hippocampus.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <ExternalLinkPill
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7564461/"
                      text="Preclinical antidepressant model"
                    />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    The RCT outcomes above are from trials of Urolithin A as an
                    ingredient; the combined finished M3 formula has not been
                    presented here as being tested as a single product in those
                    same trials.
                  </p>
                </section>
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
                    Muscalar Pro M3 Decode Peak Performance
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
              <div className="p-6 space-y-8">
                {/* M3 Musclespan Stack – Overview */}
                <section>
                  <h3 className="mb-4 text-lg font-semibold text-black md:text-xl">
                    M3 Musclespan Stack
                  </h3>
                  <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                    Actives + Ingredients
                  </h4>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    MUSCALARPRO M3 is formulated with three clinically studied
                    bio‑molecules that target mitochondrial renewal, cellular
                    cleanup, and antioxidant defense—no stimulants, no “energy
                    crash” positioning.
                  </p>
                </section>

                {/* Product Image */}
                <div className="mb-6">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Pills.jpg?v=1769538566"
                      alt="M3 Stack pills"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                </div>

                {/* Key actives (daily serving) */}
                <section>
                  <h4 className="mb-3 text-base font-semibold text-black md:text-lg">
                    Key actives (daily serving)
                  </h4>

                  {/* Mitophagy Core — Urolithin A */}
                  <div className="mb-4">
                    <div className="mb-3 relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Urolithin_-_A.png?v=1769538868"
                        alt="Urolithin A"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 600px"
                      />
                    </div>
                    <h5 className="mb-1 text-sm font-semibold text-black md:text-base">
                      Mitophagy Core — Urolithin A (1 g/day)
                    </h5>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      Clinically studied mitophagy activator shown in
                      double‑blind, placebo‑controlled RCTs to improve muscle
                      endurance (contractions to fatigue) and improve
                      mitochondrial stress biomarkers (acylcarnitines/ceramides)
                      plus inflammation markers (CRP).
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <ExternalLinkPill
                        href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2788244"
                        text="JAMA Network Open RCT"
                      />
                      <ExternalLinkPill
                        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9133463/"
                        text="Cell Reports Medicine RCT"
                      />
                    </div>
                  </div>

                  {/* Autophagy Support — Spermidine */}
                  <div className="mb-4">
                    <div className="mb-3 relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Spermidine.png?v=1769538871"
                        alt="Spermidine"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 600px"
                      />
                    </div>
                    <h5 className="mb-1 text-sm font-semibold text-black md:text-base">
                      Autophagy Support — Spermidine (6 mg/day target dose)
                    </h5>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      Human evidence exists for spermidine supplementation
                      (wheat germ extract) in randomized, placebo‑controlled
                      trials focused on cognition/biomarkers and
                      safety/tolerability; effects are mixed and best framed as
                      “supports autophagy biology” rather than guaranteed
                      cognitive enhancement.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <ExternalLinkPill
                        href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2792725"
                        text="SmartAge RCT (JAMA Netw Open)"
                      />
                    </div>
                  </div>

                  {/* Neuro + Redox Defense — S‑Allyl Cysteine */}
                  <div className="mb-4">
                    <div className="mb-3 relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/S-Allyl_cysteine.png?v=1769538866"
                        alt="S-Allyl Cysteine"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 600px"
                      />
                    </div>
                    <h5 className="mb-1 text-sm font-semibold text-black md:text-base">
                      Neuro + Redox Defense — S‑Allyl Cysteine (1 mg/day)
                    </h5>
                    <p className="text-sm leading-relaxed text-black md:text-base">
                      S‑allyl cysteine is strongly anchored mechanistically via
                      Nrf2‑dependent antioxidant response and neuroprotection in
                      peer‑reviewed models.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <ExternalLinkPill
                        href="https://pubmed.ncbi.nlm.nih.gov/25393425/"
                        text="PubMed (Nrf2)"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                      Human double‑blind, placebo‑controlled trials exist for
                      SAC‑enriched garlic extracts (dose‑matched to mg‑level
                      SAC, depending on study), supporting “clinically
                      researched ingredient family” positioning.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <ExternalLinkPill
                        href="https://pubmed.ncbi.nlm.nih.gov/17622276/"
                        text="EJCN dose–response DBRCT (AGE)"
                      />
                      <ExternalLinkPill
                        href="https://pubmed.ncbi.nlm.nih.gov/28952171/"
                        text="SAC‑enriched extract DBPC sleep study"
                      />
                    </div>
                  </div>
                </section>
                {/* Patented positioning */}
                <section>
                  <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                    Patented
                  </h4>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Urolithin A’s clinical research ecosystem is patent‑active
                    (issued/pending patents are disclosed in trial COI
                    statements), which supports “patent‑backed ingredient
                    science” language.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <ExternalLinkPill
                      href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2788244"
                      text="JAMA Network Open RCT"
                    />
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-black/70 md:text-sm">
                    If you want to claim “Patented formula” for M3 itself,
                    you’ll need to reference your issued patent number or
                    application number on this page or the product label.
                  </p>
                </section>
                {/* Clean formulation */}
                <section>
                  <h4 className="mb-2 text-base font-semibold text-black md:text-lg">
                    Clean formulation (label‑led)
                  </h4>
                  <ul className="mb-3 space-y-1 text-sm text-black">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Vegetarian/vegan capsule format (as shown on pack)
                      </span>
                    </li>
                  </ul>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    Manufactured and quality‑screened with identity/purity and
                    contaminant checks (heavy metals, microbiology) as indicated
                    by your on‑pack quality icons.
                  </p>
                </section>
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
                        M3 sets the new standard for cellular performance—backed
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
                    M3 Delivery (Bioavailability)
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
                    M3 is designed to keep its precision molecules intact long
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
                    M3 is positioned as a full‑formula standard: identity and
                    potency checks, plus screening for common
                    contaminants—because what’s not in your supplement matters
                    too.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    Most brands talk performance; M3 backs it with full-formula
                    screening for identity, purity, contaminants, and real-world
                    performance—because what’s not in your supplement matters
                    too.
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
                    In randomized, double-blind, placebo-controlled human
                    trials, Urolithin A (1 g/day) improved muscle performance
                    and shifted biomarkers linked to mitochondrial efficiency
                    and inflammation.​
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    In older adults (n=66), Urolithin A significantly improved
                    contractions-to-fatigue at 2 months and reduced circulating
                    acylcarnitines, ceramides, and CRP versus placebo.​
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black md:text-base">
                    In middle-aged adults, 4 months of Urolithin A improved leg
                    strength (~12%) and showed clinically meaningful
                    improvements in aerobic endurance (peak VO₂) and 6-minute
                    walk, alongside lower acylcarnitines and CRP and increased
                    skeletal-muscle proteins linked to mitophagy/mitochondrial
                    metabolism.
                  </p>

                  <div className="mt-6 space-y-6">
                    <figure className="space-y-2">
                      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/ChatGPT_Image_Jan_27_2026_09_53_41_PM.png?v=1769580774"
                          alt="Muscle endurance response over 2 months with Urolithin A vs placebo"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 600px"
                        />
                      </div>
                      <figcaption className="text-xs leading-relaxed text-black/70 md:text-sm">
                        Figure 1. Muscle endurance response (2 months). Change
                        from baseline in contractions-to-fatigue for hand (FDI)
                        and leg (TA) muscles in older adults receiving Urolithin
                        A 1 g/day vs placebo.​
                      </figcaption>
                    </figure>

                    <figure className="space-y-2">
                      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/ChatGPT_Image_Jan_27_2026_09_53_32_PM.png?v=1769580777"
                          alt="Inflammation marker CRP levels at baseline and 4 months with Urolithin A vs placebo"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 600px"
                        />
                      </div>
                      <figcaption className="text-xs leading-relaxed text-black/70 md:text-sm">
                        Figure 2. Inflammation marker shift (4 months). CRP
                        (mg/L) at baseline vs 4 months in older adults receiving
                        Urolithin A 1 g/day vs placebo.​
                      </figcaption>
                    </figure>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Rigorous Testing Side Panel */}
      {rigorousTestingOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity"
            onClick={() => setRigorousTestingOpen(false)}
          />
          <div className="fixed right-0 top-0 z-50 flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl transition-transform md:w-[500px] lg:w-[600px]">
            <div className="sticky top-0 z-10 bg-[#F7F8F2]">
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-black md:text-3xl">
                    Rigorous Testing
                  </h2>
                  <button
                    onClick={() => setRigorousTestingOpen(false)}
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
                <hr className="border-t border-black/20" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-8 p-6">
                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Human Clinical Validation
                  </h3>
                  <p className="text-sm leading-relaxed text-black md:text-base">
                    MUSCULAR PRO&apos;s core ingredient, Urolithin A, has been
                    evaluated in multiple randomized, double-blind,
                    placebo-controlled human trials demonstrating improvements
                    in muscle strength, endurance, and mitochondrial function.
                  </p>
                </section>

                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Manufacturing Standards
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-black md:text-base">
                    <li>
                      Manufactured in facilities that follow FDA dietary
                      supplement cGMPs (21 CFR Part 111).
                    </li>
                    <li>
                      Core ingredients supported by independent mechanistic
                      research, with urolithin A evaluated in randomized,
                      double-blind, placebo-controlled human trials.
                    </li>
                    <li>
                      Third-party testing program designed to verify label
                      claims and screen for contaminants and adulterants.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                    Testing Protocols
                  </h3>
                  <ul className="space-y-4 text-sm leading-relaxed text-black md:text-base">
                    <li>
                      <span className="font-semibold">Heavy Metals Tested</span>
                      — Screened for lead, arsenic, cadmium, and mercury using
                      ICP-MS methods aligned to USP elemental impurity
                      standards.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Purity &amp; Contamination
                      </span>
                      — Testing for pesticide residues, residual solvents, and
                      allergen screening as part of finished-product
                      specifications under 21 CFR 111.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Microbiological Safety
                      </span>
                      — Total aerobic microbial count (TAMC), yeast &amp; mold,
                      and pathogen screening (Salmonella, E. coli, Staph) using
                      validated methods.
                    </li>
                    <li>
                      <span className="font-semibold">Banned Substances</span>—
                      Screened for ~290 prohibited stimulants, anabolic agents,
                      and banned classes using NSF Certified for Sport
                      framework.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Potency Verification
                      </span>
                      — Quantitative assays confirm identity and potency of
                      actives to verify label claims as part of finished-product
                      specifications.
                    </li>
                    <li>
                      <span className="font-semibold">Stability Testing</span>—
                      Accelerated and real-time stability studies under
                      controlled conditions to support shelf-life dating and
                      maintain label claims over time.
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
