/* eslint-disable @typescript-eslint/no-explicit-any */
// components/GraphViewers/BaseGraphViewer.tsx
import { useEffect, useRef } from "react";
import JXG from "jsxgraph";
import "../../../../../../assets/jsxgraph.css";

interface BaseGraphProps {
  boundingbox: [number, number, number, number];
  xAxis: {
    name: string;
    labelOffset?: [number, number];
  };
  yAxis: {
    name: string;
    labelOffset?: [number, number];
  };
  title?: string;
  children?: (board: any) => void;
}

export default function BaseGraphViewer({
  boundingbox,
  xAxis,
  yAxis,
  title,
  children,
}: BaseGraphProps) {
  const boxRef = useRef(null);

  useEffect(() => {
    const board = JXG.JSXGraph.initBoard(boxRef.current as unknown as HTMLElement, {
      boundingbox,
      axis: true,
      showNavigation: false,
      showCopyright: false,
      pan: { enabled: false },
      zoom: false,
      defaultAxes: {
        x: {
          name: xAxis.name,
          withLabel: true,
          label: {
            position: 'rt',
            offset: xAxis.labelOffset || [-200, -20],
            fontSize: 12
          }
        },
        y: {
          name: yAxis.name,
          withLabel: true,
          label: {
            position: 'rt',
            offset: yAxis.labelOffset || [-30, -10],
            fontSize: 12
          }
        }
      }
    });

    if (title) {
      board.create('text', [
        (boundingbox[2] - boundingbox[0]) / 2,
        boundingbox[1] - 0.5,
        title
      ], {
        fontSize: 14,
        anchorX: 'middle',
        fixed: true
      });
    }

    if (children) {
      children(board);
    }

    return () => {
      JXG.JSXGraph.freeBoard(board);
    };
  }, [boundingbox, xAxis, yAxis, title, children]);

  return <div ref={boxRef} className="w-full h-[400px] rounded-md border border-gray-300 bg-white" />;
}