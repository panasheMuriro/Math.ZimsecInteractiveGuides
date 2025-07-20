// /* eslint-disable @typescript-eslint/no-explicit-any */

import GenericMotionQuiz from "./GenericMotionQuiz";


const distanceGraphExamples = [
  {
    points: [[0, 3], [4, 3]] as [number, number][],
    correctAnswer: "stationary" as const,
    description: "Object remains at the same position over time"
  },
  {
    points: [[0, 0], [4, 8]] as [number, number][],
    correctAnswer: "uniform motion" as const,
    description: "Constant speed (straight line with constant slope)"
  },
  {
    points: [[0, 0], [1, 1], [2, 3], [3, 6], [4, 10]] as [number, number][],
    correctAnswer: "acceleration" as const,
    description: "Increasing speed (curve gets steeper over time)"
  },
  {
    points: [[0, 10], [1, 8], [2, 6.5], [3, 5.5], [4, 5]] as [number, number][],
    correctAnswer: "deceleration" as const,
    description: "Decreasing speed (curve flattens over time)"
  }
];

export default function DistanceTime() {
  return (
    <GenericMotionQuiz
      graphType="distance"
      graphExamples={distanceGraphExamples}
      yAxisLabel="Distance (m)"
      motionTypes={['stationary', 'uniform motion', 'acceleration', 'deceleration']}
      boundingBox={[-1, 11, 5, -2]}
    />
  );
}