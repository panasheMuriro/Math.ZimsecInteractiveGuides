// src/data/matrixTypeQuestions.ts
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const matrixTypeQuestions: QuizQuestion[] = [
  {
    id: 'matrix-type-1',
    question: "What type of matrix is this? $ \\begin{pmatrix} 5 & 0 & -2 & 7 \\end{pmatrix} $",
    questionType: 'text', // The question is primarily a matrix
    options: [
      "Column Matrix",
      "Square Matrix",
      "Row Matrix",
      "Identity Matrix"
    ],
    optionType: 'text',
    correct: 2, // Index of "Row Matrix"
    explanation: "This matrix has only one row. A matrix with a single row is defined as a Row Matrix.",
    explanationType: 'text'
  },
  {
    id: 'matrix-type-2',
    question: "Identify the type of the following matrix: $ \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} $",
    questionType: 'text',
    options: [
      "Zero Matrix",
      "Identity Matrix",
      "Column Matrix",
      "Row Matrix"
    ],
    optionType: 'text',
    correct: 1, // Index of "Identity Matrix"
    explanation: "This is a square matrix (3x3) where all the diagonal elements are 1 and all off-diagonal elements are 0. This defines an Identity Matrix.",
    explanationType: 'text'
  },
  {
    id: 'matrix-type-3',
    question: "Which of the following best describes a Square Matrix?",
    questionType: 'text',
    options: [
      "A matrix with only one row.",
      "A matrix with only one column.",
      "A matrix where the number of rows equals the number of columns.",
      "A matrix where all elements are zero."
    ],
    optionType: 'text',
    correct: 2, // Index of the correct description
    explanation: "A Square Matrix is characterized by having the same number of rows ($m$) and columns ($n$), giving it an order of $ n \\times n $.",
    explanationType: 'text'
  },
  {
    id: 'matrix-type-4',
    question: "What is the order of the matrix $ \\begin{pmatrix} 4 \\\\ -1 \\\\ 0 \\\\ 9 \\end{pmatrix} $ and what type is it?",
    questionType: 'text',
    options: [
      "$ 1 \\times 4 $; Row Matrix",
      "$ 4 \\times 1 $; Column Matrix",
      "$ 2 \\times 2 $; Square Matrix",
      "$ 4 \\times 1 $; Row Matrix"
    ],
    optionType: 'text',
    correct: 1, // Index of "$ 4 \\times 1 $; Column Matrix"
    explanation: "Counting the rows, there are 4. Counting the columns, there is 1. So the order is $ 4 \\times 1 $. A matrix with only one column is a Column Matrix.",
    explanationType: 'text'
  },
  {
    id: 'matrix-type-5',
    question: "Which matrix type is essential for representing the absence of data or as a starting point in matrix operations?",
    questionType: 'text',
    options: [
      "Identity Matrix",
      "Square Matrix",
      "Row Matrix",
      "Zero Matrix"
    ],
    optionType: 'text',
    correct: 3, // Index of "Zero Matrix"
    explanation: "The Zero Matrix, where every element is 0, is often used to initialize matrices or represent null transformations. It acts as the additive identity in matrix addition.",
    explanationType: 'text'
  }
];


const MatrixTypes: React.FC = () => {
  const matrixTypesTheme = {
    from: 'from-teal-600',
    to: 'to-cyan-700',
    button: 'bg-cyan-500',
    buttonHover: 'hover:bg-cyan-600',
  };

  // Define the rules/key points for Types of Matrices
  const matrixTypesRules = [
    "A **Row Matrix** has order $ 1 \\times n $.",
    "A **Column Matrix** has order $ m \\times 1 $.",
    "A **Square Matrix** has an equal number of rows and columns ($ n \\times n $).",
    "A **Zero Matrix** contains only 0s.",
    "An **Identity Matrix** is a square matrix with 1s on the diagonal and 0s elsewhere."
  ];

  return (
    <div className="flex items-center justify-center">
      <MultipleChoiceInteractiveComponent
        title="Types of Matrices"
        icon="🧮" // Or another relevant emoji/icon
        theme={matrixTypesTheme}
        rules={matrixTypesRules}
        rulesTitle="Matrix Type Definitions:"
        questions={matrixTypeQuestions}
        // onReset={() => console.log('Matrix Types Quiz reset')} // Optional reset handler
      />
    </div>
  );
};

export default MatrixTypes;
