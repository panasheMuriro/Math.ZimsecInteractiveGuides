// src/Templates/MultipleChoiceInteractiveComponent.tsx
import React, { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { RotateCw, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

// Color Palette Variables
const COLORS = {
  darkBlue: '#264653',   // Darkest color
  teal: '#2a9d8f',       // Used for background
  yellow: '#e9c46a',     // Light yellow
  orange: '#f4a261',     // Orange
  red: '#e76f51',        // Red/Orange
  text: '#ffffff',       // White text
  textOnLight: '#264653', // Dark text for light backgrounds
  correct: '#2a9d8f',    // Teal for correct
  incorrect: '#e76f51',  // Red for incorrect
  feedbackCorrectBg: '#e8f4f2', // Light teal background
  feedbackIncorrectBg: '#fce8e6', // Light red background
  buttonHover: '#f6b78a', // Lighter orange
  nextButtonHover: '#2ebfae', // Lighter teal
  infoBoxBg: '#e8f4f2',   // Light teal
  optionDefaultBg: '#d1e7e4', // Lighter teal
  optionHoverBg: '#c0ddd8',  // Even lighter teal
  optionSelectedBorder: '#264653', // Dark blue border
  correctUnselectedBorder: '#2a9d8f', // Teal border
};

// Neubrutalism styles helper
const neubrutalismBase = {
  border: `3px solid ${COLORS.darkBlue}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px rgba(38, 70, 83, 0.2)`, // COLORS.darkBlue with opacity
  padding: '1rem',
};

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
    from: string; // Not used with new color system
    to: string;   // Not used with new color system
    button: string; // Not used with new color system
    buttonHover: string; // Not used with new color system
  };
  rules: string[];
  rulesTitle?: string;
  questions: QuizQuestion[];
  onReset?: () => void;
}

