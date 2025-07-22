// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from "react";

// const BasicConstructions: React.FC = () => {
//   const [construction, setConstruction] = useState<
//     "perpendicular" | "parallel" | "line-segment" | "copy-angle" | "bisect-angle" | "construct-60" | "construct-30" | "construct-90"
//   >("perpendicular");
//   const [step, setStep] = useState<number>(0);

//   const constructions: { [key: string]: { steps: string[] } } = {
//     perpendicular: {
//       steps: [
//         "Draw a line and mark a point above it.",
//         "Use compass from point to intersect line at two points.",
//         "Draw arcs from these points to intersect inside.",
//         "Draw perpendicular line through the intersection."
//       ]
//     },
//     parallel: {
//       steps: [
//         "Draw a line and a point not on it.",
//         "Draw a transversal through the point.",
//         "Copy an angle from the line to the point.",
//         "Draw the parallel line through the point."
//       ]
//     },
//     "line-segment": {
//       steps: [
//         "Mark a point for the start of the segment.",
//         "Use compass to measure the desired length.",
//         "Draw an arc from the point.",
//         "Mark the endpoint where the arc intersects."
//       ]
//     },
//     "copy-angle": {
//       steps: [
//         "Draw an angle and a new ray.",
//         "Use compass to measure the angle's arc.",
//         "Transfer the arc to the new ray.",
//         "Draw the copied angle."
//       ]
//     },
//     "bisect-angle": {
//       steps: [
//         "Draw an angle.",
//         "Use compass to draw an arc inside from vertex.",
//         "Draw arcs from arc intersections to meet inside.",
//         "Draw the bisector through the intersection."
//       ]
//     },
//     "construct-60": {
//       steps: [
//         "Draw a line segment.",
//         "Use compass to draw arc from one endpoint.",
//         "Draw arc from other endpoint to intersect.",
//         "Connect intersection to form equilateral triangle."
//       ]
//     },
//     "construct-30": {
//       steps: [
//         "Construct a 60° angle.",
//         "Draw an arc inside the 60° angle from vertex.",
//         "Draw arcs from arc intersections to meet.",
//         "Draw the bisector for 30° angle."
//       ]
//     },
//     "construct-90": {
//       steps: [
//         "Draw a line and mark a point on it.",
//         "Draw arcs from point to intersect line.",
//         "Draw arcs from intersections to meet above.",
//         "Draw perpendicular line through intersection."
//       ]
//     }
//   };

//   const handleConstructionChange = (
//     newConstruction: "perpendicular" | "parallel" | "line-segment" | "copy-angle" | "bisect-angle" | "construct-60" | "construct-30" | "construct-90"
//   ) => {
//     setConstruction(newConstruction);
//     setStep(0);
//   };

//   const handleNextStep = () => {
//     if (step < constructions[construction].steps.length - 1) {
//       setStep(step + 1);
//     }
//   };

//   const handlePrevStep = () => {
//     if (step > 0) {
//       setStep(step - 1);
//     }
//   };

