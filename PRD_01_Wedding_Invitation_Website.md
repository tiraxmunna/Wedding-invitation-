# PRD 01 — Premium Wedding & Invitation Website Template

**Document type:** Product Requirements Document (PRD) + implementation brief for a coding agent  
**Version:** 1.0  
**Status:** Ready for implementation  
**Product family:** Events & Community  
**Product type:** Customizable, single-couple wedding microsite  
**Primary outcome:** Generate a complete, premium, responsive wedding invitation website that can be personalized for a couple without rewriting the application.

---

## 0. Instruction to the coding agent

Build the complete website described in this document. Treat this PRD as the source of truth.

1. First inspect the existing repository and identify its framework, package manager, conventions, and current functionality. If a project already exists, preserve working code and adapt this specification to its structure. Do not replace unrelated files or restart the project unnecessarily.
2. If the repository is empty, use **Next.js App Router, React, TypeScript, and Tailwind CSS**. Use Lucide icons for interface icons and a lightweight animation approach such as CSS transitions or Motion only where it adds value.
3. Implement the real pages, states, responsive behavior, form validation, navigation, and documented interactions. Do not deliver only a mock-up or static screenshot.
4. Do not ask the user to supply routine content or design decisions. Use the fictional demo content in this PRD and put the content in one configuration file so it can be replaced easily.
5. Do not claim that an RSVP has been sent to the couple unless a real RSVP service is configured and the request has succeeded. In demo mode, store the submission locally in the visitor's browser and clearly document that it is demonstration-only.
6. Never leave dead buttons, empty sections, broken links, lorem ipsum, fake success messages, or unresolved TODOs in the delivered experience. Where a production integration needs credentials or an external service, implement a clear, working demo fallback and document the required configuration.
7. Use real, tasteful imagery. Prefer supplied local assets when present. If none are supplied, use verified image URLs from a reputable image source or create restrained original decorative SVG/CSS artwork. Do not use broken image links, arbitrary remote image URLs, or emoji as a substitute for the visual design. Document how to replace images.
8. Build with mobile-first responsive behavior and accessibility in mind. Respect reduced-motion settings and do not autoplay audio or video.
9. After implementation, run the available lint, type-check, test, and production-build commands. Fix errors caused by the implementation. If a check cannot run, state exactly why in the final handoff.
10. At completion, provide a concise summary of what was built, the commands used to validate it, how to run it locally, and which configuration values must be changed to personalize it.

**Do not expand the scope into a wedding website builder SaaS, a multi-couple platform, a guest-management CRM, or a payment product. This is one polished wedding website template for one couple, with simple configuration-driven customization.**

---

## 1. Product overview

### 1.1 Product vision

Create a digital wedding invitation that feels like a carefully art-directed editorial keepsake rather than a generic event landing page. The visitor should feel welcomed into the couple's celebration, understand when and where events are happening, explore the story and imagery, and submit an RSVP with minimal friction.

The template should be polished enough to show in a premium web-design portfolio and practical enough to adapt for real couples, cultures, ceremonies, venues, and event schedules.

### 1.2 Problem statement

Traditional digital invitations often look generic, are awkward on mobile, bury event logistics, or use forms that do not provide clear feedback. Couples need a memorable, easy-to-share page that combines the emotional feel of an invitation with practical guest information.

### 1.3 Product goals

- Create a distinctive and emotionally engaging digital invitation.
- Present names, date, schedule, venue, story, imagery, and RSVP in a clear hierarchy.
- Make the core experience excellent on narrow mobile screens, where many guests will open a shared link.
- Make the website easy to personalize through one typed configuration/data file and replaceable assets.
- Provide functional RSVP validation, date countdown, calendar actions, map directions, gallery lightbox, FAQ interactions, and meaningful confirmation/error states.
- Keep the initial product light, fast, accessible, and easy to deploy.
- Make optional sections configurable so different couples can enable only the sections relevant to them.

### 1.4 Non-goals

The initial version must not include:

- A multi-tenant website builder or self-service design editor.
- User accounts, couple login, a guest-management admin dashboard, or role-based administration.
- A real database or paid RSVP provider unless the repository already supplies one or the user explicitly configures one.
- Ticket sales, checkout, donations, gift payments, or any payment handling.
- Automated SMS/WhatsApp sending, email campaigns, analytics tracking, or marketing integrations by default.
- An AI chat assistant, social feed, or general content-management system.
- A guaranteed translation/localization management system. The default content is English, but copy must remain easy to edit.

