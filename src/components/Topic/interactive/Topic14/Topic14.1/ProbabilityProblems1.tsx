// src/data/probabilityProblemsQuestions.ts (or your preferred location)
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';


const probabilityProblemsQuestions: MultiStepQuestion[] = [
  {
    id: 'theoretical_probability_example',
    title: "Theoretical Probability Problem",
    steps: [
      {
        id: 'step1_identify_type_1',
        question: "A standard six-sided die is rolled once. What type of probability problem is this?",
        questionType: 'text',
        options: [
          "Theoretical Probability",
          "Experimental Probability",
          "Real-world Application",
          "Combination Problem"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "This is a theoretical probability problem because we are calculating the chance of an outcome based on the known, equally likely possibilities of a standard die (numbers 1 through 6), without conducting an experiment."
      },
      {
        id: 'step2_define_elements_1',
        question: "For rolling a 5 on a standard die, what are the total number of possible outcomes and the number of favorable outcomes?",
        questionType: 'text',
        options: [
          "Total outcomes: 6 (1, 2, 3, 4, 5, 6). Favorable outcomes: 1 (rolling a 5).",
          "Total outcomes: 5 (1, 2, 3, 4, 5). Favorable outcomes: 1 (rolling a 5).",
          "Total outcomes: 6 (1, 2, 3, 4, 5, 6). Favorable outcomes: 2 (rolling a 5 or 6).",
          "Total outcomes: 1 (rolling a die). Favorable outcomes: 1 (rolling a 5)."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "A standard die has 6 faces, numbered 1 through 6. So, there are 6 possible outcomes when it's rolled. We are interested in the event 'rolling a 5'. There is only one face with the number 5, so there is 1 favorable outcome."
      },
      {
        id: 'step3_apply_formula_1',
        question: "Using the theoretical probability formula $ P(E) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}} $, what is the probability of rolling a 5?",
        questionType: 'text',
        options: [
          "$ P(5) = \\frac{1}{6} $",
          "$ P(5) = \\frac{5}{6} $",
          "$ P(5) = \\frac{1}{5} $",
          "$ P(5) = \\frac{6}{1} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "We substitute the numbers we identified: Number of favorable outcomes = 1, Total number of possible outcomes = 6. So, $ P(5) = \\frac{1}{6} $."
      },
      {
        id: 'step4_interpret_result_1',
        question: "What does the probability $ P(5) = \\frac{1}{6} $ mean?",
        questionType: 'text',
        options: [
          "In the long run, we expect to roll a 5 about one-sixth of the time.",
          "We will definitely roll a 5 every 6 rolls.",
          "It is impossible to roll a 5.",
          "Rolling a 5 is the most likely outcome."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "Probability describes the long-term likelihood of an event occurring. $ \\frac{1}{6} $ means that if the die is rolled many times, the proportion of times a 5 is rolled should get closer and closer to $ \\frac{1}{6} $. It does not guarantee exactly one 5 in every six rolls."
      }
    ]
  },
  {
    id: 'experimental_probability_example',
    title: "Experimental Probability Problem",
    steps: [
      {
        id: 'step1_identify_type_2',
        question: "A spinner is spun 100 times. The results are: Red 30 times, Blue 45 times, Green 25 times. What type of probability problem is calculating the probability of landing on Blue based on this data?",
        questionType: 'text',
        options: [
          "Experimental Probability",
          "Theoretical Probability",
          "Geometric Probability",
          "Conditional Probability"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "This is an experimental probability problem because the probability is calculated based on the actual results (data) obtained from performing the experiment (spinning the spinner 100 times)."
      },
      {
        id: 'step2_define_elements_2',
        question: "To find the experimental probability of landing on Blue, what numbers do you need?",
        questionType: 'text',
        options: [
          "Number of times Blue occurred (45) and Total number of trials (100).",
          "Number of Blue sections on the spinner and Total number of sections.",
          "Number of times Red occurred (30) and Number of times Green occurred (25).",
          "Total number of trials (100) and Number of colors (3)."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "The formula for experimental probability is $ P(E) = \\frac{\\text{Number of times E occurs}}{\\text{Total number of trials}} $. For the event 'landing on Blue', we need the count of how many times Blue occurred (45) and the total number of spins (100)."
      },
      {
        id: 'step3_apply_formula_2',
        question: "Using the experimental probability formula, what is the probability of landing on Blue based on the data?",
        questionType: 'text',
        options: [
          "$ P(\\text{Blue}) = \\frac{45}{100} = 0.45 $",
          "$ P(\\text{Blue}) = \\frac{100}{45} $",
          "$ P(\\text{Blue}) = \\frac{45}{3} $",
          "$ P(\\text{Blue}) = \\frac{3}{100} $"
        ],
        optionType: 'text',
        correct: 0,
        explanation: "We use the formula $ P(\\text{Blue}) = \\frac{\\text{Number of times Blue occurred}}{\\text{Total number of trials}} = \\frac{45}{100} $. This fraction simplifies to 0.45 (or 45%)."
      },
      {
        id: 'step4_verify_result_2',
        question: "How can you verify that your experimental probabilities for Red, Blue, and Green are correctly calculated?",
        questionType: 'text',
        options: [
          "Add the individual probabilities: $ P(\\text{Red}) + P(\\text{Blue}) + P(\\text{Green}) $ should equal 1 (or very close, due to rounding).",
          "Multiply the individual probabilities together.",
          "Ensure each probability is greater than 0.5.",
          "Check that the number of trials (100) is a round number."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "A good way to check experimental probability calculations is to ensure that the probabilities of all possible, mutually exclusive outcomes sum to 1 (or 100%). Here: $ P(\\text{Red}) = \\frac{30}{100} = 0.30 $, $ P(\\text{Blue}) = \\frac{45}{100} = 0.45 $, $ P(\\text{Green}) = \\frac{25}{100} = 0.25 $. Sum: $ 0.30 + 0.45 + 0.25 = 1.00 $. This confirms the calculations are consistent."
      }
    ]
  },
  {
    id: 'probability_concept_check',
    title: "Concept Check",
    steps: [
      {
        id: 'step1_common_mistake',
        question: "Which of the following is a common mistake to avoid when calculating probability?",
        questionType: 'text',
        options: [
          "Getting a probability greater than 1 or less than 0.",
          "Always expressing the answer as a percentage.",
          "Listing all possible outcomes.",
          "Using the correct formula."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "Probabilities are always numbers between 0 and 1, inclusive. A probability of 0 means the event is impossible, and a probability of 1 means the event is certain. Any calculated probability outside this range (like 1.5 or -0.2) is definitely incorrect and indicates a mistake in counting outcomes or applying the formula."
      },
      {
        id: 'step2_interpretation',
        question: "If the probability of rain tomorrow is calculated to be 0.75, what is the correct interpretation?",
        questionType: 'text',
        options: [
          "There is a 75% chance it will rain tomorrow.",
          "It will definitely rain tomorrow.",
          "It will not rain tomorrow.",
          "It will rain for 75% of the day."
        ],
        optionType: 'text',
        correct: 0,
        explanation: "A probability of 0.75 is equivalent to 75%. This means the event (rain) is likely to happen, but it's not certain. It quantifies the chance or likelihood, not a guarantee of occurrence or the duration."
      }
    ]
  }
];

const ProbabilityProblems1: React.FC = () => {
  // Define the theme (using a blue/indigo theme, common for math/statistics)
  const theme = {
    from: 'from-blue-500',
    to: 'to-indigo-600',
    button: 'bg-blue-600',
    buttonHover: 'hover:bg-blue-700'
  };

  // Define the rules to display (summarizing key points from the content)
  const rules = [
    "Theoretical Probability: $ P(E) = \\frac{\\text{No of favorable outcomes}}{\\text{No of total possible outcomes}} $.",
    "Experimental Probability: $ P(E) = \\frac{\\text{No of times E occurs}}{\\text{No of total trials}} $.",
    "Probability values are always between 0 and 1 (inclusive).",
    "The sum of probabilities for all possible outcomes must equal 1.",
    "Always define the experiment, sample space, and event clearly."
  ];

  // Optional: Function to render summary of shared values (none used in this example)
  // const renderSharedValuesSummary = (sharedValues: { [key: string]: any }) => { ... };

  // Optional: Reset callback
  const handleReset = () => {
    console.log("Probability Problems Interactive Quiz Reset");
    // Add any specific reset logic here if needed
  };

  return (
    <MultipleStepInteractiveComponent
      title="Probability Problems"
      icon="🎲" // Icon representing chance/dice
      theme={theme}
      rules={rules}
      rulesTitle="Key Probability Rules:"
      questions={probabilityProblemsQuestions}
      initialSharedValues={{}}
      // renderSharedValuesSummary={renderSharedValuesSummary} // Optional
      onReset={handleReset}
    />
  );
};

export default ProbabilityProblems1