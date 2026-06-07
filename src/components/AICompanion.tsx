import React, { useState, useEffect } from "react";
import { Question } from "../types";
import { Sparkles, Send, Brain, Loader2, RefreshCw, BookOpen, AlertCircle } from "lucide-react";

interface AICompanionProps {
  question: Question;
  selectedAnswer?: string | null;
}

export default function AICompanion({ question, selectedAnswer }: AICompanionProps) {
  const [explanation, setExplanation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Custom Chat follow-ups
  const [customMsg, setCustomMsg] = useState<string>("");
  const [chatLog, setChatLog] = useState<{ sender: "user" | "ai"; text: string }[]>([]);
  const [sendingChat, setSendingChat] = useState<boolean>(false);

  // Clear states when question changes
  useEffect(() => {
    setExplanation("");
    setChatLog([]);
    setError(null);
  }, [question]);

  const requestExplanation = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/gemini/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question.question,
          options: question.options,
          selectedAnswer: selectedAnswer || null,
          correctAnswer: question.answer,
          rationale: question.rationale,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "Tutor service currently offline. Verify GEMINI_API_KEY is configured.");
      }

      const data = await response.json();
      setExplanation(data.explanation);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to generate tutor explanation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sendCustomQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;

    const userText = customMsg.trim();
    setCustomMsg("");
    setChatLog(prev => [...prev, { sender: "user", text: userText }]);
    setSendingChat(true);
    setError(null);

    try {
      const chatPrompt = `
      The student has a question regarding this MCQ:
      
      Question: ${question.question}
      Options:
      A: ${question.options.A}
      B: ${question.options.B}
      C: ${question.options.C}
      D: ${question.options.D}
      E: ${question.options.E}
      
      Correct Answer: ${question.answer}
      Official rationale: ${question.rationale}
      
      Student's Followup Question: "${userText}"
      
      Please answer the question as an expert obstetrician and clinical medical tutor, aligning with standard clinical guidelines (NICE, RCOG).
      Be precise, professional, and explain clearly using Markdown.
      `;

      const response = await fetch("/api/gemini/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: chatPrompt,
          options: question.options,
          correctAnswer: question.answer,
          rationale: question.rationale
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send custom message to Gemini.");
      }

      const data = await response.json();
      setChatLog(prev => [...prev, { sender: "ai", text: data.explanation }]);
    } catch (err: any) {
      console.error(err);
      setError("AI was unable to answer the custom question. Check API settings.");
    } finally {
      setSendingChat(false);
    }
  };

  const renderMarkdownText = (text: string) => {
    return text.split("\n").map((line, index) => {
      if (line.trim().startsWith("###")) {
        return <h4 key={index} className="text-xs font-bold text-neutral-900 mt-3 mb-1">{line.replace("###", "").trim()}</h4>;
      }
      if (line.trim().startsWith("##")) {
        return <h3 key={index} className="text-sm font-bold text-neutral-900 mt-4 mb-2 font-serif">{line.replace("##", "").trim()}</h3>;
      }
      if (line.trim().startsWith("#")) {
        return <h2 key={index} className="text-base font-bold text-neutral-900 mt-5 border-b pb-1 mb-2 font-serif">{line.replace("#", "").trim()}</h2>;
      }
      if (line.trim().startsWith("-") || line.trim().startsWith("*")) {
        const clean = line.replace(/^[-*]\s*/, "");
        const formatted = clean.split("**").map((chunk, i) => i % 2 === 1 ? <strong key={i} className="text-neutral-900 font-bold">{chunk}</strong> : chunk);
        return <li key={index} className="ml-4 list-disc text-neutral-650 text-xs mb-1 leading-relaxed">{formatted}</li>;
      }
      if (line.trim()) {
        const formatted = line.split("**").map((chunk, i) => i % 2 === 1 ? <strong key={i} className="text-neutral-900 font-bold">{chunk}</strong> : chunk);
        return <p key={index} className="text-neutral-650 text-xs mb-2 leading-relaxed">{formatted}</p>;
      }
      return <div key={index} className="h-1.5" />;
    });
  };

  return (
    <div className="bg-neutral-50/60 border border-neutral-205/60 rounded-xl p-5 space-y-4 shadow-2xs">
      <div className="flex items-center justify-between border-b border-neutral-200/60 pb-3">
        <div className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-neutral-805 animate-pulse" />
          <div className="text-left">
            <h4 className="text-xs font-bold text-neutral-800 tracking-tight uppercase">AI Study Companion</h4>
            <p className="text-[10px] text-neutral-400">Clinical Reasoning Engine</p>
          </div>
        </div>

        {!explanation && (
          <button
            id="btn_explain_ai"
            onClick={requestExplanation}
            disabled={loading}
            className="text-xs bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-white font-semibold py-1.5 px-3 rounded-lg flex items-center space-x-1.5 transition cursor-pointer disabled:opacity-50 uppercase tracking-wider text-[10px]"
          >
            {loading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-neutral-200" />
            )}
            <span>Analyze with AI</span>
          </button>
        )}
      </div>

      {loading && (
        <div className="py-8 text-center space-y-3">
          <Loader2 className="w-6 h-6 animate-spin text-neutral-800 mx-auto" />
          <div className="text-[11px] text-neutral-500 font-medium">Deconstructing clinical pathways and clinical guidelines...</div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-xl text-xs flex items-start space-x-2 text-left">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />
          <div>
            <p className="font-semibold">{error}</p>
            <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
              Ensure you have a modern Gemini API key saved in the **Settings &gt; Secrets** panel in AI Studio.
            </p>
          </div>
        </div>
      )}

      {explanation && !loading && (
        <div className="space-y-4 animate-fadeIn">
          {/* Diagnostic break */}
          <div className="bg-white border border-neutral-200/70 rounded-xl p-4 space-y-2 text-left shadow-2xs max-h-[300px] overflow-y-auto">
            <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider flex items-center space-x-1 border-b border-neutral-100 pb-1.5 mb-1.5">
              <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
              <span>Full Clinical Insight</span>
            </div>
            <div className="prose max-w-none text-xs">
              {renderMarkdownText(explanation)}
            </div>
          </div>

          {/* Chat log */}
          {chatLog.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="text-[10px] text-neutral-405 font-bold uppercase tracking-wider text-left">Tutor Follow-up Dialog</div>
              <div className="space-y-3 max-h-[250px] overflow-y-auto pr-1">
                {chatLog.map((chat, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col space-y-1 ${chat.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wide">
                      {chat.sender === "user" ? "You" : "AI Obstetrician"}
                    </span>
                    <div
                      className={`text-xs p-3 rounded-xl max-w-[85%] text-left shadow-2xs ${
                        chat.sender === "user"
                          ? "bg-neutral-900 text-white rounded-tr-none"
                          : "bg-white text-neutral-800 border border-neutral-200/60 rounded-tl-none"
                      }`}
                    >
                      {chat.sender === "user" ? (
                        <p>{chat.text}</p>
                      ) : (
                        <div className="prose max-w-none">{renderMarkdownText(chat.text)}</div>
                      )}
                    </div>
                  </div>
                ))}
                {sendingChat && (
                  <div className="flex items-center space-x-1.5 text-neutral-450 text-xs py-2 pl-1 font-medium text-left">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-neutral-800" />
                    <span>Tutor is writing a response...</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Follow-up question input */}
          <form onSubmit={sendCustomQuestion} className="flex items-center space-x-2 pt-2 border-t border-neutral-105">
            <input
              id="inp_custom_question"
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Ask a custom question about this specific MCQ..."
              disabled={sendingChat}
              className="flex-1 bg-white border border-neutral-200 focus:border-neutral-900 focus:outline-none rounded-xl px-4 py-2 text-xs text-neutral-700"
            />
            <button
              id="btn_send_custom_question"
              type="submit"
              disabled={sendingChat || !customMsg.trim()}
              className="p-2.5 bg-neutral-900 hover:bg-neutral-805 active:scale-95 text-white rounded-xl transition cursor-pointer disabled:opacity-40"
            >
              <Send className="w-4 h-4" />
            </button>
          </form> 
        </div>
      )}

      {!explanation && !loading && !error && (
        <div className="py-6 text-center text-neutral-400 space-y-1">
          <Brain className="w-8 h-8 text-neutral-200 mx-auto" />
          <p className="text-xs font-semibold text-neutral-600">Tutor AI Standby</p>
          <p className="text-[10px] text-neutral-400 px-4 leading-relaxed">
            Click &quot;Analyze with AI&quot; above to query the clinical engine on diagnostic differentials.
          </p>
        </div>
      )}
    </div>
  );
}
