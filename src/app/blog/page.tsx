"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "How to Find the Perfect TikTok Sound for Your Content",
    category: "Tips & Tricks",
    date: "November 14, 2023",
    excerpt:
      "Discover strategies for finding trending sounds that can help your TikTok content go viral.",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Evolution of Sound on TikTok: Trends and Insights",
    category: "Industry News",
    date: "October 28, 2023",
    excerpt:
      "Explore how audio has evolved on TikTok and what it means for content creators in today&apos;s digital landscape.",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "5 Ways to Organize Your Sound Library for Maximum Efficiency",
    category: "Productivity",
    date: "October 15, 2023",
    excerpt:
      "Learn how to categorize and manage your growing collection of TikTok sounds to streamline your content creation process.",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Understanding Music Licensing for TikTok Creators",
    category: "Legal",
    date: "September 30, 2023",
    excerpt:
      "A comprehensive guide to music licensing rules and what they mean for your TikTok content strategy.",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Case Study: How Top Creators Use Sound to Boost Engagement",
    category: "Case Studies",
    date: "September 18, 2023",
    excerpt:
      "Analysis of successful TikTok creators and how they leverage audio to connect with their audience.",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    "Tips & Tricks",
    "Industry News",
    "Productivity",
    "Legal",
    "Case Studies",
  ];

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Header */}
        <section className="w-full py-20 bg-gradient-to-b from-black to-[#121212] text-white">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400">
              TikSound Blog
            </h1>
            <p className="text-xl max-w-3xl text-gray-300 mb-10">
              Insights, tips, and news for TikTok sound enthusiasts and content
              creators
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category === "all" ? "All Posts" : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="w-full py-16 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-[#151515] border border-white/5 rounded-xl p-6 hover:border-pink-500/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-pink-500/20 text-pink-400">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>

                  <p className="text-gray-300 mb-4">{post.excerpt}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">
                      {post.readTime}
                    </span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-pink-400 hover:text-pink-300 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-20 bg-gradient-to-br from-pink-500/10 to-purple-600/10 border border-pink-500/20 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Stay Updated with TikSound
              </h3>
              <p className="text-gray-300 text-center mb-6">
                Get the latest trends, tips, and insights delivered straight to
                your inbox
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-pink-500/50 text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="w-full py-10 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Link
              href="/"
              className="text-pink-400 hover:text-pink-300 transition-colors font-medium inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Return to Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
