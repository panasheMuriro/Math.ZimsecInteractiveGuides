import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../Templates/MultipleChoiceInteractiveComponent';
const questions: QuizQuestion[] = [
  {
    id: 'q1-translation',
    question: "What is a translation vector?",
    options: [
      "A vector that represents the magnitude only.",
      "A vector that represents movement from one point to another.",
      "A vector that starts from the origin.",
      "A vector with a magnitude of zero."
    ],
    optionType: "text",
    correct: 1,
    explanation: "A translation vector specifically describes the movement or displacement from a starting point to an ending point."
  },
  {
    id: 'q2-negative',
    question: "If $\\vec{v} = \\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix}$, what is $-\\vec{v}$?",
    optionType: 'text',
    options: [
      "$\\begin{pmatrix} 3 \\\\ -5 \\end{pmatrix}$",
      "$\\begin{pmatrix} -3 \\\\ -5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$",
      "$\\begin{pmatrix} -5 \\\\ 3 \\end{pmatrix}$"
    ],
    correct: 0,
    explanation: "The negative of a vector has components that are the negatives of the original vector's components. So, $-\\vec{v} = -\\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} -(-3) \\\\ -5 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -5 \\end{pmatrix}$."
  },
  {
    id: 'q3-equal',
    question: "Vector $\\vec{u}$ starts at (1, 1) and ends at (4, 5). Vector $\\vec{w}$ starts at (-2, 0) and ends at (1, 4). Are $\\vec{u}$ and $\\vec{w}$ equal?",
    options: [
      "Yes, because they start at different points.",
      "No, because they have different starting points.",
      "Yes, because they have the same components $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.",
      "No, because they have different lengths."
    ],
    correct: 2,
    optionType: "text",
    explanation: "Vectors are equal if they have the same magnitude and direction, which means they must have identical components. $\\vec{u} = \\begin{pmatrix} 4-1 \\\\ 5-1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$. $\\vec{w} = \\begin{pmatrix} 1-(-2) \\\\ 4-0 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$. Since the components are the same, the vectors are equal."
  },
  {
    id: 'q4-parallel',
    question: "Which pair of vectors are parallel?",
    optionType: 'text',
    options: [
      "$\\vec{a} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ and $\\vec{b} = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$",
      "$\\vec{c} = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$ and $\\vec{d} = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$",
      "$\\vec{e} = \\begin{pmatrix} 5 \\\\ 0 \\end{pmatrix}$ and $\\vec{f} = \\begin{pmatrix} 0 \\\\ 5 \\end{pmatrix}$",
      "$\\vec{g} = \\begin{pmatrix} -1 \\\\ 1 \\end{pmatrix}$ and $\\vec{h} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$"
    ],
    correct: 1,
    explanation: "Two vectors are parallel if one is a scalar multiple of the other. For $\\vec{c}$ and $\\vec{d}$: $\\vec{d} = \\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix} = -2 \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix} = -2 \\vec{c}$. Since $\\vec{d}$ is a scalar multiple (-2) of $\\vec{c}$, they are parallel."
  },
  {
    id: 'q5-position',
    question: "What is a position vector?",
    options: [
      "A vector that connects any two points.",
      "A vector that represents a translation.",
      "A vector that starts from the origin (0,0) to a specific point (x,y).",
      "A vector with equal x and y components."
    ],
    correct: 2,
    optionType: "text",
    explanation: "A position vector is defined as a vector that specifies the position of a point in space relative to a fixed reference point, which is usually the origin (0,0) in a 2D Cartesian plane."
  },
  {
    id: 'q6-position-calc',
    question: "What is the position vector of point $P(-4, 7)$?",
    optionType: 'text',
    options: [
      "$\\begin{pmatrix} 4 \\\\ -7 \\end{pmatrix}$",
      "$\\begin{pmatrix} -4 \\\\ 7 \\end{pmatrix}$",
      "$\\begin{pmatrix} 7 \\\\ -4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$"
    ],
    correct: 1,
    explanation: "The position vector of a point $P(x, y)$ is simply the vector from the origin to that point, which is $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$. Therefore, the position vector of $P(-4, 7)$ is $\\begin{pmatrix} -4 \\\\ 7 \\end{pmatrix}$."
  },
  {
    id: 'q7-combined',
    question: "Point $A$ has coordinates (2, 3). Point $B$ has coordinates (5, 7). Which statement is true?",
    optionType: 'text', // Because the explanation uses math
    options: [
      "The position vector of $A$ is $\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ and the translation vector from $A$ to $B$ is $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.",
      "The position vector of $A$ is $\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ and the translation vector from $A$ to $B$ is $\\begin{pmatrix} -3 \\\\ -4 \\end{pmatrix}$.",
      "The position vector of $B$ is $\\begin{pmatrix} 5 \\\\ 7 \\end{pmatrix}$ and the translation vector from $A$ to $B$ is $\\begin{pmatrix} 7 \\\\ 10 \\end{pmatrix}$.",
      "The position vector of $B$ is $\\begin{pmatrix} 5 \\\\ 7 \\end{pmatrix}$ and the translation vector from $B$ to $A$ is $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$."
    ],
    correct: 0,
    explanation: "The position vector of $A(2,3)$ is $\\vec{OA} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$. The translation vector from $A$ to $B$ is calculated as $\\vec{AB} = \\begin{pmatrix} 5-2 \\\\ 7-3 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$."
  },
  {
    id: 'q8-application',
    question: "A boat moves 3 km east and then 4 km north. Which vector best represents its total displacement from the starting point?",
    optionType: 'text',
    options: [
      "Position vector $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ km",
      "Translation vector $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ km",
      "Position vector $\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$ km",
      "Translation vector $\\begin{pmatrix} 7 \\\\ 7 \\end{pmatrix}$ km"
    ],
    correct: 1,
    explanation: "The boat's journey describes a translation from its start to its end point. The total displacement is the straight-line vector from the beginning to the end. Moving 3 km east (positive x-direction) and 4 km north (positive y-direction) results in a translation vector of $\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ km. While numerically similar to a position vector, it represents the *movement* (translation), not the final *location* relative to the origin (position)."
  }

];

const VectorTypesProblems: React.FC = () => {
  return (
    <MultipleChoiceInteractiveComponent
      title="Vector Basics: Types and Position"
      icon="⇨" // Arrow icon representing translation/vector
      theme={{
        from: "from-cyan-500", // Tailwind gradient class
        to: "to-blue-700",   // Tailwind gradient class
        button: "bg-sky-500", // Tailwind background class for buttons
        buttonHover: "hover:bg-sky-600" // Tailwind hover class for buttons
      }}
      rules={[
        "A **translation vector** describes movement: $\\vec{AB} = \\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$.",
        "A **negative vector** $-\\vec{v}$ has the same magnitude but opposite direction.",
        "**Equal vectors** have identical components, regardless of their starting points.",
        "**Parallel vectors** are scalar multiples of each other (e.g., $\\vec{u} = k\\vec{v}$).",
        "A **position vector** $\\vec{OP}$ points from the origin $O$ to a point $P(x,y)$: $\\vec{OP} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$."
      ]}
      rulesTitle="Key Vector Concepts:"
      questions={questions}
    />
  );
};

export default VectorTypesProblems;