// import React, { useState } from "react";

// const SimilarShapesProblems: React.FC = () => {
//   const [side1, setSide1] = useState<string>("2");
//   const [side2, setSide2] = useState<string>("3");
//   const [error, setError] = useState<string>("");

//   // Calculate scale factor and ratios
//   const side1Num = parseFloat(side1);
//   const side2Num = parseFloat(side2);
//   const scaleFactor = !isNaN(side1Num) && !isNaN(side2Num) && side1Num > 0 && side2Num > 0
//     ? (side2Num / side1Num).toFixed(2)
//     : "N/A";
//   const areaRatio = scaleFactor !== "N/A" ? (parseFloat(scaleFactor) ** 2).toFixed(2) : "N/A";
//   const volumeRatio = scaleFactor !== "N/A" ? (parseFloat(scaleFactor) ** 3).toFixed(2) : "N/A";

//   const handleSideChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     setSide: React.Dispatch<React.SetStateAction<string>>
//   ) => {
//     const value = e.target.value;
//     setSide(value);
//     const numValue = parseFloat(value);
//     if (isNaN(numValue) || numValue <= 0) {
//       setError("Please enter positive numbers for both sides.");
//     } else if (!isNaN(parseFloat(side1)) && !isNaN(parseFloat(side2))) {
//       setError("");
//     }
//   };

//   // Triangle points (base triangle with side length 50 for visualization)
//   const triangle1 = [
//     { x: 0, y: 50 }, // Bottom-left
//     { x: 50, y: 50 }, // Bottom-right
//     { x: 25, y: 0 }, // Top
//   ];
//   const triangle2 = triangle1.map(p => ({
//     x: p.x * (scaleFactor !== "N/A" ? parseFloat(scaleFactor) : 1) + 80,
//     y: p.y * (scaleFactor !== "N/A" ? parseFloat(scaleFactor) : 1),
//   }));

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
//       <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
//         Similar Shapes Problem Solver
//       </h3>
    

//       {/* Visualization */}
//       <div className="flex flex-col items-center gap-6">
//         <div className="w-full">
//           <h4 className="text-sm font-semibold text-gray-700 mb-2">Triangle Comparison</h4>
//           <div className="flex justify-center">
//             <svg
//               width="100%"
//               height={`${100 * (scaleFactor !== "N/A" ? Math.max(parseFloat(scaleFactor), 1) : 1)}`}
//               viewBox={`0 0 200 ${100 * (scaleFactor !== "N/A" ? Math.max(parseFloat(scaleFactor), 1) : 1)}`}
//               className="max-w-full"
//             >
//               {/* Triangle 1 */}
//               <polygon
//                 points={triangle1.map(p => `${p.x},${p.y}`).join(" ")}
//                 fill="none"
//                 stroke="blue"
//                 strokeWidth="2"
//               />
//               {/* Triangle 2 */}
//               <polygon
//                 points={triangle2.map(p => `${p.x},${p.y}`).join(" ")}
//                 fill="none"
//                 stroke="red"
//                 strokeWidth="2"
//                 opacity="0.7"
//               />
//               {/* Labels */}
//               <text x={triangle1[0].x - 5} y={triangle1[0].y + 15} className="text-sm font-medium">A</text>
//               <text x={triangle1[1].x + 5} y={triangle1[1].y + 15} className="text-sm font-medium">B</text>
//               <text x={triangle1[2].x} y={triangle1[2].y - 5} className="text-sm font-medium">C</text>
//               <text x={triangle2[0].x - 5} y={triangle2[0].y + 15} className="text-sm font-medium">D</text>
//               <text x={triangle2[1].x + 5} y={triangle2[1].y + 15} className="text-sm font-medium">E</text>
//               <text x={triangle2[2].x} y={triangle2[2].y - 5} className="text-sm font-medium">F</text>
//             </svg>
//           </div>
//         </div>
//       </div>

//         <p className="text-sm text-gray-600 mb-4 text-center">
//         Enter corresponding side lengths of two similar triangles to calculate scale factors and ratios.
//       </p>

//       {/* Input for Side Lengths */}
//       <div className="mb-6">
//         <div className="flex gap-4">
//           <div className="flex-1">
//             <label htmlFor="side1" className="block text-sm font-medium text-gray-700 mb-2">
//               Side Length (Triangle 1)
//             </label>
//             <input
//               type="number"
//               id="side1"
//               min="0.1"
//               step="0.1"
//               value={side1}
//               onChange={(e) => handleSideChange(e, setSide1)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="e.g., 2"
//             />
//           </div>
//           <div className="flex-1">
//             <label htmlFor="side2" className="block text-sm font-medium text-gray-700 mb-2">
//               Corresponding Side (Triangle 2)
//             </label>
//             <input
//               type="number"
//               id="side2"
//               min="0.1"
//               step="0.1"
//               value={side2}
//               onChange={(e) => handleSideChange(e, setSide2)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="e.g., 3"
//             />
//           </div>
//         </div>
//         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//       </div>

//       {/* Feedback */}
//       <div className="text-sm text-gray-600 mt-6">
//         <p>
//           <strong>Linear Scale Factor:</strong> k = {scaleFactor}
//         </p>
//         <p>
//           <strong>Area Ratio:</strong> k² = {areaRatio}
//         </p>
//         <p>
//           <strong>Volume Ratio:</strong> k³ = {volumeRatio}
//         </p>
//         <p className="mt-2">
//           Enter corresponding side lengths (e.g., AB and DE) to compute the scale factor. For example, if side AB = 2 and DE = 3, then k = 3/2 = 1.5, area ratio = 2.25, volume ratio = 3.375.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SimilarShapesProblems;

