"use client";
import { copy } from "@/lib/content/copy";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";

export function FAQSection() {
  const { faq } = copy.landing;
  
  // Add IDs for accordion items
  const items = faq.items.map((item, i) => ({
    id: `faq-${i}`,
    ...item
  }));

  return (
    <section id="faq" className="py-24 bg-pearl scroll-mt-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Reveal className="mb-12 text-center">
            <h2 className="text-4xl font-serif font-bold text-ink">{faq.title}</h2>
        </Reveal>
        
        <Reveal delay={0.1}>
            <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
