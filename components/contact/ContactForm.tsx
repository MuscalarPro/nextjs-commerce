"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isDisabled = status === "submitting" || status === "success";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isDisabled) return;
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        if (res.status === 429) {
          throw new Error("Too many attempts. Please try again in a minute.");
        }
        if (body?.error) {
          throw new Error(body.error);
        }
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      aria-label="Contact form"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id="contact-name"
          label="Name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={setName}
          disabled={isDisabled}
          required
          maxLength={120}
        />
        <Field
          id="contact-email"
          label="Email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={setEmail}
          disabled={isDisabled}
          required
          maxLength={254}
        />
      </div>

      <Field
        id="contact-subject"
        label="Subject"
        type="text"
        value={subject}
        onChange={setSubject}
        disabled={isDisabled}
        required
        maxLength={200}
      />

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-black"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isDisabled}
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-400 transition-colors focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:opacity-60"
          placeholder="How can we help?"
        />
        <p className="text-xs text-neutral-400 text-right" aria-live="polite">
          {message.length}/5000
        </p>
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className="mt-2 inline-flex items-center justify-center self-start rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting"
          ? "Sending…"
          : status === "success"
            ? "Sent — thank you!"
            : "Send message"}
      </button>

      <p
        aria-live="polite"
        className={`min-h-[1.25rem] text-sm ${
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
            ? "We've received your message and will get back to you within 1 business day."
            : "placeholder"}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  value,
  onChange,
  disabled,
  required,
  maxLength,
  autoComplete,
}: {
  id: string;
  label: string;
  type: "text" | "email";
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-black">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder:text-neutral-400 transition-colors focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 disabled:opacity-60"
      />
    </div>
  );
}
