// NumberPatternsData.ts
 // Assuming QuizQuestion type is available

import Topic1QuizTemplate, { QuizQuestion } from "../Templates/Topic1QuizTemplate";

// Define specific types for Number Pattern questions if needed beyond the standard QuizQuestion
// For now, we can use QuizQuestion but ensure the 'question' and 'explanation' are KaTeX strings.
const numberPatternsQuizData = {
  title: "Number Patterns",
  icon: "🔢", // Or a relevant Lucide icon
  theme: {
    from: "from-violet-500", // Example theme
    to: "to-purple-600",
    button: "bg-purple-500",
    buttonHover: "hover:bg-purple-600",
  },
  rulesTitle: "Pattern Types:",
  rules: [
    "Arithmetic: Constant difference (aₙ = a₁ + (n-1)d)",
    "Geometric: Constant ratio (aₙ = a₁ × r^(n-1))",
    "Square Numbers: n² (1, 4, 9, 16, ...)",
    "Triangular Numbers: n(n+1)/2 (1, 3, 6, 10, ...)",
    "Fibonacci: Term = Sum of two preceding terms",
  ],
  questions: [
    {
      question: "\\text{Identify the pattern: } \\\\ 7, 12, 17, 22, 27, \\ldots",
      // Indicates BlockMath should be used
      options: [
        "\\text{Arithmetic}",
        "\\text{Geometric}",
        "\\text{Squares}",
        "\\text{Fibonacci}"
      ],
      correct: 0, // Index of "Arithmetic"
      explanation: "\\text{The difference between consecutive terms is constant: } 12-7=5, 17-12=5, \\ldots\\\\\\text{This is an Arithmetic sequence with } d=5.",
      explanationType: 'math'
    },
    {
      question: "\\text{Identify the pattern: } \\\\ 4, 12, 36, 108, \\ldots",
     
      options: [
        "\\text{Arithmetic}",
        "\\text{Geometric}",
        "\\text{Squares}",
        "\\text{Triangulars}"
      ],
      correct: 1, // Index of "Geometric"
      explanation: "\\text{Each term is multiplied by a constant factor: } 12 \\div 4 = 3, 36 \\div 12 = 3, \\ldots\\\\\\text{This is a Geometric sequence with } r=3.",
      explanationType: 'math'
    },
    {
      question: "\\text{What is the next term} \\\\ \\text{ in the sequence? } \\\\ 1, 4, 9, 16, \\ldots",
     
      options: ["20", "24", "25", "30"],
      correct: 2, // Index of "25"
      explanation: "\\text{These are square numbers: } 1^2, 2^2, 3^2, 4^2, \\ldots\\\\\\text{The next term is } 5^2 = 25.",
      explanationType: 'math'
    },
    {
      question: "\\text{Identify the pattern: } \\\\ 1, 1, 2, 3, 5, 8, \\ldots",
     
      options: [
        "\\text{Arithmetic}",
        "\\text{Geometric}",
        "\\text{Squares}",
        "\\text{Fibonacci}"
      ],
      correct: 3, // Index of "Fibonacci"
      explanation: "\\text{Each term is the sum of} \\\\ \\text{ the two preceding terms: } 1+1=2, 1+2=3, 2+3=5, 3+5=8, \\ldots\\\\\\text{This is the Fibonacci sequence.}",
      explanationType: 'math'
    },
    {
      question: "\\text{What is the 6th} \\\\ \\text{triangular number?}",
     
      options: ["15", "18", "21", "28"],
      correct: 2, // Index of "21"
      explanation: "\\text{Triangular numbers formula: } T_n = \\frac{n(n+1)}{2}\\\\T_6 = \\frac{6(6+1)}{2} = \\frac{6 \\times 7}{2} = \\frac{42}{2} = 21",
      explanationType: 'math'
    },
    {
      question: "\\text{Find the 5th term} \\\\ \\text{ of the sequence: }\\\\  3, 7, 11, 15, \\ldots",
     
      options: ["18", "19", "20", "23"],
      correct: 1, // Index of "19"
      explanation: "\\text{First term } a_1 = 3, \\text{ common difference } d = 4\\\\\\text{Formula: } a_n = a_1 + (n-1)d\\\\a_5 = 3 + (5-1)\\times 4 = 3 + 4\\times 4 = 3 + 16 = 19",
      explanationType: 'math'
    },
    {
      question: "\\text{Identify the pattern: } \\\\ 1, 3, 6, 10, 15, \\ldots",
     
      options: [
        "\\text{Arithmetic}",
        "\\text{Geometric}",
        "\\text{Triangulars}",
        "\\text{Squares}"
      ],
      correct: 2, // Index of "Triangular Numbers"
      explanation: "\\text{These numbers represent the count of objects that can form an equilateral triangle.}\\\\\\text{They follow the formula } T_n = \\frac{n(n+1)}{2}.\\\\\\text{This is the sequence of Triangular Numbers.}",
      explanationType: 'math'
    },
    {
      question: "\\text{What is the 7th term of }\\\\ \\text{the geometric sequence: } \\\\ 2, 6, 18, 54, \\ldots",
     
      options: ["486", "1458", "162", "1944"],
      correct: 1, // Index of "1458"
      explanation: "\\text{First term } a_1 = 2, \\text{ common ratio } r = 3\\\\\\text{Formula: } a_n = a_1 \\times r^{n-1}\\\\a_7 = 2 \\times 3^{7-1} = 2 \\times 3^6 = 2 \\times 729 = 1458",
      explanationType: 'math'
    }
  ] satisfies QuizQuestion[] // Using satisfies for type checking
};

// Wrapper Component (Optional)
export const NumberPatternsQuiz: React.FC = () => {
  return <Topic1QuizTemplate {...numberPatternsQuizData} />;
};

export default NumberPatternsQuiz;