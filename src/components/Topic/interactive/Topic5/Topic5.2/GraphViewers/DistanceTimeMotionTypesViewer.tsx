// components/DistanceTimeMotionTypesViewer.tsx
import { useEffect, useRef } from "react";
import JXG from "jsxgraph";
import "../../../../../../assets/jsxgraph.css";

interface Props {
  data: {
    showLegend?: boolean;
    title?: string;
  };
}

export default function DistanceTimeMotionTypesViewer({ data }: Props) {
  const boxRef = useRef(null);

  useEffect(() => {
    const { showLegend = true, title = "Types of Motion" } = data;

    const board = JXG.JSXGraph.initBoard(
      boxRef.current as unknown as HTMLElement,
      {
        boundingbox: [-1, 11, 12, -1],
        axis: true,
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
            },
          },

          y: {
            name: "Distance (m)",
            withLabel: true,
            label: {
              position: "rt",
              offset: [-10, -10],
              fontSize: 12,
            },
          },
        },
      }
    );

    // Customize axes

    // 1. At Rest (Horizontal line at y=0)
    board.create(
      "segment",
      [
        [0, 0],
        [5, 0],
      ],
      {
        strokeColor: "#e74c3c",
        strokeWidth: 4,
        name: "At Rest",
      }
    );
    board.create("text", [4, 1, "At Rest"], {
      fontSize: 11,
      color: "#e74c3c",
      anchorX: "middle",
      fontWeight: "bold",
    });

    // 2. Uniform Motion (Straight diagonal line from origin)
    board.create(
      "segment",
      [
        [0, 0],
        [8, 6],
      ],
      {
        strokeColor: "#3498db",
        strokeWidth: 4,
        name: "Uniform Motion",
      }
    );
    board.create("text", [8, 4, "Uniform Motion"], {
      fontSize: 11,
      color: "#3498db",
      anchorX: "middle",
      fontWeight: "bold",
    });

    // 3. Accelerated Motion (Steepening curve from origin)
    const accelPoints = [];
    for (let t = 0; t <= 4; t += 0.1) {
      const d = 0.5 * t * t; // Quadratic acceleration from origin
      accelPoints.push([t, d]);
    }

    board.create(
      "curve",
      [accelPoints.map((p) => p[0]), accelPoints.map((p) => p[1])],
      {
        strokeColor: "#27ae60",
        strokeWidth: 4,
      }
    );
    board.create("text", [6, 6, "Accelerated\nMotion"], {
      fontSize: 11,
      color: "#27ae60",
      anchorX: "middle",
      fontWeight: "bold",
    });

    // 4. Decelerated Motion (Flattening curve from origin)
    const decelPoints = [];
    for (let t = 0; t <= 4; t += 0.1) {
      const d = 4 * Math.sqrt(t); // Square root curve (deceleration) from origin
      decelPoints.push([t, d]);
    }

    board.create(
      "curve",
      [decelPoints.map((p) => p[0]), decelPoints.map((p) => p[1])],
      {
        strokeColor: "#f39c12",
        strokeWidth: 4,
      }
    );
    board.create("text", [2, 2, "Decelerated\nMotion"], {
      fontSize: 11,
      color: "#f39c12",
      anchorX: "middle",
      fontWeight: "bold",
    });

    // Add title
    if (title) {
      board.create("text", [6, 10, title], {
        fontSize: 14,
        color: "#2c3e50",
        anchorX: "middle",
        fontWeight: "bold",
      });
    }

    // Legend with motion descriptions
    if (showLegend) {
      board.create("text", [6, 9, "● At Rest: Zero gradient, zero speed"], {
        fontSize: 9,
        color: "#e74c3c",
      });
      board.create(
        "text",
        [6, 8.5, "● Uniform Motion: Constant gradient, constant speed"],
        {
          fontSize: 9,
          color: "#3498db",
        }
      );
      board.create(
        "text",
        [6, 8, "● Accelerated Motion: Increasing gradient, increasing speed"],
        {
          fontSize: 9,
          color: "#27ae60",
        }
      );
      board.create(
        "text",
        [6, 7.5, "● Decelerated Motion: Decreasing gradient, decreasing speed"],
        {
          fontSize: 9,
          color: "#f39c12",
        }
      );
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
