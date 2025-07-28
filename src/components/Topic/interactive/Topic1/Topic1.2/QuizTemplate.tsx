import { ReactNode } from "react";
import { Target, CheckCircle, XCircle } from "lucide-react";

// Theme configuration
interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  button: string;
  buttonActive: string;
  correct: string;
  incorrect: string;
}

const themes: Record<string, Theme> = {
  blue: {
    primary: "bg-blue-500",
    secondary: "bg-blue-600",
    accent: "bg-cyan-500",
    text: "text-white",
    button: "bg-white/20 hover:bg-white/40",
    buttonActive: "bg-green-500 hover:bg-green-600",
    correct: "ring-green-400",
    incorrect: "ring-red-400"
  },
  purple: {
    primary: "bg-purple-500",
    secondary: "bg-purple-600",
    accent: "bg-pink-500",
    text: "text-white",
    button: "bg-white/20 hover:bg-white/40",
    buttonActive: "bg-green-500 hover:bg-green-600",
    correct: "ring-green-400",
    incorrect: "ring-red-400"
  },
  green: {
    primary: "bg-green-500",
    secondary: "bg-green-600",
    accent: "bg-emerald-500",
    text: "text-white",
    button: "bg-white/20 hover:bg-white/40",
    buttonActive: "bg-green-500 hover:bg-green-600",
    correct: "ring-green-400",
    incorrect: "ring-red-400"
  },
  orange: {
    primary: "bg-orange-500",
    secondary: "bg-orange-600",
    accent: "bg-amber-500",
    text: "text-white",
    button: "bg-white/20 hover:bg-white/40",
    buttonActive: "bg-green-500 hover:bg-green-600",
    correct: "ring-green-400",
    incorrect: "ring-red-400"
  }
};

interface QuizTemplateProps<T> {
  title: string;
  theme?: string;
  question: ReactNode;
  choices: T[];
  selectedAnswer: T | null;
  onSelectAnswer: (answer: T) => void;
  showResult: boolean;
  isCorrect: boolean;
  correctAnswer: T;
  explanation: ReactNode;
  score: number;
  attempts: number;
  onCheckAnswer: () => void;
  onNewQuestion: () => void;
  disabled?: boolean;
}

const QuizTemplate = <T,>({
  title,
  theme = "blue",
  question,
  choices,
  selectedAnswer,
  onSelectAnswer,
  showResult,
  isCorrect,
  correctAnswer,
  explanation,
  score,
  attempts,
  onCheckAnswer,
  onNewQuestion,
  disabled = false
}: QuizTemplateProps<T>) => {
  const currentTheme = themes[theme] || themes.blue;

  return (
    <div className={`${currentTheme.primary} p-6 rounded-2xl ${currentTheme.text}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center">
          <Target className="mr-2" /> {title}
        </h3>
        <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
          Score: {score}/{attempts}
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
        <p className="text-lg mb-4">
          {question}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => !showResult && !disabled && onSelectAnswer(choice)}
              className={`p-3 rounded-lg font-mono text-lg transition-all duration-200 flex items-center justify-center ${
                selectedAnswer === choice
                  ? "bg-white/40 ring-2 ring-white"
                  : "bg-white/20 hover:bg-white/30"
              } ${
                showResult && choice === correctAnswer
                  ? `ring-2 ${currentTheme.correct}`
                  : ""
              } ${
                showResult && 
                selectedAnswer === choice && 
                choice !== correctAnswer
                  ? `ring-2 ${currentTheme.incorrect}`
                  : ""
              }`}
              disabled={showResult || disabled}
            >
              {typeof choice === 'string' ? <span dangerouslySetInnerHTML={{ __html: choice }} /> : choice as ReactNode}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={onCheckAnswer}
          // FIXED: Explicitly check for null instead of truthy/falsy
          disabled={selectedAnswer === null || showResult || disabled}
          className={`flex-1 rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105 disabled:scale-100 ${
            selectedAnswer !== null && !showResult && !disabled
              ? `${currentTheme.buttonActive} text-white`
              : "bg-white/30 disabled:bg-gray-400/30"
          }`}
        >
          Check Answer
        </button>

        <button
          onClick={onNewQuestion}
          className={`flex-1 ${currentTheme.button} rounded-lg p-3 font-bold transition-all duration-200 hover:scale-105`}
        >
          New Question
        </button>
      </div>

      {showResult && (
        <div
          className={`bg-white/20 backdrop-blur-sm rounded-xl p-4 ${
            isCorrect ? `ring-2 ${currentTheme.correct}` : `ring-2 ${currentTheme.incorrect}`
          }`}
        >
          <div className="flex items-center mb-2">
            {isCorrect ? (
              <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
            ) : (
              <XCircle className="w-5 h-5 mr-2 text-red-300" />
            )}
            <span className="font-bold">
              {isCorrect ? "Correct!" : "Incorrect"}
            </span>
          </div>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
};

export { QuizTemplate, themes };