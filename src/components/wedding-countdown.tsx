"use client";

import React, { useState, useEffect } from "react";
import { calculateCountdown, CountdownValues } from "@/lib/date-format";
import { weddingConfig } from "@/config/wedding";
import { CalendarHeart } from "lucide-react";

export default function WeddingCountdown() {
  const { event } = weddingConfig;
  const [countdown, setCountdown] = useState<CountdownValues | null>(null);

  useEffect(() => {
    // Initial calculation
    setCountdown(calculateCountdown(event.mainDateIso));

    const interval = setInterval(() => {
      setCountdown(calculateCountdown(event.mainDateIso));
    }, 1000);

    return () => clearInterval(interval);
  }, [event.mainDateIso]);

  return (
    <section
      className="py-12 sm:py-16 px-4 sm:px-6 bg-[#F7F4EC] border-b border-[#DCD8CD]"
      aria-label="Wedding Countdown"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] text-[#737F68] font-medium">
          <CalendarHeart className="w-4 h-4 text-[#A88753]" />
          <span>Counting the moments until our vows</span>
        </div>

        {/* Static readable date for accessibility and no-JS fallback */}
        <p className="sr-only">
          Wedding celebration on {event.dateFormatted} in {event.city}.
        </p>

        {countdown === null ? (
          // Initial server render placeholder matching dimensions
          <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg mx-auto mt-6">
            {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
              <div
                key={label}
                className="bg-[#FFFEFA] border border-[#DCD8CD] p-3 sm:p-5 rounded-xs shadow-xs"
              >
                <div className="font-serif text-2xl sm:text-4xl text-[#202A24] font-medium">
                  --
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#737F68] mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        ) : countdown.isPast ? (
          <div className="mt-4 p-6 bg-[#FFFEFA] border border-[#A88753]/50 rounded-xs max-w-lg mx-auto shadow-xs">
            <h3 className="font-serif text-2xl text-[#202A24] font-medium">
              We Are Married!
            </h3>
            <p className="text-sm text-[#545A52] mt-2">
              Thank you to all who celebrated with us on {event.dateFormatted}.
            </p>
          </div>
        ) : (
          <div
            className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg mx-auto mt-6"
            aria-label={`${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes until the celebration`}
          >
            <div className="bg-[#FFFEFA] border border-[#DCD8CD] p-3 sm:p-5 rounded-xs shadow-xs transition-transform hover:-translate-y-0.5">
              <span className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#202A24] font-medium block">
                {countdown.days}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#737F68] mt-1 block">
                Days
              </span>
            </div>

            <div className="bg-[#FFFEFA] border border-[#DCD8CD] p-3 sm:p-5 rounded-xs shadow-xs transition-transform hover:-translate-y-0.5">
              <span className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#202A24] font-medium block">
                {String(countdown.hours).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#737F68] mt-1 block">
                Hours
              </span>
            </div>

            <div className="bg-[#FFFEFA] border border-[#DCD8CD] p-3 sm:p-5 rounded-xs shadow-xs transition-transform hover:-translate-y-0.5">
              <span className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#202A24] font-medium block">
                {String(countdown.minutes).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#737F68] mt-1 block">
                Minutes
              </span>
            </div>

            <div className="bg-[#FFFEFA] border border-[#DCD8CD] p-3 sm:p-5 rounded-xs shadow-xs transition-transform hover:-translate-y-0.5">
              <span className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#A88753] font-medium block">
                {String(countdown.seconds).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#737F68] mt-1 block">
                Seconds
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
