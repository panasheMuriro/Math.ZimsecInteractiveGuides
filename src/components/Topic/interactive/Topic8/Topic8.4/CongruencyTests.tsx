// import  { useState } from "react";

// const CongruencyTests= () => {
//   const [condition, setCondition] = useState<"SSS" | "SAS" | "ASA" | "RHS">("SSS");
//   const [highlight, setHighlight] = useState<string>("");

//   // Triangle properties (fixed coordinates)
//   const triangle1 = [
//     { x: 50, y: 150 }, // A
//     { x: 100, y: 50 }, // B
//     { x: 150, y: 150 }, // C
//   ];
//   const triangle2 = [
//     { x: 250, y: 150 }, // D
//     { x: 300, y: 50 }, // E
//     { x: 350, y: 150 }, // F
//   ];

//   // RHS triangles (right-angled at B and E)
//   const rhsTriangle1 = [
//     { x: 50, y: 150 }, // A
//     { x: 50, y: 50 }, // B (right angle)
//     { x: 150, y: 150 }, // C
//   ];
//   const rhsTriangle2 = [
//     { x: 250, y: 150 }, // D
//     { x: 250, y: 50 }, // E (right angle)
//     { x: 350, y: 150 }, // F
//   ];

//   const getTrianglePoints = (isRHS: boolean) => {
//     return isRHS ? [rhsTriangle1, rhsTriangle2] : [triangle1, triangle2];
//   };

//   // Helper function to calculate a point along a line at a given distance
//   const pointAlongLine = (
//     x1: number,
//     y1: number,
//     x2: number,
//     y2: number,
//     distance: number
//   ) => {
//     const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//     const ratio = distance / length;
//     return {
//       x: x1 + ratio * (x2 - x1),
//       y: y1 + ratio * (y2 - y1),
//     };
//   };

//   // Helper function to calculate angle arc path
//   const getAngleArcPath = (
//     vertex: { x: number; y: number },
//     p1: { x: number; y: number },
//     p2: { x: number; y: number },
//     radius: number  ) => {
//     // Calculate points along the sides at radius distance from vertex
//     const point1 = pointAlongLine(vertex.x, vertex.y, p1.x, p1.y, radius);
//     const point2 = pointAlongLine(vertex.x, vertex.y, p2.x, p2.y, radius);

//     // Determine sweep flag based on cross product to ensure correct arc direction
//     const crossProduct =
//       (p1.x - vertex.x) * (p2.y - vertex.y) - (p1.y - vertex.y) * (p2.x - vertex.x);
//     const sweepFlag = crossProduct > 0 ? 1 : 0;

//     return `
//       M ${point1.x},${point1.y}
//       A ${radius},${radius} 0 0 ${sweepFlag} ${point2.x},${point2.y}
//     `;
//   };

//   const handleConditionChange = (newCondition: "SSS" | "SAS" | "ASA" | "RHS") => {
//     setCondition(newCondition);
//     setHighlight("");
//   };

//   const getHighlightStyles = (part: string) => {
//     return highlight === part ? "stroke-yellow-400 stroke-[4px]" : "stroke-black stroke-[2px]";
//   };

//   const triangles = getTrianglePoints(condition === "RHS");

//   return (
//     <div className="max-w-md mx-auto p-4 bg-gradient-to-br from-[#774360] to-[#B25068] rounded-2xl mt-5 shadow-md">
//       <h3 className="text-lg font-semibold mb-4 text-center text-white">
//         Triangle Congruence Visualizer
//       </h3>
//       <p className="text-sm text-white mb-4 text-center">
//         Select a congruence condition and tap parts to highlight corresponding elements.
//       </p>

