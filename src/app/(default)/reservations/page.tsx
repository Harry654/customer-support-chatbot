"use client";

import React, { useEffect, useState } from "react";
import ReservationTable from "@/components/ReservationsTable";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { useAuth } from "@/context/AuthContext"; // Assuming useAuth provides the current user
import { TReservationTicket } from "@/types";

function Reservations() {
  const [tableData, setTableData] = useState<TReservationTicket[]>([]);
  const { user } = useAuth(); // Assuming this gives you the logged-in user's info
  const db = getFirestore(); // Initialize Firestore

  useEffect(() => {
    if (!user?.email) return; // Ensure user is logged in

    const reservationsRef = collection(db, "reservations");
    const q = query(
      reservationsRef,
      where("email", "==", user.email),
      orderBy("created_at", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reservationsTickets = querySnapshot.docs.map((doc) => ({
        ticket_id: doc.id,
        name: doc.data().name,
        email: doc.data().email,
        guests: doc.data().guests,
        date: doc.data().date,
        status: doc.data().status,
        created_at: doc.data().created_at,
      }));

      setTableData(reservationsTickets);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [user, db]);

  return (
    <section className="section_padding">
      <div className="container">
        <ReservationTable tableData={tableData} />
      </div>
    </section>
  );
}

export default Reservations;
