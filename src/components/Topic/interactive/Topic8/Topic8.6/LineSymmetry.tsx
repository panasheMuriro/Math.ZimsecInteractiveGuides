/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from "react";

// --- New Color Palette ---
const PALETTE = {
  pink: "#e63946",
  beige: "#f7e1d7",
  offWhite: "#dedbd2",
  sage: "#b0c4b1",
  charcoal: "#4a5759",
};

// --- Neubrutalism Styles ---
const neubrutalismBase = {
  border: `3px solid ${PALETTE.charcoal}`,
  borderRadius: '8px',
  boxShadow: `4px 4px 0px ${PALETTE.charcoal}`,
  transition: 'all 0.2s',
};

const getButtonStyle = (isActive: boolean) => {
  return {
    ...neubrutalismBase,
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    backgroundColor: isActive ? "#e29578" : PALETTE.offWhite,
    color:isActive ? "#fff": PALETTE.charcoal,
    cursor: 'pointer',
    border: `3px solid ${PALETTE.charcoal}`,
    boxShadow: `3px 3px 0px ${PALETTE.charcoal}`,
    ':hover': {
      backgroundColor: isActive ? PALETTE.sage : PALETTE.beige,
      boxShadow: `2px 2px 0px ${PALETTE.charcoal}`,
      transform: 'translate(1px, 1px)',
    }
  };
};

const getInfoBoxStyle = (variant: 'info' | 'description' = 'info') => {
  return {
    ...neubrutalismBase,
    backgroundColor: variant === 'info' ? PALETTE.sage : PALETTE.offWhite,
    borderColor: PALETTE.charcoal,
    padding: '1rem',
    width: '100%',
    color: PALETTE.charcoal,
    boxShadow: `4px 4px 0px ${PALETTE.charcoal}`,
  };
};

const getStepButtonStyle = (isDisabled: boolean) => {
  return {
    ...neubrutalismBase,
    padding: '0.75rem 1.5rem',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    backgroundColor: isDisabled ? PALETTE.beige : PALETTE.pink,
    color:isDisabled ?  PALETTE.charcoal : "#fff",
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.7 : 1,
    ':hover': {
      backgroundColor: PALETTE.pink,
      boxShadow: `2px 2px 0px ${PALETTE.charcoal}`,
      transform: 'translate(1px, 1px)',
    }
  };
};

