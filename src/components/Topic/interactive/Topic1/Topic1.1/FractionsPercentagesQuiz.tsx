import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent";

const fractionsPercentagesQuizData = {
  title: "Fractions & Percentages",
  icon: "🧮",
  theme: {
    from: "from-amber-500",
    to: "to-orange-600",
    button: "bg-orange-500",
    buttonHover: "hover:bg-orange-600",
  },
  rulesTitle: "Key Conversions:", 
  rules: [
    "Fractions: Find common denominators for +/−",
    "Multiply fractions: Numerators ×, Denominators ×",
    "Divide fractions: Multiply by reciprocal",
    "Percentage = Fraction out of 100",
    "Decimal to %: Multiply by 100",
  ],
  questions: [
    {
      
      question: "Convert $\\frac{3}{4}$ to a percentage:",
      options: ["$34\\%$", "$75\\%$", "$133\\%$", "$43\\%$"],
      correct: 1,
      
      explanation: "$\\frac{3}{4} = \\frac{3 \\times 25}{4 \\times 25} = \\frac{75}{100} = 75\\%$",
      explanationType: 'text' 
    },
    {
      
      question: "Calculate $20\\%$ of $150$:",

      options: ["$30$", "$75$", "$120$", "$300$"],
      correct: 0,
      
      explanation: "$20\\% \\times 150 = \\frac{20}{100} \\times 150 = 0.2 \\times 150 = 30$",
      explanationType: 'text'
    },
    {
      
      question: "What is $\\frac{2}{5}$ as a decimal?",

      options: ["$0.25$", "$0.4$", "$0.5$", "$2.5$"],
      correct: 1,
      
      explanation: "$\\frac{2}{5} = 2 \\div 5 = 0.4$",
      explanationType: 'text'
    },
    {
      
      question: "Convert $0.6$ to a percentage:",

      options: ["$0.6\\%$", "$6\\%$", "$60\\%$", "$600\\%$"],
      correct: 2,
      
      explanation: "$0.6 = \\frac{6}{10} = \\frac{60}{100} = 60\\%$",
      explanationType: 'text'
    },
    {
      
      question: "Calculate $\\frac{1}{3} + \\frac{1}{6}$:",

      options: ["$\\frac{1}{2}$", "$\\frac{1}{9}$", "$\\frac{2}{9}$", "$\\frac{3}{6}$"],
      correct: 0,
      
      explanation: "$\\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$",
      explanationType: 'text'
    },
    {
      
      question: "What is $15\\%$ as a fraction in simplest form?",

      options: ["$\\frac{15}{100}$", "$\\frac{3}{20}$", "$\\frac{1}{15}$", "$\\frac{1}{5}$"],
      correct: 1,
      
      explanation: "$15\\% = \\frac{15}{100} = \\frac{15 \\div 5}{100 \\div 5} = \\frac{3}{20}$",
      explanationType: 'text'
    },
    {
      
      question: "Calculate $\\frac{3}{4} \\times \\frac{2}{5}$:",

      options: ["$\\frac{5}{9}$", "$\\frac{6}{20}$", "$\\frac{3}{10}$", "$\\frac{15}{8}$"],
      correct: 2,
      
      explanation: "$\\frac{3}{4} \\times \\frac{2}{5} = \\frac{3 \\times 2}{4 \\times 5} = \\frac{6}{20} = \\frac{3}{10}$",
      explanationType: 'text'
    },
    {
      
      
      
      
      question: "\\text{If a shirt costs } \\$40 \\\\ \\text{ and is on sale for } 25\\% \\\\  \\text{ off, what is the sale price?}",
      options: ["$\\$10$", "$\\$25$", "$\\$30$", "$\\$35$"], 
      correct: 2,
      
      explanation: "Discount = 25\\% \\times \\$40 = \\frac{25}{100} \\times 40 = \\$10\\\\\\text{Sale price} = \\$40 - \\$10 = \\$30",
      explanationType: 'math' 
    }
  ] satisfies QuizQuestion[] 
};


export const FractionsPercentagesQuiz: React.FC = () => {
  return <MultipleChoiceInteractiveComponent {...fractionsPercentagesQuizData} />;
};


