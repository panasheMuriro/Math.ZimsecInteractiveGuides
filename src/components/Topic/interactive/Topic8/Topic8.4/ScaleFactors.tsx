import React, { useState } from "react";

const ScaleFactors: React.FC = () => {
  const [scaleFactor, setScaleFactor] = useState<number>(1);
  const [inputValue, setInputValue] = useState<string>("1");

  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      setScaleFactor(numValue);
    } else {
      setScaleFactor(1);
    }
  };

  const areaScaleFactor = (scaleFactor ** 2).toFixed(2);
  const volumeScaleFactor = (scaleFactor ** 3).toFixed(2);

  // Isometric cube points (base cube with side length 50)
  const cubePoints = {
    front: [
      { x: 0, y: 0 }, // Bottom-left
      { x: 50, y: 0 }, // Bottom-right
      { x: 50, y: -50 }, // Top-right
      { x: 0, y: -50 }, // Top-left
    ],
    back: [
      { x: -20, y: 20 }, // Bottom-left (offset for isometric)
      { x: 30, y: 20 }, // Bottom-right
      { x: 30, y: -30 }, // Top-right
      { x: -20, y: -30 }, // Top-left
    ],
  };

  // Function to scale and transform points for isometric cube
  const getScaledCubePoints = (scale: number, isOriginal: boolean) => {
    const offsetX = isOriginal ? 0 : 50 * (1 - scale) / 2;
    const offsetY = isOriginal ? 0 : 50 * (1 - scale) / 2;
    return {
      front: cubePoints.front.map(p => ({
        x: p.x * scale + offsetX + (isOriginal ? 0 : 50),
        y: p.y * scale + offsetY + (isOriginal ? 0 : 50),
      })),
      back: cubePoints.back.map(p => ({
        x: p.x * scale + offsetX + (isOriginal ? 0 : 50),
        y: p.y * scale + offsetY + (isOriginal ? 0 : 50),
      })),
    };
  };

  const originalCube = getScaledCubePoints(1, true);
  const scaledCube = getScaledCubePoints(scaleFactor, false);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
        Scale Factor Visualizer
      </h3>
     
      {/* Visualization */}
      <div className="flex flex-col items-center gap-6">
        {/* 2D Square for Length and Area */}
        <div className="w-full">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Length & Area Scaling</h4>
          <div className="flex justify-center items-center gap-4">
            <div className="relative w-24 h-24">
              {/* Original Square */}
              <div
                className="absolute border-2 border-blue-500"
                style={{ width: "50px", height: "50px" }}
              ></div>
              {/* Scaled Square */}
              <div
                className="absolute border-2 border-red-500 transition-transform duration-300"
                style={{
                  width: `${50 * scaleFactor}px`,
                  height: `${50 * scaleFactor}px`,
                  transform: `translate(${(50 * (1 - scaleFactor)) / 2}px, ${(50 * (1 - scaleFactor)) / 2}px)`,
                  opacity: 0.7,
                }}
              ></div>
            </div>
            <div className="text-sm text-gray-600">
              <p>Length: ×{scaleFactor.toFixed(2)}</p>
              <p>Area: ×{areaScaleFactor}</p>
            </div>
          </div>
        </div>

        {/* Isometric Cube for Volume */}
        <div className="w-full">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Volume Scaling</h4>
          <div className="flex justify-center items-center gap-4">
            <div className="relative w-32 h-32">
              {/* Original Cube */}
              <svg width="100" height="100" viewBox="-30 -60 200 200" className="absolute">
                {/* Back face */}
                <polygon
                  points={originalCube.back.map(p => `${p.x},${p.y}`).join(" ")}
                  fill="none"
                  stroke="blue"
                  strokeWidth="2"
                />
                {/* Front face */}
                <polygon
                  points={originalCube.front.map(p => `${p.x},${p.y}`).join(" ")}
                  fill="none"
                  stroke="blue"
                  strokeWidth="2"
                />
                {/* Connecting edges */}
                <line x1={originalCube.back[0].x} y1={originalCube.back[0].y} x2={originalCube.front[0].x} y2={originalCube.front[0].y} stroke="blue" strokeWidth="2" />
                <line x1={originalCube.back[1].x} y1={originalCube.back[1].y} x2={originalCube.front[1].x} y2={originalCube.front[1].y} stroke="blue" strokeWidth="2" />
                <line x1={originalCube.back[2].x} y1={originalCube.back[2].y} x2={originalCube.front[2].x} y2={originalCube.front[2].y} stroke="blue" strokeWidth="2" />
                <line x1={originalCube.back[3].x} y1={originalCube.back[3].y} x2={originalCube.front[3].x} y2={originalCube.front[3].y} stroke="blue" strokeWidth="2" />
              </svg>
              {/* Scaled Cube */}
              <svg
                width={`${100 * scaleFactor}`}
                height={`${100 * scaleFactor}`}
                viewBox="-10 -50 100 100"
                className="absolute transition-transform duration-300"
                style={{
                  transform: `translate(${(100 * (1 - scaleFactor)) / 2}px, ${(100 * (1 - scaleFactor)) / 2}px)`,
                  opacity: 0.7,
                }}
              >
                {/* Back face */}
                <polygon
                  points={scaledCube.back.map(p => `${p.x},${p.y}`).join(" ")}
                  fill="none"
                  stroke="red"
                  strokeWidth="2"
                />
                {/* Front face */}
                <polygon
                  points={scaledCube.front.map(p => `${p.x},${p.y}`).join(" ")}
                  fill="none"
                  stroke="red"
                  strokeWidth="2"
                />
                {/* Connecting edges */}
                <line x1={scaledCube.back[0].x} y1={scaledCube.back[0].y} x2={scaledCube.front[0].x} y2={scaledCube.front[0].y} stroke="red" strokeWidth="2" />
                <line x1={scaledCube.back[0].x} y1={scaledCube.back[1].y} x2={scaledCube.front[1].x} y2={scaledCube.front[1].y} stroke="red" strokeWidth="2" />
                <line x1={scaledCube.back[2].x} y1={scaledCube.back[2].y} x2={scaledCube.front[2].x} y2={scaledCube.front[2].y} stroke="red" strokeWidth="2" />
                <line x1={scaledCube.back[3].x} y1={scaledCube.back[3].y} x2={scaledCube.front[3].x} y2={scaledCube.front[3].y} stroke="red" strokeWidth="2" />
              </svg>
            </div>
            <div className="text-sm text-gray-600">
              <p>Volume: ×{volumeScaleFactor}</p>
            </div>
          </div>
        </div>
      </div>


       <p className="text-sm text-gray-600 mb-4 text-center">
        Enter a linear scale factor (k) to see its effect on length, area, and volume.
      </p>

      {/* Scale Factor Input */}
      <div className="mb-6">
        <label htmlFor="scaleFactor" className="block text-sm font-medium text-gray-700 mb-2">
          Linear Scale Factor (k): {scaleFactor.toFixed(2)}
        </label>
        <input
          type="number"
          id="scaleFactor"
          min="0.1"
          step="0.1"
          value={inputValue}
          onChange={handleScaleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter scale factor (e.g., 1.5)"
        />
      </div>



      {/* Feedback */}
      <div className="text-sm text-gray-600 mt-6">
        <p>
          <strong>Linear Scale Factor:</strong> k = {scaleFactor.toFixed(2)}
        </p>
        <p>
          <strong>Area Scale Factor:</strong> k² = {areaScaleFactor}
        </p>
        <p>
          <strong>Volume Scale Factor:</strong> k³ = {volumeScaleFactor}
        </p>
        <p className="mt-2">
          Adjust the scale factor to see how lengths, areas, and volumes change. For example, if k = 1.5, areas scale by 1.5² = 2.25, and volumes by 1.5³ = 3.375.
        </p>
      </div>
    </div>
  );
};

export default ScaleFactors;