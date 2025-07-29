// import React, { useState } from 'react';

// // Define the possible regions/selections
// type VennSelection = 'U' | 'A-only' | 'B-only' | 'union' | 'intersection' | null;

// // Props for the component
// interface InteractiveVennDiagramProps {
//   labelA?: string;
//   labelB?: string;
//   labelU?: string;
// }

// const InteractiveVennDiagram: React.FC<InteractiveVennDiagramProps> = ({ 
//   labelA = 'A', 
//   labelB = 'B', 
//   labelU = 'U' 
// }) => {
//   // State to track the currently selected/highlighted region
//   const [activeSelection, setActiveSelection] = useState<VennSelection>(null);

//   // Handler for button clicks
//   const handleSelectRegion = (region: VennSelection) => {
//     // Toggle off if the same region is clicked again
//     setActiveSelection(prev => prev === region ? null : region);
//   };

//   // Helper function to get region description
//   const getRegionDescription = (): string => {
//     switch (activeSelection) {
//       case 'U': return `The Universal Set ${labelU}: All elements under consideration, including those in sets ${labelA} and ${labelB}.`;
//       case 'A-only': return `Elements in set ${labelA} only (${labelA} ∩ ${labelB}')`;
//       case 'B-only': return `Elements in set ${labelB} only (${labelA}' ∩ ${labelB})`;
//       case 'union': return `Elements in either set ${labelA} or set ${labelB} or both (${labelA} ∪ ${labelB})`;
//       case 'intersection': return `Elements in both set ${labelA} and set ${labelB} (${labelA} ∩ ${labelB})`;
//       default: return 'Select a region using the buttons below to highlight it.';
//     }
//   };

//   // --- SVG Dimensions and Calculations (Adjusted for mobile) ---
//   const width = 320;
//   const height = 250;
//   const padding = 15;
//   const circleRadius = 55;
//   // --- Positions ---
//   const circleOffsetNormal = 70; // Standard distance for A and B
//   const circleOffsetOverlap = 40; // Reduced distance for overlap (Intersection)
//   const centerX = width / 2;
//   const centerY = height / 2 - 10;
//   // Determine current offsets based on selection
//   const currentCircleOffset = activeSelection === 'intersection' ? circleOffsetOverlap : circleOffsetNormal;
//   // --- End Positions ---

//   // --- Color Definitions ---
//   const inactiveColor = "#D1D5DB"; // gray-300 - For non-selected elements
//   const strokeColor = "#4B5563"; // gray-600
//   const labelColor = "#1F2937"; // gray-800
//   const highlightColors: Record<'U' | 'A-only' | 'B-only' | 'union' | 'intersection', string> = {
//     'U': "#C7D2FE", // indigo-200 (Universal Set color)
//     'A-only': "#93C5FD", // blue-300
//     'B-only': "#FECACA", // red-300
//     'union': "#FDE68A", // yellow-200
//     'intersection': "#10B981", // green-500 (Button color)
//   };
//   // Specific colors for A and B during intersection (chosen to blend to green-500)
//   const intersectionColorA = "#22D3EE"; // cyan-400
//   const intersectionColorB = "#FDE68A"; // yellow-200
//   // --- End Definitions ---

//   // Helper to check if a specific region is active
//   const isRegionActive = (regionToCheck: VennSelection): boolean => {
//     return activeSelection === regionToCheck;
//   };

//   // Helper to determine if a circle should be highlighted
//   const isCircleHighlighted = (circle: 'A' | 'B'): boolean => {
//     // Circles are highlighted if:
//     // - Universal Set is selected
//     // - Union is selected
//     // - Intersection is selected
//     // - The specific 'A-only' or 'B-only' is selected
//     if (isRegionActive('U')) return true;
//     if (isRegionActive('union')) return true;
//     if (isRegionActive('intersection')) return true;
//     if (circle === 'A' && isRegionActive('A-only')) return true;
//     if (circle === 'B' && isRegionActive('B-only')) return true;
//     return false;
//   };

