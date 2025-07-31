// src/Templates/MultipleChoiceInteractiveComponent.tsx
import React, { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { RotateCw, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

export interface QuizQuestion {
  id?: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  explanationType?: 'text' | 'math';
  questionType?: 'text' | 'math';
  optionType?: 'text' | 'math';
  CustomContentComponent?: React.FC<{
    question: QuizQuestion;
  }>;
}

interface MultipleChoiceInteractiveComponentProps {
  title: string;
  icon: string;
  theme: {
    from: string;
    to: string;
    button: string;
    buttonHover: string;
  };
  rules: string[];
  rulesTitle?: string;
  questions: QuizQuestion[];
  onReset?: () => void;
}

const MultipleChoiceInteractiveComponent: React.FC<MultipleChoiceInteractiveComponentProps> = ({
  title,
  icon,
  theme,
  rules,
  rulesTitle = 'Key Rules:',
  questions,
  onReset,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean; correctAnswerText?: string } | null>(null);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const currentQuestion = questions[currentQuestionIndex];

  const getGridColsClass = (options: string[]): string => {
    const longOptionThreshold = 40;
    const hasLongOption = options.some(option => option.length > longOptionThreshold);
    const hasComplexKaTeX = options.some(option =>
      option.includes('\\frac') ||
      option.includes('\\sqrt') ||
      option.includes('\\int') ||
      option.includes('\\sum') ||
      (option.match(/\$/g) || []).length > 2
    );
    if (hasLongOption || hasComplexKaTeX) {
      return 'grid-cols-1';
    }
    return 'grid-cols-2';
  };
  const gridColsClass = getGridColsClass(currentQuestion.options);

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    const isCorrect = selectedAnswer === currentQuestion.correct;
    if (isCorrect) {
      setFeedback({
        message: 'Correct! ✓',
        isCorrect: true,
      });
      setScore(score + 1);
    } else {
      setFeedback({
        message: `Incorrect.`,
        isCorrect: false,
        correctAnswerText: currentQuestion.options[currentQuestion.correct]
      });
    }
    setAttempts(attempts + 1);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setSelectedAnswer(null);
    setFeedback(null);
    setShowExplanation(false);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setFeedback(null);
    setScore(0);
    setAttempts(0);
    setShowExplanation(false);
    if (onReset) onReset();
  };

  const getFeedbackColor = () => {
    if (!feedback) return '';
    return feedback.isCorrect
      ? 'bg-green-500/20 border-green-400'
      : 'bg-amber-500/20 border-amber-400';
  };

  const renderExplanation = () => {
    return renderTextWithMath(currentQuestion.explanation)
  };

  const renderTextWithMath = (text: string): React.ReactNode => {
    const parts = text.split(/(\$[^$]*\$)/g);
    return (
      <>
        {parts.map((part, i) =>
          part.startsWith('$') && part.endsWith('$') ? (
            <InlineMath key={i} math={part.slice(1, -1)} />
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div className={`bg-gradient-to-br ${theme.from} ${theme.to} p-6 rounded-3xl text-white shadow-xl max-w-md w-full`}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold flex items-center">
          <span className="mr-2 text-3xl">{icon}</span> {title}
        </h3>
        <div className="flex gap-2">
          <div className="bg-white/20 text-sm font-bold px-3 py-1 rounded-full">
            {score}/{attempts || '0'}
          </div>
          <button
            onClick={resetQuiz}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
            aria-label="Reset quiz"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-5 shadow-sm border border-white/10">
        <div className="text-center">
          <span className="text-sm opacity-90">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 mb-5 shadow-sm border border-white/10">
        {currentQuestion.CustomContentComponent ? (
          <div className="mb-4">
            <currentQuestion.CustomContentComponent question={currentQuestion} />
          </div>
        ) : (
          <h4 className="font-bold text-lg mb-4">
            {currentQuestion.questionType === "text" ? renderTextWithMath(currentQuestion.question) : <BlockMath math={currentQuestion.question} />}
          </h4>
        )}

        <div className={`grid gap-3 mb-5 ${gridColsClass}`}>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(index)}
              disabled={!!feedback}
              className={`py-3 px-2 rounded-xl font-bold transition-all duration-200 ${
                selectedAnswer === index
                  ? feedback
                    ? index === currentQuestion.correct
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-white/40 text-white border-2 border-white'
                  : feedback && index === currentQuestion.correct
                    ? 'bg-green-500/30 text-white border-2 border-green-400'
                    : 'bg-white/20 hover:bg-white/30 text-white border-2 border-transparent'
              } ${feedback ? 'cursor-default' : 'hover:scale-[1.03]'}`}
            >
              {currentQuestion.optionType === "text" ? renderTextWithMath(option) : <InlineMath math={option} />}
            </button>
          ))}
        </div>

        {selectedAnswer !== null && !feedback && (
          <button
            onClick={checkAnswer}
            className={`w-full ${theme.button} ${theme.buttonHover} rounded-xl p-3 font-bold transition-all duration-200 shadow-md mt-3`}
          >
            Check Answer
          </button>
        )}
      </div>

      {feedback && (
        <div className={`rounded-2xl p-5 mb-5 backdrop-blur-sm border ${getFeedbackColor()}`}>
          <div className="flex items-center mb-3">
            {feedback.isCorrect ? (
              <CheckCircle className="text-green-300 mr-2" size={24} />
            ) : (
              <XCircle className="text-amber-300 mr-2" size={24} />
            )}
            <p className={`font-bold text-lg ${feedback.isCorrect ? 'text-green-100' : 'text-amber-100'}`}>
              {feedback.message}
            </p>
            {!feedback.isCorrect && feedback.correctAnswerText && (
              <div className="ml-2 font-bold">
                 {currentQuestion.optionType === 'text' ? renderTextWithMath(feedback.correctAnswerText) : <InlineMath math={feedback.correctAnswerText} />}
              </div>
            )}
          </div>
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="flex items-center text-white/90 font-medium text-sm mb-3"
          >
            <HelpCircle className="mr-1" size={16} />
            {showExplanation ? 'Hide explanation' : 'Show explanation'}
          </button>
          {showExplanation && (
            <div className="bg-white/10 rounded-xl p-4">
              <div className="w-full">
                <div className="w-full">
                  {renderExplanation()}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={nextQuestion}
          className="flex-1 bg-white/20 hover:bg-white/30 rounded-xl p-3 font-bold transition-all duration-200 shadow-md"
        >
          {currentQuestionIndex === questions.length - 1
            ? 'Restart Quiz'
            : 'Next Question'} →
        </button>
      </div>

      <div className="mt-4 bg-white/10 rounded-xl p-3 text-sm">
        <p className="font-bold mb-1">{rulesTitle}</p>
        <ul className="list-disc list-inside space-y-1">
          {rules.map((rule, index) => (
            <li key={index}>{renderTextWithMath(rule)} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultipleChoiceInteractiveComponent;