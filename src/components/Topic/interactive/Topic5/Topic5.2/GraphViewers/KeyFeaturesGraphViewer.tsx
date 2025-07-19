// components/KeyFeaturesGraphViewer.tsx
import { useEffect, useRef } from "react";
import JXG from "jsxgraph";
import "../../../../../../assets/jsxgraph.css"

interface Props {
  data: {
    showHorizontal?: boolean;
    showSloping?: boolean;
    showCurved?: boolean;
  };
}

export default function KeyFeaturesGraphViewer({ data }: Props) {
  const boxRef = useRef(null);

  useEffect(() => {
    const board = JXG.JSXGraph.initBoard(boxRef.current as unknown as HTMLElement, {
      boundingbox: [0, 12, 10, -2],
      axis: true,
      showNavigation: false,
      showCopyright: false,
      pan: { enabled: false },
      zoom: false
    });

    // Create axes labels
    board.create('text', [5, -1.5, 'Time (s)']);
    board.create('text', [-0.5, 5, 'Distance (m)', { rotate: 90 }]);

    if (data.showHorizontal !== false) {
      // Horizontal line (stationary)
      board.create('segment', [[1, 2], [3, 2]], {
        strokeColor: '#1f77b4',
        strokeWidth: 3,
        name: 'Stationary',
        label: { position: 'rt', offset: [-5, 15] }
      });
    }

    if (data.showSloping !== false) {
      // Sloping line (constant speed)
      board.create('segment', [[4, 2], [6, 8]], {
        strokeColor: '#ff7f0e',
        strokeWidth: 3,
        name: 'Constant Speed',
        label: { position: 'rt', offset: [-5, 15] }
      });
    }

    if (data.showCurved !== false) {
      // Curved line (changing speed)
      board.create('curve', [
        [7, 2, 8, 4, 9, 9],
        [7, 2, 8, 4, 9, 9]
      ], {
        strokeColor: '#2ca02c',
        strokeWidth: 3,
        name: 'Changing Speed',
        label: { position: 'rt', offset: [-5, 15] }
      });
    }

    return () => {
      JXG.JSXGraph.freeBoard(board);
    };
  }, [data]);

  return <div ref={boxRef} className="w-full h-[300px] rounded-md border border-gray-300 bg-white" />;
}