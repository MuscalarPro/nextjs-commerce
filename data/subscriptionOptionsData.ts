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
    priceInr: "₹2,700/mo",
    originalTotal: "₹3,000",
    discountedTotal: "₹2,700",
  },
  {
    months: 2,
    label: "2-month supply",
    sub: "Save 20%",
    badge: null,
    priceInr: "₹2,400/mo",
    originalTotal: "₹6,000",
    discountedTotal: "₹4,800",
  },
  {
    months: 4,
    label: "4-month supply",
    sub: "Save 24%",
    badge: "Clinically recommended",
    priceInr: "₹2,280/mo",
    originalTotal: "₹12,000",
    discountedTotal: "₹9,120",
  },
  {
    months: 12,
    label: "12-month supply",
    sub: "Save 32%",
    badge: "Best value",
    priceInr: "₹2,040/mo",
    originalTotal: "₹36,000",
    discountedTotal: "₹24,480",
  },
];
