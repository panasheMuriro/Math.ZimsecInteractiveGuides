import { Section, QuizQuestion, MathJaxConfig } from './types';

export const mathjaxConfig: MathJaxConfig = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]]
  }
};

export const sections: Section[] = [
  {
    title: "Number Concepts and Operations",
    icon: "🔢",
    content: `Number types are the foundation of mathematics. Let's explore the different families of numbers step by step.`,
    subsections: [
      {
        title: "Natural Numbers",
        content: `**NATURAL NUMBERS** ($\\mathbb{N}$)
These are counting numbers: $1, 2, 3, 4, 5, \\ldots$
- Used for counting objects
- Always positive
- Start from 1 and go to infinity
- Examples: number of students in a class, pages in a book, apples in a basket`,
        interactive: "natural-numbers"
      },
      {
        title: "Whole Numbers",
        content: `**WHOLE NUMBERS** ($\\mathbb{W}$)
Natural numbers plus zero: $0, 1, 2, 3, 4, 5, \\ldots$
- Include zero (representing "nothing")
- All non-negative integers
- Foundation for basic arithmetic
- Examples: score in a game (can be 0), temperature above absolute zero`,
        interactive: "whole-numbers"
      },
      {
        title: "Integers",
        content: `**INTEGERS** ($\\mathbb{Z}$)
All whole numbers and their negatives: $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$
- Include positive, negative, and zero
- Represent opposites (temperature, debt/credit)
- Form a complete number line
- Examples: temperature in Celsius, floors in a building (basement = negative)`,
        interactive: "integers"
      },
      {
        title: "Rational Numbers",
        content: `**RATIONAL NUMBERS** ($\\mathbb{Q}$)
Numbers that can be expressed as fractions: $\\frac{1}{2}, \\frac{3}{4}, -\\frac{2}{3}, 0.25, 0.\\overline{3}$
- Can be written as $\\frac{p}{q}$ where $p$ and $q$ are integers ($q \\neq 0$)
- Include terminating and repeating decimals
- All integers are rational numbers
- Examples: half a pizza, 0.5 seconds, 33.33% (which is $\\frac{1}{3}$)`,
        interactive: "rational-numbers"
      },
      {
        title: "Real Numbers",
        content: `**REAL NUMBERS** ($\\mathbb{R}$)
All rational and irrational numbers combined
- Include everything on the number line
- Foundation for advanced mathematics
- Used in real-world measurements
- Examples: $\\pi$ (circumference to diameter ratio), $\\sqrt{2}$ (diagonal of unit square)`,
        interactive: "number-classifier"
      }
    ]
  },
  {
    title: "Approximations and Estimations",
    icon: "📏",
    content: `Approximations help us work with numbers that are easier to handle while maintaining reasonable accuracy.`,
    subsections: [
      {
        title: "Rounding Off Numbers",
        content: `**ROUNDING OFF NUMBERS**

Rules for rounding:
- Look at the digit to the right of the place you're rounding to
- If it's $\\geq 5$, round up
- If it's $< 5$, round down
- Examples: $3.67 \\rightarrow 3.7$ (to 1 d.p.), $245 \\rightarrow 250$ (to nearest 10)`,
        interactive: "rounding-game"
      },
      {
        title: "Decimal Places and Significant Figures",
        content: `**DECIMAL PLACES (d.p.)**
Count digits after the decimal point:
- $3.456$ has 3 decimal places
- $0.2$ has 1 decimal place
- $15.0$ has 1 decimal place

**SIGNIFICANT FIGURES (s.f.)**
Count meaningful digits from the first non-zero digit:
- $3.456$ has 4 significant figures
- $0.00456$ has 3 significant figures
- $3400$ has 2 significant figures (assuming trailing zeros aren't significant)`,
        interactive: "decimal-places"
      },
      {
        title: "Estimations",
        content: `**ESTIMATIONS**
Make quick calculations easier:
- $19.8 \\times 4.2 \\approx 20 \\times 4 = 80$
- $297 \\div 3.1 \\approx 300 \\div 3 = 100$
- Always round to make calculations simpler`,
        interactive: "estimation-game"
      },
      {
        title: "Limits of Accuracy",
        content: `**LIMITS OF ACCURACY**
Understanding the range of possible values:
- $5.2$ cm (to 1 d.p.) means the actual value is between $5.15$ and $5.25$ cm
- This is written as $5.15 \\leq x < 5.25$
- Upper bound: $5.25$, Lower bound: $5.15$`,
        interactive: "limits-accuracy"
      }
    ]
  },
  {
    title: "Ratios, Rates and Proportions",
    icon: "⚖️",
    content: `Ratios and proportions help us compare quantities and solve real-world problems.`,
    subsections: [
      {
        title: "Ratios",
        content: `**RATIOS**
Compare quantities of the same type:
- $3:4$ means "3 to 4" or "3 parts to 4 parts"
- Can be simplified like fractions: $6:8 = 3:4$
- Used for mixing, sharing, scaling
- Example: mixing paint colors, sharing pizza slices`,
        interactive: "ratio-simplifier"
      },
      {
        title: "Rates",
        content: `**RATES**
Compare quantities of different types:
- Speed: $60\\text{ km/h}$ (distance per time)
- Density: $2.5\\text{ g/cm}^3$ (mass per volume)
- Price: $\\$5\\text{ per kg}$ (cost per weight)
- Always have units that are different`,
        interactive: "rate-calculator"
      },
      {
        title: "Proportions and Direct Proportion",
        content: `**PROPORTIONS**
When two ratios are equal:
- $3:4 = 6:8$ (this is a proportion)
- Cross multiplication: $3 \\times 8 = 4 \\times 6$
- Used for scaling recipes, maps, currency conversion

**DIRECT PROPORTION**
As one quantity increases, the other increases proportionally:
- $\\text{Cost} \\propto \\text{quantity}$ (more items cost more)
- $\\text{Distance} \\propto \\text{time}$ (at constant speed)
- Formula: $y = kx$ (where $k$ is constant)`,
        interactive: "proportion-solver"
      },
      {
        title: "Inverse Proportion",
        content: `**INVERSE PROPORTION**
As one quantity increases, the other decreases proportionally:
- $\\text{Time} \\propto \\frac{1}{\\text{speed}}$ (faster speed means less time)
- $\\text{Workers} \\propto \\frac{1}{\\text{time}}$ (more workers means less time)
- Formula: $y = \\frac{k}{x}$ (where $k$ is constant)`,
        interactive: "inverse-proportion"
      }
    ]
  },
  {
    title: "Ordinary and Standard Form",
    icon: "🔬",
    content: `Standard form helps us write very large or very small numbers in a manageable way.`,
    subsections: [
      {
        title: "Large Numbers in Standard Form",
        content: `**LARGE NUMBERS**
- $5,000,000 = 5 \\times 10^6$
- $340,000,000 = 3.4 \\times 10^8$
- $7,200,000,000 = 7.2 \\times 10^9$

For large numbers, count how many places you move the decimal point to the left.`,
        interactive: "large-numbers"
      },
      {
        title: "Small Numbers in Standard Form",
        content: `**SMALL NUMBERS**
- $0.005 = 5 \\times 10^{-3}$
- $0.00034 = 3.4 \\times 10^{-4}$
- $0.000000072 = 7.2 \\times 10^{-8}$

For small numbers, count how many places you move the decimal point to the right.`,
        interactive: "small-numbers"
      },
      {
        title: "Standard Form Converter",
        content: `**STANDARD FORM RULES**
A number in standard form is written as: $a \\times 10^n$
- Where $1 \\leq a < 10$
- $n$ is an integer (positive for large numbers, negative for small numbers)

**CONVERTING TO STANDARD FORM**
For large numbers:
1. Place decimal point after first digit
2. Count places moved (this is your power)
3. Power is positive

For small numbers:
1. Move decimal point to after first non-zero digit
2. Count places moved (this is your power)
3. Power is negative`,
        interactive: "standard-form-converter"
      }
    ]
  },
  {
    title: "Number Bases",
    icon: "💻",
    content: `Number bases show us different ways to represent numbers, essential for computer science and mathematics.`,
    subsections: [
      {
        title: "Base 10 (Decimal)",
        content: `**BASE 10 (DECIMAL)**
Our everyday number system:
- Uses digits $0, 1, 2, 3, 4, 5, 6, 7, 8, 9$
- Each position represents a power of $10$
- $245_{10} = 2\\times10^2 + 4\\times10^1 + 5\\times10^0 = 200 + 40 + 5$`,
        interactive: "base-10"
      },
      {
        title: "Base 2 (Binary)",
        content: `**BASE 2 (BINARY)**
Computer language:
- Uses only digits $0$ and $1$
- Each position represents a power of $2$
- $1011_2 = 1\\times2^3 + 0\\times2^2 + 1\\times2^1 + 1\\times2^0 = 8 + 0 + 2 + 1 = 11_{10}$`,
        interactive: "base-2"
      },
      {
        title: "Base Converter",
        content: `**CONVERTING BETWEEN BASES**
From base $10$ to other bases:
- Divide by the target base repeatedly
- Read remainders from bottom to top
- Example: $13_{10}$ to base $2$: $13\\div2=6\\text{ R}1$, $6\\div2=3\\text{ R}0$, $3\\div2=1\\text{ R}1$, $1\\div2=0\\text{ R}1$
- So $13_{10} = 1101_2$

From other bases to base $10$:
- Multiply each digit by its place value
- Add all products together`,
        interactive: "base-converter"
      }
    ]
  },
  {
    title: "Scales and Simple Map Problems",
    icon: "🗺️",
    content: `Scales help us represent large real-world distances on manageable maps and drawings.`,
    subsections: [
      {
        title: "Scale Ratios",
        content: `**SCALE RATIOS**
A scale shows the relationship between map distance and real distance:
- $1:50,000$ means $1\\text{ cm}$ on map $= 50,000\\text{ cm}$ in reality
- $1:100$ means $1\\text{ cm}$ on drawing $= 100\\text{ cm}$ in reality
- Always written as map distance : real distance`,
        interactive: "scale-ratios"
      },
      {
        title: "Scale Calculations",
        content: `**SCALE CALCULATIONS**
Finding real distance:
- If map distance $= 5\\text{ cm}$ and scale $= 1:20,000$
- Real distance $= 5 \\times 20,000 = 100,000\\text{ cm} = 1\\text{ km}$

Finding map distance:
- If real distance $= 3\\text{ km}$ and scale $= 1:50,000$
- Convert: $3\\text{ km} = 300,000\\text{ cm}$
- Map distance $= 300,000 \\div 50,000 = 6\\text{ cm}$`,
        interactive: "scale-calculator"
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