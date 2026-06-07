import React, { useState, useMemo } from "react";
import { Question, Chapter } from "../types";
import { QUESTIONS, CHAPTERS } from "../data/questions";
import { Search, Printer, Eye, EyeOff, BookOpen, AlertCircle, Heart, Star } from "lucide-react";
import AICompanion from "./AICompanion";

interface BookletViewerProps {
  bookmarks: number[];
  onToggleBookmark: (id: number) => void;
  selectedChapterId?: number | null;
  onSelectChapter: (id: number | null) => void;
}

export default function BookletViewer({
  bookmarks,
  onToggleBookmark,
  selectedChapterId,
  onSelectChapter
}: BookletViewerProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showAllAnswers, setShowAllAnswers] = useState<boolean>(true);
  const [revealedIds, setRevealedIds] = useState<{ [id: number]: boolean }>({});
  const [aiCompanionTarget, setAiCompanionTarget] = useState<Question | null>(null);

  // Filter and search computation
  const filteredQuestions = useMemo(() => {
    return QUESTIONS.filter(q => {
      const matchChapter = selectedChapterId ? q.chapterId === selectedChapterId : true;
      const matchSearch = searchTerm
        ? q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.rationale.toLowerCase().includes(searchTerm.toLowerCase()) ||
          Object.values(q.options).some(opt => opt.toLowerCase().includes(searchTerm.toLowerCase()))
        : true;
      return matchChapter && matchSearch;
    });
  }, [selectedChapterId, searchTerm]);

  const toggleRevealIndividual = (id: number) => {
    setRevealedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Search and control filter panel - hidden on media printing */}
      <div className="no-print bg-white p-5 rounded-xl border border-neutral-205/80 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-400" />
          <input
            id="booklet_search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions, rationales, or options..."
            className="w-full bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:outline-none rounded-xl pl-10 pr-4 py-2.5 text-sm text-neutral-700"
          />
        </div>

        {/* Chapter select */}
        <div className="flex items-center space-x-3 shrink-0">
          <select
            id="booklet_chapter_select"
            value={selectedChapterId || ""}
            onChange={(e) => onSelectChapter(e.target.value ? Number(e.target.value) : null)}
            className="bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:outline-none rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-700 cursor-pointer"
          >
            <option value="">All Chapters (Full Booklet)</option>
            {CHAPTERS.map(ch => (
              <option key={ch.id} value={ch.id}>
                {ch.id <= 9 ? `Ch 0${ch.id}` : `Ch ${ch.id}`}: {ch.name.split(":")[1]?.trim() || ch.name}
              </option>
            ))}
          </select>

          {/* Quick interactive parameters */}
          <button
            id="btn_toggle_answers"
            onClick={() => setShowAllAnswers(!showAllAnswers)}
            className="p-2.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300 text-neutral-600 rounded-xl transition cursor-pointer"
            title={showAllAnswers ? "Hide all answers to self-test" : "Reveal all answers"}
          >
            {showAllAnswers ? <EyeOff className="w-5 h-5 text-neutral-850" /> : <Eye className="w-5 h-5 text-neutral-500" />}
          </button>

          <button
            id="btn_print_booklet"
            onClick={handlePrint}
            className="flex items-center space-x-2 bg-neutral-900 hover:bg-neutral-805 text-white font-semibold px-4 py-2.5 rounded-xl transition cursor-pointer shadow-xs text-xs uppercase tracking-wider"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Print-only title cover */}
      <div className="print-only hidden text-left mb-8 border-b pb-4 border-neutral-300">
        <h1 className="text-3xl font-bold text-neutral-900 tracking-tight mb-2 font-serif">
          Obstetrics by Ten Teachers MCQ Study Booklet
        </h1>
        <p className="text-sm text-neutral-500 font-serif">
          Comprehensive chapter-by-chapter clinical study guidelines & interactive answers key.
        </p>
        {selectedChapterId && (
          <p className="text-xs text-neutral-600 mt-1 font-bold font-serif">
            Chapter selection: {CHAPTERS.find(c => c.id === selectedChapterId)?.name}
          </p>
        )}
      </div>

      {/* Grid containing booklet lists and AI Companion sticky on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div id="booklet_list" className="lg:col-span-2 space-y-6">
          {filteredQuestions.length === 0 ? (
            <div className="bg-white p-12 text-center border border-neutral-200/60 rounded-xl space-y-3">
              <BookOpen className="w-12 h-12 text-neutral-200 mx-auto" />
              <p className="text-sm font-semibold text-neutral-600">No matching questions found</p>
              <p className="text-xs text-neutral-400">Try adjusting your filters or search keywords.</p>
            </div>
          ) : (
            filteredQuestions.map((q, idx) => {
              const isRevealed = showAllAnswers || revealedIds[q.id];
              const isBookmarked = bookmarks.includes(q.id);

              return (
                <div
                  key={q.id}
                  id={`booklet_question_card_${q.id}`}
                  className="bg-white border border-neutral-205/60 rounded-xl p-6 text-left shadow-2xs space-y-4 relative break-inside-avoid print:border-none print:shadow-none print:p-0 print:border-b print:border-neutral-200 print:pb-6 print:rounded-none"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between no-print">
                    <span className="text-[10px] bg-neutral-100 text-neutral-500 px-2.5 py-1 rounded-sm font-bold uppercase tracking-wider">
                      Q{q.id} • {q.chapterName.split(":")[0]}
                    </span>

                    <div className="flex items-center space-x-3.5">
                      <button
                        onClick={() => setAiCompanionTarget(q)}
                        className="text-[10.5px] font-bold text-neutral-900 hover:text-black uppercase tracking-wider cursor-pointer"
                      >
                        Explain with AI
                      </button>

                      <button
                        id={`btn_bookmark_toggle_${q.id}`}
                        onClick={() => onToggleBookmark(q.id)}
                        className={`p-1.5 rounded-lg transition cursor-pointer ${
                          isBookmarked ? "text-amber-500 hover:bg-neutral-50" : "text-neutral-300 hover:bg-neutral-50"
                        }`}
                        title={isBookmarked ? "Remove Bookmark" : "Save Question"}
                      >
                        <Star className="w-4.5 h-4.5 fill-current" />
                      </button>
                    </div>
                  </div>

                  {/* Print-only card header */}
                  <div className="print-only hidden text-left mb-2">
                    <span className="text-xs font-bold font-mono text-neutral-500">
                      QUESTION {q.id} • CHAPTER {q.chapterId}: {q.chapterName}
                    </span>
                  </div>

                  {/* Question body */}
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-relaxed font-serif">
                    {q.question}
                  </h3>

                  {/* Choices list */}
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(q.options).map(([key, value]) => {
                      const isCorrect = key === q.answer;
                      return (
                        <div
                          key={key}
                          className={`flex items-start rounded-xl px-4 py-2.5 border text-xs leading-relaxed font-medium transition ${
                            isRevealed && isCorrect
                              ? "bg-neutral-900 text-white border-neutral-900 print:bg-neutral-100 print:text-neutral-900 print:border-neutral-350"
                              : "bg-neutral-50/40 text-neutral-600 border-neutral-200/50 hover:border-neutral-300"
                          }`}
                        >
                          <span className="w-6 font-bold text-neutral-500 uppercase">{key}.</span>
                          <span className="flex-1">{value}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Answer and explanations area */}
                  <div className={`space-y-3 pt-3 border-t border-dashed border-neutral-200/60 transition duration-155 ${isRevealed ? "block" : "hidden print:block"}`}>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold text-neutral-900 bg-neutral-100 border border-neutral-200 px-2.5 py-0.5 rounded-sm uppercase tracking-wider">
                        Correct Answer: {q.answer}
                      </span>
                    </div>

                    <div className="bg-neutral-50/70 p-3.5 rounded-xl text-xs text-neutral-600 leading-relaxed font-sans print:bg-neutral-50 print:border-none">
                      <strong className="text-neutral-800 font-bold block mb-1">Answer Rationale & Clinical Points:</strong>
                      {q.rationale}
                    </div>
                  </div>

                  {/* Interactive toggle for self study when all answers hidden */}
                  {!showAllAnswers && (
                    <button
                      id={`btn_reveal_individual_${q.id}`}
                      onClick={() => toggleRevealIndividual(q.id)}
                      className="no-print mt-2 w-full text-center py-2 border border-dashed border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 text-xs text-neutral-700 hover:text-neutral-900 font-bold rounded-xl transition cursor-pointer"
                    >
                      {revealedIds[q.id] ? "Hide Answer Key" : "Check Answer Key & Explanation"}
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* AI Companion Floating Tool Bar on desktop */}
        <div className="no-print hidden lg:block lg:col-span-1">
          <div className="sticky top-6">
            <AICompanion
              question={aiCompanionTarget || filteredQuestions[0] || QUESTIONS[0]}
            />
          </div>
        </div>
      </div>

      {/* Micro instructions explaining PDF printing */}
      <div className="no-print bg-stone-50 border border-stone-200 rounded-xl p-5 text-left text-xs text-stone-800 space-y-2 max-w-3xl">
        <div className="flex items-center space-x-2 font-bold text-stone-900">
          <AlertCircle className="w-4.5 h-4.5 text-stone-600" />
          <span>Printer Guide: Guidelines for PDF Booklet Exports</span>
        </div>
        <p className="text-stone-700/90 leading-relaxed">
          To generate an incredibly clean physical book or saved PDF pamphlet, click our **Print / Save PDF** button. In the browser printing panel: set **Layout to Portrait**, enable **Background Graphics**, and turn on **Margins (Default)** to generate beautifully styled, marginated, study note booklets formatted automatically.
        </p>
      </div>
    </div>
  );
}
