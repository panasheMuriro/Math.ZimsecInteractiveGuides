import { Info } from 'lucide-react';
import { useState } from 'react';

interface Direction {
  name: string;
  fullName: string;
  angle: number;
  type: 'cardinal' | 'intercardinal' | 'half-wind';
}

interface Point {
  x: number;
  y: number;
}

const CardinalBearings = () => {
  const [selectedDirection, setSelectedDirection] = useState<string | null>(null);
  const [showAllLabels, setShowAllLabels] = useState<boolean>(false);

  // Define all 16 compass directions
  const directions: Direction[] = [
    { name: 'N', fullName: 'North', angle: 0, type: 'cardinal' },
    { name: 'NNE', fullName: 'North-Northeast', angle: 22.5, type: 'half-wind' },
    { name: 'NE', fullName: 'Northeast', angle: 45, type: 'intercardinal' },
    { name: 'ENE', fullName: 'East-Northeast', angle: 67.5, type: 'half-wind' },
    { name: 'E', fullName: 'East', angle: 90, type: 'cardinal' },
    { name: 'ESE', fullName: 'East-Southeast', angle: 112.5, type: 'half-wind' },
    { name: 'SE', fullName: 'Southeast', angle: 135, type: 'intercardinal' },
    { name: 'SSE', fullName: 'South-Southeast', angle: 157.5, type: 'half-wind' },
    { name: 'S', fullName: 'South', angle: 180, type: 'cardinal' },
    { name: 'SSW', fullName: 'South-Southwest', angle: 202.5, type: 'half-wind' },
    { name: 'SW', fullName: 'Southwest', angle: 225, type: 'intercardinal' },
    { name: 'WSW', fullName: 'West-Southwest', angle: 247.5, type: 'half-wind' },
    { name: 'W', fullName: 'West', angle: 270, type: 'cardinal' },
    { name: 'WNW', fullName: 'West-Northwest', angle: 292.5, type: 'half-wind' },
    { name: 'NW', fullName: 'Northwest', angle: 315, type: 'intercardinal' },
    { name: 'NNW', fullName: 'North-Northwest', angle: 337.5, type: 'half-wind' }
  ];

  // Responsive SVG size
  const svgSize = 280;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const outerRadius = svgSize * 0.42; // Slightly reduced to prevent label cutoff
  const innerRadius = svgSize * 0.32;
  const labelRadius = svgSize * 0.48; // Adjusted to keep labels within bounds

  const getColorForType = (type: Direction['type'], isSelected = false): string => {
    if (isSelected) return '#ef4444'; // Red for selected
    switch (type) {
      case 'cardinal': return '#3b82f6'; // Blue
      case 'intercardinal': return '#10b981'; // Emerald
      case 'half-wind': return '#8b5cf6'; // Violet
      default: return '#64748b'; // Gray
    }
  };

  const getStrokeWidth = (type: Direction['type'], isSelected = false): number => {
    if (isSelected) return 3;
    switch (type) {
      case 'cardinal': return 2.5;
      case 'intercardinal': return 2;
      case 'half-wind': return 1.5;
      default: return 1;
    }
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number): Point => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const handleDirectionClick = (directionName: string): void => {
    setSelectedDirection(selectedDirection === directionName ? null : directionName);
  };

  const selectedDirectionData = selectedDirection ? directions.find(d => d.name === selectedDirection) : null;

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-br from-[#687FE5] to-indigo-300 rounded-2xl max-w-2xl mx-auto shadow-lg">
      <div className="mb-5 sm:mb-6 ">
        <h2 className="text-xl sm:text-2xl text-white font-bold mb-2 text-center pt-3">Cardinal & Intermediate Directions</h2>
        <p className="text-sm sm:text-base text-white mb-4 text-center">
          Interactive compass rose showing all 16 directions with angles
        </p>
        
     
        
        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-lg shadow-sm">
            <div className="w-4 h-1 bg-blue-500 rounded-full"></div>
            <span>Cardinal (N, E, S, W)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-lg shadow-sm">
            <div className="w-4 h-1 bg-emerald-500 rounded-full"></div>
            <span>Intercardinal (NE, SE, SW, NW)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-lg shadow-sm">
            <div className="w-4 h-1 bg-violet-500 rounded-full"></div>
            <span>Half-wind (NNE, ENE, etc.)</span>
          </div>
        </div>
      </div>

      {/* SVG Container */}
      <div className="flex justify-center mb-5 sm:mb-6">
        <div className="relative">
          <svg 
            width={svgSize} 
            height={svgSize} 
            viewBox={`0 0 ${svgSize} ${svgSize}`}
            className="bg-white rounded-xl shadow-lg border border-gray-200 w-full h-auto"
          >
            {/* Background circles */}
            {[0.42, 0.32, 0.22, 0.12].map((factor, i) => (
              <circle 
                key={i}
                cx={centerX} 
                cy={centerY} 
                r={svgSize * factor} 
                fill="none" 
                stroke="#e5e7eb" 
                strokeWidth={i === 0 ? 1.5 : 1}
                strokeDasharray={i === 0 ? "none" : "4 2"}
              />
            ))}
            
            {/* Direction lines and labels */}
            {directions.map((direction: Direction) => {
              const isSelected = selectedDirection === direction.name;
              const shouldShowLabel = showAllLabels || isSelected || direction.type === 'cardinal';
              const innerPoint = polarToCartesian(centerX, centerY, innerRadius, direction.angle);
              const outerPoint = polarToCartesian(centerX, centerY, outerRadius, direction.angle);
              const labelPoint = polarToCartesian(centerX, centerY, labelRadius, direction.angle);
              
              return (
                <g key={direction.name}>
                  {/* Direction line */}
                  <line
                    x1={innerPoint.x}
                    y1={innerPoint.y}
                    x2={outerPoint.x}
                    y2={outerPoint.y}
                    stroke={getColorForType(direction.type, isSelected)}
                    strokeWidth={getStrokeWidth(direction.type, isSelected)}
                    className="cursor-pointer transition-all duration-200 hover:opacity-80"
                    onClick={() => handleDirectionClick(direction.name)}
                  />
                  
                  {/* Direction dot */}
                  <circle
                    cx={outerPoint.x}
                    cy={outerPoint.y}
                    r={direction.type === 'cardinal' ? 7 : direction.type === 'intercardinal' ? 6 : 5}
                    fill={getColorForType(direction.type, isSelected)}
                    className="cursor-pointer transition-all duration-200 hover:opacity-80 hover:scale-110"
                    onClick={() => handleDirectionClick(direction.name)}
                  />
                  
                  {/* Direction label */}
                  {shouldShowLabel && (
                    <text
                      x={labelPoint.x}
                      y={labelPoint.y + 5}
                      textAnchor="middle"
                      className={`text-xs sm:text-sm font-bold cursor-pointer transition-all duration-200 ${
                        isSelected 
                          ? 'fill-red-600 text-shadow' 
                          : direction.type === 'cardinal'
                            ? 'fill-blue-600'
                            : direction.type === 'intercardinal'
                              ? 'fill-emerald-600'
                              : 'fill-violet-600'
                      }`}
                      onClick={() => handleDirectionClick(direction.name)}
                    >
                      {direction.name}
                    </text>
                  )}
                </g>
              );
            })}
            
            {/* Center compass rose */}
            <circle cx={centerX} cy={centerY} r="8" fill="#374151" className="shadow-md"/>
            <text x={centerX} y={centerY + 4} textAnchor="middle" className="text-xs fill-white font-bold">N</text>
            
            {/* North indicator arrow */}
            <polygon
              points={`${centerX-5},${centerY-25} ${centerX+5},${centerY-25} ${centerX},${centerY-33}`}
              fill="#dc2626"
              className="drop-shadow-md"
            />
          </svg>
        </div>
      </div>


   <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 justify-center">
          <button
            onClick={() => setShowAllLabels(!showAllLabels)}
            className="px-4 py-2.5 text-sm sm:text-base bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md active:scale-95"
            type="button"
          >
            {showAllLabels ? 'Hide Labels' : 'Show All Labels'}
          </button>
          <button
            onClick={() => setSelectedDirection(null)}
            className="px-4 py-2.5 text-sm sm:text-base bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md active:scale-95"
            type="button"
          >
            Clear Selection
          </button>
        </div>

      {/* Selected direction info */}
      {selectedDirectionData && (
        <div className="mb-5 sm:mb-6 p-4 bg-gradient-to-r from-white to-blue-50 rounded-xl shadow-md border-l-4 border-red-500 transform transition-transform duration-300 hover:scale-[1.02]">
          <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
            <span className="mr-2 text-red-500">•</span>
            {selectedDirectionData.name} - {selectedDirectionData.fullName}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-700">Angle:</span> {selectedDirectionData.angle}°
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-700">Type:</span> {
                selectedDirectionData.type === 'cardinal' ? 'Cardinal Direction' :
                selectedDirectionData.type === 'intercardinal' ? 'Intercardinal Direction' :
                'Half-wind Direction'
              }
            </p>
          </div>
        </div>
      )}

      {/* Memory aid */}
      <div className="p-4 bg-white/50 rounded-xl shadow-inner">
        <h3 className="text-lg font-semibold mb-2 flex gap-3 items-center">
         <Info/>
          Memory Aid
        </h3>
        <p >
          <strong>"Never Eat Soggy Waffles"</strong> - Remember the cardinal directions clockwise: 
          <span className="font-mono block sm:inline mt-1 sm:mt-0 bg-white/50 px-2 py-1 rounded ml-0 sm:ml-1"> N → E → S → W</span>
        </p>
      </div>
    </div>
  );
};

export default CardinalBearings;