import MultipleStepInteractiveComponent, {
  MultiStepQuestion,
} from "../../Templates/MultipleStepInteractiveComponent";

const enlargementProblemsQuestions: MultiStepQuestion[] = [
  {
    id: "enlargement_forward_example",
    title: "Forward Enlargement Problem",
    steps: [
      {
        id: "step1_identify_info_1",
        question:
          "A rectangle has vertices at $ P(1, 2) $, $ Q(3, 2) $, $ R(3, 4) $, and $ S(1, 4) $. It is enlarged by a scale factor of $ k = -2 $ about the origin $ (0, 0) $. What information is given?",
        questionType: "text",
        options: [
          "Original points ($P, Q, R, S$), scale factor ($k = -2$), and centre of enlargement (origin).",
          "Only the original points.",
          "Only the scale factor.",
          "The image points and the scale factor.",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "The problem explicitly states the coordinates of the original rectangle's vertices, the scale factor ($k = -2$), and that the centre of enlargement is the origin. This is a classic 'forward enlargement' problem where we apply a known transformation to known points.",
      },
      {
        id: "step2_apply_formula_1a",
        question:
          "What is the formula for enlarging a point $ (x, y) $ by a scale factor $ k $ about the origin $ (0, 0) $? (This is the core rule for origin-centred enlargements.)",
        questionType: "text",
        options: [
          "New point $ (x', y') = (k \\cdot x, k \\cdot y) $",
          "New point $ (x', y') = (x + k, y + k) $",
          "New point $ (x', y') = (k + x, k + y) $",
          "New point $ (x', y') = (x - k, y - k) $",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "Enlargement about the origin scales the distance of each point from the origin by the factor $k$. This is achieved by multiplying both the $x$ and $y$ coordinates by $k$. So, the new coordinates are $ (k \\cdot x, k \\cdot y) $.",
      },
      {
        id: "step3_apply_formula_1b",
        question:
          "Apply the formula $ (x', y') = (k \\cdot x, k \\cdot y) $ with $ k = -2 $ to find the image of point $ P(1, 2) $. What are the coordinates of $ P' $? $ P'(k \\cdot x, k \\cdot y) = P'(? , ?) $",
        questionType: "text",
        options: [
          "$ P'(-2 \\cdot 1, -2 \\cdot 2) = P'(-2, -4) $",
          "$ P'(-2 + 1, -2 + 2) = P'(-1, 0) $",
          "$ P'(1 - (-2), 2 - (-2)) = P'(3, 4) $",
          "$ P'(1 \\cdot (-2), 2 \\cdot (-2)) = P'(-2, -4) $",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "Using the formula $ P'(k \\cdot x, k \\cdot y) $, substitute $ k = -2, x = 1, y = 2 $. This gives $ P'(-2 \\cdot 1, -2 \\cdot 2) = P'(-2, -4) $. Note that the negative scale factor means the image point is on the opposite side of the centre (origin) and twice as far away.",
      },
      {
        id: "step4_matrix_method_1",
        question:
          "The enlargement about the origin can also be performed using matrix multiplication. What is the correct enlargement matrix for scale factor $ k = -2 $? (The matrix form of the rule $ (x, y) \\to (kx, ky) $.)",
        questionType: "text",
        options: [
          "$ \\begin{pmatrix} -2 & 0 \\\\ 0 & -2 \\end{pmatrix} $",
          "$ \\begin{pmatrix} -2 & 0 \\\\ 0 & 2 \\end{pmatrix} $",
          "$ \\begin{pmatrix} 1 & -2 \\\\ -2 & 1 \\end{pmatrix} $",
          "$ \\begin{pmatrix} 0 & -2 \\\\ -2 & 0 \\end{pmatrix} $",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "The matrix that scales both the $x$ and $y$ coordinates by the same factor $k$ is $ \\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix} $. For $ k = -2 $, the matrix is $ \\begin{pmatrix} -2 & 0 \\\\ 0 & -2 \\end{pmatrix} $. When you multiply this matrix by the column vector $ \\begin{pmatrix} x \\\\ y \\end{pmatrix} $, you get $ \\begin{pmatrix} -2x \\\\ -2y \\end{pmatrix} $, which matches our rule.",
      },
    ],
  },
  {
    id: "enlargement_reverse_example",
    title: "Reverse Enlargement Problem",
    steps: [
      {
        id: "step1_identify_info_2",
        question:
          "A point $ A(2, 3) $ is enlarged about the origin to its image $ A'(6, 9) $. What type of problem is this, and what do you need to find?",
        questionType: "text",
        options: [
          "Reverse enlargement problem; find the scale factor $k$.",
          "Forward enlargement problem; find the image point.",
          "Centre finding problem; find the centre of enlargement.",
          "Verification problem; check if the enlargement is correct.",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "You are given the original point ($A$) and its image ($A'$), and the centre of enlargement (origin). The task is to determine the scale factor ($k$) that was used. This is a 'reverse enlargement' problem where you deduce the transformation parameters.",
      },
      {
        id: "step2_find_scale_factor_2a",
        question:
          "What is the formula for finding the scale factor $k$ when given an original point $ P(x, y) $, its image $ P'(x', y') $, and the centre is the origin? (Think about the ratio of distances or coordinates.)",
        questionType: "text",
        options: [
          "$ k = \\frac{x'}{x} = \\frac{y'}{y} $ (provided $x, y \\neq 0$)",
          "$ k = x' - x = y' - y $",
          "$ k = x' + x = y' + y $",
          "$ k = \\frac{x}{x'} = \\frac{y}{y'} $",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "Since the enlargement is about the origin, the image coordinates are the original coordinates multiplied by $k$. So, $ x' = k \\cdot x $ and $ y' = k \\cdot y $. Rearranging these equations gives $ k = \\frac{x'}{x} $ and $ k = \\frac{y'}{y} $. These ratios should be equal (if $x$ and $y$ are non-zero).",
      },
      {
        id: "step3_find_scale_factor_2b",
        question:
          "Apply the formula $ k = \\frac{x'}{x} $ (or $ \\frac{y'}{y} $) to find the scale factor from $ A(2, 3) $ to $ A'(6, 9) $. What is $k$?",
        questionType: "text",
        options: [
          "$ k = \\frac{x'}{x} = \\frac{6}{2} = 3 $. Check: $ \\frac{y'}{y} = \\frac{9}{3} = 3 $. So, $ k = 3 $.",
          "$ k = \\frac{x'}{x} = \\frac{2}{6} = \\frac{1}{3} $. Check: $ \\frac{y'}{y} = \\frac{3}{9} = \\frac{1}{3} $. So, $ k = \\frac{1}{3} $.",
          "$ k = x' - x = 6 - 2 = 4 $. Check: $ y' - y = 9 - 3 = 6 $. So, $ k = 4 $ (inconsistent).",
          "$ k = x' + x = 6 + 2 = 8 $. Check: $ y' + y = 9 + 3 = 12 $. So, $ k = 8 $ (inconsistent).",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "Using the formula $ k = \\frac{x'}{x} $, substitute $ x' = 6, x = 2 $. This gives $ k = \\frac{6}{2} = 3 $. It's essential to check with the $y$-coordinates: $ k = \\frac{y'}{y} = \\frac{9}{3} = 3 $. Since both ratios are equal, the scale factor is confirmed to be $ k = 3 $.",
      },
      {
        id: "step4_verify_result_2",
        question:
          "How can you verify that the scale factor $ k = 3 $ is correct for enlarging $ A(2, 3) $ to $ A'(6, 9) $ about the origin?",
        questionType: "text",
        options: [
          "Apply the forward enlargement formula: $ A'(k \\cdot x, k \\cdot y) $. Check if $ (3 \\cdot 2, 3 \\cdot 3) = (6, 9) $.",
          "Subtract the original point from the image: $ (6 - 2, 9 - 3) $.",
          "Add the original point coordinates: $ (2 + 6, 3 + 9) $.",
          "Divide the image coordinates: $ (6 / 3, 9 / 3) $.",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "To verify, use the forward enlargement formula with the original point and the calculated scale factor. $ A'(k \\cdot x, k \\cdot y) = A'(3 \\cdot 2, 3 \\cdot 3) = A'(6, 9) $. This matches the given image point $A'$, confirming the scale factor $k = 3$ is correct.",
      },
    ],
  },
  {
    id: "enlargement_concept_check",
    title: "Concept Check",
    steps: [
      {
        id: "step1_verify_concept",
        question:
          "Which of the following is NOT a correct way to verify the results of an enlargement?",
        questionType: "text",
        options: [
          "Check that all angles have changed size.",
          "Ensure all distances from the centre are scaled by the same factor $k$.",
          "Verify that corresponding sides are parallel.",
          "Confirm that the shape (number of sides, angles) is preserved.",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "A fundamental property of enlargement (a similarity transformation) is that it preserves the *shape* of the figure. This means that corresponding angles must remain equal in size, not change. The distances between points are scaled by the factor $|k|$, corresponding sides remain parallel, and the overall shape (e.g., triangle remains a triangle) is preserved. Verifying a *change* in angle size would indicate an error, as enlargement does not alter angles.",
      },
      {
        id: "step2_negative_scale_factor",
        question:
          "An enlargement with a scale factor of $ k = -0.5 $ will produce an image that is...",
        questionType: "text",
        options: [
          "Half the size of the original and on the opposite side of the centre (rotated 180° relative to the centre).",
          "Twice the size of the original and on the opposite side.",
          "Half the size of the original and on the same side as the centre.",
          "The same size as the original but rotated 90°.",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "The absolute value of the scale factor, $ |k| = 0.5 $, determines the size change. Since $ |k| < 1 $, the image is a reduction (half the size). The negative sign ($ k < 0 $) indicates that the image is formed on the opposite side of the centre of enlargement compared to the original object. This is equivalent to a 180° rotation about the centre combined with the size change.",
      },
    ],
  },
];

const EnlargementProblems: React.FC = () => {
  const theme = {
    from: "from-emerald-600",
    to: "to-teal-600",
    button: "bg-amber-500",
    buttonHover: "hover:bg-amber-500",
  };

  const rules = [
    "Forward Enlargement (Origin): $ (x, y) \\to (kx, ky) $. Matrix: $ \\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix} $.",
    "Finding Scale Factor (from Origin): $ k = \\frac{\\text{image coord}}{\\text{object coord}} = \\frac{x'}{x} = \\frac{y'}{y} $.",
    "Enlargement preserves shape (angles unchanged) and parallelism.",
    "A negative scale factor ($k < 0$) results in an image on the opposite side of the centre (inverted orientation).",
    "For enlargement about point $ C(a,b) $: $ (x,y) \\to (k(x-a)+a, k(y-b)+b) $.",
  ];

  const handleReset = () => {
    console.log("Enlargement Problems Interactive Quiz Reset");
  };

  return (
    <MultipleStepInteractiveComponent
      title="Enlargement Problems"
      icon="🔍"
      theme={theme}
      rules={rules}
      rulesTitle="Key Enlargement Rules:"
      questions={enlargementProblemsQuestions}
      initialSharedValues={{}}
      onReset={handleReset}
    />
  );
};

export default EnlargementProblems;
