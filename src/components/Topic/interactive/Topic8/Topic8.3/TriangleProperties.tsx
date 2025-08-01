import React, { useState } from 'react';

interface TriangleType {
  name: string;
  sideType: 'Equilateral' | 'Isosceles' | 'Scalene';
  angleType: 'Acute' | 'Right' | 'Obtuse';
  sides: [number, number, number]; // Side lengths [a, b, c]
  angles: [number, number, number]; // Angles [A, B, C] in degrees
}

const TriangleProperties: React.FC = () => {
  const [selectedTriangle, setSelectedTriangle] = useState<number>(0);

  const triangles: TriangleType[] = [
    {
      name: 'Equilateral',
      sideType: 'Equilateral',
      angleType: 'Acute',
      sides: [50, 50, 50],
      angles: [60, 60, 60],
    },
    {
      name: 'Isosceles Acute',
      sideType: 'Isosceles',
      angleType: 'Acute',
      sides: [50, 50, 40],
      angles: [70, 70, 40],
    },
    {
      name: 'Isosceles Right',
      sideType: 'Isosceles',
      angleType: 'Right',
      sides: [40, 40, 56.57], // Approx sqrt(40^2 + 40^2)
      angles: [45, 45, 90],
    },
    {
      name: 'Scalene Acute',
      sideType: 'Scalene',
      angleType: 'Acute',
      sides: [50, 40, 30],
      angles: [85, 55, 40],
    },
    {
      name: 'Scalene Obtuse',
      sideType: 'Scalene',
      angleType: 'Obtuse',
      sides: [50, 30, 60],
      angles: [40, 25, 115],
    },
  ];

  // SVG setup
  const svgSize = Math.min(window.innerWidth * 0.8, 250); // Responsive for mobile
  const centerX = svgSize / 2;
  const centerY = svgSize * 0.6;

  // Generate triangle points using basic coordinates (scaled for visualization)
  const generateTrianglePoints = (sides: [number, number, number], angleType: string) => {
    const [a, b, c] = sides; // a = BC, b = CA, c = AB
    const scale = svgSize / 100; // Scale factor for visibility

    // Base points: B and C on x-axis
    const pointB = { x: centerX - (a * scale) / 2, y: centerY };
    const pointC = { x: centerX + (a * scale) / 2, y: centerY };

    // Calculate point A using the law of cosines and trigonometry
    // Angle at C (between CA and CB)
    const cosC = (a * a + b * b - c * c) / (2 * a * b);
    const angleC = Math.acos(cosC) * (180 / Math.PI); // Angle at C in degrees
    const height = b * scale * Math.sin((angleC * Math.PI) / 180);

    // Adjust point A for obtuse triangles to ensure correct orientation
    let pointA = { x: pointC.x - b * scale * Math.cos((angleC * Math.PI) / 180), y: centerY - height };
    if (angleType === 'Obtuse') {
      pointA = { x: pointC.x - b * scale * Math.cos(((180 - angleC) * Math.PI) / 180), y: centerY + height };
    }

    return [pointA, pointB, pointC];
  };

  const currentTriangle = triangles[selectedTriangle];
  const points = generateTrianglePoints(currentTriangle.sides, currentTriangle.angleType);
  const pointsString = points.map((p) => `${p.x},${p.y}`).join(' ');

  // Calculate exterior angle for display (using first angle as example)
  const exteriorAngle = 180 - currentTriangle.angles[0]; // Exterior angle = sum of opposite interior angles

  return (
    <div className="p-4 bg-gradient-to-br from-[#50727B] to-[#344955] rounded-2xl  font-sans">
      <h1 className="text-xl font-bold text-white mb-2 text-center">
        Triangle Classification
      </h1>
      <p className="text-sm text-white mb-4 text-center">
        Explore triangles by sides and angles
      </p>

      <div className="flex flex-col gap-4">
        {/* Triangle Visualization */}
        <div className="bg-white/20 p-4 rounded-lg shadow-md">
          <h2 className="text-base text-white font-semibold mb-3 text-center">
            {currentTriangle.name} ({currentTriangle.sideType}, {currentTriangle.angleType})
          </h2>
          <div className="flex justify-center mb-3">
            <svg width={svgSize} height={svgSize} className="border rounded-lg bg-gray-50">
              {/* Triangle */}
              <polygon
                points={pointsString}
                fill="#bfdbfe"
                stroke="#2563eb"
                strokeWidth="3"
              />
              {/* Vertex labels */}
              {points.map((p, i) => (
                <text
                  key={i}
                  x={p.x + (p.x > centerX ? 5 : -15)}
                  y={p.y + (p.y > centerY ? 10 : -5)}
                  className="text-xs fill-gray-800"
                >
                  {['A', 'B', 'C'][i]}
                </text>
              ))}
              {/* Side labels */}
              <text
                x={(points[1].x + points[2].x) / 2}
                y={points[1].y + 15}
                textAnchor="middle"
                className="text-xs fill-gray-600"
              >
                a
              </text>
              <text
                x={(points[0].x + points[2].x) / 2 + (points[0].x > points[2].x ? 10 : -10)}
                y={(points[0].y + points[2].y) / 2}
                textAnchor="middle"
                className="text-xs fill-gray-600"
              >
                b
              </text>
              <text
                x={(points[0].x + points[1].x) / 2 + (points[0].x > points[1].x ? -10 : 10)}
                y={(points[0].y + points[1].y) / 2}
                textAnchor="middle"
                className="text-xs fill-gray-600"
              >
                c
              </text>
              {/* Angle labels */}
              {points.map((p, i) => (
                <text
                  key={i}
                  x={p.x}
                  y={p.y + (p.y > centerY ? -10 : 10)}
                  textAnchor="middle"
                  className="text-xs fill-red-600"
                >
                  {currentTriangle.angles[i]}°
                </text>
              ))}
            </svg>
          </div>

          {/* Triangle Selector */}
          <div className="overflow-x-auto pb-2 mb-3">
            <div className="flex gap-2 w-full flex-wrap">
              {triangles.map((triangle, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTriangle(index)}
                  className={`px-3 py-2 text-sm rounded-2xl transition-colors flex-shrink-0 ${
                    selectedTriangle === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {triangle.name}
                </button>
              ))}
            </div>
          </div>

          {/* Properties Display */}
          <div className="bg-white/20 text-white p-3 rounded-lg text-sm">
            <p>
              <span className="font-medium">Side Type:</span> {currentTriangle.sideType}
              {currentTriangle.sideType === 'Equilateral' && ' (a = b = c)'}
              {currentTriangle.sideType === 'Isosceles' && ' (a = b ≠ c)'}
              {currentTriangle.sideType === 'Scalene' && ' (a ≠ b ≠ c)'}
            </p>
            <p>
              <span className="font-medium">Angle Type:</span> {currentTriangle.angleType}
            </p>
            <p>
              <span className="font-medium">Angles:</span> {currentTriangle.angles.join('°, ')}° (Sum = 180°)
            </p>
            <p>
              <span className="font-medium">Exterior Angle (at A):</span> {exteriorAngle}° (Equals sum of angles B + C)
            </p>
            <p>
              <span className="font-medium">Triangle Inequality:</span>{"a + b > c, b + c > a, a + c > b"}
            </p>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default TriangleProperties;