// src/Components/TwoSetVennDiagram.tsx
import React, { useState } from 'react';

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

  const inactiveColor = "#94A3B8";
  const strokeColor = "#475569";
  const labelColor = "#1E293B";
  const highlightColors: Record<'only-A' | 'only-B' | 'intersection' | 'neither' | 'universal', string> = {
    'only-A': "#93C5FD",
    'only-B': "#FECACA",
    'intersection': "#10B981",
    'neither': "#C7D2FE",
    'universal': "#C7D2FE", // Color for Universal Set
  };
  const intersectionColorA = "#22D3EE";
  const intersectionColorB = "#FDE68A";

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

  return (
    <div className="flex flex-col items-center w-full p-4 bg-slate-100 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="text-xl font-bold mb-3 text-slate-800 text-center">Venn Diagram: Two Sets</h3>
      
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
              onClick={() => handleSelectRegion('neither')}
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
              className={`cursor-pointer transition-all duration-500 ease-in-out`}
              onClick={(e) => { e.stopPropagation(); handleSelectRegion('only-A'); }}
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
              className={`cursor-pointer transition-all duration-500 ease-in-out ${
                isRegionActive('intersection') ? 'mix-blend-multiply' : ''
              }`}
              onClick={(e) => { e.stopPropagation(); handleSelectRegion('only-B'); }}
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
            >
              Neither {labelA} nor {labelB}
            </text>
          </svg>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
        <button
          onClick={() => handleSelectRegion('universal')}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('universal')
              ? 'bg-indigo-500 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {labelU} (All Students) ({totalStudents})
        </button>
        <button
          onClick={() => handleSelectRegion('only-A')}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('only-A')
              ? 'bg-blue-500 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Only {labelA} ({studentsA - studentsBoth})
        </button>
        <button
          onClick={() => handleSelectRegion('only-B')}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('only-B')
              ? 'bg-red-500 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Only {labelB} ({studentsB - studentsBoth})
        </button>
        <button
          onClick={() => handleSelectRegion('intersection')}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('intersection')
              ? 'bg-green-500 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {labelA} ∩ {labelB} ({studentsBoth})
        </button>
        <button
          onClick={() => handleSelectRegion('neither')}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            isRegionActive('neither')
              ? 'bg-indigo-300 text-slate-800'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Neither ({totalStudents - (studentsA - studentsBoth) - studentsBoth - (studentsB - studentsBoth)})
        </button>
        <button
          onClick={() => setActiveRegion(null)}
          className={`px-3 py-3 text-xs sm:text-sm font-medium rounded-full transition-colors ${
            'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Clear Selection
        </button>
      </div>

      <div className="p-4 bg-white border border-slate-300 rounded-lg w-full text-sm">
        <div className="mb-2">
          <span className="font-semibold text-slate-800">Description:</span>
          <p className="text-slate-700">{description}</p>
        </div>
        <div>
          <span className="font-semibold text-slate-800">Calculation:</span>
          <p className="text-slate-700">{calculation} = <span className="font-bold">{result}</span></p>
        </div>
      </div>
    </div>
  );
};

export default VennTwoSets;