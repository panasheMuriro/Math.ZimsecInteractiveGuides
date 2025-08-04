// src/Components/ThreeSetVennDiagram.tsx
import React, { useState } from 'react';

// --- Neubrutalism Styles & Colors (Aligned with MultipleChoice template) ---
const NEUBRUTALISM_COLORS = {
  primaryDark: '#264653',    // Darkest color - Text, borders
  secondary: '#2a9d8f',      // Teal - Correct, accents
  neutral: '#e9c46a',        // Sand yellow - Highlights, explanations
  warning: '#f4a261',        // Orange - Warnings
  danger: '#e76f51',         // Salmon - Danger, resets, main background
  white: '#ffffff',
  lightGray: '#f0f0f0',
  borderGray: '#d0d0d0',
  shadowGray: 'rgba(38, 70, 83, 0.2)', // primaryDark with opacity
  background: '#e76f51',     // Salmon background for main container (from template)
  buttonDefault: '#d1e7e4',  // Lighter teal for default button bg
  buttonHover: '#c0ddd8',    // Even lighter teal for button hover
  infoBoxBg: '#e8f4f2',      // Light teal for info boxes
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.primaryDark}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadowGray}`,
  padding: '1rem',
};

// --- End Neubrutalism Styles ---

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

  const getRegionDescription = (): React.ReactNode => { // Changed to ReactNode for potential math rendering via parent if needed
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

  // --- Color Definitions (Mapped to new palette) ---
  const inactiveColor = NEUBRUTALISM_COLORS.borderGray; // Light gray for inactive
  const strokeColor = NEUBRUTALISM_COLORS.primaryDark; // Dark for strokes and text
  const labelColor = NEUBRUTALISM_COLORS.primaryDark; // Dark for labels

  // Map original highlight colors to the new palette or derived colors
  const highlightColors: Record<
    | 'only-A'
    | 'only-B'
    | 'only-C'
    | 'A-and-B-not-C'
    | 'A-and-C-not-B'
    | 'B-and-C-not-A'
    | 'blend-pairwise' // For pairwise intersection labels/buttons
    | 'intersection-ABC'
    | 'universal'
    | 'complement',
    string
  > = {
    'only-A': "#93C5FD", // blue-300 (keeping original distinctiveness)
    'only-B': "#FECACA", // red-300 (keeping original distinctiveness)
    'only-C': "#BBF7D0", // green-300 (keeping original distinctiveness)
    'A-and-B-not-C': "#A5F3FC", // cyan-300 (keeping original distinctiveness)
    'A-and-C-not-B': "#A5F3FC", // cyan-300
    'B-and-C-not-A': "#A5F3FC", // cyan-300
    'blend-pairwise': NEUBRUTALISM_COLORS.warning, // Use orange for pairwise button/label
    'intersection-ABC': NEUBRUTALISM_COLORS.secondary, // Use teal for the central region
    'universal': NEUBRUTALISM_COLORS.infoBoxBg, // Light teal for universal
    'complement': NEUBRUTALISM_COLORS.infoBoxBg, // Light teal for complement
  };

  // Blend colors for pairwise intersections (keeping original for visual effect)
  const blendColorCyan = "#22D3EE"; // cyan-400
  const blendColorYellow = "#FDE68A"; // yellow-200

  // Blend colors for triple intersection (keeping original for visual effect)
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
      return highlightColors['universal']; // Use infoBoxBg color (light teal)
    }
    return inactiveColor;
  };

  const getOutsideLabelColor = (): string => {
    if (isRegionActive('complement')) {
      return NEUBRUTALISM_COLORS.warning; // Use orange for complement label when active
    }
    return inactiveColor;
  };

  const getRegionLabelColor = (regionType: VennRegion): string => {
    if (isRegionActive(regionType)) {
      switch (regionType) {
        case 'only-A': return highlightColors['only-A'];
        case 'only-B': return highlightColors['only-B'];
        case 'only-C': return highlightColors['only-C'];
        case 'A-and-B-not-C':
        case 'A-and-C-not-B':
        case 'B-and-C-not-A':
          return highlightColors['blend-pairwise']; // Use orange for active pairwise labels
        case 'intersection-ABC':
          return highlightColors['intersection-ABC']; // Use teal for active central label
        default:
          return NEUBRUTALISM_COLORS.warning; // Default active color if not specifically mapped
      }
    }
    return inactiveColor;
  };

  // --- LOGIC FOR DETERMINING CIRCLE RENDER ORDER (Z-INDEX) ---
  let topCircle: 'A' | 'B' | 'C' | null = null;
  if (isRegionActive('A-and-B-not-C')) {
    topCircle = 'C';
  } else if (isRegionActive('A-and-C-not-B')) {
    topCircle = 'B';
  } else if (isRegionActive('B-and-C-not-A')) {
    topCircle = 'A';
  }
  // --- END Z-INDEX LOGIC ---

  // --- Button Styling Helper ---
  const getButtonStyle = (region: VennRegion) => {
    const isActive = isRegionActive(region);
    // Default button colors
    let bgColor = NEUBRUTALISM_COLORS.buttonDefault; // Default light teal
    let textColor = NEUBRUTALISM_COLORS.primaryDark; // Default dark text

    if (isActive) {
      // Map active button colors based on region or use a default
      switch (region) {
        case 'only-A':
          bgColor = "#93C5FD"; // blue-300
          textColor = NEUBRUTALISM_COLORS.white;
          break;
        case 'only-B':
          bgColor = "#FECACA"; // red-300
          textColor = NEUBRUTALISM_COLORS.white;
          break;
        case 'only-C':
          bgColor = "#BBF7D0"; // green-300
          textColor = NEUBRUTALISM_COLORS.white;
          break;
        case 'A-and-B-not-C':
        case 'A-and-C-not-B':
        case 'B-and-C-not-A':
          bgColor = NEUBRUTALISM_COLORS.warning; // Orange for active pairwise
          textColor = NEUBRUTALISM_COLORS.white;
          break;
        case 'intersection-ABC':
          bgColor = NEUBRUTALISM_COLORS.secondary; // Teal for active central
          textColor = NEUBRUTALISM_COLORS.white;
          break;
        case 'universal':
        case 'complement':
          bgColor = NEUBRUTALISM_COLORS.infoBoxBg; // Light teal for active U/comp
          textColor = NEUBRUTALISM_COLORS.primaryDark;
          break;
        default:
          bgColor = NEUBRUTALISM_COLORS.secondary; // Default active (e.g., Clear)
          textColor = NEUBRUTALISM_COLORS.white;
          break;
      }
    }

    return {
      ...neubrutalismBase,
      padding: '0.5rem 0.75rem',
      fontSize: '0.75rem', // text-xs
      fontWeight: '500', // font-medium
      backgroundColor: bgColor,
      color: textColor,
      transition: 'all 0.2s',
      cursor: 'pointer',
    };
  };
  // --- End Button Styling ---

  return (
    <div style={{
      ...neubrutalismBase,
      maxWidth: '600px',
      width: '100%',
      margin: '0 auto',
      padding: '1.5rem',
      backgroundColor: NEUBRUTALISM_COLORS.background, // Salmon background
      borderColor: NEUBRUTALISM_COLORS.primaryDark, // Dark border
      color: NEUBRUTALISM_COLORS.primaryDark, // Dark text
      borderRadius: '20px',
      boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`, // Dark shadow
    }}>
      <h3 className="text-xl font-extrabold mb-4 text-center" style={{ color: NEUBRUTALISM_COLORS.white }}>
        Interactive Venn Diagram: Three Sets
      </h3>

      <div className="flex justify-center mb-4 w-full">
        <div style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white, // White background for SVG container
          borderColor: NEUBRUTALISM_COLORS.primaryDark, // Dark border
          padding: '0.5rem',
        }}>
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
              style={{ cursor: 'pointer' }}
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
                className={`transition-colors duration-200 ${
                  (isRegionActive('A-and-B-not-C') && 'A') ||
                  (isRegionActive('A-and-C-not-B') && 'A') ||
                  (isRegionActive('intersection-ABC') && 'A')
                    ? 'mix-blend-multiply'
                    : ''
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
                  (isRegionActive('intersection-ABC') && 'B')
                    ? 'mix-blend-multiply'
                    : ''
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
                  (isRegionActive('intersection-ABC') && 'C')
                    ? 'mix-blend-multiply'
                    : ''
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
                    ? 'mix-blend-multiply'
                    : ''
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
                    ? 'mix-blend-multiply'
                    : ''
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
                    ? 'mix-blend-multiply'
                    : ''
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
              style={{ cursor: 'pointer' }}
            >
              Outside {labelA}, {labelB}, {labelC}
            </text>
          </svg>
        </div>
      </div>

      {/* Control Buttons - Updated with Neubrutalism Style and new palette */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
        <button
          onClick={() => handleSelectRegion('universal')}
          style={getButtonStyle('universal')}
          onMouseEnter={(e) => {
            if (!isRegionActive('universal')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover;
          }}
          onMouseLeave={(e) => {
            if (!isRegionActive('universal')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault;
          }}
        >
          {labelU} (Universal)
        </button>
        <button
          onClick={() => handleSelectRegion('only-A')}
          style={getButtonStyle('only-A')}
          onMouseEnter={(e) => {
            if (!isRegionActive('only-A')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover;
          }}
          onMouseLeave={(e) => {
            if (!isRegionActive('only-A')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault;
          }}
        >
          Only {labelA}
        </button>
        <button
          onClick={() => handleSelectRegion('only-B')}
          style={getButtonStyle('only-B')}
          onMouseEnter={(e) => {
            if (!isRegionActive('only-B')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover;
          }}
          onMouseLeave={(e) => {
            if (!isRegionActive('only-B')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault;
          }}
        >
          Only {labelB}
        </button>
        <button
          onClick={() => handleSelectRegion('only-C')}
          style={getButtonStyle('only-C')}
          onMouseEnter={(e) => {
            if (!isRegionActive('only-C')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover;
          }}
          onMouseLeave={(e) => {
            if (!isRegionActive('only-C')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault;
          }}
        >
          Only {labelC}
        </button>
        <button
          onClick={() => handleSelectRegion('A-and-B-not-C')}
          style={getButtonStyle('A-and-B-not-C')}
          onMouseEnter={(e) => {
            if (!isRegionActive('A-and-B-not-C')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover;
          }}
          onMouseLeave={(e) => {
            if (!isRegionActive('A-and-B-not-C')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault;
          }}
        >
          {labelA} ∩ {labelB} (Not {labelC})
        </button>
        <button
          onClick={() => handleSelectRegion('A-and-C-not-B')}
          style={getButtonStyle('A-and-C-not-B')}
          onMouseEnter={(e) => {
            if (!isRegionActive('A-and-C-not-B')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover;
          }}
          onMouseLeave={(e) => {
            if (!isRegionActive('A-and-C-not-B')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault;
          }}
        >
          {labelA} ∩ {labelC} (Not {labelB})
        </button>
        <button
          onClick={() => handleSelectRegion('B-and-C-not-A')}
          style={getButtonStyle('B-and-C-not-A')}
          onMouseEnter={(e) => {
            if (!isRegionActive('B-and-C-not-A')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover;
          }}
          onMouseLeave={(e) => {
            if (!isRegionActive('B-and-C-not-A')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault;
          }}
        >
          {labelB} ∩ {labelC} (Not {labelA})
        </button>
        <button
          onClick={() => handleSelectRegion('intersection-ABC')}
          style={getButtonStyle('intersection-ABC')}
          onMouseEnter={(e) => {
            if (!isRegionActive('intersection-ABC')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover;
          }}
          onMouseLeave={(e) => {
            if (!isRegionActive('intersection-ABC')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault;
          }}
        >
          {labelA} ∩ {labelB} ∩ {labelC}
        </button>
        <button
          onClick={() => handleSelectRegion('complement')}
          style={getButtonStyle('complement')}
          onMouseEnter={(e) => {
            if (!isRegionActive('complement')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover;
          }}
          onMouseLeave={(e) => {
            if (!isRegionActive('complement')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault;
          }}
        >
          Complement (Outside All)
        </button>
        <button
          onClick={() => setActiveRegion(null)}
          style={{
            ...getButtonStyle(null),
            backgroundColor: NEUBRUTALISM_COLORS.primaryDark, // Dark for clear
            color: NEUBRUTALISM_COLORS.white, // White text
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.secondary} // Teal hover
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.primaryDark}
        >
          Clear
        </button>
      </div>

      {/* Info Box - Updated with Neubrutalism Style and new palette */}
      <div style={{
        ...neubrutalismBase,
        backgroundColor: NEUBRUTALISM_COLORS.infoBoxBg, // Light teal
        borderColor: NEUBRUTALISM_COLORS.primaryDark, // Dark border
        width: '100%',
        minHeight: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '0.875rem', // text-sm
        fontWeight: '500', // font-medium
        color: NEUBRUTALISM_COLORS.primaryDark, // Dark text
      }}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ThreeSetVennDiagram;