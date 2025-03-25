"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SupportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("general");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual contact form submission logic here
    console.log("Contact form submitted:", { name, email, subject, message });
    setIsSubmitted(true);
    // Reset form
    setName("");
    setEmail("");
    setSubject("general");
    setMessage("");
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // FAQ Data
  const faqs = [
    {
      question: "What is TikSound?",
      answer:
        "TikSound is a specialized tool that allows you to save, organize, and play your favorite TikTok sounds. It helps content creators efficiently manage audio for their projects with features like sound import, custom playlists, and offline access.",
    },
    {
      question: "When will TikSound be available?",
      answer:
        "TikSound is currently in final development and is scheduled to launch in Q1 2024. Join our waitlist to get early access and exclusive benefits when we launch.",
    },
    {
      question: "How do I import sounds from TikTok?",
      answer:
        "Once launched, you'll be able to import sounds by simply pasting a TikTok video URL into our import tool. TikSound will automatically extract the audio and associated metadata, including creator info and thumbnails.",
    },
    {
      question: "Is TikSound available on mobile devices?",
      answer:
        "Yes, TikSound will be available as both a web application and a mobile app for iOS and Android devices, allowing you to manage your sound library on the go.",
    },
    {
      question: "What's included in the free plan?",
      answer:
        "The free plan includes basic features like saving up to 50 TikTok sounds, basic organization tools, and standard audio quality. For more advanced features, you can upgrade to our Pro or Business plans.",
    },
    {
      question: "Is it legal to download TikTok sounds?",
      answer:
        "TikSound is designed for personal use only. We recommend using sounds according to TikTok's terms of service and respecting copyright laws. Always give proper credit to original creators when using their content.",
    },
  ];

  // Support Options
  const supportOptions = [
    {
      title: "Email Support",
      description: "Get help from our support team via email",
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
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      action: "support@tiksound.com",
    },
    {
      title: "Help Center",
      description: "Browse our knowledge base for solutions",
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
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
      action: "/help-center",
    },
    {
      title: "Discord Community",
      description: "Join our community for tips and discussions",
      icon: (
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      ),
      action: "https://discord.gg/tiksound",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Header */}
        <section className="w-full py-20 bg-gradient-to-b from-black to-[#121212] text-white">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400">
              Support & Help
            </h1>
            <p className="text-xl max-w-3xl text-gray-300 mb-10">
              Need help with TikSound? We're here to assist you every step of
              the way
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="w-full py-12 bg-[#0E0E0E] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400">
                Ways to Get Support
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {supportOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl p-6 border border-white/10 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105"
                >
                  <div className="mb-4 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full flex items-center justify-center text-pink-500">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-400 mb-4">{option.description}</p>
                  {option.title === "Email Support" ? (
                    <a
                      href={`mailto:${option.action}`}
                      className="text-pink-400 hover:text-pink-300 transition-colors font-medium"
                    >
                      {option.action}
                    </a>
                  ) : (
                    <Link
                      href={option.action}
                      className="text-pink-400 hover:text-pink-300 transition-colors font-medium"
                    >
                      Visit {option.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 bg-[#121212] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                Frequently Asked Questions
              </span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-bold mb-3 flex items-start">
                    <span className="text-pink-500 mr-2">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/pricing"
                className="text-pink-400 hover:text-pink-300 transition-colors font-medium"
              >
                View pricing details →
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="w-full py-16 bg-[#0A0A0A] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                  Get in Touch
                </span>
              </h2>
              <p className="text-center text-gray-400 mb-10">
                Can't find what you're looking for? Send us a message and our
                team will get back to you.
              </p>

              <div className="bg-gradient-to-br from-black/60 to-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-green-400">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300">
                      Thanks for reaching out. Our support team will get back to
                      you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-400 mb-1"
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 text-white placeholder-gray-500 outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-400 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 text-white placeholder-gray-500 outline-none transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-400 mb-1"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 text-white outline-none transition-colors"
                      >
                        <option value="general" className="bg-[#151515]">
                          General Inquiry
                        </option>
                        <option value="support" className="bg-[#151515]">
                          Technical Support
                        </option>
                        <option value="feature" className="bg-[#151515]">
                          Feature Request
                        </option>
                        <option value="pricing" className="bg-[#151515]">
                          Pricing Question
                        </option>
                        <option value="other" className="bg-[#151515]">
                          Other
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-400 mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 text-white placeholder-gray-500 outline-none transition-colors resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90"
                      >
                        Send Message
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our{" "}
                      <Link
                        href="/privacy"
                        className="text-pink-400 hover:text-pink-300 transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Office Info Section */}
        <section className="w-full py-16 bg-[#121212] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400">
                    Our Office
                  </span>
                </h2>
                <p className="text-gray-300 mb-6">
                  While we're primarily a remote team, you can find our
                  headquarters at:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-pink-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>United States</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-pink-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:support@tiksound.com"
                      className="hover:text-pink-400 transition-colors"
                    >
                      support@tiksound.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-pink-500 flex-shrink-0"
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
                    <span>
                      Support Hours:
                      <br />
                      Monday - Friday, 9AM - 6PM PST
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden h-64 md:h-80 w-full border border-white/10">
                  {/* This would be a map in a real implementation */}
                  <div className="w-full h-full bg-gradient-to-br from-[#151515] to-[#0A0A0A] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-pink-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-400">TikSound Headquarters</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Return to Home */}
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
