import { ScheduleEvent } from "./types";
import { weddingConfig } from "@/config/wedding";

function escapeIcsText(text: string): string {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function toIcsDateUtc(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  const year = date.getUTCFullYear();
  const month = pad(date.getUTCMonth() + 1);
  const day = pad(date.getUTCDate());
  const hours = pad(date.getUTCHours());
  const minutes = pad(date.getUTCMinutes());
  const seconds = pad(date.getUTCSeconds());
  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}

export function generateIcsContent(event: ScheduleEvent, coupleNames: string): string {
  const startDate = new Date(event.startDateTime);
  const endDate = event.endDateTime
    ? new Date(event.endDateTime)
    : new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 hour fallback

  const now = new Date();
  const host = (weddingConfig.weddingId || "wedding-invitation").toLowerCase().replace(/[^a-z0-9-]/g, "");
  const uid = `${event.id}-${startDate.getTime()}@${host}.invitation`;
  const summary = `${coupleNames} — ${event.title}`;
  const description = `${event.description}${
    event.attire ? `\\n\\nAttire: ${event.attire}` : ""
  }`;
  const location = `${event.venueName}, ${event.venueAddress}`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Modern Heirloom Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${toIcsDateUtc(now)}`,
    `DTSTART:${toIcsDateUtc(startDate)}`,
    `DTEND:${toIcsDateUtc(endDate)}`,
    `SUMMARY:${escapeIcsText(summary)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    `LOCATION:${escapeIcsText(location)}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function downloadIcsFile(event: ScheduleEvent, coupleNames: string): void {
  const icsData = generateIcsContent(event, coupleNames);
  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${event.id}.ics`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

export function getGoogleCalendarUrl(event: ScheduleEvent, coupleNames: string): string {
  const startDate = new Date(event.startDateTime);
  const endDate = event.endDateTime
    ? new Date(event.endDateTime)
    : new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

  const startUtc = toIcsDateUtc(startDate);
  const endUtc = toIcsDateUtc(endDate);

  const title = encodeURIComponent(`${coupleNames} — ${event.title}`);
  const details = encodeURIComponent(
    `${event.description}${event.attire ? `\n\nAttire: ${event.attire}` : ""}`
  );
  const location = encodeURIComponent(`${event.venueName}, ${event.venueAddress}`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startUtc}/${endUtc}&details=${details}&location=${location}`;
}
