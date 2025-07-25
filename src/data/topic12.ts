import { Section, QuizQuestion } from "../types";

export const sections: Section[] = [
  {
    title: "Order and Types of Matrices",
    icon: "📊",
    content: `Matrices are rectangular arrays of numbers used to represent and solve problems in various fields, such as data organization, transformations, and linear equations. Understanding the order and types of matrices is fundamental for performing operations and applying matrices effectively.

**Syllabus Objectives**:
- State the order of a given matrix.
- Identify different types of matrices (e.g., row, column, square, zero, identity).
- Discuss the uses of matrices in real-world contexts.
- Use ICT tools to represent and explore matrices.
- Apply mathematical reasoning to communicate matrix concepts clearly.`,
    subsections: [
      {
        title: "Order of Matrices",
        content: `**ORDER OF MATRICES**

**Definition:**
- The order of a matrix describes its dimensions, expressed as $ m \\times n $, where $ m $ is the number of rows and $ n $ is the number of columns.
- Example: A matrix with 2 rows and 3 columns has order $ 2 \\times 3 $, e.g., $$ \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} $$.

**Locating Elements:**
- An element in a matrix is denoted as $ a_{ij} $, where $ i $ is the row number and $ j $ is the column number.
- Example: In $$ \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $$, the element $ a_{12} = 2 $.

**Applications:**
- Data organization: Representing tables of data (e.g., spreadsheets).
- Computer science: Storing pixel data in images.

**Syllabus Objectives**:
- State the order of a given matrix accurately.
- Locate elements in a matrix using $ a_{ij} $ notation.
- Discuss the role of matrix order in operations.
- Use ICT tools (e.g., spreadsheet software) to represent matrices.`,
        interactive: "matrix-order",
      },
      {
        title: "Types of Matrices",
        content: `**TYPES OF MATRICES**

**Common Types:**
- **Row Matrix:** A matrix with one row, e.g., $$ \\begin{pmatrix} 1 & 2 & 3 \\end{pmatrix} $$ (order $ 1 \\times 3 $).
- **Column Matrix:** A matrix with one column, e.g., $$ \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} $$ (order $ 3 \\times 1 $).
- **Square Matrix:** Equal number of rows and columns, e.g., $$ \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $$ (order $ 2 \\times 2 $).
- **Zero Matrix:** All elements are zero, e.g., $$ \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix} $$.
- **Identity Matrix:** A square matrix with 1s on the main diagonal and 0s elsewhere, e.g., $$ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} $$.

**Applications:**
- Identity matrices in transformations (e.g., rotations in graphics).
- Zero matrices in solving systems of equations.

**Syllabus Objectives**:
- Identify different types of matrices (row, column, square, zero, identity).
- Discuss the uses of matrices in real-world scenarios (e.g., data analysis, computer graphics).
- Use ICT tools to explore and visualize matrix types.`,
        interactive: "matrix-types",
      },
    ],
  },
  {
    title: "Matrix Operations",
    icon: "➕",
    content: `Matrix operations, including addition, subtraction, scalar multiplication, and matrix multiplication, allow for the manipulation of matrices to solve problems in various contexts, such as economics, physics, and computer science.

**Syllabus Objectives**:
- Add and subtract matrices of the same order.
- Multiply a matrix by a scalar.
- Multiply two matrices where compatible.
- Solve problems involving matrix operations.
- Use ICT tools to perform and verify matrix operations.`,
    subsections: [
      {
        title: "Addition and Subtraction of Matrices",
        content: `**ADDITION AND SUBTRACTION OF MATRICES (FORMS 1-2)**

**Rules:**
- Matrices must have the same order to be added or subtracted.
- Addition: Add corresponding elements, $$ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} + \\begin{pmatrix} e & f \\\\ g & h \\end{pmatrix} = \\begin{pmatrix} a+e & b+f \\\\ c+g & d+h \\end{pmatrix} $$.
- Subtraction: Subtract corresponding elements, $$ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} - \\begin{pmatrix} e & f \\\\ g & h \\end{pmatrix} = \\begin{pmatrix} a-e & b-f \\\\ c-g & d-h \\end{pmatrix} $$.
- Example: $$ \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix} = \\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix} $$.

**Applications:**
- Economics: Combining data tables (e.g., sales figures).
- Statistics: Aggregating datasets.

**Syllabus Objectives**:
- Add and subtract matrices of the same order accurately.
- Solve problems involving matrix addition and subtraction.
- Use ICT tools to perform matrix addition and subtraction.`,
        interactive: "matrix-add-subtract",
      },
      {
        title: "Scalar Multiplication",
        content: `**SCALAR MULTIPLICATION (FORMS 1-2)**

**Definition:**
- Multiply each element of a matrix by a scalar $ k $, $$ k \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = \\begin{pmatrix} ka & kb \\\\ kc & kd \\end{pmatrix} $$.
- Example: $$ 2 \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 2 & 4 \\\\ 6 & 8 \\end{pmatrix} $$.

**Applications:**
- Scaling data (e.g., adjusting quantities in inventory management).
- Physics: Scaling forces or velocities.

**Syllabus Objectives**:
- Multiply a matrix by a scalar accurately.
- Solve problems involving scalar multiplication.
- Use ICT tools to visualize scalar multiplication of matrices.`,
        interactive: "scalar-multiplication",
      },
      {
        title: "Matrix Multiplication",
        content: `**MATRIX MULTIPLICATION (FORM 3)**

**Rules:**
- Two matrices $ A $ (order $ m \\times n $) and $ B $ (order $ n \\times p $) can be multiplied if the number of columns of $ A $ equals the number of rows of $ B $. The result is an $ m \\times p $ matrix.
- Element $ c_{ij} $ of the product matrix is the sum of products of corresponding elements from row $ i $ of $ A $ and column $ j $ of $ B $.
- Example: For $$27:17
- \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\times \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix} $$, compute:
  - $ c_{11} = 1 \\cdot 5 + 2 \\cdot 7 = 19 $, $ c_{12} = 1 \\cdot 6 + 2 \\cdot 8 = 22 $,
  - $ c_{21} = 3 \\cdot 5 + 4 \\cdot 7 = 43 $, $ c_{22} = 3 \\cdot 6 + 4 \\cdot 8 = 50 $.
  - Result: $$ \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix} $$.

**Applications:**
- Transformations: Rotating or scaling objects in computer graphics.
- Economics: Calculating total costs across multiple products.

**Syllabus Objectives**:
- Multiply two compatible matrices accurately.
- Solve problems involving matrix multiplication.
- Use ICT tools to compute and verify matrix multiplication.`,
        interactive: "matrix-multiplication",
      },
    ],
  },
  {
    title: "Determinants of Matrices",
    icon: "🔢",
    content: `The determinant of a matrix is a scalar value that provides information about the matrix's properties, such as whether it is singular or non-singular. It is crucial for solving systems of equations and understanding matrix invertibility.

**Syllabus Objectives**:
- Calculate the determinant of a $ 2 \\times 2 $ matrix.
- Distinguish between singular and non-singular matrices.
- Use the determinant to find unknowns in a $ 2 \\times 2 $ matrix.
- Solve problems involving singular and non-singular matrices.
- Use ICT tools to compute determinants.`,
    subsections: [
      {
        title: "Calculating Determinants",
        content: `**DETERMINANTS OF $ 2 \\times 2 $ MATRICES (FORM 3)**

**Definition:**
- For a $ 2 \\times 2 $ matrix $$ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} $$, the determinant is:
  $$ \\det(A) = ad - bc $$
- Example: For $$ \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $$, $$ \\det(A) = (1 \\cdot 4) - (2 \\cdot 3) = 4 - 6 = -2 $$.

**Applications:**
- Determine if a matrix is invertible (non-singular if $ \\det(A) \\neq 0 $).
- Solve systems of linear equations.

**Syllabus Objectives**:
- Calculate the determinant of a $ 2 \\times 2 $ matrix accurately.
- Use ICT tools to compute determinants.
- Solve problems involving determinants in real-world contexts.`,
        interactive: "determinant-calculation",
      },
      {
        title: "Singular and Non-Singular Matrices",
        content: `**SINGULAR AND NON-SINGULAR MATRICES (FORM 3)**

**Definitions:**
- **Non-Singular Matrix:** A matrix with a non-zero determinant ($ \\det(A) \\neq 0 $), meaning it is invertible.
- **Singular Matrix:** A matrix with a zero determinant ($ \\det(A) = 0 $), meaning it is not invertible.
- Example: For $$ \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix} $$, $$ \\det(A) = (1 \\cdot 4) - (2 \\cdot 2) = 4 - 4 = 0 $$, so it is singular.

**Using Determinants to Find Unknowns:**
- If a matrix is singular, set $ \\det(A) = 0 $ to find an unknown.
- Example: For $$ \\begin{pmatrix} 1 & k \\\\ 2 & 4 \\end{pmatrix} $$, set $$ \\det(A) = (1 \\cdot 4) - (k \\cdot 2) = 0 $$, so $$ 4 - 2k = 0 $$, $$ k = 2 $$.

**Applications:**
- Engineering: Analyze systems with no unique solutions.
- Linear algebra: Understand matrix properties.

**Syllabus Objectives**:
- Distinguish between singular and non-singular matrices.
- Use the fact that the determinant of a singular matrix is zero to find unknowns.
- Solve problems involving singular and non-singular matrices.
- Use ICT tools to verify matrix properties.`,
        interactive: "singular-non-singular",
      },
    ],
  },
  {
    title: "Inverse of a Matrix",
    icon: "🔄",
    content: `The inverse of a matrix allows for solving systems of linear equations and performing transformations. Only non-singular $ 2 \\times 2 $ matrices have inverses, which are calculated using the determinant and a specific formula.

**Syllabus Objectives**:
- Calculate the inverse of a $ 2 \\times 2 $ non-singular matrix.
- Solve simultaneous linear equations in two variables using the matrix method.
- Use ICT tools to compute matrix inverses and solve equations.`,
    subsections: [
      {
        title: "Inverse of a $ 2 \\times 2 $ Matrix",
        content: `**INVERSE OF A $ 2 \\times 2 $ MATRIX (FORM 4)**

**Definition:**
- For a $ 2 \\times 2 $ matrix $$ A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} $$, the inverse $ A^{-1} $ exists if $ \\det(A) \\neq 0 $.
- Formula: $$ A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} $$, where $ \\det(A) = ad - bc $.
- Example: For $$ A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $$, $$ \\det(A) = (1 \\cdot 4) - (2 \\cdot 3) = -2 $$.
  - Inverse: $$ A^{-1} = \\frac{1}{-2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix} $$.

**Verification:**
- Check: $ A \\cdot A^{-1} = I $, where $$ I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} $$.

**Applications:**
- Solving systems of equations.
- Computer graphics: Reversing transformations.

**Syllabus Objectives**:
- Calculate the inverse of a $ 2 \\times 2 $ non-singular matrix accurately.
- Verify the inverse using matrix multiplication.
- Use ICT tools to compute and verify matrix inverses.`,
        interactive: "matrix-inverse",
      },
      {
        title: "Solving Simultaneous Equations",
        content: `**SOLVING SIMULTANEOUS EQUATIONS USING MATRICES (FORM 4)**

**Method:**
- For equations $ ax + by = e $, $ cx + dy = f $, write in matrix form: $$ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} e \\\\ f \\end{pmatrix} $$.
- Solution: $$ \\begin{pmatrix} x \\\\ y \\end{pmatrix} = A^{-1} \\begin{pmatrix} e \\\\ f \\end{pmatrix} $$.
- Example: Solve $ x + 2y = 5 $, $ 3x + 4y = 11 $.
  - Matrix form: $$ \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 11 \\end{pmatrix} $$.
  - Inverse: $$ A^{-1} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix} $$.
  - Solution: $$ \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix} \\begin{pmatrix} 5 \\\\ 11 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} $$, so $ x = 1 $, $ y = 2 $.

**Applications:**
- Economics: Solving supply and demand equations.
- Engineering: Analyzing systems of constraints.

**Syllabus Objectives**:
- Solve simultaneous linear equations in two variables using the matrix method.
- Use ICT tools to solve and verify solutions to simultaneous equations.
- Apply matrix methods to real-world problems.`,
        interactive: "simultaneous-equations",
      },
    ],
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the order of the matrix $$ \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} $$?",
    options: ["$ 2 \\times 3 $", "$ 3 \\times 2 $", "$ 2 \\times 2 $", "$ 3 \\times 3 $"],
    correct: 0,
    explanation: "The matrix has 2 rows and 3 columns, so its order is $ 2 \\times 3 $.",
  },
  {
    question: "Which of the following is an identity matrix?",
    options: [
      "$$ \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix} $$",
      "$$ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} $$",
      "$$ \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix} $$",
      "$$ \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $$",
    ],
    correct: 1,
    explanation: "An identity matrix is a square matrix with 1s on the main diagonal and 0s elsewhere, such as $$ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} $$.",
  },
  {
    question: "What is the result of $$ 3 \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} $$?",
    options: [
      "$$ \\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix} $$",
      "$$ \\begin{pmatrix} 3 & 6 \\\\ 6 & 12 \\end{pmatrix} $$",
      "$$ \\begin{pmatrix} 1 & 2 \\\\ 9 & 12 \\end{pmatrix} $$",
      "$$ \\begin{pmatrix} 3 & 2 \\\\ 9 & 4 \\end{pmatrix} $$",
    ],
    correct: 0,
    explanation: "Multiply each element by 3: $$ 3 \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 3 \\cdot 1 & 3 \\cdot 2 \\\\ 3 \\cdot 3 & 3 \\cdot 4 \\end{pmatrix} = \\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix} $$.",
  },
  {
    question: "What is the determinant of $$ \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} $$?",
    options: ["5", "7", "8", "-1"],
    correct: 0, // Corrected from previous artifact where "7" was incorrectly marked as the answer
    explanation: "For $$ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} $$, the determinant is $ ad - bc $. Here, $$ \\det(A) = (2 \\cdot 4) - (3 \\cdot 1) = 8 - 3 = 5 $$.",
  },
  {
    question: "Is the matrix $$ \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix} $$ singular or non-singular?",
    options: ["Singular", "Non-Singular", "Cannot determine", "Neither"],
    correct: 0,
    explanation: "Calculate the determinant: $$ \\det(A) = (1 \\cdot 4) - (2 \\cdot 2) = 4 - 4 = 0 $$. Since the determinant is zero, the matrix is singular.",
  },
];