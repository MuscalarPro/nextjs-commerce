"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function GiftInterestForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isDisabled = status === "submitting" || status === "success";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isDisabled) return;
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/klaviyo/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "Gift Interest" }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        if (res.status === 429) {
          throw new Error("Too many attempts. Try again in a minute.");
        }
        if (body?.code === "invalid_email") {
          throw new Error("Please enter a valid email address.");
        }
        throw new Error("Couldn't register your interest right now. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row"
        aria-label="Register interest in gifting"
      >
        <label htmlFor="gift-interest-email" className="sr-only">
          Email address
        </label>
        <input
          id="gift-interest-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isDisabled}
          placeholder={
            status === "success" ? "We'll be in touch — thank you!" : "Enter your email"
          }
          className="w-full flex-1 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm text-black placeholder:text-neutral-500 transition-colors focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:opacity-70"
        />
        <button
          type="submit"
          disabled={isDisabled}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "submitting"
            ? "Sending…"
            : status === "success"
              ? "Registered"
              : "Notify me"}
          {status !== "success" && (
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
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
            ? "We'll email you the moment gifting goes live."
            : "placeholder"}
      </p>
    </div>
  );
}
