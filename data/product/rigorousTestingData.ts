// Data for the Rigorous Testing section

export interface TestingCard {
  id: string;
  title: string;
  icon: string;
  detailTitle: string;
  detailSubtitle?: string;
  sections: {
    title: string;
    content: string | string[];
    quote?: string;
    actionButton?: {
      label: string;
      url: string;
    };
  }[];
  facilityInfo?: {
    name: string;
    location: string;
    certificateNo: string;
    validThrough: string;
  };
  trialSummary?: {
    length: string;
    design: string;
    participants: string;
    arms: string;
    citation: string;
  };
  footerQuote?: string;
  actionButton?: {
    label: string;
    url: string;
  };
}

export const rigorousTestingData: TestingCard[] = [
  {
    id: "fssai",
    title: "FSSAI Verifies",
    icon: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/FSSAI.png?v=1776938901",
    detailTitle: "FSSAI Central License",
    detailSubtitle:
      "The regulatory baseline for safety — but for us, only the starting point.",
    sections: [
      {
        title: "WHAT FSSAI VERIFIES",
        content: [
          "Raw material traceability and ethical sourcing origins.",
          "Hygiene protocols and cross-contamination prevention.",
          "Label accuracy and forbidden substance screening.",
          "Packaging integrity and shelf-life stability data.",
        ],
      },
      {
        title: "THE DIFFERENCE BETWEEN REGISTRATION & LICENSING",
        content:
          'Most supplements operate under basic "Registration." MuscalarPro maintains a "Central License" (#10023064000123), which requires the highest tier of recurring audits and infrastructure standards in India.',
      },
    ],
    facilityInfo: {
      name: "MuscalarPro Biotech Facility",
      location: "Bengaluru, KA, India",
      certificateNo: "LIC No: 10023064000123",
      validThrough: "Valid Through: Dec 2026",
    },
    footerQuote:
      "“Regulatory compliance is not the goal; it is the absolute minimum requirement before we begin our own internal validation.”",
    actionButton: {
      label: "CHECK FSSAI REGISTRY",
      url: "#",
    },
  },
  {
    id: "gmp",
    title: "GMP Audited",
    icon: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/GMP.png?v=1776938901",
    detailTitle: "GMP Certified Facility",
    detailSubtitle:
      "Good Manufacturing Practices — ensuring consistent quality where it matters most.",
    sections: [
      {
        title: "WHAT GMP IS",
        content:
          "GMP (Good Manufacturing Practice) is a system for ensuring that products are consistently produced and controlled according to quality standards. It is designed to minimize the risks involved in any pharmaceutical or supplement production that cannot be eliminated through testing the final product.",
      },
      {
        title: "WHAT THE AUDIT COVERS",
        content: [
          "Detailed record-keeping of every ingredient batch.",
          "Equipment calibration and sanitation schedules.",
          "Staff training and procedural consistency.",
          "Environmental control (temperature, humidity, air filtration).",
        ],
      },
    ],
    facilityInfo: {
      name: "ISO 22000 Certified Plant",
      location: "Hyderabad, TS, India",
      certificateNo: "GMP-CERT: 2024-9981",
      validThrough: "Recertified: Jan 2024",
    },
    footerQuote:
      "“Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction, and skillful execution.”",
    actionButton: {
      label: "VIEW GMP STANDARDS",
      url: "#",
    },
  },
  {
    id: "fda",
    title: "FDA GRAS Safety",
    icon: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/FDA..png?v=1776938901",
    detailTitle: "FDA GRAS Safety Designation",
    detailSubtitle:
      "Generally Recognized As Safe — the gold standard for ingredient toxicology.",
    sections: [
      {
        title: "THE GRAS STANDARD",
        content:
          'An ingredient is "GRAS" only when an independent panel of qualified experts (toxicologists, pharmacologists) reviews all scientific evidence and concludes the substance is safe under the conditions of its intended use.',
      },
      {
        title: "UROLITHIN A SPECIFICITY (GRN NO. 791)",
        content: [
          "Passed comprehensive 90-day subchronic toxicity studies.",
          "Verified non-genotoxic (does not damage DNA).",
          "Safe for long-term daily consumption at M3 dosages.",
          "Recognized as safe by the US Food & Drug Administration.",
        ],
      },
    ],
    footerQuote:
      '“Safety is the first pillar of longevity. We do not use molecules that are merely "legal"; we use those that are proven safe through rigorous toxicology.”',
    actionButton: {
      label: "READ FDA GRN 791",
      url: "#",
    },
  },
  {
    id: "nsf",
    title: "NSF Sport",
    icon: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/Gemini_Generated_Image_w80tjew80tjew80t_2.png?v=1776864428",
    detailTitle: "NSF Certified for Sport®",
    detailSubtitle:
      "The athletic gold standard — every batch screened against 290+ banned substances.",
    sections: [
      {
        title: "WHAT NSF CERTIFIED FOR SPORT IS",
        content:
          "NSF International is a U.S.-based public health and safety organization. Their Certified for Sport® program is the most trusted independent certification for dietary supplements used by professional and competitive athletes. Certified products are screened for substances banned by the World Anti-Doping Agency (WADA) and by major professional leagues worldwide — including the NFL, MLB, NBA, NHL, PGA, and LPGA.",
      },
      {
        title: "WHAT GETS TESTED EVERY BATCH",
        content: [
          "Over 290 substances banned by WADA and major sports organizations",
          "Steroids, stimulants, masking agents, diuretics",
          "Label claim verification — the dose on the bottle is the dose in the capsule",
          "Contaminant screening: heavy metals, pesticides, microbial load",
          "Toxicological review of every ingredient and excipient",
        ],
      },
      {
        title: "WHY THIS MATTERS IF YOU’RE NOT AN ATHLETE",
        content:
          "Most supplement certifications test once — usually at the point of initial approval — and never retest subsequent batches. NSF Certified for Sport tests every batch before it ships. If you aren’t a competitive athlete, you still benefit from the strictest per-batch screening standard available to any dietary supplement sold anywhere in the world.",
      },
    ],
    actionButton: {
      label: "NSF CERTIFIED PRODUCTS LISTING",
      url: "#",
    },
  },
  {
    id: "trial",
    title: "M3 Clinical Trial",
    icon: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/CLINICAL.png?v=1776938901",
    detailTitle: "Placebo-Controlled Clinical Trial",
    detailSubtitle:
      "Evidence that works independent of belief — the only supplement test that actually matters.",
    sections: [
      {
        title: "WHAT PLACEBO-CONTROLLED MEANS",
        content:
          "In a placebo-controlled trial, participants are randomly assigned to receive either the active treatment or an identical-looking inactive capsule (the placebo). Neither participants nor researchers know who got which until the trial ends. This design is only way to prove an effect comes from the molecule itself — not from expectation, natural variation, or the lifestyle changes that typically accompany any new health intervention.",
      },
      {
        title: "THE M3 TRIAL",
        content:
          "Singh et al. 2022, published in Cell Reports Medicine, was a 16-week randomized, double-blind, placebo-controlled trial of Urolithin A supplementation in adults aged 40 to 65. Participants were randomized to either 500 mg Urolithin A daily, 1,000 mg Urolithin A daily (the M3 dose), or matching placebo.",
      },
      {
        title: "PRIMARY CLINICAL OUTCOMES AT 16 WEEKS",
        content: [
          "+12% hamstring muscle strength in the 1,000 mg arm vs placebo",
          "+41% skeletal muscle endurance (contractions-to-fatigue)",
          "–40% C-reactive protein, a systemic inflammation marker",
          "Improvements in mitochondrial biomarkers (acylcarnitines, ceramides)",
        ],
      },
      {
        title: "WHY THIS MATTERS",
        content:
          "Most supplements rely on mechanism claims — ‘this molecule does X in a petri dish, so it should do Y in your body.’ Placebo-controlled human evidence is the only way to verify that mechanism actually translates to measurable outcomes in people. Urolithin A is one of a small handful of longevity molecules with human evidence at this level of rigour.",
        quote:
          "Approximately 15–20% of participants in Urolithin A trials do not show measurable response — partly because roughly 40% of adults already produce Urolithin A endogenously from dietary ellagitannins in foods like pomegranate, walnuts, and berries. For this subgroup, the incremental benefit of supplementation is smaller.",
      },
    ],
    trialSummary: {
      length: "16 weeks",
      design: "Double-blind, randomized, placebo-controlled",
      participants: "88 adults, aged 40–65",
      arms: "500 mg, 1,000 mg, placebo",
      citation: "Cell Rep Med. 2022;3(5):100633",
    },
    actionButton: {
      label: "SINGH ET AL. CELL REPORTS MEDICINE 2022",
      url: "#",
    },
  },
  {
    id: "thirdparty",
    title: "3rd Party Tested",
    icon: "https://cdn.shopify.com/s/files/1/0732/2556/8425/files/3RD_PARTY.png?v=1776938900",
    detailTitle: "Third-Party Tested per Batch",
    detailSubtitle:
      "Every batch, tested by labs we don’t own — and can’t influence.",
    sections: [
      {
        title: "WHAT WE TEST EVERY BATCH",
        content: [
          "Heavy metals: lead, arsenic, cadmium, mercury (via ICP-MS)",
          "Pesticide residues across 290+ individual compounds",
          "Microbial load: total aerobic count, yeast, mold, E. coli, Salmonella",
          "Active ingredient potency: Urolithin A 1,000mg, Spermidine 6mg, S-Allyl Cysteine 1mg per capsule",
          "Stability testing across full shelf life (24 months)",
        ],
      },
      {
        title: "WHICH LABS WE USE",
        content:
          "Independent laboratories accredited by NABL (India) and ISO/IEC 17025 (international). We rotate between multiple labs across batches to prevent any single lab relationship from biasing results.",
        quote:
          "We don’t disclose which labs tested which batch in advance. This prevents gaming. You see the results after they’re in.",
      },
      {
        title: "VERIFY YOUR SPECIFIC BATCH",
        content:
          "Every M3 bottle carries a unique batch number printed near the expiry date. Email us that batch number and we’ll send back the full Certificate of Analysis — the actual raw results for your specific bottle, not a generic marketing PDF.",
        actionButton: {
          label: "REQUEST MY BATCH COA",
          url: "#",
        },
      },
      {
        title: "WHY “EVERY BATCH” IS THE WORD THAT MATTERS",
        content:
          "Most supplement brands test their product once — usually to secure a certification mark — then skip re-testing subsequent production. Per-batch testing means every bottle you receive has its own verifiable chain of evidence. If a batch fails any threshold, that batch doesn’t ship. Full stop.",
      },
    ],
  },
];
