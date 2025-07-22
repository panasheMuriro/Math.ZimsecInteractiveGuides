/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

interface BearingExample {
  label: string;
  angle: number;
}

const ThreeFigureBearings = () => {
  const [bearingAngle, setBearingAngle] = useState<string>('0');
  const [currentExample, setCurrentExample] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [sweepAngle, setSweepAngle] = useState<number>(0);

  const examples: BearingExample[] = [
    { label: 'Due North', angle: 0 },
    { label: 'Northeast', angle: 45 },
    { label: 'Due East', angle: 90 },
    { label: 'Due South', angle: 180 },
    { label: 'Due West', angle: 270 },
  ];

  // Handle animation when example or custom angle changes
  useEffect(() => {
    setIsAnimating(true);
    setSweepAngle(0);
    const targetAngle = parseInt(bearingAngle) || examples[currentExample].angle;
    const duration = 1500; // 1.5 seconds for animation
    const steps = 60;
    const angleIncrement = targetAngle / steps;

    let step = 0;
    const sweepInterval = setInterval(() => {
      step++;
      setSweepAngle(angleIncrement * step);
      if (step >= steps) {
        clearInterval(sweepInterval);
        setIsAnimating(false);
      }
    }, duration / steps);

    return () => clearInterval(sweepInterval);
  }, [currentExample, bearingAngle]);

  // Calculate back bearing
  const calculateBackBearing = (angle: number): number => {
    if (angle < 180) return angle + 180;
    return angle - 180;
  };

  // SVG compass setup
  const svgSize = Math.min(window.innerWidth * 0.8, 250); // Responsive for mobile
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const radius = svgSize * 0.4;

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const currentAngle = parseInt(bearingAngle) || examples[currentExample].angle;
  const backBearing = calculateBackBearing(currentAngle);

  return (
    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-100 font-sans">
      <h1 className="text-xl font-bold text-gray-800 mb-2 text-center">
        Three-Figure Bearings
      </h1>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Learn how bearings are measured clockwise from North (000°–360°)
      </p>

      <div className="flex flex-col gap-4">
        {/* Compass Display */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-base font-semibold mb-3 text-center">
            Compass Visualization
          </h2>
          <div className="flex justify-center mb-3">
            <svg width={svgSize} height={svgSize} className="border rounded-lg bg-gray-50">
              {/* Background circles */}
              <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#e5e7eb" strokeWidth="2" />
              <circle cx={centerX} cy={centerY} r={radius * 0.8} fill="none" stroke="#f3f4f6" strokeWidth="1" />

              {/* Cardinal directions */}
              <text x={centerX} y={centerY - radius - 10} textAnchor="middle" className="text-sm font-bold fill-blue-600">
                N
              </text>
              <text x={centerX + radius + 10} y={centerY + 5} textAnchor="middle" className="text-sm font-bold fill-green-600">
                E
              </text>
              <text x={centerX} y={centerY + radius + 15} textAnchor="middle" className="text-sm font-bold fill-red-600">
                S
              </text>
              <text x={centerX - radius - 10} y={centerY + 5} textAnchor="middle" className="text-sm font-bold fill-purple-600">
                W
              </text>

              {/* North reference line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={centerX}
                y2={centerY - radius}
                stroke="#94a3b8"
                strokeWidth="2"
                strokeDasharray="8,4"
              />

              {/* Bearing line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={polarToCartesian(centerX, centerY, radius, isAnimating ? sweepAngle : currentAngle).x}
                y2={polarToCartesian(centerX, centerY, radius, isAnimating ? sweepAngle : currentAngle).y}
                stroke="#dc2626"
                strokeWidth="3"
                markerEnd="url(#arrowhead)"
              />

              {/* Back bearing line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={polarToCartesian(centerX, centerY, radius, backBearing).x}
                y2={polarToCartesian(centerX, centerY, radius, backBearing).y}
                stroke="#059669"
                strokeWidth="3"
                strokeDasharray="4,4"
                markerEnd="url(#back-arrowhead)"
              />

              {/* Bearing label */}
              <text x={centerX} y={centerY - 8} textAnchor="middle" className="text-lg font-bold fill-red-600">
                {currentAngle.toString().padStart(3, '0')}°
              </text>
              <text x={centerX} y={centerY + 12} textAnchor="middle" className="text-xs fill-gray-600">
                Bearing
              </text>

              {/* Back bearing label */}
              <text x={centerX} y={centerY + 30} textAnchor="middle" className="text-lg font-bold fill-green-600">
                {backBearing.toString().padStart(3, '0')}°
              </text>
              <text x={centerX} y={centerY + 50} textAnchor="middle" className="text-xs fill-gray-600">
                Back Bearing
              </text>

              {/* Arrow markers */}
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
                </marker>
                <marker id="back-arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#059669" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Example buttons */}
          <div className="overflow-x-auto pb-2 mb-3">
            <div className="flex gap-2 w-max">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentExample(index);
                    setBearingAngle(example.angle.toString());
                  }}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors flex-shrink-0 ${
                    currentExample === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {example.label} ({example.angle.toString().padStart(3, '0')}°)
                </button>
              ))}
            </div>
          </div>

          {/* Custom angle input */}
          <div className="mb-3">
            <label className="block text-xs font-medium mb-1 text-gray-700">
              Enter Bearing (0°–360°)
            </label>
            <input
              type="number"
              min="0"
              max="360"
              value={bearingAngle}
              onChange={(e) => setBearingAngle(e.target.value)}
              className="w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter angle (e.g., 065)"
            />
          </div>

          <div className="text-center text-xs text-gray-600">
            {isAnimating ? (
              <span className="text-blue-600 font-semibold">🔄 Animating...</span>
            ) : (
              <span>✅ Select or enter a bearing to visualize</span>
            )}
          </div>
        </div>


      </div>
    </div>
  );
};

export default ThreeFigureBearings;