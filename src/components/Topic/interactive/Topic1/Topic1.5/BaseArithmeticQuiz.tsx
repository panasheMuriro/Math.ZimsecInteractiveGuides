import MultiStepInteractiveComponent, { InteractiveToolData, McqOptions, PracticeProblem, Step } from '../../Templates/MultiStepInteractiveComponent'; // Adjust path


const baseArithmeticSteps: Step[] = [
  {
    id: "step1",
    title: "Step 1: Align Numbers",
    description: "Align the numbers vertically by their place values.",
    type: 'mcq'
  },
  {
    id: "step2",
    title: "Step 2: Start from the Right",
    description: "Begin the operation (addition/subtraction) from the rightmost column.",
    type: 'mcq'
  },
  {
    id: "column1",
    title: "Column 1 (Rightmost)",
    description: "Calculate the result for the rightmost column. What is the digit written down and the carry/borrow?",
    type: 'mcq'
  },
  {
    id: "column2",
    title: "Column 2",
    description: "Calculate the result for the next column, including any carry/borrow from the previous step.",
    type: 'mcq'
  },
  {
    id: "column3",
    title: "Column 3",
    description: "Continue the process for the next column.",
    type: 'mcq'
  },
  {
    id: "column4",
    title: "Column 4 (Leftmost)",
    description: "Calculate the result for the leftmost column, including any carry/borrow.",
    type: 'mcq'
  },
  {
    id: "final_carry_borrow",
    title: "Final Carry/Borrow",
    description: "Handle any final carry (for addition) or borrow (for subtraction).",
    type: 'mcq'
  },
  {
    id: "final_result",
    title: "Final Result",
    description: "Combine the digits from each column to form the final answer in the original base.",
    type: 'mcq'
  }
];

// --- Problem 1: Binary Addition (1101_2 + 1011_2) ---
const problemBinaryAdd: PracticeProblem = {
  expression: "1101_2 + 1011_2",
  solution: {
    "step1": "\\begin{array}{r} 1101 \\\\ + 1011 \\\\ \\hline \\end{array}",
    "step2": "\\text{Ready}",
    "column1": "\\text{Write down: } 0\\text{, Carry: } 1",
    "column2": "\\text{Write down: } 0\\text{, Carry: } 1",
    "column3": "\\text{Write down: } 0\\text{, Carry: } 1",
    "column4": "\\text{Write down: } 1\\text{, Carry: } 1",
    "final_carry_borrow": "\\text{Write down final carry: } 1",
    "final_result": "11000_2"
  },
  explanation: {
    "step1": "Numbers are aligned so that digits in the same place value (units, twos, fours, etc.) are in the same column.",
    "step2": "Starting from the units place (rightmost) ensures we handle carries/borrows correctly.",
    "column1": "$1 + 1 = 10_2$. Write down $0$, carry $1$.",
    "column2": "$0 + 1 + 1 \\text{ (carry)} = 10_2$. Write down $0$, carry $1$.",
    "column3": "$1 + 0 + 1 \\text{ (carry)} = 10_2$. Write down $0$, carry $1$.",
    "column4": "$1 + 1 + 1 \\text{ (carry)} = 11_2$. Write down $1$, carry $1$.",
    "final_carry_borrow": "There is a final carry of $1$ which is written down at the front.",
    "final_result": "Reading the written digits from left to right gives the result: $11000_2$."
  },
  hint: "In binary addition, $1+1=10_2$. Remember to carry the $1$. In subtraction, $0-1$ requires borrowing, turning $0$ into $10_2$."
};

const mcqOptionsBinaryAdd: McqOptions = {
  "step1": ["\\begin{array}{r} 1101 \\\\ + 1011 \\\\ \\hline \\end{array}"],
  "step2": ["\\text{Ready}"],
  "column1": [
    "\\text{Write down: } 1\\text{, Carry: } 0",
    "\\text{Write down: } 0\\text{, Carry: } 1",
    "\\text{Write down: } 1\\text{, Carry: } 1",
    "\\text{Write down: } 0\\text{, Carry: } 0"
  ],
  "column2": [
    "\\text{Write down: } 1\\text{, Carry: } 0",
    "\\text{Write down: } 0\\text{, Carry: } 1",
    "\\text{Write down: } 1\\text{, Carry: } 1",
    "\\text{Write down: } 0\\text{, Carry: } 0"
  ],
  "column3": [
    "\\text{Write down: } 1\\text{, Carry: } 0",
    "\\text{Write down: } 0\\text{, Carry: } 1",
    "\\text{Write down: } 1\\text{, Carry: } 1",
    "\\text{Write down: } 0\\text{, Carry: } 0"
  ],
  "column4": [
    "\\text{Write down: } 1\\text{, Carry: } 0",
    "\\text{Write down: } 0\\text{, Carry: } 1",
    "\\text{Write down: } 1\\text{, Carry: } 1",
    "\\text{Write down: } 0\\text{, Carry: } 0"
  ],
  "final_carry_borrow": [
    "\\text{No final carry/borrow}",
    "\\text{Write down final carry: } 1",
    "\\text{Write down final borrow: } 1",
    "\\text{Write down final carry: } 0"
  ],
  "final_result": ["10000_2", "11000_2", "10100_2", "11100_2"]
};

