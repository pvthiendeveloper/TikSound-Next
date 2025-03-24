import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import UserSection from "@/components/UserSection";
import PreviewSection from "@/components/PreviewSection";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileAppPreview from "@/components/MobileAppPreview";
import SoundDetailPreview from "@/components/SoundDetailPreview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <MobileAppPreview />
        <FeatureSection />
        <PreviewSection />
        <SoundDetailPreview />
        <UserSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
