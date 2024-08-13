import { auth, db } from "@/lib/firebase/config";
import { TReservationTicket } from "@/types";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { sendEmail } from "../nodemailer";
import { generateRandomId } from "../generateRandomId";
import { getCurrentUser } from "../getCurrentUser";

/**
 * Function to create a reservation in Firebase Firestore
 * @param {Object} reservation - The reservation details
 * @param {string} reservation.email - The email of the customer making the reservation
 * @param {string} reservation.date - The date of the reservation
 * @param {number} reservation.guests - Number of guests for the reservation
 * @param {number} reservation.name - Number of guests for the reservation
 */

async function createReservation(reservation: TReservationTicket) {
  try {
    const reservationId = generateRandomId(); // Unique ID for the reservation
    const reservationRef = doc(db, "reservations", reservationId);

    let reservationData: TReservationTicket = {
      email: reservation.email,
      date: reservation.date,
      guests: reservation.guests,
      name: reservation.name,
      status: "pending",
      ticket_id: reservationId,
      created_at: Timestamp.now(),
    };
    // console.log("userrrrrrrrr", await getCurrentUser());
    // console.log("idddddddddddd", auth.currentUser?.uid);
    if (auth.currentUser?.uid)
      reservationData = { ...reservationData, user_id: auth.currentUser.uid };

    await setDoc(reservationRef, reservationData);

    sendEmail(
      reservation.email,
      "Your reservation has been booked",
      "Your reservation ID is: " + reservationId
    );

    console.log("Reservation created successfully:", reservation);
  } catch (error) {
    console.error("Error creating reservation:", error);
    throw error;
  }
  console.log(
    "🚀 ~ createReservation ~ auth.currentUser?.uid:",
    auth.currentUser?.uid
  );
  console.log(
    "🚀 ~ createReservation ~ auth.currentUser?.uid:",
    auth.currentUser?.uid
  );
  console.log(
    "🚀 ~ createReservation ~ auth.currentUser?.uid:",
    auth.currentUser?.uid
  );
}

export default createReservation;
