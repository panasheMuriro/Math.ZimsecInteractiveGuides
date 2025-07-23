/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from "react";

const RotationalSymmetry: React.FC = () => {
  const [shape, setShape] = useState<"equilateral-triangle" | "square">("equilateral-triangle");
  const [step, setStep] = useState<number>(0);

  const shapes: {
    [key: string]: {
      steps: string[];
      order: number;
      angle: number;
      center: { x: number; y: number };
      size: number;
      sides: number;
    };
  } = {
    "equilateral-triangle": {
      steps: [
        "Draw an equilateral triangle.",
        "Rotate the triangle by 120°.",
        "Rotate the triangle by 240°.",
        "Show all symmetric positions with a marked vertex."
      ],
      order: 3,
      angle: 120,
      center: { x: 150, y: 100 },
      size: 50,
      sides: 3
    },
    square: {
      steps: [
        "Draw a square.",
        "Rotate the square by 90°.",
        "Rotate the square by 180°.",
        "Rotate the square by 270° and mark a vertex."
      ],
      order: 4,
      angle: 90,
      center: { x: 150, y: 100 },
      size: 50,
      sides: 4
    }
  };

  // Helper function to calculate vertices of a regular polygon
  const getPolygonVertices = (center: { x: number; y: number }, sides: number, radius: number) => {
    const vertices: { x: number; y: number }[] = [];
    for (let i = 0; i < sides; i++) {
      const angle = (i * 360) / sides - 90; // Start at top (90° offset)
      vertices.push({
        x: center.x + radius * Math.cos((angle * Math.PI) / 180),
        y: center.y + radius * Math.sin((angle * Math.PI) / 180)
      });
    }
    return vertices;
  };

  // Helper function to generate SVG path data for a polygon
  const getPathData = (vertices: { x: number; y: number }[]) => {
    return `M${vertices[0].x},${vertices[0].y} ${vertices
      .slice(1)
      .map((v) => `L${v.x},${v.y}`)
      .join(" ")} Z`;
  };

  // Render the shape with optional rotation
  const renderShape = (rotation: number = 0, isOriginal: boolean = true, center: { x: number; y: number }, size: number, sides: number) => {
    const vertices = getPolygonVertices(center, sides, size);
    const pathData = getPathData(vertices);
    return (
      <path
        d={pathData}
        stroke={isOriginal ? "black" : "gray"}
        strokeWidth={isOriginal ? "2" : "1"}
        fill="none"
        strokeDasharray={isOriginal ? "none" : "5"}
        transform={rotation ? `rotate(${rotation}, ${center.x}, ${center.y})` : undefined}
      />
    );
  };

  // Render the visualization based on the current step
  const renderVisualization = () => {
    const { center, order, angle, sides, size } = shapes[shape];
    const elements:any[] = [];

    // Step 0: Original shape
    if (step >= 0) {
      elements.push(renderShape(0, true, center, size, sides));
    }

    // Steps 1 to order-1: Show rotated shapes
    if (step >= 1) {
      for (let i = 1; i <= Math.min(step, order - 1); i++) {
        elements.push(renderShape(i * angle, false, center, size, sides));
      }
    }

    // Final step: Show a marked vertex and its rotated positions
    if (step === order) {
      const vertices = getPolygonVertices(center, sides, size);
      const vertex = vertices[0]; // Top vertex
      for (let i = 0; i < order; i++) {
        const angleRad = (i * angle * Math.PI) / 180;
        const rotatedVertex = {
          x: center.x + (vertex.x - center.x) * Math.cos(angleRad) - (vertex.y - center.y) * Math.sin(angleRad),
          y: center.y + (vertex.x - center.x) * Math.sin(angleRad) + (vertex.y - center.y) * Math.cos(angleRad)
        };
        elements.push(<circle key={`vertex-${i}`} cx={rotatedVertex.x} cy={rotatedVertex.y} r="3" fill="blue" />);
      }
    }

    return elements;
  };

  const handleShapeChange = (newShape: "equilateral-triangle" | "square") => {
    setShape(newShape);
    setStep(0);
  };

  const handleNextStep = () => {
    if (step < shapes[shape].steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
        Rotational Symmetry Visualizer
      </h3>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Select a shape and step through to see its rotational symmetry.
      </p>

      {/* Shape Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {[
          { id: "equilateral-triangle", label: "Equilateral Triangle" },
          { id: "square", label: "Square" }
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleShapeChange(id as any)}
            className={`px-3 py-1 text-sm font-medium rounded-md ${
              shape === id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Visualization */}
      <div className="flex justify-center">
        <svg width="100%" height="200" viewBox="0 0 300 200" className="max-w-full">
          {renderVisualization() as ReactNode}
        </svg>
      </div>

      {/* Step Navigation */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevStep}
          disabled={step === 0}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            step === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          disabled={step === shapes[shape].steps.length - 1}
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            step === shapes[shape].steps.length - 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>

      {/* Feedback */}
      <div className="text-sm text-gray-600 mt-4">
        <p>
          <strong>Step {step + 1}:</strong> {shapes[shape].steps[step]}
        </p>
        <p className="mt-2">
          This shape has rotational symmetry of order {shapes[shape].order} with an angle of rotation of {shapes[shape].angle}°.
        </p>
      </div>
    </div>
  );
};

export default RotationalSymmetry;