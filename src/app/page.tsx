import CTASection from "@/components/CTASection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MobileAppPreview from "@/components/MobileAppPreview";
import Navbar from "@/components/Navbar";
import PreviewSection from "@/components/PreviewSection";
import SoundDetailPreview from "@/components/SoundDetailPreview";
import UserSection from "@/components/UserSection";

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
