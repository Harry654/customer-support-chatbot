import { Timestamp } from "firebase/firestore";

export type TParticipant = {
  role: "user" | "model";
  parts: {
    text: string;
  }[];
};

export type TFirebaseActionTypes = "INSERT" | "UPDATE" | "DELETE";
export type IFirebaseActionData = {
  user_id?: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  action: TFirebaseActionTypes;
  name: string;
};

export type TReservationTicket = {
  ticket_id: string;
  user_id?: string;
  name: string;
  email: string;
  guests: number;
  date: Timestamp;
  status: "pending" | "confirmed";
  created_at: Timestamp;
};
