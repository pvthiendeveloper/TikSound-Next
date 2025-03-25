"use client";

import { submitToWaitlist } from "@/lib/waitlist";
import { useRef, useState } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (element: string | HTMLElement, options: any) => number;
      reset: (id?: number) => void;
    };
  }
}

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const recaptchaRef = useRef<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");
    setMessage("");

    try {
      await submitToWaitlist(email);

      setStatus("success");
      setMessage(
        "Thanks for joining our waitlist! Check your email for confirmation."
      );
      setEmail("");

      // Reset the captcha
      if (recaptchaRef.current !== null) {
        window.grecaptcha.reset(recaptchaRef.current);
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-pink-500/50 text-white"
            placeholder="you@example.com"
            disabled={status === "loading"}
          />
        </div>

        <div id="recaptcha-container" className="flex justify-center"></div>

        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium transition-all
            ${
              status === "loading"
                ? "opacity-70 cursor-not-allowed"
                : "hover:opacity-90"
            }`}
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Join Waitlist"
          )}
        </button>

        {message && (
          <div
            className={`p-3 rounded-lg text-sm ${
              status === "success"
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            {message}
          </div>
        )}

        <p className="text-xs text-center text-gray-500 mt-4">
          We&apos;ll notify you when TikSound is ready for you to explore.
          <br />
          No spam, ever. That&apos;s a promise!
        </p>
      </form>
    </div>
  );
}
