"use client";

import { useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { copy } from "@/lib/content/copy";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageMotif } from "@/components/layout/PageMotif";
import { Accordion } from "@/components/ui/Accordion";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { scrollToAnchor } from "@/lib/utils/scrollToAnchor";
import { Search, MessageSquare, ArrowRight } from "lucide-react";

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const categories = ["All", "General", "Requests", "Privacy"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter items based on search AND category
  const filteredItems = copy.landing.faq.items.filter(item => {
    // 1. Search Filter
    const matchesSearch = 
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());

    if (!matchesSearch) return false;

    // 2. Category Filter (Approximate mapping since content is static)
    if (activeCategory === "All") return true;
    
    const text = (item.question + item.answer).toLowerCase();
    
    if (activeCategory === "General") {
      return text.includes("happens") || text.includes("collect") || text.includes("commitment");
    }
    if (activeCategory === "Requests") {
      return text.includes("update") || text.includes("soon");
    }
    if (activeCategory === "Privacy") {
      return text.includes("privacy");
    }

    return true;
  }).map((item, i) => ({
    id: `faq-page-${i}`,
    ...item
  }));

  return (
    <PageShell variant="page">
      <PageMotif variant="faq" />
      
      <div className="container mx-auto px-4 max-w-5xl relative">
        <PageHeader 
          title="Support Center"
          subtitle="Quick answers to common questions about BetterLife and what happens after you submit a request."
          badgeText="FAQ"
          variant="faq"
        >
          <div className="relative w-full max-w-md mx-auto mt-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate/50" />
            <input 
              type="text"
              placeholder="Search questions..."
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-mist bg-white focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </PageHeader>

        <div className="grid lg:grid-cols-[200px_1fr] gap-12 mt-12">
          {/* Categories Sidebar */}
          <div className="space-y-2 hidden lg:block">
            <h4 className="text-xs font-bold text-slate uppercase tracking-wider mb-4 px-2">Categories</h4>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat 
                    ? "bg-teal/10 text-teal" 
                    : "text-slate hover:bg-mist/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Mobile Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden no-scrollbar">
              {categories.map(cat => (
                <Badge 
                  key={cat}
                  variant={activeCategory === cat ? "accent" : "neutral"}
                  className="whitespace-nowrap cursor-pointer"
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>

            <Reveal>
              <Card className="min-h-[400px]">
                {filteredItems.length > 0 ? (
                  <Accordion items={filteredItems} />
                ) : (
                  <div className="text-center py-12 text-slate">
                    No results found for "{search}" in {activeCategory}
                  </div>
                )}
              </Card>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white border border-mist rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/5 flex items-center justify-center text-teal">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">Can't find an answer?</h3>
                    <p className="text-sm text-slate">We’re here to help.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="secondary" href="/#contact" onClick={() => scrollToAnchor("contact")}>
                    Go to Contact
                  </Button>
                  <Button href="/#contact" onClick={() => scrollToAnchor("contact", { focus: 'input[name="name"]' })}>
                    Request Info
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
