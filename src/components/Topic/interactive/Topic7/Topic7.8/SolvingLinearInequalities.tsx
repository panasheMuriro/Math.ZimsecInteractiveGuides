/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderLinearInequalitiesSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No inequalities solved yet.</p>;
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
  title: 'Understanding Linear Inequalities',
  steps: [
    {
      id: 'lic-define',
      question: "What is the key difference between a linear equation and a linear inequality?",
      questionType: 'text',
      options: [
        "Linear inequalities have variables, linear equations don't.",
        "Linear inequalities use an equals sign (=), linear equations use inequality signs.",
        "Linear inequalities use inequality signs ($<, >, \\leq, \\geq$), linear equations use an equals sign (=).",
        "Linear inequalities are always harder to solve."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The main difference is the symbol used. Linear equations use an equals sign ($=$), while linear inequalities use inequality symbols like less than ($<$), greater than ($>$), less than or equal to ($\\leq$), or greater than or equal to ($\\geq$).",
      explanationType: 'text'
    },
    {
      id: 'lic-solution-meaning',
      question: "What does the solution to a linear inequality represent?",
      questionType: 'text',
      options: [
        "A single number that makes the inequality true.",
        "A range of values for the variable that make the inequality true.",
        "The point where two lines intersect.",
        "The maximum value the variable can be."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The solution to a linear inequality is not just one number, but a set or range of numbers that all satisfy the inequality. For example, $x < 3$ means any number less than 3 is a solution.",
      explanationType: 'text'
    },
    {
      id: 'lic-key-rule',
      question: "What is the most important rule to remember when solving linear inequalities?",
      questionType: 'text',
      options: [
        "Always subtract before adding.",
        "If you multiply or divide both sides by a negative number, you must flip the inequality sign.",
        "The variable must always be on the left side.",
        "You can never multiply or divide by zero."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "This is the crucial difference from solving equations. Multiplying or dividing both sides of an inequality by a negative number reverses the direction of the inequality sign. For example, if $-2x > 6$, dividing by $-2$ gives $x < -3$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Analyzing the Simple Example ---
const liSimpleExampleQuestion: MultiStepQuestion = {
  id: 'li-simple-example',
  title: 'Analyzing the Simple Inequality Example',
  steps: [
    {
      id: 'lise-identify-equation',
      question: "Consider the example: $3x + 5 < 14$. What is the first step to isolate the variable term ($3x$)?",
      questionType: 'text',
      options: [
        "Add 5 to both sides.",
        "Subtract 5 from both sides.",
        "Multiply both sides by 3.",
        "Divide both sides by 3."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "To isolate $3x$, we need to eliminate the constant term $+5$ on the left side. We do this by performing the opposite operation, which is subtraction. Subtract 5 from both sides.",
      explanationType: 'text'
    },
    {
      id: 'lise-perform-subtraction',
      question: "Subtract 5 from both sides of $3x + 5 < 14$. What is the resulting inequality?",
      questionType: 'text',
      options: [
        "$3x < 9$",
        "$3x < 19$",
        "$3x + 5 < 9$",
        "$3x < 14$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Left side: $3x + 5 - 5 = 3x$. Right side: $14 - 5 = 9$. The inequality becomes $3x < 9$.",
      explanationType: 'text'
    },
    {
      id: 'lise-isolate-x',
      question: "Now we have $3x < 9$. How do we isolate $x$?",
      questionType: 'text',
      options: [
        "Add 3 to both sides.",
        "Subtract 3 from both sides.",
        "Multiply both sides by 3.",
        "Divide both sides by 3."
      ],
      optionType: 'text',
      correct: 3,
      explanation: "To isolate $x$ from $3x$, we perform the opposite operation of multiplication, which is division. We divide both sides by the coefficient of $x$, which is 3.",
      explanationType: 'text'
    },
    {
      id: 'lise-perform-division',
      question: "Divide both sides of $3x < 9$ by 3. What is the resulting inequality?",
      questionType: 'text',
      options: [
        "$x < 3$",
        "$x < 6$",
        "$x < 27$",
        "$x < 12$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Left side: $3x \\div 3 = x$. Right side: $9 \\div 3 = 3$. The inequality becomes $x < 3$.",
      explanationType: 'text'
    },
    {
      id: 'lise-check-rule',
      question: "While solving $3x + 5 < 14$, did we multiply or divide by a negative number at any point?",
      questionType: 'text',
      options: [
        "Yes, we divided by -3.",
        "Yes, we multiplied by -1.",
        "No, we only added, subtracted, and divided by positive numbers.",
        "It doesn't matter, the sign never flips."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "We subtracted 5 and then divided by 3. Both operations involved positive numbers. Therefore, the inequality sign did not need to be flipped during this process.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 3: Checking the Simple Example ---
const liCheckSimpleExampleQuestion: MultiStepQuestion = {
  id: 'li-check-simple-example',
  title: 'Checking the Simple Inequality Solution',
  steps: [
    {
      id: 'licse-check-solution',
      question: "The solution to $3x + 5 < 14$ is $x < 3$. How do we check this solution?",
      questionType: 'text',
      options: [
        "Plug in $x = 3$ and see if it makes the inequality true.",
        "Plug in a value for $x$ that is less than 3 (e.g., $x = 2$) and see if it makes the inequality true.",
        "Plug in a value for $x$ that is greater than 3 (e.g., $x = 4$) and see if it makes the inequality true.",
        "Graph the inequality."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "To check the solution $x < 3$, we should pick a number that fits this condition (like $x = 2$) and substitute it back into the original inequality to verify it holds true.",
      explanationType: 'text'
    },
    {
      id: 'licse-perform-check',
      question: "Check the solution by substituting $x = 2$ into the original inequality $3x + 5 < 14$. What is the result?",
      questionType: 'text',
      options: [
        "$3(2) + 5 = 6 + 5 = 11 < 14$. This is TRUE, so the solution is correct.",
        "$3(2) + 5 = 6 + 5 = 11 < 14$. This is FALSE, so the solution is wrong.",
        "$3(2) + 5 = 6 + 5 = 11 > 14$. This is TRUE, so the solution is correct.",
        "$3(2) + 5 = 6 + 5 = 11 > 14$. This is FALSE, so the solution is wrong."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = 2$: $3(2) + 5 = 6 + 5 = 11$. Is $11 < 14$? Yes, it is. This confirms that $x = 2$ (which is less than 3) is indeed a solution, supporting our answer $x < 3$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Example 1: $3x + 5 < 14$", "$x < 3$");
      }
    }
  ]
};

// --- Multi-Step Question 4: Analyzing the Negative Coefficient Example ---
const liNegativeExampleQuestion: MultiStepQuestion = {
  id: 'li-negative-example',
  title: 'Analyzing the Negative Coefficient Example',
  steps: [
    {
      id: 'line-identify-equation',
      question: "Consider the example: $-2x + 4 > 10$. What is the first step to isolate the variable term ($-2x$)?",
      questionType: 'text',
      options: [
        "Add 4 to both sides.",
        "Subtract 4 from both sides.",
        "Multiply both sides by -2.",
        "Divide both sides by -2."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "To isolate $-2x$, we need to eliminate the constant term $+4$ on the left side. We do this by performing the opposite operation, which is subtraction. Subtract 4 from both sides.",
      explanationType: 'text'
    },
    {
      id: 'line-perform-subtraction',
      question: "Subtract 4 from both sides of $-2x + 4 > 10$. What is the resulting inequality?",
      questionType: 'text',
      options: [
        "$-2x > 6$",
        "$-2x > 14$",
        "$-2x + 4 > 6$",
        "$-2x > 10$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Left side: $-2x + 4 - 4 = -2x$. Right side: $10 - 4 = 6$. The inequality becomes $-2x > 6$.",
      explanationType: 'text'
    },
    {
      id: 'line-isolate-x',
      question: "Now we have $-2x > 6$. How do we isolate $x$?",
      questionType: 'text',
      options: [
        "Add -2 to both sides.",
        "Subtract -2 from both sides.",
        "Multiply both sides by -2.",
        "Divide both sides by -2."
      ],
      optionType: 'text',
      correct: 3,
      explanation: "To isolate $x$ from $-2x$, we divide both sides by the coefficient of $x$, which is -2.",
      explanationType: 'text'
    },
    {
      id: 'line-perform-division',
      question: "Divide both sides of $-2x > 6$ by -2. What happens to the inequality sign?",
      questionType: 'text',
      options: [
        "It stays the same: $x > -3$",
        "It flips: $x < -3$",
        "It becomes an equals sign: $x = -3$",
        "It disappears."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "This is the critical step! We are dividing both sides by a negative number (-2). According to the rule, we MUST flip the inequality sign. So, $>$ becomes $<$.",
      explanationType: 'text'
    },
    {
      id: 'line-final-result',
      question: "After flipping the sign, what is the final result of dividing $-2x > 6$ by -2?",
      questionType: 'text',
      options: [
        "$x < -3$",
        "$x > -3$",
        "$x < 3$",
        "$x > 3$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Dividing the left side: $-2x \\div -2 = x$. Dividing the right side: $6 \\div -2 = -3$. Because we flipped the sign, the inequality is $x < -3$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 5: Solving the Practice Example ---
const liPracticeExampleQuestion: MultiStepQuestion = {
  id: 'li-practice-example',
  title: 'Solving the Practice Example',
  steps: [
    {
      id: 'lipe-identify-equation',
      question: "Solve the practice example: $4x - 3 \\geq 9$. What is the first step to isolate the variable term ($4x$)?",
      questionType: 'text',
      options: [
        "Add 3 to both sides.",
        "Subtract 3 from both sides.",
        "Multiply both sides by 4.",
        "Divide both sides by 4."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "To isolate $4x$, we need to eliminate the constant term $-3$ on the left side. We do this by performing the opposite operation, which is addition. Add 3 to both sides.",
      explanationType: 'text'
    },
    {
      id: 'lipe-perform-addition',
      question: "Add 3 to both sides of $4x - 3 \\geq 9$. What is the resulting inequality?",
      questionType: 'text',
      options: [
        "$4x \\geq 6$",
        "$4x \\geq 12$",
        "$4x - 3 \\geq 12$",
        "$4x \\geq 9$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Left side: $4x - 3 + 3 = 4x$. Right side: $9 + 3 = 12$. The inequality becomes $4x \\geq 12$.",
      explanationType: 'text'
    },
    {
      id: 'lipe-isolate-x',
      question: "Now we have $4x \\geq 12$. How do we isolate $x$?",
      questionType: 'text',
      options: [
        "Add 4 to both sides.",
        "Subtract 4 from both sides.",
        "Multiply both sides by 4.",
        "Divide both sides by 4."
      ],
      optionType: 'text',
      correct: 3,
      explanation: "To isolate $x$ from $4x$, we perform the opposite operation of multiplication, which is division. We divide both sides by the coefficient of $x$, which is 4.",
      explanationType: 'text'
    },
    {
      id: 'lipe-perform-division',
      question: "Divide both sides of $4x \\geq 12$ by 4. What happens to the inequality sign?",
      questionType: 'text',
      options: [
        "It stays the same.",
        "It flips because we divided by a positive number.",
        "It flips because we divided by a negative number.",
        "It disappears."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "We are dividing by 4, which is a positive number. When dividing or multiplying by a positive number, the inequality sign does NOT change. It stays the same.",
      explanationType: 'text'
    },
    {
      id: 'lipe-final-result',
      question: "What is the final result of dividing $4x \\geq 12$ by 4?",
      questionType: 'text',
      options: [
        "$x \\geq 3$",
        "$x \\leq 3$",
        "$x \\geq 48$",
        "$x \\leq 48$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Dividing the left side: $4x \\div 4 = x$. Dividing the right side: $12 \\div 4 = 3$. The inequality sign stays the same. The final result is $x \\geq 3$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Practice: $4x - 3 \\geq 9$", "$x \\geq 3$");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const linearInequalitiesQuestions: MultiStepQuestion[] = [
  liConceptQuestion,
  liSimpleExampleQuestion,
  liCheckSimpleExampleQuestion,
  liNegativeExampleQuestion,
  liPracticeExampleQuestion
];

const SolvingLinearInequalities: React.FC = () => {
  const liRules = [
    "Simplify both sides of the inequality by combining like terms.",
    "Isolate the variable term on one side using addition or subtraction.",
    "Isolate the variable by dividing or multiplying by its coefficient.",
    "CRITICAL RULE: If you multiply or divide both sides by a NEGATIVE number, you MUST flip the inequality sign ($< \\rightarrow >$, $> \\rightarrow <$, $\\leq \\rightarrow \\geq$, $\\geq \\rightarrow \\leq$).",
    "Write the solution as an inequality (e.g., $x < a$, $x \\geq b$).",
    "Check your solution by substituting a value from the solution set back into the original inequality.",
    "Graph the solution on a number line: use an open circle for $<$ or $>$, and a closed circle for $\\leq$ or $\\geq$."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Solving Linear Inequalities"
        icon="⚖️" // Balance/Scales icon, can represent inequality
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={liRules}
        rulesTitle="Linear Inequality Solving Rules:"
        questions={linearInequalitiesQuestions}
        renderSharedValuesSummary={renderLinearInequalitiesSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SolvingLinearInequalities