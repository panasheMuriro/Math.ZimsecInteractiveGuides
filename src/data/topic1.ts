
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
