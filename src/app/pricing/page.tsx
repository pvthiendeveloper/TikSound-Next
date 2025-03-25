"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent, plan: string) => {
    e.preventDefault();
    // TODO: Implement actual waitlist submission logic here
    console.log("Email submitted:", email, "Plan:", plan);
    setIsSubmitted(true);
    setEmail("");
    // Reset submission status after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const plans = [
    {
      id: "free",
      name: "Free",
      description:
        "Perfect for casual TikTok users who want to save sounds occasionally",
      price: {
        monthly: 0,
        yearly: 0,
      },
      features: [
        "Save up to 50 TikTok sounds",
        "Basic sound organization",
        "Standard audio quality",
        "Web access only",
        "Basic export options",
      ],
      cta: "Join Waitlist",
      highlighted: false,
      badge: "",
    },
    {
      id: "pro",
      name: "Pro",
      description:
        "For content creators who need more advanced features and storage",
      price: {
        monthly: 9.99,
        yearly: 7.99,
      },
      features: [
        "Unlimited sound saving",
        "Advanced categorization & tags",
        "High-quality audio",
        "Web & mobile access",
        "Custom playlists",
        "Offline listening",
        "Advanced export options",
      ],
      cta: "Join Waitlist",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      id: "business",
      name: "Business",
      description:
        "For professional content teams who need collaborative tools",
      price: {
        monthly: 24.99,
        yearly: 19.99,
      },
      features: [
        "Everything in Pro plan",
        "Team collaboration features",
        "Sound analytics",
        "API access",
        "Bulk import & export",
        "Priority support",
        "White labeling",
        "Custom integrations",
      ],
      cta: "Join Waitlist",
      highlighted: false,
      badge: "",
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl max-w-3xl text-gray-300 mb-10">
              Choose the plan that works best for your TikTok sound management
              needs
            </p>

            {/* Early Access Offer */}
            <div className="w-full max-w-md mb-12 bg-gradient-to-br from-black/60 to-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500/20 to-purple-600/20 text-pink-400 border border-pink-500/30 mb-4">
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
                Pre-Launch Special
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                  Early Bird Pricing
                </span>
              </h3>
              <p className="text-gray-300 mb-2">
                Join our waitlist today and get{" "}
                <span className="font-semibold text-white">3 months free</span> on
                any paid plan when we launch. Limited time offer!
              </p>
              <div className="mt-2 flex items-center justify-center gap-4 text-xs text-gray-400">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-amber-500"
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
                  Limited Spots
                </span>
              </div>
            </div>

            {/* Billing Cycle Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-16">
              <span
                className={`text-sm ${
                  billingCycle === "monthly"
                    ? "text-white font-medium"
                    : "text-gray-400"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingCycle(
                    billingCycle === "monthly" ? "yearly" : "monthly"
                  )
                }
                className="relative inline-flex h-6 w-12 items-center rounded-full bg-gradient-to-r from-pink-500/30 to-purple-600/30 p-1 transition-colors focus:outline-none"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
              <div className="flex items-center gap-1">
                <span
                  className={`text-sm ${
                    billingCycle === "yearly"
                      ? "text-white font-medium"
                      : "text-gray-400"
                  }`}
                >
                  Yearly
                </span>
                <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full py-16 bg-[#0E0E0E] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl border ${
                    plan.highlighted
                      ? "border-pink-500/50 bg-gradient-to-b from-pink-500/10 to-purple-600/10"
                      : "border-white/10 bg-[#151515]"
                  } p-8 flex flex-col h-full`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 right-8">
                      <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4 h-12">{plan.description}</p>
                    <div className="flex items-baseline mb-1">
                      <span className="text-4xl font-bold">
                        $
                        {billingCycle === "monthly"
                          ? plan.price.monthly
                          : plan.price.yearly}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-gray-400 ml-2">/ month</span>
                      )}
                    </div>
                    {plan.price.monthly > 0 && (
                      <p className="text-sm text-gray-400 mb-6">
                        {billingCycle === "yearly"
                          ? "Billed annually"
                          : "Billed monthly"}
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5"
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
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <button
                      onClick={() => {
                        setSelectedPlan(plan.id);
                        const emailInput = document.getElementById(
                          "waitlist-email-" + plan.id
                        );
                        if (emailInput) {
                          emailInput.focus();
                        }
                      }}
                      className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90"
                          : "bg-white/10 hover:bg-white/20 border border-white/10"
                      }`}
                    >
                      {plan.cta}
                    </button>

                    {selectedPlan === plan.id && (
                      <div className="mt-4 p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 animate-fadeIn">
                        <form onSubmit={(e) => handleSubmit(e, plan.id)}>
                          <label
                            htmlFor={`waitlist-email-${plan.id}`}
                            className="block text-sm text-gray-400 mb-2"
                          >
                            Join the waitlist for this plan
                          </label>
                          <div className="flex gap-2">
                            <input
                              id={`waitlist-email-${plan.id}`}
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Your email"
                              required
                              className="flex-grow px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-white placeholder-gray-500 outline-none text-sm"
                            />
                            <button
                              type="submit"
                              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 px-3 py-2 rounded-lg text-white text-sm"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                        {isSubmitted && (
                          <p className="mt-3 text-green-400 text-sm">
                            Thanks! You've been added to our waitlist.
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 bg-[#121212] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400">
                Frequently Asked Questions
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">
                  When will TikSound launch?
                </h3>
                <p className="text-gray-300">
                  We're currently in the final stages of development. Join our
                  waitlist to be among the first to know when we launch, projected
                  for Q1 2024.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">
                  Can I switch plans later?
                </h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Your
                  billing will be prorated accordingly.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">Is there a free trial?</h3>
                <p className="text-gray-300">
                  All paid plans come with a 14-day free trial. Early waitlist
                  subscribers get an extended 30-day trial plus 3 months free.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">Do you offer refunds?</h3>
                <p className="text-gray-300">
                  Yes, we offer a 7-day money-back guarantee if you're not
                  satisfied with our service for any reason.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-300">
                  We accept all major credit cards, PayPal, and Apple Pay for
                  subscription payments.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">
                  How do I cancel my subscription?
                </h3>
                <p className="text-gray-300">
                  You can cancel your subscription at any time from your account
                  settings. Your access will remain until the end of your billing
                  period.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-b from-[#0A0A0A] to-black text-white">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-xl">
              Still have questions?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Our team is here to help with any questions you might have about our
              plans or features
            </p>
            <Link
              href="/support"
              className="bg-white/10 hover:bg-white/20 border border-white/10 px-8 py-3 rounded-full text-white font-medium transition-colors"
            >
              Contact Support
            </Link>
            <div className="mt-12 flex items-center gap-2 text-gray-400">
              <Link
                href="/"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
