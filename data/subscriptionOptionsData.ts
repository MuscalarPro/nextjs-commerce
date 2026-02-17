export type SubscriptionOption = {
  months: number;
  label: string;
  sub: string;
  badge: string | null;
  priceInr: string;
  /** Original total before discount (e.g. "₹3,000") */
  originalTotal?: string;
  /** Discounted total (e.g. "₹2,700") */
  discountedTotal?: string;
};

export const subscriptionOptionsData: SubscriptionOption[] = [
  {
    months: 1,
    label: "1-month supply",
    sub: "Save 10%",
    badge: null,
    priceInr: "₹6,000/mo",
    originalTotal: "₹6,667",
    discountedTotal: "₹6,000",
  },
  {
    months: 2,
    label: "2-month supply",
    sub: "Save 20%",
    badge: null,
    priceInr: "₹5,334/mo",
    originalTotal: "₹13,334",
    discountedTotal: "₹10,668",
  },
  {
    months: 4,
    label: "4-month supply",
    sub: "Save 24%",
    badge: "Clinically Recommended",
    priceInr: "₹5,067/mo",
    originalTotal: "₹26,668",
    discountedTotal: "₹20,268",
  },
  {
    months: 12,
    label: "12-month supply",
    sub: "Save 32%",
    badge: "Best Value",
    priceInr: "₹4,534/mo",
    originalTotal: "₹80,004",
    discountedTotal: "₹54,408",
  },
];
