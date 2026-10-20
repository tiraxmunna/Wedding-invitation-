import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Calendar, MapPin, Heart } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import WeddingLogo from "./wedding-logo";
import PersonalizedGuestBanner from "./personalized-guest-banner";
import { getAssetPath } from "@/lib/asset-path";

export default function HeroInvitation() {
  const { couple, event } = weddingConfig;

  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F7F4EC]"
      aria-label="Invitation Cover"
    >
      {/* Outer Luxury Double-Line Border Framing (safely positioned below the fixed navbar) */}
      <div className="absolute top-24 sm:top-26 md:top-28 bottom-5 sm:bottom-7 md:bottom-9 inset-x-4 sm:inset-x-8 md:inset-x-12 pointer-events-none rounded-xs hidden sm:block">
        {/* Outer border line */}
        <div className="absolute inset-0 border border-[#DCD8CD] rounded-xs" />
        {/* Inner delicate gold hairline */}
        <div className="absolute inset-1.5 sm:inset-2 border border-[#A88753]/30 rounded-xs" />
        {/* Ornate Corner Flourishes placed neatly inside this frame */}
        <div className="corner-flourish corner-tl" />
        <div className="corner-flourish corner-tr" />
        <div className="corner-flourish corner-bl" />
        <div className="corner-flourish corner-br" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Bespoke Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-7 pt-2 lg:pt-0">
          {/* Wedding Crest & Eyebrow Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <WeddingLogo size="md" className="shrink-0" />
            <div className="flex items-center gap-2.5">
              <span className="w-6 sm:w-10 h-px bg-[#A88753]/70 hidden sm:block" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.28em] font-medium text-[#737F68]">
                {couple.eyebrow}
              </span>
              <span className="w-6 sm:w-10 h-px bg-[#A88753]/70 hidden sm:block" />
            </div>
          </div>

          {/* Couple Names - Luxury Serif Hierarchy */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#202A24] leading-[1.03]">
              <span className="block drop-shadow-2xs">{couple.partnerOne}</span>
              <span className="font-serif italic font-light text-3xl sm:text-4xl md:text-5xl text-[#A88753] my-1 sm:my-2 block">
                &amp;
              </span>
              <span className="block drop-shadow-2xs">{couple.partnerTwo}</span>
            </h1>
          </div>

          {/* Invitation Line */}
          <p className="text-base sm:text-lg text-[#545A52] max-w-lg font-light leading-relaxed">
            {couple.invitationLine}
          </p>

          {/* Personalized Guest Greeting Banner if opened with ?to=... */}
          <PersonalizedGuestBanner />

          {/* Date & Location Heirloom Pill Banner */}
          <div className="pt-1 pb-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-[#202A24]">
            <div className="flex items-center gap-2.5 bg-[#FFFEFA] px-4 py-2.5 border border-[#DCD8CD] rounded-xs shadow-xs">
              <Calendar className="w-4 h-4 text-[#A88753]" />
              <span className="font-medium tracking-wide">{event.dateFormatted}</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#FFFEFA] px-4 py-2.5 border border-[#DCD8CD] rounded-xs shadow-xs">
              <MapPin className="w-4 h-4 text-[#A88753]" />
              <span className="font-medium tracking-wide">{event.city}, {event.country}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {weddingConfig.rsvp.enabled && (
              <Link
                href="/rsvp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#202A24] text-[#FFFEFA] hover:bg-[#A88753] text-xs uppercase tracking-[0.22em] font-semibold transition-all shadow-md rounded-xs group transform hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 fill-current text-[#A88753] group-hover:text-white transition-colors" />
                <span>RSVP to Attend</span>
              </Link>
            )}
            <a
              href="#welcome"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#737F68] text-[#202A24] hover:bg-[#FFFEFA] hover:border-[#202A24] text-xs uppercase tracking-[0.2em] font-medium transition-all rounded-xs"
            >
              <span>Explore Invitation</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#737F68]" />
            </a>
          </div>
        </div>

        {/* Right Column: Heirloom Archway Photography with Double Borders */}
        <div className="lg:col-span-5 flex justify-center mt-6 lg:mt-0">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
            {/* Decorative Offset Gold Backdrop Frame */}
            <div className="absolute -inset-2.5 sm:-inset-3 border border-[#A88753]/40 rounded-xs pointer-events-none transform -rotate-1 hidden sm:block" />
            
            {/* Main Arch Photo Card */}
            <div className="relative rounded-xs overflow-hidden shadow-lg bg-[#FFFEFA] p-3 sm:p-4 border border-[#DCD8CD]">
              {/* Inner Double Hairline Line */}
              <div className="relative p-1.5 border border-[#A88753]/25 rounded-xs">
                {/* Archway Image Silhouette */}
                <div className="relative aspect-[3/4] w-full overflow-hidden heirloom-arch bg-[#DCE1D5] shadow-inner">
                  <Image
                    src={getAssetPath("/images/hero.jpg")}
                    alt={`Wedding portrait of ${couple.combinedNames}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                    className="object-cover object-center transition-transform duration-700 hover:scale-103"
                  />
                </div>

                {/* Photo Caption Label with Heirloom Divider */}
                <div className="pt-4 pb-2 text-center space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-4 h-px bg-[#A88753]/40" />
                    <span className="text-[#A88753] text-xs">✦</span>
                    <span className="w-4 h-px bg-[#A88753]/40" />
                  </div>
                  <span className="font-serif italic text-sm text-[#737F68] block">
                    {weddingConfig.venue.name} • {event.city}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
