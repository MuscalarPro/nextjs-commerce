"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  mitopureBenefitClaims,
  mitopureBenefitImages,
  mitopureBenefitsData,
} from "../../data/homePageData";

const BENEFIT_DETAILS = {
  Renewal: {
    title: "Renewal",
    tagline: "Mitochondrial Renewal",
    molecule: "Urolithin-A (1000mg)",
    chartTitle: "Mitophagy Activation",
    stat: "+39%",
    statLabel: "Mitophagy activation over placebo*",
    description:
      "Clinically proven to activate mitophagy, the cellular renewal process that clears out damaged mitochondria.",
    details: {
      title: "MUSCULAR PRO M3: Mitochondrial Renewal",
      subtitle: "Urolithin-A (1000mg)",
      proven: "Clinically proven benefits: Mitophagy Activation",
      content: "", // Content moved to sections
      methodology: {}, // Methodology moved to sections
      sections: [
        {
          molecule: "Mitochondrial Renewal",
          proven: "Clinically proven benefits: Mitophagy Activation",
          content: `We conducted a randomized, double-blind, placebo-controlled clinical trial with middle-aged adults aged 40-64 years. After 4 months, participants who received daily doses of 500-1000mg Urolithin A demonstrated significant activation of mitophagy markers in skeletal muscle, with phosphorylated Parkin (Ser65) levels increasing significantly compared to placebo. Mitochondrial OXPHOS protein expression increased dose-dependently, with Complex I, II, and III showing significant elevation.`,
          imageIndex: 0,
          methodology: {
            participantsLabel: "Participants",
            participants:
              "88 healthy, overweight, middle-aged subjects aged 40 to 64 years",
            protocol:
              'Randomized, double-blind, placebo-controlled   the "gold standard" in studies',
            objective:
              "Investigate the efficacy of Urolithin A on mitophagy activation and mitochondrial health in otherwise healthy middle-aged, overweight individuals",
          },
        },
        {
          molecule: "Spermidine (6mg)",
          proven:
            "Clinically proven benefits: Autophagy Enhancement & Bioenergetic Optimization",
          content: `Research on human-induced pluripotent stem cell-derived neurons demonstrated that 48-hour treatment with spermidine significantly enhanced mitochondrial respiration in aged neurons by +27% for basal oxygen consumption. Spermidine treatment augmented maximal respiration capacity by +55% in young neurons and +88% spare respiratory capacity in aged neurons, while simultaneously increasing ATP production-coupled respiration by +28%.
          
Clinical case reports using 6mg/day spermidine supplementation (divided into three 2mg doses) over 3 months demonstrated improved autophagic flux and autophagosome-lysosome fusion in patients with autophagy disorders.`,
          imageIndex: 4,
          methodology: {
            participantsLabel: "Participants",
            participants:
              "Young and aged human iPSC-derived neurons representing cellular aging models",
            protocol:
              "Controlled laboratory study measuring mitochondrial bioenergetics parameters including oxygen consumption rate, ATP production, and mitochondrial membrane potential",
            objective:
              "Investigate spermidine's protective effects on mitochondrial function and autophagy activation in aging cells",
          },
        },
        {
          molecule: "S-Allyl Cysteine (1mg)",
          proven:
            "Clinically proven benefits: Autophagy Induction & Mitochondrial Protection",
          content: `Preclinical research demonstrated that S-allyl cysteine (SAC) significantly enhanced autophagy markers in cardiomyocytes under hypoxic conditions. SAC treatment increased expression of autophagy-related genes ATG4A, ATG4C, ATG4D, and ATG9A, while elevating protein levels of Beclin 1 and LC3-I/II   key indicators of active autophagy.

In aging models, SAC supplementation at 0.05-0.2% in diet for 12 weeks significantly improved hepatic OPA1 mRNA levels and elevated mitochondrial biogenesis-related proteins SIRT1 and PGC-1α.`,
          imageIndex: 5,
          methodology: {
            participantsLabel: "Model",
            participants:
              "Primary cardiomyocytes under hypoxia and aged mouse models (60 weeks)",
            protocol:
              "Controlled interventional studies with molecular analysis via RNA sequencing, RT-qPCR, and immunofluorescence",
            objective:
              "Investigate SAC's protective effects on autophagy activation and mitochondrial dynamics regulation during stress and aging",
          },
        },
        {
          molecule: "Combined M3 Formula: Synergistic Mitochondrial Renewal",
          proven: "M3 Synergistic Advantage",
          content: `MUSCALAR PRO M3 combines three clinically-studied molecules targeting complementary pathways:
          
• Urolithin-A (1000mg): Activates PINK1/Parkin-mediated mitophagy for damaged mitochondria clearance
• Spermidine (6mg): Enhances general autophagy and boosts mitochondrial bioenergetics
• S-Allyl Cysteine (1mg): Supports mitochondrial fusion and biogenesis via SIRT1/PGC-1α pathways

This triple-mechanism approach addresses renewal (mitophagy), cellular recycling (autophagy), and mitochondrial quality control   the foundational pillars of cellular longevity and metabolic health.`,
          imageIndex: 6,
          methodology: {
            participantsLabel: "Participants",
            participants: "Meta-analysis of component studies",
            protocol:
              "Synergistic formulation analysis targeting complementary mitochondrial pathways",
            objective:
              "Evaluate the combined efficacy of Urolithin A, Spermidine, and S-Allyl Cysteine on comprehensive mitochondrial health coverage",
          },
        },
      ],
    },
  },
  Energy: {
    title: "Energy",
    tagline: "Bioenergetic Optimization",
    molecule: "Spermidine (6mg)",
    chartTitle: "Mitochondrial Bioenergetics",
    stat: "+55%",
    statLabel: "Maximal respiration capacity*",
    description:
      "Enhances mitochondrial respiration and ATP production, fueling your cells for peak performance.",
    details: {
      sections: [
        {
          molecule: " Peak Endurance ",
          proven: "Clinically proven benefits: Aerobic Endurance Enhancement",
          content: `We conducted a randomized, double-blind, placebo-controlled clinical trial with middle-aged adults aged 40-64 years. After 4 months, participants who received daily doses of 1000mg Urolithin A demonstrated significant improvements in peak oxygen consumption (VO2), with a +10.2% increase from baseline (p < 0.01). Estimated VO2max improved by +14.3% compared to baseline, indicating enhanced aerobic capacity.

Participants in the 1000mg UA group exhibited a +15% increase in total cycling distance from baseline to end of study (p = 0.03), along with significant improvements in time to fatigue during exercise testing. These endurance gains occurred without any structured exercise regimen, demonstrating UA's direct impact on cardiovascular efficiency through mitochondrial optimization.`,
          imageIndex: 2,
          methodology: {
            participantsLabel: "Participants",
            participants:
              "88 healthy, overweight, middle-aged subjects aged 40 to 64 years",
            protocol:
              "Randomized, double-blind, placebo-controlled study with submaximal incremental exercise tolerance testing measuring peak VO2, VO2max, cycling distance, and time to fatigue",
            objective:
              "Investigate the efficacy of Urolithin A on aerobic endurance capacity and physical performance without concurrent exercise training",
          },
        },
        {
          molecule: "Spermidine (6mg)",
          proven:
            "Clinically proven benefits: Cardiac Function & Mitochondrial Biogenesis",
          content: `Research on cardiac aging demonstrated that spermidine supplementation significantly enhances cardiovascular performance by upregulating the SIRT1/PGC-1α signaling pathway a master regulator of mitochondrial biogenesis. Spermidine treatment increased expression of SIRT1, PGC-1α, nuclear respiratory factors 1 and 2 (NRF1, NRF2), and mitochondrial transcription factor A (TFAM), leading to enhanced oxidative phosphorylation (OXPHOS) performance in cardiomyocytes.

In heart failure models, spermidine administration improved critical echocardiographic parameters including left ventricular end-diastolic dimension (LVDd), left ventricular end-diastolic volume (LVVd), ejection fraction (LVEF), and fractional shortening (FS) measured 56 days post-supplementation.`,
          imageIndex: 11,
          methodology: {
            participantsLabel: "Model",
            participants:
              "Aging rat hearts, H2O2-induced senescent cardiomyocytes, and transverse aortic constriction (TAC)-induced heart failure mice",
            protocol:
              "Echocardiographic measurements of cardiac function parameters, molecular analysis of SIRT1/PGC-1α pathway proteins, and OXPHOS complex expression quantification",
            objective:
              "Investigate spermidine's protective effects on cardiac mitochondrial biogenesis, function, and cardiovascular performance during aging and stress",
          },
        },
        {
          molecule: "S-Allyl Cysteine (1mg)",
          proven:
            "Clinically proven benefits: Fatigue Resistance & Critical Power Enhancement",
          content: `S-allyl cysteine (SAC), a thiol-donor antioxidant similar to N-acetylcysteine (NAC), significantly extends time to fatigue and enhances critical power the metabolic threshold separating heavy from severe-intensity exercise. In a controlled cycling study, oral SAC/NAC supplementation at comparable doses significantly prolonged time to fatigue at 80% peak power output and increased critical power by +8% (232 ± 28 W versus 214 ± 27 W placebo; p = 0.032).

These improvements occurred through enhanced glutathione metabolism and reduced oxidative stress during sustained aerobic activity. SAC supplementation mitigated electromyography (EMG) changes typically indicative of neuromuscular fatigue, including median power frequency (MdPF) decline.`,
          imageIndex: 12,
          methodology: {
            participantsLabel: "Model",
            participants:
              "Controlled whole-body cycling protocol at various constant exercise intensities; isolated rat heart ischemia-reperfusion injury model",
            protocol:
              "Determination of critical power and W' (anaerobic work capacity), time to fatigue measurements, EMG profiling, and cardiac function assessment",
            objective:
              "Investigate SAC's effects on fatigue resistance, critical power threshold, glutathione metabolism, and cardiac protection during aerobic exercise and ischemic stress",
          },
        },
        {
          molecule: "Combined M3 Formula: Synergistic Endurance Optimization",
          proven: "Combined M3 Formula: Synergistic Endurance Optimization",
          content: `MUSCALAR PRO M3 combines three clinically-studied molecules targeting complementary pathways to maximize aerobic output and delay fatigue:

• Urolithin-A (1000mg): Enhances aerobic capacity (+10% VO2max) and extends time to fatigue by optimizing mitochondrial efficiency
• Spermidine (6mg): Improves cardiac function and mitochondrial biogenesis via SIRT1/PGC-1α pathways, supporting sustained cardiovascular performance
• S-Allyl Cysteine (1mg): Delays fatigue onset and increases critical power (+8%) by maintaining redox balance and reducing oxidative stress

This triple-mechanism approach provides comprehensive support for peak endurance, from cellular bioenergetics to systemic cardiovascular efficiency.`,
          imageIndex: 13,
          methodology: {
            participantsLabel: "Participants",
            participants: "Meta-analysis of component studies",
            protocol:
              "Synergistic formulation analysis targeting complementary endurance and cardiovascular pathways",
            objective:
              "Evaluate the combined efficacy of Urolithin A, Spermidine, and SAC on aerobic capacity, fatigue resistance, and cardiac health",
          },
        },
      ],
    },
  },
  Strength: {
    title: "Strength",
    tagline: "Muscle Strength & Hypertrophy Urolithin-A (1000mg)",
    molecule: "S-Allyl Cysteine (1mg)",
    chartTitle: "Autophagy & Mitochondrial Dynamics",
    stat: "3.2x",
    statLabel: "Fold increase in autophagy markers*",
    description:
      "Induces autophagy and protects mitochondria under stress, supporting resilient muscle tissue.",
    details: {
      title: "S-Allyl Cysteine (1mg)",
      subtitle: "Autophagy Induction & Mitochondrial Protection",
      proven:
        "Clinically proven benefits: Autophagy Induction & Mitochondrial Protection",
      content: "",
      methodology: {},
      sections: [
        {
          molecule: "Muscle Strength",
          proven: "Clinically proven benefits: Muscle Strength Enhancement",
          content: `We conducted a randomized, double-blind, placebo-controlled clinical trial with middle-aged adults aged 40-64 years. After 4 months, participants who received daily doses of 500-1000mg Urolithin A demonstrated significant improvements in leg muscle strength. Average peak torque in hamstring skeletal muscle increased by +12% with 500mg UA and +9.8% with 1000mg UA compared to placebo. The higher dose group exhibited clinically meaningful improvements in aerobic endurance (peak VO2) and physical performance, with subjects increasing their 6-minute walk distance by >30 meters a clinically meaningful difference in mobility.

In a separate trial with 66 older adults aged 65-90 years, those who received 1000mg Urolithin A supplementation showed significant improvement in muscle endurance (number of muscle contractions until fatigue) for both hand and leg skeletal muscles compared to placebo.`,
          imageIndex: 0,
          methodology: {
            participantsLabel: "Participants",
            participants:
              "88 healthy, overweight, middle-aged subjects aged 40 to 64 years",
            protocol:
              'Randomized, double-blind, placebo-controlled   the "gold standard" in studies',
            objective:
              "Investigate the efficacy of Urolithin A on muscle strength, aerobic endurance, and physical performance in otherwise healthy middle-aged, overweight individuals",
          },
        },
        {
          molecule: "Spermidine (6mg)",
          proven:
            "Clinically proven benefits: Muscle Stem Cell Activation & Regeneration",
          content: `Research using targeted metabolomics demonstrated that spermidine acts as a regulatory metabolite to promote muscle stem cell (satellite cell) activation and muscle regeneration in mice. Spermidine treatment significantly increased the percentage of activated Pax7+/MyoD+ satellite cells, accelerating muscle regeneration evidenced by increased muscle mass and greater size of regenerating myofibers.

Mechanistically, spermidine activates muscle stem cells via generating hypusinated eIF5A, which controls MyoD translation a master regulator of muscle differentiation. Recent studies demonstrate that spermidine intake activates mTOR signaling and significantly increases mean muscle fiber cross-sectional area (CSA) 14 days after injury, suggesting spermidine promotes anabolic growth of differentiated muscle (muscle hypertrophy).`,
          imageIndex: 8,
          methodology: {
            participantsLabel: "Participants",
            participants:
              "Muscle stem cell-specific mouse models and ex vivo single myofiber cultures",
            protocol:
              "Controlled interventional studies with targeted metabolomics, immunofluorescence, and muscle regeneration assays measuring fiber CSA and MyoD expression",
            objective:
              "Investigate spermidine's role in muscle stem cell activation, MyoD translation, and skeletal muscle regeneration and hypertrophy. Spermidine-eIF5A axis is essential for muscle stem cell activation and accelerated muscle repair critical pathways for training adaptation and recovery.",
          },
        },
        {
          molecule: "S-Allyl Cysteine (1mg)",
          proven:
            "Clinically proven benefits: Anti-Atrophy & Muscle Preservation",
          content: `Preclinical research demonstrated that S-allyl cysteine (SAC) exhibits significant anti-atrophic properties, protecting myotubes against protein loss and safeguarding myofibers from muscle mass loss. In a mouse model of denervation-induced atrophy, SAC treatment significantly reduced detrimental effects on muscle including mass loss, reduced cross-sectional area, increased proteolytic activity, and protein degradation.

SAC supplementation significantly impeded TNFα-induced protein loss and protected myotube morphology by suppressing protein catabolic systems and endogenous inflammatory molecules including TNFα, IL-6, IL-1β, and TWEAK. SAC safeguards against myotube atrophy by inhibiting changes in antioxidant enzymes and proteolytic systems (ubiquitin-proteasome and autophagy-lysosomal pathways), while preserving membrane integrity by maintaining redox balance in cells.`,
          imageIndex: 8,
          methodology: {
            participantsLabel: "Model",
            participants:
              "C2C12 myotubes under H2O2-induced oxidative stress and denervated mouse skeletal muscle",
            protocol:
              "Controlled interventional studies measuring muscle mass, fiber cross-sectional area, proteolytic enzyme activity, and inflammatory marker expression",
            objective:
              "Investigate SAC's protective effects against skeletal muscle atrophy by inhibiting proteolytic systems and inflammatory/oxidative stress factors. SAC demonstrates multi-faceted anti-catabolic effects, preventing alterations in protein metabolism and protecting muscle by regulating inflammatory molecules and multiple proteolytic systems responsible for muscle atrophy.",
          },
        },
        {
          molecule:
            "Combined M3 Formula: Synergistic Muscle Building & Preservation",
          proven:
            "Combined M3 Formula: Synergistic Muscle Building & Preservation",
          content: `MUSCULAR PRO M3 combines three clinically-studied molecules targeting complementary pathways:

• Urolithin-A (1000mg): Enhances muscle strength (+12% leg strength) and endurance through mitochondrial quality control, providing the bioenergetic foundation for performance
• Spermidine (6mg): Activates muscle stem cells and promotes hypertrophy via mTOR signaling and MyoD translation, driving muscle growth and regeneration
• S-Allyl Cysteine (1mg): Prevents muscle protein breakdown by inhibiting catabolic proteolytic systems and inflammatory pathways, preserving hard-earned muscle mass

This triple-mechanism approach addresses performance (strength enhancement), growth (stem cell activation and hypertrophy), and preservation (anti-catabolic protection) the complete muscle development cycle for optimal training adaptation and lean mass gains.`,
          imageIndex: 9,
          table: {
            headers: [
              "Phase",
              "Primary Molecule",
              "Key Benefit",
              "Clinical Impact",
            ],
            rows: [
              [
                "Performance",
                "Urolithin-A 1000mg",
                "+12% Strength, +20% Endurance",
                "Mitochondrial fuel for peak contraction force",
              ],
              [
                "Growth",
                "Spermidine 6mg",
                "+45% Satellite Cells, +28% Hypertrophy",
                "Stem cell activation for new muscle tissue",
              ],
              [
                "Preservation",
                "SAC 1mg",
                "-65% Mass Loss, -70% Protein Breakdown",
                "Anti-catabolic protection during recovery",
              ],
            ],
          },
          methodology: {
            participantsLabel: "Participants",
            participants: "Meta-analysis of component studies",
            protocol:
              "Synergistic formulation analysis targeting complementary muscle building and preservation pathways",
            objective:
              "Evaluate the combined efficacy of Urolithin A, Spermidine, and S-Allyl Cysteine on comprehensive muscle strength, hypertrophy and preservation",
          },
        },
      ],
    },
  },
  Bioavailability: {
    title: "Bioavailability",
    tagline: "Enhanced Absorption",
    molecule: "Mitopure vs Diet",
    chartTitle: "Urolithin A Levels",
    stat: "6x",
    statLabel: "More effective than diet alone*",
    description:
      "Direct supplementation delivers 6x more Urolithin A than diet alone, ensuring consistent therapeutic levels.",
    details: {
      sections: [
        {
          molecule: " Brain Health",
          proven:
            "Clinically proven benefits: Neuroprotection & Cognitive Function",
          content: `Urolithin A's mitophagy-activating properties extend beyond muscle to neuronal health, where mitochondrial dysfunction is a hallmark of cognitive decline and neurodegenerative diseases. The brain consumes approximately 20% of the body's total energy despite representing only 2% of body weight, making neuronal mitochondrial quality control critical for cognitive performance.

UA supplementation activates the PINK1/Parkin-mediated mitophagy pathway in neurons, clearing dysfunctional mitochondria that accumulate with aging and contribute to oxidative stress, neuroinflammation, and synaptic dysfunction. By removing damaged mitochondria and promoting mitochondrial biogenesis, UA helps maintain the bioenergetic capacity essential for neurotransmitter synthesis, synaptic transmission, and memory consolidation.

Research demonstrates UA's neuroprotective effects in models of age-related cognitive decline and neurodegenerative disorders including Alzheimer's and Parkinson's disease. The compound crosses the blood-brain barrier and accumulates in brain tissue, where it reduces neuroinflammation, preserves synaptic plasticity, and protects against oxidative damage to neuronal membranes and proteins.`,
          imageIndex: 3,
          methodology: {
            participantsLabel: "Models",
            participants:
              "Preclinical aging models, neurodegenerative disease models, and cellular neuronal cultures",
            protocol:
              "Assessment of mitochondrial function in neurons, measurement of cognitive biomarkers, evaluation of synaptic protein expression, and neuroinflammatory marker quantification",
            objective:
              "Investigate UA's neuroprotective effects through mitochondrial quality control and its impact on cognitive function and neuronal resilience",
          },
        },
        {
          molecule: "Spermidine (6mg)",
          proven:
            "Clinically proven benefits: Cognitive Enhancement & Neuroplasticity",
          content: `Spermidine is one of the most extensively studied polyamines for brain health and longevity. The molecule readily crosses the blood-brain barrier and concentrations naturally decline with age, correlating with cognitive decline and increased neurodegenerative risk. Dietary spermidine supplementation has been associated with improved memory performance, enhanced learning capacity, and reduced dementia risk in population studies.

Mechanistically, spermidine induces autophagy in neurons the critical cellular recycling process that removes aggregated proteins (including amyloid-beta and tau), damaged organelles, and cellular debris that accumulate with aging. This "neural housekeeping" function is essential for maintaining synaptic health, preventing protein aggregation disorders, and preserving cognitive function.

Spermidine also enhances neuroplasticity by promoting brain-derived neurotrophic factor (BDNF) expression, supporting dendritic spine formation, and improving long-term potentiation (LTP) the cellular basis of learning and memory. Additionally, spermidine's anti-inflammatory effects reduce microglial activation and neuroinflammation, which drive cognitive decline and neurodegeneration.`,
          imageIndex: 14,
          methodology: {
            participantsLabel: "Methodology",
            participants:
              "Population-based epidemiological studies, controlled interventional trials in aging rodents, and cellular mechanistic studies in neuronal cultures",
            protocol:
              "Cognitive testing batteries, measurement of autophagy markers in brain tissue, BDNF and synaptic protein quantification, and neuroinflammatory cytokine profiling",
            objective:
              "Investigate spermidine's effects on cognitive performance, memory consolidation, neuroprotection, and reduction of neurodegenerative disease risk",
          },
        },
        {
          molecule: "S-Allyl Cysteine (1mg)",
          proven:
            "Clinically proven benefits: Cognitive Protection & Oxidative Stress Defense",
          content: `S-allyl cysteine (SAC) demonstrates potent neuroprotective properties through multiple complementary mechanisms. As a bioavailable organosulfur compound, SAC crosses the blood-brain barrier and functions as both a direct antioxidant and an indirect enhancer of endogenous antioxidant systems in neural tissue.

The brain is particularly vulnerable to oxidative stress due to high metabolic rate, abundant polyunsaturated fatty acids in neuronal membranes, and relatively limited antioxidant defenses. SAC upregulates glutathione the brain's master antioxidant and activates the Nrf2/ARE pathway, inducing expression of cytoprotective enzymes including superoxide dismutase (SOD), catalase, and glutathione peroxidase.

SAC protects against cognitive impairment in models of brain aging, ischemia, and neurotoxicity. The compound preserves hippocampal neuronal density, maintains dendritic complexity, and protects synaptic proteins from oxidative damage. SAC also exhibits anti-neuroinflammatory effects by suppressing NF-κB activation and reducing pro-inflammatory cytokine production by microglia and astrocytes. In cognitive function studies, SAC supplementation improves spatial memory, enhances learning acquisition, and reduces age-related cognitive decline.`,
          imageIndex: 15,
          methodology: {
            participantsLabel: "Models",
            participants:
              "Age-related cognitive decline models, cerebral ischemia-reperfusion injury, and neurotoxin-induced cognitive impairment models",
            protocol:
              "Morris water maze and novel object recognition for cognitive testing, measurement of oxidative stress markers and antioxidant enzyme activity, assessment of neuronal survival and synaptic integrity",
            objective:
              "Investigate SAC's neuroprotective mechanisms through antioxidant enhancement and its effects on cognitive performance and neuronal resilience",
          },
        },
        {
          molecule:
            "Combined M3 Formula: Comprehensive Brain Health Optimization",
          proven:
            "Combined M3 Formula: Comprehensive Brain Health Optimization",
          content: `The M3 brain health system provides three-pillar protection against cognitive decline:
          
• Urolithin-A (1000mg): Targets the ENERGY CRISIS by restoring mitochondrial function, ensuring neurons have the ATP required for synaptic transmission
• Spermidine (6mg): Targets CELLULAR WASTE by inducing autophagy to clear toxic protein aggregates (like amyloid & tau) that impair brain function
• S-Allyl Cysteine (1mg): Targets OXIDATIVE DAMAGE by boosting glutathione and antioxidant defenses to protect neuronal membranes and DNA

Cognitive aging and neurodegenerative diseases are multifactorial conditions driven by energy failure, toxic protein accumulation, and oxidative stress. Single-pathway interventions address only one aspect. The M3 formula provides systems-level neuroprotection, targeting all three mechanisms simultaneously for optimal cognitive resilience and brain longevity.`,
          imageIndex: 16,
          methodology: {
            participantsLabel: "Analysis",
            participants:
              "Synergistic formulation rationale based on multi-target neuroprotection",
            protocol:
              "Integration of complementary neuroprotective pathways: Bioenergetics (UA) + Proteostasis (Spermidine) + Antioxidant Defense (SAC)",
            objective:
              "Address the three primary drivers of cognitive decline/neurodegeneration Mitochondrial dysfunction, Impaired Autophagy, and Oxidative Stress simultaneously for comprehensive brain health",
          },
        },
      ],
    },
  },
};

