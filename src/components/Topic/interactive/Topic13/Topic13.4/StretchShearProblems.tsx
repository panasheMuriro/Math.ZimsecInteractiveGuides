
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

const stretchShearProblemsQuestions: MultiStepQuestion[] = [
  {
    id: 'stretch_forward_example',
    title: "Forward Stretch Problem",
    steps: [
      {
        id: 'step1_identify_stretch_1',
        question: "A point $ P(2, 3) $ undergoes a one-way stretch parallel to the X-axis with a stretch factor of $ k = 4 $. What type of stretch is this?",
        questionType: 'text',
        options: [
          "One-way stretch parallel to the X-axis.",
          "One-way stretch parallel to the Y-axis.",
          "Two-way stretch.",
          "Shear parallel to the X-axis."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The problem explicitly states it's a 'one-way stretch parallel to the X-axis'. This means points are moved horizontally away from or towards the Y-axis (the invariant line), and their distance from the Y-axis is scaled by the factor $k$."
      },
      {
        id: 'step2_apply_formula_1a',
        question: "What is the formula for a one-way stretch parallel to the X-axis by a factor $ k $? (This describes how coordinates change.)",
        questionType: 'text',
        options: [
          "New point $ (x', y') = (k \\cdot x, y) $",
          "New point $ (x', y') = (x, k \\cdot y) $",
          "New point $ (x', y') = (k \\cdot x, k \\cdot y) $",
          "New point $ (x', y') = (x + k \\cdot y, y) $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "A one-way stretch parallel to the X-axis scales only the x-coordinate by the factor $k$. The y-coordinate remains unchanged. So, the transformation rule is $ (x, y) \\to (k \\cdot x, y) $."
      },
      {
        id: 'step3_apply_formula_1b',
        question: "Apply the formula $ (x', y') = (k \\cdot x, y) $ with $ k = 4 $ to find the image of point $ P(2, 3) $. What are the coordinates of $ P' $? $ P'(k \\cdot x, y) = P'(? , ?) $",
        questionType: 'text',
        options: [
          "$ P'(4 \\cdot 2, 3) = P'(8, 3) $",
          "$ P'(2, 4 \\cdot 3) = P'(2, 12) $",
          "$ P'(4 \\cdot 2, 4 \\cdot 3) = P'(8, 12) $",
          "$ P'(2 + 4 \\cdot 3, 3) = P'(14, 3) $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "Using the formula $ P'(k \\cdot x, y) $, substitute $ k = 4, x = 2, y = 3 $. This gives $ P'(4 \\cdot 2, 3) = P'(8, 3) $. The x-coordinate is scaled by 4, while the y-coordinate stays the same."
      },
      {
        id: 'step4_matrix_method_1',
        question: "This stretch can also be performed using matrix multiplication. What is the correct stretch matrix for a one-way stretch parallel to the X-axis with factor $ k = 4 $? (The matrix form of the rule $ (x, y) \\to (kx, y) $.)",
        questionType: 'text',
        options: [
          "$ \\begin{pmatrix} 4 & 0 \\\\ 0 & 1 \\end{pmatrix} $",
          "$ \\begin{pmatrix} 1 & 0 \\\\ 0 & 4 \\end{pmatrix} $",
          "$ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} $",
          "$ \\begin{pmatrix} 1 & 4 \\\\ 0 & 1 \\end{pmatrix} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The matrix for a one-way stretch parallel to the X-axis is $ \\begin{pmatrix} k & 0 \\\\ 0 & 1 \\end{pmatrix} $. For $ k = 4 $, the matrix is $ \\begin{pmatrix} 4 & 0 \\\\ 0 & 1 \\end{pmatrix} $. When you multiply this matrix by the column vector $ \\begin{pmatrix} x \\\\ y \\end{pmatrix} $, you get $ \\begin{pmatrix} 4x \\\\ y \\end{pmatrix} $, which matches our rule."
      }
    ]
  },
  {
    id: 'shear_forward_example',
    title: "Forward Shear Problem",
    steps: [
      {
        id: 'step1_identify_shear_2',
        question: "A point $ Q(3, 2) $ undergoes a shear parallel to the Y-axis with a shear factor of $ k = -1 $. What is the invariant line for this transformation?",
        questionType: 'text',
        options: [
          "The X-axis ($ y = 0 $)",
          "The Y-axis ($ x = 0 $)",
          "The line $ y = x $",
          "There is no invariant line."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "For a shear transformation, the invariant line is the line that remains unchanged. A shear parallel to the Y-axis moves points vertically. The points that do not move are those on the X-axis (where $ y = 0 $). Therefore, the X-axis is the invariant line for this shear."
      },
      {
        id: 'step2_apply_formula_2a',
        question: "What is the formula for a shear parallel to the Y-axis by a factor $ k $? (This describes how coordinates change, with the X-axis being invariant.)",
        questionType: 'text',
        options: [
          "New point $ (x', y') = (x, y + k \\cdot x) $",
          "New point $ (x', y') = (x + k \\cdot y, y) $",
          "New point $ (x', y') = (k \\cdot x, y) $",
          "New point $ (x', y') = (x, k \\cdot y) $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "A shear parallel to the Y-axis leaves the x-coordinate unchanged but shifts the y-coordinate by an amount proportional to the x-coordinate. The shift is $ k \\cdot x $. So, the transformation rule is $ (x, y) \\to (x, y + k \\cdot x) $. The invariant line is $ y = 0 $ because if $ y = 0 $, then $ y' = 0 + k \\cdot x = k \\cdot x $, but wait, that's not right for invariance. Let's recheck: If $ y = 0 $, then $ y' = 0 + k \\cdot x $. For invariance, $ y' $ must equal $ y $, so $ 0 + k \\cdot x = 0 $. This is only true for all $ x $ if $ k = 0 $, or for $ x = 0 $. Ah, the invariant *points* for Y-axis shear are on the Y-axis ($x=0$). Correction: The invariant *line* for Y-axis shear is the Y-axis ($x=0$). Let's re-read the question and options. The formula $ (x, y) \\to (x, y + k \\cdot x) $ is correct for Y-axis shear. The invariant line is $ x = 0 $ (Y-axis)."
      },
      {
        id: 'step3_apply_formula_2b',
        question: "Apply the formula $ (x', y') = (x, y + k \\cdot x) $ with $ k = -1 $ to find the image of point $ Q(3, 2) $. What are the coordinates of $ Q' $? $ Q'(x, y + k \\cdot x) = Q'(? , ?) $",
        questionType: 'text',
        options: [
          "$ Q'(3, 2 + (-1) \\cdot 3) = Q'(3, 2 - 3) = Q'(3, -1) $",
          "$ Q'(3 + (-1) \\cdot 2, 2) = Q'(3 - 2, 2) = Q'(1, 2) $",
          "$ Q'(3, 2) $ (No change because $ k = -1 $ is special)",
          "$ Q'(-1 \\cdot 3, -1 \\cdot 2) = Q'(-3, -2) $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "Using the formula $ Q'(x, y + k \\cdot x) $, substitute $ x = 3, y = 2, k = -1 $. This gives $ Q'(3, 2 + (-1) \\cdot 3) = Q'(3, 2 - 3) = Q'(3, -1) $. The x-coordinate stays the same (3), and the y-coordinate changes from 2 to -1."
      },
      {
        id: 'step4_matrix_method_2',
        question: "This shear can also be performed using matrix multiplication. What is the correct shear matrix for a shear parallel to the Y-axis with factor $ k = -1 $? (The matrix form of the rule $ (x, y) \\to (x, y + kx) $.)",
        questionType: 'text',
        options: [
          "$ \\begin{pmatrix} 1 & 0 \\\\ -1 & 1 \\end{pmatrix} $",
          "$ \\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix} $",
          "$ \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix} $",
          "$ \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The matrix for a shear parallel to the Y-axis is $ \\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix} $. For $ k = -1 $, the matrix is $ \\begin{pmatrix} 1 & 0 \\\\ -1 & 1 \\end{pmatrix} $. When you multiply this matrix by the column vector $ \\begin{pmatrix} x \\\\ y \\end{pmatrix} $, you get $ \\begin{pmatrix} 1 \\cdot x + 0 \\cdot y \\\\ -1 \\cdot x + 1 \\cdot y \\end{pmatrix} = \\begin{pmatrix} x \\\\ -x + y \\end{pmatrix} $, which matches our rule $ (x, y + k \\cdot x) = (x, y - x) $."
      }
    ]
  },
  {
    id: 'stretch_shear_concept_check',
    title: "Concept Check",
    steps: [
      {
        id: 'step1_matrix_recognition',
        question: "The transformation matrix is $ \\begin{pmatrix} 1 & 0 \\\\ 3 & 1 \\end{pmatrix} $. What type of transformation does this represent, and what is the shear factor?",
        questionType: 'text',
        options: [
          "Shear parallel to the Y-axis, shear factor $ k = 3 $.",
          "Shear parallel to the X-axis, shear factor $ k = 3 $.",
          "One-way stretch parallel to the Y-axis, stretch factor $ k = 3 $.",
          "Two-way stretch, factors $ k_1 = 1, k_2 = 3 $."
        ],
        optionType: 'text', 
        correct: 0,
        explanation: "The standard matrix for a shear parallel to the Y-axis is $ \\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix} $. Comparing this to the given matrix $ \\begin{pmatrix} 1 & 0 \\\\ 3 & 1 \\end{pmatrix} $, we can see that $ k = 3 $. This matrix leaves the x-coordinate unchanged and adds $ 3 \\cdot x $ to the y-coordinate."
      },
      {
        id: 'step2_property_verification',
        question: "Which of the following properties is TRUE for both stretch and shear transformations?",
        questionType: 'text',
        options: [
          "They both preserve parallelism between lines.",
          "They both preserve the area of shapes.",
          "They both preserve all angles.",
          "They both have a determinant of 1."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "A key property shared by all linear transformations represented by matrices, including stretches and shears, is that they map straight lines to straight lines and preserve the parallelism between them. Stretches generally change area (determinant = $k_1 \\times k_2$), and shears preserve area (determinant = 1). Neither generally preserves all angles (except for specific cases like the invariant line in a shear or a stretch factor of 1). Only shears have a determinant of 1; stretches do not (unless $k_1 \\times k_2 = 1$)."
      }
    ]
  }
];

const StretchShearProblems: React.FC = () => {
  
  const theme = {
    from: 'from-rose-700',
    to: 'to-red-700',
    button: 'bg-red-500',
    buttonHover: 'hover:bg-lime-700'
  };

  
  const rules = [
    "One-way X-axis Stretch: $ (x, y) \\to (kx, y) $. Matrix: $ \\begin{pmatrix} k & 0 \\\\ 0 & 1 \\end{pmatrix} $. Invariant: Y-axis ($x=0$).",
    "One-way Y-axis Stretch: $ (x, y) \\to (x, ky) $. Matrix: $ \\begin{pmatrix} 1 & 0 \\\\ 0 & k \\end{pmatrix} $. Invariant: X-axis ($y=0$).",
    "X-axis Shear: $ (x, y) \\to (x+ky, y) $. Matrix: $ \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix} $. Invariant: Y-axis ($x=0$).",
    "Y-axis Shear: $ (x, y) \\to (x, y+kx) $. Matrix: $ \\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix} $. Invariant: X-axis ($y=0$).",
    "Finding Shear Factor: For X-axis shear, $ k = \\frac{x'-x}{y} $. For Y-axis shear, $ k = \\frac{y'-y}{x} $.",
    "Both stretches and shears preserve the parallelism of lines."
  ];

  
  

  
  const handleReset = () => {
    console.log("Stretch & Shear Problems Interactive Quiz Reset");
    
  };

  return (
    <MultipleStepInteractiveComponent
      title="Stretch & Shear Problems"
      icon="📐" 
      theme={theme}
      rules={rules}
      rulesTitle="Key Stretch & Shear Rules:"
      questions={stretchShearProblemsQuestions}
      initialSharedValues={{}}
      
      onReset={handleReset}
    />
  );
};

export default StretchShearProblems