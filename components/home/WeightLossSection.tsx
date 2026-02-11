"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const BENEFIT_DETAILS = {
  "GLP-1 injections": {
    title: "Muscle Loss on GLP-1", 
    tagline: "GLP-1",
    chartTitle: "MITOCHONDRIAL BIOENERGETICS",
    stat: "+55%",
    statLabel: "Maximal respiration capacity*",
    description: "Enhances mitochondrial respiration and ATP production, fueling your cells for peak performance.",
    customImage: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Chart_for_overlay.png?v=1770374101",
    youtubeSrc: "https://www.youtube.com/embed/StopLosingMuscle", // Placeholder ID, replaceable
    details: {
      proven: "Lean mass loss as percentage of total weight loss across placebo and GLP-1 medications: placebo shows 10-15% muscle loss, tirzepatide 25%, and semaglutide 40-45%,",
      methodology: [
        { label: "Participants", value: "2,258 adults with obesity or overweight across 22 randomized controlled trials (STEP and SURMOUNT programs)" },
        { label: "Protocol", value: `Randomized, double-blind, placebo-controlled trials using DEXA scans to measure body composition changes — the "gold standard" in clinical studies` },
        { label: "Objective", value: "Investigate the effects of GLP-1 receptor agonists (semaglutide 2.4mg weekly, tirzepatide 5-15mg weekly) on body composition including lean muscle mass and fat mass in individuals with obesity" }
      ],
      keyFindings: [
        {
          title: "Semaglutide (Ozempic/Wegovy):",
          points: [
            "Approximately 40-45% of total weight loss is lean muscle mass",
            "Absolute lean mass reduction: -1.02 kg compared to placebo",
            "Psoas muscle volume decreased by 9.3% over 24 weeks, with greater losses in older adults (>60 years: -22.8%)"
          ]
        },
        {
          title: "Tirzepatide (Mounjaro/Zepbound):",
          points: [
            "Approximately 25-26% of total weight loss is lean muscle mass",
            "Mean lean mass decreased by 10.9% vs 2.6% with placebo",
            "Absolute lean mass loss: -5.6 kg vs -1.2 kg placebo over 72 weeks"
          ]
        },
        {
          title: "Meta-Analysis Results:",
          points: [
            "GLP-1 receptor agonists lead to ~25% lean mass loss relative to total weight reduction across all trials",
            "Higher doses (semaglutide 2.4mg, tirzepatide 15mg) resulted in optimal fat loss but were least effective at preserving lean mass"
          ]
        }
      ],
      clinicalContext: "While GLP-1 medications produce significant fat loss and metabolic improvements, the concurrent loss of lean muscle mass raises concerns about sarcopenia risk, particularly in vulnerable populations like older adults. This data supports the need for combination therapies (like bimagrumab blocking myostatin/activin A) or resistance training protocols to preserve muscle during GLP-1 treatment.",
      footer: "We are committed to conducting rigorous scientific research and sharing it with our customers, which is why we present data from open access, peer-reviewed journals published in Nature Medicine, Diabetes, Obesity and Metabolism, and The Lancet."
    }
  },
  "GLP-1 + M3": {
    title: "Muscle Strength and Hypertrophy on M3",
    tagline: "Clinical Trial",
    chartTitle: "Mitochondrial Renewal",
    stat: "+39%",
    statLabel: "Increase in Mitophagy",
    description: "Protection against muscle breakdown during caloric restriction and improved muscle endurance.",
    customImage: "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Overlay_chart.png?v=1770375366", 
    details: {
      proven: "Lean mass loss as percentage of total weight loss across placebo and GLP-1 medications: placebo shows 10-15% muscle loss, tirzepatide 25%, and semaglutide 40-45%,",
      methodology: [
        { label: "Participants", value: "90 healthy, overweight, middle-aged subjects aged 40 to 65 years on GLP-1 medications (semaglutide or tirzepatide) for weight loss" },
        { label: "Protocol", value: `Randomized, double-blind, placebo-controlled — the "gold standard" in studies. Participants received daily supplementation with MUSCULAR PRO M3 (1000mg Urolithin A + 6mg Spermidine + 1mg S-Allyl Cysteine) or placebo for 16 weeks` },
        { label: "Objective", value: "Investigate the efficacy of MUSCULAR PRO M3 on mitophagy, autophagy, and muscle" },
        { label: "The Problem", value: "40-45% of weight loss from semaglutide (Ozempic/Wegovy) and 25% from tirzepatide (Mounjaro/Zepbound) is lean muscle mass." },
        { label: "The Solution", value: "M3 targets three specific mechanisms: 1. Urolithin-A removes damaged mitochondria. 2. Spermidine activates cellular cleanup. 3. S-Allyl Cysteine blocks proteolytic breakdown." },
        { label: "The Triple Protocol", value: "Dosage: 3 capsules daily. Timing: Morning with breakfast. Duration: Minimum 16 weeks for full benefits. Synergistic Stack: Resistance training 3x/week + high protein intake." }
      ],
      keyFindings: [
        {
          title: "Study Results",
          points: [
            "We conducted a randomized placebo-controlled clinical trial with adults aged 40-65 years old.",
            "After 4 months, participants who received a daily dose of MUSCULAR PRO M3 showed:",
            "+39% increase in mitophagy (mitochondrial renewal)",
            "Improved muscle endurance and strength in aging populations",
            "Protection against muscle breakdown during caloric restriction"
          ]
        },
        {
            title: "Increase in Mitophagy",
            points: [
                "PLACEBO: ~15%",
                "MUSCULAR PRO M3: +39%"
            ]
        },
        {
          title: "Clinically Proven Benefits",
          points: [
            "Urolithin-A (1000mg): +39% increase in mitophagy (mitochondrial renewal) and improved muscle endurance.",
            "Spermidine (6mg): Reactivates autophagy to cleanup damaged proteins, supports muscle regeneration, and reduces myofiber degeneration.",
            "S-Allyl Cysteine (1mg): Provides anti-atrophic protection by lowering inflammatory cytokines (TWEAK, IL-6, myostatin) associated with muscle breakdown."
          ]
        },
        {
            title: "Who Should Take MUSCULAR PRO M3?",
            points: [
                "Anyone on GLP-1 medications (semaglutide, tirzepatide)",
                "Individuals 40+ experiencing age-related muscle loss",
                "Those in caloric deficit attempting to preserve lean mass",
                "Athletes and biohackers focused on longevity"
            ]
        },
        {
            title: "The Triple-Action Mechanism",
            table: {
               headers: ["Mechanism", "Active Ingredient", "Clinical Outcome"],
               rows: [
                  ["Mitophagy Activation", "Urolithin-A 1000mg", "+39% increase in damaged mitochondria removal"],
                  ["Autophagy Induction", "Spermidine 6mg", "Improved muscle structure, reduced degeneration"],
                  ["Anti-Atrophy", "S-Allyl Cysteine 1mg", "Prevented protein breakdown, maintained muscle mass"]
               ]
            }
        },
        {
            title: "Quality Standards",
            points: [
                "Clinically dosed ingredients — same doses used in peer-reviewed trials",
                "Third-party tested for purity and potency",
                "No artificial fillers or additives",
                "FSSAI approved for Indian market",
                "GMP-certified manufacturing",
                "Published research in Nature Metabolism, Cell Reports Medicine, Biochimica et Biophysica Acta"
            ]
        }
      ],
      clinicalContext: "Science-Backed. Results-Driven. We formulate with clinically validated doses. MUSCULAR PRO M3 represents the cutting edge of longevity science — three proven ingredients working synergistically to preserve your musclespan while you optimize your body composition. Preserve your musclespan. Extend your healthspan.",
      footer: "These statements are supported by scientific research published in peer-reviewed journals. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare provider before starting any supplementation, especially if taking GLP-1 medication."
    }
  },

  "Oral med kits": {
    title: "Weight Loss",
    tagline: "PERSONALIZED TREATMENT",
    chartTitle: "WEIGHT REDUCTION",
    stat: "-15%",
    statLabel: "Average weight loss*",
    description: "Tailored oral medications designed to support sustainable weight management.",
    details: {
      proven: "Clinically proven benefits: Sustained Weight Management",
      content: `Clinical studies have shown that personalized oral medication plans can lead to significant weight reduction when combined with lifestyle modifications. Patients reported an average of 15% body weight loss over a 12-month period, with improvements in metabolic markers including insulin sensitivity and lipid profiles. The personalized approach ensures optimal dosage and minimizes side effects.`,
    }
  },
  "Personalized doses": {
    title: "Balance",
    tagline: "HORMONAL OPTIMIZATION",
    chartTitle: "HORMONAL BALANCE",
    stat: "92%",
    statLabel: "Patient satisfaction*",
    description: "Customized dosing strategies to align with your body's unique hormonal rhythm.",
    details: {
      proven: "Clinically proven benefits: Hormonal Regulation & Optimization",
      content: `Our adaptive dosing protocols are designed to synchronize with your circadian rhythm and hormonal fluctuations. In a patient satisfaction survey, 92% of participants reported feeling more balanced and energetic after switching to a personalized dosing schedule. This approach maximizes therapeutic efficacy while reducing the risk of adverse effects associated with standard dosing.`,
    }
  }
};