### 1.5 Definition of success

A visitor can open the invitation on a phone, understand the key event details within a few seconds, navigate to the venue, add the event to a calendar, browse photos, and submit an RSVP successfully. The owner of the code can personalize the couple's names, dates, venues, schedule, content, colors, images, and optional sections without hunting through many unrelated components.

---

## 2. Target users and key use cases

### 2.1 Primary audiences

**Invited guest**
- Opens the invitation from a messaging app, email, QR code, or social post.
- Wants ance, and whether an RSVP is needed.
- May use a small phone, slow network, keyboard navigation, or assistive technology.

**Couple / template purchaser**
- Wants a tasteful, personal online invitation.
- Needs to change text, imagery, dates, event schedule, locations, FAQs, RSVP rules, and color theme.
- May not be a developer; setup instructions and configuration names must be understandable.

**Developer customizing the template**
- Needs predictable components and a centralized content model.
- Wants to swap an image, disable a section, or change an event without refactoring the layout.to know who is getting married, date/time, venue, dress guid

### 2.2 Primary guest journey

1. Guest opens the public invitation URL.
2. Hero immediately establishes the couple's names, date, and visual identity.
3. Guest can choose “Explore the invitation” or “RSVP”.
4. Guest scrolls through the story, schedule, venue, gallery, dress guidance, travel details, and FAQs as available.
5. Guest uses the venue directions link or adds the relevant event to a calendar.
6. Guest submits the RSVP, receives inline validation as needed, and sees a truthful confirmation state.

### 2.3 Primary customization journey

1. Developer opens the local project.
2. Developer edits a single configuration file for couple details and page copy.
3. Developer replaces images in the documented asset folder.
4. Developer enables/disables optional sections and changes event schedule entries.
5. Developer runs the local site and validates it on phone and desktop widths.
6. Developer deploys using the repository's documented hosting setup.

---

## 3. Brand and art direction

### 3.1 Creative concept: “Modern Heirloom”

Design a contemporary editorial invitation that feels intimate, tactile, and composed. Combine refined serif typography, quiet botanical or architectural line-art, generous whitespace, warm paper tones, and immersive wedding photography. It should feel designed specifically for a couple rather than assembled from a generic theme.

### 3.2 Visual principles

- **Editorial rather than dashboard-like:** strong type scale, considered spacing, asymmetrical compositions, and deliberate image crops.
- **Warm and restrained:** a parchment/ivory base, deep ink-green text, muted olive accents, and understated antique-brass details.
- **Romantic without clichés:** avoid excessive pink gradients, piles of hearts, glitter, ornate clip art, and overdecorated borders.
- **Image-led:** use a small number of high-quality, consistently art-directed photos rather than many unrelated stock photos.
- **Custom-feeling details:** thin rules, small uppercase labels, subtle botanical/archway line work, editorial section numbering, and refined separators.
- **Legible first:** decorative type is for headings and names; body copy must be readable and high contrast.
- **Motion with restraint:** use small entrance reveals, gentle hover states, and image transitions. The page must still feel complete when animation is disabled.

### 3.3 Suggested visual tokens

Use these as the default theme. Store them centrally so they can be customized.

- Paper / background: `#F7F4EC`
- Warm white surface: `#FFFEFA`
- Deep ink / primary text: `#202A24`
- Muted olive: `#737F68`
- Light sage: `#DCE1D5`
- Antique brass accent: `#A88753`
- Body copy: `#545A52`
- Fine borders: `#DCD8CD`

Use brass as a small accent, not as body text on light backgrounds. All text and controls must maintain sufficient contrast.

### 3.4 Typography

- Display/names: expressive, high-contrast editorial serif such as Cormorant Garamond or a comparable available serif.
- Body/UI: clean sans serif such as Manrope, Inter, or a comparable available sans serif.
- Use font weights and sizes intentionally. Names can be dramatically large on desktop but must wrap gracefully on mobile.
- Do not block the app from building if a remote font provider is unavailable; provide robust local/system fallbacks.

### 3.5 Layout and shape language

- Desktop content width: approximately 1120–1240 px for main sections, with some full-bleed imagery.
- Reading width: keep long paragraphs around 60–75 characters per line.
- Cards: use mostly square or subtly rounded corners; avoid every section being a rounded card.
- Buttons: elegant rectangular or softly rounded controls with clear focus and pressed states.
- Use whitespace and thin rules to separate content before resorting to backgrounds or cards.
- Mobile horizontal padding should remain comfortable without wasting scarce space.

