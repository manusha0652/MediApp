export interface Question {
  id: number;
  chapterId: number;
  chapterName: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  answer: "A" | "B" | "C" | "D" | "E";
  rationale: string;
}

export interface Chapter {
  id: number;
  name: string;
  description: string;
  questionCount: number;
}

export interface QuizSession {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: { [questionId: number]: "A" | "B" | "C" | "D" | "E" | null };
  timeRemaining: number; // in seconds
  totalTime: number;
  isCompleted: boolean;
  score: number;
  chapterScores: { [chapterId: number]: { correct: number; total: number } };
}

export interface Bookmark {
  questionId: number;
  savedAt: string;
}

export interface ProgressState {
  completedQuizzes: number;
  averageScore: number;
  chapterMastery: { [chapterId: number]: number }; // percentage
  answeredQuestionIds: { [questionId: number]: "correct" | "incorrect" };
  bookmarks: number[]; // question IDs
}
