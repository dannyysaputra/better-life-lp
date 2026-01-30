# BetterLife MVP

A professional, elegant, and responsive landing page for BetterLife, built with Next.js (App Router) and Tailwind CSS. This project serves as the Minimum Viable Product (MVP) to validate demand and capture leads.

## Features

- **Premium UI:** Warm-neutral design with terracotta/teal/saffron accents.
- **Responsive:** Optimized for Mobile (360px), Tablet, and Desktop.
- **Motion:** Subtle reveal animations and smooth scrolling (respects `prefers-reduced-motion`).
- **Lead Capture:** Validated form with anti-spam (honeypot + rate limiting).
- **SEO Ready:** Sitemap, robots.txt, JSON-LD, and Open Graph metadata configured.
- **Backend:** Server-side validation and persistence to Supabase.

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4
- **Motion:** Framer Motion
- **Icons:** Lucide React
- **Validation:** Zod + React Hook Form
- **Backend:** Supabase (PostgreSQL)

## Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd BetterLife
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Copy the example environment file:
```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your values:
- **SUPABASE_URL**: Your Supabase project URL.
- **SUPABASE_SERVICE_ROLE_KEY**: Your Supabase `service_role` secret (NOT the `anon` key).
- **NEXT_PUBLIC_SITE_URL**: `http://localhost:3000` for local dev.

### 4. Setup Database (Supabase)
Run the following SQL in your Supabase SQL Editor to create the required table:

```sql
create table public.leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  contact text not null,
  interest text,
  message text,
  source text,
  user_agent text,
  ip_hash text
);

-- Optional: Enable RLS to prevent public access (API uses service role to bypass)
alter table public.leads enable row level security;
```

### 5. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

## Manual Acceptance Testing

To verify the project meets the MVP requirements, refer to the [Acceptance Tests](.spec/acceptance-tests.md) document.

**Quick Checks:**
1.  **Routes:** Verify `/`, `/about`, `/faq`, `/privacy`, `/terms` load.
2.  **Navigation:** Click "Request Info" -> should smooth scroll to the form.
3.  **Form:** Submit a valid entry -> check for success message ("Thanks — we got your request").
4.  **Database:** Verify the row appears in your Supabase `leads` table.
5.  **Mobile:** Open DevTools (F12), toggle device toolbar, test on 360px width.

## Deployment (Vercel)

1.  **Push to Git:** Ensure your code is pushed to GitHub/GitLab.
2.  **Import to Vercel:** Create a new project and import your repository.
3.  **Configure Environment Variables:**
    - Go to **Settings > Environment Variables**.
    - Add `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and `NEXT_PUBLIC_SITE_URL` (set to your production domain, e.g., `https://betterlife.vercel.app`).
4.  **Deploy:** Click "Deploy".

## Troubleshooting

-   **"Database insertion failed" / 500 Error:**
    -   Check if `SUPABASE_SERVICE_ROLE_KEY` is correct in `.env.local` or Vercel.
    -   Ensure the `leads` table exists in Supabase.
-   **Form doesn't scroll/focus:**
    -   Ensure the DOM ID `#contact` exists (it is in `FinalCTASection`).
-   **Build Errors:**
    -   Ensure no type errors (`npm run build` locally to test).

## License

All rights reserved © 2026 BetterLife.
