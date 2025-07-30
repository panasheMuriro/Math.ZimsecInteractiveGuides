// src/Components/InteractiveVennDiagram.tsx
import React, { useState } from 'react';

// Define the possible regions/selections
type VennSelection = 'U' | 'A-only' | 'B-only' | 'union' | 'intersection' | 'A-complement' | 'B-complement' | 'union-complement' | null;

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

  // Helper function to get region description
  const getRegionDescription = (): string => {
    switch (activeSelection) {
      case 'U': return `The Universal Set ${labelU}: All elements under consideration, including those in sets ${labelA} and ${labelB}.`;
      case 'A-only': return `Elements in set ${labelA} only (${labelA} ∩ ${labelB}')`;
      case 'B-only': return `Elements in set ${labelB} only (${labelA}' ∩ ${labelB})`;
      case 'union': return `Elements in either set ${labelA} or set ${labelB} or both (${labelA} ∪ ${labelB})`;
      case 'intersection': return `Elements in both set ${labelA} and set ${labelB} (${labelA} ∩ ${labelB})`;
      case 'A-complement': return `Elements NOT in set ${labelA} (${labelA}') - Everything in ${labelU} except ${labelA}.`;
      case 'B-complement': return `Elements NOT in set ${labelB} (${labelB}') - Everything in ${labelU} except ${labelB}.`;
      case 'union-complement': return `Elements NOT in set ${labelA} AND NOT in set ${labelB} ((${labelA} ∪ ${labelB})') - Everything outside both sets.`;
      default: return 'Select a region using the buttons below to highlight it.';
    }
  };

  // --- SVG Dimensions and Calculations (Adjusted for mobile) ---
  const width = 320;
  const height = 270;
  const padding = 15;
  const circleRadius = 55;
  // --- Positions ---
  const circleOffsetNormal = 70;
  const circleOffsetOverlap = 40;
  const centerX = width / 2;
  const centerY = height / 2 - 10;
  const currentCircleOffset = activeSelection === 'intersection' ? circleOffsetOverlap : circleOffsetNormal;
  // --- End Positions ---

  // --- Color Definitions (Adjusted inactiveColor for slate background) ---
  const inactiveColor = "#94A3B8"; // slate-400
  const strokeColor = "#475569"; // slate-600
  const labelColor = "#1E293B"; // slate-800
  const highlightColors: Record<'U' | 'A-only' | 'B-only' | 'union' | 'intersection' | 'A-complement' | 'B-complement' | 'union-complement', string> = {
    'U': "#C7D2FE", // indigo-200
    'A-only': "#93C5FD", // blue-300
    'B-only': "#FECACA", // red-300
    'union': "#FDE68A", // yellow-200
    'intersection': "#10B981", // green-500
    'A-complement': "#A5B4FC", // indigo-300
    'B-complement': "#A78BFA", // violet-400
    'union-complement': "#FBCFE8", // pink-200
  };
  const intersectionColorA = "#22D3EE"; // cyan-400
  const intersectionColorB = "#FDE68A"; // yellow-200
  // --- End Definitions ---

  const isRegionActive = (regionToCheck: VennSelection): boolean => {
    return activeSelection === regionToCheck;
  };

  const isCircleHighlighted = (circle: 'A' | 'B'): boolean => {
    if (isRegionActive('U')) return true;
    if (isRegionActive('union')) return true;
    if (isRegionActive('intersection')) return true;
    if (isRegionActive('A-complement') && circle === 'B') return true;
    if (isRegionActive('B-complement') && circle === 'A') return true;
    if (isRegionActive('union-complement')) return false;
    if (circle === 'A' && isRegionActive('A-only')) return true;
    if (circle === 'B' && isRegionActive('B-only')) return true;
    return false;
  };

  // Helper to get the color for a circle based on active selection
  // MODIFIED: Ensured solid color for A when B' is active AND B when A' is active
  const getCircleColor = (circle: 'A' | 'B'): string => {
    if (isCircleHighlighted(circle)) {
      if (isRegionActive('U')) {
         return highlightColors['U'];
      }
      if (isRegionActive('A-complement')) {
        // MODIFIED LOGIC FOR A':
        // A' = Everything in U except A. So B (including A ∩ B) is part of A'.
        // Visual: U rectangle and B circle should be the same solid color (highlightColors['U']).
        // A circle itself should be inactiveColor.
        if (circle === 'B') return highlightColors['U']; // Solid U color for B circle when A' is selected
        return inactiveColor; // A circle is inactive for A'
      }
      if (isRegionActive('B-complement')) {
        // LOGIC FOR B' (as before, but clarified):
        // B' = Everything in U except B. So A (including A ∩ B) is part of B'.
        // Visual: U rectangle and A circle should be the same solid color (highlightColors['U']).
        if (circle === 'A') return highlightColors['U']; // Solid U color for A circle when B' is selected
        return inactiveColor; // B circle is inactive for B'
      }
      if (isRegionActive('union')) {
        return highlightColors['union'];
      } else if (isRegionActive('intersection')) {
        return circle === 'A' ? intersectionColorA : intersectionColorB;
      } else if (isRegionActive('A-only') && circle === 'A') {
        return highlightColors['A-only'];
      } else if (isRegionActive('B-only') && circle === 'B') {
        return highlightColors['B-only'];
      }
      return inactiveColor;
    }
    return inactiveColor;
  };

  // Helper to get the color for the Universal Set rectangle
  // Ensured U color is used for A', B', and (A U B)' as well
  const getUniversalSetColor = (): string => {
     if (isRegionActive('U') || isRegionActive('A-complement') || isRegionActive('B-complement') || isRegionActive('union-complement')) {
        return highlightColors['U']; // Use U color for all these
     }
     return inactiveColor;
  };

  const getOutsideLabelColor = (): string => {
     if (isRegionActive('U') || isRegionActive('A-complement') || isRegionActive('B-complement') || isRegionActive('union-complement')) {
        if (isRegionActive('union-complement')) {
            return highlightColors['union-complement'];
        }
        return highlightColors['U'];
     }
     return inactiveColor;
  };

  return (
    <div className="flex flex-col items-center w-full p-4 bg-slate-100 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold mb-3 text-slate-800 text-center">Interactive Venn Diagram</h3>
      
      <div className="flex justify-center mb-4 w-full">
        <div className="overflow-hidden rounded-lg border border-slate-300 bg-white">
         <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="block">
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

            <circle
              cx={centerX - currentCircleOffset}
              cy={centerY}
              r={circleRadius}
              fill={getCircleColor('A')}
              stroke={strokeColor}
              strokeWidth="1.5"
              className="transition-all duration-500 ease-in-out"
            />
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
            
            <text 
              x={centerX} 
              y={height - 25} 
              textAnchor="middle" 
              fill={getOutsideLabelColor()} 
              fontSize="12" 
              fontWeight={(isRegionActive('U') || isRegionActive('A-complement') || isRegionActive('B-complement') || isRegionActive('union-complement')) ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              {isRegionActive('union-complement') ? "(A ∪ B)'" : "Outside A & B"}
            </text>
          </svg>
        </div>
      </div>

      {/* Control Buttons - Added py-3 and adjusted background/colors */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
        <button
          onClick={() => handleSelectRegion('U')}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('U')
              ? 'bg-indigo-500 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {labelU} (Universal)
        </button>
        <button
          onClick={() => handleSelectRegion('A-only')}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('A-only')
              ? 'bg-blue-500 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {labelA} Only
        </button>
        <button
          onClick={() => handleSelectRegion('B-only')}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('B-only')
              ? 'bg-red-500 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {labelB} Only
        </button>
        <button
          onClick={() => handleSelectRegion('union')}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('union')
              ? 'bg-yellow-500 text-slate-800'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          A ∪ B (Union)
        </button>
        <button
          onClick={() => handleSelectRegion('intersection')}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('intersection')
              ? 'bg-green-500 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          A ∩ B (Intersection)
        </button>
        <button
          onClick={() => handleSelectRegion('A-complement')}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('A-complement')
              ? 'bg-indigo-300 text-slate-800' // Button color can remain distinct or match U if preferred
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {labelA}' (Complement)
        </button>
        <button
          onClick={() => handleSelectRegion('B-complement')}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('B-complement')
              ? 'bg-violet-400 text-white' // Button color can remain distinct
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {labelB}' (Complement)
        </button>
        <button
          onClick={() => handleSelectRegion('union-complement')}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('union-complement')
              // MODIFIED: Button color matches highlightColors['U'] (indigo-200)
              ? 'bg-indigo-200 text-slate-800 hover:bg-indigo-300' // Changed from bg-pink-400
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          (A ∪ B)' (Union Complement)
        </button>
        <button
          onClick={() => setActiveSelection(null)}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Clear
        </button>
      </div>

      <div className="p-3 bg-white border border-slate-300 rounded-lg w-full text-center min-h-[50px] flex items-center justify-center text-sm">
        <p className="text-slate-700 font-medium">
          {getRegionDescription()}
        </p>
      </div>
    </div>
  );
};

export default InteractiveVennDiagram;