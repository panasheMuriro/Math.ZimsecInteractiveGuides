import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../../Templates/MultipleChoiceInteractiveComponent';
import { renderTextWithMath } from '../../../../../../utils/renderTextWithMath';
import MotionGraphKeyFeatures from '../GraphViewers/MotionGraphKeyFeatures';

const MotionGraphDisplay: React.FC<{ question: QuizQuestion }> = ({ question }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-64 mb-4">
        <MotionGraphKeyFeatures graphType="velocity-time" width={300} height={250} unitSize={35} showLabels={false} />
      </div>

       <div className="w-full mb-3">
        <h4 className="font-bold text-lg text-center text-white">
          {renderTextWithMath(question.question)}
        </h4>
      </div>
    </div>
  );
};

const VelocityTime: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      id: 'q1_constant_velocity',
      question: "Which line on the graph represents an object moving with constant velocity?",
      options: ["Blue Line", "Green Line", "Purple Line", "Amber Line"],
      correct: 0,
      explanation: "The blue horizontal line shows a constant velocity of 3 m/s. The gradient is zero, indicating no acceleration.",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
    {
      id: 'q2_acceleration',
      question: "Which line shows an object undergoing constant positive acceleration?",
      options: ["Blue Line", "Green Line", "Purple Line", "Amber Line"],
      correct: 1,
      explanation: "The green straight, sloped line indicates constant acceleration. The velocity increases steadily from 0 to 6 m/s over 4 seconds.",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
    {
      id: 'q3_deceleration',
      question: "Which line shows an object undergoing constant deceleration?",
      options: ["Blue Line", "Green Line", "Purple Line", "Amber Line"],
      correct: 2,
      explanation: "The purple straight, sloped line with a negative gradient indicates constant deceleration. The velocity decreases steadily from 6 m/s to 0 m/s over 3 seconds.",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
    {
      id: 'q4_variable_acceleration',
      question: "Which line represents an object with changing (variable) acceleration?",
      options: ["Blue Line", "Green Line", "Purple Line", "Amber Line"],
      correct: 3,
      explanation: "The amber curved line shows velocity changing at a non-constant rate. The gradient (acceleration) is increasing over time.",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
    {
      id: 'q5_gradient_acceleration',
      question: "What does the gradient (slope) of a velocity-time graph represent?",
      options: [
        "Velocity",
        "Speed",
        "Distance",
        "Acceleration"
      ],
      correct: 3,
      explanation: "The gradient or slope of a velocity-time graph gives the acceleration of the object. A constant slope means constant acceleration, and a changing slope means changing acceleration.",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
  ];

  const rules = [
    "Constant Velocity: Horizontal line (zero gradient)",
    "Constant Acceleration: Straight sloped line (constant gradient)",
    "Constant Deceleration: Straight sloped line (negative constant gradient)",
    "Variable Acceleration: Curved line (changing gradient)",
    "Gradient of velocity-time graph = Acceleration"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Velocity-Time Graphs Quiz"
      icon="🚀"
      theme={{
        from: "from-green-600",
        to: "to-teal-700",
        button: "bg-gradient-to-r from-blue-500 to-indigo-500",
        buttonHover: "hover:from-blue-600 hover:to-indigo-600"
      }}
      rules={rules}
      questions={questions}
      rulesTitle="Velocity-Time Graph Rules:"
    />
  );
};

export default VelocityTime;