### 3.6 Do not use

- Generic SaaS-style hero layouts or a wall of identical cards.
- Excessive glassmorphism, neon gradients, huge shadows, or unnecessary floating blobs.
- Low-resolution, stretched, duplicated, or semantically unrelated images.
- Tiny script fonts for essential information.
- Auto-playing audio, forced music, or intrusive animation.
- A desktop design merely scaled down without reorganizing the content for mobile.

---

## 4. Information architecture and routes

The experience is a wedding microsite with a long-form home page and a separate shareable RSVP route.

### 4.1 Required routes

1. `/` — main invitation page.
2. `/rsvp` — standalone RSVP form, so the couple can link directly to it.
3. `/privacy` — concise notice explaining what RSVP information the demo captures and how demo storage works.
4. A useful not-found page for unknown routes.

### 4.2 Global navigation

Desktop navigation should be discreet and editorial: couple monogram or wordmark on the left, a small set of section links in the center/right, and an RSVP action. Navigation items should link to valid section IDs on `/`. On the RSVP route, provide a clear link back to the main invitation.

Suggested links: Our Story, The Celebration, Details, Gallery, FAQ, RSVP. If a section is disabled in configuration, do not show its navigation link.

Mobile navigation must be accessible, compact, easy to close, and usable with keyboard and touch. A simple menu panel is acceptable; do not make users hunt for basic event details.

### 4.3 Section ordering on the home page

Default ordering:
1. Header/navigation
2. Hero / save-the-date
3. Short welcome / invitation note
4. Countdown (only while upcoming, if enabled)
5. Couple story
6. Celebration schedule
7. Venue and directions
8. Gallery
9. Dress guidance (if enabled)
10. Travel and accommodation (if enabled)
11. FAQ (if enabled)
12. Gift information (if enabled)
13. Final RSVP call-to-action
14. Footer

The section order may be configurable in a future iteration; for the first release, it is sufficient to expose feature flags for optional sections and keep the default order above.

---

## 5. Page-by-page requirements

## 5.1 Home page — `/`

### A. Header

**Purpose:** provide understated navigation and a persistent path to RSVP.

Requirements:
- Show a typographic couple monogram or couple names in a compact wordmark.
- Show anchor navigation for enabled sections.
- Include a clearly identifiable RSVP button/link.
- Use a transparent or visually quiet header over the hero where appropriate; after scrolling, transition to a light solid surface with a subtle bottom rule.
- Ensure text remains legible over any image; use a controlled overlay if necessary.
- On mobile, use a menu button with accessible name, expanded state, keyboard support, and correct focus behavior.
- Close the mobile menu after a section is selected.
- All navigation links must work and point to real sections/routes.

### B. Hero / invitation cover

**Purpose:** make an immediate emotional and informational impact.

Required content:
- A small eyebrow label such as “TOGETHER WITH OUR FAMILIES”.
- Couple names as the dominant typographic element.
- A concise invitation line.
- Wedding date and city/location in readable text.
- Primary CTA: “RSVP” linking to `/rsvp`.
- Secondary CTA: “Explore the invitation” scrolling to the story or event details.
- Hero image with a deliberate focal crop and a legible overlay or separate editorial image treatment.
- Decorative fine-line motif or framed monogram; keep ornamentation restrained.

Behavior and layout:
- Desktop: editorial composition with names/text and photography deliberately balanced; avoid a generic centered block over a random background.
- Mobile: retain the names and date above the fold where reasonably possible; use a crop that keeps faces visible and CTA reachable.
- Use descriptive alt text for meaningful images; decorative assets must have empty alt text or be hidden from assistive technology.
- Do not use a meaningless background image as the only way to communicate names/date.

### C. Welcome / invitation note

**Purpose:** create a warm, personal transition from the cover to the details.

Requirements:
- A concise headline and 2–4 sentence editable note.
- Optional signature/initials treatment.
- Content comes from configuration, not hard-coded deep inside the component.
- Keep the prose personal and welcoming; no filler paragraphs.

### D. Countdown

**Purpose:** build anticipation without hiding the essential date/time.

