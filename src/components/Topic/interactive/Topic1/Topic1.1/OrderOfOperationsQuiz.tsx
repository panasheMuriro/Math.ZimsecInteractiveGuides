

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

const orderOfOperationsQuizData: MultiStepQuestion = {
  id: "order-of-operations",
  title: "Order of Operations (BODMAS/PEMDAS)",
  steps: [
    {
      id: "step1-brackets",
      question: "What is the first operation you should perform in $3 + (2 \\times 5) - 1$?",
      questionType: 'text',
      options: [
        "Addition (+)",
        "Multiplication (×) inside brackets",
        "Subtraction (-)",
        "Addition (+) outside brackets"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "According to BODMAS/PEMDAS, **Brackets** are done first. Inside the brackets, we have $2 \\times 5$, so multiplication inside brackets is the first operation.",
      explanationType: 'text'
    },
    {
      id: "step2-orders",
      question: "In the expression $4 + 2^3 \\times 5$, which operation comes second?",
      questionType: 'text',
      options: [
        "Addition (+)",
        "Multiplication (×)",
        "Exponent (²)",
        "Subtraction (-)"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "After checking for brackets (there are none), we do **Orders** (exponents). So $2^3 = 8$ is calculated next.",
      explanationType: 'text'
    },
    {
      id: "step3-dm",
      question: "Evaluate: $15 \\div 3 \\times 2$",
      questionType: 'text',
      options: [
        "$15 \\div (3 \\times 2) = 15 \\div 6 = 2.5$",
        "$(15 \\div 3) \\times 2 = 5 \\times 2 = 10$",
        "$15 \\div 3 \\times 2 = 5 \\times 2 = 7$",
        "$15 \\div 3 \\times 2 = 15 \\div 6 = 2.5$"
      ],
      optionType: 'math', 
      correct: 1,
      explanation: "Division and Multiplication are done from **left to right**. First, $15 \\div 3 = 5$, then $5 \\times 2 = 10$.",
      explanationType: 'text'
    },
    {
      id: "step4-as",
      question: "What is the final step in evaluating $10 - 4 + 3$?",
      questionType: 'text',
      options: [
        "Addition (+)",
        "Subtraction (-)",
        "Either, they have equal priority",
        "Multiplication (×)"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Addition and Subtraction are done from **left to right**. We do $10 - 4 = 6$ first, then the final step is $6 + 3 = 9$ (Addition).",
      explanationType: 'text'
    },
    {
      id: "step5-complex1",
      question: "Simplify: $(5 + 3) \\times 2^2 - 6 \\div 3$",
      questionType: 'text',
      options: [
        "$8 \\times 4 - 2 = 32 - 2 = 30$",
        "$8 \\times 4 - 6 \\div 3 = 32 - 2 = 30$",
        "$(8) \\times (4) - (2) = 32 - 2 = 30$",
        "All of the above are correct steps"
      ],
      optionType: 'math', 
      correct: 3,
      explanation: "1. **Brackets**: $(5 + 3) = 8$ \n 2. **Orders**: $2^2 = 4$ \n 3. **Division/Multiplication (L→R)**: $8 \\times 4 = 32$ and $6 \\div 3 = 2$ \n 4. **Addition/Subtraction (L→R)**: $32 - 2 = 30$. All steps shown are correct.",
      explanationType: 'text'
    },
    {
      id: "step6-fraction",
      question: "Evaluate: $\\frac{2 + 4}{1 + 2} \\times 3$",
      questionType: 'text',
      options: [
        "$\\frac{6}{3} \\times 3 = 2 \\times 3 = 6$",
        "$2 + 4 \\div (1 + 2) \\times 3 = 2 + 4 \\div 3 \\times 3$",
        "$\\frac{2 + 4}{1 + 2} \\times 3 = \\frac{6}{3} \\times 3 = \\frac{18}{3} = 6$",
        "$\\frac{2 + 4}{1 + 2} \\times 3 = (2 + 4) \\div (1 + 2) \\times 3 = 1 \\times 3 = 3$"
      ],
      optionType: 'math', 
      correct: 0,
      explanation: "The fraction bar acts as a bracket. \n 1. **Numerator**: $2 + 4 = 6$ \n 2. **Denominator**: $1 + 2 = 3$ \n 3. **Division**: $\\frac{6}{3} = 2$ \n 4. **Multiplication**: $2 \\times 3 = 6$",
      explanationType: 'text'
    },
    {
      id: "step7-negative",
      question: "Calculate: $-2^2 + 3 \\times (-4)$",
      questionType: 'text',
      options: [
        "$(-2)^2 + (-12) = 4 - 12 = -8$",
        "$-(2^2) + (-12) = -4 + (-12) = -16$",
        "$-2^2 + 3 \\times (-4) = -4 + 12 = 8$",
        "$-2^2 + 3 \\times (-4) = 4 + (-12) = -8$"
      ],
      optionType: 'math', 
      correct: 1,
      explanation: "1. **Orders**: $-2^2$ means $-(2^2) = -4$ (the negative is not inside the parentheses for the power). \n 2. **Multiplication**: $3 \\times (-4) = -12$ \n 3. **Addition**: $-4 + (-12) = -16$",
      explanationType: 'text'
    },
    {
      id: "step8-word-problem",
      question: "A shop sells packs of pencils. Each pack contains 12 pencils. If they sell 5 packs and then receive 8 more individual pencils, how many pencils do they have? Expression: $12 \\times 5 + 8$",
      questionType: 'text',
      options: [
        "$12 \\times (5 + 8) = 12 \\times 13 = 156$",
        "$(12 \\times 5) + 8 = 60 + 8 = 68$",
        "$12 + 5 \\times 8 = 12 + 40 = 52$",
        "$12 \\times 5 + 8 = 60 + 8 = 68$ pencils"
      ],
      optionType: 'math', 
      correct: 3,
      explanation: "The expression is $12 \\times 5 + 8$. \n 1. **Multiplication**: $12 \\times 5 = 60$ (total pencils from packs) \n 2. **Addition**: $60 + 8 = 68$ (add the loose pencils). \n They have **68 pencils** in total. Both option 1 and 3 correctly describe the steps, but option 3 gives the final answer.",
      explanationType: 'text'
    }
  ]
};

const OrderOfOperationsQuiz = () => {
  return (
    <MultipleStepInteractiveComponent
      title="Order of Operations (BODMAS/PEMDAS)"
      icon="🔢" 
      theme={{
        from: "from-rose-500", 
        to: "to-pink-600",
        button: "bg-pink-500",
        buttonHover: "hover:bg-pink-600",
      }}
      rulesTitle="BODMAS/PEMDAS Rules:"
      rules={[
        "**B** - **Brackets** (Parentheses) - Do operations inside brackets first",
        "**O** - **Orders** (Exponents/Powers & Roots) - Calculate powers and roots",
        "**DM** - **Division and Multiplication** - From left to right",
        "**AS** - **Addition and Subtraction** - From left to right",
        "Fraction bars act like brackets (evaluate numerator & denominator separately first)",
        "Be careful with negative signs and exponents (e.g., $-2^2 = -(2^2) = -4$)"
      ]}
      questions={[orderOfOperationsQuizData]}
      renderSharedValuesSummary={() => null} 
    />
  );
};

export default OrderOfOperationsQuiz;