"use client";

import React, { useState } from "react";
import Link from "next/link";
import { weddingConfig } from "@/config/wedding";
import { RsvpFormData, validateRsvpForm, sanitizeRsvpPayload } from "@/lib/rsvp-validation";
import { submitRsvp } from "@/lib/rsvp-service";
import { RsvpPayload, RsvpSubmissionResult, RsvpFormErrors } from "@/lib/types";
import RsvpConfirmation from "./rsvp-confirmation";
import {
  Heart,
  User,
  Mail,
  Phone,
  Users,
  Utensils,
  MessageSquare,
  AlertCircle,
  Loader2,
  Info,
} from "lucide-react";

export default function RsvpForm() {
  const { rsvp, couple } = weddingConfig;

  const [formData, setFormData] = useState<RsvpFormData>({
    fullName: "",
    response: "",
    email: "",
    phone: "",
    partySize: 1,
    additionalGuestNames: [""],
    dietaryRequirements: "No special dietary requirements",
    dietaryNotes: "",
    message: "",
  });

  const [errors, setErrors] = useState<RsvpFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<RsvpSubmissionResult | null>(null);
  const [isPastDeadline, setIsPastDeadline] = useState(false);

  React.useEffect(() => {
    const deadline = new Date(rsvp.deadlineIso).getTime();
    if (!isNaN(deadline) && Date.now() > deadline) {
      setIsPastDeadline(true);
    }

    if (typeof window !== "undefined") {
      try {
        const params = new URLSearchParams(window.location.search);
        const to = params.get("to") || params.get("guest") || params.get("name");
        const party = params.get("party") || params.get("seats");
        if (to) {
          const decoded = decodeURIComponent(to).trim();
          setFormData((prev) => ({ ...prev, fullName: decoded }));
        }
        if (party) {
          const parsed = parseInt(party, 10);
          if (!isNaN(parsed) && parsed > 0 && parsed <= rsvp.maxPartySize) {
            setFormData((prev) => {
              const additionalCount = Math.max(0, parsed - 1);
              const currentGuests = [...prev.additionalGuestNames];
              while (currentGuests.length < additionalCount) {
                currentGuests.push("");
              }
              return {
                ...prev,
                partySize: parsed,
                additionalGuestNames: currentGuests.slice(0, additionalCount),
              };
            });
          }
        }
      } catch {
        // Ignore parsing errors
      }
    }
  }, [rsvp.deadlineIso, rsvp.maxPartySize]);

  const handleResponseChange = (value: "attending" | "declined") => {
    setFormData((prev) => ({
      ...prev,
      response: value,
      // Clear attending-specific fields if declined
      partySize: value === "declined" ? 0 : 1,
      additionalGuestNames: value === "declined" ? [] : [""],
    }));
    // Clear response error
    if (errors.response) {
      setErrors((prev) => ({ ...prev, response: undefined }));
    }
  };

  const handlePartySizeChange = (newSize: number) => {
    setFormData((prev) => {
      const additionalCount = Math.max(0, newSize - 1);
      const currentGuests = [...prev.additionalGuestNames];
      while (currentGuests.length < additionalCount) {
        currentGuests.push("");
      }
      return {
        ...prev,
        partySize: newSize,
        additionalGuestNames: currentGuests.slice(0, additionalCount),
      };
    });
  };

  const handleGuestNameChange = (index: number, name: string) => {
    setFormData((prev) => {
      const updated = [...prev.additionalGuestNames];
      updated[index] = name;
      return { ...prev, additionalGuestNames: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } = validateRsvpForm(formData, rsvp);
    if (!isValid) {
      setErrors(validationErrors);
      // Focus first error field for accessibility
      const firstErrorKey = Object.keys(validationErrors)[0];
      const element = document.getElementById(`field-${firstErrorKey}`);
      element?.focus();
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const payload: RsvpPayload = sanitizeRsvpPayload(formData, "mira-arman-2027");
      const result = await submitRsvp(payload, rsvp);
      setIsSubmitting(false);

      if (result.success) {
        setSubmissionResult(result);
      } else {
        setErrors({
          general: result.message || "Failed to submit RSVP. Please try again.",
        });
      }
    } catch {
      setIsSubmitting(false);
      setErrors({
        general: "An unexpected error occurred while saving your RSVP. Please try again.",
      });
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setFormData({
      fullName: "",
      response: "",
      email: "",
      phone: "",
      partySize: 1,
      additionalGuestNames: [""],
      dietaryRequirements: "No special dietary requirements",
      dietaryNotes: "",
      message: "",
    });
    setErrors({});
  };

  // If already submitted successfully, render confirmation screen
  if (submissionResult && submissionResult.payload) {
    return (
      <RsvpConfirmation
        payload={submissionResult.payload}
        mode={submissionResult.mode}
        onReset={handleReset}
      />
    );
  }

  // If RSVP deadline has passed
  if (isPastDeadline) {
    return (
      <div className="bg-[#FFFEFA] border border-[#DCD8CD] rounded-xs p-8 text-center max-w-lg mx-auto shadow-xs space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#202A24]">
          RSVP Submissions Are Closed
        </h2>
        <p className="text-sm text-[#545A52] leading-relaxed">
          The deadline of {rsvp.deadlineFormatted} has passed as we finalize seating and catering with our venue.
        </p>
        {rsvp.contactEmail && (
          <p className="text-xs text-[#737F68]">
            For urgent updates or inquiries, please contact the couple directly at{" "}
            <a
              href={`mailto:${rsvp.contactEmail}`}
              className="text-[#202A24] font-medium underline"
            >
              {rsvp.contactEmail}
            </a>.
          </p>
        )}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block px-5 py-2.5 rounded-xs bg-[#202A24] text-[#FFFEFA] text-xs uppercase tracking-wider font-semibold"
          >
            ← Back to Invitation
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFEFA] border border-[#DCD8CD] rounded-xs p-6 sm:p-10 shadow-md max-w-xl mx-auto space-y-8 relative heirloom-card-inner-border">
      {/* Corner Flourishes */}
      <div className="corner-flourish corner-tl" />
      <div className="corner-flourish corner-tr" />
      <div className="corner-flourish corner-bl" />
      <div className="corner-flourish corner-br" />
      {/* Demo Mode Educational Notice */}
      {rsvp.mode === "demo" && (
        <div className="flex items-start gap-3 p-3.5 bg-[#F7F4EC] border border-[#DCD8CD] rounded-xs text-xs text-[#545A52] leading-relaxed">
          <Info className="w-4 h-4 text-[#A88753] shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-[#202A24]">Demo Storage Mode: </span>
            This interactive form validates and saves your submission in your browser’s localStorage.
          </div>
        </div>
      )}

      {/* General Form Error Banner */}
      {errors.general && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xs text-xs sm:text-sm text-red-700 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{errors.general}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="field-fullName"
            className="block text-xs uppercase tracking-wider font-semibold text-[#202A24]"
          >
            Full Name <span className="text-[#A88753]">*</span>
          </label>
          <div className="relative">
            <input
              id="field-fullName"
              type="text"
              required
              maxLength={100}
              placeholder="e.g. Aisha Rahman"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "error-fullName" : undefined}
              className={`w-full px-4 py-3 rounded-xs border text-sm text-[#202A24] bg-[#FFFEFA] focus:ring-2 focus:ring-[#A88753] transition-colors ${
                errors.fullName ? "border-red-400 bg-red-50/20" : "border-[#DCD8CD]"
              }`}
            />
            <User className="w-4 h-4 text-[#737F68] absolute right-3.5 top-3.5 pointer-events-none" />
          </div>
          {errors.fullName && (
            <p id="error-fullName" className="text-xs text-red-600 font-medium">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Response Choice: Attending or Declined */}
        <div className="space-y-2">
          <label
            id="label-response"
            className="block text-xs uppercase tracking-wider font-semibold text-[#202A24]"
          >
            Will you be attending? <span className="text-[#A88753]">*</span>
          </label>

          <div
            role="radiogroup"
            aria-labelledby="label-response"
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            <button
              type="button"
              role="radio"
              aria-checked={formData.response === "attending"}
              onClick={() => handleResponseChange("attending")}
              className={`p-4 rounded-xs border text-left transition-all flex items-center justify-between ${
                formData.response === "attending"
                  ? "border-[#A88753] bg-[#A88753]/10 ring-1 ring-[#A88753]"
                  : "border-[#DCD8CD] hover:border-[#737F68] bg-[#FFFEFA]"
              }`}
            >
              <div>
                <span className="font-serif text-lg text-[#202A24] font-medium block">
                  Joyfully Accepts
                </span>
                <span className="text-xs text-[#737F68]">I will celebrate in person</span>
              </div>
              <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  formData.response === "attending"
                    ? "border-[#A88753] bg-[#A88753]"
                    : "border-[#DCD8CD]"
                }`}
              >
                {formData.response === "attending" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </span>
            </button>

            <button
              type="button"
              role="radio"
              aria-checked={formData.response === "declined"}
              onClick={() => handleResponseChange("declined")}
              className={`p-4 rounded-xs border text-left transition-all flex items-center justify-between ${
                formData.response === "declined"
                  ? "border-[#202A24] bg-[#202A24]/5 ring-1 ring-[#202A24]"
                  : "border-[#DCD8CD] hover:border-[#737F68] bg-[#FFFEFA]"
              }`}
            >
              <div>
                <span className="font-serif text-lg text-[#202A24] font-medium block">
                  Regretfully Declines
                </span>
                <span className="text-xs text-[#737F68]">Sending love from afar</span>
              </div>
              <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  formData.response === "declined"
                    ? "border-[#202A24] bg-[#202A24]"
                    : "border-[#DCD8CD]"
                }`}
              >
                {formData.response === "declined" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </span>
            </button>
          </div>

          {errors.response && (
            <p className="text-xs text-red-600 font-medium">{errors.response}</p>
          )}
        </div>

        {/* Email & Phone (optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="field-email"
              className="block text-xs uppercase tracking-wider font-semibold text-[#202A24]"
            >
              Email Address <span className="text-xs text-[#737F68] lowercase">(optional)</span>
            </label>
            <div className="relative">
              <input
                id="field-email"
                type="email"
                placeholder="aisha@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "error-email" : undefined}
                className={`w-full px-4 py-3 rounded-xs border text-sm text-[#202A24] bg-[#FFFEFA] focus:ring-2 focus:ring-[#A88753] transition-colors ${
                  errors.email ? "border-red-400 bg-red-50/20" : "border-[#DCD8CD]"
                }`}
              />
              <Mail className="w-4 h-4 text-[#737F68] absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
            {errors.email && (
              <p id="error-email" className="text-xs text-red-600 font-medium">
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="field-phone"
              className="block text-xs uppercase tracking-wider font-semibold text-[#202A24]"
            >
              Phone Number <span className="text-xs text-[#737F68] lowercase">(optional)</span>
            </label>
            <div className="relative">
              <input
                id="field-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                aria-invalid={!!errors.phone}
                className="w-full px-4 py-3 rounded-xs border border-[#DCD8CD] text-sm text-[#202A24] bg-[#FFFEFA] focus:ring-2 focus:ring-[#A88753] transition-colors"
              />
              <Phone className="w-4 h-4 text-[#737F68] absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Conditional Attending Fields */}
        {formData.response === "attending" && (
          <div className="space-y-6 pt-4 border-t border-[#ECE8DD] animate-in fade-in duration-200">
            {/* Party Size */}
            <div className="space-y-1.5">
              <label
                htmlFor="field-partySize"
                className="block text-xs uppercase tracking-wider font-semibold text-[#202A24]"
              >
                Number Attending <span className="text-[#A88753]">*</span>
              </label>
              <div className="relative">
                <select
                  id="field-partySize"
                  value={formData.partySize}
                  onChange={(e) => handlePartySizeChange(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xs border border-[#DCD8CD] text-sm text-[#202A24] bg-[#FFFEFA] focus:ring-2 focus:ring-[#A88753] transition-colors"
                >
                  {Array.from({ length: rsvp.maxPartySize }, (_, i) => i + 1).map(
                    (num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest (Just Me)" : `Guests (Party of ${num})`}
                      </option>
                    )
                  )}
                </select>
                <Users className="w-4 h-4 text-[#737F68] absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
            </div>

            {/* Additional Guest Names if partySize > 1 */}
            {formData.partySize > 1 && (
              <div className="space-y-3 p-4 bg-[#F7F4EC] rounded-xs border border-[#DCD8CD]">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#202A24]">
                  Additional Guest Details
                </h4>
                {Array.from({ length: formData.partySize - 1 }, (_, i) => (
                  <div key={i} className="space-y-1">
                    <label
                      htmlFor={`field-guest-${i}`}
                      className="block text-xs text-[#545A52]"
                    >
                      Guest {i + 2} Full Name <span className="text-[#A88753]">*</span>
                    </label>
                    <input
                      id={`field-guest-${i}`}
                      type="text"
                      required
                      placeholder={`e.g. Guest ${i + 2}'s full name`}
                      value={formData.additionalGuestNames[i] || ""}
                      onChange={(e) => handleGuestNameChange(i, e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xs border border-[#DCD8CD] text-sm text-[#202A24] bg-[#FFFEFA] focus:ring-2 focus:ring-[#A88753]"
                    />
                    {errors.additionalGuestNames && errors.additionalGuestNames[i] && (
                      <p className="text-xs text-red-600 font-medium">
                        {errors.additionalGuestNames[i]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Dietary Requirements */}
            <div className="space-y-1.5">
              <label
                htmlFor="field-dietary"
                className="block text-xs uppercase tracking-wider font-semibold text-[#202A24]"
              >
                Dietary Requirements
              </label>
              <div className="relative">
                <select
                  id="field-dietary"
                  value={formData.dietaryRequirements}
                  onChange={(e) =>
                    setFormData({ ...formData, dietaryRequirements: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xs border border-[#DCD8CD] text-sm text-[#202A24] bg-[#FFFEFA] focus:ring-2 focus:ring-[#A88753]"
                >
                  {rsvp.dietaryOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <Utensils className="w-4 h-4 text-[#737F68] absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
            </div>
          </div>
        )}

        {/* Message to Couple */}
        <div className="space-y-1.5">
          <label
            htmlFor="field-message"
            className="block text-xs uppercase tracking-wider font-semibold text-[#202A24]"
          >
            Warm Note or Blessing for {couple.partnerOne} &amp; {couple.partnerTwo}{" "}
            <span className="text-xs text-[#737F68] lowercase">(optional)</span>
          </label>
          <div className="relative">
            <textarea
              id="field-message"
              rows={3}
              maxLength={500}
              placeholder="Share a favorite memory, blessing, or song request..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xs border border-[#DCD8CD] text-sm text-[#202A24] bg-[#FFFEFA] focus:ring-2 focus:ring-[#A88753] transition-colors resize-none"
            />
            <MessageSquare className="w-4 h-4 text-[#737F68] absolute right-3.5 top-3.5 pointer-events-none" />
          </div>
          <p className="text-[11px] text-[#737F68] text-right">
            {formData.message.length} / 500 characters
          </p>
        </div>

        {/* Privacy Statement */}
        <div className="text-[11px] text-[#737F68] leading-relaxed border-t border-[#ECE8DD] pt-4">
          By submitting this RSVP, you understand that your information is used solely to coordinate wedding attendance. See our{" "}
          <Link
            href="/privacy"
            target="_blank"
            className="text-[#202A24] underline hover:text-[#A88753]"
          >
            Privacy Notice
          </Link>{" "}
          for details on demonstration storage.
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xs bg-[#202A24] text-[#FFFEFA] hover:bg-[#A88753] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#A88753]" />
                <span>Recording Response...</span>
              </>
            ) : (
              <>
                <Heart className="w-4 h-4 fill-current text-[#A88753]" />
                <span>Submit RSVP</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
