import GenericMotionQuiz from "./GenericMotionQuiz";

const velocityGraphExamples = [
  {
    points: [[0, 5], [4, 5]] as [number, number][],
    correctAnswer: "stationary" as const,
    description: "Constant velocity (zero acceleration)"
  },
  {
    points: [[0, 0], [4, 8]] as [number, number][],
    correctAnswer: "uniform motion" as const,
    description: "Constant acceleration (straight line)"
  },
  {
    points: [[0, 0], [1, 1], [2, 3], [3, 6], [4, 10]] as [number, number][],
    correctAnswer: "acceleration" as const,
    description: "Increasing acceleration (curve gets steeper)"
  },
  {
    points: [[0, 10], [1, 7], [2, 5], [3, 3.5], [4, 3]] as [number, number][],
    correctAnswer: "deceleration" as const,
    description: "Decreasing velocity (curve flattens)"
  }
];

export default function VelocityTime() {
  return (
    <GenericMotionQuiz
      graphType="velocity"
      graphExamples={velocityGraphExamples}
      yAxisLabel="Velocity (m/s)"
      motionTypes={['stationary', 'uniform motion', 'acceleration', 'deceleration']}
      boundingBox={[-1, 11, 5, -2]}
    />
  );
}