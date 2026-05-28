export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center justify-center rounded-full bg-white px-4 py-1.5 transition-colors hover:bg-neutral-200">
      <span className="font-sans text-sm font-semibold text-black">Cart</span>
      {quantity ? (
        <sup className="ml-1 font-sans text-xs font-semibold text-black">
          {quantity}
        </sup>
      ) : null}
    </div>
  );
}
