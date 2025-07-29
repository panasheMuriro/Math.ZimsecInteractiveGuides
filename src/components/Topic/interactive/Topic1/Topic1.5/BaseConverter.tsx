// import React from 'react';
// import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData, McqOptions, PracticeProblem, Step } from '../../Topic7/Templates/AlgebraMultiStepInteractiveTemplate';

// // ConversionQuizData.ts
// // import { InteractiveToolData, PracticeProblem, McqOptions, Step } from './AlgebraMultiStepInteractiveTemplate'; // Adjust path

// // Define the steps for the conversion process
// const conversionSteps: Step[] = [
//   {
//     id: "step1",
//     title: "Step 1: First Division",
//     description: "Perform the first division. What is the quotient and remainder of $ \\text{[DIVISION]} $? (e.g., Q=5, R=1)",
//     type: 'mcq'
//   },
//   {
//     id: "step2",
//     title: "Step 2: Next Division",
//     description: "Take the quotient from the previous step. Perform the next division. What is the new quotient and remainder?",
//     type: 'mcq'
//   },
//   {
//     id: "step3",
//     title: "Step 3: Continue Dividing",
//     description: "Continue the process. Divide the last quotient. What is the new quotient and remainder?",
//     type: 'mcq'
//   },
//   {
//     id: "step4",
//     title: "Step 4: Keep Going...",
//     description: "Divide again. What is the quotient and remainder?",
//     type: 'mcq'
//   },
//   {
//     id: "step5",
//     title: "Step 5: Almost There...",
//     description: "Divide the quotient from the previous step. What is the result?",
//     type: 'mcq'
//   },
//   {
//     id: "step6",
//     title: "Step 6: Final Non-Zero Division",
//     description: "Perform the final division where the quotient is not zero. What are the results?",
//     type: 'mcq'
//   },
//   {
//     id: "final_step",
//     title: "Step 7: Final Division & Read Answer",
//     description: "Divide the last quotient (which should now be 0 or lead to 0). Read the final remainder. Now, read the remainders from \\textbf{bottom to top} to form the number in the new base.",
//     type: 'mcq'
//   }
//   // Note: The template handles dynamic descriptions. We'll need to replace placeholders like [DIVISION]
//   // in the practice problem data or modify the template slightly to inject step-specific data.
//   // For simplicity here, we'll use generic descriptions and rely on the problem expression and options.
// ];

// // --- Data for 78_10 to 2 ---
// const problem78to2: PracticeProblem = {
//   expression: "78_{10} \\rightarrow \\text{Base } 2", // The problem shown
//   solution: {
//     "step1": "Q=39, R=0", // Solution for step 1
//     "step2": "Q=19, R=1", // Solution for step 2
//     // ... solutions for other steps ...
//     "step3": "Q=9, R=1",
//     "step4": "Q=4, R=1",
//     "step5": "Q=2, R=0",
//     "step6": "Q=1, R=0",
//     "final_step": "Q=0, R=1 \\text{. Read remainders: } 1001110_2" // Final step includes reading answer
//   },
//   explanation: {
//     "step1": "$78 \\div 2 = 39 \\text{ with a remainder of } 0.$",
//     "step2": "39 \\div 2 = 19 \\text{ with a remainder of } 1.",
//     // ... explanations for other steps ...
//     "step3": "19 \\div 2 = 9 \\text{ with a remainder of } 1.",
//     "step4": "9 \\div 2 = 4 \\text{ with a remainder of } 1.",
//     "step5": "4 \\div 2 = 2 \\text{ with a remainder of } 0.",
//     "step6": "2 \\div 2 = 1 \\text{ with a remainder of } 0.",
//     "final_step": "1 \\div 2 = 0 \\text{ with a remainder of } 1. \\text{ Reading remainders from last to first: } 1, 0, 0, 1, 1, 1, 0 \\rightarrow 1001110_2."
//   },
//   hint: "Remember: \\text{Dividend} \\div \\text{Divisor} = \\text{Quotient} \\text{ remainder } \\text{Remainder}. The remainder is always less than the divisor."
// };

