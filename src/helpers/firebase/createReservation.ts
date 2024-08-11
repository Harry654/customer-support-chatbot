import { db } from "@/lib/firebase/config";
import { TReservation } from "@/types";
import { doc, setDoc } from "firebase/firestore";
import { sendEmail } from "../nodemailer/nodemailer";
import { generateRandomId } from "../generateRandomId";

/**
 * Function to create a reservation in Firebase Firestore
 * @param {Object} reservation - The reservation details
 * @param {string} reservation.email - The email of the customer making the reservation
 * @param {string} reservation.date - The date of the reservation
 * @param {number} reservation.guests - Number of guests for the reservation
 * @param {number} reservation.name - Number of guests for the reservation
 */

async function createReservation(reservation: TReservation) {
  try {
    const reservationId = generateRandomId(); // Unique ID for the reservation
    const reservationRef = doc(db, "reservations", reservationId);

    await setDoc(reservationRef, {
      email: reservation.email,
      date: reservation.date,
      guests: reservation.guests,
      name: reservation.name,
    });

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
}

export default createReservation;
