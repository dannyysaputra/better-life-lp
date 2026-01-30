# BetterLife MVP

A professional, elegant, and responsive marketing foundation for BetterLife, built with Next.js (App Router) and Tailwind CSS. This project serves as the Minimum Viable Product (MVP) to validate demand through a focused landing page and secure lead capture system.

## 🔗 Live Demo
Production URL: [https://betterlife-landingpage.netlify.app/](https://betterlife-landingpage.netlify.app/)

### Available Routes
- **`/` (Landing Page)**: Main conversion funnel with hero, benefits, and contact form.
- **`/about`**: The BetterLife mission and editorial story.
- **`/faq`**: Support center with searchable common questions.
- **`/privacy`**: Privacy policy and data handling details.
- **`/terms`**: Terms of service and usage guidelines.

*Note: The **"Request Info"** CTA button used across all pages automatically navigates to the landing page and smooth-scrolls to the `#contact` section, focusing the first input field for immediate use.*

## 🛠 Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS v4 (Token-based design system)
- **Motion**: Framer Motion (Reduced-motion aware)
- **Validation**: Zod + React Hook Form
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React

## ✨ Features
- **Contextual Navigation**: Navbar adapts based on the current route (anchor links on Home, page links on others).
- **Premium UI**: Warm-neutral aesthetic with terracotta, teal, and saffron accents.
- **Responsive Design**: Fluid layouts optimized for 360px (Mobile), 768px (Tablet), and 1280px+ (Desktop).
- **Secure Lead Capture**: 
  - Server-side validation and sanitization.
  - Anti-spam measures including a hidden honeypot and rate limiting.
  - Persistence to Supabase via server-only service role keys.
- **Enhanced Static Pages**: Each page features a unique layout concept (Editorial, Support Center, Policy Matrix, Legal Summary) and background motifs.
- **SEO Ready**: Unique metadata per route, Open Graph tags, dynamic `sitemap.xml`, and `robots.txt`.

## 🚀 Getting Started (Local)

### 1. Install dependencies
```bash
npm install
```

### 2. Setup Environment Variables
Copy the example environment file:
```bash
cp .env.example .env.local
```
*Note: `.env.local` is ignored by Git and should be used for your local secrets.*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

## 🔑 Environment Variables
| Variable | Scope | Description |
| :--- | :--- | :--- |
| `SUPABASE_URL` | Server | Your Supabase project URL. |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only | Secret key for database access (Never expose to browser). |
| `NEXT_PUBLIC_SITE_URL` | Public | The base URL of your deployment (e.g., `https://betterlife-landingpage.netlify.app`). |
| `NEXT_PUBLIC_ANALYTICS_ENABLED` | Public | Optional toggle ('true'/'false') for analytics scripts. |

## 🗄 Supabase Setup
Run the following SQL in your Supabase SQL Editor to create the `leads` table:

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
```

## 🌐 Deployment (Netlify)
This project is optimized for deployment on **Netlify**.

1. **Connect**: Link your GitHub/GitLab repository to Netlify.
2. **Build Settings**:
   - Build Command: `npm run build`
   - Publish Directory: `.next`
3. **Environment Variables**: Add the variables listed in the [Environment Variables](#-environment-variables) section in the Netlify dashboard.
4. **Post-Deploy Verification**:
   - Open all routes to ensure they load correctly.
   - Submit a test lead via the form.
   - Verify the row appears in the Supabase Table Editor.

## ✅ Acceptance Checklist
- [x] All routes (`/`, `/about`, `/faq`, `/privacy`, `/terms`) render successfully.
- [x] Contextual Navbar and Footer links work across all pages.
- [x] "Request Info" CTA correctly scrolls and focuses the form input.
- [x] Form submission displays success/error states accurately.
- [x] Robots.txt and Sitemap.xml are accessible.
- [x] Mobile menu is usable and handles overflow correctly.

## 📄 License
All rights reserved © 2026 Danny Suggi Saputra.