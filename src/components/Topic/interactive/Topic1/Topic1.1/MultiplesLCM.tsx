// export default MultiplesLCM;
import { useState, useMemo } from 'react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { RotateCw, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

// Helper function to render text with inline math
const renderTextWithMath = (text: string): React.ReactNode => {
  // Handle potential newlines in the text (though not used here)
  const lines = text.split('\\\\');
  return (
    <>
      {lines.map((line, lineIndex) => {
        const parts = line.split(/(\$[^$]*\$)/g);
        return (
          <div key={lineIndex} className="flex flex-wrap items-center">
            {parts.map((part, i) =>
              part.startsWith('$') && part.endsWith('$') ? (
                <InlineMath key={`${lineIndex}-${i}`} math={part.slice(1, -1)} />
              ) : (
                <span key={`${lineIndex}-${i}`}>{part}</span>
              )
            )}
          </div>
        );
      })}
    </>
  );
};

// Color Palette Variables - Adapted for Neubrutalism
const COLORS = {
  primary: '#d00000',      // Red
  secondary: '#ffba08',    // Yellow
  accent1: '#3f88c5',      // Blue
  background: '#ffecd1',   // Light Cream (much lighter!)
  surface: '#15616d',      // Dark Teal
  text: '#001524',         // Very Dark Blue (for text contrast)
  textOnDark: '#ffffff',   // White (for dark backgrounds)
  correct: '#3f88c5',      // Blue
  incorrect: '#d00000',    // Red
  selected: '#ffba08',     // Yellow
  feedbackCorrectBg: '#e8f4fa', // Light blue background
  feedbackIncorrectBg: '#fce8e8', // Light red background
  buttonHover: '#ffca45',  // Lighter Yellow
  nextButtonHover: '#ff2a2a', // Lighter Red
  infoBoxBg: '#e6f7ff',    // Very light blue
  questionBg: '#e6f7ff',   // Very light blue
  multiplesBoxBg: '#ffffff', // White
  multiplesBoxBorder: '#15616d', // Dark Teal
  feedbackCorrectBorder: '#3f88c5', // Blue
  feedbackIncorrectBorder: '#d00000', // Red
  defaultButtonBg: '#f0f0f0', // Light gray
  defaultButtonBorder: '#15616d', // Dark Teal
  correctUnselectedBorder: '#3f88c5', // Blue
  methodBoxBg: '#ffffff', // White
  border: '#000000' // Black for neubrutalism borders
};

