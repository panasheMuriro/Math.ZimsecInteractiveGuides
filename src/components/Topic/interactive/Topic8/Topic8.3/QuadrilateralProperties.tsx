import React, { useState } from 'react';

interface Quadrilateral {
  name: string;
  points: [number, number][]; // [x, y] coordinates for vertices A, B, C, D
  sides: string; // Description of side properties
  angles: string; // Description of angle properties
  diagonals: string; // Description of diagonal properties
  symmetry: string; // Description of symmetry properties
  showDiagonals: boolean;
  symmetryLines: [number, number, number, number][]; // [x1, y1, x2, y2] for symmetry lines
}

// --- Neubrutalism Styles & Colors ---
const NEUBRUTALISM_COLORS = {
  orange: '#f06543',     // Accents, Selected, Diagonals
  lightGray: '#e8e9eb',  // Background, Cards, SVG background
  cream: '#e0dfd5',      // Button Default, Highlights
  darkGray: '#313638',   // Text, Lines, Borders, Symmetry Lines
  yellow: '#f09d51',     // Accents, Highlights
  white: '#ffffff',
  shadow: 'rgba(49, 54, 56, 0.3)', // darkGray with opacity for shadow
};

const neubrutalismBase = {
  border: `3px solid ${NEUBRUTALISM_COLORS.darkGray}`,
  borderRadius: '12px',
  boxShadow: `4px 4px 0px ${NEUBRUTALISM_COLORS.shadow}`,
  padding: '1rem',
};
// --- End Neubrutalism Styles ---

