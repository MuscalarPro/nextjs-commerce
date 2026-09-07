export type SubscriptionOption = {
  months: number;
  label: string;
  sub: string;
  badge: string | null;
  /** Per-month price displayed prominently (e.g. "₹2,959/mo") */
  priceInr: string;
  /** MRP × months — the higher strikethrough (e.g. "₹12,000") */
  mrpTotal?: string;
  /** Offer price × months — the second strikethrough (e.g. "₹7,398") */
  offerTotal?: string;
  /** Final discounted total the customer pays (e.g. "₹5,918") */
  discountedTotal?: string;
};

// Pricing model (keep in sync with the Shopify product price):
//   base sale price = ₹3,699 · MRP (compare-at) = ₹6,000
//   mrpTotal        = MRP × months
//   offerTotal      = sale × months
//   discountedTotal = offerTotal × (1 − subscribe discount), rounded
//   priceInr        = discountedTotal ÷ months, rounded
export const subscriptionOptionsData: SubscriptionOption[] = [
  {
    months: 1,
    label: "1-month supply",
    sub: "Save 10%",
    badge: null,
    priceInr: "₹3,329/mo",
    mrpTotal: "₹6,000",
    offerTotal: "₹3,699",
    discountedTotal: "₹3,329",
  },
  {
    months: 2,
    label: "2-month supply",
    sub: "Save 20%",
    badge: null,
    priceInr: "₹2,959/mo",
    mrpTotal: "₹12,000",
    offerTotal: "₹7,398",
    discountedTotal: "₹5,918",
  },
  {
    months: 4,
    label: "4-month supply",
    sub: "Save 25%",
    badge: "Clinically Recommended",
    priceInr: "₹2,774/mo",
    mrpTotal: "₹24,000",
    offerTotal: "₹14,796",
    discountedTotal: "₹11,097",
  },
  {
    months: 12,
    label: "12-month supply",
    sub: "Save 30%",
    badge: "Best Value",
    priceInr: "₹2,589/mo",
    mrpTotal: "₹72,000",
    offerTotal: "₹44,388",
    discountedTotal: "₹31,072",
  },
];
