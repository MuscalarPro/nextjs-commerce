"use client";

export function MusclespanLearnMoreButton() {
  const handleClick = () => {
    const event = new CustomEvent("openM3Delivery");
    window.dispatchEvent(event);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-white underline-offset-4 hover:underline"
    >
      Learn More
      <span aria-hidden="true" className="text-lg">
        →
      </span>
    </button>
  );
}

