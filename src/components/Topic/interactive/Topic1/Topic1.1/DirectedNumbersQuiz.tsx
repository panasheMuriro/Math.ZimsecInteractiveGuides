// DirectedNumbersQuizData.ts
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

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
      question: "What is the result of $(-7) + (+3)$?",
      options: ["$-10$", "$-4$", "$+4$", "$+10$"],
      correct: 1,
      explanation: "Different signs: $|-7| = 7$, $|+3| = 3$. Subtract: $7 - 3 = 4$. Take sign of larger: $-4$"
    },
    {
      question: "Calculate: $5 - (-3)$",
      options: ["$2$", "$8$", "$-8$", "$15$"],
      correct: 1,
      explanation: "$5 - (-3) = 5 + 3 = 8$"
    },
    {
      question: "What is $(-6) \\times (-4)$?",
      options: ["$-24$", "$-10$", "$+10$", "$+24$"],
      correct: 3,
      explanation: "$(-6) \\times (-4) = +24$ (Same signs = positive)"
    },
    {
      question: "Calculate: $(+12) \\div (-3)$",
      options: ["$-9$", "$-4$", "$+4$", "$+9$"],
      correct: 1,
      explanation: "$(12) \\div (-3) = -4$ (Different signs = negative)"
    },
    {
      question: "What is $(-8) + (-5)$?",
      options: ["$-13$", "$-3$", "$+3$", "$+13$"],
      correct: 0,
      explanation: "$(-8) + (-5) = -13$ (Same signs: Add and keep sign)"
    },
    {
      question: "Calculate: $-4 - 6$",
      options: ["$-10$", "$-2$", "$+2$", "$+10$"],
      correct: 0,
      explanation: "$-4 - 6 = -4 + (-6) = -10$"
    },
    {
      question: "What is the result of $(-2) \\times (+7)$?",
      options: ["$-14$", "$-5$", "$+5$", "$+14$"],
      correct: 0,
      explanation: "$(-2) \\times (+7) = -14$ (Different signs = negative)"
    },
    {
      question: "Calculate: $(-15) \\div (+5)$",
      options: ["$-10$", "$-3$", "$+3$", "$+10$"],
      correct: 1,
      explanation: "$(-15) \\div (+5) = -3$ (Different signs = negative)"
    }
  ] satisfies QuizQuestion[]
};

const DirectedNumbersQuiz: React.FC = () => {
  return <MultipleChoiceInteractiveComponent {...directedNumbersQuizData} />;
};

export default DirectedNumbersQuiz;