//       {/* Condition Selector */}
     
      
//         <div className="bg-white/80 rounded-lg mb-5 flex justify-center">
//           <svg width="100%" height="200" viewBox="0 0 400 200" className="max-w-full">
//             {/* Triangle 1 (ABC) */}
//             <polygon
//               points={triangles[0].map((p) => `${p.x},${p.y}`).join(" ")}
//               fill="none"
//               className={getHighlightStyles("triangle1")}
//               onClick={() => setHighlight("triangle1")}
//             />
//             {/* Triangle 2 (DEF) */}
//             <polygon
//               points={triangles[1].map((p) => `${p.x},${p.y}`).join(" ")}
//               fill="none"
//               className={getHighlightStyles("triangle2")}
//               onClick={() => setHighlight("triangle2")}
//             />

//             {/* Labels */}
//             {triangles[0].map((p, i) => (
//               <text
//                 key={`label1-${i}`}
//                 x={p.x + (i === 1 ? -15 : 5)}
//                 y={p.y + (i === 1 ? -5 : 15)}
//                 className="text-sm font-medium"
//                 onClick={() => setHighlight(`point${i}`)}
//                 fill={highlight === `point${i}` ? "red" : "black"}
//               >
//                 {["A", "B", "C"][i]}
//               </text>
//             ))}
//             {triangles[1].map((p, i) => (
//               <text
//                 key={`label2-${i}`}
//                 x={p.x + (i === 1 ? -15 : 5)}
//                 y={p.y + (i === 1 ? -5 : 15)}
//                 className="text-sm font-medium"
//                 onClick={() => setHighlight(`point${i + 3}`)}
//                 fill={highlight === `point${i + 3}` ? "red" : "black"}
//               >
//                 {["D", "E", "F"][i]}
//               </text>
//             ))}

