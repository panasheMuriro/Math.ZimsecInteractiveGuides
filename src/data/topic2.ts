import {Section, QuizQuestion} from "../types"

export const sections: Section[]=[


{
 "title": "Sets and Set Notation",
 "icon": "🧮",
 "content": `Sets are fundamental building blocks in mathematics that help organize and categorize objects.`,
 "subsections": [
   {
     "title": "Sets and Set Notation",
     "content": `**SETS**
A collection of distinct objects called elements:
- Represented with curly braces: $A = \\{1, 2, 3\\}$
- Order doesn't matter: $\\{1, 2, 3\\} = \\{3, 2, 1\\}$
- No duplicates: $\\{1, 1, 2\\} = \\{1, 2\\}$

**NOTATION**
- $\\in$ means "is an element of": $2 \\in \\{1, 2, 3\\}$
- $\\notin$ means "is not an element of": $4 \\notin \\{1, 2, 3\\}$
- $\\emptyset$ or $\\{\\}$ represents the empty set
- $|A|$ or $n(A)$ represents the cardinality (number of elements) of set A
- Capital letters typically denote sets: A, B, C, U
- Lowercase letters typically denote elements: a, b, c, x, y`,
     "interactive": "set-basics"
   },
   {
     "title": "Types of Sets",
     "content": `**TYPES OF SETS**

1. **Universal Set ($\\mathbb{U}$)**: Contains all possible elements under consideration
  - Example: For number sets, $\\mathbb{U} = \\{\\text{all real numbers}\\}$

2. **Finite Set**: Has countable number of elements
  - Example: $A = \\{a, b, c\\}$, $|A| = 3$

3. **Infinite Set**: Has unlimited elements
  - Example: $\\mathbb{N} = \\{1, 2, 3, \\ldots\\}$

4. **Null/Empty Set ($\\emptyset$ or $\\{\\}$)**: Contains no elements
  - $|\\emptyset| = 0$

5. **Equal Sets**: Two sets with exactly the same elements
  - $A = B$ if every element of A is in B and vice versa

6. **Subset ($A \\subseteq B$)**: All elements of A are in B
  - Example: $\\{1, 2\\} \\subseteq \\{1, 2, 3\\}$
  - Every set is a subset of itself: $A \\subseteq A$

7. **Proper Subset ($A \\subset B$)**: A is subset but $A \\neq B$
  - $A \\subset B$ means $A \\subseteq B$ and $A \\neq B$`,
     "interactive": "set-types"
   },
   {
     "title": "Union and Intersection of Sets",
     "content": `**UNION OF SETS ($A \\cup B$)**
- Contains all elements that are in A or B or both
- Example: If $A = \\{1, 2, 3\\}$ and $B = \\{3, 4, 5\\}$, then $A \\cup B = \\{1, 2, 3, 4, 5\\}$
- Properties: Commutative, Associative, Identity with $\\emptyset$

**INTERSECTION OF SETS ($A \\cap B$)**
- Contains only elements that are in both A and B
- Example: If $A = \\{1, 2, 3\\}$ and $B = \\{3, 4, 5\\}$, then $A \\cap B = \\{3\\}$
- If $A \\cap B = \\emptyset$, sets are called disjoint
- Properties: Commutative, Associative, Identity with Universal set

**OTHER SET OPERATIONS**
- **Complement ($A'$ or $A^c$)**: Elements in Universal set but not in A
- **Difference ($A \\setminus B$)**: Elements in A but not in B
- **Symmetric Difference ($A \\triangle B$)**: Elements in A or B but not in both`,
     "interactive": "set-operations"
   },
   {
     "title": "Set Builder Notation",
     "content": `**SET BUILDER NOTATION**
A concise way to define sets using properties:
- General form: $\\{x \\mid x \\text{ has property } P\\}$
- Read as "the set of all x such that x has property P"
- Alternative notation: $\\{x : x \\text{ has property } P\\}$

**Components:**
- **Variable**: The element being described (usually x)
- **Vertical bar or colon**: "such that"
- **Condition**: The property that elements must satisfy

**Examples:**
1. $\\{x \\mid x \\text{ is an even integer}\\} = \\{\\ldots, -4, -2, 0, 2, 4, \\ldots\\}$
2. $\\{x \\mid x > 0 \\text{ and } x < 10\\}$ (numbers between 0 and 10)
3. $\\{x \\in \\mathbb{R} \\mid x^2 < 4\\} = \\{x \\mid -2 < x < 2\\}$
4. $\\{x \\mid x = 2n, n \\in \\mathbb{Z}\\}$ (even integers)

**Converting between notations:**
- Roster method: $\\{2, 4, 6, 8\\}$
- Set builder: $\\{x \\mid x = 2n, n \\in \\{1, 2, 3, 4\\}\\}$`,
     "interactive": "set-builder"
   }
 ]
},
{
 "title": "Venn Diagrams",
 "icon": "⭕",
 "content": `Venn diagrams are visual representations of sets and their relationships using overlapping shapes.`,
 "subsections": [
   {
     "title": "Introduction to Venn Diagrams",
     "content": `**WHAT ARE VENN DIAGRAMS?**
Visual representations of sets using geometric shapes (usually circles) within a rectangle representing the universal set.

**Key Components:**
- **Rectangle**: Represents the universal set (U)
- **Circles/Ovals**: Represent individual sets
- **Overlapping regions**: Show intersections between sets
- **Non-overlapping regions**: Show elements unique to each set

**Benefits:**
- Makes abstract set relationships concrete and visual
- Helps solve complex problems systematically
- Useful for organizing information and data analysis
- Essential tool for probability and logic problems`,
     "interactive": "venn-intro"
   },
   {
     "title": "Venn Diagrams with Two Subsets",
     "content": `**VENN DIAGRAMS WITH TWO SETS**
Two overlapping circles within a rectangle (universal set):

**Four distinct regions:**
1. **Only A**: Elements in A but not in B: $\\\\$ $A \\setminus B$
2. **Only B**: Elements in B but not in A: $B \\setminus A$
3. **Both A and B**: Elements in both sets: $A \\cap B$
4. **Neither A nor B**: Elements in universal set but not in A or B: $(A \\cup B)'$

**Example Problem:**
In a class of 30 students: 18 study Math, 15 study Science, 8 study both.
- Students studying only Math: $18 - 8 = 10$
- Students studying only Science: $15 - 8 = 7$
- Students studying both: $8$
- Students studying neither: $30 - (10 + 8 + 7) = 5$`,
     "interactive": "venn-two-sets"
   },
   {
     "title": "Venn Diagrams with Three Subsets",
     "content": `**VENN DIAGRAMS WITH THREE SETS**
Three overlapping circles representing sets A, B, and C within a universal set:

**Eight distinct regions:**
1. **Only A**: $A \\setminus (B \\cup C)$
2. **Only B**: $B \\setminus (A \\cup C)$
3. **Only C**: $C \\setminus (A \\cup B)$
4. **A and B only**: $(A \\cap B) \\setminus C$
5. **A and C only**: $(A \\cap C) \\setminus B$
6. **B and C only**: $(B \\cap C) \\setminus A$
7. **All three sets**: $A \\cap B \\cap C$
8. **None of the sets**: $(A \\cup B \\cup C)'$

**Complex Operations:**
- $A \\cup B \\cup C$: Elements in at least one set (regions 1-7)
- $(A \\cap B) \\cup (A \\cap C) \\cup (B \\cap C)$: Elements in at least two sets (regions 4-7)
- $A \\cap (B \\cup C)$: Elements in A and in either B or C (regions 4, 5, 7)

**Problem-solving strategy:**
1. Start with the center (intersection of all three sets)
2. Work outward to pairwise intersections
3. Fill in the "only" regions for each set
4. Calculate the "none" region
5. Verify all regions sum to the universal set total`,
     "interactive": "venn-three-sets"
   },
   {
     "title": "Solving Problems with Venn Diagrams",
     "content": `**SYSTEMATIC PROBLEM-SOLVING APPROACH**

**Step 1: Read and Understand**
- Identify what each set represents
- Determine the universal set
- Note any given numerical information

**Step 2: Set Up the Diagram**
- Draw appropriate number of circles
- Label each circle clearly
- Draw the universal set rectangle

**Step 3: Fill in Known Information**
- Start with intersections (especially center for 3 sets)
- Work outward to individual regions
- Use subtraction to find "only" regions

**Step 4: Calculate Unknown Values**
- Use the principle: Total = sum of all regions
- Apply set operation formulas
- Check for logical consistency

**Common Formulas:**
- For two sets: $|A \\cup B| = |A| + |B| - |A \\cap B|$
- For three sets: $|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$

**Example Applications:**
- Survey data analysis
- Market research studies
- Medical diagnosis patterns
- Student course enrollment
- Customer preference analysis`,
     "interactive": "venn-problem-solving"
   }
 ]
},
{
 "title": "Word Problems and Applications",
 "icon": "📝",
 "content": `Converting real-world scenarios into set notation and solving them using Venn diagrams.`,
 "subsections": [
   {
     "title": "Converting Word Problems to Set Notation",
     "content": `**COMMON KEYWORDS AND TRANSLATIONS**

**Union Keywords:**
- "Either... or..." → $A \\cup B$
- "At least one" → $A \\cup B$
- "Or both" → $A \\cup B$

**Intersection Keywords:**
- "Both... and..." → $A \\cap B$
- "Common to both" → $A \\cap B$
- "Shared by" → $A \\cap B$

**Complement Keywords:**
- "Not in A" → $A'$
- "Neither A nor B" → $(A \\cup B)'$
- "Outside of" → Complement

**Difference Keywords:**
- "Only A" → $A \\setminus B$
- "A but not B" → $A \\setminus B$
- "Exclusively in A" → $A \\setminus B$

**TRANSLATION PROCESS:**
1. **Identify the context** and universal set
2. **Define each set** clearly with descriptive names
3. **Locate key phrases** and translate to set operations
4. **Write mathematical expressions** using proper notation
5. **Verify translation** makes sense in context`,
     "interactive": "word-translation"
   },
   {
     "title": "Real-Life Applications",
     "content": `**PRACTICAL APPLICATIONS OF SET THEORY**

**1. Market Research and Surveys**
- Customer preferences and demographics
- Product usage patterns
- Brand loyalty analysis
- Target audience identification

**2. Database Management**
- Query operations (SELECT, JOIN)
- Data filtering and sorting
- Relationship mapping
- Information retrieval systems

**3. Probability and Statistics**
- Event relationships in probability
- Statistical sampling
- Hypothesis testing
- Risk analysis

**4. Biology and Medicine**
- Disease symptom patterns
- Genetic trait inheritance
- Drug interaction studies
- Medical diagnosis systems

**5. Computer Science**
- Boolean logic operations
- Search algorithms
- Data structure operations
- Network analysis

**6. Education and Academia**
- Course enrollment patterns
- Student performance analysis
- Curriculum planning
- Resource allocation

**Example Scenarios:**
- Social media platform user analysis
- Hospital patient treatment tracking
- School extracurricular activity participation
- E-commerce customer behavior studies`,
     "interactive": "real-applications"
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
