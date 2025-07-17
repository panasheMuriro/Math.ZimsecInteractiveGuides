import {Section, QuizQuestion} from "../types"

export const sections: Section[]=[
 {
    title: "Sets and Set Notation",
    icon: "🧮",
    content: `Sets are fundamental building blocks in mathematics that help organize and categorize objects.`,
    subsections: [
      {
        title: "Sets and Set Notation",
        content: `**SETS**
A collection of distinct objects called elements:
- Represented with curly braces: $A = \\{1, 2, 3\\}$
- Order doesn't matter: $\\{1, 2, 3\\} = \\{3, 2, 1\\}$
- No duplicates: $\\{1, 1, 2\\} = \\{1, 2\\}$

**NOTATION**
- $\\in$ means "is an element of": $2 \\in \\{1, 2, 3\\}$
- $\\notin$ means "is not an element of": $4 \\notin \\{1, 2, 3\\}$
- $\\emptyset$ or $\\{\\}$ represents the empty set`,
        interactive: "set-basics"
      },
      {
        title: "Types of Sets",
        content: `**TYPES OF SETS**

1. Finite Set: Has countable number of elements
   - Example: $A = \\{a, b, c\\}$

2. Infinite Set: Has unlimited elements
   - Example: $\\mathbb{N} = \\{1, 2, 3, \\ldots\\}$

3. Empty Set ($\\emptyset$): Contains no elements

4. Universal Set ($\\mathbb{U}$): All possible elements in context

5. Subset ($A \\subseteq B$): All elements of A are in B
   - Example: $\\{1, 2\\} \\subseteq \\{1, 2, 3\\}$

6. Proper Subset ($A \\subset B$): A is subset but $A \\neq B$`,
        interactive: "set-types"
      },
      {
        title: "Venn Diagrams (Two Subsets)",
        content: `**VENN DIAGRAMS WITH TWO SETS**
Visual representation of sets using overlapping circles:

- Union ($A \\cup B$): All elements in A or B or both
- Intersection ($A \\cap B$): Only elements in both A and B
- Complement ($A'$): Elements not in A (relative to universal set)
- Difference ($A \\setminus B$): Elements in A but not in B

Example:
- Let $A = \\{1, 2, 3\\}$, $B = \\{3, 4, 5\\}$
- $A \\cup B = \\{1, 2, 3, 4, 5\\}$
- $A \\cap B = \\{3\\}$
- $A \\setminus B = \\{1, 2\\}$`,
        interactive: "venn-two-sets"
      },
      {
        title: "Set Builder Notation",
        content: `**SET BUILDER NOTATION**
A concise way to define sets using properties:
- $\\{x \\mid x \\text{ has property } P\\}$
- Read as "the set of all x such that x has property P"

Examples:
1. $\\{x \\mid x \\text{ is an even integer}\\}$
2. $\\{x \\mid x > 0 \\text{ and } x < 10\\}$
3. $\\{x \\in \\mathbb{R} \\mid x^2 < 4\\}$

This notation is especially useful for infinite sets.`,
        interactive: "set-builder"
      },
      {
        title: "Venn Diagrams (Three Subsets)",
        content: `**VENN DIAGRAMS WITH THREE SETS**
Three overlapping circles representing sets A, B, and C:

Key regions:
1. $A \\cap B \\cap C$: Elements in all three sets
2. $(A \\cap B) \\setminus C$: In A and B but not C
3. $A \\setminus (B \\cup C)$: Only in A
4. And similarly for other combinations

Example operations:
- $A \\cup B \\cup C$: All elements in any set
- $(A \\cap B) \\cup (A \\cap C)$: Elements in both A and B, or both A and C`,
        interactive: "venn-three-sets"
      }
    ]
  }

];


export const quizQuestions: QuizQuestion[] = [
  {
    question: "Which type of number is $-5$?",
    options: ["Natural number", "Whole number", "Integer", "Only negative"],
    correct: 2,
    explanation: "Integers include positive numbers, negative numbers, and zero. So $-5$ is an integer."
  },
  {
    question: "Round $3.6789$ to 2 decimal places:",
    options: ["$3.67$", "$3.68$", "$3.679$", "$3.7$"],
    correct: 1,
    explanation: "Look at the third decimal place ($8$). Since $8 \\geq 5$, round up the second decimal place from $7$ to $8$."
  },
  {
    question: "If $3:4 = x:12$, what is $x$?",
    options: ["$9$", "$16$", "$15$", "$8$"],
    correct: 0,
    explanation: "Cross multiply: $3 \\times 12 = 4 \\times x$, so $36 = 4x$, therefore $x = 9$."
  },
  {
    question: "Write $0.00456$ in standard form:",
    options: ["$4.56 \\times 10^{-3}$", "$4.56 \\times 10^{-2}$", "$45.6 \\times 10^{-4}$", "$4.56 \\times 10^3$"],
    correct: 0,
    explanation: "Move decimal point $3$ places right to get $4.56$, so power is $-3$."
  },
  {
    question: "What is $1011_2$ in base $10$?",
    options: ["$11$", "$9$", "$13$", "$15$"],
    correct: 0,
    explanation: "$1\\times2^3 + 0\\times2^2 + 1\\times2^1 + 1\\times2^0 = 8 + 0 + 2 + 1 = 11$"
  },
  {
    question: "On a map with scale $1:25,000$, what real distance does $8\\text{ cm}$ represent?",
    options: ["$2\\text{ km}$", "$200\\text{ m}$", "$20\\text{ km}$", "$2000\\text{ m}$"],
    correct: 0,
    explanation: "$8\\text{ cm} \\times 25,000 = 200,000\\text{ cm} = 2000\\text{ m} = 2\\text{ km}$"
  }
];