//   // Helper to get the color for a circle based on active selection
//   const getCircleColor = (circle: 'A' | 'B'): string => {
//     if (isCircleHighlighted(circle)) {
//       // Order of checks matters: more specific selections override 'U'
//       if (isRegionActive('U')) {
//          // NEW: When U is selected, circles are also colored with the U color
//          return highlightColors['U']; // indigo-200
//       }
//       if (isRegionActive('union')) {
//         return highlightColors['union'];
//       } else if (isRegionActive('intersection')) {
//         // Return distinct colors for A and B during intersection
//         return circle === 'A' ? intersectionColorA : intersectionColorB;
//       } else if (isRegionActive('A-only') && circle === 'A') {
//         return highlightColors['A-only'];
//       } else if (isRegionActive('B-only') && circle === 'B') {
//         return highlightColors['B-only'];
//       }
//       // Fallback if somehow highlighted but no specific condition matched (shouldn't happen)
//       return inactiveColor; 
//     }
//     return inactiveColor;
//   };

//   return (
//     <div className="flex flex-col items-center w-full p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
//       <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Interactive Venn Diagram</h3>
      
//       {/* SVG Container */}
//       <div className="flex justify-center mb-4 w-full">
//         <div className="overflow-hidden rounded-lg border border-gray-300 bg-white"> 
//          <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="block"> 
//             {/* 1. Universal Set Rectangle */}
//             <rect 
//               x={padding} 
//               y={padding} 
//               width={width - 2 * padding} 
//               height={height - 2 * padding} 
//               fill={isRegionActive('U') ? highlightColors['U'] : inactiveColor} 
//               stroke={strokeColor}
//               strokeWidth="1.5"
//               strokeDasharray="4,4"
//             />
//             {/* Universal Set Label */}
//             <text 
//               x={width - padding - 5} 
//               y={padding + 12} 
//               textAnchor="end" 
//               fill={labelColor} 
//               fontSize="14" 
//               fontWeight={isRegionActive('U') ? "bold" : "normal"}
//             >
//               {labelU}
//             </text>

//             {/* 2. Set A Circle (Base circle, no blend mode needed) */}
//             <circle
//               cx={centerX - currentCircleOffset}
//               cy={centerY}
//               r={circleRadius}
//               fill={getCircleColor('A')}
//               stroke={strokeColor}
//               strokeWidth="1.5"
//               className="transition-all duration-500 ease-in-out"
//             />
//             {/* Set A Label */}
//             <text 
//               x={centerX - currentCircleOffset} 
//               y={centerY} 
//               textAnchor="middle" 
//               dy=".3em" 
//               fill={labelColor}
//               fontSize="16" 
//               fontWeight="bold"
//               className="transition-all duration-500 ease-in-out"
//             >
//               {labelA}
//             </text>

//             {/* 3. Set B Circle (This one gets the blend mode for intersection) */}
//             <circle
//               cx={centerX + currentCircleOffset}
//               cy={centerY}
//               r={circleRadius}
//               fill={getCircleColor('B')}
//               stroke={strokeColor}
//               strokeWidth="1.5"
//               className={`transition-all duration-500 ease-in-out ${
//                 isRegionActive('intersection') ? 'mix-blend-multiply' : ''
//               }`}
//             />
//             {/* Set B Label */}
//             <text 
//               x={centerX + currentCircleOffset} 
//               y={centerY} 
//               textAnchor="middle" 
//               dy=".3em" 
//               fill={labelColor}
//               fontSize="16" 
//               fontWeight="bold"
//               className="transition-all duration-500 ease-in-out"
//             >
//               {labelB}
//             </text>

//             {/* Labels for Specific Regions */}
            
//             {/* A only Label */}
//             <text 
//               x={centerX - circleOffsetNormal - 35} 
//               y={centerY} 
//               textAnchor="middle" 
//               dy=".3em" 
//               fill={isRegionActive('A-only') ? highlightColors['A-only'] : inactiveColor}
//               fontSize="12" 
//               fontWeight={isRegionActive('A-only') ? "bold" : "normal"}
//               className="pointer-events-none select-none"
//             >
//               A only
//             </text>
            
