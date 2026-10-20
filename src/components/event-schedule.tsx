"use client";

import React from "react";
import { weddingConfig } from "@/config/wedding";
import { formatEventDate, formatEventTimeRange } from "@/lib/date-format";
import { downloadIcsFile, getGoogleCalendarUrl } from "@/lib/calendar";
import { Calendar, Clock, MapPin, Sparkles, Download, ExternalLink } from "lucide-react";

export default function EventSchedule() {
  const { schedule, couple } = weddingConfig;

  if (!schedule.enabled || schedule.events.length === 0) return null;

  // Group events by date
  const eventsByDate = schedule.events.reduce<Record<string, typeof schedule.events>>(
    (acc, event) => {
      const dateKey = formatEventDate(event.startDateTime);
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(event);
      return acc;
    },
    {}
  );

  return (
    <section
      id="schedule"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFFEFA] border-y border-[#DCD8CD] relative"
      aria-label="Celebration Schedule"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#737F68] font-medium">
            Join Our Festivities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202A24] font-normal tracking-tight">
            {schedule.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#545A52] font-light">
            {schedule.intro}
          </p>
          <div className="w-12 h-px bg-[#A88753] mx-auto mt-4" />
        </div>

        {/* Schedule List Grouped by Date */}
        <div className="space-y-12">
          {Object.entries(eventsByDate).map(([dateLabel, events]) => (
            <div key={dateLabel} className="space-y-6">
              {/* Date Header Pill */}
              <div className="flex items-center gap-4">
                <span className="font-serif text-xl sm:text-2xl text-[#202A24] font-medium">
                  {dateLabel}
                </span>
                <span className="flex-1 h-px bg-[#DCD8CD]" />
              </div>

              {/* Event Cards */}
              <div className="grid grid-cols-1 gap-6">
                {events.map((event) => {
                  const timeFormatted = formatEventTimeRange(
                    event.startDateTime,
                    event.endDateTime
                  );
                  const googleCalUrl = getGoogleCalendarUrl(event, couple.combinedNames);

                  return (
                    <article
                      key={event.id}
                      className="bg-[#FFFEFA] p-6 sm:p-8 rounded-xs border border-[#DCD8CD] shadow-sm space-y-5 transition-all hover:border-[#A88753] relative heirloom-card-inner-border"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-2xl sm:text-3xl text-[#202A24] font-normal">
                            {event.title}
                          </h3>
                          {event.subtitle && (
                            <p className="text-xs sm:text-sm text-[#737F68] italic mt-0.5">
                              {event.subtitle}
                            </p>
                          )}
                        </div>

                        {/* Timing badge */}
                        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#202A24] bg-[#FFFEFA] px-3.5 py-1.5 border border-[#DCD8CD] rounded-xs shrink-0 self-start">
                          <Clock className="w-4 h-4 text-[#A88753]" />
                          <span>{timeFormatted}</span>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-[#545A52] leading-relaxed">
                        {event.description}
                      </p>

                      {/* Venue and Attire Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#DCD8CD]/80 text-xs sm:text-sm text-[#545A52]">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-[#A88753] mt-0.5 shrink-0" />
                          <div>
                            <span className="font-medium text-[#202A24] block">
                              {event.venueName}
                            </span>
                            <span className="text-xs text-[#737F68]">
                              {event.venueAddress}
                            </span>
                          </div>
                        </div>

                        {event.attire && (
                          <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-[#A88753] mt-0.5 shrink-0" />
                            <div>
                              <span className="font-medium text-[#202A24] block">
                                Attire
                              </span>
                              <span className="text-xs text-[#737F68]">
                                {event.attire}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Actions: Add to calendar & Google Calendar */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => downloadIcsFile(event, couple.combinedNames)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-xs bg-[#FFFEFA] text-[#202A24] border border-[#DCD8CD] hover:border-[#A88753] hover:text-[#A88753] transition-colors shadow-2xs"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download .ics Calendar</span>
                        </button>

                        <a
                          href={googleCalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium text-[#737F68] hover:text-[#202A24] transition-colors"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Google Calendar</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