// --- Problem 2: Base 8 Addition (347_8 + 256_8) ---
const problemBase8Add: PracticeProblem = {
  expression: "347_8 + 256_8",
  solution: {
    "step1": "\\begin{array}{r} 347 \\\\ + 256 \\\\ \\hline \\end{array}",
    "step2": "\\text{Ready}",
    "column1": "\\text{Write down: } 5\\text{, Carry: } 1",
    "column2": "\\text{Write down: } 2\\text{, Carry: } 1",
    "column3": "\\text{Write down: } 6\\text{, Carry: } 0",
    "final_result": "625_8"
  },
  explanation: {
    "step1": "Numbers are aligned so that digits in the same place value (units, eights, sixty-fours) are in the same column.",
    "step2": "Start adding from the rightmost (units) column.",
    "column1": "$7 + 6 = 13_{10}$. $13 \\div 8 = 1$ remainder $5$. Write down $5$, carry $1$.",
    "column2": "$4 + 5 + 1 \\text{ (carry)} = 10_{10}$. $10 \\div 8 = 1$ remainder $2$. Write down $2$, carry $1$.",
    "column3": "$3 + 2 + 1 \\text{ (carry)} = 6_{10}$. $6 < 8$, so write down $6$, carry $0$.",
    "final_result": "Combining the digits gives the final result: $625_8$."
  },
  hint: "When adding in base 8, if the sum of a column is 8 or more, divide by 8. The quotient is carried, and the remainder is written down."
};

const mcqOptionsBase8Add: McqOptions = {
  "step1": ["\\begin{array}{r} 347 \\\\ + 256 \\\\ \\hline \\end{array}"],
  "step2": ["\\text{Ready}"],
  "column1": [
    "\\text{Write down: } 3\\text{, Carry: } 1",
    "\\text{Write down: } 5\\text{, Carry: } 1",
    "\\text{Write down: } 1\\text{, Carry: } 1",
    "\\text{Write down: } 5\\text{, Carry: } 0"
  ],
  "column2": [
    "\\text{Write down: } 0\\text{, Carry: } 1",
    "\\text{Write down: } 2\\text{, Carry: } 1",
    "\\text{Write down: } 2\\text{, Carry: } 0",
    "\\text{Write down: } 1\\text{, Carry: } 1"
  ],
  "column3": [
    "\\text{Write down: } 5\\text{, Carry: } 1",
    "\\text{Write down: } 6\\text{, Carry: } 0",
    "\\text{Write down: } 0\\text{, Carry: } 1",
    "\\text{Write down: } 6\\text{, Carry: } 1"
  ],
  "final_result": ["526_8", "625_8", "562_8", "652_8"]
};

// --- Problem 3: Binary Subtraction (1101_2 - 1011_2) ---
const problemBinarySub: PracticeProblem = {
  expression: "1101_2 - 1011_2",
  solution: {
    "step1": "\\begin{array}{r} 1101 \\\\ - 1011 \\\\ \\hline \\end{array}",
    "step2": "\\text{Ready}",
    "column1": "\\text{Result: } 0",
    "column2": "\\text{Borrowed, Result: } 1",
    "column3": "\\text{Borrowed, Result: } 1",
    "column4": "\\text{Result: } 0",
    "final_result": "0010_2 \\text{ or } 10_2"
  },
  explanation: {
    "step1": "Numbers are aligned so that digits in the same place value (units, twos, fours, etc.) are in the same column.",
    "step2": "Subtract starting from the units place.",
    "column1": "Column 1: $1 - 1 = 0$.",
    "column2": "Column 2: $0 - 1$ needs borrow. Borrow from column 3, making this $10_2 - 1 = 1$.",
    "column3": "Column 3: After lending 1 to column 2, it becomes $0$. Now $0 - 1$ needs borrow. Borrow from column 4, making this $10_2 - 1 = 1$.",
    "column4": "Column 4: After lending 1 to column 3, it becomes $0$. $0 - 1$ (from subtrahend) = 0 (assuming leading zeros or final result interpretation).",
    "final_result": "Reading the results of each column from left to right gives $0010_2$, which is typically written as $10_2$."
  },
  hint: "In binary subtraction, if you need to subtract $1$ from $0$, you must borrow $1$ from the next higher place value, turning the $0$ into $10_2$."
};

const mcqOptionsBinarySub: McqOptions = {
  "step1": ["\\begin{array}{r} 1101 \\\\ - 1011 \\\\ \\hline \\end{array}"],
  "step2": ["\\text{Ready}"],
  "column1": [
    "\\text{Result: } 0",
    "\\text{Result: } 1",
    "\\text{Borrow needed}",
    "\\text{Carry generated}"
  ],
  "column2": [
    "\\text{Result: } 0",
    "\\text{Borrowed, Result: } 1",
    "\\text{Result: } 1",
    "\\text{No operation}"
  ],
  "column3": [
    "\\text{Result: } 0",
    "\\text{Borrowed, Result: } 1",
    "\\text{Result: } 1",
    "\\text{No operation}"
  ],
  "column4": [
    "\\text{Result: } 0",
    "\\text{Result: } 1",
    "\\text{Borrowed, Result: } 1",
    "\\text{No operation}"
  ],
  "final_result": ["1100_2", "0010_2 \\text{ or } 10_2", "0100_2", "1000_2"]
};

// --- Package Data Sets ---
const baseArithmeticAllData: InteractiveToolData = {
  title: "Base Arithmetic Quiz",
  description: "Practice addition and subtraction in different number bases.",
  steps: baseArithmeticSteps,
  practiceProblems: [problemBinaryAdd, problemBase8Add, problemBinarySub],
  mcqOptionsPerProblem: [mcqOptionsBinaryAdd, mcqOptionsBase8Add, mcqOptionsBinarySub],
  theme: {
    primaryColor: 'purple'
  }
};

const BaseArithmeticQuiz: React.FC = () => {

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
    <MultiStepInteractiveComponent toolData={baseArithmeticAllData} />
    </div>
  );
};

export default BaseArithmeticQuiz;