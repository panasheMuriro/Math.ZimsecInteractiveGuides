import { useEffect, useRef } from "react";
import JXG from "jsxgraph";
import "../../../../../../assets/jsxgraph.css"

interface JSXGraphViewerProps {
  data: {
    points?: [number, number][];
  };
}

export default function JSXGraphViewer({ data }: JSXGraphViewerProps) {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    const board = JXG.JSXGraph.initBoard(boxRef.current, {
      boundingbox: [-6, 5, 6, -5],
      axis: true,
      showNavigation: false,
      showCopyright: false,
      pan:{
        enabled:false
      },
      zoom:false
 
    });

    data.points?.forEach(([x, y]) => {
      board.create("point", [x, y], { name: `(${x}, ${y})`, size: 4 });
    });

    return () => {
      JXG.JSXGraph.freeBoard(board);
    };
  }, [data]);

  return <div ref={boxRef} className="w-full h-[300px]" />;
}
