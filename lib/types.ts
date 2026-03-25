export type Patent = {
  id: string;
  number: string;
  title: string;
  filingDate: string;
  status: string;
  abstract: string;
};

export type Study = {
  id: string;
  year: string;
  journal: string;
  title: string;
  summary: string;
  label: string;
  authors: string;
  pubmedUrl: string;
  category:
    | "Urolithin A"
    | "Spermidine"
    | "S-Allyl Cysteine"
    | "Amino 9 / EAA + HMB";
};
