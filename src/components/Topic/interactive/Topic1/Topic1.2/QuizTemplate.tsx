// QuizTemplate.tsx
import { ReactNode } from "react";
import { Target, CheckCircle, XCircle } from "lucide-react";

// Color palette
const PALETTE = {
  red: "#f94144",
  orange: "#f3722c",
  yellowOrange: "#f8961e",
  orangeRed: "#f9844a",
  yellow: "#f9c74f",
  green: "#90be6d",
  teal: "#43aa8b",
  tealDark: "#4d908e",
  blueGray: "#577590",
  blue: "#277da1"
};

// Theme configuration using the palette
interface Theme {
  primary: string; // Background color for main container
  secondary: string; // Background for buttons/accents
  text: string; // Main text color
  border: string; // Border color (black for neubrutalism)
  correct: string; // Correct answer color
  incorrect: string; // Incorrect answer color
  buttonHover: string; // Hover color for main buttons
  checkButtonBase: string; // Base color for check button
  checkButtonHover: string; // Hover color for check button
}

const themes: Record<string, Theme> = {
   rainbow: {
    primary: PALETTE.blue,          // Main background: Blue
    secondary: PALETTE.orange,      // Accents: Orange
    text: "#ffffff",                // Text: White
    border: "#000000",              // Border: Black
    correct: PALETTE.green,         // Correct: Green
    incorrect: PALETTE.red,         // Incorrect: Red
    buttonHover: PALETTE.teal,      // Button hover: Teal
    checkButtonBase: PALETTE.yellowOrange, // Check button: Yellow-Orange
    checkButtonHover: PALETTE.orangeRed // Check button hover: Orange-Red
  },
  blue: {
    primary: PALETTE.teal,
    secondary: PALETTE.red,
    text: "#ffffff",
    border: "#000000",
    correct: PALETTE.green,
    incorrect: PALETTE.red,
    buttonHover: PALETTE.tealDark,
    checkButtonBase: PALETTE.blue,
    checkButtonHover: PALETTE.blueGray
  },
  purple: {
    primary: PALETTE.tealDark,
    secondary: PALETTE.blueGray,
    text: "#ffffff",
    border: "#000000",
    correct: PALETTE.green,
    incorrect: PALETTE.red,
    buttonHover: PALETTE.blueGray,
    checkButtonBase: PALETTE.blueGray,
    checkButtonHover: PALETTE.blue
  },
  green: {
    primary: PALETTE.teal,
    secondary: PALETTE.tealDark,
    text: "#ffffff",
    border: "#000000",
    correct: PALETTE.green,
    incorrect: PALETTE.red,
    buttonHover: PALETTE.tealDark,
    checkButtonBase: PALETTE.teal,
    checkButtonHover: PALETTE.tealDark
  },
  orange: {
    primary: PALETTE.orange,
    secondary: PALETTE.red,
    text: "#ffffff",
    border: "#000000",
    correct: PALETTE.green,
    incorrect: PALETTE.red,
    buttonHover: PALETTE.orangeRed,
    checkButtonBase: PALETTE.orange,
    checkButtonHover: PALETTE.orangeRed
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
  renderChoice?: (choice: T) => ReactNode; // New prop for custom choice rendering
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
  disabled = false,
  renderChoice // New prop
}: QuizTemplateProps<T>) => {
  const currentTheme = themes[theme] || themes.blue;

  // Default choice renderer
  const defaultRenderChoice = (choice: T): ReactNode => {
    if (typeof choice === 'string') {
      return <span>{choice}</span>; // Render plain text by default in the template
    }
    return choice as ReactNode;
  };

  // Use custom renderer if provided, otherwise use default
  const renderChoiceFn = renderChoice || defaultRenderChoice;
  const LONG_CHOICE_THRESHOLD = 35;

  // Function to check if a choice is long (assumes choice is a string for simplicity here)
  const isChoiceLong = (choice: T): boolean => {
    if (typeof choice === 'string') {
      // If it's a plain text string, check its length directly
      return choice.length > LONG_CHOICE_THRESHOLD;
    }
    return false;
  };

  const hasLongChoice = choices.some(isChoiceLong);
  const gridClass = hasLongChoice ? "grid-cols-1" : "grid-cols-2";

  // Apply neubrutalism styles to an element

  // Apply neubrutalism styles with hover effects
  const applyInteractiveNeubrutalism = (
    element: HTMLButtonElement | null,
    baseColor: string,
    hoverColor: string
  ) => {
    if (element) {
      element.style.backgroundColor = baseColor;
      element.style.boxShadow = '4px 4px 0 0 rgba(0,0,0,1)';
      element.style.borderColor = currentTheme.border;
      element.style.borderWidth = '2px';
      element.style.borderStyle = 'solid';
      element.style.color = currentTheme.text;
      element.style.transition = 'all 0.2s ease';

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

      // Cleanup event listeners
      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
    return undefined;
  };

  return (
    <div 
      className="p-6 rounded-3xl max-w-md w-full"
      style={{ 
        backgroundColor: currentTheme.primary,
        color: currentTheme.text,
        border: `4px solid ${currentTheme.border}`,
        boxShadow: '8px 8px 0 0 rgba(0,0,0,1)'
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-2xl font-bold flex items-center">
          <Target className="mr-2" size={28} /> {title}
        </h3>
        <div 
          className="text-sm font-bold px-3 py-1 rounded-full"
          style={{
            backgroundColor: currentTheme.border,
            color: currentTheme.text,
            border: `2px solid ${currentTheme.border}`
          }}
        >
          {score}/{attempts || '0'}
        </div>
      </div>

      <div 
        className="backdrop-blur-sm rounded-2xl p-5 mb-5"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          border: `2px solid ${currentTheme.border}`
        }}
      >
        <p className="text-lg mb-5 text-center">
          {question}
        </p>

        <div className={`grid gap-3 mb-5 ${gridClass}`}>
          {choices.map((choice, index) => {
            const isSelected = selectedAnswer === choice;
            const isCorrectChoice = choice === correctAnswer;
            
            const buttonStyle = {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: currentTheme.text,
              borderColor: currentTheme.border,
              boxShadow: '4px 4px 0 0 rgba(0,0,0,1)',
              transform: 'none'
            };
            
            if (isSelected) {
              buttonStyle.backgroundColor = 'rgba(255, 255, 255, 0.4)';
              buttonStyle.boxShadow = isSelected && !showResult ? 'none' : buttonStyle.boxShadow;
              buttonStyle.transform = isSelected && !showResult ? 'scale(0.95)' : 'none';
            }
            
            if (showResult) {
              if (isCorrectChoice) {
                buttonStyle.backgroundColor = currentTheme.correct;
                buttonStyle.color = '#ffffff';
                buttonStyle.borderColor = currentTheme.correct;
              } else if (isSelected && !isCorrectChoice) {
                buttonStyle.backgroundColor = currentTheme.incorrect;
                buttonStyle.color = '#ffffff';
                buttonStyle.borderColor = currentTheme.incorrect;
              }
            }

            return (
              <button
                key={index}
                onClick={() => !showResult && !disabled && onSelectAnswer(choice)}
                className={`p-4 rounded-xl font-bold transition-all duration-200 flex items-center justify-center border-2 text-base`}
                style={buttonStyle}
                disabled={showResult || disabled}
                onMouseEnter={(e) => {
                  if (!showResult && !disabled && !isSelected) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translate(4px, 4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!showResult && !disabled && !isSelected) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.boxShadow = '4px 4px 0 0 rgba(0,0,0,1)';
                    e.currentTarget.style.transform = 'none';
                  }
                }}
              >
                {renderChoiceFn(choice)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex gap-3 mb-5">
        <button
          onClick={onCheckAnswer}
          disabled={selectedAnswer === null || showResult || disabled}
          className="flex-1 rounded-xl p-3 font-bold transition-all duration-200 border-2"
          style={{
            backgroundColor: selectedAnswer !== null && !showResult && !disabled 
              ? currentTheme.checkButtonBase 
              : 'rgba(255, 255, 255, 0.3)',
            color: currentTheme.text,
            borderColor: currentTheme.border,
            boxShadow: '4px 4px 0 0 rgba(0,0,0,1)',
            cursor: selectedAnswer !== null && !showResult && !disabled ? 'pointer' : 'not-allowed'
          }}
          onMouseEnter={(e) => {
            if (selectedAnswer !== null && !showResult && !disabled) {
              e.currentTarget.style.backgroundColor = currentTheme.checkButtonHover;
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translate(4px, 4px)';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedAnswer !== null && !showResult && !disabled) {
              e.currentTarget.style.backgroundColor = currentTheme.checkButtonBase;
              e.currentTarget.style.boxShadow = '4px 4px 0 0 rgba(0,0,0,1)';
              e.currentTarget.style.transform = 'none';
            }
          }}
        >
          Check Answer
        </button>

        <button
          onClick={onNewQuestion}
          className="flex-1 rounded-xl p-3 font-bold transition-all duration-200 border-2"
          style={{
            backgroundColor: currentTheme.secondary,
            color: currentTheme.text,
            borderColor: currentTheme.border,
            boxShadow: '4px 4px 0 0 rgba(0,0,0,1)'
          }}
          ref={(el) => applyInteractiveNeubrutalism(el, currentTheme.secondary, currentTheme.buttonHover)}
        >
          New Question
        </button>
      </div>

      {showResult && (
        <div
          className="backdrop-blur-sm rounded-2xl p-5 border-2"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderColor: isCorrect ? currentTheme.correct : currentTheme.incorrect,
            boxShadow: '4px 4px 0 0 rgba(0,0,0,1)'
          }}
        >
          <div className="flex items-center mb-3">
            {isCorrect ? (
              <CheckCircle 
                size={24} 
                style={{ 
                  color: currentTheme.correct,
                  marginRight: '0.5rem'
                }} 
              />
            ) : (
              <XCircle 
                size={24} 
                style={{ 
                  color: currentTheme.incorrect,
                  marginRight: '0.5rem'
                }} 
              />
            )}
            <span className="font-bold text-lg">
              {isCorrect ? "Correct!" : "Incorrect"}
            </span>
          </div>
          <div className="text-black bg-white/90 p-3 rounded-lg">
            {explanation}
          </div>
        </div>
      )}
    </div>
  );
};

export { QuizTemplate, themes };
export type { QuizTemplateProps };