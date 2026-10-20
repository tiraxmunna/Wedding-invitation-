import React from "react";
import { weddingConfig } from "@/config/wedding";
import { Plane, Car, Hotel, ExternalLink } from "lucide-react";

export default function TravelAccommodation() {
  const { travel } = weddingConfig;

  if (!travel.enabled) return null;

  return (
    <section
      id="travel"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFEFA] border-y border-[#DCD8CD] relative"
      aria-label="Travel and Accommodation"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#737F68] font-medium">
            Visiting Hyderabad
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202A24] font-normal tracking-tight">
            Travel &amp; Accommodation
          </h2>
          <p className="text-sm sm:text-base text-[#545A52] font-light">
            Helpful guidance for our out-of-town guests traveling to celebrate with us.
          </p>
          <div className="w-12 h-px bg-[#A88753] mx-auto mt-4" />
        </div>

        {/* Airport & Transit info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#F7F4EC] border border-[#DCD8CD] p-6 rounded-xs shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#202A24]">
              <Plane className="w-5 h-5 text-[#A88753]" />
              <h3 className="font-serif text-xl font-medium">Airport Arrival</h3>
            </div>
            <p className="text-sm text-[#545A52] leading-relaxed font-light">
              {travel.airportInfo}
            </p>
          </div>

          <div className="bg-[#F7F4EC] border border-[#DCD8CD] p-6 rounded-xs shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#202A24]">
              <Car className="w-5 h-5 text-[#A88753]" />
              <h3 className="font-serif text-xl font-medium">City Transport</h3>
            </div>
            <p className="text-sm text-[#545A52] leading-relaxed font-light">
              {travel.transportInfo}
            </p>
          </div>
        </div>

        {/* Accommodations List */}
        {travel.accommodations && travel.accommodations.length > 0 && (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-[#202A24] font-medium text-center">
              Recommended Accommodations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {travel.accommodations.map((hotel, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F4EC] border border-[#DCD8CD] p-6 rounded-xs shadow-xs flex flex-col justify-between space-y-4 hover:border-[#A88753]/60 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-[#A88753] font-medium uppercase tracking-wider">
                      <Hotel className="w-3.5 h-3.5" />
                      <span>{hotel.distance || "Nearby Hotel"}</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-[#202A24]">
                      {hotel.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#545A52] font-light leading-relaxed">
                      {hotel.note}
                    </p>
                  </div>

                  {hotel.bookingUrl && (
                    <a
                      href={hotel.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#202A24] hover:text-[#A88753] uppercase tracking-wider transition-colors pt-2 border-t border-[#ECE8DD]"
                    >
                      <span>Visit Hotel Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
