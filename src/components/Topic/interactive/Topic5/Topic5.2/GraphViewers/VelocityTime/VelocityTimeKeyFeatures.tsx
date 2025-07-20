// components/VelocityTimeGraphs/VelocityTimeKeyFeatures.tsx
import KeyFeaturesViewer from "../KeyFeaturesViewer";
import type { Feature } from "../KeyFeaturesViewer";

export default function VelocityTimeKeyFeatures({ showLegend = true, title = "" }) {
  const features: Feature[] = [
    {
      type: 'segment',
      start: [0, 2] as [number, number],
      end: [3, 2] as [number, number],
      color: "#e74c3c",
      label: "Horizontal Line",
      description: "Constant velocity (acceleration = 0)"
    },
    {
      type: 'segment',
      start: [3.5, 0] as [number, number],
      end: [6.5, 6] as [number, number],
      color: "#3498db",
      label: "Upward Slope",
      description: "Positive acceleration"
    },
    {
      type: 'segment',
      start: [7, 6] as [number, number],
      end: [10, 0] as [number, number],
      color: "#27ae60",
      label: "Downward Slope",
      description: "Negative acceleration (deceleration)"
    },

    {
  type: 'curve',
  points: Array.from({ length: 31 }, (_, i) => [7 + i * 0.1, 2 + Math.sin(i * 0.3)] as [number, number]),
  color: "#f39c12",
  label: "Curved Line",
  description: "Variable acceleration"
}
  ];

  return (
    <KeyFeaturesViewer
      title={title || "Key Features of Velocity-Time Graphs"}
      showLegend={showLegend}
      xLabel="Time (s)"
      yLabel="Velocity (m/s)"
      features={features}
    />
  );
}