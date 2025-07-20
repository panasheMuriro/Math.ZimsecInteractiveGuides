// // components/DistanceTimeGraphs/DistanceTimeKeyFeatures.tsx
// import KeyFeaturesViewer from "../GraphViewers/KeyFeaturesViewer";

// export default function DistanceTimeKeyFeatures({ showLegend = true, title = "" }) {
//   const features = [
//     {
//       points: [[0, 0], [3, 0]],
//       color: "#e74c3c",
//       label: "Horizontal Line",
//       description: "No motion (speed = 0)"
//     },
//     {
//       points: [[3.5, 0], [6.5, 6]],
//       color: "#3498db",
//       label: "Sloping Line",
//       description: "Constant speed"
//     },
//     {
//       points: Array.from({ length: 31 }, (_, i) => [7 + i * 0.1, 0.4 * (i * 0.1) ** 2]),
//       color: "#27ae60",
//       label: "Curved Line",
//       description: "Changing speed"
//     }
//   ];

//   return (
//     <KeyFeaturesViewer
//       title={title || "Key Features of Distance-Time Graphs"}
//       showLegend={showLegend}
//       xLabel="Time (s)"
//       yLabel="Distance (m)"
//       features={features}
//     />
//   );
// }


// components/DistanceTimeGraphs/DistanceTimeKeyFeatures.tsx
import KeyFeaturesViewer from "../KeyFeaturesViewer";
import type { Feature } from "../KeyFeaturesViewer";

export default function DistanceTimeKeyFeatures({ showLegend = true, title = "" }) {
  const features: Feature[] = [
    {
      type: 'segment',
      start: [0, 0],
      end: [3, 0],
      color: "#e74c3c",
      label: "Horizontal Line",
      description: "No motion (speed = 0)"
    },
    {
      type: 'segment',
      start: [3.5, 0],
      end: [6.5, 6],
      color: "#3498db",
      label: "Sloping Line",
      description: "Constant speed"
    },
    {
      type: 'curve',
      points: Array.from({ length: 31 }, (_, i) => [7 + i * 0.1, 0.4 * (i * 0.1) ** 2] as [number, number]),
      color: "#27ae60",
      label: "Curved Line",
      description: "Changing speed"
    }
  ];

  return (
    <KeyFeaturesViewer
      title={title || "Key Features of Distance-Time Graphs"}
      showLegend={showLegend}
      xLabel="Time (s)"
      yLabel="Distance (m)"
      features={features}
    />
  );
}