import { Timestamp } from "firebase/firestore";

export type TParticipant = {
  role: "user" | "model";
  parts: {
    text: string;
  }[];
};

export type TFirebaseActionTypes = "INSERT" | "UPDATE" | "DELETE";
export type IFirebaseActionData = {
  email: string;
  date: string;
  time: string;
  guests: number;
  action: TFirebaseActionTypes;
  name: string;
};

export type TReservation = {
  email: string;
  date: Timestamp;
  guests: number;
  name: string;
};
