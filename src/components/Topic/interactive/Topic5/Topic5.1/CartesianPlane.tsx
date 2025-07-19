/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import JXG from "jsxgraph";
import "../../../../../assets/jsxgraph.css";

export default function CartesianPlane() {
  const boxRef = useRef(null);
  const boardRef = useRef<any>(null);
  const pointRef = useRef<any>(null);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [error, setError] = useState("");

  const minX = -6, maxX = 6;
  const minY = -5, maxY = 5;

  useEffect(() => {
    if (!boxRef.current) return;

    boardRef.current = JXG.JSXGraph.initBoard(boxRef.current, {
      boundingbox: [minX, maxY, maxX, minY],
      axis: true,
      showNavigation: false,
      showCopyright: false,
    });

    pointRef.current = boardRef.current.create("point", [x, y], {
      name: `(${x}, ${y})`,
      size: 4,
      fixed: true,
    });

    return () => {
      JXG.JSXGraph.freeBoard(boardRef.current);
    };
  }, []);

  useEffect(() => {
    const inBounds = x >= minX && x <= maxX && y >= minY && y <= maxY;

    if (!inBounds) {
      setError(`Point (${x}, ${y}) is out of bounds. x must be between ${minX} and ${maxX}, y between ${minY} and ${maxY}.`);
    } else {
      setError("");
      pointRef.current.setPosition(JXG.COORDS_BY_USER, [x, y]);
      pointRef.current.setAttribute({ name: `(${x}, ${y})` });
      boardRef.current.update();
    }
  }, [x, y]);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-6 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-center text-gray-700">Plot a Point</h2>

      <div ref={boxRef} className="w-full h-[300px] rounded-md border border-gray-300" />

      <div className="flex items-center justify-center gap-6">
        <div className="flex flex-col text-sm text-gray-600">
          <label htmlFor="x-input" className="mb-1 font-medium">X-coordinate</label>
          <input
            id="x-input"
            type="number"
            value={x}
            onChange={(e) => setX(Number(e.target.value))}
            className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-24 text-center"
          />
        </div>

        <div className="flex flex-col text-sm text-gray-600">
          <label htmlFor="y-input" className="mb-1 font-medium">Y-coordinate</label>
          <input
            id="y-input"
            type="number"
            value={y}
            onChange={(e) => setY(Number(e.target.value))}
            className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-24 text-center"
          />
        </div>
      </div>

      {error && (
        <p className="text-center text-sm text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
}