//             {/* B only Label */}
//             <text 
//               x={centerX + circleOffsetNormal + 35} 
//               y={centerY} 
//               textAnchor="middle" 
//               dy=".3em" 
//               fill={isRegionActive('B-only') ? highlightColors['B-only'] : inactiveColor}
//               fontSize="12" 
//               fontWeight={isRegionActive('B-only') ? "bold" : "normal"}
//               className="pointer-events-none select-none"
//             >
//               B only
//             </text>
            
//             {/* Union Label */}
//             <text 
//               x={centerX} 
//               y={centerY - 20} 
//               textAnchor="middle" 
//               fill={isRegionActive('union') ? highlightColors['union'] : inactiveColor}
//               fontSize="12" 
//               fontWeight={isRegionActive('union') ? "bold" : "normal"}
//               className="pointer-events-none select-none"
//             >
//               A ∪ B
//             </text>

//             {/* Intersection Label (Placed in the overlapping area) */}
//             <text 
//               x={centerX} 
//               y={centerY + 8} 
//               textAnchor="middle" 
//               fill={isRegionActive('intersection') ? highlightColors['intersection'] : inactiveColor}
//               fontSize="12" 
//               fontWeight={isRegionActive('intersection') ? "bold" : "normal"}
//               className="pointer-events-none select-none"
//             >
//               A ∩ B
//             </text>
            
//             {/* Outside Label */}
//             <text 
//               x={centerX} 
//               y={height - 25} 
//               textAnchor="middle" 
//               fill={isRegionActive('U') ? highlightColors['U'] : inactiveColor} 
//               fontSize="12" 
//               fontWeight={isRegionActive('U') ? "bold" : "normal"}
//               className="pointer-events-none select-none"
//             >
//               Outside A & B
//             </text>
//           </svg>
//         </div>
//       </div>

//       {/* Control Buttons - Wrapped and full width on mobile */}
//       <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
//         <button
//           onClick={() => handleSelectRegion('U')}
//           className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
//             isRegionActive('U')
//               ? 'bg-indigo-500 text-white' // Button color matches highlightColors['U'] (conceptually)
//               : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//           }`}
//         >
//           {labelU} (Universal)
//         </button>
//         <button
//           onClick={() => handleSelectRegion('A-only')}
//           className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
//             isRegionActive('A-only')
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//           }`}
//         >
//           {labelA} Only
//         </button>
//         <button
//           onClick={() => handleSelectRegion('B-only')}
//           className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
//             isRegionActive('B-only')
//               ? 'bg-red-500 text-white'
//               : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//           }`}
//         >
//           {labelB} Only
//         </button>
//         <button
//           onClick={() => handleSelectRegion('union')}
//           className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
//             isRegionActive('union')
//               ? 'bg-yellow-500 text-gray-800'
//               : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//           }`}
//         >
//           A ∪ B (Union)
//         </button>
//         {/* Intersection Button */}
//         <button
//           onClick={() => handleSelectRegion('intersection')}
//           className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
//             isRegionActive('intersection')
//               ? 'bg-green-500 text-white'
//               : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//           }`}
//         >
//           A ∩ B (Intersection)
//         </button>
//         <button
//           onClick={() => setActiveSelection(null)}
//           className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full transition-colors"
//         >
//           Clear
//         </button>
//       </div>

//       {/* Description Area */}
//       <div className="p-3 bg-white border border-gray-300 rounded-lg w-full text-center min-h-[50px] flex items-center justify-center text-sm">
//         <p className="text-gray-700 font-medium">
//           {getRegionDescription()}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default InteractiveVennDiagram;


// src/Components/InteractiveVennDiagram.tsx
import React, { useState } from 'react';

// Define the possible regions/selections (ADDED A-complement, B-complement)
type VennSelection = 'U' | 'A-only' | 'B-only' | 'union' | 'intersection' | 'A-complement' | 'B-complement' | null;

// Props for the component
interface InteractiveVennDiagramProps {
  labelA?: string;
  labelB?: string;
  labelU?: string;
}

