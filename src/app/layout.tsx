import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils/cn";
import Script from "next/script";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://betterlife.example.com';
const analyticsEnabled = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true';
const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'betterlife.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "BetterLife — Clarity first. Momentum next.",
    template: "%s | BetterLife"
  },
  description: "BetterLife helps you clarify what you need, understand the next steps, and move forward with less friction.",
  openGraph: {
    type: "website",
    siteName: "BetterLife",
    title: "BetterLife — Clarity first. Momentum next.",
    description: "BetterLife helps you clarify what you need, understand the next steps, and move forward with less friction.",
    url: baseUrl,
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "BetterLife — Clarity first. Momentum next."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BetterLife — Clarity first. Momentum next.",
    description: "BetterLife helps you clarify what you need, understand the next steps, and move forward with less friction.",
    images: ["/og/og-default.png"]
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BetterLife",
  "url": baseUrl,
  "logo": `${baseUrl}/brand/logo-lockup.svg`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {analyticsEnabled && (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body
        className={cn(
          fraunces.variable,
          manrope.variable,
          "antialiased font-sans bg-pearl text-ink"
        )}
      >
        {children}
      </body>
    </html>
  );
}