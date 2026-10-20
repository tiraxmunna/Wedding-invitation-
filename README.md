# 🕊️ Modern Heirloom — Bespoke Wedding Invitation

<p align="center">
  <img src="public/images/hero.jpg" alt="Modern Heirloom Wedding Invitation" width="560" style="border-radius: 6px; box-shadow: 0 12px 36px rgba(0,0,0,0.12);" />
</p>

<p align="center">
  <strong>An art-directed, editorial digital wedding invitation & guest RSVP microsite.</strong><br />
  Crafted with Next.js App Router, React 19, TypeScript & Tailwind CSS.
</p>

<p align="center">
  <a href="https://tiraxmunna.github.io/Wedding-invitation-/">
    <img src="https://img.shields.io/badge/🌐_Live_Preview-GitHub_Pages-A88753?style=for-the-badge&logoColor=white" alt="Live Preview" />
  </a>
  <a href="#-features">
    <img src="https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  </a>
  <a href="#-features">
    <img src="https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  </a>
  <a href="#license">
    <img src="https://img.shields.io/badge/License-MIT-202A24?style=for-the-badge" alt="License" />
  </a>
</p>

---

## 🌟 Live Preview

Experience the live interactive invitation deployed on GitHub Pages:

👉 **[https://tiraxmunna.github.io/Wedding-invitation-/](https://tiraxmunna.github.io/Wedding-invitation-/)**

> 💡 **Try Personalized Guest Links:**
> [Open with personalized greeting & pre-filled RSVP](https://tiraxmunna.github.io/Wedding-invitation-/?to=Alexander%20Hamilton&party=2) (`?to=Alexander%20Hamilton&party=2`).

---

## ✨ Why It’s Unique & Fantastic

* 🎨 **Modern Heirloom Stationery**: Warm natural paper (`#F7F4EC`), deep ink typography (`#202A24`), double-line gold hairline frames, and ornate corner flourishes.
* 🕊️ **Dynamic SVG Crest**: The monogram automatically updates initials and year when couple names change in config.
* 👤 **Personalized Guest Links**: Pass `?to=GuestName&party=2` to show a personal greeting in the hero and pre-fill their RSVP.
* 📅 **One-Tap Calendar Sync**: Instant `.ics` file download (Apple / Outlook) and Google Calendar sync for every event.
* 📍 **Interactive Map & Virtual Stream**: Embedded Google Map for easy navigation, plus a live-stream banner for remote guests.
* 🎶 **Ambient Audio Player**: Subtle, non-intrusive background ceremonial melody with volume wave animations.
* 📝 **Dual-Mode RSVP & Submissions Drawer**:
  * **Demo Mode**: Stores responses in browser `localStorage`. Review, export as JSON, or clear submissions via the built-in inspector drawer.
  * **API Mode**: Seamlessly submits to any REST backend, Google Sheet, or database.
* 🖼️ **Editorial Lightbox Gallery**: Full keyboard (`Esc`, `←`, `→`) and touch-accessible photo lightbox.

---

## ⚡ 30-Second Quickstart

```bash
# 1. Clone repository
git clone https://github.com/tiraxmunna/Wedding-invitation-.git
cd Wedding-invitation-

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your invitation.

---

## 🎯 Personalize in 1 File

Everything is customized from a single file: **[`src/config/wedding.ts`](src/config/wedding.ts)**

```typescript
export const weddingConfig: WeddingConfig = {
  weddingId: "mira-arman-2027",
  couple: {
    partnerOne: "Mira",
    partnerTwo: "Arman",
    combinedNames: "Mira & Arman",
    eyebrow: "Together with our families",
    invitationLine: "Invite you to celebrate their union and marriage",
  },
  event: {
    mainDateIso: "2027-12-12T17:00:00+05:30",
    dateFormatted: "Sunday, 12 December 2027",
    city: "Hyderabad",
    country: "India",
  },
  venue: {
    name: "The Garden Courtyard",
    address: "14 Jubilee Enclave, Hitec City Road",
    mapsUrl: "https://maps.google.com/...",
  },
  // Toggle any section: story, schedule, gallery, attire, travel, faq, gifts, rsvp, music
};
```

---

## 🚀 GitHub Pages Live Preview Setup

This repository includes a pre-configured automated GitHub Actions workflow (`.github/workflows/deploy.yml`).

To enable the live site on GitHub:
1. Go to your repository on GitHub: **Settings → Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push to `main` — GitHub will automatically build and publish your site at:
   `https://<your-username>.github.io/Wedding-invitation-/`

---

## 📄 License

Open-source and freely available under the **MIT License**.
Crafted with timeless elegance.
