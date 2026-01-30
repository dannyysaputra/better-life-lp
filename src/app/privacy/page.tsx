"use client";

import { PageShell } from "@/components/layout/PageShell";
import { copy } from "@/lib/content/copy";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageMotif } from "@/components/layout/PageMotif";
import { Reveal } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { scrollToAnchor } from "@/lib/utils/scrollToAnchor";
import { Shield, Lock, Eye, Mail } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    { title: "What we collect", icon: <Eye className="w-5 h-5" />, content: copy.pages.privacy.bullets[0] },
    { title: "How we use it", icon: <Lock className="w-5 h-5" />, content: [copy.pages.privacy.bullets[1], copy.pages.privacy.bullets[2]] },
    { title: "Your choices", icon: <Shield className="w-5 h-5" />, content: copy.pages.privacy.bullets[3] },
  ];

  return (
    <PageShell variant="page">
      <PageMotif variant="privacy" />
      
      <div className="container mx-auto px-4 max-w-4xl relative">
        <PageHeader 
          title={copy.pages.privacy.title}
          subtitle={copy.pages.privacy.description}
          badgeText="Privacy Policy"
          variant="privacy"
        />

        <div className="space-y-12">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.1}>
              <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 group">
                <div className="flex items-center gap-3 md:block">
                  <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center text-saffron mb-0 md:mb-3">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-serif font-bold text-ink group-hover:text-saffron transition-colors">
                    {section.title}
                  </h2>
                </div>
                
                <Card className="relative overflow-hidden border-l-4 border-l-saffron border-t-mist border-r-mist border-b-mist">
                  {Array.isArray(section.content) ? (
                    <div className="space-y-4">
                      <p className="text-lg text-slate">{section.content[0]}</p>
                      <Divider />
                      <p className="text-lg text-slate">{section.content[1]}</p>
                    </div>
                  ) : (
                    <p className="text-lg text-slate">{section.content}</p>
                  )}
                </Card>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.4} className="md:pl-[248px]">
            <Card className="bg-gradient-to-br from-white to-pearl border-mist p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-slate" />
                  <h3 className="font-bold text-ink">Contact for requests</h3>
                </div>
                <p className="text-slate leading-relaxed">
                  {copy.pages.privacy.contact}
                </p>
              </div>
              <Button href="/#contact" onClick={() => scrollToAnchor("contact", { focus: 'input[name="name"]' })}>
                Jump to Request Form
              </Button>
            </Card>
          </Reveal>
        </div>
      </div>
    </PageShell>
  );
}