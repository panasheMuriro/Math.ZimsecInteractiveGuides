import { Section, QuizQuestion } from "../types";

export const sections: Section[] = [
  {
    title: "Translation",
    icon: "➡️",
    content: `Translation is a transformation that moves every point of a plane figure or point by the same distance and direction, often represented by vectors on a Cartesian plane.

**Syllabus Objectives**:
- Define transformation and translation.
- Describe translation using vectors.
- Translate plane figures and points on a Cartesian plane.
- Describe fully translations between objects and images.
- Solve problems involving translation in real-world contexts.
- Use ICT tools (e.g., geometry software, geo-boards) to visualize translations.`,
    subsections: [
      {
        title: "Basic Translation",
        content: `**BASIC TRANSLATION (FORM 1-2)**

**Definition:**
- A translation moves every point of a figure by the same distance in a given direction.
- Example: Moving a triangle 3 units right and 2 units up.

**Geometric Method:**
- Shift each vertex of the figure by the specified distance and direction.
- Example: Triangle with vertices $A(1,1)$, $B(2,3)$, $C(3,1)$ translated 3 units right: $A'(4,1)$, $B'(5,3)$, $C'(6,1)$.

**Translation Vector:**
- Represent translation as a column vector $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, where $x$ is horizontal shift, $y$ is vertical shift.
- Example: Translation 3 units right, 2 units up: $\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$.
- For point $P(x,y)$, new position is $P'(x+x_t, y+y_t)$.

**Applications:**
- Navigation: Moving objects on a map.
- Animation: Shifting characters in video games.

**Syllabus Objectives**:
- Define transformation and translation accurately.
- Translate plane figures and points geometrically.
- Use translation vectors to describe movements.
- Use ICT tools to model translations on a Cartesian plane.`,
        interactive: "basic-translation",
      },
      {
        title: "Vector-Based Translation",
        content: `**VECTOR-BASED TRANSLATION (FORM 2-3)**

**Translation on Cartesian Plane:**
- Use a translation vector $\\begin{pmatrix} a \\\\ b \\end{pmatrix}$ to move point $P(x,y)$ to $P'(x+a, y+b)$.
- Example: Translate point $A(2,3)$ by $\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$: $A'(2+4, 3-1) = (6,2)$.

**Plane Figures:**
- Apply the vector to each vertex of a figure.
- Example: Quadrilateral $A(1,1)$, $B(2,2)$, $C(3,1)$, $D(2,0)$ translated by $\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$:
  - $A'(3,4)$, $B'(4,5)$, $C'(5,4)$, $D'(4,3)$.

**Describing Translations:**
- Given object and image, find the translation vector: Subtract object coordinates from image coordinates.
- Example: If $A(1,2)$ moves to $A'(3,5)$, vector is $\\begin{pmatrix} 3-1 \\\\ 5-2 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$.

**Applications:**
- Surveying: Mapping shifted landmarks.
- Robotics: Programming movement.

**Syllabus Objectives**:
- Translate plane figures on a Cartesian plane using translation vectors.
- Describe translations fully given objects and images.
- Solve vector-based translation problems.
- Use ICT tools to visualize and verify translations.`,
        interactive: "vector-translation",
      },
       {
      title: "Translation Problems",
      content: `**TRANSLATION PROBLEMS (FORM 2-4)**

**Step-by-Step Problem Solving:**

**Step 1: Identify Given Information**
- Note coordinates of original points/vertices
- Identify the translation vector or movement description
- Determine what needs to be found (new coordinates, translation vector, etc.)

**Step 2: Apply Translation Formula**
- For point $P(x,y)$ and vector $\\begin{pmatrix} a \\\\ b \\end{pmatrix}$: $P'(x+a, y+b)$
- For multiple points, apply to each vertex systematically

**Step 3: Find Translation Vector (Reverse Problems)**
- Given original point $P(x_1,y_1)$ and image $P'(x_2,y_2)$
- Translation vector = $\\begin{pmatrix} x_2-x_1 \\\\ y_2-y_1 \\end{pmatrix}$

**Step 4: Verify Results**
- Check that all points moved by same vector
- Ensure shape and size remain unchanged
- Plot on coordinate plane if necessary

**Common Problem Types:**
1. **Forward Translation**: Given point and vector, find image
2. **Reverse Translation**: Given object and image, find vector
3. **Composite Translation**: Multiple translations in sequence
4. **Real-world Applications**: Navigation, design, mapping

**Example Problem:**
Triangle ABC has vertices $A(2,1)$, $B(4,3)$, $C(1,4)$. Find coordinates after translation by $\\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$.

**Solution:**
- $A'(2-3, 1+2) = A'(-1,3)$
- $B'(4-3, 3+2) = B'(1,5)$
- $C'(1-3, 4+2) = C'(-2,6)$

**Syllabus Objectives**:
- Solve problems involving translation systematically
- Apply translation concepts to real-world contexts
- Use coordinate geometry to verify translation results`,
      interactive: "translation-problems",
    },
    ],
  },
  {
    title: "Reflection and Rotation",
    icon: "🔄",
    content: `Reflection and rotation are transformations that alter the orientation of plane figures or points, using geometric methods and matrices to reflect across lines or rotate around points.

**Syllabus Objectives**:
- Define reflection and rotation.
- Reflect plane figures in various lines (x-axis, y-axis, y=a, x=b, y=mx+c).
- Rotate points and figures using geometric methods and matrices.
- Determine matrices for reflections and rotations.
- Find centres, angles, and axes of transformations.
- Describe transformations fully given matrices or images.
- Use ICT tools to model reflections and rotations.`,
    subsections: [
      {
        title: "Reflection",
        content: `**REFLECTION (FORMS 1-3)**

**Definition:**
- A reflection flips a figure over a mirror line, preserving distances.
- Example: Reflecting a point over the x-axis changes its y-coordinate sign.

**Form 1-2 (Geometric Reflection):**
- **X-axis:** $(x,y) \\to (x,-y)$.
- **Y-axis:** $(x,y) \\to (-x,y)$.
- **Line x=a:** Reflect over vertical line; for point $(x,y)$, new x-coordinate is $2a-x$.
- **Line y=a:** Reflect over horizontal line; new y-coordinate is $2a-y$.
- Example: Reflect $A(2,3)$ over y-axis: $A'(-2,3)$.

**Form 3 (Matrix Reflection):**
- Matrices for reflections:
  - X-axis: $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.
  - Y-axis: $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.
  - $y=x$: $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.
  - $y=-x$: $\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$.
- For line $y=mx+c$, use matrix methods (complex, not detailed in syllabus).
- Example: Reflect $A(2,3)$ over x-axis: $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$.

**Finding Axis:**
- Given object/image, find the mirror line (e.g., midpoint of segment joining point and image lies on the line).
- Example: If $A(1,2)$ maps to $A'(1,-2)$, axis is x-axis.

**Applications:**
- Symmetry: Designing logos.
- Optics: Modeling light reflection.

**Syllabus Objectives**:
- Define reflection and reflect figures over specified lines.
- Use matrices for reflections in Form 3.
- Find the axis of reflection given objects and images.
- Use ICT tools to visualize reflections and verify matrices.`,
        interactive: "reflection",
      },
      {
        title: "Rotation",
        content: `**ROTATION (FORMS 2-3)**

**Definition:**
- A rotation turns a figure around a centre by a fixed angle, preserving distances.

**Form 2 (Geometric Method):**
- Rotate around a centre (e.g., origin) by angle $\\theta$ (clockwise or counterclockwise).
- Example: Rotate $A(1,0)$ 90° counterclockwise about origin: $A'(0,1)$.
- Find centre: Intersection of perpendicular bisectors of segments joining object/image points.
- Find angle: Measure angle turned.

**Form 3 (Matrix Rotation):**
- Matrices for rotations about origin (multiples of 90°):
  - 90° counterclockwise: $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$.
  - 180°: $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.
  - 270° counterclockwise (90° clockwise): $\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$.
- Example: Rotate $A(2,3)$ 90° counterclockwise: $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$.

**Describing Rotations:**
- Given matrix or object/image, identify centre, angle, and direction.
- Example: Matrix $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ is 180° rotation.

**Applications:**
- Engineering: Rotating parts in designs.
- Animation: Rotating characters.

**Syllabus Objectives**:
- Rotate figures/points geometrically and using matrices.
- Find centre and angle of rotation.
- Determine rotation matrices for multiples of 90°.
- Describe rotations fully given matrices or images.
- Use ICT tools to model and verify rotations.`,
        interactive: "rotation",
      },
      {
      title: "Reflection and Rotation Problems",
      content: `**REFLECTION AND ROTATION PROBLEMS (FORMS 2-4)**

**Step-by-Step Problem Solving:**

**REFLECTION PROBLEMS:**

**Step 1: Identify the Mirror Line**
- Determine the line of reflection (x-axis, y-axis, x=a, y=a, y=x, y=-x)
- Note if using geometric method or matrix method

**Step 2: Apply Reflection Rules**
- **X-axis:** $(x,y) \\to (x,-y)$
- **Y-axis:** $(x,y) \\to (-x,y)$
- **Line x=a:** $(x,y) \\to (2a-x,y)$
- **Line y=a:** $(x,y) \\to (x,2a-y)$
- **Matrix method:** Multiply by appropriate reflection matrix

**Step 3: Find Axis (Reverse Problems)**
- Find midpoint of line segment joining object and image points
- The axis of reflection passes through this midpoint
- For perpendicular reflections, axis is perpendicular bisector

**ROTATION PROBLEMS:**

**Step 1: Identify Centre and Angle**
- Note centre of rotation (usually origin for matrix problems)
- Identify angle and direction (clockwise/counterclockwise)

**Step 2: Apply Rotation**
- **Geometric method:** Use compass and protractor
- **Matrix method:** Multiply by rotation matrix
- **90° CCW:** $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$
- **180°:** $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$
- **270° CCW:** $\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$

**Step 3: Find Centre/Angle (Reverse Problems)**
- **Centre:** Intersection of perpendicular bisectors of segments joining corresponding points
- **Angle:** Measure angle between lines from centre to corresponding points

**Step 4: Verify Results**
- Check distances are preserved
- Verify orientation change (reflection reverses, rotation preserves)
- Plot points to confirm transformation

**Example Problem:**
Reflect triangle with vertices $A(1,2)$, $B(3,1)$, $C(2,4)$ in the line $y=x$.

**Solution:**
Using matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$:
- $A'(2,1)$, $B'(1,3)$, $C'(4,2)$

**Common Problem Types:**
1. **Single Transformation**: Apply one reflection or rotation
2. **Finding Transformation**: Given object and image, find the transformation
3. **Composite Transformations**: Multiple transformations in sequence
4. **Matrix Identification**: Determine transformation from given matrix

**Syllabus Objectives**:
- Solve reflection and rotation problems systematically
- Find axes of reflection and centres/angles of rotation
- Apply matrix methods to solve transformation problems
- Verify solutions using geometric properties`,
      interactive: "reflection-rotation-problems",
    },
    ],
  },
  {
    title: "Enlargement",
    icon: "🔮",
    content: `Enlargement is a transformation that scales a figure by a rational factor, altering its size while preserving its shape, performed about a centre point.

**Syllabus Objectives**:
- Enlarge plane figures about the origin or any point using rational scales.
- Use matrices for enlargements.
- Find scale factor and centre of enlargement.
- Describe enlargements fully given matrices or objects/images.
- Solve problems involving enlargement in real-world contexts.
- Use ICT tools to visualize and perform enlargements.`,
    subsections: [{
      title: "Enlargement",
      content: `**ENLARGEMENT (FORMS 2-3)**

**Definition:**
- An enlargement scales a figure by a factor $k$ about a centre $C$, preserving shape.
- If $k > 1$, figure enlarges; if $0 < k < 1$, shrinks; if $k < 0$, inverts.

**Form 2 (Geometric Method):**
- About origin: Multiply coordinates by $k$, $(x,y) \\to (kx, ky)$.
- Example: Enlarge $A(2,1)$ by scale factor 2 about origin: $A'(4,2)$.
- About any point $C(h,k)$: Translate to origin, scale, translate back.
- Find scale factor: Ratio of corresponding side lengths.
- Find centre: Intersection of lines joining object/image points.

**Form 3 (Matrix Method):**
- Matrix for enlargement about origin, scale factor $k$: $\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}$.
- Example: Enlarge $A(2,3)$ by $k=3$: $\\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 9 \\end{pmatrix}$.
- For any centre, use matrix methods with translation.

**Describing Enlargements:**
- Given matrix (e.g., $\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$), identify $k=2$, centre at origin.
- Given object/image, compute $k$ and centre.

**Applications:**
- Architecture: Scaling blueprints.
- Photography: Zooming images.

**Syllabus Objectives**:
- Enlarge figures about origin or any point using geometric and matrix methods.
- Find scale factor and centre of enlargement.
- Describe enlargements fully given matrices or images.
- Use ICT tools to model and verify enlargements.`,
      interactive: "enlargement",
    },
   {
      title: "Enlargement Problems",
      content: `**ENLARGEMENT PROBLEMS (FORMS 2-4)**

**Step-by-Step Problem Solving:**

**Step 1: Identify Given Information**
- Note coordinates of original figure vertices
- Identify centre of enlargement (origin or specific point)
- Determine scale factor $k$ or identify if it needs to be found
- Check if using geometric method or matrix method

**Step 2: Apply Enlargement Formula**

**About Origin:**
- Formula: $(x,y) \\to (kx, ky)$
- Matrix method: $\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} kx \\\\ ky \\end{pmatrix}$

**About Point $C(a,b)$:**
- Step 1: Translate figure so $C$ becomes origin: $(x,y) \\to (x-a, y-b)$
- Step 2: Apply enlargement: $(x-a, y-b) \\to (k(x-a), k(y-b))$
- Step 3: Translate back: $(k(x-a), k(y-b)) \\to (k(x-a)+a, k(y-b)+b)$
- **Final formula:** $(x,y) \\to (k(x-a)+a, k(y-b)+b)$

**Step 3: Find Scale Factor (Reverse Problems)**
- Calculate ratio of corresponding distances from centre
- Formula: $k = \\frac{\\text{image distance from centre}}{\\text{object distance from centre}}$
- Alternative: $k = \\frac{\\text{image side length}}{\\text{object side length}}$

**Step 4: Find Centre of Enlargement**
- Draw lines through corresponding points of object and image
- Centre is intersection point of these lines
- For parallel lines, centre is at infinity (translation, not enlargement)

**Step 5: Verify Results**
- Check that shape is preserved (angles unchanged)
- Verify all distances from centre scaled by same factor $k$
- Confirm orientation (same if $k > 0$, reversed if $k < 0$)

**Common Problem Types:**

**Type 1: Forward Enlargement**
Given: Figure and enlargement details
Find: Coordinates of enlarged figure

**Type 2: Scale Factor Problems**
Given: Object and image figures
Find: Scale factor and centre

**Type 3: Centre Finding**
Given: Object, image, and scale factor
Find: Centre of enlargement

**Type 4: Matrix Problems**
Given: Enlargement matrix
Find: Scale factor and apply to coordinates

**Example Problem:**
Triangle $ABC$ has vertices $A(1,1)$, $B(3,1)$, $C(2,3)$. Enlarge by scale factor $2$ about centre $(0,0)$.

**Solution:**
- $A'(2×1, 2×1) = A'(2,2)$
- $B'(2×3, 2×1) = B'(6,2)$
- $C'(2×2, 2×3) = C'(4,6)$

**Special Cases:**
- $k = 1$: Identity (no change)
- $0 < k < 1$: Reduction
- $k > 1$: True enlargement
- $k < 0$: Enlargement with rotation 180°
- $k = -1$: Rotation 180° about centre

**Syllabus Objectives**:
- Solve enlargement problems systematically using geometric and matrix methods
- Find scale factors and centres of enlargement from given information
- Apply enlargement concepts to real-world scaling problems
- Use coordinate geometry to verify enlargement results`,
      interactive: "enlargement-problems",
    },
  ]
  },
  {
    title: "Stretch and Shear",
    icon: "📐",
    content: `Stretch and shear are advanced transformations that distort plane figures, altering shape while preserving certain properties, using matrices and geometric methods.

**Syllabus Objectives**:
- Define stretch and shear.
- Draw images using geometric methods and matrices.
- Compute coordinates given transformation matrices.
- Identify invariant lines/points.
- Describe stretches and shears fully given matrices or objects/images.
- Use ICT tools to model and analyze stretches and shears.`,
    subsections: [
      {
        title: "Stretch",
        content: `**STRETCH (FORM 4)**

**Definition:**
- A stretch scales a figure in one or two directions, preserving parallelism but not necessarily shape.
- **One-way stretch:** Scales along one axis (e.g., x-axis).
- **Two-way stretch:** Scales along both axes with different factors.

**Geometric Method:**
- For one-way stretch along x-axis by factor $k$, $(x,y) \\to (kx, y)$.
- Example: Stretch $A(2,3)$ by $k=2$ along x-axis: $A'(4,3)$.

**Matrix Method:**
- One-way stretch along x-axis: $\\begin{pmatrix} k & 0 \\\\ 0 & 1 \\end{pmatrix}$.
- Two-way stretch: $\\begin{pmatrix} k_1 & 0 \\\\ 0 & k_2 \\end{pmatrix}$.
- Example: One-way stretch $A(2,3)$ by $k=2$ along x-axis: $\\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$.

**Invariant Line:**
- Line unchanged by transformation (e.g., y-axis for x-axis stretch).
- Example: For x-axis stretch, y-axis ($x=0$) is invariant.

**Describing Stretches:**
- Given matrix or object/image, identify type, factor, and invariant line.

**Applications:**
- Engineering: Analyzing material deformation.
- Graphics: Distorting images.

**Syllabus Objectives**:
- Define stretch and draw images using geometric and matrix methods.
- Compute coordinates using stretch matrices.
- Identify invariant lines/points.
- Describe stretches fully given matrices or images.
- Use ICT tools to visualize stretches.`,
        interactive: "stretch",
      },
      {
        title: "Shear",
        content: `**SHEAR (FORM 4)**

**Definition:**
- A shear slides points along a direction proportional to their distance from an invariant line, preserving area.
- Example: Shear along x-axis slides points parallel to x-axis.

**Geometric Method:**
- For shear along x-axis with factor $k$, invariant line y-axis, $(x,y) \\to (x+ky, y)$.
- Example: Shear $A(2,3)$ with $k=1$: $A'(2+1\\cdot3, 3) = (5,3)$.

**Matrix Method:**
- Shear along x-axis, factor $k$: $\\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$.
- Shear along y-axis: $\\begin{pmatrix} 1 & 0 \\\\ k & 1 \\end{pmatrix}$.
- Example: Shear $A(2,3)$ along x-axis, $k=1$: $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}$.

**Invariant Line:**
- Line fixed by shear (e.g., y-axis for x-axis shear).
- Example: Points on y-axis ($x=0$) remain unchanged.

**Describing Shears:**
- Given matrix or object/image, identify shear factor and invariant line.

**Applications:**
- Physics: Modeling shear forces in materials.
- Graphics: Creating slanted effects.

**Syllabus Objectives**:
- Define shear and draw images using geometric and matrix methods.
- Compute coordinates using shear matrices.
- Identify invariant lines.
- Describe shears fully given matrices or images.
- Use ICT tools to model shears.`,
        interactive: "shear",
      },
    ],
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the image of point $A(2,3)$ after a translation by vector $\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$?",
    options: ["$(6,2)$", "$(2,4)$", "$(6,4)$", "$(2,2)$"],
    correct: 0,
    explanation: "For translation by $\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$, add to coordinates: $(2+4, 3-1) = (6,2)$.",
  },
  {
    question: "What is the image of point $B(1,2)$ after reflection over the x-axis?",
    options: ["$(1,-2)$", "$(-1,2)$", "$(1,2)$", "$(-1,-2)$"],
    correct: 0,
    explanation: "Reflection over x-axis maps $(x,y)$ to $(x,-y)$, so $(1,2) \\to (1,-2)$.",
  },
  {
    question: "What matrix represents a 90° counterclockwise rotation about the origin?",
    options: [
      "$$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$$",
      "$$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$$",
      "$$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$$",
      "$$\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$$",
    ],
    correct: 0,
    explanation: "A 90° counterclockwise rotation matrix is $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$.",
  },
  {
    question: "What is the scale factor of an enlargement that maps $A(1,1)$ to $A'(3,3)$ about the origin?",
    options: ["2", "3", "1", "4"],
    correct: 1,
    explanation: "Scale factor is ratio of image to object coordinates: $3/1 = 3$.",
  },
  {
    question: "What is the invariant line for a shear with matrix $\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$?",
    options: ["x-axis", "y-axis", "$y=x$", "$y=-x$"],
    correct: 1,
    explanation: "For shear matrix $\\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$, the y-axis ($x=0$) is invariant.",
  },
];
