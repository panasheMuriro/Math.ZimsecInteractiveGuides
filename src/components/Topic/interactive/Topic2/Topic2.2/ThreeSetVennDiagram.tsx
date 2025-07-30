import React, { useState } from 'react';

// Define the possible regions/selections for three sets
type VennRegion =
  | 'only-A'
  | 'only-B'
  | 'only-C'
  | 'A-and-B-not-C'
  | 'A-and-C-not-B'
  | 'B-and-C-not-A'
  | 'intersection-ABC' // A ∩ B ∩ C
  | 'universal' // U
  | 'complement' // (A ∪ B ∪ C)'
  | null;

// Props for the component
interface ThreeSetVennDiagramProps {
  labelA?: string;
  labelB?: string;
  labelC?: string;
  labelU?: string;
  onRegionSelect?: (region: VennRegion) => void; // Optional callback
}

const ThreeSetVennDiagram: React.FC<ThreeSetVennDiagramProps> = ({
  labelA = 'A',
  labelB = 'B',
  labelC = 'C',
  labelU = 'U',
  onRegionSelect,
}) => {
  const [activeRegion, setActiveRegion] = useState<VennRegion>(null);

  const handleSelectRegion = (region: VennRegion) => {
    const newRegion = activeRegion === region ? null : region;
    setActiveRegion(newRegion);
    if (onRegionSelect) {
      onRegionSelect(newRegion);
    }
  };

  const getRegionDescription = (): string => {
    switch (activeRegion) {
      case 'only-A': return `Elements in set ${labelA} only.`;
      case 'only-B': return `Elements in set ${labelB} only.`;
      case 'only-C': return `Elements in set ${labelC} only.`;
      case 'A-and-B-not-C': return `Elements in both ${labelA} and ${labelB}, but not in ${labelC}.`;
      case 'A-and-C-not-B': return `Elements in both ${labelA} and ${labelC}, but not in ${labelB}.`;
      case 'B-and-C-not-A': return `Elements in both ${labelB} and ${labelC}, but not in ${labelA}.`;
      case 'intersection-ABC': return `Elements in all three sets ${labelA}, ${labelB}, and ${labelC}.`;
      case 'universal': return `The Universal Set ${labelU}: All elements under consideration.`;
      case 'complement': return `Elements in ${labelU} but not in ${labelA}, ${labelB}, or ${labelC}.`;
      default: return 'Select a region to see its description.';
    }
  };

  const description = getRegionDescription();

  // --- SVG Dimensions and Calculations ---
  const width = 340;
  const height = 300;
  const padding = 15;
  const circleRadius = 60;
  const centerX = width / 2;
  const centerY = height / 2 + 10;
  const triangleHeight = Math.sqrt(3) / 2 * 90;
  const offsetX = 45;
  const offsetY = triangleHeight / 2;

  const circleA_Cx = centerX;
  const circleA_Cy = centerY - offsetY;
  const circleB_Cx = centerX - offsetX;
  const circleB_Cy = centerY + offsetY;
  const circleC_Cx = centerX + offsetX;
  const circleC_Cy = centerY + offsetY;
  // --- End Positions ---

  // --- Color Definitions ---
  const inactiveColor = "#94A3B8"; // slate-400
  const strokeColor = "#475569"; // slate-600
  const labelColor = "#1E293B"; // slate-800
  const highlightColors: Record<
    'only-A' | 'only-B' | 'only-C' |
    'A-and-B-not-C' | 'A-and-C-not-B' | 'B-and-C-not-A' |
    'intersection-ABC' | 'universal' | 'complement' |
    'blend-pairwise' | 'blend-triple', // Added blend-triple
    string
  > = {
    'only-A': "#93C5FD", // blue-300
    'only-B': "#FECACA", // red-300
    'only-C': "#BBF7D0", // green-300
    'A-and-B-not-C': "#A5F3FC", // cyan-300 (Label color reference)
    'A-and-C-not-B': "#A5F3FC", // cyan-300 (Label color reference)
    'B-and-C-not-A': "#A5F3FC", // cyan-300 (Label color reference)
    'blend-pairwise': "#84CC16", // lime-500 (Pairwise intersection button/label color)
    // --- Specific blended result color for the triple intersection button ---
    'blend-triple': "#1E1B4B", // indigo-900 (Estimated dark blend result of A, B, C)
    // --- Other region colors ---
    'intersection-ABC': "#1E1B4B", // indigo-900 (Also used for the region label when active)
    'universal': "#C7D2FE", // indigo-200
    'complement': "#C7D2FE", // indigo-200
  };
  // --- Blend colors for pairwise intersections ---
  const blendColorCyan = "#22D3EE"; // cyan-400
  const blendColorYellow = "#FDE68A"; // yellow-200
  // --- Blend colors for triple intersection ---
  const blendColorA_ABC = "#3B82F6"; // blue-500
  const blendColorB_ABC = "#EF4444"; // red-500
  const blendColorC_ABC = "#10B981"; // green-500
  // --- End Definitions ---

  const isRegionActive = (regionToCheck: VennRegion): boolean => {
    return activeRegion === regionToCheck;
  };

  const isCircleHighlighted = (circle: 'A' | 'B' | 'C'): boolean => {
    if (!activeRegion) return false;

    switch (activeRegion) {
      case 'universal':
        return true;
      case 'complement':
        return false;
      case 'only-A':
        return circle === 'A';
      case 'only-B':
        return circle === 'B';
      case 'only-C':
        return circle === 'C';
      case 'A-and-B-not-C':
        return circle === 'A' || circle === 'B';
      case 'A-and-C-not-B':
        return circle === 'A' || circle === 'C';
      case 'B-and-C-not-A':
        return circle === 'B' || circle === 'C';
      case 'intersection-ABC':
        return true; // All circles for triple intersection
      default:
        return false;
    }
  };

  // Helper to get the base color for a circle based on active selection
  const getBaseCircleColor = (circle: 'A' | 'B' | 'C'): string => {
    if (isCircleHighlighted(circle)) {
      switch (activeRegion) {
        case 'universal':
            return highlightColors['universal'];
        case 'only-A':
          return circle === 'A' ? highlightColors['only-A'] : inactiveColor;
        case 'only-B':
          return circle === 'B' ? highlightColors['only-B'] : inactiveColor;
        case 'only-C':
          return circle === 'C' ? highlightColors['only-C'] : inactiveColor;
        case 'A-and-B-not-C':
          if (circle === 'A') return blendColorCyan;
          if (circle === 'B') return blendColorYellow;
          return inactiveColor;
        case 'A-and-C-not-B':
          if (circle === 'A') return blendColorCyan;
          if (circle === 'C') return blendColorYellow;
          return inactiveColor;
        case 'B-and-C-not-A':
          if (circle === 'B') return blendColorCyan;
          if (circle === 'C') return blendColorYellow;
          return inactiveColor;
        // --- Triple Intersection Logic ---
        case 'intersection-ABC':
             // Return distinct blend colors for A, B, and C
             if (circle === 'A') return blendColorA_ABC;
             if (circle === 'B') return blendColorB_ABC;
             if (circle === 'C') return blendColorC_ABC;
             return inactiveColor; // Shouldn't happen, but default
        // --- End Triple Intersection Logic ---
        case 'complement':
             return inactiveColor;
        default:
             return inactiveColor;
      }
    } else {
       if (isRegionActive('complement')) {
          return inactiveColor;
       }
       return inactiveColor;
    }
  };

  const getUniversalSetColor = (): string => {
    if (isRegionActive('universal') || isRegionActive('complement')) {
      return highlightColors['universal'];
    }
    return inactiveColor;
  };

  const getOutsideLabelColor = (): string => {
    if (isRegionActive('complement')) {
      return highlightColors['complement'];
    }
    return inactiveColor;
  };

  const getRegionLabelColor = (regionType: VennRegion): string => {
    if (isRegionActive(regionType)) {
      switch(regionType) {
        case 'only-A': return highlightColors['only-A'];
        case 'only-B': return highlightColors['only-B'];
        case 'only-C': return highlightColors['only-C'];
        case 'A-and-B-not-C':
        case 'A-and-C-not-B':
        case 'B-and-C-not-A':
            return highlightColors['blend-pairwise'];
        // --- Use the specific blend result color for the triple intersection label ---
        case 'intersection-ABC': return highlightColors['blend-triple']; // Or highlightColors['intersection-ABC']
        // --- End change ---
        default: return inactiveColor;
      }
    }
    return inactiveColor;
  };

  // --- LOGIC FOR DETERMINING CIRCLE RENDER ORDER (Z-INDEX) ---
  let topCircle: 'A' | 'B' | 'C' | null = null;
  // Keep layering logic for pairwise, but for triple intersection,
  // layering might be less critical or behave differently with blend modes.
  // We can keep it for consistency or modify if needed.
  if (isRegionActive('A-and-B-not-C')) {
    topCircle = 'C';
  } else if (isRegionActive('A-and-C-not-B')) {
    topCircle = 'B';
  } else if (isRegionActive('B-and-C-not-A')) {
    topCircle = 'A';
    // Optionally add logic for triple intersection layering if needed later
    // } else if (isRegionActive('intersection-ABC')) {
    //   topCircle = 'A'; // Or whichever makes visual sense
  }
  // --- END Z-INDEX LOGIC ---

  return (
    <div className="flex flex-col items-center w-full p-4 bg-slate-100 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold mb-3 text-slate-800 text-center">Interactive Venn Diagram: Three Sets</h3>

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
              className="cursor-pointer"
              onClick={() => handleSelectRegion('complement')}
            />
            <text
              x={width - padding - 5}
              y={padding + 12}
              textAnchor="end"
              fill={labelColor}
              fontSize="14"
              fontWeight="normal"
            >
              {labelU}
            </text>

            {/* --- RENDER CIRCLES WITH DYNAMIC ORDERING AND BLENDING --- */}
            {/* Circle A */}
            {topCircle !== 'A' && (
              <circle
                key="circleA"
                cx={circleA_Cx}
                cy={circleA_Cy}
                r={circleRadius}
                fill={getBaseCircleColor('A')}
                stroke={strokeColor}
                strokeWidth="1.5"
                // Apply blend mode if part of an active pairwise intersection
                // OR if part of the active triple intersection (apply to 2 of 3)
                className={`transition-colors duration-200 ${
                  (isRegionActive('A-and-B-not-C') && 'A') ||
                  (isRegionActive('A-and-C-not-B') && 'A') ||
                  (isRegionActive('intersection-ABC') && 'A') // Apply blend to A as well for triple?
                  ? 'mix-blend-multiply' : '' // Let's re-evaluate this
                }`}
              />
            )}
            {topCircle !== 'A' && (
               <text
                 key="labelA"
                 x={circleA_Cx}
                 y={circleA_Cy}
                 textAnchor="middle"
                 dy=".3em"
                 fill={labelColor}
                 fontSize="16"
                 fontWeight="bold"
               >
                 {labelA}
               </text>
            )}

            {/* Circle B */}
            {topCircle !== 'B' && (
              <circle
                key="circleB"
                cx={circleB_Cx}
                cy={circleB_Cy}
                r={circleRadius}
                fill={getBaseCircleColor('B')}
                stroke={strokeColor}
                strokeWidth="1.5"
                className={`transition-colors duration-200 ${
                  (isRegionActive('A-and-B-not-C') && 'B') ||
                  (isRegionActive('B-and-C-not-A') && 'B') ||
                  // Apply blend mode for B in triple intersection
                  (isRegionActive('intersection-ABC') && 'B')
                  ? 'mix-blend-multiply' : ''
                }`}
              />
            )}
            {topCircle !== 'B' && (
              <text
                key="labelB"
                x={circleB_Cx}
                y={circleB_Cy}
                textAnchor="middle"
                dy=".3em"
                fill={labelColor}
                fontSize="16"
                fontWeight="bold"
              >
                {labelB}
              </text>
            )}

            {/* Circle C */}
            {topCircle !== 'C' && (
              <circle
                key="circleC"
                cx={circleC_Cx}
                cy={circleC_Cy}
                r={circleRadius}
                fill={getBaseCircleColor('C')}
                stroke={strokeColor}
                strokeWidth="1.5"
                className={`transition-colors duration-200 ${
                  (isRegionActive('A-and-C-not-B') && 'C') ||
                  (isRegionActive('B-and-C-not-A') && 'C') ||
                  // Apply blend mode for C in triple intersection
                  (isRegionActive('intersection-ABC') && 'C')
                  ? 'mix-blend-multiply' : ''
                }`}
              />
            )}
            {topCircle !== 'C' && (
              <text
                key="labelC"
                x={circleC_Cx}
                y={circleC_Cy}
                textAnchor="middle"
                dy=".3em"
                fill={labelColor}
                fontSize="16"
                fontWeight="bold"
              >
                {labelC}
              </text>
            )}

            {/* Render the 'topCircle' LAST */}
            {topCircle === 'A' && (
              <circle
                key="circleA-top"
                cx={circleA_Cx}
                cy={circleA_Cy}
                r={circleRadius}
                fill={getBaseCircleColor('A')}
                stroke={strokeColor}
                strokeWidth="1.5"
                className={`transition-colors duration-200 ${
                  (isRegionActive('A-and-B-not-C') && 'A') ||
                  (isRegionActive('A-and-C-not-B') && 'A') ||
                  (isRegionActive('intersection-ABC') && 'A')
                  ? 'mix-blend-multiply' : ''
                }`}
              />
            )}
            {topCircle === 'A' && (
              <text
                key="labelA-top"
                x={circleA_Cx}
                y={circleA_Cy}
                textAnchor="middle"
                dy=".3em"
                fill={labelColor}
                fontSize="16"
                fontWeight="bold"
              >
                {labelA}
              </text>
            )}

            {topCircle === 'B' && (
              <circle
                key="circleB-top"
                cx={circleB_Cx}
                cy={circleB_Cy}
                r={circleRadius}
                fill={getBaseCircleColor('B')}
                stroke={strokeColor}
                strokeWidth="1.5"
                className={`transition-colors duration-200 ${
                  (isRegionActive('A-and-B-not-C') && 'B') ||
                  (isRegionActive('B-and-C-not-A') && 'B') ||
                  (isRegionActive('intersection-ABC') && 'B')
                  ? 'mix-blend-multiply' : ''
                }`}
              />
            )}
            {topCircle === 'B' && (
              <text
                key="labelB-top"
                x={circleB_Cx}
                y={circleB_Cy}
                textAnchor="middle"
                dy=".3em"
                fill={labelColor}
                fontSize="16"
                fontWeight="bold"
              >
                {labelB}
              </text>
            )}

            {topCircle === 'C' && (
              <circle
                key="circleC-top"
                cx={circleC_Cx}
                cy={circleC_Cy}
                r={circleRadius}
                fill={getBaseCircleColor('C')}
                stroke={strokeColor}
                strokeWidth="1.5"
                className={`transition-colors duration-200 ${
                  (isRegionActive('A-and-C-not-B') && 'C') ||
                  (isRegionActive('B-and-C-not-A') && 'C') ||
                  (isRegionActive('intersection-ABC') && 'C')
                  ? 'mix-blend-multiply' : ''
                }`}
              />
            )}
            {topCircle === 'C' && (
              <text
                key="labelC-top"
                x={circleC_Cx}
                y={circleC_Cy}
                textAnchor="middle"
                dy=".3em"
                fill={labelColor}
                fontSize="16"
                fontWeight="bold"
              >
                {labelC}
              </text>
            )}
            {/* --- END DYNAMIC CIRCLE RENDERING --- */}

            {/* --- Region Labels --- */}
            <text
              x={circleA_Cx}
              y={circleA_Cy - circleRadius / 2}
              textAnchor="middle"
              dy=".3em"
              fill={getRegionLabelColor('only-A')}
              fontSize="10"
              fontWeight={isRegionActive('only-A') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              Only {labelA}
            </text>

            <text
              x={circleB_Cx - circleRadius / 2}
              y={circleB_Cy + circleRadius / 3}
              textAnchor="middle"
              dy=".3em"
              fill={getRegionLabelColor('only-B')}
              fontSize="10"
              fontWeight={isRegionActive('only-B') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              Only {labelB}
            </text>

            <text
              x={circleC_Cx + circleRadius / 2}
              y={circleC_Cy + circleRadius / 3}
              textAnchor="middle"
              dy=".3em"
              fill={getRegionLabelColor('only-C')}
              fontSize="10"
              fontWeight={isRegionActive('only-C') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              Only {labelC}
            </text>

            <text
              x={centerX - 25}
              y={centerY + 10}
              textAnchor="middle"
              fill={getRegionLabelColor('A-and-B-not-C')}
              fontSize="10"
              fontWeight={isRegionActive('A-and-B-not-C') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              {labelA} ∩ {labelB}
            </text>

            <text
              x={centerX + 25}
              y={centerY + 10}
              textAnchor="middle"
              fill={getRegionLabelColor('A-and-C-not-B')}
              fontSize="10"
              fontWeight={isRegionActive('A-and-C-not-B') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              {labelA} ∩ {labelC}
            </text>

            <text
              x={centerX}
              y={centerY + circleRadius - 10}
              textAnchor="middle"
              fill={getRegionLabelColor('B-and-C-not-A')}
              fontSize="10"
              fontWeight={isRegionActive('B-and-C-not-A') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              {labelB} ∩ {labelC}
            </text>

            <text
              x={centerX}
              y={centerY - 5}
              textAnchor="middle"
              fill={getRegionLabelColor('intersection-ABC')}
              fontSize="10"
              fontWeight={isRegionActive('intersection-ABC') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              {labelA} ∩ {labelB} ∩ {labelC}
            </text>

            <text
              x={centerX}
              y={height - 25}
              textAnchor="middle"
              fill={getOutsideLabelColor()}
              fontSize="12"
              fontWeight={isRegionActive('complement') ? "bold" : "normal"}
              className="pointer-events-none select-none cursor-pointer"
              onClick={() => handleSelectRegion('complement')}
            >
              Outside {labelA}, {labelB}, {labelC}
            </text>
          </svg>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 mb-4 w-full">
        <button
          onClick={() => handleSelectRegion('universal')}
          className={`px-2 py-2 text-xs font-medium rounded-full transition-colors ${
            isRegionActive('universal')
              ? 'bg-indigo-500 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {labelU} (Universal)
        </button>
        <button
          onClick={() => handleSelectRegion('only-A')}
          className={`px-2 py-2 text-xs font-medium rounded-full transition-colors ${
            isRegionActive('only-A')
              ? 'bg-blue-500 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Only {labelA}
        </button>
        <button
          onClick={() => handleSelectRegion('only-B')}
          className={`px-2 py-2 text-xs font-medium rounded-full transition-colors ${
            isRegionActive('only-B')
              ? 'bg-red-500 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Only {labelB}
        </button>
        <button
          onClick={() => handleSelectRegion('only-C')}
          className={`px-2 py-2 text-xs font-medium rounded-full transition-colors ${
            isRegionActive('only-C')
              ? 'bg-green-500 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Only {labelC}
        </button>
        <button
          onClick={() => handleSelectRegion('A-and-B-not-C')}
          className={`px-2 py-2 text-xs font-medium rounded-full transition-colors ${
            isRegionActive('A-and-B-not-C')
              ? `bg-[${highlightColors['blend-pairwise']}] text-slate-800`
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
          style={isRegionActive('A-and-B-not-C') ? { backgroundColor: highlightColors['blend-pairwise'] } : {}}
        >
          {labelA} ∩ {labelB} (Not {labelC})
        </button>
        <button
          onClick={() => handleSelectRegion('A-and-C-not-B')}
          className={`px-2 py-2 text-xs font-medium rounded-full transition-colors ${
            isRegionActive('A-and-C-not-B')
              ? `bg-[${highlightColors['blend-pairwise']}] text-slate-800`
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
          style={isRegionActive('A-and-C-not-B') ? { backgroundColor: highlightColors['blend-pairwise'] } : {}}
        >
          {labelA} ∩ {labelC} (Not {labelB})
        </button>
        <button
          onClick={() => handleSelectRegion('B-and-C-not-A')}
          className={`px-2 py-2 text-xs font-medium rounded-full transition-colors ${
            isRegionActive('B-and-C-not-A')
              ? `bg-[${highlightColors['blend-pairwise']}] text-slate-800`
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
          style={isRegionActive('B-and-C-not-A') ? { backgroundColor: highlightColors['blend-pairwise'] } : {}}
        >
          {labelB} ∩ {labelC} (Not {labelA})
        </button>
        {/* --- Updated button for A ∩ B ∩ C --- */}
        <button
          onClick={() => handleSelectRegion('intersection-ABC')}
          className={`px-2 py-2 text-xs font-medium rounded-full transition-colors ${
            isRegionActive('intersection-ABC')
              // Use the specific blended color for the triple intersection button
              ? `bg-[${highlightColors['blend-triple']}] text-white` // White text for contrast on dark
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
          // Inline style to handle dynamic color
          style={isRegionActive('intersection-ABC') ? { backgroundColor: highlightColors['blend-triple'] } : {}}
        >
          {labelA} ∩ {labelB} ∩ {labelC}
        </button>
        {/* --- End Updated Button --- */}
        <button
          onClick={() => handleSelectRegion('complement')}
          className={`px-2 py-2 text-xs font-medium rounded-full transition-colors ${
            isRegionActive('complement')
              ? 'bg-indigo-300 text-slate-800'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Complement (Outside All)
        </button>
        <button
          onClick={() => setActiveRegion(null)}
          className={`px-2 py-2 text-xs font-medium rounded-full transition-colors ${
            'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Clear
        </button>
      </div>

      <div className="p-3 bg-white border border-slate-300 rounded-lg w-full text-center text-sm">
        <p className="text-slate-700 font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ThreeSetVennDiagram;