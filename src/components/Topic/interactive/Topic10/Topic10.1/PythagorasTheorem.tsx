/* eslint-disable @typescript-eslint/no-explicit-any */

import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';
import { PythagoreanTriangleDiagram } from '../Viewers/PythagoreanTriangleDiagram';


const PythagorasTheorem= () => {
  // Define the questions and steps
  const questions: MultiStepQuestion[] = [
    {
      id: 'q1',
      title: 'Understanding the Formula',
      steps: [
        {
          id: 'q1s1',
          question: "What is the formula for Pythagoras' Theorem?",
          questionType: 'text',
          options: [
            "$a + b = c$",
            "$a^2 \\times b^2 = c^2$",
            "$a^2 + b^2 = c^2$",
            "$a^2 - b^2 = c^2$"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "The theorem states that in a right-angled triangle, the square of the hypotenuse ($c$) is equal to the sum of the squares of the other two sides ($a$ and $b$).",
          explanationType: 'text',
          CustomContentComponent: PythagoreanTriangleDiagram // Show diagram for this step
        },
        {
          id: 'q1s2',
          question: "In the formula $a^2 + b^2 = c^2$, which side is always the hypotenuse?",
          questionType: 'text',
          options: [
            "Side $a$",
            "Side $b$",
            "Side $c$",
            "It depends on the triangle"
          ],
          optionType: 'text',
          correct: 2,
          explanation: "By convention, $c$ represents the hypotenuse, which is the longest side opposite the right angle.",
          explanationType: 'text',
        }
      ]
    },
    {
      id: 'q2',
      title: 'Applying the Formula',
      steps: [
        {
          id: 'q2s1',
          question: "If $a = 3$ and $b = 4$, what is $c$?",
          questionType: 'text',
          options: ["$5$", "$6$", "$7$", "$8$"],
          optionType: 'text',
          correct: 0,
          explanation: "Using $a^2 + b^2 = c^2$, we get $3^2 + 4^2 = 9 + 16 = 25$. Therefore, $c^2 = 25$, so $c = \\sqrt{25} = 5$.",
          explanationType: 'text',
          CustomContentComponent: PythagoreanTriangleDiagram // Show diagram for this step
        },
        {
          id: 'q2s2',
          question: "If $c = 13$ and $a = 5$, what is $b$?",
          questionType: 'text',
          options: ["$10$", "$12$", "$14$", "$15$"],
          optionType: 'text',
          correct: 1,
          explanation: "Rearranging the formula: $b^2 = c^2 - a^2$. Substituting values: $b^2 = 13^2 - 5^2 = 169 - 25 = 144$. Therefore, $b = \\sqrt{144} = 12$.",
          explanationType: 'text',
        }
      ]
    },
    {
      id: 'q3',
      title: 'Real-World Application',
      steps: [
        {
          id: 'q3s1',
          question: "A ladder is leaning against a wall. The base of the ladder is 6 feet from the wall, and the top of the ladder reaches 8 feet up the wall. How long is the ladder?",
          questionType: 'text',
          options: ["$9$ feet", "$10$ feet", "$12$ feet", "$14$ feet"],
          optionType: 'text',
          correct: 1,
          explanation: "This forms a right triangle where the ladder is the hypotenuse. Using $a^2 + b^2 = c^2$, with $a=6$ and $b=8$: $6^2 + 8^2 = 36 + 64 = 100$. So, $c^2 = 100$, and $c = \\sqrt{100} = 10$ feet.",
          explanationType: 'text',
          CustomContentComponent: PythagoreanTriangleDiagram // Show diagram for this step too
        }
      ]
    }
  ];

  // Define the component props
  const componentProps = {
    title: "Pythagoras Theorem Quiz",
    icon: "📐", // Or an SVG icon component
    theme: {
      from: "from-[#670D2F]",
      to: "to-[#A53860]",
      button: "bg-amber-500",
      buttonHover: "hover:bg-amber-600",
    },
    rules: [
      "Identify the hypotenuse ($c$) correctly.",
      "Substitute values into $a^2 + b^2 = c^2$.",
      "Solve for the unknown side by taking the square root."
    ],
    rulesTitle: "Key Rules:",
    questions: questions,
    initialSharedValues: {}, // Not used in this example
    renderSharedValuesSummary: undefined, // Not used in this example
    onReset: undefined, // Optional reset handler
  };

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent {...componentProps} />
    </div>
  );
};

export default PythagorasTheorem;