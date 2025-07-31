/* eslint-disable @typescript-eslint/no-explicit-any */
import { Section, QuizQuestion } from "../types";

export const sections: Section[] = [
  {
    title: "Functional Graphs",
    icon: "📊",
    content: `Graphs are visual representations of mathematical relationships and real-world data.`,
    subsections: [
      {
        title: "Cartesian Plane and Coordinates",
        content: `**CARTESIAN PLANE AND COORDINATES**

The Cartesian plane is a two-dimensional coordinate system used to plot points and graph functions:

**Components:**
- **x-axis**: Horizontal line (left-right)
- **y-axis**: Vertical line (up-down)
- **Origin**: Point (0,0) where axes intersect
- **Quadrants**: Four regions formed by the axes

**Coordinates:**
Every point has coordinates (x, y):
- **x-coordinate**: Distance from y-axis (positive right, negative left)
- **y-coordinate**: Distance from x-axis (positive up, negative down)

**The Four Quadrants:**
- **Quadrant I**: x > 0, y > 0 (top-right)
- **Quadrant II**: x < 0, y > 0 (top-left)
- **Quadrant III**: x < 0, y < 0 (bottom-left)
- **Quadrant IV**: x > 0, y < 0 (bottom-right)

\`\`\`quadrants
\`\`\`


**Scale:**
- Choose appropriate units for your data
- Both axes can have different scales
- Label axes clearly with units

**Plotting Points:**
1. Start at origin (0,0)
2. Move x units horizontally
3. Move y units vertically
4. Mark the point

**Example:**
Plot the point (3, -2):
- Move 3 units right from origin
- Move 2 units down
- Point is in Quadrant IV


**Example:**
Let’s plot the point (3, -2):

\`\`\`point-plot
\`\`\`
`,
        interactive: "cartesian-plane",
      },
      {
        title: "Linear Graphs",
        content: `**LINEAR GRAPHS**

Linear graphs represent straight-line relationships between variables:

**General Form:**
y = mx + c

Where:
- **m**: Gradient (slope) - steepness of line
- **c**: y-intercept - where line crosses y-axis
- **x**: Independent variable
- **y**: Dependent variable

\`\`\`linear-demo
\`\`\`

**Key Features:**
- Straight line
- Constant rate of change
- Same gradient throughout

**Finding Gradient:**
$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$

**Types of Gradients:**
- **Positive**: Line slopes upward (m > 0) - blue
- **Negative**: Line slopes downward (m < 0) - orange
- **Zero**: Horizontal line (m = 0) - green
- **Undefined**: Vertical line - red


\`\`\`gradient-types
{
  "types": ["positive", "negative", "zero", "undefined"],
  "examples": true
}
\`\`\`
**Creating Linear Graphs:**
1. Create table of values
2. Choose x-values
3. Calculate corresponding y-values using y = mx + c
4. Plot points on Cartesian plane
5. Draw straight line through points

**Functional Notation:**
f(x) = mx + c means "function of x equals mx plus c"
- f(2) means substitute x = 2 into the function
- If f(x) = 2x + 1, then f(2) = 2(2) + 1 = 5



**Example:**
Graph y = 2x - 1:
- Gradient = 2 (rises 2 units for every 1 unit right)
- y-intercept = -1 (crosses y-axis at (0, -1))

Table of values:
x: -1, 0, 1, 2
y: -3, -1, 1, 3

\`\`\`linear-graph-example
\`\`\`

`,
        interactive: "linear-graphs",
      },
      {
        title: "Quadratic Graphs",
        content: `**QUADRATIC GRAPHS**

Quadratic graphs represent curved relationships with squared terms:

**General Form:**
y = ax² + bx + c

Where:
- **a**: Coefficient of x² (determines shape and direction)
- **b**: Coefficient of x
- **c**: Constant term (y-intercept)

**Example Quadratic Graph:**

\`\`\`quadratic-plot-example
\`\`\`

**Key Features:**
- **Parabola**: U-shaped or inverted U-shaped curve
- **Axis of symmetry**: Vertical line through vertex
- **Vertex**: Turning point (minimum or maximum)
- **y-intercept**: Point where graph crosses y-axis (0, c)

**Shape Determination:**
- If a > 0: Parabola opens upward (U-shape)
- If a < 0: Parabola opens downward (∩-shape)
- Larger |a| makes parabola narrower
- Smaller |a| makes parabola wider

\`\`\`quadratic-graph-shapes
\`\`\`

**Finding the Vertex:**
x-coordinate of vertex: $x = -\\frac{b}{2a}$
y-coordinate: Substitute x-value back into equation

**Creating Quadratic Graphs:**
1. Create table of values with x-values around vertex
2. Calculate y-values using y = ax² + bx + c
3. Plot points on Cartesian plane
4. Draw smooth curve through points

**Example:**
Graph y = x² - 4x + 3:
- a = 1 > 0, so parabola opens upward
- Vertex x-coordinate: x = -(-4)/(2×1) = 2
- Vertex y-coordinate: y = 2² - 4(2) + 3 = -1
- Vertex: (2, -1)
- y-intercept: (0, 3)

**Table of values**
  $$
  \\begin{array}{|c|c|c|c|c|c|}
  \\hline
  x & 0 & 1 & 2 & 3 & 4 \\\\
  \\hline
  y & 3 & 0 & -1 & 0 & 3 \\\\
  \\hline
  \\end{array}
  $$

  **Graph**

  \`\`\`quadratic-plot-example-2
{
  "a": 1,
  "b": -4,
  "c": 3,
  "domain": [0, 4]
}
\`\`\`
`,
        interactive: "quadratic-graphs",
      },
      {
        title: "Cubic and Other Functions",
        content: `**CUBIC AND OTHER FUNCTIONS**

Higher-order polynomial functions create more complex curves:

**Cubic Functions:**
y = ax³ + bx² + cx + d

**Key Features:**
- Can have up to 2 turning points
- Can cross x-axis up to 3 times
- If a > 0: rises to the right, falls to the left
- If a < 0: falls to the right, rises to the left

**Other Functions:**

**Reciprocal Functions:**
$y = \\frac{k}{x}$ or $y = \\frac{1}{x}$

Features:
- Hyperbola shape
- Two separate branches
- Asymptotes at x = 0 and y = 0
- Never touches axes

**Square Root Functions:**
$y = \\sqrt{x}$ or $y = a\\sqrt{x}$

Features:
- Starts at origin (for basic form)
- Increases gradually
- Only defined for x ≥ 0
e
**Exponential Functions:**
y = aˣ (where a > 0, a ≠ 1)

Features:
- Passes through (0, 1)
- If a > 1: exponential growth
- If 0 < a < 1: exponential decay
- Horizontal asymptote at y = 0

**Example:**
For y = x³ - 3x:
- Cubic function with turning points
- Passes through origin
- Has S-shaped curve`,
        interactive: "cubic-functions",
      },
      {
        title: "Inverse Functions and Graphs",
        content: `**INVERSE FUNCTIONS AND GRAPHS**

Inverse functions "undo" the operation of the original function:

**Definition:**
If f(x) produces y, then f⁻¹(y) produces x
- f⁻¹ is read as "f inverse"
- Not the same as 1/f(x)

**Finding Inverse Functions:**
1. Replace f(x) with y
2. Swap x and y variables
3. Solve for y
4. Replace y with f⁻¹(x)

**Properties:**
- f(f⁻¹(x)) = x
- f⁻¹(f(x)) = x
- Domain of f = Range of f⁻¹
- Range of f = Domain of f⁻¹

**Graphical Relationship:**
- Graph of f⁻¹ is reflection of f across line y = x
- Points (a, b) on f correspond to points (b, a) on f⁻¹

**Common Inverse Pairs:**
- f(x) = x + a, f⁻¹(x) = x - a
- f(x) = ax, f⁻¹(x) = x/a
- f(x) = x², f⁻¹(x) = √x (x ≥ 0)
- f(x) = x³, f⁻¹(x) = ∛x

**Testing for Inverses:**
Use horizontal line test:
- If any horizontal line crosses graph more than once, inverse is not a function
- May need to restrict domain

**Example:**
Find inverse of f(x) = 2x + 3:
1. y = 2x + 3
2. x = 2y + 3
3. x - 3 = 2y
4. y = (x - 3)/2
5. f⁻¹(x) = (x - 3)/2

Check: f⁻¹(f(x)) = f⁻¹(2x + 3) = ((2x + 3) - 3)/2 = 2x/2 = x ✓`,
        interactive: "inverse-functions",
      },

      //   distance
    ],
  },

  {
    title: "Travel Graphs",
    icon: "📈",
    content:
      "Travel graphs visually represent motion by showing how distance, speed, or velocity changes over time, with different graph shapes indicating movement patterns like constant speed, acceleration, or rest.",
    subsections: [
      {
        title: "Distance-Time Graphs",
        content: `**DISTANCE-TIME GRAPHS**

Distance-time graphs show how distance changes over time:

**Axes:**
- **x-axis**: Time (usually in seconds, minutes, or hours)
- **y-axis**: Distance (usually from a fixed point)

**Key Features:**


\`\`\`distance-time-features
{
  "showLegend": true,
  "title": ""
}
\`\`\`



**Horizontal Line:**
- No change in distance
- Object is stationary
- Speed = 0

**Sloping Line:**
- Constant speed (uniform motion)
- Steeper slope = faster speed
- Gentle slope = slower speed

**Curved Line:**
- Changing speed (acceleration or deceleration)
- Steepening curve = increasing speed
- Flattening curve = decreasing speed

**Calculating Speed:**
$\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}} = \\frac{\\text{Change in distance}}{\\text{Change in time}}$

Speed = gradient of distance-time graph

**Types of Motion:**

\`\`\`distance-time-motion
{
  "showLegend": true,
  "title": ""
}
\`\`\`

**Uniform Motion:**
- Straight line with constant gradient
- Constant speed

**Accelerated Motion:**
- Curved line
- Speed increasing over time

**Decelerated Motion:**
- Curved line flattening
- Speed decreasing over time

**At Rest:**
- Horizontal line
- Zero gradient, zero speed

**Example Interpretation:**

\`\`\`distance-time-example
{
  "showSpeedCalculations": true
}
\`\`\`


A distance-time graph showing:
- 0-2s: Straight line from (0,0) to (2,5) - constant speed of 5 m/s
- 2-4s: Horizontal line at 5m - stationary
- 4-6s: Straight line from (4,5) to (6,0) - constant speed of 5 m/s back to start`,
        interactive: "distance-time",
      },
      {
        title: "Speed-Time and Velocity-Time Graphs",
        content: `**SPEED-TIME AND VELOCITY-TIME GRAPHS**

These graphs show how speed or velocity changes over time:

**Speed-Time Graphs:**
- **x-axis**: Time
- **y-axis**: Speed (always positive)
- Shows magnitude of velocity only

**Velocity-Time Graphs:**
- **x-axis**: Time  
- **y-axis**: Velocity (can be positive or negative)
- Shows both magnitude and direction

**Key Features:**

\`\`\`velocity-time-features
{
  "showLegend": true,
  "title": "Velocity-Time Graph Key Features"
}
  \`\`\`

**Horizontal Line:**
- Constant speed/velocity
- Zero acceleration

**Sloping Line:**
- Constant acceleration
- Steeper slope = greater acceleration
- Upward slope = positive acceleration
- Downward slope = negative acceleration (deceleration)

**Curved Line:**
- Changing acceleration
- Non-uniform acceleration

**Calculating Acceleration:**
$\\text{Acceleration} = \\frac{\\text{Change in velocity}}{\\text{Time}} = \\frac{v - u}{t}$

Acceleration = gradient of velocity-time graph

**Calculating Distance:**
Distance = Area under speed-time or velocity-time graph

**For rectangles**: Distance = speed × time
**For triangles**: Distance = ½ × base × height
**For trapeziums**: Distance = ½ × (sum of parallel sides) × height

**Types of Motion:**

**Uniform Acceleration:**
- Straight sloping line
- Equations of motion apply:
  - v = u + at
  - s = ut + ½at²
  - v² = u² + 2as

**Variable Acceleration:**
- Curved line
- Acceleration changes with time


**Example Interpretation:**

\`\`\`velocity-time-example
{
  "showCalculations": false
}
\`\`\`



A velocity-time graph showing:
- 0-2s: Acceleration of 2.5 m/s² (velocity increases from 0 to 5 m/s)
- 2-4s: Constant velocity of 5 m/s (no acceleration)
- 4-6s: Deceleration of -2.5 m/s² (velocity decreases to 0 m/s)

**Key Observations:**
1. The acceleration values match the slope of the distance-time graph
2. The area under each segment corresponds to:
   - 0-2s: Triangle area = ½ × 2 × 5 = 5m (distance traveled)
   - 2-4s: Rectangle area = 2 × 5 = 10m
   - 4-6s: Triangle area = ½ × 2 × 5 = 5m
   - Total distance = 5 + 10 + 5 = 20m
3. Negative velocity would indicate opposite direction
  `,
        interactive: "velocity-time",
      },
      {
        title: "Displacement-Time Graphs",
        content: `**DISPLACEMENT-TIME GRAPHS**

Displacement-time graphs show position relative to a starting point:

**Key Differences from Distance-Time:**
- **Displacement**: Vector quantity (has direction)
- **Distance**: Scalar quantity (magnitude only)
- Displacement can be negative (opposite direction)

**Axes:**
- **x-axis**: Time
- **y-axis**: Displacement (positive and negative values)

**Key Features:**

\`\`\`displacement-features
\`\`\`

**Positive Displacement:**
- Above x-axis
- Object is ahead of starting position

**Negative Displacement:**
- Below x-axis  
- Object is behind starting position

**Zero Displacement:**
- On x-axis
- Object is at starting position

**Gradient Interpretation:**
- Gradient = velocity (not speed)
- Positive gradient = moving forward
- Negative gradient = moving backward
- Zero gradient = stationary

\`\`\`displacement-gradient
\`\`\`

**Curved Lines:**
- Show acceleration
- Changing velocity over time

**Common Patterns:**

**Forward and Back:**
- Curve goes positive then returns to zero
- Object moves away then returns to start

**Oscillation:**
- Sine or cosine-like curves
- Object moves back and forth
- Regular periodic motion

**Parabolic Motion:**
- Quadratic curves
- Constant acceleration
- Often seen in projectile motion

**Calculating Velocity:**
Velocity = gradient of displacement-time graph
$v = \\frac{\\Delta s}{\\Delta t}$

**Example:**

\`\`\`displacement-example
\`\`\`

A ball thrown upward:
- 0-2s: Curved line from (0,0) to (2,20) - upward motion, decreasing velocity
- 2-4s: Curved line from (2,20) to (4,0) - downward motion, increasing speed
- Maximum displacement = 20m at t = 2s
- Returns to starting position at t = 4s`,
        interactive: "displacement-time",
      },
    ],
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    question: "In which quadrant is the point (-3, 4) located?",
    options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
    correct: 1,
    explanation:
      "Point (-3, 4) has negative x-coordinate and positive y-coordinate, which places it in Quadrant II.",
  },
  {
    question:
      "Find the gradient of the line passing through points (2, 5) and (6, 13):",
    options: ["2", "3", "4", "8"],
    correct: 0,
    explanation: "Gradient = (y₂ - y₁)/(x₂ - x₁) = (13 - 5)/(6 - 2) = 8/4 = 2",
  },
  {
    question: "What is the y-intercept of the line y = 3x - 7?",
    options: ["3", "-3", "7", "-7"],
    correct: 3,
    explanation:
      "In the form y = mx + c, the y-intercept is c = -7. This is where the line crosses the y-axis.",
  },
  {
    question:
      "For the quadratic y = x² - 6x + 8, what is the x-coordinate of the vertex?",
    options: ["2", "3", "4", "6"],
    correct: 1,
    explanation: "x-coordinate of vertex = -b/(2a) = -(-6)/(2×1) = 6/2 = 3",
  },
  {
    question: "Which direction does the parabola y = -2x² + 4x - 1 open?",
    options: ["Upward", "Downward", "Left", "Right"],
    correct: 1,
    explanation: "Since a = -2 < 0, the parabola opens downward (∩-shape).",
  },
  {
    question: "If f(x) = 3x - 1, what is f⁻¹(x)?",
    options: ["(x + 1)/3", "(x - 1)/3", "3x + 1", "1/(3x - 1)"],
    correct: 0,
    explanation:
      "Let y = 3x - 1, swap variables: x = 3y - 1, solve for y: y = (x + 1)/3, so f⁻¹(x) = (x + 1)/3",
  },
  {
    question:
      "On a distance-time graph, what does a horizontal line represent?",
    options: [
      "Increasing speed",
      "Decreasing speed",
      "Constant speed",
      "Object at rest",
    ],
    correct: 3,
    explanation:
      "A horizontal line on a distance-time graph means no change in distance over time, so the object is at rest (speed = 0).",
  },
  {
    question: "What does the gradient of a velocity-time graph represent?",
    options: ["Distance", "Speed", "Acceleration", "Displacement"],
    correct: 2,
    explanation:
      "The gradient (slope) of a velocity-time graph represents acceleration, which is the rate of change of velocity.",
  },
  {
    question: "How do you find the distance traveled from a speed-time graph?",
    options: [
      "Find the gradient",
      "Find the y-intercept",
      "Find the area under the curve",
      "Find the x-intercept",
    ],
    correct: 2,
    explanation:
      "Distance traveled equals the area under the speed-time graph. This can be calculated using geometric shapes.",
  },
  {
    question:
      "On a displacement-time graph, what does a negative gradient indicate?",
    options: ["Moving forward", "Moving backward", "At rest", "Accelerating"],
    correct: 1,
    explanation:
      "A negative gradient on a displacement-time graph means negative velocity, indicating the object is moving backward (toward the starting point).",
  },
];
