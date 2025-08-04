
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const cubesCubeRootsQuizData = {
  title: "Cubes & Cube Roots",
  icon: "㎥", 
  theme: {
    from: "from-indigo-500", 
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
      
      question: "What is $5^3$?",
      options: ["$15$", "$25$", "$125$", "$150$"],
      correct: 2,
      
      explanation: "$5^3 = 5 \\times 5 \\times 5 = 25 \\times 5 = 125$",
      explanationType: 'text' 
    },
    {
      
      question: "Calculate $(-4)^3$.",
      options: ["$-12$", "$-64$", "$12$", "$64$"],
      correct: 1,
      
      explanation: "$(-4)^3 = (-4) \\times (-4) \\times (-4) = 16 \\times (-4) = -64$ (Positive times negative is negative)",
      explanationType: 'text'
    },
    {
      
      question: "What is $\\sqrt[3]{64}$?",
      options: ["$4$", "$8$", "$16$", "$32$"],
      correct: 0,
      
      explanation: "$\\sqrt[3]{64} = 4$ (Because $4^3 = 4 \\times 4 \\times 4 = 16 \\times 4 = 64$)",
      explanationType: 'text'
    },
    {
      
      question: "Which of the following is NOT a perfect cube?",
      options: ["$27$", "$64$", "$100$", "$125$"],
      correct: 2,
      
      explanation: "$27 = 3^3$, $64 = 4^3$, $125 = 5^3$. $100$ cannot be expressed as an integer multiplied by itself three times.",
      explanationType: 'text'
    },
    {
      
      question: "Between which two integers is $\\sqrt[3]{30}$?",
      options: ["$2$ and $3$", "$3$ and $4$", "$4$ and $5$", "$5$ and $6$"],
      correct: 1,
      
      explanation: "Find perfect cubes around $30$: $3^3 = 27$ and $4^3 = 64$. So, $3 < \\sqrt[3]{30} < 4$",
      explanationType: 'text'
    },
    {
      
      question: "Evaluate: $\\sqrt[3]{-27}$",
      options: ["$-9$", "$-3$", "$3$", "$9$"],
      correct: 1,
      
      explanation: "$\\sqrt[3]{-27} = -3$ (Because $(-3)^3 = (-3) \\times (-3) \\times (-3) = 9 \\times (-3) = -27$)",
      explanationType: 'text'
    },
    {
      
      question: "If the volume of a cube is $216 \\text{ cm}^3$, what is its side length?",
      options: ["$5 \\text{ cm}$", "$6 \\text{ cm}$", "$7 \\text{ cm}$", "$8 \\text{ cm}$"],
      correct: 1,
      
      explanation: "Volume $= \\text{side}^3$. Side length $= \\sqrt[3]{\\text{Volume}} = \\sqrt[3]{216} = 6 \\text{ cm}$",
      explanationType: 'text'
    },
    {
      
      question: "Simplify: $\\sqrt[3]{8} \\times \\sqrt[3]{27}$",
      options: ["$6$", "$9$", "$18$", "$216$"],
      correct: 0,
      
      explanation: "$\\sqrt[3]{8} \\times \\sqrt[3]{27} = 2 \\times 3 = 6$",
      explanationType: 'text'
    }
  ] satisfies QuizQuestion[]
};


export const CubesCubeRootsQuiz: React.FC = () => {
  return <MultipleChoiceInteractiveComponent {...cubesCubeRootsQuizData} />;
};

export default CubesCubeRootsQuiz;