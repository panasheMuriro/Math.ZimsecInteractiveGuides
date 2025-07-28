
// import { Section, QuizQuestion, MathJaxConfig } from '../Topic1/types';
import {Section, QuizQuestion} from "../types"

export const sections: Section[] = [
{
  "title": "Number Concepts and Operations",
  "icon": "🔢",
  "content": "Number types are the foundation of mathematics. Let's explore the different families of numbers and operations step by step.",
  "subsections": [
    {
      "title": "Number Types",
      "content": `**NATURAL NUMBERS** ($\\mathbb{N}$)
These are counting numbers: $1, 2, 3, 4, 5, \\ldots$
- Used for counting objects
- Always positive
- Start from 1 and go to infinity
- Examples: number of students in a class, pages in a book

**WHOLE NUMBERS** ($\\mathbb{W}$)
Natural numbers plus zero: $0, 1, 2, 3, 4, 5, \\ldots$
- Include zero (representing "nothing")
- All non-negative integers
- Foundation for basic arithmetic

**INTEGERS** ($\\mathbb{Z}$)
All whole numbers and their negatives: $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$
- Include positive, negative, and zero
- Represent opposites (temperature, debt/credit)
- Form a complete number line

**RATIONAL NUMBERS** ($\\mathbb{Q}$)
Numbers that can be expressed as fractions: $\\frac{1}{2}, \\frac{3}{4}, -\\frac{2}{3}, 0.25, 0.\\overline{3}$
- Can be written as $\\frac{p}{q}$ where $p$ and $q$ are integers ($q \\neq 0$)
- Include terminating and repeating decimals
- All integers are rational numbers

**IRRATIONAL NUMBERS** ($\\mathbb{I}$)
Numbers that cannot be expressed as fractions: $\\pi, e, \\sqrt{2}, \\sqrt{3}$
- Have non-terminating, non-repeating decimal expansions
- Include most square roots of non-perfect squares
- Examples: $\\pi \\approx 3.14159...$, $\\sqrt{2} \\approx 1.41421...$

**REAL NUMBERS** ($\\mathbb{R}$)
All rational and irrational numbers combined - everything on the number line`,
      "interactive": "number-types"
    },
    {
      "title": "Factors and H.C.F.",
      "content": `**FACTORS**
Numbers that divide evenly into another number
- Factors of 12: $1, 2, 3, 4, 6, 12$
- Factors of 18: $1, 2, 3, 6, 9, 18$
- Every number has at least two factors: 1 and itself
- Prime numbers have exactly two factors

**HIGHEST COMMON FACTOR (H.C.F.)**
The largest number that divides two or more numbers
- Also called Greatest Common Divisor (G.C.D.)

**Methods to Find H.C.F.**

**1. Listing Method:**
Find H.C.F. of 12 and 18:
- Factors of 12: $1, 2, 3, 4, 6, 12$
- Factors of 18: $1, 2, 3, 6, 9, 18$
- Common factors: $1, 2, 3, 6$
- H.C.F. = $6$ (largest common factor)

**2. Prime Factorization Method:**
Find H.C.F. of 24 and 36:
- $24 = 2^3 \\times 3^1$
- $36 = 2^2 \\times 3^2$
- H.C.F. = $2^2 \\times 3^1 = 4 \\times 3 = 12$

**3. Division Method (Euclidean Algorithm):**
Find H.C.F. of 48 and 18:
- $48 \\div 18 = 2$ remainder $12$
- $18 \\div 12 = 1$ remainder $6$
- $12 \\div 6 = 2$ remainder $0$
- H.C.F. = $6$ (last non-zero remainder)

**Applications:**
- Simplifying fractions to lowest terms
- Sharing items equally among groups
- Finding common measurements`,
      "interactive": "factors-hcf"
    },
    {
      "title": "Multiples and L.C.M.",
      "content": `**MULTIPLES**
Results of multiplying a number by integers
- Multiples of 3: $3, 6, 9, 12, 15, 18, 21, 24, \\ldots$
- Multiples of 4: $4, 8, 12, 16, 20, 24, 28, 32, \\ldots$
- Every number has infinitely many multiples

**LOWEST COMMON MULTIPLE (L.C.M.)**
The smallest positive number that is a multiple of two or more numbers
- Used for adding fractions with different denominators
- Finding common time intervals

**Methods to Find L.C.M.**

**1. Listing Method:**
Find L.C.M. of 4 and 6:
- Multiples of 4: $4, 8, 12, 16, 20, 24, \\ldots$
- Multiples of 6: $6, 12, 18, 24, 30, \\ldots$
- Common multiples: $12, 24, 36, \\ldots$
- L.C.M. = $12$ (smallest common multiple)

**2. Prime Factorization Method:**
Find L.C.M. of 12 and 18:
- $12 = 2^2 \\times 3^1$
- $18 = 2^1 \\times 3^2$
- L.C.M. = $2^2 \\times 3^2 = 4 \\times 9 = 36$

**3. Division Method:**
Find L.C.M. of 15, 20, and 25:
\\
$\\begin{array}{c|ccc}
2 & 15 & 20 & 25 \\\\
2 & 15 & 10 & 25 \\\\
5 & 15 & 5 & 25 \\\\
5 & 3 & 1 & 5 \\\\
3 & 3 & 1 & 1 \\\\
& 1 & 1 & 1
\\end{array}$

L.C.M. = $2 \\times 2 \\times 5 \\times 5 \\times 3 = 300$

**Relationship between H.C.F. and L.C.M.:**
For any two numbers $a$ and $b$:
$H.C.F.(a,b) \\times L.C.M.(a,b) = a \\times b$

**Applications:**
- Adding fractions with different denominators
- Finding when events repeat together
- Scheduling problems`,
      "interactive": "multiples-lcm"
    },
    {
      "title": "Directed Numbers",
      "content": `**DIRECTED NUMBERS**
Numbers with direction (positive or negative)
- Positive numbers: $+5, +10, +3.2$ (above zero)
- Negative numbers: $-3, -7, -1.5$ (below zero)
- Zero is neither positive nor negative

**OPERATIONS WITH DIRECTED NUMBERS**

**Addition Rules:**
- Same signs: Add and keep the sign $(+3) + (+5) = +8$
- Different signs: Subtract and take sign of larger $(-7) + (+3) = -4$

**Subtraction Rules:**
- Change subtraction to addition of opposite
- $5 - (-3) = 5 + 3 = 8$
- $-4 - 6 = -4 + (-6) = -10$

**Multiplication and Division Rules:**
- Same signs give positive result: $(-3) \\times (-4) = +12$
- Different signs give negative result: $(+6) \\div (-2) = -3$

**Practical Applications:**
- Temperature changes, bank transactions, elevation changes
- Using number lines to visualize operations`,
      "interactive": "directed-numbers"
    },
    {
      "title": "Fractions and Percentages",
      "content": `**FRACTIONS**
Parts of a whole: $\\frac{numerator}{denominator}$
- Proper fractions: $\\frac{3}{4}, \\frac{2}{5}$ (numerator < denominator)
- Improper fractions: $\\frac{7}{4}, \\frac{9}{5}$ (numerator ≥ denominator)
- Mixed numbers: $1\\frac{3}{4}, 2\\frac{1}{2}$

**OPERATIONS WITH FRACTIONS**
- Addition/Subtraction: Find common denominator
- Multiplication: Multiply numerators and denominators
- Division: Multiply by reciprocal

**CONVERTING FRACTIONS TO DECIMALS**
- Divide numerator by denominator
- $\\frac{1}{4} = 1 \\div 4 = 0.25$
- $\\frac{1}{3} = 0.\\overline{3}$ (repeating decimal)

**PERCENTAGES**
Fractions out of 100: $\\frac{x}{100} = x\\%$
- $\\frac{1}{2} = \\frac{50}{100} = 50\\%$
- $0.75 = \\frac{75}{100} = 75\\%$

**PERCENTAGE CALCULATIONS**
- Finding percentage of a number: $25\\% \\text{ of } 80 = \\frac{25}{100} \\times 80 = 20$
- Finding percentage increase/decrease
- Practical applications: discounts, tax, interest`,
      "interactive": "fractions-percentages"
    },
    {
      "title": "Order of Operations",
      "content": `**ORDER OF OPERATIONS (BODMAS/PEMDAS)**
Rules for evaluating mathematical expressions

**B - Brackets** (Parentheses)
Do operations inside brackets first

**O - Orders** (Exponents/Powers)
Calculate powers and roots

**DM - Division and Multiplication**
From left to right

**AS - Addition and Subtraction** 
From left to right

**Examples:**
$2 + 3 \\times 4 = 2 + 12 = 14$ (not 20)
$(2 + 3) \\times 4 = 5 \\times 4 = 20$
$2^3 + 4 \\times 5 = 8 + 20 = 28$

**Mixed Operations with Different Number Types:**
- Combining integers, fractions, and decimals
- Following order of operations consistently
- Real-world problem solving applications`,
      "interactive": "order-operations"
    },
    {
      "title": "Squares and Square Roots",
      "content": `**SQUARES**
A number multiplied by itself: $n^2 = n \\times n$
- $3^2 = 3 \\times 3 = 9$
- $(-4)^2 = (-4) \\times (-4) = 16$
- Perfect squares: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$

**SQUARE ROOTS**
The opposite of squaring: $\\sqrt{n^2} = n$
- $\\sqrt{25} = 5$ because $5^2 = 25$
- $\\sqrt{64} = 8$ because $8^2 = 64$
- Every positive number has two square roots: $\\pm\\sqrt{16} = \\pm 4$

**CALCULATING SQUARE ROOTS**
- Perfect squares: memorize common ones
- Estimation: $\\sqrt{50}$ is between 7 and 8 (since $7^2 = 49$ and $8^2 = 64$)
- Calculator for non-perfect squares

**APPLICATIONS**
- Area problems: finding side length of squares
- Pythagorean theorem in right triangles
- Distance calculations`,
      "interactive": "squares-square-roots"
    },
    {
      "title": "Cubes and Cube Roots",
      "content": `**CUBES**
A number multiplied by itself three times: $n^3 = n \\times n \\times n$
- $2^3 = 2 \\times 2 \\times 2 = 8$
- $(-3)^3 = (-3) \\times (-3) \\times (-3) = -27$
- Perfect cubes: $1, 8, 27, 64, 125, 216, 343, 512, 729, \\ldots$

**CUBE ROOTS**
The opposite of cubing: $\\sqrt[3]{n^3} = n$
- $\\sqrt[3]{27} = 3$ because $3^3 = 27$
- $\\sqrt[3]{-8} = -2$ because $(-2)^3 = -8$
- Unlike square roots, cube roots of negative numbers are negative

**CALCULATING CUBE ROOTS**
- Perfect cubes: memorize common ones
- Estimation: $\\sqrt[3]{50}$ is between 3 and 4 (since $3^3 = 27$ and $4^3 = 64$)
- Calculator for non-perfect cubes

**APPLICATIONS**
- Volume problems: finding side length of cubes
- Scaling in three dimensions
- Real-world applications in engineering and physics`,
      "interactive": "cubes-cube-roots"
    },
    {
      "title": "Number Patterns",
      "content": `**ARITHMETIC SEQUENCES**
Patterns with constant difference between terms
- Example: $2, 5, 8, 11, 14, \\ldots$ (difference = 3)
- $n^{th}$ term formula: $a_n = a_1 + (n-1)d$

**GEOMETRIC SEQUENCES**
Patterns with constant ratio between terms
- Example: $3, 6, 12, 24, 48, \\ldots$ (ratio = 2)
- $n^{th}$ term formula: $a_n = a_1 \\times r^{n-1}$

**SQUARE NUMBER PATTERNS**
- $1, 4, 9, 16, 25, \\ldots$ (differences: $3, 5, 7, 9, \\ldots$)
- $n^{th}$ square number: $n^2$

**TRIANGULAR NUMBER PATTERNS**
- $1, 3, 6, 10, 15, \\ldots$ (adding consecutive integers)
- $n^{th}$ triangular number: $\\frac{n(n+1)}{2}$

**FIBONACCI SEQUENCE**
Each term is sum of previous two: $1, 1, 2, 3, 5, 8, 13, 21, \\ldots$

**FINDING PATTERNS**
- Look for differences between consecutive terms
- Check for multiplication/division relationships
- Identify the rule and predict next terms
- Real-world applications in nature, art, and science`,
      "interactive": "number-patterns"
    }
  ]
},

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