// // MCQ Options for each step of the 78_10 to 2 problem
// const mcqOptions78to2: McqOptions[] = [
//   // Options for Problem 1 (index 0)
//   {
//     "step1": ["Q=38, R=2", "Q=39, R=0", "Q=40, R=-2", "Q=39, R=1"],
//     "step2": ["Q=18, R=3", "Q=19, R=1", "Q=20, R=-1", "Q=9, R=1"],
//     "step3": ["Q=8, R=3", "Q=9, R=1", "Q=10, R=-1", "Q=4, R=1"],
//     "step4": ["Q=3, R=2", "Q=4, R=1", "Q=5, R=0", "Q=2, R=0"],
//     "step5": ["Q=1, R=2", "Q=2, R=0", "Q=3, R=-2", "Q=1, R=0"],
//     "step6": ["Q=0, R=2", "Q=1, R=0", "Q=2, R=-2", "Q=0, R=1"],
//     "final_step": [
//       "Q=0, R=1 \\text{. Read remainders: } 0110001_2",
//       "Q=0, R=1 \\text{. Read remainders: } 1001110_2",
//       "Q=1, R=0 \\text{. Read remainders: } 1001110_2",
//       "Q=1, R=0 \\text{. Read remainders: } 0110001_2"
//     ]
//     // Note: Final step option text is a bit complex with KaTeX. The template's `renderOptionContent`
//     // should handle the `\\text{...}` parts correctly with `InlineMath`.
//   }
//   // If you had more problems, you'd add their solutions and options here in subsequent array elements.
// ];

// // Package it all together
// const baseConverterQuizData: InteractiveToolData = {
//   title: "Base Conversion Quiz",
//   description: "Convert numbers from base 10 to another base using repeated division.",
//   steps: conversionSteps,
//   practiceProblems: [problem78to2], // Add more problems here if needed
//   mcqOptionsPerProblem: mcqOptions78to2, // Add options for more problems here
//   theme: {
//     primaryColor: 'cyan' // Use the new 'cyan' theme defined in the template
//     // You can also specify backgroundColorFrom and backgroundColorTo if desired
//     // backgroundColorFrom: 'from-cyan-50',
//     // backgroundColorTo: 'to-blue-100'
//   }
// };

// // --- Example for a different conversion (152_10 to 8) ---
// // You can create similar structures for other conversions.

// const conversionStepsBase8: Step[] = [
//   // Define steps specific to base 8 if needed, or reuse the generic ones
//   // The descriptions can be generic enough to work for different bases.
//   ...conversionSteps // Reuse the same generic steps for now
// ];

// const problem152to8: PracticeProblem = {
//   expression: "152_{10} \\rightarrow \\text{Base } 8",
//   solution: {
//     "step1": "Q=19, R=0",
//     "step2": "Q=2, R=3",
//     "final_step": "Q=0, R=2 \\text{. Read remainders: } 230_8"
//     // Fill in solutions for intermediate steps if you define them
//   },
//   explanation: {
//     "step1": "152 \\div 8 = 19 \\text{ with a remainder of } 0.",
//     "step2": "19 \\div 8 = 2 \\text{ with a remainder of } 3.",
//     "final_step": "2 \\div 8 = 0 \\text{ with a remainder of } 2. \\text{ Reading remainders from last to first: } 2, 3, 0 \\rightarrow 230_8."
//      // Fill in explanations for intermediate steps if you define them
//   },
//   hint: "When dividing by 8, the remainder must be between 0 and 7."
// };

// const mcqOptions152to8: McqOptions[] = [
//   {
//     "step1": ["Q=18, R=8", "Q=19, R=0", "Q=20, R=-8", "Q=19, R=1"],
//     "step2": ["Q=1, R=11", "Q=2, R=3", "Q=3, R=-1", "Q=0, R=19"],
//     "final_step": [
//       "Q=0, R=2 \\text{. Read remainders: } 032_8",
//       "Q=0, R=2 \\text{. Read remainders: } 230_8",
//       "Q=2, R=0 \\text{. Read remainders: } 230_8",
//       "Q=2, R=0 \\text{. Read remainders: } 032_8"
//     ]
//   }
// ];

// export const baseConverterQuizDataBase8: InteractiveToolData = {
//   title: "Base Conversion Quiz (Base 8)",
//   description: "Convert numbers from base 10 to base 8 using repeated division.",
//   steps: conversionStepsBase8, // Or just conversionSteps
//   practiceProblems: [problem152to8],
//   mcqOptionsPerProblem: mcqOptions152to8,
//   theme: {
//     primaryColor: 'teal' // Use the new 'teal' theme
//   }
// };




// // BaseConverterQuizComponent.tsx

// const BaseConverterQuizComponent: React.FC = () => {
//   // The data (`baseConverterQuizData`) already includes the theme.
//   // You can also pass `baseConverterQuizDataBase8` for the Base 8 example.

//   return (
//     <div className="flex justify-center items-center min-h-screen p-4">
//       {/* Pass the structured data to the template */}
//       <AlgebraMultiStepInteractiveTemplate toolData={baseConverterQuizData} />
//       {/* To use the Base 8 quiz: */}
//       {/* <AlgebraMultiStepInteractiveTemplate toolData={baseConverterQuizDataBase8} /> */}
//     </div>
//   );
// };

