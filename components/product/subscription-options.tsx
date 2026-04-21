import { ArrowPathIcon, PauseIcon } from "@heroicons/react/24/outline";
import { subscriptionOptionsData } from "data/product/subscriptionOptionsData";

export function SubscriptionOptions({
  selectedIndex,
  onSelect,
}: {
  selectedIndex: number;
  onSelect: (index: number) => void;
}) {
  const options = subscriptionOptionsData;

  return (
    <div className="mb-4 space-y-3">
      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = index === selectedIndex;

          return (
            <button
              key={option.label}
              type="button"
              onClick={() => onSelect(index)}
              className={`relative flex w-full flex-col gap-2 rounded-2xl border px-4 py-4 text-left text-sm transition-all ${
                isSelected
                  ? "border-black bg-white ring-1 ring-black"
                  : "border-neutral-200 bg-white hover:border-neutral-300"
              }`}
            >
              {/* Badge */}
              {option.badge && (
                <span className="absolute right-3 top-0 translate-y-[-50%] rounded-lg bg-black px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                  {option.badge}
                </span>
              )}

              <div className="flex items-center justify-between gap-3">
                {/* Radio + text */}
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    isSelected ? "border-black" : "border-neutral-300"
                  }`}
                >
                  {isSelected && (
                    <span className="h-3 w-3 rounded-full bg-black" />
                  )}
                </span>
                <div className="ml-2">
                  <p className="text-base font-sans font-medium text-black">
                    {option.label}
                  </p>
                  <p className="text-sm font-sans font-medium text-[#B64040]">
                    {option.sub}
                  </p>
                </div>
                {/* Price aligned right */}
                <div className="ml-auto text-right">
                  <p className="text-base font-medium text-black">
                    {option.priceInr}
                  </p>
                  {option.originalTotal != null &&
                    option.discountedTotal != null && (
                      <p className="mt-0.5 text-xs text-neutral-500">
                        <span className="line-through mr-1">
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
                <div className="mt-4 border-t border-neutral-100 pt-4 text-xs text-neutral-500">
                  <p className="mb-2 flex items-center gap-2">
                    <ArrowPathIcon className="h-4 w-4 shrink-0 text-neutral-400" />
                    {option.months}‑month supply delivered every {option.months}{" "}
                    months.
                  </p>
                  <p className="flex items-center gap-2">
                    <PauseIcon className="h-4 w-4 shrink-0 text-neutral-400" />
                    Pause or cancel at any time.
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