const InteractiveVennDiagram: React.FC<InteractiveVennDiagramProps> = ({ 
  labelA = 'A', 
  labelB = 'B', 
  labelU = 'U' 
}) => {
  // State to track the currently selected/highlighted region
  const [activeSelection, setActiveSelection] = useState<VennSelection>(null);

  // Handler for button clicks
  const handleSelectRegion = (region: VennSelection) => {
    // Toggle off if the same region is clicked again
    setActiveSelection(prev => prev === region ? null : region);
  };

  // Helper function to get region description (ADDED descriptions for complements)
  const getRegionDescription = (): string => {
    switch (activeSelection) {
      case 'U': return `The Universal Set ${labelU}: All elements under consideration, including those in sets ${labelA} and ${labelB}.`;
      case 'A-only': return `Elements in set ${labelA} only (${labelA} ∩ ${labelB}')`;
      case 'B-only': return `Elements in set ${labelB} only (${labelA}' ∩ ${labelB})`;
      case 'union': return `Elements in either set ${labelA} or set ${labelB} or both (${labelA} ∪ ${labelB})`;
      case 'intersection': return `Elements in both set ${labelA} and set ${labelB} (${labelA} ∩ ${labelB})`;
      case 'A-complement': return `Elements NOT in set ${labelA} (${labelA}') - Everything in ${labelU} except ${labelA}.`;
      case 'B-complement': return `Elements NOT in set ${labelB} (${labelB}') - Everything in ${labelU} except ${labelB}.`;
      default: return 'Select a region using the buttons below to highlight it.';
    }
  };

  // --- SVG Dimensions and Calculations (Adjusted for mobile) ---
  const width = 320;
  const height = 270; // Slightly increased height for more labels
  const padding = 15;
  const circleRadius = 55;
  // --- Positions ---
  const circleOffsetNormal = 70; // Standard distance for A and B
  const circleOffsetOverlap = 40; // Reduced distance for overlap (Intersection)
  const centerX = width / 2;
  const centerY = height / 2 - 10;
  // Determine current offsets based on selection
  const currentCircleOffset = activeSelection === 'intersection' ? circleOffsetOverlap : circleOffsetNormal;
  // --- End Positions ---

  // --- Color Definitions (ADDED colors for complements) ---
  const inactiveColor = "#D1D5DB"; // gray-300 - For non-selected elements
  const strokeColor = "#4B5563"; // gray-600
  const labelColor = "#1F2937"; // gray-800
  const highlightColors: Record<'U' | 'A-only' | 'B-only' | 'union' | 'intersection' | 'A-complement' | 'B-complement', string> = {
    'U': "#C7D2FE", // indigo-200 (Universal Set color)
    'A-only': "#93C5FD", // blue-300
    'B-only': "#FECACA", // red-300
    'union': "#FDE68A", // yellow-200
    'intersection': "#10B981", // green-500 (Button color)
    'A-complement': "#A5B4FC", // indigo-300 (Slightly different shade for A')
    'B-complement': "#A78BFA", // violet-400 (Distinct color for B')
  };
  // Specific colors for A and B during intersection (chosen to blend to green-500)
  const intersectionColorA = "#22D3EE"; // cyan-400
  const intersectionColorB = "#FDE68A"; // yellow-200
  // --- End Definitions ---

  // Helper to check if a specific region is active
  const isRegionActive = (regionToCheck: VennSelection): boolean => {
    return activeSelection === regionToCheck;
  };

  // Helper to determine if a circle should be highlighted
  const isCircleHighlighted = (circle: 'A' | 'B'): boolean => {
    // Circles are highlighted if:
    if (isRegionActive('U')) return true;
    if (isRegionActive('union')) return true;
    if (isRegionActive('intersection')) return true;
    if (isRegionActive('A-complement') && circle === 'B') return true; // B is part of A'
    if (isRegionActive('B-complement') && circle === 'A') return true; // A is part of B'
    if (circle === 'A' && isRegionActive('A-only')) return true;
    if (circle === 'B' && isRegionActive('B-only')) return true;
    return false;
  };

  // Helper to get the color for a circle based on active selection
  const getCircleColor = (circle: 'A' | 'B'): string => {
    if (isCircleHighlighted(circle)) {
      // Order of checks matters: more specific selections override 'U'
      if (isRegionActive('U')) {
         return highlightColors['U']; // indigo-200
      }
      if (isRegionActive('A-complement')) {
        // A' highlights B and the outside area (rectangle)
        // A itself is not highlighted
        if (circle === 'B') return highlightColors['A-complement'];
        // A circle itself gets inactive color for A'
        return inactiveColor; 
      }
      if (isRegionActive('B-complement')) {
        // B' highlights A and the outside area (rectangle)
        // B itself is not highlighted
        if (circle === 'A') return highlightColors['B-complement'];
        // B circle itself gets inactive color for B'
        return inactiveColor;
      }
      if (isRegionActive('union')) {
        return highlightColors['union'];
      } else if (isRegionActive('intersection')) {
        // Return distinct colors for A and B during intersection
        return circle === 'A' ? intersectionColorA : intersectionColorB;
      } else if (isRegionActive('A-only') && circle === 'A') {
        return highlightColors['A-only'];
      } else if (isRegionActive('B-only') && circle === 'B') {
        return highlightColors['B-only'];
      }
      // Fallback if somehow highlighted but no specific condition matched (shouldn't happen often)
      return inactiveColor; 
    }
    return inactiveColor;
  };

  // Helper to get the color for the Universal Set rectangle
  const getUniversalSetColor = (): string => {
     // Highlight U color if U, A-complement, or B-complement is selected
     if (isRegionActive('U') || isRegionActive('A-complement') || isRegionActive('B-complement')) {
        return highlightColors['U'];
     }
     return inactiveColor;
  };

  // Helper to get the color for the "Outside A & B" label
  const getOutsideLabelColor = (): string => {
     // Highlight outside label if U, A-complement, or B-complement is selected
     if (isRegionActive('U') || isRegionActive('A-complement') || isRegionActive('B-complement')) {
        return highlightColors['U']; // Use U color for outside when relevant
     }
     return inactiveColor;
  };

  return (
    <div className="flex flex-col items-center w-full p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Interactive Venn Diagram</h3>
      
      {/* SVG Container */}
      <div className="flex justify-center mb-4 w-full">
        <div className="overflow-hidden rounded-lg border border-gray-300 bg-white"> 
         <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="block"> 
            {/* 1. Universal Set Rectangle (UPDATED fill logic) */}
            <rect 
              x={padding} 
              y={padding} 
              width={width - 2 * padding} 
              height={height - 2 * padding} 
              fill={getUniversalSetColor()} 
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeDasharray="4,4"
            />
            {/* Universal Set Label */}
            <text 
              x={width - padding - 5} 
              y={padding + 12} 
              textAnchor="end" 
              fill={labelColor} 
              fontSize="14" 
              fontWeight={isRegionActive('U') ? "bold" : "normal"}
            >
              {labelU}
            </text>

            {/* 2. Set A Circle (Base circle, no blend mode needed) */}
            <circle
              cx={centerX - currentCircleOffset}
              cy={centerY}
              r={circleRadius}
              fill={getCircleColor('A')}
              stroke={strokeColor}
              strokeWidth="1.5"
              className="transition-all duration-500 ease-in-out"
            />
            {/* Set A Label */}
            <text 
              x={centerX - currentCircleOffset} 
              y={centerY} 
              textAnchor="middle" 
              dy=".3em" 
              fill={labelColor}
              fontSize="16" 
              fontWeight="bold"
              className="transition-all duration-500 ease-in-out"
            >
              {labelA}
            </text>

            {/* 3. Set B Circle (This one gets the blend mode for intersection) */}
            <circle
              cx={centerX + currentCircleOffset}
              cy={centerY}
              r={circleRadius}
              fill={getCircleColor('B')}
              stroke={strokeColor}
              strokeWidth="1.5"
              className={`transition-all duration-500 ease-in-out ${
                isRegionActive('intersection') ? 'mix-blend-multiply' : ''
              }`}
            />
            {/* Set B Label */}
            <text 
              x={centerX + currentCircleOffset} 
              y={centerY} 
              textAnchor="middle" 
              dy=".3em" 
              fill={labelColor}
              fontSize="16" 
              fontWeight="bold"
              className="transition-all duration-500 ease-in-out"
            >
              {labelB}
            </text>

            {/* Labels for Specific Regions */}
            
            {/* A only Label */}
            <text 
              x={centerX - circleOffsetNormal - 35} 
              y={centerY} 
              textAnchor="middle" 
              dy=".3em" 
              fill={isRegionActive('A-only') ? highlightColors['A-only'] : inactiveColor}
              fontSize="12" 
              fontWeight={isRegionActive('A-only') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              A only
            </text>
            
            {/* B only Label */}
            <text 
              x={centerX + circleOffsetNormal + 35} 
              y={centerY} 
              textAnchor="middle" 
              dy=".3em" 
              fill={isRegionActive('B-only') ? highlightColors['B-only'] : inactiveColor}
              fontSize="12" 
              fontWeight={isRegionActive('B-only') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              B only
            </text>
            
            {/* Union Label */}
            <text 
              x={centerX} 
              y={centerY - 25} 
              textAnchor="middle" 
              fill={isRegionActive('union') ? highlightColors['union'] : inactiveColor}
              fontSize="12" 
              fontWeight={isRegionActive('union') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              A ∪ B
            </text>

            {/* Intersection Label (Placed in the overlapping area) */}
            <text 
              x={centerX} 
              y={centerY} 
              textAnchor="middle" 
              fill={isRegionActive('intersection') ? highlightColors['intersection'] : inactiveColor}
              fontSize="12" 
              fontWeight={isRegionActive('intersection') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              A ∩ B
            </text>

            {/* A Complement Label (Placed near top left) */}
            <text 
              x={centerX - circleOffsetNormal - 50} 
              y={centerY - circleRadius - 10} 
              textAnchor="middle" 
              fill={isRegionActive('A-complement') ? highlightColors['A-complement'] : inactiveColor}
              fontSize="12" 
              fontWeight={isRegionActive('A-complement') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              A'
            </text>

            {/* B Complement Label (Placed near top right) */}
            <text 
              x={centerX + circleOffsetNormal + 50} 
              y={centerY - circleRadius - 10} 
              textAnchor="middle" 
              fill={isRegionActive('B-complement') ? highlightColors['B-complement'] : inactiveColor}
              fontSize="12" 
              fontWeight={isRegionActive('B-complement') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              B'
            </text>
            
            {/* Outside Label (UPDATED fill logic) */}
            <text 
              x={centerX} 
              y={height - 25} 
              textAnchor="middle" 
              fill={getOutsideLabelColor()} 
              fontSize="12" 
              fontWeight={isRegionActive('U') || isRegionActive('A-complement') || isRegionActive('B-complement') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              Outside A & B
            </text>
          </svg>
        </div>
      </div>

      {/* Control Buttons - Wrapped and full width on mobile */}
      {/* {/* Increased gap slightly for more buttons --> */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-4 w-full">
        <button
          onClick={() => handleSelectRegion('U')}
          className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('U')
              ? 'bg-indigo-500 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {labelU} (Universal)
        </button>
        <button
          onClick={() => handleSelectRegion('A-only')}
          className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('A-only')
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {labelA} Only
        </button>
        <button
          onClick={() => handleSelectRegion('B-only')}
          className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('B-only')
              ? 'bg-red-500 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {labelB} Only
        </button>
        <button
          onClick={() => handleSelectRegion('union')}
          className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('union')
              ? 'bg-yellow-500 text-gray-800'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          A ∪ B (Union)
        </button>
        <button
          onClick={() => handleSelectRegion('intersection')}
          className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('intersection')
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          A ∩ B (Intersection)
        </button>
        {/* ADDED Complement Buttons */}
        <button
          onClick={() => handleSelectRegion('A-complement')}
          className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('A-complement')
              ? 'bg-indigo-300 text-gray-800' // Text color adjusted for contrast
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {labelA}' (Complement)
        </button>
        <button
          onClick={() => handleSelectRegion('B-complement')}
          className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('B-complement')
              ? 'bg-violet-400 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {labelB}' (Complement)
        </button>
        <button
          onClick={() => setActiveSelection(null)}
          className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full transition-colors"
        >
          Clear
        </button>
      </div>

      {/* Description Area */}
      <div className="p-3 bg-white border border-gray-300 rounded-lg w-full text-center min-h-[50px] flex items-center justify-center text-sm">
        <p className="text-gray-700 font-medium">
          {getRegionDescription()}
        </p>
      </div>
    </div>
  );
};

export default InteractiveVennDiagram;