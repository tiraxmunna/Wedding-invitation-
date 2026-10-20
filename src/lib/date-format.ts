export interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  totalSeconds: number;
}

export function calculateCountdown(targetDateIso: string): CountdownValues {
  const target = new Date(targetDateIso).getTime();
  const now = Date.now();
  const diff = target - now;

  if (isNaN(target) || diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isPast: true,
      totalSeconds: 0,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    isPast: false,
    totalSeconds,
  };
}

export function formatEventDate(isoString: string): string {
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(d);
  } catch {
    return isoString;
  }
}

export function formatEventTimeRange(startIso: string, endIso?: string): string {
  try {
    const start = new Date(startIso);
    if (isNaN(start.getTime())) return "";

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    const startTime = new Intl.DateTimeFormat("en-US", timeOptions).format(start);

    if (!endIso) {
      return `${startTime} onwards`;
    }

    const end = new Date(endIso);
    if (isNaN(end.getTime())) {
      return `${startTime} onwards`;
    }

    const endTime = new Intl.DateTimeFormat("en-US", timeOptions).format(end);
    return `${startTime} – ${endTime}`;
  } catch {
    return "";
  }
}
