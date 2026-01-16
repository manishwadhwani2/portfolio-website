import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the Gemini Client
// IMPORTANT: In a production environment, you should proxy requests through a backend
// to avoid exposing your API KEY. For this portfolio demo, we assume the environment variable is set safely.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const streamChatResponse = async (
  message: string, 
  history: { role: 'user' | 'model'; text: string }[]
): Promise<AsyncGenerator<string, void, unknown>> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please configure process.env.API_KEY.");
  }

  // Map internal history format to Gemini Chat history format if needed,
  // but for simplicity in this single-turn/short-session context, we'll just use a fresh chat 
  // or simple generation. Using chat structure is better for context retention.
  
  const chatHistory = history.map(h => ({
    role: h.role,
    parts: [{ text: h.text }]
  }));

  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
    history: chatHistory
  });

  const resultStream = await chat.sendMessageStream({ message });

  async function* generator() {
    for await (const chunk of resultStream) {
        const text = (chunk as GenerateContentResponse).text;
        if (text) {
            yield text;
        }
    }
  }

  return generator();
};