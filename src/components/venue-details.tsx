"use client";

import React, { useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { MapPin, Navigation, Copy, Check, Car, Info } from "lucide-react";

export default function VenueDetails() {
  const { venue, event } = weddingConfig;
  const [copied, setCopied] = useState(false);

  const fullAddressText = `${venue.name}, ${venue.address}, ${venue.cityStateZip}, ${event.country}`;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fullAddressText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } else {
        // Fallback prompt for browsers blocking clipboard API
        window.prompt("Copy address below:", fullAddressText);
      }
    } catch {
      window.prompt("Copy address below:", fullAddressText);
    }
  };

  return (
    <section
      id="venue"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F4EC] relative"
      aria-label="Venue and Directions"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#737F68] font-medium">
            Where We Celebrate
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202A24] font-normal tracking-tight">
            The Venue &amp; Directions
          </h2>
          <div className="w-12 h-px bg-[#A88753] mx-auto mt-4" />
        </div>

        {/* Main Venue Card */}
        <div className="bg-[#FFFEFA] border border-[#DCD8CD] rounded-xs p-6 sm:p-10 shadow-md space-y-8 relative heirloom-card-inner-border">
          {/* Corner Flourishes */}
          <div className="corner-flourish corner-tl" />
          <div className="corner-flourish corner-tr" />
          <div className="corner-flourish corner-bl" />
          <div className="corner-flourish corner-br" />
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-[#ECE8DD] pb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#A88753] font-semibold">
                <MapPin className="w-4 h-4" />
                <span>Primary Celebration Setting</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#202A24] font-medium">
                {venue.name}
              </h3>
              <p className="text-base text-[#545A52] font-light max-w-md">
                {venue.address}
                <br />
                {venue.cityStateZip}, {event.country}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#202A24] text-[#FFFEFA] hover:bg-[#A88753] text-xs uppercase tracking-wider font-semibold transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#A88753]" />
                <span>Get Directions</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xs border border-[#DCD8CD] bg-[#F7F4EC] text-[#202A24] hover:border-[#A88753] text-xs uppercase tracking-wider font-medium transition-colors"
                aria-label="Copy venue address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#737F68]" />
                    <span className="text-[#737F68]">Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#737F68]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Description and Parking Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#545A52]">
            <div className="space-y-2 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#A88753] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-[#202A24] text-base mb-1">
                  About the Grounds
                </h4>
                <p className="leading-relaxed font-light">{venue.venueNotes}</p>
              </div>
            </div>

            <div className="space-y-2 flex items-start gap-3">
              <Car className="w-5 h-5 text-[#A88753] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-[#202A24] text-base mb-1">
                  Valet &amp; Arrival
                </h4>
                <p className="leading-relaxed font-light">{venue.parkingNotes}</p>
              </div>
            </div>
          </div>

          {/* Interactive Map Embed */}
          {venue.embedMapUrl && (
            <div className="pt-2">
              <div className="relative w-full h-64 sm:h-80 rounded-xs overflow-hidden border border-[#DCD8CD] shadow-inner bg-[#F7F4EC]">
                <iframe
                  title="Interactive Venue Location Map"
                  src={venue.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-90"
                />
              </div>
            </div>
          )}

          {/* Virtual Attendance Banner */}
          {event.virtualAttendanceUrl && (
            <div className="mt-4 p-4 rounded-xs bg-[#F7F4EC] border border-[#A88753]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-[#202A24]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-medium">Virtual Celebration Stream Available</span>
              </div>
              <a
                href={event.virtualAttendanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#202A24] text-[#FFFEFA] hover:bg-[#A88753] text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Watch Live Broadcast</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
