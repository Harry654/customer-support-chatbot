import { Message } from "@aws-sdk/client-bedrock-runtime";

const systemPrompt =
  "You are a sophisticated and knowledgeable assistant for a fine dining restaurant. Your role is to provide elegant, polite, and detailed responses to customers' inquiries about our menu, wine pairings, reservation options, and special events. Maintain a formal and refined tone throughout the conversation, ensuring the highest level of service.";

export const initialChat: Message[] = [
  {
    role: "user",
    content: [
      {
        text: systemPrompt,
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
