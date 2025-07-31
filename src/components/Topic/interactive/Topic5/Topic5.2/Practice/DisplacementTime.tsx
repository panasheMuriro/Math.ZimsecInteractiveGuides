import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../../Templates/MultipleChoiceInteractiveComponent';
import { renderTextWithMath } from '../../../../../../utils/renderTextWithMath';
import MotionGraphKeyFeatures from '../GraphViewers/MotionGraphKeyFeatures';

const MotionGraphDisplay: React.FC<{ question: QuizQuestion }> = ({ question }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-64 mb-4">
        <MotionGraphKeyFeatures graphType="displacement-time" width={300} height={250} unitSize={35} showLabels={false} />
      </div>

       <div className="w-full mb-3">
        <h4 className="font-bold text-lg text-center text-white">
          {renderTextWithMath(question.question)}
        </h4>
      </div>
    </div>
  );
};

const DisplacementTime: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      id: 'q1_moving_forward',
      question: "Which line shows the object moving forward with a positive velocity?",
      options: ["Green Line", "Blue Line", "Red Line", "Purple Line"],
      correct: 0,
      explanation: "The green sloped line from (0,0) to (2,4) has a positive gradient, indicating positive velocity and forward motion.",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
    {
      id: 'q2_stationary',
      question: "Which line represents the object being stationary?",
      options: ["Green Line", "Blue Line", "Red Line", "Purple Line"],
      correct: 1,
      explanation: "The blue horizontal line at y=4 shows constant displacement, meaning zero velocity and the object is stationary.",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
    {
      id: 'q3_moving_backward',
      question: "Which line shows the object moving backward with a negative velocity?",
      options: ["Green Line", "Blue Line", "Red Line", "Purple Line"],
      correct: 2,
      explanation: "The red sloped line from (4,4) to (6,-2) has a negative gradient, indicating negative velocity and backward motion.",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
    {
      id: 'q4_at_start_position',
      question: "Which line shows the object at its starting position (zero displacement)?",
      options: ["Green Line", "Blue Line", "Red Line", "Purple Line"],
      correct: 3,
      explanation: "The purple horizontal line along the x-axis (y=0) shows the object has zero displacement, meaning it is at its starting position.",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
    {
      id: 'q5_gradient_velocity',
      question: "What does the gradient (slope) of a displacement-time graph represent?",
      options: [
        "Speed",
        "Distance",
        "Acceleration",
        "Velocity"
      ],
      correct: 3,
      explanation: "The gradient or slope of a displacement-time graph gives the velocity of the object. A positive slope means positive velocity (forward), and a negative slope means negative velocity (backward).",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
  ];

  const rules = [
    "Moving Forward: Line with positive gradient (above x-axis initially)",
    "Stationary: Horizontal line (zero gradient)",
    "Moving Backward: Line with negative gradient (going down)",
    "At Start Position: Line on the x-axis (zero displacement)",
    "Gradient of displacement-time graph = Velocity"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Displacement-Time Graphs Quiz"
      icon="📍"
      theme={{
        from: "from-purple-600",
        to: "to-pink-700",
        button: "bg-gradient-to-r from-green-500 to-teal-500",
        buttonHover: "hover:from-green-600 hover:to-teal-600"
      }}
      rules={rules}
      questions={questions}
      rulesTitle="Displacement-Time Graph Rules:"
    />
  );
};

export default DisplacementTime;