Requirements:
- Derive values from a configured ISO-8601 event date/time that includes its time-zone offset.
- Show days, hours, minutes, and seconds or a simpler day count if that better suits the screen width.
- Update without causing unnecessary re-rendering of the whole page.
- When the date has passed, replace the countdown with a graceful post-event message; never show negative numbers.
- Respect reduced motion and screen-reader usability. Do not announce every second through an assertive live region.
- The full date must remain visible as static text even if JavaScript fails.

### E. Couple story

**Purpose:** communicate who the couple are and add an intimate, editorial narrative.

Requirements:
- Section title such as “A little about us” or an editable alternative.
- 1–3 short paragraphs controlled through configuration.
- Optional relationship milestones, each with a date/label and description.
- Optional supporting photo or detail image.
- Use an asymmetric layout, pull quote, timeline, or overlapping-but-readable image/text arrangement. Avoid turning every detail into a generic card.
- If story content is disabled or empty, hide the section and associated navigation.

### F. Celebration schedule / events

**Purpose:** make every ceremony or celebration easy to understand.

Requirements:
- Support one or many event entries, e.g. welcome gathering, ceremony, reception, brunch, or other culturally specific events.
- Each event record can include: title, short description, start date/time, optional end time, venue name, address, attire note, and optional directions/calendar links.
- Display day/date, local time, event title, and venue clearly. If multiple events occur on different dates, visually group by date.
- Never assume a specific wedding ritual or culture; event names and order come from configuration.
- For each event, provide an “Add to calendar” action that downloads an `.ics` file or opens a valid calendar URL. Prefer a correctly escaped `.ics` file generated from the configured event data.
- Clearly handle timezone values. Do not display ambiguous machine-formatted timestamps to guests.
- If no schedule data is configured, show no schedule section in production mode; in demo mode, use the supplied fictional sample schedule.

### G. Venue and directions

**Purpose:** help guests arrive at the right place.

Requirements:
- Display primary venue name, full readable address, city, and optional venue note.
- Include a primary “Get directions” link using a configured maps URL. If no URL is supplied, construct a safe Google Maps search URL from the encoded venue address.
- Open external maps links in a new tab where appropriate and add safe `rel` attributes.
- Optional “Copy address” action with visible success feedback. If clipboard access is unavailable, reveal the address for manual copying.
- Optional transport/parking notes from configuration.
- Do not embed a large third-party map by default; a static address block and external directions link are faster and more privacy-friendly. An optional map embed can be enabled only when a valid URL is configured.

### H. Photo gallery

**Purpose:** give the invitation personality through a carefully curated set of images.

Requirements:
- Support a configurable array of image records: source, alt text, caption (optional), and focal position (optional).
- Use a visually varied grid/editorial collage, not identical thumbnails in every cell.
- Clicking/tapping an image opens an accessible lightbox with larger image, caption if present, close button, previous/next navigation, and escape-key support.
- Prevent background page scrolling while the lightbox is open; restore focus to the triggering thumbnail on close.
- Support swipe or touch-friendly controls on mobile without making gestures the only way to navigate.
- Lazy-load below-the-fold images and define dimensions/aspect ratio to reduce layout shift.
- If an image fails, show a tasteful fallback and do not collapse the entire grid.
- If the gallery is disabled or has no images, remove the section and its nav link.

### I. Dress guidance (optional)

**Purpose:** communicate attire expectations clearly and courteously.

Requirements:
- Configurable title, description, dress-code name, optional color guidance, and reference image(s).
- Must be possible to disable it completely.
- Avoid telling guests what they must wear beyond the host's configured guidance.
- Do not imply a color restriction unless explicitly configured.

### J. Travel and accommodation (optional)

**Purpose:** assist guests travelling from outside the venue city.

Requirements:
- Optional transport guidance, nearby accommodation suggestions, contact details, and relevant booking links.
- Accommodation entries support name, short note, distance (only if provided), and external link.
- Do not invent hotel names, distances, room prices, or availability.
- Omit this section when there is no configured information.

### K. FAQ (optional)

**Purpose:** answer common guest questions without forcing guests to contact the couple.

Requirements:
- Questions and answers come from configuration.
- Accessible accordion: proper button semantics, `aria-expanded`, associated panel IDs, keyboard operation, and clear focus styles.
- Support multiple items open at once or single-open behavior; choose the simpler accessible option and use it consistently.
- Example topics may include children, plus-ones, parking, timing, gifts, photography, dietary needs, and weather. Only show answers that the couple has configured.
- If no FAQ items exist, hide this section.

