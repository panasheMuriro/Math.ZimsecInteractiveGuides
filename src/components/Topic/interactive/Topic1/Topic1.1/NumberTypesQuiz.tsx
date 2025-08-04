// NumberTypesQuizNeobrutalism.tsx
import { useState } from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import {
  RotateCw,
  CheckCircle,
  XCircle,
  Shuffle,
  HelpCircle,
} from "lucide-react";

// --- Neobrutalism Color Palette (from previous component) ---
const NEUBRUTALISM_COLORS = {
  primaryDark: "#264653", // Dark teal - for backgrounds, text, borders
  secondary: "#2a9d8f", // Teal - for correct answers, accents
  neutral: "#e9c46a", // Sand yellow - for highlights, explanations, some backgrounds
  warning: "#f4a261", // Orange - for warnings, incorrect answers
  danger: "#e76f51", // Salmon - for danger, resets, main background
  white: "#ffffff",
  lightGray: "#f0f0f0",
  borderGray: "#d0d0d0",
  shadowGray: "rgba(0, 0, 0, 0.2)",
};

// --- Neobrutalism Base Style Helper ---
const neubrutalismBase = {
  backgroundColor: NEUBRUTALISM_COLORS.white,
  border: `3px solid ${NEUBRUTALISM_COLORS.borderGray}`,
  borderRadius: "12px",
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadowGray}`,
  padding: "1rem",
};

const NumberTypesQuiz = () => {
  const [mode, setMode] = useState<"identify" | "select">("identify");
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{
    message: string;
    isCorrect: boolean;
  } | null>(null);
  const [score, setScore] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [showHierarchy, setShowHierarchy] = useState<boolean>(true); // State for toggling hierarchy

  // Helper function to check number types (remains the same)
  const getNumberTypes = (num: number): string[] => {
    const types: string[] = [];
    if (
      num === Math.PI ||
      num === Math.E ||
      Math.abs(num - Math.sqrt(2)) < 0.001 ||
      Math.abs(num - Math.sqrt(3)) < 0.001
    ) {
      types.push("irrational");
      return types;
    }
    if (typeof num === "number") {
      types.push("rational");
      if (Number.isInteger(num)) {
        types.push("integer");
        if (num >= 0) {
          types.push("whole");
          if (num > 0) {
            types.push("natural");
          }
        }
      }
    }
    return types;
  };

  // Identify mode questions (remains the same)
  const identifyQuestions = [
    {
      number: 5,
      correctTypes: ["natural", "whole", "integer", "rational"],
      question:
        "Which sets does this number belong to? (Select all that apply)",
      options: ["Natural", "Whole", "Integer", "Rational", "Irrational"],
    },
    {
      number: 0,
      correctTypes: ["whole", "integer", "rational"],
      question:
        "Which sets does this number belong to? (Select all that apply)",
      options: ["Natural", "Whole", "Integer", "Rational", "Irrational"],
    },
    {
      number: -3,
      correctTypes: ["integer", "rational"],
      question:
        "Which sets does this number belong to? (Select all that apply)",
      options: ["Natural", "Whole", "Integer", "Rational", "Irrational"],
    },
    {
      number: 0.75,
      correctTypes: ["rational"],
      question:
        "Which sets does this number belong to? (Select all that apply)",
      options: ["Natural", "Whole", "Integer", "Rational", "Irrational"],
    },
    {
      number: Math.PI,
      correctTypes: ["irrational"],
      question:
        "Which sets does this number belong to? (Select all that apply)",
      options: ["Natural", "Whole", "Integer", "Rational", "Irrational"],
    },
    {
      number: -2.5,
      correctTypes: ["rational"],
      question:
        "Which sets does this number belong to? (Select all that apply)",
      options: ["Natural", "Whole", "Integer", "Rational", "Irrational"],
    },
    {
      number: Math.sqrt(2),
      correctTypes: ["irrational"],
      question:
        "Which sets does this number belong to? (Select all that apply)",
      options: ["Natural", "Whole", "Integer", "Rational", "Irrational"],
    },
    {
      number: 100,
      correctTypes: ["natural", "whole", "integer", "rational"],
      question:
        "Which sets does this number belong to? (Select all that apply)",
      options: ["Natural", "Whole", "Integer", "Rational", "Irrational"],
    },
  ];

  // Select mode questions (remains the same)
  const selectQuestions = [
    {
      setType: "natural",
      numbers: [-2, 0, 1, 2, 3, 4.5, 5, Math.PI],
      question: "Select all natural numbers:",
    },
    {
      setType: "whole",
      numbers: [-1, 0, 1, 2, 3.5, 4, 5, Math.sqrt(2)],
      question: "Select all whole numbers:",
    },
    {
      setType: "integer",
      numbers: [-3, -2, -1.5, 0, 1, 2.5, 3, 4],
      question: "Select all integers:",
    },
    {
      setType: "rational",
      numbers: [-1, -0.5, 0, 0.333, Math.PI, 1.5, 2, Math.sqrt(3)],
      question: "Select all rational numbers:",
    },
    {
      setType: "irrational",
      numbers: [Math.PI, Math.E, Math.sqrt(2), Math.sqrt(3), 2, 3.14, 0],
      question: "Select all irrational numbers:",
    },
  ];

  const toggleAnswerSelection = (index: number) => {
    if (selectedAnswers.includes(index)) {
      setSelectedAnswers(selectedAnswers.filter((i) => i !== index));
    } else {
      setSelectedAnswers([...selectedAnswers, index]);
    }
  };

  const checkIdentifyAnswer = () => {
    if (selectedAnswers.length === 0) return;
    const currentQuestionObj = identifyQuestions[currentQuestion];
    const selectedTypes = selectedAnswers.map((i) =>
      currentQuestionObj.options[i].toLowerCase().replace(/s?$/, "")
    );
    const incorrectSelections = selectedTypes.filter(
      (type) => !currentQuestionObj.correctTypes.includes(type)
    );
    const missedCorrect = currentQuestionObj.correctTypes.filter(
      (type) => !selectedTypes.includes(type)
    );
    const isCorrect =
      incorrectSelections.length === 0 && missedCorrect.length === 0;
    if (isCorrect) {
      setFeedback({
        message: "Perfect! ✓",
        isCorrect: true,
      });
      setScore(score + 1);
    } else {
      const correctTypes = currentQuestionObj.correctTypes
        .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
        .join(", ");
      setFeedback({
        message: `Not quite. Correct sets: ${correctTypes}`,
        isCorrect: false,
      });
    }
    setAttempts(attempts + 1);
  };

  const checkSelectAnswer = () => {
    const currentQuestionObj = selectQuestions[currentQuestion];
    const userSelected = selectedNumbers.map(
      (i) => currentQuestionObj.numbers[i]
    );
    const correctNumbers = currentQuestionObj.numbers.filter((num) =>
      getNumberTypes(num).includes(currentQuestionObj.setType)
    );
    const correctSelections = userSelected.filter((selectedNum) =>
      correctNumbers.some((correctNum) =>
        typeof correctNum === "number" && typeof selectedNum === "number"
          ? Math.abs(selectedNum - correctNum) < 0.001
          : selectedNum === correctNum
      )
    );
    const incorrectSelections = userSelected.filter(
      (selectedNum) =>
        !correctNumbers.some((correctNum) =>
          typeof correctNum === "number" && typeof selectedNum === "number"
            ? Math.abs(selectedNum - correctNum) < 0.001
            : selectedNum === correctNum
        )
    );
    const missedCorrect = correctNumbers.filter(
      (correctNum) =>
        !userSelected.some((selectedNum) =>
          typeof correctNum === "number" && typeof selectedNum === "number"
            ? Math.abs(selectedNum - correctNum) < 0.001
            : selectedNum === correctNum
        )
    );
    const isCorrect =
      incorrectSelections.length === 0 && missedCorrect.length === 0;
    if (isCorrect) {
      setFeedback({
        message: "Perfect! ✓",
        isCorrect: true,
      });
      setScore(score + 1);
    } else {
      setFeedback({
        message: `Not quite right. You got ${correctSelections.length}/${correctNumbers.length} correct.`,
        isCorrect: false,
      });
    }
    setAttempts(attempts + 1);
  };

  const toggleNumberSelection = (index: number) => {
    if (selectedNumbers.includes(index)) {
      setSelectedNumbers(selectedNumbers.filter((i) => i !== index));
    } else {
      setSelectedNumbers([...selectedNumbers, index]);
    }
  };

  const nextQuestion = () => {
    if (mode === "identify") {
      setCurrentQuestion((currentQuestion + 1) % identifyQuestions.length);
    } else {
      setCurrentQuestion((currentQuestion + 1) % selectQuestions.length);
    }
    setSelectedAnswers([]);
    setSelectedNumbers([]);
    setFeedback(null);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setSelectedNumbers([]);
    setFeedback(null);
    setScore(0);
    setAttempts(0);
  };

  const switchMode = () => {
    setMode(mode === "identify" ? "select" : "identify");
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setSelectedNumbers([]);
    setFeedback(null);
  };

  // --- Styling Helpers based on Neobrutalism ---
  const getFeedbackBoxStyle = () => {
    if (!feedback) return {};
    return {
      ...neubrutalismBase,
      borderColor: feedback.isCorrect
        ? NEUBRUTALISM_COLORS.secondary
        : NEUBRUTALISM_COLORS.warning,
      backgroundColor: feedback.isCorrect
        ? `${NEUBRUTALISM_COLORS.secondary}20`
        : `${NEUBRUTALISM_COLORS.warning}20`,
    };
  };

  const getNumberTypeColor = (type: string) => {
    switch (type) {
      case "natural":
        return NEUBRUTALISM_COLORS.secondary; // Teal
      case "whole":
        return NEUBRUTALISM_COLORS.neutral; // Sand Yellow
      case "integer":
        return NEUBRUTALISM_COLORS.primaryDark; // Dark Teal
      case "rational":
        return NEUBRUTALISM_COLORS.warning; // Orange
      case "irrational":
        return NEUBRUTALISM_COLORS.danger; // Salmon
      default:
        return NEUBRUTALISM_COLORS.borderGray;
    }
  };

  const getModeButtonStyle = (isActive: boolean) => {
    return {
      ...neubrutalismBase,
      flex: 1,
      padding: "0.5rem",
      fontWeight: "bold",
      backgroundColor: isActive
        ? NEUBRUTALISM_COLORS.neutral
        : NEUBRUTALISM_COLORS.lightGray,
      borderColor: NEUBRUTALISM_COLORS.primaryDark,
      color: NEUBRUTALISM_COLORS.primaryDark,
      cursor: "pointer",
      transition: "transform 0.2s",
    };
  };

  const getOptionButtonStyle = (index: number) => {
    const isSelected = selectedAnswers.includes(index);
    const isFeedback = !!feedback;
    const isCorrectOption =
      feedback &&
      identifyQuestions[currentQuestion].correctTypes.includes(
        identifyQuestions[currentQuestion].options[index]
          .toLowerCase()
          .replace(/s?$/, "")
      );

    let bgColor = NEUBRUTALISM_COLORS.lightGray;
    let borderColor = NEUBRUTALISM_COLORS.borderGray;
    let textColor = NEUBRUTALISM_COLORS.primaryDark;

    if (isFeedback) {
      if (isSelected) {
        if (isCorrectOption) {
          bgColor = NEUBRUTALISM_COLORS.secondary; // Correct selected
          borderColor = NEUBRUTALISM_COLORS.primaryDark;
          textColor = NEUBRUTALISM_COLORS.white;
        } else {
          bgColor = NEUBRUTALISM_COLORS.warning; // Incorrect selected
          borderColor = NEUBRUTALISM_COLORS.primaryDark;
          textColor = NEUBRUTALISM_COLORS.white;
        }
      } else if (isCorrectOption) {
        bgColor = `${NEUBRUTALISM_COLORS.secondary}80`; // Correct but not selected (50% opacity)
        borderColor = NEUBRUTALISM_COLORS.secondary;
        textColor = NEUBRUTALISM_COLORS.white;
      }
    } else if (isSelected) {
      bgColor = NEUBRUTALISM_COLORS.neutral; // Selected, no feedback
      borderColor = NEUBRUTALISM_COLORS.primaryDark;
    }

    return {
      ...neubrutalismBase,
      padding: "0.75rem",
      fontWeight: "bold",
      backgroundColor: bgColor,
      borderColor: borderColor,
      color: textColor,
      cursor: isFeedback ? "default" : "pointer",
      transition: "transform 0.2s",
    };
  };

  const getNumberButtonStyle = (index: number) => {
    const isSelected = selectedNumbers.includes(index);
    const isFeedback = !!feedback;
    // Optional: Highlight correct numbers in feedback for 'select' mode
    // const currentQuestionObj = selectQuestions[currentQuestion];
    // const isCorrectNumber = isFeedback && getNumberTypes(currentQuestionObj.numbers[index]).includes(currentQuestionObj.setType);

    let bgColor = NEUBRUTALISM_COLORS.lightGray;
    let borderColor = NEUBRUTALISM_COLORS.borderGray;
    let textColor = NEUBRUTALISM_COLORS.primaryDark;

    if (isFeedback) {
      // Could add specific feedback styling for numbers if desired
    }

    if (isSelected) {
      bgColor = NEUBRUTALISM_COLORS.neutral; // Selected
      borderColor = NEUBRUTALISM_COLORS.primaryDark;
      textColor = NEUBRUTALISM_COLORS.primaryDark;
    }

    return {
      ...neubrutalismBase,
      aspectRatio: "1", // Square aspect ratio
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      backgroundColor: bgColor,
      borderColor: borderColor,
      color: textColor,
      cursor: isFeedback ? "default" : "pointer",
      transition: "transform 0.2s",
    };
  };

  const formatNumber = (num: number): string => {
    if (num === Math.PI) return "π";
    if (num === Math.E) return "e";
    if (Math.abs(num - Math.sqrt(2)) < 0.001) return "√2";
    if (Math.abs(num - Math.sqrt(3)) < 0.001) return "√3";
    if (Number.isInteger(num)) return num.toString();
    return num.toFixed(3).replace(/\.?0+$/, "");
  };

  return (
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: "600px",
        width: "100%",
        margin: "0 auto",
        padding: "1.5rem",
        backgroundColor: NEUBRUTALISM_COLORS.danger, // Salmon background
        border: `4px solid ${NEUBRUTALISM_COLORS.primaryDark}`,
        borderRadius: "20px",
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5 flex-wrap">
        <h3
          className="text-2xl font-extrabold flex items-center"
          style={{ color: NEUBRUTALISM_COLORS.white }}
        >
          <span className="mr-2 text-3xl">🔢</span> Number Types Quiz
        </h3>
        <div className="flex gap-2">
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.neutral,
              borderColor: NEUBRUTALISM_COLORS.primaryDark,
              fontWeight: "bold",
              fontSize: "0.875rem",
              padding: "0.5rem 1rem",
            }}
          >
            {score}/{attempts || "0"}
          </div>
          <button
            onClick={resetQuiz}
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.primaryDark,
              borderColor: NEUBRUTALISM_COLORS.white,
              padding: "0.5rem",
            }}
            aria-label="Reset quiz"
          >
            <RotateCw
              className="w-5 h-5"
              style={{ color: NEUBRUTALISM_COLORS.white }}
            />
          </button>
        </div>
      </div>

      {/* Mode Selector & Progress */}
      <div
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.secondary,
          marginBottom: "1.25rem",
        }}
      >
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => {
              setMode("identify");
              resetQuiz();
            }}
            style={getModeButtonStyle(mode === "identify")}
            onMouseEnter={(e) => {
              if (mode !== "identify")
                e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
            }}
          >
            Identify Type
          </button>
          <button
            onClick={() => {
              setMode("select");
              resetQuiz();
            }}
            style={getModeButtonStyle(mode === "select")}
            onMouseEnter={(e) => {
              if (mode !== "select")
                e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
            }}
          >
            Select Numbers
          </button>
        </div>
        <div className="text-center">
          <span
            className="text-sm opacity-90"
            style={{ color: NEUBRUTALISM_COLORS.primaryDark }}
          >
            {mode === "identify"
              ? `Question ${currentQuestion + 1} of ${identifyQuestions.length}`
              : `Question ${currentQuestion + 1} of ${selectQuestions.length}`}
          </span>
        </div>
      </div>

      {/* Main Question Area */}
      <div
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.neutral,
          marginBottom: "1.25rem",
        }}
      >
        {mode === "identify" ? (
          <>
            <div className="text-center mb-5">
              <h4
                className="font-bold text-lg mb-3"
                style={{ color: NEUBRUTALISM_COLORS.primaryDark }}
              >
                {identifyQuestions[currentQuestion].question}
              </h4>
              <div
                style={{
                  ...neubrutalismBase,
                  backgroundColor: NEUBRUTALISM_COLORS.lightGray,
                  borderColor: NEUBRUTALISM_COLORS.primaryDark,
                  display: "inline-block",
                  padding: "1.5rem",
                }}
              >
                <BlockMath
                  math={`\\Huge{${
                    Number.isInteger(identifyQuestions[currentQuestion].number)
                      ? identifyQuestions[currentQuestion].number
                      : identifyQuestions[currentQuestion].number.toFixed(3)
                  }}`}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-5">
              {identifyQuestions[currentQuestion].options.map(
                (option, index) => (
                  <button
                    key={index}
                    onClick={() => toggleAnswerSelection(index)}
                    disabled={!!feedback}
                    style={getOptionButtonStyle(index)}
                    onMouseEnter={(e) => {
                      if (!feedback) {
                        e.currentTarget.style.transform = "scale(1.02)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "";
                    }}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
            {selectedAnswers.length > 0 && !feedback && (
              <button
                onClick={checkIdentifyAnswer}
                style={{
                  ...neubrutalismBase,
                  backgroundColor: NEUBRUTALISM_COLORS.secondary,
                  borderColor: NEUBRUTALISM_COLORS.primaryDark,
                  fontWeight: "bold",
                  width: "100%",
                  padding: "0.75rem",
                  color: NEUBRUTALISM_COLORS.white,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                }}
              >
                Check Answer
              </button>
            )}
          </>
        ) : (
          <>
            <h4
              className="font-bold text-lg mb-4 text-center"
              style={{ color: NEUBRUTALISM_COLORS.primaryDark }}
            >
              {selectQuestions[currentQuestion].question}
            </h4>
            <div className="grid grid-cols-4 gap-2 mb-5">
              {selectQuestions[currentQuestion].numbers.map((num, index) => (
                <button
                  key={index}
                  onClick={() => toggleNumberSelection(index)}
                  style={getNumberButtonStyle(index)}
                  onMouseEnter={(e) => {
                    if (!feedback) {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                  }}
                >
                  {formatNumber(num)}
                </button>
              ))}
            </div>
            {selectedNumbers.length > 0 && !feedback && (
              <button
                onClick={checkSelectAnswer}
                style={{
                  ...neubrutalismBase,
                  backgroundColor: NEUBRUTALISM_COLORS.secondary,
                  borderColor: NEUBRUTALISM_COLORS.primaryDark,
                  fontWeight: "bold",
                  width: "100%",
                  padding: "0.75rem",
                  color: NEUBRUTALISM_COLORS.white,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                }}
              >
                Check Selection
              </button>
            )}
          </>
        )}
      </div>

      {/* Feedback Section */}
      {feedback && (
        <div style={getFeedbackBoxStyle()}>
          <div className="flex items-center mb-3">
            {feedback.isCorrect ? (
              <CheckCircle
                style={{
                  color: NEUBRUTALISM_COLORS.secondary,
                  marginRight: "0.5rem",
                }}
                size={24}
              />
            ) : (
              <XCircle
                style={{
                  color: NEUBRUTALISM_COLORS.warning,
                  marginRight: "0.5rem",
                }}
                size={24}
              />
            )}
            <p
              className={`font-extrabold text-lg ${
                feedback.isCorrect ? "text-green-800" : "text-amber-800"
              }`}
            >
              {feedback.message}
            </p>
          </div>

          {/* Show Hierarchy Button */}
          <button
            onClick={() => setShowHierarchy(!showHierarchy)}
            style={{
              color: NEUBRUTALISM_COLORS.primaryDark,
              fontWeight: "medium",
              fontSize: "0.875rem",
              marginBottom: "0.75rem",
            }}
            className="flex items-center"
          >
            <HelpCircle className="mr-1" size={16} />
            {showHierarchy ? "Hide Hierarchy" : "Show Hierarchy"}
          </button>

          {/* Hierarchy Content */}
          {showHierarchy && (
            <div
              style={{
                ...neubrutalismBase,
                backgroundColor: NEUBRUTALISM_COLORS.neutral,
                borderColor: NEUBRUTALISM_COLORS.primaryDark,
              }}
            >
              <h5
                className="font-extrabold mb-2"
                style={{ color: NEUBRUTALISM_COLORS.primaryDark }}
              >
                Number Sets Hierarchy:
              </h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: getNumberTypeColor("natural") }}
                  ></div>
                  <span style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                    Natural: 1, 2, 3, ... (Counting numbers)
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: getNumberTypeColor("whole") }}
                  ></div>
                  <span style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                    Whole: 0, 1, 2, ... (Natural + zero)
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: getNumberTypeColor("integer") }}
                  ></div>
                  <span style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                    Integer: ..., -1, 0, 1, ... (Whole + negatives)
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: getNumberTypeColor("rational") }}
                  ></div>
                  <span style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                    Rational: Fractions/Decimals (Integer + fractions)
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{
                      backgroundColor: getNumberTypeColor("irrational"),
                    }}
                  ></div>
                  <span style={{ color: NEUBRUTALISM_COLORS.primaryDark }}>
                    Irrational: π, √2, e (Cannot be fractions)
                  </span>
                </div>
              </div>
              <p
                className="text-xs mt-2 opacity-80"
                style={{ color: NEUBRUTALISM_COLORS.primaryDark }}
              >
                Note: Each set includes all sets above it in the hierarchy.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 mt-5">
        <button
          onClick={switchMode}
          style={{
            ...neubrutalismBase,
            flex: 1,
            padding: "0.75rem",
            fontWeight: "bold",
            backgroundColor: NEUBRUTALISM_COLORS.lightGray,
            borderColor: NEUBRUTALISM_COLORS.primaryDark,
            color: NEUBRUTALISM_COLORS.primaryDark,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
          }}
        >
          <Shuffle className="mr-1 inline" size={18} />
          Switch Mode
        </button>
        <button
          onClick={nextQuestion}
          style={{
            ...neubrutalismBase,
            flex: 2, // Give more space to 'Next'
            padding: "0.75rem",
            fontWeight: "bold",
            backgroundColor: NEUBRUTALISM_COLORS.secondary,
            borderColor: NEUBRUTALISM_COLORS.primaryDark,
            color: NEUBRUTALISM_COLORS.white,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
          }}
        >
          {(() => {
            if (mode === "identify") {
              return currentQuestion === identifyQuestions.length - 1
                ? "Restart Quiz"
                : "Next Question";
            } else {
              return currentQuestion === selectQuestions.length - 1
                ? "Restart Quiz"
                : "Next Question";
            }
          })()}{" "}
          →
        </button>
      </div>
    </div>
  );
};

export default NumberTypesQuiz;
