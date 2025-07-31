import {Section, QuizQuestion} from "../types"

export const sections: Section[]=[
 {
    title: "Variation",
    icon: "📈",
    content: `Variation describes how one quantity changes in relation to another quantity, forming the foundation for many real-world mathematical relationships.`,
    subsections: [
      {
        title: "Direct Variation",
        content: `**DIRECT VARIATION**

        
Two quantities vary directly if one increases as the other increases proportionally.

**Mathematical Form:**
- $y = kx$ where $k$ is the constant of variation
- $y \\propto x$ (y is proportional to x)
- $\\frac{y}{x} = k$ (constant ratio)

\`\`\`direct-variation
\`\`\`

**Key Properties:**
- When $x = 0$, $y = 0$ (passes through origin)
- Graph is a straight line through the origin
- Constant of variation: $k = \\frac{y}{x}$

**Examples:**
- Distance and time at constant speed: $d = vt$
- Circumference and radius: $C = 2\\pi r$
- Cost and quantity at fixed price: $C = px$`,
        interactive: "direct-variation"
      },
      {
        title: "Inverse Variation",
        content: `**INVERSE VARIATION**
Two quantities vary inversely if one increases as the other decreases proportionally.

**Mathematical Form:**
- $y = \\frac{k}{x}$ where $k$ is the constant of variation
- $y \\propto \\frac{1}{x}$ (y is inversely proportional to x)
- $xy = k$ (constant product)


\`\`\`inverse-variation
\`\`\`

**Key Properties:**
- Graph is a hyperbola
- As $x$ increases, $y$ decreases
- Product $xy$ remains constant
- Constant of variation: $k = xy$

**Examples:**
- Speed and time for fixed distance: $v = \\frac{d}{t}$
- Pressure and volume (Boyle's Law): $PV = k$
- Number of workers and time to complete a job`,
        interactive: "inverse-variation"
      },
      {
        title: "Distinguishing Direct and Inverse Variation",
        content: `**IDENTIFYING VARIATION TYPES**

**Direct Variation ($y = kx$):**
- Ratio $\\frac{y}{x}$ is constant
- Graph: straight line through origin
- Both quantities increase/decrease together
- When one doubles, the other doubles

\`\`\`distinguishing-variation
\`\`\`

**Inverse Variation ($y = \\frac{k}{x}$):**
- Product $xy$ is constant
- Graph: hyperbola (curved)
- One quantity increases as other decreases
- When one doubles, the other halves

**Test Methods:**
1. Calculate $\\frac{y}{x}$ for each pair - if constant, direct variation
2. Calculate $xy$ for each pair - if constant, inverse variation
3. Plot graph - straight line through origin (direct) or hyperbola (inverse)`,
        interactive: "variation-comparison"
      },
      {
        title: "Sketch Graphs of Variation",
        content: `**GRAPHING VARIATION**




**Direct Variation Graph ($y = kx$):**
- Straight line passing through origin $(0,0)$
- Slope = constant of variation $k$
- If $k > 0$: line slopes upward (positive correlation)
- If $k < 0$: line slopes downward (negative correlation)

**Inverse Variation Graph ($y = \\frac{k}{x}$):**
- Hyperbola with two branches
- Never touches x-axis or y-axis (asymptotes)
- If $k > 0$: branches in quadrants I and III
- If $k < 0$: branches in quadrants II and IV
- Symmetric about the line $y = x$ when $k > 0$


\`\`\`variation-graphs
\`\`\`

**Key Features:**
- Direct: linear, passes through origin
- Inverse: curved, approaches but never reaches axes`,
        interactive: "variation-graphs"
      },
      {
        title: "Joint Variation",
        content: `**JOINT VARIATION**
One quantity varies directly with two or more other quantities simultaneously.

**Mathematical Forms:**
- $z = kxy$ (z varies jointly with x and y)
- $z = kx^m y^n$ (z varies jointly with powers of x and y)
- $z \\propto xy$ or $z \\propto x^m y^n$

\`\`\`joint-variation
\`\`\`

**Finding the Constant:**
$k = \\frac{z}{xy}$ (for simple joint variation)

**Examples:**
1. Area of rectangle: $A = lw$ (varies jointly with length and width)
2. Volume of cylinder: $V = \\pi r^2 h$ (varies jointly with $r^2$ and $h$)
3. Kinetic energy: $KE = \\frac{1}{2}mv^2$ (varies jointly with mass and $v^2$)

**Problem-Solving Steps:**
1. Write the variation equation
2. Use given values to find $k$
3. Substitute to find unknown values`,
        interactive: "joint-variation"
      },
      {
        title: "Partial Variation (Combined Variation)",
        content: `**PARTIAL VARIATION**
Combines constant and variable parts, often mixing direct and inverse variation.

**Mathematical Forms:**
- $y = a + bx$ (linear with y-intercept)
- $y = a + \\frac{b}{x}$ (constant plus inverse)
- $y = ax + \\frac{b}{x}$ (direct plus inverse)

**Common Types:**

\`\`\`partial-variation
\`\`\`

1. **Linear Partial:** $y = a + bx$
   - $a$ = fixed cost, $bx$ = variable cost
   
2. **Mixed Partial:** $y = a + \\frac{b}{x}$
   - $a$ = base amount, $\\frac{b}{x}$ = variable amount

**Real-World Examples:**
- Phone bills: Fixed charge + usage charges
- Taxi fares: Base fare + distance charges  
- Total cost: Fixed costs + variable costs

**Finding Constants:**
Use two data points to form simultaneous equations`,
        interactive: "partial-variation"
      },
      {
        title: "Solving Variation Problems",
        content: `**PROBLEM-SOLVING STRATEGY**

**Step 1: Identify Variation Type**
- Direct: $y = kx$ 
- Inverse: $y = \\frac{k}{x}$
- Joint: $z = kxy$
- Partial: $y = a + bx$

**Step 2: Find the Constant(s)**
- Use given values to calculate $k$, $a$, or $b$
- For partial variation, use two points for simultaneous equations

**Step 3: Write Complete Equation**
- Substitute the constant back into the formula

**Step 4: Solve for Unknown**
- Use the complete equation with new given values

**Example Problem:**
"If $y$ varies inversely with $x$, and $y = 12$ when $x = 5$, find $y$ when $x = 8$."

Solution:
1. $y = \\frac{k}{x}$ (inverse variation)
2. $12 = \\frac{k}{5} \\Rightarrow k = 60$
3. $y = \\frac{60}{x}$
4. When $x = 8$: $y = \\frac{60}{8} = 7.5$`,
        interactive: "variation-problems"
      }
    ]
  }

];