// export default BaseConverterQuizComponent;


// ConversionQuizData.ts
// Adjust path

// Define the generic steps for the conversion process
const conversionSteps: Step[] = [
  {
    id: "step1",
    title: "Step 1: First Division",
    description: "Perform the first division. What is the quotient and remainder? (e.g., Q=5, R=1)",
    type: 'mcq'
  },
  {
    id: "step2",
    title: "Step 2: Next Division",
    description: "Take the quotient from the previous step. Perform the next division. What is the new quotient and remainder?",
    type: 'mcq'
  },
  {
    id: "step3",
    title: "Step 3: Continue Dividing",
    description: "Continue the process. Divide the last quotient. What is the new quotient and remainder?",
    type: 'mcq'
  },
  {
    id: "step4",
    title: "Step 4: Keep Going...",
    description: "Divide again. What is the quotient and remainder?",
    type: 'mcq'
  },
  {
    id: "step5",
    title: "Step 5: Almost There...",
    description: "Divide the quotient from the previous step. What is the result?",
    type: 'mcq'
  },
  {
    id: "step6",
    title: "Step 6: Final Non-Zero Division",
    description: "Perform the final division where the quotient is not zero. What are the results?",
    type: 'mcq'
  },
  {
    id: "final_step",
    title: "Step 7: Final Division & Read Answer",
    description: "Divide the last quotient. Read the final remainder. Now, read the remainders from \\textbf{bottom to top} to form the number in the new base.",
    type: 'mcq'
  }
];

// --- Data for 78_10 to 2 ---
const problem78to2: PracticeProblem = {
  expression: "78_{10} \\rightarrow \\text{Base } 2",
  solution: {
    "step1": "Q=39, R=0",
    "step2": "Q=19, R=1",
    "step3": "Q=9, R=1",
    "step4": "Q=4, R=1",
    "step5": "Q=2, R=0",
    "step6": "Q=1, R=0",
    "final_step": "Q=0, R=1 \\text{. Read remainders: } 1001110_2"
  },
  // --- CORRECTED EXPLANATIONS with $...$ delimiters ---
  explanation: {
    "step1": "$78 \\div 2 = 39$ with a remainder of $0$.",
    "step2": "$39 \\div 2 = 19$ with a remainder of $1$.",
    "step3": "$19 \\div 2 = 9$ with a remainder of $1$.",
    "step4": "$9 \\div 2 = 4$ with a remainder of $1$.",
    "step5": "$4 \\div 2 = 2$ with a remainder of $0$.",
    "step6": "$2 \\div 2 = 1$ with a remainder of $0$.",
    "final_step": "$1 \\div 2 = 0$ with a remainder of $1$. Reading remainders from last to first: $1, 0, 0, 1, 1, 1, 0 \\rightarrow 1001110_2$."
  },
  hint: "Remember: Dividend $\\div$ Divisor $=$ Quotient remainder Remainder. The remainder is always less than the divisor ($0$ or $1$ for base 2)."
};

// MCQ Options for 78_10 to 2
const mcqOptions78to2: McqOptions = {
  "step1": ["Q=38, R=2", "Q=39, R=0", "Q=40, R=-2", "Q=39, R=1"],
  "step2": ["Q=18, R=3", "Q=19, R=1", "Q=20, R=-1", "Q=9, R=1"],
  "step3": ["Q=8, R=3", "Q=9, R=1", "Q=10, R=-1", "Q=4, R=1"],
  "step4": ["Q=3, R=2", "Q=4, R=1", "Q=5, R=0", "Q=2, R=0"],
  "step5": ["Q=1, R=2", "Q=2, R=0", "Q=3, R=-2", "Q=1, R=0"],
  "step6": ["Q=0, R=2", "Q=1, R=0", "Q=2, R=-2", "Q=0, R=1"],
  "final_step": [
    "Q=0, R=1 \\text{. Read remainders: } 0110001_2",
    "Q=0, R=1 \\text{. Read remainders: } 1001110_2",
    "Q=1, R=0 \\text{. Read remainders: } 1001110_2",
    "Q=1, R=0 \\text{. Read remainders: } 0110001_2"
  ]
};