//   // SVG visualization logic for each construction
//   const renderConstruction = () => {
//     switch (construction) {
//       case "perpendicular":
//         return (
//           <>
//             {/* Base line */}
//             <line x1="50" y1="150" x2="250" y2="150" stroke="black" strokeWidth="2" />
//             {/* Point above */}
//             {step >= 0 && <circle cx="150" cy="50" r="3" fill="red" />}
//             {/* Compass arcs */}
//             {step >= 1 && (
//               <>
//                 <circle cx="150" cy="50" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
//                 <circle cx="100" cy="150" r="3" fill="blue" />
//                 <circle cx="200" cy="150" r="3" fill="blue" />
//               </>
//             )}
//             {step >= 2 && (
//               <>
//                 <circle cx="100" cy="150" r="40" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
//                 <circle cx="200" cy="150" r="40" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
//                 <circle cx="150" cy="110" r="3" fill="blue" />
//               </>
//             )}
//             {step >= 3 && <line x1="150" y1="50" x2="150" y2="150" stroke="red" strokeWidth="2" />}
//           </>
//         );
//       case "parallel":
//         return (
//           <>
//             {/* Base line */}
//             <line x1="50" y1="150" x2="250" y2="150" stroke="black" strokeWidth="2" />
//             {/* Point not on line */}
//             {step >= 0 && <circle cx="150" cy="50" r="3" fill="red" />}
//             {/* Transversal */}
//             {step >= 1 && <line x1="100" y1="150" x2="150" y2="50" stroke="black" strokeWidth="2" />}
//             {step >= 2 && (
//               <>
//                 <path d="M 120 130 A 20 20 0 0 1 140 130" stroke="blue" strokeWidth="1" fill="none" strokeDasharray="5" />
//                 <path d="M 130 70 A 20 20 0 0 1 150 70" stroke="blue" strokeWidth="1" fill="none" strokeDasharray="5" />
//               </>
//             )}
//             {step >= 3 && <line x1="50" y1="50" x2="250" y2="50" stroke="red" strokeWidth="2" />}
//           </>
//         );
//       case "line-segment":
//         return (
//           <>
//             {/* Starting point */}
//             {step >= 0 && <circle cx="100" cy="100" r="3" fill="red" />}
//             {/* Compass measurement */}
//             {step >= 1 && <circle cx="100" cy="100" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />}
//             {step >= 2 && <circle cx="150" cy="100" r="3" fill="blue" />}
//             {step >= 3 && <line x1="100" y1="100" x2="150" y2="100" stroke="red" strokeWidth="2" />}
//           </>
//         );
//       case "copy-angle":
//         return (
//           <>
//             {/* Original angle */}
//             <line x1="100" y1="150" x2="150" y2="150" stroke="black" strokeWidth="2" />
//             <line x1="150" y1="150" x2="200" y2="100" stroke="black" strokeWidth="2" />
//             {/* New ray */}
//             {step >= 0 && <line x1="100" y1="50" x2="150" y2="50" stroke="black" strokeWidth="2" />}
//             {step >= 1 && (
//               <path d="M 130 130 A 20 20 0 0 1 150 130" stroke="blue" strokeWidth="1" fill="none" strokeDasharray="5" />
//             )}
//             {step >= 2 && (
//               <path d="M 130 70 A 20 20 0 0 1 150 70" stroke="blue" strokeWidth="1" fill="none" strokeDasharray="5" />
//             )}
//             {step >= 3 && <line x1="150" y1="50" x2="200" y2="0" stroke="red" strokeWidth="2" />}
//           </>
//         );
//       case "bisect-angle":
//         return (
//           <>
//             {/* Angle */}
//             <line x1="100" y1="150" x2="150" y2="100" stroke="black" strokeWidth="2" />
//             <line x1="150" y1="100" x2="200" y2="150" stroke="black" strokeWidth="2" />
//             {step >= 1 && (
//               <path d="M 130 120 A 20 20 0 0 1 170 120" stroke="blue" strokeWidth="1" fill="none" strokeDasharray="5" />
//             )}
//             {step >= 2 && (
//               <>
//                 <circle cx="130" cy="120" r="15" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
//                 <circle cx="170" cy="120" r="15" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
//                 <circle cx="150" cy="120" r="3" fill="blue" />
//               </>
//             )}
//             {step >= 3 && <line x1="150" y1="100" x2="150" y2="150" stroke="red" strokeWidth="2" />}
//           </>
//         );
//       case "construct-60":
//         return (
//           <>
//             {/* Line segment */}
//             <line x1="100" y1="150" x2="150" y2="150" stroke="black" strokeWidth="2" />
//             {step >= 1 && (
//               <circle cx="100" cy="150" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
//             )}
//             {step >= 2 && (
//               <>
//                 <circle cx="150" cy="150" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
//                 <circle cx="125" cy="107" r="3" fill="blue" />
//               </>
//             )}
//             {step >= 3 && (
//               <>
//                 <line x1="100" y1="150" x2="125" y2="107" stroke="red" strokeWidth="2" />
//                 <line x1="125" y1="107" x2="150" y2="150" stroke="red" strokeWidth="2" />
//               </>
//             )}
//           </>
//         );
//       case "construct-30":
//         return (
//           <>
//             {/* 60° angle */}
//             <line x1="100" y1="150" x2="150" y2="150" stroke="black" strokeWidth="2" />
//             <line x1="150" y1="150" x2="125" y2="107" stroke="black" strokeWidth="2" />
//             {step >= 1 && (
//               <path d="M 130 130 A 20 20 0 0 1 150 130" stroke="blue" strokeWidth="1" fill="none" strokeDasharray="5" />
//             )}
//             {step >= 2 && (
//               <>
//                 <circle cx="130" cy="130" r="15" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
//                 <circle cx="150" cy="130" r="15" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
//                 <circle cx="140" cy="130" r="3" fill="blue" />
//               </>
//             )}
//             {step >= 3 && <line x1="150" y1="150" x2="140" y2="130" stroke="red" strokeWidth="2" />}
//           </>
//         );
//       case "construct-90":
//         return (
//           <>
//             {/* Base line and point */}
//             <line x1="50" y1="150" x2="250" y2="150" stroke="black" strokeWidth="2" />
//             {step >= 0 && <circle cx="150" cy="150" r="3" fill="red" />}
//             {step >= 1 && (
//               <>
//                 <circle cx="150" cy="150" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
//                 <circle cx="100" cy="150" r="3" fill="blue" />
//                 <circle cx="200" cy="150" r="3" fill="blue" />
//               </>
//             )}
//             {step >= 2 && (
//               <>
//                 <circle cx="100" cy="150" r="40" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
//                 <circle cx="200" cy="150" r="40" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
//                 <circle cx="150" cy="110" r="3" fill="blue" />
//               </>
//             )}
//             {step >= 3 && <line x1="150" y1="110" x2="150" y2="150" stroke="red" strokeWidth="2" />}
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
//       <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
//         Geometric Constructions Visualizer
//       </h3>
//       <p className="text-sm text-gray-600 mb-4 text-center">
//         Select a construction and step through the process to see how it’s done.
//       </p>

