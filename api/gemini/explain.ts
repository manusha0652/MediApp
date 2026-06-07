import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

function getGeminiClient() {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }

  if (!ai) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "vercel-api",
        },
      },
    });
  }

  return ai;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    const { question, options, selectedAnswer, correctAnswer, rationale } = req.body ?? {};

    if (!question) {
      res.status(400).json({ error: "Missing question content." });
      return;
    }

    const client = getGeminiClient();
    if (!client) {
      res.status(503).json({
        error: "Gemini API key is not configured. Set GEMINI_API_KEY in Vercel Environment Variables.",
      });
      return;
    }

    const promptMessage = `
    You are an expert obstetrician and clinical medical tutor specializing in training medical students and residents for high-stakes clinical exams (e.g., MRCOG, medical school finals), based on the "Obstetrics by Ten Teachers" textbook.
    
    A student has just answered this MCQ:
    ---
    Question: ${question}
    Options:
    A: ${options?.A}
    B: ${options?.B}
    C: ${options?.C}
    D: ${options?.D}
    E: ${options?.E}
    
    Student's Choice: ${selectedAnswer || "None (Skipped)"}
    Correct Answer: ${correctAnswer}
    Official Rationale: ${rationale}
    ---
    
    Please provide:
    1. A friendly, supportive, and clinical explanation of why the correct option is indeed the absolute best choice.
    2. A brief breakdown of why the other options are either incorrect or less preferred (differential learning points).
    3. 1 or 2 high-yield clinical "Gold Standards" or "Ten Teachers Rules of Thumb" to remember for exams (e.g. key timing guidelines, drug contraindications).
    
    Format the response as beautiful, clean Markdown with bullet points, italicized terms where appropriate, and bold key clinical variables. Keep it succinct, encouraging, and highly educational.
    `;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptMessage,
    });

    res.status(200).json({ explanation: response.text });
  } catch (error: any) {
    console.error("Gemini explanation error:", error);
    res.status(500).json({ error: error?.message || "Failed to generate explanation from Gemini." });
  }
}
