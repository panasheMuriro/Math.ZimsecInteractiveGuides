/* eslint-disable @typescript-eslint/no-explicit-any */

import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

const simultaneousEquationsQuestions: MultiStepQuestion[] = [
  {
    id: 'solve_equations_example_1',
    title: "Solve the System of Equations (Example)",
    steps: [
      {
        id: 'step1_matrix_form_1',
        question: "Write the system of equations $ x + 2y = 5 $, $ 3x + 4y = 11 $ in matrix form $ A \\mathbf{v} = \\mathbf{b} $. What is matrix $ A $? (Recall: Coefficients of $x$ and $y$ form $A$, variables form $\\mathbf{v}$, constants form $\\mathbf{b}$)",
        questionType: 'text',
        options: [
          "$ A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $",
          "$ A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix} $",
          "$ A = \\begin{pmatrix} 5 & 11 \\\\ 1 & 1 \\end{pmatrix} $",
          "$ A = \\begin{pmatrix} x & y \\\\ 5 & 11 \\end{pmatrix} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "Matrix $A$ contains the coefficients of the variables $x$ and $y$. For the first equation $1x + 2y = 5$, the coefficients are 1 and 2. For the second equation $3x + 4y = 11$, the coefficients are 3 and 4. Therefore, $ A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $."
      },
      {
        id: 'step2_find_inverse_1',
        question: "The inverse of matrix $ A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $ is needed. From previous calculations (or using the formula), we know: $ A^{-1} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix} $. Is this correct?",
        questionType: 'text',
        options: [
          "Yes",
          "No, the determinant is wrong",
          "No, the elements are swapped incorrectly",
          "No, the signs are incorrect"
        ],
        optionType: 'text',
        correct: 0, 
        explanation: "We are told to use $ A^{-1} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix} $ for this example. You can verify this by checking $ A \\cdot A^{-1} = I $."
      },
      {
        id: 'step3_apply_inverse_1',
        question: "Apply the formula $ \\begin{pmatrix} x \\\\ y \\end{pmatrix} = A^{-1} \\begin{pmatrix} e \\\\ f \\end{pmatrix} $. With $ A^{-1} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix} $ and $ \\begin{pmatrix} e \\\\ f \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 11 \\end{pmatrix} $, calculate $ \\begin{pmatrix} x \\\\ y \\end{pmatrix} $. What is the result?",
        questionType: 'text',
        options: [
           "$ \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} (-2)(5) + (1)(11) \\\\ (1.5)(5) + (-0.5)(11) \\end{pmatrix} = \\begin{pmatrix} -10 + 11 \\\\ 7.5 - 5.5 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} $. So, $ x=1, y=2 $.",
           "$ \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} (-2)(5) + (1.5)(11) \\\\ (1)(5) + (-0.5)(11) \\end{pmatrix} = \\begin{pmatrix} -10 + 16.5 \\\\ 5 - 5.5 \\end{pmatrix} = \\begin{pmatrix} 6.5 \\\\ -0.5 \\end{pmatrix} $. So, $ x=6.5, y=-0.5 $.",
           "$ \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} (1)(5) + (2)(11) \\\\ (3)(5) + (4)(11) \\end{pmatrix} = \\begin{pmatrix} 5 + 22 \\\\ 15 + 44 \\end{pmatrix} = \\begin{pmatrix} 27 \\\\ 59 \\end{pmatrix} $. So, $ x=27, y=59 $.",
           "$ \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} (-2)(11) + (1)(5) \\\\ (1.5)(11) + (-0.5)(5) \\end{pmatrix} = \\begin{pmatrix} -22 + 5 \\\\ 16.5 - 2.5 \\end{pmatrix} = \\begin{pmatrix} -17 \\\\ 14 \\end{pmatrix} $. So, $ x=-17, y=14 $."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "Matrix multiplication $ A^{-1} \\mathbf{b} $ is performed as follows: The element in row 1 of the result is $(-2)\\times(5) + (1)\\times(11) = -10 + 11 = 1$. The element in row 2 is $(1.5)\\times(5) + (-0.5)\\times(11) = 7.5 - 5.5 = 2$. Therefore, $ \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} $, giving $ x=1 $ and $ y=2 $."
      },
      {
        id: 'step4_verify_solution_1',
        question: "Verify the solution $ x=1, y=2 $ by substituting back into the original equations $ x + 2y = 5 $, $ 3x + 4y = 11 $. Are both equations satisfied?",
        questionType: 'text',
        options: [
          "Yes: Equation 1: $ (1) + 2(2) = 1 + 4 = 5 $ ✓. Equation 2: $ 3(1) + 4(2) = 3 + 8 = 11 $ ✓.",
          "No: Equation 1: $ (1) + 2(2) = 3 \\neq 5 $. Equation 2: $ 3(1) + 4(2) = 7 \\neq 11 $.",
          "Yes: Equation 1: $ (2) + 2(1) = 4 $. Equation 2: $ 3(2) + 4(1) = 10 $.",
          "No: Only one equation is satisfied."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "Substituting $ x=1 $ and $ y=2 $ into the first equation: $ (1) + 2(2) = 1 + 4 = 5 $. This is correct. Substituting into the second equation: $ 3(1) + 4(2) = 3 + 8 = 11 $. This is also correct. Therefore, the solution is verified."
      }
    ]
  },
  {
    id: 'solve_equations_example_2',
    title: "Solve Another System of Equations",
    steps: [
      {
        id: 'step1_matrix_form_2',
        question: "Write the system $ 2x - y = 1 $, $ x + 3y = 4 $ in matrix form $ A \\mathbf{v} = \\mathbf{b} $. What is matrix $ A $? What is vector $ \\mathbf{b} $? (Be careful with the sign of the coefficient for $y$ in the first equation!)",
        questionType: 'text',
        options: [
          "$ A = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix} $, $ \\mathbf{b} = \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix} $",
          "$ A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix} $, $ \\mathbf{b} = \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix} $",
          "$ A = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix} $, $ \\mathbf{b} = \\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix} $",
          "$ A = \\begin{pmatrix} -1 & 2 \\\\ 3 & 1 \\end{pmatrix} $, $ \\mathbf{b} = \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "For the first equation $ 2x + (-1)y = 1 $, the coefficients are 2 and -1. For the second equation $ 1x + 3y = 4 $, the coefficients are 1 and 3. So, $ A = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix} $. The constants on the right-hand side form the vector $ \\mathbf{b} = \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix} $."
      },
      {
        id: 'step2_find_determinant_2',
        question: "Calculate the determinant of $ A = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix} $. What is $ \\det(A) $? (Recall: $ \\det(A) = ad - bc $)",
        questionType: 'text',
        options: [
          "$ \\det(A) = (2)(3) - (-1)(1) = 6 - (-1) = 6 + 1 = 7 $",
          "$ \\det(A) = (2)(1) - (-1)(3) = 2 - (-3) = 5 $",
          "$ \\det(A) = (2)(3) + (-1)(1) = 6 - 1 = 5 $",
          "$ \\det(A) = (2)(-1) - (1)(3) = -2 - 3 = -5 $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "Using the formula $ \\det(A) = ad - bc $, where $ a=2, b=-1, c=1, d=3 $, we get $ \\det(A) = (2)(3) - (-1)(1) = 6 - (-1) = 6 + 1 = 7 $.",
        onCorrect: (_selectedOptionIndex, setSharedValue) => {
            setSharedValue('detA_2', 7);
        }
      },
      {
        id: 'step3_check_invertibility_2',
        question: "Does the inverse $ A^{-1} $ exist for this matrix?",
        questionType: 'text',
        options: [
          "Yes, because $ \\det(A) = 7 \\neq 0 $",
          "No, because $ \\det(A) = 0 $",
          "Yes, because all elements of A are non-zero",
          "No, because A is not a square matrix"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "A matrix has an inverse if and only if its determinant is non-zero ($ \\det(A) \\neq 0 $). Since $ \\det(A) = 7 $, which is not zero, the inverse exists."
      }
      
    ]
  },
  {
    id: 'concept_check_sim_eq',
    title: "Concept Check",
    steps: [
      {
        id: 'step1_matrix_method_condition',
        question: "What is the essential condition for using the matrix method $ \\mathbf{v} = A^{-1} \\mathbf{b} $ to solve a system of linear equations?",
        questionType: 'text',
        options: [
          "The coefficient matrix $ A $ must have a non-zero determinant ($ \\det(A) \\neq 0 $), meaning it must be invertible.",
          "The system must have more equations than unknowns.",
          "All coefficients in matrix $ A $ must be positive.",
          "The constant vector $ \\mathbf{b} $ must not be zero."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The formula $ \\mathbf{v} = A^{-1} \\mathbf{b} $ requires the inverse of matrix $ A $, denoted $ A^{-1} $. An inverse only exists if the determinant of $ A $ is not zero ($ \\det(A) \\neq 0 $). If $ \\det(A) = 0 $, the matrix is singular and not invertible, and this specific method cannot be used."
      },
       {
        id: 'step2_number_of_equations_variables',
        question: "For the matrix method to be applicable, what must be true about the number of equations and the number of variables?",
        questionType: 'text',
        options: [
          "The number of equations must equal the number of variables, and the coefficient matrix must be square and invertible.",
          "The number of equations must be greater than the number of variables.",
          "The number of equations must be less than the number of variables.",
          "The number of equations and variables can be any numbers."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The matrix method $ A \\mathbf{v} = \\mathbf{b} $ involves a coefficient matrix $ A $. To find $ A^{-1} $, $ A $ must be a square matrix (same number of rows and columns). This means the number of equations must equal the number of variables. Additionally, $ A $ must be invertible ($ \\det(A) \\neq 0 $)."
      }
    ]
  }
];

const SimultaneousEquations:React.FC = () => {
  
  const theme = {
    from: 'from-green-500', 
    to: 'to-teal-600',
    button: 'bg-green-600',
    buttonHover: 'hover:bg-green-700'
  };

  
  const rules = [
    "For equations $ ax + by = e $, $ cx + dy = f $, write in matrix form: $ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} e \\\\ f \\end{pmatrix} $.",
    "Solution: $ \\begin{pmatrix} x \\\\ y \\end{pmatrix} = A^{-1} \\begin{pmatrix} e \\\\ f \\end{pmatrix} $.",
    "The inverse $ A^{-1} $ exists only if $ \\det(A) \\neq 0 $."
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
    console.log("Simultaneous Equations Interactive Quiz Reset");
    
  };

  return (
    <MultipleStepInteractiveComponent
      title="Solving Simultaneous Equations"
      icon="📐" 
      theme={theme}
      rules={rules}
      rulesTitle="Key Rules for Matrix Method:"
      questions={simultaneousEquationsQuestions}
      initialSharedValues={{}}
      renderSharedValuesSummary={renderSharedValuesSummary}
      onReset={handleReset}
    />
  );
};

export default SimultaneousEquations