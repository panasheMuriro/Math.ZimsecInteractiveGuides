/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderSimultaneousEquationsSummary = (sharedValues: { [key: string]: any }) => {
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
const seConceptQuestion: MultiStepQuestion = {
  id: 'se-concept',
  title: 'Understanding Simultaneous Equations & Elimination',
  steps: [
    {
      id: 'sec-define',
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
      id: 'sec-goal',
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
      id: 'sec-elimination-goal',
      question: "What is the primary goal of the elimination method?",
      questionType: 'text',
      options: [
        "To guess the solution.",
        "To add the equations together.",
        "To eliminate one variable by adding or subtracting the equations, leaving one equation with one variable.",
        "To multiply the equations."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "The elimination method aims to combine the equations in a way (usually by adding or subtracting) that removes one of the variables, simplifying the problem to a single equation with one unknown.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 2: Analyzing the Example ---
const seExampleAnalysisQuestion: MultiStepQuestion = {
  id: 'se-example-analysis',
  title: 'Analyzing the Elimination Example',
  steps: [
    {
      id: 'sea-identify-equations',
      question: "Consider the example: $2x + y = 8$ and $x - y = 1$. Which variable is easiest to eliminate first and why?",
      questionType: 'text',
      options: [
        "$x$, because the coefficients are 2 and 1.",
        "$y$, because the coefficients are 1 and -1, which are already opposites.",
        "$x$, because we can multiply the second equation by 2.",
        "Neither, we must multiply both equations first."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "Looking at the coefficients of $y$, we have $+1$ in the first equation and $-1$ in the second. These are opposites (additive inverses). Adding the equations will eliminate $y$ directly.",
      explanationType: 'text'
    },
    {
      id: 'sea-perform-addition',
      question: "Add the equations $(2x + y) + (x - y) = 8 + 1$. What is the resulting equation?",
      questionType: 'text',
      options: [
        "$3x = 9$",
        "$x + 2y = 9$",
        "$3x + 2y = 9$",
        "$x = 9$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Add the left sides: $(2x + x) + (y - y) = 3x + 0y = 3x$. Add the right sides: $8 + 1 = 9$. The resulting equation is $3x = 9$.",
      explanationType: 'text'
    },
    {
      id: 'sea-solve-for-x',
      question: "Solve the resulting equation $3x = 9$ for $x$.",
      questionType: 'text',
      options: [
        "$x = 3$",
        "$x = 6$",
        "$x = 12$",
        "$x = 27$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Divide both sides by 3: $x = 9 \\div 3 = 3$.",
      explanationType: 'text'
    },
    {
      id: 'sea-substitute',
      question: "Now that we know $x = 3$, which equation should we substitute this value into to find $y$?",
      questionType: 'text',
      options: [
        "Only the first equation: $2x + y = 8$",
        "Only the second equation: $x - y = 1$",
        "Either equation is fine.",
        "Both equations simultaneously."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "You can substitute $x = 3$ into either of the original equations. It's often easiest to choose the one that looks simpler. Let's use the second equation: $x - y = 1$.",
      explanationType: 'text'
    },
    {
      id: 'sea-find-y',
      question: "Substitute $x = 3$ into $x - y = 1$ and solve for $y$. What is $y$?",
      questionType: 'text',
      options: [
        "$y = 2$",
        "$y = -2$",
        "$y = 4$",
        "$y = -4$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute: $3 - y = 1$. Subtract 3 from both sides: $-y = 1 - 3 = -2$. Multiply both sides by -1: $y = 2$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 3: Solving the Practice Example ---
const sePracticeExampleQuestion: MultiStepQuestion = {
  id: 'se-practice-example',
  title: 'Solving the Practice Example',
  steps: [
    {
      id: 'spe-identify-equations',
      question: "Solve the system: $4x + y = 10$ and $2x - y = 2$. Which variable can be eliminated first?",
      questionType: 'text',
      options: [
        "$x$, because coefficients are 4 and 2.",
        "$y$, because coefficients are 1 and -1, which are opposites.",
        "$x$, because we need to multiply the second equation by 2.",
        "Neither, we must multiply both equations."
      ],
      optionType: 'text',
      correct: 1,
      explanation: "The coefficients of $y$ are $+1$ and $-1$. These are opposites, so adding the equations will eliminate $y$.",
      explanationType: 'text'
    },
    {
      id: 'spe-perform-addition',
      question: "Add the equations $(4x + y) + (2x - y) = 10 + 2$. What is the resulting equation?",
      questionType: 'text',
      options: [
        "$6x = 12$",
        "$2x + 2y = 12$",
        "$6x + 2y = 12$",
        "$2x = 12$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Add the left sides: $(4x + 2x) + (y - y) = 6x + 0y = 6x$. Add the right sides: $10 + 2 = 12$. The resulting equation is $6x = 12$.",
      explanationType: 'text'
    },
    {
      id: 'spe-solve-for-x',
      question: "Solve $6x = 12$ for $x$. What is the value of $x$?",
      questionType: 'text',
      options: [
        "$x = 2$",
        "$x = 6$",
        "$x = 18$",
        "$x = 8$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Divide both sides by 6: $x = 12 \\div 6 = 2$.",
      explanationType: 'text'
    },
    {
      id: 'spe-substitute',
      question: "Now that $x = 2$, substitute this value into one of the original equations to find $y$. Using $2x - y = 2$, what is $y$?",
      questionType: 'text',
      options: [
        "$y = 2$",
        "$y = -2$",
        "$y = 0$",
        "$y = 4$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = 2$ into $2x - y = 2$: $2(2) - y = 2$. This gives $4 - y = 2$. Subtract 4 from both sides: $-y = 2 - 4 = -2$. Multiply by -1: $y = 2$.",
      explanationType: 'text'
    },
    {
      id: 'spe-check-solution',
      question: "The solution is $x = 2$, $y = 2$. Check this in the other original equation: $4x + y = 10$. Does it hold true?",
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
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Practice Example Solution", "$x = 2, y = 2$");
      }
    }
  ]
};

// --- Multi-Step Question 4: When Coefficients Need Adjustment ---
const seAdjustCoefficientsQuestion: MultiStepQuestion = {
  id: 'se-adjust-coefficients',
  title: 'Elimination Requiring Multiplication',
  steps: [
    {
      id: 'sac-identify-equations',
      question: "Solve the system: $3x + 2y = 12$ and $x - y = 1$. Can we eliminate a variable by simply adding or subtracting the equations as they are?",
      questionType: 'text',
      options: [
        "Yes, we can eliminate $x$ because $3 + 1 = 4$.",
        "Yes, we can eliminate $y$ because $2 - 1 = 1$.",
        "No, the coefficients of $x$ (3 and 1) and $y$ (2 and -1) are not opposites or equal.",
        "Yes, we can eliminate $x$ by subtracting."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "To eliminate directly by addition/subtraction, the coefficients of a variable must be equal or opposites. For $x$: 3 and 1. For $y$: 2 and -1. Neither pair meets this condition, so we need to manipulate the equations first.",
      explanationType: 'text'
    },
    {
      id: 'sac-choose-variable',
      question: "Which variable is easier to make have equal/opposite coefficients in this case?",
      questionType: 'text',
      options: [
        "$x$, because making 3 and 1 equal is simpler (multiply second equation by 3).",
        "$y$, because making 2 and -1 equal is simpler (multiply second equation by 2).",
        "$x$, because we can multiply the first equation by 1.",
        "$y$, because we don't need to multiply anything."
      ],
      optionType: 'text',
      correct: 0,
      explanation: "It's generally easier to work with the variable that has the smaller coefficient. Making the $x$ coefficients match (3 and 1) requires multiplying the second equation by 3. Making $y$ coefficients match (2 and -1) requires multiplying the second equation by 2. Both are simple, but let's choose $x$.",
      explanationType: 'text'
    },
    {
      id: 'sac-multiply-equation',
      question: "Multiply the second equation $x - y = 1$ by 3. What is the new equation?",
      questionType: 'text',
      options: [
        "$3x - 3y = 3$",
        "$3x - y = 3$",
        "$x - 3y = 3$",
        "$3x - 3y = 1$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Multiply every term in the equation by 3: $3(x) - 3(y) = 3(1)$. This gives $3x - 3y = 3$.",
      explanationType: 'text'
    },
    {
      id: 'sac-eliminate-x',
      question: "Now we have $3x + 2y = 12$ and $3x - 3y = 3$. How should we combine them to eliminate $x$?",
      questionType: 'text',
      options: [
        "Add the equations.",
        "Subtract the first equation from the second.",
        "Subtract the second equation from the first.",
        "Multiply the equations."
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Both equations now have $+3x$. To eliminate $x$, we subtract one equation from the other. Subtracting the second ($3x - 3y = 3$) from the first ($3x + 2y = 12$) will cancel the $3x$ terms.",
      explanationType: 'text'
    },
    {
      id: 'sac-perform-subtraction',
      question: "Perform the subtraction: $(3x + 2y) - (3x - 3y) = 12 - 3$. What is the resulting equation?",
      questionType: 'text',
      options: [
        "$5y = 9$",
        "$-y = 9$",
        "$5y = 15$",
        "$-y = 15$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Subtract the left sides: $(3x - 3x) + (2y - (-3y)) = 0 + (2y + 3y) = 5y$. Subtract the right sides: $12 - 3 = 9$. The resulting equation is $5y = 9$.",
      explanationType: 'text'
    }
  ]
};

// --- Multi-Step Question 5: Finishing the Adjusted Problem ---
const seFinishAdjustedQuestion: MultiStepQuestion = {
  id: 'se-finish-adjusted',
  title: 'Finishing the Adjusted Problem',
  steps: [
    {
      id: 'sfa-solve-for-y',
      question: "We have $5y = 9$ from the previous step. Solve for $y$.",
      questionType: 'text',
      options: [
        "$y = 5$",
        "$y = 9$",
        "$y = \\frac{9}{5}$",
        "$y = \\frac{5}{9}$"
      ],
      optionType: 'text',
      correct: 2,
      explanation: "Divide both sides by 5: $y = \\frac{9}{5}$.",
      explanationType: 'text'
    },
    {
      id: 'sfa-substitute-y',
      question: "Now that $y = \\frac{9}{5}$, substitute this back into one of the original equations to find $x$. Use $x - y = 1$. What is the equation after substitution?",
      questionType: 'text',
      options: [
        "$x - \\frac{9}{5} = 1$",
        "$x - 9 = 5$",
        "$x - \\frac{5}{9} = 1$",
        "$\\frac{9}{5} - x = 1$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Replace $y$ with $\\frac{9}{5}$ in the equation $x - y = 1$. This gives $x - \\frac{9}{5} = 1$.",
      explanationType: 'text'
    },
    {
      id: 'sfa-solve-for-x',
      question: "Solve $x - \\frac{9}{5} = 1$ for $x$. What is $x$?",
      questionType: 'text',
      options: [
        "$x = \\frac{9}{5} + 1 = \\frac{9}{5} + \\frac{5}{5} = \\frac{14}{5}$",
        "$x = \\frac{9}{5} - 1 = \\frac{9}{5} - \\frac{5}{5} = \\frac{4}{5}$",
        "$x = 1 - \\frac{9}{5} = \\frac{5}{5} - \\frac{9}{5} = -\\frac{4}{5}$",
        "$x = \\frac{9}{5} \\times 1 = \\frac{9}{5}$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Add $\\frac{9}{5}$ to both sides: $x = 1 + \\frac{9}{5}$. Convert 1 to fifths: $1 = \\frac{5}{5}$. Add the fractions: $x = \\frac{5}{5} + \\frac{9}{5} = \\frac{14}{5}$.",
      explanationType: 'text'
    },
    {
      id: 'sfa-check-solution',
      question: "The solution is $x = \\frac{14}{5}$, $y = \\frac{9}{5}$. Check it in the other original equation: $3x + 2y = 12$. What is the left side?",
      questionType: 'text',
      options: [
        "$3(\\frac{14}{5}) + 2(\\frac{9}{5}) = \\frac{42}{5} + \\frac{18}{5} = \\frac{60}{5} = 12$",
        "$3(\\frac{14}{5}) + 2(\\frac{9}{5}) = \\frac{42}{5} + \\frac{18}{5} = \\frac{24}{5}$",
        "$3(\\frac{14}{5}) + 2(\\frac{9}{5}) = 12 + 9 = 21$",
        "$3(\\frac{14}{5}) + 2(\\frac{9}{5}) = \\frac{14}{5} + \\frac{9}{5} = \\frac{23}{5}$"
      ],
      optionType: 'text',
      correct: 0,
      explanation: "Substitute $x = \\frac{14}{5}$ and $y = \\frac{9}{5}$ into $3x + 2y$: $3(\\frac{14}{5}) + 2(\\frac{9}{5}) = \\frac{42}{5} + \\frac{18}{5} = \\frac{60}{5} = 12$. This matches the right side, confirming the solution.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        setSharedValue("Adjusted Example Solution", "$x = \\frac{14}{5}, y = \\frac{9}{5}$");
      }
    }
  ]
};

// --- Combine all questions into an array ---
const simultaneousEquationsQuestions: MultiStepQuestion[] = [
  seConceptQuestion,
  seExampleAnalysisQuestion,
  sePracticeExampleQuestion,
  seAdjustCoefficientsQuestion,
  seFinishAdjustedQuestion
];

const SolvingSimultaneousEquationsElimination: React.FC = () => {
  const seRules = [
    "Identify the variable you want to eliminate.",
    "If necessary, multiply one or both equations by constants to make the coefficients of that variable equal or opposites.",
    "Add the equations if the coefficients are opposites, or subtract them if they are equal, to eliminate the chosen variable.",
    "Solve the resulting single equation for the remaining variable.",
    "Substitute the value found back into one of the original equations to solve for the other variable.",
    "Check your solution by substituting both values into both original equations.",
    "Write the final answer as an ordered pair $(x, y)$."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Solving Simultaneous Equations - Elimination Method"
        icon="⚖️" // Balance/Scales icon representing solving equations
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={seRules}
        rulesTitle="Elimination Method Rules:"
        questions={simultaneousEquationsQuestions}
        renderSharedValuesSummary={renderSimultaneousEquationsSummary}
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default SolvingSimultaneousEquationsElimination