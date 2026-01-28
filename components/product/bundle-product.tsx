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
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/Bundle_8d20e67c-a53a-41af-bcef-203c32f6bd1a.png?v=1769576578"
                alt="DS-01 Daily Synbiotic and DM-02 Daily Multivitamin bundle"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="mb-1 text-sm font-semibold text-[#610e7d]">
            Bundle 12-week subscription + Save 25%
          </h3>
          <p className="mb-2 text-xs text-[#610e7d]">
            Muscle is the ultimate organ for longevity—your decode for peak
            human OS.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-[#610e7d]">
                $67.48
              </span>
              <span className="text-xs text-gray-500 line-through">$89.98</span>
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
