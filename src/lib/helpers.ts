export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInIndia(): Date {
  const now = new Date();

  const offsetItaly = 5.5;
  now.setHours(now.getUTCHours() + offsetItaly);

  return now;
}

export function formatTimeForIndia(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "Asia/Kolkata",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  formattedTime += " IST";

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
