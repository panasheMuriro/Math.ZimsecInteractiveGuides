
// import { Section, QuizQuestion, MathJaxConfig } from '../Topic1/types';
import { Section, QuizQuestion } from "../types"

export const sections: Section[] = [
   {
    "title": "Number Concepts and Operations",
    "icon": "🔢",
    "content": "Number types are the foundation of mathematics. Let's explore the different families of numbers and operations step by step.",
    "subsections": [
      {
        "title": "Number Types",
        "content": `**NATURAL NUMBERS** ($\\mathbb{N}$)
These are the counting numbers: $1, 2, 3, 4, 5, \\ldots$
- They are used for counting objects.
- They are always positive.
- The set starts from $1$ and continues infinitely.
- Examples: the number of students in a class, the number of pages in a book.

**WHOLE NUMBERS** ($\\mathbb{W}$)
These are the natural numbers plus zero: $0, 1, 2, 3, 4, 5, \\ldots$
- They include zero, which represents "nothing."
- They are all non-negative integers.
- They form the foundation for basic arithmetic.
- Examples: the number of apples in an empty basket ($0$), the number of fingers on your hand ($10$).

**INTEGERS** ($\\mathbb{Z}$)
These are all whole numbers and their negatives: $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$
- They include positive numbers, negative numbers, and zero.
- They represent opposites (e.g., temperature above/below zero, debt/credit).
- They form a complete number line without fractions or decimals.
- Examples: A temperature of $-5^\\circ C$, a bank balance of $-100$.

**RATIONAL NUMBERS** ($\\mathbb{Q}$)
These are any numbers that can be expressed as a fraction $\\frac{p}{q}$, where $p$ and $q$ are integers and $q \\ne 0$.
- This includes all integers, as any integer $p$ can be written as $\\frac{p}{1}$.
- They can be represented as terminating or recurring decimals.
- Examples: $\\frac{1}{2}$, $0.75$ (which is $\\frac{3}{4}$), $-3$ (which is $\\frac{-3}{1}$), $0.333...$ (which is $\\frac{1}{3}$).

**IRRATIONAL NUMBERS** ($\\mathbb{P}$)
These are numbers that *cannot* be expressed as a simple fraction $\\frac{p}{q}$.
- Their decimal representation is non-terminating and non-recurring.
- Examples: $\\sqrt{2} \\approx 1.41421356...$, $\\pi \\approx 3.14159265...$, $e \\approx 2.71828...$

**REAL NUMBERS** ($\\mathbb{R}$)
This set includes all rational and irrational numbers.
- Any number you can find on a number line is a real number.
- It is the union of the set of rational numbers and the set of irrational numbers.
- Examples: $5$, $-7.2$, $\\frac{1}{2}$, $\\sqrt{3}$, $\\pi$.
`,
        "interactive": "number-types"
      },
      {
        "title": "Factors and H.C.F.",
        "content": `**FACTORS**
Numbers that divide evenly into another number.
- Factors of 12: $1, 2, 3, 4, 6, 12$
- Factors of 18: $1, 2, 3, 6, 9, 18$
- Every number has at least two factors: 1 and itself.
- Prime numbers have exactly two factors.

**HIGHEST COMMON FACTOR (H.C.F.)**
The largest number that divides two or more numbers.
- Also called the Greatest Common Divisor (G.C.D.).

**Methods to Find H.C.F.**

**1. Listing Method:**
This is best for smaller numbers.
- Find H.C.F. of 12 and 18:
  - Factors of 12: $1, 2, 3, 4, **6**, 12$
  - Factors of 18: $1, 2, 3, **6**, 9, 18$
- The common factors are $1, 2, 3, 6$.
- The H.C.F. is $6$ (the largest common factor).

**2. Prime Factorization Method:**
This is useful for larger numbers.
- Find H.C.F. of 24 and 36:
  - Find the prime factors of each number.
  - $24 = 2 \\times 12 = 2 \\times 2 \\times 6 = 2 \\times 2 \\times 2 \\times 3 = 2^3 \\times 3^1$
  - $36 = 2 \\times 18 = 2 \\times 2 \\times 9 = 2 \\times 2 \\times 3 \\times 3 = 2^2 \\times 3^2$
  - Take the lowest power of each *common* prime factor.
  - The common prime factors are 2 and 3. The lowest power of 2 is $2^2$ and the lowest power of 3 is $3^1$.
  - H.C.F. = $2^2 \\times 3^1 = 4 \\times 3 = 12$

**3. Division Method (Euclidean Algorithm):**
This is efficient for very large numbers.
- Find H.C.F. of 48 and 18:
  - Divide the larger number by the smaller: $48 \\div 18 = 2$ with a remainder of $12$.
  - Now divide the previous divisor (18) by the remainder (12): $18 \\div 12 = 1$ with a remainder of $6$.
  - Divide the previous divisor (12) by the new remainder (6): $12 \\div 6 = 2$ with a remainder of $0$.
  - The H.C.F. is the last non-zero remainder, which is $6$.

**Applications:**
- Simplifying fractions to their lowest terms (e.g., $\\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$).
- Sharing items equally among groups.
- Finding common measurements.`,
        "interactive": "factors-hcf"
      },
      {
        "title": "Multiples and L.C.M.",
        "content": `**MULTIPLES**
The result of multiplying a number by an integer.
- Multiples of 3: $3, 6, 9, 12, 15, 18, 21, 24, \\ldots$
- Multiples of 4: $4, 8, 12, 16, 20, 24, 28, 32, \\ldots$
- Every number has infinitely many multiples.

**LOWEST COMMON MULTIPLE (L.C.M.)**
The smallest positive number that is a multiple of two or more numbers.
- It is a crucial tool for adding and subtracting fractions.

**Methods to Find L.C.M.**

**1. Listing Method:**
This is best for small numbers.
- Find L.C.M. of 4 and 6:
  - Multiples of 4: $4, 8, **12**, 16, 20, **24**, \\ldots$
  - Multiples of 6: $6, **12**, 18, **24**, 30, \\ldots$
- The common multiples are $12, 24, 36, \\ldots$.
- The L.C.M. is $12$ (the smallest common multiple).

**2. Prime Factorization Method:**
This is a reliable method for any numbers.
- Find L.C.M. of 12 and 18:
  - Prime factors: $12 = 2^2 \\times 3^1$ and $18 = 2^1 \\times 3^2$
  - Take the highest power of each *prime factor* present in either number.
  - The highest power of 2 is $2^2$. The highest power of 3 is $3^2$.
  - L.C.M. = $2^2 \\times 3^2 = 4 \\times 9 = 36$.

**3. Division Method:**
This method is useful for finding the L.C.M. of three or more numbers.
- Find L.C.M. of 15, 20, and 25:
  - Divide the numbers by the smallest prime factor that divides at least one of them.
\\
$\\begin{array}{c|ccc}
2 & 15 & 20 & 25 \\\\
2 & 15 & 10 & 25 \\\\
5 & 15 & 5 & 25 \\\\
5 & 3 & 1 & 5 \\\\
3 & 3 & 1 & 1 \\\\
& 1 & 1 & 1
\\end{array}$
- L.C.M. = Multiply all the divisors on the left: $2 \\times 2 \\times 5 \\times 5 \\times 3 = 300$.

**Relationship between H.C.F. and L.C.M.:**
For any two numbers $a$ and $b$:
$H.C.F.(a,b) \\times L.C.M.(a,b) = a \\times b$
- Example: H.C.F. of 12 and 18 is 6. L.C.M. is 36.
- $6 \\times 36 = 216$
- $12 \\times 18 = 216$

**Applications:**
- Adding fractions with different denominators (e.g., $\\frac{1}{4} + \\frac{1}{6}$, L.C.M. of 4 and 6 is 12, so $\\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$).
- Finding when events repeat together (e.g., two buses leave at the same time and one returns every 15 minutes, the other every 20 minutes. L.C.M. of 15 and 20 is 60, so they will next leave together after 60 minutes).`,
        "interactive": "multiples-lcm"
      },
      {
     "title": "Directed Numbers",
 "content": `**DIRECTED NUMBERS**
Numbers with direction (positive or negative). They are often represented on a number line to show their relative positions.
- Positive numbers: $+5, +10, +3.2$ (above zero or to the right)
- Negative numbers: $-3, -7, -1.5$ (below zero or to the left)
- Zero is the origin and is neither positive nor negative.

**OPERATIONS WITH DIRECTED NUMBERS**

**Addition Rules:**
- **Same signs:** Add the absolute values and keep the sign.
  - $(+3) + (+5) = +8$
  - $(-4) + (-6) = -(4+6) = -10$
- **Different signs:** Subtract the smaller absolute value from the larger, and keep the sign of the number with the larger absolute value.
  - $(-7) + (+3) = -(7-3) = -4$
  - $(+9) + (-2) = +(9-2) = +7$

**Subtraction Rules:**
- **Change subtraction to addition of the opposite number.**
- $5 - (-3) = 5 + (+3) = 8$
- $-4 - 6 = -4 + (-6) = -10$
- $-2 - (-5) = -2 + (+5) = +3$
- $7 - 10 = 7 + (-10) = -3$
---
**Multiplication and Division Rules:**
- **Same signs give a positive result:**
  - $(+3) × (+4) = +12$
  - $(-3) × (-4) = +12$
  - $(+8) ÷ (+2) = +4$
  - $(-12) ÷ (-3) = +4$
- **Different signs give a negative result:**
  - $(+6) × (-2) = -12$
  - $(-5) × (+3) = -15$
  - $(+15) ÷ (-5) = -3$
  - $(-20) ÷ (+4) = -5$

**MEMORY AID FOR MULTIPLICATION/DIVISION:**
- "Like signs give positive" (+,+ or -,-)
- "Unlike signs give negative" (+,- or -,+)

---
**PRACTICAL APPLICATIONS:**
- **Temperature changes:** A temperature of $5^\\circ C$ drops by $8^\\circ C$: $5 - 8 = -3^\\circ C$.
- **Bank transactions:** Starting with a balance of $Z\\$50, you withdraw $Z\\$75$: $50 + (-75) = -Z\\$25$.
- **Elevation changes:** A submarine at $-200$m descends another $100$m: $-200 + (-100) = -300$m.

**COMMON MISTAKES TO AVOID:**
- **Double negatives:** Make sure to correctly handle signs, e.g., $-3 - (-5) = -3 + 5 = 2$.
- **Powers:** Be careful with brackets. $(-2)^2 = (-2) \\times (-2) = 4$, but $-2^2 = -(2 \\times 2) = -4$.
- **Multiplication order:** When multiplying many numbers, count the number of negative signs. An even number of negatives gives a positive result; an odd number of negatives gives a negative result.

**ADVANCED EXAMPLES:**
- $(-2) × 3 × (-1) × (-4) = -24$ (3 negative signs, so the result is negative).
- $\\frac{-15}{-3} + 2 × (-4) = 5 + (-8) = -3$.
- $|-7| + (-3) = 7 + (-3) = 4$ (Absolute value makes a number positive).`,
  "interactive": "directed-numbers"
},
      {
        "title": "Fractions and Percentages",
        "content": `**FRACTIONS**
Fractions represent parts of a whole, written as $\\frac{numerator}{denominator}$.
- **Proper fractions:** The numerator is smaller than the denominator, e.g., $\\frac{3}{4}, \\frac{2}{5}$. The value is less than 1.
- **Improper fractions:** The numerator is equal to or larger than the denominator, e.g., $\\frac{7}{4}, \\frac{9}{5}$. The value is 1 or greater.
- **Mixed numbers:** A whole number combined with a proper fraction, e.g., $1\\frac{3}{4}, 2\\frac{1}{2}$.

**CONVERTING BETWEEN FRACTION TYPES**
- **Mixed to Improper:** Multiply the whole number by the denominator, then add the numerator. The denominator stays the same.
  - $1\\frac{3}{4} = \\frac{(1 \\times 4) + 3}{4} = \\frac{7}{4}$
- **Improper to Mixed:** Divide the numerator by the denominator. The quotient is the whole number, the remainder is the new numerator.
  - $\\frac{9}{5} = 9 \\div 5 = 1$ remainder $4$, so the mixed number is $1\\frac{4}{5}$.

**OPERATIONS WITH FRACTIONS**
- **Addition/Subtraction:** You must find a common denominator (L.C.M. of the denominators) before adding or subtracting the numerators.
  - $\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$
- **Multiplication:** Multiply the numerators together and the denominators together.
  - $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$
- **Division:** Invert the second fraction (find its reciprocal) and then multiply.
  - $\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2} = 1\\frac{1}{2}$

**CONVERTING FRACTIONS TO DECIMALS**
- Divide the numerator by the denominator.
- $\\frac{1}{4} = 1 \\div 4 = 0.25$
- $\\frac{1}{3} = 1 \\div 3 = 0.333...$ or $0.\\overline{3}$ (repeating decimal)

---
**PERCENTAGES**
Percentages are fractions out of 100, represented by the symbol '%'.
- $\\frac{x}{100} = x\\%$
- $\\frac{1}{2} = \\frac{50}{100} = 50\\%$
- $0.75 = \\frac{75}{100} = 75\\%$

**PERCENTAGE CALCULATIONS**
- **Finding percentage of a number:** Convert the percentage to a decimal or fraction and multiply.
  - $25\\% \\text{ of } 80 = \\frac{25}{100} \\times 80 = 0.25 \\times 80 = 20$
- **Expressing one number as a percentage of another:** Divide the first number by the second and multiply by 100.
  - Express 15 as a percentage of 60: $\\frac{15}{60} \\times 100 = \\frac{1}{4} \\times 100 = 25\\%$
- **Finding percentage increase/decrease:**
  - Percentage change = $(\\frac{\\text{new value} - \\text{original value}}{\\text{original value}}) \\times 100$
  - A price increases from $Z\\$50 to $Z\\$60. The percentage increase is: $(\\frac{60 - 50}{50}) \\times 100 = (\\frac{10}{50}) \\times 100 = 20\\%$

**Practical applications:** discounts, tax, interest, population growth.`,
        "interactive": "fractions-percentages"
      },
  {
 "title": "Order of Operations",
 "content": `**ORDER OF OPERATIONS (BODMAS/PEMDAS)**
Rules for evaluating mathematical expressions in the correct sequence.

**BODMAS Memory Aid:**
- **B - Brackets** (Parentheses) [ ], ( ), { }
- **O - Orders** (Exponents/Powers/Indices) $x^2$, $\\sqrt{x}$
- **D - Division** $÷$, $/$
- **M - Multiplication** $×$, $\\cdot$, $*$
- **A - Addition** $+$
- **S - Subtraction** $-$

**PEMDAS Memory Aid (Alternative):**
- **P - Parentheses** ( )
- **E - Exponents** $x^2$
- **M - Multiplication** $×$
- **D - Division** $÷$
- **A - Addition** $+$
- **S - Subtraction** $-$

**KEY RULES:**

**1. Brackets First (Innermost to Outermost):**
- $3 × (4 + 2) = 3 × 6 = 18$
- $2 × [(5 + 3) × 2] = 2 × [8 × 2] = 2 × 16 = 32$

**2. Powers/Exponents Next:**
- $2 + 3^2 = 2 + 9 = 11$ (not $5^2 = 25$)
- $(2 + 3)^2 = 5^2 = 25$

**3. Division and Multiplication (Left to Right):**
- $12 ÷ 3 × 2 = 4 × 2 = 8$ (not $12 ÷ 6 = 2$)

**4. Addition and Subtraction (Left to Right):**
- $10 - 3 + 2 = 7 + 2 = 9$ (not $10 - 5 = 5$)

**STEP-BY-STEP EXAMPLES:**

**Example 1:** $3 + 4 × 2^2$
Step 1: Powers first → $2^2 = 4$
Step 2: $3 + 4 × 4$
Step 3: Multiplication → $4 × 4 = 16$
Step 4: Addition → $3 + 16 = 19$

**Example 2:** $(5 + 3) × 2^2 - 4$
Step 1: Brackets → $(5 + 3) = 8$
Step 2: Powers → $2^2 = 4$
Step 3: $8 × 4 - 4$
Step 4: Multiplication → $8 × 4 = 32$
Step 5: Subtraction → $32 - 4 = 28$

**Example 3:** $6 + 18 ÷ 3^2 - 2 × 4$
Step 1: Powers → $3^2 = 9$
Step 2: $6 + 18 ÷ 9 - 2 × 4$
Step 3: Division and Multiplication (left to right) → $18 ÷ 9 = 2$, then $2 × 4 = 8$
Step 4: $6 + 2 - 8$
Step 5: Addition and Subtraction (left to right) → $6 + 2 = 8$, then $8 - 8 = 0$

**COMMON MISTAKES TO AVOID:**

- **Incorrect order:** Always follow the BODMAS/PEMDAS sequence.
- **Left-to-right priority:** Remember that multiplication/division and addition/subtraction have equal priority and are evaluated from left to right.
- **Negative signs and powers:** Be careful with signs, as shown in the Directed Numbers section.

**PRACTICE TIPS:**
1. Always work step-by-step.
2. Show each calculation clearly to avoid errors.
3. Use brackets to make your intention clear when writing expressions.`,
 "interactive": "order-operations"
},
      {
        "title": "Squares and Square Roots",
        "content": `**SQUARES**
A number multiplied by itself: $n^2 = n \\times n$.
- $3^2 = 3 \\times 3 = 9$
- $(-4)^2 = (-4) \\times (-4) = 16$
- **Perfect squares:** Integers that are the square of another integer, e.g., $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$.

**SQUARE ROOTS**
The opposite of squaring. The square root of a number $n$ is a number that, when multiplied by itself, gives $n$.
- $\\sqrt{25} = 5$ because $5^2 = 25$.
- $\\sqrt{64} = 8$ because $8^2 = 64$.
- Every positive number has two square roots: one positive and one negative. For example, $\\sqrt{16} = \\pm 4$, since both $4^2 = 16$ and $(-4)^2 = 16$. However, when the symbol $\\sqrt{}$ is used, it refers to the **principal (positive) square root**. So, $\\sqrt{16}=4$.

**CALCULATING SQUARE ROOTS**
- **Perfect squares:** It's helpful to memorize the common ones.
- **Estimation:** To estimate $\\sqrt{50}$, you know that $7^2 = 49$ and $8^2 = 64$, so $\\sqrt{50}$ is a little more than 7.
- **Simplifying non-perfect squares:** Sometimes you can simplify a square root by factoring.
  - $\\sqrt{8} = \\sqrt{4 \\times 2} = \\sqrt{4} \\times \\sqrt{2} = 2\\sqrt{2}$
  - $\\sqrt{75} = \\sqrt{25 \\times 3} = \\sqrt{25} \\times \\sqrt{3} = 5\\sqrt{3}$

**APPLICATIONS**
- **Area problems:** If the area of a square is $36 \\text{ cm}^2$, the side length is $\\sqrt{36} = 6$ cm.
- **Pythagorean theorem:** In a right-angled triangle, $a^2 + b^2 = c^2$, where $c = \\sqrt{a^2 + b^2}$.
- **Distance calculations:** The distance between two points on a graph can be found using a form of the Pythagorean theorem.`,
        "interactive": "squares-square-roots"
      },
      {
        "title": "Cubes and Cube Roots",
        "content": `**CUBES**
A number multiplied by itself three times: $n^3 = n \\times n \\times n$.
- $2^3 = 2 \\times 2 \\times 2 = 8$
- $(-3)^3 = (-3) \\times (-3) \\times (-3) = -27$
- **Perfect cubes:** Integers that are the cube of another integer, e.g., $1, 8, 27, 64, 125, 216, 343, 512, 729, \\ldots$.

**CUBE ROOTS**
The opposite of cubing. The cube root of a number $n$ is a number that, when multiplied by itself three times, gives $n$.
- $\\sqrt[3]{27} = 3$ because $3^3 = 27$.
- $\\sqrt[3]{-8} = -2$ because $(-2)^3 = -8$.
- Unlike square roots, every real number has exactly one real cube root. The cube root of a negative number is negative.

**CALCULATING CUBE ROOTS**
- **Perfect cubes:** Memorizing common ones is helpful.
- **Estimation:** To estimate $\\sqrt[3]{50}$, you know that $3^3 = 27$ and $4^3 = 64$, so $\\sqrt[3]{50}$ is between 3 and 4.
- **Calculator:** Used for non-perfect cubes.

**APPLICATIONS**
- **Volume problems:** If the volume of a cube is $125 \\text{ cm}^3$, the side length is $\\sqrt[3]{125} = 5$ cm.
- **Scaling in three dimensions:** When you double the side length of a cube, the volume increases by a factor of $2^3=8$.`,
        "interactive": "cubes-cube-roots"
      },
      {
        "title": "Number Patterns",
        "content": `**NUMBER PATTERNS (SEQUENCES)**
A sequence is an ordered list of numbers. The rule of the sequence describes how the numbers are generated.

**ARITHMETIC SEQUENCES**
A sequence where the difference between consecutive terms is constant. This constant difference is called the **common difference ($d$)**.
- Example: $2, 5, 8, 11, 14, \\ldots$ (common difference is 3).
- **$n^{th}$ term formula:** $a_n = a_1 + (n-1)d$
  - Where $a_n$ is the $n^{th}$ term, $a_1$ is the first term, and $d$ is the common difference.
  - For the example above, the $n^{th}$ term is $a_n = 2 + (n-1)3$. The 10th term would be $a_{10} = 2 + (10-1)3 = 2 + 9(3) = 2 + 27 = 29$.

**GEOMETRIC SEQUENCES**
A sequence where each term after the first is found by multiplying the previous one by a fixed, non-zero number called the **common ratio ($r$)**.
- Example: $3, 6, 12, 24, 48, \\ldots$ (common ratio is 2).
- **$n^{th}$ term formula:** $a_n = a_1 \\times r^{n-1}$
  - For the example above, the $n^{th}$ term is $a_n = 3 \\times 2^{n-1}$. The 5th term is $a_5 = 3 \\times 2^{5-1} = 3 \\times 2^4 = 3 \\times 16 = 48$.

**SQUARE NUMBER PATTERNS**
The sequence of perfect squares.
- Pattern: $1, 4, 9, 16, 25, \\ldots$
- The difference between consecutive terms increases by 2 each time ($3, 5, 7, 9, \\ldots$).
- **$n^{th}$ square number:** $n^2$

**TRIANGULAR NUMBER PATTERNS**
A sequence formed by adding consecutive positive integers.
- Pattern: $1, 3, 6, 10, 15, \\ldots$
- **$n^{th}$ triangular number:** $T_n = \\frac{n(n+1)}{2}$

**FIBONACCI SEQUENCE**
A sequence where each term is the sum of the two preceding terms.
- Pattern: $0, 1, 1, 2, 3, 5, 8, 13, 21, \\ldots$

**FINDING PATTERNS**
- Look for a constant difference to identify an arithmetic sequence.
- Look for a constant ratio to identify a geometric sequence.
- Identify the rule and use it to predict the next terms in the sequence.

**Applications in real-world scenarios:**
- **Financial growth:** Simple interest follows an arithmetic sequence, while compound interest follows a geometric sequence.
- **Nature:** The Fibonacci sequence appears in the branching of trees, the arrangement of leaves on a stem, and the spiral patterns of pinecones and sunflowers.`,
        "interactive": "number-patterns"
      }
    ]
  },
//   {
//     "title": "Number Concepts and Operations",
//     "icon": "🔢",
//     "content": "Number types are the foundation of mathematics. Let's explore the different families of numbers and operations step by step.",
//     "subsections": [
//       {
//         "title": "Number Types",
//         "content": `**NATURAL NUMBERS** ($\\mathbb{N}$)
// These are the counting numbers: $1, 2, 3, 4, 5, \\ldots$
// - They are used for counting objects.
// - They are always positive.
// - The set starts from $1$ and continues infinitely.
// - Examples: the number of students in a class, the number of pages in a book.

// **WHOLE NUMBERS** ($\\mathbb{W}$)
// These are the natural numbers plus zero: $0, 1, 2, 3, 4, 5, \\ldots$
// - They include zero, which represents "nothing."
// - They are all non-negative integers.
// - They form the foundation for basic arithmetic.
// - Examples: the number of apples in an empty basket ($0$), the number of fingers on your hand ($10$).

// **INTEGERS** ($\\mathbb{Z}$)
// These are all whole numbers and their negatives: $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$
// - They include positive numbers, negative numbers, and zero.
// - They represent opposites (e.g., temperature above/below zero, debt/credit).
// - They form a complete number line without fractions or decimals.
// - Examples: A temperature of $-5^\\circ C$, a bank balance of $-100$.

// **RATIONAL NUMBERS** ($\\mathbb{Q}$)
// These are any numbers that can be expressed as a fraction $\\frac{p}{q}$, where $p$ and $q$ are integers and $q \\ne 0$.
// - This includes all integers, as any integer $p$ can be written as $\\frac{p}{1}$.
// - They can be represented as terminating or recurring decimals.
// - Examples: $\\frac{1}{2}$, $0.75$ (which is $\\frac{3}{4}$), $-3$ (which is $\\frac{-3}{1}$), $0.333...$ (which is $\\frac{1}{3}$).

// **IRRATIONAL NUMBERS** ($\\mathbb{P}$)
// These are numbers that *cannot* be expressed as a simple fraction $\\frac{p}{q}$.
// - Their decimal representation is non-terminating and non-recurring.
// - Examples: $\\sqrt{2} \\approx 1.41421356...$, $\\pi \\approx 3.14159265...$, $e \\approx 2.71828...$

// **REAL NUMBERS** ($\\mathbb{R}$)
// This set includes all rational and irrational numbers.
// - Any number you can find on a number line is a real number.
// - It is the union of the set of rational numbers and the set of irrational numbers.
// - Examples: $5$, $-7.2$, $\\frac{1}{2}$, $\\sqrt{3}$, $\\pi$.`,
//         "interactive": "number-types"
//       },
//       {
//         "title": "Factors and H.C.F.",
//         "content": `**FACTORS**
// Numbers that divide evenly into another number
// - Factors of 12: $1, 2, 3, 4, 6, 12$
// - Factors of 18: $1, 2, 3, 6, 9, 18$
// - Every number has at least two factors: 1 and itself
// - Prime numbers have exactly two factors

// **HIGHEST COMMON FACTOR (H.C.F.)**
// The largest number that divides two or more numbers
// - Also called Greatest Common Divisor (G.C.D.)

// **Methods to Find H.C.F.**

// **1. Listing Method:**
// Find H.C.F. of 12 and 18:
// - Factors of 12: $1, 2, 3, 4, 6, 12$
// - Factors of 18: $1, 2, 3, 6, 9, 18$
// - Common factors: $1, 2, 3, 6$
// - H.C.F. = $6$ (largest common factor)

// **2. Prime Factorization Method:**
// Find H.C.F. of 24 and 36:
// - $24 = 2^3 \\times 3^1$
// - $36 = 2^2 \\times 3^2$
// - H.C.F. = $2^2 \\times 3^1 = 4 \\times 3 = 12$

// **3. Division Method (Euclidean Algorithm):**
// Find H.C.F. of 48 and 18:
// - $48 \\div 18 = 2$ remainder $12$
// - $18 \\div 12 = 1$ remainder $6$
// - $12 \\div 6 = 2$ remainder $0$
// - H.C.F. = $6$ (last non-zero remainder)

// **Applications:**
// - Simplifying fractions to lowest terms
// - Sharing items equally among groups
// - Finding common measurements`,
//         "interactive": "factors-hcf"
//       },
//       {
//         "title": "Multiples and L.C.M.",
//         "content": `**MULTIPLES**
// Results of multiplying a number by integers
// - Multiples of 3: $3, 6, 9, 12, 15, 18, 21, 24, \\ldots$
// - Multiples of 4: $4, 8, 12, 16, 20, 24, 28, 32, \\ldots$
// - Every number has infinitely many multiples

// **LOWEST COMMON MULTIPLE (L.C.M.)**
// The smallest positive number that is a multiple of two or more numbers
// - Used for adding fractions with different denominators
// - Finding common time intervals

// **Methods to Find L.C.M.**

// **1. Listing Method:**
// Find L.C.M. of 4 and 6:
// - Multiples of 4: $4, 8, 12, 16, 20, 24, \\ldots$
// - Multiples of 6: $6, 12, 18, 24, 30, \\ldots$
// - Common multiples: $12, 24, 36, \\ldots$
// - L.C.M. = $12$ (smallest common multiple)

// **2. Prime Factorization Method:**
// Find L.C.M. of 12 and 18:
// - $12 = 2^2 \\times 3^1$
// - $18 = 2^1 \\times 3^2$
// - L.C.M. = $2^2 \\times 3^2 = 4 \\times 9 = 36$

// **3. Division Method:**
// Find L.C.M. of 15, 20, and 25:
// \\
// $\\begin{array}{c|ccc}
// 2 & 15 & 20 & 25 \\\\
// 2 & 15 & 10 & 25 \\\\
// 5 & 15 & 5 & 25 \\\\
// 5 & 3 & 1 & 5 \\\\
// 3 & 3 & 1 & 1 \\\\
// & 1 & 1 & 1
// \\end{array}$

// L.C.M. = $2 \\times 2 \\times 5 \\times 5 \\times 3 = 300$

// **Relationship between H.C.F. and L.C.M.:**
// For any two numbers $a$ and $b$:
// $H.C.F.(a,b) \\times L.C.M.(a,b) = a \\times b$

// **Applications:**
// - Adding fractions with different denominators
// - Finding when events repeat together
// - Scheduling problems`,
//         "interactive": "multiples-lcm"
//       },
//       {
//      "title": "Directed Numbers",
//  "content": `**DIRECTED NUMBERS**
// Numbers with direction (positive or negative)
// - Positive numbers: $+5, +10, +3.2$ (above zero)
// - Negative numbers: $-3, -7, -1.5$ (below zero)
// - Zero is neither positive nor negative


// **OPERATIONS WITH DIRECTED NUMBERS**

// **Addition Rules:**
// - Same signs: Add absolute values and keep the sign
//   - $(+3) + (+5) = +8$
//   - $(-4) + (-6) = -10$
// - Different signs: Subtract smaller from larger, keep sign of larger
//   - $(-7) + (+3) = -4$ (since $|-7| > |+3|$)
//   - $(+9) + (-2) = +7$ (since $|+9| > |-2|$)

// **Subtraction Rules:**
// - Change subtraction to addition of opposite
//   - $5 - (-3) = 5 + (+3) = 8$
//   - $-4 - 6 = -4 + (-6) = -10$
//   - $-2 - (-5) = -2 + (+5) = +3$
//   - $7 - 10 = 7 + (-10) = -3$
//  ---
// **Multiplication and Division Rules:**
// - Same signs give positive result:
//   - $(+3) × (+4) = +12$
//   - $(-3) × (-4) = +12$
//   - $(+8) ÷ (+2) = +4$
//   - $(-12) ÷ (-3) = +4$
// - Different signs give negative result:
//   - $(+6) × (-2) = -12$
//   - $(-5) × (+3) = -15$
//   - $(+15) ÷ (-5) = -3$
//   - $(-20) ÷ (+4) = -5$

// **MEMORY AID FOR MULTIPLICATION/DIVISION:**
// - "Like signs give positive" (+,+ or -,-)
// - "Unlike signs give negative" (+,- or -,+)

// ---
// **PRACTICAL APPLICATIONS:**
// - **Temperature changes:** $5°C - 8°C = -3°C$ (3 degrees below zero)
// - **Bank transactions:** Starting balance $£50$, withdraw $£75$: $50 + (-75) = -£25$ (overdrawn)
// - **Elevation changes:** Sea level = 0m, mountain peak = +2000m, ocean depth = -500m
// - **Profit and Loss:** Profit = positive, Loss = negative
// - **Sports scores:** Goals for = positive, goals against = negative difference

// ---
// **COMMON MISTAKES TO AVOID:**
// - $-3 - 5 ≠ -3 + 5$ (Don't change the sign incorrectly)
// - $(-2)^2 ≠ -2^2$ (Mind the brackets with powers)
// - When multiplying many numbers, count negative signs: even count = positive, odd count = negative

// **NUMBER LINE ADDITION EXAMPLE:**
// To calculate $(-3) + (+5)$:
// 1. Start at $-3$
// 2. Move 5 units right (positive direction)
// 3. End at $+2$

// **ADVANCED EXAMPLES:**
// - $(-2) × 3 × (-1) × (-4) = (-2) × 3 × (+4) = +24$
// - $\\frac{-15}{-3} + 2 × (-4) = 5 + (-8) = -3$
// - $|-7| + (-3) = 7 + (-3) = 4$ (absolute value makes -7 positive)`,
//   "interactive": "directed-numbers"
// },
//       {
//         "title": "Fractions and Percentages",
//         "content": `**FRACTIONS**
// Parts of a whole: $\\frac{numerator}{denominator}$
// - Proper fractions: $\\frac{3}{4}, \\frac{2}{5}$ (numerator < denominator)
// - Improper fractions: $\\frac{7}{4}, \\frac{9}{5}$ (numerator ≥ denominator)
// - Mixed numbers: $1\\frac{3}{4}, 2\\frac{1}{2}$

// **OPERATIONS WITH FRACTIONS**
// - Addition/Subtraction: Find common denominator
// - Multiplication: Multiply numerators and denominators
// - Division: Multiply by reciprocal

// **CONVERTING FRACTIONS TO DECIMALS**
// - Divide numerator by denominator
// - $\\frac{1}{4} = 1 \\div 4 = 0.25$
// - $\\frac{1}{3} = 0.\\overline{3}$ (repeating decimal)

// **PERCENTAGES**
// Fractions out of 100: $\\frac{x}{100} = x\\%$
// - $\\frac{1}{2} = \\frac{50}{100} = 50\\%$
// - $0.75 = \\frac{75}{100} = 75\\%$

// **PERCENTAGE CALCULATIONS**
// - Finding percentage of a number: $25\\% \\text{ of } 80 = \\frac{25}{100} \\times 80 = 20$
// - Finding percentage increase/decrease
// - Practical applications: discounts, tax, interest`,
//         "interactive": "fractions-percentages"
//       },
//   {
//  "title": "Order of Operations",
//  "content": `**ORDER OF OPERATIONS (BODMAS/PEMDAS)**
// Rules for evaluating mathematical expressions in the correct sequence

// **BODMAS Memory Aid:**
// - **B - Brackets** (Parentheses) [ ], ( ), { }
// - **O - Orders** (Exponents/Powers/Indices) $x^2$, $\\sqrt{x}$
// - **D - Division** $÷$, $/$
// - **M - Multiplication** $×$, $\\cdot$, $*$
// - **A - Addition** $+$
// - **S - Subtraction** $-$

// **PEMDAS Memory Aid (Alternative):**
// - **P - Parentheses** ( )
// - **E - Exponents** $x^2$
// - **M - Multiplication** $×$
// - **D - Division** $÷$
// - **A - Addition** $+$
// - **S - Subtraction** $-$

// **KEY RULES:**

// **1. Brackets First (Innermost to Outermost):**
// - $3 × (4 + 2) = 3 × 6 = 18$
// - $2 × [(5 + 3) × 2] = 2 × [8 × 2] = 2 × 16 = 32$
// - $\\{[(2 + 3) × 4] - 6\\} = \\{[5 × 4] - 6\\} = \\{20 - 6\\} = 14$

// **2. Powers/Exponents Next:**
// - $2 + 3^2 = 2 + 9 = 11$ (not $5^2 = 25$)
// - $5^2 + 2^3 = 25 + 8 = 33$
// - $(2 + 3)^2 = 5^2 = 25$
// - $2 × 3^2 = 2 × 9 = 18$ (not $6^2 = 36$)

// **3. Division and Multiplication (Left to Right):**
// - $12 ÷ 3 × 2 = 4 × 2 = 8$ (not $12 ÷ 6 = 2$)
// - $2 × 6 ÷ 3 = 12 ÷ 3 = 4$
// - $20 ÷ 4 × 5 = 5 × 5 = 25$

// **4. Addition and Subtraction (Left to Right):**
// - $10 - 3 + 2 = 7 + 2 = 9$ (not $10 - 5 = 5$)
// - $5 + 8 - 3 = 13 - 3 = 10$
// - $15 - 7 + 4 - 2 = 8 + 4 - 2 = 12 - 2 = 10$

// **STEP-BY-STEP EXAMPLES:**

// **Example 1:** $3 + 4 × 2^2$
// Step 1: Powers first → $2^2 = 4$
// Step 2: $3 + 4 × 4$
// Step 3: Multiplication → $4 × 4 = 16$
// Step 4: Addition → $3 + 16 = 19$

// **Example 2:** $(5 + 3) × 2^2 - 4$
// Step 1: Brackets → $(5 + 3) = 8$
// Step 2: Powers → $2^2 = 4$
// Step 3: $8 × 4 - 4$
// Step 4: Multiplication → $8 × 4 = 32$
// Step 5: Subtraction → $32 - 4 = 28$

// **Example 3:** $6 + 18 ÷ 3^2 - 2 × 4$
// Step 1: Powers → $3^2 = 9$
// Step 2: $6 + 18 ÷ 9 - 2 × 4$
// Step 3: Division and Multiplication (left to right) → $18 ÷ 9 = 2$, then $2 × 4 = 8$
// Step 4: $6 + 2 - 8$
// Step 5: Addition and Subtraction (left to right) → $6 + 2 = 8$, then $8 - 8 = 0$

// **COMPLEX EXAMPLES:**

// **Example 4:** $2 ×\\{3 + [4 × (5 - 2)]^2\\} ÷ 6$
// Step 1: Innermost brackets → $(5 - 2) = 3$
// Step 2: $2 × \\{3 + [4 × 3]^2\\} ÷ 6$
// Step 3: Next brackets → $4 × 3 = 12$
// Step 4: $2 × \\{3 + 12^2\\} ÷ 6$
// Step 5: Powers → $12^2 = 144$
// Step 6: $2 × \\{3 + 144\\} ÷ 6$
// Step 7: Final brackets → $3 + 144 = 147$
// Step 8: $2 × 147 ÷ 6$
// Step 9: Left to right → $2 × 147 = 294$, then $294 ÷ 6 = 49$

// **MIXED OPERATIONS WITH DIFFERENT NUMBER TYPES:**

// **With Fractions:**
// - $\frac{1}{2} + 3 × \frac{2}{3} = \frac{1}{2} + 2 = 2\frac{1}{2}$
// - $(\frac{3}{4})^2 + \frac{1}{4} = \frac{9}{16} + \frac{4}{16} = \frac{13}{16}$

// **With Decimals:**
// - $2.5 + 3 × 1.2 = 2.5 + 3.6 = 6.1$
// - $(1.5 + 0.5)^2 = 2^2 = 4$

// **With Directed Numbers:**
// - $-3 + 2 × (-4) = -3 + (-8) = -11$
// - $(-2)^3 + 5 = -8 + 5 = -3$
// - $5 - 3 × (-2) = 5 - (-6) = 5 + 6 = 11$

// **COMMON MISTAKES TO AVOID:**

// **❌ Wrong:** $2 + 3 × 4 = 5 × 4 = 20$
// **✅ Correct:** $2 + 3 × 4 = 2 + 12 = 14$

// **❌ Wrong:** $12 ÷ 3 × 2 = 12 ÷ 6 = 2$
// **✅ Correct:** $12 ÷ 3 × 2 = 4 × 2 = 8$

// **❌ Wrong:** $-2^2 = (-2)^2 = 4$
// **✅ Correct:** $-2^2 = -(2^2) = -4$ and $(-2)^2 = 4$

// **REAL-WORLD APPLICATIONS:**

// **Shopping Calculation:**
// "Buy 3 items at £5 each, get 20% discount, plus £2 delivery"
// $3 × 5 × (1 - 0.2) + 2 = 3 × 5 × 0.8 + 2 = 15 × 0.8 + 2 = 12 + 2 = £14$

// **Area Calculations:**
// "Rectangle with length (5 + 3) and width (2 × 3)"
// Area $= (5 + 3) × (2 × 3) = 8 × 6 = 48$ square units

// **Interest Calculations:**
// "£100 invested at 5% for 2 years"
// Final amount $= 100 × (1 + 0.05)^2 = 100 × 1.05^2 = 100 × 1.1025 = £110.25$

// **MEMORY TECHNIQUES:**
// - **"Please Excuse My Dear Aunt Sally"** (PEMDAS)
// - **"Big Elephants Destroy Many Animals Seriously"** (BEDMAS)
// - **"Brackets Orders Division Multiplication Addition Subtraction"** (BODMAS)

// **PRACTICE TIPS:**
// 1. Always work step-by-step
// 2. Show each calculation clearly
// 3. Double-check by working backwards
// 4. Use brackets to make your intention clear when writing expressions`,
//  "interactive": "order-operations"
// },
//       {
//         "title": "Squares and Square Roots",
//         "content": `**SQUARES**
// A number multiplied by itself: $n^2 = n \\times n$
// - $3^2 = 3 \\times 3 = 9$
// - $(-4)^2 = (-4) \\times (-4) = 16$
// - Perfect squares: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$

// **SQUARE ROOTS**
// The opposite of squaring: $\\sqrt{n^2} = n$
// - $\\sqrt{25} = 5$ because $5^2 = 25$
// - $\\sqrt{64} = 8$ because $8^2 = 64$
// - Every positive number has two square roots: $\\pm\\sqrt{16} = \\pm 4$

// **CALCULATING SQUARE ROOTS**
// - Perfect squares: memorize common ones
// - Estimation: $\\sqrt{50}$ is between 7 and 8 (since $7^2 = 49$ and $8^2 = 64$)
// - Calculator for non-perfect squares

// **APPLICATIONS**
// - Area problems: finding side length of squares
// - Pythagorean theorem in right triangles
// - Distance calculations`,
//         "interactive": "squares-square-roots"
//       },
//       {
//         "title": "Cubes and Cube Roots",
//         "content": `**CUBES**
// A number multiplied by itself three times: $n^3 = n \\times n \\times n$
// - $2^3 = 2 \\times 2 \\times 2 = 8$
// - $(-3)^3 = (-3) \\times (-3) \\times (-3) = -27$
// - Perfect cubes: $1, 8, 27, 64, 125, 216, 343, 512, 729, \\ldots$

// **CUBE ROOTS**
// The opposite of cubing: $\\sqrt[3]{n^3} = n$
// - $\\sqrt[3]{27} = 3$ because $3^3 = 27$
// - $\\sqrt[3]{-8} = -2$ because $(-2)^3 = -8$
// - Unlike square roots, cube roots of negative numbers are negative

// **CALCULATING CUBE ROOTS**
// - Perfect cubes: memorize common ones
// - Estimation: $\\sqrt[3]{50}$ is between 3 and 4 (since $3^3 = 27$ and $4^3 = 64$)
// - Calculator for non-perfect cubes

// **APPLICATIONS**
// - Volume problems: finding side length of cubes
// - Scaling in three dimensions
// - Real-world applications in engineering and physics`,
//         "interactive": "cubes-cube-roots"
//       },
//       {
//         "title": "Number Patterns",
//         "content": `**ARITHMETIC SEQUENCES**
// Patterns with constant difference between terms
// - Example: $2, 5, 8, 11, 14, \\ldots$ (difference = 3)
// - $n^{th}$ term formula: $a_n = a_1 + (n-1)d$

// **GEOMETRIC SEQUENCES**
// Patterns with constant ratio between terms
// - Example: $3, 6, 12, 24, 48, \\ldots$ (ratio = 2)
// - $n^{th}$ term formula: $a_n = a_1 \\times r^{n-1}$

// **SQUARE NUMBER PATTERNS**
// - $1, 4, 9, 16, 25, \\ldots$ (differences: $3, 5, 7, 9, \\ldots$)
// - $n^{th}$ square number: $n^2$

// **TRIANGULAR NUMBER PATTERNS**
// - $1, 3, 6, 10, 15, \\ldots$ (adding consecutive integers)
// - $n^{th}$ triangular number: $\\frac{n(n+1)}{2}$

// **FIBONACCI SEQUENCE**
// Each term is sum of previous two: $1, 1, 2, 3, 5, 8, 13, 21, \\ldots$

// **FINDING PATTERNS**
// - Look for differences between consecutive terms
// - Check for multiplication/division relationships
// - Identify the rule and predict next terms
// - Real-world applications in nature, art, and science`,
//         "interactive": "number-patterns"
//       }
//     ]
//   },

  {
    "title": "Approximations and Estimations",
    "icon": "📏",
    "content": "Approximations help us work with numbers that are easier to handle while maintaining reasonable accuracy.",
    "subsections": [
      {
        "title": "Rounding Off Numbers",
        "content": `**ROUNDING OFF NUMBERS**

**Rules for Rounding:**
- Look at the digit to the right of the place you're rounding to
- If it's $\\geq 5$, round up
- If it's $< 5$, round down

**Rounding to Decimal Places:**
- $3.67 \\rightarrow 3.7$ (to 1 d.p.)
- $2.834 \\rightarrow 2.83$ (to 2 d.p.)
- $0.0476 \\rightarrow 0.05$ (to 2 d.p.)

**Rounding to Nearest Whole Numbers:**
- $7.3 \\rightarrow 7$ (round down)
- $8.6 \\rightarrow 9$ (round up)
- $5.5 \\rightarrow 6$ (round up when exactly halfway)

**Rounding to Powers of 10:**
- $245 \\rightarrow 250$ (to nearest 10)
- $1,847 \\rightarrow 1,800$ (to nearest 100)
- $23,456 \\rightarrow 20,000$ (to nearest 10,000)

**Special Case - The Number 5:**
When the digit is exactly 5, always round up:
- $2.5 \\rightarrow 3$
- $14.5 \\rightarrow 15$
- $0.25 \\rightarrow 0.3$ (to 1 d.p.)

**Practical Applications:**
- Money calculations (rounding to nearest cent)
- Measurements in construction
- Population statistics
- Scientific data presentation`,
        "interactive": "rounding-game"
      },
      {
        "title": "Decimal Places and Significant Figures",
        "content": `**DECIMAL PLACES (d.p.)**
Count digits after the decimal point:
- $3.456$ has 3 decimal places
- $0.2$ has 1 decimal place
- $15.0$ has 1 decimal place
- $7$ has 0 decimal places

**Examples of Rounding to Decimal Places:**
- $15.679$ to 2 d.p. = $15.68$
- $0.0054$ to 3 d.p. = $0.005$
- $123.456789$ to 1 d.p. = $123.5$

**SIGNIFICANT FIGURES (s.f.)**
Count meaningful digits from the first non-zero digit:

**Rules for Counting Significant Figures:**
1. All non-zero digits are significant: $3.456$ has 4 s.f.
2. Zeros between non-zero digits are significant: $105$ has 3 s.f.
3. Leading zeros are not significant: $0.00456$ has 3 s.f.
4. Trailing zeros after decimal point are significant: $3.400$ has 4 s.f.
5. Trailing zeros in whole numbers may or may not be significant: $3400$ could have 2, 3, or 4 s.f.

**Examples of Significant Figures:**
- $0.00456$ has 3 s.f. (4, 5, 6)
- $105.0$ has 4 s.f. (1, 0, 5, 0)
- $2.300$ has 4 s.f. (2, 3, 0, 0)
- $5000$ has 1 s.f. (unless specified otherwise)

**Rounding to Significant Figures:**
- $15.679$ to 3 s.f. = $15.7$
- $0.004561$ to 2 s.f. = $0.0046$
- $12345$ to 2 s.f. = $12000$

**When to Use Each:**
- Decimal places: Precise measurements, money
- Significant figures: Scientific calculations, large numbers`,
        "interactive": "decimal-places"
      },
      {
        "title": "Estimations",
        "content": `**ESTIMATIONS**
Make quick calculations easier by rounding numbers first:

**Basic Estimation Strategies:**
1. Round numbers to convenient values
2. Use mental math shortcuts
3. Check if your answer is reasonable

**Multiplication Estimations:**
- $19.8 \\times 4.2 \\approx 20 \\times 4 = 80$
- $7.8 \\times 12.1 \\approx 8 \\times 12 = 96$
- $49 \\times 21 \\approx 50 \\times 20 = 1000$

**Division Estimations:**
- $297 \\div 3.1 \\approx 300 \\div 3 = 100$
- $487 \\div 23 \\approx 500 \\div 25 = 20$
- $156 \\div 7.8 \\approx 160 \\div 8 = 20$

**Addition and Subtraction Estimations:**
- $23.7 + 45.2 + 31.8 \\approx 24 + 45 + 32 = 101$
- $198 - 47 \\approx 200 - 50 = 150$

**Complex Calculations:**
- $\\frac{19.8 \\times 4.2}{3.1} \\approx \\frac{20 \\times 4}{3} = \\frac{80}{3} \\approx 27$
- $\\sqrt{48} \\approx \\sqrt{49} = 7$

**Real-World Applications:**
- Shopping: Estimating total cost
- Travel: Calculating journey time and distance
- Cooking: Adjusting recipe quantities
- Construction: Material estimates
- Science: Quick checks of experimental results

**Checking Calculator Results:**
Always estimate first to catch errors:
- If $23 \\times 45$ gives you $10,035$, estimate: $20 \\times 50 = 1,000$ (calculator error!)
- If $\\frac{144}{12}$ gives you $1.2$, estimate: $\\frac{120}{12} = 10$ (decimal point error!)`,
        "interactive": "estimation-game"
      },
      {
        "title": "Limits of Accuracy",
        "content": `**LIMITS OF ACCURACY**
Understanding the range of possible values for rounded numbers:

**Basic Concept:**
When a number is rounded, the actual value lies within a specific range.

**For Decimal Places:**
- $5.2$ cm (to 1 d.p.) means: $5.15 \\leq x < 5.25$
- $3.45$ m (to 2 d.p.) means: $3.445 \\leq x < 3.455$
- $12.0$ kg (to 1 d.p.) means: $11.95 \\leq x < 12.05$

**For Significant Figures:**
- $3400$ (to 2 s.f.) means: $3350 \\leq x < 3450$
- $0.056$ (to 2 s.f.) means: $0.0555 \\leq x < 0.0565$
- $1.2$ (to 2 s.f.) means: $1.15 \\leq x < 1.25$

**For Whole Numbers:**
- $25$ (to nearest 10) means: $20 \\leq x < 30$
- $140$ (to nearest 10) means: $135 \\leq x < 145$
- $2000$ (to nearest 1000) means: $1500 \\leq x < 2500$

**Key Terms:**
- **Lower bound**: The smallest possible value
- **Upper bound**: The largest possible value (exclusive)
- **Error interval**: The range between lower and upper bounds

**Maximum Error:**
- For $5.2$ (to 1 d.p.): maximum error = $\\pm 0.05$
- For $340$ (to 2 s.f.): maximum error = $\\pm 50$

**Applications in Calculations:**
When combining measurements, errors can compound:
- If length = $5.2$ cm and width = $3.1$ cm (both to 1 d.p.)
- Area range: $(5.15 \\times 3.05)$ to $(5.25 \\times 3.15)$
- Area range: $15.7075$ to $16.5375$ cm²

**Real-World Examples:**
- Speed cameras: "$70$ mph" could be $69.5$ to $70.5$ mph
- Medical dosages: Safety margins account for measurement limits
- Engineering: Tolerance levels in manufacturing
- Scientific experiments: Understanding measurement uncertainty

**Problem-Solving Tips:**
1. Identify what the number is rounded to
2. Find the halfway point below and above
3. Write the inequality correctly
4. Remember upper bound is exclusive (<, not ≤)`,
        "interactive": "limits-accuracy"
      }
    ]
  },
  {
    "title": "Ratios, Rates and Proportions",
    "icon": "⚖️",
    "content": "Ratios and proportions help us compare quantities and solve real-world problems.",
    "subsections": [
      {
        "title": "Ratios",
        "content": `**RATIOS**
Compare quantities of the same type (same units):

**Definition:**
A ratio compares quantities of the same type
- Written as $a:b$ (read as "a to b")
- Can also be written as $\\frac{a}{b}$
- Both quantities must have the same units

**Basic Examples:**
- $3:4$ means "3 parts to 4 parts"
- In a class of $12$ boys and $15$ girls: ratio = $12:15 = 4:5$
- Mixing $2$ cups flour to $3$ cups sugar = $2:3$

**Simplifying Ratios:**
Like fractions, ratios can be simplified by dividing by the H.C.F.
- $6:8 = 3:4$ (dividing both by $2$)
- $15:25 = 3:5$ (dividing both by $5$)
- $12:18:24 = 2:3:4$ (dividing all by $6$)

**Three-Part Ratios:**
- Red:Blue:Green = $2:3:5$
- If total parts = $2+3+5 = 10$ parts
- Red gets $\\frac{2}{10}$, Blue gets $\\frac{3}{10}$, Green gets $\\frac{5}{10}$

**Finding Quantities from Ratios:**
If the ratio of boys to girls is $3:4$ and there are $21$ students total:
- Total parts = $3+4 = 7$ parts
- Each part = $\\frac{21}{7} = 3$ students
- Boys = $3 \\times 3 = 9$, Girls = $4 \\times 3 = 12$

**Equivalent Ratios:**
- $1:2 = 2:4 = 3:6 = 5:10$
- $2:3 = 4:6 = 6:9 = 10:15$

**Applications:**
- Recipe scaling (ingredients in cooking)
- Mixing paint colors or concrete
- Sharing money or resources
- Map scales and architectural drawings
- Gear ratios in machines
- Investment portfolio allocation

**Problem-Solving Steps:**
1. Identify what quantities are being compared
2. Write the ratio in simplest form
3. Use the ratio to find unknown quantities
4. Check your answer makes sense`,
        "interactive": "ratio-quiz"
      },
      {
        "title": "Rates",
        "content": `**RATES**

Compare quantities of different types with different units:

**Definition:**
A rate compares two quantities with different units
- Always expressed as "quantity per unit"
- Units are always different (e.g., km/h, per kg, people/m²)

**Common Examples:**
- **Speed**: $60 \\text{ km/h}$ (distance per time)
- **Density**: $2.5 \\text{ g/cm}^3$ (mass per volume)
- **Price**: 5 per kg (cost per weight)
- **Population density**: $150 \\text{ people/km}^2$
- **Fuel consumption**: $8 \\text{ L/100km}$
- **Heart rate**: $72 \\text{ beats/min}$

**Unit Rates:**
When the second quantity is 1 unit:
- 3 per kg means 3 for every 1 kg
- $25 \\text{ km/L}$ means $25$ km for every $1$ liter

**Calculating Rates:**
Rate = $\\frac{\\text{First quantity}}{\\text{Second quantity}}$

**Examples:**
- If 300 km takes 4 hours: Speed = $\\frac{300 \\text{ km}}{4 \\text{ h}} = 75 \\text{ km/h}$
- If 24 for 3 kg: Rate = $\\frac{24}{3 \\text{ kg}} = 8 \\text{ per kg}$
- If 500 people in 2 km²: Density = $\\frac{500 \\text{ people}}{2 \\text{ km}^2} = 250 \\text{ people/km}^2$

**Converting Rates:**
- $72 \\text{ km/h}$ to m/s: $72 \\times \\frac{1000}{3600} = 20 \\text{ m/s}$
- 15 per hour for 8 hours = 120

**Applications:**
- Comparing prices at different stores
- Calculating travel time and fuel costs
- Determining work productivity
- Analyzing sports performance statistics`,
        "interactive": "rate-calculator"
      },
      {
        "title": "Direct Proportion",
        "content": `**DIRECT PROPORTION**
As one quantity increases, the other increases at the same rate:

**Definition:**
Two quantities are in direct proportion when they increase or decrease together at the same rate
- Symbol: $y \\propto x$ (read as "y is proportional to x")
- Formula: $y = kx$ (where $k$ is the constant of proportionality)

**Characteristics:**
- When one doubles, the other doubles
- When one halves, the other halves
- When one becomes zero, the other becomes zero
- Graph is a straight line passing through origin $(0,0)$
- Ratio $\\frac{y}{x}$ remains constant

**Examples:**
- **Cost and quantity**: More items cost more money
  - 2 kg costs 6, so 5 kg costs 15
  - Constant: $k = \\frac{6}{2\\text{ kg}} = 3\\text{ per kg}$

- **Distance and time** (at constant speed):
  - Travel $60$ km in $1$ hour, so $180$ km in $3$ hours
  - Constant: $k = 60\\text{ km/h}$

- **Wages and hours worked**:
  - 4 hours earns 60, so 10 hours earns 150
  - Constant: $k = 15\\text{ per hour}$

**Finding the Constant of Proportionality:**
If $y \\propto x$, then $y = kx$
- Given: When $x = 4$, $y = 12$
- Find $k$: $12 = k \\times 4$, so $k = 3$
- Formula: $y = 3x$
- When $x = 7$: $y = 3 \\times 7 = 21$

**Solving Direct Proportion Problems:**
**Method 1: Using the constant**
1. Find the constant: $k = \\frac{y}{x}$
2. Use $y = kx$ to find unknown values

**Method 2: Using proportions**
1. Set up the proportion: $\\frac{y_1}{x_1} = \\frac{y_2}{x_2}$
2. Cross multiply: $y_1 \\times x_2 = y_2 \\times x_1$
3. Solve for the unknown

**Worked Example:**
If 5 pencils cost 2.50, how much do 12 pencils cost?
- Method 1: $k = \\frac{2.50}{5} = 0.50$ per pencil
  - Cost of 12 pencils = $12 \\times 0.50 = 6.00$
- Method 2: $\\frac{2.50}{5} = \\frac{x}{12}$
  - $2.50 \\times 12 = 5x$
  - $30 = 5x$, so $x = 6.00$

**Real-World Applications:**
- Currency conversion
- Recipe scaling
- Speed calculations
- Salary calculations
- Material costs in construction
- Fuel consumption calculations`,
        "interactive": "direct-proportion"
      },
      {
        "title": "Inverse Proportion",
        "content": `**INVERSE PROPORTION**
As one quantity increases, the other decreases proportionally:

**Definition:**
Two quantities are in inverse proportion when one increases as the other decreases, such that their product remains constant
- Symbol: $y \\propto \\frac{1}{x}$ (read as "y is inversely proportional to x")
- Formula: $y = \\frac{k}{x}$ or $xy = k$ (where $k$ is constant)

**Characteristics:**
- When one doubles, the other halves
- When one triples, the other becomes one-third
- Product $xy$ remains constant
- Graph is a hyperbola (curved line)
- As $x$ approaches zero, $y$ approaches infinity
- As $x$ increases, $y$ approaches zero

**Examples:**
- **Speed and time** (for fixed distance):
  - To travel $120$ km: $60$ km/h takes $2$ hours, $120$ km/h takes $1$ hour
  - Constant: $k = 120$ km (the distance)

- **Workers and time** (for same job):
  - $4$ workers take $6$ days, $12$ workers take $2$ days
  - Constant: $k = 24$ worker-days

- **Pressure and volume** (for fixed temperature):
  - Higher pressure means lower volume
  - $k =$ constant (pressure × volume)

**Finding the Constant:**
If $y \\propto \\frac{1}{x}$, then $y = \\frac{k}{x}$ or $xy = k$
- Given: When $x = 6$, $y = 8$
- Find $k$: $k = x \\times y = 6 \\times 8 = 48$
- Formula: $y = \\frac{48}{x}$ or $xy = 48$
- When $x = 12$: $y = \\frac{48}{12} = 4$

**Solving Inverse Proportion Problems:**
**Method 1: Using the constant**
1. Find the constant: $k = x \\times y$
2. Use $y = \\frac{k}{x}$ to find unknown values

**Method 2: Using the relationship**
1. Set up: $x_1 \\times y_1 = x_2 \\times y_2$
2. Solve for the unknown

**Worked Example:**
If $8$ machines can complete a job in $15$ days, how long will it take $12$ machines?
- Method 1: $k = 8 \\times 15 = 120$ machine-days
  - Time for $12$ machines = $\\frac{120}{12} = 10$ days
- Method 2: $8 \\times 15 = 12 \\times t$
  - $120 = 12t$, so $t = 10$ days

**More Examples:**
- **Brightness and distance**: Light appears dimmer as you move away
  - If brightness is $100$ units at $2$ m, it's $25$ units at $4$ m
  - $k = 100 \\times 2^2 = 400$ (using inverse square law)

- **Pipe filling**: More pipes fill a tank faster
  - $3$ pipes fill tank in $4$ hours, $6$ pipes fill it in $2$ hours
  - $k = 3 \\times 4 = 12$ pipe-hours

**Distinguishing Direct vs Inverse:**
- **Direct**: Both increase/decrease together
- **Inverse**: One increases while other decreases
- **Direct**: $\\frac{y}{x} =$ constant
- **Inverse**: $x \\times y =$ constant

**Real-World Applications:**
- Work scheduling (workers vs time)
- Travel planning (speed vs time)
- Economics (supply vs demand)
- Physics (gas laws, light intensity)
- Engineering (gear ratios, lever systems)`,
        "interactive": "inverse-proportion"
      }
    ]
  }
  ,
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

For large numbers, count how many places you move the decimal point to the left.

**KEY POINTS:**
- The power of 10 tells us how many zeros follow the first significant digit
- Moving decimal left = positive exponent
- Always write the coefficient between 1 and 10
- Useful for expressing distances in space, population sizes, and large measurements

**STEP-BY-STEP METHOD:**
1. Identify the first non-zero digit
2. Place decimal point immediately after it
3. Count positions moved from original decimal place
4. This count becomes your positive exponent

**REAL-WORLD EXAMPLES:**
- Earth's mass: $5.97 \\times 10^{24}$ kg
- Speed of light: $3 \\times 10^8$ m/s
- World population: approximately $8 \\times 10^9$ people`,
        interactive: "large-numbers"
      },
      {
        title: "Small Numbers in Standard Form",
        content: `**SMALL NUMBERS**
- $0.005 = 5 \\times 10^{-3}$
- $0.00034 = 3.4 \\times 10^{-4}$
- $0.000000072 = 7.2 \\times 10^{-8}$

For small numbers, count how many places you move the decimal point to the right.

**KEY POINTS:**
- The negative exponent shows how many decimal places the number has
- Moving decimal right = negative exponent
- Coefficient still stays between 1 and 10
- Essential for microscopic measurements, probabilities, and precision values

**STEP-BY-STEP METHOD:**
1. Find the first non-zero digit
2. Place decimal point immediately after it
3. Count positions moved from original decimal place
4. This count becomes your negative exponent

**REAL-WORLD EXAMPLES:**
- Size of an atom: approximately $1 \\times 10^{-10}$ meters
- Mass of an electron: $9.11 \\times 10^{-31}$ kg
- Thickness of human hair: $7 \\times 10^{-5}$ meters
- Probability of winning lottery: approximately $1.4 \\times 10^{-8}$`,
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
3. Power is negative

**ADDITIONAL CONVERSION TIPS:**
- Numbers between 1 and 10 have exponent 0 (e.g., $5.7 = 5.7 \\times 10^0$)
- When multiplying in standard form: add exponents
- When dividing in standard form: subtract exponents
- Calculator display often shows 'E' notation (e.g., 2.5E+08 = $2.5 \\times 10^8$)

**COMMON MISTAKES TO AVOID:**
- Don't forget the coefficient must be between 1 and 10
- Don't confuse the direction: left movement = positive exponent, right = negative
- Remember to count ALL decimal places moved, not just zeros
- When converting back, move decimal in opposite direction

**PRACTICE STRATEGY:**
1. Start with simple whole numbers and decimals
2. Practice identifying the first significant digit
3. Count carefully - use your finger to track decimal movement
4. Check your answer by converting back to ordinary form`,
        interactive: "standard-form-converter"
      },
      {
        title: "Operations in Standard Form",
        content: `**PERFORMING OPERATIONS WITH STANDARD FORM**
When working with numbers in standard form, we can perform arithmetic operations efficiently by using the laws of indices.

**GENERAL PRINCIPLES:**
- Keep numbers in standard form throughout calculations
- Use index laws for powers of 10
- Ensure final answer is in proper standard form
- Check reasonableness of your result

**REMEMBER:**
- $10^a \\times 10^b = 10^{a+b}$
- $10^a \\div 10^b = 10^{a-b}$
- $(10^a)^b = 10^{ab}$`,
        interactive: "standard-form-operations-overview"
      },
      {
        title: "Adding and Subtracting Numbers in Standard Form",
        content: `**ADDING AND SUBTRACTING IN STANDARD FORM**

**METHOD 1: Convert to Ordinary Form**
$3.2 \\times 10^5 + 4.7 \\times 10^4$
= $320,000 + 47,000$
= $367,000$
= $3.67 \\times 10^5$

**METHOD 2: Same Powers of 10**
When powers are the same:
$(2.3 \\times 10^6) + (1.4 \\times 10^6) = (2.3 + 1.4) \\times 10^6 = 3.7 \\times 10^6$

**METHOD 3: Make Powers Equal**
$5.2 \\times 10^7 + 3.1 \\times 10^6$
= $5.2 \\times 10^7 + 0.31 \\times 10^7$
= $(5.2 + 0.31) \\times 10^7$
= $5.51 \\times 10^7$

**KEY STEPS:**
1. Check if powers of 10 are the same
2. If not, convert one number to match the other's power
3. Add or subtract the coefficients
4. Keep the same power of 10
5. Convert back to proper standard form if needed

**WORKED EXAMPLES:**
- $(7.3 \\times 10^4) - (2.8 \\times 10^3)$
  = $7.3 \\times 10^4 - 0.28 \\times 10^4$
  = $7.02 \\times 10^4$

- $(1.5 \\times 10^{-3}) + (4.2 \\times 10^{-4})$
  = $1.5 \\times 10^{-3} + 0.42 \\times 10^{-3}$
  = $1.92 \\times 10^{-3}$`,
        interactive: "standard-form-addition-subtraction"
      },
      {
        title: "Multiplying Numbers in Standard Form",
        content: `**MULTIPLYING IN STANDARD FORM**

**BASIC RULE:**
$(a \\times 10^m) \\times (b \\times 10^n) = (a \\times b) \\times 10^{m+n}$

**STEP-BY-STEP METHOD:**
1. Multiply the coefficients (a × b)
2. Add the powers of 10 (m + n)
3. Ensure result is in proper standard form

**WORKED EXAMPLES:**
$(3.2 \\times 10^5) \\times (2.1 \\times 10^3)$
= $(3.2 \\times 2.1) \\times 10^{5+3}$
= $6.72 \\times 10^8$

$(4.5 \\times 10^{-2}) \\times (3.0 \\times 10^6)$
= $(4.5 \\times 3.0) \\times 10^{-2+6}$
= $13.5 \\times 10^4$
= $1.35 \\times 10^5$ (converting to proper standard form)

**MORE COMPLEX EXAMPLES:**
$(2.4 \\times 10^7) \\times (5.0 \\times 10^{-3}) \\times (1.2 \\times 10^2)$
= $(2.4 \\times 5.0 \\times 1.2) \\times 10^{7+(-3)+2}$
= $14.4 \\times 10^6$
= $1.44 \\times 10^7$

**IMPORTANT NOTES:**
- Always check if your coefficient is between 1 and 10
- If coefficient ≥ 10, adjust by increasing the power
- Practice mental arithmetic with the coefficients`,
        interactive: "standard-form-multiplication"
      },
      {
        title: "Dividing Numbers in Standard Form",
        content: `**DIVIDING IN STANDARD FORM**

**BASIC RULE:**
$(a \\times 10^m) \\div (b \\times 10^n) = \\frac{a}{b} \\times 10^{m-n}$

**STEP-BY-STEP METHOD:**
1. Divide the coefficients (a ÷ b)
2. Subtract the powers of 10 (m - n)
3. Ensure result is in proper standard form

**WORKED EXAMPLES:**
$(8.4 \\times 10^7) \\div (2.1 \\times 10^3)$
= $\\frac{8.4}{2.1} \\times 10^{7-3}$
= $4.0 \\times 10^4$

$(6.3 \\times 10^{-2}) \\div (9.0 \\times 10^4)$
= $\\frac{6.3}{9.0} \\times 10^{-2-4}$
= $0.7 \\times 10^{-6}$
= $7.0 \\times 10^{-7}$ (converting to proper standard form)

**NEGATIVE EXPONENT EXAMPLES:**
$(1.8 \\times 10^5) \\div (3.6 \\times 10^{-2})$
= $\\frac{1.8}{3.6} \\times 10^{5-(-2)}$
= $0.5 \\times 10^7$
= $5.0 \\times 10^6$

**FRACTION RESULTS:**
$(7.5 \\times 10^4) \\div (2.0 \\times 10^6)$
= $\\frac{7.5}{2.0} \\times 10^{4-6}$
= $3.75 \\times 10^{-2}$

**COMMON MISTAKES:**
- Forgetting to subtract exponents (not add)
- Sign errors with negative exponents
- Not converting final answer to proper standard form
- Calculation errors with coefficient division`,
        interactive: "standard-form-division"
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
- $245_{10} = 2 \\times 10^2 + 4 \\times 10^1 + 5 \\times 10^0 = 200 + 40 + 5$

**UNDERSTANDING PLACE VALUES:**
Each position in a decimal number has a specific place value:
- Units place: $10^0 = 1$
- Tens place: $10^1 = 10$
- Hundreds place: $10^2 = 100$
- Thousands place: $10^3 = 1000$

**EXPANDED FORM EXAMPLES:**
- $3,427_{10} = 3 \\times 10^3 + 4 \\times 10^2 + 2 \\times 10^1 + 7 \\times 10^0$
- $3,427_{10} = 3000 + 400 + 20 + 7$
- $506_{10} = 5 \\times 10^2 + 0 \\times 10^1 + 6 \\times 10^0 = 500 + 0 + 6$

**EXPANDED FORM USING DIVISION METHOD:**
To break down a number systematically:

For $3,427_{10}$:
$$
\\begin{array}{c|c|c}
\\text{Division} & \\text{Quotient} & \\text{Remainder} \\\\
\\hline
3,427 \\div 10 & 342 & 7 \\\\
342 \\div 10 & 34 & 2 \\\\
34 \\div 10 & 3 & 4 \\\\
3 \\div 10 & 0 & 3
\\end{array}
$$
*Read remainders from bottom to top: 3, 4, 2, 7 → $3,427 = 3000 + 400 + 20 + 7$*

For $1,596_{10}$:
$$
\\begin{array}{c|c|c}
\\text{Division} & \\text{Quotient} & \\text{Remainder} \\\\
\\hline
1,596 \\div 10 & 159 & 6 \\\\
159 \\div 10 & 15 & 9 \\\\
15 \\div 10 & 1 & 5 \\\\
1 \\div 10 & 0 & 1
\\end{array}
$$
*Read remainders from bottom to top: 1, 5, 9, 6 → $1,596 = 1000 + 500 + 90 + 6$*

**HOW TO READ THE TABLES:**
- Perform successive divisions by 10
- The remainders give you the digits in reverse order
- Read the remainders from bottom to top to get the original number
- Each remainder represents a digit in its respective place value

**WHY BASE 10?**
- Historically developed because humans have 10 fingers
- Most natural counting system for everyday use
- Foundation for our decimal system and currency`,
        interactive: "base-10"
      },
      {
        title: "Base 2 (Binary)",
        content: `**BASE 2 (BINARY)**
Computer language:
- Uses only digits $0$ and $1$
- Each position represents a power of $2$
- $1011_2 = 1\\times2^3 + 0\\times2^2 + 1\\times2^1 + 1\\times2^0 = 8 + 0 + 2 + 1 = 11_{10}$

**UNDERSTANDING BINARY PLACE VALUES:**
Each position in a binary number represents a power of 2:
- $2^0 = 1$ (units)
- $2^1 = 2$ (twos)
- $2^2 = 4$ (fours)
- $2^3 = 8$ (eights)
- $2^4 = 16$ (sixteens)
- $2^5 = 32$ (thirty-twos)
- $2^6 = 64$ (sixty-fours)
- $2^7 = 128$ (one-hundred-twenty-eights)

**CONVERTING DECIMAL TO BINARY USING DIVISION:**
To convert decimal to binary, repeatedly divide by 2:

For $11_{10}$:
$$
\\begin{array}{c|c|c}
\\text{Division} & \\text{Quotient} & \\text{Remainder} \\\\
\\hline
11 \\div 2 & 5 & 1 \\\\
5 \\div 2 & 2 & 1 \\\\
2 \\div 2 & 1 & 0 \\\\
1 \\div 2 & 0 & 1
\\end{array}
$$
*Read remainders from bottom to top: 1, 0, 1, 1 → $1011_2$*

For $6_{10}$:
$$
\\begin{array}{c|c|c}
\\text{Division} & \\text{Quotient} & \\text{Remainder} \\\\
\\hline
6 \\div 2 & 3 & 0 \\\\
3 \\div 2 & 1 & 1 \\\\
1 \\div 2 & 0 & 1
\\end{array}
$$
*Read remainders from bottom to top: 1, 1, 0 → $110_2$*

**MORE BINARY EXAMPLES:**
- $110_2 = 1\\times4 + 1\\times2 + 0\\times1 = 4 + 2 + 0 = 6_{10}$
- $1000_2 = 1\\times8 + 0\\times4 + 0\\times2 + 0\\times1 = 8_{10}$
- $1111_2 = 1\\times8 + 1\\times4 + 1\\times2 + 1\\times1 = 8 + 4 + 2 + 1 = 15_{10}$

**HOW TO CONVERT DECIMAL TO BINARY:**
- Divide the number by 2 repeatedly
- Record the remainder at each step
- Continue until the quotient becomes 0
- Read the remainders from bottom to top to get the binary number

**REAL-WORLD APPLICATIONS:**
- Computer memory and processing
- Digital circuits (on/off states)
- Data storage and transmission
- Programming and computer science`,
        interactive: "base-2"
      },
      {
        title: "Other Number Bases",
        content: `**BASE 8 (OCTAL)**
- Uses digits $0, 1, 2, 3, 4, 5, 6, 7$
- Each position represents a power of $8$
- $345_8 = 3\\times8^2 + 4\\times8^1 + 5\\times8^0 = 192 + 32 + 5 = 229_{10}$

**BASE 16 (HEXADECIMAL)**
- Uses digits $0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F$
- Where $A=10, B=11, C=12, D=13, E=14, F=15$
- $2A3_{16} = 2\\times16^2 + 10\\times16^1 + 3\\times16^0 = 512 + 160 + 3 = 675_{10}$

**BASE 5 EXAMPLE:**
- Uses digits $0, 1, 2, 3, 4$
- $234_5 = 2\\times5^2 + 3\\times5^1 + 4\\times5^0 = 50 + 15 + 4 = 69_{10}$

**COMMON BASE CONVERSIONS:**
Decimal to Octal for $229_{10}$:
$$
\\begin{array}{c|c|c}
\\text{Division} & \\text{Quotient} & \\text{Remainder} \\\\
\\hline
229 \\div 8 & 28 & 5 \\\\
28 \\div 8 & 3 & 4 \\\\
3 \\div 8 & 0 & 3
\\end{array}
$$
*Read remainders from bottom to top: 3, 4, 5 → $345_8$*

Decimal to Hexadecimal for $675_{10}$:
$$
\\begin{array}{c|c|c}
\\text{Division} & \\text{Quotient} & \\text{Remainder} \\\\
\\hline
675 \\div 16 & 42 & 3 \\\\
42 \\div 16 & 2 & 10 (A) \\\\
2 \\div 16 & 0 & 2
\\end{array}
$$
*Read remainders from bottom to top: 2, A, 3 → $2A3_{16}$*

**HOW TO CONVERT TO OTHER BASES:**
- Divide the decimal number by the target base
- Record remainders at each step
- Continue until quotient becomes 0
- Read remainders from bottom to top

**GENERAL RULE FOR ANY BASE n:**
For a number in base $n$, each digit must be less than $n$, and each position represents a power of $n$.

**APPLICATIONS:**
- Octal: Legacy computer systems
- Hexadecimal: Color codes, memory addresses
- Other bases: Mathematical theory, specialized systems`,
        interactive: "other-bases"
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
- Add all products together

**DETAILED CONVERSION EXAMPLES:**

**Example 1: $78_{10}$ to base $2$**
$$
\\begin{array}{c|c|c}
\\text{Division} & \\text{Quotient} & \\text{Remainder} \\\\
\\hline
78 \\div 2 & 39 & 0 \\\\
39 \\div 2 & 19 & 1 \\\\
19 \\div 2 & 9 & 1 \\\\
9 \\div 2 & 4 & 1 \\\\
4 \\div 2 & 2 & 0 \\\\
2 \\div 2 & 1 & 0 \\\\
1 \\div 2 & 0 & 1
\\end{array}
$$
*Read remainders from bottom to top: 1, 0, 0, 1, 1, 1, 0 → $1001110_2$*

**Example 2: $152_{10}$ to base $8$**
$$
\\begin{array}{c|c|c}
\\text{Division} & \\text{Quotient} & \\text{Remainder} \\\\
\\hline
152 \\div 8 & 19 & 0 \\\\
19 \\div 8 & 2 & 3 \\\\
2 \\div 8 & 0 & 2
\\end{array}
$$
*Read remainders from bottom to top: 2, 3, 0 → $230_8$*

**Example 3: $1A5_{16}$ to base $10$**
$1A5_{16} = 1\\times16^2 + 10\\times16^1 + 5\\times16^0$
$= 1\\times256 + 10\\times16 + 5\\times1$
$= 256 + 160 + 5 = 421_{10}$

**HOW TO CONVERT FROM ANY BASE TO DECIMAL:**
- Identify each digit's position (starting from 0 on the right)
- Multiply each digit by (base)^(position)
- Sum all the results

**CONVERSION SHORTCUTS:**
- Binary to Octal: Group binary digits in threes from right
- Binary to Hexadecimal: Group binary digits in fours from right
- Use conversion tables for quick reference`,
        interactive: "base-converter"
      },
      {
        title: "Adding and Subtracting in Number Bases",
        content: `**ADDITION IN DIFFERENT BASES**

**BINARY ADDITION RULES:**
- $0 + 0 = 0$
- $0 + 1 = 1$
- $1 + 0 = 1$
- $1 + 1 = 10_2$ (carry 1)

**BINARY ADDITION EXAMPLE:**
$1101_2 + 1011_2 = ?$

Vertical addition:
$$
\\begin{array}{r}
  1101 \\\\
+ 1011 \\\\
\\hline
 11000
\\end{array}
$$

Step-by-step process:
1. Rightmost column: $1 + 1 = 10_2$ (write 0, carry 1)
2. Next column: $0 + 1 + 1 = 10_2$ (write 0, carry 1)
3. Next column: $1 + 0 + 1 = 10_2$ (write 0, carry 1)
4. Leftmost column: $1 + 1 + 1 = 11_2$ (write 1, carry 1)
5. Final carry: $1$

Result: $11000_2 = 24_{10}$

**BASE 8 ADDITION EXAMPLE:**
$347_8 + 256_8 = ?$

Vertical addition:
$$
\\begin{array}{r}
  347 \\\\
+ 256 \\\\
\\hline
  625
\\end{array}
$$

Step-by-step process:
1. Rightmost: $7 + 6 = 13_{10} = 15_8$ (write 5, carry 1)
2. Middle: $4 + 5 + 1 = 10_{10} = 12_8$ (write 2, carry 1)
3. Leftmost: $3 + 2 + 1 = 6_8$

Result: $625_8 = 405_{10}$

**SUBTRACTION IN DIFFERENT BASES:**

**BINARY SUBTRACTION RULES:**
- $0 - 0 = 0$
- $1 - 0 = 1$
- $1 - 1 = 0$
- $0 - 1 = 1$ (borrow 1, becomes $10_2 - 1 = 1$)

**BINARY SUBTRACTION EXAMPLE:**
$1101_2 - 1011_2 = ?$

Vertical subtraction:
$$
\\begin{array}{r}
  1101 \\\\
- 1011 \\\\
\\hline
  0010
\\end{array}
$$

Result: $0010_2 = 2_{10}$

**KEY TIPS FOR BASE ARITHMETIC:**
- **Carrying**: When sum ≥ base, divide by base and carry quotient
- **Borrowing**: Add base value to current digit when borrowing
- **Always verify**: Check answers by converting to base 10
- **Digit limits**: Remember valid digits for each base`,
        interactive: "base-arithmetic"
      },
      {
        title: "Solving Equations Involving Number Bases",
        content: `**EQUATIONS WITH UNKNOWN BASES**

**TYPE 1: Finding the Base**
Solve: $25_b = 17_{10}$

Method:
1. Convert to polynomial: $25_b = 2b + 5$
2. Set equal to decimal: $2b + 5 = 17$
3. Solve: $2b = 12$ → $b = 6$
4. Check: $25_6 = 2×6 + 5 = 17_{10}$ ✓

**TYPE 2: Finding Unknown Digits**
Solve: $3x_5 = 23_{10}$

Method:
1. Convert: $3x_5 = 15 + x$
2. Set equal: $15 + x = 23$
3. Solve: $x = 8$
4. Validate: In base 5, digits must be 0-4
5. Conclusion: No solution since $8 > 4$

**TYPE 3: Complex Equations**
Solve: $x23_7 = 156_{10}$

Method:
1. Convert: $x23_7 = 49x + 14 + 3 = 49x + 17$
2. Set equal: $49x + 17 = 156$
3. Solve: $49x = 139$ → $x = 139/49 ≈ 2.84$
4. Test integer values: Try $x = 2, 3, ...$
5. Since $x < 7$, valid values are $0, 1, 2, 3, 4, 5, 6$

**WORKED EXAMPLES:**

**Example 1:** Solve $124_b = 40_{10}$
- Convert: $b^2 + 2b + 4 = 40$
- Rearrange: $b^2 + 2b - 36 = 0$
- Factor: $(b + 8)(b - 6) = 0$
- Solution: $b = 6$ (must be positive and > 4)

**Example 2:** Solve $x1_4 + 23_4 = 120_4$
- Convert each term:
  - $x1_4 = 4x + 1$
  - $23_4 = 11_{10}$
  - $120_4 = 24_{10}$
- Set up equation: $(4x + 1) + 11 = 24$
- Solve: $4x + 12 = 24$ → $4x = 12$ → $x = 3$
- Verify: $31_4 + 23_4 = 13 + 11 = 24 = 120_4$ ✓

**PROBLEM-SOLVING STRATEGY:**
1. **Express** the base representation as a polynomial
2. **Convert** to base 10 equation
3. **Solve** the resulting equation
4. **Validate** the solution fits the base constraints
5. **Verify** by substitution back into original equation

**IMPORTANT REMINDERS:**
- Valid digits in base $n$: $0$ to $(n-1)$
- Base must be ≥ 2 and an integer
- Always check that solutions make sense in context`,
        interactive: "base-equations"
      }
    ]
  },

  {
    title: "Scales and Simple Map Problems",
    icon: "🗺️",
    content: `Scales help us represent large real-world distances on manageable maps and drawings. They are essential tools for navigation, construction, and design work.`,
    subsections: [
      {
        title: "Types of Scales",
        content: `**TYPES OF SCALES**

**Representative Fraction (RF):**
- Written as a fraction: $\\frac{1}{50,000}$ or $1:50,000$
- The numerator is always 1
- Denominator shows how many real units are represented by 1 map unit
- Example: $1:25,000$ means 1 cm on map = 25,000 cm in reality

**Ratio Scale:**
- Expressed as a ratio between map distance and ground distance
- Can be written as $1:n$ where $n$ is the scale factor
- Example: $1:100,000$ means the real distance is 100,000 times larger

**Linear Scale:**
- Shows actual measurements on a graduated line
- Commonly found on maps as a bar scale
- Allows direct measurement without calculations

**IDENTIFYING SCALES FROM GIVEN INFORMATION:**
If 2 cm on a map represents 5 km in reality:
- Convert to same units: 5 km = 500,000 cm
- Scale = $2:500,000 = 1:250,000$`,
        interactive: "scale-types"
      },
      {
        title: "Scale Measurements and Calculations",
        content: `**MEASURING WITH SCALES**

**Finding Real Distance:**
- Map distance = 8 cm, Scale = $1:50,000$
- Real distance = $8 \\times 50,000 = 400,000$ cm = 4 km

**Finding Map Distance:**
- Real distance = 12 km, Scale = $1:200,000$
- Convert: 12 km = 1,200,000 cm
- Map distance = $1,200,000 \\div 200,000 = 6$ cm

**Finding Scale:**
- Map distance = 3 cm, Real distance = 15 km
- Convert: 15 km = 1,500,000 cm
- Scale = $3:1,500,000 = 1:500,000$

**DRAWING TO SCALE:**
To draw a 50m building using scale $1:1000$:
- Convert: 50 m = 5,000 cm
- Drawing length = $5,000 \\div 1,000 = 5$ cm`,
        interactive: "scale-measurements"
      },
      {
        title: "Scale Factor and Area Calculations",
        content: `**SCALE FACTOR**
The ratio by which all linear dimensions are multiplied:
- If scale = $1:500$, then scale factor = $\\frac{1}{500}$
- Linear scale factor = $k$
- Area scale factor = $k^2$

**AREA CALCULATIONS WITH SCALES**
When scale factor = $1:n$:
- Linear measurements are reduced by factor $n$
- Areas are reduced by factor $n^2$

**Example:**
- Map scale = $1:10,000$
- Area on map = 4 cm²
- Real area = $4 \\times (10,000)^2 = 4 \\times 100,000,000$ cm²
- Real area = $400,000,000$ cm² = 40 m²

**FINDING AREA FACTOR:**
- Given scale factor = $1:2000$
- Area factor = $(2000)^2 = 4,000,000$

**FINDING SCALE FACTOR FROM AREA FACTOR:**
- Given area factor = 250,000
- Scale factor = $\\sqrt{250,000} = 500$
- Therefore scale = $1:500$`,
        interactive: "area-scale"
      },
      {
        title: "Real-World Applications",
        content: `**PRACTICAL APPLICATIONS**

**Construction and Architecture:**
- Building plans typically use scales like $1:100$ or $1:50$
- Site plans often use $1:500$ or $1:1000$
- Detail drawings may use $1:5$ or $1:10$

**Map Reading:**
- Ordnance Survey maps commonly use $1:25,000$ or $1:50,000$
- Road atlases typically use $1:200,000$
- City maps often use $1:10,000$

**PROBLEM-SOLVING STRATEGIES:**
1. Identify what information is given
2. Determine what needs to be found
3. Convert all units to be consistent
4. Apply the appropriate scale formula
5. Check your answer makes sense

**COMMON CONVERSIONS:**
- 1 km = 1,000 m = 100,000 cm
- 1 m = 100 cm
- When working with areas: remember to square the scale factor

**Example Problem:**
A rectangular field measures 8 cm by 6 cm on a map with scale $1:5,000$.
- Real length = $8 \\times 5,000 = 40,000$ cm = 400 m
- Real width = $6 \\times 5,000 = 30,000$ cm = 300 m  
- Real area = $400 \\times 300 = 120,000$ m² = 12 hectares`,
        interactive: "scale-problems"
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
