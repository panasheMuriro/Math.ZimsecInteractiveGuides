/* eslint-disable @typescript-eslint/no-explicit-any */
interface PythagoreanTriangleDiagramProps {
  step: any; // Or a more specific type if needed
  sharedValues: { [key: string]: any };
}


export const PythagoreanTriangleDiagram: React.FC<PythagoreanTriangleDiagramProps> = () => {

  // Example fixed dimensions (you can make these dynamic based on step or sharedValues)
  const a = 3;
  const b = 4;
  const c = 5; // Calculated or given

  // Calculate SVG viewbox and triangle points
  const scale = 20; // Scale factor for SVG units
  const ax = 0;
  const ay = b * scale;
  const bx = a * scale;
  const by = b * scale;
  const cx = 0;
  const cy = 0;

  const maxX = Math.max(ax, bx, cx);
  const maxY = Math.max(ay, by, cy);
  const padding = 30;

  return (
    <div className="flex justify-center items-center my-2">
      <svg
        width={maxX + 2 * padding}
        height={maxY + 2 * padding}
        viewBox={`${-padding} ${-padding} ${maxX + 2 * padding} ${maxY + 2 * padding}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Triangle Sides */}
        <polygon
          points={`${ax},${ay} ${bx},${by} ${cx},${cy}`}
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        {/* Right Angle Marker */}
        <polyline
           points={`${ax + 5},${ay} ${ax + 5},${ay - 5} ${ax},${ay - 5}`}
           fill="none"
           stroke="white"
           strokeWidth="1"
         />
        {/* Side Labels */}
        <text x={(ax + bx) / 2} y={by + 15} fill="white" fontSize="12" textAnchor="middle">a ({a})</text>
        <text x={ax - 15} y={(ay + cy) / 2} fill="white" fontSize="12" textAnchor="middle">b ({b})</text>
        <text x={(bx + cx) / 2 + 10} y={(by + cy) / 2 - 10} fill="white" fontSize="12" textAnchor="middle">c ({c})</text>
        {/* Vertices Labels */}
        <text x={cx - 10} y={cy - 5} fill="white" fontSize="14" textAnchor="middle">C</text>
        <text x={ax - 10} y={ay + 15} fill="white" fontSize="14" textAnchor="middle">A</text>
        <text x={bx + 10} y={by + 15} fill="white" fontSize="14" textAnchor="middle">B</text>
      </svg>
    </div>
  );
};