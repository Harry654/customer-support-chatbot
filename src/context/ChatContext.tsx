"use client";

import { Message } from "@aws-sdk/client-bedrock-runtime";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { IFirebaseActionData } from "@/types";
import { auth } from "@/lib/firebase/config";
export const ACTION_PREFIX: string = "REQUIRES_FIREBASE_ACTION";

// Define the context shape
interface ChatContextType {
  messages: Message[];
  updateMessages: (messages: Message[]) => void;
}

// Create the context
const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Create a provider component
export const ChatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const updateMessages = (messages: Message[]) => {
    setMessages(messages);
  };

  useEffect(() => {
    const sampleReservation: IFirebaseActionData = {
      email: "someone@example.com",
      date: "2024-08-12",
      time: "7:00 PM",
      guests: 2,
      name: "John Doe",
      action: "INSERT",
    };

    const getSystemPrompt = () => {
      return `You are a sophisticated and knowledgeable assistant for a fine dining restaurant. Your role is to provide elegant, polite, and detailed responses to customers' inquiries about our menu, wine pairings, reservation options, and special events. Maintain a formal and refined tone throughout the conversation, ensuring the highest level of service. Each time the user attempts to make a reservation, make sure that the customer has provided the following details: DATE OF RESERVATION, TIME OF THE RESERVATION, NUMBER OF GUESTS. Optionally the customer can specify things he/she wants to preorder. If the customer provides any unclear information like a vague date, politely ask them to clarify. In the case of a vague date, ask them for an actual date not just a day of the week. Ask the customer for their email in order to send the reservation tickets. Once you have the necessary details, list out everything they've provided and ask the to confirm. If they agree, format your response exactly like so (replace the necessary parts with the user provided details and date and time should be in date-time format of JavaScript in the json string section of the response): '${ACTION_PREFIX} ${JSON.stringify(
        sampleReservation
      )} Add a confirmatory message here telling the customer that their reservation has been booked and awaits confirmation and the tickets have been sent to their email and they can navigate to the reservations page to manage their reservation.' Prefix any response that likely requires CRUD to the database with ${ACTION_PREFIX}. Only prefix the responses that depict that a crud action can be performed. Here are some known details for the current customer that can help speed up the reservation process: name=${
        auth.currentUser?.displayName
      }, email=${
        auth.currentUser?.email
      }. Always follow these steps: collect necesssary details(date, time, number of guests), confirm name, confirm email, ask if they would like to preorder any dishes or have any special requests, confirm details, then send success message. Strict instruction: Only ask one question per response like a customer support assistant would to avoid confusions. Also You don't have to call the customer by name for each response you make. If the customer asks any questions unrelated to the restaurant, politely tell them that you cannot answer that but tell them what you can answer`;
    };

    const initialChat: Message[] = [
      {
        role: "user",
        content: [
          {
            text: getSystemPrompt(),
          },
        ],
      },
      {
        role: "assistant",
        content: [
          {
            text: "Hi! Welcome to Silver Spoons restaurant. How can I make your dining experience delightful today?",
          },
        ],
      },
    ];

    setMessages(initialChat);
  }, [auth.currentUser]);

  return (
    <ChatContext.Provider value={{ messages, updateMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

// Custom hook to use the chat context
export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
