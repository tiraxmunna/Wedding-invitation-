import { WeddingConfig } from "@/lib/types";

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
    virtualAttendanceUrl: "https://www.youtube.com/live/wedding-celebration-demo",
  },
  venue: {
    name: "The Garden Courtyard",
    address: "14 Jubilee Enclave, Hitec City Road",
    cityStateZip: "Hyderabad, Telangana 500081",
    mapsUrl: "https://maps.google.com/?q=The+Garden+Courtyard+Jubilee+Enclave+Hyderabad",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.302148766164!2d78.3752185!3d17.4452148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688ebb5578619e!2sHitec%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    venueNotes:
      "A serene heritage courtyard enclosed by flowering frangipani, reflection pools, and carved stone archways.",
    parkingNotes:
      "Complimentary valet parking is available at the main courtyard gate from 4:00 PM.",
  },
  welcomeNote: {
    headline: "With love & gratitude",
    paragraphs: [
      "We have dreamed of this milestone surrounded by the people who have filled our lives with laughter, warmth, and enduring encouragement.",
      "As we begin this chapter under starlit skies in Hyderabad, having your presence by our side would mean the world to us and our families.",
    ],
    signature: "M & A",
  },
  story: {
    enabled: true,
    headline: "Our Journey Together",
    paragraphs: [
      "Our paths first crossed in the quiet corner of an old bookhouse in Begumpet over a shared debate on South Asian architecture and lukewarm filter coffee. What started as an unplanned conversation quickly turned into weekly Sunday wanderings through historic lanes, shared meals, and countless transatlantic video calls across time zones.",
      "Five years of shared adventures, cherished families, and quiet support have brought us to this sacred promise. We cannot wait to celebrate this beginning with you.",
    ],
    pullQuote: "“In you, I found my quiet haven and my greatest adventure.”",
    milestones: [
      {
        year: "2022",
        title: "First Met in Hyderabad",
        description:
          "An accidental encounter over vintage books and filter coffee blossomed into five hours of effortless conversation.",
      },
      {
        year: "2024",
        title: "The Mountain Trek",
        description:
          "Braving monsoon rains across Himachal Pradesh, realizing we were best travel partners and each other's home.",
      },
      {
        year: "2026",
        title: "The Proposal",
        description:
          "At twilight along the Dal Lake beneath quiet chinar trees, Arman asked, and Mira said yes without hesitation.",
      },
    ],
  },
  schedule: {
    enabled: true,
    headline: "The Celebration Schedule",
    intro:
      "We warmly invite you to join us for our celebration ceremonies. Please find timings, attire guidance, and directions below.",
    events: [
      {
        id: "event-sangeet",
        title: "Welcome Soirée & Sangeet",
        subtitle: "Music, toasts, and joyful dancing",
        description:
          "An intimate evening of melodies, welcome cocktails, heartfelt family toasts, and vibrant musical performances beneath canopy lights.",
        startDateTime: "2027-12-11T19:00:00+05:30",
        endDateTime: "2027-12-11T23:30:00+05:30",
        venueName: "The Pavilion Terrace",
        venueAddress: "14 Jubilee Enclave, Hyderabad",
        attire: "Festive Indian or Cocktail Elegance",
        mapUrl: "https://maps.google.com/?q=The+Garden+Courtyard+Jubilee+Enclave+Hyderabad",
      },
      {
        id: "event-ceremony",
        title: "The Wedding Ceremony",
        subtitle: "The sacred vows and garland exchange",
        description:
          "The traditional ceremony and exchange of vows set against the heritage stone arches and jasmine floral mandap at sunset.",
        startDateTime: "2027-12-12T17:00:00+05:30",
        endDateTime: "2027-12-12T19:30:00+05:30",
        venueName: "The Grand Courtyard Mandap",
        venueAddress: "14 Jubilee Enclave, Hyderabad",
        attire: "Traditional Festive / Formal Chic",
        mapUrl: "https://maps.google.com/?q=The+Garden+Courtyard+Jubilee+Enclave+Hyderabad",
      },
      {
        id: "event-reception",
        title: "Reception & Dinner",
        subtitle: "A starlit banquet and celebration",
        description:
          "A starlit celebratory banquet featuring Hyderabadi culinary classics, live acoustic music, speeches, and dancing.",
        startDateTime: "2027-12-12T20:00:00+05:30",
        endDateTime: "2027-12-13T00:30:00+05:30",
        venueName: "The Lotus Lawn & Ballroom",
        venueAddress: "14 Jubilee Enclave, Hyderabad",
        attire: "Black-Tie Optional / Regal Traditional",
        mapUrl: "https://maps.google.com/?q=The+Garden+Courtyard+Jubilee+Enclave+Hyderabad",
      },
    ],
  },
  gallery: {
    enabled: true,
    headline: "Memories & Moments",
    intro:
      "A glimpse into quiet moments, shared travels, and our favorite memories together.",
    photos: [
      {
        id: "gallery-1",
        src: "/images/gallery-1.jpg",
        alt: "Mira and Arman in formal attire in the sunlit courtyard",
        caption: "A quiet moment together before the celebrations begin.",
        aspect: "portrait",
      },
      {
        id: "gallery-2",
        src: "/images/gallery-2.jpg",
        alt: "Stone archways with floral garlands and warm candle lanterns",
        caption: "The heritage stone arches draped in marigold and white jasmine.",
        aspect: "landscape",
      },
      {
        id: "gallery-3",
        src: "/images/gallery-3.jpg",
        alt: "Close-up of gold heirloom wedding rings on raw hand-pressed paper",
        caption: "Heirloom gold bands on textured hand-pressed botanical paper.",
        aspect: "square",
      },
      {
        id: "gallery-4",
        src: "/images/gallery-4.jpg",
        alt: "Long banquet table decorated with olive leaves, brass candle holders, and linen",
        caption: "Banquet dining set with olive branches and soft candlelight.",
        aspect: "landscape",
      },
      {
        id: "gallery-5",
        src: "/images/gallery-5.jpg",
        alt: "Candid laugh between Mira and Arman under evening string lights",
        caption: "Laughter beneath glowing string lights in the courtyard.",
        aspect: "portrait",
      },
      {
        id: "gallery-6",
        src: "/images/gallery-6.jpg",
        alt: "Courtyard fountain reflection pool at golden hour twilight",
        caption: "Twilight settling over the courtyard reflection pools.",
        aspect: "landscape",
      },
    ],
  },
  dressGuidance: {
    enabled: true,
    title: "Attire & Dress Guidance",
    dressCode: "Festive Indian or Black-Tie Elegance",
    description:
      "We encourage guests to dress in celebratory festive attire. Warm jewel tones, rich earthy pastels, and classic evening elegance will beautifully harmonize with the venue.",
    palette: [
      { name: "Antique Brass", hex: "#A88753", textDark: false },
      { name: "Muted Olive", hex: "#737F68", textDark: false },
      { name: "Light Sage", hex: "#DCE1D5", textDark: true },
      { name: "Ivory Paper", hex: "#F7F4EC", textDark: true },
      { name: "Deep Ink", hex: "#202A24", textDark: false },
    ],
    notes:
      "The ceremony and dinner will take place partially outdoors in open-air courtyard areas. Stiletto heels may sink into stone pathways; block heels or dress wedges are recommended.",
  },
  travel: {
    enabled: true,
    airportInfo:
      "Rajiv Gandhi International Airport (HYD) is approximately 35 minutes via the Outer Ring Road from the venue and hotels.",
    transportInfo:
      "Uber and Ola operate reliably throughout Hyderabad. Pre-booked chauffeured cars can also be arranged through hotel concierges.",
    accommodations: [
      {
        name: "ITC Kohenur, Hyderabad",
        note: "Luxury hotel overlooking Durgam Cheruvu lake. 10 minutes from the venue.",
        distance: "3.2 km from venue",
        bookingUrl: "https://www.itchotels.com",
      },
      {
        name: "Trident Hyderabad",
        note: "Contemporary refined stay close to Hitec City center. 8 minutes from the venue.",
        distance: "2.5 km from venue",
        bookingUrl: "https://www.tridenthotels.com",
      },
      {
        name: "The Westin Mindspace",
        note: "Spacious suites with tranquil pool and spa amenities.",
        distance: "4.0 km from venue",
        bookingUrl: "https://www.marriott.com",
      },
    ],
  },
  faq: {
    enabled: true,
    headline: "Frequently Asked Questions",
    intro:
      "Everything you need to know about attendance, schedule timings, venue logistics, and comforts.",
    items: [
      {
        id: "faq-plus-one",
        question: "Can I bring a plus-one or additional guest?",
        answer:
          "Due to intimate courtyard seating constraints, our invitations indicate the designated party size. Please check your RSVP page where your reserved party limit is pre-allocated.",
      },
      {
        id: "faq-children",
        question: "Are children welcome to attend?",
        answer:
          "We love your little ones dearly! While infants in arms and immediate family children are accounted for, we hope our wedding will also be an evening of relaxation and celebration for parents.",
      },
      {
        id: "faq-parking",
        question: "Is parking available at the venue?",
        answer:
          "Yes, complimentary valet parking is stationed at the main security gate of The Garden Courtyard for all our guests.",
      },
      {
        id: "faq-dietary",
        question: "How do you handle dietary preferences or allergies?",
        answer:
          "Our culinary team has crafted vegetarian, vegan, and gluten-sensitive selections. Please specify any dietary requirements on the RSVP form so we can cater to your needs.",
      },
      {
        id: "faq-gifts",
        question: "What is your preference regarding wedding gifts?",
        answer:
          "Your presence, blessing, and company are the greatest gifts we could ever ask for. For guests who have kindly insisted on gifting, please refer to our gift registry note below.",
      },
    ],
  },
  gifts: {
    enabled: true,
    title: "Gift Registry & Blessings",
    message:
      "Your presence, blessings, and warm wishes are the greatest gifts we could ever ask for. Should you still wish to honor us with a gift, we have curated a small registry for our new home together.",
    registries: [
      {
        name: "Home Keepsake Registry",
        url: "https://example.com/registry/mira-and-arman",
        note: "Curated heirloom home goods, ceramics, and artisan tableware.",
      },
    ],
  },
  rsvp: {
    enabled: true,
    mode: "demo", // 'demo' stores in browser localStorage; 'api' posts to apiEndpoint
    apiEndpoint: process.env.NEXT_PUBLIC_RSVP_ENDPOINT || "",
    deadlineIso: "2027-11-15T23:59:59+05:30",
    deadlineFormatted: "15 November 2027",
    maxPartySize: 2,
    requireGuestNamesIfAttending: true,
    dietaryOptions: [
      "No special dietary requirements",
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Jain Vegetarian",
      "Nut Allergy",
      "Other (please specify in message)",
    ],
    contactEmail: "rsvp@mira-arman-wedding.demo",
  },
  privacy: {
    title: "Privacy & RSVP Information Notice",
    lastUpdated: "October 2026",
    demoStorageNotice:
      "This website is currently operating in Demonstration Mode. Any RSVP information you submit is saved only in your local browser's storage (localStorage) and is not transmitted to external servers or the couple.",
    dataUsageNotice:
      "When configured with a production API endpoint, guest names, attendance response, and dietary requirements are collected exclusively to coordinate seating, guest counts, and catering for the wedding celebration.",
    retentionNotice:
      "No personal information is sold, shared with advertising networks, or retained beyond the scope of wedding event logistics. You can clear your demo response at any time by clearing your browser cache.",
  },
  music: {
    enabled: true,
    trackTitle: "Ceremonial Acoustic Melody",
    audioSrc: "https://actions.google.com/sounds/v1/ambiences/soft_gentle_piano.ogg",
  },
  meta: {
    title: "Mira & Arman — Wedding Celebration & Invitation",
    description:
      "Celebrate the marriage of Mira & Arman on 12 December 2027 in Hyderabad, India. View event schedule, venue directions, and RSVP.",
    ogImage: "/images/og-image.jpg",
    allowRobots: false, // Private wedding invitation default
  },
};
