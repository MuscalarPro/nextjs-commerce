export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center justify-center rounded-full bg-amber-50 px-4 py-2 transition-colors hover:bg-amber-100">
      <span className="text-green-800 font-sans font-medium">Cart</span>
      {quantity ? (
        <sup className="text-green-800 font-sans font-medium ml-1 text-sm">
          {quantity}
        </sup>
      ) : null}
    </div>
  );
}
