import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils/cn";

interface PageShellProps {
  children: ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
  className?: string;
  variant?: "landing" | "page";
}

export function PageShell({
  children,
  showNavbar = true,
  showFooter = true,
  className,
  variant = "landing",
}: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-pearl text-ink font-sans">
      {showNavbar && <Navbar />}
      <main
        id="main"
        className={cn(
          "flex-1 flex flex-col w-full",
          // Navbar offset
          showNavbar ? "pt-[88px]" : "",
          // Variant specific styles
          variant === "page" ? "items-start justify-start pt-32 pb-16" : "",
          className
        )}
      >
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}