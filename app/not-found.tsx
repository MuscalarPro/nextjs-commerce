import Link from "next/link";
import Footer from "components/layout/footer";

export default function NotFound() {
  return (
    <>
      <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12">
        <h2 className="text-xl font-bold">404 - Page Not Found</h2>
        <p className="my-2">
          Sorry, we couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>
        <Link
          href="/"
          className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
        >
          Go back home
        </Link>
      </div>
      <Footer />
    </>
  );
}
