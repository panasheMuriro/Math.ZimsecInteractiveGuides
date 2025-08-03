import { Section, QuizQuestion } from "../types";

export const sections: Section[] = [
  {
    title: "Introduction to Probability",
    icon: "🎲",
    content: `Probability is the study of chance and the likelihood of events occurring. It is used in various fields, such as statistics, science, and decision-making, to predict outcomes and model real-world phenomena.

**Syllabus Objectives**:
- Define probability and key probability terms.
- Calculate the probability of single events.
- Describe experimental probability.
- Solve problems involving probability in real-world contexts.
- Use ICT tools to explore and visualize probability concepts.`,
    subsections: [
      {
        title: "Definition of Probability",
        content: `**DEFINITION OF PROBABILITY (FORM 1)**

**Definition:**
- Probability measures the likelihood of an event occurring, expressed as a number between 0 and 1, where 0 means impossible and 1 means certain.
- Formula: For an event $ E $ with equally likely outcomes, the probability is:
  $$ P(E) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}} $$
- Example: When rolling a fair six-sided die, the probability of rolling a 3 is:
  $$ P(3) = \\frac{1}{6} $$, since there is 1 favorable outcome out of 6 possible outcomes.

**Key Terms:**
- **Experiment:** An action with uncertain outcomes (e.g., flipping a coin).
- **Outcome:** A possible result of an experiment (e.g., heads or tails).
- **Event:** A specific outcome or set of outcomes (e.g., getting heads).
- **Sample Space:** The set of all possible outcomes (e.g., for a coin, $ \\{ \\text{heads}, \\text{tails} \\} $).

**Applications:**
- Everyday decisions: Predicting weather or game outcomes.
- Statistics: Analyzing data trends.

**Syllabus Objectives**:
- Define probability and key terms (experiment, outcome, event, sample space).
- Calculate the probability of single events using the formula.
- Discuss probability concepts using real-world examples.
- Use ICT tools (e.g., simulation software) to explore probability.`,
        interactive: "probability-definition",
      },
      {
        title: "Experimental Probability",
        content: `**EXPERIMENTAL PROBABILITY (FORM 1)**

**Definition:**
- Experimental probability is based on the results of repeated trials of an experiment.
- Formula: For an event $ E $ after $ n $ trials:
  $$ P(E) = \\frac{\\text{Number of times } E \\text{ occurs}}{n} $$
- Example: If a coin is flipped 100 times and lands on heads 45 times, the experimental probability of heads is:
  $$ P(\\text{heads}) = \\frac{45}{100} = 0.45 $$.

**Applications:**
- Quality control: Estimating defect rates in manufacturing.
- Sports: Analyzing player performance based on past games.

**Syllabus Objectives**:
- Describe experimental probability and its calculation.
- Conduct probability experiments to compute probabilities.
- Solve problems involving experimental probability in real-world contexts.
- Use ICT tools to simulate experiments and calculate probabilities.`,
        interactive: "experimental-probability",
      },
        {
      title: "Probability Problems",
      content: `**PROBABILITY PROBLEMS (FORM 1)**

**Step-by-Step Problem Solving:**

**Step 1: Identify the Problem Type**
- **Theoretical Probability:** Uses mathematical calculation with equally likely outcomes
- **Experimental Probability:** Uses data from actual trials/experiments
- **Real-world Application:** Applies probability to practical situations

**Step 2: Define Key Elements**
- **Identify the experiment:** What action is being performed?
- **List all possible outcomes:** What are all the ways the experiment can end?
- **Define the sample space:** Write the set of all possible outcomes
- **Identify the event:** What specific outcome(s) are we interested in?

**Step 3: Apply the Appropriate Formula**

**For Theoretical Probability:**
$$ P(E) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}} $$

**For Experimental Probability:**
$$ P(E) = \\frac{\\text{Number of times E occurs}}{\\text{Total number of trials}} $$

**Step 4: Calculate and Interpret**
- Perform the calculation
- Express answer as fraction, decimal, or percentage as required
- Check that probability is between 0 and 1
- Interpret the result in context

**Step 5: Verify the Answer**
- Check that the calculation is correct
- Ensure the answer makes sense in the context
- Verify that probabilities sum to 1 for all possible outcomes

**Common Problem Types:**

**Type 1: Single Event Probability**
- Example: "What is the probability of rolling a 4 on a fair die?"
- Solution: $P(4) = \\frac{1}{6}$

**Type 2: Multiple Favorable Outcomes**
- Example: "What is the probability of rolling an even number on a die?"
- Favorable outcomes: {2, 4, 6}
- Solution: $P(\\text{even}) = \\frac{3}{6} = \\frac{1}{2}$

**Type 3: Experimental Probability**
- Example: "In 50 coin flips, heads appeared 23 times. What is the experimental probability?"
- Solution: $P(\\text{heads}) = \\frac{23}{50} = 0.46$

**Type 4: Real-world Applications**
- Example: "If 3 out of 20 light bulbs are defective, what is the probability a randomly selected bulb is defective?"
- Solution: $P(\\text{defective}) = \\frac{3}{20} = 0.15$

**Example Problem Walkthrough:**

**Problem:** A bag contains 5 red balls, 3 blue balls, and 2 green balls. What is the probability of drawing a blue ball?

**Step 1:** This is a theoretical probability problem
**Step 2:** 
- Experiment: Drawing one ball from the bag
- Sample space: {red, red, red, red, red, blue, blue, blue, green, green}
- Total outcomes: 10 balls
- Event: Drawing a blue ball
- Favorable outcomes: 3 blue balls

**Step 3:** $P(\\text{blue}) = \\frac{3}{10}$
**Step 4:** $P(\\text{blue}) = 0.3$ or 30%
**Step 5:** Answer makes sense (reasonable probability between 0 and 1)

**Key Tips for Success:**
- Always identify all possible outcomes first
- Count carefully to avoid errors
- Express final answers in the requested format
- Check that individual probabilities add up correctly
- Use real-world context to verify reasonableness

**Common Mistakes to Avoid:**
- Forgetting to list all possible outcomes
- Miscounting favorable or total outcomes
- Getting probabilities greater than 1 or less than 0
- Confusing theoretical and experimental probability
- Not simplifying fractions when required

**Syllabus Objectives**:
- Solve probability problems systematically using step-by-step methods
- Apply probability formulas correctly to different problem types
- Interpret probability results in real-world contexts
- Use experimental data to calculate probabilities`,
      interactive: "probability-problems-1",
    },
    ],
  },
  {
    title: "Theoretical Probability and Single Events",
    icon: "📈",
    content: `Theoretical probability uses mathematical reasoning to determine the likelihood of events, assuming all outcomes are equally likely. It contrasts with experimental probability and is applied to single events in various contexts.

**Syllabus Objectives**:
- Describe theoretical probability and its differences from experimental probability.
- Use probability rules to compute probabilities of single events.
- Solve problems involving theoretical probability in real-world scenarios.
- Use ICT tools to visualize and compute theoretical probabilities.`,
    subsections: [
      {
        title: "Theoretical Probability",
        content: `**THEORETICAL PROBABILITY (FORM 2)**

**Definition:**
- Theoretical probability is calculated based on the assumption that all outcomes in the sample space are equally likely.
- Formula: For an event $ E $:
  $$ P(E) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}} $$
- Example: In a deck of 52 cards, the probability of drawing a heart is:
  $$ P(\\text{heart}) = \\frac{13}{52} = \\frac{1}{4} $$, since there are 13 hearts out of 52 cards.

**Comparison with Experimental Probability:**
- Experimental probability depends on trial results and may vary, while theoretical probability is fixed based on the sample space.
- Example: The theoretical probability of rolling a 6 on a fair die is $ \\frac{1}{6} $, but experimental results may differ due to randomness.

**Applications:**
- Game theory: Designing fair games.
- Risk assessment: Predicting outcomes in insurance.

**Syllabus Objectives**:
- Describe theoretical probability and its calculation.
- Compare theoretical and experimental probabilities.
- Compute probabilities of single events using theoretical probability.
- Use ICT tools to model theoretical probabilities.`,
        interactive: "theoretical-probability",
      },
      {
        title: "Single Events",
        content: `**SINGLE EVENTS (FORM 2)**

**Definition:**
- A single event involves one outcome or a set of outcomes from a single experiment.
- Example: Rolling an even number on a die (outcomes: 2, 4, 6).
- Probability: For a die, $ P(\\text{even}) = \\frac{3}{6} = \\frac{1}{2} $.

**Probability Rules:**
- **Complement Rule:** $ P(\\text{not } E) = 1 - P(E) $.
  - Example: Probability of not rolling a 6 is $ 1 - \\frac{1}{6} = \\frac{5}{6} $.
- **Range:** $ 0 \\leq P(E) \\leq 1 $.

**Applications:**
- Weather forecasting: Predicting the chance of rain.
- Quality control: Probability of selecting a defective item.

**Syllabus Objectives**:
- Use probability rules to compute probabilities of single events.
- Solve problems involving single events in real-world contexts.
- Use ICT tools to calculate and visualize probabilities of single events.`,
        interactive: "single-events",
      },
       {
      title: "Theoretical Probability Problems",
      content: `**THEORETICAL PROBABILITY PROBLEMS (FORM 2)**

**Step-by-Step Problem Solving:**

**Step 1: Identify the Problem Setup**
- Determine if the problem involves theoretical probability
- Check that all outcomes are equally likely
- Identify the type of experiment (dice, cards, spinners, etc.)
- Note any constraints or special conditions

**Step 2: Define the Sample Space**
- List all possible outcomes of the experiment
- Count the total number of possible outcomes
- Ensure all outcomes are equally likely
- Example: For a standard die, sample space = {1, 2, 3, 4, 5, 6}, total = 6

**Step 3: Identify the Event of Interest**
- Clearly define what constitutes a "favorable" outcome
- List all outcomes that satisfy the event condition
- Count the number of favorable outcomes
- Example: Event "rolling even number" = {2, 4, 6}, favorable = 3

**Step 4: Apply the Theoretical Probability Formula**
$$ P(E) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}} $$

**Step 5: Simplify and Verify**
- Reduce fractions to lowest terms
- Convert to decimal or percentage if required
- Check that $ 0 \\leq P(E) \\leq 1 $
- Verify the answer makes logical sense

**Common Problem Types:**

**Type 1: Basic Single Event**
- Example: "What is the probability of drawing an ace from a standard deck?"
- Sample space: 52 cards
- Favorable outcomes: 4 aces
- Solution: $P(\\text{ace}) = \\frac{4}{52} = \\frac{1}{13}$

**Type 2: Compound Conditions**
- Example: "What is the probability of rolling a number greater than 4 on a die?"
- Sample space: {1, 2, 3, 4, 5, 6}
- Favorable outcomes: {5, 6}
- Solution: $P(>4) = \\frac{2}{6} = \\frac{1}{3}$

**Type 3: Complement Problems**
- Example: "What is the probability of NOT drawing a face card?"
- Face cards: 12 out of 52
- Solution: $P(\\text{not face card}) = 1 - \\frac{12}{52} = \\frac{40}{52} = \\frac{10}{13}$

**Type 4: Multiple Characteristics**
- Example: "What is the probability of drawing a red king from a deck?"
- Red kings: 2 (king of hearts, king of diamonds)
- Solution: $P(\\text{red king}) = \\frac{2}{52} = \\frac{1}{26}$

**Step-by-Step Example:**

**Problem:** A spinner has 8 equal sections numbered 1 through 8. What is the probability of spinning a prime number?

**Step 1:** Theoretical probability problem with equally likely outcomes
**Step 2:** Sample space = {1, 2, 3, 4, 5, 6, 7, 8}, Total outcomes = 8
**Step 3:** Prime numbers = {2, 3, 5, 7}, Favorable outcomes = 4
**Step 4:** $P(\\text{prime}) = \\frac{4}{8}$
**Step 5:** $P(\\text{prime}) = \\frac{1}{2} = 0.5$ or 50%

**Key Probability Rules:**

**1. Complement Rule:**
$P(\\text{not } E) = 1 - P(E)$

**2. Probability Range:**
$0 \\leq P(E) \\leq 1$

**3. Certain Event:**
$P(\\text{certain event}) = 1$

**4. Impossible Event:**
$P(\\text{impossible event}) = 0$

**5. Sum of All Probabilities:**
For all possible outcomes: $\\sum P(\\text{outcome}) = 1$

**Advanced Problem-Solving Strategies:**

**Strategy 1: Use Complement When Easier**
- If finding $P(E)$ is complex, calculate $P(\\text{not } E)$ instead
- Then use $P(E) = 1 - P(\\text{not } E)$

**Strategy 2: Break Down Complex Events**
- Identify all sub-conditions that make the event true
- Count systematically to avoid missing cases

**Strategy 3: Verify Using Different Methods**
- Check answer using complement rule
- Ensure all probabilities add to 1 for exhaustive events

**Common Mistakes to Avoid:**
- Forgetting to reduce fractions
- Miscounting favorable or total outcomes
- Assuming outcomes are equally likely when they're not
- Confusing "at least" with "exactly" conditions
- Not checking that probability is between 0 and 1

**Real-World Applications:**
- **Quality Control:** Probability of defective products
- **Medical Testing:** Probability of test accuracy
- **Games of Chance:** Fair game design
- **Insurance:** Risk assessment and premium calculation

**Syllabus Objectives**:
- Solve theoretical probability problems using systematic approaches
- Apply probability rules including complement rule effectively
- Compare theoretical predictions with real-world scenarios
- Use mathematical reasoning to verify probability calculations`,
      interactive: "theoretical-probability-problems",
    },
    ],
  },
  {
    title: "Combined Events",
    icon: "🔗",
    content: `Combined events involve multiple experiments or outcomes, analyzed using tools like outcome tables, tree diagrams, and probability rules. These concepts are crucial for understanding complex probability scenarios in real life.

**Syllabus Objectives**:
- Define combined events.
- Construct outcome tables and tree diagrams.
- Apply probability rules to compute probabilities of combined events.
- Demonstrate the application of probability in real-world contexts.
- Use ICT tools to model combined events.`,
    subsections: [
      {
        title: "Combined Events and Outcome Tables",
        content: `**COMBINED EVENTS AND OUTCOME TABLES (FORM 3)**

**Definition:**
- Combined events involve the outcomes of two or more experiments (e.g., flipping two coins).
- Sample space: All possible combinations of outcomes.
- Example: For two coins, the sample space is $ \\{ \\text{HH}, \\text{HT}, \\text{TH}, \\text{TT} \\} $.

**Outcome Tables:**
- A table listing all possible outcomes of two experiments.
- Example: For two coins:
  $$
  \\begin{array}{c|cc}
    \\text{First Coin} & \\text{H} & \\text{T} \\\\
    \\hline
    \\text{H} & \\text{HH} & \\text{HT} \\\\
    \\text{T} & \\text{TH} & \\text{TT} \\\\
  \\end{array}
  $$
- Probability: $ P(\\text{exactly one head}) = \\frac{2}{4} = \\frac{1}{2} $ (HT or TH).

**Applications:**
- Decision-making: Assessing risks in games or business.
- Statistics: Analyzing multiple variables.

**Syllabus Objectives**:
- Define combined events and their sample spaces.
- Construct outcome tables for combined events.
- Compute probabilities using outcome tables.
- Use ICT tools to create and analyze outcome tables.`,
        interactive: "combined-events-tables",
      },
      {
        title: "Tree Diagrams",
        content: `**TREE DIAGRAMS (FORM 3)**

**Definition:**
- A tree diagram visually represents the outcomes of combined events, showing each stage of the experiment.
- Example: For flipping two coins:
  - First coin: H or T (each with $ \\frac{1}{2} $ probability).
  - Second coin: H or T for each branch.
  - Outcomes: HH, HT, TH, TT.
- Probability: $ P(\\text{HH}) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4} $.

**Applications:**
- Genetics: Predicting trait combinations.
- Project planning: Assessing possible outcomes.

**Syllabus Objectives**:
- Construct tree diagrams for combined events.
- Compute probabilities using tree diagrams.
- Use ICT tools to create and analyze tree diagrams.
- Solve problems involving combined events in real-world contexts.`,
        interactive: "tree-diagrams",
      },
      {
        title: "Probability Rules for Combined Events",
        content: `**PROBABILITY RULES FOR COMBINED EVENTS (FORM 4)**

**Key Rules:**
- **Independent Events:** If events $ A $ and $ B $ are independent, $ P(A \\text{ and } B) = P(A) \\cdot P(B) $.
  - Example: Rolling a 3 on a die and flipping heads: $ P(3 \\text{ and heads}) = \\frac{1}{6} \\cdot \\frac{1}{2} = \\frac{1}{12} $.
- **Mutually Exclusive Events:** If $ A $ and $ B $ cannot occur together, $ P(A \\text{ or } B) = P(A) + P(B) $.
  - Example: Drawing a red or black card from a deck: $ P(\\text{red or black}) = \\frac{26}{52} + \\frac{26}{52} = 1 $.

**Applications:**
- Risk analysis: Calculating combined risks in insurance.
- Games: Determining winning probabilities.

**Syllabus Objectives**:
- Apply probability rules to compute probabilities of combined events.
- Solve problems involving independent and mutually exclusive events.
- Use ICT tools to model and verify probabilities of combined events.`,
        interactive: "probability-rules",
      },
      {
        title: "Applications of Probability",
        content: `**APPLICATIONS OF PROBABILITY (FORM 4)**

**Real-World Uses:**
- Probability is used to model uncertainty in fields like finance, science, and engineering.
- Example: In weather forecasting, a 70% chance of rain means $ P(\\text{rain}) = 0.7 $.
- Example: In quality control, the probability of selecting a defective item from a batch.

**Mathematical Modeling:**
- Represent life phenomena using probability models (e.g., predicting customer behavior).
- Example: A store finds that 20% of customers buy a product, so $ P(\\text{purchase}) = 0.2 $.

**Syllabus Objectives**:
- Demonstrate the application of probability in real-world scenarios.
- Solve problems using probability models.
- Use ICT tools to simulate and analyze probability applications.`,
        interactive: "probability-applications",
      },
    ],
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    question: "What is the probability of rolling a 4 on a fair six-sided die?",
    options: ["$ \\frac{1}{4} $", "$ \\frac{1}{6} $", "$ \\frac{1}{2} $", "$ \\frac{2}{6} $"],
    correct: 1,
    explanation: "A fair six-sided die has 6 equally likely outcomes. The probability of rolling a 4 is $ P(4) = \\frac{1}{6} $, as there is 1 favorable outcome out of 6.",
  },
  {
    question: "In an experiment, a coin is flipped 50 times, and heads appears 30 times. What is the experimental probability of heads?",
    options: ["$ 0.3 $", "$ 0.5 $", "$ 0.6 $", "$ 0.7 $"],
    correct: 2,
    explanation: "Experimental probability is calculated as $ P(\\text{heads}) = \\frac{\\text{Number of heads}}{\\text{Total trials}} = \\frac{30}{50} = 0.6 $.",
  },
  {
    question: "What is the theoretical probability of drawing a spade from a standard 52-card deck?",
    options: ["$ \\frac{1}{4} $", "$ \\frac{1}{13} $", "$ \\frac{1}{2} $", "$ \\frac{1}{52} $"],
    correct: 0,
    explanation: "A standard deck has 52 cards, with 13 spades. The theoretical probability is $ P(\\text{spade}) = \\frac{13}{52} = \\frac{1}{4} $.",
  },
  {
    question: "If two fair coins are flipped, what is the probability of getting exactly one head using an outcome table?",
    options: ["$ \\frac{1}{4} $", "$ \\frac{1}{2} $", "$ \\frac{3}{4} $", "$ 1 $"],
    correct: 1,
    explanation: "The sample space for two coins is $ \\{ \\text{HH}, \\text{HT}, \\text{TH}, \\text{TT} \\} $. Exactly one head occurs in HT and TH, so $ P(\\text{exactly one head}) = \\frac{2}{4} = \\frac{1}{2} $.",
  },
  {
    question: "Two independent events have probabilities $ P(A) = \\frac{1}{3} $ and $ P(B) = \\frac{1}{2} $. What is $ P(A \\text{ and } B) $?",
    options: ["$ \\frac{1}{6} $", "$ \\frac{2}{3} $", "$ \\frac{1}{5} $", "$ \\frac{1}{2} $"],
    correct: 0,
    explanation: "For independent events, $ P(A \\text{ and } B) = P(A) \\cdot P(B) = \\frac{1}{3} \\cdot \\frac{1}{2} = \\frac{1}{6} $.",
  },
];