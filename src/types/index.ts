export type TParticipant = {
  role: "user" | "model";
  parts: {
    text: string;
  }[];
};
