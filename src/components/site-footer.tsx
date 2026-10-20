import React from "react";
import Link from "next/link";
import { weddingConfig } from "@/config/wedding";
import { ArrowUp } from "lucide-react";

import WeddingLogo from "./wedding-logo";

export default function SiteFooter() {
  const { couple, event, rsvp } = weddingConfig;

  return (
    <footer
      className="py-16 px-4 sm:px-6 bg-[#FFFEFA] border-t border-[#DCD8CD] text-center text-xs text-[#737F68]"
      aria-label="Footer"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Luxury Crest Badge */}
        <div className="flex justify-center">
          <WeddingLogo size="md" />
        </div>

        <div className="space-y-1">
          <p className="font-serif text-xl sm:text-2xl text-[#202A24] font-medium tracking-wide">
            {couple.combinedNames}
          </p>
          <p className="text-xs text-[#545A52] tracking-wider uppercase">
            {event.dateFormatted} • {event.city}, {event.country}
          </p>
        </div>

        {/* Links: Back to top & Privacy Notice */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#545A52]">
          <a
            href="#"
            className="inline-flex items-center gap-1 hover:text-[#202A24] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>

          <span className="text-[#DCD8CD]">•</span>

          <Link
            href="/privacy"
            className="hover:text-[#202A24] transition-colors underline underline-offset-4"
          >
            Privacy &amp; Data Notice
          </Link>

          {rsvp.contactEmail && (
            <>
              <span className="text-[#DCD8CD]">•</span>
              <a
                href={`mailto:${rsvp.contactEmail}`}
                className="hover:text-[#202A24] transition-colors"
              >
                {rsvp.contactEmail}
              </a>
            </>
          )}
        </div>

        <p className="text-[11px] text-[#737F68]/80 font-light pt-2">
          Designed with love as an editorial wedding microsite template.
        </p>
      </div>
    </footer>
  );
}
