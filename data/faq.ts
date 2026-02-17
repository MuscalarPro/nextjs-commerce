export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    title: "M3 Protocol",
    items: [
      {
        id: "m3-1",
        question: "What exactly does my M3 Protocol include?",
        answer:
          "Your M3 Protocol includes: Daily 2-capsule stack of Urolithin A (1 g), Spermidine (6 mg), and S-Allyl Cysteine (1 mg) — dosed at human RCT levels. A personalized Musclespan action plan built on your biomarkers and training goals. 5 performance scores: Mitochondrial Health, Muscle Strength, Endurance, Recovery, and Brain Health. M3 AI Chat to dig deeper into your cellular data. Most longevity clinics charge ₹50k–₹5L for a fraction of this stack. We engineered technology to make human-trial-grade cellular nutrition accessible at ~₹100/day.",
      },
      {
        id: "m3-2",
        question: "Which bio-molecules are included in M3?",
        answer:
          "Each M3 serving delivers three precision bio-molecules standardized from patented extracts: Urolithin A (1 g/day): Triggers mitophagy — the selective recycling of damaged mitochondria. Validated in JAMA Network Open and Cell Reports Medicine human RCTs. Spermidine (6 mg/day): Activates autophagy — cellular housekeeping that clears protein aggregates. S-Allyl Cysteine (1 mg/day): Supports nitric-oxide pathways and neuroprotection via glutathione synthesis. Additional bio-molecules can be unlocked through the M3 Store.",
      },
      {
        id: "m3-3",
        question: "What performance domains does M3 target?",
        answer:
          "M3 offers a comprehensive mitophagy-first protocol tailored to your biology, including: Mitochondrial Health & Cellular Energy (increasing renewal by up to 39% over 16 weeks), Muscle Strength & Endurance (~12% increase in strength and 41% in peak endurance), Brain Health & Cognitive Performance (neuroprotection and spatial memory), Recovery & Vascular Performance (accelerated post-training recovery), and Body Composition & GLP-1 Support (preserving lean muscle mass during weight loss).",
      },
      {
        id: "m3-4",
        question:
          "What is musclespan science and how is it different from mainstream supplementation?",
        answer:
          "Mainstream supplementation addresses surface-level deficits like protein or multivitamins. Musclespan science targets the mitochondrial operating system — the root of cellular energy. When mitophagy declines with age, muscle output drops and biological aging accelerates. M3 uses precision bio-molecules validated in human RCTs, like Urolithin A and Spermidine, to trigger deep cellular renewal that defines musclespan science, going beyond conventional sports supplements.",
      },
      {
        id: "m3-5",
        question: "If I already feel strong and healthy, how will M3 help me?",
        answer:
          "Many high-performers discover they are operating with suboptimal mitochondrial efficiency — silently losing 5–10% cellular energy output per decade. Mitophagy-first nutrition optimizes your cellular engine while it's still running well, rather than waiting for performance decline to become irreversible.",
      },
      {
        id: "m3-6",
        question: "Where is Muscalarpro™ [M3] currently available?",
        answer:
          "Muscalarpro™ [M3] is currently available across India with direct shipping to all major cities including Mumbai, Delhi NCR, Bangalore, and more. International shipping (UAE, Singapore, US, UK) is launching Q2 2026. The product is manufactured at FDA-audited, cGMP-certified facilities in Dehradun, Uttarakhand.",
      },
    ],
  },
  {
    title: "Biomarker Tracking",
    items: [
      {
        id: "bio-1",
        question: "Does M3 work with health insurance?",
        answer:
          "Not at this time, but we're working on integration with corporate wellness programs. M3 is positioned as a performance-grade cellular nutrition protocol — much like a gym membership for those committed to musclespan and longevity.",
      },
      {
        id: "bio-2",
        question:
          "Why can't I get these bio-molecules from a regular supplement store?",
        answer:
          "Most stores stock generic formulations dosed far below human RCT thresholds. Clinical-grade Urolithin A, Spermidine, and S-Allyl Cysteine require pharmaceutical-grade processing that conventional brands cannot deliver. We provide clinical-dose formulations at a fraction of the cost.",
      },
      {
        id: "bio-3",
        question: "Can I track my biomarkers with M3?",
        answer:
          "Yes. The M3 app (launching with AI Concierge) will allow you to upload blood work, track muscular, metabolic, hormonal, and recovery biomarkers, and receive AI-powered summaries connecting your lab data to protocol performance.",
      },
      {
        id: "bio-4",
        question: "How long do results take?",
        answer:
          "Cellular changes begin within 4 weeks. Improvements in muscle endurance and strength are measurable by 8–16 weeks. We recommend a minimum 90-day protocol for meaningful, trackable outcomes.",
      },
    ],
  },
  {
    title: "M3 AI Concierge",
    items: [
      {
        id: "con-1",
        question:
          "How is M3 AI Concierge different from a regular fitness app?",
        answer:
          "M3 AI Concierge is an AI-powered musclespan doctor built for cellular performance. It interprets your biomarkers (blood panels, HRV, VO2 max), correlates them with your protocol, and generates clinical recommendations, looping in licensed physicians for escalation.",
      },
      {
        id: "con-2",
        question: "Does M3 AI Concierge replace my doctor?",
        answer:
          "No. It is designed to complement your primary care physician by specializing in musclespan optimization and cellular performance. We encourage sharing your biomarker reports with your outside providers.",
      },
      {
        id: "con-3",
        question: "What does the M3 AI Concierge actually do?",
        answer:
          "It ensures protocol adherence, tracks biomarker trends, surfaces insights, adjusts dosing, and connects you with our clinical team. Responses are within minutes for AI and 1 business day for clinicians.",
      },
    ],
  },
  {
    title: "Payments",
    items: [
      {
        id: "pay-1",
        question: "Can I use corporate wellness or employee benefits for M3?",
        answer:
          "We are partnering with corporate programs that recognize musclespan as a productivity investment. We can provide documentation to help you offer M3 as a benefit to your team.",
      },
      {
        id: "pay-2",
        question: "Does M3 accept health insurance?",
        answer:
          "Not currently. M3 may be eligible for reimbursement through select wellness budgets. It's an investment in cellular prevention rather than reactive care.",
      },
      {
        id: "pay-3",
        question: "Can I business-expense Muscalarpro™?",
        answer:
          "Many HNI members business-expense M3 as a professional wellness service. Your cellular health impacts your leadership capacity and energy levels.",
      },
      {
        id: "pay-4",
        question: "Does Muscalarpro™ offer refunds?",
        answer:
          "We do not offer refunds. However, if you have quality concerns, our concierge team will work to resolve them. Every batch is third-party tested.",
      },
    ],
  },
  {
    title: "M3 Store",
    items: [
      {
        id: "sto-1",
        question: "What quality standards does M3 meet?",
        answer:
          "M3 formulations use bio-molecules backed by human RCTs published in JAMA and Cell Reports Medicine. Products are manufactured at NSF cGMP and FDA-audited facilities, FSSAI licensed, and tested for heavy metals and 300+ banned substances.",
      },
      {
        id: "sto-2",
        question: "Who formulates M3?",
        answer:
          "Our team includes physicians, cellular biologists, and pharmacologists specializing in mitophagy science. Manufacturing is handled at an FDA-audited facility with pharmaceutical-grade quality controls.",
      },
      {
        id: "sto-3",
        question: "What is the M3 'science & value' guarantee?",
        answer:
          "Every bio-molecule is backed by peer-reviewed human clinical trials at the dose delivered. We match or beat pricing for any equivalent clinical-grade, human-RCT-validated formulation in India.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    items: [
      {
        id: "pri-1",
        question: "Is my data secure?",
        answer:
          "Yes. All data is securely encrypted in compliance with India's DPDPA 2023 and GDPR-aligned international standards. We never share your data with third parties.",
      },
      {
        id: "pri-2",
        question: "Who owns my data?",
        answer:
          "You do. You can download or delete your protocol data, biomarker history, and AI conversations at any time.",
      },
    ],
  },
];

export const homeFaqData: FAQItem[] = [
  {
    id: "home-1",
    question: "Is my data private?",
    answer:
      "Yes—we use secure encryption and your information is only used to deliver personalized MuscleSpan guidance.",
  },
  {
    id: "home-2",
    question: "Who has access to my results?",
    answer: "Only you and your assigned care team.",
  },
  {
    id: "home-3",
    question: "Can I delete my data?",
    answer: "Yes—you can request data deletion at any time.",
  },
  {
    id: "home-4",
    question: "Are my conversations with M3 Concierge private?",
    answer: "Yes—all conversations are encrypted and stored securely.",
  },
  {
    id: "home-5",
    question: "Can my doctor see my M3 Concierge conversations?",
    answer:
      "Only your assigned M3 clinician has access, not external doctors—unless you choose to share.",
  },
  {
    id: "home-6",
    question: "Can I have multiple people on one account?",
    answer:
      "Each M3 Concierge membership is individual for personalized accuracy.",
  },
];
