import Image from "next/image";

export default function PreviewSection() {
  return (
    <section className="w-full py-12 bg-[#121212] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            Powerful Sound Management
          </span>
        </h2>

        {/* Add a descriptive paragraph below the title */}
        <p className="text-lg text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          TikSound gives you complete control over your audio collection with
          intuitive tools designed for content creators. Import, organize, and
          enjoy your favorite TikTok sounds in one centralized platform.
        </p>

        {/* First row - Personal Library */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 mb-24">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                Personal Sound Library
              </span>
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Build your personalized collection of TikTok sounds. Save,
              categorize, and access all your favorite audio in one place.
            </p>
            <ul className="space-y-4 mb-8">
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
                <span>View creator information for each sound</span>
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
                <span>Quick access to download options</span>
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
                <span>Easily manage multiple sounds from the same creator</span>
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
                <span>Convenient search and filter tools</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative mx-auto w-[280px] h-[580px] rounded-[40px] overflow-hidden border-8 border-[#222] shadow-2xl">
              <Image
                src="/screenshots/app-my-sounds-screen.png"
                alt="My Sound Library"
                width={280}
                height={580}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-44 h-44 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>

        {/* Second row - Import Sound Feature */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                Easy Sound Import
              </span>
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Quickly extract sounds from any TikTok video with our seamless
              import tool. Just paste a link or upload directly from your
              device.
            </p>
            <ul className="space-y-4 mb-8">
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
                <span>Simple one-click TikTok sound extraction</span>
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
                <span>Import directly from TikTok URL</span>
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
                <span>Upload sound files from your device</span>
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
                <span>Automatic metadata extraction</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative mx-auto w-[280px] h-[580px] rounded-[40px] overflow-hidden border-8 border-[#222] shadow-2xl">
              <Image
                src="/screenshots/app-import-sound-screen.png"
                alt="TikSound Import Feature"
                width={280}
                height={580}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-44 h-44 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>

        {/* Third row - Music Player */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                Advanced Music Player
              </span>
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Enjoy a premium music player experience with full playback
              controls. Listen to your favorite TikTok sounds with enhanced
              audio quality.
            </p>
            <ul className="space-y-4 mb-8">
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
                <span>Full playback controls (play, pause, skip)</span>
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
                <span>Visualize playback progress with timeline</span>
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
                <span>Add sounds to custom playlists</span>
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
                <span>Download sounds for offline listening</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative mx-auto w-[280px] h-[580px] rounded-[40px] overflow-hidden border-8 border-[#222] shadow-2xl">
              <Image
                src="/screenshots/app-play-screen.png"
                alt="TikSound Music Player"
                width={280}
                height={580}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-44 h-44 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
