"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/klaviyo/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "Footer Newsletter" }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        if (res.status === 429) {
          throw new Error("Too many attempts. Try again in a minute.");
        }
        if (body?.code === "invalid_email") {
          throw new Error("Please enter a valid email address.");
        }
        // Anything else (Klaviyo downstream error, 5xx, etc.)
        console.error("Newsletter subscribe failed:", body);
        throw new Error("Couldn't subscribe right now. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const isDisabled = status === "submitting" || status === "success";

  return (
    <div className="flex flex-col gap-2">
      <form
        onSubmit={handleSubmit}
        className="group flex w-full items-center gap-2 rounded border border-black bg-transparent px-4 py-2 transition-colors focus-within:bg-black/5 md:w-auto md:min-w-[360px]"
        aria-label="Newsletter signup"
      >
        <label htmlFor="footer-newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isDisabled}
          placeholder={
            status === "success"
              ? "Subscribed — thank you!"
              : "Enter your email"
          }
          className="flex-1 min-w-0 bg-transparent px-2 py-1 font-sans text-sm text-black placeholder:text-neutral-500 focus:outline-none disabled:opacity-70"
        />
        <button
          type="submit"
          disabled={isDisabled}
          aria-label={
            status === "submitting"
              ? "Submitting"
              : status === "success"
                ? "Subscribed"
                : "Subscribe to newsletter"
          }
          className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black transition-colors hover:bg-black hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-black"
        >
          {status === "submitting" ? (
            <span
              className="h-2.5 w-2.5 animate-spin rounded-full border border-current border-t-transparent"
              aria-hidden="true"
            />
          ) : (
            <ArrowRightIcon className="h-3 w-3" />
          )}
        </button>
      </form>

      <p
        aria-live="polite"
        className={`min-h-[1.25rem] text-xs ${
          status === "error"
            ? "text-red-600"
            : status === "success"
              ? "text-green-700"
              : "text-transparent"
        }`}
      >
        {status === "error"
          ? errorMessage
          : status === "success"
            ? "You're on the list."
            : "placeholder"}
      </p>
    </div>
  );
}
