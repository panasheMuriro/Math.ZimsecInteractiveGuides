import React, { useState } from 'react';

interface Polygon {
  name: string;
  sides: number;
}

// --- Neubrutalism Styles & Colors (Aligned with previous components) ---
const NEUBRUTALISM_COLORS = {
  cream: '#f4f1de',      // Background, Cards
  orange: '#e07a5f',     // Accents, Selected, Reset Button, Ship Path
  slate: '#3d405b',      // Text, Lines, Center Dot, Borders
  teal: '#81b29a',       // Back Bearing, Correct, Highlights
  yellow: '#f2cc8f',     // Accents, Highlights, Button Default
  white: '#ffffff',
  blue: '#1d3557',       // Alternative dark for variety
  shadow: 'rgba(61, 64, 91, 0.3)', // slate with opacity for shadow
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.slate}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
  padding: '1rem',
};
// --- End Neubrutalism Styles ---

const PolygonClassification: React.FC = () => {
  const [selectedPolygon, setSelectedPolygon] = useState<number>(0);
  const [isRegular, setIsRegular] = useState<boolean>(true);
  const [isConvex, setIsConvex] = useState<boolean>(true);

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
  const svgSize = Math.min(window.innerWidth * 0.8, 250); // Responsive for mobile
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const radius = svgSize * 0.35;

  // Generate array of points for the polygon
  const generatePolygonPointsArray = (sides: number, isRegular: boolean, isConvex: boolean) => {
    const points: { x: number; y: number }[] = [];
    const angleStep = (2 * Math.PI) / sides;

    for (let i = 0; i < sides; i++) {
      let r = radius;
      const angle = i * angleStep;

      // Irregular: Vary radius slightly
      if (!isRegular) {
        r *= 0.7 + Math.random() * 0.3;
      }

      // Concave: Push one vertex inward (for simplicity, applied to one vertex)
      if (!isConvex && i === 0 && sides > 3) {
        r *= 0.5;
      }

      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      points.push({ x, y });
    }

    return points;
  };

  // Convert points array to string for SVG polygon
  const pointsToString = (points: { x: number; y: number }[]) => {
    return points.map((p) => `${p.x},${p.y}`).join(' ');
  };

  // Calculate exterior angle
  const exteriorAngle = 360 / polygons[selectedPolygon].sides;

  // Generate points for the current polygon
  const pointsArray = generatePolygonPointsArray(polygons[selectedPolygon].sides, isRegular, isConvex);
  const pointsString = pointsToString(pointsArray);

  // --- Button Styling Helper ---
  const getButtonStyle = (isActive: boolean) => {
    return {
      ...neubrutalismBase,
      padding: '0.5rem 1rem',
      fontSize: '0.875rem', // text-sm
      fontWeight: 'bold',
      backgroundColor: isActive ? NEUBRUTALISM_COLORS.teal : NEUBRUTALISM_COLORS.yellow,
      color: isActive ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.slate,
      borderColor: NEUBRUTALISM_COLORS.slate,
      cursor: 'pointer',
      transition: 'all 0.2s',
      // Add hover effect inline
      ...(isActive ? {} : { // No hover change for active buttons
        ':hover': {
          backgroundColor: NEUBRUTALISM_COLORS.cream,
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
        backgroundColor: NEUBRUTALISM_COLORS.orange, // Orange background
        borderColor: NEUBRUTALISM_COLORS.slate,
        color: NEUBRUTALISM_COLORS.slate,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.slate}`,
      }}
    >
      <div className="mb-4 mt-3 text-white">
        <h1 className="text-xl font-bold mb-1 text-center">
          Polygon Classification
        </h1>
        <p className="text-sm text-center">
          Explore polygons by number of sides, regularity, and convexity
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Polygon Visualization */}
        <div
          style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.cream,
            borderColor: NEUBRUTALISM_COLORS.slate,
            padding: '1rem',
          }}
        >
          <h2
            className="text-base font-bold mb-3 text-center"
            style={{ color: NEUBRUTALISM_COLORS.slate }}
          >
            {polygons[selectedPolygon].name} ({polygons[selectedPolygon].sides} sides)
          </h2>
          <div className="flex justify-center mb-3">
            <svg
              width={svgSize}
              height={svgSize}
              className="border rounded-lg bg-gray-50 block"
              style={{
                border: `2px solid ${NEUBRUTALISM_COLORS.slate}`,
                borderRadius: '12px',
                backgroundColor: NEUBRUTALISM_COLORS.white,
              }}
            >
              {/* Polygon */}
              <polygon
                points={pointsString}
                fill={isRegular ? NEUBRUTALISM_COLORS.teal : NEUBRUTALISM_COLORS.yellow}
                stroke={NEUBRUTALISM_COLORS.blue}
                strokeWidth="3"
              />
              {/* Labels for vertices */}
              {pointsArray.map((p, i) => (
                <text
                  key={i}
                  x={p.x + (p.x > centerX ? 5 : -15)}
                  y={p.y + (p.y > centerY ? 10 : -5)}
                  className="text-xs"
                  style={{ fill: NEUBRUTALISM_COLORS.slate }}
                >
                  V{i + 1}
                </text>
              ))}
            </svg>
          </div>

          {/* Polygon Selector */}
          <div className="pb-2 mb-3">
            <div className="flex gap-2 w-full flex-wrap justify-center">
              {polygons.map((polygon, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPolygon(index)}
                  style={getButtonStyle(selectedPolygon === index)}
                  onMouseEnter={(e) => {
                    if (selectedPolygon !== index)
                      e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.cream;
                  }}
                  onMouseLeave={(e) => {
                    if (selectedPolygon !== index)
                      e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.yellow;
                  }}
                >
                  {polygon.name}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles for Regularity and Convexity */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label
                className="block text-sm font-bold mb-1"
                style={{ color: NEUBRUTALISM_COLORS.slate }}
              >
                Regularity
              </label>
              <select
                value={isRegular ? 'Regular' : 'Irregular'}
                onChange={(e) => setIsRegular(e.target.value === 'Regular')}
                style={{
                  ...neubrutalismBase,
                  width: '100%',
                  padding: '0.5rem',
                  fontSize: '0.875rem',
                  color: NEUBRUTALISM_COLORS.slate,
                  backgroundColor: NEUBRUTALISM_COLORS.white,
                  borderColor: NEUBRUTALISM_COLORS.teal,
                }}
              >
                <option value="Regular">Regular</option>
                <option value="Irregular">Irregular</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-bold mb-1"
                style={{ color: NEUBRUTALISM_COLORS.slate }}
              >
                Convexity
              </label>
              <select
                value={isConvex ? 'Convex' : 'Concave'}
                onChange={(e) => setIsConvex(e.target.value === 'Convex')}
                style={{
                  ...neubrutalismBase,
                  width: '100%',
                  padding: '0.5rem',
                  fontSize: '0.875rem',
                  color: NEUBRUTALISM_COLORS.slate,
                  backgroundColor: NEUBRUTALISM_COLORS.white,
                  borderColor: NEUBRUTALISM_COLORS.teal,
                }}
                disabled={polygons[selectedPolygon].sides === 3} // Triangles are always convex
              >
                <option value="Convex">Convex</option>
                <option value="Concave">Concave</option>
              </select>
            </div>
          </div>

          {/* Properties Display */}
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.white,
              borderColor: NEUBRUTALISM_COLORS.slate,
              padding: '0.75rem',
            }}
          >
            <p style={{ color: NEUBRUTALISM_COLORS.slate }}>
              <span className="font-medium">Exterior Angle:</span> {exteriorAngle.toFixed(1)}° (Sum of exterior angles = 360°)
            </p>
            <p style={{ color: NEUBRUTALISM_COLORS.slate }}>
              <span className="font-medium">Regularity:</span> {isRegular ? 'All sides and angles equal' : 'Sides or angles unequal'}
            </p>
            <p style={{ color: NEUBRUTALISM_COLORS.slate }}>
              <span className="font-medium">Convexity:</span>{' '}
              {isConvex ? 'All interior angles < 180°' : 'At least one interior angle > 180°'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolygonClassification;