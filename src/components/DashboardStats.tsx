import React, { useState } from "react";
import { ProgressState, Chapter, Question } from "../types";
import { CHAPTERS, QUESTIONS } from "../data/questions";
import { Brain, Award, BookMarked, BarChart2, TrendingUp, Sparkles, Loader2, ArrowRight } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

interface DashboardStatsProps {
  progress: ProgressState;
  onSelectChapter: (id: number) => void;
  onSelectQuestion: (question: Question) => void;
  onClearHistory: () => void;
}

export default function DashboardStats({
  progress,
  onSelectChapter,
  onSelectQuestion,
  onClearHistory
}: DashboardStatsProps) {
  const [recommendation, setRecommendation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const totalQuestions = QUESTIONS.length;
  const answeredCount = Object.keys(progress.answeredQuestionIds).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100) || 0;

  const correctAnswers = Object.values(progress.answeredQuestionIds).filter(v => v === "correct").length;
  const accuracy = answeredCount > 0 ? Math.round((correctAnswers / answeredCount) * 100) : 0;

  // Calculate customized metrics for mastery
  const masteryData = CHAPTERS.map(ch => {
    const chapterQuestions = QUESTIONS.filter(q => q.chapterId === ch.id);
    const totalChQuestions = chapterQuestions.length;
    const answeredCh = chapterQuestions.filter(q => progress.answeredQuestionIds[q.id] !== undefined);
    const correctCh = chapterQuestions.filter(q => progress.answeredQuestionIds[q.id] === "correct");
    
    // Calculate mastery balance
    const chAccuracy = answeredCh.length > 0 ? Math.round((correctCh.length / answeredCh.length) * 100) : 0;
    const answeredRatio = answeredCh.length / totalChQuestions;
    // Weighted score
    const score = Math.round(chAccuracy * answeredRatio) || 0;

    return {
      ...ch,
      correct: correctCh.length,
      attempted: answeredCh.length,
      accuracy: chAccuracy,
      mastery: score,
    };
  });

  const getAIRecommendation = async () => {
    setLoading(true);
    setError(null);
    try {
      const chapterMasteryMap: { [key: string]: number } = {};
      masteryData.forEach(m => {
        chapterMasteryMap[m.name] = m.accuracy;
      });

      const clientApiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (clientApiKey) {
        const aiInstance = new GoogleGenAI({ apiKey: clientApiKey });
        const response = await aiInstance.models.generateContent({
          model: "gemini-3.5-flash",
          contents: `
            As an expert medical tutor for "Obstetrics by Ten Teachers", analyze this student's diagnostic progress and construct a structured 3-step study priority plan:
            
            Current Progress Metrics:
            - Total Practice Sessions: ${progress.completedQuizzes}
            - Overall Average Score: ${progress.averageScore || accuracy}%
            - Chapter Performance (Percentage Correct): ${JSON.stringify(chapterMasteryMap)}
            
            Please generate:
            - Analysis of weak spots and strong suits.
            - Two highly targeted, specific chapters the student should immediately focus on, with custom advice on high-yield facts (e.g. specific timings, drugs of choice, critical emergency maneuvers).
            - An encouraging, professional closing sentence.
            
            Provide the response styled strictly in beautiful Markdown.
          `,
        });
        setRecommendation(response.text || "No recommendations returned from Gemini.");
      } else {
        const response = await fetch("/api/gemini/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            stats: {
              completedQuizzes: progress.completedQuizzes,
              averageScore: progress.averageScore || accuracy,
              chapterMastery: chapterMasteryMap,
            }
          }),
        });

        if (!response.ok) {
          throw new Error("Tutor service unavailable. Ensure GEMINI_API_KEY is configured in Settings > Secrets.");
        }

        const data = await response.json();
        setRecommendation(data.recommendation);
      }
    } catch (err: any) {
      console.error(err);
      if (!import.meta.env.VITE_GEMINI_API_KEY && (err.message?.includes("Failed to fetch") || err.message?.includes("fetch"))) {
        setError("AI tutor recommendation is configured via server proxy, but the backend is currently offline. Since you deployed to static hosting like GitHub Pages, please configure the 'VITE_GEMINI_API_KEY' environment variable inside your GitHub Repository secrets, or run this app in a full-stack Cloud Run environment.");
      } else {
        setError(err.message || "Failed to retrieve advice from the AI companion.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Safe markdown line split rendering
  const renderMarkdownExplanation = (text: string) => {
    return text.split("\n").map((line, index) => {
      if (line.trim().startsWith("###")) {
        return <h4 key={index} className="text-sm font-bold text-neutral-900 mt-3 mb-1">{line.replace("###", "").trim()}</h4>;
      }
      if (line.trim().startsWith("##")) {
        return <h3 key={index} className="text-base font-bold text-neutral-900 mt-4 mb-2 font-serif">{line.replace("##", "").trim()}</h3>;
      }
      if (line.trim().startsWith("#")) {
        return <h2 key={index} className="text-lg font-bold text-neutral-900 mt-5 mb-3 border-b pb-1 font-serif">{line.replace("#", "").trim()}</h2>;
      }
      if (line.trim().startsWith("-") || line.trim().startsWith("*")) {
        const cleanText = line.replace(/^[-*]\s*/, "");
        // simple bold highlighting helper
        const formattedText = cleanText.split("**").map((chunk, i) => i % 2 === 1 ? <strong key={i} className="text-neutral-955 font-bold">{chunk}</strong> : chunk);
        return <li key={index} className="ml-5 list-disc text-neutral-650 mb-1 text-xs leading-relaxed">{formattedText}</li>;
      }
      if (line.trim()) {
        const formattedText = line.split("**").map((chunk, i) => i % 2 === 1 ? <strong key={i} className="text-neutral-955 font-bold">{chunk}</strong> : chunk);
        return <p key={index} className="text-neutral-650 mb-2 text-xs leading-relaxed">{formattedText}</p>;
      }
      return <div key={index} className="h-2" />;
    });
  };

  return (
    <div className="space-y-8">
      {/* Overview Metric Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div id="stat_accuracy" className="bg-white p-5 rounded-xl border border-neutral-200/80 shadow-2xs flex items-center space-x-4">
          <div className="p-3 bg-neutral-50 text-neutral-700 rounded-lg border border-neutral-100">
            <Award className="w-5.5 h-5.5" />
          </div>
          <div className="text-left">
            <div className="text-[9px] text-neutral-450 font-bold tracking-wider uppercase">Overall Accuracy</div>
            <div className="text-xl font-bold text-neutral-900 font-mono">{accuracy}%</div>
            <div className="text-[10px] text-neutral-400 font-medium">Of {answeredCount} answered</div>
          </div>
        </div>

        <div id="stat_progress" className="bg-white p-5 rounded-xl border border-neutral-200/80 shadow-2xs flex items-center space-x-4">
          <div className="p-3 bg-neutral-50 text-neutral-700 rounded-lg border border-neutral-100">
            <TrendingUp className="w-5.5 h-5.5" />
          </div>
          <div className="text-left">
            <div className="text-[9px] text-neutral-450 font-bold tracking-wider uppercase">Question Progress</div>
            <div className="text-xl font-bold text-neutral-900 font-mono">{progressPercent}%</div>
            <div className="text-[10px] text-neutral-400 font-medium">{answeredCount} / {totalQuestions} MCQs</div>
          </div>
        </div>

        <div id="stat_quizzes" className="bg-white p-5 rounded-xl border border-neutral-200/80 shadow-2xs flex items-center space-x-4">
          <div className="p-3 bg-neutral-50 text-neutral-700 rounded-lg border border-neutral-100">
            <BarChart2 className="w-5.5 h-5.5" />
          </div>
          <div className="text-left">
            <div className="text-[9px] text-neutral-450 font-bold tracking-wider uppercase">Quizzes Taken</div>
            <div className="text-xl font-bold text-neutral-900 font-mono">{progress.completedQuizzes}</div>
            <div className="text-[10px] text-neutral-400 font-medium">Avg Score: {progress.averageScore}%</div>
          </div>
        </div>

        <div id="stat_bookmarks" className="bg-white p-5 rounded-xl border border-neutral-200/80 shadow-2xs flex items-center space-x-4">
          <div className="p-3 bg-neutral-50 text-neutral-700 rounded-lg border border-neutral-100">
            <BookMarked className="w-5.5 h-5.5" />
          </div>
          <div className="text-left">
            <div className="text-[9px] text-neutral-450 font-bold tracking-wider uppercase">Bookmarks</div>
            <div className="text-xl font-bold text-neutral-900 font-mono">{progress.bookmarks?.length || 0}</div>
            <div className="text-[10px] text-neutral-400 font-medium">Saved questions</div>
          </div>
        </div>
      </div>

      {/* AI Tutor Panel */}
      <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-neutral-800 shadow-xs">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left">
          <div className="space-y-2.5 max-w-xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-neutral-200 px-3 py-1 rounded-sm text-[9px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-neutral-100" />
              <span>Gemini AI Tutor Companion</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight font-serif">Personalized Clinical Study Plan</h2>
            <p className="text-neutral-405 text-xs sm:text-sm font-light leading-relaxed">
              Based on your chapter scores, Gemini will evaluate your strengths, target high-yield gaps, and craft an optimized three-step preparation focus for your examinations.
            </p>
          </div>

          <button
            id="btn_ai_tutor_plan"
            disabled={loading}
            onClick={getAIRecommendation}
            className="shrink-0 bg-white hover:bg-neutral-150 text-neutral-900 font-extrabold px-6 py-3 rounded-xl transition duration-150 flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer shadow-xs text-xs uppercase tracking-wide"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-neutral-900" />
                <span>Consulting AI...</span>
              </>
            ) : (
              <>
                <Brain className="w-4 h-4 text-neutral-800" />
                <span>Generate Study Strategy</span>
              </>
            )}
          </button>
        </div>

        {/* Output Box */}
        {error && (
          <div className="mt-6 bg-red-950/45 border border-red-500/35 text-red-200 p-4 rounded-xl text-xs z-10 relative text-left">
            {error}
          </div>
        )}

        {recommendation && (
          <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-6 text-neutral-100 z-10 relative space-y-2 animate-fadeIn max-h-[450px] overflow-y-auto text-left">
            <div className="text-[10px] text-neutral-350 font-bold uppercase tracking-wider mb-2 flex items-center justify-between border-b border-white/10 pb-2">
              <span>Your Custom Advice Guide</span>
              <span className="text-neutral-400 font-normal normal-case">Updated just now</span>
            </div>
            <div className="prose prose-invert prose-sm max-w-none text-neutral-200">
              {renderMarkdownExplanation(recommendation)}
            </div>
          </div>
        )}
      </div>

      {/* Chapters Performance / Trackers list */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-neutral-205/60 p-6 text-left">
          <h3 className="text-base font-semibold text-neutral-900 mb-4 flex items-center space-x-2 font-serif tracking-tight">
            <BarChart2 className="w-4.5 h-4.5 text-neutral-800" />
            <span>Chapter Performance Metrics</span>
          </h3>

          <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-2">
            {masteryData.map((ch) => (
              <div
                key={ch.id}
                id={`chapter_progress_card_${ch.id}`}
                onClick={() => onSelectChapter(ch.id)}
                className="group p-3.5 bg-neutral-50/50 hover:bg-neutral-100/50 border border-neutral-200/50 rounded-xl transition cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1 md:max-w-[70%]">
                  <div className="text-xs sm:text-sm font-bold text-neutral-800 group-hover:text-black transition">
                    {ch.name}
                  </div>
                  <div className="text-[11px] text-neutral-450 line-clamp-1">
                    {ch.description}
                  </div>
                </div>

                <div className="flex items-center space-x-6 shrink-0 justify-between md:justify-end">
                  <div className="text-right">
                    <div className="text-[9px] text-neutral-405 font-bold uppercase tracking-wide">Accuracy</div>
                    <div className="text-xs font-extrabold text-neutral-800 font-mono">
                      {ch.attempted > 0 ? `${ch.accuracy}%` : "0% (Unattempted)"}
                    </div>
                    <div className="text-[10px] text-neutral-400 font-medium">
                      {ch.correct} / {ch.attempted} questions
                    </div>
                  </div>

                  {/* Tiny circular or bar progress visual */}
                  <div className="w-16 bg-neutral-200 h-1.5 rounded-full overflow-hidden shrink-0">
                    <div
                      className="bg-neutral-900 h-full transition-all"
                      style={{ width: `${ch.attempted > 0 ? ch.accuracy : 0}%` }}
                    />
                  </div>

                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bookmarked/Saved Card List */}
        <div className="bg-white rounded-xl border border-neutral-205/60 p-6 text-left">
          <h3 className="text-base font-semibold text-neutral-900 mb-4 flex items-center space-x-2 font-serif tracking-tight">
            <BookMarked className="w-4.5 h-4.5 text-neutral-800" />
            <span>Saved Questions ({progress.bookmarks?.length || 0})</span>
          </h3>

          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {progress.bookmarks?.length === 0 ? (
              <div className="text-center py-12 text-neutral-400 space-y-2">
                <BookMarked className="w-10 h-10 text-neutral-250 mx-auto" />
                <p className="text-xs font-semibold text-neutral-500">No saved questions yet</p>
                <p className="text-[11px] text-neutral-400 px-4 leading-relaxed">
                  Bookmark questions during practice quizzes or booklet view to save them here for fast retrieval.
                </p>
              </div>
            ) : (
              progress.bookmarks?.map(id => {
                const q = QUESTIONS.find(elem => elem.id === id);
                if (!q) return null;
                return (
                  <div
                    key={q.id}
                    id={`bookmark_card_${q.id}`}
                    onClick={() => onSelectQuestion(q)}
                    className="p-3 bg-neutral-50/50 hover:bg-neutral-100/50 border border-neutral-200/50 hover:border-neutral-350 rounded-xl transition cursor-pointer space-y-1.5 text-left"
                  >
                    <div className="text-[9px] font-bold text-neutral-500 tracking-wider uppercase">
                      Q{q.id} • {q.chapterName.split(":")[0]}
                    </div>
                    <div className="text-xs font-semibold text-neutral-800 line-clamp-2">
                      {q.question}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Clear Stats Action */}
      <div className="flex justify-end pt-4">
        <button
          id="btn_clear_history"
          onClick={() => {
            if (window.confirm("Are you absolutely sure you want to reset all your progress data and saved bookmarks? This action is irreversible.")) {
              onClearHistory();
            }
          }}
          className="text-[10.5px] text-neutral-400 hover:text-red-500 font-medium transition cursor-pointer tracking-wide uppercase"
        >
          Reset Statistics & Progress Data
        </button>
      </div>
    </div>
  );
}