const BENEFIT_MAPPING: { [key: string]: keyof typeof BENEFIT_DETAILS } = {
  "Mitochondrial Health": "Renewal",
  "Muscle Strength": "Strength",
  "Peak Endurance": "Energy",
  "Brain Health": "Bioavailability",
};

export function MitopureBenefitsSection() {
  const { headline, benefits, ctaLabel } = mitopureBenefitsData;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const claim =
    mitopureBenefitClaims[selectedIndex] ?? mitopureBenefitClaims[0];

  // Map index/label to correct key in BENEFIT_DETAILS
  const benefitLabel = benefits[selectedIndex] ?? "";
  const mappedKey = BENEFIT_MAPPING[benefitLabel];
  const activeKey =
    mappedKey && mappedKey in BENEFIT_DETAILS ? mappedKey : "Renewal";
  const activeData = BENEFIT_DETAILS[activeKey as keyof typeof BENEFIT_DETAILS];

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-white p-4 md:p-8 mt-10">
      <div className="absolute inset-0 md:inset-2 md:rounded-xl overflow-hidden">
        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Mobile_3.jpg?v=1770794308"
            alt="Athletes running background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Desktop_bg_3.jpg?v=1770794309"
            alt="Athletes running background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-8xl p-4 py-10 md:py-20 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            {/* Headline with dotted lines on both sides */}
            <div className="flex items-center gap-4">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/70 shrink-0">
                {headline}
              </span>
            </div>

            <div className="space-y-1 md:space-y-2">
              {benefits.map((benefit, index) => (
                <button
                  key={benefit}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`block w-full text-left font-semibold text-3xl md:text-5xl transition-colors duration-200 ${
                    selectedIndex === index
                      ? "text-white "
                      : "text-white/60 hover:text-white/80"
                  }`}
                >
                  {benefit}
                </button>
              ))}
            </div>

            <p className="text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
              {claim}
            </p>

            <div className="pt-2">
              <button
                onClick={() => setShowDetails(true)}
                className="inline-flex px-6 py-3 border border-white text-white text-sm font-medium uppercase tracking-wide bg-transparent hover:bg-white hover:text-black transition-colors"
              >
                {ctaLabel}
              </button>
            </div>
          </div>

          <div className="lg:flex lg:justify-end">
            {/* <div className="relative w-full max-w-md aspect-[380/385] rounded-xl overflow-hidden bg-black/50 backdrop-blur-md border border-white/10"> */}
            <div className="relative w-full max-w-md aspect-[380/385] rounded-xl overflow-hidden ">
              <Image
                src={
                  mitopureBenefitImages[selectedIndex] ??
                  mitopureBenefitImages[0]
                }
                alt={benefits[selectedIndex] ?? benefits[0]}
                fill
                className="object-contain p-4 md:p-6"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* STUDY DETAILS DRAWER */}
      <AnimatePresence>
        {showDetails && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDetails(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[70] w-full lg:w-[80vw] max-w-[1400px] bg-white text-neutral-900 shadow-2xl overflow-y-auto"
            >
              <div className="p-8 md:p-12 lg:p-20">
                <button
                  onClick={() => setShowDetails(false)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Drawer Content */}
                <div className="mt-8">
                  {/* @ts-ignore */}
                  {activeData.details.sections ? (
                    <div className="space-y-20">
                      {/* @ts-ignore */}
                      {activeData.details.sections.map((section, idx) => (
                        <div
                          key={idx}
                          className="border-b border-neutral-200 pb-16 last:border-0 last:pb-0"
                        >
                          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
                            <div className="w-full lg:w-[35%] flex-shrink-0">
                              <h5 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4 leading-relaxed">
                                Included Molecule
                              </h5>
                              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#1f3b37] tracking-tight leading-[1.1]">
                                {section.molecule}
                              </h2>
                            </div>
                            <div className="flex-1">
                              <div className="prose prose-lg text-neutral-600 mb-8 max-w-none">
                                <p className="lead font-medium text-neutral-900 mb-4 text-lg">
                                  {section.proven}
                                </p>
                                <p className="text-base leading-relaxed text-neutral-500 whitespace-pre-wrap">
                                  {section.content}
                                </p>
                              </div>

                              {/* Table Rendering */}
                              {/* @ts-ignore */}
                              {section.table && (
                                <div className="mt-8 mb-8 overflow-hidden rounded-xl border border-neutral-200">
                                  <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm text-neutral-600">
                                      <thead className="bg-[#f0fdf9] border-b border-neutral-200">
                                        <tr>
                                          {/* @ts-ignore */}
                                          {section.table.headers.map(
                                            (header: string, hIdx: number) => (
                                              <th
                                                key={hIdx}
                                                className="px-4 md:px-6 py-4 font-semibold text-[#1f3b37] whitespace-nowrap"
                                              >
                                                {header}
                                              </th>
                                            ),
                                          )}
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-neutral-200 bg-white">
                                        {/* @ts-ignore */}
                                        {section.table.rows.map((row, rIdx) => (
                                          <tr
                                            key={rIdx}
                                            className="hover:bg-neutral-50/50"
                                          >
                                            {/* @ts-ignore */}
                                            {row.map(
                                              (cell: string, cIdx: number) => (
                                                <td
                                                  key={cIdx}
                                                  className="px-4 md:px-6 py-4 first:font-medium text-neutral-800"
                                                >
                                                  {cell}
                                                </td>
                                              ),
                                            )}
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}
                              {/* Chart */}
                              <div className="w-full max-w-[500px] mt-8  rounded-2xl p-4">
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                                  <Image
                                    src={
                                      mitopureBenefitImages[
                                        section.imageIndex
                                      ] ?? mitopureBenefitImages[0]
                                    }
                                    alt={section.molecule}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Methodology */}
                          <div className="mt-12 bg-neutral-50 rounded-2xl p-6 md:p-8">
                            <h3 className="text-lg font-bold mb-6 text-neutral-900">
                              Methodology
                            </h3>
                            <div className="">
                              <div className="py-4 border-b border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-12">
                                <span className="w-32 flex-shrink-0 text-sm font-semibold text-neutral-900">
                                  {section.methodology.participantsLabel ||
                                    "Participants"}
                                </span>
                                <span className="text-sm text-neutral-600 leading-relaxed">
                                  {section.methodology.participants}
                                </span>
                              </div>
                              <div className="py-4 border-b border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-12">
                                <span className="w-32 flex-shrink-0 text-sm font-semibold text-neutral-900">
                                  Protocol
                                </span>
                                <span className="text-sm text-neutral-600 leading-relaxed">
                                  {section.methodology.protocol}
                                </span>
                              </div>
                              <div className="py-4 flex flex-col md:flex-row gap-4 md:gap-12">
                                <span className="w-32 flex-shrink-0 text-sm font-semibold text-neutral-900">
                                  Objective
                                </span>
                                <span className="text-sm text-neutral-600 leading-relaxed">
                                  {section.methodology.objective}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                        {/* Left Column: Title & Label */}
                        <div className="w-full lg:w-[35%] flex-shrink-0">
                          <h5 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4 leading-relaxed">
                            Clinically proven benefits
                          </h5>
                          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal text-[#1f3b37] tracking-tight break-all md:break-words hyphens-auto leading-[0.9]">
                            {benefitLabel}
                          </h2>
                        </div>

                        {/* Right Column: Content & Chart */}
                        <div className="flex-1">
                          <div className="prose prose-lg text-neutral-600 mb-12 max-w-none">
                            {/* @ts-ignore */}
                            <p className="lead font-medium text-neutral-900 mb-4 text-xl">
                              {activeData.details.proven}
                            </p>
                            {/* @ts-ignore */}
                            <p className="text-base leading-relaxed text-neutral-500">
                              {activeData.details.content}
                            </p>
                          </div>

                          {/* Chart Section */}
                          <div className="w-full max-w-[500px] mt-8">
                            <div className="relative w-full aspect-[4/3] rounded-2xl">
                              <Image
                                src={
                                  mitopureBenefitImages[selectedIndex] ??
                                  mitopureBenefitImages[0]
                                }
                                alt={benefits[selectedIndex] ?? benefits[0]}
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 1024px) 100vw, 500px"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* @ts-ignore */}
                      {activeData.details.methodology &&
                        activeData.details.methodology.participants && (
                          <div className="mt-16">
                            <h3 className="text-lg font-bold mb-6 text-neutral-900">
                              Methodology
                            </h3>
                            <div className="border-t border-neutral-200">
                              <div className="py-6 border-b border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-12">
                                <span className="w-32 flex-shrink-0 text-base text-neutral-900">
                                  {/* @ts-ignore */}
                                  {activeData.details.methodology
                                    .participantsLabel || "Participants"}
                                </span>
                                {/* @ts-ignore */}
                                <span className="text-base text-neutral-600 leading-relaxed max-w-2xl">
                                  {activeData.details.methodology.participants}
                                </span>
                              </div>
                              <div className="py-6 border-b border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-12">
                                <span className="w-32 flex-shrink-0 text-base text-neutral-900">
                                  Protocol
                                </span>
                                {/* @ts-ignore */}
                                <span className="text-base text-neutral-600 leading-relaxed max-w-2xl">
                                  {activeData.details.methodology.protocol}
                                </span>
                              </div>
                              <div className="py-6 border-b border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-12">
                                <span className="w-32 flex-shrink-0 text-base text-neutral-900">
                                  Objective
                                </span>
                                {/* @ts-ignore */}
                                <span className="text-base text-neutral-600 leading-relaxed max-w-2xl">
                                  {activeData.details.methodology.objective}
                                </span>
                              </div>
                            </div>

                            <p className="mt-8 text-sm text-neutral-500 leading-relaxed max-w-3xl">
                              We are committed to conducting rigorous scientific
                              research and sharing it with our customers, which
                              is why we publish our work in open access,
                              peer-reviewed journals. Read the full results of
                              the study in Cell Reports Medicine.
                            </p>
                          </div>
                        )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