//       {/* Construction Selector */}
//       <div className="flex flex-wrap justify-center gap-2 mb-6">
//         {[
//           { id: "perpendicular", label: "Perpendicular Line" },
//           { id: "parallel", label: "Parallel Line" },
//           { id: "line-segment", label: "Line Segment" },
//           { id: "copy-angle", label: "Copy Angle" },
//           { id: "bisect-angle", label: "Bisect Angle" },
//           { id: "construct-60", label: "60° Angle" },
//           { id: "construct-30", label: "30° Angle" },
//           { id: "construct-90", label: "90° Angle" }
//         ].map(({ id, label }) => (
//           <button
//             key={id}
//             onClick={() => handleConstructionChange(id as any)}
//             className={`px-3 py-1 text-sm font-medium rounded-md ${
//               construction === id
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* Visualization */}
//       <div className="flex justify-center">
//         <svg width="100%" height="200" viewBox="0 0 300 200" className="max-w-full">
//           {renderConstruction()}
//         </svg>
//       </div>

//       {/* Step Navigation */}
//       <div className="flex justify-between mt-4">
//         <button
//           onClick={handlePrevStep}
//           disabled={step === 0}
//           className={`px-4 py-2 text-sm font-medium rounded-md ${
//             step === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
//           }`}
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNextStep}
//           disabled={step === constructions[construction].steps.length - 1}
//           className={`px-4 py-2 text-sm font-medium rounded-md ${
//             step === constructions[construction].steps.length - 1
//               ? "bg-gray-300 cursor-not-allowed"
//               : "bg-blue-500 text-white hover:bg-blue-600"
//           }`}
//         >
//           Next
//         </button>
//       </div>

//       {/* Feedback */}
//       <div className="text-sm text-gray-600 mt-4">
//         <p>
//           <strong>Step {step + 1}:</strong> {constructions[construction].steps[step]}
//         </p>
//         <p className="mt-2">
//           Use the buttons to navigate through the steps of the {construction.replace("-", " ")} construction using only a compass and straightedge.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BasicConstructions;


