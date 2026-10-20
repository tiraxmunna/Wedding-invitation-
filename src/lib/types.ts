export type RsvpMode = "demo" | "api";

export interface ScheduleEvent {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  startDateTime: string; // ISO 8601 with timezone, e.g. 2027-12-12T17:00:00+05:30
  endDateTime?: string;
  venueName: string;
  venueAddress: string;
  attire?: string;
  mapUrl?: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  aspect?: "portrait" | "landscape" | "square";
}

export interface PaletteColor {
  name: string;
  hex: string;
  textDark?: boolean;
}

export interface DressGuidanceConfig {
  enabled: boolean;
  title: string;
  dressCode: string;
  description: string;
  palette: PaletteColor[];
  notes?: string;
}

export interface AccommodationOption {
  name: string;
  note: string;
  distance?: string;
  bookingUrl?: string;
  phone?: string;
}

export interface TravelAccommodationConfig {
  enabled: boolean;
  airportInfo: string;
  transportInfo: string;
  accommodations: AccommodationOption[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface RegistryItem {
  name: string;
  url: string;
  note?: string;
}

export interface GiftInformationConfig {
  enabled: boolean;
  title: string;
  message: string;
  registries?: RegistryItem[];
}

export interface RsvpSettings {
  enabled: boolean;
  mode: RsvpMode;
  apiEndpoint?: string;
  deadlineIso: string;
  deadlineFormatted: string;
  maxPartySize: number;
  requireGuestNamesIfAttending: boolean;
  dietaryOptions: string[];
  contactEmail?: string;
}

export interface MusicConfig {
  enabled: boolean;
  audioSrc?: string;
  trackTitle?: string;
}

export interface WeddingConfig {
  weddingId: string;
  couple: {
    partnerOne: string;
    partnerTwo: string;
    combinedNames: string;
    monogram: string;
    eyebrow: string;
    invitationLine: string;
  };
  event: {
    mainDateIso: string; // 2027-12-12T17:00:00+05:30
    dateFormatted: string;
    timeFormatted: string;
    city: string;
    country: string;
    timezone: string;
    virtualAttendanceUrl?: string;
  };
  venue: {
    name: string;
    address: string;
    cityStateZip: string;
    mapsUrl: string;
    embedMapUrl?: string;
    venueNotes: string;
    parkingNotes: string;
  };
  welcomeNote: {
    headline: string;
    paragraphs: string[];
    signature: string;
  };
  story: {
    enabled: boolean;
    headline: string;
    paragraphs: string[];
    pullQuote?: string;
    milestones: StoryMilestone[];
  };
  schedule: {
    enabled: boolean;
    headline: string;
    intro: string;
    events: ScheduleEvent[];
  };
  gallery: {
    enabled: boolean;
    headline: string;
    intro: string;
    photos: GalleryPhoto[];
  };
  dressGuidance: DressGuidanceConfig;
  travel: TravelAccommodationConfig;
  faq: {
    enabled: boolean;
    headline: string;
    intro: string;
    items: FaqItem[];
  };
  gifts: GiftInformationConfig;
  rsvp: RsvpSettings;
  music?: MusicConfig;
  privacy: {
    title: string;
    lastUpdated: string;
    demoStorageNotice: string;
    dataUsageNotice: string;
    retentionNotice: string;
  };
  meta: {
    title: string;
    description: string;
    ogImage: string;
    canonicalUrl?: string;
    allowRobots: boolean;
  };
}

export type RsvpResponseValue = "attending" | "declined";

export interface RsvpPayload {
  weddingId: string;
  fullName: string;
  response: RsvpResponseValue;
  email?: string;
  phone?: string;
  partySize: number;
  additionalGuestNames?: string[];
  dietaryRequirements?: string;
  dietaryNotes?: string;
  message?: string;
  submittedAt: string;
}

export interface RsvpFormErrors {
  fullName?: string;
  response?: string;
  email?: string;
  phone?: string;
  partySize?: string;
  additionalGuestNames?: string[];
  dietaryRequirements?: string;
  general?: string;
}

export interface RsvpSubmissionResult {
  success: boolean;
  mode: RsvpMode;
  message: string;
  payload?: RsvpPayload;
}