export const quizQuestions: QuizQuestion[] = [
  {
    question: "If $y$ varies directly with $x$, and $y = 15$ when $x = 3$, what is $y$ when $x = 7$?",
    options: ["$21$", "$35$", "$45$", "$25$"],
    correct: 1,
    explanation: "For direct variation $y = kx$. Find $k$: $15 = k(3) \\Rightarrow k = 5$. So $y = 5x$. When $x = 7$: $y = 5(7) = 35$."
  },
  {
    question: "If $y$ varies inversely with $x$, and $y = 8$ when $x = 6$, what is $y$ when $x = 12$?",
    options: ["$4$", "$16$", "$24$", "$2$"],
    correct: 0,
    explanation: "For inverse variation $y = \\frac{k}{x}$. Find $k$: $8 = \\frac{k}{6} \\Rightarrow k = 48$. So $y = \\frac{48}{x}$. When $x = 12$: $y = \\frac{48}{12} = 4$."
  },
  {
    question: "Which of the following represents inverse variation?",
    options: ["$y = 3x$", "$y = \\frac{12}{x}$", "$y = x + 5$", "$y = x^2$"],
    correct: 1,
    explanation: "Inverse variation has the form $y = \\frac{k}{x}$ where $k$ is a constant. Only $y = \\frac{12}{x}$ fits this form."
  },
  {
    question: "If $z$ varies jointly with $x$ and $y$, and $z = 24$ when $x = 4$ and $y = 2$, find $z$ when $x = 3$ and $y = 5$.",
    options: ["$45$", "$30$", "$36$", "$40$"],
    correct: 0,
    explanation: "Joint variation: $z = kxy$. Find $k$: $24 = k(4)(2) \\Rightarrow k = 3$. So $z = 3xy$. When $x = 3$, $y = 5$: $z = 3(3)(5) = 45$."
  },
  {
    question: "The time taken to complete a job varies inversely with the number of workers. If 6 workers take 8 hours, how long will 4 workers take?",
    options: ["$10$ hours", "$12$ hours", "$16$ hours", "$14$ hours"],
    correct: 1,
    explanation: "Inverse variation: $t = \\frac{k}{w}$. Find $k$: $8 = \\frac{k}{6} \\Rightarrow k = 48$. When $w = 4$: $t = \\frac{48}{4} = 12$ hours."
  },
  {
    question: "Which graph represents direct variation?",
    options: ["A hyperbola", "A straight line through the origin", "A parabola", "A straight line not through origin"],
    correct: 1,
    explanation: "Direct variation $y = kx$ always produces a straight line that passes through the origin $(0,0)$."
  },
  {
    question: "If the cost of a phone plan is $\\$20$ plus $\\$0.05$ per minute, this represents:",
    options: ["Direct variation", "Inverse variation", "Joint variation", "Partial variation"],
    correct: 3,
    explanation: "This is partial variation: $C = 20 + 0.05m$, combining a fixed cost ($20$) with a variable cost ($0.05m$)."
  },
  {
    question: "In the equation $y = \\frac{36}{x}$, if $x$ is doubled, what happens to $y$?",
    options: ["$y$ is doubled", "$y$ is halved", "$y$ is squared", "$y$ stays the same"],
    correct: 1,
    explanation: "In inverse variation, when one variable is doubled, the other is halved. If $x$ becomes $2x$, then $y = \\frac{36}{2x} = \\frac{1}{2} \\cdot \\frac{36}{x}$."
  }
];