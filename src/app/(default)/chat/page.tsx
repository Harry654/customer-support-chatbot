"use client";

import { useChat } from "@/context/ChatContext";
import { initialChat } from "@/utils/initialChatLlama";
import { Message } from "@aws-sdk/client-bedrock-runtime";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function ChatGemini() {
  const { messages, updateMessages } = useChat();
  const [message, setMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;

    setMessage("");
    setIsLoading(true);

    updateMessages([
      ...messages,
      {
        role: "user",
        content: [
          {
            text: message.trim(),
          },
        ],
      },
    ]);

    try {
      const response = await fetch("/api/chat_llama", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            ...messages,
            {
              role: "user",
              content: [
                {
                  text: message.trim(),
                },
              ],
            },
          ],
        }),
      });

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }

      const { history } = await response.json();

      updateMessages(history);

      // const reader = response.body?.getReader();
      // const decoder = new TextDecoder();

      // if (reader) {
      //   while (true) {
      //     const result = await reader.read();
      //     if (result.done) break;
      //     const text = decoder.decode(result.value, { stream: true });
      //     updateMessages((messages) => {
      //       let lastMessage = messages[messages.length - 1];
      //       let otherMessages = messages.slice(0, messages.length - 1);
      //       return [
      //         ...otherMessages,
      //         { ...lastMessage, content: lastMessage.content + text },
      //       ];
      //     });
      //   }
      // }
    } catch (error) {
      console.error("Error:", error);
      updateMessages([
        ...messages,
        {
          role: "assistant",
          content: [
            {
              text: "I'm sorry, I can't respond at the moment. Please try again later.",
            },
          ],
        },
      ]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box
      width="100%"
      height="100%"
      top="0"
      left="0"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="rgba(0, 0, 0, 0.9)"
    >
      <Stack
        direction={"column"}
        width="500px"
        height="600px"
        p={2}
        spacing={3}
        sx={{
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        }}
      >
        <Stack
          direction={"column"}
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
        >
          {messages.slice(1).map((message, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                message.role === "assistant" ? "flex-start" : "flex-end"
              }
            >
              <Box
                sx={{
                  bgcolor:
                    message.role === "assistant"
                      ? "primary.main"
                      : "warning.main",
                }}
                color={"white"}
                borderRadius={2}
                px={2}
                py={2}
                maxWidth="80%"
              >
                {message.content?.[0]?.text}
              </Box>
            </Box>
          ))}

          <div ref={messagesEndRef} />
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <TextField
            label="Message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            InputProps={{
              style: { color: "white" }, // Change input text color to white
            }}
            InputLabelProps={{
              style: { color: "white" }, // Change label color to white
            }}
          />
          <Button
            variant="contained"
            onClick={sendMessage}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
