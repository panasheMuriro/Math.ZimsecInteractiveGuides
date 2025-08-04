


import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent";



const numberPatternsQuizData = {
  title: "Number Patterns",
  icon: "🔢", 
  theme: {
    from: "from-violet-500", 
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
      
      question: "Identify the pattern: $7, 12, 17, 22, 27, \\ldots$",
      options: [
        "Arithmetic",
        "Geometric",
        "Squares",
        "Fibonacci"
      ],
      correct: 0, 
      
      explanation: "The difference between consecutive terms is constant: $12-7=5, 17-12=5, \\ldots$ This is an Arithmetic sequence with $d=5$.",
      explanationType: 'text' 
    },
    {
      
      question: "Identify the pattern: $4, 12, 36, 108, \\ldots$",
      options: [
        "Arithmetic",
        "Geometric",
        "Squares",
        "Triangulars"
      ],
      correct: 1, 
      
      explanation: "Each term is multiplied by a constant factor: $12 \\div 4 = 3, 36 \\div 12 = 3, \\ldots$ This is a Geometric sequence with $r=3$.",
      explanationType: 'text'
    },
    {
      
      question: "What is the next term in the sequence? $1, 4, 9, 16, \\ldots$",
      options: ["$20$", "$24$", "$25$", "$30$"],
      correct: 2, 
      
      explanation: "These are square numbers: $1^2, 2^2, 3^2, 4^2, \\ldots$ The next term is $5^2 = 25$.",
      explanationType: 'text'
    },
    {
      
      question: "Identify the pattern: $1, 1, 2, 3, 5, 8, \\ldots$",
      options: [
        "Arithmetic",
        "Geometric",
        "Squares",
        "Fibonacci"
      ],
      correct: 3, 
      
      explanation: "Each term is the sum of the two preceding terms: $1+1=2, 1+2=3, 2+3=5, 3+5=8, \\ldots$ This is the Fibonacci sequence.",
      explanationType: 'text'
    },
    {
      
      question: "What is the 6th triangular number?",
      options: ["$15$", "$18$", "$21$", "$28$"],
      correct: 2, 
      
      explanation: "Triangular numbers formula: $T_n = \\frac{n(n+1)}{2}$. $T_6 = \\frac{6(6+1)}{2} = \\frac{6 \\times 7}{2} = \\frac{42}{2} = 21$",
      explanationType: 'text'
    },
    {
      
      question: "Find the 5th term of the sequence: $3, 7, 11, 15, \\ldots$",
      options: ["$18$", "$19$", "$20$", "$23$"],
      correct: 1, 
      
      explanation: "First term $a_1 = 3$, common difference $d = 4$. Formula: $a_n = a_1 + (n-1)d$. $a_5 = 3 + (5-1)\\times 4 = 3 + 4\\times 4 = 3 + 16 = 19$",
      explanationType: 'text'
    },
    {
      
      question: "Identify the pattern: $1, 3, 6, 10, 15, \\ldots$",
      options: [
        "Arithmetic",
        "Geometric",
        "Triangulars",
        "Squares"
      ],
      correct: 2, 
      
      explanation: "These numbers represent the count of objects that can form an equilateral triangle. They follow the formula $T_n = \\frac{n(n+1)}{2}$. This is the sequence of Triangular Numbers.",
      explanationType: 'text'
    },
    {
      
      question: "What is the 7th term of the geometric sequence: $2, 6, 18, 54, \\ldots$",
      options: ["$486$", "$1458$", "$162$", "$1944$"],
      correct: 1, 
      explanation: "First term $a_1 = 2$, common ratio $r = 3$. Formula: $a_n = a_1 \\times r^{n-1}$. $a_7 = 2 \\times 3^{7-1} = 2 \\times 3^6 = 2 \\times 729 = 1458$",
      explanationType: 'text'
    }
  ] satisfies QuizQuestion[] 
};


export const NumberPatternsQuiz: React.FC = () => {
  return <MultipleChoiceInteractiveComponent {...numberPatternsQuizData} />;
};

export default NumberPatternsQuiz;