import { initialChat } from "@/utils/initialChatLlama";
import { NextApiRequest, NextApiResponse } from "next";
import {
  BedrockRuntimeClient,
  ConverseCommand,
  Message,
} from "@aws-sdk/client-bedrock-runtime";
import { processLlamaResponse } from "@/helpers/processLlamaResponse";

// Initialize the Bedrock client
const client = new BedrockRuntimeClient({
  region: process.env.AWS_BEDROCK_REGION, // Specify your region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

// let chatHistory = initialChat;
const modelId = "meta.llama3-70b-instruct-v1:0";

// Function to invoke the model with chat history
async function invokeLlamaModel(messages: Message[]) {
  const command = new ConverseCommand({
    modelId,
    messages,
    inferenceConfig: { maxTokens: 512, temperature: 0.5, topP: 0.9 },
  });

  try {
    const response = await client.send(command);
    return response;
  } catch (error) {
    console.error("Error invoking model:", error);
    throw error;
  }
}

// POST function to handle incoming requests
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { messages } = req.body; // Parse the JSON body of the incoming request

  try {
    // Wait for the model to process the input message
    const response = await invokeLlamaModel(messages);

    // Safely extract the response content
    let assistantResponse =
      response?.output?.message?.content?.[0]?.text ||
      "No response from model.";
    // console.log(assistantResponse);

    assistantResponse = await processLlamaResponse(assistantResponse);
    // console.log("--------------", assistantResponse, "--------------------");

    // Update chat history with the assistant's response
    const responseMessages = [
      ...messages,
      { role: "assistant", content: [{ text: assistantResponse }] },
    ];

    // Return the updated chat history as a JSON response
    return res.json({ history: responseMessages });
  } catch (error) {
    console.error("Invocation failed:", error);
    return res.status(500).json({ error: "Failed to invoke LLaMA model." });
  }
}
