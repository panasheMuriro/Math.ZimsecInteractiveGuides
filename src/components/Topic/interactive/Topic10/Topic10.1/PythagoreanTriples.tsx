import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultipleStepInteractiveComponent';

const PythagoreanTriples: React.FC = () => {
  const questions: MultiStepQuestion[] = [
    {
      id: 'q1',
      title: 'Identifying Pythagorean Triples',
      steps: [
        {
          id: 'q1-step1',
          question: 'Which of the following is a Pythagorean triple?',
          questionType: 'text',
          options: [
            '$(1, 2, 3)$',
            '$(6, 8, 10)$',
            '$(5, 6, 7)$',
            '$(2, 4, 5)$'
          ],
          optionType: 'text',
          correct: 1,
          explanation: 'A Pythagorean triple satisfies $a^2 + b^2 = c^2$. For $(6, 8, 10)$: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$.'
        },
        {
          id: 'q1-step2',
          question: 'Is $(9, 12, 15)$ a Pythagorean triple?',
          questionType: 'text',
          options: [
            'Yes',
            'No'
          ],
          optionType: 'text',
          correct: 0,
          explanation: 'Check if $9^2 + 12^2 = 15^2$. $81 + 144 = 225$ and $15^2 = 225$. Since they are equal, it is a Pythagorean triple.'
        }
      ]
    },
    {
      id: 'q2',
      title: 'Verifying the Formula',
      steps: [
        {
          id: 'q2-step1',
          question: 'Using the formula $a = m^2 - n^2$, $b = 2mn$, $c = m^2 + n^2$, find the triple for $m=3$, $n=2$.',
          questionType: 'text',
          options: [
            '$(5, 12, 13)$',
            '$(9, 12, 15)$',
            '$(12, 5, 13)$',
            '$(13, 12, 5)$'
          ],
          optionType: 'text',
          correct: 0,
          explanation: 'Calculate: $a = 3^2 - 2^2 = 9 - 4 = 5$. $b = 2 \\cdot 3 \\cdot 2 = 12$. $c = 3^2 + 2^2 = 9 + 4 = 13$. The triple is $(5, 12, 13)$.'
        },
        {
          id: 'q2-step2',
          question: 'Using the formula with $m=4$, $n=1$, what is the value of $c$?',
          questionType: 'text',
          options: [
            '$15$',
            '$17$',
            '$8$',
            '$16$'
          ],
          optionType: 'text',
          correct: 1,
          explanation: 'Calculate $c = m^2 + n^2 = 4^2 + 1^2 = 16 + 1 = 17$.'
        }
      ]
    },
    {
      id: 'q3',
      title: 'Application Problem',
      steps: [
        {
          id: 'q3-step1',
          question: 'A rectangular garden has sides of length $a$ and $b$, and its diagonal is $c$. Which equation relates these lengths?',
          questionType: 'text',
          options: [
            '$a + b = c$',
            '$a^2 + b^2 = c^2$',
            '$a \\cdot b = c^2$',
            '$a^2 - b^2 = c^2$'
          ],
          optionType: 'text',
          correct: 1,
          explanation: 'By the Pythagorean Theorem, for a right-angled triangle (formed by the sides and diagonal of the rectangle), the sum of the squares of the two shorter sides equals the square of the hypotenuse (diagonal).'
        },
        {
          id: 'q3-step2',
          question: 'If the sides of the garden are $5$ meters and $12$ meters, how long is the diagonal?',
          questionType: 'text',
          options: [
            '$13$ meters',
            '$17$ meters',
            '$10$ meters',
            '$15$ meters'
          ],
          optionType: 'text',
          correct: 0,
          explanation: 'Use the Pythagorean Theorem: $c^2 = a^2 + b^2 = 5^2 + 12^2 = 25 + 144 = 169$. Therefore, $c = \\sqrt{169} = 13$ meters. The triple $(5, 12, 13)$ is a Pythagorean triple.'
        }
      ]
    }
  ];

  const rules = [
    "A Pythagorean triple consists of three positive integers $(a, b, c)$ such that $a^2 + b^2 = c^2$.",
    "The formula $a = m^2 - n^2$, $b = 2mn$, $c = m^2 + n^2$ (where $m > n > 0$) can generate Pythagorean triples.",
    "The Pythagorean Theorem states that in a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides."
  ];

  return (
    <MultipleStepInteractiveComponent
      title="Pythagorean Triples Quiz"
      icon="📐"
      theme={{
        from: "from-blue-600",
        to: "to-indigo-700",
        button: "bg-amber-400",
        buttonHover: "bg-amber-400"
      }}
      rules={rules}
      questions={questions}
    />
  );
};

export default PythagoreanTriples;