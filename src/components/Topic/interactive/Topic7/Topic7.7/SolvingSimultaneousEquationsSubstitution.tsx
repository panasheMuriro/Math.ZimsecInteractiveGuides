/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderSimultaneousEquationsSubSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No systems solved yet.</p>;
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
const seSubConceptQuestion: MultiStepQuestion = {
  id: 'ses-concept',
  title: 'Understanding Simultaneous Equations & Substitution',
  steps: [
    {
      id: 'sesc-define',
      question: "What are simultaneous equations?",
      questionType: 'text',
      options: [
        "A single equation with one variable.",
        "Two or more equations with the same variables, solved together.",
        "A list of unrelated mathematical statements.",
        "An equation where the highest power of the variable is 2."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Simultaneous equations are a set of equations containing multiple variables. The solution is the set of values for the variables that satisfy all equations at the same time.",
      explanationType: 'text'
    },
    {
      id: 'sesc-goal',
      question: "What is the main goal when solving simultaneous equations?",
      questionType: 'text',
      options: [
        "To find the value of one variable.",
        "To find the sum of all variables.",
        "To find the values of all variables that make all equations true.",
        "To graph the equations."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The goal is to determine the specific values for each variable that satisfy every equation in the system simultaneously.",
      explanationType: 'text'
    },
    {
      id: 'sesc-substitution-goal',
      question: "What is the primary goal of the substitution method?",
      questionType: 'text',
      options: [
        "To guess the solution.",
        "To add the equations together.",
        "To solve one equation for one variable and substitute that expression into the other equation.",
        "To multiply the equations."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The substitution method involves solving one of the equations for one variable (e.g., get $x =$ ... or $y =$ ...) and then replacing that variable in the other equation with the expression found. This reduces the problem to a single equation with one unknown.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Analyzing the Example ---
const seSubExampleAnalysisQuestion: MultiStepQuestion = {
  id: 'ses-example-analysis',
  title: 'Analyzing the Substitution Example',
  steps: [
    {
      id: 'sesea-identify-equations',
      question: "Consider the example: $3x + 2y = 11$ and $x = y + 2$. Why is the substitution method a good choice here?",
      questionType: 'text',
      options: [
        "Because the coefficients are small.",
        "Because the second equation is already solved for $x$.",
        "Because the first equation is linear.",
        "Because both equations have the same coefficients."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The second equation, $x = y + 2$, is already in the form 'variable = expression'. This makes it very easy to substitute directly into the first equation.",
      explanationType: 'text'
    },
    {
      id: 'sesea-perform-substitution',
      question: "Substitute $x = y + 2$ into the first equation $3x + 2y = 11$. What is the resulting equation?",
      questionType: 'text',
      options: [
        "$3y + 2 + 2y = 11$",
        "$3(y + 2) + 2y = 11$",
        "$3x + 2(y + 2) = 11$",
        "$3y + 2y = 11$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Replace the $x$ in the first equation with the expression $(y + 2)$. This gives $3(y + 2) + 2y = 11$.",
      explanationType: 'text'
    },
    {
      id: 'sesea-expand-and-solve',
      question: "Expand and simplify $3(y + 2) + 2y = 11$. First, expand $3(y + 2)$.",
      questionType: 'text',
      options: [
        "$3y + 2$",
        "$3y + 6$",
        "$3y + 5$",
        "$y + 6$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Distribute the 3: $3 \\times y = 3y$ and $3 \\times 2 = 6$. So, $3(y + 2) = 3y + 6$.",
      explanationType: 'text'
    },
    {
      id: 'sesea-simplify-further',
      question: "Now simplify the whole equation: $3y + 6 + 2y = 11$. Combine like terms.",
      questionType: 'text',
      options: [
        "$5y + 6 = 11$",
        "$y + 6 = 11$",
        "$5y + 8 = 11$",
        "$6y + 6 = 11$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Combine the $y$ terms: $3y + 2y = 5y$. The constant term is $6$. So the simplified equation is $5y + 6 = 11$.",
      explanationType: 'text'
    },
    {
      id: 'sesea-solve-for-y',
      question: "Solve $5y + 6 = 11$ for $y$. What is the value of $y$?",
      questionType: 'text',
      options: [
        "$y = 1$",
        "$y = 5$",
        "$y = 2$",
        "$y = 10$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Subtract 6 from both sides: $5y = 11 - 6 = 5$. Divide both sides by 5: $y = 5 \\div 5 = 1$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 3: Finishing the Example ---
const seSubFinishExampleQuestion: MultiStepQuestion = {
  id: 'ses-finish-example',
  title: 'Finishing the Substitution Example',
  steps: [
    {
      id: 'sesfe-substitute-y',
      question: "We found $y = 1$. Now substitute this value back into the equation that was already solved for a variable. Which equation should we use?",
      questionType: 'text',
      options: [
        "Only the first equation: $3x + 2y = 11$",
        "Only the second equation: $x = y + 2$",
        "Either equation is fine, but the second is simpler.",
        "Both equations simultaneously."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "You can substitute $y = 1$ into either of the original equations. However, since the second equation is already solved for $x$, it's the easiest one to use.",
      explanationType: 'text'
    },
    {
      id: 'sesfe-find-x',
      question: "Substitute $y = 1$ into $x = y + 2$. What is the value of $x$?",
      questionType: 'text',
      options: [
        "$x = 3$",
        "$x = 1$",
        "$x = 2$",
        "$x = 0$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Replace $y$ with 1: $x = 1 + 2 = 3$.",
      explanationType: 'text'
    },
    {
      id: 'sesfe-check-solution',
      question: "The solution is $x = 3$, $y = 1$. Check this in the other original equation: $3x + 2y = 11$. Does it hold true?",
      questionType: 'text',
      options: [
        "Yes, $3(3) + 2(1) = 9 + 2 = 11$.",
        "No, $3(3) + 2(1) = 9 + 2 = 12$.",
        "Yes, $3(3) + 2(1) = 6 + 2 = 8$.",
        "No, $3(3) + 2(1) = 6 + 2 = 8$."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = 3$ and $y = 1$ into $3x + 2y$: $3(3) + 2(1) = 9 + 2 = 11$. This matches the right side of the equation, confirming our solution is correct.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Example Solution", "$x = 3, y = 1$");
      }
    }
  ]
};

// --- Multi-Step Question 4: Solving the Practice Example ---
const seSubPracticeExampleQuestion: MultiStepQuestion = {
  id: 'ses-practice-example',
  title: 'Solving the Practice Example',
  steps: [
    {
      id: 'sespe-get-substitution',
      question: "For the system $4x + y = 10$ and $2x - y = 2$, the hint says to solve the second equation for $y$. Solve $2x - y = 2$ for $y$.",
      questionType: 'text',
      options: [
        "$y = 2x - 2$",
        "$y = 2 - 2x$",
        "$y = 2x + 2$",
        "$y = -2x - 2$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Start with $2x - y = 2$. Subtract $2x$ from both sides: $-y = 2 - 2x$. Multiply both sides by $-1$: $y = -(2 - 2x) = -2 + 2x = 2x - 2$.",
      explanationType: 'text'
    },
    {
      id: 'sespe-perform-substitution',
      question: "Substitute $y = 2x - 2$ into the first equation $4x + y = 10$. What is the resulting equation?",
      questionType: 'text',
      options: [
        "$4x + 2x - 2 = 10$",
        "$4x + (2x - 2) = 10$",
        "$4(2x - 2) + y = 10$",
        "$4x + 2x + 2 = 10$"
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Replace the $y$ in the first equation with the expression $(2x - 2)$. This gives $4x + (2x - 2) = 10$. Option 0 is also mathematically correct but less explicit about the substitution.",
      explanationType: 'text'
    },
    {
      id: 'sespe-simplify',
      question: "Simplify $4x + (2x - 2) = 10$. Remove parentheses and combine like terms.",
      questionType: 'text',
      options: [
        "$6x - 2 = 10$",
        "$2x - 2 = 10$",
        "$6x + 2 = 10$",
        "$2x + 2 = 10$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Remove parentheses: $4x + 2x - 2 = 10$. Combine the $x$ terms: $4x + 2x = 6x$. The equation becomes $6x - 2 = 10$.",
      explanationType: 'text'
    },
    {
      id: 'sespe-solve-for-x',
      question: "Solve $6x - 2 = 10$ for $x$. What is the value of $x$?",
      questionType: 'text',
      options: [
        "$x = 2$",
        "$x = 6$",
        "$x = 12$",
        "$x = 8$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Add 2 to both sides: $6x = 10 + 2 = 12$. Divide both sides by 6: $x = 12 \\div 6 = 2$.",
      explanationType: 'text'
    },
    {
      id: 'sespe-find-y',
      question: "Now that $x = 2$, substitute this value into $y = 2x - 2$ to find $y$. What is $y$?",
      questionType: 'text',
      options: [
        "$y = 2$",
        "$y = -2$",
        "$y = 0$",
        "$y = 4$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = 2$ into $y = 2x - 2$: $y = 2(2) - 2 = 4 - 2 = 2$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 5: Finishing the Practice Example ---
const seSubFinishPracticeQuestion: MultiStepQuestion = {
  id: 'ses-finish-practice',
  title: 'Finishing the Practice Example',
  steps: [
    {
      id: 'sesfp-check-solution',
      question: "The solution is $x = 2$, $y = 2$. Check this in the first original equation: $4x + y = 10$. Does it hold true?",
      questionType: 'text',
      options: [
        "Yes, $4(2) + 2 = 8 + 2 = 10$.",
        "No, $4(2) + 2 = 8 + 2 = 11$.",
        "Yes, $4(2) + 2 = 6 + 2 = 8$.",
        "No, $4(2) + 2 = 6 + 2 = 8$."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = 2$ and $y = 2$ into $4x + y$: $4(2) + 2 = 8 + 2 = 10$. This matches the right side of the equation, confirming our solution is correct.",
      explanationType: 'text'
    },
    {
      id: 'sesfp-check-second-equation',
      question: "Also check the solution $x = 2$, $y = 2$ in the second original equation: $2x - y = 2$. Does it hold true?",
      questionType: 'text',
      options: [
        "Yes, $2(2) - 2 = 4 - 2 = 2$.",
        "No, $2(2) - 2 = 4 - 2 = 3$.",
        "Yes, $2(2) - 2 = 0$.",
        "No, $2(2) - 2 = 0$."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = 2$ and $y = 2$ into $2x - y$: $2(2) - 2 = 4 - 2 = 2$. This matches the right side of the equation, fully confirming our solution.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Practice Example Solution", "$x = 2, y = 2$");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const simultaneousEquationsSubQuestions: MultiStepQuestion[] = [
  seSubConceptQuestion,
  seSubExampleAnalysisQuestion,
  seSubFinishExampleQuestion,
  seSubPracticeExampleQuestion,
  seSubFinishPracticeQuestion
];

const SolvingSimultaneousEquationsSubstitution: React.FC = () => {
  const sesRules = [
    "Identify which equation is easiest to solve for one variable (look for a variable with a coefficient of 1 or -1).",
    "Solve that chosen equation for one variable (e.g., get $x =$ ... or $y =$ ...).",
    "Substitute the expression found on the right side of this new equation into the OTHER original equation, replacing the variable.",
    "Solve the resulting single equation for the remaining variable.",
    "Substitute the value found back into the equation from step 2 (the one that's already solved for a variable) to find the value of the other variable.",
    "Check your solution by substituting both values into both original equations.",
    "Write the final answer as an ordered pair $(x, y)$."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Solving Simultaneous Equations - Substitution Method"
        icon="🔄" // Arrows/Loop icon representing substitution
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={sesRules}
        rulesTitle="Substitution Method Rules:"
        questions={simultaneousEquationsSubQuestions}
        renderSharedValuesSummary={renderSimultaneousEquationsSubSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SolvingSimultaneousEquationsSubstitution