/* eslint-disable*/
import { useRef, useEffect } from "react";
import * as d3 from "d3";
import * as venn from "@upsetjs/venn.js";

// Type from @upsetjs/venn.js
type VennDatum = {
  sets: string[];
  size: number;
};

interface Props {
  sets: VennDatum[];
  width?: number;
  height?: number;
}

const VennThreeDiagram = ({ sets, width = 400, height = 400 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chart = venn.VennDiagram().width(width).height(height);
    const selection = d3.select(ref.current);

    // Clear previous render
    selection.selectAll("*").remove();

    // Cast is necessary because venn.js expects a more specific shape than what we pass
    (selection as unknown as d3.Selection<HTMLElement, unknown, null, undefined>)
      .datum(sets as unknown)
      .call(chart as unknown as (sel: d3.Selection<HTMLElement, unknown, null, undefined>) => void);

    selection
      .selectAll<SVGGElement, any>("g")
      .on("mouseenter", function (event, d) {
        console.log(event)
        venn.sortAreas(selection, d);
        selection
          .selectAll<SVGGElement, any>("g")
          .transition()
          .style("opacity", (p: any) =>
            p.sets.join() === d.sets.join() ? 1 : 0.3
          );
      })
      .on("mouseleave", () => {
        selection
          .selectAll<SVGGElement, any>("g")
          .transition()
          .style("opacity", 1);
      });
  }, [sets, width, height]);

  return <div ref={ref} className="mx-auto" />;
};

export default VennThreeDiagram;
