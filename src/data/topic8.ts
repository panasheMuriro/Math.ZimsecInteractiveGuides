import { Section, QuizQuestion } from "../types";

export const sections: Section[] = [
  {
    title: "Points, Lines, and Angles",
    icon: "📐",
    content: `Points, lines, and angles form the fundamental building blocks of geometry, providing the foundation for understanding more complex geometric relationships and calculations.`,
    subsections: [
      {
        title: "Basic Definitions and Classifications",
        content: `**POINTS, LINES, AND ANGLES**

**Points:**
- A point has no dimensions (length, width, or height)
- Represented by a dot and labeled with capital letters
- Example: Point $A$, Point $B$

**Lines:**
- Extends infinitely in both directions
- Has no thickness, only length
- Notation: Line $AB$ or $\\overline{AB}$
- **Line segment:** Part of a line between two points
- **Ray:** Part of a line starting at one point and extending infinitely

**Angle Types by Measure:**
- **Acute angle:** $0° < \\theta < 90°$
- **Right angle:** $\\theta = 90°$
- **Obtuse angle:** $90° < \\theta < 180°$
- **Straight angle:** $\\theta = 180°$
- **Reflex angle:** $180° < \\theta < 360°$
- **Complete angle:** $\\theta = 360°$`,
        interactive: "angle-types",
      },
      {
        title: "Measuring Angles with Protractors",
        content: `**PROTRACTOR USAGE**

**Steps for Measuring:**
1. Place the center point of the protractor on the vertex of the angle
2. Align one arm of the angle with the zero line of the protractor
3. Read the measurement where the second arm crosses the scale
4. Choose the correct scale (inner or outer) based on angle orientation

**Key Tips:**
- Always start from $0°$ on the appropriate scale
- For angles greater than $180°$, measure the reflex angle: $360° - \\text{acute measure}$
- Ensure the protractor is properly aligned with the vertex

**Common Errors:**
- Reading from wrong scale
- Misaligning the vertex
- Confusing acute and reflex measurements`,
        interactive: "protractor-usage",
      },
      {
        title: "Angles on a Straight Line",
        content: `**ANGLES ON A STRAIGHT LINE**

**Fundamental Rule:**
Angles on a straight line sum to $180°$

**Mathematical Expression:**
If angles $A$, $B$, $C$ are on a straight line: 
$A + B + C = 180°$

\`\`\`svg-viewer
type: straight-line
\`\`\`

**Linear Pair:**
Two adjacent angles forming a straight line are called a linear pair
- $\\angle AOB + \\angle BOC = 180°$ (where points are collinear)

\`\`\`svg-viewer
type: collinear-angles
\`\`\`

**Applications:**
- Finding unknown angles when others are known
- Proving geometric relationships
- Solving angle problems in polygons

**Example:**
If $\\angle A = 65°$ and $\\angle B = 40°$ are on a straight line with $\\angle C$:
$\\angle C = 180° - 65° - 40° = 75°$

\`\`\`svg-viewer
type: line-angles-examples
\`\`\`
`,
        interactive: "straight-line-angles",
      },
      {
        title: "Angles Around a Point",
        content: `**ANGLES AROUND A POINT**

**Fundamental Rule:**
All angles around a point sum to $360°$

**Mathematical Expression:**
$\\angle_1 + \\angle_2 + \\angle_3 + ... + \\angle_n = 360°$

\`\`\`svg-viewer
type: angles-around-point
\`\`\`

**Vertically Opposite Angles:**
When two lines intersect, they form four angles:
- Opposite angles are equal: $\\angle a = \\angle c$, $\\angle b = \\angle d$
- Adjacent angles are supplementary: $\\angle a + \\angle b = 180°$

\`\`\`svg-viewer
type: vertically-opposite-angles
\`\`\`

**Applications:**
- Clock problems (each hour = $30°$)
- Rotational problems
- Finding unknown angles in intersecting lines

**Example:**
If four angles around a point are $85°$, $120°$, $90°$, and $x°$:
$x = 360° - 85° - 120° - 90° = 65°$`,
        interactive: "angles-around-point",
      },
      {
        title: "Parallel Lines and Transversals",
        content: `**PARALLEL LINES WITH TRANSVERSALS**

When a transversal cuts two parallel lines, it creates eight angles with special relationships:

**Corresponding Angles:**
- Same relative position at each intersection
- Always equal: $\\angle_1 = \\angle_5$, $\\angle_2 = \\angle_6$

**Alternate Interior Angles:**
- On opposite sides of transversal, between parallel lines
- Always equal: $\\angle_3 = \\angle_6$, $\\angle_4 = \\angle_5$

**Alternate Exterior Angles:**
- On opposite sides of transversal, outside parallel lines  
- Always equal: $\\angle_1 = \\angle_8$, $\\angle_2 = \\angle_7$

**Co-interior Angles (Same-side Interior):**
- On same side of transversal, between parallel lines
- Always supplementary: $\\angle_3 + \\angle_5 = 180°$, $\\angle_4 + \\angle_6 = 180°$`,
        interactive: "parallel-lines",
      },
      {
        title: "Angles of Elevation and Depression",
        content: `**ELEVATION AND DEPRESSION ANGLES**

**Angle of Elevation:**
- Measured upward from horizontal to line of sight
- Always between $0°$ and $90°$
- Used when looking up at an object

\`\`\`svg-viewer
type: elevation
\`\`\`

**Angle of Depression:**
- Measured downward from horizontal to line of sight  
- Always between $0°$ and $90°$
- Used when looking down at an object

\`\`\`svg-viewer
type: depression
\`\`\`

**Key Relationships:**
- Angle of elevation from point A to B = Angle of depression from point B to A
- Both measured from horizontal reference line

**Applications:**
- Height calculations using trigonometry
- Navigation and surveying
- Architecture and engineering

**Example:**
From a $20m$ tower, the angle of depression to a car is $30°$
Distance to car: $d = \\frac{20}{\\tan(30°)} = 20\\sqrt{3} \\approx 34.6m$`,
        interactive: "elevation-depression",
      },
    ],
  },
  {
    title: "Bearings",
    icon: "🧭",
    content: `Bearings provide a systematic way to describe directions and navigate using angles, essential for map reading, navigation, and surveying.`,
    subsections: [
      {
        title: "Cardinal and Intermediate Directions",
        content: `**CARDINAL POINTS**

**Primary Directions:**
- **North (N):** $0°$ or $360°$
- **East (E):** $90°$
- **South (S):** $180°$  
- **West (W):** $270°$

**Intermediate Directions:**
- **Northeast (NE):** $45°$
- **Southeast (SE):** $135°$
- **Southwest (SW):** $225°$
- **Northwest (NW):** $315°$

**Further Subdivisions:**
- **NNE:** $22.5°$ (North-Northeast)
- **ENE:** $67.5°$ (East-Northeast)
- **ESE:** $112.5°$ (East-Southeast)
- **SSE:** $157.5°$ (South-Southeast)
- And so on for all 16 compass points

**Memory Aid:**
"Never Eat Soggy Waffles" (N-E-S-W clockwise)`,
        interactive: "cardinal-directions",
      },
      {
        title: "Compass Bearings",
        content: `**COMPASS BEARING SYSTEM**

**Format:** Direction from North or South, then angle, then toward East or West

**Examples:**
- $N30°E$: Start from North, turn $30°$ toward East
- $S45°W$: Start from South, turn $45°$ toward West  
- $N60°W$: Start from North, turn $60°$ toward West

**Key Rules:**
- Always start from N or S (never E or W)
- Angle is always ≤ $90°$
- End direction is always E or W

**Converting to Three-Figure Bearings:**
- $N30°E = 030°$
- $S45°W = 225°$  
- $N60°W = 300°$

**Conversion Formulas:**
- From N toward E: Bearing = angle
- From N toward W: Bearing = $360° - \\text{angle}$
- From S toward E: Bearing = $180° - \\text{angle}$
- From S toward W: Bearing = $180° + \\text{angle}$`,
        interactive: "compass-bearings",
      },
      {
        title: "Three-Figure Bearings",
        content: `**THREE-FIGURE BEARING SYSTEM**

**Definition:**
Angle measured clockwise from North, expressed as three digits (000° to 360°)

**Format Rules:**
- Always use three digits (e.g., 045°, not 45°)
- Measured clockwise from North
- Range: 000° to 360° (or 359°)

**Examples:**
- Due North: 000°
- Due East: 090°
- Due South: 180°
- Due West: 270°
- Northeast: 045°

**Back Bearings:**
If bearing from A to B is $\\theta$:
- Back bearing from B to A = $\\theta + 180°$ (if $\\theta < 180°$)
- Back bearing from B to A = $\\theta - 180°$ (if $\\theta > 180°$)

**Example:**
Bearing from A to B = 065°
Back bearing from B to A = 065° + 180° = 245°`,
        interactive: "three-figure-bearings",
      },
      {
        title: "Solving Bearing Problems",
        content: `**BEARING PROBLEM-SOLVING STRATEGY**

**Step 1: Draw a Diagram**
- Mark North direction at each point
- Draw the path or triangle
- Label all known angles and distances

**Step 2: Identify Given Information**
- Starting point and bearing
- Distances traveled
- Final positions

**Step 3: Apply Bearing Rules**
- Use angle relationships in triangles
- Apply trigonometry for distances
- Convert between bearing systems if needed

**Common Problem Types:**

**Type 1: Finding Final Position**
Given: Start point, bearing, distance
Find: End coordinates or new bearing

**Type 2: Navigation Problems**
Given: Multiple legs of journey with bearings
Find: Final position or direct route home

**Example Problem:**
A ship sails 50km on bearing 060°, then 30km on bearing 150°. Find the distance and bearing of the direct route home.`,
        interactive: "bearing-problems",
      },
    ],
  },
  {
    title: "Polygons and Circles",
    icon: "⬢",
    content: `Polygons and circles are fundamental geometric shapes with specific properties and relationships that form the basis for advanced geometric calculations.`,
    subsections: [
      {
        title: "Polygon Classification",
        content: `**POLYGON CLASSIFICATION**

**By Number of Sides:**
- **Triangle:** 3 sides
- **Quadrilateral:** 4 sides  
- **Pentagon:** 5 sides
- **Hexagon:** 6 sides
- **Heptagon:** 7 sides
- **Octagon:** 8 sides
- **Nonagon:** 9 sides
- **Decagon:** 10 sides

**By Regularity:**
- **Regular polygon:** All sides equal, all angles equal
- **Irregular polygon:** Sides or angles are not all equal

**By Convexity:**
- **Convex:** All interior angles < 180°
- **Concave:** At least one interior angle > 180°

**Special Properties:**
- Minimum polygon: Triangle (3 sides)
- Sum of exterior angles = 360° (for any polygon)`,
        interactive: "polygon-classification",
      },
      {
        title: "Triangle Properties",
        content: `**TRIANGLE CLASSIFICATION**

**By Sides:**
- **Equilateral:** All sides equal ($a = b = c$)
  - All angles = 60°
  - All sides equal length
  
- **Isosceles:** Two sides equal ($a = b \\neq c$)  
  - Two base angles equal
  - Line of symmetry through apex
  
- **Scalene:** All sides different ($a \\neq b \\neq c$)
  - All angles different
  - No lines of symmetry

**By Angles:**
- **Acute triangle:** All angles < 90°
- **Right triangle:** One angle = 90°
- **Obtuse triangle:** One angle > 90°

**Fundamental Properties:**
- Sum of angles = 180°
- Exterior angle = sum of opposite interior angles
- Triangle inequality: $a + b > c$ for any triangle`,
        interactive: "triangle-properties",
      },
      {
        title: "Quadrilateral Properties",
        content: `**SPECIAL QUADRILATERALS**

**Square:**
- All sides equal: $a = b = c = d$
- All angles = 90°
- Diagonals equal, perpendicular, bisect each other
- 4 lines of symmetry, rotational symmetry order 4

**Rectangle:**
- Opposite sides equal: $a = c$, $b = d$
- All angles = 90°
- Diagonals equal and bisect each other
- 2 lines of symmetry

**Rhombus:**
- All sides equal: $a = b = c = d$
- Opposite angles equal
- Diagonals perpendicular and bisect each other
- 2 lines of symmetry

**Parallelogram:**
- Opposite sides equal and parallel
- Opposite angles equal
- Diagonals bisect each other
- No lines of symmetry

**Trapezium (Trapezoid):**
- One pair of parallel sides
- May have line of symmetry (isosceles trapezium)`,
        interactive: "quadrilateral-properties",
      },
      {
        title: "Polygon Angle Calculations",
        content: `**POLYGON ANGLE FORMULAS**

**Interior Angles:**
- **Sum of interior angles:** $(n-2) \\times 180°$
- **Each interior angle (regular polygon):** $\\frac{(n-2) \\times 180°}{n}$

**Exterior Angles:**
- **Sum of exterior angles:** Always $360°$ (any polygon)
- **Each exterior angle (regular polygon):** $\\frac{360°}{n}$

**Key Relationship:**
Interior angle + Exterior angle = $180°$ (linear pair)

**Examples:**

**Pentagon ($n = 5$):**
- Sum of interior angles: $(5-2) \\times 180° = 540°$
- Each interior angle: $\\frac{540°}{5} = 108°$
- Each exterior angle: $\\frac{360°}{5} = 72°$

**Octagon ($n = 8$):**
- Sum of interior angles: $(8-2) \\times 180° = 1080°$
- Each interior angle: $\\frac{1080°}{8} = 135°$
- Each exterior angle: $\\frac{360°}{8} = 45°$`,
        interactive: "polygon-angles",
      },
      {
        title: "Circle Theorems",
        content: `**FUNDAMENTAL CIRCLE THEOREMS**

**Theorem 1: Angle at Center vs Circumference**
- Angle at center = 2 × angle at circumference (same arc)
- $\\angle AOB = 2 \\times \\angle ACB$

**Theorem 2: Angles in Same Segment**
- Angles subtended by same arc are equal
- All angles standing on same arc from circumference are equal

**Theorem 3: Angle in Semicircle**
- Angle in semicircle = 90°
- Any triangle inscribed in semicircle is right-angled

**Theorem 4: Cyclic Quadrilaterals**
- Opposite angles sum to 180°
- $\\angle A + \\angle C = 180°$, $\\angle B + \\angle D = 180°$

**Theorem 5: Tangent-Radius**
- Tangent perpendicular to radius at point of contact
- $\\angle OTP = 90°$ (O = center, T = point of tangency, P = point on tangent)

**Theorem 6: Alternate Segment**
- Angle between tangent and chord = angle in alternate segment
- $\\angle PTA = \\angle ABC$ (alternate segment)`,
        interactive: "circle-theorems",
      },
    ],
  },
  {
    title: "Similarity and Congruency",
    icon: "↔️",
    content: `Similarity and congruency describe relationships between geometric figures, fundamental for understanding proportions, scaling, and geometric proofs.`,
    subsections: [
      {
        title: "Definitions and Differences",
        content: `**SIMILARITY vs CONGRUENCY**

**Similar Figures:**
- Same shape, different size
- Corresponding angles equal
- Corresponding sides proportional
- Symbol: $\\sim$ (similar to)

**Congruent Figures:**
- Same shape and same size
- Corresponding angles equal  
- Corresponding sides equal
- Symbol: $\\cong$ (congruent to)

**Key Differences:**
- Congruent → Similar (always true)
- Similar → Congruent (only if scale factor = 1)

**Scale Factor:**
$k = \\frac{\\text{length in image}}{\\text{corresponding length in object}}$

**Properties:**
- If $k = 1$: figures are congruent
- If $k > 1$: enlargement
- If $0 < k < 1$: reduction
- If $k < 0$: enlargement/reduction with rotation`,
        interactive: "similarity-congruency",
      },
      {
        title: "Triangle Congruence Tests",
        content: `**TRIANGLE CONGRUENCE CONDITIONS**

**SSS (Side-Side-Side):**
- All three corresponding sides equal
- $AB = DE$, $BC = EF$, $AC = DF$
- Triangles are congruent

**SAS (Side-Angle-Side):**
- Two sides and included angle equal
- $AB = DE$, $\\angle B = \\angle E$, $BC = EF$
- Triangles are congruent

**ASA (Angle-Side-Angle):**
- Two angles and included side equal
- $\\angle A = \\angle D$, $AB = DE$, $\\angle B = \\angle E$
- Triangles are congruent

**RHS (Right angle-Hypotenuse-Side):**
- Right angle, hypotenuse, and one other side equal
- Only applies to right-angled triangles
- $\\angle C = \\angle F = 90°$, $AB = DE$, $AC = DF$

**Note:** AAA (three angles) proves similarity, not congruence
**Note:** SSA is not a valid congruence test`,
        interactive: "congruence-tests",
      },
      {
        title: "Scale Factors and Ratios",
        content: `**SCALE FACTOR CALCULATIONS**

**Linear Scale Factor:**
$k = \\frac{\\text{corresponding length in similar figure}}{\\text{original length}}$

**Area Scale Factor:**
If linear scale factor = $k$, then area scale factor = $k^2$

**Volume Scale Factor:**
If linear scale factor = $k$, then volume scale factor = $k^3$

**Applications:**

**Length Scaling:**
If $k = 3$, all lengths are multiplied by 3

**Area Scaling:**  
If $k = 3$, area is multiplied by $3^2 = 9$

**Volume Scaling:**
If $k = 3$, volume is multiplied by $3^3 = 27$

**Example:**
Two similar cylinders with radius ratio 2:3
- Linear scale factor: $k = \\frac{3}{2} = 1.5$
- Area ratio: $k^2 = (1.5)^2 = 2.25$  
- Volume ratio: $k^3 = (1.5)^3 = 3.375$`,
        interactive: "scale-factors",
      },
      {
        title: "Similar Shapes Problems",
        content: `**PROBLEM-SOLVING WITH SIMILAR SHAPES**

**Step 1: Identify Similar Shapes**
- Check if angles are equal
- Check if sides are proportional
- Establish correspondence

**Step 2: Find Scale Factor**
$k = \\frac{\\text{known length in image}}{\\text{corresponding length in object}}$

**Step 3: Apply Scale Factor**
- For lengths: multiply by $k$
- For areas: multiply by $k^2$  
- For volumes: multiply by $k^3$

**Common Problem Types:**

**Type 1: Finding Unknown Lengths**
Use proportion: $\\frac{a}{a'} = \\frac{b}{b'} = k$

**Type 2: Model and Reality**
Scale models of buildings, maps, etc.

**Type 3: Area and Volume Ratios**
Given linear measurements, find area/volume ratios

**Example:**
Two similar triangles with areas 16 cm² and 36 cm²
Find the ratio of corresponding sides:
$\\frac{\\text{Area}_1}{\\text{Area}_2} = \\frac{16}{36} = \\frac{4}{9}$
$\\frac{\\text{Side}_1}{\\text{Side}_2} = \\sqrt{\\frac{4}{9}} = \\frac{2}{3}$`,
        interactive: "similar-shapes-problems",
      },
    ],
  },
  {
    title: "Constructions and Loci",
    icon: "📏",
    content: `Geometric constructions using only compass and straightedge, along with loci (paths of points satisfying conditions), form essential practical geometry skills.`,
    subsections: [
      {
        title: "Basic Constructions",
        content: `**FUNDAMENTAL CONSTRUCTIONS**

**Line Constructions:**
- **Perpendicular to line through point:** Use compass to create equal arcs
- **Parallel line:** Copy angle method or perpendicular method
- **Line segment of given length:** Use compass measurement

**Angle Constructions:**
- **Copy an angle:** Use compass to transfer arc measurements
- **Bisect an angle:** Create equal arcs from vertex and connect intersection
- **Construct 60°:** Equilateral triangle method
- **Construct 30°:** Bisect 60° angle
- **Construct 90°:** Perpendicular construction

**Tools Required:**
- Compass (for arcs and circles)
- Straightedge/ruler (for straight lines only)
- Pencil for marking
- No measuring allowed in pure constructions`,
        interactive: "basic-constructions",
      },
      {
        title: "Triangle and Quadrilateral Constructions",
        content: `**TRIANGLE CONSTRUCTIONS**

**Given Three Sides (SSS):**
1. Draw base side
2. Use compass to mark other two sides from endpoints
3. Connect intersection point

**Given Two Sides and Included Angle (SAS):**
1. Draw one side
2. Construct the given angle at one end
3. Mark second side length on angle line
4. Complete triangle

**Given Two Angles and Included Side (ASA):**
1. Draw the given side
2. Construct both angles at endpoints  
3. Extend angle lines until they meet

**QUADRILATERAL CONSTRUCTIONS**

**Rectangle:** Given length and width
**Square:** Given side length  
**Rhombus:** Given side length and one angle
**Parallelogram:** Given two adjacent sides and included angle

**Construction Strategy:**
1. Start with longest side as base
2. Use angle and side measurements systematically
3. Check construction with compass measurements`,
        interactive: "shape-constructions",
      },
      {
        title: "Bisectors and Perpendiculars",
        content: `**BISECTOR CONSTRUCTIONS**

**Perpendicular Bisector of Line Segment:**
1. Set compass to more than half the segment length
2. Draw arcs above and below from both endpoints
3. Connect intersection points
4. Result: perpendicular bisector

**Properties:**
- Every point on perpendicular bisector is equidistant from endpoints
- Bisects the line segment at 90°

**Angle Bisector:**
1. Draw equal arcs from vertex of angle
2. From arc intersections, draw equal arcs inside angle
3. Connect vertex to arc intersection
4. Result: angle bisector

**Properties:**
- Divides angle into two equal parts
- Every point on angle bisector is equidistant from the two sides

**Applications:**
- Finding center of circles
- Creating equal angles
- Geometric proofs`,
        interactive: "bisectors",
      },
      {
        title: "Loci - Equidistant from Fixed Point",
        content: `**LOCUS: EQUIDISTANT FROM A POINT**

**Definition:**
The locus of points equidistant from a fixed point is a circle

**Construction:**
1. Mark the fixed point as center
2. Set compass to the required distance  
3. Draw complete circle
4. All points on circle are equidistant from center

**Mathematical Description:**
If fixed point is $A$ and distance is $r$:
Locus = $\\{P : |PA| = r\\}$

**Applications:**
- Radio signal coverage areas
- Blast radius calculations
- Circular boundaries in sports

**Variations:**
- **Less than distance $r$:** Interior of circle
- **Greater than distance $r$:** Exterior of circle
- **Between distances $r_1$ and $r_2$:** Annulus (ring shape)

**Example:**
Find locus of points 5 cm from point $A$
Answer: Circle with center $A$ and radius 5 cm`,
        interactive: "locus-point",
      },
      {
        title: "Loci - Equidistant from Two Points",
        content: `**LOCUS: EQUIDISTANT FROM TWO POINTS**

**Definition:**
The locus of points equidistant from two fixed points is the perpendicular bisector of the line segment joining them

**Construction:**
1. Draw line segment connecting the two points
2. Construct perpendicular bisector using compass method
3. Extend the perpendicular bisector in both directions
4. Every point on this line is equidistant from both fixed points

**Mathematical Description:**
If fixed points are $A$ and $B$:
Locus = $\\{P : |PA| = |PB|\\}$

**Proof Concept:**
Any point $P$ on perpendicular bisector forms two congruent right triangles with the endpoints, proving equal distances

**Applications:**
- Boundary between two territories  
- Optimal location problems (equidistant from two cities)
- Geometric constructions

**Example:**
Points $A$ and $B$ are 8 cm apart. Find locus of points equidistant from both.
Answer: Perpendicular bisector of segment $AB$`,
        interactive: "locus-two-points",
      },
      {
        title: "Loci - Equidistant from a Line and Other Loci",
        content: `**LOCUS: EQUIDISTANT FROM A LINE**

**Definition:**
The locus of points at a fixed distance from a straight line consists of two parallel lines

**Construction:**
1. Draw the original line
2. Construct perpendiculars at several points
3. Mark the required distance along each perpendicular  
4. Connect these points to form two parallel lines
5. One line on each side of the original

**LOCUS: EQUIDISTANT FROM TWO INTERSECTING LINES**

**Definition:**
The locus of points equidistant from two intersecting lines consists of the two angle bisectors

**Construction:**
1. Bisect each of the four angles formed by intersecting lines
2. Result: Two perpendicular lines through intersection point
3. Each bisector contains points equidistant from the two original lines

**Applications:**
- Road construction (parallel to existing road)
- Property boundaries  
- Navigation channels
- Angle bisector properties in triangles

**Example:**
Find locus of points 3 cm from line $l$
Answer: Two lines parallel to $l$, each 3 cm away on opposite sides`,
        interactive: "locus-lines",
      },
      {
        title: "Compound Loci Problems",
        content: `**SOLVING COMPOUND LOCI PROBLEMS**

**Definition:**
Problems requiring points to satisfy two or more locus conditions simultaneously

**Solution Method:**
1. Draw each locus separately
2. Find intersection points/regions
3. Intersection gives final answer

**Common Combinations:**

**Type 1: Two Distance Conditions**
- Distance $r_1$ from point $A$ AND distance $r_2$ from point $B$
- Solution: Intersection of two circles

**Type 2: Distance and Line Conditions** 
- Distance $r$ from point $A$ AND distance $d$ from line $l$
- Solution: Intersection of circle and parallel lines

**Type 3: Angle and Distance Conditions**
- On angle bisector AND distance $r$ from vertex
- Solution: Points on angle bisector at specified distance

**Problem-Solving Steps:**
1. Read conditions carefully
2. Identify each locus type  
3. Construct each locus accurately
4. Mark intersection points clearly
5. Verify solution satisfies all conditions

**Example:**
Find points 4 cm from point $A$ and 3 cm from line $l$
Solution: Intersections of circle (center $A$, radius 4 cm) with two lines parallel to $l$ at distance 3 cm`,
        interactive: "compound-loci",
      },
    ],
  },
  {
    title: "Symmetry and Transformations",
    icon: "🔄",
    content: `Symmetry and transformations describe how shapes can be moved, flipped, or rotated while maintaining their essential properties.`,
    subsections: [
      {
        title: "Line Symmetry (Reflection)",
        content: `**LINE SYMMETRY PROPERTIES**

**Definition:**
A shape has line symmetry if it can be folded along a line so that both halves match exactly

**Line of Symmetry (Mirror Line):**
- Axis along which reflection occurs
- Every point on one side has corresponding point on other side
- Corresponding points are equidistant from mirror line

**Identifying Lines of Symmetry:**
1. Fold test: Can shape be folded to match itself?
2. Mirror test: Does mirror image complete the shape?
3. Perpendicular distances must be equal

**Examples:**

**Regular Polygons:**
- **Equilateral triangle:** 3 lines of symmetry
- **Square:** 4 lines of symmetry  
- **Regular pentagon:** 5 lines of symmetry
- **Regular n-gon:** n lines of symmetry

**Other Shapes:**
- **Rectangle:** 2 lines of symmetry
- **Rhombus:** 2 lines of symmetry
- **Isosceles triangle:** 1 line of symmetry
- **Circle:** Infinite lines of symmetry`,
        interactive: "line-symmetry",
      },
      {
        title: "Rotational Symmetry",
        content: `**ROTATIONAL SYMMETRY PROPERTIES**

**Definition:**
A shape has rotational symmetry if it looks identical after rotation through an angle less than 360°

**Order of Rotational Symmetry:**
Number of positions where shape looks identical during one complete rotation

**Angle of Rotation:**
$\\text{Angle} = \\frac{360°}{\\text{order of symmetry}}$

**Examples:**

**Regular Polygons:**
- **Equilateral triangle:** Order 3, angle = 120°
- **Square:** Order 4, angle = 90°`,
        interactive: "rotational-symmetry",
      },
    ],
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    question:
      "If two interior angles of a triangle are $45°$ and $60°$, what is the third angle?",
    options: ["$65°$", "$75°$", "$85°$", "$95°$"],
    correct: 1,
    explanation:
      "Sum of angles in a triangle is $180°$. $180° - 45° - 60° = 75°$.",
  },
  {
    question:
      "What is the bearing of West-South-West (WSW) in three-figure notation?",
    options: ["$202.5°$", "$225°$", "$247.5°$", "$270°$"],
    correct: 2,
    explanation:
      "WSW is $22.5°$ west of south, which is $180° + 67.5° = 247.5°$.",
  },
  {
    question: "In a regular octagon, what is each exterior angle?",
    options: ["$30°$", "$45°$", "$60°$", "$135°$"],
    correct: 1,
    explanation: "Exterior angle = $\\frac{360°}{8} = 45°$.",
  },
  // Add more questions as needed...
];
