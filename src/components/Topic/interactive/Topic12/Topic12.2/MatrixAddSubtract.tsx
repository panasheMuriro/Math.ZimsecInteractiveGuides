import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

const matrixAddSubtractQuestions: QuizQuestion[] = [
  {
    id: 'matrix-add-sub-1',
    question: "Can the following matrices be added? $ \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $ and $ \\begin{pmatrix} 5 & 6 & 7 \\\\ 8 & 9 & 10 \\end{pmatrix} $",
    questionType: 'text', 
    options: [
      "Yes, because they are both matrices.",
      "Yes, because they have elements that can be added.",
      "No, because they have different numbers of elements.",
      "No, because they have different orders."
    ],
    optionType: 'text',
    correct: 3, 
    explanation: "Matrix addition is only possible when the matrices have the **same order** (same number of rows and columns). The first matrix is $ 2 \\times 2 $, and the second is $ 2 \\times 3 $. Their orders are different, so they cannot be added.",
    explanationType: 'text'
  },
  {
    id: 'matrix-add-sub-2',
    question: "Calculate: $ \\begin{pmatrix} 2 & -1 \\\\ 4 & 0 \\end{pmatrix} + \\begin{pmatrix} 3 & 5 \\\\ -2 & 1 \\end{pmatrix} $",
    questionType: 'text', 
    options: [
      "$ \\begin{pmatrix} 5 & 4 \\\\ 2 & 1 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 5 & 6 \\\\ 6 & 1 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 1 & -4 \\\\ 2 & -1 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 5 & 4 \\\\ 2 & -1 \\end{pmatrix} $"
    ],
    optionType: 'text', 
    correct: 0, 
    explanation: "To add matrices, add the corresponding elements:\n- Position (1,1): $ 2 + 3 = 5 $\n- Position (1,2): $ -1 + 5 = 4 $\n- Position (2,1): $ 4 + (-2) = 2 $\n- Position (2,2): $ 0 + 1 = 1 $\nResult: $ \\begin{pmatrix} 5 & 4 \\\\ 2 & 1 \\end{pmatrix} $",
    explanationType: 'text' 
  },
  {
    id: 'matrix-add-sub-3',
    question: "Calculate: $ \\begin{pmatrix} 7 & 2 \\\\ 1 & -3 \\end{pmatrix} - \\begin{pmatrix} 2 & 5 \\\\ 0 & -1 \\end{pmatrix} $",
    questionType: 'text',
    options: [
      "$ \\begin{pmatrix} 5 & -3 \\\\ 1 & -2 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 5 & -3 \\\\ 1 & -4 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 9 & 7 \\\\ 1 & -4 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 5 & 3 \\\\ 1 & -2 \\end{pmatrix} $"
    ],
    optionType: 'text',
    correct: 1, 
    explanation: "To subtract matrices, subtract the corresponding elements:\n- Position (1,1): $ 7 - 2 = 5 $\n- Position (1,2): $ 2 - 5 = -3 $\n- Position (2,1): $ 1 - 0 = 1 $\n- Position (2,2): $ -3 - (-1) = -3 + 1 = -2 $\nResult: $ \\begin{pmatrix} 5 & -3 \\\\ 1 & -2 \\end{pmatrix} $",
    explanationType: 'text'
  },
  {
    id: 'matrix-add-sub-4',
    question: "Given $ A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $ and $ B = \\begin{pmatrix} 0 & -1 \\\\ 2 & 1 \\end{pmatrix} $, what is $ A + B $? ",
    questionType: 'text', 
    options: [
      "$ \\begin{pmatrix} 1 & 1 \\\\ 5 & 5 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 1 & 3 \\\\ 1 & 3 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 1 & 1 \\\\ 5 & 3 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 1 & 3 \\\\ 5 & 5 \\end{pmatrix} $"
    ],
    optionType: 'text',
    correct: 0, 
    explanation: "Add corresponding elements of $A$ and $B$:\n- $ a_{11} + b_{11} = 1 + 0 = 1 $\n- $ a_{12} + b_{12} = 2 + (-1) = 1 $\n- $ a_{21} + b_{21} = 3 + 2 = 5 $\n- $ a_{22} + b_{22} = 4 + 1 = 5 $\nResult: $ \\begin{pmatrix} 1 & 1 \\\\ 5 & 5 \\end{pmatrix} $",
    explanationType: 'text'
  },
  {
    id: 'matrix-add-sub-5',
    question: "Which of the following is a necessary condition for subtracting two matrices?",
    questionType: 'text',
    options: [
      "They must both be square matrices.",
      "They must have the same number of rows, but columns can differ.",
      "They must have the same number of columns, but rows can differ.",
      "They must have the same order (same number of rows and columns)."
    ],
    optionType: 'text',
    correct: 3, 
    explanation: "For matrix subtraction (or addition) to be defined, the matrices must have the exact same dimensions. This means they must have the same number of rows **and** the same number of columns, i.e., the same order $ m \\times n $.",
    explanationType: 'text'
  }
];



const MatrixAddSubtract: React.FC = () => {
  
  const matrixAddSubTheme = {
    from: 'from-green-600', 
    to: 'to-emerald-700',
    button: 'bg-emerald-500',
    buttonHover: 'hover:bg-emerald-600',
  };

  
  const matrixAddSubRules = [
    "Matrices can only be added or subtracted if they have the **same order** ($ m \\times n $).",
    "**Addition:** $ (A + B)_{ij} = A_{ij} + B_{ij} $ (Add corresponding elements).",
    "**Subtraction:** $ (A - B)_{ij} = A_{ij} - B_{ij} $ (Subtract corresponding elements).",
    "The result is a new matrix of the same order."
  ];

  return (
    <div className="flex items-center justify-center">
      <MultipleChoiceInteractiveComponent
        title="Addition and Subtraction of Matrices"
        icon="➕➖" 
        theme={matrixAddSubTheme}
        rules={matrixAddSubRules}
        rulesTitle="Key Rules for Matrix Addition/Subtraction:"
        questions={matrixAddSubtractQuestions}
      />
    </div>
  );
};

export default MatrixAddSubtract;
