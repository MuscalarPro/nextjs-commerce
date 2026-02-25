export interface MethodologyItem {
  label: string;
  value: string;
}

export interface KeyFinding {
  title: string;
  points?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface BenefitDetailsCommon {
  title: string;
  tagline: string;
  chartTitle: string;
  stat: string;
  statLabel: string;
  description: string;
  customImage?: string;
  youtubeSrc?: string;
}

export interface ScienceBenefitDetails extends BenefitDetailsCommon {
  details: {
    proven: string;
    methodology: MethodologyItem[];
    keyFindings: KeyFinding[];
    clinicalContext: string;
    footer: string;
  };
}

export interface ProgramBenefitDetails extends BenefitDetailsCommon {
  details: {
    proven: string;
    content: string;
  };
}

export type BenefitDetail = ScienceBenefitDetails | ProgramBenefitDetails;

export const BENEFIT_DETAILS: Record<string, BenefitDetail> = {
  "GLP-1 injections": {
    title: "Muscle Loss on GLP-1",
    tagline: "GLP-1",
    chartTitle: "MITOCHONDRIAL BIOENERGETICS",
    stat: "+55%",
    statLabel: "Maximal respiration capacity*",
    description:
      "Enhances mitochondrial respiration and ATP production, fueling your cells for peak performance.",
    customImage:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Chart_for_overlay.png?v=1770374101",
    youtubeSrc: "https://www.youtube.com/embed/StopLosingMuscle", // Placeholder ID, replaceable
    details: {
      proven:
        "Lean mass loss as percentage of total weight loss across placebo and GLP-1 medications: placebo shows 10-15% muscle loss, tirzepatide 25%, and semaglutide 40-45%,",
      methodology: [
        {
          label: "Participants",
          value:
            "2,258 adults with obesity or overweight across 22 randomized controlled trials (STEP and SURMOUNT programs)",
        },
        {
          label: "Protocol",
          value: `Randomized, double-blind, placebo-controlled trials using DEXA scans to measure body composition changes   the "gold standard" in clinical studies`,
        },
        {
          label: "Objective",
          value:
            "Investigate the effects of GLP-1 receptor agonists (semaglutide 2.4mg weekly, tirzepatide 5-15mg weekly) on body composition including lean muscle mass and fat mass in individuals with obesity",
        },
      ],
      keyFindings: [
        {
          title: "Semaglutide (Ozempic/Wegovy):",
          points: [
            "Approximately 40-45% of total weight loss is lean muscle mass",
            "Absolute lean mass reduction: -1.02 kg compared to placebo",
            "Psoas muscle volume decreased by 9.3% over 24 weeks, with greater losses in older adults (>60 years: -22.8%)",
          ],
        },
        {
          title: "Tirzepatide (Mounjaro/Zepbound):",
          points: [
            "Approximately 25-26% of total weight loss is lean muscle mass",
            "Mean lean mass decreased by 10.9% vs 2.6% with placebo",
            "Absolute lean mass loss: -5.6 kg vs -1.2 kg placebo over 72 weeks",
          ],
        },
        {
          title: "Meta-Analysis Results:",
          points: [
            "GLP-1 receptor agonists lead to ~25% lean mass loss relative to total weight reduction across all trials",
            "Higher doses (semaglutide 2.4mg, tirzepatide 15mg) resulted in optimal fat loss but were least effective at preserving lean mass",
          ],
        },
      ],
      clinicalContext:
        "While GLP-1 medications produce significant fat loss and metabolic improvements, the concurrent loss of lean muscle mass raises concerns about sarcopenia risk, particularly in vulnerable populations like older adults. This data supports the need for combination therapies (like bimagrumab blocking myostatin/activin A) or resistance training protocols to preserve muscle during GLP-1 treatment.",
      footer:
        "We are committed to conducting rigorous scientific research and sharing it with our customers, which is why we present data from open access, peer-reviewed journals published in Nature Medicine, Diabetes, Obesity and Metabolism, and The Lancet.",
    },
  },
  "GLP-1 + M3": {
    title: "Muscle Strength and Hypertrophy on M3",
    tagline: "Clinical Trial",
    chartTitle: "Mitochondrial Renewal",
    stat: "+39%",
    statLabel: "Increase in Mitophagy",
    description:
      "Protection against muscle breakdown during caloric restriction and improved muscle endurance.",
    customImage:
      "https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Overlay_chart.png?v=1770375366",
    details: {
      proven:
        "Lean mass loss as percentage of total weight loss across placebo and GLP-1 medications: placebo shows 10-15% muscle loss, tirzepatide 25%, and semaglutide 40-45%,",
      methodology: [
        {
          label: "Participants",
          value:
            "90 healthy, overweight, middle-aged subjects aged 40 to 65 years on GLP-1 medications (semaglutide or tirzepatide) for weight loss",
        },
        {
          label: "Protocol",
          value: `Randomized, double-blind, placebo-controlled   the "gold standard" in studies. Participants received daily supplementation with MUSCULAR PRO M3 (1000mg Urolithin A + 6mg Spermidine + 1mg S-Allyl Cysteine) or placebo for 16 weeks`,
        },
        {
          label: "Objective",
          value:
            "Investigate the efficacy of MUSCULAR PRO M3 on mitophagy, autophagy, and muscle",
        },
        {
          label: "The Problem",
          value:
            "40-45% of weight loss from semaglutide (Ozempic/Wegovy) and 25% from tirzepatide (Mounjaro/Zepbound) is lean muscle mass.",
        },
        {
          label: "The Solution",
          value:
            "M3 targets three specific mechanisms: 1. Urolithin-A removes damaged mitochondria. 2. Spermidine activates cellular cleanup. 3. S-Allyl Cysteine blocks proteolytic breakdown.",
        },
        {
          label: "The Triple Protocol",
          value:
            "Dosage: 3 capsules daily. Timing: Morning with breakfast. Duration: Minimum 16 weeks for full benefits. Synergistic Stack: Resistance training 3x/week + high protein intake.",
        },
      ],
      keyFindings: [
        {
          title: "Study Results",
          points: [
            "We conducted a randomized placebo-controlled clinical trial with adults aged 40-65 years old.",
            "After 4 months, participants who received a daily dose of MUSCULAR PRO M3 showed:",
            "+39% increase in mitophagy (mitochondrial renewal)",
            "Improved muscle endurance and strength in aging populations",
            "Protection against muscle breakdown during caloric restriction",
          ],
        },
        {
          title: "Increase in Mitophagy",
          points: ["PLACEBO: ~15%", "MUSCULAR PRO M3: +39%"],
        },
        {
          title: "Clinically Proven Benefits",
          points: [
            "Urolithin-A (1000mg): +39% increase in mitophagy (mitochondrial renewal) and improved muscle endurance.",
            "Spermidine (6mg): Reactivates autophagy to cleanup damaged proteins, supports muscle regeneration, and reduces myofiber degeneration.",
            "S-Allyl Cysteine (1mg): Provides anti-atrophic protection by lowering inflammatory cytokines (TWEAK, IL-6, myostatin) associated with muscle breakdown.",
          ],
        },
        {
          title: "Who Should Take MUSCULAR PRO M3?",
          points: [
            "Anyone on GLP-1 medications (semaglutide, tirzepatide)",
            "Individuals 40+ experiencing age-related muscle loss",
            "Those in caloric deficit attempting to preserve lean mass",
            "Athletes and biohackers focused on longevity",
          ],
        },
        {
          title: "The Triple-Action Mechanism",
          table: {
            headers: ["Mechanism", "Active Ingredient", "Clinical Outcome"],
            rows: [
              [
                "Mitophagy Activation",
                "Urolithin-A 1000mg",
                "+39% increase in damaged mitochondria removal",
              ],
              [
                "Autophagy Induction",
                "Spermidine 6mg",
                "Improved muscle structure, reduced degeneration",
              ],
              [
                "Anti-Atrophy",
                "S-Allyl Cysteine 1mg",
                "Prevented protein breakdown, maintained muscle mass",
              ],
            ],
          },
        },
        {
          title: "Quality Standards",
          points: [
            "Clinically dosed ingredients   same doses used in peer-reviewed trials",
            "Third-party tested for purity and potency",
            "No artificial fillers or additives",
            "FSSAI approved for Indian market",
            "GMP-certified manufacturing",
            "Published research in Nature Metabolism, Cell Reports Medicine, Biochimica et Biophysica Acta",
          ],
        },
      ],
      clinicalContext:
        "Science-Backed. Results-Driven. We formulate with clinically validated doses. MUSCULAR PRO M3 represents the cutting edge of longevity science   three proven ingredients working synergistically to preserve your musclespan while you optimize your body composition. Preserve your musclespan. Extend your healthspan.",
      footer:
        "These statements are supported by scientific research published in peer-reviewed journals. This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare provider before starting any supplementation, especially if taking GLP-1 medication.",
    },
  },

  "Oral med kits": {
    title: "Weight Loss",
    tagline: "PERSONALIZED TREATMENT",
    chartTitle: "WEIGHT REDUCTION",
    stat: "-15%",
    statLabel: "Average weight loss*",
    description:
      "Tailored oral medications designed to support sustainable weight management.",
    details: {
      proven: "Clinically proven benefits: Sustained Weight Management",
      content: `Clinical studies have shown that personalized oral medication plans can lead to significant weight reduction when combined with lifestyle modifications. Patients reported an average of 15% body weight loss over a 12-month period, with improvements in metabolic markers including insulin sensitivity and lipid profiles. The personalized approach ensures optimal dosage and minimizes side effects.`,
    },
  },
  "Personalized doses": {
    title: "Balance",
    tagline: "HORMONAL OPTIMIZATION",
    chartTitle: "HORMONAL BALANCE",
    stat: "92%",
    statLabel: "Patient satisfaction*",
    description:
      "Customized dosing strategies to align with your body's unique hormonal rhythm.",
    details: {
      proven: "Clinically proven benefits: Hormonal Regulation & Optimization",
      content: `Our adaptive dosing protocols are designed to synchronize with your circadian rhythm and hormonal fluctuations. In a patient satisfaction survey, 92% of participants reported feeling more balanced and energetic after switching to a personalized dosing schedule. This approach maximizes therapeutic efficacy while reducing the risk of adverse effects associated with standard dosing.`,
    },
  },
};
