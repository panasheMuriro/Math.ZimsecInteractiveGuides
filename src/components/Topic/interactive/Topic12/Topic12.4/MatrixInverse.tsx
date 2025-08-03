/* eslint-disable @typescript-eslint/no-explicit-any */


import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

const matrixInverseQuestions: MultiStepQuestion[] = [
  {
    id: 'inverse_of_2x2_matrix_example_1',
    title: "Find the Inverse of Matrix A",
    steps: [
      {
        id: 'step1_determinant_1',
        question: "Calculate the determinant of matrix $ A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $. What is $ \\det(A) $? (Recall: $ \\det(A) = ad - bc $)",
        questionType: 'text',
        options: [
          "$ \\det(A) = (1)(4) - (2)(3) = 4 - 6 = -2 $",
          "$ \\det(A) = (1)(3) - (2)(4) = 3 - 8 = -5 $",
          "$ \\det(A) = (1)(2) + (3)(4) = 2 + 12 = 14 $",
          "$ \\det(A) = (1)(4) + (2)(3) = 4 + 6 = 10 $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The determinant of a $ 2 \\times 2 $ matrix $ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} $ is calculated as $ ad - bc $. For matrix A, $ a=1, b=2, c=3, d=4 $. So, $ \\det(A) = (1)(4) - (2)(3) = 4 - 6 = -2 $.",
        onCorrect: (_selectedOptionIndex, setSharedValue) => {
            setSharedValue('detA_1', -2);
        }
      },
      {
        id: 'step2_check_invertibility_1',
        question: "Based on the determinant calculated, does the inverse $ A^{-1} $ exist?",
        questionType: 'text',
        options: [
          "Yes, because $ \\det(A) \\neq 0 $",
          "No, because $ \\det(A) = 0 $",
          "Yes, because all elements of A are non-zero",
          "No, because A is not a square matrix"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "A matrix has an inverse if and only if its determinant is non-zero ($ \\det(A) \\neq 0 $). Since we found $ \\det(A) = -2 $, which is not zero, the inverse exists."
      },
      {
        id: 'step3_apply_formula_1',
        question: "Apply the inverse formula: $ A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} $. Given $ A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $ and $ \\det(A) = -2 $, what is $ A^{-1} $?",
        questionType: 'text',
        options: [
           "$ A^{-1} = \\frac{1}{-2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix} $",
           "$ A^{-1} = \\frac{1}{-2} \\begin{pmatrix} 1 & -2 \\\\ -3 & 4 \\end{pmatrix} = \\begin{pmatrix} -0.5 & 1 \\\\ 1.5 & -2 \\end{pmatrix} $",
           "$ A^{-1} = \\frac{1}{-2} \\begin{pmatrix} -4 & 2 \\\\ 3 & -1 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ -1.5 & 0.5 \\end{pmatrix} $",
           "$ A^{-1} = \\frac{1}{2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ -1.5 & 0.5 \\end{pmatrix} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "First, swap the diagonal elements ($a=1$ and $d=4$) and negate the off-diagonal elements ($b=2$ becomes $-2$, $c=3$ becomes $-3$). This gives $ \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} $. Then, multiply the entire matrix by $ \\frac{1}{\\det(A)} = \\frac{1}{-2} $. This results in $ A^{-1} = \\frac{1}{-2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix} $."
      }
    ]
  },
  {
    id: 'inverse_of_2x2_matrix_example_2',
    title: "Find the Inverse of Matrix B",
    steps: [
      {
        id: 'step1_determinant_2',
        question: "Calculate the determinant of matrix $ B = \\begin{pmatrix} 5 & 1 \\\\ 2 & 3 \\end{pmatrix} $. What is $ \\det(B) $? (Recall: $ \\det(B) = ad - bc $)",
        questionType: 'text',
        options: [
          "$ \\det(B) = (5)(3) - (1)(2) = 15 - 2 = 13 $",
          "$ \\det(B) = (5)(2) - (1)(3) = 10 - 3 = 7 $",
          "$ \\det(B) = (5)(1) + (2)(3) = 5 + 6 = 11 $",
          "$ \\det(B) = (5)(3) + (1)(2) = 15 + 2 = 17 $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The determinant of a $ 2 \\times 2 $ matrix $ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} $ is calculated as $ ad - bc $. For matrix B, $ a=5, b=1, c=2, d=3 $. So, $ \\det(B) = (5)(3) - (1)(2) = 15 - 2 = 13 $.",
        onCorrect: (_selectedOptionIndex, setSharedValue) => {
            setSharedValue('detB_2', 13);
        }
      },
      {
        id: 'step2_check_invertibility_2',
        question: "Based on the determinant calculated, does the inverse $ B^{-1} $ exist?",
        questionType: 'text',
        options: [
          "Yes, because $ \\det(B) \\neq 0 $",
          "No, because $ \\det(B) = 0 $",
          "Yes, because all elements of B are positive",
          "No, because B is not a square matrix"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "A matrix has an inverse if and only if its determinant is non-zero ($ \\det(B) \\neq 0 $). Since we found $ \\det(B) = 13 $, which is not zero, the inverse exists."
      },
      {
        id: 'step3_apply_formula_2',
        question: "Apply the inverse formula: $ B^{-1} = \\frac{1}{\\det(B)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} $. Given $ B = \\begin{pmatrix} 5 & 1 \\\\ 2 & 3 \\end{pmatrix} $ and $ \\det(B) = 13 $, what is $ B^{-1} $?",
        questionType: 'text',
        options: [
           "$ B^{-1} = \\frac{1}{13} \\begin{pmatrix} 3 & -1 \\\\ -2 & 5 \\end{pmatrix} $",
           "$ B^{-1} = \\frac{1}{13} \\begin{pmatrix} 5 & -1 \\\\ -2 & 3 \\end{pmatrix} $",
           "$ B^{-1} = \\frac{1}{13} \\begin{pmatrix} -3 & 1 \\\\ 2 & -5 \\end{pmatrix} $",
           "$ B^{-1} = \\frac{1}{-13} \\begin{pmatrix} 3 & -1 \\\\ -2 & 5 \\end{pmatrix} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "First, swap the diagonal elements ($a=5$ and $d=3$) and negate the off-diagonal elements ($b=1$ becomes $-1$, $c=2$ becomes $-2$). This gives $ \\begin{pmatrix} 3 & -1 \\\\ -2 & 5 \\end{pmatrix} $. Then, multiply the entire matrix by $ \\frac{1}{\\det(B)} = \\frac{1}{13} $. This results in $ B^{-1} = \\frac{1}{13} \\begin{pmatrix} 3 & -1 \\\\ -2 & 5 \\end{pmatrix} $."
      }
    ]
  },
  {
    id: 'inverse_of_2x2_matrix_concept',
    title: "Concept Check",
    steps: [
      {
        id: 'step1_verification',
        question: "How would you verify that the calculated inverse $ A^{-1} $ is correct?",
        questionType: 'text',
        options: [
          "Multiply $ A $ by $ A^{-1} $ and check if the result is the Identity Matrix $ I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} $",
          "Add $ A $ and $ A^{-1} $ and check if the result is zero",
          "Subtract $ A^{-1} $ from $ A $ and check if the result is zero",
          "Multiply $ A $ by itself and check if the result is $ A^{-1} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The defining property of an inverse matrix is that when you multiply the original matrix $ A $ by its inverse $ A^{-1} $, the result should be the Identity Matrix $ I $. That is, $ A \\cdot A^{-1} = I $ and $ A^{-1} \\cdot A = I $."
      },
       {
        id: 'step2_non_invertible',
        question: "Which of the following matrices is **not** invertible (does not have an inverse)?",
        questionType: 'text',
        options: [
          "$ C = \\begin{pmatrix} 2 & 1 \\\\ 4 & 2 \\end{pmatrix} $, because $ \\det(C) = (2)(2) - (1)(4) = 4 - 4 = 0 $",
          "$ D = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} $, because $ \\det(D) = (1)(1) - (0)(0) = 1 $",
          "$ E = \\begin{pmatrix} 3 & -1 \\\\ 2 & 1 \\end{pmatrix} $, because $ \\det(E) = (3)(1) - (-1)(2) = 3 + 2 = 5 $",
          "$ F = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} $, because $ \\det(F) = (0)(0) - (1)(-1) = 1 $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "A matrix is not invertible if its determinant is zero. For matrix $ C $, $ \\det(C) = (2)(2) - (1)(4) = 4 - 4 = 0 $. Since the determinant is zero, matrix $ C $ does not have an inverse."
      }
    ]
  }
];

const MatrixInverse: React.FC = () => {
  
  const theme = {
    from: 'from-blue-500',
    to: 'to-purple-600',
    button: 'bg-blue-600',
    buttonHover: 'hover:bg-blue-700'
  };

  
  const rules = [
    "For a $ 2 \\times 2 $ matrix $ A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} $, the inverse $ A^{-1} $ exists if $ \\det(A) \\neq 0 $.",
    "Formula: $ A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} $, where $ \\det(A) = ad - bc $.",
    "Verification: $ A \\cdot A^{-1} = I $, where $ I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} $."
  ];

  
  const renderSharedValuesSummary = (sharedValues: { [key: string]: any }) => {
    const entries = Object.entries(sharedValues);
    if (entries.length === 0) {
        return <p className="text-sm italic">No values calculated yet.</p>;
    }
    return (
      <ul className="text-sm space-y-1">
        {entries.map(([key, value]) => (
          <li key={key}><span className="font-mono">{key}:</span> {value}</li>
        ))}
      </ul>
    );
  };

  
  const handleReset = () => {
    console.log("Matrix Inverse Interactive Quiz Reset");
    
  };

  return (
    <MultipleStepInteractiveComponent
      title="Inverse of a 2x2 Matrix"
      icon="🧮"
      theme={theme}
      rules={rules}
      rulesTitle="Key Rules for 2x2 Matrix Inverse:"
      questions={matrixInverseQuestions}
      initialSharedValues={{}}
      renderSharedValuesSummary={renderSharedValuesSummary}
      onReset={handleReset}
    />
  );
};

export default MatrixInverse