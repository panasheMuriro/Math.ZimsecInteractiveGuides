import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent";

const matrixMultiplicationQuestions: QuizQuestion[] = [
  {
    id: 'matrix-mult-1',
    question: "Under what condition can two matrices $ A $ (of order $ m \\times n $) and $ B $ (of order $ p \\times q $) be multiplied to get the product $ AB $?",
    questionType: 'text', 
    options: [
      "$ m $ must equal $ p $",
      "$ n $ must equal $ p $",
      "$ m $ must equal $ q $",
      "$ n $ must equal $ q $"
    ],
    optionType: 'text',
    correct: 1, 
    explanation: "For matrix multiplication $ AB $ to be possible, the number of **columns** in the first matrix $ A $ ($n$) must be equal to the number of **rows** in the second matrix $ B $ ($p$). The resulting matrix will have the order $ m \\times q $.",
    explanationType: 'text'
  },
  {
    id: 'matrix-mult-2',
    question: "Calculate: $ \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\times \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix} $",
    questionType: 'text', 
    options: [
      "$ \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 3 & 6 \\\\ 4 & 12 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 2 & 2 \\\\ 4 & 7 \\end{pmatrix} $",
      "$ \\begin{pmatrix} 4 & 3 \\\\ 10 & 12 \\end{pmatrix} $"
    ],
    optionType: 'text', 
    correct: 0, 
    explanation: "Multiply row by column:\n- $ c_{11} = (1)(2) + (2)(1) = 2 + 2 = 4 $\n- $ c_{12} = (1)(0) + (2)(3) = 0 + 6 = 6 $\n- $ c_{21} = (3)(2) + (4)(1) = 6 + 4 = 10 $\n- $ c_{22} = (3)(0) + (4)(3) = 0 + 12 = 12 $\nResult: $ \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix} $",
    explanationType: 'text' 
  },
  {
    id: 'matrix-mult-3',
    question: "What is the order of the product matrix if $ A $ is a $ 2 \\times 3 $ matrix and $ B $ is a $ 3 \\times 4 $ matrix?",
    questionType: 'text',
    options: [
      "$ 2 \\times 4 $",
      "$ 3 \\times 3 $",
      "$ 2 \\times 3 $",
      "$ 3 \\times 4 $"
    ],
    optionType: 'text',
    correct: 0, 
    explanation: "For multiplication $ AB $, if $ A $ is $ m \\times n $ and $ B $ is $ n \\times p $, the result is $ m \\times p $. Here, $ A $ is $ 2 \\times 3 $ ($m=2, n=3$) and $ B $ is $ 3 \\times 4 $ ($n=3, p=4$). The resulting order is $ 2 \\times 4 $.",
    explanationType: 'text'
  },
  {
    id: 'matrix-mult-4',
    question: "Calculate the element $ c_{21} $ of the product matrix $ C = AB $, where $ A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} $ and $ B = \\begin{pmatrix} 7 & 8 \\\\ 9 & 10 \\\\ 11 & 12 \\end{pmatrix} $.",
    questionType: 'text', 
    options: [
      "$ 4 \\cdot 7 + 5 \\cdot 9 + 6 \\cdot 11 $",
      "$ 1 \\cdot 7 + 2 \\cdot 9 + 3 \\cdot 11 $",
      "$ 4 \\cdot 8 + 5 \\cdot 10 + 6 \\cdot 12 $",
      "$ 1 \\cdot 8 + 2 \\cdot 10 + 3 \\cdot 12 $"
    ],
    optionType: 'text', 
    correct: 0, 
    explanation: "The element $ c_{ij} $ is found by taking the dot product of the $i$-th row of $A$ and the $j$-th column of $B$. For $ c_{21} $, we use the 2nd row of $A$ ($ 4, 5, 6 $) and the 1st column of $B$ ($ 7, 9, 11 $).\n$ c_{21} = (4)(7) + (5)(9) + (6)(11) $",
    explanationType: 'text'
  },
  {
    id: 'matrix-mult-5',
    question: "Is matrix multiplication commutative? That is, is $ AB $ always equal to $ BA $? ",
    questionType: 'text',
    options: [
      "Yes, always.",
      "Yes, but only if both matrices are square.",
      "No, never.",
      "No, not always (it depends on the matrices)."
    ],
    optionType: 'text',
    correct: 3, 
    explanation: "Matrix multiplication is **not** commutative in general. $ AB $ might be defined while $ BA $ is not (e.g., if $A$ is $ 2 \\times 3 $ and $B$ is $ 3 \\times 4 $, $AB$ is $ 2 \\times 4 $ but $BA$ is undefined). Even if both $ AB $ and $ BA $ are defined (e.g., both matrices are square), the results are usually different.",
    explanationType: 'text'
  }
];


const MatrixMultiplication: React.FC = () => {
  
  const matrixMultTheme = {
    from: 'from-violet-600', 
    to: 'to-purple-700',
    button: 'bg-purple-500',
    buttonHover: 'hover:bg-purple-600',
  };

  
  const matrixMultRules = [
    "**Condition:** $ A_{m \\times n} \\times B_{n \\times p} $ is possible only if the number of columns of $ A $ ($n$) equals the number of rows of $ B $ ($n$).",
    "**Result Order:** The product matrix $ C $ will be of order $ m \\times p $.",
    "**Calculation:** Element $ c_{ij} = $ (Row $i$ of $A$) ⋅ (Column $j$ of $B$) $ = \\sum_{k=1}^{n} a_{ik} b_{kj} $.",
    "**Not Commutative:** $ AB \\neq BA $ in general."
  ];

  return (
    <div className="flex items-center justify-center">
      <MultipleChoiceInteractiveComponent
        title="Matrix Multiplication"
        icon="✖️" 
        theme={matrixMultTheme}
        rules={matrixMultRules}
        rulesTitle="Key Rules for Matrix Multiplication:"
        questions={matrixMultiplicationQuestions}
      />
    </div>
  );
};

export default MatrixMultiplication;
