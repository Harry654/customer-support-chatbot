import { Timestamp } from "firebase/firestore";

export function convertFirebaseTimestampToDate(timestamp: Timestamp) {
  const date = timestamp.toDate();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hour = date.getHours() % 12 || 12; // convert to 12-hour format
  const minute = date.getMinutes().toString().padStart(2, "0");
  const ampm = date.getHours() < 12 ? "am" : "pm"; // determine am/pm
  return `${day}/${month}/${year} at ${hour}:${minute} ${ampm}`;
}