//             {/* Highlight corresponding parts based on condition */}
//             {condition === "SSS" && (
//               <>
//                 <line
//                   x1={triangles[0][0].x}
//                   y1={triangles[0][0].y}
//                   x2={triangles[0][1].x}
//                   y2={triangles[0][1].y}
//                   className={getHighlightStyles("sideAB")}
//                   onClick={() => setHighlight("sideAB")}
//                 />
//                 <line
//                   x1={triangles[1][0].x}
//                   y1={triangles[1][0].y}
//                   x2={triangles[1][1].x}
//                   y2={triangles[1][1].y}
//                   className={getHighlightStyles("sideDE")}
//                   onClick={() => setHighlight("sideDE")}
//                 />
//                 <line
//                   x1={triangles[0][1].x}
//                   y1={triangles[0][1].y}
//                   x2={triangles[0][2].x}
//                   y2={triangles[0][2].y}
//                   className={getHighlightStyles("sideBC")}
//                   onClick={() => setHighlight("sideBC")}
//                 />
//                 <line
//                   x1={triangles[1][1].x}
//                   y1={triangles[1][1].y}
//                   x2={triangles[1][2].x}
//                   y2={triangles[1][2].y}
//                   className={getHighlightStyles("sideEF")}
//                   onClick={() => setHighlight("sideEF")}
//                 />
//                 <line
//                   x1={triangles[0][0].x}
//                   y1={triangles[0][0].y}
//                   x2={triangles[0][2].x}
//                   y2={triangles[0][2].y}
//                   className={getHighlightStyles("sideAC")}
//                   onClick={() => setHighlight("sideAC")}
//                 />
//                 <line
//                   x1={triangles[1][0].x}
//                   y1={triangles[1][0].y}
//                   x2={triangles[1][2].x}
//                   y2={triangles[1][2].y}
//                   className={getHighlightStyles("sideDF")}
//                   onClick={() => setHighlight("sideDF")}
//                 />
//               </>
//             )}
//             {condition === "SAS" && (
//               <>
//                 <line
//                   x1={triangles[0][0].x}
//                   y1={triangles[0][0].y}
//                   x2={triangles[0][1].x}
//                   y2={triangles[0][1].y}
//                   className={getHighlightStyles("sideAB")}
//                   onClick={() => setHighlight("sideAB")}
//                 />
//                 <line
//                   x1={triangles[1][0].x}
//                   y1={triangles[1][0].y}
//                   x2={triangles[1][1].x}
//                   y2={triangles[1][1].y}
//                   className={getHighlightStyles("sideDE")}
//                   onClick={() => setHighlight("sideDE")}
//                 />
//                 <line
//                   x1={triangles[0][1].x}
//                   y1={triangles[0][1].y}
//                   x2={triangles[0][2].x}
//                   y2={triangles[0][2].y}
//                   className={getHighlightStyles("sideBC")}
//                   onClick={() => setHighlight("sideBC")}
//                 />
//                 <line
//                   x1={triangles[1][1].x}
//                   y1={triangles[1][1].y}
//                   x2={triangles[1][2].x}
//                   y2={triangles[1][2].y}
//                   className={getHighlightStyles("sideEF")}
//                   onClick={() => setHighlight("sideEF")}
//                 />
//                 {/* Angle B and E */}
//                 <path
//                   d={getAngleArcPath(
//                     triangles[0][1],
//                     triangles[0][0],
//                     triangles[0][2],
//                     20,
//                     // "B"
//                   )}
//                   className={getHighlightStyles("angleB")}
//                   onClick={() => setHighlight("angleB")}
//                 />
//                 <path
//                   d={getAngleArcPath(
//                     triangles[1][1],
//                     triangles[1][0],
//                     triangles[1][2],
//                     20,
//                     // "E"
//                   )}
//                   className={getHighlightStyles("angleE")}
//                   onClick={() => setHighlight("angleE")}
//                 />
//               </>
//             )}
//             {condition === "ASA" && (
//               <>
//                 <path
//                   d={getAngleArcPath(
//                     triangles[0][0],
//                     triangles[0][1],
//                     triangles[0][2],
//                     20,
//                     // "A"
//                   )}
//                   className={getHighlightStyles("angleA")}
//                   onClick={() => setHighlight("angleA")}
//                 />
//                 <path
//                   d={getAngleArcPath(
//                     triangles[1][0],
//                     triangles[1][1],
//                     triangles[1][2],
//                     20,
//                     // "D"
//                   )}
//                   className={getHighlightStyles("angleD")}
//                   onClick={() => setHighlight("angleD")}
//                 />
//                 <line
//                   x1={triangles[0][0].x}
//                   y1={triangles[0][0].y}
//                   x2={triangles[0][1].x}
//                   y2={triangles[0][1].y}
//                   className={getHighlightStyles("sideAB")}
//                   onClick={() => setHighlight("sideAB")}
//                 />
//                 <line
//                   x1={triangles[1][0].x}
//                   y1={triangles[1][0].y}
//                   x2={triangles[1][1].x}
//                   y2={triangles[1][1].y}
//                   className={getHighlightStyles("sideDE")}
//                   onClick={() => setHighlight("sideDE")}
//                 />
//                 <path
//                   d={getAngleArcPath(
//                     triangles[0][1],
//                     triangles[0][0],
//                     triangles[0][2],
//                     20,
//                     // "B"
//                   )}
//                   className={getHighlightStyles("angleB")}
//                   onClick={() => setHighlight("angleB")}
//                 />
//                 <path
//                   d={getAngleArcPath(
//                     triangles[1][1],
//                     triangles[1][0],
//                     triangles[1][2],
//                     20,
//                     // "E"
//                   )}
//                   className={getHighlightStyles("angleE")}
//                   onClick={() => setHighlight("angleE")}
//                 />
//               </>
//             )}
//             {condition === "RHS" && (
//               <>
//                 <path
//                   d={getAngleArcPath(
//                     triangles[0][1],
//                     triangles[0][0],
//                     triangles[0][2],
//                     20,
//                     // "B"
//                   )}
//                   className={getHighlightStyles("angleB")}
//                   onClick={() => setHighlight("angleB")}
//                 />
//                 <path
//                   d={getAngleArcPath(
//                     triangles[1][1],
//                     triangles[1][0],
//                     triangles[1][2],
//                     20,
//                     // "E"
//                   )}
//                   className={getHighlightStyles("angleE")}
//                   onClick={() => setHighlight("angleE")}
//                 />
//                 <line
//                   x1={triangles[0][0].x}
//                   y1={triangles[0][0].y}
//                   x2={triangles[0][2].x}
//                   y2={triangles[0][2].y}
//                   className={getHighlightStyles("sideAC")}
//                   onClick={() => setHighlight("sideAC")}
//                 />
//                 <line
//                   x1={triangles[1][0].x}
//                   y1={triangles[1][0].y}
//                   x2={triangles[1][2].x}
//                   y2={triangles[1][2].y}
//                   className={getHighlightStyles("sideDF")}
//                   onClick={() => setHighlight("sideDF")}
//                 />
//                 <line
//                   x1={triangles[0][0].x}
//                   y1={triangles[0][0].y}
//                   x2={triangles[0][1].x}
//                   y2={triangles[0][1].y}
//                   className={getHighlightStyles("sideAB")}
//                   onClick={() => setHighlight("sideAB")}
//                 />
//                 <line
//                   x1={triangles[1][0].x}
//                   y1={triangles[1][0].y}
//                   x2={triangles[1][1].x}
//                   y2={triangles[1][1].y}
//                   className={getHighlightStyles("sideDE")}
//                   onClick={() => setHighlight("sideDE")}
//                 />
//               </>
//             )}
//           </svg>
//         </div>

