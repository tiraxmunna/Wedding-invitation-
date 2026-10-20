# 🕊️ Modern Heirloom — Bespoke Wedding Invitation Microsite Template

<p align="center">
  <img src="public/images/hero.jpg" alt="Modern Heirloom Wedding Invitation" width="600" style="border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
</p>

<p align="center">
  <strong>An art-directed, editorial digital wedding invitation & RSVP microsite for discerning couples.</strong><br />
  Crafted with Next.js App Router, React 19, TypeScript, and Tailwind CSS.
</p>

<p align="center">
  <a href="#-key-features"><img src="https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
  <a href="#-key-features"><img src="https://img.shields.io/badge/React-19.3-blue?style=for-the-badge&logo=react" alt="React" /></a>
  <a href="#-key-features"><img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" /></a>
  <a href="#-key-features"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" /></a>
  <a href="#-accessibility--performance"><img src="https://img.shields.io/badge/Accessibility-WCAG_AA-green?style=for-the-badge" alt="Accessibility" /></a>
  <a href="#license"><img src="https://img.shields.io/badge/License-MIT-amber?style=for-the-badge" alt="License" /></a>
</p>

---

## 📖 Overview

**Modern Heirloom** reimagines digital wedding invitations as tactile, editorial keepsakes rather than sterile landing pages. Drawing inspiration from luxury letterpress stationery, fine art typography, and timeless architecture, it provides an emotionally engaging experience for guests while streamlining celebration logistics for the couple.

The entire website is **100% configuration-driven**: you can fully rebrand the names, ceremony timings, venues, color schemes, galleries, and RSVP rules by editing a single TypeScript file (`src/config/wedding.ts`).

---

## ✨ Key Features

### 🎨 1. Bespoke Editorial Aesthetics
* **Tactile Paper Palette**: Warm parchment surfaces (`#F7F4EC`, `#FFFEFA`), deep ink typography (`#202A24`), light sage/olive accents (`#737F68`, `#DCE1D5`), and antique brass details (`#A88753`).
* **Letterpress Framing**: Double-hairline card framing, corner flourish motifs, and architectural archway silhouettes (`.heirloom-arch`).
* **Editorial Typography**: High-contrast serifs (*Playfair Display*, *Cormorant Garamond*) paired with clean geometric sans (*Inter*).

### 💌 2. Dynamic Monogram & Botanical Crest
* High-resolution vector SVG crest that **dynamically renders the couple's initials and wedding year** directly from the configuration file.
* Zero manual SVG editing required when adapting for new couples.

### 👤 3. Personalized Guest Invitation Links
* Share individualized links via messaging apps or paper QR codes:
  ```
  https://your-wedding.com/?to=Priya%20Sharma&party=2
  ```
* Displays a dedicated personal welcome card in the hero:
  > *"Dear Priya Sharma, We would be deeply honored by your presence. We have reserved 2 seats in your party."*
* Automatically pre-fills the guest's full name and party count on the RSVP form.

### 📅 4. Multi-Ceremony Schedule & Calendar Sync
* Groups events across multiple dates (e.g., Welcome Soirée, Sangeet, Ceremony, Reception).
* **Direct `.ics` Download**: RFC-5545 compliant calendar files for Apple Calendar, Outlook, and mobile devices.
* **One-Click Google Calendar**: Pre-populated URL links with timezones, addresses, and attire notes.

### 📍 5. Interactive Venue Map & Virtual Live Stream
* Responsive embedded Google Maps view allowing guests to orient themselves without leaving the site.
* One-touch **"Copy Address"** button with automatic clipboard API and manual fallback.
* Optional **Virtual Attendance Banner** for remote, overseas, or elderly guests (supports YouTube Live, Zoom, Vimeo).

### 🎶 6. Ceremonial Ambient Music Player
* Non-intrusive floating music toggle in the lower corner with animated soundwave bars and track title tooltip.
* Respects browser autoplay policies (starts muted until tapped by the guest).

