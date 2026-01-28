export function TwoCapsule() {
  return (
    <div className="rounded-2xl bg-[#f4fbef] px-4 py-3">
      <div className="flex items-center gap-4">
        {/* Capsules image */}
        <div className="flex-shrink-0">
          <div className="relative flex gap-1">
            <div className="h-24 w-16">
              <img
                src="https://cdn.shopify.com/s/files/1/0668/1486/9571/files/white-capsule-mockup-clean-minimalist-design-pharmaceutical-supplement-branding.png?v=1769603226"
                alt="Capsule"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-left">
          <p className="mb-1 text-xl font-semibold text-[#1f4b2c]">
            How to Use:
          </p>
          <p className="text-base leading-snug text-[#1f4b2c]">
            Take 2 capsules daily, with or without food, day or night.
          </p>
        </div>
      </div>
    </div>
  );
}