### L. Gift information (optional)

**Purpose:** allow the couple to share gift preferences without turning the invitation into a checkout flow.

Requirements:
- Disabled by default unless sample content is deliberately shown in demo mode.
- Support a short note and optional external registry link(s) supplied by the couple.
- Do not request or process payment information.
- Never generate fake donation/payment links.

### M. Final RSVP call-to-action

**Purpose:** provide a clear next step after a guest reads the invitation.

Requirements:
- Brief warm message and a prominent RSVP link to `/rsvp`.
- Display configured RSVP deadline when provided.
- If the RSVP deadline has passed, show a neutral note and the configured contact method, if any; do not falsely claim RSVPs are closed unless that rule is configured.
- Ensure this area has sufficient contrast and looks like part of the same design system rather than a generic banner.

### N. Footer

Requirements:
- Couple names or monogram.
- Wedding date and city.
- “Back to top” link.
- Optional contact link (email or phone) only when configured.
- A small privacy link to `/privacy` when RSVP data is collected.
- No unrelated social icons or broken links.

---

## 5.2 RSVP page — `/rsvp`

### Purpose

Provide a direct, mobile-friendly way for invited guests to confirm or decline attendance.

### Page layout

- Retain the same design system but reduce decorative content so the task is focused.
- Include couple names, wedding date, a brief invitation message, and a visible “Back to invitation” link.
- Present the form in one clear column, with generous spacing and readable labels.
- On submission, replace or supplement the form with a clear, truthful confirmation state.

### Required fields

1. **Full name** — required, text input, reasonable maximum length.
2. **RSVP response** — required choice: “Joyfully accepts” or “Regretfully declines”. Use accessible radio cards or a fieldset with radio inputs.
3. **Email address** — optional by default; validate format if provided.
4. **Phone number** — optional by default; do not impose a country-specific format unless configured.
5. **Number attending** — show only for an attending response; minimum 1 and maximum from `rsvp.maxPartySize`.
6. **Additional guest names** — only show when party size is greater than one; require names only for the additional guests the configuration says must be named.
7. **Dietary requirements** — optional configurable select or text field. Allow “No special requirements” and “Other” where a select is used.
8. **Message to the couple** — optional, short character-limited textarea.
9. **Privacy statement** — explain that information is used to coordinate wedding attendance; link to `/privacy`.

### Form behavior

- Use visible labels; placeholders must not be the only labels.
- Validate required fields on submit and provide inline, field-specific error messages.
- If an attending guest changes to decline, hide the party size and additional guest fields and clear incompatible field values.
- Prevent party size from exceeding the configured limit.
- Preserve valid field values when validation fails.
- Disable duplicate submission while saving and show a visible loading state.
- On success, show a designed confirmation screen with the guest's name and response, plus a link back to the invitation.
- On failure, show a helpful retry message without wiping the entire form.
- If RSVP closure is enabled and the deadline has passed, replace the form with a clear closed-state message and configured contact details if provided.
- No form submission may silently fail.

### RSVP storage modes

Implement a small, typed RSVP service abstraction with two modes:

**Demo mode (required and works without credentials)**
- Store submissions in browser `localStorage` using a clearly named key.
- Use this only to demonstrate the interaction. Do not describe it as delivered to the couple or secure production storage.
- Provide an obvious `demo` setting in the central config and document how to switch modes.
- Catch storage failures and display a safe error; never crash the page.

**Production API mode (integration-ready, not falsely configured)**
- Allow a configured server endpoint via an environment variable such as `NEXT_PUBLIC_RSVP_ENDPOINT` or a suitable server-side variable if the existing architecture supports it.
- Send a documented JSON payload using `POST`; check HTTP status and parse errors safely.
- Use a timeout/abort mechanism where appropriate and provide retry behavior.
- Do not embed secret API keys in client-side code.
- If no real endpoint is configured, remain in demo mode and state that clearly in documentation.
- Do not build an unnecessary mock database or claim durable server-side storage.

### Submission payload

Use a predictable schema similar to the following, with field names documented in code:

```json
{
  "fullName": "Example Guest",
  "response": "attending",
  "email": "guest@example.com",
  "phone": "",
  "partySize": 2,
  "additionalGuestNames": ["Additional Guest"],
  "dietaryRequirements": "Vegetarian",
  "message": "Looking forward to celebrating.",
  "submittedAt": "ISO-8601 timestamp",
  "weddingId": "demo-wedding"
}
```