### 📝 7. Dual-Mode RSVP System & Demo Inspector
* **Client-Side Validation**: Immediate inline error feedback for names, email formatting, and party limits.
* **Conditional Logic**: Declining attendance seamlessly hides catering and companion guest fields.
* **Dietary & Allergies**: Pre-configured options (Vegetarian, Vegan, Jain, Gluten-Free, Nut Allergy, Custom).
* **Dual Operating Modes**:
  1. **Demo Mode (`demo`)**: Saves submissions directly in the browser's `localStorage` for immediate client presentations without a database.
  2. **Production API Mode (`api`)**: Posts sanitized payloads to any REST API, Google Sheet webhook, Supabase, or Firebase endpoint.
* **Built-in Demo Submissions Drawer**: Template purchasers and evaluators can click *"Template Demo Submissions"* on the confirmation screen to review recorded RSVPs, download a clean JSON export, or clear test submissions.

### 🖼️ 8. Photo Gallery with Accessible Lightbox
* Curated collage grid supporting portrait, square, and landscape image crops.
* Full-screen modal lightbox featuring keyboard navigation (`Esc`, `←`, `→`), focus restoration, touch-friendly navigation, and photo captions.

### 👗 9. Attire Guidance & Palette Swatches
* Clarifies dress codes with interactive color swatches and footwear recommendations for outdoor or stone courtyards.

### 🏨 10. Travel & Lodging Directory
* Airport arrival guidance, local transport tips (Uber/Ola/cabs), and hotel accommodation cards with direct booking links and distance metrics.

### ❓ 11. Interactive FAQ Accordion
* Accessible ARIA-compliant accordion covering plus-ones, children, valet parking, and gift registry preferences.

---

## 🗂️ Project Structure

```
wedding-invitation/
├── public/
│   ├── images/              # Replaceable couple photos & hero imagery
│   │   ├── hero.jpg
│   │   ├── story.jpg
│   │   ├── gallery-1.jpg ... gallery-6.jpg
│   │   └── wedding-crest.svg
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens, heirloom utilities & font mapping
│   │   ├── layout.tsx       # Root layout, Next fonts & ambient music mount
│   │   ├── page.tsx         # Primary one-page invitation layout
│   │   ├── privacy/         # Privacy & demo data storage disclosure
│   │   └── rsvp/            # Dedicated RSVP response page
│   ├── components/
│   │   ├── couple-story.tsx
│   │   ├── dress-guidance.tsx
│   │   ├── event-schedule.tsx
│   │   ├── faq-accordion.tsx
│   │   ├── gallery-lightbox.tsx
│   │   ├── gift-information.tsx
│   │   ├── hero-invitation.tsx
│   │   ├── music-player.tsx
│   │   ├── personalized-guest-banner.tsx
│   │   ├── photo-gallery.tsx
│   │   ├── rsvp-confirmation.tsx
│   │   ├── rsvp-form.tsx
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   ├── travel-accommodation.tsx
│   │   ├── venue-details.tsx
│   │   ├── wedding-countdown.tsx
│   │   └── wedding-logo.tsx # Dynamic SVG crest
│   ├── config/
│   │   └── wedding.ts       # ⭐️ Single source of truth for all content
│   └── lib/
│       ├── calendar.ts      # .ics file generator & Google Calendar URLs
│       ├── date-format.ts   # Timezone-aware date & countdown calculations
│       ├── rsvp-service.ts  # LocalStorage demo & production fetch client
│       ├── rsvp-validation.ts # Form validation & payload sanitization
│       └── types.ts         # TypeScript definitions
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Quick Start

### 1. Prerequisites
* **Node.js**: `v18.18+` or `v20+` (Recommended `v22+`)
* **npm**, **pnpm**, or **yarn**

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/tiraxmunna/Wedding-invitation-.git
cd Wedding-invitation-

# Install dependencies
npm install
```

### 3. Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

Test personalization query parameters:
```
http://localhost:3000/?to=Alexander%20Hamilton&party=2
```