const QuadrilateralProperties: React.FC = () => {
  const [selectedQuad, setSelectedQuad] = useState<number>(0);
  const [showDiagonals, setShowDiagonals] = useState<boolean>(false);
  const [showSymmetry, setShowSymmetry] = useState<boolean>(false);

  // SVG setup
  const svgSize = Math.min(window.innerWidth * 0.8, 250); // Responsive for mobile
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const scale = svgSize / 150; // Scale factor for coordinates

  const quadrilaterals: Quadrilateral[] = [
    {
      name: 'Square',
      points: [
        [centerX - 40 * scale, centerY - 40 * scale], // A
        [centerX + 40 * scale, centerY - 40 * scale], // B
        [centerX + 40 * scale, centerY + 40 * scale], // C
        [centerX - 40 * scale, centerY + 40 * scale], // D
      ],
      sides: 'All sides equal (a = b = c = d)',
      angles: 'All angles = 90°',
      diagonals: 'Diagonals equal, perpendicular, bisect each other',
      symmetry: '4 lines of symmetry, rotational symmetry order 4',
      showDiagonals: true,
      symmetryLines: [
        [centerX, centerY - 40 * scale, centerX, centerY + 40 * scale], // Vertical
        [centerX - 40 * scale, centerY, centerX + 40 * scale, centerY], // Horizontal
        [centerX - 40 * scale, centerY - 40 * scale, centerX + 40 * scale, centerY + 40 * scale], // Diagonal 1
        [centerX + 40 * scale, centerY - 40 * scale, centerX - 40 * scale, centerY + 40 * scale], // Diagonal 2
      ],
    },
    {
      name: 'Rectangle',
      points: [
        [centerX - 50 * scale, centerY - 30 * scale], // A
        [centerX + 50 * scale, centerY - 30 * scale], // B
        [centerX + 50 * scale, centerY + 30 * scale], // C
        [centerX - 50 * scale, centerY + 30 * scale], // D
      ],
      sides: 'Opposite sides equal (a = c, b = d)',
      angles: 'All angles = 90°',
      diagonals: 'Diagonals equal and bisect each other',
      symmetry: '2 lines of symmetry',
      showDiagonals: true,
      symmetryLines: [
        [centerX, centerY - 30 * scale, centerX, centerY + 30 * scale], // Vertical
        [centerX - 50 * scale, centerY, centerX + 50 * scale, centerY], // Horizontal
      ],
    },
    {
      name: 'Rhombus',
      points: [
        [centerX, centerY - 50 * scale], // A
        [centerX + 40 * scale, centerY], // B
        [centerX, centerY + 50 * scale], // C
        [centerX - 40 * scale, centerY], // D
      ],
      sides: 'All sides equal (a = b = c = d)',
      angles: 'Opposite angles equal',
      diagonals: 'Diagonals perpendicular and bisect each other',
      symmetry: '2 lines of symmetry',
      showDiagonals: true,
      symmetryLines: [
        [centerX, centerY - 50 * scale, centerX, centerY + 50 * scale], // Vertical
        [centerX - 40 * scale, centerY, centerX + 40 * scale, centerY], // Horizontal
      ],
    },
    {
      name: 'Parallelogram',
      points: [
        [centerX - 50 * scale, centerY - 30 * scale], // A
        [centerX + 30 * scale, centerY - 30 * scale], // B
        [centerX + 50 * scale, centerY + 30 * scale], // C
        [centerX - 30 * scale, centerY + 30 * scale], // D
      ],
      sides: 'Opposite sides equal and parallel',
      angles: 'Opposite angles equal',
      diagonals: 'Diagonals bisect each other',
      symmetry: 'No lines of symmetry',
      showDiagonals: true,
      symmetryLines: [],
    },
    {
      name: 'Trapezium',
      points: [
        [centerX - 50 * scale, centerY - 30 * scale], // A
        [centerX + 50 * scale, centerY - 30 * scale], // B
        [centerX + 30 * scale, centerY + 30 * scale], // C
        [centerX - 30 * scale, centerY + 30 * scale], // D
      ],
      sides: 'One pair of parallel sides (AB || DC)',
      angles: 'May have equal base angles',
      diagonals: 'Diagonals may be equal',
      symmetry: '1 line of symmetry',
      showDiagonals: true,
      symmetryLines: [[centerX, centerY - 30 * scale, centerX, centerY + 30 * scale]], // Vertical
    },
  ];

  const currentQuad = quadrilaterals[selectedQuad];
  const pointsString = currentQuad.points.map((p) => `${p[0]},${p[1]}`).join(' ');

  // --- Button Styling Helper ---
  const getButtonStyle = (isActive: boolean) => {
    return {
      ...neubrutalismBase,
      padding: '0.5rem 1rem',
      fontSize: '0.875rem', // text-sm
      fontWeight: 'bold',
      backgroundColor: isActive ? NEUBRUTALISM_COLORS.orange : NEUBRUTALISM_COLORS.cream,
      color: isActive ? NEUBRUTALISM_COLORS.white : NEUBRUTALISM_COLORS.darkGray,
      borderColor: NEUBRUTALISM_COLORS.darkGray,
      cursor: 'pointer',
      transition: 'all 0.2s',
      // Add hover effect inline
      ...(isActive ? {} : { // No hover change for active buttons
        ':hover': {
          backgroundColor: NEUBRUTALISM_COLORS.lightGray,
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
        backgroundColor: NEUBRUTALISM_COLORS.orange, // Orange background
        borderColor: NEUBRUTALISM_COLORS.darkGray,
        color: NEUBRUTALISM_COLORS.darkGray,
        borderRadius: '20px',
        boxShadow: `8px 8px 0px ${NEUBRUTALISM_COLORS.darkGray}`,
      }}
    >
      <div className="mb-4 mt-3 text-white">
        <h1 className="text-xl font-bold mb-1 text-center">
          Quadrilateral Properties
        </h1>
        <p className="text-sm text-center">
          Explore special quadrilaterals and their properties
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Quadrilateral Visualization */}
        <div
          style={{
            ...neubrutalismBase,
            backgroundColor: NEUBRUTALISM_COLORS.lightGray,
            borderColor: NEUBRUTALISM_COLORS.darkGray,
            padding: '1rem',
          }}
        >
          <h2
            className="text-base font-bold mb-3 text-center"
            style={{ color: NEUBRUTALISM_COLORS.darkGray }}
          >
            {currentQuad.name}
          </h2>
          <div className="flex justify-center mb-3">
            <svg
              width={svgSize}
              height={svgSize}
              className="border rounded-lg block"
              style={{
                border: `2px solid ${NEUBRUTALISM_COLORS.darkGray}`,
                borderRadius: '12px',
                backgroundColor: NEUBRUTALISM_COLORS.white,
              }}
            >
              {/* Quadrilateral */}
              <polygon
                points={pointsString}
                fill={NEUBRUTALISM_COLORS.cream}
                stroke={NEUBRUTALISM_COLORS.darkGray}
                strokeWidth="3"
              />
              {/* Vertex labels */}
              {currentQuad.points.map((p, i) => (
                <text
                  key={i}
                  x={p[0] + (p[0] > centerX ? 5 : -15)}
                  y={p[1] + (p[1] > centerY ? 10 : -5)}
                  className="text-xs"
                  style={{ fill: NEUBRUTALISM_COLORS.darkGray }}
                >
                  {['A', 'B', 'C', 'D'][i]}
                </text>
              ))}
              {/* Diagonals */}
              {showDiagonals && currentQuad.showDiagonals && (
                <>
                  <line
                    x1={currentQuad.points[0][0]}
                    y1={currentQuad.points[0][1]}
                    x2={currentQuad.points[2][0]}
                    y2={currentQuad.points[2][1]}
                    stroke={NEUBRUTALISM_COLORS.orange}
                    strokeWidth="2"
                    strokeDasharray="4,4"
                  />
                  <line
                    x1={currentQuad.points[1][0]}
                    y1={currentQuad.points[1][1]}
                    x2={currentQuad.points[3][0]}
                    y2={currentQuad.points[3][1]}
                    stroke={NEUBRUTALISM_COLORS.orange}
                    strokeWidth="2"
                    strokeDasharray="4,4"
                  />
                </>
              )}
              {/* Symmetry lines */}
              {showSymmetry &&
                currentQuad.symmetryLines.map((line, i) => (
                  <line
                    key={i}
                    x1={line[0]}
                    y1={line[1]}
                    x2={line[2]}
                    y2={line[3]}
                    stroke={NEUBRUTALISM_COLORS.darkGray} // Symmetry lines in dark gray
                    strokeWidth="2"
                    strokeDasharray="4,4"
                  />
                ))}
            </svg>
          </div>

          {/* Quadrilateral Selector */}
          <div className="overflow-x-auto pb-2 mb-3">
            <div className="flex gap-2 w-full flex-wrap justify-center">
              {quadrilaterals.map((quad, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedQuad(index)}
                  style={getButtonStyle(selectedQuad === index)}
                  onMouseEnter={(e) => {
                    if (selectedQuad !== index)
                      e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.lightGray;
                  }}
                  onMouseLeave={(e) => {
                    if (selectedQuad !== index)
                      e.currentTarget.style.backgroundColor = NEUBRUTALISM_COLORS.cream;
                  }}
                >
                  {quad.name}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles for Diagonals and Symmetry */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label
                className="flex items-center text-sm font-bold"
                style={{ color: NEUBRUTALISM_COLORS.darkGray }}
              >
                <input
                  type="checkbox"
                  checked={showDiagonals}
                  onChange={() => setShowDiagonals(!showDiagonals)}
                  disabled={!currentQuad.showDiagonals}
                  className="mr-2 w-4 h-4"
                  style={{
                    accentColor: NEUBRUTALISM_COLORS.orange,
                    borderColor: NEUBRUTALISM_COLORS.darkGray,
                  }}
                />
                Show Diagonals
              </label>
            </div>
            <div>
              <label
                className="flex items-center text-sm font-bold"
                style={{ color: NEUBRUTALISM_COLORS.darkGray }}
              >
                <input
                  type="checkbox"
                  checked={showSymmetry}
                  onChange={() => setShowSymmetry(!showSymmetry)}
                  disabled={currentQuad.symmetryLines.length === 0}
                  className="mr-2 w-4 h-4"
                  style={{
                    accentColor: NEUBRUTALISM_COLORS.orange,
                    borderColor: NEUBRUTALISM_COLORS.darkGray,
                  }}
                />
                Show Symmetry Lines
              </label>
            </div>
          </div>

          {/* Properties Display */}
          <div
            style={{
              ...neubrutalismBase,
              backgroundColor: NEUBRUTALISM_COLORS.white,
              borderColor: NEUBRUTALISM_COLORS.darkGray,
              padding: '0.75rem',
            }}
          >
            <p style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
              <span className="font-medium">Sides:</span> {currentQuad.sides}
            </p>
            <p style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
              <span className="font-medium">Angles:</span> {currentQuad.angles}
            </p>
            <p style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
              <span className="font-medium">Diagonals:</span> {currentQuad.diagonals}
            </p>
            <p style={{ color: NEUBRUTALISM_COLORS.darkGray }}>
              <span className="font-medium">Symmetry:</span> {currentQuad.symmetry}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuadrilateralProperties;