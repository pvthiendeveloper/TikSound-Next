"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";

export default function WaitlistPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="w-full py-20 bg-gradient-to-b from-black to-[#121212] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                  Join the TikSound Waitlist
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Be among the first to access our platform when we launch. Join
                our waitlist to get notified and receive exclusive early access.
              </p>

              <div className="flex justify-center mb-12">
                <div className="relative w-20 h-20">
                  <Image
                    src="/icon.png"
                    alt="TikSound Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <WaitlistForm />
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 flex items-center justify-center bg-pink-500/20 text-pink-400 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Early Access</h3>
                <p className="text-gray-400">
                  Join our waitlist and be the first to experience TikSound when
                  we launch.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/20 text-purple-400 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.5 20.25h-9a1.5 1.5 0 01-1.5-1.5v-10.5a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Exclusive Features</h3>
                <p className="text-gray-400">
                  Waitlist members will get access to exclusive features and
                  premium content.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 text-cyan-400 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Priority Support</h3>
                <p className="text-gray-400">
                  Get priority access to our support team and help shape the
                  future of TikSound.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
