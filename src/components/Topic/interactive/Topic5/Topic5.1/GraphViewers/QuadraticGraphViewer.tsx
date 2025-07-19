// components/QuadraticGraphViewer.tsx
import { useEffect, useRef } from "react";
import JXG from "jsxgraph";

interface Props {
  data: {
    a: number; // x² coefficient
    b?: number; // x coefficient (optional)
    c?: number; // constant term (optional)
    domain?: [number, number]; // x-range (optional)
  };
}

export default function QuadraticGraphViewer({ data }: Props) {
  const boxRef = useRef(null);
  const { a, b = 0, c = 0, domain = [-5, 5] } = data;

  useEffect(() => {
    const board = JXG.JSXGraph.initBoard(boxRef.current as unknown as HTMLElement, {
      boundingbox: [-6, 6, 6, -6],
      axis: true,
      showNavigation: false,
      showCopyright: false,
      pan: { enabled: false },
      zoom: false
    });

    // Plot the quadratic function
    board.create(
      "functiongraph",
      [(x: number) => a * x * x + b * x + c, domain[0], domain[1]],
      { strokeWidth: 2, strokeColor: "#1f77b4" }
    );

    // Calculate and mark vertex
    const vertexX = -b / (2 * a);
    const vertexY = a * vertexX * vertexX + b * vertexX + c;
    board.create("point", [vertexX, vertexY], {
      name: `Vertex (${vertexX.toFixed(1)}, ${vertexY.toFixed(1)})`,
      size: 3,
      fixed: true,
      fillColor: "#d62728",
      strokeColor: "#d62728"
    });

    // Mark y-intercept
    board.create("point", [0, c], {
      name: `y-int (0, ${c})`,
      size: 3,
      fixed: true,
      fillColor: "#2ca02c",
      strokeColor: "#2ca02c"
    });

    return () => {
      JXG.JSXGraph.freeBoard(board);
    };
  }, [a, b, c, domain]);

  return <div ref={boxRef} className="w-full h-[200px] rounded-md border border-gray-300 bg-white" />;
}