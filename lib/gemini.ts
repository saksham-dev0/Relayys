import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT =
  "You are a helpful personal assistant. Be concise, friendly, and useful.";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function getChatReply(
  history: ChatMessage[],
  newMessage: string
): Promise<string> {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: SYSTEM_PROMPT,
  });

  // Gemini expects alternating user/model roles
  const formattedHistory = history.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const chat = model.startChat({ history: formattedHistory });
  const result = await chat.sendMessage(newMessage);
  return result.response.text();
}
