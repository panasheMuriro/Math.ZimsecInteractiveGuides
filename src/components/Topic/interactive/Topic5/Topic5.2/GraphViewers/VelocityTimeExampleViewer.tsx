// components/VelocityTimeGraphs/VelocityTimeExampleViewer.tsx
import ExampleViewer from "./ExampleViewer";
import type { Segment } from "./ExampleViewer";

export default function VelocityTimeExampleViewer({ showCalculations = false }) {
  const segments: Segment[] = [
    {
      points: [[0, 0], [2, 5]] as [[number, number], [number, number]],
      color: "#3498db",
      label: "0-2s: Accelerating",
      speedCalculation: showCalculations 
        ? "Acceleration = (5m/s - 0m/s)/(2s - 0s) = 2.5 m/s²" 
        : undefined
    },
    {
      points: [[2, 5], [4, 5]] as [[number, number], [number, number]],
      color: "#e74c3c",
      label: "2-4s: Constant velocity",
      speedCalculation: showCalculations 
        ? "Acceleration = (5m/s - 5m/s)/(4s - 2s) = 0 m/s²" 
        : undefined
    },
    {
      points: [[4, 5], [6, 0]] as [[number, number], [number, number]],
      color: "#27ae60",
      label: "4-6s: Decelerating",
      speedCalculation: showCalculations 
        ? "Acceleration = (0m/s - 5m/s)/(6s - 4s) = -2.5 m/s²" 
        : undefined
    }
  ];

  return (
    <ExampleViewer
      title="Velocity-Time Graph Example (Matched to Distance-Time)"
      xLabel="Time (s)"
      yLabel="Velocity (m/s)"
      segments={segments}
      showCalculations={showCalculations}
    />
  );
}