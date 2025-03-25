export default function UserSection() {
  return (
    <section id="for-creators" className="w-full py-20 bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Made For Creators Like You
        </h2>
        <p className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          TikSound is the perfect tool for content creators who need quick
          access to trending sounds
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 p-8 rounded-xl border border-pink-500/20">
            <div className="mb-4 w-16 h-16 bg-pink-500/20 text-pink-500 rounded-full flex items-center justify-center">
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
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">
              TikTokers & Content Creators
            </h3>
            <p className="text-gray-400">
              Easily reuse trending sounds for your content. Save time searching
              for that perfect sound by keeping them organized in your library.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-8 rounded-xl border border-purple-500/20">
            <div className="mb-4 w-16 h-16 bg-purple-500/20 text-purple-500 rounded-full flex items-center justify-center">
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
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">TikTok Enthusiasts</h3>
            <p className="text-gray-400">
              Love that catchy sound from a TikTok video? Save it to your
              personal library and listen to it whenever you want, even offline.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 p-8 rounded-xl border border-cyan-500/20">
            <div className="mb-4 w-16 h-16 bg-cyan-500/20 text-cyan-500 rounded-full flex items-center justify-center">
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
                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Editors & Meme Makers</h3>
            <p className="text-gray-400">
              Build a quick-access sound library for your editing projects.
              Create custom playlists to organize sounds by project or theme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
