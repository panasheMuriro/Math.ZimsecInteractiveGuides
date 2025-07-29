// SquaresSquareRootsQuizData.ts
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const squaresSquareRootsQuizData = {
  title: "Squares & Square Roots",
  icon: "▢", // Or "√" or a Lucide icon component if preferred
  theme: {
    from: "from-emerald-500", // Example theme colors
    to: "to-teal-600",
    button: "bg-teal-500",
    buttonHover: "hover:bg-teal-600",
  },
  rulesTitle: "Key Concepts:",
rules: [
  "Square: n² = n × n",
  "Square Root: √(n²) = n (principal root)",
  "Every positive number has two square roots: ±√n",
  "Memorize perfect squares: 1, 4, 9, 16, 25, ...",
  "Estimate non-perfect roots between known perfect squares",
],
  questions: [
    {
      question: "\\text{What is } 7^2\\text{?}",

      options: ["14", "28", "49", "56"],
      correct: 2,
      explanation: "7^2 = 7 \\times 7 = 49",
      explanationType: 'math'
    },
    {
      question: "\\text{Calculate } (-6)^2\\text{.}",

      options: ["-36", "-12", "12", "36"],
      correct: 3,
      explanation: "(-6)^2 = (-6) \\times (-6) = 36\\\\\\text{(Negative times negative is positive)}",
      explanationType: 'math'
    },
    {
      question: "\\text{What is } \\sqrt{81}\\text{?}",

      options: ["7", "8", "9", "10"],
      correct: 2,
      explanation: "\\sqrt{81} = 9\\\\\\text{Because } 9 \\times 9 = 81",
      explanationType: 'math'
    },
    {
      question: "\\text{Which of the following is NOT a perfect square?}",

      options: ["25", "36", "50", "64"],
      correct: 2,
      explanation: "25 = 5^2, 36 = 6^2, 64 = 8^2\\\\50 \\text{ cannot be expressed as an integer multiplied by itself.}",
      explanationType: 'math'
    },
    {
      question: "\\text{Between which two integers is } \\sqrt{30} \\text{?}",

      options: ["4 \\text{ and } 5", "5 \\text{ and } 6", "6 \\text{ and } 7", "7 \\text{ and } 8"],
      correct: 1,
      explanation: "Find perfect squares around 30:\\\\5^2 = 25 \\text{ and } 6^2 = 36\\\\\\text{So, } 5 < \\sqrt{30} < 6",
      explanationType: 'math'
    },
    {
      question: "\\text{Evaluate: } -\\sqrt{16} + 3^2",

      options: ["-1", "5", "11", "13"],
      correct: 1,
      explanation: "-\\sqrt{16} + 3^2 = -4 + (3 \\times 3)\\\\= -4 + 9 = 5",
      explanationType: 'math'
    },
    {
      question: "\\text{If the area of a square is } 49 \\text{ cm}^2\\text{, what is its side length?}",

      options: ["6 \\text{ cm}", "7 \\text{ cm}", "8 \\text{ cm}", "9 \\text{ cm}"],
      correct: 1,
      explanation: "\\text{Area} = \\text{side}^2\\\\\\text{Side length} = \\sqrt{\\text{Area}} = \\sqrt{49} = 7 \\text{ cm}",
      explanationType: 'math'
    },
    {
      question: "\\text{Simplify: } \\sqrt{9} + \\sqrt{16} - \\sqrt{4}",

      options: ["3", "5", "7", "9"],
      correct: 1,
      explanation: "\\sqrt{9} + \\sqrt{16} - \\sqrt{4}\\\\= 3 + 4 - 2 = 5",
      explanationType: 'math'
    }
  ] satisfies QuizQuestion[]
};

// Optional Wrapper Component
export const SquaresSquareRootsQuiz: React.FC = () => {
  return <MultipleChoiceInteractiveComponent {...squaresSquareRootsQuizData} />;
};

export default SquaresSquareRootsQuiz;