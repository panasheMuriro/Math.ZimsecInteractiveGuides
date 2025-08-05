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

  // --- Neubrutalism Styles & Colors (Aligned with Cardinal Bearings) ---
  const NEUBRUTALISM_COLORS = {
    blue: '#0081a7',       // Primary - Cardinal, Background Accents
    teal: '#00afb9',       // Secondary - Intercardinal, Background
    cream: '#fdfcdc',      // Background, Cards
    orange: '#fed9b7',     // Accents, Half-wind, Highlights
    red: '#f07167',        // Accents, Selected, Reset Button (Bearing Line)
    green: '#38b000',      // Back Bearing
    white: '#ffffff',
    slate: '#334155',      // Text, Lines, Center Dot
    shadow: 'rgba(0, 0, 0, 0.2)', // Shadows
  };

  const neubrutalismBase = {
    border: `3px solid ${NEUBRUTALISM_COLORS.slate}`,
    borderRadius: '12px',
    boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
    padding: '1rem',
  };
  // --- End Neubrutalism Styles ---

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

  // --- Button Styling Helper (Aligned with Cardinal Bearings) ---
  const getButtonStyle = (index: number) => {
    const isActive = currentExample === index;
    return {
      ...neubrutalismBase,
      padding: '0.5rem 1rem',
      fontSize: '0.875rem', // text-sm
      fontWeight: 'bold',
      backgroundColor: isActive ? NEUBRUTALISM_COLORS.teal : NEUBRUTALISM_COLORS.cream,
      color: isActive ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.slate,
      borderColor: NEUBRUTALISM_COLORS.slate,
      cursor: 'pointer',
      transition: 'all 0.2s',
      // Add hover effect inline
      ...(isActive ? {} : { // No hover change for active buttons
        ':hover': {
          backgroundColor: NEUBRUTALISM_COLORS.orange,
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
        backgroundColor: NEUBRUTALISM_COLORS.teal, // Teal background
        borderColor: NEUBRUTALISM_COLORS.slate,
        color: NEUBRUTALISM_COLORS.slate,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.slate}`,
      }}
    >
      <div className="mb-4 mt-3 text-white">
        <h1 className="text-xl font-bold mb-1 text-center">
          Three-Figure Bearings
        </h1>
        <p className="text-sm text-center">
          Learn how bearings are measured clockwise from North (000°–360°)
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Compass Display */}
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
            Compass Visualization
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
              {/* Background circles */}
              <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke={NEUBRUTALISM_COLORS.slate} strokeWidth="2" />
              <circle cx={centerX} cy={centerY} r={radius * 0.8} fill="none" stroke="#f3f4f6" strokeWidth="1" />

              {/* Cardinal directions */}
              <text
                x={centerX}
                y={centerY - radius - 10}
                textAnchor="middle"
                className="text-sm font-bold"
                style={{ fill: NEUBRUTALISM_COLORS.blue }}
              >
                N
              </text>
              <text
                x={centerX + radius + 10}
                y={centerY + 5}
                textAnchor="middle"
                className="text-sm font-bold"
                style={{ fill: NEUBRUTALISM_COLORS.teal }}
              >
                E
              </text>
              <text
                x={centerX}
                y={centerY + radius + 15}
                textAnchor="middle"
                className="text-sm font-bold"
                style={{ fill: NEUBRUTALISM_COLORS.red }}
              >
                S
              </text>
              <text
                x={centerX - radius - 10}
                y={centerY + 5}
                textAnchor="middle"
                className="text-sm font-bold"
                style={{ fill: '#8B5CF6' }} // Keeping purple for W from previous version
              >
                W
              </text>

              {/* North reference line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={centerX}
                y2={centerY - radius}
                stroke={NEUBRUTALISM_COLORS.slate}
                strokeWidth="2"
                strokeDasharray="8,4"
              />

              {/* Bearing line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={polarToCartesian(centerX, centerY, radius, isAnimating ? sweepAngle : currentAngle).x}
                y2={polarToCartesian(centerX, centerY, radius, isAnimating ? sweepAngle : currentAngle).y}
                stroke={NEUBRUTALISM_COLORS.red}
                strokeWidth="3"
                markerEnd="url(#arrowhead)"
              />

              {/* Back bearing line */}
              <line
                x1={centerX}
                y1={centerY}
                x2={polarToCartesian(centerX, centerY, radius, backBearing).x}
                y2={polarToCartesian(centerX, centerY, radius, backBearing).y}
                stroke={NEUBRUTALISM_COLORS.green}
                strokeWidth="3"
                strokeDasharray="4,4"
                markerEnd="url(#back-arrowhead)"
              />

              {/* Bearing label */}
              <text x={centerX} y={centerY - 8} textAnchor="middle" className="text-lg font-bold" style={{ fill: NEUBRUTALISM_COLORS.red }}>
                {currentAngle.toString().padStart(3, '0')}°
              </text>
              <text x={centerX} y={centerY + 12} textAnchor="middle" className="text-xs" style={{ fill: NEUBRUTALISM_COLORS.slate }}>
                Bearing
              </text>

              {/* Back bearing label */}
              <text x={centerX} y={centerY + 30} textAnchor="middle" className="text-lg font-bold" style={{ fill: NEUBRUTALISM_COLORS.green }}>
                {backBearing.toString().padStart(3, '0')}°
              </text>
              <text x={centerX} y={centerY + 50} textAnchor="middle" className="text-xs" style={{ fill: NEUBRUTALISM_COLORS.slate }}>
                Back Bearing
              </text>

              {/* Arrow markers */}
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill={NEUBRUTALISM_COLORS.red} />
                </marker>
                <marker id="back-arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill={NEUBRUTALISM_COLORS.green} />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Example buttons */}
          <div className="pb-2 mb-3">
            <div className="flex gap-2 flex-wrap w-full justify-center">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentExample(index);
                    setBearingAngle(example.angle.toString());
                  }}
                  style={getButtonStyle(index)}
                  onMouseEnter={(e) => {
                    if (currentExample !== index)
                      e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.orange;
                  }}
                  onMouseLeave={(e) => {
                    if (currentExample !== index)
                      e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.cream;
                  }}
                >
                  {example.label} ({example.angle.toString().padStart(3, '0')}°)
                </button>
              ))}
            </div>
          </div>

          {/* Custom angle input */}
          <div className="mb-3">
            <label
              className="block text-sm font-bold mb-1"
              style={{ color: NEUBRUTALISM_COLORS.slate }}
            >
              Enter Bearing (0°–360°)
            </label>
            <input
              type="number"
              min="0"
              max="360"
              value={bearingAngle}
              onChange={(e) => setBearingAngle(e.target.value)}
              style={{
                ...neubrutalismBase,
                width: '100%',
                padding: '0.5rem',
                fontSize: '0.875rem',
                color: NEUBRUTALISM_COLORS.slate,
                backgroundColor: NEUBRUTALISM_COLORS.white,
                borderColor: NEUBRUTALISM_COLORS.teal,
              }}
              placeholder="Enter angle (e.g., 065)"
            />
          </div>

          <div
            className="text-center text-xs"
            style={{ color: NEUBRUTALISM_COLORS.slate, fontWeight: '600' }}
          >
            {isAnimating ? (
              <span style={{ color: NEUBRUTALISM_COLORS.blue }}>🔄 Animating...</span>
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