import Image from "next/image";

export default function SoundDetailPreview() {
  return (
    <section className="w-full py-16 bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            Discover & Share Sounds
          </span>
        </h2>

        <p className="text-lg text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Explore a vast collection of trending TikTok sounds and easily share
          them with your community. Find the perfect audio for your next viral
          creation with our powerful search and recommendation tools.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/2 lg:w-1/3">
            <div className="relative mx-auto w-[280px] h-[580px] rounded-[40px] overflow-hidden border-8 border-[#222] shadow-2xl">
              <Image
                src="/screenshots/app-result-screen.png"
                alt="TikSound Sound Detail"
                width={280}
                height={580}
                className="object-cover"
              />
            </div>
            <div className="absolute mt-[-20px] ml-[140px] w-44 h-44 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-full opacity-30 blur-2xl"></div>
          </div>

          <div className="md:w-1/2 max-w-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                Find Any Sound Instantly
              </span>
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Browse, preview, and save your favorite TikTok sounds with
              detailed information. Share with friends or use in your own
              content creation.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-pink-500 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>View song details with high-quality artwork</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-pink-500 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>See the original creator information</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-pink-500 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>One-click download for offline use</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-pink-500 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Share on social media platforms</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
