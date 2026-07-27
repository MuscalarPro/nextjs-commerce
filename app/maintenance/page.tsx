import Image from "next/image";

const { SITE_NAME, LOGO_WHITE_URL } = process.env;

export const metadata = {
  title: "Maintenance",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      {LOGO_WHITE_URL ? (
        <Image
          src={LOGO_WHITE_URL}
          alt={SITE_NAME || "Logo"}
          width={180}
          height={36}
          className="mb-10 h-8 w-auto object-contain"
          priority
        />
      ) : null}
      <p className="max-w-md text-balance text-[1.125rem] leading-relaxed text-white/90 md:text-[1.25rem]">
        This website is in maintenance mode; please visit us later. Thank you
        for your patience.
      </p>
    </div>
  );
}