import React, { useState } from "react";

const SimilarShapesProblems: React.FC = () => {
  const [side1, setSide1] = useState<string>("2");
  const [side2, setSide2] = useState<string>("3");
  const [error, setError] = useState<string>("");

  // Calculate scale factor and ratios
  const side1Num = parseFloat(side1);
  const side2Num = parseFloat(side2);
  const scaleFactor = !isNaN(side1Num) && !isNaN(side2Num) && side1Num > 0 && side2Num > 0
    ? (side2Num / side1Num).toFixed(2)
    : "N/A";
  const areaRatio = scaleFactor !== "N/A" ? (parseFloat(scaleFactor) ** 2).toFixed(2) : "N/A";
  const volumeRatio = scaleFactor !== "N/A" ? (parseFloat(scaleFactor) ** 3).toFixed(2) : "N/A";

  const handleSideChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setSide: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = e.target.value;
    setSide(value);
    const numValue = parseFloat(value);
    const otherSide = setSide === setSide1 ? side2 : side1;
    const otherNum = parseFloat(otherSide);

    if (isNaN(numValue) || numValue <= 0 || isNaN(otherNum) || otherNum <= 0) {
      setError("Please enter positive numbers for both sides.");
    } else {
      setError("");
    }
  };

  // Triangle points (base triangle with side length 50 for visualization)
  const triangle1 = [
    { x: 0, y: 50 }, // Bottom-left
    { x: 50, y: 50 }, // Bottom-right
    { x: 25, y: 0 }, // Top
  ];
  const triangle2 = triangle1.map(p => ({
    x: p.x * (scaleFactor !== "N/A" ? parseFloat(scaleFactor) : 1) + 80,
    y: p.y * (scaleFactor !== "N/A" ? parseFloat(scaleFactor) : 1),
  }));

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
        Similar Shapes Problem Solver
      </h3>
  

      {/* Visualization */}
      <div className="flex flex-col items-center gap-6">
        <div className="w-full">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Triangle Comparison</h4>
          <div className="flex justify-center">
            <svg
              width="100%"
              height={`${100 * (scaleFactor !== "N/A" ? Math.max(parseFloat(scaleFactor), 1) : 1)}`}
              viewBox={`0 0 200 ${100 * (scaleFactor !== "N/A" ? Math.max(parseFloat(scaleFactor), 1) : 1)}`}
              className="max-w-full"
            >
              {/* Triangle 1 */}
              <polygon
                points={triangle1.map(p => `${p.x},${p.y}`).join(" ")}
                fill="none"
                stroke="blue"
                strokeWidth="2"
              />
              {/* Triangle 2 */}
              <polygon
                points={triangle2.map(p => `${p.x},${p.y}`).join(" ")}
                fill="none"
                stroke="red"
                strokeWidth="2"
                opacity="0.7"
              />
              {/* Labels */}
              <text x={triangle1[0].x - 5} y={triangle1[0].y + 15} className="text-sm font-medium">A</text>
              <text x={triangle1[1].x + 5} y={triangle1[1].y + 15} className="text-sm font-medium">B</text>
              <text x={triangle1[2].x} y={triangle1[2].y - 5} className="text-sm font-medium">C</text>
              <text x={triangle2[0].x - 5} y={triangle2[0].y + 15} className="text-sm font-medium">D</text>
              <text x={triangle2[1].x + 5} y={triangle2[1].y + 15} className="text-sm font-medium">E</text>
              <text x={triangle2[2].x} y={triangle2[2].y - 5} className="text-sm font-medium">F</text>
            </svg>
          </div>
        </div>
      </div>


    <p className="text-sm text-gray-600 mb-4 text-center">
        Enter corresponding side lengths of two similar triangles to calculate scale factors and ratios.
      </p>

      {/* Input for Side Lengths */}
      <div className="mb-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="side1" className="block text-sm font-medium text-gray-700 mb-2">
              Side Length (Triangle 1)
            </label>
            <input
              type="number"
              id="side1"
              min="0.1"
              step="0.1"
              value={side1}
              onChange={(e) => handleSideChange(e, setSide1)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 2"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="side2" className="block text-sm font-medium text-gray-700 mb-2">
              Corresponding Side (Triangle 2)
            </label>
            <input
              type="number"
              id="side2"
              min="0.1"
              step="0.1"
              value={side2}
              onChange={(e) => handleSideChange(e, setSide2)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 3"
            />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
      
      {/* Feedback */}
      <div className="text-sm text-gray-600 mt-6">
        <p>
          <strong>Linear Scale Factor:</strong> k = {scaleFactor}
        </p>
        <p>
          <strong>Area Ratio:</strong> k² = {areaRatio}
        </p>
        <p>
          <strong>Volume Ratio:</strong> k³ = {volumeRatio}
        </p>
        <p className="mt-2">
          Enter corresponding side lengths (e.g., AB and DE) to compute the scale factor. For example, if side AB = 2 and DE = 3, then k = 3/2 = 1.5, area ratio = 2.25, volume ratio = 3.375.
        </p>
      </div>
    </div>
  );
};

export default SimilarShapesProblems;