/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const BasicConstructions: React.FC = () => {
  const [construction, setConstruction] = useState<
    "perpendicular" | "parallel" | "line-segment" | "copy-angle" | "bisect-angle" | "construct-60" | "construct-30" | "construct-90"
  >("perpendicular");
  const [step, setStep] = useState<number>(0);

  const constructions: { [key: string]: { steps: string[] } } = {
    perpendicular: {
      steps: [
        "Draw a line and mark a point above it.",
        "Use compass from point to intersect line at two points.",
        "Draw arcs from these points to intersect inside.",
        "Draw perpendicular line through the intersection."
      ]
    },
    parallel: {
      steps: [
        "Draw a line and a point not on it.",
        "Draw a transversal through the point.",
        "Copy an angle from the line to the point.",
        "Draw the parallel line through the point."
      ]
    },
    "line-segment": {
      steps: [
        "Mark a point for the start of the segment.",
        "Use compass to measure the desired length.",
        "Draw an arc from the point.",
        "Mark the endpoint where the arc intersects."
      ]
    },
    "copy-angle": {
      steps: [
        "Draw an angle and a new ray.",
        "Use compass to measure the angle's arc.",
        "Transfer the arc to the new ray.",
        "Draw the copied angle."
      ]
    },
    "bisect-angle": {
      steps: [
        "Draw an angle.",
        "Use compass to draw an arc inside from vertex.",
        "Draw arcs from arc intersections to meet inside.",
        "Draw the bisector through the intersection."
      ]
    },
    "construct-60": {
      steps: [
        "Draw a line segment.",
        "Use compass to draw arc from one endpoint.",
        "Draw arc from other endpoint to intersect.",
        "Connect intersection to form equilateral triangle."
      ]
    },
    "construct-30": {
      steps: [
        "Construct a 60° angle.",
        "Draw an arc inside the 60° angle from vertex.",
        "Draw arcs from arc intersections to meet.",
        "Draw the bisector for 30° angle."
      ]
    },
    "construct-90": {
      steps: [
        "Draw a line and mark a point on it.",
        "Draw arcs from point to intersect line.",
        "Draw arcs from intersections to meet above.",
        "Draw perpendicular line through intersection."
      ]
    }
  };

  // Helper function to calculate a point along a line at a given distance
  const pointAlongLine = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    distance: number
  ) => {
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const ratio = distance / length;
    return {
      x: x1 + ratio * (x2 - x1),
      y: y1 + ratio * (y2 - y1),
    };
  };

  // Helper function to calculate angle arc path
  const getAngleArcPath = (
    vertex: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    radius: number
  ) => {
    const point1 = pointAlongLine(vertex.x, vertex.y, p1.x, p1.y, radius);
    const point2 = pointAlongLine(vertex.x, vertex.y, p2.x, p2.y, radius);
    const crossProduct =
      (p1.x - vertex.x) * (p2.y - vertex.y) - (p1.y - vertex.y) * (p2.x - vertex.x);
    const sweepFlag = crossProduct > 0 ? 1 : 0;
    return `M ${point1.x},${point1.y} A ${radius},${radius} 0 0 ${sweepFlag} ${point2.x},${point2.y}`;
  };

  const handleConstructionChange = (
    newConstruction: "perpendicular" | "parallel" | "line-segment" | "copy-angle" | "bisect-angle" | "construct-60" | "construct-30" | "construct-90"
  ) => {
    setConstruction(newConstruction);
    setStep(0);
  };

  const handleNextStep = () => {
    if (step < constructions[construction].steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // SVG visualization logic for each construction
  const renderConstruction = () => {
    switch (construction) {
      case "perpendicular":
        return (
          <>
            {/* Base line */}
            <line x1="50" y1="150" x2="250" y2="150" stroke="black" strokeWidth="2" />
            {/* Point above */}
            {step >= 0 && <circle cx="150" cy="50" r="3" fill="red" />}
            {/* Compass arcs */}
            {step >= 1 && (
              <>
                <circle cx="150" cy="50" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="100" cy="150" r="3" fill="blue" />
                <circle cx="200" cy="150" r="3" fill="blue" />
              </>
            )}
            {step >= 2 && (
              <>
                <circle cx="100" cy="150" r="40" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="200" cy="150" r="40" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="150" cy="110" r="3" fill="blue" />
              </>
            )}
            {step >= 3 && <line x1="150" y1="50" x2="150" y2="150" stroke="red" strokeWidth="2" />}
          </>
        );
      case "parallel":
        return (
          <>
            {/* Base line */}
            <line x1="50" y1="150" x2="250" y2="150" stroke="black" strokeWidth="2" />
            {/* Point not on line */}
            {step >= 0 && <circle cx="150" cy="50" r="3" fill="red" />}
            {/* Transversal */}
            {step >= 1 && <line x1="100" y1="150" x2="150" y2="50" stroke="black" strokeWidth="2" />}
            {step >= 2 && (
              <>
                <path
                  d={getAngleArcPath(
                    { x: 100, y: 150 },
                    { x: 100, y: 130 },
                    { x: 130, y: 150 },
                    20
                  )}
                  stroke="blue"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5"
                />
                <path
                  d={getAngleArcPath(
                    { x: 150, y: 50 },
                    { x: 150, y: 70 },
                    { x: 120, y: 50 },
                    20
                  )}
                  stroke="blue"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5"
                />
              </>
            )}
            {step >= 3 && <line x1="50" y1="50" x2="250" y2="50" stroke="red" strokeWidth="2" />}
          </>
        );
      case "line-segment":
        return (
          <>
            {/* Starting point */}
            {step >= 0 && <circle cx="100" cy="100" r="3" fill="red" />}
            {/* Compass measurement */}
            {step >= 1 && <circle cx="100" cy="100" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />}
            {step >= 2 && <circle cx="150" cy="100" r="3" fill="blue" />}
            {step >= 3 && <line x1="100" y1="100" x2="150" y2="100" stroke="red" strokeWidth="2" />}
          </>
        );
      case "copy-angle":
        return (
          <>
            {/* Original angle */}
            <line x1="100" y1="150" x2="150" y2="150" stroke="black" strokeWidth="2" />
            <line x1="150" y1="150" x2="200" y2="100" stroke="black" strokeWidth="2" />
            {/* New ray */}
            {step >= 0 && <line x1="100" y1="50" x2="150" y2="50" stroke="black" strokeWidth="2" />}
            {step >= 1 && (
              <path
                d={getAngleArcPath(
                  { x: 150, y: 150 },
                  { x: 150, y: 130 },
                  { x: 180, y: 120 },
                  20
                )}
                stroke="blue"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5"
              />
            )}
            {step >= 2 && (
              <path
                d={getAngleArcPath(
                  { x: 150, y: 50 },
                  { x: 150, y: 70 },
                  { x: 120, y: 50 },
                  20
                )}
                stroke="blue"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5"
              />
            )}
            {step >= 3 && <line x1="150" y1="50" x2="200" y2="0" stroke="red" strokeWidth="2" />}
          </>
        );
      case "bisect-angle":
        return (
          <>
            {/* Angle */}
            <line x1="100" y1="150" x2="150" y2="100" stroke="black" strokeWidth="2" />
            <line x1="150" y1="100" x2="200" y2="150" stroke="black" strokeWidth="2" />
            {step >= 1 && (
              <path
                d={getAngleArcPath(
                  { x: 150, y: 100 },
                  { x: 130, y: 120 },
                  { x: 170, y: 120 },
                  20
                )}
                stroke="blue"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5"
              />
            )}
            {step >= 2 && (
              <>
                <circle cx="130" cy="120" r="15" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="170" cy="120" r="15" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="150" cy="120" r="3" fill="blue" />
              </>
            )}
            {step >= 3 && <line x1="150" y1="100" x2="150" y2="150" stroke="red" strokeWidth="2" />}
          </>
        );
      case "construct-60":
        return (
          <>
            {/* Line segment */}
            <line x1="100" y1="150" x2="150" y2="150" stroke="black" strokeWidth="2" />
            {step >= 1 && (
              <circle cx="100" cy="150" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
            )}
            {step >= 2 && (
              <>
                <circle cx="150" cy="150" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="125" cy="107" r="3" fill="blue" />
              </>
            )}
            {step >= 3 && (
              <>
                <line x1="100" y1="150" x2="125" y2="107" stroke="red" strokeWidth="2" />
                <line x1="125" y1="107" x2="150" y2="150" stroke="red" strokeWidth="2" />
              </>
            )}
          </>
        );
      case "construct-30":
        return (
          <>
            {/* 60° angle */}
            <line x1="100" y1="150" x2="150" y2="150" stroke="black" strokeWidth="2" />
            <line x1="150" y1="150" x2="125" y2="107" stroke="black" strokeWidth="2" />
            {step >= 1 && (
              <path
                d={getAngleArcPath(
                  { x: 150, y: 150 },
                  { x: 150, y: 130 },
                  { x: 137.5, y: 128.5 },
                  20
                )}
                stroke="blue"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5"
              />
            )}
            {step >= 2 && (
              <>
                <circle cx="130" cy="130" r="15" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="150" cy="130" r="15" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="140" cy="130" r="3" fill="blue" />
              </>
            )}
            {step >= 3 && <line x1="150" y1="150" x2="140" y2="130" stroke="red" strokeWidth="2" />}
          </>
        );
      case "construct-90":
        return (
          <>
            {/* Base line and point */}
            <line x1="50" y1="150" x2="250" y2="150" stroke="black" strokeWidth="2" />
            {step >= 0 && <circle cx="150" cy="150" r="3" fill="red" />}
            {step >= 1 && (
              <>
                <circle cx="150" cy="150" r="50" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="100" cy="150" r="3" fill="blue" />
                <circle cx="200" cy="150" r="3" fill="blue" />
              </>
            )}
            {step >= 2 && (
              <>
                <circle cx="100" cy="150" r="40" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="200" cy="150" r="40" fill="none" stroke="blue" strokeWidth="1" strokeDasharray="5" />
                <circle cx="150" cy="110" r="3" fill="blue" />
              </>
            )}
            {step >= 3 && <line x1="150" y1="110" x2="150" y2="150" stroke="red" strokeWidth="2" />}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
       [NOT DONE] Geometric Constructions Visualizer
      </h3>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Select a construction and step through the process to see how it’s done.
      </p>

      {/* Construction Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {[
          { id: "perpendicular", label: "Perpendicular Line" },
          { id: "parallel", label: "Parallel Line" },
          { id: "line-segment", label: "Line Segment" },
          { id: "copy-angle", label: "Copy Angle" },
          { id: "bisect-angle", label: "Bisect Angle" },
          { id: "construct-60", label: "60° Angle" },
          { id: "construct-30", label: "30° Angle" },
          { id: "construct-90", label: "90° Angle" }
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleConstructionChange(id as any)}
            className={`px-3 py-1 text-sm font-medium rounded-md ${
              construction === id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Visualization */}
      <div className="flex justify-center">
        <svg width="100%" height="200" viewBox="0 0 300 200" className="max-w-full">
          {renderConstruction()}
        </svg>
      </div>

      {/* Step Navigation */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevStep}
          disabled={step === 0}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            step === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          disabled={step === constructions[construction].steps.length - 1}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            step === constructions[construction].steps.length - 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>

      {/* Feedback */}
      <div className="text-sm text-gray-600 mt-4">
        <p>
          <strong>Step {step + 1}:</strong> {constructions[construction].steps[step]}
        </p>
        <p className="mt-2">
          Use the buttons to navigate through the steps of the {construction.replace("-", " ")} construction using only a compass and straightedge.
        </p>
      </div>
    </div>
  );
};

export default BasicConstructions;