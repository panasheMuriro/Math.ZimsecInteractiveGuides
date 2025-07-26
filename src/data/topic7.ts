import {Section, QuizQuestion} from "../types";

export const sections: Section[] = [
  {
    title: "Simplifying Algebraic Expressions",
    icon: "🔧",
    content: `Simplifying algebraic expressions means making them as simple as possible by combining terms that are alike and performing basic operations like addition, subtraction, multiplication, and division. This is like tidying up a messy room by grouping similar items together!`,
    subsections: [
      {
        title: "Understanding Like Terms",
        content: `**What are Like Terms?**

Like terms are terms in an algebraic expression that have the *same variable* raised to the *same power*. Think of them as items that belong to the same category, so you can combine them.

**Examples:**
- **Like Terms:** $3x$ and $5x$ (both have $x$ to the power of 1)
- **Like Terms:** $2x^2$ and $-7x^2$ (both have $x^2$)
- **Not Like Terms:** $3x$ and $4x^2$ (different powers of $x$)
- **Not Like Terms:** $5x$ and $5y$ (different variables)

**Why it Matters:**
You can only add or subtract like terms because they represent the same kind of quantity. It’s like adding apples to apples, not apples to oranges!

**Practice Example:**
Which of these are like terms? $4x$, $2y$, $6x$, $-3x^2$
- Answer: $4x$ and $6x$ are like terms (both have $x$ to the power of 1). $2y$ and $-3x^2$ are not like terms with $4x$ or $6x$ because they involve different variables or powers.`,
        interactive: "like-terms"
      },
      {
        title: "Adding and Subtracting Like Terms",
        content: `**How to Add and Subtract Like Terms**

To simplify an expression, combine like terms by adding or subtracting their coefficients (the numbers in front of the variables). The variable part stays the same.

**Steps for Adding/Subtracting:**
1. **Identify like terms** in the expression.
2. **Add or subtract the coefficients** of the like terms.
3. **Keep the variable part unchanged**.
4. **Write the simplified expression**.

**Example 1: Adding Like Terms**
Simplify $3x + 5x$
- Step 1: Both $3x$ and $5x$ are like terms (same variable, $x$, same power, 1).
- Step 2: Add the coefficients: $3 + 5 = 8$.
- Step 3: Keep the variable: $x$.
- Step 4: Result: $8x$.

**Example 2: Subtracting Like Terms**
Simplify $7x^2 - 2x^2$
- Step 1: Both $7x^2$ and $2x^2$ are like terms (same variable $x$, same power 2).
- Step 2: Subtract the coefficients: $7 - 2 = 5$.
- Step 3: Keep the variable: $x^2$.
- Step 4: Result: $5x^2$.

**Example 3: Mixed Terms**
Simplify $4x + 3y - 2x + y$
- Step 1: Identify like terms:
  - $x$ terms: $4x$ and $-2x$
  - $y$ terms: $3y$ and $y$ (note: $y$ is the same as $1y$)
- Step 2: Combine $x$ terms: $4x - 2x = 2x$.
- Step 3: Combine $y$ terms: $3y + 1y = 4y$.
- Step 4: Write the result: $2x + 4y$.

**Tips:**
- Always group terms with the same variable and power together before combining.
- Double-check by writing down each step to avoid mistakes.
- Think of coefficients as the number of items (like 3 apples + 5 apples = 8 apples).

**Practice Example:**
Simplify $6a + 2b - 3a + 4b$
- Answer: Combine $a$ terms: $6a - 3a = 3a$. Combine $b$ terms: $2b + 4b = 6b$. Result: $3a + 6b$`,
        interactive: "add-subtract-terms"
      },
      {
        title: "Multiplying Algebraic Terms",
        content: `**Multiplying Terms**

When multiplying algebraic terms, you multiply the coefficients and combine the variables by adding their exponents (if the variables are the same).

**Steps for Multiplication:**
1. **Multiply the coefficients** (the numbers in front).
2. **Identify the variables** and their powers.
3. **Add the exponents** of like variables.
4. **Write the simplified term**.

**Example 1: Simple Multiplication**
Simplify $3x \\times 4x$
- Step 1: Multiply coefficients: $3 \\times 4 = 12$.
- Step 2: Variables are both $x$. Add exponents: $x^1 \\times x^1 = x^{1+1} = x^2$.
- Step 3: Result: $12x^2$.

**Example 2: Higher Powers**
Simplify $2x^2 \\times 5x^3$
- Step 1: Multiply coefficients: $2 \\times 5 = 10$.
- Step 2: Variables are both $x$. Add exponents: $x^2 \\times x^3 = x^{2+3} = x^5$.
- Step 3: Result: $10x^5$.

**Example 3: Multiple Variables**
Simplify $2xy \\times 3x^2y$
- Step 1: Multiply coefficients: $2 \\times 3 = 6$.
- Step 2: Combine $x$ variables: $x^1 \\times x^2 = x^{1+2} = x^3$.
- Step 3: Combine $y$ variables: $y^1 \\times y^1 = y^{1+1} = y^2$.
- Step 4: Result: $6x^3y^2$.

**Tips:**
- Break it down: first handle the numbers, then each variable one by one.
- Write out the exponents clearly to avoid confusion.
- Practice with small numbers first, then try bigger ones.

**Practice Example:**
Simplify $4a^2 \\times 3a$
- Answer: Coefficients: $4 \\times 3 = 12$. Variables: $a^2 \\times a^1 = a^{2+1} = a^3$. Result: $12a^3$`,
        interactive: "multiply-terms"
      },
      {
        title: "Dividing Algebraic Terms",
        content: `**Dividing Terms**

When dividing algebraic terms, you divide the coefficients and subtract the exponents of like variables.

**Steps for Division:**
1. **Divide the coefficients** (the numbers in front).
2. **Identify the variables** and their powers.
3. **Subtract the exponents** of like variables (numerator exponent minus denominator exponent).
4. **Write the simplified term**.

**Example 1: Simple Division**
Simplify $\\frac{12x^4}{3x^2}$
- Step 1: Divide coefficients: $12 \\div 3 = 4$.
- Step 2: Variables are both $x$. Subtract exponents: $x^4 \\div x^2 = x^{4-2} = x^2$.
- Step 3: Result: $4x^2$.

**Example 2: Multiple Variables**
Simplify $\\frac{15x^3y}{5xy}$
- Step 1: Divide coefficients: $15 \\div 5 = 3$.
- Step 2: Divide $x$ variables: $x^3 \\div x^1 = x^{3-1} = x^2$.
- Step 3: Divide $y$ variables: $y^1 \\div y^1 = y^{1-1} = y^0 = 1$.
- Step 4: Result: $3x^2 \\times 1 = 3x^2$.

**Example 3: Complex Division**
Simplify $\\frac{20a^4b^2}{4a^2b}$
- Step 1: Divide coefficients: $20 \\div 4 = 5$.
- Step 2: Divide $a$ variables: $a^4 \\div a^2 = a^{4-2} = a^2$.
- Step 3: Divide $b$ variables: $b^2 \\div b^1 = b^{2-1} = b^1$.
- Step 4: Result: $5a^2b$.

**Tips:**
- Always divide the numbers first to keep it simple.
- Handle each variable separately to avoid mistakes.
- Remember: $y^0 = 1$, so if exponents cancel out, you get 1 for that variable.

**Practice Example:**
Simplify $\\frac{18m^5}{6m^2}$
- Answer: Coefficients: $18 \\div 6 = 3$. Variables: $m^5 \\div m^2 = m^{5-2} = m^3$. Result: $3m^3$`,
        interactive: "divide-terms"
      },
      {
        title: "Substitution in Expressions",
        content: `**What is Substitution?**

Substitution means replacing variables in an expression with given numbers and then calculating the result. It’s like plugging numbers into a formula to find an answer.

**Steps for Substitution:**
1. **Identify the variables** in the expression.
2. **Replace each variable** with the given value.
3. **Follow the order of operations** (PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction).
4. **Calculate the final value**.

**Example 1: Simple Substitution**
Evaluate $2x + 3y$ when $x = 3$ and $y = -2$
- Step 1: Variables are $x$ and $y$.
- Step 2: Replace: $2(3) + 3(-2)$.
- Step 3: Calculate: $6 - 6 = 0$.
- Step 4: Result: $0$.

**Example 2: With Exponents**
Evaluate $2x^2 + 3y$ when $x = 3$ and $y = -2$
- Step 1: Variables are $x$ and $y$.
- Step 2: Replace: $2(3^2) + 3(-2)$.
- Step 3: Calculate exponents: $3^2 = 9$, so $2(9) + 3(-2)$.
- Step 4: Multiply: $18 - 6$.
- Step 5: Subtract: $18 - 6 = 12$.
- Step 6: Result: $12$.

**Example 3: Multiple Terms**
Evaluate $x^2 - 2xy + y^2$ when $x = 2$ and $y = 1$
- Step 1: Replace: $(2)^2 - 2(2)(1) + (1)^2$.
- Step 2: Exponents: $4 - 2(2)(1) + 1$.
- Step 3: Multiply: $4 - 4 + 1$.
- Step 4: Subtract and add: $4 - 4 = 0$, $0 + 1 = 1$.
- Step 5: Result: $1$.

**Tips:**
- Write down each step clearly to avoid skipping parts.
- Use parentheses when substituting to keep things organized.
- Double-check calculations, especially with negative numbers.

**Practice Example:**
Evaluate $3a^2 - 2b$ when $a = 2$ and $b = 3$
- Answer: Replace: $3(2^2) - 2(3)$. Exponents: $2^2 = 4$. Multiply: $3(4) - 2(3) = 12 - 6$. Subtract: $12 - 6 = 6$. Result: $6.$`,
        interactive: "substitution"
      }
    ]
  },
  {
    title: "HCF and LCM of Algebraic Expressions",
    icon: "🔍",
    content: `The Highest Common Factor (HCF) and Lowest Common Multiple (LCM) help us simplify or combine algebraic expressions, like finding the biggest piece that fits into two things or the smallest piece that both things can fit into.`,
    subsections: [
      {
        title: "Understanding HCF",
        content: `**What is HCF?**

The Highest Common Factor (HCF) is the largest expression that divides into two or more algebraic expressions without leaving a remainder. Think of it as the biggest "shared piece" of the expressions.

**Why it Matters:**
HCF is used to simplify fractions or factor expressions completely.

**Steps to Find HCF:**
1. **Factor each expression** into its prime factors and variables with their powers.
2. **Identify common factors** (numbers and variables present in all expressions).
3. **Take the lowest power** of each common factor.
4. **Multiply these factors** to get the HCF.

**Example 1: Simple HCF**
Find the HCF of $12x^3y^2$ and $18x^2y^4$
- Step 1: Factorize:
  - $12x^3y^2 = 2^2 \\times 3 \\times x^3 \\times y^2$
  - $18x^2y^4 = 2 \\times 3^2 \\times x^2 \\times y^4$
- Step 2: Common factors: $2$, $3$, $x$, $y$.
- Step 3: Lowest powers: $2^1$, $3^1$, $x^2$, $y^2$.
- Step 4: HCF = $2 \\times 3 \\times x^2 \\times y^2 = 6x^2y^2$.

**Example 2: Numbers Only**
Find the HCF of 24 and 36
- Step 1: Factorize:
  - $24 = 2^3 \\times 3$
  - $36 = 2^2 \\times 3^2$
- Step 2: Common factors: $2$, $3$.
- Step 3: Lowest powers: $2^2$, $3^1$.
- Step 4: HCF = $2^2 \\times 3 = 12$.

**Tips:**
- Break down each number and variable separately.
- Write out all factors clearly to avoid missing any.
- Check by dividing the original expressions by the HCF to ensure it works.

**Practice Example:**
Find the HCF of $16a^4b$ and $24a^2b^3$
- Answer: Factorize: $16a^4b = 2^4 \\times a^4 \\times b$, $24a^2b^3 = 2^3 \\times 3 \\times a^2 \\times b^3$. Common factors: $2$, $a$, $b$. Lowest powers: $2^3$, $a^2$, $b^1$. HCF = $2^3 \\times a^2 \\times b = 8a^2b.$`,
        interactive: "hcf"
      },
      {
        title: "Understanding LCM",
        content: `**What is LCM?**

The Lowest Common Multiple (LCM) is the smallest expression that both given expressions can divide into. It’s like finding the smallest "container" that can hold both expressions.

**Why it Matters:**
LCM is used when adding or subtracting algebraic fractions to find a common denominator.

**Steps to Find LCM:**
1. **Factor each expression** into its prime factors and variables with their powers.
2. **Take the highest power** of each factor present in any expression.
3. **Multiply these factors** to get the LCM.

**Example 1: Simple LCM**
Find the LCM of $12x^3y^2$ and $18x^2y^4$
- Step 1: Factorize:
  - $12x^3y^2 = 2^2 \\times 3 \\times x^3 \\times y^2$
  - $18x^2y^4 = 2 \\times 3^2 \\times x^2 \\times y^4$
- Step 2: Highest powers: $2^2$, $3^2$, $x^3$, $y^4$.
- Step 3: LCM = $2^2 \\times 3^2 \\times x^3 \\times y^4 = 36x^3y^4$.

**Example 2: Numbers Only**
Find the LCM of 15 and 20
- Step 1: Factorize:
  - $15 = 3 \\times 5$
  - $20 = 2^2 \\times 5$
- Step 2: Highest powers: $2^2$, $3^1$, $5^1$.
- Step 3: LCM = $2^2 \\times 3 \\times 5 = 60$.

**Tips:**
- List all factors carefully, including numbers and variables.
- The LCM will always be larger than or equal to the largest expression.
- Check by ensuring both expressions divide evenly into the LCM.

**Practice Example:**
Find the LCM of $10m^2n$ and $15m^3n^2$
- Answer: Factorize: $10m^2n = 2 \\times 5 \\times m^2 \\times n$, $15m^3n^2 = 3 \\times 5 \\times m^3 \\times n^2$. Highest powers: $2^1$, $3^1$, $5^1$, $m^3$, $n^2$. LCM = $2 \\times 3 \\times 5 \\times m^3 \\times n^2 = 30m^3n^2.`,
        interactive: "lcm"
      }
    ]
  },
  {
    title: "Factorization of Algebraic Expressions",
    icon: "🧩",
    content: `Factorization is like breaking down an algebraic expression into simpler parts that multiply together to give the original expression. It’s like taking apart a puzzle to see its pieces.`,
    subsections: [
      {
        title: "Common Factor Method",
        content: `**What is the Common Factor Method?**

This method involves finding the largest factor (number or variable) that all terms in an expression share and factoring it out.

**Steps for Common Factor Method:**
1. **Find the Greatest Common Divisor (GCD)** of the coefficients.
2. **Identify the lowest power** of each variable present in all terms.
3. **Write the common factor** (GCD and lowest powers).
4. **Divide each term** by the common factor to find the remaining expression.
5. **Write the factored form** as the common factor times the remaining expression.
6. **Check** by expanding the factors.

**Example 1: Simple Common Factor**
Factor $6x^2 + 9x$
- Step 1: GCD of 6 and 9 = 3.
- Step 2: Lowest power of $x$ = $x^1$.
- Step 3: Common factor = $3x$.
- Step 4: Divide: $6x^2 \\div 3x = 2x$, $9x \\div 3x = 3$.
- Step 5: Result: $3x(2x + 3)$.
- Step 6: Check: $3x(2x + 3) = 6x^2 + 9x$ ✓.

**Example 2: Multiple Variables**
Factor $12x^3y - 8x^2y^2$
- Step 1: GCD of 12 and 8 = 4.
- Step 2: Lowest powers: $x^2$, $y^1$.
- Step 3: Common factor = $4x^2y$.
- Step 4: Divide: $12x^3y \\div 4x^2y = 3x$, $-8x^2y^2 \\div 4x^2y = -2y$.
- Step 5: Result: $4x^2y(3x - 2y)$.
- Step 6: Check: $4x^2y(3x - 2y) = 12x^3y - 8x^2y^2$ ✓.

**Tips:**
- Start with the numbers (coefficients) to find the GCD.
- Then check each variable one by one for the lowest power.
- Always expand your answer to check it matches the original.

**Practice Example:**
Factor $10a^3b^2 + 15a^2b$
- Answer: GCD = 5, lowest powers: $a^2$, $b^1$. Common factor = $5a^2b$. Divide: $10a^3b^2 \\div 5a^2b = 2ab$, $15a^2b \\div 5a^2b = 3$. Result: $5a^2b(2ab + 3)$.`,
        interactive: "common-factor"
      },
      {
        title: "Difference of Two Squares",
        content: `**What is Difference of Two Squares?**

This method applies when an expression is the difference of two perfect squares, like $a^2 - b^2$. It factors into $(a + b)(a - b)$.

**Steps for Difference of Two Squares:**
1. **Identify perfect squares** in the expression (terms like $x^2$, $9 = 3^2$, or $4x^2 = (2x)^2$).
2. **Confirm it’s a subtraction** (difference).
3. **Apply the formula**: $a^2 - b^2 = (a + b)(a - b)$.
4. **Check** by expanding.

**Example 1: Simple Case**
Factor $x^2 - 9$
- Step 1: Perfect squares: $x^2 = x^2$, $9 = 3^2$.
- Step 2: Subtraction confirmed.
- Step 3: Apply formula: $a = x$, $b = 3$. Result: $(x + 3)(x - 3)$.
- Step 4: Check: $(x + 3)(x - 3) = x^2 - 9$ ✓.

**Example 2: Complex Case**
Factor $4x^2 - 25y^2$
- Step 1: Perfect squares: $4x^2 = (2x)^2$, $25y^2 = (5y)^2$.
- Step 2: Subtraction confirmed.
- Step 3: Apply formula: $a = 2x$, $b = 5y$. Result: $(2x + 5y)(2x - 5y)$.
- Step 4: Check: $(2x + 5y)(2x - 5y) = 4x^2 - 25y^2$ ✓.

**Tips:**
- Look for numbers or terms that are squares (like 4, 9, 16, or $x^2$, $y^4$).
- Always check for a minus sign between them.
- Practice recognizing squares like $16 = 4^2$ or $9x^2 = (3x)^2$.

**Practice Example:**
Factor $16a^2 - 81$
- Answer: Perfect squares: $16a^2 = (4a)^2$, $81 = 9^2$. Result: $(4a + 9)(4a - 9)$.`,
        interactive: "difference-squares"
      },
      {
        title: "Quadratic Factoring (Coefficient = 1)",
        content: `**Factoring Quadratics when $a = 1$**

For expressions like $x^2 + bx + c$, we find two numbers that multiply to $c$ and add to $b$.

**Steps:**
1. **Write the quadratic** in the form $x^2 + bx + c$.
2. **Find two numbers** that multiply to $c$ and add to $b$.
3. **Write the factors** as $(x + m)(x + n)$, where $m$ and $n$ are the numbers.
4. **Check** by expanding.

**Example 1: Positive Coefficients**
Factor $x^2 + 7x + 12$
- Step 1: Form: $x^2 + 7x + 12$ ($b = 7$, $c = 12$).
- Step 2: Find numbers: Factors of 12 are (1,12), (2,6), (3,4). Check: $3 + 4 = 7$, $3 \\times 4 = 12$.
- Step 3: Factors: $(x + 3)(x + 4)$.
- Step 4: Check: $(x + 3)(x + 4) = x^2 + 7x + 12$ ✓.

**Example 2: Negative Coefficients**
Factor $x^2 - 5x + 6$
- Step 1: Form: $x^2 - 5x + 6$ ($b = -5$, $c = 6$).
- Step 2: Factors of 6: (1,6), (2,3), (-1,-6), (-2,-3). Check: $-2 + (-3) = -5$, $-2 \\times -3 = 6$.
- Step 3: Factors: $(x - 2)(x - 3)$.
- Step 4: Check: $(x - 2)(x - 3) = x^2 - 5x + 6$ ✓.

**Tips:**
- List all factor pairs of $c$ and test their sums.
- If $c$ is positive, the signs of the numbers are either both positive or both negative.
- If $c$ is negative, one number is positive, one is negative.

**Practice Example:**
Factor $x^2 + 8x + 15$
- Answer: Factors of 15: (1,15), (3,5). Check: $3 + 5 = 8$, $3 \\times 5 = 15$. Result: $(x + 3)(x + 5)$.`,
        interactive: "quadratic-a1"
      },
      {
        title: "Quadratic Factoring (Coefficient ≠ 1)",
        content: `**Factoring Quadratics when $a \\neq 1$**

For $ax^2 + bx + c$, we split the middle term to factor.

**Steps:**
1. **Multiply $a \\times c$**.
2. **Find two numbers** that multiply to $a \\times c$ and add to $b$.
3. **Split the middle term** using these numbers.
4. **Group terms** into pairs and factor each pair.
5. **Factor out the common binomial**.
6. **Check** by expanding.

**Example:**
Factor $2x^2 + 7x + 3$
- Step 1: $a \\times c = 2 \\times 3 = 6$.
- Step 2: Numbers: $6 + 1 = 7$, $6 \\times 1 = 6$.
- Step 3: Split: $2x^2 + 6x + x + 3$.
- Step 4: Group: $(2x^2 + 6x) + (x + 3) = 2x(x + 3) + 1(x + 3)$.
- Step 5: Factor: $(2x + 1)(x + 3)$.
- Step 6: Check: $(2x + 1)(x + 3) = 2x^2 + 7x + 3$ ✓.

**Tips:**
- Focus on finding the right numbers for $a \\times c$.
- Write out each step carefully, especially the grouping part.
- Always check your work by multiplying back.

**Practice Example:**
Factor $3x^2 + 11x + 6$
- Answer: $a \\times c = 3 \\times 6 = 18$. Numbers: $9 + 2 = 11$, $9 \\times 2 = 18$. Split: $3x^2 + 9x + 2x + 6$. Group: $(3x^2 + 9x) + (2x + 6) = 3x(x + 3) + 2(x + 3)$. Factor: $(3x + 2)(x + 3)$.`,
        interactive: "quadratic-anot1"
      },
      {
        title: "Perfect Square Trinomials",
        content: `**What are Perfect Square Trinomials?**

These are quadratics that factor into $(a + b)^2$ or $(a - b)^2$, like $a^2 + 2ab + b^2$ or $a^2 - 2ab + b^2$.

**Steps to Recognize and Factor:**
1. **Check if first and last terms are perfect squares**.
2. **Verify the middle term** is $2 \\times \\text{first term’s root} \\times \\text{last term’s root}$.
3. **Write as a square**: $(a + b)^2$ or $(a - b)^2$.
4. **Check** by expanding.

**Example 1: Positive Middle Term**
Factor $x^2 + 6x + 9$
- Step 1: Perfect squares: $x^2 = x^2$, $9 = 3^2$.
- Step 2: Middle term: $6x = 2 \\times x \\times 3$.
- Step 3: Factor: $(x + 3)^2$.
- Step 4: Check: $(x + 3)^2 = x^2 + 6x + 9$ ✓.

**Example 2: Negative Middle Term**
Factor $4x^2 - 12x + 9$
- Step 1: Perfect squares: $4x^2 = (2x)^2$, $9 = 3^2$.
- Step 2: Middle term: $-12x = -2 \\times 2x \\times 3$.
- Step 3: Factor: $(2x - 3)^2$.
- Step 4: Check: $(2x - 3)^2 = 4x^2 - 12x + 9$ ✓.

**Tips:**
- Look for perfect squares like $1, 4, 9, 16$, or $x^2, x^4$.
- Check the middle term carefully—it must match exactly.
- Practice expanding the factored form to build confidence.

**Practice Example:**
Factor $x^2 + 10x + 25$
- Answer: Perfect squares: $x^2$, $25 = 5^2$. Middle term: $10x = 2 \\times x \\times 5$. Result: $(x + 5)^2$.`,
        interactive: "perfect-square"
      }
    ]
  },
  {
    title: "Expanding Algebraic Expressions",
    icon: "📏",
    content: `Expanding means removing brackets by multiplying each term inside by the term(s) outside. It’s like unpacking a box to see all the contents spread out.`,
    subsections: [
      {
        title: "Expanding Single Brackets",
        content: `**What is Expanding Single Brackets?**

You multiply each term inside the bracket by the term outside it, using the distributive property: $a(b + c) = ab + ac$.

**Steps:**
1. **Identify the term outside** the bracket.
2. **Multiply it by each term inside** the bracket.
3. **Write the expanded expression**.
4. **Simplify** if possible.

**Example 1: Positive Coefficient**
Expand $3(2x + 5)$
- Step 1: Outside term: $3$.
- Step 2: Multiply: $3 \\times 2x = 6x$, $3 \\times 5 = 15$.
- Step 3: Result: $6x + 15$.
- Step 4: No further simplification needed.

**Example 2: Negative Coefficient**
Expand $-2x(3x - 4)$
- Step 1: Outside term: $-2x$.
- Step 2: Multiply: $-2x \\times 3x = -6x^2$, $-2x \\times -4 = 8x$.
- Step 3: Result: $-6x^2 + 8x$.
- Step 4: No further simplification.

**Tips:**
- Write each multiplication step separately.
- Be careful with negative signs—they affect the result.
- Check by substituting a number to see if the original and expanded forms give the same value.

**Practice Example:**
Expand $4(3a - 2)$
- Answer: $4 \\times 3a = 12a$, $4 \\times -2 = -8$. Result: $12a - 8$.`,
        interactive: "single-brackets"
      },
      {
        title: "Expanding Two Brackets (FOIL Method)",
        content: `**What is the FOIL Method?**

FOIL stands for First, Outer, Inner, Last. It’s a way to multiply two binomials: $(a + b)(c + d)$.

**Steps:**
1. **Multiply First terms** of each bracket.
2. **Multiply Outer terms**.
3. **Multiply Inner terms**.
4. **Multiply Last terms**.
5. **Combine like terms**.

**Example 1:**
Expand $(x + 3)(x + 5)$
- Step 1: First: $x \\times x = x^2$.
- Step 2: Outer: $x \\times 5 = 5x$.
- Step 3: Inner: $3 \\times x = 3x$.
- Step 4: Last: $3 \\times 5 = 15$.
- Step 5: Combine: $x^2 + 5x + 3x + 15 = x^2 + 8x + 15$.

**Example 2:**
Expand $(2x - 1)(x + 4)$
- Step 1: First: $2x \\times x = 2x^2$.
- Step 2: Outer: $2x \\times 4 = 8x$.
- Step 3: Inner: $-1 \\times x = -x$.
- Step 4: Last: $-1 \\times 4 = -4$.
- Step 5: Combine: $2x^2 + 8x - x - 4 = 2x^2 + 7x - 4$.

**Tips:**
- Write “F, O, I, L” to remind yourself of the steps.
- Draw arrows between terms to visualize the multiplications.
- Combine like terms carefully, watching signs.

**Practice Example:**
Expand $(x + 2)(x + 6)$
- Answer: First: $x^2$. Outer: $6x$. Inner: $2x$. Last: $12$. Combine: $x^2 + 8x + 12$.`,
        interactive: "foil-method"
      },
      {
        title: "Special Products",
        content: `**What are Special Products?**

These are common patterns that make expanding easier:
- $(a + b)^2 = a^2 + 2ab + b^2$
- $(a - b)^2 = a^2 - 2ab + b^2$
- $(a + b)(a - b) = a^2 - b^2$

**Steps:**
1. **Identify the pattern**.
2. **Apply the formula**.
3. **Simplify if needed**.
4. **Check** by expanding manually.

**Example 1: Square of a Binomial**
Expand $(x + 3)^2$
- Step 1: Pattern: $(a + b)^2$, with $a = x$, $b = 3$.
- Step 2: Formula: $x^2 + 2(x)(3) + 3^2 = x^2 + 6x + 9$.
- Step 3: No simplification needed.
- Step 4: Check: $(x + 3)(x + 3) = x^2 + 6x + 9$ ✓.

**Example 2: Difference of Squares**
Expand $(2x - 5)(2x + 5)$
- Step 1: Pattern: $(a - b)(a + b)$, with $a = 2x$, $b = 5$.
- Step 2: Formula: $(2x)^2 - 5^2 = 4x^2 - 25$.
- Step 3: No simplification needed.
- Step 4: Check: $(2x - 5)(2x + 5) = 4x^2 - 25$ ✓.

**Tips:**
- Memorize the three patterns—they save time!
- Practice each pattern with numbers first (e.g., $(2 + 3)^2$).
- Always verify with FOIL to build confidence.

**Practice Example:**
Expand $(x - 4)^2$
- Answer: Pattern: $(a - b)^2$. Formula: $x^2 - 2(x)(4) + 4^2 = x^2 - 8x + 16$.`,
        interactive: "special-products"
      }
    ]
  },
  {
    title: "Simplifying Algebraic Fractions",
    icon: "➗",
    content: `Algebraic fractions are fractions where the numerator and/or denominator are algebraic expressions. Simplifying them makes them easier to work with.`,
    subsections: [
      {
        title: "Simplifying Basic Fractions",
        content: `**What is Simplifying Fractions?**

Simplifying means dividing the numerator and denominator by their common factors to get the simplest form.

**Steps:**
1. **Factor numerator and denominator** if possible.
2. **Cancel common factors**.
3. **Write the simplified fraction**.

**Example 1:**
Simplify $\\frac{6x^2}{9x}$
- Step 1: Factor: $6x^2 = 2 \\times 3 \\times x^2$, $9x = 3 \\times 3 \\times x$.
- Step 2: Cancel: $3$ and $x$. Result: $\\frac{2 \\times x}{3} = \\frac{2x}{3}$.
- Step 3: Result: $\\frac{2x}{3}$.

**Example 2: With Factoring**
Simplify $\\frac{x^2 - 4}{x + 2}$
- Step 1: Factor numerator: $x^2 - 4 = (x + 2)(x - 2)$.
- Step 2: Cancel: $\\frac{(x + 2)(x - 2)}{x + 2} = x - 2$.
- Step 3: Result: $x - 2$ (note: $x \\neq -2$ to avoid division by zero).

**Tips:**
- Always factor first—it makes canceling easier.
- Check for restrictions (values that make the denominator zero).
- Practice with numbers first (e.g., $\\frac{6}{9} = \\frac{2}{3}$).

**Practice Example:**
Simplify $\\frac{8a^3}{12a}$
- Answer: Factor: $8a^3 = 2^3 \\times a^3$, $12a = 2^2 \\times 3 \\times a$. Cancel: $2^2$ and $a$. Result: $\\frac{2 \\times a^2}{3} = \\frac{2a^2}{3}$.`,
        interactive: "simplify-fractions"
      },
      {
        title: "Adding and Subtracting Fractions",
        content: `**Adding/Subtracting Fractions**

You need a common denominator to add or subtract algebraic fractions.

**Steps:**
1. **Find the LCM** of the denominators.
2. **Rewrite each fraction** with the common denominator.
3. **Add or subtract the numerators**.
4. **Simplify** the result if possible.

**Example 1: Simple Denominators**
Simplify $\\frac{2}{x} + \\frac{3}{2x}$
- Step 1: LCM of $x$ and $2x$ is $2x$.
- Step 2: Rewrite: $\\frac{2 \\times 2}{x \\times 2} + \\frac{3}{2x} = \\frac{4}{2x} + \\frac{3}{2x}$.
- Step 3: Add: $\\frac{4 + 3}{2x} = \\frac{7}{2x}$.
- Step 4: No further simplification.

**Example 2: Complex Denominators**
Simplify $\\frac{x+1}{x-2} - \\frac{x-3}{x+1}$
- Step 1: LCM of $x-2$ and $x+1$ is $(x-2)(x+1)$.
- Step 2: Rewrite: $\\frac{(x+1)(x+1)}{(x-2)(x+1)} - \\frac{(x-3)(x-2)}{(x-2)(x+1)}$.
- Step 3: Subtract: $\\frac{(x+1)^2 - (x-3)(x-2)}{(x-2)(x+1)}$.
- Step 4: Expand numerator: $(x+1)^2 = x^2 + 2x + 1$, $(x-3)(x-2) = x^2 - 5x + 6$. Subtract: $(x^2 + 2x + 1) - (x^2 - 5x + 6) = 7x - 5$.
- Step 5: Result: $\\frac{7x - 5}{(x-2)(x+1)}$.

**Tips:**
- Find the LCM carefully—it’s the key to combining fractions.
- Write out each step to avoid losing track.
- Practice with numerical fractions first to understand the process.

**Practice Example:**
Simplify $\\frac{3}{a} + \\frac{2}{a^2}$
- Answer: LCM = $a^2$. Rewrite: $\\frac{3a}{a^2} + \\frac{2}{a^2} = \\frac{3a + 2}{a^2}$. Result: $\\frac{3a + 2}{a^2}$.`,
        interactive: "add-subtract-fractions"
      },
      {
        title: "Multiplying and Dividing Fractions",
        content: `**Multiplying Fractions**

Multiply numerators together and denominators together, then simplify.

**Steps for Multiplication:**
1. **Multiply numerators**.
2. **Multiply denominators**.
3. **Simplify** by canceling common factors.

**Example:**
Simplify $\\frac{2x}{3y} \\times \\frac{9y^2}{4x}$
- Step 1: Numerators: $2x \\times 9y^2 = 18xy^2$.
- Step 2: Denominators: $3y \\times 4x = 12xy$.
- Step 3: Fraction: $\\frac{18xy^2}{12xy}$. Cancel: $18 \\div 12 = \\frac{3}{2}$, $x \\div x = 1$, $y^2 \\div y = y$. Result: $\\frac{3y}{2}$.

**Dividing Fractions**

Multiply by the reciprocal of the second fraction.

**Steps for Division:**
1. **Rewrite division** as multiplication by the reciprocal.
2. **Follow multiplication steps**.

**Example:**
Simplify $\\frac{x^2}{3} \\div \\frac{x}{6}$
- Step 1: Rewrite: $\\frac{x^2}{3} \\times \\frac{6}{x}$.
- Step 2: Multiply: Numerators: $x^2 \\times 6 = 6x^2$. Denominators: $3 \\times x = 3x$.
- Step 3: Fraction: $\\frac{6x^2}{3x}$. Cancel: $6 \\div 3 = 2$, $x^2 \\div x = x$. Result: $2x$.

**Tips:**
- For division, flip the second fraction and treat it as multiplication.
- Cancel common factors before multiplying to make it easier.
- Check your work by substituting values.

**Practice Example:**
Simplify $\\frac{4a}{5} \\times \\frac{10}{2a^2}$
- Answer: Multiply: $\\frac{4a \\times 10}{5 \\times 2a^2} = \\frac{40a}{10a^2}$. Cancel: $40 \\div 10 = 4$, $a \\div a^2 = \\frac{1}{a}$. Result: $\\frac{4}{a}$.`,
        interactive: "multiply-divide-fractions"
      }
    ]
  },
  {
    title: "Completing the Square",
    icon: "🟥",
    content: `Completing the square transforms a quadratic expression into a perfect square trinomial plus/minus a constant. It’s like reshaping a puzzle piece to fit perfectly.`,
    subsections: [
      {
        title: "Completing the Square (Coefficient = 1)",
        content: `**What is Completing the Square?**

For $x^2 + bx + c$, we make it look like $(x + h)^2 + k$.

**Steps:**
1. **Isolate the quadratic and linear terms**: Move the constant $c$ to the other side.
2. **Take half of $b$** (the coefficient of $x$) and square it: $(\\frac{b}{2})^2$.
3. **Add and subtract this value** inside the expression.
4. **Rewrite as a perfect square** plus a constant.
5. **Simplify** and include the constant $c$.

**Example:**
Complete the square for $x^2 + 6x + 5$
- Step 1: Isolate: $x^2 + 6x = -5$.
- Step 2: Half of 6 is $3$, square it: $3^2 = 9$.
- Step 3: Add/subtract: $x^2 + 6x + 9 - 9 = -5$.
- Step 4: Rewrite: $(x + 3)^2 - 9 = -5$.
- Step 5: Simplify: $(x + 3)^2 - 9 + 5 = (x + 3)^2 - 4$.
- Result: $(x + 3)^2 - 4$.

**Tips:**
- Focus on the number in front of $x$ (the $b$ term).
- Practice finding half and squaring it with numbers first.
- Check by expanding the perfect square to match the original.

**Practice Example:**
Complete the square for $x^2 + 8x + 10$
- Answer: Half of 8 is 4, $4^2 = 16$. Rewrite: $x^2 + 8x = -10$. Add/subtract: $x^2 + 8x + 16 - 16 = -10$. Result: $(x + 4)^2 - 16 + 10 = (x + 4)^2 - 6$.`,
        interactive: "complete-square-a1"
      },
      {
        title: "Completing the Square (Coefficient ≠ 1)",
        content: `**Completing the Square when $a \\neq 1$**

For $ax^2 + bx + c$, factor out the coefficient of $x^2$ first.

**Steps:**
1. **Factor out $a$** from the first two terms: $a(x^2 + \\frac{b}{a}x) + c$.
2. **Complete the square** inside the brackets using $\\frac{b}{a}$.
3. **Adjust the constant** outside the brackets.
4. **Simplify** the expression.

**Example:**
Complete the square for $2x^2 + 12x + 10$
- Step 1: Factor: $2(x^2 + 6x) + 10$.
- Step 2: Inside brackets: Half of 6 is 3, $3^2 = 9$. Add/subtract: $x^2 + 6x + 9 - 9$.
- Step 3: Rewrite: $2((x + 3)^2 - 9) + 10$.
- Step 4: Distribute: $2(x + 3)^2 - 18 + 10$.
- Step 5: Result: $2(x + 3)^2 - 8$.

**Tips:**
- Factor out the leading coefficient carefully.
- Work inside the brackets first, then handle the outside terms.
- Check by expanding to ensure it matches.

**Practice Example:**
Complete the square for $3x^2 + 6x + 12$
- Answer: Factor: $3(x^2 + 2x) + 12$. Half of 2 is 1, $1^2 = 1$. Inside: $x^2 + 2x + 1 - 1$. Rewrite: $3((x + 1)^2 - 1) + 12 = 3(x + 1)^2 - 3 + 12 = 3(x + 1)^2 + 9$.`,
        interactive: "complete-square-anot1"
      }
    ]
  },
   {
    title: "Solving Equations",
    icon: "⚖️",
    content: `Equations are like puzzles where you need to find the value of the variable that makes the equation true. Think of it as balancing a scale: both sides must be equal. This section covers solving linear, simultaneous, and quadratic equations, which are key skills in algebra.`,
    subsections: [
      {
        title: "Solving Linear Equations",
        content: `**What are Linear Equations?**

A linear equation is an equation where the variable has a power of 1 (e.g., $3x + 5 = 11$). Solving it means finding the value of the variable that makes the equation true.

**Why it Matters:**
Linear equations are used to model simple relationships, like calculating costs or distances.

**Steps to Solve a Linear Equation:**
1. **Simplify both sides** by combining like terms or clearing fractions.
2. **Isolate the variable** by moving all terms with the variable to one side and constants to the other.
3. **Solve for the variable** by dividing or multiplying.
4. **Check your answer** by substituting it back into the original equation.

**Example 1: Simple Linear Equation**
Solve $2x + 3 = 7$
- Step 1: Equation is already simplified.
- Step 2: Isolate $x$: Subtract 3 from both sides: $2x + 3 - 3 = 7 - 3$, so $2x = 4$.
- Step 3: Solve: Divide both sides by 2: $2x \\div 2 = 4 \\div 2$, so $x = 2$.
- Step 4: Check: $2(2) + 3 = 4 + 3 = 7$ ✓.

**Example 2: Multi-Step Equation**
Solve $3(2x - 1) = 15$
- Step 1: Expand: $6x - 3 = 15$.
- Step 2: Isolate $x$: Add 3 to both sides: $6x - 3 + 3 = 15 + 3$, so $6x = 18$.
- Step 3: Solve: Divide by 6: $6x \\div 6 = 18 \\div 6$, so $x = 3$.
- Step 4: Check: $3(2(3) - 1) = 3(6 - 1) = 3(5) = 15$ ✓.

**Example 3: Fractions**
Solve $\\frac{x}{2} + 4 = 7$
- Step 1: Clear the fraction by multiplying both sides by 2: $2 \\times \\frac{x}{2} + 2 \\times 4 = 2 \\times 7$, so $x + 8 = 14$.
- Step 2: Isolate $x$: Subtract 8: $x + 8 - 8 = 14 - 8$, so $x = 6$.
- Step 3: Check: $\\frac{6}{2} + 4 = 3 + 4 = 7$ ✓.

**Tips:**
- Write down each step to avoid skipping anything.
- Use a balance analogy: whatever you do to one side, do to the other.
- Practice with small numbers first, then try equations with fractions or parentheses.

**Practice Example:**
Solve $4x - 5 = 11$
- Answer: Add 5: $4x = 16$. Divide by 4: $x = 4$. Check: $4(4) - 5 = 16 - 5 = 11$ ✓.`,
        interactive: "linear-equations"
      },
      {
        title: "Solving Simultaneous Equations",
        content: `**What are Simultaneous Equations?**

These are two or more equations with the same variables, solved together to find values that work for all equations. Think of it as finding the point where two lines meet.

**Why it Matters:**
They’re used in problems with multiple unknowns, like mixing ingredients or solving geometry problems.

**Method 1: Elimination**
Add or subtract equations to eliminate one variable, then solve for the other.

**Steps for Elimination:**
1. **Make coefficients of one variable equal** by multiplying equations if needed.
2. **Add or subtract** to eliminate that variable.
3. **Solve for the remaining variable**.
4. **Substitute back** to find the other variable.
5. **Check** both equations.

**Example 1: Elimination**
Solve:
$2x + y = 8$
$x - y = 1$
- Step 1: Coefficients of $y$ are 1 and -1, already suitable.
- Step 2: Add equations: $(2x + y) + (x - y) = 8 + 1$, so $3x = 9$.
- Step 3: Solve: $x = 3$.
- Step 4: Substitute into second equation: $3 - y = 1$, so $y = 2$.
- Step 5: Check: $2(3) + 2 = 6 + 2 = 8$ ✓, $3 - 2 = 1$ ✓. Solution: $x = 3$, $y = 2$.

**Method 2: Substitution**
Solve one equation for one variable and substitute into the other.

**Steps for Substitution:**
1. **Solve one equation** for one variable.
2. **Substitute** into the other equation.
3. **Solve the resulting equation**.
4. **Substitute back** to find the other variable.
5. **Check** both equations.

**Example 2: Substitution**
Solve:
$3x + 2y = 11$
$x = y + 2$
- Step 1: Second equation is already solved: $x = y + 2$.
- Step 2: Substitute into first: $3(y + 2) + 2y = 11$.
- Step 3: Expand and solve: $3y + 6 + 2y = 11$, so $5y + 6 = 11$, $5y = 5$, $y = 1$.
- Step 4: Substitute: $x = 1 + 2 = 3$.
- Step 5: Check: $3(3) + 2(1) = 9 + 2 = 11$ ✓, $3 = 1 + 2$ ✓. Solution: $x = 3$, $y = 1$.

**Tips:**
- Try elimination when coefficients are easy to align, substitution when one equation is simple.
- Write each step clearly and double-check substitutions.
- Use graph paper to visualize the lines intersecting if it helps.

**Practice Example:**
Solve:
$4x + y = 10$
$2x - y = 2$
- Answer: Add equations: $6x = 12$, so $x = 2$. Substitute: $2(2) - y = 2$, so $4 - y = 2$, $y = 2$. Check: $4(2) + 2 = 10$ ✓, $2(2) - 2 = 2$ ✓. Solution: $x = 2$, $y = 2$.`,
        interactive: "simultaneous-equations"
      },
      {
        title: "Solving Quadratic Equations",
        content: `**What are Quadratic Equations?**

A quadratic equation is of the form $ax^2 + bx + c = 0$, where $a \\neq 0$. It often has two solutions because it represents a parabola.

**Why it Matters:**
Quadratics model curved paths, like projectile motion or profit calculations.

**Method 1: Factoring**
Factor the quadratic and set each factor to zero.

**Steps for Factoring:**
1. **Write in standard form**: $ax^2 + bx + c = 0$.
2. **Factor the quadratic**.
3. **Set each factor to zero** and solve.
4. **Check** solutions.

**Example 1: Factoring**
Solve $x^2 + 5x + 6 = 0$
- Step 1: Already in standard form.
- Step 2: Factor: Find numbers that multiply to 6 and add to 5: $2 \\times 3 = 6$, $2 + 3 = 5$. So, $(x + 2)(x + 3) = 0$.
- Step 3: Solve: $x + 2 = 0$, $x = -2$; $x + 3 = 0$, $x = -3$.
- Step 4: Check: For $x = -2$: $(-2)^2 + 5(-2) + 6 = 4 - 10 + 6 = 0$ ✓. For $x = -3$: $(-3)^2 + 5(-3) + 6 = 9 - 15 + 6 = 0$ ✓.

**Method 2: Completing the Square**
Rewrite the quadratic as a perfect square.

**Steps:**
1. **Isolate $x^2 + bx$**.
2. **Complete the square** by adding $(\\frac{b}{2})^2$.
3. **Solve** by taking the square root.
4. **Check** solutions.

**Example 2: Completing the Square**
Solve $x^2 + 4x - 5 = 0$
- Step 1: Move constant: $x^2 + 4x = 5$.
- Step 2: Half of 4 is 2, $2^2 = 4$. Add 4: $x^2 + 4x + 4 = 5 + 4$, so $(x + 2)^2 = 9$.
- Step 3: Square root: $x + 2 = \\pm 3$. Solve: $x = 1$ or $x = -5$.
- Step 4: Check: For $x = 1$: $1^2 + 4(1) - 5 = 1 + 4 - 5 = 0$ ✓. For $x = -5$: $(-5)^2 + 4(-5) - 5 = 25 - 20 - 5 = 0$ ✓.

**Method 3: Quadratic Formula**
Use $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ for $ax^2 + bx + c = 0$.

**Steps:**
1. **Identify $a$, $b$, $c$**.
2. **Plug into the formula**.
3. **Simplify** the expression.
4. **Check** solutions.

**Example 3: Quadratic Formula**
Solve $2x^2 - 4x - 6 = 0$
- Step 1: $a = 2$, $b = -4$, $c = -6$.
- Step 2: Formula: $x = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 4(2)(-6)}}{2(2)}$.
- Step 3: Simplify: $x = \\frac{4 \\pm \\sqrt{16 + 48}}{4} = \\frac{4 \\pm \\sqrt{64}}{4} = \\frac{4 \\pm 8}{4}$. So, $x = \\frac{12}{4} = 3$ or $x = \\frac{-4}{4} = -1$.
- Step 4: Check: For $x = 3$: $2(3^2) - 4(3) - 6 = 18 - 12 - 6 = 0$ ✓. For $x = -1$: $2(-1^2) - 4(-1) - 6 = 2 + 4 - 6 = 0$ ✓.

**Tips:**
- Try factoring first if the numbers are simple.
- Use the quadratic formula when factoring is hard—it always works!
- Write out each step and double-check calculations, especially with square roots.

**Practice Example:**
Solve $x^2 - 2x - 8 = 0$ by factoring
- Answer: Factor: Numbers for $-8$ and $-2$: $-4 \\times 2 = -8$, $-4 + 2 = -2$. So, $(x - 4)(x + 2) = 0$. Solve: $x = 4$, $x = -2$. Check: For $x = 4$: $4^2 - 2(4) - 8 = 16 - 8 - 8 = 0$ ✓. For $x = -2$: $(-2)^2 - 2(-2) - 8 = 4 + 4 - 8 = 0$ ✓.`,
        interactive: "quadratic-equations"
      }
    ]
  },
   {
    title: "Solving Inequalities",
    icon: "📏",
    content: `Inequalities are like equations, but instead of finding exact values, you find a range of values that make the statement true. Think of them as setting boundaries, like saying "you need to be taller than 1.2 meters to ride a roller coaster." This section covers linear and quadratic inequalities, and how to show their solutions on a number line or graph.`,
    subsections: [
      {
        title: "Solving Linear Inequalities",
        content: `**What are Linear Inequalities?**

A linear inequality looks like a linear equation but uses symbols like $<$, $>$, $≤$, or $≥$ instead of $=$. For example, $2x + 3 < 7$ means finding all $x$ values that make the statement true.

**Why it Matters:**
Inequalities help solve real-world problems, like budgeting (spending less than a certain amount) or determining valid ranges.

**Steps to Solve a Linear Inequality:**
1. **Simplify both sides** by combining like terms or clearing fractions.
2. **Isolate the variable** using addition, subtraction, multiplication, or division.
3. **Important: If you multiply or divide by a negative number, flip the inequality sign.**
4. **Write the solution** as a range (e.g., $x < 2$).
5. **Check** by testing a value in the solution range.
6. **Graph** the solution on a number line: open circle for $<, >$; closed circle for $≤, ≥$.

**Example 1: Simple Inequality**
Solve $3x + 5 < 14$
- Step 1: Simplify: Subtract 5 from both sides: $3x + 5 - 5 < 14 - 5$, so $3x < 9$.
- Step 2: Isolate $x$: Divide by 3: $3x \\div 3 < 9 \\div 3$, so $x < 3$.
- Step 3: No negative numbers, so no flip needed.
- Step 4: Solution: $x < 3$.
- Step 5: Check: Test $x = 2$: $3(2) + 5 = 6 + 5 = 11 < 14$ ✓.
- Step 6: Graph: Open circle at 3, arrow pointing left.

**Example 2: Negative Coefficient**
Solve $-2x + 4 > 10$
- Step 1: Subtract 4: $-2x + 4 - 4 > 10 - 4$, so $-2x > 6$.
- Step 2: Divide by -2 (flip the sign!): $-2x \\div -2 < 6 \\div -2$, so $x < -3$.
- Step 3: Solution: $x < -3$.
- Step 4: Check: Test $x = -4$: $-2(-4) + 4 = 8 + 4 = 12 > 10$ ✓.
- Step 5: Graph: Open circle at -3, arrow left.

**Example 3: Fractions**
Solve $\\frac{x}{3} - 2 ≤ 1$
- Step 1: Clear fraction: Multiply by 3: $3 \\times \\frac{x}{3} - 3 \\times 2 ≤ 3 \\times 1$, so $x - 6 ≤ 3$.
- Step 2: Add 6: $x - 6 + 6 ≤ 3 + 6$, so $x ≤ 9$.
- Step 3: Solution: $x ≤ 9$.
- Step 4: Check: Test $x = 6$: $\\frac{6}{3} - 2 = 2 - 2 = 0 ≤ 1$ ✓.
- Step 5: Graph: Closed circle at 9, arrow left.

**Tips:**
- Treat inequalities like equations, but watch for negative numbers when dividing or multiplying.
- Always test a value to confirm your solution works.
- Draw the number line step-by-step to visualize the solution range.

**Practice Example:**
Solve $4x - 3 ≥ 9$
- Answer: Add 3: $4x ≥ 12$. Divide by 4: $x ≥ 3$. Check: Test $x = 3$: $4(3) - 3 = 12 - 3 = 9 ≥ 9$ ✓. Graph: Closed circle at 3, arrow right.`,
        interactive: "linear-inequalities"
      },
      {
        title: "Solving Quadratic Inequalities",
        content: `**What are Quadratic Inequalities?**

A quadratic inequality involves a quadratic expression, like $x^2 - 4x + 3 > 0$. The solution is a range of $x$ values that make the inequality true, often found by factoring and testing regions.

**Why it Matters:**
Quadratic inequalities model situations with curved relationships, like finding when a projectile is above a certain height.

**Steps to Solve a Quadratic Inequality:**
1. **Move all terms to one side** to get zero on the other (e.g., $ax^2 + bx + c > 0$).
2. **Factor the quadratic** to find the roots (where it equals zero).
3. **Plot the roots** on a number line to divide it into intervals.
4. **Test a point in each interval** to see where the inequality holds.
5. **Write the solution** including or excluding the roots (open/closed intervals).
6. **Check** by testing values in the solution range.

**Example 1: Greater Than Zero**
Solve $x^2 - 5x + 6 > 0$
- Step 1: Already in form: $x^2 - 5x + 6 > 0$.
- Step 2: Factor: Numbers for $6$ and $-5$: $-2 \\times -3 = 6$, $-2 - 3 = -5$. So, $(x - 2)(x - 3) > 0$.
- Step 3: Roots: $x = 2$, $x = 3$. Plot on number line: intervals $(-\\infty, 2)$, $(2, 3)$, $(3, \\infty)$.
- Step 4: Test points:
  - At $x = 1$: $(1 - 2)(1 - 3) = (-1)(-2) = 2 > 0$ (true).
  - At $x = 2.5$: $(2.5 - 2)(2.5 - 3) = (0.5)(-0.5) = -0.25 < 0$ (false).
  - At $x = 4$: $(4 - 2)(4 - 3) = (2)(1) = 2 > 0$ (true).
- Step 5: Solution: $(x - 2)(x - 3) > 0$ when $x < 2$ or $x > 3$ (open intervals since inequality is strict).
- Step 6: Check: Test $x = 4$: $4^2 - 5(4) + 6 = 16 - 20 + 6 = 2 > 0$ ✓.

**Example 2: Less Than or Equal to Zero**
Solve $x^2 - 4 ≤ 0$
- Step 1: Form: $x^2 - 4 ≤ 0$.
- Step 2: Factor: Difference of squares: $(x - 2)(x + 2) ≤ 0$.
- Step 3: Roots: $x = 2$, $x = -2$. Intervals: $(-\\infty, -2)$, $(-2, 2)$, $(2, \\infty)$.
- Step 4: Test points:
  - At $x = -3$: $(-3 - 2)(-3 + 2) = (-5)(-1) = 5 > 0$ (false).
  - At $x = 0$: $(0 - 2)(0 + 2) = (-2)(2) = -4 ≤ 0$ (true).
  - At $x = 3$: $(3 - 2)(3 + 2) = (1)(5) = 5 > 0$ (false).
- Step 5: Solution: $(x - 2)(x + 2) ≤ 0$ when $-2 ≤ x ≤ 2$ (closed since $≤$ includes roots).
- Step 6: Check: Test $x = 0$: $0^2 - 4 = -4 ≤ 0$ ✓.

**Example 3: Complex Quadratic**
Solve $2x^2 + 3x - 2 < 0$
- Step 1: Form: $2x^2 + 3x - 2 < 0$.
- Step 2: Factor: $a \\times c = 2 \\times -2 = -4$, numbers for $-4$ and $3$: $4, -1$. Split: $2x^2 + 4x - x - 2 = 2x(x + 2) - 1(x + 2) = (2x - 1)(x + 2) < 0$.
- Step 3: Roots: $2x - 1 = 0$, $x = \\frac{1}{2}$; $x + 2 = 0$, $x = -2$. Intervals: $(-\\infty, -2)$, $(-2, \\frac{1}{2})$, $(\\frac{1}{2}, \\infty)$.
- Step 4: Test points:
  - At $x = -3$: $(2(-3) - 1)(-3 + 2) = (-7)(-1) = 7 > 0$ (false).
  - At $x = -1$: $(2(-1) - 1)(-1 + 2) = (-3)(1) = -3 < 0$ (true).
  - At $x = 1$: $(2(1) - 1)(1 + 2) = (1)(3) = 3 > 0$ (false).
- Step 5: Solution: $-2 < x < \\frac{1}{2}$ (open since strict inequality).
- Step 6: Check: Test $x = 0$: $2(0^2) + 3(0) - 2 = -2 < 0$ ✓.

**Tips:**
- Draw the number line and mark roots clearly to see the intervals.
- Test one point at a time and write down whether the product is positive or negative.
- Practice factoring first to make finding roots easier.

**Practice Example:**
Solve $x^2 - x - 6 < 0$
- Answer: Factor: Numbers for $-6$ and $-1$: $-3 \\times 2 = -6$, $-3 + 2 = -1$. So, $(x - 3)(x + 2) < 0$. Roots: $x = 3$, $x = -2$. Test: At $x = -3$: $(-3 - 3)(-3 + 2) = (-6)(-1) = 6 > 0$. At $x = 0$: $(0 - 3)(0 + 2) = (-3)(2) = -6 < 0$. At $x = 4$: $(4 - 3)(4 + 2) = (1)(6) = 6 > 0$. Solution: $-2 < x < 3$. Check: $x = 0$: $0^2 - 0 - 6 = -6 < 0$ ✓.`,
        interactive: "quadratic-inequalities"
      },
      {
        title: "Graphical Representation of Inequalities",
        content: `**What is Graphical Representation?**

Graphing inequalities shows the solution as a region on a number line (for linear) or a coordinate plane (for quadratic). It helps visualize the range of valid values.

**Why it Matters:**
Graphs make it easier to understand solutions, especially for quadratic inequalities or systems of inequalities.

**Steps for Linear Inequalities (Number Line):**
1. **Solve the inequality** to find the boundary point.
2. **Draw a number line** and mark the boundary.
3. **Use an open circle** for $<, >$ or **closed circle** for $≤, ≥$.
4. **Shade the direction** of the solution (left for $<, ≤$; right for $>, ≥$).

**Example 1: Linear Inequality**
Graph $2x - 1 < 5$
- Step 1: Solve: $2x < 6$, $x < 3$.
- Step 2: Draw number line, mark 3.
- Step 3: Open circle at 3 (since $<$).
- Step 4: Shade left of 3.

**Steps for Quadratic Inequalities (Coordinate Plane):**
1. **Solve the quadratic** to find roots.
2. **Sketch the parabola** by finding the vertex and roots.
3. **Shade the region** where the inequality holds (above/below the parabola).
4. **Use dashed line** for $<, >$ or **solid line** for $≤, ≥$.

**Example 2: Quadratic Inequality**
Graph $x^2 - 4x + 3 ≤ 0$
- Step 1: Solve: $(x - 1)(x - 3) ≤ 0$. Roots: $x = 1$, $x = 3$. Test: Solution is $1 ≤ x ≤ 3$.
- Step 2: Vertex: $x = \\frac{-b}{2a} = \\frac{4}{2} = 2$. At $x = 2$: $2^2 - 4(2) + 3 = 4 - 8 + 3 = -1$. Vertex: $(2, -1)$.
- Step 3: Sketch parabola opening upward, crossing $x$-axis at 1 and 3.
- Step 4: Shade between $x = 1$ and $x = 3$, including roots (solid line for $≤$).

**Tips:**
- Practice drawing number lines for linear inequalities first—they’re simpler.
- For quadratics, sketch the parabola step-by-step: roots, vertex, then shape.
- Test points on the graph to confirm the shaded region.

**Practice Example:**
Graph $x + 2 > 1$
- Answer: Solve: $x > -1$. Number line: Open circle at -1, shade right. Check: Test $x = 0$: $0 + 2 = 2 > 1$ ✓.`,
        interactive: "graph-inequalities"
      }
    ]
  },
    {
    title: "Indices and Logarithms",
    icon: "📈",
    content: `Indices (also called exponents) tell you how many times to multiply a number by itself, like a shortcut for repeated multiplication. Logarithms are the opposite—they help you find the exponent needed to produce a certain number. Think of indices as building a tower by stacking blocks, and logarithms as figuring out how many blocks were used. This section covers the rules of indices, solving exponential equations, and using logarithms to solve equations.`,
    subsections: [
      {
        title: "Laws of Indices",
        content: `**What are Indices?**

An index (or exponent) shows how many times a base is multiplied by itself. For example, $2^3 = 2 \\times 2 \\times 2 = 8$. The laws of indices help simplify expressions with exponents.

**Why it Matters:**
These laws make it easier to work with large numbers or variables in algebra, like in science or finance.

**Laws of Indices:**
1. **Multiplication**: $a^m \\times a^n = a^{m+n}$ (add exponents when bases are the same).
2. **Division**: $a^m \\div a^n = a^{m-n}$ (subtract exponents when bases are the same).
3. **Power of a Power**: $(a^m)^n = a^{m \\times n}$ (multiply exponents).
4. **Zero Exponent**: $a^0 = 1$ (any non-zero base to the power 0 is 1).
5. **Negative Exponent**: $a^{-n} = \\frac{1}{a^n}$ (move to denominator and make positive).
6. **Fractional Exponent**: $a^{1/n} = \\sqrt[n]{a}$, $a^{m/n} = (\\sqrt[n]{a})^m$ (represents roots).

**Steps to Simplify Using Laws:**
1. **Identify the base** and exponents.
2. **Apply the relevant law** based on the operation.
3. **Simplify** the expression.
4. **Check** by calculating with numbers if needed.

**Example 1: Multiplication**
Simplify $3^2 \\times 3^4$
- Step 1: Base is 3, exponents are 2 and 4.
- Step 2: Use multiplication law: $3^2 \\times 3^4 = 3^{2+4} = 3^6$.
- Step 3: Simplify: $3^6 = 729$.
- Step 4: Check: $3^2 = 9$, $3^4 = 81$, $9 \\times 81 = 729$ ✓.

**Example 2: Division and Negative Exponent**
Simplify $\\frac{5^7}{5^3} \\times 5^{-2}$
- Step 1: Base is 5, exponents are 7, 3, and -2.
- Step 2: Division: $5^7 \\div 5^3 = 5^{7-3} = 5^4$. Then multiply: $5^4 \\times 5^{-2} = 5^{4-2} = 5^2$.
- Step 3: Simplify: $5^2 = 25$.
- Step 4: Check: $\\frac{5^7}{5^3} = 5^4 = 625$, $5^{-2} = \\frac{1}{25}$, $625 \\times \\frac{1}{25} = 25$ ✓.

**Example 3: Power of a Power and Fractional Exponent**
Simplify $(2^3)^{1/2}$
- Step 1: Base is 2, exponents are 3 and $1/2$.
- Step 2: Power law: $(2^3)^{1/2} = 2^{3 \\times 1/2} = 2^{3/2}$.
- Step 3: Fractional exponent: $2^{3/2} = (2^{1/2})^3 = (\\sqrt{2})^3$.
- Step 4: Check: $2^3 = 8$, $8^{1/2} = \\sqrt{8} = 2\\sqrt{2} \\approx 2.828$. Also, $(\\sqrt{2})^3 \\approx (1.414)^3 \\approx 2.828$ ✓.

**Tips:**
- Memorize one law at a time and practice with numbers (e.g., $2^2 \\times 2^3$).
- Write out each step to avoid mixing up exponents.
- Use a calculator to verify results for confidence.

**Practice Example:**
Simplify $\\frac{4^5}{4^2} \\times 4^{-1}$
- Answer: Division: $4^5 \\div 4^2 = 4^{5-2} = 4^3$. Multiply: $4^3 \\times 4^{-1} = 4^{3-1} = 4^2 = 16$. Check: $4^5 = 1024$, $4^2 = 16$, $1024 \\div 16 = 64$, $4^{-1} = \\frac{1}{4}$, $64 \\times \\frac{1}{4} = 16$ ✓.`,
        interactive: "indices-laws"
      },
      {
        title: "Solving Exponential Equations",
        content: `**What are Exponential Equations?**

These are equations where the variable is in the exponent, like $2^x = 8$. You solve by making the bases the same or using logarithms (covered later).

**Why it Matters:**
Exponential equations model growth or decay, like population growth or radioactive decay.

**Steps to Solve (Same Base Method):**
1. **Rewrite both sides** with the same base if possible.
2. **Equate the exponents** since if $a^m = a^n$, then $m = n$.
3. **Solve the resulting equation**.
4. **Check** by substituting back.

**Example 1: Same Base**
Solve $3^x = 27$
- Step 1: Rewrite: $27 = 3^3$, so $3^x = 3^3$.
- Step 2: Equate exponents: $x = 3$.
- Step 3: Check: $3^3 = 27$ ✓.

**Example 2: Different Bases**
Solve $4^x = 16$
- Step 1: Rewrite: $4 = 2^2$, $16 = 2^4$, so $(2^2)^x = 2^4$. Simplify: $2^{2x} = 2^4$.
- Step 2: Equate: $2x = 4$, so $x = 2$.
- Step 3: Check: $4^2 = 16$ ✓.

**Example 3: Negative Exponent**
Solve $5^{x-1} = \\frac{1}{25}$
- Step 1: Rewrite: $\\frac{1}{25} = 25^{-1} = (5^2)^{-1} = 5^{-2}$. So, $5^{x-1} = 5^{-2}$.
- Step 2: Equate: $x - 1 = -2$, so $x = -1$.
- Step 3: Check: $5^{-1-1} = 5^{-2} = \\frac{1}{25}$ ✓.

**Tips:**
- Practice rewriting numbers as powers (e.g., $8 = 2^3$, $9 = 3^2$).
- Write down each step to keep track of bases and exponents.
- If bases don’t match easily, try small numbers for $x$ to guess and check.

**Practice Example:**
Solve $2^{x+1} = 8$
- Answer: Rewrite: $8 = 2^3$, so $2^{x+1} = 2^3$. Equate: $x + 1 = 3$, $x = 2$. Check: $2^{2+1} = 2^3 = 8$ ✓.`,
        interactive: "exponential-equations"
      },
      {
        title: "Introduction to Logarithms",
        content: `**What are Logarithms?**

A logarithm answers, "What exponent gives this result?" For example, $\\log_2(8) = 3$ because $2^3 = 8$. Logarithms are the inverse of exponents.

**Why it Matters:**
Logs help solve exponential equations and are used in fields like science (e.g., pH scales) and computing.

**Key Logarithm Properties:**
1. **Definition**: $\\log_b(a) = c$ means $b^c = a$.
2. **Product Rule**: $\\log_b(mn) = \\log_b(m) + \\log_b(n)$.
3. **Quotient Rule**: $\\log_b(\\frac{m}{n}) = \\log_b(m) - \\log_b(n)$.
4. **Power Rule**: $\\log_b(m^n) = n \\log_b(m)$.
5. **Change of Base**: $\\log_b(a) = \\frac{\\log_k(a)}{\\log_k(b)}$ (useful with calculators, often $k = 10$ or $e$).
6. **Special Logs**: $\\log_b(1) = 0$, $\\log_b(b) = 1$.

**Steps to Evaluate Logarithms:**
1. **Rewrite as an exponential** equation.
2. **Solve for the exponent**.
3. **Use properties** to simplify if needed.
4. **Check** by converting back.

**Example 1: Basic Log**
Evaluate $\\log_3(9)$
- Step 1: Rewrite: $\\log_3(9) = x$ means $3^x = 9$.
- Step 2: Since $9 = 3^2$, $3^x = 3^2$, so $x = 2$.
- Step 3: Check: $3^2 = 9$ ✓.

**Example 2: Using Properties**
Simplify $\\log_2(4) + \\log_2(8)$
- Step 1: Product rule: $\\log_2(4 \\times 8) = \\log_2(32)$.
- Step 2: Evaluate: $32 = 2^5$, so $\\log_2(32) = 5$.
- Step 3: Check: $\\log_2(4) = 2$ ($2^2 = 4$), $\\log_2(8) = 3$ ($2^3 = 8$), $2 + 3 = 5$ ✓.

**Example 3: Power Rule**
Simplify $2 \\log_5(3)$
- Step 1: Power rule: $2 \\log_5(3) = \\log_5(3^2) = \\log_5(9)$.
- Step 2: Cannot simplify further without a calculator.
- Step 3: Check: $3^2 = 9$, so $\\log_5(9)$ is correct form.

**Tips:**
- Think of logs as "undoing" exponents.
- Practice converting logs to exponential form to understand the relationship.
- Memorize properties one at a time with simple examples.

**Practice Example:**
Evaluate $\\log_4(16)$
- Answer: Rewrite: $4^x = 16$. Since $16 = 4^2$, $x = 2$. Check: $4^2 = 16$ ✓.`,
        interactive: "logarithms-intro"
      },
      {
        title: "Solving Logarithmic Equations",
        content: `**What are Logarithmic Equations?**

These are equations where the variable is inside a logarithm, like $\\log_2(x) = 3$. You solve by converting to exponential form or using log properties.

**Why it Matters:**
Log equations appear in problems involving exponential growth or decay, like interest calculations.

**Steps to Solve:**
1. **Isolate the logarithm** if possible.
2. **Convert to exponential form** or combine logs using properties.
3. **Solve the resulting equation**.
4. **Check** for valid solutions (logs are undefined for non-positive arguments).

**Example 1: Simple Log Equation**
Solve $\\log_3(x) = 2$
- Step 1: Log is isolated.
- Step 2: Exponential form: $3^2 = x$, so $x = 9$.
- Step 3: Check: $\\log_3(9) = 2$ ($3^2 = 9$) ✓.

**Example 2: Using Properties**
Solve $\\log_2(x) + \\log_2(x - 1) = 1$
- Step 1: Product rule: $\\log_2(x(x - 1)) = 1$.
- Step 2: Exponential form: $2^1 = x(x - 1)$, so $x^2 - x = 2$.
- Step 3: Solve: $x^2 - x - 2 = 0$, factor: $(x - 2)(x + 1) = 0$, so $x = 2$ or $x = -1$.
- Step 4: Check: For $x = 2$: $\\log_2(2) + \\log_2(1) = 1 + 0 = 1$ ✓. For $x = -1$: $\\log_2(-1)$ is undefined, so reject.
- Step 5: Solution: $x = 2$.

**Example 3: Quotient Rule**
Solve $\\log_5(2x) - \\log_5(x - 1) = 1$
- Step 1: Quotient rule: $\\log_5(\\frac{2x}{x - 1}) = 1$.
- Step 2: Exponential form: $5^1 = \\frac{2x}{x - 1}$, so $2x = 5(x - 1)$.
- Step 3: Solve: $2x = 5x - 5$, $5 = 3x$, $x = \\frac{5}{3}$.
- Step 4: Check: $\\log_5(2 \\cdot \\frac{5}{3}) - \\log_5(\\frac{5}{3} - 1) = \\log_5(\\frac{10}{3}) - \\log_5(\\frac{2}{3}) = \\log_5(\\frac{10/3}{2/3}) = \\log_5(5) = 1$ ✓.

**Tips:**
- Always convert logs to exponential form to make solving easier.
- Check for undefined logs ($x > 0$ inside logs).
- Practice with simple logs before combining with properties.

**Practice Example:**
Solve $\\log_4(x + 3) = 2$
- Answer: Exponential form: $4^2 = x + 3$, so $16 = x + 3$, $x = 13$. Check: $\\log_4(13 + 3) = \\log_4(16) = 2$ ✓.`,
        interactive: "log-equations"
      }
    ]
  }

];

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Simplify the expression $5x + 3x - 2x$",
    options: ["$8x$", "$10x$", "$6x$", "$7x$"],
    correct: 2,
    explanation: "Combine like terms: $5x + 3x = 8x$, then $8x - 2x = 6x$."
  },
  {
    question: "Multiply $2a^2 \\times 3a^3$",
    options: ["$6a^6$", "$5a^5$", "$6a^5$", "$6a^4$"],
    correct: 2,
    explanation: "Multiply coefficients: $2 \\times 3 = 6$. Add exponents: $a^2 \\times a^3 = a^{2+3} = a^5$. Result: $6a^5$."
  },
  {
    question: "Find the HCF of $8x^2y$ and $12xy^2$",
    options: ["$4xy$", "$2xy$", "$4x^2y^2$", "$6xy$"],
    correct: 0,
    explanation: "Factorize: $8x^2y = 2^3 \\times x^2 \\times y$, $12xy^2 = 2^2 \\times 3 \\times x \\times y^2$. Common factors: $2^2$, $x$, $y$. HCF = $4xy$."
  },
  {
    question: "Factor $10x^2 + 15x$",
    options: ["$5x(2x + 3)$", "$5(2x + 3)$", "$10x(x + 3)$", "$5x(x + 3)$"],
    correct: 0,
    explanation: "GCD = 5, lowest power of $x = x$. Common factor: $5x$. Divide: $10x^2 \\div 5x = 2x$, $15x \\div 5x = 3$. Result: $5x(2x + 3)$."
  },
  {
    question: "Expand $(x + 4)(x + 2)$",
    options: ["$x^2 + 6x + 8$", "$x^2 + 8x + 6$", "$x^2 + 2x + 8$", "$x^2 + 6x + 6$"],
    correct: 0,
    explanation: "Use FOIL: First: $x^2$, Outer: $4x$, Inner: $2x$, Last: $8$. Combine: $x^2 + 6x + 8$."
  },

];

