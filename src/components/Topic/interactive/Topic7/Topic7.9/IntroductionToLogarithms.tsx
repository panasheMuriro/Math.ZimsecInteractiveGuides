/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderLogarithmsIntroSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No logarithms evaluated yet.</p>;
  }
  return (
    <ul className="space-y-2">
      {entries.map(([key, value]) => (
        <li key={key} className="flex justify-between items-center">
          <span style={{ color: '#264653' }}>{key}:</span>
          <span className="font-mono" style={{ color: '#264653' }}>{value}</span>
        </li>
      ))}
    </ul>
  );
};

// --- Multi-Step Question 1: Concept Understanding ---
const liConceptQuestion: MultiStepQuestion = {
  id: 'li-concept',
  title: 'Understanding Logarithms',
  steps: [
    {
      id: 'lic-define',
      question: "In simple terms, what does a logarithm tell you?",
      questionType: 'text',
      options: [
        "The sum of two numbers.",
        "The difference between two numbers.",
        "The exponent to which a base must be raised to produce a given number.",
        "The square root of a number."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "A logarithm answers the question: 'To what power must the base be raised to get the number?' For example, $\\log_2(8) = 3$ because we need to raise 2 to the power of 3 to get 8 ($2^3 = 8$).",
      explanationType: 'text'
    },
    {
      id: 'lic-inverse',
      question: "Logarithms and exponents are related as what kind of operations?",
      questionType: 'text',
      options: [
        "Commutative",
        "Associative",
        "Inverse",
        "Distributive"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Logarithms and exponents are inverse operations. This means they 'undo' each other. If you apply an exponential function and then a logarithmic function (with the same base), you get back to your original input.",
      explanationType: 'text'
    },
    {
      id: 'lic-definition',
      question: "According to the definition, if $\\log_b(a) = c$, what exponential equation is true?",
      questionType: 'text',
      options: [
        "$a^c = b$",
        "$b^a = c$",
        "$c^b = a$",
        "$b^c = a$"
      ],
      optionType: 'text',
      correct: 3,
      explanation: "The fundamental definition of a logarithm is: $\\log_b(a) = c$ means $b^c = a$. The base $b$ raised to the power $c$ equals the number $a$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Analyzing the Basic Log Example ---
const liBasicExampleQuestion: MultiStepQuestion = {
  id: 'li-basic-example',
  title: 'Analyzing the Basic Logarithm Example',
  steps: [
    {
      id: 'libe-set-up',
      question: "Consider the example: Evaluate $\\log_3(9)$. How do we start?",
      questionType: 'text',
      options: [
        "Use a calculator immediately.",
        "Rewrite it as an exponential equation: $3^x = 9$.",
        "Add 3 and 9.",
        "Subtract 9 from 3."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The first step in evaluating a logarithm is often to rewrite it in its equivalent exponential form. Let $\\log_3(9) = x$. By definition, this means $3^x = 9$.",
      explanationType: 'text'
    },
    {
      id: 'libe-solve-exponent',
      question: "We have $3^x = 9$. How do we find the value of $x$?",
      questionType: 'text',
      options: [
        "Divide 9 by 3.",
        "Subtract 3 from 9.",
        "Express 9 as a power of 3.",
        "Guess a number."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "To solve $3^x = 9$, we need to express both sides using the same base if possible. Since $9$ is a power of $3$ ($9 = 3^2$), we can rewrite the equation as $3^x = 3^2$.",
      explanationType: 'text'
    },
    {
      id: 'libe-find-x',
      question: "We have $3^x = 3^2$. What must $x$ be?",
      questionType: 'text',
      options: [
        "$x = 3$",
        "$x = 2$",
        "$x = 1$",
        "$x = 6$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "If the bases are the same and the exponential expressions are equal, then the exponents must be equal. Therefore, $x = 2$.",
      explanationType: 'text'
    },
    {
      id: 'libe-conclude',
      question: "Since $x = 2$, what is the value of $\\log_3(9)$?",
      questionType: 'text',
      options: [
        "$1$",
        "$2$",
        "$3$",
        "$9$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "We defined $x$ as $\\log_3(9)$. Since we found $x = 2$, it follows that $\\log_3(9) = 2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Example 1: $\\log_3(9)$", "$2$");
      }
    }
  ]
};

// --- Multi-Step Question 3: Using Logarithm Properties (Product Rule) ---
const liProductRuleQuestion: MultiStepQuestion = {
  id: 'li-product-rule',
  title: 'Using the Product Rule for Logarithms',
  steps: [
    {
      id: 'lipr-identify',
      question: "Consider the example: Simplify $\\log_2(4) + \\log_2(8)$. Which logarithm property applies here?",
      questionType: 'text',
      options: [
        "Quotient Rule",
        "Power Rule",
        "Product Rule",
        "Change of Base Formula"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "We are adding two logarithms that have the same base (2). The Product Rule states that $\\log_b(m) + \\log_b(n) = \\log_b(mn)$.",
      explanationType: 'text'
    },
    {
      id: 'lipr-apply-rule',
      question: "Apply the Product Rule to $\\log_2(4) + \\log_2(8)$. What is the result?",
      questionType: 'text',
      options: [
        "$\\log_2(4 + 8) = \\log_2(12)$",
        "$\\log_2(4 \\times 8) = \\log_2(32)$",
        "$\\log_2(4 - 8) = \\log_2(-4)$",
        "$\\log_2(\\frac{4}{8}) = \\log_2(0.5)$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The Product Rule tells us to multiply the arguments (the numbers inside the logs): $\\log_2(4) + \\log_2(8) = \\log_2(4 \\times 8) = \\log_2(32)$.",
      explanationType: 'text'
    },
    {
      id: 'lipr-evaluate',
      question: "Now evaluate $\\log_2(32)$. Rewrite as an exponential: $2^x = 32$. What is $x$?",
      questionType: 'text',
      options: [
        "$3$",
        "$4$",
        "$5$",
        "$6$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "We need to find the exponent $x$ such that $2^x = 32$. Since $32 = 2^5$, we have $2^x = 2^5$, so $x = 5$. Therefore, $\\log_2(32) = 5$.",
      explanationType: 'text'
    },
    {
      id: 'lipr-check',
      question: "The example checks the answer by evaluating the logs separately. What is $\\log_2(4)$?",
      questionType: 'text',
      options: [
        "$1$",
        "$2$",
        "$4$",
        "$8$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Find the exponent $x$ such that $2^x = 4$. Since $2^2 = 4$, we have $\\log_2(4) = 2$.",
      explanationType: 'text'
    },
    {
      id: 'lipr-check-2',
      question: "What is $\\log_2(8)$?",
      questionType: 'text',
      options: [
        "$1$",
        "$2$",
        "$3$",
        "$4$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Find the exponent $x$ such that $2^x = 8$. Since $2^3 = 8$, we have $\\log_2(8) = 3$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 4: Using Logarithm Properties (Power Rule) ---
const liPowerRuleQuestion: MultiStepQuestion = {
  id: 'li-power-rule',
  title: 'Using the Power Rule for Logarithms',
  steps: [
    {
      id: 'lipor-identify',
      question: "Consider the example: Simplify $2 \\log_5(3)$. Which logarithm property applies here?",
      questionType: 'text',
      options: [
        "Quotient Rule",
        "Power Rule",
        "Product Rule",
        "Change of Base Formula"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "We have a coefficient (2) multiplying a logarithm. The Power Rule states that $n \\log_b(m) = \\log_b(m^n)$.",
      explanationType: 'text'
    },
    {
      id: 'lipor-apply-rule',
      question: "Apply the Power Rule to $2 \\log_5(3)$. What is the result?",
      questionType: 'text',
      options: [
        "$\\log_5(2 \\times 3) = \\log_5(6)$",
        "$\\log_5(3^2) = \\log_5(9)$",
        "$\\log_5(\\frac{3}{2})$",
        "$\\log_5(3 + 2) = \\log_5(5)$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The Power Rule tells us to take the coefficient (2) and make it the exponent of the argument (3): $2 \\log_5(3) = \\log_5(3^2) = \\log_5(9)$.",
      explanationType: 'text'
    },
    {
      id: 'lipor-simplify',
      question: "Can $\\log_5(9)$ be simplified further without a calculator?",
      questionType: 'text',
      options: [
        "Yes, because 9 is a power of 5.",
        "Yes, because 5 is a power of 9.",
        "No, because 9 is not an integer power of 5.",
        "No, because logarithms cannot be simplified."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "To simplify $\\log_5(9)$ further, we would need to express 9 as an integer power of 5 (like $5^1=5$, $5^2=25$, etc.). Since 9 is not a power of 5, it cannot be simplified to a basic integer using this method.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Example 3: $2\\log_5(3)$", "$\\log_5(9)$");
      }
    }
  ]
};

// --- Multi-Step Question 5: Solving the Practice Example ---
const liPracticeExampleQuestion: MultiStepQuestion = {
  id: 'li-practice-example',
  title: 'Solving the Practice Example',
  steps: [
    {
      id: 'lipe-set-up',
      question: "Evaluate the practice example: $\\log_4(16)$. How do we start?",
      questionType: 'text',
      options: [
        "Use a calculator immediately.",
        "Rewrite it as an exponential equation: $4^x = 16$.",
        "Add 4 and 16.",
        "Subtract 16 from 4."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The standard approach is to rewrite the logarithmic equation in its exponential form. Let $\\log_4(16) = x$. This means $4^x = 16$.",
      explanationType: 'text'
    },
    {
      id: 'lipe-solve-exponent',
      question: "We have $4^x = 16$. How do we find the value of $x$?",
      questionType: 'text',
      options: [
        "Divide 16 by 4.",
        "Subtract 4 from 16.",
        "Express 16 as a power of 4.",
        "Guess a number."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "To solve $4^x = 16$, we express both sides using the same base. Since $16$ is a power of $4$ ($16 = 4^2$), we can rewrite the equation as $4^x = 4^2$.",
      explanationType: 'text'
    },
    {
      id: 'lipe-find-x',
      question: "We have $4^x = 4^2$. What must $x$ be?",
      questionType: 'text',
      options: [
        "$x = 4$",
        "$x = 2$",
        "$x = 1$",
        "$x = 8$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "If the bases are the same and the exponential expressions are equal, then the exponents must be equal. Therefore, $x = 2$.",
      explanationType: 'text'
    },
    {
      id: 'lipe-conclude',
      question: "Since $x = 2$, what is the value of $\\log_4(16)$?",
      questionType: 'text',
      options: [
        "$1$",
        "$2$",
        "$4$",
        "$16$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "We defined $x$ as $\\log_4(16)$. Since we found $x = 2$, it follows that $\\log_4(16) = 2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Practice: $\\log_4(16)$", "$2$");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const logarithmsIntroQuestions: MultiStepQuestion[] = [
  liConceptQuestion,
  liBasicExampleQuestion,
  liProductRuleQuestion,
  liPowerRuleQuestion,
  liPracticeExampleQuestion
];

const IntroductionToLogarithms: React.FC = () => {
  const liRules = [
    "Definition: $\\log_b(a) = c$ means $b^c = a$. This is the fundamental relationship between logarithms and exponents.",
    "Product Rule: $\\log_b(mn) = \\log_b(m) + \\log_b(n)$. The log of a product is the sum of the logs.",
    "Quotient Rule: $\\log_b(\\frac{m}{n}) = \\log_b(m) - \\log_b(n)$. The log of a quotient is the difference of the logs.",
    "Power Rule: $\\log_b(m^n) = n \\log_b(m)$. The log of a power is the exponent times the log.",
    "Special Values: $\\log_b(1) = 0$ (because $b^0 = 1$) and $\\log_b(b) = 1$ (because $b^1 = b$).",
    "Change of Base Formula: $\\log_b(a) = \\frac{\\log_k(a)}{\\log_k(b)}$. Useful for calculating logs with different bases using a calculator.",
    "To evaluate a basic logarithm $\\log_b(a)$, rewrite it as the exponential equation $b^x = a$ and solve for $x$.",
    "Remember that the argument of a logarithm ($a$ in $\\log_b(a)$) must be positive, and the base ($b$) must be positive and not equal to 1."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Introduction to Logarithms"
        icon="📊" // Chart/Graph icon, often logarithmic scales are used in graphs
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={liRules}
        rulesTitle="Logarithm Rules and Concepts:"
        questions={logarithmsIntroQuestions}
        renderSharedValuesSummary={renderLogarithmsIntroSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default IntroductionToLogarithms