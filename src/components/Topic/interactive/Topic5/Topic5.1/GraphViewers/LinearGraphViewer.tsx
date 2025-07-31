// components/LinearGraphViewer.tsx
import { useEffect, useRef } from "react";
import JXG from "jsxgraph";
import "../../../../../../assets/jsxgraph.css"


interface Props {
  data: {
    m: number; // slope
    c: number; // y-intercept
    domain?: [number, number]; // optional x range
  };
}

export default function LinearGraphViewer({ data }: Props) {
  const boxRef = useRef(null);

  useEffect(() => {
    const { m, c, domain = [-5, 5] } = data;

    const board = JXG.JSXGraph.initBoard(boxRef.current as unknown as HTMLElement, {
      boundingbox: [-6, 6, 6, -6],
      axis: true,
      showNavigation: false,
      showCopyright: false,
      pan:{
        enabled:false
      },
      zoom:false
     
    });

    // const x = board.create("slider", [[-4, 5], [2, 5], [domain[0], 0, domain[1]]], {
    //   name: "x",
    // });

    board.create(
      "functiongraph",
      [(x: number) => m * x + c, domain[0], domain[1]],
      { strokeWidth: 2, strokeColor: "#1f77b4" }
    );

    // Draw some sample points
    for (let xi = domain[0]; xi <= domain[1]; xi++) {
      const yi = m * xi + c;
      board.create("point", [xi, yi], {
        name: `(${xi}, ${yi})`,
        size: 3,
        fixed: true,
        label: { fontSize: 12 },
      });
    }

    return () => {
      JXG.JSXGraph.freeBoard(board);
    };
  }, [data]);

  return <div ref={boxRef} className="w-full h-[300px] rounded-md border border-gray-300 bg-white" />;
}
