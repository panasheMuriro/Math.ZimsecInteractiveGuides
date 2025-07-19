// /* eslint-disable @typescript-eslint/no-unused-vars */
// components/GradientViewer.tsx
import { useEffect, useRef } from "react";
import JXG from "jsxgraph";
import "../../../../../../assets/jsxgraph.css";

interface GradientData {
  types: Array<'positive' | 'negative' | 'zero' | 'undefined'>;
  examples?: boolean;
}

export default function GradientViewer({ data }: { data: GradientData }) {
  const boxRef = useRef(null);

  useEffect(() => {
    const { types = ['positive', 'negative', 'zero', 'undefined'], examples = true } = data;
    const colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728'];
    const domain: [number, number] = [-5, 5];

    const board = JXG.JSXGraph.initBoard(boxRef.current as unknown as HTMLElement, {
      boundingbox: [-6, 6, 6, -6],
      grid: false,
    //   axis: true,
      showNavigation: false,
      showCopyright: false,
      pan: { enabled: false },
      zoom: false
    });

    types.forEach((type, index) => {
      switch (type) {
        case 'positive':
          board.create(
            "functiongraph",
            [(x: number) => 2 * x + 1, domain[0], domain[1]],
            { strokeWidth: 4, strokeColor: colors[index], name: 'Positive (m > 0)',  withLabel: true  }
          );
          if (examples) {
            board.create("point", [1, 3], { size: 1, fixed: true,   withLabel: false  });
            board.create("point", [2, 5], { size: 1, fixed: true, withLabel: false });
          }
          break;
          
        case 'negative':
          board.create(
            "functiongraph",
            [(x: number) => -1.5 * x + 2, domain[0], domain[1]],
            { strokeWidth: 4, strokeColor: colors[index], name: 'Negative (m < 0)' }
          );
          if (examples) {
            board.create("point", [1, 0.5], { size: 1, fixed: true, withLabel: false  });
            board.create("point", [2, -1], { size: 1, fixed: true,withLabel: false  });
          }
          break;
          
        case 'zero':
          board.create(
            "functiongraph",
            [() => 3, domain[0], domain[1]],
            { strokeWidth: 4, strokeColor: colors[index], name: 'Zero (m = 0)' }
          );
          if (examples) {
            board.create("point", [-2, 3], { size: 1, fixed: true, withLabel: false  });
            board.create("point", [2, 3], { size: 1, fixed: true,withLabel: false  });
          }
          break;
          
        case 'undefined':
          // Vertical line - not a function but we'll represent it
          board.create(
            "line",
            [[3, -5], [3, 5]],
            { strokeWidth: 4, strokeColor: colors[index], name: 'Undefined (vertical)' }
          );
          if (examples) {
            board.create("point", [3, -2], { size: 1, fixed: true,withLabel: false  });
            board.create("point", [3, 2], { size: 1, fixed: true,withLabel: false  });
          }
          break;
      }
    });

    return () => {
      JXG.JSXGraph.freeBoard(board);
    };
  }, [data]);

  return <div ref={boxRef} className="w-full h-[200px] rounded-md border border-gray-300 bg-white" />;
}