

import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent";

const singularNonSingularQuestions: QuizQuestion[] = [
  {
    id: 'singular-1',
    question: "What is the defining characteristic of a Singular Matrix?",
    questionType: 'text',
    options: [
      "Its determinant is positive.",
      "Its determinant is negative.",
      "Its determinant is zero.",
      "It has an equal number of rows and columns."
    ],
    optionType: 'text',
    correct: 2, 
    explanation: "A **Singular Matrix** is defined as a square matrix whose **determinant is zero** ($ \\det(A) = 0 $). This means the matrix does not have an inverse.",
    explanationType: 'text'
  },
  {
    id: 'singular-2',
    question: "Determine if the matrix $ \\begin{pmatrix} 3 & 1 \\\\ 6 & 2 \\end{pmatrix} $ is singular or non-singular.",
    questionType: 'text',
    options: [
      "Singular",
      "Non-Singular",
      "Cannot be determined without more information.",
      "Neither, it's not a square matrix."
    ],
    optionType: 'text',
    correct: 0, 
    explanation: "Calculate the determinant: $ \\det = (3)(2) - (1)(6) = 6 - 6 = 0 $. Since the determinant is zero, the matrix is **Singular**.",
    explanationType: 'text'
  },
  {
    id: 'singular-3',
    question: "If a $ 2 \\times 2 $ matrix $ A $ is Non-Singular, what can you say about its determinant?",
    questionType: 'text',
    options: [
      "$ \\det(A) = 0 $",
      "$ \\det(A) \\neq 0 $",
      "$ \\det(A) = 1 $",
      "$ \\det(A) $ must be positive."
    ],
    optionType: 'text', 
    correct: 1, 
    explanation: "A **Non-Singular Matrix** is defined as a square matrix whose **determinant is NOT zero** ($ \\det(A) \\neq 0 $). This non-zero determinant is what allows the matrix to have an inverse.",
    explanationType: 'text'
  },
  {
    id: 'singular-4',
    question: "Find the value of $ x $ that makes the matrix $ \\begin{pmatrix} x & 2 \\\\ 3 & 6 \\end{pmatrix} $ singular.",
    questionType: 'text',
    options: [
      "$ x = 1 $",
      "$ x = 4 $",
      "$ x = 9 $",
      "$ x = 6 $"
    ],
    optionType: 'text',
    correct: 0, 
    explanation: "For a matrix to be singular, its determinant must be zero. Set the determinant formula equal to zero:\n$ \\det = (x)(6) - (2)(3) = 6x - 6 = 0 $\nSolve for $ x $:\n$ 6x = 6 $\n$ x = 1 $\nTherefore, when $ x = 1 $, the matrix is singular.",
    explanationType: 'text'
  },
  {
    id: 'singular-5',
    question: "Why is it important to know if a matrix is singular or non-singular?",
    questionType: 'text',
    options: [
      "Only singular matrices can be used in matrix multiplication.",
      "Only non-singular matrices can be added or subtracted.",
      "Only non-singular matrices have an inverse.",
      "Singular matrices are always symmetric."
    ],
    optionType: 'text',
    correct: 2, 
    explanation: "The most fundamental importance lies in **invertibility**. A matrix has an inverse **if and only if** it is **non-singular** (its determinant is non-zero). Singular matrices ($ \\det = 0 $) do not possess an inverse. This is crucial for solving systems of linear equations and many other matrix operations.",
    explanationType: 'text'
  }
];



const SingularMatrix: React.FC = () => {
  
  const singularTheme = {
    from: 'from-amber-600', 
    to: 'to-orange-700',
    button: 'bg-orange-500',
    buttonHover: 'hover:bg-orange-600',
  };

  
  const singularRules = [
    "**Singular Matrix:** $ \\det(A) = 0 $. It is **not invertible**.",
    "**Non-Singular Matrix:** $ \\det(A) \\neq 0 $. It **is invertible**.",
    "To find an unknown that makes a matrix singular, **set its determinant equal to 0** and solve.",
    "Invertibility (having an inverse) is crucial for solving linear systems."
  ];

  return (
    <div className="flex items-center justify-center">
      <MultipleChoiceInteractiveComponent
        title="Singular and Non-Singular Matrices"
        icon="⚠️" 
        theme={singularTheme}
        rules={singularRules}
        rulesTitle="Key Concepts: Singular vs. Non-Singular"
        questions={singularNonSingularQuestions}
        
      />
    </div>
  );
};

export default SingularMatrix;
