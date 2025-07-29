// FractionsPercentagesQuizData.ts
import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent"; // Adjust the import path as needed

const fractionsPercentagesQuizData = {
  title: "Fractions & Percentages",
  icon: "🧮",
  theme: {
    from: "from-amber-500",
    to: "to-orange-600",
    button: "bg-orange-500",
    buttonHover: "hover:bg-orange-600",
  },
  rulesTitle: "Key Conversions:", // Optional, as it matches the default
  rules: [
    "Fractions: Find common denominators for +/−",
    "Multiply fractions: Numerators ×, Denominators ×",
    "Divide fractions: Multiply by reciprocal",
    "Percentage = Fraction out of 100",
    "Decimal to %: Multiply by 100",
  ],
  questions: [
    {
      // Uses \text{} - BlockMath is appropriate
      question: "\\text{Convert } \\frac{3}{4} \\text{ to a percentage:}",
 // Indicates BlockMath should be used
      options: ["34\\%", "75\\%", "133\\%", "43\\%"],
      correct: 1,
      // Uses =, \frac, = - BlockMath is appropriate for multi-part explanations
      explanation: "\\frac{3}{4} = \\frac{3 \\times 25}{4 \\times 25} = \\frac{75}{100} = 75\\%",
      explanationType: 'math' // Indicates BlockMath should be used for explanation
    },
    {
      // Plain math expression - BlockMath is appropriate
      question: "\\text{Calculate  } 20\\% \\text{ of } 150:",

      options: ["30", "75", "120", "300"],
      correct: 0,
      // Uses \\times, \\frac, =, decimals - BlockMath is appropriate
      explanation: "20\\% \\times 150 = \\frac{20}{100} \\times 150 = 0.2 \\times 150 = 30",
      explanationType: 'math'
    },
    {
      // Plain math expression - BlockMath is appropriate
      question: "\\text{What is } \\frac{2}{5} \\text{ as a decimal?}",

      options: ["0.25", "0.4", "0.5", "2.5"],
      correct: 1,
      // Uses =, \\div, = - BlockMath is appropriate
      explanation: "\\frac{2}{5} = 2 \\div 5 = 0.4",
      explanationType: 'math'
    },
    {
      // Plain math expression - BlockMath is appropriate
      question: "\\text{Convert } 0.6 \\text{ to a percentage:}",

      options: ["0.6\\%", "6\\%", "60\\%", "600\\%"],
      correct: 2,
      // Uses =, \\frac, = - BlockMath is appropriate
      explanation: "0.6 = \\frac{6}{10} = \\frac{60}{100} = 60\\%",
      explanationType: 'math'
    },
    {
      // Plain math expression - BlockMath is appropriate
      question: "\\text{Calculate } \\frac{1}{3} + \\frac{1}{6}:",

      options: ["\\frac{1}{2}", "\\frac{1}{9}", "\\frac{2}{9}", "\\frac{3}{6}"],
      correct: 0,
      // Multi-step with =, +, = - BlockMath is appropriate
      explanation: "\\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}",
      explanationType: 'math'
    },
    {
      // Plain math expression - BlockMath is appropriate
      question: "\\text{What is 15 as a \\% } \\\\ \\text{ fraction in simplest form?}",

      options: ["\\frac{15}{100}", "\\frac{3}{20}", "\\frac{1}{15}", "\\frac{1}{5}"],
      correct: 1,
      // Multi-step with =, \\frac, = - BlockMath is appropriate
      explanation: "15\\% = \\frac{15}{100} = \\frac{15 \\div 5}{100 \\div 5} = \\frac{3}{20}",
      explanationType: 'math'
    },
    {
      // Plain math expression - BlockMath is appropriate
      question: "\\text{Calculate } \\frac{3}{4} \\times \\frac{2}{5}:",

      options: ["\\frac{5}{9}", "\\frac{6}{20}", "\\frac{3}{10}", "\\frac{15}{8}"],
      correct: 2,
      // Multi-step with \\times, =, = - BlockMath is appropriate
      explanation: "\\frac{3}{4} \\times \\frac{2}{5} = \\frac{3 \\times 2}{4 \\times 5} = \\frac{6}{20} = \\frac{3}{10}",
      explanationType: 'math'
    },
    {
      // Plain math expression - BlockMath is appropriate
      question: "\\text{If a shirt costs } \\$40 \\\\ \\text{ and is on sale for } 25\\% \\\\  \\text{ off, what is the sale price?}",

      options: ["\\$10", "\\$25", "\\$30", "\\$35"],
      correct: 2,
      // Multi-step with \\times, \\frac, =, \\text{}, = - BlockMath is appropriate
      explanation: "Discount = 25\\% \\times \\$40 = \\frac{25}{100} \\times 40 = \\$10\\\\\\text{Sale price} = \\$40 - \\$10 = \\$30",
      explanationType: 'math' // Uses \\text{} and \\\\, so BlockMath is appropriate
    }
  ] satisfies QuizQuestion[] // Using 'satisfies' for type checking if you are using TypeScript
};

// Wrapper Component
export const FractionsPercentagesQuiz: React.FC = () => {
  return <MultipleChoiceInteractiveComponent {...fractionsPercentagesQuizData} />;
};

// Default export if needed directly
// export default FractionsPercentagesQuiz;