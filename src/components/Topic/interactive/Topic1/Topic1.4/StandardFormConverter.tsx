// src/Interactives/StandardFormConverterQuiz.tsx

import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent";


const StandardFormConverter = () => {
  const questions: QuizQuestion[]= [
    {
      question: "Convert 4500 to standard form.",
      options: [
        "$4.5 \\times 10^3$",
        "$45 \\times 10^2$",
        "$0.45 \\times 10^4$",
        "$4.5 \\times 10^{-3}$"
      ],
      correct: 0,
      explanation: "4500 → place decimal after first digit: 4.5, moved 3 places → $4.5 \\times 10^3$",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "Convert 0.0072 to standard form.",
      options: [
        "$7.2 \\times 10^{-3}$",
        "$72 \\times 10^{-4}$",
        "$7.2 \\times 10^3$",
        "$0.72 \\times 10^{-2}$"
      ],
      correct: 0,
      explanation: "0.0072 → move decimal 3 places right to get 7.2 → $7.2 \\times 10^{-3}$",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "Which is correct standard form for 67?",
      options: [
        "$67 \\times 10^0$",
        "$6.7 \\times 10^1$",
        "$0.67 \\times 10^2$",
        "$6.7 \\times 10^{-1}$"
      ],
      correct: 1,
      explanation: "67 → coefficient must be between 1 and 10 → 6.7, moved 1 place → $6.7 \\times 10^1$",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "What is $3.8 \\times 10^5$ in ordinary form?",
      options: [
        "38000",
        "380000",
        "0.00038",
        "3800"
      ],
      correct: 1,
      explanation: "$3.8 \\times 10^5$ → move decimal 5 places right → 380,000",
      questionType: "text",
      optionType: "text"
    },
    {
      question: "Which number is NOT in correct standard form?",
      options: [
        "$9.1 \\times 10^7$",
        "$1.0 \\times 10^{-3}$",
        "$12.5 \\times 10^4$",
        "$5.7 \\times 10^0$"
      ],
      correct: 2,
      explanation: "Coefficient 12.5 is ≥ 10, which violates standard form rules. Should be $1.25 \\times 10^5$",
      questionType: "text",
      optionType: "text"
    }
  ];

  const rules = [
    "Coefficient $a$ must satisfy $1 \\leq a < 10$",
    "Positive exponent for numbers ≥ 10",
    "Negative exponent for numbers < 1",
    "When converting back, move decimal opposite to sign of exponent",
    "Count ALL places the decimal moves, not just zeros"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Standard Form Converter"
      icon="🔢"
      rules={rules}
      questions={questions}
    />
  );
};

export default StandardFormConverter;