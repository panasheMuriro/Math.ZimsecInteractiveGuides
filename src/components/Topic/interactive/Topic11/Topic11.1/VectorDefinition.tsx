/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Navigation } from 'lucide-react';

// --- Neubrutalism Styles & Colors ---
const NEUBRUTALISM_COLORS = {
  cream: '#f4f1de',      // Background, Cards
  orange: '#e07a5f',     // Main background, Accents
  slate: '#3d405b',      // Text, Lines, Borders
  teal: '#81b29a',       // Highlights
  yellow: '#f2cc8f',     // Accents
  white: '#ffffff',
  shadow: 'rgba(61, 64, 91, 0.3)', // slate with opacity for shadow
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.slate}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
  padding: '1rem',
};
// --- End Neubrutalism Styles ---

const VectorDefinition = () => {
  const [magnitude, setMagnitude] = useState(50);
  const [angle, setAngle] = useState(45);

  const handleMagnitudeChange = (e: { target: { value: any; }; }) => {
    setMagnitude(Number(e.target.value));
  };

  const handleAngleChange = (e: { target: { value: any; }; }) => {
    setAngle(Number(e.target.value));
  };

  // Calculate vector components (y is inverted for SVG)
  const vectorX = magnitude * Math.cos((angle * Math.PI) / 180);
  const vectorY = magnitude * Math.sin((angle * Math.PI) / 180);

  return (
    <div
      style={{
        ...neubrutalismBase,
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        padding: '1.5rem',
        backgroundColor: NEUBRUTALISM_COLORS.orange,
        color: NEUBRUTALISM_COLORS.slate,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.slate}`,
      }}
    >
      <h1 className="text-2xl font-bold text-center mb-4 flex items-center justify-center text-white mt-3">
        <Navigation className="w-6 h-6 mr-2 " /> Vector Definition
      </h1>

      {/* Scalar vs Vector Section */}
      <section
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.cream,
          borderColor: NEUBRUTALISM_COLORS.slate,
          marginBottom: '1.5rem',
        }}
      >
        <h2 className="text-lg font-semibold mb-2" style={{ color: NEUBRUTALISM_COLORS.slate }}>
          Vectors vs Scalars
        </h2>
        <ul className="text-sm list-disc pl-5">
          <li><strong>Scalars</strong>: Have magnitude only (e.g., distance, speed).</li>
          <li><strong>Vectors</strong>: Have magnitude and direction (e.g., displacement, velocity).</li>
        </ul>
      </section>

      {/* Interactive Visualization Section */}
      <section
        style={{
          ...neubrutalismBase,
          backgroundColor: NEUBRUTALISM_COLORS.cream,
          borderColor: NEUBRUTALISM_COLORS.slate,
        }}
      >
        <h2 className="text-lg font-semibold mb-2" style={{ color: NEUBRUTALISM_COLORS.slate }}>
          Interactive Vector
        </h2>
        <div className="flex flex-col items-center">
          {/* SVG for vector visualization */}
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.white,
              borderColor: NEUBRUTALISM_COLORS.slate,
              padding: '1rem',
              marginBottom: '1rem',
            }}
          >
            <svg width="200" height="200" className="bg-white">
              {/* Coordinate Axes */}
              <line x1="100" y1="100" x2="100" y2="0" stroke={NEUBRUTALISM_COLORS.slate} strokeWidth="2" />
              <line x1="100" y1="100" x2="200" y2="100" stroke={NEUBRUTALISM_COLORS.slate} strokeWidth="2" />

              {/* The dynamic vector */}
              <line
                x1="100"
                y1="100"
                x2={100 + vectorX}
                y2={100 - vectorY}
                stroke={NEUBRUTALISM_COLORS.orange}
                strokeWidth="3"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill={NEUBRUTALISM_COLORS.orange} />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Controls */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.slate }}>
              Magnitude: {magnitude}
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={magnitude}
              onChange={handleMagnitudeChange}
              className="w-full mb-4"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.teal,
                outline: 'none',
                borderRadius: '4px',
              }}
            />
            <label className="block text-sm font-medium mb-1" style={{ color: NEUBRUTALISM_COLORS.slate }}>
              Angle (degrees): {angle}
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={angle}
              onChange={handleAngleChange}
              className="w-full"
              style={{
                WebkitAppearance: 'none',
                height: '8px',
                background: NEUBRUTALISM_COLORS.teal,
                outline: 'none',
                borderRadius: '4px',
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VectorDefinition;
