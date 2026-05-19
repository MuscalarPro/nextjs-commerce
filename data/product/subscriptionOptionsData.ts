export type SubscriptionOption = {
  months: number;
  label: string;
  sub: string;
  badge: string | null;
  /** Per-month price displayed prominently (e.g. "₹4,319/mo") */
  priceInr: string;
  /** MRP × months — the higher strikethrough (e.g. "₹11,998") */
  mrpTotal?: string;
  /** Offer price × months — the second strikethrough (e.g. "₹9,598") */
  offerTotal?: string;
  /** Final discounted total the customer pays (e.g. "₹7,679") */
  discountedTotal?: string;
};

export const subscriptionOptionsData: SubscriptionOption[] = [
  {
    months: 1,
    label: "1-month supply",
    sub: "Save 10%",
    badge: null,
    priceInr: "₹4,319/mo",
    mrpTotal: "₹5,999",
    offerTotal: "₹4,799",
    discountedTotal: "₹4,319",
  },
  {
    months: 2,
    label: "2-month supply",
    sub: "Save 20%",
    badge: null,
    priceInr: "₹3,839/mo",
    mrpTotal: "₹11,998",
    offerTotal: "₹9,598",
    discountedTotal: "₹7,679",
  },
  {
    months: 4,
    label: "4-month supply",
    sub: "Save 25%",
    badge: "Clinically Recommended",
    priceInr: "₹3,599/mo",
    mrpTotal: "₹23,996",
    offerTotal: "₹19,196",
    discountedTotal: "₹14,398",
  },
  {
    months: 12,
    label: "12-month supply",
    sub: "Save 30%",
    badge: "Best Value",
    priceInr: "₹3,359/mo",
    mrpTotal: "₹71,988",
    offerTotal: "₹57,588",
    discountedTotal: "₹40,313",
  },
];
