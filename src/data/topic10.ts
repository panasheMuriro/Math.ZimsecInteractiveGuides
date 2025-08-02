import { Section, QuizQuestion } from "../types";

export const sections: Section[] = [
  {
    title: "Pythagoras Theorem and Triples",
    icon: "📐",
    content: `The Pythagoras theorem is a fundamental principle in geometry, relating the sides of right-angled triangles, with applications in real-world problem-solving. Pythagorean triples extend this concept to sets of integers satisfying the theorem.

**Syllabus Objectives**:
- Derive the Pythagoras theorem.
- Solve right-angled triangles by applying the Pythagoras theorem.
- Show whether given triples are Pythagorean.
- Solve problems in everyday life using the Pythagoras theorem.
- Represent life phenomena using mathematical models involving the Pythagoras theorem.
- Use ICT tools (e.g., geometry software, calculators) to verify calculations and model phenomena.`,
    subsections: [
      {
        title: "Pythagoras Theorem",
        content: `**PYTHAGORAS THEOREM**

**Formula:**
- For a right-angled triangle with sides $a$, $b$ (legs) and $c$ (hypotenuse):
  $$a^2 + b^2 = c^2$$

\`\`\`pythagoras-demo-1
\`\`\`


**Derivation:**
- Use geometric methods (e.g., counting squares on a grid) to show $a^2 + b^2 = c^2$.
- Example: Divide a square into two squares and two rectangles to demonstrate.


**Applications:**
- Find the length of an unknown side (e.g., diagonal of a rectangle, height of a ladder).
- Real-world problems: Calculate distances in construction, navigation, or surveying.

**Examples:**
- If $a = 3$, $b = 4$, find $c$: $c^2 = 3^2 + 4^2 = 9 + 16 = 25$, so $c = 5$.
- If $c = 10$, $a = 6$, find $b$: $b^2 = 10^2 - 6^2 = 100 - 36 = 64$, so $b = 8$.

**Syllabus Objectives**:
- Derive the Pythagoras theorem using geometric methods (e.g., counting squares).
- Solve right-angled triangles accurately to find unknown sides.
- Apply the Pythagoras theorem to solve real-life problems.
- Use ICT tools to verify calculations and visualize right triangles.`,
        interactive: "pythagoras-theorem",
      },
      {
        title: "Pythagorean Triples",
        content: `**PYTHAGOREAN TRIPLES**

**Definition:**
- A set of three positive integers $(a, b, c)$ satisfying $a^2 + b^2 = c^2$.
- Examples: $(3, 4, 5)$, $(5, 12, 13)$, $(7, 24, 25)$.

**Verification:**
- Check if $a^2 + b^2 = c^2$ holds.
- Example: For $(3, 4, 5)$, $3^2 + 4^2 = 9 + 16 = 25 = 5^2$ (Pythagorean).
- Non-example: For $(2, 3, 4)$, $2^2 + 3^2 = 4 + 9 = 13 \neq 16 = 4^2$ (not Pythagorean).

**Generating Triples:**
- Use formula: For integers $m > n > 0$, $a = m^2 - n^2$, $b = 2mn$, $c = m^2 + n^2$.
- Example: $m = 2$, $n = 1$: $a = 4 - 1 = 3$, $b = 2 \\cdot 2 \\cdot 1 = 4$, $c = 4 + 1 = 5$ → $(3, 4, 5)$.

**Applications:**
- Identify triples in geometric problems or designs.
- Model real-life phenomena (e.g., dimensions of right-angled structures).

**Syllabus Objectives**:
- Show whether given triples are Pythagorean by verifying $a^2 + b^2 = c^2$.
- Solve problems involving Pythagorean triples in real-world contexts.
- Represent life phenomena using Pythagorean triples.
- Use ICT tools to check triples and explore their applications.`,
        interactive: "pythagorean-triples",
      },
    ],
  },
  {
    title: "Trigonometric Ratios",
    icon: "📏",
    content: `Trigonometric ratios define relationships between angles and sides in triangles, enabling the solution of right-angled triangles in two dimensions for acute and obtuse angles.

**Syllabus Objectives**:
- Find sine, cosine, and tangent of acute and obtuse angles.
- Solve problems involving right-angled triangles in two dimensions.
- Apply mathematical reasoning to communicate trigonometric solutions clearly.
- Use ICT tools (e.g., scientific calculators, geometry software) to compute trigonometric ratios.`,
    subsections: [
      {
        title: "Ratios of Acute Angles",
        content: `**TRIGONOMETRIC RATIOS OF ACUTE ANGLES**

**Definitions (SOH-CAH-TOA):**
- **Sine (sin):** $$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$
- **Cosine (cos):** $$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$$
- **Tangent (tan):** $$\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$

\`\`\`trig-ratios
\`\`\`

**Key Components:**
- **Opposite:** Side opposite the angle $\\theta$ (acute, < 90°).
- **Adjacent:** Side next to $\\theta$ (not hypotenuse).
- **Hypotenuse:** Longest side, opposite right angle.

**Calculating Ratios:**
- Use a calculator for approximate values (e.g., $\\sin 30^\\circ \\approx 0.5$).
- Exact values for standard angles:
  - $\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$, $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$
  - $\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$, $\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$, $\\tan 45^\\circ = 1$
  - $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$, $\\tan 60^\\circ = \\sqrt{3}$

**Applications:**
- Solve for unknown sides or angles in right-angled triangles.
- Example: Find side $x$ opposite 30° with hypotenuse 10: $\\sin 30^\\circ = \\frac{x}{10}$, $x = 10 \\cdot \\frac{1}{2} = 5$.

**Syllabus Objectives**:
- Calculate sine, cosine, and tangent of acute angles accurately.
- Solve right-angled triangle problems in two dimensions.
- Use ICT tools to compute trigonometric ratios.
- Apply mathematical reasoning to interpret solutions.`,
        interactive: "acute-angle-ratios",
      },
      {
        title: "Ratios of Obtuse Angles",
        content: `**TRIGONOMETRIC RATIOS OF OBTUSE ANGLES**

**Definitions:**
- For obtuse angles ($90^\\circ < \\theta < 180^\\circ$), use reference angles:
  - $\\sin \\theta = \\sin (180^\\circ - \\theta)$ (positive in Q2).
  - $\\cos \\theta = -\\cos (180^\\circ - \\theta)$ (negative in Q2).
  - $\\tan \\theta = -\\tan (180^\\circ - \\theta)$ (negative in Q2).

**Examples:**
- $\\sin 120^\\circ = \\sin (180^\\circ - 120^\\circ) = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$.
- $\\cos 150^\\circ = -\\cos (180^\\circ - 150^\\circ) = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$.
- $\\tan 135^\\circ = -\\tan (180^\\circ - 135^\\circ) = -\\tan 45^\\circ = -1$.

**Applications:**
- Solve right-angled triangle problems where angles are derived from obtuse angles in context.
- Example: Angle of depression leading to an obtuse angle in navigation.

**Syllabus Objectives**:
- Calculate sine, cosine, and tangent of obtuse angles using reference angles.
- Solve problems involving right-angled triangles with obtuse angle contexts.
- Use ICT tools to compute ratios for obtuse angles.
- Communicate solutions clearly using mathematical reasoning.`,
        interactive: "obtuse-angle-ratios",
      },
    ],
  },
  {
    title: "Sine Rule, Cosine Rule, and Area of Triangles",
    icon: "🌐",
    content: `The sine and cosine rules extend trigonometry to non-right-angled triangles, enabling solutions for sides, angles, and areas, with applications in 2D and 3D problems.

**Syllabus Objectives**:
- Apply the sine rule to solve problems.
- Apply the cosine rule to solve problems.
- Use the formula Area = ½ ab sin C to calculate the area of a triangle.
- Solve triangles using sine and cosine rules.
- Solve 3D problems using sine and cosine rules.
- Use ICT tools to model and solve trigonometric problems.
- Conduct research projects involving trigonometric applications (e.g., surveying).`,
    subsections: [
      {
        title: "Sine Rule",
        content: `**SINE RULE**

**Formula:**
- $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$ (where $R$ is circumradius)
- Alternative form: $$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$$

**Applications:**
- Find unknown sides given two angles and one side.
- Find unknown angles given two sides and a non-included angle.
- Note: Ambiguous case (two possible triangles) when using sine rule for angles.

**Examples:**
- Given $A = 40^\\circ$, $B = 60^\\circ$, $a = 5$, find $b$:
  - $\\frac{b}{\\sin 60^\\circ} = \\frac{5}{\\sin 40^\\circ}$, $b = 5 \\cdot \\frac{\\sin 60^\\circ}{\\sin 40^\\circ} \\approx 6.75$.
- Given $a = 7$, $b = 8$, $A = 50^\\circ$, find $B$: Solve $\\frac{\\sin B}{8} = \\frac{\\sin 50^\\circ}{7}$.

**Syllabus Objectives**:
- Apply the sine rule accurately to solve non-right-angled triangles.
- Address the ambiguous case in sine rule problems.
- Use ICT tools to verify sine rule calculations.
- Solve real-world problems (e.g., navigation, surveying) using the sine rule.`,
        interactive: "sine-rule",
      },
      {
        title: "Cosine Rule",
        content: `**COSINE RULE**

**Formula:**
- $$c^2 = a^2 + b^2 - 2ab \\cos C$$
- Alternative forms:
  - $$a^2 = b^2 + c^2 - 2bc \\cos A$$
  - $$b^2 = a^2 + c^2 - 2ac \\cos B$$
- To find angles: $$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$$

**Applications:**
- Find unknown side given two sides and included angle.
- Find unknown angle given three sides.
- Useful in surveying, engineering, and navigation.

**Examples:**
- Given $a = 5$, $b = 6$, $C = 80^\\circ$, find $c$:
  - $c^2 = 5^2 + 6^2 - 2 \\cdot 5 \\cdot 6 \\cdot \\cos 80^\\circ \\approx 25 + 36 - 10.42 = 50.58$, $c \\approx 7.11$.
- Given $a = 3$, $b = 4$, $c = 5$, find $C$:
  - $\\cos C = \\frac{3^2 + 4^2 - 5^2}{2 \\cdot 3 \\cdot 4} = \\frac{9 + 16 - 25}{24} = 0$, $C = 90^\\circ$.

**Syllabus Objectives**:
- Apply the cosine rule accurately to solve non-right-angled triangles.
- Solve problems involving sides and angles using the cosine rule.
- Use ICT tools to model and verify cosine rule calculations.
- Apply the cosine rule in real-world contexts (e.g., engineering).`,
        interactive: "cosine-rule",
      },
      {
        title: "Area of Triangles",
        content: `**TRIGONOMETRIC AREA FORMULA**

**Formula:**
- $$\\text{Area} = \\frac{1}{2} ab \\sin C$$
- Alternative forms:
  - $$\\text{Area} = \\frac{1}{2} bc \\sin A$$
  - $$\\text{Area} = \\frac{1}{2} ac \\sin B$$

**Applications:**
- Calculate area when two sides and the included angle are known.
- Used in surveying, architecture, and land measurement.

**Example:**
- Triangle with sides $a = 5$, $b = 7$, included angle $C = 60^\\circ$:
  - $$\\text{Area} = \\frac{1}{2} \\cdot 5 \\cdot 7 \\cdot \\sin 60^\\circ = \\frac{35 \\cdot \\sqrt{3}}{2} \\approx 30.31 \\text{ cm}^2$.

**Syllabus Objectives**:
- Calculate triangle areas accurately using the trigonometric formula.
- Apply the area formula in real-world contexts (e.g., land measurement).
- Verify area calculations using ICT tools.
- Communicate mathematical reasoning clearly in area problems.`,
        interactive: "triangle-area",
      },
      {
        title: "3D Trigonometric Problems",
        content: `**3D TRIGONOMETRIC APPLICATIONS**

**Concepts:**
- Use sine and cosine rules in 3D contexts (e.g., pyramids, inclined planes).
- Solve for angles between lines, planes, or distances in 3D structures.
- Example: Find the angle between two edges of a triangular pyramid using the cosine rule.

**Applications:**
- Engineering: Analyze forces in 3D structures (e.g., bridges).
- Surveying: Measure heights or distances in 3D terrain.
- Navigation: Calculate paths in 3D space (e.g., flight paths).

**Example:**
- In a pyramid, base sides $a = 4$, $b = 5$, included angle $C = 70^\\circ$, find diagonal:
  - Use cosine rule: $c^2 = 4^2 + 5^2 - 2 \\cdot 4 \\cdot 5 \\cdot \\cos 70^\\circ$.

**Syllabus Objectives**:
- Solve 3D problems accurately using sine and cosine rules.
- Apply trigonometry to real-world 3D contexts (e.g., engineering, surveying).
- Conduct research projects involving 3D trigonometric applications.
- Use ICT tools (e.g., 3D modeling software) to visualize and solve 3D problems.`,
        interactive: "3d-trig-problems",
      },
    ],
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Coming soon",
    options: ["Coming soon"],
    correct: 1,
    explanation: "",
  },
];
