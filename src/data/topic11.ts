import { Section, QuizQuestion } from "../types";

export const sections: Section[] = [
  {
    title: "Definition and Notation",
    icon: "📍",
    content: `Vectors are quantities with magnitude and direction, used to represent displacements or forces. Proper notation is essential for working with vectors in mathematical and real-world contexts.

**Syllabus Objectives**:
- Define vector accurately.
- Interpret vector notation (e.g., column form, arrow notation).
- Express vectors using appropriate notation.
- Use ICT tools (e.g., geometry software) to represent and explore vectors.
- Apply mathematical reasoning to communicate vector concepts clearly.`,
    subsections: [
      {
        title: "Vector Definition",
        content: `**DEFINING VECTORS**

**Definition:**
- A vector is a quantity with both magnitude (size) and direction.
- Example: A displacement of 5 km east is a vector; 5 km alone (scalar) is not.

**Contrast with Scalars:**
- Scalars have magnitude only (e.g., distance, speed).
- Vectors include direction (e.g., displacement, velocity).

**Applications:**
- Navigation: Representing movement in a specific direction.
- Physics: Describing forces or velocities.

**Syllabus Objectives**:
- Define a vector as a quantity with magnitude and direction.
- Distinguish vectors from scalars in real-world contexts.
- Discuss vector concepts using examples (e.g., displacement).
- Use ICT tools to visualize vector representations.`,
        interactive: "vector-definition",
      },
      {
        title: "Vector Notation",
        content: `**VECTOR NOTATION**

**Forms of Notation:**
- **Arrow Notation:** $\\vec{AB}$ or $\\vec{v}$ (vector from point A to B or named v).
- **Boldface:** $v$ or $AB$ in print.
- **Column Form:** For a vector with components $x$ (horizontal), $y$ (vertical):
  $$\\vec{v} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$
- Example: A vector moving 3 units right, 4 units up: $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.

**Representation:**
- On a Cartesian plane, draw an arrow from origin (0,0) to (x,y).
- Example: $\\vec{v} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ starts at (0,0), ends at (2,3).

**Syllabus Objectives**:
- Interpret and use vector notation (arrow, column form).
- Express vectors in column form accurately.
- Represent vectors on a Cartesian plane using ICT tools.
- Communicate vector notation clearly in problem-solving.`,
        interactive: "vector-notation",
      },
     
    ],
  },
  {
    title: "Types of Vectors",
    icon: "🔀",
    content: `Vectors can be classified by their properties, such as translation, negative, equal, parallel, or position vectors, each with specific representations and applications on the Cartesian plane.

**Syllabus Objectives**:
- Identify and describe types of vectors (translation, negative, equal, parallel, position).
- Represent translation and position vectors in column form and on a Cartesian plane.
- Solve problems using the concept of vectors.
- Identify various types of vectors on the Cartesian plane.
- Use ICT tools to draw and analyze vector types.`,
    subsections: [
      {
        title: "Translation, Negative, Equal, and Parallel Vectors",
        content: `**TYPES OF VECTORS (FORMS 1-2)**

**Translation Vector:**
- Represents movement from one point to another.
- Example: Moving from (1,2) to (3,5): $\\vec{v} = \\begin{pmatrix} 3-1 \\\\ 5-2 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$.
- Draw as an arrow on the Cartesian plane.

**Negative Vector:**
- Opposite direction, same magnitude.
- For $\\vec{v} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$, negative is $-\\vec{v} = \\begin{pmatrix} -x \\\\ -y \\end{pmatrix}$.
- Example: If $\\vec{v} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$, then $-\\vec{v} = \\begin{pmatrix} -2 \\\\ -3 \\end{pmatrix}$.

**Equal Vectors:**
- Same magnitude and direction, regardless of starting point.
- Example: $\\vec{v} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ at (0,0) equals $\\vec{w} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ at (3,4).

**Parallel Vectors:**
- Same or opposite direction, magnitudes may differ.
- Example: $\\vec{v} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$ is parallel to $\\vec{w} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ (since $\\vec{v} = 2\\vec{w}$).

**Applications:**
- Navigation: Translation vectors for movement.
- Physics: Forces with equal or parallel directions.

**Syllabus Objectives**:
- Identify translation, negative, equal, and parallel vectors.
- Represent translation vectors in column form and on a Cartesian plane.
- Solve problems involving these vector types.
- Use ICT tools to draw and identify vectors on a Cartesian plane.`,
        interactive: "basic-vector-types",
      },
      {
        title: "Position Vectors",
        content: `**POSITION VECTORS (FORM 3)**

**Definition:**
- A vector from the origin (0,0) to a point (x,y).
- Notation: For point $A(x, y)$, position vector is $\\vec{OA} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$.
- Example: Point $A(3, 4)$ has position vector $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.

**Representation:**
- Draw as an arrow from (0,0) to (x,y) on the Cartesian plane.
- Example: $\\vec{OA} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ ends at (3,4).

**Applications:**
- Describe locations in coordinate systems (e.g., GPS, physics).
- Basis for vector operations in plane shapes.

**Syllabus Objectives**:
- Describe and represent position vectors on a Cartesian plane.
- Identify position vectors in coordinate systems.
- Use ICT tools to visualize position vectors.
- Solve problems involving position vectors in real-world contexts.`,
        interactive: "position-vectors",
      },
       {
        title: "Types of Vectors Problems",
        content: `**Types of Vectors Problems**`,
        interactive: "vector-types-problems",
      },
    ],
  },
  {
    title: "Vector Operations",
    icon: "➕",
    content: `Vector operations, including addition, subtraction, scalar multiplication, magnitude, and properties of plane shapes, enable manipulation and analysis of vectors in geometric and real-world contexts.

**Syllabus Objectives**:
- Add and subtract vectors accurately.
- Multiply a vector by a scalar.
- Calculate the magnitude of a vector.
- Express edges and diagonals of plane shapes as linear combinations of vectors.
- Find numerical values of scalars in equal vectors.
- Determine ratios of parallel edges/diagonals of plane shapes.
- Solve problems involving vector operations.
- Use ICT tools to perform and verify vector operations.`,
    subsections: [
      {
        title: "Addition and Subtraction",
        content: `**ADDITION AND SUBTRACTION OF VECTORS (FORMS 1-3)**

**Addition:**
- For vectors $\\vec{v} = \\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix}$, $\\vec{w} = \\begin{pmatrix} x_2 \\\\ y_2 \\end{pmatrix}$:
  $$\\vec{v} + \\vec{w} = \\begin{pmatrix} x_1 + x_2 \\\\ y_1 + y_2 \\end{pmatrix}$$
- Geometrically: Place tail of $\\vec{w}$ at head of $\\vec{v}$, result is vector from tail of $\\vec{v}$ to head of $\\vec{w}$.
- Example: $\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 7 \\end{pmatrix}$.

**Subtraction:**
- $\\vec{v} - \\vec{w} = \\vec{v} + (-\\vec{w}) = \\begin{pmatrix} x_1 - x_2 \\\\ y_1 - y_2 \\end{pmatrix}$.
- Geometrically: Vector from head of $\\vec{w}$ to head of $\\vec{v}$.
- Example: $\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$.

**Applications:**
- Navigation: Combine displacements.
- Physics: Resultant forces.

**Syllabus Objectives**:
- Add and subtract vectors accurately using column form.
- Solve problems involving vector addition and subtraction.
- Represent addition/subtraction on a Cartesian plane using ICT tools.
- Apply mathematical reasoning to interpret resultant vectors.`,
        interactive: "vector-add-subtract",
      },
      {
        title: "Scalar Multiplication and Magnitude",
        content: `**SCALAR MULTIPLICATION AND MAGNITUDE (FORM 3)**

**Scalar Multiplication:**
- For vector $\\vec{v} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$ and scalar $k$:
  $$k\\vec{v} = \\begin{pmatrix} kx \\\\ ky \\end{pmatrix}$$
- Effect: Scales magnitude by $|k|$, reverses direction if $k < 0$.
- Example: If $\\vec{v} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$, $2\\vec{v} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}$, $-\\vec{v} = \\begin{pmatrix} -2 \\\\ -3 \\end{pmatrix}$.

**Magnitude:**
- For $\\vec{v} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$:
  $$|\\vec{v}| = \\sqrt{x^2 + y^2}$$
- Example: If $\\vec{v} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$, $|\\vec{v}| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.

**Applications:**
- Scalar multiplication: Adjust vector lengths (e.g., scaling forces).
- Magnitude: Calculate distances or strengths (e.g., displacement length).

**Syllabus Objectives**:
- Multiply a vector by a scalar accurately.
- Calculate the magnitude of a vector using the formula.
- Solve problems involving scalar multiplication and magnitude.
- Use ICT tools to compute and visualize vector operations.`,
        interactive: "scalar-magnitude",
      },
      {
        title: "Vector Properties of Plane Shapes",
        content: `**VECTOR PROPERTIES OF PLANE SHAPES (FORM 4)**

**Linear Combinations:**
- Express edges/diagonals of plane shapes (e.g., parallelograms, triangles) as linear combinations of vectors.
- Example: In parallelogram $ABCD$, diagonal $\\vec{AC} = \\vec{AB} + \\vec{BC}$.

**Equal Vectors:**
- Find scalars $k$ in equal vectors: If $k\\vec{v} = m\\vec{w}$, solve for $k$, $m$.
- Example: If $\\begin{pmatrix} 2k \\\\ 3k \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}$, then $2k = 4$, $3k = 6$, so $k = 2$.

**Ratios of Parallel Edges/Diagonals:**
- For parallel vectors $\\vec{v} = k\\vec{w}$, find ratio $|\\vec{v}| : |\\vec{w}|$.
- Example: If $\\vec{AB} = 2\\vec{CD}$, ratio of lengths is 2:1.

**Applications:**
- Geometry: Analyze properties of shapes (e.g., parallelograms, trapeziums).
- Engineering: Study forces in structural designs.

**Syllabus Objectives**:
- Express edges and diagonals of plane shapes as linear combinations of vectors.
- Find numerical values of scalars in equal vectors.
- Determine ratios of parallel edges/diagonals in plane shapes.
- Solve problems involving vector properties using ICT tools.`,
        interactive: "plane-shape-vectors",
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
