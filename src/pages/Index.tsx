import BankingHero from "@/components/BankingHero";
import BankingDashboard from "@/components/BankingDashboard";
import FeatureSection from "@/components/FeatureSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BankingHero />
      <BankingDashboard />
      <FeatureSection />
    </div>
  );
};

export default Index;
