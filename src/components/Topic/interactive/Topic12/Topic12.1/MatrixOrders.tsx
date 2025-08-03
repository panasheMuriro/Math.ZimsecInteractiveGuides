import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent";
const matrixOrderQuestions: QuizQuestion[] = [
  {
    id: 'matrix-order-1',
    question: "What is the order of the matrix $ \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} $? ",
    questionType: 'text', // The question itself is text, even with math inside
    options: [
      "$2 \\times 2$",
      "$3 \\times 2$",
      "$2 \\times 3$",
      "$3 \\times 3$"
    ],
    optionType: 'text', // Options should be rendered as math
    correct: 2, // Index of the correct answer (0-based)
    explanation: "The matrix has 2 rows and 3 columns. Therefore, its order is $ m \\times n = 2 \\times 3 $.",
    explanationType: 'text' // Explanation is text with inline math
  },
  {
    id: 'matrix-order-2',
    question: "In the matrix $ A = \\begin{pmatrix} 7 & 8 & 9 & 10 \\\\ 11 & 12 & 13 & 14 \\\\ 15 & 16 & 17 & 18 \\end{pmatrix} $, what is the element $ a_{23} $? ",
    questionType: 'text',
    options: [
      "8",
      "12",
      "13",
      "17"
    ],
    optionType: 'text', // Options are plain numbers/expressions
    correct: 2,
    explanation: "The element $ a_{ij} $ refers to the element in the $i$-th row and $j$-th column. For $ a_{23} $, we look at row 2 and column 3. Row 2 is $ \\begin{pmatrix} 11 & 12 & 13 & 14 \\end{pmatrix} $. The 3rd element in this row is 13.",
    explanationType: 'text'
  },
  {
    id: 'matrix-order-3',
    question: "A matrix has order $ 4 \\times 1 $. What type of matrix is this?",
    questionType: 'text',
    options: [
      "Square Matrix",
      "Row Matrix",
      "Column Matrix",
      "Zero Matrix"
    ],
    optionType: 'text',
    correct: 2,
    explanation: "A matrix with only one column (and multiple rows) is called a Column Matrix. A $ 4 \\times 1 $ matrix has 4 rows and 1 column.",
    explanationType: 'text'
  },
  {
    id: 'matrix-order-4',
    question: "Why is the order of a matrix important?",
    questionType: 'text',
    options: [
      "It determines the color of the matrix elements.",
      "It specifies the number of elements in the matrix.",
      "It defines the matrix's determinant.",
      "It dictates which operations (like addition, multiplication) can be performed with other matrices."
    ],
    optionType: 'text',
    correct: 3,
    explanation: "The order (dimensions) of matrices is crucial for determining compatibility for operations. For example, two matrices can only be added if they have the same order. For multiplication $AB$, the number of columns in $A$ must equal the number of rows in $B$.",
    explanationType: 'text'
  }
];


const MatrixOrders: React.FC = () => {
  // Define the theme for the component
  const matrixTheme = {
    from: 'from-purple-600',
    to: 'to-indigo-700',
    button: 'bg-indigo-500',
    buttonHover: 'hover:bg-indigo-600',
  };

  // Define the rules/key points
  const matrixRules = [
    "The order of a matrix is $ \\text{rows} \\times \\text{columns} $ (m x n).",
    "Element $ a_{ij} $ is located at row $ i $, column $ j $.",
    "Matrix order determines compatibility for operations (e.g., addition, multiplication).",
    "Special types: Row matrix ($1 \\times n$), Column matrix ($m \\times 1$), Square matrix ($n \\times n$)."
  ];

  return (
    <div className="flex items-center justify-center">
      <MultipleChoiceInteractiveComponent
        title="Order of Matrices"
        icon="📐" // Or use an icon component if preferred
        theme={matrixTheme}
        rules={matrixRules}
        rulesTitle="Key Matrix Concepts:"
        questions={matrixOrderQuestions}
      />
    </div>
  );
};

export default MatrixOrders;