  <section className="w-full py-16 bg-[#0A0A0A] text-white">
    <div className="container mx-auto px-4 md:px-6">
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
              Ready to organize your TikTok sounds?
            </h3>
            <p className="text-gray-300">
              Join our exclusive waitlist to get{" "}
              <span className="text-white font-semibold">
                3 months of Premium access for free
              </span>{" "}
              at launch. Be the first to experience all these powerful features!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </div>
            <p className="text-xs text-gray-400">
              By signing up, you agree to our{" "}
              <Link href="/terms" className="text-pink-400 hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-pink-400 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold mb-3">Compare Plans</h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Want to see what features are available in each plan? Check out our detailed pricing page.
        </p>
        <Link
          href="/pricing"
          className="inline-block px-6 py-3 bg-white/10 hover:bg-white/15 transition-colors text-white font-medium rounded-lg"
        >
          View Pricing Plans
        </Link>
      </div>
    </div>
  </section>
); 