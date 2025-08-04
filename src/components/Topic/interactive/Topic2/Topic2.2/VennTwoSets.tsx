// src/Components/TwoSetVennDiagram.tsx
import React, { useState } from 'react';

// --- Neubrutalism Styles & Colors (Aligned with templates) ---
const NEUBRUTALISM_COLORS = {
  primaryDark: '#264653',    // Darkest color - Text, borders
  secondary: '#2a9d8f',      // Teal - Correct, accents
  neutral: '#e9c46a',        // Sand yellow - Highlights, explanations
  warning: '#f4a261',        // Orange - Warnings
  danger: '#e76f51',         // Salmon - Danger, resets
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

// Define the possible regions/selections for two sets
type VennRegion = 'only-A' | 'only-B' | 'intersection' | 'neither' | 'universal' | null;

// Props for the component
interface TwoSetVennDiagramProps {
  labelA?: string;
  labelB?: string;
  labelU?: string;
  totalStudents?: number;
  studentsA?: number;
  studentsB?: number;
  studentsBoth?: number;
  onRegionSelect?: (region: VennRegion) => void;
}

const VennTwoSets: React.FC<TwoSetVennDiagramProps> = ({ 
  labelA = 'Math', 
  labelB = 'Science', 
  labelU = 'U',
  totalStudents = 30,
  studentsA = 18,
  studentsB = 15,
  studentsBoth = 8,
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

  const getRegionInfo = (): { description: string; calculation: string; result: number } => {
    switch (activeRegion) {
      case 'only-A': {
        const onlyA = studentsA - studentsBoth;
        return {
          description: `Students studying ${labelA} but not ${labelB}.`,
          calculation: `Students in ${labelA} only = Students in ${labelA} - Students in both = ${studentsA} - ${studentsBoth}`,
          result: onlyA
        };
      }
      case 'only-B': {
         const onlyB = studentsB - studentsBoth;
         return {
          description: `Students studying ${labelB} but not ${labelA}.`,
          calculation: `Students in ${labelB} only = Students in ${labelB} - Students in both = ${studentsB} - ${studentsBoth}`,
          result: onlyB
        };
      }
      case 'intersection':
        return {
          description: `Students studying both ${labelA} and ${labelB}.`,
          calculation: `Students studying both ${labelA} and ${labelB}`,
          result: studentsBoth
        };
      case 'neither': {
        const onlyA_val = studentsA - studentsBoth;
        const onlyB_val = studentsB - studentsBoth;
        const neither = totalStudents - (onlyA_val + studentsBoth + onlyB_val);
        return {
          description: `Students studying neither ${labelA} nor ${labelB}.`,
          calculation: `Students in neither = Total students - (Only ${labelA} + Both + Only ${labelB}) = ${totalStudents} - (${onlyA_val} + ${studentsBoth} + ${onlyB_val})`,
          result: neither
        };
      }
      case 'universal':
        return {
          description: `The total number of students in the class (Universal Set ${labelU}). This includes students studying only ${labelA}, only ${labelB}, both, and neither.`,
          calculation: `Total number of students`,
          result: totalStudents
        };
      default:
        return {
          description: 'Select a region to see its description and calculation.',
          calculation: 'No calculation available.',
          result: 0
        };
    }
  };

  const { description, calculation, result } = getRegionInfo();

  // --- SVG Dimensions and Calculations (WITH INTERSECTION MOVEMENT) ---
  const width = 320;
  const height = 250;
  const padding = 15;
  const circleRadius = 55;
  const circleOffsetNormal = 70;
  const circleOffsetOverlap = 40;
  const centerX = width / 2;
  const centerY = height / 2 - 10;
  const currentCircleOffset = activeRegion === 'intersection' ? circleOffsetOverlap : circleOffsetNormal;
  // --- End Positions ---

  // --- Color Definitions (Integrated with Neubrutalism Palette) ---
  const inactiveColor = NEUBRUTALISM_COLORS.borderGray; // slate-400 equivalent
  const strokeColor = NEUBRUTALISM_COLORS.primaryDark; // slate-600 equivalent
  const labelColor = NEUBRUTALISM_COLORS.primaryDark; // slate-800 equivalent

  const highlightColors: Record<'only-A' | 'only-B' | 'intersection' | 'neither' | 'universal', string> = {
    'only-A': "#93C5FD", // blue-300 (keeping original for distinctiveness)
    'only-B': "#FECACA", // red-300 (keeping original for distinctiveness)
    'intersection': NEUBRUTALISM_COLORS.secondary, // green-500 -> Teal
    'neither': "#C7D2FE", // indigo-200 (keeping original for distinctiveness)
    'universal': NEUBRUTALISM_COLORS.infoBoxBg, // indigo-200 -> Light teal
  };

  const intersectionColorA = "#22D3EE"; // cyan-400
  const intersectionColorB = NEUBRUTALISM_COLORS.neutral; // yellow-200 -> Sand yellow
  // --- End Color Definitions ---

  const isRegionActive = (regionToCheck: VennRegion): boolean => {
    return activeRegion === regionToCheck;
  };

  // MODIFIED: Circles are highlighted for 'universal' as well
  const isCircleHighlighted = (circle: 'A' | 'B', region: VennRegion): boolean => {
    switch (region) {
      case 'only-A': return circle === 'A';
      case 'only-B': return circle === 'B';
      case 'intersection': return true;
      // MODIFIED: Circles are part of the universal set
      case 'universal': return true;
      case 'neither': return false;
      default: return false;
    }
  };

  // MODIFIED: Get color for circles, including 'universal' logic
  const getCircleColor = (circle: 'A' | 'B'): string => {
    if (isCircleHighlighted(circle, activeRegion)) {
      switch (activeRegion) {
        case 'only-A':
          return circle === 'A' ? highlightColors['only-A'] : inactiveColor;
        case 'only-B':
          return circle === 'B' ? highlightColors['only-B'] : inactiveColor;
        case 'intersection':
          return circle === 'A' ? intersectionColorA : intersectionColorB;
        // MODIFIED: When 'universal' is selected, both circles use the universal color
        case 'universal':
          return highlightColors['universal'];
        default:
          return inactiveColor;
      }
    }
    return inactiveColor;
  };

  // Helper to get the color for the Universal Set rectangle
  const getUniversalSetColor = (): string => {
     if (isRegionActive('neither') || isRegionActive('universal')) {
        return highlightColors['universal'];
     }
     return inactiveColor;
  };

  const getOutsideLabelColor = (): string => {
     if (isRegionActive('neither')) {
        return highlightColors['neither'];
     }
     return inactiveColor;
  };

  // --- Button Styling Helper ---
  const getButtonStyle = (region: VennRegion) => {
    const isActive = isRegionActive(region);
    // Specific color for 'intersection' button
    let bgColor = NEUBRUTALISM_COLORS.buttonDefault;
    let textColor = NEUBRUTALISM_COLORS.primaryDark;
    if (isActive) {
      if (region === 'intersection') {
        bgColor = NEUBRUTALISM_COLORS.secondary; // Teal for active intersection
        textColor = NEUBRUTALISM_COLORS.white;
      } else if (region === 'only-A') {
        bgColor = "#93C5FD"; // Blue for active A
        textColor = NEUBRUTALISM_COLORS.white;
      } else if (region === 'only-B') {
        bgColor = "#FECACA"; // Red for active B
        textColor = NEUBRUTALISM_COLORS.white;
      } else if (region === 'neither' || region === 'universal') {
         bgColor = NEUBRUTALISM_COLORS.infoBoxBg; // Light teal for active neither/U
         textColor = NEUBRUTALISM_COLORS.primaryDark;
      } else {
        bgColor = NEUBRUTALISM_COLORS.secondary; // Default active (shouldn't be needed)
        textColor = NEUBRUTALISM_COLORS.white;
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
      // Add hover effect inline
      ...(isActive ? {} : { // No hover change for active buttons
        ':hover': {
          backgroundColor: NEUBRUTALISM_COLORS.buttonHover,
        }
      })
    };
  };
  // --- End Button Styling ---

  // Calculate values for button labels
  const onlyAValue = studentsA - studentsBoth;
  const onlyBValue = studentsB - studentsBoth;
  const neitherValue = totalStudents - onlyAValue - studentsBoth - onlyBValue;

  return (
    <div style={{
      ...neubrutalismBase,
      maxWidth: '600px',
      width: '100%',
      margin: '0 auto',
      padding: '1.5rem',
      backgroundColor: NEUBRUTALISM_COLORS.background, // Salmon background
      borderColor: NEUBRUTALISM_COLORS.primaryDark,
      color: NEUBRUTALISM_COLORS.primaryDark,
      borderRadius: '20px',
      boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.primaryDark}`,
    }}>
      <h3 className="text-xl font-extrabold mb-4 text-center" style={{ color: NEUBRUTALISM_COLORS.white }}>
        Venn Diagram: Two Sets
      </h3>
      
      <div className="flex justify-center mb-4 w-full">
        <div style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.white,
          borderColor: NEUBRUTALISM_COLORS.primaryDark,
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
              onClick={() => handleSelectRegion('neither')}
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
            <circle
              cx={centerX - currentCircleOffset}
              cy={centerY}
              r={circleRadius}
              fill={getCircleColor('A')}
              stroke={strokeColor}
              strokeWidth="1.5"
              className="transition-all duration-500 ease-in-out"
              onClick={(e) => { e.stopPropagation(); handleSelectRegion('only-A'); }}
              style={{ cursor: 'pointer' }}
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
              onClick={(e) => { e.stopPropagation(); handleSelectRegion('only-B'); }}
              style={{ cursor: 'pointer' }}
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
              fill={isRegionActive('only-A') ? highlightColors['only-A'] : inactiveColor}
              fontSize="12" 
              fontWeight={isRegionActive('only-A') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              Only {labelA}
            </text>
            <text 
              x={centerX + circleOffsetNormal + 35} 
              y={centerY} 
              textAnchor="middle" 
              dy=".3em" 
              fill={isRegionActive('only-B') ? highlightColors['only-B'] : inactiveColor}
              fontSize="12" 
              fontWeight={isRegionActive('only-B') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              Only {labelB}
            </text>
            <text 
              x={centerX} 
              y={centerY - 8} 
              textAnchor="middle" 
              fill={isRegionActive('intersection') ? highlightColors['intersection'] : inactiveColor}
              fontSize="12" 
              fontWeight={isRegionActive('intersection') ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              {labelA} ∩ {labelB}
            </text>
            <text 
              x={centerX} 
              y={height - 25} 
              textAnchor="middle" 
              fill={getOutsideLabelColor()} 
              fontSize="12" 
              fontWeight={isRegionActive('neither') ? "bold" : "normal"}
              className="pointer-events-none select-none cursor-pointer"
              onClick={() => handleSelectRegion('neither')}
              style={{ cursor: 'pointer' }}
            >
              Neither {labelA} nor {labelB}
            </text>
          </svg>
        </div>
      </div>

       {/* Control Buttons - Updated with Neubrutalism Style */}
       <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
        <button
          onClick={() => handleSelectRegion('universal')}
          style={getButtonStyle('universal')}
          onMouseEnter={(e) => { if (!isRegionActive('universal')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover; }}
          onMouseLeave={(e) => { if (!isRegionActive('universal')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault; }}
        >
          {labelU} (All Students) ({totalStudents})
        </button>
        <button
          onClick={() => handleSelectRegion('only-A')}
          style={getButtonStyle('only-A')}
          onMouseEnter={(e) => { if (!isRegionActive('only-A')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover; }}
          onMouseLeave={(e) => { if (!isRegionActive('only-A')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault; }}
        >
          Only {labelA} ({onlyAValue})
        </button>
        <button
          onClick={() => handleSelectRegion('only-B')}
          style={getButtonStyle('only-B')}
          onMouseEnter={(e) => { if (!isRegionActive('only-B')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover; }}
          onMouseLeave={(e) => { if (!isRegionActive('only-B')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault; }}
        >
          Only {labelB} ({onlyBValue})
        </button>
        <button
          onClick={() => handleSelectRegion('intersection')}
          style={getButtonStyle('intersection')}
          onMouseEnter={(e) => { if (!isRegionActive('intersection')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover; }}
          onMouseLeave={(e) => { if (!isRegionActive('intersection')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault; }}
        >
          {labelA} ∩ {labelB} ({studentsBoth})
        </button>
        <button
          onClick={() => handleSelectRegion('neither')}
          style={getButtonStyle('neither')}
          onMouseEnter={(e) => { if (!isRegionActive('neither')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover; }}
          onMouseLeave={(e) => { if (!isRegionActive('neither')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault; }}
        >
          Neither ({neitherValue})
        </button>
        <button
          onClick={() => setActiveRegion(null)}
          style={{
            ...getButtonStyle(null),
            backgroundColor: NEUBRUTALISM_COLORS.danger, // Salmon for clear
            color: NEUBRUTALISM_COLORS.white,
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f6b78a'} // Lighter orange hover
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.danger}
        >
          Clear Selection
        </button>
      </div>

      {/* Info Box - Updated with Neubrutalism Style */}
      <div style={{
        ...neubrutalismBase,
        backgroundColor: NEUBRUTALISM_COLORS.infoBoxBg, // Light teal
        borderColor: NEUBRUTALISM_COLORS.primaryDark,
        width: '100%',
        minHeight: '80px', // Slightly larger for better text fit
        fontSize: '0.875rem', // text-sm
        fontWeight: '500', // font-medium
        color: NEUBRUTALISM_COLORS.primaryDark,
      }}>
        <div className="mb-2">
          <span className="font-semibold">Description:</span>
          <p>{description}</p>
        </div>
        <div>
          <span className="font-semibold">Calculation:</span>
          <p>{calculation} = <span className="font-bold">{result}</span></p>
        </div>
      </div>
    </div>
  );
};

export default VennTwoSets;