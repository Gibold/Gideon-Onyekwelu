import { GoogleGenAI, Type, Chat } from "@google/genai";
import { QuoteRequest, QuoteResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Using Flash for speed and efficiency in standard queries
const MODEL_NAME = "gemini-2.5-flash"; 

export const generateLogisticsQuote = async (request: QuoteRequest): Promise<QuoteResponse> => {
  const prompt = `
    Generate a logistics quote for the following shipment:
    Origin: ${request.origin}
    Destination: ${request.destination}
    Weight: ${request.weight} kg
    Dimensions: ${request.dimensions}
    Transport Type: ${request.type}

    Provide a realistic estimated cost (USD), transit time, a brief route summary, and a recommendation.
    Be professional and act as a senior logistics coordinator.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedCost: { type: Type.NUMBER, description: "Estimated cost in USD" },
            currency: { type: Type.STRING, description: "Currency code (e.g. USD)" },
            transitTimeDays: { type: Type.STRING, description: "Estimated transit time range (e.g. 3-5 days)" },
            routeSummary: { type: Type.STRING, description: "Brief description of the route" },
            recommendation: { type: Type.STRING, description: "Logistics advice or recommendation" },
          },
          required: ["estimatedCost", "currency", "transitTimeDays", "routeSummary", "recommendation"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as QuoteResponse;
    }
    throw new Error("No data returned from AI");
  } catch (error) {
    console.error("Error generating quote:", error);
    throw error;
  }
};

let chatSession: Chat | null = null;

export const getChatResponse = async (message: string): Promise<string> => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: "You are SwiftBot, a helpful, professional, and efficient AI assistant for SwiftStream Logistics. You help customers with tracking queries (simulate tracking by asking for ID), shipping advice, packaging guidelines, and general logistics questions. Keep answers concise and helpful.",
      },
    });
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I'm having trouble connecting to the logistics network right now. Please try again.";
  } catch (error) {
    console.error("Chat error:", error);
    return "I apologize, but I'm experiencing a temporary system error.";
  }
};