The schema is illustrative; the implementation must use a consistent typed model and represent an omitted optional value predictably (`null`, empty string, or omitted field—choose and document one policy).

---

## 5.3 Privacy page — `/privacy`

Include a short, readable privacy notice that accurately reflects the implementation.

It must explain:
- Which RSVP fields the visitor may submit.
- Why the data is requested (attendance coordination).
- In demo mode, RSVP data is stored locally in the current browser and is not automatically transmitted to the couple.
- In production API mode, actual retention and handling depend on the configured endpoint/provider, which the site owner must document before using the template with real guests.
- How a guest can contact the couple about their response, if contact details are configured.

Do not make unsupported legal-compliance claims. This is a template notice, not legal advice. Make the wording editable from configuration.

---

## 5.4 Not-found page

- Match the visual style.
- State that the page could not be found.
- Provide a clear link to the main invitation.
- Avoid a generic framework error screen.

---

## 6. Demo content and initial configuration

Use fictional, editable demo data so the generated result feels complete immediately. Clearly identify all names, addresses, dates, events, and contact details as sample content in the configuration and README; do not imply that real people or a real venue are involved.

Suggested demo details:

- Couple names: **Mira & Arman**
- Date: **12 December 2027**
- City: **Hyderabad, India**
- Primary venue: **The Garden Courtyard** (fictional sample venue)
- Theme: Modern Heirloom
- Default language: English
- RSVP mode: demo
- Maximum party size: 2

Use 2–3 fictional schedule entries only as sample content. Avoid culturally prescriptive assumptions: event names, ceremonies, attire guidance, gift details, and guest rules must all be configurable.

### 6.1 Central configuration file

Create one clearly documented typed configuration file, for example `src/config/wedding.ts`, that contains:

- Couple names and monogram.
- Hero title, eyebrow, copy, cover image, and alt text.
- Wedding date/time and explicit timezone.
- City, venue name/address, map directions URL, venue notes, and transport notes.
- Story paragraphs and optional milestones.
- Event schedule array.
- Gallery images and captions.
- Dress guidance content.
- Travel/accommodation content.
- FAQ array.
- Gift/registry note and links.
- RSVP deadline, maximum party size, named-guest rules, and RSVP mode.
- Privacy-page copy and optional contact information.
- Theme token selection or values.
- Boolean feature flags for each optional section.

Keep content and data separate from UI components. Do not make a developer edit the same value in multiple files.

---

## 7. Functional requirements checklist

The following behaviors are required and must be testable:

- Header navigation scrolls to the correct sections and closes the mobile menu.
- RSVP links from the header, hero, final CTA, and footer all route correctly to `/rsvp`.
- Countdown calculates correctly, updates while active, and handles a passed date.
- Event schedule renders from configuration and adapts to one or multiple event dates.
- Calendar action creates a valid event file/link with correct dates and escaping.
- Directions link opens the configured map location.
- Copy-address action works where clipboard access is permitted and has a fallback.
- Gallery opens, navigates, and closes with mouse, touch, and keyboard controls.
- FAQ accordion is fully keyboard accessible.
- RSVP validations cover missing name, missing response, malformed optional email, party-size limits, conditional additional-guest inputs, and decline behavior.
- RSVP demo submissions persist for the current browser and display a truthful success state.
- Failed API submissions do not display success and allow retry.
- Optional sections and their navigation links disappear when disabled.
- External links behave safely and no button is decorative-only.
- User preference for reduced motion is respected.
- The page remains usable when images are slow or fail.

---

## 8. Responsive requirements

Use a mobile-first approach. Verify layouts at approximately these viewport widths:

- Small mobile: 320 px
- Common mobile: 375–430 px
- Tablet: 768 px
- Laptop: 1024–1440 px
- Wide desktop: 1600 px and above

Requirements:
- No horizontal overflow at tested widths.
- Hero names wrap elegantly, never collide with ornaments or controls, and remain readable.
- Navigation transitions to an accessible mobile menu.
- Event schedule is easy to scan; do not force wide tables on mobile.
- Gallery reflows without tiny, unusable thumbnails.
- Buttons and form controls have comfortable touch targets, ideally around 44×44 CSS pixels where applicable.
- RSVP form fields use the available width, show labels and errors without clipping, and work with the on-screen keyboard.
- Modal/lightbox fits within small screens and supports scrolling when needed.
- Decorative graphics must not cover content or cause layout shift.

