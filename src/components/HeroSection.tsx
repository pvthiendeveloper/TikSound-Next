"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual waitlist submission logic here
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setEmail("");
    // Reset submission status after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-[#121212] text-white">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400">
          TikSound Manager
        </h1>
        <p className="text-xl max-w-3xl text-center text-gray-300 mb-10">
          The ultimate tool to save, organize, and play your favorite TikTok
          sounds
        </p>

        {/* Waitlist form with early access promotion */}
        <div className="w-full max-w-md mb-12">
          {/* Early access badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500/20 to-purple-600/20 text-pink-400 border border-pink-500/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
              Limited Time Offer
            </span>
          </div>

          {/* Promotion text */}
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                Early Access Perks
              </span>
            </h3>
            <p className="text-gray-300">
              Join our waitlist now and get{" "}
              <span className="font-semibold text-white">3 months free</span> of
              our Premium plan +{" "}
              <span className="font-semibold text-white">
                exclusive early access
              </span>{" "}
              when we launch!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2"
          >
            <div className="flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 text-white placeholder-gray-400 outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity px-8 py-3 rounded-full text-white font-semibold text-lg"
            >
              Join Waitlist
            </button>
          </form>

          {isSubmitted && (
            <div className="mt-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-center text-green-400 font-medium">
                Thanks! You've been added to our waitlist with early access
                benefits.
              </p>
            </div>
          )}

          <p className="mt-3 text-center text-gray-400 text-sm">
            Be the first to get access when we launch. No spam, ever.
          </p>

          {/* Countdown or limited spots indicator */}
          <div className="mt-4 flex items-center justify-center">
            <div className="flex items-center text-amber-400 text-sm font-medium">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Only 87 spots left for premium early access
            </div>
          </div>
        </div>

        {/* App Screenshots Display */}
        <div className="w-full relative overflow-hidden py-10">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-500/30 to-transparent rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full opacity-30 blur-3xl"></div>

          <div className="flex justify-center items-center relative max-w-6xl mx-auto">
            {/* Left small phone */}
            <div className="hidden md:block relative z-10 transform -translate-y-2 -translate-x-4">
              <div className="relative w-[120px] h-[250px] rounded-[20px] overflow-hidden border-4 border-[#222] shadow-xl transform -rotate-12">
                <Image
                  src="/screenshots/import-result-screen.png"
                  alt="TikSound Result Screen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Left medium phone */}
            <div className="relative z-20 transform -translate-y-5">
              <div className="relative w-[160px] h-[330px] rounded-[28px] overflow-hidden border-6 border-[#222] shadow-xl transform -rotate-6">
                <Image
                  src="/screenshots/my-sound-screen.png"
                  alt="TikSound Library"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Main center phone */}
            <div className="relative z-30 mx-1 md:mx-3">
              <div className="relative w-[220px] md:w-[280px] h-[460px] md:h-[580px] rounded-[40px] overflow-hidden border-8 border-[#222] shadow-2xl">
                <Image
                  src="/screenshots/home-screen.png"
                  alt="TikSound Home Screen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gradient-to-br from-pink-500/40 to-purple-600/40 rounded-full opacity-40 blur-xl"></div>
            </div>

            {/* Right medium phone */}
            <div className="relative z-20 transform -translate-y-5">
              <div className="relative w-[160px] h-[330px] rounded-[28px] overflow-hidden border-6 border-[#222] shadow-xl transform rotate-6">
                <Image
                  src="/screenshots/import-sound-screen.png"
                  alt="TikSound Import Feature"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right small phone */}
            <div className="hidden md:block relative z-10 transform -translate-y-2 translate-x-4">
              <div className="relative w-[120px] h-[250px] rounded-[20px] overflow-hidden border-4 border-[#222] shadow-xl transform rotate-12">
                <Image
                  src="/screenshots/sound-player-screen.png"
                  alt="TikSound Player"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
