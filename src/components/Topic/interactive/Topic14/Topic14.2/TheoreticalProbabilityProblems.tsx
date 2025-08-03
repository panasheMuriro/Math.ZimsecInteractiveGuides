import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

const theoreticalProbabilityProblemsQuestions: MultiStepQuestion[] = [
  {
    id: 'basic_theoretical_example',
    title: "Basic Theoretical Probability",
    steps: [
      {
        id: 'step1_identify_setup_1',
        question: "A bag contains 3 red marbles, 5 blue marbles, and 2 green marbles. If one marble is drawn at random, what is the first step in solving this problem?",
        questionType: 'text',
        options: [
          "Identify the problem setup: It's theoretical probability with equally likely outcomes (each marble has an equal chance of being drawn).",
          "List all possible colors.",
          "Count the total number of marbles.",
          "Guess the probability."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The first step in any probability problem is to understand the setup. This problem involves drawing one item from a collection where each item is equally likely to be chosen, which is the definition of theoretical probability. Recognizing this helps you choose the correct formula and approach."
      },
      {
        id: 'step2_define_sample_space_1',
        question: "What is the sample space and the total number of possible outcomes for drawing one marble?",
        questionType: 'text',
        options: [
          "Sample space: {Red, Red, Red, Blue, Blue, Blue, Blue, Blue, Green, Green}. Total outcomes: 10 marbles.",
          "Sample space: {Red, Blue, Green}. Total outcomes: 3 colors.",
          "Sample space: {3 Reds, 5 Blues, 2 Greens}. Total outcomes: 3 types.",
          "Sample space: {Marble 1, Marble 2, ..., Marble 10}. Total outcomes: 10 marbles."
        ],
        optionType: 'text',
        correct: 0, // Option 3 is also technically correct for total outcomes, but 0 best describes sample space.
        explanation: "The sample space consists of all possible individual outcomes. While we can group them by color for counting, the fundamental outcomes are drawing each specific marble. There are 3 red + 5 blue + 2 green = 10 marbles in total. So, there are 10 possible outcomes, and they are equally likely."
      },
      {
        id: 'step3_identify_event_1',
        question: "We want to find the probability of drawing a blue marble. What are the favorable outcomes and their count?",
        questionType: 'text',
        options: [
          "Favorable outcomes: Drawing any one of the 5 specific blue marbles. Number of favorable outcomes: 5.",
          "Favorable outcomes: Drawing a blue marble. Number of favorable outcomes: 1 (the color).",
          "Favorable outcomes: {Blue, Not Blue}. Number of favorable outcomes: 2.",
          "Favorable outcomes: Drawing 5 marbles. Number of favorable outcomes: 5."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The event of interest is 'drawing a blue marble'. The favorable outcomes are the specific results that satisfy this condition. Since there are 5 blue marbles, there are 5 distinct ways this event can occur (drawing blue marble 1, or 2, ..., or 5). Therefore, there are 5 favorable outcomes."
      },
      {
        id: 'step4_apply_formula_1',
        question: "Apply the theoretical probability formula: $ P(E) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}} $. What is $ P(\\text{Blue}) $?",
        questionType: 'text',
        options: [
          "$ P(\\text{Blue}) = \\frac{5}{10} = \\frac{1}{2} $",
          "$ P(\\text{Blue}) = \\frac{10}{5} = 2 $",
          "$ P(\\text{Blue}) = \\frac{1}{5} $",
          "$ P(\\text{Blue}) = \\frac{1}{10} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "We substitute the numbers we identified: Number of favorable outcomes (drawing a blue marble) = 5. Total number of possible outcomes (total marbles) = 10. So, $ P(\\text{Blue}) = \\frac{5}{10} $. This fraction simplifies to $ \\frac{1}{2} $ or 0.5 or 50%."
      }
    ]
  },
  {
    id: 'complement_rule_example',
    title: "Using the Complement Rule",
    steps: [
      {
        id: 'step1_identify_problem_type_2',
        question: "A standard deck of 52 playing cards is shuffled. What is the probability of drawing a card that is NOT a heart? Which strategy is most efficient here?",
        questionType: 'text',
        options: [
          "Use the Complement Rule: Calculate $ P(\\text{Heart}) $ and then $ P(\\text{Not Heart}) = 1 - P(\\text{Heart}) $.",
          "List all non-heart cards and count them directly.",
          "Guess that it's about 75%.",
          "Assume it's the same as drawing a heart."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The problem asks for the probability of the event 'NOT drawing a heart'. Calculating the probability of the complement event 'drawing a heart' and then subtracting it from 1 is often easier and less prone to counting errors than listing and counting all 39 non-heart cards directly."
      },
      {
        id: 'step2_find_complement_prob_2',
        question: "What is the probability of drawing a heart from a standard 52-card deck?",
        questionType: 'text',
        options: [
          "$ P(\\text{Heart}) = \\frac{13}{52} = \\frac{1}{4} $ (There are 13 hearts in a deck of 52 cards).",
          "$ P(\\text{Heart}) = \\frac{52}{13} $",
          "$ P(\\text{Heart}) = \\frac{1}{13} $",
          "$ P(\\text{Heart}) = \\frac{4}{52} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "A standard deck has 4 suits (hearts, diamonds, clubs, spades), each with 13 cards. So, there are 13 hearts. The total number of cards is 52. Using the probability formula: $ P(\\text{Heart}) = \\frac{\\text{Number of hearts}}{\\text{Total number of cards}} = \\frac{13}{52} $. This simplifies to $ \\frac{1}{4} $."
      },
      {
        id: 'step3_apply_complement_rule_2',
        question: "Using the Complement Rule, $ P(\\text{Not Heart}) = 1 - P(\\text{Heart}) $, what is the probability of drawing a card that is NOT a heart?",
        questionType: 'text',
        options: [
          "$ P(\\text{Not Heart}) = 1 - \\frac{1}{4} = \\frac{3}{4} $",
          "$ P(\\text{Not Heart}) = 1 - \\frac{1}{4} = \\frac{4}{4} - \\frac{1}{4} = \\frac{3}{1} $",
          "$ P(\\text{Not Heart}) = \\frac{1}{4} $",
          "$ P(\\text{Not Heart}) = 1 + \\frac{1}{4} = \\frac{5}{4} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "We apply the complement rule: $ P(\\text{Not Heart}) = 1 - P(\\text{Heart}) = 1 - \\frac{1}{4} $. To subtract fractions, they need a common denominator. $ 1 = \\frac{4}{4} $. So, $ P(\\text{Not Heart}) = \\frac{4}{4} - \\frac{1}{4} = \\frac{4-1}{4} = \\frac{3}{4} $."
      },
      {
        id: 'step4_verify_result_2',
        question: "How can you verify that your answer $ P(\\text{Not Heart}) = \\frac{3}{4} $ is reasonable?",
        questionType: 'text',
        options: [
          "Check that $ P(\\text{Heart}) + P(\\text{Not Heart}) = 1 $. $ \\frac{1}{4} + \\frac{3}{4} = 1 $ ✓. Also, $ \\frac{3}{4} = 0.75 $, which is between 0 and 1 and makes sense as 'more likely than not'.",
          "Ensure the numerator is larger than the denominator.",
          "Make sure the probability is negative.",
          "Confirm that drawing a heart and not drawing a heart are the same thing."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "A good verification step is to ensure that the probabilities of complementary events sum to 1. Here, $ P(\\text{Heart}) + P(\\text{Not Heart}) = \\frac{1}{4} + \\frac{3}{4} = \\frac{4}{4} = 1 $. This confirms our calculation. Additionally, checking that the probability is between 0 and 1 ($ 0 \\leq 0.75 \\leq 1 $) and that it makes logical sense (it's more likely to draw a non-heart than a heart) supports the correctness of the answer."
      }
    ]
  },
  {
    id: 'theoretical_concept_check',
    title: "Concept Check",
    steps: [
      {
        id: 'step1_probability_range',
        question: "Which of the following scenarios is mathematically impossible for a probability?",
        questionType: 'text',
        options: [
          "The probability of an event is 1.5.",
          "The probability of an event is 0.25.",
          "The probability of an event is 0.",
          "The probability of an event is 1."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "One of the fundamental rules of probability is that the value of any probability must lie between 0 and 1, inclusive. $ 0 \\leq P(E) \\leq 1 $. A probability of 1.5 is greater than 1, which violates this rule and is therefore impossible. Probabilities of 0, 0.25, and 1 are all valid (representing impossible, unlikely, and certain events, respectively)."
      },
      {
        id: 'step2_compound_conditions',
        question: "A standard six-sided die is rolled. What is the probability of rolling a number that is both even AND greater than 2?",
        questionType: 'text',
        options: [
          "First, identify the sample space: {1, 2, 3, 4, 5, 6}. Total outcomes = 6. Second, identify the event: numbers that are even AND > 2. The even numbers are {2, 4, 6}. Of these, those greater than 2 are {4, 6}. So, favorable outcomes = 2. Third, apply the formula: $ P = \\frac{2}{6} = \\frac{1}{3} $.",
          "Add the probabilities of rolling an even number and rolling a number greater than 2.",
          "The probability is $ \\frac{1}{6} $ because there is only one way to roll a 4.",
          "The probability is $ \\frac{3}{6} $ because there are three even numbers."
        ],
        optionType: 'text', // Option 0 contains text, but overall question type is text reasoning
        correct: 0,
        explanation: "This is a problem with a compound condition (AND). You must find outcomes that satisfy both criteria simultaneously. The sample space for a die roll is {1, 2, 3, 4, 5, 6}. The numbers that are even are {2, 4, 6}. The numbers greater than 2 are {3, 4, 5, 6}. The numbers that are *both* even AND greater than 2 are the intersection of these two sets: {4, 6}. There are 2 favorable outcomes out of 6 total outcomes. So, $ P(\\text{even AND } > 2) = \\frac{2}{6} = \\frac{1}{3} $."
      }
    ]
  }
];


const TheoreticalProbabilityProblems: React.FC = () => {
  // Define the theme (using a purple/indigo theme, common for text/statistics)
  const theme = {
    from: 'from-purple-500',
    to: 'to-indigo-600',
    button: 'bg-purple-600',
    buttonHover: 'hover:bg-purple-700'
  };

  // Define the rules to display (summarizing key points from the content)
  const rules = [
    "Theoretical Probability: $ P(E) = \\frac{\\text{No of favorable outcomes}}{\\text{No of total possible outcomes}} $.",
    "Complement Rule: $ P(\\text{not } E) = 1 - P(E) $.",
    "Probability values are always between 0 and 1 (inclusive).",
    "The sum of probabilities for all possible outcomes must equal 1.",
    "Use the complement rule when calculating $P(E)$ directly is complex."
  ];

  // Optional: Function to render summary of shared values (none used in this example)
  // const renderSharedValuesSummary = (sharedValues: { [key: string]: any }) => { ... };

  // Optional: Reset callback
  const handleReset = () => {
    console.log("Theoretical Probability Problems Interactive Quiz Reset");
    // Add any specific reset logic here if needed
  };

  return (
    <MultipleStepInteractiveComponent
      title="Theoretical Probability Problems"
      icon="🧮" // Icon representing calculation/text
      theme={theme}
      rules={rules}
      rulesTitle="Key Probability Rules:"
      questions={theoreticalProbabilityProblemsQuestions}
      initialSharedValues={{}}
      // renderSharedValuesSummary={renderSharedValuesSummary} // Optional
      onReset={handleReset}
    />
  );
};

export default TheoreticalProbabilityProblems;