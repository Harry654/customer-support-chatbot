import { Timestamp } from "firebase/firestore";

export type TParticipant = {
  role: "user" | "model";
  parts: {
    text: string;
  }[];
};

export type TFirebaseActionTypes = "INSERT" | "UPDATE" | "DELETE";
export type IFirebaseActionData =
  | {
      email: string;
      date: string;
      time: string;
      guests: number;
      action: TFirebaseActionTypes;
    }
  | { [key: string]: any };

export type TReservation = {
  email: string;
  date: Timestamp;
  guests: number;
};
