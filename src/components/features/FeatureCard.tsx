import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-br from-black/60 to-[#151515]/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-transform hover:transform hover:scale-[1.02] p-6">
      <div className="mb-6 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full flex items-center justify-center text-pink-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <div className="mt-5 pt-5 border-t border-white/5">
        <span className="inline-block text-xs font-medium text-pink-400 hover:text-pink-300 cursor-pointer transition-colors">
          Learn more →
        </span>
      </div>
    </div>
  );
}
