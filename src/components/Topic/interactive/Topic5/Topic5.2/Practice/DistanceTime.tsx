
import React from 'react';
import MultipleChoiceInteractiveComponent, { QuizQuestion } from '../../../Templates/MultipleChoiceInteractiveComponent'; // Adjust path as needed
import { renderTextWithMath } from '../../../../../../utils/renderTextWithMath';
import MotionGraphKeyFeatures from '../GraphViewers/MotionGraphKeyFeatures';

// Custom component to display the question and the TypesOfMotion graph
const MotionGraphDisplay: React.FC<{ question: QuizQuestion }> = ({ question }) => {
  // Note: Destructure 'question' from props
  return (
    <div className="flex flex-col items-center">
      {/* Display the question text */}

      {/* Display the graph */}
      <div className="w-full h-64 mb-4"> {/* Adjust height as needed */}
        <MotionGraphKeyFeatures graphType="distance-time" width={300} height={250} unitSize={35} showLabels={false} />
      </div>

       <div className="w-full mb-3">
        <h4 className="font-bold text-lg text-center text-white">
          {renderTextWithMath(question.question)}
        </h4>
      </div>
    </div>
  );
};

const DistanceTime: React.FC = () => {
  const questions: QuizQuestion[] = [
    {
      id: 'q1_at_rest',
      question: "Which line on the graph represents an object that is at rest?",
      options: ["Blue Line", "Green Line", "Amber Line", "Red Line"],
      correct: 0, // Blue Line
      explanation: "The blue horizontal line shows no change in distance over time, indicating the object is stationary.",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
    {
      id: 'q2_uniform_motion',
      question: "Which line represents an object moving with uniform motion (constant speed)?",
      options: ["Blue Line", "Green Line", "Amber Line", "Red Line"],
      correct: 1, // Green Line
      explanation: "The green straight, sloped line indicates a constant speed. The gradient (slope) of the line represents the speed.",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
    {
      id: 'q3_acceleration',
      question: "Which line shows an object undergoing acceleration?",
      options: ["Blue Line", "Green Line", "Amber Line", "Red Line"],
      correct: 2, // Amber Line
      explanation: "The amber curved line that gets steeper over time represents acceleration. This means the object's speed is increasing.",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
    {
      id: 'q4_deceleration',
      question: "Which line shows an object undergoing deceleration?",
      options: ["Blue Line", "Green Line", "Amber Line", "Red Line"],
      correct: 3, // Red Line
      explanation: "The red curved line that flattens out over time represents deceleration. This means the object's speed is decreasing.",
      optionType: 'text',
      CustomContentComponent: MotionGraphDisplay,
    },
    {
      id: 'q5_gradient_speed',
      question: "What does the gradient (slope) of a distance-time graph represent?",
      options: [
        "Acceleration",
        "Distance Traveled",
        "Speed",
        "Time Taken"
      ],
      correct: 2, // Speed
      explanation: "The gradient or slope of a distance-time graph gives the speed of the object. A steeper slope means a higher speed.",
      optionType: 'text',
      // For this question, you might want to show the graph too, or create a different custom component
      CustomContentComponent: MotionGraphDisplay, // Shows graph for all questions now
      // Or remove CustomContentComponent to use the default question display for this one
    },
  ];

  const rules = [
    "At Rest: Horizontal line (zero gradient)",
    "Uniform Motion: Straight sloped line (constant gradient)",
    "Acceleration: Curve getting steeper (increasing gradient)",
    "Deceleration: Curve flattening (decreasing gradient)",
    "Gradient of distance-time graph = Speed"
  ];

  return (
    <MultipleChoiceInteractiveComponent
      title="Motion Graphs Quiz"
      icon="🏃" // Runner emoji
      theme={{
        from: "from-blue-600",
        to: "to-indigo-700",
        button: "bg-gradient-to-r from-amber-500 to-orange-500",
        buttonHover: "hover:from-amber-600 hover:to-orange-600"
      }}
      rules={rules}
      questions={questions}
      rulesTitle="Motion Graph Rules:"
    />
  );
};

export default DistanceTime;