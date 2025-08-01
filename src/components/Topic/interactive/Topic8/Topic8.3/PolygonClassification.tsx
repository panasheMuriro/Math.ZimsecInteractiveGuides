import React, { useState } from 'react';

interface Polygon {
  name: string;
  sides: number;
}

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

  return (
    <div className="p-4 bg-gradient-to-br from-[#F29F58] to-[#FF8225] font-sans rounded-2xl">
      <h1 className="text-xl font-bold text-white mb-2 text-center">
        Polygon Classification
      </h1>
      <p className="text-sm text-white mb-4 text-center">
        Explore polygons by number of sides, regularity, and convexity
      </p>

      <div className="flex flex-col gap-4">
        {/* Polygon Visualization */}
        <div className="bg-white/50 p-4 rounded-lg shadow-md">
          <h2 className="text-base font-semibold mb-3 text-center">
            {polygons[selectedPolygon].name} ({polygons[selectedPolygon].sides} sides)
          </h2>
          <div className="flex justify-center mb-3">
            <svg width={svgSize} height={svgSize} className="border rounded-lg bg-gray-50">
              {/* Polygon */}
              <polygon
                points={pointsString}
                fill={isRegular ? '#bfdbfe' : '#facc15'}
                stroke="#2563eb"
                strokeWidth="3"
              />
              {/* Labels for vertices */}
              {pointsArray.map((p, i) => (
                <text
                  key={i}
                  x={p.x + (p.x > centerX ? 5 : -15)}
                  y={p.y + (p.y > centerY ? 10 : -5)}
                  className="text-xs fill-gray-800"
                >
                  V{i + 1}
                </text>
              ))}
            </svg>
          </div>

          {/* Polygon Selector */}
          <div className=" pb-2 mb-3">
            <div className="flex gap-2 w-full flex-wrap">
              {polygons.map((polygon, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPolygon(index)}
                  className={`px-3 py-2 text-sm rounded-2xl transition-colors flex-shrink-0 ${
                    selectedPolygon === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {polygon.name}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles for Regularity and Convexity */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div>
              <label className="block text-xs font-medium mb-1 text-gray-700">
                Regularity
              </label>
              <select
                value={isRegular ? 'Regular' : 'Irregular'}
                onChange={(e) => setIsRegular(e.target.value === 'Regular')}
                className="w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Regular">Regular</option>
                <option value="Irregular">Irregular</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1 text-gray-700">
                Convexity
              </label>
              <select
                value={isConvex ? 'Convex' : 'Concave'}
                onChange={(e) => setIsConvex(e.target.value === 'Convex')}
                className="w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={polygons[selectedPolygon].sides === 3} // Triangles are always convex
              >
                <option value="Convex">Convex</option>
                <option value="Concave">Concave</option>
              </select>
            </div>
          </div>

          {/* Properties Display */}
          <div className="bg-white/60 p-3 rounded-lg text-sm">
            <p>
              <span className="font-medium">Exterior Angle:</span> {exteriorAngle.toFixed(1)}° (Sum of exterior angles = 360°)
            </p>
            <p>
              <span className="font-medium">Regularity:</span> {isRegular ? 'All sides and angles equal' : 'Sides or angles unequal'}
            </p>
            <p>
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