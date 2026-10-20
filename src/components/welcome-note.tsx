import React from "react";
import { weddingConfig } from "@/config/wedding";
import WeddingLogo from "./wedding-logo";

export default function WelcomeNote() {
  const { welcomeNote } = weddingConfig;

  return (
    <section
      id="welcome"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FFFEFA] border-y border-[#DCD8CD] relative"
      aria-label="Welcome Note"
    >
      <div className="max-w-2xl mx-auto text-center space-y-7 relative p-8 sm:p-12 border border-[#DCD8CD]/70 rounded-xs heirloom-card-inner-border bg-[#F7F4EC]/30">
        {/* Corner Flourishes */}
        <div className="corner-flourish corner-tl" />
        <div className="corner-flourish corner-tr" />
        <div className="corner-flourish corner-bl" />
        <div className="corner-flourish corner-br" />

        {/* Wedding Crest Logo */}
        <div className="flex justify-center">
          <WeddingLogo size="md" />
        </div>

        {/* Botanical Motif Divider */}
        <div className="flex items-center justify-center gap-3">
          <span className="w-10 sm:w-16 h-px bg-[#A88753]/60" />
          <span className="text-[#A88753] text-sm font-serif">❦</span>
          <span className="w-10 sm:w-16 h-px bg-[#A88753]/60" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#202A24] font-normal tracking-tight">
          {welcomeNote.headline}
        </h2>

        <div className="space-y-4 text-base sm:text-lg text-[#545A52] font-light leading-relaxed max-w-lg mx-auto">
          {welcomeNote.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {welcomeNote.signature && (
          <div className="pt-2">
            <span className="font-serif italic text-2xl sm:text-3xl text-[#A88753] font-light">
              — {welcomeNote.signature}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
