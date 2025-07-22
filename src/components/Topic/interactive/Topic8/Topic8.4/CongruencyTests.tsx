import  { useState } from "react";

const CongruencyTests= () => {
  const [condition, setCondition] = useState<"SSS" | "SAS" | "ASA" | "RHS">("SSS");
  const [highlight, setHighlight] = useState<string>("");

  // Triangle properties (fixed coordinates)
  const triangle1 = [
    { x: 50, y: 150 }, // A
    { x: 100, y: 50 }, // B
    { x: 150, y: 150 }, // C
  ];
  const triangle2 = [
    { x: 250, y: 150 }, // D
    { x: 300, y: 50 }, // E
    { x: 350, y: 150 }, // F
  ];

  // RHS triangles (right-angled at B and E)
  const rhsTriangle1 = [
    { x: 50, y: 150 }, // A
    { x: 50, y: 50 }, // B (right angle)
    { x: 150, y: 150 }, // C
  ];
  const rhsTriangle2 = [
    { x: 250, y: 150 }, // D
    { x: 250, y: 50 }, // E (right angle)
    { x: 350, y: 150 }, // F
  ];

  const getTrianglePoints = (isRHS: boolean) => {
    return isRHS ? [rhsTriangle1, rhsTriangle2] : [triangle1, triangle2];
  };

  // Helper function to calculate a point along a line at a given distance
  const pointAlongLine = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    distance: number
  ) => {
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const ratio = distance / length;
    return {
      x: x1 + ratio * (x2 - x1),
      y: y1 + ratio * (y2 - y1),
    };
  };

  // Helper function to calculate angle arc path
  const getAngleArcPath = (
    vertex: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    radius: number  ) => {
    // Calculate points along the sides at radius distance from vertex
    const point1 = pointAlongLine(vertex.x, vertex.y, p1.x, p1.y, radius);
    const point2 = pointAlongLine(vertex.x, vertex.y, p2.x, p2.y, radius);

    // Determine sweep flag based on cross product to ensure correct arc direction
    const crossProduct =
      (p1.x - vertex.x) * (p2.y - vertex.y) - (p1.y - vertex.y) * (p2.x - vertex.x);
    const sweepFlag = crossProduct > 0 ? 1 : 0;

    return `
      M ${point1.x},${point1.y}
      A ${radius},${radius} 0 0 ${sweepFlag} ${point2.x},${point2.y}
    `;
  };

  const handleConditionChange = (newCondition: "SSS" | "SAS" | "ASA" | "RHS") => {
    setCondition(newCondition);
    setHighlight("");
  };

  const getHighlightStyles = (part: string) => {
    return highlight === part ? "stroke-yellow-400 stroke-[4px]" : "stroke-black stroke-[2px]";
  };

  const triangles = getTrianglePoints(condition === "RHS");

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
        Triangle Congruence Visualizer
      </h3>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Select a congruence condition and tap parts to highlight corresponding elements.
      </p>

      {/* Condition Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {["SSS", "SAS", "ASA", "RHS"].map((cond) => (
          <button
            key={cond}
            onClick={() => handleConditionChange(cond as "SSS" | "SAS" | "ASA" | "RHS")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              condition === cond
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cond}
          </button>
        ))}
      </div>
      
        <div className="flex justify-center">
          <svg width="100%" height="200" viewBox="0 0 400 200" className="max-w-full">
            {/* Triangle 1 (ABC) */}
            <polygon
              points={triangles[0].map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              className={getHighlightStyles("triangle1")}
              onClick={() => setHighlight("triangle1")}
            />
            {/* Triangle 2 (DEF) */}
            <polygon
              points={triangles[1].map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              className={getHighlightStyles("triangle2")}
              onClick={() => setHighlight("triangle2")}
            />

            {/* Labels */}
            {triangles[0].map((p, i) => (
              <text
                key={`label1-${i}`}
                x={p.x + (i === 1 ? -15 : 5)}
                y={p.y + (i === 1 ? -5 : 15)}
                className="text-sm font-medium"
                onClick={() => setHighlight(`point${i}`)}
                fill={highlight === `point${i}` ? "red" : "black"}
              >
                {["A", "B", "C"][i]}
              </text>
            ))}
            {triangles[1].map((p, i) => (
              <text
                key={`label2-${i}`}
                x={p.x + (i === 1 ? -15 : 5)}
                y={p.y + (i === 1 ? -5 : 15)}
                className="text-sm font-medium"
                onClick={() => setHighlight(`point${i + 3}`)}
                fill={highlight === `point${i + 3}` ? "red" : "black"}
              >
                {["D", "E", "F"][i]}
              </text>
            ))}

            {/* Highlight corresponding parts based on condition */}
            {condition === "SSS" && (
              <>
                <line
                  x1={triangles[0][0].x}
                  y1={triangles[0][0].y}
                  x2={triangles[0][1].x}
                  y2={triangles[0][1].y}
                  className={getHighlightStyles("sideAB")}
                  onClick={() => setHighlight("sideAB")}
                />
                <line
                  x1={triangles[1][0].x}
                  y1={triangles[1][0].y}
                  x2={triangles[1][1].x}
                  y2={triangles[1][1].y}
                  className={getHighlightStyles("sideDE")}
                  onClick={() => setHighlight("sideDE")}
                />
                <line
                  x1={triangles[0][1].x}
                  y1={triangles[0][1].y}
                  x2={triangles[0][2].x}
                  y2={triangles[0][2].y}
                  className={getHighlightStyles("sideBC")}
                  onClick={() => setHighlight("sideBC")}
                />
                <line
                  x1={triangles[1][1].x}
                  y1={triangles[1][1].y}
                  x2={triangles[1][2].x}
                  y2={triangles[1][2].y}
                  className={getHighlightStyles("sideEF")}
                  onClick={() => setHighlight("sideEF")}
                />
                <line
                  x1={triangles[0][0].x}
                  y1={triangles[0][0].y}
                  x2={triangles[0][2].x}
                  y2={triangles[0][2].y}
                  className={getHighlightStyles("sideAC")}
                  onClick={() => setHighlight("sideAC")}
                />
                <line
                  x1={triangles[1][0].x}
                  y1={triangles[1][0].y}
                  x2={triangles[1][2].x}
                  y2={triangles[1][2].y}
                  className={getHighlightStyles("sideDF")}
                  onClick={() => setHighlight("sideDF")}
                />
              </>
            )}
            {condition === "SAS" && (
              <>
                <line
                  x1={triangles[0][0].x}
                  y1={triangles[0][0].y}
                  x2={triangles[0][1].x}
                  y2={triangles[0][1].y}
                  className={getHighlightStyles("sideAB")}
                  onClick={() => setHighlight("sideAB")}
                />
                <line
                  x1={triangles[1][0].x}
                  y1={triangles[1][0].y}
                  x2={triangles[1][1].x}
                  y2={triangles[1][1].y}
                  className={getHighlightStyles("sideDE")}
                  onClick={() => setHighlight("sideDE")}
                />
                <line
                  x1={triangles[0][1].x}
                  y1={triangles[0][1].y}
                  x2={triangles[0][2].x}
                  y2={triangles[0][2].y}
                  className={getHighlightStyles("sideBC")}
                  onClick={() => setHighlight("sideBC")}
                />
                <line
                  x1={triangles[1][1].x}
                  y1={triangles[1][1].y}
                  x2={triangles[1][2].x}
                  y2={triangles[1][2].y}
                  className={getHighlightStyles("sideEF")}
                  onClick={() => setHighlight("sideEF")}
                />
                {/* Angle B and E */}
                <path
                  d={getAngleArcPath(
                    triangles[0][1],
                    triangles[0][0],
                    triangles[0][2],
                    20,
                    // "B"
                  )}
                  className={getHighlightStyles("angleB")}
                  onClick={() => setHighlight("angleB")}
                />
                <path
                  d={getAngleArcPath(
                    triangles[1][1],
                    triangles[1][0],
                    triangles[1][2],
                    20,
                    // "E"
                  )}
                  className={getHighlightStyles("angleE")}
                  onClick={() => setHighlight("angleE")}
                />
              </>
            )}
            {condition === "ASA" && (
              <>
                <path
                  d={getAngleArcPath(
                    triangles[0][0],
                    triangles[0][1],
                    triangles[0][2],
                    20,
                    // "A"
                  )}
                  className={getHighlightStyles("angleA")}
                  onClick={() => setHighlight("angleA")}
                />
                <path
                  d={getAngleArcPath(
                    triangles[1][0],
                    triangles[1][1],
                    triangles[1][2],
                    20,
                    // "D"
                  )}
                  className={getHighlightStyles("angleD")}
                  onClick={() => setHighlight("angleD")}
                />
                <line
                  x1={triangles[0][0].x}
                  y1={triangles[0][0].y}
                  x2={triangles[0][1].x}
                  y2={triangles[0][1].y}
                  className={getHighlightStyles("sideAB")}
                  onClick={() => setHighlight("sideAB")}
                />
                <line
                  x1={triangles[1][0].x}
                  y1={triangles[1][0].y}
                  x2={triangles[1][1].x}
                  y2={triangles[1][1].y}
                  className={getHighlightStyles("sideDE")}
                  onClick={() => setHighlight("sideDE")}
                />
                <path
                  d={getAngleArcPath(
                    triangles[0][1],
                    triangles[0][0],
                    triangles[0][2],
                    20,
                    // "B"
                  )}
                  className={getHighlightStyles("angleB")}
                  onClick={() => setHighlight("angleB")}
                />
                <path
                  d={getAngleArcPath(
                    triangles[1][1],
                    triangles[1][0],
                    triangles[1][2],
                    20,
                    // "E"
                  )}
                  className={getHighlightStyles("angleE")}
                  onClick={() => setHighlight("angleE")}
                />
              </>
            )}
            {condition === "RHS" && (
              <>
                <path
                  d={getAngleArcPath(
                    triangles[0][1],
                    triangles[0][0],
                    triangles[0][2],
                    20,
                    // "B"
                  )}
                  className={getHighlightStyles("angleB")}
                  onClick={() => setHighlight("angleB")}
                />
                <path
                  d={getAngleArcPath(
                    triangles[1][1],
                    triangles[1][0],
                    triangles[1][2],
                    20,
                    // "E"
                  )}
                  className={getHighlightStyles("angleE")}
                  onClick={() => setHighlight("angleE")}
                />
                <line
                  x1={triangles[0][0].x}
                  y1={triangles[0][0].y}
                  x2={triangles[0][2].x}
                  y2={triangles[0][2].y}
                  className={getHighlightStyles("sideAC")}
                  onClick={() => setHighlight("sideAC")}
                />
                <line
                  x1={triangles[1][0].x}
                  y1={triangles[1][0].y}
                  x2={triangles[1][2].x}
                  y2={triangles[1][2].y}
                  className={getHighlightStyles("sideDF")}
                  onClick={() => setHighlight("sideDF")}
                />
                <line
                  x1={triangles[0][0].x}
                  y1={triangles[0][0].y}
                  x2={triangles[0][1].x}
                  y2={triangles[0][1].y}
                  className={getHighlightStyles("sideAB")}
                  onClick={() => setHighlight("sideAB")}
                />
                <line
                  x1={triangles[1][0].x}
                  y1={triangles[1][0].y}
                  x2={triangles[1][1].x}
                  y2={triangles[1][1].y}
                  className={getHighlightStyles("sideDE")}
                  onClick={() => setHighlight("sideDE")}
                />
              </>
            )}
          </svg>
        </div>
   
      {/* Feedback */}
      <div className="text-sm text-gray-600 mt-4">
        <p>
          <strong>Condition:</strong> {condition}
        </p>
        <p>
          <strong>Explanation:</strong>{" "}
          {condition === "SSS"
            ? "All three sides are equal (AB=DE, BC=EF, AC=DF)."
            : condition === "SAS"
            ? "Two sides and the included angle are equal (AB=DE, ∠B=∠E, BC=EF)."
            : condition === "ASA"
            ? "Two angles and the included side are equal (∠A=∠D, AB=DE, ∠B=∠E)."
            : "Right angles, hypotenuses, and one side are equal (∠B=∠E=90°, AB=DE, AC=DF)."}
        </p>
        <p className="mt-2">
          Tap on sides, angles, or triangles to highlight corresponding parts and see how they match!
        </p>
      </div>
    </div>
  );
};

export default CongruencyTests;