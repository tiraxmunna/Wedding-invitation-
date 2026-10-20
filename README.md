# Modern Heirloom — Editorial Wedding Invitation Template

[![Live Demo](https://img.shields.io/badge/Demo-Live_Preview-202A24?style=flat-square&logo=github)](https://tiraxmunna.github.io/Wedding-invitation-/)
[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-202A24?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-202A24?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-202A24?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-202A24?style=flat-square)](LICENSE)

An art-directed, editorial digital wedding invitation and RSVP microsite designed for modern couples. Built with Next.js App Router, React 19, TypeScript, and Tailwind CSS.

---

## Live Demonstration

Experience the interactive invitation and guest flow:

* **Live Website**: [https://tiraxmunna.github.io/Wedding-invitation-/](https://tiraxmunna.github.io/Wedding-invitation-/)
* **Personalized Guest Demo**: [Open with guest greeting & prefilled RSVP](https://tiraxmunna.github.io/Wedding-invitation-/?to=Eleanor%20Vance&party=2) (`?to=Eleanor%20Vance&party=2`)

---

## Architectural Highlights

* **Single-File Content Configuration**: All couple details, events, venues, attire palettes, FAQs, and RSVP rules are defined in [`src/config/wedding.ts`](src/config/wedding.ts). Personalize the entire site without touching React components.
* **Dynamic Monogram & SVG Crest**: The vector crest automatically derives couple initials and the wedding year from configuration.
* **Personalized Guest Routing**: Query parameters (`?to=Name&party=Seats`) display a bespoke greeting in the hero and pre-fill guest details on the RSVP form.
* **Universal Calendar Integration**: Generates RFC-5545 compliant `.ics` calendar files (Apple Calendar, Outlook) and one-click Google Calendar URLs.
* **Dual-Mode RSVP System**:
  * **Demonstration Mode**: Persists responses in browser `localStorage`. Includes a built-in submissions drawer on the confirmation screen to inspect entries, export JSON, or clear test data.
  * **Production Mode**: Submits sanitized JSON payloads to any REST API endpoint or serverless webhook.
* **Interactive Venue Navigation**: Responsive Google Maps integration with one-click address copying and optional live-stream broadcast links.
* **Ambient Audio Player**: Subtle ceremonial music control respecting browser autoplay standards.
* **Accessibility**: WCAG 2.1 AA compliant contrast ratios, full keyboard navigation for dialogs and accordions, and `prefers-reduced-motion` support.

---

## Repository Structure

```
wedding-invitation/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── images/                 # Replaceable wedding photography & crest
│   └── .nojekyll               # Ensures GitHub Pages serves Next.js assets
├── src/
│   ├── app/
│   │   ├── globals.css         # Heirloom design tokens & typography
│   │   ├── layout.tsx          # Root layout & ambient music mount
│   │   ├── page.tsx            # Main invitation single-page layout
│   │   ├── privacy/            # Privacy notice & storage disclosure
│   │   └── rsvp/               # Dedicated RSVP response page
│   ├── components/             # Reusable UI sections & interactive modules
│   ├── config/
│   │   └── wedding.ts          # Central configuration file
│   └── lib/                    # Calendar, validation, and storage utilities
├── next.config.ts              # Next.js build & export configuration
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

* Node.js `18.18+` or `20+` (Node `22+` recommended)
* npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tiraxmunna/Wedding-invitation-.git
cd Wedding-invitation-

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build

```bash
# Type check and build
npm run build

# Preview build locally
npm start
```

---

## Customization Guide

To personalize this website for your celebration, edit **[`src/config/wedding.ts`](src/config/wedding.ts)**:

```typescript
export const weddingConfig: WeddingConfig = {
  weddingId: "mira-arman-2027",
  couple: {
    partnerOne: "Mira",
    partnerTwo: "Arman",
    combinedNames: "Mira & Arman",
    monogram: "M & A",
    eyebrow: "Together with our families",
    invitationLine: "Invite you to celebrate their union and marriage",
  },
  event: {
    mainDateIso: "2027-12-12T17:00:00+05:30",
    dateFormatted: "Sunday, 12 December 2027",
    timeFormatted: "5:00 PM onwards",
    city: "Hyderabad",
    country: "India",
    timezone: "Asia/Kolkata",
    virtualAttendanceUrl: "https://youtube.com/live/your-broadcast", // Optional
  },
  venue: {
    name: "The Garden Courtyard",
    address: "14 Jubilee Enclave, Hitec City Road",
    cityStateZip: "Hyderabad, Telangana 500081",
    mapsUrl: "https://maps.google.com/?q=...",
    embedMapUrl: "https://www.google.com/maps/embed?pb=...",
  },
  // Sections can be individually toggled:
  story: { enabled: true, ... },
  schedule: { enabled: true, ... },
  gallery: { enabled: true, ... },
  dressGuidance: { enabled: true, ... },
  travel: { enabled: true, ... },
  faq: { enabled: true, ... },
  gifts: { enabled: true, ... },
  music: { enabled: true, ... },
  rsvp: { enabled: true, ... },
};
```

---

## Deploying to GitHub Pages

This project is pre-configured to automatically build and deploy via **GitHub Actions**.

### Enabling Live Deployment in Your Repository

1. Open your repository on GitHub and navigate to:  
   **Settings → Pages** ([direct link](https://github.com/tiraxmunna/Wedding-invitation-/settings/pages))
2. Under **Build and deployment > Source**, select **GitHub Actions** from the dropdown menu (instead of *"Deploy from a branch"*).
3. The included workflow (`.github/workflows/deploy.yml`) will automatically compile the Next.js static export and deploy the live website to:  
   `https://<your-username>.github.io/Wedding-invitation-/`

> **Note on Custom Domains**: If using a custom domain (e.g. `wedding.yourdomain.com`), enter your domain in **Settings → Pages → Custom domain**, and set `basePath: ""` in [`next.config.ts`](next.config.ts).

---

## Deploying to Vercel or Netlify

This application deploys out-of-the-box to Vercel or Netlify with zero configuration:

1. Import the repository into your [Vercel](https://vercel.com) or [Netlify](https://netlify.com) dashboard.
2. If connecting a live RSVP backend, add the environment variable `NEXT_PUBLIC_RSVP_ENDPOINT`.
3. Click **Deploy**.

---

## License

Distributed under the [MIT License](LICENSE).
