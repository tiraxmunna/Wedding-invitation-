import React from "react";
import { weddingConfig } from "@/config/wedding";
import { Gift, ExternalLink } from "lucide-react";

export default function GiftInformation() {
  const { gifts } = weddingConfig;

  if (!gifts.enabled) return null;

  return (
    <section
      id="gifts"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFEFA] border-b border-[#DCD8CD] relative"
      aria-label="Gift Registry Information"
    >
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#737F68] font-medium">
          <Gift className="w-4 h-4 text-[#A88753]" />
          <span>Blessings &amp; Gifts</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#202A24] font-normal tracking-tight">
          {gifts.title}
        </h2>

        <p className="text-sm sm:text-base text-[#545A52] font-light leading-relaxed">
          {gifts.message}
        </p>

        {gifts.registries && gifts.registries.length > 0 && (
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            {gifts.registries.map((reg, idx) => (
              <a
                key={idx}
                href={reg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs border border-[#A88753] bg-[#F7F4EC] text-[#202A24] hover:bg-[#A88753] hover:text-[#FFFEFA] text-xs uppercase tracking-wider font-semibold transition-all shadow-2xs"
              >
                <span>{reg.name}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
