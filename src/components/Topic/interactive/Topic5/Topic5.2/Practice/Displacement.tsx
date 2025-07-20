import GenericMotionQuiz from "./GenericMotionQuiz";

const displacementGraphExamples = [
  // Stationary above zero
  {
    points: [[0, 3], [4, 3]] as [number, number][],
    correctAnswer: "stationary" as const,
    description: "Object remains at constant positive displacement"
  },
  // Stationary at zero
  {
    points: [[0, 0], [4, 0]] as [number, number][],
    correctAnswer: "stationary" as const,
    description: "Object remains at origin (zero displacement)"
  },
  // Constant positive velocity
  {
    points: [[0, -2], [4, 4]] as [number, number][],
    correctAnswer: "uniform motion" as const,
    description: "Constant positive velocity (positive gradient)"
  },
  // Constant negative velocity
  {
    points: [[0, 4], [4, -2]] as [number, number][],
    correctAnswer: "uniform motion" as const,
    description: "Constant negative velocity (negative gradient)"
  },
  // Accelerating
  {
    points: [[0, 0], [1, 1], [2, 3], [3, 6], [4, 10]] as [number, number][],
    correctAnswer: "acceleration" as const,
    description: "Increasing positive velocity (curve getting steeper)"
  },
  // Decelerating
  {
    points: [[0, 0], [1, 4], [2, 6], [3, 7], [4, 7.5]] as [number, number][],
    correctAnswer: "deceleration" as const,
    description: "Decreasing positive velocity (curve flattening)"
  },
  // Changing direction (parabolic)
  {
    points: [[0, 0], [1, 3], [2, 4], [3, 3], [4, 0]] as [number, number][],
    correctAnswer: "changing direction" as const,
    description: "Object changes direction (parabolic motion)"
  }
];

export default function DisplacementTimeQuiz() {
  return (
    <GenericMotionQuiz
      graphType="displacement"
      graphExamples={displacementGraphExamples}
      yAxisLabel="Displacement (m)"
      motionTypes={[
        'stationary', 
        'uniform motion', 
        'acceleration', 
        'deceleration',
        'changing direction'
      ]}
      boundingBox={[-1, 12, 5, -3]}  // Adjusted for negative values
    />
  );
}