const MultipleChoiceInteractiveComponent: React.FC<MultipleChoiceInteractiveComponentProps> = ({
  title,
  icon,
  // theme, // theme is now unused, but kept for interface compatibility
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
  const [previousAttempts, setPreviousAttempts] = useState<Set<number>>(new Set()); // Track previously attempted questions
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
    
    // Only increment attempts and potentially score if this is the first attempt at this question
    if (!previousAttempts.has(currentQuestionIndex)) {
      setAttempts(prev => prev + 1);
      setPreviousAttempts(prev => new Set(prev).add(currentQuestionIndex));
      
      if (isCorrect) {
        setScore(prev => prev + 1);
      }
    }
    
    if (isCorrect) {
      setFeedback({
        message: 'Correct! ✓',
        isCorrect: true,
      });
    } else {
      setFeedback({
        message: `Incorrect.`,
        isCorrect: false,
        correctAnswerText: currentQuestion.options[currentQuestion.correct]
      });
    }
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
    setPreviousAttempts(new Set());
    if (onReset) onReset();
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
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: COLORS.teal, // Using teal as background
        borderColor: COLORS.darkBlue, // Dark blue border
        color: COLORS.textOnLight, // Dark text for contrast on light backgrounds
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${COLORS.darkBlue}`,
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <h3
          className="text-2xl font-extrabold flex items-center"
          style={{ color: COLORS.text }}
        >
          <span className="mr-2 text-3xl">{icon}</span> {title}
        </h3>
        <div className="flex gap-2">
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: COLORS.darkBlue,
              color: COLORS.text,
              borderColor: COLORS.orange,
              fontWeight: 'bold',
              fontSize: '0.875rem',
              padding: '0.5rem 1rem',
            }}
          >
            {score}/{attempts || '0'}
          </div>
          <button
            onClick={resetQuiz}
            style={{
              ...neubrutalismBase,
              backgroundColor: COLORS.red,
              color: COLORS.text,
              borderColor: COLORS.text,
              padding: '0.5rem',
            }}
            aria-label="Reset quiz"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        style={{
          ...neubrutalismBase,
          backgroundColor: COLORS.orange,
          borderColor: COLORS.darkBlue,
          textAlign: 'center',
          marginBottom: '1.25rem',
        }}
      >
        <div className="text-center">
          <span
            className="text-sm font-extrabold"
            style={{ color: COLORS.textOnLight }}
          >
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>
      </div>

      <div
        style={{
          ...neubrutalismBase,
          backgroundColor: COLORS.infoBoxBg,
          borderColor: COLORS.darkBlue,
          marginBottom: '1.25rem',
        }}
      >
        {currentQuestion.CustomContentComponent ? (
          <div className="mb-4">
            <currentQuestion.CustomContentComponent question={currentQuestion} />
          </div>
        ) : (
          <h4
            className="font-extrabold text-lg mb-4"
            style={{ color: COLORS.textOnLight }}
          >
            {currentQuestion.questionType === "math" ? <BlockMath math={currentQuestion.question} /> : renderTextWithMath(currentQuestion.question)}
          </h4>
        )}

        <div className={`grid gap-3 mb-5 ${gridColsClass}`}>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(index)}
              // Allow changing selection even after feedback
              style={{
                ...neubrutalismBase,
                padding: '1rem',
                fontWeight: 'bold',
                transition: 'all 0.2s',
                backgroundColor: selectedAnswer === index
                  ? feedback
                    ? index === currentQuestion.correct
                      ? COLORS.correct // Teal
                      : COLORS.incorrect // Red
                    : COLORS.yellow // Yellow for selected, no feedback
                  : feedback && index === currentQuestion.correct
                    ? COLORS.feedbackCorrectBg // Light teal
                    : COLORS.optionDefaultBg, // Default light teal
                color: selectedAnswer === index
                  ? feedback
                    ? COLORS.text // White text for selected with feedback
                    : COLORS.textOnLight // Dark text for selected without feedback
                  : feedback && index === currentQuestion.correct
                    ? COLORS.textOnLight // Dark text for correct unselected
                    : COLORS.textOnLight, // Dark text
                borderColor: selectedAnswer === index
                  ? feedback
                    ? index === currentQuestion.correct
                      ? COLORS.darkBlue // Dark blue border for correct selected
                      : COLORS.darkBlue // Dark blue border for incorrect selected
                    : COLORS.optionSelectedBorder // Dark blue border for selected
                  : feedback && index === currentQuestion.correct
                    ? COLORS.correctUnselectedBorder // Teal border for correct unselected
                    : COLORS.darkBlue, // Dark blue border
                transform: selectedAnswer === index && !feedback ? 'scale(0.98)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (selectedAnswer !== index) {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedAnswer !== index) {
                  e.currentTarget.style.transform = '';
                }
              }}
              className="transition-transform duration-200"
            >
              <span style={{ color: 'inherit' }}>
                {currentQuestion.optionType === "math" ? <InlineMath math={option} /> : renderTextWithMath(option)}
              </span>
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <button
            onClick={checkAnswer}
            style={{
              ...neubrutalismBase,
              backgroundColor: COLORS.orange,
              color: COLORS.textOnLight,
              borderColor: COLORS.darkBlue,
              fontWeight: 'bold',
              width: '100%',
              padding: '0.75rem',
              marginTop: '0.75rem',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.buttonHover}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.orange}
          >
            Check Answer
          </button>
        )}
      </div>

      {feedback && (
        <div
          style={{
            ...neubrutalismBase,
            borderColor: feedback.isCorrect
              ? COLORS.correct
              : COLORS.incorrect,
            backgroundColor: feedback.isCorrect
              ? COLORS.feedbackCorrectBg
              : COLORS.feedbackIncorrectBg,
            marginTop: '1.25rem',
          }}
        >
          <div className="flex items-center mb-3">
            {feedback.isCorrect ? (
              <CheckCircle
                size={24}
                style={{ color: COLORS.correct, marginRight: '0.5rem' }}
              />
            ) : (
              <XCircle
                size={24}
                style={{ color: COLORS.incorrect, marginRight: '0.5rem' }}
              />
            )}
            <p
              className="font-extrabold text-lg"
              style={{
                color: feedback.isCorrect ? COLORS.correct : COLORS.incorrect
              }}
            >
              {feedback.message}
            </p>
            {!feedback.isCorrect && feedback.correctAnswerText && (
              <div
                className="ml-2 font-bold"
                style={{ color: COLORS.textOnLight }}
              >
                Correct answer: {currentQuestion.optionType === 'text' ? renderTextWithMath(feedback.correctAnswerText) : <InlineMath math={feedback.correctAnswerText} />}
              </div>
            )}
          </div>

          <button
            onClick={() => setShowExplanation(!showExplanation)}
            style={{
              color: COLORS.orange,
              fontWeight: 'medium',
              fontSize: '0.875rem',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = COLORS.buttonHover}
            onMouseLeave={(e) => e.currentTarget.style.color = COLORS.orange}
          >
            <HelpCircle className="mr-1" size={16} />
            {showExplanation ? 'Hide explanation' : 'Show explanation'}
          </button>

          {showExplanation && (
            <div
              style={{
                ...neubrutalismBase,
                backgroundColor: COLORS.infoBoxBg,
                borderColor: COLORS.darkBlue,
              }}
            >
              <div className="w-full">
                <div
                  className="w-full"
                  style={{ color: COLORS.textOnLight }}
                >
                  {renderExplanation()}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex gap-3 mb-5">
        <button
          onClick={nextQuestion}
          style={{
            ...neubrutalismBase,
            flex: 1,
            padding: '0.75rem',
            fontWeight: 'bold',
            backgroundColor: COLORS.red,
            color: COLORS.text,
            borderColor: COLORS.text,
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.nextButtonHover}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.darkBlue}
        >
          {currentQuestionIndex === questions.length - 1
            ? 'Restart Quiz'
            : 'Next Question'} →
        </button>
      </div>

      <div
        style={{
          ...neubrutalismBase,
          backgroundColor: COLORS.infoBoxBg,
          borderColor: COLORS.darkBlue,
          marginTop: '1rem',
          fontSize: '0.875rem',
        }}
      >
        <p
          className="font-extrabold mb-1"
          style={{ color: COLORS.textOnLight }}
        >
          {rulesTitle}
        </p>
        <ul className="list-disc list-inside space-y-1">
          {rules.map((rule, index) => (
            <li
              key={index}
              style={{ color: COLORS.textOnLight }}
            >
              {renderTextWithMath(rule)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultipleChoiceInteractiveComponent;