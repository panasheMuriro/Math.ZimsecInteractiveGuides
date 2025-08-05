/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from "react";

// --- New Color Palette ---
const PALETTE = {
  charcoal: "#001219",
  darkTeal: "#005f73",
  teal: "#0a9396",
  lightTeal: "#94d2bd",
  lightGold: "#e9d8a6",
  orange: "#ee9b00",
  darkOrange: "#ca6702",
  burntOrange: "#bb3e03",
  red: "#ae2012",
  darkRed: "#9b2226",
};

// --- Neubrutalism Styles ---
const neubrutalismBase = {
  border: `3px solid ${PALETTE.charcoal}`,
  borderRadius: '8px',
  boxShadow: `4px 4px 0px ${PALETTE.charcoal}9d`,
  transition: 'all 0.2s',
};

const getButtonStyle = (isActive: boolean) => {
  return {
    ...neubrutalismBase,
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    backgroundColor: isActive ? PALETTE.orange : PALETTE.lightGold,
    color: PALETTE.charcoal,
    cursor: 'pointer',
    border: `3px solid ${PALETTE.charcoal}`,
    boxShadow: `3px 3px 0px ${PALETTE.charcoal}9d`,
    ':hover': {
      backgroundColor: isActive ? PALETTE.orange : PALETTE.lightTeal,
      boxShadow: `2px 2px 0px ${PALETTE.charcoal}`,
      transform: 'translate(1px, 1px)',
    }
  };
};

const getStepButtonStyle = (isDisabled: boolean) => {
  return {
    ...neubrutalismBase,
    padding: '0.75rem 1.5rem',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    backgroundColor: isDisabled ? PALETTE.lightTeal : PALETTE.orange,
    color: PALETTE.charcoal,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.7 : 1,
    ':hover': {
      backgroundColor: PALETTE.orange,
      boxShadow: `2px 2px 0px ${PALETTE.charcoal}`,
      transform: 'translate(1px, 1px)',
    }
  };
};

const getInfoBoxStyle = () => {
  return {
    ...neubrutalismBase,
    backgroundColor: PALETTE.lightGold,
    borderColor: PALETTE.charcoal,
    padding: '1rem',
    width: '100%',
    color: PALETTE.charcoal,
    boxShadow: `4px 4px 0px ${PALETTE.charcoal}9d`,
  };
};

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
  const renderShape = (
    rotation: number = 0,
    isOriginal: boolean = true,
    center: { x: number; y: number },
    size: number,
    sides: number
  ) => {
    const vertices = getPolygonVertices(center, sides, size);
    const pathData = getPathData(vertices);
    return (
      <path
        d={pathData}
        stroke={isOriginal ? PALETTE.charcoal : PALETTE.darkTeal}
        strokeWidth={isOriginal ? "2" : "1"}
        fill="none"
        strokeDasharray={isOriginal ? "none" : "5"}
        style={{
          transformOrigin: `${center.x}px ${center.y}px`,
          transition: 'transform 0.5s ease-in-out',
          transform: `rotate(${rotation}deg)`
        }}
      />
    );
  };

  // Render the visualization based on the current step
  const renderVisualization = () => {
    const { center, order, angle, sides, size } = shapes[shape];
    const elements: any[] = [];
    const currentRotation = step * angle;

    // Draw the main, rotating shape
    elements.push(renderShape(currentRotation, true, center, size, sides));

    // Draw the static, faded shapes if they are part of the symmetric positions
    if (step >= 1) {
      for (let i = 1; i <= order - 1; i++) {
        // Only render faded shapes if the current step is showing a rotation
        if (i <= step) {
          elements.push(
            <path
              key={`faded-${i}`}
              d={getPathData(getPolygonVertices(center, sides, size))}
              stroke={PALETTE.darkTeal}
              strokeWidth="1"
              fill="none"
              strokeDasharray="5"
              transform={`rotate(${i * angle}, ${center.x}, ${center.y})`}
            />
          );
        }
      }
    }

    // Final step: Show a marked vertex and its rotated positions
    if (step === shapes[shape].steps.length - 1) {
      const vertices = getPolygonVertices(center, sides, size);
      const vertex = vertices[0]; // Top vertex
      for (let i = 0; i < order; i++) {
        const angleRad = (i * angle * Math.PI) / 180;
        const rotatedVertex = {
          x: center.x + (vertex.x - center.x) * Math.cos(angleRad) - (vertex.y - center.y) * Math.sin(angleRad),
          y: center.y + (vertex.x - center.x) * Math.sin(angleRad) + (vertex.y - center.y) * Math.cos(angleRad)
        };
        elements.push(<circle key={`vertex-${i}`} cx={rotatedVertex.x} cy={rotatedVertex.y} r="4" fill={PALETTE.red} />);
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
    <div style={{ ...neubrutalismBase, maxWidth: '600px', width: '100%', margin: '2rem auto', padding: '1.5rem', backgroundColor: PALETTE.teal, borderRadius: '20px', boxShadow: `8px 8px 0px ${PALETTE.charcoal}` }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', textAlign: 'center', color: PALETTE.charcoal }}>
        Rotational Symmetry Visualizer
      </h3>
      <p style={{ fontSize: '0.875rem', color: PALETTE.charcoal, marginBottom: '1rem', textAlign: 'center' }}>
        Select a shape and step through to see its rotational symmetry.
      </p>

      {/* Shape Selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {[
          { id: "equilateral-triangle", label: "Equilateral Triangle" },
          { id: "square", label: "Square" }
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleShapeChange(id as any)}
            style={getButtonStyle(shape === id)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Visualization */}
      <div style={{ ...neubrutalismBase, backgroundColor: PALETTE.lightTeal, display: 'flex', justifyContent: 'center', borderRadius: '8px', padding: '1rem' }}>
        <svg width="100%" height="200" viewBox="0 0 300 200" style={{ maxWidth: '100%' }}>
          {renderVisualization() as ReactNode}
        </svg>
      </div>

      {/* Step Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <button
          onClick={handlePrevStep}
          disabled={step === 0}
          style={getStepButtonStyle(step === 0)}
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          disabled={step === shapes[shape].steps.length - 1}
          style={getStepButtonStyle(step === shapes[shape].steps.length - 1)}
        >
          Next
        </button>
      </div>

      {/* Feedback */}
      <div style={{ ...getInfoBoxStyle(), marginTop: '1rem', padding: '1rem' }}>
        <p style={{ fontSize: '0.875rem', color: PALETTE.charcoal }}>
          <strong style={{ fontWeight: 'bold' }}>Step {step + 1}:</strong> {shapes[shape].steps[step]}
        </p>
        <p style={{ fontSize: '0.875rem', color: PALETTE.charcoal, marginTop: '0.5rem' }}>
          This shape has rotational symmetry of order <strong style={{ fontWeight: 'bold' }}>{shapes[shape].order}</strong> with an angle of rotation of <strong style={{ fontWeight: 'bold' }}>{shapes[shape].angle}°</strong>.
        </p>
      </div>
    </div>
  );
};

export default RotationalSymmetry;
