// src/Components/InteractiveVennDiagram.tsx
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
  const getRegionDescription = (): React.ReactNode => {
    switch (activeSelection) {
      case 'U': return <span>The Universal Set <strong>{labelU}</strong>: All elements under consideration, including those in sets <strong>{labelA}</strong> and <strong>{labelB}</strong>.</span>;
      case 'A-only': return <span>Elements in set <strong>{labelA}</strong> only (<strong>{labelA} ∩ {labelB}'</strong>)</span>;
      case 'B-only': return <span>Elements in set <strong>{labelB}</strong> only (<strong>{labelA}' ∩ {labelB}</strong>)</span>;
      case 'union': return <span>Elements in either set <strong>{labelA}</strong> or set <strong>{labelB}</strong> or both (<strong>{labelA} ∪ {labelB}</strong>)</span>;
      case 'intersection': return <span>Elements in both set <strong>{labelA}</strong> and set <strong>{labelB}</strong> (<strong>{labelA} ∩ {labelB}</strong>)</span>;
      case 'A-complement': return <span>Elements NOT in set <strong>{labelA}</strong> (<strong>{labelA}'</strong>) - Everything in <strong>{labelU}</strong> except <strong>{labelA}</strong>.</span>;
      case 'B-complement': return <span>Elements NOT in set <strong>{labelB}</strong> (<strong>{labelB}'</strong>) - Everything in <strong>{labelU}</strong> except <strong>{labelB}</strong>.</span>;
      case 'union-complement': return <span>Elements NOT in set <strong>{labelA}</strong> AND NOT in set <strong>{labelB}</strong> ((<strong>{labelA} ∪ {labelB}</strong>)') - Everything outside both sets.</span>;
      default: return 'Select a region using the buttons below to highlight it.';
    }
  };

  // --- SVG Dimensions and Calculations ---
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

  // --- Color Definitions (Integrated with Neubrutalism Palette) ---
  // Map original highlight colors to Neubrutalism palette
  const inactiveColor = NEUBRUTALISM_COLORS.borderGray; // slate-400 equivalent
  const strokeColor = NEUBRUTALISM_COLORS.primaryDark; // slate-600 equivalent
  const labelColor = NEUBRUTALISM_COLORS.primaryDark; // slate-800 equivalent

  // Map original highlight colors to Neubrutalism palette
  const highlightColors: Record<'U' | 'A-only' | 'B-only' | 'union' | 'intersection' | 'A-complement' | 'B-complement' | 'union-complement', string> = {
    'U': NEUBRUTALISM_COLORS.infoBoxBg, // indigo-200 -> Light teal
    'A-only': "#93C5FD", // blue-300 (keeping original for distinctiveness)
    'B-only': "#FECACA", // red-300 (keeping original for distinctiveness)
    'union': NEUBRUTALISM_COLORS.neutral, // yellow-200 -> Sand yellow
    'intersection': NEUBRUTALISM_COLORS.secondary, // green-500 -> Teal
    'A-complement': "#A5B4FC", // indigo-300 (keeping original for distinctiveness)
    'B-complement': "#A78BFA", // violet-400 (keeping original for distinctiveness)
    'union-complement': "#FBCFE8", // pink-200 (keeping original for distinctiveness)
  };

  // Specific colors for intersection blending (keeping original for visual effect)
  const intersectionColorA = "#22D3EE"; // cyan-400
  const intersectionColorB = NEUBRUTALISM_COLORS.neutral; // yellow-200 -> Sand yellow

  // --- End Color Definitions ---

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

  // --- Button Styling Helper ---
  const getButtonStyle = (region: VennSelection) => {
    const isActive = isRegionActive(region);
    return {
      ...neubrutalismBase,
      padding: '0.5rem 0.75rem',
      fontSize: '0.75rem', // text-xs
      fontWeight: '500', // font-medium
      backgroundColor: isActive ? NEUBRUTALISM_COLORS.secondary : NEUBRUTALISM_COLORS.buttonDefault,
      color: isActive ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.primaryDark,
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
        Interactive Venn Diagram
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

      {/* Control Buttons - Updated with Neubrutalism Style */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
        <button
          onClick={() => handleSelectRegion('U')}
          style={getButtonStyle('U')}
          onMouseEnter={(e) => { if (!isRegionActive('U')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover; }}
          onMouseLeave={(e) => { if (!isRegionActive('U')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault; }}
        >
          {labelU} (Universal)
        </button>
        <button
          onClick={() => handleSelectRegion('A-only')}
          style={getButtonStyle('A-only')}
          onMouseEnter={(e) => { if (!isRegionActive('A-only')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover; }}
          onMouseLeave={(e) => { if (!isRegionActive('A-only')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault; }}
        >
          {labelA} Only
        </button>
        <button
          onClick={() => handleSelectRegion('B-only')}
          style={getButtonStyle('B-only')}
          onMouseEnter={(e) => { if (!isRegionActive('B-only')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover; }}
          onMouseLeave={(e) => { if (!isRegionActive('B-only')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault; }}
        >
          {labelB} Only
        </button>
        <button
          onClick={() => handleSelectRegion('union')}
          style={getButtonStyle('union')}
          onMouseEnter={(e) => { if (!isRegionActive('union')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover; }}
          onMouseLeave={(e) => { if (!isRegionActive('union')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault; }}
        >
          A ∪ B (Union)
        </button>
        <button
          onClick={() => handleSelectRegion('intersection')}
          style={getButtonStyle('intersection')}
          onMouseEnter={(e) => { if (!isRegionActive('intersection')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover; }}
          onMouseLeave={(e) => { if (!isRegionActive('intersection')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault; }}
        >
          A ∩ B (Intersection)
        </button>
        <button
          onClick={() => handleSelectRegion('A-complement')}
          style={getButtonStyle('A-complement')}
          onMouseEnter={(e) => { if (!isRegionActive('A-complement')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover; }}
          onMouseLeave={(e) => { if (!isRegionActive('A-complement')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault; }}
        >
          {labelA}' (Complement)
        </button>
        <button
          onClick={() => handleSelectRegion('B-complement')}
          style={getButtonStyle('B-complement')}
          onMouseEnter={(e) => { if (!isRegionActive('B-complement')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover; }}
          onMouseLeave={(e) => { if (!isRegionActive('B-complement')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault; }}
        >
          {labelB}' (Complement)
        </button>
        <button
          onClick={() => handleSelectRegion('union-complement')}
          style={getButtonStyle('union-complement')}
          onMouseEnter={(e) => { if (!isRegionActive('union-complement')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonHover; }}
          onMouseLeave={(e) => { if (!isRegionActive('union-complement')) e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.buttonDefault; }}
        >
          (A ∪ B)' (Union Complement)
        </button>
        <button
          onClick={() => setActiveSelection(null)}
          style={{
            ...getButtonStyle(null),
            backgroundColor: NEUBRUTALISM_COLORS.danger, // Salmon for clear
            color: NEUBRUTALISM_COLORS.white,
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f6b78a'} // Lighter orange hover
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.danger}
        >
          Clear
        </button>
      </div>

      {/* Info Box - Updated with Neubrutalism Style */}
      <div style={{
        ...neubrutalismBase,
        backgroundColor: NEUBRUTALISM_COLORS.infoBoxBg, // Light teal
        borderColor: NEUBRUTALISM_COLORS.primaryDark,
        width: '100%',
        minHeight: '60px', // Slightly larger for better text fit
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '0.875rem', // text-sm
        fontWeight: '500', // font-medium
        color: NEUBRUTALISM_COLORS.primaryDark,
      }}>
        <p>{getRegionDescription()}</p>
      </div>
    </div>
  );
};

export default InteractiveVennDiagram;