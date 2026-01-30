import { PageShell } from "@/components/layout/PageShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BetterLife — A better way to move forward",
  description: "BetterLife helps you clarify what you need, understand the next steps, and get support that fits — without the usual friction.",
  openGraph: {
    title: "BetterLife — Move forward with clarity",
    description: "BetterLife helps you clarify what you need, understand the next steps, and get support that fits — without the usual friction.",
  }
};

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <FAQSection />
      <FinalCTASection />
    </PageShell>
  );
}