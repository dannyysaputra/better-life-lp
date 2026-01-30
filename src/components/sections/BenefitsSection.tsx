"use client";
import { copy } from "@/lib/content/copy";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/Card";
import { Zap, Shield, Layout, UserCheck, Smartphone, TrendingUp } from "lucide-react";

const icons = [Zap, Shield, Layout, UserCheck, Smartphone, TrendingUp];

export function BenefitsSection() {
  const { benefits } = copy.landing;

  return (
    <section id="benefits" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <Reveal className="mb-16 md:text-center">
            <h2 className="text-4xl font-serif font-bold text-ink">{benefits.title}</h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.items.map((benefit, i) => {
                const Icon = icons[i % icons.length];
                return (
                    <StaggerItem key={i}>
                        <Card className="h-full">
                            <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-6">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-ink mb-3">{benefit.title}</h3>
                            <p className="text-slate">{benefit.body}</p>
                        </Card>
                    </StaggerItem>
                );
            })}
        </Stagger>
      </div>
    </section>
  );
}
