"use client";

import { submitToWaitlist } from "@/lib/waitlist";
import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitToWaitlist(email);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#0A0A0A] to-black text-white">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
          Ready to organize your favorite TikTok sounds?
        </h2>

        <div className="relative mb-12 max-w-3xl mx-auto">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl opacity-60"></div>

          <div className="relative bg-gradient-to-br from-black/60 to-black/60 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl">
            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full px-4 py-1.5 text-sm font-medium text-pink-400 border border-pink-500/30 mb-4">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Early Access Offer
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2">
                Join our exclusive waitlist
              </h3>
              <p className="text-gray-300">
                Sign up now to secure 3 months of{" "}
                <span className="text-white font-semibold">
                  Premium access for free
                </span>{" "}
                when we launch. Plus, get{" "}
                <span className="text-white font-semibold">
                  priority access
                </span>{" "}
                to new features and updates!
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={isSubmitting}
                className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 text-white placeholder-gray-400 outline-none transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity px-6 py-3 rounded-lg text-white font-semibold whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg animate-pulse">
                <p className="text-green-400 font-medium">
                  You&apos;re on the list! We&apos;ll notify you when TikSound
                  launches.
                </p>
              </div>
            )}

            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-gray-400">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                100% Secure
              </span>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                No Spam Ever
              </span>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Limited Offer
              </span>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-400 max-w-2xl">
          Join thousands of content creators who are already on the waitlist for
          TikSound to enhance their workflow and take their content to the next
          level
        </p>
      </div>
    </section>
  );
}