//          <div className="flex flex-wrap justify-center gap-2 mb-6">
//         {["SSS", "SAS", "ASA", "RHS"].map((cond) => (
//           <button
//             key={cond}
//             onClick={() => handleConditionChange(cond as "SSS" | "SAS" | "ASA" | "RHS")}
//             className={`px-5 py-2 rounded-2xl text-sm font-medium ${
//               condition === cond
//                 ? "bg-[#FF9F29] text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {cond}
//           </button>
//         ))}
//       </div>
   
//       {/* Feedback */}
//       <div className="text-sm mt-4 bg-white/20 text-white p-3 rounded-lg ">
//         <p>
//           <strong>Condition:</strong> {condition}
//         </p>
//         <p>
//           <strong>Explanation:</strong>{" "}
//           {condition === "SSS"
//             ? "All three sides are equal (AB=DE, BC=EF, AC=DF)."
//             : condition === "SAS"
//             ? "Two sides and the included angle are equal (AB=DE, ∠B=∠E, BC=EF)."
//             : condition === "ASA"
//             ? "Two angles and the included side are equal (∠A=∠D, AB=DE, ∠B=∠E)."
//             : "Right angles, hypotenuses, and one side are equal (∠B=∠E=90°, AB=DE, AC=DF)."}
//         </p>
//         <p className="mt-2">
//           Tap on sides, angles, or triangles to highlight corresponding parts and see how they match!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CongruencyTests;

import { useState } from 'react';

// --- Neubrutalism Styles & Colors ---
const NEUBRUTALISM_COLORS = {
  cream: '#f4f1de',      // Background, Cards
  orange: '#e07a5f',     // Accents, Selected, Reset Button, Ship Path
  slate: '#3d405b',      // Text, Lines, Center Dot, Borders
  teal: '#81b29a',       // Back Bearing, Correct, Highlights
  yellow: '#f2cc8f',     // Accents, Highlights, Button Default
  white: '#ffffff',
  red: '#c14747',        // Highlight color for active elements
  shadow: 'rgba(61, 64, 91, 0.3)', // slate with opacity for shadow
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.slate}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
  padding: '1rem',
};

