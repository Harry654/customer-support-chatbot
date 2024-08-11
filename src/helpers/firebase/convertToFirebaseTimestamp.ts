import { Timestamp } from "firebase/firestore";

export function convertToFirebaseTimestamp(dateStr: string, timeStr: string) {
  // Combine the date and time strings
  const dateTimeStr = `${dateStr} ${timeStr}`;

  // Create a JavaScript Date object
  const dateObject = new Date(dateTimeStr);

  // Convert the Date object to a Firebase Timestamp
  const timestamp = Timestamp.fromDate(dateObject);

  return timestamp;
}
