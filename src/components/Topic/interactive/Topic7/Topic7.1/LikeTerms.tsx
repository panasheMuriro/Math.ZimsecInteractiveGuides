import MultipleChoiceInteractiveComponent, { QuizQuestion } from "../../Templates/MultipleChoiceInteractiveComponent";

const understandingLikeTermsQuestions: QuizQuestion[] = [
  {
    id: 'like-terms-definition',
    question: "What makes two algebraic terms 'like terms'?",
    options: [
      "They have the same coefficient (number).",
      "They have the same variable raised to the same power.",
      "They are next to each other in the expression.",
      "They both contain variables."
    ],
    correct: 1, // Index of "They have the same variable..."
    explanation: "Like terms are terms that have the exact same variable part, meaning the same variables raised to the same exponents. For example, $3x^2y$ and $-5x^2y$ are like terms.",
    explanationType: 'math' // Use 'math' for BlockMath explanation in the template
  },
  {
    id: 'like-terms-example-1',
    question: "Which pair consists of like terms?",
    options: [
      "$2a$ and $2b$",
      "$x^2$ and $x^3$",
      "$3xy$ and $-xy$",
      "$5m^2n$ and $5mn^2$"
    ],
    correct: 2, // Index of "$3xy$ and $-xy$"
    explanation: "$3xy$ and $-xy$ both have the variables $x$ and $y$, each raised to the power of 1. The coefficients (3 and -1) can be different. $2a$ and $2b$ have different variables. $x^2$ and $x^3$ have the same variable but different powers. $5m^2n$ and $5mn^2$ have the same variables but the powers are swapped ($m^2n^1$ vs $m^1n^2$).",
    explanationType: 'math'
  },
  {
    id: 'like-terms-example-2',
    question: "Identify the like terms in the list: $4p$, $q$, $-2p$, $p^2$",
    options: [
      "$4p$ and $q$",
      "$4p$ and $p^2$",
      "$4p$ and $-2p$",
      "$q$ and $p^2$"
    ],
    correct: 2, // Index of "$4p$ and $-2p$"
    explanation: "$4p$ and $-2p$ are like terms because they both contain the variable $p$ raised to the first power ($p^1$). $q$ is a different variable, and $p^2$ is $p$ raised to a different power.",
    explanationType: 'math'
  },
  {
    id: 'like-terms-why',
    question: "Why is it important to identify like terms?",
    options: [
      "To make the expression look neater.",
      "To multiply terms together.",
      "To add or subtract terms correctly.",
      "To find the value of the variable."
    ],
    correct: 2, // Index of "To add or subtract terms correctly."
    explanation: "Like terms represent the same type of quantity. Just like you can only add 3 apples and 2 apples to get 5 apples, you can only add or subtract like terms in algebra (e.g., $3x + 2x = 5x$).",
    explanationType: 'text' // Use 'text' for plain text explanation
  },
  {
    id: 'like-terms-non-example',
    question: "Which of these is NOT a like term with $3x^2y$?",
    options: [
      "$-x^2y$",
      "$\\frac{1}{2}x^2y$",
      "$3xy^2$",
      "$7x^2y$"
    ],
    correct: 2, // Index of "$3xy^2$"
    explanation: "$3xy^2$ is not a like term with $3x^2y$ because the variables have different exponents. $3x^2y$ means $x$ is squared and $y$ is to the first power, while $3xy^2$ means $x$ is to the first power and $y$ is squared. The other options all have $x^2y^1$.",
    explanationType: 'math'
  }
];

const LikeTerms: React.FC = () => {
  // Define theme and icon specific to Like Terms
  // Note: Theme is unused in the provided MultipleChoice component, but kept for interface compatibility
  const likeTermsTheme = {
    from: 'from-blue-500', // Unused
    to: 'to-teal-400',    // Unused
    button: 'bg-blue-600', // Unused
    buttonHover: 'hover:shadow-lg hover:shadow-blue-500/30' // Unused
  };

  const likeTermsIcon = "🧮"; // Or use an icon component

  // Define key rules for the quiz sidebar
  const likeTermsRules = [
    "Like terms have identical variable parts.",
    "The coefficients (numbers) can be different.",
    "Only like terms can be added or subtracted.",
    "Example: $3x^2$ and $-5x^2$ are like terms.",
    "Example: $2a$ and $3b$ are NOT like terms."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleChoiceInteractiveComponent
        title="Understanding Like Terms"
        icon={likeTermsIcon}
        theme={likeTermsTheme} // Passed but not used
        rules={likeTermsRules}
        rulesTitle="Like Terms Rules:"
        questions={understandingLikeTermsQuestions}
        // Optional: onReset handler if needed
        // onReset={() => console.log('Like Terms Quiz Reset')}
      />
    </div>
  );
};

export default LikeTerms
