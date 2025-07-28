// DirectedNumbersQuizData.ts
import Topic1QuizTemplate, { QuizQuestion } from '../Templates/Topic1QuizTemplate';
const directedNumbersQuizData = {
  title: "Directed Numbers Quiz",
  icon: "⇄",
  theme: {
    from: "from-rose-600",
    to: "to-pink-700",
    button: "bg-pink-500",
    buttonHover: "hover:bg-pink-600",
  },
  rules: [
    "Same signs: Add and keep sign",
    "Different signs: Subtract and take larger sign",
    "Subtracting negative = Adding positive",
    "Same signs (×/÷): Positive result",
    "Different signs (×/÷): Negative result",
  ],
  
  questions: [
    {
      question: "\\text{What is the result of } \\\\ (-7) + (+3)\\text{?}", // KaTeX string with \text{}
      options: ["-10", "-4", "+4", "+10"],
      correct: 1,
      explanation: "\\text{Different signs: } |-7| = 7, |+3| = 3\\\\\\text{Subtract: } 7 - 3 = 4\\\\\\text{Take sign of larger: } -4"
    },
    {
      question: "\\text{Calculate: } 5 - (-3)", // KaTeX string with \text{}
      options: ["2", "8", "-8", "15"],
      correct: 1,
      explanation: "5 - (-3) = 5 + 3 = 8"
    },
    {
      question: "\\text{What is } \\\\ (-6) \\times (-4)\\text{?}", // KaTeX string with \text{}
      options: ["-24", "-10", "+10", "+24"],
      correct: 3,
      explanation: "(-6) \\times (-4) = +24\\quad\\text{(Same signs = positive)}"
    },
    {
      question: "\\text{Calculate: } (+12) \\div (-3)", // KaTeX string with \text{}
      options: ["-9", "-4", "+4", "+9"],
      correct: 1,
      explanation: "(+12) \\div (-3) = -4\\quad\\text{(Different signs = negative)}"
    },
    {
      question: "\\text{What is } \\\\ (-8) + (-5)\\text{?}", // KaTeX string with \text{}
      options: ["-13", "-3", "+3", "+13"],
      correct: 0,
      explanation: "(-8) + (-5) = -13\\quad\\text{(Same signs: Add and keep sign)}"
    },
    {
      question: "\\text{Calculate: } -4 - 6", // KaTeX string with \text{}
      options: ["-10", "-2", "+2", "+10"],
      correct: 0,
      explanation: "-4 - 6 = -4 + (-6) = -10"
    },
    {
      question: "\\text{What is the result of } \\\\ (-2) \\times (+7)\\text{?}", // KaTeX string with \text{}
      options: ["-14", "-5", "+5", "+14"],
      correct: 0,
      explanation: "(-2) \\times (+7) = -14\\quad\\text{(Different signs = negative)}"
    },
    {
      question: "\\text{Calculate: } \\\\ (-15) \\div (+5)", // KaTeX string with \text{}
      options: ["-10", "-3", "+3", "+10"],
      correct: 1,
      explanation: "(-15) \\div (+5) = -3\\quad\\text{(Different signs = negative)}"
    }
  ] satisfies QuizQuestion[]
};
const DirectedNumbersQuiz: React.FC = () => {
  return <Topic1QuizTemplate {...directedNumbersQuizData} />;
};

export default DirectedNumbersQuiz;