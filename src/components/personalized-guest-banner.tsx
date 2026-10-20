"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Heart } from "lucide-react";

export default function PersonalizedGuestBanner() {
  const [guestName, setGuestName] = useState<string | null>(null);
  const [partySize, setPartySize] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams(window.location.search);
      const to = params.get("to") || params.get("guest") || params.get("name");
      const party = params.get("party") || params.get("seats");
      if (to) {
        setGuestName(decodeURIComponent(to).trim());
      }
      if (party) {
        const parsed = parseInt(party, 10);
        if (!isNaN(parsed) && parsed > 0) {
          setPartySize(parsed);
        }
      }
    } catch {
      // Ignore URL parsing errors
    }
  }, []);

  if (!guestName) return null;

  return (
    <div className="w-full max-w-lg p-3.5 sm:p-4 rounded-xs bg-[#FFFEFA] border border-[#A88753]/70 shadow-xs text-left animate-in fade-in duration-500 relative">
      <div className="corner-flourish corner-tl !w-2.5 !h-2.5 !top-1 !left-1" />
      <div className="corner-flourish corner-tr !w-2.5 !h-2.5 !top-1 !right-1" />
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A88753]">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Personal Invitation</span>
      </div>
      <p className="font-serif text-lg sm:text-xl text-[#202A24] font-medium mt-1">
        Dear {guestName},
      </p>
      <p className="text-xs sm:text-sm text-[#545A52] font-light mt-0.5 leading-relaxed">
        We would be deeply honored by your presence.{" "}
        {partySize
          ? `We have reserved ${partySize} ${partySize === 1 ? "seat" : "seats"} in your party.`
          : "Please join us in celebrating our wedding day."}
      </p>
    </div>
  );
}
