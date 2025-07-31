import MultipleStepInteractiveComponent, { MultiStep, MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// Define the steps for Question 1: Identifying the Steps
const question1Steps: MultiStep[] = [
  {
    id: 'q1_identify_step',
    question: "Given f(x) = 2x - 5, what is the first step to find its inverse?",
    questionType: 'text',
    options: [
      "Swap x and y",
      "Solve for y",
      "Replace f(x) with y",
      "Replace y with f⁻¹(x)"
    ],
    optionType: 'text',
    correct: 2,
    explanation: "The first step is to replace the function notation f(x) with the variable y. So, f(x) = 2x - 5 becomes y = 2x - 5.",
    explanationType: 'text',
  },
  {
    id: 'q2_identify_step_2',
    question: "After replacing f(x) with y, we have y = 2x - 5. What is the next step?",
    questionType: 'text',
    options: [
      "Replace f(x) with y",
      "Swap x and y variables",
      "Solve for y",
      "Replace y with f⁻¹(x)"
    ],
    optionType: 'text',
    correct: 1,
    explanation: "The second step is to interchange the variables x and y. So, y = 2x - 5 becomes x = 2y - 5.",
    explanationType: 'text',
  },
  {
    id: 'q3_identify_step_3',
    question: "We now have x = 2y - 5. What is the next step to find the inverse function?",
    questionType: 'text',
    options: [
      "Swap x and y variables",
      "Replace f(x) with y",
      "Solve for y",
      "Replace y with f⁻¹(x)"
    ],
    optionType: 'text',
    correct: 2,
    explanation: "The third step is to solve the equation for y. Starting with x = 2y - 5, add 5 to both sides: x + 5 = 2y. Then divide both sides by 2: (x + 5)/2 = y.",
    explanationType: 'text',
  },
  {
    id: 'q4_identify_step_4',
    question: "We have solved for y and found that y = (x + 5)/2. What is the final step?",
    questionType: 'text',
    options: [
      "Replace f(x) with y",
      "Swap x and y variables",
      "Solve for y",
      "Replace y with f⁻¹(x)"
    ],
    optionType: 'text',
    correct: 3,
    explanation: "The final step is to replace y with the inverse function notation f⁻¹(x). Therefore, the inverse function is f⁻¹(x) = (x + 5)/2.",
    explanationType: 'text',
  },
];

// Define the steps for Question 2: Providing the Results
const question2Steps: MultiStep[] = [
  {
    id: 'q5_result_step_1',
    question: "f(x) = 2x - 5. After Step 1 (Replace f(x) with y), what is the equation?",
    questionType: 'text',
    options: [
      "y = 2x - 5",
      "x = 2y - 5",
      "y = (x + 5)/2",
      "f⁻¹(x) = (x + 5)/2"
    ],
    optionType: 'text',
    correct: 0,
    explanation: "Step 1 is to replace f(x) with y. So, f(x) = 2x - 5 becomes y = 2x - 5.",
    explanationType: 'text',
  },
  {
    id: 'q6_result_step_2',
    question: "y = 2x - 5. After Step 2 (Swap x and y), what is the equation?",
    questionType: 'text',
    options: [
      "y = 2x - 5",
      "x = 2y - 5",
      "y = (x + 5)/2",
      "f⁻¹(x) = (x + 5)/2"
    ],
    optionType: 'text',
    correct: 1,
    explanation: "Step 2 is to swap x and y. So, y = 2x - 5 becomes x = 2y - 5.",
    explanationType: 'text',
  },
  {
    id: 'q7_result_step_3',
    question: "x = 2y - 5. After Step 3 (Solve for y), what is the equation?",
    questionType: 'text',
    options: [
      "y = 2x - 5",
      "x = 2y - 5",
      "y = (x + 5)/2",
      "f⁻¹(x) = (x + 5)/2"
    ],
    optionType: 'text',
    correct: 2,
    explanation: "Step 3 is to solve for y. Starting with x = 2y - 5:\n1. Add 5: x + 5 = 2y\n2. Divide by 2: (x + 5)/2 = y\nSo, y = (x + 5)/2.",
    explanationType: 'text',
  },
  {
    id: 'q8_result_step_4',
    question: "y = (x + 5)/2. After Step 4 (Replace y with f⁻¹(x)), what is the equation?",
    questionType: 'text',
    options: [
      "y = 2x - 5",
      "x = 2y - 5",
      "y = (x + 5)/2",
      "f⁻¹(x) = (x + 5)/2"
    ],
    optionType: 'text',
    correct: 3,
    explanation: "Step 4 is to replace y with f⁻¹(x). So, y = (x + 5)/2 becomes f⁻¹(x) = (x + 5)/2.",
    explanationType: 'text',
  },
];

// Define the Questions (Groups of Steps)
const questions: MultiStepQuestion[] = [
  {
    id: 'identify_steps_question',
    title: '1. Identify the Steps',
    steps: question1Steps
  },
  {
    id: 'find_results_question',
    title: '2. Find the Results',
    steps: question2Steps
  }
];

const InverseFunctions: React.FC = () => { // Renamed component for clarity
  const rules = [
    "Step 1: Replace f(x) with y",
    "Step 2: Swap x and y variables",
    "Step 3: Solve for y",
    "Step 4: Replace y with f⁻¹(x)"
  ];

  const renderSharedValuesSummary = () => {
    return (
      <div>
        <p className="mb-2">You have reviewed the steps for finding the inverse of a function:</p>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Replace f(x) with y</li>
          <li>Swap x and y variables</li>
          <li>Solve for y</li>
          <li>Replace y with f⁻¹(x)</li>
        </ol>
        <p className="mt-3 font-medium">Example:</p>
        <p className="text-xs">f(x) = 2x - 5</p>
        <p className="text-xs">1. y = 2x - 5</p>
        <p className="text-xs">2. x = 2y - 5</p>
        <p className="text-xs">3. x + 5 = 2y → (x + 5)/2 = y</p>
        <p className="text-xs">4. f⁻¹(x) = (x + 5)/2</p>
      </div>
    );
  };

  return (
    <MultipleStepInteractiveComponent
      title="Inverse Function Steps Quiz"
      icon="🔄"
      theme={{
        from: "from-emerald-600",
        to: "to-teal-700",
        button: "bg-gradient-to-r from-amber-500 to-orange-500",
        buttonHover: "hover:from-amber-600 hover:to-orange-600"
      }}
      rules={rules}
      questions={questions} // Use the new 'questions' prop
      rulesTitle="Steps to Find Inverse:"
      renderSharedValuesSummary={renderSharedValuesSummary}
    />
  );
};

export default InverseFunctions; // Updated export name