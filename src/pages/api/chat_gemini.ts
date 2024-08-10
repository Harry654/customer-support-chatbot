import { initialChat } from "@/utils/initialChat";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];
// The Gemini 1.5 models are versatile and work with multi-turn conversations (like chat)
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  safetySettings,
});

let chatHistory = initialChat;

// POST function to handle incoming requests
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { message } = await req.body; // Parse the JSON body of the incoming request
  // console.log(data);

  const chat = model.startChat({
    history: chatHistory,
    // generationConfig: {
    //   maxOutputTokens: 100,
    // },
  });

  // Process the user's message
  const result = await chat.sendMessageStream(message);

  let text = "";
  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    // console.log("----------new chunk text: ", chunkText, "-----------");
    text += chunkText;
  }

  chatHistory = [
    ...chatHistory,
    { role: "user", parts: [{ text: message }] },
    { role: "model", parts: [{ text }] },
  ];

  // Return the generated text as a JSON response
  return res.json({ history: chatHistory });
}
