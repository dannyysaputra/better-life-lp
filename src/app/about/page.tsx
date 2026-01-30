"use client";

import { PageShell } from "@/components/layout/PageShell";
import { copy } from "@/lib/content/copy";
import { PageHeader } from "@/components/layout/PageHeader";
import { CalloutCard } from "@/components/layout/CalloutCard";
import { PageMotif } from "@/components/layout/PageMotif";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { scrollToAnchor } from "@/lib/utils/scrollToAnchor";
import { Quote, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const principles = [
    "Clear steps, not confusion",
    "Simple flow, fast response",
    "A foundation that scales as you grow",
  ];

  return (
    <PageShell variant="page">
      <PageMotif variant="about" />
      
      <div className="container mx-auto px-4 max-w-6xl relative">
        <PageHeader 
          title={copy.pages.about.title}
          subtitle={copy.pages.about.paragraphs[0]} // Reusing first paragraph as subtitle/intro
          badgeText="Our Story"
          variant="about"
        />

        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-24">
          {/* Main Editorial Column */}
          <div className="space-y-16 relative">
            <div className="absolute left-[-24px] top-0 bottom-0 w-px bg-terracotta/10 hidden lg:block" />
            
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-serif font-bold mb-6 text-ink">Why BetterLife</h2>
              <p className="text-lg text-slate leading-relaxed">
                {copy.pages.about.paragraphs[0]}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Card className="bg-terracotta/5 border-terracotta/10 p-8 my-8 relative overflow-hidden">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-terracotta/10" />
                <p className="text-xl font-medium text-ink relative z-10">
                  {copy.landing.hero.micro}
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.3}>
              <h2 className="text-2xl font-serif font-bold mb-6 text-ink">What we optimize for</h2>
              <p className="text-lg text-slate leading-relaxed mb-6">
                {copy.pages.about.paragraphs[1]}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <h2 className="text-2xl font-serif font-bold mb-6 text-ink">MVP Mindset</h2>
              <p className="text-lg text-slate leading-relaxed">
                {copy.pages.about.paragraphs[2]}
              </p>
            </Reveal>

            <Reveal delay={0.5} className="pt-8">
              <Card className="bg-white border-mist p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
                <div>
                  <Badge className="mb-2 bg-teal/10 text-teal">Next Step</Badge>
                  <h3 className="text-xl font-bold text-ink">Ready to move forward?</h3>
                </div>
                <Button href="/#contact" onClick={() => scrollToAnchor("contact", { focus: 'input[name="name"]' })}>
                  Request Info <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </Reveal>
          </div>

          {/* Sidebar Rail */}
          <aside className="space-y-8 lg:pt-12">
            <Reveal delay={0.2} className="sticky top-32">
              <h4 className="text-sm font-bold text-slate uppercase tracking-wider mb-6">Core Principles</h4>
              <div className="space-y-4">
                {principles.map((p, i) => (
                  <Card key={i} hoverable className="p-5 border-l-4 border-l-terracotta border-t-mist border-r-mist border-b-mist">
                    <p className="text-sm font-medium text-ink">{p}</p>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12">
                <CalloutCard className="bg-pearl border-mist">
                  {copy.pages.about.callout}
                </CalloutCard>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}