"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("all");

  // Feature data organized by category
  const features = {
    import: [
      {
        title: "One-Click Sound Extraction",
        description:
          "Extract audio from any TikTok video with just one click. Just paste the video URL and our system handles the rest.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
        ),
        imageSrc: "/screenshots/feature-sound-extraction.jpg",
      },
      {
        title: "Metadata Preservation",
        description:
          "Automatically capture and save all relevant metadata including creator information, original video details, and audio specifications.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        ),
        imageSrc: "/screenshots/feature-metadata.jpg",
      },
      {
        title: "Batch Import",
        description:
          "Import multiple sounds at once by pasting several TikTok URLs. Perfect for creators who need to collect sounds quickly.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
            />
          </svg>
        ),
        imageSrc: "/screenshots/feature-batch-import.jpg",
      },
    ],
    organization: [
      {
        title: "Custom Collections",
        description:
          "Organize your sounds into themed collections for easy access. Create collections for different types of content or projects.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            />
          </svg>
        ),
        imageSrc: "/screenshots/feature-collections.jpg",
      },
      {
        title: "Smart Tagging",
        description:
          "Add custom tags to your sounds or use our AI-suggested tags for improved searchability and organization.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6h.008v.008H6V6z"
            />
          </svg>
        ),
        imageSrc: "/screenshots/feature-tagging.jpg",
      },
      {
        title: "Search & Filter",
        description:
          "Powerful search capabilities let you find the perfect sound quickly using filters for creator, duration, popularity, and more.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        ),
        imageSrc: "/screenshots/feature-search.jpg",
      },
    ],
    playback: [
      {
        title: "Advanced Audio Player",
        description:
          "Premium audio player with visualization, precise timeline control, and adjustable playback speed for the perfect listening experience.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
            />
          </svg>
        ),
        imageSrc: "/screenshots/feature-audio-player.jpg",
      },
      {
        title: "Playlist Creation",
        description:
          "Create custom playlists from your sound library for different projects, moods, or content themes.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
            />
          </svg>
        ),
        imageSrc: "/screenshots/feature-playlists.jpg",
      },
      {
        title: "Offline Listening",
        description:
          "Download sounds for offline access. Perfect for creators who work on the go or in areas with limited connectivity.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
        ),
        imageSrc: "/screenshots/feature-offline.jpg",
      },
    ],
    sharing: [
      {
        title: "Export Options",
        description:
          "Export sounds in various formats and quality settings to fit your specific needs.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        ),
        imageSrc: "/screenshots/feature-export.jpg",
      },
      {
        title: "Direct Sharing",
        description:
          "Share sounds directly to other apps or with team members for seamless collaboration on projects.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        ),
        imageSrc: "/screenshots/feature-sharing.jpg",
      },
      {
        title: "Attribution Info",
        description:
          "Automatically include creator attribution when sharing sounds to respect original content creators.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
        ),
        imageSrc: "/screenshots/feature-attribution.jpg",
      },
    ],
  };

  // Combine all features for "All" tab
  const allFeatures = [
    ...features.import,
    ...features.organization,
    ...features.playback,
    ...features.sharing,
  ];

  // Get the active features based on selected tab
  const getActiveFeatures = () => {
    switch (activeTab) {
      case "import":
        return features.import;
      case "organization":
        return features.organization;
      case "playback":
        return features.playback;
      case "sharing":
        return features.sharing;
      default:
        return allFeatures;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Header */}
        <section className="w-full py-20 bg-gradient-to-b from-black to-[#121212] text-white">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400">
              Powerful Features
            </h1>
            <p className="text-xl max-w-3xl text-gray-300 mb-10">
              Discover all the ways TikSound helps you manage, organize, and
              enjoy your TikTok sounds
            </p>

            {/* Feature Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "all"
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                All Features
              </button>
              <button
                onClick={() => setActiveTab("import")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "import"
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                Sound Import
              </button>
              <button
                onClick={() => setActiveTab("organization")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "organization"
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                Organization
              </button>
              <button
                onClick={() => setActiveTab("playback")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "playback"
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                Playback
              </button>
              <button
                onClick={() => setActiveTab("sharing")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "sharing"
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                Sharing
              </button>
            </div>
          </div>
        </section>

        {/* Features Display */}
        <section className="w-full py-16 bg-[#0E0E0E] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getActiveFeatures().map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-black/60 to-[#151515]/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-transform hover:transform hover:scale-[1.02]"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={feature.imageSrc || "/placeholder-feature.jpg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full flex items-center justify-center text-pink-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="w-full py-16 bg-[#121212] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400">
                Technical Specifications
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">Supported Formats</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span>MP3, WAV, AAC, OGG</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span>High quality audio up to 320kbps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span>Variable bit rate support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">Storage & Limits</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span>Free: 50 sounds (100MB)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span>Pro: Unlimited sounds (10GB)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span>Business: Unlimited (100GB)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">Platform Support</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span>Web App (all browsers)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span>iOS App (iPhone & iPad)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span>Android App</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-16 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                What Content Creators Say
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-pink-500/5 to-pink-500/0 p-6 rounded-xl border border-pink-500/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    JT
                  </div>
                  <div>
                    <h4 className="font-bold">Jessica Torres</h4>
                    <p className="text-sm text-gray-400">
                      TikTok Creator, 1.2M followers
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "TikSound has revolutionized how I find and save sounds for my
                  content. The organization features save me hours every week!"
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/5 to-purple-500/0 p-6 rounded-xl border border-purple-500/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                    RJ
                  </div>
                  <div>
                    <h4 className="font-bold">Ryan Johnson</h4>
                    <p className="text-sm text-gray-400">
                      Content Studio Owner
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Our team uses TikSound daily to collaborate on sound
                  selection. The sharing capabilities and search tools are
                  exceptional."
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/5 to-cyan-500/0 p-6 rounded-xl border border-cyan-500/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center text-white font-bold">
                    AL
                  </div>
                  <div>
                    <h4 className="font-bold">Aisha Lee</h4>
                    <p className="text-sm text-gray-400">
                      Social Media Manager
                    </p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "The playlist feature is a game-changer. I create themed
                  collections for different clients and can access them
                  anywhere."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-b from-[#0A0A0A] to-black text-white">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl">
              Ready to transform how you manage TikTok sounds?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl">
              Join our waitlist today and get early access plus exclusive
              benefits when we launch
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/pricing"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity px-8 py-4 rounded-full text-white font-semibold text-lg"
              >
                See Pricing Plans
              </Link>
              <Link
                href="/#waitlist"
                className="border border-white/20 hover:bg-white/10 transition-colors px-8 py-4 rounded-full text-white font-semibold text-lg"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