// --- Data for 152_10 to 8 ---
const problem152to8: PracticeProblem = {
  expression: "152_{10} \\rightarrow \\text{Base } 8",
  solution: {
    "step1": "Q=19, R=0",
    "step2": "Q=2, R=3",
    "step3": "Q=0, R=2", // Added missing step
    "final_step": "Q=0, R=2 \\text{. Read remainders: } 230_8"
    // Filled in solutions for intermediate steps
  },
  // --- CORRECTED EXPLANATIONS ---
  explanation: {
    "step1": "$152 \\div 8 = 19$ with a remainder of $0$.",
    "step2": "$19 \\div 8 = 2$ with a remainder of $3$.",
    "step3": "$2 \\div 8 = 0$ with a remainder of $2$.", // Added explanation
    "final_step": "$0 \\div 8 = 0$ with a remainder of $0$. Reading remainders from last to first: $2, 3, 0 \\rightarrow 230_8$."
     // Filled in explanations for intermediate steps
  },
  hint: "When dividing by $8$, the remainder must be between $0$ and $7$."
};

// MCQ Options for 152_10 to 8
const mcqOptions152to8: McqOptions = {
  "step1": ["Q=18, R=8", "Q=19, R=0", "Q=20, R=-8", "Q=19, R=1"],
  "step2": ["Q=1, R=11", "Q=2, R=3", "Q=3, R=-1", "Q=0, R=19"],
  "step3": ["Q=1, R=2", "Q=0, R=2", "Q=2, R=0", "Q=0, R=8"], // Added options for step 3
  "final_step": [
    "Q=0, R=2 \\text{. Read remainders: } 032_8",
    "Q=0, R=2 \\text{. Read remainders: } 230_8",
    "Q=2, R=0 \\text{. Read remainders: } 230_8",
    "Q=2, R=0 \\text{. Read remainders: } 032_8"
  ]
};

// --- Data for 255_10 to 16 ---
const problem255to16: PracticeProblem = {
  expression: "255_{10} \\rightarrow \\text{Base } 16",
  solution: {
    "step1": "Q=15, R=15", // 15 is F
    "step2": "Q=0, R=15",  // 15 is F
    "final_step": "Q=0, R=15 \\text{. Read remainders: } FF_{16}"
    // Note: This conversion finishes quickly. We can reuse steps or adjust the template logic if needed.
    // For now, we'll assume steps 3-6 are implicitly correct or skipped.
  },
  // --- CORRECTED EXPLANATIONS ---
  explanation: {
    "step1": "$255 \\div 16 = 15$ with a remainder of $15$ (which is $F$ in hexadecimal).",
    "step2": "$15 \\div 16 = 0$ with a remainder of $15$ (which is $F$ in hexadecimal).",
    "final_step": "$0 \\div 16 = 0$ with a remainder of $0$. Reading remainders from last to first: $F, F \\rightarrow FF_{16}$."
  },
  hint: "In hexadecimal (base 16), remainders $10$ to $15$ are represented by letters $A$ to $F$. The remainder is always less than $16$."
};

// MCQ Options for 255_10 to 16
const mcqOptions255to16: McqOptions = {
  "step1": ["Q=16, R=-1", "Q=15, R=15", "Q=14, R=31", "Q=10, R=95"],
  "step2": ["Q=1, R=0", "Q=0, R=15", "Q=15, R=0", "Q=0, R=F"], // Include option with 'F'
  "final_step": [
    "Q=0, R=15 \\text{. Read remainders: } 0F_{16}",
    "Q=0, R=15 \\text{. Read remainders: } FF_{16}",
    "Q=15, R=0 \\text{. Read remainders: } FF_{16}",
    "Q=F, R=F \\text{. Read remainders: } FF_{16}" // Include option with 'F'
  ]
};

// Combine all problems into one quiz
const baseConverterQuizDataAll: InteractiveToolData = {
  title: "Base Conversion Quiz (Mixed Bases)",
  description: "Convert numbers from base 10 to different bases using repeated division.",
  steps: conversionSteps,
  practiceProblems: [problem78to2, problem152to8, problem255to16],
  mcqOptionsPerProblem: [mcqOptions78to2, mcqOptions152to8, mcqOptions255to16],
  theme: {
    primaryColor: 'indigo' // Use a different theme for the combined quiz
  }
};

// Export the data sets
// export { baseConverterQuizDataB2, baseConverterQuizDataB8, baseConverterQuizDataB16, baseConverterQuizDataAll };


// BaseConverterQuizComponent.tsx
import React from 'react';
 // Adjust path
// Import the data sets
import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData, McqOptions, PracticeProblem, Step } from '../../Topic7/Templates/AlgebraMultiStepInteractiveTemplate';

const BaseConverterQuizComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
       <AlgebraMultiStepInteractiveTemplate toolData={baseConverterQuizDataAll} />
    </div>
  );
};

export default BaseConverterQuizComponent;