---

## 9. Accessibility requirements

- Use semantic landmarks and heading levels in a logical order.
- Include a “Skip to content” link.
- All navigation, menus, buttons, accordions, forms, and the gallery must be usable by keyboard.
- Show a visible focus indicator; never remove outlines without providing an equivalent.
- Associate form labels and errors with inputs using appropriate IDs and ARIA attributes.
- Announce meaningful form submission results with a suitable live region; do not announce countdown seconds continuously.
- Provide alt text for meaningful photos and hide decorative graphics from screen readers.
- Ensure color contrast, including button labels and muted body text, is sufficient.
- Respect `prefers-reduced-motion`; do not rely on animation to reveal necessary information.
- Do not autoplay audio or demand permission for unrelated browser features.

---

## 10. Performance, SEO, and reliability

- Use optimized image sizes and modern formats where supported; avoid huge original photographs on mobile.
- Set image dimensions or aspect ratios to reduce layout shift.
- Lazy-load below-the-fold images; prioritize the hero image appropriately.
- Avoid installing large libraries when native CSS or small utilities are sufficient.
- Keep the first screen fast and avoid unnecessary third-party scripts.
- Add a unique page title and useful meta description using couple names/date configurable values.
- Add Open Graph metadata and a configurable social-sharing image so a link shared in messaging apps has a polished preview.
- Include a favicon or monogram icon using available assets or a tasteful local SVG.
- Use canonical metadata only if a real canonical deployment URL is known; do not invent a domain.
- Provide a sensible `robots`/indexing setting in the configuration or document how it should be set for private invitations. Do not assume every invitation should be publicly indexed.
- Handle empty data, missing optional fields, failed images, failed clipboard writes, localStorage errors, and API failures gracefully.
- Do not leak personal data or API secrets into logs, source control, or browser-visible environment variables.

---

## 11. Technical implementation expectations

### 11.1 Preferred stack for a new repository

