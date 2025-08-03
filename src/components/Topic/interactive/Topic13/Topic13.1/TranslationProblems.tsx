// src/data/translationProblemsQuestions.ts (or your preferred location)

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";


const translationProblemsQuestions: MultiStepQuestion[] = [
  {
    id: 'translation_forward_example',
    title: "Forward Translation Problem",
    steps: [
      {
        id: 'step1_identify_info_1',
        question: "A rectangle has vertices at $ P(1, 2) $, $ Q(4, 2) $, $ R(4, 5) $, and $ S(1, 5) $. It is translated by the vector $ \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix} $. What information is given?",
        questionType: 'text',
        options: [
          "Original points ($P, Q, R, S$) and the translation vector.",
          "Only the original points.",
          "Only the translation vector.",
          "The image points and the vector."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The problem explicitly states the coordinates of the original rectangle's vertices and the translation vector to be applied. This is a classic 'forward translation' problem where we apply a known vector to known points."
      },
      {
        id: 'step2_apply_formula_1a',
        question: "What is the formula for translating a point $ (x, y) $ by a vector $ \\begin{pmatrix} a \\\\ b \\end{pmatrix} $? (This is the core rule for translation.)",
        questionType: 'text',
        options: [
          "New point $ (x', y') = (x + a, y + b) $",
          "New point $ (x', y') = (x - a, y - b) $",
          "New point $ (x', y') = (a - x, b - y) $",
          "New point $ (x', y') = (x \\cdot a, y \\cdot b) $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "Translation moves a point by adding the components of the translation vector to the original point's coordinates. So, the new x-coordinate is the old x-coordinate plus the vector's x-component ($a$), and the new y-coordinate is the old y-coordinate plus the vector's y-component ($b$)."
      },
      {
        id: 'step3_apply_formula_1b',
        question: "Apply the formula to find the image of point $ P(1, 2) $. Translate by $ \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix} $. What are the coordinates of $ P' $? $ P'(x + a, y + b) = P'(? , ?) $",
        questionType: 'text',
        options: [
          "$ P'(1 + (-2), 2 + 3) = P'(-1, 5) $",
          "$ P'(1 - 2, 2 - 3) = P'(-1, -1) $",
          "$ P'(-2 - 1, 3 - 2) = P'(-3, 1) $",
          "$ P'(1 \\cdot (-2), 2 \\cdot 3) = P'(-2, 6) $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "Using the formula $ P'(x + a, y + b) $, substitute $ x=1, y=2, a=-2, b=3 $. This gives $ P'(1 + (-2), 2 + 3) = P'(-1, 5) $."
      },
      {
        id: 'step4_apply_formula_1c',
        question: "Apply the same translation vector $ \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix} $ to point $ R(4, 5) $. What are the coordinates of $ R' $? $ R'(x + a, y + b) = R'(? , ?) $",
        questionType: 'text',
        options: [
          "$ R'(4 + (-2), 5 + 3) = R'(2, 8) $",
          "$ R'(4 - 2, 5 - 3) = R'(2, 2) $",
          "$ R'(-2 - 4, 3 - 5) = R'(-6, -2) $",
          "$ R'(4 \\cdot (-2), 5 \\cdot 3) = R'(-8, 15) $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "Using the formula $ R'(x + a, y + b) $, substitute $ x=4, y=5, a=-2, b=3 $. This gives $ R'(4 + (-2), 5 + 3) = R'(2, 8) $."
      }
    ]
  },
  {
    id: 'translation_reverse_example',
    title: "Reverse Translation Problem",
    steps: [
      {
        id: 'step1_identify_info_2',
        question: "A point $ A(3, -1) $ is translated to its image $ A'(0, 4) $. What type of problem is this, and what do you need to find?",
        questionType: 'text',
        options: [
          "Reverse translation problem; find the translation vector.",
          "Forward translation problem; find the image point.",
          "Composite translation problem; find multiple vectors.",
          "Verification problem; check if the translation is correct."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "You are given the original point ($A$) and its image ($A'$). The task is to determine the translation vector that moved $A$ to $A'$. This is a 'reverse translation' problem."
      },
      {
        id: 'step2_find_vector_2a',
        question: "What is the formula for finding the translation vector when given an original point $ P(x_1, y_1) $ and its image $ P'(x_2, y_2) $? (This is the reverse of the translation formula.)",
        questionType: 'text',
        options: [
          "Vector = $ \\begin{pmatrix} x_2 - x_1 \\\\ y_2 - y_1 \\end{pmatrix} $",
          "Vector = $ \\begin{pmatrix} x_1 - x_2 \\\\ y_1 - y_2 \\end{pmatrix} $",
          "Vector = $ \\begin{pmatrix} x_1 + x_2 \\\\ y_1 + y_2 \\end{pmatrix} $",
          "Vector = $ \\begin{pmatrix} x_2 / x_1 \\\\ y_2 / y_1 \\end{pmatrix} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The translation vector represents the 'change' or 'movement' from the original point to the image point. To find this change, you subtract the original coordinates from the image coordinates. The change in x is $x_2 - x_1$, and the change in y is $y_2 - y_1$."
      },
      {
        id: 'step3_find_vector_2b',
        question: "Apply the formula to find the translation vector from $ A(3, -1) $ to $ A'(0, 4) $. What is the vector?",
        questionType: 'text',
        options: [
          "$ \\begin{pmatrix} 0 - 3 \\\\ 4 - (-1) \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix} $",
          "$ \\begin{pmatrix} 3 - 0 \\\\ -1 - 4 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -5 \\end{pmatrix} $",
          "$ \\begin{pmatrix} 0 + 3 \\\\ 4 + (-1) \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix} $",
          "$ \\begin{pmatrix} 3 \\cdot 0 \\\\ -1 \\cdot 4 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ -4 \\end{pmatrix} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "Using the formula $ \\begin{pmatrix} x_2 - x_1 \\\\ y_2 - y_1 \\end{pmatrix} $, substitute $ x_1=3, y_1=-1, x_2=0, y_2=4 $. This gives $ \\begin{pmatrix} 0 - 3 \\\\ 4 - (-1) \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix} $."
      },
      {
        id: 'step4_verify_result_2',
        question: "How can you verify that the vector $ \\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix} $ is correct for translating $ A(3, -1) $ to $ A'(0, 4) $?",
        questionType: 'text',
        options: [
          "Apply the forward translation formula: $ A'(x + a, y + b) $. Check if $ (3 + (-3), -1 + 5) = (0, 4) $.",
          "Subtract the vector from the original point: $ (3 - (-3), -1 - 5) $.",
          "Add the original point coordinates: $ (3 + 0, -1 + 4) $.",
          "Multiply the coordinates: $ (3 \\cdot (-3), -1 \\cdot 5) $."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "To verify, use the forward translation formula with the original point and the calculated vector. $ A'(x + a, y + b) = A'(3 + (-3), -1 + 5) = A'(0, 4) $. This matches the given image point $A'$, confirming the vector is correct."
      }
    ]
  },
  {
    id: 'translation_concept_check',
    title: "Concept Check",
    steps: [
      {
        id: 'step1_verify_concept',
        question: "Which of the following is NOT a correct way to verify the results of a translation?",
        questionType: 'text',
        options: [
          "Check that the shape has changed size or orientation.",
          "Ensure all points moved by the same vector.",
          "Plot the original and translated shapes on a coordinate plane.",
          "Confirm that corresponding sides are parallel and equal in length."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "A fundamental property of translation is that it is a 'rigid transformation'. This means the shape's size and orientation (angles) must remain exactly the same. The distance and direction between any two points in the original shape are preserved in the translated shape. Verifying a *change* in size or orientation would indicate an error."
      },
      {
        id: 'step2_composite_translation',
        question: "A point $ M(2, 3) $ undergoes two translations in sequence: first by $ \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix} $, then by $ \\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix} $. What single vector would produce the same final result?",
        questionType: 'text',
        options: [
          "Add the two vectors: $ \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix} + \\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ -1 \\end{pmatrix} $",
          "Subtract the vectors: $ \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix} - \\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix} $",
          "Multiply the vectors: $ \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix} \\cdot \\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -4 \\\\ -2 \\end{pmatrix} $",
          "Average the vectors: $ \\frac{1}{2} \\left( \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix} + \\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix} \\right) = \\begin{pmatrix} -1.5 \\\\ -0.5 \\end{pmatrix} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "When performing multiple translations in sequence, the overall effect is the same as a single translation by the vector sum of the individual translation vectors. You add the components of the first vector to the components of the second vector: $ \\begin{pmatrix} 1 + (-4) \\\\ -2 + 1 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ -1 \\end{pmatrix} $. Applying this single vector $ \\begin{pmatrix} -3 \\\\ -1 \\end{pmatrix} $ to $ M(2, 3) $ gives $ M'(2-3, 3-1) = M'(-1, 2) $, which is the same result as applying the two translations sequentially."
      }
    ]
  }
];

const TranslationProblems: React.FC = () => {
  // Define the theme (using orange/amber for a distinct look)
  const theme = {
    from: 'from-orange-500',
    to: 'to-amber-700',
    button: 'bg-orange-600',
    buttonHover: 'hover:bg-orange-700'
  };

  // Define the rules to display (summarizing key points from the content)
  const rules = [
    "Forward Translation: $ P(x, y) $ translated by $ \\begin{pmatrix} a \\\\ b \\end{pmatrix} $ gives $ P'(x+a, y+b) $.",
    "Reverse Translation: Given $ P(x_1, y_1) $ and $ P'(x_2, y_2) $, the vector is $ \\begin{pmatrix} x_2-x_1 \\\\ y_2-y_1 \\end{pmatrix} $.",
    "Translation preserves shape, size, and orientation (it's a rigid transformation).",
    "Composite translations are performed by adding the translation vectors."
  ];



  return (
    <MultipleStepInteractiveComponent
      title="Translation Problems"
      icon="🗺️" // Changed icon to represent mapping/navigation
      theme={theme}
      rules={rules}
      rulesTitle="Key Translation Rules:"
      questions={translationProblemsQuestions}
      initialSharedValues={{}}
      // onReset={handleReset}
    />
  );
};

export default TranslationProblems;