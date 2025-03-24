"use client";

import { useState } from "react";

export default function SoundImport() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImport = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) {
      setError("Please enter a valid TikTok URL");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // This would be replaced with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form after successful import
      setUrl("");
      setIsLoading(false);

      // Show success toast or notification
      console.log("Sound imported successfully!");
    } catch (err) {
      setIsLoading(false);
      setError("Failed to import sound. Please check your URL and try again.");
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-md bg-[#1A1A1A] rounded-xl p-6 border border-gray-800 shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-white">Import TikTok Sound</h3>

      <form onSubmit={handleImport} className="space-y-4">
        <div>
          <label
            htmlFor="tiktok-url"
            className="block text-sm text-gray-400 mb-1"
          >
            TikTok Video URL
          </label>
          <input
            id="tiktok-url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.tiktok.com/@username/video/1234567890"
            className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 rounded-lg font-medium text-white transition-all 
            ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90"
            }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
              Importing...
            </span>
          ) : (
            "Import Sound"
          )}
        </button>
      </form>
    </div>
  );
}
