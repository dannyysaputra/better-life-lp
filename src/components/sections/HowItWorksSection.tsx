"use client";
import { copy } from "@/lib/content/copy";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TiltCard } from "@/components/motion/TiltCard";
import { Card } from "@/components/ui/Card";

export function HowItWorksSection() {
  const { howItWorks } = copy.landing;

  return (
    <section id="how-it-works" className="py-24 bg-pearl scroll-mt-20">
      <div className="container mx-auto px-4">
        <Reveal className="mb-16 text-center">
            <h2 className="text-4xl font-serif font-bold text-ink">{howItWorks.title}</h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-8">
            {howItWorks.steps.map((step, i) => (
                <StaggerItem key={i}>
                    <TiltCard className="h-full">
                        <Card className="h-full flex flex-col items-start">
                            <span className="text-6xl font-serif font-bold text-terracotta/20 mb-6">0{i + 1}</span>
                            <h3 className="text-xl font-bold text-ink mb-3">{step.title}</h3>
                            <p className="text-slate text-lg">{step.description}</p>
                        </Card>
                    </TiltCard>
                </StaggerItem>
            ))}
        </Stagger>
      </div>
    </section>
  );
}
