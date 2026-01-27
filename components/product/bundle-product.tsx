export function BundleProduct() {
  return (
    <div className="rounded-lg bg-[#D3B7E7]/20 p-2">
      <div className="flex items-center">
        {/* Product Images */}
        <div className="flex-shrink-0">
          <div className="relative flex items-end">
            {/* Larger jar (DS-01) - positioned behind and to the left */}
            <div className="relative h-20 w-24">
              <img
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Bundle.png?v=1768920360"
                alt="DS-01 Daily Synbiotic and DM-02 Daily Multivitamin bundle"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="mb-1 text-sm font-semibold text-[#610e7d]">
            Bundle + Save 25%
          </h3>
          <p className="mb-2 text-xs text-[#610e7d]">
            Add DM-02™ Daily Multivitamin to your routine and save on your
            first order.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-[#610e7d]">
                $67.48
              </span>
              <span className="text-xs text-gray-500 line-through">
                $89.98
              </span>
            </div>
            <button className="inline-flex items-center justify-center rounded-full border border-[#693979] px-6 py-2 text-sm font-medium text-[#610e7d] transition-colors hover:bg-[#693979] hover:text-white">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