export function WeightLossSection() {
  const [activeMainTab, setActiveMainTab] = useState<"program" | "science">("program");
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  // Helper to safely access custom properties
  const activeData = selectedFeature ? BENEFIT_DETAILS[selectedFeature as keyof typeof BENEFIT_DETAILS] : null;
  // @ts-ignore - Allowing dynamic properties for this section without full type definition update
  const customImage = activeData?.customImage;
  // @ts-ignore
  const youtubeSrc = activeData?.youtubeSrc;

  const handleMainTabChange = (tab: "program" | "science") => {
      setActiveMainTab(tab);
  };

  return (
    <section 
      className="w-full flex flex-col gap-0 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Black_bg.jpg?v=1770722269")' }}
    >
      
      {/* SECTION 1: Top Visual (Full Width) */}
      <div className="relative w-full overflow-hidden min-h-[700px] md:min-h-[700px] flex flex-col items-center justify-between pt-16 pb-12">
        
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
            <picture>
                <source media="(max-width: 768px)" srcSet="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Mobile_bg_2.jpg?v=1770722110" />
                <img
                    src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Desktop_bg_2.jpg?v=1770721937" 
                    alt="Weight Loss Background"
                    className="object-cover w-full h-full"
                />
            </picture>
             {/* Gradient for Text Readability */}
             <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Header Text */}
        <div className="relative z-10 text-center mb-8 mt-[-12px]">
            <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight drop-shadow-md mb-5">
                Muscle Is Your <br className="md:hidden" /> Longevity Organ
            </h2>
            <p className="text-white text-[16px] md:text-xl  max-w-2xl mx-auto">
              The single most powerful predictor of healthspan <br/> isn't your weight, it's your musclespan
            </p>
        </div>

        {/* Spacer */}
        <div className="relative z-10 w-full flex-1 pointer-events-none" />
   <motion.div 
                          initial={{ y: 0 }}
                          animate={{ y: [0, -10, 0] }}
                          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                          className="absolute top-[40%] right-[10%] md:right-[15%] bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-3xl text-white shadow-xl min-w-[160px]"
                      >
                          <p className="text-lg font-medium mb-4 text-white/90">Month 3</p>
                          <div className="flex items-end justify-between gap-4">
                              <span className="text-4xl font-normal tracking-tight">LBM 3lbs</span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-300 mb-1">
                                  <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                              </svg>
                          </div>
                      </motion.div>
        {/* Floating Toggle Pill */}
        <div className="relative z-20 mt-8 mb-4">
            <div className="bg-black/40 backdrop-blur-md border border-white/20 p-1.5 rounded-full flex gap-1">
                <button 
                  onClick={() => handleMainTabChange("program")}
                  className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeMainTab === "program" 
                      ? "bg-white text-black shadow-sm" 
                      : "text-white/80 hover:text-white font-medium"
                  }`}
                >
                    GLP-1
                </button>
                <button 
                  onClick={() => handleMainTabChange("science")}
                  className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeMainTab === "science" 
                      ? "bg-white text-black shadow-sm" 
                      : "text-white/80 hover:text-white font-medium"
                  }`}
                >
                   GLP-1 + M3
                </button>
            </div>
        </div>
      </div>

      {/* SECTION 2: Content Card (Dark Green) */}
      <div className="w-full relative px-4 md:px-6 pb-12 md:pb-16 mt-[-40px] z-30">
        
        {/* === PROGRAM TAB LAYOUT === */}
        {activeMainTab === "program" ? (
          /* === PROGRAM TAB: Grid Layout === */
          <div className="flex flex-col gap-4 max-w-[1200px] mx-auto ">
              
              {/* Top: Meds Image (Full Width) */}
              <div className="relative w-full rounded-[32px] bg-white/10 backdrop-blur-xl overflow-hidden border border-white/10 min-h-[500px] group ">
                      
                  {/* Text Content (Left Side) */}
                  <div className="absolute top-10 left-8 z-20 max-w-[380px] pointer-events-none">
                      <h3 className="text-3xl md:text-4xl text-white font-normal leading-[1.1] tracking-tight mb-5 drop-shadow-sm">
Muscle Loss on GLP-1
                      </h3>
                      {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                          <div className="bg-[#c2d880] rounded-full p-0.5">
                            <CheckCircleIcon className="w-3 h-3 text-[#414e40]" />
                          </div>
                          <span className="text-[#c2d880] text-xs font-bold tracking-wide uppercase">FSA & HSA eligible</span>
                      </div> */}
                  </div>

                  {/* Image */}
                    {/* Subtle Gradient for Text Readability */}
                  <div className="absolute inset-y-0 left-0 w-1/2 z-10 " />

                  <Image 
                    src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Adobe_Express_2026-02-10_14.05.53.jpg?v=1770816111"
                    alt="GLP-1 Medications"
                    fill
                    className="object-cover object-center md:object-right w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Floating Tags */}
                  {/* <div className="absolute inset-0 z-20 p-8"> */}
                      {/* Floating Stat Card */}
                   

                      {/* Tag 1: GLP-1 (Top Center/Right) */}
                      {/* <button 
                        onClick={() => setSelectedFeature("GLP-1 injections")}
                        className="absolute top-[30%] right-[35%] md:right-[40%] bg-[#693979] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-xl hover:bg-[#693979] transition-all cursor-pointer border border-white/20 animate-fade-in-up"
                      >
                          <span className="text-sm font-bold tracking-tight">GLP-1 Injections</span>
                          <div className="bg-white rounded-full p-0.5">
                              <CheckCircleIcon className="w-3 h-3 text-[#693979]" />
                          </div>
                      </button> */}
                      
                      {/* Tag 2: Oral Meds (Right) */}
                      {/* <button 
                          onClick={() => setSelectedFeature("Oral med kits")}
                          className="absolute top-[55%] right-[8%] bg-[#693979] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-xl hover:bg-[#693979] transition-all cursor-pointer border border-white/20 animate-fade-in-up delay-100"
                      >
                            <div className="bg-white rounded-full p-0.5">
                              <CheckCircleIcon className="w-3 h-3 text-[#693979]" />
                          </div>
                          <span className="text-sm font-bold tracking-tight">Oral Med Kits</span>
                      </button> */}

                        {/* Tag 3: Personalized (Bottom Center) */}
                        {/* <button 
                          onClick={() => setSelectedFeature("Personalized doses")}
                          className="absolute bottom-[15%] right-[30%] md:right-[35%] bg-[#693979] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-xl hover:bg-[#693979] transition-all cursor-pointer border border-white/20 animate-fade-in-up delay-200"
                      >
                          <span className="text-sm font-bold tracking-tight">Personalized doses</span>
                          <div className="bg-white rounded-full p-0.5">
                              <CheckCircleIcon className="w-3 h-3 text-[#693979]" />
                          </div>
                      </button> */}
                  {/* </div> */}

                    {/* 'Learn more' Button (Bottom Right) */}
                    <div className="absolute bottom-8 right-8 z-20 block">
                        <button 
                          onClick={() => setSelectedFeature("GLP-1 injections")}
                          className="px-6 py-3 rounded-full border border-white/20 text-black text-sm font-semibold backdrop-blur-md bg-white/100 hover:bg-white transition-all"
                        >
                            Learn more
                        </button>
                    </div>
              </div>

              {/* Bottom Grid: Chart & Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  
                  {/* Left Column: Muscle Loss Chart Card */}
                  <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[32px] p-8 flex flex-col justify-center items-center relative group overflow-hidden shadow-2xl transition-all min-h-[300px]">
                      {/* Chart Image */}
                      <div className="w-full max-w-[500px] rounded-2xl overflow-hidden shadow-sm border border-white/10">
                            <Image
                                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Chart_3.png?v=1770816860" 
                                alt="Muscle Loss Chart"
                                width={600}
                                height={400}
                                className="object-contain" 
                            />
                      </div>
                  </div>

                  {/* Right Column: Stat Cards */}
                  <div className="flex flex-col gap-4 h-full">
                      {/* Stat Card 1 */}
                      <div className="flex-1 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[32px] p-6 flex flex-col justify-center relative overflow-hidden group shadow-2xl min-h-[200px]">
                          <div className="flex flex-col gap-3">
                            
                            <div>
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className="text-4xl md:text-5xl font-normal text-white tracking-tight">63</span>
                                    <span className="text-xl md:text-2xl text-white/60">%</span>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">
                                    find early risk factors
                                </p>
                                <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                                      <div className="bg-[#FF2E93] w-[63%] h-full rounded-full shadow-[0_0_10px_#FF2E93]" />
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden relative flex-shrink-0 bg-white/10">
                                    <Image 
                                      src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/diabetes-icon.png?v=1770702600" 
                                      alt="Diabetes Risk" 
                                      fill 
                                      className="object-cover"
                                      onError={(e) => {
                                        // Fallback if image fails
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.style.backgroundColor = '#581c87'; // purple-900
                                      }}
                                    />
                                    {/* Fallback circle if image fails/loads */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black -z-10" />
                                </div>
                                <span className="text-sm font-bold text-white/90">Diabetes Risk</span>
                            </div>

                          </div>
                          
                      </div>

                      {/* Stat Card 2 */}
                      <div className="flex-1 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[32px] p-6 flex flex-col justify-center relative overflow-hidden group shadow-2xl min-h-[200px]">
                          <div className="flex flex-col gap-3">
                            
                            <div>
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className="text-4xl md:text-5xl font-normal text-white tracking-tight">44</span>
                                    <span className="text-xl md:text-2xl text-white/60">%</span>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">
                                    find elevated risk
                                </p>
                                <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                                    <div className="bg-[#FF2E93] w-[44%] h-full rounded-full shadow-[0_0_10px_#FF2E93]" />
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden relative flex-shrink-0 bg-white/10">
                                    <Image 
                                      src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/heart-icon.png?v=1770702600" 
                                      alt="Heart Disease Risk" 
                                      fill 
                                      className="object-cover"
                                      onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.style.backgroundColor = '#ea580c'; // orange-600
                                      }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 -z-10" />
                                </div>
                                <span className="text-sm font-bold text-white/90">Heart Disease Risk</span>
                            </div>

                          </div>
                        
                      </div>
                  </div>
          </div>
          </div>
        ) : (
          /* === SCIENCE TAB LAYOUT === */
          <div className="flex flex-col gap-4 max-w-[1200px] mx-auto">
              
              {/* Top: M3 Image (Full Width) */}
              <div className="relative w-full rounded-[32px] bg-white/10 backdrop-blur-3xl overflow-hidden border border-white/10 min-h-[500px] group ">
                      
                  {/* Text Content (Left Side) */}
                  <div className="absolute top-10 left-8 z-20 max-w-[380px] pointer-events-none">
                      <h3 className="text-3xl md:text-4xl text-white font-normal leading-[1.1] tracking-tight mb-5 drop-shadow-sm">
                        Muscle Strength and Hypertrophy on [M3]
                      </h3>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-y-0 left-0 w-1/2 z-10 " />

                  {/* Hero Image */}
                  <Image 
                    src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Left_image_6.png?v=1770797867"
                    alt="GLP-1 + M3"
                    fill
                    className="object-cover object-center w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Floating Tags - Reused from Program Tab Style */}
                  <div className="absolute inset-0 z-20 p-8">
                      {/* Tag 1: GLP-1 Injections */}
                      {/* <button 
                        onClick={() => setSelectedFeature("GLP-1 injections")}
                        className="absolute top-[30%] right-[35%] md:right-[40%] bg-[#693979] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-xl hover:bg-[#693979] transition-all cursor-pointer border border-white/20 animate-fade-in-up"
                      >
                          <span className="text-sm font-bold tracking-tight">GLP-1 Injections</span>
                          <div className="bg-white rounded-full p-0.5">
                              <CheckCircleIcon className="w-3 h-3 text-[#693979]" />
                          </div>
                      </button> */}
                      
                      {/* Tag 2: Oral Med Kits */}
                      {/* <button 
                          onClick={() => setSelectedFeature("Oral med kits")}
                          className="absolute top-[55%] right-[8%] bg-[#693979] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-xl hover:bg-[#693979] transition-all cursor-pointer border border-white/20 animate-fade-in-up delay-100"
                      >
                            <div className="bg-white rounded-full p-0.5">
                              <CheckCircleIcon className="w-3 h-3 text-[#693979]" />
                          </div>
                          <span className="text-sm font-bold tracking-tight">Oral Med Kits</span>
                      </button> */}

                        {/* Tag 3: Personalized doses */}
                        {/* <button 
                          onClick={() => setSelectedFeature("Personalized doses")}
                          className="absolute bottom-[15%] right-[30%] md:right-[35%] bg-[#693979] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-xl hover:bg-[#693979] transition-all cursor-pointer border border-white/20 animate-fade-in-up delay-200"
                      >
                          <span className="text-sm font-bold tracking-tight">Personalized doses</span>
                          <div className="bg-white rounded-full p-0.5">
                              <CheckCircleIcon className="w-3 h-3 text-[#693979]" />
                          </div>
                      </button> */}
                  </div>

                    {/* 'Learn more' Button */}
                    <div className="absolute bottom-8 right-8 z-20 block">
                        <button 
                          onClick={() => setSelectedFeature("GLP-1 + M3")}
                          className="px-6 py-3 rounded-full border border-white/20 text-black text-sm font-semibold backdrop-blur-md bg-white/100 hover:bg-white transition-all"
                        >
                            Learn more
                        </button>
                    </div>
              </div>

              {/* Bottom Grid: Chart & Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  
                  {/* Left Column: Chart Card */}
                  <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[32px] p-8 flex flex-col justify-center items-center relative group overflow-hidden shadow-2xl transition-all min-h-[300px]">
                      {/* Chart Image */}
                      <div className="w-full max-w-[500px] rounded-2xl overflow-hidden shadow-sm border border-white/10">
                            <Image
                                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Chart_1_1.png?v=1770797866" 
                                alt="M3 Chart"
                                width={600}
                                height={400}
                                className="object-contain" 
                            />
                      </div>
                  </div>

                  {/* Right Column: Stat Cards */}
                  <div className="flex flex-col gap-4 h-full">
                      {/* Stat Card 1 */}
                      <div className="flex-1 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[32px] p-6 flex flex-col justify-center relative overflow-hidden group shadow-2xl min-h-[200px]">
                          <div className="flex flex-col gap-3">
                            
                            <div>
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className="text-4xl md:text-5xl font-normal text-white tracking-tight">39</span>
                                    <span className="text-xl md:text-2xl text-white/60">%</span>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">
                                    increase in mitophagy
                                </p>
                                <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                                      <div className="bg-[#C84136] w-[39%] h-full rounded-full shadow-[0_0_10px_#C84136]" />
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden relative flex-shrink-0 bg-white/10 flex items-center justify-center">
                                    <span className="text-[10px] font-bold text-white">M3</span>
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-black -z-10" />
                                </div>
                                <span className="text-sm font-bold text-white/90">Mitochondrial Renewal</span>
                            </div>

                          </div>
                      </div>

                      {/* Stat Card 2 */}
                      <div className="flex-1 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[32px] p-6 flex flex-col justify-center relative overflow-hidden group shadow-2xl min-h-[200px]">
                          <div className="flex flex-col gap-3">
                            
                            <div>
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className="text-4xl md:text-5xl font-normal text-white tracking-tight">3</span>
                                    <span className="text-xl md:text-2xl text-white/60">x</span>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed max-w-[200px]">
                                    active ingredients
                                </p>
                                <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                                    <div className="bg-[#C84136] w-[80%] h-full rounded-full shadow-[0_0_10px_#C84136]" />
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden relative flex-shrink-0 bg-white/10 flex items-center justify-center">
                                    <CheckCircleIcon className="w-4 h-4 text-white" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-black -z-10" />
                                </div>
                                <span className="text-sm font-bold text-white/90">Synergistic Stack</span>
                            </div>

                          </div>
                        
                      </div>
                  </div>
          </div>
          </div>
        )}

      </div>

      {/* OVERLAY DRAWER */}
      <AnimatePresence>
        {selectedFeature && activeData && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[70] w-full lg:w-[80vw] max-w-[1400px] bg-white text-neutral-900 shadow-2xl overflow-y-auto"
            >
              <div className="p-8 md:p-12 lg:p-20 relative">
                <button 
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Drawer Content */}
                <div className="mt-4">
                <div className="mt-8 flex flex-col lg:flex-row gap-12 lg:gap-24">
                   {/* Left Column: Title (Short & Sticky-ish ideally) */}
                   <div className="w-full lg:w-[35%] flex-shrink-0 flex flex-col gap-8">
                       <div>
                           <h5 className="text-xl font-bold text-neutral-400 uppercase tracking-widest mb-4 leading-relaxed">{activeData.tagline}</h5>
                           <h2 className="text-6xl md:text-5xl lg:text-[3rem] font-normal text-[#1f3b37] tracking-tight leading-none">{activeData.title}</h2>
                       </div>
                   </div>

                   {/* Right Column: Content + Visuals */}
                   <div className="flex-1 flex flex-col gap-10">
                       
                       {/* 1. Proven Header */}
                       {/* 2. Visuals (Chart/Image) */}
                       <div className="w-full">
                             {customImage ? (
                                <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100 max-w-[800px]">
                                   <Image 
                                     src={customImage} 
                                     alt="Chart" 
                                     width={800} 
                                     height={600} 
                                     className="w-full h-auto object-contain"
                                   />
                                </div>
                             ) : (
                                <div className="w-full bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm max-w-[600px]">
                                 <div className="flex justify-between items-start mb-4 gap-4">
                                     <div className="text-[10px] font-bold text-neutral-400 tracking-widest rotate-180 [writing-mode:vertical-lr] h-40 flex items-center justify-center border-l border-neutral-200 pl-2">
                                        {activeData.chartTitle.toUpperCase()}
                                     </div>
                                     <div className="flex-1 pl-6 flex items-end justify-between h-[300px] gap-12 relative border-b border-neutral-200 pb-0">
                                          {/* Dashed Lines (Light) */}
                                          <div className="absolute inset-0 pointer-events-none flex flex-col justify-between text-[10px] text-neutral-300 font-mono z-0 pb-[1px]">
                                              {[50, 40, 30, 20, 10].map(val => (
                                                  <span key={val} className="border-b border-dotted border-neutral-200 w-full text-right pr-2 h-0 flex items-center justify-end">
                                                      <span className="bg-white pl-1">{val}%</span>
                                                  </span>
                                              ))}
                                              <span className="w-full text-right pr-2">0</span>
                                          </div>

                                          {/* Bar 1: Placebo */}
                                          <div className="relative z-10 w-24 bg-[#E5E5E0] h-[25%] flex items-end justify-center group">
                                            <div className="text-[10px] absolute -bottom-6 font-bold tracking-widest text-neutral-500 uppercase">Placebo</div>
                                          </div>

                                          {/* Bar 2: Active */}
                                          <div className="relative z-10 w-24 bg-[#C84136] h-[75%] flex items-end justify-center shadow-lg group">
                                              <div className="absolute top-[-50px] text-center w-[120px]">
                                                  {(() => {
                                                      const match = activeData.stat.match(/^([+]?)([\d.]+)(.*)$/);
                                                      const prefix = match ? match[1] : "";
                                                      const value = match ? match[2] : activeData.stat;
                                                      const unit = match ? match[3] : "";
                                                      
                                                      return (
                                                          <span className="text-6xl font-normal text-neutral-900 tracking-tighter relative inline-block">
                                                              {prefix && <span className="absolute -left-6 top-2 text-3xl font-light text-neutral-900">{prefix}</span>}
                                                              {value}
                                                              <span className="text-3xl align-top relative top-2 ml-0.5">{unit}</span>
                                                          </span>
                                                      );
                                                  })()}
                                              </div>
                                              <div className="text-[10px] absolute -bottom-6 left-0 right-0 text-center font-bold tracking-widest text-neutral-500 uppercase flex justify-center">
                                                <Image src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/mitopure-logo-red.png?v=1770200800" alt="Active" width={60} height={20} className="object-contain" />
                                              </div>
                                          </div>
                                     </div>
                                 </div>
                             </div>
                             )}
                       </div>
                       {/* <p className="lead font-medium text-neutral-900 text-lg max-w-2xl ">Figure 1.</p> */}
                       <p className="lead font-medium text-neutral-900 text-lg max-w-2xl mt-[-20px]"> Figure 1: {activeData.details.proven}</p>

                       {/* 3. Text Content (Rich or Simple) */}
                       <div className="prose prose-lg text-neutral-600 max-w-none">
                           {/* @ts-ignore */}
                           {activeData.details.methodology ? (
                               <div className="space-y-12">
                                   
                                   {/* Methodology Table */}
                                   <div>
                                      <h4 className="text-xl font-bold text-neutral-900 mb-6 border-b border-black pb-2">Methodology</h4>
                                      <div className="divide-y divide-neutral-200/60">
                                          {/* @ts-ignore */}
                                          {activeData.details.methodology.map((item, idx) => (
                                            <div key={idx} className="py-6 grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4">
                                               <span className="font-semibold text-neutral-900">{item.label}</span>
                                               <span className="text-neutral-600 leading-relaxed font-light">{item.value}</span>
                                            </div>
                                          ))}
                                      </div>
                                   </div>

                                   {/* Key Findings */}
                                   {/* @ts-ignore */}
                                   {activeData.details.keyFindings && (
                                     <div>
                                       <h4 className="text-xl font-bold text-neutral-900 mb-6 border-b border-black pb-2">Key Findings</h4>
                                       <div className="space-y-8">
                                         {/* @ts-ignore */}
                                         {activeData.details.keyFindings.map((group, idx) => (
                                           <div key={idx}>
                                               <h5 className="font-bold text-[#1f3b37] mb-3 text-lg">{group.title}</h5>
                                               {/* @ts-ignore */}
                                               {group.table ? (
                                                  <div className="overflow-x-auto border border-neutral-200 rounded-lg">
                                                    <table className="w-full text-left border-collapse text-sm">
                                                      <thead>
                                                        <tr className="border-b border-neutral-200 bg-neutral-50">
                                                          {/* @ts-ignore */}
                                                          {group.table.headers.map((h, i) => (
                                                            <th key={i} className="py-3 px-4 font-bold text-neutral-800">{h}</th>
                                                          ))}
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                                                        {/* @ts-ignore */}
                                                        {group.table.rows.map((row, rI) => (
                                                          <tr key={rI} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors">
                                                            {/* @ts-ignore */}
                                                            {row.map((cell, cI) => (
                                                              <td key={cI} className="py-3 px-4 text-neutral-600 font-medium">{cell}</td>
                                                            ))}
                                                          </tr>
                                                        ))}
                                                      </tbody>
                                                    </table>
                                                  </div>
                                               ) : (
                                                <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                                                    {/* @ts-ignore */}
                                                    {group.points.map((pt, i) => <li key={i}>{pt}</li>)}
                                                </ul>
                                               )}
                                            </div>
                                         ))}
                                       </div>
                                     </div>
                                   )}

                                   {/* Context */}
                                   {/* @ts-ignore */}
                                   {activeData.details.clinicalContext && (
                                       <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                                           <h4 className="text-lg font-bold text-neutral-900 mb-3">Clinical Context</h4>
                                           {/* @ts-ignore */}
                                           <p className="text-base text-neutral-600 leading-relaxed">{activeData.details.clinicalContext}</p>
                                       </div>
                                   )}
                                   
                                   {/* Footer */}
                                   {/* @ts-ignore */}
                                   {activeData.details.footer && (
                                       <p className="text-sm text-neutral-400 italic mt-8 border-t border-neutral-100 pt-6">
                                           {/* @ts-ignore */}
                                           {activeData.details.footer}
                                       </p>
                                   )}

                               </div>
                           ) : (
                               // @ts-ignore
                               <p className="text-base leading-relaxed text-neutral-500 whitespace-pre-line">{activeData.details.content}</p>
                           )}
                       </div>

                       {/* 4. YouTube Video Embed (At the End) */}
                       {youtubeSrc && (
                          <div className="w-full mt-4">
                            <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200 aspect-video relative bg-black max-w-[800px]">
                                <iframe 
                                  src="https://www.youtube.com/embed/kqCKWcSNvLc?si=jeKHAmyYUW95UOaa&controls=0&autoplay=1&mute=1&loop=1&playlist=kqCKWcSNvLc" 
                                  title="YouTube video player" 
                                  className="absolute inset-0 w-full h-full" 
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                  allowFullScreen 
                                />                            </div>
                          </div>
                       )}
                   </div>
                </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
