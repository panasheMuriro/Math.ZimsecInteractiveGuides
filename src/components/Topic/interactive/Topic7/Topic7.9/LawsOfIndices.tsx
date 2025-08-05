/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderIndicesLawsSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No expressions simplified yet.</p>;
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
const ilConceptQuestion: MultiStepQuestion = {
  id: 'il-concept',
  title: 'Understanding Indices and Their Laws',
  steps: [
    {
      id: 'ilc-define',
      question: "What does an index (or exponent) tell you?",
      questionType: 'text',
      options: [
        "The number of times to add the base to itself.",
        "The number of times to multiply the base by itself.",
        "The number of times to divide the base by itself.",
        "The square root of the base."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "An index (or power) indicates how many times the base number is used as a factor in a multiplication. For example, $2^3$ means $2 \\times 2 \\times 2$.",
      explanationType: 'text'
    },
    {
      id: 'ilc-multiplication-law',
      question: "Which law applies when multiplying terms with the same base, like $a^m \\times a^n$?",
      questionType: 'text',
      options: [
        "Add the exponents: $a^{m+n}$",
        "Multiply the exponents: $a^{m \\times n}$",
        "Subtract the exponents: $a^{m-n}$",
        "Divide the exponents: $a^{m/n}$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "When multiplying terms with the same base, you keep the base and add the exponents: $a^m \\times a^n = a^{m+n}$.",
      explanationType: 'text'
    },
    {
      id: 'ilc-division-law',
      question: "Which law applies when dividing terms with the same base, like $a^m \\div a^n$?",
      questionType: 'text',
      options: [
        "Add the exponents: $a^{m+n}$",
        "Multiply the exponents: $a^{m \\times n}$",
        "Subtract the exponents: $a^{m-n}$",
        "Take the power of an exponent: $(a^m)^n$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "When dividing terms with the same base, you keep the base and subtract the exponent of the denominator from the exponent of the numerator: $a^m \\div a^n = a^{m-n}$.",
      explanationType: 'text'
    },
    {
      id: 'ilc-power-law',
      question: "Which law applies when raising a power to another power, like $(a^m)^n$?",
      questionType: 'text',
      options: [
        "Add the exponents: $a^{m+n}$",
        "Multiply the exponents: $a^{m \\times n}$",
        "Subtract the exponents: $a^{m-n}$",
        "Divide the exponents: $a^{m/n}$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "When raising a power to another power, you keep the base and multiply the exponents: $(a^m)^n = a^{m \\times n}$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Analyzing the Multiplication Example ---
const ilMultiplicationExampleQuestion: MultiStepQuestion = {
  id: 'il-multiplication-example',
  title: 'Analyzing the Multiplication Law Example',
  steps: [
    {
      id: 'ilme-identify',
      question: "Consider the example: $3^2 \\times 3^4$. What is the base and what are the exponents?",
      questionType: 'text',
      options: [
        "Base: 3, Exponents: 2 and 4",
        "Base: 2, Exponents: 3 and 4",
        "Base: 4, Exponents: 3 and 2",
        "Base: 2 and 4, Exponent: 3"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "In the expression $3^2 \\times 3^4$, the number being raised to a power (the base) is 3. The exponents are the powers, which are 2 and 4.",
      explanationType: 'text'
    },
    {
      id: 'ilme-apply-law',
      question: "Which law should be applied to simplify $3^2 \\times 3^4$?",
      questionType: 'text',
      options: [
        "Division Law",
        "Power of a Power Law",
        "Multiplication Law",
        "Zero Exponent Law"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Since we are multiplying two terms with the same base (3), we use the Multiplication Law: $a^m \\times a^n = a^{m+n}$.",
      explanationType: 'text'
    },
    {
      id: 'ilme-add-exponents',
      question: "Apply the Multiplication Law: $3^2 \\times 3^4 = 3^{?}$",
      questionType: 'text',
      options: [
        "$3^{2 \\times 4} = 3^8$",
        "$3^{2 + 4} = 3^6$",
        "$3^{2 - 4} = 3^{-2}$",
        "$3^{4 - 2} = 3^2$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The Multiplication Law states we add the exponents: $3^2 \\times 3^4 = 3^{2+4} = 3^6$.",
      explanationType: 'text'
    },
    {
      id: 'ilme-simplify',
      question: "What is the value of $3^6$?",
      questionType: 'text',
      options: [
        "$9$",
        "$18$",
        "$81$",
        "$729$"
      ],
      optionType: 'text',
      correct: 3,
      explanation: "Calculate $3^6$: $3 \\times 3 \\times 3 \\times 3 \\times 3 \\times 3 = 9 \\times 9 \\times 9 = 81 \\times 9 = 729$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Example 1: $3^2 \\times 3^4$", "$3^6 = 729$");
      }
    }
  ]
};

// --- Multi-Step Question 3: Analyzing the Division and Negative Exponent Example ---
const ilDivisionNegExampleQuestion: MultiStepQuestion = {
  id: 'il-division-neg-example',
  title: 'Analyzing Division and Negative Exponents',
  steps: [
    {
      id: 'ildne-identify',
      question: "Consider the example: $\\frac{5^7}{5^3} \\times 5^{-2}$. What is the first operation to perform?",
      questionType: 'text',
      options: [
        "Multiply $5^7$ and $5^{-2}$",
        "Divide $5^7$ by $5^{-2}$",
        "Divide $5^7$ by $5^3$",
        "Add the exponents 7, 3, and -2"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Following the order of operations, we perform the division $\\frac{5^7}{5^3}$ first, before multiplying by $5^{-2}$.",
      explanationType: 'text'
    },
    {
      id: 'ildne-apply-division-law',
      question: "Apply the Division Law to $\\frac{5^7}{5^3}$. What is the result?",
      questionType: 'text',
      options: [
        "$5^{7 \\times 3} = 5^{21}$",
        "$5^{7 + 3} = 5^{10}$",
        "$5^{7 - 3} = 5^4$",
        "$5^{3 - 7} = 5^{-4}$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The Division Law states we subtract the exponent in the denominator from the exponent in the numerator: $\\frac{5^7}{5^3} = 5^{7-3} = 5^4$.",
      explanationType: 'text'
    },
    {
      id: 'ildne-multiply-next',
      question: "Now we have $5^4 \\times 5^{-2}$. Which law applies here?",
      questionType: 'text',
      options: [
        "Division Law",
        "Power of a Power Law",
        "Multiplication Law",
        "Negative Exponent Law"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "We are multiplying two terms with the same base (5), so we use the Multiplication Law: $a^m \\times a^n = a^{m+n}$.",
      explanationType: 'text'
    },
    {
      id: 'ildne-add-exponents',
      question: "Apply the Multiplication Law: $5^4 \\times 5^{-2} = 5^{?}$",
      questionType: 'text',
      options: [
        "$5^{4 \\times -2} = 5^{-8}$",
        "$5^{4 + (-2)} = 5^2$",
        "$5^{4 - (-2)} = 5^6$",
        "$5^{(-2) - 4} = 5^{-6}$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The Multiplication Law states we add the exponents: $5^4 \\times 5^{-2} = 5^{4 + (-2)} = 5^{4-2} = 5^2$.",
      explanationType: 'text'
    },
    {
      id: 'ildne-simplify',
      question: "What is the value of $5^2$?",
      questionType: 'text',
      options: [
        "$10$",
        "$7$",
        "$25$",
        "$125$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Calculate $5^2$: $5 \\times 5 = 25$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Example 2: $\\frac{5^7}{5^3} \\times 5^{-2}$", "$5^2 = 25$");
      }
    }
  ]
};

// --- Multi-Step Question 4: Analyzing the Power and Fractional Exponent Example ---
const ilPowerFracExampleQuestion: MultiStepQuestion = {
  id: 'il-power-frac-example',
  title: 'Analyzing Power and Fractional Exponents',
  steps: [
    {
      id: 'ilpfe-identify',
      question: "Consider the example: $(2^3)^{1/2}$. Which law should be applied first?",
      questionType: 'text',
      options: [
        "Multiplication Law",
        "Division Law",
        "Power of a Power Law",
        "Negative Exponent Law"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The expression has a power $(2^3)$ raised to another power $(1/2)$. This requires the Power of a Power Law: $(a^m)^n = a^{m \\times n}$.",
      explanationType: 'text'
    },
    {
      id: 'ilpfe-apply-power-law',
      question: "Apply the Power of a Power Law: $(2^3)^{1/2} = 2^{?}$",
      questionType: 'text',
      options: [
        "$2^{3 + 1/2} = 2^{3.5}$",
        "$2^{3 - 1/2} = 2^{2.5}$",
        "$2^{3 \\times 1/2} = 2^{3/2}$",
        "$2^{3 \\div 1/2} = 2^{6}$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The Power of a Power Law states we multiply the exponents: $(2^3)^{1/2} = 2^{3 \\times 1/2} = 2^{3/2}$.",
      explanationType: 'text'
    },
    {
      id: 'ilpfe-interpret-fractional',
      question: "What does the fractional exponent $2^{3/2}$ represent according to the laws?",
      questionType: 'text',
      options: [
        "$\\frac{2^3}{2} = \\frac{8}{2} = 4$",
        "$2^{1/2} \\times 2^3 = \\sqrt{2} \\times 8$",
        "$(2^{1/2})^3 = (\\sqrt{2})^3$",
        "$2^3 + 2^{1/2} = 8 + \\sqrt{2}$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "A fractional exponent $a^{m/n}$ means take the $n$-th root of $a$ and then raise it to the $m$-th power, or vice versa. So, $2^{3/2} = (2^{1/2})^3 = (\\sqrt{2})^3$.",
      explanationType: 'text'
    },
    {
      id: 'ilpfe-simplify',
      question: "Simplify $(\\sqrt{2})^3$. What is the result?",
      questionType: 'text',
      options: [
        "$2\\sqrt{2}$",
        "$3\\sqrt{2}$",
        "$2^{3/2}$",
        "$\\sqrt{8}$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "$(\\sqrt{2})^3 = \\sqrt{2} \\times \\sqrt{2} \\times \\sqrt{2}$. The first two $\\sqrt{2}$'s multiply to give 2. So, it's $2 \\times \\sqrt{2} = 2\\sqrt{2}$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Example 3: $(2^3)^{1/2}$", "$2^{3/2} = 2\\sqrt{2}$");
      }
    }
  ]
};

// --- Multi-Step Question 5: Solving the Practice Example ---
const ilPracticeExampleQuestion: MultiStepQuestion = {
  id: 'il-practice-example',
  title: 'Solving the Practice Example',
  steps: [
    {
      id: 'ilpe-identify',
      question: "Solve the practice example: $\\frac{4^5}{4^2} \\times 4^{-1}$. What is the first operation to perform?",
      questionType: 'text',
      options: [
        "Multiply $4^5$ and $4^{-1}$",
        "Divide $4^5$ by $4^{-1}$",
        "Divide $4^5$ by $4^2$",
        "Add the exponents 5, 2, and -1"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Following the order of operations, we perform the division $\\frac{4^5}{4^2}$ first, before multiplying by $4^{-1}$.",
      explanationType: 'text'
    },
    {
      id: 'ilpe-apply-division-law',
      question: "Apply the Division Law to $\\frac{4^5}{4^2}$. What is the result?",
      questionType: 'text',
      options: [
        "$4^{5 \\times 2} = 4^{10}$",
        "$4^{5 + 2} = 4^{7}$",
        "$4^{5 - 2} = 4^3$",
        "$4^{2 - 5} = 4^{-3}$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The Division Law states we subtract the exponent in the denominator from the exponent in the numerator: $\\frac{4^5}{4^2} = 4^{5-2} = 4^3$.",
      explanationType: 'text'
    },
    {
      id: 'ilpe-multiply-next',
      question: "Now we have $4^3 \\times 4^{-1}$. Which law applies here?",
      questionType: 'text',
      options: [
        "Division Law",
        "Power of a Power Law",
        "Multiplication Law",
        "Zero Exponent Law"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "We are multiplying two terms with the same base (4), so we use the Multiplication Law: $a^m \\times a^n = a^{m+n}$.",
      explanationType: 'text'
    },
    {
      id: 'ilpe-add-exponents',
      question: "Apply the Multiplication Law: $4^3 \\times 4^{-1} = 4^{?}$",
      questionType: 'text',
      options: [
        "$4^{3 \\times -1} = 4^{-3}$",
        "$4^{3 + (-1)} = 4^2$",
        "$4^{3 - (-1)} = 4^4$",
        "$4^{(-1) - 3} = 4^{-4}$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The Multiplication Law states we add the exponents: $4^3 \\times 4^{-1} = 4^{3 + (-1)} = 4^{3-1} = 4^2$.",
      explanationType: 'text'
    },
    {
      id: 'ilpe-simplify',
      question: "What is the value of $4^2$?",
      questionType: 'text',
      options: [
        "$8$",
        "$6$",
        "$16$",
        "$2$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Calculate $4^2$: $4 \\times 4 = 16$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Practice: $\\frac{4^5}{4^2} \\times 4^{-1}$", "$4^2 = 16$");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const indicesLawsQuestions: MultiStepQuestion[] = [
  ilConceptQuestion,
  ilMultiplicationExampleQuestion,
  ilDivisionNegExampleQuestion,
  ilPowerFracExampleQuestion,
  ilPracticeExampleQuestion
];

const LawsOfIndices: React.FC = () => {
  const ilRules = [
    "Multiplication Law: $a^m \\times a^n = a^{m+n}$ (Add exponents when multiplying like bases).",
    "Division Law: $a^m \\div a^n = a^{m-n}$ (Subtract exponents when dividing like bases).",
    "Power of a Power Law: $(a^m)^n = a^{m \\times n}$ (Multiply exponents when raising a power to a power).",
    "Zero Exponent Law: $a^0 = 1$ (Any non-zero base raised to the power of 0 equals 1).",
    "Negative Exponent Law: $a^{-n} = \\frac{1}{a^n}$ (A negative exponent means take the reciprocal and make the exponent positive).",
    "Fractional Exponent Law: $a^{1/n} = \\sqrt[n]{a}$ and $a^{m/n} = (\\sqrt[n]{a})^m$ (Fractional exponents represent roots).",
    "Identify the base and exponents in the expression.",
    "Apply the relevant law(s) based on the operations present (multiplication, division, powers).",
    "Simplify the expression by performing the operations on the exponents.",
    "If needed, calculate the final numerical value."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Laws of Indices"
        icon="📈" // Upwards chart icon, representing exponents/power growth
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={ilRules}
        rulesTitle="Indices Laws and Rules:"
        questions={indicesLawsQuestions}
        renderSharedValuesSummary={renderIndicesLawsSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default LawsOfIndices