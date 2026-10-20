import { RsvpPayload, RsvpSubmissionResult, RsvpSettings } from "./types";
import { weddingConfig } from "@/config/wedding";

function getLocalStorageKey(): string {
  return `wedding_rsvp_${weddingConfig.weddingId || "demo"}`;
}

export async function submitRsvp(
  payload: RsvpPayload,
  settings: RsvpSettings
): Promise<RsvpSubmissionResult> {
  if (settings.mode === "demo" || !settings.apiEndpoint) {
    try {
      if (typeof window !== "undefined") {
        const key = getLocalStorageKey();
        const existingData = window.localStorage.getItem(key);
        let list: RsvpPayload[] = [];
        if (existingData) {
          try {
            list = JSON.parse(existingData);
            if (!Array.isArray(list)) list = [];
          } catch {
            list = [];
          }
        }
        list.push(payload);
        window.localStorage.setItem(key, JSON.stringify(list));
      }

      return {
        success: true,
        mode: "demo",
        message:
          "Your RSVP has been saved locally in your browser (Demonstration Mode). In a production deployment, this response would be sent securely to the couple's RSVP database.",
        payload,
      };
    } catch (err) {
      console.error("Local storage error:", err);
      return {
        success: false,
        mode: "demo",
        message:
          "Unable to save demo response in local storage. Private browsing or disabled cookies might be preventing local storage access.",
      };
    }
  }

  // Production API mode
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const res = await fetch(settings.apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      const errorText = await res.text().catch(() => "");
      return {
        success: false,
        mode: "api",
        message: `RSVP endpoint returned status ${res.status}: ${
          errorText || "Please check your network and try again."
        }`,
      };
    }

    return {
      success: true,
      mode: "api",
      message: "Your RSVP has been submitted successfully to the couple.",
      payload,
    };
  } catch (error: unknown) {
    const isAbort = error instanceof Error && error.name === "AbortError";
    return {
      success: false,
      mode: "api",
      message: isAbort
        ? "The RSVP submission request timed out. Please check your connection and retry."
        : "Network error submitting your RSVP. Please verify your connection or try again later.",
    };
  }
}

export function getStoredDemoRsvps(): RsvpPayload[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(getLocalStorageKey());
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function clearStoredDemoRsvps(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(getLocalStorageKey());
  } catch (err) {
    console.error("Failed to clear local demo RSVP storage:", err);
  }
}
