import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import RsvpForm from "@/components/rsvp-form";
import { weddingConfig } from "@/config/wedding";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: `RSVP — ${weddingConfig.couple.combinedNames} Wedding`,
  description: `Please respond to your invitation for the wedding of ${weddingConfig.couple.combinedNames} on ${weddingConfig.event.dateFormatted} in ${weddingConfig.event.city}.`,
};

import WeddingLogo from "@/components/wedding-logo";
import PersonalizedGuestBanner from "@/components/personalized-guest-banner";

export default function RsvpPage() {
  const { couple, event } = weddingConfig;

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1 pt-28 pb-24 px-4 sm:px-6 bg-[#F7F4EC]">
        <div className="max-w-2xl mx-auto">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#737F68] hover:text-[#202A24] transition-colors py-1.5 px-3 rounded-xs border border-[#DCD8CD] bg-[#FFFEFA]"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#A88753]" />
              <span>Back to Invitation</span>
            </Link>
          </div>

          {/* Header Card */}
          <div className="text-center space-y-4 mb-10">
            <div className="flex justify-center mb-2">
              <WeddingLogo size="lg" />
            </div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#737F68] font-medium block">
              Celebration Response
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#202A24] font-normal tracking-tight">
              RSVP to {couple.combinedNames}
            </h1>
            <p className="text-sm sm:text-base text-[#545A52] font-light max-w-md mx-auto">
              Please let us know if you will celebrate with us by {weddingConfig.rsvp.deadlineFormatted}.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-[#545A52]">
              <span className="inline-flex items-center gap-1.5 bg-[#FFFEFA] px-3 py-1 rounded-xs border border-[#DCD8CD]">
                <Calendar className="w-3.5 h-3.5 text-[#A88753]" />
                <span>{event.dateFormatted}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#FFFEFA] px-3 py-1 rounded-xs border border-[#DCD8CD]">
                <MapPin className="w-3.5 h-3.5 text-[#A88753]" />
                <span>{event.city}, {event.country}</span>
              </span>
            </div>

            {/* Personalized greeting if opened with ?to=... */}
            <div className="flex justify-center pt-2">
              <PersonalizedGuestBanner />
            </div>
          </div>

          {/* Interactive Form Component */}
          <RsvpForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
