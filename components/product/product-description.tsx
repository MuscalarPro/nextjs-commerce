"use client";

import { Portal, Transition } from "@headlessui/react";
import { AddToCart } from "components/cart/add-to-cart";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import Image from "next/image";
import { Fragment, createContext, useContext, useEffect, useState } from "react";
import { ClinicalEvidenceButton } from "./clinical-evidence-button";
import { SubscriptionOptions } from "./subscription-options";
import { VariantSelector } from "./variant-selector";
import Link from "next/link";
import Price from "components/price";
import { subscriptionOptionsData } from "data/product/subscriptionOptionsData";

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
        className="inline-block text-[10px] translate-y-[-1px] rotate-45"
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
      <h2 className="mb-4  text-black heading-h2">
        Benefits that build over time
      </h2>
      <p className="mb-6 body-text">
        Your cells adapt before your mirror does.​
      </p>
      <div className="flex flex-col items-center gap-6">
        <ClinicalEvidenceButton
          openClinicalTrialsCallback={openClinicalTrialsCallback}
        />
        <div className="flex flex-wrap justify-center gap-6">
          {/* <M3HistoryButton /> */}
          {/* <MusclespanButton /> */}
        </div>
      </div>
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

export function ClinicalResearchButton({ variant = "light" }: { variant?: "light" | "dark" }) {
  const handleClick = () => {
    const event = new CustomEvent("openClinicalResearch");
    window.dispatchEvent(event);
  };

  const baseStyles = "flex items-center gap-2 text-sm transition-colors";
  const lightStyles = "text-black hover:text-neutral-800";
  const darkStyles = "text-white hover:text-neutral-200";
  const borderColor = variant === "light" ? "border-black" : "border-white";
  const textColor = variant === "light" ? "text-black" : "text-white";

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variant === "light" ? lightStyles : darkStyles}`}
    >
      <div className={`flex h-6 w-6 items-center justify-center rounded-full border ${borderColor} ${textColor}`}>
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
  const [purchaseMode, setPurchaseMode] = useState<"one-time" | "subscription">("subscription");
  const [selectedSubscriptionIndex, setSelectedSubscriptionIndex] = useState(2);

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
          <h1 className="text-3xl font-medium text-black md:text-[36px]">
            {product.title}
          </h1>
        </div>
      </div>
      {/* Key Selling Point and Rating */}
      <div className="mb-4 grid grid-cols-2 items-center">
        <div className="flex items-center gap-2 border-r border-neutral-300 pr-4">
          <span className="text-3xl font-bold text-[#7b2a8a]">#1</span>
          <span className="text-[12px] text-[#7b2a8a]">
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
          <Link href="/reviews" className="cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-[12px] underline text-[#7b2a8a]">
              4.9 • 100+ Reviews
            </span>
          </Link>
        </div>
      </div>
      {/* Product Description */}
      {product.descriptionHtml ? (
        <div className="mb-2">
          <Prose
            className="text-[16px] text-black"
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

      {/* Purchase Section Wrapper */}
      <div className="mt-8 rounded-3xl p-6 border-neutral-100">
        <h3 className="mb-6 body-text font-semibold text-black tracking-tight">
          Subscribe & save <span className="text-neutral-400 font-normal ml-1">(Base MRP ₹6,667)</span>
        </h3>
        
        <SubscriptionOptions 
          selectedIndex={purchaseMode === "subscription" ? selectedSubscriptionIndex : -1}
          onSelect={(index) => {
            setSelectedSubscriptionIndex(index);
            setPurchaseMode("subscription");
          }}
        />

        {/* Add to Cart Button */}
        <div className="mt-6 mb-6">
          <AddToCart 
            product={product} 
            label={purchaseMode === "one-time" ? "Add To Cart — ₹6,667" : "Add To Cart"}
          />
        </div>

        {/* One-time Purchase Toggle Pill - Light Theme version */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setPurchaseMode("one-time")}
            className={`group flex items-center gap-3 rounded-full px-5 py-2.5 text-[11px] font-bold tracking-[0.1em] transition-all border ${
              purchaseMode === "one-time"
                ? "bg-neutral-100 border-black/10 text-black shadow-sm"
                : "bg-white border-neutral-200 text-neutral-500 hover:border-neutral-300"
            }`}
          >
            <div className={`flex h-3 w-3 items-center justify-center rounded-full border ${
              purchaseMode === "one-time" ? "border-black" : "border-neutral-300"
            }`}>
              {purchaseMode === "one-time" && <div className="h-1.5 w-1.5 rounded-full bg-black" />}
            </div>
            <span className="uppercase">ONE-TIME PURCHASE</span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span className={purchaseMode === "one-time" ? "text-black" : "text-neutral-400"}>
              ₹6,667
              <span className="ml-2 text-neutral-300 line-through">₹7,500</span>
            </span>
          </button>
        </div>

        {/* Shipping and Trust Points - Light Theme */}
        <div className="space-y-4 px-2">
          <div className="flex items-center gap-3 text-sm text-neutral-600">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-300">
              <svg className="h-3 w-3 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-base tracking-tight">
              Free shipping across India <span className="mx-1 opacity-40">·</span> <span className="underline decoration-neutral-200 underline-offset-4 cursor-pointer hover:text-black transition-colors">International shipping</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-600">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-300">
              <svg className="h-3 w-3 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-base tracking-tight">
              Ships in 24 hrs from Mumbai <span className="mx-1 opacity-40">·</span> <span className="underline decoration-neutral-200 underline-offset-4 cursor-pointer hover:text-black transition-colors">COD available</span>
            </span>
          </div>
        </div>
      </div>
      {/* Benefits Accordion */}
      <div className="mb-4 border-b border-neutral-200 pb-4">
        <button
          onClick={() => setBenefitsOpen(!benefitsOpen)}
          className="flex w-full items-center justify-between text-left transition-colors"
        >
          <h2 className="text-[18px] font-sans font-semibold text-black">
            Clinically proven benefits
          </h2>
          <span className="text-[18px] font-light text-black transition-transform duration-300">
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
              <p className="text-[16px] text-black">
                After years of precision research, groundbreaking RCTs, and
                clinical validation, MUSCALAR PRO M3 targets aging's root code:
                mitochondrial decay delivering the first mitochondria-first
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
          <h2 className="text-[18px] font-sans font-semibold text-black">
            Key ingredients
          </h2>
          <span className="text-[18px] font-light text-black transition-transform duration-300">
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
              <p className="mb-3 text-[16px] text-black">
                M3 Stack™ <b>(Urolithin A + Spermidine + S‑Allyl Cysteine)</b>a
                clinically studied cellular‑performance trio designed to support
                mitochondrial renewal (mitophagy), cellular cleanup (autophagy),
                and antioxidant defense.
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
          <h2 className="text-[18px] font-sans font-semibold text-black">
            How to use M3
          </h2>
          <span className="text-[18px] font-light text-black transition-transform duration-300">
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
              <p className="mb-4 text-[16px] text-black">
                Take two veg caps daily to reach the clinically studied dose of
                Urolithin A used in double‑blind, placebo‑controlled human
                trials (1 g/day).
              </p>
              <h3 className="mb-2 text-[16px] font-semibold text-black">
                What you’re getting (recommended daily serving)
              </h3>
              <ul className="space-y-1 text-sm text-black">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Urolithin A 1 g (clinically studied dose; double‑blind,
                    placebo‑controlled RCT evidence in older adults)
                  </span>
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
            </div>
          </div>
        </div>
      </div>
      {/* Bundle Offer Card */}
      {/* <BundleProduct /> */}


      {/* Clinical Trials Side Panel */}
      <Transition show={clinicalTrialsOpen} as={Fragment}>
        <Portal>
          <div className="fixed inset-0 z-[100] flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={() => setClinicalTrialsOpen(false)}
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed right-0 top-0 z-[110] flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl md:w-[500px] lg:w-[600px]">
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
                      <p className="text-sm    text-black md:text-base">
                        Most dietary supplements are never evaluated in
                        gold-standard randomized, double-blind, placebo-controlled
                        clinical trials (DBRCTs).
                      </p>
                      <p className="mt-3 text-sm    text-black md:text-base">
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
                      <p className="mt-3 text-sm    text-black md:text-base">
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
                      <p className="text-sm    text-black md:text-base">
                        DBRCTs are the gold standard because they reduce bias
                        (randomization + blinding), control for placebo effects, and
                        test real‑world outcomes with predefined endpoints.
                      </p>
                      <p className="mt-3 text-sm    text-black md:text-base">
                        Urolithin A DBRCTs also report safety and tolerability
                        alongside performance and biomarker readouts.
                      </p>
                    </section>

                    {/* Peak Endurance */}
                    <section>
                      <h3 className="mb-3 text-lg font-semibold text-black md:text-xl">
                        Peak Endurance
                      </h3>
                      <p className="text-sm    text-black md:text-base">
                        M3 supports endurance capacity by targeting mitochondrial
                        quality control (mitophagy), which is mechanistically linked
                        to fatigue resistance in aging muscle.
                      </p>
                      <h4 className="mt-3 mb-2 text-base font-semibold text-black md:text-lg">
                        Clinical trial results
                      </h4>
                      <p className="text-sm    text-black md:text-base">
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
                      <p className="mt-3 text-sm    text-black md:text-base">
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
                      <p className="text-sm    text-black md:text-base">
                        M3 is designed to translate mitochondrial upgrades into
                        measurable performance (strength output and endurance under
                        load).
                      </p>
                      <h4 className="mt-3 mb-2 text-base font-semibold text-black md:text-lg">
                        Clinical trial results
                      </h4>
                      <p className="text-sm    text-black md:text-base">
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
                      <p className="mt-3 text-sm    text-black md:text-base">
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
                      <p className="text-sm    text-black md:text-base">
                        Urolithin A is a mitophagy activator, while Spermidine is
                        classically studied as an autophagy‑supportive polyamine;
                        together they map to “clean → rebuild” cellular maintenance
                        biology.
                      </p>
                      <p className="mt-3 text-sm    text-black md:text-base">
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
                      <p className="text-sm    text-black md:text-base">
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
                      <p className="text-sm    text-black md:text-base">
                        M3’s “mind” pillar is built around cellular housekeeping
                        (autophagy signaling) plus antioxidant neuroprotection to
                        support resilience under stress.
                      </p>
                      <h4 className="mt-3 mb-2 text-base font-semibold text-black md:text-lg">
                        Clinical / translational evidence
                      </h4>
                      <p className="text-sm    text-black md:text-base">
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
                      <p className="mt-3 text-sm    text-black md:text-base">
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

                      <p className="mt-3 text-sm    text-black md:text-base">
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

                      <p className="mt-3 text-sm    text-black md:text-base">
                        The RCT outcomes above are from trials of Urolithin A as an
                        ingredient; the combined finished M3 formula has not been
                        presented here as being tested as a single product in those
                        same trials.
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Portal>
      </Transition>


      {/* Ingredients Side Panel */}
      <Transition show={ingredientsPanelOpen} as={Fragment}>
        <Portal>
          <div className="fixed inset-0 z-[100] flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={() => setIngredientsPanelOpen(false)}
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed right-0 top-0 z-[110] flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl md:w-[500px] lg:w-[600px]">
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
                      <p className="text-sm    text-black md:text-base">
                        Muscalarpro™ [M3] is formulated with three clinically
                        studied bio‑molecules that target mitochondrial renewal,
                        cellular cleanup, and antioxidant defense no stimulants, no
                        “energy crash” positioning.
                      </p>
                    </section>

                    {/* Product Image */}
                    <div className="mb-6">
                      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
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

                      {/* Mitophagy Core   Urolithin A */}
                      <div className="mb-4">
                        <div className="mb-3 relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Urolithin_-_A.png?v=1769538868"
                            alt="Urolithin A"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                        </div>
                        <h5 className="mb-1 text-sm font-semibold text-black md:text-base">
                          Mitophagy Core Urolithin A (1 g/day)
                        </h5>
                        <p className="text-sm    text-black md:text-base">
                          Clinically studied mitophagy activator shown in
                          double‑blind, placebo‑controlled RCTs to improve muscle
                          endurance (contractions to fatigue) and improve
                          mitochrial stress biomarkers (acylcarnitines/ceramides)
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

                      {/* Autophagy Support   Spermidine */}
                      <div className="mb-4">
                        <div className="mb-3 relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Spermidine.png?v=1769538871"
                            alt="Spermidine"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                        </div>
                        <h5 className="mb-1 text-sm font-semibold text-black md:text-base">
                          Autophagy Support Spermidine (6 mg/day target dose)
                        </h5>
                        <p className="text-sm    text-black md:text-base">
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

                      {/* Neuro + Redox Defense   S‑Allyl Cysteine */}
                      <div className="mb-4">
                        <div className="mb-3 relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/S-Allyl_cysteine.png?v=1769538866"
                            alt="S-Allyl Cysteine"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                        </div>
                        <h5 className="mb-1 text-sm font-semibold text-black md:text-base">
                          Neuro + Redox Defense S‑Allyl Cysteine (1 mg/day)
                        </h5>
                        <p className="text-sm    text-black md:text-base">
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
                        <p className="mt-3 text-sm    text-black md:text-base">
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
                      <p className="text-sm    text-black md:text-base">
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
                      <p className="mt-3 text-xs    text-black/70 md:text-sm">
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
                      <p className="text-sm    text-black md:text-base">
                        Manufactured and quality‑screened with identity/purity and
                        contaminant checks (heavy metals, microbiology) as indicated
                        by your on‑pack quality icons.
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Portal>
      </Transition>


      {/* M3 History Side Panel */}
      <Transition show={m3HistoryOpen} as={Fragment}>
        <Portal>
          <div className="fixed inset-0 z-[100] flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={() => setM3HistoryOpen(false)}
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed right-0 top-0 z-[110] flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl md:w-[500px] lg:w-[600px]">
                {/* Sticky Header */}
                <div className="sticky top-0 z-10 bg-[#F7F8F2]">
                  <div className="p-6">
                    {/* Header with Close Button */}
                    <div className="mb-4 flex items-center justify-between">
                      <h2 className="text-2xl font-semibold text-black md:text-3xl">
                        Muscalarpro™ [M3]
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
                    <div className="mb-10">
                      <h3 className="mb-6 text-3xl font-medium leading-tight text-black md:text-[42px]">
                        A Victory for Musclespan
                      </h3>
                      <p className="mb-8 text-base leading-relaxed text-black md:text-lg">
                        Propelled by the unmet need for clinically dosed longevity nutrition in the Indian market, Celagenex Research partnered with Dr. Rajaram Samant to translate two decades of peer-reviewed Urolithin A science into M3 — a formulation built for the 40-to-65 adult.
                      </p>
                      
                      {/* Author Block */}
                      <div className="flex items-center gap-4 mb-10">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5B4FCB] text-white font-bold text-lg">
                          RS
                        </div>
                        <div>
                          <p className="text-base font-bold text-black">
                            Dr. Rajaram Samant, MD
                          </p>
                          <p className="text-[13px] font-medium text-neutral-500 leading-tight">
                            Founder, Celagenex Research<br />
                            Fellow, Indian Academy of Longevity Medicine
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Dashed Divider */}
                    <hr className="mb-10 border-t border-dashed border-black/20" />

                    {/* Timeline Section */}
                    <div className="mb-16">
                      <div className="space-y-12">
                        {/* 2016 */}
                        <div className="relative pl-8 border-l border-black/10">
                          <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-[#5B4FCB]" />
                          <h4 className="mb-2 text-xl font-bold text-black">
                            2016
                          </h4>
                          <p className="text-[15px] leading-relaxed text-neutral-700">
                            Ryu, Mouchiroud, Andreux et al. publish the first characterization of Urolithin A as a mitophagy activator and <em className="italic">exercise mimetic</em> molecule in <em className="italic">Nature Medicine</em>¹, establishing the compound's mechanism in preclinical models.
                          </p>
                        </div>

                        {/* 2018 */}
                        <div className="relative pl-8 border-l border-black/10">
                          <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-[#5B4FCB]" />
                          <h4 className="mb-2 text-xl font-bold text-black">
                            2018
                          </h4>
                          <p className="text-[15px] leading-relaxed text-neutral-700">
                            Celagenex Research begins work on mitochondrial-health nutraceuticals for the Indian market, focusing on molecules with existing human clinical data rather than novel-compound development.
                          </p>
                        </div>

                        {/* 2019 */}
                        <div className="relative pl-8 border-l border-black/10">
                          <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-[#5B4FCB]" />
                          <h4 className="mb-2 text-xl font-bold text-black">
                            2019
                          </h4>
                          <p className="text-[15px] leading-relaxed text-neutral-700">
                            Andreux, Blanco-Bose, Ryu et al. publish the first-in-human safety and pharmacokinetic study of Urolithin A in <em className="italic">Nature Metabolism</em>², establishing the dose-response curve and safety profile in healthy adults.
                          </p>
                        </div>

                        {/* 2022 */}
                        <div className="relative pl-8 border-l border-black/10">
                          <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-[#5B4FCB]" />
                          <h4 className="mb-2 text-xl font-bold text-black">
                            2022
                          </h4>
                          <p className="text-[15px] leading-relaxed text-neutral-700">
                            Two landmark randomized controlled trials on Urolithin A publish in the same year: Singh et al. in <em className="italic">Cell Reports Medicine</em>³ (middle-aged adults, +12% hamstring strength at 16 weeks) and Liu et al. in <em className="italic">JAMA Network Open</em>⁴ (older adults, improved muscle endurance).
                          </p>
                        </div>

                        {/* 2023 */}
                        <div className="relative pl-8 border-l border-black/10">
                          <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-[#5B4FCB]" />
                          <h4 className="mb-2 text-xl font-bold text-black">
                            2023
                          </h4>
                          <p className="text-[15px] leading-relaxed text-neutral-700">
                            Celagenex launches MuscalarPro with the M3 Stack — the first clinically dosed Urolithin A formulation (1,000 mg) available in the Indian market, combined with Spermidine and S-Allyl Cysteine as mechanistic adjuncts.
                          </p>
                        </div>

                        {/* Today */}
                        <div className="relative pl-8 border-l border-black/10">
                          <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-[#5B4FCB]" />
                          <h4 className="mb-2 text-xl font-bold text-black">
                            Today
                          </h4>
                          <p className="text-[15px] leading-relaxed text-neutral-700">
                            M3's primary evidence base is four published clinical trials on Urolithin A. Celagenex's translation work continues in cognitive health, cardiovascular function, and post-training recovery in the 40-to-65 Indian adult population.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Citations */}
                    <div className="mt-12 pt-8 border-t border-black/10">
                      <p className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-6">
                        Citations
                      </p>
                      <ul className="space-y-4 text-[12px] leading-relaxed text-neutral-500">
                        <li className="flex gap-3">
                          <span className="shrink-0 font-bold text-black">1</span>
                          <span>Ryu D, Mouchiroud L, Andreux PA, et al. Urolithin A induces mitophagy and prolongs lifespan in C. elegans and increases muscle function in rodents. <em className="italic">Nature Medicine</em>. 2016;22(8):879–888.</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="shrink-0 font-bold text-black">2</span>
                          <span>Andreux PA, Blanco-Bose W, Ryu D, et al. The mitophagy activator urolithin A is safe and induces a molecular signature of improved mitochondrial and cellular health in humans. <em className="italic">Nature Metabolism</em>. 2019;1(6):595–603.</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="shrink-0 font-bold text-black">3</span>
                          <span>Singh A, D’Amico D, Andreux PA, et al. Urolithin A improves muscle strength, exercise performance, and biomarkers of mitochondrial health in a randomized trial in middle-aged adults. <em className="italic">Cell Reports Medicine</em>. 2022;3(5):100633.</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="shrink-0 font-bold text-black">4</span>
                          <span>Liu S, D'Amico D, Shankland E, et al. Effect of Urolithin A Supplementation on Muscle Endurance and Mitochondrial Health in Older Adults: A Randomized Clinical Trial. <em className="italic">JAMA Network Open</em>. 2022;5(1):e2144279.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Portal>
      </Transition>


      {/* Musclespan Side Panel */}
      <Transition show={musclespanOpen} as={Fragment}>
        <Portal>
          <div className="fixed inset-0 z-[100] flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={() => setMusclespanOpen(false)}
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed right-0 top-0 z-[110] flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl md:w-[700px] lg:w-[850px] text-black">
                {/* Sticky Header with Close Button */}
                <div className="sticky top-0 z-10 bg-[#F7F8F2] p-6 flex justify-end">
                  <button
                    onClick={() => setMusclespanOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5"
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

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-8 pb-12">
                  <h2 className="text-4xl font-medium text-black mb-10 md:text-[56px] leading-tight">
                    What is musclespan?
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
                    {/* Left Column: Text */}
                    <div className="space-y-8">
                      <p className="body-text leading-relaxed text-black md:text-[20px]">
                        Musclespan is how long your muscles stay strong, fast, and functional across your lifetime. Unlike lifespan, which counts years, musclespan measures your ability to move, lift, recover, and stay independent — decade after decade.
                      </p>
                      <p className="body-text font-normal leading-relaxed text-black md:text-[20px]">
                        It's governed at the cellular level by the health of your <span className="italic font-light">mitochondria</span> — the microscopic engines that power every muscle contraction. When they decline, musclespan declines with them.
                      </p>
                      
                      <h3 className="text-2xl font-medium leading-tight text-black md:text-[32px] pt-4">
                        Grip strength predicts 25-year mortality risk better than BMI.<sup>1</sup>
                      </h3>
                    </div>

                    {/* Right Column: Chart */}
                    <div className="relative rounded-2xl bg-[#1a1a1a] p-8">
                      <p className="mb-10 text-sm text-neutral-400 max-w-[220px] leading-tight">
                        Relative 25-year mortality risk, by midlife grip strength
                      </p>

                      <div className="relative flex items-end justify-center gap-10 h-[240px] mb-8">
                        {/* Strongest Tertile */}
                        <div className="flex flex-col items-center gap-4 flex-1">
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider whitespace-nowrap">
                            Strongest tertile · 50%
                          </span>
                          <div className="w-full bg-[#ffffff] rounded-sm transition-all duration-700" style={{ height: '50%' }}></div>
                        </div>

                        {/* Weakest Tertile */}
                        <div className="flex flex-col items-center gap-4 flex-1">
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider whitespace-nowrap">
                            Weakest tertile · 100%
                          </span>
                          <div className="w-full bg-[#ffffff] rounded-sm transition-all duration-700" style={{ height: '100%' }}></div>
                        </div>

                        {/* X-axis label */}
                        <div className="absolute -bottom-8 left-0 right-0 text-center">
                          <span className="text-[9px] font-bold text-white tracking-[0.3em] uppercase">
                            RELATIVE MORTALITY RISK
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Figure Caption spanning bottom */}
                  <p className="text-xs leading-relaxed text-black md:text-[14px] max-w-3xl mb-12">
                    Figure 1. Relative 25-year mortality and disability risk in adults, indexed against the weakest midlife grip-strength tertile. Adults in the strongest tertile had roughly half the risk of those in the weakest — independent of BMI, smoking, and baseline activity level.
                  </p>

                  {/* Citations Section */}
                  <div className="border-t border-black/10 pt-8">
                    <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">CITATIONS</h4>
                    <p className="text-[11px] leading-relaxed text-neutral-600 max-w-2xl">
                      <span className="font-bold mr-1">1</span> Rantanen T, Guralnik JM, Foley D, et al. Midlife hand grip strength as a predictor of old-age disability. <span className="italic">JAMA</span>. 1999;281(6):558–560.
                    </p>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Portal>
      </Transition>

      {/* M3 Delivery Side Panel */}
      <Transition show={m3DeliveryOpen} as={Fragment}>
        <Portal>
          <div className="fixed inset-0 z-[100] flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={() => setM3DeliveryOpen(false)}
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed right-0 top-0 z-[110] flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl md:w-[700px] lg:w-[900px] text-black">
                {/* Sticky Header */}
                <div className="sticky top-0 z-10 bg-[#F7F8F2]">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-neutral-500 uppercase tracking-widest mb-10">
                          Decode Peak Performance [M3]
                        </span>
                        <h2 className="text-3xl font-medium text-black md:text-[42px] leading-tight mb-10">
                          How M3 reaches your cells
                        </h2>
                      </div>
                      <button
                        onClick={() => setM3DeliveryOpen(false)}
                        className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5"
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
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 pb-12 space-y-12">
                  <section className="space-y-6">
                    <h3 className="text-[20px] font-medium text-black">
                      Why most supplements don't survive digestion
                    </h3>
                    <p className="text-[17px] leading-relaxed text-neutral-700">
                      The dose printed on a bottle and the dose your body actually absorbs are rarely the same number. Stomach acid, digestive enzymes, and oxygen break down most active ingredients before they reach your bloodstream — so a 1,000mg label can deliver a fraction of that to the cell.
                    </p>
                    <p className="text-[17px] leading-relaxed text-neutral-700">
                      M3 is formulated to keep each molecule intact through digestion. What the label promises is what your body gets.
                    </p>
                  </section>

                  <hr className="border-black/10 border-dashed" />

                  <section className="space-y-6">
                    <h3 className="text-[20px] font-medium text-black">
                      The M3 capsule
                    </h3>
                    <p className="text-[17px] leading-relaxed text-neutral-700">
                      Each M3 capsule is a plant-based shell designed to protect its contents until they can be absorbed. Think of it as a timed-release envelope for the three active molecules inside.
                    </p>
                    <ul className="space-y-4 pt-2">
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span className="text-[16px] text-neutral-700">Made from plant cellulose — no animal gelatin, no synthetic coatings.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span className="text-[16px] text-neutral-700">Shields the molecules from stomach acid and bile.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span className="text-[16px] text-neutral-700">Two capsules a day deliver the full clinical dose. No re-dosing, no spreading out through the day.</span>
                      </li>
                    </ul>
                  </section>

                  <hr className="border-black/10 border-dashed" />

                  <section className="space-y-6">
                    <h3 className="text-[20px] font-medium text-black">
                      Your daily dose
                    </h3>
                    <p className="text-[17px] leading-relaxed text-neutral-700">
                      Two capsules deliver the complete M3 Stack™ at the exact doses studied in human clinical trials:
                    </p>
                    <ul className="space-y-6 pt-2">
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span className="text-[16px] text-neutral-700">
                          <strong className="text-black font-semibold">Urolithin A · 1,000mg</strong> — the dose used in the JAMA Network Open RCT on middle-aged adults.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span className="text-[16px] text-neutral-700">
                          <strong className="text-black font-semibold">Spermidine · 6mg</strong> — the dose shown to support autophagy in controlled human studies.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span className="text-[16px] text-neutral-700">
                          <strong className="text-black font-semibold">S-Allyl Cysteine · 1mg</strong> — a clinically studied antioxidant derived from aged garlic.
                        </span>
                      </li>
                    </ul>
                    <p className="text-[15px] italic text-neutral-500 pt-4">
                      Take both capsules together, with or without food, at any time of day.
                    </p>
                  </section>

                  <hr className="border-black/10 border-dashed" />

                  <section className="space-y-6">
                    <h3 className="text-[20px] font-medium text-black">
                      How we verify what's in each bottle
                    </h3>
                    <p className="text-[17px] leading-relaxed text-neutral-700">
                      Every batch of M3 goes through a standardized testing program before it ships. We verify three things: identity (the molecule is what we say it is), potency (the dose is what we promised), and purity (nothing else came along for the ride).
                    </p>
                    <p className="text-[17px] leading-relaxed text-neutral-700">
                      Manufacturing follows FDA dietary supplement cGMPs under 21 CFR Part 111 — the federal quality framework for supplements sold in the US.
                    </p>
                  </section>

                  <hr className="border-black/10 border-dashed" />

                  <section className="space-y-6">
                    <h3 className="text-[20px] font-medium text-black">
                      What each batch is tested for
                    </h3>
                    <p className="text-[17px] leading-relaxed text-neutral-700">
                      Every batch of M3 is tested by an independent third-party lab for:
                    </p>
                    <ul className="space-y-6 pt-2">
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span className="text-[16px] text-neutral-700 leading-relaxed">
                          <strong className="text-black font-semibold">Heavy metals.</strong> Lead, arsenic, cadmium, and mercury, measured by ICP-MS — the same analytical method used for pharmaceutical-grade testing.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span className="text-[16px] text-neutral-700 leading-relaxed">
                          <strong className="text-black font-semibold">Pesticides and solvents.</strong> Residue screening for common agricultural and manufacturing contaminants.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span className="text-[16px] text-neutral-700 leading-relaxed">
                          <strong className="text-black font-semibold">Microbiological safety.</strong> Screening for Salmonella, E. coli, and Staph, plus total yeast and mold counts.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span className="text-[16px] text-neutral-700 leading-relaxed">
                          <strong className="text-black font-semibold">Banned substances.</strong> Screened against NSF Certified for Sport's 290+ prohibited-substance list, so competitive athletes can take M3 without risk of a failed test.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span className="text-[16px] text-neutral-700 leading-relaxed">
                          <strong className="text-black font-semibold">Stability.</strong> Accelerated and real-time storage studies confirm the molecules remain intact through the printed expiration date.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                        <span className="text-[16px] text-neutral-700 leading-relaxed">
                          <strong className="text-black font-semibold">Label-claim potency.</strong> Quantitative assays verify that each capsule contains the stated dose of Urolithin A, Spermidine, and SAC before the batch is released.
                        </span>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Portal>
      </Transition>

      {/* Clinical Research Side Panel */}
      <Transition show={clinicalResearchOpen} as={Fragment}>
        <Portal>
          <div className="fixed inset-0 z-[100] flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={() => setClinicalResearchOpen(false)}
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed right-0 top-0 z-[110] flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl md:w-[700px] lg:w-[900px] text-black">
                {/* Sticky Header */}
                <div className="sticky top-0 z-10 bg-[#F7F8F2]">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                          [M3] &middot; MUSCLESPAN LONGEVITY STACK
                        </p>
                        <h2 className="text-2xl font-semibold text-black md:text-3xl">
                          Our Clinical Research
                        </h2>
                      </div>
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
                    <hr className="border-t border-black/20" />
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="space-y-12 p-6 pb-20">
                    <section>
                      <h3 className="mb-4 text-xl font-bold text-black md:text-2xl">
                        Human Clinical Validation
                      </h3>
                      <p className="text-base leading-relaxed text-black md:text-lg">
                        In a 16-week randomized, double-blind, placebo-controlled clinical trial in adults aged 40 to 65, Urolithin A — the active compound in M3 — improved hamstring muscle strength by 12% over placebo, increased skeletal muscle endurance by 41%, and reduced circulating C-reactive protein, a marker of systemic inflammation, by 40%¹.
                      </p>
                    </section>

                    <div className="space-y-12">
                      {/* Figure 1: Bar Chart */}
                      <section>
                        <h4 className="mb-6 text-base font-bold text-black uppercase tracking-wider">
                          Change in hamstring muscle strength over 16 weeks
                        </h4>
                        <div className="relative h-[240px] w-full border-b border-black/10 pt-12 flex items-end justify-around pb-8 px-4">
                          {/* Y-Axis Labels */}
                          <div className="absolute left-0 h-full flex flex-col justify-between text-[10px] text-neutral-400">
                            <span>15%</span>
                            <span>10%</span>
                            <span>5%</span>
                            <span className="mb-8">0%</span>
                          </div>
                          
                          {/* Grid Lines */}
                          <div className="absolute inset-0 z-0 flex flex-col justify-between pointer-events-none">
                            <div className="border-t border-black/5 w-full h-px" />
                            <div className="border-t border-black/5 w-full h-px" />
                            <div className="border-t border-black/5 w-full h-px" />
                            <div className="mb-8 w-full h-px" />
                          </div>

                          {/* Urolithin A Bar */}
                          <div className="relative flex flex-col items-center group w-1/3">
                            <div className="mb-2 text-[14px] font-bold text-[#5B4FCB]">+12%</div>
                            <div className="w-full bg-[#5B4FCB] rounded-sm shadow-lg transition-transform hover:scale-105" style={{ height: '160px' }} />
                            <div className="mt-4 text-center">
                              <p className="text-[12px] font-bold text-black">Urolithin A</p>
                              <p className="text-[10px] text-neutral-500">1,000 mg/day</p>
                            </div>
                          </div>

                          {/* Placebo Bar */}
                          <div className="relative flex flex-col items-center group w-1/3">
                            <div className="mb-2 text-[14px] font-bold text-neutral-400">+0.4%</div>
                            <div className="w-full bg-neutral-200 rounded-sm" style={{ height: '8px' }} />
                            <div className="mt-4 text-center">
                              <p className="text-[12px] font-bold text-black">Placebo</p>
                              <p className="text-[10px] text-neutral-500">matched capsule</p>
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 text-[11px] text-neutral-500 italic leading-relaxed">
                          Figure 1. Change in peak torque of the hamstring muscle group (primary strength endpoint) after 16 weeks of daily supplementation, versus placebo, in adults aged 40 to 65.
                        </p>
                      </section>

                      {/* Figure 2: Line Chart */}
                      <section>
                        <h4 className="mb-6 text-base font-bold text-black uppercase tracking-wider">
                          Skeletal muscle endurance over 16 weeks
                        </h4>
                        <div className="relative h-[240px] w-full border-b border-l border-black/10 p-4">
                          {/* SVG Line Chart */}
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50">
                            {/* Grid Lines */}
                            <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
                            <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
                            <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
                            <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" />
                            
                            {/* Placebo Line */}
                            <path 
                              d="M 0 50 L 25 48 L 50 47 L 75 46 L 100 48" 
                              fill="none" 
                              stroke="#999" 
                              strokeWidth="1.5"
                            />
                            <circle cx="100" cy="48" r="1.5" fill="#999" />
                            <text x="100" y="45" fontSize="3" fill="#999" textAnchor="end">Placebo +2%</text>

                            {/* Urolithin A Line */}
                            <path 
                              d="M 0 50 L 25 35 L 50 20 L 75 15 L 100 9" 
                              fill="none" 
                              stroke="#5B4FCB" 
                              strokeWidth="2"
                            />
                            <circle cx="100" cy="9" r="2" fill="#5B4FCB" />
                            <text x="100" y="5" fontSize="4" fontWeight="bold" fill="#5B4FCB" textAnchor="end">Urolithin A +41%</text>
                          </svg>

                          {/* Labels */}
                          <div className="absolute -left-8 top-0 h-full flex flex-col justify-between text-[10px] text-neutral-400">
                            <span>50%</span>
                            <span>25%</span>
                            <span>0%</span>
                          </div>
                          <div className="absolute bottom-[-20px] left-0 w-full flex justify-between text-[10px] text-neutral-400">
                            <span>0</span>
                            <span>4</span>
                            <span>8</span>
                            <span>12</span>
                            <span>16</span>
                          </div>
                          <div className="absolute bottom-[-35px] left-1/2 -translate-x-1/2 text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                            Weeks
                          </div>
                        </div>
                        <div className="pt-8">
                          <p className="text-[11px] text-neutral-500 italic leading-relaxed">
                            Figure 2. Change in skeletal muscle endurance (contractions performed before volitional fatigue) across 16 weeks of supplementation, relative to baseline.
                          </p>
                        </div>
                      </section>
                    </div>

                    <hr className="border-black/10 border-dashed" />

                    <section className="space-y-4">
                      <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-widest">
                        Citations
                      </h3>
                      <ul className="space-y-4 text-sm leading-relaxed text-neutral-600">
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-black min-w-[12px]">1</span>
                          <span>Singh A, D’Amico D, Andreux PA, et al. Urolithin A improves muscle strength, exercise performance, and biomarkers of mitochondrial health in a randomized trial in middle-aged adults. <em className="italic">Cell Reports Medicine</em>. 2022;3(5):100633.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-bold text-black min-w-[12px]">2</span>
                          <span>Andreux PA, Blanco-Bose W, Ryu D, et al. The mitophagy activator urolithin A is safe and induces a molecular signature of improved mitochondrial and cellular health in humans. <em className="italic">Nature Metabolism</em>. 2019;1(6):595–603.</span>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Portal>
      </Transition>

      {/* Rigorous Testing Side Panel */}
      <Transition show={rigorousTestingOpen} as={Fragment}>
        <Portal>
          <div className="fixed inset-0 z-[100] flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={() => setRigorousTestingOpen(false)}
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed right-0 top-0 z-[110] flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl md:w-[700px] lg:w-[900px]">
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
                  <div className="space-y-12 p-6">
                    <section>
                      <h3 className="mb-4 text-xl font-bold text-black md:text-2xl">
                        Human Clinical Validation
                      </h3>
                      <p className="text-base leading-relaxed text-black md:text-lg">
                        MUSCALAR PRO&apos;s core ingredient, Urolithin A, has been
                        evaluated in multiple randomized, double-blind,
                        placebo-controlled human trials demonstrating improvements
                        in muscle strength, endurance, and mitochondrial function.
                      </p>
                    </section>

                    <section>
                      <h3 className="mb-4 text-xl font-bold text-black md:text-2xl">
                        Manufacturing Standards
                      </h3>
                      <ul className="space-y-4 text-base leading-relaxed text-black md:text-lg">
                        <li className="flex items-start">
                          <span className="mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/20" />
                          <span>
                            Manufactured in facilities that follow FDA dietary
                            supplement cGMPs (21 CFR Part 111).
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/20" />
                          <span>
                            Core ingredients supported by independent mechanistic
                            research, with urolithin A evaluated in randomized,
                            double-blind, placebo-controlled human trials.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/20" />
                          <span>
                            Third-party testing program designed to verify label
                            claims and screen for contaminants and adulterants.
                          </span>
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="mb-6 text-xl font-bold text-black md:text-2xl">
                        Testing Protocols
                      </h3>
                      <ul className="space-y-6 text-base leading-relaxed text-black md:text-lg">
                        <li>
                          <p className="font-bold text-black mb-1">Heavy Metals Tested</p>
                          <p className="text-neutral-600">
                            Screened for lead, arsenic, cadmium, and mercury using
                            ICP-MS methods aligned to USP elemental impurity
                            standards.
                          </p>
                        </li>
                        <li>
                          <p className="font-bold text-black mb-1">Purity &amp; Contamination</p>
                          <p className="text-neutral-600">
                            Testing for pesticide residues, residual solvents, and
                            allergen screening as part of finished-product
                            specifications under 21 CFR 111.
                          </p>
                        </li>
                        <li>
                          <p className="font-bold text-black mb-1">Microbiological Safety</p>
                          <p className="text-neutral-600">
                            Total aerobic microbial count (TAMC), yeast &amp; mold,
                            and pathogen screening (Salmonella, E. coli, Staph) using
                            validated methods.
                          </p>
                        </li>
                        <li>
                          <p className="font-bold text-black mb-1">Banned Substances</p>
                          <p className="text-neutral-600">
                            Screened for ~290 prohibited stimulants, anabolic agents,
                            and banned classes using NSF Certified for Sport
                            framework.
                          </p>
                        </li>
                        <li>
                          <p className="font-bold text-black mb-1">Potency Verification</p>
                          <p className="text-neutral-600">
                            Quantitative assays confirm identity and potency of
                            actives to verify label claims as part of finished-product
                            specifications.
                          </p>
                        </li>
                        <li>
                          <p className="font-bold text-black mb-1">Stability Testing</p>
                          <p className="text-neutral-600">
                            Accelerated and real-time stability studies under
                            controlled conditions to support shelf-life dating and
                            maintain label claims over time.
                          </p>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Portal>
      </Transition>
    </div>
  );
}
