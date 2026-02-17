export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center justify-center rounded-full bg-[#a638b5] px-4 py-2 transition-colors hover:opacity-90">
      <span className="text-white font-sans font-medium">Cart</span>
      {quantity ? (
        <sup className="text-white font-sans font-medium ml-1 text-sm">
          {quantity}
        </sup>
      ) : null}
    </div>
  );
}
