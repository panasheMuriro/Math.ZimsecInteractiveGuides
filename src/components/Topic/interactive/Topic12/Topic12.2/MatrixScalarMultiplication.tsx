import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent";

const matrixScalarMultiplicationQuestions: QuizQuestion[] = [
  {
    id: 'matrix-scalar-1',
    question: "Calculate: $ 3 \\begin{pmatrix} 2 & -1 \\\\ 4 & 0 \\end{pmatrix} $",
    questionType: 'text', 
    options: [
      "$ \\begin{pmatrix} 6 & -3 \\\\ 12 & 0 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 5 & 2 \\\\ 7 & 3 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 6 & 3 \\\\ 12 & 0 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 9 & -3 \\\\ 12 & 0 \\end{pmatrix} $"
    ],
    optionType: 'text', 
    correct: 0, 
    explanation: "To multiply a matrix by a scalar, multiply **every element** of the matrix by that scalar (3):\n- $ 3 \\times 2 = 6 $\n- $ 3 \\times (-1) = -3 $\n- $ 3 \\times 4 = 12 $\n- $ 3 \\times 0 = 0 $\nResult: $ \\begin{pmatrix} 6 & -3 \\\\ 12 & 0 \\end{pmatrix} $",
    explanationType: 'text' 
  },
  {
    id: 'matrix-scalar-2',
    question: "What is the result of multiplying the matrix $ \\begin{pmatrix} -1 & 5 \\\\ 2 & -3 \\end{pmatrix} $ by the scalar $ -2 $? ",
    questionType: 'text',
    options: [
      "$ \\begin{pmatrix} -2 & -10 \\\\ -4 & 6 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 2 & -10 \\\\ -4 & 6 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 2 & 10 \\\\ 4 & -6 \\end{pmatrix} $",
      "$ \\begin{pmatrix} -3 & 3 \\\\ 0 & -5 \\end{pmatrix} $"
    ],
    optionType: 'text',
    correct: 1, 
    explanation: "Multiply each element by $ -2 $:\n- $ (-2) \\times (-1) = 2 $\n- $ (-2) \\times 5 = -10 $\n- $ (-2) \\times 2 = -4 $\n- $ (-2) \\times (-3) = 6 $\nResult: $ \\begin{pmatrix} 2 & -10 \\\\ -4 & 6 \\end{pmatrix} $",
    explanationType: 'text'
  },
  {
    id: 'matrix-scalar-3',
    question: "If $ A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $, what is $ 0 \\cdot A $? ",
    questionType: 'text', 
    options: [
      "$ \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 0 & 2 \\\\ 3 & 0 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 0 & 0 \\\\ 0 & 4 \\end{pmatrix} $"
    ],
    optionType: 'text',
    correct: 0, 
    explanation: "Multiplying any matrix by the scalar 0 results in a matrix where **every element** is $ 0 \\times $ (original element) $ = 0 $. This is the Zero Matrix of the same order.",
    explanationType: 'text'
  },
  {
    id: 'matrix-scalar-4',
    question: "Which of the following correctly describes scalar multiplication?",
    questionType: 'text',
    options: [
      "Adding the same number to every element of the matrix.",
      "Multiplying the matrix by another matrix of the same order.",
      "Multiplying every element of the matrix by the same number.",
      "Changing the sign of every element in the matrix."
    ],
    optionType: 'text',
    correct: 2, 
    explanation: "Scalar multiplication involves taking a single number (the scalar) and multiplying it by **each and every element** of the matrix individually.",
    explanationType: 'text'
  },
  {
    id: 'matrix-scalar-5',
    question: "Calculate: $ -1 \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} $",
    questionType: 'text',
    options: [
      "$ \\begin{pmatrix} -a & -b \\\\ -c & -d \\end{pmatrix} $",
      "$ \\begin{pmatrix} a-1 & b-1 \\\\ c-1 & d-1 \\end{pmatrix} $",
      "$ \\begin{pmatrix} -1 & -1 \\\\ -1 & -1 \\end{pmatrix} $",
      "$ \\begin{pmatrix} -a & -b \\\\ -c & -d \\end{pmatrix} $"
    ],
    optionType: 'text',
    correct: 0, 
    explanation: "Multiplying a matrix by $ -1 $ changes the sign of each element. This operation is also known as finding the **negative** of the matrix.\nResult: $ \\begin{pmatrix} -a & -b \\\\ -c & -d \\end{pmatrix} $\n(Note: Option 3 is also technically $ \\begin{pmatrix} -a & -b \\\\ -c & -d \\end{pmatrix} $, but option 0 is the standard and clearer representation.)",
    explanationType: 'text'
  }
];



const MatrixScalarMultiplication: React.FC = () => {
  
  const matrixScalarTheme = {
    from: 'from-blue-600', 
    to: 'to-indigo-700',
    button: 'bg-indigo-500',
    buttonHover: 'hover:bg-indigo-600',
  };

  
  const matrixScalarRules = [
    "**Scalar multiplication:** Multiply **every element** of the matrix by the scalar $ k $.",
    "Formula: $ k \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = \\begin{pmatrix} ka & kb \\\\ kc & kd \\end{pmatrix} $",
    "Multiplying by 0 results in a **Zero Matrix**.",
    "Multiplying by -1 gives the **negative** of the matrix."
  ];

  return (
    <div className="flex items-center justify-center">
      <MultipleChoiceInteractiveComponent
        title="Scalar Multiplication"
        icon="✖️" 
        theme={matrixScalarTheme}
        rules={matrixScalarRules}
        rulesTitle="Key Rules for Scalar Multiplication:"
        questions={matrixScalarMultiplicationQuestions}
        
      />
    </div>
  );
};

export default MatrixScalarMultiplication;
