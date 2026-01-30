"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { copy } from "@/lib/content/copy";
import { useScroll } from "@/lib/hooks/use-scroll";
import { cn } from "@/lib/utils/cn";
import { scrollToAnchor } from "@/lib/utils/scrollToAnchor";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const scrolled = useScroll(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isLanding = pathname === "/";

  // Contextual links
  const links = isLanding
    ? copy.nav.links
    : [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "FAQ", href: "/faq" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ];

  const handleLinkClick = (e: React.MouseEvent<Element>, href: string) => {
    // If it's a section link (starts with /#)
    if (href.startsWith("/#")) {
      setMobileOpen(false);
      const id = href.replace("/", ""); // e.g., "#contact"
      
      if (pathname === "/") {
        e.preventDefault();
        const options = id === "#contact" ? { focus: 'input[name="name"]' } : undefined;
        scrollToAnchor(id, options);
      } else {
        // Allow default navigation to /#id
      }
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-glass backdrop-blur-md border-b border-glass-border shadow-sm h-[72px]" : "bg-transparent h-[88px]"
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-serif font-bold text-ink tracking-tight">
          BetterLife<span className="text-saffron">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === link.href ? "text-teal font-semibold" : "text-slate hover:text-teal"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button 
            href="/#contact" 
            size="sm"
            onClick={(e: React.MouseEvent) => handleLinkClick(e, "/#contact")}
          >
            {copy.nav.cta}
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-pearl border-b border-mist shadow-lg p-6 md:hidden flex flex-col gap-6 animate-reveal">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                "text-lg font-medium",
                pathname === link.href ? "text-teal" : "text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button 
            href="/#contact" 
            onClick={(e: React.MouseEvent) => handleLinkClick(e, "/#contact")}
            className="w-full"
          >
            {copy.nav.cta}
          </Button>
        </div>
      )}
    </header>
  );
}
