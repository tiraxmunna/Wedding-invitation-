import { RsvpPayload, RsvpFormErrors, RsvpSettings } from "./types";

export interface RsvpFormData {
  fullName: string;
  response: "attending" | "declined" | "";
  email: string;
  phone: string;
  partySize: number;
  additionalGuestNames: string[];
  dietaryRequirements: string;
  dietaryNotes: string;
  message: string;
}

export function validateRsvpForm(
  data: RsvpFormData,
  settings: RsvpSettings
): { isValid: boolean; errors: RsvpFormErrors } {
  const errors: RsvpFormErrors = {};

  // Full name
  const trimmedName = data.fullName.trim();
  if (!trimmedName) {
    errors.fullName = "Please enter your full name.";
  } else if (trimmedName.length < 2) {
    errors.fullName = "Name must be at least 2 characters long.";
  } else if (trimmedName.length > 100) {
    errors.fullName = "Name cannot exceed 100 characters.";
  }

  // Response
  if (!data.response) {
    errors.response = "Please select whether you will attend or decline.";
  } else if (data.response !== "attending" && data.response !== "declined") {
    errors.response = "Invalid response selection.";
  }

  // Email validation (optional by default, but validated if supplied)
  const trimmedEmail = data.email.trim();
  if (trimmedEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      errors.email = "Please enter a valid email address.";
    }
  }

  // Phone validation (optional)
  const trimmedPhone = data.phone.trim();
  if (trimmedPhone && trimmedPhone.length > 25) {
    errors.phone = "Phone number is too long.";
  }

  // Attending-specific validation
  if (data.response === "attending") {
    if (data.partySize < 1) {
      errors.partySize = "Party size must be at least 1.";
    } else if (data.partySize > settings.maxPartySize) {
      errors.partySize = `Party size cannot exceed ${settings.maxPartySize} guests.`;
    }

    // Additional guests validation
    if (data.partySize > 1 && settings.requireGuestNamesIfAttending) {
      const additionalCount = data.partySize - 1;
      const guestErrors: string[] = [];
      let hasGuestError = false;

      for (let i = 0; i < additionalCount; i++) {
        const guestName = (data.additionalGuestNames[i] || "").trim();
        if (!guestName) {
          guestErrors[i] = `Please enter Guest ${i + 2}'s full name.`;
          hasGuestError = true;
        } else if (guestName.length < 2) {
          guestErrors[i] = "Name must be at least 2 characters.";
          hasGuestError = true;
        } else {
          guestErrors[i] = "";
        }
      }

      if (hasGuestError) {
        errors.additionalGuestNames = guestErrors;
      }
    }
  }

  const isValid = Object.keys(errors).length === 0;
  return { isValid, errors };
}

export function sanitizeRsvpPayload(
  data: RsvpFormData,
  weddingId: string = "mira-arman-2027"
): RsvpPayload {
  const isAttending = data.response === "attending";

  return {
    weddingId,
    fullName: data.fullName.trim(),
    response: data.response as "attending" | "declined",
    email: data.email.trim() || undefined,
    phone: data.phone.trim() || undefined,
    partySize: isAttending ? Number(data.partySize) : 0,
    additionalGuestNames:
      isAttending && data.partySize > 1
        ? data.additionalGuestNames
            .slice(0, data.partySize - 1)
            .map((g) => g.trim())
            .filter(Boolean)
        : undefined,
    dietaryRequirements: isAttending
      ? data.dietaryRequirements.trim() || undefined
      : undefined,
    dietaryNotes: isAttending ? data.dietaryNotes.trim() || undefined : undefined,
    message: data.message.trim() || undefined,
    submittedAt: new Date().toISOString(),
  };
}
