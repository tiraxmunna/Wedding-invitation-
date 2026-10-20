"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { weddingConfig } from "@/config/wedding";
import { Heart, CalendarClock, Mail } from "lucide-react";

export default function RsvpCallToAction() {
  const { rsvp, couple } = weddingConfig;
  const [isPastDeadline, setIsPastDeadline] = useState(false);

  useEffect(() => {
    const deadline = new Date(rsvp.deadlineIso).getTime();
    if (!isNaN(deadline) && Date.now() > deadline) {
      setIsPastDeadline(true);
    }
  }, [rsvp.deadlineIso]);

  if (!rsvp.enabled) return null;

  return (
    <section
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#202A24] text-[#FFFEFA] relative overflow-hidden"
      aria-label="RSVP Invitation Call to Action"
    >
      {/* Decorative fine-line border frame */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-[#A88753]/40 rounded-xs pointer-events-none hidden sm:block" />

      <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#DCE1D5] font-medium">
          <Heart className="w-3.5 h-3.5 fill-current text-[#A88753]" />
          <span>We Hope You Can Celebrate With Us</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FFFEFA] font-normal tracking-tight">
          Will You Join {couple.combinedNames}?
        </h2>

        <p className="text-sm sm:text-base text-[#DCE1D5] font-light leading-relaxed max-w-lg mx-auto">
          Kindly respond by {rsvp.deadlineFormatted} so we can prepare a seat at our table and coordinate all celebration arrangements.
        </p>

        {isPastDeadline ? (
          <div className="p-4 bg-[#FFFEFA]/10 border border-[#A88753]/50 rounded-xs text-sm text-[#DCE1D5] max-w-md mx-auto space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#A88753] font-medium">
              <CalendarClock className="w-4 h-4" />
              <span>RSVP Date Has Passed</span>
            </div>
            <p className="text-xs">
              If your plans have changed or you have questions, please reach out to us directly at{" "}
              {rsvp.contactEmail && (
                <a
                  href={`mailto:${rsvp.contactEmail}`}
                  className="underline hover:text-white"
                >
                  {rsvp.contactEmail}
                </a>
              )}.
            </p>
          </div>
        ) : (
          <div className="pt-4">
            <Link
              href="/rsvp"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xs bg-[#A88753] text-[#FFFEFA] hover:bg-[#917242] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 fill-current text-white" />
              <span>Submit Your RSVP</span>
            </Link>
          </div>
        )}

        {rsvp.contactEmail && (
          <div className="pt-2">
            <a
              href={`mailto:${rsvp.contactEmail}`}
              className="inline-flex items-center gap-1.5 text-xs text-[#737F68] hover:text-[#DCE1D5] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Have questions? Email {rsvp.contactEmail}</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
