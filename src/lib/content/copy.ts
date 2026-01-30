export const copy = {
  nav: {
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Benefits", href: "/#benefits" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
    ],
    cta: "Request Info",
    secondaryCta: "See How It Works",
  },
  footer: {
    tagline: "Clarity first. Momentum next.",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
    copyright: (year: number) => `© ${year} BetterLife. All rights reserved.`,
  },
  landing: {
    hero: {
      headline: "A better way to move from “interested” to “ready.”",
      subheadline: "BetterLife helps you clarify what you need, understand the next steps, and get support that fits — without the usual friction.",
      micro: "Built for fast decisions. Designed to feel human.",
      bullets: [
        "Clear steps, not confusion",
        "Simple flow, fast response",
        "A foundation that scales as you grow",
      ],
    },
    problem: {
      title: "Why most people drop off early",
      items: [
        "The first step is unclear — people don’t know what to do next.",
        "Too much information at once, not enough guidance.",
        "No easy way to ask questions and get a quick response.",
      ],
    },
    solution: {
      title: "What BetterLife changes",
      items: [
        "A simple path from discovery to action — in minutes.",
        "A clean, focused experience that reduces decision fatigue.",
        "A direct request flow so you can get answers quickly.",
      ],
    },
    howItWorks: {
      title: "How it works",
      steps: [
        { title: "Explore", description: "See what BetterLife offers and which path fits your needs." },
        { title: "Request", description: "Send a short request — we only ask for what we need to respond." },
        { title: "Move forward", description: "Get a clear next step within 24 hours." },
      ],
    },
    benefits: {
      title: "Designed for clarity and momentum",
      items: [
        { title: "Focused by default", body: "Only the essentials. No clutter, no noise." },
        { title: "Fast to act on", body: "A flow that helps you decide and move forward quickly." },
        { title: "Built to adapt", body: "Content and structure are easy to evolve as you learn." },
        { title: "Trust-friendly", body: "Clear information, respectful tone, and simple communication." },
        { title: "Responsive everywhere", body: "Optimized for mobile, tablet, and desktop." },
        { title: "Ready to scale", body: "A clean foundation that supports future features without rewrites." },
      ],
    },
    faq: {
      title: "FAQ",
      items: [
        { question: "What happens after I submit a request?", answer: "We review your request and reply within 24 hours with clear next steps." },
        { question: "What information do you collect?", answer: "Only what’s needed to respond — typically your name, contact, and a short message." },
        { question: "Is this a commitment or payment?", answer: "No. Submitting a request is only a way to start a conversation." },
        { question: "Can I update my request later?", answer: "Yes. Just reply to our message or submit a new request with updated details." },
        { question: "How do you handle privacy?", answer: "We use your information only to respond to your request. See our Privacy page for details." },
        { question: "How soon can I get a response?", answer: "Typically within 24 hours." },
      ],
    },
    finalCta: {
      title: "Ready to take the next step?",
      body: "Send a quick request. We’ll reply with clear options and next steps.",
      trust: "No spam. Your information is only used to respond to your request.",
    },
  },
  form: {
    labels: {
      name: "Full name",
      contact: "Email or WhatsApp",
      interest: "What are you looking for?",
      message: "Message",
    },
    placeholders: {
      name: "e.g., Jane Doe",
      contact: "e.g., jane@email.com or +62 812 3456 7890",
      interest: "Select one (optional)",
      message: "Tell us what you need in 1–2 sentences (optional)",
    },
    options: [
      "General information",
      "Consultation",
      "Partnership",
      "Other",
    ],
    buttons: {
      submit: "Send request",
      loading: "Sending…",
    },
    helper: "We’ll only use this to respond to your request.",
    success: {
      title: "Thanks — we got your request.",
      body: "We’ll reach out within 24 hours with the next steps.",
    },
    errors: {
      generic: {
        title: "Something went wrong.",
        body: "Please try again in a moment.",
      },
      validation: {
        name: "Please enter your name.",
        contact: "Enter a valid email or WhatsApp number.",
      },
      rateLimit: "Please wait a moment and try again.",
      offline: "You appear to be offline. Check your connection and try again.",
    },
  },
  pages: {
    about: {
      title: "About BetterLife",
      paragraphs: [
        "BetterLife is built to make the first step feel simple — clear information, a focused flow, and a quick way to ask for help.",
        "We believe good experiences reduce friction: fewer steps, better structure, and language that respects your time.",
        "This site is an MVP foundation designed to evolve quickly as we learn what people need most.",
      ],
      callout: "Have a question? Use the request form and we’ll respond within 24 hours.",
    },
    privacy: {
      title: "Privacy",
      description: "How BetterLife collects and uses your information when you submit a request.",
      bullets: [
        "We collect only the information you submit through the request form (such as name, contact, and message).",
        "We use this information only to respond to your request and follow up if needed.",
        "We do not sell your personal data.",
        "You can request deletion of your data by contacting us.",
      ],
      contact: "For privacy requests, contact us via the request form or email at privacy@example.com.",
    },
    terms: {
      title: "Terms",
      description: "Terms for using the BetterLife website and submitting a request.",
      bullets: [
        "This website is provided for informational purposes.",
        "Submitting a request does not create a contract or guarantee of service.",
        "We may update content and features over time as the product evolves.",
        "If you have questions, contact us via the request form.",
      ],
    },
  }
};