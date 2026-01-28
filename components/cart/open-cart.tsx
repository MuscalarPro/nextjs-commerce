export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center justify-center rounded-full bg-white px-4 py-2 transition-colors hover:bg-neutral-100">
      <span className="text-black font-sans font-medium">Cart</span>
      {quantity ? (
        <sup className="text-black font-sans font-medium ml-1 text-sm">
          {quantity}
        </sup>
      ) : null}
    </div>
  );
}
