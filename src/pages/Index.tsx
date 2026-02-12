import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GrowthSection from "@/components/GrowthSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import AuthoritySection from "@/components/AuthoritySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GrowthSection />
      <FeaturesSection />
      <PricingSection />
      <AuthoritySection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
