# Aranya Farms — Premium Real Estate Website

A premium Next.js 14 website for Aranya Farms, built with:

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **Node.js API route** (Nodemailer) for contact form
- **Framer Motion** ready for animations
- Fully **mobile-responsive** design

## Design System

| Token | Value |
|-------|-------|
| Primary bg | `#f9f5ee` (cream) |
| Dark bg | `#0f2318` (forest-900) |
| Accent | `#d9a820` (gold-400) |
| Display font | Cormorant Garamond |
| Body font | Jost |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.example .env.local
# Fill in your SMTP credentials

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Home page (assembles all sections)
├── globals.css         # Global styles + Tailwind
├── api/
│   └── contact/
│       └── route.ts    # POST /api/contact — Nodemailer
├── components/
│   ├── Navbar.tsx      # Sticky nav with mobile drawer
│   ├── Footer.tsx      # Footer with links
│   └── FloatingCTA.tsx # WhatsApp floating button
└── sections/
    ├── Hero.tsx        # Full-screen hero
    ├── Ticker.tsx      # Gold marquee strip
    ├── About.tsx       # About + facts
    ├── Plots.tsx       # 3-column plot cards
    ├── Stats.tsx       # Animated counter stats
    ├── Amenities.tsx   # 8-item amenity grid
    ├── Gallery.tsx     # Masonry-style image gallery
    ├── Location.tsx    # Google Maps embed + distances
    └── Contact.tsx     # Contact form
```

## Deployment

```bash
npm run build
npm start
```

Or deploy to **Vercel** (recommended) — connect the repo and set env vars in dashboard.

## Email Setup (Nodemailer)

In `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your-gmail-app-password   # Generate in Google Account settings
CONTACT_EMAIL=sales@aranyafarms.in  # Where leads land
```

Without env vars, form submissions print to the console (useful during dev).
