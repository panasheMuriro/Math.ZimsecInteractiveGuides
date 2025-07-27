// SolvingQuadraticInequalitiesTool.tsx
import AlgebraMultiStepInteractiveTemplate, { InteractiveToolData } from '../Templates/AlgebraMultiStepInteractiveTemplate'; // Adjust path as needed

// Define data for Solving Quadratic Inequalities
const solvingQuadraticInequalitiesData: InteractiveToolData = {
  title: "Solving Quadratic Inequalities",
  description: "Find the range of values for the variable that make a quadratic inequality true by factoring and testing intervals.",
  theme: {
    primaryColor: 'amber', // Specify the primary color theme
    backgroundColorFrom: 'amber-50', // Specify the 'from' color for the background gradient
    backgroundColorTo: 'orange-100'   // Specify the 'to' color for the background gradient
  },
  steps: [
    {
      id: "standardForm",
      title: "Step 1: Standard Form",
      description: "Move all terms to one side of the inequality so that zero is on the other side. What is the inequality in the form $ax^2 + bx + c \\, ? \\, 0$?",
      type: "mcq"
    },
    {
      id: "factoredForm",
      title: "Step 2: Factor the Quadratic",
      description: "Factor the quadratic expression on the left side. What is the factored form?",
      type: "mcq"
    },
    {
      id: "roots",
      title: "Step 3: Find the Roots",
      description: "Set each factor equal to zero and solve for $x$. What are the roots (x-intercepts)?",
      type: "mcq"
    },
    {
      id: "intervals",
      title: "Step 4: Determine Intervals",
      description: "The roots divide the number line into intervals. List these intervals.",
      type: "mcq"
    },
    {
      id: "testPoint1",
      title: "Step 5a: Test Point (Interval 1)",
      description: "Choose a test point from the first interval and substitute it into the *factored* inequality. Is the result true or false?",
      type: "mcq"
    },
    {
      id: "testPoint2",
      title: "Step 5b: Test Point (Interval 2)",
      description: "Choose a test point from the second interval and substitute it into the *factored* inequality. Is the result true or false?",
      type: "mcq"
    },
    {
      id: "testPoint3",
      title: "Step 5c: Test Point (Interval 3)",
      description: "Choose a test point from the third interval and substitute it into the *factored* inequality. Is the result true or false?",
      type: "mcq"
    },
    {
      id: "solutionInterval",
      title: "Step 6: Write the Solution",
      description: "Based on the test results, which intervals make the original inequality true? Write the solution as an inequality or interval notation, including/excluding roots as appropriate.",
      type: "mcq"
    },
    {
      id: "checkValue",
      title: "Step 7: Choose a Check Value",
      description: "Select a value that fits within your solution range to verify.",
      type: "mcq"
    },
    {
      id: "checkSubstitution",
      title: "Step 8: Substitute and Verify",
      description: "Substitute the chosen value back into the *original* inequality. Is the resulting statement true?",
      type: "mcq"
    }
  ],
  mcqOptionsPerProblem: [
    // --- Problem 1: x^2 - 5x + 6 > 0 ---
    {
      standardForm: ["x^2 - 5x + 6 > 0", "x^2 - 5x + 6 < 0", "x^2 - 5x + 6 ≥ 0", "x^2 - 5x + 6 = 0"],
      factoredForm: ["(x - 2)(x - 3) > 0", "(x - 2)(x - 3) < 0", "(x + 2)(x + 3) > 0", "x^2 - 5x + 6 > 0"],
      roots: ["x = 2 and x = 3", "x = -2 and x = -3", "x = 5 and x = 6", "x = 0"],
      intervals: ["(-∞, 2), (2, 3), (3, ∞)", "(-∞, 3), (3, 2), (2, ∞)", "[2, 3]", "(-2, 3)"],
      testPoint1: ["True (e.g., x=1)", "False (e.g., x=1)", "True (e.g., x=2.5)", "False (e.g., x=4)"],
      testPoint2: ["False (e.g., x=2.5)", "True (e.g., x=2.5)", "False (e.g., x=1)", "True (e.g., x=4)"],
      testPoint3: ["True (e.g., x=4)", "False (e.g., x=4)", "True (e.g., x=2.5)", "False (e.g., x=1)"],
      solutionInterval: ["x < 2 or x > 3", "2 < x < 3", "x ≤ 2 or x ≥ 3", "x = 2 or x = 3"],
      checkValue: ["x = 4", "x = 2", "x = 3", "x = 1"],
      checkSubstitution: ["(4 - 2)(4 - 3) > 0", "2(1) > 0", "2 > 0", "True"]
    },
    // --- Problem 2: x^2 - 4 ≤ 0 ---
    {
      standardForm: ["x^2 - 4 ≤ 0", "x^2 - 4 ≥ 0", "x^2 - 4 < 0", "x^2 - 4 > 0"],
      factoredForm: ["(x - 2)(x + 2) ≤ 0", "(x - 2)(x + 2) ≥ 0", "(x - 2)(x + 2) < 0", "x^2 - 4 ≤ 0"],
      roots: ["x = 2 and x = -2", "x = 4 and x = -4", "x = 2 and x = 0", "x = 1 and x = -1"],
      intervals: ["(-∞, -2), (-2, 2), (2, ∞)", "(-∞, 2), (2, -2), (-2, ∞)", "[-2, 2]", "(-2, 2)"],
      testPoint1: ["False (e.g., x=-3)", "True (e.g., x=-3)", "False (e.g., x=0)", "True (e.g., x=3)"],
      testPoint2: ["True (e.g., x=0)", "False (e.g., x=0)", "True (e.g., x=-3)", "False (e.g., x=3)"],
      testPoint3: ["False (e.g., x=3)", "True (e.g., x=3)", "False (e.g., x=0)", "True (e.g., x=-3)"],
      solutionInterval: ["-2 ≤ x ≤ 2", "-2 < x < 2", "x ≤ -2 or x ≥ 2", "x < -2 or x > 2"],
      checkValue: ["x = 0", "x = 2", "x = -2", "x = 3"],
      checkSubstitution: ["(0 - 2)(0 + 2) ≤ 0", "(-2)(2) ≤ 0", "-4 ≤ 0", "True"]
    },
    // --- Problem 3: 2x^2 + 3x - 2 < 0 ---
    {
      standardForm: ["2x^2 + 3x - 2 < 0", "2x^2 + 3x - 2 > 0", "2x^2 + 3x - 2 ≤ 0", "2x^2 + 3x - 2 ≥ 0"],
      factoredForm: ["(2x - 1)(x + 2) < 0", "(2x - 1)(x + 2) > 0", "(x - 1)(2x + 2) < 0", "2x^2 + 3x - 2 < 0"],
      roots: ["x = 1/2 and x = -2", "x = -1/2 and x = 2", "x = 1 and x = -2", "x = 0 and x = -2"],
      intervals: ["(-∞, -2), (-2, 1/2), (1/2, ∞)", "(-∞, 1/2), (1/2, -2), (-2, ∞)", "(-2, 1/2)", "(-∞, -2) or (1/2, ∞)"],
      testPoint1: ["False (e.g., x=-3)", "True (e.g., x=-3)", "False (e.g., x=-1)", "True (e.g., x=1)"],
      testPoint2: ["True (e.g., x=-1)", "False (e.g., x=-1)", "True (e.g., x=-3)", "False (e.g., x=1)"],
      testPoint3: ["False (e.g., x=1)", "True (e.g., x=1)", "False (e.g., x=-1)", "True (e.g., x=-3)"],
      solutionInterval: ["-2 < x < 1/2", "-2 ≤ x ≤ 1/2", "x < -2 or x > 1/2", "x ≤ -2 or x ≥ 1/2"],
      checkValue: ["x = 0", "x = 1/2", "x = -2", "x = 1"],
      checkSubstitution: ["(2(0) - 1)(0 + 2) < 0", "(-1)(2) < 0", "-2 < 0", "True"]
    },
     // --- Problem 4: x^2 - x - 6 < 0 (Practice Example) ---
     {
        standardForm: ["x^2 - x - 6 < 0", "x^2 - x - 6 > 0", "x^2 - x - 6 ≤ 0", "x^2 - x - 6 ≥ 0"],
        factoredForm: ["(x - 3)(x + 2) < 0", "(x - 3)(x + 2) > 0", "(x + 3)(x - 2) < 0", "x^2 - x - 6 < 0"],
        roots: ["x = 3 and x = -2", "x = -3 and x = 2", "x = 6 and x = -1", "x = 1 and x = -6"],
        intervals: ["(-∞, -2), (-2, 3), (3, ∞)", "(-∞, 3), (3, -2), (-2, ∞)", "(-2, 3)", "(-∞, -2) or (3, ∞)"],
        testPoint1: ["False (e.g., x=-3)", "True (e.g., x=-3)", "False (e.g., x=0)", "True (e.g., x=4)"],
        testPoint2: ["True (e.g., x=0)", "False (e.g., x=0)", "True (e.g., x=-3)", "False (e.g., x=4)"],
        testPoint3: ["False (e.g., x=4)", "True (e.g., x=4)", "False (e.g., x=0)", "True (e.g., x=-3)"],
        solutionInterval: ["-2 < x < 3", "-2 ≤ x ≤ 3", "x < -2 or x > 3", "x ≤ -2 or x ≥ 3"],
        checkValue: ["x = 0", "x = 3", "x = -2", "x = 4"],
        checkSubstitution: ["(0 - 3)(0 + 2) < 0", "(-3)(2) < 0", "-6 < 0", "True"]
      }
  ],
  practiceProblems: [
    // --- Problem 1: x^2 - 5x + 6 > 0 ---
    {
      expression: "x^2 - 5x + 6 > 0",
      solution: {
        standardForm: "x^2 - 5x + 6 > 0", // Already in standard form
        factoredForm: "(x - 2)(x - 3) > 0", // Factor the quadratic
        roots: "x = 2 and x = 3", // Solve x-2=0 and x-3=0
        intervals: "(-∞, 2), (2, 3), (3, ∞)", // Intervals defined by roots
        testPoint1: "True (e.g., x=1)", // Test x=1: (1-2)(1-3) = (-1)(-2) = 2 > 0
        testPoint2: "False (e.g., x=2.5)", // Test x=2.5: (0.5)(-0.5) = -0.25 < 0
        testPoint3: "True (e.g., x=4)", // Test x=4: (2)(1) = 2 > 0
        solutionInterval: "x < 2 \\text{ or } x > 3", // Union of intervals where true
        checkValue: "x = 4", // Value to test (must satisfy x < 2 or x > 3)
        checkSubstitution: "(4 - 2)(4 - 3) > 0" // Substitute x=4 into factored form
      },
      explanation: {
        standardForm: "The inequality $x^2 - 5x + 6 > 0$ is already written with all terms on the left side and zero on the right side. This is the standard form $ax^2 + bx + c > 0$.",
        factoredForm: "To solve the inequality, we first factor the quadratic expression on the left. We look for two numbers that multiply to $6$ (the constant term, $c$) and add up to $-5$ (the coefficient of $x$, $b$). These numbers are $-2$ and $-3$ because $(-2) \\times (-3) = 6$ and $(-2) + (-3) = -5$. Therefore, the factored form is $(x - 2)(x - 3) > 0$.",
        roots: "The roots (or zeros) of the quadratic are the values of $x$ that make the expression equal to zero. Setting each factor equal to zero: $x - 2 = 0$ gives $x = 2$, and $x - 3 = 0$ gives $x = 3$.",
        intervals: "The roots $x = 2$ and $x = 3$ divide the number line into three distinct intervals: 1) All numbers less than 2: $(-\\infty, 2)$, 2) All numbers between 2 and 3: $(2, 3)$, 3) All numbers greater than 3: $(3, \\infty)$.",
        testPoint1: "We test a point from the first interval $(-\\infty, 2)$. Let's choose $x = 1$. Substitute into the factored inequality: $(1 - 2)(1 - 3) = (-1)(-2) = 2$. Since $2 > 0$, the inequality is **true** for this interval.",
        testPoint2: "We test a point from the second interval $(2, 3)$. Let's choose $x = 2.5$. Substitute: $(2.5 - 2)(2.5 - 3) = (0.5)(-0.5) = -0.25$. Since $-0.25 < 0$, the inequality is **false** for this interval.",
        testPoint3: "We test a point from the third interval $(3, \\infty)$. Let's choose $x = 4$. Substitute: $(4 - 2)(4 - 3) = (2)(1) = 2$. Since $2 > 0$, the inequality is **true** for this interval.",
        solutionInterval: "The original inequality $(x - 2)(x - 3) > 0$ is true when the product of the factors is positive. From our tests, this occurs in the intervals $(-\\infty, 2)$ and $(3, \\infty)$. Because the inequality is strict ($>$), the roots $x = 2$ and $x = 3$ are not included. The solution is $x < 2$ or $x > 3$.",
        checkValue: "To verify our solution, we pick a value that satisfies $x < 2$ or $x > 3$. Let's choose $x = 4$ (which is greater than 3).",
        checkSubstitution: "Substitute $x = 4$ into the *factored* form of the inequality: $(4 - 2)(4 - 3) > 0$. This simplifies to checking if $2 \\times 1 = 2$ is greater than 0, which it is."
      },
      hint: "Start by factoring the quadratic $x^2 - 5x + 6$. Find two numbers that multiply to 6 and add to -5. Once factored, determine the roots and test points in each interval created by the roots."
    },
    // --- Problem 2: x^2 - 4 ≤ 0 ---
    {
      expression: "x^2 - 4 \\leq 0",
      solution: {
        standardForm: "x^2 - 4 ≤ 0", // Already in standard form
        factoredForm: "(x - 2)(x + 2) ≤ 0", // Factor the difference of squares
        roots: "x = 2 and x = -2", // Solve x-2=0 and x+2=0
        intervals: "(-∞, -2), (-2, 2), (2, ∞)", // Intervals defined by roots
        testPoint1: "False (e.g., x=-3)", // Test x=-3: (-5)(-1) = 5 > 0
        testPoint2: "True (e.g., x=0)", // Test x=0: (-2)(2) = -4 < 0
        testPoint3: "False (e.g., x=3)", // Test x=3: (1)(5) = 5 > 0
        solutionInterval: "-2 \\leq x \\leq 2", // Interval where true, including roots
        checkValue: "x = 0", // Value to test (must satisfy -2 ≤ x ≤ 2)
        checkSubstitution: "(0 - 2)(0 + 2) \\leq 0" // Substitute x=0 into factored form
      },
      explanation: {
        standardForm: "The inequality $x^2 - 4 \\leq 0$ is already in standard form $ax^2 + bx + c \\leq 0$.",
        factoredForm: "The left side is a difference of squares, $x^2 - 4 = x^2 - 2^2$. This factors as $(x - 2)(x + 2)$. The inequality becomes $(x - 2)(x + 2) \\leq 0$.",
        roots: "Setting each factor to zero: $x - 2 = 0$ gives $x = 2$, and $x + 2 = 0$ gives $x = -2$.",
        intervals: "The roots $x = -2$ and $x = 2$ divide the number line into three intervals: $(-\\infty, -2)$, $(-2, 2)$, and $(2, \\infty)$.",
        testPoint1: "Test a point from $(-\\infty, -2)$, say $x = -3$: $(-3 - 2)(-3 + 2) = (-5)(-1) = 5$. Since $5 > 0$, the inequality is **false** for this interval.",
        testPoint2: "Test a point from $(-2, 2)$, say $x = 0$: $(0 - 2)(0 + 2) = (-2)(2) = -4$. Since $-4 \\leq 0$, the inequality is **true** for this interval.",
        testPoint3: "Test a point from $(2, \\infty)$, say $x = 3$: $(3 - 2)(3 + 2) = (1)(5) = 5$. Since $5 > 0$, the inequality is **false** for this interval.",
        solutionInterval: "The inequality $(x - 2)(x + 2) \\leq 0$ is true when the product is less than or equal to zero. Our test shows this happens in the interval $(-2, 2)$. Because the inequality is $\\leq$ (less than or equal to), we include the roots $x = -2$ and $x = 2$. The solution is $-2 \\leq x \\leq 2$.",
        checkValue: "To verify, choose a value within the solution range $-2 \\leq x \\leq 2$. Let's use $x = 0$.",
        checkSubstitution: "Substitute $x = 0$ into the factored inequality: $(0 - 2)(0 + 2) \\leq 0$. This checks if $(-2)(2) = -4$ is less than or equal to 0, which it is."
      },
      hint: "Notice that $x^2 - 4$ is a difference of squares ($a^2 - b^2$). How does that factor? Find the roots and test a point in each of the three intervals they create. Remember to include the roots because of the '≤' sign."
    },
    // --- Problem 3: 2x^2 + 3x - 2 < 0 ---
    {
      expression: "2x^2 + 3x - 2 < 0",
      solution: {
        standardForm: "2x^2 + 3x - 2 < 0", // Already in standard form
        factoredForm: "(2x - 1)(x + 2) < 0", // Factor the quadratic (AC method or grouping)
        roots: "x = 1/2 and x = -2", // Solve 2x-1=0 and x+2=0
        intervals: "(-∞, -2), (-2, 1/2), (1/2, ∞)", // Intervals defined by roots
        testPoint1: "False (e.g., x=-3)", // Test x=-3: (-7)(-1) = 7 > 0
        testPoint2: "True (e.g., x=-1)", // Test x=-1: (-3)(1) = -3 < 0
        testPoint3: "False (e.g., x=1)", // Test x=1: (1)(3) = 3 > 0
        solutionInterval: "-2 < x < 1/2", // Interval where true, excluding roots
        checkValue: "x = 0", // Value to test (must satisfy -2 < x < 1/2)
        checkSubstitution: "(2(0) - 1)(0 + 2) < 0" // Substitute x=0 into factored form
      },
      explanation: {
        standardForm: "The inequality $2x^2 + 3x - 2 < 0$ is already in standard form $ax^2 + bx + c < 0$.",
        factoredForm: "Factoring $2x^2 + 3x - 2$ can be done using the 'ac' method or grouping. Multiply $a \\times c = 2 \\times (-2) = -4$. We need two numbers that multiply to $-4$ and add to $b = 3$. These numbers are $4$ and $-1$. Rewrite the middle term: $2x^2 + 4x - x - 2$. Group: $(2x^2 + 4x) + (-x - 2) = 2x(x + 2) - 1(x + 2)$. Factor out $(x + 2)$: $(2x - 1)(x + 2)$. The inequality is $(2x - 1)(x + 2) < 0$.",
        roots: "Set each factor to zero: $2x - 1 = 0$ leads to $2x = 1$, so $x = \\frac{1}{2}$. $x + 2 = 0$ leads to $x = -2$.",
        intervals: "The roots $x = -2$ and $x = \\frac{1}{2}$ divide the number line into three intervals: $(-\\infty, -2)$, $(-2, \\frac{1}{2})$, and $(\\frac{1}{2}, \\infty)$.",
        testPoint1: "Test a point from $(-\\infty, -2)$, say $x = -3$: $(2(-3) - 1)(-3 + 2) = (-6 - 1)(-1) = (-7)(-1) = 7$. Since $7 > 0$, the inequality is **false** for this interval.",
        testPoint2: "Test a point from $(-2, \\frac{1}{2})$, say $x = -1$: $(2(-1) - 1)(-1 + 2) = (-2 - 1)(1) = (-3)(1) = -3$. Since $-3 < 0$, the inequality is **true** for this interval.",
        testPoint3: "Test a point from $(\\frac{1}{2}, \\infty)$, say $x = 1$: $(2(1) - 1)(1 + 2) = (2 - 1)(3) = (1)(3) = 3$. Since $3 > 0$, the inequality is **false** for this interval.",
        solutionInterval: "The inequality $(2x - 1)(x + 2) < 0$ is true when the product is negative. Our test shows this happens in the interval $(-2, \\frac{1}{2})$. Because the inequality is strict ($<$), we do not include the roots $x = -2$ and $x = \\frac{1}{2}$. The solution is $-2 < x < \\frac{1}{2}$.",
        checkValue: "To verify, choose a value within the solution range $-2 < x < \\frac{1}{2}$. Let's use $x = 0$.",
        checkSubstitution: "Substitute $x = 0$ into the factored inequality: $(2(0) - 1)(0 + 2) < 0$. This checks if $(-1)(2) = -2$ is less than 0, which it is."
      },
      hint: "This quadratic has a leading coefficient other than 1. Try the 'ac' method to factor: multiply a*c, find factors of that product which add up to b, then split the middle term. Once factored, find the roots and test the intervals."
    },
     // --- Problem 4: x^2 - x - 6 < 0 ---
     {
        expression: "x^2 - x - 6 < 0",
        solution: {
            standardForm: "x^2 - x - 6 < 0", // Already in standard form
            factoredForm: "(x - 3)(x + 2) < 0", // Factor the quadratic
            roots: "x = 3 and x = -2", // Solve x-3=0 and x+2=0
            intervals: "(-∞, -2), (-2, 3), (3, ∞)", // Intervals defined by roots
            testPoint1: "False (e.g., x=-3)", // Test x=-3: (-5)(-1) = 5 > 0
            testPoint2: "True (e.g., x=0)", // Test x=0: (-3)(2) = -6 < 0
            testPoint3: "False (e.g., x=4)", // Test x=4: (1)(6) = 6 > 0
            solutionInterval: "-2 < x < 3", // Interval where true, excluding roots
            checkValue: "x = 0", // Value to test (must satisfy -2 < x < 3)
            checkSubstitution: "(0 - 3)(0 + 2) < 0" // Substitute x=0 into factored form
        },
        explanation: {
            standardForm: "The inequality $x^2 - x - 6 < 0$ is already in standard form $ax^2 + bx + c < 0$.",
            factoredForm: "We need to factor $x^2 - x - 6$. Find two numbers that multiply to $-6$ (the constant term, $c$) and add up to $-1$ (the coefficient of $x$, $b$). These numbers are $-3$ and $2$ because $(-3) \\times 2 = -6$ and $(-3) + 2 = -1$. Therefore, the factored form is $(x - 3)(x + 2) < 0$.",
            roots: "Setting each factor equal to zero: $x - 3 = 0$ gives $x = 3$, and $x + 2 = 0$ gives $x = -2$.",
            intervals: "The roots $x = -2$ and $x = 3$ divide the number line into three intervals: $(-\\infty, -2)$, $(-2, 3)$, and $(3, \\infty)$.",
            testPoint1: "Test a point from the first interval $(-\\infty, -2)$, say $x = -3$: $(-3 - 3)(-3 + 2) = (-6)(-1) = 6$. Since $6 > 0$, the inequality is **false** for this interval.",
            testPoint2: "Test a point from the second interval $(-2, 3)$, say $x = 0$: $(0 - 3)(0 + 2) = (-3)(2) = -6$. Since $-6 < 0$, the inequality is **true** for this interval.",
            testPoint3: "Test a point from the third interval $(3, \\infty)$, say $x = 4$: $(4 - 3)(4 + 2) = (1)(6) = 6$. Since $6 > 0$, the inequality is **false** for this interval.",
            solutionInterval: "The inequality $(x - 3)(x + 2) < 0$ is true when the product of the factors is negative. Our tests show this occurs in the interval $(-2, 3)$. Because the inequality is strict ($<$), the roots $x = -2$ and $x = 3$ are not included. The solution is $-2 < x < 3$.",
            checkValue: "To verify our solution, we pick a value that satisfies $-2 < x < 3$. Let's choose $x = 0$.",
            checkSubstitution: "Substitute $x = 0$ into the *factored* form of the inequality: $(0 - 3)(0 + 2) < 0$. This simplifies to checking if $(-3) \\times 2 = -6$ is less than 0, which it is."
        },
        hint: "Factor $x^2 - x - 6$ by finding two numbers that multiply to -6 and add to -1. Once you have the factors, determine the roots, create the intervals, and test a point in each interval. Don't forget, the inequality is strict (<), so the roots are not part of the solution."
    }
  ]
};

export default function SolvingQuadraticInequalitiesTool() {
  return (
    
    <AlgebraMultiStepInteractiveTemplate toolData={solvingQuadraticInequalitiesData} />
  );
}
