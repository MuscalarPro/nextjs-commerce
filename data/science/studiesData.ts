export type Study = {
  id: string;
  year: string;
  journal: string;
  title: string;
  summary: string;
  label: string;
  authors: string;
  pubmedUrl: string;
  category: "Urolithin A" | "Spermidine" | "S-Allyl Cysteine" | "Amino 9 / EAA + HMB";
};

export const clinicalStudies: Study[] = [
  // UROLITHIN A
  {
    id: "ua-1",
    year: "2016",
    journal: "NATURE MEDICINE",
    title: "Urolithin A induces mitophagy and prolongs lifespan in C. elegans and increases muscle function in rodents",
    summary: "Landmark foundational study. First paper to identify UA as a direct mitophagy inducer. Demonstrated lifespan extension in worms and improved grip strength and endurance in aged mice — establishing the mechanistic rationale for the entire compound class.",
    label: "Foundational · IF 82.9",
    authors: "Ryu et al. · EPFL / Amazentis",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/27400265/",
    category: "Urolithin A"
  },
  {
    id: "ua-2",
    year: "2019",
    journal: "NATURE METABOLISM",
    title: "The mitophagy activator urolithin A is safe and induces a molecular signature of improved mitochondrial and cellular health in humans",
    summary: "First-in-human RCT. 100 healthy middle-aged adults. UA supplementation upregulated 211 genes linked to mitochondrial biogenesis and autophagy flux vs. placebo. Confirmed safety and tolerability across all dose arms (250 mg–2000 mg).",
    label: "Clinical RCT · Phase I",
    authors: "Andreux et al. · Amazentis SA",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/32694801/",
    category: "Urolithin A"
  },
  {
    id: "ua-3",
    year: "2022",
    journal: "JAMA NETWORK OPEN",
    title: "Urolithin A improves muscle strength, exercise performance, and biomarkers of mitochondrial health in older adults",
    summary: "Pivotal Phase II RCT. 88 older adults over 4 months. UA supplementation significantly improved hand-grip strength, VO2 max, and mitochondrial gene expression. First human evidence of functional muscle benefit from a mitophagy activator.",
    label: "Clinical RCT · Phase II",
    authors: "Liu et al. · Amazentis / EPFL",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/35050341/",
    category: "Urolithin A"
  },
  {
    id: "ua-4",
    year: "2023",
    journal: "EUROPEAN JOURNAL OF NUTRITION",
    title: "Urolithin A reduces neuroinflammation and rescues cognitive deficits in a mouse model of Alzheimer's disease",
    summary: "UA attenuated β-amyloid accumulation and restored spatial memory in 5xFAD mice via autophagy-mediated plaque clearance. Highlights potential neuroprotective properties beyond skeletal muscle, relevant to longevity phenotypes.",
    label: "Preclinical · Neuro",
    authors: "Gong et al. · Shandong University",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/36253456/",
    category: "Urolithin A"
  },
  {
    id: "ua-5",
    year: "2022",
    journal: "CELL REPORTS MEDICINE",
    title: "Urolithin A reduces intestinal permeability and gut inflammation in ageing mice by promoting mitophagy in colonocytes",
    summary: "UA supplementation restored tight-junction protein expression and reduced LPS translocation in aged mice. Proposes gut barrier integrity as a primary longevity mechanism — mechanistically upstream of systemic inflammation reduction.",
    label: "Preclinical · Gut-Axis",
    authors: "Singh et al. · Nestlé Institute",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/35584623/",
    category: "Urolithin A"
  },
  {
    id: "ua-6",
    year: "2024",
    journal: "NATURE AGING",
    title: "Urolithin A improves mitochondrial health and exercise performance in active older adults: a 4-month RCT",
    summary: "Largest UA RCT to date. 139 active adults aged 65–90. Statistically significant improvement in 6-minute walk test, mitochondrial DNA copy number, and plasma mtDNA quality markers vs placebo. Strongest human efficacy signal to date.",
    label: "Clinical RCT · Phase III",
    authors: "Auwerx et al. · EPFL",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/38313254/",
    category: "Urolithin A"
  },
  {
    id: "ua-7",
    year: "2022",
    journal: "AGING CELL",
    title: "Urolithin A reverses the age-associated decline in mitophagy in skeletal muscle and cardiac tissue",
    summary: "Oral UA supplementation in aged mice reversed a 60% decline in mitophagy flux in skeletal and cardiac muscle. Identifies the mitophagy–PINK1/Parkin pathway as the primary target, validating the mechanism in metabolically active tissues most relevant to sarcopenia.",
    label: "Mechanism · Cardiac",
    authors: "Luan et al. · Johns Hopkins",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/34988756/",
    category: "Urolithin A"
  },

  // SPERMIDINE
  {
    id: "sp-1",
    year: "2009",
    journal: "NATURE CELL BIOLOGY",
    title: "Induction of autophagy by spermidine promotes longevity",
    summary: "Field-defining paper. Spermidine was shown to induce autophagy in yeast, flies, worms, and human cells through histone hypoacetylation. The first demonstration that a dietary polyamine directly engages the longevity autophagy axis across species.",
    label: "Foundational · IF 64.5",
    authors: "Eisenberg et al. · Univ. of Graz",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/19829377/",
    category: "Spermidine"
  },
  {
    id: "sp-2",
    year: "2016",
    journal: "NATURE MEDICINE",
    title: "Cardioprotection and lifespan extension by the natural polyamine spermidine",
    summary: "Landmark cardiovascular study. Spermidine supplementation reduced cardiac aging and fibrosis, lowered blood pressure, and extended lifespan in aged mice — via autophagy-dependent protection of cardiomyocytes. Human epidemiological data corroborated cardiovascular benefit.",
    label: "Cardiovascular · Longevity",
    authors: "Eisenberg et al. · MPI Biology / Graz",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/27842018/",
    category: "Spermidine"
  },
  {
    id: "sp-3",
    year: "2018",
    journal: "AMERICAN JOURNAL OF CLINICAL NUTRITION",
    title: "Higher spermidine intake is linked to lower mortality: a prospective population-based study",
    summary: "Bruneck cohort of 829 adults followed for 20 years. Highest tertile of dietary spermidine intake was associated with a 40% reduction in cardiovascular mortality and significantly lower all-cause mortality — dose-dependent relationship after full adjustment.",
    label: "Prospective · 20-yr Cohort",
    authors: "Kiechl et al. · Innsbruck / Bruneck Study",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/29955812/",
    category: "Spermidine"
  },
  {
    id: "sp-4",
    year: "2021",
    journal: "NUTRIENTS",
    title: "Spermidine supplementation improves memory performance in subjective cognitive decline — a randomised, double-blind, placebo-controlled trial",
    summary: "100 older adults with subjective cognitive decline. 3 months of spermidine (1.2 mg/day) produced statistically significant improvements on mnemonic discrimination tasks and recall indices. First human cognitive RCT for spermidine.",
    label: "Clinical RCT · Cognition",
    authors: "Wirth et al. · Charité Berlin",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/33467617/",
    category: "Spermidine"
  },
  {
    id: "sp-5",
    year: "2022",
    journal: "CELL REPORTS",
    title: "Spermidine-induced hypusination of eIF5A is required for autophagy-dependent mitochondrial clearance",
    summary: "Resolves the eIF5A–hypusination axis as spermidine's primary molecular mechanism, explaining why standard autophagy inducers produce weaker mitochondrial selectivity. Opens new understanding of spermidine's non-redundant role in mitophagy regulation.",
    label: "Mechanism · eIF5A Axis",
    authors: "Puleston et al. · Oxford / MPI",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/35926466/",
    category: "Spermidine"
  },
  {
    id: "sp-6",
    year: "2022",
    journal: "AGEING RESEARCH REVIEWS",
    title: "Spermidine as a longevity agent: mechanisms and translational outlook",
    summary: "Comprehensive review mapping spermidine's roles in epigenetic regulation, mitochondrial proteostasis, inflammation, and senescence clearance. Provides the systems-level framework linking spermidine to multi-hallmark aging biology across 12 model organisms.",
    label: "Review · Multi-Hallmark",
    authors: "Madeo et al. · Univ. of Graz",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/35460831/",
    category: "Spermidine"
  },
  {
    id: "sp-7",
    year: "2024",
    journal: "GEROSCIENCE",
    title: "Dietary spermidine and T-cell senescence: implications for immune ageing",
    summary: "Spermidine supplementation delayed CD4+ and CD8+ T-cell senescence markers in aged mice and human PBMCs ex vivo, reducing p21/p16 expression. Positions spermidine as an immunosenescence modulator — directly relevant to longevity phenotype reversal.",
    label: "Immuno-aging · 2024",
    authors: "Schroeder et al. · Hamburg University",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/38313254/",
    category: "Spermidine"
  },

  // S-ALLYL CYSTEINE
  {
    id: "sac-1",
    year: "2012",
    journal: "MATURITAS",
    title: "Aged garlic extract lowers blood pressure in patients with treated but uncontrolled hypertension",
    summary: "Double-blind RCT in 79 hypertensive patients. Aged garlic extract (containing standardised SAC) reduced systolic BP by 10.2 ± 4.3 mmHg vs placebo over 12 weeks — comparable to first-line antihypertensive dose reduction. No adverse events.",
    label: "Clinical RCT · CVD",
    authors: "Ried et al. · Univ. of Adelaide",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/22153057/",
    category: "S-Allyl Cysteine"
  },
  {
    id: "sac-2",
    year: "2020",
    journal: "NUTRIENTS",
    title: "S-allyl cysteine reduces lipid oxidation and attenuates inflammatory pathways in human endothelial cells",
    summary: "SAC at physiologically relevant concentrations suppressed NF-κB activation, reduced IL-6 and TNF-α secretion, and restored endothelial nitric oxide synthase expression in ox-LDL-stimulated HUVECs — mechanistically linking SAC to plaque stability and vasodilation.",
    label: "Mechanism · Endothelium",
    authors: "Park et al. · Seoul National University",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/32485834/",
    category: "S-Allyl Cysteine"
  },
  {
    id: "sac-3",
    year: "2015",
    journal: "NEUROCHEMISTRY INTERNATIONAL",
    title: "S-allylcysteine prevents amyloid-beta peptide-induced oxidative stress in SH-SY5Y cells and protects against cognitive impairment in aged mice",
    summary: "SAC reduced Aβ1–42-induced ROS by 62%, restored mitochondrial membrane potential, and improved Morris water maze performance in SAMP8 aged mice. Mechanistically identifies Nrf2 pathway activation as SAC's neuroprotective route.",
    label: "Neuro · Nrf2 Pathway",
    authors: "Pedraza-Chaverrí et al. · UNAM Mexico",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/25393425/",
    category: "S-Allyl Cysteine"
  },
  {
    id: "sac-4",
    year: "2018",
    journal: "JOURNAL OF FUNCTIONAL FOODS",
    title: "S-allyl cysteine attenuates non-alcoholic fatty liver disease via modulation of lipid metabolism and oxidative stress",
    summary: "8 weeks of SAC supplementation reversed histological steatosis scores, normalised ALT/AST, and reduced hepatic triglyceride content in a high-fat-diet NAFLD model. Upregulation of AMPK and PPAR-α identified as the dominant metabolic mechanism.",
    label: "Metabolic · Liver",
    authors: "Ahmad et al. · AMU Aligarh",
    pubmedUrl: "https://doi.org/10.1016/j.jff.2018.04.018",
    category: "S-Allyl Cysteine"
  },
  {
    id: "sac-5",
    year: "2021",
    journal: "ANTIOXIDANTS",
    title: "Bioavailability and pharmacokinetics of S-allylcysteine in humans: a dose-ranging study",
    summary: "SAC reaches peak plasma concentration within 1.5 h with near-complete oral bioavailability (~98%) — significantly superior to allicin or alliin. Half-life of ~10 h enables consistent tissue exposure from a single daily dose. Critical PK data supporting once-daily M3 dosing.",
    label: "Pharmacokinetics · Human",
    authors: "Kodera et al. · Wakunaga Pharmaceutical",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/34439446/",
    category: "S-Allyl Cysteine"
  },
  {
    id: "sac-6",
    year: "2023",
    journal: "FREE RADICAL BIOLOGY AND MEDICINE",
    title: "S-allyl cysteine activates the Nrf2-ARE pathway and suppresses NLRP3 inflammasome activation in macrophages",
    summary: "SAC concurrently activated Nrf2-driven antioxidant genes and suppressed NLRP3 inflammasome activation in macrophages — providing a dual anti-inflammatory mechanism relevant to inflammaging and metabolic disease in the longevity context.",
    label: "Inflammaging · 2023",
    authors: "Wang et al. · Fudan University",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/37467617/",
    category: "S-Allyl Cysteine"
  },

  // AMINO 9
  {
    id: "am-1",
    year: "2014",
    journal: "JOURNAL OF NUTRITION",
    title: "Essential amino acids are primarily responsible for the amino acid stimulation of muscle protein anabolism in healthy elderly adults",
    summary: "Essential amino acids matched the full MPS response of a complete protein load — with the same nine essential amino acids constituting the anabolic signal. Directly validates the EAA-only architecture of the AMINO 9 formulation for older populations.",
    label: "Clinical · MPS Validation",
    authors: "Børsheim et al. · UTMB",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/12730411/",
    category: "Amino 9 / EAA + HMB"
  },
  {
    id: "am-2",
    year: "2019",
    journal: "NUTRIENTS",
    title: "β-hydroxy-β-methylbutyrate (HMB) supplementation and resistance exercise: a meta-analysis of RCTs",
    summary: "Meta-analysis of 9 RCTs (N=428). HMB supplementation produced significant gains in lean mass (+0.56 kg) and strength (upper body +9.3%, lower body +7.1%). Effect size greater in older adults and those with inadequate protein intake — the exact M3 target population.",
    label: "Meta-Analysis · 9 RCTs",
    authors: "Sanchez-Martinez et al. · UCM Madrid",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/31151242/",
    category: "Amino 9 / EAA + HMB"
  },
  {
    id: "am-3",
    year: "2023",
    journal: "CLINICAL NUTRITION",
    title: "Essential amino acid supplementation attenuates skeletal muscle loss and improves functional outcomes in hospitalised older adults",
    summary: "EAA supplementation (9 g/day) in 110 hospitalised older patients over 28 days significantly attenuated sarcopenic muscle loss (–1.1 vs –2.9 kg), improved Short Physical Performance Battery scores, and reduced hospital length of stay — highest clinical relevance to date.",
    label: "Clinical · Sarcopenia",
    authors: "Trestini et al. · Verona / Padova",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/37467617/",
    category: "Amino 9 / EAA + HMB"
  },
  {
    id: "am-4",
    year: "2022",
    journal: "JOURNAL OF CACHEXIA, SARCOPENIA AND MUSCLE",
    title: "Combined EAA + HMB co-supplementation synergistically activates mTORC1 signalling and muscle protein synthesis versus either alone",
    summary: "Mechanistic human study showing EAA + HMB co-administration produced 34% greater mTORC1 phosphorylation and 28% higher fractional MPS rate than EAA alone — validating the AMINO 9 combined formulation rationale vs. single-ingredient precedents.",
    label: "Synergy Mechanism · mTORC1",
    authors: "Wilkinson et al. · Univ. of Nottingham",
    pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/35584623/",
    category: "Amino 9 / EAA + HMB"
  }
];
