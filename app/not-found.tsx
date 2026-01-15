import Footer from "components/layout/footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-4 py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h1 className="mb-4 text-9xl font-bold text-black">404</h1>
          <div className="mb-8 h-px w-24 bg-neutral-300"></div>
          <h2 className="mb-4 text-2xl font-semibold text-black">
            This page could not be found.
          </h2>
          <p className="mb-8 text-neutral-600">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Go back home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
