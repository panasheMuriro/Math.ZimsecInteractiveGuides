// components/DistanceTimeGraphs/DistanceTimeExampleViewer.tsx
import ExampleViewer from "../ExampleViewer";
import type { Segment } from "../ExampleViewer";

export default function DistanceTimeExampleViewer({ showCalculations = false }) {
  const segments: Segment[] = [
    {
      points: [[0, 0], [2, 5]] as [[number, number], [number, number]],
      color: "#3498db",
      label: "0-2s: Moving away",
      speedCalculation: showCalculations 
        ? "Speed = (5m - 0m)/(2s - 0s) = 2.5 m/s" 
        : undefined
    },
    {
      points: [[2, 5], [4, 5]] as [[number, number], [number, number]],
      color: "#e74c3c",
      label: "2-4s: Stationary",
      speedCalculation: showCalculations 
        ? "Speed = (5m - 5m)/(4s - 2s) = 0 m/s" 
        : undefined
    },
    {
      points: [[4, 5], [6, 0]] as [[number, number], [number, number]],
      color: "#27ae60",
      label: "4-6s: Returning",
      speedCalculation: showCalculations 
        ? "Speed = (0m - 5m)/(6s - 4s) = -2.5 m/s" 
        : undefined
    }
  ];

  return (
    <ExampleViewer
      title="Distance-Time Graph Example"
      xLabel="Time (s)"
      yLabel="Distance (m)"
      segments={segments}
      showCalculations={showCalculations}
    />
  );
}