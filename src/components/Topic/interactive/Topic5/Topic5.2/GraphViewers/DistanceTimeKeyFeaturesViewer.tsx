// components/DistanceTimeKeyFeaturesViewer.tsx
import { useEffect, useRef } from "react";
import JXG from "jsxgraph";
import "../../../../../../assets/jsxgraph.css";

interface Props {
  data: {
    showLegend?: boolean;
    title?: string;
  };
}

export default function DistanceTimeKeyFeaturesViewer({ data }: Props) {
  const boxRef = useRef(null);

  useEffect(() => {
    const {
      showLegend = true,
      title = "Key Features of Distance-Time Graphs",
    } = data;

    const board = JXG.JSXGraph.initBoard(
      boxRef.current as unknown as HTMLElement,
      {
        boundingbox: [-1, 16, 11, -2],
        axis: true,
        grid: false,
        showNavigation: false,
        showCopyright: false,
        pan: { enabled: false },
        zoom: false,
        defaultAxes: {
          x: {
            name: "Time (s)",
            withLabel: true,
            label: {
              position: "rt",
              offset: [-200, -20],
              fontSize: 12,
              fixed: true,
            },
            fixed: true,
          },

          y: {
            name: "Distance (m)",
            withLabel: true,
            label: {
              position: "rt",
              offset: [-10, -10],
              fontSize: 12,
              fixed: true,
            },
            fixed: true,
          },
        },
      }
    );

    // 1. Horizontal Line (Stationary) - from origin horizontally
    board.create(
      "segment",
      [
        [0, 0],
        [3, 0],
      ],
      {
        strokeColor: "#e74c3c",
        strokeWidth: 3,
        fixed: true,
        highlight: false,
      }
    );
    board.create("text", [1.5, 0.8, "Horizontal Line\n(Stationary)"], {
      fontSize: 10,
      color: "#e74c3c",
      anchorX: "middle",
      fixed: true,
    });

    // 2. Sloping Line (Constant Speed) - from origin diagonally
    board.create(
      "segment",
      [
        [3.5, 0],
        [6.5, 6],
      ],
      {
        strokeColor: "#3498db",
        strokeWidth: 3,
        fixed: true,
        highlight: false,
      }
    );
    board.create("text", [5, 7, "Sloping Line\n(Constant Speed)"], {
      fontSize: 10,
      color: "#3498db",
      anchorX: "middle",
      fixed: true,
    });

    // 3. Curved Line (Acceleration) - starting from origin
    const curvePoints = [];
    for (let t = 7; t <= 10; t += 0.1) {
      const d = 0.4 * (t - 7) * (t - 7); // Quadratic curve starting at (7,0)
      curvePoints.push([t, d]);
    }

    board.create(
      "curve",
      [curvePoints.map((p) => p[0]), curvePoints.map((p) => p[1])],
      {
        strokeColor: "#27ae60",
        strokeWidth: 3,
        fixed: true,
        highlight: false,
      }
    );
    board.create("text", [8.5, 4, "Curved Line\n(Changing Speed)"], {
      fontSize: 10,
      color: "#27ae60",
      anchorX: "middle",
      fixed: true,
    });

    // Add title
    if (title) {
      board.create("text", [5, 15, title], {
        fontSize: 14,
        color: "#2c3e50",
        anchorX: "middle",
        fixed: true,
      });
    }

    // Legend
    if (showLegend) {
      board.create("text", [0.5, 13, "● Horizontal = No motion (speed = 0)"], {
        fontSize: 9,
        color: "#e74c3c",
        fixed: true,
      });
      board.create("text", [0.5, 12, "● Sloping = Constant speed"], {
        fontSize: 9,
        color: "#3498db",
        fixed: true,
      });
      board.create("text", [0.5, 11, "● Curved = Changing speed"], {
        fontSize: 9,
        color: "#27ae60",
        fixed: true,
      });
    }

    return () => {
      JXG.JSXGraph.freeBoard(board);
    };
  }, [data]);

  return (
    <div
      ref={boxRef}
      className="w-full h-[400px] rounded-md border border-gray-300 bg-white"
    />
  );
}
