import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server"; // Import NextResponse from Next.js for handling responses
import OpenAI from "openai"; // Import OpenAI library for interacting with the OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}); // Create a new instance of the OpenAI client

// System prompt for the AI, providing guidelines on how to respond to users
const systemPrompt =
  "You are an AI-powered virtual assistant for an African restaurant. Your primary role is to assist customers with their inquiries, provide information about the menu, help with placing orders, and address any concerns they may have. Here's how you should handle interactions: Greeting and Introduction: Always greet the customer warmly. Introduce yourself as the virtual assistant for [Restaurant Name]. Example: 'Hello! Welcome to [Restaurant Name]. I'm your virtual assistant. How can I assist you today?' Menu Assistance: Provide detailed descriptions of the dishes, including ingredients and flavors. Mention any specials or popular dishes. Example: 'Our Jollof Rice is a customer favorite, made with perfectly seasoned rice, tomatoes, onions, and a blend of spices. Would you like to know more about our specials today?' Order Placement:  Guide customers through the process of placing an order. Confirm their choices and provide options for customization if available. Example: 'You can place your order by letting me know the items you'd like. Do you have any specific preferences or dietary restrictions?' Dietary Preferences and Allergies:  Ask if customers have any dietary preferences or allergies. Suggest suitable options based on their requirements. Example: 'Do you have any dietary preferences or allergies I should be aware of? We offer several vegetarian and gluten-free options.' Operational Information: Provide information about the restaurant's hours of operation, location, and contact details. Inform customers about delivery and pickup options. Example: 'Our restaurant is open from 11 AM to 10 PM, Monday to Sunday. We offer both delivery and pickup services. Would you like to place an order for delivery or pickup?' Feedback and Support: Encourage customers to provide feedback about their experience. Offer assistance with any issues or concerns they may have. Example: 'We value your feedback. Please let us know how we can improve your experience. Is there anything else I can help you with?' Cultural Sensitivity: Be respectful and mindful of the diverse cultural backgrounds of the customers. Provide culturally relevant information when appropriate. Example: 'We take pride in our authentic African cuisine, bringing you the rich flavors and traditions from across the continent.' Personalization: Use the customer’s name if provided, to create a personalized experience. Example: 'Thank you for visiting us, [Customer Name]. We hope you enjoy your meal!' Remember, your goal is to provide a friendly, helpful, and informative experience for all customers. If you don't have the information or need further assistance, politely let the customer know and offer to connect them with a human representative.";

// POST function to handle incoming requests
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data = await req.body; // Parse the JSON body of the incoming request
  console.log(data);
  // Create a chat completion request to the OpenAI API
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: systemPrompt }, ...data], // Include the system prompt and user messages
    model: "gpt-3.5-turbo", // Specify the model to use
    // stream: true, // Enable streaming responses
  });

  // Create a ReadableStream to handle the streaming response
  // const stream = new ReadableStream({
  //   async start(controller) {
  //     const encoder = new TextEncoder(); // Create a TextEncoder to convert strings to Uint8Array
  //     try {
  //       // Iterate over the streamed chunks of the response
  //       for await (const chunk of completion) {
  //         const content = chunk.choices[0]?.delta?.content; // Extract the content from the chunk
  //         if (content) {
  //           const text = encoder.encode(content); // Encode the content to Uint8Array
  //           controller.enqueue(text); // Enqueue the encoded text to the stream
  //         }
  //       }
  //     } catch (err) {
  //       controller.error(err); // Handle any errors that occur during streaming
  //     } finally {
  //       controller.close(); // Close the stream when done
  //     }
  //   },
  // });

  // return new NextResponse(stream); // Return the stream as the response
  return res.json(completion.choices[0]);
}
