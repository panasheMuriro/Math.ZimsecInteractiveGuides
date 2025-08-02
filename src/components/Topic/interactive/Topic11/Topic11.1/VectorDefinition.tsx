/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import {  Navigation } from 'lucide-react';

const VectorDefinition = () => {
  const [magnitude, setMagnitude] = useState(50);
  const [angle, setAngle] = useState(45);

  const handleMagnitudeChange = (e: { target: { value: any; }; }) => {
    setMagnitude(Number(e.target.value));
  };

  const handleAngleChange = (e: { target: { value: any; }; }) => {
    setAngle(Number(e.target.value));
  };

  const vectorX = magnitude * Math.cos((angle * Math.PI) / 180);
  const vectorY = magnitude * Math.sin((angle * Math.PI) / 180);

  return (
    <div className="max-w-md mx-auto p-4 bg-gradient-to-br from-[#4DA1A9] to-[#2E5077] font-sans rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4 flex items-center justify-center text-white mt-3">
        <Navigation className="w-6 h-6 mr-2 " /> Vector Definition
      </h1>
      {/* Scalar vs Vector */}
      <section className="mb-6 bg-white/20 text-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Vectors vs Scalars</h2>
        <ul className="text-sm  list-disc pl-5">
          <li><strong>Scalars</strong>: Have magnitude only (e.g., distance, speed).</li>
          <li><strong>Vectors</strong>: Have magnitude and direction (e.g., displacement, velocity).</li>
        </ul>
      </section>
      {/* Interactive Visualization */}
      <section className="mb-6 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Interactive Vector</h2>
        <div className="flex flex-col items-center">
          <svg width="200" height="200" className="mb-4">
            <line x1="100" y1="100" x2="100" y2="0" stroke="black" strokeWidth="2" />
            <line x1="100" y1="100" x2="200" y2="100" stroke="black" strokeWidth="2" />
            <line
              x1="100"
              y1="100"
              x2={100 + vectorX}
              y2={100 - vectorY}
              stroke="blue"
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
                <polygon points="0 0, 10 3.5, 0 7" fill="blue" />
              </marker>
            </defs>
          </svg>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Magnitude: {magnitude}
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={magnitude}
              onChange={handleMagnitudeChange}
              className="w-full mb-4"
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Angle (degrees): {angle}
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={angle}
              onChange={handleAngleChange}
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VectorDefinition;