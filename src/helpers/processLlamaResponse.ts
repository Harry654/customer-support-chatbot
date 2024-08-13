import { IFirebaseActionData, TReservationTicket } from "@/types";
import createReservation from "./firebase/createReservation";
import { convertToFirebaseTimestamp } from "./firebase/convertToFirebaseTimestamp";
import { Timestamp } from "firebase/firestore";

export async function processLlamaResponse(responseText: string) {
  // Regular expression to match the REQUIRES_FIREBASE_ACTION pattern
  const actionPattern = /REQUIRES_FIREBASE_ACTION\s+({.*?})/;
  const match = responseText.match(actionPattern);

  if (match) {
    // Extract the JSON data
    const jsonData = JSON.parse(match[1]);

    // Call the function to handle the Firebase action
    await handleFirebaseAction(jsonData);

    // Remove the action part from the response text
    const cleanResponse = responseText.replace(actionPattern, "").trim();

    // Return the clean response for the user
    return cleanResponse;
  }

  // If no action is required, return the original response
  return responseText;
}

// Function to handle the Firebase action
async function handleFirebaseAction(actionData: IFirebaseActionData) {
  switch (actionData.action) {
    case "INSERT":
      const firebaseTimestamp = convertToFirebaseTimestamp(
        actionData.date,
        actionData.time
      );

      const data: TReservationTicket = {
        email: actionData.email,
        date: firebaseTimestamp,
        guests: actionData.guests,
        name: actionData.name,
        status: "pending",
        ticket_id: "",
        created_at: Timestamp.now(),
      };
      // Call your function to insert data into Firebase
      createReservation(data);
      break;
    // Add more cases if you have other actions
    default:
      console.log("Unknown action:", actionData.action);
  }
}
