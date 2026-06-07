import React, { useState, useEffect, useRef } from "react";
import { Question, QuizSession } from "../types";
import { QUESTIONS, CHAPTERS, getRandomQuestions } from "../data/questions";
import { BookOpen, Timer, ArrowRight, CheckCircle2, XCircle, AlertCircle, Sparkles, Star, Target, RotateCcw, Award } from "lucide-react";
import AICompanion from "./AICompanion";

interface PracticeQuizProps {
  bookmarks: number[];
  onToggleBookmark: (id: number) => void;
  onQuizCompleted: (scorePercentage: number, session: QuizSession) => void;
  onBackToDashboard: () => void;
}

export default function PracticeQuiz({
  bookmarks,
  onToggleBookmark,
  onQuizCompleted,
  onBackToDashboard
}: PracticeQuizProps) {
  // Config Settings View States
  const [inSetup, setInSetup] = useState<boolean>(true);
  const [selectedChId, setSelectedChId] = useState<number>(0);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [useTimer, setUseTimer] = useState<boolean>(true);

  // Active Session States
  const [session, setSession] = useState<QuizSession | null>(null);
  const [selectedOption, setSelectedOption] = useState<"A" | "B" | "C" | "D" | "E" | null>(null);
  const [answerLocked, setAnswerLocked] = useState<boolean>(false);
  const [timerExpired, setTimerExpired] = useState<boolean>(false);

  // Interval Ref
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start the session
  const startQuizSession = () => {
    const list = getRandomQuestions(questionCount, selectedChId);
    
    // Set 60 seconds per question if timer enabled
    const totalTime = useTimer ? list.length * 60 : 0;

    const initialAnswers: { [id: number]: "A" | "B" | "C" | "D" | "E" | null } = {};
    list.forEach(q => { initialAnswers[q.id] = null; });

    setSession({
      questions: list,
      currentQuestionIndex: 0,
      userAnswers: initialAnswers,
      timeRemaining: totalTime,
      totalTime: totalTime,
      isCompleted: false,
      score: 0,
      chapterScores: {}
    });

    setSelectedOption(null);
    setAnswerLocked(false);
    setTimerExpired(false);
    setInSetup(false);
  };

  // Timer Tick implementation
  useEffect(() => {
    if (session && useTimer && !session.isCompleted) {
      intervalRef.current = setInterval(() => {
        setSession(prev => {
          if (!prev) return null;
          if (prev.timeRemaining <= 1) {
            clearInterval(intervalRef.current!);
            return {
              ...prev,
              timeRemaining: 0,
              isCompleted: true
            };
          }
          return {
            ...prev,
            timeRemaining: prev.timeRemaining - 1
          };
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [session?.isCompleted, useTimer]);

  if (inSetup) {
    return (
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-neutral-205/80 shadow-2xs max-w-2xl mx-auto space-y-6 text-left">
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-neutral-900 flex items-center space-x-2 font-serif">
            <BookOpen className="w-5 h-5 text-neutral-800" />
            <span>Interactive Quiz Configurator</span>
          </h2>
          <p className="text-xs text-neutral-450">
            Construct customized medical boards practice tests or evaluate specific modules immediately.
          </p>
        </div>

        <div className="space-y-4">
          {/* Chapter Selector */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">Target Subject Chapter</label>
            <select
              id="quiz_setup_chapter"
              value={selectedChId}
              onChange={(e) => setSelectedChId(Number(e.target.value))}
              className="w-full bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:outline-none rounded-xl px-4 py-3 text-sm text-neutral-700 cursor-pointer font-medium"
            >
              <option value={0}>All Chapters Combined (Comprehensive Assessment)</option>
              {CHAPTERS.map(ch => (
                <option key={ch.id} value={ch.id}>
                  Ch {ch.id}: {ch.name.split(":")[1]?.trim() || ch.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Question count */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">Practice Size</label>
              <select
                id="quiz_setup_count"
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="w-full bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:outline-none rounded-xl px-4 py-3 text-sm text-neutral-700 cursor-pointer font-medium"
              >
                <option value={5}>5 Questions (Rapid Review)</option>
                <option value={10}>10 Questions (Standard Drill)</option>
                <option value={15}>15 Questions (Thorough Diagnostic)</option>
                <option value={20}>20 Questions (Extended Routine)</option>
                <option value={30}>30 Questions (Clinical Marathon)</option>
              </select>
            </div>

            {/* Timer setting */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">Clinical Countdown Timer</label>
              <div className="flex items-center space-x-3 bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 h-[46px]">
                <input
                  id="quiz_setup_timer"
                  type="checkbox"
                  checked={useTimer}
                  onChange={(e) => setUseTimer(e.target.checked)}
                  className="w-4 h-4 text-neutral-900 border-neutral-300 rounded-sm focus:ring-neutral-900 accent-neutral-900 cursor-pointer"
                />
                <span className="text-xs font-semibold text-neutral-650 cursor-pointer flex items-center space-x-1.5" onClick={() => setUseTimer(!useTimer)}>
                  <Timer className="w-4 h-4 text-neutral-400" />
                  <span>60s per Question</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          id="btn_quiz_start"
          onClick={startQuizSession}
          className="w-full bg-neutral-900 hover:bg-neutral-805 active:scale-98 text-white font-extrabold py-3 px-4 rounded-xl transition flex items-center justify-center space-x-2 cursor-pointer shadow-xs text-xs uppercase tracking-wider"
        >
          <span>Begin Practice Exam</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  if (!session) return null;

  const activeQuestion = session.questions[session.currentQuestionIndex];
  const isBookmarked = bookmarks.includes(activeQuestion.id);

  // Submit Active choice
  const submitChoice = () => {
    if (!selectedOption || answerLocked) return;
    setAnswerLocked(true);

    const updatedAnswers = {
      ...session.userAnswers,
      [activeQuestion.id]: selectedOption
    };

    setSession(prev => {
      if (!prev) return null;
      return {
        ...prev,
        userAnswers: updatedAnswers
      };
    });
  };

  // Next Question / Complete quiz parameters
  const advanceSession = () => {
    const nextIdx = session.currentQuestionIndex + 1;
    if (nextIdx < session.questions.length) {
      setSession(prev => {
        if (!prev) return null;
        return {
          ...prev,
          currentQuestionIndex: nextIdx
        };
      });
      setSelectedOption(null);
      setAnswerLocked(false);
    } else {
      // Calculate overall final scorecard
      let correct = 0;
      const chapterScoresTemp: { [id: number]: { correct: number; total: number } } = {};

      session.questions.forEach(q => {
        const userChoice = session.userAnswers[q.id];
        const isCorrect = userChoice === q.answer;
        if (isCorrect) correct++;

        if (!chapterScoresTemp[q.chapterId]) {
          chapterScoresTemp[q.chapterId] = { correct: 0, total: 0 };
        }
        chapterScoresTemp[q.chapterId].total++;
        if (isCorrect) chapterScoresTemp[q.chapterId].correct++;
      });

      const scorePct = Math.round((correct / session.questions.length) * 100);

      const finalizedSession = {
        ...session,
        isCompleted: true,
        score: correct,
        chapterScores: chapterScoresTemp
      };

      setSession(finalizedSession);
      onQuizCompleted(scorePct, finalizedSession);
    }
  };

  // Safe duration formatter
  const formatTimeMinutes = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const timerWarning = useTimer && session.timeRemaining < 30;

  // Session Completed Summary panel
  if (session.isCompleted) {
    const accuracyValue = Math.round((session.score / session.questions.length) * 100);

    return (
      <div className="space-y-8 max-w-4xl mx-auto text-left py-2">
        {/* Header Ribbon Card */}
        <div className="bg-neutral-900 border border-neutral-800 text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs relative overflow-hidden">
          {/* Ambient bg visual */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />

          <div className="space-y-2.5 max-w-md relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-neutral-200 px-3 py-1 rounded-sm text-[9px] font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-neutral-100" />
              <span>Diagnostic Complete</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight font-serif">Your Session Summary Score</h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
              Congratulations on completing your diagnostic session. Excellent practice drives confidence and precise decision-making in clinical boards.
            </p>
          </div>

          <div id="quiz_results_score" className="text-center bg-white/10 border border-white/10 p-5 rounded-lg w-36 relative z-10 shrink-0">
            <div className="text-4xl font-extrabold text-white font-mono">{accuracyValue}%</div>
            <div className="text-[10px] text-neutral-300 mt-2 font-bold uppercase tracking-wider">
              {session.score} / {session.questions.length} Correct
            </div>
          </div>
        </div>

        {/* Breakdown of Chapter mastery indexes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4 bg-white p-6 rounded-xl border border-neutral-205/60">
            <h3 className="text-base font-semibold text-neutral-905 flex items-center space-x-2 border-b pb-2 font-serif">
              <Target className="w-4.5 h-4.5 text-neutral-805" />
              <span>Performance Analysis by Subject</span>
            </h3>

            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              {Object.entries(session.chapterScores).map(([chIdRaw, val]) => {
                const chId = Number(chIdRaw);
                const chObj = CHAPTERS.find(c => c.id === chId);
                const { correct, total } = val as { correct: number; total: number };
                const pct = Math.round((correct / total) * 100);
                return (
                  <div key={chId} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-neutral-700">
                      <span>{chObj?.name.split(":")[0]} ({chObj?.name.split(":")[1]?.trim()})</span>
                      <span className="text-neutral-500 font-mono">{pct}% ({correct}/{total})</span>
                    </div>
                    {/* Visual Bar */}
                    <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-neutral-900 transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick recommendations action cards */}
          <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 space-y-4 flex flex-col justify-between">
            <div className="space-y-2.5 text-left">
              <h3 className="text-[10px] font-bold text-neutral-800 uppercase tracking-widest">Next Recommended Step</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Review all your incorrectly answered questions below to solidify these pathways, or launch another rapid session to maintain your score momentum.
              </p>
            </div>

            <div className="space-y-2">
              <button
                id="btn_quiz_restart"
                onClick={() => setInSetup(true)}
                className="w-full bg-neutral-905 hover:bg-neutral-800 text-white font-extrabold py-2.5 px-4 rounded-xl text-xs transition flex items-center justify-center space-x-1 cursor-pointer uppercase tracking-wider"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Configure Another Quiz</span>
              </button>

              <button
                id="btn_back_dash"
                onClick={onBackToDashboard}
                className="w-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-700 font-semibold py-2.5 px-4 rounded-xl text-xs transition cursor-pointer"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Detailed clinical question reviews */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-neutral-900 uppercase tracking-widest border-b pb-2 font-serif text-left">Diagnostic Question Log</h3>
          <div className="space-y-4">
            {session.questions.map((q, qIndex) => {
              const uChoice = session.userAnswers[q.id];
              const isCorrect = uChoice === q.answer;

              return (
                <div
                  key={q.id}
                  id={`review_question_${q.id}`}
                  className={`p-5 rounded-xl border text-left space-y-3 bg-white ${isCorrect ? "border-neutral-200/80" : "border-red-200/60 shadow-2xs"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                      Question {qIndex + 1} of {session.questions.length} • Q{q.id} • {q.chapterName.split(":")[0]}
                    </span>

                    <span className={`text-[10px] uppercase tracking-wider font-extrabold flex items-center space-x-1 ${isCorrect ? "text-emerald-700" : "text-red-600"}`}>
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Correct</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4" />
                          <span>Incorrect</span>
                        </>
                      )}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-bold text-neutral-900 leading-relaxed font-serif">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(q.options).map(([optKey, optVal]) => {
                      const wasSelected = uChoice === optKey;
                      const isAns = q.answer === optKey;

                      let outlineStyle = "border-neutral-200/55 text-neutral-500";
                      if (wasSelected) {
                        outlineStyle = isCorrect ? "border-neutral-900 bg-neutral-900 text-white font-semibold" : "border-red-400 bg-red-50 text-red-900";
                      } else if (isAns) {
                        outlineStyle = "border-neutral-900 bg-neutral-50 text-neutral-900 font-bold";
                      }

                      return (
                        <div key={optKey} className={`flex items-start rounded-xl px-4 py-2 border text-xs ${outlineStyle}`}>
                          <span className="w-5 font-bold uppercase shrink-0">{optKey}.</span>
                          <span className="flex-1 font-medium">{optVal}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-neutral-50/70 p-4 rounded-xl text-xs text-neutral-650 leading-relaxed border border-neutral-200">
                    <span className="font-bold text-neutral-800 block mb-1 font-serif">Answer explanation rationale:</span>
                    {q.rationale}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left animate-fadeIn">
      {/* Active Question Box Column */}
      <div id="quiz_active_box" className="lg:col-span-2 bg-white rounded-xl border border-neutral-205/60 p-6 space-y-6 flex flex-col justify-between max-h-[700px] overflow-y-auto">
        <div className="space-y-4">
          {/* Progress & timer row */}
          <div className="flex items-center justify-between border-b pb-3 border-neutral-200">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider pl-1">
              Active Question {session.currentQuestionIndex + 1} of {session.questions.length}
            </span>

            <div className="flex items-center space-x-3">
              {useTimer && (
                <div className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-sm text-xs font-bold leading-none border ${timerWarning ? "bg-red-50 border-red-200 text-red-650 animate-pulse" : "bg-neutral-100 border-neutral-200 text-neutral-800 font-mono"}`}>
                  <Timer className={`w-3.5 h-3.5 ${timerWarning ? "text-red-500" : "text-neutral-500"}`} />
                  <span>{formatTimeMinutes(session.timeRemaining)}</span>
                </div>
              )}

              <button
                id="btn_inner_bookmark"
                onClick={() => onToggleBookmark(activeQuestion.id)}
                className={`p-1 rounded-md transition ${isBookmarked ? "text-amber-500" : "text-neutral-300 hover:bg-neutral-50"}`}
              >
                <Star className="w-4.5 h-4.5 fill-current" />
              </button>
            </div>
          </div>

          {/* Active Question */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-relaxed font-serif">
              {activeQuestion.question}
            </h3>

            {/* Options Buttons */}
            <div className="grid grid-cols-1 gap-3">
              {Object.entries(activeQuestion.options).map(([optKey, optVal]) => {
                const isSelected = selectedOption === optKey;
                const isCorrect = activeQuestion.answer === optKey;

                let btnStyle = "border-neutral-200 bg-neutral-50/45 hover:bg-neutral-105 hover:border-neutral-350 active:scale-99";
                if (isSelected) {
                  btnStyle = "border-neutral-905 bg-neutral-100 shadow-2xs ring-1 ring-neutral-900";
                }

                // If locked in, show correct/incorrect markers immediately
                if (answerLocked) {
                  btnStyle = "border-neutral-150 bg-neutral-50/20 opacity-70 text-neutral-400";
                  if (isCorrect) {
                    btnStyle = "border-neutral-900 bg-neutral-900 text-white font-semibold";
                  } else if (isSelected) {
                    btnStyle = "border-red-400 bg-red-50/60 text-red-900 font-semibold";
                  }
                }

                return (
                  <button
                    key={optKey}
                    id={`opt_btn_${optKey.toLowerCase()}`}
                    disabled={answerLocked}
                    onClick={() => setSelectedOption(optKey as any)}
                    className={`w-full text-left rounded-xl px-4 py-3.5 border text-xs leading-relaxed transition flex items-start space-x-2 cursor-pointer ${btnStyle}`}
                  >
                    <span className="w-5 font-bold uppercase text-neutral-400 shrink-0">{optKey}.</span>
                    <span className="flex-1 font-medium">{optVal}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lower footer actions */}
        <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white">
          {/* Submit/Next Logic */}
          <div className="flex items-center space-x-3 w-full">
            {!answerLocked ? (
              <button
                id="btn_submit_choice"
                disabled={!selectedOption}
                onClick={submitChoice}
                className="flex-1 bg-neutral-900 hover:bg-neutral-805 active:scale-98 disabled:opacity-40 text-white font-extrabold py-3 px-4 rounded-xl text-xs transition text-center cursor-pointer uppercase tracking-wider"
              >
                Submit Diagnostics
              </button>
            ) : (
              <button
                id="btn_advance_quiz"
                onClick={advanceSession}
                className="flex-1 bg-neutral-900 hover:bg-neutral-805 text-white font-extrabold py-3 px-4 rounded-xl text-xs transition flex items-center justify-center space-x-1 cursor-pointer uppercase tracking-wider"
              >
                <span>{session.currentQuestionIndex + 1 === session.questions.length ? "Finish Session" : "Next Question"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              id="btn_abort_quiz"
              onClick={() => {
                if (window.confirm("Abort current quiz session? All status for this session will be lost.")) {
                  setInSetup(true);
                  if (intervalRef.current) clearInterval(intervalRef.current);
                  setSession(null);
                }
              }}
              className="text-xs text-neutral-400 hover:text-red-500 px-3 py-2 font-semibold cursor-pointer shrink-0 transition uppercase tracking-wide text-[10px]"
            >
              Quit Diagnostic
            </button>
          </div>
        </div>

        {/* Show Rationale inline instantly once submitted */}
        {answerLocked && (
          <div className="animate-fadeIn mt-4 p-4 bg-neutral-50 border border-neutral-200 rounded-xl space-y-1.5">
            <span className="text-[10px] font-bold text-neutral-900 uppercase tracking-widest pl-0.5">Clinical Explanation Key</span>
            <p className="text-xs text-neutral-600 font-normal leading-relaxed">{activeQuestion.rationale}</p>
          </div>
        )}
      </div>

      {/* Sticky AI Mentor Panel on the side */}
      <div className="lg:col-span-1">
        <AICompanion
          question={activeQuestion}
          selectedAnswer={selectedOption}
        />
      </div>
    </div>
  );
}
