// CubesCubeRootsQuizData.ts
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const cubesCubeRootsQuizData = {
  title: "Cubes & Cube Roots",
  icon: "㎥", // Or "∛" or a relevant Lucide icon if preferred
  theme: {
    from: "from-indigo-500", // Example theme colors
    to: "to-purple-600",
    button: "bg-purple-500",
    buttonHover: "hover:bg-purple-600",
  },
  rulesTitle: "Key Concepts:",
  rules: [
    "Cube: n³ = n × n × n",
    "Cube Root: ∛(n³) = n",
    "Cube roots of negative numbers are negative",
    "Memorize perfect cubes: 1, 8, 27, 64, 125, ...",
    "Estimate non-perfect roots between known perfect cubes",
  ],
  questions: [
    {
      question: "\\text{What is } 5^3\\text{?}",

      options: ["15", "25", "125", "150"],
      correct: 2,
      explanation: "5^3 = 5 \\times 5 \\times 5 = 25 \\times 5 = 125",
      explanationType: 'math'
    },
    {
      question: "\\text{Calculate } (-4)^3\\text{.}",

      options: ["-12", "-64", "12", "64"],
      correct: 1,
      explanation: "(-4)^3 = (-4) \\times (-4) \\times (-4)\\\\ = 16 \\times (-4) = -64\\\\\\text{(Positive times negative is negative)}",
      explanationType: 'math'
    },
    {
      question: "\\text{What is } \\sqrt[3]{64}\\text{?}",

      options: ["4", "8", "16", "32"],
      correct: 0,
      explanation: "\\sqrt[3]{64} = 4\\\\\\text{Because } 4^3 = 4 \\times 4 \\times 4 = 16 \\times 4 = 64",
      explanationType: 'math'
    },
    {
      question: "\\text{Which of the following is NOT a perfect cube?}",

      options: ["27", "64", "100", "125"],
      correct: 2,
      explanation: "27 = 3^3, 64 = 4^3, 125 = 5^3\\\\100 \\text{ cannot be expressed as an integer multiplied by itself three times.}",
      explanationType: 'math'
    },
    {
      question: "\\text{Between which two integers is } \\sqrt[3]{30} \\text{?}",

      options: ["2 \\text{ and } 3", "3 \\text{ and } 4", "4 \\text{ and } 5", "5 \\text{ and } 6"],
      correct: 1,
      explanation: "Find perfect cubes around 30:\\\\3^3 = 27 \\text{ and } 4^3 = 64\\\\\\text{So, } 3 < \\sqrt[3]{30} < 4",
      explanationType: 'math'
    },
    {
      question: "\\text{Evaluate: } \\sqrt[3]{-27}",

      options: ["-9", "-3", "3", "9"],
      correct: 1,
      explanation: "\\sqrt[3]{-27} = -3\\\\\\text{Because } (-3)^3 = (-3) \\times (-3) \\times (-3) = 9 \\times (-3) = -27",
      explanationType: 'math'
    },
    {
      question: "\\text{If the volume of a cube is } 216 \\text{ cm}^3\\text{, what is its side length?}",

      options: ["5 \\text{ cm}", "6 \\text{ cm}", "7 \\text{ cm}", "8 \\text{ cm}"],
      correct: 1,
      explanation: "\\text{Volume} = \\text{side}^3\\\\\\text{Side length} = \\sqrt[3]{\\text{Volume}} = \\sqrt[3]{216} = 6 \\text{ cm}",
      explanationType: 'math'
    },
    {
      question: "\\text{Simplify: } \\sqrt[3]{8} \\times \\sqrt[3]{27}",

      options: ["6", "9", "18", "216"],
      correct: 0,
      explanation: "\\sqrt[3]{8} \\times \\sqrt[3]{27}\\\\= 2 \\times 3 = 6",
      explanationType: 'math'
    }
  ] satisfies QuizQuestion[]
};

// Optional Wrapper Component
export const CubesCubeRootsQuiz: React.FC = () => {
  return <MultipleChoiceInteractiveComponent {...cubesCubeRootsQuizData} />;
};

export default CubesCubeRootsQuiz;