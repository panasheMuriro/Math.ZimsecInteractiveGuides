import  { useState } from 'react';

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

const CardinalBearings= () => {
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

  // Mobile-first responsive values
  const svgSize = 280; // Smaller for mobile
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const outerRadius = svgSize * 0.45; // 45% of svg size
  const innerRadius = svgSize * 0.35; // 35% of svg size
  const labelRadius = svgSize * 0.52; // 52% of svg size

  const getColorForType = (type: Direction['type'], isSelected = false): string => {
    if (isSelected) return '#ef4444';
    switch (type) {
      case 'cardinal': return '#1d4ed8';
      case 'intercardinal': return '#059669';
      case 'half-wind': return '#7c3aed';
      default: return '#64748b';
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
    <div className="p-3 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg max-w-full">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Cardinal & Intermediate Directions</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
          Interactive compass rose showing all 16 directions with angles
        </p>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-3 sm:mb-4">
          <button
            onClick={() => setShowAllLabels(!showAllLabels)}
            className="px-3 py-2 text-sm sm:text-base bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors touch-manipulation"
            type="button"
          >
            {showAllLabels ? 'Hide Labels' : 'Show All Labels'}
          </button>
          
          <button
            onClick={() => setSelectedDirection(null)}
            className="px-3 py-2 text-sm sm:text-base bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors touch-manipulation"
            type="button"
          >
            Clear Selection
          </button>
        </div>

        {/* Legend - Stack on mobile */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-blue-600 flex-shrink-0"></div>
            <span>Cardinal (N, E, S, W)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-green-600 flex-shrink-0"></div>
            <span>Intercardinal (NE, SE, SW, NW)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-purple-600 flex-shrink-0"></div>
            <span>Half-wind (NNE, ENE, etc.)</span>
          </div>
        </div>
      </div>

      {/* SVG Container - Centered and responsive */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <div className="relative">
          <svg 
            width={svgSize} 
            height={svgSize} 
            viewBox={`0 0 ${svgSize} ${svgSize}`}
            className="border rounded-lg bg-white shadow-lg w-full h-auto max-w-sm sm:max-w-md"
          >
            {/* Background circles */}
            <circle cx={centerX} cy={centerY} r={outerRadius} fill="none" stroke="#e5e7eb" strokeWidth="1"/>
            <circle cx={centerX} cy={centerY} r={innerRadius} fill="none" stroke="#e5e7eb" strokeWidth="1"/>
            <circle cx={centerX} cy={centerY} r={svgSize * 0.25} fill="none" stroke="#e5e7eb" strokeWidth="1"/>
            <circle cx={centerX} cy={centerY} r={svgSize * 0.15} fill="none" stroke="#e5e7eb" strokeWidth="1"/>

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
                    className="cursor-pointer hover:opacity-80 touch-manipulation"
                    onClick={() => handleDirectionClick(direction.name)}
                    style={{ touchAction: 'manipulation' }}
                  />
                  
                  {/* Direction dot - Larger for mobile touch */}
                  <circle
                    cx={outerPoint.x}
                    cy={outerPoint.y}
                    r={direction.type === 'cardinal' ? 6 : direction.type === 'intercardinal' ? 5 : 4}
                    fill={getColorForType(direction.type, isSelected)}
                    className="cursor-pointer hover:opacity-80 touch-manipulation"
                    onClick={() => handleDirectionClick(direction.name)}
                    style={{ touchAction: 'manipulation' }}
                  />

                  {/* Direction label */}
                  {shouldShowLabel && (
                    <text
                      x={labelPoint.x}
                      y={labelPoint.y + 4}
                      textAnchor="middle"
                      className={`text-xs sm:text-sm font-semibold cursor-pointer hover:opacity-80 touch-manipulation ${
                        isSelected ? 'fill-red-600' : 'fill-gray-700'
                      }`}
                      onClick={() => handleDirectionClick(direction.name)}
                      style={{ touchAction: 'manipulation' }}
                    >
                      {direction.name}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Center compass rose */}
            <circle cx={centerX} cy={centerY} r="6" fill="#374151"/>
            <text x={centerX} y={centerY + 3} textAnchor="middle" className="text-xs fill-white font-bold">N</text>

            {/* North indicator arrow */}
            <polygon
              points={`${centerX-4},${centerY-20} ${centerX+4},${centerY-20} ${centerX},${centerY-28}`}
              fill="#dc2626"
            />
          </svg>
        </div>
      </div>

      {/* Selected direction info */}
      {selectedDirectionData && (
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white rounded-lg shadow-md border-l-4 border-red-500">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
            {selectedDirectionData.name} - {selectedDirectionData.fullName}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-1">
            <span className="font-semibold">Angle:</span> {selectedDirectionData.angle}°
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            <span className="font-semibold">Type:</span> {
              selectedDirectionData.type === 'cardinal' ? 'Cardinal Direction' :
              selectedDirectionData.type === 'intercardinal' ? 'Intercardinal Direction' :
              'Half-wind Direction'
            }
          </p>
        </div>
      )}

      {/* Memory aid */}
      <div className="p-3 sm:p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h3 className="text-base sm:text-lg font-semibold text-yellow-800 mb-2">Memory Aid</h3>
        <p className="text-sm sm:text-base text-yellow-700">
          <strong>"Never Eat Soggy Waffles"</strong> - Remember the cardinal directions clockwise: 
          <span className="font-mono block sm:inline mt-1 sm:mt-0"> N → E → S → W</span>
        </p>
      </div>
    </div>
  );
};

export default CardinalBearings;