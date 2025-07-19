// components/DistanceTimeExampleViewer.tsx
import { useEffect, useRef } from "react";
import JXG from "jsxgraph";
import "../../../../../../assets/jsxgraph.css";

interface Props {
  data: {
    showSpeedCalculations?: boolean;
  };
}

export default function DistanceTimeExampleViewer({ data }: Props) {
  const boxRef = useRef(null);

  useEffect(() => {
    const { showSpeedCalculations = true } = data;

    const board = JXG.JSXGraph.initBoard(boxRef.current as unknown as HTMLElement, {
      boundingbox: [-1, 8, 7, -1],
      axis: true,
      showNavigation: false,
      showCopyright: false,
      pan: { enabled: false },
      zoom: false,
      defaultAxes: {
        x: {
          name: 'Time (s)',
          withLabel: true,
          label: {
            position: 'rt', 
            offset: [-200, -20],
            fontSize: 12
          }
        },
        y: {
          name: 'Distance (m)',
          withLabel: true,
          label: {
            position: 'rt',
            offset: [-30, -10],
            fontSize: 12
          }
        }
      }
    });

    // Create the example graph
    // 0-2s: Constant speed (0,0) to (2,10)
    board.create('segment', [[0, 0], [2, 5]], {
      strokeColor: '#3498db',
      strokeWidth: 3,
      name: "'0-2s: Moving away'"
    });
    board.create('text', [1, 5, "'0-2s'", {
      anchorX: 'middle',
      parse: false
    }]);

    // 2-4s: Stationary at 10m
    board.create('segment', [[2, 5], [4, 5]], {
      strokeColor: '#e74c3c',
      strokeWidth: 3,
      name: "'2-4s: Stationary'"
    });
    board.create('text', [3, 10.5, "'2-4s'", {
      anchorX: 'middle',
      parse: false
    }]);

    // 4-6s: Returning to start (4,10) to (6,0)
    board.create('segment', [[4, 5], [6, 0]], {
      strokeColor: '#27ae60',
      strokeWidth: 3,
      name: "'4-6s: Returning'"
    });
    board.create('text', [5, 5, "'4-6s'", {
      anchorX: 'middle',
      parse: false
    }]);

    // Mark key points
    board.create('point', [0, 0], { name: "'Start'", size: 2, fixed: true });
    board.create('point', [2, 5], { size: 2, fixed: true });
    board.create('point', [4, 5], { size: 2, fixed: true });
    board.create('point', [6, 0], { name: "'End'", size: 2, fixed: true });

    // Add speed calculations if enabled
    if (showSpeedCalculations) {
      // 0-2s speed calculation
      board.create('text', [1, 8, "'Speed = (10m - 0m)/(2s - 0s) = 5 m/s'", {
        fontSize: 10,
        color: '#3498db',
        anchorX: 'middle',
        parse: false
      }]);

      // 2-4s speed calculation
      board.create('text', [3, 9, "'Speed = (10m - 10m)/(4s - 2s) = 0 m/s'", {
        fontSize: 10,
        color: '#e74c3c',
        anchorX: 'middle',
        parse: false
      }]);

      // 4-6s speed calculation
      board.create('text', [5, 2, "'Speed = (0m - 10m)/(6s - 4s) = -5 m/s'", {
        fontSize: 10,
        color: '#27ae60',
        anchorX: 'middle',
        parse: false
      }]);
    }

    // Add title
    board.create('text', [3, 10.5, "'Example Interpretation'", {
      fontSize: 12,
      color: '#2c3e50',
      anchorX: 'middle',
      fontWeight: 'bold',
      parse: false
    }]);

    return () => {
      JXG.JSXGraph.freeBoard(board);
    };
  }, [data]);

  return <div ref={boxRef} className="w-full h-[400px] rounded-md border border-gray-300 bg-white" />;
}