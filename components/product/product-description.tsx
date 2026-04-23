"use client";

import { Disclosure, Portal, Transition } from "@headlessui/react";
import { AddToCart } from "components/cart/add-to-cart";
import Prose from "components/prose";
import { rigorousTestingData } from "data/product/rigorousTestingData";
import { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";
import { Fragment, createContext, useContext, useEffect, useState } from "react";
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
    const event = new CustomEvent("openMusclespan1");
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
    const event = new CustomEvent("openClinicalResearch1");
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


export function ExploreFormulationButton() {
  const handleClick = () => {
    const event = new CustomEvent("openIngredients");
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-3 text-[14px] text-black hover:text-neutral-600 transition-colors group"
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-black transition-colors group-hover:bg-black group-hover:text-white">
        <span className="text-sm font-light">+</span>
      </div>
      <span className="font-medium tracking-tight">Explore our formulation</span>
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
  const [musclespanOpen1, setMusclespanOpen1] = useState(false);
  const [clinicalResearchOpen, setClinicalResearchOpen] = useState(false);
  const [clinicalResearchOpen1, setClinicalResearchOpen1] = useState(false);
  const [brainHealthOpen, setBrainHealthOpen] = useState(false);
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

  const [rigorousTestingOpen, setRigorousTestingOpen] = useState(false);
  const [selectedTestingId, setSelectedTestingId] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenOverlay = (event: any) => {
      if (event.detail?.id) {
        setSelectedTestingId(event.detail.id);
      }
      setRigorousTestingOpen(true);
    };

    window.addEventListener("openRigorousTesting", handleOpenOverlay);
    return () => window.removeEventListener("openRigorousTesting", handleOpenOverlay);
  }, []);

  useEffect(() => {
    const handleOpenM3History = () => {
      setM3HistoryOpen(true);
    };
    const handleOpenMusclespan = () => {
      setMusclespanOpen(true);
    };
    const handleOpenMusclespan1 = () => {
      setMusclespanOpen1(true);
    };
    const handleOpenClinicalResearch = () => {
      setClinicalResearchOpen(true);
    };
    const handleOpenClinicalResearch1 = () => {
      setClinicalResearchOpen1(true);
    };
    const handleOpenBrainHealth = () => {
      setBrainHealthOpen(true);
    };
    const handleOpenM3Delivery = () => {
      setM3DeliveryOpen(true);
    };
    const handleOpenClinicalTrials = () => {
      setClinicalTrialsOpen(true);
    };
    const handleOpenIngredients = () => {
      setIngredientsPanelOpen(true);
    };
    window.addEventListener("openM3History", handleOpenM3History);
    window.addEventListener("openMusclespan", handleOpenMusclespan);
    window.addEventListener("openMusclespan1", handleOpenMusclespan1);
    
    window.addEventListener("openClinicalResearch", handleOpenClinicalResearch);
    window.addEventListener("openClinicalResearch1", handleOpenClinicalResearch1);

    window.addEventListener("openBrainHealth", handleOpenBrainHealth);
    window.addEventListener("openM3Delivery", handleOpenM3Delivery);
    window.addEventListener("openClinicalTrials", handleOpenClinicalTrials);
    window.addEventListener("openIngredients", handleOpenIngredients);
    return () => {
      window.removeEventListener("openM3History", handleOpenM3History);
      window.removeEventListener("openMusclespan", handleOpenMusclespan);
      window.removeEventListener("openMusclespan1", handleOpenMusclespan1);
      
      window.removeEventListener(
        "openClinicalResearch",
        handleOpenClinicalResearch,
      );
      window.removeEventListener("openM3Delivery", handleOpenM3Delivery);
      window.removeEventListener(
        "openClinicalTrials",
        handleOpenClinicalTrials,
      );
      window.removeEventListener("openIngredients", handleOpenIngredients);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col mt-20">
      {/* Product Badge and Title */}
      <div className="mb-6 flex flex-col">
        {/* Product Tags */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-[#161715] text-white px-6 py-2 rounded-full text-[12px] md:text-[13px] font-semibold tracking-wide uppercase">
            Bestseller
          </span>
          <span className="border border-[#7b2a8a] text-[#7b2a8a] px-6 py-2 rounded-full text-[12px] md:text-[13px] font-semibold tracking-wide uppercase">
            New arrival
          </span>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-medium text-black md:text-[42px] leading-tight tracking-tight">
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
        <div className="flex w-full mb-8">
          <button
            onClick={() => setPurchaseMode("one-time")}
            className={`group flex items-center justify-center gap-6 rounded-full w-full py-3.5 text-[11px] font-bold tracking-[0.1em] transition-all border ${
              purchaseMode === "one-time"
                ? "bg-neutral-100 border-black/10 text-black shadow-sm "
                : "bg-white border-neutral-200 text-neutral-500 hover:border-neutral-300"
            }`}
          >
            <div className={`flex h-3 w-3 items-center justify-center rounded-full border ${
              purchaseMode === "one-time" ? "border-black" : "border-neutral-300"
            }`}>
              {purchaseMode === "one-time" && <div className="h-2 w-2 rounded-full bg-black" />}
            </div>
            <span className="uppercase">ONE-TIME PURCHASE</span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span className={purchaseMode === "one-time" ? "text-black border-l border-neutral-200 pl-6" : "text-neutral-500 border-l border-neutral-200 pl-6"}>
              ₹6,667
              <span className="ml-2 text-neutral-500 line-through">₹7,500</span>
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
              <p className="text-[16px] text-black mb-6 leading-relaxed">
                After years of precision research and double-blind RCTs on Urolithin A, M3 targets aging at its root: mitochondrial decay.
                <button
                  onClick={() => setClinicalTrialsOpen(true)}
                  className="ml-2 inline-block text-sm text-black underline cursor-pointer"
                >
                  Learn more about M3 science
                </button>
              </p>
              <div className="space-y-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="h-6 w-1 bg-black shrink-0 mt-1" />
                  <p className="text-[16px] text-black">
                    <span className="font-bold">Endurance:</span> +41% improvement in contractions-to-fatigue*
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-6 w-1 bg-black shrink-0 mt-1" />
                  <p className="text-[16px] text-black">
                    <span className="font-bold">Muscle strength:</span> +12% gain after 16 weeks in clinical trials*
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-6 w-1 bg-black shrink-0 mt-1" />
                  <p className="text-[16px] text-black">
                    <span className="font-bold">Recovery:</span> -40% inflammation (CRP) after 4 months*
                  </p>
                </div>
              </div>
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
              <div className="space-y-8 mb-10">
                {/* Urolithin A */}
                <div className="flex gap-4">
                  <div className="h-10 w-0.5 bg-black/10 shrink-0 mt-1" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-[#5B4FCB] text-white text-[10px] font-bold px-1.5 py-0.5 rounded leading-none">M3</span>
                      <h4 className="text-[16px] font-bold text-black">Urolithin A <span className="font-normal text-neutral-400">· 1,000mg</span></h4>
                    </div>
                    <p className="text-[14px] text-neutral-600 leading-relaxed">
                      The mitochondria rebuilder. Clinically proven to improve muscle endurance and cellular energy in adults over 40.
                    </p>
                  </div>
                </div>

                {/* Spermidine */}
                <div className="flex gap-4">
                  <div className="h-10 w-0.5 bg-black/10 shrink-0 mt-1" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-[#5B4FCB] text-white text-[10px] font-bold px-1.5 py-0.5 rounded leading-none">M3</span>
                      <h4 className="text-[16px] font-bold text-black">Spermidine <span className="font-normal text-neutral-400">· 6mg</span></h4>
                    </div>
                    <p className="text-[14px] text-neutral-600 leading-relaxed">
                      The cellular housekeeper. Triggers autophagy to clear damaged proteins and keep cells running clean.
                    </p>
                  </div>
                </div>

                {/* S-Allyl Cysteine */}
                <div className="flex gap-4">
                  <div className="h-10 w-0.5 bg-black/10 shrink-0 mt-1" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-[#5B4FCB] text-white text-[10px] font-bold px-1.5 py-0.5 rounded leading-none">M3</span>
                      <h4 className="text-[16px] font-bold text-black">S-Allyl Cysteine <span className="font-normal text-neutral-400">· 1mg</span></h4>
                    </div>
                    <p className="text-[14px] text-neutral-600 leading-relaxed">
                      The antioxidant shield. Boosts glutathione to protect muscle and brain tissue under training stress.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <button
                  onClick={() => setClinicalResearchOpen(true)}
                  className="text-[12px] font-bold tracking-[0.15em] text-black underline uppercase"
                >
                  DISCOVER OUR SCIENCE
                </button>
              </div>

              <div className="border-t border-neutral-100 pt-8 mb-10">
                <h4 className="text-[15px] font-bold text-black mb-6">Clean formulation:</h4>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Vegan",
                    "Non-GMO",
                    "Gluten free",
                    "Stimulant free",
                    "Third-party tested"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-200">
                        <svg className="h-3 w-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[15px] text-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button 
                  onClick={() => setIngredientsPanelOpen(true)}
                  className="text-[12px] font-bold tracking-[0.15em] text-black underline uppercase"
                >
                  VIEW SUPPLEMENT LABEL
                </button>
              </div>
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
              <p className="text-[16px] text-black leading-relaxed">
                Take two vegan capsules daily, with or without food, morning or night. 
                Each bottle lasts one month at the clinically studied dose of 1,000mg Urolithin A per day. 
                M3 is stimulant-free and has no known interactions with common supplements like creatine, whey, or omega-3s.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bundle Offer Card */}
      {/* <BundleProduct /> */}


      </div>
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
                className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
                onClick={() => setIngredientsPanelOpen(false)}
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed right-0 top-0 z-[110] flex h-full w-full flex-col bg-white shadow-2xl md:w-[700px] lg:w-[850px] text-black">
                {/* Sticky Header with Close Button */}
                <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md p-8 flex justify-end">
                  <button
                    onClick={() => setIngredientsPanelOpen(false)}
                    className="flex h-12 w-12 items-center justify-center rounded-full transition-all hover:bg-black/5 group border border-black/10"
                    aria-label="Close"
                  >
                    <svg
                      className="h-8 w-8 text-black transition-transform group-hover:rotate-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-8 md:px-16 pb-20">
                  <div className="mb-16">
                    <div className="mb-4 flex items-center gap-2 opacity-60">
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-500">[M3]</span>
                      <span className="h-px w-4 bg-black/20"></span>
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-500">Musclespan Longevity Stack</span>
                    </div>
                    <h2 className="text-6xl font-medium text-black mb-12 md:text-[84px] leading-[0.9] tracking-tighter">
                      Formulation
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20">
                    {/* Left Column: Summary */}
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <p className="text-[16px] font-bold text-black leading-tight">
                          1,007 mg actives per daily serving
                        </p>
                        <p className="text-[15px] text-neutral-500 leading-relaxed">
                          Daily dose: <span className="text-black font-medium">2 capsules</span>, taken with your first meal
                        </p>
                        <p className="text-[15px] text-neutral-500 leading-relaxed">
                          No refrigeration required.
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Detailed Ingredients with Accordion */}
                    <div className="space-y-4">
                      {/* Active Molecules Accordion */}
                      <Disclosure defaultOpen={true}>
                        {({ open }) => (
                          <div className="border-t border-black/10 py-6">
                            <Disclosure.Button className="flex w-full items-center justify-between group py-2">
                              <h3 className="text-[13px] font-bold tracking-[0.2em] uppercase text-neutral-400 group-hover:text-black transition-colors">Active Molecules</h3>
                              <span className={`text-2xl font-light transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}>+</span>
                            </Disclosure.Button>
                            
                            <Transition
                              enter="transition duration-300 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-200 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <Disclosure.Panel className="mt-8 space-y-12">
                                {/* Urolithin A */}
                                <div className="group">
                                  <div className="flex items-baseline justify-between mb-4">
                                    <h4 className="text-xl font-medium text-black">Urolithin A</h4>
                                    <span className="px-3 py-1 rounded-full border border-black/10 text-[11px] font-bold uppercase tracking-wider text-neutral-500">1,000 mg</span>
                                  </div>
                                  <div className="space-y-3 text-[14px] leading-relaxed text-neutral-600">
                                    <p><span className="text-black mr-2">Source:</span> Purified via microbial fermentation from ellagic-acid precursors.</p>
                                    <p><span className="text-black mr-2">Role:</span> Activates mitophagy — the cellular cleanup process that clears damaged mitochondria so healthy ones can take over.</p>
                                    <p><span className="text-black mr-2">Primary evidence:</span> Singh et al., <span className="italic">Cell Reports Medicine</span> 2022 (16-week RCT, adults 40-65).</p>
                                  </div>
                                </div>

                                {/* Spermidine */}
                                <div className="group">
                                  <div className="flex items-baseline justify-between mb-4">
                                    <h4 className="text-xl font-medium text-black">Spermidine</h4>
                                    <span className="px-3 py-1 rounded-full border border-black/10 text-[11px] font-bold uppercase tracking-wider text-neutral-500">6 mg</span>
                                  </div>
                                  <div className="space-y-3 text-[14px] leading-relaxed text-neutral-600">
                                    <p><span className="text-black mr-2">Source:</span> Standardized wheat-germ extract.</p>
                                    <p><span className="text-black mr-2">Role:</span> Induces autophagy — the cell’s protein-recycling system that slows with age, allowing damaged proteins to accumulate in muscle fibers.</p>
                                    <p><span className="text-black mr-2">Primary evidence:</span> Madeo et al., <span className="italic">Science</span> 2018 (mechanistic review); Kiechl et al., <span className="italic">Am J Clin Nutr</span> 2018 (human observational).</p>
                                  </div>
                                </div>

                                {/* S-Allyl Cysteine */}
                                <div className="group">
                                  <div className="flex items-baseline justify-between mb-4">
                                    <h4 className="text-xl font-medium text-black">S-Allyl Cysteine</h4>
                                    <span className="px-3 py-1 rounded-full border border-black/10 text-[11px] font-bold uppercase tracking-wider text-neutral-500">1 mg</span>
                                  </div>
                                  <div className="space-y-3 text-[14px] leading-relaxed text-neutral-600">
                                    <p><span className="text-black mr-2">Source:</span> Aged garlic extract (standardized for SAC content).</p>
                                    <p><span className="text-black mr-2">Role:</span> Activates Nrf2, the body's master transcription-factor for antioxidant defense. Supports resilience to training-induced oxidative stress.</p>
                                    <p><span className="text-black mr-2">Primary evidence:</span> Ried et al., <span className="italic">Nutrition</span> 2018 (athlete population, aged garlic extract).</p>
                                  </div>
                                </div>
                              </Disclosure.Panel>
                            </Transition>
                          </div>
                        )}
                      </Disclosure>

                      {/* Delivery System Accordion */}
                      <Disclosure>
                        {({ open }) => (
                          <div className="border-t border-black/10 py-6">
                            <Disclosure.Button className="flex w-full items-center justify-between group py-2">
                              <h3 className="text-[13px] font-bold tracking-[0.2em] uppercase text-neutral-600 group-hover:text-black transition-colors">Delivery System</h3>
                              <span className={`text-2xl font-light transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}>+</span>
                            </Disclosure.Button>
                            
                            <Transition
                              enter="transition duration-300 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-200 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <Disclosure.Panel className="mt-8 space-y-6 text-[14px] leading-relaxed text-neutral-600">
                                <p><span className="text-black font-medium">HPMC capsule</span> (hydroxypropyl methylcellulose) — plant-derived, size 00, opaque white. Vegetarian and non-GMO.</p>
                                <p>Dissolution occurs in the stomach within approximately 10 minutes. All three active molecules are stable at gastric pH, so no enteric coating is required.</p>
                                <p>We do not make a general-case claim about how much of "standard supplements" is lost in digestion. That number depends on the specific molecule, not on the capsule. For M3, pharmacokinetic data on Urolithin A supplementation shows consistent plasma exposure; see citations in the Active Molecules section.</p>
                              </Disclosure.Panel>
                            </Transition>
                          </div>
                        )}
                      </Disclosure>

                      {/* Other Ingredients Accordion */}
                      <Disclosure>
                        {({ open }) => (
                          <div className="border-t border-black/10 py-6">
                            <Disclosure.Button className="flex w-full items-center justify-between group py-2">
                              <h3 className="text-[13px] font-bold tracking-[0.2em] uppercase text-neutral-600 group-hover:text-black transition-colors">Other Ingredients</h3>
                              <span className={`text-2xl font-light transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}>+</span>
                            </Disclosure.Button>
                            
                            <Transition
                              enter="transition duration-300 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-200 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <Disclosure.Panel className="mt-8 space-y-4 text-[14px] leading-relaxed text-neutral-600">
                                <p><span className="text-black font-medium">Microcrystalline cellulose</span> — plant-fiber-derived filler. Ensures uniform capsule fill.</p>
                                <p><span className="text-black font-medium">Magnesium stearate</span> — flow agent at less than 0.5% of capsule weight. Prevents active molecules from sticking to manufacturing equipment.</p>
                                <p><span className="text-black font-medium">Silicon dioxide</span> — anti-caking agent. Keeps the powdered actives free-flowing during encapsulation.</p>
                                <p className="pt-4 text-xs font-medium text-neutral-400 italic">Contains no artificial colors, no artificial flavors, no artificial fragrances, and no artificial preservatives.</p>
                              </Disclosure.Panel>
                            </Transition>
                          </div>
                        )}
                      </Disclosure>

                      {/* Quality & Certs - Static */}
                      <div className="border-t border-black/10 pt-10">
                        <p className="text-[14px] leading-relaxed text-neutral-500 mb-10">
                          Tested by NABL-accredited third-party laboratories for identity, purity, and potency per batch. Each lot is screened against 200+ heavy-metal and pesticide contaminants, microbiological safety panels, and WADA-listed banned substances. Certificates of Analysis available on request.
                        </p>

                        {/* Certification Icons Grid */}
                        <div className="grid grid-cols-4 gap-y-10 gap-x-4 opacity-70">
                          {[
                            { label: 'Non-GMO', icon: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.49-4.47-4.03-8.01-8.5-8.5V1.5c0-.83-.67-1.5-1.5-1.5S9.44.67 9.44 1.5V2.5c-4.47.49-8.01 4.03-8.5 8.5H0v3h.94c.49 4.47 4.03 8.01 8.5 8.5v1c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-1c4.47-.49 8.01-4.03 8.5-8.5H21v-3h-1.06z' },
                            { label: 'Gluten-free', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
                            { label: 'Soy-free', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
                            { label: 'Dairy-free', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
                            { label: 'Sugar-free', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
                            { label: 'No artificial colors', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
                            { label: 'No preservatives', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
                            { label: 'Vegetarian', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
                          ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10">
                                <svg className="h-5 w-5 text-black/40" viewBox="0 0 24 24" fill="currentColor">
                                  <path d={item.icon} />
                                </svg>
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 text-center">{item.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer Note Section */}
                      <div className="border-t border-black/10 pt-10">
                        <p className="text-[12px] leading-relaxed text-neutral-400">
                          In the landmark Urolithin A clinical trial (Singh et al., 2022), a subset of participants did not show a measurable response — in part because approximately 40% of adults already produce Urolithin A endogenously from dietary ellagitannins, which reduces the incremental effect of supplementation for that group. M3's evidence base is strongest in adults aged 40 to 65; effects in younger adults and in individuals taking immunosuppressant or chemotherapeutic medications are not yet well characterized. If you're managing a medical condition or on prescription medication, please discuss M3 with your physician before starting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Portal>
      </Transition>

    {/* Musclespan Side 2 Panel */}
      <Transition show={musclespanOpen1} as={Fragment}>
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
                onClick={() => setMusclespanOpen1(false)}
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
              <div className="fixed right-0 top-0 z-[110] flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl md:w-[850px] lg:w-[1100px] text-black">
                {/* Sticky Header with Close Button */}
                <div className="sticky top-0 z-10 bg-[#F7F8F2] p-6 flex justify-end">
                  <button
                    onClick={() => setMusclespanOpen1(false)}
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
                      <p className="body-[14px] leading-relaxed text-black md:text-[18px]">
                        Musclespan is how long your muscles stay strong, fast, and functional across your lifetime. Unlike lifespan, which counts years, musclespan measures your ability to move, lift, recover, and stay independent — decade after decade.
                      </p>
                      <p className="body-[14px] font-normal leading-relaxed text-black md:text-[18px]">
                        It's governed at the cellular level by the health of your <span className="italic font-light">mitochondria</span> — the microscopic engines that power every muscle contraction. When they decline, musclespan declines with them.
                      </p>
                      
                      <h3 className="body-[18px] font-normal leading-tight text-black md:text-[28px] pt-4">
                        Grip strength predicts 25-year mortality risk better than BMI.<sup>1</sup>
                      </h3>
                    </div>

                    {/* Right Column: Chart */}
                    <div className="space-y-4">
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
                      {/* Figure Caption directly under chart */}
                      <p className="text-xs leading-relaxed text-neutral-600 md:text-[13px]">
                        Figure 1. Relative 25-year mortality and disability risk in adults, indexed against the weakest midlife grip-strength tertile. Adults in the strongest tertile had roughly half the risk of those in the weakest — independent of BMI, smoking, and baseline activity level.
                      </p>
                    </div>
                  </div>

                  {/* Removed old caption location */}

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


      {/* Musclespan Side Panel - White Theme */}
      <Transition show={musclespanOpen} as={Fragment}>
        <Portal>
          <div className="fixed inset-0 z-[120] flex justify-end">
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
                className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={() => setMusclespanOpen(false)}
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed right-0 top-0 z-[130] flex h-full w-full flex-col bg-white shadow-2xl md:w-[600px] lg:w-[700px] text-black">
                {/* Sticky Header */}
                <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-xl">
                  <div className="p-8 md:p-12 pb-6 md:pb-8 flex items-start justify-between">
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#693979] uppercase">
                        HYPERTROPHY, STRENGTH, EXERCISE MIMETIC
                      </span>
                      <h2 className="text-3xl font-medium text-black md:text-5xl tracking-tight">
                        Musclespan
                      </h2>
                    </div>
                    <button
                      onClick={() => setMusclespanOpen(false)}
                      className="flex h-12 w-12 items-center justify-center rounded-full transition-all hover:bg-black/5 group"
                      aria-label="Close"
                    >
                      <svg
                        className="h-7 w-7 text-black transition-transform group-hover:rotate-90"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mx-8 md:mx-12 border-b border-black/10 border-dashed" />
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-8 md:px-12 py-8 md:py-12 scrollbar-hide">
                  <div className="space-y-12">
                    <section className="space-y-6">
                      <p className="text-[16px] md:text-[18px] text-neutral-600 leading-relaxed">
                        Exercise triggers cellular adaptations that make muscle stronger and more durable. Some of those adaptations can be activated without the workout — what researchers call <span className="italic">exercise mimetics</span>. They don&apos;t replace training, but they make the adaptations more accessible as you age and responsiveness to training declines. M3&apos;s three molecules each target a different axis of how muscle grows, recovers, and holds its strength.
                      </p>
                    </section>

                    <div className="relative w-full overflow-hidden rounded-2xl border border-black/5 shadow-2xl">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/2_2.webp?v=1773840168"
                        alt="Musclespan Research"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>

                    {/* Molecule Breakdown */}
                    <section className="space-y-10">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <h3 className="text-xl font-medium text-black">Urolithin A</h3>
                          <div className="flex gap-2">
                            <span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-bold tracking-wider text-neutral-500 uppercase">1,000 mg</span>
                            <span className="px-2 py-0.5 rounded bg-[#693979]/10 text-[10px] font-bold tracking-wider text-[#693979] uppercase">PRIMARY</span>
                          </div>
                        </div>
                        <p className="text-[14px] italic text-neutral-500 -mt-4">The exercise mimetic</p>
                        <p className="text-[15px] md:text-[17px] text-neutral-600 leading-relaxed">
                          In a 16-week randomized, placebo-controlled trial in adults 40 to 65, daily supplementation produced up to <span className="font-bold text-black">+12% hamstring muscle strength</span> and <span className="font-bold text-black">+41% skeletal muscle endurance</span> over placebo — measured in participants whose exercise routines were not modified during the trial. The adaptations track what endurance training produces in younger, responsive muscle.*
                        </p>
                        <ExternalLinkPill 
                          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10049002/" 
                          text="Singh et al., Cell Reports Medicine 2022" 
                        />
                      </div>

                      <div className="border-t border-black/10 border-dashed" />

                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <h3 className="text-xl font-medium text-black">Spermidine</h3>
                          <div className="flex gap-2">
                            <span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-bold tracking-wider text-neutral-500 uppercase">6 mg</span>
                            <span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-bold tracking-wider text-neutral-400 uppercase">SUPPORTING</span>
                          </div>
                        </div>
                        <p className="text-[14px] italic text-neutral-500 -mt-4">The hypertrophy enabler</p>
                        <p className="text-[15px] md:text-[17px] text-neutral-600 leading-relaxed">
                          Muscle fiber repair and growth require autophagy — damaged contractile proteins must be cleared before new ones can be synthesized. Spermidine&apos;s autophagy-supporting role has been associated with reduced sarcopenia markers in older adults in observational data; direct-strength randomized trials in humans are in progress, not yet conclusive.
                        </p>
                        <ExternalLinkPill 
                          href="https://pubmed.ncbi.nlm.nih.gov/30346513/" 
                          text="Kiechl et al., Am J Clin Nutr 2018" 
                        />
                      </div>

                      <div className="border-t border-black/10 border-dashed" />

                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <h3 className="text-xl font-medium text-black">S-Allyl Cysteine</h3>
                          <div className="flex gap-2">
                            <span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-bold tracking-wider text-neutral-500 uppercase">1 mg</span>
                            <span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-bold tracking-wider text-neutral-400 uppercase">SUPPORTING</span>
                          </div>
                        </div>
                        <p className="text-[14px] italic text-neutral-500 -mt-4">The recovery adjunct</p>
                        <p className="text-[15px] md:text-[17px] text-neutral-600 leading-relaxed">
                          Intense training produces a free-radical load that drives post-exercise soreness and slows day-over-day recovery. Aged garlic extract trials in trained athletes have shown reduced post-exercise oxidative-stress markers — the mechanism attributed to S-Allyl Cysteine&apos;s Nrf2 activation. Faster recovery compounds into more trainable weeks per year.
                        </p>
                        <ExternalLinkPill 
                          href="https://pubmed.ncbi.nlm.nih.gov/27231454/" 
                          text="Ried et al., J. Nutr. 2016 (AGE in athletes)" 
                        />
                      </div>
                    </section>

                    {/* Footer Citations Section */}
                    <div className="pt-12 border-t border-black/10">
                      <h4 className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-6">
                        Scientific Methodology
                      </h4>
                      <p className="text-[13px] text-neutral-500 leading-relaxed italic">
                        The clinical outcomes presented are derived from randomized, double-blind, placebo-controlled trials of the individual ingredients. The combined formulation leverages these specific dosages to maximize synergistic cellular effects.
                      </p>
                    </div>
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
                          <strong className="text-black font-semibold">S-Allyl Cysteine · 0.5mg</strong> — a clinically studied antioxidant derived from aged garlic.
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


      {/* Clinical Research 1 Side Panel */}
      <Transition show={clinicalResearchOpen1} as={Fragment}>
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
                onClick={() => setClinicalResearchOpen1(false)}
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
              <div className="fixed right-0 top-0 z-[110] flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl md:w-[850px] lg:w-[1100px] text-black">
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
              <div className="fixed right-0 top-0 z-[110] flex h-full w-full flex-col bg-white shadow-2xl md:w-[700px] lg:w-[900px] text-black">
                {/* Sticky Header */}
                <div className="sticky top-0 z-10 bg-white">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                          [M3] &middot; MUSCLESPAN LONGEVITY STACK
                        </p>
                        <h2 className="text-2xl font-semibold text-black md:text-3xl">
                          Mitochondrial health
                        </h2>
                      </div>
                      <button
                        onClick={() => setClinicalResearchOpen(false)}
                        className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-black/5 border border-black/10"
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
                            strokeWidth={1.5}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <hr className="border-t border-black/10" />
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scrollbar-hide">
                  <div className="space-y-12 p-8 pb-24">
                    {/* Header Badge Section */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#a638b5] uppercase">
                        AUTOPHAGY + MITOPHAGY
                      </span>
                      <div className="opacity-10">
                        <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                          <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="black"/>
                          <path d="M40 10C40 15.5228 35.5228 20 30 20C24.4772 20 20 15.5228 20 10C20 4.47715 24.4772 0 30 0C35.5228 0 40 4.47715 40 10Z" fill="black"/>
                        </svg>
                      </div>
                    </div>

                    {/* Introduction */}
                    <div className="space-y-8">
                      <p className="text-[18px] md:text-[22px] text-neutral-600 leading-relaxed font-light">
                        Every cell has two cleanup systems that decide how well it ages. <span className="text-black italic">Autophagy</span> is general recycling — the cell breaking down and replacing its own damaged proteins. <span className="text-black font-bold">Mitophagy</span> is a specialized subset: the removal of damaged mitochondria, the batteries that power every cell. Both processes slow with age. M3 restarts both, through three complementary molecules.
                      </p>
                      
                      <div className="relative w-full overflow-hidden rounded-2xl bg-black/5 p-2">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/1_1.webp?v=1773840169"
                          alt="Mitochondrial Health Research"
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain rounded-xl"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    </div>

                    {/* Molecule Sections */}
                    <div className="space-y-16 pt-8">
                      {/* Urolithin A */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <h3 className="text-[24px] font-bold text-black">Urolithin A</h3>
                          <span className="bg-neutral-200 px-3 py-1 rounded text-[11px] font-bold text-neutral-500">1,000 mg</span>
                          <span className="bg-[#a638b5]/10 text-[#a638b5] px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider">PRIMARY</span>
                        </div>
                        <p className="text-[15px] italic text-neutral-500">The mitophagy activator</p>
                        <p className="text-[16px] md:text-[18px] text-neutral-600 leading-relaxed">
                          Restarts the cellular process that removes damaged mitochondria. In adults 40 to 65, daily supplementation over 16 weeks produced direct, measurable increases in mitophagy gene-expression markers in skeletal muscle biopsies, alongside functional improvements in endurance.
                        </p>
                        <div className="pt-2">
                          <ExternalLinkPill 
                            href="https://pubmed.ncbi.nlm.nih.gov/35584623/" 
                            text="Singh et al., Cell Reports Medicine 2022" 
                          />
                        </div>
                      </div>

                      <div className="border-t border-black/10 border-dashed" />

                      {/* Spermidine */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <h3 className="text-[24px] font-bold text-black">Spermidine</h3>
                          <span className="bg-neutral-200 px-3 py-1 rounded text-[11px] font-bold text-neutral-500">6 mg</span>
                          <span className="bg-[#a638b5]/10 text-[#a638b5] px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider">SUPPORTING</span>
                        </div>
                        <p className="text-[15px] italic text-neutral-500">The autophagy inducer</p>
                        <p className="text-[16px] md:text-[18px] text-neutral-600 leading-relaxed">
                          Reactivates the general protein-recycling pathway that declines with age. Found naturally in wheat germ and aged cheese; supplementation delivers doses well above dietary intake. Restored autophagy is a prerequisite for efficient mitophagy — the cell can't clear broken mitochondria if the general cleanup machinery is slowed.
                        </p>
                        <div className="pt-2">
                          <ExternalLinkPill 
                            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10049002/" 
                            text="Madeo et al., Autophagy 2019 (review)" 
                          />
                        </div>
                      </div>

                      <div className="border-t border-black/10 border-dashed" />

                      {/* S-Allyl Cysteine */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <h3 className="text-[24px] font-bold text-black">S-Allyl Cysteine</h3>
                          <span className="bg-neutral-200 px-3 py-1 rounded text-[11px] font-bold text-neutral-500">1 mg</span>
                          <span className="bg-[#a638b5]/10 text-[#a638b5] px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider">SUPPORTING</span>
                        </div>
                        <p className="text-[15px] italic text-neutral-500">The antioxidant upstream of cleanup</p>
                        <p className="text-[16px] md:text-[18px] text-neutral-600 leading-relaxed">
                          Activates <span className="italic text-black font-medium">Nrf2</span>, the body's master transcriptional switch for endogenous antioxidant defense. Reduces oxidative damage to mitochondria before they need removal — working upstream of the cleanup systems the other two molecules activate downstream.
                        </p>
                        <div className="pt-2">
                          <ExternalLinkPill 
                            href="https://pubmed.ncbi.nlm.nih.gov/25393425/" 
                            text="Colín-González et al., Oxid. Med. Cell. Longev. 2012" 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Footer Citations Section */}
                    <div className="pt-12 border-t border-black/10">
                      <h4 className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-6">
                        Scientific Methodology
                      </h4>
                      <p className="text-[13px] text-neutral-500 leading-relaxed italic">
                        The clinical outcomes presented are derived from randomized, double-blind, placebo-controlled trials of the individual ingredients. The combined formulation leverages these specific dosages to maximize synergistic cellular effects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Portal>
      </Transition>

      {/* Rigorous Testing Side Panel - White Theme */}
      <Transition show={rigorousTestingOpen} as={Fragment}>
        <Portal>
          <div className="fixed inset-0 z-[120] flex justify-end">
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
                className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={() => setRigorousTestingOpen(false)}
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed right-0 top-0 z-[130] flex h-full w-full flex-col bg-[#F7F8F2] shadow-2xl md:w-[600px] lg:w-[700px] text-black">
                {/* Sticky Header */}
                <div className="sticky top-0 z-10 bg-[#F7F8F2]/90 backdrop-blur-xl">
                  <div className="p-8 md:p-12 pb-6 md:pb-8 flex items-start justify-between">
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                        QUALITY STANDARD
                      </span>
                      <h2 className="text-3xl font-medium text-black md:text-5xl tracking-tight">
                        {rigorousTestingData.find(c => c.id === selectedTestingId)?.detailTitle || "Rigorous Testing"}
                      </h2>
                      <p className="text-[15px] md:text-[17px] text-neutral-500 leading-relaxed italic max-w-[500px] mt-4">
                        {rigorousTestingData.find(c => c.id === selectedTestingId)?.detailSubtitle}
                      </p>
                    </div>
                    <button
                      onClick={() => setRigorousTestingOpen(false)}
                      className="flex h-12 w-12 items-center justify-center rounded-full transition-all hover:bg-neutral-100 group"
                      aria-label="Close"
                    >
                      <svg
                        className="h-7 w-7 text-black transition-transform group-hover:rotate-90"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mx-8 md:mx-12 border-b border-neutral-100 border-dashed" />
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-8 md:px-12 py-8 md:py-12 scrollbar-hide">
                  <div className="space-y-12">
                    {rigorousTestingData.find(c => c.id === selectedTestingId)?.sections?.map((section, idx) => (
                      <div key={idx} className="space-y-12">
                        <section className="space-y-6">
                          <h3 className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                            {section.title}
                          </h3>
                          {Array.isArray(section.content) ? (
                            <ul className="space-y-5">
                              {section.content.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-200" />
                                  <p className="text-[16px] md:text-[18px] text-neutral-700 leading-relaxed">
                                    {item}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-[16px] md:text-[18px] text-neutral-700 leading-relaxed">
                              {section.content}
                            </p>
                          )}

                          {/* Nested Section Quote */}
                          {section.quote && (
                            <div className="border-l-2 border-neutral-200 pl-8 py-2 mt-8">
                              <p className="text-[15px] md:text-[17px] text-neutral-500 italic leading-relaxed">
                                {section.quote}
                              </p>
                            </div>
                          )}

                          {/* Nested Section Action Button */}
                          {section.actionButton && (
                            <div className="pt-6">
                              <a
                                href={section.actionButton.url}
                                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-[13px] font-bold tracking-[0.1em] hover:bg-neutral-800 transition-colors uppercase shadow-lg shadow-black/10"
                              >
                                {section.actionButton.label}
                                <span className="text-[16px]">→</span>
                              </a>
                            </div>
                          )}

                          {/* Specific logic for "THE M3 TRIAL" to show the summary box after content */}
                          {section.title === 'THE M3 TRIAL' && rigorousTestingData.find(c => c.id === selectedTestingId)?.trialSummary && (
                            <div className="mt-8 rounded-[12px] bg-neutral-900 p-6 md:p-8 space-y-2 font-mono text-[14px] md:text-[15px]">
                              <p className="text-white">
                                <span className="font-bold inline-block min-w-[120px]">Trial length:</span>
                                <span className="text-neutral-300">{rigorousTestingData.find(c => c.id === selectedTestingId)?.trialSummary?.length}</span>
                              </p>
                              <p className="text-white">
                                <span className="font-bold inline-block min-w-[120px]">Design:</span>
                                <span className="text-neutral-300">{rigorousTestingData.find(c => c.id === selectedTestingId)?.trialSummary?.design}</span>
                              </p>
                              <p className="text-white">
                                <span className="font-bold inline-block min-w-[120px]">Participants:</span>
                                <span className="text-neutral-300">{rigorousTestingData.find(c => c.id === selectedTestingId)?.trialSummary?.participants}</span>
                              </p>
                              <p className="text-white">
                                <span className="font-bold inline-block min-w-[120px]">Arms:</span>
                                <span className="text-neutral-300">{rigorousTestingData.find(c => c.id === selectedTestingId)?.trialSummary?.arms}</span>
                              </p>
                              <p className="text-white">
                                <span className="font-bold inline-block min-w-[120px]">Citation:</span>
                                <span className="text-neutral-300 italic">{rigorousTestingData.find(c => c.id === selectedTestingId)?.trialSummary?.citation}</span>
                              </p>
                            </div>
                          )}
                        </section>
                        <div className="border-b border-neutral-100 border-dashed" />
                      </div>
                    ))}

                    {/* Facility/License Info Box */}
                    {rigorousTestingData.find(c => c.id === selectedTestingId)?.facilityInfo && (
                      <div className="rounded-[16px] bg-neutral-50 p-8 border border-neutral-100 space-y-2">
                        <p className="text-[15px] md:text-[17px] text-neutral-600">
                          <span className="font-bold text-black min-w-[120px] inline-block">{rigorousTestingData.find(c => c.id === selectedTestingId)?.facilityInfo?.name}</span>
                        </p>
                        <p className="text-[15px] md:text-[17px] text-neutral-600">
                          <span className="font-bold text-black min-w-[120px] inline-block">{rigorousTestingData.find(c => c.id === selectedTestingId)?.facilityInfo?.location}</span>
                        </p>
                        <p className="text-[15px] md:text-[17px] text-neutral-600">
                          <span className="font-bold text-black min-w-[120px] inline-block">{rigorousTestingData.find(c => c.id === selectedTestingId)?.facilityInfo?.certificateNo}</span>
                        </p>
                        <p className="text-[15px] md:text-[17px] text-neutral-600">
                          <span className="font-bold text-black min-w-[120px] inline-block">{rigorousTestingData.find(c => c.id === selectedTestingId)?.facilityInfo?.validThrough}</span>
                        </p>
                      </div>
                    )}

                    {/* Footer Quote */}
                    {rigorousTestingData.find(c => c.id === selectedTestingId)?.footerQuote && (
                      <div className="border-l-2 border-neutral-200 pl-8 py-2">
                        <p className="text-[15px] md:text-[17px] text-neutral-500 italic leading-relaxed">
                          {rigorousTestingData.find(c => c.id === selectedTestingId)?.footerQuote}
                        </p>
                      </div>
                    )}

                    {/* Action Button */}
                    {rigorousTestingData.find(c => c.id === selectedTestingId)?.actionButton && (
                      <div className="pt-8 space-y-6">
                        <h3 className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                          VERIFY FOR YOURSELF
                        </h3>
                        <a
                          href={rigorousTestingData.find(c => c.id === selectedTestingId)?.actionButton?.url}
                          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-[13px] font-bold tracking-[0.1em] hover:bg-neutral-800 transition-colors uppercase shadow-lg shadow-black/10"
                        >
                          {rigorousTestingData.find(c => c.id === selectedTestingId)?.actionButton?.label}
                          <span className="text-[16px]">→</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Portal>
      </Transition>

      {/* Brain Health Side Panel - White Theme */}
      <Transition show={brainHealthOpen} as={Fragment}>
        <Portal>
          <div className="fixed inset-0 z-[120] flex justify-end">
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
                className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={() => setBrainHealthOpen(false)}
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="fixed right-0 top-0 z-[130] flex h-full w-full flex-col bg-white shadow-2xl md:w-[600px] lg:w-[700px] text-black">
                {/* Sticky Header */}
                <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-xl">
                  <div className="p-8 md:p-12 pb-6 md:pb-8 flex items-start justify-between">
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#693979] uppercase">
                        COGNITIVE PERFORMANCE, NEURAL MAINTENANCE, GLYMPHATIC CLEARANCE
                      </span>
                      <h2 className="text-3xl font-medium text-black md:text-5xl tracking-tight">
                        Brain Health
                      </h2>
                    </div>
                    <button
                      onClick={() => setBrainHealthOpen(false)}
                      className="flex h-12 w-12 items-center justify-center rounded-full transition-all hover:bg-black/5 group"
                      aria-label="Close"
                    >
                      <svg
                        className="h-7 w-7 text-black transition-transform group-hover:rotate-90"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mx-8 md:mx-12 border-b border-black/10 border-dashed" />
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-8 md:px-12 py-8 md:py-12 scrollbar-hide">
                  <div className="space-y-12">
                    <section className="space-y-6">
                      <p className="text-[16px] md:text-[18px] text-neutral-600 leading-relaxed">
                        Your brain maintains itself through three overlapping systems. <span className="italic">Autophagy</span> inside neurons clears protein aggregates. <span className="italic">Nrf2-mediated antioxidant defense</span> buffers oxidative damage to neural tissue. And during deep sleep, the <span className="italic">glymphatic system</span> flushes metabolic waste from between cells. All three decline with age. M3&apos;s molecules support each pathway — though the evidence base is earlier-stage than for muscle outcomes.
                      </p>
                    </section>

                    <div className="relative w-full overflow-hidden rounded-2xl border border-black/5 shadow-2xl">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/0732/2556/8425/files/3_3.webp?v=1773840169"
                        alt="Brain Health Research"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>

                    {/* Molecule Breakdown */}
                    <section className="space-y-10">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <h3 className="text-xl font-medium text-black">Spermidine</h3>
                          <div className="flex gap-2">
                            <span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-bold tracking-wider text-neutral-500 uppercase">6 mg</span>
                            <span className="px-2 py-0.5 rounded bg-[#693979]/10 text-[10px] font-bold tracking-wider text-[#693979] uppercase">PRIMARY</span>
                          </div>
                        </div>
                        <p className="text-[14px] italic text-neutral-500 -mt-4">The neuronal autophagy activator</p>
                        <p className="text-[15px] md:text-[17px] text-neutral-600 leading-relaxed">
                          Crosses the blood-brain barrier. Neurons rely heavily on autophagy to clear protein aggregates that accumulate with age — aggregates implicated in most neurodegenerative conditions. In older adults with subjective cognitive decline, one-year spermidine supplementation produced mixed signals on memory outcomes in the SmartAge trial — positive on some measures, null on others. The cellular mechanism is established; the cognitive endpoint is still being characterized.
                        </p>
                        <ExternalLinkPill 
                          href="https://pubmed.ncbi.nlm.nih.gov/29329706/" 
                          text="Wirth et al., Cortex 2018 / Schwarz et al. 2022 (SmartAge)" 
                        />
                      </div>

                      <div className="border-t border-black/10 border-dashed" />

                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <h3 className="text-xl font-medium text-black">S-Allyl Cysteine</h3>
                          <div className="flex gap-2">
                            <span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-bold tracking-wider text-neutral-500 uppercase">1 mg</span>
                            <span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-bold tracking-wider text-neutral-400 uppercase">SUPPORTING</span>
                          </div>
                        </div>
                        <p className="text-[14px] italic text-neutral-500 -mt-4">The neural antioxidant</p>
                        <p className="text-[15px] md:text-[17px] text-neutral-600 leading-relaxed">
                          Activates <span className="italic">Nrf2</span> in neural tissue — the master transcriptional switch for endogenous antioxidant defense. Preclinical neuroprotection data is well-established across multiple rodent models; direct human cognitive-outcome trials at supplementation-range doses are limited and developing. Strongest claim at the current dose is mechanistic, not behavioral.
                        </p>
                        <ExternalLinkPill 
                          href="https://pubmed.ncbi.nlm.nih.gov/25393425/" 
                          text="Colín-González et al., Oxid. Med. Cell. Longev. 2012" 
                        />
                      </div>

                      <div className="border-t border-black/10 border-dashed" />

                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <h3 className="text-xl font-medium text-black">Urolithin A</h3>
                          <div className="flex gap-2">
                            <span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-bold tracking-wider text-neutral-500 uppercase">1,000 mg</span>
                            <span className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-bold tracking-wider text-neutral-400 uppercase">SUPPORTING</span>
                          </div>
                        </div>
                        <p className="text-[14px] italic text-neutral-500 -mt-4">The neural mitochondrial support</p>
                        <p className="text-[15px] md:text-[17px] text-neutral-600 leading-relaxed">
                          Neurons are mitochondrially demanding — the brain consumes roughly 20% of the body&apos;s energy at 2% of body mass, and that energy comes from mitochondria. Mitophagy activation in neural tissue has been demonstrated in preclinical Alzheimer&apos;s and age-related cognitive decline models. Human cognitive-outcome trials specifically targeting brain tissue are emerging, not yet established. Claims here remain mechanistic.
                        </p>
                        <ExternalLinkPill 
                          href="https://www.nature.com/articles/s41593-019-0399-0" 
                          text="Fang et al., Nature Neuroscience 2019 (preclinical)" 
                        />
                      </div>
                    </section>

                    {/* Footer Citations Section */}
                    <div className="pt-12 border-t border-black/10">
                      <h4 className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-6">
                        Scientific Methodology
                      </h4>
                      <p className="text-[13px] text-neutral-500 leading-relaxed italic">
                        The clinical outcomes presented are derived from randomized, double-blind, placebo-controlled trials of the individual ingredients. The combined formulation leverages these specific dosages to maximize synergistic cellular effects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Portal>
      </Transition>

    </>
  );
}
