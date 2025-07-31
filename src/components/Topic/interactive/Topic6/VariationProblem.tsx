/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/interactives/VariationProblemsInteractive.tsx
import React from 'react';
import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../Templates/MultipleStepInteractiveComponent';
// import MultipleStepInteractiveComponent, { MultiStepQuestion } from '../../Templates/MultiStepInteractiveComponent';
// import { renderTextWithMath } from '../../utils/renderTextWithMath';

const VariationProblems: React.FC = () => {
  const questions: MultiStepQuestion[] = [
    {
      id: 'q1',
      title: 'Inverse Variation Problem',
      steps: [
        {
          id: 'q1_step1',
          question: "If $y$ varies inversely with $x$, and $y = 12$ when $x = 5$, what type of variation is this?",
          questionType: 'text',
          options: [
            "Inverse variation: $y = \\frac{k}{x}$",
            "Direct variation: $y = kx$",
            "Joint variation: $z = kxy$",
            "Partial variation: $y = a + bx$"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "The problem states '$y$ varies inversely with $x$', which means we use the inverse variation formula $y = \\frac{k}{x}$.",
          explanationType: 'text'
        },
        {
          id: 'q1_step2',
          question: "Using $y = 12$ when $x = 5$, find the constant $k$.",
          questionType: 'text',
          options: [
            "$k = 60$",
            "$k = 2.4$",
            "$k = 17$",
            "$k = 7$"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "Substitute the given values into $y = \\frac{k}{x}$: $12 = \\frac{k}{5}$. Multiply both sides by 5: $k = 12 \\times 5 = 60$.",
          explanationType: 'text',
          onCorrect: (selectedOptionIndex, setSharedValue) => {
            if (selectedOptionIndex === 0) {
              setSharedValue('q1_k', 60);
            }
          }
        },
        {
          id: 'q1_step3',
          question: "Write the complete equation with the found constant.",
          questionType: 'text',
          options: [
            "$y = \\frac{60}{x}$",
            "$y = 60x$",
            "$y = \\frac{x}{60}$",
            "$y = 60 + x$"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "Substitute $k = 60$ into the inverse variation formula: $y = \\frac{k}{x} = \\frac{60}{x}$.",
          explanationType: 'text'
        },
        {
          id: 'q1_step4',
          question: "Find $y$ when $x = 8$ using the complete equation.",
          questionType: 'text',
          options: [
            "$y = 7.5$",
            "$y = 480$",
            "$y = 0.133$",
            "$y = 14$"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "Substitute $x = 8$ into $y = \\frac{60}{x}$: $y = \\frac{60}{8} = 7.5$.",
          explanationType: 'text'
        }
      ]
    },
    {
      id: 'q2',
      title: 'Direct Variation Problem',
      steps: [
        {
          id: 'q2_step1',
          question: "The distance traveled varies directly with time at constant speed. If a car travels 240 km in 4 hours, identify the variation type.",
          questionType: 'text',
          options: [
            "Direct variation: $d = kt$",
            "Inverse variation: $d = \\frac{k}{t}$",
            "Joint variation: $d = kt^2$",
            "Partial variation: $d = a + bt$"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "Since distance increases proportionally with time at constant speed, this is direct variation: $d = kt$ where $k$ represents speed.",
          explanationType: 'text'
        },
        {
          id: 'q2_step2',
          question: "Find the constant of variation (speed) using $d = 240$ km when $t = 4$ hours.",
          questionType: 'text',
          options: [
            "$k = 60$ km/h",
            "$k = 960$ km·h",
            "$k = 0.0167$ h/km",
            "$k = 244$ km/h"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "Substitute into $d = kt$: $240 = k \\times 4$. Solve for $k$: $k = \\frac{240}{4} = 60$ km/h.",
          explanationType: 'text',
          onCorrect: (selectedOptionIndex, setSharedValue) => {
            if (selectedOptionIndex === 0) {
              setSharedValue('q2_k', 60);
            }
          }
        },
        {
          id: 'q2_step3',
          question: "Write the complete equation for distance as a function of time.",
          questionType: 'text',
          options: [
            "$d = 60t$",
            "$d = \\frac{60}{t}$",
            "$d = 60 + t$",
            "$d = \\frac{t}{60}$"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "Substituting $k = 60$ into $d = kt$ gives the complete equation: $d = 60t$.",
          explanationType: 'text'
        },
        {
          id: 'q2_step4',
          question: "How far will the car travel in 7 hours at the same speed?",
          questionType: 'text',
          options: [
            "$d = 420$ km",
            "$d = 8.57$ km",
            "$d = 0.117$ km",
            "$d = 67$ km"
          ],
          optionType: 'text',
          correct: 0,
          explanation: "Using $d = 60t$ with $t = 7$: $d = 60 \\times 7 = 420$ km.",
          explanationType: 'text'
        }
      ]
    }
  ];

  const rules = [
    "Step 1: Identify the variation type from the problem statement",
    "Step 2: Use given values to find the constant ($k$, $a$, or $b$)",
    "Step 3: Write the complete equation by substituting the constant",
    "Step 4: Use the equation to solve for unknown values",
    "Always include units in your final answer when applicable"
  ];

  const renderSharedValuesSummary = (sharedValues: { [key: string]: any }) => {
    return (
      <div className="space-y-2">
        {sharedValues['q1_k'] !== undefined && (
          <p>• Inverse variation constant: $k = {sharedValues['q1_k']}$</p>
        )}
        {sharedValues['q2_k'] !== undefined && (
          <p>• Direct variation constant (speed): $k = {sharedValues['q2_k']}$ km/h</p>
        )}
      </div>
    );
  };

  return (
    <MultipleStepInteractiveComponent
      title="Variation Problems"
      icon="🧮"
      theme={{
        from: "from-rose-500",
        to: "to-pink-600",
        button: "bg-rose-600 hover:bg-rose-700",
        buttonHover: "hover:shadow-rose-500/30"
      }}
      rules={rules}
      questions={questions}
      renderSharedValuesSummary={renderSharedValuesSummary}
      rulesTitle="Problem-Solving Steps:"
    />
  );
};

export default VariationProblems;