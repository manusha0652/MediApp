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
    const { stats } = req.body ?? {};

    const client = getGeminiClient();
    if (!client) {
      res.status(503).json({
        error: "Gemini API key is not configured. Set GEMINI_API_KEY in Vercel Environment Variables.",
      });
      return;
    }

    const promptMessage = `
    As an expert medical tutor for "Obstetrics by Ten Teachers", analyze this student's diagnostic progress and construct a structured 3-step study priority plan:
    
    Current Progress Metrics:
    - Total Practice Sessions: ${stats?.completedQuizzes}
    - Overall Average Score: ${stats?.averageScore}%
    - Chapter Performance (Percentage Correct): ${JSON.stringify(stats?.chapterMastery)}
    
    Please generate:
    - Analysis of weak spots and strong suits.
    - Two highly targeted, specific chapters the student should immediately focus on, with custom advice on high-yield facts (e.g. specific timings, drugs of choice, critical emergency maneuvers).
    - An encouraging, professional closing sentence.
    
    Provide the response styled strictly in beautiful Markdown.
    `;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptMessage,
    });

    res.status(200).json({ recommendation: response.text });
  } catch (error: any) {
    console.error("Gemini recommendation error:", error);
    res.status(500).json({ error: error?.message || "Failed to generate recommendations." });
  }
}