const getButtonStyle = (isActive: boolean) => {
  return {
    ...neubrutalismBase,
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    backgroundColor: isActive ? NEUBRUTALISM_COLORS.teal : NEUBRUTALISM_COLORS.yellow,
    color: isActive ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.slate,
    borderColor: NEUBRUTALISM_COLORS.slate,
    cursor: 'pointer',
    transition: 'all 0.2s',
    ...(isActive ? {} : {
      ':hover': {
        backgroundColor: NEUBRUTALISM_COLORS.cream,
      }
    })
  };
};
// --- End Neubrutalism Styles ---

const CongruencyTests = () => {
  type Condition = "SSS" | "SAS" | "ASA" | "RHS";
  const [condition, setCondition] = useState<Condition>("SSS");
  const [highlight, setHighlight] = useState<string>("");

  // Function to calculate points for triangles based on condition
  const getTrianglePoints = (isRHS: boolean) => {
    const basePoints = [
      { x: 100, y: 150 }, // A/D
      { x: 200, y: 150 }, // B/E
      { x: 150, y: 80 },  // C/F
    ];

    if (isRHS) {
      // Modify for RHS: Right angle at B/E, hypotenuse AC/DF
      basePoints[1] = { x: 100, y: 80 }; // Move B/E to create right angle
    }

    // Second triangle (DEF) offset to the right
    const offsetPoints = basePoints.map(p => ({
      x: p.x + 120, // Offset to the right
      y: p.y
    }));

    return [basePoints, offsetPoints];
  };

  // Function to calculate angle arc path
  const getAngleArcPath = (point1: {x: number, y: number}, point2: {x: number, y: number}, point3: {x: number, y: number}, radius: number) => {
    // Calculate vectors
    const v1 = { x: point1.x - point2.x, y: point1.y - point2.y };
    const v2 = { x: point3.x - point2.x, y: point3.y - point2.y };
    
    // Normalize vectors
    const mag1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
    const mag2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
    const norm1 = { x: v1.x / mag1, y: v1.y / mag1 };
    const norm2 = { x: v2.x / mag2, y: v2.y / mag2 };
    
    // Calculate angle bisector (for arc center)
    const bisector = { x: norm1.x + norm2.x, y: norm1.y + norm2.y };
    const bisectorMag = Math.sqrt(bisector.x * bisector.x + bisector.y * bisector.y);
    if (bisectorMag === 0) {
      // Handle case where vectors are opposite (180 degrees)
      // Use perpendicular vector
      bisector.x = -norm1.y;
      bisector.y = norm1.x;
    } else {
      bisector.x /= bisectorMag;
      bisector.y /= bisectorMag;
    }
    
    // Determine arc start and end points
    const start = {
      x: point2.x + norm1.x * radius,
      y: point2.y + norm1.y * radius
    };
    const end = {
      x: point2.x + norm2.x * radius,
      y: point2.y + norm2.y * radius
    };
    
    // Determine large arc flag (1 if angle > 180 degrees)
    // Use cross product to determine angle orientation
    const crossProduct = norm1.x * norm2.y - norm1.y * norm2.x;
    const dotProduct = norm1.x * norm2.x + norm1.y * norm2.y;
    const angle = Math.acos(Math.max(-1, Math.min(1, dotProduct))); // Clamp to avoid numerical errors
    const largeArcFlag = angle > Math.PI ? 1 : 0;
    
    // Sweep flag (1 for positive angle direction)
    const sweepFlag = crossProduct > 0 ? 1 : 0;
    
    return `M ${start.x},${start.y} A ${radius},${radius} 0 ${largeArcFlag} ${sweepFlag} ${end.x},${end.y}`;
  };

  const handleConditionChange = (newCondition: Condition) => {
    setCondition(newCondition);
    setHighlight("");
  };

  const getHighlightStyles = (part: string) => {
    return highlight === part 
      ? `stroke-[4px]` 
      : `stroke-[2px]`;
  };

  const getStrokeColor = (part: string) => {
    return highlight === part ? NEUBRUTALISM_COLORS.red : NEUBRUTALISM_COLORS.slate;
  };

  const triangles = getTrianglePoints(condition === "RHS");

  return (
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.teal,
        borderColor: NEUBRUTALISM_COLORS.slate,
        color: NEUBRUTALISM_COLORS.slate,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.slate}`,
      }}
    >
      <div className="mb-4 mt-3 text-white">
        <h3 className="text-lg font-bold mb-1 text-center">
          Triangle Congruence Visualizer
        </h3>
        <p className="text-sm text-center">
          Select a congruence condition and tap parts to highlight corresponding elements.
        </p>
      </div>

      {/* Condition Selector */}
      <div
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.cream,
          borderColor: NEUBRUTALISM_COLORS.slate,
          padding: '1rem',
          marginBottom: '1.25rem',
        }}
      >
        <div className="flex flex-wrap justify-center gap-2">
          {(["SSS", "SAS", "ASA", "RHS"] as Condition[]).map((cond) => (
            <button
              key={cond}
              onClick={() => handleConditionChange(cond)}
              style={getButtonStyle(condition === cond)}
              onMouseEnter={(e) => {
                if (condition !== cond)
                  e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.cream;
              }}
              onMouseLeave={(e) => {
                if (condition !== cond)
                  e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.yellow;
              }}
            >
              {cond}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.slate,
          padding: '1rem',
        }}
      >
        <svg width="100%" height="200" viewBox="0 0 400 200" className="max-w-full scale-150">
          {/* Triangle 1 (ABC) */}
          <polygon
            points={triangles[0].map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            className={getHighlightStyles("triangle1")}
            stroke={getStrokeColor("triangle1")}
            onClick={() => setHighlight("triangle1")}
            style={{ cursor: 'pointer' }}
          />
          
          {/* Triangle 2 (DEF) */}
          <polygon
            points={triangles[1].map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            className={getHighlightStyles("triangle2")}
            stroke={getStrokeColor("triangle2")}
            onClick={() => setHighlight("triangle2")}
            style={{ cursor: 'pointer' }}
          />

          {/* Labels */}
          {triangles[0].map((p, i) => (
            <text
              key={`label1-${i}`}
              x={p.x + (i === 1 ? -15 : 5)}
              y={p.y + (i === 1 ? -5 : 15)}
              className="text-sm font-bold"
              onClick={() => setHighlight(`point${i}`)}
              fill={highlight === `point${i}` ? NEUBRUTALISM_COLORS.red : NEUBRUTALISM_COLORS.slate}
              style={{ cursor: 'pointer' }}
            >
              {["A", "B", "C"][i]}
            </text>
          ))}
          {triangles[1].map((p, i) => (
            <text
              key={`label2-${i}`}
              x={p.x + (i === 1 ? -15 : 5)}
              y={p.y + (i === 1 ? -5 : 15)}
              className="text-sm font-bold"
              onClick={() => setHighlight(`point${i + 3}`)}
              fill={highlight === `point${i + 3}` ? NEUBRUTALISM_COLORS.red : NEUBRUTALISM_COLORS.slate}
              style={{ cursor: 'pointer' }}
            >
              {["D", "E", "F"][i]}
            </text>
          ))}

          {/* Highlight corresponding parts based on condition */}
          {condition === "SSS" && (
            <>
              <line
                x1={triangles[0][0].x}
                y1={triangles[0][0].y}
                x2={triangles[0][1].x}
                y2={triangles[0][1].y}
                className={getHighlightStyles("sideAB")}
                stroke={getStrokeColor("sideAB")}
                onClick={() => setHighlight("sideAB")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[1][0].x}
                y1={triangles[1][0].y}
                x2={triangles[1][1].x}
                y2={triangles[1][1].y}
                className={getHighlightStyles("sideDE")}
                stroke={getStrokeColor("sideDE")}
                onClick={() => setHighlight("sideDE")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[0][1].x}
                y1={triangles[0][1].y}
                x2={triangles[0][2].x}
                y2={triangles[0][2].y}
                className={getHighlightStyles("sideBC")}
                stroke={getStrokeColor("sideBC")}
                onClick={() => setHighlight("sideBC")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[1][1].x}
                y1={triangles[1][1].y}
                x2={triangles[1][2].x}
                y2={triangles[1][2].y}
                className={getHighlightStyles("sideEF")}
                stroke={getStrokeColor("sideEF")}
                onClick={() => setHighlight("sideEF")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[0][0].x}
                y1={triangles[0][0].y}
                x2={triangles[0][2].x}
                y2={triangles[0][2].y}
                className={getHighlightStyles("sideAC")}
                stroke={getStrokeColor("sideAC")}
                onClick={() => setHighlight("sideAC")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[1][0].x}
                y1={triangles[1][0].y}
                x2={triangles[1][2].x}
                y2={triangles[1][2].y}
                className={getHighlightStyles("sideDF")}
                stroke={getStrokeColor("sideDF")}
                onClick={() => setHighlight("sideDF")}
                style={{ cursor: 'pointer' }}
              />
            </>
          )}

          {condition === "SAS" && (
            <>
              <line
                x1={triangles[0][0].x}
                y1={triangles[0][0].y}
                x2={triangles[0][1].x}
                y2={triangles[0][1].y}
                className={getHighlightStyles("sideAB")}
                stroke={getStrokeColor("sideAB")}
                onClick={() => setHighlight("sideAB")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[1][0].x}
                y1={triangles[1][0].y}
                x2={triangles[1][1].x}
                y2={triangles[1][1].y}
                className={getHighlightStyles("sideDE")}
                stroke={getStrokeColor("sideDE")}
                onClick={() => setHighlight("sideDE")}
                style={{ cursor: 'pointer' }}
              />
              <path
                d={getAngleArcPath(triangles[0][0], triangles[0][1], triangles[0][2], 20)}
                fill="none"
                className={getHighlightStyles("angleB")}
                stroke={getStrokeColor("angleB")}
                onClick={() => setHighlight("angleB")}
                style={{ cursor: 'pointer' }}
              />
              <path
                d={getAngleArcPath(triangles[1][0], triangles[1][1], triangles[1][2], 20)}
                fill="none"
                className={getHighlightStyles("angleE")}
                stroke={getStrokeColor("angleE")}
                onClick={() => setHighlight("angleE")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[0][1].x}
                y1={triangles[0][1].y}
                x2={triangles[0][2].x}
                y2={triangles[0][2].y}
                className={getHighlightStyles("sideBC")}
                stroke={getStrokeColor("sideBC")}
                onClick={() => setHighlight("sideBC")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[1][1].x}
                y1={triangles[1][1].y}
                x2={triangles[1][2].x}
                y2={triangles[1][2].y}
                className={getHighlightStyles("sideEF")}
                stroke={getStrokeColor("sideEF")}
                onClick={() => setHighlight("sideEF")}
                style={{ cursor: 'pointer' }}
              />
            </>
          )}

          {condition === "ASA" && (
            <>
              <path
                d={getAngleArcPath(triangles[0][0], triangles[0][1], triangles[0][2], 20)}
                fill="none"
                className={getHighlightStyles("angleA")}
                stroke={getStrokeColor("angleA")}
                onClick={() => setHighlight("angleA")}
                style={{ cursor: 'pointer' }}
              />
              <path
                d={getAngleArcPath(triangles[1][0], triangles[1][1], triangles[1][2], 20)}
                fill="none"
                className={getHighlightStyles("angleD")}
                stroke={getStrokeColor("angleD")}
                onClick={() => setHighlight("angleD")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[0][0].x}
                y1={triangles[0][0].y}
                x2={triangles[0][1].x}
                y2={triangles[0][1].y}
                className={getHighlightStyles("sideAB")}
                stroke={getStrokeColor("sideAB")}
                onClick={() => setHighlight("sideAB")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[1][0].x}
                y1={triangles[1][0].y}
                x2={triangles[1][1].x}
                y2={triangles[1][1].y}
                className={getHighlightStyles("sideDE")}
                stroke={getStrokeColor("sideDE")}
                onClick={() => setHighlight("sideDE")}
                style={{ cursor: 'pointer' }}
              />
              <path
                d={getAngleArcPath(triangles[0][1], triangles[0][0], triangles[0][2], 20)}
                fill="none"
                className={getHighlightStyles("angleB")}
                stroke={getStrokeColor("angleB")}
                onClick={() => setHighlight("angleB")}
                style={{ cursor: 'pointer' }}
              />
              <path
                d={getAngleArcPath(triangles[1][1], triangles[1][0], triangles[1][2], 20)}
                fill="none"
                className={getHighlightStyles("angleE")}
                stroke={getStrokeColor("angleE")}
                onClick={() => setHighlight("angleE")}
                style={{ cursor: 'pointer' }}
              />
            </>
          )}

          {condition === "RHS" && (
            <>
              <path
                d={getAngleArcPath(triangles[0][1], triangles[0][0], triangles[0][2], 20)}
                fill="none"
                className={getHighlightStyles("angleB")}
                stroke={getStrokeColor("angleB")}
                onClick={() => setHighlight("angleB")}
                style={{ cursor: 'pointer' }}
              />
              <path
                d={getAngleArcPath(triangles[1][1], triangles[1][0], triangles[1][2], 20)}
                fill="none"
                className={getHighlightStyles("angleE")}
                stroke={getStrokeColor("angleE")}
                onClick={() => setHighlight("angleE")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[0][0].x}
                y1={triangles[0][0].y}
                x2={triangles[0][1].x}
                y2={triangles[0][1].y}
                className={getHighlightStyles("sideAB")}
                stroke={getStrokeColor("sideAB")}
                onClick={() => setHighlight("sideAB")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[1][0].x}
                y1={triangles[1][0].y}
                x2={triangles[1][1].x}
                y2={triangles[1][1].y}
                className={getHighlightStyles("sideDE")}
                stroke={getStrokeColor("sideDE")}
                onClick={() => setHighlight("sideDE")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[0][1].x}
                y1={triangles[0][1].y}
                x2={triangles[0][2].x}
                y2={triangles[0][2].y}
                className={getHighlightStyles("sideBC")}
                stroke={getStrokeColor("sideBC")}
                onClick={() => setHighlight("sideBC")}
                style={{ cursor: 'pointer' }}
              />
              <line
                x1={triangles[1][1].x}
                y1={triangles[1][1].y}
                x2={triangles[1][2].x}
                y2={triangles[1][2].y}
                className={getHighlightStyles("sideEF")}
                stroke={getStrokeColor("sideEF")}
                onClick={() => setHighlight("sideEF")}
                style={{ cursor: 'pointer' }}
              />
            </>
          )}
        </svg>
      </div>

      {/* Explanation */}
      <div
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.slate,
          padding: '0.75rem',
          marginTop: '1rem',
        }}
      >
        <p style={{ color: NEUBRUTALISM_COLORS.slate, fontSize: '0.875rem' }}>
          <span className="font-bold">Current Condition: {condition}</span>
          <br />
          {condition === "SSS" && "Side-Side-Side: All three sides of one triangle are equal to the corresponding sides of another."}
          {condition === "SAS" && "Side-Angle-Side: Two sides and the included angle of one triangle are equal to the corresponding parts of another."}
          {condition === "ASA" && "Angle-Side-Angle: Two angles and the included side of one triangle are equal to the corresponding parts of another."}
          {condition === "RHS" && "Right angle-Hypotenuse-Side: In right-angled triangles, the hypotenuse and one side of one triangle are equal to the corresponding parts of another."}
        </p>
      </div>
    </div>
  );
};

export default CongruencyTests;