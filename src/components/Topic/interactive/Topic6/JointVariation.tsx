// src/components/interactives/JointVariationInteractive.tsx
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../Templates/MultipleChoiceInteractiveComponent';

const JointVariation: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      question: "Which equation represents joint variation?",
      options: [
        "$z = kxy$",
        "$z = kx + y$",
        "$z = \\frac{k}{xy}$",
        "$z = kx - y$"
      ],
      correct: 0,
      explanation: "Joint variation is represented by $z = kxy$ where $z$ varies jointly with both $x$ and $y$. This means $z$ is directly proportional to the product of $x$ and $y$.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "If $z$ varies jointly with $x$ and $y$, and $z = 24$ when $x = 3$ and $y = 2$, what is the constant $k$?",
      options: [
        "$k = 4$",
        "$k = 6$",
        "$k = 12$",
        "$k = 8$"
      ],
      correct: 0,
      explanation: "Using the joint variation formula $z = kxy$, we substitute the given values: $24 = k \\cdot 3 \\cdot 2$. Solving for $k$: $24 = 6k$, so $k = \\frac{24}{6} = 4$.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "Which real-world example shows joint variation?",
      options: [
        "Area of a rectangle: $A = lw$",
        "Circumference of a circle: $C = 2\\pi r$",
        "Speed and time for fixed distance: $v = \\frac{d}{t}$",
        "Simple interest: $I = Prt$"
      ],
      correct: 0,
      explanation: "The area of a rectangle varies jointly with its length and width since $A = lw$. Both length and width directly affect the area when they change.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "In the equation $z = kx^2y$, how does $z$ change if $x$ is doubled and $y$ remains constant?",
      options: [
        "$z$ becomes four times larger",
        "$z$ doubles",
        "$z$ remains the same",
        "$z$ becomes eight times larger"
      ],
      correct: 0,
      explanation: "If $x$ is doubled in $z = kx^2y$, then $z = k(2x)^2y = k(4x^2)y = 4(kx^2y) = 4z$. Therefore, $z$ becomes four times larger when $x$ is doubled.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    },
    {
      question: "What is the formula to find the constant $k$ in joint variation $z = kxy$?",
      options: [
        "$k = \\frac{z}{xy}$",
        "$k = zxy$",
        "$k = \\frac{xy}{z}$",
        "$k = z + xy$"
      ],
      correct: 0,
      explanation: "To find the constant of joint variation, rearrange $z = kxy$ to solve for $k$: $k = \\frac{z}{xy}$.",
      questionType: "text",
      optionType: "text",
      explanationType: "text"
    }
  ];

  const rules = [
    "Joint variation: $z = kxy$ (z varies jointly with x and y)",
    "More complex form: $z = kx^m y^n$ (with powers)",
    "To find constant $k$: $k = \\frac{z}{xy}$",
    "All variables affect the dependent variable simultaneously",
    "Real examples: area, volume, kinetic energy formulas",
    "When one variable increases, z increases (assuming positive k)"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Joint Variation"
      icon="🔗"
      theme={{
        from: "from-indigo-500",
        to: "to-purple-600",
        button: "bg-indigo-600 hover:bg-indigo-700",
        buttonHover: "hover:shadow-indigo-500/30"
      }}
      rules={rules}
      questions={questions}
      rulesTitle="Joint Variation Rules:"
    />
  );
};

export default JointVariation;