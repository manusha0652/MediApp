import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with named parameter and safety controls
let ai: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!ai) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("GEMINI_API_KEY environment variable is not defined. AI Study Companion features will be degraded.");
      // We will lazily throw on API requests rather than crashing the whole server on startup.
    }
    ai = new GoogleGenAI({
      apiKey: key || "MOCK_KEY",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return ai;
}

// REST API Endpoints
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "ok", timeInWorkspace: new Date() });
});

// Post review to Gemini Study Companion
app.post("/api/gemini/explain", async (req: Request, res: Response) => {
  try {
    const { question, options, selectedAnswer, correctAnswer, rationale } = req.body;
    if (!question) {
      res.status(400).json({ error: "Missing question content." });
      return;
    }

    const client = getGeminiClient();
    if (!process.env.GEMINI_API_KEY) {
      res.status(503).json({
        error: "Gemini API key is not configured in the Secrets panel yet. Please configure GEMINI_API_KEY to activate your AI Study Companion."
      });
      return;
    }

    const promptMessage = `
    You are an expert obstetrician and clinical medical tutor specializing in training medical students and residents for high-stakes clinical exams (e.g., MRCOG, medical school finals), based on the "Obstetrics by Ten Teachers" textbook.
    
    A student has just answered this MCQ:
    ---
    Question: ${question}
    Options:
    A: ${options.A}
    B: ${options.B}
    C: ${options.C}
    D: ${options.D}
    E: ${options.E}
    
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

    res.json({ explanation: response.text });
  } catch (error: any) {
    console.error("Gemini explanation error:", error);
    res.status(500).json({ error: error.message || "Failed to generate explanation from Gemini." });
  }
});

// Route for custom study recommendations
app.post("/api/gemini/recommend", async (req: Request, res: Response) => {
  try {
    const { stats } = req.body;
    
    const client = getGeminiClient();
    if (!process.env.GEMINI_API_KEY) {
      res.status(503).json({
         error: "Gemini API key is not configured yet. Configure GEMINI_API_KEY to activate personalized study advice."
      });
      return;
    }

    const promptMessage = `
    As an expert medical tutor for "Obstetrics by Ten Teachers", analyze this student's diagnostic progress and construct a structured 3-step study priority plan:
    
    Current Progress Metrics:
    - Total Practice Sessions: ${stats.completedQuizzes}
    - Overall Average Score: ${stats.averageScore}%
    - Chapter Performance (Percentage Correct): ${JSON.stringify(stats.chapterMastery)}
    
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

    res.json({ recommendation: response.text });
  } catch (error: any) {
    console.error("Gemini recommendation error:", error);
    res.status(500).json({ error: error.message || "Failed to generate recommendations." });
  }
});

async function main() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Express with Vite dynamic middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving pre-built assets from /dist...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express Dev Server running at http://0.0.0.0:${PORT}`);
  });
}

main().catch(err => {
  console.error("Failed to start server:", err);
});
