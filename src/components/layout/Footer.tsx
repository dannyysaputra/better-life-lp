import Link from "next/link";
import { copy } from "@/lib/content/copy";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pearl border-t border-mist py-12 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <Link href="/" className="text-xl font-serif font-bold text-ink tracking-tight mb-2 block">
            BetterLife<span className="text-saffron">.</span>
          </Link>
          <p className="text-slate text-sm">{copy.footer.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-6 md:gap-8">
          {copy.footer.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate hover:text-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="container mx-auto px-4 mt-8 md:mt-12 pt-8 border-t border-mist/50">
        <p className="text-xs text-muted">
          {copy.footer.copyright(currentYear)}
        </p>
      </div>
    </footer>
  );
}
