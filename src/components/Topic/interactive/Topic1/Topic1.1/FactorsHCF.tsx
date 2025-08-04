import { useState, useMemo } from 'react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { RotateCw, CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { renderTextWithMath } from '../../../../../utils/renderTextWithMath';


const FactorsHCF = () => {
  // Color palette variables
  const colors = {
    red: '#f94144',
    orange: '#f3722c',
    yellowOrange: '#f8961e',
    orangeRed: '#f9844a',
    yellow: '#f9c74f',
    green: '#90be6d',
    teal: '#43aa8b',
    tealDark: '#4d908e',
    blueGray: '#577590',
    blue: '#277da1'
  };

  // Semantic color mapping
  const theme = {
    primary: colors.teal,
    secondary: colors.blue,
    accent: colors.orange,
    success: colors.green,
    warning: "#fff",
    error: colors.red,
    successLight: `${colors.green}4D`, // 30% opacity
    warningLight: `${colors.yellowOrange}`, // 30% opacity
    errorLight: `${colors.red}4D`, // 30% opacity
    background: colors.teal,
    text: '#ffffff', // Main text color (white)
    textSecondary: '#000000', // Text color for better contrast on light backgrounds
    border: '#000000'
  };

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedHCF, setSelectedHCF] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [showMethod, setShowMethod] = useState<boolean>(false);

  // Helper function to find factors of a number
  const findFactors = (num: number): number[] => {
    const factors: number[] = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  };

  // HCF questions with shuffled factors
  const hcfQuestions = [
    {
      numbers: [12, 18],
      correctHCF: 6,
      method: 'Listing Method',
      // Updated explanation using renderTextWithMath format
      explanation: 'Factors of $12$: $1, 2, 3, 4, 6, 12$. Factors of $18$: $1, 2, 3, 6, 9, 18$. Common: $1, 2, 3, 6$. H.C.F. = $6$'
    },
    {
      numbers: [24, 36],
      correctHCF: 12,
      method: 'Prime Factorization',
      // Updated explanation using renderTextWithMath format and fixed number
      explanation: '$24 = 2^3 \\times 3^1$, $\\quad$ $36 = 2^2 \\times 3^2$ $H.C.F. = 2^{\\min(3,2)} \\times 3^{\\min(1,2)} = 2^2 \\times 3^1 = 4 \\times 3 = 12$'
    },
    {
      numbers: [15, 25],
      correctHCF: 5,
      method: 'Listing Method',
      // Updated explanation using renderTextWithMath format
      explanation: 'Factors of $15$: $1, 3, 5, 15$. Factors of $25$: $1, 5, 25$. Common: $1, 5$. H.C.F. = $5$'
    },
    {
      numbers: [20, 30],
      correctHCF: 10,
      method: 'Listing Method',
      // Updated explanation using renderTextWithMath format
      explanation: 'Factors of $20$: $1, 2, 4, 5, 10, 20$. Factors of $30$: $1, 2, 3, 5, 6, 10, 15, 30$. Common: $1, 2, 5, 10$. H.C.F. = $10$'
    }
  ];

  // Memoized shuffled factors - only recalculates when currentQuestion changes
  const shuffledFactors = useMemo(() => {
    const question = hcfQuestions[currentQuestion];
    const factors1 = findFactors(question.numbers[0]);
    const factors2 = findFactors(question.numbers[1]);

    // Combine and deduplicate factors
    const allFactors = [...new Set([...factors1, ...factors2])];

    // Shuffle the factors
    return allFactors.sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  const checkAnswer = () => {
    if (selectedHCF === null) return;

    const question = hcfQuestions[currentQuestion];
    const isCorrect = selectedHCF === question.correctHCF;

    if (isCorrect) {
      setFeedback({
        message: 'Correct! ✓',
        isCorrect: true
      });
      setScore(score + 1);
    } else {
      setFeedback({
        message: `Incorrect. H.C.F. of ${question.numbers[0]} and ${question.numbers[1]} is ${question.correctHCF}.`,
        isCorrect: false
      });
    }

    setAttempts(attempts + 1);
  };

  const nextQuestion = () => {
    setCurrentQuestion((currentQuestion + 1) % hcfQuestions.length);
    setSelectedHCF(null);
    setFeedback(null);
    setShowMethod(false);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedHCF(null);
    setFeedback(null);
    setScore(0);
    setAttempts(0);
    setShowMethod(false);
  };


  return (
    <div
      className="p-6 rounded-3xl text-white shadow-xl max-w-md w-full border-4 border-black"
      style={{
        backgroundColor: theme.background,
        boxShadow: '8px 8px 0 0 rgba(0,0,0,1)'
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold flex items-center">
          <span className="mr-2 text-3xl">🔢</span> Find the H.C.F.
        </h3>
        <div className="flex gap-2">
          <div
            className="text-sm font-bold px-3 py-1 rounded-full border-2 border-white"
            style={{ backgroundColor: theme.border, color: theme.text }}
          >
            {score}/{attempts || '0'}
          </div>
          <button
            onClick={resetQuiz}
            className="rounded-full p-2 transition-all border-2 border-black"
            style={{
              backgroundColor: theme.accent,
              boxShadow: '4px 4px 0 0 rgba(0,0,0,1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.orangeRed;
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translate(4px, 4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.accent;
              e.currentTarget.style.boxShadow = '4px 4px 0 0 rgba(0,0,0,1)';
              e.currentTarget.style.transform = 'none';
            }}
            aria-label="Reset quiz"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        className="backdrop-blur-sm rounded-2xl p-4 mb-5 shadow-sm border-2 border-white"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
      >
        <div className="text-center">
          <span className="text-sm opacity-90">
            Question {currentQuestion + 1} of {hcfQuestions.length}
          </span>
        </div>
      </div>

      <div
        className="backdrop-blur-sm rounded-2xl p-5 mb-5 shadow-sm border-2 border-white"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
      >
        <h4 className="font-bold text-lg mb-4 text-center">
          Find H.C.F. of <InlineMath math={`${hcfQuestions[currentQuestion].numbers[0]}`} /> and <InlineMath math={`${hcfQuestions[currentQuestion].numbers[1]}`} />
        </h4>

        <div
          className="rounded-xl p-4 mb-4 border-2 border-white"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <p className="text-center mb-3 font-medium">Select the Highest Common Factor:</p>
          <div className="grid grid-cols-4 gap-2">
            {shuffledFactors.map((factor, index) => {
              const isCorrectAnswer = factor === hcfQuestions[currentQuestion].correctHCF;
              const isSelected = selectedHCF === factor;
              const isFeedback = !!feedback;

              let bgColor = 'white';
              let hoverColor = '#f5f5f5';
              let borderColor = theme.border;
              let boxShadow = '4px 4px 0 0 rgba(0,0,0,1)';
              let transform = '';
              let textColor = 'black'; // Default text color

              // Determine button styles based on state
              if (isSelected) {
                textColor = 'black'; // Ensure text is visible on white/selected background
                if (isFeedback) {
                  if (isCorrectAnswer) {
                    bgColor = theme.success;
                    hoverColor = theme.success;
                    borderColor = theme.success;
                    textColor = 'white'; // White text on success color
                  } else {
                    bgColor = theme.error;
                    hoverColor = theme.error;
                    borderColor = theme.error;
                    textColor = 'white'; // White text on error color
                  }
                  boxShadow = 'none';
                  transform = 'translate(4px, 4px)';
                } else {
                  bgColor = 'white';
                  borderColor = 'black';
                  boxShadow = 'none';
                  transform = 'scale(0.95)';
                }
              } else if (isFeedback && isCorrectAnswer) {
                bgColor = theme.successLight;
                borderColor = theme.success;
                textColor = 'black'; // Black text on light success background
              }

              return (
                <button
                  key={index}
                  onClick={() => setSelectedHCF(factor)}
                  disabled={isFeedback}
                  className={`aspect-square flex items-center justify-center rounded-xl font-bold transition-all duration-200 border-2 text-lg ${isFeedback ? 'cursor-default' : ''}`}
                  style={{
                    backgroundColor: bgColor,
                    borderColor: borderColor,
                    boxShadow: boxShadow,
                    transform: transform,
                    color: textColor // Apply dynamic text color
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
                  {factor}
                </button>
              );
            })}
          </div>
        </div>

        {selectedHCF !== null && !feedback && (
          <button
            onClick={checkAnswer}
            className="w-full rounded-xl p-3 font-bold transition-all duration-200 border-2 border-black"
            style={{
              backgroundColor: theme.secondary,
              boxShadow: '4px 4px 0 0 rgba(0,0,0,1)',
              color: theme.text // Ensure button text is white
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.blueGray;
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translate(4px, 4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.secondary;
              e.currentTarget.style.boxShadow = '4px 4px 0 0 rgba(0,0,0,1)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Check Answer
          </button>
        )}
      </div>

      {feedback && (
        <div
          className={`rounded-2xl p-5 mb-5 backdrop-blur-sm border-2`}
          style={{
            backgroundColor: feedback.isCorrect ? theme.successLight : theme.warningLight,
            borderColor: feedback.isCorrect ? theme.success : theme.warning
          }}
        >
          <div className="flex items-center mb-3">
            {feedback.isCorrect ? (
              <CheckCircle
                size={24}
                style={{ color: theme.success }}
                className="mr-2"
              />
            ) : (
              <XCircle
                size={24}
                style={{ color: theme.warning }}
                className="mr-2"
              />
            )}
            <p
              className="font-bold text-lg"
              style={{ color: feedback.isCorrect ? theme.success : theme.warning }}
            >
              {feedback.message}
            </p>
          </div>

          <button
            onClick={() => setShowMethod(!showMethod)}
            className="flex items-center font-medium text-sm mb-3 border-2 border-white rounded-lg px-2 py-1"
            style={{ color: theme.text }} // Use main text color
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
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
              className="rounded-xl p-4 border-2 border-white"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <h4 className="font-bold mb-2 flex items-center">
                <span className="mr-2">🧮</span>
                {hcfQuestions[currentQuestion].method}
              </h4>
              {/* Use the new renderTextWithMath helper for explanation */}
              <div className="text-white"> {/* Set text color to black for better contrast */}
                <div className="w-full">
                  {renderTextWithMath(hcfQuestions[currentQuestion].explanation)}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={nextQuestion}
          className="flex-1 rounded-xl p-3 font-bold transition-all duration-200 border-2 border-black"
          style={{
            backgroundColor: theme.accent,
            boxShadow: '4px 4px 0 0 rgba(0,0,0,1)',
            color: theme.text // Ensure button text is white
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.orangeRed;
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translate(4px, 4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.accent;
            e.currentTarget.style.boxShadow = '4px 4px 0 0 rgba(0,0,0,1)';
            e.currentTarget.style.transform = 'none';
          }}
        >
          {currentQuestion === hcfQuestions.length - 1
            ? 'Restart Quiz'
            : 'Next Question'} →
        </button>
      </div>

      <div
        className="mt-4 rounded-xl p-3 text-sm border-2 border-white"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <p className="font-bold mb-1" style={{ color: theme.textSecondary }}>How to Find H.C.F.:</p> {/* Use secondary text color */}
        <ul className="list-disc list-inside space-y-1" style={{ color: theme.textSecondary }}> {/* Use secondary text color */}
          <li>Find factors of both numbers</li>
          <li>Identify common factors</li>
          <li>Select the largest common factor</li>
        </ul>
      </div>
    </div>
  );
};

export default FactorsHCF;