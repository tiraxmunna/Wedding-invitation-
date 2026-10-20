"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RsvpPayload, RsvpMode } from "@/lib/types";
import { weddingConfig } from "@/config/wedding";
import { getStoredDemoRsvps, clearStoredDemoRsvps } from "@/lib/rsvp-service";
import {
  CheckCircle2,
  HeartHandshake,
  ArrowLeft,
  RefreshCw,
  Calendar,
  MapPin,
  Eye,
  Trash2,
  Download,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
} from "lucide-react";

import WeddingLogo from "./wedding-logo";

interface RsvpConfirmationProps {
  payload: RsvpPayload;
  mode: RsvpMode;
  onReset: () => void;
}

export default function RsvpConfirmation({
  payload,
  mode,
  onReset,
}: RsvpConfirmationProps) {
  const isAttending = payload.response === "attending";
  const { couple, event, venue } = weddingConfig;

  // Demo Submissions Viewer state
  const [showSubmissions, setShowSubmissions] = useState(false);
  const [storedList, setStoredList] = useState<RsvpPayload[]>([]);

  useEffect(() => {
    if (mode === "demo") {
      setStoredList(getStoredDemoRsvps());
    }
  }, [mode]);

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all locally stored demo submissions?")) {
      clearStoredDemoRsvps();
      setStoredList([]);
    }
  };

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(storedList, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `wedding_rsvp_demo_submissions.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      {/* Main Celebratory Card */}
      <div className="bg-[#FFFEFA] border border-[#DCD8CD] rounded-xs p-6 sm:p-10 shadow-md text-center space-y-6 relative heirloom-card-inner-border">
        {/* Corner Flourishes */}
        <div className="corner-flourish corner-tl" />
        <div className="corner-flourish corner-tr" />
        <div className="corner-flourish corner-bl" />
        <div className="corner-flourish corner-br" />

        {/* Wedding Logo & Status Badge */}
        <div className="flex flex-col items-center gap-4">
          <WeddingLogo size="md" />
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center ${
              isAttending
                ? "bg-[#DCE1D5] text-[#737F68]"
                : "bg-[#ECE8DD] text-[#545A52]"
            }`}
          >
            {isAttending ? (
              <CheckCircle2 className="w-8 h-8 text-[#737F68]" />
            ) : (
              <HeartHandshake className="w-8 h-8 text-[#A88753]" />
            )}
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A88753] font-semibold">
            RSVP Confirmed
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#202A24] font-normal">
            Thank You, {payload.fullName}!
          </h2>
          <p className="text-sm sm:text-base text-[#545A52] font-light">
            {isAttending
              ? `We are thrilled to celebrate with you! Your party of ${payload.partySize} is confirmed.`
              : "We will miss your presence dearly, but are grateful for your blessings and heartfelt wishes."}
          </p>
        </div>

        {/* Summary Box */}
        <div className="bg-[#F7F4EC] border border-[#DCD8CD] rounded-xs p-4 sm:p-5 text-left text-xs sm:text-sm space-y-3">
          <div className="flex justify-between border-b border-[#ECE8DD] pb-2">
            <span className="text-[#737F68] font-medium">Guest Name:</span>
            <span className="text-[#202A24] font-semibold">{payload.fullName}</span>
          </div>

          <div className="flex justify-between border-b border-[#ECE8DD] pb-2">
            <span className="text-[#737F68] font-medium">Attendance:</span>
            <span
              className={`font-semibold capitalize ${
                isAttending ? "text-emerald-800" : "text-[#A88753]"
              }`}
            >
              {isAttending ? "Joyfully Attending" : "Regretfully Declining"}
            </span>
          </div>

          {isAttending && (
            <>
              <div className="flex justify-between border-b border-[#ECE8DD] pb-2">
                <span className="text-[#737F68] font-medium">Reserved Party Count:</span>
                <span className="text-[#202A24] font-semibold">
                  {payload.partySize} {payload.partySize === 1 ? "Guest" : "Guests"}
                </span>
              </div>

              {payload.additionalGuestNames && payload.additionalGuestNames.length > 0 && (
                <div className="flex justify-between border-b border-[#ECE8DD] pb-2">
                  <span className="text-[#737F68] font-medium">Accompanying Guests:</span>
                  <span className="text-[#202A24] font-semibold text-right">
                    {payload.additionalGuestNames.join(", ")}
                  </span>
                </div>
              )}

              {payload.dietaryRequirements && (
                <div className="flex justify-between border-b border-[#ECE8DD] pb-2">
                  <span className="text-[#737F68] font-medium">Dietary Selection:</span>
                  <span className="text-[#202A24] font-semibold text-right">
                    {payload.dietaryRequirements}
                  </span>
                </div>
              )}
            </>
          )}

          {payload.message && (
            <div className="border-b border-[#ECE8DD] pb-2">
              <span className="text-[#737F68] font-medium block mb-1">Personal Note:</span>
              <p className="text-[#202A24] italic font-serif">“{payload.message}”</p>
            </div>
          )}
        </div>

        {/* Quick Event Summary for Attending Guests */}
        {isAttending && (
          <div className="p-4 bg-[#FFFEFA] border border-[#DCD8CD] rounded-xs text-xs text-[#545A52] space-y-2">
            <div className="flex items-center justify-center gap-2 text-[#202A24] font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#A88753]" />
              <span>{event.dateFormatted}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#737F68]">
              <MapPin className="w-3.5 h-3.5 text-[#A88753]" />
              <span>{venue.name}, {event.city}</span>
            </div>
          </div>
        )}

        {/* Navigation and Edit buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xs bg-[#202A24] text-[#FFFEFA] hover:bg-[#A88753] text-xs uppercase tracking-wider font-semibold transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Invitation</span>
          </Link>

          <button
            type="button"
            onClick={onReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xs border border-[#DCD8CD] bg-[#F7F4EC] text-[#545A52] hover:text-[#202A24] hover:border-[#A88753] text-xs uppercase tracking-wider font-medium transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Edit or Submit Another Response</span>
          </button>
        </div>
      </div>

      {/* Template Demo Tools: Discreet Submissions Drawer for Site Owner / Client */}
      {mode === "demo" && (
        <div className="bg-[#FFFEFA] border border-[#DCD8CD] rounded-xs overflow-hidden shadow-xs">
          <button
            type="button"
            onClick={() => setShowSubmissions(!showSubmissions)}
            className="w-full px-5 py-3.5 flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-[#737F68] hover:text-[#202A24] bg-[#F7F4EC]/60 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#A88753]" />
              <span>Template Demo Submissions ({storedList.length} recorded in browser)</span>
            </div>
            {showSubmissions ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {showSubmissions && (
            <div className="p-5 border-t border-[#DCD8CD] space-y-4 text-xs text-[#545A52]">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#ECE8DD]">
                <span className="font-light">
                  This demo website stores responses in browser <code className="bg-[#F7F4EC] px-1 py-0.5 rounded">localStorage</code>.
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleExportJson}
                    disabled={storedList.length === 0}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFFEFA] border border-[#DCD8CD] rounded-xs hover:border-[#A88753] text-[11px] font-medium disabled:opacity-50"
                  >
                    <Download className="w-3 h-3 text-[#A88753]" />
                    <span>Download JSON</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    disabled={storedList.length === 0}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFFEFA] border border-rose-200 text-rose-700 rounded-xs hover:bg-rose-50 text-[11px] font-medium disabled:opacity-50"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear Submissions</span>
                  </button>
                </div>
              </div>

              {storedList.length === 0 ? (
                <p className="text-center py-4 text-[#737F68] italic">
                  No submissions currently in browser storage.
                </p>
              ) : (
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {storedList.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#F7F4EC] rounded-xs border border-[#DCD8CD] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[#202A24]">{item.fullName}</span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                              item.response === "attending"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-neutral-200 text-neutral-700"
                            }`}
                          >
                            {item.response}
                          </span>
                        </div>
                        <div className="text-[11px] text-[#737F68] mt-0.5">
                          {item.response === "attending" && `Party of ${item.partySize} • `}
                          {item.email || "No email"} • {new Date(item.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                      {item.message && (
                        <p className="text-[11px] text-[#545A52] italic max-w-xs truncate">
                          “{item.message}”
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