// --- Main Component ---
const LineSymmetry: React.FC = () => {
  const [shape, setShape] = useState<
    "equilateral-triangle" | "square" | "pentagon" | "rectangle" | "rhombus" | "isosceles-triangle" | "circle"
  >("equilateral-triangle");
  const [step, setStep] = useState<number>(0);

  const shapes: {
    [key: string]: { steps: string[]; symmetryLines: number; center: { x: number; y: number }; size: number };
  } = {
    "equilateral-triangle": {
      steps: [
        "Draw an equilateral triangle.",
        "Show the first symmetry line through a vertex and opposite side midpoint.",
        "Show the second symmetry line.",
        "Show the third symmetry line and corresponding points."
      ],
      symmetryLines: 3,
      center: { x: 150, y: 100 },
      size: 50
    },
    square: {
      steps: [
        "Draw a square.",
        "Show the vertical symmetry line.",
        "Show the horizontal symmetry line.",
        "Show both diagonal symmetry lines."
      ],
      symmetryLines: 4,
      center: { x: 150, y: 100 },
      size: 50
    },
    pentagon: {
      steps: [
        "Draw a regular pentagon.",
        "Show the first symmetry line through a vertex and opposite side midpoint.",
        "Show the second and third symmetry lines.",
        "Show all five symmetry lines and corresponding points."
      ],
      symmetryLines: 5,
      center: { x: 150, y: 100 },
      size: 50
    },
    rectangle: {
      steps: [
        "Draw a rectangle.",
        "Show the vertical symmetry line.",
        "Show the horizontal symmetry line."
      ],
      symmetryLines: 2,
      center: { x: 150, y: 100 },
      size: 60 // Width, height is 40
    },
    rhombus: {
      steps: [
        "Draw a rhombus.",
        "Show the first diagonal symmetry line.",
        "Show the second diagonal symmetry line."
      ],
      symmetryLines: 2,
      center: { x: 150, y: 100 },
      size: 50
    },
    "isosceles-triangle": {
      steps: [
        "Draw an isosceles triangle.",
        "Show the symmetry line through the vertex and base midpoint."
      ],
      symmetryLines: 1,
      center: { x: 150, y: 100 },
      size: 50
    },
    circle: {
      steps: [
        "Draw a circle.",
        "Show a vertical symmetry line.",
        "Show additional representative symmetry lines."
      ],
      symmetryLines: Infinity,
      center: { x: 150, y: 100 },
      size: 50
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

  // Helper function to calculate reflection point across a symmetry line
  const getReflectionPoint = (
    point: { x: number; y: number },
    lineStart: { x: number; y: number },
    lineEnd: { x: number; y: number }
  ) => {
    const dx = lineEnd.x - lineStart.x;
    const dy = lineEnd.y - lineStart.y;
    const t = ((point.x - lineStart.x) * dx + (point.y - lineStart.y) * dy) / (dx * dx + dy * dy);
    const nearest = {
      x: lineStart.x + t * dx,
      y: lineStart.y + t * dy
    };
    const offset = { x: point.x - nearest.x, y: point.y - nearest.y };
    return {
      x: nearest.x - offset.x,
      y: nearest.y - offset.y
    };
  };

  // Helper function to get symmetry lines for regular polygons
  const getSymmetryLines = (
    center: { x: number; y: number },
    sides: number,
    radius: number,
    step: number
  ) => {
    const lines: { p1: { x: number; y: number }; p2: { x: number; y: number } }[] = [];
    const vertices = getPolygonVertices(center, sides, radius);

    for (let i = 0; i < sides && i <= step; i++) {
      const vertex = vertices[i];
      let p1, p2;

      if (sides % 2 === 1) {
        // For odd-sided polygons, connect vertex to opposite side midpoint
        const oppositeSideIndex = (i + Math.floor(sides / 2)) % sides;
        const nextSideIndex = (oppositeSideIndex + 1) % sides;
        const sideMidpoint = {
          x: (vertices[oppositeSideIndex].x + vertices[nextSideIndex].x) / 2,
          y: (vertices[oppositeSideIndex].y + vertices[nextSideIndex].y) / 2
        };
        p1 = vertex;
        p2 = sideMidpoint;
      } else {
        // For even-sided polygons, connect opposite vertices
        const oppositeVertexIndex = (i + sides / 2) % sides;
        p1 = vertex;
        p2 = vertices[oppositeVertexIndex];
      }

      // Extend lines slightly beyond shape for visibility
      const extendedP1 = {
        x: p1.x + (p1.x - p2.x) * 0.2,
        y: p1.y + (p1.y - p2.y) * 0.2
      };
      const extendedP2 = {
        x: p2.x + (p2.x - p1.x) * 0.2,
        y: p2.y + (p2.y - p1.y) * 0.2
      };
      lines.push({ p1: extendedP1, p2: extendedP2 });
    }

    return lines;
  };

  const renderShape = () => {
    const { center, size } = shapes[shape];
    switch (shape) {
      case "equilateral-triangle": {
        const vertices = getPolygonVertices(center, 3, size);
        const pathData = `M${vertices[0].x},${vertices[0].y} L${vertices[1].x},${vertices[1].y} L${vertices[2].x},${vertices[2].y} Z`;
        return <path d={pathData} stroke={PALETTE.charcoal} strokeWidth="2" fill="none" />;
      }
      case "square": {
        const vertices = getPolygonVertices(center, 4, size);
        const pathData = `M${vertices[0].x},${vertices[0].y} L${vertices[1].x},${vertices[1].y} L${vertices[2].x},${vertices[2].y} L${vertices[3].x},${vertices[3].y} Z`;
        return <path d={pathData} stroke={PALETTE.charcoal} strokeWidth="2" fill="none" />;
      }
      case "pentagon": {
        const vertices = getPolygonVertices(center, 5, size);
        const pathData = `M${vertices[0].x},${vertices[0].y} L${vertices[1].x},${vertices[1].y} L${vertices[2].x},${vertices[2].y} L${vertices[3].x},${vertices[3].y} L${vertices[4].x},${vertices[4].y} Z`;
        return <path d={pathData} stroke={PALETTE.charcoal} strokeWidth="2" fill="none" />;
      }
      case "rectangle":
        return (
          <>
            <line x1={center.x - size} y1={center.y - 20} x2={center.x + size} y2={center.y - 20} stroke={PALETTE.charcoal} strokeWidth="2" />
            <line x1={center.x + size} y1={center.y - 20} x2={center.x + size} y2={center.y + 20} stroke={PALETTE.charcoal} strokeWidth="2" />
            <line x1={center.x + size} y1={center.y + 20} x2={center.x - size} y2={center.y + 20} stroke={PALETTE.charcoal} strokeWidth="2" />
            <line x1={center.x - size} y1={center.y + 20} x2={center.x - size} y2={center.y - 20} stroke={PALETTE.charcoal} strokeWidth="2" />
          </>
        );
      case "rhombus":
        return (
          <>
            <line x1={center.x - size} y1={center.y} x2={center.x} y2={center.y - size} stroke={PALETTE.charcoal} strokeWidth="2" />
            <line x1={center.x} y1={center.y - size} x2={center.x + size} y2={center.y} stroke={PALETTE.charcoal} strokeWidth="2" />
            <line x1={center.x + size} y1={center.y} x2={center.x} y2={center.y + size} stroke={PALETTE.charcoal} strokeWidth="2" />
            <line x1={center.x} y1={center.y + size} x2={center.x - size} y2={center.y} stroke={PALETTE.charcoal} strokeWidth="2" />
          </>
        );
      case "isosceles-triangle":
        return (
          <>
            <line x1={center.x - size} y1={center.y + 50} x2={center.x + size} y2={center.y + 50} stroke={PALETTE.charcoal} strokeWidth="2" />
            <line x1={center.x + size} y1={center.y + 50} x2={center.x} y2={center.y - 50} stroke={PALETTE.charcoal} strokeWidth="2" />
            <line x1={center.x} y1={center.y - 50} x2={center.x - size} y2={center.y + 50} stroke={PALETTE.charcoal} strokeWidth="2" />
          </>
        );
      case "circle":
        return <circle cx={center.x} cy={center.y} r={size} stroke={PALETTE.charcoal} strokeWidth="2" fill="none" />;
      default:
        return null;
    }
  };

  const renderSymmetryLines = () => {
    const { center, size } = shapes[shape];
    const lines: any[] = [];

    if (shape === "equilateral-triangle" && step >= 1) {
      const vertices = getPolygonVertices(center, 3, size);
      const symmetryLinesData = getSymmetryLines(center, 3, size, step - 1);
      symmetryLinesData.forEach(({ p1, p2 }, index) => {
        lines.push(
          <line
            key={index}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke={PALETTE.pink}
            strokeWidth="1"
            strokeDasharray="5"
          />
        );
      });
      if (step >= 3) {
        const point = vertices[0]; // Top vertex
        const reflection = getReflectionPoint(point, symmetryLinesData[0].p1, symmetryLinesData[0].p2);
        lines.push(
          <circle key="point1" cx={point.x} cy={point.y} r="3" fill={PALETTE.pink} />,
          <circle key="point2" cx={reflection.x} cy={reflection.y} r="3" fill={PALETTE.pink} />
        );
      }
    } else if (shape === "square" && step >= 1) {
      if (step >= 1) {
        lines.push(
          <line
            x1={center.x}
            y1={center.y - size}
            x2={center.x}
            y2={center.y + size}
            stroke={PALETTE.pink}
            strokeWidth="1"
            strokeDasharray="5"
          />
        );
      }
      if (step >= 2) {
        lines.push(
          <line
            x1={center.x - size}
            y1={center.y}
            x2={center.x + size}
            y2={center.y}
            stroke={PALETTE.pink}
            strokeWidth="1"
            strokeDasharray="5"
          />
        );
      }
      if (step >= 3) {
        lines.push(
          <line
            x1={center.x - size}
            y1={center.y - size}
            x2={center.x + size}
            y2={center.y + size}
            stroke={PALETTE.pink}
            strokeWidth="1"
            strokeDasharray="5"
          />,
          <line
            x1={center.x - size}
            y1={center.y + size}
            x2={center.x + size}
            y2={center.y - size}
            stroke={PALETTE.pink}
            strokeWidth="1"
            strokeDasharray="5"
          />
        );
        const point = { x: center.x + size, y: center.y - size }; // Top-right corner
        const reflection = getReflectionPoint(point, { x: center.x, y: center.y - size }, { x: center.x, y: center.y + size });
        lines.push(
          <circle key="point1" cx={point.x} cy={point.y} r="3" fill={PALETTE.pink} />,
          <circle key="point2" cx={reflection.x} cy={reflection.y} r="3" fill={PALETTE.pink} />
        );
      }
    } else if (shape === "pentagon" && step >= 1) {
      const vertices = getPolygonVertices(center, 5, size);
      const symmetryLinesData = getSymmetryLines(center, 5, size, step - 1);
      symmetryLinesData.forEach(({ p1, p2 }, index) => {
        lines.push(
          <line
            key={index}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke={PALETTE.pink}
            strokeWidth="1"
            strokeDasharray="5"
          />
        );
      });
      if (step >= 3) {
        const point = vertices[0]; // Top vertex
        const reflection = getReflectionPoint(point, symmetryLinesData[0].p1, symmetryLinesData[0].p2);
        lines.push(
          <circle key="point1" cx={point.x} cy={point.y} r="3" fill={PALETTE.pink} />,
          <circle key="point2" cx={reflection.x} cy={reflection.y} r="3" fill={PALETTE.pink} />
        );
      }
    } else if (shape === "rectangle" && step >= 1) {
      if (step >= 1) {
        lines.push(
          <line
            x1={center.x}
            y1={center.y - 20}
            x2={center.x}
            y2={center.y + 20}
            stroke={PALETTE.pink}
            strokeWidth="1"
            strokeDasharray="5"
          />
        );
      }
      if (step >= 2) {
        lines.push(
          <line
            x1={center.x - size}
            y1={center.y}
            x2={center.x + size}
            y2={center.y}
            stroke={PALETTE.pink}
            strokeWidth="1"
            strokeDasharray="5"
          />
        );
        const point = { x: center.x + size, y: center.y - 20 }; // Top-right corner
        const reflection = getReflectionPoint(point, { x: center.x, y: center.y - 20 }, { x: center.x, y: center.y + 20 });
        lines.push(
          <circle key="point1" cx={point.x} cy={point.y} r="3" fill={PALETTE.pink} />,
          <circle key="point2" cx={reflection.x} cy={reflection.y} r="3" fill={PALETTE.pink} />
        );
      }
    } else if (shape === "rhombus" && step >= 1) {
      if (step >= 1) {
        lines.push(
          <line
            x1={center.x - size}
            y1={center.y}
            x2={center.x + size}
            y2={center.y}
            stroke={PALETTE.pink}
            strokeWidth="1"
            strokeDasharray="5"
          />
        );
      }
      if (step >= 2) {
        lines.push(
          <line
            x1={center.x}
            y1={center.y - size}
            x2={center.x}
            y2={center.y + size}
            stroke={PALETTE.pink}
            strokeWidth="1"
            strokeDasharray="5"
          />
        );
        const point = { x: center.x + size, y: center.y }; // Right vertex
        const reflection = getReflectionPoint(point, { x: center.x - size, y: center.y }, { x: center.x + size, y: center.y });
        lines.push(
          <circle key="point1" cx={point.x} cy={point.y} r="3" fill={PALETTE.pink} />,
          <circle key="point2" cx={reflection.x} cy={reflection.y} r="3" fill={PALETTE.pink} />
        );
      }
    } else if (shape === "isosceles-triangle" && step >= 1) {
      lines.push(
        <line
          x1={center.x}
          y1={center.y - 50}
          x2={center.x}
          y2={center.y + 50}
          stroke={PALETTE.pink}
          strokeWidth="1"
          strokeDasharray="5"
        />
      );
      const point = { x: center.x + size, y: center.y + 50 }; // Right base vertex
      const reflection = getReflectionPoint(point, { x: center.x, y: center.y - 50 }, { x: center.x, y: center.y + 50 });
      lines.push(
        <circle key="point1" cx={point.x} cy={point.y} r="3" fill={PALETTE.pink} />,
        <circle key="point2" cx={reflection.x} cy={reflection.y} r="3" fill={PALETTE.pink} />
      );
    } else if (shape === "circle" && step >= 1) {
      if (step >= 1) {
        lines.push(
          <line
            x1={center.x}
            y1={center.y - size}
            x2={center.x}
            y2={center.y + size}
            stroke={PALETTE.pink}
            strokeWidth="1"
            strokeDasharray="5"
          />
        );
      }
      if (step >= 2) {
        lines.push(
          <line
            x1={center.x - size}
            y1={center.y}
            x2={center.x + size}
            y2={center.y}
            stroke={PALETTE.pink}
            strokeWidth="1"
            strokeDasharray="5"
          />,
          <line
            x1={center.x - size * 0.707}
            y1={center.y - size * 0.707}
            x2={center.x + size * 0.707}
            y2={center.y + size * 0.707}
            stroke={PALETTE.pink}
            strokeWidth="1"
            strokeDasharray="5"
          />
        );
        const point = { x: center.x + size * 0.707, y: center.y - size * 0.707 }; // Point on circle
        const reflection = getReflectionPoint(point, { x: center.x, y: center.y - size }, { x: center.x, y: center.y + size });
        lines.push(
          <circle key="point1" cx={point.x} cy={point.y} r="3" fill={PALETTE.pink} />,
          <circle key="point2" cx={reflection.x} cy={reflection.y} r="3" fill={PALETTE.pink} />
        );
      }
    }
    return lines;
  };

  const handleShapeChange = (
    newShape: "equilateral-triangle" | "square" | "pentagon" | "rectangle" | "rhombus" | "isosceles-triangle" | "circle"
  ) => {
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
    <div style={{ ...neubrutalismBase, maxWidth: '600px', width: '100%', margin: '2rem auto', padding: '1.5rem', backgroundColor: PALETTE.sage, borderRadius: '20px', boxShadow: `8px 8px 0px ${PALETTE.charcoal}`}}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', textAlign: 'center', color: PALETTE.charcoal }}>
        Line Symmetry Visualizer
      </h3>
      <p style={{ fontSize: '0.875rem', color: PALETTE.charcoal, marginBottom: '1rem', textAlign: 'center' }}>
        Select a shape and step through to see its lines of symmetry.
      </p>

      {/* Shape Selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {[
          { id: "equilateral-triangle", label: "Equilateral Triangle" },
          { id: "square", label: "Square" },
          { id: "pentagon", label: "Regular Pentagon" },
          { id: "rectangle", label: "Rectangle" },
          { id: "rhombus", label: "Rhombus" },
          { id: "isosceles-triangle", label: "Isosceles Triangle" },
          { id: "circle", label: "Circle" }
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
      <div style={{ ...neubrutalismBase, backgroundColor: PALETTE.offWhite, display: 'flex', justifyContent: 'center', borderRadius: '8px', padding: '1rem' }}>
        <svg width="100%" height="200" className="scale-130" viewBox="0 0 300 200" style={{ maxWidth: '100%' }}>
          {renderShape()}
          {renderSymmetryLines() as ReactNode}
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
      <div style={{ ...getInfoBoxStyle('info'), backgroundColor: PALETTE.beige, marginTop: '1rem', padding: '1rem' }}>
        <p style={{ fontSize: '0.875rem', color: PALETTE.charcoal }}>
          <strong style={{ fontWeight: 'bold' }}>Step {step + 1}:</strong> {shapes[shape].steps[step]}
        </p>
        <p style={{ fontSize: '0.875rem', color: PALETTE.charcoal, marginTop: '0.5rem' }}>
          This shape has <strong style={{ fontWeight: 'bold' }}>{shapes[shape].symmetryLines === Infinity ? "infinite" : shapes[shape].symmetryLines}</strong> line(s) of symmetry. Corresponding points are equidistant from the mirror line.
        </p>
      </div>
    </div>
  );
};

export default LineSymmetry;
