"use client";

import { PageShell } from "@/components/layout/PageShell";
import { copy } from "@/lib/content/copy";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageMotif } from "@/components/layout/PageMotif";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { scrollToAnchor } from "@/lib/utils/scrollToAnchor";
import { FileText, Scale, RefreshCw, HelpCircle } from "lucide-react";

export default function TermsPage() {
  const terms = [
    { title: "General Terms", icon: <FileText className="w-5 h-5" />, content: copy.pages.terms.bullets[0] },
    { title: "Submissions", icon: <Scale className="w-5 h-5" />, content: copy.pages.terms.bullets[1] },
    { title: "Updates", icon: <RefreshCw className="w-5 h-5" />, content: copy.pages.terms.bullets[2] },
  ];

  return (
    <PageShell variant="page">
      <PageMotif variant="terms" />
      
      <div className="container mx-auto px-4 max-w-4xl relative">
        <PageHeader 
          title={copy.pages.terms.title}
          subtitle={copy.pages.terms.description}
          badgeText="Legal Agreement"
          variant="terms"
        />

        <div className="space-y-8 mt-12">
          {/* Summary Card */}
          <Reveal>
            <Card className="bg-ink/5 border-ink/10 p-8 mb-12">
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-4">At a Glance</h3>
              <ul className="grid sm:grid-cols-3 gap-6">
                {terms.map((t) => (
                  <li key={t.title} className="text-sm text-slate">
                    <span className="font-bold text-ink block mb-1">{t.title}</span>
                    <span className="opacity-80">Read details below</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* Detailed Cards */}
          {terms.map((term, i) => (
            <Reveal key={term.title} delay={i * 0.1}>
              <Card className="flex flex-col md:flex-row gap-6 p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-ink/10 group-hover:bg-ink/20 transition-colors" />
                <div className="w-12 h-12 rounded-xl bg-pearl flex items-center justify-center text-ink shrink-0 border border-mist">
                  {term.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-ink mb-3">{term.title}</h3>
                  <p className="text-lg text-slate leading-relaxed">{term.content}</p>
                </div>
              </Card>
            </Reveal>
          ))}

          <Reveal delay={0.4}>
            <div className="text-center mt-16 pt-8 border-t border-mist/50">
              <div className="inline-flex items-center justify-center p-2 rounded-full bg-white border border-mist mb-6 shadow-sm">
                <HelpCircle className="w-5 h-5 text-slate mx-2" />
                <span className="text-sm font-medium text-slate mr-4">{copy.pages.terms.bullets[3]}</span>
              </div>
              <br />
              <Button variant="secondary" href="/#contact" onClick={() => scrollToAnchor("contact", { focus: 'input[name="name"]' })}>
                Contact Support
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </PageShell>
  );
}
