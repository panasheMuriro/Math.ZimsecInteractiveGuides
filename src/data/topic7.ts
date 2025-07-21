import {Section, QuizQuestion} from "../types"

export const sections: Section[]=[
 {
    title: "Algebraic Manipulation",
    icon: "🔧",
    content: `Algebraic manipulation forms the foundation of algebra, involving the systematic transformation and simplification of algebraic expressions using mathematical operations and rules.`,
    subsections: [
      {
        title: "Simplifying Algebraic Expressions",
        content: `**SIMPLIFYING ALGEBRAIC EXPRESSIONS**

Basic operations with algebraic terms involve combining like terms and applying arithmetic rules.

**Like Terms:**
- Terms with the same variable and power
- Examples: $3x$ and $7x$, $2x^2$ and $-5x^2$

**Addition and Subtraction:**
- Combine coefficients of like terms
- $3x + 5x = 8x$
- $7x^2 - 2x^2 = 5x^2$
- $4x + 3y - 2x + y = 2x + 4y$

**Multiplication:**
- Multiply coefficients and add indices of same bases
- $3x \\times 4x = 12x^2$
- $2x^2 \\times 5x^3 = 10x^5$

**Division:**
- Divide coefficients and subtract indices
- $\\frac{12x^4}{3x^2} = 4x^2$
- $\\frac{15x^3y}{5xy} = 3x^2$

**Substitution:**
Replace variables with given values and calculate
- If $x = 3$ and $y = -2$, 

then $2x^2 + 3y = 2(9) + 3(-2) 
= 18 - 6 = 12$`,
        interactive: "algebraic-simplification"
      },
      {
        title: "HCF and LCM of Algebraic Expressions",
        content: `**HIGHEST COMMON FACTOR (HCF) AND LOWEST COMMON MULTIPLE (LCM)**

**Finding HCF:**
The highest common factor is the largest expression that divides all given expressions.

**Method:**
1. Factor each expression completely
2. Identify common factors
3. Take the lowest power of each common factor

**Example:** Find HCF of $12x^3y^2$ and $18x^2y^4$
- $12x^3y^2 = 2^2 \\times 3 \\times x^3 \\times y^2$
- $18x^2y^4 = 2 \\times 3^2 \\times x^2 \\times y^4$
- HCF = $2 \\times 3 \\times x^2 \\times y^2 = 6x^2y^2$

**Finding LCM:**
The lowest common multiple is the smallest expression divisible by all given expressions.

**Method:**
1. Factor each expression completely
2. Take the highest power of each factor present
3. Multiply all factors together

**Example:** Find LCM of $12x^3y^2$ and $18x^2y^4$
- LCM = $2^2 \\times 3^2 \\times x^3 \\times y^4 = 36x^3y^4$`,
        interactive: "hcf-lcm-algebra"
      },
{
  title: "Factorization",
  content: `**FACTORIZATION OF ALGEBRAIC EXPRESSIONS**

**Method 1: Common Factor Method**

**Step-by-step process:**
1. Identify the GCD (Greatest Common Divisor) of all coefficients
2. Find the lowest power of each variable present in all terms
3. Factor out the common factor

**Example 1:** $6x^2 + 9x$
- Step 1: GCD of 6 and 9 = 3
- Step 2: Lowest power of x = $x^1$
- Step 3: Common factor = $3x$
- Result: $6x^2 + 9x = 3x(2x + 3)$

**Check:** $3x(2x + 3) $

$= 3x \\cdot 2x + 3x \\cdot 3 $

$= 6x^2 + 9x$ ✓

**Example 2:** $12x^3y - 8x^2y^2$
- Step 1: GCD of 12 and 8 = 4
- Step 2: Lowest power of x = $x^2$, lowest power of y = $y^1$
- Step 3: Common factor = $4x^2y$
- Result: $12x^3y - 8x^2y^2 \\\\= 4x^2y(3x - 2y)$

**Check:** $4x^2y(3x - 2y) = 4x^2y \\cdot 3x - 4x^2y \\cdot 2y = 12x^3y - 8x^2y^2$ ✓


\`\`\`am-method-one
\`\`\`

---

**Method 2: Difference of Two Squares**

**Pattern:** $a^2 - b^2 = (a + b)(a - b)$

**Recognition:** Look for subtraction of two perfect squares

**Example 1:** $x^2 - 9$
- Step 1: Identify perfect squares: $x^2$ and $9 = 3^2$
- Step 2: Apply formula with $a = x$, $b = 3$
- Result: $x^2 - 9 = (x + 3)(x - 3)$

**Check:** $(x + 3)(x - 3) \\\\ = x^2 - 3x + 3x - 9 = x^2 - 9$ ✓

**Example 2:** $4x^2 - 25y^2$
- Step 1: Rewrite as $(2x)^2 - (5y)^2$
- Step 2: Apply formula with $a = 2x$, $b = 5y$
- Result: $4x^2 - 25y^2 \\\\= (2x + 5y)(2x - 5y)$

**Check:** $(2x + 5y)(2x - 5y) \\\\ = 4x^2 - 10xy + 10xy - 25y^2\\\\ = 4x^2 - 25y^2$ ✓

---

**Method 3: Quadratic Factoring (When a = 1)**

**For:** $x^2 + bx + c$
**Find:** Two numbers that multiply to $c$ and add to $b$

**Example 1:** $x^2 + 7x + 12$
- Step 1: Find factors of 12: (1,12), (2,6), (3,4)
- Step 2: Check which pair adds to 7: $3 + 4 = 7$ ✓
- Step 3: Write as $(x + 3)(x + 4)$

**Check:** $(x + 3)(x + 4)\\\\ = x^2 + 4x + 3x + 12 \\\\= x^2 + 7x + 12$ ✓

**Example 2:** $x^2 - 5x + 6$
- Step 1: Find factors of 6: (1,6), (2,3), (-1,-6), (-2,-3)
- Step 2: Check which pair adds to -5: $(-2) + (-3) = -5$ ✓
- Step 3: Write as $(x - 2)(x - 3)$

**Check:** $(x - 2)(x - 3) \\\\= x^2 - 3x - 2x + 6 \\\\= x^2 - 5x + 6$ ✓

---

**Method 4: Quadratic Factoring (When a ≠ 1)**

**For:** $ax^2 + bx + c$

**Method:** Split the middle term

**Example:** $2x^2 + 7x + 3$
- Step 1: Multiply $a \\times c = 2 \\times 3 = 6$
- Step 2: Find factors of 6 that add to $b = 7$: $6 + 1 = 7$ ✓
- Step 3: Split middle term: $2x^2 + 6x + x + 3$
- Step 4: Group terms: $(2x^2 + 6x) + (x + 3)$
- Step 5: Factor each group: $2x(x + 3) + 1(x + 3)$
- Step 6: Factor out common binomial: $(2x + 1)(x + 3)$

**Check:** $(2x + 1)(x + 3) \\\\= 2x^2 + 6x + x + 3 \\\\= 2x^2 + 7x + 3$ ✓

---

**Method 5: Perfect Square Trinomials**

**Patterns:**
- $a^2 + 2ab + b^2 = (a + b)^2$
- $a^2 - 2ab + b^2 = (a - b)^2$

**Recognition:** First and last terms are perfect squares, middle term is $\\pm 2ab$

**Example 1:** $x^2 + 6x + 9$
- Step 1: Check if $x^2$ and $9 = 3^2$ are perfect squares ✓
- Step 2: Check if middle term = $2 \\cdot x \\cdot 3 = 6x$ ✓
- Step 3: Apply pattern: $(x + 3)^2$

**Check:** $(x + 3)^2 = x^2 + 6x + 9$ ✓

**Example 2:** $4x^2 - 12x + 9$
- Step 1: Rewrite as $(2x)^2 - 12x + 3^2$
- Step 2: Check if middle term = $2 \\cdot 2x \\cdot 3 = 12x$ (sign is negative) ✓
- Step 3: Apply pattern: $(2x - 3)^2$

**Check:** $(2x - 3)^2 = 4x^2 - 12x + 9$ ✓

**General Strategy for Factoring**

1. **Always look for common factors first**
2. **Count the number of terms:**
   - 2 terms: Check for difference of squares or sum/difference of cubes
   - 3 terms: Check for perfect square trinomial, then quadratic factoring
   - 4+ terms: Try grouping
3. **Verify your answer by expanding**
4. **Check if factors can be factored further**`,
  interactive: "factorization"
}
,
      {
        title: "Expanding Algebraic Expressions",
        content: `**EXPANDING EXPRESSIONS WITH BRACKETS**

**Single Brackets:**
Multiply each term inside the bracket by the term outside
- $3(2x + 5) = 6x + 15$
- $-2x(3x - 4) = -6x^2 + 8x$

**Two Brackets (FOIL Method):**
$(a + b)(c + d) = ac + ad + bc + bd$
- $(x + 3)(x + 5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15$
- $(2x - 1)(x + 4) = 2x^2 + 8x - x - 4 = 2x^2 + 7x - 4$

**Special Products:**
- $(a + b)^2 = a^2 + 2ab + b^2$
- $(a - b)^2 = a^2 - 2ab + b^2$
- $(a + b)(a - b) = a^2 - b^2$

**Three or More Brackets:**
Expand two at a time, then continue
- $(x + 1)(x + 2)(x + 3) = [(x + 1)(x + 2)](x + 3)$
- $= (x^2 + 3x + 2)(x + 3)$
- $= x^3 + 3x^2 + 3x^2 + 9x + 2x + 6$
- $= x^3 + 6x^2 + 11x + 6$`,
        interactive: "expansion"
      },
      {
        title: "Simplifying Algebraic Fractions",
        content: `**ALGEBRAIC FRACTIONS**

**Simplification:**
Cancel common factors from numerator and denominator
- $\\frac{6x^2}{9x} = \\frac{2x}{3}$
- $\\frac{x^2 - 4}{x + 2} = \\frac{(x+2)(x-2)}{x+2} = x - 2$

**Addition and Subtraction:**
Find common denominator, then combine numerators
- $\\frac{2}{x} + \\frac{3}{2x} = \\frac{4}{2x} + \\frac{3}{2x} = \\frac{7}{2x}$
- $\\frac{x+1}{x-2} - \\frac{x-3}{x+1} = \\frac{(x+1)^2 - (x-3)(x-2)}{(x-2)(x+1)}$

**Multiplication:**
Multiply numerators and denominators, then simplify
- $\\frac{2x}{3y} \\times \\frac{9y^2}{4x} = \\frac{18xy^2}{12xy} = \\frac{3y}{2}$

**Division:**
Multiply by the reciprocal
- $\\frac{x^2}{3} \\div \\frac{x}{6} = \\frac{x^2}{3} \\times \\frac{6}{x} = \\frac{6x^2}{3x} = 2x$

**Complex Fractions:**
Simplify step by step, working from inside out`,
        interactive: "algebraic-fractions"
      },
      {
        title: "Completing the Square",
        content: `**COMPLETING THE SQUARE**

Transform $ax^2 + bx + c$ into the form $a(x + h)^2 + k$

**Method for $x^2 + bx + c$:**
1. Take half of the coefficient of $x$: $\\frac{b}{2}$
2. Square it: $(\\frac{b}{2})^2$
3. Add and subtract this value
4. Group to form perfect square

**Example:** Complete the square for $x^2 + 6x + 5$
- Half of 6 is 3, and $3^2 = 9$
- $x^2 + 6x + 5 = x^2 + 6x + 9 - 9 + 5$
- $= (x + 3)^2 - 4$

**For $ax^2 + bx + c$ where $a \\neq 1$:**
1. Factor out $a$ from the first two terms
2. Complete the square inside brackets
3. Simplify

**Example:** $2x^2 + 12x + 10$
- $= 2(x^2 + 6x) + 10$
- $= 2(x^2 + 6x + 9 - 9) + 10$
- $= 2((x + 3)^2 - 9) + 10$
- $= 2(x + 3)^2 - 18 + 10$
- $= 2(x + 3)^2 - 8$`,
        interactive: "completing-square"
      }
    ]
  },
  {
    title: "Equations",
    icon: "⚖️",
    content: `Equations are mathematical statements that assert the equality of two expressions, forming the basis for solving unknown values and modeling real-world problems.`,
    subsections: [
      {
        title: "Linear Equations",
        content: `**SOLVING LINEAR EQUATIONS**

Linear equations have the form $ax + b = c$ where the variable appears to the first power only.

**Basic Linear Equations:**
- $3x + 5 = 17$
- Subtract 5: $3x = 12$
- Divide by 3: $x = 4$

**Unknowns on Both Sides:**
- $5x - 3 = 2x + 9$
- Subtract $2x$: $3x - 3 = 9$
- Add 3: $3x = 12$
- Divide by 3: $x = 4$

**Equations with Brackets:**
1. Expand brackets first
2. Collect like terms
3. Solve as normal

**Example:** $3(x + 2) = 2(x - 1) + 11$
- $3x + 6 = 2x - 2 + 11$
- $3x + 6 = 2x + 9$
- $x = 3$

**Equations with Fractions:**
Multiply through by LCD to eliminate fractions
- $\\frac{x}{2} + \\frac{x}{3} = 10$
- Multiply by 6: $3x + 2x = 60$
- $5x = 60$, so $x = 12$`,
        interactive: "linear-equations"
      },
      {
        title: "Word Problems and Formulation",
        content: `**FORMULATING LINEAR EQUATIONS FROM WORD PROBLEMS**

**Problem-Solving Strategy:**
1. **Define the variable** (Let $x$ = the unknown quantity)
2. **Read carefully** and identify relationships
3. **Write the equation** based on the given information
4. **Solve the equation**
5. **Check and interpret** the answer

**Common Problem Types:**

**Age Problems:**
"John is 5 years older than Mary. In 3 years, John will be twice Mary's age."
- Let Mary's current age = $x$
- John's current age = $x + 5$
- In 3 years: Mary = $x + 3$, John = $(x + 5) + 3 = x + 8$
- Equation: $x + 8 = 2(x + 3)$

**Money/Cost Problems:**
"Apples cost $\\$2$ per kg, oranges cost $\\$3$ per kg. Total cost is $\\$20$ for 8 kg."
- Let kg of apples = $x$
- kg of oranges = $8 - x$
- Equation: $2x + 3(8 - x) = 20$

**Distance/Speed/Time:**
Use $d = st$ (distance = speed × time)`,
        interactive: "word-problems"
      },
      {
        title: "Changing the Subject of Formulae",
        content: `**CHANGING THE SUBJECT OF A FORMULA**

Rearrange a formula to make a different variable the subject.

**Basic Method:**
Apply inverse operations to isolate the required variable

**Example 1:** Make $x$ the subject of $y = 3x + 5$
- Subtract 5: $y - 5 = 3x$
- Divide by 3: $x = \\frac{y - 5}{3}$

**Example 2:** Make $r$ the subject of $A = \\pi r^2$
- Divide by $\\pi$: $\\frac{A}{\\pi} = r^2$
- Take square root: $r = \\sqrt{\\frac{A}{\\pi}}$

**Complex Formulas:**
Work step by step, treating other variables as constants

**Example 3:** Make $x$ the subject of $\\frac{ax + b}{cx + d} = k$
- Multiply both sides by $(cx + d)$: $ax + b = k(cx + d)$
- Expand: $ax + b = kcx + kd$
- Collect $x$ terms: $ax - kcx = kd - b$
- Factor: $x(a - kc) = kd - b$
- Divide: $x = \\frac{kd - b}{a - kc}$`,
        interactive: "subject-formula"
      },
      {
        title: "Simultaneous Linear Equations",
        content: `**SOLVING SIMULTANEOUS LINEAR EQUATIONS**

Two equations with two unknowns solved together.

**Elimination Method:**
Make coefficients of one variable equal, then subtract equations

**Example:** 
$3x + 2y = 16$ ... (1)
$2x - y = 2$ ... (2)

Multiply (2) by 2: $4x - 2y = 4$ ... (3)
Add (1) and (3): $7x = 20$, so $x = \\frac{20}{7}$
Substitute back: $y = 6\\frac{6}{7}$

**Substitution Method:**
Solve one equation for one variable, substitute into the other

**Example:**
$x + 2y = 8$ ... (1)
$3x - y = 1$ ... (2)

From (1): $x = 8 - 2y$
Substitute into (2): $3(8 - 2y) - y = 1$
$24 - 6y - y = 1$
$-7y = -23$, so $y = \\frac{23}{7}$
Then $x = 1\\frac{9}{7}$

**Graphical Method:**
Plot both lines; intersection point is the solution`,
        interactive: "simultaneous-equations"
      },
      {
        title: "Quadratic Equations - Factorization",
        content: `**SOLVING QUADRATIC EQUATIONS BY FACTORIZATION**

Quadratic equations have the form $ax^2 + bx + c = 0$

**Method:**
1. Rearrange to standard form ($= 0$)
2. Factor the left side
3. Set each factor equal to zero
4. Solve the linear equations

**Example 1:** $x^2 + 5x + 6 = 0$
- Factor: $(x + 2)(x + 3) = 0$
- Either $x + 2 = 0$ or $x + 3 = 0$
- Solutions: $x = -2$ or $x = -3$

**Example 2:** $2x^2 - 5x - 3 = 0$
- Factor: $(2x + 1)(x - 3) = 0$
- Either $2x + 1 = 0$ or $x - 3 = 0$
- Solutions: $x = -\\frac{1}{2}$ or $x = 3$

**Difference of Squares:**
$x^2 - a^2 = (x + a)(x - a) = 0$
- Solutions: $x = a$ or $x = -a$

**Perfect Squares:**
$(x + a)^2 = 0$ gives $x = -a$ (repeated root)`,
        interactive: "quadratic-factorization"
      },
      {
        title: "Quadratic Formula and Completing the Square",
        content: `**QUADRATIC FORMULA**

For $ax^2 + bx + c = 0$:
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

**Discriminant:** $\\Delta = b^2 - 4ac$
- If $\\Delta > 0$: Two distinct real roots
- If $\\Delta = 0$: One repeated real root  
- If $\\Delta < 0$: No real roots

**Example:** $2x^2 + 3x - 2 = 0$
- $a = 2, b = 3, c = -2$
- $\\Delta = 9 - 4(2)(-2) = 9 + 16 = 25$
- $x = \\frac{-3 \\pm \\sqrt{25}}{4} = \\frac{-3 \\pm 5}{4}$
- $x = \\frac{1}{2}$ or $x = -2$

**SOLVING BY COMPLETING THE SQUARE**

**Method:**
1. Complete the square on the left side
2. Take square root of both sides
3. Solve for $x$

**Example:** $x^2 + 6x + 2 = 0$
- $x^2 + 6x = -2$
- $(x + 3)^2 - 9 = -2$
- $(x + 3)^2 = 7$
- $x + 3 = \\pm\\sqrt{7}$
- $x = -3 \\pm \\sqrt{7}$`,
        interactive: "quadratic-formula"
      }
    ]
  },
  {
    title: "Inequalities",
    icon: "📊",
    content: `Inequalities express relationships where one quantity is greater than, less than, or not equal to another, essential for optimization and constraint problems.`,
    subsections: [
      {
        title: "Understanding Inequality Signs",
        content: `**INEQUALITY SYMBOLS**

**Basic Symbols:**
- $>$ : greater than
- $<$ : less than  
- $\\geq$ : greater than or equal to
- $\\leq$ : less than or equal to
- $\\neq$ : not equal to

**Reading Inequalities:**
- $x > 5$: "$x$ is greater than 5"
- $x \\leq -2$: "$x$ is less than or equal to -2"  
- $3 < x < 7$: "$x$ is between 3 and 7" (3 < x and x < 7)

**Key Properties:**
1. **Addition/Subtraction:** Adding or subtracting the same number to both sides preserves the inequality
   - If $x > 3$, then $x + 2 > 5$

2. **Multiplication/Division by Positive:** Preserves the inequality direction
   - If $x > 3$, then $2x > 6$

3. **Multiplication/Division by Negative:** **Reverses** the inequality sign
   - If $x > 3$, then $-2x < -6$

**Important:** Always reverse the inequality sign when multiplying or dividing by a negative number!`,
        interactive: "inequality-signs"
      },
      {
        title: "Solving Linear Inequalities",
        content: `**SOLVING LINEAR INEQUALITIES**

Use the same methods as linear equations, but watch for sign changes!

**Basic Examples:**
- $2x + 3 > 11$
- Subtract 3: $2x > 8$
- Divide by 2: $x > 4$

**With Negative Coefficients:**
- $-3x + 5 \\leq 14$
- Subtract 5: $-3x \\leq 9$
- Divide by -3 (**reverse sign**): $x \\geq -3$

**Compound Inequalities:**
**"And" Inequalities:** $-2 < 3x - 5 \\leq 7$
- Add 5 to all parts: $3 < 3x \\leq 12$
- Divide by 3: $1 < x \\leq 4$

**"Or" Inequalities:** $2x - 1 < 3$ or $x + 4 > 10$
- Solve separately: $x < 2$ or $x > 6$

**Fractions:**
Clear fractions by multiplying by LCD (watch signs!)
- $\\frac{x}{2} - \\frac{x}{3} > 1$
- Multiply by 6: $3x - 2x > 6$
- Simplify: $x > 6$`,
        interactive: "linear-inequalities"
      },
      {
        title: "Representing Inequalities on Number Lines",
        content: `**NUMBER LINE REPRESENTATION**

Visual representation of solution sets using number lines.

**Notation:**
- **Open circle (○):** Value not included ($>$ or $<$)
- **Closed circle (●):** Value included ($\\geq$ or $\\leq$)
- **Arrow:** Shows direction of solution

**Examples:**

**$x > 3$:** 
Open circle at 3, arrow pointing right

**$x \\leq -2$:**
Closed circle at -2, arrow pointing left

**$1 < x \\leq 4$:**
Open circle at 1, closed circle at 4, line between them

**$x < -1$ or $x \\geq 3$:**
Open circle at -1 with left arrow, closed circle at 3 with right arrow

**Set Notation:**
- $x > 3$: $(3, \\infty)$
- $x \\leq -2$: $(-\\infty, -2]$
- $1 < x \\leq 4$: $(1, 4]$
- $x < -1$ or $x \\geq 3$: $(-\\infty, -1) \\cup [3, \\infty)$`,
        interactive: "number-line"
      },
      {
        title: "Linear Inequalities on Cartesian Plane",
        content: `**GRAPHING LINEAR INEQUALITIES**

Linear inequalities divide the plane into regions.

**Method:**
1. **Draw the boundary line** from the equation (ignore inequality sign)
   - Use solid line for $\\leq$ or $\\geq$
   - Use dashed line for $<$ or $>$

2. **Test a point** (usually origin if not on the line)
3. **Shade the correct region** based on the test

**Example:** $2x + y \\geq 6$
1. Draw line $2x + y = 6$ (solid line)
2. Test $(0,0)$: $2(0) + 0 = 0 \\geq 6$? NO
3. Since $(0,0)$ doesn't satisfy the inequality, shade the region that doesn't contain $(0,0)$

**Special Cases:**
- **Vertical lines:** $x > a$ (region to the right of $x = a$)
- **Horizontal lines:** $y < b$ (region below $y = b$)

**Key Points:**
- Boundary line is **included** for $\\geq$ and $\\leq$
- Boundary line is **excluded** for $>$ and $<$
- Always test a point to determine which side to shade`,
        interactive: "cartesian-inequalities"
      },
      {
        title: "Simultaneous Linear Inequalities",
        content: `**SOLVING SIMULTANEOUS LINEAR INEQUALITIES**

**One Variable:**
Solve each inequality separately, then find the intersection.

**Example:**
$2x + 3 > 7$ and $x - 1 \\leq 4$

From first: $2x > 4$, so $x > 2$
From second: $x \\leq 5$
Combined solution: $2 < x \\leq 5$

**Two Variables (Graphical):**
Graph each inequality and find the overlapping region.

**Example:**
$x + y \\leq 4$
$x - y \\geq 0$  
$x \\geq 0$
$y \\geq 0$

**Method:**
1. Graph each boundary line
2. Determine which side to shade for each inequality
3. Find the region where all conditions are satisfied
4. This region is the **feasible region**

**Applications:**
- The feasible region represents all possible solutions
- Used extensively in linear programming
- Vertices of the feasible region are often optimal points`,
        interactive: "simultaneous-inequalities"
      },
      {
        title: "Linear Programming",
        content: `**LINEAR PROGRAMMING APPLICATIONS**

Optimization problems with linear constraints and objective functions.

**Standard Form:**
- **Objective Function:** Maximize or minimize $P = ax + by$
- **Constraints:** System of linear inequalities
- **Non-negativity:** Usually $x \\geq 0, y \\geq 0$

**Solution Method:**
1. **Graph the feasible region** (intersection of all constraints)
2. **Identify corner points** (vertices of feasible region)
3. **Evaluate objective function** at each corner point
4. **Choose optimal value** (maximum or minimum)

**Example Problem:**
A factory produces chairs ($x$) and tables ($y$).
- Profit: $P = 30x + 50y$
- Constraints: 
  - $2x + 3y \\leq 60$ (labor hours)
  - $x + y \\leq 25$ (materials)
  - $x \\geq 0, y \\geq 0$

**Solution:**
1. Graph feasible region
2. Corner points: $(0,0)$, $(0,20)$, $(15,10)$, $(25,0)$
3. Evaluate $P$: $0$, $1000$, $950$, $750$
4. Maximum profit: $\\$1000$ at $(0,20)$

**Real-world Applications:**
- Production planning
- Resource allocation
- Transportation problems
- Diet problems`,
        interactive: "linear-programming"
      }
    ]
  },
  {
  title: "Indices and Logarithms",
  icon: "📈",
  content: `Indices and logarithms are inverse operations that form the foundation for exponential growth, decay, and scaling in mathematics, science, and engineering.`,
  subsections: [
    {
      title: "Basic Index Laws and Notation",
      content: `**INDEX NOTATION**

**Basic Form:** 
- $a^n$ where $a$ is the **base** and $n$ is the **index** (or exponent)
- $a^n$ means "$a$ multiplied by itself $n$ times"
- Examples: $2^3 = 2 \\times 2 \\times 2 = 8$, $5^2 = 5 \\times 5 = 25$

**Fundamental Index Laws:**

1. **Multiplication Rule:** $a^m \\times a^n = a^{m+n}$
   - When multiplying powers with the same base, add the indices
   - Example: $3^2 \\times 3^4 = 3^{2+4} = 3^6 = 729$

2. **Division Rule:** $\\frac{a^m}{a^n} = a^{m-n}$ (where $a \\neq 0$)
   - When dividing powers with the same base, subtract the indices
   - Example: $\\frac{5^7}{5^3} = 5^{7-3} = 5^4 = 625$

3. **Power of a Power:** $(a^m)^n = a^{mn}$
   - When raising a power to another power, multiply the indices
   - Example: $(2^3)^4 = 2^{3 \\times 4} = 2^{12} = 4096$

4. **Power of a Product:** $(ab)^n = a^n b^n$
   - Example: $(3 \\times 4)^2 = 3^2 \\times 4^2 = 9 \\times 16 = 144$

**Special Cases:**
- $a^1 = a$ (any number to the power of 1 equals itself)
- $a^0 = 1$ (any non-zero number to the power of 0 equals 1)`,
      interactive: "basic-index-laws"
    },
    {
      title: "Advanced Laws (Negative and Fractional Indices)",
      content: `**NEGATIVE INDICES**

**Definition:** $a^{-n} = \\frac{1}{a^n}$ (where $a \\neq 0$)
- A negative index means "reciprocal of the positive power"
- Examples: $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$, $5^{-1} = \\frac{1}{5}$

**Working with Negative Indices:**
- $\\frac{1}{a^{-n}} = a^n$
- $\\frac{a^{-m}}{a^{-n}} = a^{n-m}$
- Example: $\\frac{3^{-2}}{3^{-5}} = 3^{-2-(-5)} = 3^{-2+5} = 3^3 = 27$

**FRACTIONAL INDICES**

**Definition:** $a^{\\frac{1}{n}} = \\sqrt[n]{a}$ (the $n$th root of $a$)
- $a^{\\frac{1}{2}} = \\sqrt{a}$ (square root)
- $a^{\\frac{1}{3}} = \\sqrt[3]{a}$ (cube root)
- Examples: $9^{\\frac{1}{2}} = \\sqrt{9} = 3$, $8^{\\frac{1}{3}} = \\sqrt[3]{8} = 2$

**General Fractional Form:** $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m = \\sqrt[n]{a^m}$
- The denominator indicates the root, numerator indicates the power
- Example: $16^{\\frac{3}{4}} = (\\sqrt[4]{16})^3 = 2^3 = 8$

**Combining Negative and Fractional:**
- $a^{-\\frac{m}{n}} = \\frac{1}{a^{\\frac{m}{n}}} = \\frac{1}{\\sqrt[n]{a^m}}$
- Example: $8^{-\\frac{2}{3}} = \\frac{1}{8^{\\frac{2}{3}}} = \\frac{1}{(\\sqrt[3]{8})^2} = \\frac{1}{2^2} = \\frac{1}{4}$`,
      interactive: "advanced-indices"
    },
    {
      title: "Definition and Evaluation of Logarithms",
      content: `**LOGARITHM DEFINITION**

**Basic Definition:** If $a^x = b$, then $\\log_a b = x$
- The logarithm is the **inverse operation** of exponentiation
- $\\log_a b$ asks: "To what power must we raise $a$ to get $b$?"

**Key Relationship:** $a^{\\log_a b} = b$ and $\\log_a (a^x) = x$

**Common Logarithm Bases:**
- **Common logarithm:** $\\log_{10} x$ (often written as $\\log x$)
- **Natural logarithm:** $\\log_e x$ (written as $\\ln x$, where $e \\approx 2.718$)
- **Binary logarithm:** $\\log_2 x$ (used in computer science)

**EVALUATION EXAMPLES**

**Direct Evaluation:**
- $\\log_2 8 = 3$ because $2^3 = 8$
- $\\log_{10} 100 = 2$ because $10^2 = 100$
- $\\log_5 \\frac{1}{25} = -2$ because $5^{-2} = \\frac{1}{25}$
- $\\log_4 2 = \\frac{1}{2}$ because $4^{\\frac{1}{2}} = \\sqrt{4} = 2$

**Special Values:**
- $\\log_a 1 = 0$ (because $a^0 = 1$)
- $\\log_a a = 1$ (because $a^1 = a$)
- $\\log_a 0$ is undefined
- $\\log_a b$ is undefined when $a \\leq 0$ or $a = 1$

**Working with Negative Arguments:**
- $\\log_a(-x)$ is undefined in real numbers
- However, $\\log_a(x^{-1}) = \\log_a(\\frac{1}{x}) = -\\log_a x$`,
      interactive: "logarithm-evaluation"
    },
    {
      title: "Laws of Logarithms",
      content: `**FUNDAMENTAL LOGARITHM LAWS**

**1. Product Rule:** $\\log_a(xy) = \\log_a x + \\log_a y$
- The logarithm of a product equals the sum of logarithms
- Example: $\\log_2(8 \\times 4) = \\log_2 8 + \\log_2 4 = 3 + 2 = 5$
- Verification: $\\log_2(32) = 5$ ✓

**2. Quotient Rule:** $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$
- The logarithm of a quotient equals the difference of logarithms
- Example: $\\log_{10}\\left(\\frac{1000}{10}\\right) = \\log_{10} 1000 - \\log_{10} 10 = 3 - 1 = 2$
- Verification: $\\log_{10}(100) = 2$ ✓

**3. Power Rule:** $\\log_a(x^n) = n \\log_a x$
- The logarithm of a power equals the exponent times the logarithm of the base
- Example: $\\log_3(9^4) = 4 \\log_3 9 = 4 \\times 2 = 8$
- Verification: $\\log_3(6561) = 8$ ✓

**APPLYING THE LAWS**

**Expanding Logarithmic Expressions:**
$\\log_2\\left(\\frac{8x^3}{\\sqrt{y}}\\right) = \\log_2 8 + \\log_2 x^3 - \\log_2 y^{\\frac{1}{2}}$
$= 3 + 3\\log_2 x - \\frac{1}{2}\\log_2 y$

**Condensing Logarithmic Expressions:**
$2\\log_5 x + \\log_5 y - 3\\log_5 z = \\log_5 x^2 + \\log_5 y - \\log_5 z^3$
$= \\log_5\\left(\\frac{x^2 y}{z^3}\\right)$

**Important Notes:**
- $\\log_a(x + y) \\neq \\log_a x + \\log_a y$ (common mistake!)
- $\\log_a(x - y) \\neq \\log_a x - \\log_a y$ (common mistake!)
- These laws only work with multiplication, division, and powers`,
      interactive: "logarithm-laws"
    },
    {
      title: "Change of Base Formula",
      content: `**CHANGE OF BASE FORMULA**

**Formula:** $\\log_a b = \\frac{\\log_c b}{\\log_c a}$ for any valid base $c$

**Most Common Forms:**
- Using common logarithms: $\\log_a b = \\frac{\\log b}{\\log a}$
- Using natural logarithms: $\\log_a b = \\frac{\\ln b}{\\ln a}$

**WHY IT WORKS**

**Derivation:**
Let $\\log_a b = x$, then $a^x = b$

Taking $\\log_c$ of both sides:
$\\log_c(a^x) = \\log_c b$
$x \\log_c a = \\log_c b$
$x = \\frac{\\log_c b}{\\log_c a}$

Therefore: $\\log_a b = \\frac{\\log_c b}{\\log_c a}$

**PRACTICAL APPLICATIONS**

**Calculator Evaluation:**
Most calculators only have $\\log$ (base 10) and $\\ln$ (base $e$) buttons.

To find $\\log_7 50$:
$\\log_7 50 = \\frac{\\log 50}{\\log 7} = \\frac{1.699}{0.845} \\approx 2.01$

Or: $\\log_7 50 = \\frac{\\ln 50}{\\ln 7} = \\frac{3.912}{1.946} \\approx 2.01$

**Useful Relationships:**
- $\\log_a b = \\frac{1}{\\log_b a}$ (reciprocal relationship)
- $\\log_{a^n} b = \\frac{1}{n} \\log_a b$
- $\\log_a b^n = n \\log_a b$

**Example Applications:**
- Converting between different logarithmic scales
- Solving equations with different bases
- Comparing logarithmic values with different bases`,
      interactive: "change-of-base"
    },
    {
      title: "Solving Equations with Indices and Logarithms",
      content: `**EXPONENTIAL EQUATIONS**

**Type 1: Same Base**
Equation: $a^{f(x)} = a^{g(x)}$
**Method:** If bases are equal, equate the exponents: $f(x) = g(x)$

**Example:** $2^{3x-1} = 2^{x+5}$
Solution: $3x - 1 = x + 5$
$2x = 6$, so $x = 3$

**Type 2: Different Bases - Use Logarithms**
Equation: $a^x = b$
**Method:** Take logarithm of both sides: $x \\log a = \\log b$, so $x = \\frac{\\log b}{\\log a}$

**Example:** $3^x = 20$
Solution: $x \\log 3 = \\log 20$
$x = \\frac{\\log 20}{\\log 3} = \\frac{1.301}{0.477} \\approx 2.73$

**LOGARITHMIC EQUATIONS**

**Type 1: Single Logarithm**
Equation: $\\log_a f(x) = k$
**Method:** Convert to exponential form: $f(x) = a^k$

**Example:** $\\log_2(x + 3) = 4$
Solution: $x + 3 = 2^4 = 16$
$x = 13$

**Type 2: Multiple Logarithms - Same Base**
**Method:** Use logarithm laws to combine, then solve

**Example:** $\\log_3 x + \\log_3(x - 2) = 1$
Solution: $\\log_3[x(x-2)] = 1$
$x(x-2) = 3^1 = 3$
$x^2 - 2x - 3 = 0$
$(x-3)(x+1) = 0$
$x = 3$ or $x = -1$

**Check:** $x = -1$ makes $\\log_3(-1)$ undefined, so $x = 3$

**MIXED EQUATIONS**

**Equations with both exponentials and logarithms:**

**Example:** $e^{2x} - 3e^x + 2 = 0$
**Method:** Let $y = e^x$, then $y^2 - 3y + 2 = 0$
$(y-1)(y-2) = 0$, so $y = 1$ or $y = 2$
Therefore: $e^x = 1$ gives $x = 0$, and $e^x = 2$ gives $x = \\ln 2$

**IMPORTANT CHECKS**
- Always verify solutions in original equation
- Check domain restrictions (arguments of logarithms must be positive)
- Reject extraneous solutions that violate domain restrictions`,
      interactive: "solving-equations"
    }
  ]
}
];

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Coming Soon",
    options: ["Coming Soon"],
    correct: 1,
    explanation: "Coming Soon"
  },]