// export const quizQuestions: QuizQuestion[] = [
//   {
//     question: "Simplify $2^3 \\times 2^2$",
//     options: ["$2^6$", "$2^5$", "$2^4$", "$4^5$"],
//     correct: 1,
//     explanation: "Multiplication law: $2^3 \\times 2^2 = 2^{3+2} = 2^5 = 32$."
//   },
//   {
//     question: "Solve $5^x = 125$",
//     options: ["$x = 2$", "$x = 3$", "$x = 4$", "$x = 5$"],
//     correct: 1,
//     explanation: "Rewrite: $125 = 5^3$, so $5^x = 5^3$. Equate: $x = 3$. Check: $5^3 = 125$ ✓."
//   },
//   {
//     question: "Evaluate $\\log_2(16)$",
//     options: ["$2$", "$3$", "$4$", "$5$"],
//     correct: 2,
//     explanation: "Rewrite: $2^x = 16$. Since $16 = 2^4$, $x = 4$. Check: $2^4 = 16$ ✓."
//   },
//   {
//     question: "Simplify $\\log_3(9) + \\log_3(3)$",
//     options: ["$2$", "$3$", "$4$", "$5$"],
//     correct: 1,
//     explanation: "Product rule: $\\log_3(9 \\times 3) = \\log_3(27)$. Since $27 = 3^3$, $\\log_3(27) = 3$."
//   },
//   {
//     question: "Solve $\\log_5(x) = 3$",
//     options: ["$x = 15$", "$x = 25$", "$x = 125$", "$x = 625$"],
//     correct: 2,
//     explanation: "Exponential form: $5^3 = x$, so $x = 125$. Check: $\\log_5(125) = 3$ ✓."
//   }
// ];