- Next.js App Router
- React
- TypeScript with strict type checking
- Tailwind CSS (or the existing project's equivalent styling system)
- Lucide React for icons
- CSS transitions or a lightweight motion library, only where useful
- No database required for demo mode

If the repository already uses an established stack, follow that stack where reasonable and document any deviation rather than rewriting the project unnecessarily.

### 11.2 Suggested component map

Use clear, focused components such as:

- `SiteHeader`
- `HeroInvitation`
- `WelcomeNote`
- `WeddingCountdown`
- `CoupleStory`
- `EventSchedule`
- `VenueDetails`
- `PhotoGallery`
- `GalleryLightbox`
- `DressGuidance`
- `TravelAccommodation`
- `FaqAccordion`
- `GiftInformation`
- `RsvpCallToAction`
- `SiteFooter`
- `RsvpForm`
- `RsvpConfirmation`

Names can be adjusted to match repository conventions. Avoid creating a component for every trivial markup fragment; keep the code readable and appropriately modular.

### 11.3 Suggested data/service organization

- Central wedding content and feature flags in a typed configuration file.
- RSVP types and validation rules in a dedicated module.
- RSVP service adapter with `demo` and `api` modes.
- Small utility for date/time formatting and calendar file generation.
- Reusable theme tokens in CSS variables or the existing token mechanism.
- Static assets under `public/images/` or the repository's established public-asset convention.

### 11.4 Code quality

- Use typed interfaces for wedding details, event entries, gallery entries, FAQ entries, RSVP payloads, and service responses.
- Avoid untyped `any` unless there is a documented reason.
- Avoid giant page components that combine every data model, interaction, and design concern.
- Do not duplicate content across components; read it from configuration.
- Use stable keys for mapped lists.
- Validate external URLs before rendering them as links when data is user-editable.
- Do not put secrets in public environment variables.
- Include an `.env.example` only if environment variables are used; it must contain placeholders, never real secrets.

---

## 12. Suggested repository structure

Adapt to the existing repository if one is present. For a new Next.js project, a reasonable starting structure is:

```text
app/
  page.tsx
  rsvp/page.tsx
  privacy/page.tsx
  not-found.tsx
  layout.tsx
components/
  site-header.tsx
  hero-invitation.tsx
  welcome-note.tsx
  wedding-countdown.tsx
  couple-story.tsx
  event-schedule.tsx
  venue-details.tsx
  photo-gallery.tsx
  gallery-lightbox.tsx
  dress-guidance.tsx
  travel-accommodation.tsx
  faq-accordion.tsx
  gift-information.tsx
  rsvp-call-to-action.tsx
  site-footer.tsx
  rsvp-form.tsx
  rsvp-confirmation.tsx
config/
  wedding.ts
lib/
  rsvp-service.ts
  rsvp-validation.ts
  calendar.ts
  date-format.ts
public/
  images/
  icons/
README.md
```

This is a guide, not a reason to force a needless migration. Keep the final structure internally consistent and document any material differences.

---

## 13. Testing and acceptance criteria

The website is not complete until the coding agent has run the available checks and manually verified the major journeys. Add automated tests for date utilities, RSVP validation, and other logic where the project setup supports them.

### 13.1 Build and code checks

- [ ] Dependencies install successfully using the repository's package manager.
- [ ] Development server starts using documented commands.
- [ ] Production build completes without implementation-caused errors.
- [ ] Lint and TypeScript checks pass, if configured.
- [ ] No critical console errors during the main guest journey.
- [ ] No broken internal routes or assets.

### 13.2 Visual and responsive checks

- [ ] The site has a coherent, premium visual identity and does not look like a generic dashboard template.
- [ ] Desktop layout is composed intentionally, with meaningful image crops and visual hierarchy.
- [ ] Mobile layout is purpose-designed, readable, and has no horizontal overflow.
- [ ] Names, dates, event details, and CTAs remain visible and usable on small screens.
- [ ] Optional content can be hidden without leaving awkward gaps or broken navigation.
- [ ] Images have suitable fallbacks and do not cause major layout shifts.

### 13.3 Interaction checks

- [ ] All navigation links and CTAs work.
- [ ] Countdown correctly switches to its post-event state.
- [ ] Calendar actions produce correct event details.
- [ ] Directions link opens the configured address.
- [ ] Gallery lightbox opens, navigates, closes with Escape, and restores focus.
- [ ] FAQ controls work with keyboard and expose expanded/collapsed state.
- [ ] RSVP form validates fields and handles attending/declining conditions correctly.
- [ ] Demo RSVP is stored locally, and UI copy clearly states the demo limitation.
- [ ] API mode never shows false success on a failed request.
- [ ] Privacy page accurately reflects the selected data-storage mode.
- [ ] No visible control is inert or misleading.

### 13.4 Handoff checks

- [ ] All couple-specific content is editable centrally.
- [ ] README explains install, run, build, configuration, assets, RSVP modes, and deployment considerations.
- [ ] No real secrets or invented live integrations are included.
- [ ] Any remaining production setup requirement is listed explicitly.

---

## 14. Required README content

The generated project must include a useful README explaining:

1. What the template is and its current feature set.
2. Prerequisites and installation commands.
3. How to run it locally and create a production build.
4. Exactly which configuration file controls names, dates, events, venue, copy, theme, RSVP options, and optional sections.
5. Where to replace images, how to set alt text, and how to adjust image focal positions.
6. How demo RSVP storage works and why it does not transmit responses to the couple.
7. How to configure a real RSVP endpoint, expected request/response behavior, and where to store any secrets.
8. How to change the deployment URL and social-sharing image.
9. The manual QA checklist for desktop/mobile and RSVP flows.
10. Which features require external configuration before real-world use.

---

## 15. Future enhancements — out of scope for v1

Do not build these unless explicitly requested after v1 is reviewed:

- Couple-facing visual editor or no-code invitation builder.
- Secure invite codes, household-specific invitation links, or password-protected guest lists.
- Persistent hosted RSVP database and couple admin dashboard.
- Automated confirmation emails/SMS/WhatsApp.
- Multilingual content management.
- QR-code generation UI.
- Advanced guest seating, meal allocation, and table plans.
- Payments or gift transactions.
- Analytics dashboard.

The code should be organized well enough that a future developer can add these later without making the initial version needlessly complex.

---

## 16. Final delivery requirements for the coding agent

When done, return:

1. A brief implementation summary.
2. The exact commands to install dependencies and run the project.
3. The exact validation commands executed and their results.
4. A list of files that control the wedding content and visual theme.
5. Any environment variables or external services needed for production.
6. An honest list of any incomplete requirement or blocker; do not claim completion for untested functionality.

**Final acceptance rule:** The result must be a complete, premium, responsive wedding invitation microsite with functional primary interactions and a clearly documented customization path—not merely a landing-page mockup.
