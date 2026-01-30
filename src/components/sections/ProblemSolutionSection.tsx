"use client";
import { copy } from "@/lib/content/copy";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { XCircle, CheckCircle } from "lucide-react";

export function ProblemSolutionSection() {
  const { problem, solution } = copy.landing;

  return (
    <section id="problem-solution" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          
          <Reveal>
            <div className="bg-pearl rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-serif font-bold mb-8 text-ink">{problem.title}</h2>
                <Stagger className="space-y-6">
                    {problem.items.map((item, i) => (
                        <StaggerItem key={i} className="flex items-start gap-4">
                            <XCircle className="w-6 h-6 text-slate/40 shrink-0 mt-0.5" />
                            <p className="text-lg text-slate">{item}</p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-teal/5 rounded-3xl p-8 md:p-12 border border-teal/10">
                <h2 className="text-3xl font-serif font-bold mb-8 text-ink">{solution.title}</h2>
                <Stagger className="space-y-6">
                    {solution.items.map((item, i) => (
                        <StaggerItem key={i} className="flex items-start gap-4">
                            <CheckCircle className="w-6 h-6 text-teal shrink-0 mt-0.5" />
                            <p className="text-lg text-ink font-medium">{item}</p>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
