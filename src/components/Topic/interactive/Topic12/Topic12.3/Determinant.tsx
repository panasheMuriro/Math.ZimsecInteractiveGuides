
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';

 const determinantCalculationQuestions: QuizQuestion[] = [
  {
    id: 'det-calc-1',
    question: "What is the formula for the determinant of a $ 2 \\times 2 $ matrix $ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} $? ",
    questionType: 'text', 
    options: [
      "$ a + d - b - c $",
      "$ (a + b)(c + d) $",
      "$ ad - bc $",
      "$ ac - bd $"
    ],
    optionType: 'text', 
    correct: 2, 
    explanation: "The determinant of a $ 2 \\times 2 $ matrix is calculated by multiplying the elements on the main diagonal and subtracting the product of the elements on the other diagonal: $ \\det(A) = (a \\cdot d) - (b \\cdot c) = ad - bc $.",
    explanationType: 'text'
  },
  {
    id: 'det-calc-2',
    question: "Calculate the determinant of:  \\begin{pmatrix} 5 & -1 \\\\ 2 & 3 \\end{pmatrix} ",
    questionType: 'text', 
    options: [
      "$ 13 $",
      "$ 17 $",
      "$ 15 $",
      "$ -13 $"
    ],
    optionType: 'text', 
    correct: 0, 
    explanation: "Using the formula $ \\det(A) = ad - bc $:\n$ \\det = (5)(3) - (-1)(2) = 15 - (-2) = 15 + 2 = 17 $.\nWait, let's recheck: $ (5 \\cdot 3) - (-1 \\cdot 2) = 15 - (-2) = 15 + 2 = 17 $. The correct answer is 17. However, option 0 is 13. Let's correct the options and explanation.\nApologies, the options seem misaligned with the initial calculation. Let's re-evaluate the options provided in the prompt. The correct calculation is 17. If option 1 is 17, that's correct. Assuming option 1 is indeed 17 based on the prompt structure:\n$ \\det = (5)(3) - (-1)(2) = 15 - (-2) = 15 + 2 = 17 $. The correct option is $ 17 $.",
     
    explanationType: 'text'
  },
  {
    id: 'det-calc-3',
    question: "Calculate the determinant of:  \\begin{pmatrix} -2 & 4 \\\\ 1 & -3 \\end{pmatrix} ",
    questionType: 'text',
    options: [
      "$ 10 $",
      "$ -10 $",
      "$ 2 $",
      "$ -2 $"
    ],
    optionType: 'text',
    correct: 2, 
    explanation: "Using the formula $ \\det(A) = ad - bc $:\n$ \\det = (-2)(-3) - (4)(1) = 6 - 4 = 2 $. The determinant is $ 2 $.",
    explanationType: 'text'
  },
  {
    id: 'det-calc-4',
    question: "What does it mean if the determinant of a square matrix is zero?",
    questionType: 'text',
    options: [
      "The matrix is the identity matrix.",
      "The matrix is invertible (non-singular).",
      "The matrix is not invertible (singular).",
      "The matrix has all elements equal to zero."
    ],
    optionType: 'text',
    correct: 2, 
    explanation: "A square matrix is **invertible** (or non-singular) if and only if its determinant is **not zero** ($ \\det(A) \\neq 0 $). If the determinant **is zero** ($ \\det(A) = 0 $), the matrix is **not invertible** (or singular).",
    explanationType: 'text'
  },
  {
    id: 'det-calc-5',
    question: "For which value of $ x $ is the determinant of the matrix  \\begin{pmatrix} x & 2 \\\\ 3 & 4 \\end{pmatrix}  equal to zero?",
    questionType: 'text',
    options: [
      "$ x = 1.5 $",
      "$ x = 2 $",
      "$ x = 4 $",
      "$ x = 6 $"
    ],
    optionType: 'text',
    correct: 0, 
    explanation: "Set the determinant formula equal to zero and solve for $ x $:\n$ \\det = (x)(4) - (2)(3) = 4x - 6 = 0 $\n$ 4x = 6 $\n$ x = \\frac{6}{4} = 1.5 $. When $ x = 1.5 $, the determinant is zero.",
    explanationType: 'text'
  }
];










{
    
    const q2Index = determinantCalculationQuestions.findIndex(q => q.id === 'det-calc-2');
    if (q2Index !== -1) {
        determinantCalculationQuestions[q2Index] = {
            id: 'det-calc-2',
            question: "Calculate the determinant of:  \\begin{pmatrix} 5 & -1 \\\\ 2 & 3 \\end{pmatrix} ",
            questionType: 'text',
            options: [
              "$ 13 $",
              "$ 17 $",
              "$ 15 $",
              "$ -13 $"
            ],
            optionType: 'text',
            correct: 1, 
            explanation: "Using the formula $ \\det(A) = ad - bc $:\n$ \\det = (5)(3) - (-1)(2) = 15 - (-2) = 15 + 2 = 17 $. The determinant is $ 17 $.",
            explanationType: 'text'
        };
    }
}



const Determinant: React.FC = () => {
  
  const determinantTheme = {
    from: 'from-rose-600', 
    to: 'to-pink-700',
    button: 'bg-pink-500',
    buttonHover: 'hover:bg-pink-600',
  };

  
  const determinantRules = [
    "**Formula:** For $ A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} $, $ \\det(A) = ad - bc $.",
    "The determinant is a **single number** calculated from a square matrix.",
    "If $ \\det(A) = 0 $, the matrix is **singular** (not invertible).",
    "If $ \\det(A) \\neq 0 $, the matrix is **non-singular** (invertible)."
  ];

  return (
    <div className="flex items-center justify-center">
      <MultipleChoiceInteractiveComponent
        title="Calculating Determinants"
        icon="🔢" 
        theme={determinantTheme}
        rules={determinantRules}
        rulesTitle="Key Rules for Determinants (2x2):"
        questions={determinantCalculationQuestions}
        
      />
    </div>
  );
};

export default Determinant;
