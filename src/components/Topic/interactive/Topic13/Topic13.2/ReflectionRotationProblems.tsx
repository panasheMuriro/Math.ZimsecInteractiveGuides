import MultipleStepInteractiveComponent, {
  MultiStepQuestion,
} from "../../Templates/MultipleStepInteractiveComponent";
const reflectionRotationProblemsQuestions: MultiStepQuestion[] = [
  {
    id: "reflection_rules_example",
    title: "Applying Reflection Rules",
    steps: [
      {
        id: "step1_identify_line",
        question:
          "You need to reflect point $ P(3, -2) $ over the line $ y = x $. What is the first step?",
        questionType: "text",
        options: [
          "Identify the correct reflection rule for the line $ y = x $.",
          "Plot the point $ P(3, -2) $ on a graph.",
          "Calculate the distance from $ P $ to the line $ y = x $.",
          "Guess the coordinates of the image point $ P' $.",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "The first step in solving a reflection problem is to identify the line of reflection and recall or derive the corresponding rule. For the line $ y = x $, the rule is to swap the $ x $ and $ y $ coordinates.",
      },
      {
        id: "step2_apply_rule",
        question:
          "What is the rule for reflecting a point $ (x, y) $ over the line $ y = x $? (This is a key rule to memorize.)",
        questionType: "text",
        options: [
          "$ (x, y) \\to (y, x) $",
          "$ (x, y) \\to (-x, y) $",
          "$ (x, y) \\to (x, -y) $",
          "$ (x, y) \\to (-y, -x) $",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "The fundamental rule for reflecting a point over the line $ y = x $ is to interchange the $ x $-coordinate and the $ y $-coordinate. So, the image of $ (x, y) $ is $ (y, x) $.",
      },
      {
        id: "step3_calculate_image",
        question:
          "Apply the rule $ (x, y) \\to (y, x) $ to the point $ P(3, -2) $. What are the coordinates of the image point $ P' $? $ P'(x, y) \\to P'(y, x) = P'(? , ?) $",
        questionType: "text",
        options: [
          "$ P'(3, -2) \\to P'(-2, 3) $",
          "$ P'(3, -2) \\to P'(2, -3) $",
          "$ P'(3, -2) \\to P'(-3, 2) $",
          "$ P'(3, -2) \\to P'(3, -2) $",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "Using the rule $ (x, y) \\to (y, x) $, we substitute $ x = 3 $ and $ y = -2 $. This gives the image point $ P'(-2, 3) $.",
      },
      {
        id: "step4_matrix_method",
        question:
          "The reflection over the line $ y = x $ can also be performed using matrix multiplication. What is the correct reflection matrix?",
        questionType: "text",
        options: [
          "$ \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} $",
          "$ \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} $",
          "$ \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix} $",
          "$ \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} $",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "The matrix that swaps the $ x $ and $ y $ coordinates is $ \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} $. When you multiply this matrix by the column vector $ \\begin{pmatrix} x \\\\ y \\end{pmatrix} $, you get $ \\begin{pmatrix} y \\\\ x \\end{pmatrix} $, which is the correct result for reflecting over $ y = x $.",
      },
    ],
  },
  {
    id: "rotation_rules_example",
    title: "Applying Rotation Rules",
    steps: [
      {
        id: "step1_identify_rotation",
        question:
          "A point $ Q(2, 3) $ is rotated 90° counterclockwise about the origin. What information is essential to start solving this?",
        questionType: "text",
        options: [
          "The centre of rotation (origin) and the angle/direction (90° CCW).",
          "The coordinates of the point $ Q $ only.",
          "The distance from $ Q $ to the origin.",
          "The final coordinates of the image point $ Q' $.",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "To perform a rotation, you must know the centre of rotation (here, the origin) and the angle and direction of rotation (here, 90° counterclockwise). This information determines which rule or matrix to use.",
      },
      {
        id: "step2_rule_or_matrix",
        question:
          "For a 90° counterclockwise rotation about the origin, which rule or matrix correctly transforms a point $ (x, y) $? (Choose the most direct method for this angle.)",
        questionType: "text",
        options: [
          "Matrix: $ \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} $",
          "Rule: $ (x, y) \\to (-y, x) $",
          "Rule: $ (x, y) \\to (y, -x) $",
          "Matrix: $ \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} $",
        ],
        optionType: "text",
        correct: 1,
        explanation:
          "While the matrix $ \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} $ is correct, the equivalent rule $ (x, y) \\to (-y, x) $ is often quicker to apply for a 90° CCW rotation. For 180° it's $ (x, y) \\to (-x, -y) $, and for 270° CCW (or 90° CW) it's $ (x, y) \\to (y, -x) $.",
      },
      {
        id: "step3_apply_rotation",
        question:
          "Apply the rule $ (x, y) \\to (-y, x) $ to rotate point $ Q(2, 3) $ 90° counterclockwise about the origin. What are the coordinates of $ Q' $? $ Q'(x, y) \\to Q'(-y, x) = Q'(? , ?) $",
        questionType: "text",
        options: [
          "$ Q'(2, 3) \\to Q'(-3, 2) $",
          "$ Q'(2, 3) \\to Q'(3, -2) $",
          "$ Q'(2, 3) \\to Q'(-2, -3) $",
          "$ Q'(2, 3) \\to Q'(2, 3) $",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "Using the rule $ (x, y) \\to (-y, x) $, substitute $ x = 2 $ and $ y = 3 $. This gives the image point $ Q'(-3, 2) $.",
      },
      {
        id: "step4_verify_rotation",
        question:
          "How can you verify that the rotation of $ Q(2, 3) $ to $ Q'(-3, 2) $ by 90° CCW is correct? (There are multiple ways.)",
        questionType: "text",
        options: [
          "Check that the distance from the origin is preserved: $ \\sqrt{2^2 + 3^2} = \\sqrt{(-3)^2 + 2^2} $.",
          "Check that the angle turned is 90° by using the dot product or a protractor conceptually.",
          "Plot the points and see if the turn looks like 90° CCW.",
          "All of the above.",
        ],
        optionType: "text",
        correct: 3,
        explanation:
          "Verification is crucial. You can check that the distance from the centre of rotation (origin) is the same for both $ Q $ and $ Q' $ (distance is preserved in rotations). You can also confirm that the angle between the lines from the origin to $ Q $ and from the origin to $ Q' $ is indeed 90°, and that the direction is counterclockwise. Plotting confirms the visual correctness.",
      },
    ],
  },
  {
    id: "reverse_problems_concept",
    title: "Reverse Problems: Finding Transformations",
    steps: [
      {
        id: "step1_find_reflection_axis",
        question:
          "A point $ A(1, 4) $ is reflected to its image $ A'(5, 4) $. How would you find the axis of reflection?",
        questionType: "text",
        options: [
          "Find the perpendicular bisector of the line segment $ AA' $. The midpoint is on the axis.",
          "Average the x-coordinates: $ x = (1 + 5) / 2 $. The axis is the vertical line through this x-value.",
          "Since the y-coordinates are the same, the axis must be vertical. Find the x-value halfway between 1 and 5.",
          "All of the above are correct methods.",
        ],
        optionType: "text",
        correct: 3,
        explanation:
          "The axis of reflection is the perpendicular bisector of the segment connecting any point and its image. In this case, since $ A $ and $ A' $ have the same $ y $-coordinate, the segment $ AA' $ is horizontal. Its perpendicular bisector is a vertical line. The midpoint is $ ((1+5)/2, (4+4)/2) = (3, 4) $. Therefore, the axis of reflection is the vertical line $ x = 3 $. All the methods lead to the same conclusion.",
      },
      {
        id: "step2_find_rotation_centre",
        question:
          "You are given two corresponding points $ B(0, 1) $ and $ B'(0, -1) $, and another pair $ C(2, 0) $ and $ C'(-2, 0) $. How would you find the centre and angle of the rotation that maps $ B $ to $ B' $ and $ C $ to $ C' $?",
        questionType: "text",
        options: [
          "Find the intersection of the perpendicular bisectors of $ BB' $ and $ CC' $. This intersection is the centre. Then measure the angle.",
          "The centre is the origin (0,0). The angle is 180° because $ (x,y) \\to (-x,-y) $.",
          "Guess the centre and check if the distances and angles match.",
          "Only the first method is a general and reliable way to find the centre.",
        ],
        optionType: "text",
        correct: 3,
        explanation:
          "The standard method for finding the centre of an unknown rotation is to find the perpendicular bisectors of the segments connecting two pairs of corresponding points. The point where these bisectors intersect is the centre of rotation. Once the centre is known, you can measure the angle by looking at the angle formed by lines from the centre to a point and its image. While in this specific example, the origin and 180° is a quick observation, the perpendicular bisector method is the robust general approach.",
      },
      {
        id: "step3_composite_transformations",
        question:
          "A shape is first reflected over the x-axis, then the resulting image is reflected over the y-axis. What single transformation is equivalent to this sequence?",
        questionType: "text",
        options: [
          "A rotation of 180° about the origin.",
          "A reflection over the line $ y = x $.",
          "A reflection over the line $ y = -x $.",
          "A translation.",
        ],
        optionType: "text",
        correct: 0,
        explanation:
          "Let's track a general point $ (x, y) $: 1. Reflect over x-axis: $ (x, y) \\to (x, -y) $. 2. Reflect the result $ (x, -y) $ over the y-axis: $ (x, -y) \\to (-x, -y) $. The final result is $ (x, y) \\to (-x, -y) $, which is the rule for a 180° rotation about the origin. This demonstrates how combining two reflections over perpendicular axes results in a half-turn rotation.",
      },
    ],
  },
];

const ReflectionRotationProblems: React.FC = () => {
  const theme = {
    from: "from-purple-500",
    to: "to-indigo-600",
    button: "bg-purple-600",
    buttonHover: "hover:bg-purple-700",
  };

  const rules = [
    "Reflection over $ y = x $: $ (x, y) \\to (y, x) $. Matrix: $ \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} $.",
    "90° CCW Rotation about origin: $ (x, y) \\to (-y, x) $. Matrix: $ \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} $.",
    "180° Rotation about origin: $ (x, y) \\to (-x, -y) $. Matrix: $ \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} $.",
    "Axis of reflection is the perpendicular bisector of segments joining points and their images.",
    "Centre of rotation is found at the intersection of perpendicular bisectors of segments joining corresponding points.",
    "Two reflections over perpendicular lines result in a 180° rotation.",
  ];

  const handleReset = () => {
    console.log("Reflection & Rotation Problems Interactive Quiz Reset");
  };

  return (
    <MultipleStepInteractiveComponent
      title="Reflection & Rotation Problems"
      icon="🌀"
      theme={theme}
      rules={rules}
      rulesTitle="Key Transformation Rules:"
      questions={reflectionRotationProblemsQuestions}
      initialSharedValues={{}}
      onReset={handleReset}
    />
  );
};

export default ReflectionRotationProblems;
