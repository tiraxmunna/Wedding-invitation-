import React from "react";
import { weddingConfig } from "@/config/wedding";
import { Sparkles } from "lucide-react";

export default function DressGuidance() {
  const { dressGuidance } = weddingConfig;

  if (!dressGuidance.enabled) return null;

  return (
    <section
      id="attire"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F4EC] relative"
      aria-label="Attire and Dress Guidance"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#737F68] font-medium inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#A88753]" />
            <span>Celebratory Attire</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202A24] font-normal tracking-tight">
            {dressGuidance.title}
          </h2>
          <div className="w-12 h-px bg-[#A88753] mx-auto mt-4" />
        </div>

        {/* Content Box */}
        <div className="bg-[#FFFEFA] border border-[#DCD8CD] rounded-xs p-6 sm:p-10 shadow-md space-y-8 text-center max-w-2xl mx-auto relative heirloom-card-inner-border">
          {/* Corner Flourishes */}
          <div className="corner-flourish corner-tl" />
          <div className="corner-flourish corner-tr" />
          <div className="corner-flourish corner-bl" />
          <div className="corner-flourish corner-br" />
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#A88753] font-semibold">
              Dress Code
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#202A24] font-normal">
              {dressGuidance.dressCode}
            </h3>
            <p className="text-sm sm:text-base text-[#545A52] font-light leading-relaxed pt-2">
              {dressGuidance.description}
            </p>
          </div>

          {/* Palette Swatches */}
          {dressGuidance.palette && dressGuidance.palette.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-[#ECE8DD]">
              <span className="text-xs uppercase tracking-widest text-[#737F68] font-medium block">
                Harmonizing Color Palette
              </span>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                {dressGuidance.palette.map((color) => (
                  <div
                    key={color.name}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <span
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black/10 shadow-xs block transition-transform hover:scale-110"
                      style={{ backgroundColor: color.hex }}
                      title={`${color.name} (${color.hex})`}
                    />
                    <span className="text-[11px] text-[#545A52] font-medium">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footwear / Venue Notes */}
          {dressGuidance.notes && (
            <p className="text-xs text-[#737F68] italic border-t border-[#ECE8DD] pt-4">
              Note: {dressGuidance.notes}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
