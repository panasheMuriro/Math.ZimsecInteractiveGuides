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

  // Neubrutalism color palette
  const NEUBRUTALISM_COLORS = {
    blue: '#0081a7',       // Primary - Cardinal, Background Accents
    teal: '#00afb9',       // Secondary - Intercardinal, Background
    cream: '#fdfcdc',      // Background, Cards
    orange: '#fed9b7',     // Accents, Half-wind, Highlights
    red: '#f07167',        // Accents, Selected, Reset Button
    white: '#ffffff',
    slate: '#334155',      // Text, Lines, Center Dot
    shadow: 'rgba(0, 0, 0, 0.2)', // Shadows
  };

  // Neubrutalism base style helper
  const neubrutalismBase = {
    border: `3px solid ${NEUBRUTALISM_COLORS.slate}`,
    borderRadius: '12px',
    boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
    padding: '1rem',
    backgroundColor: NEUBRUTALISM_COLORS.white,
  };

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
    if (isSelected) return NEUBRUTALISM_COLORS.red; // Red for selected
    switch (type) {
      case 'cardinal': return NEUBRUTALISM_COLORS.blue; // Blue
      case 'intercardinal': return NEUBRUTALISM_COLORS.teal; // Teal
      case 'half-wind': return NEUBRUTALISM_COLORS.slate; // Orange
      default: return NEUBRUTALISM_COLORS.slate; // Gray
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
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.teal, // Teal background
        border: `4px solid ${NEUBRUTALISM_COLORS.slate}`,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.slate}`,
      }}
    >
      <div className="mb-5 sm:mb-6">
        <h2
          className="text-xl sm:text-2xl font-bold mb-2 text-center pt-3"
          style={{ color: NEUBRUTALISM_COLORS.white }}
        >
          Cardinal & Intermediate Directions
        </h2>
        <p
          className="text-sm sm:text-base mb-4 text-center"
          style={{ color: NEUBRUTALISM_COLORS.cream }}
        >
          Interactive compass rose showing all 16 directions with angles
        </p>
        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm">
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.cream,
              borderColor: NEUBRUTALISM_COLORS.slate,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
            }}
          >
            <div
              className="w-4 h-1 rounded-full"
              style={{ backgroundColor: NEUBRUTALISM_COLORS.blue }}
            ></div>
            <span style={{ color: NEUBRUTALISM_COLORS.slate }}>
              Cardinal (N, E, S, W)
            </span>
          </div>
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.cream,
              borderColor: NEUBRUTALISM_COLORS.slate,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
            }}
          >
            <div
              className="w-4 h-1 rounded-full"
              style={{ backgroundColor: NEUBRUTALISM_COLORS.teal }}
            ></div>
            <span style={{ color: NEUBRUTALISM_COLORS.slate }}>
              Intercardinal (NE, SE, SW, NW)
            </span>
          </div>
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.cream,
              borderColor: NEUBRUTALISM_COLORS.slate,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
            }}
          >
            <div
              className="w-4 h-1 rounded-full"
              style={{ backgroundColor: NEUBRUTALISM_COLORS.orange }}
            ></div>
            <span style={{ color: NEUBRUTALISM_COLORS.slate }}>
              Half-wind (NNE, ENE, etc.)
            </span>
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
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.cream,
              borderColor: NEUBRUTALISM_COLORS.slate,
            }}
          >
            {/* Background circles */}
            {[0.42, 0.32, 0.22, 0.12].map((factor, i) => (
              <circle
                key={i}
                cx={centerX}
                cy={centerY}
                r={svgSize * factor}
                fill="none"
                stroke={NEUBRUTALISM_COLORS.slate}
                strokeWidth={i === 0 ? 1.5 : 1}
                strokeDasharray={i === 0 ? 'none' : '4 2'}
              />
            ))}
            {/* Direction lines and labels */}
            {directions.map((direction: Direction) => {
              const isSelected = selectedDirection === direction.name;
              const shouldShowLabel =
                showAllLabels ||
                isSelected ||
                direction.type === 'cardinal';
              const innerPoint = polarToCartesian(
                centerX,
                centerY,
                innerRadius,
                direction.angle
              );
              const outerPoint = polarToCartesian(
                centerX,
                centerY,
                outerRadius,
                direction.angle
              );
              const labelPoint = polarToCartesian(
                centerX,
                centerY,
                labelRadius,
                direction.angle
              );
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
                    r={
                      direction.type === 'cardinal'
                        ? 7
                        : direction.type === 'intercardinal'
                        ? 6
                        : 5
                    }
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
                      className={`text-xs sm:text-sm font-bold cursor-pointer transition-all duration-200`}
                      onClick={() => handleDirectionClick(direction.name)}
                      style={{
                        fill: isSelected
                          ? NEUBRUTALISM_COLORS.red
                          : getColorForType(direction.type),
                      }}
                    >
                      {direction.name}
                    </text>
                  )}
                </g>
              );
            })}
            {/* Center compass rose */}
            <circle
              cx={centerX}
              cy={centerY}
              r="8"
              fill={NEUBRUTALISM_COLORS.slate}
              style={{ boxShadow: `0 2px 4px ${NEUBRUTALISM_COLORS.shadow}` }}
            />
            <text
              x={centerX}
              y={centerY + 4}
              textAnchor="middle"
              className="text-xs font-bold"
              style={{ fill: NEUBRUTALISM_COLORS.white }}
            >
              N
            </text>
            {/* North indicator arrow */}
            <polygon
              points={`${centerX - 5},${centerY - 25} ${centerX + 5},${centerY - 25} ${centerX},${centerY - 33}`}
              fill={NEUBRUTALISM_COLORS.red}
              style={{ filter: `drop-shadow(0 2px 2px ${NEUBRUTALISM_COLORS.shadow})` }}
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 justify-center">
        <button
          onClick={() => setShowAllLabels(!showAllLabels)}
          style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.blue,
            borderColor: NEUBRUTALISM_COLORS.slate,
            color: NEUBRUTALISM_COLORS.white,
            fontWeight: 'bold',
            padding: '0.75rem 1rem',
            flex: '1',
          }}
          type="button"
        >
          {showAllLabels ? 'Hide Labels' : 'Show All Labels'}
        </button>
        <button
          onClick={() => setSelectedDirection(null)}
          style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.red,
            borderColor: NEUBRUTALISM_COLORS.slate,
            color: NEUBRUTALISM_COLORS.white,
            fontWeight: 'bold',
            padding: '0.75rem 1rem',
            flex: '1',
          }}
          type="button"
        >
          Clear Selection
        </button>
      </div>
      {/* Selected direction info */}
      {selectedDirectionData && (
        <div
          style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.cream,
            borderColor: NEUBRUTALISM_COLORS.red,
            borderLeftWidth: '6px',
            transform: 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
          className="mb-5 sm:mb-6 p-4 transform transition-transform duration-300 hover:scale-[1.02]"
        >
          <h3
            className="text-lg font-bold mb-2 flex items-center"
            style={{ color: NEUBRUTALISM_COLORS.slate }}
          >
            <span
              className="mr-2"
              style={{ color: NEUBRUTALISM_COLORS.red }}
            >
              •
            </span>
            {selectedDirectionData.name} - {selectedDirectionData.fullName}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <p style={{ color: NEUBRUTALISM_COLORS.slate }}>
              <span
                className="font-semibold"
                style={{ color: NEUBRUTALISM_COLORS.slate }}
              >
                Angle:
              </span>{' '}
              {selectedDirectionData.angle}°
            </p>
            <p style={{ color: NEUBRUTALISM_COLORS.slate }}>
              <span
                className="font-semibold"
                style={{ color: NEUBRUTALISM_COLORS.slate }}
              >
                Type:
              </span>{' '}
              {selectedDirectionData.type === 'cardinal'
                ? 'Cardinal Direction'
                : selectedDirectionData.type === 'intercardinal'
                ? 'Intercardinal Direction'
                : 'Half-wind Direction'}
            </p>
          </div>
        </div>
      )}
      {/* Memory aid */}
      <div
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.orange,
          borderColor: NEUBRUTALISM_COLORS.slate,
        }}
      >
        <h3
          className="text-lg font-semibold mb-2 flex gap-3 items-center"
          style={{ color: NEUBRUTALISM_COLORS.slate }}
        >
          <Info style={{ color: NEUBRUTALISM_COLORS.slate }} />
          Memory Aid
        </h3>
        <p style={{ color: NEUBRUTALISM_COLORS.slate }}>
          <strong>"Never Eat Soggy Waffles"</strong> - Remember the cardinal
          directions clockwise:
          <span
            className="font-mono block sm:inline mt-1 sm:mt-0 px-2 py-1 rounded ml-0 sm:ml-1"
            style={{
              backgroundColor: NEUBRUTALISM_COLORS.cream,
              color: NEUBRUTALISM_COLORS.slate,
            }}
          >
            {' '}
            N → E → S → W
          </span>
        </p>
      </div>
    </div>
  );
};
export default CardinalBearings;