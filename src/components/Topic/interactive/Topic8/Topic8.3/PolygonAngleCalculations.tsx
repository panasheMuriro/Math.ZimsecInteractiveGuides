import React, { useState } from 'react';

interface Polygon {
  name: string;
  sides: number;
}

// --- Neubrutalism Styles & Colors ---
const NEUBRUTALISM_COLORS = {
  black: '#151515',      // Text, Lines, Borders, Background
  red: '#a63d40',        // Accents, Selected, Interior Angle
  yellow: '#e9b872',     // Accents, Highlights, Button Default
  green: '#90a959',      // Exterior Angle
  blue: '#6494aa',       // Polygon Fill, Background Accents
  white: '#ffffff',
  shadow: 'rgba(21, 21, 21, 0.3)', // black with opacity for shadow
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.black}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
  padding: '1rem',
};
// --- End Neubrutalism Styles ---

const PolygonAngleCalculations: React.FC = () => {
  const [selectedPolygon, setSelectedPolygon] = useState<number>(0);
  const [customSides, setCustomSides] = useState<string>('');

  const polygons: Polygon[] = [
    { name: 'Triangle', sides: 3 },
    { name: 'Quadrilateral', sides: 4 },
    { name: 'Pentagon', sides: 5 },
    { name: 'Hexagon', sides: 6 },
    { name: 'Heptagon', sides: 7 },
    { name: 'Octagon', sides: 8 },
    { name: 'Nonagon', sides: 9 },
    { name: 'Decagon', sides: 10 },
  ];

  // SVG setup
  const svgSize = 250;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const radius = svgSize * 0.35;

  // Generate points for a regular polygon
  const generatePolygonPoints = (sides: number) => {
    const points: { x: number; y: number }[] = [];
    const angleStep = (2 * Math.PI) / sides;
    for (let i = 0; i < sides; i++) {
      const angle = i * angleStep;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push({ x, y });
    }
    return points;
  };

  // Calculate angle properties
  const calculateAngles = (sides: number) => {
    const sumInterior = (sides - 2) * 180;
    const interiorAngle = sumInterior / sides;
    const exteriorAngle = 360 / sides;
    return { sumInterior, interiorAngle, exteriorAngle };
  };

  // Determine current number of sides
  const n = customSides && parseInt(customSides) >= 3 ? parseInt(customSides) : polygons[selectedPolygon].sides;
  const points = generatePolygonPoints(n);
  const pointsString = points.map((p) => `${p.x},${p.y}`).join(' ');
  const { sumInterior, interiorAngle, exteriorAngle } = calculateAngles(n);

  // Generate arc for interior angle at vertex V1 (between Vn-V1-V2)
  const arcRadius = radius * 0.2;
  const vertex = points[0]; // V1
  const prevVertex = points[n - 1]; // Vn
  const nextVertex = points[1]; // V2

  // Calculate angles for arc (from prev to next, going counterclockwise for interior)
  const angleToPrev = Math.atan2(prevVertex.y - vertex.y, prevVertex.x - vertex.x);
  const angleToNext = Math.atan2(nextVertex.y - vertex.y, nextVertex.x - vertex.x);

  // For interior angle, we want to go from the direction toward the previous vertex
  // to the direction toward the next vertex, sweeping the interior (smaller) angle
  let startAngle = angleToPrev;
  let endAngle = angleToNext;

  // Normalize angles to ensure we sweep the correct (interior) direction
  if (endAngle < startAngle) {
    endAngle += 2 * Math.PI;
  }

  // Check if we need to swap to get the interior angle (smaller arc)
  let sweepAngle = endAngle - startAngle;
  if (sweepAngle > Math.PI) {
    // We're taking the long way around, so swap and use the other direction
    [startAngle, endAngle] = [endAngle, startAngle];
    sweepAngle = 2 * Math.PI - sweepAngle;
  }

  const arcStart = {
    x: vertex.x + arcRadius * Math.cos(startAngle),
    y: vertex.y + arcRadius * Math.sin(startAngle),
  };
  const arcEnd = {
    x: vertex.x + arcRadius * Math.cos(endAngle),
    y: vertex.y + arcRadius * Math.sin(endAngle),
  };
  const largeArcFlag = sweepAngle > Math.PI ? 1 : 0;
  const sweepFlag = 1; // Clockwise sweep for the interior angle

  // Exterior angle: extend the V1-V2 side beyond V1
  const exteriorLineStart = {
    x: vertex.x - radius * 0.3 * Math.cos(angleToNext),
    y: vertex.y - radius * 0.3 * Math.sin(angleToNext),
  };

  // Exterior angle arc (from extended line to previous vertex)
  const exteriorArcRadius = radius * 0.15;
  const extendedLineAngle = angleToNext + Math.PI; // opposite direction of V1-V2
  const exteriorArcStart = {
    x: vertex.x + exteriorArcRadius * Math.cos(extendedLineAngle),
    y: vertex.y + exteriorArcRadius * Math.sin(extendedLineAngle),
  };
  const exteriorArcEnd = {
    x: vertex.x + exteriorArcRadius * Math.cos(angleToPrev),
    y: vertex.y + exteriorArcRadius * Math.sin(angleToPrev),
  };

  // Calculate exterior arc sweep (should be the larger arc, going the "long way")
  let exteriorStartAngle = extendedLineAngle;
  let exteriorEndAngle = angleToPrev;

  // Normalize angles
  if (exteriorEndAngle < exteriorStartAngle) {
    exteriorEndAngle += 2 * Math.PI;
  }

  let exteriorSweepAngle = exteriorEndAngle - exteriorStartAngle;

  // For exterior angle, we want the LARGER arc (the one that goes "around the outside")
  if (exteriorSweepAngle < Math.PI) {
    // We're taking the short way, but we want the long way for exterior angle
    [exteriorStartAngle, exteriorEndAngle] = [exteriorEndAngle, exteriorStartAngle];
    exteriorSweepAngle = 2 * Math.PI - exteriorSweepAngle;
  }

  const exteriorLargeArcFlag = exteriorSweepAngle > Math.PI ? 1 : 0;
  const exteriorSweepFlag = 0; // Counter-clockwise for exterior angle

  // --- Button Styling Helper ---
  const getButtonStyle = (isActive: boolean) => {
    return {
      ...neubrutalismBase,
      padding: '0.5rem 1rem',
      fontSize: '0.875rem', // text-sm
      fontWeight: 'bold',
      backgroundColor: isActive ? NEUBRUTALISM_COLORS.red : NEUBRUTALISM_COLORS.yellow,
      color: isActive ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.black,
      borderColor: NEUBRUTALISM_COLORS.black,
      cursor: 'pointer',
      transition: 'all 0.2s',
      // Add hover effect inline
      ...(isActive ? {} : { // No hover change for active buttons
        ':hover': {
          backgroundColor: NEUBRUTALISM_COLORS.blue,
        }
      })
    };
  };
  // --- End Button Styling ---

  return (
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.red, // Red background
        borderColor: NEUBRUTALISM_COLORS.black,
        color: NEUBRUTALISM_COLORS.black,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.black}`,
      }}
    >
      <div className="mb-4 mt-3 text-white">
        <h1 className="text-xl font-bold mb-1 text-center">
          Polygon Angle Calculations
        </h1>
        <p className="text-sm text-center">
          Explore interior and exterior angles of regular polygons
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Polygon Visualization */}
        <div
          style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.blue, // Blue background
            borderColor: NEUBRUTALISM_COLORS.black,
            padding: '1rem',
          }}
        >
          <h2
            className="text-base font-bold mb-3 text-center"
            style={{ color: NEUBRUTALISM_COLORS.white }}
          >
            {customSides && parseInt(customSides) >= 3 ? `${n}-Sided Polygon` : polygons[selectedPolygon].name} ({n} sides)
          </h2>
          <div className="flex justify-center mb-3">
            <svg
              width={svgSize}
              height={svgSize}
              className="border rounded-lg block"
              style={{
                border: `2px solid ${NEUBRUTALISM_COLORS.black}`,
                borderRadius: '12px',
                backgroundColor: NEUBRUTALISM_COLORS.white,
              }}
            >
              {/* Polygon */}
              <polygon
                points={pointsString}
                fill={NEUBRUTALISM_COLORS.yellow}
                stroke={NEUBRUTALISM_COLORS.black}
                strokeWidth="3"
              />
              {/* Interior angle arc at V1 */}
              <path
                d={`M ${arcStart.x} ${arcStart.y} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} ${sweepFlag} ${arcEnd.x} ${arcEnd.y}`}
                fill="none"
                stroke={NEUBRUTALISM_COLORS.red}
                strokeWidth="2"
              />
              {/* Interior angle label */}
              <text
                x={vertex.x + (arcRadius * 0.6) * Math.cos((startAngle + endAngle) / 2)}
                y={vertex.y + (arcRadius * 0.6) * Math.sin((startAngle + endAngle) / 2) + 5}
                textAnchor="middle"
                className="text-xs"
                style={{ fill: NEUBRUTALISM_COLORS.red }}
              >
                {interiorAngle.toFixed(1)}°
              </text>
              {/* Extended side line (V1-V2 extended beyond V1) */}
              <line
                x1={exteriorLineStart.x}
                y1={exteriorLineStart.y}
                x2={vertex.x}
                y2={vertex.y}
                stroke={NEUBRUTALISM_COLORS.green}
                strokeWidth="2"
                strokeDasharray="4,4"
              />
              {/* Exterior angle arc */}
              <path
                d={`M ${exteriorArcStart.x} ${exteriorArcStart.y} A ${exteriorArcRadius} ${exteriorArcRadius} 0 ${exteriorLargeArcFlag} ${exteriorSweepFlag} ${exteriorArcEnd.x} ${exteriorArcEnd.y}`}
                fill="none"
                stroke={NEUBRUTALISM_COLORS.green}
                strokeWidth="2"
              />
              {/* Exterior angle label */}
              <text
                x={vertex.x + (exteriorArcRadius * 0.8) * Math.cos((exteriorStartAngle + exteriorEndAngle) / 2)}
                y={vertex.y + (exteriorArcRadius * 0.8) * Math.sin((exteriorStartAngle + exteriorEndAngle) / 2) - 40}
                textAnchor="middle"
                className="text-xs"
                style={{ fill: NEUBRUTALISM_COLORS.green }}
              >
                {exteriorAngle.toFixed(1)}°
              </text>
              {/* Vertex labels */}
              {points.map((p, i) => (
                <text
                  key={i}
                  x={p.x + (p.x > centerX ? 5 : -15)}
                  y={p.y + (p.y > centerY ? 10 : -5)}
                  className="text-xs"
                  style={{ fill: NEUBRUTALISM_COLORS.black }}
                >
                  V{i + 1}
                </text>
              ))}
            </svg>
          </div>

          {/* Polygon Selector */}
          <div className="overflow-x-auto pb-2 mb-3">
            <div className="flex gap-2 w-full flex-wrap justify-center">
              {polygons.map((polygon, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedPolygon(index);
                    setCustomSides('');
                  }}
                  style={getButtonStyle(selectedPolygon === index && !customSides)}
                  onMouseEnter={(e) => {
                    if (!(selectedPolygon === index && !customSides))
                      e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.blue;
                  }}
                  onMouseLeave={(e) => {
                    if (!(selectedPolygon === index && !customSides))
                      e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.yellow;
                  }}
                >
                  {polygon.name}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Sides Input */}
          <div className="mb-3">
            <label
              className="block text-sm font-bold mb-1"
              style={{ color: NEUBRUTALISM_COLORS.white }}
            >
              Enter Number of Sides (≥ 3)
            </label>
            <input
              type="number"
              min="3"
              value={customSides}
              onChange={(e) => setCustomSides(e.target.value)}
              style={{
                ...neubrutalismBase,
                width: '100%',
                padding: '0.5rem',
                fontSize: '0.875rem',
                color: NEUBRUTALISM_COLORS.black,
                backgroundColor: NEUBRUTALISM_COLORS.white,
                borderColor: NEUBRUTALISM_COLORS.yellow,
              }}
              placeholder="e.g., 7"
            />
          </div>

          {/* Angle Calculations Display */}
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.white,
              borderColor: NEUBRUTALISM_COLORS.black,
              padding: '0.75rem',
            }}
          >
            <p style={{ color: NEUBRUTALISM_COLORS.black }}>
              <span className="font-medium">Sum of Interior Angles:</span> {sumInterior}° [Formula: (n-2) × 180°]
            </p>
            <p style={{ color: NEUBRUTALISM_COLORS.black }}>
              <span className="font-medium">Each Interior Angle:</span> {interiorAngle.toFixed(1)}° [Formula: ((n-2) × 180°)/n]
            </p>
            <p style={{ color: NEUBRUTALISM_COLORS.black }}>
              <span className="font-medium">Each Exterior Angle:</span> {exteriorAngle.toFixed(1)}° [Formula: 360°/n]
            </p>
            <p style={{ color: NEUBRUTALISM_COLORS.black }}>
              <span className="font-medium">Key Relationship:</span> Interior + Exterior = {interiorAngle.toFixed(1)}° + {exteriorAngle.toFixed(1)}° = 180°
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolygonAngleCalculations;