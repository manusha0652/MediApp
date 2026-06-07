import React, { useState, useEffect } from "react";
import { Chapter, Question, ProgressState, QuizSession } from "./types";
import { CHAPTERS, QUESTIONS } from "./data/questions";
import BookletViewer from "./components/BookletViewer";
import PracticeQuiz from "./components/PracticeQuiz";
import Flashcards from "./components/Flashcards";
import DashboardStats from "./components/DashboardStats";
import { BookOpen, Brain, Star, Bookmark, ClipboardList, RefreshCw, BarChart3, HelpCircle, GraduationCap, ChevronRight, Menu, X, Landmark } from "lucide-react";

// Local storage persistent keys
const BOOKMARKS_STORAGE_KEY = "obstetrics_mcq_bookmarks_v1";
const PROGRESS_STORAGE_KEY = "obstetrics_mcq_progress_v1";

export default function App() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "booklet" | "quiz" | "flashcards">("dashboard");
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  
  // Responsive mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Core user states
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [progress, setProgress] = useState<ProgressState>({
    answeredQuestionIds: {},
    completedQuizzes: 0,
    averageScore: 0,
    chapterMastery: {},
    bookmarks: []
  });

  // Load persistent configurations on mounting
  useEffect(() => {
    try {
      const savedBookmarks = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (savedBookmarks) {
        setBookmarks(JSON.parse(savedBookmarks));
      }

      const savedProgress = localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (e) {
      console.warn("Could not read local storage settings:", e);
    }
  }, []);

  // Save changes to bookmarks
  const handleToggleBookmark = (id: number) => {
    setBookmarks(prev => {
      const updated = prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id];
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated));
      
      // Keep state sync
      setProgress(p => {
        const nextProg = { ...p, bookmarks: updated };
        localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(nextProg));
        return nextProg;
      });
      
      return updated;
    });
  };

  // Synchronize completed quiz scores & question paths
  const handleQuizCompleted = (scorePercentage: number, completedSession: QuizSession) => {
    setProgress(prev => {
      // 1. Sync completed quizzes metrics
      const nextCompleted = prev.completedQuizzes + 1;
      const nextAvg = prev.completedQuizzes === 0
        ? scorePercentage
        : Math.round((prev.averageScore * prev.completedQuizzes + scorePercentage) / nextCompleted);

      // 2. Track marked choices questions
      const nextAnswered = { ...prev.answeredQuestionIds };
      completedSession.questions.forEach(q => {
        const answer = completedSession.userAnswers[q.id];
        if (answer) {
          nextAnswered[q.id] = answer === q.answer ? "correct" : "incorrect";
        }
      });

      const updatedProgress = {
        ...prev,
        completedQuizzes: nextCompleted,
        averageScore: nextAvg,
        answeredQuestionIds: nextAnswered
      };

      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(updatedProgress));
      return updatedProgress;
    });
  };

  // Clear overall stats and resets back to baseline
  const handleClearHistory = () => {
    const freshProgress: ProgressState = {
      answeredQuestionIds: {},
      completedQuizzes: 0,
      averageScore: 0,
      chapterMastery: {},
      bookmarks: []
    };
    setProgress(freshProgress);
    setBookmarks([]);
    localStorage.removeItem(BOOKMARKS_STORAGE_KEY);
    localStorage.removeItem(PROGRESS_STORAGE_KEY);
  };

  // Selected Chapter Routing helper from stats cards
  const selectChapterAndRoute = (id: number) => {
    setSelectedChapterId(id);
    setActiveTab("booklet");
  };

  const selectQuestionAndRoute = (question: Question) => {
    setSelectedChapterId(question.chapterId);
    setActiveTab("booklet");
  };

  return (
    <div className="min-h-screen bg-neutral-50/60 text-neutral-800 flex flex-col font-sans transition-all duration-150 antialiased selection:bg-neutral-900 selection:text-neutral-50">
      
      {/* Dynamic Header - hidden during browser physical standard printing */}
      <header className="no-print sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200/60 flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3.5">
          <div className="p-2.5 bg-neutral-900 text-white rounded-xl shadow-xs">
            <GraduationCap className="w-5.5 h-5.5" />
          </div>
          <div>
            <h1 className="text-sm font-extrabold tracking-tight text-neutral-900 sm:text-base font-serif">Obstetrics MCQ Booklet</h1>
            <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">Companion to Obstetrics by Ten Teachers</p>
          </div>
        </div>

        {/* Desktop navigation tabs */}
        <nav className="hidden md:flex items-center space-x-1.5 p-1 bg-neutral-100/80 rounded-2xl border border-neutral-200/40">
          <button
            id="tab_dash"
            onClick={() => { setActiveTab("dashboard"); setSelectedChapterId(null); }}
            className={`flex items-center space-x-1.5 px-4.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer select-none ${
              activeTab === "dashboard" ? "bg-white text-neutral-950 shadow-xs border border-neutral-205/30" : "text-neutral-500 hover:text-neutral-850"
            }`}
          >
            <BarChart3 className="w-4 h-4 text-neutral-500" />
            <span>Dashboard</span>
          </button>

          <button
            id="tab_book"
            onClick={() => { setActiveTab("booklet"); }}
            className={`flex items-center space-x-1.5 px-4.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer select-none ${
              activeTab === "booklet" ? "bg-white text-neutral-950 shadow-xs border border-neutral-205/30" : "text-neutral-500 hover:text-neutral-850"
            }`}
          >
            <BookOpen className="w-4 h-4 text-neutral-500" />
            <span>Study Booklet</span>
          </button>

          <button
            id="tab_quiz"
            onClick={() => { setActiveTab("quiz"); }}
            className={`flex items-center space-x-1.5 px-4.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer select-none ${
              activeTab === "quiz" ? "bg-white text-neutral-950 shadow-xs border border-neutral-205/30" : "text-neutral-500 hover:text-neutral-850"
            }`}
          >
            <Brain className="w-4 h-4 text-neutral-500" />
            <span>Exam Simulator</span>
          </button>

          <button
            id="tab_cards"
            onClick={() => { setActiveTab("flashcards"); }}
            className={`flex items-center space-x-1.5 px-4.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer select-none ${
              activeTab === "flashcards" ? "bg-white text-neutral-950 shadow-xs border border-neutral-205/30" : "text-neutral-500 hover:text-neutral-850"
            }`}
          >
            <ClipboardList className="w-4 h-4 text-neutral-500" />
            <span>High-Yield Cards</span>
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-neutral-200/80 hover:bg-neutral-50 rounded-xl transition cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-neutral-600" /> : <Menu className="w-5 h-5 text-neutral-600" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu - hidden during printing */}
      {mobileMenuOpen && (
        <div className="no-print md:hidden bg-white border-b border-neutral-200/60 flex flex-col px-6 py-4 space-y-1.5 animate-fadeIn z-40 transition-all">
          <button
            onClick={() => { setActiveTab("dashboard"); setSelectedChapterId(null); setMobileMenuOpen(false); }}
            className={`w-full text-left flex items-center space-x-2 p-3 rounded-xl text-xs font-semibold ${
              activeTab === "dashboard" ? "bg-neutral-100 text-neutral-900" : "text-neutral-500 hover:bg-neutral-50"
            }`}
          >
            <BarChart3 className="w-4 h-4 text-neutral-550" />
            <span>Dashboard</span>
          </button>
          
          <button
            onClick={() => { setActiveTab("booklet"); setMobileMenuOpen(false); }}
            className={`w-full text-left flex items-center space-x-2 p-3 rounded-xl text-xs font-semibold ${
              activeTab === "booklet" ? "bg-neutral-100 text-neutral-900" : "text-neutral-500 hover:bg-neutral-50"
            }`}
          >
            <BookOpen className="w-4 h-4 text-neutral-550" />
            <span>Study Booklet</span>
          </button>

          <button
            onClick={() => { setActiveTab("quiz"); setMobileMenuOpen(false); }}
            className={`w-full text-left flex items-center space-x-2 p-3 rounded-xl text-xs font-semibold ${
              activeTab === "quiz" ? "bg-neutral-100 text-neutral-900" : "text-neutral-500 hover:bg-neutral-50"
            }`}
          >
            <Brain className="w-4 h-4 text-neutral-550" />
            <span>Exam Simulator</span>
          </button>

          <button
            onClick={() => { setActiveTab("flashcards"); setMobileMenuOpen(false); }}
            className={`w-full text-left flex items-center space-x-2 p-3 rounded-xl text-xs font-semibold ${
              activeTab === "flashcards" ? "bg-neutral-100 text-neutral-900" : "text-neutral-500 hover:bg-neutral-50"
            }`}
          >
            <ClipboardList className="w-4 h-4 text-neutral-550" />
            <span>High-Yield Recall Cards</span>
          </button>
        </div>
      )}

      {/* Main Body Section */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 sm:px-6">
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Dynamic Intro Frame */}
            <div className="no-print bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden shadow-2xs">
              <div className="space-y-3 z-10 max-w-xl text-left">
                <span className="text-[9px] text-neutral-500 font-extrabold tracking-widest uppercase bg-neutral-100 border border-neutral-200/50 px-2.5 py-1 rounded-sm">
                  Clinical Examination Portal
                </span>
                <h1 className="text-2xl sm:text-3.5xl font-semibold tracking-tight text-neutral-900 leading-tight font-serif">
                  Obstetrics MCQ Booklet
                </h1>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans font-light">
                  An academic self-testing suite mapped carefully to the <em className="text-neutral-850 font-medium italic">Obstetrics by Ten Teachers</em> core syllabus. Practice full boards mock scenarios, generate custom study pathways, and get instant explanations with our Gemini clinical tutor.
                </p>
              </div>

              {/* Action shortcuts */}
              <div className="flex shrink-0 gap-3 z-10">
                <button
                  id="btn_hero_test"
                  onClick={() => setActiveTab("quiz")}
                  className="bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-white font-semibold px-5.5 py-3 rounded-xl transition cursor-pointer text-xs tracking-normal shadow-xs"
                >
                  Configure Practice Test
                </button>
                <button
                  id="btn_hero_read"
                  onClick={() => setActiveTab("booklet")}
                  className="bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 font-semibold px-5.5 py-3 rounded-xl transition cursor-pointer text-xs"
                >
                  Browse Booklet
                </button>
              </div>
            </div>

            {/* Core Statistics component */}
            <DashboardStats
              progress={progress}
              onSelectChapter={selectChapterAndRoute}
              onSelectQuestion={selectQuestionAndRoute}
              onClearHistory={handleClearHistory}
            />
          </div>
        )}

        {activeTab === "booklet" && (
          <div className="space-y-2 text-left">
            <div className="no-print mb-5 pb-2 border-b border-neutral-200/50">
              <h2 className="text-2.5xl font-semibold text-neutral-900 font-serif tracking-tight">Clinical MCQ Booklet</h2>
              <p className="text-xs text-neutral-450 mt-1">Read, search, and self-test 145 curated questions directly from Chapters 1 to 16.</p>
            </div>
            
            <BookletViewer
              bookmarks={bookmarks}
              onToggleBookmark={handleToggleBookmark}
              selectedChapterId={selectedChapterId}
              onSelectChapter={setSelectedChapterId}
            />
          </div>
        )}

        {activeTab === "quiz" && (
          <div className="space-y-2">
            <div className="no-print text-left mb-5 pb-2 border-b border-neutral-200/50">
              <h2 className="text-2.5xl font-semibold text-neutral-900 font-serif tracking-tight">Adaptive Board Simulator</h2>
              <p className="text-xs text-neutral-450 mt-1">Acclimate to realistic board pacing under randomized multi-chapter conditions.</p>
            </div>

            <PracticeQuiz
              bookmarks={bookmarks}
              onToggleBookmark={handleToggleBookmark}
              onQuizCompleted={handleQuizCompleted}
              onBackToDashboard={() => setActiveTab("dashboard")}
            />
          </div>
        )}

        {activeTab === "flashcards" && (
          <div className="space-y-2">
            <div className="text-left mb-5 pb-2 border-b border-neutral-200/50">
              <h2 className="text-2.5xl font-semibold text-neutral-900 font-serif tracking-tight">Active Recall Cards</h2>
              <p className="text-xs text-neutral-450 mt-1">Drill high-yield protocols, diagnostic criteria thresholds, and critical medical guidelines.</p>
            </div>

            <Flashcards />
          </div>
        )}
      </main>

      {/* Pure footer layout */}
      <footer className="no-print mt-auto py-6 bg-white border-t border-neutral-200/60 text-center text-[10.5px] text-neutral-400 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 uppercase tracking-wider text-[10px]">
          <div>
            © 2026 Obstetrics MCQ Booklet. Built for Clinical Learners.
          </div>
          <div className="flex items-center gap-2 text-neutral-450">
            <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full animate-pulse"></span>
            <span>Study Status: Active Connection</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