const MultiplesLCM = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedLCM, setSelectedLCM] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [showMethod, setShowMethod] = useState<boolean>(false);

  // Helper function to find first n multiples of a number
  const findMultiples = (num: number, count: number = 8): number[] => {
    return Array.from({ length: count }, (_, i) => num * (i + 1));
  };

  // LCM questions with shuffled multiples - Updated explanations for renderTextWithMath
  const lcmQuestions = [
    {
      numbers: [4, 6],
      correctLCM: 12,
      method: 'Listing Method',
      explanation: 'Multiples of $4$: $4, 8, 12, 16, 20, 24, \\ldots$ Multiples of $6$: $6, 12, 18, 24, 30, \\ldots$ Common: $12, 24, \\ldots$ L.C.M. = $12$'
    },
    {
      numbers: [12, 18],
      correctLCM: 36,
      method: 'Prime Factorization',
      explanation: '$12 = 2^2 \\times 3^1$, $\\quad$ $18 = 2^1 \\times 3^2$ L.C.M. $= 2^{\\max(2,1)} \\times 3^{\\max(1,2)} = 2^2 \\times 3^2 = 4 \\times 9 = 36$'
    },
    {
      numbers: [8, 12],
      correctLCM: 24,
      method: 'Listing Method',
      explanation: 'Multiples of $8$: $8, 16, 24, 32, 40, \\ldots$ Multiples of $12$: $12, 24, 36, 48, \\ldots$ Common: $24, \\ldots$ L.C.M. = $24$'
    },
    {
      numbers: [15, 20],
      correctLCM: 60,
      method: 'Prime Factorization',
      explanation: '$15 = 3^1 \\times 5^1$, $\\quad$ $20 = 2^2 \\times 5^1$ L.C.M. $= 2^2 \\times 3^1 \\times 5^1 = 4 \\times 3 \\times 5 = 60$'
    }
  ];

  // Memoized shuffled multiples - only recalculates when currentQuestion changes
  const shuffledMultiples = useMemo(() => {
    const question = lcmQuestions[currentQuestion];
    const multiples1 = findMultiples(question.numbers[0], 6);
    const multiples2 = findMultiples(question.numbers[1], 6);

    // Combine and deduplicate multiples
    const allMultiples = [...new Set([...multiples1, ...multiples2])];

    // Add some additional multiples to make it challenging
    const additionalMultiples = [
      question.correctLCM * 2,
      question.correctLCM * 3,
      question.correctLCM + 10,
      question.correctLCM - 5
    ].filter(m => m > 0 && !allMultiples.includes(m));

    const combinedMultiples = [...allMultiples, ...additionalMultiples];

    // Shuffle the multiples
    return combinedMultiples.sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  const checkAnswer = () => {
    if (selectedLCM === null) return;

    const question = lcmQuestions[currentQuestion];
    const isCorrect = selectedLCM === question.correctLCM;

    if (isCorrect) {
      setFeedback({
        message: 'Correct! ✓',
        isCorrect: true
      });
      setScore(score + 1);
    } else {
      setFeedback({
        message: `Incorrect. L.C.M. of ${question.numbers[0]} and ${question.numbers[1]} is ${question.correctLCM}.`,
        isCorrect: false
      });
    }

    setAttempts(attempts + 1);
  };

  const nextQuestion = () => {
    setCurrentQuestion((currentQuestion + 1) % lcmQuestions.length);
    setSelectedLCM(null);
    setFeedback(null);
    setShowMethod(false);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedLCM(null);
    setFeedback(null);
    setScore(0);
    setAttempts(0);
    setShowMethod(false);
  };

  // Helper function to apply neubrutalism button styles
  const applyNeubrutalismButtonStyles = (
    element: HTMLButtonElement | null,
    baseColor: string,
    hoverColor: string,
    textColor: string = COLORS.text
  ) => {
    if (element) {
      element.style.backgroundColor = baseColor;
      element.style.boxShadow = '4px 4px 0 0 rgba(0,0,0,1)';
      element.style.borderColor = COLORS.border;
      element.style.color = textColor;

      const handleMouseEnter = () => {
        element.style.backgroundColor = hoverColor;
        element.style.boxShadow = 'none';
        element.style.transform = 'translate(4px, 4px)';
      };

      const handleMouseLeave = () => {
        element.style.backgroundColor = baseColor;
        element.style.boxShadow = '4px 4px 0 0 rgba(0,0,0,1)';
        element.style.transform = 'none';
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup to prevent memory leaks
      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
    return undefined; // Return type should match the cleanup function type
  };

  return (
    <div
      className="p-6 rounded-3xl text-white shadow-xl max-w-md w-full border-4 border-black" // Added border-black
      style={{
        backgroundColor: COLORS.background,
        // borderColor: COLORS.surface, // Removed as we use border-black
        color: COLORS.text,
        boxShadow: '8px 8px 0 0 rgba(0,0,0,1)' // Added neubrutalism shadow
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold flex items-center">
          <span className="mr-2 text-3xl">🔢</span> Find the L.C.M.
        </h3>
        <div className="flex gap-2">
          <div
            className="text-sm font-bold px-3 py-1 rounded-full border-2 border-black" // Added border-black
            style={{
              backgroundColor: COLORS.surface,
              color: COLORS.textOnDark,
              // borderColor: COLORS.accent1 // Removed as we use border-black
            }}
          >
            {score}/{attempts || '0'}
          </div>
          <button
            onClick={resetQuiz}
            className="rounded-full p-2 transition-all border-2 border-black" // Added border-black
            style={{
              backgroundColor: COLORS.primary,
              color: COLORS.textOnDark,
              borderColor: COLORS.border // Use black border
            }}
            ref={(el) => applyNeubrutalismButtonStyles(el, COLORS.primary, COLORS.nextButtonHover, COLORS.textOnDark)}
            aria-label="Reset quiz"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        className="rounded-2xl p-4 mb-5 shadow-sm border-2 border-black" // Added border-black
        style={{
          backgroundColor: COLORS.questionBg,
          // borderColor: COLORS.accent1 // Removed as we use border-black
        }}
      >
        <div className="text-center">
          <span
            className="text-sm font-bold"
            style={{ color: COLORS.text }}
          >
            Question {currentQuestion + 1} of {lcmQuestions.length}
          </span>
        </div>
      </div>

      <div
        className="rounded-2xl p-5 mb-5 shadow-sm border-2 border-black" // Added border-black
        style={{
          backgroundColor: COLORS.questionBg,
          // borderColor: COLORS.accent1 // Removed as we use border-black
        }}
      >
        <h4
          className="font-bold text-lg mb-4 text-center"
          style={{ color: COLORS.text }}
        >
          Find L.C.M. of <InlineMath math={`${lcmQuestions[currentQuestion].numbers[0]}`} /> and <InlineMath math={`${lcmQuestions[currentQuestion].numbers[1]}`} />
        </h4>

        <div
          className="rounded-xl p-4 mb-4 border-2 border-black" // Added border-black
          style={{
            backgroundColor: COLORS.multiplesBoxBg,
            // borderColor: COLORS.multiplesBoxBorder // Removed as we use border-black
          }}
        >
          <p
            className="text-center mb-3 font-bold"
            style={{ color: COLORS.text }}
          >
            Select the Lowest Common Multiple:
          </p>
          <div className="grid grid-cols-4 gap-2">
            {shuffledMultiples.map((multiple, index) => {
              const isCorrectAnswer = multiple === lcmQuestions[currentQuestion].correctLCM;
              const isSelected = selectedLCM === multiple;
              const isFeedback = !!feedback;

              let bgColor = COLORS.defaultButtonBg;
              let textColor = COLORS.text;
              let borderColor = COLORS.defaultButtonBorder;
              let boxShadow = '4px 4px 0 0 rgba(0,0,0,1)';
              let transform = '';
              let hoverColor = COLORS.buttonHover; // Default hover

              // Determine button styles based on state
              if (isSelected) {
                textColor = COLORS.text; // Ensure text visibility
                if (isFeedback) {
                  if (isCorrectAnswer) {
                    bgColor = COLORS.correct;
                    borderColor = COLORS.correct;
                    textColor = COLORS.textOnDark;
                    hoverColor = COLORS.correct; // No hover change when feedback
                  } else {
                    bgColor = COLORS.incorrect;
                    borderColor = COLORS.incorrect;
                    textColor = COLORS.textOnDark;
                    hoverColor = COLORS.incorrect; // No hover change when feedback
                  }
                  boxShadow = 'none';
                  transform = 'translate(4px, 4px)';
                } else {
                  bgColor = COLORS.selected;
                  borderColor = COLORS.border; // Black border for selected
                  boxShadow = 'none';
                  transform = 'scale(0.95)';
                  hoverColor = COLORS.selected; // No hover change when selected but no feedback
                }
              } else if (isFeedback && isCorrectAnswer) {
                bgColor = COLORS.feedbackCorrectBg;
                borderColor = COLORS.correctUnselectedBorder;
                textColor = COLORS.text;
                hoverColor = COLORS.feedbackCorrectBg; // No hover change when feedback
              }
              // If not selected and not feedback correct, use defaults set above

              return (
                <button
                  key={index}
                  onClick={() => setSelectedLCM(multiple)}
                  disabled={isFeedback}
                  className={`aspect-square flex items-center justify-center rounded-xl font-bold transition-all duration-200 border-2 text-sm ${isFeedback ? 'cursor-default' : ''}`}
                  style={{
                    backgroundColor: bgColor,
                    color: textColor,
                    borderColor: borderColor,
                    boxShadow: boxShadow,
                    transform: transform
                  }}
                  onMouseEnter={(e) => {
                    if (!isFeedback && !isSelected) {
                      e.currentTarget.style.backgroundColor = hoverColor;
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translate(4px, 4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isFeedback && !isSelected) {
                      e.currentTarget.style.backgroundColor = bgColor;
                      e.currentTarget.style.boxShadow = boxShadow;
                      e.currentTarget.style.transform = transform;
                    }
                  }}
                >
                  {multiple}
                </button>
              );
            })}
          </div>
        </div>

        {selectedLCM !== null && !feedback && (
          <button
            onClick={checkAnswer}
            className="w-full rounded-xl p-3 font-bold transition-all duration-200 border-2 border-black" // Added border-black
            style={{
              backgroundColor: COLORS.secondary,
              color: COLORS.text,
              borderColor: COLORS.border // Use black border
            }}
            ref={(el) => applyNeubrutalismButtonStyles(el, COLORS.secondary, COLORS.buttonHover)}
          >
            Check Answer
          </button>
        )}
      </div>

      {feedback && (
        <div
          className={`rounded-2xl p-5 mb-5 border-2 border-black`} // Added border-black
          style={{
            backgroundColor: feedback.isCorrect
              ? COLORS.feedbackCorrectBg
              : COLORS.feedbackIncorrectBg,
            borderColor: feedback.isCorrect
              ? COLORS.feedbackCorrectBorder
              : COLORS.feedbackIncorrectBorder
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
              className="font-bold text-lg"
              style={{
                color: feedback.isCorrect ? COLORS.correct : COLORS.incorrect
              }}
            >
              {feedback.message}
            </p>
          </div>

          <button
            onClick={() => setShowMethod(!showMethod)}
            className="flex items-center font-bold text-sm mb-3 border-2 border-black rounded-lg px-2 py-1" // Added border-black
            style={{ color: COLORS.surface }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Light hover effect
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <HelpCircle className="mr-1" size={16} />
            {showMethod ? 'Hide method' : 'Show method'}
          </button>

          {showMethod && (
            <div
              className="rounded-xl p-4 border-2 border-black" // Added border-black
              style={{
                backgroundColor: COLORS.methodBoxBg,
                borderColor: COLORS.surface
              }}
            >
              <h4
                className="font-bold mb-2 flex items-center"
                style={{ color: COLORS.text }}
              >
                <span className="mr-2">🧮</span>
                {lcmQuestions[currentQuestion].method}
              </h4>
              <div className="overflow-x-auto max-w-full">
                <div className="min-w-max text-black"> {/* Ensure text visibility for math */}
                  {/* Use renderTextWithMath instead of BlockMath */}
                  {renderTextWithMath(lcmQuestions[currentQuestion].explanation)}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={nextQuestion}
          className="flex-1 rounded-xl p-3 font-bold transition-all duration-200 border-2 border-black" // Added border-black
          style={{
            backgroundColor: COLORS.primary,
            color: COLORS.textOnDark,
            borderColor: COLORS.border // Use black border
          }}
          ref={(el) => applyNeubrutalismButtonStyles(el, COLORS.primary, COLORS.nextButtonHover, COLORS.textOnDark)}
        >
          {currentQuestion === lcmQuestions.length - 1
            ? 'Restart Quiz'
            : 'Next Question'} →
        </button>
      </div>

      <div
        className="mt-4 rounded-xl p-3 border-2 border-black" // Added border-black
        style={{
          backgroundColor: COLORS.infoBoxBg,
          // borderColor: COLORS.accent1 // Removed as we use border-black
        }}
      >
        <p
          className="font-bold mb-1"
          style={{ color: COLORS.text }}
        >
          How to Find L.C.M.:
        </p>
        <ul
          className="list-disc list-inside space-y-1"
          style={{ color: COLORS.text }}
        >
          <li>Find multiples of both numbers</li>
          <li>Identify common multiples</li>
          <li>Select the smallest common multiple</li>
        </ul>
      </div>
    </div>
  );
};

export default MultiplesLCM;