### 4. Production Build & Validation
```bash
# TypeScript type check
npx tsc --noEmit

# Production bundle build
npm run build

# Preview production build locally
npm start
```

---

## ⚙️ Personalization Guide

To customize this template for a real wedding, you only need to modify **[`src/config/wedding.ts`](src/config/wedding.ts)**.

### Basic Couple & Event Setup
```typescript
export const weddingConfig: WeddingConfig = {
  weddingId: "sophia-daniel-2028", // Used for unique storage keys & calendar UIDs
  couple: {
    partnerOne: "Sophia",
    partnerTwo: "Daniel",
    combinedNames: "Sophia & Daniel",
    monogram: "S & D",
    eyebrow: "Together with our families",
    invitationLine: "Request the pleasure of your company at their marriage",
  },
  event: {
    mainDateIso: "2028-06-18T16:30:00+02:00",
    dateFormatted: "Saturday, 18 June 2028",
    timeFormatted: "4:30 PM onwards",
    city: "Florence",
    country: "Italy",
    timezone: "Europe/Rome",
    virtualAttendanceUrl: "https://youtube.com/live/your-stream", // optional
  },
  // ...
};
```

### Enabling / Disabling Sections
Every major section includes an `enabled: boolean` flag. If a couple doesn't need a registry or travel tips, set `enabled: false`:
```typescript
gifts: {
  enabled: false, // Hides gifts section and removes navigation link
  // ...
},
travel: {
  enabled: true,
  // ...
}
```

### Connecting Live RSVP to a Database
By default, the template runs in `demo` mode. To connect to an active backend:
1. Update `src/config/wedding.ts`:
   ```typescript
   rsvp: {
     mode: "api", // Switch from 'demo' to 'api'
     apiEndpoint: process.env.NEXT_PUBLIC_RSVP_ENDPOINT || "https://your-api.com/api/rsvp",
     deadlineIso: "2028-05-01T23:59:59+02:00",
     deadlineFormatted: "1 May 2028",
     maxPartySize: 4,
     // ...
   }
   ```
2. Create `.env.local`:
   ```env
   NEXT_PUBLIC_RSVP_ENDPOINT=https://your-endpoint.com/api/rsvp
   NEXT_PUBLIC_SITE_URL=https://sophia-daniel-wedding.com
   ```

The submitted JSON payload adheres to:
```json
{
  "weddingId": "sophia-daniel-2028",
  "fullName": "Alexander Hamilton",
  "response": "attending",
  "email": "alex@example.com",
  "phone": "+1 555-0199",
  "partySize": 2,
  "additionalGuestNames": ["Elizabeth Schuyler"],
  "dietaryRequirements": "Gluten-Free",
  "dietaryNotes": "Nut-sensitive",
  "message": "Wishing you both a lifetime of joy!",
  "submittedAt": "2028-04-12T10:15:30.000Z"
}
```

---

## ♿ Accessibility & Performance

- **WCAG 2.1 AA Compliant**: High-contrast text ratios for all informational body copy and inputs.
- **Keyboard Operable**: Full keyboard accessibility for modal lightboxes, navigation menus, and accordions.
- **Reduced Motion**: Automatically disables continuous animations and smooth scrolling when `prefers-reduced-motion` is detected.
- **Lighthouse Optimized**: Standard Next.js image optimization (`next/image`) with progressive sizing and lazy loading.

---

## 🚢 Deployment

Deploy in one click to **Vercel**, **Netlify**, or **Cloudflare Pages**:

### Deploying to Vercel
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Set your custom environment variables if using production RSVP (`NEXT_PUBLIC_RSVP_ENDPOINT`, `NEXT_PUBLIC_SITE_URL`).
4. Deploy!

---

## 📄 License

Distributed under the **MIT License**. Feel free to use, modify, and customize this template for commercial or personal wedding celebrations.

---

<p align="center">
  Crafted with care & timeless elegance.
</p>
