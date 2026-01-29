import { subscriptionOptionsData } from "data/subscriptionOptionsData";
import { useState } from "react";

export function SubscriptionOptions() {
  const [selectedIndex, setSelectedIndex] = useState(2);

  const options = subscriptionOptionsData;

  return (
    <div className="mb-4 space-y-3">
      <p className="text-sm font-semibold text-black">Subscribe &amp; Save</p>
      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = index === selectedIndex;

          return (
            <button
              key={option.label}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`relative flex w-full flex-col gap-2 rounded border px-4 py-3 text-left text-sm transition-colors ${
                isSelected
                  ? "border-black bg-white shadow-sm"
                  : "border-neutral-200 bg-white hover:border-neutral-300"
              }`}
            >
              {/* Badge */}
              {option.badge && (
                <span className="absolute right-3 top-0 translate-y-[-50%] rounded-full bg-neutral-900 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  {option.badge}
                </span>
              )}

              <div className="flex items-center justify-between gap-3">
                {/* Radio + text */}
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                    isSelected ? "border-black" : "border-neutral-400"
                  }`}
                >
                  {isSelected && (
                    <span className="h-2.5 w-2.5 rounded-full bg-black" />
                  )}
                </span>
                <div className="ml-2">
                  <p className="text-sm font-medium text-black">
                    {option.label}
                  </p>
                  <p className="text-xs font-medium text-[#B64040]">
                    {option.sub}
                  </p>
                </div>
                {/* Price aligned right */}
                <div className="ml-auto text-right">
                  <p className="text-sm font-medium text-black">
                    {option.priceInr}
                  </p>
                  {option.originalTotal != null &&
                    option.discountedTotal != null && (
                      <p className="mt-0.5 text-xs text-neutral-500">
                        <span className="line-through">
                          {option.originalTotal}
                        </span>{" "}
                        <span className="text-black font-medium">
                          {option.discountedTotal}
                        </span>
                      </p>
                    )}
                </div>
              </div>

              {/* Extra details only for selected option */}
              {isSelected && (
                <div className="mt-3 border-t border-neutral-200 pt-3 text-xs text-neutral-700">
                  <p className="mb-1">
                    🔄 {option.months}‑month supply delivered every{" "}
                    {option.months} months.
                  </p>
                  <p>⏸ Pause or cancel at any time.</p>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
